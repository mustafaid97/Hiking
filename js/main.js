

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const Sbox = document.querySelector(".search-box");

const navSlide = () => {

    burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("nav-active");

            // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease ${index / 7 + 0.3}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');

    });

    document.addEventListener("click", (e) => {

    if (e.target !== burger && e.target !== Sbox) {

        if (nav.classList.contains("nav-active")) {

            burger.classList.toggle("toggle");

            nav.classList.toggle("nav-active");
        }
    }


});

}

navSlide();

// Click Anywhere Outside Menu And Toggle Button
// document.addEventListener("click", (e) => {

//     if (e.target !== burger && e.target !== nav) {

//         if (nav.classList.contains("nav-active")) {

//             burger.classList.toggle("toggle")

//             (nav.classList.toggle("nav-active"))
//         }
//     }


// });

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