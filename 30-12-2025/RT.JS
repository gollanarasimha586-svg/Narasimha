let totalSeconds = 300; 
let timer;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");

function updateTime(){

let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

if(minutes < 10){
minutes = "0" + minutes;
}

display.textContent = minutes + ":" + seconds;

}

startBtn.addEventListener("click", function(){

if(timer){
return;
}

timer = setInterval(function(){

if(totalSeconds <= 0){
clearInterval(timer);
alert("Time Finished");
return;
}

totalSeconds--;
updateTime();

},1000);

});

updateTime();