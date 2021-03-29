// Menu


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