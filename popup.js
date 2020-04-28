// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {

    if (e.target.id == 'unresolved')
    {
        chrome.tabs.executeScript(null,
              {code:'followups = document.getElementsByClassName("clarifying_discussion clearFix");' +
                'for (i = 0; i < followups.length; i++) {' +
                'if (followups[i].className.valueOf() != "clarifying_discussion clearFix unresolved".valueOf()) {' +
                'document.getElementsByClassName("clarifying_discussion clearFix")[i].style.display = "none";' +
                '}' + 
                '}'
            });
    }
    else if (e.target.id == 'paginate')
    {
    	chrome.tabs.executeScript(null,
    		{code:
    			'button_host_top = document.getElementsByClassName("post_region_header clearFix")[1];' +
				'button_host_bottom = document.getElementsByClassName("compose_discussion")[0];' +
				'followups = document.getElementsByClassName("clarifying_discussion clearFix");' +
				'entries_per_page = 10;' +
				'num_buttons = Math.ceil(followups.length / entries_per_page);' +
				'for (i = num_buttons; i > 0; i--) {' +
				'  var btn_up = document.createElement("button");' +
				'  var btn_down = document.createElement("button");' +
				'  var t1 = document.createTextNode(i.toString());' +
				'  var t2 = document.createTextNode(i.toString());' +
				'  btn_up.appendChild(t1);' +
				'  btn_down.appendChild(t2);' +
				'  function paginate() {' +
				     // Button #i [1-indexed] hides everything that is out of the range [(i-1)*entries_per_page, i*entries_per_page - 1]
				     // E.g., button #1 hides all followups outside [0, 9]
				     // and button #2 hides all followups outside [10, 19]
				'    btnIdx = parseInt(this.innerText);' +
				'    for (j = 0; j < followups.length; j++) ' +
				'    { ' +
				'      if (followups[j].className.valueOf() != "clarifying_discussion clearFix unresolved".valueOf()) {' +
				'        if (((btnIdx-1)*entries_per_page <= j) && (j <= btnIdx*entries_per_page - 1)) {' +
				'          document.getElementsByClassName("clarifying_discussion clearFix")[j].style.display = "block"; ' +
				'        } else {' +
				'          document.getElementsByClassName("clarifying_discussion clearFix")[j].style.display = "none"; ' +
				'        }' +
				'      }' +
				'    }' +
				'  }' +
				'  btn_up.onclick = paginate;' +
				'  btn_down.onclick = paginate;' +
				'  button_host_top.insertAdjacentElement("afterend", btn_up);' +
				'  button_host_bottom.insertAdjacentElement("afterend", btn_down);' +
				'}'
    		})
    }
    else if (e.target.id == 'no-reply') 
    {
        chrome.tabs.executeScript(null,
        {code: 'all_replies = document.getElementsByClassName("all_replies");' +
            'for (i = 0; i < all_replies.length; i++) {' +
            'all_replies[i].style.display = "none";' +
            '}'
        });
    }
    else if (e.target.id == 'reset') 
    {
        chrome.tabs.executeScript(null,
        {code: 'all_replies = document.getElementsByClassName("all_replies");' +
            'for (i = 0; i < all_replies.length; i++) {' +
            'all_replies[i].style.display = "block";' +
            '}'
        });

        chrome.tabs.executeScript(null,
        {code: 'followups = document.getElementsByClassName("clarifying_discussion clearFix");' +
                'for (i = 0; i < followups.length; i++) {' +
                
                'document.getElementsByClassName("clarifying_discussion clearFix")[i].style.display = "block";' +
                
                '}'
        });

        chrome.tabs.executeScript(null,
        {code: 'all_replies = document.getElementsByClassName("discussion_replies existing_reply clearFix");' +
            'for (i = 0; i < all_replies.length; i++) {' + 
            'all_replies[i].style.display = "block";' +
            '}'
        });

    }
    else if (e.target.id == 'no-plus-one') 
    {
        chrome.tabs.executeScript(null,
        {code: 'all_replies = document.getElementsByClassName("discussion_replies existing_reply clearFix");' +
            'for (i = 0; i < all_replies.length; i++) {' + 
            'if (all_replies[i].getElementsByClassName("actual_reply_text post_region_text")[0].innerHTML == "<p>+1</p>") {' +
            'all_replies[i].style.display = "none";' +
            '}' +
            '}'
        });

        chrome.tabs.executeScript(null,
        {code: 'all_replies = document.getElementsByClassName("discussion_replies existing_reply clearFix");' +
            'for (i = 0; i < all_replies.length; i++) {' + 
            'if (all_replies[i].getElementsByClassName("actual_reply_text post_region_text")[0].innerHTML == "+1") {' +
            'all_replies[i].style.display = "none";' +
            '}' +
            '}'
        });

        chrome.tabs.executeScript(null,
        {code: 'all_replies = document.getElementsByClassName("discussion_replies existing_reply clearFix");' +
            'for (i = 0; i < all_replies.length; i++) {' + 
            'if (all_replies[i].getElementsByClassName("actual_reply_text post_region_text")[0].innerHTML == "<p>+1&nbsp;</p>") {' +
            'all_replies[i].style.display = "none";' +
            '}' +
            '}'
        });

        chrome.tabs.executeScript(null,
        {code: 'all_replies = document.getElementsByClassName("discussion_replies existing_reply clearFix");' +
            'for (i = 0; i < all_replies.length; i++) {' + 
            'if (all_replies[i].getElementsByClassName("actual_reply_text post_region_text")[0].innerHTML == "<p>+1</p>\\n<p>&nbsp;</p>") {' +
            'all_replies[i].style.display = "none";' +
            '}' +
            '}'
        });
    }



    
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
