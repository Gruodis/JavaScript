// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// cons

let skc = 0;

let ul = document.querySelector('ul');
let body = document.querySelector('body');

// let li = document.createElement('li');

// let text = document.createTextNode('Woohoo');

const upLi = () => {
    ul.querySelectorAll('li').forEach((e, i) => { // e = kintamasis, i = kintamojo indeksas

        e.style.backgroundColor = (i % 2) ? 'black' : null;
        if (e.style.color != 'green' || e.style.backgroundColor == 'orange') {
            e.style.color = 'green'
            e.addEventListener('click', () => {
                // e.style.backgroundColor = (i % 2 !== 0) ? 'black' : null,
                e.style.backgroundColor = 'orange';

            }
            )

        } else {
            e.style.color = i % 2 ? 'red' : 'yellow';

            e.style.backgroundColor = (i % 2) ? 'black' : null;
        }

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

// const upLi = () => {
//     ul.querySelectorAll('li').forEach((e, i) => { // e = kintamasis, i = kintamojo indeksas
//         e.style.backgroundColor = (i % 2 == 0) ? 'black' : null;
//         e.style.color = i % 2 ? 'red' : 'yellow';
//     });
// }

// ul.querySelectorAll('li').forEach((e) => {
//     e.addEventListener('click', (i) => {
//         // e.style.backgroundColor = (i % 2 !== 0) ? 'black' : null,
//         i.style.color = 'yellow' ? 'red' : 'yellow';
//         i.style.backgroundColor = 'black' ? 'black' : null;

//     }
//     )
// })

// ul.querySelectorAll('li').forEach((e, i) => { e.style.color = (i % 2 !== 0) ? 'white' : null; });

const button = document.createElement('button');

text = document.createTextNode(`Spausk`);

button.appendChild(text);

body.appendChild(button);

document.querySelector('button').addEventListener('click', () => { newLi(); });