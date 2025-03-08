let navbar = document.getElementById("nav");
let menuBtn = document.getElementById("menu-button")
let header = document.getElementById("header")


menuBtn.onclick = () =>{
    navbar.classList.toggle("active");
    menuBtn.classList.toggle("fa-xmark");
}


window.onscroll = () =>{
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-xmark");

    if (window.scrollY > 0) {
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}


// function app(){
//    document.getElementById("ss").style.left = "0"
// }