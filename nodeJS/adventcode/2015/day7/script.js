// and -> &
// or -> |
// rshift -> >>
// lshift -> <<
// NOT -> ~

const fs = require('fs');
const buf = Buffer.from('af').toInt('base64')
console.log(buf)

// fs.readFile('./assembly.txt', (err, res) => {
// 	if(err){
// 		console.log("Something wrong");
// 	}
// 	const data = res.toString().split('\n')
// 	const array = data.map(item => item.split(" "))
// 	console.log(array)

// 	const x = array[0]
// 	let variable = x[3]
// 	let result = 
// 	console.log(x) 
// })