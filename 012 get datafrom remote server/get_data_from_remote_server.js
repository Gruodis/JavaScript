console.log('Page loaded');

let ulas = document.getElementById('ulas');

// create copy of fethed data for sorting
let arrayForSorting = [];

// sort buttons
document.getElementById('asc').addEventListener('click', () => {
    /*
    ****** clear list
    */

    ulas.innerHTML = '';

    /*
****** sort data by name
*/

    arrayForSorting.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })
    /*
    ****** create list
    */
    arrayForSorting.forEach(user => {


        let createLi = document.createElement('li');
        // createLi.setAttribute("id", "show")
        createLi.classList.add('alert', 'list-group-item', 'custom');

        let userName = document.createTextNode("Name: " + user.name);
        let userPhone = document.createTextNode("PHONE: " + user.phone);
        let span = document.createElement('h6');

        span.appendChild(userPhone);
        createLi.append(userName, span);




        ulas.appendChild(createLi);
    })


});

document.getElementById('desc').addEventListener('click', () => {
    /*
****** clear list
*/

    ulas.innerHTML = '';
    /*
****** sort data by name
*/

    arrayForSorting.sort(function (a, b) {
        if (a.name < b.name) { return 1; }
        if (a.name > b.name) { return -1; }
        return 0;
    })
    /*
    ****** create list
    */
    arrayForSorting.forEach(user => {


        let createLi = document.createElement('li');
        // createLi.setAttribute("id", "show")
        createLi.classList.add('alert', 'list-group-item', 'custom');

        let userName = document.createTextNode("Name: " + user.name);
        let userPhone = document.createTextNode("PHONE: " + user.phone);
        let span = document.createElement('h6');

        span.appendChild(userPhone);
        createLi.append(userName, span);




        ulas.appendChild(createLi);
    })
});




/*
****** fetch data from remote server
*/

fetch('https://jsonplaceholder.typicode.com/users') // async script
    .then(response => response.json())
    .then(dataFromOutside => {


        arrayForSorting = dataFromOutside;



        dataFromOutside.forEach(user => {


            let createLi = document.createElement('li');
            // createLi.setAttribute("id", "show")
            createLi.classList.add('alert', 'list-group-item', 'custom');

            let userName = document.createTextNode("Name: " + user.name);
            let userPhone = document.createTextNode("PHONE: " + user.phone);
            let span = document.createElement('h6');

            span.appendChild(userPhone);
            createLi.append(userName, span);




            ulas.appendChild(createLi);
        })



        console.log(dataFromOutside)
    }
    )