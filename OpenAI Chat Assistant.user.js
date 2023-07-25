// ==UserScript==
// @name        OpenAI Chat Assistant
// @namespace   Violentmonkey Scripts
// @match       https://chat.openai.com/*
// @grant       none
// @version     1.0
// @description Keep input as 'w' when it's empty and click the button when it's enabled
// @author      OpenAI
// ==/UserScript==

function checkButtonAndAct() {
    const textarea = document.querySelector("#prompt-textarea");
    const button = document.querySelector("button[class*='absolute p-1 rounded-md']");

    if (textarea) {
        if (textarea.value.trim() === '') {
            textarea.value = 'w';
            // Dispatch 'input' event
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            // Dispatch 'keydown' event
            textarea.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
        }
        if (button && !button.disabled) {
            button.click();
        }
    }
}

// Checking every second
setInterval(checkButtonAndAct, 1000);
