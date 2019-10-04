//html-elementen in variabelen steken
var uitvoerCurrency = document.getElementById("uitvoerCurrency");
var btnCurrency = document.getElementById("btnCurrency");
var inputCurrency = document.getElementById("inputCurrency");
var currencySelector = document.getElementById("currencySelector");

//eventlistener toevoegen aan een knop, klikken op de knop
btnCurrency.addEventListener("click", function(){
    //hoeveelheid uit input halen
    let geld = parseInt(inputCurrency.value);
    //eenheid uit select halen
    let currency = currencySelector.value;
    //resultaat berekenen met functie met parameters
    let resultaat = calculateCurrency(geld, currency);
    //p-element aanmaken
    let zin = document.createElement("p");
    //tekst maken
    let tekst = "&euro;" + geld + " is " + resultaat;
    
    //p-element invullen met tekst
    zin.innerHTML = tekst;
    uitvoerCurrency.appendChild(zin);
});

//functie om euro te berekenen naar een andere eenheid, aantal en eenheid wordt meegegeven met de functie
function calculateCurrency(aantal, eenheid){
    //variabele om resultaat in op te slaan
    let resultaat;
    //switch om te controleren
    switch(eenheid){
        case "yen":
            //berekening van euro naar eenheid
            resultaat= "&#165;" + aantal * 117.22;
            //stoppen van de switch
            break;
        case "dollar":
            resultaat = "&#36;" + aantal * 1.0985;
            break;
        case "canadianDollar":
            resultaat = "C&#36;" + aantal * 1.4634;
            break;
        case "pound":
            resultaat = "&#163;" + aantal * 0.89;
            break;
    };
    
    return resultaat;
};