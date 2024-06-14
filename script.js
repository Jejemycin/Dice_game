var image = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];

var imageIndex1 = Math.floor(Math.random() * image.length);
var image1 = document.querySelector(".img1");
image1.src = image[imageIndex1];


var imageIndex2 = Math.floor(Math.random() * image.length);
var image2 = document.querySelector(".img2");
image2.src = image[imageIndex2];


function whoWon(){
    if (imageIndex1 > imageIndex2){
        return("player 1 won")
    }
    else if (imageIndex1 == imageIndex2){
        return ("Deuce")
    }
    else {
        return ("Player 2 won")
    };
}

var solution = whoWon();
document.querySelector('h1').innerHTML = solution;