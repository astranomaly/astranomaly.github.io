
//#### PRE-INIT ####//
var theWindow   = $(window); // Oh look, the WINDOW is now a variable
var $bg         = $("#bg");  // This is our BACKGROUND
var aspectRatio = ($bg.width() / $bg.height());


//#### INITIALIZATION ####//

$(document).ready(function()
{
	copydate(); // Run COPYDATE function
	resizeBg(); // Run the RESIZE BACKGROUND function

	$('#logo,#inner_header').click(reloader);
	$('A[rel="external"]').click(function(){
		window.open($(this).attr('href'));
		return false;
	});
	$('#back_btn').click(function(){
		event.preventDefault();
		$('body').fadeOut(1000,function(){
	        document.location.href='index.html#portfolio';
		});
	})
})


//#### FUNCTIONS ####/////////////////////////////////////////////////////////////////////////////////////////

//----------// COPYRIGHT DATE //----------------------------------------------------------------------------//
function copydate()
{
	var oldDate = 2013; 							// Year website was started
	var nowDate = (new Date).getFullYear();			// Current year
	if (nowDate > oldDate)							// If the current year is different than start year
	{
		$('.year').text(oldDate+'–'+nowDate);	// ...display "OLDDATE-NOWDATE"
	}
	else											// Otherwise
	{
		$('.year').text(oldDate);					// Just display OLDDATE
	}
}

//----------// RESIZE BACKGROUND //-------------------------------------------------------------------------//
function resizeBg()
{
	var windowH  = $(window).height();
	var sidebarH = $('#sidebar').height();
	$('#sidebar').css({top:(windowH/2)-(sidebarH/2)});
}

// Trigger a RESIZE event when THE WINDOW is RESIZE'd
theWindow.resize(function()
{
    resizeBg(); // Run the RESIZE BACKGROUND function
}).trigger("resize");

//----------// RELOADER //----------------------------------------------------------------------------------//
function reloader()
{
	$('body').fadeOut(1000,function()
	{
        document.location.href='index.html';
	});
}