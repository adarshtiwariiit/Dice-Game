function randomnumber() {
  var number = Math.floor(Math.random() * 6) + 1;
  return number;
}
var number1= randomnumber();
const img1 = document.querySelector(".img1");

if(number1==1){
    img1.setAttribute("src","images/dice1.png");
}
if(number1==2){
    img1.setAttribute("src","images/dice2.png");
}
if(number1==3){
    img1.setAttribute("src","images/dice3.png");
}
if(number1==4){
    img1.setAttribute("src","images/dice4.png");
}
if(number1==5){
    img1.setAttribute("src","images/dice5.png");
}
if(number1==6){
    img1.setAttribute("src","images/dice6.png");
}
var number2= randomnumber();
 const img2 = document.querySelector(".img2");

if(number2==1){
    img2.setAttribute("src","images/dice1.png");
}
if(number2==2){
    img2.setAttribute("src","images/dice2.png");
}
if(number2==3){
    img2.setAttribute("src","images/dice3.png");
}
if(number2==4){
    img2.setAttribute("src","images/dice4.png");
}
if(number2==5){
    img2.setAttribute("src","images/dice5.png");
}
if(number2==6){
    img2.setAttribute("src","images/dice6.png");
}
const h1= document.querySelector("h1");
if(number1>number2)
h1.innerHTML="📍 Number 1 wins!";
else if(number1<number2)
h1.innerHTML="Number 2 wins! 📍";
else h1.innerHTML="Draw...Try again!";