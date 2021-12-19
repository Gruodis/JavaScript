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
||
||
-----------------------STATISTIKA--------------------------`
);


console.log(`||
||===|| ARRAY: `, pinigine);
console.log(`||
||===|| ARRAY Length: `, pinigine.length);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
--------------------------1-o END-------------------------`);
console.log('%c|||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');


//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
// ARRAY Objektai 6. UZDAVINYS ------------------------------------------------------------------------
//     6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų,
//     numerių) reikšmes;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


for (let i = 0; i < pinigineNuliams.length; i++) {

    //     if (pinigineNuliams[i] === 0) {
    if (!pinigineNuliams[i]) {
        // console.log(`Nulis`)
        pinigineNuliams[i] = i;
    };
};

console.log(`
||||||||||||||||||| 6-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||
||
||
-----------------------STATISTIKA--------------------------`
);


console.log(`||
||===|| ARRAY: `, pinigineNuliams);
console.log(`||
||===|| ARRAY Length: `, pinigineNuliams.length);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
--------------------------6-o END-------------------------`);
console.log('%c|||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');















///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 7. UZDAVINYS ------------------------------------------------------------------------
//     Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10),
//     kad masyvo ilgis būtų lygiai 30;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let pinigineTrukstaPinigu = pinigine.slice(); // naujas Masyvas, naujam Masyvui priskiriam reiksmes is "pinigine"

let trukstaElementu = 30 - pinigineTrukstaPinigu.length; // is norimo "pinigine" Dydzio, kuris yra 30, atimam turima Dydi "pinigineTrukstaPinigu.length";

// for (let i = pinigine.length; i < 30; i++) {
// for (let i = 0; i < trukstaElementu; i++) {

//         pinigineTrukstaPinigu.push(rand(99, 100));
// }
//////// KITAS SPRENDIMO BUDAS

while (pinigineTrukstaPinigu.length < 30) {

    pinigineTrukstaPinigu.push(rand(99, 100));

    console.log(trukstaElementu);
};

console.log(trukstaElementu);

let trukstaTaipNe = ((trukstaElementu > 0) ? 'Taip, liko: ' + pinigine.length + ', truksta: ' + trukstaElementu : 'Nop! $$$$$$ turime virsaus:' + (trukstaElementu * -1));
// let trukstaKiek = ((trukstaElementu > 1) ? 'Truksta : ' : 'Truksta :0');

console.log(`
||||||||||||||||||| 7-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||       Ar pinigines DYDIS yra mazesnis uz 30?
||
||       ${trukstaTaipNe} 
||
||
||
----------------------- STATISTIKA--------------------------`
);


console.log(`||
||===|| ARRAY: `, pinigineTrukstaPinigu);
console.log(`||
||===|| ARRAY Length: `, pinigineTrukstaPinigu.length);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
--------------------------7 - o END------------------------- `);
console.log('%c|||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');
















///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 8. UZDAVINYS ------------------------------------------------------------------------
//     8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną
//     iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą
//     didesnes nei 2 (popierinius pinigus);
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let arrayTwoOrLess = [];
let arrayTwoOrMore = [];

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2) {

        arrayTwoOrLess.push(pinigine[i]);
    }
    else {
        arrayTwoOrMore.push(pinigine[i]);
    }
}



console.log(`

||||||||||||||||||| 8 - o UZDAVINIO ARRAY |||||||||||||||||||
||
||
|| Mazesnes ir lygios 2:  ${arrayTwoOrLess}
||
|| Didesnes uz 2 monetos: ${arrayTwoOrMore}
||
||
----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Monetos <=: `, arrayTwoOrLess);

console.log(`||
||===|| Monetos || 2: `, arrayTwoOrMore);

console.log(`|| `)

