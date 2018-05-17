jquery (function($) {
	let $button = $('#add-exercise-field'),
	$exercise = $('.add-exercise').clone(); 

	$button.click(function(){
		$exercise.clone().insertBefore($button); 
	});
}); 