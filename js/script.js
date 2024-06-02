document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const searchQuery = searchInput.value.trim();
        if (searchQuery !== '') {
            // Perform your search logic here, for example, redirect to the search page with the query string
            window.location.href = '/search?q=' + encodeURIComponent(searchQuery);
        }
    });
});

let currentIndex = 0;
let slides;
let totalSlides;

function showSlide(index) {
    // Normalize the index
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Show the current slide
    slides[currentIndex].style.display = 'block';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    slides = document.querySelectorAll('#slider-images img');
    totalSlides = slides.length;

    if (totalSlides > 0) {
        showSlide(currentIndex);
        setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    }
});
