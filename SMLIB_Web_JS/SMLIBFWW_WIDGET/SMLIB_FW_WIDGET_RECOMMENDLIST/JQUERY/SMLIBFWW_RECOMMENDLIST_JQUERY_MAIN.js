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
				// Loop through all objects
				// for (var i=0; i<data.items.length; i++) {
				// 	$("#output").prepend("<li><a href= "+data.items[i].title+">"+data.items[i].title+"</a></li>"+
				// 		"<li>"+data.items[i].author+"</li>"+
				// 		"<img class=\"cover\" src= "+data.items[i].cover+">"+
				// 		"<br>"
				// 		);
				// }
				// sort data by availablecopy - ascending
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
							"<div class=\"row\">"+
					            "<div class=\"col-lg-2 col-sm-2\">"+
					                "<img class=\"cover\" src=\""+data.items[i].cover+"\">"+
					            "</div>"+
					            "<div class=\"col-lg-10 col-sm-10\">"+
									"<table class=\"table table-hover\">"+
										"<thead>"+
											"<tr>"+
											    "<th scope=\"col\" colspan=\"3\">"+data.items[i].title+"</th>"+
											"</tr>"+
											"</thead>"+
											"<tbody>"+
											"<tr>"+
											    "<th scope=\"row\">Author</th>"+
											    "<td>"+data.items[i].author+"</td>"+
											"</tr>"+
											"<tr>"+
											    "<th scope=\"row\">Media</th>"+
											    "<td>"+data.items[i].media+"</td>"+
											"</tr>"+
											"<tr>"+
											    "<th scope=\"row\">Book ID</th>"+
											    "<td>"+data.items[i].bookid+"</td>"+
											"</tr>"+
											"<tr>"+
											    "<th scope=\"row\">Available Copy</th>"+
											    "<td>"+data.items[i].availablecopy+"</td>"+
											"</tr>"+
										"</tbody>"+
									"</table>"+
								"</div>"
							);
					}
				}
			},
			error: function(errorMessage){
				alert("Error");
			}
		});
})
