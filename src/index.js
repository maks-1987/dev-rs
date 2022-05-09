import './assets/styles/main.scss';
import './lang';

const { keyCode, allKeysEn, allKeysEnShift } = require('./lang');

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
title.innerText = 'Virtual keyboard RSSchool';
textArea.className = 'inputText';
descr.textContent = 'Клавиатура создана в операционной системе Windows';
shortcat.textContent = 'Для переключения языка комбинация: Shift + Alt';

function appendEl(elem, container) {
  container.appendChild(elem);
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

/* bind data-attributes */
function bindDataAttr() {
  const kbItem = document.querySelectorAll('.kb-item');

  kbItem.forEach((e, index) => {
    e.dataset.keycode = keyCode[index];
    e.classList.add(keyCode[index].toLocaleLowerCase());
  });
}

/* init keys */
function createKeys() {
  for (let i = 0; i < 64; i + 1) {
    const kbItem = document.createElement('div');
    kbItem.className = 'kb-item';

    appendEl(kbItem, kbWrapper);
  }

  bindDataAttr();
}

createKeys();
const kbItem = document.querySelectorAll('.kb-item');

function changeKeysContent(keysContent) {
  kbItem.forEach((e, index) => {
    e.innerText = keysContent[index];
  });
}

changeKeysContent(allKeysEn);

function shiftKeys(e) {
  textArea.focus();
  kbItem.forEach((el) => {
    if (el.dataset.keycode === e.code) {
      el.classList.add('active');
    }
  });

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    changeKeysContent(allKeysEnShift);
  } else if (e.code === 'Tab') {
    e.preventDefault();
  }
}

function shiftKeysUp(e) {
  kbItem.forEach((el) => {
    if (el.dataset.keycode === e.code) {
      el.classList.remove('active');
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      changeKeysContent(allKeysEn);
    }
  });
}

function shiftKeysMouse(e) {
  kbItem.forEach((el) => {
    if (e.target.dataset.keycode === el.dataset.keycode) {
      if (el.dataset.keycode === 'ShiftLeft' || el.dataset.keycode === 'ShiftRight') {
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
    if (e.target.dataset.keycode === el.dataset.keycode) {
      e.target.classList.remove('active');
    }
    if (el.dataset.keycode === 'ShiftLeft' || el.dataset.keycode === 'ShiftRight') {
      changeKeysContent(allKeysEn);
    }
  });
}

/* shift-event */
document.addEventListener('keydown', shiftKeys);
document.addEventListener('keyup', shiftKeysUp);
kbWrapper.addEventListener('pointerdown', shiftKeysMouse);
kbWrapper.addEventListener('pointerup', shiftKeysMouseUp);
