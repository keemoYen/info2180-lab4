"use strict";

window.onload =function(){
	var myButton = document.querySelector("button");
	var httpRequest;
	
	myButton.onclick = function(element){
		element.preventDefault();
		
		httpRequest = new XMLHttpRequest();
		
		var url = 'superheroes.php';
		httpRequest.onreadystatechange = loadHeroes;
		httpRequest.open('GET',url);
		httpRequest.send();
	};
	
	function loadHeroes(){
		if(httpRequest.readyState === XMLHttpRequest.DONE){
			if(httpRequest.status=== 200){
				var response = httpRequest.responseText;
				//var qoute = document.querySelector(#qoute)
				window.alert(response);
			}
		}
	}
	
}