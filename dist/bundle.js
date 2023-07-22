/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Todo-object.js":
/*!************************************!*\
  !*** ./src/modules/Todo-object.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Todo = /*#__PURE__*/_createClass(function Todo(description, index) {
  _classCallCheck(this, Todo);
  this.description = description;
  this.completed = false;
  this.index = index + 1;
});


/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadData: () => (/* binding */ loadData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
var saveData = function saveData(todoList) {
  localStorage.setItem('To-Do-List', JSON.stringify(todoList));
};
var loadData = function loadData() {
  return JSON.parse(localStorage.getItem('To-Do-List')) || [];
};


/***/ }),

/***/ "./src/modules/todoCRUD.js":
/*!*********************************!*\
  !*** ./src/modules/todoCRUD.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todo_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo-object.js */ "./src/modules/Todo-object.js");
/* harmony import */ var _updateStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateStatus.js */ "./src/modules/updateStatus.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var TodoList = /*#__PURE__*/_createClass(function TodoList() {
  var _this = this;
  _classCallCheck(this, TodoList);
  // Add new item to To-Do List
  _defineProperty(this, "addItem", function (description) {
    _this.taskList.push(new _Todo_object_js__WEBPACK_IMPORTED_MODULE_0__["default"](description, _this.taskList.length));
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(_this.taskList);
    _this.display();
    document.getElementById('add-task').value = '';
  });
  // Delete todo item
  _defineProperty(this, "deleteItem", function (index) {
    _this.taskList.splice(index, 1);

    // Update indexes of remaining items
    _this.taskList.slice(index).forEach(function (item, i) {
      item.index = index + i + 1;
    });
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(_this.taskList);
    _this.display();
  });
  // update to do list
  _defineProperty(this, "updateInput", function (index, input) {
    _this.taskList[index].description = input.value;
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(_this.taskList);
  });
  // clear all completed  task from list
  _defineProperty(this, "clearCompleted", function () {
    _this.taskList = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.loadData)();
    var incompleteTasks = _this.taskList.filter(function (todo) {
      return !todo.completed;
    });
    _this.taskList = incompleteTasks;
    // Update indexes of incomplete tasks
    incompleteTasks.forEach(function (todo, index) {
      todo.index = index + 1;
    });
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(incompleteTasks);
    _this.display();
  });
  // render todo list item
  _defineProperty(this, "renderList", function (arr) {
    var todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    // copy all to do list
    var sortedArr = _toConsumableArray(arr);
    // sort todo list based on index
    sortedArr.sort(function (a, b) {
      return a.index - b.index;
    });
    var todoItems = sortedArr.map(function (task, index) {
      var todoItem = document.createElement('li');
      var input = document.createElement('input');
      var todoCheck = document.createElement('span');
      var todoMoveBtn = document.createElement('button');
      var deleteBtn = document.createElement('button');
      var ellipsisIcon = document.createElement('i');
      var trashIcon = document.createElement('i');
      todoItem.classList.add('todo-item');
      input.classList.add('description');
      todoMoveBtn.classList.add('todo-move');
      deleteBtn.classList.add('todo-delete');
      task.index = index + 1;
      if (task.completed) {
        todoCheck.classList.add('checked');
        input.classList.add('completed-task');
      }
      input.value = "".concat(task.description);
      ellipsisIcon.className = 'fa-solid fa-ellipsis-vertical';
      trashIcon.className = 'fa-regular fa-trash-can';
      deleteBtn.classList.add('hidden');
      todoCheck.classList.add('todoCheck');
      todoMoveBtn.appendChild(ellipsisIcon);
      deleteBtn.appendChild(trashIcon);
      todoItem.appendChild(todoCheck);
      todoItem.appendChild(input);
      todoItem.appendChild(deleteBtn);
      todoItem.appendChild(todoMoveBtn);

      // Delete todo list item when user click on deleteBtn
      deleteBtn.addEventListener('click', function () {
        _this.deleteItem(index);
      });
      input.addEventListener('click', function () {
        document.querySelectorAll('li').forEach(function (element) {
          element.classList.remove('list-highlight');
        });
        todoItem.classList.add('list-highlight');
        todoCheck.classList.add('darken');
        todoMoveBtn.classList.add('hidden');
        deleteBtn.classList.remove('hidden');
      });
      input.addEventListener('blur', function () {
        document.querySelectorAll('li').forEach(function (element) {
          element.classList.remove('list-highlight');
          element.classList.add('completed-task');
        });
        todoCheck.classList.remove('darken');
        setTimeout(function () {
          deleteBtn.classList.add('hidden');
          todoMoveBtn.classList.remove('hidden');
        }, 300);
      });
      input.addEventListener('keyup', function () {
        return _this.updateInput(index, input);
      });
      todoCheck.addEventListener('click', function () {
        return (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoCheck, sortedArr, index);
      });
      return todoItem;
    });
    // Append all elements to the todoList at once
    todoList.append.apply(todoList, _toConsumableArray(todoItems));
  });
  _defineProperty(this, "display", function () {
    _this.renderList((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.loadData)());
  });
  this.taskList = [];
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);

/***/ }),

