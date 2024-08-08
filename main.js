
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
