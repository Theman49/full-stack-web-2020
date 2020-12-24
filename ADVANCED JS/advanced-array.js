var array = [1,2,3,4];

var double = [];
const newArray = array.forEach(item => double.push(item * 2));

console.log("double", double);

// map 
const mapArray = array.map(item => item*2);
console.log("map", mapArray);

// filter
const filterArray = array.filter(item => item > 2);
console.log("filter", filterArray);

// reduce 
const reduceArray = array.reduce((accumulator, item) => {
    return accumulator + item;
}, 0);
console.log(reduceArray);
