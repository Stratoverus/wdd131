window.onload = function() {
    const currentYear = today.getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    const lastModified = document.lastModified();
    document.getElementById('lastModified').textContent = lastModified;
};