

const typingElement = document.querySelector(".typing");
const words = ["a Developer", "an IT Student", "a Creator", "Aldwin James Bucio"];
let wordIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (letterIndex > 0) {
        typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

type();


const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function moveCarousel() {
    const slideWidth = slides[0].clientWidth;
    console.log(`Moving to index: ${currentIndex}, Slide Width: ${slideWidth}`);
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    moveCarousel();
}

if (slides.length > 0) {
    setInterval(nextSlide, 3000);
} else {
    console.error("Slides not found in carousel!");
}


//toggle button
$(document).ready(function () {
    // Toggle menu visibility on mobile
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

   
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

 
    

});
