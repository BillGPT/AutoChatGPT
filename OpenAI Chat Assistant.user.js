// ==UserScript==
// @name        OpenAI Chat Assistant
// @namespace   Violentmonkey Scripts
// @match       https://chat.openai.com/*
// @grant       none
// @version     0.2.0
// @description Keep input as 'w' when it's empty and click the button when it's enabled
// @author      OpenAI
// ==/UserScript==

// Add a checkbox for enabling or disabling the script
const controlDiv = document.createElement('div');
controlDiv.innerHTML = '<label><input id="autoResponderSwitch" type="checkbox" />启用自动回复</label>';
controlDiv.style.position = 'fixed';
controlDiv.style.bottom = '20px';
controlDiv.style.right = '20px';
document.body.appendChild(controlDiv);

function checkButtonAndAct() {
    // Only execute the script when the checkbox is checked
    if (!document.querySelector("#autoResponderSwitch").checked) {
        return;
    }

    const textarea = document.querySelector("#prompt-textarea");
    const button = document.querySelector("button[class*='absolute p-1 rounded-md']");

    if (textarea) {
        if (textarea.value.trim() === '') {
            textarea.value = 'w';
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            textarea.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
        }
        if (button && !button.disabled) {
            button.click();
        }
    }
}

// Checking every second
setInterval(checkButtonAndAct, 1000);
