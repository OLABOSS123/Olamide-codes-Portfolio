/*==========================================================
                    PROJECT FILTER
==========================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if(filter === "all" || category === filter){

                card.style.display = "flex";

                setTimeout(() => {

                    card.style.opacity = "1";

                    card.style.transform = "scale(1)";

                },150);

            }

            else{

                card.style.opacity = "0";

                card.style.transform = "scale(.8)";

                setTimeout(() => {

                    card.style.display = "none";

                },300);

            }

        });

    });

});