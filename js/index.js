const burger=document.querySelector(".burger")
const navlinks=document.querySelector("nav .nav-links")
const links= document.querySelectorAll(".nav-links li")
const line=document.querySelectorAll(".burger >.line")
const nav= document.querySelector("nav")
const header = document.querySelector('navbar');
const lightLinks=document.querySelectorAll('.light-link')
const heroMain=document.querySelector(".hero-main")
const logo= document.querySelector(".logo a img")
const logoContainer= document.querySelector(".logo")
window.addEventListener('scroll', function () {
    let scrolamount = window.scrollY;
    if(scrolamount ==0){
      header.style.backgroundColor="transparent";
      // lightLinks.forEach(i => {
      //   i.style.color="#DBD8E3"
      // });
      header.style.position="static"
      logo.style.height="60px"
      logo.style.width="60px"
      logoContainer.style.marginTop="1%"
      
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
      logo.style.height="45px"
      logo.style.width="45px"
      logoContainer.style.marginTop="0.25%"
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
        nav.classList.add("open");
        // lightLinks.classList.add("open");
        links.forEach((item) =>
        item.classList.add("fade"));
        if(window.innerWidth<768){
          navlinks.classList.add("open2");
        }
        else if(window.innerWidth>768){
          navlinks.classList.add("open");
          
        }
        // Reset the menu state
        showMenu = true;
    
    } else {
    
        burger.classList.remove("open");
        
        nav.classList.remove("open");
        // .classList.remove("open");
        links.forEach((item) =>
            item.classList.remove("fade"));
            if(window.innerWidth<768){
              navlinks.classList.remove("open2");
            }
            else if(window.innerWidth>768){
              navlinks.classList.remove("open");
              
            }
        // Reset the menu state
        showMenu = false;
    }
}

if(window.innerWidth<=768){
  console.log("ndjnjdnf")
  const mentorship= document.querySelector('.hb_mentorship')
  mentorship.innerHTML=`
<div class="splide">
<div class="splide__track">
<div class="splide__list hb_mentorship-pages">
<div class=" splide__slide hb_mentorship-text">
  <h2>Mentorship Program</h2>
  <p>
      The Mentorship Program is an initiative by Diligentia, where we seek to conduct live webinars & sessions for students who want to learn the core skills of a successful entrepreneur. Renowned entrepreneurs,  mentors, and coaches will be sharing their insights & explicit knowledge in their field of expertise. Students can enroll for various sessions ranging from finance, e-commerce, trading, small business, startups, market research, AI & so on. If you want to learn about entrepreneurship & business from the people who have aced it, you hit the right spot. 
  </p>
  </div>
   <div class="splide__slide first-mentorship">
       <h2>Project one</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum debitis est eligendi enim accusantium illum odit repudiandae ipsum praesentium?</p>
   </div>
   <div class="splide__slide second-mentorship">
       <h2>Project 2</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum debitis est eligendi enim accusantium illum odit repudiandae ipsum praesentium?</p>
   </div>
   <div class="splide__slide third-mentorship">
       <h2>Project 3</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum debitis est eligendi enim accusantium illum odit repudiandae ipsum praesentium?</p>
   </div>
</div>
</div>`

  var splide = new Splide( '.splide', {
   direction: 'ttb',
   height   : '90vh',
   wheel    : true,
   releaseWheel: true
   } );

   splide.mount();

}
if(window.innerWidth>=768){
function splitScroll(){
  const controller=new ScrollMagic.Controller()
  new ScrollMagic.Scene({
       duration:'200%',
       triggerElement:'.hb_mentorship-text',
       triggerHook:0
  })
  .setPin('.hb_mentorship-text')
  .addTo(controller)
}
splitScroll()
}