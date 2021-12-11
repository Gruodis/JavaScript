function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!_ _ _DEMESIO SALYGOS TAISYKLE _ _ _!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//
//  let i = 1; reikia, kad skaiciavimas prasides nuo antros reiksmes pvz. jeigu yra 0, 1, 2, 3, 4, skaiciuosime nuo 1, praleisdami 0;
//
//  naudodami sia salyga galime skaiciuoti Nelyginius Elementus, pvz.: for (let i = 1; i < masyvas.length; i += 2) {poriniuSuma += masyvas[i];}
//
//  arba Lyginius pakeite salyga: for (let i = 0; i < masyvas.length; i += 2) {poriniuSuma += masyvas[i];}
//
//  pvz. jeigu salygoje turime: "i = 0; i++"     imsime visas reiksmes 0, 1, 2, 3, 4, 5 ir t.t.
//  pvz. jeigu salygoje turime: "i = 0; i += 2"  imsime KAS ANTRA reiksme 0, 2, 4, 6, 8 ir t.t.
//
//
//
//_______________________________________________________________________________________________________________________________________________________
/////////////////////////////////////////////////////----------------SALYGA END-------------------------/////////////////////////////////////////////////



//////////////////////////////// ARRAY Masyvo Basic UZDAVINIAI /////////////////////////
//
//
// Ciklai 1. UZDAVINYS ------------------------------------------------------------------------
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let masyvas = [];
let masyvasH = [];
let kintantisMasyvoDydis = rand(0, 22)

let cicleWithinCicleCount = 0;


for (let i = 0; i < kintantisMasyvoDydis; i++) { //Kol i maziau uz random skaiciu, kartok Cikla

    cicleWithinCicleCount++;
    masyvas.push(rand(5, 25));
};

for (let i = 0; i <= kintantisMasyvoDydis; i++) { //Kol i maziau uz random skaiciu, kartok Cikla

    masyvasH.push(rand(5, 25));
};

console.log(`

||||||||||||||||||| 1-o ARRAY |||||||||||||||||||
||`);
console.log(masyvas);
console.log(`
||
||=============== 1-o  ATSAKYMAS ===============>
||
||  'Masyvo dydis = ${masyvas.length},
||  'Skaiciu didesniu uz 10 Suma = ${cicleWithinCicleCount},
||
||<================== 1 END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);








//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. A UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let ifMoreThan10 = 0;

for (let i = 0; i < masyvas.length; i++) { //BUTINAI tikriname masyvo DYDI ir kartojame Cikla, kol i reiksme nebebus mazesne uz Masyvo DYDI

    if (masyvas[i] > 10) {// Patikriname ar Masyvo Stalciuje esanti reiksme didesne uz 10
        ifMoreThan10++ //Jeigu didesne, skaiciuojam + 1
    };
};


console.log(`

||||||||||||||||||| 2-o A ARRAY |||||||||||||||||||
||`);
console.log(masyvas);
console.log(`
||
||=============== 2-o A ATSAKYMAS ===============>
||
||  'Masyvo dydis = ${masyvas.length},
||  'Elementu skaicius kuriuose reiksme > 10 = ${ifMoreThan10},
||
||<================== 2 A END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);









//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. B UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Raskite didžiausią masyvo reikšmę ir jos indeksą
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let didziausiaMasyvoReiksme = masyvas[0]; // deklaruojam kintamaji ir priskiriame jam Elementa su reiksme 0,
// ji naudosime Palyginti Elementu reiksmes(Stalciaus viduje esancius skaicius) tarpusavy;

let stalciausIndeksas = 0; // deklaruojam kintamaji, kuri naudosime Elemento(Index'o), Nr suzinoti;

for (let i = 0; i < masyvas.length; i++) {

    if (masyvas[i] > didziausiaMasyvoReiksme) { // imame Stalciuje esancia reiksme ir palyginame ar ji didesne uz Lygynamaja reiksme,
        // jeigu Stalciuje esanti reiksme yra didesne uz Lygynamaja
        didziausiaMasyvoReiksme = masyvas[i]; // priskiriame didesne reisksme kintamajam, kuris skirtas palyginti
        stalciausIndeksas = i;
        console.log('Pirmas cikle did reiksm', didziausiaMasyvoReiksme)

    };

};


