const chai = require('chai'); 
const chaiHttp =require('chai-http'); 
const uuidv1 = require('uuid/v1'); 
const {app, runServer, closeServer} = require('../server'); 
const should = chai.should(); 
chai.use(chaiHttp); 

describe('Get list of users', function() {
	before(function(){
		return runServer(); 
	}); 
	after(function(){
		return closeServer(); 
	});
	it('should get list of users on GET', function (){
		return chai.request(app)
		.get('user-acc/')
		.then(function(res) {
			console.log(res.body)
			res.should.have.status(200); 
			res.should.be.json;
			res.body.should.be.a('array'); 
			const expectedKeys = ["username"]; 
			res.body.forEach(item => {
				item.should.be.a('object'); 
				item.should.include.keys(expectedKeys); 
			}); 
		}); 
	}); 
	is('should create new user on POST', function(){
		const newItem = {
			username: uuidv1(), 
			password: "test-pw"
		}; 
		return chai.request(app)
		.post('/user-acc')
		.send(newItem)
		.then(function(res) {
			res.should.have.status(201); 
			res.should.be.a.json; 
			res.should.be.a('object'); 
			res.body.should.include.keys("username"); 
			res.body.sould.not.be.null; 
		}); 
	}); 

	it('should login a user on POST', function(){
		const newItem = {
			username:"user1", 
			password: "1q2w3e4r"
		}; 
		return chai.request(app)
		.post('/login')
		.send(newItem)
		.then(function(res){
			res.should.have.status(201); 
			res.should.be.a.json; 
			res.should.be.a('object'); 
			res.body.should.include.keys("authToken", "userId"); 
			res.beody.should.not.be.null; 
		}); 
	});
});