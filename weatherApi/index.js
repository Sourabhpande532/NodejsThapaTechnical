

const curDate = document.getElementById("date");
const weatherCon = document.getElementById("weathercon");

const tempStatus = "{%tempStatus%}";

const getCurDay = ()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currenttime = new Date();
    let x = (weekday[currenttime.getDay()])
    return x;
}
// getCurDay();

const getcurrentTime = ()=>{

const mon = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var now = new Date();
var month = mon[now.getMonth()+1];
var date = now.getDate();

let hours = now.getHours();
let minutes = now.getMinutes();

let periods = "AM"
if (hours > 11){
    periods = "PM"
    if(hours > 12) hours -= 12; 
    // intentions of this hours -= 12 for not show in watch 13.30 exact show 1.30;
}

if (minutes < 10){
    minutes = "0" + minutes
}
// exact this one 10:05 not this 10.5

return ` ${month} ${date} | ${hours}:${minutes}${periods}`
}
curDate.innerHTML = getCurDay() + " |" + getcurrentTime();