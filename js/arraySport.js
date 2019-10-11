var sportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "athletiek", "ballet", "dansen", "rugby", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];
var balsportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "rugby"];
var geenBalsportArray = ["athletiek", "ballet", "dansen", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];

var sportKeuze = document.getElementById("sportkeuze");
var btnBalsport = document.getElementById("btnBalsport");
var btnGeenBalsport = document.getElementById("btnGeenBalsport");

//functie uitvoeren totdat de pagina volledig is geladen
window.onload = function() {
    //een willekeurig getal kiezen tussen 0 en de lengte van de sportArray(0-17)
    let random = Math.floor(Math.random() * sportArray.length);
    //willekeurig element uit sportArray in sportKeuze plaatsen
    sportKeuze.innerHTML = sportArray[random];
}

btnBalsport.addEventListener("click", function(){
    
});

btnGeenBalsport.addEventListener("click", function(){
    
});