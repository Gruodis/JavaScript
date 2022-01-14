/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/js/apskritimas_refactor_v1.js":
/*!*******************************************!*\
  !*** ./dev/js/apskritimas_refactor_v1.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heightOutput": () => (/* binding */ heightOutput),
/* harmony export */   "widthOutput": () => (/* binding */ widthOutput)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./dev/js/functions.js");
 // function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

var intWV2;
var intVH2;
var nIntervId; // pagrindinis intervalo laikas

var nIntervIdBubble = null; // paspaudus ant burbulo intervalo laikas nepratesiamas

var speed;
var changeSpeed = speed;
var seconds = 0;
var timeRemaining = 20000;
var apsk = document.querySelectorAll('.apskritimas');
document.getElementById("start").addEventListener("click", function () {
  startInterval();
  timerInit.timer('start');
});
document.getElementById("stop").addEventListener("click", function () {
  stopInterval();
  timerInit.timer('stopas');
});
var heightOutput = document.querySelector('#height');
var widthOutput = document.querySelector('#width');
var section = document.querySelectorAll('section'); // document.querySelectorAll('section').addEventListener('click', e => e.stopPropagation());

var classBody = document.querySelector('.body');
var bbb = parseInt(document.getElementById("userVar").value);
var bubblesLeftCounter = document.querySelector('.bubblesLeft strong');
var bubblesLeft = apsk.length;
document.getElementById("userVar").addEventListener('change', function () {
  // elSecondsLeft.innerText = timeRemaining / 1000;
  // document.getElementById("userVar").value;
  bbb = parseInt(document.getElementById("userVar").value);
  console.log('0 ', bbb);
  console.log('1 ', bbb);

  var newBall = function newBall() {
    var newBallGo = document.createElement('div');
    var text = document.createTextNode("");
    newBallGo.appendChild(text);
    newBallGo.classList.add("apskritimas");
    newBallGo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    function setAttributes(el, options) {
      Object.keys(options).forEach(function (attr) {
        el.setAttribute(attr, options[attr]);
      });
    }

    setAttributes(newBallGo, {
      'data-game': 'play',
      'data-game-state': 'pause',
      'data-xxx': 'xxx'
    }); // newBallGo.setAttribute("data-game, data-game-state", "play", "data-game-state", "pause");

    classBody.appendChild(newBallGo); // console.log('test', skc);
  }; // var Malfunctions = parseInt(document.getElementById("Malfunctions").value);
  // let gha = () => {


  for (var i = 0; i < bbb; i++) {
    newBall();
    console.log('test for', bbb);
  } // }
  // setInterval(gha, 1000)


  console.log('3 ', bbb);
  finalGo(); // end add ball

  bubblesLeft = apsk.length;
  bubblesLeftCounter.innerText = bubblesLeft;
});
var reset = document.querySelector('.reset');
var pause = document.querySelector('.pause');
var rezDiv = document.querySelector('.rezDiv');
var bubbleRezDiv = document.querySelector('.bubbleRezDiv'); // let timerDiv = document.querySelector('.timer');

var bodyClickCount = 0;
var bubbleClickCount = 0;
var newTimeInt; // Rasome funkcija responsive langui

var responsiveWindow = function responsiveWindow() {
  intWV2 = window.innerWidth - 100;
  intVH2 = window.innerHeight - 100;
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
};

responsiveWindow(); // iskvieciame responsive funkcija su listneriu 'resize'

window.addEventListener('resize', responsiveWindow); // bubblesLeftCounter.innerText = bubblesLeft;

var div = document.querySelector('.bubbleRezDiv');

