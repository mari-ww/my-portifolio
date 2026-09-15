const sideMenu = document.querySelector("#sideMenu");
const navbar = document.querySelector("#navbar");
const themeIcon = document.querySelector("#themeIcon");
const languageButton = document.querySelector("#languageButton");
const contactForm = document.querySelector(".contact-form");


// =====================================================
// MOBILE MENU
// =====================================================

function openMenu() {
    sideMenu.classList.add("open");
}

function closeMenu() {
    sideMenu.classList.remove("open");
}


// =====================================================
// NAVBAR ON SCROLL
// =====================================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =====================================================
// THEME ICON
// =====================================================

function updateThemeIcon() {

    const dark = document.body.classList.contains("dark");

    if (dark) {

        // Sun
        themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="4"></circle>

            <path d="
                M12 2v2
                M12 20v2
                M4.93 4.93l1.41 1.41
                M17.66 17.66l1.41 1.41
                M2 12h2
                M20 12h2
                M4.93 19.07l1.41-1.41
                M17.66 6.34l1.41-1.41
            "></path>
        `;

    } else {

        // Moon
        themeIcon.innerHTML = `
            <path d="
                M20.7 15.3A8.7 8.7 0 0 1 8.7 3.3
                8.7 8.7 0 1 0 20.7 15.3Z
            "></path>
        `;
    }
}


// =====================================================
// DARK MODE
// =====================================================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon();
}


// =====================================================
// LOAD SAVED THEME
// =====================================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

updateThemeIcon();


// =====================================================
// TRANSLATIONS
// =====================================================

const translations = {

    en: {

        navHome: "Home",
        navAbout: "About me",
        navServices: "Services",
        navWork: "My Work",
        navContact: "Contact me",
        contactButton: "Contact",

        greeting: "Hi! I'm Mariana",
        heroTitle: "Software Developer",

        heroDescription:
            "Computer Science graduate focused on building practical, reliable and user-friendly web applications.",

        contactMe: "Contact me",
        resume: "My resume",

        introduction: "Introduction",
        aboutTitle: "About me",

        aboutText1:
            "I'm a Computer Science graduate passionate about software development and creating useful digital experiences.",

        aboutText2:
            "My main focus is backend development with Python, while also working with modern frontend technologies to build complete applications.",

        languagesTitle: "Languages",
        languagesText:
            "Python, JavaScript, TypeScript, HTML and CSS.",

        educationTitle: "Education",
        educationText:
            "Bachelor's degree in Computer Science.",

        projectsTitle: "Projects",
        projectsText:
            "A selection of applications I've built while developing my skills as a software developer.",

        toolsTitle: "Tools I Use",
        webTechnologies: "Web Technologies",

        servicesIntro: "What I offer",
        servicesTitle: "My Services",

        servicesDescription:
            "I build practical software solutions with a focus on functionality, usability and clean architecture.",

        webDevelopment: "Web Development",
        webDevelopmentText:
            "Responsive and modern web applications built around real user needs.",

        backendDevelopment: "Backend Development",
        backendDevelopmentText:
            "APIs and backend systems using Python, FastAPI and relational databases.",

        fullStack: "Full-Stack Applications",
        fullStackText:
            "Complete applications connecting frontend, backend and database layers.",

        learnMore: "Learn more",

        portfolioIntro: "My portfolio",
        latestWork: "My Latest Work",

        workDescription:
            "A selection of applications I've built while developing my skills as a software developer.",

        fullStackApplication: "Full-Stack Application",
        showMore: "Show more",

        getInTouch: "Get in touch",
        contactTitle: "Contact with me",

        contactDescription:
            "Have a project or opportunity in mind? Feel free to get in touch.",

        yourName: "Your name",
        yourEmail: "Your email",
        yourMessage: "Your message",

        sendMessage: "Send message",

        footerRights:
            "© 2026 Mariana. All rights reserved."
    },


    pt: {

        navHome: "Início",
        navAbout: "Sobre mim",
        navServices: "Serviços",
        navWork: "Meus Projetos",
        navContact: "Contato",
        contactButton: "Contato",

        greeting: "Oi! Eu sou a Mariana",
        heroTitle: "Desenvolvedora de Software",

        heroDescription:
            "Formada em Ciência da Computação, focada em desenvolver aplicações web práticas, confiáveis e fáceis de usar.",

        contactMe: "Entre em contato",
        resume: "Meu currículo",

        introduction: "Introdução",
        aboutTitle: "Sobre mim",

        aboutText1:
            "Sou formada em Ciência da Computação e apaixonada por desenvolvimento de software e pela criação de experiências digitais úteis.",

        aboutText2:
            "Meu foco principal é desenvolvimento backend com Python, enquanto também trabalho com tecnologias modernas de frontend para criar aplicações completas.",

        languagesTitle: "Linguagens",
        languagesText:
            "Python, JavaScript, TypeScript, HTML e CSS.",

        educationTitle: "Formação",
        educationText:
            "Bacharelado em Ciência da Computação.",

        projectsTitle: "Projetos",
        projectsText:
            "Uma seleção das aplicações que desenvolvi enquanto construía minhas habilidades como desenvolvedora de software.",

        toolsTitle: "Ferramentas que uso",
        webTechnologies: "Tecnologias Web",

        servicesIntro: "O que ofereço",
        servicesTitle: "Meus Serviços",

        servicesDescription:
            "Desenvolvo soluções de software práticas com foco em funcionalidade, usabilidade e arquitetura limpa.",

        webDevelopment: "Desenvolvimento Web",
        webDevelopmentText:
            "Aplicações web modernas e responsivas construídas pensando nas necessidades reais dos usuários.",

        backendDevelopment: "Desenvolvimento Backend",
        backendDevelopmentText:
            "APIs e sistemas backend utilizando Python, FastAPI e bancos de dados relacionais.",

        fullStack: "Aplicações Full-Stack",
        fullStackText:
            "Aplicações completas conectando frontend, backend e banco de dados.",

        learnMore: "Saiba mais",

        portfolioIntro: "Meu portfólio",
        latestWork: "Meus Projetos Recentes",

        workDescription:
            "Uma seleção das aplicações que desenvolvi enquanto construía minhas habilidades como desenvolvedora de software.",

        fullStackApplication: "Aplicação Full-Stack",
        showMore: "Ver mais",

        getInTouch: "Entre em contato",
        contactTitle: "Fale comigo",

        contactDescription:
            "Tem um projeto ou oportunidade em mente? Fique à vontade para entrar em contato.",

        yourName: "Seu nome",
        yourEmail: "Seu email",
        yourMessage: "Sua mensagem",

        sendMessage: "Enviar mensagem",

        footerRights:
            "© 2026 Mariana. Todos os direitos reservados."
    }
};


// =====================================================
// CHANGE LANGUAGE
// =====================================================

let currentLanguage =
    localStorage.getItem("language") || "en";


function setText(selector, text) {

    const element = document.querySelector(selector);

    if (element) {
        element.textContent = text;
    }
}


function applyLanguage() {

    const t = translations[currentLanguage];


    // NAVBAR

    const desktopLinks =
        document.querySelectorAll(".desktop-nav a");

    if (desktopLinks.length >= 5) {

        desktopLinks[0].textContent = t.navHome;
        desktopLinks[1].textContent = t.navAbout;
        desktopLinks[2].textContent = t.navServices;
        desktopLinks[3].textContent = t.navWork;
        desktopLinks[4].textContent = t.navContact;
    }


    setText(".nav-contact", t.contactButton);


    // MOBILE MENU

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");

    if (mobileLinks.length >= 5) {

        mobileLinks[0].textContent = t.navHome;
        mobileLinks[1].textContent = t.navAbout;
        mobileLinks[2].textContent = t.navServices;
        mobileLinks[3].textContent = t.navWork;
        mobileLinks[4].textContent = t.navContact;
    }


    // HERO

    const greeting = document.querySelector(".hero-greeting");

    if (greeting) {

        const icon = greeting.querySelector("svg");

        greeting.innerHTML = "";

        if (icon) {
            greeting.appendChild(icon);
        }

        greeting.appendChild(
            document.createTextNode(" " + t.greeting)
        );
    }


    setText(".hero h1", t.heroTitle);
    setText(".hero-description", t.heroDescription);

    // RESUME

    const resumeButton =
        document.querySelector("#resumeButton");

    if (resumeButton) {

        resumeButton.href =
            currentLanguage === "pt"
                ? "./assets/cv-pt.pdf"
                : "./assets/cv-eng.pdf";
    }


    const primaryButton =
        document.querySelector(".primary-button");

    if (primaryButton) {

        const svg = primaryButton.querySelector("svg");

        primaryButton.innerHTML = "";

        primaryButton.appendChild(
            document.createTextNode(t.contactMe + " ")
        );

        if (svg) {
            primaryButton.appendChild(svg);
        }
    }


    const secondaryButton =
        document.querySelector(".secondary-button");

    if (secondaryButton) {

        const svg = secondaryButton.querySelector("svg");

        secondaryButton.innerHTML = "";

        secondaryButton.appendChild(
            document.createTextNode(t.resume + " ")
        );

        if (svg) {
            secondaryButton.appendChild(svg);
        }
    }


    // ABOUT

    const aboutHeading =
        document.querySelector("#about .section-heading");

    if (aboutHeading) {

        const small =
            aboutHeading.querySelector("p");

        const title =
            aboutHeading.querySelector("h2");

        if (small) small.textContent = t.introduction;
        if (title) title.textContent = t.aboutTitle;
    }


    const aboutParagraphs =
        document.querySelectorAll(".about-text > p");

    if (aboutParagraphs[0])
        aboutParagraphs[0].textContent = t.aboutText1;

    if (aboutParagraphs[1])
        aboutParagraphs[1].textContent = t.aboutText2;


    // ABOUT CARDS

    const aboutCards =
        document.querySelectorAll(".about-card");

    if (aboutCards[0]) {
        setCardText(
            aboutCards[0],
            t.languagesTitle,
            t.languagesText
        );
    }

    if (aboutCards[1]) {
        setCardText(
            aboutCards[1],
            t.educationTitle,
            t.educationText
        );
    }

    if (aboutCards[2]) {
        setCardText(
            aboutCards[2],
            t.projectsTitle,
            t.projectsText
        );
    }


    // TOOLS

    const subHeadings =
        document.querySelectorAll(".sub-heading");

    if (subHeadings[0])
        subHeadings[0].textContent = t.toolsTitle;

    if (subHeadings[1])
        subHeadings[1].textContent = t.webTechnologies;


    // SERVICES

    const servicesHeading =
        document.querySelector("#services .section-heading");

    if (servicesHeading) {

        const small =
            servicesHeading.querySelector("p");

        const title =
            servicesHeading.querySelector("h2");

        const description =
            servicesHeading.querySelector("span");

        if (small)
            small.textContent = t.servicesIntro;

        if (title)
            title.textContent = t.servicesTitle;

        if (description)
            description.textContent = t.servicesDescription;
    }


    const serviceCards =
        document.querySelectorAll(".service-card");

    if (serviceCards[0]) {
        setCardText(
            serviceCards[0],
            t.webDevelopment,
            t.webDevelopmentText
        );
    }

    if (serviceCards[1]) {
        setCardText(
            serviceCards[1],
            t.backendDevelopment,
            t.backendDevelopmentText
        );
    }

    if (serviceCards[2]) {
        setCardText(
            serviceCards[2],
            t.fullStack,
            t.fullStackText
        );
    }


    document
        .querySelectorAll(".service-card a")
        .forEach(link => {

            const svg = link.querySelector("svg");

            link.innerHTML = "";

            link.appendChild(
                document.createTextNode(t.learnMore + " ")
            );

            if (svg) {
                link.appendChild(svg);
            }
        });


    // WORK

    const workHeading =
        document.querySelector("#work .section-heading");

    if (workHeading) {

        const small =
            workHeading.querySelector("p");

        const title =
            workHeading.querySelector("h2");

        const description =
            workHeading.querySelector("span");

        if (small)
            small.textContent = t.portfolioIntro;

        if (title)
            title.textContent = t.latestWork;

        if (description)
            description.textContent = t.workDescription;
    }


    document
        .querySelectorAll(".project-content p")
        .forEach(element => {

            element.textContent =
                t.fullStackApplication;
        });


    const showMore =
        document.querySelector(".show-more a");

    if (showMore) {

        const svg = showMore.querySelector("svg");

        showMore.innerHTML = "";

        showMore.appendChild(
            document.createTextNode(t.showMore + " ")
        );

        if (svg) {
            showMore.appendChild(svg);
        }
    }


    // CONTACT

    const contactHeading =
        document.querySelector("#contact .section-heading");

    if (contactHeading) {

        const small =
            contactHeading.querySelector("p");

        const title =
            contactHeading.querySelector("h2");

        const description =
            contactHeading.querySelector("span");

        if (small)
            small.textContent = t.getInTouch;

        if (title)
            title.textContent = t.contactTitle;

        if (description)
            description.textContent =
                t.contactDescription;
    }


    const nameInput =
        document.querySelector('input[name="name"]');

    const emailInput =
        document.querySelector('input[name="email"]');

    const messageInput =
        document.querySelector('textarea[name="message"]');


    if (nameInput)
        nameInput.placeholder = t.yourName;

    if (emailInput)
        emailInput.placeholder = t.yourEmail;

    if (messageInput)
        messageInput.placeholder = t.yourMessage;


    const submitButton =
        document.querySelector(".contact-form button");

    if (submitButton) {

        const svg = submitButton.querySelector("svg");

        submitButton.innerHTML = "";

        submitButton.appendChild(
            document.createTextNode(t.sendMessage + " ")
        );

        if (svg) {
            submitButton.appendChild(svg);
        }
    }


    // FOOTER

    setText(
        ".footer-bottom p",
        t.footerRights
    );


    // LANGUAGE BUTTON

    if (languageButton) {

        languageButton.textContent =
            currentLanguage === "en"
                ? "Português"
                : "English";
    }


    // HTML LANGUAGE

    document.documentElement.lang =
        currentLanguage === "en"
            ? "en"
            : "pt-BR";
}


// =====================================================
// ABOUT / SERVICE CARD HELPER
// =====================================================

function setCardText(card, title, description) {

    const heading = card.querySelector("h3");
    const paragraph = card.querySelector("p");

    if (heading)
        heading.textContent = title;

    if (paragraph)
        paragraph.textContent = description;
}


// =====================================================
// TOGGLE LANGUAGE
// =====================================================

function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en"
            ? "pt"
            : "en";

    localStorage.setItem(
        "language",
        currentLanguage
    );

    applyLanguage();
}


// =====================================================
// LOAD LANGUAGE
// =====================================================

applyLanguage();


// =====================================================
// CONTACT FORM
// =====================================================

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (currentLanguage === "pt") {

            alert(
                "O formulário está pronto para ser conectado a um serviço de email."
            );

        } else {

            alert(
                "The contact form is ready to be connected to an email service."
            );
        }

    });
}