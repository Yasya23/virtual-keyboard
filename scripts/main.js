import keyboardLayoutEnglish from './data/en-keyboard.js';

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  // let letter = '!';
  // console.log(letter.charCodeAt());
});

console.log(keyboardLayoutEnglish);

(function init() {
  createPage();
  createKeyboard(keyboardLayoutEnglish);
})();
