
//#### POCKET WATCH ####////////////////////////////////////////////////////////////////////////////////////////////////////

//----------// COPYRIGHT DATE //------------------------------------------------------------------------------------------//
function copydate()
{
	var oldDate = 2013; 							// Year website was started
	var nowDate = today.getFullYear();				// Current year
	if (nowDate > oldDate)							// If the current year is different than the start year
	{
		$('.year').html(oldDate+'&ndash;'+nowDate);	// ...display OLDDATE-NOWDATE
	}
	else											// Otherwise
	{
		$('.year').html(oldDate);					// Just display OLDDATE
	}
}

//----------// CLOCK //---------------------------------------------------------------------------------------------------//
function clock()
{
	// Store all months of the year
	var monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	// Store all days of the week
	var dayArray   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	
	var wday = today.getDay();		// Weekday
	var nday = today.getDate();		// Numeric day (date)
	var mnth = today.getMonth();	// Month
	
	// Output the day, date, month and year (and make date double-digit, if it's not) 
	$('.date').html(dayArray[wday]+"|"+monthArray[mnth]+'|'+((nday < 10 ? "0":"")+nday));
	
	// Set SECONDS
	setInterval(function()
	{
		// Create a newDate() object and extract the seconds of the current time
		var seconds = new Date().getSeconds();
		// Add a leading zero to seconds value if needed, then display seconds
		$(".sec").html((seconds < 10 ? "0":"")+seconds);
	},1000);
	
	// Set MINUTES
	setInterval(function()
	{
		// Create a newDate() object and extract the minutes of the current time
		var minutes = new Date().getMinutes();
		theMin = minutes;
		// Add a leading zero to minutes value if needed, then display minutes
		$(".min").html((minutes < 10 ? "0":"")+minutes);
    },1000);

	// Set HOURS
	setInterval(function()
	{
		// Create a newDate() object and extract the hours of the current time
		var hours = new Date().getHours();
		theHour = hours;
		// AM/PM variable (default AM)
		var xm    = "AM";

		// Make sure the 12 o' clocks are right
		if(hours >= 12 && hours != 24)
		{
			xm = "PM";
		}

		// Change to 12hr clock
		if(hours > 12)
		{
			hours = hours-12;
			today.setHours(hours);
		}

		// Display
		$(".hours").html(hours);
		$('.xm').html(xm);
		$('.time').html($('.clock .hider').text());
    },1000);
}