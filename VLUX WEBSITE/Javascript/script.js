    document.addEventListener('DOMContentLoaded', () => {
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

        const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        const nextSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.remove('active');
        slides[nextSlide].classList.add('next');
        setTimeout(() => {
            slides[currentSlide].classList.remove('next');
            slides[currentSlide].classList.add('prev');
            slides[nextSlide].classList.add('active');
            setTimeout(() => {
                slides[currentSlide].classList.remove('prev');
            }, 500); // Ensure this matches the CSS transition duration
            currentSlide = nextSlide;
        }, 100); // Delay before applying classes
    }

    slides[currentSlide].classList.add('active');
    setInterval(nextSlide, 3000);
    });
