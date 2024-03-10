const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", onHover);
}

const onHover = () => {
    let img = document.getElementById("imgPhoto");
    let text = document.getElementById("txtText");

    img.src = "img/kat.jpg";
    img.alt = "cat";
    img.className = "size";
    text.innerHTML = "School of cats";
}

window.addEventListener("load", setup);