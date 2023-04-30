import { checkLanguage } from './change-lang.js';
import { returnIsShift } from './buttons-actions.js';

function insertTextAtCursor(textareaElement, text) {
  let newText = text;
  const textarea = textareaElement;
  const isShift = returnIsShift();
  if (isShift) newText = newText.toUpperCase();
  const { selectionStart: cursorPosition, value: currentValue } = textarea;
  const prefix = currentValue.slice(0, cursorPosition);
  const suffix = currentValue.slice(cursorPosition);
  textarea.value = prefix + newText + suffix;
  textarea.setSelectionRange(
    cursorPosition + newText.length,
    cursorPosition + newText.length,
  );
}

function keyboardInUkraine(key, lowerecaseKey, textarea) {
  // console.log(key);

  if (!keysEn.includes(key)) {
    const element = document.querySelector(`[data-id='${lowerecaseKey}']`);
    insertTextAtCursor(textarea, element.textContent);
  } else if (keysEn.includes(key)) {
    const keyNumber = keysEn.indexOf(key);
    return insertTextAtCursor(textarea, keysUa[keyNumber]);
  }
  // return insertTextAtCursor(textarea, keysUa[lowerecaseKey]);
}

function showTextInTextearea(event, key) {
  const textarea = document.querySelector('textarea');
  const keyboardLanguage = checkLanguage();

  if (key) {
    event.preventDefault();
    const lowerecaseKey = returnIsShift() ? key.toLowerCase() : key;
    if (keyboardLanguage === 'ао') {
      keyboardInUkraine(key, lowerecaseKey, textarea);
    } else {
      insertTextAtCursor(textarea, key);
    }
    textarea.focus();
  }
}

export default showTextInTextearea;
