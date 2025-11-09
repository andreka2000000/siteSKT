document.getElementById("btnZayav").addEventListener('click', function() {
    window.open("подача заявления.html", '_blank')
})

document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.main-nav').classList.toggle('active');
        });
        
        // Простой слайдер (можно заменить на полноценный)
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[n].classList.add('active');
        }
        
        // Автопереключение слайдов
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);