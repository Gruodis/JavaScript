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

let apsk = document.querySelectorAll('.apskritimas');
for (let i = 0; i < apsk.length; i++) {
    apsk[i].style.top = rand(0, intVH2) + 'px';
    apsk[i].style.left = rand(0, intWV2) + 'px';
}
/*
*
* Apskritimas START/STOP funkcija
*
*/

// myVar = setInterval(go, 1000);

function mahGogoTop() {
    for (let i = 0; i < apsk.length; i++) {

        function go() {

            apsk[i].style.top = rand(0, intVH2) + 'px';
            apsk[i].style.left = rand(0, intWV2) + 'px';

        }

        function mahGogoInside() {
            apsk[i].addEventListener('click', function () {
                let myVar = null;

                function mahGogo() {

                    if (apsk[i].dataset.game == 'stop') {

                    apsk[i].dataset.game = 'play';
                    apsk[i].style.display = 'none';
                    apsk[i].style.top = null;
                    apsk[i].style.left = null;

                    function myStartFunction() {
                        myVar = setInterval(go, 1000);
                    }

                    myStartFunction();


                }
                else {
                    // document.querySelector('button').innerText = 'START';
                    // document.querySelector('button').style.backgroundColor = '#4CAF50'
                    apsk[i].dataset.game = 'stop';
                    apsk[i].style.display = null;

                    function myStopFunction() {
                        clearInterval(myVar);
                    }
                    myStopFunction();


                }

                };
                mahGogo();

            });
        };
        mahGogoInside();
    }
};
mahGogoTop();



// setInterval(go, 1000);


let clickBodyCounter = 0;
// let clickCircleCounter = 0;



let bodyRez = document.querySelector('.rezultatas');


bodyRez.innerText = clickBodyCounter;


document.querySelector('button').addEventListener("click", function (e) {
    // e.stopImmediatePropagation();
    for (let i = 0; i < apsk.length; i++) {
        // apsk.style.opacity = '1';
        apsk[i].style.top = '222px';
        clickBodyCounter = 0;
        bodyRez.innerText = clickBodyCounter;
        mahGogoTop();

        if (apsk[i].dataset.game == 'stop') {
            document.querySelector('button').innerText = 'START';
            document.querySelector('button').style.backgroundColor = '#4CAF50'

        } if (apsk[i].dataset.game == 'play') {
            document.querySelector('button').innerText = 'STOP';
            document.querySelector('button').style.backgroundColor = 'red'
        }
    }

});



// document.querySelector('.body').addEventListener("click", function () {
//     if (apsk.dataset.game == 'play') {

//         bodyRez.innerText = ++clickBodyCounter;

//     } else {
//         bodyRez.innerText = clickBodyCounter;
//     }
// });

// let circleRez = document.querySelector('.rezultatasCircle');


// circleRez.innerText = clickCircleCounter;



// apsk.addEventListener("click", function () {
//     circleRez.innerText = ++clickCircleCounter;
// });


// console.log();

