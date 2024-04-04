let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    //playField: document.getElementById("playField")
};

const setup = () => {
    document.getElementById("start").addEventListener("click", start);
}

const start = () => {
    removeButton();

    let playField = document.getElementById("playField");
    let image = getRandomImage();

    //playField.appendChild(image);
    image.addEventListener("click", newImage);
    changePosition();
}

const getRandomImage = () => {
    let playField = document.getElementById("playField");

    let random = Math.round(Math.random() * (global.IMAGE_COUNT-1));
    let image = document.createElement("img");
    image.src = `${global.IMAGE_PATH_PREFIX}${random}${global.IMAGE_PATH_SUFFIX}`;
    image.id = "target";
    playField.appendChild(image);
    return image;
}

const newImage = () => {
    let playField = document.getElementById("playField");
    let target = document.getElementById("target");
    playField.removeChild(target);
    getRandomImage();
}

const changePosition = (target) => {
    let playField = document.getElementById("playField");
    target = document.getElementById("target");
    let maxLeft = playField.clientWidth - target.offsetWidth;
    let maxHeight = playField.clientHeight - target.offsetHeight;

    let left = Math.round(Math.random() * maxLeft);
    let top = Math.round(Math.random() * maxHeight);

    target.style.left = left + "px";
    target.style.top = top + "px";
}

const removeButton = () => {
    let button = document.getElementById("start").outerHTML = "";
}




window.addEventListener("load", setup);


