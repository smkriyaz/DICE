let randomNumber1=Math.random();
randomNumber1= (randomNumber1*6)+1;
randomNumber1 =Math.floor(randomNumber1);
console.log(randomNumber1);

document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice"+randomNumber1+".png");


let randomNumber2=Math.random();
randomNumber2= (randomNumber2*6)+1;
randomNumber2 =Math.floor(randomNumber2);
console.log(randomNumber2);

document.querySelectorAll(".img2")[1].setAttribute("src" , "./images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="PLAYER 1 WINS";

}
 else if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="PLAYER 2 WINS";
}
else{
document.querySelectorAll("h1")[0].innerHTML="DRAW";
}
