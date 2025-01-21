document.addEventListener("DOMContentLoaded", function() {
    // 1. Navegação suave
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // 2. Revelar imagens nos quadrados (data-img)
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      const imgPath = item.getAttribute('data-img');
      if (imgPath) {
        item.style.backgroundImage = `url(${imgPath})`;
      }
    });
  
    // 3. Slider (Antes & Depois)
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-content img');
    const totalSlides = slides.length;
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      const sliderContent = document.querySelector('.slider-content');
      if (sliderContent) {
        sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
    setInterval(showNextSlide, 3000);
  
    // 4. Suporte para toque (mobile) e hover (desktop) nas caixas
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  
    portfolioItems.forEach(item => {
      if (isTouchDevice) {
        // Em dispositivos de toque, usamos clique para exibir imagem
        item.addEventListener('click', () => {
          // Remove estado ativo das outras caixas
          portfolioItems.forEach(el => el.classList.remove('touch-active'));
          // Alterna a caixa atual
          item.classList.toggle('touch-active');
        });
      } else {
        // Em desktop, usamos hover
        item.addEventListener('mouseover', () => {
          item.classList.add('show-image');
        });
        item.addEventListener('mouseout', () => {
          item.classList.remove('show-image');
        });
      }
    });
  
    // 5. IntersectionObserver p/ animar as caixas ao aparecer (deslize)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Quando 10% do item ficar visível
    });
  
    // Observa todas as .portfolio-item
    portfolioItems.forEach(item => {
      observer.observe(item);
    });
  });
  