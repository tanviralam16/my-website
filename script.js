// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle the dropdown menu for mobile view
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Close dropdown menu when clicking anywhere else
document.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    }
});
