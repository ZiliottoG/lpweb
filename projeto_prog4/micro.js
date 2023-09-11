let currentSlide = 0;
const slides = document.querySelectorAll('.carrossel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.display = index === n ? 'block' : 'none';
    });
    currentSlide = n;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Adicione os eventos de clique aos botões
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Iniciar o carrossel automaticamente após 10 segundos
setInterval(nextSlide, 10000);

// Mostrar o primeiro slide inicialmente
showSlide(currentSlide);
