let dayEl = document.getElementById("days")
let hoursEl = document.getElementById("hours")
let minutesEl = document.getElementById("minutes")
let secondsEl = document.getElementById("seconds")

function updateTIme(){
    let currentYear = new Date().getFullYear()
    let newYear = new Date(`Januaary 1 ${currentYear+1} 00:00:00`)
    let currentDate = new Date() 
    let diff = newYear - currentDate 
    
    let days = Math.floor(diff/1000/60/60/24);
    let Hours = Math.floor((diff/1000/60/60)%24); 
    let minutes = Math.floor((diff/1000/60)%60); 
    let seconds = Math.floor((diff/1000)%60); 
    
    dayEl.textContent=days<10?"0"+days:days;
    hoursEl.textContent=Hours <10?"0"+Hours:Hours;
    minutesEl.textContent=minutes <10?"0"+minutes:minutes;
    secondsEl.textContent=seconds<10?"0"+seconds:seconds;
}

setInterval(updateTIme,1000)