var numbers = 8;
var mensaje = "Hola mundo!"
var booleanVar = 0;
//false
var floatVar = 3.14;
var arrayOfColors = ["blue", "red", "orange", "yellow", "black"]
console.log(numbers);
console.log(mensaje);
console.log(arrayOfColors[2]);
arrayOfColors[3] = 'grey';
console.log(arrayOfColors);
arrayOfColors[1] = 'purple';
console.log(arrayOfColors);
arrayOfColors.push('white');
console.log(arrayOfColors);
arrayOfColors.push('dark-blue');
console.log(arrayOfColors);
arrayOfColors.splice(1,1);
console.log(arrayOfColors);
// borro en una sola linea 3 4 5 elementos

arrayOfColors.splice(2,3);
console.log(arrayOfColors);

//defino una nueva variable de tipo objeto

var warrior = {level: 1 , name: 'Luis', height: 2.20, weapon: 'Sword'}
console.log(warrior['name']);
console.log(warrior['weapon']);
//subimos de nivel al champ
warrior['level'] = 2;
console.log(warrior);
//cambiamos su weapon por un arco
warrior['weapon'] = 'Bow'
console.log(warrior);
//añadir un nuevo atributo (pet) al objeto

warrior['pet'] = 'Cat';

console.log(warrior);

//Defino una array que se llama equipo
var mage = {name: 'Johnny', level: 1, height: 1.9, weapon: 'rod'};
var healer = {name: 'Xaume', level: 2, height: 1.8, pet:'zubat'};
var squire = {name: 'Juanjo', level: 1, height: 1.65}

var team = [warrior, mage, healer, squire];
console.log(team);
//Johnny sube de nivel a nivel 2

mage['level'] = 2;

console.log(team)

healer['weapon'] = 'Wand';

console.log(team);

team.splice(3,1)

console.log(team)