// Footer: Current Year and Last Modified
document.getElementById('current-year').textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

// Weather Data (static values for now)
const temperature = 28; // °C
const windSpeed = 12; // km/h

// Display static weather values
document.getElementById('temperature').textContent = temperature;
document.getElementById('wind-speed').textContent = windSpeed;

/**
 * Calculate wind chill factor
 * Formula for metric units (°C, km/h):
 * Wind Chill = 13.12 + 0.6215 * T - 11.37 * (V^0.16) + 0.3965 * T * (V^0.16)
 * @param {number} temp - Temperature in Celsius
 * @param {number} wind - Wind speed in km/h
 * @returns {number} - Wind chill temperature rounded to 1 decimal
 */
function calculateWindChill(temp, wind) {
    const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
    return Math.round(windChill * 10) / 10;
}

// Check conditions for wind chill calculation
function updateWindChill() {
    const windChillElement = document.getElementById('wind-chill');

    // Conditions for valid wind chill calculation (Metric)
    // Temperature <= 10°C AND Wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Calculate and display wind chill when page loads
updateWindChill();

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll (optional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});