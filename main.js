
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


document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.banner-content');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('show');
            } else {
                slide.classList.remove('show');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Initialize the first slide
    showSlide(currentIndex);

    // Attach event listeners to buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Optionally, auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});


// popup open and close process





