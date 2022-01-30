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

/***/ "./src/js/addProductForm.js":
/*!**********************************!*\
  !*** ./src/js/addProductForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.js */ \"./src/js/alert.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/js/helpers.js\");\n\n\nconst form = document.forms.addProduct;\nconst submitButton = form.querySelector('button[type=\"submit\"]');\nconst priceInput = document.getElementById('price');\nconst titleInput = document.getElementById('title');\nconst imageUrlInput = document.getElementById('imageUrl');\n\nfunction validateForm() {\n  let isValid = true;\n  const fields = [priceInput, titleInput, imageUrlInput];\n  fields.forEach(field => {\n    if (!field.validity.valid) {\n      isValid = false;\n    }\n  });\n  return isValid;\n}\n\nfunction validateInput(inputElement, errorElement) {\n  if (!inputElement.validity.valid) {\n    if (inputElement.type === 'url' && inputElement.value) {\n      errorElement.innerHTML = 'Неверный URL-адрес';\n    } else {\n      errorElement.innerHTML = 'Поле является обязательным';\n    }\n\n    inputElement.style.border = '1px solid #ff8484';\n  } else {\n    errorElement.innerHTML = '';\n    inputElement.style.border = '1px solid #fff';\n  }\n\n  if (validateForm()) {\n    submitButton.disabled = false;\n  } else {\n    submitButton.disabled = true;\n  }\n}\n\nform.addEventListener('submit', e => {\n  e.preventDefault();\n  const {\n    title,\n    description,\n    price,\n    imageUrl\n  } = e.target.elements;\n  const product = {\n    id: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.generateProductId)(),\n    title: title.value,\n    description: description.value,\n    imageUrl: imageUrl.value,\n    price: Number(price.value.replaceAll(/\\s/g, ''))\n  };\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.addProduct)(product);\n  form.reset();\n  submitButton.disabled = true;\n  (0,_alert_js__WEBPACK_IMPORTED_MODULE_0__.createAlert)('Товар успешно добавлен!');\n});\nform.addEventListener('input', e => {\n  const inputElement = e.target;\n  const errorElement = document.querySelector(`#${e.target.id} + .field__error-message`);\n\n  if (errorElement) {\n    validateInput(inputElement, errorElement);\n  }\n});\npriceInput.addEventListener('input', e => {\n  const value = +e.target.value.replaceAll(/[^0-9]/g, '') || '';\n  e.target.value = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.transformPrice)(value);\n});\n\n//# sourceURL=webpack://test-idaproject/./src/js/addProductForm.js?");

/***/ }),

/***/ "./src/js/alert.js":
/*!*************************!*\
  !*** ./src/js/alert.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAlert\": () => (/* binding */ createAlert),\n/* harmony export */   \"deleteAlert\": () => (/* binding */ deleteAlert)\n/* harmony export */ });\nfunction createAlert(message) {\n  const app = document.getElementById('app');\n  const alert = document.createElement('div');\n  alert.classList.add('alert');\n  const alertMessage = document.createElement('span');\n  alertMessage.innerHTML = message;\n  alert.appendChild(alertMessage);\n  setTimeout(() => {\n    deleteAlert(alert);\n  }, 1000);\n  app.appendChild(alert);\n  return alert;\n}\nfunction deleteAlert(alert) {\n  alert.classList.add('alert__close');\n  setTimeout(() => {\n    alert.remove();\n  }, 3000);\n}\n\n//# sourceURL=webpack://test-idaproject/./src/js/alert.js?");

/***/ }),

/***/ "./src/js/createProduct.js":
/*!*********************************!*\
  !*** ./src/js/createProduct.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProduct\": () => (/* binding */ createProduct)\n/* harmony export */ });\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/delete.svg */ \"./src/assets/delete.svg\");\n/* harmony import */ var _deleteProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteProduct */ \"./src/js/deleteProduct.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n\n\n\nfunction createProduct(product) {\n  const {\n    id,\n    title,\n    description,\n    price,\n    imageUrl\n  } = product;\n  const productCard = document.createElement('li');\n  productCard.classList.add('product');\n  const productInner = document.createElement('div');\n  productInner.classList.add('product__inner');\n  const productImage = document.createElement('img');\n  productImage.src = imageUrl;\n  productImage.classList.add('product__image');\n  const productTitle = document.createElement('h3');\n  productTitle.classList.add('product__title');\n  productTitle.innerHTML = title;\n  const productDescription = document.createElement('p');\n  productDescription.classList.add('product__description');\n  productDescription.innerHTML = description;\n  productDescription.title = description;\n  const productPrice = document.createElement('b');\n  productPrice.classList.add('product__price');\n  productPrice.innerHTML = `${(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.transformPrice)(price)} руб.`;\n  const deleteButton = document.createElement('button');\n  deleteButton.innerHTML = `<img src=\"${_assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\"/>`;\n  deleteButton.classList.add('product__deleteButton');\n  deleteButton.addEventListener('click', _deleteProduct__WEBPACK_IMPORTED_MODULE_1__.deleteProductListener.bind(null, productCard, id));\n  productInner.append(productTitle, productDescription, productPrice);\n  productCard.append(deleteButton, productImage, productInner);\n  return productCard;\n}\n\n//# sourceURL=webpack://test-idaproject/./src/js/createProduct.js?");

