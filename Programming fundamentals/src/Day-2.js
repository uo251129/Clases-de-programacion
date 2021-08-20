var integer = 24;


var a = 4;
var b = 5;

// Operadores de comparación
var moreThan = a > b; 
var lessThan = a < b;
var moeThan = a >= b;
var loeThan = a <= b;
var equalThan = a == b;
var strictEqualThan = a === b;
var notEqualThan = a != b;


var c = true;
var d = false;

// Operadores lógico (técnicamente los anteriores también son operadores lógicos)
var andOperator = c && d
var orOperator = c || d
var notOperator = !c // Equivale a poner "c == false"
var moreComplexNotOperator = !(c && d)
var xorOperator = c ^ d // Uno de los dos, y sólo uno, es verdad 

var complexExpression = (a > b && !c) || (b == a && d) || (b > a && c)

// The prior example is equivalent to writing the following:
var expressionA = (a > b && !c)
var expressionB = (b == a && d)
var expressionC = (b > a && c)

var finalExpression = expressionA || expressionB || expressionC

console.log(finalExpression)


//HORA DE ESTUDIAR LAS CONDICIONALES!
if (true){
    console.log("This will be printed in the console!")
}

if (false){
    console.log("This will NOT be printed in the console! And that makes me sad :(")
} else {
    console.log("But this WILL be printed!");
}

var expression = true;

// Those two are equivalent:

if (expression){
    // DO SOMETHING
} else {
    // DO SOMETHING ELSE
}

if (expression){
    // DO SOMETHING
}

if (!expression){
    // DO SOMETHING ELSE
}


// Chaining if's together...

var number;

if (expressionA){
    number = 1;
} else if (expressionB){
    number = 2;
} else if (expressionC){
    number = 3;
} else {
    number = 4;
}

console.log(number);




var primerosPlatos = ['Huevos rotos', 'Arroz meloso', 'Croquetas', 'Melón con jamón'];
var segundosPlatos = ['Paella', 'Entrecot', 'Atún encebollado', 'Hamburguesa'];
var postres = ['Cheesecake', 'Gofres', 'Brownie', 'Helado'];

var eleccionDelCliente = [getRandomInt(0, primerosPlatos.length), 
                            getRandomInt(0, segundosPlatos.length), 
                            getRandomInt(0, postres.length)];

var primerPlatoCliente = primerosPlatos[eleccionDelCliente[0]]
var segundoPlatoCliente = segundosPlatos[eleccionDelCliente[1]]
var postreCliente = postres[eleccionDelCliente[2]]

console.log("El cliente ha pedido " + primerPlatoCliente + ", " + segundoPlatoCliente + " y " + postreCliente);
console.log("Bon appetit!");

//El cliente ha pedido entrecot o hamburguesa
//El cliente ha pedido entrecot o el cliente ha pedido hamburguesa
if (segundoPlatoCliente == "Entrecot" || segundoPlatoCliente == "Hamburguesa"){
    console.log("¿Quieres acompañar su " + segundoPlatoCliente + " con patatas o ensalada?");
} else {
    console.log("¿Quiere acompañar su plato con un poco de pan?");
}