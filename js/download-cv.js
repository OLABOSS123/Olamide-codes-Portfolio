/* ==========================================================
   DOWNLOAD CV
   CV is generated ONLY when the button is clicked
========================================================== */


const downloadCV = document.getElementById("download-cv");


downloadCV.addEventListener("click", function (event) {

    event.preventDefault();


    /* ======================================================
       CREATE CV WINDOW
    ====================================================== */

    const printWindow = window.open(
        "",
        "_blank",
        "width=900,height=1000"
    );


    /* Check if browser blocked the popup */

    if (!printWindow) {

        alert(
            "Please allow pop-ups for this website to generate your CV."
        );

        return;

    }


    /* ======================================================
       GET INFORMATION FROM PORTFOLIO
    ====================================================== */


    const name =
        document.getElementById("profile-name")
            ?.textContent.trim()
        || "Olamide David George";


    const jobTitle =
        document.getElementById("cv-job-title")
            ?.textContent.trim()
        || "Full Stack Developer";


    const about =
        document.getElementById("about-text")
            ?.textContent.trim()
        || "Full Stack Developer passionate about building modern, responsive and scalable web applications.";


    /* ======================================================
       GET PROFILE IMAGE
    ====================================================== */

    const profileImage =
        document.querySelector(
            ".profile-card img"
        );


    const profileImageSrc =
        profileImage?.src || "";


    /* ======================================================
       GET SKILLS
    ====================================================== */

    const skillElements =
        document.querySelectorAll(
            ".skills-grid > div"
        );


    let skillsHTML = "";


    skillElements.forEach(skill => {

        const skillName =
            skill.textContent.trim();


        if (!skillName) return;


        skillsHTML += `

            <span class="skill">

                ${skillName}

            </span>

        `;

    });


    /* ======================================================
       GET PROJECTS
    ====================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    let projectsHTML = "";


    projectCards.forEach((project, index) => {


        const title =
            project.querySelector("h3")
                ?.textContent.trim()
            || `Project ${index + 1}`;


        const description =
            project.querySelector("p")
                ?.textContent.trim()
            || "";


        /* Get project technologies */

        const technologies =
            project.querySelectorAll(
                ".project-stack span"
            );


        let technologyHTML = "";


        technologies.forEach(technology => {

            technologyHTML += `

                <span class="technology">

                    ${technology.textContent.trim()}

                </span>

            `;

        });


        projectsHTML += `

            <div class="project">

                <div class="project-number">

                    ${String(index + 1).padStart(2, "0")}

                </div>


                <div class="project-content">

                    <h3>

                        ${title}

                    </h3>


                    <div class="technologies">

                        ${technologyHTML}

                    </div>


                    <p>

                        ${description}

                    </p>

                </div>

            </div>

        `;

    });


    /* ======================================================
       GET SOCIAL LINKS
    ====================================================== */

    const socialLinks =
        document.querySelectorAll(
            ".socials a"
        );


    let socialHTML = "";


    socialLinks.forEach(link => {

        const url =
            link.getAttribute("href");


        const label =
            link.getAttribute("aria-label")
            || link.dataset.name
            || "Social";


        if (!url || url === "#") return;


        socialHTML += `

            <div class="social">

                <strong>

                    ${label}

                </strong>


                <span>

                    ${url.replace(
                        /^https?:\/\//,
                        ""
                    )}

                </span>

            </div>

        `;

    });


    /* ======================================================
       GET CONTACT INFORMATION
    ====================================================== */

    const email =
        document.getElementById("cv-email")
            ?.textContent.trim()
        || "";


    const phone =
        document.getElementById("cv-phone")
            ?.textContent.trim()
        || "";


    const location =
        document.getElementById("cv-location")
            ?.textContent.trim()
        || "";


    /* ======================================================
       CREATE CV HTML
    ====================================================== */

    const cvHTML = `

        <!DOCTYPE html>

        <html lang="en">

        <head>

            <meta charset="UTF-8">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            >


            <title>

                ${name} - CV

            </title>


            <style>

                /* ==================================================
                   RESET
                ================================================== */

                * {

                    box-sizing: border-box;

                    margin: 0;

                    padding: 0;

                }


                body {

                    font-family:
                        Arial,
                        Helvetica,
                        sans-serif;

                    background: #ffffff;

                    color: #172033;

                    line-height: 1.5;

                }

                .sidebar-title, .skill{
                    color: black;
                }


                /* ==================================================
                   CV PAGE
                ================================================== */

                .cv-page {

                    width: 210mm;

                    min-height: 297mm;

                    margin: auto;

                    background: #ffffff;

                }


                /* ==================================================
                   HEADER
                ================================================== */

                .cv-header {

                    position: relative;

                    padding: 35px 45px;

                    color: white;

                    background:

                        radial-gradient(
                            circle at 85% 20%,
                            rgba(0, 132, 255, .35),
                            transparent 30%
                        ),

                        linear-gradient(
                            135deg,
                            #030b16,
                            #081b2c
                        );

                    border-top: 4px solid #2387ff;

                }


                .header-content {

                    display: flex;

                    align-items: center;

                    gap: 25px;

                }


                /* ==================================================
                   PROFILE IMAGE
                ================================================== */

                .profile-image {

                    width: 115px;

                    height: 115px;

                    flex-shrink: 0;

                    padding: 4px;

                    border-radius: 50%;

                    border: 2px solid #2185ff;

                    background: #071321;

                }


                .profile-image img {

                    width: 100%;

                    height: 100%;

                    object-fit: cover;

                    border-radius: 50%;

                }


                /* ==================================================
                   NAME
                ================================================== */

                .header-text h1 {

                    font-size: 32px;

                    font-weight: 800;

                    letter-spacing: .5px;

                    text-transform: uppercase;

                    color:  #000000;

                }


                .header-text h2 {

                    margin-top: 5px;

                    color: #2d8cff;

                    font-size: 14px;

                    letter-spacing: 1.5px;

                    text-transform: uppercase;

                }


                .header-text p {

                    max-width: 520px;

                    margin-top: 10px;

                    color: #000000;

                    font-size: 10px;

                    line-height: 1.6;

                }


                /* ==================================================
                   CONTACT
                ================================================== */

                .contact {

                    display: flex;

                    flex-wrap: wrap;

                    gap: 18px;

                    margin-top: 14px;

                    color: #000000;

                    font-size: 9px;

                }


                /* ==================================================
                   BODY
                ================================================== */

                .cv-body {

                    display: grid;

                    grid-template-columns:
                        180px 1fr;

                    min-height: 205mm;

                }


                /* ==================================================
                   SIDEBAR
                ================================================== */

                .sidebar {

                    padding: 30px 25px;

                    color: #000000;

                    background:

                        linear-gradient(
                            180deg,
                            #07121f,
                            #0b1725
                        );

                }


                .sidebar-section {

                    margin-bottom: 30px;

                }


                .sidebar-title {

                    margin-bottom: 15px;

                    padding-bottom: 7px;

                    border-bottom:
                        1px solid
                        rgba(255,255,255,.2);

                    color: #000000;

                    font-size: 11px;

                    font-weight: 700;

                    letter-spacing: 1px;

                }


                .sidebar-title span {

                    margin-right: 8px;

                    color: #2687ff;

                }

                .sidebar-title h5{
                    color:black;
                }


                /* ==================================================
                   SKILLS
                ================================================== */

                .skills {

                    display: flex;

                    flex-direction: column;

                    gap: 9px;

                }


                .skill {

                    position: relative;

                    padding-left: 13px;

                    color: #000000;

                    font-size: 9px;

                }


                .skill::before {

                    content: "";

                    position: absolute;

                    left: 0;

                    top: 5px;

                    width: 5px;

                    height: 5px;

                    border-radius: 50%;

                    background: #2487ff;

                }


                /* ==================================================
                   SOCIALS
                ================================================== */

                .socials {

                    display: flex;

                    flex-direction: column;

                    gap: 10px;

                }


                .social {

                    display: flex;

                    flex-direction: column;

                    gap: 2px;

                }


                .social strong {

                    color: #2c8cff;

                    font-size: 8px;

                    text-transform: uppercase;

                }


                .social span {

                    color: #000000;

                    font-size: 7px;

                    word-break: break-all;

                }


                /* ==================================================
                   MAIN CONTENT
                ================================================== */

                .main-content {

                    padding: 30px 35px;

                }


                .section {

                    margin-bottom: 28px;

                }

                span{
                    color: #000000;
                }


                .section-heading {

                    display: flex;

                    align-items: center;

                    gap: 9px;

                    margin-bottom: 12px;

                    padding-bottom: 7px;

                    border-bottom:
                        1px solid #dce3eb;

                }


                .section-number {

                    color: #2587ff;

                    font-size: 9px;

                    font-weight: 700;

                }


                .section-heading h2 {

                    color: #172033;

                    font-size: 13px;

                    letter-spacing: .5px;

                    text-transform: uppercase;

                }


                .summary {

                    color: #05090e;

                    font-size: 9px;

                    line-height: 1.7;

                }


                /* ==================================================
                   EXPERIENCE
                ================================================== */

                .experience {

                    padding-left: 18px;

                    border-left: 1px dotted #7da9d7;

                }


                .experience h3 {

                    font-size: 11px;

                    color: #172033;

                }


                .experience .role {

                    margin: 3px 0 8px;

                    color: #2587ff;

                    font-size: 8px;

                    font-weight: 700;

                    text-transform: uppercase;

                }


                .experience p {

                    color: #000000;

                    font-size: 8.5px;

                    line-height: 1.6;

                }


                .experience ul {

                    margin-top: 8px;

                    padding-left: 15px;

                }


                .experience li {

                    margin-bottom: 4px;

                    color: #000000;

                    font-size: 8px;

                }


                /* ==================================================
                   PROJECTS
                ================================================== */

                .project {

                    display: flex;

                    gap: 15px;

                    margin-bottom: 15px;

                    padding-bottom: 12px;

                    border-bottom:
                        1px solid #e3e8ee;

                }


                .project-number {

                    color: #2587ff;

                    font-size: 10px;

                    font-weight: 700;

                }


                .project-content {

                    flex: 1;

                }


                .project-content h3 {

                    margin-bottom: 5px;

                    color: #000000;

                    font-size: 10px;

                }


                .project-content p {

                    margin-top: 5px;

                    color: #000000;

                    font-size: 8px;

                    line-height: 1.5;

                }


                .technologies {

                    display: flex;

                    flex-wrap: wrap;

                    gap: 5px;

                }


                .technology {

                    padding: 3px 7px;

                    border-radius: 10px;

                    background: #edf4ff;

                    color: #2587ff;

                    font-size: 6.5px;

                }


                /* ==================================================
                   FOOTER
                ================================================== */

                .cv-footer {

                    display: flex;

                    justify-content: space-between;

                    padding: 12px 35px;

                    color: #ffffff;

                    background: #06111d;

                    border-bottom: 3px solid #2587ff;

                    font-size: 7px;

                }


                /* ==================================================
                   PRINT
                ================================================== */

                @media print {

                    body {

                        margin: 0;

                    }


                    .cv-page {

                        width: 210mm;

                        min-height: 297mm;

                    }

                }

            </style>

        </head>


        <body>


            <div class="cv-page">


                <!-- ==========================================
                     HEADER
                =========================================== -->

                <header class="cv-header">


                    <div class="header-content">


                        ${
                            profileImageSrc
                            ?

                            `

                            <div class="profile-image">

                                <img
                                    src="${profileImageSrc}"
                                    alt="${name}"
                                >

                            </div>

                            `

                            :

                            ""

                        }


                        <div class="header-text">


                            <h1>

                                ${name}

                            </h1>


                            <h2>

                                ${jobTitle}

                            </h2>


                            <p>

                                ${about}

                            </p>


                            <div class="contact">

                                ${
                                    email
                                    ?
                                    `<span>
                                        ✉ ${email}
                                    </span>`
                                    :
                                    ""
                                }


                                ${
                                    phone
                                    ?
                                    `<span>
                                        ☎ ${phone}
                                    </span>`
                                    :
                                    ""
                                }


                                ${
                                    location
                                    ?
                                    `<span>
                                        📍 ${location}
                                    </span>`
                                    :
                                    ""
                                }

                            </div>


                        </div>


                    </div>


                </header>



                <!-- ==========================================
                     BODY
                =========================================== -->

                <div class="cv-body">


                    <!-- SIDEBAR -->

                    <aside class="sidebar">


                        <div class="sidebar-section">


                            <div class="sidebar-title">

                                <span>
                                    01
                                </span>

                                SKILLS

                            </div>


                            <div class="skills">

                                ${skillsHTML}

                            </div>


                        </div>



                        <div class="sidebar-section">


                            <div class="sidebar-title" >

                                <span>
                                    02
                                </span>

                                EDUCATION

                            </div>


                            <h5
                                style="
                                    style="color: #000000;
                                    font-size:5px;
                                    line-height:1.5;
                                    margin-bottom:7px;
                                    font-weight:light;
                                "
                            >

                                Professional Diploma in Information Technology In Computer Software Engineering

                            </h5>


                            <p
                                style="
                                    color:#00000;
                                    font-size:13px;
                                "
                            >

                               NIIT, 22 Rd , Damilola Plaza, Festac , Lagos
                               <br>
                               2019  - 2024

                            </p>


                        </div>



                        <div class="sidebar-section">


                            <div class="sidebar-title">

                                <span>
                                    03
                                </span>

                                CONNECT 

                            </div>


                            <div class="socials">

                                ${socialHTML}

                            </div>


                        </div>


                    </aside>



                    <!-- MAIN -->

                    <main class="main-content">


                        <!-- SUMMARY -->

                        <section class="section">


                            <div class="section-heading">

                                <span class="section-number">
                                    01
                                </span>

                                <h2>
                                    Professional Summary
                                </h2>

                            </div>


                            <p class="summary">

                                ${about}

                            </p>


                        </section>



                        <!-- EXPERIENCE -->

                        <section class="section">


                            <div class="section-heading">

                                <span class="section-number">
                                    02
                                </span>

                                <h2>
                                    Experience
                                </h2>

                            </div>

                            
                            <div class="experience">


                                <h3>

                                    MOBA  Registration Form

                                </h3>


                                <div class="role">

                                   Frontend Developer

                                </div>


                                <p>

                                    Built a fully responsive registration page for a religious Organisation

                                </p>

                            </div>

                            <br>


                            <div class="experience">


                                <h3>

                                    Paint Desktop Application

                                </h3>


                                <div class="role">

                                    Junior Java Developer

                                </div>

                            

                                <p>

                                    A Desktop Application used in drawing , painting , moving, decorating shapes. 
                                    It is also used to draw Lines and Scribbles (Free-hand Sketch).


                                </p>



                            </div>


                        </section>



                        <!-- PROJECTS -->

                        <section class="section">


                            <div class="section-heading">

                                <span class="section-number">
                                    03
                                </span>

                                <h2>
                                    Featured Projects
                                </h2>

                            </div>


                            ${projectsHTML}


                        </section>


                    </main>


                </div>



                <!-- ==========================================
                     FOOTER
                =========================================== -->

                <footer class="cv-footer">

                    <span>

                        ${name}

                    </span>


                    <span>

                        ${jobTitle}

                    </span>


                    <span>

                        Portfolio CV

                    </span>

                </footer>


            </div>


        </body>

        </html>

    `;


    /* ======================================================
       WRITE CV INTO NEW WINDOW
    ====================================================== */

    printWindow.document.open();

    printWindow.document.write(cvHTML);

    printWindow.document.close();


    /* ======================================================
       PRINT / SAVE PDF
       THIS IS STILL INSIDE THE CLICK EVENT
    ====================================================== */

    printWindow.onload = function () {

        setTimeout(function () {

            printWindow.focus();

            printWindow.print();

        }, 700);

    };


});