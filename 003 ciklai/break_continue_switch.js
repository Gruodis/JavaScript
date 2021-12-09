function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
};
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

|| Saukti VALIO stojomes ${jCount3Valio} kartus. Viso susukom VALIO ${jCount3Valio*3} kartus.

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

    if (loopRandomNumberHH == 5 ) {
        // console.log(`  Kaulio ${iCount} metimas 5 Valio!`);
        console.log(`  Saukiam 5 kartus Valio!`);
        for (let j = 1; j <= loopRandomNumberHH; j++) {
        console.log(`   - ${j} Valio!`);
        };
        
    }
    else {
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

|| Kiek kartu isridenom skaiciu 5: ${iCount-jCount} kartus.

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
///////////////////////////////////////////////////////////////////////////
let sviesoforoSpalva;

let siuntosDydis = sviesoforoSpalva;
let randomas;

sviesoforoSpalva = rand(0, 2) ? (rand(0, 1) ? 'S' : 'M') : 'XL';
switch (siuntosDydis) {

    case 'S':
        console.log(`Ar yra laisvu S`);
        if(sviesoforoSpalva) {
            console.log(`Turim S`, randomas);
            break;
        }
    case 'M':
        console.log(`Ar yra laisvu M`);
        if(sviesoforoSpalva) {
            console.log(`Turim M ${randomas}`);
            break;
        }
    default:
        console.log(`Ar yra laisvu XL`, sviesoforoSpalva);
        if(sviesoforoSpalva) {
            console.log(`Uzimta`);
        }
}
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||
||========> Sviesoforo spalvos su SWITCH.
`);


// switch (sviesoforoSpalva) {

//     case sviesoforoSpalva:
//         console.log(`Dega`);
//         if(sviesoforoSpalva = sviesoforoSpalva ) {
//             console.log(` ${sviesoforoSpalva} spalva`, randomas);
//             break;
//         }
// }