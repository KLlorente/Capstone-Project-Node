//const USER_API_ENDPOINT = 

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
				"weight": 135
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
				"weight": 135 
			},
			{
				"exercise": "Push-up",
				"muscleGroup": "Pecs",
				"repititions": "50",
				"rounds": 1, 
				"weight": 0 
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
				"weight": 0 
			},
			{
				"exercise": "Dumbell Row",
				"muscleGroup": "back",
				"repititions": 10,
				"rounds": 3,
				"weight": 45 
			},
			{
				"exercise": "back extension",
				"muscleGroup": "back",
				"repititions": 15,
				"rounds": 4,
				"weight": 0 
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
			'<li>' + data.workOuts[index].workoutTitle + '</li> <br>' 
//			'<button id="${data.workOuts[index].id}" class="delete-btn">Delete</button></button id={data.workOuts[index].id" class= "edit-btn"}
// <div id="raw-data" hiddn>${JSON.stringify(data.workOuts[index])}</div>
			); 
	}
}

function deleteSavedWorkouts(data) {
	for (index in data.workOuts) {
		$('.delete-btn').on('click', function(event) {
			let workoutId=$(this).attr('id'); 
			console.log(workoutId); 
			$.ajax({
				url: `/wktList/${workoutId}`,
				type: 'DELETE', 
				dataType: 'json', 
				contentType: 'application/json', 

				success: data => {
					console.log("sucess!"); 
					window.location = "/userHome.html"; 
				}
			})
		})
	}
}

function getAndDisplaySavedWorkouts() {
	getSavedWorkouts(displaySavedWorkouts); 
}

function getAndDeleteSavedWorkouts() {
	getSavedWorkouts(deleteSavedWorkouts); 
}

$(document).on('click', 'edit-btn', function (event) {
	window.localStorage.setItem('workOut', $(this).siblings('#raw-data').text())
	window.location='/editWkt.html';
})

$(document).on('click', 'newWkt-button', function (event) {
	window.location = "newWkt.html"; 
})

$(getAndDisplaySavedWorkouts); 
$(getAndDeleteSavedWorkouts); 