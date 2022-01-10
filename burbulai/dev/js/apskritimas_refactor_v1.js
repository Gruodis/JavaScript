import { rand } from './functions';


// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

let intWV2;
let intVH2;


let nIntervId;

let speed;
let changeSpeed = speed;

let timeRemaining = 20000;

document.getElementById("start").addEventListener("click", startInterval);
document.getElementById("stop").addEventListener("click", stopInterval);

export const heightOutput = document.querySelector('#height');
export const widthOutput = document.querySelector('#width');

const section = document.querySelectorAll('section');

// document.querySelectorAll('section').addEventListener('click', e => e.stopPropagation());


let apsk = document.querySelectorAll('.apskritimas');
let reset = document.querySelector('.reset');
let pause = document.querySelector('.pause');
let classBody = document.querySelector('.body');
let rezDiv = document.querySelector('.rezDiv');
const bubblesLeftCounter = document.querySelector('.bubblesLeft strong');
let bubbleRezDiv = document.querySelector('.bubbleRezDiv');
let timerDiv = document.querySelector('.timer');

let bodyClickCount = 0;
let bubbleClickCount = 0;
let bubblesLeft = apsk.length;
bubblesLeftCounter.innerText = bubblesLeft;

let newTimeInt;

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


let newBall = () => {

    let newBallGo = document.createElement('div');
    let text = document.createTextNode(`Woohoo`);
    newBallGo.appendChild(text);
    newBallGo.className = "apskritimas";

    function setAttributes(el, options) {
        Object.keys(options).forEach(function (attr) {
            el.setAttribute(attr, options[attr]);
        })
    }
    setAttributes(newBallGo, { 'data-game': 'play', 'data-game-state': 'pause' });
    // newBallGo.setAttribute("data-game, data-game-state", "play", "data-game-state", "pause");
    classBody.appendChild(newBallGo);
    // console.log('test', skc);
}
newBall();




const go = itemInitGo => {

    // for (let i = 0; i < apsk.length; i++) {
    if (itemInitGo.dataset.game == 'play' && itemInitGo.dataset.gameState == 'pause') {
        itemInitGo.style.top = rand(150, (intVH2 - 50)) + 'px';
        itemInitGo.style.left = rand(0, intWV2) + 'px';
        // itemInitGo.innerText = 1 + i++;
        itemInitGo.innerText = '😊';

        let sekunde = 1 - (bubbleClickCount / 20)
        itemInitGo.style.transition = 'all ' + sekunde + "s";
    }
    else {
        itemInitGo.style.cursor = null;
    }
    // }

}


/*///////////////////////////////////////////////////////////////////////

RESET mygtukas

//////////////////////////////////////////////////////////////////////*/

reset.addEventListener('click', function (e) {

    e.stopPropagation();
    // priskiriam kintamajam burbulu skaiciu ir su innerText atvaizduojam
    bubblesLeft = apsk.length;
    bubblesLeftCounter.innerText = bubblesLeft;
    // resetinam nepataikytus paspaudimus
    bodyClickCount = 0;
    rezDiv.innerText = bodyClickCount;
    // resetinam pataikytus paspaudimus
    bubbleClickCount = 0;
    bubbleRezDiv.innerText = bubbleClickCount;




    apsk.forEach(function (item) {
        // resetinam burbulo display: none
        item.style = null;

        item.dataset.game = 'play';
        item.dataset.gameState = 'pause';
        pause.innerText = 'Pause ||';
    }) // end forEach

    clearInterval(nIntervId);

    startInterval();

    window.clearTimeout(newTimeInt);
    newTimeInt = setTimeout(stopInterval, timeRemaining);


})


/*///////////////////////////////////////////////////////////////////////

Play/Pause mygtukas

//////////////////////////////////////////////////////////////////////*/
pause.addEventListener('click', function (e) {

    e.stopPropagation();

    if (pause.innerText != 'PLAY !') {
        // timer.pause();
        window.clearTimeout(newTimeInt);
        console.log('Pause init');
    } else {
        // timer.resume();
        window.clearTimeout(newTimeInt);
        newTimeInt = setTimeout(stopInterval, timeRemaining);
        console.log('Resume init');

    }

    apsk.forEach(function (item) {

        if (item.dataset.gameState == 'pause' && item.dataset.game == 'play') {

            item.style.backgroundColor = 'black';

            item.dataset.gameState = 'unpause';
            pause.innerText = 'PLAY !';

            console.log('Pause && Stop')


        }

        else if (item.dataset.gameState == 'unpause' && item.dataset.game == 'play') {
            if (item.dataset.game == 'stop') {
                item.dataset.gameState = 'unpause';
                item.dataset.game = 'stop'
                item.style.backgroundColor = 'red';
            }
            else {
                item.dataset.gameState = 'pause';
            }
            pause.innerText = 'Pause ||';
            item.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            console.log('Unpause && PLay 2')


        }


    }) // end forEach
})

/*///////////////////////////////////////////////////////////////////////

BODY mygtukas

//////////////////////////////////////////////////////////////////////*/
classBody.addEventListener('click', function (e) {
    if (nIntervId != null) {
        if (bubblesLeft == 0 || pause.innerText == 'PLAY !') {

            e.stopPropagation();
        }
        else {
            e.stopPropagation();
            rezDiv.innerText = ++bodyClickCount;
        }
    } // if interval not NULL

})

/*///////////////////////////////////////////////////////////////////////

STOP bubling on header, neskaiciuoti nepataikytu paskaudimu ant header

//////////////////////////////////////////////////////////////////////*/

