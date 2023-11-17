var css = document.querySelector("h3");
var color1 = document.querySelector("#color-1"); //getting by the id 
var color2 = document.querySelector("#color-2"); //if we want to get by the class (".color-1")
var body = document.querySelector('body');

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    +")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();