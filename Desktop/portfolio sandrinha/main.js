// Navegação suave
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Revelar imagens nos quadrados ao passar o mouse
document.querySelectorAll('.portfolio-item').forEach(item => {
    const img = item.getAttribute('data-img');
    item.style.backgroundImage = `url(${img})`;
});

// Slider (Antes & Depois)
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-content img');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const sliderContent = document.querySelector('.slider-content');
    sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);
