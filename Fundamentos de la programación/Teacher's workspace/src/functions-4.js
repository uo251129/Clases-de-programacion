/*
Haz una función 'removeDuplicates' que reciba una array, y devuelva la misma array sin elementos duplicados.

Ejemplos:
Caso1: ['red', 'yellow', 'blue', 'yellow', 'red', brown']
debería devolver ['red', 'yellow', 'blue', brown']

Caso2: [1, 3, 5, 1, 2, 5, 7, 1]
Debería devolver [1, 3, 5, 2, 7]
*/

function removeDuplicate(array){
    // We define the array that we are going to return
    var noDuplicatesArray = []
    // Now, we check for each element of the array if they are duplicated or not
    for (let element of array){
        // Let's believe, at the beginning, that they are in fact not duplicated
        var isTheElementDuplicated = false;
        // And then let's check each element of the returning array to see if any of them is equal to the element that we
        // are trying to insert
        for (let nonDuplicatedElement of noDuplicatesArray){
            // Let's compare the two elements!
            if (element == nonDuplicatedElement){
                // If the two elements is equal, then the element IS duplicated
                isTheElementDuplicated = true;
                break;
            }
        }
        // Only insert the elements that are not duplicated!
        if(isTheElementDuplicated == false){
            noDuplicatesArray.push(element);
        }
    }
    return noDuplicatesArray;
}

var testArray1 = ['red', 'yellow', 'blue', 'yellow', 'red', 'brown']
var resultArray1 = removeDuplicate(testArray1);
console.log(resultArray1);

var testArray2 =  [1, 3, 5, 1, 2, 5, 7, 1]
var resultArray2 = removeDuplicate(testArray2);
console.log(resultArray2);


/*
    Haz una función 'findPositionInArray' que reciba un array y un elemento, y devuelva la posición del elemento dentro 
    de la array

    Ejemplos:
    Caso1: array ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"], y elemento "jueves"
    Debería devolver 3, ya que jueves está en el índice 3

    Caso 2: array ["a", "b", "c", "d", "e", "f", "h"] y elemento "f"
    Debería devolver 5, ya que F está en el índice 5
*/

function findPositionInArray(array, element){
    for (let i = 0; i < array.length; i++){
        if (array[i] == element){
            return i;
        }
    }
    return -1;
}

var testArray3 =  ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
var resultArray3 = findPositionInArray(testArray3, "jueves");
console.log(resultArray3);

var testArray4 =  ["a", "b", "c", "d", "e", "f", "h"]
var resultArray4 = findPositionInArray(testArray4, "f");
console.log(resultArray4);


/*
    Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
    Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and 
    itself.
*/

function isPrime(number){
    for (let i = 2; i < Math.ceil(number/2); i++){
        if (number % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(539));

/*
    Write a JavaScript function which returns the n rows by n columns identity matrix
*/

function identityMatrix(matrixSize){
    var resultMatrix = [];
    for (let i = 0; i < matrixSize; i++){
        var row = [];
        for (let j = 0; j < matrixSize; j++){
            row.push(0);
        }
        row[i] = 1;
        resultMatrix.push(row);
    }
    return resultMatrix;
}

console.log(identityMatrix(10));


/*
    Function that returns the lowest number in an array
*/

function minNumber(array){
    var minimum = array[0];
    for(let number of array){
        if (number < minimum){
            minimum = number;
        }
    }
    return minimum;
}

console.log(minNumber([1, -13, 4, 8, 5, -15, 24]))