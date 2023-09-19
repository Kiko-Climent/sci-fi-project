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
