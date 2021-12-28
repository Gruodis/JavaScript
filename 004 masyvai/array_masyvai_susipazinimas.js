function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
////////////////////////////////////////////////////////////////////////////////////////////////
//
// kintamojo tipas ARRAY(objektas arba kitaip masyvas)
//
////////////////////////////////////////////////////////////////////////////////////////////////

// daugiau kintamuju tipu:

// String	vaizduoja tekstinius duomenis	'hello'ir "hello world!"kt
// Number	sveikasis skaičius arba slankiojo kablelio skaičius	3, 3.234ir 3e-2kt.
// BigInt	savavališko tikslumo sveikasis skaičius	900719925124740999n ir 1n kt.
// Boolean	Loginis  Bet kuri iš dviejų reikšmių: teisinga arba klaidinga	true ir false
// undefined	duomenų tipas, kurio kintamasis nėra inicializuotas	let a;
// null	žymi nullvertę	let a = null;
// Symbol	duomenų tipas, kurio egzemplioriai yra unikalūs ir nekintami	let value = Symbol('hello');
// Object	pagrindinių duomenų ir porų rinkimo poros	let student = ( );

// Masyvo struktura

// let object = [1]
//
// Masyvas___
//           ||______Stalcius Nr 0__.
//           ||______Stalcius NR 1__.
//           ||______Stalcius NR 2__.
//           ||______Stalcius NR 3__.
//           ||______Stalcius NR 4__.
//
// Is Masyvo galime isimti bet, kuri stalciu. Isemus norima stalciu, jie pernumeruojami, pvz.:
//
// Masyvas_____________
//                     ||______Stalcius Nr 0__.
//
//  <===[ Isimame Stalciu NR 1 ]===
//
//  Zemiau esantys stalciai persinumeruoja
//
//                     ||______Stalcius NR 2_===>_1.
//                     ||______Stalcius NR 3_===>_2.
//                     ||______Stalcius NR 4_===>_3.
//
// I Masyva galime prideti nauja Stalciu, naujas Stalcius visada bus atvaizduotas Masyvo pabaigoje,
//
// !!!!!!!!!!!!!!!!---------NEGALIMA ideti naujo Stalciaus tarp esamu---------!!!!!!!!!!!!!!!!!!
//
// Stalciu gali buti N kiekis.
//
// !!!!!!!!!!!!!!!!---------pagrindine Masyvo savybe LENGHT = Dydis ---------!!!!!!!!!!!!!!!!!!
//
// masyvas.length

//let masyvas = [];
let masyvas = [];

// .push = eiles tvarka sukuria nauja Stalciu(paskutinis sarase).
// Pvz.jeigu masyve egzistuoja 100 Stalciu, tai naujam Stalciui automatiskai bus priskirtas numeris - 101.

// .unshift = sukuria Stalciu masyvo pradzioje
masyvas.unshift(10, 11, 12, 13); // add new variable to the Bebinning of Object masyvas

//masyvas.push('Katinas'); // add new variable to the End Object masyvas
//masyvas.push('Arklys'); // add new variable to the End Object masyvas

masyvas.push(4); // add new variable to Object masyvas
//masyvas[2]++; // galime atlikti veiksmus su kintamuoju

// masyvas[1] = 'Lektuvas'; // keiciam esama kintamaji = Arklys i Lektuvas. Nurodome Stalciaus numeri, kuriame yra Arklys ir irasome nauja kintamaji = Lektuvas.


console.log(`Masyvo kintamieji STRING: ${masyvas}
//
//Masyvo kintaieji:`, masyvas); // print all variables

console.log(`|| 
Stalciau Nr.1 turinys: ${masyvas[1]}`); // print variables from Stalcius Nr2

console.log(`//
//
Masyvo dydis: ${masyvas.length}`); // print variables from Stalcius Nr2














////////////////////////////////////////////////////////////////////////////////////////////////
//
// Kryziukai Nuliukai lentele is masyvu
//
////////////////////////////////////////////////////////////////////////////////////////////////

const nuliukaiXiukai = [];
// const eilute1 = [];
// const eilute2 = [];
// const eilute3 = [];

// let xOr0 = ['X', '0'];

let xiukai = 0;
let nuliukai = 0;

// for (let i = 0; i < 3; i++) {

//     eilute1.push(xOr0[rand(0, 1)]);
//     eilute2.push(xOr0[rand(0, 1)]);
//     eilute3.push(xOr0[rand(0, 1)]);
// }

for (let i = 0; i < 3; i++) { // didysis Ciklas

    // nuliukaiXiukai.push([]);
    nuliukaiXiukai[i] = [];
    for (let j = 0; j < 3; j++) { // mazasis Ciklas

        nuliukaiXiukai[i][j] = rand(0, 1) ? 'X' : '0'; //generuojam tris reiksmes (X || 0)

        nuliukaiXiukai[i][j] == 'X' ? xiukai++ : nuliukai++; //skaiciuojam sugeneruotas reiksmes (X || 0)
    }
}

// nuliukaiXiukai[0] = eilute1;
// nuliukaiXiukai[1] = eilute2;
// nuliukaiXiukai[2] = eilute3;


console.log(nuliukaiXiukai, `Nuliuku = `, nuliukai, `Xiuku = `, xiukai);


