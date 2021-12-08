// document.addEventListener("DOMContentLoaded", function (logger) {
//     console.old = console.log;
//     console.log = function () {
//         var output = "", arg, i;

//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             output += "<span class=\"log-" + (typeof arg) + "\">";

//             if (
//                 typeof arg === "object" &&
//                 typeof JSON === "object" &&
//                 typeof JSON.stringify === "function"
//             ) {
//                 output += JSON.stringify(arg);   
//             } else {
//                 output += arg;   
//             }

//             output += "</span>&nbsp;";
//         }

//         logger.innerHTML += output + "<br>";
//         console.old.apply(undefined, arguments);
//     };
// })(document.getElementById("logger"));

// Testing
// console.log("Hi!", {a:3, b:6}, 42, true);
// console.log("Multiple", "arguments", "here");
// console.log(null, undefined);
// console.old("Eyy, that's the old and boring one.");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////// Ciklas DO WHILE Basic Loop 9 Punkto UZDAVINIAI /////////////////////////
//
//
// Ciklai 9. UZDAVINYS ------------------------------------------------------------------------
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


let loopRandomNumber;

do {
    loopRandomNumber = rand(5, 10)
    console.log(`'Random number ciklo viduje  ${loopRandomNumber}.`);

} while (loopRandomNumber != 5)

console.log(`//
||============ 9-to ATSAKYMAS ===============>

'Ciklas STOP, kai "Random Number", ciklo viduje = ${loopRandomNumber},

<================== 9. END ===================||
//
//`);








//////////////////////////////// Ciklas DO WHILE Basic Loop 9 Punkto UZDAVINIAI /////////////////////////
//
//
// Ciklai 9. A UZDAVINYS ------------------------------------------------------------------------
// A.	Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. 
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


loopRandomNumber = 0;
let bigCicleCount = 0;
let cicleWithinCicleCount = 0;

do {

    loopRandomNumber = rand(5, 7)
    console.log(`'Random number Didziojo ciklo viduje  ${loopRandomNumber}.
    ||`);

        for (let i = 1; i < loopRandomNumber; i++) {
            console.log(`   'Mazojo Ciklo numeris: ${i}.`);
            cicleWithinCicleCount++;
        }

    bigCicleCount++;

} while (loopRandomNumber != 5);

console.log(`//
||============ 9-to A  ATSAKYMAS ===============>

'Didysis Ciklas prasisuko = ${bigCicleCount},
'Mazasis Ciklas prasisuko = ${cicleWithinCicleCount},

'Ciklas STOP, kai "Random Number", Dizdiojo ciklo viduje = ${loopRandomNumber},

<================== 9. A END ===================||
//
//`);

//////////////////////////////// Ciklas DO WHILE Basic Loop 9 Punkto UZDAVINIAI /////////////////////////
//
//
// Ciklai 9. B UZDAVINYS ------------------------------------------------------------------------
//
// B.	Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
// bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


loopRandomNumber = 0;
bigCicleCount = 0;
cicleWithinCicleCount = 0;
let threeSameNumbers = 0;

do {

    loopRandomNumber = rand(5, 6)
    console.log(`
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'Random number Didziojo ciklo viduje  ${loopRandomNumber}.
    ||`);

        for (let i = 1; i < loopRandomNumber; i++) {
            console.log(`   'Mazojo Ciklo numeris: ${i}.`);
            cicleWithinCicleCount++;
        }
    
        //loopRandomNumber == 5 ? threeSameNumbers++ : threeSameNumbers;

        if (loopRandomNumber == 5) {

                threeSameNumbers++;

        };

    bigCicleCount++;

// } while (loopRandomNumber != 5 || threeSameNumbers != 3);
} while (threeSameNumbers != 3);


