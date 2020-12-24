var color1 = document.getElementsByTagName("input")[0];
var color2 = document.getElementsByTagName("input")[1];
var infoColor = document.querySelector("h3");
var body = document.body;

function setGradient() {
    var gradient = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    body.style.background = gradient;
    infoColor.innerText = gradient;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);