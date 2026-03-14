/**
 * temples.js - Functionality for the photo album
 * WDD131 - Week 02
 */

// ============================================
// 1. WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // 2. DYNAMIC FOOTER (copyright + modification)
    // ========================================
    function updateFooter() {
        const footerElement = document.getElementById('footer-info');
        if (!footerElement) return;

        const currentYear = new Date().getFullYear();
        const lastModified = document.lastModified;  // Last modified date

        // More readable date formatting
        const lastModDate = new Date(lastModified);
        const formattedDate = lastModDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        footerElement.innerHTML = `© ${currentYear} · Your Name · Last Modified: ${formattedDate}`;
    }

    // ========================================
    // 3. HAMBURGER MENU
    // ========================================
    function setupHamburgerMenu() {
        const nav = document.querySelector('nav');
        const navUl = document.querySelector('nav ul');

        if (!nav || !navUl) return;

        // Create hamburger button
        const hamburgerBtn = document.createElement('button');
        hamburgerBtn.id = 'menu-button';
        hamburgerBtn.setAttribute('aria-label', 'Navigation menu');
        hamburgerBtn.textContent = '☰';

        // Insert the button INSIDE the nav, BEFORE the ul
        nav.insertBefore(hamburgerBtn, navUl);

        // Menu state (closed by default)
        let menuOpen = false;

        // Function to toggle menu
        function toggleMenu() {
            menuOpen = !menuOpen;
            navUl.classList.toggle('show');

            // Change icon ☰ ↔ ✕
            hamburgerBtn.textContent = menuOpen ? '✕' : '☰';

            // ARIA attribute for accessibility
            hamburgerBtn.setAttribute('aria-expanded', menuOpen);
        }

        // Listen for button click
        hamburgerBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Optional: Close menu when clicking a link (mobile)
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                // Check if we're in mobile mode (button visible)
                const isMobile = window.getComputedStyle(hamburgerBtn).display !== 'none';

                if (isMobile && menuOpen) {
                    toggleMenu();  // Close menu
                }
            });
        });

        // Optional: Close menu when clicking elsewhere
        document.addEventListener('click', function (e) {
            const isMobile = window.getComputedStyle(hamburgerBtn).display !== 'none';

            if (isMobile && menuOpen && !nav.contains(e.target)) {
                toggleMenu();  // Close if clicking outside
            }
        });
    }

    // ========================================
    // 4. EXECUTE FUNCTIONS
    // ========================================
    updateFooter();
    setupHamburgerMenu();

    // ========================================
    // 5. RESIZE HANDLING (optional)
    // ========================================
    window.addEventListener('resize', function () {
        const hamburgerBtn = document.getElementById('menu-button');
        const navUl = document.querySelector('nav ul');

        if (!hamburgerBtn || !navUl) return;

        // If switching to desktop mode (>650px) and menu is open, close it
        if (window.innerWidth >= 650 && navUl.classList.contains('show')) {
            navUl.classList.remove('show');
            hamburgerBtn.textContent = '☰';
        }
    });
});