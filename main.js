// Navegação suave
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Revelar imagens nos quadrados ao passar o mouse
document.querySelectorAll('.portfolio-item').forEach(item => {
    const img = item.getAttribute('data-img');
    if (img) {
        item.style.backgroundImage = `url(${img})`;
    }
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
            portfolioItems.forEach(el => el.classList.remove('touch-active'));
            item.classList.toggle('touch-active');
        });
    } else {
        // Para dispositivos sem toque (desktop)
        item.addEventListener('mouseover', () => {
            item.classList.add('show-image');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('show-image');
        });
    }
});

// Efeito de deslizamento para as caixas do portfólio
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".portfolio-item");

    const observerOptions = {
        root: null, // Observa o viewport
        rootMargin: "0px", // Margem para ativação
        threshold: 0.1, // Quando 10% da caixa está visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Adiciona a classe para a animação
            }
        });
    }, observerOptions);

    // Observa cada item do portfólio
    items.forEach(item => observer.observe(item));
});

// Ajustar layout para dispositivos móveis
function ajustarLayoutMobile() {
    const body = document.body;

    // Aguarda um pequeno delay para garantir que a viewport já foi aplicada corretamente
    setTimeout(() => {
        if (window.innerWidth <= 768) {
            body.classList.add('mobile'); // Adiciona a classe "mobile" ao body
            console.log("Modo mobile ativado.");
        } else {
            body.classList.remove('mobile'); // Remove a classe "mobile" do body
            console.log("Modo desktop ativado.");
        }
    }, 100); // Pequeno atraso para evitar conflitos no carregamento
}

// Executa a função ao carregar a página e ao redimensionar a janela
window.addEventListener('DOMContentLoaded', ajustarLayoutMobile);
window.addEventListener('resize', ajustarLayoutMobile);