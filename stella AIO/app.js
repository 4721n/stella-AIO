const navbar = document.getElementById("navbar");
const navLinks = document.getElementById('nav-links');
const burger = document.getElementById('toggle');
const logo = document.getElementById('nav-logo');

burger.addEventListener('click', toggleNav);
navLinks.addEventListener('click', toggleNavOff);

function toggleNav(){
    navLinks.classList.toggle('active');
    navbar.classList.toggle('active');
    logo.classList.toggle('active');
};

//attempting to auto close navbar on click of ul a //
function toggleNavOff(){
    navLinks.classList.toggle('navbar ul');
    navbar.classList.toggle('navbar');
    logo.classList.toggle('nav-logo');
}

// this is the nav scale function //


navbar.addEventListener("mouseover", navScale)
navbar.addEventListener("mouseleave", navScaleBack)

function navScale(){
    this.style.transform = 'scale(1.05)';
}
function navScaleBack(){
    this.style.transform = '';
}