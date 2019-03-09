
//#### MAGIC BOOK ####//////////////////////////////////////////////////////////////////////////////////////////////////////

//----------// MAGIC //---------------------------------------------------------------------------------------------------//
function magic()
{
	xactMin = ((theHour*60)+theMin);

	if(xactMin  > (sunrise+60) && xactMin < (sunset-60))
	{
		$('#bg').removeClass('sunrise');
		$('#bg').addClass('daytime');
	}
	else if(xactMin > (sunset+60) || xactMin < (sunrise-60))
	{
		$('#bg').removeClass('sunset');
		$('#bg').addClass('nighttime');
	}
	else if(xactMin >= (sunrise-60) && xactMin <= (sunrise+60))
	{
		$('#bg').removeClass('nighttime');
		$('#bg').addClass('sunrise');
	}
	else if(xactMin >= (sunset-60) && xactMin <= (sunset+60))
	{
		$('#bg').removeClass('daytime');
		$('#bg').addClass('sunset');
	}

	astrology();
}

//----------// EQUINOX //-------------------------------------------------------------------------------------------------//
function equinox()
{
	//** Change this to dynamically update seasonally, not based on temp **//
	if(system == 'C')
	{
		var inDeg = temp;
	}
	else if(system == 'F')
	{
		var inDeg = ((temp-32)*(5/9));
	}
	else if(system == 'K')
	{
		var inDeg = (temp-273.15);
	}

	$('.tree').removeClass('spring','summer','fall','winter');

	if(temp < 10 || temp >= 40)
	{
		$('.tree').addClass('winter');
	}
	else if(temp >= 10 && temp < 25)
	{
		$('.tree').addClass('spring');
	}
	else if(temp >= 25 && temp < 40)
	{
		$('.tree').addClass('summer');
	}
}

//----------// ASTROLOGY //-----------------------------------------------------------------------------------------------//
function astrology()
{
	var winH = $(theWindow).height();				// Height of the user's screen

	var daylength = (sunset-sunrise);				// Number of HOURS the sun is visible
	var noon      = (sunrise+(daylength*0.5)); 		// What time is the sun at it's apex?

	var sunStart = 0;								// Position the SUN will rise from
	var sunMid   = (winH-25);						// Position the SUN will be at noon
	var sunArc   = (sunMid-sunStart);				// Number of pixels the sun must travers to reach it's apex

	var sunPos = ((xactMin*sunArc)/noon)+sunStart;

	if(xactMin > noon)
	{
		sunPos = (sunPos - sunArc)+sunStart;
		$('.sun').css('top',sunPos);
		$('.sunPos').css('top',(sunPos+20));
	}
	else
	{
		$('.sun').css('bottom',sunPos);
		$('.sunPos').css('bottom',(sunPos+20));
	}

	$('.sunPos').html(Math.round(sunPos));

	/*if(xactMin > (sunset+61) || xactMin < (sunrise-61))
	{
		$('.sun').addClass('hider');
	}*/
}