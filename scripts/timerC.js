
const counter = () => {
    const contenerDay = document.querySelector(".time-part.day .time");
    const contenerHour = document.querySelector(".time-part.hours .time");
    const contenerMinute = document.querySelector(".time-part.minutes .time");
    const contenerSecond = document.querySelector(".time-part.seconds .time");



    const now = new Date().getTime();
    const over = new Date(2019, 2, 8, 0, 0, 0, 0).getTime();
    let diffrence = over - now;
    let index = null;

    const timer = () => {
        diffrence = diffrence - 1000;
        const day = Math.floor(diffrence / 1000 / 60 / 60 / 24);
        const hour = Math.floor(diffrence / 1000 / 60 / 60) % 24;
        const minute = Math.floor(diffrence / 1000 / 60) % 60;
        const second = Math.floor(diffrence / 1000) % 60;
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


    }
    if (diffrence > 0) {
        index = setInterval(timer, 1000);
    }


};

counter();