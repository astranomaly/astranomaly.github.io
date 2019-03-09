
//#### WEATHERMAN ####//////////////////////////////////////////////////////////////////////////////////////////////////////

//----------// GET WEATHER //---------------------------------------------------------------------------------------------//

function getWeather()
{
	if(auto == true)
	{
		// Use autoselect
		weatherPlace = "/q/autoip";
		//alert("auto is true");
	}
	// Use this URL
	var url = "//api.wunderground.com/api/"+apikey+"/geolookup/astronomy/conditions"+weatherPlace+".json";

	//----------// REQUEST DATA //----------------------------------------------------------------------------------------//
	// Send request to the requireed URL
	var request = $.ajax(
	{
  		url:url,
  		dataType:"JSONP"
	});
	
	//----------// SUCCESS //---------------------------------------------------------------------------------------------//
	//If request is completed successfully, run this.
    request.done(function(parsed_json)
	{
		// Store location, weather type, and icon
		weatherPlace = parsed_json['location']['l'];
        var location = parsed_json['location']['city'];
        var province = parsed_json['current_observation']['display_location']['state_name'];

		var weather  = parsed_json['current_observation']['weather'];
		var icon     = parsed_json['current_observation']['icon_url'];

		var sunriseH = parsed_json['moon_phase']['sunrise']['hour'];
		var sunriseM = parsed_json['moon_phase']['sunrise']['minute'];
		var sunsetH  = parsed_json['moon_phase']['sunset']['hour'];
		var sunsetM  = parsed_json['moon_phase']['sunset']['minute'];

		sunrise  = ((Number(sunriseH)*60)+Number(sunriseM));
		sunset   = ((Number(sunsetH)*60)+Number(sunsetM));
		
		if(approx == true)
		{
			// If approximation is TRUE, state how the temperature FEELS
			var temp_c = parsed_json['current_observation']['feelslike_c'];
		}
		else
		{
			// Otherwise, state how the temperature IS
			var temp_c = parsed_json['current_observation']['temp_c'];
		}
		
		tempConv(system,temp_c);	// Run temperature through system converter
		temp = Math.round(temp);	// Round to nearest whole number

		var deg = '&deg;';
		if(system == 'K'){deg =' ';}
		
		// Display this in THE RESULT
		$('.location').html(location);
		$('.province').html(province);
		$('.temp').html(temp+deg+system);
		$('.sun').attr("src",icon);
		equinox();

		if(bypass === false)
		{
			weatherIsLoaded();	// [main] Only run the rest of the code if the weather finishes
		}
		else
		{
			bypass === false;	// Don't bypass in the future, unless otherwise changed
			fadeIn();
		}
    });
	
	//----------// FAIL //------------------------------------------------------------------------------------------------//
	//If request is completly botched, run this.
    request.fail(function()
	{
		$('#error').css('visibility','visible');
		$('#error').html('Unable to show data!');
		$('body').show();
    });
	return "waiting";
}

//----------// TEMP CONVERT //--------------------------------------------------------------------------------------------//
function tempConv(to,deg)
{
	if(to == "C")
	{
		// Leave as Celsius
		temp = deg;
	}
	else if(to == "F")
	{
		// Convert Celsius to Fahrenheit
		temp = ((9/5)*deg)+32;
	}
	else if(to == "K")
	{
		// Convert Celsius to Kelvin
		temp = (deg*1)+273.15;
	}
}
