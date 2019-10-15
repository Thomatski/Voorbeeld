var sportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "athletiek", "ballet", "dansen", "rugby", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];
var balsportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "rugby"];
var geenBalsportArray = ["athletiek", "ballet", "dansen", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];

var sportKeuze = document.getElementById("sportkeuze");
var btnBalsport = document.getElementById("btnBalsport");
var btnGeenBalsport = document.getElementById("btnGeenBalsport");

//functie uitvoeren wanneer de pagina volledig is geladen
window.onload = willekeurigeSportKiezen();
    
function willekeurigeSportKiezen() {
    //een willekeurig getal kiezen tussen 0 en de lengte van de sportArray(0-17)
    let random = Math.floor(Math.random() * sportArray.length);
    //willekeurig element uit sportArray in sportKeuze plaatsen
    sportKeuze.innerHTML = sportArray[random];
}

btnBalsport.addEventListener("click", function(){
    //de sport uit het element sportKeuze eruithalen
    let sport = sportKeuze.innerHTML;
    //variabele om bij te houden of we jusit hebben gekozen
    let juistGekozen = false;
    //doorlopen van heel de balsportArray
    for(var i = 0; i < balsportArray.length; i++){
        //elk element uit balsportArray controleren tov de sport die in sportKeuze staat
        if (sport === balsportArray[i]){
            //we hebben goed gekozen
            juistGekozen = true;
        }
    }
    if(juistGekozen){
        //pop-up om te laten weten dat we goed hebben gekozen
        alert("Goed zo!");
    }
    else{
        alert("Probeer opnieuw!");
    }
    willekeurigeSportKiezen();
    
});

btnGeenBalsport.addEventListener("click", function(){
    //de sport uit het element sportKeuze eruithalen
    let sport = sportKeuze.innerHTML;
    //variabele om bij te houden of we jusit hebben gekozen
    let juistGekozen = false;
    //doorlopen van heel de balsportArray
    for(var i = 0; i < geenBalsportArray.length; i++){
        //elk element uit balsportArray controleren tov de sport die in sportKeuze staat
        if (sport === geenBalsportArray[i]){
            //we hebben goed gekozen
            juistGekozen = true;
        }
    }
    if(juistGekozen){
        //pop-up om te laten weten dat we goed hebben gekozen
        alert("Goed zo!");
    }
    else{
        alert("Probeer opnieuw!");
    }
    willekeurigeSportKiezen();
});