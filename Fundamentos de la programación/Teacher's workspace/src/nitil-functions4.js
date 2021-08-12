// max number recibe el numero maximo y devuelve el numero mas grande de la array.


function maxNumber (array){
    var maximum = array[0];
    for (let number of array){
        if (number > maximum){
            maximum = number;    
        }
    }
    return maximum;
}

case1 = [-20, -17, -15, -9, -6, -5, -4, -3, 15, 18]     
case2 = [-18, -1, -8, 2, -7, 3, -14, 6, 16, 4]
case3 = [9, 8, -3, 6, 10, 18, -5, 19, 12, -7]

var result1 =  maxNumber (case1);
console.log(result1);

var result2 = maxNumber (case2);
console.log(result2);

var result3 = maxNumber (case3);
console.log(result3);



