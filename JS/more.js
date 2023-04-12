const time = new Date().getHours();
let greet;
if(time < 12){
    greet = "Morning.";
} else if(time < 20){
    greet = "Evening.";
} else {
    greet = "Night.";
}
document.getElementById("demo").innerHTML = greet;

const subtxt = ["Just Me","Be Yourself","Keep Smiling"];
var i = Math.floor(4*Math.random());
document.getElementById("randomtxt").innerHTML = subtxt[i];

function mobFunction(){
  const x = document.getElementById("menu");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }
}

function on(popupId) {
    document.getElementById(popupId).style.display = "block";
    document.body.classList.add("front-active");
  }
  
function off(popupId, event) {
  const overlay = document.getElementById(popupId);
  if (event.target === overlay) {
      overlay.style.display = "none";
      document.body.classList.remove("front-active");
    } 
}

const myButton = document.getElementById("btn");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 900|| document.documentElement.scrollTop > 900){
    myButton.style.bottom = "20px";
  }else{
    myButton.style.bottom = "-21px";
  }
}

function gotofunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const ani = document.getElementsByClassName('scroll')[0];
window.onload = function() {aniFunction()};

function aniFunction(){
  scroll.style.margintop = "25px";
}
