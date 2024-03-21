const setup = () => {
    document.getElementById("btnToon").addEventListener("click", onClick);
}

const onClick = () => {
    let input = document.getElementById("txtTekst").value;
    for (let i = 0; i <= input.length - 3; i++) {
        document.getElementById("lstTrigrams").innerHTML += "<li>" + input.slice(i, i + 3) + "</li>";
    }
}

window.addEventListener("load", setup);