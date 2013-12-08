$(function(){
	
	$('[data-delete]').on('click', function(event){
		alert($(this).data('delete'));
		event.preventDefault();
	});
	
});