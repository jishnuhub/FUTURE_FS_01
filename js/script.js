// Typing animation
new Typed("#typing", {
    strings: [
        "MCA Student",
        "Frontend Developer",
        "Full-Stack Developer",
        "Python Programmer"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Active navigation link while scrolling
const sections = document.querySelectorAll("header[id], section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// Close mobile menu after selecting a navigation link
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const navbarMenu = document.getElementById("navbarNav");

        if (navbarMenu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
        }
    });
});
// Scroll reveal animations
const revealElements = document.querySelectorAll(
    ".about .row, .skill-box, .project-card, .education-card, .contact-form"
);

revealElements.forEach(function (element, index) {
    if (index % 2 === 0) {
        element.classList.add("reveal-left");
    } else {
        element.classList.add("reveal-right");
    }
});

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});