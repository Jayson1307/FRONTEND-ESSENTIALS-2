let strNaam;
strNaam = prompt("hoe heet je?")
//
let boolNaamKlopt;
boolNaamKlopt = confirm("heet je echt " + strNaam)
if (boolNaamKlopt == true) {
    alert("welkom " + strNaam + "!")
}
else  {
    strNaam = prompt("okey dan proberen we het even opnieuw")
}
boolNaamKlopt = confirm("is " + strNaam + " wel je naam?")
if (boolNaamKlopt == true){
    alert("okey, welkom " + strNaam + "!")
}
else {
    alert("okey, evengoed welkom!")
}
