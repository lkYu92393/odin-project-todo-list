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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectFactory = (name) => {\r\n    const todo = [];\r\n    const addTodo = (todoName) => {\r\n        todo.push(todoName);\r\n    }\r\n    const removeTodo = (todoName) => {\r\n        todo.splice(todo.indexOf(todo.find(obj => obj == todoName)), 1);\r\n    }\r\n    const removeTodoByIndex = (toindexdoName) => {\r\n        todo.splice(toindexdoName, 1);\r\n    }\r\n    return { name, todo, addTodo, removeTodo, removeTodoByIndex };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);\n\n//# sourceURL=webpack:///./src/factory/project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.js */ \"./src/toolbar.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    (0,_toolbar_js__WEBPACK_IMPORTED_MODULE_1__.initToolbarUI)();\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerElem = (() => {\r\n    return `<header>\r\n        <div class=\"container-md\">\r\n            <h1>Todo List</h1>\r\n            <div>Todo List is a project from odin project.</div>\r\n        </div>\r\n    </header>`\r\n})();\r\n\r\nconst projectElem = (() => {\r\n    return `<div class=\"toolbar\">\r\n        <div class=\"container-md\">\r\n            <button class=\"big\" id=\"btnAddProject\">Add Project</button>\r\n        </div>\r\n    </div>\r\n    <div id=\"overlay\" class=\"hidden\">\r\n        <div>\r\n            <h1>Create new project</h1>\r\n            <input id=\"project-name\">\r\n            <button class=\"big\" id=\"btnConfirm\">Confirm</button>\r\n            <button class=\"big\" id=\"btnCancel\">Cancel</button>\r\n        </div>\r\n    </div>\r\n    <div id=\"project-section\">\r\n        <div class=\"container-md\">\r\n        </div>\r\n    </div>`;\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    const app = document.getElementById(\"content\");\r\n    app.innerHTML = headerElem + projectElem;\r\n});\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/module/project.js":
/*!*******************************!*\
  !*** ./src/module/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectModule = () => {\r\n    let tempStorage = !!localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];\r\n    const projectsArray = tempStorage.length > 0 ? tempStorage : [];\r\n    tempStorage = [];\r\n\r\n    const addProj = (project) => {\r\n        projectsArray.push(project);\r\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\r\n    }\r\n    const removeProj = (projName) => {\r\n        projectsArray.splice(projectsArray.indexOf(projectsArray.find(proj => proj.name == projName)), 1)\r\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\r\n    }\r\n    return { projectsArray, addProj, removeProj };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModule);\n\n//# sourceURL=webpack:///./src/module/project.js?");

/***/ }),

/***/ "./src/toolbar.js":
/*!************************!*\
  !*** ./src/toolbar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initToolbarUI\": () => (/* binding */ initToolbarUI)\n/* harmony export */ });\n/* harmony import */ var _factory_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/project.js */ \"./src/factory/project.js\");\n/* harmony import */ var _module_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/project.js */ \"./src/module/project.js\");\n\r\n\r\n\r\nconst projects = (0,_module_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst showAddProjectWindow = () => {\r\n    document.getElementById(\"overlay\").classList.remove(\"hidden\");\r\n}\r\n\r\nconst hideAddProjectWindow = () => {\r\n    document.getElementById(\"overlay\").classList.add(\"hidden\");\r\n}\r\n\r\nconst addProject = () => {\r\n    const projectNameElem = document.getElementById(\"project-name\");\r\n    if (!!projectNameElem.value) {\r\n        projects.addProj((0,_factory_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectNameElem.value));\r\n        projectNameElem.value = \"\";\r\n\r\n        hideAddProjectWindow();\r\n        renderProjects();\r\n    } else {\r\n        alert(\"Project name can't be empty.\");\r\n    }\r\n}\r\n\r\nconst addTodoHandler = (ev) => {\r\n    let todo = prompt(\"Please enter the todo thing.\");\r\n    projects.projectsArray.find(project => project.name == ev.target.name).addTodo(todo);\r\n    renderProjects();\r\n};\r\n\r\nconst removeProjectHandler = (ev) => {\r\n    console.log(ev.target.name)\r\n    projects.removeProj(ev.target.name);\r\n    renderProjects();\r\n};\r\n\r\nconst renderProjects = () => {\r\n    const projectSectionElem = document.querySelector(\"div#project-section>div.container-md\");\r\n    const convertTodoToListElem = (name, todo) => {\r\n        if (todo.length == 0) {\r\n            return \"-\";\r\n        } else {\r\n            return todo.map((obj, index) => `<li>${obj}<button name=\"${name}\" value=\"${index}\">Remove</button></li>`).join(\"\");\r\n        }\r\n    }\r\n    projectSectionElem.innerHTML = (projects.projectsArray.map(project => {\r\n        return `<div>\r\n        <div><h4>${project.name}</h4></div>` +\r\n            \"<div>Todo List:<br/><ul></ul>\" +\r\n            convertTodoToListElem(project.name, project.todo)\r\n            + \"</ul></div>\"\r\n            + `<button class=\"big btnAdd\" name=\"${project.name}\">Add Todo</button>`\r\n            + `<button class=\"big btnRemove\" name=\"${project.name}\">Remove Project</button>`\r\n            + `</div>`\r\n    })).join(\"\");\r\n    Array.from(document.querySelectorAll(\"button.btnAdd\")).forEach(elem => {\r\n        elem.addEventListener(\"click\", addTodoHandler);\r\n    })\r\n    Array.from(document.querySelectorAll(\"button.btnRemove\")).forEach(elem => {\r\n        elem.addEventListener(\"click\", removeProjectHandler);\r\n    })\r\n    // projects.projectsArray.forEach(project => {\r\n    //     document.querySelectorAll(project.name).addEventListener(\"click\", (ev) => {\r\n    //         let todo = prompt(\"Please enter the todo thing.\");\r\n    //         projects.projectsArray.find(project => project.name == ev.target.name).addTodo(todo);\r\n    //         renderProjects();\r\n    //     })\r\n    // });\r\n    Array.from(document.querySelectorAll(\"li button\"))\r\n        .forEach(elem => elem.addEventListener(\"click\", (ev) => {\r\n            projects.projectsArray.find(project => project.name == ev.target.name).removeTodoByIndex(parseInt(ev.target.value));\r\n            renderProjects();\r\n        })\r\n        );\r\n}\r\n\r\nconst initToolbarUI = () => {\r\n    document.getElementById(\"btnAddProject\").addEventListener(\"click\", showAddProjectWindow);\r\n    document.getElementById(\"btnCancel\").addEventListener(\"click\", hideAddProjectWindow);\r\n    document.getElementById(\"btnConfirm\").addEventListener(\"click\", addProject);\r\n    renderProjects();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/toolbar.js?");

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