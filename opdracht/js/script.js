
strAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strInput = "";          //input string
var strCodeword = "";       //codeword string
var strCodewordFull = "";   //output string

arrInputPosities = [];      //array van input posities
arrCodewordPosities = [];   //array van codeword posities
arrOutputPosities = [];     //array van output posities

//Zet een string om naar een array met posities
function stringNaarPosities(str){
    outputArray = [];
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < strAlfabet.length; j++) {
            if(str[i].toUpperCase() == strAlfabet[j]){
                outputArray.push(j);
                // console.log("Letter: " + i + " = " + str[i] + " -> positie in alfabet = " + j);
            }
        }
    }
    console.log("berekende posities: " + outputArray.toString())
    return outputArray;
}

//Zet een array met posities om naar een string
function positiesNaarString(arr){

  
    var outputString = "";
    //TODO: opdracht 1- check
    for(let k=0; k < arr.length; k++) {
         let positie = arr[k];
         outputString += strAlfabet[positie];
    }

    return outputString;
}

//Geeft een array terug waarbij het codeword herhaald wordt totdat de lengte overeenkomt met het te versleutelen bericht
//Dus als het bericht STUDENT (7 letters) is en het codeword KLAS dan krijg je KLASKLA (7 letters) terug van deze functie.
function vermenigvuldigCodeword(strInput, strCodeword){
    var outputString = "";
    
    var inputLength = strInput.length;
    var codewordLength = strCodeword.length;

    var intDiv = Math.floor(inputLength / codewordLength); //het aantal keer dat het codeword in zijn geheel in het bericht past
    var intMod = inputLength % codewordLength; //het aantal letters dat overblijft die nog moeten worden aangevuld

    //TODO: opdracht 2

    // console.log("Codeword full: " + outputString);
    for(var l=0; l < intDiv; l++){
        outputString += strCodeword
    } 
    for(var m = 0; m < intMod; m++){
        
        outputString += strCodeword[m]
    }
    console.log("Codeword full: " + outputString);
    return outputString;
}

//functie die een een bericht versleuteld.
function versleutel(){
    strInput = document.querySelector("#input").value; 
    strCodeword = document.querySelector("#codeword").value;   

    console.log("input: " + strInput);
    console.log("codeword: " + strCodeword);

    strCodewordFull = vermenigvuldigCodeword(strInput, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arrInputPosities = stringNaarPosities(strInput);

    outputArray = [];
    for (let i = 0; i < arrInputPosities.length; i++) {
        if(arrInputPosities[i] + arrCodewordPosities[i] > 26){
            outputArray.push((arrInputPosities[i] + arrCodewordPosities[i])-26);
        }
        else{ 
            outputArray.push(arrInputPosities[i] + arrCodewordPosities[i]);
        }
        
    }


     console.log("versleuteld bericht: " + positiesNaarString(outputArray));
     document.querySelector("#output").value = positiesNaarString(outputArray);
    strCodewordFull = [];
}

function ontsleutel(){
    strCodeword = document.querySelector("#codeword").value; 
    outputString = document.querySelector("#output").value;
    
    strCodewordFull = vermenigvuldigCodeword(outputString, strCodeword);
    arrCodewordPosities = stringNaarPosities(strCodewordFull);
    arroutputPosities = stringNaarPosities(outputString);
    //console.log(strCodeword + strCodewordFull + arrCodewordPosities + arroutputPosities);

    outputArray = [];
    for (let p = 0; p < arroutputPosities.length; p++) {
        if(arroutputPosities[p] - arrCodewordPosities[p] < 0){
            outputArray.push((arroutputPosities[p] - arrCodewordPosities[p])+26);
        }
        else{ 
            outputArray.push(arroutputPosities[p] - arrCodewordPosities[p]);
        }
        
    }
    console.log("outputArray" + outputArray);
    document.querySelector("#output").value = positiesNaarString(outputArray);
}
