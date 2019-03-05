"use strict";

var counter = function counter() {
    var contenerDay = document.querySelector(".time-part.day .time");
    var contenerHour = document.querySelector(".time-part.hours .time");
    var contenerMinute = document.querySelector(".time-part.minutes .time");
    var contenerSecond = document.querySelector(".time-part.seconds .time");

    var now = new Date().getTime();
    var over = new Date(2019, 2, 8, 0, 0, 0, 0).getTime();
    var diffrence = over - now;
    var index = null;

    var timer = function timer() {
        diffrence = diffrence - 1000;
        var day = Math.floor(diffrence / 1000 / 60 / 60 / 24);
        var hour = Math.floor(diffrence / 1000 / 60 / 60) % 24;
        var minute = Math.floor(diffrence / 1000 / 60) % 60;
        var second = Math.floor(diffrence / 1000) % 60;
        if (diffrence < 1000) {
            contenerDay.innerHTML = 0;
            contenerHour.innerHTML = 0;
            contenerMinute.innerHTML = 0;
            contenerSecond.innerHTML = 0;
            clearInterval(index);
        }
        contenerDay.innerHTML = day;
        contenerHour.innerHTML = hour;
        contenerMinute.innerHTML = minute;
        contenerSecond.innerHTML = second;
    };
    if (diffrence > 0) {
        index = setInterval(timer, 1000);
    }
};

counter();
