/* Declare variables below to save the different sections (divs) of your story*/

let title=document.querySelector(".title");
let storyopening=document. querySelector(".story-opening");
let Button1=document.querySelector(".option-one");
let Button2=document.querySelector(".option-two");
let option1=document.querySelector(".option-one-screen");
let option2=document.querySelector(".option-two-screen");
let Button1one=document.querySelector(".button1-one");
let Button1two=document.querySelector(".button1-two");
let Button2one=document.querySelector(".button2-one");
let Button2two=document.querySelector(".button2-two");
let option3=document.querySelector(".option-three-screen");
let option4=document.querySelector(".option-four-screen");
let background=document.querySelector("body");





// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
Button1.onclick=function(){
option2.style.display="block";
option1.style.display="none";
option3.style.display="none";
option4.style.display="none";
background.style.backgroundColor="black";};

Button2.onclick=function(){
option1.style.display="none";
option2.style.display="none";
option3.style.display="none";
option4.style.display="block";
background.style.backgroundColor="#9e0805";};

Button1two.onclick=function(){
option3.style.display="block";
option4.style.display="none";
background.style.backgroundColor="black";};

Button1one.onclick=function(){
option4.style.display="block";
option3.style.display="none";
background.style.backgroundColor="#9e0805";
};