'use strict';

const sound1 = new Audio("audio/zvuk-notyi-do.mp3");
const sound2 = new Audio("audio/zvuk-notyi-re.mp3");
const sound3 = new Audio("audio/zvuk-notyi-mi.mp3");
const sound4 = new Audio("audio/zvuk-notyi-fa.mp3");
const sound5 = new Audio("audio/zvuk-notyi-sol.mp3");
const sound6 = new Audio("audio/zvuk-notyi-lya.mp3");
const sound7 = new Audio("audio/zvuk-notyi-si.mp3");
const sound8 = new Audio("audio/zvuk-notyi-do-vo-vtoroy-oktave.mp3");

function play(e) {
    switch (e) {
        case "a":
        case "ф":
            sound1.play();
            break;
        case "s":
        case "і":
            sound2.play();
            break;
        case "d":
        case "в":
            sound3.play();
            break;
        case "f":
        case "а":
            sound4.play();
            break;
        case "g":
        case "п":
            sound5.play();
            break;
        case "h":
        case "р":
            sound6.play();
            break;
        case "j":
        case "о":
            sound7.play();
            break;
        case "k":
        case "л":
            sound8.play();
            break;
    }
}

document.addEventListener('keydown', function (e) {
    play(e.key);
    const notes = document.getElementById(`${e.key}`);
    notes.classList.toggle('active');
    setTimeout(function () {
       notes.classList.remove('active');
    }, 100)
 });
 document.querySelector('.notes').addEventListener("click", function (e) {
    play(e.target.id);
    const notes = document.getElementById(`${e.target.id}`);
    notes.classList.toggle('active');
    setTimeout(function () {
       notes.classList.remove('active');
    }, 100)
 });