const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", addTable);
}

const addTable = () => {
    let number = document.getElementById("txtGetal").value;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let tableContainer = document.getElementById("container");

    let div = document.createElement("div");
    div.classList.add("border");
    let headerDiv = document.createElement("div");
    div.appendChild(headerDiv);
    headerDiv.innerHTML = `Tafel van ${number} aangemaakt op: ${time}`;
    headerDiv.classList.add("header");

    for (let i = 0; i <= 10; i++) {
        let innerdiv = document.createElement("div");
        innerdiv.classList.add("row");
        let p = document.createElement("p");
        p.textContent = number + ' x ' + i + ' = ' + (number * i);
        div.appendChild(innerdiv);
        innerdiv.appendChild(p);
        if (i % 2 === 0) {
            innerdiv.classList.add("grey");
        }
    }
    tableContainer.appendChild(div);
    number.value = "";
};


window.addEventListener("load", setup);