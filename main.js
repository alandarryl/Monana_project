

let open = document.getElementById('open');
let close = document.getElementById('close');
let navbar = document.getElementById('navBar');

open.addEventListener('click', ()=>{
    // alert('open navbar');
    navbar.classList.add('show');
})


close.addEventListener('click', ()=>{
    // alert('button clicked');
    navbar.classList.remove('show');
})