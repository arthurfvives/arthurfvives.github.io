const setup = () => {
    // selecting node
    let p = document.getElementById("para");
    // get node name and node type
    console.log(p.nodeName, p.nodeType);

    // get node name and note type of child node
    console.log(p.firstChild.nodeName, p.firstChild.nodeType);

    console.log(p.firstElementChild, p.firstElementChild.nodeType);
    // get node name and note type of next sibling
    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType);
}
window.addEventListener("load", setup);