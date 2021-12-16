document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction(){
    document.querySelector(".hamburger").classList.toggle("change")
    
    document.querySelector(".hamnames").classList.toggle("category")
    
}