/* Se definira una funcion con los siguientes parametros: 

1. boolean array

2. string arrays

donde ambos tienen la misma longitud

devuelve otra array con los elementos de string array cuya 
posicion sea true en boolean array.

*/


function exerciseFunction1(booleanArray, stringArray){
    var resultArray = []
    for (let i = 0; i < booleanArray.length; i++){
        var booleanVar = booleanArray[i];
        var stringVar = stringArray[i];
        if (booleanVar){
            resultArray.push(stringVar);
        }
    }
    return resultArray;
}   

var arraysCombined1 = exerciseFunction1([true, true, false, false, true, false]
    , ["a", "b", "c", "d", "e", "f"]);
console.log(arraysCombined1);

var arraysCombined2 = exerciseFunction1([true, false, true, false, false, false, true], 
    ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]);

console.log(arraysCombined2);

var arraysCombined3 = exerciseFunction1([false, false, true, true, true, false, true], 
    ["gato", "perro", "vaca", "murciélago", "cabra", "delfín", "ornitorrinco"]); 
console.log(arraysCombined3);