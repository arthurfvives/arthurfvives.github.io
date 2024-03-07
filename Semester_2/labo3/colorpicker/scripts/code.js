    const setup = () => {
        const redSlider = document.getElementById("red");
        const greenSlider = document.getElementById("green");
        const blueSlider = document.getElementById("blue");

        redSlider.value = 128;
        greenSlider.value = 128;
        blueSlider.value = 128;

        redSlider.addEventListener("input", onInput);
        greenSlider.addEventListener("input", onInput);
        blueSlider.addEventListener("input", onInput);

        onInput();
 }

    const onInput = () => {
        const redValue = document.getElementById("red").value;
        const greenValue = document.getElementById("green").value;
        const blueValue = document.getElementById("blue").value;

        document.getElementById("valueRed").innerHTML = "Red " + redValue;
        document.getElementById("valueGreen").innerHTML = "Green " + greenValue;
        document.getElementById("valueBlue").innerHTML = "Blue " + blueValue;

        document.getElementById("swatch").style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }

    window.addEventListener("load", setup);
