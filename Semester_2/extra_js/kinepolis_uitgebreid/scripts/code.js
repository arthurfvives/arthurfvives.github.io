let confirmed = false;

const setup = () => {
    document.getElementById("confirm").addEventListener("click", confirmSelection);
    let stoelen = document.querySelectorAll('img[src="img/seat_avail.png"]');
    for (let i = 0; i < stoelen.length; i++) {
        stoelen[i].addEventListener("click", changeSeat);
    }
}

const changeSeat = (event) => {
    if (!confirmed) {
        let stoel = event.target;
        let select = "img/seat_select.png";
        let avail = "img/seat_avail.png";
        if (stoel.src.includes(avail)) {
            stoel.src = select;
        } else {
            stoel.src = avail;
        }
    }
}

const change = () => {
    confirmed = false;
    let stoelen = document.querySelectorAll('img[src="img/seat_unavail.png"]');
    for (let i = 0; i < stoelen.length; i++) {
        stoelen[i].src = "img/seat_avail.png";
    }
    document.getElementById("changeSeat").innerHTML = "Confirm";
    document.getElementById("changeSeat").removeEventListener("click", change);
    document.getElementById("changeSeat").id = "confirm";
}

const confirmSelection = () => {
    confirmed = true;
    let stoelen = document.querySelectorAll('img[src="img/seat_select.png"]');
    for (let i = 0; i < stoelen.length; i++) {
        stoelen[i].src = "img/seat_unavail.png";
    }
    document.getElementById("confirm").innerHTML = "Change seats";
    document.getElementById("confirm").id = "changeSeat";
    document.getElementById("changeSeat").addEventListener("click", change);
}

window.addEventListener("load", setup);
