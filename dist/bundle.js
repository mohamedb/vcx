/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var intent_1 = __webpack_require__(40);
// modifiers
exports.DARK = "pt-dark";
exports.ACTIVE = "pt-active";
exports.MINIMAL = "pt-minimal";
exports.DISABLED = "pt-disabled";
exports.SMALL = "pt-small";
exports.LARGE = "pt-large";
exports.LOADING = "pt-loading";
exports.INTERACTIVE = "pt-interactive";
exports.ALIGN_LEFT = "pt-align-left";
exports.ALIGN_RIGHT = "pt-align-right";
exports.INLINE = "pt-inline";
exports.FILL = "pt-fill";
exports.FIXED = "pt-fixed";
exports.FIXED_TOP = "pt-fixed-top";
exports.VERTICAL = "pt-vertical";
exports.ROUND = "pt-round";
// text utilities
exports.TEXT_MUTED = "pt-text-muted";
exports.TEXT_OVERFLOW_ELLIPSIS = "pt-text-overflow-ellipsis";
exports.UI_TEXT_LARGE = "pt-ui-text-large";
// components
exports.ALERT = "pt-alert";
exports.ALERT_BODY = "pt-alert-body";
exports.ALERT_CONTENTS = "pt-alert-contents";
exports.ALERT_FOOTER = "pt-alert-footer";
exports.BREADCRUMB = "pt-breadcrumb";
exports.BREADCRUMB_CURRENT = "pt-breadcrumb-current";
exports.BREADCRUMBS = "pt-breadcrumbs";
exports.BREADCRUMBS_COLLAPSED = "pt-breadcrumbs-collapsed";
exports.BUTTON = "pt-button";
exports.BUTTON_GROUP = "pt-button-group";
exports.CALLOUT = "pt-callout";
exports.CARD = "pt-card";
exports.COLLAPSE = "pt-collapse";
exports.COLLAPSIBLE_LIST = "pt-collapse-list";
exports.CONTEXT_MENU = "pt-context-menu";
exports.CONTEXT_MENU_POPOVER_TARGET = "pt-context-menu-popover-target";
exports.CONTROL = "pt-control";
exports.CONTROL_GROUP = "pt-control-group";
exports.CONTROL_INDICATOR = "pt-control-indicator";
exports.DIALOG = "pt-dialog";
exports.DIALOG_BODY = "pt-dialog-body";
exports.DIALOG_CLOSE_BUTTON = "pt-dialog-close-button";
exports.DIALOG_FOOTER = "pt-dialog-footer";
exports.DIALOG_FOOTER_ACTIONS = "pt-dialog-footer-actions";
exports.DIALOG_HEADER = "pt-dialog-header";
exports.EDITABLE_TEXT = "pt-editable-text";
exports.ELEVATION_0 = "pt-elevation-0";
exports.ELEVATION_1 = "pt-elevation-1";
exports.ELEVATION_2 = "pt-elevation-2";
exports.ELEVATION_3 = "pt-elevation-3";
exports.ELEVATION_4 = "pt-elevation-4";
exports.INPUT = "pt-input";
exports.INPUT_GROUP = "pt-input-group";
exports.CHECKBOX = "pt-checkbox";
exports.RADIO = "pt-radio";
exports.SWITCH = "pt-switch";
exports.FILE_UPLOAD = "pt-file-upload";
exports.FILE_UPLOAD_INPUT = "pt-file-upload-input";
exports.INTENT_PRIMARY = "pt-intent-primary";
exports.INTENT_SUCCESS = "pt-intent-success";
exports.INTENT_WARNING = "pt-intent-warning";
exports.INTENT_DANGER = "pt-intent-danger";
exports.LABEL = "pt-label";
exports.FORM_GROUP = "pt-form-group";
exports.FORM_CONTENT = "pt-form-content";
exports.FORM_HELPER_TEXT = "pt-form-helper-text";
exports.MENU = "pt-menu";
exports.MENU_ITEM = "pt-menu-item";
exports.MENU_ITEM_LABEL = "pt-menu-item-label";
exports.MENU_SUBMENU = "pt-submenu";
exports.MENU_DIVIDER = "pt-menu-divider";
exports.MENU_HEADER = "pt-menu-header";
exports.NAVBAR = "pt-navbar";
exports.NAVBAR_GROUP = "pt-navbar-group";
exports.NAVBAR_HEADING = "pt-navbar-heading";
exports.NAVBAR_DIVIDER = "pt-navbar-divider";
exports.NON_IDEAL_STATE = "pt-non-ideal-state";
exports.NON_IDEAL_STATE_ACTION = "pt-non-ideal-state-action";
exports.NON_IDEAL_STATE_DESCRIPTION = "pt-non-ideal-state-description";
exports.NON_IDEAL_STATE_ICON = "pt-non-ideal-state-icon";
exports.NON_IDEAL_STATE_TITLE = "pt-non-ideal-state-title";
exports.NON_IDEAL_STATE_VISUAL = "pt-non-ideal-state-visual";
exports.NUMERIC_INPUT = "pt-numeric-input";
exports.OVERLAY = "pt-overlay";
exports.OVERLAY_BACKDROP = "pt-overlay-backdrop";
exports.OVERLAY_CONTENT = "pt-overlay-content";
exports.OVERLAY_INLINE = "pt-overlay-inline";
exports.OVERLAY_OPEN = "pt-overlay-open";
exports.OVERLAY_SCROLL_CONTAINER = "pt-overlay-scroll-container";
exports.POPOVER = "pt-popover";
exports.POPOVER_ARROW = "pt-popover-arrow";
exports.POPOVER_BACKDROP = "pt-popover-backdrop";
exports.POPOVER_CONTENT = "pt-popover-content";
exports.POPOVER_DISMISS = "pt-popover-dismiss";
exports.POPOVER_DISMISS_OVERRIDE = "pt-popover-dismiss-override";
exports.POPOVER_OPEN = "pt-popover-open";
exports.POPOVER_TARGET = "pt-popover-target";
exports.TRANSITION_CONTAINER = "pt-transition-container";
exports.PROGRESS_BAR = "pt-progress-bar";
exports.PROGRESS_METER = "pt-progress-meter";
exports.PROGRESS_NO_STRIPES = "pt-no-stripes";
exports.PROGRESS_NO_ANIMATION = "pt-no-animation";
exports.PORTAL = "pt-portal";
exports.SELECT = "pt-select";
exports.SKELETON = "pt-skeleton";
exports.SLIDER = "pt-slider";
exports.SLIDER_HANDLE = exports.SLIDER + "-handle";
exports.SLIDER_LABEL = exports.SLIDER + "-label";
exports.RANGE_SLIDER = "pt-range-slider";
exports.SPINNER = "pt-spinner";
exports.SVG_SPINNER = "pt-svg-spinner";
exports.TAB = "pt-tab";
exports.TAB_LIST = "pt-tab-list";
exports.TAB_PANEL = "pt-tab-panel";
exports.TABS = "pt-tabs";
exports.TABLE = "pt-table";
exports.TABLE_CONDENSED = "pt-condensed";
exports.TABLE_STRIPED = "pt-striped";
exports.TABLE_BORDERED = "pt-bordered";
exports.TAG = "pt-tag";
exports.TAG_REMOVABLE = "pt-tag-removable";
exports.TAG_REMOVE = "pt-tag-remove";
exports.TOAST = "pt-toast";
exports.TOAST_CONTAINER = "pt-toast-container";
exports.TOAST_MESSAGE = "pt-toast-message";
exports.TOOLTIP = "pt-tooltip";
exports.TREE = "pt-tree";
exports.TREE_NODE = "pt-tree-node";
exports.TREE_NODE_CARET = "pt-tree-node-caret";
exports.TREE_NODE_CARET_CLOSED = "pt-tree-node-caret-closed";
exports.TREE_NODE_CARET_NONE = "pt-tree-node-caret-none";
exports.TREE_NODE_CARET_OPEN = "pt-tree-node-caret-open";
exports.TREE_NODE_CONTENT = "pt-tree-node-content";
exports.TREE_NODE_EXPANDED = "pt-tree-node-expanded";
exports.TREE_NODE_ICON = "pt-tree-node-icon";
exports.TREE_NODE_LABEL = "pt-tree-node-label";
exports.TREE_NODE_LIST = "pt-tree-node-list";
exports.TREE_NODE_SECONDARY_LABEL = "pt-tree-node-secondary-label";
exports.TREE_NODE_SELECTED = "pt-tree-node-selected";
exports.TREE_ROOT = "pt-tree-root";
exports.ICON = "pt-icon";
exports.ICON_STANDARD = "pt-icon-standard";
exports.ICON_LARGE = "pt-icon-large";
/** Return CSS class for icon, whether or not 'pt-icon-' prefix is included */
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("pt-icon-") === 0 ? iconName : "pt-icon-" + iconName;
}
exports.iconClass = iconClass;
function intentClass(intent) {
    if (intent === void 0) { intent = intent_1.Intent.NONE; }
    if (intent === intent_1.Intent.NONE || intent_1.Intent[intent] == null) {
        return undefined;
    }
    return "pt-intent-" + intent_1.Intent[intent].toLowerCase();
}
exports.intentClass = intentClass;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Félix Girault <felix.girault@gmail.com>
 * @license MIT
 */


var warning = __webpack_require__(27);
var shallowEqual = __webpack_require__(80);



/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
}

/**
 * Returns a text description of the component that can be
 * used to identify it in error messages.
 *
 * @see https://github.com/facebook/react/blob/v15.4.0-rc.3/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js#L1143
 * @param {function} component The component.
 * @return {string} The name of the component.
 */
function getComponentName(component) {
  var constructor = component.prototype && component.prototype.constructor;

  return (
    component.displayName
    || (constructor && constructor.displayName)
    || component.name
    || (constructor && constructor.name)
    || 'a component'
  );
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  if (component.prototype.shouldComponentUpdate !== undefined) {
    // We're not using the condition mecanism of warning()
    // here to avoid useless calls to getComponentName().
    warning(
      false,
      'Cannot decorate `%s` with @pureRenderDecorator, '
      + 'because it already implements `shouldComponentUpdate().',
      getComponentName(component)
    )
  }

  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;
}



module.exports = pureRenderDecorator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(9);
/** Returns whether `process.env.NODE_ENV` exists and equals `env`. */
function isNodeEnv(env) {
    return typeof process !== "undefined" && process.env && process.env.NODE_ENV === env;
}
exports.isNodeEnv = isNodeEnv;
/** Returns whether the value is a function. Acts as a type guard. */
// tslint:disable-next-line:ban-types
function isFunction(value) {
    return typeof value === "function";
}
exports.isFunction = isFunction;
// tslint:disable-next-line:ban-types
function safeInvoke(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
}
exports.safeInvoke = safeInvoke;
function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
exports.elementIsOrContains = elementIsOrContains;
/**
 * Returns the difference in length between two arrays. A `null` argument is considered an empty list.
 * The return value will be positive if `a` is longer than `b`, negative if the opposite is true,
 * and zero if their lengths are equal.
 */
function arrayLengthCompare(a, b) {
    if (a === void 0) { a = []; }
    if (b === void 0) { b = []; }
    return a.length - b.length;
}
exports.arrayLengthCompare = arrayLengthCompare;
/**
 * Returns true if the two numbers are within the given tolerance of each other.
 * This is useful to correct for floating point precision issues, less useful for integers.
 */
function approxEqual(a, b, tolerance) {
    if (tolerance === void 0) { tolerance = 0.00001; }
    return Math.abs(a - b) <= tolerance;
}
exports.approxEqual = approxEqual;
/** Clamps the given number between min and max values. Returns value if within range, or closest bound. */
function clamp(val, min, max) {
    if (max < min) {
        throw new Error(errors_1.CLAMP_MIN_MAX);
    }
    return Math.min(Math.max(val, min), max);
}
exports.clamp = clamp;
/** Returns the number of decimal places in the given number. */
function countDecimalPlaces(num) {
    if (typeof num !== "number" || Math.floor(num) === num) {
        return 0;
    }
    return num.toString().split(".")[1].length;
}
exports.countDecimalPlaces = countDecimalPlaces;
/**
 * Throttle an event on an EventTarget by wrapping it in `requestAnimationFrame` call.
 * Returns the event handler that was bound to given eventName so you can clean up after yourself.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
function throttleEvent(target, eventName, newEventName) {
    var running = false;
    /* istanbul ignore next: borrowed directly from MDN */
    var func = function (event) {
        if (running) {
            return;
        }
        running = true;
        requestAnimationFrame(function () {
            target.dispatchEvent(new CustomEvent(newEventName, event));
            running = false;
        });
    };
    target.addEventListener(eventName, func);
    return func;
}
exports.throttleEvent = throttleEvent;
;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.TABLE_BODY = "bp-table-body";
exports.TABLE_BODY_SCROLL_CLIENT = "bp-table-body-scroll-client";
exports.TABLE_BODY_VIRTUAL_CLIENT = "bp-table-body-virtual-client";
exports.TABLE_BOTTOM_CONTAINER = "bp-table-bottom-container";
exports.TABLE_CELL = "bp-table-cell";
exports.TABLE_CELL_CLIENT = "bp-table-cell-client";
exports.TABLE_CELL_GHOST = "bp-table-cell-ghost";
exports.TABLE_CELL_INTERACTIVE = "bp-table-cell-interactive";
exports.TABLE_CELL_LEDGER_EVEN = "bp-table-cell-ledger-even";
exports.TABLE_CELL_LEDGER_ODD = "bp-table-cell-ledger-odd";
exports.TABLE_COLUMN_HEADER_TR = "bp-table-column-header-tr";
exports.TABLE_COLUMN_HEADERS = "bp-table-column-headers";
exports.TABLE_COLUMN_NAME = "bp-table-column-name";
exports.TABLE_COLUMN_NAME_TEXT = "bp-table-column-name-text";
exports.TABLE_CONTAINER = "bp-table-container";
exports.TABLE_DRAGGABLE = "bp-table-draggable";
exports.TABLE_DRAGGING = "bp-table-dragging";
exports.TABLE_EDITABLE_NAME = "bp-table-editable-name";
exports.TABLE_FOCUS_REGION = "bp-table-focus-region";
exports.TABLE_HEADER = "bp-table-header";
exports.TABLE_HEADER_ACTIVE = "bp-table-header-active";
exports.TABLE_HEADER_CONTENT = "bp-table-header-content";
exports.TABLE_HEADER_REORDERABLE = "bp-table-header-reorderable";
exports.TABLE_HEADER_SELECTED = "bp-table-header-selected";
exports.TABLE_HORIZONTAL_CELL_DIVIDER = "bp-table-horizontal-cell-divider";
exports.TABLE_HORIZONTAL_GUIDE = "bp-table-horizontal-guide";
exports.TABLE_INTERACTION_BAR = "bp-table-interaction-bar";
exports.TABLE_LAST_IN_COLUMN = "bp-table-last-in-column";
exports.TABLE_LAST_IN_ROW = "bp-table-last-in-row";
exports.TABLE_MENU = "bp-table-menu";
exports.TABLE_NO_HORIZONTAL_SCROLL = "bp-table-no-horizontal-scroll";
exports.TABLE_NO_LAYOUT = "bp-table-no-layout";
exports.TABLE_NO_VERTICAL_SCROLL = "bp-table-no-vertical-scroll";
exports.TABLE_NO_WRAP_TEXT = "bp-table-no-wrap-text";
exports.TABLE_NULL = "bp-table-null";
exports.TABLE_OVERLAY = "bp-table-overlay";
exports.TABLE_OVERLAY_LAYER = "bp-table-overlay-layer";
exports.TABLE_POPOVER_WHITESPACE_NORMAL = "bp-table-popover-whitespace-normal";
exports.TABLE_POPOVER_WHITESPACE_PRE = "bp-table-popover-whitespace-pre";
exports.TABLE_REGION = "bp-table-region";
exports.TABLE_REORDER_HANDLE = "bp-table-reorder-handle";
exports.TABLE_REORDER_HANDLE_TARGET = "bp-table-reorder-handle-target";
exports.TABLE_REORDERING = "bp-table-reordering";
exports.TABLE_RESIZE_GUIDES = "bp-table-resize-guides";
exports.TABLE_RESIZE_HANDLE = "bp-table-resize-handle";
exports.TABLE_RESIZE_HANDLE_TARGET = "bp-table-resize-handle-target";
exports.TABLE_RESIZE_HORIZONTAL = "bp-table-resize-horizontal";
exports.TABLE_RESIZE_SENSOR = "bp-table-resize-sensor";
exports.TABLE_RESIZE_SENSOR_EXPAND = "bp-table-resize-sensor-expand";
exports.TABLE_RESIZE_SENSOR_SHRINK = "bp-table-resize-sensor-shrink";
exports.TABLE_RESIZE_VERTICAL = "bp-table-resize-vertical";
exports.TABLE_ROUNDED_LAYOUT = "bp-table-rounded-layout";
exports.TABLE_ROW_HEADERS = "bp-table-row-headers";
exports.TABLE_ROW_NAME = "bp-table-row-name";
exports.TABLE_ROW_NAME_TEXT = "bp-table-row-name-text";
exports.TABLE_SELECTION_ENABLED = "bp-table-selection-enabled";
exports.TABLE_SELECTION_REGION = "bp-table-selection-region";
exports.TABLE_TH_MENU = "bp-table-th-menu";
exports.TABLE_TH_MENU_CONTAINER = "bp-table-th-menu-container";
exports.TABLE_TH_MENU_CONTAINER_BACKGROUND = "bp-table-th-menu-container-background";
exports.TABLE_TH_MENU_OPEN = "bp-table-th-menu-open";
exports.TABLE_THEAD = "bp-table-thead";
exports.TABLE_TOP_CONTAINER = "bp-table-top-container";
exports.TABLE_TRUNCATED_CELL = "bp-table-truncated-cell";
exports.TABLE_TRUNCATED_FORMAT = "bp-table-truncated-format";
exports.TABLE_TRUNCATED_FORMAT_TEXT = "bp-table-truncated-format-text";
exports.TABLE_TRUNCATED_POPOVER = "bp-table-truncated-popover";
exports.TABLE_TRUNCATED_POPOVER_TARGET = "bp-table-truncated-popover-target";
exports.TABLE_TRUNCATED_TEXT = "bp-table-truncated-text";
exports.TABLE_TRUNCATED_VALUE = "bp-table-truncated-value";
exports.TABLE_VERTICAL_GUIDE = "bp-table-vertical-guide";
/** Common code for row and column index class generator functions, since they're essentially the same. */
function dimensionIndexClass(classPrefix, index) {
    if (index == null) {
        return undefined;
    }
    if (typeof index === "number") {
        return "" + classPrefix + index;
    }
    return index.indexOf(classPrefix) === 0 ? index : "" + classPrefix + index;
}
/** Return CSS class for table colummn index, whether or not 'bp-table-col-' prefix is included. */
function columnIndexClass(columnIndex) {
    return dimensionIndexClass("bp-table-col-", columnIndex);
}
exports.columnIndexClass = columnIndexClass;
/** Return CSS class for table row index, whether or not 'bp-table-row-' prefix is included. */
function rowIndexClass(rowIndex) {
    return dimensionIndexClass("bp-table-row-", rowIndex);
}
exports.rowIndexClass = rowIndexClass;
/** Return CSS class for table colummn cell index, whether or not 'bp-table-cell-col-' prefix is included. */
function columnCellIndexClass(columnIndex) {
    return dimensionIndexClass("bp-table-cell-col-", columnIndex);
}
exports.columnCellIndexClass = columnCellIndexClass;
/** Return CSS class for table row cell index, whether or not 'bp-table-cell-row-' prefix is included. */
function rowCellIndexClass(rowIndex) {
    return dimensionIndexClass("bp-table-cell-row-", rowIndex);
}
exports.rowCellIndexClass = rowCellIndexClass;



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(75));
__export(__webpack_require__(16));
__export(__webpack_require__(42));
var iconClasses_1 = __webpack_require__(125);
exports.IconClasses = iconClasses_1.IconClasses;
var iconStrings_1 = __webpack_require__(126);
exports.IconContents = iconStrings_1.IconContents;



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var utils_1 = __webpack_require__(5);
/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 */
var AbstractComponent = (function (_super) {
    tslib_1.__extends(AbstractComponent, _super);
    function AbstractComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        _this.timeoutIds = [];
        /**
         * Clear all known timeouts.
         */
        _this.clearTimeouts = function () {
            if (_this.timeoutIds.length > 0) {
                for (var _i = 0, _a = _this.timeoutIds; _i < _a.length; _i++) {
                    var timeoutId = _a[_i];
                    clearTimeout(timeoutId);
                }
                _this.timeoutIds = [];
            }
        };
        if (!utils_1.isNodeEnv("production")) {
            _this.validateProps(_this.props);
        }
        return _this;
    }
    AbstractComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (!utils_1.isNodeEnv("production")) {
            this.validateProps(nextProps);
        }
    };
    AbstractComponent.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractComponent.prototype.setTimeout = function (callback, timeout) {
        var handle = setTimeout(callback, timeout);
        this.timeoutIds.push(handle);
        return function () { return clearTimeout(handle); };
    };
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * In contrast to propTypes, these runtime checks are _always_ run, not just in development mode.
     */
    AbstractComponent.prototype.validateProps = function (_) {
        // implement in subclass
    };
    ;
    return AbstractComponent;
}(React.Component));
exports.AbstractComponent = AbstractComponent;



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ns = "[Blueprint]";
var deprec = ns + " DEPRECATION:";
exports.CLAMP_MIN_MAX = ns + " clamp: max cannot be less than min";
exports.ALERT_WARN_CANCEL_PROPS = ns + " <Alert> cancelButtonText and onCancel should be set together.";
exports.COLLAPSIBLE_LIST_INVALID_CHILD = ns + " <CollapsibleList> children must be <MenuItem>s";
exports.CONTEXTMENU_WARN_DECORATOR_NO_METHOD = ns + " @ContextMenuTarget-decorated class should implement renderContextMenu.";
exports.HOTKEYS_HOTKEY_CHILDREN = ns + " <Hotkeys> only accepts <Hotkey> children.";
exports.MENU_WARN_CHILDREN_SUBMENU_MUTEX = ns + " <MenuItem> children and submenu props are mutually exclusive, with children taking priority.";
exports.NUMERIC_INPUT_MIN_MAX = ns + " <NumericInput> requires min to be strictly less than max if both are defined.";
exports.NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires minorStepSize to be strictly less than stepSize.";
exports.NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires majorStepSize to be strictly greater than stepSize.";
exports.NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires minorStepSize to be strictly greater than zero.";
exports.NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires majorStepSize to be strictly greater than zero.";
exports.NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires stepSize to be strictly greater than zero.";
exports.NUMERIC_INPUT_STEP_SIZE_NULL = ns + " <NumericInput> requires stepSize to be defined.";
exports.POPOVER_REQUIRES_TARGET = ns + " <Popover> requires target prop or at least one child element.";
exports.POPOVER_MODAL_INTERACTION = ns + " <Popover isModal={true}> requires interactionKind={PopoverInteractionKind.CLICK}.";
exports.POPOVER_WARN_TOO_MANY_CHILDREN = ns + " <Popover> supports one or two children; additional children are ignored."
    + " First child is the target, second child is the content. You may instead supply these two as props.";
exports.POPOVER_WARN_DOUBLE_CONTENT = ns + " <Popover> with two children ignores content prop; use either prop or children.";
exports.POPOVER_WARN_DOUBLE_TARGET = ns + " <Popover> with children ignores target prop; use either prop or children.";
exports.POPOVER_WARN_EMPTY_CONTENT = ns + " Disabling <Popover> with empty/whitespace content...";
exports.POPOVER_WARN_MODAL_INLINE = ns + " <Popover inline={true}> ignores isModal";
exports.POPOVER_WARN_DEPRECATED_CONSTRAINTS = deprec + " <Popover> constraints and useSmartPositioning are deprecated. Use tetherOptions directly.";
exports.POPOVER_WARN_INLINE_NO_TETHER = ns + " <Popover inline={true}> ignores tetherOptions, constraints, and useSmartPositioning.";
exports.POPOVER_WARN_UNCONTROLLED_ONINTERACTION = ns + " <Popover> onInteraction is ignored when uncontrolled.";
exports.PORTAL_CONTEXT_CLASS_NAME_STRING = ns + " <Portal> context blueprintPortalClassName must be string";
exports.RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX = ns + " <RadioGroup> children and options prop are mutually exclusive, with options taking priority.";
exports.SLIDER_ZERO_STEP = ns + " <Slider> stepSize must be greater than zero.";
exports.SLIDER_ZERO_LABEL_STEP = ns + " <Slider> labelStepSize must be greater than zero.";
exports.RANGESLIDER_NULL_VALUE = ns + " <RangeSlider> value prop must be an array of two non-null numbers.";
exports.TABS_FIRST_CHILD = ns + " First child of <Tabs> component must be a <TabList>";
exports.TABS_MISMATCH = ns + " Number of <Tab> components must equal number of <TabPanel> components";
exports.TABS_WARN_DEPRECATED = deprec + " <Tabs> is deprecated since v1.11.0; consider upgrading to <Tabs2>."
    + " https://blueprintjs.com/#components.tabs.js";
exports.TOASTER_WARN_INLINE = ns + " Toaster.create() ignores inline prop as it always creates a new element.";
exports.TOASTER_WARN_LEFT_RIGHT = ns + " Toaster does not support LEFT or RIGHT positions.";
exports.DIALOG_WARN_NO_HEADER_ICON = ns + " <Dialog> iconName is ignored if title is omitted.";
exports.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON = ns + " <Dialog> isCloseButtonShown prop is ignored if title is omitted.";



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
;
// tslint:enable
/**
 * Since Firefox doesn't provide a computed "font" property, we manually
 * construct it using the ordered properties that can be specifed in CSS.
 */
var CSS_FONT_PROPERTIES = [
    "font-style",
    "font-variant",
    "font-weight",
    "font-size",
    "font-family",
];
exports.Utils = {
    /**
     * Returns a clone of the ReactElement with a className that includes the
     * element's original className and any other classes passed in with variadic
     * arguments matching the `classNames` api.
     */
    assignClasses: function (elem) {
        var extendedClasses = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            extendedClasses[_i - 1] = arguments[_i];
        }
        var classes = classNames.apply(void 0, [elem.props.className].concat(extendedClasses));
        return React.cloneElement(elem, { className: classes });
    },
    /**
     * Invokes the callback `n` times, collecting the results in an array, which
     * is the return value. Similar to _.times
     */
    times: function (n, callback) {
        var result = Array(n);
        for (var index = 0; index < n; index++) {
            result[index] = callback(index);
        }
        return result;
    },
    /**
     * Takes an array of numbers, returns an array of numbers of the same length in which each
     * value is the sum of current and previous values in the input array.
     *
     * Example input:  [10, 20, 50]
     *         output: [10, 30, 80]
     */
    accumulate: function (numbers) {
        var result = [];
        var sum = 0;
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var num = numbers_1[_i];
            sum += num;
            result.push(sum);
        }
        return result;
    },
    /**
     * Returns traditional spreadsheet-style column names
     * e.g. (A, B, ..., Z, AA, AB, ..., ZZ, AAA, AAB, ...).
     *
     * Note that this isn't technically mathematically equivalent to base 26 since
     * there is no zero element.
     */
    toBase26Alpha: function (num) {
        var str = "";
        while (true) {
            var letter = num % 26;
            str = String.fromCharCode(65 + letter) + str;
            num = num - letter;
            if (num <= 0) {
                return str;
            }
            num = (num / 26) - 1;
        }
    },
    /**
     * Performs the binary search algorithm to find the index of the `value`
     * parameter in a sorted list of numbers. If `value` is not in the list, the
     * index where `value` can be inserted to maintain the sort is returned.
     *
     * Unlike a typical binary search implementation, we use a `lookup`
     * callback to access the sorted list of numbers instead of an array. This
     * avoids additional storage overhead.
     *
     * We use this to, for example, find the index of a row/col given its client
     * coordinate.
     *
     * Adapted from lodash https://github.com/lodash/lodash/blob/4.11.2/lodash.js#L3579
     *
     * @param value - the query value
     * @param high - the length of the sorted list of numbers
     * @param lookup - returns the number from the list at the supplied index
     */
    binarySearch: function (value, high, lookup) {
        var low = 0;
        while (low < high) {
            var mid = Math.floor((low + high) / 2.0);
            var computed = lookup(mid);
            if (computed < value) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }
        return high;
    },
    /**
     * Returns a copy of the array that will have a length of the supplied parameter.
     * If the array is too long, it will be truncated. If it is too short, it will be
     * filled with the suppleid `fillValue` argument.
     *
     * @param array - the `Array` to copy and adjust
     * @param length - the target length of the array
     * @param fillValue - the value to add to the array if it is too short
     */
    arrayOfLength: function (array, length, fillValue) {
        if (array.length > length) {
            return array.slice(0, length);
        }
        array = array.slice();
        while (array.length < length) {
            array.push(fillValue);
        }
        return array;
    },
    /**
     * Takes in one full array of values and one sparse array of the same
     * length and type. Returns a copy of the `defaults` array, where each
     * value is replaced with the corresponding non-null value at the same
     * index in `sparseOverrides`.
     *
     * @param defaults - the full array of default values
     * @param sparseOverrides - the sparse array of override values
     */
    assignSparseValues: function (defaults, sparseOverrides) {
        if (sparseOverrides == null || defaults.length !== sparseOverrides.length) {
            return defaults;
        }
        defaults = defaults.slice();
        for (var i = 0; i < defaults.length; i++) {
            var override = sparseOverrides[i];
            if (override != null) {
                defaults[i] = override;
            }
        }
        return defaults;
    },
    /**
     * Measures the bounds of supplied element's textContent.
     *
     * We use the computed font from the supplied element and a non-DOM canvas
     * context to measure the text.
     *
     * Returns a `TextMetrics` object.
     */
    measureElementTextContent: function (element) {
        var context = document.createElement("canvas").getContext("2d");
        var style = getComputedStyle(element, null);
        context.font = CSS_FONT_PROPERTIES.map(function (prop) { return style.getPropertyValue(prop); }).join(" ");
        return context.measureText(element.textContent);
    },
    /**
     * Given a number, returns a value that is clamped within a
     * minimum/maximum bounded range. The minimum and maximum are optional. If
     * either is missing, that extrema limit is not applied.
     *
     * Assumes max >= min.
     */
    clamp: function (value, min, max) {
        if (min != null && value < min) {
            value = min;
        }
        if (max != null && value > max) {
            value = max;
        }
        return value;
    },
    /**
     * Shallow comparison between objects. If `keys` is provided, just that subset of keys will be
     * compared; otherwise, all keys will be compared.
     */
    shallowCompareKeys: function (objA, objB, keys) {
        // treat `null` and `undefined` as the same
        if (objA == null && objB == null) {
            return true;
        }
        else if (objA == null || objB == null) {
            return false;
        }
        else if (Array.isArray(objA) || Array.isArray(objB)) {
            return false;
        }
        else if (keys != null) {
            return _shallowCompareKeys(objA, objB, keys);
        }
        else {
            // shallowly compare all keys from both objects
            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);
            return _shallowCompareKeys(objA, objB, { include: keysA })
                && _shallowCompareKeys(objA, objB, { include: keysB });
        }
    },
    /**
     * Deep comparison between objects. If `keys` is provided, just that subset of keys will be
     * compared; otherwise, all keys will be compared.
     */
    deepCompareKeys: function (objA, objB, keys) {
        if (objA === objB) {
            return true;
        }
        else if (objA == null && objB == null) {
            // treat `null` and `undefined` as the same
            return true;
        }
        else if (objA == null || objB == null) {
            return false;
        }
        else if (Array.isArray(objA) || Array.isArray(objB)) {
            return exports.Utils.arraysEqual(objA, objB, exports.Utils.deepCompareKeys);
        }
        else if (_isSimplePrimitiveType(objA) || _isSimplePrimitiveType(objB)) {
            return objA === objB;
        }
        else if (keys != null) {
            return _deepCompareKeys(objA, objB, keys);
        }
        else if (objA.constructor !== objB.constructor) {
            return false;
        }
        else {
            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);
            if (keysA == null || keysB == null) {
                return false;
            }
            if (keysA.length === 0 && keysB.length === 0) {
                return true;
            }
            return exports.Utils.arraysEqual(keysA, keysB) && _deepCompareKeys(objA, objB, keysA);
        }
    },
    /**
     * Returns a descriptive object for each key whose values are shallowly unequal between two
     * provided objects. Useful for debugging shouldComponentUpdate.
     */
    getShallowUnequalKeyValues: function (objA, objB, keys) {
        // default param values let null values pass through, so we have to take this more thorough approach
        var definedObjA = (objA == null) ? {} : objA;
        var definedObjB = (objB == null) ? {} : objB;
        var filteredKeys = _filterKeys(definedObjA, definedObjB, keys == null ? { exclude: [] } : keys);
        return _getUnequalKeyValues(definedObjA, definedObjB, filteredKeys, function (a, b, key) { return exports.Utils.shallowCompareKeys(a, b, { include: [key] }); });
    },
    /**
     * Returns a descriptive object for each key whose values are deeply unequal between two
     * provided objects. Useful for debugging shouldComponentUpdate.
     */
    getDeepUnequalKeyValues: function (objA, objB, keys) {
        var definedObjA = (objA == null) ? {} : objA;
        var definedObjB = (objB == null) ? {} : objB;
        var filteredKeys = (keys == null) ? _unionKeys(definedObjA, definedObjB) : keys;
        return _getUnequalKeyValues(definedObjA, definedObjB, filteredKeys, function (a, b, key) { return exports.Utils.deepCompareKeys(a, b, [key]); });
    },
    /**
     * When reordering a contiguous block of rows or columns to a new index, we show a preview guide
     * at the absolute index in the original ordering but emit the new index in the reordered list.
     * This function converts an absolute "guide" index to a relative "reordered" index.
     *
     * Example: Say we want to move the first three columns two spots to the right. While we drag, a
     * vertical guide is shown to preview where we'll be dropping the columns. (In the following
     * ASCII art, `*` denotes a selected column, `·` denotes a cell border, and `|` denotes a
     * vertical guide).
     *
     *     Before mousedown:
     *     · 0 · 1 · 2 · 3 · 4 · 5 ·
     *       *   *   *
     *
     *     During mousemove two spots to the right:
     *     · 0 · 1 · 2 · 3 · 4 | 5 ·
     *       *   *   *
     *
     *     After mouseup:
     *     · 3 · 4 · 0 · 1 · 2 · 5 ·
     *               *   *   *
     *
     * Note that moving the three columns beyond index 4 effectively moves them two spots rightward.
     *
     * In this case, the inputs to this function would be:
     *     - oldIndex: 0 (the left-most index of the selected column range in the original ordering)
     *     - newIndex: 5 (the index on whose left boundary the guide appears in the original ordering)
     *     - length: 3 (the number of columns to move)
     *
     * The return value will then be 2, the left-most index of the columns in the new ordering.
     */
    guideIndexToReorderedIndex: function (oldIndex, newIndex, length) {
        if (newIndex < oldIndex) {
            return newIndex;
        }
        else if (oldIndex <= newIndex && newIndex < oldIndex + length) {
            return oldIndex;
        }
        else {
            return Math.max(0, newIndex - length);
        }
    },
    /**
     * When reordering a contiguous block of rows or columns to a new index, we show a preview guide
     * at the absolute index in the original ordering but emit the new index in the reordered list.
     * This function converts a relative "reordered"" index to an absolute "guide" index.
     *
     * For the scenario in the example above, the inputs to this function would be:
     *     - oldIndex: 0 (the left-most index of the selected column range in the original ordering)
     *     - newIndex: 2 (the left-most index of the selected column range in the new ordering)
     *     - length: 3 (the number of columns to move)
     *
     * The return value will then be 5, the index on whose left boundary the guide should appear in
     * the original ordering.
     */
    reorderedIndexToGuideIndex: function (oldIndex, newIndex, length) {
        return (newIndex <= oldIndex) ? newIndex : newIndex + length;
    },
    /**
     * Returns a copy of the provided array with the `length` contiguous elements starting at the
     * `from` index reordered to start at the `to` index.
     *
     * For example, given the array [A,B,C,D,E,F], reordering the 3 contiguous elements starting at
     * index 1 (B, C, and D) to start at index 2 would yield [A,E,B,C,D,F].
     */
    reorderArray: function (array, from, to, length) {
        if (length === void 0) { length = 1; }
        if (length === 0 || length === array.length || from === to) {
            // return an unchanged copy
            return array.slice();
        }
        if (length < 0 || length > array.length || from + length > array.length) {
            return undefined;
        }
        var before = array.slice(0, from);
        var within = array.slice(from, from + length);
        var after = array.slice(from + length);
        var result = [];
        var i = 0;
        var b = 0;
        var w = 0;
        var a = 0;
        while (i < to) {
            if (b < before.length) {
                result.push(before[b]);
                b += 1;
            }
            else {
                result.push(after[a]);
                a += 1;
            }
            i += 1;
        }
        while (w < length) {
            result.push(within[w]);
            w += 1;
            i += 1;
        }
        while (i < array.length) {
            if (b < before.length) {
                result.push(before[b]);
                b += 1;
            }
            else {
                result.push(after[a]);
                a += 1;
            }
            i += 1;
        }
        return result;
    },
    /**
     * Returns true if the mouse event was triggered by the left mouse button.
     */
    isLeftClick: function (event) {
        return event.button === 0;
    },
    /**
     * Returns true if the arrays are equal. Elements will be shallowly compared by default, or they
     * will be compared using the custom `compare` function if one is provided.
     */
    arraysEqual: function (arrA, arrB, compare) {
        if (compare === void 0) { compare = function (a, b) { return a === b; }; }
        // treat `null` and `undefined` as the same
        if (arrA == null && arrB == null) {
            return true;
        }
        else if (arrA == null || arrB == null || arrA.length !== arrB.length) {
            return false;
        }
        else {
            return arrA.every(function (a, i) { return compare(a, arrB[i]); });
        }
    },
};
/**
 * Partial shallow comparison between objects using the given list of keys.
 */
function _shallowCompareKeys(objA, objB, keys) {
    return _filterKeys(objA, objB, keys).every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key)
            && objA[key] === objB[key];
    });
}
/**
 * Partial deep comparison between objects using the given list of keys.
 */
function _deepCompareKeys(objA, objB, keys) {
    return keys.every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key)
            && exports.Utils.deepCompareKeys(objA[key], objB[key]);
    });
}
function _isSimplePrimitiveType(value) {
    return typeof value === "number"
        || typeof value === "string"
        || typeof value === "boolean";
}
function _filterKeys(objA, objB, keys) {
    if (isWhitelist(keys)) {
        return keys.include;
    }
    else {
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        // merge keys from both objects into a big set for quick access
        var keySet_1 = _arrayToObject(keysA.concat(keysB));
        // delete blacklisted keys from the key set
        keys.exclude.forEach(function (key) { return delete keySet_1[key]; });
        // return the remaining keys as an array
        return Object.keys(keySet_1);
    }
}
function isWhitelist(keys) {
    return keys != null && keys.include != null;
}
function _arrayToObject(arr) {
    return arr.reduce(function (obj, element) {
        obj[element] = true;
        return obj;
    }, {});
}
function _getUnequalKeyValues(objA, objB, keys, compareFn) {
    var unequalKeys = keys.filter(function (key) { return !compareFn(objA, objB, key); });
    var unequalKeyValues = unequalKeys.map(function (key) { return ({
        key: key,
        valueA: objA[key],
        valueB: objB[key],
    }); });
    return unequalKeyValues;
}
function _unionKeys(objA, objB) {
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    var concatKeys = keysA.concat(keysB);
    var keySet = _arrayToObject(concatKeys);
    return Object.keys(keySet);
}



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Classes = __webpack_require__(6);
var utils_1 = __webpack_require__(10);
/**
 * `Region`s contain sets of cells. Additionally, a distinction is drawn, for
 * example, between all cells within a column and the whole column itself.
 * The `RegionCardinality` enum represents these distinct types of `Region`s.
 */
var RegionCardinality;
(function (RegionCardinality) {
    /**
     * A region that contains a finite rectangular group of table cells
     */
    RegionCardinality[RegionCardinality["CELLS"] = 0] = "CELLS";
    /**
     * A region that represents all cells within 1 or more rows.
     */
    RegionCardinality[RegionCardinality["FULL_ROWS"] = 1] = "FULL_ROWS";
    /**
     * A region that represents all cells within 1 or more columns.
     */
    RegionCardinality[RegionCardinality["FULL_COLUMNS"] = 2] = "FULL_COLUMNS";
    /**
     * A region that represents all cells in the table.
     */
    RegionCardinality[RegionCardinality["FULL_TABLE"] = 3] = "FULL_TABLE";
})(RegionCardinality = exports.RegionCardinality || (exports.RegionCardinality = {}));
/**
 * A convenience object for subsets of `RegionCardinality` that are commonly
 * used as the `selectionMode` prop of the `<Table>`.
 */
exports.SelectionModes = {
    ALL: [
        RegionCardinality.FULL_TABLE,
        RegionCardinality.FULL_COLUMNS,
        RegionCardinality.FULL_ROWS,
        RegionCardinality.CELLS,
    ],
    COLUMNS_AND_CELLS: [
        RegionCardinality.FULL_COLUMNS,
        RegionCardinality.CELLS,
    ],
    COLUMNS_ONLY: [
        RegionCardinality.FULL_COLUMNS,
    ],
    NONE: [],
    ROWS_AND_CELLS: [
        RegionCardinality.FULL_ROWS,
        RegionCardinality.CELLS,
    ],
    ROWS_ONLY: [
        RegionCardinality.FULL_ROWS,
    ],
};
exports.ColumnLoadingOption = {
    CELLS: "cells",
    HEADER: "column-header",
};
exports.RowLoadingOption = {
    CELLS: "cells",
    HEADER: "row-header",
};
exports.TableLoadingOption = {
    CELLS: "cells",
    COLUMN_HEADERS: exports.ColumnLoadingOption.HEADER,
    ROW_HEADERS: exports.RowLoadingOption.HEADER,
};
var Regions = (function () {
    function Regions() {
    }
    /**
     * Determines the cardinality of a region. We use null values to indicate
     * an unbounded interval. Therefore, an example of a region containing the
     * second and third columns would be:
     *
     *     {
     *         rows: null,
     *         cols: [1, 2]
     *     }
     *
     * In this case, this method would return `RegionCardinality.FULL_COLUMNS`.
     *
     * If both rows and columns are unbounded, then the region covers the
     * entire table. Therefore, a region like this:
     *
     *     {
     *         rows: null,
     *         cols: null
     *     }
     *
     * will return `RegionCardinality.FULL_TABLE`.
     *
     * An example of a region containing a single cell in the table would be:
     *
     *     {
     *         rows: [5, 5],
     *         cols: [2, 2]
     *     }
     *
     * In this case, this method would return `RegionCardinality.CELLS`.
     */
    Regions.getRegionCardinality = function (region) {
        if (region.cols != null && region.rows != null) {
            return RegionCardinality.CELLS;
        }
        else if (region.cols != null) {
            return RegionCardinality.FULL_COLUMNS;
        }
        else if (region.rows != null) {
            return RegionCardinality.FULL_ROWS;
        }
        else {
            return RegionCardinality.FULL_TABLE;
        }
    };
    Regions.getFocusCellCoordinatesFromRegion = function (region) {
        var regionCardinality = Regions.getRegionCardinality(region);
        switch (regionCardinality) {
            case RegionCardinality.FULL_TABLE:
                return { col: 0, row: 0 };
            case RegionCardinality.FULL_COLUMNS:
                return { col: region.cols[0], row: 0 };
            case RegionCardinality.FULL_ROWS:
                return { col: 0, row: region.rows[0] };
            case RegionCardinality.CELLS:
                return { col: region.cols[0], row: region.rows[0] };
            default:
                return null;
        }
    };
    /**
     * Returns a region containing one or more cells.
     */
    Regions.cell = function (row, col, row2, col2) {
        return {
            cols: this.normalizeInterval(col, col2),
            rows: this.normalizeInterval(row, row2),
        };
    };
    /**
     * Returns a region containing one or more full rows.
     */
    Regions.row = function (row, row2) {
        return { rows: this.normalizeInterval(row, row2) };
    };
    /**
     * Returns a region containing one or more full columns.
     */
    Regions.column = function (col, col2) {
        return { cols: this.normalizeInterval(col, col2) };
    };
    /**
     * Returns a region containing the entire table.
     */
    Regions.table = function () {
        return {};
    };
    /**
     * Adds the region to the end of a cloned copy of the supplied region
     * array.
     */
    Regions.add = function (regions, region) {
        var copy = regions.slice();
        copy.push(region);
        return copy;
    };
    /**
     * Replaces the region at the end of a cloned copy of the supplied region
     * array.
     */
    Regions.update = function (regions, region) {
        var copy = regions.slice();
        copy.pop();
        copy.push(region);
        return copy;
    };
    /**
     * Returns true iff the specified region is equal to the last region in
     * the region list. This allows us to avoid immediate additive re-selection.
     */
    Regions.lastRegionIsEqual = function (regions, region) {
        if (regions == null || regions.length === 0) {
            return false;
        }
        var lastRegion = regions[regions.length - 1];
        return Regions.regionsEqual(lastRegion, region);
    };
    /**
     * Returns the index of the region that is equal to the supplied
     * parameter. Returns -1 if no such region is found.
     */
    Regions.findMatchingRegion = function (regions, region) {
        if (regions == null) {
            return -1;
        }
        for (var i = 0; i < regions.length; i++) {
            if (Regions.regionsEqual(regions[i], region)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Returns the index of the region that wholly contains the supplied
     * parameter. Returns -1 if no such region is found.
     */
    Regions.findContainingRegion = function (regions, region) {
        if (regions == null) {
            return -1;
        }
        for (var i = 0; i < regions.length; i++) {
            if (Regions.regionContains(regions[i], region)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Returns true if the regions contain a region that has FULL_COLUMNS
     * cardinality and contains the specified column index.
     */
    Regions.hasFullColumn = function (regions, col) {
        if (regions == null) {
            return false;
        }
        for (var _i = 0, regions_1 = regions; _i < regions_1.length; _i++) {
            var region = regions_1[_i];
            var cardinality = Regions.getRegionCardinality(region);
            if (cardinality === RegionCardinality.FULL_TABLE) {
                return true;
            }
            if (cardinality === RegionCardinality.FULL_COLUMNS && Regions.intervalContainsIndex(region.cols, col)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns true if the regions contain a region that has FULL_ROWS
     * cardinality and contains the specified row index.
     */
    Regions.hasFullRow = function (regions, row) {
        if (regions == null) {
            return false;
        }
        for (var _i = 0, regions_2 = regions; _i < regions_2.length; _i++) {
            var region = regions_2[_i];
            var cardinality = Regions.getRegionCardinality(region);
            if (cardinality === RegionCardinality.FULL_TABLE) {
                return true;
            }
            if (cardinality === RegionCardinality.FULL_ROWS && Regions.intervalContainsIndex(region.rows, row)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns true if the regions contain a region that has FULL_TABLE cardinality
     */
    Regions.hasFullTable = function (regions) {
        if (regions == null) {
            return false;
        }
        for (var _i = 0, regions_3 = regions; _i < regions_3.length; _i++) {
            var region = regions_3[_i];
            var cardinality = Regions.getRegionCardinality(region);
            if (cardinality === RegionCardinality.FULL_TABLE) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns true if the regions fully contain the query region.
     */
    Regions.containsRegion = function (regions, query) {
        return Regions.overlapsRegion(regions, query, false);
    };
    /**
     * Returns true if the regions at least partially overlap the query region.
     */
    Regions.overlapsRegion = function (regions, query, allowPartialOverlap) {
        if (allowPartialOverlap === void 0) { allowPartialOverlap = false; }
        var intervalCompareFn = allowPartialOverlap ? Regions.intervalOverlaps : Regions.intervalContains;
        if (regions == null || query == null) {
            return false;
        }
        for (var _i = 0, regions_4 = regions; _i < regions_4.length; _i++) {
            var region = regions_4[_i];
            var cardinality = Regions.getRegionCardinality(region);
            switch (cardinality) {
                case RegionCardinality.FULL_TABLE:
                    return true;
                case RegionCardinality.FULL_COLUMNS:
                    if (intervalCompareFn(region.cols, query.cols)) {
                        return true;
                    }
                    continue;
                case RegionCardinality.FULL_ROWS:
                    if (intervalCompareFn(region.rows, query.rows)) {
                        return true;
                    }
                    continue;
                case RegionCardinality.CELLS:
                    if (intervalCompareFn(region.cols, query.cols)
                        && intervalCompareFn(region.rows, query.rows)) {
                        return true;
                    }
                    continue;
                default:
                    break;
            }
        }
        return false;
    };
    Regions.eachUniqueFullColumn = function (regions, iteratee) {
        if (regions == null || regions.length === 0 || iteratee == null) {
            return;
        }
        var seen = {};
        regions.forEach(function (region) {
            if (Regions.getRegionCardinality(region) === RegionCardinality.FULL_COLUMNS) {
                var _a = region.cols, start = _a[0], end = _a[1];
                for (var col = start; col <= end; col++) {
                    if (!seen[col]) {
                        seen[col] = true;
                        iteratee(col);
                    }
                }
            }
        });
    };
    Regions.eachUniqueFullRow = function (regions, iteratee) {
        if (regions == null || regions.length === 0 || iteratee == null) {
            return;
        }
        var seen = {};
        regions.forEach(function (region) {
            if (Regions.getRegionCardinality(region) === RegionCardinality.FULL_ROWS) {
                var _a = region.rows, start = _a[0], end = _a[1];
                for (var row = start; row <= end; row++) {
                    if (!seen[row]) {
                        seen[row] = true;
                        iteratee(row);
                    }
                }
            }
        });
    };
    /**
     * Using the supplied array of non-contiguous `IRegion`s, this method
     * returns an ordered array of every unique cell that exists in those
     * regions.
     */
    Regions.enumerateUniqueCells = function (regions, numRows, numCols) {
        if (regions == null || regions.length === 0) {
            return [];
        }
        var seen = {};
        var list = [];
        for (var _i = 0, regions_5 = regions; _i < regions_5.length; _i++) {
            var region = regions_5[_i];
            Regions.eachCellInRegion(region, numRows, numCols, function (row, col) {
                // add to list if not seen
                var key = row + "-" + col;
                if (seen[key] !== true) {
                    seen[key] = true;
                    list.push([row, col]);
                }
            });
        }
        // sort list by rows then columns
        list.sort(Regions.rowFirstComparator);
        return list;
    };
    /**
     * Using the supplied region, returns an "equivalent" region of
     * type CELLS that define the bounds of the given region
     */
    Regions.getCellRegionFromRegion = function (region, numRows, numCols) {
        var regionCardinality = Regions.getRegionCardinality(region);
        switch (regionCardinality) {
            case RegionCardinality.FULL_TABLE:
                return Regions.cell(0, 0, numRows - 1, numCols - 1);
            case RegionCardinality.FULL_COLUMNS:
                return Regions.cell(0, region.cols[0], numRows - 1, region.cols[1]);
            case RegionCardinality.FULL_ROWS:
                return Regions.cell(region.rows[0], 0, region.rows[1], numCols - 1);
            case RegionCardinality.CELLS:
                return Regions.cell(region.rows[0], region.cols[0], region.rows[1], region.cols[1]);
            default:
                return null;
        }
    };
    /**
     * Maps a dense array of cell coordinates to a sparse 2-dimensional array
     * of cell values.
     *
     * We create a new 2-dimensional array representing the smallest single
     * contiguous `IRegion` that contains all cells in the supplied array. We
     * invoke the mapper callback only on the cells in the supplied coordinate
     * array and store the result. Returns the resulting 2-dimensional array.
     */
    Regions.sparseMapCells = function (cells, mapper) {
        var bounds = Regions.getBoundingRegion(cells);
        if (bounds == null) {
            return null;
        }
        var numRows = bounds.rows[1] + 1 - bounds.rows[0];
        var numCols = bounds.cols[1] + 1 - bounds.cols[0];
        var result = utils_1.Utils.times(numRows, function () { return new Array(numCols); });
        cells.forEach(function (_a) {
            var row = _a[0], col = _a[1];
            result[row - bounds.rows[0]][col - bounds.cols[0]] = mapper(row, col);
        });
        return result;
    };
    /**
     * Returns the smallest single contiguous `IRegion` that contains all cells in the
     * supplied array.
     */
    Regions.getBoundingRegion = function (cells) {
        var minRow;
        var maxRow;
        var minCol;
        var maxCol;
        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
            var _a = cells_1[_i], row = _a[0], col = _a[1];
            minRow = (minRow == null || row < minRow) ? row : minRow;
            maxRow = (maxRow == null || row > maxRow) ? row : maxRow;
            minCol = (minCol == null || col < minCol) ? col : minCol;
            maxCol = (maxCol == null || col > maxCol) ? col : maxCol;
        }
        if (minRow == null) {
            return null;
        }
        return {
            cols: [minCol, maxCol],
            rows: [minRow, maxRow],
        };
    };
    Regions.isValid = function (region) {
        if (region == null) {
            return false;
        }
        if ((region.rows != null) && (region.rows[0] < 0 || region.rows[1] < 0)) {
            return false;
        }
        if ((region.cols != null) && (region.cols[0] < 0 || region.cols[1] < 0)) {
            return false;
        }
        return true;
    };
    Regions.isRegionValidForTable = function (region, numRows, numCols) {
        if (region.rows != null && (region.rows[0] >= numRows || region.rows[1] >= numRows)) {
            return false;
        }
        if (region.cols != null && (region.cols[0] >= numCols || region.cols[1] >= numCols)) {
            return false;
        }
        return true;
    };
    Regions.joinStyledRegionGroups = function (selectedRegions, otherRegions, focusedCell) {
        var regionGroups = [];
        if (otherRegions != null) {
            regionGroups = regionGroups.concat(otherRegions);
        }
        if (selectedRegions != null && selectedRegions.length > 0) {
            regionGroups.push({
                className: Classes.TABLE_SELECTION_REGION,
                regions: selectedRegions,
            });
        }
        if (focusedCell != null) {
            regionGroups.push({
                className: Classes.TABLE_FOCUS_REGION,
                regions: [Regions.cell(focusedCell.row, focusedCell.col)],
            });
        }
        return regionGroups;
    };
    Regions.regionsEqual = function (regionA, regionB) {
        return Regions.intervalsEqual(regionA.rows, regionB.rows)
            && Regions.intervalsEqual(regionA.cols, regionB.cols);
    };
    /**
     * Iterates over the cells within an `IRegion`, invoking the callback with
     * each cell's coordinates.
     */
    Regions.eachCellInRegion = function (region, numRows, numCols, iteratee) {
        var cardinality = Regions.getRegionCardinality(region);
        switch (cardinality) {
            case RegionCardinality.FULL_TABLE:
                for (var row = 0; row < numRows; row++) {
                    for (var col = 0; col < numCols; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            case RegionCardinality.FULL_COLUMNS:
                for (var row = 0; row < numRows; row++) {
                    for (var col = region.cols[0]; col <= region.cols[1]; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            case RegionCardinality.FULL_ROWS:
                for (var row = region.rows[0]; row <= region.rows[1]; row++) {
                    for (var col = 0; col < numCols; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            case RegionCardinality.CELLS:
                for (var row = region.rows[0]; row <= region.rows[1]; row++) {
                    for (var col = region.cols[0]; col <= region.cols[1]; col++) {
                        iteratee(row, col);
                    }
                }
                break;
            default:
                break;
        }
    };
    Regions.regionContains = function (regionA, regionB) {
        // containsRegion expects an array of regions as the first param
        return Regions.overlapsRegion([regionA], regionB, false);
    };
    Regions.intervalsEqual = function (ivalA, ivalB) {
        if (ivalA == null) {
            return ivalB == null;
        }
        else if (ivalB == null) {
            return false;
        }
        else {
            return ivalA[0] === ivalB[0] && ivalA[1] === ivalB[1];
        }
    };
    Regions.intervalContainsIndex = function (interval, index) {
        if (interval == null) {
            return false;
        }
        return interval[0] <= index && interval[1] >= index;
    };
    Regions.intervalContains = function (ivalA, ivalB) {
        if (ivalA == null || ivalB == null) {
            return false;
        }
        return ivalA[0] <= ivalB[0] && ivalB[1] <= ivalA[1];
    };
    Regions.intervalOverlaps = function (ivalA, ivalB) {
        if (ivalA == null || ivalB == null) {
            return false;
        }
        if (ivalA[1] < ivalB[0] || ivalA[0] > ivalB[1]) {
            return false;
        }
        return true;
    };
    Regions.rowFirstComparator = function (a, b) {
        var rowDiff = a[0] - b[0];
        return rowDiff === 0 ? a[1] - b[1] : rowDiff;
    };
    Regions.numericalComparator = function (a, b) {
        return a - b;
    };
    Regions.normalizeInterval = function (coord, coord2) {
        if (coord2 == null) {
            coord2 = coord;
        }
        var interval = [coord, coord2];
        interval.sort(Regions.numericalComparator);
        return interval;
    };
    return Regions;
}());
exports.Regions = Regions;



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Position;
(function (Position) {
    Position[Position["TOP_LEFT"] = 0] = "TOP_LEFT";
    Position[Position["TOP"] = 1] = "TOP";
    Position[Position["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Position[Position["RIGHT_TOP"] = 3] = "RIGHT_TOP";
    Position[Position["RIGHT"] = 4] = "RIGHT";
    Position[Position["RIGHT_BOTTOM"] = 5] = "RIGHT_BOTTOM";
    Position[Position["BOTTOM_RIGHT"] = 6] = "BOTTOM_RIGHT";
    Position[Position["BOTTOM"] = 7] = "BOTTOM";
    Position[Position["BOTTOM_LEFT"] = 8] = "BOTTOM_LEFT";
    Position[Position["LEFT_BOTTOM"] = 9] = "LEFT_BOTTOM";
    Position[Position["LEFT"] = 10] = "LEFT";
    Position[Position["LEFT_TOP"] = 11] = "LEFT_TOP";
})(Position = exports.Position || (exports.Position = {}));
function isPositionHorizontal(position) {
    /* istanbul ignore next */
    return position === Position.TOP || position === Position.TOP_LEFT || position === Position.TOP_RIGHT
        || position === Position.BOTTOM || position === Position.BOTTOM_LEFT || position === Position.BOTTOM_RIGHT;
}
exports.isPositionHorizontal = isPositionHorizontal;
function isPositionVertical(position) {
    /* istanbul ignore next */
    return position === Position.LEFT || position === Position.LEFT_TOP || position === Position.LEFT_BOTTOM
        || position === Position.RIGHT || position === Position.RIGHT_TOP || position === Position.RIGHT_BOTTOM;
}
exports.isPositionVertical = isPositionVertical;



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKSPACE = 8;
exports.TAB = 9;
exports.ENTER = 13;
exports.SHIFT = 16;
exports.ESCAPE = 27;
exports.SPACE = 32;
exports.ARROW_LEFT = 37;
exports.ARROW_UP = 38;
exports.ARROW_RIGHT = 39;
exports.ARROW_DOWN = 40;
exports.DELETE = 46;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(78));
__export(__webpack_require__(40));
__export(__webpack_require__(14));
__export(__webpack_require__(17));
__export(__webpack_require__(41));
var classes = __webpack_require__(3);
var keys = __webpack_require__(15);
var utils = __webpack_require__(5);
exports.Classes = classes;
exports.Keys = keys;
exports.Utils = utils;
// NOTE: Errors is not exported in public API



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
var INVALID_PROPS = [
    "active",
    "containerRef",
    "elementRef",
    "iconName",
    "inputRef",
    "intent",
    "loading",
    "leftIconName",
    "onChildrenMount",
    "onRemove",
    "rightElement",
    "rightIconName",
    "text",
];
/**
 * Typically applied to HTMLElements to filter out blacklisted props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the blacklist (only appropriate for HTMLElements).
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default blacklist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and blacklist together.
 */
function removeNonHTMLProps(props, invalidProps, shouldMerge) {
    if (invalidProps === void 0) { invalidProps = INVALID_PROPS; }
    if (shouldMerge === void 0) { shouldMerge = false; }
    if (shouldMerge) {
        invalidProps = invalidProps.concat(INVALID_PROPS);
    }
    return invalidProps.reduce(function (prev, curr) {
        if (prev.hasOwnProperty(curr)) {
            delete prev[curr];
        }
        return prev;
    }, tslib_1.__assign({}, props));
}
exports.removeNonHTMLProps = removeNonHTMLProps;



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var react_dom_1 = __webpack_require__(12);
var Tether = __webpack_require__(81);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var PosUtils = __webpack_require__(14);
var TetherUtils = __webpack_require__(41);
var Utils = __webpack_require__(5);
var overlay_1 = __webpack_require__(21);
var tooltip_1 = __webpack_require__(31);
var Arrows = __webpack_require__(97);
var SVG_SHADOW_PATH = "M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378" +
    "-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z";
var SVG_ARROW_PATH = "M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005" +
    "c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z";
var SMART_POSITIONING = {
    attachment: "together",
    to: "scrollParent",
};
var PopoverInteractionKind;
(function (PopoverInteractionKind) {
    PopoverInteractionKind[PopoverInteractionKind["CLICK"] = 0] = "CLICK";
    PopoverInteractionKind[PopoverInteractionKind["CLICK_TARGET_ONLY"] = 1] = "CLICK_TARGET_ONLY";
    PopoverInteractionKind[PopoverInteractionKind["HOVER"] = 2] = "HOVER";
    PopoverInteractionKind[PopoverInteractionKind["HOVER_TARGET_ONLY"] = 3] = "HOVER_TARGET_ONLY";
})(PopoverInteractionKind = exports.PopoverInteractionKind || (exports.PopoverInteractionKind = {}));
var Popover = (function (_super) {
    tslib_1.__extends(Popover, _super);
    function Popover(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.hasDarkParent = false;
        // a flag that is set to true while we are waiting for the underlying Portal to complete rendering
        _this.isContentMounting = false;
        _this.refHandlers = {
            popover: function (ref) {
                _this.popoverElement = ref;
                _this.updateTether();
                _this.updateArrowPosition();
            },
            target: function (ref) {
                _this.targetElement = ref;
            },
        };
        _this.handleContentMount = function () {
            if (Utils.isFunction(_this.props.popoverDidOpen) && _this.isContentMounting) {
                _this.props.popoverDidOpen();
                _this.isContentMounting = false;
            }
        };
        _this.handleTargetFocus = function (e) {
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                _this.handleMouseEnter(e);
            }
        };
        _this.handleTargetBlur = function (e) {
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                // if the next element to receive focus is within the popover, we'll want to leave the
                // popover open. we must do this check *after* the next element focuses, so we use a
                // timeout of 0 to flush the rest of the event queue before proceeding.
                _this.setTimeout(function () {
                    var popoverElement = _this.popoverElement;
                    if (popoverElement == null || !popoverElement.contains(document.activeElement)) {
                        _this.handleMouseLeave(e);
                    }
                }, 0);
            }
        };
        _this.handleMouseEnter = function (e) {
            // if we're entering the popover, and the mode is set to be HOVER_TARGET_ONLY, we want to manually
            // trigger the mouse leave event, as hovering over the popover shouldn't count.
            if (_this.props.inline
                && _this.isElementInPopover(e.target)
                && _this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY
                && !_this.props.openOnTargetFocus) {
                _this.handleMouseLeave(e);
            }
            else if (!_this.props.isDisabled) {
                // only begin opening popover when it is enabled
                _this.setOpenState(true, e, _this.props.hoverOpenDelay);
            }
        };
        _this.handleMouseLeave = function (e) {
            // user-configurable closing delay is helpful when moving mouse from target to popover
            _this.setOpenState(false, e, _this.props.hoverCloseDelay);
        };
        _this.handlePopoverClick = function (e) {
            var eventTarget = e.target;
            var shouldDismiss = eventTarget.closest("." + Classes.POPOVER_DISMISS) != null;
            var overrideDismiss = eventTarget.closest("." + Classes.POPOVER_DISMISS_OVERRIDE) != null;
            if (shouldDismiss && !overrideDismiss) {
                _this.setOpenState(false, e);
            }
        };
        _this.handleOverlayClose = function (e) {
            var eventTarget = e.target;
            // if click was in target, target event listener will handle things, so don't close
            if (!Utils.elementIsOrContains(_this.targetElement, eventTarget)
                || e.nativeEvent instanceof KeyboardEvent) {
                _this.setOpenState(false, e);
            }
        };
        _this.handleTargetClick = function (e) {
            // ensure click did not originate from within inline popover before closing
            if (!_this.props.isDisabled && !_this.isElementInPopover(e.target)) {
                if (_this.props.isOpen == null) {
                    _this.setState(function (prevState) { return ({ isOpen: !prevState.isOpen }); });
                }
                else {
                    _this.setOpenState(!_this.props.isOpen, e);
                }
            }
        };
        var isOpen = props.defaultIsOpen && !props.isDisabled;
        if (props.isOpen != null) {
            isOpen = props.isOpen;
        }
        _this.state = {
            isOpen: isOpen,
            ignoreTargetDimensions: false,
            targetHeight: 0,
            targetWidth: 0,
        };
        return _this;
    }
    Popover.prototype.render = function () {
        var className = this.props.className;
        var isOpen = this.state.isOpen;
        var targetProps;
        if (this.isHoverInteractionKind()) {
            targetProps = {
                onBlur: this.handleTargetBlur,
                onFocus: this.handleTargetFocus,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
            };
            // any one of the CLICK* values
        }
        else {
            targetProps = {
                onClick: this.handleTargetClick,
            };
        }
        targetProps.className = classNames(Classes.POPOVER_TARGET, (_a = {},
            _a[Classes.POPOVER_OPEN] = isOpen,
            _a), className);
        targetProps.ref = this.refHandlers.target;
        var children = this.understandChildren();
        var targetTabIndex = this.props.openOnTargetFocus && this.isHoverInteractionKind() ? 0 : undefined;
        var target = React.cloneElement(children.target, 
        // force disable single Tooltip child when popover is open (BLUEPRINT-552)
        (isOpen && children.target.type === tooltip_1.Tooltip)
            ? { isDisabled: true, tabIndex: targetTabIndex }
            : { tabIndex: targetTabIndex });
        var isContentEmpty = (children.content == null);
        if (isContentEmpty && !this.props.isDisabled && isOpen !== false && !Utils.isNodeEnv("production")) {
            console.warn(Errors.POPOVER_WARN_EMPTY_CONTENT);
        }
        return React.createElement(this.props.rootElementTag, targetProps, target, React.createElement(overlay_1.Overlay, { autoFocus: this.props.autoFocus, backdropClassName: Classes.POPOVER_BACKDROP, backdropProps: this.props.backdropProps, canEscapeKeyClose: this.props.canEscapeKeyClose, canOutsideClickClose: this.props.interactionKind === PopoverInteractionKind.CLICK, className: this.props.portalClassName, didOpen: this.handleContentMount, enforceFocus: this.props.enforceFocus, hasBackdrop: this.props.isModal, inline: this.props.inline, isOpen: isOpen && !isContentEmpty, lazy: this.props.lazy, onClose: this.handleOverlayClose, transitionDuration: this.props.transitionDuration, transitionName: Classes.POPOVER }, this.renderPopover(children.content)));
        var _a;
    };
    Popover.prototype.componentDidMount = function () {
        this.componentDOMChange();
    };
    Popover.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        if (nextProps.isOpen == null && nextProps.isDisabled && !this.props.isDisabled) {
            // ok to use setOpenState here because isDisabled and isOpen are mutex.
            this.setOpenState(false);
        }
        else if (nextProps.isOpen !== this.props.isOpen) {
            // propagate isOpen prop directly to state, circumventing onInteraction callback
            // (which would be invoked if this went through setOpenState)
            this.setState({ isOpen: nextProps.isOpen });
        }
    };
    Popover.prototype.componentWillUpdate = function (_, nextState) {
        if (!this.state.isOpen && nextState.isOpen) {
            this.isContentMounting = true;
            Utils.safeInvoke(this.props.popoverWillOpen);
        }
        else if (this.state.isOpen && !nextState.isOpen) {
            Utils.safeInvoke(this.props.popoverWillClose);
        }
    };
    Popover.prototype.componentDidUpdate = function () {
        this.componentDOMChange();
    };
    Popover.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.destroyTether();
    };
    Popover.prototype.validateProps = function (props) {
        if (props.useSmartPositioning || props.constraints != null) {
            console.warn(Errors.POPOVER_WARN_DEPRECATED_CONSTRAINTS);
        }
        if (props.isOpen == null && props.onInteraction != null) {
            console.warn(Errors.POPOVER_WARN_UNCONTROLLED_ONINTERACTION);
        }
        if (props.inline && (props.useSmartPositioning || props.constraints != null || props.tetherOptions != null)) {
            console.warn(Errors.POPOVER_WARN_INLINE_NO_TETHER);
        }
        if (props.isModal && props.inline) {
            console.warn(Errors.POPOVER_WARN_MODAL_INLINE);
        }
        if (props.isModal && props.interactionKind !== PopoverInteractionKind.CLICK) {
            throw new Error(Errors.POPOVER_MODAL_INTERACTION);
        }
        var childrenCount = React.Children.count(props.children);
        var hasContentProp = props.content !== undefined;
        var hasTargetProp = props.target !== undefined;
        if (childrenCount === 0 && !hasTargetProp) {
            throw new Error(Errors.POPOVER_REQUIRES_TARGET);
        }
        if (childrenCount > 2) {
            console.warn(Errors.POPOVER_WARN_TOO_MANY_CHILDREN);
        }
        if (childrenCount > 0 && hasTargetProp) {
            console.warn(Errors.POPOVER_WARN_DOUBLE_TARGET);
        }
        if (childrenCount === 2 && hasContentProp) {
            console.warn(Errors.POPOVER_WARN_DOUBLE_CONTENT);
        }
    };
    Popover.prototype.componentDOMChange = function () {
        if (this.props.useSmartArrowPositioning) {
            this.setState({
                targetHeight: this.targetElement.clientHeight,
                targetWidth: this.targetElement.clientWidth,
            });
        }
        if (!this.props.inline) {
            this.hasDarkParent = this.targetElement.closest("." + Classes.DARK) != null;
            this.updateTether();
        }
    };
    Popover.prototype.renderPopover = function (content) {
        var _a = this.props, inline = _a.inline, interactionKind = _a.interactionKind;
        var popoverHandlers = {
            // always check popover clicks for dismiss class
            onClick: this.handlePopoverClick,
        };
        if ((interactionKind === PopoverInteractionKind.HOVER)
            || (inline && interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY)) {
            popoverHandlers.onMouseEnter = this.handleMouseEnter;
            popoverHandlers.onMouseLeave = this.handleMouseLeave;
        }
        var positionClasses = TetherUtils.getAttachmentClasses(this.props.position).join(" ");
        var containerClasses = classNames(Classes.TRANSITION_CONTAINER, (_b = {}, _b[positionClasses] = inline, _b));
        var popoverClasses = classNames(Classes.POPOVER, (_c = {},
            _c[Classes.DARK] = this.props.inheritDarkTheme && this.hasDarkParent && !inline,
            _c), this.props.popoverClassName);
        var styles = this.getArrowPositionStyles();
        var transform = { transformOrigin: this.getPopoverTransformOrigin() };
        return (React.createElement("div", { className: containerClasses, ref: this.refHandlers.popover, style: styles.container },
            React.createElement("div", tslib_1.__assign({ className: popoverClasses, style: transform }, popoverHandlers),
                React.createElement("div", { className: Classes.POPOVER_ARROW, style: styles.arrow },
                    React.createElement("svg", { viewBox: "0 0 30 30" },
                        React.createElement("path", { className: Classes.POPOVER_ARROW + "-border", d: SVG_SHADOW_PATH }),
                        React.createElement("path", { className: Classes.POPOVER_ARROW + "-fill", d: SVG_ARROW_PATH }))),
                React.createElement("div", { className: Classes.POPOVER_CONTENT }, content))));
        var _b, _c;
    };
    // content and target can be specified as props or as children.
    // this method normalizes the two approaches, preferring child over prop.
    Popover.prototype.understandChildren = function () {
        var _a = this.props, children = _a.children, contentProp = _a.content, targetProp = _a.target;
        // #validateProps asserts that 1 <= children.length <= 2 so content is optional
        var _b = React.Children.toArray(children), targetChild = _b[0], contentChild = _b[1];
        return {
            content: ensureElement(contentChild == null ? contentProp : contentChild),
            target: ensureElement(targetChild == null ? targetProp : targetChild),
        };
    };
    Popover.prototype.getArrowPositionStyles = function () {
        if (this.props.useSmartArrowPositioning) {
            var dimensions = { height: this.state.targetHeight, width: this.state.targetWidth };
            return Arrows.getArrowPositionStyles(this.props.position, this.props.arrowSize, this.state.ignoreTargetDimensions, dimensions, this.props.inline);
        }
        else {
            return {};
        }
    };
    Popover.prototype.getPopoverTransformOrigin = function () {
        // if smart positioning is enabled then we must rely on CSS classes to put transform origin
        // on the correct side and cannot override it in JS. (https://github.com/HubSpot/tether/issues/154)
        if (this.props.useSmartArrowPositioning && !this.props.useSmartPositioning) {
            var dimensions = { height: this.state.targetHeight, width: this.state.targetWidth };
            return Arrows.getPopoverTransformOrigin(this.props.position, this.props.arrowSize, dimensions);
        }
        else {
            return undefined;
        }
    };
    Popover.prototype.updateArrowPosition = function () {
        if (this.popoverElement != null) {
            var arrow = this.popoverElement.getElementsByClassName(Classes.POPOVER_ARROW)[0];
            var centerWidth = (this.state.targetWidth + arrow.clientWidth) / 2;
            var centerHeight = (this.state.targetHeight + arrow.clientHeight) / 2;
            var ignoreWidth = centerWidth > this.popoverElement.clientWidth
                && PosUtils.isPositionHorizontal(this.props.position);
            var ignoreHeight = centerHeight > this.popoverElement.clientHeight
                && PosUtils.isPositionVertical(this.props.position);
            if (!this.state.ignoreTargetDimensions && (ignoreWidth || ignoreHeight)) {
                this.setState({ ignoreTargetDimensions: true });
            }
            else if (this.state.ignoreTargetDimensions && !ignoreWidth && !ignoreHeight) {
                this.setState({ ignoreTargetDimensions: false });
            }
        }
    };
    Popover.prototype.updateTether = function () {
        var _this = this;
        if (this.state.isOpen && !this.props.inline && this.popoverElement != null) {
            var _a = this.props, constraints = _a.constraints, position = _a.position, _b = _a.tetherOptions, tetherOptions = _b === void 0 ? {} : _b, useSmartPositioning = _a.useSmartPositioning;
            // the .pt-popover-target span we wrap the children in won't always be as big as its children
            // so instead, we'll position tether based off of its first child.
            // NOTE: use findDOMNode(this) directly because this.targetElement may not exist yet
            var target = react_dom_1.findDOMNode(this).childNodes[0];
            // constraints is deprecated but must still be supported through tetherOptions until v2.0
            var options = (constraints == null && !useSmartPositioning)
                ? tetherOptions
                : tslib_1.__assign({}, tetherOptions, { constraints: useSmartPositioning ? [SMART_POSITIONING] : constraints });
            var finalTetherOptions = TetherUtils.createTetherOptions(this.popoverElement, target, position, options);
            if (this.tether == null) {
                this.tether = new Tether(finalTetherOptions);
            }
            else {
                this.tether.setOptions(finalTetherOptions);
            }
            // if props.position has just changed, Tether unfortunately positions the popover based
            // on the margins from the previous position. delay a frame for styles to catch up.
            setTimeout(function () { return _this.tether.position(); });
        }
        else {
            this.destroyTether();
        }
    };
    Popover.prototype.destroyTether = function () {
        if (this.tether != null) {
            this.tether.destroy();
        }
    };
    // a wrapper around setState({isOpen}) that will call props.onInteraction instead when in controlled mode.
    // starts a timeout to delay changing the state if a non-zero duration is provided.
    Popover.prototype.setOpenState = function (isOpen, e, timeout) {
        var _this = this;
        // cancel any existing timeout because we have new state
        Utils.safeInvoke(this.cancelOpenTimeout);
        if (timeout > 0) {
            this.cancelOpenTimeout = this.setTimeout(function () { return _this.setOpenState(isOpen, e); }, timeout);
        }
        else {
            if (this.props.isOpen == null) {
                this.setState({ isOpen: isOpen });
            }
            else {
                Utils.safeInvoke(this.props.onInteraction, isOpen);
            }
            if (!isOpen) {
                Utils.safeInvoke(this.props.onClose, e);
            }
        }
    };
    Popover.prototype.isElementInPopover = function (element) {
        return this.popoverElement != null && this.popoverElement.contains(element);
    };
    Popover.prototype.isHoverInteractionKind = function () {
        return this.props.interactionKind === PopoverInteractionKind.HOVER
            || this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY;
    };
    return Popover;
}(abstractComponent_1.AbstractComponent));
Popover.defaultProps = {
    arrowSize: 30,
    className: "",
    defaultIsOpen: false,
    hoverCloseDelay: 300,
    hoverOpenDelay: 150,
    inheritDarkTheme: true,
    inline: false,
    interactionKind: PopoverInteractionKind.CLICK,
    isDisabled: false,
    isModal: false,
    openOnTargetFocus: true,
    popoverClassName: "",
    position: PosUtils.Position.RIGHT,
    rootElementTag: "span",
    transitionDuration: 300,
    useSmartArrowPositioning: true,
    useSmartPositioning: false,
};
Popover.displayName = "Blueprint.Popover";
Popover = tslib_1.__decorate([
    PureRender
], Popover);
exports.Popover = Popover;
/**
 * Converts a react child to an element: non-empty strings or numbers are wrapped in `<span>`;
 * empty strings are discarded.
 */
function ensureElement(child) {
    // wrap text in a <span> so children are always elements
    if (typeof child === "string") {
        // cull whitespace strings
        return child.trim().length > 0 ? React.createElement("span", null, child) : undefined;
    }
    else if (typeof child === "number") {
        return React.createElement("span", null, child);
    }
    else {
        return child;
    }
}
exports.PopoverFactory = React.createFactory(Popover);



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var utils_1 = __webpack_require__(10);
var dragEvents_1 = __webpack_require__(63);
var REATTACH_PROPS_KEYS = [
    "stopPropagation",
    "preventDefault",
];
/**
 * This component provides a simple interface for combined drag and/or click
 * events.
 *
 * Since the mouse interactions for drag and click are overloaded, here are
 * the events that will fire in these cases:
 *
 * A Click Interaction
 * 1. The user presses down on the render element, triggering the onActivate
 *    callback.
 * 2. The user releases the mouse button without moving it, triggering the
 *    onClick callback.
 *
 * A Drag Interaction
 * 1. The user presses down on the render element, triggering the onActivate
 *    callback.
 * 2. The user moves the mouse, triggering the onDragMove callback.
 * 3. The user moves the mouse, triggering the onDragMove callback.
 * 4. The user moves the mouse, triggering the onDragMove callback.
 * 5. The user releases the mouse button, triggering a final onDragMove
 *    callback as well as an onDragEnd callback.
 *
 * If `false` is returned from the onActivate callback, no further events
 * will be fired until the next activation.
 */
var Draggable = (function (_super) {
    tslib_1.__extends(Draggable, _super);
    function Draggable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Draggable.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Draggable.prototype.componentWillReceiveProps = function (nextProps) {
        var propsWhitelist = { include: REATTACH_PROPS_KEYS };
        if (this.events && !utils_1.Utils.shallowCompareKeys(this.props, nextProps, propsWhitelist)) {
            this.events.attach(ReactDOM.findDOMNode(this), nextProps);
        }
    };
    Draggable.prototype.componentDidMount = function () {
        this.events = new dragEvents_1.DragEvents();
        this.events.attach(ReactDOM.findDOMNode(this), this.props);
    };
    Draggable.prototype.componentWillUnmount = function () {
        this.events.detach();
        delete this.events;
    };
    return Draggable;
}(React.Component));
Draggable.defaultProps = {
    preventDefault: true,
    stopPropagation: false,
};
Draggable = tslib_1.__decorate([
    PureRender
], Draggable);
exports.Draggable = Draggable;



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
// HACKHACK: workaround for https://github.com/palantir/tslint/issues/1768
// tslint:disable adjacent-overload-signatures
/**
 * A simple object for storing the client bounds of HTMLElements. Since
 * ClientRects are immutable, this object enables editing and some simple
 * manipulation methods.
 */
var Rect = (function () {
    function Rect(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }
    /**
     * Returns the smallest Rect that entirely contains the supplied rects
     */
    Rect.union = function (anyRect0, anyRect1) {
        var rect0 = Rect.wrap(anyRect0);
        var rect1 = Rect.wrap(anyRect1);
        var top = Math.min(rect0.top, rect1.top);
        var left = Math.min(rect0.left, rect1.left);
        var bottom = Math.max(rect0.top + rect0.height, rect1.top + rect1.height);
        var right = Math.max(rect0.left + rect0.width, rect1.left + rect1.width);
        var height = bottom - top;
        var width = right - left;
        return new Rect(left, top, width, height);
    };
    /**
     * Returns a new Rect that subtracts the origin of the second argument
     * from the first.
     */
    Rect.subtractOrigin = function (anyRect0, anyRect1) {
        var rect0 = Rect.wrap(anyRect0);
        var rect1 = Rect.wrap(anyRect1);
        return new Rect(rect0.left - rect1.left, rect0.top - rect1.top, rect0.width, rect0.height);
    };
    /**
     * Returns the CSS properties representing the absolute positioning of
     * this Rect.
     */
    Rect.style = function (rect) {
        return {
            height: rect.height + "px",
            left: rect.left + "px",
            position: "absolute",
            top: rect.top + "px",
            width: rect.width + "px",
        };
    };
    /**
     * Given a ClientRect or Rect object, returns a Rect object.
     */
    Rect.wrap = function (rect) {
        if (rect instanceof Rect) {
            return rect;
        }
        else {
            return new Rect(rect.left, rect.top, rect.width, rect.height);
        }
    };
    Rect.prototype.subtractOrigin = function (anyRect) {
        return Rect.subtractOrigin(this, anyRect);
    };
    Rect.prototype.union = function (anyRect) {
        return Rect.union(this, anyRect);
    };
    Rect.prototype.style = function () {
        return Rect.style(this);
    };
    Rect.prototype.sizeStyle = function () {
        return {
            height: this.height + "px",
            width: this.width + "px",
        };
    };
    Rect.prototype.containsX = function (clientX) {
        return clientX >= this.left && clientX <= this.left + this.width;
    };
    Rect.prototype.containsY = function (clientY) {
        return clientY >= this.top && clientY <= this.top + this.height;
    };
    return Rect;
}());
Rect.ORIGIN = new Rect(0, 0, 0, 0);
exports.Rect = Rect;



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var CSSTransitionGroup = __webpack_require__(82);
var Classes = __webpack_require__(3);
var Keys = __webpack_require__(15);
var utils_1 = __webpack_require__(5);
var portal_1 = __webpack_require__(46);
var Overlay = Overlay_1 = (function (_super) {
    tslib_1.__extends(Overlay, _super);
    function Overlay(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHandlers = {
            container: function (ref) { return _this.containerElement = ref; },
        };
        _this.bringFocusInsideOverlay = function () {
            var containerElement = _this.containerElement;
            // container ref may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            if (containerElement == null || document.activeElement == null || !_this.props.isOpen) {
                return;
            }
            var isFocusOutsideModal = !containerElement.contains(document.activeElement);
            if (isFocusOutsideModal) {
                // element marked autofocus has higher priority than the other clowns
                var autofocusElement = containerElement.query("[autofocus]");
                var wrapperElement = containerElement.query("[tabindex]");
                if (autofocusElement != null) {
                    autofocusElement.focus();
                }
                else if (wrapperElement != null) {
                    wrapperElement.focus();
                }
            }
        };
        _this.handleBackdropMouseDown = function (e) {
            var _a = _this.props, backdropProps = _a.backdropProps, canOutsideClickClose = _a.canOutsideClickClose, enforceFocus = _a.enforceFocus, onClose = _a.onClose;
            if (canOutsideClickClose) {
                utils_1.safeInvoke(onClose, e);
            }
            if (enforceFocus) {
                // make sure document.activeElement is updated before bringing the focus back
                requestAnimationFrame(function () { return _this.bringFocusInsideOverlay(); });
            }
            utils_1.safeInvoke(backdropProps.onMouseDown, e);
        };
        _this.handleDocumentClick = function (e) {
            var _a = _this.props, isOpen = _a.isOpen, onClose = _a.onClose;
            var eventTarget = e.target;
            var isClickInOverlay = _this.containerElement != null
                && _this.containerElement.contains(eventTarget);
            if (isOpen && _this.props.canOutsideClickClose && !isClickInOverlay) {
                // casting to any because this is a native event
                utils_1.safeInvoke(onClose, e);
            }
        };
        _this.handleContentMount = function () {
            if (_this.props.isOpen) {
                utils_1.safeInvoke(_this.props.didOpen);
            }
            if (_this.props.autoFocus) {
                _this.bringFocusInsideOverlay();
            }
        };
        _this.handleDocumentFocus = function (e) {
            if (_this.props.enforceFocus
                && _this.containerElement != null
                && !_this.containerElement.contains(e.target)) {
                e.stopImmediatePropagation();
                _this.bringFocusInsideOverlay();
            }
        };
        _this.handleKeyDown = function (e) {
            var _a = _this.props, canEscapeKeyClose = _a.canEscapeKeyClose, onClose = _a.onClose;
            if (e.which === Keys.ESCAPE && canEscapeKeyClose) {
                utils_1.safeInvoke(onClose, e);
                // prevent browser-specific escape key behavior (Safari exits fullscreen)
                e.preventDefault();
            }
        };
        _this.state = { hasEverOpened: props.isOpen };
        return _this;
    }
    Overlay.prototype.render = function () {
        // oh snap! no reason to render anything at all if we're being truly lazy
        if (this.props.lazy && !this.state.hasEverOpened) {
            return null;
        }
        var _a = this.props, children = _a.children, className = _a.className, inline = _a.inline, isOpen = _a.isOpen, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
        // add a special class to each child that will automatically set the appropriate
        // CSS position mode under the hood. also, make the container focusable so we can
        // trap focus inside it (via `enforceFocus`).
        var decoratedChildren = React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, Classes.OVERLAY_CONTENT),
                tabIndex: 0,
            });
        });
        var transitionGroup = (React.createElement(CSSTransitionGroup, { transitionAppear: true, transitionAppearTimeout: transitionDuration, transitionEnterTimeout: transitionDuration, transitionLeaveTimeout: transitionDuration, transitionName: transitionName },
            this.maybeRenderBackdrop(),
            isOpen ? decoratedChildren : null));
        var mergedClassName = classNames(Classes.OVERLAY, (_b = {},
            _b[Classes.OVERLAY_OPEN] = isOpen,
            _b[Classes.OVERLAY_INLINE] = inline,
            _b), className);
        var elementProps = {
            className: mergedClassName,
            onKeyDown: this.handleKeyDown,
        };
        if (inline) {
            return React.createElement("span", tslib_1.__assign({}, elementProps, { ref: this.refHandlers.container }), transitionGroup);
        }
        else {
            return (React.createElement(portal_1.Portal, tslib_1.__assign({}, elementProps, { containerRef: this.refHandlers.container, onChildrenMount: this.handleContentMount }), transitionGroup));
        }
        var _b;
    };
    Overlay.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ hasEverOpened: this.state.hasEverOpened || nextProps.isOpen });
    };
    Overlay.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.isOpen && !this.props.isOpen) {
            this.overlayWillClose();
        }
        else if (!prevProps.isOpen && this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.overlayWillClose();
    };
    Overlay.prototype.maybeRenderBackdrop = function () {
        var _a = this.props, backdropClassName = _a.backdropClassName, backdropProps = _a.backdropProps, hasBackdrop = _a.hasBackdrop, isOpen = _a.isOpen;
        if (hasBackdrop && isOpen) {
            return (React.createElement("div", tslib_1.__assign({}, backdropProps, { className: classNames(Classes.OVERLAY_BACKDROP, backdropClassName, backdropProps.className), onMouseDown: this.handleBackdropMouseDown, tabIndex: this.props.canOutsideClickClose ? 0 : null })));
        }
        else {
            return undefined;
        }
    };
    Overlay.prototype.overlayWillClose = function () {
        document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        document.removeEventListener("mousedown", this.handleDocumentClick);
        var openStack = Overlay_1.openStack;
        var stackIndex = openStack.indexOf(this);
        if (stackIndex !== -1) {
            openStack.splice(stackIndex, 1);
            if (openStack.length > 0) {
                var lastOpenedOverlay = Overlay_1.getLastOpened();
                if (lastOpenedOverlay.props.enforceFocus) {
                    document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
                }
            }
            else {
                document.body.classList.remove(Classes.OVERLAY_OPEN);
            }
        }
    };
    Overlay.prototype.overlayWillOpen = function () {
        var openStack = Overlay_1.openStack;
        if (openStack.length > 0) {
            document.removeEventListener("focus", Overlay_1.getLastOpened().handleDocumentFocus, /* useCapture */ true);
        }
        openStack.push(this);
        if (this.props.canOutsideClickClose && !this.props.hasBackdrop) {
            document.addEventListener("mousedown", this.handleDocumentClick);
        }
        if (this.props.enforceFocus) {
            document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        }
        if (this.props.inline) {
            utils_1.safeInvoke(this.props.didOpen);
            if (this.props.autoFocus) {
                this.bringFocusInsideOverlay();
            }
        }
        else if (this.props.hasBackdrop) {
            // add a class to the body to prevent scrolling of content below the overlay
            document.body.classList.add(Classes.OVERLAY_OPEN);
        }
    };
    return Overlay;
}(React.Component));
Overlay.displayName = "Blueprint.Overlay";
Overlay.defaultProps = {
    autoFocus: true,
    backdropProps: {},
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    hasBackdrop: true,
    inline: false,
    isOpen: false,
    lazy: true,
    transitionDuration: 300,
    transitionName: "pt-overlay",
};
Overlay.openStack = [];
Overlay.getLastOpened = function () { return Overlay_1.openStack[Overlay_1.openStack.length - 1]; };
Overlay = Overlay_1 = tslib_1.__decorate([
    PureRender
], Overlay);
exports.Overlay = Overlay;
exports.OverlayFactory = React.createFactory(Overlay);
var Overlay_1;



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(84)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(86)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file
var React = __webpack_require__(0);
var props_1 = __webpack_require__(17);
var abstractButton_1 = __webpack_require__(99);
var Button = (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("button", tslib_1.__assign({ type: "button" }, props_1.removeNonHTMLProps(this.props), this.getCommonButtonProps()), this.renderChildren()));
    };
    return Button;
}(abstractButton_1.AbstractButton));
Button.displayName = "Blueprint.Button";
exports.Button = Button;
exports.ButtonFactory = React.createFactory(Button);
var AnchorButton = (function (_super) {
    tslib_1.__extends(AnchorButton, _super);
    function AnchorButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnchorButton.prototype.render = function () {
        var _a = this.props, href = _a.href, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b;
        var commonProps = this.getCommonButtonProps();
        return (React.createElement("a", tslib_1.__assign({ role: "button" }, props_1.removeNonHTMLProps(this.props), commonProps, { href: commonProps.disabled ? undefined : href, tabIndex: commonProps.disabled ? undefined : tabIndex }), this.renderChildren()));
    };
    return AnchorButton;
}(abstractButton_1.AbstractButton));
AnchorButton.displayName = "Blueprint.AnchorButton";
exports.AnchorButton = AnchorButton;
exports.AnchorButtonFactory = React.createFactory(AnchorButton);



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var common_1 = __webpack_require__(16);
var keyCombo_1 = __webpack_require__(53);
var Hotkey = (function (_super) {
    tslib_1.__extends(Hotkey, _super);
    function Hotkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkey.isInstance = function (element) {
        return element != null && element.type === Hotkey;
    };
    Hotkey.prototype.render = function () {
        var _a = this.props, label = _a.label, spreadableProps = tslib_1.__rest(_a, ["label"]);
        return React.createElement("div", { className: "pt-hotkey" },
            React.createElement("div", { className: "pt-hotkey-label" }, label),
            React.createElement(keyCombo_1.KeyCombo, tslib_1.__assign({}, spreadableProps)));
    };
    Hotkey.prototype.validateProps = function (props) {
        if (props.global !== true && props.group == null) {
            throw new Error("non-global <Hotkey>s must define a group");
        }
    };
    return Hotkey;
}(common_1.AbstractComponent));
Hotkey.defaultProps = {
    allowInInput: false,
    disabled: false,
    global: false,
    preventDefault: false,
    stopPropagation: false,
};
exports.Hotkey = Hotkey;



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var utils_1 = __webpack_require__(10);
var core_1 = __webpack_require__(7);
var loadableContent_1 = __webpack_require__(35);
exports.emptyCellRenderer = function () { return React.createElement(Cell, null); };
var Cell = (function (_super) {
    tslib_1.__extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.shouldComponentUpdate = function (nextProps) {
        // deeply compare "style," because a new but identical object might have been provided.
        return !utils_1.Utils.shallowCompareKeys(this.props, nextProps, { exclude: ["style"] })
            || !utils_1.Utils.deepCompareKeys(this.props.style, nextProps.style);
    };
    Cell.prototype.render = function () {
        var _a = this.props, style = _a.style, intent = _a.intent, interactive = _a.interactive, loading = _a.loading, tooltip = _a.tooltip, truncated = _a.truncated, className = _a.className, wrapText = _a.wrapText;
        var classes = classNames(Classes.TABLE_CELL, core_1.Classes.intentClass(intent), (_b = {},
            _b[Classes.TABLE_CELL_INTERACTIVE] = interactive,
            _b[core_1.Classes.LOADING] = loading,
            _b[Classes.TABLE_TRUNCATED_CELL] = truncated,
            _b), className);
        var textClasses = classNames((_c = {},
            _c[Classes.TABLE_TRUNCATED_TEXT] = truncated,
            _c[Classes.TABLE_NO_WRAP_TEXT] = !wrapText,
            _c));
        var content = React.createElement("div", { className: textClasses }, this.props.children);
        return (React.createElement("div", { className: classes, style: style, title: tooltip },
            React.createElement(loadableContent_1.LoadableContent, { loading: loading, variableLength: true }, content)));
        var _b, _c;
    };
    return Cell;
}(React.Component));
Cell.defaultProps = {
    truncated: true,
    wrapText: false,
};
exports.Cell = Cell;



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var draggable_1 = __webpack_require__(19);
var Orientation;
(function (Orientation) {
    Orientation[Orientation["HORIZONTAL"] = 1] = "HORIZONTAL";
    Orientation[Orientation["VERTICAL"] = 0] = "VERTICAL";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var ResizeHandle = (function (_super) {
    tslib_1.__extends(ResizeHandle, _super);
    function ResizeHandle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isDragging: false,
        };
        _this.handleActivate = function (event) {
            _this.setState({ isDragging: true });
            _this.props.onLayoutLock(true);
            event.stopPropagation();
            event.stopImmediatePropagation();
            return true;
        };
        _this.handleDragMove = function (_event, coords) {
            var orientationIndex = _this.props.orientation;
            if (_this.props.onResizeMove != null) {
                _this.props.onResizeMove(coords.offset[orientationIndex], coords.delta[orientationIndex]);
            }
        };
        _this.handleDragEnd = function (_event, coords) {
            var orientationIndex = _this.props.orientation;
            _this.setState({ isDragging: false });
            _this.props.onLayoutLock(false);
            if (_this.props.onResizeMove != null) {
                _this.props.onResizeMove(coords.offset[orientationIndex], coords.delta[orientationIndex]);
            }
            if (_this.props.onResizeEnd != null) {
                _this.props.onResizeEnd(coords.offset[orientationIndex]);
            }
        };
        _this.handleClick = function (_event) {
            _this.setState({ isDragging: false });
            _this.props.onLayoutLock(false);
        };
        _this.handleDoubleClick = function (_event) {
            _this.setState({ isDragging: false });
            _this.props.onLayoutLock(false);
            if (_this.props.onDoubleClick != null) {
                _this.props.onDoubleClick();
            }
        };
        return _this;
    }
    ResizeHandle.prototype.render = function () {
        var _a = this.props, onResizeMove = _a.onResizeMove, onResizeEnd = _a.onResizeEnd, onDoubleClick = _a.onDoubleClick, orientation = _a.orientation;
        if (onResizeMove == null && onResizeEnd == null && onDoubleClick == null) {
            return undefined;
        }
        var targetClasses = classNames(Classes.TABLE_RESIZE_HANDLE_TARGET, (_b = {},
            _b[Classes.TABLE_DRAGGING] = this.state.isDragging,
            _b[Classes.TABLE_RESIZE_HORIZONTAL] = orientation === Orientation.HORIZONTAL,
            _b[Classes.TABLE_RESIZE_VERTICAL] = orientation === Orientation.VERTICAL,
            _b));
        var handleClasses = classNames(Classes.TABLE_RESIZE_HANDLE, (_c = {},
            _c[Classes.TABLE_DRAGGING] = this.state.isDragging,
            _c));
        return (React.createElement(draggable_1.Draggable, { onActivate: this.handleActivate, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick, onDragEnd: this.handleDragEnd, onDragMove: this.handleDragMove },
            React.createElement("div", { className: targetClasses },
                React.createElement("div", { className: handleClasses }))));
        var _b, _c;
    };
    return ResizeHandle;
}(React.Component));
ResizeHandle = tslib_1.__decorate([
    PureRender
], ResizeHandle);
exports.ResizeHandle = ResizeHandle;



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(28);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var position_1 = __webpack_require__(14);
var popover_1 = __webpack_require__(18);
var Tooltip = (function (_super) {
    tslib_1.__extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, children = _a.children, intent = _a.intent, openOnTargetFocus = _a.openOnTargetFocus, tooltipClassName = _a.tooltipClassName;
        var classes = classNames(Classes.TOOLTIP, Classes.intentClass(intent), tooltipClassName);
        return (React.createElement(popover_1.Popover, tslib_1.__assign({}, this.props, { arrowSize: 22, autoFocus: false, canEscapeKeyClose: false, enforceFocus: false, interactionKind: popover_1.PopoverInteractionKind.HOVER_TARGET_ONLY, lazy: true, openOnTargetFocus: openOnTargetFocus, popoverClassName: classes }), children));
    };
    return Tooltip;
}(React.Component));
Tooltip.defaultProps = {
    hoverCloseDelay: 0,
    hoverOpenDelay: 100,
    isDisabled: false,
    openOnTargetFocus: true,
    position: position_1.Position.TOP,
    rootElementTag: "span",
    transitionDuration: 100,
    useSmartArrowPositioning: true,
    useSmartPositioning: false,
};
Tooltip.displayName = "Blueprint.Tooltip";
Tooltip = tslib_1.__decorate([
    PureRender
], Tooltip);
exports.Tooltip = Tooltip;
exports.TooltipFactory = React.createFactory(Tooltip);



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var utils_1 = __webpack_require__(5);
// see http://stackoverflow.com/a/18473154/3124288 for calculating arc path
var SPINNER_TRACK = "M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89";
// unitless total length of SVG path, to which stroke-dash* properties are relative.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
// this value is the result of `<path d={SPINNER_TRACK} />.getTotalLength()` and works in all browsers:
var PATH_LENGTH = 280;
var Spinner = (function (_super) {
    tslib_1.__extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = classNames(Classes.SPINNER, Classes.intentClass(intent), {
            "pt-no-spin": value != null,
        }, className);
        var style = {
            strokeDasharray: PATH_LENGTH + " " + PATH_LENGTH,
            // default to quarter-circle when indeterminate
            // IE11: CSS transitions on SVG elements are Not Supported :(
            strokeDashoffset: PATH_LENGTH - PATH_LENGTH * (value == null ? 0.25 : utils_1.clamp(value, 0, 1)),
        };
        // HACKHACK to temporarily squash error regarding React.SVGProps missing prop pathLength
        var headElement = React.createElement("path", {
            className: "pt-spinner-head",
            d: SPINNER_TRACK,
            pathLength: PATH_LENGTH,
            style: style,
        });
        return this.renderContainer(classes, React.createElement("svg", { viewBox: classes.indexOf(Classes.SMALL) >= 0 ? "-15 -15 130 130" : "0 0 100 100" },
            React.createElement("path", { className: "pt-spinner-track", d: SPINNER_TRACK }),
            headElement));
    };
    // abstract away the container elements so SVGSpinner can do its own thing
    Spinner.prototype.renderContainer = function (classes, content) {
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: "pt-spinner-svg-container" }, content)));
    };
    return Spinner;
}(React.Component));
Spinner.displayName = "Blueprint.Spinner";
Spinner = tslib_1.__decorate([
    PureRender
], Spinner);
exports.Spinner = Spinner;
exports.SpinnerFactory = React.createFactory(Spinner);



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var Menu = (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return (React.createElement("ul", { className: classNames(Classes.MENU, this.props.className), ref: this.props.ulRef }, this.props.children));
    };
    return Menu;
}(React.Component));
Menu.displayName = "Blueprint.Menu";
exports.Menu = Menu;
exports.MenuFactory = React.createFactory(Menu);



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyCodes = {
    8: "backspace",
    9: "tab",
    13: "enter",
    20: "capslock",
    27: "esc",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "ins",
    46: "del",
    // number keys
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    // alphabet
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    // punctuation
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "\'",
};
exports.Modifiers = {
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "meta",
    93: "meta",
    224: "meta",
};
exports.ModifierBitMasks = {
    alt: 1,
    ctrl: 2,
    meta: 4,
    shift: 8,
};
exports.Aliases = {
    cmd: "meta",
    command: "meta",
    escape: "esc",
    minus: "-",
    mod: ((typeof navigator !== "undefined") && /Mac|iPod|iPhone|iPad/.test(navigator.platform)) ? "meta" : "ctrl",
    option: "alt",
    plus: "+",
    return: "enter",
    win: "meta",
};
// alph sorting is unintuitive here
// tslint:disable object-literal-sort-keys
exports.ShiftKeys = {
    "~": "`",
    "!": "1",
    "@": "2",
    "#": "3",
    "$": "4",
    "%": "5",
    "^": "6",
    "&": "7",
    "*": "8",
    "(": "9",
    ")": "0",
    "_": "-",
    "+": "=",
    "{": "[",
    "}": "]",
    "|": "\\",
    ":": ";",
    "\"": "\'",
    "<": ",",
    ">": ".",
    "?": "/",
};
// tslint:enable object-literal-sort-keys
/* tslint:enable:object-literal-key-quotes */
// Function keys
for (var i = 1; i <= 12; ++i) {
    exports.KeyCodes[111 + i] = "f" + i;
}
// Numpad
for (var i = 0; i <= 9; ++i) {
    exports.KeyCodes[96 + i] = "num" + i.toString();
}
function comboMatches(a, b) {
    return a.modifiers === b.modifiers && a.key === b.key;
}
exports.comboMatches = comboMatches;
/**
 * Converts a key combo string into a key combo object. Key combos include
 * zero or more modifier keys, such as `shift` or `alt`, and exactly one
 * action key, such as `A`, `enter`, or `left`.
 *
 * For action keys that require a shift, e.g. `@` or `|`, we inlude the
 * necessary `shift` modifier and automatically convert the action key to the
 * unshifted version. For example, `@` is equivalent to `shift+2`.
 */
exports.parseKeyCombo = function (combo) {
    var pieces = combo.replace(/\s/g, "").toLowerCase().split("+");
    var modifiers = 0;
    var key = null;
    for (var _i = 0, pieces_1 = pieces; _i < pieces_1.length; _i++) {
        var piece = pieces_1[_i];
        if (piece === "") {
            throw new Error("Failed to parse key combo \"" + combo + "\".\n                Valid key combos look like \"cmd + plus\", \"shift+p\", or \"!\"");
        }
        if (exports.Aliases[piece] != null) {
            piece = exports.Aliases[piece];
        }
        if (exports.ModifierBitMasks[piece] != null) {
            modifiers += exports.ModifierBitMasks[piece];
        }
        else if (exports.ShiftKeys[piece] != null) {
            // tslint:disable-next-line no-string-literal
            modifiers += exports.ModifierBitMasks["shift"];
            key = exports.ShiftKeys[piece];
        }
        else {
            key = piece.toLowerCase();
        }
    }
    return { modifiers: modifiers, key: key };
};
/**
 * PhantomJS's webkit totally messes up keyboard events, so we have do this
 * fancy little dance with the event data to determine which key was pressed
 * for unit tests.
 */
var normalizeKeyCode = function (e) {
    return (e.which === 0 && e.key != null) ? e.key.charCodeAt(0) : e.which;
};
/**
 * Converts a keyboard event into a valid combo prop string
 */
exports.getKeyComboString = function (e) {
    var keys = [];
    // modifiers first
    if (e.ctrlKey) {
        keys.push("ctrl");
    }
    if (e.altKey) {
        keys.push("alt");
    }
    if (e.shiftKey) {
        keys.push("shift");
    }
    if (e.metaKey) {
        keys.push("meta");
    }
    var which = normalizeKeyCode(e);
    if (exports.Modifiers[which] != null) {
        // no action key
    }
    else if (exports.KeyCodes[which] != null) {
        keys.push(exports.KeyCodes[which]);
    }
    else {
        keys.push(String.fromCharCode(which).toLowerCase());
    }
    // join keys with plusses
    return keys.join(" + ");
};
/**
 * Determines the key combo object from the given keyboard event. Again, a key
 * combo includes zero or more modifiers (represented by a bitmask) and one
 * action key, which we determine from the `e.which` property of the keyboard
 * event.
 */
exports.getKeyCombo = function (e) {
    var key = null;
    var which = normalizeKeyCode(e);
    if (exports.Modifiers[which] != null) {
        // keep key null
    }
    else if (exports.KeyCodes[which] != null) {
        key = exports.KeyCodes[which];
    }
    else {
        key = String.fromCharCode(which).toLowerCase();
    }
    var modifiers = 0;
    // tslint:disable no-string-literal
    if (e.altKey) {
        modifiers += exports.ModifierBitMasks["alt"];
    }
    if (e.ctrlKey) {
        modifiers += exports.ModifierBitMasks["ctrl"];
    }
    if (e.metaKey) {
        modifiers += exports.ModifierBitMasks["meta"];
    }
    if (e.shiftKey) {
        modifiers += exports.ModifierBitMasks["shift"];
    }
    // tslint:enable
    return { modifiers: modifiers, key: key };
};
/**
 * Splits a key combo string into its constituent key values and looks up
 * aliases, such as `return` -> `enter`.
 *
 * Unlike the parseKeyCombo method, this method does NOT convert shifted
 * action keys. So `"@"` will NOT be converted to `["shift", "2"]`).
 */
exports.normalizeKeyCombo = function (combo) {
    var keys = combo.replace(/\s/g, "").split("+");
    return keys.map(function (key) { return exports.Aliases[key] != null ? exports.Aliases[key] : key; });
};
/* tslint:enable:no-string-literal */



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var core_1 = __webpack_require__(7);
// This class expects a single, non-string child.
var LoadableContent = (function (_super) {
    tslib_1.__extends(LoadableContent, _super);
    function LoadableContent(props) {
        var _this = _super.call(this, props) || this;
        _this.style = _this.calculateStyle(props.variableLength);
        return _this;
    }
    LoadableContent.prototype.componentWillReceiveProps = function (nextProps) {
        if (!this.props.loading && nextProps.loading || this.props.variableLength !== nextProps.variableLength) {
            this.style = this.calculateStyle(nextProps.variableLength);
        }
    };
    LoadableContent.prototype.render = function () {
        if (this.props.loading) {
            return React.createElement("div", { className: core_1.Classes.SKELETON, style: this.style });
        }
        return React.Children.only(this.props.children);
    };
    LoadableContent.prototype.calculateStyle = function (variableLength) {
        var skeletonLength = variableLength ? 75 - Math.floor(Math.random() * 11) * 5 : 100;
        return { width: skeletonLength + "%" };
    };
    return LoadableContent;
}(React.Component));
LoadableContent = tslib_1.__decorate([
    PureRender
], LoadableContent);
exports.LoadableContent = LoadableContent;



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var clipboard_1 = __webpack_require__(37);
exports.Clipboard = clipboard_1.Clipboard;
var grid_1 = __webpack_require__(66);
exports.Grid = grid_1.Grid;
var rect_1 = __webpack_require__(20);
exports.Rect = rect_1.Rect;
var roundSize_1 = __webpack_require__(132);
exports.RoundSize = roundSize_1.RoundSize;
var utils_1 = __webpack_require__(10);
exports.Utils = utils_1.Utils;
// NOTE: Errors is not exported in public API



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next */
exports.Clipboard = {
    /**
     * Overrides the inherited CSS of the element to make sure it is
     * selectable. This method also makes the element pseudo-invisible.
     */
    applySelectableStyles: function (elem) {
        elem.style.overflow = "hidden";
        elem.style.height = "0px";
        elem.style.setProperty("-webkit-user-select", "all");
        elem.style.setProperty("-moz-user-select", "all");
        elem.style.setProperty("-ms-user-select", "all");
        elem.style.setProperty("user-select", "all");
        return elem;
    },
    /**
     * Copies table cells to the clipboard. The parameter is a row-major
     * 2-dimensional `Array` of strings and can contain nulls. We assume all
     * rows are the same length. If not, the cells will still be copied, but
     * the columns may not align. Returns a boolean indicating whether the
     * copy succeeded.
     *
     * See `Clipboard.copy`
     */
    copyCells: function (cells) {
        var table = document.createElement("table");
        exports.Clipboard.applySelectableStyles(table);
        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
            var row = cells_1[_i];
            var tr = table.appendChild(document.createElement("tr"));
            for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
                var cell = row_1[_a];
                var td = tr.appendChild(document.createElement("td"));
                td.textContent = cell;
            }
        }
        var tsv = cells.map(function (row) { return row.join("\t"); }).join("\n");
        return exports.Clipboard.copyElement(table, tsv);
    },
    /**
     * Copies the text to the clipboard. Returns a boolean
     * indicating whether the copy succeeded.
     *
     * See `Clipboard.copy`
     */
    copyString: function (value) {
        var text = document.createElement("textarea");
        exports.Clipboard.applySelectableStyles(text);
        text.value = value;
        return exports.Clipboard.copyElement(text, value);
    },
    /**
     * Copies the element and its children to the clipboard. Returns a boolean
     * indicating whether the copy succeeded.
     *
     * If a plaintext argument is supplied, we add both the text/html and
     * text/plain mime types to the clipboard. This preserves the built in
     * semantics of copying elements to the clipboard while allowing custom
     * plaintext output for programs that can't cope with HTML data in the
     * clipboard.
     *
     * Verified on Firefox 47, Chrome 51.
     *
     * Note: Sometimes the copy does not succeed. Presumably, in order to
     * prevent memory issues, browsers will limit the total amount of data you
     * can copy to the clipboard. Based on ad hoc testing, we found an
     * inconsistent limit at about 300KB or 40,000 cells. Depending on the on
     * the content of cells, your limits may vary.
     */
    copyElement: function (elem, plaintext) {
        if (!exports.Clipboard.isCopySupported()) {
            return false;
        }
        // must be document.body instead of document.documentElement for firefox
        document.body.appendChild(elem);
        try {
            window.getSelection().selectAllChildren(elem);
            if (plaintext != null) {
                // add plaintext fallback
                // http://stackoverflow.com/questions/23211018/copy-to-clipboard-with-jquery-js-in-chrome
                elem.addEventListener("copy", function (e) {
                    e.preventDefault();
                    var clipboardData = e.clipboardData || window.clipboardData;
                    if (clipboardData != null) {
                        clipboardData.setData("text/html", elem.outerHTML);
                        clipboardData.setData("text/plain", plaintext);
                    }
                });
            }
            return document.execCommand("copy");
        }
        catch (err) {
            return false;
        }
        finally {
            document.body.removeChild(elem);
        }
    },
    /**
     * Returns a boolean indicating whether the current browser nominally
     * supports the `copy` operation using the `execCommand` API.
     */
    isCopySupported: function () {
        return document.queryCommandSupported != null && document.queryCommandSupported("copy");
    },
};



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(7);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var utils_1 = __webpack_require__(10);
var dragEvents_1 = __webpack_require__(63);
var draggable_1 = __webpack_require__(19);
var regions_1 = __webpack_require__(11);
var DragSelectable = (function (_super) {
    tslib_1.__extends(DragSelectable, _super);
    function DragSelectable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.didExpandSelectionOnActivate = false;
        _this.handleActivate = function (event) {
            if (_this.shouldIgnoreMouseDown(event)) {
                return false;
            }
            var region = _this.props.locateClick(event);
            if (!regions_1.Regions.isValid(region)) {
                return false;
            }
            var _a = _this.props, onSelection = _a.onSelection, selectedRegions = _a.selectedRegions, selectedRegionTransform = _a.selectedRegionTransform;
            var focusCellCoordinates = regions_1.Regions.getFocusCellCoordinatesFromRegion(region);
            if (selectedRegionTransform != null) {
                region = selectedRegionTransform(region, event);
            }
            var foundIndex = regions_1.Regions.findMatchingRegion(selectedRegions, region);
            if (foundIndex !== -1) {
                // If re-clicking on an existing region, we either carefully
                // remove it if the meta key is used or otherwise we clear the
                // selection entirely.
                if (dragEvents_1.DragEvents.isAdditive(event)) {
                    var newSelectedRegions = selectedRegions.slice();
                    newSelectedRegions.splice(foundIndex, 1);
                    onSelection(newSelectedRegions);
                }
                else {
                    onSelection([]);
                }
                var fullFocusCellCoordinates_1 = {
                    col: focusCellCoordinates.col,
                    focusSelectionIndex: null,
                    row: focusCellCoordinates.row,
                };
                _this.props.onFocus(fullFocusCellCoordinates_1);
                return false;
            }
            var focusSelectionIndex = null;
            if (event.shiftKey && selectedRegions.length > 0) {
                _this.didExpandSelectionOnActivate = true;
                onSelection(expandSelectedRegions(selectedRegions, region));
                focusSelectionIndex = 0;
            }
            else if (dragEvents_1.DragEvents.isAdditive(event) && _this.props.allowMultipleSelection) {
                onSelection(regions_1.Regions.add(selectedRegions, region));
                // the focus should be in the newly created region,
                // which is at index of the current list of regions plus one,
                // which is the length of the current list of regions
                focusSelectionIndex = selectedRegions.length;
            }
            else {
                onSelection([region]);
                focusSelectionIndex = 0;
            }
            var fullFocusCellCoordinates = {
                col: focusCellCoordinates.col,
                focusSelectionIndex: focusSelectionIndex,
                row: focusCellCoordinates.row,
            };
            _this.props.onFocus(fullFocusCellCoordinates);
            return true;
        };
        _this.handleDragMove = function (event, coords) {
            var nextSelectedRegions = _this.getDragSelectedRegions(event, coords);
            if (nextSelectedRegions == null) {
                return;
            }
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            if (!_this.props.allowMultipleSelection) {
                // have the focused cell follow the selected region
                var mostRecentRegion = nextSelectedRegions[nextSelectedRegions.length - 1];
                var focusCellCoordinates = regions_1.Regions.getFocusCellCoordinatesFromRegion(mostRecentRegion);
                var fullFocusCellCoordinates = {
                    col: focusCellCoordinates.col,
                    focusSelectionIndex: nextSelectedRegions.length - 1,
                    row: focusCellCoordinates.row,
                };
                _this.props.onFocus(fullFocusCellCoordinates);
            }
        };
        _this.handleDragEnd = function (event, coords) {
            var nextSelectedRegions = _this.getDragSelectedRegions(event, coords);
            if (nextSelectedRegions == null) {
                return;
            }
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            core_1.Utils.safeInvoke(_this.props.onSelectionEnd, nextSelectedRegions);
            _this.finishInteraction();
        };
        _this.handleClick = function (event) {
            if (_this.shouldIgnoreMouseDown(event)) {
                return false;
            }
            var region = _this.props.locateClick(event);
            var selectedRegions = _this.props.selectedRegions;
            if (!regions_1.Regions.isValid(region)) {
                _this.maybeInvokeSelectionCallback([]);
                core_1.Utils.safeInvoke(_this.props.onSelectionEnd, []);
                return false;
            }
            if (_this.props.selectedRegionTransform != null) {
                region = _this.props.selectedRegionTransform(region, event);
            }
            var nextSelectedRegions;
            if (_this.didExpandSelectionOnActivate) {
                // we already expanded the selection in handleActivate,
                // so we don't want to overwrite it here
                nextSelectedRegions = selectedRegions;
            }
            else if (selectedRegions.length > 0) {
                nextSelectedRegions = regions_1.Regions.update(selectedRegions, region);
            }
            else {
                nextSelectedRegions = [region];
            }
            _this.maybeInvokeSelectionCallback(nextSelectedRegions);
            core_1.Utils.safeInvoke(_this.props.onSelectionEnd, nextSelectedRegions);
            _this.finishInteraction();
            return false;
        };
        _this.finishInteraction = function () {
            _this.didExpandSelectionOnActivate = false;
        };
        return _this;
    }
    DragSelectable.prototype.render = function () {
        var draggableProps = this.getDraggableProps();
        return (React.createElement(draggable_1.Draggable, tslib_1.__assign({}, draggableProps, { preventDefault: false }), this.props.children));
    };
    DragSelectable.prototype.getDraggableProps = function () {
        return this.props.onSelection == null ? {} : {
            onActivate: this.handleActivate,
            onClick: this.handleClick,
            onDragEnd: this.handleDragEnd,
            onDragMove: this.handleDragMove,
        };
    };
    DragSelectable.prototype.shouldIgnoreMouseDown = function (event) {
        var _a = this.props.ignoredSelectors, ignoredSelectors = _a === void 0 ? [] : _a;
        var element = event.target;
        return !utils_1.Utils.isLeftClick(event)
            || this.props.disabled
            || ignoredSelectors.some(function (selector) { return element.closest(selector) != null; });
    };
    DragSelectable.prototype.getDragSelectedRegions = function (event, coords) {
        var _a = this.props, selectedRegions = _a.selectedRegions, selectedRegionTransform = _a.selectedRegionTransform;
        var region = this.props.allowMultipleSelection
            ? this.props.locateDrag(event, coords)
            : this.props.locateClick(event);
        if (!regions_1.Regions.isValid(region)) {
            return undefined;
        }
        if (selectedRegionTransform != null) {
            region = selectedRegionTransform(region, event, coords);
        }
        return this.didExpandSelectionOnActivate
            ? expandSelectedRegions(selectedRegions, region)
            : regions_1.Regions.update(selectedRegions, region);
    };
    DragSelectable.prototype.maybeInvokeSelectionCallback = function (nextSelectedRegions) {
        var selectedRegions = this.props.selectedRegions;
        // invoke only if the selection changed
        if (!utils_1.Utils.deepCompareKeys(selectedRegions, nextSelectedRegions)) {
            this.props.onSelection(nextSelectedRegions);
        }
    };
    return DragSelectable;
}(React.Component));
DragSelectable = tslib_1.__decorate([
    PureRender
], DragSelectable);
exports.DragSelectable = DragSelectable;
function expandSelectedRegions(regions, region) {
    if (regions.length === 0) {
        return [region];
    }
    var lastRegion = regions[regions.length - 1];
    var lastRegionCardinality = regions_1.Regions.getRegionCardinality(lastRegion);
    var regionCardinality = regions_1.Regions.getRegionCardinality(region);
    if (regionCardinality !== lastRegionCardinality) {
        // TODO: add proper handling for expanding regions from one cardinality to another depending
        // on the focused cell (see: https://github.com/palantir/blueprint/issues/823). for now,
        // just return the new region by itself.
        return [region];
    }
    // simplified algorithm: expand the most recently selected region, and clear all others.
    // TODO: pass the current focused cell into DragSelectable via props, then update this logic
    // to leverage the focus cell's coordinates appropriately.
    // (see: https://github.com/palantir/blueprint/issues/823)
    if (regionCardinality === regions_1.RegionCardinality.FULL_ROWS) {
        var rowStart = Math.min(lastRegion.rows[0], region.rows[0]);
        var rowEnd = Math.max(lastRegion.rows[1], region.rows[1]);
        return [regions_1.Regions.row(rowStart, rowEnd)];
    }
    else if (regionCardinality === regions_1.RegionCardinality.FULL_COLUMNS) {
        var colStart = Math.min(lastRegion.cols[0], region.cols[0]);
        var colEnd = Math.max(lastRegion.cols[1], region.cols[1]);
        return [regions_1.Regions.column(colStart, colEnd)];
    }
    else if (regionCardinality === regions_1.RegionCardinality.CELLS) {
        var rowStart = Math.min(lastRegion.rows[0], region.rows[0]);
        var colStart = Math.min(lastRegion.cols[0], region.cols[0]);
        var rowEnd = Math.max(lastRegion.rows[1], region.rows[1]);
        var colEnd = Math.max(lastRegion.cols[1], region.cols[1]);
        return [regions_1.Regions.cell(rowStart, colStart, rowEnd, colEnd)];
    }
    else {
        // if we've selected the FULL_TABLE, no need to expand it further.
        return [region];
    }
}



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var core_1 = __webpack_require__(7);
var Classes = __webpack_require__(6);
var Errors = __webpack_require__(68);
var loadableContent_1 = __webpack_require__(35);
var headerCell_1 = __webpack_require__(69);
function HorizontalCellDivider() {
    return React.createElement("div", { className: Classes.TABLE_HORIZONTAL_CELL_DIVIDER });
}
exports.HorizontalCellDivider = HorizontalCellDivider;
var ColumnHeaderCell = (function (_super) {
    tslib_1.__extends(ColumnHeaderCell, _super);
    function ColumnHeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        _this.handlePopoverDidOpen = function () {
            _this.setState({ isActive: true });
        };
        _this.handlePopoverWillClose = function () {
            _this.setState({ isActive: false });
        };
        return _this;
    }
    /**
     * This method determines if a `MouseEvent` was triggered on a target that
     * should be used as the header click/drag target. This enables users of
     * this component to render fully interactive components in their header
     * cells without worry of selection or resize operations from capturing
     * their mouse events.
     */
    ColumnHeaderCell.isHeaderMouseTarget = function (target) {
        return target.classList.contains(Classes.TABLE_HEADER)
            || target.classList.contains(Classes.TABLE_COLUMN_NAME)
            || target.classList.contains(Classes.TABLE_INTERACTION_BAR)
            || target.classList.contains(Classes.TABLE_HEADER_CONTENT);
    };
    ColumnHeaderCell.prototype.render = function () {
        var _a = this.props, 
        // from IColumnHeaderCellProps
        isColumnReorderable = _a.isColumnReorderable, isColumnSelected = _a.isColumnSelected, menuIconName = _a.menuIconName, 
        // from IColumnNameProps
        name = _a.name, renderName = _a.renderName, useInteractionBar = _a.useInteractionBar, 
        // from IHeaderProps
        spreadableProps = tslib_1.__rest(_a, ["isColumnReorderable", "isColumnSelected", "menuIconName", "name", "renderName", "useInteractionBar"]);
        return (React.createElement(headerCell_1.HeaderCell, tslib_1.__assign({ isReorderable: this.props.isColumnReorderable, isSelected: this.props.isColumnSelected }, spreadableProps),
            this.renderName(),
            this.maybeRenderContent(),
            this.props.loading ? undefined : this.props.resizeHandle));
    };
    ColumnHeaderCell.prototype.validateProps = function (nextProps) {
        if (nextProps.menu != null) {
            // throw this warning from the publicly exported, higher-order *HeaderCell components
            // rather than HeaderCell, so consumers know exactly which components are receiving the
            // offending prop
            console.warn(Errors.COLUMN_HEADER_CELL_MENU_DEPRECATED);
        }
    };
    ColumnHeaderCell.prototype.renderName = function () {
        var _a = this.props, index = _a.index, loading = _a.loading, name = _a.name, renderName = _a.renderName, useInteractionBar = _a.useInteractionBar;
        var dropdownMenu = this.maybeRenderDropdownMenu();
        var defaultName = React.createElement("div", { className: Classes.TABLE_TRUNCATED_TEXT }, name);
        var nameComponent = (React.createElement(loadableContent_1.LoadableContent, { loading: loading, variableLength: true }, renderName == null ? defaultName : renderName(name, index)));
        if (useInteractionBar) {
            return (React.createElement("div", { className: Classes.TABLE_COLUMN_NAME, title: name },
                React.createElement("div", { className: Classes.TABLE_INTERACTION_BAR },
                    this.props.reorderHandle,
                    dropdownMenu),
                React.createElement(HorizontalCellDivider, null),
                React.createElement("div", { className: Classes.TABLE_COLUMN_NAME_TEXT }, nameComponent)));
        }
        else {
            return (React.createElement("div", { className: Classes.TABLE_COLUMN_NAME, title: name },
                dropdownMenu,
                React.createElement("div", { className: Classes.TABLE_COLUMN_NAME_TEXT }, nameComponent)));
        }
    };
    ColumnHeaderCell.prototype.maybeRenderContent = function () {
        if (this.props.children === null) {
            return undefined;
        }
        return (React.createElement("div", { className: Classes.TABLE_HEADER_CONTENT }, this.props.children));
    };
    ColumnHeaderCell.prototype.maybeRenderDropdownMenu = function () {
        var _a = this.props, index = _a.index, menu = _a.menu, menuIconName = _a.menuIconName, renderMenu = _a.renderMenu;
        if (renderMenu == null && menu == null) {
            return undefined;
        }
        var popoverTargetClasses = classNames(core_1.Classes.ICON_STANDARD, core_1.Classes.iconClass(menuIconName));
        var constraints = [{
                attachment: "together",
                pin: true,
                to: "window",
            }];
        var classes = classNames(Classes.TABLE_TH_MENU_CONTAINER, (_b = {},
            _b[Classes.TABLE_TH_MENU_OPEN] = this.state.isActive,
            _b));
        // prefer renderMenu if it's defined
        var content = core_1.Utils.isFunction(renderMenu)
            ? renderMenu(index)
            : menu;
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: Classes.TABLE_TH_MENU_CONTAINER_BACKGROUND }),
            React.createElement(core_1.Popover, { tetherOptions: { constraints: constraints }, content: content, position: core_1.Position.BOTTOM, className: Classes.TABLE_TH_MENU, popoverDidOpen: this.handlePopoverDidOpen, popoverWillClose: this.handlePopoverWillClose, useSmartArrowPositioning: true },
                React.createElement("span", { className: popoverTargetClasses }))));
        var _b;
    };
    return ColumnHeaderCell;
}(core_1.AbstractComponent));
ColumnHeaderCell.defaultProps = {
    isActive: false,
    menuIconName: "chevron-down",
    useInteractionBar: false,
};
exports.ColumnHeaderCell = ColumnHeaderCell;



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The four basic intents.
 */
var Intent;
(function (Intent) {
    Intent[Intent["NONE"] = -1] = "NONE";
    Intent[Intent["PRIMARY"] = 0] = "PRIMARY";
    Intent[Intent["SUCCESS"] = 1] = "SUCCESS";
    Intent[Intent["WARNING"] = 2] = "WARNING";
    Intent[Intent["DANGER"] = 3] = "DANGER";
})(Intent = exports.Intent || (exports.Intent = {}));



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var position_1 = __webpack_require__(14);
// per https://github.com/HubSpot/tether/pull/204, Tether now exposes a `bodyElement` option that,
// when present, gets the tethered element injected into *it* instead of into the document body.
// but both approaches still cause React to freak out, because it loses its handle on the DOM
// element. thus, we pass a fake HTML bodyElement to Tether, with a no-op `appendChild` function
// (the only function the library uses from bodyElement).
var fakeHtmlElement = {
    appendChild: function () { },
};
/** @internal */
function createTetherOptions(element, target, position, tetherOptions) {
    if (tetherOptions === void 0) { tetherOptions = {}; }
    return tslib_1.__assign({}, tetherOptions, { attachment: getPopoverAttachment(position), bodyElement: fakeHtmlElement, classPrefix: "pt-tether", element: element,
        target: target, targetAttachment: getTargetAttachment(position) });
}
exports.createTetherOptions = createTetherOptions;
/** @internal */
function getTargetAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "top left",
        _a[position_1.Position.TOP] = "top center",
        _a[position_1.Position.TOP_RIGHT] = "top right",
        _a[position_1.Position.RIGHT_TOP] = "top right",
        _a[position_1.Position.RIGHT] = "middle right",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom right",
        _a[position_1.Position.BOTTOM_RIGHT] = "bottom right",
        _a[position_1.Position.BOTTOM] = "bottom center",
        _a[position_1.Position.BOTTOM_LEFT] = "bottom left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom left",
        _a[position_1.Position.LEFT] = "middle left",
        _a[position_1.Position.LEFT_TOP] = "top left",
        _a);
    return attachments[position];
    var _a;
}
exports.getTargetAttachment = getTargetAttachment;
/** @internal */
function getPopoverAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "bottom left",
        _a[position_1.Position.TOP] = "bottom center",
        _a[position_1.Position.TOP_RIGHT] = "bottom right",
        _a[position_1.Position.RIGHT_TOP] = "top left",
        _a[position_1.Position.RIGHT] = "middle left",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom left",
        _a[position_1.Position.BOTTOM_RIGHT] = "top right",
        _a[position_1.Position.BOTTOM] = "top center",
        _a[position_1.Position.BOTTOM_LEFT] = "top left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom right",
        _a[position_1.Position.LEFT] = "middle right",
        _a[position_1.Position.LEFT_TOP] = "top right",
        _a);
    return attachments[position];
    var _a;
}
exports.getPopoverAttachment = getPopoverAttachment;
/** @internal */
function getAttachmentClasses(position) {
    // this essentially reimplements the Tether logic for attachment classes so the same styles
    // can be reused outside of Tether-based popovers.
    return expandAttachmentClasses(getPopoverAttachment(position), "pt-tether-element-attached").concat(expandAttachmentClasses(getTargetAttachment(position), "pt-tether-target-attached"));
}
exports.getAttachmentClasses = getAttachmentClasses;
function expandAttachmentClasses(attachments, prefix) {
    var _a = attachments.split(" "), verticalAlign = _a[0], horizontalAlign = _a[1];
    return [prefix + "-" + verticalAlign, prefix + "-" + horizontalAlign];
}



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
if (typeof window !== "undefined" && typeof document !== "undefined") {
    // tslint:disable-next-line:no-var-requires
    __webpack_require__(79); // only import actual dom4 if we're in the browser (not server-compatible)
    // we'll still need dom4 types for the TypeScript to compile, these are included in package.json
}
var contextMenu = __webpack_require__(43);
exports.ContextMenu = contextMenu;
__export(__webpack_require__(98));
__export(__webpack_require__(100));
__export(__webpack_require__(23));
__export(__webpack_require__(48));
__export(__webpack_require__(101));
__export(__webpack_require__(102));
__export(__webpack_require__(47));
__export(__webpack_require__(103));
__export(__webpack_require__(50));
__export(__webpack_require__(51));
__export(__webpack_require__(106));
__export(__webpack_require__(107));
__export(__webpack_require__(52));
__export(__webpack_require__(33));
__export(__webpack_require__(110));
__export(__webpack_require__(49));
__export(__webpack_require__(111));
__export(__webpack_require__(21));
__export(__webpack_require__(112));
__export(__webpack_require__(18));
__export(__webpack_require__(113));
__export(__webpack_require__(46));
__export(__webpack_require__(114));
__export(__webpack_require__(115));
__export(__webpack_require__(116));
__export(__webpack_require__(117));
__export(__webpack_require__(32));
__export(__webpack_require__(118));
__export(__webpack_require__(57));
__export(__webpack_require__(119));
__export(__webpack_require__(58));
__export(__webpack_require__(59));
__export(__webpack_require__(60));
__export(__webpack_require__(120));
__export(__webpack_require__(122));
__export(__webpack_require__(61));
__export(__webpack_require__(123));
__export(__webpack_require__(31));
__export(__webpack_require__(124));
__export(__webpack_require__(62));



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var position_1 = __webpack_require__(14);
var utils_1 = __webpack_require__(5);
var popover_1 = __webpack_require__(18);
var TETHER_OPTIONS = {
    constraints: [
        { attachment: "together", pin: true, to: "window" },
    ],
};
var TRANSITION_DURATION = 100;
var ContextMenu = (function (_super) {
    tslib_1.__extends(ContextMenu, _super);
    function ContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
        };
        _this.cancelContextMenu = function (e) { return e.preventDefault(); };
        _this.handleBackdropContextMenu = function (e) {
            // HACKHACK: React function to remove from the event pool (not sure why it's not in typings #66)
            e.persist();
            e.preventDefault();
            // wait for backdrop to disappear so we can find the "real" element at event coordinates.
            // timeout duration is equivalent to transition duration so we know it's animated out.
            _this.setTimeout(function () {
                // retrigger context menu event at the element beneath the backdrop.
                // if it has a `contextmenu` event handler then it'll be invoked.
                // if it doesn't, no native menu will show (at least on OSX) :(
                var newTarget = document.elementFromPoint(e.clientX, e.clientY);
                newTarget.dispatchEvent(new MouseEvent("contextmenu", e));
            }, TRANSITION_DURATION);
        };
        _this.handlePopoverInteraction = function (nextOpenState) {
            if (!nextOpenState) {
                _this.hide();
            }
        };
        return _this;
    }
    ContextMenu.prototype.render = function () {
        // prevent right-clicking in a context menu
        var content = React.createElement("div", { onContextMenu: this.cancelContextMenu }, this.state.menu);
        return (React.createElement(popover_1.Popover, { backdropProps: { onContextMenu: this.handleBackdropContextMenu }, content: content, enforceFocus: false, isModal: true, isOpen: this.state.isOpen, onInteraction: this.handlePopoverInteraction, position: position_1.Position.RIGHT_TOP, popoverClassName: Classes.MINIMAL, useSmartArrowPositioning: false, tetherOptions: TETHER_OPTIONS, transitionDuration: TRANSITION_DURATION },
            React.createElement("div", { className: Classes.CONTEXT_MENU_POPOVER_TARGET, style: this.state.offset })));
    };
    ContextMenu.prototype.show = function (menu, offset, onClose) {
        this.setState({ isOpen: true, menu: menu, offset: offset, onClose: onClose });
    };
    ContextMenu.prototype.hide = function () {
        var onClose = this.state.onClose;
        this.setState({ isOpen: false, onClose: null });
        utils_1.safeInvoke(onClose);
    };
    return ContextMenu;
}(abstractComponent_1.AbstractComponent));
var contextMenu;
/**
 * Show the given menu element at the given offset from the top-left corner of the viewport.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. The optional callback will be invoked when this menu closes.
 */
function show(menu, offset, onClose) {
    if (contextMenu == null) {
        var contextMenuElement = document.createElement("div");
        contextMenuElement.classList.add(Classes.CONTEXT_MENU);
        document.body.appendChild(contextMenuElement);
        contextMenu = ReactDOM.render(React.createElement(ContextMenu, null), contextMenuElement);
    }
    contextMenu.show(menu, offset, onClose);
}
exports.show = show;
/** Hide the open context menu. */
function hide() {
    if (contextMenu != null) {
        contextMenu.hide();
    }
}
exports.hide = hide;
/** Return whether a context menu is currently open. */
function isOpen() {
    return contextMenu != null && contextMenu.state.isOpen;
}
exports.isOpen = isOpen;



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var props_1 = __webpack_require__(17);
var utils_1 = __webpack_require__(5);
var REACT_CONTEXT_TYPES = {
    blueprintPortalClassName: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "string") {
            return new Error(Errors.PORTAL_CONTEXT_CLASS_NAME_STRING);
        }
        return undefined;
    },
};
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
var Portal = (function (_super) {
    tslib_1.__extends(Portal, _super);
    function Portal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Portal.prototype.render = function () {
        return null;
    };
    Portal.prototype.componentDidMount = function () {
        var targetElement = document.createElement("div");
        targetElement.classList.add(Classes.PORTAL);
        if (this.context.blueprintPortalClassName != null) {
            targetElement.classList.add(this.context.blueprintPortalClassName);
        }
        document.body.appendChild(targetElement);
        this.targetElement = targetElement;
        this.componentDidUpdate();
    };
    Portal.prototype.componentDidUpdate = function () {
        var _this = this;
        // use special render function to preserve React context, in case children need it
        ReactDOM.unstable_renderSubtreeIntoContainer(
        /* parentComponent */ this, React.createElement("div", tslib_1.__assign({}, props_1.removeNonHTMLProps(this.props), { ref: this.props.containerRef }), this.props.children), this.targetElement, function () { return utils_1.safeInvoke(_this.props.onChildrenMount); });
    };
    Portal.prototype.componentWillUnmount = function () {
        ReactDOM.unmountComponentAtNode(this.targetElement);
        this.targetElement.remove();
    };
    return Portal;
}(React.Component));
Portal.displayName = "Blueprint.Portal";
Portal.contextTypes = REACT_CONTEXT_TYPES;
exports.Portal = Portal;



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var overlay_1 = __webpack_require__(21);
var Dialog = (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.render = function () {
        return (React.createElement(overlay_1.Overlay, tslib_1.__assign({}, this.props, { className: classNames((_a = {}, _a[Classes.OVERLAY_SCROLL_CONTAINER] = !this.props.inline, _a)), hasBackdrop: true }),
            React.createElement("div", { className: classNames(Classes.DIALOG, this.props.className), style: this.props.style },
                this.maybeRenderHeader(),
                this.props.children)));
        var _a;
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.iconName != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // for now, show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            var classes = classNames(Classes.DIALOG_CLOSE_BUTTON, Classes.iconClass("small-cross"));
            return React.createElement("button", { "aria-label": "Close", className: classes, onClick: this.props.onClose });
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        if (this.props.title == null) {
            return undefined;
        }
        var maybeIcon;
        if (this.props.iconName != null) {
            maybeIcon = React.createElement("span", { className: classNames(Classes.ICON_LARGE, Classes.iconClass(this.props.iconName)) });
        }
        return (React.createElement("div", { className: Classes.DIALOG_HEADER },
            maybeIcon,
            React.createElement("h5", null, this.props.title),
            this.maybeRenderCloseButton()));
    };
    return Dialog;
}(abstractComponent_1.AbstractComponent));
Dialog.defaultProps = {
    isOpen: false,
};
Dialog.displayName = "Blueprint.Dialog";
exports.Dialog = Dialog;
exports.DialogFactory = React.createFactory(Dialog);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var AnimationStates;
(function (AnimationStates) {
    AnimationStates[AnimationStates["CLOSED"] = 0] = "CLOSED";
    AnimationStates[AnimationStates["OPENING"] = 1] = "OPENING";
    AnimationStates[AnimationStates["OPEN"] = 2] = "OPEN";
    AnimationStates[AnimationStates["CLOSING_START"] = 3] = "CLOSING_START";
    AnimationStates[AnimationStates["CLOSING_END"] = 4] = "CLOSING_END";
})(AnimationStates = exports.AnimationStates || (exports.AnimationStates = {}));
/*
 * A collapse can be in one of 5 states:
 * CLOSED
 * When in this state, the contents of the collapse is not rendered, the collapse height is 0,
 * and the body Y is at -height (so that the bottom of the body is at Y=0).
 *
 * OPEN
 * When in this state, the collapse height is set to auto, and the body Y is set to 0 (so the element can be seen
 * as normal).
 *
 * CLOSING_START
 * When in this state, height has been changed from auto to the measured height of the body to prepare for the
 * closing animation in CLOSING_END.
 *
 * CLOSING_END
 * When in this state, the height is set to 0 and the body Y is at -height. Both of these properties are transformed,
 * and then after the animation is complete, the state changes to CLOSED.
 *
 * OPENING
 * When in this state, the body is re-rendered, height is set to the measured body height and the body Y is set to 0.
 * This is all animated, and on complete, the state changes to OPEN.
 *
 * When changing the isOpen prop, the following happens to the states:
 * isOpen = true : CLOSED -> OPENING -> OPEN
 * isOpen = false: OPEN -> CLOSING_START -> CLOSING_END -> CLOSED
 * These are all animated.
 */
var Collapse = (function (_super) {
    tslib_1.__extends(Collapse, _super);
    function Collapse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            animationState: AnimationStates.OPEN,
            height: "0px",
        };
        // The most recent non-0 height (once a height has been measured - is 0 until then)
        _this.height = 0;
        _this.contentsRefHandler = function (el) {
            _this.contents = el;
            if (el != null) {
                _this.height = _this.contents.clientHeight;
                _this.setState({
                    animationState: _this.props.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED,
                    height: _this.height + "px",
                });
            }
        };
        return _this;
    }
    Collapse.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.contents != null && this.contents.clientHeight !== 0) {
            this.height = this.contents.clientHeight;
        }
        if (this.props.isOpen !== nextProps.isOpen) {
            this.clearTimeouts();
            if (this.state.animationState !== AnimationStates.CLOSED && !nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.CLOSING_START,
                    height: this.height + "px",
                });
            }
            else if (this.state.animationState !== AnimationStates.OPEN && nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.OPENING,
                    height: this.height + "px",
                });
                this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
            }
        }
    };
    Collapse.prototype.render = function () {
        var showContents = this.state.animationState !== AnimationStates.CLOSED;
        var displayWithTransform = showContents && this.state.animationState !== AnimationStates.CLOSING_END;
        var isAutoHeight = this.state.height === "auto";
        var containerStyle = {
            height: showContents ? this.state.height : undefined,
            overflowY: (isAutoHeight ? "visible" : undefined),
            transition: isAutoHeight ? "none" : undefined,
        };
        var contentsStyle = {
            transform: displayWithTransform ? "translateY(0)" : "translateY(-" + this.height + "px)",
            transition: isAutoHeight ? "none" : undefined,
        };
        // quick type cast because there's no single overload that supports all three ReactTypes (str | Cmp | SFC)
        return React.createElement(this.props.component, {
            className: classNames(Classes.COLLAPSE, this.props.className),
            style: containerStyle,
        }, React.createElement("div", { className: "pt-collapse-body", ref: this.contentsRefHandler, style: contentsStyle }, showContents ? this.props.children : null));
    };
    Collapse.prototype.componentDidMount = function () {
        this.forceUpdate();
        if (this.props.isOpen) {
            this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
        }
        else {
            this.setState({ animationState: AnimationStates.CLOSED });
        }
    };
    Collapse.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.state.animationState === AnimationStates.CLOSING_START) {
            this.setTimeout(function () { return _this.setState({
                animationState: AnimationStates.CLOSING_END,
                height: "0px",
            }); });
            this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
        }
    };
    Collapse.prototype.onDelayedStateChange = function () {
        switch (this.state.animationState) {
            case AnimationStates.OPENING:
                this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
                break;
            case AnimationStates.CLOSING_END:
                this.setState({ animationState: AnimationStates.CLOSED });
                break;
            default:
                break;
        }
    };
    return Collapse;
}(abstractComponent_1.AbstractComponent));
Collapse.displayName = "Blueprint.Collapse";
Collapse.defaultProps = {
    component: "div",
    isOpen: false,
    transitionDuration: 200,
};
exports.Collapse = Collapse;



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var position_1 = __webpack_require__(14);
var popover_1 = __webpack_require__(18);
var menu_1 = __webpack_require__(33);
var REACT_CONTEXT_TYPES = {
    alignLeft: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "boolean") {
            return new Error("[Blueprint] MenuItem context alignLeft must be boolean");
        }
        return undefined;
    },
};
var MenuItem = (function (_super) {
    tslib_1.__extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            alignLeft: false,
        };
        _this.liRefHandler = function (r) { return _this.liElement = r; };
        _this.measureSubmenu = function (el) {
            if (el != null) {
                var submenuRect = ReactDOM.findDOMNode(el).getBoundingClientRect();
                var parentWidth = _this.liElement.parentElement.getBoundingClientRect().width;
                var adjustmentWidth = submenuRect.width + parentWidth;
                // this ensures that the left and right measurements represent a submenu opened to the right
                var submenuLeft = submenuRect.left;
                var submenuRight = submenuRect.right;
                if (_this.state.alignLeft) {
                    submenuLeft += adjustmentWidth;
                    submenuRight += adjustmentWidth;
                }
                var _a = _this.props.submenuViewportMargin.left, left = _a === void 0 ? 0 : _a;
                var _b = _this.props.submenuViewportMargin.right, right = _b === void 0 ? 0 : _b;
                if (typeof document !== "undefined"
                    && typeof document.documentElement !== "undefined"
                    && Number(document.documentElement.clientWidth)) {
                    // we're in a browser context and the clientWidth is available,
                    // use it to set calculate 'right'
                    right = document.documentElement.clientWidth - right;
                }
                // uses context to prioritize the previous positioning
                var alignLeft = _this.context.alignLeft || false;
                if (alignLeft) {
                    if ((submenuLeft - adjustmentWidth) <= left) {
                        alignLeft = false;
                    }
                }
                else {
                    if (submenuRight >= right) {
                        alignLeft = true;
                    }
                }
                _this.setState({ alignLeft: alignLeft });
            }
        };
        _this.renderChildren = function () {
            var _a = _this.props, children = _a.children, submenu = _a.submenu;
            if (children != null) {
                var childProps_1 = _this.cascadeProps();
                if (Object.keys(childProps_1).length === 0) {
                    return children;
                }
                else {
                    return React.Children.map(children, function (child) {
                        return React.cloneElement(child, childProps_1);
                    });
                }
            }
            else if (submenu != null) {
                return submenu.map(_this.cascadeProps).map(renderMenuItem);
            }
            else {
                return undefined;
            }
        };
        /**
         * Evalutes this.props and cascades prop values into new props when:
         * - submenuViewportMargin is defined, but is undefined for the supplied input.
         * - useSmartPositioning is false, but is undefined for the supplied input.
         * @param {IMenuItemProps} newProps If supplied, object will be modified, otherwise, defaults to an empty object.
         * @returns An object to be used as child props.
         */
        _this.cascadeProps = function (newProps) {
            if (newProps === void 0) { newProps = {}; }
            var _a = _this.props, submenuViewportMargin = _a.submenuViewportMargin, useSmartPositioning = _a.useSmartPositioning;
            if (submenuViewportMargin != null && newProps.submenuViewportMargin == null) {
                newProps.submenuViewportMargin = submenuViewportMargin;
            }
            if (useSmartPositioning === false && newProps.useSmartPositioning == null) {
                newProps.useSmartPositioning = useSmartPositioning;
            }
            return newProps;
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, label = _a.label, submenu = _a.submenu;
        var hasSubmenu = children != null || submenu != null;
        var liClasses = classNames((_b = {},
            _b[Classes.MENU_SUBMENU] = hasSubmenu,
            _b));
        var anchorClasses = classNames(Classes.MENU_ITEM, Classes.intentClass(this.props.intent), (_c = {},
            _c[Classes.DISABLED] = disabled,
            // prevent popover from closing when clicking on submenu trigger or disabled item
            _c[Classes.POPOVER_DISMISS] = this.props.shouldDismissPopover && !disabled && !hasSubmenu,
            _c), Classes.iconClass(this.props.iconName), this.props.className);
        var labelElement;
        if (label != null) {
            labelElement = React.createElement("span", { className: "pt-menu-item-label" }, label);
        }
        var content = (React.createElement("a", { className: anchorClasses, href: disabled ? undefined : this.props.href, onClick: disabled ? undefined : this.props.onClick, tabIndex: disabled ? undefined : 0, target: this.props.target },
            labelElement,
            this.props.text));
        if (hasSubmenu) {
            var measureSubmenu = (this.props.useSmartPositioning) ? this.measureSubmenu : null;
            var submenuElement = React.createElement(menu_1.Menu, { ref: measureSubmenu }, this.renderChildren());
            var popoverClasses = classNames((_d = {},
                _d[Classes.ALIGN_LEFT] = this.state.alignLeft,
                _d));
            content = (React.createElement(popover_1.Popover, { content: submenuElement, isDisabled: disabled, enforceFocus: false, hoverCloseDelay: 0, inline: true, interactionKind: popover_1.PopoverInteractionKind.HOVER, position: this.state.alignLeft ? position_1.Position.LEFT_TOP : position_1.Position.RIGHT_TOP, popoverClassName: classNames(Classes.MINIMAL, Classes.MENU_SUBMENU, popoverClasses), useSmartArrowPositioning: false }, content));
        }
        return (React.createElement("li", { className: liClasses, ref: this.liRefHandler }, content));
        var _b, _c, _d;
    };
    MenuItem.prototype.getChildContext = function () {
        return { alignLeft: this.state.alignLeft };
    };
    MenuItem.prototype.validateProps = function (props) {
        if (props.children != null && props.submenu != null) {
            console.warn(Errors.MENU_WARN_CHILDREN_SUBMENU_MUTEX);
        }
    };
    return MenuItem;
}(abstractComponent_1.AbstractComponent));
MenuItem.defaultProps = {
    disabled: false,
    shouldDismissPopover: true,
    submenuViewportMargin: {},
    text: "",
    useSmartPositioning: true,
};
MenuItem.displayName = "Blueprint.MenuItem";
MenuItem.contextTypes = REACT_CONTEXT_TYPES;
MenuItem.childContextTypes = REACT_CONTEXT_TYPES;
exports.MenuItem = MenuItem;
function renderMenuItem(props, key) {
    return React.createElement(MenuItem, tslib_1.__assign({ key: key }, props));
}
exports.renderMenuItem = renderMenuItem;
exports.MenuItemFactory = React.createFactory(MenuItem);



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file
// we need some empty interfaces to show up in docs
// tslint:disable no-empty-interface
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var props_1 = __webpack_require__(17);
var utils_1 = __webpack_require__(5);
var INVALID_PROPS = [
    // we spread props to `<input>` but render `children` as its sibling
    "children",
    "defaultIndeterminate",
    "indeterminate",
    "labelElement",
];
/** Base Component class for all Controls */
var Control = (function (_super) {
    tslib_1.__extends(Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // generates control markup for given input type.
    // optional inputRef in case the component needs reference for itself (don't forget to invoke the prop!).
    Control.prototype.renderControl = function (type, typeClassName, inputRef) {
        if (inputRef === void 0) { inputRef = this.props.inputRef; }
        var className = classNames(Classes.CONTROL, typeClassName, (_a = {}, _a[Classes.DISABLED] = this.props.disabled, _a), this.props.className);
        var inputProps = props_1.removeNonHTMLProps(this.props, INVALID_PROPS, true);
        return (React.createElement("label", { className: className, style: this.props.style },
            React.createElement("input", tslib_1.__assign({}, inputProps, { ref: inputRef, type: type })),
            React.createElement("span", { className: Classes.CONTROL_INDICATOR }),
            this.props.label,
            this.props.labelElement,
            this.props.children));
        var _a;
    };
    return Control;
}(React.Component));
exports.Control = Control;
var Checkbox = (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleInputRef = function (ref) {
            _this.input = ref;
            utils_1.safeInvoke(_this.props.inputRef, ref);
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        return this.renderControl("checkbox", "pt-checkbox", this.handleInputRef);
    };
    Checkbox.prototype.componentDidMount = function () {
        if (this.props.defaultIndeterminate != null) {
            this.input.indeterminate = this.props.defaultIndeterminate;
        }
        this.updateIndeterminate();
    };
    Checkbox.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.updateIndeterminate = function () {
        if (this.props.indeterminate != null) {
            this.input.indeterminate = this.props.indeterminate;
        }
    };
    return Checkbox;
}(Control));
Checkbox.displayName = "Blueprint.Checkbox";
exports.Checkbox = Checkbox;
var Switch = (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        return this.renderControl("checkbox", "pt-switch");
    };
    return Switch;
}(Control));
Switch.displayName = "Blueprint.Switch";
exports.Switch = Switch;
var Radio = (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        return this.renderControl("radio", "pt-radio");
    };
    return Radio;
}(Control));
Radio.displayName = "Blueprint.Radio";
exports.Radio = Radio;
exports.CheckboxFactory = React.createFactory(Checkbox);
exports.SwitchFactory = React.createFactory(Switch);
exports.RadioFactory = React.createFactory(Radio);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var props_1 = __webpack_require__(17);
var InputGroup = (function (_super) {
    tslib_1.__extends(InputGroup, _super);
    function InputGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            rightElementWidth: 30,
        };
        _this.refHandlers = {
            rightElement: function (ref) { return _this.rightElement = ref; },
        };
        return _this;
    }
    InputGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent;
        var classes = classNames(Classes.INPUT_GROUP, Classes.intentClass(intent), (_b = {},
            _b[Classes.DISABLED] = this.props.disabled,
            _b), className);
        var style = { paddingRight: this.state.rightElementWidth };
        return (React.createElement("div", { className: classes },
            this.maybeRenderLeftIcon(),
            React.createElement("input", tslib_1.__assign({ type: "text" }, props_1.removeNonHTMLProps(this.props), { className: Classes.INPUT, ref: this.props.inputRef, style: style })),
            this.maybeRenderRightElement()));
        var _b;
    };
    InputGroup.prototype.componentDidMount = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.componentDidUpdate = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.maybeRenderLeftIcon = function () {
        var leftIconName = this.props.leftIconName;
        if (leftIconName == null) {
            return undefined;
        }
        var iconClass = Classes.iconClass(leftIconName);
        return React.createElement("span", { className: classNames("pt-icon", iconClass) });
    };
    InputGroup.prototype.maybeRenderRightElement = function () {
        var rightElement = this.props.rightElement;
        if (rightElement == null) {
            return undefined;
        }
        return React.createElement("span", { className: "pt-input-action", ref: this.refHandlers.rightElement }, rightElement);
    };
    InputGroup.prototype.updateInputWidth = function () {
        if (this.rightElement != null) {
            var clientWidth = this.rightElement.clientWidth;
            // small threshold to prevent infinite loops
            if (Math.abs(clientWidth - this.state.rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ rightElementWidth: 0 });
        }
    };
    return InputGroup;
}(React.Component));
InputGroup.displayName = "Blueprint.InputGroup";
InputGroup = tslib_1.__decorate([
    PureRender
], InputGroup);
exports.InputGroup = InputGroup;
exports.InputGroupFactory = React.createFactory(InputGroup);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var react_1 = __webpack_require__(0);
var React = __webpack_require__(0);
var common_1 = __webpack_require__(16);
var hotkey_1 = __webpack_require__(24);
var hotkey_2 = __webpack_require__(24);
exports.Hotkey = hotkey_2.Hotkey;
var keyCombo_1 = __webpack_require__(53);
exports.KeyCombo = keyCombo_1.KeyCombo;
var hotkeysTarget_1 = __webpack_require__(108);
exports.HotkeysTarget = hotkeysTarget_1.HotkeysTarget;
var hotkeyParser_1 = __webpack_require__(34);
exports.comboMatches = hotkeyParser_1.comboMatches;
exports.getKeyCombo = hotkeyParser_1.getKeyCombo;
exports.getKeyComboString = hotkeyParser_1.getKeyComboString;
exports.parseKeyCombo = hotkeyParser_1.parseKeyCombo;
var hotkeysDialog_1 = __webpack_require__(54);
exports.hideHotkeysDialog = hotkeysDialog_1.hideHotkeysDialog;
exports.setHotkeysDialogProps = hotkeysDialog_1.setHotkeysDialogProps;
var errors_1 = __webpack_require__(9);
var Hotkeys = (function (_super) {
    tslib_1.__extends(Hotkeys, _super);
    function Hotkeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkeys.prototype.render = function () {
        var hotkeys = react_1.Children.map(this.props.children, function (child) { return child.props; });
        // sort by group label alphabetically, globals first
        hotkeys.sort(function (a, b) {
            if (a.global) {
                return b.global ? 0 : -1;
            }
            if (b.global) {
                return 1;
            }
            return a.group.localeCompare(b.group);
        });
        var lastGroup = null;
        var elems = [];
        for (var _i = 0, hotkeys_1 = hotkeys; _i < hotkeys_1.length; _i++) {
            var hotkey = hotkeys_1[_i];
            var groupLabel = hotkey.group;
            if (groupLabel !== lastGroup) {
                elems.push(React.createElement("h4", { key: "group-" + elems.length, className: "pt-hotkey-group" }, groupLabel));
                lastGroup = groupLabel;
            }
            elems.push(React.createElement(hotkey_1.Hotkey, tslib_1.__assign({ key: elems.length }, hotkey)));
        }
        return React.createElement("div", { className: "pt-hotkey-column" }, elems);
    };
    Hotkeys.prototype.validateProps = function (props) {
        react_1.Children.forEach(props.children, function (child) {
            if (!hotkey_1.Hotkey.isInstance(child)) {
                throw new Error(errors_1.HOTKEYS_HOTKEY_CHILDREN);
            }
        });
    };
    return Hotkeys;
}(common_1.AbstractComponent));
Hotkeys.defaultProps = {
    tabIndex: 0,
};
exports.Hotkeys = Hotkeys;



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var hotkeyParser_1 = __webpack_require__(34);
var KeyIcons = {
    alt: "pt-icon-key-option",
    ctrl: "pt-icon-key-control",
    delete: "pt-icon-key-delete",
    down: "pt-icon-arrow-down",
    enter: "pt-icon-key-enter",
    left: "pt-icon-arrow-left",
    meta: "pt-icon-key-command",
    right: "pt-icon-arrow-right",
    shift: "pt-icon-key-shift",
    up: "pt-icon-arrow-up",
};
var KeyCombo = (function (_super) {
    tslib_1.__extends(KeyCombo, _super);
    function KeyCombo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyCombo.prototype.render = function () {
        var keys = hotkeyParser_1.normalizeKeyCombo(this.props.combo);
        var components = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var icon = KeyIcons[key];
            if (icon != null) {
                components.push(React.createElement("kbd", { className: "pt-key pt-modifier-key", key: "key-" + i },
                    React.createElement("span", { className: "pt-icon-standard " + icon }),
                    key));
            }
            else {
                if (key.length === 1) {
                    key = key.toUpperCase();
                }
                components.push(React.createElement("kbd", { className: "pt-key", key: "key-" + i }, key));
            }
        }
        return React.createElement("div", { className: "pt-key-combo" }, components);
    };
    return KeyCombo;
}(React.Component));
exports.KeyCombo = KeyCombo;



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var common_1 = __webpack_require__(16);
var components_1 = __webpack_require__(42);
var hotkey_1 = __webpack_require__(24);
var hotkeys_1 = __webpack_require__(52);
/**
 * The delay before showing or hiding the dialog. Should be long enough to
 * allow all registered hotkey listeners to execute first.
 */
var DELAY_IN_MS = 10;
var HotkeysDialog = (function () {
    function HotkeysDialog() {
        var _this = this;
        this.componentProps = {
            globalHotkeysGroup: "Global hotkeys",
        };
        this.hotkeysQueue = [];
        this.isDialogShowing = false;
        this.show = function () {
            _this.isDialogShowing = true;
            _this.render();
        };
        this.hide = function () {
            _this.isDialogShowing = false;
            _this.render();
        };
    }
    HotkeysDialog.prototype.render = function () {
        if (this.container == null) {
            this.container = this.getContainer();
        }
        ReactDOM.render(this.renderComponent(), this.container);
    };
    HotkeysDialog.prototype.unmount = function () {
        if (this.container != null) {
            ReactDOM.unmountComponentAtNode(this.container);
            this.container.remove();
            delete this.container;
        }
    };
    /**
     * Because hotkeys can be registered globally and locally and because
     * event ordering cannot be guaranteed, we use this debouncing method to
     * allow all hotkey listeners to fire and add their hotkeys to the dialog.
     *
     * 10msec after the last listener adds their hotkeys, we render the dialog
     * and clear the queue.
     */
    HotkeysDialog.prototype.enqueueHotkeysForDisplay = function (hotkeys) {
        this.hotkeysQueue.push(hotkeys);
        // reset timeout for debounce
        clearTimeout(this.showTimeoutToken);
        this.showTimeoutToken = setTimeout(this.show, DELAY_IN_MS);
    };
    HotkeysDialog.prototype.hideAfterDelay = function () {
        clearTimeout(this.hideTimeoutToken);
        this.hideTimeoutToken = setTimeout(this.hide, DELAY_IN_MS);
    };
    HotkeysDialog.prototype.isShowing = function () {
        return this.isDialogShowing;
    };
    HotkeysDialog.prototype.getContainer = function () {
        if (this.container == null) {
            this.container = document.createElement("div");
            this.container.classList.add(common_1.Classes.PORTAL);
            document.body.appendChild(this.container);
        }
        return this.container;
    };
    HotkeysDialog.prototype.renderComponent = function () {
        return (React.createElement(components_1.Dialog, tslib_1.__assign({}, this.componentProps, { className: classNames(this.componentProps.className, "pt-hotkey-dialog"), isOpen: this.isDialogShowing, onClose: this.hide }),
            React.createElement("div", { className: common_1.Classes.DIALOG_BODY }, this.renderHotkeys())));
    };
    HotkeysDialog.prototype.renderHotkeys = function () {
        var _this = this;
        var hotkeys = this.emptyHotkeyQueue();
        var elements = hotkeys.map(function (hotkey, index) {
            var group = (hotkey.global === true && hotkey.group == null) ?
                _this.componentProps.globalHotkeysGroup : hotkey.group;
            return React.createElement(hotkey_1.Hotkey, tslib_1.__assign({ key: index }, hotkey, { group: group }));
        });
        return React.createElement(hotkeys_1.Hotkeys, null, elements);
    };
    HotkeysDialog.prototype.emptyHotkeyQueue = function () {
        // flatten then empty the hotkeys queue
        var hotkeys = this.hotkeysQueue.reduce((function (arr, queued) { return arr.concat(queued); }), []);
        this.hotkeysQueue.length = 0;
        return hotkeys;
    };
    return HotkeysDialog;
}());
// singleton instance
var HOTKEYS_DIALOG = new HotkeysDialog();
function isHotkeysDialogShowing() {
    return HOTKEYS_DIALOG.isShowing();
}
exports.isHotkeysDialogShowing = isHotkeysDialogShowing;
function setHotkeysDialogProps(props) {
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            HOTKEYS_DIALOG.componentProps[key] = props[key];
        }
    }
}
exports.setHotkeysDialogProps = setHotkeysDialogProps;
function showHotkeysDialog(hotkeys) {
    HOTKEYS_DIALOG.enqueueHotkeysForDisplay(hotkeys);
}
exports.showHotkeysDialog = showHotkeysDialog;
function hideHotkeysDialog() {
    HOTKEYS_DIALOG.hide();
}
exports.hideHotkeysDialog = hideHotkeysDialog;
/**
 * Use this function instead of `hideHotkeysDialog` if you need to ensure that all hotkey listeners
 * have time to execute with the dialog in a consistent open state. This can avoid flickering the
 * dialog between open and closed states as successive listeners fire.
 */
function hideHotkeysDialogAfterDelay() {
    HOTKEYS_DIALOG.hideAfterDelay();
}
exports.hideHotkeysDialogAfterDelay = hideHotkeysDialogAfterDelay;



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var utils_1 = __webpack_require__(5);
var CoreSlider = (function (_super) {
    tslib_1.__extends(CoreSlider, _super);
    function CoreSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.className = Classes.SLIDER;
        _this.refHandlers = {
            track: function (el) { return _this.trackElement = el; },
        };
        _this.maybeHandleTrackClick = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackClick(event);
            }
        };
        _this.maybeHandleTrackTouch = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackTouch(event);
            }
        };
        _this.canHandleTrackEvent = function (event) {
            var target = event.target;
            // ensure event does not come from inside the handle
            return !_this.props.disabled && target.closest("." + Classes.SLIDER_HANDLE) == null;
        };
        _this.state = {
            labelPrecision: _this.getLabelPrecision(props),
            tickSize: 0,
        };
        return _this;
    }
    CoreSlider.prototype.render = function () {
        var disabled = this.props.disabled;
        var classes = classNames(this.className, (_a = {},
            _a[Classes.DISABLED] = disabled,
            _a[Classes.SLIDER + "-unlabeled"] = this.props.renderLabel === false,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, onMouseDown: this.maybeHandleTrackClick, onTouchStart: this.maybeHandleTrackTouch },
            React.createElement("div", { className: Classes.SLIDER + "-track", ref: this.refHandlers.track }),
            this.maybeRenderFill(),
            this.maybeRenderAxis(),
            this.renderHandles()));
        var _a;
    };
    CoreSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentDidUpdate = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentWillReceiveProps = function (props) {
        _super.prototype.componentWillReceiveProps.call(this, props);
        this.setState({ labelPrecision: this.getLabelPrecision(props) });
    };
    CoreSlider.prototype.formatLabel = function (value) {
        var renderLabel = this.props.renderLabel;
        if (renderLabel === false) {
            return undefined;
        }
        else if (utils_1.isFunction(renderLabel)) {
            return renderLabel(value);
        }
        else {
            return value.toFixed(this.state.labelPrecision);
        }
    };
    CoreSlider.prototype.validateProps = function (props) {
        if (props.stepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_STEP);
        }
        if (props.labelStepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_LABEL_STEP);
        }
    };
    CoreSlider.prototype.maybeRenderAxis = function () {
        var _a = this.props, max = _a.max, min = _a.min, labelStepSize = _a.labelStepSize;
        if (this.props.renderLabel === false) {
            return undefined;
        }
        var stepSize = Math.round(this.state.tickSize * labelStepSize);
        var labels = [];
        // tslint:disable-next-line:one-variable-per-declaration
        for (var i = min, left = 0; i < max || utils_1.approxEqual(i, max); i += labelStepSize, left += stepSize) {
            labels.push(React.createElement("div", { className: Classes.SLIDER + "-label", key: i, style: { left: left } }, this.formatLabel(i)));
        }
        return React.createElement("div", { className: Classes.SLIDER + "-axis" }, labels);
    };
    CoreSlider.prototype.maybeRenderFill = function () {
        if (this.props.showTrackFill && this.trackElement != null) {
            return this.renderFill();
        }
        return undefined;
    };
    CoreSlider.prototype.getLabelPrecision = function (_a) {
        var labelPrecision = _a.labelPrecision, stepSize = _a.stepSize;
        // infer default label precision from stepSize because that's how much the handle moves.
        return (labelPrecision == null)
            ? utils_1.countDecimalPlaces(stepSize)
            : labelPrecision;
    };
    CoreSlider.prototype.updateTickSize = function () {
        if (this.trackElement != null) {
            var tickSize = this.trackElement.clientWidth / (this.props.max - this.props.min);
            this.setState({ tickSize: tickSize });
        }
    };
    return CoreSlider;
}(abstractComponent_1.AbstractComponent));
CoreSlider = tslib_1.__decorate([
    PureRender
], CoreSlider);
exports.CoreSlider = CoreSlider;



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Keys = __webpack_require__(15);
var utils_1 = __webpack_require__(5);
// props that require number values, for validation
var NUMBER_PROPS = ["max", "min", "stepSize", "tickSize", "value"];
var Handle = (function (_super) {
    tslib_1.__extends(Handle, _super);
    function Handle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMoving: false,
        };
        _this.refHandlers = {
            handle: function (el) { return _this.handleElement = el; },
        };
        _this.beginHandleMovement = function (event) {
            document.addEventListener("mousemove", _this.handleHandleMovement);
            document.addEventListener("mouseup", _this.endHandleMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(event.clientX));
        };
        _this.beginHandleTouchMovement = function (event) {
            document.addEventListener("touchmove", _this.handleHandleTouchMovement);
            document.addEventListener("touchend", _this.endHandleTouchMovement);
            document.addEventListener("touchcancel", _this.endHandleTouchMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(_this.touchEventClientX(event)));
        };
        _this.endHandleMovement = function (event) {
            _this.handleMoveEndedAt(event.clientX);
        };
        _this.endHandleTouchMovement = function (event) {
            _this.handleMoveEndedAt(_this.touchEventClientX(event));
        };
        _this.handleMoveEndedAt = function (clientPixel) {
            _this.removeDocumentEventListeners();
            _this.setState({ isMoving: false });
            // not using changeValue because we want to invoke the handler regardless of current prop value
            var onRelease = _this.props.onRelease;
            var finalValue = _this.clamp(_this.clientToValue(clientPixel));
            utils_1.safeInvoke(onRelease, finalValue);
        };
        _this.handleHandleMovement = function (event) {
            _this.handleMovedTo(event.clientX);
        };
        _this.handleHandleTouchMovement = function (event) {
            _this.handleMovedTo(_this.touchEventClientX(event));
        };
        _this.handleMovedTo = function (clientPixel) {
            if (_this.state.isMoving && !_this.props.disabled) {
                _this.changeValue(_this.clientToValue(clientPixel));
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, stepSize = _a.stepSize, value = _a.value;
            var which = event.which;
            if (which === Keys.ARROW_DOWN || which === Keys.ARROW_LEFT) {
                _this.changeValue(value - stepSize);
                // this key event has been handled! prevent browser scroll on up/down
                event.preventDefault();
            }
            else if (which === Keys.ARROW_UP || which === Keys.ARROW_RIGHT) {
                _this.changeValue(value + stepSize);
                event.preventDefault();
            }
        };
        _this.handleKeyUp = function (event) {
            if ([Keys.ARROW_UP, Keys.ARROW_DOWN, Keys.ARROW_LEFT, Keys.ARROW_RIGHT].indexOf(event.which) >= 0) {
                utils_1.safeInvoke(_this.props.onRelease, _this.props.value);
            }
        };
        return _this;
    }
    Handle.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, label = _a.label, min = _a.min, tickSize = _a.tickSize, value = _a.value;
        var isMoving = this.state.isMoving;
        // getBoundingClientRect().height includes border size as opposed to clientHeight
        var handleSize = (this.handleElement == null ? 0 : this.handleElement.getBoundingClientRect().height);
        return (React.createElement("span", { className: classNames(Classes.SLIDER_HANDLE, (_b = {}, _b[Classes.ACTIVE] = isMoving, _b), className), onKeyDown: disabled ? null : this.handleKeyDown, onKeyUp: disabled ? null : this.handleKeyUp, onMouseDown: disabled ? null : this.beginHandleMovement, onTouchStart: disabled ? null : this.beginHandleTouchMovement, ref: this.refHandlers.handle, style: { left: Math.round((value - min) * tickSize - handleSize / 2) }, tabIndex: 0 }, label == null ? null : React.createElement("span", { className: Classes.SLIDER_LABEL }, label)));
        var _b;
    };
    Handle.prototype.componentWillUnmount = function () {
        this.removeDocumentEventListeners();
    };
    /** Convert client pixel to value between min and max. */
    Handle.prototype.clientToValue = function (clientPixel) {
        var _a = this.props, stepSize = _a.stepSize, tickSize = _a.tickSize, value = _a.value;
        if (this.handleElement == null) {
            return value;
        }
        var handleRect = this.handleElement.getBoundingClientRect();
        var handleCenterPixel = handleRect.left + handleRect.width / 2;
        var pixelDelta = clientPixel - handleCenterPixel;
        // convert pixels to range value in increments of `stepSize`
        var valueDelta = Math.round(pixelDelta / (tickSize * stepSize)) * stepSize;
        return value + valueDelta;
    };
    Handle.prototype.touchEventClientX = function (event) {
        return event.changedTouches[0].clientX;
    };
    Handle.prototype.validateProps = function (props) {
        for (var _i = 0, NUMBER_PROPS_1 = NUMBER_PROPS; _i < NUMBER_PROPS_1.length; _i++) {
            var prop = NUMBER_PROPS_1[_i];
            if (typeof props[prop] !== "number") {
                throw new Error("[Blueprint] <Handle> requires number value for " + prop + " prop");
            }
        }
    };
    /** Clamp value and invoke callback if it differs from current value */
    Handle.prototype.changeValue = function (newValue, callback) {
        if (callback === void 0) { callback = this.props.onChange; }
        newValue = this.clamp(newValue);
        if (!isNaN(newValue) && this.props.value !== newValue) {
            utils_1.safeInvoke(callback, newValue);
        }
    };
    /** Clamp value between min and max props */
    Handle.prototype.clamp = function (value) {
        return utils_1.clamp(value, this.props.min, this.props.max);
    };
    Handle.prototype.removeDocumentEventListeners = function () {
        document.removeEventListener("mousemove", this.handleHandleMovement);
        document.removeEventListener("mouseup", this.endHandleMovement);
        document.removeEventListener("touchmove", this.handleHandleTouchMovement);
        document.removeEventListener("touchend", this.endHandleTouchMovement);
        document.removeEventListener("touchcancel", this.endHandleTouchMovement);
    };
    return Handle;
}(abstractComponent_1.AbstractComponent));
Handle.displayName = "Blueprint.SliderHandle";
Handle = tslib_1.__decorate([
    PureRender
], Handle);
exports.Handle = Handle;



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var Tab = (function (_super) {
    tslib_1.__extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        return (React.createElement("li", { "aria-controls": this.props.panelId, "aria-disabled": this.props.isDisabled, "aria-expanded": this.props.isSelected, "aria-selected": this.props.isSelected, className: classNames(Classes.TAB, this.props.className), id: this.props.id, role: "tab", selected: this.props.isSelected ? true : null, tabIndex: this.props.isDisabled ? null : 0 }, this.props.children));
    };
    return Tab;
}(React.Component));
Tab.defaultProps = {
    isDisabled: false,
    isSelected: false,
};
Tab.displayName = "Blueprint.Tab";
Tab = tslib_1.__decorate([
    PureRender
], Tab);
exports.Tab = Tab;
exports.TabFactory = React.createFactory(Tab);



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var TabList = (function (_super) {
    tslib_1.__extends(TabList, _super);
    function TabList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            shouldAnimate: false,
        };
        return _this;
    }
    TabList.prototype.render = function () {
        return (React.createElement("ul", { className: classNames(Classes.TAB_LIST, this.props.className), role: "tablist" },
            React.createElement("div", { className: classNames("pt-tab-indicator-wrapper", { "pt-no-animation": !this.state.shouldAnimate }), style: this.props.indicatorWrapperStyle },
                React.createElement("div", { className: "pt-tab-indicator" })),
            this.props.children));
    };
    TabList.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.indicatorWrapperStyle == null) {
            this.setTimeout(function () { return _this.setState({ shouldAnimate: true }); });
        }
    };
    return TabList;
}(abstractComponent_1.AbstractComponent));
TabList.displayName = "Blueprint.TabList";
TabList = tslib_1.__decorate([
    PureRender
], TabList);
exports.TabList = TabList;
exports.TabListFactory = React.createFactory(TabList);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var TabPanel = (function (_super) {
    tslib_1.__extends(TabPanel, _super);
    function TabPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabPanel.prototype.render = function () {
        return (React.createElement("div", { "aria-labelledby": this.props._tabId, className: classNames(Classes.TAB_PANEL, this.props.className), id: this.props._id, role: "tabpanel" }, this.props.children));
    };
    return TabPanel;
}(React.Component));
TabPanel.displayName = "Blueprint.TabPanel";
TabPanel = tslib_1.__decorate([
    PureRender
], TabPanel);
exports.TabPanel = TabPanel;
exports.TabPanelFactory = React.createFactory(TabPanel);



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var Tab2 = (function (_super) {
    tslib_1.__extends(Tab2, _super);
    function Tab2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // this component is never rendered directly; see Tabs2#renderTabPanel()
    /* istanbul ignore next */
    Tab2.prototype.render = function () {
        var _a = this.props, className = _a.className, panel = _a.panel;
        return React.createElement("div", { className: classNames(Classes.TAB_PANEL, className), role: "tablist" }, panel);
    };
    return Tab2;
}(React.Component));
Tab2.defaultProps = {
    disabled: false,
    id: undefined,
};
Tab2.displayName = "Blueprint.Tab2";
Tab2 = tslib_1.__decorate([
    PureRender
], Tab2);
exports.Tab2 = Tab2;
exports.Tab2Factory = React.createFactory(Tab2);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var utils_1 = __webpack_require__(5);
var buttons_1 = __webpack_require__(23);
var Toast = (function (_super) {
    tslib_1.__extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleActionClick = function (e) {
            utils_1.safeInvoke(_this.props.action.onClick, e);
            _this.triggerDismiss(false);
        };
        _this.handleCloseClick = function () { return _this.triggerDismiss(false); };
        _this.startTimeout = function () {
            if (_this.props.timeout > 0) {
                _this.setTimeout(function () { return _this.triggerDismiss(true); }, _this.props.timeout);
            }
        };
        return _this;
    }
    Toast.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, message = _a.message;
        return (React.createElement("div", { className: classNames(Classes.TOAST, Classes.intentClass(intent), className), onBlur: this.startTimeout, onFocus: this.clearTimeouts, onMouseEnter: this.clearTimeouts, onMouseLeave: this.startTimeout, tabIndex: 0 },
            this.maybeRenderIcon(),
            React.createElement("span", { className: Classes.TOAST_MESSAGE }, message),
            React.createElement("div", { className: classNames(Classes.BUTTON_GROUP, Classes.MINIMAL) },
                this.maybeRenderActionButton(),
                React.createElement(buttons_1.Button, { iconName: "cross", onClick: this.handleCloseClick }))));
    };
    Toast.prototype.componentDidMount = function () {
        this.startTimeout();
    };
    Toast.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.timeout <= 0 && this.props.timeout > 0) {
            this.startTimeout();
        }
        else if (prevProps.timeout > 0 && this.props.timeout <= 0) {
            this.clearTimeouts();
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    Toast.prototype.maybeRenderActionButton = function () {
        var action = this.props.action;
        if (action == null) {
            return undefined;
        }
        else {
            return React.createElement(buttons_1.AnchorButton, tslib_1.__assign({}, action, { intent: undefined, onClick: this.handleActionClick }));
        }
    };
    Toast.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName == null) {
            return undefined;
        }
        else {
            return React.createElement("span", { className: classNames(Classes.ICON_STANDARD, Classes.iconClass(iconName)) });
        }
    };
    Toast.prototype.triggerDismiss = function (didTimeoutExpire) {
        utils_1.safeInvoke(this.props.onDismiss, didTimeoutExpire);
        this.clearTimeouts();
    };
    return Toast;
}(abstractComponent_1.AbstractComponent));
Toast.defaultProps = {
    className: "",
    message: "",
    timeout: 5000,
};
Toast.displayName = "Blueprint.Toast";
Toast = tslib_1.__decorate([
    PureRender
], Toast);
exports.Toast = Toast;
exports.ToastFactory = React.createFactory(Toast);



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var utils_1 = __webpack_require__(5);
var collapse_1 = __webpack_require__(48);
var TreeNode = (function (_super) {
    tslib_1.__extends(TreeNode, _super);
    function TreeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCaretClick = function (e) {
            e.stopPropagation();
            var _a = _this.props, isExpanded = _a.isExpanded, onCollapse = _a.onCollapse, onExpand = _a.onExpand;
            utils_1.safeInvoke(isExpanded ? onCollapse : onExpand, _this, e);
        };
        _this.handleClick = function (e) {
            utils_1.safeInvoke(_this.props.onClick, _this, e);
        };
        _this.handleContentRef = function (element) {
            utils_1.safeInvoke(_this.props.contentRef, _this, element);
        };
        _this.handleContextMenu = function (e) {
            utils_1.safeInvoke(_this.props.onContextMenu, _this, e);
        };
        _this.handleDoubleClick = function (e) {
            utils_1.safeInvoke(_this.props.onDoubleClick, _this, e);
        };
        return _this;
    }
    TreeNode.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, hasCaret = _a.hasCaret, isExpanded = _a.isExpanded, isSelected = _a.isSelected, label = _a.label;
        var showCaret = hasCaret == null ? React.Children.count(children) > 0 : hasCaret;
        var caretClass = showCaret ? Classes.TREE_NODE_CARET : Classes.TREE_NODE_CARET_NONE;
        var caretStateClass = isExpanded ? Classes.TREE_NODE_CARET_OPEN : Classes.TREE_NODE_CARET_CLOSED;
        var caretClasses = classNames(caretClass, "pt-icon-standard", (_b = {},
            _b[caretStateClass] = showCaret,
            _b));
        var classes = classNames(Classes.TREE_NODE, (_c = {},
            _c[Classes.TREE_NODE_SELECTED] = isSelected,
            _c[Classes.TREE_NODE_EXPANDED] = isExpanded,
            _c), className);
        var contentClasses = classNames(Classes.TREE_NODE_CONTENT, "pt-tree-node-content-" + this.props.depth);
        return (React.createElement("li", { className: classes },
            React.createElement("div", { className: contentClasses, onClick: this.handleClick, onContextMenu: this.handleContextMenu, onDoubleClick: this.handleDoubleClick, ref: this.handleContentRef },
                React.createElement("span", { className: caretClasses, onClick: showCaret ? this.handleCaretClick : null }),
                this.maybeRenderIcon(),
                React.createElement("span", { className: Classes.TREE_NODE_LABEL }, label),
                this.maybeRenderSecondaryLabel()),
            React.createElement(collapse_1.Collapse, { isOpen: isExpanded }, children)));
        var _b, _c;
    };
    TreeNode.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName != null) {
            var iconClasses = classNames(Classes.TREE_NODE_ICON, "pt-icon-standard", Classes.iconClass(iconName));
            return React.createElement("span", { className: iconClasses });
        }
        else {
            return undefined;
        }
    };
    TreeNode.prototype.maybeRenderSecondaryLabel = function () {
        if (this.props.secondaryLabel != null) {
            return React.createElement("span", { className: Classes.TREE_NODE_SECONDARY_LABEL }, this.props.secondaryLabel);
        }
        else {
            return undefined;
        }
    };
    return TreeNode;
}(React.Component));
exports.TreeNode = TreeNode;



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var DragEvents = (function () {
    function DragEvents() {
        var _this = this;
        this.handleMouseDown = function (event) {
            _this.initCoordinateData(event);
            if (_this.handler != null && _this.handler.onActivate != null) {
                var exitCode = _this.handler.onActivate(event);
                if (exitCode === false) {
                    return;
                }
            }
            _this.isActivated = true;
            _this.maybeAlterEventChain(event);
            // It is possible that the mouseup would not be called after the initial
            // mousedown (for example if the mouse is moved out of the window). So,
            // we preemptively detach to avoid duplicate listeners.
            _this.detachDocumentEventListeners();
            _this.attachDocumentEventListeners();
        };
        this.handleMouseMove = function (event) {
            _this.maybeAlterEventChain(event);
            if (_this.isActivated) {
                _this.isDragging = true;
            }
            if (_this.isDragging) {
                var coords = _this.updateCoordinateData(event);
                if (_this.handler != null && _this.handler.onDragMove != null) {
                    _this.handler.onDragMove(event, coords);
                }
            }
        };
        this.handleMouseUp = function (event) {
            _this.maybeAlterEventChain(event);
            if (_this.handler != null) {
                if (_this.isDragging) {
                    var coords = _this.updateCoordinateData(event);
                    if (_this.handler.onDragMove != null) {
                        _this.handler.onDragMove(event, coords);
                    }
                    if (_this.handler.onDragEnd != null) {
                        _this.handler.onDragEnd(event, coords);
                    }
                }
                else if (_this.isActivated) {
                    if (_this.handler.onDoubleClick != null) {
                        if (_this.doubleClickTimeoutToken == null) {
                            // if this the first click of a possible double-click,
                            // we delay the firing of the click event by the
                            // timeout.
                            _this.doubleClickTimeoutToken = setTimeout(function () {
                                delete _this.doubleClickTimeoutToken;
                                if (_this.handler.onClick != null) {
                                    _this.handler.onClick(event);
                                }
                            }, DragEvents.DOUBLE_CLICK_TIMEOUT_MSEC);
                        }
                        else {
                            // otherwise, this is the second click in the double-
                            // click so we cancel the single-click timeout and
                            // fire the double-click event.
                            clearTimeout(_this.doubleClickTimeoutToken);
                            delete _this.doubleClickTimeoutToken;
                            _this.handler.onDoubleClick(event);
                        }
                    }
                    else if (_this.handler.onClick != null) {
                        _this.handler.onClick(event);
                    }
                }
            }
            _this.isActivated = false;
            _this.isDragging = false;
            _this.detachDocumentEventListeners();
        };
    }
    /**
     * Returns true if the event includes a modifier key that often adds the result of the drag
     * event to any existing state. For example, holding CTRL before dragging may select another
     * region in addition to an existing one, while the absence of a modifier key may clear the
     * existing selection first.
     * @param event the mouse event for the drag interaction
     */
    DragEvents.isAdditive = function (event) {
        return event.ctrlKey || event.metaKey;
    };
    DragEvents.prototype.attach = function (element, handler) {
        this.detach();
        this.handler = handler;
        this.element = element;
        if (this.isValidDragHandler(handler)) {
            this.element.addEventListener("mousedown", this.handleMouseDown);
        }
        return this;
    };
    DragEvents.prototype.detach = function () {
        if (this.element != null) {
            this.element.removeEventListener("mousedown", this.handleMouseDown);
            this.detachDocumentEventListeners();
        }
    };
    DragEvents.prototype.isValidDragHandler = function (handler) {
        return handler != null && (handler.onActivate != null
            || handler.onDragMove != null
            || handler.onDragEnd != null
            || handler.onClick != null
            || handler.onDoubleClick != null);
    };
    DragEvents.prototype.attachDocumentEventListeners = function () {
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.handleMouseUp);
    };
    DragEvents.prototype.detachDocumentEventListeners = function () {
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };
    DragEvents.prototype.initCoordinateData = function (event) {
        this.activationCoordinates = [event.clientX, event.clientY];
        this.lastCoordinates = this.activationCoordinates;
    };
    DragEvents.prototype.updateCoordinateData = function (event) {
        var currentCoordinates = [event.clientX, event.clientY];
        var deltaCoordinates = [
            currentCoordinates[0] - this.lastCoordinates[0],
            currentCoordinates[1] - this.lastCoordinates[1],
        ];
        var offsetCoordinates = [
            currentCoordinates[0] - this.activationCoordinates[0],
            currentCoordinates[1] - this.activationCoordinates[1],
        ];
        var data = {
            activation: this.activationCoordinates,
            current: currentCoordinates,
            delta: deltaCoordinates,
            last: this.lastCoordinates,
            offset: offsetCoordinates,
        };
        this.lastCoordinates = [event.clientX, event.clientY];
        return data;
    };
    DragEvents.prototype.maybeAlterEventChain = function (event) {
        if (this.handler.preventDefault) {
            event.preventDefault();
        }
        if (this.handler.stopPropagation) {
            event.stopPropagation();
        }
    };
    return DragEvents;
}());
DragEvents.DOUBLE_CLICK_TIMEOUT_MSEC = 500;
exports.DragEvents = DragEvents;



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(7);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
// amount in pixels that the content div width changes when truncated vs when
// not truncated. Note: could be modified by styles
var CONTENT_DIV_WIDTH_DELTA = 25;
var TruncatedPopoverMode;
(function (TruncatedPopoverMode) {
    TruncatedPopoverMode[TruncatedPopoverMode["ALWAYS"] = 0] = "ALWAYS";
    TruncatedPopoverMode[TruncatedPopoverMode["NEVER"] = 1] = "NEVER";
    TruncatedPopoverMode[TruncatedPopoverMode["WHEN_TRUNCATED"] = 2] = "WHEN_TRUNCATED";
})(TruncatedPopoverMode = exports.TruncatedPopoverMode || (exports.TruncatedPopoverMode = {}));
var TruncatedFormat = (function (_super) {
    tslib_1.__extends(TruncatedFormat, _super);
    function TruncatedFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isTruncated: false };
        _this.handleContentDivRef = function (ref) { return _this.contentDiv = ref; };
        return _this;
    }
    TruncatedFormat.prototype.render = function () {
        var _a = this.props, children = _a.children, detectTruncation = _a.detectTruncation, preformatted = _a.preformatted, truncateLength = _a.truncateLength, truncationSuffix = _a.truncationSuffix;
        var content = "" + children;
        var cellContent = content;
        if (!detectTruncation && truncateLength > 0 && cellContent.length > truncateLength) {
            cellContent = cellContent.substring(0, truncateLength) + truncationSuffix;
        }
        if (this.shouldShowPopover(content)) {
            var popoverClasses = classNames(Classes.TABLE_TRUNCATED_POPOVER, preformatted ? Classes.TABLE_POPOVER_WHITESPACE_PRE : Classes.TABLE_POPOVER_WHITESPACE_NORMAL);
            var popoverContent = React.createElement("div", { className: popoverClasses }, children);
            var className = classNames(this.props.className, Classes.TABLE_TRUNCATED_FORMAT);
            var constraints = [{
                    attachment: "together",
                    to: "window",
                }];
            var iconClasses = classNames(core_1.Classes.ICON_STANDARD, core_1.Classes.iconClass("more"));
            return (React.createElement("div", { className: className },
                React.createElement("div", { className: Classes.TABLE_TRUNCATED_VALUE, ref: this.handleContentDivRef }, cellContent),
                React.createElement(core_1.Popover, { className: Classes.TABLE_TRUNCATED_POPOVER_TARGET, tetherOptions: { constraints: constraints }, content: popoverContent, position: core_1.Position.BOTTOM, useSmartArrowPositioning: true },
                    React.createElement("span", { className: iconClasses }))));
        }
        else {
            var className = classNames(this.props.className, Classes.TABLE_TRUNCATED_FORMAT_TEXT);
            return React.createElement("div", { className: className, ref: this.handleContentDivRef }, cellContent);
        }
    };
    TruncatedFormat.prototype.componentDidMount = function () {
        this.setTruncationState();
    };
    TruncatedFormat.prototype.componentDidUpdate = function () {
        this.setTruncationState();
    };
    TruncatedFormat.prototype.shouldShowPopover = function (content) {
        var _a = this.props, detectTruncation = _a.detectTruncation, showPopover = _a.showPopover, truncateLength = _a.truncateLength;
        switch (showPopover) {
            case TruncatedPopoverMode.ALWAYS:
                return true;
            case TruncatedPopoverMode.NEVER:
                return false;
            case TruncatedPopoverMode.WHEN_TRUNCATED:
                return detectTruncation
                    ? this.state.isTruncated
                    : (truncateLength > 0 && content.length > truncateLength);
            default:
                return false;
        }
    };
    TruncatedFormat.prototype.setTruncationState = function () {
        if (!this.props.detectTruncation || this.props.showPopover !== TruncatedPopoverMode.WHEN_TRUNCATED) {
            return;
        }
        // if the popover handle exists, take it into account
        var popoverHandleAdjustmentFactor = this.state.isTruncated ? CONTENT_DIV_WIDTH_DELTA : 0;
        // add a slight bit of buffer space where we don't show the popover, to deal with cases
        // where everything isn't pixel perfect
        popoverHandleAdjustmentFactor += .5;
        var isTruncated = this.contentDiv !== undefined &&
            (this.contentDiv.scrollWidth - popoverHandleAdjustmentFactor > this.contentDiv.clientWidth ||
                this.contentDiv.scrollHeight > this.contentDiv.clientHeight);
        if (this.state.isTruncated !== isTruncated) {
            this.setState({ isTruncated: isTruncated });
        }
    };
    return TruncatedFormat;
}(React.Component));
TruncatedFormat.defaultProps = {
    detectTruncation: true,
    preformatted: false,
    showPopover: TruncatedPopoverMode.WHEN_TRUNCATED,
    truncateLength: 80,
    truncationSuffix: "...",
};
exports.TruncatedFormat = TruncatedFormat;



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var cell_1 = __webpack_require__(25);
var Column = (function (_super) {
    tslib_1.__extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Column;
}(React.Component));
Column.defaultProps = {
    renderCell: cell_1.emptyCellRenderer,
};
Column = tslib_1.__decorate([
    PureRender
], Column);
exports.Column = Column;



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var regions_1 = __webpack_require__(11);
var Classes = __webpack_require__(6);
var rect_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(10);
/**
 * This class manages the sizes of grid cells using arrays of individual row/column sizes.
 */
var Grid = (function () {
    /**
     * This constructor accumulates the heights and widths in `O(n)`, saving
     * time in later calculations.
     *
     * @param bleed - The number of rows/cols that we expand beyond the
     *     viewport (on all sides). This helps avoid displaying an empty
     *     viewport when the user scrolls quickly.
     */
    function Grid(rowHeights, columnWidths, bleed, ghostHeight, ghostWidth) {
        if (bleed === void 0) { bleed = Grid.DEFAULT_BLEED; }
        if (ghostHeight === void 0) { ghostHeight = Grid.DEFAULT_GHOST_HEIGHT; }
        if (ghostWidth === void 0) { ghostWidth = Grid.DEFAULT_GHOST_WIDTH; }
        var _this = this;
        this.getCumulativeWidthBefore = function (index) {
            return (index === 0) ? 0 : _this.getCumulativeWidthAt(index - 1);
        };
        this.getCumulativeWidthAt = function (index) {
            if (_this.numCols === 0) {
                return _this.ghostWidth * index;
            }
            else if (index >= _this.numCols) {
                return _this.cumulativeColumnWidths[_this.numCols - 1] + _this.ghostWidth * (index - _this.numCols + 1);
            }
            else {
                return _this.cumulativeColumnWidths[index];
            }
        };
        this.getCumulativeHeightBefore = function (index) {
            return (index === 0) ? 0 : _this.getCumulativeHeightAt(index - 1);
        };
        this.getCumulativeHeightAt = function (index) {
            if (_this.numRows === 0) {
                return _this.ghostHeight * index;
            }
            else if (index >= _this.numRows) {
                return _this.cumulativeRowHeights[_this.numRows - 1] + _this.ghostHeight * (index - _this.numRows + 1);
            }
            else {
                return _this.cumulativeRowHeights[index];
            }
        };
        this.columnWidths = columnWidths;
        this.rowHeights = rowHeights;
        this.cumulativeColumnWidths = utils_1.Utils.accumulate(columnWidths);
        this.cumulativeRowHeights = utils_1.Utils.accumulate(rowHeights);
        this.numCols = columnWidths.length;
        this.numRows = rowHeights.length;
        this.bleed = bleed;
        this.ghostHeight = ghostHeight;
        this.ghostWidth = ghostWidth;
    }
    /**
     * Returns the `Rect` bounds of a cell in scrollpane client space.
     *
     * Scrollpane client coordinate space uses the origin of the scrollpane
     * client (the inside part that you're moving around).
     *
     * For example, let's say you're scrolling around a block of 1000 x 1000
     * cells. Regardless where you've scrolled, the first cell is always at
     * 0,0 in scrollpane client space. the cell to the right of it is always
     * at, e.g., 100,0.
     */
    Grid.prototype.getCellRect = function (rowIndex, columnIndex) {
        var height = this.rowHeights[rowIndex];
        var top = this.cumulativeRowHeights[rowIndex] - height;
        var width = this.columnWidths[columnIndex];
        var left = this.cumulativeColumnWidths[columnIndex] - width;
        return new rect_1.Rect(left, top, width, height);
    };
    /**
     * Returns the `Rect` bounds of a cell in scrollpane client space.
     *
     * If the cell is beyond the bounds of the user-defined table cells, it is
     * considered a "ghost" cell. If a width/height is not defined for that
     * row/column, we use the default width/height.
     */
    Grid.prototype.getGhostCellRect = function (rowIndex, columnIndex) {
        var left = 0;
        var top = 0;
        var width = 0;
        var height = 0;
        if (rowIndex >= this.rowHeights.length) {
            height = this.ghostHeight;
            top = this.getHeight() + this.ghostHeight * (rowIndex - this.numRows);
        }
        else {
            height = this.rowHeights[rowIndex];
            top = this.cumulativeRowHeights[rowIndex] - height;
        }
        if (columnIndex >= this.columnWidths.length) {
            width = this.ghostWidth;
            left = this.getWidth() + this.ghostWidth * (columnIndex - this.numCols);
        }
        else {
            width = this.columnWidths[columnIndex];
            left = this.cumulativeColumnWidths[columnIndex] - width;
        }
        return new rect_1.Rect(left, top, width, height);
    };
    /**
     * Returns the `Rect` with the base coordinate and height of the specified row.
     */
    Grid.prototype.getRowRect = function (rowIndex) {
        var height = this.rowHeights[rowIndex];
        var top = this.cumulativeRowHeights[rowIndex] - height;
        return new rect_1.Rect(0, top, this.getWidth(), height);
    };
    /**
     * Returns the `Rect` with the base coordinate and width of the specified column.
     */
    Grid.prototype.getColumnRect = function (columnIndex) {
        var width = this.columnWidths[columnIndex];
        var left = this.cumulativeColumnWidths[columnIndex] - width;
        return new rect_1.Rect(left, 0, width, this.getHeight());
    };
    /**
     * Returns the total width of the entire grid
     */
    Grid.prototype.getWidth = function () {
        return this.numCols === 0 ? 0 : this.cumulativeColumnWidths[this.numCols - 1];
    };
    /**
     * Returns the total width of the entire grid
     */
    Grid.prototype.getHeight = function () {
        return this.numRows === 0 ? 0 : this.cumulativeRowHeights[this.numRows - 1];
    };
    /**
     * Returns the `Rect` bounds of entire grid
     */
    Grid.prototype.getRect = function () {
        return new rect_1.Rect(0, 0, this.getWidth(), this.getHeight());
    };
    /**
     * Maps each cell that intersects with the given `Rect` argument. The
     * indices of iteration are extended in both directions by the integer
     * `bleed` class property, then are clamped between 0 and the number of
     * rows/columns.
     *
     * Uses a binary search for each of the 4 edges of the bounds, resulting
     * in a runtime of `O(log(rows) + log(cols))` plus the `O(irows * icols)`
     * iteration of intersecting cells.
     */
    Grid.prototype.mapCellsInRect = function (rect, callback) {
        var results = [];
        if (rect == null) {
            return results;
        }
        var _a = this.getRowIndicesInRect(rect), rowIndexStart = _a.rowIndexStart, rowIndexEnd = _a.rowIndexEnd;
        var _b = this.getColumnIndicesInRect(rect), columnIndexStart = _b.columnIndexStart, columnIndexEnd = _b.columnIndexEnd;
        for (var rowIndex = rowIndexStart; rowIndex <= rowIndexEnd; rowIndex++) {
            for (var columnIndex = columnIndexStart; columnIndex <= columnIndexEnd; columnIndex++) {
                results.push(callback(rowIndex, columnIndex));
            }
        }
        return results;
    };
    /**
     * Maps each row that intersects with the given `Rect` argument.
     *
     * See Grid.mapCellsInRect for more details.
     */
    Grid.prototype.mapRowsInRect = function (rect, callback) {
        var results = [];
        if (rect == null) {
            return results;
        }
        var _a = this.getRowIndicesInRect(rect), rowIndexStart = _a.rowIndexStart, rowIndexEnd = _a.rowIndexEnd;
        for (var rowIndex = rowIndexStart; rowIndex <= rowIndexEnd; rowIndex++) {
            results.push(callback(rowIndex));
        }
        return results;
    };
    /**
     * Maps each column that intersects with the given `Rect` argument.
     *
     * See Grid.mapCellsInRect for more details.
     */
    Grid.prototype.mapColumnsInRect = function (rect, callback) {
        var results = [];
        if (rect == null) {
            return results;
        }
        var _a = this.getColumnIndicesInRect(rect), columnIndexStart = _a.columnIndexStart, columnIndexEnd = _a.columnIndexEnd;
        for (var columnIndex = columnIndexStart; columnIndex <= columnIndexEnd; columnIndex++) {
            results.push(callback(columnIndex));
        }
        return results;
    };
    /**
     * Returns the start and end indices of rows that intersect with the given
     * `Rect` argument.
     */
    Grid.prototype.getRowIndicesInRect = function (rect, includeGhostCells, limit) {
        if (includeGhostCells === void 0) { includeGhostCells = false; }
        if (limit === void 0) { limit = Grid.DEFAULT_MAX_ROWS; }
        if (rect == null) {
            return { rowIndexEnd: 0, rowIndexStart: 0 };
        }
        var searchEnd = includeGhostCells ? Math.max(this.numRows, Grid.DEFAULT_MAX_ROWS) : this.numRows;
        var _a = this.getIndicesInInterval(rect.top, rect.top + rect.height, searchEnd, !includeGhostCells, this.getCumulativeHeightAt), start = _a.start, end = _a.end;
        var rowIndexEnd = (limit > 0 && end - start > limit)
            ? start + limit
            : end;
        return {
            rowIndexEnd: rowIndexEnd,
            rowIndexStart: start,
        };
    };
    /**
     * Returns the start and end indices of columns that intersect with the
     * given `Rect` argument.
     */
    Grid.prototype.getColumnIndicesInRect = function (rect, includeGhostCells, limit) {
        if (includeGhostCells === void 0) { includeGhostCells = false; }
        if (limit === void 0) { limit = Grid.DEFAULT_MAX_COLUMNS; }
        if (rect == null) {
            return { columnIndexEnd: 0, columnIndexStart: 0 };
        }
        var searchEnd = includeGhostCells ? Math.max(this.numCols, Grid.DEFAULT_MAX_COLUMNS) : this.numCols;
        var _a = this.getIndicesInInterval(rect.left, rect.left + rect.width, searchEnd, !includeGhostCells, this.getCumulativeWidthAt), start = _a.start, end = _a.end;
        var columnIndexEnd = (limit > 0 && end - start > limit)
            ? start + limit
            : end;
        return {
            columnIndexEnd: columnIndexEnd,
            columnIndexStart: start,
        };
    };
    Grid.prototype.isGhostIndex = function (rowIndex, columnIndex) {
        return (rowIndex >= this.numRows || columnIndex >= this.numCols);
    };
    Grid.prototype.getExtremaClasses = function (rowIndex, columnIndex, rowEnd, columnEnd) {
        if (rowIndex === rowEnd && columnIndex === columnEnd) {
            return [Classes.TABLE_LAST_IN_COLUMN, Classes.TABLE_LAST_IN_ROW];
        }
        if (rowIndex === rowEnd) {
            return [Classes.TABLE_LAST_IN_COLUMN];
        }
        if (columnIndex === columnEnd) {
            return [Classes.TABLE_LAST_IN_ROW];
        }
        return [];
    };
    Grid.prototype.getRegionStyle = function (region) {
        var cardinality = regions_1.Regions.getRegionCardinality(region);
        switch (cardinality) {
            case regions_1.RegionCardinality.CELLS: {
                var _a = region.rows, rowStart = _a[0], rowEnd = _a[1];
                var _b = region.cols, colStart = _b[0], colEnd = _b[1];
                // if the region is outside the bounds of the table, don't display it
                if (this.isGhostIndex(rowStart, colStart) || this.isGhostIndex(rowEnd, colEnd)) {
                    return { display: "none" };
                }
                var cellRect0 = this.getCellRect(rowStart, colStart);
                var cellRect1 = this.getCellRect(rowEnd, colEnd);
                var offsetLeft = colStart === 0 ? 0 : 1;
                var offsetTop = rowStart === 0 ? 0 : 1;
                var rect = cellRect0.union(cellRect1);
                rect.height += offsetTop;
                rect.left -= offsetLeft;
                rect.width += offsetLeft;
                rect.top -= offsetTop;
                return tslib_1.__assign({}, rect.style(), { display: "block" });
            }
            case regions_1.RegionCardinality.FULL_COLUMNS: {
                var _c = region.cols, colStart = _c[0], colEnd = _c[1];
                // if the region is outside the bounds of the table, don't display it
                if (this.isGhostIndex(0, colStart) || this.isGhostIndex(0, colEnd)) {
                    return { display: "none" };
                }
                var cellRect0 = this.getCellRect(0, colStart);
                var cellRect1 = this.getCellRect(0, colEnd);
                var rect = cellRect0.union(cellRect1);
                var offsetLeft = colStart === 0 ? 0 : 1;
                return {
                    bottom: 0,
                    display: "block",
                    left: rect.left - offsetLeft,
                    top: 0,
                    width: rect.width + offsetLeft,
                };
            }
            case regions_1.RegionCardinality.FULL_ROWS: {
                var _d = region.rows, rowStart = _d[0], rowEnd = _d[1];
                // if the region is outside the bounds of the table, don't display it
                if (this.isGhostIndex(rowStart, 0) || this.isGhostIndex(rowEnd, 0)) {
                    return { display: "none" };
                }
                var cellRect0 = this.getCellRect(rowStart, 0);
                var cellRect1 = this.getCellRect(rowEnd, 0);
                var rect = cellRect0.union(cellRect1);
                var offsetTop = rowStart === 0 ? 0 : 1;
                return {
                    display: "block",
                    height: rect.height + offsetTop,
                    left: 0,
                    right: 0,
                    top: rect.top - offsetTop,
                };
            }
            case regions_1.RegionCardinality.FULL_TABLE:
                return {
                    bottom: 0,
                    display: "block",
                    left: 0,
                    right: 0,
                    top: 0,
                };
            default: return { display: "none" };
        }
    };
    Grid.prototype.getIndicesInInterval = function (min, max, count, useEndBleed, lookup) {
        var start = utils_1.Utils.binarySearch(min, count - 1, lookup);
        var end = utils_1.Utils.binarySearch(max, count - 1, lookup);
        // correct exact pixel alignment
        if (start >= 0 && min === lookup(start)) {
            start += 1;
        }
        // apply bounded bleeds
        start = Math.max(0, start - this.bleed);
        if (useEndBleed) {
            end = Math.min(count - 1, end + this.bleed);
        }
        else {
            end = Math.min(count - 1, end);
        }
        return { start: start, end: end };
    };
    return Grid;
}());
Grid.DEFAULT_BLEED = 3;
Grid.DEFAULT_MAX_COLUMNS = 50;
Grid.DEFAULT_MAX_ROWS = 200;
Grid.DEFAULT_GHOST_HEIGHT = 20;
Grid.DEFAULT_GHOST_WIDTH = 150;
exports.Grid = Grid;



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(133));
__export(__webpack_require__(134));



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ns = "[Blueprint Table]";
var deprec = ns + " DEPRECATION:";
exports.COLUMN_HEADER_CELL_MENU_DEPRECATED = deprec + " <ColumnHeaderCell> menu is deprecated. Use renderMenu instead.";
exports.ROW_HEADER_CELL_MENU_DEPRECATED = deprec + " <RowHeaderCell> menu is deprecated. Use renderMenu instead.";



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var core_1 = __webpack_require__(7);
var Classes = __webpack_require__(6);
var utils_1 = __webpack_require__(10);
var HeaderCell = (function (_super) {
    tslib_1.__extends(HeaderCell, _super);
    function HeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        return _this;
    }
    HeaderCell.prototype.shouldComponentUpdate = function (nextProps) {
        return !utils_1.Utils.shallowCompareKeys(this.props, nextProps, { exclude: ["style"] })
            || !utils_1.Utils.deepCompareKeys(this.props, nextProps, ["style"]);
    };
    HeaderCell.prototype.renderContextMenu = function (_event) {
        var renderMenu = this.props.renderMenu;
        if (core_1.Utils.isFunction(renderMenu)) {
            // the preferred way (a consistent function instance that won't cause as many re-renders)
            return renderMenu(this.props.index);
        }
        else {
            // the deprecated way (leads to lots of unnecessary re-renders because of menu-item
            // callbacks needing access to the index of the right-clicked cell, which demands that
            // new callback functions and JSX elements be recreated on each render of the parent)
            return this.props.menu;
        }
    };
    HeaderCell.prototype.render = function () {
        var classes = classNames(Classes.TABLE_HEADER, (_a = {},
            _a[Classes.TABLE_HEADER_ACTIVE] = this.props.isActive || this.state.isActive,
            _a[Classes.TABLE_HEADER_SELECTED] = this.props.isSelected,
            _a[core_1.Classes.LOADING] = this.props.loading,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, style: this.props.style }, this.props.children));
        var _a;
    };
    return HeaderCell;
}(React.Component));
HeaderCell = tslib_1.__decorate([
    core_1.ContextMenuTarget
], HeaderCell);
exports.HeaderCell = HeaderCell;



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var core_1 = __webpack_require__(7);
var Classes = __webpack_require__(6);
var Errors = __webpack_require__(68);
var loadableContent_1 = __webpack_require__(35);
var headerCell_1 = __webpack_require__(69);
var RowHeaderCell = (function (_super) {
    tslib_1.__extends(RowHeaderCell, _super);
    function RowHeaderCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowHeaderCell.prototype.render = function () {
        var loadableContentDivClasses = classNames(Classes.TABLE_ROW_NAME_TEXT, Classes.TABLE_TRUNCATED_TEXT);
        var _a = this.props, 
        // from IRowHeaderCellProps
        isRowReorderable = _a.isRowReorderable, isRowSelected = _a.isRowSelected, 
        // from IHeaderProps
        spreadableProps = tslib_1.__rest(_a, ["isRowReorderable", "isRowSelected"]);
        return (React.createElement(headerCell_1.HeaderCell, tslib_1.__assign({ isReorderable: this.props.isRowReorderable, isSelected: this.props.isRowSelected }, spreadableProps),
            React.createElement("div", { className: Classes.TABLE_ROW_NAME },
                React.createElement(loadableContent_1.LoadableContent, { loading: spreadableProps.loading },
                    React.createElement("div", { className: loadableContentDivClasses }, spreadableProps.name))),
            this.props.children,
            spreadableProps.loading ? undefined : spreadableProps.resizeHandle));
    };
    RowHeaderCell.prototype.validateProps = function (nextProps) {
        if (nextProps.menu != null) {
            // throw this warning from the publicly exported, higher-order *HeaderCell components
            // rather than HeaderCell, so consumers know exactly which components are receiving the
            // offending prop
            console.warn(Errors.ROW_HEADER_CELL_MENU_DEPRECATED);
        }
    };
    return RowHeaderCell;
}(core_1.AbstractComponent));
exports.RowHeaderCell = RowHeaderCell;



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(7);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var batcher_1 = __webpack_require__(72);
var Classes = __webpack_require__(6);
var utils_1 = __webpack_require__(10);
var reorderable_1 = __webpack_require__(139);
var resizable_1 = __webpack_require__(140);
var selectable_1 = __webpack_require__(38);
var regions_1 = __webpack_require__(11);
var RESET_CELL_KEYS_BLACKLIST = [
    "endIndex",
    "startIndex",
    "viewportRect",
];
var Header = (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            hasSelectionEnded: false,
        };
        _this.batcher = new batcher_1.Batcher();
        _this.locateClick = function (event) {
            var coord = _this.props.getMouseCoordinate(event);
            _this.activationIndex = _this.props.convertPointToIndex(coord);
            return _this.props.toRegion(_this.activationIndex);
        };
        _this.locateDragForSelection = function (_event, coords) {
            var coord = _this.props.getDragCoordinate(coords.current);
            var startIndex = _this.activationIndex;
            var endIndex = _this.props.convertPointToIndex(coord);
            return _this.props.toRegion(startIndex, endIndex);
        };
        _this.locateDragForReordering = function (_event, coords) {
            var coord = _this.props.getDragCoordinate(coords.current);
            var guideIndex = _this.props.convertPointToIndex(coord, true);
            return (guideIndex < 0) ? undefined : guideIndex;
        };
        _this.renderCells = function () {
            var startIndex = _this.props.startIndex;
            var endIndex = _this.props.endIndex;
            _this.batcher.startNewBatch();
            for (var index = startIndex; index <= endIndex; index++) {
                _this.batcher.addArgsToBatch(index);
            }
            _this.batcher.removeOldAddNew(_this.renderNewCell);
            if (!_this.batcher.isDone()) {
                _this.batcher.idleCallback(function () { return _this.forceUpdate(); });
            }
            return _this.batcher.getList();
        };
        _this.renderNewCell = function (index) {
            var extremaClasses = _this.props.getCellExtremaClasses(index, _this.props.endIndex);
            var renderer = _this.props.isGhostIndex(index)
                ? _this.props.renderGhostCell
                : _this.renderCell;
            return renderer(index, extremaClasses);
        };
        _this.renderCell = function (index, extremaClasses) {
            var _a = _this.props, getIndexClass = _a.getIndexClass, onSelection = _a.onSelection, selectedRegions = _a.selectedRegions;
            var cell = _this.props.renderHeaderCell(index);
            var isLoading = cell.props.loading != null ? cell.props.loading : _this.props.loading;
            var isSelected = _this.props.isCellSelected(index);
            var isEntireCellTargetReorderable = _this.isEntireCellTargetReorderable(cell, isSelected);
            var className = classNames(extremaClasses, (_b = {},
                _b[Classes.TABLE_DRAGGABLE] = onSelection != null,
                _b[Classes.TABLE_HEADER_REORDERABLE] = isEntireCellTargetReorderable,
                _b), _this.props.getCellIndexClass(index), cell.props.className);
            var cellProps = (_c = {
                    className: className,
                    index: index
                },
                _c[_this.props.headerCellIsSelectedPropName] = isSelected,
                _c[_this.props.headerCellIsReorderablePropName] = isEntireCellTargetReorderable,
                _c.loading = isLoading,
                _c.reorderHandle = _this.maybeRenderReorderHandle(cell, index),
                _c);
            var modifiedHandleSizeChanged = function (size) { return _this.props.handleSizeChanged(index, size); };
            var modifiedHandleResizeEnd = function (size) { return _this.props.handleResizeEnd(index, size); };
            var modifiedHandleResizeHandleDoubleClick = function () { return _this.props.handleResizeDoubleClick(index); };
            var baseChildren = (React.createElement(selectable_1.DragSelectable, { allowMultipleSelection: _this.props.allowMultipleSelection, disabled: isEntireCellTargetReorderable, ignoredSelectors: ["." + Classes.TABLE_REORDER_HANDLE], key: getIndexClass(index), locateClick: _this.locateClick, locateDrag: _this.locateDragForSelection, onFocus: _this.props.onFocus, onSelection: _this.handleDragSelectableSelection, onSelectionEnd: _this.handleDragSelectableSelectionEnd, selectedRegions: selectedRegions, selectedRegionTransform: _this.props.selectedRegionTransform },
                React.createElement(resizable_1.Resizable, { isResizable: _this.props.isResizable, maxSize: _this.props.maxSize, minSize: _this.props.minSize, onDoubleClick: modifiedHandleResizeHandleDoubleClick, onLayoutLock: _this.props.onLayoutLock, onResizeEnd: modifiedHandleResizeEnd, onSizeChanged: modifiedHandleSizeChanged, orientation: _this.props.resizeOrientation, size: _this.props.getCellSize(index) }, React.cloneElement(cell, cellProps))));
            return _this.isReorderHandleEnabled(cell)
                ? baseChildren // reordering will be handled by interacting with the reorder handle
                : _this.wrapInDragReorderable(index, baseChildren, !isEntireCellTargetReorderable);
            var _b, _c;
        };
        _this.handleDragSelectableSelection = function (selectedRegions) {
            _this.props.onSelection(selectedRegions);
            _this.setState({ hasSelectionEnded: false });
        };
        _this.handleDragSelectableSelectionEnd = function () {
            _this.activationIndex = null; // not strictly required, but good practice
            _this.setState({ hasSelectionEnded: true });
        };
        _this.isEntireCellTargetReorderable = function (cell, isSelected) {
            var selectedRegions = _this.props.selectedRegions;
            // although reordering may be generally enabled for this row/column (via props.isReorderable), the
            // row/column shouldn't actually become reorderable from a user perspective until a few other
            // conditions are true:
            return _this.props.isReorderable
                && isSelected
                && _this.state.hasSelectionEnded
                && regions_1.Regions.getRegionCardinality(selectedRegions[0]) === _this.props.fullRegionCardinality
                && selectedRegions.length === 1
                && !_this.isReorderHandleEnabled(cell);
        };
        return _this;
    }
    Header.prototype.componentDidMount = function () {
        if (this.props.selectedRegions != null && this.props.selectedRegions.length > 0) {
            // we already have a selection defined, so we'll want to enable reordering interactions
            // right away if other criteria are satisfied too.
            this.setState({ hasSelectionEnded: true });
        }
    };
    Header.prototype.componentWillUnmount = function () {
        this.batcher.cancelOutstandingCallback();
    };
    Header.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.selectedRegions != null && nextProps.selectedRegions.length > 0) {
            this.setState({ hasSelectionEnded: true });
        }
        else {
            this.setState({ hasSelectionEnded: false });
        }
    };
    Header.prototype.componentWillUpdate = function (nextProps, nextState) {
        var resetKeysBlacklist = { exclude: RESET_CELL_KEYS_BLACKLIST };
        var shouldResetBatcher = !utils_1.Utils.shallowCompareKeys(this.props, nextProps, resetKeysBlacklist);
        shouldResetBatcher = shouldResetBatcher || !utils_1.Utils.shallowCompareKeys(this.state, nextState);
        if (shouldResetBatcher) {
            this.batcher.reset();
        }
    };
    Header.prototype.render = function () {
        return this.props.wrapCells(this.renderCells());
    };
    Header.prototype.isReorderHandleEnabled = function (cell) {
        // the reorder handle can only appear in the column interaction bar
        return this.isColumnHeader() && cell.props.useInteractionBar && this.props.isReorderable;
    };
    Header.prototype.maybeRenderReorderHandle = function (cell, index) {
        return !this.isReorderHandleEnabled(cell)
            ? undefined
            : this.wrapInDragReorderable(index, React.createElement("div", { className: Classes.TABLE_REORDER_HANDLE_TARGET },
                React.createElement("div", { className: Classes.TABLE_REORDER_HANDLE },
                    React.createElement("span", { className: classNames(core_1.Classes.ICON_STANDARD, core_1.IconClasses.DRAG_HANDLE_VERTICAL) }))));
    };
    Header.prototype.isColumnHeader = function () {
        return this.props.fullRegionCardinality === regions_1.RegionCardinality.FULL_COLUMNS;
    };
    Header.prototype.wrapInDragReorderable = function (index, children, disabled) {
        return (React.createElement(reorderable_1.DragReorderable, { disabled: disabled, key: this.props.getIndexClass(index), locateClick: this.locateClick, locateDrag: this.locateDragForReordering, onReordered: this.props.onReordered, onReordering: this.props.onReordering, onSelection: this.props.onSelection, selectedRegions: this.props.selectedRegions, toRegion: this.props.toRegion }, children));
    };
    return Header;
}(React.Component));
exports.Header = Header;
/**
 * In the current architecture, ColumnHeaderCell and RowHeaderCell each need to include this same
 * shouldComponentUpdate code at their level. To avoid writing the same code in two places, we
 * expose this utility for each higher-level component to leverage in their own respective
 * shouldComponentUpdate functions.
 *
 * (See: https://github.com/palantir/blueprint/issues/1214)
 *
 * @param props - the current props
 * @param nextProps - the next props
 */
function shouldHeaderComponentUpdate(props, nextProps, isSelectedRegionRelevant) {
    if (!utils_1.Utils.shallowCompareKeys(props, nextProps, { exclude: ["selectedRegions"] })) {
        return true;
    }
    var relevantSelectedRegions = props.selectedRegions.filter(isSelectedRegionRelevant);
    var nextRelevantSelectedRegions = nextProps.selectedRegions.filter(isSelectedRegionRelevant);
    // ignore selection changes that didn't involve any relevant selected regions (FULL_COLUMNS
    // for column headers, or FULL_ROWS for row headers)
    if (relevantSelectedRegions.length > 0 || nextRelevantSelectedRegions.length > 0) {
        return !utils_1.Utils.deepCompareKeys(relevantSelectedRegions, nextRelevantSelectedRegions);
    }
    return false;
}
exports.shouldHeaderComponentUpdate = shouldHeaderComponentUpdate;



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(7);
var requestIdleCallback_1 = __webpack_require__(138);
/**
 * This class helps batch updates to large lists.
 *
 * For example, if your React component has many children, updating them all at
 * once may cause jank when reconciling the DOM. This class helps you update
 * only a few children per frame.
 *
 * A typical usage would be:
 *
 * ```tsx
 * public renderChildren = (allChildrenKeys: string[]) => {
 *
 *     batcher.startNewBatch();
 *
 *     allChildrenKeys.forEach((prop1: string, index: number) => {
 *         batcher.addArgsToBatch(prop1, "prop2", index);
 *     });
 *
 *     batcher.removeOldAddNew((prop1: string, prop2: string, other: number) => {
 *         return <Child prop1={prop1} prop2={prop2} other={other} />;
 *     });
 *
 *     if (!batcher.isDone()) {
 *         batcher.idleCallback(this.forceUpdate());
 *     }
 *
 *     const currentChildren = batcher.getList();
 *     return currentChildren;
 * }
 *
 * ```
 */
var Batcher = (function () {
    function Batcher() {
        var _this = this;
        this.currentObjects = {};
        this.oldObjects = {};
        this.batchArgs = {};
        this.done = true;
        this.handleIdleCallback = function () {
            var callback = _this.callback;
            delete _this.callback;
            core_1.Utils.safeInvoke(callback);
        };
        this.mapCurrentObjectKey = function (key) {
            return _this.currentObjects[key];
        };
    }
    /**
     * Resets the "batch" and "current" sets. This essentially clears the cache
     * and prevents accidental re-use of "current" objects.
     */
    Batcher.prototype.reset = function () {
        this.batchArgs = {};
        this.oldObjects = this.currentObjects;
        this.currentObjects = {};
    };
    /**
     * Starts a new "batch" argument set
     */
    Batcher.prototype.startNewBatch = function () {
        this.batchArgs = {};
    };
    /**
     * Stores the variadic arguments to be later batched together.
     *
     * The arguments must be simple stringifyable objects.
     */
    Batcher.prototype.addArgsToBatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.batchArgs[args.join(Batcher.ARG_DELIMITER)] = args;
    };
    /**
     * Compares the set of "batch" arguments to the "current" set. Creates any
     * new objects using the callback as a factory. Removes old objects.
     *
     * Arguments that are in the "current" set but were not part of the last
     * "batch" set are considered candidates for removal. Similarly, Arguments
     * that are part of the "batch" set but not the "current" set are candidates
     * for addition.
     *
     * The number of objects added and removed may be limited with the
     * `...Limit` parameters.
     *
     * Finally, the batcher determines if the batching is complete if the
     * "current" arguments match the "batch" arguments.
     */
    Batcher.prototype.removeOldAddNew = function (callback, addNewLimit, removeOldLimit, updateLimit) {
        var _this = this;
        if (addNewLimit === void 0) { addNewLimit = Batcher.DEFAULT_ADD_LIMIT; }
        if (removeOldLimit === void 0) { removeOldLimit = Batcher.DEFAULT_REMOVE_LIMIT; }
        if (updateLimit === void 0) { updateLimit = Batcher.DEFAULT_UPDATE_LIMIT; }
        // remove old
        var keysToRemove = this.setKeysDifference(this.currentObjects, this.batchArgs, removeOldLimit);
        keysToRemove.forEach(function (key) { return delete _this.currentObjects[key]; });
        // remove ALL old objects not in batch
        var keysToRemoveOld = this.setKeysDifference(this.oldObjects, this.batchArgs, -1);
        keysToRemoveOld.forEach(function (key) { return delete _this.oldObjects[key]; });
        // copy ALL old objects into current objects if not defined
        var keysToShallowCopy = Object.keys(this.oldObjects);
        keysToShallowCopy.forEach(function (key) {
            if (_this.currentObjects[key] == null) {
                _this.currentObjects[key] = _this.oldObjects[key];
            }
        });
        // update old objects with factory
        var keysToUpdate = this.setKeysIntersection(this.oldObjects, this.currentObjects, updateLimit);
        keysToUpdate.forEach(function (key) {
            delete _this.oldObjects[key];
            _this.currentObjects[key] = callback.apply(undefined, _this.batchArgs[key]);
        });
        // add new objects with factory
        var keysToAdd = this.setKeysDifference(this.batchArgs, this.currentObjects, addNewLimit);
        keysToAdd.forEach(function (key) { return _this.currentObjects[key] = callback.apply(undefined, _this.batchArgs[key]); });
        // set `done` to true of sets match exactly after add/remove and there
        // are no "old objects" remaining
        this.done = this.setHasSameKeys(this.batchArgs, this.currentObjects)
            && Object.keys(this.oldObjects).length === 0;
    };
    /**
     * Returns true of the "current" set matches the "batch" set.
     */
    Batcher.prototype.isDone = function () {
        return this.done;
    };
    /**
     * Returns all the objects in the "current" set.
     */
    Batcher.prototype.getList = function () {
        return Object.keys(this.currentObjects).map(this.mapCurrentObjectKey);
    };
    /**
     * Registers a callback to be invoked on the next idle frame. If a callback
     * has already been registered, we do not register a new one.
     */
    Batcher.prototype.idleCallback = function (callback) {
        if (!this.callback) {
            this.callback = callback;
            requestIdleCallback_1.requestIdleCallback(this.handleIdleCallback);
        }
    };
    Batcher.prototype.cancelOutstandingCallback = function () {
        delete this.callback;
    };
    Batcher.prototype.setKeysDifference = function (a, b, limit) {
        return this.setKeysOperation(a, b, "difference", limit);
    };
    Batcher.prototype.setKeysIntersection = function (a, b, limit) {
        return this.setKeysOperation(a, b, "intersect", limit);
    };
    /**
     * Compares the keys of A from B -- and performs an "intersection" or
     * "difference" operation on the keys.
     *
     * Note that the order of operands A and B matters for the "difference"
     * operation.
     *
     * Returns an array of at most `limit` keys.
     */
    Batcher.prototype.setKeysOperation = function (a, b, operation, limit) {
        var result = [];
        var aKeys = Object.keys(a);
        for (var i = 0; i < aKeys.length && (limit < 0 || result.length < limit); i++) {
            var key = aKeys[i];
            if ((operation === "difference" && a[key] && !b[key]) ||
                (operation === "intersect" && a[key] && b[key])) {
                result.push(key);
            }
        }
        return result;
    };
    /**
     * Returns true of objects `a` and `b` have exactly the same keys.
     */
    Batcher.prototype.setHasSameKeys = function (a, b) {
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (var _i = 0, aKeys_1 = aKeys; _i < aKeys_1.length; _i++) {
            var aKey = aKeys_1[_i];
            if (b[aKey] === undefined) {
                return false;
            }
        }
        return true;
    };
    return Batcher;
}());
Batcher.DEFAULT_ADD_LIMIT = 20;
Batcher.DEFAULT_UPDATE_LIMIT = 20;
Batcher.DEFAULT_REMOVE_LIMIT = 20;
Batcher.ARG_DELIMITER = "|";
exports.Batcher = Batcher;



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var Hello_1 = __webpack_require__(74);
ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: "TypeScript", framework: "React" }), document.getElementById("example"));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var core_1 = __webpack_require__(7);
var table_1 = __webpack_require__(127);
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("b", null,
                "Hi there! ",
                this.props.compiler,
                " and ",
                this.props.framework,
                "!"),
            " ",
            React.createElement("br", null),
            React.createElement(core_1.AnchorButton, { text: "Click" }),
            React.createElement(DialogExample, null));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
var DialogExample = (function (_super) {
    __extends(DialogExample, _super);
    function DialogExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isOpen: false };
        _this.renderCell = function (rowIndex) {
            return React.createElement(table_1.Cell, null, "$" + (rowIndex * 10 + 11).toFixed(2));
        };
        _this.toggleDialog = function () { return _this.setState({ isOpen: !_this.state.isOpen }); };
        return _this;
    }
    DialogExample.prototype.render = function () {
        return (React.createElement("div", { style: { padding: '10%' } },
            React.createElement(core_1.Button, { onClick: this.toggleDialog, text: "Show dialog" }),
            React.createElement(core_1.Dialog, { iconName: "inbox", isOpen: this.state.isOpen, onClose: this.toggleDialog, title: "Dialog header" },
                React.createElement("div", { className: "pt-dialog-body" }, "Some content"),
                React.createElement("div", { className: "pt-dialog-footer" },
                    React.createElement("div", { className: "pt-dialog-footer-actions" },
                        React.createElement(core_1.Button, { text: "Secondary" }),
                        React.createElement(core_1.Button, { intent: core_1.Intent.PRIMARY, onClick: this.toggleDialog, text: "Primary" })))),
            React.createElement("h5", null, "Table! "),
            React.createElement(table_1.Table, { numRows: 10 },
                React.createElement(table_1.Column, { name: "Dollars", renderCell: this.renderCell }))));
    };
    return DialogExample;
}(React.Component));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(76));



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var interactionMode_1 = __webpack_require__(77);
exports.FOCUS_DISABLED_CLASS = "pt-focus-disabled";
/* istanbul ignore next */
var fakeFocusEngine = {
    isActive: function () { return true; },
    start: function () { return true; },
    stop: function () { return true; },
};
/* istanbul ignore next */
var focusEngine = typeof document !== "undefined"
    ? new interactionMode_1.InteractionModeEngine(document.documentElement, exports.FOCUS_DISABLED_CLASS)
    : fakeFocusEngine;
// this is basically meaningless to unit test; it requires manual UI testing
/* istanbul ignore next */
exports.FocusStyleManager = {
    alwaysShowFocus: function () { return focusEngine.stop(); },
    isActive: function () { return focusEngine.isActive(); },
    onlyShowFocusOnTabs: function () { return focusEngine.start(); },
};



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var TAB_KEY_CODE = 9;
/* istanbul ignore next */
/**
 * A nifty little class that maintains event handlers to add a class to the container element
 * when entering "mouse mode" (on a `mousedown` event) and remove it when entering "keyboard mode"
 * (on a `tab` key `keydown` event).
 */
var InteractionModeEngine = (function () {
    // tslint:disable-next-line:no-constructor-vars
    function InteractionModeEngine(container, className) {
        var _this = this;
        this.container = container;
        this.className = className;
        this.isRunning = false;
        this.handleKeyDown = function (e) {
            if (e.which === TAB_KEY_CODE) {
                _this.reset();
                _this.container.addEventListener("mousedown", _this.handleMouseDown);
            }
        };
        this.handleMouseDown = function () {
            _this.reset();
            _this.container.classList.add(_this.className);
            _this.container.addEventListener("keydown", _this.handleKeyDown);
        };
    }
    /** Returns whether the engine is currently running. */
    InteractionModeEngine.prototype.isActive = function () {
        return this.isRunning;
    };
    /** Enable behavior which applies the given className when in mouse mode. */
    InteractionModeEngine.prototype.start = function () {
        this.container.addEventListener("mousedown", this.handleMouseDown);
        this.isRunning = true;
    };
    /** Disable interaction mode behavior and remove className from container. */
    InteractionModeEngine.prototype.stop = function () {
        this.reset();
        this.isRunning = false;
    };
    InteractionModeEngine.prototype.reset = function () {
        this.container.classList.remove(this.className);
        this.container.removeEventListener("keydown", this.handleKeyDown);
        this.container.removeEventListener("mousedown", this.handleMouseDown);
    };
    return InteractionModeEngine;
}());
exports.InteractionModeEngine = InteractionModeEngine;



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = {
    BLACK: "#10161A",
    BLUE1: "#0E5A8A",
    BLUE2: "#106BA3",
    BLUE3: "#137CBD",
    BLUE4: "#2B95D6",
    BLUE5: "#48AFF0",
    COBALT1: "#1F4B99",
    COBALT2: "#2458B3",
    COBALT3: "#2965CC",
    COBALT4: "#4580E6",
    COBALT5: "#669EFF",
    DARK_GRAY1: "#182026",
    DARK_GRAY2: "#202B33",
    DARK_GRAY3: "#293742",
    DARK_GRAY4: "#30404D",
    DARK_GRAY5: "#394B59",
    FOREST1: "#1D7324",
    FOREST2: "#238C2C",
    FOREST3: "#29A634",
    FOREST4: "#43BF4D",
    FOREST5: "#62D96B",
    GOLD1: "#A67908",
    GOLD2: "#BF8C0A",
    GOLD3: "#D99E0B",
    GOLD4: "#F2B824",
    GOLD5: "#FFC940",
    GRAY1: "#5C7080",
    GRAY2: "#738694",
    GRAY3: "#8A9BA8",
    GRAY4: "#A7B6C2",
    GRAY5: "#BFCCD6",
    GREEN1: "#0A6640",
    GREEN2: "#0D8050",
    GREEN3: "#0F9960",
    GREEN4: "#15B371",
    GREEN5: "#3DCC91",
    INDIGO1: "#5642A6",
    INDIGO2: "#634DBF",
    INDIGO3: "#7157D9",
    INDIGO4: "#9179F2",
    INDIGO5: "#AD99FF",
    LIGHT_GRAY1: "#CED9E0",
    LIGHT_GRAY2: "#D8E1E8",
    LIGHT_GRAY3: "#E1E8ED",
    LIGHT_GRAY4: "#EBF1F5",
    LIGHT_GRAY5: "#F5F8FA",
    LIME1: "#728C23",
    LIME2: "#87A629",
    LIME3: "#9BBF30",
    LIME4: "#B6D94C",
    LIME5: "#D1F26D",
    ORANGE1: "#A66321",
    ORANGE2: "#BF7326",
    ORANGE3: "#D9822B",
    ORANGE4: "#F29D49",
    ORANGE5: "#FFB366",
    RED1: "#A82A2A",
    RED2: "#C23030",
    RED3: "#DB3737",
    RED4: "#F55656",
    RED5: "#FF7373",
    ROSE1: "#A82255",
    ROSE2: "#C22762",
    ROSE3: "#DB2C6F",
    ROSE4: "#F5498B",
    ROSE5: "#FF66A1",
    SEPIA1: "#63411E",
    SEPIA2: "#7D5125",
    SEPIA3: "#96622D",
    SEPIA4: "#B07B46",
    SEPIA5: "#C99765",
    TURQUOISE1: "#008075",
    TURQUOISE2: "#00998C",
    TURQUOISE3: "#00B3A4",
    TURQUOISE4: "#14CCBD",
    TURQUOISE5: "#2EE6D6",
    VERMILION1: "#9E2B0E",
    VERMILION2: "#B83211",
    VERMILION3: "#D13913",
    VERMILION4: "#EB532D",
    VERMILION5: "#FF6E4A",
    VIOLET1: "#5C255C",
    VIOLET2: "#752F75",
    VIOLET3: "#8F398F",
    VIOLET4: "#A854A8",
    VIOLET5: "#C274C2",
    WHITE: "#FFFFFF",
};



/***/ }),
/* 79 */
/***/ (function(module, exports) {

/*!
Copyright (C) 2013-2015 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(window){'use strict';
  /* jshint loopfunc: true, noempty: false*/
  // http://www.w3.org/TR/dom/#element

  function createDocumentFragment() {
    return document.createDocumentFragment();
  }

  function createElement(nodeName) {
    return document.createElement(nodeName);
  }

  function enoughArguments(length, name) {
    if (!length) throw new Error(
      'Failed to construct ' +
        name +
      ': 1 argument required, but only 0 present.'
    );
  }

  function mutationMacro(nodes) {
    if (nodes.length === 1) {
      return textNodeIfString(nodes[0]);
    }
    for (var
      fragment = createDocumentFragment(),
      list = slice.call(nodes),
      i = 0; i < nodes.length; i++
    ) {
      fragment.appendChild(textNodeIfString(list[i]));
    }
    return fragment;
  }

  function textNodeIfString(node) {
    return typeof node === 'string' ? document.createTextNode(node) : node;
  }

  for(var
    head,
    property,
    TemporaryPrototype,
    TemporaryTokenList,
    wrapVerifyToken,
    document = window.document,
    hOP = Object.prototype.hasOwnProperty,
    defineProperty = Object.defineProperty || function (object, property, descriptor) {
      if (hOP.call(descriptor, 'value')) {
        object[property] = descriptor.value;
      } else {
        if (hOP.call(descriptor, 'get'))
          object.__defineGetter__(property, descriptor.get);
        if (hOP.call(descriptor, 'set'))
          object.__defineSetter__(property, descriptor.set);
      }
      return object;
    },
    indexOf = [].indexOf || function indexOf(value){
      var length = this.length;
      while(length--) {
        if (this[length] === value) {
          break;
        }
      }
      return length;
    },
    // http://www.w3.org/TR/domcore/#domtokenlist
    verifyToken = function (token) {
      if (!token) {
        throw 'SyntaxError';
      } else if (spaces.test(token)) {
        throw 'InvalidCharacterError';
      }
      return token;
    },
    DOMTokenList = function (node) {
      var
        noClassName = typeof node.className === 'undefined',
        className = noClassName ?
          (node.getAttribute('class') || '') : node.className,
        isSVG = noClassName || typeof className === 'object',
        value = (isSVG ?
          (noClassName ? className : className.baseVal) :
          className
        ).replace(trim, '')
      ;
      if (value.length) {
        properties.push.apply(
          this,
          value.split(spaces)
        );
      }
      this._isSVG = isSVG;
      this._ = node;
    },
    classListDescriptor = {
      get: function get() {
        return new DOMTokenList(this);
      },
      set: function(){}
    },
    uid = 'dom4-tmp-'.concat(Math.random() * +new Date()).replace('.','-'),
    trim = /^\s+|\s+$/g,
    spaces = /\s+/,
    SPACE = '\x20',
    CLASS_LIST = 'classList',
    toggle = function toggle(token, force) {
      if (this.contains(token)) {
        if (!force) {
          // force is not true (either false or omitted)
          this.remove(token);
        }
      } else if(force === undefined || force) {
        force = true;
        this.add(token);
      }
      return !!force;
    },
    DocumentFragmentPrototype = window.DocumentFragment && DocumentFragment.prototype,
    Node = window.Node,
    NodePrototype = (Node || Element).prototype,
    CharacterData = window.CharacterData || Node,
    CharacterDataPrototype = CharacterData && CharacterData.prototype,
    DocumentType = window.DocumentType,
    DocumentTypePrototype = DocumentType && DocumentType.prototype,
    ElementPrototype = (window.Element || Node || window.HTMLElement).prototype,
    HTMLSelectElement = window.HTMLSelectElement || createElement('select').constructor,
    selectRemove = HTMLSelectElement.prototype.remove,
    ShadowRoot = window.ShadowRoot,
    SVGElement = window.SVGElement,
    // normalizes multiple ids as CSS query
    idSpaceFinder = / /g,
    idSpaceReplacer = '\\ ',
    createQueryMethod = function (methodName) {
      var createArray = methodName === 'querySelectorAll';
      return function (css) {
        var a, i, id, query, nl, selectors, node = this.parentNode;
        if (node) {
          for (
            id = this.getAttribute('id') || uid,
            query = id === uid ? id : id.replace(idSpaceFinder, idSpaceReplacer),
            selectors = css.split(','),
            i = 0; i < selectors.length; i++
          ) {
            selectors[i] = '#' + query + ' ' + selectors[i];
          }
          css = selectors.join(',');
        }
        if (id === uid) this.setAttribute('id', id);
        nl = (node || this)[methodName](css);
        if (id === uid) this.removeAttribute('id');
        // return a list
        if (createArray) {
          i = nl.length;
          a = new Array(i);
          while (i--) a[i] = nl[i];
        }
        // return node or null
        else {
          a = nl;
        }
        return a;
      };
    },
    addQueryAndAll = function (where) {
      if (!('query' in where)) {
        where.query = ElementPrototype.query;
      }
      if (!('queryAll' in where)) {
        where.queryAll = ElementPrototype.queryAll;
      }
    },
    properties = [
      'matches', (
        ElementPrototype.matchesSelector ||
        ElementPrototype.webkitMatchesSelector ||
        ElementPrototype.khtmlMatchesSelector ||
        ElementPrototype.mozMatchesSelector ||
        ElementPrototype.msMatchesSelector ||
        ElementPrototype.oMatchesSelector ||
        function matches(selector) {
          var parentNode = this.parentNode;
          return !!parentNode && -1 < indexOf.call(
            parentNode.querySelectorAll(selector),
            this
          );
        }
      ),
      'closest', function closest(selector) {
        var parentNode = this, matches;
        while (
          // document has no .matches
          (matches = parentNode && parentNode.matches) &&
          !parentNode.matches(selector)
        ) {
          parentNode = parentNode.parentNode;
        }
        return matches ? parentNode : null;
      },
      'prepend', function prepend() {
        var firstChild = this.firstChild,
            node = mutationMacro(arguments);
        if (firstChild) {
          this.insertBefore(node, firstChild);
        } else {
          this.appendChild(node);
        }
      },
      'append', function append() {
        this.appendChild(mutationMacro(arguments));
      },
      'before', function before() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.insertBefore(
            mutationMacro(arguments), this
          );
        }
      },
      'after', function after() {
        var parentNode = this.parentNode,
            nextSibling = this.nextSibling,
            node = mutationMacro(arguments);
        if (parentNode) {
          if (nextSibling) {
            parentNode.insertBefore(node, nextSibling);
          } else {
            parentNode.appendChild(node);
          }
        }
      },
      // WARNING - DEPRECATED - use .replaceWith() instead
      'replace', function replace() {
        this.replaceWith.apply(this, arguments);
      },
      'replaceWith', function replaceWith() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.replaceChild(
            mutationMacro(arguments),
            this
          );
        }
      },
      'remove', function remove() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.removeChild(this);
        }
      },
      'query', createQueryMethod('querySelector'),
      'queryAll', createQueryMethod('querySelectorAll')
    ],
    slice = properties.slice,
    i = properties.length; i; i -= 2
  ) {
    property = properties[i - 2];
    if (!(property in ElementPrototype)) {
      ElementPrototype[property] = properties[i - 1];
    }
    if (property === 'remove') {
      // see https://github.com/WebReflection/dom4/issues/19
      HTMLSelectElement.prototype[property] = function () {
        return 0 < arguments.length ?
          selectRemove.apply(this, arguments) :
          ElementPrototype.remove.call(this);
      };
    }
    // see https://github.com/WebReflection/dom4/issues/18
    if (/^(?:before|after|replace|replaceWith|remove)$/.test(property)) {
      if (CharacterData && !(property in CharacterDataPrototype)) {
        CharacterDataPrototype[property] = properties[i - 1];
      }
      if (DocumentType && !(property in DocumentTypePrototype)) {
        DocumentTypePrototype[property] = properties[i - 1];
      }
    }
    // see https://github.com/WebReflection/dom4/pull/26
    if (/^(?:append|prepend)$/.test(property)) {
      if (DocumentFragmentPrototype) {
        if (!(property in DocumentFragmentPrototype)) {
          DocumentFragmentPrototype[property] = properties[i - 1];
        }
      } else {
        try {
          createDocumentFragment().constructor.prototype[property] = properties[i - 1];
        } catch(o_O) {}
      }
    }
  }

  // bring query and queryAll to the document too
  addQueryAndAll(document);

  // brings query and queryAll to fragments as well
  if (DocumentFragmentPrototype) {
    addQueryAndAll(DocumentFragmentPrototype);
  } else {
    try {
      addQueryAndAll(createDocumentFragment().constructor.prototype);
    } catch(o_O) {}
  }

  // bring query and queryAll to the ShadowRoot too
  if (ShadowRoot) {
    addQueryAndAll(ShadowRoot.prototype);
  }

  // most likely an IE9 only issue
  // see https://github.com/WebReflection/dom4/issues/6
  if (!createElement('a').matches('a')) {
    ElementPrototype[property] = function(matches){
      return function (selector) {
        return matches.call(
          this.parentNode ?
            this :
            createDocumentFragment().appendChild(this),
          selector
        );
      };
    }(ElementPrototype[property]);
  }

  // used to fix both old webkit and SVG
  DOMTokenList.prototype = {
    length: 0,
    add: function add() {
      for(var j = 0, token; j < arguments.length; j++) {
        token = arguments[j];
        if(!this.contains(token)) {
          properties.push.call(this, property);
        }
      }
      if (this._isSVG) {
        this._.setAttribute('class', '' + this);
      } else {
        this._.className = '' + this;
      }
    },
    contains: (function(indexOf){
      return function contains(token) {
        i = indexOf.call(this, property = verifyToken(token));
        return -1 < i;
      };
    }([].indexOf || function (token) {
      i = this.length;
      while(i-- && this[i] !== token){}
      return i;
    })),
    item: function item(i) {
      return this[i] || null;
    },
    remove: function remove() {
      for(var j = 0, token; j < arguments.length; j++) {
        token = arguments[j];
        if(this.contains(token)) {
          properties.splice.call(this, i, 1);
        }
      }
      if (this._isSVG) {
        this._.setAttribute('class', '' + this);
      } else {
        this._.className = '' + this;
      }
    },
    toggle: toggle,
    toString: function toString() {
      return properties.join.call(this, SPACE);
    }
  };

  if (SVGElement && !(CLASS_LIST in SVGElement.prototype)) {
    defineProperty(SVGElement.prototype, CLASS_LIST, classListDescriptor);
  }

  // http://www.w3.org/TR/dom/#domtokenlist
  // iOS 5.1 has completely screwed this property
  // classList in ElementPrototype is false
  // but it's actually there as getter
  if (!(CLASS_LIST in document.documentElement)) {
    defineProperty(ElementPrototype, CLASS_LIST, classListDescriptor);
  } else {
    // iOS 5.1 and Nokia ASHA do not support multiple add or remove
    // trying to detect and fix that in here
    TemporaryTokenList = createElement('div')[CLASS_LIST];
    TemporaryTokenList.add('a', 'b', 'a');
    if ('a\x20b' != TemporaryTokenList) {
      // no other way to reach original methods in iOS 5.1
      TemporaryPrototype = TemporaryTokenList.constructor.prototype;
      if (!('add' in TemporaryPrototype)) {
        // ASHA double fails in here
        TemporaryPrototype = window.TemporaryTokenList.prototype;
      }
      wrapVerifyToken = function (original) {
        return function () {
          var i = 0;
          while (i < arguments.length) {
            original.call(this, arguments[i++]);
          }
        };
      };
      TemporaryPrototype.add = wrapVerifyToken(TemporaryPrototype.add);
      TemporaryPrototype.remove = wrapVerifyToken(TemporaryPrototype.remove);
      // toggle is broken too ^_^ ... let's fix it
      TemporaryPrototype.toggle = toggle;
    }
  }

  if (!('contains' in NodePrototype)) {
    defineProperty(NodePrototype, 'contains', {
      value: function (el) {
        while (el && el !== this) el = el.parentNode;
        return this === el;
      }
    });
  }

  if (!('head' in document)) {
    defineProperty(document, 'head', {
      get: function () {
        return head || (
          head = document.getElementsByTagName('head')[0]
        );
      }
    });
  }

  // requestAnimationFrame partial polyfill
  (function () {
    for (var
      raf,
      rAF = window.requestAnimationFrame,
      cAF = window.cancelAnimationFrame,
      prefixes = ['o', 'ms', 'moz', 'webkit'],
      i = prefixes.length;
      !cAF && i--;
    ) {
      rAF = rAF || window[prefixes[i] + 'RequestAnimationFrame'];
      cAF = window[prefixes[i] + 'CancelAnimationFrame'] ||
            window[prefixes[i] + 'CancelRequestAnimationFrame'];
    }
    if (!cAF) {
      // some FF apparently implemented rAF but no cAF 
      if (rAF) {
        raf = rAF;
        rAF = function (callback) {
          var goOn = true;
          raf(function () {
            if (goOn) callback.apply(this, arguments);
          });
          return function () {
            goOn = false;
          };
        };
        cAF = function (id) {
          id();
        };
      } else {
        rAF = function (callback) {
          return setTimeout(callback, 15, 15);
        };
        cAF = function (id) {
          clearTimeout(id);
        };
      }
    }
    window.requestAnimationFrame = rAF;
    window.cancelAnimationFrame = cAF;
  }());

  // http://www.w3.org/TR/dom/#customevent
  try{new window.CustomEvent('?');}catch(o_O){
    window.CustomEvent = function(
      eventName,
      defaultInitDict
    ){

      // the infamous substitute
      function CustomEvent(type, eventInitDict) {
        /*jshint eqnull:true */
        var event = document.createEvent(eventName);
        if (typeof type != 'string') {
          throw new Error('An event name must be provided');
        }
        if (eventName == 'Event') {
          event.initCustomEvent = initCustomEvent;
        }
        if (eventInitDict == null) {
          eventInitDict = defaultInitDict;
        }
        event.initCustomEvent(
          type,
          eventInitDict.bubbles,
          eventInitDict.cancelable,
          eventInitDict.detail
        );
        return event;
      }

      // attached at runtime
      function initCustomEvent(
        type, bubbles, cancelable, detail
      ) {
        /*jshint validthis:true*/
        this.initEvent(type, bubbles, cancelable);
        this.detail = detail;
      }

      // that's it
      return CustomEvent;
    }(
      // is this IE9 or IE10 ?
      // where CustomEvent is there
      // but not usable as construtor ?
      window.CustomEvent ?
        // use the CustomEvent interface in such case
        'CustomEvent' : 'Event',
        // otherwise the common compatible one
      {
        bubbles: false,
        cancelable: false,
        detail: null
      }
    );
  }

  // window.Event as constructor
  try { new Event('_'); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($Event) {
      function Event(type, init) {
        enoughArguments(arguments.length, 'Event');
        var out = document.createEvent('Event');
        if (!init) init = {};
        out.initEvent(
          type,
          !!init.bubbles,
          !!init.cancelable
        );
        return out;
      }
      Event.prototype = $Event.prototype;
      return Event;
    }(window.Event || function Event() {}));
    defineProperty(window, 'Event', {value: o_O});
    // Android 4 gotcha
    if (Event !== o_O) Event = o_O;
  }

  // window.KeyboardEvent as constructor
  try { new KeyboardEvent('_', {}); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($KeyboardEvent) {
      // code inspired by https://gist.github.com/termi/4654819
      var
        initType = 0,
        defaults = {
          char: '',
          key: '',
          location: 0,
          ctrlKey: false,
          shiftKey: false,
          altKey: false,
          metaKey: false,
          altGraphKey: false,
          repeat: false,
          locale: navigator.language,
          detail: 0,
          bubbles: false,
          cancelable: false,
          keyCode: 0,
          charCode: 0,
          which: 0
        },
        eventType
      ;
      try {
        var e = document.createEvent('KeyboardEvent');
        e.initKeyboardEvent(
          'keyup', false, false, window, '+', 3,
          true, false, true, false, false
        );
        initType = (
          (e.keyIdentifier || e.key) == '+' &&
          (e.keyLocation || e.location) == 3
        ) && (
          e.ctrlKey ? e.altKey ? 1 : 3 : e.shiftKey ? 2 : 4
        ) || 9;
      } catch(o_O) {}
      eventType = 0 < initType ? 'KeyboardEvent' : 'Event';

      function getModifier(init) {
        for (var
          out = [],
          keys = [
            'ctrlKey',
            'Control',
            'shiftKey',
            'Shift',
            'altKey',
            'Alt',
            'metaKey',
            'Meta',
            'altGraphKey',
            'AltGraph'
          ],
          i = 0; i < keys.length; i += 2
        ) {
          if (init[keys[i]])
            out.push(keys[i + 1]);
        }
        return out.join(' ');
      }

      function withDefaults(target, source) {
        for (var key in source) {
          if (
            source.hasOwnProperty(key) &&
            !source.hasOwnProperty.call(target, key)
          ) target[key] = source[key];
        }
        return target;
      }

      function withInitValues(key, out, init) {
        try {
          out[key] = init[key];
        } catch(o_O) {}
      }

      function KeyboardEvent(type, init) {
        enoughArguments(arguments.length, 'KeyboardEvent');
        init = withDefaults(init || {}, defaults);
        var
          out = document.createEvent(eventType),
          ctrlKey = init.ctrlKey,
          shiftKey = init.shiftKey,
          altKey = init.altKey,
          metaKey = init.metaKey,
          altGraphKey = init.altGraphKey,
          modifiers = initType > 3 ? getModifier(init) : null,
          key = String(init.key),
          chr = String(init.char),
          location = init.location,
          keyCode = init.keyCode || (
            (init.keyCode = key) &&
            key.charCodeAt(0)
          ) || 0,
          charCode = init.charCode || (
            (init.charCode = chr) &&
            chr.charCodeAt(0)
          ) || 0,
          bubbles = init.bubbles,
          cancelable = init.cancelable,
          repeat = init.repeat,
          locale = init.locale,
          view = init.view || window,
          args
        ;
        if (!init.which) init.which = init.keyCode;
        if ('initKeyEvent' in out) {
          out.initKeyEvent(
            type, bubbles, cancelable, view,
            ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode
          );
        } else if (0 < initType && 'initKeyboardEvent' in out) {
          args = [type, bubbles, cancelable, view];
          switch (initType) {
            case 1:
              args.push(key, location, ctrlKey, shiftKey, altKey, metaKey, altGraphKey);
              break;
            case 2:
              args.push(ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
              break;
            case 3:
              args.push(key, location, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
              break;
            case 4:
              args.push(key, location, modifiers, repeat, locale);
              break;
            default:
              args.push(char, key, location, modifiers, repeat, locale);
          }
          out.initKeyboardEvent.apply(out, args);
        } else {
          out.initEvent(type, bubbles, cancelable);
        }
        for (key in out) {
          if (defaults.hasOwnProperty(key) && out[key] !== init[key]) {
            withInitValues(key, out, init);
          }
        }
        return out;
      }
      KeyboardEvent.prototype = $KeyboardEvent.prototype;
      return KeyboardEvent;
    }(window.KeyboardEvent || function KeyboardEvent() {}));
    defineProperty(window, 'KeyboardEvent', {value: o_O});
    // Android 4 gotcha
    if (KeyboardEvent !== o_O) KeyboardEvent = o_O;
  }

  // window.MouseEvent as constructor
  try { new MouseEvent('_', {}); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($MouseEvent) {
      function MouseEvent(type, init) {
        enoughArguments(arguments.length, 'MouseEvent');
        var out = document.createEvent('MouseEvent');
        if (!init) init = {};
        out.initMouseEvent(
          type,
          !!init.bubbles,
          !!init.cancelable,
          init.view || window,
          init.detail || 1,
          init.screenX || 0,
          init.screenY || 0,
          init.clientX || 0,
          init.clientY || 0,
          !!init.ctrlKey,
          !!init.altKey,
          !!init.shiftKey,
          !!init.metaKey,
          init.button || 0,
          init.relatedTarget || null
        );
        return out;
      }
      MouseEvent.prototype = $MouseEvent.prototype;
      return MouseEvent;
    }(window.MouseEvent || function MouseEvent() {}));
    defineProperty(window, 'MouseEvent', {value: o_O});
    // Android 4 gotcha
    if (MouseEvent !== o_O) MouseEvent = o_O;
  }

}(window));(function (global){'use strict';

  // a WeakMap fallback for DOM nodes only used as key
  var DOMMap = global.WeakMap || (function () {

    var
      counter = 0,
      dispatched = false,
      drop = false,
      value
    ;

    function dispatch(key, ce, shouldDrop) {
      drop = shouldDrop;
      dispatched = false;
      value = undefined;
      key.dispatchEvent(ce);
    }

    function Handler(value) {
      this.value = value;
    }

    Handler.prototype.handleEvent = function handleEvent(e) {
      dispatched = true;
      if (drop) {
        e.currentTarget.removeEventListener(e.type, this, false);
      } else {
        value = this.value;
      }
    };

    function DOMMap() {
      counter++;  // make id clashing highly improbable
      this.__ce__ = new Event(('@DOMMap:' + counter) + Math.random());
    }

    DOMMap.prototype = {
      'constructor': DOMMap,
      'delete': function del(key) {
        return dispatch(key, this.__ce__, true), dispatched;
      },
      'get': function get(key) {
        dispatch(key, this.__ce__, false);
        var v = value;
        value = undefined;
        return v;
      },
      'has': function has(key) {
        return dispatch(key, this.__ce__, false), dispatched;
      },
      'set': function set(key, value) {
        dispatch(key, this.__ce__, true);
        key.addEventListener(this.__ce__.type, new Handler(value), false);
        return this;
      },
    };

    return DOMMap;

  }());

  function Dict() {}
  Dict.prototype = (Object.create || Object)(null);

  // https://dom.spec.whatwg.org/#interface-eventtarget

  function createEventListener(type, callback, options) {
    function eventListener(e) {
      if (eventListener.once) {
        e.currentTarget.removeEventListener(
          e.type,
          callback,
          eventListener
        );
        eventListener.removed = true;
      }
      if (eventListener.passive) {
        e.preventDefault = createEventListener.preventDefault;
      }
      if (typeof eventListener.callback === 'function') {
        /* jshint validthis: true */
        eventListener.callback.call(this, e);
      } else if (eventListener.callback) {
        eventListener.callback.handleEvent(e);
      }
      if (eventListener.passive) {
        delete e.preventDefault;
      }
    }
    eventListener.type = type;
    eventListener.callback = callback;
    eventListener.capture = !!options.capture;
    eventListener.passive = !!options.passive;
    eventListener.once = !!options.once;
    // currently pointless but specs say to use it, so ...
    eventListener.removed = false;
    return eventListener;
  }

  createEventListener.preventDefault = function preventDefault() {};

  var
    Event = global.CustomEvent,
    hOP = Object.prototype.hasOwnProperty,
    dE = global.dispatchEvent,
    aEL = global.addEventListener,
    rEL = global.removeEventListener,
    counter = 0,
    increment = function () { counter++; },
    indexOf = [].indexOf || function indexOf(value){
      var length = this.length;
      while(length--) {
        if (this[length] === value) {
          break;
        }
      }
      return length;
    },
    getListenerKey = function (options) {
      return ''.concat(
        options.capture ? '1' : '0',
        options.passive ? '1' : '0',
        options.once ? '1' : '0'
      );
    },
    augment, proto
  ;

  try {
    aEL('_', increment, {once: true});
    dE(new Event('_'));
    dE(new Event('_'));
    rEL('_', increment, {once: true});
  } catch(o_O) {}

  if (counter !== 1) {
    (function () {
      var dm = new DOMMap();
      function createAEL(aEL) {
        return function addEventListener(type, handler, options) {
          if (options && typeof options !== 'boolean') {
            var
              info = dm.get(this),
              key = getListenerKey(options),
              i, tmp, wrap
            ;
            if (!info) dm.set(this, (info = new Dict()));
            if (!(type in info)) info[type] = {
              handler: [],
              wrap: []
            };
            tmp = info[type];
            i = indexOf.call(tmp.handler, handler);
            if (i < 0) {
              i = tmp.handler.push(handler) - 1;
              tmp.wrap[i] = (wrap = new Dict());
            } else {
              wrap = tmp.wrap[i];
            }
            if (!(key in wrap)) {
              wrap[key] = createEventListener(type, handler, options);
              aEL.call(this, type, wrap[key], wrap[key].capture);
            }
          } else {
            aEL.call(this, type, handler, options);
          }
        };
      }
      function createREL(rEL) {
        return function removeEventListener(type, handler, options) {
          if (options && typeof options !== 'boolean') {
            var
              info = dm.get(this),
              key, i, tmp, wrap
            ;
            if (info && (type in info)) {
              tmp = info[type];
              i = indexOf.call(tmp.handler, handler);
              if (-1 < i) {
                key = getListenerKey(options);
                wrap = tmp.wrap[i];
                if (key in wrap) {
                  rEL.call(this, type, wrap[key], wrap[key].capture);
                  delete wrap[key];
                  // return if there are other wraps
                  for (key in wrap) return;
                  // otherwise remove all the things
                  tmp.handler.splice(i, 1);
                  tmp.wrap.splice(i, 1);
                  // if there are no other handlers
                  if (tmp.handler.length === 0)
                    // drop the info[type] entirely
                    delete info[type];
                }
              }
            }
          } else {
            rEL.call(this, type, handler, options);
          }
        };
      }

      augment = function (Constructor) {
        if (!Constructor) return;
        var proto = Constructor.prototype;
        proto.addEventListener = createAEL(proto.addEventListener);
        proto.removeEventListener = createREL(proto.removeEventListener);
      };

      if (global.EventTarget) {
        augment(EventTarget);
      } else {
        augment(global.Text);
        augment(global.Element || global.HTMLElement);
        augment(global.HTMLDocument);
        augment(global.Window || {prototype:global});
        augment(global.XMLHttpRequest);
      }

    }());
  }

}(self));

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.0 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



module.exports = __webpack_require__(83);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(87);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(91);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(28);
var invariant = __webpack_require__(29);
var warning = __webpack_require__(27);

var ReactPropTypesSecret = __webpack_require__(30);
var checkPropTypes = __webpack_require__(85);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(29);
  var warning = __webpack_require__(27);
  var ReactPropTypesSecret = __webpack_require__(30);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(28);
var invariant = __webpack_require__(29);
var ReactPropTypesSecret = __webpack_require__(30);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(88);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(89);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 88 */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(92);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(94);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(95);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(96);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(12);

var _PropTypes = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(93);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(44);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(44);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var position_1 = __webpack_require__(14);
// this value causes popover and target edges to line up on 50px targets
exports.MIN_ARROW_SPACING = 18;
function computeArrowOffset(sideLength, arrowSize, minimum) {
    if (minimum === void 0) { minimum = exports.MIN_ARROW_SPACING; }
    return Math.max(Math.round((sideLength - arrowSize) / 2), minimum);
}
exports.computeArrowOffset = computeArrowOffset;
function getPopoverTransformOrigin(position, arrowSize, targetDimensions) {
    var offsetX = computeArrowOffset(targetDimensions.width, arrowSize);
    var offsetY = computeArrowOffset(targetDimensions.height, arrowSize);
    switch (position) {
        case position_1.Position.TOP_LEFT:
            return offsetX + "px bottom";
        case position_1.Position.TOP_RIGHT:
            return "calc(100% - " + offsetX + "px) bottom";
        case position_1.Position.BOTTOM_LEFT:
            return offsetX + "px top";
        case position_1.Position.BOTTOM_RIGHT:
            return "calc(100% - " + offsetX + "px) top";
        case position_1.Position.LEFT_TOP:
            return "right " + offsetY + "px";
        case position_1.Position.LEFT_BOTTOM:
            return "right calc(100% - " + offsetY + "px)";
        case position_1.Position.RIGHT_TOP:
            return "left " + offsetY + "px";
        case position_1.Position.RIGHT_BOTTOM:
            return "left calc(100% - " + offsetY + "px)";
        default:
            return undefined;
    }
}
exports.getPopoverTransformOrigin = getPopoverTransformOrigin;
function getArrowPositionStyles(position, arrowSize, ignoreTargetDimensions, targetDimensions, inline) {
    // compute the offset to center an arrow with given hypotenuse in a side of the given length
    var popoverOffset = function (sideLength) {
        var offset = computeArrowOffset(sideLength, arrowSize, 0);
        return offset < exports.MIN_ARROW_SPACING ? exports.MIN_ARROW_SPACING - offset : 0;
    };
    var popoverOffsetX = popoverOffset(targetDimensions.width);
    var popoverOffsetY = popoverOffset(targetDimensions.height);
    // TOP, RIGHT, BOTTOM, LEFT are handled purely in CSS because of centering transforms
    switch (position) {
        case position_1.Position.TOP_LEFT:
        case position_1.Position.BOTTOM_LEFT:
            return {
                arrow: ignoreTargetDimensions ? {} : { left: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: -popoverOffsetX },
            };
        case position_1.Position.TOP_RIGHT:
        case position_1.Position.BOTTOM_RIGHT:
            return {
                arrow: ignoreTargetDimensions ? {} : { right: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: popoverOffsetX },
            };
        case position_1.Position.RIGHT_TOP:
        case position_1.Position.LEFT_TOP:
            return {
                arrow: ignoreTargetDimensions ? {} : { top: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { top: -popoverOffsetY } : { marginTop: -popoverOffsetY },
            };
        case position_1.Position.RIGHT_BOTTOM:
        case position_1.Position.LEFT_BOTTOM:
            return {
                arrow: ignoreTargetDimensions ? {} : { bottom: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { bottom: -popoverOffsetY } : { marginTop: popoverOffsetY },
            };
        default:
            return {};
    }
}
exports.getArrowPositionStyles = getArrowPositionStyles;



/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var common_1 = __webpack_require__(16);
var errors_1 = __webpack_require__(9);
var buttons_1 = __webpack_require__(23);
var dialog_1 = __webpack_require__(47);
var Alert = (function (_super) {
    tslib_1.__extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alert.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, intent = _a.intent, isOpen = _a.isOpen, confirmButtonText = _a.confirmButtonText, onConfirm = _a.onConfirm, style = _a.style;
        return (React.createElement(dialog_1.Dialog, { className: classNames(common_1.Classes.ALERT, className), isOpen: isOpen, style: style },
            React.createElement("div", { className: common_1.Classes.ALERT_BODY },
                this.maybeRenderIcon(),
                React.createElement("div", { className: common_1.Classes.ALERT_CONTENTS }, children)),
            React.createElement("div", { className: common_1.Classes.ALERT_FOOTER },
                React.createElement(buttons_1.Button, { intent: intent, text: confirmButtonText, onClick: onConfirm }),
                this.maybeRenderSecondaryAction())));
    };
    Alert.prototype.validateProps = function (props) {
        if (props.cancelButtonText != null && props.onCancel == null ||
            props.cancelButtonText == null && props.onCancel != null) {
            console.warn(errors_1.ALERT_WARN_CANCEL_PROPS);
        }
    };
    Alert.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName != null) {
            var iconClass = classNames("pt-icon", common_1.Classes.iconClass(iconName));
            return React.createElement("span", { className: iconClass });
        }
        return undefined;
    };
    Alert.prototype.maybeRenderSecondaryAction = function () {
        if (this.props.cancelButtonText != null) {
            return React.createElement(buttons_1.Button, { text: this.props.cancelButtonText, onClick: this.props.onCancel });
        }
        return undefined;
    };
    return Alert;
}(common_1.AbstractComponent));
Alert.defaultProps = {
    confirmButtonText: "OK",
    isOpen: false,
    onConfirm: null,
};
Alert.displayName = "Blueprint.Alert";
exports.Alert = Alert;



/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var Keys = __webpack_require__(15);
var utils_1 = __webpack_require__(5);
var spinner_1 = __webpack_require__(32);
var AbstractButton = (function (_super) {
    tslib_1.__extends(AbstractButton, _super);
    function AbstractButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        _this.refHandlers = {
            button: function (ref) {
                _this.buttonRef = ref;
                utils_1.safeInvoke(_this.props.elementRef, ref);
            },
        };
        _this.currentKeyDown = null;
        // we're casting as `any` to get around a somewhat opaque safeInvoke error
        // that "Type argument candidate 'KeyboardEvent<T>' is not a valid type
        // argument because it is not a supertype of candidate
        // 'KeyboardEvent<HTMLElement>'."
        _this.handleKeyDown = function (e) {
            if (isKeyboardClick(e.which)) {
                e.preventDefault();
                if (e.which !== _this.currentKeyDown) {
                    _this.setState({ isActive: true });
                }
            }
            _this.currentKeyDown = e.which;
            utils_1.safeInvoke(_this.props.onKeyDown, e);
        };
        _this.handleKeyUp = function (e) {
            if (isKeyboardClick(e.which)) {
                _this.setState({ isActive: false });
                _this.buttonRef.click();
            }
            _this.currentKeyDown = null;
            utils_1.safeInvoke(_this.props.onKeyUp, e);
        };
        return _this;
    }
    AbstractButton.prototype.getCommonButtonProps = function () {
        var disabled = this.props.disabled || this.props.loading;
        var className = classNames(Classes.BUTTON, (_a = {},
            _a[Classes.ACTIVE] = this.state.isActive || this.props.active,
            _a[Classes.DISABLED] = disabled,
            _a[Classes.LOADING] = this.props.loading,
            _a), Classes.iconClass(this.props.iconName), Classes.intentClass(this.props.intent), this.props.className);
        return {
            className: className,
            disabled: disabled,
            onClick: disabled ? undefined : this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            ref: this.refHandlers.button,
        };
        var _a;
    };
    AbstractButton.prototype.renderChildren = function () {
        var _a = this.props, loading = _a.loading, rightIconName = _a.rightIconName, text = _a.text;
        var iconClasses = classNames(Classes.ICON_STANDARD, Classes.iconClass(rightIconName), Classes.ALIGN_RIGHT);
        var children = React.Children.map(this.props.children, function (child, index) {
            // must wrap string children in spans so loading prop can hide them
            if (typeof child === "string") {
                return React.createElement("span", { key: "text-" + index }, child);
            }
            return child;
        });
        return [
            loading ? React.createElement(spinner_1.Spinner, { className: "pt-small pt-button-spinner", key: "spinner" }) : undefined,
            text != null ? React.createElement("span", { key: "text" }, text) : undefined,
            children,
            rightIconName != null ? React.createElement("span", { className: iconClasses, key: "icon" }) : undefined,
        ];
    };
    return AbstractButton;
}(React.Component));
exports.AbstractButton = AbstractButton;
function isKeyboardClick(keyCode) {
    return keyCode === Keys.ENTER || keyCode === Keys.SPACE;
}



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
exports.Breadcrumb = function (breadcrumbProps) {
    var classes = classNames(Classes.BREADCRUMB, (_a = {},
        _a[Classes.DISABLED] = breadcrumbProps.disabled,
        _a), breadcrumbProps.className);
    return (React.createElement("a", { className: classes, href: breadcrumbProps.href, onClick: breadcrumbProps.disabled ? null : breadcrumbProps.onClick, tabIndex: breadcrumbProps.disabled ? null : 0, target: breadcrumbProps.target }, breadcrumbProps.text));
    var _a;
};



/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var position_1 = __webpack_require__(14);
var menu_1 = __webpack_require__(33);
var menuItem_1 = __webpack_require__(49);
var popover_1 = __webpack_require__(18);
var CollapseFrom;
(function (CollapseFrom) {
    CollapseFrom[CollapseFrom["START"] = 0] = "START";
    CollapseFrom[CollapseFrom["END"] = 1] = "END";
})(CollapseFrom = exports.CollapseFrom || (exports.CollapseFrom = {}));
var CollapsibleList = (function (_super) {
    tslib_1.__extends(CollapsibleList, _super);
    function CollapsibleList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollapsibleList.prototype.render = function () {
        var _this = this;
        var collapseFrom = this.props.collapseFrom;
        var childrenLength = React.Children.count(this.props.children);
        var _a = this.partitionChildren(), visibleChildren = _a[0], collapsedChildren = _a[1];
        var visibleItems = visibleChildren.map(function (child, index) {
            var absoluteIndex = (collapseFrom === CollapseFrom.START ? childrenLength - 1 - index : index);
            return (React.createElement("li", { className: _this.props.visibleItemClassName, key: absoluteIndex }, _this.props.renderVisibleItem(child.props, absoluteIndex)));
        });
        if (collapseFrom === CollapseFrom.START) {
            // reverse START list so separators appear before items
            visibleItems.reverse();
        }
        // construct dropdown menu for collapsed items
        var collapsedPopover;
        if (collapsedChildren.length > 0) {
            var position = (collapseFrom === CollapseFrom.END ? position_1.Position.BOTTOM_RIGHT : position_1.Position.BOTTOM_LEFT);
            collapsedPopover = (React.createElement("li", { className: this.props.visibleItemClassName },
                React.createElement(popover_1.Popover, tslib_1.__assign({ content: React.createElement(menu_1.Menu, null, collapsedChildren), position: position }, this.props.dropdownProps), this.props.dropdownTarget)));
        }
        return (React.createElement("ul", { className: classNames(Classes.COLLAPSIBLE_LIST, this.props.className) },
            collapseFrom === CollapseFrom.START ? collapsedPopover : null,
            visibleItems,
            collapseFrom === CollapseFrom.END ? collapsedPopover : null));
    };
    // splits the list of children into two arrays: visible and collapsed
    CollapsibleList.prototype.partitionChildren = function () {
        if (this.props.children == null) {
            return [[], []];
        }
        var childrenArray = React.Children.map(this.props.children, function (child, index) {
            if (child.type !== menuItem_1.MenuItem) {
                throw new Error(Errors.COLLAPSIBLE_LIST_INVALID_CHILD);
            }
            return React.cloneElement(child, { key: "visible-" + index });
        });
        if (this.props.collapseFrom === CollapseFrom.START) {
            // reverse START list so we can always slice visible items from the front of the list
            childrenArray.reverse();
        }
        var visibleItemCount = this.props.visibleItemCount;
        return [
            childrenArray.slice(0, visibleItemCount),
            childrenArray.slice(visibleItemCount),
        ];
    };
    return CollapsibleList;
}(React.Component));
CollapsibleList.displayName = "Blueprint.CollapsibleList";
CollapsibleList.defaultProps = {
    collapseFrom: CollapseFrom.START,
    dropdownTarget: null,
    renderVisibleItem: null,
    visibleItemCount: 3,
};
exports.CollapsibleList = CollapsibleList;
exports.CollapsibleListFactory = React.createFactory(CollapsibleList);



/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var errors_1 = __webpack_require__(9);
var utils_1 = __webpack_require__(5);
var ContextMenu = __webpack_require__(43);
function ContextMenuTarget(constructor) {
    var _a = constructor.prototype, render = _a.render, renderContextMenu = _a.renderContextMenu, onContextMenuClose = _a.onContextMenuClose;
    if (!utils_1.isFunction(renderContextMenu)) {
        console.warn(errors_1.CONTEXTMENU_WARN_DECORATOR_NO_METHOD);
    }
    // patching classes like this requires preserving function context
    // tslint:disable-next-line only-arrow-functions
    constructor.prototype.render = function () {
        var _this = this;
        /* tslint:disable:no-invalid-this */
        var element = render.call(this);
        if (element == null) {
            // always return `element` in case caller is distinguishing between `null` and `undefined`
            return element;
        }
        var oldOnContextMenu = element.props.onContextMenu;
        var onContextMenu = function (e) {
            // support nested menus (inner menu target would have called preventDefault())
            if (e.defaultPrevented) {
                return;
            }
            if (utils_1.isFunction(_this.renderContextMenu)) {
                var menu = _this.renderContextMenu(e);
                if (menu != null) {
                    e.preventDefault();
                    ContextMenu.show(menu, { left: e.clientX, top: e.clientY }, onContextMenuClose);
                }
            }
            utils_1.safeInvoke(oldOnContextMenu, e);
        };
        return React.cloneElement(element, { onContextMenu: onContextMenu });
        /* tslint:enable:no-invalid-this */
    };
}
exports.ContextMenuTarget = ContextMenuTarget;
;



/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Keys = __webpack_require__(15);
var utils_1 = __webpack_require__(5);
var compatibility_1 = __webpack_require__(104);
var BUFFER_WIDTH_EDGE = 5;
var BUFFER_WIDTH_IE = 30;
var EditableText = (function (_super) {
    tslib_1.__extends(EditableText, _super);
    function EditableText(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHandlers = {
            content: function (spanElement) {
                _this.valueElement = spanElement;
            },
            input: function (input) {
                if (input != null) {
                    input.focus();
                    var length_1 = input.value.length;
                    input.setSelectionRange(_this.props.selectAllOnFocus ? 0 : length_1, length_1);
                }
            },
        };
        _this.cancelEditing = function () {
            var _a = _this.state, lastValue = _a.lastValue, value = _a.value;
            _this.setState({ isEditing: false, value: lastValue });
            if (value !== lastValue) {
                utils_1.safeInvoke(_this.props.onChange, lastValue);
            }
            utils_1.safeInvoke(_this.props.onCancel, lastValue);
        };
        _this.toggleEditing = function () {
            if (_this.state.isEditing) {
                var value = _this.state.value;
                _this.setState({ isEditing: false, lastValue: value });
                utils_1.safeInvoke(_this.props.onConfirm, value);
            }
            else if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        _this.handleFocus = function () {
            if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        _this.handleTextChange = function (event) {
            var value = event.target.value;
            // state value should be updated only when uncontrolled
            if (_this.props.value == null) {
                _this.setState({ value: value });
            }
            utils_1.safeInvoke(_this.props.onChange, value);
        };
        _this.handleKeyEvent = function (event) {
            var altKey = event.altKey, ctrlKey = event.ctrlKey, metaKey = event.metaKey, shiftKey = event.shiftKey, which = event.which;
            if (which === Keys.ESCAPE) {
                _this.cancelEditing();
                return;
            }
            var hasModifierKey = altKey || ctrlKey || metaKey || shiftKey;
            if (which === Keys.ENTER) {
                // prevent IE11 from full screening with alt + enter
                // shift + enter adds a newline by default
                if (altKey || shiftKey) {
                    event.preventDefault();
                }
                if (_this.props.confirmOnEnterKey && _this.props.multiline) {
                    if (event.target != null && hasModifierKey) {
                        insertAtCaret(event.target, "\n");
                        _this.handleTextChange(event);
                    }
                    else {
                        _this.toggleEditing();
                    }
                }
                else if (!_this.props.multiline || hasModifierKey) {
                    _this.toggleEditing();
                }
            }
        };
        var value = (props.value == null) ? props.defaultValue : props.value;
        _this.state = {
            inputHeight: 0,
            inputWidth: 0,
            isEditing: props.isEditing === true && props.disabled === false,
            lastValue: value,
            value: value,
        };
        return _this;
    }
    EditableText.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, multiline = _a.multiline;
        var value = (this.props.value == null ? this.state.value : this.props.value);
        var hasValue = (value != null && value !== "");
        var classes = classNames(Classes.EDITABLE_TEXT, Classes.intentClass(this.props.intent), (_b = {},
            _b[Classes.DISABLED] = disabled,
            _b["pt-editable-editing"] = this.state.isEditing,
            _b["pt-editable-placeholder"] = !hasValue,
            _b["pt-multiline"] = multiline,
            _b), this.props.className);
        var contentStyle;
        if (multiline) {
            // set height only in multiline mode when not editing
            // otherwise we're measuring this element to determine appropriate height of text
            contentStyle = { height: !this.state.isEditing ? this.state.inputHeight : null };
        }
        else {
            // minWidth only applies in single line mode (multiline == width 100%)
            contentStyle = {
                height: this.state.inputHeight,
                lineHeight: this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                minWidth: this.props.minWidth,
            };
        }
        // make enclosing div focusable when not editing, so it can still be tabbed to focus
        // (when editing, input itself is focusable so div doesn't need to be)
        var tabIndex = this.state.isEditing || disabled ? null : 0;
        return (React.createElement("div", { className: classes, onFocus: this.handleFocus, tabIndex: tabIndex },
            this.maybeRenderInput(value),
            React.createElement("span", { className: "pt-editable-content", ref: this.refHandlers.content, style: contentStyle }, hasValue ? value : this.props.placeholder)));
        var _b;
    };
    EditableText.prototype.componentDidMount = function () {
        this.updateInputDimensions();
    };
    EditableText.prototype.componentDidUpdate = function (_, prevState) {
        if (this.state.isEditing && !prevState.isEditing) {
            utils_1.safeInvoke(this.props.onEdit);
        }
        this.updateInputDimensions();
    };
    EditableText.prototype.componentWillReceiveProps = function (nextProps) {
        var state = {};
        if (nextProps.value != null) {
            state.value = nextProps.value;
        }
        if (nextProps.isEditing != null) {
            state.isEditing = nextProps.isEditing;
        }
        if (nextProps.disabled || (nextProps.disabled == null && this.props.disabled)) {
            state.isEditing = false;
        }
        this.setState(state);
    };
    EditableText.prototype.maybeRenderInput = function (value) {
        var _a = this.props, maxLength = _a.maxLength, multiline = _a.multiline;
        if (!this.state.isEditing) {
            return undefined;
        }
        var props = {
            className: "pt-editable-input",
            maxLength: maxLength,
            onBlur: this.toggleEditing,
            onChange: this.handleTextChange,
            onKeyDown: this.handleKeyEvent,
            ref: this.refHandlers.input,
            style: {
                height: this.state.inputHeight,
                lineHeight: !multiline && this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                width: multiline ? "100%" : this.state.inputWidth,
            },
            value: value,
        };
        return multiline ? React.createElement("textarea", tslib_1.__assign({}, props)) : React.createElement("input", tslib_1.__assign({ type: "text" }, props));
    };
    EditableText.prototype.updateInputDimensions = function () {
        if (this.valueElement != null) {
            var _a = this.props, maxLines = _a.maxLines, minLines = _a.minLines, minWidth = _a.minWidth, multiline = _a.multiline;
            var _b = this.valueElement, parentElement_1 = _b.parentElement, textContent = _b.textContent;
            var _c = this.valueElement, scrollHeight_1 = _c.scrollHeight, scrollWidth = _c.scrollWidth;
            var lineHeight = getLineHeight(this.valueElement);
            // add one line to computed <span> height if text ends in newline
            // because <span> collapses that trailing whitespace but <textarea> shows it
            if (multiline && this.state.isEditing && /\n$/.test(textContent)) {
                scrollHeight_1 += lineHeight;
            }
            if (lineHeight > 0) {
                // line height could be 0 if the isNaN block from getLineHeight kicks in
                scrollHeight_1 = utils_1.clamp(scrollHeight_1, minLines * lineHeight, maxLines * lineHeight);
            }
            // Chrome's input caret height misaligns text so the line-height must be larger than font-size.
            // The computed scrollHeight must also account for a larger inherited line-height from the parent.
            scrollHeight_1 = Math.max(scrollHeight_1, getFontSize(this.valueElement) + 1, getLineHeight(parentElement_1));
            // IE11 & Edge needs a small buffer so text does not shift prior to resizing
            if (compatibility_1.Browser.isEdge()) {
                scrollWidth += BUFFER_WIDTH_EDGE;
            }
            else if (compatibility_1.Browser.isInternetExplorer()) {
                scrollWidth += BUFFER_WIDTH_IE;
            }
            this.setState({
                inputHeight: scrollHeight_1,
                inputWidth: Math.max(scrollWidth, minWidth),
            });
            // synchronizes the ::before pseudo-element's height while editing for Chrome 53
            if (multiline && this.state.isEditing) {
                this.setTimeout(function () { return parentElement_1.style.height = scrollHeight_1 + "px"; });
            }
        }
    };
    return EditableText;
}(abstractComponent_1.AbstractComponent));
EditableText.defaultProps = {
    confirmOnEnterKey: false,
    defaultValue: "",
    disabled: false,
    maxLines: Infinity,
    minLines: 1,
    minWidth: 80,
    multiline: false,
    placeholder: "Click to Edit",
};
EditableText = tslib_1.__decorate([
    PureRender
], EditableText);
exports.EditableText = EditableText;
function getFontSize(element) {
    var fontSize = getComputedStyle(element).fontSize;
    return fontSize === "" ? 0 : parseInt(fontSize.slice(0, -2), 10);
}
function getLineHeight(element) {
    // getComputedStyle() => 18.0001px => 18
    var lineHeight = parseInt(getComputedStyle(element).lineHeight.slice(0, -2), 10);
    // this check will be true if line-height is a keyword like "normal"
    if (isNaN(lineHeight)) {
        // @see http://stackoverflow.com/a/18430767/6342931
        var line = document.createElement("span");
        line.innerHTML = "<br>";
        element.appendChild(line);
        var singleLineHeight = element.offsetHeight;
        line.innerHTML = "<br><br>";
        var doubleLineHeight = element.offsetHeight;
        element.removeChild(line);
        // this can return 0 in edge cases
        lineHeight = doubleLineHeight - singleLineHeight;
    }
    return lineHeight;
}
function insertAtCaret(el, text) {
    var selectionEnd = el.selectionEnd, selectionStart = el.selectionStart, value = el.value;
    if (selectionStart >= 0) {
        var before_1 = value.substring(0, selectionStart);
        var after_1 = value.substring(selectionEnd, value.length);
        var len = text.length;
        el.value = "" + before_1 + text + after_1;
        el.selectionStart = selectionStart + len;
        el.selectionEnd = selectionStart + len;
    }
}
exports.EditableTextFactory = React.createFactory(EditableText);



/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(105));



/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
var browser = {
    isEdge: !!userAgent.match(/Edge/),
    isInternetExplorer: (!!userAgent.match(/Trident/) || !!userAgent.match(/rv:11/)),
    isWebkit: !!userAgent.match(/AppleWebKit/),
};
exports.Browser = {
    isEdge: function () { return browser.isEdge; },
    isInternetExplorer: function () { return browser.isInternetExplorer; },
    isWebkit: function () { return browser.isWebkit; },
};



/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var common_1 = __webpack_require__(16);
var Errors = __webpack_require__(9);
var buttons_1 = __webpack_require__(23);
var inputGroup_1 = __webpack_require__(51);
var IncrementDirection;
(function (IncrementDirection) {
    IncrementDirection[IncrementDirection["DOWN"] = -1] = "DOWN";
    IncrementDirection[IncrementDirection["UP"] = 1] = "UP";
})(IncrementDirection || (IncrementDirection = {}));
var NumericInput = NumericInput_1 = (function (_super) {
    tslib_1.__extends(NumericInput, _super);
    function NumericInput(props, context) {
        var _this = _super.call(this, props, context) || this;
        // updating these flags need not trigger re-renders, so don't include them in this.state.
        _this.didPasteEventJustOccur = false;
        _this.shouldSelectAfterUpdate = false;
        _this.inputRef = function (input) {
            _this.inputElement = input;
        };
        // Callbacks - Buttons
        // ===================
        _this.handleDecrementButtonClick = function (e) {
            var delta = _this.getIncrementDelta(IncrementDirection.DOWN, e.shiftKey, e.altKey);
            var nextValue = _this.incrementValue(delta);
            _this.invokeValueCallback(nextValue, _this.props.onButtonClick);
        };
        _this.handleIncrementButtonClick = function (e) {
            var delta = _this.getIncrementDelta(IncrementDirection.UP, e.shiftKey, e.altKey);
            var nextValue = _this.incrementValue(delta);
            _this.invokeValueCallback(nextValue, _this.props.onButtonClick);
        };
        _this.handleButtonFocus = function () {
            _this.setState({ isButtonGroupFocused: true });
        };
        _this.handleButtonBlur = function () {
            _this.setState({ isButtonGroupFocused: false });
        };
        _this.handleButtonKeyUp = function (e, onClick) {
            if (e.keyCode === common_1.Keys.SPACE || e.keyCode === common_1.Keys.ENTER) {
                // prevent the page from scrolling (this is the default browser
                // behavior for shift + space or alt + space).
                e.preventDefault();
                // trigger a click event to update the input value appropriately,
                // based on the active modifier keys.
                var fakeClickEvent = {
                    altKey: e.altKey,
                    currentTarget: e.currentTarget,
                    shiftKey: e.shiftKey,
                    target: e.target,
                };
                onClick(fakeClickEvent);
            }
        };
        // Callbacks - Input
        // =================
        _this.handleInputFocus = function (e) {
            _this.shouldSelectAfterUpdate = _this.props.selectAllOnFocus;
            _this.setState({ isInputGroupFocused: true });
            common_1.Utils.safeInvoke(_this.props.onFocus, e);
        };
        _this.handleInputBlur = function (e) {
            // explicitly set `shouldSelectAfterUpdate` to `false` to prevent focus
            // hoarding on IE11 (#704)
            _this.shouldSelectAfterUpdate = false;
            var baseStateChange = { isInputGroupFocused: false };
            if (_this.props.clampValueOnBlur) {
                var value = e.target.value;
                var sanitizedValue = _this.getSanitizedValue(value);
                _this.setState(tslib_1.__assign({}, baseStateChange, { value: sanitizedValue }));
                if (value !== sanitizedValue) {
                    _this.invokeValueCallback(sanitizedValue, _this.props.onValueChange);
                }
            }
            else {
                _this.setState(baseStateChange);
            }
            common_1.Utils.safeInvoke(_this.props.onBlur, e);
        };
        _this.handleInputKeyDown = function (e) {
            if (_this.props.disabled || _this.props.readOnly) {
                return;
            }
            var keyCode = e.keyCode;
            var direction;
            if (keyCode === common_1.Keys.ARROW_UP) {
                direction = IncrementDirection.UP;
            }
            else if (keyCode === common_1.Keys.ARROW_DOWN) {
                direction = IncrementDirection.DOWN;
            }
            if (direction != null) {
                // when the input field has focus, some key combinations will modify
                // the field's selection range. we'll actually want to select all
                // text in the field after we modify the value on the following
                // lines. preventing the default selection behavior lets us do that
                // without interference.
                e.preventDefault();
                var delta = _this.getIncrementDelta(direction, e.shiftKey, e.altKey);
                _this.incrementValue(delta);
            }
            common_1.Utils.safeInvoke(_this.props.onKeyDown, e);
        };
        _this.handleInputKeyPress = function (e) {
            // we prohibit keystrokes in onKeyPress instead of onKeyDown, because
            // e.key is not trustworthy in onKeyDown in all browsers.
            if (_this.props.allowNumericCharactersOnly && _this.isKeyboardEventDisabledForBasicNumericEntry(e)) {
                e.preventDefault();
            }
            common_1.Utils.safeInvoke(_this.props.onKeyPress, e);
        };
        _this.handleInputPaste = function (e) {
            _this.didPasteEventJustOccur = true;
            common_1.Utils.safeInvoke(_this.props.onPaste, e);
        };
        _this.handleInputChange = function (e) {
            var value = e.target.value;
            var nextValue;
            if (_this.props.allowNumericCharactersOnly && _this.didPasteEventJustOccur) {
                _this.didPasteEventJustOccur = false;
                var valueChars = value.split("");
                var sanitizedValueChars = valueChars.filter(_this.isFloatingPointNumericCharacter);
                var sanitizedValue = sanitizedValueChars.join("");
                nextValue = sanitizedValue;
            }
            else {
                nextValue = value;
            }
            _this.shouldSelectAfterUpdate = false;
            _this.setState({ value: nextValue });
            _this.invokeValueCallback(nextValue, _this.props.onValueChange);
        };
        _this.state = {
            stepMaxPrecision: _this.getStepMaxPrecision(props),
            value: _this.getValueOrEmptyValue(props.value),
        };
        return _this;
    }
    NumericInput.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        var value = this.getValueOrEmptyValue(nextProps.value);
        var didMinChange = nextProps.min !== this.props.min;
        var didMaxChange = nextProps.max !== this.props.max;
        var didBoundsChange = didMinChange || didMaxChange;
        var sanitizedValue = (value !== NumericInput_1.VALUE_EMPTY)
            ? this.getSanitizedValue(value, /* delta */ 0, nextProps.min, nextProps.max)
            : NumericInput_1.VALUE_EMPTY;
        var stepMaxPrecision = this.getStepMaxPrecision(nextProps);
        // if a new min and max were provided that cause the existing value to fall
        // outside of the new bounds, then clamp the value to the new valid range.
        if (didBoundsChange && sanitizedValue !== this.state.value) {
            this.setState({ stepMaxPrecision: stepMaxPrecision, value: sanitizedValue });
            this.invokeValueCallback(sanitizedValue, this.props.onValueChange);
        }
        else {
            this.setState({ stepMaxPrecision: stepMaxPrecision, value: value });
        }
    };
    NumericInput.prototype.render = function () {
        var _a = this.props, buttonPosition = _a.buttonPosition, className = _a.className, large = _a.large;
        var inputGroupHtmlProps = common_1.removeNonHTMLProps(this.props, [
            "allowNumericCharactersOnly",
            "buttonPosition",
            "clampValueOnBlur",
            "className",
            "large",
            "majorStepSize",
            "minorStepSize",
            "onButtonClick",
            "onValueChange",
            "selectAllOnFocus",
            "selectAllOnIncrement",
            "stepSize",
        ], true);
        var inputGroup = (React.createElement(inputGroup_1.InputGroup, tslib_1.__assign({ autoComplete: "off" }, inputGroupHtmlProps, { className: classNames((_b = {}, _b[common_1.Classes.LARGE] = large, _b)), intent: this.props.intent, inputRef: this.inputRef, key: "input-group", leftIconName: this.props.leftIconName, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onChange: this.handleInputChange, onKeyDown: this.handleInputKeyDown, onKeyPress: this.handleInputKeyPress, onPaste: this.handleInputPaste, value: this.state.value })));
        // the strict null check here is intentional; an undefined value should
        // fall back to the default button position on the right side.
        if (buttonPosition === "none" || buttonPosition === null) {
            // If there are no buttons, then the control group will render the
            // text field with squared border-radii on the left side, causing it
            // to look weird. This problem goes away if we simply don't nest within
            // a control group.
            return (React.createElement("div", { className: className }, inputGroup));
        }
        else {
            var incrementButton = this.renderButton(NumericInput_1.INCREMENT_KEY, NumericInput_1.INCREMENT_ICON_NAME, this.handleIncrementButtonClick);
            var decrementButton = this.renderButton(NumericInput_1.DECREMENT_KEY, NumericInput_1.DECREMENT_ICON_NAME, this.handleDecrementButtonClick);
            var buttonGroup = (React.createElement("div", { key: "button-group", className: classNames(common_1.Classes.BUTTON_GROUP, common_1.Classes.VERTICAL, common_1.Classes.FIXED) },
                incrementButton,
                decrementButton));
            var inputElems = (buttonPosition === common_1.Position.LEFT)
                ? [buttonGroup, inputGroup]
                : [inputGroup, buttonGroup];
            var classes = classNames(common_1.Classes.NUMERIC_INPUT, common_1.Classes.CONTROL_GROUP, (_c = {},
                _c[common_1.Classes.LARGE] = large,
                _c), className);
            return (React.createElement("div", { className: classes }, inputElems));
        }
        var _b, _c;
    };
    NumericInput.prototype.componentDidUpdate = function () {
        if (this.shouldSelectAfterUpdate) {
            this.inputElement.setSelectionRange(0, this.state.value.length);
        }
    };
    NumericInput.prototype.validateProps = function (nextProps) {
        var majorStepSize = nextProps.majorStepSize, max = nextProps.max, min = nextProps.min, minorStepSize = nextProps.minorStepSize, stepSize = nextProps.stepSize;
        if (min != null && max != null && min >= max) {
            throw new Error(Errors.NUMERIC_INPUT_MIN_MAX);
        }
        if (stepSize == null) {
            throw new Error(Errors.NUMERIC_INPUT_STEP_SIZE_NULL);
        }
        if (stepSize <= 0) {
            throw new Error(Errors.NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE);
        }
        if (minorStepSize && minorStepSize <= 0) {
            throw new Error(Errors.NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE);
        }
        if (majorStepSize && majorStepSize <= 0) {
            throw new Error(Errors.NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE);
        }
        if (minorStepSize && minorStepSize > stepSize) {
            throw new Error(Errors.NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND);
        }
        if (majorStepSize && majorStepSize < stepSize) {
            throw new Error(Errors.NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND);
        }
    };
    // Render Helpers
    // ==============
    NumericInput.prototype.renderButton = function (key, iconName, onClick) {
        var _this = this;
        // respond explicitly on key *up*, because onKeyDown triggers multiple
        // times and doesn't always receive modifier-key flags, leading to an
        // unintuitive/out-of-control incrementing experience.
        var onKeyUp = function (e) {
            _this.handleButtonKeyUp(e, onClick);
        };
        return (React.createElement(buttons_1.Button, { disabled: this.props.disabled || this.props.readOnly, iconName: iconName, intent: this.props.intent, key: key, onBlur: this.handleButtonBlur, onClick: onClick, onFocus: this.handleButtonFocus, onKeyUp: onKeyUp }));
    };
    NumericInput.prototype.invokeValueCallback = function (value, callback) {
        common_1.Utils.safeInvoke(callback, +value, value);
    };
    // Value Helpers
    // =============
    NumericInput.prototype.incrementValue = function (delta) {
        // pretend we're incrementing from 0 if currValue is empty
        var currValue = this.state.value || NumericInput_1.VALUE_ZERO;
        var nextValue = this.getSanitizedValue(currValue, delta);
        this.shouldSelectAfterUpdate = this.props.selectAllOnIncrement;
        this.setState({ value: nextValue });
        this.invokeValueCallback(nextValue, this.props.onValueChange);
        return nextValue;
    };
    NumericInput.prototype.getIncrementDelta = function (direction, isShiftKeyPressed, isAltKeyPressed) {
        var _a = this.props, majorStepSize = _a.majorStepSize, minorStepSize = _a.minorStepSize, stepSize = _a.stepSize;
        if (isShiftKeyPressed && majorStepSize != null) {
            return direction * majorStepSize;
        }
        else if (isAltKeyPressed && minorStepSize != null) {
            return direction * minorStepSize;
        }
        else {
            return direction * stepSize;
        }
    };
    NumericInput.prototype.getSanitizedValue = function (value, delta, min, max) {
        if (delta === void 0) { delta = 0; }
        if (min === void 0) { min = this.props.min; }
        if (max === void 0) { max = this.props.max; }
        if (!this.isValueNumeric(value)) {
            return NumericInput_1.VALUE_EMPTY;
        }
        var nextValue = this.toMaxPrecision(parseFloat(value) + delta);
        // defaultProps won't work if the user passes in null, so just default
        // to +/- infinity here instead, as a catch-all.
        var adjustedMin = (min != null) ? min : -Infinity;
        var adjustedMax = (max != null) ? max : Infinity;
        nextValue = common_1.Utils.clamp(nextValue, adjustedMin, adjustedMax);
        return nextValue.toString();
    };
    NumericInput.prototype.getValueOrEmptyValue = function (value) {
        return (value != null) ? value.toString() : NumericInput_1.VALUE_EMPTY;
    };
    NumericInput.prototype.isValueNumeric = function (value) {
        // checking if a string is numeric in Typescript is a big pain, because
        // we can't simply toss a string parameter to isFinite. below is the
        // essential approach that jQuery uses, which involves subtracting a
        // parsed numeric value from the string representation of the value. we
        // need to cast the value to the `any` type to allow this operation
        // between dissimilar types.
        return value != null && (value - parseFloat(value) + 1) >= 0;
    };
    NumericInput.prototype.isKeyboardEventDisabledForBasicNumericEntry = function (e) {
        // unit tests may not include e.key. don't bother disabling those events.
        if (e.key == null) {
            return false;
        }
        // allow modified key strokes that may involve letters and other
        // non-numeric/invalid characters (Cmd + A, Cmd + C, Cmd + V, Cmd + X).
        if (e.ctrlKey || e.altKey || e.metaKey) {
            return false;
        }
        // keys that print a single character when pressed have a `key` name of
        // length 1. every other key has a longer `key` name (e.g. "Backspace",
        // "ArrowUp", "Shift"). since none of those keys can print a character
        // to the field--and since they may have important native behaviors
        // beyond printing a character--we don't want to disable their effects.
        var isSingleCharKey = e.key.length === 1;
        if (!isSingleCharKey) {
            return false;
        }
        // now we can simply check that the single character that wants to be printed
        // is a floating-point number character that we're allowed to print.
        return !this.isFloatingPointNumericCharacter(e.key);
    };
    NumericInput.prototype.isFloatingPointNumericCharacter = function (char) {
        return NumericInput_1.FLOATING_POINT_NUMBER_CHARACTER_REGEX.test(char);
    };
    NumericInput.prototype.getStepMaxPrecision = function (props) {
        if (props.minorStepSize != null) {
            return common_1.Utils.countDecimalPlaces(props.minorStepSize);
        }
        else {
            return common_1.Utils.countDecimalPlaces(props.stepSize);
        }
    };
    NumericInput.prototype.toMaxPrecision = function (value) {
        // round the value to have the specified maximum precision (toFixed is the wrong choice,
        // because it would show trailing zeros in the decimal part out to the specified precision)
        // source: http://stackoverflow.com/a/18358056/5199574
        var scaleFactor = Math.pow(10, this.state.stepMaxPrecision);
        return Math.round(value * scaleFactor) / scaleFactor;
    };
    return NumericInput;
}(common_1.AbstractComponent));
NumericInput.displayName = "Blueprint.NumericInput";
NumericInput.VALUE_EMPTY = "";
NumericInput.VALUE_ZERO = "0";
NumericInput.defaultProps = {
    allowNumericCharactersOnly: true,
    buttonPosition: common_1.Position.RIGHT,
    clampValueOnBlur: false,
    large: false,
    majorStepSize: 10,
    minorStepSize: 0.1,
    selectAllOnFocus: false,
    selectAllOnIncrement: false,
    stepSize: 1,
    value: NumericInput_1.VALUE_EMPTY,
};
NumericInput.DECREMENT_KEY = "decrement";
NumericInput.INCREMENT_KEY = "increment";
NumericInput.DECREMENT_ICON_NAME = "chevron-down";
NumericInput.INCREMENT_ICON_NAME = "chevron-up";
/**
 * A regex that matches a string of length 1 (i.e. a standalone character)
 * if and only if it is a floating-point number character as defined by W3C:
 * https://www.w3.org/TR/2012/WD-html-markup-20120329/datatypes.html#common.data.float
 *
 * Floating-point number characters are the only characters that can be
 * printed within a default input[type="number"]. This component should
 * behave the same way when this.props.allowNumericCharactersOnly = true.
 * See here for the input[type="number"].value spec:
 * https://www.w3.org/TR/2012/WD-html-markup-20120329/input.number.html#input.number.attrs.value
 */
NumericInput.FLOATING_POINT_NUMBER_CHARACTER_REGEX = /^[Ee0-9\+\-\.]$/;
NumericInput = NumericInput_1 = tslib_1.__decorate([
    PureRender
], NumericInput);
exports.NumericInput = NumericInput;
exports.NumericInputFactory = React.createFactory(NumericInput);
var NumericInput_1;



/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var controls_1 = __webpack_require__(50);
var counter = 0;
function nextName() { return RadioGroup.displayName + "-" + counter++; }
var RadioGroup = (function (_super) {
    tslib_1.__extends(RadioGroup, _super);
    function RadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // a unique name for this group, which can be overridden by `name` prop.
        _this.autoGroupName = nextName();
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var label = this.props.label;
        return (React.createElement("div", { className: this.props.className },
            label == null ? null : React.createElement("label", { className: Classes.LABEL }, label),
            Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()));
    };
    RadioGroup.prototype.validateProps = function () {
        if (this.props.children != null && this.props.options != null) {
            console.warn(Errors.RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX);
        }
    };
    RadioGroup.prototype.renderChildren = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child) {
            if (isRadio(child)) {
                return React.cloneElement(child, _this.getRadioProps(child.props));
            }
            else {
                return child;
            }
        });
    };
    RadioGroup.prototype.renderOptions = function () {
        var _this = this;
        return this.props.options.map(function (option) { return (React.createElement(controls_1.Radio, tslib_1.__assign({}, option, _this.getRadioProps(option), { key: option.value }))); });
    };
    RadioGroup.prototype.getRadioProps = function (optionProps) {
        var name = this.props.name;
        var value = optionProps.value, disabled = optionProps.disabled;
        return {
            checked: value === this.props.selectedValue,
            disabled: disabled || this.props.disabled,
            name: name == null ? this.autoGroupName : name,
            onChange: this.props.onChange,
        };
    };
    return RadioGroup;
}(abstractComponent_1.AbstractComponent));
RadioGroup.displayName = "Blueprint.RadioGroup";
exports.RadioGroup = RadioGroup;
;
function isRadio(child) {
    return child != null && child.type === controls_1.Radio;
}



/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var utils_1 = __webpack_require__(5);
var hotkeysEvents_1 = __webpack_require__(109);
function HotkeysTarget(constructor) {
    var _a = constructor.prototype, componentWillMount = _a.componentWillMount, componentDidMount = _a.componentDidMount, componentWillUnmount = _a.componentWillUnmount, render = _a.render, renderHotkeys = _a.renderHotkeys;
    if (!utils_1.isFunction(renderHotkeys)) {
        throw new Error("@HotkeysTarget-decorated class must implement `renderHotkeys`. " + constructor);
    }
    // tslint:disable no-invalid-this only-arrow-functions
    constructor.prototype.componentWillMount = function () {
        this.localHotkeysEvents = new hotkeysEvents_1.HotkeysEvents(hotkeysEvents_1.HotkeyScope.LOCAL);
        this.globalHotkeysEvents = new hotkeysEvents_1.HotkeysEvents(hotkeysEvents_1.HotkeyScope.GLOBAL);
        if (componentWillMount != null) {
            componentWillMount.call(this);
        }
    };
    constructor.prototype.componentDidMount = function () {
        // attach global key event listeners
        document.addEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.addEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        if (componentDidMount != null) {
            componentDidMount.call(this);
        }
    };
    constructor.prototype.componentWillUnmount = function () {
        // detach global key event listeners
        document.removeEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.removeEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        this.globalHotkeysEvents.clear();
        this.localHotkeysEvents.clear();
        if (componentWillUnmount != null) {
            componentWillUnmount.call(this);
        }
    };
    constructor.prototype.render = function () {
        var _this = this;
        var element = render.call(this);
        var hotkeys = renderHotkeys.call(this);
        this.localHotkeysEvents.setHotkeys(hotkeys.props);
        this.globalHotkeysEvents.setHotkeys(hotkeys.props);
        // attach local key event listeners
        if (element != null && this.localHotkeysEvents.count() > 0) {
            var tabIndex = hotkeys.props.tabIndex === undefined ? 0 : hotkeys.props.tabIndex;
            var existingKeyDown_1 = element.props.onKeyDown;
            var onKeyDown = function (e) {
                _this.localHotkeysEvents.handleKeyDown(e.nativeEvent);
                utils_1.safeInvoke(existingKeyDown_1, e);
            };
            var existingKeyUp_1 = element.props.onKeyUp;
            var onKeyUp = function (e) {
                _this.localHotkeysEvents.handleKeyUp(e.nativeEvent);
                utils_1.safeInvoke(existingKeyUp_1, e);
            };
            return React.cloneElement(element, { tabIndex: tabIndex, onKeyDown: onKeyDown, onKeyUp: onKeyUp });
        }
        else {
            return element;
        }
    };
    // tslint:enable
}
exports.HotkeysTarget = HotkeysTarget;
;



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(5);
var hotkey_1 = __webpack_require__(24);
var hotkeyParser_1 = __webpack_require__(34);
var hotkeysDialog_1 = __webpack_require__(54);
var SHOW_DIALOG_KEY = "?";
var HotkeyScope;
(function (HotkeyScope) {
    HotkeyScope[HotkeyScope["LOCAL"] = 0] = "LOCAL";
    HotkeyScope[HotkeyScope["GLOBAL"] = 1] = "GLOBAL";
})(HotkeyScope = exports.HotkeyScope || (exports.HotkeyScope = {}));
var HotkeysEvents = (function () {
    function HotkeysEvents(scope) {
        var _this = this;
        this.scope = scope;
        this.actions = [];
        this.handleKeyDown = function (e) {
            var combo = hotkeyParser_1.getKeyCombo(e);
            var isTextInput = _this.isTextInput(e);
            if (!isTextInput && hotkeyParser_1.comboMatches(hotkeyParser_1.parseKeyCombo(SHOW_DIALOG_KEY), combo)) {
                if (hotkeysDialog_1.isHotkeysDialogShowing()) {
                    hotkeysDialog_1.hideHotkeysDialogAfterDelay();
                }
                else {
                    hotkeysDialog_1.showHotkeysDialog(_this.actions.map(function (action) { return action.props; }));
                }
                return;
            }
            else if (hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            _this.invokeNamedCallbackIfComboRecognized(combo, "onKeyDown", e);
        };
        this.handleKeyUp = function (e) {
            if (hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            _this.invokeNamedCallbackIfComboRecognized(hotkeyParser_1.getKeyCombo(e), "onKeyUp", e);
        };
    }
    HotkeysEvents.prototype.count = function () {
        return this.actions.length;
    };
    HotkeysEvents.prototype.clear = function () {
        this.actions = [];
    };
    HotkeysEvents.prototype.setHotkeys = function (props) {
        var _this = this;
        var actions = [];
        react_1.Children.forEach(props.children, function (child) {
            if (hotkey_1.Hotkey.isInstance(child) && _this.isScope(child.props)) {
                actions.push({
                    combo: hotkeyParser_1.parseKeyCombo(child.props.combo),
                    props: child.props,
                });
            }
        });
        this.actions = actions;
    };
    HotkeysEvents.prototype.invokeNamedCallbackIfComboRecognized = function (combo, callbackName, e) {
        var isTextInput = this.isTextInput(e);
        for (var _i = 0, _a = this.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            var shouldIgnore = (isTextInput && !action.props.allowInInput) || action.props.disabled;
            if (!shouldIgnore && hotkeyParser_1.comboMatches(action.combo, combo)) {
                if (action.props.preventDefault) {
                    e.preventDefault();
                }
                if (action.props.stopPropagation) {
                    // set a flag just for unit testing. not meant to be referenced in feature work.
                    e.isPropagationStopped = true;
                    e.stopPropagation();
                }
                utils_1.safeInvoke(action.props[callbackName], e);
            }
        }
    };
    HotkeysEvents.prototype.isScope = function (props) {
        return (props.global ? HotkeyScope.GLOBAL : HotkeyScope.LOCAL) === this.scope;
    };
    HotkeysEvents.prototype.isTextInput = function (e) {
        var elem = e.target;
        // we check these cases for unit testing, but this should not happen
        // during normal operation
        if (elem == null || elem.closest == null) {
            return false;
        }
        var editable = elem.closest("input, textarea, [contenteditable=true]");
        if (editable == null) {
            return false;
        }
        // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
        if (editable.tagName.toLowerCase() === "input") {
            var inputType = editable.type;
            if (inputType === "checkbox" || inputType === "radio") {
                return false;
            }
        }
        // don't let read-only fields prevent hotkey behavior
        if (editable.readOnly) {
            return false;
        }
        return true;
    };
    return HotkeysEvents;
}());
exports.HotkeysEvents = HotkeysEvents;



/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var MenuDivider = (function (_super) {
    tslib_1.__extends(MenuDivider, _super);
    function MenuDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, title = _a.title;
        if (title == null) {
            // simple divider
            return React.createElement("li", { className: classNames(Classes.MENU_DIVIDER, className) });
        }
        else {
            // section header with title
            return React.createElement("li", { className: classNames(Classes.MENU_HEADER, className) },
                React.createElement("h6", null, title));
        }
    };
    return MenuDivider;
}(React.Component));
MenuDivider.displayName = "Blueprint.MenuDivider";
exports.MenuDivider = MenuDivider;
exports.MenuDividerFactory = React.createFactory(MenuDivider);



/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var NonIdealState = (function (_super) {
    tslib_1.__extends(NonIdealState, _super);
    function NonIdealState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonIdealState.prototype.render = function () {
        return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE, this.props.className) },
            this.maybeRenderVisual(),
            this.maybeRenderTitle(),
            this.maybeRenderDescription(),
            this.maybeRenderAction()));
    };
    NonIdealState.prototype.maybeRenderAction = function () {
        if (this.props.action == null) {
            return undefined;
        }
        return React.createElement("div", { className: Classes.NON_IDEAL_STATE_ACTION }, this.props.action);
    };
    NonIdealState.prototype.maybeRenderDescription = function () {
        if (this.props.description == null) {
            return undefined;
        }
        return React.createElement("div", { className: Classes.NON_IDEAL_STATE_DESCRIPTION }, this.props.description);
    };
    NonIdealState.prototype.maybeRenderTitle = function () {
        if (this.props.title == null) {
            return undefined;
        }
        return React.createElement("h4", { className: Classes.NON_IDEAL_STATE_TITLE }, this.props.title);
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var visual = this.props.visual;
        if (visual == null) {
            return undefined;
        }
        else if (typeof visual === "string") {
            return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE_VISUAL, Classes.NON_IDEAL_STATE_ICON) },
                React.createElement("span", { className: classNames("pt-icon", Classes.iconClass(visual)) })));
        }
        else {
            return (React.createElement("div", { className: Classes.NON_IDEAL_STATE_VISUAL }, visual));
        }
    };
    return NonIdealState;
}(React.Component));
NonIdealState = tslib_1.__decorate([
    PureRender
], NonIdealState);
exports.NonIdealState = NonIdealState;
exports.NonIdealStateFactory = React.createFactory(NonIdealState);



/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var Text = (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContentOverflowing: false,
            textContent: "",
        };
        _this.refHandlers = {
            text: function (overflowElement) { return _this.textRef = overflowElement; },
        };
        return _this;
    }
    Text.prototype.componentDidMount = function () {
        this.update();
    };
    Text.prototype.componentDidUpdate = function () {
        this.update();
    };
    Text.prototype.render = function () {
        var classes = classNames((_a = {},
            _a[Classes.TEXT_OVERFLOW_ELLIPSIS] = this.props.ellipsize,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, ref: this.refHandlers.text, title: this.state.isContentOverflowing ? this.state.textContent : undefined }, this.props.children));
        var _a;
    };
    Text.prototype.update = function () {
        var newState = {
            isContentOverflowing: this.props.ellipsize && this.textRef.scrollWidth > this.textRef.clientWidth,
            textContent: this.textRef.textContent,
        };
        this.setState(newState);
    };
    return Text;
}(React.Component));
Text = tslib_1.__decorate([
    PureRender
], Text);
exports.Text = Text;



/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var popover_1 = __webpack_require__(18);
var SVGPopover = (function (_super) {
    tslib_1.__extends(SVGPopover, _super);
    function SVGPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGPopover.prototype.render = function () {
        return React.createElement(popover_1.Popover, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children);
    };
    return SVGPopover;
}(React.Component));
exports.SVGPopover = SVGPopover;
exports.SVGPopoverFactory = React.createFactory(SVGPopover);



/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var utils_1 = __webpack_require__(5);
var ProgressBar = (function (_super) {
    tslib_1.__extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = classNames("pt-progress-bar", Classes.intentClass(intent), className);
        // don't set width if value is null (rely on default CSS value)
        var width = (value == null ? null : 100 * utils_1.clamp(value, 0, 1) + "%");
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: "pt-progress-meter", style: { width: width } })));
    };
    return ProgressBar;
}(React.Component));
ProgressBar.displayName = "Blueprint.ProgressBar";
ProgressBar = tslib_1.__decorate([
    PureRender
], ProgressBar);
exports.ProgressBar = ProgressBar;
exports.ProgressBarFactory = React.createFactory(ProgressBar);



/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var tooltip_1 = __webpack_require__(31);
var SVGTooltip = (function (_super) {
    tslib_1.__extends(SVGTooltip, _super);
    function SVGTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGTooltip.prototype.render = function () {
        return React.createElement(tooltip_1.Tooltip, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children);
    };
    return SVGTooltip;
}(React.Component));
exports.SVGTooltip = SVGTooltip;
exports.SVGTooltipFactory = React.createFactory(SVGTooltip);



/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var utils_1 = __webpack_require__(5);
var coreSlider_1 = __webpack_require__(55);
var handle_1 = __webpack_require__(56);
var RangeEnd;
(function (RangeEnd) {
    RangeEnd[RangeEnd["LEFT"] = 0] = "LEFT";
    RangeEnd[RangeEnd["RIGHT"] = 1] = "RIGHT";
})(RangeEnd || (RangeEnd = {}));
var RangeSlider = (function (_super) {
    tslib_1.__extends(RangeSlider, _super);
    function RangeSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = classNames(Classes.SLIDER, Classes.RANGE_SLIDER);
        _this.handles = [];
        _this.addHandleRef = function (ref) {
            if (ref != null) {
                _this.handles.push(ref);
            }
        };
        _this.getHandlerForIndex = function (index, callback) { return function (newValue) {
            if (utils_1.isFunction(callback)) {
                var _a = _this.props.value, leftValue = _a[0], rightValue = _a[1];
                if (index === RangeEnd.LEFT) {
                    callback([Math.min(newValue, rightValue), rightValue]);
                }
                else {
                    callback([leftValue, Math.max(newValue, leftValue)]);
                }
            }
        }; };
        _this.handleChange = function (newValue) {
            var _a = _this.props.value, leftValue = _a[0], rightValue = _a[1];
            var newLeftValue = newValue[0], newRightValue = newValue[1];
            if ((leftValue !== newLeftValue || rightValue !== newRightValue) && utils_1.isFunction(_this.props.onChange)) {
                _this.props.onChange(newValue);
            }
        };
        return _this;
    }
    RangeSlider.prototype.renderFill = function () {
        var _a = this.props.value, leftValue = _a[0], rightValue = _a[1];
        if (leftValue === rightValue) {
            return undefined;
        }
        // expand by 1px in each direction so it sits under the handle border
        var left = Math.round((leftValue - this.props.min) * this.state.tickSize) - 1;
        var width = Math.round((rightValue - leftValue) * this.state.tickSize) + 2;
        if (width < 0) {
            left += width;
            width = Math.abs(width);
        }
        return React.createElement("div", { className: Classes.SLIDER + "-progress", style: { left: left, width: width } });
    };
    RangeSlider.prototype.renderHandles = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, max = _a.max, min = _a.min, onRelease = _a.onRelease, stepSize = _a.stepSize, value = _a.value;
        return value.map(function (val, index) { return (React.createElement(handle_1.Handle, { disabled: disabled, key: index, label: _this.formatLabel(val), max: max, min: min, onChange: _this.getHandlerForIndex(index, _this.handleChange), onRelease: _this.getHandlerForIndex(index, onRelease), ref: _this.addHandleRef, stepSize: stepSize, tickSize: _this.state.tickSize, value: val })); });
    };
    RangeSlider.prototype.handleTrackClick = function (event) {
        var _this = this;
        this.handles.reduce(function (min, handle) {
            // find closest handle to the mouse position
            var value = handle.clientToValue(event.clientX);
            return _this.nearestHandleForValue(value, min, handle);
        }).beginHandleMovement(event);
    };
    RangeSlider.prototype.handleTrackTouch = function (event) {
        var _this = this;
        this.handles.reduce(function (min, handle) {
            // find closest handle to the touch position
            var value = handle.clientToValue(handle.touchEventClientX(event));
            return _this.nearestHandleForValue(value, min, handle);
        }).beginHandleTouchMovement(event);
    };
    RangeSlider.prototype.nearestHandleForValue = function (value, firstHandle, secondHandle) {
        var firstDistance = Math.abs(value - firstHandle.props.value);
        var secondDistance = Math.abs(value - secondHandle.props.value);
        return secondDistance < firstDistance ? secondHandle : firstHandle;
    };
    RangeSlider.prototype.validateProps = function (props) {
        var value = props.value;
        if (value == null || value[RangeEnd.LEFT] == null || value[RangeEnd.RIGHT] == null) {
            throw new Error(Errors.RANGESLIDER_NULL_VALUE);
        }
    };
    return RangeSlider;
}(coreSlider_1.CoreSlider));
RangeSlider.defaultProps = {
    disabled: false,
    labelStepSize: 1,
    max: 10,
    min: 0,
    showTrackFill: true,
    stepSize: 1,
    value: [0, 10],
};
RangeSlider.displayName = "Blueprint.RangeSlider";
exports.RangeSlider = RangeSlider;
exports.RangeSliderFactory = React.createFactory(RangeSlider);



/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var utils_1 = __webpack_require__(5);
var coreSlider_1 = __webpack_require__(55);
var handle_1 = __webpack_require__(56);
var Slider = (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleHandleRef = function (ref) {
            _this.handle = ref;
        };
        return _this;
    }
    Slider.prototype.renderFill = function () {
        var initialValue = utils_1.clamp(this.props.initialValue, this.props.min, this.props.max);
        var left = Math.round((initialValue - this.props.min) * this.state.tickSize);
        var width = Math.round((this.props.value - initialValue) * this.state.tickSize);
        if (width < 0) {
            left += width;
            width = Math.abs(width);
        }
        return React.createElement("div", { className: Classes.SLIDER + "-progress", style: { left: left, width: width } });
    };
    Slider.prototype.renderHandles = function () {
        // make sure to *not* pass this.props.className to handle
        return (React.createElement(handle_1.Handle, tslib_1.__assign({}, this.props, this.state, { className: "", label: this.formatLabel(this.props.value), ref: this.handleHandleRef })));
    };
    Slider.prototype.handleTrackClick = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleMovement(event);
        }
    };
    Slider.prototype.handleTrackTouch = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleTouchMovement(event);
        }
    };
    return Slider;
}(coreSlider_1.CoreSlider));
Slider.defaultProps = {
    disabled: false,
    initialValue: 0,
    labelStepSize: 1,
    max: 10,
    min: 0,
    showTrackFill: true,
    stepSize: 1,
    value: 0,
};
exports.Slider = Slider;
exports.SliderFactory = React.createFactory(Slider);



/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
// import * to avoid "cannot be named" error on factory
var spinner = __webpack_require__(32);
var SVGSpinner = (function (_super) {
    tslib_1.__extends(SVGSpinner, _super);
    function SVGSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGSpinner.prototype.renderContainer = function (classes, content) {
        return (React.createElement("g", { className: classNames(Classes.SVG_SPINNER, classes) },
            React.createElement("g", { className: "pt-svg-spinner-transform-group" }, content)));
    };
    return SVGSpinner;
}(spinner.Spinner));
exports.SVGSpinner = SVGSpinner;
exports.SVGSpinnerFactory = React.createFactory(SVGSpinner);



/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var react_dom_1 = __webpack_require__(12);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Errors = __webpack_require__(9);
var Keys = __webpack_require__(15);
var Utils = __webpack_require__(5);
var tab_1 = __webpack_require__(57);
var tabList_1 = __webpack_require__(58);
var tabPanel_1 = __webpack_require__(59);
var TAB_CSS_SELECTOR = "li[role=tab]";
var Tabs = (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs(props, context) {
        var _this = _super.call(this, props, context) || this;
        // state is initialized in the constructor but getStateFromProps needs state defined
        _this.state = {};
        _this.panelIds = [];
        _this.tabIds = [];
        _this.handleClick = function (e) {
            _this.handleTabSelectingEvent(e);
        };
        _this.handleKeyPress = function (e) {
            var insideTab = e.target.closest("." + Classes.TAB) != null;
            if (insideTab && (e.which === Keys.SPACE || e.which === Keys.ENTER)) {
                e.preventDefault();
                _this.handleTabSelectingEvent(e);
            }
        };
        _this.handleKeyDown = function (e) {
            // don't want to handle keyDown events inside a tab panel
            var insideTabList = e.target.closest("." + Classes.TAB_LIST) != null;
            if (!insideTabList) {
                return;
            }
            var focusedTabIndex = _this.getFocusedTabIndex();
            if (focusedTabIndex === -1) {
                return;
            }
            if (e.which === Keys.ARROW_LEFT) {
                e.preventDefault();
                // find previous tab that isn't disabled
                var newTabIndex = focusedTabIndex - 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== -1) {
                    newTabIndex--;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== -1) {
                    _this.focusTab(newTabIndex);
                }
            }
            else if (e.which === Keys.ARROW_RIGHT) {
                e.preventDefault();
                // find next tab that isn't disabled
                var tabsCount = _this.getTabsCount();
                var newTabIndex = focusedTabIndex + 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== tabsCount) {
                    newTabIndex++;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== tabsCount) {
                    _this.focusTab(newTabIndex);
                }
            }
        };
        _this.handleTabSelectingEvent = function (e) {
            var tabElement = e.target.closest(TAB_CSS_SELECTOR);
            // select only if Tab is one of us and is enabled
            if (tabElement != null
                && _this.tabIds.indexOf(tabElement.id) >= 0
                && tabElement.getAttribute("aria-disabled") !== "true") {
                var index = tabElement.parentElement.queryAll(TAB_CSS_SELECTOR).indexOf(tabElement);
                _this.setSelectedTabIndex(index);
            }
        };
        _this.state = _this.getStateFromProps(_this.props);
        if (!Utils.isNodeEnv("production")) {
            console.warn(Errors.TABS_WARN_DEPRECATED);
        }
        return _this;
    }
    Tabs.prototype.render = function () {
        return (React.createElement("div", { className: classNames(Classes.TABS, this.props.className), onClick: this.handleClick, onKeyPress: this.handleKeyPress, onKeyDown: this.handleKeyDown }, this.getChildren()));
    };
    Tabs.prototype.componentWillReceiveProps = function (newProps) {
        var newState = this.getStateFromProps(newProps);
        this.setState(newState);
    };
    Tabs.prototype.componentDidMount = function () {
        var _this = this;
        var selectedTab = react_dom_1.findDOMNode(this.refs["tabs-" + this.state.selectedTabIndex]);
        this.setTimeout(function () { return _this.moveIndicator(selectedTab); });
    };
    Tabs.prototype.componentDidUpdate = function (_, prevState) {
        var _this = this;
        var newIndex = this.state.selectedTabIndex;
        if (newIndex !== prevState.selectedTabIndex) {
            var tabElement_1 = react_dom_1.findDOMNode(this.refs["tabs-" + newIndex]);
            // need to measure on the next frame in case the Tab children simultaneously change
            this.setTimeout(function () { return _this.moveIndicator(tabElement_1); });
        }
    };
    Tabs.prototype.validateProps = function (props) {
        if (React.Children.count(props.children) > 0) {
            var child = React.Children.toArray(props.children)[0];
            if (child != null && child.type !== tabList_1.TabList) {
                throw new Error(Errors.TABS_FIRST_CHILD);
            }
            if (this.getTabsCount() !== this.getPanelsCount()) {
                throw new Error(Errors.TABS_MISMATCH);
            }
        }
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs.prototype.moveIndicator = function (_a) {
        var clientHeight = _a.clientHeight, clientWidth = _a.clientWidth, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop;
        var indicatorWrapperStyle = {
            height: clientHeight,
            transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
            width: clientWidth,
        };
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /**
     * Most of the component logic lives here. We clone the children provided by the user to set up refs,
     * accessibility attributes, and selection props correctly.
     */
    Tabs.prototype.getChildren = function () {
        var _this = this;
        for (var unassignedTabs = this.getTabsCount() - this.tabIds.length; unassignedTabs > 0; unassignedTabs--) {
            this.tabIds.push(generateTabId());
            this.panelIds.push(generatePanelId());
        }
        var childIndex = 0;
        return React.Children.map(this.props.children, function (child) {
            var result;
            // can be null if conditionally rendering TabList / TabPanel
            if (child == null) {
                return null;
            }
            if (childIndex === 0) {
                // clone TabList / Tab elements
                result = _this.cloneTabList(child);
            }
            else {
                var tabPanelIndex = childIndex - 1;
                var shouldRenderTabPanel = _this.state.selectedTabIndex === tabPanelIndex;
                result = shouldRenderTabPanel ? _this.cloneTabPanel(child, tabPanelIndex) : null;
            }
            childIndex++;
            return result;
        });
    };
    Tabs.prototype.cloneTabList = function (child) {
        var _this = this;
        var tabIndex = 0;
        var tabs = React.Children.map(child.props.children, function (tab) {
            // can be null if conditionally rendering Tab
            if (tab == null) {
                return null;
            }
            var clonedTab = React.cloneElement(tab, {
                id: _this.tabIds[tabIndex],
                isSelected: _this.state.selectedTabIndex === tabIndex,
                panelId: _this.panelIds[tabIndex],
                ref: "tabs-" + tabIndex,
            });
            tabIndex++;
            return clonedTab;
        });
        return React.cloneElement(child, {
            children: tabs,
            indicatorWrapperStyle: this.state.indicatorWrapperStyle,
            ref: "tablist",
        });
    };
    Tabs.prototype.cloneTabPanel = function (child, tabIndex) {
        return React.cloneElement(child, {
            id: this.panelIds[tabIndex],
            isSelected: this.state.selectedTabIndex === tabIndex,
            ref: "panels-" + tabIndex,
            tabId: this.tabIds[tabIndex],
        });
    };
    Tabs.prototype.focusTab = function (index) {
        var ref = "tabs-" + index;
        var tab = react_dom_1.findDOMNode(this.refs[ref]);
        tab.focus();
    };
    Tabs.prototype.getFocusedTabIndex = function () {
        var focusedElement = document.activeElement;
        if (focusedElement != null && focusedElement.classList.contains(Classes.TAB)) {
            var tabId = focusedElement.id;
            return this.tabIds.indexOf(tabId);
        }
        return -1;
    };
    Tabs.prototype.getTabs = function () {
        if (this.props.children == null) {
            return [];
        }
        var tabs = [];
        if (React.Children.count(this.props.children) > 0) {
            var firstChild = React.Children.toArray(this.props.children)[0];
            if (firstChild != null) {
                React.Children.forEach(firstChild.props.children, function (tabListChild) {
                    if (tabListChild.type === tab_1.Tab) {
                        tabs.push(tabListChild);
                    }
                });
            }
        }
        return tabs;
    };
    Tabs.prototype.getTabsCount = function () {
        return this.getTabs().length;
    };
    Tabs.prototype.getPanelsCount = function () {
        if (this.props.children == null) {
            return 0;
        }
        var index = 0;
        var panelCount = 0;
        React.Children.forEach(this.props.children, function (child) {
            if (child.type === tabPanel_1.TabPanel) {
                panelCount++;
            }
            index++;
        });
        return panelCount;
    };
    Tabs.prototype.getStateFromProps = function (props) {
        var selectedTabIndex = props.selectedTabIndex, initialSelectedTabIndex = props.initialSelectedTabIndex;
        if (this.isValidTabIndex(selectedTabIndex)) {
            return { selectedTabIndex: selectedTabIndex };
        }
        else if (this.isValidTabIndex(initialSelectedTabIndex) && this.state.selectedTabIndex == null) {
            return { selectedTabIndex: initialSelectedTabIndex };
        }
        else {
            return this.state;
        }
    };
    Tabs.prototype.isTabDisabled = function (index) {
        var tab = this.getTabs()[index];
        return tab != null && tab.props.isDisabled;
    };
    Tabs.prototype.isValidTabIndex = function (index) {
        return index != null && index >= 0 && index < this.getTabsCount();
    };
    /**
     * Updates the component's state if uncontrolled and calls onChange.
     */
    Tabs.prototype.setSelectedTabIndex = function (index) {
        if (index === this.state.selectedTabIndex || !this.isValidTabIndex(index)) {
            return;
        }
        var prevSelectedIndex = this.state.selectedTabIndex;
        if (this.props.selectedTabIndex == null) {
            this.setState({
                selectedTabIndex: index,
            });
        }
        if (Utils.isFunction(this.props.onChange)) {
            this.props.onChange(index, prevSelectedIndex);
        }
    };
    return Tabs;
}(abstractComponent_1.AbstractComponent));
Tabs.defaultProps = {
    initialSelectedTabIndex: 0,
};
Tabs.displayName = "Blueprint.Tabs";
Tabs = tslib_1.__decorate([
    PureRender
], Tabs);
exports.Tabs = Tabs;
var tabCount = 0;
function generateTabId() {
    return "pt-tab-" + tabCount++;
}
var panelCount = 0;
function generatePanelId() {
    return "pt-tab-panel-" + panelCount++;
}
exports.TabsFactory = React.createFactory(Tabs);



/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var Keys = __webpack_require__(15);
var utils_1 = __webpack_require__(5);
var tab2_1 = __webpack_require__(60);
var tabTitle_1 = __webpack_require__(121);
exports.Expander = function () { return React.createElement("div", { className: "pt-flex-expander" }); };
var TAB_SELECTOR = "." + Classes.TAB;
var Tabs2 = (function (_super) {
    tslib_1.__extends(Tabs2, _super);
    function Tabs2(props) {
        var _this = _super.call(this, props) || this;
        _this.refHandlers = {
            tablist: function (tabElement) { return _this.tablistElement = tabElement; },
        };
        _this.handleKeyDown = function (e) {
            var focusedElement = document.activeElement.closest(TAB_SELECTOR);
            // rest of this is potentially expensive and futile, so bail if no tab is focused
            if (focusedElement == null) {
                return;
            }
            // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
            var enabledTabElements = _this.getTabElements()
                .filter(function (el) { return el.getAttribute("aria-disabled") === "false"; });
            var focusedIndex = enabledTabElements.indexOf(focusedElement);
            var direction = _this.getKeyCodeDirection(e);
            if (focusedIndex >= 0 && direction !== undefined) {
                e.preventDefault();
                var length_1 = enabledTabElements.length;
                // auto-wrapping at 0 and `length`
                var nextFocusedIndex = (focusedIndex + direction + length_1) % length_1;
                enabledTabElements[nextFocusedIndex].focus();
            }
        };
        _this.handleKeyPress = function (e) {
            var targetTabElement = e.target.closest(TAB_SELECTOR);
            if (targetTabElement != null && isEventKeyCode(e, Keys.SPACE, Keys.ENTER)) {
                e.preventDefault();
                targetTabElement.click();
            }
        };
        _this.handleTabClick = function (newTabId, event) {
            utils_1.safeInvoke(_this.props.onChange, newTabId, _this.state.selectedTabId, event);
            if (_this.props.selectedTabId === undefined) {
                _this.setState({ selectedTabId: newTabId });
            }
        };
        _this.renderTabPanel = function (tab) {
            var _a = tab.props, className = _a.className, panel = _a.panel, id = _a.id;
            if (panel === undefined) {
                return undefined;
            }
            return (React.createElement("div", { "aria-labelledby": tabTitle_1.generateTabTitleId(_this.props.id, id), "aria-hidden": id !== _this.state.selectedTabId, className: classNames(Classes.TAB_PANEL, className), id: tabTitle_1.generateTabPanelId(_this.props.id, id), key: id, role: "tabpanel" }, panel));
        };
        _this.renderTabTitle = function (tab) {
            var id = tab.props.id;
            return (React.createElement(tabTitle_1.TabTitle, tslib_1.__assign({}, tab.props, { parentId: _this.props.id, onClick: _this.handleTabClick, selected: id === _this.state.selectedTabId })));
        };
        var selectedTabId = _this.getInitialSelectedTabId();
        _this.state = { selectedTabId: selectedTabId };
        return _this;
    }
    Tabs2.prototype.render = function () {
        var _this = this;
        var _a = this.state, indicatorWrapperStyle = _a.indicatorWrapperStyle, selectedTabId = _a.selectedTabId;
        var tabTitles = React.Children.map(this.props.children, function (child) { return (isTab(child) ? _this.renderTabTitle(child) : child); });
        var tabPanels = this.getTabChildren()
            .filter(this.props.renderActiveTabPanelOnly ? function (tab) { return tab.props.id === selectedTabId; } : function () { return true; })
            .map(this.renderTabPanel);
        var tabIndicator = (React.createElement("div", { className: "pt-tab-indicator-wrapper", style: indicatorWrapperStyle },
            React.createElement("div", { className: "pt-tab-indicator" })));
        var classes = classNames(Classes.TABS, (_b = {}, _b[Classes.VERTICAL] = this.props.vertical, _b), this.props.className);
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: Classes.TAB_LIST, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, ref: this.refHandlers.tablist, role: "tablist" },
                this.props.animate ? tabIndicator : undefined,
                tabTitles),
            tabPanels));
        var _b;
    };
    Tabs2.prototype.componentDidMount = function () {
        this.moveSelectionIndicator();
    };
    Tabs2.prototype.componentWillReceiveProps = function (_a) {
        var selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            // keep state in sync with controlled prop, so state is canonical source of truth
            this.setState({ selectedTabId: selectedTabId });
        }
    };
    Tabs2.prototype.componentDidUpdate = function (_prevProps, prevState) {
        if (this.state.selectedTabId !== prevState.selectedTabId) {
            this.moveSelectionIndicator();
        }
    };
    Tabs2.prototype.getInitialSelectedTabId = function () {
        // NOTE: providing an unknown ID will hide the selection
        var _a = this.props, defaultSelectedTabId = _a.defaultSelectedTabId, selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            return selectedTabId;
        }
        else if (defaultSelectedTabId !== undefined) {
            return defaultSelectedTabId;
        }
        else {
            // select first tab in absence of user input
            var tabs = this.getTabChildren();
            return tabs.length === 0 ? undefined : tabs[0].props.id;
        }
    };
    Tabs2.prototype.getKeyCodeDirection = function (e) {
        if (isEventKeyCode(e, Keys.ARROW_LEFT, Keys.ARROW_UP)) {
            return -1;
        }
        else if (isEventKeyCode(e, Keys.ARROW_RIGHT, Keys.ARROW_DOWN)) {
            return 1;
        }
        return undefined;
    };
    /** Filters this.props.children to only `<Tab>`s */
    Tabs2.prototype.getTabChildren = function () {
        return React.Children.toArray(this.props.children).filter(isTab);
    };
    /** Queries root HTML element for all `.pt-tab`s with optional filter selector */
    Tabs2.prototype.getTabElements = function (subselector) {
        if (subselector === void 0) { subselector = ""; }
        if (this.tablistElement == null) {
            return [];
        }
        return this.tablistElement.queryAll(TAB_SELECTOR + subselector);
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs2.prototype.moveSelectionIndicator = function () {
        if (this.tablistElement === undefined) {
            return;
        }
        var tabIdSelector = TAB_SELECTOR + "[data-tab-id=\"" + this.state.selectedTabId + "\"]";
        var selectedTabElement = this.tablistElement.query(tabIdSelector);
        var indicatorWrapperStyle = { display: "none" };
        if (selectedTabElement != null) {
            var clientHeight = selectedTabElement.clientHeight, clientWidth = selectedTabElement.clientWidth, offsetLeft = selectedTabElement.offsetLeft, offsetTop = selectedTabElement.offsetTop;
            indicatorWrapperStyle = {
                height: clientHeight,
                transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
                width: clientWidth,
            };
        }
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    return Tabs2;
}(abstractComponent_1.AbstractComponent));
/** Insert a `Tabs2.Expander` between any two children to right-align all subsequent children. */
Tabs2.Expander = exports.Expander;
Tabs2.Tab = tab2_1.Tab2;
Tabs2.defaultProps = {
    animate: true,
    renderActiveTabPanelOnly: false,
    vertical: false,
};
Tabs2.displayName = "Blueprint.Tabs2";
Tabs2 = tslib_1.__decorate([
    PureRender
], Tabs2);
exports.Tabs2 = Tabs2;
exports.Tabs2Factory = React.createFactory(Tabs2);
function isEventKeyCode(e) {
    var codes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        codes[_i - 1] = arguments[_i];
    }
    return codes.indexOf(e.which) >= 0;
}
function isTab(child) {
    return child != null && child.type === tab2_1.Tab2;
}



/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var TabTitle = (function (_super) {
    tslib_1.__extends(TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) { return _this.props.onClick(_this.props.id, e); };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, id = _a.id, parentId = _a.parentId, selected = _a.selected;
        return (React.createElement("div", { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: classNames(Classes.TAB, this.props.className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", selected: selected ? true : undefined, tabIndex: disabled ? undefined : 0 },
            this.props.title,
            this.props.children));
    };
    return TabTitle;
}(React.Component));
TabTitle.displayName = "Blueprint.TabTitle";
TabTitle = tslib_1.__decorate([
    PureRender
], TabTitle);
exports.TabTitle = TabTitle;
function generateTabPanelId(parentId, tabId) {
    return Classes.TAB_PANEL + "_" + parentId + "_" + tabId;
}
exports.generateTabPanelId = generateTabPanelId;
function generateTabTitleId(parentId, tabId) {
    return Classes.TAB + "-title_" + parentId + "_" + tabId;
}
exports.generateTabTitleId = generateTabTitleId;



/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var common_1 = __webpack_require__(16);
var props_1 = __webpack_require__(17);
var Classes = __webpack_require__(3);
var Tag = (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRemoveClick = function (e) {
            common_1.Utils.safeInvoke(_this.props.onRemove, e, _this.props);
        };
        return _this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, active = _a.active, className = _a.className, intent = _a.intent, onRemove = _a.onRemove;
        var tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), (_b = {},
            _b[Classes.TAG_REMOVABLE] = onRemove != null,
            _b[Classes.ACTIVE] = active,
            _b), className);
        var button = common_1.Utils.isFunction(onRemove)
            ? React.createElement("button", { type: "button", className: Classes.TAG_REMOVE, onClick: this.onRemoveClick })
            : undefined;
        return (React.createElement("span", tslib_1.__assign({}, props_1.removeNonHTMLProps(this.props), { className: tagClasses }),
            this.props.children,
            button));
        var _b;
    };
    return Tag;
}(React.Component));
Tag.displayName = "Blueprint.Tag";
Tag = tslib_1.__decorate([
    PureRender
], Tag);
exports.Tag = Tag;
exports.TagFactory = React.createFactory(Tag);



/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var abstractComponent_1 = __webpack_require__(8);
var Classes = __webpack_require__(3);
var errors_1 = __webpack_require__(9);
var keys_1 = __webpack_require__(15);
var position_1 = __webpack_require__(14);
var utils_1 = __webpack_require__(5);
var overlay_1 = __webpack_require__(21);
var toast_1 = __webpack_require__(61);
var Toaster = Toaster_1 = (function (_super) {
    tslib_1.__extends(Toaster, _super);
    function Toaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toasts: [],
        };
        // auto-incrementing identifier for un-keyed toasts
        _this.toastId = 0;
        _this.getDismissHandler = function (toast) { return function (timeoutExpired) {
            _this.dismiss(toast.key, timeoutExpired);
        }; };
        _this.handleClose = function (e) {
            // NOTE that `e` isn't always a KeyboardEvent but that's the only type we care about
            if (e.which === keys_1.ESCAPE) {
                _this.clear();
            }
        };
        return _this;
    }
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    Toaster.create = function (props, container) {
        if (container === void 0) { container = document.body; }
        if (props != null && props.inline != null && !utils_1.isNodeEnv("production")) {
            console.warn(errors_1.TOASTER_WARN_INLINE);
        }
        var containerElement = document.createElement("div");
        container.appendChild(containerElement);
        return ReactDOM.render(React.createElement(Toaster_1, tslib_1.__assign({}, props, { inline: true })), containerElement);
    };
    Toaster.prototype.show = function (props) {
        var options = this.createToastOptions(props);
        this.setState(function (prevState) { return ({
            toasts: [options].concat(prevState.toasts),
        }); });
        return options.key;
    };
    Toaster.prototype.update = function (key, props) {
        var options = this.createToastOptions(props, key);
        this.setState(function (prevState) { return ({
            toasts: prevState.toasts.map(function (t) { return t.key === key ? options : t; }),
        }); });
    };
    Toaster.prototype.dismiss = function (key, timeoutExpired) {
        if (timeoutExpired === void 0) { timeoutExpired = false; }
        this.setState(function (_a) {
            var toasts = _a.toasts;
            return ({
                toasts: toasts.filter(function (t) {
                    var matchesKey = t.key === key;
                    if (matchesKey) {
                        utils_1.safeInvoke(t.onDismiss, timeoutExpired);
                    }
                    return !matchesKey;
                }),
            });
        });
    };
    Toaster.prototype.clear = function () {
        this.state.toasts.map(function (t) { return utils_1.safeInvoke(t.onDismiss, false); });
        this.setState({ toasts: [] });
    };
    Toaster.prototype.getToasts = function () {
        return this.state.toasts;
    };
    Toaster.prototype.render = function () {
        // $pt-transition-duration * 3 + $pt-transition-duration / 2
        var classes = classNames(Classes.TOAST_CONTAINER, this.getPositionClasses(), this.props.className);
        return (React.createElement(overlay_1.Overlay, { autoFocus: this.props.autoFocus, canEscapeKeyClose: this.props.canEscapeKeyClear, canOutsideClickClose: false, className: classes, enforceFocus: false, hasBackdrop: false, inline: this.props.inline, isOpen: this.state.toasts.length > 0, onClose: this.handleClose, transitionDuration: 350, transitionName: "pt-toast" }, this.state.toasts.map(this.renderToast, this)));
    };
    Toaster.prototype.validateProps = function (props) {
        if (props.position === position_1.Position.LEFT || props.position === position_1.Position.RIGHT) {
            console.warn(errors_1.TOASTER_WARN_LEFT_RIGHT);
        }
    };
    Toaster.prototype.renderToast = function (toast) {
        return React.createElement(toast_1.Toast, tslib_1.__assign({}, toast, { onDismiss: this.getDismissHandler(toast) }));
    };
    Toaster.prototype.createToastOptions = function (props, key) {
        if (key === void 0) { key = "toast-" + this.toastId++; }
        // clone the object before adding the key prop to avoid leaking the mutation
        return tslib_1.__assign({}, props, { key: key });
    };
    Toaster.prototype.getPositionClasses = function () {
        var positions = position_1.Position[this.props.position].split("_");
        // NOTE that there is no -center class because that's the default style
        return positions.map(function (p) { return Classes.TOAST_CONTAINER + "-" + p.toLowerCase(); });
    };
    return Toaster;
}(abstractComponent_1.AbstractComponent));
Toaster.defaultProps = {
    autoFocus: false,
    canEscapeKeyClear: true,
    inline: false,
    position: position_1.Position.TOP,
};
Toaster = Toaster_1 = tslib_1.__decorate([
    PureRender
], Toaster);
exports.Toaster = Toaster;
var Toaster_1;



/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(3);
var utils_1 = __webpack_require__(5);
var treeNode_1 = __webpack_require__(62);
var Tree = (function (_super) {
    tslib_1.__extends(Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeRefs = {};
        _this.handleNodeCollapse = function (node, e) {
            _this.handlerHelper(_this.props.onNodeCollapse, node, e);
        };
        _this.handleNodeClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeClick, node, e);
        };
        _this.handleContentRef = function (node, element) {
            if (element != null) {
                _this.nodeRefs[node.props.id] = element;
            }
            else {
                // don't want our object to get bloated with old keys
                delete _this.nodeRefs[node.props.id];
            }
        };
        _this.handleNodeContextMenu = function (node, e) {
            _this.handlerHelper(_this.props.onNodeContextMenu, node, e);
        };
        _this.handleNodeDoubleClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeDoubleClick, node, e);
        };
        _this.handleNodeExpand = function (node, e) {
            _this.handlerHelper(_this.props.onNodeExpand, node, e);
        };
        return _this;
    }
    Tree.nodeFromPath = function (path, treeNodes) {
        if (path.length === 1) {
            return treeNodes[path[0]];
        }
        else {
            return Tree.nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes);
        }
    };
    Tree.prototype.render = function () {
        return (React.createElement("div", { className: classNames(Classes.TREE, this.props.className) }, this.renderNodes(this.props.contents, [], Classes.TREE_ROOT)));
    };
    /**
     * Returns the underlying HTML element of the `Tree` node with an id of `nodeId`.
     * This element does not contain the children of the node, only its label and controls.
     * If the node is not currently mounted, `undefined` is returned.
     */
    Tree.prototype.getNodeContentElement = function (nodeId) {
        return this.nodeRefs[nodeId];
    };
    Tree.prototype.renderNodes = function (treeNodes, currentPath, className) {
        var _this = this;
        if (treeNodes == null) {
            return null;
        }
        var nodeItems = treeNodes.map(function (node, i) {
            var elementPath = currentPath.concat(i);
            return (React.createElement(treeNode_1.TreeNode, tslib_1.__assign({}, node, { key: node.id, contentRef: _this.handleContentRef, depth: elementPath.length - 1, onClick: _this.handleNodeClick, onContextMenu: _this.handleNodeContextMenu, onCollapse: _this.handleNodeCollapse, onDoubleClick: _this.handleNodeDoubleClick, onExpand: _this.handleNodeExpand, path: elementPath }), _this.renderNodes(node.childNodes, elementPath)));
        });
        return (React.createElement("ul", { className: classNames(Classes.TREE_NODE_LIST, className) }, nodeItems));
    };
    Tree.prototype.handlerHelper = function (handlerFromProps, node, e) {
        if (utils_1.isFunction(handlerFromProps)) {
            var nodeData = Tree.nodeFromPath(node.props.path, this.props.contents);
            handlerFromProps(nodeData, node.props.path, e);
        }
    };
    return Tree;
}(React.Component));
exports.Tree = Tree;
exports.TreeFactory = React.createFactory(Tree);



/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015-present Palantir Technologies, Inc. All rights reserved.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:object-literal-sort-keys
exports.IconClasses = {
    BLANK: "pt-icon-blank",
    STYLE: "pt-icon-style",
    ALIGN_LEFT: "pt-icon-align-left",
    ALIGN_CENTER: "pt-icon-align-center",
    ALIGN_RIGHT: "pt-icon-align-right",
    ALIGN_JUSTIFY: "pt-icon-align-justify",
    BOLD: "pt-icon-bold",
    ITALIC: "pt-icon-italic",
    UNDERLINE: "pt-icon-underline",
    SEARCH_AROUND: "pt-icon-search-around",
    GRAPH_REMOVE: "pt-icon-graph-remove",
    GROUP_OBJECTS: "pt-icon-group-objects",
    MERGE_LINKS: "pt-icon-merge-links",
    LAYOUT: "pt-icon-layout",
    LAYOUT_AUTO: "pt-icon-layout-auto",
    LAYOUT_CIRCLE: "pt-icon-layout-circle",
    LAYOUT_HIERARCHY: "pt-icon-layout-hierarchy",
    LAYOUT_GRID: "pt-icon-layout-grid",
    LAYOUT_GROUP_BY: "pt-icon-layout-group-by",
    LAYOUT_SKEW_GRID: "pt-icon-layout-skew-grid",
    GEOSEARCH: "pt-icon-geosearch",
    HEATMAP: "pt-icon-heatmap",
    DRIVE_TIME: "pt-icon-drive-time",
    SELECT: "pt-icon-select",
    PREDICTIVE_ANALYSIS: "pt-icon-predictive-analysis",
    LAYERS: "pt-icon-layers",
    LOCATE: "pt-icon-locate",
    BOOKMARK: "pt-icon-bookmark",
    CITATION: "pt-icon-citation",
    TAG: "pt-icon-tag",
    CLIPBOARD: "pt-icon-clipboard",
    SELECTION: "pt-icon-selection",
    TIMELINE_EVENTS: "pt-icon-timeline-events",
    TIMELINE_LINE_CHART: "pt-icon-timeline-line-chart",
    TIMELINE_BAR_CHART: "pt-icon-timeline-bar-chart",
    APPLICATIONS: "pt-icon-applications",
    PROJECTS: "pt-icon-projects",
    CHANGES: "pt-icon-changes",
    NOTIFICATIONS: "pt-icon-notifications",
    LOCK: "pt-icon-lock",
    UNLOCK: "pt-icon-unlock",
    USER: "pt-icon-user",
    SEARCH_TEMPLATE: "pt-icon-search-template",
    INBOX: "pt-icon-inbox",
    MORE: "pt-icon-more",
    HELP: "pt-icon-help",
    CALENDAR: "pt-icon-calendar",
    MEDIA: "pt-icon-media",
    LINK: "pt-icon-link",
    SHARE: "pt-icon-share",
    DOWNLOAD: "pt-icon-download",
    DOCUMENT: "pt-icon-document",
    PROPERTIES: "pt-icon-properties",
    IMPORT: "pt-icon-import",
    EXPORT: "pt-icon-export",
    MINIMIZE: "pt-icon-minimize",
    MAXIMIZE: "pt-icon-maximize",
    TICK: "pt-icon-tick",
    CROSS: "pt-icon-cross",
    PLUS: "pt-icon-plus",
    MINUS: "pt-icon-minus",
    ARROW_LEFT: "pt-icon-arrow-left",
    ARROW_RIGHT: "pt-icon-arrow-right",
    EXCHANGE: "pt-icon-exchange",
    COMPARISON: "pt-icon-comparison",
    LIST: "pt-icon-list",
    FILTER: "pt-icon-filter",
    CONFIRM: "pt-icon-confirm",
    FORK: "pt-icon-fork",
    TRASH: "pt-icon-trash",
    PERSON: "pt-icon-person",
    PEOPLE: "pt-icon-people",
    ADD: "pt-icon-add",
    REMOVE: "pt-icon-remove",
    GEOLOCATION: "pt-icon-geolocation",
    ZOOM_IN: "pt-icon-zoom-in",
    ZOOM_OUT: "pt-icon-zoom-out",
    REFRESH: "pt-icon-refresh",
    DELETE: "pt-icon-delete",
    COG: "pt-icon-cog",
    FLAG: "pt-icon-flag",
    PIN: "pt-icon-pin",
    WARNING_SIGN: "pt-icon-warning-sign",
    ERROR: "pt-icon-error",
    INFO_SIGN: "pt-icon-info-sign",
    CREDIT_CARD: "pt-icon-credit-card",
    EDIT: "pt-icon-edit",
    HISTORY: "pt-icon-history",
    SEARCH: "pt-icon-search",
    LOG_OUT: "pt-icon-log-out",
    STAR: "pt-icon-star",
    STAR_EMPTY: "pt-icon-star-empty",
    SORT_ALPHABETICAL: "pt-icon-sort-alphabetical",
    SORT_NUMERICAL: "pt-icon-sort-numerical",
    SORT: "pt-icon-sort",
    FOLDER_OPEN: "pt-icon-folder-open",
    FOLDER_CLOSE: "pt-icon-folder-close",
    FOLDER_SHARED: "pt-icon-folder-shared",
    CARET_UP: "pt-icon-caret-up",
    CARET_RIGHT: "pt-icon-caret-right",
    CARET_DOWN: "pt-icon-caret-down",
    CARET_LEFT: "pt-icon-caret-left",
    MENU_OPEN: "pt-icon-menu-open",
    MENU_CLOSED: "pt-icon-menu-closed",
    FEED: "pt-icon-feed",
    TWO_COLUMNS: "pt-icon-two-columns",
    ONE_COLUMN: "pt-icon-one-column",
    DOT: "pt-icon-dot",
    PROPERTY: "pt-icon-property",
    TIME: "pt-icon-time",
    DISABLE: "pt-icon-disable",
    UNPIN: "pt-icon-unpin",
    FLOWS: "pt-icon-flows",
    NEW_TEXT_BOX: "pt-icon-new-text-box",
    NEW_LINK: "pt-icon-new-link",
    NEW_OBJECT: "pt-icon-new-object",
    PATH_SEARCH: "pt-icon-path-search",
    AUTOMATIC_UPDATES: "pt-icon-automatic-updates",
    PAGE_LAYOUT: "pt-icon-page-layout",
    CODE: "pt-icon-code",
    MAP: "pt-icon-map",
    SEARCH_TEXT: "pt-icon-search-text",
    ENVELOPE: "pt-icon-envelope",
    PAPERCLIP: "pt-icon-paperclip",
    LABEL: "pt-icon-label",
    GLOBE: "pt-icon-globe",
    HOME: "pt-icon-home",
    TH: "pt-icon-th",
    TH_LIST: "pt-icon-th-list",
    TH_DERIVED: "pt-icon-th-derived",
    CIRCLE: "pt-icon-circle",
    DRAW: "pt-icon-draw",
    INSERT: "pt-icon-insert",
    HELPER_MANAGEMENT: "pt-icon-helper-management",
    SEND_TO: "pt-icon-send-to",
    EYE_OPEN: "pt-icon-eye-open",
    FOLDER_SHARED_OPEN: "pt-icon-folder-shared-open",
    SOCIAL_MEDIA: "pt-icon-social-media",
    ARROW_UP: "pt-icon-arrow-up",
    ARROW_DOWN: "pt-icon-arrow-down",
    ARROWS_HORIZONTAL: "pt-icon-arrows-horizontal",
    ARROWS_VERTICAL: "pt-icon-arrows-vertical",
    RESOLVE: "pt-icon-resolve",
    GRAPH: "pt-icon-graph",
    BRIEFCASE: "pt-icon-briefcase",
    DOLLAR: "pt-icon-dollar",
    NINJA: "pt-icon-ninja",
    DELTA: "pt-icon-delta",
    BARCODE: "pt-icon-barcode",
    TORCH: "pt-icon-torch",
    WIDGET: "pt-icon-widget",
    UNRESOLVE: "pt-icon-unresolve",
    OFFLINE: "pt-icon-offline",
    ZOOM_TO_FIT: "pt-icon-zoom-to-fit",
    ADD_TO_ARTIFACT: "pt-icon-add-to-artifact",
    MAP_MARKER: "pt-icon-map-marker",
    CHART: "pt-icon-chart",
    CONTROL: "pt-icon-control",
    MULTI_SELECT: "pt-icon-multi-select",
    DIRECTION_LEFT: "pt-icon-direction-left",
    DIRECTION_RIGHT: "pt-icon-direction-right",
    DATABASE: "pt-icon-database",
    PIE_CHART: "pt-icon-pie-chart",
    FULL_CIRCLE: "pt-icon-full-circle",
    SQUARE: "pt-icon-square",
    PRINT: "pt-icon-print",
    PRESENTATION: "pt-icon-presentation",
    UNGROUP_OBJECTS: "pt-icon-ungroup-objects",
    CHAT: "pt-icon-chat",
    COMMENT: "pt-icon-comment",
    CIRCLE_ARROW_RIGHT: "pt-icon-circle-arrow-right",
    CIRCLE_ARROW_LEFT: "pt-icon-circle-arrow-left",
    CIRCLE_ARROW_UP: "pt-icon-circle-arrow-up",
    CIRCLE_ARROW_DOWN: "pt-icon-circle-arrow-down",
    UPLOAD: "pt-icon-upload",
    ASTERISK: "pt-icon-asterisk",
    CLOUD: "pt-icon-cloud",
    CLOUD_DOWNLOAD: "pt-icon-cloud-download",
    CLOUD_UPLOAD: "pt-icon-cloud-upload",
    REPEAT: "pt-icon-repeat",
    MOVE: "pt-icon-move",
    CHEVRON_LEFT: "pt-icon-chevron-left",
    CHEVRON_RIGHT: "pt-icon-chevron-right",
    CHEVRON_UP: "pt-icon-chevron-up",
    CHEVRON_DOWN: "pt-icon-chevron-down",
    RANDOM: "pt-icon-random",
    FULLSCREEN: "pt-icon-fullscreen",
    LOG_IN: "pt-icon-log-in",
    HEART: "pt-icon-heart",
    OFFICE: "pt-icon-office",
    DUPLICATE: "pt-icon-duplicate",
    BAN_CIRCLE: "pt-icon-ban-circle",
    CAMERA: "pt-icon-camera",
    MOBILE_VIDEO: "pt-icon-mobile-video",
    VIDEO: "pt-icon-video",
    FILM: "pt-icon-film",
    SETTINGS: "pt-icon-settings",
    VOLUME_OFF: "pt-icon-volume-off",
    VOLUME_DOWN: "pt-icon-volume-down",
    VOLUME_UP: "pt-icon-volume-up",
    MUSIC: "pt-icon-music",
    STEP_BACKWARD: "pt-icon-step-backward",
    FAST_BACKWARD: "pt-icon-fast-backward",
    PAUSE: "pt-icon-pause",
    STOP: "pt-icon-stop",
    PLAY: "pt-icon-play",
    FAST_FORWARD: "pt-icon-fast-forward",
    STEP_FORWARD: "pt-icon-step-forward",
    EJECT: "pt-icon-eject",
    RECORD: "pt-icon-record",
    DESKTOP: "pt-icon-desktop",
    PHONE: "pt-icon-phone",
    LIGHTBULB: "pt-icon-lightbulb",
    GLASS: "pt-icon-glass",
    TINT: "pt-icon-tint",
    FLASH: "pt-icon-flash",
    FONT: "pt-icon-font",
    HEADER: "pt-icon-header",
    SAVED: "pt-icon-saved",
    FLOPPY_DISK: "pt-icon-floppy-disk",
    BOOK: "pt-icon-book",
    HAND_RIGHT: "pt-icon-hand-right",
    HAND_UP: "pt-icon-hand-up",
    HAND_DOWN: "pt-icon-hand-down",
    HAND_LEFT: "pt-icon-hand-left",
    THUMBS_UP: "pt-icon-thumbs-up",
    THUMBS_DOWN: "pt-icon-thumbs-down",
    BOX: "pt-icon-box",
    COMPRESSED: "pt-icon-compressed",
    SHOPPING_CART: "pt-icon-shopping-cart",
    SHOP: "pt-icon-shop",
    LAYOUT_LINEAR: "pt-icon-layout-linear",
    UNDO: "pt-icon-undo",
    REDO: "pt-icon-redo",
    CODE_BLOCK: "pt-icon-code-block",
    DOUBLE_CARET_VERTICAL: "pt-icon-double-caret-vertical",
    DOUBLE_CARET_HORIZONTAL: "pt-icon-double-caret-horizontal",
    SORT_ALPHABETICAL_DESC: "pt-icon-sort-alphabetical-desc",
    SORT_NUMERICAL_DESC: "pt-icon-sort-numerical-desc",
    TAKE_ACTION: "pt-icon-take-action",
    CONTRAST: "pt-icon-contrast",
    EYE_OFF: "pt-icon-eye-off",
    TIMELINE_AREA_CHART: "pt-icon-timeline-area-chart",
    DOUGHNUT_CHART: "pt-icon-doughnut-chart",
    LAYER: "pt-icon-layer",
    GRID: "pt-icon-grid",
    POLYGON_FILTER: "pt-icon-polygon-filter",
    ADD_TO_FOLDER: "pt-icon-add-to-folder",
    LAYOUT_BALLOON: "pt-icon-layout-balloon",
    LAYOUT_SORTED_CLUSTERS: "pt-icon-layout-sorted-clusters",
    SORT_ASC: "pt-icon-sort-asc",
    SORT_DESC: "pt-icon-sort-desc",
    SMALL_CROSS: "pt-icon-small-cross",
    SMALL_TICK: "pt-icon-small-tick",
    POWER: "pt-icon-power",
    COLUMN_LAYOUT: "pt-icon-column-layout",
    ARROW_TOP_LEFT: "pt-icon-arrow-top-left",
    ARROW_TOP_RIGHT: "pt-icon-arrow-top-right",
    ARROW_BOTTOM_RIGHT: "pt-icon-arrow-bottom-right",
    ARROW_BOTTOM_LEFT: "pt-icon-arrow-bottom-left",
    MUGSHOT: "pt-icon-mugshot",
    HEADSET: "pt-icon-headset",
    TEXT_HIGHLIGHT: "pt-icon-text-highlight",
    HAND: "pt-icon-hand",
    CHEVRON_BACKWARD: "pt-icon-chevron-backward",
    CHEVRON_FORWARD: "pt-icon-chevron-forward",
    ROTATE_DOCUMENT: "pt-icon-rotate-document",
    ROTATE_PAGE: "pt-icon-rotate-page",
    BADGE: "pt-icon-badge",
    GRID_VIEW: "pt-icon-grid-view",
    FUNCTION: "pt-icon-function",
    WATERFALL_CHART: "pt-icon-waterfall-chart",
    STACKED_CHART: "pt-icon-stacked-chart",
    PULSE: "pt-icon-pulse",
    NEW_PERSON: "pt-icon-new-person",
    EXCLUDE_ROW: "pt-icon-exclude-row",
    PIVOT_TABLE: "pt-icon-pivot-table",
    SEGMENTED_CONTROL: "pt-icon-segmented-control",
    HIGHLIGHT: "pt-icon-highlight",
    FILTER_LIST: "pt-icon-filter-list",
    CUT: "pt-icon-cut",
    ANNOTATION: "pt-icon-annotation",
    PIVOT: "pt-icon-pivot",
    RING: "pt-icon-ring",
    HEAT_GRID: "pt-icon-heat-grid",
    GANTT_CHART: "pt-icon-gantt-chart",
    VARIABLE: "pt-icon-variable",
    MANUAL: "pt-icon-manual",
    ADD_ROW_TOP: "pt-icon-add-row-top",
    ADD_ROW_BOTTOM: "pt-icon-add-row-bottom",
    ADD_COLUMN_LEFT: "pt-icon-add-column-left",
    ADD_COLUMN_RIGHT: "pt-icon-add-column-right",
    REMOVE_ROW_TOP: "pt-icon-remove-row-top",
    REMOVE_ROW_BOTTOM: "pt-icon-remove-row-bottom",
    REMOVE_COLUMN_LEFT: "pt-icon-remove-column-left",
    REMOVE_COLUMN_RIGHT: "pt-icon-remove-column-right",
    DOUBLE_CHEVRON_LEFT: "pt-icon-double-chevron-left",
    DOUBLE_CHEVRON_RIGHT: "pt-icon-double-chevron-right",
    DOUBLE_CHEVRON_UP: "pt-icon-double-chevron-up",
    DOUBLE_CHEVRON_DOWN: "pt-icon-double-chevron-down",
    KEY_CONTROL: "pt-icon-key-control",
    KEY_COMMAND: "pt-icon-key-command",
    KEY_SHIFT: "pt-icon-key-shift",
    KEY_BACKSPACE: "pt-icon-key-backspace",
    KEY_DELETE: "pt-icon-key-delete",
    KEY_ESCAPE: "pt-icon-key-escape",
    KEY_ENTER: "pt-icon-key-enter",
    CALCULATOR: "pt-icon-calculator",
    HORIZONTAL_BAR_CHART: "pt-icon-horizontal-bar-chart",
    SMALL_PLUS: "pt-icon-small-plus",
    SMALL_MINUS: "pt-icon-small-minus",
    STEP_CHART: "pt-icon-step-chart",
    EURO: "pt-icon-euro",
    DRAG_HANDLE_VERTICAL: "pt-icon-drag-handle-vertical",
    DRAG_HANDLE_HORIZONTAL: "pt-icon-drag-handle-horizontal",
    MOBILE_PHONE: "pt-icon-mobile-phone",
    SIM_CARD: "pt-icon-sim-card",
    TRENDING_UP: "pt-icon-trending-up",
    TRENDING_DOWN: "pt-icon-trending-down",
    CURVED_RANGE_CHART: "pt-icon-curved-range-chart",
    VERTICAL_BAR_CHART_DESC: "pt-icon-vertical-bar-chart-desc",
    HORIZONTAL_BAR_CHART_DESC: "pt-icon-horizontal-bar-chart-desc",
    DOCUMENT_OPEN: "pt-icon-document-open",
    DOCUMENT_SHARE: "pt-icon-document-share",
    HORIZONTAL_DISTRIBUTION: "pt-icon-horizontal-distribution",
    VERTICAL_DISTRIBUTION: "pt-icon-vertical-distribution",
    ALIGNMENT_LEFT: "pt-icon-alignment-left",
    ALIGNMENT_VERTICAL_CENTER: "pt-icon-alignment-vertical-center",
    ALIGNMENT_RIGHT: "pt-icon-alignment-right",
    ALIGNMENT_TOP: "pt-icon-alignment-top",
    ALIGNMENT_HORIZONTAL_CENTER: "pt-icon-alignment-horizontal-center",
    ALIGNMENT_BOTTOM: "pt-icon-alignment-bottom",
    GIT_PULL: "pt-icon-git-pull",
    GIT_MERGE: "pt-icon-git-merge",
    GIT_BRANCH: "pt-icon-git-branch",
    GIT_COMMIT: "pt-icon-git-commit",
    GIT_PUSH: "pt-icon-git-push",
    BUILD: "pt-icon-build",
    SYMBOL_CIRCLE: "pt-icon-symbol-circle",
    SYMBOL_SQUARE: "pt-icon-symbol-square",
    SYMBOL_DIAMOND: "pt-icon-symbol-diamond",
    SYMBOL_CROSS: "pt-icon-symbol-cross",
    SYMBOL_TRIANGLE_UP: "pt-icon-symbol-triangle-up",
    SYMBOL_TRIANGLE_DOWN: "pt-icon-symbol-triangle-down",
    WRENCH: "pt-icon-wrench",
    APPLICATION: "pt-icon-application",
    SEND_TO_GRAPH: "pt-icon-send-to-graph",
    SEND_TO_MAP: "pt-icon-send-to-map",
    JOIN_TABLE: "pt-icon-join-table",
    DERIVE_COLUMN: "pt-icon-derive-column",
    IMAGE_ROTATE_LEFT: "pt-icon-image-rotate-left",
    IMAGE_ROTATE_RIGHT: "pt-icon-image-rotate-right",
    KNOWN_VEHICLE: "pt-icon-known-vehicle",
    UNKNOWN_VEHICLE: "pt-icon-unknown-vehicle",
    SCATTER_PLOT: "pt-icon-scatter-plot",
    OIL_FIELD: "pt-icon-oil-field",
    RIG: "pt-icon-rig",
    MAP_CREATE: "pt-icon-map-create",
    KEY_OPTION: "pt-icon-key-option",
    LIST_DETAIL_VIEW: "pt-icon-list-detail-view",
    SWAP_VERTICAL: "pt-icon-swap-vertical",
    SWAP_HORIZONTAL: "pt-icon-swap-horizontal",
    NUMBERED_LIST: "pt-icon-numbered-list",
    NEW_GRID_ITEM: "pt-icon-new-grid-item",
    GIT_REPO: "pt-icon-git-repo",
    GIT_NEW_BRANCH: "pt-icon-git-new-branch",
    MANUALLY_ENTERED_DATA: "pt-icon-manually-entered-data",
    AIRPLANE: "pt-icon-airplane",
    MERGE_COLUMNS: "pt-icon-merge-columns",
    SPLIT_COLUMNS: "pt-icon-split-columns",
    DASHBOARD: "pt-icon-dashboard",
    PUBLISH_FUNCTION: "pt-icon-publish-function",
    PATH: "pt-icon-path",
    MOON: "pt-icon-moon",
    REMOVE_COLUMN: "pt-icon-remove-column",
    NUMERICAL: "pt-icon-numerical",
    KEY_TAB: "pt-icon-key-tab",
    REGRESSION_CHART: "pt-icon-regression-chart",
    TRANSLATE: "pt-icon-translate",
    EYE_ON: "pt-icon-eye-on",
    VERTICAL_BAR_CHART_ASC: "pt-icon-vertical-bar-chart-asc",
    HORIZONTAL_BAR_CHART_ASC: "pt-icon-horizontal-bar-chart-asc",
    GROUPED_BAR_CHART: "pt-icon-grouped-bar-chart",
    FULL_STACKED_CHART: "pt-icon-full-stacked-chart",
    ENDORSED: "pt-icon-endorsed",
    FOLLOWER: "pt-icon-follower",
    FOLLOWING: "pt-icon-following",
    MENU: "pt-icon-menu",
    COLLAPSE_ALL: "pt-icon-collapse-all",
    EXPAND_ALL: "pt-icon-expand-all",
    INTERSECTION: "pt-icon-intersection",
    BLOCKED_PERSON: "pt-icon-blocked-person",
    SLASH: "pt-icon-slash",
    PERCENTAGE: "pt-icon-percentage",
    SATELLITE: "pt-icon-satellite",
    PARAGRAPH: "pt-icon-paragraph",
    BANL_ACCOUNT: "pt-icon-banl-account",
    CELL_TOWER: "pt-icon-cell-tower",
    ID_NUMBER: "pt-icon-id-number",
    IP_ADDRESS: "pt-icon-ip-address",
    ERASER: "pt-icon-eraser",
    ISSUE: "pt-icon-issue",
    ISSUE_NEW: "pt-icon-issue-new",
    ISSUE_CLOSED: "pt-icon-issue-closed",
    PANEL_STATS: "pt-icon-panel-stats",
    PANEL_TABLE: "pt-icon-panel-table",
    TICK_CIRCLE: "pt-icon-tick-circle",
    PRESCRIPTION: "pt-icon-prescription",
    NEW_PRESCRIPTION: "pt-icon-new-prescription",
};



/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015-present Palantir Technologies, Inc. All rights reserved.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:object-literal-sort-keys
exports.IconContents = {
    BLANK: "\ue900",
    STYLE: "\ue601",
    ALIGN_LEFT: "\ue602",
    ALIGN_CENTER: "\ue603",
    ALIGN_RIGHT: "\ue604",
    ALIGN_JUSTIFY: "\ue605",
    BOLD: "\ue606",
    ITALIC: "\ue607",
    UNDERLINE: "\u2381",
    SEARCH_AROUND: "\ue608",
    GRAPH_REMOVE: "\ue609",
    GROUP_OBJECTS: "\ue60a",
    MERGE_LINKS: "\ue60b",
    LAYOUT: "\ue60c",
    LAYOUT_AUTO: "\ue60d",
    LAYOUT_CIRCLE: "\ue60e",
    LAYOUT_HIERARCHY: "\ue60f",
    LAYOUT_GRID: "\ue610",
    LAYOUT_GROUP_BY: "\ue611",
    LAYOUT_SKEW_GRID: "\ue612",
    GEOSEARCH: "\ue613",
    HEATMAP: "\ue614",
    DRIVE_TIME: "\ue615",
    SELECT: "\ue616",
    PREDICTIVE_ANALYSIS: "\ue617",
    LAYERS: "\ue618",
    LOCATE: "\ue619",
    BOOKMARK: "\ue61a",
    CITATION: "\ue61b",
    TAG: "\ue61c",
    CLIPBOARD: "\ue61d",
    SELECTION: "\u29bf",
    TIMELINE_EVENTS: "\ue61e",
    TIMELINE_LINE_CHART: "\ue61f",
    TIMELINE_BAR_CHART: "\ue620",
    APPLICATIONS: "\ue621",
    PROJECTS: "\ue622",
    CHANGES: "\ue623",
    NOTIFICATIONS: "\ue624",
    LOCK: "\ue625",
    UNLOCK: "\ue626",
    USER: "\ue627",
    SEARCH_TEMPLATE: "\ue628",
    INBOX: "\ue629",
    MORE: "\ue62a",
    HELP: "\u003F",
    CALENDAR: "\ue62b",
    MEDIA: "\ue62c",
    LINK: "\ue62d",
    SHARE: "\ue62e",
    DOWNLOAD: "\ue62f",
    DOCUMENT: "\ue630",
    PROPERTIES: "\ue631",
    IMPORT: "\ue632",
    EXPORT: "\ue633",
    MINIMIZE: "\ue634",
    MAXIMIZE: "\ue635",
    TICK: "\u2713",
    CROSS: "\u2717",
    PLUS: "\u002b",
    MINUS: "\u2212",
    ARROW_LEFT: "\u2190",
    ARROW_RIGHT: "\u2192",
    EXCHANGE: "\ue636",
    COMPARISON: "\ue637",
    LIST: "\u2630",
    FILTER: "\ue638",
    CONFIRM: "\ue639",
    FORK: "\ue63a",
    TRASH: "\ue63b",
    PERSON: "\ue63c",
    PEOPLE: "\ue63d",
    ADD: "\ue63e",
    REMOVE: "\ue63f",
    GEOLOCATION: "\ue640",
    ZOOM_IN: "\ue641",
    ZOOM_OUT: "\ue642",
    REFRESH: "\ue643",
    DELETE: "\ue644",
    COG: "\ue645",
    FLAG: "\u2691",
    PIN: "\ue646",
    WARNING_SIGN: "\ue647",
    ERROR: "\ue648",
    INFO_SIGN: "\u2139",
    CREDIT_CARD: "\ue649",
    EDIT: "\u270E",
    HISTORY: "\ue64a",
    SEARCH: "\ue64b",
    LOG_OUT: "\ue64c",
    STAR: "\u2605",
    STAR_EMPTY: "\u2606",
    SORT_ALPHABETICAL: "\ue64d",
    SORT_NUMERICAL: "\ue64e",
    SORT: "\ue64f",
    FOLDER_OPEN: "\ue651",
    FOLDER_CLOSE: "\ue652",
    FOLDER_SHARED: "\ue653",
    CARET_UP: "\u2303",
    CARET_RIGHT: "\u232A",
    CARET_DOWN: "\u2304",
    CARET_LEFT: "\u2329",
    MENU_OPEN: "\ue654",
    MENU_CLOSED: "\ue655",
    FEED: "\ue656",
    TWO_COLUMNS: "\ue657",
    ONE_COLUMN: "\ue658",
    DOT: "\u2022",
    PROPERTY: "\ue65a",
    TIME: "\u23F2",
    DISABLE: "\ue600",
    UNPIN: "\ue650",
    FLOWS: "\ue659",
    NEW_TEXT_BOX: "\ue65b",
    NEW_LINK: "\ue65c",
    NEW_OBJECT: "\ue65d",
    PATH_SEARCH: "\ue65e",
    AUTOMATIC_UPDATES: "\ue65f",
    PAGE_LAYOUT: "\ue660",
    CODE: "\ue661",
    MAP: "\ue662",
    SEARCH_TEXT: "\ue663",
    ENVELOPE: "\u2709",
    PAPERCLIP: "\ue664",
    LABEL: "\ue665",
    GLOBE: "\ue666",
    HOME: "\u2302",
    TH: "\ue667",
    TH_LIST: "\ue668",
    TH_DERIVED: "\ue669",
    CIRCLE: "\ue66a",
    DRAW: "\ue66b",
    INSERT: "\ue66c",
    HELPER_MANAGEMENT: "\ue66d",
    SEND_TO: "\ue66e",
    EYE_OPEN: "\ue66f",
    FOLDER_SHARED_OPEN: "\ue670",
    SOCIAL_MEDIA: "\ue671",
    ARROW_UP: "\u2191 ",
    ARROW_DOWN: "\u2193 ",
    ARROWS_HORIZONTAL: "\u2194 ",
    ARROWS_VERTICAL: "\u2195 ",
    RESOLVE: "\ue672",
    GRAPH: "\ue673",
    BRIEFCASE: "\ue674",
    DOLLAR: "\u0024",
    NINJA: "\ue675",
    DELTA: "\u0394",
    BARCODE: "\ue676",
    TORCH: "\ue677",
    WIDGET: "\ue678",
    UNRESOLVE: "\ue679",
    OFFLINE: "\ue67a",
    ZOOM_TO_FIT: "\ue67b",
    ADD_TO_ARTIFACT: "\ue67c",
    MAP_MARKER: "\ue67d",
    CHART: "\ue67e",
    CONTROL: "\ue67f",
    MULTI_SELECT: "\ue680",
    DIRECTION_LEFT: "\ue681",
    DIRECTION_RIGHT: "\ue682",
    DATABASE: "\ue683",
    PIE_CHART: "\ue684",
    FULL_CIRCLE: "\ue685",
    SQUARE: "\ue686",
    PRINT: "\u2399",
    PRESENTATION: "\ue687",
    UNGROUP_OBJECTS: "\ue688",
    CHAT: "\ue689",
    COMMENT: "\ue68a",
    CIRCLE_ARROW_RIGHT: "\ue68b",
    CIRCLE_ARROW_LEFT: "\ue68c",
    CIRCLE_ARROW_UP: "\ue68d",
    CIRCLE_ARROW_DOWN: "\ue68e",
    UPLOAD: "\ue68f",
    ASTERISK: "\u002a",
    CLOUD: "\u2601",
    CLOUD_DOWNLOAD: "\ue690",
    CLOUD_UPLOAD: "\ue691",
    REPEAT: "\ue692",
    MOVE: "\ue693",
    CHEVRON_LEFT: "\ue694",
    CHEVRON_RIGHT: "\ue695",
    CHEVRON_UP: "\ue696",
    CHEVRON_DOWN: "\ue697",
    RANDOM: "\ue698",
    FULLSCREEN: "\ue699",
    LOG_IN: "\ue69a",
    HEART: "\u2665",
    OFFICE: "\ue69b",
    DUPLICATE: "\ue69c",
    BAN_CIRCLE: "\ue69d",
    CAMERA: "\ue69e",
    MOBILE_VIDEO: "\ue69f",
    VIDEO: "\ue6a0",
    FILM: "\ue6a1",
    SETTINGS: "\ue6a2",
    VOLUME_OFF: "\ue6a3",
    VOLUME_DOWN: "\ue6a4",
    VOLUME_UP: "\ue6a5",
    MUSIC: "\ue6a6",
    STEP_BACKWARD: "\ue6a7",
    FAST_BACKWARD: "\ue6a8",
    PAUSE: "\ue6a9",
    STOP: "\ue6aa",
    PLAY: "\ue6ab",
    FAST_FORWARD: "\ue6ac",
    STEP_FORWARD: "\ue6ad",
    EJECT: "\u23cf",
    RECORD: "\ue6ae",
    DESKTOP: "\ue6af",
    PHONE: "\u260e",
    LIGHTBULB: "\ue6b0",
    GLASS: "\ue6b1",
    TINT: "\ue6b2",
    FLASH: "\ue6b3",
    FONT: "\ue6b4",
    HEADER: "\ue6b5",
    SAVED: "\ue6b6",
    FLOPPY_DISK: "\ue6b7",
    BOOK: "\ue6b8",
    HAND_RIGHT: "\ue6b9",
    HAND_UP: "\ue6ba",
    HAND_DOWN: "\ue6bb",
    HAND_LEFT: "\ue6bc",
    THUMBS_UP: "\ue6bd",
    THUMBS_DOWN: "\ue6be",
    BOX: "\ue6bf",
    COMPRESSED: "\ue6c0",
    SHOPPING_CART: "\ue6c1",
    SHOP: "\ue6c2",
    LAYOUT_LINEAR: "\ue6c3",
    UNDO: "\u238c",
    REDO: "\ue6c4",
    CODE_BLOCK: "\ue6c5",
    DOUBLE_CARET_VERTICAL: "\ue6c6",
    DOUBLE_CARET_HORIZONTAL: "\ue6c7",
    SORT_ALPHABETICAL_DESC: "\ue6c8",
    SORT_NUMERICAL_DESC: "\ue6c9",
    TAKE_ACTION: "\ue6ca",
    CONTRAST: "\ue6cb",
    EYE_OFF: "\ue6cc",
    TIMELINE_AREA_CHART: "\ue6cd",
    DOUGHNUT_CHART: "\ue6ce",
    LAYER: "\ue6cf",
    GRID: "\ue6d0",
    POLYGON_FILTER: "\ue6d1",
    ADD_TO_FOLDER: "\ue6d2",
    LAYOUT_BALLOON: "\ue6d3",
    LAYOUT_SORTED_CLUSTERS: "\ue6d4",
    SORT_ASC: "\ue6d5",
    SORT_DESC: "\ue6d6",
    SMALL_CROSS: "\ue6d7",
    SMALL_TICK: "\ue6d8",
    POWER: "\ue6d9",
    COLUMN_LAYOUT: "\ue6da",
    ARROW_TOP_LEFT: "\u2196",
    ARROW_TOP_RIGHT: "\u2197",
    ARROW_BOTTOM_RIGHT: "\u2198",
    ARROW_BOTTOM_LEFT: "\u2199",
    MUGSHOT: "\ue6db",
    HEADSET: "\ue6dc",
    TEXT_HIGHLIGHT: "\ue6dd",
    HAND: "\ue6de",
    CHEVRON_BACKWARD: "\ue6df",
    CHEVRON_FORWARD: "\ue6e0",
    ROTATE_DOCUMENT: "\ue6e1",
    ROTATE_PAGE: "\ue6e2",
    BADGE: "\ue6e3",
    GRID_VIEW: "\ue6e4",
    FUNCTION: "\ue6e5",
    WATERFALL_CHART: "\ue6e6",
    STACKED_CHART: "\ue6e7",
    PULSE: "\ue6e8",
    NEW_PERSON: "\ue6e9",
    EXCLUDE_ROW: "\ue6ea",
    PIVOT_TABLE: "\ue6eb",
    SEGMENTED_CONTROL: "\ue6ec",
    HIGHLIGHT: "\ue6ed",
    FILTER_LIST: "\ue6ee",
    CUT: "\ue6ef",
    ANNOTATION: "\ue6f0",
    PIVOT: "\ue6f1",
    RING: "\ue6f2",
    HEAT_GRID: "\ue6f3",
    GANTT_CHART: "\ue6f4",
    VARIABLE: "\ue6f5",
    MANUAL: "\ue6f6",
    ADD_ROW_TOP: "\ue6f7",
    ADD_ROW_BOTTOM: "\ue6f8",
    ADD_COLUMN_LEFT: "\ue6f9",
    ADD_COLUMN_RIGHT: "\ue6fa",
    REMOVE_ROW_TOP: "\ue6fb",
    REMOVE_ROW_BOTTOM: "\ue6fc",
    REMOVE_COLUMN_LEFT: "\ue6fd",
    REMOVE_COLUMN_RIGHT: "\ue6fe",
    DOUBLE_CHEVRON_LEFT: "\ue6ff",
    DOUBLE_CHEVRON_RIGHT: "\ue701",
    DOUBLE_CHEVRON_UP: "\ue702",
    DOUBLE_CHEVRON_DOWN: "\ue703",
    KEY_CONTROL: "\ue704",
    KEY_COMMAND: "\ue705",
    KEY_SHIFT: "\ue706",
    KEY_BACKSPACE: "\ue707",
    KEY_DELETE: "\ue708",
    KEY_ESCAPE: "\ue709",
    KEY_ENTER: "\ue70a",
    CALCULATOR: "\ue70b",
    HORIZONTAL_BAR_CHART: "\ue70c",
    SMALL_PLUS: "\ue70d",
    SMALL_MINUS: "\ue70e",
    STEP_CHART: "\ue70f",
    EURO: "\u20ac",
    DRAG_HANDLE_VERTICAL: "\ue715",
    DRAG_HANDLE_HORIZONTAL: "\ue716",
    MOBILE_PHONE: "\ue717",
    SIM_CARD: "\ue718",
    TRENDING_UP: "\ue719",
    TRENDING_DOWN: "\ue71a",
    CURVED_RANGE_CHART: "\ue71b",
    VERTICAL_BAR_CHART_DESC: "\ue71c",
    HORIZONTAL_BAR_CHART_DESC: "\ue71d",
    DOCUMENT_OPEN: "\ue71e",
    DOCUMENT_SHARE: "\ue71f",
    HORIZONTAL_DISTRIBUTION: "\ue720",
    VERTICAL_DISTRIBUTION: "\ue721",
    ALIGNMENT_LEFT: "\ue722",
    ALIGNMENT_VERTICAL_CENTER: "\ue723",
    ALIGNMENT_RIGHT: "\ue724",
    ALIGNMENT_TOP: "\ue725",
    ALIGNMENT_HORIZONTAL_CENTER: "\ue726",
    ALIGNMENT_BOTTOM: "\ue727",
    GIT_PULL: "\ue728",
    GIT_MERGE: "\ue729",
    GIT_BRANCH: "\ue72a",
    GIT_COMMIT: "\ue72b",
    GIT_PUSH: "\ue72c",
    BUILD: "\ue72d",
    SYMBOL_CIRCLE: "\ue72e",
    SYMBOL_SQUARE: "\ue72f",
    SYMBOL_DIAMOND: "\ue730",
    SYMBOL_CROSS: "\ue731",
    SYMBOL_TRIANGLE_UP: "\ue732",
    SYMBOL_TRIANGLE_DOWN: "\ue733",
    WRENCH: "\ue734",
    APPLICATION: "\ue735",
    SEND_TO_GRAPH: "\ue736",
    SEND_TO_MAP: "\ue737",
    JOIN_TABLE: "\ue738",
    DERIVE_COLUMN: "\ue739",
    IMAGE_ROTATE_LEFT: "\ue73a",
    IMAGE_ROTATE_RIGHT: "\ue73b",
    KNOWN_VEHICLE: "\ue73c",
    UNKNOWN_VEHICLE: "\ue73d",
    SCATTER_PLOT: "\ue73e",
    OIL_FIELD: "\ue73f",
    RIG: "\ue740",
    MAP_CREATE: "\ue741",
    KEY_OPTION: "\ue742",
    LIST_DETAIL_VIEW: "\ue743",
    SWAP_VERTICAL: "\ue744",
    SWAP_HORIZONTAL: "\ue745",
    NUMBERED_LIST: "\ue746",
    NEW_GRID_ITEM: "\ue747",
    GIT_REPO: "\ue748",
    GIT_NEW_BRANCH: "\ue749",
    MANUALLY_ENTERED_DATA: "\ue74a",
    AIRPLANE: "\ue74b",
    MERGE_COLUMNS: "\ue74f",
    SPLIT_COLUMNS: "\ue750",
    DASHBOARD: "\ue751",
    PUBLISH_FUNCTION: "\ue752",
    PATH: "\ue753",
    MOON: "\ue754",
    REMOVE_COLUMN: "\ue755",
    NUMERICAL: "\ue756",
    KEY_TAB: "\ue757",
    REGRESSION_CHART: "\ue758",
    TRANSLATE: "\ue759",
    EYE_ON: "\ue75a",
    VERTICAL_BAR_CHART_ASC: "\ue75b",
    HORIZONTAL_BAR_CHART_ASC: "\ue75c",
    GROUPED_BAR_CHART: "\ue75d",
    FULL_STACKED_CHART: "\ue75e",
    ENDORSED: "\ue75f",
    FOLLOWER: "\ue760",
    FOLLOWING: "\ue761",
    MENU: "\ue762",
    COLLAPSE_ALL: "\ue763",
    EXPAND_ALL: "\ue764",
    INTERSECTION: "\ue765",
    BLOCKED_PERSON: "\ue768",
    SLASH: "\ue769",
    PERCENTAGE: "\ue76a",
    SATELLITE: "\ue76b",
    PARAGRAPH: "\ue76c",
    BANL_ACCOUNT: "\ue76f",
    CELL_TOWER: "\ue770",
    ID_NUMBER: "\ue771",
    IP_ADDRESS: "\ue772",
    ERASER: "\ue773",
    ISSUE: "\ue774",
    ISSUE_NEW: "\ue775",
    ISSUE_CLOSED: "\ue776",
    PANEL_STATS: "\ue777",
    PANEL_TABLE: "\ue778",
    TICK_CIRCLE: "\ue779",
    PRESCRIPTION: "\ue78a",
    NEW_PRESCRIPTION: "\ue78b",
};



/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(128);
var cell_1 = __webpack_require__(25);
exports.Cell = cell_1.Cell;
var editableCell_1 = __webpack_require__(130);
exports.EditableCell = editableCell_1.EditableCell;
var jsonFormat_1 = __webpack_require__(131);
exports.JSONFormat = jsonFormat_1.JSONFormat;
var truncatedFormat_1 = __webpack_require__(64);
exports.TruncatedPopoverMode = truncatedFormat_1.TruncatedPopoverMode;
exports.TruncatedFormat = truncatedFormat_1.TruncatedFormat;
var column_1 = __webpack_require__(65);
exports.Column = column_1.Column;
var index_1 = __webpack_require__(36);
exports.Clipboard = index_1.Clipboard;
exports.Grid = index_1.Grid;
exports.Rect = index_1.Rect;
exports.Utils = index_1.Utils;
var draggable_1 = __webpack_require__(19);
exports.Draggable = draggable_1.Draggable;
var menus_1 = __webpack_require__(67);
exports.CopyCellsMenuItem = menus_1.CopyCellsMenuItem;
var resizeHandle_1 = __webpack_require__(26);
exports.Orientation = resizeHandle_1.Orientation;
exports.ResizeHandle = resizeHandle_1.ResizeHandle;
var selectable_1 = __webpack_require__(38);
exports.DragSelectable = selectable_1.DragSelectable;
var columnHeaderCell_1 = __webpack_require__(39);
exports.ColumnHeaderCell = columnHeaderCell_1.ColumnHeaderCell;
exports.HorizontalCellDivider = columnHeaderCell_1.HorizontalCellDivider;
var rowHeaderCell_1 = __webpack_require__(70);
exports.RowHeaderCell = rowHeaderCell_1.RowHeaderCell;
var editableName_1 = __webpack_require__(135);
exports.EditableName = editableName_1.EditableName;
var regions_1 = __webpack_require__(11);
exports.ColumnLoadingOption = regions_1.ColumnLoadingOption;
exports.RegionCardinality = regions_1.RegionCardinality;
exports.Regions = regions_1.Regions;
exports.RowLoadingOption = regions_1.RowLoadingOption;
exports.SelectionModes = regions_1.SelectionModes;
exports.TableLoadingOption = regions_1.TableLoadingOption;
var table_1 = __webpack_require__(136);
exports.Table = table_1.Table;



/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  /*global define, module, exports */
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(this, function () {
  'use strict';

  var _apply = Function.call.bind(Function.apply);
  var _call = Function.call.bind(Function.call);
  var isArray = Array.isArray;
  var keys = Object.keys;

  var not = function notThunker(func) {
    return function notThunk() {
      return !_apply(func, this, arguments);
    };
  };
  var throwsError = function (func) {
    try {
      func();
      return false;
    } catch (e) {
      return true;
    }
  };
  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
    try {
      return func();
    } catch (e) {
      return false;
    }
  };

  var isCallableWithoutNew = not(throwsError);
  var arePropertyDescriptorsSupported = function () {
    // if Object.defineProperty exists but throws, it's IE 8
    return !throwsError(function () {
      Object.defineProperty({}, 'x', { get: function () {} });
    });
  };
  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
  var functionsHaveNames = (function foo() {}).name === 'foo'; // eslint-disable-line no-extra-parens

  var _forEach = Function.call.bind(Array.prototype.forEach);
  var _reduce = Function.call.bind(Array.prototype.reduce);
  var _filter = Function.call.bind(Array.prototype.filter);
  var _some = Function.call.bind(Array.prototype.some);

  var defineProperty = function (object, name, value, force) {
    if (!force && name in object) { return; }
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  // Define configurable, writable and non-enumerable props
  // if they don’t exist.
  var defineProperties = function (object, map, forceOverride) {
    _forEach(keys(map), function (name) {
      var method = map[name];
      defineProperty(object, name, method, !!forceOverride);
    });
  };

  var _toString = Function.call.bind(Object.prototype.toString);
  var isCallable =  false ? function IsCallableSlow(x) {
    // Some old browsers (IE, FF) say that typeof /abc/ === 'function'
    return typeof x === 'function' && _toString(x) === '[object Function]';
  } : function IsCallableFast(x) { return typeof x === 'function'; };

  var Value = {
    getter: function (object, name, getter) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        get: getter
      });
    },
    proxy: function (originalObject, key, targetObject) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
      Object.defineProperty(targetObject, key, {
        configurable: originalDescriptor.configurable,
        enumerable: originalDescriptor.enumerable,
        get: function getKey() { return originalObject[key]; },
        set: function setKey(value) { originalObject[key] = value; }
      });
    },
    redefine: function (object, property, newValue) {
      if (supportsDescriptors) {
        var descriptor = Object.getOwnPropertyDescriptor(object, property);
        descriptor.value = newValue;
        Object.defineProperty(object, property, descriptor);
      } else {
        object[property] = newValue;
      }
    },
    defineByDescriptor: function (object, property, descriptor) {
      if (supportsDescriptors) {
        Object.defineProperty(object, property, descriptor);
      } else if ('value' in descriptor) {
        object[property] = descriptor.value;
      }
    },
    preserveToString: function (target, source) {
      if (source && isCallable(source.toString)) {
        defineProperty(target, 'toString', source.toString.bind(source), true);
      }
    }
  };

  // Simple shim for Object.create on ES3 browsers
  // (unlike real shim, no attempt to support `prototype === null`)
  var create = Object.create || function (prototype, properties) {
    var Prototype = function Prototype() {};
    Prototype.prototype = prototype;
    var object = new Prototype();
    if (typeof properties !== 'undefined') {
      keys(properties).forEach(function (key) {
        Value.defineByDescriptor(object, key, properties[key]);
      });
    }
    return object;
  };

  var supportsSubclassing = function (C, f) {
    if (!Object.setPrototypeOf) { return false; /* skip test on IE < 11 */ }
    return valueOrFalseIfThrows(function () {
      var Sub = function Subclass(arg) {
        var o = new C(arg);
        Object.setPrototypeOf(o, Subclass.prototype);
        return o;
      };
      Object.setPrototypeOf(Sub, C);
      Sub.prototype = create(C.prototype, {
        constructor: { value: Sub }
      });
      return f(Sub);
    });
  };

  var getGlobal = function () {
    /* global self, window, global */
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
  };

  var globals = getGlobal();
  var globalIsFinite = globals.isFinite;
  var _indexOf = Function.call.bind(String.prototype.indexOf);
  var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
  var _concat = Function.call.bind(Array.prototype.concat);
  // var _sort = Function.call.bind(Array.prototype.sort);
  var _strSlice = Function.call.bind(String.prototype.slice);
  var _push = Function.call.bind(Array.prototype.push);
  var _pushApply = Function.apply.bind(Array.prototype.push);
  var _shift = Function.call.bind(Array.prototype.shift);
  var _max = Math.max;
  var _min = Math.min;
  var _floor = Math.floor;
  var _abs = Math.abs;
  var _exp = Math.exp;
  var _log = Math.log;
  var _sqrt = Math.sqrt;
  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
  var ArrayIterator; // make our implementation private
  var noop = function () {};

  var OrigMap = globals.Map;
  var origMapDelete = OrigMap && OrigMap.prototype['delete'];
  var origMapGet = OrigMap && OrigMap.prototype.get;
  var origMapHas = OrigMap && OrigMap.prototype.has;
  var origMapSet = OrigMap && OrigMap.prototype.set;

  var Symbol = globals.Symbol || {};
  var symbolSpecies = Symbol.species || '@@species';

  var numberIsNaN = Number.isNaN || function isNaN(value) {
    // NaN !== NaN, but they are identical.
    // NaNs are the only non-reflexive value, i.e., if x !== x,
    // then x is NaN.
    // isNaN is broken: it converts its argument to number, so
    // isNaN('foo') => true
    return value !== value;
  };
  var numberIsFinite = Number.isFinite || function isFinite(value) {
    return typeof value === 'number' && globalIsFinite(value);
  };
  var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {
    var number = Number(value);
    if (number === 0) { return number; }
    if (numberIsNaN(number)) { return number; }
    return number < 0 ? -1 : 1;
  };

  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
  // can be replaced with require('is-arguments') if we ever use a build process instead
  var isStandardArguments = function isArguments(value) {
    return _toString(value) === '[object Arguments]';
  };
  var isLegacyArguments = function isArguments(value) {
    return value !== null &&
      typeof value === 'object' &&
      typeof value.length === 'number' &&
      value.length >= 0 &&
      _toString(value) !== '[object Array]' &&
      _toString(value.callee) === '[object Function]';
  };
  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

  var Type = {
    primitive: function (x) { return x === null || (typeof x !== 'function' && typeof x !== 'object'); },
    string: function (x) { return _toString(x) === '[object String]'; },
    regex: function (x) { return _toString(x) === '[object RegExp]'; },
    symbol: function (x) {
      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
    }
  };

  var overrideNative = function overrideNative(object, property, replacement) {
    var original = object[property];
    defineProperty(object, property, replacement, true);
    Value.preserveToString(object[property], original);
  };

  // eslint-disable-next-line no-restricted-properties
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());

  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
  // we're going to use an arbitrary _-prefixed name to make our shims
  // work properly with each other, even though we don't have full Iterator
  // support.  That is, `Array.from(map.keys())` will work, but we don't
  // pretend to export a "real" Iterator interface.
  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
  // Firefox ships a partial implementation using the name @@iterator.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
  // So use that name if we detect it.
  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
    $iterator$ = '@@iterator';
  }

  // Reflect
  if (!globals.Reflect) {
    defineProperty(globals, 'Reflect', {}, true);
  }
  var Reflect = globals.Reflect;

  var $String = String;

  /* global document */
  var domAll = (typeof document === 'undefined' || !document) ? null : document.all;
  /* jshint eqnull:true */
  var isNullOrUndefined = domAll == null ? function isNullOrUndefined(x) {
    /* jshint eqnull:true */
    return x == null;
  } : function isNullOrUndefinedAndNotDocumentAll(x) {
    /* jshint eqnull:true */
    return x == null && x !== domAll;
  };

  var ES = {
    // http://www.ecma-international.org/ecma-262/6.0/#sec-call
    Call: function Call(F, V) {
      var args = arguments.length > 2 ? arguments[2] : [];
      if (!ES.IsCallable(F)) {
        throw new TypeError(F + ' is not a function');
      }
      return _apply(F, V, args);
    },

    RequireObjectCoercible: function (x, optMessage) {
      if (isNullOrUndefined(x)) {
        throw new TypeError(optMessage || 'Cannot call method on ' + x);
      }
      return x;
    },

    // This might miss the "(non-standard exotic and does not implement
    // [[Call]])" case from
    // http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator-runtime-semantics-evaluation
    // but we can't find any evidence these objects exist in practice.
    // If we find some in the future, you could test `Object(x) === x`,
    // which is reliable according to
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toobject
    // but is not well optimized by runtimes and creates an object
    // whenever it returns false, and thus is very slow.
    TypeIsObject: function (x) {
      if (x === void 0 || x === null || x === true || x === false) {
        return false;
      }
      return typeof x === 'function' || typeof x === 'object' || x === domAll;
    },

    ToObject: function (o, optMessage) {
      return Object(ES.RequireObjectCoercible(o, optMessage));
    },

    IsCallable: isCallable,

    IsConstructor: function (x) {
      // We can't tell callables from constructors in ES5
      return ES.IsCallable(x);
    },

    ToInt32: function (x) {
      return ES.ToNumber(x) >> 0;
    },

    ToUint32: function (x) {
      return ES.ToNumber(x) >>> 0;
    },

    ToNumber: function (value) {
      if (_toString(value) === '[object Symbol]') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      return +value;
    },

    ToInteger: function (value) {
      var number = ES.ToNumber(value);
      if (numberIsNaN(number)) { return 0; }
      if (number === 0 || !numberIsFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * _floor(_abs(number));
    },

    ToLength: function (value) {
      var len = ES.ToInteger(value);
      if (len <= 0) { return 0; } // includes converting -0 to +0
      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
      return len;
    },

    SameValue: function (a, b) {
      if (a === b) {
        // 0 === -0, but they are not identical.
        if (a === 0) { return 1 / a === 1 / b; }
        return true;
      }
      return numberIsNaN(a) && numberIsNaN(b);
    },

    SameValueZero: function (a, b) {
      // same as SameValue except for SameValueZero(+0, -0) == true
      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
    },

    IsIterable: function (o) {
      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
    },

    GetIterator: function (o) {
      if (isArguments(o)) {
        // special case support for `arguments`
        return new ArrayIterator(o, 'value');
      }
      var itFn = ES.GetMethod(o, $iterator$);
      if (!ES.IsCallable(itFn)) {
        // Better diagnostics if itFn is null or undefined
        throw new TypeError('value is not an iterable');
      }
      var it = ES.Call(itFn, o);
      if (!ES.TypeIsObject(it)) {
        throw new TypeError('bad iterator');
      }
      return it;
    },

    GetMethod: function (o, p) {
      var func = ES.ToObject(o)[p];
      if (isNullOrUndefined(func)) {
        return void 0;
      }
      if (!ES.IsCallable(func)) {
        throw new TypeError('Method not callable: ' + p);
      }
      return func;
    },

    IteratorComplete: function (iterResult) {
      return !!iterResult.done;
    },

    IteratorClose: function (iterator, completionIsThrow) {
      var returnMethod = ES.GetMethod(iterator, 'return');
      if (returnMethod === void 0) {
        return;
      }
      var innerResult, innerException;
      try {
        innerResult = ES.Call(returnMethod, iterator);
      } catch (e) {
        innerException = e;
      }
      if (completionIsThrow) {
        return;
      }
      if (innerException) {
        throw innerException;
      }
      if (!ES.TypeIsObject(innerResult)) {
        throw new TypeError("Iterator's return method returned a non-object.");
      }
    },

    IteratorNext: function (it) {
      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
      if (!ES.TypeIsObject(result)) {
        throw new TypeError('bad iterator');
      }
      return result;
    },

    IteratorStep: function (it) {
      var result = ES.IteratorNext(it);
      var done = ES.IteratorComplete(result);
      return done ? false : result;
    },

    Construct: function (C, args, newTarget, isES6internal) {
      var target = typeof newTarget === 'undefined' ? C : newTarget;

      if (!isES6internal && Reflect.construct) {
        // Try to use Reflect.construct if available
        return Reflect.construct(C, args, target);
      }
      // OK, we have to fake it.  This will only work if the
      // C.[[ConstructorKind]] == "base" -- but that's the only
      // kind we can make in ES5 code anyway.

      // OrdinaryCreateFromConstructor(target, "%ObjectPrototype%")
      var proto = target.prototype;
      if (!ES.TypeIsObject(proto)) {
        proto = Object.prototype;
      }
      var obj = create(proto);
      // Call the constructor.
      var result = ES.Call(C, obj, args);
      return ES.TypeIsObject(result) ? result : obj;
    },

    SpeciesConstructor: function (O, defaultConstructor) {
      var C = O.constructor;
      if (C === void 0) {
        return defaultConstructor;
      }
      if (!ES.TypeIsObject(C)) {
        throw new TypeError('Bad constructor');
      }
      var S = C[symbolSpecies];
      if (isNullOrUndefined(S)) {
        return defaultConstructor;
      }
      if (!ES.IsConstructor(S)) {
        throw new TypeError('Bad @@species');
      }
      return S;
    },

    CreateHTML: function (string, tag, attribute, value) {
      var S = ES.ToString(string);
      var p1 = '<' + tag;
      if (attribute !== '') {
        var V = ES.ToString(value);
        var escapedV = V.replace(/"/g, '&quot;');
        p1 += ' ' + attribute + '="' + escapedV + '"';
      }
      var p2 = p1 + '>';
      var p3 = p2 + S;
      return p3 + '</' + tag + '>';
    },

    IsRegExp: function IsRegExp(argument) {
      if (!ES.TypeIsObject(argument)) {
        return false;
      }
      var isRegExp = argument[Symbol.match];
      if (typeof isRegExp !== 'undefined') {
        return !!isRegExp;
      }
      return Type.regex(argument);
    },

    ToString: function ToString(string) {
      return $String(string);
    }
  };

  // Well-known Symbol shims
  if (supportsDescriptors && hasSymbols) {
    var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
      if (Type.symbol(Symbol[name])) {
        return Symbol[name];
      }
      // eslint-disable-next-line no-restricted-properties
      var sym = Symbol['for']('Symbol.' + name);
      Object.defineProperty(Symbol, name, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: sym
      });
      return sym;
    };
    if (!Type.symbol(Symbol.search)) {
      var symbolSearch = defineWellKnownSymbol('search');
      var originalSearch = String.prototype.search;
      defineProperty(RegExp.prototype, symbolSearch, function search(string) {
        return ES.Call(originalSearch, string, [this]);
      });
      var searchShim = function search(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(regexp)) {
          var searcher = ES.GetMethod(regexp, symbolSearch);
          if (typeof searcher !== 'undefined') {
            return ES.Call(searcher, regexp, [O]);
          }
        }
        return ES.Call(originalSearch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'search', searchShim);
    }
    if (!Type.symbol(Symbol.replace)) {
      var symbolReplace = defineWellKnownSymbol('replace');
      var originalReplace = String.prototype.replace;
      defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
        return ES.Call(originalReplace, string, [this, replaceValue]);
      });
      var replaceShim = function replace(searchValue, replaceValue) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(searchValue)) {
          var replacer = ES.GetMethod(searchValue, symbolReplace);
          if (typeof replacer !== 'undefined') {
            return ES.Call(replacer, searchValue, [O, replaceValue]);
          }
        }
        return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);
      };
      overrideNative(String.prototype, 'replace', replaceShim);
    }
    if (!Type.symbol(Symbol.split)) {
      var symbolSplit = defineWellKnownSymbol('split');
      var originalSplit = String.prototype.split;
      defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
        return ES.Call(originalSplit, string, [this, limit]);
      });
      var splitShim = function split(separator, limit) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(separator)) {
          var splitter = ES.GetMethod(separator, symbolSplit);
          if (typeof splitter !== 'undefined') {
            return ES.Call(splitter, separator, [O, limit]);
          }
        }
        return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);
      };
      overrideNative(String.prototype, 'split', splitShim);
    }
    var symbolMatchExists = Type.symbol(Symbol.match);
    var stringMatchIgnoresSymbolMatch = symbolMatchExists && (function () {
      // Firefox 41, through Nightly 45 has Symbol.match, but String#match ignores it.
      // Firefox 40 and below have Symbol.match but String#match works fine.
      var o = {};
      o[Symbol.match] = function () { return 42; };
      return 'a'.match(o) !== 42;
    }());
    if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
      var symbolMatch = defineWellKnownSymbol('match');

      var originalMatch = String.prototype.match;
      defineProperty(RegExp.prototype, symbolMatch, function match(string) {
        return ES.Call(originalMatch, string, [this]);
      });

      var matchShim = function match(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(regexp)) {
          var matcher = ES.GetMethod(regexp, symbolMatch);
          if (typeof matcher !== 'undefined') {
            return ES.Call(matcher, regexp, [O]);
          }
        }
        return ES.Call(originalMatch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'match', matchShim);
    }
  }

  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
    Value.preserveToString(replacement, original);
    if (Object.setPrototypeOf) {
      // sets up proper prototype chain where possible
      Object.setPrototypeOf(original, replacement);
    }
    if (supportsDescriptors) {
      _forEach(Object.getOwnPropertyNames(original), function (key) {
        if (key in noop || keysToSkip[key]) { return; }
        Value.proxy(original, key, replacement);
      });
    } else {
      _forEach(Object.keys(original), function (key) {
        if (key in noop || keysToSkip[key]) { return; }
        replacement[key] = original[key];
      });
    }
    replacement.prototype = original.prototype;
    Value.redefine(original.prototype, 'constructor', replacement);
  };

  var defaultSpeciesGetter = function () { return this; };
  var addDefaultSpecies = function (C) {
    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
    }
  };

  var addIterator = function (prototype, impl) {
    var implementation = impl || function iterator() { return this; };
    defineProperty(prototype, $iterator$, implementation);
    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
      // implementations are buggy when $iterator$ is a Symbol
      prototype[$iterator$] = implementation;
    }
  };

  var createDataProperty = function createDataProperty(object, name, value) {
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };
  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
    createDataProperty(object, name, value);
    if (!ES.SameValue(object[name], value)) {
      throw new TypeError('property is nonconfigurable');
    }
  };

  var emulateES6construct = function (o, defaultNewTarget, defaultProto, slots) {
    // This is an es5 approximation to es6 construct semantics.  in es6,
    // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
    // just sets the internal variable NewTarget (in es6 syntax `new.target`)
    // to Foo and then returns Foo().

    // Many ES6 object then have constructors of the form:
    // 1. If NewTarget is undefined, throw a TypeError exception
    // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)

    // So we're going to emulate those first two steps.
    if (!ES.TypeIsObject(o)) {
      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
    }
    var proto = defaultNewTarget.prototype;
    if (!ES.TypeIsObject(proto)) {
      proto = defaultProto;
    }
    var obj = create(proto);
    for (var name in slots) {
      if (_hasOwnProperty(slots, name)) {
        var value = slots[name];
        defineProperty(obj, name, value, true);
      }
    }
    return obj;
  };

  // Firefox 31 reports this function's length as 0
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
    var originalFromCodePoint = String.fromCodePoint;
    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
      return ES.Call(originalFromCodePoint, this, arguments);
    });
  }

  var StringShims = {
    fromCodePoint: function fromCodePoint(codePoints) {
      var result = [];
      var next;
      for (var i = 0, length = arguments.length; i < length; i++) {
        next = Number(arguments[i]);
        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
          throw new RangeError('Invalid code point ' + next);
        }

        if (next < 0x10000) {
          _push(result, String.fromCharCode(next));
        } else {
          next -= 0x10000;
          _push(result, String.fromCharCode((next >> 10) + 0xD800));
          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));
        }
      }
      return result.join('');
    },

    raw: function raw(callSite) {
      var cooked = ES.ToObject(callSite, 'bad callSite');
      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
      var len = rawString.length;
      var literalsegments = ES.ToLength(len);
      if (literalsegments <= 0) {
        return '';
      }

      var stringElements = [];
      var nextIndex = 0;
      var nextKey, next, nextSeg, nextSub;
      while (nextIndex < literalsegments) {
        nextKey = ES.ToString(nextIndex);
        nextSeg = ES.ToString(rawString[nextKey]);
        _push(stringElements, nextSeg);
        if (nextIndex + 1 >= literalsegments) {
          break;
        }
        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
        nextSub = ES.ToString(next);
        _push(stringElements, nextSub);
        nextIndex += 1;
      }
      return stringElements.join('');
    }
  };
  if (String.raw && String.raw({ raw: { 0: 'x', 1: 'y', length: 2 } }) !== 'xy') {
    // IE 11 TP has a broken String.raw implementation
    overrideNative(String, 'raw', StringShims.raw);
  }
  defineProperties(String, StringShims);

  // Fast repeat, uses the `Exponentiation by squaring` algorithm.
  // Perf: http://jsperf.com/string-repeat2/2
  var stringRepeat = function repeat(s, times) {
    if (times < 1) { return ''; }
    if (times % 2) { return repeat(s, times - 1) + s; }
    var half = repeat(s, times / 2);
    return half + half;
  };
  var stringMaxLength = Infinity;

  var StringPrototypeShims = {
    repeat: function repeat(times) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var numTimes = ES.ToInteger(times);
      if (numTimes < 0 || numTimes >= stringMaxLength) {
        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
      }
      return stringRepeat(thisStr, numTimes);
    },

    startsWith: function startsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "startsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      var start = _max(ES.ToInteger(position), 0);
      return _strSlice(S, start, start + searchStr.length) === searchStr;
    },

    endsWith: function endsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "endsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var len = S.length;
      var endPosition;
      if (arguments.length > 1) {
        endPosition = arguments[1];
      }
      var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
      var end = _min(_max(pos, 0), len);
      return _strSlice(S, end - searchStr.length, end) === searchStr;
    },

    includes: function includes(searchString) {
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('"includes" does not accept a RegExp');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      // Somehow this trick makes method 100% compat with the spec.
      return _indexOf(this, searchStr, position) !== -1;
    },

    codePointAt: function codePointAt(pos) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var position = ES.ToInteger(pos);
      var length = thisStr.length;
      if (position >= 0 && position < length) {
        var first = thisStr.charCodeAt(position);
        var isEnd = position + 1 === length;
        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
        var second = thisStr.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) { return first; }
        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
      }
    }
  };
  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
  }

  if (String.prototype.startsWith && String.prototype.endsWith) {
    var startsWithRejectsRegex = throwsError(function () {
      /* throws if spec-compliant */
      '/a/'.startsWith(/a/);
    });
    var startsWithHandlesInfinity = valueOrFalseIfThrows(function () {
      return 'abc'.startsWith('a', Infinity) === false;
    });
    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
      // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
  }
  if (hasSymbols) {
    var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.startsWith(re);
    });
    if (!startsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
    }
    var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.endsWith(re);
    });
    if (!endsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
    var includesSupportsSymbolMatch = valueOrFalseIfThrows(function () {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.includes(re);
    });
    if (!includesSupportsSymbolMatch) {
      overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
    }
  }

  defineProperties(String.prototype, StringPrototypeShims);

  // whitespace from: http://es5.github.io/#x15.5.4.20
  // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
  var ws = [
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
    '\u2029\uFEFF'
  ].join('');
  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
  var trimShim = function trim() {
    return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
  };
  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
  var isBadHexRegex = /^[-+]0x[0-9a-f]+$/i;
  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);

  // Given an argument x, it will return an IteratorResult object,
  // with value set to x and done to false.
  // Given no arguments, it will return an iterator completion object.
  var iteratorResult = function (x) {
    return { value: x, done: arguments.length === 0 };
  };

  // see http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype-@@iterator
  var StringIterator = function (s) {
    ES.RequireObjectCoercible(s);
    this._s = ES.ToString(s);
    this._i = 0;
  };
  StringIterator.prototype.next = function () {
    var s = this._s;
    var i = this._i;
    if (typeof s === 'undefined' || i >= s.length) {
      this._s = void 0;
      return iteratorResult();
    }
    var first = s.charCodeAt(i);
    var second, len;
    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
      len = 1;
    } else {
      second = s.charCodeAt(i + 1);
      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
    }
    this._i = i + len;
    return iteratorResult(s.substr(i, len));
  };
  addIterator(StringIterator.prototype);
  addIterator(String.prototype, function () {
    return new StringIterator(this);
  });

  var ArrayShims = {
    from: function from(items) {
      var C = this;
      var mapFn;
      if (arguments.length > 1) {
        mapFn = arguments[1];
      }
      var mapping, T;
      if (typeof mapFn === 'undefined') {
        mapping = false;
      } else {
        if (!ES.IsCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
        mapping = true;
      }

      // Note that that Arrays will use ArrayIterator:
      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
      var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';

      var length, result, i;
      if (usingIterator) {
        result = ES.IsConstructor(C) ? Object(new C()) : [];
        var iterator = ES.GetIterator(items);
        var next, nextValue;

        i = 0;
        while (true) {
          next = ES.IteratorStep(iterator);
          if (next === false) {
            break;
          }
          nextValue = next.value;
          try {
            if (mapping) {
              nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
            }
            result[i] = nextValue;
          } catch (e) {
            ES.IteratorClose(iterator, true);
            throw e;
          }
          i += 1;
        }
        length = i;
      } else {
        var arrayLike = ES.ToObject(items);
        length = ES.ToLength(arrayLike.length);
        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
        var value;
        for (i = 0; i < length; ++i) {
          value = arrayLike[i];
          if (mapping) {
            value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
          }
          createDataPropertyOrThrow(result, i, value);
        }
      }

      result.length = length;
      return result;
    },

    of: function of() {
      var len = arguments.length;
      var C = this;
      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
      for (var k = 0; k < len; ++k) {
        createDataPropertyOrThrow(A, k, arguments[k]);
      }
      A.length = len;
      return A;
    }
  };
  defineProperties(Array, ArrayShims);
  addDefaultSpecies(Array);

  // Our ArrayIterator is private; see
  // https://github.com/paulmillr/es6-shim/issues/252
  ArrayIterator = function (array, kind) {
    this.i = 0;
    this.array = array;
    this.kind = kind;
  };

  defineProperties(ArrayIterator.prototype, {
    next: function () {
      var i = this.i;
      var array = this.array;
      if (!(this instanceof ArrayIterator)) {
        throw new TypeError('Not an ArrayIterator');
      }
      if (typeof array !== 'undefined') {
        var len = ES.ToLength(array.length);
        for (; i < len; i++) {
          var kind = this.kind;
          var retval;
          if (kind === 'key') {
            retval = i;
          } else if (kind === 'value') {
            retval = array[i];
          } else if (kind === 'entry') {
            retval = [i, array[i]];
          }
          this.i = i + 1;
          return iteratorResult(retval);
        }
      }
      this.array = void 0;
      return iteratorResult();
    }
  });
  addIterator(ArrayIterator.prototype);

/*
  var orderKeys = function orderKeys(a, b) {
    var aNumeric = String(ES.ToInteger(a)) === a;
    var bNumeric = String(ES.ToInteger(b)) === b;
    if (aNumeric && bNumeric) {
      return b - a;
    } else if (aNumeric && !bNumeric) {
      return -1;
    } else if (!aNumeric && bNumeric) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  };

  var getAllKeys = function getAllKeys(object) {
    var ownKeys = [];
    var keys = [];

    for (var key in object) {
      _push(_hasOwnProperty(object, key) ? ownKeys : keys, key);
    }
    _sort(ownKeys, orderKeys);
    _sort(keys, orderKeys);

    return _concat(ownKeys, keys);
  };
  */

  // note: this is positioned here because it depends on ArrayIterator
  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function () {
    // Detects a bug in Webkit nightly r181886
    var Foo = function Foo(len) { this.length = len; };
    Foo.prototype = [];
    var fooArr = Array.of.apply(Foo, [1, 2]);
    return fooArr instanceof Foo && fooArr.length === 2;
  }());
  if (!arrayOfSupportsSubclassing) {
    overrideNative(Array, 'of', ArrayShims.of);
  }

  var ArrayPrototypeShims = {
    copyWithin: function copyWithin(target, start) {
      var o = ES.ToObject(this);
      var len = ES.ToLength(o.length);
      var relativeTarget = ES.ToInteger(target);
      var relativeStart = ES.ToInteger(start);
      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
      var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
      var count = _min(finalItem - from, len - to);
      var direction = 1;
      if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count > 0) {
        if (from in o) {
          o[to] = o[from];
        } else {
          delete o[to];
        }
        from += direction;
        to += direction;
        count -= 1;
      }
      return o;
    },

    fill: function fill(value) {
      var start;
      if (arguments.length > 1) {
        start = arguments[1];
      }
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var O = ES.ToObject(this);
      var len = ES.ToLength(O.length);
      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
      end = ES.ToInteger(typeof end === 'undefined' ? len : end);

      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
      var relativeEnd = end < 0 ? len + end : end;

      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
        O[i] = value;
      }
      return O;
    },

    find: function find(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#find: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0, value; i < length; i++) {
        value = list[i];
        if (thisArg) {
          if (_call(predicate, thisArg, value, i, list)) {
            return value;
          }
        } else if (predicate(value, i, list)) {
          return value;
        }
      }
    },

    findIndex: function findIndex(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#findIndex: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0; i < length; i++) {
        if (thisArg) {
          if (_call(predicate, thisArg, list[i], i, list)) {
            return i;
          }
        } else if (predicate(list[i], i, list)) {
          return i;
        }
      }
      return -1;
    },

    keys: function keys() {
      return new ArrayIterator(this, 'key');
    },

    values: function values() {
      return new ArrayIterator(this, 'value');
    },

    entries: function entries() {
      return new ArrayIterator(this, 'entry');
    }
  };
  // Safari 7.1 defines Array#keys and Array#entries natively,
  // but the resulting ArrayIterator objects don't have a "next" method.
  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
    delete Array.prototype.keys;
  }
  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
    delete Array.prototype.entries;
  }

  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
    defineProperties(Array.prototype, {
      values: Array.prototype[$iterator$]
    });
    if (Type.symbol(Symbol.unscopables)) {
      Array.prototype[Symbol.unscopables].values = true;
    }
  }
  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
    var originalArrayPrototypeValues = Array.prototype.values;
    overrideNative(Array.prototype, 'values', function values() { return ES.Call(originalArrayPrototypeValues, this, arguments); });
    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
  }
  defineProperties(Array.prototype, ArrayPrototypeShims);

  if (1 / [true].indexOf(true, -0) < 0) {
    // indexOf when given a position arg of -0 should return +0.
    // https://github.com/tc39/ecma262/pull/316
    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
      var value = _arrayIndexOfApply(this, arguments);
      if (value === 0 && (1 / value) < 0) {
        return 0;
      }
      return value;
    }, true);
  }

  addIterator(Array.prototype, function () { return this.values(); });
  // Chrome defines keys/values/entries on Array, but doesn't give us
  // any way to identify its iterator.  So add our own shimmed field.
  if (Object.getPrototypeOf) {
    addIterator(Object.getPrototypeOf([].values()));
  }

  // note: this is positioned here because it relies on Array#entries
  var arrayFromSwallowsNegativeLengths = (function () {
    // Detects a Firefox bug in v32
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
    return valueOrFalseIfThrows(function () {
      return Array.from({ length: -1 }).length === 0;
    });
  }());
  var arrayFromHandlesIterables = (function () {
    // Detects a bug in Webkit nightly r181886
    var arr = Array.from([0].entries());
    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
  }());
  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
    overrideNative(Array, 'from', ArrayShims.from);
  }
  var arrayFromHandlesUndefinedMapFunction = (function () {
    // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,
    // but the spec doesn't care if it's provided or not - undefined doesn't throw.
    return valueOrFalseIfThrows(function () {
      return Array.from([0], void 0);
    });
  }());
  if (!arrayFromHandlesUndefinedMapFunction) {
    var origArrayFrom = Array.from;
    overrideNative(Array, 'from', function from(items) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        return ES.Call(origArrayFrom, this, arguments);
      } else {
        return _call(origArrayFrom, this, items);
      }
    });
  }

  var int32sAsOne = -(Math.pow(2, 32) - 1);
  var toLengthsCorrectly = function (method, reversed) {
    var obj = { length: int32sAsOne };
    obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;
    return valueOrFalseIfThrows(function () {
      _call(method, obj, function () {
        // note: in nonconforming browsers, this will be called
        // -1 >>> 0 times, which is 4294967295, so the throw matters.
        throw new RangeError('should not reach here');
      }, []);
      return true;
    });
  };
  if (!toLengthsCorrectly(Array.prototype.forEach)) {
    var originalForEach = Array.prototype.forEach;
    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
      return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.map)) {
    var originalMap = Array.prototype.map;
    overrideNative(Array.prototype, 'map', function map(callbackFn) {
      return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.filter)) {
    var originalFilter = Array.prototype.filter;
    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
      return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.some)) {
    var originalSome = Array.prototype.some;
    overrideNative(Array.prototype, 'some', function some(callbackFn) {
      return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.every)) {
    var originalEvery = Array.prototype.every;
    overrideNative(Array.prototype, 'every', function every(callbackFn) {
      return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduce)) {
    var originalReduce = Array.prototype.reduce;
    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
      return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
    var originalReduceRight = Array.prototype.reduceRight;
    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
      return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
    }, true);
  }

  var lacksOctalSupport = Number('0o10') !== 8;
  var lacksBinarySupport = Number('0b10') !== 2;
  var trimsNonWhitespace = _some(nonWS, function (c) {
    return Number(c + 0 + c) === 0;
  });
  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
    var OrigNumber = Number;
    var binaryRegex = /^0b[01]+$/i;
    var octalRegex = /^0o[0-7]+$/i;
    // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
    var isBinary = binaryRegex.test.bind(binaryRegex);
    var isOctal = octalRegex.test.bind(octalRegex);
    var toPrimitive = function (O) { // need to replace this with `es-to-primitive/es6`
      var result;
      if (typeof O.valueOf === 'function') {
        result = O.valueOf();
        if (Type.primitive(result)) {
          return result;
        }
      }
      if (typeof O.toString === 'function') {
        result = O.toString();
        if (Type.primitive(result)) {
          return result;
        }
      }
      throw new TypeError('No default value');
    };
    var hasNonWS = nonWSregex.test.bind(nonWSregex);
    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
    var NumberShim = (function () {
      // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.
      var NumberShim = function Number(value) {
        var primValue;
        if (arguments.length > 0) {
          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
        } else {
          primValue = 0;
        }
        if (typeof primValue === 'string') {
          primValue = ES.Call(trimShim, primValue);
          if (isBinary(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 2);
          } else if (isOctal(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 8);
          } else if (hasNonWS(primValue) || isBadHex(primValue)) {
            primValue = NaN;
          }
        }
        var receiver = this;
        var valueOfSucceeds = valueOrFalseIfThrows(function () {
          OrigNumber.prototype.valueOf.call(receiver);
          return true;
        });
        if (receiver instanceof NumberShim && !valueOfSucceeds) {
          return new OrigNumber(primValue);
        }
        /* jshint newcap: false */
        return OrigNumber(primValue);
        /* jshint newcap: true */
      };
      return NumberShim;
    }());
    wrapConstructor(OrigNumber, NumberShim, {});
    // this is necessary for ES3 browsers, where these properties are non-enumerable.
    defineProperties(NumberShim, {
      NaN: OrigNumber.NaN,
      MAX_VALUE: OrigNumber.MAX_VALUE,
      MIN_VALUE: OrigNumber.MIN_VALUE,
      NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
      POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
    });
    /* globals Number: true */
    /* eslint-disable no-undef, no-global-assign */
    /* jshint -W020 */
    Number = NumberShim;
    Value.redefine(globals, 'Number', NumberShim);
    /* jshint +W020 */
    /* eslint-enable no-undef, no-global-assign */
    /* globals Number: false */
  }

  var maxSafeInteger = Math.pow(2, 53) - 1;
  defineProperties(Number, {
    MAX_SAFE_INTEGER: maxSafeInteger,
    MIN_SAFE_INTEGER: -maxSafeInteger,
    EPSILON: 2.220446049250313e-16,

    parseInt: globals.parseInt,
    parseFloat: globals.parseFloat,

    isFinite: numberIsFinite,

    isInteger: function isInteger(value) {
      return numberIsFinite(value) && ES.ToInteger(value) === value;
    },

    isSafeInteger: function isSafeInteger(value) {
      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
    },

    isNaN: numberIsNaN
  });
  // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);

  // Work around bugs in Array#find and Array#findIndex -- early
  // implementations skipped holes in sparse arrays. (Note that the
  // implementations of find/findIndex indirectly use shimmed
  // methods of Number, so this test has to happen down here.)
  /*jshint elision: true */
  /* eslint-disable no-sparse-arrays */
  if ([, 1].find(function () { return true; }) === 1) {
    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
  }
  if ([, 1].findIndex(function () { return true; }) !== 0) {
    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
  }
  /* eslint-enable no-sparse-arrays */
  /*jshint elision: false */

  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
  var ensureEnumerable = function ensureEnumerable(obj, prop) {
    if (supportsDescriptors && isEnumerableOn(obj, prop)) {
      Object.defineProperty(obj, prop, { enumerable: false });
    }
  };
  var sliceArgs = function sliceArgs() {
    // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
    var initial = Number(this);
    var len = arguments.length;
    var desiredArgCount = len - initial;
    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
    for (var i = initial; i < len; ++i) {
      args[i - initial] = arguments[i];
    }
    return args;
  };
  var assignTo = function assignTo(source) {
    return function assignToSource(target, key) {
      target[key] = source[key];
      return target;
    };
  };
  var assignReducer = function (target, source) {
    var sourceKeys = keys(Object(source));
    var symbols;
    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
    }
    return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
  };

  var ObjectShims = {
    // 19.1.3.1
    assign: function (target, source) {
      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
      return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
    },

    // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
    is: function is(a, b) {
      return ES.SameValue(a, b);
    }
  };
  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function () {
    // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
    // which is 72% slower than our shim, and Firefox 40's native implementation.
    var thrower = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(thrower, 'xy');
    } catch (e) {
      return thrower[1] === 'y';
    }
  }());
  if (assignHasPendingExceptions) {
    overrideNative(Object, 'assign', ObjectShims.assign);
  }
  defineProperties(Object, ObjectShims);

  if (supportsDescriptors) {
    var ES5ObjectShims = {
      // 19.1.3.9
      // shim from https://gist.github.com/WebReflection/5593554
      setPrototypeOf: (function (Object, magic) {
        var set;

        var checkArgs = function (O, proto) {
          if (!ES.TypeIsObject(O)) {
            throw new TypeError('cannot set prototype on a non-object');
          }
          if (!(proto === null || ES.TypeIsObject(proto))) {
            throw new TypeError('can only set prototype to an object or null' + proto);
          }
        };

        var setPrototypeOf = function (O, proto) {
          checkArgs(O, proto);
          _call(set, O, proto);
          return O;
        };

        try {
          // this works already in Firefox and Safari
          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
          _call(set, {}, null);
        } catch (e) {
          if (Object.prototype !== {}[magic]) {
            // IE < 11 cannot be shimmed
            return;
          }
          // probably Chrome or some old Mobile stock browser
          set = function (proto) {
            this[magic] = proto;
          };
          // please note that this will **not** work
          // in those browsers that do not inherit
          // __proto__ by mistake from Object.prototype
          // in these cases we should probably throw an error
          // or at least be informed about the issue
          setPrototypeOf.polyfill = setPrototypeOf(
            setPrototypeOf({}, null),
            Object.prototype
          ) instanceof Object;
          // setPrototypeOf.polyfill === true means it works as meant
          // setPrototypeOf.polyfill === false means it's not 100% reliable
          // setPrototypeOf.polyfill === undefined
          // or
          // setPrototypeOf.polyfill ==  null means it's not a polyfill
          // which means it works as expected
          // we can even delete Object.prototype.__proto__;
        }
        return setPrototypeOf;
      }(Object, '__proto__'))
    };

    defineProperties(Object, ES5ObjectShims);
  }

  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
  // but Object.create(null) does.
  if (Object.setPrototypeOf && Object.getPrototypeOf &&
      Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null &&
      Object.getPrototypeOf(Object.create(null)) === null) {
    (function () {
      var FAKENULL = Object.create(null);
      var gpo = Object.getPrototypeOf;
      var spo = Object.setPrototypeOf;
      Object.getPrototypeOf = function (o) {
        var result = gpo(o);
        return result === FAKENULL ? null : result;
      };
      Object.setPrototypeOf = function (o, p) {
        var proto = p === null ? FAKENULL : p;
        return spo(o, proto);
      };
      Object.setPrototypeOf.polyfill = false;
    }());
  }

  var objectKeysAcceptsPrimitives = !throwsError(function () { Object.keys('foo'); });
  if (!objectKeysAcceptsPrimitives) {
    var originalObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      return originalObjectKeys(ES.ToObject(value));
    });
    keys = Object.keys;
  }
  var objectKeysRejectsRegex = throwsError(function () { Object.keys(/a/g); });
  if (objectKeysRejectsRegex) {
    var regexRejectingObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      if (Type.regex(value)) {
        var regexKeys = [];
        for (var k in value) {
          if (_hasOwnProperty(value, k)) {
            _push(regexKeys, k);
          }
        }
        return regexKeys;
      }
      return regexRejectingObjectKeys(value);
    });
    keys = Object.keys;
  }

  if (Object.getOwnPropertyNames) {
    var objectGOPNAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyNames('foo'); });
    if (!objectGOPNAcceptsPrimitives) {
      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
        var val = ES.ToObject(value);
        if (_toString(val) === '[object Window]') {
          try {
            return originalObjectGetOwnPropertyNames(val);
          } catch (e) {
            // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
            return _concat([], cachedWindowNames);
          }
        }
        return originalObjectGetOwnPropertyNames(val);
      });
    }
  }
  if (Object.getOwnPropertyDescriptor) {
    var objectGOPDAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyDescriptor('foo', 'bar'); });
    if (!objectGOPDAcceptsPrimitives) {
      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
      });
    }
  }
  if (Object.seal) {
    var objectSealAcceptsPrimitives = !throwsError(function () { Object.seal('foo'); });
    if (!objectSealAcceptsPrimitives) {
      var originalObjectSeal = Object.seal;
      overrideNative(Object, 'seal', function seal(value) {
        if (!ES.TypeIsObject(value)) { return value; }
        return originalObjectSeal(value);
      });
    }
  }
  if (Object.isSealed) {
    var objectIsSealedAcceptsPrimitives = !throwsError(function () { Object.isSealed('foo'); });
    if (!objectIsSealedAcceptsPrimitives) {
      var originalObjectIsSealed = Object.isSealed;
      overrideNative(Object, 'isSealed', function isSealed(value) {
        if (!ES.TypeIsObject(value)) { return true; }
        return originalObjectIsSealed(value);
      });
    }
  }
  if (Object.freeze) {
    var objectFreezeAcceptsPrimitives = !throwsError(function () { Object.freeze('foo'); });
    if (!objectFreezeAcceptsPrimitives) {
      var originalObjectFreeze = Object.freeze;
      overrideNative(Object, 'freeze', function freeze(value) {
        if (!ES.TypeIsObject(value)) { return value; }
        return originalObjectFreeze(value);
      });
    }
  }
  if (Object.isFrozen) {
    var objectIsFrozenAcceptsPrimitives = !throwsError(function () { Object.isFrozen('foo'); });
    if (!objectIsFrozenAcceptsPrimitives) {
      var originalObjectIsFrozen = Object.isFrozen;
      overrideNative(Object, 'isFrozen', function isFrozen(value) {
        if (!ES.TypeIsObject(value)) { return true; }
        return originalObjectIsFrozen(value);
      });
    }
  }
  if (Object.preventExtensions) {
    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () { Object.preventExtensions('foo'); });
    if (!objectPreventExtensionsAcceptsPrimitives) {
      var originalObjectPreventExtensions = Object.preventExtensions;
      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
        if (!ES.TypeIsObject(value)) { return value; }
        return originalObjectPreventExtensions(value);
      });
    }
  }
  if (Object.isExtensible) {
    var objectIsExtensibleAcceptsPrimitives = !throwsError(function () { Object.isExtensible('foo'); });
    if (!objectIsExtensibleAcceptsPrimitives) {
      var originalObjectIsExtensible = Object.isExtensible;
      overrideNative(Object, 'isExtensible', function isExtensible(value) {
        if (!ES.TypeIsObject(value)) { return false; }
        return originalObjectIsExtensible(value);
      });
    }
  }
  if (Object.getPrototypeOf) {
    var objectGetProtoAcceptsPrimitives = !throwsError(function () { Object.getPrototypeOf('foo'); });
    if (!objectGetProtoAcceptsPrimitives) {
      var originalGetProto = Object.getPrototypeOf;
      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
        return originalGetProto(ES.ToObject(value));
      });
    }
  }

  var hasFlags = supportsDescriptors && (function () {
    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
    return desc && ES.IsCallable(desc.get);
  }());
  if (supportsDescriptors && !hasFlags) {
    var regExpFlagsGetter = function flags() {
      if (!ES.TypeIsObject(this)) {
        throw new TypeError('Method called on incompatible type: must be an object.');
      }
      var result = '';
      if (this.global) {
        result += 'g';
      }
      if (this.ignoreCase) {
        result += 'i';
      }
      if (this.multiline) {
        result += 'm';
      }
      if (this.unicode) {
        result += 'u';
      }
      if (this.sticky) {
        result += 'y';
      }
      return result;
    };

    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
  }

  var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function () {
    return String(new RegExp(/a/g, 'i')) === '/a/i';
  });
  var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && (function () {
    // Edge 0.12 supports flags fully, but does not support Symbol.match
    var regex = /./;
    regex[Symbol.match] = false;
    return RegExp(regex) === regex;
  }());

  var regexToStringIsGeneric = valueOrFalseIfThrows(function () {
    return RegExp.prototype.toString.call({ source: 'abc' }) === '/abc/';
  });
  var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function () {
    return RegExp.prototype.toString.call({ source: 'a', flags: 'b' }) === '/a/b';
  });
  if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
    var origRegExpToString = RegExp.prototype.toString;
    defineProperty(RegExp.prototype, 'toString', function toString() {
      var R = ES.RequireObjectCoercible(this);
      if (Type.regex(R)) {
        return _call(origRegExpToString, R);
      }
      var pattern = $String(R.source);
      var flags = $String(R.flags);
      return '/' + pattern + '/' + flags;
    }, true);
    Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
  }

  if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
    var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
    var legacySourceGetter = function () {
      // prior to it being a getter, it's own + nonconfigurable
      return this.source;
    };
    var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;

    var OrigRegExp = RegExp;
    var RegExpShim = (function () {
      return function RegExp(pattern, flags) {
        var patternIsRegExp = ES.IsRegExp(pattern);
        var calledWithNew = this instanceof RegExp;
        if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {
          return pattern;
        }

        var P = pattern;
        var F = flags;
        if (Type.regex(pattern)) {
          P = ES.Call(sourceGetter, pattern);
          F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
          return new RegExp(P, F);
        } else if (patternIsRegExp) {
          P = pattern.source;
          F = typeof flags === 'undefined' ? pattern.flags : flags;
        }
        return new OrigRegExp(pattern, flags);
      };
    }());
    wrapConstructor(OrigRegExp, RegExpShim, {
      $input: true // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
    });
    /* globals RegExp: true */
    /* eslint-disable no-undef, no-global-assign */
    /* jshint -W020 */
    RegExp = RegExpShim;
    Value.redefine(globals, 'RegExp', RegExpShim);
    /* jshint +W020 */
    /* eslint-enable no-undef, no-global-assign */
    /* globals RegExp: false */
  }

  if (supportsDescriptors) {
    var regexGlobals = {
      input: '$_',
      lastMatch: '$&',
      lastParen: '$+',
      leftContext: '$`',
      rightContext: '$\''
    };
    _forEach(keys(regexGlobals), function (prop) {
      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
        Value.getter(RegExp, regexGlobals[prop], function get() {
          return RegExp[prop];
        });
      }
    });
  }
  addDefaultSpecies(RegExp);

  var inverseEpsilon = 1 / Number.EPSILON;
  var roundTiesToEven = function roundTiesToEven(n) {
    // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
    return (n + inverseEpsilon) - inverseEpsilon;
  };
  var BINARY_32_EPSILON = Math.pow(2, -23);
  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
  var E = Math.E;
  var LOG2E = Math.LOG2E;
  var LOG10E = Math.LOG10E;
  var numberCLZ = Number.prototype.clz;
  delete Number.prototype.clz; // Safari 8 has Number#clz

  var MathShims = {
    acosh: function acosh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || value < 1) { return NaN; }
      if (x === 1) { return 0; }
      if (x === Infinity) { return x; }
      return _log((x / E) + (_sqrt(x + 1) * _sqrt(x - 1) / E)) + 1;
    },

    asinh: function asinh(value) {
      var x = Number(value);
      if (x === 0 || !globalIsFinite(x)) {
        return x;
      }
      return x < 0 ? -asinh(-x) : _log(x + _sqrt((x * x) + 1));
    },

    atanh: function atanh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || x < -1 || x > 1) {
        return NaN;
      }
      if (x === -1) { return -Infinity; }
      if (x === 1) { return Infinity; }
      if (x === 0) { return x; }
      return 0.5 * _log((1 + x) / (1 - x));
    },

    cbrt: function cbrt(value) {
      var x = Number(value);
      if (x === 0) { return x; }
      var negate = x < 0;
      var result;
      if (negate) { x = -x; }
      if (x === Infinity) {
        result = Infinity;
      } else {
        result = _exp(_log(x) / 3);
        // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
        result = ((x / (result * result)) + (2 * result)) / 3;
      }
      return negate ? -result : result;
    },

    clz32: function clz32(value) {
      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
      var x = Number(value);
      var number = ES.ToUint32(x);
      if (number === 0) {
        return 32;
      }
      return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);
    },

    cosh: function cosh(value) {
      var x = Number(value);
      if (x === 0) { return 1; } // +0 or -0
      if (numberIsNaN(x)) { return NaN; }
      if (!globalIsFinite(x)) { return Infinity; }
      if (x < 0) { x = -x; }
      if (x > 21) { return _exp(x) / 2; }
      return (_exp(x) + _exp(-x)) / 2;
    },

    expm1: function expm1(value) {
      var x = Number(value);
      if (x === -Infinity) { return -1; }
      if (!globalIsFinite(x) || x === 0) { return x; }
      if (_abs(x) > 0.5) {
        return _exp(x) - 1;
      }
      // A more precise approximation using Taylor series expansion
      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
      var t = x;
      var sum = 0;
      var n = 1;
      while (sum + t !== sum) {
        sum += t;
        n += 1;
        t *= x / n;
      }
      return sum;
    },

    hypot: function hypot(x, y) {
      var result = 0;
      var largest = 0;
      for (var i = 0; i < arguments.length; ++i) {
        var value = _abs(Number(arguments[i]));
        if (largest < value) {
          result *= (largest / value) * (largest / value);
          result += 1;
          largest = value;
        } else {
          result += value > 0 ? (value / largest) * (value / largest) : value;
        }
      }
      return largest === Infinity ? Infinity : largest * _sqrt(result);
    },

    log2: function log2(value) {
      return _log(value) * LOG2E;
    },

    log10: function log10(value) {
      return _log(value) * LOG10E;
    },

    log1p: function log1p(value) {
      var x = Number(value);
      if (x < -1 || numberIsNaN(x)) { return NaN; }
      if (x === 0 || x === Infinity) { return x; }
      if (x === -1) { return -Infinity; }

      return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));
    },

    sign: _sign,

    sinh: function sinh(value) {
      var x = Number(value);
      if (!globalIsFinite(x) || x === 0) { return x; }

      if (_abs(x) < 1) {
        return (Math.expm1(x) - Math.expm1(-x)) / 2;
      }
      return (_exp(x - 1) - _exp(-x - 1)) * E / 2;
    },

    tanh: function tanh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || x === 0) { return x; }
      // can exit early at +-20 as JS loses precision for true value at this integer
      if (x >= 20) { return 1; }
      if (x <= -20) { return -1; }

      return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));
    },

    trunc: function trunc(value) {
      var x = Number(value);
      return x < 0 ? -_floor(-x) : _floor(x);
    },

    imul: function imul(x, y) {
      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
      var a = ES.ToUint32(x);
      var b = ES.ToUint32(y);
      var ah = (a >>> 16) & 0xffff;
      var al = a & 0xffff;
      var bh = (b >>> 16) & 0xffff;
      var bl = b & 0xffff;
      // the shift by 0 fixes the sign on the high part
      // the final |0 converts the unsigned value into a signed value
      return (al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0) | 0;
    },

    fround: function fround(x) {
      var v = Number(x);
      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
        return v;
      }
      var sign = _sign(v);
      var abs = _abs(v);
      if (abs < BINARY_32_MIN_VALUE) {
        return sign * roundTiesToEven(
          abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON
        ) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
      }
      // Veltkamp's splitting (?)
      var a = (1 + (BINARY_32_EPSILON / Number.EPSILON)) * abs;
      var result = a - (a - abs);
      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
        return sign * Infinity;
      }
      return sign * result;
    }
  };
  defineProperties(Math, MathShims);
  // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
  // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
  // Chrome 40 has an imprecise Math.tanh with very small numbers
  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
  // Chrome 40 loses Math.acosh precision with high numbers
  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
  // Firefox 38 on Windows
  defineProperty(Math, 'cbrt', MathShims.cbrt, Math.abs(1 - (Math.cbrt(1e-300) / 1e-100)) / Number.EPSILON > 8);
  // node 0.11 has an imprecise Math.sinh with very small numbers
  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
  var expm1OfTen = Math.expm1(10);
  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);

  var origMathRound = Math.round;
  // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
  var roundHandlesBoundaryConditions = Math.round(0.5 - (Number.EPSILON / 4)) === 0 &&
    Math.round(-0.5 + (Number.EPSILON / 3.99)) === 1;

  // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
  // This behavior should be governed by "round to nearest, ties to even mode"
  // see http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-number-type
  // These are the boundary cases where it breaks.
  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
  var largestPositiveNumberWhereRoundBreaks = (2 * inverseEpsilon) - 1;
  var roundDoesNotIncreaseIntegers = [
    smallestPositiveNumberWhereRoundBreaks,
    largestPositiveNumberWhereRoundBreaks
  ].every(function (num) {
    return Math.round(num) === num;
  });
  defineProperty(Math, 'round', function round(x) {
    var floor = _floor(x);
    var ceil = floor === -1 ? -0 : floor + 1;
    return x - floor < 0.5 ? floor : ceil;
  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
  Value.preserveToString(Math.round, origMathRound);

  var origImul = Math.imul;
  if (Math.imul(0xffffffff, 5) !== -5) {
    // Safari 6.1, at least, reports "0" for this value
    Math.imul = MathShims.imul;
    Value.preserveToString(Math.imul, origImul);
  }
  if (Math.imul.length !== 2) {
    // Safari 8.0.4 has a length of 1
    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
    overrideNative(Math, 'imul', function imul(x, y) {
      return ES.Call(origImul, Math, arguments);
    });
  }

  // Promises
  // Simplest possible implementation; use a 3rd-party library if you
  // want the best possible speed and/or long stack traces.
  var PromiseShim = (function () {
    var setTimeout = globals.setTimeout;
    // some environments don't have setTimeout - no way to shim here.
    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') { return; }

    ES.IsPromise = function (promise) {
      if (!ES.TypeIsObject(promise)) {
        return false;
      }
      if (typeof promise._promise === 'undefined') {
        return false; // uninitialized, or missing our hidden field.
      }
      return true;
    };

    // "PromiseCapability" in the spec is what most promise implementations
    // call a "deferred".
    var PromiseCapability = function (C) {
      if (!ES.IsConstructor(C)) {
        throw new TypeError('Bad promise constructor');
      }
      var capability = this;
      var resolver = function (resolve, reject) {
        if (capability.resolve !== void 0 || capability.reject !== void 0) {
          throw new TypeError('Bad Promise implementation!');
        }
        capability.resolve = resolve;
        capability.reject = reject;
      };
      // Initialize fields to inform optimizers about the object shape.
      capability.resolve = void 0;
      capability.reject = void 0;
      capability.promise = new C(resolver);
      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
        throw new TypeError('Bad promise constructor');
      }
    };

    // find an appropriate setImmediate-alike
    var makeZeroTimeout;
    /*global window */
    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
      makeZeroTimeout = function () {
        // from http://dbaron.org/log/20100309-faster-timeouts
        var timeouts = [];
        var messageName = 'zero-timeout-message';
        var setZeroTimeout = function (fn) {
          _push(timeouts, fn);
          window.postMessage(messageName, '*');
        };
        var handleMessage = function (event) {
          if (event.source === window && event.data === messageName) {
            event.stopPropagation();
            if (timeouts.length === 0) { return; }
            var fn = _shift(timeouts);
            fn();
          }
        };
        window.addEventListener('message', handleMessage, true);
        return setZeroTimeout;
      };
    }
    var makePromiseAsap = function () {
      // An efficient task-scheduler based on a pre-existing Promise
      // implementation, which we can use even if we override the
      // global Promise below (in order to workaround bugs)
      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
      var P = globals.Promise;
      var pr = P && P.resolve && P.resolve();
      return pr && function (task) {
        return pr.then(task);
      };
    };
    /*global process */
    /* jscs:disable disallowMultiLineTernary */
    var enqueue = ES.IsCallable(globals.setImmediate) ?
      globals.setImmediate :
      typeof process === 'object' && process.nextTick ? process.nextTick :
      makePromiseAsap() ||
      (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() :
      function (task) { setTimeout(task, 0); }); // fallback
    /* jscs:enable disallowMultiLineTernary */

    // Constants for Promise implementation
    var PROMISE_IDENTITY = function (x) { return x; };
    var PROMISE_THROWER = function (e) { throw e; };
    var PROMISE_PENDING = 0;
    var PROMISE_FULFILLED = 1;
    var PROMISE_REJECTED = 2;
    // We store fulfill/reject handlers and capabilities in a single array.
    var PROMISE_FULFILL_OFFSET = 0;
    var PROMISE_REJECT_OFFSET = 1;
    var PROMISE_CAPABILITY_OFFSET = 2;
    // This is used in an optimization for chaining promises via then.
    var PROMISE_FAKE_CAPABILITY = {};

    var enqueuePromiseReactionJob = function (handler, capability, argument) {
      enqueue(function () {
        promiseReactionJob(handler, capability, argument);
      });
    };

    var promiseReactionJob = function (handler, promiseCapability, argument) {
      var handlerResult, f;
      if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
        // Fast case, when we don't actually need to chain through to a
        // (real) promiseCapability.
        return handler(argument);
      }
      try {
        handlerResult = handler(argument);
        f = promiseCapability.resolve;
      } catch (e) {
        handlerResult = e;
        f = promiseCapability.reject;
      }
      f(handlerResult);
    };

    var fulfillPromise = function (promise, value) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(
          _promise.fulfillReactionHandler0,
          _promise.reactionCapability0,
          value
        );
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(
              _promise[idx + PROMISE_FULFILL_OFFSET],
              _promise[idx + PROMISE_CAPABILITY_OFFSET],
              value
            );
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = value;
      _promise.state = PROMISE_FULFILLED;
      _promise.reactionLength = 0;
    };

    var rejectPromise = function (promise, reason) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(
          _promise.rejectReactionHandler0,
          _promise.reactionCapability0,
          reason
        );
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(
              _promise[idx + PROMISE_REJECT_OFFSET],
              _promise[idx + PROMISE_CAPABILITY_OFFSET],
              reason
            );
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = reason;
      _promise.state = PROMISE_REJECTED;
      _promise.reactionLength = 0;
    };

    var createResolvingFunctions = function (promise) {
      var alreadyResolved = false;
      var resolve = function (resolution) {
        var then;
        if (alreadyResolved) { return; }
        alreadyResolved = true;
        if (resolution === promise) {
          return rejectPromise(promise, new TypeError('Self resolution'));
        }
        if (!ES.TypeIsObject(resolution)) {
          return fulfillPromise(promise, resolution);
        }
        try {
          then = resolution.then;
        } catch (e) {
          return rejectPromise(promise, e);
        }
        if (!ES.IsCallable(then)) {
          return fulfillPromise(promise, resolution);
        }
        enqueue(function () {
          promiseResolveThenableJob(promise, resolution, then);
        });
      };
      var reject = function (reason) {
        if (alreadyResolved) { return; }
        alreadyResolved = true;
        return rejectPromise(promise, reason);
      };
      return { resolve: resolve, reject: reject };
    };

    var optimizedThen = function (then, thenable, resolve, reject) {
      // Optimization: since we discard the result, we can pass our
      // own then implementation a special hint to let it know it
      // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY
      // object is local to this implementation and unforgeable outside.)
      if (then === Promise$prototype$then) {
        _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
      } else {
        _call(then, thenable, resolve, reject);
      }
    };
    var promiseResolveThenableJob = function (promise, thenable, then) {
      var resolvingFunctions = createResolvingFunctions(promise);
      var resolve = resolvingFunctions.resolve;
      var reject = resolvingFunctions.reject;
      try {
        optimizedThen(then, thenable, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };

    var Promise$prototype, Promise$prototype$then;
    var Promise = (function () {
      var PromiseShim = function Promise(resolver) {
        if (!(this instanceof PromiseShim)) {
          throw new TypeError('Constructor Promise requires "new"');
        }
        if (this && this._promise) {
          throw new TypeError('Bad construction');
        }
        // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
        if (!ES.IsCallable(resolver)) {
          throw new TypeError('not a valid resolver');
        }
        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {
          _promise: {
            result: void 0,
            state: PROMISE_PENDING,
            // The first member of the "reactions" array is inlined here,
            // since most promises only have one reaction.
            // We've also exploded the 'reaction' object to inline the
            // "handler" and "capability" fields, since both fulfill and
            // reject reactions share the same capability.
            reactionLength: 0,
            fulfillReactionHandler0: void 0,
            rejectReactionHandler0: void 0,
            reactionCapability0: void 0
          }
        });
        var resolvingFunctions = createResolvingFunctions(promise);
        var reject = resolvingFunctions.reject;
        try {
          resolver(resolvingFunctions.resolve, reject);
        } catch (e) {
          reject(e);
        }
        return promise;
      };
      return PromiseShim;
    }());
    Promise$prototype = Promise.prototype;

    var _promiseAllResolver = function (index, values, capability, remaining) {
      var alreadyCalled = false;
      return function (x) {
        if (alreadyCalled) { return; }
        alreadyCalled = true;
        values[index] = x;
        if ((--remaining.count) === 0) {
          var resolve = capability.resolve;
          resolve(values); // call w/ this===undefined
        }
      };
    };

    var performPromiseAll = function (iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var values = [];
      var remaining = { count: 1 };
      var next, nextValue;
      var index = 0;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        values[index] = void 0;
        var nextPromise = C.resolve(nextValue);
        var resolveElement = _promiseAllResolver(
          index, values, resultCapability, remaining
        );
        remaining.count += 1;
        optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
        index += 1;
      }
      if ((--remaining.count) === 0) {
        var resolve = resultCapability.resolve;
        resolve(values); // call w/ this===undefined
      }
      return resultCapability.promise;
    };

    var performPromiseRace = function (iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var next, nextValue, nextPromise;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            // NOTE: If iterable has no items, resulting promise will never
            // resolve; see:
            // https://github.com/domenic/promises-unwrapping/issues/75
            // https://bugs.ecmascript.org/show_bug.cgi?id=2515
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        nextPromise = C.resolve(nextValue);
        optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
      }
      return resultCapability.promise;
    };

    defineProperties(Promise, {
      all: function all(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator, iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = { iterator: iterator, done: false };
          return performPromiseAll(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },

      race: function race(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator, iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = { iterator: iterator, done: false };
          return performPromiseRace(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },

      reject: function reject(reason) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        var capability = new PromiseCapability(C);
        var rejectFunc = capability.reject;
        rejectFunc(reason); // call with this===undefined
        return capability.promise;
      },

      resolve: function resolve(v) {
        // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        if (ES.IsPromise(v)) {
          var constructor = v.constructor;
          if (constructor === C) {
            return v;
          }
        }
        var capability = new PromiseCapability(C);
        var resolveFunc = capability.resolve;
        resolveFunc(v); // call with this===undefined
        return capability.promise;
      }
    });

    defineProperties(Promise$prototype, {
      'catch': function (onRejected) {
        return this.then(null, onRejected);
      },

      then: function then(onFulfilled, onRejected) {
        var promise = this;
        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
        var C = ES.SpeciesConstructor(promise, Promise);
        var resultCapability;
        var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
        if (returnValueIsIgnored && C === Promise) {
          resultCapability = PROMISE_FAKE_CAPABILITY;
        } else {
          resultCapability = new PromiseCapability(C);
        }
        // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
        // Note that we've split the 'reaction' object into its two
        // components, "capabilities" and "handler"
        // "capabilities" is always equal to `resultCapability`
        var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
        var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
        var _promise = promise._promise;
        var value;
        if (_promise.state === PROMISE_PENDING) {
          if (_promise.reactionLength === 0) {
            _promise.fulfillReactionHandler0 = fulfillReactionHandler;
            _promise.rejectReactionHandler0 = rejectReactionHandler;
            _promise.reactionCapability0 = resultCapability;
          } else {
            var idx = 3 * (_promise.reactionLength - 1);
            _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
            _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
            _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
          }
          _promise.reactionLength += 1;
        } else if (_promise.state === PROMISE_FULFILLED) {
          value = _promise.result;
          enqueuePromiseReactionJob(
            fulfillReactionHandler, resultCapability, value
          );
        } else if (_promise.state === PROMISE_REJECTED) {
          value = _promise.result;
          enqueuePromiseReactionJob(
            rejectReactionHandler, resultCapability, value
          );
        } else {
          throw new TypeError('unexpected Promise state');
        }
        return resultCapability.promise;
      }
    });
    // This helps the optimizer by ensuring that methods which take
    // capabilities aren't polymorphic.
    PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);
    Promise$prototype$then = Promise$prototype.then;

    return Promise;
  }());

  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
  if (globals.Promise) {
    delete globals.Promise.accept;
    delete globals.Promise.defer;
    delete globals.Promise.prototype.chain;
  }

  if (typeof PromiseShim === 'function') {
    // export the Promise constructor.
    defineProperties(globals, { Promise: PromiseShim });
    // In Chrome 33 (and thereabouts) Promise is defined, but the
    // implementation is buggy in a number of ways.  Let's check subclassing
    // support to see if we have a buggy implementation.
    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
      return S.resolve(42).then(function () {}) instanceof S;
    });
    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () {
      globals.Promise.reject(42).then(null, 5).then(null, noop);
    });
    var promiseRequiresObjectContext = throwsError(function () { globals.Promise.call(3, noop); });
    // Promise.resolve() was errata'ed late in the ES6 process.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
    //      https://code.google.com/p/v8/issues/detail?id=4161
    // It serves as a proxy for a number of other bugs in early Promise
    // implementations.
    var promiseResolveBroken = (function (Promise) {
      var p = Promise.resolve(5);
      p.constructor = {};
      var p2 = Promise.resolve(p);
      try {
        p2.then(null, noop).then(null, noop); // avoid "uncaught rejection" warnings in console
      } catch (e) {
        return true; // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314
      }
      return p === p2; // This *should* be false!
    }(globals.Promise));

    // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously
    var getsThenSynchronously = supportsDescriptors && (function () {
      var count = 0;
      var thenable = Object.defineProperty({}, 'then', { get: function () { count += 1; } });
      Promise.resolve(thenable);
      return count === 1;
    }());

    var BadResolverPromise = function BadResolverPromise(executor) {
      var p = new Promise(executor);
      executor(3, function () {});
      this.then = p.then;
      this.constructor = BadResolverPromise;
    };
    BadResolverPromise.prototype = Promise.prototype;
    BadResolverPromise.all = Promise.all;
    // Chrome Canary 49 (probably older too) has some implementation bugs
    var hasBadResolverPromise = valueOrFalseIfThrows(function () {
      return !!BadResolverPromise.all([1, 2]);
    });

    if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks ||
        !promiseRequiresObjectContext || promiseResolveBroken ||
        !getsThenSynchronously || hasBadResolverPromise) {
      /* globals Promise: true */
      /* eslint-disable no-undef, no-global-assign */
      /* jshint -W020 */
      Promise = PromiseShim;
      /* jshint +W020 */
      /* eslint-enable no-undef, no-global-assign */
      /* globals Promise: false */
      overrideNative(globals, 'Promise', PromiseShim);
    }
    if (Promise.all.length !== 1) {
      var origAll = Promise.all;
      overrideNative(Promise, 'all', function all(iterable) {
        return ES.Call(origAll, this, arguments);
      });
    }
    if (Promise.race.length !== 1) {
      var origRace = Promise.race;
      overrideNative(Promise, 'race', function race(iterable) {
        return ES.Call(origRace, this, arguments);
      });
    }
    if (Promise.resolve.length !== 1) {
      var origResolve = Promise.resolve;
      overrideNative(Promise, 'resolve', function resolve(x) {
        return ES.Call(origResolve, this, arguments);
      });
    }
    if (Promise.reject.length !== 1) {
      var origReject = Promise.reject;
      overrideNative(Promise, 'reject', function reject(r) {
        return ES.Call(origReject, this, arguments);
      });
    }
    ensureEnumerable(Promise, 'all');
    ensureEnumerable(Promise, 'race');
    ensureEnumerable(Promise, 'resolve');
    ensureEnumerable(Promise, 'reject');
    addDefaultSpecies(Promise);
  }

  // Map and Set require a true ES5 environment
  // Their fast path also requires that the environment preserve
  // property insertion order, which is not guaranteed by the spec.
  var testOrder = function (a) {
    var b = keys(_reduce(a, function (o, k) {
      o[k] = true;
      return o;
    }, {}));
    return a.join(':') === b.join(':');
  };
  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
  // some engines (eg, Chrome) only preserve insertion order for string keys
  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);

  if (supportsDescriptors) {

    var fastkey = function fastkey(key, skipInsertionOrderCheck) {
      if (!skipInsertionOrderCheck && !preservesInsertionOrder) {
        return null;
      }
      if (isNullOrUndefined(key)) {
        return '^' + ES.ToString(key);
      } else if (typeof key === 'string') {
        return '$' + key;
      } else if (typeof key === 'number') {
        // note that -0 will get coerced to "0" when used as a property key
        if (!preservesNumericInsertionOrder) {
          return 'n' + key;
        }
        return key;
      } else if (typeof key === 'boolean') {
        return 'b' + key;
      }
      return null;
    };

    var emptyObject = function emptyObject() {
      // accomodate some older not-quite-ES5 browsers
      return Object.create ? Object.create(null) : {};
    };

    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function (entry) {
          if (!ES.TypeIsObject(entry)) {
            throw new TypeError('Iterator value ' + entry + ' is not an entry object');
          }
          map.set(entry[0], entry[1]);
        });
      } else if (iterable instanceof MapConstructor) {
        _call(MapConstructor.prototype.forEach, iterable, function (value, key) {
          map.set(key, value);
        });
      } else {
        var iter, adder;
        if (!isNullOrUndefined(iterable)) {
          adder = map.set;
          if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) { break; }
            var nextItem = next.value;
            try {
              if (!ES.TypeIsObject(nextItem)) {
                throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
              }
              _call(adder, map, nextItem[0], nextItem[1]);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };
    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function (value) {
          set.add(value);
        });
      } else if (iterable instanceof SetConstructor) {
        _call(SetConstructor.prototype.forEach, iterable, function (value) {
          set.add(value);
        });
      } else {
        var iter, adder;
        if (!isNullOrUndefined(iterable)) {
          adder = set.add;
          if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) { break; }
            var nextValue = next.value;
            try {
              _call(adder, set, nextValue);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };

    var collectionShims = {
      Map: (function () {

        var empty = {};

        var MapEntry = function MapEntry(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
          this.prev = null;
        };

        MapEntry.prototype.isRemoved = function isRemoved() {
          return this.key === empty;
        };

        var isMap = function isMap(map) {
          return !!map._es6map;
        };

        var requireMapSlot = function requireMapSlot(map, method) {
          if (!ES.TypeIsObject(map) || !isMap(map)) {
            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
          }
        };

        var MapIterator = function MapIterator(map, kind) {
          requireMapSlot(map, '[[MapIterator]]');
          this.head = map._head;
          this.i = this.head;
          this.kind = kind;
        };

        MapIterator.prototype = {
          next: function next() {
            var i = this.i;
            var kind = this.kind;
            var head = this.head;
            if (typeof this.i === 'undefined') {
              return iteratorResult();
            }
            while (i.isRemoved() && i !== head) {
              // back up off of removed entries
              i = i.prev;
            }
            // advance to next unreturned element.
            var result;
            while (i.next !== head) {
              i = i.next;
              if (!i.isRemoved()) {
                if (kind === 'key') {
                  result = i.key;
                } else if (kind === 'value') {
                  result = i.value;
                } else {
                  result = [i.key, i.value];
                }
                this.i = i;
                return iteratorResult(result);
              }
            }
            // once the iterator is done, it is done forever.
            this.i = void 0;
            return iteratorResult();
          }
        };
        addIterator(MapIterator.prototype);

        var Map$prototype;
        var MapShim = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          if (this && this._es6map) {
            throw new TypeError('Bad construction');
          }
          var map = emulateES6construct(this, Map, Map$prototype, {
            _es6map: true,
            _head: null,
            _map: OrigMap ? new OrigMap() : null,
            _size: 0,
            _storage: emptyObject()
          });

          var head = new MapEntry(null, null);
          // circular doubly-linked list.
          /* eslint no-multi-assign: 1 */
          head.next = head.prev = head;
          map._head = head;

          // Optionally initialize map from iterable
          if (arguments.length > 0) {
            addIterableToMap(Map, map, arguments[0]);
          }
          return map;
        };
        Map$prototype = MapShim.prototype;

        Value.getter(Map$prototype, 'size', function () {
          if (typeof this._size === 'undefined') {
            throw new TypeError('size method called on incompatible Map');
          }
          return this._size;
        });

        defineProperties(Map$prototype, {
          get: function get(key) {
            requireMapSlot(this, 'get');
            var entry;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              entry = this._storage[fkey];
              if (entry) {
                return entry.value;
              } else {
                return;
              }
            }
            if (this._map) {
              // fast object key path
              entry = origMapGet.call(this._map, key);
              if (entry) {
                return entry.value;
              } else {
                return;
              }
            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return i.value;
              }
            }
          },

          has: function has(key) {
            requireMapSlot(this, 'has');
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              return typeof this._storage[fkey] !== 'undefined';
            }
            if (this._map) {
              // fast object key path
              return origMapHas.call(this._map, key);
            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return true;
              }
            }
            return false;
          },

          set: function set(key, value) {
            requireMapSlot(this, 'set');
            var head = this._head;
            var i = head;
            var entry;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] !== 'undefined') {
                this._storage[fkey].value = value;
                return this;
              } else {
                entry = this._storage[fkey] = new MapEntry(key, value); /* eslint no-multi-assign: 1 */
                i = head.prev;
                // fall through
              }
            } else if (this._map) {
              // fast object key path
              if (origMapHas.call(this._map, key)) {
                origMapGet.call(this._map, key).value = value;
              } else {
                entry = new MapEntry(key, value);
                origMapSet.call(this._map, key, entry);
                i = head.prev;
                // fall through
              }
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.value = value;
                return this;
              }
            }
            entry = entry || new MapEntry(key, value);
            if (ES.SameValue(-0, key)) {
              entry.key = +0; // coerce -0 to +0 in entry
            }
            entry.next = this._head;
            entry.prev = this._head.prev;
            entry.prev.next = entry;
            entry.next.prev = entry;
            this._size += 1;
            return this;
          },

          'delete': function (key) {
            requireMapSlot(this, 'delete');
            var head = this._head;
            var i = head;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              // fast O(1) path
              if (typeof this._storage[fkey] === 'undefined') {
                return false;
              }
              i = this._storage[fkey].prev;
              delete this._storage[fkey];
              // fall through
            } else if (this._map) {
              // fast object key path
              if (!origMapHas.call(this._map, key)) {
                return false;
              }
              i = origMapGet.call(this._map, key).prev;
              origMapDelete.call(this._map, key);
              // fall through
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.key = empty;
                i.value = empty;
                i.prev.next = i.next;
                i.next.prev = i.prev;
                this._size -= 1;
                return true;
              }
            }
            return false;
          },

          clear: function clear() {
             /* eslint no-multi-assign: 1 */
            requireMapSlot(this, 'clear');
            this._map = OrigMap ? new OrigMap() : null;
            this._size = 0;
            this._storage = emptyObject();
            var head = this._head;
            var i = head;
            var p = i.next;
            while ((i = p) !== head) {
              i.key = empty;
              i.value = empty;
              p = i.next;
              i.next = i.prev = head;
            }
            head.next = head.prev = head;
          },

          keys: function keys() {
            requireMapSlot(this, 'keys');
            return new MapIterator(this, 'key');
          },

          values: function values() {
            requireMapSlot(this, 'values');
            return new MapIterator(this, 'value');
          },

          entries: function entries() {
            requireMapSlot(this, 'entries');
            return new MapIterator(this, 'key+value');
          },

          forEach: function forEach(callback) {
            requireMapSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var it = this.entries();
            for (var entry = it.next(); !entry.done; entry = it.next()) {
              if (context) {
                _call(callback, context, entry.value[1], entry.value[0], this);
              } else {
                callback(entry.value[1], entry.value[0], this);
              }
            }
          }
        });
        addIterator(Map$prototype, Map$prototype.entries);

        return MapShim;
      }()),

      Set: (function () {
        var isSet = function isSet(set) {
          return set._es6set && typeof set._storage !== 'undefined';
        };
        var requireSetSlot = function requireSetSlot(set, method) {
          if (!ES.TypeIsObject(set) || !isSet(set)) {
            // https://github.com/paulmillr/es6-shim/issues/176
            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
          }
        };

        // Creating a Map is expensive.  To speed up the common case of
        // Sets containing only string or numeric keys, we use an object
        // as backing storage and lazily create a full Map only when
        // required.
        var Set$prototype;
        var SetShim = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          if (this && this._es6set) {
            throw new TypeError('Bad construction');
          }
          var set = emulateES6construct(this, Set, Set$prototype, {
            _es6set: true,
            '[[SetData]]': null,
            _storage: emptyObject()
          });
          if (!set._es6set) {
            throw new TypeError('bad set');
          }

          // Optionally initialize Set from iterable
          if (arguments.length > 0) {
            addIterableToSet(Set, set, arguments[0]);
          }
          return set;
        };
        Set$prototype = SetShim.prototype;

        var decodeKey = function (key) {
          var k = key;
          if (k === '^null') {
            return null;
          } else if (k === '^undefined') {
            return void 0;
          } else {
            var first = k.charAt(0);
            if (first === '$') {
              return _strSlice(k, 1);
            } else if (first === 'n') {
              return +_strSlice(k, 1);
            } else if (first === 'b') {
              return k === 'btrue';
            }
          }
          return +k;
        };
        // Switch from the object backing storage to a full Map.
        var ensureMap = function ensureMap(set) {
          if (!set['[[SetData]]']) {
            var m = new collectionShims.Map();
            set['[[SetData]]'] = m;
            _forEach(keys(set._storage), function (key) {
              var k = decodeKey(key);
              m.set(k, k);
            });
            set['[[SetData]]'] = m;
          }
          set._storage = null; // free old backing storage
        };

        Value.getter(SetShim.prototype, 'size', function () {
          requireSetSlot(this, 'size');
          if (this._storage) {
            return keys(this._storage).length;
          }
          ensureMap(this);
          return this['[[SetData]]'].size;
        });

        defineProperties(SetShim.prototype, {
          has: function has(key) {
            requireSetSlot(this, 'has');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              return !!this._storage[fkey];
            }
            ensureMap(this);
            return this['[[SetData]]'].has(key);
          },

          add: function add(key) {
            requireSetSlot(this, 'add');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              this._storage[fkey] = true;
              return this;
            }
            ensureMap(this);
            this['[[SetData]]'].set(key, key);
            return this;
          },

          'delete': function (key) {
            requireSetSlot(this, 'delete');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              var hasFKey = _hasOwnProperty(this._storage, fkey);
              return (delete this._storage[fkey]) && hasFKey;
            }
            ensureMap(this);
            return this['[[SetData]]']['delete'](key);
          },

          clear: function clear() {
            requireSetSlot(this, 'clear');
            if (this._storage) {
              this._storage = emptyObject();
            }
            if (this['[[SetData]]']) {
              this['[[SetData]]'].clear();
            }
          },

          values: function values() {
            requireSetSlot(this, 'values');
            ensureMap(this);
            return this['[[SetData]]'].values();
          },

          entries: function entries() {
            requireSetSlot(this, 'entries');
            ensureMap(this);
            return this['[[SetData]]'].entries();
          },

          forEach: function forEach(callback) {
            requireSetSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var entireSet = this;
            ensureMap(entireSet);
            this['[[SetData]]'].forEach(function (value, key) {
              if (context) {
                _call(callback, context, key, key, entireSet);
              } else {
                callback(key, key, entireSet);
              }
            });
          }
        });
        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
        addIterator(SetShim.prototype, SetShim.prototype.values);

        return SetShim;
      }())
    };

    if (globals.Map || globals.Set) {
      // Safari 8, for example, doesn't accept an iterable.
      var mapAcceptsArguments = valueOrFalseIfThrows(function () { return new Map([[1, 2]]).get(1) === 2; });
      if (!mapAcceptsArguments) {
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, globals.Map.prototype);
          return m;
        };
        globals.Map.prototype = create(OrigMap.prototype);
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMap);
      }
      var testMap = new Map();
      var mapUsesSameValueZero = (function () {
        // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
        var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
        m.set(-0, m);
        return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
      }());
      var mapSupportsChaining = testMap.set(1, 2) === testMap;
      if (!mapUsesSameValueZero || !mapSupportsChaining) {
        overrideNative(Map.prototype, 'set', function set(k, v) {
          _call(origMapSet, this, k === 0 ? 0 : k, v);
          return this;
        });
      }
      if (!mapUsesSameValueZero) {
        defineProperties(Map.prototype, {
          get: function get(k) {
            return _call(origMapGet, this, k === 0 ? 0 : k);
          },
          has: function has(k) {
            return _call(origMapHas, this, k === 0 ? 0 : k);
          }
        }, true);
        Value.preserveToString(Map.prototype.get, origMapGet);
        Value.preserveToString(Map.prototype.has, origMapHas);
      }
      var testSet = new Set();
      var setUsesSameValueZero = (function (s) {
        s['delete'](0);
        s.add(-0);
        return !s.has(0);
      }(testSet));
      var setSupportsChaining = testSet.add(1) === testSet;
      if (!setUsesSameValueZero || !setSupportsChaining) {
        var origSetAdd = Set.prototype.add;
        Set.prototype.add = function add(v) {
          _call(origSetAdd, this, v === 0 ? 0 : v);
          return this;
        };
        Value.preserveToString(Set.prototype.add, origSetAdd);
      }
      if (!setUsesSameValueZero) {
        var origSetHas = Set.prototype.has;
        Set.prototype.has = function has(v) {
          return _call(origSetHas, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype.has, origSetHas);
        var origSetDel = Set.prototype['delete'];
        Set.prototype['delete'] = function SetDelete(v) {
          return _call(origSetDel, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype['delete'], origSetDel);
      }
      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {
        var m = new M([]);
        // Firefox 32 is ok with the instantiating the subclass but will
        // throw when the map is used.
        m.set(42, 42);
        return m instanceof M;
      });
      // without Object.setPrototypeOf, subclassing is not possible
      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing;
      var mapRequiresNew = (function () {
        try {
          return !(globals.Map() instanceof globals.Map);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, Map.prototype);
          return m;
        };
        globals.Map.prototype = OrigMap.prototype;
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMap);
      }
      var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {
        var s = new S([]);
        s.add(42, 42);
        return s instanceof S;
      });
      // without Object.setPrototypeOf, subclassing is not possible
      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing;
      var setRequiresNew = (function () {
        try {
          return !(globals.Set() instanceof globals.Set);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
        var OrigSet = globals.Set;
        globals.Set = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          var s = new OrigSet();
          if (arguments.length > 0) {
            addIterableToSet(Set, s, arguments[0]);
          }
          delete s.constructor;
          Object.setPrototypeOf(s, Set.prototype);
          return s;
        };
        globals.Set.prototype = OrigSet.prototype;
        defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
        Value.preserveToString(globals.Set, OrigSet);
      }
      var newMap = new globals.Map();
      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {
        return newMap.keys().next().done;
      });
      /*
        - In Firefox < 23, Map#size is a function.
        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
        - In Firefox 24, Map and Set do not implement forEach
        - In Firefox 25 at least, Map and Set are callable without "new"
      */
      if (
        typeof globals.Map.prototype.clear !== 'function' ||
        new globals.Set().size !== 0 ||
        newMap.size !== 0 ||
        typeof globals.Map.prototype.keys !== 'function' ||
        typeof globals.Set.prototype.keys !== 'function' ||
        typeof globals.Map.prototype.forEach !== 'function' ||
        typeof globals.Set.prototype.forEach !== 'function' ||
        isCallableWithoutNew(globals.Map) ||
        isCallableWithoutNew(globals.Set) ||
        typeof newMap.keys().next !== 'function' || // Safari 8
        mapIterationThrowsStopIterator || // Firefox 25
        !mapSupportsSubclassing
      ) {
        defineProperties(globals, {
          Map: collectionShims.Map,
          Set: collectionShims.Set
        }, true);
      }

      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
        // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
      }

      // Shim incomplete iterator implementations.
      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));

      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
        // Microsoft Edge v0.11.10074.0 is missing a name on Set#has
        var anonymousSetHas = globals.Set.prototype.has;
        overrideNative(globals.Set.prototype, 'has', function has(key) {
          return _call(anonymousSetHas, this, key);
        });
      }
    }
    defineProperties(globals, collectionShims);
    addDefaultSpecies(globals.Map);
    addDefaultSpecies(globals.Set);
  }

  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
    if (!ES.TypeIsObject(target)) {
      throw new TypeError('target must be an object');
    }
  };

  // Some Reflect methods are basically the same as
  // those on the Object global, except that a TypeError is thrown if
  // target isn't an object. As well as returning a boolean indicating
  // the success of the operation.
  var ReflectShims = {
    // Apply method in a functional form.
    apply: function apply() {
      return ES.Call(ES.Call, null, arguments);
    },

    // New operator in a functional form.
    construct: function construct(constructor, args) {
      if (!ES.IsConstructor(constructor)) {
        throw new TypeError('First argument must be a constructor.');
      }
      var newTarget = arguments.length > 2 ? arguments[2] : constructor;
      if (!ES.IsConstructor(newTarget)) {
        throw new TypeError('new.target must be a constructor.');
      }
      return ES.Construct(constructor, args, newTarget, 'internal');
    },

    // When deleting a non-existent or configurable property,
    // true is returned.
    // When attempting to delete a non-configurable property,
    // it will return false.
    deleteProperty: function deleteProperty(target, key) {
      throwUnlessTargetIsObject(target);
      if (supportsDescriptors) {
        var desc = Object.getOwnPropertyDescriptor(target, key);

        if (desc && !desc.configurable) {
          return false;
        }
      }

      // Will return true.
      return delete target[key];
    },

    has: function has(target, key) {
      throwUnlessTargetIsObject(target);
      return key in target;
    }
  };

  if (Object.getOwnPropertyNames) {
    Object.assign(ReflectShims, {
      // Basically the result of calling the internal [[OwnPropertyKeys]].
      // Concatenating propertyNames and propertySymbols should do the trick.
      // This should continue to work together with a Symbol shim
      // which overrides Object.getOwnPropertyNames and implements
      // Object.getOwnPropertySymbols.
      ownKeys: function ownKeys(target) {
        throwUnlessTargetIsObject(target);
        var keys = Object.getOwnPropertyNames(target);

        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
          _pushApply(keys, Object.getOwnPropertySymbols(target));
        }

        return keys;
      }
    });
  }

  var callAndCatchException = function ConvertExceptionToBoolean(func) {
    return !throwsError(func);
  };

  if (Object.preventExtensions) {
    Object.assign(ReflectShims, {
      isExtensible: function isExtensible(target) {
        throwUnlessTargetIsObject(target);
        return Object.isExtensible(target);
      },
      preventExtensions: function preventExtensions(target) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          Object.preventExtensions(target);
        });
      }
    });
  }

  if (supportsDescriptors) {
    var internalGet = function get(target, key, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent === null) {
          return void 0;
        }

        return internalGet(parent, key, receiver);
      }

      if ('value' in desc) {
        return desc.value;
      }

      if (desc.get) {
        return ES.Call(desc.get, receiver);
      }

      return void 0;
    };

    var internalSet = function set(target, key, value, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);

      if (!desc) {
        var parent = Object.getPrototypeOf(target);

        if (parent !== null) {
          return internalSet(parent, key, value, receiver);
        }

        desc = {
          value: void 0,
          writable: true,
          enumerable: true,
          configurable: true
        };
      }

      if ('value' in desc) {
        if (!desc.writable) {
          return false;
        }

        if (!ES.TypeIsObject(receiver)) {
          return false;
        }

        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);

        if (existingDesc) {
          return Reflect.defineProperty(receiver, key, {
            value: value
          });
        } else {
          return Reflect.defineProperty(receiver, key, {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }

      if (desc.set) {
        _call(desc.set, receiver, value);
        return true;
      }

      return false;
    };

    Object.assign(ReflectShims, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function () {
          Object.defineProperty(target, propertyKey, attributes);
        });
      },

      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        throwUnlessTargetIsObject(target);
        return Object.getOwnPropertyDescriptor(target, propertyKey);
      },

      // Syntax in a functional form.
      get: function get(target, key) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 2 ? arguments[2] : target;

        return internalGet(target, key, receiver);
      },

      set: function set(target, key, value) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 3 ? arguments[3] : target;

        return internalSet(target, key, value, receiver);
      }
    });
  }

  if (Object.getPrototypeOf) {
    var objectDotGetPrototypeOf = Object.getPrototypeOf;
    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
      throwUnlessTargetIsObject(target);
      return objectDotGetPrototypeOf(target);
    };
  }

  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
    var willCreateCircularPrototype = function (object, lastProto) {
      var proto = lastProto;
      while (proto) {
        if (object === proto) {
          return true;
        }
        proto = ReflectShims.getPrototypeOf(proto);
      }
      return false;
    };

    Object.assign(ReflectShims, {
      // Sets the prototype of the given object.
      // Returns true on success, otherwise false.
      setPrototypeOf: function setPrototypeOf(object, proto) {
        throwUnlessTargetIsObject(object);
        if (proto !== null && !ES.TypeIsObject(proto)) {
          throw new TypeError('proto must be an object or null');
        }

        // If they already are the same, we're done.
        if (proto === Reflect.getPrototypeOf(object)) {
          return true;
        }

        // Cannot alter prototype if object not extensible.
        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
          return false;
        }

        // Ensure that we do not create a circular prototype chain.
        if (willCreateCircularPrototype(object, proto)) {
          return false;
        }

        Object.setPrototypeOf(object, proto);

        return true;
      }
    });
  }
  var defineOrOverrideReflectProperty = function (key, shim) {
    if (!ES.IsCallable(globals.Reflect[key])) {
      defineProperty(globals.Reflect, key, shim);
    } else {
      var acceptsPrimitives = valueOrFalseIfThrows(function () {
        globals.Reflect[key](1);
        globals.Reflect[key](NaN);
        globals.Reflect[key](true);
        return true;
      });
      if (acceptsPrimitives) {
        overrideNative(globals.Reflect, key, shim);
      }
    }
  };
  Object.keys(ReflectShims).forEach(function (key) {
    defineOrOverrideReflectProperty(key, ReflectShims[key]);
  });
  var originalReflectGetProto = globals.Reflect.getPrototypeOf;
  if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {
    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
      return _call(originalReflectGetProto, globals.Reflect, target);
    });
  }
  if (globals.Reflect.setPrototypeOf) {
    if (valueOrFalseIfThrows(function () {
      globals.Reflect.setPrototypeOf(1, {});
      return true;
    })) {
      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
    }
  }
  if (globals.Reflect.defineProperty) {
    if (!valueOrFalseIfThrows(function () {
      var basic = !globals.Reflect.defineProperty(1, 'test', { value: 1 });
      // "extensible" fails on Edge 0.12
      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
      return basic && extensible;
    })) {
      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
    }
  }
  if (globals.Reflect.construct) {
    if (!valueOrFalseIfThrows(function () {
      var F = function F() {};
      return globals.Reflect.construct(function () {}, [], F) instanceof F;
    })) {
      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
    }
  }

  if (String(new Date(NaN)) !== 'Invalid Date') {
    var dateToString = Date.prototype.toString;
    var shimmedDateToString = function toString() {
      var valueOf = +this;
      if (valueOf !== valueOf) {
        return 'Invalid Date';
      }
      return ES.Call(dateToString, this);
    };
    overrideNative(Date.prototype, 'toString', shimmedDateToString);
  }

  // Annex B HTML methods
  // http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-string.prototype-object
  var stringHTMLshims = {
    anchor: function anchor(name) { return ES.CreateHTML(this, 'a', 'name', name); },
    big: function big() { return ES.CreateHTML(this, 'big', '', ''); },
    blink: function blink() { return ES.CreateHTML(this, 'blink', '', ''); },
    bold: function bold() { return ES.CreateHTML(this, 'b', '', ''); },
    fixed: function fixed() { return ES.CreateHTML(this, 'tt', '', ''); },
    fontcolor: function fontcolor(color) { return ES.CreateHTML(this, 'font', 'color', color); },
    fontsize: function fontsize(size) { return ES.CreateHTML(this, 'font', 'size', size); },
    italics: function italics() { return ES.CreateHTML(this, 'i', '', ''); },
    link: function link(url) { return ES.CreateHTML(this, 'a', 'href', url); },
    small: function small() { return ES.CreateHTML(this, 'small', '', ''); },
    strike: function strike() { return ES.CreateHTML(this, 'strike', '', ''); },
    sub: function sub() { return ES.CreateHTML(this, 'sub', '', ''); },
    sup: function sub() { return ES.CreateHTML(this, 'sup', '', ''); }
  };
  _forEach(Object.keys(stringHTMLshims), function (key) {
    var method = String.prototype[key];
    var shouldOverwrite = false;
    if (ES.IsCallable(method)) {
      var output = _call(method, '', ' " ');
      var quotesCount = _concat([], output.match(/"/g)).length;
      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
    } else {
      shouldOverwrite = true;
    }
    if (shouldOverwrite) {
      overrideNative(String.prototype, key, stringHTMLshims[key]);
    }
  });

  var JSONstringifiesSymbols = (function () {
    // Microsoft Edge v0.12 stringifies Symbols incorrectly
    if (!hasSymbols) { return false; } // Symbols are not supported
    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
    if (!stringify) { return false; } // JSON.stringify is not supported
    if (typeof stringify(Symbol()) !== 'undefined') { return true; } // Symbols should become `undefined`
    if (stringify([Symbol()]) !== '[null]') { return true; } // Symbols in arrays should become `null`
    var obj = { a: Symbol() };
    obj[Symbol()] = true;
    if (stringify(obj) !== '{}') { return true; } // Symbol-valued keys *and* Symbol-valued properties should be omitted
    return false;
  }());
  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function () {
    // Chrome 45 throws on stringifying object symbols
    if (!hasSymbols) { return true; } // Symbols are not supported
    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';
  });
  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
    var origStringify = JSON.stringify;
    overrideNative(JSON, 'stringify', function stringify(value) {
      if (typeof value === 'symbol') { return; }
      var replacer;
      if (arguments.length > 1) {
        replacer = arguments[1];
      }
      var args = [value];
      if (!isArray(replacer)) {
        var replaceFn = ES.IsCallable(replacer) ? replacer : null;
        var wrappedReplacer = function (key, val) {
          var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
          if (typeof parsedValue !== 'symbol') {
            if (Type.symbol(parsedValue)) {
              return assignTo({})(parsedValue);
            } else {
              return parsedValue;
            }
          }
        };
        args.push(wrappedReplacer);
      } else {
        // create wrapped replacer that handles an array replacer?
        args.push(replacer);
      }
      if (arguments.length > 2) {
        args.push(arguments[2]);
      }
      return origStringify.apply(this, args);
    });
  }

  return globals;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129), __webpack_require__(13)))

/***/ }),
/* 129 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var core_1 = __webpack_require__(7);
var Classes = __webpack_require__(6);
var utils_1 = __webpack_require__(10);
var draggable_1 = __webpack_require__(19);
var cell_1 = __webpack_require__(25);
var EditableCell = (function (_super) {
    tslib_1.__extends(EditableCell, _super);
    function EditableCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleEdit = function () {
            _this.setState({ isEditing: true, dirtyValue: _this.state.savedValue });
        };
        _this.handleCancel = function (value) {
            // don't strictly need to clear the dirtyValue, but it's better hygiene
            _this.setState({ isEditing: false, dirtyValue: undefined });
            _this.invokeCallback(_this.props.onCancel, value);
        };
        _this.handleChange = function (value) {
            _this.setState({ dirtyValue: value });
            _this.invokeCallback(_this.props.onChange, value);
        };
        _this.handleConfirm = function (value) {
            _this.setState({ isEditing: false, savedValue: value, dirtyValue: undefined });
            _this.invokeCallback(_this.props.onConfirm, value);
        };
        _this.handleCellActivate = function (_event) {
            // Cancel edit of active cell when clicking away
            if (!_this.state.isEditing && document.activeElement instanceof HTMLElement && document.activeElement.blur) {
                document.activeElement.blur();
            }
            return true;
        };
        _this.handleCellDoubleClick = function (_event) {
            var cellElement = ReactDOM.findDOMNode(_this);
            if (cellElement == null) {
                return;
            }
            var focusable = cellElement.querySelector(".pt-editable-text");
            if (focusable.focus != null) {
                focusable.focus();
            }
        };
        _this.state = {
            isEditing: false,
            savedValue: props.value,
        };
        return _this;
    }
    EditableCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !utils_1.Utils.shallowCompareKeys(this.props, nextProps, { exclude: ["style"] })
            || !utils_1.Utils.shallowCompareKeys(this.state, nextState)
            || !utils_1.Utils.deepCompareKeys(this.props, nextProps, ["style"]);
    };
    EditableCell.prototype.componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value;
        this.setState({ savedValue: value, dirtyValue: value });
    };
    EditableCell.prototype.render = function () {
        var _a = this.props, onCancel = _a.onCancel, onChange = _a.onChange, onConfirm = _a.onConfirm, spreadableProps = tslib_1.__rest(_a, ["onCancel", "onChange", "onConfirm"]);
        var _b = this.state, isEditing = _b.isEditing, dirtyValue = _b.dirtyValue, savedValue = _b.savedValue;
        var interactive = spreadableProps.interactive || isEditing;
        return (React.createElement(cell_1.Cell, tslib_1.__assign({}, spreadableProps, { truncated: false, interactive: interactive }),
            React.createElement(draggable_1.Draggable, { onActivate: this.handleCellActivate, onDoubleClick: this.handleCellDoubleClick, preventDefault: !interactive, stopPropagation: interactive },
                React.createElement(core_1.EditableText, { className: Classes.TABLE_EDITABLE_NAME, intent: spreadableProps.intent, minWidth: null, onCancel: this.handleCancel, onChange: this.handleChange, onConfirm: this.handleConfirm, onEdit: this.handleEdit, placeholder: "", selectAllOnFocus: true, value: isEditing ? dirtyValue : savedValue }))));
    };
    EditableCell.prototype.invokeCallback = function (callback, value) {
        // pass through the row and column indices if they were provided as props by the consumer
        var _a = this.props, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex;
        core_1.Utils.safeInvoke(callback, value, rowIndex, columnIndex);
    };
    return EditableCell;
}(React.Component));
exports.EditableCell = EditableCell;



/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var truncatedFormat_1 = __webpack_require__(64);
var JSONFormat = (function (_super) {
    tslib_1.__extends(JSONFormat, _super);
    function JSONFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONFormat.prototype.render = function () {
        var _a = this.props, children = _a.children, omitQuotesOnStrings = _a.omitQuotesOnStrings, stringify = _a.stringify;
        var showPopover = this.props.showPopover;
        // always hide popover if value is nully
        var isNully = children == null;
        if (isNully) {
            showPopover = truncatedFormat_1.TruncatedPopoverMode.NEVER;
        }
        var className = classNames(this.props.className, (_b = {},
            _b[Classes.TABLE_NULL] = isNully,
            _b));
        var displayValue = "";
        if (omitQuotesOnStrings && typeof children === "string") {
            displayValue = children;
        }
        else {
            displayValue = stringify(children);
        }
        return (React.createElement(truncatedFormat_1.TruncatedFormat, tslib_1.__assign({}, this.props, { className: className, showPopover: showPopover }), displayValue));
        var _b;
    };
    return JSONFormat;
}(React.Component));
JSONFormat.defaultProps = {
    detectTruncation: true,
    omitQuotesOnStrings: true,
    showPopover: truncatedFormat_1.TruncatedPopoverMode.WHEN_TRUNCATED,
    stringify: function (obj) { return (JSON.stringify(obj, null, 2)); },
};
exports.JSONFormat = JSONFormat;



/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
/**
 * A React component that measures and rounds the size of its only child. This
 * is necessary due to a Chrome bug that prevents scrolling when the size is
 * changed to a fractional value. See this JSFiddle for a repro of the issue:
 * https://jsfiddle.net/2rmz7p1d/5/
 */
var RoundSize = (function (_super) {
    tslib_1.__extends(RoundSize, _super);
    function RoundSize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setInternalRef = function (ref) { return _this.internalElement = ref; };
        _this.setContainerRef = function (ref) { return _this.containerElement = ref; };
        return _this;
    }
    RoundSize.prototype.render = function () {
        return (React.createElement("div", { className: Classes.TABLE_ROUNDED_LAYOUT, ref: this.setContainerRef },
            React.createElement("div", { className: Classes.TABLE_NO_LAYOUT, ref: this.setInternalRef }, React.Children.only(this.props.children))));
    };
    RoundSize.prototype.componentDidMount = function () {
        this.copyRoundedSize();
    };
    RoundSize.prototype.componentDidUpdate = function () {
        this.copyRoundedSize();
    };
    RoundSize.prototype.copyRoundedSize = function () {
        if (this.internalElement == null || this.containerElement == null) {
            return;
        }
        // measure the size of the internal children
        var width = Math.round(this.internalElement.clientWidth) + "px";
        var height = Math.round(this.internalElement.clientHeight) + "px";
        // set the size of the container element with rounded values
        this.containerElement.style.width = width;
        this.containerElement.style.height = height;
    };
    return RoundSize;
}(React.Component));
exports.RoundSize = RoundSize;



/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(7);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var clipboard_1 = __webpack_require__(37);
var regions_1 = __webpack_require__(11);
var CopyCellsMenuItem = (function (_super) {
    tslib_1.__extends(CopyCellsMenuItem, _super);
    function CopyCellsMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, context = _a.context, getCellData = _a.getCellData, onCopy = _a.onCopy;
            var cells = context.getUniqueCells();
            var sparse = regions_1.Regions.sparseMapCells(cells, getCellData);
            var success = clipboard_1.Clipboard.copyCells(sparse);
            if (onCopy != null) {
                onCopy(success);
            }
        };
        return _this;
    }
    CopyCellsMenuItem.prototype.render = function () {
        return React.createElement(core_1.MenuItem, tslib_1.__assign({}, this.props, { onClick: this.handleClick }));
    };
    return CopyCellsMenuItem;
}(React.Component));
CopyCellsMenuItem = tslib_1.__decorate([
    PureRender
], CopyCellsMenuItem);
exports.CopyCellsMenuItem = CopyCellsMenuItem;



/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var regions_1 = __webpack_require__(11);
var MenuContext = (function () {
    function MenuContext(target, selectedRegions, numRows, numCols) {
        this.target = target;
        this.selectedRegions = selectedRegions;
        this.numRows = numRows;
        this.numCols = numCols;
        this.regions = regions_1.Regions.overlapsRegion(selectedRegions, target) ? selectedRegions : [target];
    }
    MenuContext.prototype.getTarget = function () {
        return this.target;
    };
    MenuContext.prototype.getSelectedRegions = function () {
        return this.selectedRegions;
    };
    MenuContext.prototype.getRegions = function () {
        return this.regions;
    };
    MenuContext.prototype.getUniqueCells = function () {
        return regions_1.Regions.enumerateUniqueCells(this.regions, this.numRows, this.numCols);
    };
    return MenuContext;
}());
exports.MenuContext = MenuContext;



/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(7);
var classNames = __webpack_require__(2);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var EditableName = (function (_super) {
    tslib_1.__extends(EditableName, _super);
    function EditableName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditableName.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, name = _a.name, onCancel = _a.onCancel, onChange = _a.onChange, onConfirm = _a.onConfirm;
        return (React.createElement(core_1.EditableText, { className: classNames(className, Classes.TABLE_EDITABLE_NAME), defaultValue: name, intent: intent, minWidth: null, onCancel: onCancel, onChange: onChange, onConfirm: onConfirm, placeholder: "", selectAllOnFocus: true }));
    };
    return EditableName;
}(React.Component));
EditableName = tslib_1.__decorate([
    PureRender
], EditableName);
exports.EditableName = EditableName;



/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(7);
var core_2 = __webpack_require__(7);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var column_1 = __webpack_require__(65);
var Classes = __webpack_require__(6);
var clipboard_1 = __webpack_require__(37);
var grid_1 = __webpack_require__(66);
var rect_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(10);
var columnHeader_1 = __webpack_require__(137);
var columnHeaderCell_1 = __webpack_require__(39);
var rowHeader_1 = __webpack_require__(141);
var resizeSensor_1 = __webpack_require__(142);
var guides_1 = __webpack_require__(143);
var regions_1 = __webpack_require__(144);
var locator_1 = __webpack_require__(145);
var regions_2 = __webpack_require__(11);
var tableBody_1 = __webpack_require__(146);
var Table = Table_1 = (function (_super) {
    tslib_1.__extends(Table, _super);
    function Table(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleCopy = function (e) {
            var grid = _this.grid;
            var _a = _this.props, getCellClipboardData = _a.getCellClipboardData, onCopy = _a.onCopy;
            var selectedRegions = _this.state.selectedRegions;
            if (getCellClipboardData == null) {
                return;
            }
            // prevent "real" copy from being called
            e.preventDefault();
            e.stopPropagation();
            var cells = regions_2.Regions.enumerateUniqueCells(selectedRegions, grid.numRows, grid.numCols);
            var sparse = regions_2.Regions.sparseMapCells(cells, getCellClipboardData);
            if (sparse != null) {
                var success = clipboard_1.Clipboard.copyCells(sparse);
                core_1.Utils.safeInvoke(onCopy, success);
            }
        };
        _this.selectAll = function () {
            var selectionHandler = _this.getEnabledSelectionHandler(regions_2.RegionCardinality.FULL_TABLE);
            // clicking on upper left hand corner sets selection to "all"
            // regardless of current selection state (clicking twice does not deselect table)
            selectionHandler([regions_2.Regions.table()]);
            // move the focus cell to the top left
            var newFocusedCellCoordinates = regions_2.Regions.getFocusCellCoordinatesFromRegion(regions_2.RegionCardinality.FULL_TABLE);
            var fullFocusCellCoordinates = {
                col: newFocusedCellCoordinates.col,
                focusSelectionIndex: 0,
                row: newFocusedCellCoordinates.row,
            };
            _this.handleFocus(fullFocusCellCoordinates);
        };
        _this.handleSelectAllHotkey = function (e) {
            // prevent "real" select all from happening as well
            e.preventDefault();
            e.stopPropagation();
            _this.selectAll();
        };
        _this.columnHeaderCellRenderer = function (columnIndex) {
            var props = _this.getColumnProps(columnIndex);
            var id = props.id, loadingOptions = props.loadingOptions, renderCell = props.renderCell, renderColumnHeader = props.renderColumnHeader, spreadableProps = tslib_1.__rest(props, ["id", "loadingOptions", "renderCell", "renderColumnHeader"]);
            var columnLoading = _this.hasLoadingOption(loadingOptions, regions_2.ColumnLoadingOption.HEADER);
            if (renderColumnHeader != null) {
                var columnHeader = renderColumnHeader(columnIndex);
                var columnHeaderLoading = columnHeader.props.loading;
                return React.cloneElement(columnHeader, {
                    loading: columnHeaderLoading != null ? columnHeaderLoading : columnLoading,
                });
            }
            var baseProps = tslib_1.__assign({ index: columnIndex, loading: columnLoading }, spreadableProps);
            if (props.name != null) {
                return React.createElement(columnHeaderCell_1.ColumnHeaderCell, tslib_1.__assign({}, baseProps));
            }
            else {
                return React.createElement(columnHeaderCell_1.ColumnHeaderCell, tslib_1.__assign({}, baseProps, { name: utils_1.Utils.toBase26Alpha(columnIndex) }));
            }
        };
        _this.bodyCellRenderer = function (rowIndex, columnIndex) {
            var columnProps = _this.getColumnProps(columnIndex);
            var cell = columnProps.renderCell(rowIndex, columnIndex);
            var cellLoading = cell.props.loading;
            var loading = cellLoading != null
                ? cellLoading
                : _this.hasLoadingOption(columnProps.loadingOptions, regions_2.ColumnLoadingOption.CELLS);
            return React.cloneElement(cell, tslib_1.__assign({}, columnProps, { loading: loading }));
        };
        _this.handleFocusMoveLeft = function (e) { return _this.handleFocusMove(e, "left"); };
        _this.handleFocusMoveLeftInternal = function (e) { return _this.handleFocusMoveInternal(e, "left"); };
        _this.handleFocusMoveRight = function (e) { return _this.handleFocusMove(e, "right"); };
        _this.handleFocusMoveRightInternal = function (e) { return _this.handleFocusMoveInternal(e, "right"); };
        _this.handleFocusMoveUp = function (e) { return _this.handleFocusMove(e, "up"); };
        _this.handleFocusMoveUpInternal = function (e) { return _this.handleFocusMoveInternal(e, "up"); };
        _this.handleFocusMoveDown = function (e) { return _this.handleFocusMove(e, "down"); };
        _this.handleFocusMoveDownInternal = function (e) { return _this.handleFocusMoveInternal(e, "down"); };
        _this.styleBodyRegion = function (region) {
            var cardinality = regions_2.Regions.getRegionCardinality(region);
            var style = _this.grid.getRegionStyle(region);
            switch (cardinality) {
                case regions_2.RegionCardinality.CELLS:
                    return style;
                case regions_2.RegionCardinality.FULL_COLUMNS:
                    style.top = "-1px";
                    return style;
                case regions_2.RegionCardinality.FULL_ROWS:
                    style.left = "-1px";
                    return style;
                case regions_2.RegionCardinality.FULL_TABLE:
                    style.left = "-1px";
                    style.top = "-1px";
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.styleMenuRegion = function (region) {
            var grid = _this.grid;
            var viewportRect = _this.state.viewportRect;
            if (viewportRect == null) {
                return {};
            }
            var cardinality = regions_2.Regions.getRegionCardinality(region);
            var style = grid.getRegionStyle(region);
            switch (cardinality) {
                case regions_2.RegionCardinality.FULL_TABLE:
                    style.right = "0px";
                    style.bottom = "0px";
                    style.top = "0px";
                    style.left = "0px";
                    style.borderBottom = "none";
                    style.borderRight = "none";
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.styleColumnHeaderRegion = function (region) {
            var grid = _this.grid;
            var viewportRect = _this.state.viewportRect;
            if (viewportRect == null) {
                return {};
            }
            var cardinality = regions_2.Regions.getRegionCardinality(region);
            var style = grid.getRegionStyle(region);
            switch (cardinality) {
                case regions_2.RegionCardinality.FULL_TABLE:
                    style.left = "-1px";
                    style.borderLeft = "none";
                    style.bottom = "-1px";
                    style.transform = "translate3d(" + -viewportRect.left + "px, 0, 0)";
                    return style;
                case regions_2.RegionCardinality.FULL_COLUMNS:
                    style.bottom = "-1px";
                    style.transform = "translate3d(" + -viewportRect.left + "px, 0, 0)";
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.styleRowHeaderRegion = function (region) {
            var grid = _this.grid;
            var viewportRect = _this.state.viewportRect;
            if (viewportRect == null) {
                return {};
            }
            var cardinality = regions_2.Regions.getRegionCardinality(region);
            var style = grid.getRegionStyle(region);
            switch (cardinality) {
                case regions_2.RegionCardinality.FULL_TABLE:
                    style.top = "-1px";
                    style.borderTop = "none";
                    style.right = "-1px";
                    style.transform = "translate3d(0, " + -viewportRect.top + "px, 0)";
                    return style;
                case regions_2.RegionCardinality.FULL_ROWS:
                    style.right = "-1px";
                    style.transform = "translate3d(0, " + -viewportRect.top + "px, 0)";
                    return style;
                default:
                    return { display: "none" };
            }
        };
        _this.handleColumnWidthChanged = function (columnIndex, width) {
            var selectedRegions = _this.state.selectedRegions;
            var columnWidths = _this.state.columnWidths.slice();
            if (regions_2.Regions.hasFullTable(selectedRegions)) {
                for (var col = 0; col < columnWidths.length; col++) {
                    columnWidths[col] = width;
                }
            }
            if (regions_2.Regions.hasFullColumn(selectedRegions, columnIndex)) {
                regions_2.Regions.eachUniqueFullColumn(selectedRegions, function (col) {
                    columnWidths[col] = width;
                });
            }
            else {
                columnWidths[columnIndex] = width;
            }
            _this.invalidateGrid();
            _this.setState({ columnWidths: columnWidths });
            var onColumnWidthChanged = _this.props.onColumnWidthChanged;
            if (onColumnWidthChanged != null) {
                onColumnWidthChanged(columnIndex, width);
            }
        };
        _this.handleRowHeightChanged = function (rowIndex, height) {
            var selectedRegions = _this.state.selectedRegions;
            var rowHeights = _this.state.rowHeights.slice();
            if (regions_2.Regions.hasFullTable(selectedRegions)) {
                for (var row = 0; row < rowHeights.length; row++) {
                    rowHeights[row] = height;
                }
            }
            if (regions_2.Regions.hasFullRow(selectedRegions, rowIndex)) {
                regions_2.Regions.eachUniqueFullRow(selectedRegions, function (row) {
                    rowHeights[row] = height;
                });
            }
            else {
                rowHeights[rowIndex] = height;
            }
            _this.invalidateGrid();
            _this.setState({ rowHeights: rowHeights });
            var onRowHeightChanged = _this.props.onRowHeightChanged;
            if (onRowHeightChanged != null) {
                onRowHeightChanged(rowIndex, height);
            }
        };
        _this.handleRootScroll = function (_event) {
            // Bug #211 - Native browser text selection events can cause the root
            // element to scroll even though it has a overflow:hidden style. The
            // only viable solution to this is to unscroll the element after the
            // browser scrolls it.
            if (_this.rootTableElement != null) {
                _this.rootTableElement.scrollLeft = 0;
                _this.rootTableElement.scrollTop = 0;
            }
        };
        _this.handleBodyScroll = function (event) {
            // Prevent the event from propagating to avoid a resize event on the
            // resize sensor.
            event.stopPropagation();
            if (_this.locator != null && !_this.state.isLayoutLocked) {
                var viewportRect = _this.locator.getViewportRect();
                _this.updateViewportRect(viewportRect);
            }
        };
        _this.handleColumnResizeGuide = function (verticalGuides) {
            _this.setState({ verticalGuides: verticalGuides });
        };
        _this.handleRowResizeGuide = function (horizontalGuides) {
            _this.setState({ horizontalGuides: horizontalGuides });
        };
        _this.clearSelection = function (_selectedRegions) {
            _this.handleSelection([]);
        };
        // no good way to call arrow-key keyboard events from tests
        /* istanbul ignore next */
        _this.handleFocusMove = function (e, direction) {
            e.preventDefault();
            e.stopPropagation();
            var focusedCell = _this.state.focusedCell;
            if (focusedCell == null) {
                // halt early if we have a selectedRegionTransform or something else in play that nixes
                // the focused cell.
                return;
            }
            var newFocusedCell = { col: focusedCell.col, row: focusedCell.row, focusSelectionIndex: 0 };
            var grid = _this.grid;
            switch (direction) {
                case "up":
                    newFocusedCell.row -= 1;
                    break;
                case "down":
                    newFocusedCell.row += 1;
                    break;
                case "left":
                    newFocusedCell.col -= 1;
                    break;
                case "right":
                    newFocusedCell.col += 1;
                    break;
                default:
                    break;
            }
            if (newFocusedCell.row < 0 || newFocusedCell.row >= grid.numRows ||
                newFocusedCell.col < 0 || newFocusedCell.col >= grid.numCols) {
                return;
            }
            // change selection to match new focus cell location
            var newSelectionRegions = [regions_2.Regions.cell(newFocusedCell.row, newFocusedCell.col)];
            _this.handleSelection(newSelectionRegions);
            _this.handleFocus(newFocusedCell);
            // keep the focused cell in view
            _this.scrollBodyToFocusedCell(newFocusedCell);
        };
        // no good way to call arrow-key keyboard events from tests
        /* istanbul ignore next */
        _this.handleFocusMoveInternal = function (e, direction) {
            e.preventDefault();
            e.stopPropagation();
            var _a = _this.state, focusedCell = _a.focusedCell, selectedRegions = _a.selectedRegions;
            var grid = _this.grid;
            if (focusedCell == null) {
                // halt early if we have a selectedRegionTransform or something else in play that nixes
                // the focused cell.
                return;
            }
            var newFocusedCell = {
                col: focusedCell.col,
                focusSelectionIndex: focusedCell.focusSelectionIndex,
                row: focusedCell.row,
            };
            // if we're not in any particular focus cell region, and one exists, go to the first cell of the first one
            if (focusedCell.focusSelectionIndex == null && selectedRegions.length > 0) {
                var focusCellRegion = regions_2.Regions.getCellRegionFromRegion(selectedRegions[0], grid.numRows, grid.numCols);
                newFocusedCell = {
                    col: focusCellRegion.cols[0],
                    focusSelectionIndex: 0,
                    row: focusCellRegion.rows[0],
                };
            }
            else {
                if (selectedRegions.length === 0) {
                    _this.handleFocusMove(e, direction);
                    return;
                }
                var focusCellRegion = regions_2.Regions.getCellRegionFromRegion(selectedRegions[focusedCell.focusSelectionIndex], grid.numRows, grid.numCols);
                if (focusCellRegion.cols[0] === focusCellRegion.cols[1]
                    && focusCellRegion.rows[0] === focusCellRegion.rows[1]
                    && selectedRegions.length === 1) {
                    _this.handleFocusMove(e, direction);
                    return;
                }
                switch (direction) {
                    case "up":
                        newFocusedCell = _this.moveFocusCell("row", "col", true, newFocusedCell, focusCellRegion);
                        break;
                    case "left":
                        newFocusedCell = _this.moveFocusCell("col", "row", true, newFocusedCell, focusCellRegion);
                        break;
                    case "down":
                        newFocusedCell = _this.moveFocusCell("row", "col", false, newFocusedCell, focusCellRegion);
                        break;
                    case "right":
                        newFocusedCell = _this.moveFocusCell("col", "row", false, newFocusedCell, focusCellRegion);
                        break;
                    default:
                        break;
                }
            }
            if (newFocusedCell.row < 0 || newFocusedCell.row >= grid.numRows ||
                newFocusedCell.col < 0 || newFocusedCell.col >= grid.numCols) {
                return;
            }
            _this.handleFocus(newFocusedCell);
            // keep the focused cell in view
            _this.scrollBodyToFocusedCell(newFocusedCell);
        };
        _this.scrollBodyToFocusedCell = function (focusedCell) {
            var row = focusedCell.row, col = focusedCell.col;
            var viewportRect = _this.state.viewportRect;
            // sort keys in normal CSS position order (per the trusty TRBL/"trouble" acronym)
            // tslint:disable:object-literal-sort-keys
            var viewportBounds = {
                top: viewportRect.top,
                right: viewportRect.left + viewportRect.width,
                bottom: viewportRect.top + viewportRect.height,
                left: viewportRect.left,
            };
            var focusedCellBounds = {
                top: _this.grid.getCumulativeHeightBefore(row),
                right: _this.grid.getCumulativeWidthAt(col),
                bottom: _this.grid.getCumulativeHeightAt(row),
                left: _this.grid.getCumulativeWidthBefore(col),
            };
            // tslint:enable:object-literal-sort-keys
            var focusedCellWidth = focusedCellBounds.right - focusedCellBounds.left;
            var focusedCellHeight = focusedCellBounds.bottom - focusedCellBounds.top;
            var isFocusedCellWiderThanViewport = focusedCellWidth > viewportRect.width;
            var isFocusedCellTallerThanViewport = focusedCellHeight > viewportRect.height;
            var nextScrollTop = viewportRect.top;
            var nextScrollLeft = viewportRect.left;
            // keep the top end of an overly tall focused cell in view when moving left and right
            // (without this OR check, the body seesaws to fit the top end, then the bottom end, etc.)
            if (focusedCellBounds.top < viewportBounds.top || isFocusedCellTallerThanViewport) {
                // scroll up (minus one pixel to avoid clipping the focused-cell border)
                nextScrollTop = Math.max(0, focusedCellBounds.top - 1);
            }
            else if (focusedCellBounds.bottom > viewportBounds.bottom) {
                // scroll down
                var scrollDelta = focusedCellBounds.bottom - viewportBounds.bottom;
                nextScrollTop = viewportBounds.top + scrollDelta;
            }
            // keep the left end of an overly wide focused cell in view when moving up and down
            if (focusedCellBounds.left < viewportBounds.left || isFocusedCellWiderThanViewport) {
                // scroll left (again minus one additional pixel)
                nextScrollLeft = Math.max(0, focusedCellBounds.left - 1);
            }
            else if (focusedCellBounds.right > viewportBounds.right) {
                // scroll right
                var scrollDelta = focusedCellBounds.right - viewportBounds.right;
                nextScrollLeft = viewportBounds.left + scrollDelta;
            }
            _this.syncViewportPosition(nextScrollLeft, nextScrollTop);
        };
        _this.handleFocus = function (focusedCell) {
            if (!_this.props.enableFocus) {
                // don't set focus state if focus is not allowed
                return;
            }
            // only set focused cell state if not specified in props
            if (_this.props.focusedCell == null) {
                _this.setState({ focusedCell: focusedCell });
            }
            core_1.Utils.safeInvoke(_this.props.onFocus, focusedCell);
        };
        _this.handleSelection = function (selectedRegions) {
            // only set selectedRegions state if not specified in props
            if (_this.props.selectedRegions == null) {
                _this.setState({ selectedRegions: selectedRegions });
            }
            var onSelection = _this.props.onSelection;
            if (onSelection != null) {
                onSelection(selectedRegions);
            }
        };
        _this.handleColumnsReordering = function (oldIndex, newIndex, length) {
            var guideIndex = utils_1.Utils.reorderedIndexToGuideIndex(oldIndex, newIndex, length);
            var leftOffset = _this.grid.getCumulativeWidthBefore(guideIndex);
            _this.setState({ isReordering: true, verticalGuides: [leftOffset] });
        };
        _this.handleColumnsReordered = function (oldIndex, newIndex, length) {
            _this.setState({ isReordering: false, verticalGuides: undefined });
            core_1.Utils.safeInvoke(_this.props.onColumnsReordered, oldIndex, newIndex, length);
        };
        _this.handleRowsReordering = function (oldIndex, newIndex, length) {
            var guideIndex = utils_1.Utils.reorderedIndexToGuideIndex(oldIndex, newIndex, length);
            var topOffset = _this.grid.getCumulativeHeightBefore(guideIndex);
            _this.setState({ isReordering: true, horizontalGuides: [topOffset] });
        };
        _this.handleRowsReordered = function (oldIndex, newIndex, length) {
            _this.setState({ isReordering: false, horizontalGuides: undefined });
            core_1.Utils.safeInvoke(_this.props.onRowsReordered, oldIndex, newIndex, length);
        };
        _this.handleLayoutLock = function (isLayoutLocked) {
            if (isLayoutLocked === void 0) { isLayoutLocked = false; }
            _this.setState({ isLayoutLocked: isLayoutLocked });
        };
        _this.hasLoadingOption = function (loadingOptions, loadingOption) {
            if (loadingOptions == null) {
                return undefined;
            }
            return loadingOptions.indexOf(loadingOption) >= 0;
        };
        _this.updateViewportRect = function (nextViewportRect) {
            _this.setState({ viewportRect: nextViewportRect });
            _this.invokeOnVisibleCellsChangeCallback(nextViewportRect);
        };
        _this.setBodyRef = function (ref) { return _this.bodyElement = ref; };
        _this.setMenuRef = function (ref) { return _this.menuElement = ref; };
        _this.setRootTableRef = function (ref) { return _this.rootTableElement = ref; };
        _this.setRowHeaderRef = function (ref) { return _this.rowHeaderElement = ref; };
        var _a = _this.props, defaultRowHeight = _a.defaultRowHeight, defaultColumnWidth = _a.defaultColumnWidth, numRows = _a.numRows, columnWidths = _a.columnWidths, rowHeights = _a.rowHeights, children = _a.children;
        _this.childrenArray = React.Children.toArray(children);
        _this.columnIdToIndex = Table_1.createColumnIdIndex(_this.childrenArray);
        // Create height/width arrays using the lengths from props and
        // children, the default values from props, and finally any sparse
        // arrays passed into props.
        var newColumnWidths = _this.childrenArray.map(function () { return defaultColumnWidth; });
        newColumnWidths = utils_1.Utils.assignSparseValues(newColumnWidths, columnWidths);
        var newRowHeights = utils_1.Utils.times(numRows, function () { return defaultRowHeight; });
        newRowHeights = utils_1.Utils.assignSparseValues(newRowHeights, rowHeights);
        var selectedRegions = (props.selectedRegions == null) ? [] : props.selectedRegions;
        var focusedCell;
        if (props.enableFocus) {
            if (props.focusedCell != null) {
                focusedCell = props.focusedCell;
            }
            else {
                focusedCell = { col: 0, row: 0, focusSelectionIndex: 0 };
            }
        }
        _this.state = {
            columnWidths: newColumnWidths,
            focusedCell: focusedCell,
            isLayoutLocked: false,
            isReordering: false,
            rowHeights: newRowHeights,
            selectedRegions: selectedRegions,
        };
        return _this;
    }
    Table.createColumnIdIndex = function (children) {
        var columnIdToIndex = {};
        for (var i = 0; i < children.length; i++) {
            var key = children[i].props.id;
            if (key != null) {
                columnIdToIndex[String(key)] = i;
            }
        }
        return columnIdToIndex;
    };
    Table.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var propKeysBlacklist = { exclude: Table_1.SHALLOW_COMPARE_PROP_KEYS_BLACKLIST };
        var stateKeysBlacklist = { exclude: Table_1.SHALLOW_COMPARE_STATE_KEYS_BLACKLIST };
        return !utils_1.Utils.shallowCompareKeys(this.props, nextProps, propKeysBlacklist)
            || !utils_1.Utils.shallowCompareKeys(this.state, nextState, stateKeysBlacklist)
            || !utils_1.Utils.deepCompareKeys(this.props, nextProps, ["selectedRegions"])
            || !utils_1.Utils.deepCompareKeys(this.state, nextState, ["selectedRegions"]);
    };
    Table.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var defaultRowHeight = nextProps.defaultRowHeight, defaultColumnWidth = nextProps.defaultColumnWidth, columnWidths = nextProps.columnWidths, enableFocus = nextProps.enableFocus, focusedCell = nextProps.focusedCell, rowHeights = nextProps.rowHeights, children = nextProps.children, numRows = nextProps.numRows, selectedRegions = nextProps.selectedRegions, selectionModes = nextProps.selectionModes;
        var newChildArray = React.Children.toArray(children);
        // Try to maintain widths of columns by looking up the width of the
        // column that had the same `ID` prop. If none is found, use the
        // previous width at the same index.
        var previousColumnWidths = newChildArray.map(function (child, index) {
            var mappedIndex = _this.columnIdToIndex[child.props.id];
            return _this.state.columnWidths[mappedIndex != null ? mappedIndex : index];
        });
        // Make sure the width/height arrays have the correct length, but keep
        // as many existing widths/heights when possible. Also, apply the
        // sparse width/heights from props.
        var newColumnWidths = this.state.columnWidths;
        newColumnWidths = utils_1.Utils.arrayOfLength(newColumnWidths, newChildArray.length, defaultColumnWidth);
        newColumnWidths = utils_1.Utils.assignSparseValues(newColumnWidths, previousColumnWidths);
        newColumnWidths = utils_1.Utils.assignSparseValues(newColumnWidths, columnWidths);
        var newRowHeights = this.state.rowHeights;
        newRowHeights = utils_1.Utils.arrayOfLength(newRowHeights, numRows, defaultRowHeight);
        newRowHeights = utils_1.Utils.assignSparseValues(newRowHeights, rowHeights);
        var numCols = newColumnWidths.length;
        var newSelectedRegions = selectedRegions;
        if (selectedRegions == null) {
            // if we're in uncontrolled mode, filter out all selected regions that don't
            // fit in the current new table dimensions
            newSelectedRegions = this.state.selectedRegions.filter(function (region) {
                var regionCardinality = regions_2.Regions.getRegionCardinality(region);
                var isSelectionModeEnabled = selectionModes.indexOf(regionCardinality) >= 0;
                return isSelectionModeEnabled && regions_2.Regions.isRegionValidForTable(region, numRows, numCols);
            });
        }
        var newFocusedCellCoordinates = (focusedCell == null)
            ? this.state.focusedCell
            : focusedCell;
        this.childrenArray = newChildArray;
        this.columnIdToIndex = Table_1.createColumnIdIndex(this.childrenArray);
        this.invalidateGrid();
        this.setState({
            columnWidths: newColumnWidths,
            focusedCell: enableFocus ? newFocusedCellCoordinates : undefined,
            rowHeights: newRowHeights,
            selectedRegions: newSelectedRegions,
        });
    };
    Table.prototype.render = function () {
        var _a = this.props, className = _a.className, isRowHeaderShown = _a.isRowHeaderShown;
        this.validateGrid();
        var classes = classNames(Classes.TABLE_CONTAINER, (_b = {},
            _b[Classes.TABLE_REORDERING] = this.state.isReordering,
            _b), className);
        return (React.createElement("div", { className: classes, ref: this.setRootTableRef, onScroll: this.handleRootScroll },
            React.createElement("div", { className: Classes.TABLE_TOP_CONTAINER },
                isRowHeaderShown ? this.renderMenu() : undefined,
                this.renderColumnHeader()),
            React.createElement("div", { className: Classes.TABLE_BOTTOM_CONTAINER },
                isRowHeaderShown ? this.renderRowHeader() : undefined,
                this.renderBody()),
            React.createElement("div", { className: classNames(Classes.TABLE_OVERLAY_LAYER, "bp-table-reordering-cursor-overlay") })));
        var _b;
    };
    Table.prototype.renderHotkeys = function () {
        var hotkeys = [this.maybeRenderCopyHotkey(), this.maybeRenderSelectAllHotkey(), this.maybeRenderFocusHotkeys()];
        return (React.createElement(core_2.Hotkeys, null, hotkeys.filter(function (element) { return element !== undefined; })));
    };
    /**
     * Resize all rows in the table to the height of the tallest visible cell in the specified columns.
     * If no indices are provided, default to using the tallest visible cell from all columns in view.
     */
    Table.prototype.resizeRowsByTallestCell = function (columnIndices) {
        var _this = this;
        var tallest = 0;
        if (columnIndices == null) {
            // Consider all columns currently in viewport
            var viewportColumnIndices = this.grid.getColumnIndicesInRect(this.state.viewportRect);
            for (var col = viewportColumnIndices.columnIndexStart; col <= viewportColumnIndices.columnIndexEnd; col++) {
                tallest = Math.max(tallest, this.locator.getTallestVisibleCellInColumn(col));
            }
        }
        else {
            var columnIndicesArray = Array.isArray(columnIndices) ? columnIndices : [columnIndices];
            var tallestByColumns = columnIndicesArray.map(function (col) { return _this.locator.getTallestVisibleCellInColumn(col); });
            tallest = Math.max.apply(Math, tallestByColumns);
        }
        var rowHeights = Array(this.state.rowHeights.length).fill(tallest);
        this.invalidateGrid();
        this.setState({ rowHeights: rowHeights });
    };
    /**
     * When the component mounts, the HTML Element refs will be available, so
     * we constructor the Locator, which queries the elements' bounding
     * ClientRects.
     */
    Table.prototype.componentDidMount = function () {
        var _this = this;
        this.validateGrid();
        this.locator = new locator_1.Locator(this.rootTableElement, this.bodyElement, this.grid);
        this.updateViewportRect(this.locator.getViewportRect());
        this.resizeSensorDetach = resizeSensor_1.ResizeSensor.attach(this.rootTableElement, function () {
            if (!_this.state.isLayoutLocked) {
                _this.updateViewportRect(_this.locator.getViewportRect());
            }
        });
        this.syncMenuWidth();
    };
    Table.prototype.componentWillUnmount = function () {
        if (this.resizeSensorDetach != null) {
            this.resizeSensorDetach();
            delete this.resizeSensorDetach;
        }
    };
    Table.prototype.componentDidUpdate = function () {
        if (this.locator != null) {
            this.validateGrid();
            this.locator.setGrid(this.grid);
        }
        this.syncMenuWidth();
        this.maybeScrollTableIntoView();
    };
    Table.prototype.validateProps = function (props) {
        var WARNING_MESSAGE = "Children of Table must be Columns";
        React.Children.forEach(props.children, function (child) {
            // save as a variable so that union type narrowing works
            var cType = child.type;
            if (typeof cType === "string") {
                console.warn(WARNING_MESSAGE);
            }
            else {
                var isColumn = cType.prototype === column_1.Column.prototype || column_1.Column.prototype.isPrototypeOf(cType);
                if (!isColumn) {
                    console.warn(WARNING_MESSAGE);
                }
            }
        });
    };
    Table.prototype.moveFocusCell = function (primaryAxis, secondaryAxis, isUpOrLeft, newFocusedCell, focusCellRegion) {
        var grid = this.grid;
        var selectedRegions = this.state.selectedRegions;
        var primaryAxisPlural = primaryAxis === "row" ? "rows" : "cols";
        var secondaryAxisPlural = secondaryAxis === "row" ? "rows" : "cols";
        var movementDirection = isUpOrLeft ? -1 : +1;
        var regionIntervalIndex = isUpOrLeft ? 1 : 0;
        // try moving the cell in the direction along the primary axis
        newFocusedCell[primaryAxis] += movementDirection;
        var isPrimaryIndexOutOfBounds = isUpOrLeft
            ? newFocusedCell[primaryAxis] < focusCellRegion[primaryAxisPlural][0]
            : newFocusedCell[primaryAxis] > focusCellRegion[primaryAxisPlural][1];
        if (isPrimaryIndexOutOfBounds) {
            // if we moved outside the bounds of selection region,
            // move to the start (or end) of the primary axis, and move one along the secondary
            newFocusedCell[primaryAxis] = focusCellRegion[primaryAxisPlural][regionIntervalIndex];
            newFocusedCell[secondaryAxis] += movementDirection;
            var isSecondaryIndexOutOfBounds = isUpOrLeft
                ? newFocusedCell[secondaryAxis] < focusCellRegion[secondaryAxisPlural][0]
                : newFocusedCell[secondaryAxis] > focusCellRegion[secondaryAxisPlural][1];
            if (isSecondaryIndexOutOfBounds) {
                // if moving along the secondary also moves us outside
                // go to the start (or end) of the next (or previous region)
                // (note that if there's only one region you'll be moving to the opposite corner, which is fine)
                var newFocusCellSelectionIndex = newFocusedCell.focusSelectionIndex + movementDirection;
                // newFocusCellSelectionIndex should be one more (or less), unless we need to wrap around
                if (isUpOrLeft
                    ? newFocusCellSelectionIndex < 0
                    : newFocusCellSelectionIndex >= selectedRegions.length) {
                    newFocusCellSelectionIndex = isUpOrLeft
                        ? selectedRegions.length - 1
                        : 0;
                }
                var newFocusCellRegion = regions_2.Regions.getCellRegionFromRegion(selectedRegions[newFocusCellSelectionIndex], grid.numRows, grid.numCols);
                newFocusedCell = {
                    col: newFocusCellRegion.cols[regionIntervalIndex],
                    focusSelectionIndex: newFocusCellSelectionIndex,
                    row: newFocusCellRegion.rows[regionIntervalIndex],
                };
            }
        }
        return newFocusedCell;
    };
    Table.prototype.renderMenu = function () {
        var classes = classNames(Classes.TABLE_MENU, (_a = {},
            _a[Classes.TABLE_SELECTION_ENABLED] = this.isSelectionModeEnabled(regions_2.RegionCardinality.FULL_TABLE),
            _a));
        return (React.createElement("div", { className: classes, ref: this.setMenuRef, onClick: this.selectAll }, this.maybeRenderRegions(this.styleMenuRegion)));
        var _a;
    };
    Table.prototype.syncMenuWidth = function () {
        var _a = this, menuElement = _a.menuElement, rowHeaderElement = _a.rowHeaderElement;
        if (menuElement != null && rowHeaderElement != null) {
            var width = rowHeaderElement.getBoundingClientRect().width;
            menuElement.style.width = width + "px";
        }
    };
    Table.prototype.maybeScrollTableIntoView = function () {
        var viewportRect = this.state.viewportRect;
        var tableBottom = this.grid.getCumulativeHeightAt(this.grid.numRows - 1);
        var tableRight = this.grid.getCumulativeWidthAt(this.grid.numCols - 1);
        var nextScrollTop = (tableBottom < viewportRect.top + viewportRect.height)
            ? Math.max(0, tableBottom - viewportRect.height)
            : viewportRect.top;
        var nextScrollLeft = (tableRight < viewportRect.left + viewportRect.width)
            ? Math.max(0, tableRight - viewportRect.width)
            : viewportRect.left;
        this.syncViewportPosition(nextScrollLeft, nextScrollTop);
    };
    Table.prototype.getColumnProps = function (columnIndex) {
        var column = this.childrenArray[columnIndex];
        return column.props;
    };
    Table.prototype.renderColumnHeader = function () {
        var _a = this, grid = _a.grid, locator = _a.locator;
        var _b = this.state, selectedRegions = _b.selectedRegions, viewportRect = _b.viewportRect;
        var _c = this.props, allowMultipleSelection = _c.allowMultipleSelection, fillBodyWithGhostCells = _c.fillBodyWithGhostCells, isColumnReorderable = _c.isColumnReorderable, isColumnResizable = _c.isColumnResizable, loadingOptions = _c.loadingOptions, maxColumnWidth = _c.maxColumnWidth, minColumnWidth = _c.minColumnWidth, selectedRegionTransform = _c.selectedRegionTransform;
        var classes = classNames(Classes.TABLE_COLUMN_HEADERS, (_d = {},
            _d[Classes.TABLE_SELECTION_ENABLED] = this.isSelectionModeEnabled(regions_2.RegionCardinality.FULL_COLUMNS),
            _d));
        var columnIndices = grid.getColumnIndicesInRect(viewportRect, fillBodyWithGhostCells);
        return (React.createElement("div", { className: classes },
            React.createElement(columnHeader_1.ColumnHeader, tslib_1.__assign({ allowMultipleSelection: allowMultipleSelection, cellRenderer: this.columnHeaderCellRenderer, grid: grid, isReorderable: isColumnReorderable, isResizable: isColumnResizable, loading: this.hasLoadingOption(loadingOptions, regions_2.TableLoadingOption.COLUMN_HEADERS), locator: locator, maxColumnWidth: maxColumnWidth, minColumnWidth: minColumnWidth, onColumnWidthChanged: this.handleColumnWidthChanged, onFocus: this.handleFocus, onLayoutLock: this.handleLayoutLock, onReordered: this.handleColumnsReordered, onReordering: this.handleColumnsReordering, onResizeGuide: this.handleColumnResizeGuide, onSelection: this.getEnabledSelectionHandler(regions_2.RegionCardinality.FULL_COLUMNS), selectedRegions: selectedRegions, selectedRegionTransform: selectedRegionTransform, viewportRect: viewportRect }, columnIndices), this.props.children),
            this.maybeRenderRegions(this.styleColumnHeaderRegion)));
        var _d;
    };
    Table.prototype.renderRowHeader = function () {
        var _a = this, grid = _a.grid, locator = _a.locator;
        var _b = this.state, selectedRegions = _b.selectedRegions, viewportRect = _b.viewportRect;
        var _c = this.props, allowMultipleSelection = _c.allowMultipleSelection, fillBodyWithGhostCells = _c.fillBodyWithGhostCells, isRowReorderable = _c.isRowReorderable, isRowResizable = _c.isRowResizable, loadingOptions = _c.loadingOptions, maxRowHeight = _c.maxRowHeight, minRowHeight = _c.minRowHeight, renderRowHeader = _c.renderRowHeader, selectedRegionTransform = _c.selectedRegionTransform;
        var classes = classNames(Classes.TABLE_ROW_HEADERS, (_d = {},
            _d[Classes.TABLE_SELECTION_ENABLED] = this.isSelectionModeEnabled(regions_2.RegionCardinality.FULL_ROWS),
            _d));
        var rowIndices = grid.getRowIndicesInRect(viewportRect, fillBodyWithGhostCells);
        return (React.createElement("div", { className: classes, ref: this.setRowHeaderRef },
            React.createElement(rowHeader_1.RowHeader, tslib_1.__assign({ allowMultipleSelection: allowMultipleSelection, grid: grid, locator: locator, isReorderable: isRowReorderable, isResizable: isRowResizable, loading: this.hasLoadingOption(loadingOptions, regions_2.TableLoadingOption.ROW_HEADERS), maxRowHeight: maxRowHeight, minRowHeight: minRowHeight, onFocus: this.handleFocus, onLayoutLock: this.handleLayoutLock, onResizeGuide: this.handleRowResizeGuide, onReordered: this.handleRowsReordered, onReordering: this.handleRowsReordering, onRowHeightChanged: this.handleRowHeightChanged, onSelection: this.getEnabledSelectionHandler(regions_2.RegionCardinality.FULL_ROWS), renderRowHeader: renderRowHeader, selectedRegions: selectedRegions, selectedRegionTransform: selectedRegionTransform, viewportRect: viewportRect }, rowIndices)),
            this.maybeRenderRegions(this.styleRowHeaderRegion)));
        var _d;
    };
    Table.prototype.renderBody = function () {
        var _a = this, grid = _a.grid, locator = _a.locator;
        var _b = this.props, allowMultipleSelection = _b.allowMultipleSelection, fillBodyWithGhostCells = _b.fillBodyWithGhostCells, loadingOptions = _b.loadingOptions, renderBodyContextMenu = _b.renderBodyContextMenu, selectedRegionTransform = _b.selectedRegionTransform;
        var _c = this.state, selectedRegions = _c.selectedRegions, viewportRect = _c.viewportRect, verticalGuides = _c.verticalGuides, horizontalGuides = _c.horizontalGuides;
        var style = grid.getRect().sizeStyle();
        var rowIndices = grid.getRowIndicesInRect(viewportRect, fillBodyWithGhostCells);
        var columnIndices = grid.getColumnIndicesInRect(viewportRect, fillBodyWithGhostCells);
        var noVerticalScroll = fillBodyWithGhostCells &&
            grid.isGhostIndex(rowIndices.rowIndexEnd, 0) &&
            viewportRect != null && viewportRect.top === 0 ||
            this.hasLoadingOption(loadingOptions, regions_2.TableLoadingOption.ROW_HEADERS);
        var noHorizontalScroll = fillBodyWithGhostCells &&
            grid.isGhostIndex(0, columnIndices.columnIndexEnd) &&
            viewportRect != null && viewportRect.left === 0 ||
            this.hasLoadingOption(loadingOptions, regions_2.TableLoadingOption.COLUMN_HEADERS);
        // disable scroll for ghost cells
        var classes = classNames(Classes.TABLE_BODY, (_d = {},
            _d[Classes.TABLE_NO_HORIZONTAL_SCROLL] = noHorizontalScroll,
            _d[Classes.TABLE_NO_VERTICAL_SCROLL] = noVerticalScroll,
            _d[Classes.TABLE_SELECTION_ENABLED] = this.isSelectionModeEnabled(regions_2.RegionCardinality.CELLS),
            _d));
        return (React.createElement("div", { className: classes, onScroll: this.handleBodyScroll, ref: this.setBodyRef },
            React.createElement("div", { className: Classes.TABLE_BODY_SCROLL_CLIENT, style: style },
                React.createElement(tableBody_1.TableBody, tslib_1.__assign({ allowMultipleSelection: allowMultipleSelection, cellRenderer: this.bodyCellRenderer, grid: grid, loading: this.hasLoadingOption(loadingOptions, regions_2.TableLoadingOption.CELLS), locator: locator, onFocus: this.handleFocus, onSelection: this.getEnabledSelectionHandler(regions_2.RegionCardinality.CELLS), renderBodyContextMenu: renderBodyContextMenu, selectedRegions: selectedRegions, selectedRegionTransform: selectedRegionTransform, viewportRect: viewportRect }, rowIndices, columnIndices)),
                this.maybeRenderRegions(this.styleBodyRegion),
                React.createElement(guides_1.GuideLayer, { className: Classes.TABLE_RESIZE_GUIDES, verticalGuides: verticalGuides, horizontalGuides: horizontalGuides }))));
        var _d;
    };
    Table.prototype.isGuidesShowing = function () {
        return this.state.verticalGuides != null || this.state.horizontalGuides != null;
    };
    Table.prototype.isSelectionModeEnabled = function (selectionMode) {
        return this.props.selectionModes.indexOf(selectionMode) >= 0;
    };
    Table.prototype.getEnabledSelectionHandler = function (selectionMode) {
        if (!this.isSelectionModeEnabled(selectionMode)) {
            // If the selection mode isn't enabled, return a callback that
            // will clear the selection. For example, if row selection is
            // disabled, clicking on the row header will clear the table's
            // selection. If all selection modes are enabled, clicking on the
            // same region twice will clear the selection.
            return this.clearSelection;
        }
        else {
            return this.handleSelection;
        }
    };
    Table.prototype.invalidateGrid = function () {
        this.grid = null;
    };
    Table.prototype.validateGrid = function () {
        if (this.grid == null) {
            var _a = this.props, defaultRowHeight = _a.defaultRowHeight, defaultColumnWidth = _a.defaultColumnWidth;
            var _b = this.state, rowHeights = _b.rowHeights, columnWidths = _b.columnWidths;
            this.grid = new grid_1.Grid(rowHeights, columnWidths, grid_1.Grid.DEFAULT_BLEED, defaultRowHeight, defaultColumnWidth);
            this.invokeOnVisibleCellsChangeCallback(this.state.viewportRect);
        }
    };
    /**
     * Renders a `RegionLayer`, applying styles to the regions using the
     * supplied `IRegionStyler`. `RegionLayer` is a `PureRender` component, so
     * the `IRegionStyler` should be a new instance on every render if we
     * intend to redraw the region layer.
     */
    Table.prototype.maybeRenderRegions = function (getRegionStyle) {
        if (this.isGuidesShowing() && !this.state.isReordering) {
            // we want to show guides *and* the selection styles when reordering rows or columns
            return undefined;
        }
        var regionGroups = regions_2.Regions.joinStyledRegionGroups(this.state.selectedRegions, this.props.styledRegionGroups, this.state.focusedCell);
        return regionGroups.map(function (regionGroup, index) {
            var regionStyles = regionGroup.regions.map(getRegionStyle);
            return (React.createElement(regions_1.RegionLayer, { className: classNames(regionGroup.className), key: index, regions: regionGroup.regions, regionStyles: regionStyles }));
        });
    };
    Table.prototype.maybeRenderCopyHotkey = function () {
        var getCellClipboardData = this.props.getCellClipboardData;
        if (getCellClipboardData != null) {
            return (React.createElement(core_2.Hotkey, { key: "copy-hotkey", label: "Copy selected table cells", group: "Table", combo: "mod+c", onKeyDown: this.handleCopy }));
        }
        else {
            return undefined;
        }
    };
    Table.prototype.maybeRenderFocusHotkeys = function () {
        var enableFocus = this.props.enableFocus;
        if (enableFocus != null) {
            return [
                React.createElement(core_2.Hotkey, { key: "move left", label: "Move focus cell left", group: "Table", combo: "left", onKeyDown: this.handleFocusMoveLeft }),
                React.createElement(core_2.Hotkey, { key: "move right", label: "Move focus cell right", group: "Table", combo: "right", onKeyDown: this.handleFocusMoveRight }),
                React.createElement(core_2.Hotkey, { key: "move up", label: "Move focus cell up", group: "Table", combo: "up", onKeyDown: this.handleFocusMoveUp }),
                React.createElement(core_2.Hotkey, { key: "move down", label: "Move focus cell down", group: "Table", combo: "down", onKeyDown: this.handleFocusMoveDown }),
                React.createElement(core_2.Hotkey, { key: "move tab", label: "Move focus cell tab", group: "Table", combo: "tab", onKeyDown: this.handleFocusMoveRightInternal }),
                React.createElement(core_2.Hotkey, { key: "move shift-tab", label: "Move focus cell shift tab", group: "Table", combo: "shift+tab", onKeyDown: this.handleFocusMoveLeftInternal }),
                React.createElement(core_2.Hotkey, { key: "move enter", label: "Move focus cell enter", group: "Table", combo: "enter", onKeyDown: this.handleFocusMoveDownInternal }),
                React.createElement(core_2.Hotkey, { key: "move shift-enter", label: "Move focus cell shift enter", group: "Table", combo: "shift+enter", onKeyDown: this.handleFocusMoveUpInternal }),
            ];
        }
        else {
            return [];
        }
    };
    Table.prototype.maybeRenderSelectAllHotkey = function () {
        if (this.isSelectionModeEnabled(regions_2.RegionCardinality.FULL_TABLE)) {
            return (React.createElement(core_2.Hotkey, { key: "select-all-hotkey", label: "Select all", group: "Table", combo: "mod+a", onKeyDown: this.handleSelectAllHotkey }));
        }
        else {
            return undefined;
        }
    };
    Table.prototype.syncViewportPosition = function (nextScrollLeft, nextScrollTop) {
        var viewportRect = this.state.viewportRect;
        var didScrollTopChange = nextScrollTop !== viewportRect.top;
        var didScrollLeftChange = nextScrollLeft !== viewportRect.left;
        if (didScrollTopChange || didScrollLeftChange) {
            // we need to modify the body element explicitly for the viewport to shift
            if (didScrollTopChange) {
                this.bodyElement.scrollTop = nextScrollTop;
            }
            if (didScrollLeftChange) {
                this.bodyElement.scrollLeft = nextScrollLeft;
            }
            var nextViewportRect = new rect_1.Rect(nextScrollLeft, nextScrollTop, viewportRect.width, viewportRect.height);
            this.updateViewportRect(nextViewportRect);
        }
    };
    Table.prototype.invokeOnVisibleCellsChangeCallback = function (viewportRect) {
        var columnIndices = this.grid.getColumnIndicesInRect(viewportRect);
        var rowIndices = this.grid.getRowIndicesInRect(viewportRect);
        core_1.Utils.safeInvoke(this.props.onVisibleCellsChange, rowIndices, columnIndices);
    };
    return Table;
}(core_1.AbstractComponent));
Table.defaultProps = {
    allowMultipleSelection: true,
    defaultColumnWidth: 150,
    defaultRowHeight: 20,
    enableFocus: false,
    fillBodyWithGhostCells: false,
    isRowHeaderShown: true,
    loadingOptions: [],
    minColumnWidth: 50,
    minRowHeight: 20,
    numRows: 0,
    renderRowHeader: rowHeader_1.renderDefaultRowHeader,
    selectionModes: regions_2.SelectionModes.ALL,
};
// these blacklists are identical, but we still need two definitions due to the different typings
Table.SHALLOW_COMPARE_PROP_KEYS_BLACKLIST = [
    "selectedRegions",
];
Table.SHALLOW_COMPARE_STATE_KEYS_BLACKLIST = [
    "selectedRegions",
];
Table = Table_1 = tslib_1.__decorate([
    core_2.HotkeysTarget
], Table);
exports.Table = Table;
var Table_1;



/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var index_1 = __webpack_require__(36);
var resizeHandle_1 = __webpack_require__(26);
var regions_1 = __webpack_require__(11);
var columnHeaderCell_1 = __webpack_require__(39);
var header_1 = __webpack_require__(71);
var ColumnHeader = (function (_super) {
    tslib_1.__extends(ColumnHeader, _super);
    function ColumnHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapCells = function (cells) {
            var _a = _this.props, grid = _a.grid, viewportRect = _a.viewportRect, columnIndexStart = _a.columnIndexStart;
            // always set width so that the layout can push out the element unless it overflows.
            var style = {
                width: grid.getRect().width + "px",
            };
            // use CSS translation to offset the cells
            if (viewportRect != null) {
                style.transform = "translate3d(" + (grid.getColumnRect(columnIndexStart).left - viewportRect.left) + "px, 0, 0)";
            }
            var classes = classNames(Classes.TABLE_THEAD, Classes.TABLE_COLUMN_HEADER_TR, (_b = {},
                _b[Classes.TABLE_DRAGGABLE] = (_this.props.onSelection != null),
                _b));
            return (React.createElement("div", { style: style, className: classes }, cells));
            var _b;
        };
        _this.convertPointToColumn = function (clientXOrY, useMidpoint) {
            var locator = _this.props.locator;
            return locator != null ? locator.convertPointToColumn(clientXOrY, useMidpoint) : null;
        };
        _this.getCellExtremaClasses = function (index, endIndex) {
            return _this.props.grid.getExtremaClasses(0, index, 1, endIndex);
        };
        _this.getColumnWidth = function (index) {
            return _this.props.grid.getColumnRect(index).width;
        };
        _this.getDragCoordinate = function (clientCoords) {
            return clientCoords[0]; // x-coordinate
        };
        _this.getMouseCoordinate = function (event) {
            return event.clientX;
        };
        _this.handleResizeEnd = function (index, size) {
            _this.props.onResizeGuide(null);
            _this.props.onColumnWidthChanged(index, size);
        };
        _this.handleResizeDoubleClick = function (index) {
            var _a = _this.props, minColumnWidth = _a.minColumnWidth, maxColumnWidth = _a.maxColumnWidth;
            var width = _this.props.locator.getWidestVisibleCellInColumn(index);
            var clampedWidth = index_1.Utils.clamp(width, minColumnWidth, maxColumnWidth);
            _this.props.onResizeGuide(null);
            _this.props.onColumnWidthChanged(index, clampedWidth);
        };
        _this.handleSizeChanged = function (index, size) {
            var rect = _this.props.grid.getColumnRect(index);
            _this.props.onResizeGuide([rect.left + size]);
        };
        _this.isCellSelected = function (index) {
            return regions_1.Regions.hasFullColumn(_this.props.selectedRegions, index);
        };
        _this.isGhostIndex = function (index) {
            return _this.props.grid.isGhostIndex(-1, index);
        };
        _this.renderGhostCell = function (index, extremaClasses) {
            var _a = _this.props, grid = _a.grid, loading = _a.loading;
            var rect = grid.getGhostCellRect(0, index);
            var style = {
                flexBasis: rect.width + "px",
                width: rect.width + "px",
            };
            return (React.createElement(columnHeaderCell_1.ColumnHeaderCell, { className: classNames(extremaClasses), index: index, key: Classes.columnIndexClass(index), loading: loading, style: style }));
        };
        _this.toRegion = function (index1, index2) {
            return regions_1.Regions.column(index1, index2);
        };
        _this.isSelectedRegionRelevant = function (selectedRegion) {
            var regionCardinality = regions_1.Regions.getRegionCardinality(selectedRegion);
            return regionCardinality === regions_1.RegionCardinality.FULL_COLUMNS
                || regionCardinality === regions_1.RegionCardinality.FULL_TABLE;
        };
        return _this;
    }
    ColumnHeader.prototype.shouldComponentUpdate = function (nextProps) {
        return header_1.shouldHeaderComponentUpdate(this.props, nextProps, this.isSelectedRegionRelevant);
    };
    ColumnHeader.prototype.render = function () {
        var _a = this.props, 
        // from IColumnHeaderProps
        cellRenderer = _a.cellRenderer, onColumnWidthChanged = _a.onColumnWidthChanged, 
        // from IColumnWidths
        minColumnWidth = _a.minColumnWidth, maxColumnWidth = _a.maxColumnWidth, defaultColumnWidth = _a.defaultColumnWidth, 
        // from IColumnIndices
        columnIndexStart = _a.columnIndexStart, columnIndexEnd = _a.columnIndexEnd, 
        // from IHeaderProps
        spreadableProps = tslib_1.__rest(_a, ["cellRenderer", "onColumnWidthChanged", "minColumnWidth", "maxColumnWidth", "defaultColumnWidth", "columnIndexStart", "columnIndexEnd"]);
        return (React.createElement(header_1.Header, tslib_1.__assign({ convertPointToIndex: this.convertPointToColumn, endIndex: this.props.columnIndexEnd, fullRegionCardinality: regions_1.RegionCardinality.FULL_COLUMNS, getCellExtremaClasses: this.getCellExtremaClasses, getCellIndexClass: Classes.columnCellIndexClass, getCellSize: this.getColumnWidth, getDragCoordinate: this.getDragCoordinate, getIndexClass: Classes.columnIndexClass, getMouseCoordinate: this.getMouseCoordinate, handleResizeDoubleClick: this.handleResizeDoubleClick, handleResizeEnd: this.handleResizeEnd, handleSizeChanged: this.handleSizeChanged, headerCellIsReorderablePropName: "isColumnReorderable", headerCellIsSelectedPropName: "isColumnSelected", isCellSelected: this.isCellSelected, isGhostIndex: this.isGhostIndex, maxSize: this.props.maxColumnWidth, minSize: this.props.minColumnWidth, renderGhostCell: this.renderGhostCell, renderHeaderCell: this.props.cellRenderer, resizeOrientation: resizeHandle_1.Orientation.VERTICAL, startIndex: this.props.columnIndexStart, toRegion: this.toRegion, wrapCells: this.wrapCells }, spreadableProps)));
    };
    return ColumnHeader;
}(React.Component));
ColumnHeader.defaultProps = {
    isReorderable: false,
    isResizable: true,
    loading: false,
};
exports.ColumnHeader = ColumnHeader;



/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Event name for `postMessage`
 */
var MESSAGE_EVENT_DATA = "blueprint-table-post-message";
/**
 * Object that holds state for managing idle callbacks
 */
var IDLE_STATE = {
    callbacks: [],
    triggered: false,
};
var handleIdle = function (event) {
    if (event.source !== window || event.data !== MESSAGE_EVENT_DATA) {
        return;
    }
    IDLE_STATE.triggered = false;
    var callback = null;
    if (IDLE_STATE.callbacks.length > 0) {
        callback = IDLE_STATE.callbacks.shift();
    }
    if (IDLE_STATE.callbacks.length > 0) {
        triggerIdleFrame();
    }
    // finally, invoke the callback. exceptions will be propagated
    if (callback) {
        callback();
    }
};
// check for window since we might be in a headless server environment
if (typeof window !== "undefined") {
    if (window.addEventListener != null) {
        window.addEventListener("message", handleIdle, false);
    }
}
var triggerIdleFrame = function () {
    if (IDLE_STATE.triggered) {
        return;
    }
    IDLE_STATE.triggered = true;
    /**
     * This is the magic that will wait for the browser to be "idle" before
     * invoking the callback.
     *
     * First, we use nested calls to `requestAnimationFrame` which will cause
     * the inner callback to be invoked on the NEXT FRAME.
     *
     * Then, we call to `postMessage` to invoke the `handleIdle` method only
     * once the current stack frame is empty.
     *
     * With this approach, the idle callback will be invoked at most once per
     * frame and only after the stack frame is empty.
     */
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            postMessage(MESSAGE_EVENT_DATA, "*");
        });
    });
};
/**
 * Invokes the provided callback on the next available frame after the stack
 * frame is empty.
 *
 * At most one callback per frame is invoked, and the callback may be delayed
 * multiple frames until the page is idle.
 *
 * TODO: return a token from this method that allows you to cancel the callback
 * (otherwise the callback list may increase without bound).
 */
exports.requestIdleCallback = function (callback) {
    IDLE_STATE.callbacks.push(callback);
    triggerIdleFrame();
};



/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var utils_1 = __webpack_require__(10);
var draggable_1 = __webpack_require__(19);
var regions_1 = __webpack_require__(11);
var DragReorderable = (function (_super) {
    tslib_1.__extends(DragReorderable, _super);
    function DragReorderable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleActivate = function (event) {
            if (!utils_1.Utils.isLeftClick(event) || _this.props.disabled) {
                return false;
            }
            var region = _this.props.locateClick(event);
            if (!regions_1.Regions.isValid(region)) {
                return false;
            }
            var cardinality = regions_1.Regions.getRegionCardinality(region);
            var isColumnHeader = cardinality === regions_1.RegionCardinality.FULL_COLUMNS;
            var isRowHeader = cardinality === regions_1.RegionCardinality.FULL_ROWS;
            if (!isColumnHeader && !isRowHeader) {
                return false;
            }
            var selectedRegions = _this.props.selectedRegions;
            var selectedRegionIndex = regions_1.Regions.findContainingRegion(selectedRegions, region);
            if (selectedRegionIndex >= 0) {
                var selectedRegion = selectedRegions[selectedRegionIndex];
                if (regions_1.Regions.getRegionCardinality(selectedRegion) !== cardinality) {
                    // ignore FULL_TABLE selections
                    return false;
                }
                // cache for easy access later in the lifecycle
                var selectedInterval = isRowHeader ? selectedRegion.rows : selectedRegion.cols;
                _this.selectedRegionStartIndex = selectedInterval[0];
                // add 1 because the selected interval is inclusive, which simple subtraction doesn't
                // account for (e.g. in a FULL_COLUMNS range from 3 to 6, 6 - 3 = 3, but the selection
                // actually includes four columns: 3, 4, 5, and 6)
                _this.selectedRegionLength = selectedInterval[1] - selectedInterval[0] + 1;
            }
            else {
                // select the new region to avoid complex and unintuitive UX w/r/t the existing selection
                _this.props.onSelection([region]);
                var regionRange = isRowHeader ? region.rows : region.cols;
                _this.selectedRegionStartIndex = regionRange[0];
                _this.selectedRegionLength = regionRange[1] - regionRange[0] + 1;
            }
            return true;
        };
        _this.handleDragMove = function (event, coords) {
            var oldIndex = _this.selectedRegionStartIndex;
            var guideIndex = _this.props.locateDrag(event, coords);
            var length = _this.selectedRegionLength;
            var reorderedIndex = utils_1.Utils.guideIndexToReorderedIndex(oldIndex, guideIndex, length);
            _this.props.onReordering(oldIndex, reorderedIndex, length);
        };
        _this.handleDragEnd = function (event, coords) {
            var oldIndex = _this.selectedRegionStartIndex;
            var guideIndex = _this.props.locateDrag(event, coords);
            var length = _this.selectedRegionLength;
            var reorderedIndex = utils_1.Utils.guideIndexToReorderedIndex(oldIndex, guideIndex, length);
            _this.props.onReordered(oldIndex, reorderedIndex, length);
            var newRegion = _this.props.toRegion(reorderedIndex, reorderedIndex + length - 1);
            _this.props.onSelection(regions_1.Regions.update(_this.props.selectedRegions, newRegion));
            // resetting is not strictly required, but it's cleaner
            _this.selectedRegionStartIndex = undefined;
            _this.selectedRegionLength = undefined;
        };
        return _this;
    }
    DragReorderable.prototype.render = function () {
        var draggableProps = this.getDraggableProps();
        return (React.createElement(draggable_1.Draggable, tslib_1.__assign({}, draggableProps, { preventDefault: false }), this.props.children));
    };
    DragReorderable.prototype.getDraggableProps = function () {
        return this.props.onReordered == null ? {} : {
            onActivate: this.handleActivate,
            onDragEnd: this.handleDragEnd,
            onDragMove: this.handleDragMove,
        };
    };
    return DragReorderable;
}(React.Component));
DragReorderable = tslib_1.__decorate([
    PureRender
], DragReorderable);
exports.DragReorderable = DragReorderable;



/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
var index_1 = __webpack_require__(36);
var resizeHandle_1 = __webpack_require__(26);
var Resizable = (function (_super) {
    tslib_1.__extends(Resizable, _super);
    function Resizable(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onResizeMove = function (_offset, delta) {
            _this.offsetSize(delta);
            if (_this.props.onSizeChanged != null) {
                _this.props.onSizeChanged(_this.state.size);
            }
        };
        _this.onResizeEnd = function (_offset) {
            // reset "unclamped" size on end
            _this.setState({ unclampedSize: _this.state.size });
            if (_this.props.onResizeEnd != null) {
                _this.props.onResizeEnd(_this.state.size);
            }
        };
        var size = props.size;
        _this.state = {
            size: size,
            unclampedSize: size,
        };
        return _this;
    }
    Resizable.prototype.componentWillReceiveProps = function (nextProps) {
        var size = nextProps.size;
        this.setState({
            size: size,
            unclampedSize: size,
        });
    };
    Resizable.prototype.render = function () {
        var child = React.Children.only(this.props.children);
        var style = tslib_1.__assign({}, child.props.style, this.getStyle());
        if (this.props.isResizable === false) {
            return React.cloneElement(child, { style: style });
        }
        var resizeHandle = this.renderResizeHandle();
        return React.cloneElement(child, { style: style, resizeHandle: resizeHandle });
    };
    Resizable.prototype.renderResizeHandle = function () {
        var _a = this.props, onLayoutLock = _a.onLayoutLock, onDoubleClick = _a.onDoubleClick, orientation = _a.orientation;
        return (React.createElement(resizeHandle_1.ResizeHandle, { key: "resize-handle", onDoubleClick: onDoubleClick, onLayoutLock: onLayoutLock, onResizeEnd: this.onResizeEnd, onResizeMove: this.onResizeMove, orientation: orientation }));
    };
    /**
     * Returns the CSS style to apply to the child element given the state's
     * size value.
     */
    Resizable.prototype.getStyle = function () {
        if (this.props.orientation === resizeHandle_1.Orientation.VERTICAL) {
            return {
                flexBasis: this.state.size + "px",
                minWidth: "0px",
                width: this.state.size + "px",
            };
        }
        else {
            return {
                flexBasis: this.state.size + "px",
                height: this.state.size + "px",
                minHeight: "0px",
            };
        }
    };
    Resizable.prototype.offsetSize = function (offset) {
        var unclampedSize = this.state.unclampedSize + offset;
        this.setState({
            size: index_1.Utils.clamp(unclampedSize, this.props.minSize, this.props.maxSize),
            unclampedSize: unclampedSize,
        });
    };
    return Resizable;
}(React.Component));
Resizable.defaultProps = {
    isResizable: true,
    minSize: 0,
};
Resizable = tslib_1.__decorate([
    PureRender
], Resizable);
exports.Resizable = Resizable;



/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var resizeHandle_1 = __webpack_require__(26);
var regions_1 = __webpack_require__(11);
var header_1 = __webpack_require__(71);
var rowHeaderCell_1 = __webpack_require__(70);
var RowHeader = (function (_super) {
    tslib_1.__extends(RowHeader, _super);
    function RowHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultProps = {
            renderRowHeader: renderDefaultRowHeader,
        };
        _this.wrapCells = function (cells) {
            var _a = _this.props, grid = _a.grid, viewportRect = _a.viewportRect;
            // always set height so that the layout can push out the element unless it overflows.
            var style = {
                height: grid.getRect().height + "px",
            };
            // use CSS translation to offset the cells
            if (viewportRect != null) {
                var startIndex = _this.getStartIndex();
                var topOffset = grid.getRowRect(startIndex).top - viewportRect.top;
                style.transform = "translate3d(0, " + topOffset + "px, 0)";
            }
            return (React.createElement("div", { style: style }, cells));
        };
        _this.convertPointToRow = function (clientXOrY, useMidpoint) {
            var locator = _this.props.locator;
            return locator != null ? locator.convertPointToRow(clientXOrY, useMidpoint) : null;
        };
        _this.getCellExtremaClasses = function (index, endIndex) {
            return _this.props.grid.getExtremaClasses(index, 0, endIndex, 1);
        };
        _this.getRowHeight = function (index) {
            return _this.props.grid.getRowRect(index).height;
        };
        _this.getDragCoordinate = function (clientCoords) {
            return clientCoords[1]; // y-coordinate
        };
        _this.getMouseCoordinate = function (event) {
            return event.clientY;
        };
        _this.getStartIndex = function () {
            return _this.props.rowIndexStart;
        };
        _this.handleResizeEnd = function (index, size) {
            _this.props.onResizeGuide(null);
            _this.props.onRowHeightChanged(index, size);
        };
        _this.handleSizeChanged = function (index, size) {
            var rect = _this.props.grid.getRowRect(index);
            _this.props.onResizeGuide([rect.top + size]);
        };
        _this.isCellSelected = function (index) {
            return regions_1.Regions.hasFullRow(_this.props.selectedRegions, index);
        };
        _this.isGhostIndex = function (index) {
            return _this.props.grid.isGhostIndex(index, -1);
        };
        _this.renderGhostCell = function (index, extremaClasses) {
            var rect = _this.props.grid.getGhostCellRect(index, 0);
            return (React.createElement(rowHeaderCell_1.RowHeaderCell, { className: classNames(extremaClasses), index: index, key: Classes.rowIndexClass(index), loading: _this.props.loading, style: { height: rect.height + "px" } }));
        };
        _this.toRegion = function (index1, index2) {
            // the `this` value is messed up for Regions.row, so we have to have a wrapper function here
            return regions_1.Regions.row(index1, index2);
        };
        _this.isSelectedRegionRelevant = function (selectedRegion) {
            var regionCardinality = regions_1.Regions.getRegionCardinality(selectedRegion);
            return regionCardinality === regions_1.RegionCardinality.FULL_ROWS
                || regionCardinality === regions_1.RegionCardinality.FULL_TABLE;
        };
        return _this;
    }
    RowHeader.prototype.shouldComponentUpdate = function (nextProps) {
        return header_1.shouldHeaderComponentUpdate(this.props, nextProps, this.isSelectedRegionRelevant);
    };
    RowHeader.prototype.render = function () {
        var _a = this.props, 
        // from IRowHeaderProps
        onRowHeightChanged = _a.onRowHeightChanged, renderRowHeader = _a.renderRowHeader, 
        // from IRowHeights
        minRowHeight = _a.minRowHeight, maxRowHeight = _a.maxRowHeight, defaultRowHeight = _a.defaultRowHeight, 
        // from IRowIndices
        rowIndexStart = _a.rowIndexStart, rowIndexEnd = _a.rowIndexEnd, 
        // from IHeaderProps
        spreadableProps = tslib_1.__rest(_a, ["onRowHeightChanged", "renderRowHeader", "minRowHeight", "maxRowHeight", "defaultRowHeight", "rowIndexStart", "rowIndexEnd"]);
        return (React.createElement(header_1.Header, tslib_1.__assign({ convertPointToIndex: this.convertPointToRow, endIndex: this.props.rowIndexEnd, fullRegionCardinality: regions_1.RegionCardinality.FULL_ROWS, getCellExtremaClasses: this.getCellExtremaClasses, getCellIndexClass: Classes.rowCellIndexClass, getCellSize: this.getRowHeight, getDragCoordinate: this.getDragCoordinate, getIndexClass: Classes.rowIndexClass, getMouseCoordinate: this.getMouseCoordinate, handleResizeEnd: this.handleResizeEnd, handleSizeChanged: this.handleSizeChanged, headerCellIsReorderablePropName: "isRowReorderable", headerCellIsSelectedPropName: "isRowSelected", isCellSelected: this.isCellSelected, isGhostIndex: this.isGhostIndex, maxSize: this.props.maxRowHeight, minSize: this.props.minRowHeight, renderGhostCell: this.renderGhostCell, renderHeaderCell: this.props.renderRowHeader, resizeOrientation: resizeHandle_1.Orientation.HORIZONTAL, startIndex: this.props.rowIndexStart, toRegion: this.toRegion, wrapCells: this.wrapCells }, spreadableProps)));
    };
    return RowHeader;
}(React.Component));
exports.RowHeader = RowHeader;
/**
 * A default implementation of `IRowHeaderRenderer` that displays 1-indexed
 * numbers for each row.
 */
function renderDefaultRowHeader(rowIndex) {
    return React.createElement(rowHeaderCell_1.RowHeaderCell, { index: rowIndex, name: "" + (rowIndex + 1) });
}
exports.renderDefaultRowHeader = renderDefaultRowHeader;



/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Classes = __webpack_require__(6);
/**
 * Efficiently detect when an HTMLElement is resized.
 *
 * Attaches an invisible "resize-sensor" div to the element. Then it checks
 * the element's offsetWidth and offsetHeight whenever a scroll event is
 * triggered on the "resize-sensor" children. These events are further
 * debounced using requestAnimationFrame.
 *
 * Inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */
var ResizeSensor = (function () {
    function ResizeSensor() {
    }
    ResizeSensor.attach = function (element, callback) {
        var lifecycle = ResizeSensor.debounce(callback);
        var resizeSensor = document.createElement("div");
        resizeSensor.className = Classes.TABLE_RESIZE_SENSOR;
        resizeSensor.style.cssText = ResizeSensor.RESIZE_SENSOR_STYLE;
        resizeSensor.innerHTML = ResizeSensor.RESIZE_SENSOR_HTML;
        element.appendChild(resizeSensor);
        if (getComputedStyle(element, null).getPropertyValue("position") === "static") {
            element.style.position = "relative";
        }
        var expand = resizeSensor.childNodes[0];
        var expandChild = expand.childNodes[0];
        var shrink = resizeSensor.childNodes[1];
        var reset = function () {
            expandChild.style.width = "100000px";
            expandChild.style.height = "100000px";
            expand.scrollLeft = 100000;
            expand.scrollTop = 100000;
            shrink.scrollLeft = 100000;
            shrink.scrollTop = 100000;
        };
        reset();
        var lastWidth;
        var lastHeight;
        var onScroll = function () {
            var currentWidth = element.offsetWidth;
            var currentHeight = element.offsetHeight;
            if (currentWidth !== lastWidth || currentHeight !== lastHeight) {
                lastWidth = currentWidth;
                lastHeight = currentHeight;
                lifecycle.trigger();
            }
            reset();
        };
        expand.addEventListener("scroll", onScroll);
        shrink.addEventListener("scroll", onScroll);
        return function () {
            element.removeChild(resizeSensor);
            lifecycle.cancelled = true;
        };
    };
    ResizeSensor.debounce = function (callback) {
        var scope = {
            cancelled: false,
            trigger: function () {
                if (scope.triggered || scope.cancelled) {
                    return;
                }
                scope.triggered = true;
                requestAnimationFrame(function () {
                    scope.triggered = false;
                    if (!scope.cancelled) {
                        callback();
                    }
                });
            },
            triggered: false,
        };
        return scope;
    };
    return ResizeSensor;
}());
ResizeSensor.RESIZE_SENSOR_STYLE = "position: absolute; left: 0; top: 0; right: 0; " +
    "bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";
ResizeSensor.RESIZE_SENSOR_HTML = "<div class=\"" + Classes.TABLE_RESIZE_SENSOR_EXPAND + "\"\n        style=\"" + ResizeSensor.RESIZE_SENSOR_STYLE + "\"><div style=\"position: absolute; left: 0; top: 0; transition: 0s;\"\n        ></div></div><div class=\"" + Classes.TABLE_RESIZE_SENSOR_SHRINK + "\" style=\"" + ResizeSensor.RESIZE_SENSOR_STYLE + "\"\n        ><div style=\"position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%;\"></div></div>";
exports.ResizeSensor = ResizeSensor;



/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var utils_1 = __webpack_require__(10);
var GuideLayer = (function (_super) {
    tslib_1.__extends(GuideLayer, _super);
    function GuideLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderVerticalGuide = function (offset, index) {
            var style = {
                left: offset + "px",
            };
            var className = classNames(Classes.TABLE_OVERLAY, Classes.TABLE_VERTICAL_GUIDE, {
                "bp-table-vertical-guide-flush-left": offset === 0,
            });
            return (React.createElement("div", { className: className, key: index, style: style }));
        };
        _this.renderHorizontalGuide = function (offset, index) {
            var style = {
                top: offset + "px",
            };
            var className = classNames(Classes.TABLE_OVERLAY, Classes.TABLE_HORIZONTAL_GUIDE, {
                "bp-table-horizontal-guide-flush-top": offset === 0,
            });
            return (React.createElement("div", { className: className, key: index, style: style }));
        };
        return _this;
    }
    GuideLayer.prototype.shouldComponentUpdate = function (nextProps) {
        if (this.props.className !== nextProps.className) {
            return true;
        }
        // shallow-comparing guide arrays leads to tons of unnecessary re-renders, so we check the
        // array contents explicitly.
        return !utils_1.Utils.arraysEqual(this.props.verticalGuides, nextProps.verticalGuides)
            || !utils_1.Utils.arraysEqual(this.props.horizontalGuides, nextProps.horizontalGuides);
    };
    GuideLayer.prototype.render = function () {
        var _a = this.props, verticalGuides = _a.verticalGuides, horizontalGuides = _a.horizontalGuides, className = _a.className;
        var verticals = (verticalGuides == null) ? undefined : verticalGuides.map(this.renderVerticalGuide);
        var horizontals = (horizontalGuides == null) ? undefined : horizontalGuides.map(this.renderHorizontalGuide);
        return (React.createElement("div", { className: classNames(className, Classes.TABLE_OVERLAY_LAYER) },
            verticals,
            horizontals));
    };
    return GuideLayer;
}(React.Component));
exports.GuideLayer = GuideLayer;



/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var Classes = __webpack_require__(6);
var utils_1 = __webpack_require__(10);
var regions_1 = __webpack_require__(11);
// don't include "regions" or "regionStyles" in here, because they can't be shallowly compared
var UPDATE_PROPS_KEYS = [
    "className",
];
var RegionLayer = (function (_super) {
    tslib_1.__extends(RegionLayer, _super);
    function RegionLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderRegion = function (_region, index) {
            var _a = _this.props, className = _a.className, regionStyles = _a.regionStyles;
            return (React.createElement("div", { className: classNames(Classes.TABLE_OVERLAY, Classes.TABLE_REGION, className), key: index, style: regionStyles[index] }));
        };
        return _this;
    }
    RegionLayer.prototype.shouldComponentUpdate = function (nextProps) {
        // shallowly comparable props like "className" tend not to change in the default table
        // implementation, so do that check last with hope that we return earlier and avoid it
        // altogether.
        return !utils_1.Utils.arraysEqual(this.props.regions, nextProps.regions, regions_1.Regions.regionsEqual)
            || !utils_1.Utils.arraysEqual(this.props.regionStyles, nextProps.regionStyles, utils_1.Utils.shallowCompareKeys)
            || !utils_1.Utils.shallowCompareKeys(this.props, nextProps, { include: UPDATE_PROPS_KEYS });
    };
    RegionLayer.prototype.render = function () {
        return React.createElement("div", { className: Classes.TABLE_OVERLAY_LAYER }, this.renderRegionChildren());
    };
    RegionLayer.prototype.renderRegionChildren = function () {
        var regions = this.props.regions;
        if (regions == null) {
            return undefined;
        }
        return regions.map(this.renderRegion);
    };
    return RegionLayer;
}(React.Component));
exports.RegionLayer = RegionLayer;



/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Classes = __webpack_require__(6);
var rect_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(10);
var Locator = (function () {
    function Locator(tableElement, bodyElement, grid) {
        var _this = this;
        this.tableElement = tableElement;
        this.bodyElement = bodyElement;
        this.grid = grid;
        this.convertCellIndexToClientX = function (index) {
            return _this.grid.getCumulativeWidthAt(index);
        };
        this.convertCellMidpointToClientX = function (index) {
            var cellLeft = _this.grid.getCumulativeWidthBefore(index);
            var cellRight = _this.grid.getCumulativeWidthAt(index);
            return (cellLeft + cellRight) / 2;
        };
        this.convertCellIndexToClientY = function (index) {
            return _this.grid.getCumulativeHeightAt(index);
        };
        this.convertCellMidpointToClientY = function (index) {
            var cellTop = _this.grid.getCumulativeHeightBefore(index);
            var cellBottom = _this.grid.getCumulativeHeightAt(index);
            return (cellTop + cellBottom) / 2;
        };
        this.toTableRelativeX = function (clientX) {
            return _this.bodyElement.scrollLeft + clientX - _this.bodyElement.getBoundingClientRect().left;
        };
        this.toTableRelativeY = function (clientY) {
            return _this.bodyElement.scrollTop + clientY - _this.bodyElement.getBoundingClientRect().top;
        };
    }
    Locator.prototype.setGrid = function (grid) {
        this.grid = grid;
    };
    Locator.prototype.getViewportRect = function () {
        return new rect_1.Rect(this.bodyElement.scrollLeft, this.bodyElement.scrollTop, this.bodyElement.clientWidth, this.bodyElement.clientHeight);
    };
    Locator.prototype.getWidestVisibleCellInColumn = function (columnIndex) {
        var cells = this.tableElement.getElementsByClassName(Classes.columnCellIndexClass(columnIndex));
        var max = 0;
        for (var i = 0; i < cells.length; i++) {
            var contentWidth = utils_1.Utils.measureElementTextContent(cells.item(i)).width;
            var cellWidth = Math.ceil(contentWidth) + Locator.CELL_HORIZONTAL_PADDING * 2;
            if (cellWidth > max) {
                max = cellWidth;
            }
        }
        return max;
    };
    Locator.prototype.getTallestVisibleCellInColumn = function (columnIndex) {
        var cells = this.tableElement
            .getElementsByClassName(Classes.columnCellIndexClass(columnIndex) + " " + Classes.TABLE_CELL);
        var max = 0;
        for (var i = 0; i < cells.length; i++) {
            var cellValue = cells.item(i).querySelector("." + Classes.TABLE_TRUNCATED_VALUE);
            var cellTruncatedFormatText = cells.item(i).querySelector("." + Classes.TABLE_TRUNCATED_FORMAT_TEXT);
            var cellTruncatedText = cells.item(i).querySelector("." + Classes.TABLE_TRUNCATED_TEXT);
            var height = 0;
            if (cellValue != null) {
                height = cellValue.scrollHeight;
            }
            else if (cellTruncatedFormatText != null) {
                height = cellTruncatedFormatText.scrollHeight;
            }
            else if (cellTruncatedText != null) {
                height = cellTruncatedText.scrollHeight;
            }
            else {
                // it's not anything we recognize, just use the current height of the cell
                height = cells.item(i).scrollHeight;
            }
            if (height > max) {
                max = height;
            }
        }
        return max;
    };
    Locator.prototype.convertPointToColumn = function (clientX, useMidpoint) {
        var tableRect = this.getTableRect();
        if (!tableRect.containsX(clientX)) {
            return -1;
        }
        var tableX = this.toTableRelativeX(clientX);
        var limit = useMidpoint ? this.grid.numCols : this.grid.numCols - 1;
        var lookupFn = useMidpoint ? this.convertCellMidpointToClientX : this.convertCellIndexToClientX;
        return utils_1.Utils.binarySearch(tableX, limit, lookupFn);
    };
    Locator.prototype.convertPointToRow = function (clientY, useMidpoint) {
        var tableRect = this.getTableRect();
        if (!tableRect.containsY(clientY)) {
            return -1;
        }
        var tableY = this.toTableRelativeY(clientY);
        var limit = useMidpoint ? this.grid.numRows : this.grid.numRows - 1;
        var lookupFn = useMidpoint ? this.convertCellMidpointToClientY : this.convertCellIndexToClientY;
        return utils_1.Utils.binarySearch(tableY, limit, lookupFn);
    };
    Locator.prototype.convertPointToCell = function (clientX, clientY) {
        var tableX = this.toTableRelativeX(clientX);
        var tableY = this.toTableRelativeY(clientY);
        var col = utils_1.Utils.binarySearch(tableX, this.grid.numCols - 1, this.convertCellIndexToClientX);
        var row = utils_1.Utils.binarySearch(tableY, this.grid.numRows - 1, this.convertCellIndexToClientY);
        return { col: col, row: row };
    };
    Locator.prototype.getTableRect = function () {
        return rect_1.Rect.wrap(this.tableElement.getBoundingClientRect());
    };
    return Locator;
}());
Locator.CELL_HORIZONTAL_PADDING = 10;
exports.Locator = Locator;



/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var classNames = __webpack_require__(2);
var React = __webpack_require__(0);
var cell_1 = __webpack_require__(25);
var batcher_1 = __webpack_require__(72);
var Classes = __webpack_require__(6);
var contextMenuTargetWrapper_1 = __webpack_require__(147);
var rect_1 = __webpack_require__(20);
var utils_1 = __webpack_require__(10);
var menus_1 = __webpack_require__(67);
var selectable_1 = __webpack_require__(38);
var regions_1 = __webpack_require__(11);
/**
 * For perf, we want to ignore changes to the `ISelectableProps` part of the
 * `ITableBodyProps` since those are only used when a context menu is launched.
 */
var UPDATE_PROPS_KEYS = [
    "grid",
    "locator",
    "viewportRect",
    "cellRenderer",
    "rowIndexStart",
    "rowIndexEnd",
    "columnIndexStart",
    "columnIndexEnd",
    "selectedRegions",
];
/**
 * We don't want to reset the batcher when this set of keys changes. Any other
 * changes should reset the batcher's internal cache.
 */
var RESET_CELL_KEYS_BLACKLIST = [
    "columnIndexEnd",
    "columnIndexStart",
    "rowIndexEnd",
    "rowIndexStart",
    "viewportRect",
];
var TableBody = (function (_super) {
    tslib_1.__extends(TableBody, _super);
    function TableBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.batcher = new batcher_1.Batcher();
        _this.renderContextMenu = function (e) {
            var _a = _this.props, selectedRegions = _a.selectedRegions, renderBodyContextMenu = _a.renderBodyContextMenu, grid = _a.grid;
            if (renderBodyContextMenu == null) {
                return undefined;
            }
            var target = _this.locateClick(e.nativeEvent);
            return renderBodyContextMenu(new menus_1.MenuContext(target, selectedRegions, grid.numRows, grid.numCols));
        };
        _this.renderNewCell = function (row, col) {
            var _a = _this.props, columnIndexEnd = _a.columnIndexEnd, grid = _a.grid, rowIndexEnd = _a.rowIndexEnd;
            var extremaClasses = grid.getExtremaClasses(row, col, rowIndexEnd, columnIndexEnd);
            var isGhost = grid.isGhostIndex(row, col);
            return _this.renderCell(row, col, extremaClasses, isGhost);
        };
        _this.renderCell = function (rowIndex, columnIndex, extremaClasses, isGhost) {
            var _a = _this.props, cellRenderer = _a.cellRenderer, loading = _a.loading, grid = _a.grid;
            var baseCell = isGhost ? cell_1.emptyCellRenderer() : cellRenderer(rowIndex, columnIndex);
            var className = classNames(TableBody.cellClassNames(rowIndex, columnIndex), extremaClasses, (_b = {},
                _b[Classes.TABLE_CELL_GHOST] = isGhost,
                _b[Classes.TABLE_CELL_LEDGER_ODD] = (rowIndex % 2) === 1,
                _b[Classes.TABLE_CELL_LEDGER_EVEN] = (rowIndex % 2) === 0,
                _b), baseCell.props.className);
            var key = TableBody.cellReactKey(rowIndex, columnIndex);
            var rect = isGhost ? grid.getGhostCellRect(rowIndex, columnIndex) : grid.getCellRect(rowIndex, columnIndex);
            var cellLoading = baseCell.props.loading != null ? baseCell.props.loading : loading;
            var style = tslib_1.__assign({}, baseCell.props.style, rect_1.Rect.style(rect));
            return React.cloneElement(baseCell, { className: className, key: key, loading: cellLoading, style: style });
            var _b;
        };
        _this.handleSelectionEnd = function () {
            _this.activationCell = null; // not strictly required, but good practice
        };
        _this.locateClick = function (event) {
            _this.activationCell = _this.props.locator.convertPointToCell(event.clientX, event.clientY);
            return regions_1.Regions.cell(_this.activationCell.row, _this.activationCell.col);
        };
        _this.locateDrag = function (_event, coords) {
            var start = _this.activationCell;
            var end = _this.props.locator.convertPointToCell(coords.current[0], coords.current[1]);
            return regions_1.Regions.cell(start.row, start.col, end.row, end.col);
        };
        return _this;
    }
    /**
     * Returns the array of class names that must be applied to each table
     * cell so that we can locate any cell based on its coordinate.
     */
    TableBody.cellClassNames = function (rowIndex, columnIndex) {
        return [
            Classes.rowCellIndexClass(rowIndex),
            Classes.columnCellIndexClass(columnIndex),
        ];
    };
    TableBody.cellReactKey = function (rowIndex, columnIndex) {
        return "cell-" + rowIndex + "-" + columnIndex;
    };
    TableBody.prototype.shouldComponentUpdate = function (nextProps) {
        var propKeysWhitelist = { include: UPDATE_PROPS_KEYS };
        return !utils_1.Utils.shallowCompareKeys(this.props, nextProps, propKeysWhitelist);
    };
    TableBody.prototype.componentWillUpdate = function (nextProps) {
        var resetKeysBlacklist = { exclude: RESET_CELL_KEYS_BLACKLIST };
        var shouldResetBatcher = !utils_1.Utils.shallowCompareKeys(this.props, nextProps, resetKeysBlacklist);
        if (shouldResetBatcher) {
            this.batcher.reset();
        }
    };
    TableBody.prototype.componentWillUnmount = function () {
        this.batcher.cancelOutstandingCallback();
    };
    TableBody.prototype.render = function () {
        var _this = this;
        var _a = this.props, allowMultipleSelection = _a.allowMultipleSelection, columnIndexEnd = _a.columnIndexEnd, columnIndexStart = _a.columnIndexStart, grid = _a.grid, onFocus = _a.onFocus, onSelection = _a.onSelection, rowIndexEnd = _a.rowIndexEnd, rowIndexStart = _a.rowIndexStart, selectedRegions = _a.selectedRegions, selectedRegionTransform = _a.selectedRegionTransform;
        // render cells in batches
        this.batcher.startNewBatch();
        for (var rowIndex = rowIndexStart; rowIndex <= rowIndexEnd; rowIndex++) {
            for (var columnIndex = columnIndexStart; columnIndex <= columnIndexEnd; columnIndex++) {
                this.batcher.addArgsToBatch(rowIndex, columnIndex);
            }
        }
        this.batcher.removeOldAddNew(this.renderNewCell);
        if (!this.batcher.isDone()) {
            this.batcher.idleCallback(function () { return _this.forceUpdate(); });
        }
        var cells = this.batcher.getList();
        var style = grid.getRect().sizeStyle();
        return (React.createElement(selectable_1.DragSelectable, { allowMultipleSelection: allowMultipleSelection, locateClick: this.locateClick, locateDrag: this.locateDrag, onFocus: onFocus, onSelection: onSelection, onSelectionEnd: this.handleSelectionEnd, selectedRegions: selectedRegions, selectedRegionTransform: selectedRegionTransform },
            React.createElement(contextMenuTargetWrapper_1.ContextMenuTargetWrapper, { className: classNames(Classes.TABLE_BODY_VIRTUAL_CLIENT, Classes.TABLE_CELL_CLIENT), renderContextMenu: this.renderContextMenu, style: style }, cells)));
    };
    return TableBody;
}(React.Component));
TableBody.defaultProps = {
    loading: false,
};
exports.TableBody = TableBody;



/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var core_1 = __webpack_require__(7);
var PureRender = __webpack_require__(4);
var React = __webpack_require__(0);
/**
 * Since the ContextMenuTarget uses the `onContextMenu` prop instead
 * `element.addEventListener`, the prop can be lost. This wrapper helps us
 * maintain context menu fuctionality when doing fancy React.cloneElement
 * chains.
 */
var ContextMenuTargetWrapper = (function (_super) {
    tslib_1.__extends(ContextMenuTargetWrapper, _super);
    function ContextMenuTargetWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextMenuTargetWrapper.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, style = _a.style;
        return React.createElement("div", { className: className, style: style }, children);
    };
    ContextMenuTargetWrapper.prototype.renderContextMenu = function (e) {
        return this.props.renderContextMenu(e);
    };
    return ContextMenuTargetWrapper;
}(React.Component));
ContextMenuTargetWrapper = tslib_1.__decorate([
    core_1.ContextMenuTarget,
    PureRender
], ContextMenuTargetWrapper);
exports.ContextMenuTargetWrapper = ContextMenuTargetWrapper;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map