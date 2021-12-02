function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

let digit = 0; //kintamasis su false reiksme

// minusine reiksme yra true, tik nulis yra false


let priskirta = (1 < 2) ? true : false //vykdo salyga, kuri pries ? ir parodo true arba false
//salyga visad yra true arba false

let priskirta2 = rand(1 < 2) ? true : false //vykdo salyga, kuri pries ? ir parodo true arba false

let trys = rand(0, 2) ? (rand(0,1) ? 'green' : 'yellow' ) : 'red';
// pirma salyga - du trecdaliai(du kartus iskris true ir viena karta false = 0),
// antra salyga po ? 50 ant 50
console.log(trys)


//logines salygos atliekamos tik tarp 1 ir 0

//and && abui salygos turi buti true
//or || bent viena salyga turi buti true
//not !

console.log('1 && 1', 1 && 1)


// rand(0,1) 50% tikimybe, kad bus true
// rand(0,1) || rand(0,1) 25% tikimybe, kad bus true