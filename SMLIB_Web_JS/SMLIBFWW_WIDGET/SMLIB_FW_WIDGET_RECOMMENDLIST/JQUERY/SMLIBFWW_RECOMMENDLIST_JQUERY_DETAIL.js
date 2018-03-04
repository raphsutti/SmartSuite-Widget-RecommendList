$(document).ready(function(){
	// console.log(id)
	$("#output").prepend(
		"<h1>" + localStorage.title + "</h1>" +
		"<h2>Author: " + localStorage.author + "</h2>" +
		"<img src='" + localStorage.cover + "' class='mainimg'>" +
		"<p>Media: " + localStorage.media + "</p>" +
		"<p>Location: " + localStorage.location + "</p>" +
		"<p>Sublocation: " + localStorage.sublocation + "</p>" +
		"<p>isbn: " + localStorage.isbn + "</p>" +
		"<p>Available copy: " + localStorage.availablecopy + "</p>"
		);

})
