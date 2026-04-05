// script.js

// Adding event listener to hamburger menu
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    // Toggle the active class to open/close the menu
    navbarMenu.classList.toggle('active');
});

// To close the menu when a menu item is clicked
const menuItems = document.querySelectorAll('.navbar-menu a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});
