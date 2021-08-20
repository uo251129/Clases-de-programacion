//Aplicación Covid-19

var temperatura = 39.2;
var tos = false;
var resultadoPcr = false;
var dolorTorax = true;
var difilcultadesRespiratorias = false;
var perdidaOlfato = true;
var perdidaGusto = true;
var asma = true;
var mucosidades = true;

var personaFiebre = temperatura > 37.5;
//asignamos una expresion a persona fiebre
console.log(personaFiebre);

var bronquitis = (tos && difilcultadesRespiratorias) 
                    || (dolorTorax && asma);
console.log(bronquitis);

var pulmonia = difilcultadesRespiratorias && mucosidades;
console.log(pulmonia);

var estreptococos = mucosidades && personaFiebre && tos;
console.log(estreptococos);

var covid19 = (resultadoPcr) || (personaFiebre && bronquitis) ||
                 (personaFiebre && difilcultadesRespiratorias && tos);       

var covid19a = resultadoPcr;
var covid19b = personaFiebre && bronquitis;
var covid19c = personaFiebre && difilcultadesRespiratorias && tos;

var covid19Equivalencia = covid19a || covid19b || covid19c;

console.log(covid19);

//Condicionales 

if (tos) {
    console.log("cough-cough");
} else {
    console.log("What a fantastic day");
}

if (personaFiebre) {
    console.log("Here, take some ibuprofenos");
} else {
    console.log("You are cold");
}
// EJERCICIO 2
if (difilcultadesRespiratorias) {
    console.log("You are breath-taking!");
} else if (asma) {
    console.log("You need a ventholin");
} else {
    console.log("What a nice pair of lungs!");
}
// ejercicio 3

if (tos && mucosidades) {
    console.log("Take these antibiotics");
} else {
    console.log("You're good to go!");
}

if (temperatura <= 34) {
    console.log("Bro, you're chilling!");
}

if (tos && !bronquitis) {
    console.log("You got something on your throat");
}

if (covid19) {
    alert("WARNING YOU HAVE COVID-19!!!")
} else {
    alert("Go get vaccinated!")
}

