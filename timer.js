const contenerDay = document.querySelector(".time-part.day .time");
const contenerHour = document.querySelector(".time-part.hours .time");
const contenerMinute = document.querySelector(".time-part.minutes .time");
const contenerSecond = document.querySelector(".time-part.seconds .time");

console.log(contenerDay);

const now = new Date().getTime();
const over = new Date(2019, 2, 8, 0, 0, 0, 0).getTime();
let diffrence = over - now;

const timer = () => {
    diffrence = diffrence - 1000;
    const day = Math.floor(diffrence / 1000 / 60 / 60 / 24);
    const hour = Math.floor(diffrence / 1000 / 60 / 60) % 24;
    const minute = Math.floor(diffrence / 1000 / 60) % 60;
    const second = Math.floor(diffrence / 1000) % 60;

    contenerDay.innerHTML = day;
    contenerHour.innerHTML = hour;
    contenerMinute.innerHTML = minute;
    contenerSecond.innerHTML = second;

}

setInterval(timer, 1000)