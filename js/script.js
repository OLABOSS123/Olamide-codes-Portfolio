import "./navbar.js";
import "./projects/filter.js";
import "./tabs.js";
import "./portfolio.js";
import "./typing.js";
import "./scroll.js";

/* ==========================================================
   ACTIVE NAVIGATION LINK
========================================================== */

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        // Remove active from every link
        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        // Add active to the clicked link
        this.classList.add("active");

    });

});


/* ==========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================== */

const sections = document.querySelectorAll("main section[id]");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        const target =
            link.getAttribute("href");


        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


updateActiveLink();