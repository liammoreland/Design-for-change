
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const fullContent = this.previousElementSibling;
            if (fullContent.style.display === 'none' || fullContent.style.display === '') {
                fullContent.style.display = 'block';
                this.textContent = 'Read less';
            } else {
                fullContent.style.display = 'none';
                this.textContent = 'Read more';
            }
        });
    });




    // Carousel functionality
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselSlides.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < carouselSlides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Automatically show the first slide
    showSlide(currentIndex);
});
