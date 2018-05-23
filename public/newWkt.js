
$('#add-exercise-field-button').on('click', function () {
	$('#add-exercise-fieldset').clone().find("input").val(" ").end().insertBefore($('#add-exercise-field-button')); 
})

$(function() {
    $("[name=toggler]").click(function(){
            $('.toHide').hide();
            $("#blk-"+$(this).val()).show('slow');
    });
 });