const fs = require('fs');

//question 1
// fs.readFile('./puzzle.txt', (err, data) => {
// 	console.time('time');
// 	if(err){
// 		console.log(err);
// 	}

// 	const direction = data.toString();
// 	const sideArray = direction.split('\n');
// 	const count = sideArray.map(item => item.split('x'))
// 	const array = count.map(item => {
// 		for(i=0; i<3; i++){
// 			item[i] = Number(item[i])
// 		}

// 		let arrayNew = [];
// 		for(i=0; i<2; i++){
// 			for(j=i+1; j<3; j++){
// 				let x = item[i] * item[j];
// 				arrayNew.push(x);
// 			}
			
// 		}
// 		return arrayNew;
// 	})
// 	console.log(array)
// 	const surface = array.map(item => {
// 		let hasil = temp = 0;

// 		for(i=0; i<2; i++){
// 			for(j=0; j<2; j++){
// 				if(item[j] > item[j+1]){
// 					temp = item[j];
// 					item[j] = item[j+1];
// 					item[j+1] = temp;
// 				}
// 			}
// 		}

// 		hasil += Number(item[0])

// 		for(i=0; i<3; i++){
// 			hasil += item[i]*2;
// 		}
		
// 		return hasil;
// 	})
// 	console.log(surface)
// 	let sum = 0;
// 	const totalSurface = surface.reduce((acc, currentValue) => {
// 		return acc + currentValue;

// 	},0)

// 	for(i=0;i<surface.length;i++){
// 		sum+=surface[i];
// 	}
// 	console.log('total surface', totalSurface);
// 	console.log('sum:', sum);
// 	console.timeEnd('time');
// })

//question 2
fs.readFile('./puzzle.txt', (err, data) => {
	console.time('time');
	if(err){
		console.log(err);
	}

	const direction = data.toString();
	const sideArray = direction.split('\n');
	const count = sideArray.map(item => item.split('x'))
	const array = count.map(item => {
		for(i=0; i<3; i++){
			item[i] = Number(item[i])
		}
		return item;
	})
	console.log("first array", array);

	const vol = array.map(item => {
		let hasil = 1;
		for(i=0;i<3;i++){
			hasil *= item[i];
		}
		return hasil;
	})

	console.log("array volume", vol)


	const ribbon = array.map(item => {
		let temp = 0;
		for(i=0;i<2;i++){
			for(j=0;j<2;j++){
				if(item[j] > item[j+1]){
					temp = item[j];
					item[j] = item[j+1];
					item[j+1] = temp;
				}
			}
		}

		item.pop();
		
		return item;
	})
	console.log("ribbon",ribbon);

	const hasilRibbon = ribbon.map(item => {
		let hasil = 0;
		for(i=0;i<2;i++){
			hasil += item[i]*2;
		}
		
		return hasil;
	})
	console.log("hasil penjumlahan ribbon", hasilRibbon)

	let k = 0;
	const total = vol.map(item => {
		item += hasilRibbon[k];
		k++;
		return item;
	})
	console.log("total", total)

	const akhir = total.reduce((acc, num) => {
		return acc + num;
	},0)
	console.log("akhir", akhir)
	console.timeEnd('time');
})