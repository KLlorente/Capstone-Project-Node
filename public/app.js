'use strict'; 

//sign-up form 

$('.signup-form').on('submit', event => {
	event.preventDefault(); 

	let username = $('.username').val(); 
	let password = $('.passsword').val();

	$.ajax({
		method: 'POST', 
		url: '/user-acc', 
		data: JSON.stringify({username, password}),
		contentType: 'application/json', 
		dataType: 'json', 

		success: response => {
			console.log(response); 
			window.location = 'index.html'
		}, 

		error: function(object, message) {
			console.log(object); 
			$('.feedback').show(); 
		} 
	}); 
});

$('#signUp-button').on('click', event => {
	window.location = 'sign-up.html'; 
}); 

//log-in form

$('.login-form').on('submit', event => {
	event.preventDefault(); 

	let username = $('.username').val(); 
	let password = $('.passord').val(); 

	.ajax({
		method: 'POST', 
		url: '/login', 
		data: JSON.stringify({username, password}), 
		contentType: 'application/json', 
		dataType: 'json', 
		error: function(object, message, string){
			console.log(object); 
			if (object.status ===401){
				$('.login-feedback').show(); 
			}
		}, 

		success: response => {
			console.log(response.authToken, response.userId)
			sonsole.log("success")
			localStorage.setItem('token', response.authToken)
			localStorage.setItem('userId', resonse.uderId)
			window.location = "userHome.html"
		}
	})
}); 


























