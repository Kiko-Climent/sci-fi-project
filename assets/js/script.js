// execute this code once DOM is charged in the document
document.addEventListener("DOMContentLoaded", function () {
    // get username from URL
    let params = new URLSearchParams(window.location.search);
    let userName = params.get('username');
    // add welcome alert
    if (window.location.href.includes("game.html") && userName) {
        alert("MAY THE FORCE BE WITH YOU");
    }
    /* custom alert */

    // once we have the username
    if (userName) {
        // select elements with class "player"
        let playerElements = document.getElementsByClassName("player");
        let playerElementScoreBox = playerElements[0];
        let playerElementResultBox = playerElements[1];
        // get username content and set it as player in gamepage both in Scorebox and Resultbox
        playerElementScoreBox.textContent = `Player: ${userName}`;
        playerElementResultBox.textContent = `Player: ${userName}`;
    }
    let gameForm = document.getElementById("gameForm");
    // add event once we submit
    gameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // get username
        let userName = document.getElementById("user-name").value;
        // bring username to URL
        window.location.href = `game.html?username=${userName}`;
    });
    // add function to see next question only when the one before is answered
    let currentQuestion = 1;
    // hide questions
    for (let i = 2; i <= 10; i++) {
        document.getElementById(`question${i}`).style.display = "none";
    }
});


// add variable to count the amount of correct answers
let selectedOptions = 0;
// mark selected option
let selectedOption = null;


function selectAnswer(correctAnswer) {
    let clickedOption = event.target;

// Si no se ha seleccionado ninguna respuesta, mostrar una alerta
if (!clickedOption.classList.contains('selected')) {
    alert("Please select an answer before checking.");
    return;
}


    // If user has already one marked, unmarked the other
    if (selectedOption !== null) {
        selectedOption.classList.remove('selected');
    }

    clickedOption.classList.add('selected');
    selectedOption = clickedOption;

    // Check if the selected option is correct in console
    if (clickedOption.innerText === correctAnswer) {
        console.log("That's Correct!");
    } else {
        console.log("You Failed!");
    }
}

//** */ add checker correct or incorrect and modify color
let checkButtons = document.querySelectorAll('[data-type="check-answer"]');

// add click event to each check button
for (let i = 0; i < checkButtons.length; i++) {
    checkButtons[i].addEventListener('click', function () {
        let quiz = this.parentElement;
        // make correct answer light green once it's checked
        let correctAnswer = quiz.querySelector('.answer-option[data-correct="true"]');
        let selectedAnswer = quiz.querySelector('.answer-option.selected');

        if (!selectedAnswer) return;

        if (selectedAnswer === correctAnswer) {
            selectedAnswer.classList.remove('selected');
            selectedAnswer.classList.add('correct');
            // increment score in scorebox
            incrementScore();
        } else {
            selectedAnswer.classList.remove('selected');
            selectedAnswer.classList.add('incorrect');
            // increment incorrect score
            incrementIncorrect()
            correctAnswer.classList.add('correct');
        }
        let nextButtons = document.querySelectorAll('.next-button');

        nextButtons.forEach(function (button) {
            button.disabled = false;
        });
    });
}

// add score to scorebox
function incrementScore() {
    let oldscore = document.getElementById("correct").innerText;
    document.getElementById("correct").innerText = ++oldscore;

    // increment the counter of correct answers
    selectedOptions++;
}

// add number of incorrect answers
function incrementIncorrect() {
    let oldscore = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++oldscore;
}


// final result box
function showFinalResult() {

    let finalResultElement = document.querySelector('.final-result');

    if (selectedOptions === 10) {
        finalResultElement.textContent = 'Your result: You are a master in Sci-Fi';
    } else if (selectedOptions >= 5 && selectedOptions <= 9) {
        finalResultElement.textContent = 'Your result: You know a lot about Sci-Fi';
    } else if (selectedOptions < 5 && selectedOptions > 0) {
        finalResultElement.textContent = 'Your result: You should watch more Sci-Fi dude.';
    } else if (selectedOptions === 0) {
        finalResultElement.textContent = 'Your result: Definitely Sci-Fi is not for you.';
    }
    // show final result only when last question has been answered 
    let resultBox = document.querySelector('.result-box');
    resultBox.style.display = 'block';

    let finalButton = document.getElementById("finalButton");
    finalButton.classList.add('show');
}
// show question only after previous one is answered
function next(questionNumber) {
    let questions = document.querySelectorAll('.quiz');

    questions.forEach(function (element) {
        element.classList.remove('show');
    });

    let questionShowing = document.getElementById(questionNumber);
    questionShowing.classList.add('show');

    let nextButtons = document.querySelectorAll('.next-button');

    nextButtons.forEach(function (button) {
        button.disabled = true;
    });
}