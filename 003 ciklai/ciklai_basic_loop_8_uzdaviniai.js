function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////// Ciklas DO WHILE Basic Loop 8 Punkto UZDAVINIAI /////////////////////////
//
//
// Ciklai 8. UZDAVINYS ------------------------------------------------------------------------
//
// SALYGA:
// Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, 
// kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let randomDigit;

do {

    let randomDigit = rand(10, 14);
    console.log('Ciklo viduje:',randomDigit);
}
while (randomDigit >= 12);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('//');
console.log('//');


////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 8. A UZDAVINYS -----------------------------------------------------------------------
//
// SALYGA:
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

randomDigit = 0;

do {

    randomDigit = rand(10, 14);
    console.log(randomDigit);
}
while (randomDigit >= 12);

console.log('Skaicius uz ciklo ribu:',randomDigit, `<============ A ===============`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('//');
console.log('//');



////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 8. B UZDAVINYS -----------------------------------------------------------------------
//
// SALYGA:
// Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

randomDigit = 0;
let iteracijuKiekis = 0;
do {
    randomDigit = rand(10, 25);
    console.log(randomDigit);
    iteracijuKiekis++;
}
while (randomDigit >= 12);

console.log(`Ciklu kiekis: ${iteracijuKiekis} <============ B ===============`);
console.log(`Ciklas STOP, kai ${randomDigit} < 12.`);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('//');
console.log('//');

////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 8. C UZDAVINYS -----------------------------------------------------------------------
//
// SALYGA:
// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, 
// kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

randomDigit = 0;
cikluKiekis = 0;
let randomDigitSum = 0;

do {
    randomDigit = rand(10, 25);
    console.log(randomDigit);
    cikluKiekis++;
    if (randomDigit <= 18) {
        randomDigitSum += randomDigit;
    }
}
while (randomDigit >= 12);

console.log(`Skaiciu < uz 18 suma: ${randomDigitSum}. <============ C ===============`);
console.log(`Ciklas STOP, kai ${randomDigit} < 12, Ciklu kiekis: ${cikluKiekis}`);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('//');
console.log('//');

////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 8. D UZDAVINYS -----------------------------------------------------------------------
//
// SALYGA:
// Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, 
// kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). 
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

randomDigit = 0;
cikluKiekis = 0;
randomDigitSum = 0;
let randomDigitAtmestiSum = 0;

do {
    randomDigit = rand(10, 25);
    cikluKiekis++;
    // if (randomDigit < 18) {
    //     randomDigitSum += randomDigit;
    //     console.log('Tinkami Skaiciai: ',randomDigit);
    // }
    // if (randomDigit > 18) {
    //     // randomDigitAtmestiSum += randomDigit;
    //     randomDigitAtmestiSum++;

    //     console.log('Netinkami skaiciai: ',randomDigit);
    // }
    ////////////////////////////////////////////////////////////////
    //
    /// OPTIMALUS/FANCY sprendimo budas <--------------------------------
    //
    ////////////////////////////////////////////////////////////////

    randomDigit < 18 ? randomDigitSum += randomDigit : randomDigitAtmestiSum++;

    console.log(randomDigit < 18 ? 'Imam' + ' ' + (randomDigit) : 'Atmetam' + ' ' + (randomDigit) );



}
while (randomDigit >= 12);

console.log(`Tinkamu skaiciu suma: ${randomDigitSum}, Skaiciu, kurie buvo > uz 18 kiekis: ${randomDigitAtmestiSum}. <============ D ===============`);
console.log(`Ciklas STOP, kai ${randomDigit} < 12, Ciklu kiekis: ${cikluKiekis}`);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('//');
console.log('//');

////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 8. E UZDAVINYS -----------------------------------------------------------------------
//
// SALYGA:
// Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

randomDigit = 0;
cikluKiekis = 0;
randomDigitSum = 0;
randomDigitAtmestiSum = 0;

do {
    randomDigit = rand(10, 25);
    cikluKiekis++;

    // if (randomDigit % 2 == 0) {
    //     randomDigitSum += randomDigit;
    //     console.log('Lyginiai Skaiciai: ',randomDigit);
    // }
    // if (randomDigit % 2 != 0) {
    //     randomDigitAtmestiSum += randomDigit;
    //     console.log('Nelyginiai skaiciai: ', randomDigit);
    // }

    ////////////////////////////////////////////////////////////////
    //
    /// OPTIMALUS sprendimo budas <--------------------------------
    //
    ////////////////////////////////////////////////////////////////


    // sprendimui naudojam TERNARY
    // salyga ==>
    // sekanti dalis po ? TRUE, po : FALSE
    // todel jeigu randomDigit issidalina be liekanos = 0 = FALSE
    // jeigu randomDigit issidalina be liekanos = 1 = TRUE (visi tiegiami ir neigiami skaiciai yra TRUE)
    randomDigit % 2 ? randomDigitAtmestiSum++ : randomDigitSum++;

    console.log(randomDigit % 2 ? 'Nelyginis' + ' ' + (randomDigit) : 'Lyginis' + ' ' + (randomDigit) );


}
while (randomDigit >= 12);
console.log(`Lyginiu skaiciu kiekis: ${randomDigitSum}, Nelyginiu skaiciu kiekis: ${randomDigitAtmestiSum}. <============ E ===============`);
//console.log(`Nelyginiai skaiciai: ${'' + cikluKiekis + randomDigit}`);

console.log(`Ciklas STOP, kai ${randomDigit} < 12, Ciklu kiekis: ${cikluKiekis}`);


////////////////////////////////////////////////////////////////////////////////////////////////
//
// Ciklai 8. F UZDAVINYS -----------------------------------------------------------------------
//
// SALYGA:
// Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). 
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

randomDigit = 0;
let iteracijuKiekisF;

let smallCicleCount = 0;
let bigCicleCount = 0;

do {
    bigCicleCount++;
    iteracijuKiekisF = 0;
    do {
        smallCicleCount++;
        randomDigit = rand(10, 14);
        console.log(randomDigit);
        iteracijuKiekis++;

        //console.log(`|| Small Cicle Count: ${smallCicleCount}`);

    }
    while (randomDigit >= 12);
    console.log(`MAZASIS: ${smallCicleCount}`);


} while (iteracijuKiekis <= 20)

console.log(`<============ F ===============`);
console.log(`Ciklas STOP, kai ${iteracijuKiekis} > 20. ${randomDigit}`);
console.log(`
||
|| Big Cicle Count: ${bigCicleCount}
|| Small Cicle Count: ${smallCicleCount}`);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log('//');
console.log('//');
