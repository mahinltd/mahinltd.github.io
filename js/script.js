/* © 2025 Mahin Ltd. All rights reserved. */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // --- Details Modal Logic ---
    const modalOverlay = document.getElementById('details-modal');
    
    // Check if modal exists on the page
    if (modalOverlay) {
        const modalTitle = document.getElementById('modal-title');
        const modalImage = modalOverlay.querySelector('.modal-image');
        const modalDescription = document.getElementById('modal-description');
        const closeModalBtn = modalOverlay.querySelector('.modal-close');
        const clickableCards = document.querySelectorAll('.clickable-card');

        // Function to open the modal
        const openModal = (event) => {
            const card = event.currentTarget;
            
            // Get data from the clicked card
            const title = card.dataset.modalTitle;
            const image = card.dataset.modalImage;
            const description = card.dataset.modalDescription;

            // Populate the modal
            if (modalTitle) modalTitle.textContent = title;
            if (modalImage) modalImage.src = image;
            if (modalDescription) modalDescription.textContent = description;

            // Show the modal
            modalOverlay.classList.add('active');
        };

        // Function to close the modal
        const closeModal = () => {
            modalOverlay.classList.remove('active');
        };

        // Add click listener to all clickable cards
        clickableCards.forEach(card => {
            card.addEventListener('click', openModal);
        });

        // Add click listener to close button
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }

        // Add click listener to overlay (to close when clicking outside the content)
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // --- Active Nav Link ---
    // This makes the nav link 'active' based on the current page
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.desktop-nav ul li a, .mobile-nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        link.classList.remove('active'); // Remove active from all
        
        if (currentLocation === '' && linkHref === 'index.html') {
            // Handle root path for index.html
            link.classList.add('active');
        } else if (linkHref === currentLocation) {
            link.classList.add('active');
        }
    });

});