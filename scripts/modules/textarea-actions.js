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

function showTextInTextearea(event, key) {
  const textarea = document.querySelector('textarea');

  if (key) {
    event.preventDefault();
    const element = document.querySelector(`[data-id="${key}"]`);
    const { children } = element;
    if (children.length > 0) {
      let text;
      Array.from(children).forEach((child) => {
        if (!child.classList.contains('button-value-none')) {
          text = child.textContent;
        }
      });
      insertTextAtCursor(textarea, text);
    } else {
      insertTextAtCursor(textarea, element.textContent.trim());
    }
    textarea.focus();
  }
}

export default showTextInTextearea;