console.log(`

||||||||||||||||||| 2-o B ARRAY |||||||||||||||||||
||`);
console.log(masyvas);
console.log(`
||
||=============== 2-o B ATSAKYMAS ===============>
||
||  'Masyvo dydis = ${masyvas.length},
||  'Didziausia masyvo reiksme = ${didziausiaMasyvoReiksme},
||  'Stalciaus indeksas = ${stalciausIndeksas},
||
||<================== 2 B END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);










//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. C UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Rasti lyginius Elementus(index'us), ir susumuoti jų reikšmes;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// didziausiaMasyvoReiksme = masyvas[0]; // kintamasis, kuris bus naudojamas palyginti Stalciuje esancia reiksme.
// stalciausIndeksas = 0; // kuris bus naudojamas indexo(Stalciaus) numeriui atvaizduoti.

// let oddIndexVariableSum = 0;
// let stalciausIndeksasSumavimui = 0;

// for (let i = 1; i < masyvas.length; i++) {// kartojame Cikla, kol pasieksime Masyvo DYDI(.length).

//     ////////////////// 1 UZDAVINIO DALIS ////////////////////////
//     //
//     // Ieskome didžiausios masyvo reikšmę ir jos indeksą:

//     if (masyvas[i] > didziausiaMasyvoReiksme) { // imame Stalciuje esancia reiksme [i] ir Patikriname ar ji didesne uz Lygynamaja reiksme;

//         didziausiaMasyvoReiksme = masyvas[i]; // jeigu [i] reiksme buvo didesne uz Lygynamaja - 'didziausiaMasyvoReiksme', keiciam mazesne kintamojo 'didziausiaMasyvoReiksme'
//         // i didesne reiksme - [i];

//         stalciausIndeksas = i; //  kintamajam 'stalciausIndeksas', priskiriame indexo(Stalciaus) numeri - i.
//         // console.log('Pirmas cikle did reiksm', didziausiaMasyvoReiksme)

//     };

//     ////////////////// 2 UZDAVINIO DALIS ////////////////////////
//     //
//     // ieskome lyginiu indexu(Stalciu) ir sumuojame juose esancias reiksmes:
//     //
//     stalciausIndeksasSumavimui = i; // i reiksme(indexo/Stalciaus numeri), priskirame 'stalciausIndeksasSumavimui', kintamajam;

//     if (i % 2 == 0) { //daliname indexo(Stalciaus), numeri is 2 ir randame lyginius indexus(Stalcius);

//         oddIndexVariableSum += masyvas[i]; //sumuojame lyginiuose indexuose(Stalciuose) esancias reiksmes

//     }

//     // console.log(`stalciau indekas ${stalciausIndeksasSumavimui}`);
//     // console.log(`Kintamasis stalciuje ${oddIndexVariableSum}`);

// };


////////////////// DESTYTOJO SPRENDIMAS Lyginiu Elementu(index'u) reiksmiu suma ////////////////////////
//                                                                                                    //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


let poriniuSuma = 0;
oddIndexVariableSum = 0;
stalciausIndeksas = 0;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!_ _ _DEMESIO SALYGOS TAISYKLE _ _ _!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//
//  let i = 1; reikia, kad skaiciavimas prasides nuo antros reiksmes pvz. jeigu yra 0, 1, 2, 3, 4, skaiciuosime nuo 1, praleisdami 0;
//
//  naudodami sia salyga galime skaiciuoti Nelyginius Elementus, pvz.: for (let i = 1; i < masyvas.length; i += 2) {poriniuSuma += masyvas[i];}
//
//  arba Lyginius pakeite salyga: for (let i = 0; i < masyvas.length; i += 2) {poriniuSuma += masyvas[i];}
//
//  pvz. jeigu salygoje turime: "i = 0; i++"     imsime visas reiksmes 0, 1, 2, 3, 4, 5 ir t.t.
//  pvz. jeigu salygoje turime: "i = 0; i += 2"  imsime KAS ANTRA reiksme 0, 2, 4, 6, 8 ir t.t.


for (let i = 0; i < masyvas.length; i += 2) {// vykdome Cikla, kas antra karta - (praleidziam lyginius Elementus), kartojame kol patikrinsime visus Masyvo Elementus (masyvas.length).

    poriniuSuma += masyvas[i];
    oddIndexVariableSum++;

};
//oddIndexVariableSum;

console.log(`

||||||||||||||||||| 2-o C ARRAY |||||||||||||||||||
||`);
console.log(masyvas);
console.log(`
||
||=============== 2-o C ATSAKYMAS ===============>
||  'Lyginiu Elementu reiksmiu SUMA = ${poriniuSuma},
||
||  'Masyvo dydis = ${masyvas.length},
||  'Didziausia masyvo reiksme = ${didziausiaMasyvoReiksme},
||  'Elemento(index'o) Nr.  = ${stalciausIndeksas},
||  'Lyginiuose Elementuose(Stalciuose) esanciu skaciu SUMA = ${oddIndexVariableSum},
||
||<================== 2 C END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);









