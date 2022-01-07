/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/js/apskritimas_default.js":
/*!***************************************!*\
  !*** ./dev/js/apskritimas_default.js ***!
  \***************************************/
/***/ (() => {

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var intWV2;
var intVH2;
var intervaloGreitis;
var nIntervId;
var speed;
var changeSpeed = speed;
var timeRemaining = 20000;
document.getElementById("start").addEventListener("click", startInterval);
document.getElementById("stop").addEventListener("click", stopInterval);
var heightOutput = document.querySelector('#height');
var widthOutput = document.querySelector('#width');
var section = document.querySelectorAll('section'); // document.querySelectorAll('section').addEventListener('click', e => e.stopPropagation());

var apsk = document.querySelectorAll('.apskritimas');
var reset = document.querySelector('.reset');
var pause = document.querySelector('.pause');
var classBody = document.querySelector('.body');
var rezDiv = document.querySelector('.rezDiv');
var bubblesLeftCounter = document.querySelector('.bubblesLeft strong');
var bubbleRezDiv = document.querySelector('.bubbleRezDiv');
var timerDiv = document.querySelector('.timer');
var bodyClickCount = 0;
var bubbleClickCount = 0;
var bubblesLeft = apsk.length;
bubblesLeftCounter.innerText = bubblesLeft;
var myVar = null;
var newTimeInt; // Rasome funkcija responsive langui

var responsiveWindow = function responsiveWindow() {
  intWV2 = window.innerWidth - 100;
  intVH2 = window.innerHeight - 100;
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
};

responsiveWindow(); // iskvieciame responsive funkcija su listneriu 'resize'

window.addEventListener('resize', responsiveWindow);

function myTimer() {
  var d = new Date();
  timerDiv.innerHTML = d.toLocaleTimeString();
}

myTimer();
setInterval(null);

var go = function go(i) {
  // for (let i = 0; i < apsk.length; i++) {
  if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
    apsk[i].style.top = rand(150, intVH2 - 50) + 'px';
    apsk[i].style.left = rand(0, intWV2) + 'px'; // apsk[i].innerText = 1 + i++;

    apsk[i].innerText = '😊';
    var sekunde = 1 - bubbleClickCount / 20;
    apsk[i].style.transition = 'all ' + sekunde + "s";
  } else {
    apsk[i].style.cursor = null;
  } // }

};
/*///////////////////////////////////////////////////////////////////////

RESET mygtukas

//////////////////////////////////////////////////////////////////////*/


reset.addEventListener('click', function (e) {
  e.stopPropagation(); // priskiriam kintamajam burbulu skaiciu ir su innerText atvaizduojam

  bubblesLeft = apsk.length;
  bubblesLeftCounter.innerText = bubblesLeft; // resetinam nepataikytus paspaudimus

  bodyClickCount = 0;
  rezDiv.innerText = bodyClickCount; // resetinam pataikytus paspaudimus

  bubbleClickCount = 0;
  bubbleRezDiv.innerText = bubbleClickCount;

  for (var i = 0; i < apsk.length; i++) {
    // resetinam burbulo display: none
    apsk[i].style = null;
    apsk[i].dataset.game = 'play';
    apsk[i].dataset.gameState = 'pause';
    pause.innerText = 'Pause ||';
  }

  clearInterval(nIntervId);
  startInterval(); // cicleStop();
  // Timer(null, null);
  // // timer(null, null)
  // timer.resume(null)
  // timer.pause(null)
  // clearInterval(timer);
  // clearInterval(timer.resume);
  // clearInterval(timer.pause);

  window.clearTimeout(newTimeInt);
  newTimeInt = setTimeout(stopInterval, timeRemaining);
});
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

  for (var i = 0; i < apsk.length; i++) {
    if (apsk[i].dataset.gameState == 'pause' && apsk[i].dataset.game == 'play') {
      apsk[i].style.backgroundColor = 'black';
      apsk[i].dataset.gameState = 'unpause';
      pause.innerText = 'PLAY !';
      console.log('Pause && Stop');
    } else if (apsk[i].dataset.gameState == 'unpause' && apsk[i].dataset.game == 'play') {
      if (apsk[i].dataset.game == 'stop') {
        apsk[i].dataset.gameState = 'unpause';
        apsk[i].dataset.game = 'stop';
        apsk[i].style.backgroundColor = 'red';
      } else {
        apsk[i].dataset.gameState = 'pause';
      }

      pause.innerText = 'Pause ||';
      apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      console.log('Unpause && PLay 2');
    }
  }
});
/*///////////////////////////////////////////////////////////////////////

BODY mygtukas

//////////////////////////////////////////////////////////////////////*/

classBody.addEventListener('click', function (e) {
  if (nIntervId != null) {
    if (bubblesLeft == 0 || pause.innerText == 'PLAY !') {
      e.stopPropagation();
    } else {
      e.stopPropagation();
      rezDiv.innerText = ++bodyClickCount;
    }
  } // if interval not NULL

}); // nepataikyti paspaudimai nesibublina paspaudus ant HEADeri esanciu elementu "section"

for (var i = 0; i < section.length; i++) {
  section[i].addEventListener('click', function (e) {
    e.stopPropagation();
  });
}
/*///////////////////////////////////////////////////////////////////////

BURBULAI mygtukas

//////////////////////////////////////////////////////////////////////*/


