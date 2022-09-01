// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи 
// npm (посилання на CDN з твоєї минулої роботи більше не потрібне) - // NPM
// npm install simplelightbox
// Використовуй свій JavaScript код з попередньої домашньої роботи, 
// але виконай рефакторинг з урахуванням того, 
// що бібліотека була встановлена через npm (синтаксис import/export).
// Для того щоб підключити CSS код бібліотеки в проект, 
// необхідно додати ще один імпорт, крім того, що описаний в документації.

// Описаний в документації
// import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";



import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryUl = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items
    .map(
        (item) => `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>`
  )
    .join('');
}

const addGalleryItems = createGalleryItems(galleryItems);
// galleryDiv.innerHTML = addGalleryItems;

function blockStandartAction(event) {
    event.preventDefault();
  }

galleryUl.addEventListener('click', onImageClick);
galleryUl.insertAdjacentHTML("beforeend", addGalleryItems);

function onImageClick(event) {
  blockStandartAction(event);
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 250,
 });


  galleryUl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });

