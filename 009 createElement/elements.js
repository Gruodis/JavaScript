// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// cons

let skc = 0;

let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');
let body = document.querySelector('body');

// let li = document.createElement('li');

// let text = document.createTextNode('Woohoo');

const upLi = () => {
    ul.querySelectorAll('li').forEach((e, i) => { // e = kintamasis, i = kintamojo indeksas


        if (e.style.backgroundColor == 'pink') {
            e.style.backgroundColor = "pink";

        }
        else {
            e.style.backgroundColor = (i % 2) ? 'pink' : null;

        }
        e.addEventListener('click', () => {


            if (e.style.backgroundColor = (i % 2)) {
                e.style.backgroundColor == null ? e.style.backgroundColor = 'pink' : e.style.backgroundColor = null;
            }
            else {
                e.style.backgroundColor == 'pink' ? e.style.backgroundColor = null : e.style.backgroundColor = 'pink';

            }

        })
    });
}
const newLi = () => {

    const li = document.createElement('li');
    let text = document.createTextNode(`Woohoo ${++skc}`);
    li.appendChild(text);
    ul.appendChild(li);
    console.log('test', skc);

    upLi();



}
newLi();

for (let i = 0; i < 10; i++) {

    newLi();
    // bW();

}


// ul.querySelectorAll('li').forEach((e, i) => { e.style.color = (i % 2 !== 0) ? 'white' : null; });

const button = document.createElement('button');

text = document.createTextNode(`Spausk`);

button.appendChild(text);

body.appendChild(button);

document.querySelector('button').addEventListener('click', () => { newLi(); });