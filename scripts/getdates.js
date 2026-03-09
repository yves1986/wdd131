// Obtenir l'année courante pour le copyright
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Obtenir la date de dernière modification
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Vérification que les éléments existent (bonne pratique)
console.log("JavaScript chargé avec succès !");
console.log("Année courante :", currentYear);
console.log("Dernière modification :", document.lastModified);