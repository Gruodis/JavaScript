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


class Kibiras1 {
    // savybes

    // metodai
    constructor() {


        this.akmenuKiekis = 0;

    }

    prideti1Akmeni = () => {
        console.log(`Add 1 to ${this.akmenuKiekis} = `, ++this.akmenuKiekis);
    }
    pridetiDaugAkmenu = (kiekis) => {


        console.log(`Add (${kiekis}) to (${this.akmenuKiekis})  =  `, this.akmenuKiekis += kiekis);
    }

    kiekVisoAkmenu = () => {


        console.log(`In total: `, this.akmenuKiekis);
    }

}

const kibiras = new Kibiras1();

console.log(`1 cat Name: `, kibiras.kiekVisoAkmenu)
console.log('\n');

// kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(7);
kibiras.kiekVisoAkmenu();
console.log('\n');













class Bankas {
    // savybes

    // metodai
    constructor() {


        this.kupiuros = 0;
        this.monetos = 0;

    }

    papildyti = (nominalas) => {

        if (nominalas > 2) {
            console.log(`Kupiuros: ${this.kupiuros} + ${nominalas} = `, this.kupiuros += nominalas);
        }
        else {
            console.log(`Monetos: ${this.monetos} + ${nominalas} = `, this.monetos += nominalas);
        }
    }

}


// pavedimas i paprasta saskaita

const pavedimas = new Bankas();

const alga = [1, 1, 2, 400, 555, 606, 709, 809]

alga.forEach(item => {
    pavedimas.papildyti(item);

})

// console.log('\n');
console.log(`\nSmulkme: `, pavedimas.monetos);
console.log(`Stambus pinigai: `, pavedimas.kupiuros);

console.log(`ALGA: `, alga);
console.log('\n');


// pavedimas i USD saskaita

const pavedimasUSD = new Bankas();
const algaUSD = [0.5, 1, 2, 5, 10, 20, 50, 100]

algaUSD.forEach(item => {
    pavedimasUSD.papildyti(item);

})

console.log(`\nSmulkme USD: `, pavedimasUSD.monetos);
console.log(`Stambus pinigai USD: `, pavedimasUSD.kupiuros);

console.log(`ALGA USD: `, algaUSD);
console.log('\n');


// padaryti masyva ir sudeti viska i banka su forEach
// kupiura.papildyti(1);
// kupiura.papildyti(4);
// kupiura.papildyti(6);
// kupiura.papildyti(5);
// kupiura.papildyti(5);
// kupiura.papildyti(1);
// kupiura.papildyti(2);
// moneta.pridetiMonetas();
// kibiras.pridetiDaugAkmenu(7);
// kibiras.kiekVisoAkmenu();
