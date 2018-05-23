const MOCK_WORKOUTS = {
	"workOuts": [
	{ 
		"workoutTitle" : "Leg Day",
		"exercises": [
			{
				"exercise": "squat",
				"muscleGroup": "legs",
				"repititions": 30,
				"rounds": 3,
				"weight": 0
			},
			{
				"exercise": "leg press",
				"muscleGroup": "legs",
				"repititions": 10,
				"rounds": 4,
				"weight": 315, 

			},
			{
				"exercise": "Dead Lift",
				"muscleGroup": "legs",
				"repititions": "10",
				"rounds": 3,
				"weight": 135,
			}
		]
	},
	{
		"workoutTitle": "Push Day",
		"exercises": [
			{
				"exercise": "Incline dumbell chest press",
				"muscleGroup": "chest",
				"repititions": 12,
				"rounds": 4,
				"weight": 65, 
			},
			{
				"exercise": "Bench Press",
				"muscleGroup": "chest",
				"repititions": 15,
				"rounds": 3,
				"weight": 135, 
			},
			{
				"exercise": "Push-up",
				"muscleGroup": "chest",
				"repititions": 50,
				"rounds": 1, 
				"weight": 0, 
			}	
		]
	},
	{
		"workoutTitle": "Pull Day",
		"exercises": [
			{
				"exercise": "Pull up",
				"muscleGroup": "back",
				"repititions": 20,
				"rounds": 4,
				"weight": 0, 
			},
			{
				"exercise": "Dumbell Row",
				"muscleGroup": "back",
				"repititions": 10,
				"rounds": 3,
				"weight": 45, 
			},
			{
				"exercise": "back extension",
				"muscleGroup": "back",
				"repititions": 15,
				"rounds": 4,
				"weight": 0, 
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

function renderSavedWorkouts(result){
	return
	`
		<div class="single-workout">
			<h2 class= "js-wkt-title">${result.workOut.workoutTitle</h2>
				<p>${result.exercise.exercise}</p>
				<p>${result.exercise.muscleGroup} </p>
				<p>${result.exercise.weight} </p>
				<p>${result.exercise.repititions} </p>
				<p>${result.exercise.rounds}</p>
		</div>`; 
} 

function displaySavedWorkouts(data) {
	const results = data.workOuts.map((item,index) =>
		renderSavedWorkouts(item)); 
		$('.container').html(results); 

		$('.search-results-written')
		.prop('hidden', false)
		.html(results); 

}

//function displaySavedWorkouts(data) {
//	for (index in data.workOuts) {
//		$('.container').append(
//			'<h2>' + data.workOuts[index].workoutTitle + '</h2> <br>' +
//			'<p> Exercise: ' + data.workOuts[index].exercises[index].exercise +'</p>' +
//			'<p> Muscle Group: ' + data.workOuts[index].exercises[index].muscleGroup + '</p>' +
//			'<p> Repititions: ' + data.workOuts[index].exercises[index].repititions +'</p>' +
//			'<p> Rounds: ' + data.workOuts[index].exercises[index].rounds +'</p>' +
//			'<p> Weight: ' + data.workOuts[index].exercises[index].weight +'</p>' ) ; 
//	}
//}


function displayFullWorkout(data) {
let wkts= MOCK_WORKOUTS['workOuts']; 

for (let i=0; i<wkts.length; i++) {
  console.log(wkts[i]); 
  for(let prop in wkts[i]) {
    console.log(prop, wkts[i][prop])
  }
}
}


function getAndDisplaySavedWorkouts() {
	getSavedWorkouts(displaySavedWorkouts); 
}

$(getAndDisplaySavedWorkouts); 