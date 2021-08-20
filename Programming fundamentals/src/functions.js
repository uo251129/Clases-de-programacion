
function f0(x0, x1){
    var y = x0 + x1**2;
    
    return y;
}

var y = f0(2, 3);

console.log(y);


function lastElementOfArray(array){
    return array[array.length - 1];
}

var fruit = ['apple', 'banana', 'coconut', 'orange', 'strawberry'];

var lastFruit = lastElementOfArray(fruit)

console.log(lastFruit);




var clothesArray = []

function addClothes(clothes){
    console.log("What a nice " + clothes);
    clothesArray.push(clothes);
}

addClothes('jeans');
addClothes('T-shirt');
addClothes('shoes');
addClothes('boxers');
addClothes('scarf');

console.log(clothesArray);


function meanOfArray(array){
    var totalSum = 0;
    for(let element of array){
        totalSum += element;
    }
    var mean = totalSum / array.length;
    return mean;
}

var numberArray = [4, 2, 3, 1, 2, 2, 3, 24]

var avg = meanOfArray(numberArray);

console.log(avg);