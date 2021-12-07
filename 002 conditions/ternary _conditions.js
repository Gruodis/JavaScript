function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

let digit = 0; //kintamasis su 0 == false reiksmei.

// TERNARY susideda is salyga ? TRUE : FALSE
// salyga ==>
// sekanti dalis po ? TRUE, po : FALSE
// todel jeigu randomDigit issidalina be liekanos = 0 = FALSE
// jeigu randomDigit issidalina be liekanos = 1 = TRUE (visi tiegiami ir neigiami skaiciai yra TRUE)
//
// tik nulis yra false !!!
//
// Noredami suskaiciuoti, kiek lyginiu/nelyginiu skaiciu sugeneravome, po salygos nurodome nelyginius skaicius,
// nes norint skaiciuoti lyginius skaicius salygoje random skaiciu padalinus is 2, turime gauti TRUE, bet
// kai salygoje skaicius issidalina is 2, mes gauname 0 ==> FALSE, todel turi issidalinti su liekana, kad gautumem TRUE
//
// pvz.: randomDigit % 2 ? randomDigitNelygniaiSkaiciai++ : randomDigitLyginiaiSkaiciai++;
//
// galime parasyti % 2 !=1, tuomet, pirma galesime sukeisti Lyginiu ir Nelygiu skaiciu vietas
//
// pvz.: randomDigit % 2 !=1 ? randomDigitLyginiaiSkaiciai++ : randomDigitNelygniaiSkaiciai++;
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let priskirta = (1 < 2) ? true : false //vykdo salyga, kuri pries ? ir parodo true arba false
//salyga visad yra true arba false

let priskirta2 = rand(1 < 2) ? true : false //vykdo salyga, kuri pries ? ir parodo true arba false

let trys = rand(0, 2) ? (rand(0, 1) ? 'green' : 'yellow' ) : 'red';
// pirma salyga - du trecdaliai(du kartus iskris true ir viena karta false = 0),
// antra salyga po ? 50 ant 50
console.log(trys)


//logines salygos atliekamos tik tarp 1 ir 0, true ir false

//and && abui salygos turi buti true
//or || bent viena salyga turi buti true
//not !

console.log('1 && 1', 1 && 1)


// rand(0,1) 50% tikimybe, kad bus true
// rand(0,1) || rand(0,1) 25% tikimybe, kad bus true