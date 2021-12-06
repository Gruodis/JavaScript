function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////// DO WHILE ciklai //////////////////////////////////


let H = 0;
let S = 0;
for(let i = 0; i < 7; i++) { //moneta metam 7 kartus - (7-ios iteracijos)

    let moneta2 = rand(0,1) ? 'H' : 'S';
 //   'H' == moneta2 ?  H++ : S++; //mandras uzrasymas, kuris pagrinde tinka dviems rezultatams

    if (moneta2 == 'H') {
        H++;
    }
    else {
        S++
    }

    console.log(moneta2)

}
console.log('Herbas',H, 'Skaicius',S)

console.log('//');
console.log(`// Monetos metimas 7 kartus end //`);
console.log('//');

//////////////////////////////// Keiciam FOR i ------> DO WHILE //////////////////////////////////
//
// DO WHILE naudojam tuomet, kai nezinom reikiamo ciklu skaiciaus rezultatui gauti
//
//************************************************************************************************ */
//
// vien tik WHILE atliks 0 iteraciju(neprasukti ciklo), jeigu kintamasis neturi reiksmes
// arba suteikta/atsitiktinai sugeneruota kintamojo reiksme atitiks salyga
//
// let randomDigit;  //deklaruotas kintamasis neturi priskirtos reiksmes, todel ciklas WHILE neprasideda
// let randomDigit2; //deklaruotas kintamasis neturi priskirtos reiksmes, todel ciklas WHILE neprasideda
//
// while (randomDigit != randomDigit2 ) { // ciklas neprasideda be reiksmes
//    
//     randomDigit = rand(0, 10);
//     randomDigit2 = rand(0, 10);
//    
//     console.log( 'Ciklas viduje = ' + randomDigit + ' ' + randomDigit2)
//
// }
//
//************************************************************************************************ */
//  DO WHILE reiskia - vykdyk, kol, pvz. noredami generuotis random skaicius, ko gausime 5,
//  while(randomNumber !=5 ) yra teisingas salygos uzrasymas;
//  while (randomNumber == 5 ) neteisingas uzrasymas, nes salyga sako - kol sugeneruotas skaicius yra == 5, kartok cikla
//
// naudodami DO WHILE cikla daznai uzsicikliname, del salygos while($kintamieji)
//
//------------------------------------------------------------------------------------------------



////////////////////////////////////////////////////////////////////////////////////////////////
//
// 6. UZDAVINYS is ciklai_2.js ----------------------------------------------------------------
//
// kartojam cikla, kol bus sugeneruoti 3 Herbai

H = 0;
S = 0;
let kiekBuvoCiklu = 0;
do {
    kiekBuvoCiklu++;
    let moneta2 = rand(0,1) ? 'H' : 'S';
 //   'H' == moneta2 ?  H++ : S++; //mandras uzrasymas, kuris pagrinde tinka dviems rezultatams

    if (moneta2 == 'H') {
        H++;
    }
    else {
        S++
    }

    console.log(moneta2)
}
while (H < 3);
console.log(`Herbai = ${H}, Skaiciu = ${S}, 'Ciklu buvo = ${kiekBuvoCiklu}'`)
console.log('//');
console.log('//');
//////////////////////////////////////////     DO WHILE uzdaviniai      //////////////////////
//
//
// 1. UZDAVINYS -------------------------------------------------------------------------------
//
//
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5;
let randomDigitFive;
let skaitiklis = 0;
do {
    skaitiklis++;
    randomDigitFive = rand(4, 6);
    console.log(randomDigitFive)
}
while(randomDigitFive != 5); //salyga byloja - jeigu sugeneruotas skaicius nera lygus 5, kartok cikla

