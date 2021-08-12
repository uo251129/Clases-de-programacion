//recibir una array por parametro y devolver la array 'inversa'.

function reverseArray (array) {
   var reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) { 
        reversedArray.push(array[i])
    }
    return reversedArray;
    
}

var result1 = reverseArray(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]) 
console.log(result1)


var result1 = reverseArray([1, 3, 5, 7, 11]) 
console.log(result1)


/*Write a JavaScript function that generates all combinations of a string. Go to the editor
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
while: w wh whi whil while h hi hil hile i il ile l le e 
array: a ar arr arra array r rr rra rray r ra ray a ay y 
*/

function combinationOfWords (word) {
    var combination = [];
    for (let i = 0; i < word.length; i++){
        for (let j = i; j < word.length; j++){
            combination.push(word.substring(i, j+1));
        }    
    }
    return combination;
}

var combination1 = combinationOfWords("dog")
console.log(combination1);


var combination1 = combinationOfWords("while")
console.log(combination1);

//exercise on duplicate removal