var finalGo = function finalGo() {
  timerInit.timer('stopas');
  apsk = document.querySelectorAll('.apskritimas'); // let bubblesLeft = apsk.length;

  bubblesLeftCounter.innerText = bubblesLeft;

  var go = function go(itemInitGo) {
    // for (let i = 0; i < apsk.length; i++) {
    if (itemInitGo.dataset.game == 'play' && itemInitGo.dataset.gameState == 'pause') {
      itemInitGo.style.top = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.rand)(150, intVH2 - 50) + 'px';
      itemInitGo.style.left = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.rand)(0, intWV2) + 'px'; // itemInitGo.innerText = 1 + i++;

      itemInitGo.innerText = '😊';
      var sekunde = 1 - bubbleClickCount / 20;
      itemInitGo.style.transition = 'all ' + sekunde + "s";
    } else {
      itemInitGo.style.cursor = null;
    } // }

  };
  /*///////////////////////////////////////////////////////////////////////
  BURBULAI mygtukas
  //////////////////////////////////////////////////////////////////////*/
  ////////////////////////////////////////////////////////////////////


  apsk.forEach(function (burbulas) {
    if (elSecondsLeft.innerText > 20) {
      timerInit.timer('stopas');
    } // incrementSeconds();


    burbulas.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    burbulas.addEventListener('click', function (e) {
      var divOffset = offset(div);

      function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      }

      if (nIntervId != null) {
        burbulas.style.cursor = 'pointer';
        burbulas.style.display = 'block'; // console.log(divOffset.left, divOffset.top);

        e.stopPropagation();

        if (burbulas.dataset.game == 'play' && burbulas.dataset.gameState == 'pause') {
          burbulas.dataset.game = 'stop';
          burbulas.style.backgroundColor = 'red';
          burbulas.style.top = divOffset.top + 165 + 'px';
          burbulas.style.left = divOffset.left - 20 + 'px';
          burbulas.innerText = '😲';
          burbulas.style.backgroundImage = "url('pow.png')";
          setTimeout(function () {
            burbulas.style.top = divOffset.top + 55 + 'px';
            burbulas.style.left = divOffset.left + 40 + 'px';
            burbulas.style.padding = '0px';
            burbulas.style.fontSize = '0px';
          }, 1000);
          bubbleRezDiv.innerText = ++bubbleClickCount;
          bubblesLeft--;
          bubblesLeftCounter.innerText = bubblesLeft;
          nIntervIdBubble = true;
          startInterval(); // startuojam intervala, kad butu perskaiciuotas burbulo greitis
          // del sios priezasties prasitesia laikas
          // console.log(nIntervId, 'Time: ', timeRemaining, 'Length: ', apsk.length, ' BubleClick: ', bubbleClickCount, ' BublesLeft: ', bubblesLeft, 'change speed', speed, changeSpeed);
        }

        if (bubblesLeft == 0) {
          window.setTimeout(function () {
            // reset.style.display = 'block';
            reset.style.transform = 'scale(1) translate(-50%, -50%)'; // window.setTimeout(function () {

            reset.style.opacity = '1'; // reset.style.transform = 'scale(1)';

            pause.style.opacity = 0; // pause.style.display = 'none';
            // }, 300);
          }, 1000);
        }
      } // if interval not NULL

    }); // console.log('Time remain Bubble :', timeRemaining)
  }); //end forEach
  //  Nustatome kiekvieno burbulo pirmine pozicija

  apsk.forEach(function (itemInitGo) {
    setTimeout(function () {
      go(itemInitGo);
    }, (0,_functions__WEBPACK_IMPORTED_MODULE_0__.rand)(0, 1000));
  }); // Kiekvienam burbului paleidziame funkcija

  var buhu = function buhu() {
    apsk.forEach(function (itemInitGo) {
      if (itemInitGo.dataset.game == 'play' && itemInitGo.dataset.gameState == 'pause') {
        itemInitGo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        itemInitGo.style.cursor = 'pointer';
      } // setTimeout(() => {
      //     go(itemInitGo);
      // },
      //     rand(0, 1000))

    }); //end forEach
  };
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
  nIntervIdBubble = null;
  seconds = null;
  timeRemaining = null;
  timeRemaining = 20000; // elSecondsLeft.innerText = (timeRemaining - (seconds++ * 1000)) / 1000;

  console.log('Seconds: ', seconds);
  timerInit.timer('reset');
  apsk.forEach(function (item) {
    // resetinam burbulo display: none
    item.style = null;
    item.dataset.game = 'play';
    item.dataset.gameState = 'pause';
    pause.innerText = 'Pause ||';
  }); // end forEach

  window.clearTimeout(newTimeInt);
  window.clearTimeout(cicleStop);
  window.clearInterval(nIntervId);
  window.clearInterval(timerInit);
  clearInterval(nIntervId);
  clearInterval(timerInit);
  clearTimeout(cicleStop);
  console.log('nIntervId: ', newTimeInt); // nIntervId = setInterval(finalGo, 1000);

  window.clearTimeout(newTimeInt); // newTimeInt = setTimeout(stopInterval, timeRemaining);

  console.log('NewTimeINT 1 : ', newTimeInt);
  newTimeInt = null;
  newTimeInt = setTimeout(stopInterval, timeRemaining);
  console.log('NewTimeINT 2 : ', newTimeInt);
  console.log('Time Remain : ', timeRemaining);
  startInterval();
});
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
    console.log('Time Remain 01 : ', timeRemaining);
    newTimeInt = null;
    newTimeInt = setTimeout(stopInterval, timeRemaining);
    console.log('Resume init', newTimeInt);
    console.log('Time Remain 2 : ', timeRemaining);
  }

  apsk.forEach(function (item) {
    if (item.dataset.gameState == 'pause' && item.dataset.game == 'play') {
      item.style.backgroundColor = 'black';
      item.dataset.gameState = 'unpause';
      pause.innerText = 'PLAY !';
      console.log('Pause && Stop'); // elSecondsLeft.innerText = (timeRemaining) / 1000;
    } else if (item.dataset.gameState == 'unpause' && item.dataset.game == 'play') {
      if (item.dataset.game == 'stop') {
        item.dataset.gameState = 'unpause';
        item.dataset.game = 'stop';
        item.style.backgroundColor = 'red';
      } else {
        item.dataset.gameState = 'pause';
      }

      pause.innerText = 'Pause ||';
      item.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      console.log('Unpause && PLay 2'); // elSecondsLeft.innerText = (timeRemaining - (seconds++ * 1000)) / 1000;
    }
  }); // end forEach
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

});
/*///////////////////////////////////////////////////////////////////////
 
STOP bubling on header, neskaiciuoti nepataikytu paskaudimu ant header
 
//////////////////////////////////////////////////////////////////////*/

