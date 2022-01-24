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
// Sukurti klase "Troleibusas", 
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
class Troleibusas {
    // savybes

    static paskutineStoteleViso = 0;
    static ilipoViso = 0;
    static islipoViso = 0;

    // metodai
    constructor() {


        this.islipo = 0;
        this.ilipo = 0;
        this.ilipoViso = 0;
        this.vaziuoja = 0;

        this.id = rand(2, 19);

    }

    papildyti = (keleiviai) => {


        if ((keleiviai) >= 0) {

            Troleibusas.ilipoViso += keleiviai;

            this.ilipo = keleiviai;
            this.ilipoViso += keleiviai;

            console.log(`
            |${this.id}| GO:
            Troleibuse yra keleiviu: `, this.vaziuoja, `
            |${this.id}| STOP:
            Ilipo nauju keleiviu: `, this.ilipo, `
            Toliau vaziuoja keleiviu: `, this.vaziuoja += this.ilipo
            );

            // console.log('X ', this.vaziuoja)

        }
        else {
            // this.islipo = Math.max(0, (this.vaziavo += keleiviai))

            if ((this.vaziuoja + keleiviai) <= 0) {
                this.islipo = 0;

                console.log(`  
                |${this.id}| GO:
                Troleibuse yra keleiviu: `, this.vaziuoja, `
                |${this.id}| STOP:
                Troleibus yra keleiviu: `, this.vaziuoja, `
                Islipo keleiviai: `, this.vaziuoja, `
                Toliau vaziuoja: `, 0
                );

                this.vaziuoja = 0;
            }
            else {
                console.log(`
            |${this.id}| GO:
            Troleibuse yra keleiviu: `, this.vaziuoja, `
            |${this.id}| STOP: 
            Islipo keleiviai: `, keleiviai, `
            Liko = `, + (this.vaziuoja += keleiviai)
                );

            }



        }
    }

    galine = () => {

        console.log(`
        Viso |${this.id}|-to marsruto troleibusu vaziavo: ${this.ilipoViso} keleiviu

        Galine stoteleje islipo: `, this.vaziuoja, `keleivis(-iu)`);

        Troleibusas.paskutineStoteleViso += this.vaziuoja;

    }

}

const marsrutas = new Troleibusas();

const keleiviai = [1, 1, -22, 4, -3, -66, 10]

console.log(`
Toleibusas NR. |${marsrutas.id}| 
Ilipa/islipa MASYVAS : `, keleiviai);

keleiviai.forEach(keleivis => {
    marsrutas.papildyti(keleivis);

})

console.log('\n');

// console.log(`Viso ilipo keleiviu: `, Troleibusas.ilipoViso, `.`);

marsrutas.galine()
console.log('\n');

const marsrutas2 = new Troleibusas();

const keleiviai2 = [10, -2, -7, 4, -3, 2, 10]

console.log(`
Toleibusas NR. |${marsrutas2.id}| 
Ilipa/islipa MASYVAS : `, keleiviai2);

keleiviai2.forEach(keleivis => {
    marsrutas2.papildyti(keleivis);

})

console.log('\n');

// console.log(`Viso ilipo keleiviu: `, Troleibusas.ilipoViso, `.`);
marsrutas2.galine()
console.log('\n');

const marsrutas3 = new Troleibusas();

const keleiviai3 = [10, -6, -4, 8, 4, -10]

console.log(`
Toleibusas NR. |${marsrutas.id}| 
Ilipa/islipa MASYVAS : `, keleiviai3);

keleiviai3.forEach(keleivis => {
    marsrutas3.papildyti(keleivis);

})

console.log('\n');

// console.log(`Viso ilipo keleiviu: `, Troleibusas.ilipoViso, `.`);

marsrutas3.galine()
console.log('\n');


console.log(`Per para galineje stoteleje VISO islipo keleiviu: `, Troleibusas.paskutineStoteleViso, `.`);
