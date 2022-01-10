const bitGirls = [
    'Brigita',
    'Edita',
    'Deimantė',
    'Justė',
    'Lina'
];

bitGirls.forEach(element => console.log(element));

let bitAnimals = [
    'Bunny',
    'Cat', //will be deleted
    'Dier',
    'Dog', //will be deleted
    'Mouse',
    'Cacadoo'
];


let arejus = []; // generate new object and add arrays from forEach

bitAnimals.forEach(animal => {

    if (animal != 'Dog' && animal != 'Cat') {

        console.log(animal)
        arejus.push(animal)
    }
}
);

console.log(arejus)

const bits = [13, 14, 18, 1988, 05, 11];

let str = "aa aaa aa aaa";

const raide = 'a'
const skc = '8'

let suma = 0;
let dd = 0;
let tt = 0;

// const myArray = str.split("a");
bits.forEach(bit => {

    if (bit % 2 != 0) {
        console.log('Nelyginis: ', bit)
    }
    if (bit % 2 == 0) {
        console.log('Lyginis: ', bit)
    }

    dd = (str.split(raide).length - 1); // skaiciuojam kiek 'a' raidziu yra stringe

    const s = ' ' + bit; // paverciam skaiciu i stringa
    tt += (s.split(skc).length - 1) // splitinam masyve esancius stringus ir tikrinam norima stringa

    suma += bit; // sumuojam masyve esancius skaicius

}
);


console.log('Masyvo SUMA: ', suma, `|| (${raide}) raide kartojasi: ${dd}, || Skaicius ${skc} karojasi: ${tt}`)



const seas = ['bubu', 'pupa', 'bobas', 'vyras'];

// let counSeatLetters = 0;


var freq = 0;

seas.forEach(sea => {



    freq += (sea.split('').length); // skaiciuojam kiek 'a' raidziu yra stringe

    console.log(freq, '++||++', freq.slice('').length)

}
);




console.log('Sea letters: ', freq);