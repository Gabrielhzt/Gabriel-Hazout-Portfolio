const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
const link = document.querySelector('.link');

menu.addEventListener('click', function () {
    list.classList.toggle('actif');
    link.classList.toggle('actif');
});