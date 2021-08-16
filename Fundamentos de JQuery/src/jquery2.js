//revisar paso a paso la traza del ejercico//

function matrixOfProducts (xSize, ySize) {
   var matrix = [];
    for (let i = 0; i < xSize; i++) {
        var row = [];
        for (let j = 0; j < ySize; j++) {
            var element = i * j;
            row.push(element);   
            
        } 
        matrix.push(row);
    }
    return matrix;    
    
}

var result =  matrixOfProducts(8, 8);

console.log(result);

var result2 = matrixOfProducts(4, 12);

console.log(result2);

function matrixOfFractions (xSize, ySize) {
    var matrix = [];
     for (let i = 0; i < xSize; i++) {
         var row = [];
         for (let j = 0; j < ySize; j++) {
             var element = i / (j + 1);
             row.push(element);   
             
         } 
         matrix.push(row);
     }
     return matrix;
    }

    var result3 = matrixOfFractions(8, 8)
    console.log(result3)
    var result4 = matrixOfFractions(4, 12)
    console.log(result4)

    