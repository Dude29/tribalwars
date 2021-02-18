// ==UserScript==
// @name         Auto play assault event
// @version      0.1
// @description  Plays the castle assault event by itself by automatically sending mercenaries to one of the battlefronts
// @namespace    http://tampermonkey.net/
// @author       https://github.com/Dude29
// @downloadURL https://raw.githubusercontent.com/dude29/tribalwars/master/UserScript/EventAssault.user.js
// @updateURL   https://raw.githubusercontent.com/dude29/tribalwars/master/UserScript/EventAssault.user.js
// @match        https://*/game.php?*&screen=event_assault
// @grant        none
// @run-at document-end
// ==/UserScript==


// Plays the castle assault event by itself by automatically sending one mercenary 
// to two of the battlefronts if not already there
// and all the others mercenaries to the configured main battlefront


let btn;
setInterval(function() {
    btn = document.querySelector('#event_area_naval > div:nth-child(3) > a:nth-child(1)');
    if (btn && btn.style.display != "none" && !btn.classList.contains('btn-disabled')) {
        btn.click();
    }
}, 5000);
