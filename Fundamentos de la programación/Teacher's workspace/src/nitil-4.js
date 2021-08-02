//Creamos 3 bucles FOR que sean equivalentes a los bucles WHILE de nitil3.js



for (var number = 1; number <= 100;   number ++){
   
  console.log(number);
};

// Segundo




for (productos = 1; productos <= 1000, productos = 2 * productos;){    
    var arrayOfProducts = [];
    arrayOfProducts.push(productos);
}

console.log(arrayOfProducts);

//tercero
var arrayOfNumeritos = [];

while (productosADividir = 1000; productosADividir >= 1; productosADividir = productosADividir / 2;
    ){
    arrayOfNumeritos.push(productosADividir);
    
}

console.log(arrayOfNumeritos)


//Hacer la traza del bucle FOR de este ejercicio:

while (productos <= 1000){    
    arrayOfProducts.push(productos);
    productos = 2 * productos;
    
}
console.log(arrayOfProducts);

//La traza sería la siguiente:

/* let productos = 0;
    productos < arrayOfProducts = false;

*/



//OPCIONAL hacer el bucle FOR equivalente al bucle WHILE anidado.

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


//Subir con el nombre de Weekend Homework!

