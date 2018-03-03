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
			// console.log(data.items);
			
			var bookNum;
			for (var i=0; i<data.items.length; i++) {
				// display grey colour if 0 available copy and red if >0
				if(parseInt(data.items[i].availablecopy) > 0){
					bookNum = "red"
				} else {
					bookNum = "grey"
				}
				// result table
				$("#output").prepend(
					
					"<tr class='clickable-row'>"+
			            "<th scope='row'><img class='cover' src='"+data.items[i].cover+"''></th>"+
			            "<td class='"+ bookNum +"'><a href='"+ data.items[i].bookid +"' target='_blank'>"+data.items[i].title+" "+data.items[i].availablecopy+"</a></td>"+
			        "</tr>"
					);
				$(".clickable-row").click(function() {
					console.log($(this).find("a").attr("href"))
					// window.location = $(this).find("a").attr("href") +".html";
				});
			}

		var lib = data.items
		console.log(lib)
		},
		error: function(errorMessage){
			alert("Error");
		}
	});
})
