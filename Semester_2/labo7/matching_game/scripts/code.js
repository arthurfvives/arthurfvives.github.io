let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAARTEN: ["img/kaart1.png", "img/kaart2.jpg", "img/kaart3.png", "img/kaart4.jpg", "img/kaart5.png", "img/kaart6.png"],
    ACHTERKANT: "img/achterkant.jpg"
};

const setup = () => {
    bouwElementen();
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let img = cards[i].firstElementChild;
        img.addEventListener("click", turnCard);
    }
}

const bouwElementen = () => {
    let canvas = document.createElement("div");
    canvas.id = "canvas";
    document.body.appendChild(canvas);

    for (let i = 0; i < 12; i++) {
        let card = document.createElement("div");
        card.className = "card";
        canvas.appendChild(card);

        let img = document.createElement("img");
        img.src = global.ACHTERKANT;
        card.appendChild(img);
    }

};

const getRandom = () => {
    return Math.floor(Math.random() * 6);
}

const turnCard = (e) => {
    let clickedCard = e.target;
    clickedCard.src = global.KAARTEN[getRandom()];
}


window.addEventListener("load", setup);