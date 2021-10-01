window.addEventListener("load",start);

let change = false; //meaning 0 aswell

function start(){
    document.getElementById("btnFlag").addEventListener("click", function(){

        if(change){
            change = false;
            document.getElementById("btnFlag").innerHTML = "Disabled";
        }  else {
            change = true;
            document.getElementById("btnFlag").innerHTML = "Enabled";
        }
    }
    );
}