
  !function(){try{var a=Function("return this")();a&&!a.Math&&(Object.assign(a,{isFinite:isFinite,Array:Array,Date:Date,Error:Error,Function:Function,Math:Math,Object:Object,RegExp:RegExp,String:String,TypeError:TypeError,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval}),"undefined"!=typeof Reflect&&(a.Reflect=Reflect))}catch(a){}}();
  /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"common/runtime": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common/runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"node-modules/uview-ui/components/u-notice-bar/u-notice-bar":1,"node-modules/uview-ui/components/u-tag/u-tag":1,"node-modules/Verifition/Verify":1,"node-modules/uview-ui/components/u-button/u-button":1,"node-modules/uview-ui/components/u-code/u-code":1,"node-modules/uview-ui/components/u-divider/u-divider":1,"node-modules/uview-ui/components/u-icon/u-icon":1,"node-modules/uview-ui/components/u-popup/u-popup":1,"node-modules/uview-ui/components/u-empty/u-empty":1,"node-modules/uview-ui/components/u-loadmore/u-loadmore":1,"node-modules/mp-html/mp-html":1,"node-modules/uview-ui/components/u-col/u-col":1,"node-modules/uview-ui/components/u-row/u-row":1,"node-modules/uview-ui/components/u-avatar/u-avatar":1,"node-modules/uview-ui/components/u-action-sheet/u-action-sheet":1,"node-modules/uview-ui/components/u-form-item/u-form-item":1,"node-modules/uview-ui/components/u-modal/u-modal":1,"node-modules/uview-ui/components/u-column-notice/u-column-notice":1,"node-modules/uview-ui/components/u-row-notice/u-row-notice":1,"node-modules/uview-ui/components/u-transition/u-transition":1,"node-modules/Verifition/Verify/VerifyPoints":1,"node-modules/Verifition/Verify/VerifySlide":1,"node-modules/uview-ui/components/u-image/u-image":1,"node-modules/uview-ui/components/u-input/u-input":1,"node-modules/uview-ui/components/u-loading-icon/u-loading-icon":1,"node-modules/uview-ui/components/u-line/u-line":1,"node-modules/uview-ui/components/u-overlay/u-overlay":1,"node-modules/uview-ui/components/u-safe-bottom/u-safe-bottom":1,"node-modules/uview-ui/components/u-status-bar/u-status-bar":1,"node-modules/mp-html/node/node":1,"node-modules/uview-ui/components/u-gap/u-gap":1,"node-modules/mp-html/audio/audio":1,"node-modules/uview-ui/components/u-text/u-text":1,"node-modules/uview-ui/components/u-link/u-link":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"node-modules/uview-ui/components/u-notice-bar/u-notice-bar":"node-modules/uview-ui/components/u-notice-bar/u-notice-bar","node-modules/uview-ui/components/u-tag/u-tag":"node-modules/uview-ui/components/u-tag/u-tag","node-modules/Verifition/Verify":"node-modules/Verifition/Verify","node-modules/uview-ui/components/u--image/u--image":"node-modules/uview-ui/components/u--image/u--image","node-modules/uview-ui/components/u--input/u--input":"node-modules/uview-ui/components/u--input/u--input","node-modules/uview-ui/components/u-button/u-button":"node-modules/uview-ui/components/u-button/u-button","node-modules/uview-ui/components/u-code/u-code":"node-modules/uview-ui/components/u-code/u-code","node-modules/uview-ui/components/u-divider/u-divider":"node-modules/uview-ui/components/u-divider/u-divider","node-modules/uview-ui/components/u-icon/u-icon":"node-modules/uview-ui/components/u-icon/u-icon","node-modules/uview-ui/components/u-popup/u-popup":"node-modules/uview-ui/components/u-popup/u-popup","node-modules/uview-ui/components/u-empty/u-empty":"node-modules/uview-ui/components/u-empty/u-empty","node-modules/uview-ui/components/u-loadmore/u-loadmore":"node-modules/uview-ui/components/u-loadmore/u-loadmore","node-modules/mp-html/mp-html":"node-modules/mp-html/mp-html","node-modules/uview-ui/components/u-col/u-col":"node-modules/uview-ui/components/u-col/u-col","node-modules/uview-ui/components/u-row/u-row":"node-modules/uview-ui/components/u-row/u-row","node-modules/uview-ui/components/u-avatar/u-avatar":"node-modules/uview-ui/components/u-avatar/u-avatar","node-modules/uview-ui/components/u-action-sheet/u-action-sheet":"node-modules/uview-ui/components/u-action-sheet/u-action-sheet","node-modules/uview-ui/components/u--form/u--form":"node-modules/uview-ui/components/u--form/u--form","node-modules/uview-ui/components/u-form-item/u-form-item":"node-modules/uview-ui/components/u-form-item/u-form-item","node-modules/uview-ui/components/u-modal/u-modal":"node-modules/uview-ui/components/u-modal/u-modal","node-modules/uview-ui/components/u-column-notice/u-column-notice":"node-modules/uview-ui/components/u-column-notice/u-column-notice","node-modules/uview-ui/components/u-row-notice/u-row-notice":"node-modules/uview-ui/components/u-row-notice/u-row-notice","node-modules/uview-ui/components/u-transition/u-transition":"node-modules/uview-ui/components/u-transition/u-transition","node-modules/Verifition/Verify/VerifyPoints":"node-modules/Verifition/Verify/VerifyPoints","node-modules/Verifition/Verify/VerifySlide":"node-modules/Verifition/Verify/VerifySlide","node-modules/uview-ui/components/u-image/u-image":"node-modules/uview-ui/components/u-image/u-image","node-modules/uview-ui/components/u-input/u-input":"node-modules/uview-ui/components/u-input/u-input","node-modules/uview-ui/components/u-loading-icon/u-loading-icon":"node-modules/uview-ui/components/u-loading-icon/u-loading-icon","node-modules/uview-ui/components/u-line/u-line":"node-modules/uview-ui/components/u-line/u-line","node-modules/uview-ui/components/u-overlay/u-overlay":"node-modules/uview-ui/components/u-overlay/u-overlay","node-modules/uview-ui/components/u-safe-bottom/u-safe-bottom":"node-modules/uview-ui/components/u-safe-bottom/u-safe-bottom","node-modules/uview-ui/components/u-status-bar/u-status-bar":"node-modules/uview-ui/components/u-status-bar/u-status-bar","node-modules/mp-html/node/node":"node-modules/mp-html/node/node","node-modules/uview-ui/components/u--text/u--text":"node-modules/uview-ui/components/u--text/u--text","node-modules/uview-ui/components/u-gap/u-gap":"node-modules/uview-ui/components/u-gap/u-gap","node-modules/uview-ui/components/u-form/u-form":"node-modules/uview-ui/components/u-form/u-form","node-modules/mp-html/audio/audio":"node-modules/mp-html/audio/audio","node-modules/uview-ui/components/u-text/u-text":"node-modules/uview-ui/components/u-text/u-text","node-modules/uview-ui/components/u-link/u-link":"node-modules/uview-ui/components/u-link/u-link"}[chunkId]||chunkId) + ".ttss";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBLG9CQUFvQjtRQUNwQjtRQUNBO1FBQ0E7UUFDQSx1QkFBdUIsdzZIQUF3Nkg7UUFDLzdIO1FBQ0E7UUFDQSxtQkFBbUIsNkJBQTZCO1FBQ2hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxtQkFBbUIsOEJBQThCO1FBQ2pEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0EsS0FBSztRQUNMOztRQUVBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esd0JBQXdCLGtDQUFrQztRQUMxRCxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0EsMENBQTBDLG9CQUFvQixXQUFXOztRQUV6RTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0EiLCJmaWxlIjoiY29tbW9uL3J1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcImNvbW1vbi9ydW50aW1lXCI6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29tbW9uL3J1bnRpbWVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiBDU1MgbG9hZGluZ1xuIFx0XHR2YXIgY3NzQ2h1bmtzID0ge1wibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1ub3RpY2UtYmFyL3Utbm90aWNlLWJhclwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRhZy91LXRhZ1wiOjEsXCJub2RlLW1vZHVsZXMvVmVyaWZpdGlvbi9WZXJpZnlcIjoxLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b25cIjoxLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jb2RlL3UtY29kZVwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWRpdmlkZXIvdS1kaXZpZGVyXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIjoxLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1wb3B1cC91LXBvcHVwXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtZW1wdHkvdS1lbXB0eVwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRtb3JlL3UtbG9hZG1vcmVcIjoxLFwibm9kZS1tb2R1bGVzL21wLWh0bWwvbXAtaHRtbFwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWNvbC91LWNvbFwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXJvdy91LXJvd1wiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWF2YXRhci91LWF2YXRhclwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWFjdGlvbi1zaGVldC91LWFjdGlvbi1zaGVldFwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWZvcm0taXRlbS91LWZvcm0taXRlbVwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LW1vZGFsL3UtbW9kYWxcIjoxLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jb2x1bW4tbm90aWNlL3UtY29sdW1uLW5vdGljZVwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXJvdy1ub3RpY2UvdS1yb3ctbm90aWNlXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtdHJhbnNpdGlvbi91LXRyYW5zaXRpb25cIjoxLFwibm9kZS1tb2R1bGVzL1ZlcmlmaXRpb24vVmVyaWZ5L1ZlcmlmeVBvaW50c1wiOjEsXCJub2RlLW1vZHVsZXMvVmVyaWZpdGlvbi9WZXJpZnkvVmVyaWZ5U2xpZGVcIjoxLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pbWFnZS91LWltYWdlXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtaW5wdXQvdS1pbnB1dFwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRpbmctaWNvbi91LWxvYWRpbmctaWNvblwiOjEsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxpbmUvdS1saW5lXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utb3ZlcmxheS91LW92ZXJsYXlcIjoxLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zYWZlLWJvdHRvbS91LXNhZmUtYm90dG9tXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utc3RhdHVzLWJhci91LXN0YXR1cy1iYXJcIjoxLFwibm9kZS1tb2R1bGVzL21wLWh0bWwvbm9kZS9ub2RlXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtZ2FwL3UtZ2FwXCI6MSxcIm5vZGUtbW9kdWxlcy9tcC1odG1sL2F1ZGlvL2F1ZGlvXCI6MSxcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtdGV4dC91LXRleHRcIjoxLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1saW5rL3UtbGlua1wiOjF9O1xuIFx0XHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdHZhciBocmVmID0gXCJcIiArICh7XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LW5vdGljZS1iYXIvdS1ub3RpY2UtYmFyXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LW5vdGljZS1iYXIvdS1ub3RpY2UtYmFyXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRhZy91LXRhZ1wiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWcvdS10YWdcIixcIm5vZGUtbW9kdWxlcy9WZXJpZml0aW9uL1ZlcmlmeVwiOlwibm9kZS1tb2R1bGVzL1ZlcmlmaXRpb24vVmVyaWZ5XCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LS1pbWFnZS91LS1pbWFnZVwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS0taW1hZ2UvdS0taW1hZ2VcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtLWlucHV0L3UtLWlucHV0XCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LS1pbnB1dC91LS1pbnB1dFwiLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b25cIjpcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtYnV0dG9uL3UtYnV0dG9uXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWNvZGUvdS1jb2RlXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWNvZGUvdS1jb2RlXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWRpdmlkZXIvdS1kaXZpZGVyXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWRpdmlkZXIvdS1kaXZpZGVyXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXBvcHVwL3UtcG9wdXBcIjpcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtcG9wdXAvdS1wb3B1cFwiLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1lbXB0eS91LWVtcHR5XCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWVtcHR5L3UtZW1wdHlcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtbG9hZG1vcmUvdS1sb2FkbW9yZVwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1sb2FkbW9yZS91LWxvYWRtb3JlXCIsXCJub2RlLW1vZHVsZXMvbXAtaHRtbC9tcC1odG1sXCI6XCJub2RlLW1vZHVsZXMvbXAtaHRtbC9tcC1odG1sXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWNvbC91LWNvbFwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1jb2wvdS1jb2xcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utcm93L3Utcm93XCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXJvdy91LXJvd1wiLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1hdmF0YXIvdS1hdmF0YXJcIjpcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtYXZhdGFyL3UtYXZhdGFyXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWFjdGlvbi1zaGVldC91LWFjdGlvbi1zaGVldFwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1hY3Rpb24tc2hlZXQvdS1hY3Rpb24tc2hlZXRcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtLWZvcm0vdS0tZm9ybVwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS0tZm9ybS91LS1mb3JtXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWZvcm0taXRlbS91LWZvcm0taXRlbVwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1mb3JtLWl0ZW0vdS1mb3JtLWl0ZW1cIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtbW9kYWwvdS1tb2RhbFwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1tb2RhbC91LW1vZGFsXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWNvbHVtbi1ub3RpY2UvdS1jb2x1bW4tbm90aWNlXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWNvbHVtbi1ub3RpY2UvdS1jb2x1bW4tbm90aWNlXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXJvdy1ub3RpY2UvdS1yb3ctbm90aWNlXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXJvdy1ub3RpY2UvdS1yb3ctbm90aWNlXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRyYW5zaXRpb24vdS10cmFuc2l0aW9uXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRyYW5zaXRpb24vdS10cmFuc2l0aW9uXCIsXCJub2RlLW1vZHVsZXMvVmVyaWZpdGlvbi9WZXJpZnkvVmVyaWZ5UG9pbnRzXCI6XCJub2RlLW1vZHVsZXMvVmVyaWZpdGlvbi9WZXJpZnkvVmVyaWZ5UG9pbnRzXCIsXCJub2RlLW1vZHVsZXMvVmVyaWZpdGlvbi9WZXJpZnkvVmVyaWZ5U2xpZGVcIjpcIm5vZGUtbW9kdWxlcy9WZXJpZml0aW9uL1ZlcmlmeS9WZXJpZnlTbGlkZVwiLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pbWFnZS91LWltYWdlXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWltYWdlL3UtaW1hZ2VcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtaW5wdXQvdS1pbnB1dFwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pbnB1dC91LWlucHV0XCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRpbmctaWNvbi91LWxvYWRpbmctaWNvblwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1sb2FkaW5nLWljb24vdS1sb2FkaW5nLWljb25cIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtbGluZS91LWxpbmVcIjpcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtbGluZS91LWxpbmVcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utb3ZlcmxheS91LW92ZXJsYXlcIjpcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utb3ZlcmxheS91LW92ZXJsYXlcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3Utc2FmZS1ib3R0b20vdS1zYWZlLWJvdHRvbVwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zYWZlLWJvdHRvbS91LXNhZmUtYm90dG9tXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXN0YXR1cy1iYXIvdS1zdGF0dXMtYmFyXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXN0YXR1cy1iYXIvdS1zdGF0dXMtYmFyXCIsXCJub2RlLW1vZHVsZXMvbXAtaHRtbC9ub2RlL25vZGVcIjpcIm5vZGUtbW9kdWxlcy9tcC1odG1sL25vZGUvbm9kZVwiLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS0tdGV4dC91LS10ZXh0XCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LS10ZXh0L3UtLXRleHRcIixcIm5vZGUtbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtZ2FwL3UtZ2FwXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWdhcC91LWdhcFwiLFwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1mb3JtL3UtZm9ybVwiOlwibm9kZS1tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1mb3JtL3UtZm9ybVwiLFwibm9kZS1tb2R1bGVzL21wLWh0bWwvYXVkaW8vYXVkaW9cIjpcIm5vZGUtbW9kdWxlcy9tcC1odG1sL2F1ZGlvL2F1ZGlvXCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRleHQvdS10ZXh0XCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXRleHQvdS10ZXh0XCIsXCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxpbmsvdS1saW5rXCI6XCJub2RlLW1vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxpbmsvdS1saW5rXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLnR0c3NcIjtcbiBcdFx0XHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuIFx0XHRcdFx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuIFx0XHRcdFx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuIFx0XHRcdFx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiBcdFx0XHRcdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcbiBcdFx0XHRcdGxpbmtUYWcub25sb2FkID0gcmVzb2x2ZTtcbiBcdFx0XHRcdGxpbmtUYWcub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gXHRcdFx0XHRcdHZhciByZXF1ZXN0ID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmMgfHwgZnVsbGhyZWY7XG4gXHRcdFx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVxdWVzdCArIFwiKVwiKTtcbiBcdFx0XHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuIFx0XHRcdFx0XHRlcnIucmVxdWVzdCA9IHJlcXVlc3Q7XG4gXHRcdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF1cbiBcdFx0XHRcdFx0bGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG4gXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gXHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdFx0fSkpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSBnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBnbG9iYWxbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIGZyb20gb3RoZXIgY2h1bmtzXG4gXHRjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
  