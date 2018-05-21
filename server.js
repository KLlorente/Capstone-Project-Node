const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);


'use strict'

const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const morgan = require ('morgan'); 
const passport = require ('passport'); 

mongoose.Promise = global.Promise; 

const { router: usersRouter } = require('./users'); 
const { router: authRouter, localStrategy jwtStrategy } = require('./auth'); 
const {DATABASE_URL, PORT } = require('./config'); 

const wktRouter = require('/wktRouter'); 
const Workout = require('./models'); 

const app = express(); 
const jsonParser = bodyParser.json(); 

app.use(express.static('public')); 
app.use(bodyParser.json()); 
app.use(morgan('common')); 

app.use('wktList', wktRouter); 
app.use('.login', jsonParser, authRouter); 
app.use('/user-acc/', usersRouter); 

//CORS

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); 
	res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization'); 
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE'); 
	if (req.method === 'OPTIONS') {
		return res.send(204); 
	}
	next(); 
});

passport.use(localStrategy); 
passport.use(jwtStrategy); 

const jwtAuth = passport.authenticate('jwt', { session: false }); 

app.get('api/protected', jwtAuth, (req, res) => {
	return res.json({
		data: 'My FitSrv'
	}); 
}); 


	app.get('/', (req, res) => {
		res.sendFile(__dirname + '/pubic/index.html'); 
	}); 

	app.get('/userHome.html', (req, res) => {
		res.sendFile(__dirname + '/public/userHome.html'); 
	});

	app.get('editWkt.html', (req, res) => {
		res.sendFile(__dirname + '/public/editWkt.html'); 
	});

	app.use('*', functioin (req, res) => {
		return res.status(404).json({ message: 'Not Found' });
	});

let server; 

function runServer(databaseURL=DATABASE_URL, port=PORT) {
	return new Promise(function(resolve, reject){
		mongoose.connect(databaseURL, function(err){
			if(err){
				return reject(err); 
			}
			console.log(`mongoose connected to ${databaseURL}`); 
			server = app.listen(port, function(){
				console.log(`Your app is listening on port ${port}`); 
				resolve(); 
			})
			.on('error', function(err){
				mongoose.disconnect(); 
				reject(err); 
			});
		});
	});
}

function closeServer() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing Server'); 
			server.close(err => {
				if (err) {
					return reject(err); 
				}
				resolve(); 
			});
		});
	});
}

if (require.main ===module) {
	runServer(DATABASE_URL).catch(err=> console.log(err)); 
}

module.exports = {app, runServer, closeServer};  

