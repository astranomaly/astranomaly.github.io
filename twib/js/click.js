
//#### CLICK ####///////////////////////////////////////////////////////////////////////////////////////////////////////////

//----------// HIDER //---------------------------------------------------------------------------------------------------//
function hider()
{
	if(logFormC === false)
	{
		$('#logForms').removeClass('hider');
		$('#logForms').addClass('unhide');
		logFormC = true;
	}
	else
	{
		$('#logForms').removeClass('unhide');
		$('#logForms').addClass('hider');
		logFormC = false;
	}
}

//----------// RELOADER //------------------------------------------------------------------------------------------------//
function reloader()
{
	$('body').fadeOut(1000,function()	// Fade out everything, then run this function when done...
	{
        document.location.href='index.php';	// Reload the page
	});
}

//----------// PICK LOCATION //-------------------------------------------------------------------------------------------//
function pickLoc(clicked)
{
	$('#pickLoc .button').removeClass('selected');
	$('#'+clicked).addClass('selected');
}

//----------// SAVE //----------------------------------------------------------------------------------------------------//
function save(clicked)
{
	var radio = $('input:radio[name=theSys]:checked').val();
	middleman('update',clicked,thePlace,userID); // [main] Update the location corrosponding to the CLICKED button
	middleman('update','system',radio,userID); // [main] Update the user's prefered temperature SYSTEM
}

//----------// UP BUTTON //-----------------------------------------------------------------------------------------------//
function upButton()
{
	$('#weather').fadeOut(1000,function()	// Fade out the WEATHER page, then...
	{
		bypass = true;
		weatherPlace = fav1;
		getWeather();
	});
}

//----------// LEFT BUTTON //---------------------------------------------------------------------------------------------//
function leftButton()
{
	$('#weather').fadeOut(1000,function()	// Fade out the WEATHER page, then...
	{
		$("#rad"+system).attr('checked','checked');//...autoselect the radio button corrosponding to the temp system...
		$('#settingsMenu').fadeIn(1000);		//...fade in the SETTINGS menu...
		$('#rBack').fadeTo(800,0.25);			//...and lower the opacity of the BACK button
	});

	var clicked = 'default';				// Since DEFAULT is already selected, pretend it was clicked

	$('#pickLoc .button').each(function()	// For every BUTTON in under PICK LOCATION...
    {
        $(this).click(function()				// Run this function on click:
        {
        	clicked = $(this).attr("id");			// Say that the button was clicked
            pickLoc(clicked);						// Make that button PICK LOCATION
        });
    });

	$('#save').click(function()				// When SAVE is clicked...
	{
		save(clicked);							//...SAVE the CLICKED location button and the other settings
	});
}

//----------// RIGHT BUTTON //---------------------------------------------------------------------------------------------//
function rightButton()
{
	$('#weather').fadeOut(1000,function()	// Fade out the WEATHER page, then...
	{
		$('#infoPage').fadeIn(1000);
		$('#lBack').fadeTo(800,0.25);			//...and lower the opacity of the BACK button

	});
}
//----------// DOWN BUTTON //---------------------------------------------------------------------------------------------//
function downButton()
{
	$('#weather').fadeOut(1000,function()	// Fade out the WEATHER page, then...
	{
		bypass = true;
		weatherPlace = fav2;
		getWeather();
	});
}

//----------// UP BACK //-------------------------------------------------------------------------------------------------//
function upBack()
{
	$('#weather').fadeOut(1000,function()	// Fade out the WEATHER page, then...
	{
		bypass = true;
		weatherPlace = thePlace;
		getWeather();
	});
}

//----------// LEFT BACK //-----------------------------------------------------------------------------------------------//
function leftBack()
{
	$('#infoPage').fadeOut(1000,function()	// Fade out the current page, then run this function:
	{
		weatherflow();								// [main] Check user state, then run WEATHERFLOW
		$('#weather').fadeIn(1000);					// Fade in the WEATHER page
	})
}	

//----------// RIGHT BACK //----------------------------------------------------------------------------------------------//
function rightBack()
{
	$('#settingsMenu').fadeOut(1000,function()	// Fade out the current page, then run this function:
	{
		weatherflow();								// [main] Check user state, then run WEATHERFLOW
		$('#weather').fadeIn(1000);					// Fade in the WEATHER page
	})
}

//----------// DOWN BACK //-----------------------------------------------------------------------------------------------//
function downBack()
{
	$('#weather').fadeOut(1000,function()	// Fade out the WEATHER page, then...
	{
		bypass = true;
		weatherPlace = thePlace;
		getWeather();
	});
}