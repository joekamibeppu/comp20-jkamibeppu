/*
	lab.js

	created by: Joe Kamibeppu
	created on: March 9, 2016
*/ 

function parse() {

	var request = new XMLHttpRequest();
	var data = "data.json";

	request.open("GET", data, true);

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			var messages = JSON.parse(request.responseText);
			document.getElementById("messages").innerHTML = 
			messages[0].content + &nbsp + messages[0].username + "<br>" 
			+ "<br>" + 
			messages[1].content + "   " + messages[1].username + "<br>";
		}
	}

	request.send();

}