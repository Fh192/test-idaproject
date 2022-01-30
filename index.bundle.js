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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ \"./src/js/sort.js\");\n\n\n\n\n(function init() {\n  (0,_sort__WEBPACK_IMPORTED_MODULE_2__.sortProducts)('default');\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.renderProducts)();\n})();\n\n//# sourceURL=webpack://test-idaproject/./src/js/index.js?");

/***/ }),

/***/ "./src/js/initialProducts.js":
/*!***********************************!*\
  !*** ./src/js/initialProducts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 1,\n  title: 'Фитнес-браслет Xiaomi',\n  description: 'Лаконичный дизайн, высокий уровень качества, многофункциональность - основные параметры фитнес-трекера XIAOMI Mi Band 5.',\n  price: 2433,\n  imageUrl: 'https://mi-shop.com/upload/resize_cache/iblock/903/445_473_2/9039d0aabaae940f460dce54c500a95a.jpg'\n}, {\n  id: 2,\n  title: 'Apple iPhone 13 Pro 128 ГБ',\n  description: 'Экран с частотой обновления 120 Гц. Продвинутая тройная камера. Защита по стандарту IP68.',\n  price: 99999,\n  imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000'\n}, {\n  id: 3,\n  title: 'Пылесос Dyson Cyclone V10 Absolute',\n  description: 'Девайс будет вашим лучшим помощником в ежедневном и тщательном уходе за помещением.',\n  price: 42990,\n  imageUrl: 'https://shop.dyson.ru/storage/product/view/image_606f35965b03e6.50542409_mpic.jpg'\n}]);\n\n//# sourceURL=webpack://test-idaproject/./src/js/initialProducts.js?");

/***/ }),

