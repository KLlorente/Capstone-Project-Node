'use strict'; 

const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 

const newWorkoutSchema = mongoose.Schema({
	userId: {type: String}, 
	id: {type: String}, 
	workoutTitle: {type: String}, 
	exercise: {
		exercise: String, 
		muscleGroup: String, 
		repititions: Number, 
		rounds: Number, 
		weight: Number 
	}
}); 

newWorkoutSchema.methods.serialize = function() {
	return{
		id: this.id,
		userId: this.userId, 
		workoutTitle: this.workoutTitle, 
		exercise: {
			this.exercise, 
			this.muscleGroup,
			this.repititions, 
			this.rounds, 
			this.weight
		}
	};
}

const Workout = mongoose.modl('Workout', newWorkoutSchema);

module.exports = {Workout}; 