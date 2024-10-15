let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

showSlide(currentSlide);
document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault();
    const saleSection = document.getElementById('sale-section');
    saleSection.scrollIntoView({ behavior: 'smooth' });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
