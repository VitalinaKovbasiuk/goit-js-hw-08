
// HTML містить <iframe> з відео для Vimeo плеєра. 
// Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, 
// після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.
// Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

// 1.Ознайомся з документацією бібліотеки Vimeo плеєра.
// 2.Додай бібліотеку як залежність проекту через npm - npm i --save lodash.throttle (Using npm:
// $ npm i -g npm
// $ npm i lodash
// Note: add --save if you are using npm < 5.0.0)
// 3.Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, 
// але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// 4.Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// 5.Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6.Під час перезавантаження сторінки скористайся методом setCurrentTime() 
// з метою відновлення відтворення зі збереженої позиції.
// 7.Додай до проекту бібілотеку lodash.throttle і зроби так, 
// щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.



// import throtle from 'lodash.throttle';
// import Player from '@vimeo/player';

// const playerIframe = document.querySelector('#vimeo-player');
// const player = new Player(playerIframe, { autoplay: true });

// const PLAYER_STATE = 'player-state';

// let playerState = JSON.parse(localStorage.getItem(PLAYER_STATE)) ?? {};

// const setPlayerStateFromLocalStorage = () => {
//   if (Object.keys(playerState).length === 0) return;

//   player.setCurrentTime(playerState.currentTime ?? 0);
//   player.setQuality(playerState.quality ?? 'auto');
//   if (playerState.isPlay) {
//     player.setVolume(0);
//     player.play();
//   }
// };

// setPlayerStateFromLocalStorage();

// const updateLocalStorage = () =>
//   localStorage.setItem(PLAYER_STATE, JSON.stringify(playerState));

// const timeUpdate = ({ seconds }) => {
//   playerState.currentTime = seconds;
//   updateLocalStorage();
// };

// const playerPlay = () => {
//   playerState.isPlay = true;
//   updateLocalStorage();
// };

// const playerPause = ({ seconds }) => {
//   playerState.currentTime = seconds;
//   playerState.isPlay = false;
//   updateLocalStorage();
// };

// const playerQuality = ({ quality }) => {
//   playerState.quality = quality;
//   updateLocalStorage();
// };

// const videoEnded = () => {
//   setTimeout(() => localStorage.removeItem(PLAYER_STATE), 1000);
//   playerState = {};
// };

// player.on('timeupdate', throtle(timeUpdate, 1000));
// player.on('play', playerPlay);
// player.on('pause', playerPause);
// player.on('qualitychange', playerQuality);
// player.on('ended', videoEnded);




