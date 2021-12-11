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



