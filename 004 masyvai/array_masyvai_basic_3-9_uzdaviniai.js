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
// Ciklai 3. UZDAVINYS ------------------------------------------------------------------------
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, D ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let randomRaides = rand(0, 3) ? (rand(0, 2) ? (rand(0, 1) ? 'A' : 'B') : 'C') : 'D';

let arrayThree = []; // deklaruotas Objektas "arrayThree";

let randomNumberOfElements = rand(1, 200); // generuojame atsitiktini Elementu skaiciu Objektui "arrayThree";

let skaiciuojamRaidesA = 0; // deklaruotas kintamasis, kuriame sumuosime raides A;
let skaiciuojamRaidesB = 0; // deklaruotas kintamasis, kuriame sumuosime raides B;
let skaiciuojamRaidesC = 0; // deklaruotas kintamasis, kuriame sumuosime raides C;
let skaiciuojamRaidesD = 0; // deklaruotas kintamasis, kuriame sumuosime raides D;

let randomRaides; // deklaruojame kintamaji kuris atpazins raide Elemento viduje(Stalciuje);

for (let i = 0; i <= randomNumberOfElements; i++) { // kartojame cikla, kol bus pasiektas "randomNumberOfElements" esantis skaicius;

    arrayThree.push(randomRaides = rand(0, 3) ? (rand(0, 2) ? (rand(0, 1) ? 'A' : 'B') : 'C') : 'D'); // kartojant cikla, generuojame atsitiktine raide;

    if (randomRaides === 'A') {      // patikriname ar sugeneruota raide yra A;
        skaiciuojamRaidesA++;        // Skaiciuojame raides A;
    }
    else if (randomRaides === 'B') { // patikriname ar sugeneruota raide yra B;
        skaiciuojamRaidesB++;        // Skaiciuojame raides B;
    }
    else if (randomRaides === 'C') { // patikriname ar sugeneruota raide yra C;
        skaiciuojamRaidesC++;        // Skaiciuojame raides C;
    }
    else {                           // jeigu auksciau esantys IF'ai neatitinka uzduotos salygos( raide === raide );
        skaiciuojamRaidesD++;        // Skaiciuojame raides D, 
    }

}
console.log(arrayThree);

console.log(`Elementu esanciu Objekte "array.Three" skaicius:`, arrayThree.length);

console.log(`||
||  Skaiciuojam raides - A:`, skaiciuojamRaidesA);

console.log(`||
||  Skaiciuojam raides - B:`, skaiciuojamRaidesB);

console.log(`||
||  Skaiciuojam raides - C:`, skaiciuojamRaidesC);

console.log(`||
||  Skaiciuojam raides - D:`, skaiciuojamRaidesD);


// 3.	Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, D ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// 4.	Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// 5.	Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
// 6.	Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
// 7.	Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
// 8.	Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
// 9.	Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.