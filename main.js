
let navbar = document.getElementById('navbar');
let open = document.getElementById('open');
let close = document.getElementById('close');
let navbarItems = document.getElementById('navBar-item');

open.addEventListener('click', ()=>{
    // alert('open navbar');
    navbarItems.classList.add('show');
})


close.addEventListener('click', ()=>{
    // alert('button clicked');
    navbarItems.classList.remove('show');
})


document.addEventListener('scroll', ()=>{
    const scrollPosition = window.scrollY; // Get the current scroll position

    if (scrollPosition > 20) { // Adjust the value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})



// slide script


document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-items .item');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0; // Loop to the first slide
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Loop to the last slide
        } else {
            currentIndex = index;
        }
        document.querySelector('.slider-items').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    showSlide(currentIndex); // Initial display

    // setInterval(nextSlide, 3000); // Auto-slide every 3 seconds

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
});


// popup open and close process





