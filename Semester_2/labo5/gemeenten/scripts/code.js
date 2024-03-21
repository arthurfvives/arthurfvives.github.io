const setup = () => {
    vraagGemeente();
}

const vraagGemeente = () => {
    let inputs = [];
    let input = prompt("Geef een gemeente in");
    while (input !== "stop") {
        inputs.push(input);

        input = prompt("Geef een gemeente in");
    }

    inputs = inputs.sort(compare);

    if (inputs[0] == null) {
        document.getElementById("h1").innerHTML = "Er werden geen namen ingegeven.";
        document.getElementById("form").innerHTML = "";
    } else {
        for (let i = 0; i < inputs.length; i++) {
            document.getElementById("slctGemeenten").innerHTML += `<option value="${i}">${inputs[i]}</option>`
        }
    }

}

const compare = (a, b) => {
    return a.localeCompare(b);
}

window.addEventListener("load", setup);
