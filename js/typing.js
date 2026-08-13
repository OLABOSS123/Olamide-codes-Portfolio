/* ==========================================================
   TYPING ANIMATION
========================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "Software Developer"
];

let wordIndex = 0;
let characterIndex = 0;

let isDeleting = false;


/* ==========================================================
   TYPING FUNCTION
========================================================== */

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    /* Display text */

    typingElement.textContent =
        currentWord.substring(
            0,
            characterIndex
        );


    /* ======================================================
       WHEN WORD IS COMPLETELY TYPED
    ====================================================== */

    if (!isDeleting && characterIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1800);

        return;

    }


    /* ======================================================
       WHEN WORD IS COMPLETELY DELETED
    ====================================================== */

    if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(typeEffect, 400);

        return;

    }


    /* ======================================================
       TYPING / DELETING SPEED
    ====================================================== */

    const typingSpeed = isDeleting
        ? 50
        : 100;


    setTimeout(
        typeEffect,
        typingSpeed
    );

}


/* ==========================================================
   START ANIMATION
========================================================== */

if (typingElement) {

    typeEffect();

}