/***/ }),

/***/ "./src/js/deleteProduct.js":
/*!*********************************!*\
  !*** ./src/js/deleteProduct.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteProductListener\": () => (/* binding */ deleteProductListener)\n/* harmony export */ });\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ \"./src/js/alert.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n\n\nfunction deleteProductListener(productCard, id) {\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.animateProduct)(productCard, 'reverse');\n  setTimeout(() => {\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.deleteProduct)(id);\n    productCard.remove();\n    (0,_alert__WEBPACK_IMPORTED_MODULE_0__.createAlert)('Товар успешно удален!');\n  }, 490);\n}\n\n//# sourceURL=webpack://test-idaproject/./src/js/deleteProduct.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transformPrice\": () => (/* binding */ transformPrice),\n/* harmony export */   \"updateLocalStorage\": () => (/* binding */ updateLocalStorage),\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts),\n/* harmony export */   \"addProduct\": () => (/* binding */ addProduct),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"generateProductId\": () => (/* binding */ generateProductId),\n/* harmony export */   \"renderProducts\": () => (/* binding */ renderProducts),\n/* harmony export */   \"animateProduct\": () => (/* binding */ animateProduct)\n/* harmony export */ });\n/* harmony import */ var _createProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProduct */ \"./src/js/createProduct.js\");\n/* harmony import */ var _initialProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialProducts */ \"./src/js/initialProducts.js\");\n\n\nfunction transformPrice(price) {\n  return price.toLocaleString().replaceAll(',', ' ');\n}\nfunction updateLocalStorage(products) {\n  localStorage.setItem('products', JSON.stringify(products));\n}\nfunction getProducts() {\n  return JSON.parse(localStorage.getItem('products')) || _initialProducts__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n}\nfunction addProduct(product) {\n  const productsList = document.querySelector('.products');\n  const productElement = (0,_createProduct__WEBPACK_IMPORTED_MODULE_0__.createProduct)(product);\n  productsList.prepend(productElement);\n  animateProduct(productElement);\n  updateLocalStorage([product, ...getProducts()]);\n}\nfunction deleteProduct(id) {\n  const products = getProducts().filter(product => product.id !== id);\n  updateLocalStorage(products);\n}\nfunction generateProductId() {\n  return (getProducts()[0]?.id || 0) + 1;\n}\nfunction renderProducts() {\n  const products = getProducts();\n  const productsList = document.querySelector('.products');\n  productsList.innerHTML = '';\n  products.forEach(product => {\n    productsList.appendChild((0,_createProduct__WEBPACK_IMPORTED_MODULE_0__.createProduct)(product));\n  });\n}\nfunction animateProduct(product, direction = 'normal') {\n  product.animate([{\n    width: '0%',\n    opacity: 0,\n    transform: 'scale(0.65)'\n  }, {\n    width: '100%',\n    opacity: 1,\n    transform: 'scale(1)'\n  }], {\n    duration: 500,\n    iterations: 1,\n    easing: 'ease',\n    direction\n  });\n}\n\n//# sourceURL=webpack://test-idaproject/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/initialProducts.js":
/*!***********************************!*\
  !*** ./src/js/initialProducts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 1,\n  title: 'Фитнес-браслет Xiaomi',\n  description: 'Лаконичный дизайн, высокий уровень качества, многофункциональность - основные параметры фитнес-трекера XIAOMI Mi Band 5.',\n  price: 2433,\n  imageUrl: 'https://mi-shop.com/upload/resize_cache/iblock/903/445_473_2/9039d0aabaae940f460dce54c500a95a.jpg'\n}, {\n  id: 2,\n  title: 'Apple iPhone 13 Pro 128 ГБ',\n  description: 'Экран с частотой обновления 120 Гц. Продвинутая тройная камера. Защита по стандарту IP68.',\n  price: 99999,\n  imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000'\n}, {\n  id: 3,\n  title: 'Пылесос Dyson Cyclone V10 Absolute',\n  description: 'Девайс будет вашим лучшим помощником в ежедневном и тщательном уходе за помещением.',\n  price: 42990,\n  imageUrl: 'https://shop.dyson.ru/storage/product/view/image_606f35965b03e6.50542409_mpic.jpg'\n}]);\n\n//# sourceURL=webpack://test-idaproject/./src/js/initialProducts.js?");

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b15b3d7db34508dedbbcc80d0382f48c.svg\");\n\n//# sourceURL=webpack://test-idaproject/./src/assets/delete.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/addProductForm.js");
/******/ 	
/******/ })()
;