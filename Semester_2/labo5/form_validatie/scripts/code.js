const setup = () => {
    document.getElementById("validate").addEventListener("click", valideer);
}

const valideer = () => {
    checkVoornaam();
    checkFamilienaam();
    checkDatum();
    checkEmail();
    checkKinderen();
}

const checkVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        errVoornaam.innerHTML = "max. 30 karakters";
    }
}

const checkFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam.length > 50) {
        errFamilienaam.innerHTML = "max. 30 karakters";
    }
    if (familienaam === "") {
        errFamilienaam.innerHTML = "verplicht veld";
    }
}

const checkDatum = () => {
    let textGeboortedatum = document.getElementById("textGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = textGeboortedatum.value.trim();
    if (geboortedatum === "") {
        errGeboortedatum.innerHTML = "verplicht veld";
    }
    let year = parseInt(geboortedatum.substring(0, 5));
    let month = parseInt(geboortedatum.substring(5, 7));
    let day = parseInt(geboortedatum.substring(8, 10));
    let streep1 = geboortedatum.substring(4, 5);
    let streep2 = geboortedatum.substring(7, 8);
    if (isNaN(year) || isNaN(month) || isNaN(day) || month <= 0 || day <= 0 || streep1 !== "-" || streep2 !== "-") {
        errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
    }
}

const checkEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if (email === "") {
        errEmail.innerHTML = "verplicht veld";
    }

    let count = 0;
    let index = email.indexOf("@");
    while (index !== -1) {
        count++;
        index = email.indexOf("@", index + 1);
    }
    let indexAt = email.indexOf("@");
    if (count > 1 || !email.substring(indexAt - 1, indexAt) || !email.substring(indexAt, indexAt + 1)) {
        errEmail.innerHTML = "geen geldig email adres";
    }
}

const checkKinderen = () => {
    let numberAantalKinderen = document.getElementById("numberAantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = numberAantalKinderen.value;

    if (aantalKinderen < 0) {
        errAantalKinderen.innerHTML = "is geen positief getal";
    }
    if (aantalKinderen > 99) {
        errAantalKinderen.innerHTML = "is te vruchtbaar";
    }
}
window.addEventListener("load", setup);