var random_number = Math.floor(Math.random() * 6) + 1;
var random = "images/dice" + random_number + ".png";
document.querySelector(".img1").setAttribute("src", random);
var random_number2 = Math.floor(Math.random() * 6) + 1;
var random2 = "images/dice" + random_number2 + ".png";
document.querySelector(".img2").setAttribute("src", random2);
if (random_number > random_number2) {
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if (random_number < random_number2) {
    document.querySelector("h1").innerHTML="player 2 wins";
}
else {  
    document.querySelector("h1").innerHTML="tie";
}
