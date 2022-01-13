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


        if (e.style.backgroundColor == 'rgb(43, 101, 173)') {
            e.style.backgroundColor = "#2B65AD";

        }
        else {
            e.style.backgroundColor = (i % 2) ? 'black' : null;

        }
        e.addEventListener('click', () => {
            // e.style.backgroundColor = (i % 2 !== 0) ? 'black' : null,
            // e.style.backgroundColor = "#2B65AD";
            if (e.style.backgroundColor == 'rgb(43, 101, 173)') {
                e.style.backgroundColor = (i % 2) ? 'black' : null;
                e.style.color = (i % 2) ? 'yellow' : null;

            }
            // else if (e.style.backgroundColor == 'black') {

            //     e.style.backgroundColor = 'black';
            // }
            else {

                // e.style.backgroundColor = 'transparent';
                e.style.backgroundColor = "#2B65AD";


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