
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

	$('#main_menu .button').click(function(e)
	{
		$('#main_menu .button').removeClass('selected');
		$(this).addClass('selected');
	})

	$('.content a').click(function()
	{
		event.preventDefault();
		var target = $(this).attr('href');
		$.scrollTo(target,667);
	});

	$('#go_home').click(function()
	{
		event.preventDefault();
		$.scrollTo('#home',667);
	});
	$('#go_portfolio').click(function()
	{
		event.preventDefault();
		$.scrollTo('#portfolio',667);
	});
	$('#go_about').click(function()
	{
		event.preventDefault();
		$.scrollTo('#about',667);
	});
	$('#go_contact').click(function()
	{
		event.preventDefault();
		$.scrollTo('#contact',667);
	});

	$('A[rel="external"]').click(function()
	{
		window.open($(this).attr('href'));
		return false;
	});

	$('#mail').validate(
	{
		messages:
		{
			yourname:
			{
				required: "Don't forget your name!",
				minLength: "Surely your name is at least 2 letters long..."
			},
			youremail: "You need to enter a valid email address.",
			yourmssg: "Please write something in the comment field as well."
		},
		showErrors: function(errorMap,errorList)
		{
	    	$("#mailReturn").html("Errors in your form: "+ this.numberOfInvalids());

	    }
	});

	$('#mail').submit(function()
	{
		if($('#mail').valid())
		{
			$.post('mail.php',
			{
				name: $('#yourname').val(),
				addr: $('#youremail').val(),
				mssg: $('#yourmssg').val(),
				submitted: 'yes'
			},
			function(data)
			{
				$('#mailReturn').html(data).fadeIn('800');
				$('#yourname,#youremail,#yourmssg').val('');
			},
			'text');
			return false;
		}
		else
		{
			event.preventDefault;
		}
	});

	$('#home').waypoint(function(){reselect('home');},{offset:100});
	$('#portfolio').waypoint(function(){reselect('portfolio');});
	$('#about').waypoint(function(){reselect('about');});
	$('#contact').waypoint(function(){reselect('contact');},{offset:200});
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
	$('body').fadeOut(1000,function()	// Fade out everything, then run this function when done...
	{
        document.location.href='index.html';	// Reload the page
	});
}

//----------// RESELECT //----------------------------------------------------------------------------------//
function reselect(theID)
{
	$('#main_menu .button').removeClass('selected');
	var target = "#go_"+theID;
	$(target).addClass('selected')
}