
//#### PRE INIT ####////////////////////////////////////////////////////////////////////////////////////////////////////////

var today     = new Date();			// Get current date
var theHour   = today.getHours();	// Get current hour
var theMin    = today.getMinutes();	// Get current minute
var apikey    = "466a386ffb6e6318";	// WeatherUnderground API key
var system    = "C";				// Requested temperature system (default C)
var approx    = true;				// Actual or relative temperature (default rel)
var auto      = true;				// Auto or Manual location selection (default auto)
var logged    = false;				// Is the user logged in? (default false)
var logFormC  = false;				// Was the login form button clicked? (default no)
var bypass    = false;				// Bypass displaying the main weather page? (default no)
var theWindow = $(window);			// Oh look, the WINDOW is now a variable
var acResult  = [];					// Global storage for autocomplete array
var weatherPlace;					// Global storage for the location currently displayed
var thePlace;						// Global storage for location code
var fav1;							// Global storage for favourite 1
var fav2;							// Global storage for favourite 2
var theResult;						// Global storage for JSON request result
var temp;							// Global storage for temperature
var sunrise;						// Global storage for SUNRISE minute
var sunset;							// Global storage for SUNSET minute
var xactMin;						// Global storage for the time, in minutes


//#### INITIALIZATION ####//////////////////////////////////////////////////////////////////////////////////////////////////

$(function()
{
	$('body').hide();		// Hide everything to fade in later
	$('#settingsMenu').hide();// Hide the SETTINGS MENU
	$('#infoPage').hide();	// Hide the INFO PAGE

	copydate();				// [pocketwatch] Run COPYDATE function
	clock();				// [pocketwatch] Set up CLOCK
	weatherflow();			// Set up the WEATHERFLOW
});

//#### MISC FUNCTIONS ####//////////////////////////////////////////////////////////////////////////////////////////////////

//----------// WEATHERFLOW //---------------------------------------------------------------------------------------------//
function weatherflow()
{
	if(logged === true)			// If the user is logged in
	{
		$.getJSON(
			"//astranomaly.com/twib/php/handle_db.php",
			{
				task:'select',		// Run a SELECT query..
				subj:'default',		//..to find the default location..
				from:userID			//..of the logged-in user
			},
			function(json)			// Get the requested data
			{
				theResult = json.data.result;	// Store the default location in THE RESULT
				theFav1   = json.data.fav1;		// Store the first fav in THE FAV 1
				theFav2   = json.data.fav2;		// Store the first fav in THE FAV 2
				system    = json.data.sys;		// Change the SYSTEM to the returned sys

				if(theFav1!=""){fav1=theFav1;}else{fav1='empty';}	// Store the first fav
				if(theFav2!=""){fav2=theFav2;}else{fav2='empty';}	// Store the second fav

				if(theResult != "")				// If the user has a default location..
				{
					auto = false;					//..don't use auto select..
					thePlace = theResult;			//..and change THE PLACE to the JSON RESULT
					weatherPlace = theResult;		//..and change the displayed WEATHER to the JSON result
					getWeather();					// [weatherman] Run GET DATA function to get weather info
				}
				else
				{
					auto = true;					// If there is no result, use autoselect
					getWeather();					// [weatherman] Run GET DATA function to get weather info
				}
			}
		);
	}
	else
	{
		getWeather();				// [weatherman] Run GET DATA function to get weather info
	}
}

