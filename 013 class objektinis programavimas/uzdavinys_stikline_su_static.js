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

        if (kiekis === undefined) {
            kiekis = 0
        }
        console.log('\n Backoje turime', kiekis);


        this.skystis += kiekis;
        // this.skystis = Math.min(this.turis, this.skystis)


        if (Stikline.pertekliausLikutis < 0) {
            this.skystis = 0;
            Stikline.pertekliausLikutis = 0;
            console.log('\n Pripilti START If < 0  skystis', this.skystis);
        }


        if (this.skystis > this.turis) {
            if ((Stikline.pertekliausLikutis === 0)) {



                Stikline.pertekliausLikutis += (this.skystis - this.turis)

                // console.log('\n Backoje liko: ', Stikline.pertekliausLikutis);
                this.skystis = this.turis;
                console.log('Pripilam pirma stikline: ', '\n Turis ', this.turis, ' Skystis ', this.skystis, '\n  backoje liko: ', Stikline.pertekliausLikutis);


            }
            else if (Stikline.pertekliausLikutis < 0) {
                this.skystis = 0;
                console.log('\n Pripilti turis/skystis', this.turis, this.skystis);
                console.log('\n  backoje liko: ', Stikline.pertekliausLikutis);


            }
            else {
                Stikline.pertekliausLikutis -= this.turis;

                this.skystis = this.turis;
                console.log('Pripilam paskutine: ', '\n Turis ', this.turis, ' Skystis ', this.skystis);
                console.log('\n Baigus pilstyti backoje liko: ', Stikline.pertekliausLikutis);




            }


        }
    }

    perpilti = () => {

        if (Stikline.pertekliausLikutis < 0) {
            this.skystis = 0;
            Stikline.pertekliausLikutis = 0;
            console.log('\n Perpilti START If < 0  skystis', this.skystis);

        }

        this.skystis = Stikline.pertekliausLikutis;

        if (Stikline.pertekliausLikutis > 0) {

            if (this.turis > this.skystis) {
                this.skystis = Stikline.pertekliausLikutis;
                console.log('\n 8 If ++ 0  skystis', 'Skystis: ', this.skystis, ' Turis: ', this.turis);


                if (Stikline.pertekliausLikutis -= this.turis < 0 || Stikline.pertekliausLikutis < this.turis) {
                    Stikline.pertekliausLikutis = 0;
                }
                else {
                    Stikline.pertekliausLikutis -= this.turis;

                }
                console.log('\n 9 If -- 0  skystis', 'Skystis: ', this.skystis, ' Turis: ', this.turis);

            }
            else {

                this.skystis = this.turis;
                console.log('\n Pripilti turis/skystis', this.turis, this.skystis);

                if (Stikline.pertekliausLikutis < this.turis) {
                    Stikline.pertekliausLikutis = 0;

                }
                else {
                    Stikline.pertekliausLikutis -= this.turis;

                }
                console.log('\n X0X0 backoje liko: ', Stikline.pertekliausLikutis);

            }

            // console.log('Backoje liko: \n ', Stikline.pertekliausLikutis);
            return Stikline.pertekliausLikutis;

        }
        else if (Stikline.pertekliausLikutis < 0) {
            this.skystis = 0;
            Stikline.pertekliausLikutis = 0;
            console.log('\n 3 If < 0  skystis', this.skystis);

        }

        else {
            console.log('\n 4 else last ', this.turis, ' kiekis', this.skystis);

        }

    }

    visoStiklineje = () => {

        console.log('\n Stiklines turis: ', this.turis, '\n Skyscio stiklineje: ', this.skystis);
    }

}

const stikline200 = new Stikline(200);
const stikline150 = new Stikline(150);
const stikline100 = new Stikline(100);



// stikline200.pripilti(875);
stikline150.pripilti(475);



// stikline100.pripilti(
//     stikline150.perpilti(
//         stikline200.perpilti()
//     )
// );

stikline100.pripilti(
    stikline150.perpilti()
);


console.log('\n');
stikline200.visoStiklineje()
stikline150.visoStiklineje()
stikline100.visoStiklineje()


console.log('\n');
console.log('Backoje liko ', Stikline.pertekliausLikutis)