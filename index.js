const navLinks = document.querySelector('.nav-links');
const svgButton = document.querySelector('.nav-toggle');

svgButton.addEventListener('click', function(e) {
    e.preventDefault();
        navLinks.classList.toggle('show-links');
    
});