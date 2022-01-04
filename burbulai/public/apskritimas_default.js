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
var heightOutput = document.querySelector('#height');
var widthOutput = document.querySelector('#width');
var apsk = document.querySelectorAll('.apskritimas');
var reset = document.querySelector('.reset');
var pause = document.querySelector('.pause');
var classBody = document.querySelector('.body');
var rezDiv = document.querySelector('.rezDiv');
var bubblesLeftCounter = document.querySelector('.bubblesLeft');
var bubbleRezDiv = document.querySelector('.bubbleRezDiv');
var timerDiv = document.querySelector('.timer');
var bodyClickCount = 0;
var bubbleClickCount = 0;
var bubblesLeft = bubblesLeftCounter.innerText = apsk.length;
var myVar = null; // Rasome funkcija responsive langui

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
setInterval(myTimer, 1000);

var go = function go(i) {
  // for (let i = 0; i < apsk.length; i++) {
  if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
    apsk[i].style.top = rand(150, intVH2 - 50) + 'px';
    apsk[i].style.left = rand(0, intWV2) + 'px';
    apsk[i].innerText = 1 + i++;
  } // }

};

reset.addEventListener('click', function (e) {
  e.stopPropagation();
  bubblesLeftCounter.innerText = bubblesLeft;
  bodyClickCount = 0;
  rezDiv.innerText = bodyClickCount;
  bubbleClickCount = 0;
  bubbleRezDiv.innerText = bubbleClickCount;

  for (var i = 0; i < apsk.length; i++) {
    apsk[i].style = null;
    apsk[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    apsk[i].dataset.game = 'play';
    apsk[i].dataset.gameState = 'pause';
    pause.innerText = 'Pause ||';
  }
});
pause.addEventListener('click', function (e) {
  e.stopPropagation();

  for (var i = 0; i < apsk.length; i++) {
    if (apsk[i].dataset.gameState == 'pause' && apsk[i].dataset.game == 'play') {
      apsk[i].style.backgroundColor = 'black';
      apsk[i].dataset.gameState = 'unpause';
      pause.innerText = 'PLAY !';
      apsk[i].style.top = rand(100, intVH2 - 50) + 'px';
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
});
classBody.style.cursor = 'pointer';
var gugu = true;
classBody.addEventListener('click', function (e) {
  for (var i = 0; i < apsk.length; i++) {
    if (apsk[i].dataset.gameState == 'unpause') {
      e.stopPropagation();
      gugu = false; // bubblesLeft - bubbleClickCount;
    } else {
      gugu = true;
    }
  }

  if (bubblesLeft - bubbleClickCount != 0 && gugu == true) {
    e.stopPropagation();
    rezDiv.innerText = ++bodyClickCount;
  }
});

var _loop = function _loop(i) {
  apsk[i].addEventListener('click', function (e) {
    function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }

    var div = document.querySelector('.bubbleRezDiv');
    var divOffset = offset(div);
    console.log(divOffset.left, divOffset.top);
    e.stopPropagation();

    if (apsk[i].dataset.game == 'play' && apsk[i].dataset.gameState == 'pause') {
      apsk[i].dataset.game = 'stop';
      apsk[i].style.backgroundColor = 'red';
      apsk[i].style.top = divOffset.top + 95 + 'px';
      apsk[i].style.left = divOffset.left + 45 + 'px';
      apsk[i].style.padding = '0px';
      apsk[i].style.fontSize = '0px';
      apsk[i].style.zIndex = '9999'; // setTimeout(() => {

      bubbleRezDiv.innerText = ++bubbleClickCount; // }, 2500)
    }

    bubblesLeftCounter.innerText = bubblesLeft - bubbleClickCount;
    console.log('Length: ', apsk.length, ' BubleClick: ', bubbleClickCount, ' BublesLeft: ', bubblesLeft);
  });
};

for (var i = 0; i < apsk.length; i++) {
  _loop(i);
} // const gohaha = i => {
//     classBody = document.createElement('div');
//     classBody.textContent = "Sup, y'all?";
//     classBody.setAttribute('class', 'apskritimas', 'data-game-state="pause"');
//     document.body.appendChild(classBody);
// }
// gohaha();
//  Nustatome kiekvieno burbulo pirmine pozicija


for (var _i = 0; _i < apsk.length; _i++) {
  go(_i);
} // Kiekvienam burbului paleidziame funkcija


setInterval(function () {
  var _loop2 = function _loop2(_i2) {
    if (apsk[_i2].dataset.game == 'play' && apsk[_i2].dataset.gameState == 'pause') {
      apsk[_i2].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    setTimeout(function () {
      go(_i2);
    }, rand(0, 600));
  };

  for (var _i2 = 0; _i2 < apsk.length; _i2++) {
    _loop2(_i2);
  }
}, 3000);
console.log(go, intVH2, intWV2);

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
/******/ 			"/public/apskritimas_default": 0,
/******/ 			"public/apskritimas_default": 0
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
/******/ 	__webpack_require__.O(undefined, ["public/apskritimas_default"], () => (__webpack_require__("./dev/js/apskritimas_default.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/apskritimas_default"], () => (__webpack_require__("./dev/css/apskritimas_default.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;