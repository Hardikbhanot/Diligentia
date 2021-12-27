
const burger=document.querySelector(".burger")
const navlinks=document.querySelector("nav .nav-links")
const links= document.querySelectorAll(".nav-links li")
const nav= document.querySelector("nav")


let showMenu = false;
 
burger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        console.log("hurraaaaaaaaaaay")
        burger.classList.add("open");
        navlinks.classList.add("open");
        nav.classList.add("open");
        // links.classList.add("open");
        links.forEach((item) =>
        item.classList.add("fade"));

        // Reset the menu state
        showMenu = true;
    
    } else {
    
        burger.classList.remove("open");
        navlinks.classList.remove("open");
        nav.classList.remove("open");
        // .classList.remove("open");
        links.forEach((item) =>
            item.classList.remove("fade"));

        // Reset the menu state
        showMenu = false;
    }
}