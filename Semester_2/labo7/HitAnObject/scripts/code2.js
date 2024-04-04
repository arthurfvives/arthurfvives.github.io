let global = {
	IMAGE_COUNT: 5, // aantal figuren
	IMAGE_SIZE: 48, // grootte van de figuur
	IMAGE_PATH_PREFIX: "images/", // map van de figuren
	IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
	MOVE_DELAY: 1500, // aantal milliseconden voor een nieuwe afbeelding verschijnt
	score: 0, // aantal hits
	timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
	deleteTarget();
	addStartBtn();

}

const start = () => {
	removeStartBtn();
	moveInterval();
}

const moveInterval = () => {
	global.timeoutId = setInterval(move, global.MOVE_DELAY);
}

const removeStartBtn = () => {
	document.getElementById("start").outerHTML = "";
}

const addStartBtn = () => {
	let button = document.createElement("button");
	button.id = "start";
	button.innerHTML = "START";
	document.getElementById("playField").appendChild(button);
	document.getElementById("start").addEventListener("click", start);
}

const move = () => {
	let target = document.getElementById("target");
	let speelScherm = document.getElementById("playField");

	let maxLeft = speelScherm.clientWidth - global.IMAGE_SIZE;
	let maxTop = speelScherm.clientHeight - global.IMAGE_SIZE;
	let nummer = Math.floor(Math.random() * global.IMAGE_COUNT);

	if (nummer === 0) {
		target.className = "bom";
	} else {
		target.className = "";
	}

	target.style.visibility = "visible";
	target.src = `${global.IMAGE_PATH_PREFIX}${nummer}${global.IMAGE_PATH_SUFFIX}`;

	let left=Math.floor(Math.random() * maxLeft);
	let top=Math.floor(Math.random() * maxTop);
	target.style.left = left + "px";
	target.style.top = top + "px";

	target.addEventListener("click", deleteTarget);
	target.addEventListener("click", updateGame);
}

const deleteTarget = () => {
	let target = document.getElementById("target");
	target.style.visibility = "hidden";
}

const bomAlert = () => {
	alert("Het spel is afgelopen. Je klikte op de bom.");
	global.score = 0;
}

const updateHits = () => {
	document.getElementById("hits").innerHTML = `Aantal hits ${global.score}`;
}

const updateGame = (e) => {
	if(e.target.className === "bom") {
		bomAlert()
		clearInterval(global.timeoutId);
		addStartBtn();
		document.getElementById("hits").innerHTML = `Aantal hits ${global.score}`;
	} else {
		global.score++;
		updateHits();
	}
}

window.addEventListener("load", setup);