console.log(`Random digit five TRUE. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');

//*********************************************  SPRENDIMAS TIK SO WHILE  *************************************************** */

randomDigitFive = 0;
skaitiklis = 0;
while(randomDigitFive != 5) {
    skaitiklis++;
    randomDigitFive = rand(4, 6);
    console.log(randomDigitFive)
}
 //salyga byloja - jeigu sugeneruotas skaicius nera lygus 5, kartok cikla

console.log(`Random digit five B TRUE. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');



////////////////////////////////////////////////////////////////////////////////////////////////
//
// 2. UZDAVINYS -------------------------------------------------------------------------------
//
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

skaitiklis = 0;
//let randomDigitFiveB = 0;
let randomDigitSum = 0;
do {
    skaitiklis++; // iteruotu ciklu skaitiklis
    let randomDigitB = rand(0, 10);
    randomDigitSum = randomDigitSum + randomDigitB;
    console.log(randomDigitB, randomDigitSum)
}
while(randomDigitSum  < 100);//iteruok cikla(kartok), kol "randomDigitSum" nebebus mazesne uz 100

console.log(`Random digit sum more than 100: ${randomDigitSum}. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');


////////////////////////////////////////////////////////////////////////////////////////////////
//
// 3. UZDAVINYS -------------------------------------------------------------------------------
//
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

let randomDigitC;
skaitiklis = 0;

do {
    skaitiklis++; // iteruotu ciklu skaitiklis
    randomDigitC = rand(0, 10);
    console.log(randomDigitC)
}
//while(randomDigitC != 5 || randomDigitC != 7  ); // NETEISINGAS UZRASYMAS, nes while || numeta i uzsiciklinima

while(randomDigitC != 5 && randomDigitC != 7  ); // NETEISINGAS UZRASYMAS, nes while || numeta i uzsiciklinima

console.log(`Random digit must be 5 or 7: ${randomDigitC}. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');


////////////////////////////////////////////////////////////////////////////////////////////////
//
// 4. UZDAVINYS -------------------------------------------------------------------------------
//
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;


randomDigitC = 0;
skaitiklis = 0;
randomDigitSum = 0;
do {

    // for (var i = 0; i < 11; i++ ) { 
    // skaitiklis++; // iteruotu ciklu skaitiklis

    // randomDigitC = rand(0, 10);
    // randomDigitSum = randomDigitSum + randomDigitC;
    // console.log(randomDigitC)
    // }

    ////////////////////////////////////////////////////////////////
    /// antras sprendimo budas
    ////////////////////////////////////////////////////////////////
    let iteracijos = 0;
    while ( iteracijos < 11 ) {
        skaitiklis++; // iteruotu ciklu skaitiklis
        randomDigitC = rand(0, 10);
        randomDigitSum = randomDigitSum + randomDigitC;
        console.log(randomDigitC);
        iteracijos++;

    }
    
    
}

while(randomDigitSum < 20 );

console.log(`Random digit must be more than 20 after 11 cicles. SUM:${randomDigitSum}. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');


////////////////////////////////////////////////////////////////////////////////////////////////
//
// 5. UZDAVINYS -------------------------------------------------------------------------------
//
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

randomDigitC = 0;
skaitiklis = 0;

do {
    skaitiklis++; // iteruotu ciklu skaitiklis
    randomDigitC = rand(0, 10);
    console.log(randomDigitC)
}
//while(randomDigitC != 5 || randomDigitC != 7  ); // NETEISINGAS UZRASYMAS, nes while || numeta i uzsiciklinima

while(randomDigitC != 5 && randomDigitC != 7  ); // NETEISINGAS UZRASYMAS, nes while || numeta i uzsiciklinima

console.log(`Random digit must be 5 or 7: ${randomDigitC}. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');

////////////////////////////////////////////////////////////////////////////////////////////////
//
// 6. UZDAVINYS -------------------------------------------------------------------------------
//
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

let randomDigit = rand(0, 10);
let randomDigit2 = rand(0, 10);

while (randomDigit != randomDigit2 ) {
    
    randomDigit = rand(0, 10);
    randomDigit2 = rand(0, 10);
    
    console.log( 'Ciklas viduje = ' + randomDigit + ' ' + randomDigit2)

}
//randomDigitOneLine = '' + randomDigit + ' ' + randomDigit2;
console.log(`Random digit must be duplicates: ${randomDigit}  and ${randomDigit2}`)
console.log('//');
console.log('//');

////////////////////////////////////////////////////////////////
/// antras sprendimo budas - BUTINAI PRASUKS CIKLA BENT VIENA KARTA
////////////////////////////////////////////////////////////////

let randomDigitV1;
let randomDigitV2;

do  {
    
    randomDigitV1 = rand(0, 10);
    randomDigitV2 = rand(0, 10);
    
    console.log( 'Ciklas viduje V2 = ' + randomDigitV1 + ' ' + randomDigitV2)

} while (randomDigitV1 != randomDigitV2 )
//randomDigitOneLine = '' + randomDigit + ' ' + randomDigit2;
console.log(`Random digit must be duplicates: ${randomDigitV1}  and ${randomDigitV2}`)
console.log('//');
console.log('//');
////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
// randomDigit = 0;
// randomDigit2 = 0;
let randomDigitSuma1 = 0;
let randomDigitSuma2 = 0;
do  {
    
    let randomDigit = rand(0, 10);
    let randomDigit2 = rand(0, 10);
    randomDigitSuma1 = randomDigitSuma1 + randomDigit;
    randomDigitSuma2 = randomDigitSuma2 + randomDigit2;
    console.log( 'Ciklo Viduje. Suma = ' + randomDigitSuma1 + ' ' + randomDigitSuma2);

} while (randomDigitSuma1 < 100 !== randomDigitSuma2 < 100)
//randomDigitOneLine = '' + randomDigit + ' ' + randomDigit2;
console.log(`Kiekvieno kintamojo random skaiciu suma turi buti daugiau uz 100 SUMA: ${randomDigitSuma1}  and ${randomDigitSuma2}`);
console.log('//');
console.log('//');


////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).