function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);
            } else {
                output += arg;
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("log"));





console.log(`
////////////////// JavaScript MAP /////////////////////
//
//
(MAP) Sukurti klasę PirkiniuKrepselis. 
Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). 

Parašyti metodą krepselioTurinys(), 
kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). 

Pridėti tuos pačius produktus galima po kelis kartus, 
tokiu atveju produktų kiekis turėtų sumuotis.
//
//||||||||||||||||||||||||||||||||||||||||||||||||
`)

const test = []

class PirkiniuKrepselis {


    constructor() {

        this.turinys = new Map();
        this.total = 0;
        this.preke;
        this.kiekis = 0;
    }

    produktai = (produktas, kiekis) => { // imame prekes pavadinima ir kieki, kuris nurodytas

        this.preke = produktas;
        this.kiekis = kiekis;


        test.push(this.preke); // skirtingu prekiu skaiciavimui


        if (this.turinys.has(this.preke)) {

            // this.total++;

            // for (let [key, value] of this.turinys) {


            // console.log(`Jau turim ${preke}`, kiekis);

            console.log(`-- ${this.preke} jau ideta(-as), idedam dar: `, this.kiekis);
            this.kiekis += this.turinys.get(this.preke)

            this.turinys.set(this.preke, this.kiekis);




            // this.turinys.set(preke, kiekis);





            // this.turinys.set[key, value] = ([preke, value += kiekis]);
            // console.log(preke, kiekis);

            // kiekis = value;
            // }
        }
        else {

            this.turinys.set(this.preke, this.kiekis);
            console.log(`\nIdedam ${this.preke}`, this.kiekis);


        }

        // this.turinys.set('Surelis', kiekis);
        // this.turinys.set(preke, kiekis);
        // console.log(this.turinys);

    }

    krepselioTurinys = () => {

        test.forEach(name => {

            if (this.preke === name) {
                // console.log('JJ', name, this.total);
                this.total++;
            }
        })

        console.log(`\nKREPSELIO TURINYS:`);

        for (const krepselis of this.turinys) {
            console.log(`--preke ${krepselis[0]}, ${this.total}xPakuotes, pakuoteje`, krepselis[1] / this.total, ` vnt, Viso ${krepselis[1]}vnt.`);

        }

        console.log(`\n ============`);

    }


}


const pirkti = new PirkiniuKrepselis();

pirkti.produktai('Surelis', 9);
pirkti.produktai('Surelis', 9);
pirkti.produktai('Surelis', 4);
pirkti.produktai('Surelis', 4);
pirkti.produktai('Surelis', 4);


pirkti.produktai('Kava', 4);
pirkti.produktai('Kava', 4);
pirkti.produktai('Kava', 4);
pirkti.produktai('Kava', 4);
pirkti.produktai('Kava', 4);

pirkti.produktai('Miltai', 4);
pirkti.produktai('Miltai', 2);


const pirktiAure = new PirkiniuKrepselis();

pirktiAure.produktai('Silke', 9);
pirktiAure.produktai('Silke', 4);
pirktiAure.produktai('Silke', 4);


pirktiAure.produktai('Pienas', 4);
pirktiAure.produktai('Pienas', 4);
pirktiAure.produktai('Pienas', 4);


// console.log(`Map: `, pirkti.size())
pirkti.krepselioTurinys()
pirktiAure.krepselioTurinys()
console.log(`\n www`, pirkti.preke, '??', test, `LLL`,);



const mapas = new Map();


// pushinam i Map
mapas.set('Pupa', 11);
mapas.set('Leo', 7);
mapas.set('Cita', 6);

// iteruojam esama values
mapas.set('Leo', 14);


for (const element of mapas) {
    console.log(element);

}

for (const [key, value] of mapas) {
    console.log(key, value);
}

console.log(`\nTikriname ar egzistuoja value`, mapas);
console.log(`\nTikriname map.size`, mapas.size);
console.log(`\nTikriname ar egzistuoja value 'Pupa': `, mapas.has('Pupa'));
console.log(`\n Atvaizduojame value: `, mapas.get('Pupa'));



