const setup = () => { // alle eventhandlers moeten in setup
    document.getElementById("btnTry").addEventListener("mouseover", mouseHover); // ("event", functie)
    document.getElementById("btnTry").addEventListener("click", onClick);
    document.getElementById("btnTry").addEventListener("mouseout", mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    document.getElementById("btnContent").addEventListener("click", changeContent);
}


const mouseHover = () => { // arrow notation ipv function (arrow notation is zelfde als functie)
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}

const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse clicked!<br>";
}

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse out!<br>";
}

const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li"); // zit in array
    for (let i = 0; i < listItems.length; i++) {
        // manier 1: listItems[i].style.listStyleType="none";
        // manier 2: listItems[i].className = "listItemsStyleNone";
        // manier 3:
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("listItemsStyleNone");
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li"); // zit in array
    for (let i = 0; i < listItems.length; i++) {
        // manier 1: listItems[i].style.listStyleType="disc";
        // manier 2: listItems[i].className = "listItemsStyleDisc";
        // manier 3:
        listItems[i].classList.add("listItemsStyleDisc");
    }
}

const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);