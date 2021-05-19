var score = 0;
let getal1;
let getal2;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}
function setnumbers(){
    getal1 = makeRandomNumber();
    getal2 = makeRandomNumber();
}

function showRandomNumber(){
    setnumbers();
    document.getElementById("getal1").innerHTML = getal1;
    document.getElementById("getal2").innerHTML = getal2;
}

showRandomNumber();

function geefAntwoord(status){
    if(status == "hoger"){
        if(getal1 > getal2 ){
            score++;
            document.querySelector("body").style.backgroundColor = "Green";
        }
        else{
            score--;
            document.querySelector("body").style.backgroundColor = "Red";
        }
    }
    else{
        if(getal1 < getal2){
            score++;
            document.querySelector("body").style.backgroundColor = "Green";
        }
        else{
            score--;
            document.querySelector("body").style.backgroundColor = "Red";
        }
    }
    document.getElementById("score").innerHTML = score;
    showRandomNumber();
}