const slides = document.querySelectorAll("#slideshow img");
const prevImg = document.getElementById("prev");
const nextImg = document.getElementById("next");

let currentIndex = 0;

function reset() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
};

function initializeSlideshow() {
    reset();
    slides[currentIndex].classList.add("active");
};

function slideLeft() {
    reset();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add("active");
};

function slideRight() {
    reset();
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].classList.add("active");
};

initializeSlideshow();

prevImg.addEventListener("click", function() {
    slideLeft();
});
nextImg.addEventListener("click", function() {
    slideRight();
});