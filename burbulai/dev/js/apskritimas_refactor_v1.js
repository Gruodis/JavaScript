import { rand } from './functions';


// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }



let intWV2;
let intVH2;


let nIntervId; // pagrindinis intervalo laikas
let nIntervIdBubble = null; // paspaudus ant burbulo intervalo laikas nepratesiamas


let speed;
let changeSpeed = speed;


let seconds = 0;

let timeRemaining = 20000;


let apsk = document.querySelectorAll('.apskritimas');



document.getElementById("start").addEventListener("click", () => { startInterval(); timerInit.timer('start'); });

document.getElementById("stop").addEventListener("click", () => { stopInterval(); timerInit.timer('stopas'); });

export const heightOutput = document.querySelector('#height');
export const widthOutput = document.querySelector('#width');

const section = document.querySelectorAll('section');

// document.querySelectorAll('section').addEventListener('click', e => e.stopPropagation());

let classBody = document.querySelector('.body');




let reset = document.querySelector('.reset');
let pause = document.querySelector('.pause');

let rezDiv = document.querySelector('.rezDiv');


let bubbleRezDiv = document.querySelector('.bubbleRezDiv');

// let timerDiv = document.querySelector('.timer');

let bodyClickCount = 0;
let bubbleClickCount = 0;


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

// bubblesLeftCounter.innerText = bubblesLeft;



let div = document.querySelector('.bubbleRezDiv');


let bbb = parseInt(document.getElementById("userVar").value);

const buttonMinus = document.querySelector('.minus');
const buttonPlus = document.querySelector('.plus');



const bubblesLeftCounter = document.querySelector('.bubblesLeft strong');
let bubblesLeft = apsk.length;


let storeB = 0;
/*///////////////////////////////////////////////////////////////////////
 
Get nuber from input and generate bubble

//////////////////////////////////////////////////////////////////////*/

buttonMinus.addEventListener("click", () => {
    var value = document.getElementById('userVar').value;
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('userVar').value = value;
    judam();
});
buttonPlus.addEventListener("click", () => {
    var value = document.getElementById('userVar').value;
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('userVar').value = value;
    judam();
});


// document.getElementById("userVar").addEventListener('change', () => {

const judam = () => {
    let eur = document.querySelector('.apskritimas');

    // elSecondsLeft.innerText = timeRemaining / 1000;
    // document.getElementById("userVar").value;
    console.log('eur', eur);
    console.log('eur', buttonMinus);
    console.log('eur', buttonPlus);
    console.log('section', bubblesLeftCounter);
    bbb = parseInt(document.getElementById("userVar").value)
    console.log('User value 1 ', bbb);


    // if (storeB < bbb) {
    //     storeB = bbb;
    //     console.log('Store B + bbb: ', storeB)
    // }
    // else {
    //     storeB -= bbb;
    //     console.log('Store B - bbb: ', storeB)

    // }


    let newBall = () => {

    let newBallGo = document.createElement('div');
    let text = document.createTextNode(``);
    newBallGo.appendChild(text);
        newBallGo.classList.add("apskritimas");
        newBallGo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        newBallGo.style.opacity = 0;



    function setAttributes(el, options) {
        Object.keys(options).forEach(function (attr) {
            el.setAttribute(attr, options[attr]);
        })
    }
    setAttributes(newBallGo, { 'data-game': 'play', 'data-game-state': 'pause', 'data-xxx': 'xxx' });
    // newBallGo.setAttribute("data-game, data-game-state", "play", "data-game-state", "pause");
    classBody.appendChild(newBallGo);
    // console.log('test', skc);
}





    // let gha = () => {
    if (storeB < bbb) {
        storeB = bbb;
        for (let i = 0; i < 1; i++) {
        newBall();
            console.log('BBB for cycle', bbb)
        }
    }
    else {
        storeB -= 1;
        // select the target element

        // remove the list item
        eur.parentElement.removeChild(eur);
        // storeB -= bbb;
        console.log('Store B - bbb: ', storeB)

    }
    // }
    // setInterval(gha, 1000)
    console.log('BBB after for Cycle ', bbb)
    finalGo();
    // end add ball
    bubblesLeft = apsk.length;
    bubblesLeftCounter.innerText = bubblesLeft;


}
//}) //addlistener on change END


