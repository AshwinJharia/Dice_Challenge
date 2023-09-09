function randomNo() {
  var no = Math.floor(Math.random() * 6) + 1;
  return no;
}
var dice1 = randomNo();
var dice2 = randomNo();
if (dice1 > dice2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Won";
} else if (dice1 < dice2) {
  document.querySelector("h1").innerText = "Player 2 Won 🚩";
} else {
  document.querySelector("h1").innerText = "It's a Draw!";
}

var d1 = "images/dice" + dice1 + ".png"; //html and css ka part in double quotes
document.querySelector("img.img1").setAttribute("src", d1); //d1 variable js ka part, so not in double quotes
var d2 = "images/dice" + dice2 + ".png"; //html and css ka part in double quotes
document.querySelector("img.img2").setAttribute("src", d2); //d1 variable js ka part, so not in double quotes
