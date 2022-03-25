const btn = document.getElementById('button');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'black'];

function change() {
    const dada = document.body.style.background = rainbow[Math.floor(7 * Math.random())];
    console.log(dada)
}

btn.addEventListener('click', change);

const names = { uta: 'Alexa' }; // an object
console.log(names)
names.uta = 'Siri'; // change the value
console.log(names)