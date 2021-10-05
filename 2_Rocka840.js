window.addEventListener("load",start);

function start(){
   // document.getElementById("btn1").addEventListener("click",btn1Click);
    document.addEventListener("keydown",keyWasPressed); //keypress
}

function keyWasPressed(){
    alert("Key Pressed");
}

/*
function btn1Click(){
    document.getElementById("btn2").addEventListener("click",btn2Click);
}

function btn2Click(){
    document.getElementById("btn3").addEventListener("click",btn3Click);
}

function btn3Click(){
    alert("you successfully clicked three buttons");
    document.getElementById("btn3").removeEventListener("click",btn3Click);
    document.getElementById("btn3").removeEventListener("click",btn2Click);
}*/