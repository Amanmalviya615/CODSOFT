function myMenufunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth,className === "nav-menu") {
        menuBth,className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }

}


/*------Dark mode------*/

const body = document.querySelector('body');
    toggleswitch = document.getElementById("toggle-switch");

toggleswitch.addEventListener('click', ()=> {
  body.classList.toggle('dark');
});


/*------Scroll animation------*/

const sr = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration: 2000,
    reset: true,
});

sr.Reveal(".feature-name", { delay: 100 });
sr.Reveal(".text-info", { delay: 200 });
sr.Reveal(".text-btn", { delay: 200 });
sr.Reveal(".social_icons", { delay: 200 });
sr.Reveal(".feature-image", { delay: 320 });


sr.Reveal(".project-box", {interval: 200});

sr.Reveal(".top-header", {});


const srLeft = ScrollReveal({
    origin: "left",
    distance:"80px",
    duration: 2000,
    reset: true,
})

sr.reveal(".about-info", { delay: 100 });
sr.reveal(".contact-info", { delay: 100 });

const srReft = scrollReveal({
    origin: "left",
    distance:"80px",
    duration: 2000,
    reset: true,
})

sr.Right.reveal(".skill", { delay: 100 });
sr.Right.reveal(".skill-box", { delay: 100 });


/*------active link------*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrolly = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrolly > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });      
}

window.addEventListener("scroll", scrollActive);