section.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}); // function incrementSeconds() {
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

var elSecondsLeft = document.getElementById('secondsCounter');
elSecondsLeft.innerText = '0';
var timerInit = {
  id: 0,
  sec: 0,
  timer: function timer(mode) {
    var _this = this;

    switch (mode) {
      case 'reset':
        elSecondsLeft.innerText = '0';
        this.sec = 0;
        window.clearInterval(this.id);
        clearInterval(this.id);
        console.log('Reset: ', this.sec);

      case 'start':
        this.id = setInterval(function () {
          _this.sec++;
          elSecondsLeft.innerText = _this.sec; // console.log('timerinit1');

          console.log('Start: ', _this.sec);
        }, 1000);
      // console.log('timerinit2');

      case 'stopas':
        setTimeout(function () {
          if (_this.sec > 19 || bubblesLeft == 0) {
            clearInterval(_this.id);
            clearInterval(_this.id);
            console.log('Stop: ', _this.sec);
            elSecondsLeft.innerText = _this.sec;
          }
        }, 1000);
      // console.log('Stop2 :', this.sec);
    }
  }
};

function startInterval() {
  if (nIntervIdBubble == null) {
    cicleStop(); // nIntervIdBubble = true;
    // incrementSeconds();

    apsk.forEach(function (itemInitGo) {
      setTimeout(function () {
        finalGo(itemInitGo);
      }, (0,_functions__WEBPACK_IMPORTED_MODULE_0__.rand)(0, 1000));
    });
  }

  console.log('tikrinam buble click int', nIntervIdBubble); // reset.style.display = 'none';

  reset.style.transform = 'scale(0) translate(-50%, -50%)';
  reset.style.opacity = '0'; // reset.style.transform = 'scale(0)';

  pause.style.opacity = '1'; // pause.style.display = 'block';

  pause.style.transform = 'scale(1) translate(-50%, -50%)'; // check if already an interval has been set up

  if (!nIntervId) {
    nIntervId = setInterval(finalGo, 1000);
    console.log('INIT speed', changeSpeed, speed);
  } else {
    clearInterval(nIntervId);
    speed = 1000 - bubbleClickCount * 80;
    changeSpeed = speed;
    nIntervId = setInterval(finalGo, changeSpeed);
    console.log('Change SPEED ', bubbleClickCount, changeSpeed, speed);
  }
} // startInterval(); // autostart game


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