//----------// WEATHER IS LOADED //---------------------------------------------------------------------------------------//
function weatherIsLoaded()
{
	magic();							// [magicbook] dynamically update the page graphics with MAGIC
	setInterval(magic,5*1000);			// [magicbook] Run MAGIC every so often
	setInterval(reloadWeather,5*60000);

	if(logged === false)				// If the user isn't logged in..
	{
		$('.main').hide();					//..hide the MAIN menu
	}
	else if(logged === true && auto === true)
	{
		middleman('update','default',thePlace,userID); // Update the default location
	}

	$('nav .button').hover(function()
	{
		// When any NAV BUTTON is hovered bring its opacity back to 100%
		$(this).fadeTo(800,1);
	},
	function()
	{
		// When the button is unhovered fade it out to a predetermined level
		$(this).fadeTo(800,0.25);
	});

	if(fav1=='empty'){$('#up').hide();}
	if(fav2=='empty'){$('#down').hide();}

	$('.hideContain p').click(hider);	// [click] Run the HIDER function
	$('.title').click(reloader);		// [click] Run the RELOADER function
	$('#up').click(upButton);			// [click] Run the UP BUTTON function
	$('#down').click(downButton);		// [click] Run the DOWN BUTTON function
	$('#left').click(leftButton);		// [click] Run the LEFT BUTTON function
	$('#right').click(rightButton);		// [click] Run the RIGHT BUTTON function
	$('#uBack').click(upBack);			// [click] Run the UP BACK function
	$('#dBack').click(downBack);		// [click] Run the DOWN BACK function
	$('#lBack').click(leftBack);		// [click] Run the LEFT BACK function
	$('#rBack').click(rightBack);		// [click] Run the RIGHT BACK function

	resizeBg();
	biggify();
	setInterval(biggify,1000);
}

//----------// RELOAD WEATHER //------------------------------------------------------------------------------------------//
function reloadWeather()
{
	bypass = true;
	getWeather();
}

//----------// MIDDLEMAN //-----------------------------------------------------------------------------------------------//
function middleman(theTask,theSubj,theVal,isFrom)
{
	$.post(
		"//astranomaly.com/twib/php/handle_db.php",
		{
			task:theTask,	// What are you trying to do?
			subj:theSubj,	// What are you doing it to?
			is_a:theVal,	// What value is being sent?
			from:isFrom		// What user is sending it?
		}
	);
}

//----------// RESIZE BACKGROUND //---------------------------------------------------------------------------------------//
function resizeBg()
{
	navPosition('#up');		// Position the UP button
	navPosition('#left');	// Position the LEFT button
	navPosition('#right');	// Position the RIGHT button
	navPosition('#down');	// Position the DOWN button
	navPosition('#uBack');	// Position the DOWN button
	navPosition('#lBack');	// Position the DOWN button
	navPosition('#rBack');	// Position the DOWN button
	navPosition('#dBack');	// Position the DOWN button

	$('.bigtext').bigtext(); // Make some BIG TEXT

	var winH = $(theWindow).height();
	$('#bg').css('height',winH)

	fadeIn();
}

// Trigger a RESIZE event when THE WINDOW is RESIZE'd
theWindow.resize(function(){resizeBg();}).trigger("resize");

//----------// NAV POSITION //--------------------------------------------------------------------------------------------//
function navPosition(aNav)
{
	var navBtn = $(aNav);

	if(aNav == '#up' || aNav == '#down' || aNav == '#uBack' || aNav == '#dBack')
	{
		var navPos = ($(document).width()/2)-(navBtn.width()/2);
		navBtn.css({left:navPos});
	}
	else if(aNav == '#left' || aNav == '#right' || aNav == '#rBack' || aNav == '#lBack')
	{
		var navPos = ($(document).height()/2)-(navBtn.height()/2);
		navBtn.css({top:navPos});
	}
}

//----------// FADE IN //-------------------------------------------------------------------------------------------------//
function fadeIn()
{
	$('.main .button').hide();

	$('body').fadeIn(1000,function()
	{
		$('#weather').fadeIn(1000);
		if(weatherPlace == thePlace)
		{
			if(fav1!='empty'){$('#up').fadeTo(800,0.25);}
			if(fav2!='empty'){$('#down').fadeTo(800,0.25);}

			$('#left').fadeTo(800,0.25);
			$('#right').fadeTo(800,0.25);
		}
		else
		{
			if(weatherPlace == fav1)
			{
				$('#dBack').fadeTo(800,0.25);
			}
			else if(weatherPlace == fav2)
			{
				$('#uBack').fadeTo(800,0.25);
			}
		}
	});
}

//----------// BIGGIFY //-------------------------------------------------------------------------------------------------//
function biggify()
{
	$('.bigtext').bigtext(); // Make some BIG TEXT
}
