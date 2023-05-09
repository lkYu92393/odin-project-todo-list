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

/***/ "./src/factory/project.js":
/*!********************************!*\
  !*** ./src/factory/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectFactory = (name) => {\n    const todo = [];\n    const addTodo = (todoName) => {\n        todo.push(todoName);\n    }\n    const removeTodo = (todoName) => {\n        todo.splice(todo.indexOf(todo.find(obj => obj == todoName)), 1);\n    }\n    const removeTodoByIndex = (toindexdoName) => {\n        todo.splice(toindexdoName, 1);\n    }\n    return { name, todo, addTodo, removeTodo, removeTodoByIndex };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);\n\n//# sourceURL=webpack:///./src/factory/project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.js */ \"./src/toolbar.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    (0,_toolbar_js__WEBPACK_IMPORTED_MODULE_1__.initToolbarUI)();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerElem = (() => {\n    return `<header>\n        <div class=\"container-md\">\n            <h1>Todo List</h1>\n            <div>Todo List is a project from odin project.</div>\n        </div>\n    </header>`\n})();\n\nconst projectElem = (() => {\n    return `<div class=\"toolbar\">\n        <div class=\"container-md\">\n            <button class=\"big\" id=\"btnAddProject\">Add Project</button>\n        </div>\n    </div>\n    <div id=\"overlay\" class=\"hidden\">\n        <div>\n            <h1>Create new project</h1>\n            <input id=\"project-name\">\n            <button class=\"big\" id=\"btnConfirm\">Confirm</button>\n            <button class=\"big\" id=\"btnCancel\">Cancel</button>\n        </div>\n    </div>\n    <div id=\"project-section\">\n        <div class=\"container-md\">\n        </div>\n    </div>`;\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const app = document.getElementById(\"content\");\n    app.innerHTML = headerElem + projectElem;\n});\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/module/project.js":
/*!*******************************!*\
  !*** ./src/module/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectModule = () => {\n    let tempStorage = !!localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];\n    const projectsArray = tempStorage.length > 0 ? tempStorage : [];\n    tempStorage = [];\n\n    const addProj = (project) => {\n        projectsArray.push(project);\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\n    }\n    const removeProj = (projName) => {\n        projectsArray.splice(projectsArray.indexOf(projectsArray.find(proj => proj.name == projName)), 1)\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\n    }\n    return { projectsArray, addProj, removeProj };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModule);\n\n//# sourceURL=webpack:///./src/module/project.js?");

/***/ }),

/***/ "./src/toolbar.js":
/*!************************!*\
  !*** ./src/toolbar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initToolbarUI\": () => (/* binding */ initToolbarUI)\n/* harmony export */ });\n/* harmony import */ var _factory_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/project.js */ \"./src/factory/project.js\");\n/* harmony import */ var _module_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/project.js */ \"./src/module/project.js\");\n\n\n\nconst projects = (0,_module_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst showAddProjectWindow = () => {\n    document.getElementById(\"overlay\").classList.remove(\"hidden\");\n}\n\nconst hideAddProjectWindow = () => {\n    document.getElementById(\"overlay\").classList.add(\"hidden\");\n}\n\nconst addProject = () => {\n    const projectNameElem = document.getElementById(\"project-name\");\n    if (!!projectNameElem.value) {\n        projects.addProj((0,_factory_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectNameElem.value));\n        projectNameElem.value = \"\";\n\n        hideAddProjectWindow();\n        renderProjects();\n    } else {\n        alert(\"Project name can't be empty.\");\n    }\n}\n\nconst addTodoHandler = (ev) => {\n    let todo = prompt(\"Please enter the todo thing.\");\n    projects.projectsArray.find(project => project.name == ev.target.name).addTodo(todo);\n    renderProjects();\n};\n\nconst removeProjectHandler = (ev) => {\n    console.log(ev.target.name)\n    projects.removeProj(ev.target.name);\n    renderProjects();\n};\n\nconst renderProjects = () => {\n    const projectSectionElem = document.querySelector(\"div#project-section>div.container-md\");\n    const convertTodoToListElem = (name, todo) => {\n        if (todo.length == 0) {\n            return \"-\";\n        } else {\n            return todo.map((obj, index) => `<li>${obj}<button name=\"${name}\" value=\"${index}\">Remove</button></li>`).join(\"\");\n        }\n    }\n    projectSectionElem.innerHTML = (projects.projectsArray.map(project => {\n        return `<div>\n        <div><h4>${project.name}</h4></div>` +\n            \"<div>Todo List:<br/><ul></ul>\" +\n            convertTodoToListElem(project.name, project.todo)\n            + \"</ul></div>\"\n            + `<button class=\"big btnAdd\" name=\"${project.name}\">Add Todo</button>`\n            + `<button class=\"big btnRemove\" name=\"${project.name}\">Remove Project</button>`\n            + `</div>`\n    })).join(\"\");\n    Array.from(document.querySelectorAll(\"button.btnAdd\")).forEach(elem => {\n        elem.addEventListener(\"click\", addTodoHandler);\n    })\n    Array.from(document.querySelectorAll(\"button.btnRemove\")).forEach(elem => {\n        elem.addEventListener(\"click\", removeProjectHandler);\n    })\n    Array.from(document.querySelectorAll(\"li button\"))\n        .forEach(elem => elem.addEventListener(\"click\", (ev) => {\n            projects.projectsArray.find(project => project.name == ev.target.name).removeTodoByIndex(parseInt(ev.target.value));\n            renderProjects();\n        })\n        );\n}\n\nconst initToolbarUI = () => {\n    document.getElementById(\"btnAddProject\").addEventListener(\"click\", showAddProjectWindow);\n    document.getElementById(\"btnCancel\").addEventListener(\"click\", hideAddProjectWindow);\n    document.getElementById(\"btnConfirm\").addEventListener(\"click\", addProject);\n    renderProjects();\n}\n\n\n\n//# sourceURL=webpack:///./src/toolbar.js?");

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