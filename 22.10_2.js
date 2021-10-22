$(start);


function start(){
    $("button").on("click", dog);
}


function dog(){
    if(change){
        change = false;
        $("img").attr("src", "dog.jpg");
        document.getElementById("change").innerHTML = "change to cat"
    } else {
        change = true;
        $("img").attr("src", "cat.jpg");
        document.getElementById("change").innerHTML = "change to dog"
    }
    
}