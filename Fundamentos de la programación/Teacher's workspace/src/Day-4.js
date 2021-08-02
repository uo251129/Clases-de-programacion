function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}




var simulationResults = [];

for (let experimentCount = 0; experimentCount < 1000; experimentCount++){

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

} 

console.log(simulationResults);

var totalSum = 0;

for (let simulation of simulationResults){
    totalSum += simulation.length;
}

var meanLength = totalSum / simulationResults.length

console.log("The mean is: " + meanLength);



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
