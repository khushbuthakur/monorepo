const dayjs = require("dayjs");
let timerId;

function getCurrentTime() {
    return dayjs().format('D MMM, YYYY : HH:mm:ss');
}

function stopTimer() {
    clearInterval(timerId);
}

let timer = setInterval(() => (dayjs().format('D MMM, YYYY : HH:mm:ss', 1000)));

        export {
            getCurrentTime,
            stopTimer,
            timer
        };