console.log(`||
||===|| ARRAY Pinigine: `, pinigine);
console.log(`||
||===|| ARRAY Pinigine Length: `, pinigine.length);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 8 - o END <<-----------------------|`);
console.log('%c|||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');














///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 9. UZDAVINYS ------------------------------------------------------------------------
//     9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas
//     būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su
//     popieriniais pinigais;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


const pinigineSuSkyreliais = [];

for (let i = 0; i < 2; i++) {

    pinigineSuSkyreliais.push([]); // sukuriam Elementus ir juose patalpinam tuscius Masyvus;
}

pinigineSuSkyreliais[0] = arrayTwoOrLess; // 0-lini Elementa su tusciu Masyvu uzpildome monetomis < 2, is 8-to uzdavinio;

pinigineSuSkyreliais[1] = arrayTwoOrMore // 1-ma Elementa su tusciu Masyvu uzpildome monetomis || 2, is 8-to uzdavinio;

console.log(`

||||||||||||||||||| 9 - o UZDAVINIO ARRAY |||||||||||||||||||
||
||
|| Pinigine su 2 masyvais:  ${pinigineSuSkyreliais}
||
|| Pinigine su 2 masyvais dydis: ${pinigineSuSkyreliais[1].length + pinigineSuSkyreliais[0].length}
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Skyrelis <=: `, pinigineSuSkyreliais[0]);

console.log(`||
||===|| Skyrelis || 2: `, pinigineSuSkyreliais[1]);

console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 9 - o END <<-----------------------|`);
console.log('%c|||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');














///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// ARRAY Objektai 10. UZDAVINYS ------------------------------------------------------------------------
//     10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su
//     kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let shopBrands = ['🐤', '🦊', '🦝', '🐇', '🐔', '🐳'];
let shopBrands = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

// pinigineSuSkyreliais[2] = [];

pinigineSuSkyreliais[2] = shopBrands;

console.log(`


||||||||||||||||||| 10 - o UZDAVINIO ARRAY |||||||||||||||||||
||
||
|| Pinigine su 2 masyvais:  ${pinigineSuSkyreliais}
||
|| Pinigine su 2 masyvais dydis: ${pinigineSuSkyreliais[1].length + pinigineSuSkyreliais[0].length + pinigineSuSkyreliais[2].length}
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Skyrelis [0]: `, pinigineSuSkyreliais[0]);

console.log(`||
||===|| Skyrelis [1]: `, pinigineSuSkyreliais[1]);

console.log(`||
||===|| Skyrelis [2]: `, pinigineSuSkyreliais[2]);

console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 10 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');















//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
pinigineSuSkyreliais[2].sort();

console.log(`


||||||||||||||||||| 11- o UZDAVINIO ARRAY |||||||||||||||||||
||
||
|| Pinigine su 2 masyvais:  ${pinigineSuSkyreliais}
||
|| Pinigine su 2 masyvais dydis: ${pinigineSuSkyreliais[1].length + pinigineSuSkyreliais[0].length + pinigineSuSkyreliais[2].length}
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Skyrelis [0]: `, pinigineSuSkyreliais[0]);

console.log(`||
||===|| Skyrelis [1]: `, pinigineSuSkyreliais[1]);

console.log(`||
||===|| Skyrelis [2]: `, pinigineSuSkyreliais[2].slice());

console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 11 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');
















//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite
//     atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek,
//     kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const bankCards = ['MasterCard', 'Visa'];


for (let i = pinigineSuSkyreliais[2].length; i < 20; i++) { // patikrinam korteliu Masyvo dydi;
    pinigineSuSkyreliais[2].push(bankCards[rand(0, 1)]); // random budu PUSH'inam korteles pavadinima is masyvo "bankCards";
};
pinigineSuSkyreliais[2].sort();

