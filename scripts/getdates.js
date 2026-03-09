// Obtenir l'année courante pour le copyright
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtenir la date de dernière modification
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;