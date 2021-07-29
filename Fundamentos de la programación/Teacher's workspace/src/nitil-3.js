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
//primero tengo que utilizar el valor que estoy modificando y despues modificarlo!!!!!!
console.log(arrayOfProducts);

/*Define una array cuyo primer elemento sea el número 1000, y que sus siguientes elementos sean la mitad del anterior, tal que:
[1000, 500, 250...]
Todos los valores serán mayor que uno, de forma que se parará de añadir elementos a esta array cuando la siguiente división supondría un valor menor que uno.
Y luego imprime la array por consola */

var productosADividir = 1000;
var arrayOfNumeritos = [];

while (productosADividir >= 1){
    arrayOfNumeritos.push(productosADividir);
    productosADividir = productosADividir / 2;
}

console.log(arrayOfNumeritos)


  