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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.scss */ \"./src/assets/styles/main.scss\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lang__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst {keyCode, allKeys_en, allKeys_en_Shift} = __webpack_require__(/*! ./lang */ \"./src/lang.js\");\r\n\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst title = document.createElement('h1');\r\ntitle.className = 'title';\r\ntitle.innerText = `Virtual keyboard RSschool`;\r\n\r\nconst textArea = document.createElement('textarea');\r\ntextArea.className = 'inputText';\r\n\r\nfunction appendEl(elem, wrapper) {\r\n  wrapper.appendChild(elem);\r\n}\r\n\r\nappendEl(title, wrapper);\r\nappendEl(textArea, wrapper);\r\n\r\n/* keyboard  */\r\nconst kb_wrapper = document.createElement('div');\r\nkb_wrapper.className = 'kb-wrapper';\r\nappendEl(kb_wrapper, wrapper);\r\n\r\n/* keys */\r\ncreateKeys(allKeys_en);\r\n\r\nfunction createKeys(keys_lang) {\r\n  for (let i = 0; i < 64; i++) {\r\n    const kb_item = document.createElement('div');\r\n\r\n    if (i == 0) {\r\n      kb_item.className = 'kb-item tilda';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 13) {\r\n      kb_item.className = 'kb-item backspace';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 14) {\r\n      kb_item.className = 'kb-item tab';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 28) {\r\n      kb_item.className = 'kb-item delete';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 29) {\r\n      kb_item.className = 'kb-item capslock';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 41) {\r\n      kb_item.className = 'kb-item enter';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 42) {\r\n      kb_item.className = 'kb-item shiftLeft';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 53) {\r\n      kb_item.className = 'kb-item arrowUp';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 54) {\r\n      kb_item.className = 'kb-item shiftRight';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 55) {\r\n      kb_item.className = 'kb-item ctrlLeft';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 56) {\r\n      kb_item.className = 'kb-item win';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 57) {\r\n      kb_item.className = 'kb-item altLeft';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 58) {\r\n      kb_item.className = 'kb-item space';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 59) {\r\n      kb_item.className = 'kb-item altRight';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 60) {\r\n      kb_item.className = 'kb-item ctrlRight';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 61) {\r\n      kb_item.className = 'kb-item arrowLeft';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 62) {\r\n      kb_item.className = 'kb-item arrowBottom';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    } else if (i == 63) {\r\n      kb_item.className = 'kb-item arrowRight';\r\n      kb_item.innerText = `${keys_lang[i][1]}`;\r\n    } else {\r\n      kb_item.className = 'kb-item';\r\n      kb_item.innerText = `${keys_lang[i]}`;\r\n    }\r\n\r\n    appendEl(kb_item, kb_wrapper);\r\n  }\r\n\r\n  bindDataAttr();\r\n}\r\n\r\n/* shift-event */\r\ndocument.addEventListener('keydown', (e) => {\r\n  let kb_item = document.querySelectorAll('.kb-item');\r\n  kb_item.forEach((el, index) => {\r\n    // console.log(el);\r\n    if (el.dataset.keycode == e.code) {\r\n      el.classList.add('active');\r\n\r\n      setTimeout(() => {\r\n        el.classList.remove('active');\r\n      }, 200);\r\n      // console.log(e.code);\r\n    }\r\n  });\r\n  // console.log(e.code);\r\n  // e.repeat = false;\r\n  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {\r\n    clearKeys();\r\n    createKeys(allKeys_en_Shift);\r\n  }\r\n});\r\n\r\ndocument.addEventListener('keyup', (e) => {\r\n  // console.log(e.code);\r\n  // e.repeat = 'false';\r\n\r\n  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {\r\n    clearKeys();\r\n    createKeys(allKeys_en);\r\n  }\r\n});\r\n\r\n/* bind data-attributes */\r\nfunction bindDataAttr() {\r\n  let kb_item = document.querySelectorAll('.kb-item');\r\n\r\n  kb_item.forEach((el, index) => {\r\n    el.dataset.keycode = keyCode[index];\r\n  });\r\n}\r\n\r\n/* clear-keys */\r\nfunction clearKeys() {\r\n  kb_wrapper.innerHTML = '';\r\n}\r\n\r\n/* active-class */\r\n// let kb_item = document.querySelectorAll('.kb-item');\r\n\n\n//# sourceURL=webpack://maks-1987-jsfe2022q1/./src/index.js?");

