const storeSliderValues = () => {
    let sliderValues = {};
    let sliderValuesJSON;
    sliderValues.red = parseInt(document.getElementById("sldRed").value);
    sliderValues.green = parseInt(document.getElementById("sldGreen").value);
    sliderValues.blue = parseInt(document.getElementById("sldBlue").value);
    sliderValuesJSON = JSON.stringify(sliderValues);
    localStorage.setItem("VIVES.be.sliderValues", sliderValuesJSON);
};

const restoreSliderValues = () => {
    let sliderValues;
    let sliderValuesJSON = localStorage.getItem("VIVES.be.sliderValues");
    if (sliderValuesJSON === undefined) {
        sliderValues = {
            red: 0, green: 0, blue: 0
        };
    } else {
        sliderValues = JSON.parse(sliderValuesJSON)
    }
    document.getElementById("sldRed").value = parseInt(sliderValues.red);
    document.getElementById("sldGreen").value = parseInt(sliderValues.green);
    document.getElementById("sldBlue").value = parseInt(sliderValues.blue);
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let JSONSwatches;
    let swatchComponents = document.getElementsByClassName("swatch");

    for (let i = 1; i < swatchComponents.length; i++) {
        let kleurInfoObject = {
            red: parseInt(swatchComponents[i].getAttribute("data-red")),
            green: parseInt(swatchComponents[i].getAttribute("data-green")),
            blue: parseInt(swatchComponents[i].getAttribute("data-blue"))
        }
        swatches.push(kleurInfoObject);
    }
    JSONSwatches = JSON.stringify(swatches);
    localStorage.setItem("VIVES.be.swatches", JSONSwatches);
};

const restoreSwatches = () => {
    let JSONSwatches = JSON.parse(localStorage.getItem("VIVES.be.swatches"));
    console.log(JSONSwatches);
    for (let i = 0; i < JSONSwatches.length; i++) {
        addSwatchComponent(JSONSwatches[i].red, JSONSwatches[i].green, JSONSwatches[i].blue);
    }
};
