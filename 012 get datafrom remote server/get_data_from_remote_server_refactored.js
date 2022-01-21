console.log('Page loaded');

const ulas = document.getElementById('ulas');




// create copy of fethed data for sorting
let arrayForSorting = [];


const render = () => {
    /*
****** clear list
*/

    ulas.innerHTML = '';
    /*
****** create list
*/
    arrayForSorting.forEach(user => {


        let createLi = document.createElement('li');
        // createLi.setAttribute("id", "show")
        createLi.classList.add('alert', 'list-group-item', 'custom');

        let userName = document.createTextNode("Name: " + user.name);
        let userPhone = document.createTextNode("email.: " + user.email);
        let span = document.createElement('h6');

        span.appendChild(userPhone);
        createLi.append(userName, span);

        ulas.appendChild(createLi);
    })


}

fetch('https://jsonplaceholder.typicode.com/users') // async script
    .then(response => response.json())
    .then(dataFromOutside => {


        arrayForSorting = dataFromOutside;

        console.log('SORTING ARRAY: ', arrayForSorting);


        render();
    })

// sort buttons
document.getElementById('asc').addEventListener('click', () => {

    /*
****** sort data by name ASC
*/

    arrayForSorting.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })
    /*
    ****** create list
    */
    render();


});

document.getElementById('desc').addEventListener('click', () => {

    /*
****** sort data by name DESC
*/

    arrayForSorting.sort(function (a, b) {
        if (a.name < b.name) { return 1; }
        if (a.name > b.name) { return -1; }
        return 0;
    })
    /*
    ****** create list
    */
    render();
});


document.getElementById('submitNewUser').addEventListener('click', () => {

    arrayForSorting.unshift({
        id: arrayForSorting.length + 1,
        name: document.getElementById('newUserName').value,
        email: document.getElementById('newUserEmail').value
    });

    document.getElementById('newUserName').value = '';
    document.getElementById('newUserEmail').value = '';

    arrayForSorting.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })

    render();


    // console.log('add new: ', newUserName, newUserEmail);

    console.log('ARRAY update : ', arrayForSorting);

})

