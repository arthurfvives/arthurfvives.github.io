const setup = () => {
    let p = document.querySelectorAll("p");
    p[0].childNodes[0].nodeValue = "Good job!";
}
window.addEventListener("load", setup);