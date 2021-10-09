const inicio_sesion_btn = document.querySelector("#inicio_sesion_btn");
const inicio_sesion_modal = document.querySelector("#inicio_sesion_modal");
const modal_close = document.querySelectorAll(".modal-close");
const modal_background = document.querySelectorAll(".modal-background");

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

            });
        });
    }
    

    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
            
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});

const close_modal = (e) => {
    e.preventDefault();
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.classList.remove("is-active");
    });
} 

modal_close.forEach(close_btn => {
    close_btn.addEventListener("click", close_modal);
});

inicio_sesion_btn.addEventListener("click", (e)=> {
    e.preventDefault();
    inicio_sesion_modal.classList.add("is-active");
})

modal_background.forEach(close_btn => {
    close_btn.addEventListener("click", close_modal);
});