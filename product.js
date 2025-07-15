let sidenav=document.getElementById("sidenav")
let menuicon=document.getElementById("menuicon")
let closeicon=document.getElementById("closenav")

menuicon.addEventListener("click",()=>{
    sidenav.style.right=0
})
closeicon.addEventListener("click",()=>{
    sidenav.style.right="-50%"
})

let productContainer=document.getElementById("product__container")
let search=document.getElementById("search")
let divlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",()=>{
    let enteredvalue=event.target.value.toUpperCase()
    for(count=0; count<divlist.length;count++){
        let productname=divlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            divlist[count].style.display="none"
        }else{
            divlist[count].style.display="block"
        }
    }
})