function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// cons

let skc = 0;

let ul = document.querySelector('ul');
let body = document.querySelector('body');

// let li = document.createElement('li');

// let text = document.createTextNode('Woohoo');
const newLi = () => {

    let li = document.createElement('li');
    let text = document.createTextNode(`Woohoo ${++skc}`);
    li.appendChild(text);
    ul.appendChild(li);
    console.log('test', skc);

    li.addEventListener('click', () => {
        // e.style.backgroundColor = (i % 2 !== 0) ? 'black' : null,
        li.style.color = 'red' ? 'red' : null;
    }
    )

}
const bW = () => {
    ul.querySelectorAll('li').forEach((e, i) => {
        e.style.backgroundColor = (i % 2 !== 0) ? 'black' : null,
            e.style.color = (i % 2 !== 0) ? 'white' : null;;
    });
}
bW();

for (let i = 0; i < 10; i++) {

    newLi();
    bW();

}

// const bG = () => {
//     ul.querySelectorAll('li').forEach((e) => {
//         e.addEventListener('click', () => {
//             // e.style.backgroundColor = (i % 2 !== 0) ? 'black' : null,
//             e.style.color = 'green' ? 'black' : 'green';
//         }
//         )
//     })
// }
// bG();

// ul.querySelectorAll('li').forEach((e, i) => { e.style.color = (i % 2 !== 0) ? 'white' : null; });

let button = document.createElement('button');

text = document.createTextNode(`Spausk`);

button.appendChild(text);

body.appendChild(button);

document.querySelector('button').addEventListener('click', newLi, bW)