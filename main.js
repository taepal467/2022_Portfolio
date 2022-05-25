const menuBtn = document.querySelector(".menu-btn");
const menuBurger = document.querySelector(".menu-burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

const toggleMenu = () => {
    if (!showMemu) {
        menuBurger.classList.add("open");
        nav.classList.add("open");
        navMenu.classList.add("open");
        navItems.forEach(item => item.classList.add("open"));

        showMenu = true;
    } else {
        menuBurger.classList.remove("open");
        nav.classList.remove("open");
        navMenu.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"));

        showMenu = false;
    }
}

menuBtn.addEventListener("click", toggleMenu);
