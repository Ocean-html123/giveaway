const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

const giveaway = document.querySelector('.giveaway h4');
const must = document.querySelector('.must');
const deadline = document.querySelector('.deadline')

let oceanDate = new Date();
let oceanYear = oceanDate.getFullYear();
let oceanMonth = oceanDate.getMonth();
let oceanDay = oceanDate.getDay();

const futureDate = new Date(oceanYear, oceanMonth, oceanDay + 13, 13, 30);
const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[5]
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
let weekday = futureDate.getDay();
weekday = weekdays[0]
giveaway.textContent = `Giveaway ends on ${weekday}, ${date}, ${month}, ${year}
, ${hour}:${mins}pm`


const item = document.querySelectorAll('.border');
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const futureTime = futureDate.getTime()


function getRemainingTime () {
    const today = new Date().getTime();
    const t = futureTime - today 

let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let Minutes = Math.floor((t % oneHour) / oneMinute); 
let seconds = Math.floor((t % oneMinute) / 1000);

const values = [days, hours, Minutes, seconds];
function addTime (item){
    if(item < 10){
        return(item = `0${item}`);
    }
    return item;
}

item.forEach(function(item, index){
    item.innerHTML = addTime(values[index]);
})
if(t < 0){
clearInterval(countDown);
deadline.innerHTML = `<h4 class= "too late">Sorry this giveaway has ended</h4>`
}
}
let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime();