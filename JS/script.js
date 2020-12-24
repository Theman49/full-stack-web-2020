// // function declaration

// function sayHello(who) {
//     console.log("hi, " , who); // or console.log("string" + who);
// }

// sayHello("bob");

// // function expression (have (;) in ending line)
// var sayBye = function(){
//     console.log("Bye");
// };

// sayBye();

// function multiply(a, b) {
//     return a*b;
// }

// alert(multiply(2,3));



// ----------- array----------------
// var list = ["cat", "bird", "tiger", "fish"];

// arrayName.shift() -> pop the first element in array
// arrayName.pop() -> pop the last element in array
// arrayName.push() -> add new element to the last element in array
// arrayName.concat() -> add the new array in old array


// ----------- object----------------
var user = {
    name: "John",
    age: 34,
    hobby: "soccer",
    isMarried: false,
}

console.log(user.age);

// we can have object in array and array in object or actually we can store everything in both

// array in object
var user = {
    name: "John",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["abrakadabra", "sazham"],
    shout: function(){         // this name is METHOD
        console.log("nooooo");
    }
}

console.log(user.spells[0]);
user.shout();

// object in array
var list = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "bobyu",
        password: "jkl",
    },
];

console.log(list[0].username);


// loops for each

var todos = [
    "clean room",
    'brush teeth',
    'excercise',
    "study javascript",
    "eat healthy"
];

function logTodos(todo, i){
    console.log(todo, i);
}

todos.forEach(function(todo, i) {
    console.log(todo, i);
})

// or we can doing like this

todos.forEach(logTodos);
