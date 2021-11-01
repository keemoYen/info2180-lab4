"use strict";

window.onload =function(){
	var myButton = document.querySelector("button");
	var httpRequest;
	
	myButton.onclick = function(element){
		element.preventDefault();
		
		httpRequest = new XMLHttpRequest();
		var name = document.querySelector('#name').value;
		
		var url = 'superheroes.php';
		httpRequest.onreadystatechange = loadHeroes;
		httpRequest.open('POST',url);
		httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

		httpRequest.send('name='+ encodeURIComponent(name));
	};
	
	function loadHeroes(){
		if(httpRequest.readyState === XMLHttpRequest.DONE){
			if(httpRequest.status=== 200){
				var response = httpRequest.responseText;
				//var qoute = document.querySelector(#qoute);
				//window.alert(response);
				var display = document.querySelector('#display');
				display.innerHTML = response;
			}
		}
	}
	
}