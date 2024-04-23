const setup = () => {
berekenDagGeboren();

}

const demo = () => {
    let start  = new Date();
    console.log(start);

    // dag van de week
    console.log(start.getDay());

    // maand
    console.log(start.getMonth()+1);

    // jaar
    console.log(start.getFullYear());

    // dag
    console.log(start.getDate());

    console.log(start.getDate() + "-" + (start.getMonth()+1) + "-" + start.getFullYear());

    let datum = new Date(2024, 0, 1); // 1 januari 2024


    let event = new Date();
    // ISO het is eerder een notatieconventie voor het weergeven van tijdstipppen
    console.log("toISOString " + event.toISOString());
    console.log("toISOString " + event.toDateString());
    console.log("toISOString " + event.toTimeString());
}

const berekenDagGeboren = () => {
    let vandaag = new Date();
    let geboortedatum = new Date(2005,7,4);
    let milisecondenVerschil = vandaag - geboortedatum;

    let milliseconds = vandaag - geboortedatum;
    console.log(milliseconds);
    let oneDay = 1000*60*60*24;
    let aantalDagenAlive = milliseconds/oneDay;
    console.log(geboortedatum.getDay());
}
window.addEventListener("load", setup);