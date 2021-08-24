var counter = 0;
var countsUp;

function increaseCount(){
    counter++;
    $("#clock").html(counter);
}

function countUp(){
    if (countsUp){
        $("#clock").html(counter);
        clearInterval(countsUp);
    } 

    countsUp = setInterval(increaseCount, 1000);          
}