let finalGo = () => {

    timerInit.timer('stopas'); 

    apsk = document.querySelectorAll('.apskritimas');

    // let bubblesLeft = apsk.length;
    bubblesLeftCounter.innerText = bubblesLeft;
    const go = itemInitGo => {

        // for (let i = 0; i < apsk.length; i++) {
        if (itemInitGo.dataset.game == 'play' && itemInitGo.dataset.gameState == 'pause') {
            itemInitGo.style.top = rand(150, (intVH2 - 50)) + 'px';
            itemInitGo.style.left = rand(0, intWV2) + 'px';
            // itemInitGo.innerText = 1 + i++;
            itemInitGo.innerText = '😊';

            itemInitGo.style.cursor = 'pointer';
            itemInitGo.style.opacity = 1;


            let sekunde = 1 - (bubbleClickCount / 20)
            itemInitGo.style.transition = 'all ' + sekunde + "s";
        }
        else {
            itemInitGo.style.cursor = null;
        }
        // }

    }
/*///////////////////////////////////////////////////////////////////////
 
BURBULAI mygtukas
 
//////////////////////////////////////////////////////////////////////*/




    ////////////////////////////////////////////////////////////////////
    apsk.forEach(function (burbulas) {

        if (elSecondsLeft.innerText > 20) {
            timerInit.timer('stopas');
        }

        // incrementSeconds();
        burbulas.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        burbulas.addEventListener('click', function (e) {
            let divOffset = offset(div);
            function offset(el) {
                let rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
            }

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


                    nIntervIdBubble = true;

                    startInterval(); // startuojam intervala, kad butu perskaiciuotas burbulo greitis
                    // del sios priezasties prasitesia laikas






                    // console.log(nIntervId, 'Time: ', timeRemaining, 'Length: ', apsk.length, ' BubleClick: ', bubbleClickCount, ' BublesLeft: ', bubblesLeft, 'change speed', speed, changeSpeed);
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

        // console.log('Time remain Bubble :', timeRemaining)


    }) //end forEach

    //  Nustatome kiekvieno burbulo pirmine pozicija
    apsk.forEach(function (itemInitGo) {
        setTimeout(() => {
        go(itemInitGo);
        },
            rand(0, 1000))
    })


    // Kiekvienam burbului paleidziame funkcija
    const buhu = () => {
        apsk.forEach(function (itemInitGo) {
            if (itemInitGo.dataset.game == 'play' && itemInitGo.dataset.gameState == 'pause') {
                itemInitGo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                itemInitGo.style.cursor = 'pointer';
            }
            // setTimeout(() => {
            //     go(itemInitGo);
            // },
            //     rand(0, 1000))
        }) //end forEach
    }





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

    nIntervIdBubble = null;
    seconds = null;
    timeRemaining = null;
    timeRemaining = 20000;
    // elSecondsLeft.innerText = (timeRemaining - (seconds++ * 1000)) / 1000;
    console.log('Seconds: ', seconds);
    timerInit.timer('reset');



    apsk.forEach(function (item) {
        // resetinam burbulo display: none
        item.style = null;

        item.dataset.game = 'play';
        item.dataset.gameState = 'pause';
        pause.innerText = 'Pause ||';
    }) // end forEach

    window.clearTimeout(newTimeInt);
    window.clearTimeout(cicleStop);
    window.clearInterval(nIntervId);
    window.clearInterval(timerInit);
    clearInterval(nIntervId);
    clearInterval(timerInit);
    clearTimeout(cicleStop);
    console.log('nIntervId: ', newTimeInt)


    // nIntervId = setInterval(finalGo, 1000);



    window.clearTimeout(newTimeInt);
    // newTimeInt = setTimeout(stopInterval, timeRemaining);
    console.log('NewTimeINT 1 : ', newTimeInt);
    newTimeInt = null;
    newTimeInt = setTimeout(stopInterval, timeRemaining);
    console.log('NewTimeINT 2 : ', newTimeInt)
    console.log('Time Remain : ', timeRemaining)

    startInterval();

})


/*///////////////////////////////////////////////////////////////////////
 
Play/Pause mygtukas
 
//////////////////////////////////////////////////////////////////////*/
pause.addEventListener('click', function (e) {

    e.stopPropagation();

    if (pause.innerText != 'PLAY !') {
        // timer.pause();
        window.clearTimeout(newTimeInt);
        newTimeInt = null;

        timerInit.timer('stopas');

        console.log('Pause init', newTimeInt);
    } else {
        // timer.resume();
        window.clearTimeout(newTimeInt);
        console.log('Time Remain 01 : ', timeRemaining)

        newTimeInt = null;
        newTimeInt = setTimeout(stopInterval, timeRemaining);

        console.log('Resume init', newTimeInt);
        console.log('Time Remain 2 : ', timeRemaining)

    }

    apsk.forEach(function (item) {

        if (item.dataset.gameState == 'pause' && item.dataset.game == 'play') {

            item.style.backgroundColor = 'black';

            item.dataset.gameState = 'unpause';
            pause.innerText = 'PLAY !';

            console.log('Pause && Stop')
            // elSecondsLeft.innerText = (timeRemaining) / 1000;


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
            // elSecondsLeft.innerText = (timeRemaining - (seconds++ * 1000)) / 1000;


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






// function incrementSeconds() {
//     if (timeRemaining != 0) {

//         for (let i = 0; i < 1; i++) {

//             if (seconds >= 0) {
//                 elSecondsLeft.innerText = (timeRemaining - (seconds++ * 1000)) / 1000;
//                 // console.log(timeRemaining / 1000)
//                 // console.log('Seconds', seconds)
//             }
//             else {
//                 elSecondsLeft.innerText = ':('
//             }
//         }
//     }
// }

// incrementSeconds();


/*///////////////////////////////////////////////////////////////////////

// TIMER

//////////////////////////////////////////////////////////////////////*/
const elSecondsLeft = document.getElementById('secondsCounter');
elSecondsLeft.innerText = '0';

const timerInit = {
    id: 0,
    sec: 0,


    timer: function (mode) {
        switch (mode) {
            case 'reset':
                elSecondsLeft.innerText = '0';
                this.sec = 0;
                window.clearInterval(this.id);
                clearInterval(this.id);
                console.log('Reset: ', this.sec);


            case 'start':
                this.id = setInterval(() => {

                    this.sec++;

                    elSecondsLeft.innerText = this.sec;
                    // console.log('timerinit1');
                    console.log('Start: ', this.sec);


                }, 1000)
                // console.log('timerinit2');
            case 'stopas':
                setTimeout(() => {
                    if (this.sec > 19 || bubblesLeft == 0) {
                        clearInterval(this.id);

                        clearInterval(this.id);
                    console.log('Stop: ', this.sec);
                        elSecondsLeft.innerText = this.sec;


                    }
                }, 1000)
                // console.log('Stop2 :', this.sec);

}


    }

}




function startInterval() {


    if (nIntervIdBubble == null) {

        cicleStop();
        // nIntervIdBubble = true;
        // incrementSeconds();

        apsk.forEach(function (itemInitGo) {
            setTimeout(() => {
                finalGo(itemInitGo);
            },
                rand(0, 1000))
        })

    }

    console.log('tikrinam buble click int', nIntervIdBubble)





    // reset.style.display = 'none';
    reset.style.transform = 'scale(0) translate(-50%, -50%)';
    reset.style.opacity = '0';
    // reset.style.transform = 'scale(0)';
    pause.style.opacity = '1';
    // pause.style.display = 'block';
    pause.style.transform = 'scale(1) translate(-50%, -50%)';

    // check if already an interval has been set up
    if (!nIntervId) {
        nIntervId = setInterval(finalGo, 1000);
        console.log('INIT speed', changeSpeed, speed)

    } else {
        clearInterval(nIntervId);


        speed = (1000 - (bubbleClickCount * 80));
        changeSpeed = speed;
        nIntervId = setInterval(finalGo, changeSpeed);
        console.log('Change SPEED ', bubbleClickCount, changeSpeed, speed)

    }

}
// startInterval(); // autostart game


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

// Initiate STOP everything after 'n' number of seconds

//////////////////////////////////////////////////////////////////////*/
const cicleStop = () => {

    window.clearTimeout(newTimeInt)
    newTimeInt = setTimeout(stopInterval, timeRemaining);

}
// cicleStop();
const zz = (n) => {
    let tr = 0;

    tr = +elSecondsLeft.innerText + 0;

    if (Number('tr') > 18) {
        timerInit.timer('stopas');
    }
}
zz();

// rodome kiek sekundziu trunka zaidimas



// let cancel = setInterval(incrementSeconds, timeRemaining);

// console.log('Timer :', timer.stop, timer.resume, nIntervId, intVH2, intWV2)

