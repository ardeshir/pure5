"use strict";

function App() {
	var version = "v0.1";
	
	function setStatus(message) {
		$("#app>footer").text(message);
	} // end of set Status

	this.start = function() {
		$("#app>header").append(version);

		setStatus("ready...");
	}; 

} // end of App

$(function() {
	window.app = new App();
	window.app.start();
});
