function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Javasript tarpinio žinių patikrinimo testas #1

// Duotas toks vardų masyvas:
const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];



// 1. Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai
// skaičiai nuo 2 iki 12;
// Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai
// vardai iš masyvo girls. Vardai gali kartotis. Masyvus atspausdinkite
// su console.log();

let cats = [];
let owners = [];

for (let i = 0; i < rand(1, 22); i++) {

    cats.push(rand(2, 9));

    // generuojam random savininku vardus is "girls" Objekto
    owners.push(girls[
        rand(0, girls.length - 1)// sugeneruotas skaicius = nuo 0 iki max vardu skaicius, ir -1, kitaip masyvas bus 1 didesnis uz esama vardu skaiciu.
    ]);

};

console.log(`

||||||||||||||||||| 1-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Random kaciu skaicius: ${cats}
*
*   Savininku vardai: ${girls}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY Cats:`, cats);
console.log(`|
===> ARRAY Cats.length:`, cats.length);
console.log(`|
===> ARRAY owners:`, owners);
console.log(`|
===> ARRAY Owners:`, owners.length);
console.log(`|
===> Random skaicius:`, );
console.log(`|
------------------------>> 1-o END <<-----------------------`);










// 2. Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo
// narių sumą). Sumuokite tik tas katinukų reikšmes, kurios be liekanos
// dalijasi iš 3. Rezultatą atspausdinkite su console.log();

let catsCount = 0;

for (let i = 0; i < cats.length; i++) {

    if (cats[i] % 3 === 0) {

        catsCount++;
        //console.log(`dalinasi is 3`, cats[i])

    };

};

console.log(`

||||||||||||||||||| 2-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Random kaciu skaicius: ${cats}
*
*   Savininku vardai: ${girls}
*
*   Kaciu kiekis, kuriu reiksme dalinasi is 3 : ${catsCount}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY Cats:`, cats);
console.log(`|
===> ARRAY Cats.length:`, cats.length);
console.log(`|
===> ARRAY owners:`, owners);
console.log(`|
===> ARRAY Owners:`, owners.length);
console.log(`|
===> Random skaicius:`, );
console.log(`|
------------------------>> 2-o END <<-----------------------`);








// 3. Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o
// pridėkite papildomai, o neužrašykite ant mergaitės!) pridėkite vardą
// 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;

owners.unshift('Nausėda');


console.log(`

||||||||||||||||||| 3-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Random kaciu skaicius: ${cats}
*
*   Savininku vardai: ${girls}
*
*   Kaciu kiekis, kuriu reiksme dalinasi is 3 : ${catsCount}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY Cats:`, cats);
console.log(`|
===> ARRAY Cats.length:`, cats.length);
console.log(`|
===> ARRAY owners:`, owners);
console.log(`|
===> ARRAY Owners:`, owners.length);
console.log(`|
===> Random skaicius:`, );
console.log(`|
------------------------>> 3-o END <<-----------------------`);












// 4. Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas,
// sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats),
// naudodami masyvus cats ir owners pagal taisyklę: pirmai mergaitei
// iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats
// masyvo, antrai - antras ir t.t. Atkreipkite dėmesį, kad pirma mergaitė
// owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra
// 'Nausėda'), o antrasis su indeksu 1. Pirmas katinukų skaičius cats
// masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su
// console.log();

let catOwners = [];
let jungiamOwnerCat;

for (let i = 0; i < owners.length - 1; i++) {

    if (undefined == (cats[i])) {

        catOwners.push(owners[i] + ' turi: 0');
    }
    else {
        // catOwners.push(owners[i + 1] + ' turi: ' + cats[i]);
        catOwners.push(`${owners[i + 1]} turi ${cats[i]} katinus`);
    };
}
//catOwners.push()

console.log(`

||||||||||||||||||| 4-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Random kaciu skaicius: ${catOwners}
*
*   Savininku vardai: ${girls}
*
*   Kaciu kiekis, kuriu reiksme dalinasi is 3 : ${catsCount}
*
*
-----------------------STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY Cats:`, catOwners);
console.log(`|
===> ARRAY Cats.length:`, cats.length);
console.log(`|
===> ARRAY owners:`, owners);
console.log(`|
===> ARRAY Owners:`, owners.length);
console.log(`|
===> Random skaicius:`, );
console.log(`|
------------------------>> 4-o END <<-----------------------`);












// 5. Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi
// (nesvarbu kiek kartų) ir jį atspausdinkite su console.log().
let kartojasi;

let kartojasiKartus = 0;
let kartojasi2 = 0;

let vardoIndex = [];

const vardoTikrinimas = [];

for (var i = 0; i < owners.length; i++) {

    if (vardoTikrinimas.indexOf(owners[i]) == -1) { // (-1) = tikrina ar Masyve "vardoTikrinimas", reiksme "owners[i], egzistuoja, jeigu"

        vardoTikrinimas.push(owners[i]);

        kartojasiKartus = 0;

    } else {
        kartojasi = owners[i];

        kartojasiKartus++;
    }
}

for (var i = 0; i < owners.length; i++) {
    if (kartojasi == owners[i]) {

        kartojasi2++;

        vardoIndex.push(i);
    }
};

if (kartojasi == undefined) {
    kartojasi = 'NESIKARTOJO';
    vardoIndex = 0;

};
// let showtimesAsString = owners.join(', ');
let showtimesAsString = vardoIndex.join(', '); 
console.log(`

||||||||||||||||||| 5-o UZDAVINIO ARRAY |||||||||||||||||||
*
*
*   Pasikartojantis vardas: ${kartojasi}, pasikartojo ${kartojasi2} karta(-us), vardo index: ${showtimesAsString}
*
*   Savininku vardai: ${showtimesAsString}
*
*
    ----------------------- STATISTIKA--------------------------`
);


console.log(`|
===> ARRAY Cats: `, kartojasi);
console.log(`|
===> ARRAY Cats.length: `, vardoTikrinimas);
console.log(`|
===> ARRAY owners: `, owners);
console.log(`|
===> ARRAY Owners: `, owners.length);
console.log(`|
===> Random skaicius: `, );
console.log(`|
------------------------>> 5 - o END << ----------------------- `);