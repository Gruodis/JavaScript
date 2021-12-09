////////////////////////////////////////////////////////////////////////////////////////////////
//
// masyvas ARRAY yra kintamojo tipas
//
////////////////////////////////////////////////////////////////////////////////////////////////


// daugiau kintamuju tipu:

// String	vaizduoja tekstinius duomenis	'hello'ir "hello world!"kt
// Number	sveikasis skaičius arba slankiojo kablelio skaičius	3, 3.234ir 3e-2kt.
// BigInt	savavališko tikslumo sveikasis skaičius	900719925124740999n ir 1n kt.
// Boolean	Bet kuri iš dviejų reikšmių: teisinga arba klaidinga	true ir false
// undefined	duomenų tipas, kurio kintamasis nėra inicializuotas	let a;
// null	žymi nullvertę	let a = null;
// Symbol	duomenų tipas, kurio egzemplioriai yra unikalūs ir nekintami	let value = Symbol('hello');
// Object	pagrindinių duomenų ir porų rinkimo poros	let student = ( );


// Masyvo struktura
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
//  Zemiau 
//
//                     ||______Stalcius NR 2__.
//                     ||______Stalcius NR 3__.
//                     ||______Stalcius NR 4__.


let stringas = 'hello';

if (stringas == 'hello') {
    console.log('PAvyko')
}