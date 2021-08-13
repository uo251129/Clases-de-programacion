var counter = 0;
var countdownInterval;

function increaseCount(){
    counter++;
    $("#counter").html(counter);

    if (counter % 10 == 0){
        console.log("Your counter has reached " + counter);
    }
}

function reset(){
    counter = 0;
    $("#counter").html(counter);
}

function decreaseCount(){
    counter--;
    $("#counter").html(counter);
    if(counter == 0){
        clearInterval(countdownInterval);
    }
}

function countdown(){
    countdownInterval = setInterval(decreaseCount, 1000);
}