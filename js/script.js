// Data e Horario 

setInterval(function(){

    let agora = new Date
    var hora = agora.getHours()
    var minuto = agora.getMinutes()

    if (minuto < 10){
        minuto = "0" + minuto
    }
    if (hora < 10){
        hora = "0" + hora
    }

    var now = document.getElementById("horario").innerHTML=(hora+":"+minuto)

}, 1000)

var agora = new Date
setInterval(function(){

    var dia = agora.getUTCDate()
    var mes = agora.getUTCMonth() + 1
    var ano = agora.getFullYear()

    if (dia < 10){
        dia = "0" + dia
    }
    if (mes < 10){
        mes = "0" + mes
    }

    var now = document.getElementById("date").innerHTML=(dia + "/" + mes + "/" + ano)

}, 1000)


// Informações Popup

function oninfo(){
    document.getElementById("info").style.backgroundColor="#b6bbc2"
}
function offinfo(){    
    document.getElementById("info").style.backgroundColor=""
}

function abreinfo(){
    document.getElementById("infopop").style.display="block";
}

function fecharpop(){
    document.getElementById("infopop").style.display="none";
}

function onclosepop(){
    document.getElementById("white-close").style.backgroundColor="#b6bbc2"
}
function offclosepop(){
    document.getElementById("white-close").style.backgroundColor=""
}


// Animação nos apps

function ongame(){
    document.getElementById("icongame").style.width="90px"
}
function offgame(){
    document.getElementById("icongame").style.width="70px"
}

function oncalendario(){
    document.getElementById("iconcalendario").style.width="90px"
}
function offcalendario(){
    document.getElementById("iconcalendario").style.width="70px"
}

function oncalculadora(){
    document.getElementById("iconcalculadora").style.width="90px"
}
function offcalculadora(){
    document.getElementById("iconcalculadora").style.width="70px"
}