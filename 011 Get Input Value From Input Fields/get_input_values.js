const myInputButton = document.getElementById("myButton");
/**
 * 
 * 
 *  INPUT
 * 
 * ****************/


const myTextOne = document.getElementById("myTextOne");

myInputButton.addEventListener("click", () => {

    console.log("On Click", myTextOne.value);
})

myTextTwo.addEventListener("input", () => {

    console.log("On change input", myTextTwo.value);
})
/**
 *
 *
 *  SELECT
 *
 * ****************/
const mySelectButton = document.getElementById("mySelectButton");


const select = document.getElementById("select");

mySelectButton.addEventListener("click", () => {

    console.log("Select", select.value);
})

const select2 = document.getElementById("select2");


select2.addEventListener("change", () => {

    console.log("Input Select", select2.value);
})
/**
 *
 *
 *  RADIO
 *
 * ****************/

let radio = document.querySelector('[name="fm"]');

const myRadioButton = document.getElementById("myRadioButton");


// myRadioButton.addEventListener("click", () => {
//     // radio.forEach((fm) => {

//     console.log("Radio", radio.value);
//     // })
// })


// document.getElementById('myRadioButton').onclick = function () {
//     var selected = document.querySelector('[name=fm]:checked');
//     console.log("Radio", selected.value);
// }

let radius = document.querySelectorAll('[name=fm]')


radius.forEach((fm) => {

    fm.addEventListener("change", () => {
        let rad = document.querySelector('[name=fm]:checked')
        console.log("Radio", rad.value);
    })

})
// function () {
//     var selected = document.querySelector('[name=fm]:checked');
//     console.log("Radio", selected.value);
// }

// radio.addEventListener("click", () => {
//     console.log("Radio", radio.value);
// })
