$(document).ready(function(){
	var url = "http://vcld.fsdcmel.librarysolutions.com.au/VCLD_FS_TEST/SmartLibrary/Services/Search/SMLIB_SERVICE_SEARCH.asmx/GetRecommendList";
	$.ajax({
			type:"GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
				// count
				// console.log(data.count);
				// // book1
				// console.log(data.items[0]);
				// // book2
				// console.log(data.items[1]);

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
				for (var i=0; i<data.items.length; i++) {

					// filter only available items
					if(parseInt(data.items[i].availablecopy) > 0){
						// result table
						$("#output").prepend(
							
							"<tr>"+
					            // "<a href=\"detail.html\" target=\"_blank\""+
					            "<th scope=\"row\"><img class=\"cover\" src=\""+data.items[i].cover+"\"></th>"+
					            "<td class='title'>"+data.items[i].title+data.items[i].availablecopy+"</td>"+
					        // "</a>"+
					        "</tr>"
					      
							);
					}
				}
			},
			error: function(errorMessage){
				alert("Error");
			}
		});
})
