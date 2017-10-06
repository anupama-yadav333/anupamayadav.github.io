$(".nav .nav-link").on("click", function(event){
	var targetElem = $(event.target);
	var targetDivId = targetElem.attr("data-target");
	$("#profileDetails .navContent").hide();
	$("#profileDetails .navContent").closest("#" + targetDivId).show();
	event.preventDefault();
});
$(".nav .nav-link.active").trigger("click");