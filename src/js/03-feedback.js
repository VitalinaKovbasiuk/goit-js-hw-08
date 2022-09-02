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



import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

const form = document.querySelector('form');

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const getFeedBack = Array.from(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(getFeedBack));
}

// if(inputRef.value===''){
//     inputRef.textContent=localStorage.getItem(email.value);
// }


