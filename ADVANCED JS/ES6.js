// destructuring

const obj = {
    player: "bob",
    experience: 100,
    wizardlevel: false,
}

const {player, experience} = obj;
let {wizardlevel} = obj;

//object properties
const name = "oy oy";
const ne = 3;

const obj = {
    name,
    [1+9]:12,
    [ne]:"something"
}

// template string
const name = "sally";
const age = 34;

const greeting = `Hello ${name} you seem to ${age-10}`;

// default arguments

function greet(name="", age=34) {
    return `Hello ${name} you seem to ${age-10}`;
}

// symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow function

const greet = (name="", age=34) => `Hello ${name} you seem to ${age-10}`;