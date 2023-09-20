//** add username from log in page to game page as player */

document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
    let userName = params.get('username');

    if (userName) {
        let playerElements = document.getElementsByClassName("player");
        let playerElement = playerElements[0];
        playerElement.textContent = `Player: ${userName}`;
    }

    let gameForm = document.getElementById("gameForm");

    gameForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // get username
        let userName = document.getElementById("user-name").value;

        // go to game page
        window.location.href = `game.html?username=${userName}`;
    });
});

//** mark selected option */
let selectedOption = null;

function selectAnswer(correctAnswer) {
    let clickedOption = event.target;

    if (selectedOption !== null) {
        selectedOption.classList.remove('selected');
    }

    clickedOption.classList.add('selected');
    selectedOption = clickedOption;

    // Check if the selected is correct
    if (clickedOption.innerText === correctAnswer) {
        console.log("That's Correct!");
    } else {
        console.log("You Failed!");
    }
}

//** */ add checker coorect or incorrect and modify color
// Añade el código para verificar las respuestas al hacer clic en el botón "Check"
let checkButtons = document.querySelectorAll('[data-type="check-answer"]');

for (let i = 0; i < checkButtons.length; i++) {
    checkButtons[i].addEventListener('click', function() {
        let quiz = this.parentElement;
        let correctAnswer = quiz.querySelector('.answer-option.correct');
        let selectedAnswer = quiz.querySelector('.answer-option.selected');

        if (!selectedAnswer) return;

        if (selectedAnswer === correctAnswer) {
            selectedAnswer.classList.remove('selected');
            selectedAnswer.classList.add('correct');
        } else {
            selectedAnswer.classList.remove('selected');
            selectedAnswer.classList.add('incorrect');
            correctAnswer.classList.add('correct');
        }
    });
}

















