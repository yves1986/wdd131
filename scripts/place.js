// Footer: Current Year and Last Modified
document.getElementById('current-year').textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

// Weather Data for Côte d'Ivoire
const temperature = 28; // °C
const windSpeed = 12; // km/h

// Display static weather values
document.getElementById('temperature').textContent = temperature;
document.getElementById('wind-speed').textContent = windSpeed;

/**
 * Calculate wind chill factor
 * Formula for metric units (°C, km/h):
 * Wind Chill = 13.12 + 0.6215 * T - 11.37 * (V^0.16) + 0.3965 * T * (V^0.16)
 */
function calculateWindChill(temp, wind) {
    return Math.round((13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)) * 10) / 10;
}

// Check conditions for wind chill calculation
function updateWindChill() {
    const windChillElement = document.getElementById('wind-chill');

    // Conditions: Temperature <= 10°C AND Wind speed > 4.8 km/h
    // For Côte d'Ivoire (28°C), condition is false -> displays N/A
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Calculate and display wind chill when page loads
updateWindChill();