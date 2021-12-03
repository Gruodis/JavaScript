function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//ciklas yra pasikartojimas sklaistu viduje

//ciklo kintamojo deklaravimas, kad butu aisku kiek kartu pakartoti

// let i


//reikia nusakyti salyga

//i < 10 //prasuks cikla 10 ska

//parasom kiek padides i po kiekvieno ciklo

// i++

//do yra for

////////// ------ UZDAVINIAI -----//////////////

//2.	console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
//let skaicius = 0;

for(let i = 0; i < 5; i++){

    console.log('labas', i)

};
console.log('//')
console.log('// 2 end //')
//3.	console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

// for(let didinam10 = 0; didinam10 < 50; didinam10 = didinam10 + 10){
    for(let i = 0; i < 5; i++){

    console.log('labas', i * 10)

};
console.log('//')
console.log('// 3 end //')
//4.	console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

for(let i = 49; i <= 54; i++){
    

    console.log('labas', i)

};
console.log('//')
console.log('// 4 end //')

//5.	console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

for(let i = 4; i>= 0; i--){

    console.log('labas', i)

};
console.log('//')
console.log('// 5 end //')

//6.	console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
for(let i = 0; i <= 8; i++){

    console.log('labas', i++)

};
console.log('//')
console.log('// 6 end //');

//7.
for (let i = 0; i < 5; i++) {

    console.log(rand(0, 10));

};
console.log('//')
console.log('// 7 end //');

//8.


/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////


let skaicius1 = rand(5, 25);
let skaicius2 = rand(5, 25);
let skaicius3 = rand(5, 25);

let sum;

sum = skaicius1 + skaicius2 + skaicius3;
console.log(`************ 1 uzdavinys END. suma: ${sum}`);

console.log('//')
console.log('// 1A end //');

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////


let sumString; // kintamojo vardas sudaromas pagal "camel case variable" metoda

sumString = ' ' + skaicius1 + ' - ' + skaicius2 + ' - ' + skaicius3;
console.log(`************ 1 uzdavinys END. suma: ${sumString}`);

console.log('//')
console.log('// 1B end //');

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////


let sumString2; // kintamojo vardas sudaromas pagal "camel case variable" metoda

sumString2 = ' ' + skaicius1 + ' - ' + skaicius2 + ' - ' + skaicius3;
console.log(`************ 1 uzdavinys END. suma: ${sumString2}`);

console.log('//')
console.log('// 1C end //');

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////


let sumString3; // kintamojo vardas sudaromas pagal "camel case variable" metoda

sumString3 = ' ' + skaicius1 + ' - ' + skaicius2 + ' - ' + skaicius3 + ' = ' + sum;
console.log(`************ 1 uzdavinys END. suma: ${sumString3}`);

console.log('//')
console.log('// 1D end //');

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////


let numberis = rand(5, 10);

console.log('skaicius sugeneruotas', numberis);

console.log('//')
console.log('// Sugeneruotas end //');

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////

let kintamasisLabas = 'Labas Pupa';

for(let i = 0; i < 5; i++){

    console.log(i, kintamasisLabas)

};

console.log('//')
console.log('// Sugeneruotas LabasPupa end //');

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////


for(let i = 0; i < 7; i++){

    console.log(sumString2)

};

console.log('//')
console.log('// Sugeneruotas 7 kartus suma end //');

/////////////////////////////////////////////////////////// Kiti uzdaviniai ///////////////////////////////////////////////////////

for(let i = 0; i < numberis; i++){

    console.log(numberis)

};

console.log('//')
console.log('// Atspausdintas tiek kartu koks skaicius sugeneruotas end //');
