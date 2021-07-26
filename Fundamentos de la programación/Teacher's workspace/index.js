var integerVar = 6;
var floatVar = 34.6;
var stringVar = "Hola mundo!";
var booleanVar = true;

// Definir una array
var arrayVar = ['a', 'b', 'c', 'd', 'e'];

// Acceder a una array
arrayVar[3];

var veryCoolVar = arrayVar[3];
console.log(arrayVar[3])

// Modificar un array

// INCORRECTO arrayVar = ['a', 'b', 'c', 'f', 'e'];

arrayVar[3] = 'f';

// ["a", "b", "c", "f", "e"]

arrayVar[2] = 'j';

arrayVar.push('r');

console.log(arrayVar);
/*aqui borramos a traves de dos parametros, el primero hace referencia
el punto de la array donde vamos a borrar o modificar, el segundo hace
referencia a cuantos valores vamos a borrar */
arrayVar.splice(1, 1);

console.log(arrayVar);

var objectVar = { name:"Luis", surname:"Valls", gender:'Male' }
//como acceder al atributo de un objeto
objectVar['name'];
objectVar['gender'];

objectVar['name'] = 'Nitil';
objectVar['BestFriend'] = 'Óderis'

