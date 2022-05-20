const menuBtn = document.querySelector(".menu-btn");
const menuBurger = document.querySelector(".menu-burger");
const nav = document.querySelector(".nav");
const navMemu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

let showMemu = false;

const toggleMenu = () => {
    if (!showMemu) {
        menuBurger.classList.add("open");
        nav.classList.add("open");
        navMemu.classList.add("open");
        navItems.forEach(item => item.classList.add("open"));

        showMemu = true;
    } else {
        menuBurger.classList.remove("open");
        nav.classList.remove("open");
        navMemu.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"));

        showMemu = false;
    }
}

menuBtn.addEventListener("click", toggleMenu);