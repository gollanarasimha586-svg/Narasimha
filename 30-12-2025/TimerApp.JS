let seconds = 0;
let minutes = 0;
let hours = 0;

function runTimer(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText = h + ":" + m + ":" + s;

}

setInterval(runTimer,1000);


function showDateDay(){

    let today = new Date();

    let date = today.toLocaleDateString();
    let day = today.toLocaleDateString('en-US',{weekday:'long'});

    document.getElementById("date").innerText = date;
    document.getElementById("day").innerText = day;

}

showDateDay();