Window.addEventListener("load",start);



function start(){
    document.getElementById("putMessageHere").innerHTML = " Welcome to my page....";
    a = 5;
    document.getElementById("btn").addEventListener("click",function(){
        alert("Hello, your variable has a value"+a);
    }
    );
}