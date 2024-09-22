window.onload = function() {
    const lastModified = document.lastModified();
    document.getElementById('currentYear').textContent = currentYear;
    const currentYear = today.getFullYear();
    document.getElementById('lastModified').textContent = lastModified;
}