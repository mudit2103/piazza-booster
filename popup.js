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
