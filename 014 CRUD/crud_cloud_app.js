/******************
 * 
 *  App content
 * 
 *  id = unique id for cloud
 *  name = cloud name
 *  type = cloud type:
*                     Kamuoliniai
*                     Plunksniniai
*                     Liutiniai
*                     Sluoksniniai
 *  radius = cloud radius;
 * 
 * */


//sukuriame klases

class ConstructDebesis {

    constructor(id, name, type, radius) { // perduodame kintamuosius i salyga
        this.id = parseInt(id);
        this.name = name;
        this.radius = radius;

        // debesu tipui priskirti naudojame switch salyga
        switch (parseInt(type)) {
            case 1: this.type = 'Kamuoliniai';
                break;
            case 2: this.type = 'Plunksniniai';
                break;

            case 3: this.type = 'Liutiniai';
                break;

            case 4: this.type = 'Sluoksniniai';
                break;

            default: this.type = 'Nezinomas tipas'

        }

    }
}

// bendravimas su localStorage

class Connect2LocalDB {

    constructor() {

        this.dataStorage = []; // laikome visa info apie debesis

        let tempData; // kailinas kitamasis atsisiustiems/sukurtiems duomenims saugoti

        // atsisiunciame duomenis is localStorage
        tempData = localStorage.getItem('debesuRegistras');

        // 1 !!! tikriname ar localStorage jau buvo irasyti kazkokie duomenys !!!
        if (null === tempData) { // jeigu duomenu neradome ar jie sugadinti
            tempData = JSON.stringify([]) // priskiriame tuscia masyva, kad veliau i ji galetume kelti duomenis
            localStorage.setItem('debesuRegistras', tempData)

        }
        // !!! jeigu jungemes prie LocalStorage pirma karta ir registre turime NULL,
        // tai 1-mame zingsnyje, sukureme tuscia masyva, kuri toliau naudosime duomenims saugoti

        // 2 !!! konvertuojame localStorage duomenis JSON.parse !!!
        tempData = JSON.parse(tempData); // konvertuojam string duomenys i javascript

        // 3 !!! kiekvienam debesiui esanciam registre, kuriame objekta naudodami klase ConstructDebesis ir dedame ji i dataStorage masyva

        tempData.forEach(item => {

            const debesis = new ConstructDebesis(
                item.id,
                item.name,
                item.type,
                item.radius,

                // console.log('tempData', debesis)

            );
            this.dataStorage.push(debesis);

        })
    }

    // kuriame metoda id generavimui
    // !!! kiekviena karta turime sugeneruoti anksciau NEnaudota id !!!
    getLastUsedID = () => {

        let idTemp; //laikinas kitamasis atsisustiems id is localStorage

        //!!!!!!! atsisiunciant/irasant duomenis JSON.parse / JSON.stringify nereikia naudoti, kai kintamasis yra NUMBER 

        idTemp = localStorage.getItem('debesuRegistrasID'); // atsisiunciame duomenis
        if (null === idTemp) { // jeigu duomenu apie id neradome ar jie sugadinti, kintamajam id priskiriam 0
            idTemp = 0;
        }

        idTemp = parseInt(idTemp); // isitikiname, kad gautas is localStorage kintamasis yra sveikasis skaicius

        idTemp++;
        localStorage.setItem('debesuRegistrasID', idTemp) // irasome sugeneruota id i localStorage

        return idTemp;

        const idKeep = id; // issaugome turima id, kuri veliau naudosime naujo id generavimui


    }

    saveData2DB = () => { // SAVE
        const cloudsUpdateLocalStorage = [];
        // invertinam tipo priskirima debesiui
        this.dataStorage.forEach(item => {
            let type;
            switch (item.type) {
                case 'Kamuoliniai': type = 1;
                    break;

                case 'Plunksniniai': type = 2;
                    break;

                case 'Liutiniai': type = 3;
                    break;

                case 'Sluoksniniai': type = 4;
                    break;

                default: type = 0 // nezinomas tipas = 0
            }

            const newCloud = {
                id: item.id,
                name: item.name,
                type: type, // auksciau invertintas debesies tipas
                radius: item.radius
            }
            cloudsUpdateLocalStorage.push(newCloud)

        });
        localStorage.setItem('debesuRegistras', JSON.stringify(cloudsUpdateLocalStorage)) // irasome nauja debesi i localStorage
        console.log('datastorage', this.dataStorage, 'SAVE', cloudsUpdateLocalStorage)
    }

    createNewObj = (name, type, radius) => {
        console.log(`Var`, name, type, radius)

        const newCloud = new ConstructDebesis( //naudojame konstruktoriu
            this.getLastUsedID(), // irasome nauja debesies id
            name,
            type,
            radius
        );
        console.log(`New cloud`, newCloud)

        this.dataStorage.push(newCloud) //
        this.saveData2DB() //  SAVE supusinam nauja debesi i localStorage panaudodami metoda

    }
}

class DebesuApp {
    static datas;
    static startApp = () => {
        this.datas = new Connect2LocalDB(); // kreipaimes i localStorage per auksciau sukurta metoda
        this.renderHTML(); // sugeneruojam HTML turini
        document.getElementById('idetiNauja').addEventListener('click', () => this.buttonGo());

        console.log("", this.datas)

    } // start app


    static buttonGo = () => {

        const newCloud = document.getElementById('newCloud');

        this.datas.createNewObj( // naudojam data ir metoda update..
            newCloud.querySelector('[name=name]').value,
            newCloud.querySelector('[name=type]').value,
            newCloud.querySelector('[name=radius]').value,
        );
        console.log(
            newCloud.querySelector('[name=name]').value,
            newCloud.querySelector('[name=type]').value,
            newCloud.querySelector('[name=radius]').value,
        )

        newCloud.querySelector('[name=name]').value = '';
        newCloud.querySelector('[name=type]').value = '0';
        newCloud.querySelector('[name=radius]').value = '';

        this.renderHTML(); // upadatinam puslapio duomenis po submito
    }

    static renderHTML = () => {
        const debesuListas = document.getElementById('debesuList');
        debesuListas.innerHTML = ''; // istrinam viska is HTML pries ikeldami duomenis

        this.datas.dataStorage.forEach(item => {

            const html = `
            <h3>#<i>${item.id}</i> - ${item.name}</h3>
            <small>${item.radius}m<sup>2</sup></small>
            <i>${item.type}</i>
            `;
            const div = document.createElement('div');
            div.innerHTML = html;
            debesuListas.append(div)

        })
    } // renderHTML
}

DebesuApp.startApp();