//  Calculadora

function calculadora(){

    document.getElementById("calculadora").style.display="block"
    
    addEventListener("keydown", function(e){
        if (e.keyCode == 13){
            screen.value = eval(screen.value)
        }
        if (e.keyCode == 27){
            screen.value = ""
        }
    })
    
}
function calc_close(){
    
    document.getElementById("calculadora").style.display="none" 

    addEventListener("keydown", function(e){
        if (e.keyCode == 13){
            screen.value = ""
        }
        if (e.keyCode == 27){
            screen.value = ""
        }
    })
    
    screen.value = ""
    
}

function upclosecalc(){
    document.getElementById("calc_close").style.backgroundColor = "#b6bbc2"
}
function offclosecalc(){
    document.getElementById("calc_close").style.backgroundColor = ""
}

var screen = document.getElementById("screen")

function button(num){
    screen.value = screen.value + num
}
function ce(){
    screen.value = ""
}
function soma(){
    screen.value = screen.value + "+"
}
function sub(){
    screen.value = screen.value + "-"
}
function mult(){
    screen.value = screen.value + "*"
}
function div(){
    screen.value = screen.value + "/"
}
function igual(){
    screen.value = eval(screen.value)
}



//  Game

function game(){ 
    document.getElementById("game").style.display="block"
}
function closegame(){
    document.getElementById("game").style.display="none"
}

function onclosegame(){
    document.getElementById("closegame").style.background="#b6bbc2"
}
function offclosegame(){
    document.getElementById("closegame").style.background=""
}


var player1 = document.getElementById("player1")
var point = document.getElementById("point")
var pontos = 0
var teclado = true


var fruitleft = 0
var pointleft = 0

var fruittop = 0
var pointtop = 0

function começar(){

    document.getElementById("parar").style.display="block"
    teclado = true
    
    fruitleft = Math.floor(Math.random() * 11);
    pointleft = fruitleft * 30

    fruittop = Math.floor(Math.random() * 11);
    pointtop = fruittop * 30

    point.style.display = "block"
    point.style.top = pointtop + "px"
    point.style.left = pointleft + "px"
    

    document.getElementById("scorepoint").innerHTML = "Pontos: " + pontos

    var positionleft = 0
    var positiontop = 0

    addEventListener ("keydown", function(e){

        if (teclado == true){

            if (e.keyCode == 65){
            
                positionleft = positionleft - 30
                player1.style.left = positionleft + "px"
    
            }
            if (e.keyCode == 68){
        
                positionleft = positionleft + 30
                player1.style.left = positionleft + "px"
    
            }
            if (e.keyCode == 87){
        
                positiontop = positiontop - 30
                player1.style.top = positiontop + "px"
    
            }
            if (e.keyCode == 83){
        
                positiontop = positiontop + 30
                player1.style.top = positiontop + "px"
    
            }

        }


        if (positionleft < 0){

            positionleft = (positionleft + 30)
            player1.style.left = positionleft + "px"

        }
        if (positionleft > 300){

            positionleft = (positionleft - 30)
            player1.style.left = positionleft + "px"

        }
        if (positiontop < 0){

            positiontop = (positiontop + 30)
            player1.style.top = positiontop + "px"

        }
        if (positiontop > 300){

            positiontop = (positiontop - 30)
            player1.style.top = positiontop + "px"

        }


        if (positionleft == pointleft && positiontop == pointtop){
            
            fruitleft = Math.floor(Math.random() * 11);
            pointleft = fruitleft * 30

            fruittop = Math.floor(Math.random() * 11);
            pointtop = fruittop * 30

            point.style.display = "block"
            point.style.top = pointtop + "px"
            point.style.left = pointleft + "px"

            pontos = pontos + 1
            document.getElementById("scorepoint").innerHTML = "Pontos: " + pontos
        }

    })

}

function parar(){

    teclado = false

    document.getElementById("parar").style.display="none"
    
    player1.style.top="0px"
    player1.style.left="0px"

    point.style.display="none"

    pontos = 0
    document.getElementById("scorepoint").innerHTML = ""

}


// Calculadora
var mes = agora.getMonth()

function calendario(){
    document.getElementById("calendario").style.display="block"
}
function closecalendario(){
    document.getElementById("calendario").style.display="none"
}
function onclosecalendario(){
    document.getElementById("closecalendario").style.background="#b6bbc2"
}
function offclosecalendario(){
    document.getElementById("closecalendario").style.background=""
}

function setadireita(){
    mes = mes+1
}
function setaesquerda(){
    mes = mes-1
}

setInterval(function(){
if (mes == 0){
    document.getElementById("mes").innerHTML="Janeiro"
    let dia = 1
    for (var c = 4; c < 35; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 1){
    document.getElementById("mes").innerHTML="Fevereiro"
    let dia = 1
    for (var c = 7; c < 36; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 2){
    document.getElementById("mes").innerHTML="Março"
    let dia = 1
    for (var c = 1; c < 32; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 3){
    document.getElementById("mes").innerHTML="Abril"
    let dia = 1
    for (var c = 4; c < 34; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 4){
    document.getElementById("mes").innerHTML="Maio"
    let dia = 1
    for (var c = 6; c < 37; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 5){
    document.getElementById("mes").innerHTML="Junho"
    let dia = 1
    for (var c = 2; c < 32; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 6){
    document.getElementById("mes").innerHTML="Julho"
    let dia = 1
    for (var c = 4; c < 35; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 7){
    document.getElementById("mes").innerHTML="Agosto"
    let dia = 1
    for (var c = 7; c < 38; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 8){
    document.getElementById("mes").innerHTML="Setembro"
    let dia = 1
    for (var c = 3; c <33; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 9){
    document.getElementById("mes").innerHTML="Outubro"
    let dia = 1
    for (var c = 5; c <36; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else if (mes == 10){
    document.getElementById("mes").innerHTML="Novembro"
    let dia = 1
    for (var c = 1; c <31; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }

} else {
    document.getElementById("mes").innerHTML="Dezembro"
    let dia = 1
    for (var c = 3; c <34; c++){
        document.getElementById("b"+c).innerHTML=dia
        dia = dia +1
    }
}},100)