const dayjs = require("dayjs");

function getCurrentTime(){
return dayjs().format('D MMM, YYYY : HH:mm:ss');
}

export {getCurrentTime};