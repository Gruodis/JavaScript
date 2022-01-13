let ul = document.querySelector('ul');

// geles = geles.split();
// 1
// Su forEach atspausdinti medžius
const medziai = ['Beržas', 'Berok', 'Drebąlė', 'Ąžuolas', 'Klevas', 'Uosis', 'Palmė', 'Agrastas', 'Eglė', 'Maumedis'];


let countLetters = 0;

let letterA = 0;

medziai.forEach(medis => {


    letterA += (medis.split(/[a]+|[Ą]+|[A]+|[ą]/).length - 1)
    // + (medis.split('A'.toLowerCase).length - 1)
    // + (medis.split('Ą').length - 1)
    // + (medis.split('ą').length - 1);



    countLetters += medis.length; // skaiciuojam kiek Viso raidziu yra stringe

    console.log(countLetters, '++||++', medis.length)

    // sukuriam kiekvienam medziui li elementa

    const li = document.createElement('li');
    let text = document.createTextNode(medis.split());
    li.appendChild(text);
    ul.appendChild(li);

    if ((medis.split(/[a]+|[Ą]+|[A]+|[ą]/).length - 1)) {
        li.style.backgroundColor = 'red'
    }


}
);


let m = 0;
medziai.forEach(medis => m += medis.length)

console.log('Viso raidziu trumpa versija: ', m, `'
//
////////////////////////////
'`);

console.log('Masyvas: ', medziai);

console.log(`Medziai 'a'  raides: `, letterA);

console.log('Medziai Viso raides: ', countLetters);



/*****
 * 
 * 
 * 
 * Geles section
 * 
 * 
 * 
 * 
*/
let htmlValue = document.getElementById('_1').innerText;

let gelesCount = document.querySelectorAll('p');
let p = document.querySelector('p');

let geliuSkc = 0;

let geles = [];

// geles.forEach(gele => {
//     geles.push(gele);
// })

// geles.split('');

m = 0;

gelesCount.forEach(gele => {

    // geliuSkc +=
    let x = gele.innerText;
    x.split()
    console.log('xx', x)
    geles.push(x);
    console.log('xxxx', x.length)

    // pridedam data atributus ir nauja span elementa
    gele.setAttribute('data-letters-count', x.length);

    const span = document.createElement('strong');
    let text = document.createTextNode(' - ' + x.length + ' raides');
    span.appendChild(text);
    gele.appendChild(span);

}
)

geles.forEach(gele => m += gele.length)

// geles.forEach(gele => {


//     // sukuriam kiekvienam medziui li elementa

//     const span = document.createElement('span');
//     let text = document.createTextNode(gele.split());
//     span.appendChild(text);
//     p.appendChild(span);




// }
// );
// const newLi = () => {

//     const span = document.createElement('span');
//     let text = document.createTextNode('cxcxcx');
//     span.appendChild(text);


// }


console.log(`//
//
//  Viso geliu: ${gelesCount}
//  Viso geliu: ${gelesCount.length}
//  x: ${geliuSkc}
//  Viso geliu masyve: ${geles}
//  Viso geles turi raidziu: ${m}
//
// --------------------------------`, geles, gelesCount);


// console.log('Geles: ', geles, geles.length, geliuSkc, `gelesC: ${gelesCount.length}`);