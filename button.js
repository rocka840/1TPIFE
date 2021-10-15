$(start);

function start(){
    btn = $("<button></button>");
    $("body").append(btn);
    $("button").html("click me");
    $("button:nth-child(1)").on("click",clickedBtn);
}

function clickedBtn(){
    para = $("<p>This is the new paragraph</p>");
    $("body").append(para);
}

$(Secondstart);

function Secondstart(){
    twobtn = $("<button>Click To Delete</button>");
    $("body").append(twobtn);
    $("button:nth-child(2)").on("click", delall);
}

function delall(){
   twobtn = $("body").html("");
}