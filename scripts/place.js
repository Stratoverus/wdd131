window.onload = function() {
    //current year area
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    //Last Modified area
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
};

let temperature = 84;
let windSpeed = 3;

document.getElementById('temperature').textContent = temperature;
document.getElementById('wind').textContent = windSpeed;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill);
    } else {
        return "N/A";
    }
}

let windChill = calculateWindChill(temperature,windSpeed);
document.getElementById("windChill").innerText = windChill;
document.getElementById("windChillUnit").innerText = (windChill !== "N/A") ? "°F" : "";