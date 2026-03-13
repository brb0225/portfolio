// JavaScript for smooth scrolling navigation and interactive elements

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of an interactive element
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function() {
    const content = document.getElementById('content');
    content.classList.toggle('active');
});
