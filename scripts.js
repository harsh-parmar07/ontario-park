let index = 0;
const track = document.getElementById("carouselTrack");
const slides = track.children;
const totalSlides = slides.length;

function moveSlide(step) {
    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    track.style.transform = `translateX(-${index * 310}px)`;
}

// Touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchEndX < touchStartX) moveSlide(1); // Swipe left
    if (touchEndX > touchStartX) moveSlide(-1); // Swipe right
});