const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	document.getElementById("save").addEventListener("click", save);
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	let bgColor = "rgb("+red+","+green+","+blue+")";
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor=bgColor;
	return bgColor;
}

const save = () => {
	let element = document.createElement("div");
	element.setAttribute("class", "swatch");
	element.style.backgroundColor = update();
	element.style.borderRadius = "0";
	element.style.cursor = "pointer";

	let deleteBtn = document.createElement("div");
	deleteBtn.setAttribute("class", "delete");
	deleteBtn.textContent = "X";
	document.body.appendChild(element);
	element.appendChild(deleteBtn);

	deleteBtn.addEventListener("click", removeDiv);
	element.addEventListener("click", applyColor);
}

const removeDiv = (event) => {
	let swatch = event.target.parentNode;
	swatch.parentNode.removeChild(swatch);
}

const applyColor = (event) => {
	let divStyle = event.target.style.backgroundColor;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor = divStyle;
}


window.addEventListener("load", initialize);