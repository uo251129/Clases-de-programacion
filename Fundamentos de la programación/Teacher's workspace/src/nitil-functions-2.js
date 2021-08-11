function sumOfAllNumbers(a , b) {
    var sum = a + b;
    return sum; 
}
 var resultOfSum = sumOfAllNumbers(3, 8);

console.log(resultOfSum);

var resultOfSum2 = sumOfAllNumbers(resultOfSum, 12);

console.log(resultOfSum2);

function decreasingSeries(start, end){
    var values = [];  
    for (let i = start; i >= end; i--) {
        values.push(i);
    }
    return values;
}

var values1 = decreasingSeries(8, 2);
console.log(values1);

var values2 = decreasingSeries(14, 3);
console.log(values2);

var values3 = decreasingSeries(20, 5);
console.log(values3);

/*series 2 parametros (start, end)
que devuelva la secuencia numerica entre start y end pero 
start puede ser menor o mayor que end. si es menor sera una serie creciente,
si es mayor, sera una serie decreciente */

function seriesOfNumbers ( start, end){
    var valores = [];
    if (start < end){ 
        for (let i = start; i <= end; i++){
            valores.push(i);
        }
    } else {  
        for (let i = start; i >= end; i--){
            valores.push(i);
        }

    }
    return valores;
}

resultados1 = seriesOfNumbers( 1, 5);
console.log(resultados1)

resultados1 = seriesOfNumbers( 5, 1);
console.log(resultados1)

/* Se definira una funcion con los siguientes parametros: 

1. boolean array

2. string arrays

donde ambos tienen la misma longitud

devuelve otra array con los elementos de string array cuya 
posicion sea true en boolean array.

*/

//example of merge using the spread operator.



function arraysCombined (booleanArray, stringArray) {
    var booleanArray = []
    var stringArray = []
    var arraysCombined = booleanArray.push(stringArray)
    console.log(arraysCombined)
}

var arraysCombined1 = arraysCombined([true, true, false, false, true, false]
    , ["a", "b", "c", "d", "e", "f"]);
console.log(arraysCombined1);

var arraysCombined2 = arraysCombined([true, false, true, false, false, false, true], 
    "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo");

console.log(arraysCombined2);

var arraysCombined3 = arraysCombined([false, false, true, true, true, false, true], 
    ["gato", "perro", "vaca", "murciélago", "cabra", "delfín", "ornitorrinco"]);

console.log(arraysCombined3);

