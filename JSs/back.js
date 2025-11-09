//сделать контейнер в front.html и менять в нём html-файлы с помощью кнопок навигации

document.getElementById("btnZayav").addEventListener('click', function() {
    window.location.href = "подача заявления.html"
})

document.getElementById("btnHistory").addEventListener('click', function(){
    window.location.href = "история колледжа.html"
})

document.getElementById("btnMoreHistory").addEventListener('click', function(){
    window.location.href = "история колледжа.html"
})

//говядина
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