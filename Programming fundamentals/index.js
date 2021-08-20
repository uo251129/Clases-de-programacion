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

////// RECORDATORIO DÍA 2


// Boolean
var loQueQuieras = true;

// Strings
var eligeTuElNombre = "This is a string"

// Numbers
var numeritos = 9;

// Array
var listaDeLaCompra = ["Pan", "Maiz", "Coca-Cola", "Chorizo"];
console.log(listaDeLaCompra[2]);

listaDeLaCompra[0] = "Vino";
console.log(listaDeLaCompra);

listaDeLaCompra.push("Papel higiénico");
console.log(listaDeLaCompra)

listaDeLaCompra.splice(3, 1);
console.log(listaDeLaCompra)

// Objects
var plant = {especie: "tulipán", altura: 0.40, riegos: 2, esBonita: true};
console.log(plant["esBonita"]);
console.log(plant["especie"]);

plant["riegos"] = 3;
console.log(plant);

plant["color"] = "verde";
console.log(plant);

delete plant['altura'];
console.log(plant);
