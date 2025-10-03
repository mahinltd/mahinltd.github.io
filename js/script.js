document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to update active navigation link
    const updateActiveLink = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Subtract a bit from sectionTop to trigger the active state earlier
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', updateActiveLink);

    // Initial check in case the page is loaded on a specific section
    updateActiveLink();

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // The 50px offset accounts for the sticky header height
                const offsetPosition = targetElement.offsetTop - 50;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});