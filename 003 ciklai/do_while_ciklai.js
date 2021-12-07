function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////// Ciklas FOR //////////////////////////////////


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

//////////////////////////////// DO WHILE ciklai /////////////////////////////////////////////////
//
// DO WHILE naudojam tuomet, kai nezinom reikiamo ciklu skaiciaus rezultatui gauti,
// pvz. for(nezinom, kiek kartu reikia prasukti cikla, kad sugeneruoti skaiciai butu vienodi) {...
//
//************************************************************************************************ */
//
// WHILE salygoje neigimo ciklas(inversinis), todel loginiai bei palyginimo operatoriai pakeicia savo reiksme:
//
// while (....
//
// '>'  ===> '<=' // daugiau pavirsta i maziau ir lygu
// '<'  ===> '>=' // maziau pavirsta i daugiau ir lygu
// '>=' ===> '<' // daugiau ir lygu pavirsta i maziau
// '<=' ===> '>' // daugiau ir lygu pavirsta i daugiau
// '==' ===> '!='
// '!=' ===> '=='
// '&&' ===> '||'
// '||' ===> '&&'
// 
//
//************************************************************************************************ */
//
// Naudojant tik WHILE, o ne DO WHILE, ciklas atliks 0 iteraciju(neprasuks ciklo),
// jeigu kintamasis (randomDigit, randomDigit2) neturi reiksmes pvz.:
//
//
// let randomDigit;  //deklaruotas kintamasis neturi priskirtos reiksmes, todel ciklas WHILE (randomDigit...Digit2) nevykdomas
// let randomDigit2; //deklaruotas kintamasis neturi priskirtos reiksmes, todel ciklas WHILE (randomDigit...Digit2) nevykdomas
//
//****** arba suteikta/atsitiktinai sugeneruota kintamojo(randomDigit...Digit2) reiksme atitiks salyga, pvz.:
//
// let randomDigit  = rand(0, 10);
// let randomDigit2 = rand(0, 10);
//
// while (randomDigit != randomDigit2 ) { // ciklas neprasideda be reiksmes arba kintamiesiems atitikus salyga
//    
//     randomDigit = rand(0, 10);
//     randomDigit2 = rand(0, 10);
//    
//     console.log( 'Ciklas viduje = ' + randomDigit + ' ' + randomDigit2)
//
// }
//
//************************************************************************************************ */
//  DO WHILE reiskia - vykdyk, kol, pvz. noredami generuotis random skaicius, kol gausime 5,
//  while(randomNumber !=5 ) teisingas salygos uzrasymas, nes prasome kartoti cikla, kol sugeneruotas skaicius nera 5;
//  while (randomNumber == 5 ) neteisingas uzrasymas, nes salyga sako - kol sugeneruotas skaicius yra == 5, kartok cikla.
//
// naudodami DO WHILE cikla daznai uzsicikliname, del neteisingai uzrasytos salygos - while( ...nelogiska salyga... )
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
// Ciklai 8. UZDAVINYS -------------------------------------------------------------------------------
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
// Ciklai 9. UZDAVINYS -------------------------------------------------------------------------------
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
// Ciklai 10. UZDAVINYS -------------------------------------------------------------------------------
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
// Ciklai 11. UZDAVINYS -------------------------------------------------------------------------------
//
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;


randomDigitC = 0;
skaitiklis = 0;
randomDigitSum = 0;
let iteracijos = 0;
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


    // let iteracijos = 0;
    // while ( iteracijos < 11 ) {
    //     skaitiklis++; // iteruotu ciklu skaitiklis
    //     randomDigitC = rand(0, 10);
    //     randomDigitSum = randomDigitSum + randomDigitC;
    //     console.log(randomDigitC);
    //     iteracijos++;

    // }

    ////////////////////////////////////////////////////////////////
    //
    /// OPTIMALUS sprendimo budas <--------------------------------
    //
    ////////////////////////////////////////////////////////////////

    

    skaitiklis++; // iteruotu ciklu skaitiklis
    randomDigitC = rand(0, 10);
    // randomDigitSum = randomDigitSum + randomDigitC;
    randomDigitSum += randomDigitC; //auksciau esancios eilutes greitesnis uzrasymas
    console.log(randomDigitC);
    iteracijos++;
}

while(randomDigitSum < 200 || iteracijos < 11 );

console.log(`Random digit must be more than 20 after 11 cicles. SUM:${randomDigitSum}. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');


////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 12. UZDAVINYS -------------------------------------------------------------------------------
//
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

let nelyginisSaicius = 0;
skaitiklis = 0;

do {

    skaitiklis++; // iteruotu ciklu skaitiklis
    let randomDigitNelyginis = rand(0, 10);
    //randomDigitNelyginis % 2 ? 0 : nelyginisSaicius++;

    if ( randomDigitNelyginis % 2 != 0 ) {
        nelyginisSaicius++;
        console.log(`Small Cicle:${randomDigitNelyginis}. Iteruotu ciklu skaicius:${skaitiklis}`)
    }

}

while(nelyginisSaicius < 3 );

console.log(`Must be more than 3 Random Odd Digits. SUM:${nelyginisSaicius}. Iteruotu ciklu skaicius:${skaitiklis}`)
console.log('//');
console.log('//');

////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 13. UZDAVINYS -------------------------------------------------------------------------------
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
// Ciklai 14.
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
    // randomDigitSuma1 = randomDigitSuma1 + randomDigit;
    // randomDigitSuma2 = randomDigitSuma2 + randomDigit2;
    randomDigitSuma1 +=  randomDigit;
    randomDigitSuma2 += randomDigit2;

    console.log( 'Ciklo Viduje. Suma = ' + randomDigitSuma1 + ' ' + randomDigitSuma2);

} while (randomDigitSuma1 < 100 || randomDigitSuma2 < 100 )
//randomDigitOneLine = '' + randomDigit + ' ' + randomDigit2;
console.log(`Kiekvieno kintamojo random skaiciu suma turi buti daugiau uz 100 SUMA: ${randomDigitSuma1}  and ${randomDigitSuma2}`);
console.log('//');
console.log('//');


////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 15. UZDAVINYS -----------------------------
//
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
// Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).


let nelyginisSaicius1 = 0;
let nelyginisSaicius2 = 0;

do {

    let randomDigitNelyginis = rand(0, 10);
    let randomDigitNelyginis2 = rand(0, 10);
    //randomDigitNelyginis % 2 ? 0 : nelyginisSaicius++; // fancy uzrasymas

    if ( randomDigitNelyginis % 2 != 0 ) { // jeigus skaicius issidalina su liekana = nelygnis
        
        nelyginisSaicius1++;
        console.log(`Small Cicle A:${randomDigitNelyginis}. `)
    }
    if ( randomDigitNelyginis2 % 2 != 0 ) { // jeigus skaicius issidalina su liekana = nelygnis
        
        nelyginisSaicius2++;
        console.log(`Small Cicle B:${randomDigitNelyginis2}.`)
    }

}

while(nelyginisSaicius1 < 3 || nelyginisSaicius2 < 3 );

console.log(`A Ciklu suma: ${nelyginisSaicius1}  and B Ciklus suma: ${nelyginisSaicius2}.`);
console.log('//');
console.log('//');