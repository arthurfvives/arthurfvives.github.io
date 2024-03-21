const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", onClick);
}

// Gisteren zat de jongen op de stoep en at de helft van de appel
const onClick = () => {
    let input = document.getElementById("txtTekst").value;
    let zoekWaarde = "de";
    let vervangWaarde = "het";

    let index = input.indexOf(zoekWaarde);
    while (index !== -1) {
        let de = input.slice(index, 2);
        de = vervangWaarde;
        input = input.slice(0, index) + vervangWaarde + input.slice(index+2);
        index = input.indexOf(zoekWaarde, index + 1);
    }
    console.log(input);
}

/*const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let index = result.indexOf(oud);
    while (index !== -1) {
        let voor = result.slice(0, index);
        let na = result.slice(index + oud.length, result.length);

        result = voor + nieuw + na;

        index = result.indexOf(oud, index + nieuw.length)
    }
    return result;
}*/

window.addEventListener("load", setup);