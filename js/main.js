// Header
const homeSection = document.getElementById("home");
const homeSectionHeight = homeSection.clientHeight;

let header = document.getElementById("header");

document.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > homeSectionHeight) {
        if (!header.classList.contains("fixed-header")) {
            header.classList.add("fixed-header");
        }
    } else {
        if(header.classList.contains("fixed-header")) {
            header.classList.remove("fixed-header");
        }
    }
});

// Menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

// Video 
btnVideo = document.querySelector('.video-container');

btnVideo.addEventListener('click', function() {
    btnVideo.classList.add('active');
});

// Testimonial
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

btnNext.addEventListener('click', slideNext);
btnPrev.addEventListener('click', slidePrev);

let idx = 0;
display(idx);
function display(idx) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[idx].style.display = 'flex';
}

function slideNext() {
    idx++;
    if (idx > slides.length-1) {
        idx = 0;
    }
    display(idx);
}

function slidePrev() {
    idx--;
    if (idx < 0) {
        idx = slides.length - 1;
    }
    display(idx)
}

// Accordion
const accordion = document.querySelectorAll('.box');
let previousTarget = null;

accordion.forEach(el => el.addEventListener('click', function() {

    if (this === previousTarget) {
        this.classList.toggle('active');
    }
    else {
        previousTarget = this;
        accordion.forEach(acc => acc.classList.remove('active'));
        this.classList.add('active');
    }
}));