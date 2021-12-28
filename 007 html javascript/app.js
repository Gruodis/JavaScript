// const h1 = this.document.querySelector('h1');
// let div = this.document.querySelector('div:nth-of-type(2n)');
// let div = this.document.querySelector('div+div');

// // h1.style.fontSize = '4em';
// // h1.style.fontSize = '4em';


// div.style.cssText = 'width: 100%; height: 40px; color: blue; padding: .6em; margin: 1em 0em; border-bottom: 1px solid #333';


let h1 = document.querySelector('h1'); // deklaruojame kintamaji ir priskiriame jam h1 taga
h1.classList.add("mystyle", "test"); // pridedame viena ar daugiau klase h1 tagui
h1.classList.remove("test"); // isimame kale is h1 tago

const body = this.document.querySelector('body');
// body.classList.add('body');
// body.style.backgroundColor = 'green';

// body.style.width = '100vw';
// body.style.height = '100wh';

// function doDisco() {

//     if (body.style.backgroundColor == 'green') { // nuskaitome ar dabar bg spava yra "black", jeigu spalva "black", vykdom sekancia eilute
//         body.style.backgroundColor = null; // null panaikina galiojanti stiliu ir vykdo sekancia eilute
//     }
//     else {
//         body.style.backgroundColor = 'green'; // funkcija sustoja
//     }
//     console.log('Disco');
// }

// setInterval(doDisco, 1000)

console.log('tr');

// function doToggle() {

//     h1.classList.toggle("mystyle"); // pridedame/istriname clase


// }

// setInterval(doToggle, 1000)

let h2africa = this.document.querySelector('h2');
let h2usa = this.document.querySelector('h2+h2');

h2africa.classList.add('blue');
h2africa.style.cssText = 'padding: .6em; margin: 1em 0em; background-color: green;';

h2usa.classList.add('green');
h2usa.style.cssText = 'padding: .6em; margin: 1em 0em; background-color: blue;';


// function doAfrica() {

//     // if ((h2africa.style.backgroundColor == 'green')) { // nuskaitome ar dabar bg spava yra "black", jeigu spalva "black", vykdom sekancia eilute
//     //     h2africa.style.cssText = 'padding: .6em; margin: 1em 0em; background-color: blue;';
//     //     h2usa.style.cssText = 'padding: .6em; margin: 1em 0em; background-color: green;';


//     // }
//     // else {
//     //     h2africa.style.backgroundColor = 'green'; // funkcija sustoja
//     //     h2usa.style.cssText = 'padding: .6em; margin: 1em 0em; background-color: blue;';

//     // }


//     ////////////////////////////////////////////////////////////////////////////////////////////////
//     //
//     // Sprendimas su loginiais kintamaisiais
//     //
//     ////////////////////////////////////////////////////////////////////////////////////////////////


//     h2africa.style.cssText = h2africa.style.cssText == 'background-color: blue;' ? 'background-color: green;' : 'background-color: blue;';
//     h2usa.style.cssText = h2usa.style.cssText == 'background-color: green;' ? 'background-color: blue;' : 'background-color: green;';

//     h2africa.classList.toggle("blue"); // pridedame/istriname clase
//     h2africa.classList.toggle("green"); // pridedame/istriname clase


//     h2usa.classList.toggle("green"); // pridedame/istriname clase
//     h2usa.classList.toggle("blue"); // pridedame/istriname clase

// }

let myg = setInterval(
    function () {
        h2africa.style.cssText = h2africa.style.cssText == 'background-color: blue;' ? 'background-color: green;' : 'background-color: blue;';
        h2usa.style.cssText = h2usa.style.cssText == 'background-color: green;' ? 'background-color: blue;' : 'background-color: green;';

        h2africa.classList.toggle("blue"); // pridedame/istriname clase
        h2africa.classList.toggle("green"); // pridedame/istriname clase


        h2usa.classList.toggle("green"); // pridedame/istriname clase
        h2usa.classList.toggle("blue"); // pridedame/istriname clase

    }, 1000)

function paspaudimas() {
    console.log('jajajajajajaj')
};

let button = document.querySelector('button');

button.addEventListener("click", paspaudimas);
// button.addEventListener('mouseover', doAfrica);

button.addEventListener("click", function () {
    console.log('BOOOM!')
});


