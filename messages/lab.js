function parse() {

	var request = new XMLHttpRequest();
	var data = "data.json";

	request.open("GET", data, true);

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			var lyrics = JSON.parse(request.responseText);
			document.getElementByID("lyrics").innerHTML =
			lyrics[0].content + lyrics[1].content;
		}
	}

	request.send();
}