start = document.getElementsByClassName("start")[0]
startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", ()=>{
    if (startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-500px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})