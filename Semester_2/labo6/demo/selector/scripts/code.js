const setup = () => {
    //let lstPar = document.getElementsByClassName("style");
    /*for (let i = 0; i < lstPar.length; i++) {
        lstPar[i].addEventListener("click", change);
    }*/

    let lstParDiv = document.querySelectorAll("#myDIV > .color");
    for (let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener("click", changeDiv); // 2 elem -> click
    }
}

const change = (e) => {
    e.target.className = "colorPar";
}

const changeDiv = (event) => {
    event.target.className = "colorParDiv";
}

window.addEventListener("load", setup);