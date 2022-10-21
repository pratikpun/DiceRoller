// 2 random number generators, + 1 to make value ranges from 1-6;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

var totalValue = randomNumber1 + randomNumber2;
// var totalValue = 12;

// set the dice images corresponding to the random value ganerated.
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomDiceImage);
var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomDiceImage2);

function result() {
  document.querySelectorAll("p")[0].innerHTML = "Dice 1 :";
  document.querySelectorAll("p")[1].innerHTML = "Dice 2 :";
  document.querySelector("h1").innerHTML = "Your value = " + totalValue;
  if (totalValue === 12) {
    document.querySelector("h1").innerHTML =
      "Your value = " + totalValue + " -  Roll again 🥳 ";
  }
}

result();
