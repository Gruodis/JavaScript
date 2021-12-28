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




// /////////////////////////////////////////// JavaScript FUNKCIJA //////////////////////////////////////////////////
// //
// //---------------- DEMESIO!!! Kaip reiksmes esancias RETURN, priskirti kintamiesiems array1, array2 ir array3;
// //
// //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



// function add(a, b, c) {
//     return [a + 3, b + 3, c + 3];               // Su RETURN Is funkcijos "add() {}" graziname reiksmes
// };

// let [array1, array2, array3] = add(20, 30, 40); //  ir kiekvienai is grazintu reiksmiu priskiriame atskira kintamaji ===> array1 = 20, array2 = 30, array3 = 40.


// console.log(add(2, 7, 12))                      // vykdome funkcija add su nurodytais argumentais


// console.log(array1, array2, array3)             // atvaizduojame return reiksmes, kurias priskyreme kintamiesiems









/////////////////////////////////////////// Uzdavinys JavaScript //////////////////////////////////////////////////
//
// 1.   Turime tris spalvas: ['green', 'yellow', 'red']. Parasyti funkcija su vienu argumentu, jeigu argumentas = "green",
//      grazinti likusias dvi spalvas "yellow ir red", panaudojant RETURN, grazintas reiksmes priskirti atskiriems kintamiesiems "color1" ir "color2".
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// const stringObject = new String('Bobas');


String.prototype.hello = function () {
    return '***HELLO***';
};

String.prototype.addStar = function () {
    return this.valueOf() + '***';
};


let stringas = 'Jonas';

console.log(stringas.addStar());

console.log();

// String.prototype.toProper = function () {
//     return this.left(1).toUpper() + this.substr(1).toLower();
// }
// var s = new String("bar");
// s.toProper() // Bar