/**
 * temples.js - Fonctionnalités pour l'album photo
 * WDD131 - Semaine 02
 */

// ============================================
// 1. ATTENDRE QUE LE DOM SOIT CHARGÉ
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // 2. FOOTER DYNAMIQUE (copyright + modification)
    // ========================================
    function updateFooter() {
        const footerElement = document.getElementById('footer-info');
        if (!footerElement) return;

        const currentYear = new Date().getFullYear();
        const lastModified = document.lastModified;  // Date de dernière modification

        // Formatage plus lisible de la date
        const lastModDate = new Date(lastModified);
        const formattedDate = lastModDate.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        footerElement.innerHTML = `© ${currentYear} · Votre Nom · Dernière modification : ${formattedDate}`;
    }

    // ========================================
    // 3. MENU HAMBURGER
    // ========================================
    function setupHamburgerMenu() {
        const nav = document.querySelector('nav');
        const navUl = document.querySelector('nav ul');

        if (!nav || !navUl) return;

        // Créer le bouton hamburger
        const hamburgerBtn = document.createElement('button');
        hamburgerBtn.id = 'menu-button';
        hamburgerBtn.setAttribute('aria-label', 'Menu de navigation');
        hamburgerBtn.textContent = '☰';

        // Insérer le bouton DANS le nav, AVANT le ul
        nav.insertBefore(hamburgerBtn, navUl);

        // État du menu (fermé par défaut)
        let menuOpen = false;

        // Fonction pour basculer le menu
        function toggleMenu() {
            menuOpen = !menuOpen;
            navUl.classList.toggle('show');

            // Changer l'icône ☰ ↔ ✕
            hamburgerBtn.textContent = menuOpen ? '✕' : '☰';

            // Attribut ARIA pour accessibilité
            hamburgerBtn.setAttribute('aria-expanded', menuOpen);
        }

        // Écouter le clic sur le bouton
        hamburgerBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Optionnel : Fermer le menu quand on clique sur un lien (mobile)
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                // Vérifier si on est en mode mobile (bouton visible)
                const isMobile = window.getComputedStyle(hamburgerBtn).display !== 'none';

                if (isMobile && menuOpen) {
                    toggleMenu();  // Fermer le menu
                }
            });
        });

        // Optionnel : Fermer le menu en cliquant ailleurs
        document.addEventListener('click', function (e) {
            const isMobile = window.getComputedStyle(hamburgerBtn).display !== 'none';

            if (isMobile && menuOpen && !nav.contains(e.target)) {
                toggleMenu();  // Fermer si on clique en dehors
            }
        });
    }

    // ========================================
    // 4. EXÉCUTER LES FONCTIONS
    // ========================================
    updateFooter();
    setupHamburgerMenu();

    // ========================================
    // 5. GESTION DU REDIMENSIONNEMENT (optionnel)
    // ========================================
    window.addEventListener('resize', function () {
        const hamburgerBtn = document.getElementById('menu-button');
        const navUl = document.querySelector('nav ul');

        if (!hamburgerBtn || !navUl) return;

        // Si on passe en mode desktop (>650px) et que le menu est ouvert, le fermer
        if (window.innerWidth >= 650 && navUl.classList.contains('show')) {
            navUl.classList.remove('show');
            hamburgerBtn.textContent = '☰';
        }
    });
});