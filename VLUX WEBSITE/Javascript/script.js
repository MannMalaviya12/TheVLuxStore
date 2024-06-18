document.addEventListener('DOMContentLoaded', () => {
    // Banner Image Change
    const slides = ['./img/logo.jpg', './img/p1.jpg', './img/p2.jpg'];
    let currentSlide = 0;
    const bannerImg = document.querySelector('.banner img');
    let slideInterval;

    function updateBanner() {
        bannerImg.src = slides[currentSlide];
    }

    function startSlideShow() {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateBanner();
        }, 3000);
    }

    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    document.querySelector('.arrow.left').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateBanner();
        resetSlideShow();
    });

    document.querySelector('.arrow.right').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateBanner();
        resetSlideShow();
    });

    updateBanner(); // Initial update
    startSlideShow(); // Start the slideshow initially

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate products/categories when they come into view
    function animateOnScroll(sectionId, productClass) {
        const section = document.getElementById(sectionId);
        const products = section.querySelectorAll(`.${productClass}`);

        function checkVisibility() {
            products.forEach((product, index) => {
                if (isInViewport(product)) {
                    setTimeout(() => {
                        product.classList.add('visible');
                    }, index * 200); // Adjust the delay as needed
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check in case elements are already visible
    }

    // Call animateOnScroll for each section
    animateOnScroll('new-launch', 'product');
    animateOnScroll('sale', 'product');
    animateOnScroll('categories', 'category');
});
