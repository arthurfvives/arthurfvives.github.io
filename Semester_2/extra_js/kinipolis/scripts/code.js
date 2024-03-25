const setup = () => {
    document.getElementById("find").addEventListener("click", findSeats);
}

const findSeats = () => {
    let stoelen = document.querySelectorAll('img[src="img/seat_avail.png"]');
    let aantalStoelen = stoelen.length;
    let random = getRandomInt(0, aantalStoelen);
    let select = "img/seat_select.png";
    let unavail = "img/seat_unavail.png";
    let avail = "img/seat_avail.png";
    stoelen[random].src = select;

    setTimeout(function () {
        if (confirm("Wil je deze zetel selecteren?")) {
            stoelen[random].src = unavail;
            alert("De stoel is gereserveerd.");
        } else {
            stoelen[random].src = avail;
            alert("De stoel is terug beschikbaar.");
        }
    }, 80);
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

window.addEventListener("load", setup);
