// Mindful Moments - Main JavaScript File
// Website Planning Document - Placeholder script

// Afficher un message dans la console au chargement de la page
console.log('Mindful Moments - Site planning document loaded successfully');

// Fonction simple pour confirmer que le JavaScript fonctionne
function showMessage() {
    const message = 'Welcome to Mindful Moments planning document!';
    console.log(message);
    return message;
}

// Fonction pour vérifier la préparation du site
function checkSitePreparation() {
    const sections = document.querySelectorAll('section');
    console.log(`📄 Planning document contains ${sections.length} sections`);

    sections.forEach((section, index) => {
        const heading = section.querySelector('h2');
        if (heading) {
            console.log(`  Section ${index + 1}: ${heading.textContent}`);
        }
    });
}

// Exécuter les fonctions au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Mindful Moments planning document is ready');
    showMessage();
    checkSitePreparation();
});

// Export pour utilisation future (optionnel)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showMessage, checkSitePreparation };
}