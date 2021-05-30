var arrProductPrijs = [5,10,20,50,100];
var arrProductKorting = [0.95, 0.85, 0.98, 1.21];
var totaal = 0;

function rondaf(getal, aantalplekkenachterkomma){
    const x = Math.pow(10, aantalplekkenachterkomma);
    return Math.round(getal * x)/x;
}

for (let i = 0; i < arrProductPrijs.length; i++) {
    for (let j = 0; j < arrProductKorting.length; j++) {
        console.log(arrProductPrijs[i] * arrProductKorting[j]);
        
    }
    console.log("---");
}