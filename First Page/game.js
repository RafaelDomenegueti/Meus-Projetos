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