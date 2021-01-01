const menuNav = document.getElementById("menu");

menuNav.addEventListener('click', () => {
    const navHeader = document.getElementById("drop_menu");
    navHeader.classList.toggle("show");
});

const listMenu = document.getElementById("list-menu");

listMenu.addEventListener('click', () => {
    const navHeader = document.getElementById("drop_menu");
    navHeader.classList.toggle("show");
});