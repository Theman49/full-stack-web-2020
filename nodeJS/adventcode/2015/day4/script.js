const md5 = require('md5');
let string = ''

console.log("start finding.....")
let hash = ''
let add = 282749;
console.time("timer")

// question2
// start with 6 zeroes
while(hash !== '000000'){
	let z = "yzbqklnj";
	let x = Array(z.split(''))
	let puzzle = x.flat()
	hash = '';

	string = ''
	puzzle.push(add)
	// console.log(puzzle)
	for(z=0;z<puzzle.length; z++){
		string +=  puzzle[z];
	}
	console.log(string)

	hash = md5(string).substr(0,6);
	console.log(hash)
	if(hash === '000000'){
		console.log('got it', string)
		console.timeEnd("timer")
		return
	}
	add++;
	// console.clear()
	// console.log("\\")
	// console.clear()
	// console.log("|")
	// console.clear()
	// console.log("/")

}