console.log(`


||||||||||||||||||| 12- o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Skyrelis [2][0]: `, pinigineSuSkyreliais[2]);
console.log(`||
||----------------------|||| 12 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');














//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let cardName;

let kartojasi2 = 0;

let cardIndex = [];
const cardCount = [];
let on;

for (let i = 0; i < pinigineSuSkyreliais[2].length; i++) { // patikrinam korteliu Masyvo dydi;

    on = pinigineSuSkyreliais[2];


    // if (((cardCount.indexOf(on[i]) == 'MasterCard') || (cardCount.indexOf(on[i]) == 'Visa')) && (cardCount.indexOf(on[i]) == -1)) { // (-1) = tikrina ar Masyve "cardCount", reiksme "[i], egzistuoja, jeigu"
    if (cardCount.indexOf(on[i]) == -1) { // (-1) = tikrina ar Masyve "cardCount", reiksme "on[i], egzistuoja, jeigu"

        cardCount.push(on[i]);

    } else {
        cardName = on[i];
    }
}

for (var i = 0; i < on.length; i++) {
    if (cardName == on[i]) {

        kartojasi2++;

        cardIndex.push(i);
    }
};

if (cardName == undefined) {
    cardName = 'NESIKARTOJO';
    cardIndex = 0;

};
let showtimesAsString = cardIndex.join(', ');
console.log(`

||||||||||||||||||| 13-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||   Pavadinimas: ${cardName};
||   Pasikartojo: ${kartojasi2} karta(-us);
||   index:       ${showtimesAsString}
`);
console.log(`||
||
||===|| Skyrelis [2][0]: ${on.length + pinigineSuSkyreliais[1].length + pinigineSuSkyreliais[0].length}
||      
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Pinigine su skyrelis: `, pinigineSuSkyreliais);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 13 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');
























//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų,
//     kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki
//     9999999999;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const loterijosBilietai = []

for (let i = 0; i < 10; i++) {
    loterijosBilietai.push(rand(1000000, 99999999));
}

// PUSH'inam loterijos bilietu Masyva i "pinigine"

pinigineSuSkyreliais[3] = loterijosBilietai;


console.log(`


||||||||||||||||||| 14-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||   Pavadinimas: $;
||   Pasikartojo: $ karta(-us);
||   index:       $
`);
console.log(`||
||
||===|| Skyrelis: ${pinigineSuSkyreliais.length} 
||      
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Pinigine su skyrelis: `, loterijosBilietai, pinigineSuSkyreliais);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 14 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');

















//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
loterijosBilietai.slice();
loterijosBilietai.sort();
loterijosBilietai.reverse();

console.log(`


||||||||||||||||||| 15-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||   Pavadinimas: $;
||   Pasikartojo: $ karta(-us);
||   index:       $
`);
console.log(`||
||
||===|| Skyrelis: ${pinigineSuSkyreliais.length} 
||      
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Pinigine su skyrelis: `, loterijosBilietai, pinigineSuSkyreliais);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 15 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');




//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti
//     atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi
//     500);
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// let smulkusPinigai = pinigine.slice();
let smulkusPinigai = 0;
// const smulkusPinigai16 = []

do {
    let randomDigit = rand(99, 101);
    console.log(`1 - randomDigit`, randomDigit);


    pinigineSuSkyreliais[1].push(randomDigit)
    // console.log(`2 - smulkusPinigai 16`, smulkusPinigai16);

    if (!(randomDigit + smulkusPinigai == 500)) { // if random digit + smulkuspinigai > 500; atimti perteklini skaiciu, kad reiksme butu 500

        console.log(`Nelygiai 500`, smulkusPinigai + randomDigit);
    } else {

        console.log(`BINGO !!! LYGIAI 500 !!!`, smulkusPinigai + randomDigit);
    }

    smulkusPinigai += randomDigit;
    console.log(`3 - smulkusPinigai`, smulkusPinigai);

} while (smulkusPinigai < 500);
console.log(smulkusPinigai, pinigineSuSkyreliais);

// pinigineSuSkyreliais[1].push(smulkusPinigai16);
// pinigineSuSkyreliais[2].push(smulkusPinigai16); // random budu PUSH'inam korteles pavadinima is masyvo "bankCards";
console.log(`


||||||||||||||||||| 16-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||   Pavadinimas: $;
||   Pasikartojo: $ karta(-us);
||   index:       $
`);
console.log(`||
||
||===|| Skyrelis: ${pinigineSuSkyreliais.length} 
||      
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Pinigine su skyrelis: `, loterijosBilietai, pinigineSuSkyreliais);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 16 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');















//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins
//     be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let bingo777 = 0;

const bingoLaimingiBilietai = []
let galune;


for (let i = 0; i < loterijosBilietai.length; i++) {

    console.log(loterijosBilietai[i]);

    if (loterijosBilietai[i] % 2 == 0) {

        bingo777++;
        console.log(`Laimingas Bilietas:`, loterijosBilietai[i]);

        bingoLaimingiBilietai.push(loterijosBilietai[i])

    };
};

if (bingo777 < 2) { galune = 'a' } else if (bingo777 < 1) { galune = 'u' } else { galune = 'us' };

console.log(`
||||||||||||||||||| 17-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||   Turime ${bingo777} laiming${galune} biliet${galune};
||   Laimingu bilietu skaiciai.: ${bingoLaimingiBilietai};
||
`);
console.log(`||
||
||===|| Skyrelis: ${pinigineSuSkyreliais.length} 
||      
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Pinigine su skyrelis: `, loterijosBilietai, pinigineSuSkyreliais);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 17 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');
















//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//
//     18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas',
//     'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];



nuotraukos.sort(function (a, b) {
    return a.length - b.length || // sort by length, if equal then
        a.localeCompare(b);    // sort by dictionary order
});
let test = nuotraukos.join(', ');
console.log(`
||||||||||||||||||| 18-o UZDAVINIO ARRAY |||||||||||||||||||
||
||
||   Zodziai pagal raidziu kieki: ${test}
||
`);
console.log(`||
||
||===|| Skyrelis: ${pinigineSuSkyreliais.length} 
||      
||
||
||----------------------- STATISTIKA--------------------------`
);
console.log(`||
||===|| Pinigine su skyrelis: `, loterijosBilietai, pinigineSuSkyreliais);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
||----------------------|||| 18 - o END <<-----------------------|`);
console.log('%c |||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');


