var _loop = function _loop(_i) {
  apsk[_i].addEventListener('click', function (e) {
    if (nIntervId != null) {
      var offset = function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      };

      apsk[_i].style.cursor = 'pointer';
      apsk[_i].style.display = 'block';
      var div = document.querySelector('.bubbleRezDiv');
      var divOffset = offset(div); // console.log(divOffset.left, divOffset.top);

      e.stopPropagation();

      if (apsk[_i].dataset.game == 'play' && apsk[_i].dataset.gameState == 'pause') {
        apsk[_i].dataset.game = 'stop';
        apsk[_i].style.backgroundColor = 'red';
        apsk[_i].style.top = divOffset.top + 165 + 'px';
        apsk[_i].style.left = divOffset.left - 20 + 'px';
        apsk[_i].innerText = '😲';
        apsk[_i].style.backgroundImage = "url('pow.png')";
        setTimeout(function () {
          apsk[_i].style.top = divOffset.top + 55 + 'px';
          apsk[_i].style.left = divOffset.left + 40 + 'px';
          apsk[_i].style.padding = '0px';
          apsk[_i].style.fontSize = '0px';
        }, 1000);
        bubbleRezDiv.innerText = ++bubbleClickCount;
        bubblesLeft--;
        bubblesLeftCounter.innerText = bubblesLeft;
        startInterval();
        console.log(nIntervId, 'Length: ', apsk.length, ' BubleClick: ', bubbleClickCount, ' BublesLeft: ', bubblesLeft, 'change speed', speed, changeSpeed);
      }

      if (bubblesLeft == 0) {
        window.setTimeout(function () {
          // reset.style.display = 'block';
          reset.style.transform = 'scale(1) translate(-50%, -50%)'; // window.setTimeout(function () {

          reset.style.opacity = '1'; // reset.style.transform = 'scale(1)';

          pause.style.opacity = 0;
          pause.style.display = 'none'; // }, 300);
        }, 1000);
      }
    } // if interval not NULL

  });
};

for (var _i = 0; _i < apsk.length; _i++) {
  _loop(_i);
} //  Nustatome kiekvieno burbulo pirmine pozicija


for (var _i2 = 0; _i2 < apsk.length; _i2++) {
  go(_i2);
} // Kiekvienam burbului paleidziame funkcija


var buhu = function buhu() {
  var _loop2 = function _loop2(_i3) {
    if (apsk[_i3].dataset.game == 'play' && apsk[_i3].dataset.gameState == 'pause') {
      apsk[_i3].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    setTimeout(function () {
      go(_i3);
    }, 0);
  };

  for (var _i3 = 0; _i3 < apsk.length; _i3++) {
    _loop2(_i3);
  }
};

function startInterval() {
  // reset.style.display = 'none';
  reset.style.transform = 'scale(0) translate(-50%, -50%)';
  reset.style.opacity = '0'; // reset.style.transform = 'scale(0)';

  pause.style.opacity = '1'; // pause.style.display = 'block';

  pause.style.transform = 'scale(1) translate(-50%, -50%)'; // check if already an interval has been set up

  if (!nIntervId) {
    nIntervId = setInterval(buhu, 1200);
  } else {
    clearInterval(nIntervId);
    speed = 1200 - bubbleClickCount * 80;
    changeSpeed = speed;
    nIntervId = setInterval(buhu, changeSpeed);
  }
}

startInterval();

function stopInterval() {
  clearInterval(nIntervId); // release our intervalID from the variable

  nIntervId = null;
  window.setTimeout(function () {
    // reset.style.display = 'block';
    reset.style.transform = 'scale(1) translate(-50%, -50%)';
    reset.style.opacity = '1'; // reset.style.transform = 'scale(0)';

    pause.style.transform = 'scale(0) translate(-50%, -50%)';
    pause.style.opacity = '0'; // pause.style.display = 'none';
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


var cicleStop = function cicleStop() {
  newTimeInt = setTimeout(stopInterval, timeRemaining);
};

cicleStop(); // rodome kiek sekundziu trunka zaidimas

var seconds = 0;
var el = document.getElementById('secondsCounter');

function incrementSeconds() {
  for (var _i4 = 0; _i4 < 1; _i4++) {
    if (seconds >= 0) {
      el.innerText = (timeRemaining - seconds++ * 1000) / 1000;
      console.log(timeRemaining / 1000);
    } else {
      el.innerText = ':(';
    }
  }
}

incrementSeconds();
var cancel = setInterval(incrementSeconds, timeRemaining); // console.log('Timer :', timer.stop, timer.resume, nIntervId, intVH2, intWV2)

/***/ }),

/***/ "./dev/css/apskritimas_default.scss":
/*!******************************************!*\
  !*** ./dev/css/apskritimas_default.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/apskritimas_default": 0,
/******/ 			"public/css/apskritimas_default": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkburbulai"] = self["webpackChunkburbulai"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/apskritimas_default"], () => (__webpack_require__("./dev/js/apskritimas_default.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/apskritimas_default"], () => (__webpack_require__("./dev/css/apskritimas_default.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;