console.log(`//
||============ 9-to B  ATSAKYMAS ===============>

'Didysis Ciklas prasisuko = ${bigCicleCount},
'Mazasis Ciklas prasisuko = ${cicleWithinCicleCount},

'Ciklas STOP, kai "Random Number", Dizdiojo ciklo viduje = (${loopRandomNumber}), pasikartos (${threeSameNumbers})-kartus.

<================== 9. B END ===================||
//
//`);
//////////////////////////////// Ciklas DO WHILE Basic Loop 9 Punkto UZDAVINIAI /////////////////////////
//
//
// Ciklai 9. C UZDAVINYS ------------------------------------------------------------------------
//
// C.	Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
//
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


loopRandomNumber = 0;
bigCicleCount = 0;
cicleWithinCicleCount = 0;
threeSameNumbers = 0;

do {

    loopRandomNumber = rand(5, 6)
    console.log(`
    'Random number Didziojo ciklo viduje  ${loopRandomNumber}.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ||`);

        for (let i = 0; i < loopRandomNumber; i++) {
            console.log(`   'Mazojo Ciklo numeris: ${i + 1}.`);
            cicleWithinCicleCount++;
        }
    
    loopRandomNumber == 5 ? threeSameNumbers++ : threeSameNumbers = 0;

    // if (loopRandomNumber == 5) {

    //     threeSameNumbers++;

    // };

    bigCicleCount++;

// } while (loopRandomNumber != 5 || threeSameNumbers != 3);
} while (threeSameNumbers != 3);


console.log(`//
||============ 9-to C ATSAKYMAS ===============>

'Didysis Ciklas prasisuko = ${bigCicleCount},
'Mazasis Ciklas prasisuko = ${cicleWithinCicleCount},

'Ciklas STOP, kai "Random Number", Dizdiojo ciklo viduje = (${loopRandomNumber}), bus sugeneruotas (${threeSameNumbers})-kartus is eiles.

<================== 9. C END ===================||
//
//`);
//////////////////////////////// Ciklas DO WHILE Basic Loop 9 Punkto UZDAVINIAI /////////////////////////
//
//
// Ciklai 10. UZDAVINYS ------------------------------------------------------------------------
//
// 10.	Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20,
//      Kazys - surenka taškų kiekį nuo 5 iki 25. 
//      Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: laimėtojo vardas”. 
//
//      Taškų kiekį generuokite funkcija rand(). Žaidimą laimi tas, kas greičiau surenka 222 taškus.
//      Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


let zaidejasKazys = 0;
let zaidejasPetras = 0;
let susumuotiPetroTaskai = 0;
let susumuotiKazioTaskai = 0;

bigCicleCount = 0;

do {

    zaidejasKazys = rand(10, 20);
    zaidejasPetras = rand(10, 25);

    console.log(`
    'Zaideju Random numbers. KAZYS: ${zaidejasKazys}, PETRAS: ${zaidejasPetras}.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ||`);


    if (zaidejasKazys < 200  ) {
        susumuotiKazioTaskai += zaidejasKazys;
    }
    zaidejasKazys++;
    

    if (zaidejasPetras < 200  ) {
        susumuotiPetroTaskai += zaidejasPetras;
    }
    zaidejasPetras++;

    bigCicleCount++;


} while ((susumuotiPetroTaskai < 200 && susumuotiKazioTaskai < 200) || (susumuotiKazioTaskai == susumuotiPetroTaskai));



console.log(`
////////////////////////////////////////////////////////////////////////////////
// `);
console.log(
    susumuotiKazioTaskai > susumuotiPetroTaskai ? 
    ('=====================>  Laimejo Kazys'  + ' ' + susumuotiKazioTaskai) : ('========================>  Laimejo Petras' + ' ' + susumuotiPetroTaskai)
    );

console.log(`// 
////////////////////////////////////////////////////////////////////////////////`
);

console.log(`//
||================ 10. STATISTIKA ===============>
||
||   'Didysis Ciklas prasisuko = ${bigCicleCount},
||
||   susumuoti Petro taskai = ${susumuotiPetroTaskai},
||
||   susumuoti Kazio taskai = ${susumuotiKazioTaskai},
||
||
||<================== 10. END ===================||
//
//`);


