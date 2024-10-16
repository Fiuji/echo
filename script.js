// Function to add animation when elements scroll into view
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate');
    const scrollTop = window.scrollY;

    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('fade-in');
        }
    });
});
