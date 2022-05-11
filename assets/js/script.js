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
                let WeaponChoice = this.getAttribute("data-type");
                alert(`You selected ${WeaponChoice}`)
            }
        })
    }
})

function startGame(){
    alert("You started the game")
}