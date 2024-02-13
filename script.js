
// Get the carousel element
var carouselElement = document.getElementById('carousel-portrait');

// Initialize the carousel instance using Bootstrap's Carousel JavaScript API
var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 4000, // Set the interval to 2000 milliseconds (2 seconds)
    pause: 'hover', // Pause the carousel on hover
    wrap: true // Enable looping of carousel items
});

// Get the carousel element
var carouselElement = document.getElementById('carousel-landscape');

// Initialize the carousel instance using Bootstrap's Carousel JavaScript API
var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000, // Set the interval to 2000 milliseconds (2 seconds)
    pause: 'hover', // Pause the carousel on hover
    wrap: true // Enable looping of carousel items
});


const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Add click event listener to the "Yes" button
yesButton.addEventListener('click', function() {
    alert('Yeyy Lezgooo! Pa-inform na lang sa messenger.\nHappy Valentines Dayyyy!! \n\nWork ka na uli HAHA');
});

// Add click event listener to the "No" button
noButton.addEventListener('click', function() {
    // Increase the size of the "No" button when clicked
    noButton.disabled = true;
});