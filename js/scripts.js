jQuery().ready(function($) {
	
	$(document).ready(function(){

		var windowHeight = $(window).height();	

		$(".division").css("height", windowHeight);

		$("#close").click(function(){
			$("#popup").hide();
		});

	});
	
});