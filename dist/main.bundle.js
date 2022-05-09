/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://maks-1987-jsfe2022q1/./src/assets/styles/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.scss */ \"./src/assets/styles/main.scss\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lang__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst {keyCode, allKeysEn, allKeysEnShift} = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\r\n\r\nconst functionalKeys = [\r\n  'Tab',\r\n  'Backspace',\r\n  'Delete',\r\n  'CapsLock',\r\n  'Enter',\r\n  'ShiftLeft',\r\n  'ShiftRight',\r\n  'ControlLeft',\r\n  'MetaLeft',\r\n  'AltLeft',\r\n  'Space',\r\n  'AltRight',\r\n  'ControlRight',\r\n];\r\n\r\nconst body = document.querySelector('body');\r\nconst wrapper = document.createElement('div');\r\nconst title = document.createElement('h1');\r\nconst textArea = document.createElement('textarea');\r\nconst descr = document.createElement('p');\r\nconst shortcat = document.createElement('p');\r\nwrapper.className = 'wrapper';\r\ntitle.className = 'title';\r\ntitle.innerText = `Virtual keyboard RSschool`;\r\ntextArea.className = 'inputText';\r\ndescr.textContent = 'Клавиатура создана в операционной системе Windows';\r\nshortcat.textContent = 'Для переключения языка комбинация: Shift + Alt';\r\n\r\nfunction appendEl(elem, wrapper) {\r\n  wrapper.appendChild(elem);\r\n}\r\n\r\n/* init keyboard  */\r\nconst kbWrapper = document.createElement('div');\r\nkbWrapper.className = 'kb-wrapper';\r\n\r\nappendEl(wrapper, body);\r\nappendEl(title, wrapper);\r\nappendEl(textArea, wrapper);\r\nappendEl(kbWrapper, wrapper);\r\nappendEl(descr, wrapper);\r\nappendEl(shortcat, wrapper);\r\n\r\n/* init keys */\r\ncreateKeys();\r\nconst kbItem = document.querySelectorAll('.kb-item');\r\n// function changeKeysContentInit() {\r\n//   changeKeysContent(allKeysEn);\r\n// }\r\n\r\nchangeKeysContent(allKeysEn);\r\n\r\nfunction createKeys() {\r\n  for (let i = 0; i < 64; i++) {\r\n    const kbItem = document.createElement('div');\r\n    kbItem.className = 'kb-item';\r\n\r\n    appendEl(kbItem, kbWrapper);\r\n  }\r\n\r\n  bindDataAttr();\r\n}\r\n\r\nfunction changeKeysContent(keysContent) {\r\n  kbItem.forEach((el, index) => {\r\n    el.innerText = keysContent[index];\r\n  });\r\n}\r\n\r\n/* shift-event */\r\ndocument.addEventListener('keydown', shiftKeys);\r\ndocument.addEventListener('keyup', shiftKeysUp);\r\nkbWrapper.addEventListener('pointerdown', shiftKeysMouse);\r\nkbWrapper.addEventListener('pointerup', shiftKeysMouseUp);\r\n\r\nfunction shiftKeys(e) {\r\n  textArea.focus();\r\n  kbItem.forEach((el) => {\r\n    if (el.dataset.keycode == e.code) {\r\n      el.classList.add('active');\r\n    }\r\n  });\r\n\r\n  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {\r\n    changeKeysContent(allKeysEnShift);\r\n  } else if (e.code == 'Tab') {\r\n    e.preventDefault();\r\n  }\r\n}\r\n\r\nfunction shiftKeysUp(e) {\r\n  kbItem.forEach((el) => {\r\n    if (el.dataset.keycode == e.code) {\r\n      el.classList.remove('active');\r\n    }\r\n    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {\r\n      changeKeysContent(allKeysEn);\r\n    }\r\n  });\r\n}\r\n\r\nfunction shiftKeysMouse(e) {\r\n  kbItem.forEach((el) => {\r\n    if (e.target.dataset.keycode == el.dataset.keycode) {\r\n      if (el.dataset.keycode == 'ShiftLeft' || el.dataset.keycode == 'ShiftRight') {\r\n        changeKeysContent(allKeysEnShift);\r\n      } else if (functionalKeys.includes(e.target.dataset.keycode)) {\r\n        el.classList.add('active');\r\n      } else {\r\n        textArea.value += el.innerText;\r\n        el.classList.add('active');\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nfunction shiftKeysMouseUp(e) {\r\n  kbItem.forEach((el) => {\r\n    if (e.target.dataset.keycode == el.dataset.keycode) {\r\n      e.target.classList.remove('active');\r\n    }\r\n    if (el.dataset.keycode == 'ShiftLeft' || el.dataset.keycode == 'ShiftRight') {\r\n      changeKeysContent(allKeysEn);\r\n    }\r\n  });\r\n}\r\n\r\n/* change languge */\r\n\r\n/* capslock event */\r\n/* wrapper.addEventListener('keydown', (e) => {\r\n  kbItem.forEach((el) => {\r\n    if (el.dataset.keycode == 'CapsLock') {\r\n      console.log('caps');\r\n      // el.classList.add('active');\r\n    }\r\n  });\r\n}); */\r\n\r\n/* bind data-attributes */\r\nfunction bindDataAttr() {\r\n  let kbItem = document.querySelectorAll('.kb-item');\r\n\r\n  kbItem.forEach((el, index) => {\r\n    el.dataset.keycode = keyCode[index];\r\n    el.classList.add(keyCode[index].toLocaleLowerCase());\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://maks-1987-jsfe2022q1/./src/index.js?");