/***/ "./src/js/sort.js":
/*!************************!*\
  !*** ./src/js/sort.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortProducts\": () => (/* binding */ sortProducts)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n\nconst select = document.getElementById('sortProducts');\nfunction sortProducts(sortBy) {\n  let products = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getProducts)();\n\n  if (sortBy === 'default') {\n    products.sort((a, b) => b.id - a.id);\n  } else if (sortBy === 'minToMax') {\n    products.sort((a, b) => a.price - b.price);\n  } else if (sortBy === 'maxToMin') {\n    products.sort((a, b) => b.price - a.price);\n  }\n\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(products);\n}\nselect.addEventListener('change', e => {\n  sortProducts(e.target.value);\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.renderProducts)();\n});\n\n//# sourceURL=webpack://test-idaproject/./src/js/sort.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro:wght@400;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n}\\n\\ninput,\\nbutton {\\n  outline: none;\\n  background-color: transparent;\\n  border: none;\\n  font-family: inherit;\\n  font-size: inherit;\\n  color: inherit;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\ninput:-internal-autofill-selected {\\n  border-width: 0px;\\n  border: none;\\n  outline: none !important;\\n  border-top-style: hidden;\\n  border-right-style: hidden;\\n  border-left-style: hidden;\\n}\\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\\n  -webkit-appearance: none;\\n}\\n\\ntextarea,\\nfieldset {\\n  border: none;\\n  outline: none;\\n  resize: none;\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\nbutton,\\ntextarea,\\ninput,\\nselect,\\na {\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n  -webkit-tap-highlight-color: transparent;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\nfieldset {\\n  margin-inline: 0;\\n  padding-block: 0;\\n  padding-inline: 0;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nselect {\\n  -webkit-appearance: none;\\n  appearance: none;\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  font-family: inherit;\\n  font-size: inherit;\\n  line-height: inherit;\\n  outline: none;\\n}\\n\\n.addProduct {\\n  position: sticky;\\n  top: 25px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n  max-width: 332px;\\n  width: 100%;\\n  height: 440px;\\n}\\n.addProduct__form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 25px;\\n  padding: 25px;\\n  background: #fffefb;\\n  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\\n  border-radius: 4px;\\n}\\n.addProduct__fieldset {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n.addProduct__submitButton {\\n  width: 100%;\\n  border-radius: 10px;\\n  font-family: \\\"Inter\\\", sans-serif;\\n  font-weight: 600;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-align: center;\\n  letter-spacing: -0.02em;\\n  color: #ffffff;\\n  background: #7bae73;\\n  padding: 10px;\\n}\\n.addProduct__submitButton:disabled {\\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n  color: #b4b4b4;\\n  background: #eeeeee;\\n  cursor: default;\\n}\\n@media screen and (max-width: 550px) {\\n  .addProduct {\\n    position: static;\\n  }\\n}\\n\\n.field {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n.field__label {\\n  font-size: 10px;\\n  line-height: 13px;\\n  letter-spacing: -0.02em;\\n  color: #49485e;\\n}\\n.field__label_required {\\n  position: relative;\\n}\\n.field__label_required::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 4px;\\n  height: 4px;\\n  background: #ff8484;\\n  border-radius: 4px;\\n}\\n.field__input {\\n  max-width: 284px;\\n  width: 100%;\\n  height: 35px;\\n  padding: 10px 15px;\\n  background: #fffefb;\\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\\n  border: 1px solid #fff;\\n  border-radius: 4px;\\n  font-size: 12px;\\n  line-height: 15px;\\n}\\n.field__input::placeholder {\\n  color: #b4b4b4;\\n}\\n.field__textarea {\\n  height: 108px;\\n}\\n.field__error-message {\\n  position: absolute;\\n  bottom: -14px;\\n  font-size: 8px;\\n  line-height: 10px;\\n  letter-spacing: -0.02em;\\n  color: #ff8484;\\n}\\n\\n.product {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n  max-width: 332px;\\n  width: 100%;\\n  height: 423px;\\n  background: #fffefb;\\n  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\\n  border-radius: 4px;\\n  transition: all 0.3s ease;\\n}\\n.product__deleteButton {\\n  position: absolute;\\n  top: -10px;\\n  right: -10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 32px;\\n  height: 32px;\\n  background: #ff8484;\\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n  border-radius: 10px;\\n  opacity: 0;\\n  transition: opacity 0.3s ease;\\n  cursor: pointer;\\n}\\n.product__image {\\n  width: 100%;\\n  min-height: 200px;\\n  height: 200px;\\n  border-radius: 4px 4px 0 0;\\n  object-fit: contain;\\n}\\n.product__inner {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n  padding: 0 15px 10px;\\n  height: 100%;\\n}\\n.product__title {\\n  font-weight: 600;\\n  font-size: 20px;\\n  line-height: 25px;\\n  display: -webkit-box;\\n  -webkit-line-clamp: 3;\\n  -webkit-box-orient: vertical;\\n  overflow: hidden;\\n}\\n.product__description {\\n  font-size: 16px;\\n  line-height: 20px;\\n  display: -webkit-box;\\n  -webkit-line-clamp: 4;\\n  -webkit-box-orient: vertical;\\n  overflow: hidden;\\n}\\n.product__price {\\n  margin-top: auto;\\n  font-weight: 600;\\n  font-size: 24px;\\n  line-height: 30px;\\n}\\n.product:hover {\\n  transform: scale(1.03);\\n}\\n.product:hover .product__deleteButton {\\n  opacity: 1;\\n}\\n\\n.sort__select {\\n  font-size: 12px;\\n  line-height: 15px;\\n  color: #b4b4b4;\\n  width: 125px;\\n  height: 36px;\\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\\n  border-radius: 4px;\\n  padding: 0 15px;\\n  background: #fffefb;\\n}\\n\\n.alert {\\n  position: fixed;\\n  top: 20px;\\n  right: 20px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 40px;\\n  padding: 0 15px;\\n  background: #7bae73;\\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\\n  border-radius: 10px;\\n  animation: show 0.5s ease 0s 1 forwards alternate;\\n}\\n.alert span {\\n  font-weight: 600;\\n  font-size: 14px;\\n  line-height: 15px;\\n  color: #fff;\\n}\\n.alert__close {\\n  animation: close 0.5s ease 1s 1 forwards alternate;\\n}\\n@keyframes show {\\n  0% {\\n    opacity: 0;\\n    top: -50px;\\n  }\\n  100% {\\n    opacity: 1;\\n    top: 20px;\\n  }\\n}\\n@keyframes close {\\n  0% {\\n    opacity: 1;\\n    top: 20px;\\n  }\\n  100% {\\n    opacity: 0;\\n    top: -50px;\\n  }\\n}\\n\\nbody {\\n  background: #e5e5e5;\\n  font-family: \\\"Source Sans Pro\\\", sans-serif;\\n  color: #3f3f3f;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  max-width: 1376px;\\n  min-height: 100vh;\\n  width: 100%;\\n  height: 100%;\\n  padding: 30px 0;\\n  margin: auto;\\n}\\n@media screen and (max-width: 1371px) {\\n  .container {\\n    padding: 30px 10px;\\n  }\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 10px;\\n}\\n.header__title {\\n  font-weight: 600;\\n  font-size: 28px;\\n  line-height: 35px;\\n}\\n@media screen and (max-width: 550px) {\\n  .header {\\n    flex-direction: column-reverse;\\n  }\\n}\\n\\n.main {\\n  display: flex;\\n  gap: 15px;\\n}\\n@media screen and (max-width: 550px) {\\n  .main {\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n}\\n\\n.products {\\n  width: 100%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 16px;\\n}\\n@media screen and (max-width: 550px) {\\n  .products {\\n    justify-content: center;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test-idaproject/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://test-idaproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://test-idaproject/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b15b3d7db34508dedbbcc80d0382f48c.svg\");\n\n//# sourceURL=webpack://test-idaproject/./src/assets/delete.svg?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://test-idaproject/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test-idaproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://test-idaproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://test-idaproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://test-idaproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://test-idaproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://test-idaproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;