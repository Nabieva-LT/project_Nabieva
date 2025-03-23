"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Начало.
    // 2. Получаем все элементы изображений с описанием.
    // 3. Для каждого изображения (проверяем есть ли такие изображения):
    // 3.1. Добавляем обработчик наведения курсора на изображение:
    // 3.1.1. показываем текст при наведении.
    // 3.2. Добавляем обработчик ухода курсора с изображения:
    // 3.2.1. Скрываем элемент с описанием.

    // Находим все элементы с классом "certificate__image"
    const certificateImages = document.querySelectorAll('.certificate__image');

    // Если найдены изображения, добавляем слушатели событий
    if (certificateImages.length > 0) {
        // Для каждого изображения добавляем обработчики событий mouseover и mouseout
        certificateImages.forEach(image => {
            // Обработчик события при наведении курсора
            image.addEventListener('mouseover', () => {
                // Увеличиваем изображение через transform: scale(1.2)
                image.style.transform = 'scale(1.2)';
                // Добавляем плавный переход через transition
                image.style.transition = 'transform 0.3s ease';
                // Выводим сообщение в консоль для проверки работы
                console.log('Изображение сертификата/лицензии увеличено');
            });

            // Обработчик события при уведении курсора
            image.addEventListener('mouseout', () => {
                // Возвращаем изображение к исходному размеру
                image.style.transform = 'scale(1)';
                // Выводим сообщение в консоль для проверки работы
                console.log('Изображение сертификата/лицензии возвращено к исходному размеру');
            });
        });
    } else {
        console.log('Нет изображений сертификатов или лицензий на странице.');
    }
});

// scripts/script.js

// Создание слайдера для отзывов
let currentIndex = 0; // Индекс текущего отзыва
const reviewsContainer = document.querySelector(".client-reviews__container"); // Контейнер с отзывами
const reviews = Array.from(document.querySelectorAll(".client-reviews__review")); // Все отзывы
const prevButton = document.querySelector(".client-reviews__prev"); // Кнопка "Предыдущий"
const nextButton = document.querySelector(".client-reviews__next"); // Кнопка "Следующий"
const visibleCards = 3; // Количество отображаемых отзывов

// Функция обновления слайдера
function updateSlider() {
    reviews.forEach((review, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            review.style.display = "block"; // Показываем отзыв
            review.classList.add("active"); // Добавляем класс active для стилей
        } else {
            review.style.display = "none"; // Скрываем отзыв
            review.classList.remove("active"); // Убираем класс active
        }
    });

    // Блокируем кнопки при достижении конца списка
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= reviews.length - visibleCards;
}

// Обработчик события для кнопки "Предыдущий"
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--; // Переход на предыдущую страницу
    } else {
        currentIndex = reviews.length - visibleCards; // Циклический переход к последним отзывам
    }
    updateSlider();
});

// Обработчик события для кнопки "Следующий"
nextButton.addEventListener("click", () => {
    if (currentIndex < reviews.length - visibleCards) {
        currentIndex++; // Переход на следующую страницу
    } else {
        currentIndex = 0; // Циклический переход к первым отзывам
    }
    updateSlider();
});

// Инициализация слайдера
if (reviews.length > 0) {
    updateSlider(); // Запускаем слайдер, если есть отзывы
} else {
    console.warn("Отзывы не найдены."); // Предупреждение, если отзывов нет
}