/***/ }),

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/***/ ((module) => {

eval("const allKeys_en = [\r\n  '`',\r\n  '1',\r\n  '2',\r\n  '3',\r\n  '4',\r\n  '5',\r\n  '6',\r\n  '7',\r\n  '8',\r\n  '9',\r\n  '0',\r\n  '-',\r\n  '=',\r\n  'Backspace',\r\n  'Tab',\r\n  'q',\r\n  'w',\r\n  'e',\r\n  'r',\r\n  't',\r\n  'y',\r\n  'u',\r\n  'i',\r\n  'o',\r\n  'p',\r\n  '[',\r\n  ']',\r\n  '\\\\',\r\n  'Del',\r\n  'CapsLock',\r\n  'a',\r\n  's',\r\n  'd',\r\n  'f',\r\n  'g',\r\n  'h',\r\n  'j',\r\n  'k',\r\n  'l',\r\n  ';',\r\n  \"'\",\r\n  'Enter',\r\n  'Shift',\r\n  'z',\r\n  'x',\r\n  'c',\r\n  'v',\r\n  'b',\r\n  'n',\r\n  'm',\r\n  ',',\r\n  '.',\r\n  '/',\r\n  '^',\r\n  'Shift',\r\n  'Ctrl',\r\n  'Win',\r\n  'Alt',\r\n  '',\r\n  'Alt',\r\n  'Ctrl',\r\n  '<',\r\n  '^',\r\n  ' >',\r\n];\r\n\r\nconst allKeys_en_Shift = [\r\n  '~',\r\n  '!',\r\n  '@',\r\n  '#',\r\n  '$',\r\n  '%',\r\n  '^',\r\n  '&',\r\n  '*',\r\n  '(',\r\n  ')',\r\n  '_',\r\n  '+',\r\n  'Backspace',\r\n  'Tab',\r\n  'Q',\r\n  'W',\r\n  'R',\r\n  'E',\r\n  'T',\r\n  'Y',\r\n  'U',\r\n  'I',\r\n  'O',\r\n  'P',\r\n  '{',\r\n  '}',\r\n  '|',\r\n  'Del',\r\n  'CapsLock',\r\n  'A',\r\n  'S',\r\n  'D',\r\n  'F',\r\n  'G',\r\n  'H',\r\n  'J',\r\n  'K',\r\n  'L',\r\n  ':',\r\n  '\"\"',\r\n  'Enter',\r\n  'Shift',\r\n  'Z',\r\n  'X',\r\n  'C',\r\n  'V',\r\n  'B',\r\n  'N',\r\n  'M',\r\n  '<',\r\n  '>',\r\n  '?',\r\n  '^',\r\n  'Shift',\r\n  'Ctrl',\r\n  'Win',\r\n  'Alt',\r\n  '',\r\n  'Alt',\r\n  'Ctrl',\r\n  '<',\r\n  '^',\r\n  ' >',\r\n];\r\n\r\nlet keyCode = [\r\n  'Backquote',\r\n  'Digit1',\r\n  'Digit2',\r\n  'Digit3',\r\n  'Digit4',\r\n  'Digit5',\r\n  'Digit6',\r\n  'Digit7',\r\n  'Digit8',\r\n  'Digit9',\r\n  'Digit0',\r\n  'Minus',\r\n  'Equal',\r\n  'Backspace',\r\n  'Tab',\r\n  'KeyQ',\r\n  'KeyW',\r\n  'KeyE',\r\n  'KeyR',\r\n  'KeyT',\r\n  'KeyY',\r\n  'KeyU',\r\n  'KeyI',\r\n  'KeyO',\r\n  'KeyP',\r\n  'BracketLeft',\r\n  'BracketRight',\r\n  'Backslash',\r\n  'Delete',\r\n  'CapsLock',\r\n  'KeyA',\r\n  'KeyS',\r\n  'KeyD',\r\n  'KeyF',\r\n  'KeyG',\r\n  'KeyH',\r\n  'KeyJ',\r\n  'KeyK',\r\n  'KeyL',\r\n  'Semicolon',\r\n  'Quote',\r\n  'Enter',\r\n  'ShiftLeft',\r\n  'KeyZ',\r\n  'KeyX',\r\n  'KeyC',\r\n  'KeyV',\r\n  'KeyB',\r\n  'KeyN',\r\n  'KeyM',\r\n  'Comma',\r\n  'Period',\r\n  'Slash',\r\n  'ArrowUp',\r\n  'ShiftRight',\r\n  'ControlLeft',\r\n  'MetaLeft',\r\n  'AltLeft',\r\n  'Space',\r\n  'AltRight',\r\n  'ControlRight',\r\n  'ArrowLeft',\r\n  'ArrowDown',\r\n  'ArrowRight',\r\n];\r\n\r\nmodule.exports = {\r\n  keyCode,\r\n  allKeys_en,\r\n  allKeys_en_Shift,\r\n};\r\n\n\n//# sourceURL=webpack://maks-1987-jsfe2022q1/./src/lang.js?");

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