/////////////////////////////////////////////////     MASYVAS MASYVE      ///////////////////////////////////////////////////

let komoda = [];
let dezute = [];

//-------------------------------------------|||     SVARBU eiliskumas !!!     <|-------------------------------------------!
for (let i = 0; i < 9; i++) {

    dezute.push('_' + (i + 1) + '_');
};

for (let i = 0; i < 4; i++) {

    komoda.push(i + 1);
};




dezute[2] = ('❤️');
dezute[5] = ('🎄');
komoda[0] = dezute;



komoda[3] = []; // Komodos 3 Stalciuje BUTINAI sukuriame tuscia masyva [] ir tuomet i ji PUSH'inam Random skaicius.


for (let i = 0; i < 20; i++) {

    komoda[3].push(rand(5, 17));
    // dezute2.push(rand('🎅', '🍬'));

};

console.log(`

||||||||||||||||||| KOMODA ARRAY |||||||||||||||||||
||
||
||
||       Rodom komodos stalciu turini: ${komoda[0][2]}, ${komoda[0][5]}`)

// console.log(`
//         ||||||||||||||||||| MASYVAS MASYVE UZDAVINIO ARRAY |||||||||||||||||||
// ||
// ||
// || Komoda:  ${komoda}
// ||
// || Komoda length: ${komoda.length}
// ||
// ||
// ||
// || Dezute:  ${dezute}
// ||
// || Dezute length: ${dezute.length}
// ||-----------------------|||| STATISTIKA <<--------------------------`
// );
console.log(`

||
||===|| Komoda <=: `, komoda);

console.log(`||
||===|| Komoda lenght: `, komoda.length);

console.log(`
||`)

console.log(`||
||===|| Dezute: `, dezute);
console.log(`||
||===|| Dezute Length: `, dezute.length);
console.log(`||
||===|| Pirminis Iteraciju skaicius: `, randomNumberOfLoops);
console.log(`||
---------------|||| MASYVAS MASYVE END  <<--------------|`);
console.log('%c|||||||||||||||||||||||||||||||||||||||||||||||||||| DONE! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<', 'background: #497358; color: #fff');
