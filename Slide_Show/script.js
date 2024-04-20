const images = document.querySelectorAll("#slideshow img");
let currentSlide = 0;
let slideshowInterval;
let isRunning = true;

function toggleSlideshow() {
  isRunning = !isRunning;

  if (isRunning) {
    startSlideshow();
  } else {
    stopSlideshow();
  }
}

function startSlideshow() {
  slideshowInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function nextSlide() {
  stopSlideshow();
  showSlide(currentSlide + 1);
}

function prevSlide() {
  stopSlideshow();
  showSlide(currentSlide - 1);
}

function showSlide(index) {
  if (index < 0) {
    currentSlide = images.length - 1;
  } else if (index >= images.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  // Hide all images
  images.forEach((img) => (img.style.display = "none"));

  // Show the current slide
  images[currentSlide].style.display = "block";

  // Restart slideshow if it was running
  if (isRunning) {
    startSlideshow();
  }
}

// Start the slideshow on page load
startSlideshow();
