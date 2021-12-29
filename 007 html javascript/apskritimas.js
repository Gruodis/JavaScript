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

let apsk = document.querySelector('.apskritimas');
apsk.style.top = rand(0, intVH2) + 'px';
apsk.style.left = rand(0, intWV2) + 'px';
/*
*
* Apskritimas START/STOP funkcija
*
*/

let myVar = null;

function go() {
    apsk.style.top = rand(0, intVH2) + 'px';
    apsk.style.left = rand(0, intWV2) + 'px';
}

function mahGogo() {

    if (apsk.dataset.game == 'stop') {

        apsk.dataset.game = 'play';
        apsk.style.display = 'block';

        function myStartFunction() {
            myVar = setInterval(go, 1000);
        }

        myStartFunction();
    }
    else {

        apsk.dataset.game = 'stop';
        apsk.style.display = 'none';

        function myStopFunction() {
            clearInterval(myVar);
        }
        myStopFunction();

    }

};
mahGogo();


apsk.addEventListener('click', function () {
    mahGogo();
}
);




// setInterval(go, 1000);


let clickBodyCounter = 0;
let clickCircleCounter = 0;



let bodyRez = document.querySelector('.rezultatas');


bodyRez.innerText = clickBodyCounter;


document.querySelector('button').addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    apsk.style.opacity = '1';
    apsk.style.top = '222px';
    clickBodyCounter = 0;
    bodyRez.innerText = clickBodyCounter;
    mahGogo();

    if (apsk.dataset.game == 'stop') {
        document.querySelector('button').innerText = 'START';
        document.querySelector('button').style.backgroundColor = '#4CAF50'

    } else {
        document.querySelector('button').innerText = 'STOP';
        document.querySelector('button').style.backgroundColor = 'red'
    }
});



document.querySelector('.body').addEventListener("click", function () {
    if (apsk.dataset.game == 'play') {

        bodyRez.innerText = ++clickBodyCounter;

    } else {
        bodyRez.innerText = clickBodyCounter;
    }
});

let circleRez = document.querySelector('.rezultatasCircle');


circleRez.innerText = clickCircleCounter;



apsk.addEventListener("click", function () {
    circleRez.innerText = ++clickCircleCounter;
});


console.log();

