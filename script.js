//Generating Random numbers: 1-6 
var randomNum = Math.floor(Math.random()*6)+1; 

var ranImage = "dice"+randomNum+".png";

var ranImageSource = "images/"+ranImage;


//selecting first image using queryselectorAll[0]
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", ranImageSource);


//selecting second image using queryselectorAll[1]
var randomNum1 = Math.floor(Math.random()*6)+1; 

var ranImage1 = "dice"+randomNum1+".png";

var ranImageSource1 = "images/"+ranImage1;

var img2 = document.querySelectorAll("img")[1].setAttribute("src", ranImageSource1);

if (randomNum>randomNum1){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if (randomNum===randomNum1){
    document.querySelector("h1").innerHTML = "It's a tie!";

}

else{
    document.querySelector("h1").innerHTML = "Player2 wins🚩";

}