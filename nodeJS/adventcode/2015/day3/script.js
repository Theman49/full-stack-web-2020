/*

^ -> north
v -> south
< -> west
> -> east

> delivers presents to 2 houses: one at the starting location, and one to the east.
^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

*/


// question1
const fs = require('fs');
// fs.readFile('./puzzle.txt', (err, res) => {
// 	if(err){
// 		console.log(err);
// 	}

// 	const data = res.toString();
// 	const array = data.split('');
// 	console.log(array);

// 	// start position
// 	let position = [0,0];
// 	const endPosition = array.map(item => {
// 		switch(item){
// 			case '^':
// 				position[1] += 1;
// 				break;
// 			case 'v':
// 				position[1] -= 1;
// 				break;
// 			case '<':
// 				position[0] -= 1;
// 				break;
// 			case '>':
// 				position[0] += 1;
// 				break;
// 			default:
// 				console.log('something wrong');
// 				break;
// 		}
// 		let pos = [position[0], position[1]];
// 		return pos;
// 	})

// 	// adding first position to endPosition array
// 	endPosition.splice(0,0, [0,0])
// 	console.log(endPosition);

// 	let same = [];
// 	console.time('timer');
// 	for(i=0;i<endPosition.length;i++){
// 		let nol = 0;
// 		if(endPosition[i] == ''){
// 			continue
// 		}
// 		else {
// 			for(j=i+1; j<endPosition.length; j++){
// 				if(endPosition[i].toString() === endPosition[j].toString()){
// 					endPosition[j].pop();
// 					endPosition[j].pop();
// 					nol++;
// 				} 
// 			}
// 			if(nol != 0){
// 				same.push(nol);
// 			}
// 		}
// 	}
	
// 	const reduce = same.reduce((acc, num) => {
// 		return acc + num;
// 	},0)

// 	console.log(same);
// 	console.log("reduce", reduce);
// 	console.log("same house", same.length)
// 	console.log("total rumah",endPosition.length - reduce);
// 	console.timeEnd('timer');
// })
function direction(array){
	let position = [0,0]
	const endPosition = array.map(item => {
		switch(item){
			case '^':
				position[1] += 1;
				break;
			case 'v':
				position[1] -= 1;
				break;
			case '<':
				position[0] -= 1;
				break;
			case '>':
				position[0] += 1;
				break;
			default:
				console.log('something wrong');
				break;
		}
		let pos = [position[0], position[1]];
		return pos;
	})
	return endPosition;
}

function location(endPosition, name){
	let same = [];
	for(i=0;i<endPosition.length;i++){
		let nol = 0;
		if(endPosition[i] == ''){
			continue
		}
		else {
			for(j=i+1; j<endPosition.length; j++){
				if(endPosition[i].toString() === endPosition[j].toString()){
					endPosition[j].pop();
					endPosition[j].pop();
					nol++;
				} 
			}
			if(nol != 0){
				same.push(nol);
			}
		}
	}

	const reduce = same.reduce((acc, num) => {
		return acc + num;
	},0)
	console.log(`same ${name}`, same)
	console.log(`total rumah ${name}`,endPosition.length - reduce);
}
// question2
fs.readFile('./puzzle.txt', (err, res) => {
	if(err){
		console.log(err);
	}

	const data = res.toString();
	const array = data.split('');
	let santa =[];
	let robot = [];


	for(i=0;i<array.length;i+=2){
		santa.push(array[i]);
	}

	for(i=1;i<array.length;i+=2){
		robot.push(array[i]);
	}


	console.log("ori",array)

	console.log("santa",santa)

	console.log("robot",robot)

	const santaResult = direction(santa)
	santaResult.splice(0,0, [0,0])
	console.log("santa way",santaResult)

	const robotResult = direction(robot)
	robotResult.splice(0,0, [0,0])
	console.log("robot way",robotResult)

	const gabungan = santaResult.concat(robotResult) 
	console.log("gabungan", gabungan)


	console.time('timer');
	// location(santaResult, 'santa')
	// location(robotResult, 'robot')
	location(gabungan, 'gabungan')
	
	console.timeEnd('timer');
})
