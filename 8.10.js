//window.addEventListener("load",start); //PLAIN SIMPLE JS

$(start);

//$(secondstart);

/*function start(){
    alert("Hello world");
}

$(function (){
    alert("Hello WOrld");
});*/


/*
function start(){
    //document.getElementById("pTag").innerHTML = "Hello world";
    let a = $("#pTag");
    let newString = a.html() + "Hello World";
    a.html(newString);
}

function secondstart(){
    let b = $("#secondPTag");
    let SecondnewString = a.html() + b.html(newString);
    b.html(SecondnewString);
}*/
/*
function start(){
    s = $("#pTag").html();
    $("#secondPTag").html(s);
    $("#thirdPTag").html(s);
}*/
/*
function start(){
    s = $("#pTag").html();
    $("#secondPTag").html(s);
    $("p:nth-child(3)").html(s);
}*/

function start(){
    s = $("#pTag").html();
    $("p").html(s);
}