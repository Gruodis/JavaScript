function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!_ _ _DEMESIO SALYGOS TAISYKLE _ _ _!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//
//  let i = 1; reikia, kad skaiciavimas prasides nuo antros reiksmes pvz. jeigu yra 0, 1, 2, 3, 4, skaiciuosime nuo 1, praleisdami 0;
//
//  naudodami sia salyga galime skaiciuoti Nelyginius Elementus, pvz.: for (let i = 1; i < masyvas.length; i += 2) {poriniuSuma += masyvas[i];}
//
//  arba Lyginius pakeite salyga: for (let i = 0; i < masyvas.length; i += 2) {poriniuSuma += masyvas[i];}
//
//  pvz. jeigu salygoje turime: "i = 0; i++"     imsime visas reiksmes 0, 1, 2, 3, 4, 5 ir t.t.
//  pvz. jeigu salygoje turime: "i = 0; i += 2"  imsime KAS ANTRA reiksme 0, 2, 4, 6, 8 ir t.t.
//
//
//
//_______________________________________________________________________________________________________________________________________________________
/////////////////////////////////////////////////////----------------SALYGA END-------------------------/////////////////////////////////////////////////





//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4

if(eksperimentoRezultatas == (1 || 4)) {
    console.log('pavyko', eksperimentoRezultatas)
}
else {
    console.log('nepavyko', eksperimentoRezultatas)
}
//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
//4.
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
//5.
let raideABC;
//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
//6.
let skaiciai = rand(1,3)

if(skaiciai === 1) {
    raideABC = 'A';

}
else if(skaiciai === 2) {
    raideABC = 'B';
}
else if(skaiciai === 3) {
    raideABC = 'C';
}
console.log('skaiciu i raide', raideABC, skaiciai);

console.log('//');
console.log('//');
console.log('//');



let pirmas = rand(1, 4);
let antras = rand(2, 3);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 


let sandauga = pirmas * antras;
let sudetis = pirmas + antras;
if ( sudetis > sandauga) {
    console.log('Sudetis daugiau', 'sandauga:', sandauga, 'sudetis:',sudetis);
}
else if ( sudetis < sandauga) {
    console.log('Sandauga daugiau', 'sandauga:', sandauga, 'sudetis:',sudetis);
}
else {
    console.log('Lygu', 'sandauga:', sandauga, 'sudetis:',sudetis);
}
console.log( 'sandauga:', sandauga, 'sudetis:',sudetis, '     ', pirmas, antras)

console.log('//');
console.log('//');
console.log('//');


let asilai = rand(0, 2);
let karves = rand(0, 2);

//7.
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
if (!(!asilai && !karves)) { //jeigu karviu ir asilu yra 0, tuomet nulis sklaiustuose uzskaitomas, kaip false
    console.log('turim gyvuliu', karves, asilai)
}
else {
    console.log('neturim gyvuliu', karves, asilai)
}
//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 
if (dalyvis1+dalyvis2>6 || dalyvis1 === dalyvis2 ) {
    console.log('laimejo', dalyvis2, dalyvis1)
}
else {
    console.log('pralaimejo')
}
console.log(dalyvis2, dalyvis1)
//9.
let daug = rand(1000000, 9999999);


let kiek = 0;
if (!(daug % 5)) { // jeigu padalinus kintamaji "daug" is 5 ir turim liekana, tuomet su ! paneigiam "false" vykdom
    
    //arba kitoks uzrasymas (daug % 5 == 0 )
//su kiek++ isimenam salyga, kuri atitiko palyginima
    kiek++; //didinu cienetu. nurodom nauja reiksme, kad kitam ife butu 1+1
   // kiek = kiek + 1; //tas pats uzrasymas
}
if (!(daug % 10)) {

    kiek++; //didinu cienetu. nurodom nauja reiksme, kad kitam ife butu 2+1
   // kiek = kiek + 1; //tas pats uzrasymas
}
if (!(daug % 8)) {

    kiek++; //didinu cienetu. nurodom nauja reiksme, kad kitam ife butu 3+1
   // kiek = kiek + 1; //tas pats uzrasymas
}
console.log(kiek, daug);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.

//10. pasidaryti su salygomis
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
let laimejauAs = ((as == 'popierius') == (tu == 'akmuo')) || ((as == 'akmuo') == (tu == 'zirkles')) || ((as == 'zirkles') == (tu == 'popierius'));
let laimejaiTu = ((tu == 'popierius') == (as == 'akmuo')) || ((tu == 'akmuo') == (as == 'zirkles')) || ((tu == 'zirkles') == (as == 'popierius'));

if (laimejauAs && (as == ('popierius' || 'zirkles' || 'akmuo'))) {

    console.log('<---------------------Laimejai Tu----------------->', laimejauAs, 'Tu:',tu, 'As:',as)
}
else if (laimejaiTu && (tu ==( 'popierius' || 'zirkles' || 'akmuo'))) {
    console.log('<---------------------Laimejau As----------------->', laimejaiTu, 'Tu:',tu, 'As:',as)
}
else if (as && tu) {
    console.log('<---------------------Lygiosios----------------->', 'Tu:',tu, 'As:',as)
};


let color1 = rand(0, 1) ? 'red' : 'green';
let color2 = rand(0, 1) ? 'red' : 'green';
let color3 = rand(0, 1) ? 'red' : 'green';
let color4 = rand(0, 1) ? 'red' : 'green';

//let colorPirmasDerinys = (color1  &&  color2);
//let colorAirmasDerinys = (color3  &&  color4);

//if (colorPirmasDerinys == (color1 || color2) || colorAirmasDerinys == (color3  ||  color4)) {
// if ((color1 == color2) || (color3  ==  color4)) {

//     console.log('Ok', color2, color1, 'antras derinys', color3, color4)
// }
// else {
//     console.log('Nesutapo', color1, color2, color, color4)
// };

if (color1 != color2 && color1  ==  color4) {

    console.log('Ok', color1, color2, 'antras derinys', color1, color4)
}
else {
    console.log('Nesutapo', color1, color2, color1, color4)
};


console.log('<---------------------klijai----------------->')

let preke1 = 'Janga';
//backtick `` su tokiais skliaustais galima lauzyti teksta
// toliau panaudojama ${spalva}

let spalva = 'zalia';
let preke = `Kaip naudoti kabute kabutese ${spalva} "Janga"`
let kaina = 34.25;
let valiuta = 'Eur';

console.log(preke + ' ' + kaina + valiuta);



let sk1 = 4;

let sk2 = 5;

sk1 = sk1 +1;//gaunasi 5

// sk1 +1

//let sk2 = ++sk1
//let sk2 + sk1++
//let sk2 + ++sk1
//let sk2++ + sk1
//let ++sk2 + sk1

console.log(sk1, sk2)