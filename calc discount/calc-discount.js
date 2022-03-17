const sell_price = document.querySelectorAll(".ispardavimas");
const base_price = document.querySelectorAll(".bazine");
const combine = [sell_price, base_price];
// const sell_price = parseFloat(document.querySelectorAll(".ispardavimas").innerText);
// const base_price = parseFloat(document.querySelectorAll(".bazine").innerText);

// sell_price.forEach(price => {
//     console.log(price.innerText)
// }
// )
console.log(sell_price);
console.log(base_price);
console.log(combine);
console.log(15);

var datos1 = [5];
var datos2 = [1];
var result = datos1.filter(el => !datos2.includes(el));
console.log(result);


let sum = sell_price.map(function (num, idx) {
    return num + base_price[idx];
}); // [6,8,10,12]
console.log(sum);