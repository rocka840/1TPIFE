$(start);

function start(){
    let myList = $("<ul></ul>");
    let newListItem = $("<li></li>");
    newListItem.append("pink");
    myList.append(newListItem);

    $("body").append(myList);
}
