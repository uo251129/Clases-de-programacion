var counter = 0;
var countdownInterval;
var countsUp;
var stopTime;

function increaseCount(){
    counter++;
    $("#counter").html(counter);
    if(counter == stopTime){
        clearInterval(countsUp);
        alert("You have reached " + stopTime + " seconds!")
    }
    if (counter % 10 == 0){
        console.log("Your counter has reached " + counter);
    }
}

function reset(){
    counter = 0;
    $("#counter").html(counter);
}

function decreaseCount(){
    if(counter <= 0){
        clearInterval(countdownInterval);
        alert("BOOM!")    
        return;
    }
    counter--;
    $("#counter").html(counter);

}

function countdown(){
   if (countdownInterval){
    clearInterval(countdownInterval);
   }

   var intervalSpeed = $("#timeSpeed").val();
   intervalSpeed = parseInt(intervalSpeed);

   countdownInterval = setInterval(decreaseCount, intervalSpeed);
}

function addFive(){
    counter += 300;
    
    $("#counter").html(counter);

    console.log("Nitil you have " + counter +  " seconds left");
}

function customTime(){
    var customizedTime = $("#timeAddition").val(); 
    customizedTime = parseInt(customizedTime);
   
    counter += customizedTime;
   
    $("#counter").html(counter);
    console.log(customizedTime)
    
}

function substractTime(){
    var customizedTime = $("#timeAddition").val(); 
    customizedTime = parseInt(customizedTime);
   
    counter -= customizedTime;
   
    $("#counter").html(counter);
    console.log(customizedTime)
}

function countUp(){
    var customizedTime = $("#timeAddition").val(); 
    customizedTime = parseInt(customizedTime); 
    stopTime = customizedTime;

    if (countsUp){
        $("#counter").html(counter);
        clearInterval(countsUp);
    } 

    var intervalSpeed = $("#timeSpeed").val();
    intervalSpeed = parseInt(intervalSpeed);

    countsUp = setInterval(increaseCount, intervalSpeed)          
}