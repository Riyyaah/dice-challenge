var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var number = "dice" + randomNumber1 + ".png";
var randomDice = "images/" + number;
document.querySelector(".img1").setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var number = "dice" + randomNumber2 + ".png";
var randomDice2 = "images/" + number;
document.querySelector(".img2").setAttribute("src", randomDice2);

function whoWon () {
    if (randomNumber1 > randomNumber2) {
        return "Player 1 wins";
    } else if (randomNumber1 === randomNumber2) {
        return "It is a draw!";
    } else {
        return "Player 2 wins"
    }
}

document.querySelector("h1").innerHTML = whoWon ();


// document.querySelectorAll("img1")[0].innerHTML = (randomDice);

// var randomArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
// var randomNumber1 = Math.floor(Math.random() * randomArray);

// document.querySelector(".img1").setAttribute("src", randomDice);