//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. F UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių Elementu(index'o) reikšmių, 
//      o kitas iš porinių(pagal neporinį - porinį indeksą, ne reikšmę);
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let masyvasF1 = [];
let masyvasF2 = [];

// for (let i = 0; i <= masyvas.length - 1; i++) { //Kol i maziau uz masyvas.length, kartok Cikla;

//     if (i % 2 == 0) { //randame Elementus su lyginiais skaiciais(reiksmemis);
//         masyvasF2.push(masyvas[i]);
//     }

//     else { //like Elementai su NElyginiais skaiciais(reiksmemis);

//         masyvasF1.push(masyvas[i]);

//     }

// };

//////////////////------------------- DESTYTOJO SPRENDIMAS--------------------  ////////////////////////
//                                                                                                    //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
masyvasF1 = [];
masyvasF2 = [];

for (let i = 0; i < masyvas.length; i += 2) { //Kol i maziau uz masyvas.length, kartok Cikla;
    masyvasF2.push(masyvas[i]);

};
for (let i = 0; i < masyvas.length - 1; i += 2) { //Kol i maziau uz masyvas.length, kartok Cikla;



    masyvasF1.push(masyvas[i + 1]);

};

console.log(`

||||||||||||||||||| 2-o F ARRAY |||||||||||||||||||
||`);
console.log(masyvasF1, 'F1 - NEporiniu indexu reiksmes');
console.log(masyvasF2, 'F2 - Poriniu indexu reiksmes');

console.log(`
||
||=============== 2-o F  ATSAKYMAS ===============>
||
||  'F1 Masyvo dydis = ${masyvasF1.length},
||  'F2 Masyvo dydis = ${masyvasF2.length},
||  'F1 + F2 = ${masyvasF1.length + masyvasF2.length},
||
||<================== 2 F END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);














//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. D UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

naujasMasyvas = [];


for (let i = 0; i < masyvas.length; i++) {

    naujasMasyvas.push(masyvas[i] - i)

}

console.log(`

||||||||||||||||||| 2-o D ARRAY |||||||||||||||||||
||`);
console.log(naujasMasyvas);

console.log(`
||
||=============== 2-o D ATSAKYMAS ===============>
||
||  'Masyvo dydis = ${naujasMasyvas.length},
||  ,
||
||<================== 2 D END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);




//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. G UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Lyginiu Elementu(index'u) reiksmes paverskite 0, jeigu Elemento reiksme didesne už 15;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


didziausiaMasyvoReiksme = masyvas[0]; // kintamasis, kuris bus naudojamas palyginti Stalciuje esancia reiksme.
stalciausIndeksas = 0; // kuris bus naudojamas indexo(Stalciaus) numeriui atvaizduoti.

oddIndexVariableSum = 0;
stalciausIndeksasSumavimui = 0;

// for (let i = 0; i < masyvas.length; i++) {// kartojame Cikla, kol pasieksime Masyvo DYDI(.length).

//     ////////////////// 1 UZDAVINIO DALIS ////////////////////////
//     //
//     // Ieskome didžiausios masyvo reikšmę ir jos indeksą:

