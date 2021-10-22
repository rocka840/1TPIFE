$(start);

function start(){
    let firstInput = $("#first");
    //firstInput.keyup(keyWasPressed);  //same thing as undercode
    firstInput.on("keyup", keyWasPressed);
}

function keyWasPressed(){
    let currentFirstInputValue = $("#first").val();
    $("second").val(currentFirstInputValue);
}