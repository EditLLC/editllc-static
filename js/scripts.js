jQuery().ready(function($) {
	
	$(document).ready(function(){

		var windowHeight = $(window).height();	

		$(".division").css("height", windowHeight);

		$("#close").click(function(){
			$("#popup").hide();
		});

		$('#popup').click(function() {                    
			$("#popup").hide();
		});

		$("#messages").click(function(e) {
			e.stopPropagation();
			return false;     
		});

		$(".button").click(function(e){
		    var targetLink = $(this).attr('href'); 
		    window.open(targetLink, '_blank');
		});
		
		$(".intro-email").click(function(e){
		    var targetLink = $(this).attr('href'); 
		    window.open(targetLink, '_blank');
		});

	});
	
});