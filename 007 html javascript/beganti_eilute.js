const i = document.querySelectorAll('i');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const data = [
    { digit: 0000, color: 'red' },
    { digit: 0000, color: 'red' },
    { digit: 0000, color: 'red' },
    { digit: 0000, color: 'red' },
    { digit: 0000, color: 'red' },
    { digit: 0000, color: 'red' },
];


setInterval(_ => {
    data.unshift(
        {
            digit: rand(100, 9999),
            color: 'red'
        });
    data.pop();

    for (let t = 0; t < i.length; t++) {

        // setTimeout(function () {
        //     i[i].innerText = rand(10, 1000)
        // }, 1000)
        // data[i].;
        i[t].innerText = data[t].digit;
        i[t].style.color = data[t].color;


    }
}, 1000)

console.log(data, data.length)