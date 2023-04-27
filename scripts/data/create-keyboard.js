import checkKeyboardButton from './button-values.js';

class Button {
  constructor(value, index, elClass) {
    this.value = value;
    this.valueTwo = null;
    this.id = value;
    this.shiftId = null;
    this.index = index;
    this.class = elClass;
  }

  checkValue() {
    if (!Array.isArray(this.value)) {
      [this.value, this.id, this.class] = checkKeyboardButton(
        this.value,
        this.index
      );
      return this.simpleButton();
    }
  }

  simpleButton() {
    return ` <div class='${this.class}' data-id='${this.id}'>${this.value}</div>`;
  }

  buttonWithTwoValues() {
    return ` <div class='${this.class}' data-id='${this.id}' data-shift-id='${this.shiftId}'>
      <div>${this.value}</div>
      <div>${this.valueTwo}</div>
    </div>`;
  }
}

function createKeyboard(data) {
  // console.log(data.length);
  const result = data.map((row) => createRow(row)).join('');
  // console.log(result);
  document.querySelector('.container').innerHTML = result;
}

function createRow(row) {
  console.log(row);
  const rowArray = row
    .map((button, index) => {
      return createButton(button, index);
    })
    .join('');
  // console.log(`<div class="row">${rowArray}</div>`);
  return `<div class="row">${rowArray}</div>`;
}

function createButton(buttonValue, index) {
  // console.log(buttonValue);
  const newButton = new Button(buttonValue, index, 'button');
  // const buttonWithTwoValues = new Button(buttonValue[0], buttonValue[1]);
  // newButton.checkValue(buttonValue);
  return newButton.checkValue();

  // !Array.isArray(buttonValue)
  //   ? (button = buttonSimple.simpleButton())
  //   : (button = buttonWithTwoValues.buttonWithTwoValues());
  // // console.log(button);
  // return button;
}

export default createKeyboard;
