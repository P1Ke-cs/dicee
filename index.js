
var randomnum1 = Math.floor(Math.random() * 6) + 1;   // 1- 6

var randomimgsrc1 = "images/dice" + randomnum1 + ".png";   // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomimgsrc1); 



var randomnum2 = Math.floor(Math.random() * 6) + 1;

var randomimgsrc2 = "images/dice" + randomnum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimgsrc2);




if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "A win for Player 1 🚩";
}
else if (randomnum2 > randomnum1) {
    document.querySelector("h1").innerHTML = "A win for Player 2 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw! :("
}