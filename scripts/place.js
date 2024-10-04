window.onload = function() {
    //current year area
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    //Last Modified area
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
};

let temperature = 87;
let windSpeed = 3;

document.getElementById('temperature').textContent = temperature;
document.getElementById('wind').textContent = windSpeed;