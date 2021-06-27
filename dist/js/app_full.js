"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

document.addEventListener("DOMContentLoaded", function (event) {
  // Polyfills	

  /* forEach polyfill IE */
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  /* object-fill polyfill IE */


  !function () {
    "use strict";

    if ("undefined" != typeof window) {
      var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          e = t ? parseInt(t[1], 10) : null,
          n = !!e && 16 <= e && e <= 18;

      if (!("objectFit" in document.documentElement.style != !1) || n) {
        var o = function o(t, e, i) {
          var n, o, l, a, d;
          if ((i = i.split(" ")).length < 2 && (i[1] = i[0]), "x" === t) n = i[0], o = i[1], l = "left", a = "right", d = e.clientWidth;else {
            if ("y" !== t) return;
            n = i[1], o = i[0], l = "top", a = "bottom", d = e.clientHeight;
          }

          if (n !== l && o !== l) {
            if (n !== a && o !== a) return "center" === n || "50%" === n ? (e.style[l] = "50%", void (e.style["margin-" + l] = d / -2 + "px")) : void (0 <= n.indexOf("%") ? (n = parseInt(n, 10)) < 50 ? (e.style[l] = n + "%", e.style["margin-" + l] = d * (n / -100) + "px") : (n = 100 - n, e.style[a] = n + "%", e.style["margin-" + a] = d * (n / -100) + "px") : e.style[l] = n);
            e.style[a] = "0";
          } else e.style[l] = "0";
        },
            l = function l(t) {
          var e = t.dataset ? t.dataset.objectFit : t.getAttribute("data-object-fit"),
              i = t.dataset ? t.dataset.objectPosition : t.getAttribute("data-object-position");
          e = e || "cover", i = i || "50% 50%";
          var n = t.parentNode;
          return function (t) {
            var e = window.getComputedStyle(t, null),
                i = e.getPropertyValue("position"),
                n = e.getPropertyValue("overflow"),
                o = e.getPropertyValue("display");
            i && "static" !== i || (t.style.position = "relative"), "hidden" !== n && (t.style.overflow = "hidden"), o && "inline" !== o || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill");
          }(n), function (t) {
            var e = window.getComputedStyle(t, null),
                i = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px"
            };

            for (var n in i) {
              e.getPropertyValue(n) !== i[n] && (t.style[n] = i[n]);
            }
          }(t), t.style.position = "absolute", t.style.width = "auto", t.style.height = "auto", "scale-down" === e && (e = t.clientWidth < n.clientWidth && t.clientHeight < n.clientHeight ? "none" : "contain"), "none" === e ? (o("x", t, i), void o("y", t, i)) : "fill" === e ? (t.style.width = "100%", t.style.height = "100%", o("x", t, i), void o("y", t, i)) : (t.style.height = "100%", void ("cover" === e && t.clientWidth > n.clientWidth || "contain" === e && t.clientWidth < n.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", o("x", t, i)) : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", o("y", t, i))));
        },
            i = function i(t) {
          if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");else if (t && t.nodeName) t = [t];else {
            if ("object" != _typeof2(t) || !t.length || !t[0].nodeName) return !1;
            t = t;
          }

          for (var e = 0; e < t.length; e++) {
            if (t[e].nodeName) {
              var i = t[e].nodeName.toLowerCase();

              if ("img" === i) {
                if (n) continue;
                t[e].complete ? l(t[e]) : t[e].addEventListener("load", function () {
                  l(this);
                });
              } else "video" === i ? 0 < t[e].readyState ? l(t[e]) : t[e].addEventListener("loadedmetadata", function () {
                l(this);
              }) : l(t[e]);
            }
          }

          return !0;
        };

        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i;
      } else window.objectFitPolyfill = function () {
        return !1;
      };
    }
  }();
  /* closest polyfill IE */

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  ;
  /*!
  * @overview es6-promise - a tiny implementation of Promises/A+.
  * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  * @license   Licensed under MIT license
  *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  * @version   v4.2.8+1e68dce6
  */

  (function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
  })(this, function () {
    'use strict';

    function objectOrFunction(x) {
      var type = _typeof2(x);

      return x !== null && (type === 'object' || type === 'function');
    }

    function isFunction(x) {
      return typeof x === 'function';
    }

    var _isArray = void 0;

    if (Array.isArray) {
      _isArray = Array.isArray;
    } else {
      _isArray = function _isArray(x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    }

    var isArray = _isArray;
    var len = 0;
    var vertxNext = void 0;
    var customSchedulerFn = void 0;

    var asap = function asap(callback, arg) {
      queue[len] = callback;
      queue[len + 1] = arg;
      len += 2;

      if (len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (customSchedulerFn) {
          customSchedulerFn(flush);
        } else {
          scheduleFlush();
        }
      }
    };

    function setScheduler(scheduleFn) {
      customSchedulerFn = scheduleFn;
    }

    function setAsap(asapFn) {
      asap = asapFn;
    }

    var browserWindow = typeof window !== 'undefined' ? window : undefined;
    var browserGlobal = browserWindow || {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]'; // test for web worker but not in IE10

    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined'; // node

    function useNextTick() {
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // see https://github.com/cujojs/when/issues/410 for details
      return function () {
        return process.nextTick(flush);
      };
    } // vertx


    function useVertxTimer() {
      if (typeof vertxNext !== 'undefined') {
        return function () {
          vertxNext(flush);
        };
      }

      return useSetTimeout();
    }

    function useMutationObserver() {
      var iterations = 0;
      var observer = new BrowserMutationObserver(flush);
      var node = document.createTextNode('');
      observer.observe(node, {
        characterData: true
      });
      return function () {
        node.data = iterations = ++iterations % 2;
      };
    } // web worker


    function useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = flush;
      return function () {
        return channel.port2.postMessage(0);
      };
    }

    function useSetTimeout() {
      // Store setTimeout reference so es6-promise will be unaffected by
      // other code modifying setTimeout (like sinon.useFakeTimers())
      var globalSetTimeout = setTimeout;
      return function () {
        return globalSetTimeout(flush, 1);
      };
    }

    var queue = new Array(1000);

    function flush() {
      for (var i = 0; i < len; i += 2) {
        var callback = queue[i];
        var arg = queue[i + 1];
        callback(arg);
        queue[i] = undefined;
        queue[i + 1] = undefined;
      }

      len = 0;
    }

    function attemptVertx() {
      try {
        var vertx = Function('return this')().require('vertx');

        vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return useVertxTimer();
      } catch (e) {
        return useSetTimeout();
      }
    }

    var scheduleFlush = void 0; // Decide what async method to use to triggering processing of queued callbacks:

    if (isNode) {
      scheduleFlush = useNextTick();
    } else if (BrowserMutationObserver) {
      scheduleFlush = useMutationObserver();
    } else if (isWorker) {
      scheduleFlush = useMessageChannel();
    } else if (browserWindow === undefined && typeof require === 'function') {
      scheduleFlush = attemptVertx();
    } else {
      scheduleFlush = useSetTimeout();
    }

    function then(onFulfillment, onRejection) {
      var parent = this;
      var child = new this.constructor(noop);

      if (child[PROMISE_ID] === undefined) {
        makePromise(child);
      }

      var _state = parent._state;

      if (_state) {
        var callback = arguments[_state - 1];
        asap(function () {
          return invokeCallback(_state, child, callback, parent._result);
        });
      } else {
        subscribe(parent, child, onFulfillment, onRejection);
      }

      return child;
    }
    /**
      `Promise.resolve` returns a promise that will become resolved with the
      passed `value`. It is shorthand for the following:
    
      ```javascript
      let promise = new Promise(function(resolve, reject){
        resolve(1);
      });
    
      promise.then(function(value){
        // value === 1
      });
      ```
    
      Instead of writing the above, your code now simply becomes the following:
    
      ```javascript
      let promise = Promise.resolve(1);
    
      promise.then(function(value){
        // value === 1
      });
      ```
    
      @method resolve
      @static
      @param {Any} value value that the returned promise will be resolved with
      Useful for tooling.
      @return {Promise} a promise that will become fulfilled with the given
      `value`
    */


    function resolve$1(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && _typeof2(object) === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(noop);
      resolve(promise, object);
      return promise;
    }

    var PROMISE_ID = Math.random().toString(36).substring(2);

    function noop() {}

    var PENDING = void 0;
    var FULFILLED = 1;
    var REJECTED = 2;

    function selfFulfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
      try {
        then$$1.call(value, fulfillmentHandler, rejectionHandler);
      } catch (e) {
        return e;
      }
    }

    function handleForeignThenable(promise, thenable, then$$1) {
      asap(function (promise) {
        var sealed = false;
        var error = tryThen(then$$1, thenable, function (value) {
          if (sealed) {
            return;
          }

          sealed = true;

          if (thenable !== value) {
            resolve(promise, value);
          } else {
            fulfill(promise, value);
          }
        }, function (reason) {
          if (sealed) {
            return;
          }

          sealed = true;
          reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          reject(promise, error);
        }
      }, promise);
    }

    function handleOwnThenable(promise, thenable) {
      if (thenable._state === FULFILLED) {
        fulfill(promise, thenable._result);
      } else if (thenable._state === REJECTED) {
        reject(promise, thenable._result);
      } else {
        subscribe(thenable, undefined, function (value) {
          return resolve(promise, value);
        }, function (reason) {
          return reject(promise, reason);
        });
      }
    }

    function handleMaybeThenable(promise, maybeThenable, then$$1) {
      if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
        handleOwnThenable(promise, maybeThenable);
      } else {
        if (then$$1 === undefined) {
          fulfill(promise, maybeThenable);
        } else if (isFunction(then$$1)) {
          handleForeignThenable(promise, maybeThenable, then$$1);
        } else {
          fulfill(promise, maybeThenable);
        }
      }
    }

    function resolve(promise, value) {
      if (promise === value) {
        reject(promise, selfFulfillment());
      } else if (objectOrFunction(value)) {
        var then$$1 = void 0;

        try {
          then$$1 = value.then;
        } catch (error) {
          reject(promise, error);
          return;
        }

        handleMaybeThenable(promise, value, then$$1);
      } else {
        fulfill(promise, value);
      }
    }

    function publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      publish(promise);
    }

    function fulfill(promise, value) {
      if (promise._state !== PENDING) {
        return;
      }

      promise._result = value;
      promise._state = FULFILLED;

      if (promise._subscribers.length !== 0) {
        asap(publish, promise);
      }
    }

    function reject(promise, reason) {
      if (promise._state !== PENDING) {
        return;
      }

      promise._state = REJECTED;
      promise._result = reason;
      asap(publishRejection, promise);
    }

    function subscribe(parent, child, onFulfillment, onRejection) {
      var _subscribers = parent._subscribers;
      var length = _subscribers.length;
      parent._onerror = null;
      _subscribers[length] = child;
      _subscribers[length + FULFILLED] = onFulfillment;
      _subscribers[length + REJECTED] = onRejection;

      if (length === 0 && parent._state) {
        asap(publish, parent);
      }
    }

    function publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) {
        return;
      }

      var child = void 0,
          callback = void 0,
          detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function invokeCallback(settled, promise, callback, detail) {
      var hasCallback = isFunction(callback),
          value = void 0,
          error = void 0,
          succeeded = true;

      if (hasCallback) {
        try {
          value = callback(detail);
        } catch (e) {
          succeeded = false;
          error = e;
        }

        if (promise === value) {
          reject(promise, cannotReturnOwn());
          return;
        }
      } else {
        value = detail;
      }

      if (promise._state !== PENDING) {// noop
      } else if (hasCallback && succeeded) {
        resolve(promise, value);
      } else if (succeeded === false) {
        reject(promise, error);
      } else if (settled === FULFILLED) {
        fulfill(promise, value);
      } else if (settled === REJECTED) {
        reject(promise, value);
      }
    }

    function initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value) {
          resolve(promise, value);
        }, function rejectPromise(reason) {
          reject(promise, reason);
        });
      } catch (e) {
        reject(promise, e);
      }
    }

    var id = 0;

    function nextId() {
      return id++;
    }

    function makePromise(promise) {
      promise[PROMISE_ID] = id++;
      promise._state = undefined;
      promise._result = undefined;
      promise._subscribers = [];
    }

    function validationError() {
      return new Error('Array Methods must be provided an Array');
    }

    var Enumerator = function () {
      function Enumerator(Constructor, input) {
        this._instanceConstructor = Constructor;
        this.promise = new Constructor(noop);

        if (!this.promise[PROMISE_ID]) {
          makePromise(this.promise);
        }

        if (isArray(input)) {
          this.length = input.length;
          this._remaining = input.length;
          this._result = new Array(this.length);

          if (this.length === 0) {
            fulfill(this.promise, this._result);
          } else {
            this.length = this.length || 0;

            this._enumerate(input);

            if (this._remaining === 0) {
              fulfill(this.promise, this._result);
            }
          }
        } else {
          reject(this.promise, validationError());
        }
      }

      Enumerator.prototype._enumerate = function _enumerate(input) {
        for (var i = 0; this._state === PENDING && i < input.length; i++) {
          this._eachEntry(input[i], i);
        }
      };

      Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
        var c = this._instanceConstructor;
        var resolve$$1 = c.resolve;

        if (resolve$$1 === resolve$1) {
          var _then = void 0;

          var error = void 0;
          var didError = false;

          try {
            _then = entry.then;
          } catch (e) {
            didError = true;
            error = e;
          }

          if (_then === then && entry._state !== PENDING) {
            this._settledAt(entry._state, i, entry._result);
          } else if (typeof _then !== 'function') {
            this._remaining--;
            this._result[i] = entry;
          } else if (c === Promise$2) {
            var promise = new c(noop);

            if (didError) {
              reject(promise, error);
            } else {
              handleMaybeThenable(promise, entry, _then);
            }

            this._willSettleAt(promise, i);
          } else {
            this._willSettleAt(new c(function (resolve$$1) {
              return resolve$$1(entry);
            }), i);
          }
        } else {
          this._willSettleAt(resolve$$1(entry), i);
        }
      };

      Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
        var promise = this.promise;

        if (promise._state === PENDING) {
          this._remaining--;

          if (state === REJECTED) {
            reject(promise, value);
          } else {
            this._result[i] = value;
          }
        }

        if (this._remaining === 0) {
          fulfill(promise, this._result);
        }
      };

      Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
        var enumerator = this;
        subscribe(promise, undefined, function (value) {
          return enumerator._settledAt(FULFILLED, i, value);
        }, function (reason) {
          return enumerator._settledAt(REJECTED, i, reason);
        });
      };

      return Enumerator;
    }();
    /**
      `Promise.all` accepts an array of promises, and returns a new promise which
      is fulfilled with an array of fulfillment values for the passed promises, or
      rejected with the reason of the first passed promise to be rejected. It casts all
      elements of the passed iterable to promises as it runs this algorithm.
    
      Example:
    
      ```javascript
      let promise1 = resolve(1);
      let promise2 = resolve(2);
      let promise3 = resolve(3);
      let promises = [ promise1, promise2, promise3 ];
    
      Promise.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
      ```
    
      If any of the `promises` given to `all` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:
    
      Example:
    
      ```javascript
      let promise1 = resolve(1);
      let promise2 = reject(new Error("2"));
      let promise3 = reject(new Error("3"));
      let promises = [ promise1, promise2, promise3 ];
    
      Promise.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
      ```
    
      @method all
      @static
      @param {Array} entries array of promises
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise} promise that is fulfilled when all `promises` have been
      fulfilled, or rejected if any of them become rejected.
      @static
    */


    function all(entries) {
      return new Enumerator(this, entries).promise;
    }
    /**
      `Promise.race` returns a new promise which is settled in the same way as the
      first passed promise to settle.
    
      Example:
    
      ```javascript
      let promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 1');
        }, 200);
      });
    
      let promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 2');
        }, 100);
      });
    
      Promise.race([promise1, promise2]).then(function(result){
        // result === 'promise 2' because it was resolved before promise1
        // was resolved.
      });
      ```
    
      `Promise.race` is deterministic in that only the state of the first
      settled promise matters. For example, even if other promises given to the
      `promises` array argument are resolved, but the first settled promise has
      become rejected before the other promises became fulfilled, the returned
      promise will become rejected:
    
      ```javascript
      let promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 1');
        }, 200);
      });
    
      let promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error('promise 2'));
        }, 100);
      });
    
      Promise.race([promise1, promise2]).then(function(result){
        // Code here never runs
      }, function(reason){
        // reason.message === 'promise 2' because promise 2 became rejected before
        // promise 1 became fulfilled
      });
      ```
    
      An example real-world use case is implementing timeouts:
    
      ```javascript
      Promise.race([ajax('foo.json'), timeout(5000)])
      ```
    
      @method race
      @static
      @param {Array} promises array of promises to observe
      Useful for tooling.
      @return {Promise} a promise which settles in the same way as the first passed
      promise to settle.
    */


    function race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      if (!isArray(entries)) {
        return new Constructor(function (_, reject) {
          return reject(new TypeError('You must pass an array to race.'));
        });
      } else {
        return new Constructor(function (resolve, reject) {
          var length = entries.length;

          for (var i = 0; i < length; i++) {
            Constructor.resolve(entries[i]).then(resolve, reject);
          }
        });
      }
    }
    /**
      `Promise.reject` returns a promise rejected with the passed `reason`.
      It is shorthand for the following:
    
      ```javascript
      let promise = new Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });
    
      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```
    
      Instead of writing the above, your code now simply becomes the following:
    
      ```javascript
      let promise = Promise.reject(new Error('WHOOPS'));
    
      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```
    
      @method reject
      @static
      @param {Any} reason value that the returned promise will be rejected with.
      Useful for tooling.
      @return {Promise} a promise rejected with the given `reason`.
    */


    function reject$1(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(noop);
      reject(promise, reason);
      return promise;
    }

    function needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.
    
      Terminology
      -----------
    
      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.
    
      A promise can be in one of three states: pending, fulfilled, or rejected.
    
      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.
    
      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.
    
    
      Basic Usage:
      ------------
    
      ```js
      let promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);
    
        // on failure
        reject(reason);
      });
    
      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```
    
      Advanced Usage:
      ---------------
    
      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.
    
      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          let xhr = new XMLHttpRequest();
    
          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();
    
          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }
    
      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```
    
      Unlike callbacks, promises are great composable primitives.
    
      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON
    
        return values;
      });
      ```
    
      @class Promise
      @param {Function} resolver
      Useful for tooling.
      @constructor
    */


    var Promise$2 = function () {
      function Promise(resolver) {
        this[PROMISE_ID] = nextId();
        this._result = this._state = undefined;
        this._subscribers = [];

        if (noop !== resolver) {
          typeof resolver !== 'function' && needsResolver();
          this instanceof Promise ? initializePromise(this, resolver) : needsNew();
        }
      }
      /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.
       ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```
       Chaining
      --------
       The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.
       ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });
       findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
       ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```
       Assimilation
      ------------
       Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.
       ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```
       If the assimliated promise rejects, then the downstream promise will also reject.
       ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```
       Simple Example
      --------------
       Synchronous Example
       ```javascript
      let result;
       try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```
       Errback Example
       ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```
       Promise Example;
       ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```
       Advanced Example
      --------------
       Synchronous Example
       ```javascript
      let author, books;
       try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```
       Errback Example
       ```js
       function foundBooks(books) {
       }
       function failure(reason) {
       }
       findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```
       Promise Example;
       ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```
       @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
      */

      /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.
      ```js
      function findAuthor(){
      throw new Error('couldn't find that author');
      }
      // synchronous
      try {
      findAuthor();
      } catch(reason) {
      // something went wrong
      }
      // async with promises
      findAuthor().catch(function(reason){
      // something went wrong
      });
      ```
      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
      */


      Promise.prototype["catch"] = function _catch(onRejection) {
        return this.then(null, onRejection);
      };
      /**
        `finally` will be invoked regardless of the promise's fate just as native
        try/catch/finally behaves
      
        Synchronous example:
      
        ```js
        findAuthor() {
          if (Math.random() > 0.5) {
            throw new Error();
          }
          return new Author();
        }
      
        try {
          return findAuthor(); // succeed or fail
        } catch(error) {
          return findOtherAuther();
        } finally {
          // always runs
          // doesn't affect the return value
        }
        ```
      
        Asynchronous example:
      
        ```js
        findAuthor().catch(function(reason){
          return findOtherAuther();
        }).finally(function(){
          // author was either found, or not
        });
        ```
      
        @method finally
        @param {Function} callback
        @return {Promise}
      */


      Promise.prototype["finally"] = function _finally(callback) {
        var promise = this;
        var constructor = promise.constructor;

        if (isFunction(callback)) {
          return promise.then(function (value) {
            return constructor.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return constructor.resolve(callback()).then(function () {
              throw reason;
            });
          });
        }

        return promise.then(callback, callback);
      };

      return Promise;
    }();

    Promise$2.prototype.then = then;
    Promise$2.all = all;
    Promise$2.race = race;
    Promise$2.resolve = resolve$1;
    Promise$2.reject = reject$1;
    Promise$2._setScheduler = setScheduler;
    Promise$2._setAsap = setAsap;
    Promise$2._asap = asap;
    /*global self*/

    function polyfill() {
      var local = void 0;

      if (typeof global !== 'undefined') {
        local = global;
      } else if (typeof self !== 'undefined') {
        local = self;
      } else {
        try {
          local = Function('return this')();
        } catch (e) {
          throw new Error('polyfill failed because global object is unavailable in this environment');
        }
      }

      var P = local.Promise;

      if (P) {
        var promiseToString = null;

        try {
          promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {// silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
          return;
        }
      }

      local.Promise = Promise$2;
    } // Strange compat..


    Promise$2.polyfill = polyfill;
    Promise$2.Promise = Promise$2;
    Promise$2.polyfill();
    return Promise$2;
  });
  /**
  * Copyright (c) 2014-present, Facebook, Inc.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */


  var runtime = function (exports) {
    "use strict";

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof2(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  (typeof module === "undefined" ? "undefined" : _typeof2(module)) === "object" ? module.exports : {});

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }

  ; // Main workflow	

  var a = 'Vanilla JS is loaded';
  console.log(a); // SWIPER INIT

  var swiper = new Swiper('.first-screen-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoHeight: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    threshold: 10
  });
  var unlock = true; //LazyLoad init

  var lazyLoadInstance = new LazyLoad({// Your custom settings go here
  }); // TEST JQUERY
  // let b = $('.header__body');
  // console.log(b);;	
  // Moduless.js', {});	

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  function isIE() {
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
  }

  if (isIE()) {
    document.querySelector('body').setAttribute('data-vs-ie', '');
  }

  if (isMobile.any()) {
    document.querySelector('body').setAttribute('data-vs-touch', '');
  }

  if (!isMobile.any()) {
    document.querySelector('body').setAttribute('data-vs-non-touch', '');
  }

  ;

  function email_test(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  ;
  var scrollTop;
  var documentHeight;
  var scrollBottom;
  var isEndDocument;
  var prevScroll = Math.round(window.pageYOffset || document.documentElement.scrollTop); //Init and get value

  function initScrollProp() {
    scrollTop = Math.round(window.pageYOffset || document.documentElement.scrollTop);
    documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    scrollBottom = documentHeight - scrollTop - document.documentElement.clientHeight;

    if (scrollBottom === 0) {
      isEndDocument = true;
    } else {
      isEndDocument = false;
    }
  } //Check into console


  function checkScrollProp() {
    console.log("Прокручено сверху: " + scrollTop);
    console.log("Высота документа: " + documentHeight);
    console.log("Прокручено снизу: " + scrollBottom);
    console.log("Документ долистан до конца: " + isEndDocument);
  }

  initScrollProp();
  checkScrollProp();
  window.addEventListener('scroll', function () {
    initScrollProp();
    checkScrollProp();
  });
  var gallery = document.querySelectorAll('.vs-gallery');

  if (gallery) {
    gallery_init();
  }

  function gallery_init() {
    for (var index = 0; index < gallery.length; index++) {
      var el = gallery[index];
      lightGallery(el, {
        counter: true,
        selector: 'a',
        download: true,
        thumbnail: true
      });
    }
  }

  ; //=================
  // MENU

  var iconMenu = document.querySelector('.header-menu__icon');
  var menuBody = document.querySelector(".header-menu");
  var header = document.querySelector('.header');

  if (iconMenu != null) {
    iconMenu.addEventListener("click", function (e) {
      menu_toggle();
    });
  }

  ;

  function menu_toggle() {
    if (unlock) {
      body_lock(100);
      iconMenu.classList.toggle("vs-active");
      menuBody.classList.toggle("vs-active");
    }
  }

  function menu_open() {
    if (unlock) {
      body_lock(100);
      iconMenu.classList.add("vs-active");
      menuBody.classList.add("vs-active");
    }
  }

  function menu_close() {
    if (unlock) {
      iconMenu.classList.remove("vs-active");
      menuBody.classList.remove("vs-active");
    }
  } //=================
  //Menu adaptive versions
  // Кладем в переменную возвращенный объект


  var mql = window.matchMedia('screen and (max-width:768px)'); // Управление поведением меню на различных разрешениях

  function headerMenuControler(mql) {
    if (mql.matches) {
      //Убираем ПК-прослушку на скролл и инлайн стили 
      window.removeEventListener('scroll', headerMenuDelaySticky);
      header.removeAttribute('style');
      window.addEventListener('scroll', headerMenuUpSticky);
      headerMenuUpSticky();
      console.log('SctollTop = ', scrollTop);
      console.log('prevScroll = ', prevScroll);
    } else {
      window.removeEventListener('scroll', headerMenuUpSticky);
      header.removeAttribute('style');
      window.addEventListener('scroll', headerMenuDelaySticky);
    }
  } //Вешаем прослушку, на пересечени 768px


  mql.addListener(headerMenuControler); //Вызваем функцию при загрузке 

  headerMenuControler(mql); // let iconMenu = document.querySelector('.header-menu__icon');
  // let menuBody = document.querySelector(".header-menu");
  // let header = document.querySelector('.header');
  //Исчезновение меню при скролле вниз и появление при скролле вверх

  function headerMenuUpSticky() {
    header.style.position = 'fixed';
    initScrollProp();

    if (scrollTop > prevScroll && !menuBody.classList.contains('vs-active')) {
      header.style.top = '-100%';
    } else {
      header.style.top = '0';
    }

    prevScroll = scrollTop;
  } //Появление sticky меню с задержкой при прокрутки


  function headerMenuDelaySticky() {
    initScrollProp(); //checkScrollProp();

    if (scrollTop < 600) {
      header.style.position = 'absolute';
      header.style.top = '0px';
    }

    if (scrollTop > 600) {
      header.style.position = 'absolute';
      header.style.top = '-100%';
    }

    if (scrollTop > 900) {
      header.style.position = 'fixed';
    }

    if (scrollTop > 1100) {
      header.style.position = 'fixed';
      header.style.top = '0px';
    }
  } //Вывод в консоль значений при ресайзе


  function checkResizeProperties() {
    console.log('innerWidth = ', innerWidth);
    console.log('outerWidth = ', outerWidth);
    console.log('document.body.clientWidth = ', document.body.clientWidth);
    console.log('ширина прокрутки = ', outerWidth - innerWidth);
    console.log('window.innerWidth = ', window.innerWidth);
    console.log('window.outerWidth = ', window.outerWidth);
    console.log('===========');
  } //====================================================================


  document.documentElement.addEventListener('mousedown', function (e) {
    if (menuBody.classList.contains('vs-active') && !e.target.closest('.header-menu__icon') && !e.target.closest('.header-menu')) {
      menu_close();
    }
  }); //Стрелочка в многоуровневом меню

  function headerArrow() {
    if (isMobile.any()) {
      var arrows = document.querySelectorAll('.header-menu-arrow');

      var _loop = function _loop(i) {
        var arrow = arrows[i];
        var subMenu = arrow.nextElementSibling;
        var link = arrow.previousElementSibling;
        link.classList.add('vs-arrow-link');
        arrow.addEventListener('click', function () {
          subMenu.classList.toggle('vs-visible');
          arrow.classList.toggle('vs-open');
        });
      };

      for (var i = 0; i < arrows.length; i++) {
        _loop(i);
      }
    }
  }

  headerArrow();
  ;

  function body_lock(delay) {
    var body = document.querySelector("body");

    if (body.classList.contains('_lock')) {
      body_lock_remove(delay);
    } else {
      body_lock_add(delay);
    }
  }

  function body_lock_remove(delay) {
    var body = document.querySelector("body");

    if (unlock) {
      var lock_padding = document.querySelectorAll(".vs-fix-lock");
      setTimeout(function () {
        for (var index = 0; index < lock_padding.length; index++) {
          var el = lock_padding[index];
          el.style.paddingRight = '0px';
        }

        body.style.paddingRight = '0px';
        body.classList.remove("_lock");
      }, delay);
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, delay);
    }
  }

  function body_lock_add(delay) {
    var body = document.querySelector("body");

    if (unlock) {
      var lock_padding = document.querySelectorAll(".vs-fix-lock");

      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }

      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      body.classList.add("_lock");
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, delay);
    }
  }

  ;
  var tabs = document.querySelectorAll('[data-tabs-1]');

  var _loop2 = function _loop2(i) {
    var tab = tabs[i];
    var tabNavs = tab.querySelectorAll('[data-nav-item]');
    var tabContents = tab.querySelectorAll('[data-content-item]'); //active 

    var _loop14 = function _loop14(_i29) {
      tabNavs[_i29].addEventListener('click', function () {
        for (var _i30 = 0; _i30 < tabNavs.length; _i30++) {
          tabNavs[_i30].classList.remove('vs-active');
        }

        for (var _i31 = 0; _i31 < tabContents.length; _i31++) {
          tabContents[_i31].classList.remove('vs-active');
        }

        this.classList.add('vs-active');

        tabContents[_i29].classList.add('vs-active');
      });
    };

    for (var _i29 = 0; _i29 < tabNavs.length; _i29++) {
      _loop14(_i29);
    }
  };

  for (var i = 0; i < tabs.length; i++) {
    _loop2(i);
  } //mobile


  var _loop3 = function _loop3(_i) {
    var currentNavMobile = tabs[_i].querySelector('[data-current-nav-mobile]');

    var navWrapper = tabs[_i].querySelector('[data-nav-wrapper]');

    var tabNavs = tabs[_i].querySelectorAll('[data-nav-item]');

    var tabNavTitles = tabs[_i].querySelectorAll('[data-nav-title]');

    currentNavMobile.addEventListener('click', function () {
      if (navWrapper.classList.contains('vs-show')) {
        navWrapper.classList.remove('vs-show');
      } else {
        navWrapper.classList.add('vs-show');
      }
    });

    var _loop15 = function _loop15(_i32) {
      tabNavs[_i32].addEventListener('click', function () {
        var tabNavTitle = tabNavTitles[_i32].textContent;
        currentNavMobile.textContent = tabNavTitle;
        navWrapper.classList.remove('vs-show');
      });
    };

    for (var _i32 = 0; _i32 < tabNavs.length; _i32++) {
      _loop15(_i32);
    }

    document.addEventListener('mouseup', function (e) {
      if (!navWrapper.contains(e.target) && !currentNavMobile.contains(e.target)) {
        navWrapper.classList.remove('vs-show');
      }
    });
  };

  for (var _i = 0; _i < tabs.length; _i++) {
    _loop3(_i);
  }

  ;
  var tabs_2 = document.querySelectorAll('[data-tabs-2]');

  var _loop4 = function _loop4(_i2) {
    var tab = tabs_2[_i2];
    var tabNavs = tab.querySelectorAll('[data-nav-item]');
    var tabContents = tab.querySelectorAll('[data-content-item]'); //active 

    var _loop16 = function _loop16(_i33) {
      tabNavs[_i33].addEventListener('click', function () {
        for (var _i34 = 0; _i34 < tabNavs.length; _i34++) {
          tabNavs[_i34].classList.remove('vs-active');
        }

        for (var _i35 = 0; _i35 < tabContents.length; _i35++) {
          tabContents[_i35].classList.remove('vs-active');
        }

        this.classList.add('vs-active');

        tabContents[_i33].classList.add('vs-active');
      });
    };

    for (var _i33 = 0; _i33 < tabNavs.length; _i33++) {
      _loop16(_i33);
    }
  };

  for (var _i2 = 0; _i2 < tabs_2.length; _i2++) {
    _loop4(_i2);
  }

  ;
  var spollerWrappers = document.querySelectorAll('[data-spoller]');

  if (spollerWrappers.length > 0) {
    var _loop5 = function _loop5(_i3) {
      var spollerWrapper = spollerWrappers[_i3];
      var spollerBtns = spollerWrapper.querySelectorAll('[data-spoller-btn]');
      var spollerContents = spollerWrapper.querySelectorAll('[data-spoller-content]');
      initSpoller(spollerContents);

      var _loop6 = function _loop6(_i4) {
        var spollerBtn = spollerBtns[_i4];
        spollerBtn.addEventListener('click', function () {
          if (spollerWrapper.hasAttribute('data-accordion')) {
            //removeActiveBtn
            var removeActiveBtn = function removeActiveBtn() {
              for (var _i5 = 0; _i5 < spollerBtns.length; _i5++) {
                spollerBtns[_i5].classList.remove('active');
              }
            };

            if (this.classList.contains("active")) {
              removeActiveBtn();

              spollerContents[_i4].classList.remove('active');

              spollerContents[_i4].style.maxHeight = "0px";
            } else {
              removeActiveBtn();
              this.classList.toggle('active');

              for (var _i6 = 0; _i6 < spollerContents.length; _i6++) {
                spollerContents[_i6].classList.remove('active');

                spollerContents[_i6].style.maxHeight = "0px";
              }

              spollerContents[_i4].classList.add('active');

              spollerContents[_i4].style.maxHeight = spollerContents[_i4].scrollHeight + "px";
            }
          } else {
            this.classList.toggle('active');

            if (spollerContents[_i4].classList.contains('active')) {
              spollerContents[_i4].classList.remove('active');

              spollerContents[_i4].style.maxHeight = "0px";
            } else {
              spollerContents[_i4].classList.add('active');

              spollerContents[_i4].style.maxHeight = spollerContents[_i4].scrollHeight + "px";
            }
          }
        });
      };

      for (var _i4 = 0; _i4 < spollerBtns.length; _i4++) {
        _loop6(_i4);
      } //Timeout resize


      var spollerTimeout = void 0;
      window.addEventListener('resize', function () {
        clearTimeout(spollerTimeout);
        spollerTimeout = setTimeout(function () {
          initSpoller(spollerContents);
        }, 50);
      });
    };

    for (var _i3 = 0; _i3 < spollerWrappers.length; _i3++) {
      _loop5(_i3);
    }
  } //Init spoller-item height


  function initSpoller(nodeList) {
    for (var _i7 = 0; _i7 < nodeList.length; _i7++) {
      if (nodeList[_i7].classList.contains('active')) {
        nodeList[_i7].style.maxHeight = nodeList[_i7].scrollHeight + "px";
      } else {
        nodeList[_i7].style.maxHeight = "0px";
      }
    }
  }

  ; //Открытие попапа при клике на ссылку

  var popup_links = document.querySelectorAll('.vs-popup-link');
  var popups = document.querySelectorAll('.vs-popup');

  var _loop7 = function _loop7(_i8) {
    var popup_link = popup_links[_i8];
    popup_link.addEventListener('click', function (e) {
      if (unlock) {
        var item = popup_link.getAttribute('href').replace('#', '');
        var video = popup_link.getAttribute('data-video');
        popup_open(item, video);
      }

      e.preventDefault();
    });
  };

  for (var _i8 = 0; _i8 < popup_links.length; _i8++) {
    _loop7(_i8);
  } //Клик вне области


  for (var _i9 = 0; _i9 < popups.length; _i9++) {
    var popup = popups[_i9];
    popup.addEventListener("mousedown", function (e) {
      if (!e.target.closest('.vs-popup__body')) {
        popup_close(e.target.closest('.vs-popup'));
      }
    });
  } //Функция открытия попапа


  function popup_open(item) {
    var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var active_popups = document.querySelectorAll('.vs-popup.vs-active');

    if (active_popups.length > 0) {
      popup_close('', false);
    }

    var current_popup = document.querySelector('.vs-popup_' + item);

    if (current_popup && unlock) {
      if (video != '' && video != null) {
        var popup_video = document.querySelector('.vs-popup_video');
        console.log(popup_video);
        console.log(popup_video.querySelector('.vs-popup__video'));
        popup_video.querySelector('.vs-popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      }

      if (!document.querySelector('.header-menu.vs-active')) {
        body_lock_add(500);
      }

      current_popup.classList.add('vs-active');
      history.pushState('', '', '#' + item);
    }
  } //Функция закрытия попапа


  function popup_close(item) {
    var bodyUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (unlock) {
      if (!item) {
        for (var _i10 = 0; _i10 < popups.length; _i10++) {
          var _popup = popups[_i10];

          var video = _popup.querySelector('.vs-popup__video');

          if (video) {
            video.innerHTML = '';
          }

          _popup.classList.remove('vs-active');
        }
      } else {
        var _video = item.querySelector('.vs-popup__video');

        if (_video) {
          _video.innerHTML = '';
        }

        item.classList.remove('vs-active');
      }

      if (!document.querySelector('.header-menu.vs-active') && bodyUnlock) {
        body_lock_remove(500);
      }

      history.pushState('', '', window.location.href.split('#')[0]);
    }
  } //Функция закрытия по иконке


  var popup_close_icons = document.querySelectorAll('.vs-popup__close,._popup-close');

  if (popup_close_icons) {
    var _loop8 = function _loop8(_i11) {
      var popup_close_icon = popup_close_icons[_i11];
      popup_close_icon.addEventListener('click', function () {
        popup_close(popup_close_icon.closest('.vs-popup'));
      });
    };

    for (var _i11 = 0; _i11 < popup_close_icons.length; _i11++) {
      _loop8(_i11);
    }
  } //Функция закрытия по ESC


  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      popup_close();
    }
  });
  ;

  window.onload = function () {
    var autoheight_wrappers = document.querySelectorAll('.ah-wrapper');

    var _loop9 = function _loop9(_i12) {
      var autoheight_wrapper = autoheight_wrappers[_i12];
      var max_height = 0;
      var max_height2 = 0;
      var max_height3 = 0;
      var autoheight_items = autoheight_wrapper.querySelectorAll('.ah');
      var autoheight_items2 = autoheight_wrapper.querySelectorAll('.ah2');
      var autoheight_items3 = autoheight_wrapper.querySelectorAll('.ah3');

      function auto_height() {
        if (window.innerWidth > 767.8) {
          for (var _i13 = 0; _i13 < autoheight_items.length; _i13++) {
            var autoheight_item = autoheight_items[_i13];
            autoheight_item.style.height = 'auto';
          }

          for (var _i14 = 0; _i14 < autoheight_items.length; _i14++) {
            var _autoheight_item = autoheight_items[_i14];
            var autoheight_item_height = _autoheight_item.clientHeight;

            if (autoheight_item_height > max_height) {
              max_height = autoheight_item_height;
            }
          }

          for (var _i15 = 0; _i15 < autoheight_items.length; _i15++) {
            var _autoheight_item2 = autoheight_items[_i15];
            _autoheight_item2.style.height = max_height + 'px';
          }

          for (var _i16 = 0; _i16 < autoheight_items2.length; _i16++) {
            var _autoheight_item3 = autoheight_items2[_i16];
            _autoheight_item3.style.height = 'auto';
          }

          for (var _i17 = 0; _i17 < autoheight_items2.length; _i17++) {
            var _autoheight_item4 = autoheight_items2[_i17];
            var _autoheight_item_height = _autoheight_item4.clientHeight;

            if (_autoheight_item_height > max_height2) {
              max_height2 = _autoheight_item_height;
            }
          }

          for (var _i18 = 0; _i18 < autoheight_items2.length; _i18++) {
            var _autoheight_item5 = autoheight_items2[_i18];
            _autoheight_item5.style.height = max_height2 + 'px';
          }

          for (var _i19 = 0; _i19 < autoheight_items3.length; _i19++) {
            var _autoheight_item6 = autoheight_items3[_i19];
            _autoheight_item6.style.height = 'auto';
          }

          for (var _i20 = 0; _i20 < autoheight_items3.length; _i20++) {
            var _autoheight_item7 = autoheight_items3[_i20];
            var _autoheight_item_height2 = _autoheight_item7.clientHeight;

            if (_autoheight_item_height2 > max_height3) {
              max_height3 = _autoheight_item_height2;
            }
          }

          for (var _i21 = 0; _i21 < autoheight_items3.length; _i21++) {
            var _autoheight_item8 = autoheight_items3[_i21];
            _autoheight_item8.style.height = max_height3 + 'px';
          }

          max_height = 0;
          max_height2 = 0;
          max_height3 = 0;
        } else {
          max_height = 0;
          max_height2 = 0;
          max_height3 = 0;

          for (var _i22 = 0; _i22 < autoheight_items.length; _i22++) {
            var _autoheight_item9 = autoheight_items[_i22];
            _autoheight_item9.style.height = 'auto';
          }

          for (var _i23 = 0; _i23 < autoheight_items2.length; _i23++) {
            var _autoheight_item10 = autoheight_items2[_i23];
            _autoheight_item10.style.height = 'auto';
          }

          for (var _i24 = 0; _i24 < autoheight_items3.length; _i24++) {
            var _autoheight_item11 = autoheight_items3[_i24];
            _autoheight_item11.style.height = 'auto';
          }
        }
      }
      /* end function auto_height */


      auto_height();
      window.addEventListener('resize', auto_height);
    };

    for (var _i12 = 0; _i12 < autoheight_wrappers.length; _i12++) {
      _loop9(_i12);
    }

    ;
  };

  ;

  if (location.hash) {
    var hsh = location.hash.replace('#', '');

    if (document.querySelector('.popup_' + hsh)) {
      popup_open(hsh);
    } else if (document.querySelector('div.' + hsh)) {
      _goto(document.querySelector('.' + hsh), 500, '');
    }
  }

  ; //Forms

  var forms = document.querySelectorAll('form');

  if (forms.length > 0) {
    for (var index = 0; index < forms.length; index++) {
      var el = forms[index];
      el.addEventListener('submit', form_submit);
    }
  }

  function form_submit(_x) {
    return _form_submit.apply(this, arguments);
  }
  /* Функция form_validate */


  function _form_submit() {
    _form_submit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var btn, form, error, form_action, form_method, ajax, form_data, response, form_error;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              btn = e.target;
              form = btn.closest('form');
              error = form_validate(form);

              if (!(error == 0)) {
                _context.next = 19;
                break;
              }

              e.preventDefault();
              form_action = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
              form_method = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
              ajax = form.getAttribute('data-ajax'); //SendForm

              if (!ajax) {
                _context.next = 17;
                break;
              }

              form_data = new FormData(form);
              console.log(form_action);
              console.log(form_method);
              document.querySelector('.feedback-form').classList.add('vs-sending');
              _context.next = 15;
              return fetch(form_action, {
                method: form_method,
                body: form_data
              });

            case 15:
              response = _context.sent;

              if (response.ok) {
                console.log(response);
                console.log(response.json);
                console.log('Успешная отправка!'); //let result = await response.json();

                document.querySelector('.feedback-form').classList.remove('vs-sending');
                popup_open('success');
                form_clean(form);
              } else {
                document.querySelector('.feedback-form').classList.remove('vs-sending');
                console.log('Ошибка отправки!');
                popup_open('error');
              }

            case 17:
              _context.next = 22;
              break;

            case 19:
              form_error = form.querySelectorAll('.vs-error');

              if (form_error && form.classList.contains('_goto-error')) {
                _goto(form_error[0], 1000, 50);
              }

              e.preventDefault();

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _form_submit.apply(this, arguments);
  }

  function form_validate(form) {
    var error = 0;
    var form_req = form.querySelectorAll('.vs-req');

    if (form_req.length > 0) {
      for (var _index = 0; _index < form_req.length; _index++) {
        var _el = form_req[_index];

        if (!_is_hidden(_el)) {
          error += form_validate_input(_el);
        }
      }
    }

    return error;
  }
  /* Функция form_validate_input */


  function form_validate_input(input) {
    var error = 0;
    var input_g_value = input.getAttribute('data-value');

    if (input.getAttribute("name") == "email" || input.classList.contains("vs-email")) {
      if (input.value != input_g_value) {
        var em = input.value.replace(" ", "");
        input.value = em;
      }

      if (email_test(input) || input.value == input_g_value) {
        form_add_error(input);
        error++;
      } else {
        form_remove_error(input);
      }
    } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
      form_add_error(input);
      error++;
    } else {
      if (input.value == '' || input.value == input_g_value) {
        form_add_error(input);
        error++;
      } else {
        form_remove_error(input);
      }
    }

    return error;
  }
  /* Функция form_add_error */


  function form_add_error(input) {
    input.classList.add('vs-error');
    input.parentElement.classList.add('vs-error');
    var input_error = input.parentElement.querySelector('.vs-error-msg');

    if (input_error) {
      input.parentElement.removeChild(input_error);
    }

    var input_error_text = input.getAttribute('data-error');

    if (input_error_text && input_error_text != '') {
      input.parentElement.insertAdjacentHTML('afterbegin', '<div class="vs-error-msg">' + input_error_text + '</div>');
    }
  }
  /* Функция form_remove_error */


  function form_remove_error(input) {
    input.classList.remove('vs-error');
    input.parentElement.classList.remove('vs-error');
    var input_error = input.parentElement.querySelector('.vs-error-msg');

    if (input_error) {
      input.parentElement.removeChild(input_error);
    }
  }
  /* Функция form_clean */


  function form_clean(form) {
    var inputs = form.querySelectorAll('input,textarea');

    for (var _index2 = 0; _index2 < inputs.length; _index2++) {
      var _el2 = inputs[_index2];

      _el2.parentElement.classList.remove('vs-focus');

      _el2.classList.remove('vs-foocus');

      _el2.value = _el2.getAttribute('data-value');
    }

    var checkboxes = form.querySelectorAll('.checkbox__input');

    if (checkboxes.length > 0) {
      for (var _index3 = 0; _index3 < checkboxes.length; _index3++) {
        var checkbox = checkboxes[_index3];
        checkbox.checked = false;
      }
    }

    var selects = form.querySelectorAll('select');

    if (selects.length > 0) {
      for (var _index4 = 0; _index4 < selects.length; _index4++) {
        var select = selects[_index4];
        var select_default_value = select.getAttribute('data-default');
        select.value = select_default_value;
        select_item(select);
      }
    }
  }
  /* Placeholers */


  var inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
  inputs_init(inputs);

  function inputs_init(inputs) {
    if (inputs.length > 0) {
      var _loop10 = function _loop10(_index5) {
        var input = inputs[_index5];
        var input_g_value = input.getAttribute('data-value');
        input_placeholder_add(input);

        if (input.value != '' && input.value != input_g_value) {
          input_focus_add(input);
        }

        input.addEventListener('focus', function (e) {
          if (input.value == input_g_value) {
            input_focus_add(input);
            input.value = '';
          }

          if (input.getAttribute('data-type') === "pass") {
            input.setAttribute('type', 'password');
          }

          if (input.classList.contains('vs-date')) {// input.classList.add('vs-mask');
            // Inputmask("99.99.9999", {
            // 	//"placeholder": '',
            // 	clearIncomplete: true,
            // 	clearMaskOnLostFocus: true,
            // 	onincomplete: function () {
            // 		input_clear_mask(input, input_g_value);
            // 	}
            // }).mask(input);
          }

          if (input.classList.contains('vs-phone')) {
            //'+7(999) 999 9999'
            //'+38(999) 999 9999'
            //'+375(99)999-99-99'
            input.classList.add('vs-mask');
            Inputmask("+7(999) 999-99-99", {
              //"placeholder": '',
              clearIncomplete: false,
              clearMaskOnLostFocus: false,
              onincomplete: function onincomplete() {
                input_clear_mask(input, input_g_value);
              }
            }).mask(input);
          }

          if (input.classList.contains('vs-digital')) {
            input.classList.add('vs-mask');
            Inputmask("9{1,}", {
              "placeholder": '',
              clearIncomplete: true,
              clearMaskOnLostFocus: true,
              onincomplete: function onincomplete() {
                input_clear_mask(input, input_g_value);
              }
            }).mask(input);
          }

          form_remove_error(input);
        });
        input.addEventListener('blur', function (e) {
          if (input.value == '') {
            input.value = input_g_value;
            input_focus_remove(input);

            if (input.classList.contains('vs-mask')) {
              input_clear_mask(input, input_g_value);
            }

            if (input.getAttribute('data-type') === "pass") {
              input.setAttribute('type', 'text');
            }
          }
        });

        if (input.classList.contains('vs-date')) {
          datepicker(input, {
            customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            formatter: function formatter(input, date, instance) {
              var value = date.toLocaleDateString();
              input.value = value;
            },
            onSelect: function onSelect(input, instance, date) {
              input_focus_add(input.el);
            }
          });
        }
      };

      for (var _index5 = 0; _index5 < inputs.length; _index5++) {
        _loop10(_index5);
      }
    }
  }

  function input_placeholder_add(input) {
    var input_g_value = input.getAttribute('data-value');

    if (input.value == '' && input_g_value != '') {
      input.value = input_g_value;
    }
  }

  function input_focus_add(input) {
    input.classList.add('vs-focus');
    input.parentElement.classList.add('vs-focus');
  }

  function input_focus_remove(input) {
    input.classList.remove('vs-focus');
    input.parentElement.classList.remove('vs-focus');
  }

  function input_clear_mask(input, input_g_value) {
    input.inputmask.remove();
    input.value = input_g_value;
    input_focus_remove(input);
  }
  /* QUANTITY 
  let quantityButtons = document.querySelectorAll('.quantity__button');
  if (quantityButtons.length > 0) {
  	for (let index = 0; index < quantityButtons.length; index++) {
  		const quantityButton = quantityButtons[index];
  		quantityButton.addEventListener("click", function (e) {
  			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
  			if (quantityButton.classList.contains('quantity__button_plus')) {
  				value++;
  			} else {
  				value = value - 1;
  				if (value < 1) {
  					value = 1
  				}
  			}
  			quantityButton.closest('.quantity').querySelector('input').value = value;
  		});
  	}
  }
  */

  /* RANGE
  const priceSlider = document.querySelector('.price-filter__slider');
  if (priceSlider) {
  	noUiSlider.create(priceSlider, {
  		start: [0, 200000],
  		connect: true,
  		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
  		range: {
  			'min': [0],
  			'max': [200000]
  		}
  	});
  
  	const priceStart = document.getElementById('price-start');
  	const priceEnd = document.getElementById('price-end');
  	priceStart.addEventListener('change', setPriceValues);
  	priceEnd.addEventListener('change', setPriceValues);
  
  	function setPriceValues() {
  		let priceStartValue;
  		let priceEndValue;
  		if (priceStart.value != '') {
  			priceStartValue = priceStart.value;
  		}
  		if (priceEnd.value != '') {
  			priceEndValue = priceEnd.value;
  		}
  		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
  	}
  }
  */


  ;
  /*!
  * dist/inputmask.min
  * https://github.com/RobinHerbots/Inputmask
  * Copyright (c) 2010 - 2020 Robin Herbots
  * Licensed under the MIT license
  * Version: 5.0.4-beta.32
  */

  !function webpackUniversalModuleDefinition(root, factory) {
    if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module))) module.exports = factory();else if ("function" == typeof define && define.amd) define([], factory);else {
      var a = factory();

      for (var i in a) {
        ("object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports : root)[i] = a[i];
      }
    }
  }(window, function () {
    return modules = [function (module) {
      module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}');
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      var $ = __webpack_require__(3),
          window = __webpack_require__(2),
          document = window.document,
          generateMaskSet = __webpack_require__(4).generateMaskSet,
          analyseMask = __webpack_require__(4).analyseMask,
          maskScope = __webpack_require__(8);

      function Inputmask(alias, options, internal) {
        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
        this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, resolveAlias(this.opts.alias, options, this.opts), this.isRTL = this.opts.numericInput), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0;
      }

      function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
      }

      function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
        function importOption(option, optionData) {
          var attrOption = "" === dataAttribute ? option : dataAttribute + "-" + option;
          optionData = void 0 !== optionData ? optionData : npt.getAttribute(attrOption), null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData);
        }

        if (!0 === opts.importDataAttributes) {
          var attrOptions = npt.getAttribute(dataAttribute),
              option,
              dataoptions,
              optionData,
              p;
          if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = void 0, dataoptions) {
            if ("alias" === p.toLowerCase()) {
              optionData = dataoptions[p];
              break;
            }
          }

          for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), opts) {
            if (dataoptions) for (p in optionData = void 0, dataoptions) {
              if (p.toLowerCase() === option.toLowerCase()) {
                optionData = dataoptions[p];
                break;
              }
            }
            importOption(option, optionData);
          }
        }

        return $.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), Object.keys(userOptions).length;
      }

      Inputmask.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
          _maxTestPos: 500,
          placeholder: "_",
          optionalmarker: ["[", "]"],
          quantifiermarker: ["{", "}"],
          groupmarker: ["(", ")"],
          alternatormarker: "|",
          escapeChar: "\\",
          mask: null,
          regex: null,
          oncomplete: $.noop,
          onincomplete: $.noop,
          oncleared: $.noop,
          repeat: 0,
          greedy: !1,
          autoUnmask: !1,
          removeMaskOnSubmit: !1,
          clearMaskOnLostFocus: !0,
          insertMode: !0,
          insertModeVisual: !0,
          clearIncomplete: !1,
          alias: null,
          onKeyDown: $.noop,
          onBeforeMask: null,
          onBeforePaste: function onBeforePaste(pastedValue, opts) {
            return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
          },
          onBeforeWrite: null,
          onUnMask: null,
          showMaskOnFocus: !0,
          showMaskOnHover: !0,
          onKeyValidation: $.noop,
          skipOptionalPartCharacter: " ",
          numericInput: !1,
          rightAlign: !1,
          undoOnEscape: !0,
          radixPoint: "",
          _radixDance: !1,
          groupSeparator: "",
          keepStatic: null,
          positionCaretOnTab: !0,
          tabThrough: !1,
          supportsInputType: ["text", "tel", "url", "password", "search"],
          ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
          isComplete: null,
          preValidation: null,
          postValidation: null,
          staticDefinitionSymbol: void 0,
          jitMasking: !1,
          nullable: !0,
          inputEventOnly: !1,
          noValuePatching: !1,
          positionCaretOnClick: "lvp",
          casing: null,
          inputmode: "text",
          importDataAttributes: !0,
          shiftPositions: !0
        },
        definitions: {
          9: {
            validator: "[0-9\uFF10-\uFF19]",
            definitionSymbol: "*"
          },
          a: {
            validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
            definitionSymbol: "*"
          },
          "*": {
            validator: "[0-9\uFF10-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]"
          }
        },
        aliases: {},
        masksCache: {},
        mask: function mask(elems) {
          var that = this;
          return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
            var scopedOpts = $.extend(!0, {}, that.opts);

            if (importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
              var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
              void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, el.inputmask.$el = $(el), el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", that.userOptions), maskScope.call(el.inputmask, {
                action: "mask"
              }));
            }
          }), elems && elems[0] && elems[0].inputmask || this;
        },
        option: function option(options, noremask) {
          return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? ($.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
        },
        unmaskedvalue: function unmaskedvalue(value) {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "unmaskedvalue",
            value: value
          });
        },
        remove: function remove() {
          return maskScope.call(this, {
            action: "remove"
          });
        },
        getemptymask: function getemptymask() {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "getemptymask"
          });
        },
        hasMaskedValue: function hasMaskedValue() {
          return !this.opts.autoUnmask;
        },
        isComplete: function isComplete() {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "isComplete"
          });
        },
        getmetadata: function getmetadata() {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "getmetadata"
          });
        },
        isValid: function isValid(value) {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "isValid",
            value: value
          });
        },
        format: function format(value, metadata) {
          return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
            action: "format",
            value: value,
            metadata: metadata
          });
        },
        setValue: function setValue(value) {
          this.el && $(this.el).trigger("setvalue", [value]);
        },
        analyseMask: analyseMask
      }, Inputmask.extendDefaults = function (options) {
        $.extend(!0, Inputmask.prototype.defaults, options);
      }, Inputmask.extendDefinitions = function (definition) {
        $.extend(!0, Inputmask.prototype.definitions, definition);
      }, Inputmask.extendAliases = function (alias) {
        $.extend(!0, Inputmask.prototype.aliases, alias);
      }, Inputmask.format = function (value, options, metadata) {
        return Inputmask(options).format(value, metadata);
      }, Inputmask.unmask = function (value, options) {
        return Inputmask(options).unmaskedvalue(value);
      }, Inputmask.isValid = function (value, options) {
        return Inputmask(options).isValid(value);
      }, Inputmask.remove = function (elems) {
        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
          el.inputmask && el.inputmask.remove();
        });
      }, Inputmask.setValue = function (elems, value) {
        "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
          el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [value]);
        });
      }, Inputmask.dependencyLib = $, window.Inputmask = Inputmask, module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_RESULT__;

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      __WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
      }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      var window = __webpack_require__(2),
          document = window.document;

      function indexOf(list, elem) {
        for (var i = 0, len = list.length; i < len; i++) {
          if (list[i] === elem) return i;
        }

        return -1;
      }

      function isWindow(obj) {
        return null != obj && obj === obj.window;
      }

      function isArraylike(obj) {
        var length = "length" in obj && obj.length,
            ltype = _typeof(obj);

        return "function" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || "array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
      }

      function isValidElement(elem) {
        return elem instanceof Element;
      }

      function DependencyLib(elem) {
        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (null != elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);
      }

      DependencyLib.prototype = {
        on: function on(events, handler) {
          function addEvent(ev, namespace) {
            elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], eventRegistry[ev][namespace].push(handler);
          }

          if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
            var nsEvent = _events[endx].split("."),
                ev = nsEvent[0],
                namespace = nsEvent[1] || "global";

            addEvent(ev, namespace);
          }
          return this;
        },
        off: function off(events, handler) {
          var eventRegistry, elem;

          function removeEvent(ev, namespace, handler) {
            if (ev in eventRegistry == !0) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), "global" === namespace) for (var nmsp in eventRegistry[ev]) {
              eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
            } else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
          }

          function resolveNamespace(ev, namespace) {
            var evts = [],
                hndx,
                hndL;
            if (0 < ev.length) {
              if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
                evts.push({
                  ev: ev,
                  namespace: namespace && 0 < namespace.length ? namespace : "global",
                  handler: eventRegistry[ev][namespace][hndx]
                });
              } else evts.push({
                ev: ev,
                namespace: namespace && 0 < namespace.length ? namespace : "global",
                handler: handler
              });
            } else if (0 < namespace.length) for (var evNdx in eventRegistry) {
              for (var nmsp in eventRegistry[evNdx]) {
                if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
                  evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: eventRegistry[evNdx][nmsp][hndx]
                  });
                } else evts.push({
                  ev: evNdx,
                  namespace: nmsp,
                  handler: handler
                });
              }
            }
            return evts;
          }

          if (isValidElement(this[0])) {
            eventRegistry = this[0].eventRegistry, elem = this[0];

            for (var _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
              for (var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) {
                removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
              }
            }
          }

          return this;
        },
        trigger: function trigger(events, argument_1) {
          if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [events.type], endx = 0; endx < _events.length; endx++) {
            var nsEvent = _events[endx].split("."),
                ev = nsEvent[0],
                namespace = nsEvent[1] || "global";

            if (void 0 !== document && "global" === namespace) {
              var evnt,
                  i,
                  params = {
                bubbles: !0,
                cancelable: !0,
                detail: argument_1
              };

              if (document.createEvent) {
                try {
                  evnt = new CustomEvent(ev, params);
                } catch (e) {
                  evnt = document.createEvent("CustomEvent"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                }

                events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);
              } else evnt = document.createEventObject(), evnt.eventType = ev, evnt.detail = argument_1, events.type && DependencyLib.extend(evnt, events), elem.fireEvent("on" + evnt.eventType, evnt);
            } else if (void 0 !== eventRegistry[ev]) if (events = events.type ? events : DependencyLib.Event(events), events.detail = arguments.slice(1), "global" === namespace) for (var nmsp in eventRegistry[ev]) {
              for (i = 0; i < eventRegistry[ev][nmsp].length; i++) {
                eventRegistry[ev][nmsp][i].apply(elem, arguments);
              }
            } else for (i = 0; i < eventRegistry[ev][namespace].length; i++) {
              eventRegistry[ev][namespace][i].apply(elem, arguments);
            }
          }
          return this;
        }
      }, DependencyLib.isFunction = function (obj) {
        return "function" == typeof obj;
      }, DependencyLib.noop = function () {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function (elem, arr, i) {
        return null == arr ? -1 : indexOf(arr, elem, i);
      }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function (obj) {
        return "object" === _typeof(obj) && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
      }, DependencyLib.extend = function () {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = !1;

        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" === _typeof(target) || DependencyLib.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++) {
          if (null != (options = arguments[i])) for (name in options) {
            src = target[name], copy = options[name], target !== copy && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, src && DependencyLib.isArray(src) ? src : []) : src && DependencyLib.isPlainObject(src) ? src : {}, target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
          }
        }

        return target;
      }, DependencyLib.each = function (obj, callback) {
        var value,
            i = 0;
        if (isArraylike(obj)) for (var length = obj.length; i < length && (value = callback.call(obj[i], i, obj[i]), !1 !== value); i++) {
          ;
        } else for (i in obj) {
          if (value = callback.call(obj[i], i, obj[i]), !1 === value) break;
        }
        return obj;
      }, DependencyLib.data = function (owner, key, value) {
        if (void 0 === value) return owner.__data ? owner.__data[key] : null;
        owner.__data = owner.__data || {}, owner.__data[key] = value;
      }, "function" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function (event, params) {
        params = params || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var evt = document.createEvent("CustomEvent");
        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), evt;
      }, DependencyLib.Event.prototype = window.Event.prototype), module.exports = DependencyLib;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(3);

      function generateMaskSet(opts, nocache) {
        var ms;

        function generateMask(mask, metadata, opts) {
          var regexMask = !1,
              masksetDefinition,
              maskdefKey;

          if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, mask = regexMask ? (mask = opts.regex, mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
            var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
            mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
          }

          return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
            mask: mask,
            maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
            validPositions: {},
            _buffer: void 0,
            buffer: void 0,
            tests: {},
            excludes: {},
            metadata: metadata,
            maskLength: void 0,
            jitOffset: {}
          }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition;
        }

        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
          if (1 < opts.mask.length) {
            null === opts.keepStatic && (opts.keepStatic = !0);
            var altMask = opts.groupmarker[0];
            return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
              1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), void 0 === msk.mask || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
            }), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts);
          }

          opts.mask = opts.mask.pop();
        }

        return null === opts.keepStatic && (opts.keepStatic = !1), ms = opts.mask && void 0 !== opts.mask.mask && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts), ms;
      }

      function analyseMask(mask, regexMask, opts) {
        var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            escaped = !1,
            currentToken = new MaskToken(),
            match,
            m,
            openenings = [],
            maskTokens = [],
            openingToken,
            currentOpeningToken,
            alternator,
            lastMatch,
            closeRegexGroup = !1;

        function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
          this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        }

        function insertTestDefinition(mtoken, element, position) {
          position = void 0 !== position ? position : mtoken.matches.length;
          var prevMatch = mtoken.matches[position - 1];
          if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
            fn: new RegExp(element, opts.casing ? "i" : ""),
            "static": !1,
            optionality: !1,
            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
            casing: null,
            def: element,
            placeholder: void 0,
            nativeDef: element
          }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function (ndx, lmnt) {
            prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
              fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
              "static": !0,
              optionality: !1,
              newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch["static"],
              casing: null,
              def: opts.staticDefinitionSymbol || lmnt,
              placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
              nativeDef: (escaped ? "'" : "") + lmnt
            });
          })), escaped = !1;else {
            var maskdef = (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
            maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
              fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                this.test = maskdef.validator;
              }() : new RegExp("."),
              "static": maskdef["static"] || !1,
              optionality: !1,
              newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
              casing: maskdef.casing,
              def: maskdef.definitionSymbol || element,
              placeholder: maskdef.placeholder,
              nativeDef: element,
              generated: maskdef.generated
            }) : (mtoken.matches.splice(position++, 0, {
              fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
              "static": !0,
              optionality: !1,
              newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch["static"],
              casing: null,
              def: opts.staticDefinitionSymbol || element,
              placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
              nativeDef: (escaped ? "'" : "") + element
            }), escaped = !1);
          }
        }

        function verifyGroupMarker(maskToken) {
          maskToken && maskToken.matches && $.each(maskToken.matches, function (ndx, token) {
            var nextToken = maskToken.matches[ndx + 1];
            (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), verifyGroupMarker(token);
          });
        }

        function defaultCase() {
          if (0 < openenings.length) {
            if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), currentOpeningToken.isAlternator) {
              alternator = openenings.pop();

              for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
              }

              0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
            }
          } else insertTestDefinition(currentToken, m);
        }

        function reverseTokens(maskToken) {
          function reverseStatic(st) {
            return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), st;
          }

          for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) {
            if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
              var intMatch = parseInt(match);

              if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                var qt = maskToken.matches[match];
                maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
              }

              void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
            }
          }

          return maskToken;
        }

        function groupify(matches) {
          var groupToken = new MaskToken(!0);
          return groupToken.openGroup = !1, groupToken.matches = matches, groupToken;
        }

        function closeGroup() {
          if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) {
            if (0 < openenings.length) {
              if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), currentOpeningToken.isAlternator) {
                alternator = openenings.pop();

                for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                  alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
                }

                0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
              }
            } else currentToken.matches.push(openingToken);
          } else defaultCase();
        }

        function groupQuantifier(matches) {
          var lastMatch = matches.pop();
          return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch;
        }

        for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
          if (m = match[0], regexMask) switch (m.charAt(0)) {
            case "?":
              m = "{0,1}";
              break;

            case "+":
            case "*":
              m = "{" + m + "}";
              break;

            case "|":
              if (0 === openenings.length) {
                var altRegexGroup = groupify(currentToken.matches);
                altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], closeRegexGroup = !0;
              }

              break;
          }
          if (escaped) defaultCase();else switch (m.charAt(0)) {
            case "(?=":
              break;

            case "(?!":
              break;

            case "(?<=":
              break;

            case "(?<!":
              break;

            case opts.escapeChar:
              escaped = !0, regexMask && defaultCase();
              break;

            case opts.optionalmarker[1]:
            case opts.groupmarker[1]:
              closeGroup();
              break;

            case opts.optionalmarker[0]:
              openenings.push(new MaskToken(!1, !0));
              break;

            case opts.groupmarker[0]:
              openenings.push(new MaskToken(!0));
              break;

            case opts.quantifiermarker[0]:
              var quantifier = new MaskToken(!1, !1, !0);
              m = m.replace(/[{}]/g, "");
              var mqj = m.split("|"),
                  mq = mqj[0].split(","),
                  mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                  mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
              "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                min: mq0,
                max: mq1,
                jit: mqj[1]
              };
              var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;

              if (match = matches.pop(), match.isAlternator) {
                matches.push(match), matches = match.matches;
                var groupToken = new MaskToken(!0),
                    tmpMatch = matches.pop();
                matches.push(groupToken), matches = groupToken.matches, match = tmpMatch;
              }

              match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
              break;

            case opts.alternatormarker:
              if (0 < openenings.length) {
                currentOpeningToken = openenings[openenings.length - 1];
                var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches);
              } else lastMatch = groupQuantifier(currentToken.matches);

              if (lastMatch.isAlternator) openenings.push(lastMatch);else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
                lastMatch.openGroup = !1;
                var alternatorGroup = new MaskToken(!0);
                alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
              }
              break;

            default:
              defaultCase();
          }
        }

        for (closeRegexGroup && closeGroup(); 0 < openenings.length;) {
          openingToken = openenings.pop(), currentToken.matches.push(openingToken);
        }

        return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
      }

      module.exports = {
        generateMaskSet: generateMaskSet,
        analyseMask: analyseMask
      };
    }, function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: !0
      }), exports["default"] = _default;
      var escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");

      function _default(str) {
        return str.replace(escapeRegexRegex, "\\$1");
      }
    }, function (module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__(7), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), module.exports = __webpack_require__(1);
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var Inputmask = __webpack_require__(1);

      Inputmask.extendDefinitions({
        A: {
          validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
          casing: "upper"
        },
        "&": {
          validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
          casing: "upper"
        },
        "#": {
          validator: "[0-9A-Fa-f]",
          casing: "upper"
        }
      });
      var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

      function ipValidator(chrs, maskset, pos, strict, opts) {
        return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, ipValidatorRegex.test(chrs);
      }

      Inputmask.extendAliases({
        cssunit: {
          regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
        },
        url: {
          regex: "(https?|ftp)//.*",
          autoUnmask: !1
        },
        ip: {
          mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
          definitions: {
            i: {
              validator: ipValidator
            },
            j: {
              validator: ipValidator
            },
            k: {
              validator: ipValidator
            },
            l: {
              validator: ipValidator
            }
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            return maskedValue;
          },
          inputmode: "numeric"
        },
        email: {
          mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
          greedy: !1,
          casing: "lower",
          onBeforePaste: function onBeforePaste(pastedValue, opts) {
            return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
          },
          definitions: {
            "*": {
              validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5!#$%&'*+/=?^_`{|}~-]"
            },
            "-": {
              validator: "[0-9A-Za-z-]"
            }
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            return maskedValue;
          },
          inputmode: "email"
        },
        mac: {
          mask: "##:##:##:##:##:##"
        },
        vin: {
          mask: "V{13}9{4}",
          definitions: {
            V: {
              validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
              casing: "upper"
            }
          },
          clearIncomplete: !0,
          autoUnmask: !0
        },
        ssn: {
          mask: "999-99-9999",
          postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""));
          }
        }
      }), module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__(9);

      var $ = __webpack_require__(3),
          window = __webpack_require__(2),
          document = window.document,
          ua = window.navigator && window.navigator.userAgent || "",
          ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"),
          mobile = ("ontouchstart" in window),
          iemobile = /iemobile/i.test(ua),
          iphone = /iphone/i.test(ua) && !iemobile,
          keyCode = __webpack_require__(0);

      module.exports = function maskScope(actionObj) {
        var inputmask = this,
            maskset = inputmask.maskset,
            opts = inputmask.opts,
            el = inputmask.el,
            isRTL = inputmask.isRTL || (inputmask.isRTL = opts.numericInput);

        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
          var greedy = opts.greedy;
          clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
          var maskTemplate = [],
              ndxIntlzr,
              pos = 0,
              test,
              testPos,
              jitRenderStatic;

          do {
            if (!0 === baseOnInput && maskset.validPositions[pos]) testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test));else {
              testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
              var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
              jitRenderStatic = jitRenderStatic && test["static"] && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test["static"] && test.def !== opts.groupSeparator && null === test.fn, jitRenderStatic || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)) : jitRenderStatic = !1;
            }
            pos++;
          } while ((void 0 === inputmask.maxLength || pos < inputmask.maxLength) && (!0 !== test["static"] || "" !== test.def) || pos < minimalPos);

          return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), opts.greedy = greedy, maskTemplate;
        }

        function resetMaskSet(soft) {
          maskset.buffer = void 0, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
        }

        function getLastValidPosition(closestTo, strict, validPositions) {
          var before = -1,
              after = -1,
              valids = validPositions || maskset.validPositions;

          for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
            var psNdx = parseInt(posNdx);
            valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), closestTo <= psNdx && (after = psNdx));
          }

          return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after;
        }

        function getDecisionTaker(tst) {
          var decisionTaker = tst.locator[tst.alternation];
          return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), void 0 !== decisionTaker ? decisionTaker.toString() : "";
        }

        function getLocator(tst, align) {
          var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
          if ("" !== locator) for (; locator.length < align;) {
            locator += "0";
          }
          return locator;
        }

        function determineTestTemplate(pos, tests) {
          pos = 0 < pos ? pos - 1 : 0;

          for (var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch, ndx = 0; ndx < tests.length; ndx++) {
            var tst = tests[ndx];
            tstLocator = getLocator(tst, targetLocator.length);
            var distance = Math.abs(tstLocator - targetLocator);
            (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, bestMatch = tst);
          }

          return bestMatch;
        }

        function getTestTemplate(pos, ndxIntlzr, tstPs) {
          return maskset.validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }

        function getTest(pos, tests) {
          return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests(pos))[0];
        }

        function positionCanMatchDefinition(pos, testDefinition, opts) {
          for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
            if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match["static"]) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
              valid = !0;
              break;
            }

            if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
              valid = void 0;
              break;
            }
          }

          return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition(pos + maskset.jitOffset[pos], testDefinition, opts)), valid;
        }

        function getTests(pos, ndxIntlzr, tstPs) {
          var maskTokens = maskset.maskToken,
              testPos = ndxIntlzr ? tstPs : 0,
              ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
              matches = [],
              insertStop = !1,
              latestMatch,
              cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

          function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
            function handleMatch(match, loopNdx, quantifierRecurse) {
              function isFirstMatch(latestMatch, tokenGroup) {
                var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                return firstMatch || $.each(tokenGroup.matches, function (ndx, match) {
                  if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), firstMatch) return !1;
                }), firstMatch;
              }

              function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                var bestMatch, indexPos;

                if ((maskset.tests[pos] || maskset.validPositions[pos]) && $.each(maskset.tests[pos] || [maskset.validPositions[pos]], function (ndx, lmnt) {
                  if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                  var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation,
                      ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                  (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos);
                }), bestMatch) {
                  var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation],
                      locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                  return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1);
                }

                return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
              }

              function isSubsetOf(source, target) {
                function expand(pattern) {
                  for (var expanded = [], start = -1, end, i = 0, l = pattern.length; i < l; i++) {
                    if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end;) {
                      expanded.push(String.fromCharCode(start));
                    } else start = pattern.charCodeAt(i), expanded.push(pattern.charAt(i));
                  }

                  return expanded.join("");
                }

                return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match["static"] || !0 === target.match["static"]) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")));
              }

              function staticCanMatchDefinition(source, target) {
                return !0 === source.match["static"] && !0 !== target.match["static"] && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1);
              }

              function setMergeLocators(targetMatch, altMatch) {
                var alternationNdx = targetMatch.alternation,
                    shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
                if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) {
                  if (targetMatch.locator[i] !== altMatch.locator[i]) {
                    alternationNdx = i, shouldMerge = !0;
                    break;
                  }
                }

                if (shouldMerge) {
                  targetMatch.mloc = targetMatch.mloc || {};
                  var locNdx = targetMatch.locator[alternationNdx];

                  if (void 0 !== locNdx) {
                    if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), void 0 !== altMatch) {
                      for (var ndx in altMatch.mloc) {
                        "string" == typeof ndx && (ndx = ndx.split(",")[0]), void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                      }

                      targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",");
                    }

                    return !0;
                  }

                  targetMatch.alternation = void 0;
                }

                return !1;
              }

              function isSameLevel(targetMatch, altMatch) {
                if (targetMatch.locator.length !== altMatch.locator.length) return !1;

                for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) {
                  if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) return !1;
                }

                return !0;
              }

              if (testPos > pos + opts._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
              if (testPos === pos && void 0 === match.matches) return matches.push({
                match: match,
                locator: loopNdx.reverse(),
                cd: cacheDependency,
                mloc: {}
              }), !0;

              if (void 0 !== match.matches) {
                if (match.isGroup && quantifierRecurse !== match) {
                  if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse), match) return !0;
                } else if (match.isOptional) {
                  var optionalToken = match,
                      mtchsNdx = matches.length;

                  if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) {
                    if ($.each(matches, function (ndx, mtch) {
                      mtchsNdx <= ndx && (mtch.match.optionality = !0);
                    }), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                    insertStop = !0, testPos = pos;
                  }
                } else if (match.isAlternator) {
                  var alternateToken = match,
                      malternateMatches = [],
                      maltMatches,
                      currentMatches = matches.slice(),
                      loopNdxCnt = loopNdx.length,
                      altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;

                  if (-1 === altIndex || "string" == typeof altIndex) {
                    var currentPos = testPos,
                        ndxInitializerClone = ndxInitializer.slice(),
                        altIndexArr = [],
                        amndx;
                    if ("string" == typeof altIndex) altIndexArr = altIndex.split(",");else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                      altIndexArr.push(amndx.toString());
                    }

                    if (void 0 !== maskset.excludes[pos]) {
                      for (var altIndexArrClone = altIndexArr.slice(), i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                        var excludeSet = maskset.excludes[pos][i].toString().split(":");
                        loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                      }

                      0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone);
                    }

                    (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));

                    for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                      amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), maltMatches = matches.slice(), testPos = currentPos, matches = [];

                      for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                        var altMatch = maltMatches[ndx1],
                            dropMatch = !1;
                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);

                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                          var altMatch2 = malternateMatches[ndx2];

                          if ("string" != typeof altIndex || void 0 !== altMatch.alternation && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                            if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                              dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                              break;
                            }

                            if (isSubsetOf(altMatch, altMatch2)) {
                              setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                              break;
                            }

                            if (isSubsetOf(altMatch2, altMatch)) {
                              setMergeLocators(altMatch2, altMatch);
                              break;
                            }

                            if (staticCanMatchDefinition(altMatch, altMatch2)) {
                              isSameLevel(altMatch, altMatch2) || void 0 !== el.inputmask.userOptions.keepStatic ? setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch)) : opts.keepStatic = !0;
                              break;
                            }
                          }
                        }

                        dropMatch || malternateMatches.push(altMatch);
                      }
                    }

                    matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice();
                  } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);

                  if (match) return !0;
                } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                  var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];

                  if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup), match) {
                    if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx >= qt.quantifier.min, latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                      insertStop = !0, testPos = pos;
                      break;
                    }

                    return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), !0;
                  }
                } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) return !0;
              } else testPos++;
            }

            for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
              if (!0 !== maskToken.matches[tndx].isQuantifier) {
                var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                if (match && testPos === pos) return match;
                if (pos < testPos) break;
              }
            }
          }

          function mergeLocators(pos, tests) {
            var locator = [];
            return $.isArray(tests) || (tests = [tests]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate(pos, tests.slice()).locator.slice(), 0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function (ndx, tst) {
              if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice();else for (var i = 0; i < locator.length; i++) {
                tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
              }
            })), locator;
          }

          if (-1 < pos && (void 0 === inputmask.maxLength || pos < inputmask.maxLength)) {
            if (void 0 === ndxIntlzr) {
              for (var previousPos = pos - 1, test; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos;) {
                previousPos--;
              }

              void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
            }

            if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];

            for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
              var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
              if (match && testPos === pos || pos < testPos) break;
            }
          }

          return 0 !== matches.length && !insertStop || matches.push({
            match: {
              fn: null,
              "static": !0,
              optionality: !1,
              casing: null,
              def: "",
              placeholder: ""
            },
            locator: [],
            mloc: {},
            cd: cacheDependency
          }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), maskset.tests[pos]);
        }

        function getBufferTemplate() {
          return void 0 === maskset._buffer && (maskset._buffer = getMaskTemplate(!1, 1), void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer;
        }

        function getBuffer(noCache) {
          return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = getMaskTemplate(!0, getLastValidPosition(), !0), void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer;
        }

        function refreshFromBuffer(start, end, buffer) {
          var i,
              p,
              skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
              bffr = isRTL ? buffer.slice().reverse() : buffer;
          if (opts.skipOptionalPartCharacter = "", !0 === start) resetMaskSet(), maskset.tests = {}, start = 0, end = buffer.length, p = determineNewCaretPosition({
            begin: 0,
            end: 0
          }, !1).begin;else {
            for (i = start; i < end; i++) {
              delete maskset.validPositions[i];
            }

            p = start;
          }
          var keypress = new $.Event("keypress");

          for (i = start; i < end; i++) {
            keypress.which = bffr[i].toString().charCodeAt(0), inputmask.ignorable = !1;
            var valResult = EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
            !1 !== valResult && (p = valResult.forwardPosition);
          }

          opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
        }

        function casing(elem, test, pos) {
          switch (opts.casing || test.casing) {
            case "upper":
              elem = elem.toUpperCase();
              break;

            case "lower":
              elem = elem.toLowerCase();
              break;

            case "title":
              var posBefore = maskset.validPositions[pos - 1];
              elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
              break;

            default:
              if ($.isFunction(opts.casing)) {
                var args = Array.prototype.slice.call(arguments);
                args.push(maskset.validPositions), elem = opts.casing.apply(this, args);
              }

          }

          return elem;
        }

        function checkAlternationMatch(altArr1, altArr2, na) {
          for (var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], naNdx, i = 0; i < naArr.length; i++) {
            -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
          }

          for (var alndx = 0; alndx < altArr1.length; alndx++) {
            if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
              isMatch = !0;
              break;
            }
          }

          return isMatch;
        }

        function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
          var validPsClone = $.extend(!0, {}, maskset.validPositions),
              tstClone = $.extend(!0, {}, maskset.tests),
              lastAlt,
              alternation,
              isValidRslt = !1,
              returnRslt = !1,
              altPos,
              prevAltPos,
              i,
              validPos,
              decisionPos,
              lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition(),
              nextPos,
              input,
              begin,
              end;
          if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) lastAlt = 0, prevAltPos = getTest(lastAlt), alternation = prevAltPos.alternation;else for (; 0 <= lAltPos; lAltPos--) {
            if (altPos = maskset.validPositions[lAltPos], altPos && void 0 !== altPos.alternation) {
              if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
              lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos;
            }
          }

          if (void 0 !== alternation) {
            decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], !0 !== maskPos && maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation);
            var validInputs = [],
                resultPos = -1;

            for (i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) {
              -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1), validPos = maskset.validPositions[i], validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), delete maskset.validPositions[i];
            }

            for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10;) {
              for (maskset.tests = {}, resetMaskSet(!0), isValidRslt = !0, i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || getLastValidPosition(void 0, !0) + 1, input = validInputs[i], isValidRslt = isValid(nextPos, input, !1, fromIsValid, !0)); i++) {
                i === resultPos && (returnRslt = isValidRslt), 1 == maskPos && isValidRslt && (returnRslt = {
                  caretPos: i
                });
              }

              if (isValidRslt) break;

              if (resetMaskSet(), prevAltPos = getTest(decisionPos), maskset.validPositions = $.extend(!0, {}, validPsClone), maskset.tests = $.extend(!0, {}, tstClone), !maskset.excludes[decisionPos]) {
                returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                break;
              }

              var decisionTaker = getDecisionTaker(prevAltPos);

              if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
                returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                break;
              }

              for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++) {
                delete maskset.validPositions[i];
              }
            }
          }

          return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], returnRslt;
        }

        function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
          function isSelection(posObj) {
            return isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1;
          }

          strict = !0 === strict;
          var maskPos = pos;

          function processCommandObject(commandObj) {
            if (void 0 !== commandObj) {
              if (void 0 !== commandObj.remove && ($.isArray(commandObj.remove) || (commandObj.remove = [commandObj.remove]), $.each(commandObj.remove.sort(function (a, b) {
                return b.pos - a.pos;
              }), function (ndx, lmnt) {
                revalidateMask({
                  begin: lmnt,
                  end: lmnt + 1
                });
              }), commandObj.remove = void 0), void 0 !== commandObj.insert && ($.isArray(commandObj.insert) || (commandObj.insert = [commandObj.insert]), $.each(commandObj.insert.sort(function (a, b) {
                return a.pos - b.pos;
              }), function (ndx, lmnt) {
                "" !== lmnt.c && isValid(lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid);
              }), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
                var refresh = commandObj.refreshFromBuffer;
                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), commandObj.refreshFromBuffer = void 0;
              }

              void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, commandObj = !0);
            }

            return commandObj;
          }

          function _isValid(position, c, strict) {
            var rslt = !1;
            return $.each(getTests(position), function (ndx, tst) {
              var test = tst.match;

              if (getBuffer(!0), rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                c: getPlaceholder(position, test, !0) || test.def,
                pos: position
              }, !1 !== rslt) {
                var elem = void 0 !== rslt.c ? rslt.c : c,
                    validatedPos = position;
                return elem = elem === opts.skipOptionalPartCharacter && !0 === test["static"] ? getPlaceholder(position, test, !0) || test.def : elem, rslt = processCommandObject(rslt), !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c ? !1 : (!1 === revalidateMask(pos, $.extend({}, tst, {
                  input: casing(elem, test, validatedPos)
                }), fromIsValid, validatedPos) && (rslt = !1), !1);
              }
            }), rslt;
          }

          void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
          var result = !0,
              positionsClone = $.extend(!0, {}, maskset.validPositions);
          if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid) for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++) {
            void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, delete maskset.tests[i]);
          }

          if ($.isFunction(opts.preValidation) && !0 !== fromIsValid && !0 !== validateOnly && (result = opts.preValidation.call(el, getBuffer(), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate), result = processCommandObject(result)), !0 === result) {
            if (void 0 === inputmask.maxLength || maskPos < inputmask.maxLength) {
              if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                var currentPosValid = maskset.validPositions[maskPos];

                if (!currentPosValid || !0 !== currentPosValid.match["static"] || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                  if (opts.insertMode || void 0 === maskset.validPositions[seekNext(maskPos)] || pos.end > maskPos) {
                    var skip = !1;
                    if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[seekNext(maskPos)] && (result = isValid(maskPos + maskset.jitOffset[maskPos], c, !0), !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !isMask(maskPos, opts.keepStatic)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                      if (result = _isValid(nPos, c, strict), !1 !== result) {
                        result = trackbackPositions(maskPos, void 0 !== result.pos ? result.pos : nPos) || result, maskPos = nPos;
                        break;
                      }
                    }
                  }
                } else result = {
                  caret: seekNext(maskPos)
                };
              }
            } else result = !1;

            !1 !== result || !opts.keepStatic || !isComplete(getBuffer()) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate(!0)) : result = alternate(maskPos, c, strict, fromIsValid, void 0, pos), !0 === result && (result = {
              pos: maskPos
            });
          }

          if ($.isFunction(opts.postValidation) && !0 !== fromIsValid && !0 !== validateOnly) {
            var postResult = opts.postValidation.call(el, getBuffer(!0), void 0 !== pos.begin ? isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval);
            void 0 !== postResult && (result = !0 === postResult ? result : postResult);
          }

          result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (resetMaskSet(!0), maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions(void 0, maskPos, !0);
          var endResult = processCommandObject(result);
          return endResult;
        }

        function trackbackPositions(originalPos, newPos, fillOnly) {
          if (void 0 === originalPos) for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--) {
            ;
          }

          for (var ps = originalPos; ps < newPos; ps++) {
            if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
              var vp = 0 == ps ? getTest(ps) : maskset.validPositions[ps - 1];

              if (vp) {
                var tests = getTests(ps).slice();
                "" === tests[tests.length - 1].match.def && tests.pop();
                var bestMatch = determineTestTemplate(ps, tests),
                    np;

                if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {
                  input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                }), bestMatch.generatedInput = !0, revalidateMask(ps, bestMatch, !0), !0 !== fillOnly)) {
                  var cvpInput = maskset.validPositions[newPos].input;
                  return maskset.validPositions[newPos] = void 0, isValid(newPos, cvpInput, !0, !0);
                }
              }
            }
          }
        }

        function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
          function IsEnclosedStatic(pos, valids, selection) {
            var posMatch = valids[pos];
            if (void 0 === posMatch || !0 !== posMatch.match["static"] || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
            var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match["static"] && valids[pos - 1] : valids[pos - 1],
                nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match["static"] && valids[pos + 1] : valids[pos + 1];
            return prevMatch && nextMatch;
          }

          var offset = 0,
              begin = void 0 !== pos.begin ? pos.begin : pos,
              end = void 0 !== pos.end ? pos.end : pos;

          if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
            var positionsClone = $.extend(!0, {}, maskset.validPositions),
                lvp = getLastValidPosition(void 0, !0),
                i;

            for (maskset.p = begin, i = lvp; begin <= i; i--) {
              delete maskset.validPositions[i], void 0 === validTest && delete maskset.tests[i + 1];
            }

            var valid = !0,
                j = validatedPos,
                posMatch = j,
                t,
                canMatch;

            for (validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), posMatch++, j++), i = validTest ? end : end - 1; i <= lvp; i++) {
              if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                begin: begin,
                end: end
              }))) {
                for (; "" !== getTest(posMatch).match.def;) {
                  if (!1 !== (canMatch = positionCanMatchDefinition(posMatch, t, opts)) || "+" === t.match.def) {
                    "+" === t.match.def && getBuffer(!0);
                    var result = isValid(posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                    if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break;
                  } else valid = !1;

                  if (valid) {
                    void 0 === validTest && t.match["static"] && i === pos.begin && offset++;
                    break;
                  }

                  if (!valid && posMatch > maskset.maskLength) break;
                  posMatch++;
                }

                "" == getTest(posMatch).match.def && (valid = !1), posMatch = j;
              }

              if (!valid) break;
            }

            if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), !1;
          } else validTest && getTest(validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));

          return resetMaskSet(!0), offset;
        }

        function isMask(pos, strict, fuzzy) {
          var test = getTestTemplate(pos).match;
          if ("" === test.def && (test = getTest(pos).match), !0 !== test["static"]) return test.fn;
          if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;

          if (!0 !== strict && -1 < pos) {
            if (fuzzy) {
              var tests = getTests(pos);
              return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
            }

            var testTemplate = determineTestTemplate(pos, getTests(pos)),
                testPlaceHolder = getPlaceholder(pos, testTemplate.match);
            return testTemplate.match.def !== testPlaceHolder;
          }

          return !1;
        }

        function seekNext(pos, newBlock, fuzzy) {
          void 0 === fuzzy && (fuzzy = !0);

          for (var position = pos + 1; "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position, void 0, !0)) || !0 !== newBlock && !isMask(position, void 0, fuzzy));) {
            position++;
          }

          return position;
        }

        function seekPrevious(pos, newBlock) {
          var position = pos,
              tests;
          if (position <= 0) return 0;

          for (; 0 < --position && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position, void 0, !0) && (tests = getTests(position), tests.length < 2 || 2 === tests.length && "" === tests[1].match.def));) {
            ;
          }

          return position;
        }

        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
          if (event && $.isFunction(opts.onBeforeWrite)) {
            var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);

            if (result) {
              if (result.refreshFromBuffer) {
                var refresh = result.refreshFromBuffer;
                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = getBuffer(!0);
              }

              void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
            }
          }

          if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || caret(input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === keyCode.DELETE || event.keyCode === keyCode.BACKSPACE)), !0 === triggerEvents)) {
            var $input = $(input),
                nptVal = input.inputmask._valueGet();

            input.inputmask.skipInputEvent = !0, $input.trigger("input"), setTimeout(function () {
              nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete");
            }, 0);
          }
        }

        function getPlaceholder(pos, test, returnPL) {
          if (test = test || getTest(pos).match, void 0 !== test.placeholder || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
          if (!0 !== test["static"]) return opts.placeholder.charAt(pos % opts.placeholder.length);

          if (-1 < pos && void 0 === maskset.validPositions[pos]) {
            var tests = getTests(pos),
                staticAlternations = [],
                prevTest;
            if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) {
              if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match["static"] || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), !0 === tests[i].match["static"] && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
          }

          return test.def;
        }

        function HandleNativePlaceholder(npt, value) {
          if (ie) {
            if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
              var buffer = getBuffer().slice(),
                  nptValue = npt.inputmask._valueGet();

              if (nptValue !== value) {
                var lvp = getLastValidPosition();
                -1 === lvp && nptValue === getBufferTemplate().join("") ? buffer = [] : -1 !== lvp && clearOptionalTail(buffer), writeBuffer(npt, buffer);
              }
            }
          } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"));
        }

        function determineNewCaretPosition(selectedCaret, tabbed) {
          function doRadixFocus(clickPos) {
            if ("" !== opts.radixPoint && 0 !== opts.digits) {
              var vps = maskset.validPositions;

              if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                if (clickPos < seekNext(-1)) return !0;
                var radixPos = $.inArray(opts.radixPoint, getBuffer());

                if (-1 !== radixPos) {
                  for (var vp in vps) {
                    if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                  }

                  return !0;
                }
              }
            }

            return !1;
          }

          if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) {
            switch (opts.positionCaretOnClick) {
              case "none":
                break;

              case "select":
                selectedCaret = {
                  begin: 0,
                  end: getBuffer().length
                };
                break;

              case "ignore":
                selectedCaret.end = selectedCaret.begin = seekNext(getLastValidPosition());
                break;

              case "radixFocus":
                if (doRadixFocus(selectedCaret.begin)) {
                  var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                  selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext(radixPos) : radixPos;
                  break;
                }

              default:
                var clickPosition = selectedCaret.begin,
                    lvclickPosition = getLastValidPosition(clickPosition, !0),
                    lastPosition = seekNext(-1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0);
                if (clickPosition < lastPosition) selectedCaret.end = selectedCaret.begin = isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition);else {
                  var lvp = maskset.validPositions[lvclickPosition],
                      tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : void 0, lvp),
                      placeholder = getPlaceholder(lastPosition, tt.match);

                  if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                    var newPos = seekNext(lastPosition);
                    (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos);
                  }

                  selectedCaret.end = selectedCaret.begin = lastPosition;
                }
            }

            return selectedCaret;
          }
        }

        var EventRuler = {
          on: function on(input, eventName, eventHandler) {
            var ev = function ev(e) {
              e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
              var that = this,
                  args,
                  inputmask = that.inputmask;

              if (void 0 === inputmask && "FORM" !== this.nodeName) {
                var imOpts = $.data(that, "_inputmask_opts");
                $(that).off(), imOpts && new Inputmask(imOpts).mask(that);
              } else {
                if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === keyCode.TAB))) {
                  switch (e.type) {
                    case "input":
                      if (!0 === inputmask.skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return inputmask.skipInputEvent = !1, e.preventDefault();
                      break;

                    case "keydown":
                      inputmask.skipKeyPressEvent = !1, inputmask.skipInputEvent = !1;
                      break;

                    case "keypress":
                      if (!0 === inputmask.skipKeyPressEvent) return e.preventDefault();
                      inputmask.skipKeyPressEvent = !0;
                      break;

                    case "click":
                    case "focus":
                      return inputmask.validationEvent ? (inputmask.validationEvent = !1, input.blur(), HandleNativePlaceholder(input, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")), setTimeout(function () {
                        input.focus();
                      }, 3e3)) : (args = arguments, setTimeout(function () {
                        input.inputmask && eventHandler.apply(that, args);
                      }, 0)), !1;
                  }

                  var returnVal = eventHandler.apply(that, arguments);
                  return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                }

                e.preventDefault();
              }
            };

            input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
          },
          off: function off(input, event) {
            var events;
            input.inputmask && input.inputmask.events && (event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, $.each(events, function (eventName, evArr) {
              for (; 0 < evArr.length;) {
                var ev = evArr.pop();
                -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
              }

              delete input.inputmask.events[eventName];
            }));
          }
        },
            EventHandlers = {
          keydownEvent: function keydownEvent(e) {
            var input = this,
                $input = $(input),
                k = e.keyCode,
                pos = caret(input),
                kdResult = opts.onKeyDown.call(this, e, getBuffer(), pos, opts);
            if (void 0 !== kdResult) return kdResult;
            if (k === keyCode.BACKSPACE || k === keyCode.DELETE || iphone && k === keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === keyCode.X && !("oncut" in input)) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), maskset.p, e, input.inputmask._valueGet() !== getBuffer().join(""));else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
              e.preventDefault();
              var caretPos = seekNext(getLastValidPosition());
              caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
            } else k === keyCode.HOME && !e.shiftKey || k === keyCode.PAGE_UP ? (e.preventDefault(), caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, inputmask.undoValue.split("")), $input.trigger("click")) : !0 === opts.tabThrough && k === keyCode.TAB ? (!0 === e.shiftKey ? (!0 === getTest(pos.begin).match["static"] && (pos.begin = seekNext(pos.begin)), pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), pos.end = seekNext(pos.begin, !0), pos.end < maskset.maskLength && pos.end--), pos.begin < maskset.maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === keyCode.RIGHT ? setTimeout(function () {
              var caretPos = caret(input);
              caret(input, caretPos.begin);
            }, 0) : k === keyCode.LEFT && setTimeout(function () {
              var caretPos_begin = translatePosition(input.inputmask.caretPos.begin),
                  caretPos_end = translatePosition(input.inputmask.caretPos.end);
              caret(input, isRTL ? caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1) : caretPos_begin - (0 === caretPos_begin ? 0 : 1));
            }, 0));
            inputmask.ignorable = -1 !== $.inArray(k, opts.ignorables);
          },
          keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
            var input = this,
                $input = $(input),
                k = e.which || e.charCode || e.keyCode;
            if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) return k === keyCode.ENTER && inputmask.undoValue !== getBuffer().join("") && (inputmask.undoValue = getBuffer().join(""), setTimeout(function () {
              $input.trigger("change");
            }, 0)), inputmask.skipInputEvent = !0, !0;

            if (k) {
              44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
              var pos = checkval ? {
                begin: ndx,
                end: ndx
              } : caret(input),
                  forwardPosition,
                  c = String.fromCharCode(k);
              maskset.writeOutBuffer = !0;
              var valResult = isValid(pos, c, strict, void 0, void 0, void 0, checkval);

              if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition, !1 !== writeOut && (setTimeout(function () {
                opts.onKeyValidation.call(input, k, valResult);
              }, 0), maskset.writeOutBuffer && !1 !== valResult)) {
                var buffer = getBuffer();
                writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval);
              }

              if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult;
            }
          },
          pasteEvent: function pasteEvent(e) {
            var input = this,
                inputValue = this.inputmask._valueGet(!0),
                caretPos = caret(this),
                tempValue;

            isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
            var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
            if (valueBeforeCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret == (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;else {
              if (!e.clipboardData || !e.clipboardData.getData) return !0;
              inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret;
            }
            var pasteValue = inputValue;

            if ($.isFunction(opts.onBeforePaste)) {
              if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts), !1 === pasteValue) return e.preventDefault();
              pasteValue = pasteValue || inputValue;
            }

            return checkVal(this, !0, !1, pasteValue.toString().split(""), e), e.preventDefault();
          },
          inputFallBackEvent: function inputFallBackEvent(e) {
            function ieMobileHandler(input, inputValue, caretPos) {
              if (iemobile) {
                var inputChar = inputValue.replace(getBuffer().join(""), "");

                if (1 === inputChar.length) {
                  var iv = inputValue.split("");
                  iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                }
              }

              return inputValue;
            }

            function analyseChanges(inputValue, buffer, caretPos) {
              for (var frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder; frontPart.length < fpl;) {
                frontPart.push("~");
              }

              for (; frontBufferPart.length < fpl;) {
                frontBufferPart.push("~");
              }

              for (; backPart.length < bpl;) {
                backPart.unshift("~");
              }

              for (; backBufferPart.length < bpl;) {
                backBufferPart.unshift("~");
              }

              var newBuffer = frontPart.concat(backPart),
                  oldBuffer = frontBufferPart.concat(backBufferPart);

              for (i = 0, bl = newBuffer.length; i < bl; i++) {
                switch (placeholder = getPlaceholder(translatePosition(i)), action) {
                  case "insertText":
                    oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), i = bl;
                    break;

                  case "insertReplacementText":
                    "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                    break;

                  case "deleteContentBackward":
                    "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                    break;

                  default:
                    newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", !isMask(translatePosition(i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                    break;
                }
              }

              return {
                action: action,
                data: data,
                caret: caretPos
              };
            }

            var input = this,
                inputValue = input.inputmask._valueGet(!0),
                buffer = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""),
                caretPos = caret(input, void 0, void 0, !0);

            if (buffer !== inputValue) {
              inputValue = ieMobileHandler(input, inputValue, caretPos);
              var changes = analyseChanges(inputValue, buffer, caretPos);

              switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), writeBuffer(input, getBuffer()), caret(input, caretPos.begin, caretPos.end, !0), changes.action) {
                case "insertText":
                case "insertReplacementText":
                  $.each(changes.data, function (ndx, entry) {
                    var keypress = new $.Event("keypress");
                    keypress.which = entry.charCodeAt(0), inputmask.ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                  }), setTimeout(function () {
                    inputmask.$el.trigger("keyup");
                  }, 0);
                  break;

                case "deleteContentBackward":
                  var keydown = new $.Event("keydown");
                  keydown.keyCode = keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
                  break;

                default:
                  applyInputValue(input, inputValue);
                  break;
              }

              e.preventDefault();
            }
          },
          compositionendEvent: function compositionendEvent(e) {
            inputmask.$el.trigger("input");
          },
          setValueEvent: function setValueEvent(e, argument_1, argument_2) {
            var input = this,
                value = e && e.detail ? e.detail[0] : argument_1;
            void 0 === value && (value = this.inputmask._valueGet(!0)), applyInputValue(this, value), (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && caret(this, e.detail ? e.detail[1] : argument_2);
          },
          focusEvent: function focusEvent(e) {
            var input = this,
                nptValue = this.inputmask._valueGet();

            opts.showMaskOnFocus && nptValue !== getBuffer().join("") && writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())), !0 !== opts.positionCaretOnTab || !1 !== inputmask.mouseEnter || isComplete(getBuffer()) && -1 !== getLastValidPosition() || EventHandlers.clickEvent.apply(this, [e, !0]), inputmask.undoValue = getBuffer().join("");
          },
          invalidEvent: function invalidEvent(e) {
            inputmask.validationEvent = !0;
          },
          mouseleaveEvent: function mouseleaveEvent() {
            var input = this;
            inputmask.mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && HandleNativePlaceholder(this, inputmask.originalPlaceholder);
          },
          clickEvent: function clickEvent(e, tabbed) {
            var input = this;

            if ((this.inputmask.shadowRoot || document).activeElement === this) {
              var newCaretPosition = determineNewCaretPosition(caret(this), tabbed);
              void 0 !== newCaretPosition && caret(this, newCaretPosition);
            }
          },
          cutEvent: function cutEvent(e) {
            var input = this,
                pos = caret(this),
                clipboardData = window.clipboardData || e.clipboardData,
                clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
            clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), handleRemove(this, keyCode.DELETE, pos), writeBuffer(this, getBuffer(), maskset.p, e, inputmask.undoValue !== getBuffer().join(""));
          },
          blurEvent: function blurEvent(e) {
            var $input = $(this),
                input = this;

            if (this.inputmask) {
              HandleNativePlaceholder(this, inputmask.originalPlaceholder);

              var nptValue = this.inputmask._valueGet(),
                  buffer = getBuffer().slice();

              "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), !1 === isComplete(buffer) && (setTimeout(function () {
                $input.trigger("incomplete");
              }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), writeBuffer(this, buffer, void 0, e)), inputmask.undoValue !== getBuffer().join("") && (inputmask.undoValue = getBuffer().join(""), $input.trigger("change"));
            }
          },
          mouseenterEvent: function mouseenterEvent() {
            var input = this;
            inputmask.mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == inputmask.originalPlaceholder && this.placeholder !== inputmask.originalPlaceholder && (inputmask.originalPlaceholder = this.placeholder), opts.showMaskOnHover && HandleNativePlaceholder(this, (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join("")));
          },
          submitEvent: function submitEvent() {
            inputmask.undoValue !== getBuffer().join("") && inputmask.$el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""), opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), setTimeout(function () {
              writeBuffer(el, getBuffer());
            }, 0));
          },
          resetEvent: function resetEvent() {
            el.inputmask.refreshValue = !0, setTimeout(function () {
              applyInputValue(el, el.inputmask._valueGet(!0));
            }, 0);
          }
        },
            valueBuffer;

        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
          var inputmask = this || input.inputmask,
              inputValue = nptvl.slice(),
              charCodes = "",
              initialNdx = -1,
              result = void 0;

          function isTemplateMatch(ndx, charCodes) {
            for (var targetTemplate = getMaskTemplate(!0, 0).slice(ndx, seekNext(ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1];) {
              charCodeNdx--;
            }

            var match = 0 === charCodeNdx && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx).match["static"] && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx + 1).match["static"] && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));

            if (!match && 0 < charCodeNdx && !isMask(ndx, !1, !0)) {
              var nextPos = seekNext(ndx);
              inputmask.caretPos.begin < nextPos && (inputmask.caretPos = {
                begin: nextPos
              });
            }

            return match;
          }

          resetMaskSet(), maskset.tests = {}, initialNdx = opts.radixPoint ? determineNewCaretPosition({
            begin: 0,
            end: 0
          }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {
            begin: initialNdx
          };
          var staticMatches = [],
              prevCaretPos = inputmask.caretPos;

          if ($.each(inputValue, function (ndx, charCode) {
            if (void 0 !== charCode) if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++;else {
              var keypress = new $.Event("_checkval");
              keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;
              var lvp = getLastValidPosition(void 0, !0);
              isTemplateMatch(initialNdx, charCodes) ? result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1) : (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin), result && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "")), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match["static"] && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer(void 0, getBuffer(), result.forwardPosition, keypress, !1), inputmask.caretPos = {
                begin: result.forwardPosition,
                end: result.forwardPosition
              }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos;
            }
          }), 0 < staticMatches.length) {
            var sndx,
                validPos,
                nextValid = seekNext(-1, void 0, !1);
            if (!isComplete(getBuffer()) && staticMatches.length <= nextValid || isComplete(getBuffer()) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0]) for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift());) {
              var keypress = new $.Event("_checkval");
              if (validPos = maskset.validPositions[sndx], validPos.generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx), result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match["static"]) staticMatches.push(result.pos);else if (!result) break;
              nextSndx++;
            }
          }

          writeOut && writeBuffer(input, getBuffer(), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type && inputmask.undoValue !== getBuffer().join(""));
        }

        function unmaskedvalue(input) {
          if (input) {
            if (void 0 === input.inputmask) return input.value;
            input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0));
          }

          var umValue = [],
              vps = maskset.validPositions;

          for (var pndx in vps) {
            vps[pndx] && vps[pndx].match && (1 != vps[pndx].match["static"] || !0 !== vps[pndx].generatedInput) && umValue.push(vps[pndx].input);
          }

          var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");

          if ($.isFunction(opts.onUnMask)) {
            var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
            unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
          }

          return unmaskedValue;
        }

        function translatePosition(pos) {
          return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos), pos;
        }

        function caret(input, begin, end, notranslate, isDelete) {
          var range;
          if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), end = begin + range.text.length), {
            begin: notranslate ? begin : translatePosition(begin),
            end: notranslate ? end : translatePosition(end)
          };

          if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), void 0 !== begin.begin && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), "number" == typeof begin) {
            begin = notranslate ? begin : translatePosition(begin), end = notranslate ? end : translatePosition(end), end = "number" == typeof end ? end : begin;
            var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
            if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
              begin: begin,
              end: end
            }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), input === (input.inputmask.shadowRoot || document).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end);else if (window.getSelection) {
              if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                var textNode = document.createTextNode("");
                input.appendChild(textNode);
              }

              range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
              var sel = window.getSelection();
              sel.removeAllRanges(), sel.addRange(range);
            } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
          }
        }

        function determineLastRequiredPosition(returnDefinition) {
          var buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0),
              bl = buffer.length,
              pos,
              lvp = getLastValidPosition(),
              positions = {},
              lvTest = maskset.validPositions[lvp],
              ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0,
              testPos;

          for (pos = lvp + 1; pos < buffer.length; pos++) {
            testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
          }

          var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;

          for (pos = bl - 1; lvp < pos && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match["static"] || !0 === testPos.match["static"] && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) {
            bl--;
          }

          return returnDefinition ? {
            l: bl,
            def: positions[bl] ? positions[bl].match : void 0
          } : bl;
        }

        function clearOptionalTail(buffer) {
          buffer.length = 0;

          for (var template = getMaskTemplate(!0, 0, !0, void 0, !0), lmnt; void 0 !== (lmnt = template.shift());) {
            buffer.push(lmnt);
          }

          return buffer;
        }

        function isComplete(buffer) {
          if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);

          if ("*" !== opts.repeat) {
            var complete = !1,
                lrp = determineLastRequiredPosition(!0),
                aml = seekPrevious(lrp.l);

            if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
              complete = !0;

              for (var i = 0; i <= aml; i++) {
                var test = getTestTemplate(i).match;

                if (!0 !== test["static"] && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test["static"] && buffer[i] !== getPlaceholder(i, test)) {
                  complete = !1;
                  break;
                }
              }
            }

            return complete;
          }
        }

        function handleRemove(input, k, pos, strict, fromIsValid) {
          if ((opts.numericInput || isRTL) && (k === keyCode.BACKSPACE ? k = keyCode.DELETE : k === keyCode.DELETE && (k = keyCode.BACKSPACE), isRTL)) {
            var pend = pos.end;
            pos.end = pos.begin, pos.begin = pend;
          }

          var lvp = getLastValidPosition(void 0, !0),
              offset;

          if (pos.end >= getBuffer().length && lvp >= pos.end && (pos.end = lvp + 1), k === keyCode.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = seekPrevious(pos.begin)) : k === keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0, !0) ? pos.end + 1 : seekNext(pos.end) + 1), !1 !== (offset = revalidateMask(pos))) {
            if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== getTest(pos.begin).match.def.indexOf("|")) {
              var result = alternate(!0);

              if (result) {
                var newPos = void 0 !== result.caret ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
                (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin;
              }
            }

            !0 !== strict && (maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin);
          }
        }

        function applyInputValue(input, value) {
          input.inputmask.refreshValue = !1, $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), value = value.toString().split(""), checkVal(input, !0, !1, value), inputmask.undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && -1 === getLastValidPosition() && input.inputmask._valueSet("");
        }

        function mask() {
          function isElementTypeSupported(input, opts) {
            function patchValueProperty(npt) {
              var valueGet, valueSet;

              function patchValhook(type) {
                if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                  var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                    return elem.value;
                  },
                      valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                    return elem.value = value, elem;
                  };
                  $.valHooks[type] = {
                    get: function get(elem) {
                      if (elem.inputmask) {
                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                        var result = valhookGet(elem);
                        return -1 !== getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                      }

                      return valhookGet(elem);
                    },
                    set: function set(elem, value) {
                      var result = valhookSet(elem, value);
                      return elem.inputmask && applyInputValue(elem, value), result;
                    },
                    inputmaskpatch: !0
                  };
                }
              }

              function getter() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
              }

              function setter(value) {
                valueSet.call(this, value), this.inputmask && applyInputValue(this, value);
              }

              function installNativeValueSetFallback(npt) {
                EventRuler.on(npt, "mouseenter", function () {
                  var input = this,
                      value = this.inputmask._valueGet(!0);

                  value !== (isRTL ? getBuffer().reverse() : getBuffer()).join("") && applyInputValue(this, value);
                });
              }

              if (!npt.inputmask.__valueGet) {
                if (!0 !== opts.noValuePatching) {
                  if (Object.getOwnPropertyDescriptor) {
                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                    valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                      get: getter,
                      set: setter,
                      configurable: !0
                    })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                      return this.textContent;
                    }, valueSet = function valueSet(value) {
                      this.textContent = value;
                    }, Object.defineProperty(npt, "value", {
                      get: getter,
                      set: setter,
                      configurable: !0
                    }));
                  } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));

                  npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                }

                npt.inputmask._valueGet = function (overruleRTL) {
                  return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                }, npt.inputmask._valueSet = function (value, overruleRTL) {
                  valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                }, void 0 === valueGet && (valueGet = function valueGet() {
                  return this.value;
                }, valueSet = function valueSet(value) {
                  this.value = value;
                }, patchValhook(npt.type), installNativeValueSetFallback(npt));
              }
            }

            "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(keyCode.ENTER);
            var elementType = input.getAttribute("type"),
                isSupported = "input" === input.tagName.toLowerCase() && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
            if (!isSupported) if ("input" === input.tagName.toLowerCase()) {
              var el = document.createElement("input");
              el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
            } else isSupported = "partial";
            return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0, isSupported;
          }

          EventRuler.off(el);
          var isSupported = isElementTypeSupported(el, opts);

          if (!1 !== isSupported) {
            inputmask.originalPlaceholder = el.placeholder, inputmask.maxLength = void 0 !== el ? el.maxLength : void 0, -1 === inputmask.maxLength && (inputmask.maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(el.autocomplete), iphone && (opts.insertModeVisual = !1), EventRuler.on(el, "submit", EventHandlers.submitEvent), EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), EventRuler.on(el, "invalid", EventHandlers.invalidEvent), EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), EventRuler.on(el, "compositionend", EventHandlers.compositionendEvent)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), inputmask.undoValue = getBufferTemplate().join("");
            var activeElement = (el.inputmask.shadowRoot || document).activeElement;

            if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
              applyInputValue(el, el.inputmask._valueGet(!0), opts);
              var buffer = getBuffer().slice();
              !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer), activeElement === el && caret(el, seekNext(getLastValidPosition()));
            }
          }
        }

        if (void 0 !== actionObj) switch (actionObj.action) {
          case "isComplete":
            return el = actionObj.el, isComplete(getBuffer());

          case "unmaskedvalue":
            return void 0 !== el && void 0 === actionObj.value || (valueBuffer = actionObj.value, valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""), checkVal.call(this, void 0, !1, !1, valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, void 0, getBuffer(), 0, opts)), unmaskedvalue(el);

          case "mask":
            mask();
            break;

          case "format":
            return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, void 0, !0, !1, valueBuffer), actionObj.metadata ? {
              value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
              metadata: maskScope.call(this, {
                action: "getmetadata"
              }, maskset, opts)
            } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

          case "isValid":
            actionObj.value ? (valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""), checkVal.call(this, void 0, !0, !1, valueBuffer)) : actionObj.value = isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; rl < lmib && !isMask(lmib); lmib--) {
              ;
            }

            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === (isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""));

          case "getemptymask":
            return getBufferTemplate().join("");

          case "remove":
            if (el && el.inputmask) {
              $.data(el, "_inputmask_opts", null);
              var cv = opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(opts.autoUnmask),
                  valueProperty;
              cv !== getBufferTemplate().join("") ? el.inputmask._valueSet(cv, opts.autoUnmask) : el.inputmask._valueSet(""), EventRuler.off(el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value"), valueProperty && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                get: el.inputmask.__valueGet,
                set: el.inputmask.__valueSet,
                configurable: !0
              })) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = void 0;
            }

            return el;

          case "getmetadata":
            if ($.isArray(maskset.metadata)) {
              var maskTarget = getMaskTemplate(!0, 0, !1).join("");
              return $.each(maskset.metadata, function (ndx, mtdt) {
                if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
              }), maskTarget;
            }

            return maskset.metadata;
        }
      };
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
        return object.__proto__;
      } : function (object) {
        return object.constructor.prototype;
      });
    }, function (module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      var Inputmask = __webpack_require__(1),
          $ = Inputmask.dependencyLib,
          keyCode = __webpack_require__(0),
          currentYear = new Date().getFullYear(),
          escapeRegex = __webpack_require__(5)["default"],
          formatCode = {
        d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
        dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
          return pad(Date.prototype.getDate.call(this), 2);
        }],
        ddd: [""],
        dddd: [""],
        m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
          return Date.prototype.getMonth.call(this) + 1;
        }],
        mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
          return pad(Date.prototype.getMonth.call(this) + 1, 2);
        }],
        mmm: [""],
        mmmm: [""],
        yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
          return pad(Date.prototype.getFullYear.call(this), 2);
        }],
        yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
          return pad(Date.prototype.getFullYear.call(this), 4);
        }],
        h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
        hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
          return pad(Date.prototype.getHours.call(this), 2);
        }],
        hx: [function (x) {
          return "[0-9]{".concat(x, "}");
        }, Date.prototype.setHours, "hours", function (x) {
          return Date.prototype.getHours;
        }],
        H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
        HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
          return pad(Date.prototype.getHours.call(this), 2);
        }],
        Hx: [function (x) {
          return "[0-9]{".concat(x, "}");
        }, Date.prototype.setHours, "hours", function (x) {
          return function () {
            return pad(Date.prototype.getHours.call(this), x);
          };
        }],
        M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
        MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
          return pad(Date.prototype.getMinutes.call(this), 2);
        }],
        s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
        ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
          return pad(Date.prototype.getSeconds.call(this), 2);
        }],
        l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
          return pad(Date.prototype.getMilliseconds.call(this), 3);
        }],
        L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
          return pad(Date.prototype.getMilliseconds.call(this), 2);
        }],
        t: ["[ap]"],
        tt: ["[ap]m"],
        T: ["[AP]"],
        TT: ["[AP]M"],
        Z: [""],
        o: [""],
        S: [""]
      },
          formatAlias = {
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
      };

      function formatcode(match) {
        var dynMatches = new RegExp("\\d+$").exec(match[0]);

        if (dynMatches && void 0 !== dynMatches[0]) {
          var fcode = formatCode[match[0][0] + "x"].slice("");
          return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode;
        }

        if (formatCode[match[0]]) return formatCode[match[0]];
      }

      function getTokenizer(opts) {
        if (!opts.tokenizer) {
          var tokens = [],
              dyntokens = [];

          for (var ndx in formatCode) {
            if (/\.*x$/.test(ndx)) {
              var dynToken = ndx[0] + "\\d+";
              -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
            } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
          }

          opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g");
        }

        return opts.tokenizer;
      }

      function prefillYear(dateParts, currentResult, opts) {
        if (dateParts.year !== dateParts.rawyear) {
          var crrntyear = currentYear.toString(),
              enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""),
              currentYearPart = crrntyear.slice(0, enteredPart.length),
              currentYearNextPart = crrntyear.slice(enteredPart.length);

          if (2 === enteredPart.length && enteredPart === currentYearPart) {
            var entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
            dateParts.day === entryCurrentYear.getDay() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime()) && (dateParts.date.setFullYear(currentYear), dateParts.year = crrntyear, currentResult.insert = [{
              pos: currentResult.pos + 1,
              c: currentYearNextPart[0]
            }, {
              pos: currentResult.pos + 2,
              c: currentYearNextPart[1]
            }]);
          }
        }

        return currentResult;
      }

      function isValidDate(dateParts, currentResult, opts) {
        if (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) return currentResult;

        if ("29" == dateParts.day) {
          var tokenMatch = getTokenMatch(currentResult.pos, opts);
          if ("yyyy" === tokenMatch.targetMatch[0] && currentResult.pos - tokenMatch.targetMatchIndex == 2) return currentResult.remove = currentResult.pos + 1, currentResult;
        }

        return !1;
      }

      function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
        if (!result) return result;

        if (opts.min) {
          if (dateParts.rawyear) {
            var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""),
                minYear = opts.min.year.substr(0, rawYear.length),
                maxYear;

            if (rawYear < minYear) {
              var tokenMatch = getTokenMatch(result.pos, opts);
              if (rawYear = dateParts.rawyear.substr(0, result.pos - tokenMatch.targetMatchIndex + 1), minYear = opts.min.year.substr(0, rawYear.length), minYear <= rawYear) return result.remove = tokenMatch.targetMatchIndex + rawYear.length, result;
              if (rawYear = "yyyy" === tokenMatch.targetMatch[0] ? dateParts.rawyear.substr(1, 1) : dateParts.rawyear.substr(0, 1), minYear = opts.min.year.substr(2, 1), maxYear = opts.max ? opts.max.year.substr(2, 1) : rawYear, 1 === rawYear.length && minYear <= rawYear <= maxYear && !0 !== fromCheckval) return "yyyy" === tokenMatch.targetMatch[0] ? (result.insert = [{
                pos: result.pos + 1,
                c: rawYear,
                strict: !0
              }], result.caret = result.pos + 2, maskset.validPositions[result.pos].input = opts.min.year[1]) : (result.insert = [{
                pos: result.pos + 1,
                c: opts.min.year[1],
                strict: !0
              }, {
                pos: result.pos + 2,
                c: rawYear,
                strict: !0
              }], result.caret = result.pos + 3, maskset.validPositions[result.pos].input = opts.min.year[0]), result;
              result = !1;
            }
          }

          result && dateParts.year && dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime());
        }

        return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), result;
      }

      function parse(format, dateObjValue, opts, raw) {
        var mask = "",
            match,
            fcode;

        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
          if (void 0 === dateObjValue) {
            if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")";else switch (match[0]) {
              case "[":
                mask += "(";
                break;

              case "]":
                mask += ")?";
                break;

              default:
                mask += escapeRegex(match[0]);
            }
          } else if (fcode = formatcode(match)) {
            if (!0 !== raw && fcode[3]) {
              var getFn = fcode[3];
              mask += getFn.call(dateObjValue.date);
            } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0];
          } else mask += match[0];
        }

        return mask;
      }

      function pad(val, len) {
        for (val = String(val), len = len || 2; val.length < len;) {
          val = "0" + val;
        }

        return val;
      }

      function analyseMask(maskString, format, opts) {
        var dateObj = {
          date: new Date(1, 0, 1)
        },
            targetProp,
            mask = maskString,
            match,
            dateOperation;

        function setValue(dateObj, value, opts) {
          dateObj[targetProp] = value.replace(/[^0-9]/g, "0"), dateObj["raw" + targetProp] = value, void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
        }

        if ("string" == typeof mask) {
          for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
            var dynMatches = new RegExp("\\d+$").exec(match[0]),
                fcode = dynMatches ? match[0][0] + "x" : match[0],
                value = void 0;

            if (dynMatches) {
              var lastIndex = getTokenizer(opts).lastIndex,
                  tokanMatch = getTokenMatch(match.index, opts);
              getTokenizer(opts).lastIndex = lastIndex, value = mask.slice(0, mask.indexOf(tokanMatch.nextMatch[0]));
            } else value = mask.slice(0, fcode.length);

            Object.prototype.hasOwnProperty.call(formatCode, fcode) && (targetProp = formatCode[fcode][2], dateOperation = formatCode[fcode][1], setValue(dateObj, value, opts)), mask = mask.slice(value.length);
          }

          return dateObj;
        }

        if (mask && "object" === _typeof(mask) && Object.prototype.hasOwnProperty.call(mask, "date")) return mask;
      }

      function importDate(dateObj, opts) {
        return parse(opts.inputFormat, {
          date: dateObj
        }, opts);
      }

      function getTokenMatch(pos, opts) {
        var calcPos = 0,
            targetMatch,
            match,
            matchLength = 0;

        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat);) {
          var dynMatches = new RegExp("\\d+$").exec(match[0]);

          if (matchLength = dynMatches ? parseInt(dynMatches[0]) : match[0].length, calcPos += matchLength, pos <= calcPos) {
            targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
            break;
          }
        }

        return {
          targetMatchIndex: calcPos - matchLength,
          nextMatch: match,
          targetMatch: targetMatch
        };
      }

      Inputmask.extendAliases({
        datetime: {
          mask: function mask(opts) {
            return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), null;
          },
          placeholder: "",
          inputFormat: "isoDateTime",
          displayFormat: void 0,
          outputFormat: void 0,
          min: null,
          max: null,
          skipOptionalPartCharacter: "",
          i18n: {
            dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            ordinalSuffix: ["st", "nd", "rd", "th"]
          },
          preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
            if (strict) return !0;

            if (isNaN(c) && buffer[pos] !== c) {
              var tokenMatch = getTokenMatch(pos, opts);

              if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                var validator = formatCode[tokenMatch.targetMatch[0]][0];
                if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], buffer[pos - 1] = "0", {
                  fuzzy: !0,
                  buffer: buffer,
                  refreshFromBuffer: {
                    start: pos - 1,
                    end: pos + 1
                  },
                  pos: pos + 1
                };
              }
            }

            return !0;
          },
          postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
            if (strict) return !0;
            var tokenMatch, validator;
            if (!1 === currentResult) return tokenMatch = getTokenMatch(pos + 1, opts), tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]] && (validator = formatCode[tokenMatch.targetMatch[0]][0], new RegExp(validator).test("0" + c)) ? {
              insert: [{
                pos: pos,
                c: "0"
              }, {
                pos: pos + 1,
                c: c
              }],
              pos: pos + 1
            } : currentResult;

            if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), tokenMatch = getTokenMatch(pos, opts), tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
              validator = formatCode[tokenMatch.targetMatch[0]][0];
              var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
              !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1] && (maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0");
            }

            var result = currentResult,
                dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
            return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = prefillYear(dateParts, result, opts), result = isValidDate(dateParts, result, opts), result = isDateInRange(dateParts, result, opts, maskset, fromCheckval)), pos && result && currentResult.pos !== pos ? {
              buffer: parse(opts.inputFormat, dateParts, opts).split(""),
              refreshFromBuffer: {
                start: pos,
                end: currentResult.pos
              }
            } : result;
          },
          onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
            var input = this;
            e.ctrlKey && e.keyCode === keyCode.RIGHT && (this.inputmask._valueSet(importDate(new Date(), opts)), $(this).trigger("setvalue"));
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue;
          },
          casing: function casing(elem, test, pos, validPositions) {
            return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem;
          },
          onBeforeMask: function onBeforeMask(initialValue, opts) {
            return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), initialValue;
          },
          insertMode: !1,
          shiftPositions: !1,
          keepStatic: !1,
          inputmode: "numeric"
        }
      }), module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var Inputmask = __webpack_require__(1),
          $ = Inputmask.dependencyLib,
          keyCode = __webpack_require__(0),
          escapeRegex = __webpack_require__(5)["default"];

      function autoEscape(txt, opts) {
        for (var escapedTxt = "", i = 0; i < txt.length; i++) {
          Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
        }

        return escapedTxt;
      }

      function alignDigits(buffer, digits, opts, force) {
        if (0 < buffer.length && 0 < digits && (!opts.digitsOptional || force)) {
          var radixPosition = $.inArray(opts.radixPoint, buffer);
          -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);

          for (var i = 1; i <= digits; i++) {
            isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0");
          }
        }

        return buffer;
      }

      function findValidator(symbol, maskset) {
        var posNdx = 0;

        if ("+" === symbol) {
          for (posNdx in maskset.validPositions) {
            ;
          }

          posNdx = parseInt(posNdx);
        }

        for (var tstNdx in maskset.tests) {
          if (tstNdx = parseInt(tstNdx), posNdx <= tstNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) {
            if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
          }
        }

        return posNdx;
      }

      function findValid(symbol, maskset) {
        var ret = -1;
        return $.each(maskset.validPositions, function (ndx, tst) {
          if (tst && tst.match.def === symbol) return ret = parseInt(ndx), !1;
        }), ret;
      }

      function parseMinMaxOptions(opts) {
        void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done");
      }

      function genMask(opts) {
        opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
        var decimalDef = "0",
            radixPointDef = opts.radixPoint;
        !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, opts.definitions[radixPointDef]["static"] = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, opts.numericInput = !0);
        var mask = "[+]",
            altMask;

        if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator]["static"] = !0, opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", void 0 !== opts.digits && 0 !== opts.digits) {
          var dq = opts.digits.toString().split(",");
          isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}");
        }

        return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask]), opts.greedy = !1, parseMinMaxOptions(opts), mask;
      }

      function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
        return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), pos;
      }

      function decimalValidator(chrs, maskset, pos, strict, opts) {
        var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1,
            result = -1 !== radixPos && new RegExp("[0-9\uFF11-\uFF19]").test(chrs);
        return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
          insert: {
            pos: radixPos === pos ? radixPos + 1 : radixPos,
            c: opts.radixPoint
          },
          pos: pos
        } : result;
      }

      function checkForLeadingZeroes(buffer, opts) {
        var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? escapeRegex(opts.negationSymbol.front) + "?" : "") + escapeRegex(opts.prefix) + ")(.*)(" + escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")),
            number = numberMatches ? numberMatches[2] : "",
            leadingzeroes = !1;
        return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes;
      }

      Inputmask.extendAliases({
        numeric: {
          mask: genMask,
          _mask: function _mask(opts) {
            return "(" + opts.groupSeparator + "999){+|1}";
          },
          digits: "*",
          digitsOptional: !0,
          enforceDigitsOnBlur: !1,
          radixPoint: ".",
          positionCaretOnClick: "radixFocus",
          _radixDance: !0,
          groupSeparator: "",
          allowMinus: !0,
          negationSymbol: {
            front: "-",
            back: ""
          },
          prefix: "",
          suffix: "",
          min: null,
          max: null,
          SetMaxOnOverflow: !1,
          step: 1,
          inputType: "text",
          unmaskAsNumber: !1,
          roundingFN: Math.round,
          inputmode: "numeric",
          shortcuts: {
            k: "000",
            m: "000000"
          },
          placeholder: "0",
          greedy: !1,
          rightAlign: !0,
          insertMode: !0,
          autoUnmask: !1,
          skipOptionalPartCharacter: "",
          definitions: {
            0: {
              validator: decimalValidator
            },
            1: {
              validator: decimalValidator,
              definitionSymbol: "9"
            },
            "+": {
              validator: function validator(chrs, maskset, pos, strict, opts) {
                return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
              }
            },
            "-": {
              validator: function validator(chrs, maskset, pos, strict, opts) {
                return opts.allowMinus && chrs === opts.negationSymbol.back;
              }
            }
          },
          preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
            if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
            var pattern;

            if (pattern = opts.shortcuts && opts.shortcuts[c]) {
              if (1 < pattern.length) for (var inserts = [], i = 0; i < pattern.length; i++) {
                inserts.push({
                  pos: pos + i,
                  c: pattern[i],
                  strict: !1
                });
              }
              return {
                insert: inserts
              };
            }

            var radixPos = $.inArray(opts.radixPoint, buffer),
                initPos = pos;

            if (pos = hanndleRadixDance(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
              if (!0 !== opts.allowMinus) return !1;
              var isNegative = !1,
                  front = findValid("+", maskset),
                  back = findValid("-", maskset);
              return -1 !== front && (isNegative = [front, back]), !1 !== isNegative ? {
                remove: isNegative,
                caret: initPos
              } : {
                insert: [{
                  pos: findValidator("+", maskset),
                  c: opts.negationSymbol.front,
                  fromIsValid: !0
                }, {
                  pos: findValidator("-", maskset),
                  c: opts.negationSymbol.back,
                  fromIsValid: void 0
                }],
                caret: initPos + opts.negationSymbol.back.length
              };
            }

            if (strict) return !0;
            if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {
              caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
            };
            if (!1 === opts.__financeInput) if (isSelection) {
              if (opts.digitsOptional) return {
                rewritePosition: caretPos.end
              };

              if (!opts.digitsOptional) {
                if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                  insert: {
                    pos: radixPos + 1,
                    c: "0",
                    fromIsValid: !0
                  },
                  rewritePosition: radixPos
                } : {
                  rewritePosition: radixPos + 1
                };
                if (caretPos.begin < radixPos) return {
                  rewritePosition: caretPos.begin - 1
                };
              }
            } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {
              rewritePosition: radixPos
            };
            return {
              rewritePosition: pos
            };
          },
          postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
            if (!1 === currentResult) return currentResult;
            if (strict) return !0;

            if (null !== opts.min || null !== opts.max) {
              var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                unmaskAsNumber: !0
              }));
              if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length > opts.min.toString().length || unmasked < 0)) return !1;
              if (null !== opts.max && unmasked > opts.max) return !!opts.SetMaxOnOverflow && {
                refreshFromBuffer: !0,
                buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
              };
            }

            return currentResult;
          },
          onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
            if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
            var processValue = maskedValue.replace(opts.prefix, "");
            return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(escapeRegex(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(escapeRegex.call(this, opts.radixPoint), ".")), processValue = processValue.replace(new RegExp("^" + escapeRegex(opts.negationSymbol.front)), "-"), processValue = processValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue;
          },
          isComplete: function isComplete(buffer, opts) {
            var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
            return maskedValue = maskedValue.replace(new RegExp("^" + escapeRegex(opts.negationSymbol.front)), "-"), maskedValue = maskedValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back) + "$"), ""), maskedValue = maskedValue.replace(opts.prefix, ""), maskedValue = maskedValue.replace(opts.suffix, ""), maskedValue = maskedValue.replace(new RegExp(escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts.radixPoint && (maskedValue = maskedValue.replace(escapeRegex(opts.radixPoint), ".")), isFinite(maskedValue);
          },
          onBeforeMask: function onBeforeMask(initialValue, opts) {
            var radixPoint = opts.radixPoint || ",";
            isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
            var valueParts = initialValue.split(radixPoint),
                integerPart = valueParts[0].replace(/[^\-0-9]/g, ""),
                decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "",
                forceDigits = 1 < valueParts.length;
            initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
            var digits = 0;

            if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, "" !== decimalPart || !opts.digitsOptional)) {
              var digitsFactor = Math.pow(10, digits || 1);
              initialValue = initialValue.replace(escapeRegex(radixPoint), "."), isNaN(parseFloat(initialValue)) || (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), initialValue = initialValue.toString().replace(".", radixPoint);
            }

            if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), null !== opts.min || null !== opts.max) {
              var numberValue = initialValue.toString().replace(radixPoint, ".");
              null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint));
            }

            return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("");
          },
          onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
            function stripBuffer(buffer, stripRadix) {
              if (!1 !== opts.__financeInput || stripRadix) {
                var position = $.inArray(opts.radixPoint, buffer);
                -1 !== position && buffer.splice(position, 1);
              }

              if ("" !== opts.groupSeparator) for (; -1 !== (position = buffer.indexOf(opts.groupSeparator));) {
                buffer.splice(position, 1);
              }
              return buffer;
            }

            var result,
                leadingzeroes = checkForLeadingZeroes(buffer, opts);
            if (leadingzeroes) for (var caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1), offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0, i = leadingzeroes[0].length - offset; 0 < i; i--) {
              delete this.maskset.validPositions[caretNdx + i], delete buffer[caretNdx + i];
            }
            if (e) switch (e.type) {
              case "blur":
              case "checkval":
                if (null !== opts.min) {
                  var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                    unmaskAsNumber: !0
                  }));
                  if (null !== opts.min && unmasked < opts.min) return {
                    refreshFromBuffer: !0,
                    buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                  };
                }

                if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                  var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? escapeRegex(opts.negationSymbol.front) + "?" : "") + escapeRegex(opts.prefix) + ")(.*)(" + escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join("")),
                      number = nmbrMtchs ? nmbrMtchs[2] : "";
                  0 == number && (result = {
                    refreshFromBuffer: !0,
                    buffer: [0]
                  });
                } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), result = {
                  refreshFromBuffer: !0,
                  buffer: stripBuffer(buffer)
                }));

                if (opts.enforceDigitsOnBlur) {
                  result = result || {};
                  var bffr = result && result.buffer || buffer.slice().reverse();
                  result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse();
                }

            }
            return result;
          },
          onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
            var $input = $(this),
                bffr;
            if (e.ctrlKey) switch (e.keyCode) {
              case keyCode.UP:
                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue"), !1;

              case keyCode.DOWN:
                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue"), !1;
            }

            if (!e.shiftKey && (e.keyCode === keyCode.DELETE || e.keyCode === keyCode.BACKSPACE || e.keyCode === keyCode.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
              if (buffer[e.keyCode === keyCode.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin]), !1;

              if (!0 === opts._radixDance) {
                var radixPos = $.inArray(opts.radixPoint, buffer);

                if (opts.digitsOptional) {
                  if (0 === radixPos) return bffr = buffer.slice().reverse(), bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]), !1;
                } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === keyCode.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== keyCode.BACKSPACE && e.keyCode !== keyCode.BACKSPACE_SAFARI || caretPos.begin++, bffr = buffer.slice().reverse(), bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]), !1;
              }
            }
          }
        },
        currency: {
          prefix: "",
          groupSeparator: ",",
          alias: "numeric",
          digits: 2,
          digitsOptional: !1
        },
        decimal: {
          alias: "numeric"
        },
        integer: {
          alias: "numeric",
          digits: 0
        },
        percentage: {
          alias: "numeric",
          min: 0,
          max: 100,
          suffix: " %",
          digits: 0,
          allowMinus: !1
        },
        indianns: {
          alias: "numeric",
          _mask: function _mask(opts) {
            return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}";
          },
          groupSeparator: ",",
          radixPoint: ".",
          placeholder: "0",
          digits: 2,
          digitsOptional: !1
        }
      }), module.exports = Inputmask;
    }, function (module, exports, __webpack_require__) {
      "use strict";

      var _window = _interopRequireDefault(__webpack_require__(2)),
          _inputmask = _interopRequireDefault(__webpack_require__(1));

      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function _typeof(obj) {
          return _typeof2(obj);
        } : function _typeof(obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        }, _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
      }

      function _possibleConstructorReturn(self, call) {
        return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
      }

      function _assertThisInitialized(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }

      function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
          }
        }), superClass && _setPrototypeOf(subClass, superClass);
      }

      function _wrapNativeSuper(Class) {
        var _cache = "function" == typeof Map ? new Map() : void 0;

        return _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (null === Class || !_isNativeFunction(Class)) return Class;
          if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");

          if ("undefined" != typeof _cache) {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }

          return Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), _setPrototypeOf(Wrapper, Class);
        }, _wrapNativeSuper(Class);
      }

      function isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }

      function _construct(Parent, args, Class) {
        return _construct = isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a),
              instance = new Constructor();
          return Class && _setPrototypeOf(instance, Class.prototype), instance;
        }, _construct.apply(null, arguments);
      }

      function _isNativeFunction(fn) {
        return -1 !== Function.toString.call(fn).indexOf("[native code]");
      }

      function _setPrototypeOf(o, p) {
        return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          return o.__proto__ = p, o;
        }, _setPrototypeOf(o, p);
      }

      function _getPrototypeOf(o) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        }, _getPrototypeOf(o);
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var document = _window["default"].document;

      if (document && document.head && document.head.attachShadow && void 0 === customElements.get("input-mask")) {
        var InputmaskElement = function (_HTMLElement) {
          function InputmaskElement() {
            var _this;

            _classCallCheck(this, InputmaskElement), _this = _possibleConstructorReturn(this, _getPrototypeOf(InputmaskElement).call(this));

            var attributeNames = _this.getAttributeNames(),
                shadow = _this.attachShadow({
              mode: "closed"
            }),
                input = document.createElement("input");

            for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) {
              Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute(attributeNames[attr], _this.getAttribute(attributeNames[attr]));
            }

            var im = new _inputmask["default"]();
            return im.dataAttribute = "", im.mask(input), input.inputmask.shadowRoot = shadow, _this;
          }

          return _inherits(InputmaskElement, _HTMLElement), InputmaskElement;
        }(_wrapNativeSuper(HTMLElement));

        customElements.define("input-mask", InputmaskElement);
      }
    }], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
        enumerable: !0,
        get: getter
      });
    }, __webpack_require__.r = function (exports) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(exports, "__esModule", {
        value: !0
      });
    }, __webpack_require__.t = function (value, mode) {
      if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
      if (4 & mode && "object" == _typeof2(value) && value && value.__esModule) return value;
      var ns = Object.create(null);
      if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
        enumerable: !0,
        value: value
      }), 2 & mode && "string" != typeof value) for (var key in value) {
        __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      }
      return ns;
    }, __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function getDefault() {
        return module["default"];
      } : function getModuleExports() {
        return module;
      };
      return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 6);

    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {}
      };
      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }

    var modules, installedModules;
  });
  ; //For dynamic_adapt
  // Dynamic Adapt v.1
  // HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
  // e.x. data-da=".item,992,2"
  // Andrikanych Yevhen 2020
  // https://www.youtube.com/c/freelancerlifestyle

  "use strict";

  function DynamicAdapt(type) {
    this.type = type;
  }

  DynamicAdapt.prototype.init = function () {
    var _this2 = this;

    var _this = this; // массив объектов


    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

    this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

    for (var _i25 = 0; _i25 < this.nodes.length; _i25++) {
      var node = this.nodes[_i25];
      var data = node.dataset.da.trim();
      var dataArray = data.split(",");
      var оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects); // массив уникальных медиа-запросов

    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    }); // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске

    var _loop11 = function _loop11(_i26) {
      var media = _this2.mediaQueries[_i26];
      var mediaSplit = String.prototype.split.call(media, ',');
      var matchMedia = window.matchMedia(mediaSplit[0]);
      var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

      var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
        return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, оbjectsFilter);
      });

      _this2.mediaHandler(matchMedia, оbjectsFilter);
    };

    for (var _i26 = 0; _i26 < this.mediaQueries.length; _i26++) {
      _loop11(_i26);
    }
  };

  DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
      for (var _i27 = 0; _i27 < оbjects.length; _i27++) {
        var оbject = оbjects[_i27];
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
    } else {
      for (var _i28 = 0; _i28 < оbjects.length; _i28++) {
        var _оbject = оbjects[_i28];

        if (_оbject.element.classList.contains(this.daClassname)) {
          this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
        }
      }
    }
  }; // Функция перемещения


  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);

    if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
    }

    if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
    }

    destination.children[place].insertAdjacentElement('beforebegin', element);
  }; // Функция возврата


  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);

    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
      parent.insertAdjacentElement('beforeend', element);
    }
  }; // Функция получения индекса внутри родителя


  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    var array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  }; // Функция сортировки массива по breakpoint и place 
  // по возрастанию для this.type = min
  // по убыванию для this.type = max


  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };

  var da = new DynamicAdapt("max");
  da.init();
  ; //scroll

  var scr_body = document.querySelector('body');
  var scr_blocks = document.querySelectorAll('._scr-sector');
  var scr_items = document.querySelectorAll('._scr-item');
  var scr_fix_block = document.querySelectorAll('._side-wrapper');
  var scr_min_height = 750;
  var scrolling = true;
  var scrolling_full = true;
  var scrollDirection = 0; //ScrollOnScroll

  window.addEventListener('scroll', scroll_scroll);

  function scroll_scroll() {
    //scr_body.setAttribute('data-scroll', pageYOffset);
    var src_value = pageYOffset;
    var header = document.querySelector('header.header');

    if (header !== null) {
      if (src_value > 10) {
        header.classList.add('_scroll');
      } else {
        header.classList.remove('_scroll');
      }
    }

    if (scr_blocks.length > 0) {
      for (var _index6 = 0; _index6 < scr_blocks.length; _index6++) {
        var block = scr_blocks[_index6];
        var block_offset = offset(block).top;
        var block_height = block.offsetHeight;

        if (pageYOffset > block_offset - window.innerHeight / 1.5 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
          block.classList.add('_scr-sector_active');
        } else {
          if (block.classList.contains('_scr-sector_active')) {
            block.classList.remove('_scr-sector_active');
          }
        }

        if (pageYOffset > block_offset - window.innerHeight / 2 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
          if (!block.classList.contains('_scr-sector_current')) {
            block.classList.add('_scr-sector_current');
          }
        } else {
          if (block.classList.contains('_scr-sector_current')) {
            block.classList.remove('_scr-sector_current');
          }
        }
      }
    }

    if (scr_items.length > 0) {
      for (var _index7 = 0; _index7 < scr_items.length; _index7++) {
        var scr_item = scr_items[_index7];
        var scr_item_offset = offset(scr_item).top;
        var scr_item_height = scr_item.offsetHeight;
        var scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);

        if (window.innerHeight > scr_item_height) {
          scr_item_point = window.innerHeight - scr_item_height / 3;
        }

        if (src_value > scr_item_offset - scr_item_point && src_value < scr_item_offset + scr_item_height) {
          scr_item.classList.add('_active');
          scroll_load_item(scr_item);
        } else {
          scr_item.classList.remove('_active');
        }

        if (src_value > scr_item_offset - window.innerHeight) {
          if (scr_item.querySelectorAll('._lazy').length > 0) {
            scroll_lazy(scr_item);
          }
        }
      }
    }

    if (scr_fix_block.length > 0) {
      fix_block(scr_fix_block, src_value);
    }

    var custom_scroll_line = document.querySelector('._custom-scroll__line');

    if (custom_scroll_line) {
      var window_height = window.innerHeight;
      var content_height = document.querySelector('.wrapper').offsetHeight;
      var scr_procent = pageYOffset / (content_height - window_height) * 100;
      var custom_scroll_line_height = custom_scroll_line.offsetHeight;
      custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
    }

    if (src_value > scrollDirection) {// downscroll code
    } else {// upscroll code
      }

    scrollDirection = src_value <= 0 ? 0 : src_value;
  }

  setTimeout(function () {
    //document.addEventListener("DOMContentLoaded", scroll_scroll);
    scroll_scroll();
  }, 100);

  function scroll_lazy(scr_item) {
    var lazy_src = scr_item.querySelectorAll('*[data-src]');

    if (lazy_src.length > 0) {
      for (var _index8 = 0; _index8 < lazy_src.length; _index8++) {
        var _el3 = lazy_src[_index8];

        if (!_el3.classList.contains('_loaded')) {
          _el3.setAttribute('src', _el3.getAttribute('data-src'));

          _el3.classList.add('_loaded');
        }
      }
    }

    var lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');

    if (lazy_srcset.length > 0) {
      for (var _index9 = 0; _index9 < lazy_srcset.length; _index9++) {
        var _el4 = lazy_srcset[_index9];

        if (!_el4.classList.contains('_loaded')) {
          _el4.setAttribute('srcset', _el4.getAttribute('data-srcset'));

          _el4.classList.add('_loaded');
        }
      }
    }
  }

  function scroll_load_item(scr_item) {
    if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
      var map_item = document.getElementById('map');

      if (map_item) {
        scr_item.classList.add('_loaded-map');
        map();
      }
    }
  } //FullScreenScroll


  if (scr_blocks.length > 0 && !isMobile.any()) {
    disableScroll();
    window.addEventListener('wheel', full_scroll);
  }

  function full_scroll(e) {
    var viewport_height = window.innerHeight;

    if (viewport_height >= scr_min_height) {
      if (scrolling_full) {
        // ВЫЧИСЛИТЬ!!!
        var current_scroll = pageYOffset; //parseInt(scr_body.getAttribute('data-scroll'));
        //

        var current_block = document.querySelector('._scr-sector._scr-sector_current');
        var current_block_pos = offset(current_block).top;
        var current_block_height = current_block.offsetHeight;
        var current_block_next = current_block.nextElementSibling;
        var current_block_prev = current_block.previousElementSibling;
        var block_pos;

        if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
          if (current_block_prev) {
            var current_block_prev_height = current_block_prev.offsetHeight;
            block_pos = offset(current_block_prev).top;

            if (current_block_height <= viewport_height) {
              if (current_block_prev_height >= viewport_height) {
                block_pos = block_pos + (current_block_prev_height - viewport_height);
                full_scroll_to_sector(block_pos);
              }
            } else {
              enableScroll();

              if (current_scroll <= current_block_pos) {
                full_scroll_to_sector(block_pos);
              }
            }
          } else {
            full_scroll_pagestart();
          }
        } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
          if (current_block_next) {
            block_pos = offset(current_block_next).top;

            if (current_block_height <= viewport_height) {
              full_scroll_to_sector(block_pos);
            } else {
              enableScroll();

              if (current_scroll >= block_pos - viewport_height) {
                full_scroll_to_sector(block_pos);
              }
            }
          } else {
            full_scroll_pageend();
          }
        }
      } else {
        disableScroll();
      }
    } else {
      enableScroll();
    }
  }

  function full_scroll_to_sector(pos) {
    disableScroll();
    scrolling_full = false;

    _goto(pos, 800);

    var scr_pause = 500;

    if (navigator.appVersion.indexOf("Mac") != -1) {
      scr_pause = 1000;
    }

    ;
    setTimeout(function () {
      scrolling_full = true;
    }, scr_pause);
  }

  function full_scroll_pagestart() {}

  function full_scroll_pageend() {} //ScrollOnClick (Navigation)


  var link = document.querySelectorAll('._goto-block');

  if (link) {
    var blocks = [];

    var _loop12 = function _loop12(_index10) {
      var el = link[_index10];
      var block_name = el.getAttribute('href').replace('#', '');

      if (block_name != '' && !~blocks.indexOf(block_name)) {
        blocks.push(block_name);
      }

      el.addEventListener('click', function (e) {
        if (menuBody.classList.contains('vs-active')) {
          menuBody.classList.remove('vs-active');
          iconMenu.classList.remove('vs-active');
          body_lock_remove();
        }

        var target_block_class = el.getAttribute('href').replace('#', '');
        var target_block = document.querySelector('.' + target_block_class);

        _goto(target_block, 300);

        e.preventDefault();
      });
    };

    for (var _index10 = 0; _index10 < link.length; _index10++) {
      _loop12(_index10);
    }

    window.addEventListener('scroll', function (el) {
      var old_current_link = document.querySelectorAll('._goto-block._active');

      if (old_current_link) {
        for (var _index11 = 0; _index11 < old_current_link.length; _index11++) {
          var _el5 = old_current_link[_index11];

          _el5.classList.remove('_active');
        }
      }

      for (var _index12 = 0; _index12 < blocks.length; _index12++) {
        var block = blocks[_index12];
        var block_item = document.querySelector('.' + block);

        if (block_item) {
          var block_offset = offset(block_item).top;
          var block_height = block_item.offsetHeight;

          if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
            var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

            for (var _index13 = 0; _index13 < current_links.length; _index13++) {
              var current_link = current_links[_index13];
              current_link.classList.add('_active');
            }
          }
        }
      }
    });
  } //ScrollOnClick (Simple)


  var goto_links = document.querySelectorAll('._goto');

  if (goto_links) {
    var _loop13 = function _loop13(_index14) {
      var goto_link = goto_links[_index14];
      goto_link.addEventListener('click', function (e) {
        if (menuBody.classList.contains('vs-active')) {
          menuBody.classList.remove('vs-active');
          iconMenu.classList.remove('vs-active');
          body_lock_remove();
        }

        var target_block_class = goto_link.getAttribute('href').replace('#', '');
        var target_block = document.querySelector('.' + target_block_class);

        _goto(target_block, 300, 40);

        e.preventDefault();
      });
    };

    for (var _index14 = 0; _index14 < goto_links.length; _index14++) {
      _loop13(_index14);
    }
  }

  function _goto(target_block, speed) {
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var header = ''; //OffsetHeader
    //if (window.innerWidth < 992) {
    //	header = 'header';
    //}

    var options = {
      speedAsDuration: true,
      speed: speed,
      header: header,
      offset: offset,
      easing: 'easeOutQuad'
    };
    var scr = new SmoothScroll();
    scr.animateScroll(target_block, '', options);
  } //SameFunctions


  function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, {
      passive: false
    }); // Disable scrolling in Chrome

    window.onwheel = preventDefault; // modern standard

    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

    window.ontouchmove = preventDefault; // mobile

    document.onkeydown = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {
      passive: false
    }); // Enable scrolling in Chrome

    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    /*if (keys[e.keyCode]) {
    	preventDefault(e);
    	return false;
    }*/
  }

  function fix_block(scr_fix_block, scr_value) {
    var window_width = parseInt(window.innerWidth);
    var window_height = parseInt(window.innerHeight);
    var header_height = parseInt(document.querySelector('header').offsetHeight) + 15;

    for (var _index15 = 0; _index15 < scr_fix_block.length; _index15++) {
      var block = scr_fix_block[_index15];
      var block_width = block.getAttribute('data-width');
      var item = block.querySelector('._side-block');

      if (!block_width) {
        block_width = 0;
      }

      if (window_width > block_width) {
        if (item.offsetHeight < window_height - (header_height + 30)) {
          if (scr_value > offset(block).top - (header_height + 15)) {
            item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
          } else {
            gotoRelative(item);
          }

          if (scr_value > block.offsetHeight + offset(block).top - (item.offsetHeight + (header_height + 15))) {
            block.style.cssText = "position:relative;";
            item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
          }
        } else {
          gotoRelative(item);
        }
      }
    }

    function gotoRelative(item) {
      item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
    }
  }

  if (!isMobile.any()) {//custom_scroll();

    /*
    window.addEventListener('wheel', scroll_animate, {
    	capture: true,
    	passive: true
    });
    window.addEventListener('resize', custom_scroll, {
    	capture: true,
    	passive: true
    });
    */
  }

  function custom_scroll(event) {
    scr_body.style.overflow = 'hidden';
    var window_height = window.innerHeight;
    var custom_scroll_line = document.querySelector('._custom-scroll__line');
    var custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
    var custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));

    if (custom_scroll_content_height > window_height) {
      if (!custom_scroll_line) {
        var _custom_scroll = document.createElement('div');

        custom_scroll_line = document.createElement('div');

        _custom_scroll.setAttribute('class', '_custom-scroll');

        custom_scroll_line.setAttribute('class', '_custom-scroll__line');

        _custom_scroll.appendChild(custom_scroll_line);

        scr_body.appendChild(_custom_scroll);
      }

      custom_scroll_line.style.height = custom_cursor_height + 'px';
    }
  }

  var new_pos = pageYOffset;

  function scroll_animate(event) {
    var window_height = window.innerHeight;
    var content_height = document.querySelector('.wrapper').offsetHeight;
    var start_position = pageYOffset;
    var pos_add = 100;

    if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
      new_pos = new_pos - pos_add;
    } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
      new_pos = new_pos + pos_add;
    }

    if (new_pos > content_height - window_height) new_pos = content_height - window_height;
    if (new_pos < 0) new_pos = 0;

    if (scrolling) {
      scrolling = false;

      _goto(new_pos, 1000);

      var scr_pause = 100;

      if (navigator.appVersion.indexOf("Mac") != -1) {
        scr_pause = scr_pause * 2;
      }

      ;
      setTimeout(function () {
        scrolling = true;

        _goto(new_pos, 1000);
      }, scr_pause);
    } //If native scroll
    //disableScroll();

  }

  ;
});