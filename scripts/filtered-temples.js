// Array of temple objects (7 original + 3 new)
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // 3 NEW TEMPLES ADDED
    {
        templeName: "Abidjan Côte d'Ivoire",
        location: "Abidjan, Côte d'Ivoire",
        dedicated: "2018, May, 17",
        area: 13656,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/abidjan-cote-divoire/400x250/abidjan-cote-divoire-temple-1281452-wallpaper.jpg"
    },
    {
        templeName: "Brasília Brazil",
        location: "Brasília, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brasilia-brazil/400x250/brasilia-brazil-temple-1281485-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-1281455-wallpaper.jpg"
    }
];

// Function to display temples
function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-cards");
    if (!container) {
        console.error("Container 'temple-cards' not found!");
        return;
    }

    container.innerHTML = "";

    if (filteredTemples.length === 0) {
        container.innerHTML = "<p class='no-results'>No temples match this filter.</p>";
        return;
    }

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    `;

        container.appendChild(card);
    });
}

// Filter functions
function filterOld() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
}

function filterNew() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
}

function filterLarge() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmall() {
    return temples.filter(temple => temple.area < 10000);
}

// Set up event listeners
function setupEventListeners() {
    const homeLink = document.getElementById("home");
    const oldLink = document.getElementById("old");
    const newLink = document.getElementById("new");
    const largeLink = document.getElementById("large");
    const smallLink = document.getElementById("small");

    if (homeLink) homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(temples);
    });

    if (oldLink) oldLink.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(filterOld());
    });

    if (newLink) newLink.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(filterNew());
    });

    if (largeLink) largeLink.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(filterLarge());
    });

    if (smallLink) smallLink.addEventListener("click", (e) => {
        e.preventDefault();
        displayTemples(filterSmall());
    });
}

// Set footer dates
function setFooterDates() {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
}

// Initialize
function init() {
    console.log("JavaScript loaded and running!");
    displayTemples(temples);
    setupEventListeners();
    setFooterDates();
}

// Start everything when DOM is ready
document.addEventListener("DOMContentLoaded", init);