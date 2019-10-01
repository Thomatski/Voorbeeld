var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");
var btnDobbelsteen = document.getElementById("btnDobbelsteen");


btnDobbelsteen.addEventListener("click", function(){
    let getal = getRandomInt(1, 6);
    let image = document.createElement("img");
    
    if(getal === 1) {
        image.src = "../img/1.jpg";
    }
    else if(getal === 2) {
        image.src = "../img/2.jpg";
    }
    else if(getal === 3) {
        image.src = "../img/3.jpg";
    }
    else if(getal === 4) {
        image.src = "../img/4.jpg";
    }
    else if(getal === 5) {
        image.src = "../img/5.jpg";
    }
    else if(getal === 6) {
        image.src = "../img/6.jpg";
    }

    switch(getal) {
        case 1:
            image.src = "../img/1.jpg";
            break;
        case 2:
            image.src = "../img/2.jpg";
            break;
        case 3:
            image.src = "../img/3.jpg";
            break;
        case 4:
            image.src = "../img/4.jpg";
            break;
        case 5:
            image.src = "../img/5.jpg";
            break;
        case 6:
            image.src = "../img/6.jpg";
            break;
    }
    
    uitvoerDobbelsteen.innerHTML = "";
    uitvoerDobbelsteen.append(image);
});

//functie om een willekeurig getal te verkrijgen tussen min en max. min en max zijn parameters die worden meegegeven wanneer de functie wordt aangeroepen
function getRandomInt(min, max) {
    return Math.round(Math.random()* (max - min)+ min);
};