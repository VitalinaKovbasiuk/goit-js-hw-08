

// HTML містить розмітку форми. Напиши скрипт, 
// який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. 
// Розбий його на декілька підзавдань:

// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2.ід час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
// заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, 
// а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle - Using npm:
// $ {sudo -H} npm i -g npm
// $ npm i --save lodash.throttle



// const LOCALSTORAGE_KEY = 'feedback-form-state';
// const filterForm = document.querySelector('.feedback-form');

// hereinForm();
// var throttle = require('lodash.throttle'); 
// throttle(hereinForm, 500);

// filterForm.addEventListener('submit', evt => {
//   evt.preventDefault();
//   const formData = new FormData(filterForm);
//   formData.forEach((value, name) => console.log(value, name));
// });

// filterForm.addEventListener('change', evt => {
//   let goFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   goFilters = goFilters ? JSON.parse(goFilters) : {};
//   goFilters[evt.target.name] = evt.target.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(goFilters));
// });

// filterForm.addEventListener('reset', () => {
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// });

// function hereinForm() {
//   let goFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (goFilters) {
//     goFilters = JSON.parse(goFilters);
//     Object.entries(goFilters).forEach(([name, value]) => {
//       filterForm.elements[name].value = value;
//     });
//   }
// }

import throttle from 'lodash.throttle';


const refs = {
    formEl: document.querySelector('form'),
    textaria: document.querySelector('textarea')
}

const LOCALSTORAGE_KEY = 'feedback-form-state';
const inputSavedText = {};

refs.formEl.addEventListener('input', throttle(onTextInput, 500))

refs.formEl.addEventListener('input', evt => {
    inputSavedText[evt.target.name] = evt.target.value;
    localStorage.setItem(inputSavedText, JSON.stringify(inputSavedText));
})

function onTextInput(evt) {
    const savedText = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, savedText);
}