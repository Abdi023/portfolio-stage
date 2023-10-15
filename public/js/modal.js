// Function to handle modal toggling
function toggleModal(modalId) {
    for (let i = 0; i < switches.length; i++) {
        switches[i].style.display = "none";
    }
    document.getElementById(modalId).style.display = "grid";
}

// Function to handle modal closing
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    for (let i = 0; i < switches.length; i++) {
        switches[i].style.display = "block";
    }
}

// Get all product elements
const switches = document.getElementsByClassName("product");

// Add click event listeners for each product
const productIds = 
    [
        "js--pakket1", 
        "js--pakket2", 
        "js--pakket3", 
        "js--pakket4", 
        "js--pakket5", 
        "js--pakket6"
    ];
const modalIds = 
    [
        "js--pakket1-modal", 
        "js--pakket2-modal", 
        "js--pakket3-modal", 
        "js--pakket4-modal", 
        "js--pakket5-modal", 
        "js--pakket6-modal"
    ];
const buttonIds = 
    [
        "js--pakket1-button", 
        "js--pakket2-button", 
        "js--pakket3-button", 
        "js--pakket4-button",
        "js--pakket5-button",
        "js--pakket6-button"
    ];

for (let i = 0; i < productIds.length; i++) {
    const product = document.getElementById(productIds[i]);
    const modalButton = document.getElementById(buttonIds[i]);
    
    product.onclick = function () {
        toggleModal(modalIds[i]);
    };
    
    modalButton.onclick = function () {
        closeModal(modalIds[i]);
    };
}
