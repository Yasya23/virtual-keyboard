const buttonClasses = {
  buttonGeneral: 'button',
  buttonMediumRight: 'button button-meduim content-right-side',
  buttonMediumLeft: 'button button-meduim content-left-side',
  buttonLarge: 'button button-large',
  buttonWithText: 'button-text',
  buttonValue: 'button-value',
  buttonWithLetters: 'button button-letters',
  buttonNone: 'button-value button-value-none',
  arrow: 'button button-arrow',
  arrowTop: 'button button-arrow button-arrow-top',
};

function simpleButton(value) {
  const [key, valueOne] = value;
  switch (key) {
    case 'Backspace':
    case 'ShiftRight':
    case 'Enter':
      return [valueOne, key, buttonClasses.buttonMediumRight];
    case 'Tab':
    case 'CapsLock':
    case 'ShiftLeft':
      return [valueOne, key, buttonClasses.buttonMediumLeft];
    case 'Space':
      return [valueOne, key, buttonClasses.buttonLarge];
    case 'Delete':
      return [valueOne, key, buttonClasses.buttonGeneral];
    default:
      return [valueOne, key, buttonClasses.buttonWithLetters];
  }
}

function arrowsButtons(value) {
  const [leftArrow, upArrow, downArrow, rightArrow] = value.map((el) => el);
  const left = [leftArrow[1], leftArrow[0], buttonClasses.arrow];
  const up = [upArrow[1], upArrow[0], buttonClasses.arrowTop];
  const down = [downArrow[1], downArrow[0], buttonClasses.arrow];
  const right = [rightArrow[1], rightArrow[0], buttonClasses.arrow];
  return [left, up, down, right];
}

function buttonWithTwoValues(value) {
  const [key, valueOne, valueTwo] = value;
  const keys = ['ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'];
  if (keys.includes(key)) {
    return [valueOne, valueTwo, key,
      buttonClasses.buttonGeneral, buttonClasses.buttonWithText];
  }
  return [valueOne, valueTwo, key,
    buttonClasses.buttonGeneral, buttonClasses.buttonValue, buttonClasses.buttonNone];
}

function addButtonValues(value, buttonType) {
  let result;
  if (buttonType === 'simpleButton') result = simpleButton(value);
  if (buttonType === 'arrows')result = arrowsButtons(value);
  if (buttonType === 'buttonWithTwoValues') result = buttonWithTwoValues(value);
  return result;
}

export default addButtonValues;
