document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Custom Cursor Movement
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Cursor interaction on links
    document.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2.5)';
            cursor.style.background = 'rgba(197, 160, 89, 0.1)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });

    // 2. Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. Simple Parallax for Hero Video
    window.addEventListener('scroll', () => {
        const video = document.querySelector('video');
        let scrollPos = window.pageYOffset;
        video.style.transform = 'translateY(' + scrollPos * 0.4 + 'px) scale(1.05)';
    });
});