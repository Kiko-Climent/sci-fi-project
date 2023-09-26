// Execute this code once the DOM is loaded in the document
document.addEventListener("DOMContentLoaded", function () {

    // Get Username from URL
    let params = new URLSearchParams(window.location.search);
    let userName = params.get('username');

    // Add a welcome alert
    if (window.location.href.includes("game.html") && userName) {
        customAlert(`Welcome ${userName}, Good Luck!`);
    }

    // Once we have the username
    if (userName) {

        // Select elements with class "player"
        let playerElements = document.getElementsByClassName("player");
        let playerElementScoreBox = playerElements[0];
        let playerElementResultBox = playerElements[1];

        // Get username content and set it as player in game page both in Scorebox and Resultbox
        playerElementScoreBox.textContent = `Player: ${userName}`;
        playerElementResultBox.textContent = `Player: ${userName}`;
    }

    // Get the game form and add an event on submit
    let gameForm = document.getElementById("gameForm");
    gameForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get username
        let userName = document.getElementById("user-name").value;

        // Bring username to URL
        window.location.href = `game.html?username=${userName}`;
    });

    // Add function to see the next question only when the previous one is answered
    let currentQuestion = 1;

    // Hide questions
    for (let i = 2; i <= 10; i++) {
        document.getElementById(`question${i}`).style.display = "none";
    }
});

// Custom Welcome Alert
function customAlert(message, color) {
    let alertContainer = document.createElement("div");
    alertContainer.style.position = "fixed";
    alertContainer.style.top = "50%";
    alertContainer.style.left = "50%";
    alertContainer.style.transform = "translate(-50%, -50%)";
    alertContainer.style.padding = "10px 20px";
    alertContainer.style.backgroundColor = " rgba(255, 255, 255, 0.7)";
    alertContainer.style.color = "black";
    alertContainer.style.fontSize = "Medium";
    alertContainer.style.borderRadius = "5px";
    alertContainer.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    alertContainer.textContent = message;

    document.body.appendChild(alertContainer);

    // Desaparecer la alerta después de 3 segundos
    setTimeout(function () {
        alertContainer.style.opacity = "0";
        setTimeout(function () {
            alertContainer.remove();
        }, 1000);
    }, 3000);
}



// Add variable to count the amount of correct answers
let selectedOptions = 0;

// Mark selected option
let selectedOption = null;

function selectAnswer(correctAnswer) {
    let clickedOption = event.target;

    // If the user has already selected one, unmark the other
    if (selectedOption !== null) {
        selectedOption.classList.remove('selected');
    }

    clickedOption.classList.add('selected');
    selectedOption = clickedOption;

    // Check if selected option is the correct one in the console
    if (clickedOption.innerText === correctAnswer) {
        console.log("¡Correcto!");
    } else {
        console.log("¡Fallaste!");
    }
}

// Add checker for correct or incorrect answer and modify color
let checkButtons = document.querySelectorAll('[data-type="check-answer"]');

// Add click event to each check button
for (let i = 0; i < checkButtons.length; i++) {
    checkButtons[i].addEventListener('click', function () {
        let quiz = this.parentElement;

        // Make the correct answer light green once it's checked
        let correctAnswer = quiz.querySelector('.answer-option[data-correct="true"]');
        let selectedAnswer = quiz.querySelector('.answer-option.selected');

        if (!selectedAnswer) return;

        if (selectedAnswer === correctAnswer) {
            selectedAnswer.classList.remove('selected');
            selectedAnswer.classList.add('correct');

            // Increment score in scorebox
            incrementScore();
        } else {
            selectedAnswer.classList.remove('selected');
            selectedAnswer.classList.add('incorrect');

            // Increment incorrect score
            incrementIncorrect();
            correctAnswer.classList.add('correct');
        }

        let nextButtons = document.querySelectorAll('.next-button');

        nextButtons.forEach(function (button) {
            button.disabled = false;
        });
    });
}

// Add score to scorebox
function incrementScore() {
    let oldscore = document.getElementById("correct").innerText;
    document.getElementById("correct").innerText = ++oldscore;

    // Increment the counter of correct answers
    selectedOptions++;
}

// Add number of incorrect answers
function incrementIncorrect() {
    let oldscore = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++oldscore;
}

// Final result box
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

    // Show the final result only when the last question has been answered
    let resultBox = document.querySelector('.result-box');
    resultBox.style.display = 'block';

    let finalButton = document.getElementById("finalButton");
    finalButton.classList.add('show');
}

// Show the next question only after the previous one has been answered
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
