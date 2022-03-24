
let array1 = [];
let array2 = [];
const sell_price = document.querySelectorAll(".ispardavimas").forEach(price => {
    array1.push(price.innerText)
}
);
const base_price = document.querySelectorAll(".bazine").forEach(price => {
    array2.push(price.innerText)
}
);
const tevas = document.querySelectorAll(".akcija");
const tevas2 = document.querySelectorAll(".nuolaida");
//const combine = [[sell_price], [base_price]];
// const sell_price = parseFloat(document.querySelectorAll(".ispardavimas").innerText);
// const base_price = parseFloat(document.querySelectorAll(".bazine").innerText);


// sell_price.forEach(price => {
//     array1.push(price.innerText)
// }
// )
// base_price.forEach(price => {
//     array2.push(price.innerText)
// }
// )
console.log(sell_price);
console.log(base_price);
console.log(tevas);
// console.log(combine);
console.log(15);
console.log(`ARRAY1 `, array1);
console.log(`ARRAY2 `, array2);

// var datos1 = [5];
// var datos2 = [1];
// var result = datos1.filter(el => !datos2.includes(el));
// console.log(result);

// console.log(`


// `);
// let sum = sell_price.map(function (num, idx) {
//     return num + base_price[idx];
// }); // [6,8,10,12]
// console.log(sum);

/***
 * 
 * 
 *  Sprendimas su MAP
 * 
 * 
 ***/

let suma = array1.map(function (arrayNumber, arrayIndex) {
    //return arrayNumber + array2[arrayIndex];
    const span = document.createElement('h2');

    let parentDiv = tevas[arrayIndex].parentNode;

    console.log(

        // arrayNumber + array2[arrayIndex]),
        `arrayNumber ${arrayNumber} ,${arrayIndex} `, Math.round((array1[arrayIndex] / array2[arrayIndex]) * 100)
    )
    let text = document.createTextNode(Math.round((array1[arrayIndex] / array2[arrayIndex]) * 100));
    let text2 = document.createTextNode("% nuolaida");
    span.append(text, text2);
    parentDiv.insertBefore(span, tevas[arrayIndex])


    // const span = document.createElement('h2');

    // console.log(

    //     // arrayNumber + array2[arrayIndex]),
    //     `arrayNumber ${arrayNumber} ,${arrayIndex} `, Math.round((array1[arrayIndex] / array2[arrayIndex]) * 100),
    //     `sell price `, sell_price[arrayIndex]
    // )
    // let text = document.createTextNode(Math.round((array1[arrayIndex] / array2[arrayIndex]) * 100));
    // span.appendChild(text);

    // const li = document.createElement('li');
    // let text = document.createTextNode(`Woohoo ${++skc}`);
    // span.appendChild(text);
    // base_price[idx].prepend(span);
}
); // [6,8,10,12]

/***
 * 
 * 
 *  Sprendimas su FOR
 * 
 * 
 ***/
function goWithFor(array1, array2) {

    for (let i = 0; i < array1.length; i++) {

        console.log(

            // arrayNumber + array2[idx]),
            `===========> GoFor fun `, Math.round((array1[i] / array2[i]) * 100)
        )

    };
};
goWithFor(array1, array2);


/***
 * 
 * 
 *  Sprendimas su ForEach
 * 
 * 
 ***/

// function goWithForEach(array1, array2) {

array1.forEach((arrayNumber, arrayIndex, array) => {
        const num2 = array2[arrayIndex];
        const span = document.createElement('h2');

        let parentDiv = tevas2[arrayIndex];
        let text = document.createTextNode(Math.round((array1[arrayIndex] / array2[arrayIndex]) * 100));
        let text2 = document.createTextNode("% nuolaida su akcija");
        span.append(text, text2);
        parentDiv.append(span)
        console.log(

            // num + array2[idx]),
            `~~~~~~~~>  ${arrayNumber}, ${arrayIndex}, array ${array} GoEach fun `, Math.round((array1[arrayIndex] / array2[arrayIndex]) * 100)
        )
    });
// };
// goWithForEach(array1, array2);

let arrayOne = [1, 2, 3, 4, 5, 6, 7];
let arrayTwo = [3, 5, 7];
// let result = arrayOne.filter(el => !arrayTwo.includes(el));
let result = arrayOne.filter(el => arrayTwo.includes(el));

console.log(result);
