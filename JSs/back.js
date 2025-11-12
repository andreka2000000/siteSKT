//сделать контейнер в front.html и менять в нём html-файлы с помощью кнопок навигации

// document.addEventListener('DOMContentLoaded', loadHTML('content', navigateTo('главная')))

// document.getElementById('btnGlav').addEventListener('click', function() {window.location.href = "главная.html"})

// async function navigateTo(page) {
    
//     // Показываем индикатор загрузки
//     document.getElementById('content').innerHTML = `
//         <div class="loading">Загрузка страницы ${page}...</div>
//     `;
    
//     // Загружаем контент страницы
//     await loadHTML('content', '../HTMLs/&{page}.html');
    
//     // Обновляем историю браузера
//     history.pushState({ page }, '', `?page=${page}`);
    
//     // Обновляем активную ссылку
//     updateActiveLink(page);
// }

// async function loadHTML(elementId, filePath) {
//     try {
//         const response = await fetch(filePath);
//         if (!response.ok) {
//             throw new Error(`Ошибка загрузки: ${response.status}`);
//         }
//         const html = await response.text();
//         document.getElementById(elementId).innerHTML = html;
        
//         // Если загружаем шапку, добавляем обработчики для навигации
//         if (elementId === 'header') {
//             setupNavigation();
//         }
//     } catch (error) {
//         console.error('Ошибка загрузки HTML:', error);
//         document.getElementById(elementId).innerHTML = `<p>Ошибка загрузки: ${filePath}</p>`;
//     }
// }

// document.getElementById("btnZayav").addEventListener('click', function() {
//     window.location.href = "подача заявления.html"
// })

// document.getElementById("btnHistory").addEventListener('click', function(){
//     window.location.href = "история колледжа.html"
// })

// document.getElementById("btnMoreHistory").addEventListener('click', function(){
//     window.location.href = "история колледжа.html"
// })

// //говядина
// document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
//             document.querySelector('.main-nav').classList.toggle('active');
//         });
        
//         // Простой слайдер (можно заменить на полноценный)
//         let currentSlide = 0;
//         const slides = document.querySelectorAll('.hero-slide');
        
//         function showSlide(n) {
//             slides.forEach(slide => slide.classList.remove('active'));
//             slides[n].classList.add('active');
//         }