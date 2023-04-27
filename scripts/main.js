import keyboardLayoutEnglish from './data/keyboard-values-en.js';
import createPageStructure from './data/page-structure.js';
import createKeyboard from './data/create-keyboard.js';

document.addEventListener('click', function (event) {
  console.log(event.target.getAttribute('data-id'));
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
  createKeyboard(keyboardLayoutEnglish);
})();
