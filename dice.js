var randomno1 = Math.floor(Math.random()*6)+1;
var randomimagesource1 = "images/dice" + randomno1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesource1);
var randomno2 = Math.floor(Math.random()*6)+1;
var randomimagesource2 = "images/dice" + randomno2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimagesource2);
if(randomno1>randomno2)
{
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!! 🚩";
    document.querySelector("h1").style.fontSize = "4rem";
}
else if(randomno1<randomno2)
{
    document.querySelector("h1").innerHTML = "🚩 Player2 Wins!!🚩 " ;
    document.querySelector("h1").style.fontSize = "4rem";
}
else
{
    document.querySelector("h1").innerHTML = "🚩 Draw!! 🚩 ";
    document.querySelector("h1").style.fontSize = "4rem";
}