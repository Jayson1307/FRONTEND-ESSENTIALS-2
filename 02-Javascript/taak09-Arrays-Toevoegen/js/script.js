var nummer = 1;
var text = "kies film voor plek";

topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = [];

//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}

function checknummer(){
document.getElementById("nummer").innerHTML = nummer;
document.getElementById("text").innerHTML = text;
}
checknummer()

function kiesFilm(){
    film1 = prompt("Wat is je favorite film die je nog niet gekozen hebt?");
    film1 --;
    if(film1 < 11){
        eigenTopFilms.push(topFilms[film1]);
    nummer++;
    }
    film1 ++;
    document.querySelector(".imdb-film"+film1).style.color = "white";
    if(nummer >= 4){
        nummer= "klaar";
        text= " ";
    }
    console.log(eigenTopFilms);

    for(x = 0; x < eigenTopFilms.length; x++){
        document.querySelector(".eigen-film" + (x+1)).innerHTML = eigenTopFilms[x];
    }
    checknummer()
}