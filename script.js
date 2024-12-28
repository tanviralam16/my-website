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

hamburger.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    e.stopPropagation();
});

// Close the menu when clicking outside
document.body.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
