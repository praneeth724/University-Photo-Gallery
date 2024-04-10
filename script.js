let currentIndex = 0;
const images = document.querySelectorAll('.image-container');
const intervalDuration = 3000; // Change this value to adjust the time duration (in milliseconds) between image transitions

function moveSlide() {
    const lastIndex = images.length - 1;
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    images.forEach(image => {
        image.style.transform = `translateX(${offset}%)`;
    });
}

// Automatically move to the next slide after a certain time interval
setInterval(moveSlide, intervalDuration);
