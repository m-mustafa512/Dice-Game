var randomNumber1 = Math.random(randomNumber1)
randomNumber1 = Math.floor((randomNumber1 * 6)+1);

var randomImage1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.random(randomNumber2)
randomNumber2 = Math.floor((randomNumber2 * 6)+1);

var randomImage2 = "./images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
    var result = document.querySelector("h1");
    result.innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    var result = document.querySelector("h1");
    result.innerHTML = "Player 2 Wins! 🚩";
}
else if (randomNumber1 === randomNumber2){
    var result = document.querySelector("h1");
    result.innerHTML = "Draw!";
}