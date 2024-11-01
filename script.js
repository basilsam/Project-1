// JavaScript to toggle mobile menu
document.querySelector('.menu-icon').addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