section.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation();

    }
    )
})



/*///////////////////////////////////////////////////////////////////////

BURBULAI mygtukas

//////////////////////////////////////////////////////////////////////*/




////////////////////////////////////////////////////////////////////
apsk.forEach(function (burbulas) {
    let div = document.querySelector('.bubbleRezDiv');
    let divOffset = offset(div);
    function offset(el) {
        let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    burbulas.addEventListener('click', function (e) {

        if (nIntervId != null) {
            burbulas.style.cursor = 'pointer';
            burbulas.style.display = 'block';



            // console.log(divOffset.left, divOffset.top);



            e.stopPropagation()


            if (burbulas.dataset.game == 'play' && burbulas.dataset.gameState == 'pause') {
                burbulas.dataset.game = 'stop';
                burbulas.style.backgroundColor = 'red';

                burbulas.style.top = (divOffset.top + 165) + 'px';
                burbulas.style.left = (divOffset.left - 20) + 'px';
                burbulas.innerText = '😲'
                burbulas.style.backgroundImage = "url('pow.png')"

                setTimeout(() => {

                    burbulas.style.top = (divOffset.top + 55) + 'px';
                    burbulas.style.left = (divOffset.left + 40) + 'px';
                    burbulas.style.padding = '0px';
                    burbulas.style.fontSize = '0px';
                }, 1000)

                bubbleRezDiv.innerText = ++bubbleClickCount;

                bubblesLeft--;
                bubblesLeftCounter.innerText = bubblesLeft;



                // startInterval();






                console.log(nIntervId, 'Length: ', apsk.length, ' BubleClick: ', bubbleClickCount, ' BublesLeft: ', bubblesLeft, 'change speed', speed, changeSpeed);
            }



            if (bubblesLeft == 0) {
                window.setTimeout(() => {
                    // reset.style.display = 'block';
                    reset.style.transform = 'scale(1) translate(-50%, -50%)';


                    // window.setTimeout(function () {
                    reset.style.opacity = '1';
                    // reset.style.transform = 'scale(1)';
                    pause.style.opacity = 0;
                    // pause.style.display = 'none';


                    // }, 300);
                }, 1000)
            }
        } // if interval not NULL

    })

}) //end forEach




//  Nustatome kiekvieno burbulo pirmine pozicija
apsk.forEach(function (itemInitGo) {
    go(itemInitGo);
})


// Kiekvienam burbului paleidziame funkcija
const buhu = () => {
    apsk.forEach(function (itemInitGo) {
        if (itemInitGo.dataset.game == 'play' && itemInitGo.dataset.gameState == 'pause') {
            itemInitGo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            itemInitGo.style.cursor = 'pointer';
        }
        setTimeout(() => {
            go(itemInitGo);
        },
            rand(0, 1000))
    }) //end forEach
}

function startInterval() {


    // reset.style.display = 'none';
    reset.style.transform = 'scale(0) translate(-50%, -50%)';
    reset.style.opacity = '0';
    // reset.style.transform = 'scale(0)';
    pause.style.opacity = '1';
    // pause.style.display = 'block';
    pause.style.transform = 'scale(1) translate(-50%, -50%)';

    // check if already an interval has been set up
    if (!nIntervId) {
        nIntervId = setInterval(buhu, 1200);
    } else {
        clearInterval(nIntervId);

        speed = (1200 - (bubbleClickCount * 80));
        changeSpeed = speed;
        nIntervId = setInterval(buhu, changeSpeed);
    }


}
startInterval();


function stopInterval() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;



    window.setTimeout(() => {
        // reset.style.display = 'block';
        reset.style.transform = 'scale(1) translate(-50%, -50%)';
        reset.style.opacity = '1';
        // reset.style.transform = 'scale(0)';
        pause.style.transform = 'scale(0) translate(-50%, -50%)';

        pause.style.opacity = '0';
        // pause.style.display = 'none';

    }, 1000);
}
/*///////////////////////////////////////////////////////////////////////

// TIMER

//////////////////////////////////////////////////////////////////////*/

// let state = document.getElementById('secondsCounter');

// var Timer = function (callback, delay) {
//     var timerId, start, remaining = delay;

//     this.pause = function () {
//         window.clearTimeout(timerId);
//         timerId = null;
//         remaining -= Date.now() - start;
//         state.innerText = remaining;


//     };

//     this.resume = function () {
//         if (timerId) {
//             return;
//         }

//         start = Date.now();
//         timerId = window.setTimeout(callback, remaining);
//     };

//     this.resume();

//     function timeTest() {
//         return console.log('Vars ', timerId, start, remaining);
//     }

//     setInterval(timeTest, 1000)



// };

// var timer = new Timer(stopInterval, 10000);

// stabdom viska po n laiko
// var timer = new Timer(stopInterval, 10000);



const cicleStop = () => {
    newTimeInt = setTimeout(stopInterval, timeRemaining);
}
cicleStop();

// rodome kiek sekundziu trunka zaidimas

let seconds = 0;
let el = document.getElementById('secondsCounter');

function incrementSeconds() {
    for (let i = 0; i < 1; i++) {

        if (seconds >= 0) {
            el.innerText = (timeRemaining - (seconds++ * 1000)) / 1000;
            console.log(timeRemaining / 1000)
        }
        else {
            el.innerText = ':('
        }
    }
}
incrementSeconds();

let cancel = setInterval(incrementSeconds, timeRemaining);

// console.log('Timer :', timer.stop, timer.resume, nIntervId, intVH2, intWV2)

