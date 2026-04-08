// Mindful Moments - Website Planning Document JavaScript

// Update last modified date in footer
function updateLastModified() {
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        const now = new Date();
        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        lastModifiedSpan.textContent = formattedDate;
    }
}

// Log site structure information
function logSiteStructure() {
    const sections = document.querySelectorAll('section');
    console.log(`📄 Planning document contains ${sections.length} sections`);

    sections.forEach((section, index) => {
        const heading = section.querySelector('h2');
        if (heading) {
            console.log(`  Section ${index + 1}: ${heading.textContent}`);
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    updateLastModified();
    logSiteStructure();
    console.log('🌟 Mindful Moments Website Planning Document loaded');
});