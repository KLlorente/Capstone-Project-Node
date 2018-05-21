const MOCK_WORKOUTS = {
	"workOuts": [
	{ 
		"workoutTitle" : "Leg Day",
		"exercises": [
			{
				"title": "squat",
				"muscleGroup": "quads",
				"reps/duration": 30,
				"weight": "body", 
			},
			{
				"title": "leg press",
				"muscleGroup": "quads, hamstrings, glutes",
				"rounds": 4,
				"repition": 10,
				"weight": 315, 

			},
			{
				"title": "Dead Lift",
				"muscleGroup": "quads, hamstrings, back, glutes",
				"reps/duration": "10",
				"weight": 135,
			}
		]
	},
	{
		"workoutTitle": "Push Day",
		"exercises": [
			{
				"exercise": "Incline dumbell chest press",
				"muscleGroup": "Pecs, ",
				"reps/duration": "12 X 4",
				"weight": "65 lbs", 
			},
			{
				"exercise": "Bench Press",
				"muscleGroup": "Pecs",
				"reps/duration": 15,
				"weight": "135 lbs", 
			},
			{
				"exercise": "Push-up",
				"muscleGroup": "Pecs",
				"reps/duration": "50",
				"weight": "body weight", 
			}	
		]
	},
	{
		"workoutTitle": "Pull Day",
		"exercises": [
			{
				"exercise": "Pull up",
				"muscleGroup": "back",
				"reps/duration": "To Failure",
				"weight": "body weight", 
			},
			{
				"exercise": "Dumbell Row",
				"muscleGroup": "back",
				"reps/duration": 10,
				"weight": 45, 
			},
			{
				"exercise": "back extension",
				"muscleGroup": "lower back",
				"reps/duration": 15,
				"weight": "body weight", 
			}
		]
	}
	]	
};

//function getSavedWorkouts(callback) {

//	$.ajax({
//		url:``
//		type: 'GET', 
//		dataType: 'json',
//
//		success: data =>{
//			if(data) {
//				let results = data; 
//				console.log(results); 
//				callbackFn(results); 
//			}
//		}
//	});
//}

function getSavedWorkouts(callbackFn) {
	setTimeout(function() {callbackFn(MOCK_WORKOUTS)}, 1); 
}



function displaySavedWorkouts(data) {
	for (index in data.workOuts) {
		$('.container').append(
			'<li>' + data.workOuts[index].workoutTitle + '</li> <br>') ; 
	}
}

function getAndDisplaySavedWorkouts() {
	getSavedWorkouts(displaySavedWorkouts); 
}