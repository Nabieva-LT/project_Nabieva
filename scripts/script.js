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
if (prevButton != null)
{
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--; // Переход на предыдущую страницу
        } else {
         currentIndex = reviews.length - visibleCards; // Циклический переход к последним отзывам
     }
     updateSlider();
    });
}

// Обработчик события для кнопки "Следующий"
if (nextButton != null)
{
    nextButton.addEventListener("click", () => {
        if (currentIndex < reviews.length - visibleCards) {
         currentIndex++; // Переход на следующую страницу
        } else {
         currentIndex = 0; // Циклический переход к первым отзывам
        }
        updateSlider();
    });
}

// Инициализация слайдера
if (reviews.length > 0) {
    updateSlider(); // Запускаем слайдер, если есть отзывы
} else {
    console.warn("Отзывы не найдены."); // Предупреждение, если отзывов нет
}
// Получаем контейнер с секцией специалистов
const specialistsSection = document.querySelector(".specialists");

// Проверяем существование элемента
if (specialistsSection) {
    // Массив с данными специалистов
    const dataSpecialists = [
        "Иванов А.И.",
        "Петрова А.В.",
        "Сидорова Н.С.",
        "Смирнов Е.В."
    ];

    // Получаем все элементы с именами специалистов
    const specialistNames = specialistsSection.querySelectorAll(".specialist__name");

    // Обновляем текст в каждом элементе
    specialistNames.forEach((item, index) => {
        item.textContent = dataSpecialists[index];
    });
}
//Для кнопки записаться
// Обработчик для формы записи
let apForm = document.querySelector('.appointment__form');
if (apForm != null)
{
document.querySelector('.appointment__form').addEventListener('submit', function(e) {
    e.preventDefault(); // Отменяем стандартную отправку формы
    
    const modal = document.getElementById('confirmationModal');
    const confirmBtn = document.getElementById('confirmButton');
    
    // Показываем модальное окно
    modal.style.display = 'flex';
    
    // Закрытие по кнопке OK
    confirmBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Закрытие при клике вне окна
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Обработчик для формы записи
apForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this; // Сохраняем ссылку на форму
    const modal = document.getElementById('confirmationModal');
    const confirmBtn = document.getElementById('confirmButton');

    modal.style.display = 'flex';
    
    // Обработчик для кнопки OK
    const closeHandler = () => {
        modal.style.display = 'none';
        form.reset(); // Очищаем все поля формы
        confirmBtn.removeEventListener('click', closeHandler); // Удаляем обработчик
    };
    
    confirmBtn.addEventListener('click', closeHandler);
    
    // Закрытие при клике вне окна
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            form.reset(); // Очищаем поля и при закрытии через клик вне окна
        }
    });
});
}
// Динамическое создание услуг
const servicesSection = document.querySelector('.services');
if (servicesSection) {
    const servicesList = servicesSection.querySelector('.services__list');
    
    // Массив данных об услугах
    const servicesData = [
        "Общий анализ крови",
        "Биохимический анализ крови",
        "Анализ на гормоны",
        "Микробиологические исследования",
        "Анализ на холестерин",
        "Тест на COVID-19",
        "Гормональные исследования",
        "Анализ на аллергию"
    ];

    // Функция создания HTML-элемента услуги
    const createServiceItem = (serviceName) => {
        return `<li class="services__item">${serviceName}</li>`;
    };

    // Добавляем услуги в список
    servicesData.forEach(service => {
        servicesList.insertAdjacentHTML('beforeend', createServiceItem(service));
    });
}
// Динамическое создание навигационного меню 2 ч.
const navMenu = document.querySelector('.nav');
if (navMenu) {
    const navList = navMenu.querySelector('.nav__list');

    // Массив данных меню
    const menuData = [
        { link: "index.html", title: "Главная" },
        { link: "servis.html", title: "Услуги" },
        { link: "info.html", title: "О нас" },
        { link: "zap.html", title: "Запись на прием" }
    ];

    // Функция создания HTML-элемента меню
    const createMenuItem = ({ link, title }) => {
        return `
            <li class="nav__item">
                <a class="nav__link" href="${link}">${title}</a>
            </li>
        `;
    };

    // Добавляем пункты меню
    menuData.forEach(item => {
        navList.insertAdjacentHTML('beforeend', createMenuItem(item));
    });

    console.log('Навигационное меню создано с помощью JavaScript!');
}
// Динамическая галерея сертификатов 3.6
document.addEventListener("DOMContentLoaded", () => {
    const gallerySection = document.querySelector(".certificates");
    if (!gallerySection) return;

    const galleryList = gallerySection.querySelector(".certificates__list");
    const apiUrl = "images.json";

    // Функция создания карточки
    const createCard = ({ imageUrl, imageAlt, imageWidth }) => `
        <li class="certificates__item images__item">
            <img class="images__picture" 
                src="${imageUrl[0]}" 
                alt="${imageAlt}"
                width="${imageWidth}">
            <img class="images__picture" 
                src="${imageUrl[1]}" 
                alt="${imageAlt}"
                width="${imageWidth}"
                style="display: none;">
        </li>
    `;

    // Загрузка данных
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            galleryList.innerHTML = data.map(item => createCard(item)).join("");
           // initImageToggle();
        })
        .catch(error => console.error("Ошибка загрузки данных:", error));

    // Инициализация переключения
    /*const initImageToggle = () => {
        galleryList.querySelectorAll(".images__item").forEach(item => {
            const images = item.querySelectorAll(".images__picture");
            item.addEventListener("click", () => {
                images.forEach(img => {
                    img.style.display = img.style.display === "none" ? "block" : "none";
                });
            });
        });
    };*/
});
// Прелоадер
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");

    if (preloader && content) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            content.style.display = "block";
            preloader.remove();
        }, 3000);
    }
});