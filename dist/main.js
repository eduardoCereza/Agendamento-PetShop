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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css"
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ====== RESET / BASE ====== */\r\n* { box-sizing: border-box; }\r\nhtml, body { height: 100%; }\r\nbody {\r\n  margin: 0;\r\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;\r\n  color: #e9e9f2;\r\n  background: radial-gradient(60% 80% at 50% 15%, rgba(141, 108, 255, .14) 0%, rgba(0,0,0,0) 55%),\r\n              radial-gradient(80% 120% at 10% 10%, rgba(88, 209, 255, .10) 0%, rgba(0,0,0,0) 55%),\r\n              #0b0c12;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* motion safe */\r\n@media (prefers-reduced-motion: reduce) {\r\n  * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }\r\n}\r\n\r\n/* ====== APP LAYOUT ====== */\r\n.app {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 280px 1fr;\r\n}\r\n\r\n/* ====== SIDEBAR ====== */\r\n.sidebar {\r\n  padding: 24px 18px;\r\n  background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0));\r\n  border-right: 1px solid rgba(255,255,255,.06);\r\n}\r\n\r\n.sidebar__label {\r\n  margin: 0 0 10px 6px;\r\n  font-size: 14px;\r\n  color: rgba(233,233,242,.65);\r\n  letter-spacing: .2px;\r\n}\r\n\r\n.brand{\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 14px 14px;\r\n  border-radius: 14px;\r\n  border: 1px solid rgba(141,108,255,.35);\r\n  background: rgba(30, 27, 45, .55);\r\n  color: #cfc9ff;\r\n  cursor: pointer;\r\n  transition: transform .18s ease, border-color .18s ease, background .18s ease;\r\n  animation: popIn .45s ease both;\r\n}\r\n.brand:hover{\r\n  transform: translateY(-2px);\r\n  border-color: rgba(141,108,255,.55);\r\n  background: rgba(30, 27, 45, .72);\r\n}\r\n.brand__icon { font-size: 18px; }\r\n.brand__text { display: grid; line-height: 1.05; text-align: left; }\r\n.brand__text strong { font-size: 13px; letter-spacing: .3px; }\r\n.brand__text small { margin-top: 2px; font-size: 11px; opacity: .75; }\r\n\r\n/* ====== MAIN ====== */\r\n.main {\r\n  padding: 34px 34px 120px;\r\n  position: relative;\r\n}\r\n\r\n.header{\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 18px;\r\n  margin-bottom: 18px;\r\n  animation: fadeUp .55s ease both;\r\n}\r\n.header__title h1{\r\n  margin: 0;\r\n  font-size: 26px;\r\n  letter-spacing: .2px;\r\n}\r\n.header__title p{\r\n  margin: 8px 0 0;\r\n  color: rgba(233,233,242,.72);\r\n  font-size: 13px;\r\n}\r\n\r\n/* Date select (igual ao print) */\r\n.select{\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  height: 40px;\r\n  padding: 0 12px;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255,255,255,.10);\r\n  background: rgba(20, 20, 28, .55);\r\n  backdrop-filter: blur(10px);\r\n  box-shadow: 0 14px 40px rgba(0,0,0,.35);\r\n  transition: transform .18s ease, border-color .18s ease, background .18s ease;\r\n}\r\n.select:hover{\r\n  transform: translateY(-1px);\r\n  border-color: rgba(141,108,255,.45);\r\n  background: rgba(20, 20, 28, .65);\r\n}\r\n.select__icon svg{\r\n  width: 16px; height: 16px;\r\n  color: rgba(200, 190, 255, .9);\r\n}\r\n.select select{\r\n  appearance: none;\r\n  border: 0;\r\n  outline: none;\r\n  background: transparent;\r\n  color: rgba(233,233,242,.9);\r\n  font-size: 13px;\r\n  padding-right: 8px;\r\n  cursor: pointer;\r\n}\r\n.select__chev svg{ width: 16px; height: 16px; opacity: .7; }\r\n\r\n/* ====== BOARD ====== */\r\n.board{\r\n  max-width: 760px;\r\n  margin: 18px auto 0;\r\n  display: grid;\r\n  gap: 16px;\r\n  animation: fadeUp .65s ease both;\r\n  animation-delay: .06s;\r\n}\r\n\r\n.block{\r\n  border-radius: 14px;\r\n  border: 1px solid rgba(255,255,255,.06);\r\n  background: rgba(15, 15, 22, .56);\r\n  backdrop-filter: blur(12px);\r\n  box-shadow: 0 26px 60px rgba(0,0,0,.42);\r\n  overflow: hidden;\r\n  transform-origin: 50% 0%;\r\n  transition: transform .18s ease, border-color .18s ease;\r\n}\r\n.block:hover{\r\n  transform: translateY(-2px);\r\n  border-color: rgba(141,108,255,.25);\r\n}\r\n\r\n.block__head{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 14px 16px;\r\n  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,0));\r\n}\r\n.block__left{\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n.block__head h2{\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n.block__range{\r\n  font-size: 12px;\r\n  color: rgba(233,233,242,.62);\r\n}\r\n\r\n.dot{\r\n  width: 10px; height: 10px;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 0 4px rgba(255,255,255,.03);\r\n}\r\n.dot--blue   { background: #4aa6ff; }\r\n.dot--amber  { background: #ffb74a; }\r\n.dot--yellow { background: #ffd34a; }\r\n\r\n.block__list{\r\n  padding: 6px 10px 10px;\r\n}\r\n\r\n.row{\r\n  display: grid;\r\n  grid-template-columns: 86px 1fr 220px 190px;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 14px 10px;\r\n  border-radius: 12px;\r\n  transition: background .18s ease;\r\n}\r\n.row + .row{ border-top: 1px solid rgba(255,255,255,.05); border-radius: 0; }\r\n.row:hover{ background: rgba(255,255,255,.03); }\r\n\r\n.row__time{\r\n  font-weight: 700;\r\n  color: rgba(233,233,242,.9);\r\n  font-size: 12px;\r\n}\r\n.row__pet{\r\n  font-size: 12px;\r\n  color: rgba(233,233,242,.92);\r\n}\r\n.row__pet span{ color: rgba(233,233,242,.55); font-weight: 500; }\r\n.row__service{\r\n  font-size: 12px;\r\n  color: rgba(233,233,242,.62);\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.row__remove{\r\n  justify-self: end;\r\n  border: 0;\r\n  background: transparent;\r\n  color: rgba(233,233,242,.32);\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  padding: 8px 10px;\r\n  border-radius: 10px;\r\n  transition: color .18s ease, background .18s ease;\r\n}\r\n.row__remove:hover{\r\n  color: rgba(233,233,242,.85);\r\n  background: rgba(255,255,255,.05);\r\n}\r\n\r\n/* ====== FAB ====== */\r\n.fab{\r\n  position: fixed;\r\n  right: 36px;\r\n  bottom: 28px;\r\n  padding: 14px 22px;\r\n  border: 0;\r\n  border-radius: 12px;\r\n  font-weight: 800;\r\n  letter-spacing: .2px;\r\n  background: #8d6cff;\r\n  color: #0b0c12;\r\n  cursor: pointer;\r\n  box-shadow: 0 22px 60px rgba(141,108,255,.35);\r\n  transition: transform .18s ease, filter .18s ease;\r\n  animation: floatIn .55s ease both;\r\n}\r\n.fab:hover{ transform: translateY(-2px); filter: brightness(1.05); }\r\n.fab:active{ transform: translateY(0px) scale(.98); }\r\n\r\n/* ====== MODAL ====== */\r\n.modal-overlay{\r\n  position: fixed;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 18px;\r\n  background: rgba(0,0,0,.42);\r\n  backdrop-filter: blur(10px);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: opacity .22s ease;\r\n}\r\n\r\n/* JS: adicione/remova esta classe */\r\n.modal-overlay.is-open{\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.modal{\r\n  width: min(520px, 92vw);\r\n  border-radius: 18px;\r\n  border: 1px solid rgba(255,255,255,.08);\r\n  background: rgba(18, 18, 26, .86);\r\n  box-shadow: 0 40px 120px rgba(0,0,0,.60);\r\n  padding: 22px 22px 18px;\r\n  position: relative;\r\n  transform: translateY(14px) scale(.98);\r\n  opacity: 0;\r\n  transition: transform .22s ease, opacity .22s ease;\r\n}\r\n\r\n/* entra com animação quando abrir */\r\n.modal-overlay.is-open .modal{\r\n  transform: translateY(0) scale(1);\r\n  opacity: 1;\r\n  animation: modalIn .34s ease both;\r\n}\r\n\r\n.modal__close{\r\n  position: absolute;\r\n  top: 12px;\r\n  right: 12px;\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255,255,255,.08);\r\n  background: rgba(255,255,255,.04);\r\n  color: rgba(233,233,242,.8);\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  line-height: 0;\r\n  transition: transform .18s ease, background .18s ease, border-color .18s ease;\r\n}\r\n.modal__close:hover{\r\n  transform: translateY(-1px);\r\n  background: rgba(255,255,255,.06);\r\n  border-color: rgba(141,108,255,.35);\r\n}\r\n\r\n.modal__head h3{\r\n  margin: 0;\r\n  font-size: 22px;\r\n}\r\n.modal__head p{\r\n  margin: 8px 0 0;\r\n  font-size: 13px;\r\n  color: rgba(233,233,242,.65);\r\n}\r\n\r\n.form{ margin-top: 18px; display: grid; gap: 12px; }\r\n\r\n.field{ display: grid; gap: 8px; }\r\n.field__label{\r\n  font-size: 12px;\r\n  color: rgba(233,233,242,.70);\r\n}\r\n\r\n.input{\r\n  display: grid;\r\n  grid-template-columns: 38px 1fr 28px;\r\n  align-items: center;\r\n  height: 44px;\r\n  padding: 0 10px 0 8px;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255,255,255,.10);\r\n  background: rgba(255,255,255,.03);\r\n  transition: border-color .18s ease, background .18s ease, transform .18s ease;\r\n}\r\n.input:focus-within{\r\n  border-color: rgba(141,108,255,.55);\r\n  background: rgba(141,108,255,.06);\r\n  transform: translateY(-1px);\r\n}\r\n.input__icon{\r\n  width: 28px; height: 28px;\r\n  display: grid; place-items: center;\r\n  color: rgba(141,108,255,.95);\r\n}\r\n.input__icon svg{ width: 18px; height: 18px; }\r\n.input input, .input select{\r\n  width: 100%;\r\n  border: 0;\r\n  outline: none;\r\n  background: transparent;\r\n  color: rgba(233,233,242,.92);\r\n  font-size: 13px;\r\n}\r\n.input select{ appearance: none; cursor: pointer; }\r\n.input__chev{\r\n  display: grid;\r\n  place-items: center;\r\n  opacity: .7;\r\n  color: rgba(233,233,242,.9);\r\n}\r\n.input__chev svg{ width: 16px; height: 16px; }\r\n\r\n/* textarea */\r\n.textarea{\r\n  width: 100%;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255,255,255,.10);\r\n  background: rgba(255,255,255,.03);\r\n  color: rgba(233,233,242,.92);\r\n  padding: 12px 12px;\r\n  font-size: 13px;\r\n  resize: none;\r\n  outline: none;\r\n  transition: border-color .18s ease, background .18s ease, transform .18s ease;\r\n}\r\n.textarea:focus{\r\n  border-color: rgba(141,108,255,.55);\r\n  background: rgba(141,108,255,.06);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.grid{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 12px;\r\n}\r\n\r\n.btn{\r\n  margin-top: 4px;\r\n  height: 44px;\r\n  border: 0;\r\n  border-radius: 12px;\r\n  background: #8d6cff;\r\n  color: #0b0c12;\r\n  font-weight: 900;\r\n  letter-spacing: .2px;\r\n  cursor: pointer;\r\n  box-shadow: 0 22px 60px rgba(141,108,255,.28);\r\n  transition: transform .18s ease, filter .18s ease;\r\n}\r\n.btn:hover{ transform: translateY(-2px); filter: brightness(1.05); }\r\n.btn:active{ transform: translateY(0px) scale(.98); }\r\n\r\n/* ====== RESPONSIVE ====== */\r\n@media (max-width: 980px){\r\n  .app{ grid-template-columns: 88px 1fr; }\r\n  .sidebar{ padding: 18px 12px; }\r\n  .sidebar__label{ display: none; }\r\n  .brand{ justify-content: center; padding: 12px; }\r\n  .brand__text{ display: none; }\r\n  .main{ padding: 26px 18px 120px; }\r\n  .board{ max-width: 820px; }\r\n  .row{ grid-template-columns: 72px 1fr 170px 170px; }\r\n}\r\n\r\n@media (max-width: 720px){\r\n  .header{ flex-direction: column; align-items: stretch; }\r\n  .header__actions{ display: flex; justify-content: flex-end; }\r\n\r\n  .board{ margin-top: 10px; }\r\n  .row{\r\n    grid-template-columns: 72px 1fr;\r\n    grid-template-areas:\r\n      \"time pet\"\r\n      \"time service\"\r\n      \"time remove\";\r\n    row-gap: 6px;\r\n  }\r\n  .row__time{ grid-area: time; }\r\n  .row__main{ grid-area: pet; }\r\n  .row__service{ grid-area: service; }\r\n  .row__remove{ grid-area: remove; justify-self: start; padding-left: 0; }\r\n\r\n  .fab{ right: 16px; bottom: 16px; }\r\n  .grid{ grid-template-columns: 1fr; }\r\n}\r\n\r\n/* ====== ANIMAÇÕES ====== */\r\n@keyframes fadeUp{\r\n  from{ opacity: 0; transform: translateY(10px); }\r\n  to{ opacity: 1; transform: translateY(0); }\r\n}\r\n@keyframes popIn{\r\n  from{ opacity: 0; transform: translateY(6px) scale(.98); }\r\n  to{ opacity: 1; transform: translateY(0) scale(1); }\r\n}\r\n@keyframes floatIn{\r\n  from{ opacity: 0; transform: translateY(10px); }\r\n  to{ opacity: 1; transform: translateY(0); }\r\n}\r\n@keyframes modalIn{\r\n  from{ filter: blur(2px); }\r\n  to{ filter: blur(0); }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n\n\n//IMPORT CSS\n\n\n//# sourceURL=webpack:///./src/main.js?\n}");

/***/ },

/***/ "./src/styles/styles.css"
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles/styles.css?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;