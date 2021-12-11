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







//1.////////////////////////////////////////////////////////////////////////////////////////////////////////
let egzaminoRezultatas = rand(1, 10);

// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
if (egzaminoRezultatas > 3) {
    console.log("Egzaminas islaikytas", egzaminoRezultatas)
} else {
    console.log("Egzaminas neislaikytas", egzaminoRezultatas)
}

console.log("-------islaikyto egzamino balas nuo 4 -------->")
console.log("//")
console.log("//")






//2.///////////////////////////////////////////////////////////////////////////////////////////////////////
let eksperimentoRezultatas = rand(1, 4);

// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4) {

    console.log("Gautas skaicius =", eksperimentoRezultatas)
} else {
    console.log("Rezultatas neatitinka nei 1 nei 4", "Gautas skaicius -->", eksperimentoRezultatas)
}


console.log("-------Rodom tik 1 ir 4-------->")
console.log("//")
console.log("//")





//3./// //////////////////////////////////////////////////////////////////////////////////////////////////
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5

let automobilioGreitisBauda = (automobilioGreitis - 60)* 5
    // Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
if (automobilioGreitis > 60) {
    console.log("Virsytas greitis", automobilioGreitis - 60, 'baudos dydis', automobilioGreitisBauda)
    //console.log("Virsytas greitis", automobilioGreitis, 'baudos dydis', automobilioGreitis * 5)

} else {
    console.log("Viskas ok, greitis", automobilioGreitis)
}
console.log("Automobilio greitis", automobilioGreitis)



console.log("------Leistinas greitis 60km/h--------->")
console.log("//")
console.log("//")


//4./////////////////////////////////////////////////////////////////////////////////////////////////////
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
if ( eilesNumeris % 2 ==  false ) {

// if ( eilesNumeris % 2 ) { //su sita salyga, pirma rodoma neporine eile, nes tik gavus 0, reiks, kad sugeneruotas skaicius issidalino be liekanos

    console.log(typeof eilesNumeris, "Eiles numeris porinis", eilesNumeris % 2)
} else {
    console.log("Eiles numeris neporinis", eilesNumeris % 2)
}
console.log(typeof eilesNumeris, "Eiles numeris ir random skaicius", eilesNumeris)

//5.////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let raideABC;
//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
console.log('-------------- 5 -----------------');

let skaicius123 = rand(1, 3);

if (skaicius123 === 1) {
    raideABC = 'A';
} else if (skaicius123 === 2) {
    raideABC = 'B';
} else {
    raideABC = 'C';
}
console.log(raideABC, skaicius123);


console.log("//")
console.log("//")


//6.////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let pirmas = rand(0, 3);
let antras = rand(0, 3);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma
let daugyba = pirmas * antras;
let sudetis = pirmas + antras;


if (daugyba > sudetis) {
    console.log("Išvada - Daugyba daugiau.", "    Daugybos veiksmas:",pirmas,"*",antras,"=",daugyba, "    Sudėties veiksmas:",pirmas,"+",antras,"=",sudetis)
}
else if(daugyba == sudetis) {
    console.log("Išvada - Lygu.", "    Daugybos veiksmas:",pirmas,"*",antras,"=",daugyba,"    Sudėties veiksmas:",pirmas,"+",antras,"=",sudetis)
}
else {
    console.log("Išvada - Sudėtis daugiau.", "   Daugybos veiksmas:",pirmas,"*",antras,"=",daugyba, "   Sudėties veiksmas:",pirmas,"+",antras,"=",sudetis)
}

console.log("//")
console.log("//")



//7.////////////////////////////////////////////////////////////////////////////////////////////////
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

if (asilai + karves) {
//if (asilai || karves > 0) {
    console.log("Gyvulių yra", "  karviu:",karves,"    asilu:", asilai)
}
else{
    console.log("Gyvulių nėra", "  karviu:",karves,"    asilu:", asilai)
}


console.log("//")
console.log("//")



//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 
if(dalyvis1 + dalyvis2 > 6 || (dalyvis1 == dalyvis2)){
    console.log("Laimėjo:", dalyvis1, dalyvis2)
}
else{
    console.log("Pralaimėjo:", dalyvis1, dalyvis2, "skaiciu suma:",dalyvis1+dalyvis2)
}
console.log("------Dalyviai laimejo, jeigu suma didesne uz 6 arba skaiciai vienodi--------->")
console.log("//")
console.log("//")



//9.
let daug = rand(1000, 9999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.
console.log('-------------- 9 -----------------');
let kiek = 0;
if (daug % 5 == 0) {
    // kiek++;
    kiek = kiek + 1;
}
if (!(daug % 10)) {
    kiek++;
}
if (!(daug % 33)) {
    kiek++;
}

console.log('Sugeneruotas sk:',daug, 'Is keliu dalinasi:', kiek);
console.log("//")
console.log("//")




//10.  akmens tikimybe 1 is 3 ( 0, 1, 2)
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
console.log('-------------- 10 -----------------');

//let laimejauAs = ((as == 'popierius') && (tu == 'akmuo') || (as == 'akmuo' && tu == 'zirklės'));
//let laimejaiTu = ((tu == 'popierius') && (as == 'akmuo') || (tu == 'akmuo' && as == 'zirklės'));

let laimejauAs = (as == 'popierius' && tu == 'akmuo' || as == 'zirklės' && tu == 'popierius' || as == 'akmuo' && tu == 'zirklės');
let laimejaiTu = (tu == 'popierius' && as == 'akmuo' || tu == 'zirklės' && as == 'popierius' || tu == 'akmuo' && as == 'zirklės');

if (laimejauAs) {
    console.log('<---------------------Laimejau As----------------->',  'Tu:',tu, 'As:',as)
}
else if (laimejaiTu) {
    console.log('<---------------------Laimejai Tu----------------->',  'Tu:',tu, 'As:',as)
}
else  {
    console.log('<---------------------Lygiosios----------------->', 'Tu:',tu, 'As:',as)
};

    console.log('<---------------------Kam kas iskrito----------------->', 'Tu:',tu, 'As:',as)
console.log('---- ternary ----');