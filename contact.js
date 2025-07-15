let sidenav=document.getElementById("sidenav")
let menuicon=document.getElementById("menuicon")
let closeicon=document.getElementById("closenav")

menuicon.addEventListener("click",()=>{
    sidenav.style.right=0
})
closeicon.addEventListener("click",()=>{
    sidenav.style.right="-50%"
})