/**
 * 
 * 
 *  OBJEKTAS su masyvais
 * 
 * ****************/


const saugykla = {};

saugykla.holdData = [];
saugykla.holdRadio = [];


// namas.stogas.anterna = {};

// for (let i = 0; i < 100; i++) {

//     // namas.stogas.kaminas[i] = 'Plyta NR.:' + (i + 1);
//     namas.stogas.kaminas.push('Plyta Nr.: ' + (i + 1));

// };

// for (let i = 0; i < 4; i++) {

//     // namas.stogas.kaminas[i] = 'Plyta NR.:' + (i + 1);
//     namas.siena.push('Langas Nr.: ' + (i + 1));

// };

// for (let i = 0; i < 10; i++) {

//     // namas.stogas.kaminas[i] = 'Plyta NR.:' + (i + 1);
//     namas.stogas.stoglangiai.push('Stoglangis Nr.: ' + (i + 1));

// };






/**
 * 
 * 
 *  INPUT
 * 
 * ****************/

const myInputButton = document.getElementById("myButton");

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
/****************************************************
 *
 *
 *  RADIO
 *
 * 
 * ***************************************************/

let radio = document.querySelector('[name="fm"]');

const myRadioButton = document.getElementById("myRadioButton");





document.getElementById('myRadioButton').onclick = function () {
    var selected = document.querySelector('[name=fma]:checked');
    console.log("Radio", selected.value);
}


/************************************************
 *
 *  RADIO multiple radios
 *
 * ***********************************************/
let radius = document.querySelectorAll('[name=fm]')


radius.forEach((fm) => {

    fm.addEventListener("click", () => {
        let rad = document.querySelector('[name=fm]:checked')
        console.log("Radio", rad.value);

        if (saugykla.holdRadio.length > 0) {
            saugykla.holdRadio.shift();
            saugykla.holdRadio.push(rad.value)

        } else {
            saugykla.holdRadio.push(rad.value)
        }
        console.log(`SAUGYKLA R`, saugykla);

    })

})

/**
 *
 *
 *  CHECKBOX
 *
 * ****************/

let checkbox = document.querySelectorAll('[name=che]');


const checkboxGo = () => {
    checkbox.forEach((check) => {

        let che = check.checked ? 'YES' : 'NO';
        console.log("Che Pirmas", che, check.value);

        check.addEventListener("click", () => {
            che = check.checked ? 'YES' : 'NO';

            console.log(`Che Pirmas `, che, check.value);

        })
    })
}
checkboxGo();


/**
 *
 *
 *  CHECKBOX su duomenimis Masyve
 *
 * ****************/

let fieldset = document.getElementById('getValueFromJS');
const checkboxGroup = document.querySelectorAll('[name=cheGroup]');

// let holdData = [];

checkboxGroup.forEach((check) => {
    check.addEventListener("change", () => {

        let fieldsetRemove = document.getElementById('show');

        const holdData = [];

        checkboxGroup.forEach(che => {
            if (che.checked) {
                holdData.push(che.value)
                console.log(`Push value `, che.value);

            }
        })

        saugykla.holdData = holdData.slice() // kopijuojame masyva su supusintais duomenimis i objekta

        if (holdData.length > 0) {

            if (fieldsetRemove) {
                fieldsetRemove.remove();
            }

            let sendValue = document.createElement('div');
            sendValue.setAttribute("id", "show")
            sendValue.classList.add('alert', 'alert-success');
            checkboxGroup.forEach(che => {
                if (che.checked) {
                    const span = document.createElement('span');
                    let text = document.createTextNode(" " + che.value + " ");
                    span.appendChild(text);
                    sendValue.appendChild(span);
                }

            })
            fieldset.appendChild(sendValue);
            console.log("MASYVAS ", holdData, holdData.length);
        }
        else {
            fieldsetRemove.remove();

        }
        console.log(`SAUGYKLA`, saugykla);

    })
})
// console.log("MASYVAS ", holdData);



/**
 *
 *
 *  IMAM duomenis is objekto SAUGYKLA (deklaruotas paciame virsuje)
 *
 * ****************/

const tikrinamObj = document.getElementById("tikrinamObjekta");


function tikrinamObjekta() {
    saugykla.holdData.forEach(userValue => {
        console.log(`GAUNAM DUOMENIS  `, userValue)
    })

    // localStorage.setItem('checkBoxesValues', JSON.stringify(saugykla.holdData));


    saugykla.holdRadio.forEach(userValue => {
        console.log(`GAUNAM DUOMENIS R `, userValue)
    })


}

tikrinamObj.addEventListener('click', () => {
    localStorage.setItem('radio', JSON.stringify(saugykla.holdRadio));
    localStorage.setItem('check', JSON.stringify(saugykla.holdData));

    tikrinamObjekta;
    console.log(`SAUGYKLA Supushinta`, saugykla);



})

const ar = document.getElementById("clearArrayVal");
ar.addEventListener('click', () => {
    saugykla.holdData = [];
    saugykla.holdRadio = [];
    console.log(`SAUGYKLA Isvalyta`, saugykla);

})

/**
 *
 *
 *  Imam duomenis is local storage id Kuriam elementus
 *
 * ****************/

let radioData = localStorage.getItem('radio');
let checkData = localStorage.getItem('check');

radioData = JSON.parse(radioData);
checkData = JSON.parse(checkData);

console.log('X', checkData, radioData)

const get = document.getElementById("getStorageData");

get.addEventListener('click', () => {

    /************************************************
*
*  RADIO values from localstorage
*
* ***********************************************/


    console.log(radioData);

    radius.forEach(item => {
        radioData.forEach(ch => {
            if (item.value === ch) {
                console.log(ch, item.value)

                item.value = item.checked = true;

            }
        })

    })


    /************************************************
 *
 *  CHECKBOX values from localstorage
 *
 * ***********************************************/

    console.log(checkData);

    checkboxGroup.forEach(item => {
        checkData.forEach(ch => {
            if (item.value === ch) {
                console.log(ch, item.value)

                item.value = item.checked = true;

            }
        })

    })
})


const obj = { radio: "zipFM, M-1, Lietus", check: "Gaming, Sleep, Eat" }

console.log(obj)

const clr = document.getElementById("clr");

clr.addEventListener('click', () => {
    localStorage.clear();
})