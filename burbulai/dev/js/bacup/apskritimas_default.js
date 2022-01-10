function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let intWV2;
let intVH2;

let intervaloGreitis;

let nIntervId;

let speed;
let changeSpeed = speed;

let timeRemaining = 20000;

document.getElementById("start").addEventListener("click", startInterval);
document.getElementById("stop").addEventListener("click", stopInterval);

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

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

let myVar = null;

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


function myTimer() {
    const d = new Date();
    timerDiv.innerHTML = d.toLocaleTimeString();
}
myTimer();
setInterval(null);

const go = i => {

    // for (let i = 0; i < apsk.length; i++) {
    if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
        apsk[i].style.top = rand(150, (intVH2 - 50)) + 'px';
        apsk[i].style.left = rand(0, intWV2) + 'px';
        // apsk[i].innerText = 1 + i++;
        apsk[i].innerText = '😊';

        let sekunde = 1 - (bubbleClickCount / 20)
        apsk[i].style.transition = 'all ' + sekunde + "s";
    }
    else {
        apsk[i].style.cursor = null;
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




    for (let i = 0; i < apsk.length; i++) {
        // resetinam burbulo display: none
        apsk[i].style = null;

        apsk[i].dataset.game = 'play';
        apsk[i].dataset.gameState = 'pause';
        pause.innerText = 'Pause ||';
    }

    clearInterval(nIntervId);

    startInterval();
    // cicleStop();

    // Timer(null, null);
    // // timer(null, null)
    // timer.resume(null)
    // timer.pause(null)
    // clearInterval(timer);
    // clearInterval(timer.resume);
    // clearInterval(timer.pause);

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

    for (let i = 0; i < apsk.length; i++) {

        if (apsk[i].dataset.gameState == 'pause' && apsk[i].dataset.game == 'play') {

            apsk[i].style.backgroundColor = 'black';

            apsk[i].dataset.gameState = 'unpause';
            pause.innerText = 'PLAY !';

            console.log('Pause && Stop')


        }

        else if (apsk[i].dataset.gameState == 'unpause' && apsk[i].dataset.game == 'play') {
            if (apsk[i].dataset.game == 'stop') {
                apsk[i].dataset.gameState = 'unpause';
                apsk[i].dataset.game = 'stop'
                apsk[i].style.backgroundColor = 'red';
            }
            else {
                apsk[i].dataset.gameState = 'pause';
            }
            pause.innerText = 'Pause ||';
            apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            console.log('Unpause && PLay 2')


        }


    }
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

// nepataikyti paspaudimai nesibublina paspaudus ant HEADeri esanciu elementu "section"

// for (let i = 0; i < section.length; i++) {
//     section[i].addEventListener('click', function (e) {
//         e.stopPropagation();
//     })
// }


section.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation();

    }
    )
})



/*///////////////////////////////////////////////////////////////////////

BURBULAI mygtukas

//////////////////////////////////////////////////////////////////////*/
for (let i = 0; i < apsk.length; i++) {
    apsk[i].addEventListener('click', function (e) {

        if (nIntervId != null) {
            apsk[i].style.cursor = 'pointer';
            apsk[i].style.display = 'block';

        function offset(el) {
            let rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
            let div = document.querySelector('.bubbleRezDiv');
            let divOffset = offset(div);

        // console.log(divOffset.left, divOffset.top);



        e.stopPropagation()


        if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
            apsk[i].dataset.game = 'stop';
            apsk[i].style.backgroundColor = 'red';

            apsk[i].style.top = (divOffset.top + 165) + 'px';
            apsk[i].style.left = (divOffset.left - 20) + 'px';
            apsk[i].innerText = '😲'
            apsk[i].style.backgroundImage = "url('pow.png')"

            setTimeout(() => {

                apsk[i].style.top = (divOffset.top + 55) + 'px';
                apsk[i].style.left = (divOffset.left + 40) + 'px';
                apsk[i].style.padding = '0px';
                apsk[i].style.fontSize = '0px';
            }, 1000)

            bubbleRezDiv.innerText = ++bubbleClickCount;

            bubblesLeft--;
            bubblesLeftCounter.innerText = bubblesLeft;



            startInterval();






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
                    pause.style.display = 'none';


                    // }, 300);
                }, 1000)
            }
        } // if interval not NULL

    })

}




//  Nustatome kiekvieno burbulo pirmine pozicija
for (let i = 0; i < apsk.length; i++) {
    go(i);
}


// Kiekvienam burbului paleidziame funkcija
const buhu = () => {
        for (let i = 0; i < apsk.length; i++) {
            if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
                apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            }
            setTimeout(() => {
                go(i);
            },
                0)
    }
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

