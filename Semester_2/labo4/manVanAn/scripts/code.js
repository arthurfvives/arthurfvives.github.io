const setup = () => {
    document.getElementById("search").addEventListener("click", onClick);
}

const onClick = () => {
    let input = document.getElementById("txtTekst").value;
    let zoekInput = document.getElementById("txtZoek").value;

    let aantalKeer = 0;
    let index = input.indexOf(zoekInput);

    while (index !== -1) {
        aantalKeer++;
        index = input.indexOf(zoekInput, index + 1);
    }
    document.getElementById("tekst").innerHTML = `Het woord "${zoekInput}" zit er ${aantalKeer} keer in.`;
}


window.addEventListener("load", setup);