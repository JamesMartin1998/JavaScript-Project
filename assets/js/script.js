/** Once the DOM has loaded, an HTML collection of all buttons will be stored in a variable 'buttons'.
 *  The loop is used to check the data-type attribute of each button when clicked.
 *  If a weapon button is pressed, it will be stored in a variable. If the fight button is pressed, it will call the startGame function.
 */
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                startGame();
            }else{
                let weaponChoice = this.getAttribute("data-type");
                alert(`You selected ${weaponChoice}`)
                displayWeaponImage(weaponChoice);
            }
        })
    }
})

function startGame(){
    alert("You started the game");

}

/** Generates a random number between 1 and 5. Each number corresponds to a different weapon variable. */
function genComputerWeapon(){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    
    let computerWeapon;

    if (randomNumber === 1){
        computerWeapon = "rock";
    } else if (randomNumber === 2){
        computerWeapon = "paper";
    } else if (randomNumber === 3){
        computerWeapon = "scissors";
    } else if (randomNumber === 4){
        computerWeapon = "lizard";
    } else {
        computerWeapon = "spock";
    }
}

/** Will use conditions to calculate if the game is a player win, draw or computer win */
function calculateWinner(){
    let result;
    if (weaponChoice === "rock"){
        if (computerWeapon === "lizard" || "scissors"){
            result = "playerWin"
        } else if (computerWeapon === "rock"){
            result = "draw";
        } else {
            result = "computerWin"
        }
    } else if (weaponChoice === "scissors"){
        if (computerWeapon === "paper" || "lizard"){
            result === "playerWin";
        } else if (computerWeapon === "scissors"){
            result = "draw";
        } else {
            result = "computerWin";
        }
    } else if (weaponChoice === "paper"){
        if (computerWeapon === "rock" || "spock"){
            result = "playerWin";
        } else if (computerWeapon === "paper"){
            result = "draw";
        } else {
            result = "computerWin"
        }
    } else if (weaponChoice === "lizard"){
        if (computerWeapon === "spock" || "paper"){
            result = "playerWin";
        } else if (computerWeapon === "lizard"){
            result = "draw";
        } else {
            result = "computerWin"
        }
    } else {
        if (computerWeapon === "scissors" || "rock"){
            result = "playerWin";
        } else if (computerWeapon === "spock"){
            result = "draw";
        } else {
            result = "computerWin";
        }
    }
}

/** Will add an image element to the html to show an image of the weapon selected by the player */
function displayWeaponImage(weaponChoice){
    let playerWeaponDiv = document.getElementById("player-weapon-div");
    playerWeaponDiv.innerHTML = `
        <img src="/assets/images/${weaponChoice}.png" alt="${weaponChoice} image" width="auto" height="100%"></img>
    `;
}

