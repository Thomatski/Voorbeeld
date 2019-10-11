var btnSchrikkeljaar = document.getElementById("btnSchrikkeljaar");
var inputSchrikkeljaar = document.getElementById("inputSchrikkeljaar");
var uitvoerSchrikkeljaar = document.getElementById("uitvoerSchrikkeljaar");

btnSchrikkeljaar.addEventListener("click", function(){
    let jaar = inputSchrikkeljaar.value;
    let tekst = " Het jaar " + jaar + " is ";
    
    uitvoerSchrikkeljaar.innerHTML = tekst;
    if(jaar % 4 !== 0){
        teskt += "geen schrikkeljaar";
    }
    else{
        if(jaartal % 400 === 0){
            tekst += "een schrikkeljaar";
        }
        else{
            teskt += "geen schrikkeljaar";
        }
    }
});
