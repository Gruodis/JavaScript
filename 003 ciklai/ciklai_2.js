function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/////////////////////////////////////////////////////////// 1 Kiti uzdaviniai START ///////////////////////////////////////////////////////

// 1. sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;

// A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
let skaicius1 = rand(5, 25);
let skaicius2 = rand(5, 25);
let skaicius3 = rand(5, 25);

let sum;

sum = skaicius1 + skaicius2 + skaicius3;
console.log(`************ 1 uzdavinys END. suma: ${sum}`);

console.log('//');
console.log('// 1A end //');
console.log('//');

/////////////////////////////////////////////////////////// A Kiti uzdaviniai ///////////////////////////////////////////////////////

// A. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
let sumString; // kintamojo vardas sudaromas pagal "camel case variable" metoda

sumString = ' ' + skaicius1 + ' ' + skaicius2 + ' ' + skaicius3;

//********** Automatic type conversion ************************************************
// pirma rasome tuscias kabutes, nes mums reikia NUMBER tipo kintamuosius paversti i STRING,
// kad tarp ju nebutu atliekama matematikia(dudetis), o tiesiog butu atspausdinama triju kintamuju reiksmes


console.log(`************ 1 uzdavinys END. suma: ${sumString}`);

console.log('//');
console.log('// 1B end //');
console.log('//');

/////////////////////////////////////////////////////////// B End Kiti uzdaviniai ///////////////////////////////////////////////////////

// B. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;

let sumString2; // kintamojo vardas sudaromas pagal "camel case variable" metoda

sumString2 = ' ' + skaicius1 + ' - ' + skaicius2 + ' - ' + skaicius3;
console.log(`************ 1 uzdavinys END. suma: ${sumString2}`);

console.log('//')
console.log('// 1C end //');
console.log('//');

/////////////////////////////////////////////////////////// C End Kiti uzdaviniai ///////////////////////////////////////////////////////

// C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
let sumString3; // kintamojo vardas sudaromas pagal "camel case variable" metoda

sumString3 = ' ' + skaicius1 + ' - ' + skaicius2 + ' - ' + skaicius3 + ' = ' + sum;
console.log(`************ 1 uzdavinys END. suma: ${sumString3}`);

console.log('//');
console.log('// 1D end //');
console.log('//');

/////////////////////////////////////////////////////////// D End Kiti uzdaviniai ///////////////////////////////////////////////////////

///////////////////////////////////////////**************************  2 Kiti uzdaviniai START *******************//////////////////////
//D.  Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

let task2 = rand(5, 10);

console.log('skaicius sugeneruotas', task2);

console.log('//');
console.log('// Sugeneruotas end //');

console.log('//');


/////////////////////////////////////////////////////////// 2 End Kiti uzdaviniai ///////////////////////////////////////////////////////

//3 Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

let hello = 'LABAS';

for(let i = 0; i < 5; i++){

// let hello = 'Labas'; siuo atveju LABAS kintamaji, galima rasyti ir ciklo viduje


    console.log(i, hello)

};

console.log('//');
console.log('// Sugeneruotas Labas end //');
console.log('//');

/////////////////////////////////////////////////////////// 3 End Kiti uzdaviniai ///////////////////////////////////////////////////////
// 4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

for(let i = 0; i < 7; i++){

    console.log(sumString2)

};

console.log('//');
console.log('// Sugeneruotas 7 kartus suma end //');
console.log('//');

/////////////////////////////////////////////////////////// End Kiti uzdaviniai ///////////////////////////////////////////////////////
// 5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas
for(let i = 0; i < task2; i++){

    console.log(task2)

};
;
console.log('//');
console.log(`// Atspausdintas tiek kartu koks skaicius sugeneruotas ${task2} end //`);
console.log('//');

/////////////////////////////////////////////////////////// End Kiti uzdaviniai ///////////////////////////////////////////////////////
// 6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;

if (task2 > 7) {
for(let i = 0; i < task2; i++){

    console.log(`'Random skaicius didesnis uz 7 --->'`,task2)

};
} else {
    console.log('Random skaicius mazesnis uz 7 --->', task2)
}
console.log('//');
console.log(`// Random skaicius ---> ${task2} end //`);
console.log('//');

//////////////////////////////////////////////************** 7 ********************////////////////////////////////////////////////////////////////
// Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;

let task7; //globalus kintamasis

for(let i = 0; i < 5; i++){

    let randomDigit = rand(10, 20)
    console.log('TEst', randomDigit)

};

console.log('//');
console.log(`// 7 end //`);
console.log('//');
// 7-A Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų(let task7;) ir jį atspauzdinkite;

for(let i = 0; i < 5; i++){

    let randomDigit = rand(10, 20);
    task7 = randomDigit;
    console.log('Test - A', task7)

};

console.log('//');
console.log(`// 7-A end //`);
console.log('//');
// 7-B Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
task7 = 0;
//***********************************      SVARBU         ***************************** */
//kintamaji reikia nunulinti, nes jis yra globas(let task7 deklaruotas uz sito ciklo ribu),
// pvz., randomDigit, deklaruotas sito ciklo viduje, todel negali veikti uz jo ribu

for(let i = 0; i < 5; i++){

    let randomDigit = rand(10, 20);
    task7 = task7 + randomDigit;
    console.log('Test - B', task7, typeof randomDigit)

};
console.log('Test - B Suma', task7) //kintamaji task7 iskeliam uz ciklo robu, kad matyti bendra suma

console.log('//');
console.log(`// 7-B end //`);
console.log('//');
// 7-C Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
// task7 = 0; 
task7 = ''; 
//***********************************      SVARBU         ***************************** */
// negalime task7 = 0, nes mums reikia STRING tipo kintamojo
for(let i = 0; i < 5; i++){

    let randomDigit = rand(10, 20);
    task7 = task7 + ' ' +  randomDigit;
   // console.log('Test - C', task7)

};
console.log('Test - C STRING skaiciai su tarpais', task7) //kintamaji task7 iskeliam uz ciklo robu, kad matyti bendra suma

console.log('//');
console.log(`// 7-C end //`);
console.log('//');
// 7-D Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
// Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą,
// paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
task7 = ''; 
let sum2 = 0;
for(let i = 0; i < 5; i++){

    let randomDigit = rand(10, 20);
    sum2 =  sum2 + randomDigit;
    task7 = task7  +  randomDigit + ' ';
   // console.log('Test - sum2', typeof task7, typeof sum2)

};
task7 = task7 + sum2
console.log(`Test - C STRING skaiciai su tarpais ${ task7} ir rodome ju suma: ${  sum2 } ns `, sum2) //kintamaji task7 iskeliam uz ciklo robu, kad matyti bendra suma

console.log('//');
console.log(`// 7-C end //`);
console.log('//');



//***************************     KARTOJIMAS ********************************** */

// Modeliuojam monetos metima, jei Herbas=H, jeigu Skaicius=S

//let moneta = rand(0,1);
let moneta = rand(0,1) ? 'H' : 'S';

console.log(moneta)

// if (moneta) {
//     console.log('H', moneta)
// } else {
//     console.log('S', moneta)
// };

console.log('//');
console.log(`// Monetos metimas end //`);
console.log('//');

// Modeliuojam monetos metima 7 kartus, jei Herbas=H, jeigu Skaicius=S
// suskaiciuoti, kiek kartu buvo H ir kiek kartu buvo S
//let moneta = rand(0,1);
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


// if (moneta) {
//     console.log('H', moneta)
// } else {
//     console.log('S', moneta)
// };

console.log('//');
console.log(`// Monetos metimas 7 kartus end //`);
console.log('//');