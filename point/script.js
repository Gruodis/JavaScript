const btn = document.getElementById('button');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'black'];

function change() {
    const dada = document.body.style.background = rainbow[Math.floor(7 * Math.random())];
    console.log(dada)
}

btn.addEventListener('click', change);

const names = { uta: 'Alexa' }; // an object
console.log(names)
names.uta = 'Siri'; // change the value
console.log(names)

// Set the questions
const quiz = new Map([
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
]);

// initialize score
let score = 0;

for (const [question, answer] of quiz.entries()) {

    // get answer from user
    const response = prompt(question);
    // check if answer is correct
    if (response === answer) {
        alert('Correct!');
        // increase score by 1
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);