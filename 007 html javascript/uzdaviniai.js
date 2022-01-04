function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// const iList = document.querySelectorAll('i');
// const tutu = _ => {
//     for (let i = 0; i < iList.length; i++) {
//         setTimeout(function () {
//             iList[i].innerText = rand(10, 1000)
//         }
//             , 1000)
//     }
// };
// setInterval(tutu, 1000)





// Atskiri elementai
//// Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector('h1').style.backgroundColor = 'darkgreen';
document.querySelector('h1').style.color = 'white';




//// Tagui i pridėti klasę small;
document.querySelector('i').classList.add('small');


//// Iš tago h1 pašalinti klasę main;
document.querySelector('h1').classList.remove('main');


//// Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
document.querySelector('h1+h2').classList.add('first');
document.querySelector('h1+h2').classList.remove('main');



//// Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector('h2 span:first-child').style.fontSize = '32px';
document.querySelector('h2 span:first-child').style.color = 'purple';



// Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//// Suskaičiuoti kiek yra h2 tagų;
const h2tag = document.querySelectorAll('h2');

let h2taguCalc = 0;
for (let i = 0; i < h2tag.length; i++) {

    h2taguCalc++;
};

console.log(h2taguCalc)


//// Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
const h2tagFisrt = document.querySelectorAll('h2.first');

let h2taguCalcFirst = 0;
for (let i = 0; i < h2tagFisrt.length; i++) {

    h2taguCalcFirst++;
};

console.log(h2taguCalc - h2taguCalcFirst)


//// Visus h2 tagus nuspalvinti šviesiai mėlynai
for (let i = 0; i < h2tag.length; i++) {

    h2tag[i].style.color = 'blue';
};


//// Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
const divPrices = document.querySelectorAll('div.prices>h2');

for (let i = 0; i < divPrices.length; i++) {

    divPrices[i].classList.add('price-tag');
};

//// Pabraukti visus tagus su klase new;

const classNew = document.querySelectorAll('.new');

for (let i = 0; i < classNew.length; i++) {

    classNew[i].style.color = '#333';
    classNew[i].style.fontWeight = '700';
};


//// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const ulAndLiTag = document.querySelectorAll('ul, ul#zirafos li:not(.like-button)');

let ulTaguCalc = 0;

for (let i = 0; i < ulAndLiTag.length; i++) {
    ulAndLiTag[i].style.color = 'green';
    ulTaguCalc++;
};

console.log(ulTaguCalc)



//// Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
const ulTag = document.querySelectorAll('ul');

ulTaguCalc = 0;


for (let i = 0; i < ulTag.length; i++) {
    ulTag[i].style.padding = '15px 50px';
    ulTaguCalc++;
    ulTag[i].style.color = 'black';

};

console.log(ulTaguCalc)


//// Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
// const classNew = document.querySelectorAll('.new');

ulTaguCalc = 0;


for (let i = 0; i < classNew.length; i++) {
    ulTaguCalc++;

};

console.log('nauju gyvunu: ', ulTaguCalc)



//// Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;



// Elementų events
//// Padaryti tai ką liepia mygtukai Header1 sekcijoje;

let elementColor = document.getElementById('h1-color');
let elementFont = document.getElementById('h1-font');
// let h1 = document.querySelector('h1');

elementColor.addEventListener('click', function () {
    document.querySelector('h1').style.backgroundColor = 'black';

});
elementFont.addEventListener('click', function () {
    document.querySelector('h1').style.fontWeight = '400';

});

//// Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const iTag = document.querySelectorAll('i');

const iMygt = _ => {

    for (let i = 0; i < iTag.length; i++) {


        iTag[i].addEventListener('click', function () {

            if (iTag[i].style.fontWeight == '700') {
                iTag[i].style.fontWeight = '400';
            } else {
                iTag[i].style.fontWeight = '700';

            }
        });

    };
}

iMygt();
//// Padaryti, kad paspaudus ant tago su klase prices,
//// backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const classPrices = document.querySelectorAll('.price-tag');

const classPricesMygt = () => {

    for (let i = 0; i < classPrices.length; i++) {

        classPrices[i].style.cursor = 'pointer';
        classPrices[i].addEventListener('click', function () {

            if (classPrices[i].style.backgroundColor == 'pink') {
                classPrices[i].style.backgroundColor = 'white';
            } else {
                classPrices[i].style.backgroundColor = 'pink';

            }
        });

    };
}

classPricesMygt();





//// Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
const idContacts = document.querySelector('#contacts');

const idContactsMygt = () => {

    idContacts.style.cursor = 'pointer';



    idContacts.addEventListener('click', function () {
        if (idContacts.style.backgroundColor == 'purple') {
            idContacts.style.backgroundColor = 'white';
            idContacts.style.color = 'black';
        } else {
            idContacts.style.backgroundColor = 'purple';
            idContacts.style.color = 'white';

        }
    });


}

idContactsMygt();
//// Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts
//// būtų pridėta css savybė fontSize = 20px;
const uPadidinti = document.querySelector('u');

const uPadidintiEvent = () => {

    uPadidinti.addEventListener('click', function (e) {
        e.stopPropagation();

        if (idContacts.style.fontSize == '22px') {
            idContacts.style.fontSize = '16px';
        } else {
            idContacts.style.fontSize = '22px';

        }
    });
}

uPadidintiEvent();

//// Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės
//// būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element

const bResetas = document.querySelector('b');

