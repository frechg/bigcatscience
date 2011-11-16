$(function() {


	$("#lessons").hide();
	$("#features").hide();
	$("#gallery").hide();
	
	
	$(".overview").click(function() {
	
		$(".overview").addClass('selected');
		$(".lessons").removeClass('selected');
		$(".gallery").removeClass('selected');
		$(".features").removeClass('selected');
		
		$("#overview").fadeIn('slow');
		$("#gallery").fadeOut('fast');
		$("#lessons").fadeOut('fast');
		$("#features").fadeOut('fast');
		

		
	});
	
	$(".lessons").click(function() {
	
		$(".lessons").addClass('selected');
		$(".overview").removeClass('selected');
		$(".gallery").removeClass('selected');
		$(".features").removeClass('selected');
		
		$("#lessons").fadeIn('slow');
		$("#gallery").fadeOut('fast');
		$("#overview").fadeOut('fast');
		$("#features").fadeOut('fast');

		
	});
	
	$(".features").click(function() {
	
		$(".features").addClass('selected');
		$(".overview").removeClass('selected');
		$(".gallery").removeClass('selected');
		$(".lessons").removeClass('selected');
		
		$("#features").fadeIn('slow');
		$("#gallery").fadeOut('fast');
		$("#overview").fadeOut('fast');
		$("#lessons").fadeOut('fast');

		
	});
	
	/*$(".gallery").click(function() {
	
		$(".gallery").addClass('selected');
		$(".overview").removeClass('selected');
		$(".lessons").removeClass('selected');
		$(".features").removeClass('selected');
		
		$("#gallery").fadeIn('slow');
		$("#overview").fadeOut('fast');
		$("#lessons").fadeOut('fast');
		$("#features").fadeOut('fast');

		
	});*/
	
	$("#contact").hide();
	
	$(".about").click(function() {
	
		$(".about").addClass('selected');
		$(".contact").removeClass('selected');
		
		$("#about").fadeIn('slow');
		$("#contact").fadeOut('fast');
		
	});
	
	$(".contact").click(function() {
	
		$(".contact").addClass('selected');
		$(".about").removeClass('selected');
		
		$("#contact").fadeIn('slow');
		$("#about").fadeOut('fast');
		
	});

	
});	