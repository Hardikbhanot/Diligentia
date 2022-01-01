const burger=document.querySelector(".burger")
const navlinks=document.querySelector("nav .nav-links")
const links= document.querySelectorAll(".nav-links li")
const line=document.querySelectorAll(".burger >.line")
const nav= document.querySelector("nav")
const header = document.querySelector('navbar');
const lightLinks=document.querySelectorAll('.light-link')
const heroMain=document.querySelector(".hero-main")
window.addEventListener('scroll', function () {
    let scrolamount = window.scrollY;
    if(scrolamount ==0){
      header.style.backgroundColor="transparent";
      lightLinks.forEach(i => {
        i.style.color="#DBD8E3"
      });
      header.style.position="static"
      burger.style.border="1px solid white"
      line.forEach((item) =>
        item.style.backgroundColor="white");
      
    }
    if(scrolamount>450){
      header.style.position = "fixed";
      burger.style.position = "fixed";
      line.forEach((item) =>
        item.style.backgroundColor="#5C5470");
      burger.style.border = "1px solid #5C5470";
      header.style.backgroundColor="rgba(222,223,225,.75)";
      header.style.zIndex = 25; 
      lightLinks.forEach(i => {
        i.style.color="#5C5470"
      });
      
    }
    
  })


let showMenu = false;
 
burger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
      lightLinks.forEach(i => {
        i.style.color="#5C5470"
      });
        // lightLinks.style.color='#000'
        burger.classList.add("open");
        navlinks.classList.add("open");
        nav.classList.add("open");
        // lightLinks.classList.add("open");
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