/***/ "./src/modules/updateStatus.js":
/*!*************************************!*\
  !*** ./src/modules/updateStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");

var updateStatus = function updateStatus(todoCheck, sortedArr, i) {
  todoCheck.classList.toggle('checked');
  if (todoCheck.classList.contains('checked')) {
    sortedArr[i].completed = true;
  } else {
    sortedArr[i].completed = false;
  }
  // updated tasks list will be stored in local storage.
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(sortedArr);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  font-size: 1.25rem;
}

.todo-container {
  position: relative;
  box-shadow: 0 3px 10px rgba(19, 17, 17, 0.21);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  margin: 0 auto;
  width: 60%;
}

.todo-header,
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid #f1f1f1;
}

.todo-header {
  padding: 1.5rem 1rem;
}

.todo-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-bottom: 2px solid #f1f1f1;
}

.todo-item .description {
  width: 100%;
  color: #6d6868;
  font-size: 1.25rem;
}

input {
  border: none;
  padding: 0.8rem;
  outline: none;
  background-color: transparent;
}

.todoCheck {
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  margin-right: 16px;
  border: 3px solid #ccc;
  flex-shrink: 0;
}

.clear-completed {
  background-color: #eee;
  color: #6d6868;
  font-size: 1.25rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  outline: none;
  cursor: pointer;
}

button.hidden {
  display: none;
}

.input-task {
  font-style: italic;
  font-size: 1.2rem;
}

.todo-item.list-highlight {
  background-color: #e2e5b9;
}

button {
  border: none;
  background-color: transparent;
  font-size: 1.25rem;
  cursor: pointer;
}

.completed-task {
  text-decoration: line-through;
}

.completed-task:hover {
  color: #08910f;
}

.todoCheck::after {
  content: "";
  display: none;
}

.todoCheck.checked::after {
  display: block;
}

.todoCheck.darken {
  border: 2px solid #938f8f;
}

.todo-item .todoCheck.checked {
  border: none;
}

.clear-completed:hover {
  text-decoration: underline;
}

.todo-item .todoCheck::after {
  position: relative;
  top: 2px;
  left: 7px;
  width: 0.5rem;
  height: 1rem;
  border: solid #0b5d9b;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.todo-refresh,
.todo-add {
  color: #6d6868;
}

.todo-item .todo-delete:hover {
  color: #f00;
}

.todo-item .todo-move {
  cursor: move;
  color: #6d6868;
}

.todo-item .todo-move:hover,
.todo-refresh:hover,
.todo-add:hover {
  color: #040202;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,6CAA6C;EAC7C,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;EACd,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,gCAAgC;AAClC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,yBAAyB;EACzB,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;;;EAGE,cAAc;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Poppins:wght@400;500;600;700&display=swap\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lato\", sans-serif;\r\n  background-color: #f5f5f5;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 80vh;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.todo-container {\r\n  position: relative;\r\n  box-shadow: 0 3px 10px rgba(19, 17, 17, 0.21);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n}\r\n\r\n.todo-header,\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n  border-bottom: 2px solid #f1f1f1;\r\n}\r\n\r\n.todo-header {\r\n  padding: 1.5rem 1rem;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1.5rem;\r\n  border-bottom: 2px solid #f1f1f1;\r\n}\r\n\r\n.todo-item .description {\r\n  width: 100%;\r\n  color: #6d6868;\r\n  font-size: 1.25rem;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  padding: 0.8rem;\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.todoCheck {\r\n  display: inline-block;\r\n  height: 1.25rem;\r\n  width: 1.25rem;\r\n  margin-right: 16px;\r\n  border: 3px solid #ccc;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #eee;\r\n  color: #6d6868;\r\n  font-size: 1.25rem;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton.hidden {\r\n  display: none;\r\n}\r\n\r\n.input-task {\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.todo-item.list-highlight {\r\n  background-color: #e2e5b9;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 1.25rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.completed-task {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.completed-task:hover {\r\n  color: #08910f;\r\n}\r\n\r\n.todoCheck::after {\r\n  content: \"\";\r\n  display: none;\r\n}\r\n\r\n.todoCheck.checked::after {\r\n  display: block;\r\n}\r\n\r\n.todoCheck.darken {\r\n  border: 2px solid #938f8f;\r\n}\r\n\r\n.todo-item .todoCheck.checked {\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.todo-item .todoCheck::after {\r\n  position: relative;\r\n  top: 2px;\r\n  left: 7px;\r\n  width: 0.5rem;\r\n  height: 1rem;\r\n  border: solid #0b5d9b;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.todo-refresh,\r\n.todo-add {\r\n  color: #6d6868;\r\n}\r\n\r\n.todo-item .todo-delete:hover {\r\n  color: #f00;\r\n}\r\n\r\n.todo-item .todo-move {\r\n  cursor: move;\r\n  color: #6d6868;\r\n}\r\n\r\n.todo-item .todo-move:hover,\r\n.todo-refresh:hover,\r\n.todo-add:hover {\r\n  color: #040202;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _modules_todoCRUD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoCRUD.js */ "./src/modules/todoCRUD.js");


// import { saveData, loadData } from './modules/localStorage.js';

var todo = new _modules_todoCRUD_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var addButton = document.getElementById('add-btn');
addButton.addEventListener('click', function (event) {
  event.preventDefault();
  var description = document.getElementById('add-task').value;
  if (description !== '') {
    todo.addItem(description);
  }
});

// display updated todo list when user click on refresh btn
var refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', function () {
  todo.display();
});

// Delete all completed task when user click on clear btn
var clearCompletedBtn = document.getElementById('clear');
clearCompletedBtn.addEventListener('click', function () {
  todo.clearCompleted();
});

// Add todo item when user press enter key
document.getElementById('add-task').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    var description = document.getElementById('add-task').value;
    if (description !== '') {
      todo.addItem(description);
    }
  }
});
window.addEventListener('load', function () {
  todo.display();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map