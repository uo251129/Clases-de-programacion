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

/*
 Write a JavaScript function that reverse a number.
 */
function reverseDigits(number){
    var stringNumber = '' + number;
    var resultNumberString = '';
    for (let i = stringNumber.length - 1; i >= 0; i--){
        resultNumberString = resultNumberString + stringNumber[i];
    }
    return parseInt(resultNumberString);
}

var number = 314159265359;
var reversedNumber = reverseDigits(number);
console.log(reversedNumber);


/*
    Take a number and add all its digits together, returning the sum
*/
function addAllDigits(number){
    var stringNumber = '' + number;
    var resultNumber = 0;
    for (let i = 0; i < stringNumber.length; i++){
        resultNumber = resultNumber + parseInt(stringNumber[i]);
    }
    return resultNumber;
}

var number2 = 123456; 
var sumOfDigits = addAllDigits(number2);
console.log(sumOfDigits);   


/*
    Write a JavaScript function that checks whether a passed string is palindrome or not?
    A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
function isPalindrome(word){
    word = word.toLowerCase();
    word = word.replace(/ /g, '');
    var reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord = reversedWord + word[i];
    }
    return word == reversedWord;
}

var word1 = 'nurses run';
// 'NUR SESRUN'
var isWord1Palindrome = isPalindrome(word1);
console.log(isWord1Palindrome);