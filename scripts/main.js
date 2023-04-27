import keyboardLayoutEnglish from './modules/keyboard-in-en.js';
import keyboardLayoutUkraine from './modules/keyboard-in-ua.js';
import createPageStructure from './modules/page-structure.js';
import createKeyboard from './modules/create-keyboard.js';

document.addEventListener('click', function (event) {
  // console.log(event.target.getAttribute('data-id'));
});

// document.addEventListener('keyup', function (event) {
//   document.querySelectorAll('.button').forEach((el) => {
//     if (el.getAttribute('data-id') === event.key)
//       el.style.backgroundColor = 'red';
//   });
// });

console.log(keyboardLayoutEnglish);

(function init() {
  createPageStructure();
  createKeyboard(keyboardLayoutUkraine);
})();
