$(start);

function start(){
    dogbtn = $("<button>add dog</button>");
    dogbtn.attr("id", "dogID");
    $("body").append(dogbtn);
    dogbtn.on("click", dog);

    catbtn = $("<button>add cat</button>");
    catbtn.attr("id", "catID");
    $("body").append(catbtn);
    catbtn.on("click", cat)
}

function dog(){
    i = $("<img>");
    i.attr("src", "dog.jpg");
    i.attr("height", "100px");
    i.attr("width", "100px");
    $("body").append(i);
}

function cat(){
    c = $("<img>")
    c.attr("src", "cat.jpg");
    c.attr("height", "100px");
    c.attr("width", "100px");
    $("body").append(c);
}