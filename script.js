// scripts/script.js

// Event listener to change navigation bar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Change background color when scrolled down
    } else {
        navbar.style.backgroundColor = '#333'; // Default background color when at the top
    }
});
