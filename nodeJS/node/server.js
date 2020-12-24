// const http = require('http');

// const server = http.createServer((request, response) => {
// 	// console.log('headers', request.headers);
// 	console.log('method', request.method);
// 	console.log('url', request.url);

// 	const user = {
// 		name: 'John',
// 		hobby: 'skating'
// 	}

// 	response.setHeader('Content-Type', 'text/html');
// 	response.end(JSON.stringify(user));
// })

// server.listen(3000);



// // E X P R E S S 
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());
// // middleware
// // app.use((req, res, next) => {
// // 	console.log("<h2>helloooo</h2>");
// // 	next(); // must be used in use()
// // })

// app.get('/', (req, res) => {
// 	res.send("getting root");
// })

// // app.get('/profile', (req, res) => {
// // 	res.send("getting profile");
// // })

// app.post('/', (req, res) => {
// 	console.log(req.body);
// 	const user = {
// 		name: "Sally",
// 		hobby: "Singing"
// 	}
// 	res.send(user);
// })

// app.listen(3000);

// E X P R E S S 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public')); 



app.listen(3000);