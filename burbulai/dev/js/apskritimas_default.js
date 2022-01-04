function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let intWV2;
let intVH2;

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

let apsk = document.querySelectorAll('.apskritimas');
let reset = document.querySelector('.reset');
let pause = document.querySelector('.pause');
let classBody = document.querySelector('.body');
let rezDiv = document.querySelector('.rezDiv');
let bubblesLeftCounter = document.querySelector('.bubblesLeft');
let bubbleRezDiv = document.querySelector('.bubbleRezDiv');
let timerDiv = document.querySelector('.timer');

let bodyClickCount = 0;
let bubbleClickCount = 0;
let bubblesLeft = bubblesLeftCounter.innerText = apsk.length;

let myVar = null;

// Rasome funkcija responsive langui
let responsiveWindow = () => {
    intWV2 = window.innerWidth - 100;
    intVH2 = window.innerHeight - 100;
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}
responsiveWindow();
// iskvieciame responsive funkcija su listneriu 'resize'
window.addEventListener('resize', responsiveWindow);


function myTimer() {
    const d = new Date();
    timerDiv.innerHTML = d.toLocaleTimeString();
}
myTimer();
setInterval(myTimer, 1000);

const go = i => {

    // for (let i = 0; i < apsk.length; i++) {
    if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
        apsk[i].style.top = rand(150, (intVH2 - 50)) + 'px';
        apsk[i].style.left = rand(0, intWV2) + 'px';
        apsk[i].innerText = 1 + i++;
    }
    // }

}




reset.addEventListener('click', function (e) {

    e.stopPropagation();

    bubblesLeftCounter.innerText = bubblesLeft;
    bodyClickCount = 0;
    rezDiv.innerText = bodyClickCount;
    bubbleClickCount = 0;
    bubbleRezDiv.innerText = bubbleClickCount;
    for (let i = 0; i < apsk.length; i++) {
        apsk[i].style = null;
        apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        apsk[i].dataset.game = 'play';
        apsk[i].dataset.gameState = 'pause';
        pause.innerText = 'Pause ||';


    }
})

pause.addEventListener('click', function (e) {

    e.stopPropagation();


    for (let i = 0; i < apsk.length; i++) {

        if (apsk[i].dataset.gameState == 'pause' && apsk[i].dataset.game == 'play') {

            apsk[i].style.backgroundColor = 'black';

            apsk[i].dataset.gameState = 'unpause';
            pause.innerText = 'PLAY !';

            apsk[i].style.top = rand(100, (intVH2 - 50)) + 'px';
            apsk[i].style.left = rand(0, intWV2) + 'px';

        } else {
            apsk[i].dataset.gameState = 'pause';
            pause.innerText = 'Pause ||';
            apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            if (apsk[i].dataset.game == 'stop') {

                apsk[i].style.backgroundColor = 'red';
            }

        }


    }
})




classBody.style.cursor = 'pointer';

let gugu = true;

classBody.addEventListener('click', function (e) {

    for (let i = 0; i < apsk.length; i++) {
        if ((apsk[i].dataset.gameState == 'unpause')) {
            e.stopPropagation();
            gugu = false;
            // bubblesLeft - bubbleClickCount;
        } else {
            gugu = true;
        }
    }

    if ((bubblesLeft - bubbleClickCount) != 0 && gugu == true) {
        e.stopPropagation();
        rezDiv.innerText = ++bodyClickCount;


    }
})


for (let i = 0; i < apsk.length; i++) {
    apsk[i].addEventListener('click', function (e) {

        function offset(el) {
            var rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        var div = document.querySelector('.bubbleRezDiv');
        var divOffset = offset(div);
        console.log(divOffset.left, divOffset.top);



        e.stopPropagation()


        if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
            apsk[i].dataset.game = 'stop';
            apsk[i].style.backgroundColor = 'red';

            apsk[i].style.top = (divOffset.top + 95) + 'px';
            apsk[i].style.left = (divOffset.left + 45) + 'px';
            apsk[i].style.padding = '0px';
            apsk[i].style.fontSize = '0px';
            apsk[i].style.zIndex = '9999';

            // setTimeout(() => {

            bubbleRezDiv.innerText = ++bubbleClickCount;
            // }, 2500)

        }

        bubblesLeftCounter.innerText = bubblesLeft - bubbleClickCount;
        console.log('Length: ', apsk.length, ' BubleClick: ', bubbleClickCount, ' BublesLeft: ', bubblesLeft)

    })
}


// const gohaha = i => {
//     classBody = document.createElement('div');
//     classBody.textContent = "Sup, y'all?";
//     classBody.setAttribute('class', 'apskritimas', 'data-game-state="pause"');
//     document.body.appendChild(classBody);
// }
// gohaha();

//  Nustatome kiekvieno burbulo pirmine pozicija
for (let i = 0; i < apsk.length; i++) {

    go(i);
}


// Kiekvienam burbului paleidziame funkcija
setInterval(
    () => {
        for (let i = 0; i < apsk.length; i++) {
            if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
                apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            }
            setTimeout(() => {
                go(i);
            },
                rand(0, 600))
        }
    }, 3000);


console.log(go, intVH2, intWV2)