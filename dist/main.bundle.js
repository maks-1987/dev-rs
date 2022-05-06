/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://maks-1987-jsfe2022q1/./src/assets/styles/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.scss */ \"./src/assets/styles/main.scss\");\n\r\n\r\n/* document.addEventListener('keypress', function whatKey(event) {\r\n  console.log(event);\r\n}); */\r\n\r\nlet allKeys = [\r\n  ['`', '~', 'ё', 'Ё'],\r\n  ['1', '!'],\r\n  ['2', '@'],\r\n  ['3', '#'],\r\n];\r\n\r\nlet allKeys_en = [\r\n  '`',\r\n  '1',\r\n  '2',\r\n  '3',\r\n  '4',\r\n  '5',\r\n  '6',\r\n  '7',\r\n  '8',\r\n  '9',\r\n  '0',\r\n  '-',\r\n  '=',\r\n  'Backspace',\r\n  'Tab',\r\n  ' q',\r\n  'w',\r\n  'e',\r\n  'r',\r\n  't',\r\n  'y',\r\n  'u',\r\n  'i',\r\n  'o',\r\n  'p',\r\n  '[',\r\n  ']',\r\n  '\\\\',\r\n  'Del',\r\n  'CapsLock',\r\n  'a',\r\n  's',\r\n  'd',\r\n  'f',\r\n  'g',\r\n  'h',\r\n  'j',\r\n  'k',\r\n  'l',\r\n  ';',\r\n  \"'\",\r\n  'Enter',\r\n  'Shift',\r\n  'z',\r\n  'x',\r\n  'c',\r\n  'v',\r\n  'b',\r\n  'n',\r\n  'm',\r\n  ',',\r\n  '.',\r\n  '/',\r\n  '^',\r\n  'Shift',\r\n  'Ctrl',\r\n  'Win',\r\n  'Alt',\r\n  '',\r\n  'Alt',\r\n  'Ctrl',\r\n  '<',\r\n  '^',\r\n  '>',\r\n];\r\n\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst title = document.createElement('h1');\r\ntitle.className = 'title';\r\ntitle.innerText = `Virtual keyboard RSschool`;\r\n\r\nconst textArea = document.createElement('textarea');\r\ntextArea.className = 'inputText';\r\n\r\nfunction appendEl(elem, wrapper) {\r\n  wrapper.appendChild(elem);\r\n}\r\n\r\nappendEl(title, wrapper);\r\nappendEl(textArea, wrapper);\r\n\r\n/* keyboard  */\r\nconst kb_wrapper = document.createElement('div');\r\nkb_wrapper.className = 'kb-wrapper';\r\nappendEl(kb_wrapper, wrapper);\r\n\r\n/* keys */\r\nfor (let i = 0; i < 64; i++) {\r\n  const kb_item = document.createElement('div');\r\n\r\n  if (i == 0) {\r\n    kb_item.className = 'kb-item tilda';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 13) {\r\n    kb_item.className = 'kb-item backspace';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 14) {\r\n    kb_item.className = 'kb-item tab';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 28) {\r\n    kb_item.className = 'kb-item delete';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 29) {\r\n    kb_item.className = 'kb-item capslock';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 41) {\r\n    kb_item.className = 'kb-item enter';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 42) {\r\n    kb_item.className = 'kb-item shiftLeft';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 53) {\r\n    kb_item.className = 'kb-item arrowUp';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 54) {\r\n    kb_item.className = 'kb-item shiftRight';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 55) {\r\n    kb_item.className = 'kb-item ctrlLeft';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 56) {\r\n    kb_item.className = 'kb-item win';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 57) {\r\n    kb_item.className = 'kb-item altLeft';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 58) {\r\n    kb_item.className = 'kb-item space';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 59) {\r\n    kb_item.className = 'kb-item altRight';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 60) {\r\n    kb_item.className = 'kb-item ctrlRight';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 61) {\r\n    kb_item.className = 'kb-item arrowLeft';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 62) {\r\n    kb_item.className = 'kb-item arrowBottom';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else if (i == 63) {\r\n    kb_item.className = 'kb-item arrowRight';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  } else {\r\n    kb_item.className = 'kb-item';\r\n    kb_item.innerText = `${allKeys_en[i]}`;\r\n  }\r\n\r\n  appendEl(kb_item, kb_wrapper);\r\n}\r\n\r\n// let kb_item = document.querySelectorAll('.kb-item');\r\n\r\n// kb_item.forEach((item) => {\r\n//   item.innerHTML = `<span class=\"en\">\r\n//   <span class=\"en__smal\"></span>\r\n//   <span class=\"en__big\"></span>\r\n//   <span class=\"en__caps\"></span>\r\n//   <span class=\"en__caps-shift\"></span>\r\n// </span>\r\n// <span class=\"ru\">\r\n//   <span class=\"ru__smal\"></span>\r\n//   <span class=\"ru__big\"></span>\r\n//   <span class=\"ru__caps\"></span>\r\n//   <span class=\"ru__caps-shift\"></span>\r\n// </span>`;\r\n// });\r\n\r\n// let ru_keysymbol = document.querySelectorAll('.en > span');\r\n// ru_keysymbol.forEach((item) => {\r\n//   let i;\r\n//   let j;\r\n//   for (i = 0; i < ru_keysymbol.length; i++) {\r\n//     item.textContent = `${allKeys[i]}`;\r\n//   }\r\n// });\r\n\r\n// let en_keysymbol = document.querySelector('.en');\r\n\n\n//# sourceURL=webpack://maks-1987-jsfe2022q1/./src/index.js?");

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