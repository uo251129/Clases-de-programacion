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


