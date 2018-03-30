$(document).ready(function() {

	// menu responsive
	var btn = document.querySelector(".logoMenu");
	var nav = document.querySelector(".nav");

	btn.onclick = function() {
		nav.classList.toggle("nav_open");
	}

});


