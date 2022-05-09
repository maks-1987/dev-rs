import './assets/styles/main.scss';
import './lang';

const {keyCode, allKeysEn, allKeysEnShift} = require('./lang');

const functionalKeys = [
  'Tab',
  'Backspace',
  'Delete',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
];

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textArea = document.createElement('textarea');
const descr = document.createElement('p');
const shortcat = document.createElement('p');
wrapper.className = 'wrapper';
title.className = 'title';
title.innerText = `Virtual keyboard RSschool`;
textArea.className = 'inputText';
descr.textContent = 'Клавиатура создана в операционной системе Windows';
shortcat.textContent = 'Для переключения языка комбинация: Shift + Alt';

function appendEl(elem, wrapper) {
  wrapper.appendChild(elem);
}

/* init keyboard  */
const kbWrapper = document.createElement('div');
kbWrapper.className = 'kb-wrapper';

appendEl(wrapper, body);
appendEl(title, wrapper);
appendEl(textArea, wrapper);
appendEl(kbWrapper, wrapper);
appendEl(descr, wrapper);
appendEl(shortcat, wrapper);

/* init keys */
createKeys();
const kbItem = document.querySelectorAll('.kb-item');
// function changeKeysContentInit() {
//   changeKeysContent(allKeysEn);
// }

changeKeysContent(allKeysEn);

function createKeys() {
  for (let i = 0; i < 64; i++) {
    const kbItem = document.createElement('div');
    kbItem.className = 'kb-item';

    appendEl(kbItem, kbWrapper);
  }

  bindDataAttr();
}

function changeKeysContent(keysContent) {
  kbItem.forEach((el, index) => {
    el.innerText = keysContent[index];
  });
}

/* shift-event */
document.addEventListener('keydown', shiftKeys);
document.addEventListener('keyup', shiftKeysUp);
kbWrapper.addEventListener('pointerdown', shiftKeysMouse);
kbWrapper.addEventListener('pointerup', shiftKeysMouseUp);

function shiftKeys(e) {
  textArea.focus();
  kbItem.forEach((el) => {
    if (el.dataset.keycode == e.code) {
      el.classList.add('active');
    }
  });

  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
    changeKeysContent(allKeysEnShift);
  } else if (e.code == 'Tab') {
    e.preventDefault();
  }
}

function shiftKeysUp(e) {
  kbItem.forEach((el) => {
    if (el.dataset.keycode == e.code) {
      el.classList.remove('active');
    }
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
      changeKeysContent(allKeysEn);
    }
  });
}

function shiftKeysMouse(e) {
  kbItem.forEach((el) => {
    if (e.target.dataset.keycode == el.dataset.keycode) {
      if (el.dataset.keycode == 'ShiftLeft' || el.dataset.keycode == 'ShiftRight') {
        changeKeysContent(allKeysEnShift);
      } else if (functionalKeys.includes(e.target.dataset.keycode)) {
        el.classList.add('active');
      } else {
        textArea.value += el.innerText;
        el.classList.add('active');
      }
    }
  });
}

function shiftKeysMouseUp(e) {
  kbItem.forEach((el) => {
    if (e.target.dataset.keycode == el.dataset.keycode) {
      e.target.classList.remove('active');
    }
    if (el.dataset.keycode == 'ShiftLeft' || el.dataset.keycode == 'ShiftRight') {
      changeKeysContent(allKeysEn);
    }
  });
}

/* change languge */

/* capslock event */
/* wrapper.addEventListener('keydown', (e) => {
  kbItem.forEach((el) => {
    if (el.dataset.keycode == 'CapsLock') {
      console.log('caps');
      // el.classList.add('active');
    }
  });
}); */

/* bind data-attributes */
function bindDataAttr() {
  let kbItem = document.querySelectorAll('.kb-item');

  kbItem.forEach((el, index) => {
    el.dataset.keycode = keyCode[index];
    el.classList.add(keyCode[index].toLocaleLowerCase());
  });
}
