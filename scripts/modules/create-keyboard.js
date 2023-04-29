import addButtonValues from './button-values.js';

class Button {
  constructor(value, index) {
    this.value = value;
    this.valueTwo = null;
    this.id = value;
    this.shiftId = null;
    this.index = index;
    this.class = null;
    this.extraClassOne = null;
    this.extraClassTwo = null;
  }

  checkValue() {
    if (!Array.isArray(this.value)) {
      const buttonsValues = addButtonValues(
        this.value,
        this.index,
        'simpleButton',
      );
      [this.value, this.id, this.class] = buttonsValues;
      return this.simpleButton();
    }
    if (Array.isArray(this.value) && this.value[0] === 'ArrowLeft') {
      this.value = addButtonValues(this.value, this.index, 'arrows');
      return this.arrows();
    }
    const buttonsValues = addButtonValues(this.value, this.index, 'buttonWithTwoValues');
    [this.value, this.valueTwo, this.id, this.shiftId, this.class,
      this.extraClassOne, this.extraClassTwo] = buttonsValues;
    return this.buttonWithTwoValues();
  }

  simpleButton() {
    return ` <div class="${this.class}" data-id="${this.id}">${this.value} </div>`;
  }

  buttonWithTwoValues() {
    return ` <div class="${this.class}" data-id="${this.id}" data-shift-id="${this.shiftId}">
      <div class="${this.extraClassTwo}">${this.value}</div>
      <div class="${this.extraClassOne}">${this.valueTwo}</div>
    </div>`;
  }

  arrows() {
    const [leftId, upId, downId, rightId] = this.value.map((el) => el[1]);
    const [leftValue, upValue, downValue, rightValue] = this.value.map(
      (el) => el[0],
    );
    const [leftClasses, upClasses, downClasses, rightClasses] = this.value.map(
      (el) => el[2],
    );
    return `<div class="arrows">
      <div class="${leftClasses}" data-id="${leftId}">${leftValue}</div>
      <div>
        <div class="${upClasses}" data-id="${upId}">${upValue}</div>
        <div class="${downClasses}" data-id="${downId}">${downValue}</div>
      </div>
      <div class="${rightClasses}" data-id="${rightId}">${rightValue}</div>
    </div>`;
  }
}

function createButton(buttonValue, index) {
  const newButton = new Button(buttonValue, index);
  return newButton.checkValue();
}

function createRow(row) {
  const rowArray = row.map((button, index) => createButton(button, index))
    .join('');
  return `<div class="row">${rowArray}</div>`;
}

function createKeyboard(data) {
  const result = data.map((row) => createRow(row)).join('');
  document.querySelector('.container').innerHTML = result;
}

export default createKeyboard;
