const buttonsAll = document.querySelectorAll("[data-carousel-button]")

buttonsAll.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton == "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true 
        delete activeSlide.dataset.active
    })
})

// menu
var logo = document.querySelector(".container");
var menu = document.querySelector(".menu");

logo.addEventListener('click', function(){
    menu.classList.toggle('showmenu')
})