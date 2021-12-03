//global scope yra pagrindinis blokas jeigu nera daugiau jokiu

// neteisingas uzrasymas 
//var yra globalus skirtingai nuo let
//todel jeigu naudojama var tuomet turi buti ir deklaruota ir priskirta
// var i = 8

i = 8;

var i

console.log(i)


// su letu butinas eiliskumas
//letas yra blokinis kintamasisi veikia tik {} viduje
let g;

g = 99;

console.log(g)

///


if (true) {
    console.log('hello', g);

    //kitamasis g is tevinio negali patekti i child bloka jeigu kartojasi deklaravimas
    //let g;
    g = 8;
    console.log(g);

}
console.log(g);
