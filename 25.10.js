$(start);

function start(){
    $("button").on("click",loadSecondPage);
}

function loadSecondPage(){
    $("p").load("secondPage.html div");
}