import { checkLanguage } from './change-lang.js';

function showTextInTextearea(event, key) {
  const keyboardLanguage = checkLanguage();

  const textarea = document.querySelector('textarea');
  if (key !== 'Shift') {
    event.preventDefault();
    if (keyboardLanguage === 'Ua') {
      const text = document.querySelector(`[data-id="${key}"]`);
      insertTextAtCursor(textarea, text.textContent);
    } else {
      insertTextAtCursor(textarea, key);
    }
  }
  textarea.focus();
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
