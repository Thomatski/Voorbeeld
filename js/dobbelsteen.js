var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");
var btnDobbelsteen = document.getElementById("btnDobbelsteen");

btnDobbelsteen.addEventListener("click", function(){
    let getal = getRandomint(1, 6);
    console.log(Math.round(Math.random()* 10));    
});

function getRandomInt(min, max) {
    return Math.round(Math.random()* (max-min+1)+ min);
};