// Initiate STOP everything after 'n' number of seconds

//////////////////////////////////////////////////////////////////////*/


var cicleStop = function cicleStop() {
  window.clearTimeout(newTimeInt);
  newTimeInt = setTimeout(stopInterval, timeRemaining);
}; // cicleStop();


var zz = function zz(n) {
  var tr = 0;
  tr = +elSecondsLeft.innerText + 0;

  if (Number('tr') > 18) {
    timerInit.timer('stopas');
  }
};

zz(); // rodome kiek sekundziu trunka zaidimas
// let cancel = setInterval(incrementSeconds, timeRemaining);
// console.log('Timer :', timer.stop, timer.resume, nIntervId, intVH2, intWV2)

/***/ }),

/***/ "./dev/js/functions.js":
/*!*****************************!*\
  !*** ./dev/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rand": () => (/* binding */ rand)
/* harmony export */ });
/* harmony import */ var _apskritimas_refactor_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apskritimas_refactor_v1 */ "./dev/js/apskritimas_refactor_v1.js");

/*///////////////////////////////////////////////////////////////////////

RANDOM GENERATOR

//////////////////////////////////////////////////////////////////////*/

var rand = function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/*///////////////////////////////////////////////////////////////////////

// Rasome funkcija responsive langui

//////////////////////////////////////////////////////////////////////*/
// export const responsiveWindow = () => {
//     intWV2 = window.innerWidth - 100;
//     intVH2 = window.innerHeight - 100;
//     heightOutput.textContent = window.innerHeight;
//     widthOutput.textContent = window.innerWidth;
// }
// responsiveWindow();
// /*///////////////////////////////////////////////////////////////////////
// // Function to START everything
// //////////////////////////////////////////////////////////////////////*/
// export const go = itemInitAll => {
//     // for (let i = 0; i < apsk.length; i++) {
//     if (itemInitAll.dataset.game == 'play' && itemInitAll.dataset.gameState == 'pause') {
//         heightOutput.textContent = window.innerHeight;
//         widthOutput.textContent = window.innerWidth;
//         intWV2 = window.innerWidth - 100;
//         intVH2 = window.innerHeight - 100;
//         itemInitAll.style.top = rand(150, (intVH2 - 50)) + 'px';
//         itemInitAll.style.left = rand(0, intWV2) + 'px';
//         // itemInitAll.innerText = 1 + i++;
//         itemInitAll.innerText = '😊';
//         let sekunde = 1 - (bubbleClickCount / 20)
//         itemInitAll.style.transition = 'all ' + sekunde + "s";
//     }
//     else {
//         itemInitAll.style.cursor = null;
//     }
//     // }
// }
// //  Nustatome kiekvieno burbulo pirmine pozicija
// export const itemFirstInit = apsk.forEach(function (itemFirstGo) {
//     go(itemFirstGo);
// })
// // Kiekvienam burbului paleidziame funkcija BUHU
// export const buhu = () => {
//     apsk.forEach(function (itemInitGo) {
//         if (itemInitGo.dataset.game == 'play' && itemInitGo.dataset.gameState == 'pause') {
//             itemInitGo.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//             itemInitGo.style.cursor = 'pointer';
//         }
//         setTimeout(() => {
//             go(itemInitGo);
//         },
//             0)
//     }) //end forEach
// }

/***/ }),

/***/ "./dev/css/apskritimas_default.scss":
/*!******************************************!*\
  !*** ./dev/css/apskritimas_default.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/******/ 			"/public/js/apskritimas_refactor_v1": 0,
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
/******/ 	__webpack_require__.O(undefined, ["public/css/apskritimas_default"], () => (__webpack_require__("./dev/js/apskritimas_refactor_v1.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/apskritimas_default"], () => (__webpack_require__("./dev/css/apskritimas_default.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;