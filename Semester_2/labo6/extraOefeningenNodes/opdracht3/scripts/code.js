const setup = () => {
    document.getElementById("append").addEventListener("click", onClick);
    document.getElementById("no-append").addEventListener("click", noAppend);
}

const onClick = () => {
    let p = document.querySelector("p");
    let div = document.getElementById("myDIV");
    div.appendChild(p);
}

const noAppend = () => {
    let p = document.querySelector("p");
    let div = document.getElementById("myDIV");
    //div.removeChild(p);
    document.body.appendChild(p);
}
window.addEventListener("load", setup);