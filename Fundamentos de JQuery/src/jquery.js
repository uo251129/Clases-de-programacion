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
    countdownInterval = setInterval(decreaseCount, 1000);
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
    countsUp = setInterval(increaseCount, 1000)          
}




//Cuando la cuenta atras llegue a cero habra un alert que ponga boom.

//Añade un boton que sume 5min a la cuenta atras.

//Boton que reste tiempo al lado de custom time.

//Crear un stop en el numero de imput donde la cuenta se detendra.