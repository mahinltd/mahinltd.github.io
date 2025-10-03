// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Highlight active section in navbar
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            let id = section.getAttribute("id");
            document.querySelectorAll("nav a").forEach(a => {
                a.classList.remove("active");
            });
            let activeLink = document.querySelector(`nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
});

// Fake contact form handler
document.addEventListener("DOMContentLoaded", () => {
    let contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("✅ Message Sent! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});
