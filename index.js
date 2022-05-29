var dice1=Math.floor(Math.random()*6)+1;
var dice2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+dice1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+dice2+".png");

if(dice1==dice2)
{
    document.querySelector("h1").innerHTML="🎲 Draw 🎲";

}
else if(dice1>dice2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins! 🚩 ";
}
else 
{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}

