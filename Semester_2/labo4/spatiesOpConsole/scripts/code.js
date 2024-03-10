const setup = () => {
    document.getElementById("submit").addEventListener("click", onClick);
}

const onClick = () => {
    let input = document.getElementById("txtTekst").value;
    console.log("Dit is de default input: " + input)

    let inputSpaties = "";

    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) !== " ") {
            inputSpaties += input.charAt(i) + " ";
        }
    }

    console.log("Dit is de input met spaties: " + inputSpaties);
}

const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) !== " ") {
            result += inputText.charAt(i) + " ";
        }
    }
    return result;
}

window.addEventListener("load", setup);