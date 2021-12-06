function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//////////////////////////////// FOR ciklai //////////////////////////////////

// ciklas FOR naudojamas, kai zinome, kiek kartu tures buti atlikta ciklo iteracija (konkretus iteraciju(prasisukimu) skaicius)

//----------------------------------------------------------------

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
