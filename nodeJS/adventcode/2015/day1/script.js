
// 1 - what floor does santo end up on
// ( --> goes up one floor
// ) --> goes down one floor
function question1(dataString, floor=0) {
	// way 1
	for(i=0; i< dataString.length; i++){
		if(dataString[i] === '('){
			floor++;
		}else {
			floor--;
		}
	}

	console.log('answer 1 :',floor);
}

function question1b(dataString, floor=0) {
	// way 1
	const dataArray = dataString.split('');
	const answer = dataArray.reduce((acc, currentValue) => {
		if(currentValue === '('){
			floor ++;
		} else if(currentValue === ')'){
			floor --;
		}
	}, 0)
	console.log(dataArray);

	console.log('answer 1 :',floor);
}
// 2 - when does santa first enter the basement
// basement --> floor (-1)
// first character position --> 1
// second character position --> 2
// ) causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.
function question2(dataString, floor=0) {
	let i =0;
	while(floor != -1){
		if(dataString[i] === '('){
			floor++;
		}else {
			floor--;
		}
		i++;
	}
	console.log('answer 2 :',i);
}

function question2b(dataString, floor=0) {
	let counter=0;
	const dataArray = dataString.split('');
	const answer = dataArray.some((currentValue) => {
		if(currentValue === '('){
			floor ++;
		} else if(currentValue === ')'){
			floor --;
		}
		counter++;
		return floor < 0;
	})
	console.log('answer 2 :',counter);
}

const fs = require('fs');
let floor = 0;
fs.readFile('./puzzle.txt', (err,data) => {
	console.time('day1');
	if(err) {
		console.log(err);
	}
	const dataString = data.toString();

	question1(dataString);
	question2(dataString);

	// question1b(dataString)
	// question2b(dataString)
	console.timeEnd('day1');
})

