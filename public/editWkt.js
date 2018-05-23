//update

function updateSavedWkt(id, title, exercise) {
	if (window.localStorage.getItem('workOut')) {
		const wrokOut = JSON.parse(window.localStorage.getItem('workOut')); 
		console.log(id); 
		console.log(title); 
		console.log(exercise); 
		$.ajax({
			method: 'PUT', 
			url: `/workoutList/${id}`
			data: JSON.stringify({
				id: id, 
				title: title, 
				exercise: {exercise,
}
			}) 
			contentType: 'applicationn/json/', 
			dataType: 'json', 
			success: result => {
				window.location = "/userHome.html"; 
			}
		}); 
	}
}

function addNewWorkout() {
	if (window.localStorage.getItem('workOut')) { 
		const workOut = JSON.parse(window.localStorage.getItem('workOut')); 
		const workOtId = workOut.id; 
		const workOutTitle = $('#exercise-name').val().trim(); 
		const workOutExercises = $('')

		updateSavedWktRequest(workOutId, workOutTitle, workOutExercises)

		 }
}

function constructExercise() {

}


$('.new-workout-form').submit(function(event) {
	event.preventDefault(); 
	addNewWorkout(); 
})


function autoFill() {
	if(window.localStorage.getItem('workOut')) {
		const workOut = JSON.parse(window.localStorage.getItem('workout')); 


	}
}

$(autoFill); 
