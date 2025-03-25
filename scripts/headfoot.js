// Function to load external HTML
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch((error) => {
            console.error(`Error loading ${filePath}:`, error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-dynamic", "header.html");
    loadComponent("footer-dynamic", "footer.html");
});
