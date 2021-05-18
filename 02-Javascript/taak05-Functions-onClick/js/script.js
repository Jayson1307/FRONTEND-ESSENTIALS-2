var huidigeKleur = "white";

function toonAlert(){
    alert("Je hebt op de knop gedrukt!");
}

function maakGroen(){
    document.querySelector("body").style.backgroundColor = "Green";
}
function maakBlauw(kleur){
    document.querySelector("body").style.backgroundColor = "blue";
    //TODO: verander de achtergrond kleur op basis van de meegegeven waarde in de kleur parameter
}

function maakRood(kleur){
    document.querySelector("body").style.backgroundColor = "red";
    //TODO: verander de achtergrond kleur op basis van de meegegeven waarde in de kleur parameter
}

//TODO: maak 2 functies genaamd maakBlauw en maakRood



function groenDoorParameter(kleur){
    document.querySelector("body").style.backgroundColor = "green";
    //TODO: verander de achtergrond kleur op basis van de meegegeven waarde in de kleur parameter
}