function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





//////////////////////////////// ARRAY Objekto Simple UZDAVINIAI /////////////////////////
//
//
// ARRAY Objektai 1. UZDAVINYS ------------------------------------------------------------------------
// Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let randomNumberOfLoops = rand(5, 10);

let pinigine = [];

for (let i = 0; i < randomNumberOfLoops; i++) {

    pinigine.push(rand(0, 10));
}

console.log(`
||||||||||||||||||| 1-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY: `, pinigine);
console.log(`|
===> ARRAY Length: `, pinigine.length);
console.log(`|
===> Random skaicius: `, randomNumberOfLoops);
console.log(`|
--------------------------1-o END-------------------------`);





//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
// ARRAY Objektai 2. UZDAVINYS ------------------------------------------------------------------------
// Suskaiciuoti pinigineja esancius pinigu suma.
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let piniguSuma = 0;
let piniguSumaFancy = 0;

for (let i = 0; i < pinigine.length; i++) {

    piniguSuma += pinigine[i];

}

pinigine.forEach(p => piniguSumaFancy += p);

console.log(`

||||||||||||||||||| 2-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Objekte pinigine reikšmių(pinigu) suma: ${piniguSuma} / ${piniguSumaFancy}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY:`, pinigine);
console.log(`|
===> ARRAY Length:`, pinigine.length);
console.log(`|
===> Random skaicius:`, randomNumberOfLoops);
console.log(`|
--------------------------2-o END-------------------------`);





//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
// ARRAY Objektai 3. UZDAVINYS ------------------------------------------------------------------------
// Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio pinigų (skaičių didesnių už 2 ) reikšmių sumą
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

piniguSuma = 0;

for (let i = 0; i < pinigine.length; i++) {

    if (pinigine[i] > 2) {
        piniguSuma += pinigine[i];
    }
}
console.log(`

||||||||||||||||||| 3-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Objekte pinigine reikšmių(pinigu) suma: ${piniguSuma}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY:`, pinigine);
console.log(`|
===> ARRAY Length:`, pinigine.length);
console.log(`|
===> Random skaicius:`, randomNumberOfLoops);
console.log(`|
--------------------------3-o END-------------------------`);




//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
// ARRAY Objektai 4. UZDAVINYS ------------------------------------------------------------------------
// // 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti
// lygias 0) iš 1 uždavinio;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

piniguSuma = 0;

for (let i = 0; i < pinigine.length; i++) {

    if (pinigine[i] <= 2) {
        pinigine[i] = 0;
    }
}
console.log(`

||||||||||||||||||| 4-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Objekte pinigine reikšmių(pinigu) suma: ${piniguSuma}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY:`, pinigine);
console.log(`|
===> ARRAY Length:`, pinigine.length);
console.log(`|
===> Random skaicius:`, randomNumberOfLoops);
console.log(`|
--------------------------4-o END-------------------------`);




//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
// ARRAY Objektai 5. UZDAVINYS ------------------------------------------------------------------------
// Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių
// reikšmių masyve yra;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let didziauasiSkaicius = pinigine[0];
let sumOfTotalBigNumbers = 0;
let masyvasIsDidSk = []
let pinigoIndex = [];
piniguSuma = 0;

for (let i = 0; i < pinigine.length; i++) {

    if (pinigine[i] > didziauasiSkaicius) {
        //

        //pinigoIndex[i] = i;


        didziauasiSkaicius = pinigine[i];
        sumOfTotalBigNumbers = 0; // nunulinam ankstesnes didziausias reiksmes;


    }
    if (pinigine[i] === didziauasiSkaicius) {

        sumOfTotalBigNumbers++; // skaiciuojame didziausiu reiksmiu kieki;

        pinigoIndex[i] = pinigine[i];
        do {

            pinigoIndex[i] = pinigine[i];

        } while ((pinigoIndex[i] != pinigine[i]) > didziauasiSkaicius);
    };


    // if (pinigoIndex[i] > masyvasIsDidSk[i]) {

    //     sumOfTotalBigNumbers++; // skaiciuojame didziausiu reiksmiu kieki;

    //     pinigoIndex[i] = i;

    // };


    //pinigine.forEach((p = p) => sumOfTotalBigNumbers++);


    console.log(`Iteraciju kiekis`, pinigoIndex[i], pinigine[i], didziauasiSkaicius,);
    // sumOfTotalBigNumbers = didziauasiSkaicius++;


};
console.log(`

||||||||||||||||||| 5-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Didziausias Skaicius: ${didziauasiSkaicius}
*
*   Didziausiu skaiciu kiekis: ${sumOfTotalBigNumbers}
*
*   Pinigo Index: ${pinigoIndex}

    Pinigo Index: ${masyvasIsDidSk}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY:`, pinigine);
console.log(`|
===> ARRAY Length:`, pinigine.length);
console.log(`|
===> Random skaicius:`, randomNumberOfLoops);
console.log(`|
--------------------------5-o END-------------------------`);
