document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    const navbar = document.querySelector('.site-header');
    const footer = document.querySelector('.contact-section');
    let cursor;

    function createCursor() {
        cursor = document.createElement('div');
        cursor.classList.add('cursor');
        body.appendChild(cursor);
    }

    function moveCursor(e) {
        if (cursor) {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        }
    }

    function handleHover(element) {
        const interactiveElements = element.querySelectorAll('a, button');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseover', () => cursor && cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hovered'));
        });
    }

    navbar.addEventListener('mouseover', () => {
        if (!cursor) {
            createCursor();
            handleHover(navbar);
            document.addEventListener('mousemove', moveCursor);
        }
    });

    navbar.addEventListener('mouseleave', () => {
        if (cursor) {
            body.removeChild(cursor);
            cursor = null;
            document.removeEventListener('mousemove', moveCursor);
        }
    });

    footer.addEventListener('mouseover', () => {
        if (!cursor) {
            createCursor();
            handleHover(footer);
            document.addEventListener('mousemove', moveCursor);
        }
    });

    footer.addEventListener('mouseleave', () => {
        if (cursor) {
            body.removeChild(cursor);
            cursor = null;
            document.removeEventListener('mousemove', moveCursor);
        }
    });


    // SCROLL REVEAL - ANIMAÇÃO AO ROLAR (MANTENHA ESTE BLOCO)
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: false,
        delay: 200
    });

    sr.reveal('.hero-title', {});
    sr.reveal('.hero-subtitle', { delay: 300 });
    sr.reveal('.scroll-down', { delay: 500, origin: 'bottom' });

    sr.reveal('.section-title', { origin: 'left' });
    sr.reveal('.project-card', { interval: 200 });

    sr.reveal('.about-image', { origin: 'left' });
    sr.reveal('.about-text', { origin: 'right' });

    sr.reveal('.contact-content > *', { interval: 200 });


    // EFEITO DE ESCONDER O HEADER AO ROLAR PARA BAIXO (MANTENHA ESTE BLOCO)
    let lastScrollTop = 0;
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

});