function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/////////////////////////////////////////// JavaScript FUNKCIJA //////////////////////////////////////////////////
//
// 1. Fubkcija deklaruojama zodziu - function ir priskiriant jai varda(gali buti ir be vardo = anonymous). pvz. su vardu: "function sayHello() { something };". Funkija deklaruojama be "let" ar "const".
//    "anonymous" funkcija turi buti priskirta kintamajam pvz.: "let kintamasis = function(a, c, b) { something };"
//
// 2. Funkcijos skliaustuose rasomi parametrai pvz.: "function sayHello(parametras1, parametras2) {};", tai gali buti NUMBER, STRING, BOOLEAN, ARRAY, etc.
//
// 3. Parametrui butini argumentai, argumentai nurodomi iskvieciant funkcija pvz.: sayHello(argumentas8, argumentas9);
//    Argumentas deklaruojamas uz funkcijos ribu pvz.: "let argumentas8 = rand(1, 10);"
//
// 4. Funkcija argumentu reiksmes perduos parametrams pvz.: sayHello(argumentas8, argumentas9); ===> function sayHello( parametras1 = argumentas8, parametras2 = argumentas9) {};
//
// 5. RETURN grazina viena kintamaji is funkcinos ir ja uzbaigia.
//    Nors RETURN grazina tik viena kintamaji, tas kintamasis gali buti kompleksinis pvz. Masyvas su "n" reiksmiu. PVZ.: "function add(a, c, b) { return [a+3, b+3, c+3]}"
//    "if, else" salygu naudojimas su return ===> if(a > b) { return a = 'More'}; if(a = b) { return a = 'Equal'}; nenaudojam "ele if" ir "else",
//    nes "return", kaip ir "break", nutraukia tolimesni kodo vykdyma, todel "else if, else" yra pertekliniai.
//
// 6. Fubkcijos iskvietimas vykdomas nurodzius funkcijos varda, skliaustus ir argumentus juose pvz.: "sayHello(argumentas8, argumentas9);".
//
//     !!!!     Objekto kintamasis vadinamas = savybe, Objekto funkcija vadinama = metodu    !!!!
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||




/////////////////////////////////////////// Uzdavinys Anonimines Fubkcijos JavaScript //////////////////////////////////////////////////
//
// 2. Sukurti Objekta "baras", kuriame yra savybes alausBravoras:'Bravoras' kedes:rand(5, 20);
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let bravorai = ['Svyturys', 'Kalnapilis', 'Utenos'];
let grupes = ['PinkFloid', 'Led Zeppelin', 'Metallica'];
let randGrupe = grupes[rand(0, 2)];

const baras = {
    alausBravoras: bravorai[rand(0, 2)],
    kedes: rand(5, 20)
};

(function (d) {
    d = (baras.daina = randGrupe);
})();

baras.kdd = function () {
    // console.log(`Turime kedziu: `, baras.kedes); // jeigu naudosime Objekto "baras" kopija, kitam Objektui sukurti, 
    // tuomet kedziu kiekis abiejuose Objektuose "baras.kdd()" ir "baras2.kdd()" bus vienodas.
    console.log(`Turime kedziu: `, this.kedes);
};

/////////////////////////////////////////// Antro Baro kodas //////////////////////////////////////////////////
//
const baras2 = { ...baras }; // darome Objekto "baras" kopija!!!

baras2.kedes = '1000';


baras.kdd();
baras2.kdd();

console.log('Baras: ', baras, baras2)