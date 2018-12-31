/**
 * 
 */
$(document).ready(function() {
	$(".gu").hover(function() {
		$(this).attr("stroke-width", "3");
	}, function() {
		$(this).attr("stroke-width", "1");
	});
	
	/*$(".images").hover(function() {
		$("#img-"+$("nav").attr("id")).attr("xlink:href",$(this).name);
	}, function() {
		$("#img-"+$("nav").attr("id")).attr("xlink:href","");
	});*/
});