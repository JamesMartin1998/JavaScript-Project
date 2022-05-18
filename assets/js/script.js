/** Once the DOM has loaded, an HTML collection of all buttons will be stored in a variable 'buttons'.
 *  The loop is used to check the data-type attribute of each button when clicked.
 *  If a weapon button is pressed, it will be stored in a variable. If the fight button is pressed, it will call the startGame function.
 */

let weaponChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let gamesRemaining = 5;
let overallWinner;


/* Event listener code from https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form */
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                if (weaponChoice === undefined) {
                    alert("You must choose a weapon before fighting")
                } else {
                    startGame();
                }
            } else if (this.getAttribute("data-type") === "close") {
                closePopUp();
                resetGame();
            } else if (this.getAttribute("data-type") === "reset") {
                resetGame();
            } else {
                weaponChoice = this.getAttribute("data-type");
                displayWeaponImage(weaponChoice);
                removeComputerImage();
                clearWinnerMessage();
            }
        })
    }
})

function startGame() {
    genComputerWeapon();
    displayComputerImage(computerWeapon);
    calculateWinner();
    console.log(result);
    winnerMessage();
    incrementScore();
    gamesRemaining--;
    updateGamesRemaining();
    if (gamesRemaining === 0) {
        calculateTotalWinner();
        popUp();
        mostWinsMessage();

    }
}

let computerWeapon;

/** Generates a random number between 1 and 5. Each number corresponds to a different weapon variable. */
function genComputerWeapon() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerWeapon = "rock";
    } else if (randomNumber === 2) {
        computerWeapon = "paper";
    } else if (randomNumber === 3) {
        computerWeapon = "scissors";
    } else if (randomNumber === 4) {
        computerWeapon = "lizard";
    } else {
        computerWeapon = "spock";
    }

    console.log(computerWeapon);
}

/** Will use conditions to calculate if the game is a player win, draw or computer win */
function calculateWinner() {
    if (weaponChoice === "rock") {
        if (computerWeapon === "lizard" || computerWeapon === "scissors") {
            result = "playerWin"
        } else if (computerWeapon === "rock") {
            result = "draw";
        } else {
            result = "computerWin"
        }
    } else if (weaponChoice === "scissors") {
        if (computerWeapon === "paper" || computerWeapon === "lizard") {
            result = "playerWin";
        } else if (computerWeapon === "scissors") {
            result = "draw";
        } else {
            result = "computerWin";
        }
    } else if (weaponChoice === "paper") {
        if (computerWeapon === "rock" || computerWeapon === "spock") {
            result = "playerWin";
        } else if (computerWeapon === "paper") {
            result = "draw";
        } else {
            result = "computerWin"
        }
    } else if (weaponChoice === "lizard") {
        if (computerWeapon === "spock" || computerWeapon === "paper") {
            result = "playerWin";
        } else if (computerWeapon === "lizard") {
            result = "draw";
        } else {
            result = "computerWin"
        }
    } else {
        if (computerWeapon === "scissors" || computerWeapon === "rock") {
            result = "playerWin";
        } else if (computerWeapon === "spock") {
            result = "draw";
        } else {
            result = "computerWin";
        }
    }
}

/** Will add an image element to the html to show an image of the weapon selected by the player */
function displayWeaponImage(weaponChoice) {
    let playerWeaponDiv = document.getElementById("player-weapon-div");
    playerWeaponDiv.innerHTML = `
        <img src="/assets/images/${weaponChoice}.png" alt="${weaponChoice} image" width="55%" height="auto"></img>
    `;
}

/** Will add an image element to the html to show an image of the weapon selected by the computer */
function displayComputerImage(computerWeapon) {
    let computerWeaponDiv = document.getElementById("computer-weapon-div");
    computerWeaponDiv.innerHTML = `
        <img src="/assets/images/${computerWeapon}.png" alt="${computerWeapon} image" width="55%" height="auto"></img>
    `;
}

/** Removes the player weapon image */
function removePlayerImage(){
    let playerWeaponDiv = document.getElementById("player-weapon-div");
    playerWeaponDiv.innerHTML = "";
}

/** Removes the computer weapon image */
function removeComputerImage() {
    let computerWeaponDiv = document.getElementById("computer-weapon-div");
    computerWeaponDiv.innerHTML = "";
}


/** Gets the span and changes the text content to show the game winner */
function winnerMessage() {
    let winnerMessage = document.getElementById("winner-message");
    let winnerMessageMobile = document.getElementById("winner-message-mobile");
    if (result === "playerWin") {
        winnerMessage.textContent = "Player wins";
        winnerMessageMobile.textContent = "Player wins";
    } else if (result === "computerWin") {
        winnerMessage.textContent = "Computer wins";
        winnerMessageMobile.textContent = "Computer wins";
    } else {
        winnerMessage.textContent = "Draw";
        winnerMessageMobile.textContent = "Draw";
    }
}

/** Clears the winner message */
function clearWinnerMessage() {
    let winnerMessage = document.getElementById("winner-message");
    winnerMessage.textContent = "";
    let winnerMessageMobile = document.getElementById("winner-message-mobile");
    winnerMessageMobile.textContent = "";
}

/** Increments the score for either the player or the computer, depending on the result. */
function incrementScore() {
    if (result === "playerWin") {
        playerScore++;
        let playerScoreLabel = document.getElementById("player-score");
        playerScoreLabel.textContent = `Player Score: ${playerScore}`;
    } else if (result === "computerWin") {
        computerScore++;
        let computerScoreLabel = document.getElementById("computer-score");
        computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
    } else {
        console.log("Game was a draw");
    }
}

/** Changes the text content of the games-remaining div. */
function updateGamesRemaining() {
    let gamesRemainingHtml = document.getElementById("games-remaining");
    gamesRemainingHtml.textContent = `Games Remaining: ${gamesRemaining}`;
    let gamesRemainingHtmlMobile = document.getElementById("games-remaining-mobile");
    gamesRemainingHtmlMobile.textContent = `Games Remaining: ${gamesRemaining}`;
}

/** Calculates who wins the most games and assigns the result to overallWinner variable */
function calculateTotalWinner() {
    if (playerScore > computerScore) {
        overallWinner = "player";
    } else if (computerScore > playerScore) {
        overallWinner = "computer";
    } else {
        console.log("It's a draw");
    }
}

/** Will cause a pop up to appear by changing the section display from none to block */
function popUp() {
    let popUp = document.getElementById("pop-up");
    popUp.style.display = "flex";
}

/** Closes the pop up */
function closePopUp() {
    let popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
}

/** Changes the overall-winner HTML to declare who won the most games. */
function mostWinsMessage() {
    let overallMessage = document.getElementById("overall-winner");
    if (overallWinner === "player" || overallWinner === "computer") {
        overallMessage.textContent = `${overallWinner} wins overall!`;
        overallMessage.style.textTransform = "capitalize";
    } else {
        overallMessage.textContent = `It's A Draw!`;
    }
}

function resetGame() {
    gamesRemaining = 5;
    playerScore = 0;
    computerScore = 0;
    let playerScoreLabel = document.getElementById("player-score");
    playerScoreLabel.textContent = `Player Score: ${playerScore}`;
    let computerScoreLabel = document.getElementById("computer-score");
    computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
    updateGamesRemaining();
    clearWinnerMessage();
    removeComputerImage();
    removePlayerImage();
}