var counter = 0;
var countsUp;


function increaseCount(){
    counter++;

    $("#clock").html(formatCode(counter));

}

function countUp(){
    if (countsUp){
        $("#clock").html(counter);
        clearInterval(countsUp);
    } 

    countsUp = setInterval(increaseCount, 1000);          
}

function formatCode(seconds){
    var hours = Math.floor(seconds/3600);
   var secondsLeft = seconds - (hours*3600);
    var min = Math.floor(secondsLeft/60);
    secondsLeft = secondsLeft - 60*min;
    if (min < 10){
        min = "0" + min;
    }
    if (secondsLeft < 10){
        secondsLeft = "0" + secondsLeft;
    }
    if ( hours < 10){
        hours = "0" + hours;
    }
    var clockString = hours + ":" + min + ":" + secondsLeft;  
    return clockString;
}
