/*
	lab.js

	created by: Joe Kamibeppu
	created on: March 9, 2016
*/ 

function parse() {

	request = new XMLHttpRequest();

	request.open("GET", "data.json", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {

			var messages = JSON.parse(request.responseText);
			
			document.getElementById("messages").innerHTML = 
			messages[0].content + "\xa0" + messages[0].username + "<br>" 
			+ "<br>" + 
			messages[1].content + "\xa0" + messages[1].username + "<br>";
		}
	}

	request.send();
}