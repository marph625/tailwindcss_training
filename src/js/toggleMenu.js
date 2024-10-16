// For click event and also reference for outer div tag
document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.querySelector('#toggleMenu');
    const navMenu = document.querySelector("#navMenu")

    toggleMenu.onclick = () => {
        navMenu.classList.toggle('hidden')
        toggleMenu.classList.toggle('hamburger-toggle');
        console.log("Toggle menu clicked")
    }

    console.log("Script loaded successfully")
});



