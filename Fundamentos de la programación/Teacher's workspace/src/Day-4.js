function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


var experimentCount = 0;

var simulationResults = [];


while(experimentCount < 1000){

    var count = 0;
    condition = true;

    var singleSimulationResults = [];

    while(condition) {
        singleSimulationResults.push(count);
        count++;
    
        if (getRandomInt(0, 5) == 4){
            condition = false;
        } 
    }

    simulationResults.push(singleSimulationResults);

    experimentCount++;
} 

// EXAMPLE OF EQUIVALENT FOR LOOP AND WHILE LOOP

for (let i = 0; i < 10; i++){
}

var i = 0;

while (i < 10){
    i++;
}

// EXAMPLE OF EQUIVALENT FOR LOOP AND FOR EACH LOOP

var colorArray = ['red', 'white', 'gray', 'black', 'yellow'];

for (color of colorArray){
    console.log(color);
}

for (let i = 0; i < colorArray.length; i++){
    console.log(colorArray[i]);
}
