function prepareForm() {
	var form = document.getElementsByTagName("form");
	form[0].addEventListener('submit',function(e) {
		e.preventDefault();
		var formData = "";
		formData += 'girlName=';
		formData += document.getElementById('girlName').value;
		formData += '&guyName=';
		formData += document.getElementById('guyName').value;
		formData += '&firstVerb=';
		formData += document.getElementById('firstVerb').value;
		formData += '&secondVerb=';
		formData += document.getElementById('secondVerb').value;
		formData += '&firstNoun=';
		formData += document.getElementById('firstNoun').value;
		formData += '&thirdVerb=';
		formData += document.getElementById('thirdVerb').value;
		formData += '&place=';
		formData += document.getElementById('place').value;
		formData += '&fourthVerb=';
		formData += document.getElementById('fourthVerb').value;
		formData += '&secondNoun=';
		formData += document.getElementById('secondNoun').value;
		formData += '&adjective=';
		formData += document.getElementById('adjective').value;
		formData += '&thirdNoun=';
		formData += document.getElementById('thirdNoun').value;
		formData += '&submit=';
		formData += document.getElementById('submit').value;
		setupRequest(formData);

		//FORM VALIDATION CHANGES BORDER COLOR FOR EMPTY FIELDS
		if (!document.getElementById('girlName').value)
		{
			document.getElementById('girlName').style.borderColor="red";
		}
		else
		{
			document.getElementById('girlName').style.borderColor="black";
		}

		if (!document.getElementById('guyName').value)
		{
			document.getElementById('guyName').style.borderColor="red";
		}
		else
		{
			document.getElementById('guyName').style.borderColor="black";
		}

		if (!document.getElementById('firstVerb').value)
		{
			document.getElementById('firstVerb').style.borderColor="red";
		}
		else
		{
			document.getElementById('firstVerb').style.borderColor="black";
		}

		if (!document.getElementById('secondVerb').value)
		{
			document.getElementById('secondVerb').style.borderColor="red";
		}
		else
		{
			document.getElementById('secondVerb').style.borderColor="black";
		}

		if (!document.getElementById('firstNoun').value)
		{
			document.getElementById('firstNoun').style.borderColor="red";
		}
		else
		{
			document.getElementById('firstNoun').style.borderColor="black";
		}

		if (!document.getElementById('thirdVerb').value)
		{
			document.getElementById('thirdVerb').style.borderColor="red";
		}
		else
		{
			document.getElementById('thirdVerb').style.borderColor="black";
		}

			if (!document.getElementById('place').value)
		{
			document.getElementById('place').style.borderColor="red";
		}
		else
		{
			document.getElementById('place').style.borderColor="black";
		}

		if (!document.getElementById('fourthVerb').value)
		{
			document.getElementById('fourthVerb').style.borderColor="red";
		}
		else
		{
			document.getElementById('fourthVerb').style.borderColor="black";
		}

		if (!document.getElementById('secondNoun').value)
		{
			document.getElementById('secondNoun').style.borderColor="red";
		}
		else
		{
			document.getElementById('secondNoun').style.borderColor="black";
		}

		if (!document.getElementById('adjective').value)
		{
			document.getElementById('adjective').style.borderColor="red";
		}
		else
		{
			document.getElementById('adjective').style.borderColor="black";
		}

		if (!document.getElementById('thirdNoun').value)
		{
			document.getElementById('thirdNoun').style.borderColor="red";
		}
		else
		{
			document.getElementById('thirdNoun').style.borderColor="black";
		}
	});
}

function setupRequest(formData) {
	var xhr = new XMLHttpRequest();

	if(xhr) {
		xhr.onreadystatechange = function() {
			displayResponse(xhr);
		}
		xhr.open('POST', 'returnMadlib.php', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(formData);
	}
}
			
function displayResponse(xhr) {
	if(xhr.readyState == 4) {
		if((xhr.status == 200) || (xhr.status == 304)) {
			var p = document.getElementById('response');
			p.innerHTML = xhr.responseText;
		}
	}
}

window.onload = prepareForm;