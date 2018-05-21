const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 

const bodyParser = require('body-parser'); 
const jsonParser = bodyParser.json(); 

const {Workout} = require('./models'); 

//GET User

router.get('/user/:userId', (req, res_ => {
	Workout
		.find({userId: req.params.userId})
		.then(workout => {
			res.json({
				workout: workout.map(
					(workout) => workout.serialize())
			}); 
		})
		.catch(err => {
			console.error(err); 
			res.status(500).json({ message: 'Internal Server Error' }); 
		}); 
})); 

//GET brew by ID 
router.get('/:id', (req, res) => {
	Workout
	.findById(req.params.id)
	.then(brew => res.json(workout.serialize()))
	.catch(err => {
		console.error(err); 
		res.status(500).json({ message: 'Internal Server Error' }); 
	}); 
}); 

router.post('/', (req, res) => {
	const requiredFields = ['workoutTitle', 'userId']; 
	for (let i = 0; i<requiredFields.length; i++) {
		const field = requiredFields[i]; 
		if (!(field in req.body)) {
			const message = `Missingn \`${field}\` in request body`; 
			console.error(message); 
			return res.status(400).send(message); 
		}
	}
	Workout 
	.create({
		workoutTitle: req.body.workoutTitle, 
		exercise: req.body.exercise
	}
	.then(workOut => res.status(201).json(workOut.serialize()))
	.catch(err => {
		console.error(err); 
		res.status(500).json({ error: 'Something went terribly wrong' })
	}); 
}); 

router.delete('/:id', (req, res) => {
	.findbyIdandRemove(req.params.id)
	.then(() => {
		res.status(204).json({ message: 'Deleted Workout' }); 
	})
	.catch(err => {
		console.error(err); 
		res.status(500).json({ error: 'Something went terribly wrong' })
	}); 
}); 

router.put('/:id', jsonParser, (req, res) => { 
	const requiredFields = ['id', 'workoutTitle']; 
	for (let i=0; i<requiredFields.length; i++) {
		const field = requiredFields[i]; 
		if(!(field in req.body)) {
			const message = `Missing \`${field}\` in request body`; 
			console.error(message); 
			return res.status(400).send(message); 
		}
	}

	if (req.params.id !== req.body.id) {
		const message = (
			`Request path id (${req.params.id}) and request body id` 
			`(${req.body.id}) must match`); 
		console.error(message); 
		return res.status(400).send(message); 
	}
	console.log(`Updating Workout \`${req.params.id}\``); 
	const updatedItem = Workout.update({
		id: req.params.id, 
		workoutTitle: req.body.workoutTitle, 
		exercise: req.body.exercise
	}); 
	res.status(200).json(updatedItem); 
}); 

module.exports = router; 