/***/ }),

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/***/ ((module) => {

eval("const allKeysEn = [\r\n  '`',\r\n  '1',\r\n  '2',\r\n  '3',\r\n  '4',\r\n  '5',\r\n  '6',\r\n  '7',\r\n  '8',\r\n  '9',\r\n  '0',\r\n  '-',\r\n  '=',\r\n  'Backspace',\r\n  'Tab',\r\n  'q',\r\n  'w',\r\n  'e',\r\n  'r',\r\n  't',\r\n  'y',\r\n  'u',\r\n  'i',\r\n  'o',\r\n  'p',\r\n  '[',\r\n  ']',\r\n  '\\\\',\r\n  'Del',\r\n  'CapsLock',\r\n  'a',\r\n  's',\r\n  'd',\r\n  'f',\r\n  'g',\r\n  'h',\r\n  'j',\r\n  'k',\r\n  'l',\r\n  ';',\r\n  \"'\",\r\n  'Enter',\r\n  'Shift',\r\n  'z',\r\n  'x',\r\n  'c',\r\n  'v',\r\n  'b',\r\n  'n',\r\n  'm',\r\n  ',',\r\n  '.',\r\n  '/',\r\n  '⏶',\r\n  'Shift',\r\n  'Ctrl',\r\n  'Win',\r\n  'Alt',\r\n  '',\r\n  'Alt',\r\n  'Ctrl',\r\n  '⏴',\r\n  '⏷',\r\n  '⏵',\r\n];\r\n\r\nconst allKeysEnShift = [\r\n  '~',\r\n  '!',\r\n  '@',\r\n  '#',\r\n  '$',\r\n  '%',\r\n  '^',\r\n  '&',\r\n  '*',\r\n  '(',\r\n  ')',\r\n  '_',\r\n  '+',\r\n  'Backspace',\r\n  'Tab',\r\n  'Q',\r\n  'W',\r\n  'R',\r\n  'E',\r\n  'T',\r\n  'Y',\r\n  'U',\r\n  'I',\r\n  'O',\r\n  'P',\r\n  '{',\r\n  '}',\r\n  '|',\r\n  'Del',\r\n  'CapsLock',\r\n  'A',\r\n  'S',\r\n  'D',\r\n  'F',\r\n  'G',\r\n  'H',\r\n  'J',\r\n  'K',\r\n  'L',\r\n  ':',\r\n  '\"',\r\n  'Enter',\r\n  'Shift',\r\n  'Z',\r\n  'X',\r\n  'C',\r\n  'V',\r\n  'B',\r\n  'N',\r\n  'M',\r\n  '<',\r\n  '>',\r\n  '?',\r\n  '⏶',\r\n  'Shift',\r\n  'Ctrl',\r\n  'Win',\r\n  'Alt',\r\n  '',\r\n  'Alt',\r\n  'Ctrl',\r\n  '⏴',\r\n  '⏷',\r\n  '⏵',\r\n];\r\n\r\nconst keyCode = [\r\n  'Backquote',\r\n  'Digit1',\r\n  'Digit2',\r\n  'Digit3',\r\n  'Digit4',\r\n  'Digit5',\r\n  'Digit6',\r\n  'Digit7',\r\n  'Digit8',\r\n  'Digit9',\r\n  'Digit0',\r\n  'Minus',\r\n  'Equal',\r\n  'Backspace',\r\n  'Tab',\r\n  'KeyQ',\r\n  'KeyW',\r\n  'KeyE',\r\n  'KeyR',\r\n  'KeyT',\r\n  'KeyY',\r\n  'KeyU',\r\n  'KeyI',\r\n  'KeyO',\r\n  'KeyP',\r\n  'BracketLeft',\r\n  'BracketRight',\r\n  'Backslash',\r\n  'Delete',\r\n  'CapsLock',\r\n  'KeyA',\r\n  'KeyS',\r\n  'KeyD',\r\n  'KeyF',\r\n  'KeyG',\r\n  'KeyH',\r\n  'KeyJ',\r\n  'KeyK',\r\n  'KeyL',\r\n  'Semicolon',\r\n  'Quote',\r\n  'Enter',\r\n  'ShiftLeft',\r\n  'KeyZ',\r\n  'KeyX',\r\n  'KeyC',\r\n  'KeyV',\r\n  'KeyB',\r\n  'KeyN',\r\n  'KeyM',\r\n  'Comma',\r\n  'Period',\r\n  'Slash',\r\n  'ArrowUp',\r\n  'ShiftRight',\r\n  'ControlLeft',\r\n  'MetaLeft',\r\n  'AltLeft',\r\n  'Space',\r\n  'AltRight',\r\n  'ControlRight',\r\n  'ArrowLeft',\r\n  'ArrowDown',\r\n  'ArrowRight',\r\n];\r\n\r\nmodule.exports = {\r\n  keyCode,\r\n  allKeysEn,\r\n  allKeysEnShift,\r\n};\r\n\n\n//# sourceURL=webpack://maks-1987-jsfe2022q1/./src/lang.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;