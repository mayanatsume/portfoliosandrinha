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

// Suporte para toque nas caixas do portfólio
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    if (isTouchDevice) {
        // Para dispositivos de toque
        item.addEventListener('click', () => {
            portfolioItems.forEach(el => el.classList.remove('touch-active')); // Remove outras classes ativas
            item.classList.toggle('touch-active'); // Ativa a imagem da caixa tocada
        });
    } else {
        // Para dispositivos sem toque (desktop)
        item.addEventListener('mouseover', () => {
            item.classList.add('show-image'); // Mostra a imagem no hover
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('show-image'); // Oculta a imagem ao sair do hover
        });
    }
});
