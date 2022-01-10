import { heightOutput, widthOutput } from './apskritimas_refactor_v1';
/*///////////////////////////////////////////////////////////////////////

RANDOM GENERATOR

//////////////////////////////////////////////////////////////////////*/
export const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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