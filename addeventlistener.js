window.addEventListener("load",start);
/*
$("button").on("click", fnc);

function fnc(){

}*/

function start(){
    $("select").one("change",changing);
}

function changing(){
    alert("you changed it");
}


