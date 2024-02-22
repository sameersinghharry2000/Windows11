let windowkey = document.getElementById("windows11key");

windowkey.addEventListener("click", function(){
    document.getElementById("mainmenu").classList.toggle("mainmenu2");
});

let call = document.getElementById("callAllApps");

call.addEventListener("click",function(){
    document.getElementById("all_applications").style.display="block";
})

let backallapps = document.getElementById("backallapps");

backallapps.addEventListener("click",function(){
    document.getElementById("all_applications").style.display="none";
})