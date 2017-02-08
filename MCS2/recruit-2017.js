$(function(){
	$(document).ready(function(){
		$('label').hide('#changer2')
		$('#changer1').show('.change');
	})
	$('#changer1').click(function(){
		$('#changer1').hide('.change');
		$('#changer2').show('.changed');
		$('.changed').css("display","inline-block");
	});
	$('#changer2').click(function(){
		$('#changer2').hide('.changed');
		$('#changer1').show('.change');
	}); 
});