//     if (masyvas[i] > didziausiaMasyvoReiksme) { // imame Stalciuje esancia reiksme [i] ir Patikriname ar ji didesne uz Lygynamaja reiksme;

//         didziausiaMasyvoReiksme = masyvas[i]; // jeigu [i] reiksme buvo didesne uz Lygynamaja - 'didziausiaMasyvoReiksme', keiciam mazesne kintamojo 'didziausiaMasyvoReiksme'
//         // i didesne reiksme - [i];

//         stalciausIndeksas = i; //  kintamajam 'stalciausIndeksas', priskiriame indexo(Stalciaus) numeri - i.
//         // console.log('Pirmas cikle did reiksm', didziausiaMasyvoReiksme)

//     };

//     ////////////////// 2 UZDAVINIO DALIS ////////////////////////
//     //
//     // ieskome lyginiu indexu(Stalciu) ir sumuojame juose esancias reiksmes:
//     //
//     stalciausIndeksasSumavimui = i; // i reiksme(indexo/Stalciaus numeri), priskirame 'stalciausIndeksasSumavimui', kintamajam;

//     if ((stalciausIndeksasSumavimui % 2 == 0) && (masyvas[i] > 15)) { //daliname indexo(Stalciaus), numeri is 2 ir randame lyginius indexus(Stalcius);

//         oddIndexVariableSum += masyvas[i]; //sumuojame lyginiuose indexuose(Stalciuose) esancias reiksmes

//         masyvas[i] = i - i;

//     }

// };

//////////////////------------------- DESTYTOJO SPRENDIMAS--------------------  ////////////////////////
//                                                                                                    //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < masyvas.length; i += 2) { //Kol i maziau uz masyvas.length, kartok Cikla;

    if (masyvas[i] >= 15) {

        masyvas[i] = 0;
    }

};


console.log(`

||||||||||||||||||| 2-o G ARRAY |||||||||||||||||||
||`);
console.log(masyvas);
console.log(`
||
||=============== 2-o G ATSAKYMAS ===============>
||
||  'Masyvo dydis = ${masyvas.length},
||  'Didziausia masyvo reiksme = ${didziausiaMasyvoReiksme},
||  'Stalciaus indeksas = ${stalciausIndeksas},
||  'Lyginiuose indeksuose(Stalciuose) esanciu skaciu SUMA = ${oddIndexVariableSum},
||
||<================== 2 G END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);




//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. E UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//
//kintantisMasyvoDydis = rand(0, 30)

cicleWithinCicleCount = 0;

if (masyvas.length < 39) {

    do {
        cicleWithinCicleCount++;
        masyvas.push(rand(2, 3));
    } while (masyvas.length != 39); //kartok Cikla kol masyvas.length bus lygus 39 (nebebus nelygus 39)
};
console.log(`

||||||||||||||||||| 2-o E ARRAY |||||||||||||||||||
||`);
console.log(masyvas);
console.log(`
||
||=============== 2-o E  ATSAKYMAS ===============>
||
||  'Masyvo dydis = ${masyvas.length},
||  'Papyldomai sugeneruota elementu = ${cicleWithinCicleCount},
||
||<================== 2 E END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);







//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//
//// Ciklai 2. H UZDAVINYS ------------------------------------------------------------------------
//
//      Naudodamiesi 1 uždavinio masyvu:
// 	    Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


stalciausIndeksas = 0; // naudojamas indexo(Stalciaus) numeriui atvaizduoti.



for (let i = 0; i < masyvasH.length; i++) {// kartojame Cikla, kol pasieksime Masyvo DYDI(.length).


    if (masyvasH[i] > 20) {

        stalciausIndeksas = i;
        // break;
    }
    else {

    }

};


console.log(`

||||||||||||||||||| 2-o H ARRAY |||||||||||||||||||
||`);
console.log(masyvasH);
console.log(`
||
||=============== 2-o H ATSAKYMAS ===============>
||
||  'Masyvo dydis = ${masyvasH.length},

||  'Stalciaus indeksas, kuris pirmas turejo didesni skaiciu uz 20  = ${stalciausIndeksas},

||
||<================== 2 H END ===================||
||
||||||||||||||||||||||||||||||||||||||||||||||||||
`);
