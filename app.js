document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const list = document.querySelector('.list');
    const link = document.querySelector('.link');

    list.querySelectorAll('a').forEach(function (item) {
        item.addEventListener('click', function () {
            list.classList.remove('actif');
            link.classList.remove('actif');
        });
    });

    menu.addEventListener('click', function () {
        list.classList.toggle('actif');
        link.classList.toggle('actif');
    });

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smooth-scroll@16.1.3/dist/smooth-scroll.polyfills.min.js';
    document.head.appendChild(script);

    script.onload = function () {
        const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 400,
            offset: 0,
            easing: 'easeInOutQuad'
        });
    };
});
