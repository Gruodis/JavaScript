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

        let tempData; // kailinas DATA kitamasis atsisiustiems/sukurtiems duomenims saugoti

        // atsisiunciame duomenis is localStorage
        tempData = localStorage.getItem('debesuRegistras');

        console.log('tempData', tempData);


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
        const updateRemoteStorage = [];
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
            updateRemoteStorage.push(newCloud)

        });
        localStorage.setItem('debesuRegistras', JSON.stringify(updateRemoteStorage)) // irasome nauja debesi i localStorage
        console.log('datastorage', this.dataStorage, 'SAVE', updateRemoteStorage)
    }

    // Naujas debesis
    createNewDebesis = (name, type, radius) => {
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

    delete = id => {
        id = parseInt(id);
        let index;
        this.dataStorage.forEach((c, i) => {
            if (c.id === id) {
                index = i;
            }
        });
        this.dataStorage.splice(index, 1);
        this.saveData2DB();
    }

    // Redagavimas
    edit = (id, name, type, radius) => {
        const cloud = new ConstructDebesis(
            id,
            name,
            type,
            radius
        );
        let index;
        this.dataStorage.forEach((debesis, elementas) => {
            if (debesis.id === id) {
                index = elementas;

                console.log('Edit', debesis.id, elementas)
            }
        });
        this.dataStorage[index] = cloud;
        this.saveData2DB();
    }
}

class DebesuApp {
    static datas;
    static startApp = () => {
        this.datas = new Connect2LocalDB(); // kreipaimes i localStorage per auksciau sukurta metoda
        this.renderHTML(); // sugeneruojam HTML turini
        // paspaudus mygtukapaleidziam duomenu issaugojimo funkcija
        document.getElementById('idetiNauja').addEventListener('click', () => this.buttonGo());
        // document.querySelector('.redaguoti').addEventListener('click', () => this.edit());


        console.log("", this.datas)

    } // start app


    static buttonGo = () => {
// randame div'a kuriame generuosime HTML turini
        const newCloud = document.getElementById('newCloud');

        this.datas.createNewDebesis( // naudojam data ir metoda update..
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

    static delete = e => {
        this.datas.delete(e.target.dataset.id);
        this.renderHTML();
    }


    static edit = () => {
        const modal = documentgetElementById('modal');
        this.dataStorage.edit(
            parseInt(modal.dataset.id),
            modal.documentgetElementById('name').value,
            modal.documentgetElementById('type').value,
            modal.documentgetElementById('radius').value
        )
        // this.hideModal();
        this.renderHTML();
    }
    static showModal = e => {
        const modal = document.getElementById('modal');
        // modal.style.display = null;
        const id = parseInt(e.target.dataset.id);
        modal.dataset.id = id;
        const cloud = this.datas.dataStorage.filter(c => c.id === id)[0];
        let type;
        switch (cloud.type) {
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
        // modal.querySelector('[name=name]').value = cloud.name;
        // modal.querySelector('[name=type]').value = type;
        // modal.querySelector('[name=radius]').value = cloud.radius;
        document.getElementById('name').value = cloud.name,
            document.getElementById('type').value = type,
            document.getElementById('radius').value = cloud.radius
        console.log('NEINA', cloud.name, type, cloud.radius,
            modal)

    }

    static renderHTML = () => {
        const debesuListas = document.getElementById('debesuList');
        debesuListas.innerHTML = ''; // istrinam viska is HTML pries ikeldami duomenis

        this.datas.dataStorage.forEach(item => {

            const html = `
            <h3>#<i>${item.id}</i> - ${item.name}</h3>
            <small>${item.radius}m<sup>2</sup></small>
            <i>${item.type}</i>
            <button data-id="${item.id}" class="del">Trinti</button>
            <button data-id="${item.id}" class="redaguoti">Redaguoti</button>
            `;
            const div = document.createElement('div');
            div.setAttribute("id", item.id);
            // div.classList.add('redaguoti');
            div.innerHTML = html;
            debesuListas.append(div)

        }
        )


        document.querySelectorAll('button.del').forEach(b => {
            b.addEventListener('click', e => {
                this.delete(e);
            })
        });

        // const editItemOut = document.querySelectorAll("redaguoti").addEventListener("mouseout",


        // editItemOut.forEach(item => {
        //     item.style.color = "blue";

        // }
        // )
        // );

        // document.querySelectorAll('redaguoti').addEventListener("mouseover", mouseOver);
        // document.querySelectorAll('redaguoti').addEventListener("mouseout", mouseOut);


        // function mouseOver() {
        //     document.getElementById('debesuList').style.color = "red";
        // }

        // function mouseOut() {
        //     document.getElementById('debesuList').style.color = "black";
        // }
        //let editItem = document.querySelectorAll('.redaguoti');

        //console.log('RED XXX', editItem)

        document.querySelectorAll('.redaguoti').forEach(b => {
            b.addEventListener('click', e => {
                this.showModal(e);
            })
        })
    } // renderHTML





}




DebesuApp.startApp();