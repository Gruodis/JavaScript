function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
*
* Paskaiciuojam viewport
*
*/
let intWV = window.innerWidth;
let intVH = window.innerHeight;
console.log(intWV, intVH)

let intWV2 = window.innerWidth - 100;
let intVH2 = window.innerHeight - 100;

// let apsk = document.querySelector('.apskritimas');
// apsk.style.top = rand(0, intVH2) + 'px';
// apsk.style.left = rand(0, intWV2) + 'px';

/*________________________________________________
*
* BUBBLING EVENT
*
________________________________________________*/

let tevas = document.querySelector('.tevas');
let vaikas = document.querySelector('.vaikas');
let linkas = document.querySelector('a');

tevas.addEventListener('click', function () {
    tevas.style.backgroundColor = 'green'
});

vaikas.addEventListener('click', function (e) {
    e.stopPropagation();
    vaikas.style.backgroundColor = 'purple'
});

linkas.addEventListener('click', function (e) {
    // e.preventDefault();
    linkas.style.backgroundColor = 'brown'
});
console.log(tevas)