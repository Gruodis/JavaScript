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
////////////////// Uzdavinys /////////////////////
//
// Sukurti klase "Stikline", 
// i, kurį ilipa ir išlipa keleiviai.
//
// Skaiciuoti kiekvieno marsruto srauta:
// ilipo,
// islipo,
// kiek vaziuoja toliau,
// kiek viso keleiviu vaziavo marsrutu,
// kiek islipo marsuto pabaigoje.
//
// Keleiviai imami iš masyvo []
//
//||||||||||||||||||||||||||||||||||||||||||||||||
`)
class Stikline {
    // savybes

    static pertekliausLikutis = 0;
    // static ilipoViso = 0;
    // static islipoViso = 0;

    // metodai
    constructor(turis) {


        this.gerimas = 0;
        this.ipilam = turis;
        // this.kauptiPertekliu = 0;
        // this.ilipoViso = 0;
        // this.vaziuoja = 0;

        // this.id = rand(2, 19);

    }

    pripilti = (kiekis) => {

        this.gerimas += kiekis;
        this.gerimas = Math.min(this.ipilam, this.gerimas)

console.log('\n', this.ipilam, this.gerimas);



        // if ((kiekis) >= 0) {

        //     Stikline.ilipoViso += kiekis;

        //     this.ilipo = kiekis;
        //     this.ilipoViso += kiekis;

        //     console.log(`
        //     |${this.id}| GO:
        //     Troleibuse yra keleiviu: `, this.vaziuoja, `
        //     |${this.id}| STOP:
        //     Ilipo nauju keleiviu: `, this.ilipo, `
        //     Toliau vaziuoja keleiviu: `, this.vaziuoja += this.ilipo
        //     );

        //     // console.log('X ', this.vaziuoja)

        // }
        // else {
        //     // this.islipo = Math.max(0, (this.vaziavo += kiekis))

        //     if ((this.vaziuoja + kiekis) <= 0) {
        //         this.islipo = 0;

        //         console.log(`  
        //         |${this.id}| GO:
        //         Troleibuse yra keleiviu: `, this.vaziuoja, `
        //         |${this.id}| STOP:
        //         Troleibus yra keleiviu: `, this.vaziuoja, `
        //         Islipo kiekis: `, this.vaziuoja, `
        //         Toliau vaziuoja: `, 0
        //         );

        //         this.vaziuoja = 0;
        //     }
        //     else {
        //         console.log(`
        //     |${this.id}| GO:
        //     Troleibuse yra keleiviu: `, this.vaziuoja, `
        //     |${this.id}| STOP: 
        //     Islipo kiekis: `, kiekis, `
        //     Liko = `, + (this.vaziuoja += kiekis)
        //         );

        //     }



        // }
    }

    perpilti = () => {
        const tarpinisKiekis = this.gerimas;
        this.gerimas = 0;
        return tarpinisKiekis;

    }

    visoStiklineje = () => {
        return this.gerimas;

    
    }

    galine = () => {

        console.log(`
        Viso |${this.id}|-to marsruto troleibusu vaziavo: ${this.ilipoViso} keleiviu

        Galine stoteleje islipo: `, this.vaziuoja, `keleivis(-iu)`);

        Stikline.paskutineStoteleViso += this.vaziuoja;

    }

}

const stikline200 = new Stikline(200);
const stikline150 = new Stikline(150);
const stikline100 = new Stikline(100);

// const keleiviai = [1, 1, -22, 4, -3, -66, 10]

// console.log(`
// Toleibusas NR. |${marsrutas.id}| 
// Ilipa/islipa MASYVAS : `, keleiviai);

// keleiviai.forEach(keleivis => {
//     marsrutas.pripilti(keleivis);

// })

stikline200.pripilti(400);
stikline150.pripilti(stikline200.perpilti());
stikline100.pripilti(stikline150.perpilti());



console.log('\n');
console.log('200 ', stikline200.visoStiklineje())
console.log('150 ', stikline150.visoStiklineje())
console.log('100 ', stikline100.visoStiklineje())


// console.log(`Viso ilipo keleiviu: `, Stikline.ilipoViso, `.`);

// marsrutas.galine()
console.log('\n');

// const marsrutas2 = new Stikline();

// const keleiviai2 = [10, -2, -7, 4, -3, 2, 10]

// console.log(`
// Toleibusas NR. |${marsrutas2.id}|
// Ilipa/islipa MASYVAS : `, keleiviai2);

// keleiviai2.forEach(keleivis => {
//     marsrutas2.pripilti(keleivis);

// })

// console.log('\n');

// // console.log(`Viso ilipo keleiviu: `, Stikline.ilipoViso, `.`);
// marsrutas2.galine()
// console.log('\n');

// const marsrutas3 = new Stikline();

// const keleiviai3 = [10, -6, -4, 8, 4, -10]

// console.log(`
// Toleibusas NR. |${marsrutas.id}|
// Ilipa/islipa MASYVAS : `, keleiviai3);

// keleiviai3.forEach(keleivis => {
//     marsrutas3.pripilti(keleivis);

// })

// console.log('\n');

// // console.log(`Viso ilipo keleiviu: `, Stikline.ilipoViso, `.`);

// marsrutas3.galine()
// console.log('\n');


// console.log(`Per para galineje stoteleje VISO islipo keleiviu: `, Stikline.paskutineStoteleViso, `.`);
