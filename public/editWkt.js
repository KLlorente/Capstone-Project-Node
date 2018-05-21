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
				exercise: exercise, 
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
	if (window.localStorage(window.localStorage.getItem('workOut')); 
		const )
}