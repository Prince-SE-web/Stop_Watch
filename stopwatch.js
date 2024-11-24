let secondsElapsed = 0;
let interval = 0;

const time = document.querySelector("#time");
const start = document.querySelector("#start");
const stop1 = document.querySelector("#stop");
const reset = document.querySelector("#reset");

function increaseTime(){
  secondsElapsed++;
  displayTime();
}

function padString(value){
  return String(value).padStart(2,'0');
}

function displayTime(){
  const hours = Math.floor(secondsElapsed / 3600);
  const minutes = Math.floor((secondsElapsed % 3600)/60); 
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padString(hours)}:${padString(minutes)}:${padString(seconds)}`;
}

function startTime(){
  if(!interval){
    interval = setInterval(increaseTime,1);
  }
}

function stopTime(){
  clearInterval(interval);
  interval = null;
}

function resetTime(){
  stopTime();
  secondsElapsed = 0;
  displayTime();
}

start.addEventListener("click",startTime);
stop1.addEventListener("click",stopTime);
reset.addEventListener("click",resetTime);