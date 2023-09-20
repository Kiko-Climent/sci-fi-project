//** add username form form page to game page as player */

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

//** mark selected option and check if correct */
let selectedOption = null;

function selectAnswer(correctAnswer) {
    let clickedOption = event.target;

    if (selectedOption !== null) {
        selectedOption.classList.remove('selected');
    }

    clickedOption.classList.add('selected');
    selectedOption = clickedOption;

    // Verificar si la respuesta seleccionada es correcta
    if (clickedOption.innerText === correctAnswer) {
        console.log("That's Correct!");
    } else {
        console.log("You Fail!");
    }
}







