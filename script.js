// Change navbar style on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add hover effect for 3D rotation on nav items
var navItems = document.querySelectorAll('.nav li');

navItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.transform = 'perspective(500px) rotateX(10deg)';
    });
    item.addEventListener('mouseleave', function() {
        item.style.transform = 'perspective(500px) rotateX(0)';
    });
});