const bResetasEvent = () => {

    bResetas.addEventListener('click', function (e) {
        e.stopPropagation();

        idContacts.style = null;
        idContacts.style.cursor = 'pointer';
    });
}
bResetasEvent();
//// Padaryti tai ką liepia mygtukai Header2 sekcijoje;
const bResetasColor = document.querySelector('#h1-color-back');
const bResetasFont = document.querySelector('#h1-font-back');

const bResetasColorEvent = () => {

    bResetasColor.addEventListener('click', function (e) {
        e.stopPropagation();

        if (idContacts.style.backgroundColor == 'purple') {
            idContacts.style.backgroundColor = null;
            idContacts.style.cursor = 'pointer';
            idContacts.style.color = null;

        }
    });
}

bResetasColorEvent();


const bResetasFontEvent = () => {

    bResetasFont.addEventListener('click', function (e) {
        e.stopPropagation();

        if (idContacts.style.fontSize == '22px') {
            idContacts.style.fontSize = null;
            idContacts.style.cursor = 'pointer';

        }
    });
}

bResetasFontEvent();



// Elementų grupių events
//// Padaryti, kad dukartus paspaudus ant naujų gyvūnų
//// jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const classNewEventF = () => {
    for (let i = 0; i < classNew.length; i++) {

        classNew[i].style.cursor = 'pointer';

        classNew[i].addEventListener('dblclick', function (e) {

            e.stopPropagation();

            if (classNew[i].style.color == 'red') {
                e.stopPropagation();
                classNew[i].style.cursor = 'pointer';
                classNew[i].style.color = null;

            }
            else {
                e.stopPropagation();

                classNew[i].style.cursor = 'pointer';
                classNew[i].style.color = 'red';
            }
        });
    }
}
classNewEventF();

//// Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu.
//// “PATINKA” tas neturi galioti.
const ulAndLiTagAnimals = document.querySelectorAll('ul li:not(.like-button)');

const eventAnimals = () => {
    for (let i = 0; i < ulAndLiTagAnimals.length; i++) {

        ulAndLiTagAnimals[i].style.cursor = 'pointer';

        ulAndLiTagAnimals[i].addEventListener('click', function (e) {

            e.stopPropagation();

            if (ulAndLiTagAnimals[i].style.fontSize == '130%') {
                e.stopPropagation();

                ulAndLiTagAnimals[i].style.cursor = 'pointer';
                ulAndLiTagAnimals[i].style.fontSize = null;

            }
            else {
                e.stopPropagation();
                ulAndLiTagAnimals[i].style.cursor = 'pointer';
                ulAndLiTagAnimals[i].style.fontSize = '130%';

            }
        });
    }
}
eventAnimals();
//// Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;
const ulButonLike = document.querySelectorAll('.like-button');

const eventLike = () => {
    for (let i = 0; i < ulButonLike.length; i++) {

        ulButonLike[i].style.cursor = 'pointer';

        ulButonLike[i].addEventListener('click', function () {

            if (ulTag[i].style.backgroundColor == 'black') {
                ulTag[i].style.cursor = 'pointer';
                ulTag[i].style.backgroundColor = null;
                ulTag[i].style.color = null;

            }
            else {
                ulTag[i].style.cursor = 'pointer';
                ulTag[i].style.backgroundColor = 'black';
                ulTag[i].style.color = 'silver';

            }
        });
    }
}
eventLike();


// Dinaminis elementų kūrimas (su createElement)
//// Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;


/******************
 * 
 * 
 *      Pirmas sprendimo ".insertBefore" variantas Sukuria Elementa
 *      uz Nurodytos klases ribu "document.querySelector(".prices")".
 * 
 * 
 * ****************/
function addElement() {
    for (let i = 0; i < ulButonLike.length; i++) {
        // create a new div element
        const newDiv = document.createElement("div");

        // and give it some content
        const newContent = document.createTextNode("Senjorai tik: 1.99 eur");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.querySelector(".prices");
        document.body.insertBefore(newDiv, currentDiv);
    }
}
addElement();




/******************
 * 
 * 
 *      Antras sprendimo variantas
 * 
 * 
 * ****************/

function myFunction() {
    const currentDiv2 = document.querySelector(".prices");
    let btn = document.createElement("h1");

    btn.textContent = 'Testukas ++++';
    currentDiv2.appendChild(btn);

}
myFunction();


/******************
 * 
 * 
 *      Trecias sprendimo variantas Su Keliais Elementais
 * 
 * 
 * ****************/
function myElementFun() {
    const pricesClass = document.querySelector('.prices');

    let li = document.createElement('div'); // deklaruojame ir priskirame 
    li.textContent = 'Products ++++';
    pricesClass.appendChild(li);

    li = document.createElement('div');
    li.textContent = 'About Us ++++';
    pricesClass.appendChild(li);
} myElementFun()
//// Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti,
//// kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
function myElementFun2() {
    const pricesClass = document.querySelector('.prices');

    let li = document.createElement('div'); // deklaruojame ir priskirame 
    li.textContent = 'Senjorų grupė iki 10: tik 5.99 eur';
    li.classList.add('new');
    li.style.cursor = 'pointer';
    li.addEventListener('click', function (e) {

        e.stopPropagation();
        // li.style.cursor = 'pointer';
        li.style.backgroundColor = 'green';

    });

    pricesClass.appendChild(li);
} myElementFun2()


//// Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA”
//// pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like



//// Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3
//// naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2.
//// Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”.
//// Mygtukai turi daryti tai kas ant jų parašyta
