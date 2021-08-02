function sequence (number) {
    var array = []; 
    for(let i = 0; i <= number; i++){
        array.push(i);    
    }
    return array;
}

var array5 = sequence(5);
console.log(array5);

var array8 = sequence(8);
console.log(array8);


//nuevo ejercico
function sequence2 (min , max){
    var array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);   
    }
    return array;
}

var result1 = sequence2(3,7)
console.log(result1);

var result2 = sequence2(8,14)
console.log(result2);

var result3 = sequence2(5,12)
console.log(result3);

function sequence3 ( min, max, step){
    var array = [];
    for (let i = min; i <= max; i = i + step){
        array.push(i);
    }
    return array;
}  

var result4 = sequence3(2,5,1)
console.log(result4)

var result5 = sequence3(1,10,2)
console.log(result5)

var result6 = sequence3(5,30,3)
console.log(result6)










