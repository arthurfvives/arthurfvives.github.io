const setup = () => {
    let p = document.getElementById("abc");

    let elementNode = p.nodeName;
    let textNode = p.childNodes[0].nodeValue;
    console.log(elementNode);
    console.log(textNode);
}
window.addEventListener("load", setup);