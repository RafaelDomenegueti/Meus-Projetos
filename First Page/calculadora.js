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