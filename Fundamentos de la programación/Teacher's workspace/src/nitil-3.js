// Ejemplo del bucle while
var number = 1;

while (number <= 100){
   //console.log(number + " elefante se balanceaba sobre la tela de una araña!") 
    number ++
};

//Ejemplo de bucle donde imprimimos por pantalla los primeros  productos de 2 menores que 1000.

var productos = 1;
var arrayOfProducts = [];
//fijarme bien en el orden de las lineas de codigo, aqui estabamos 
//intentando realizar los cambios y console.log despues, ese ha sido el error.
while (productos <= 1000){    
    arrayOfProducts.push(productos);
    productos = 2 * productos;
    
}

console.log(arrayOfProducts);

