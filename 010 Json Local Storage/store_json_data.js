let classBody = document.querySelector('.body');


let spalva = localStorage.getItem('spalva');

if (spalva === null) {

    spalva = [];
    // localStorage.setItem('Spalva', JSON.stringify([]));
}
else {
    spalva = JSON.parse(spalva)
}

const newSpalva = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

spalva.push(newSpalva);

localStorage.setItem('spalva', JSON.stringify(spalva));


spalva.forEach(spalva => {
    let newBallGo = document.createElement('div');
    let text = document.createTextNode(``);
    newBallGo.appendChild(text);
    newBallGo.classList.add("apskritimas");
    newBallGo.style.backgroundColor = spalva;

    classBody.appendChild(newBallGo);
})

console.log(spalva)