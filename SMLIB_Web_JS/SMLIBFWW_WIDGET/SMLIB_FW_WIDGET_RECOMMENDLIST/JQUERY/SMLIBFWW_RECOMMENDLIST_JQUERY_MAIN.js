$(document).ready(function(){
	var url = "http://vcld.fsdcmel.librarysolutions.com.au/VCLD_FS_TEST/SmartLibrary/Services/Search/SMLIB_SERVICE_SEARCH.asmx/GetRecommendList";
	$.ajax({
			type:"GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){

				// Reset table to blank
				$("#output").html("");

				var sorted = data.items.sort(function (a, b) {
    				if (a.availablecopy > b.availablecopy) {
      					return -1;
      				}
    				if (a.availablecopy < b.availablecopy) {
     					 return 1;
     				}
    				return 0;
    			});
				console.log(data.items);
				var bookNum;
				for (var i=0; i<data.items.length; i++) {
					if(parseInt(data.items[i].availablecopy) > 0){
						bookNum = "red"
					} else {
						bookNum = "grey"
					}
					// filter only available items
					// result table
					$("#output").prepend(
						
						"<tr>"+
				            // "<a href=\"detail.html\" target=\"_blank\""+
				            "<th scope=\"row\"><img class=\"cover\" src=\""+data.items[i].cover+"\"></th>"+
				            "<td class='"+ bookNum +"'>"+data.items[i].title+" "+data.items[i].availablecopy+"</td>"+
				        // "</a>"+ 
				        "</tr>"
				      
						);
				}
			},
			error: function(errorMessage){
				alert("Error");
			}
		});
})
