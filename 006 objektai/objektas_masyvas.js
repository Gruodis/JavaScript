function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//     !!!!     Objekto kintamasis vadinamas = savybe, Objekto funkcija vadinama = metodu    !!!!

/////////////////////////////////////////// OBJEKAI //////////////////////////////////////////////////
//
// Objektas yra kompleksinis kintamasis
//
// objekto etiketele label uzrasome = object.label;
//
// console rusiuoja pagal abecele
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// deklaruojame objekta su dviem savybemis => name ir age.
const cat = {
    name: 'Pupulis', // string
    age: 11, // number
    bigLetters: null, // TS problems solved
    inceaseCatAge: null // TS problems solved
}
console.log(`obj cat: `, cat); // print object



// print Cat name in uppercase letters
cat.bigLetters = function () {
    console.log(`Uppercase this: `, this.name.toUpperCase());

}
cat.bigLetters() // cat.name is argument

// print Cat name in uppercase letters
cat.inceaseCatAge = function () {
    console.log(`icrease cat age by 1 this: `, this.age++);

}
cat.inceaseCatAge() // cat.name is argument

// print Cat name and "STRING" separated with " - ".
const stringFun = (a, b) => {
    console.log(`Arg and String: `, a + ' - ' + b); // print Cat name in uppercase letters

}
stringFun(cat.name, 'Miau');

// Make a Copy of object "cat"
// first method only used for specific reasons
let catCopy = {
    ...cat
};

catCopy.name = 'Leopoldas';
catCopy.age = 2;


console.log(`catCopy Name: `, catCopy.name); // print object
console.log(`catCopy name bigLetters: `,); // print object
catCopy.bigLetters()

// second method should be used instead of first

let catRainius = {
    name: 'Rainius',
    age: 2,
    inceaseCatAge: function () {
        console.log(`Icrease ${this.name} age by 1 year: `, ++this.age);
    },
    bigLetters: function () {
        console.log(`Cat ${this.name} Uppercase: `, this.name.toUpperCase());
    }

};

catRainius.bigLetters();
catRainius.inceaseCatAge();

///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// 1. UZDAVINYS ------------------------------
// sukurti Objekta "namas", jam priskirti stoga, stogui priskirti antena su STRING'u "Antena",
// ir stogui  dar Masyva Kaminas, kuriame bus 100 plytu isvardintu didejimo tvarka nuo Plyta Nr.: 1 iki Plyta Nr.: 100;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const namas = {};

namas.stogas = {};
namas.stogas.antena = 'Atena';
namas.stogas.kaminas = [];
namas.stogas.stoglangiai = [];
namas.siena = [];


// namas.stogas.anterna = {};

for (let i = 0; i < 100; i++) {

    // namas.stogas.kaminas[i] = 'Plyta NR.:' + (i + 1);
    namas.stogas.kaminas.push('Plyta Nr.: ' + (i + 1));

};

for (let i = 0; i < 4; i++) {

    // namas.stogas.kaminas[i] = 'Plyta NR.:' + (i + 1);
    namas.siena.push('Langas Nr.: ' + (i + 1));

};

for (let i = 0; i < 10; i++) {

    // namas.stogas.kaminas[i] = 'Plyta NR.:' + (i + 1);
    namas.stogas.stoglangiai.push('Stoglangis Nr.: ' + (i + 1));

};



console.log(namas);






///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//  2. UZDAVINYS ------------------------------
//  sukurti Objekta "Kvartalas 33", jame turi buti 33 objektai "namas", kuriu savybes:
//  namo nr., namo color, hasDog = tru arba false
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||




const color = ['red', 'green', 'blue', 'yellow'];
const dogNames = ['Bobas', 'Tuzikas', 'Kurmis', 'Buckis'];


let dogo = 0;

let colorNamex;

const kvartaslas33 = []

for (let i = 0; i < 33; i++) {
    // kvartaslas33[i] = { number: 0, spalva: '', hasDog: false, dogName: '' }; // uzrasymas pagal TypeScript taisykles: NUMBER, STRING, BOOLEAN.
    kvartaslas33[i] = {};
    kvartaslas33[i].number = i + 1; //NUMBER
    kvartaslas33[i].spalva = color[rand(0, color.length - 1)]; // STRING

    kvartaslas33[i].hasDog = !(rand(0, 1)); // su ! konvertuojam skaiciu 0 arba 1 i BOOLEAN (logini kintamaji)
    if (kvartaslas33[i].hasDog === true || kvartaslas33[i].spalva === 'yellow') {
        kvartaslas33[i].dogName = dogNames[rand(0, dogNames.length - 1)]; // STRING
        dogo++;
    }
};


// Skaiciuojam vienodu spalvu skaiciu Objekte:
const colorCount = { red: 0, green: 0, blue: 0, yellow: 0 };

for (i = 0; i < kvartaslas33.length; i++) {


    const colorC = kvartaslas33[i].spalva;
    // console.log(`Color Count:`, colorCount.red, colorCount[colorC])
    colorCount[colorC]++;


}

// Turedami vienodu spalvu skaiciu, su IF/ELSE atvaizduojam spalva su didziausiu skaiciumi:
let maxColor;

if (colorCount.red > colorCount.green && colorCount.red > colorCount.blue && colorCount.red > colorCount.yellow) {
    maxColor = `raudonos(${colorCount.red}) spalvos`
}
else if (colorCount.green > colorCount.red && colorCount.green > colorCount.blue && colorCount.green > colorCount.yellow) {
    maxColor = `zalios(${colorCount.green}) spalvos`
}
else if (colorCount.blue > colorCount.red && colorCount.blue > colorCount.red && colorCount.blue > colorCount.yellow) {
    maxColor = `melynos(${colorCount.blue}) spalvos`
}
else { maxColor = `geltonos(${colorCount.yellow}) spalvos` }


console.log(`Kvartale turime sunu: ${dogo}, 
Daugiausia turime ${maxColor} namu,
33 Namu Kvartalas:`, kvartaslas33);

// agregacija - duomenu bloko apibendrinimas