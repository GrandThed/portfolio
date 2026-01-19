// Highlight active navigation link based on scroll position
(function() {
    'use strict';

    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(function(link) {
                    if (link.getAttribute('href') === '#' + id) {
                        link.style.color = '#1a1a1a';
                    } else {
                        link.style.color = '';
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(function(section) {
        observer.observe(section);
    });
})();
