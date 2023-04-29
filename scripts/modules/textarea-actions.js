import { checkLanguage } from './change-lang.js';
import { keysBtnWithTwoValues } from './keyboard-in-en.js';

function showTextInTextearea(event, key) {
  const keyboardLanguage = checkLanguage();

  const textarea = document.querySelector('textarea');
  if (key !== 'Shift') {
    event.preventDefault();
    if (keyboardLanguage === 'Ua' && !keysBtnWithTwoValues.includes(key)) {
      const element = document.querySelector(`[data-id="${key}"]`);
      if (element) insertTextAtCursor(textarea, element.textContent);
    } else {
      insertTextAtCursor(textarea, key);
    }
    textarea.focus();
  }
}

function insertTextAtCursor(textarea, newText) {
  const { selectionStart: cursorPosition, value: currentValue } = textarea;
  const prefix = currentValue.slice(0, cursorPosition);
  const suffix = currentValue.slice(cursorPosition);
  textarea.value = prefix + newText + suffix;
  textarea.setSelectionRange(
    cursorPosition + newText.length,
    cursorPosition + newText.length
  );
}

export default showTextInTextearea;
