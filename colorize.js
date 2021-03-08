"use strict";

function colorize() {
	const hue = Math.random();

	console.log(hue);

	//document.body.style.setProperty("--bg-color", "hsl(" + hue + "turn, 50%, 30%);");
	document.body.style.backgroundColor = "#f00"

	for (const box of document.getElementsByClassName("box")) {
		box.style.backgroundColor = "#0f0";
		box.style.color = "#00f";
	}
}