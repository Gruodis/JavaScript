const sell_price = document.querySelectorAll(".ispardavimas");
const base_price = document.querySelectorAll(".bazine");
const tevas = document.querySelectorAll(".akcija");
//const combine = [[sell_price], [base_price]];
// const sell_price = parseFloat(document.querySelectorAll(".ispardavimas").innerText);
// const base_price = parseFloat(document.querySelectorAll(".bazine").innerText);
let array1 = [];
let array2 = [];

sell_price.forEach(price => {
    array1.push(price.innerText)
}
)
base_price.forEach(price => {
    array2.push(price.innerText)
}
)
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



let suma = array1.map(function (num, idx) {
    //return num + array2[idx];
    const span = document.createElement('h2');

    let parentDiv = tevas[idx].parentNode;

    console.log(

        // num + array2[idx]),
        `NUM ${num} ,${idx} `, Math.round((array1[idx] / array2[idx]) * 100)
    )
    let text = document.createTextNode(Math.round((array1[idx] / array2[idx]) * 100));
    let text2 = document.createTextNode("% nuolaida");
    span.append(text, text2);
    parentDiv.insertBefore(span, tevas[idx])


    // const span = document.createElement('h2');

    // console.log(

    //     // num + array2[idx]),
    //     `NUM ${num} ,${idx} `, Math.round((array1[idx] / array2[idx]) * 100),
    //     `sell price `, sell_price[idx]
    // )
    // let text = document.createTextNode(Math.round((array1[idx] / array2[idx]) * 100));
    // span.appendChild(text);

    // const li = document.createElement('li');
    // let text = document.createTextNode(`Woohoo ${++skc}`);
    // span.appendChild(text);
    // base_price[idx].prepend(span);
}
); // [6,8,10,12]