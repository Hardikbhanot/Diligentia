
        const burger=document.querySelector(".burger")
const navlinks=document.querySelector(".nav-links")
const links= document.querySelectorAll(".nav-links li")
const nav= document.querySelector("nav")
// const join=document.querySelector(".heading > .contain > a > span")
// const footer= document.querySelector(".footer")
// burger.addEventListener('click',()=>{
//     burger.classList.toggle("open")
//     navlinks.classList.toggle("open")
//     nav.classList.toggle("open")
//     links.forEach(link=>{
//         link.classList.toggle("fade")
//     })
// })

let showMenu = false;
 
burger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
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