const setup = () => {
    document.getElementById("selStaat").addEventListener("change", kipStaat);
    document.getElementById("txtLetter").addEventListener("input", tellenLetters);
}

const kipStaat = () => {
    let staatOptions = document.getElementById("selStaat").options;
    let img = document.getElementById("img");
    let note = document.getElementById("note");
    if (staatOptions[1].selected) {
        img.className = "";
        img.innerHTML = `<img src="img/with-egg.png" alt="Met ei">`;
        note.innerHTML = "Hierboven, een kip met een ei";
    }
    if (staatOptions[2].selected) {
        img.className = "";
        img.innerHTML = `<img src="img/without-egg.png" alt="Zonder ei">`;
        note.innerHTML = "Hierboven, een kip zonder een ei";
    }
}

const tellenLetters = () => {
    let input = document.getElementById("txtLetter").value;
    let note  = document.getElementById("note").innerHTML;

    let count = 0;
    let index = note.indexOf(input);
    while (index !== -1 && index < note.length) {
        count++;
        index = note.indexOf(input, index + 1);
    }
    document.getElementById("note").innerHTML = "";
    kipStaat();
    document.getElementById("note").innerHTML += `<br> Letter "${input}" komt ${count} keer voor in bovenstaande zin.`;
}

window.addEventListener("load", setup);