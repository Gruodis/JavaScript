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

let randomNumberOfLoops = rand(5, 60);

let pinigine = [];
let pinigineNuliams = [];

for (let i = 0; i < randomNumberOfLoops; i++) {

    pinigine.push(rand(0, 10));
    pinigineNuliams.push(rand(0, 1));
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
===> Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`|
--------------------------1-o END-------------------------`);


//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
// ARRAY Objektai 6. UZDAVINYS ------------------------------------------------------------------------
//     6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų,
//     numerių) reikšmes;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// console.log(`ARRAY`, pinigine)


// for (let i = 0; i < pinigineNuliams.length; i++) {

////     if (pinigineNuliams[i] === 0) {
//     if (!pinigineNuliams[i]) {
//         // console.log(`Nulis`)
//         pinigineNuliams[i] = i;
//     };
// };

// console.log(`
// ||||||||||||||||||| 6-o UZDAVINIO ARRAY |||||||||||||||||||
// *
// *
// *
// *
// *
// -----------------------STATISTIKA--------------------------`
// );


// console.log(`|
// ===> ARRAY: `, pinigineNuliams);
// console.log(`|
// ===> ARRAY Length: `, pinigine.length);
// console.log(`|
// ===> Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
// console.log(`|
// --------------------------6-o END-------------------------`);















///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 7. UZDAVINYS ------------------------------------------------------------------------
//     Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10),
//     kad masyvo ilgis būtų lygiai 30;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let trukstaElementu = 30 - pinigine.length;

// for (let i = pinigine.length; i < 30; i++) {
for (let i = 0; i < trukstaElementu; i++) {

    pinigine.push(rand(99, 100));
}
let trukstaTaipNe = ((trukstaElementu > 0) ? 'Taip' : 'Ne');
let trukstaKiek = ((trukstaElementu > 1) ? '11' : '0');

console.log(`
||||||||||||||||||| 7-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*       Ar pinigines DYDIS < 30, ${trukstaTaipNe}, kiek truksta: ${trukstaKiek}
*
*
    ----------------------- STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY: `, pinigine);
console.log(`|
===> ARRAY Length: `, pinigine.length);
console.log(`|
===> Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`|
    --------------------------7 - o END------------------------- `);
















///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 8. UZDAVINYS ------------------------------------------------------------------------
//     8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną
//     iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą
//     didesnes nei 2 (popierinius pinigus);
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let arrayWithNumbersTwoOrLess = [];
let arrayWithNumbersTwoOrMore = [];
pinigine[0] = [arrayWithNumbersTwoOrLess]
pinigine[1] = [arrayWithNumbersTwoOrMore]



console.log(`
        ||||||||||||||||||| 8 - o UZDAVINIO ARRAY |||||||||||||||||||
*
*
* Mazesnes ir lygios 2:  ${arrayWithNumbersTwoOrLess}
*
* Didesnes uz 2 monetos: ${arrayWithNumbersTwoOrMore}
*
*
    ----------------------- STATISTIKA--------------------------`
);
console.log(`|
===> Monetos <=: `, arrayWithNumbersTwoOrLess);

console.log(`|
===> Monetos > 2: `, arrayWithNumbersTwoOrMore);

console.log(`********************************************************** `)

console.log(`|
===> ARRAY: `, pinigine);
console.log(`|
===> ARRAY Length: `, pinigine.length);
console.log(`|
===> Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`|
    --------------------------8 - o END------------------------- `);














///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 9. UZDAVINYS ------------------------------------------------------------------------
//     9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas
//     būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su
//     popieriniais pinigais;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// 1    `

console.log(`
        ||||||||||||||||||| 9 - o UZDAVINIO ARRAY |||||||||||||||||||
*
*
* Mazesnes ir lygios 2:  ${arrayWithNumbersTwoOrLess}
*
* Didesnes uz 2 monetos: ${arrayWithNumbersTwoOrMore}
*
*
    ----------------------- STATISTIKA--------------------------`
);
console.log(`|
===> Monetos <=: `, arrayWithNumbersTwoOrLess);

console.log(`|
===> Monetos > 2: `, arrayWithNumbersTwoOrMore);

console.log(`********************************************************** `)

console.log(`|
===> ARRAY: `, pinigine);
console.log(`|
===> ARRAY Length: `, pinigine.length);
console.log(`|
===> Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`|
    --------------------------9 - o END------------------------- `);














///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 10. UZDAVINYS ------------------------------------------------------------------------
//     10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su
//     kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let shopBrands = ['🐤', '🦊', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

for (let i = 0; i < shopBrands.length; i++) {

    pinigine.push(shopBrands[i]);

}

console.log(`
        ||||||||||||||||||| 10- o UZDAVINIO ARRAY |||||||||||||||||||
*
*
* Mazesnes ir lygios 2:  ${arrayWithNumbersTwoOrLess}
*
* Didesnes uz 2 monetos: ${arrayWithNumbersTwoOrMore}
*
*
    ----------------------- STATISTIKA--------------------------`
);
console.log(`|
===> Monetos <=: `, arrayWithNumbersTwoOrLess);

console.log(`|
===> Monetos > 2: `, arrayWithNumbersTwoOrMore);

console.log(`********************************************************** `)

console.log(`|
===> ARRAY: `, pinigine);
console.log(`|
===> ARRAY Length: `, pinigine.length);
console.log(`|
===> Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`|
    -------------------------- 10- o END------------------------- `);
//     10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su
//     kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];


//     11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;


//     12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite
//     atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek,
//     kad skyrelis (masyvo ilgis) pasidarytų lygus 20;


//     13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;


//     14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų,
//     kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki
//     9999999999;


//     15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;


//     16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti
//     atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi
//     500);

//     17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins
//     be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.


//     18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas',
//     'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;