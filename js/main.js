const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const searchBox = document.querySelector(".search-box");

const navSlide = () => {

    document.addEventListener("click", (e) => {
        if (e.target === burger || e.target === burger.lastElementChild || e.target === burger.firstElementChild || e.target === burger.firstElementChild.nextElementSibling) {

        nav.classList.toggle("nav-active");

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                }else {
                    link.style.animation = `navLinkFade 0.5s ease ${index / 7 + 0.3}s`;
                }
            });
        burger.classList.toggle('toggle');
        }

        if (e.target !== burger && e.target !== searchBox && e.target !== burger.lastElementChild && e.target !== burger.firstElementChild && e.target !== burger.firstElementChild.nextElementSibling) {

            if (nav.classList.contains("nav-active")) {
                burger.classList.toggle("toggle");
                nav.classList.toggle("nav-active");
            }
        }
    });
}

navSlide();

// stop Propagation On Menu
navLinks.onclick = function (e) {
    e.stopPropagation();
}

// Up Button
let upSpan = document.querySelector(".up");

window.onscroll = function () {
    window.scrollY >= 1000 ? upSpan.classList.add("show") : upSpan.classList.remove("show");
};

upSpan.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
