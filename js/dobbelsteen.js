var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");
var btnDobbelsteen = document.getElementById("btnDobbelsteen");


btnDobbelsteen.addEventListener("click", function(){
    let getal = getRandomInt(1, 6);
    
    uitvoerDobbelsteen.innerHTML = getal;
});

function getRandomInt(min, max) {
    return Math.round(Math.random()* (max - min)+ min);
};