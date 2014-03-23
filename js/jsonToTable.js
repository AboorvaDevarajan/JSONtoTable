(function ( $ ) 
{
	//Method for getting the input data
	Model = {
		jsonInput : {}, 
	    	setData : function(inputUrl){
		var jsonInput;
		 $.getJSON(inputUrl, function (result) {
		    //alert(JSON.stringify(result));
	 	jsonInput=result;  
		});
		//stub for testing
		this.jsonInput = '{"EventDetails":[{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"},{"eventDate":"1994-11-05","eventName":"Event Test1","eventDesc":"sample description sample description sample description sample description sample descriptionsample description"}]}';
	    }  
	}
	View = {
	    jsonParsed :"",
	    parseModelData:function(json)
	    {
	    	var json_parsed = $.parseJSON(json);
		var EventsParsed=json_parsed.EventDetails;
		var tempHTML = '<table id="jsonTable" class="bordered"><thead>';
		tempHTML += '<tr>';
		tempHTML += '<th>Event Date</th>';
		tempHTML += '<th>Event Name </th>';
		tempHTML +='</tr>';
		tempHTML += '</thead>';
		for (var u = 0; u < EventsParsed.length; u++){
		var Events = EventsParsed[u];
		tempHTML+="<tr id='eventRow'"+u+" name='eventRow'"+u+">";	
		tempHTML += "<td >" + Events.eventDate + "</td><td class='eventNameClass' id='event'"+u+">" + Events.eventName + "</td>"; 
		tempHTML+='</tr>';
		tempHTML+='<tr class="hidden">';
		tempHTML+='<td colspan="2"> '+ Events.eventDesc + '</td>'
		tempHTML+='</tr>';
		}
		tempHTML += '</tbody></table>'; 
		 this.jsonParsed=tempHTML;
		},
		 getParsedData : function(){
		return this.jsonParsed;
	    }
	}
	// view  for displaying the table data 
	$.fn.ConvertJsonToTable = function( ) {
	// This is the easiest way to have default options.
	Model.setData('');
	//alert(Method.jsonInput);
	var json=Model.jsonInput;
	View.parseModelData(json);
	var htmlOutput=View.getParsedData() ;
	this.append(htmlOutput);                                           
	};
	$(document).on("click",".eventNameClass",function() {
		$(this).parent().next().toggleClass('hidden',5000);
	    });
}( jQuery ));
