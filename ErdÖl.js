// script.js
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
      // Determine if the section is in view
      if (scrollPosition >= section.offsetTop - window.innerHeight / 2) {
        section.style.opacity = 1; // Show section when it enters the viewport
      } else {
        section.style.opacity = 0; // Hide section when it's out of view
      }
    });
  });
  