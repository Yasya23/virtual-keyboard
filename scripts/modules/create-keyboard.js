import addButtonValues from './button-values.js';

class Button {
  constructor(value, index) {
    this.value = value;
    this.valueTwo = null;
    this.id = value;
    this.shiftId = null;
    this.index = index;
    this.class = null;
    this.extraClass = null;
  }

  checkValue() {
    if (!Array.isArray(this.value)) {
      const buttonsValues = addButtonValues(
        this.value,
        this.index,
        'simpleButton'
      );
      [this.value, this.id, this.class] = buttonsValues;
      return this.simpleButton();
    }
    if (Array.isArray(this.value) && this.value[0] === 'ArrowLeft') {
      this.value = addButtonValues(this.value, this.index, 'arrows');
      return this.arrows();
    } else {
      const buttonsValues = addButtonValues(
        this.value,
        this.index,
        'buttonWithTwoValues'
      );
      [
        this.value,
        this.valueTwo,
        this.id,
        this.shiftId,
        this.class,
        this.extraClass,
      ] = buttonsValues;
      return this.buttonWithTwoValues();
    }
  }

  simpleButton() {
    return ` <div class="${this.class}" data-id="${this.id}">${this.value}</div>`;
  }

  buttonWithTwoValues() {
    return ` <div class="${this.class}" data-id="${this.id}" data-shift-id="${this.shiftId}">
      <div>${this.value}</div>
      <div class=${this.extraClass}>${this.valueTwo}</div>
    </div>`;
  }

  arrows() {
    const [leftId, upId, downId, rightId] = this.value.map((el) => el[1]);
    const [leftValue, upValue, downValue, rightValue] = this.value.map(
      (el) => el[0]
    );
    const [leftClasses, upClasses, downClasses, rightClasses] = this.value.map(
      (el) => el[2]
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

function createKeyboard(data) {
  // console.log(data.length);
  const result = data.map((row) => createRow(row)).join('');
  // console.log(result);
  document.querySelector('.container').innerHTML = result;
}

function createRow(row) {
  // console.log(row);
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
  const newButton = new Button(buttonValue, index);
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