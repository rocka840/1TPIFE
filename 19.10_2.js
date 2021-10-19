$(start);

function start(){
    let firstInput = $("#first");
    firstInput.keyup(keyWasPressed);
}

function keyWasPressed(){
    let currentFirstInputValue = $("#first").val();
    $("#second").val(currentFirstInputValue);
}