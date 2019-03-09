
//#### AUTOCOMPLETE ####////////////////////////////////////////////////////////////////////////////////////////////////////

var acResult = []; // Storage for autocomplete array

$("#autocomplete").keyup(function()
{
	// INPUT is whatever is inside the AUTOCOMPLETE box (made url safe)
	var input  = encodeURIComponent($("#autocomplete").val());
	// THE URL used to query the WU AC API
	var theURL = "//autocomplete.wunderground.com/aq?query="+input+"&cb=tornado";

	$.ajax(
	{
		url:theURL,			// URL is THE URL
		dataType:"JSONP"	// DATA is in JSONP format
	});
});

//----------// CALLBACK: TORNADO //---------------------------------------------------------------------------------------//
function tornado(theResult)
{
	// Clear AC RESULT
	acResult = [];
	
	// For every item in the returned RESULTS...
	for(var i=0; i < theResult.RESULTS.length; i++)
	{
		// Throw these objects into the AC RESULTS
		acResult.push(
		{
			label:theResult.RESULTS[i].name,// ...and store the NAME in LABEL
			locate:theResult.RESULTS[i].zmw	// ...and store the LINK ADDRESS in LOCATE
		});
		
	}
	
	// Autocomplete the AUTOCOMPLETE form
	$("#autocomplete").autocomplete(
	{
		source:acResult,// Display everything in the AC RESULT...
		minLength:1,	//... but only if 1+ characters have been typed
		select: function(event,ui)
		{
			thePlace = '/q/zmw:'+ui.item.locate;
		}
	});
}
