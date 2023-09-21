//** add username from log in page to game page as player */

document.addEventListener("DOMContentLoaded", function() {
    alert("May the force be with you!");
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

    // Check if the selected option is correct
    if (clickedOption.innerText === correctAnswer) {
        console.log("That's Correct!");
    } else {
        console.log("You Failed!");
    }
}

//** */ add checker correct or incorrect and modify color
let checkButtons = document.querySelectorAll('[data-type="check-answer"]');

for (let i = 0; i < checkButtons.length; i++) {
    checkButtons[i].addEventListener('click', function() {
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
    });
}

// add score to scorebox
function incrementScore() {
    let oldscore = document.getElementById("correct").innerText;
    document.getElementById("correct").innerText = ++oldscore;
}

// add number of incorrect answers
function incrementIncorrect() {
    let oldscore = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++oldscore;
}















