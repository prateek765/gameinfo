document.addEventListener('DOMContentLoaded', function () {
    // Image Slider
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.slide'); // Corrected class name to '.slide'
    let currentSlide = 0;

    function showSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            currentSlide = 0;
        }

        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const yOffset = -50; // Adjust this value as needed for scroll position
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });

    // Smooth Scroll-to-Top Button
    const scrollButton = document.getElementById('scrollToTop');

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollButton.addEventListener('click', scrollToTop);

    // Form Validation Example
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            formMessage.textContent = 'Please fill out all fields.';
        } else {
            formMessage.textContent = 'Message sent successfully!';
            // You can add code here to send the form data to a server.
            // For example, using JavaScript's Fetch API or XMLHttpRequest.
        }
    });
});
