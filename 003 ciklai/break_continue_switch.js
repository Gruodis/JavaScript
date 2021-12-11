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





let iCount = 0;
let jCount = 0;
let jCount3Valio = 0;

for (let i = 1; i <= 5; i++) {
    iCount++;

    console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Didysis ciklas prasisuko ${i} kartus
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    for (let j = 1; j <= 4; j++) {
        jCount++;

        console.log(`   || Mazasis ciklas prasisuko ${j} kartus`);

        if (j === 3) {
            jCount3Valio++;

            console.log(`
        ||========> Valio! prasukom 3 kartus.
        `);
        }
    }
}
console.log(`
||||||||||||---STATISTIKA--|||||||||||||
||                                    ||
|| Cicle STOP when reached 5 times.   ||
||                                    ||
========================================
||                                    ||
|| Didysis ciklas prasisuko ${iCount} kartus. ||
||                                    ||
|| Mazasis ciklas prasisuko ${jCount} kartus.
||                                    ||

|| Saukti VALIO stojomes ${jCount3Valio} kartus. Viso susukom VALIO ${jCount3Valio * 3
    } kartus.

||                                    ||
||||||||||||||||||||||||||||||||||||||||`);

// ========================= Keiciam FOR i DO WHILE =================================================//

iCount = 0;
jCount = 0;
jCount3Valio = 0;

let loopRandomNumberHH;

let sumingWhenRandomNotFive = 0;
let sumingWhenRandomIsFive = 0;

do {
    loopRandomNumberHH = rand(1, 5);

    iCount++;

    console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
===> ${iCount}-as kauliuko metimas
Isridentas skaicius: ${loopRandomNumberHH}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    if (loopRandomNumberHH == 5) {
        // console.log(`  Kaulio ${iCount} metimas 5 Valio!`);
        console.log(`  Saukiam 5 kartus Valio!`);
        for (let j = 1; j <= loopRandomNumberHH; j++) {
            console.log(`   - ${j} Valio!`);
        }
    } else {
        jCount++;
        // console.log(`  Kaulio ${iCount} metimas ${loopRandomNumberHH} Valio!`);
        console.log(`  Saukiam ${loopRandomNumberHH} kartus - Valio!`);

        for (let j = 1; j <= loopRandomNumberHH; j++) {
            console.log(`   -  ${j} Valio`);

            if (j === loopRandomNumberHH) {
                jCount3Valio++;

                console.log(`
            ||========> ${loopRandomNumberHH} kart - Valio!.
            `);
            }
        }
    }
    sumingWhenRandomIsFive += loopRandomNumberHH;
} while (loopRandomNumberHH != 5);

loopRandomNumberHH++;
console.log(`
||
|| SALYGA: Metam kauliuka kol iskrenta skaicius 5, iskritus 5-tui, susunkam 3 kartus VALIO.
||
||
||||||||||||---STATISTIKA--|||||||||||||
||                                    ||
|| Cicle STOP when reached 5 times.   ||
||                                    ||
========================================
||                                    ||
|| Didysis ciklas prasisuko ${iCount} kartus. ||
||                                    ||

|| Kiek kartu neisridenom skaiciaus 5: ${jCount} kartus.

|| Kiek kartu isridenom skaiciu 5: ${iCount - jCount} kartus.

||                                    ||
........................................
    Stojomes saukti VALIO ${iCount} karta(-us). 
||
    Viso VALIO saukem: ${sumingWhenRandomIsFive} kartus(-u).
........................................    
||                                    ||
||||||||||||||||||||||||||||||||||||||||`);

//////////////////////////////// JavaScript SWITCH /////////////////////////
//
// SWITCH yra ciklas, kuriame panaudoje BREAK padarome if funkcija
//
///////////////////////////////////////////////////////////////////////////
let sviesoforoSpalva;

let siuntosDydis = sviesoforoSpalva;
let randomas;

sviesoforoSpalva = rand(0, 2) ? (rand(0, 1) ? "S" : "M") : "XL";
switch (siuntosDydis) {
    case "S":
        console.log(`Ar yra laisvu S`);
        if (sviesoforoSpalva) {
            console.log(`Turim S`, randomas);
            break;
        }
    case "M":
        console.log(`Ar yra laisvu M`);
        if (sviesoforoSpalva) {
            console.log(`Turim M ${randomas}`);
            break;
        }
    default:
        console.log(`Ar yra laisvu XL`, sviesoforoSpalva);
        if (sviesoforoSpalva) {
            console.log(`Uzimta`);
        }
}
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||
||========> Sviesoforo spalvos su SWITCH.
`);

//sviesoforoSpalva = rand(0, 2) ? (rand(0, 1) ? 'Zalia' : 'Geltona') : 'Raudona';
//randomas = rand(0, 2) ? (rand(0, 1) ? 'Zalia' : 'Geltona') : 'Raudona';

let arTelpaSiunta = "M";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DEMESIO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// Generuojame rand(0, 2), tikimybe viena karta is triju gauti 0, du kartus is triju gauti skaiciu 1 arba 2
//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DEMESIO -  reiksmiu inversinimas !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// Zinome, kad skaicius 0 = FALSE, bet naudodami !rand() mes inversinom reiksmes,
// todel !rand() sugeneruotas skaicius 1 arba 2 igauna (FALSE) reiksme, skaicius 0 = (TRUE),
// todel du kart is triju cele gali buti uzimta(1, 2 = FALSE) ir viena karta laisva(0 = TRUE).
//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Norime matyti kiekvienos celes randomas() sugeneruotas reiksmes:
let isSlotAvailableS;
let isSlotAvailableM;
let isSlotAvailableL;
let isSlotAvailableXL;

switch (arTelpaSiunta) {
    case "S":
        console.log(`Tikrinam S`);
        if ((isSlotAvailableS = !rand(0, 2))) {
            console.log(`Siunta ideta i S  cele:${isSlotAvailableS}, if isSlotAvailable() = 0, cele lasiva.`);
            break;
        } else {
            console.log(`|${isSlotAvailableS}|===> S UZIMTA.`);
        };
    case "M":
        console.log(`Tikrinam M`);
        if ((isSlotAvailableM = !rand(0, 2))) {
            console.log(`Siunta ideta i M  cele:${isSlotAvailableM}, if isSlotAvailable() = 0, cele lasiva.`);
            break;
        } else {
            console.log(`|${isSlotAvailableM}|===> M UZIMTA.`);
        };
    case "L":
        console.log(`Tikrinam L`);
        if ((isSlotAvailableL = !rand(0, 2))) {
            console.log(`Siunta ideta i L  cele:${isSlotAvailableL}, if isSlotAvailable() = 0, cele lasiva.`);
            break;
        } else {
            console.log(`|${isSlotAvailableL}|===> L UZIMTA.`);
        };
    default:
        console.log(`Tikrinam XL`);
        if ((isSlotAvailableXL = !rand(0, 2))) {
            console.log(`Siunta ideta i XL cele: ${isSlotAvailableXL}`);
        } else {
            console.log(`${isSlotAvailableXL}|===> XL UZIMTA.
            
            ||  Patikrinome visas auksciau isvardintas celes. 
            ||++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            ||  Pastomate laisvos vietos neradome.  ${isSlotAvailableXL}`);

        }

}

console.log(`
||
||
||  S=${isSlotAvailableS}, M=${isSlotAvailableM}, L=${isSlotAvailableL}, XL=${isSlotAvailableXL}`)
