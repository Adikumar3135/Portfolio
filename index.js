const hamburger = document.querySelector('.humbanger i');
const navLinks = document.querySelector('.links');
const navItems = document.querySelectorAll('.links li a');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // hide nav
        hamburger.classList.remove('active'); // reset icon
    });
});

const headerHeight = 80; // your fixed header height
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const topPos = target.offsetTop - headerHeight;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  });
});
