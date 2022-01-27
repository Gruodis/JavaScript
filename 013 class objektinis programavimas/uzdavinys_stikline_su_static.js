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

    // metodai
    constructor(turis) {


        this.skystis = 0;
        this.turis = turis;
        this.likutis = 0;


    }

    pripilti = (kiekis) => {

        this.skystis += kiekis;
        // this.skystis = Math.min(this.turis, this.skystis)

        console.log('\n Pripilti turis/skystis', this.turis, this.skystis);

        if (this.skystis > this.turis) {
            if ((Stikline.pertekliausLikutis === 0)) {

                Stikline.pertekliausLikutis += (this.skystis - this.turis)
                console.log('\n Likutis !===0 ', Stikline.pertekliausLikutis);

                this.skystis = this.turis;


            }
            else {

                Stikline.pertekliausLikutis -= (this.skystis - this.turis)
                console.log('\n Else Likutis !===0 ', Stikline.pertekliausLikutis);


            }

            this.skystis = this.turis
        }


    }

    perpilti = () => {

        console.log('\n If  kiekis', this.skystis, this.turis);

        if (Stikline.pertekliausLikutis > 0) {
            this.skystis = Stikline.pertekliausLikutis;

            this.skystis = this.turis;

            console.log('\n If2  kiekis', this.skystis, this.turis);

            Stikline.pertekliausLikutis -= this.turis;

            return Stikline.pertekliausLikutis;



        }
        else {
            // const tarpinisKiekis = this.skystis;
            console.log('\n else ', this.turis, ' kiekis', this.skystis);

            this.skystis = 0;
            return Stikline.pertekliausLikutis;

        }

    }

    visoStiklineje = () => {
        // return this.skystis;
        console.log('\n else ', this.turis, ' kiekis', this.skystis);

        return Stikline.pertekliausLikutis;



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

stikline200.pripilti(575);
stikline100.pripilti(
    stikline150.perpilti(
        stikline200.perpilti()
    )
);
// stikline100.pripilti(stikline150.perpilti());



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