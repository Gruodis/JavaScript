function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/////////////////////////////////////////// JavaScript FUNKCIJA //////////////////////////////////////////////////
//
//
// 1. Fubkcija deklaruojama zodziu - function. Funkijos deklaravimui nenaudojame "let" ar "const".
//
//--- 1.a Funkcija gali buti su vardu,
//        pvz.: "function sayHello() { something };"
//
//--- 1.b Funkcija gali buti be vardo,
//        pvz.: (function () { something })();
//
//--- 1.c Funkcija gali buti priskirta kintamajam,
//        pvz.: "let kintamasis = function () { something };"
//
//_______________________________________________________________________________________________________________
//
//
// 2. Funkcijos skliaustuose rasomi parametrai,
//    pvz.: "function sayHello(parametras1, parametras2) {};",
//
//--- 2.a Parametrais gali buti NUMBER, STRING, BOOLEAN, ARRAY, etc.
//
//--- 2.b Parametrams butini Argumentai.
//
//_______________________________________________________________________________________________________________
//
//
// 3. Argumentai nurodomi iskvieciant funkcija,
//    pvz.: sayHello(argumentas8, argumentas9);
//
//--- 3.a Argumentas randasi uz funkcijos ribu pvz.: "let argumentas8 = rand(1, 10);"
//
//--- 3.b Funkcija Argumentu reiksmes perduoda Parametrams,
//        pvz.: function sayHello(parametras1 = argumentas8, parametras2 = argumentas9) {};
//        sayHello(argumentas8, argumentas9);
//
//_______________________________________________________________________________________________________________
//
//
// 4. RETURN grazina viena kintamaji is funkcijos ir ja uzbaigia.
//
//--- 4.a Nors RETURN grazina tik viena kintamaji, tas kintamasis gali buti kompleksinis.
//
//        Pvz.: "function add(a, c, b) { return [a+3, b+3, c+3]}".
//        Auksciau nurodytame pvz., Funkcija grazina viena kintamaji, kuris yra Masyvas turintis "n" reiksmiu.
//
//--- 4.b "if, else if, else" salygu naudojimas su RETURN.
//
//        pvz.: if (a > b) { return a = 'a is MORE than b' };
//              if (a = b) { return a = 'a and b are EQUAL' }; vietoje "else if"
//              return console.log('a and b are EQUAL') ; vietoje "else" arba SWITCH atveju vietoje "default".
//
//        Auksciau esanciame pvz., nenaudojam "ele if" ir "else", nes "RETURN", kaip ir "BREAK",
//        nutraukia tolimesni kodo vykdyma, todel "else if, else" yra pertekliniai.
//
//_______________________________________________________________________________________________________________
//
//
// 5. Fubkcijos iskvietimas vykdomas nurodzius funkcijos varda, skliaustus(skliaustuose nurodomi Parametrai, jeigu jie naudojami),
//    pvz.: sayHello(argumentas8, argumentas9);
//
//_______________________________________________________________________________________________________________
//
//
// 6. Kaip funkcijos grazinta kintamaji su 'n' kiekiu reiksmiu, isskaidyti ir priskirti skirtingiems kintamiesiems?
//    PASTABA. Prisimename, kad su RETURN galime grazinti tik viena kintamaji!
//
//          function add(a, b, c) {
//                   return [a + 3, b + 3, c + 3];
//                   };
//
//    pvz., funkcijoje turime kintamaji: Masyva su reiksmemis [a + 3, b + 3, c + 3],
//    mums reikia kiekvienai is reiksmiu priskirti kintamji su unikaliu vardu.
//
//--- 6.a deklaruojame tiek kintamuju, kiek Masyve turime reiksmiu:
//
//        let [array1, array2, array3] = add(arg1, arg2, arg3);
//
//--- 6.a Tokiu budu gauname rezultata: array1 = arg1, array2 = arg2, array3 = arg3.
//
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||




/////////////////////////////////////////// JavaScript FUNKCIJA //////////////////////////////////////////////////
//
//---------------- DEMESIO!!! Kaip priskirti 'n' kieki reiksmiu, grazinamu su RETURN, 
//                            skirtingiems kintamiesiems, pvz., kintamieji: array1, array2 ir array3;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



function add(a, b, c) {
    return [a + 3, b + 3, c + 3];               // Su RETURN Is funkcijos "add() {}" graziname reiksmes
};

