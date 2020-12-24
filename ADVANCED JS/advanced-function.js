// old function
function first() {
    var greet = "hi";
    function second() {
        alert(greet);
    }
    return second;
}

// ES6 function
const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc()

// Closur - a function ran. the function execute. It's never get execute again
// BUT it's going to remember the references
// so the child scope always has access to the parent scope

//Currying
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiply5 = curriedMultiply(5); // argument in curriedMultiply is 'a'
multiply5(2); // the argument is 'b' -> curriedMultiply(5)(2)

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
// it will be going like this
// f(g(a)) -> f(g(5)) -> f(sum(5)) -> f(6) -> sum(6) -> 7