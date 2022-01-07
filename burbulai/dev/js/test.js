if (apsk[i].dataset.gameState == 'pause' && apsk[i].dataset.game == 'play') {

    apsk[i].style.backgroundColor = 'black';

    apsk[i].dataset.gameState = 'unpause';
    pause.innerText = 'PLAY !';

    // apsk[i].style.top = rand(100, (intVH2 - 50)) + 'px';
    // apsk[i].style.left = rand(0, intWV2) + 'px';
    console.log('Pause && Stop')

}

else if (apsk[i].dataset.gameState == 'unpause' && apsk[i].dataset.game == 'stop') {
    if (apsk[i].dataset.game == 'stop') {
        apsk[i].dataset.gameState = 'unpause';
        apsk[i].dataset.game == 'stop'
        apsk[i].style.backgroundColor = 'red';
    }
    else {
        apsk[i].dataset.gameState = 'pause';
    }
    pause.innerText = 'Pause ||';
    apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log('Unpause && Stop')


}

else if (apsk[i].dataset.gameState == 'unpause' && apsk[i].dataset.game == 'play') {
    if (apsk[i].dataset.game == 'stop') {
        apsk[i].dataset.gameState = 'unpause';
        apsk[i].dataset.game == 'stop'
        apsk[i].style.backgroundColor = 'red';
    }
    else {
        apsk[i].dataset.gameState = 'pause';
    }
    pause.innerText = 'Pause ||';
    apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log('Unpause && PLay')


}



var speed = 500;
var changeSpeed = speed;
repeater = setInterval(startInterval, speed);
function startInterval() {
    spawnEnemy();
    if (changeSpeed != speed) {
        clearInterval(repeater);
        speed = changeSpeed;
        repeater = setInterval(startInterval, speed);
    }
}
function changeRepeater() {
    changeSpeed = 700;
}


const delay = 2;
const limit = 2;
let i = 1;

console.log('START!');
const limitedInterval = setInterval(() => {
    console.log(`message ${i}, appeared after ${delay * i++} seconds`);

    if (i > limit) {
        clearInterval(limitedInterval);
    }
}, delay * 1000);

// timer

var Timer = function (callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function () {
        window.clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };

    this.resume = function () {
        if (timerId) {
            return;
        }

        start = Date.now();
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};

var timer = new Timer(function () {
    alert("Done!");
}, 1000);

timer.pause();
// Do some stuff...
timer.resume();