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




function maxMin (array){
   var maximum = array[0];                    
   var minimum = array[0];
    for(let number of array){
        if (number > maximum){
            maximum = number;  
        
        }
        if  (number < minimum) {
            minimum = number;
        }
    } 
    
    arrayOfMaxMin = [minimum ,maximum];
    return arrayOfMaxMin;
}

example1 = [-10, 19, 3, -9, -15, -5, -16, 15, 18, 2]
example2 = [-2, 7, -3, 2, 18, -11, 4, -14, 5, -13]
example3 =  [-4, -17, 5, -7, 20, 8, 15, 1, 17, 13]

var test1 = maxMin(example1)
var test2 = maxMin(example2)
var test3 = maxMin(example3)
console.log(test1)
console.log(test2)
console.log(test3)