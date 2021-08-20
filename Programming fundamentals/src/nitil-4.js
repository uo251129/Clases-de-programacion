//Creamos 3 bucles FOR que sean equivalentes a los bucles WHILE de nitil3.js

for (let number = 1; number <= 100; number ++){
    console.log(number + " elefante se balanceaba sobre la tela de una araña!") 
};

// Segundo


var arrayOfProducts = []; 

for (let productos = 1; productos <= 1000; productos = 2 * productos){   
    arrayOfProducts.push(productos);
}

console.log(arrayOfProducts);

//tercero
var arrayOfNumeritos = [];

for (let productosADividir = 1000; productosADividir >= 1; productosADividir = productosADividir / 2){
    arrayOfNumeritos.push(productosADividir);
}

console.log(arrayOfNumeritos)


//OPCIONAL hacer el bucle FOR equivalente al bucle WHILE anidado.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



var simulationResults = [];


for(let experimentCount = 0; experimentCount < 1000; experimentCount++){

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


//Subir con el nombre de Weekend Homework!

