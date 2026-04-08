// Mindful Moments - Main JavaScript File
// Website Planning Document

console.log('🌟 Mindful Moments - Site planning document loaded successfully');

// Fonction pour afficher un message de bienvenue
function showWelcomeMessage() {
    const message = '🧘 Welcome to Mindful Moments planning document!';
    console.log(message);
    return message;
}

// Fonction pour vérifier la structure du document
function checkDocumentStructure() {
    const sections = document.querySelectorAll('section');
    console.log(`📄 Planning document contains ${sections.length} sections`);

    sections.forEach((section, index) => {
        const heading = section.querySelector('h2');
        if (heading) {
            console.log(`  ✓ Section ${index + 1}: ${heading.textContent}`);
        }
    });
}

// Fonction pour vérifier les ressources chargées
function checkResources() {
    // Vérifier CSS
    const stylesheet = document.querySelector('link[href*="siteplan.css"]');
    if (stylesheet) {
        console.log('🎨 CSS file loaded: styles/siteplan.css');
    }

    // Vérifier l'image
    const image = document.querySelector('.header-logo');
    if (image && image.complete) {
        console.log('🖼️ Image loaded: images/temple.jpg');
    } else if (image) {
        console.log('🖼️ Image found: images/temple.jpg (loading...)');
    }
}

// Exécuter les fonctions au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Mindful Moments planning document is ready');
    showWelcomeMessage();
    checkDocumentStructure();
    checkResources();
});

// Ajouter un effet au survol des sections (démonstration)
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.2s ease';
            this.style.transform = 'scale(1.01)';
        });
        section.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    console.log('✨ Interactive effects enabled');
});

// Export pour utilisation future (optionnel)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showWelcomeMessage, checkDocumentStructure, checkResources };
}