//Expansão do menu hamburger
const btnMenu = document.getElementById('btn-mobile-menu');

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);
