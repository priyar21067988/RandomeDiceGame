function RandomNumber() {
  var randomNum = Math.random();
  randomNum = randomNum * 6;
  randomNum = Math.floor(randomNum) + 1;
  return randomNum;
}



var randomediceImage = "dice" + RandomNumber() + ".png";
var randomediceImageSrc = "images/" + randomediceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomediceImageSrc);

function RandomNumber2(){
    var randomNum2 = Math.floor(Math.random()*6)+1;
    return randomNum2;
}
var randomdiceImg2 = "images/dice" + RandomNumber2() + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomdiceImg2);


if (RandomNumber() > RandomNumber2()){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (RandomNumber2() > RandomNumber()) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} 
else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}