// window is the parent of document ..

// getElementById will get full element
// getElementByClassName can get full element with adding [index] at end line
// ex, getElementByClassName("second")[0]

//getAttribure, before use this method, we must get the element first.

var inputItem = document.getElementById("inputItem");
var button = document.getElementsByTagName("button")[0];
var items = document.querySelector("ul");

function inputLength() {
    return inputItem.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputItem.value));
    items.appendChild(li);
    inputItem.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterEnter(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

inputItem.addEventListener("keypress", addListAfterEnter);