let [array1, array2, array3] = add(20, 30, 40); //  ir kiekvienai is grazintu reiksmiu priskiriame atskira kintamaji ===> array1 = 20, array2 = 30, array3 = 40.


console.log(add(2, 7, 12))                      // vykdome funkcija add su nurodytais argumentais


console.log(array1, array2, array3)             // atvaizduojame return reiksmes, kurias priskyreme kintamiesiems









/////////////////////////////////////////// Uzdavinys JavaScript //////////////////////////////////////////////////
//
// 1.   Turime tris spalvas: ['green', 'yellow', 'red']. Parasyti funkcija su vienu argumentu, jeigu argumentas = "green",
//      grazinti likusias dvi spalvas "yellow ir red", panaudojant RETURN, grazintas reiksmes priskirti atskiriems kintamiesiems "color1" ir "color2".
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


let spalvos = ['green', 'yellow', 'red'];           // deklaruojame masyva su spavomis
let randSpalva = spalvos[rand(0, spalvos.length)];  // deklaruojame kintamaji atsitiktinei spalvai ir generuojame atsitiktine spalva, reiksmes imdami is Masyvo "spalvos"

let [color1, color2] = decide(randSpalva);          // priskiriame atskira kintamaji kiekvienai is grazintu(RETURN) reiksmiu(spalvu), gauname: color1 = vienaSpalva, color2 = kitaSpalva.


function decide(a) {
    spalvos.splice(spalvos.indexOf(a), 1);          // naudodami ".splice", is Masyvo isimame "randSpalva", kuri = a : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // return spalvos.splice(spalvos.indexOf(a), 1);          // toks uzrasymas grazintu tik "randSpalva", o ne dvi likusias spalvas, kuriu mums siuo atveju reikia
    return spalvos;                                 // tuomet naudojame RETURN ir graziname masyva su likusiomis reiksmemis.

    // return spalvos.filter(xxx => a != xxx); // siuo atveju ".filter" grazina reiksmes, kurios nera lygios(!=) reiksmei 'a', jeigu naudotumem (=), tuomet ".filter", grazintu reiksmes = 'a'.

};
console.log('1', color1, color2);

// console.log('2', spalvos.slice(0, 2));
// console.log('3', spalvos.indexOf(randSpalva));


/////////////////////////////////////////// Uzdavinys Anonimines Fubkcijos JavaScript //////////////////////////////////////////////////
//
// 2. Sukurti Objekta "baras", kuriame yra savybes alausBravoras:'Bravoras' kedes:rand(5, 20);
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let bravorai = ['Svyturys', 'Kalnapilis', 'Utenos'];
let grupes = ['PinkFloid', 'Led Zeppelin', 'Metallica'];
let randGrupe = grupes[rand(0, 2)];

const baras = { // deklaruojame Objekta pavadinimu "baras"
    alausBravoras: bravorai[rand(0, 2)], // deklaruojame Objekto savybe ir jos kintamaji;
    kedes: rand(5, 20)                   // deklaruojame Objekto savybe ir jos kintamaji;
};

(function (d) {
    return d = (baras.daina = randGrupe);
})();

baras.kdd = function () { // deklaruojame nauja Objekto savybe "kdd" ir priskiriame jai anonymous funkcija, kuri skaiciuos kedziu kieki bare;

    //  !!! DEMESIO !!!
    //  kad veliau pagamintoje Objekto kopijoje galetume teisingai atvaizduoti savybiu reiksmes, naudojame "this",
    //  todel "console.log(`Turime kedziu: `, baras.kedes);" 
    //  tampa "console.log(`Turime kedziu: `, this.kedes);"
    //  priesingu atveju Objektu "baras.kdd()" ir "baras2.kdd()" grazins vienodas reiksmes.
    return console.log(`Turime kedziu: `, this.kedes);
};

baras.kdd();

/////////////////////////////////////////// Pirmo baro kopija su naujomis reiksmemis //////////////////////////////////////////////////
//
const baras2 = { ...baras }; // !!!---------->> darome Objekto "baras" kopija <<---------------------!!!

baras2.kedes = '1000'; //   keiciame savybes "baras.kdd" reiksme;

baras2.kdd(); // atvaizduojame pakeista reiksme


console.log('Baras: ', baras, baras2)
