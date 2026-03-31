// Array of temple objects (7 original + 3 added = 10 total)
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
    // 3 additional temples added by student
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-1292786-wallpaper.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-774229-wallpaper.jpg"
    }
];

// Function to display temples in cards
function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-cards");
    if (!container) return;

    container.innerHTML = "";

    if (filteredTemples.length === 0) {
        container.innerHTML = "<p class='no-results'>No temples match this filter.</p>";
        return;
    }

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "card";

        // Extract year from dedicated string (format: "YYYY, Month, Day")
        const year = parseInt(temple.dedicated.split(",")[0]);

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

// Set up event listeners for navigation links
function setupEventListeners() {
    const homeLink = document.getElementById("home");
    const oldLink = document.getElementById("old");
    const newLink = document.getElementById("new");
    const largeLink = document.getElementById("large");
    const smallLink = document.getElementById("small");

    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            displayTemples(temples);
        });
    }

    if (oldLink) {
        oldLink.addEventListener("click", (e) => {
            e.preventDefault();
            displayTemples(filterOld());
        });
    }

    if (newLink) {
        newLink.addEventListener("click", (e) => {
            e.preventDefault();
            displayTemples(filterNew());
        });
    }

    if (largeLink) {
        largeLink.addEventListener("click", (e) => {
            e.preventDefault();
            displayTemples(filterLarge());
        });
    }

    if (smallLink) {
        smallLink.addEventListener("click", (e) => {
            e.preventDefault();
            displayTemples(filterSmall());
        });
    }
}

// Set footer copyright year and last modified date
function setFooterDates() {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
}

// Initialize the page
function init() {
    displayTemples(temples);
    setupEventListeners();
    setFooterDates();
}

// Run init when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);