function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let intWV2 = window.innerWidth - 100;
let intVH2 = window.innerHeight - 100;

let apsk = document.querySelectorAll('.apskritimas');
let reset = document.querySelector('.reset');
let classBody = document.querySelector('.body');
let rezDiv = document.querySelector('.rezDiv');
let bubblesLeftCounter = document.querySelector('.bubblesLeft');
let bubbleRezDiv = document.querySelector('.bubbleRezDiv');

let bodyClickCount = 0;
let bubbleClickCount = 0;
let bubblesLeft = bubblesLeftCounter.innerText = apsk.length;

let myVar = null;

// apsk.style.top = rand(0, intVH2) + 'px';
// apsk.style.left = rand(0, intWV2) + 'px';


const go = i => {
    // for (let i = 0; i < apsk.length; i++) {
    if (apsk[i].dataset.game == 'play') {
        apsk[i].style.top = rand(0, intVH2) + 'px';
        apsk[i].style.left = rand(0, intWV2) + 'px';
        apsk[i].innerText = 1 + i++;
    }
    // }

}




reset.addEventListener('click', function (e) {
    bubblesLeftCounter.innerText = bubblesLeft;
    e.stopPropagation();

    bodyClickCount = 0;
    rezDiv.innerText = bodyClickCount;
    bubbleClickCount = 0;
    bubbleRezDiv.innerText = bubbleClickCount;
    for (let i = 0; i < apsk.length; i++) {
        apsk[i].style = null;
        apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        apsk[i].dataset.game = 'play';


    }
})



classBody.style.cursor = 'pointer';

classBody.addEventListener('click', function (e) {

    if ((bubblesLeft - bubbleClickCount) != 0) {
        e.stopPropagation();
        rezDiv.innerText = ++bodyClickCount;
        // bubblesLeft - bubbleClickCount;
    }
})

// let fufu = () => {
//     bubblesLeftCounter.innerText = apsk.length;
// }
// fufu();



for (let i = 0; i < apsk.length; i++) {
    apsk[i].addEventListener('click', function (e) {
        e.stopPropagation()
        apsk[i].style.backgroundColor = 'red';

        if (apsk[i].dataset.game == 'play') {
            apsk[i].dataset.game = 'stop';
            bubbleRezDiv.innerText = ++bubbleClickCount;

        } else {
            // apsk[i].dataset.game = 'play';

        }


        // bubbleRezDiv.innerText = ++bubbleClickCount;
        // bubblesLeft = apsk.length - bubbleClickCount;
        bubblesLeftCounter.innerText = bubblesLeft - bubbleClickCount;
        console.log(apsk.length, bubbleClickCount, bubblesLeft)

    })
}


//  Nustatome kiekvieno burbulo pirmine pozicija
for (let i = 0; i < apsk.length; i++) {

    go(i);
}


// Kiekvienam burbului paleidziame funkcija
setInterval(
    () => {
        for (let i = 0; i < apsk.length; i++) {
            if (apsk[i].dataset.game == 'play') {
                apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            }
            setTimeout(() => {
                go(i);
            },
                rand(0, 800))
        }
    }, 1000);

console.log(go)