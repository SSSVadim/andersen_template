"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

document.addEventListener("DOMContentLoaded", function (event) {
  // Main workflow	
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
            if ("object" != _typeof(t) || !t.length || !t[0].nodeName) return !1;
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
});