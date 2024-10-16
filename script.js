// Function to check if a section is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add 'in-view' class when a section enters the viewport
function handleScroll() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', handleScroll);

// Initial call to handle scroll when the page loads
handleScroll();
