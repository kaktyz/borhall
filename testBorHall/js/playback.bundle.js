// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function (e, t, n) {
    "use strict";

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        return !t || "object" !== o(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function r(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (r = function (e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o)
            }

            function o() {
                return a(e, arguments, u(this).constructor)
            }
            return o.prototype = Object.create(e.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(o, e)
        })(e)
    }

    function a(e, t, n) {
        return (a = c() ? Reflect.construct : function (e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var i = new(Function.bind.apply(e, o));
            return n && l(i, n.prototype), i
        }).apply(null, arguments)
    }

    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (e) {
            return !1
        }
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    if (n.d(t, "a", (function () {
            return f
        })), n.d(t, "c", (function () {
            return p
        })), n.d(t, "b", (function () {
            return d
        })), "undefiend" != typeof window.XMLHttpRequest) {
        var h = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(o, e);
            var t, n = (t = o, function () {
                var e, n = u(t);
                if (c()) {
                    var o = u(this).constructor;
                    e = Reflect.construct(n, arguments, o)
                } else e = n.apply(this, arguments);
                return s(this, e)
            });

            function o() {
                return i(this, o), n.apply(this, arguments)
            }
            return o
        }(r(XMLHttpRequest));
        Object.defineProperty(h.prototype, "responseURL", Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "responseURL"))
    }

    function f(e, t, n, o, i) {
        var s;
        if ((s = window.XMLHttpRequest ? new h : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function () {
                4 == this.readyState && n(s)
            }, s.open(e, t, !0), o)
            for (var r in o) o.hasOwnProperty(r) && s.setRequestHeader(r, o[r]);
        s.withCredentials = !0, s.send(i)
    }

    function p(e) {
        return void 0 !== e && e && e.constructor === Array
    }

    function d(e) {
        return document.cookie.search(e) >= 0
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "c", (function () {
        return r
    })), n.d(t, "b", (function () {
        return a
    })), n.d(t, "a", (function () {
        return c
    }));
    var o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        s = {
            Y: function (e) {
                return e.getUTCFullYear()
            },
            m: function (e) {
                return e.getUTCMonth() + 1
            },
            b: function (e) {
                return i[e.getUTCMonth()]
            },
            B: function (e) {
                return o[e.getUTCMonth()]
            },
            d: function (e) {
                return e.getUTCDate()
            },
            H: function (e) {
                return ("0" + e.getUTCHours()).slice(-2)
            },
            M: function (e) {
                return ("0" + e.getUTCMinutes()).slice(-2)
            },
            S: function (e) {
                return ("0" + e.getUTCSeconds()).slice(-2)
            },
            "%": function () {
                return "%"
            }
        };

    function r(e) {
        var t = function (e) {
            return "number" == typeof e && (e = e.toString()), [e.slice(-14, -10), e.slice(-10, -8), e.slice(-8, -6), e.slice(-6, -4), e.slice(-4, -2), e.slice(-2)]
        }(e);
        return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]))
    }

    function a(e) {
        return i[e]
    }

    function c(e, t) {
        return t.replace(/%./g, (function (t) {
            var n = s[t[1]];
            return n ? n(r(e)) : t
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return a
    }));
    var o = n(0);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var s = JSON;

    function r(e, t, n, i) {
        return i = i || {}, Object(o.a)("POST", "/__wb/web-archive/", (function (e) {
            401 === e.status ? i.userNotLoggedIn && i.userNotLoggedIn(e) : e.status >= 400 ? i.failure && i.failure(e) : i.success && i.success(e)
        }), {
            "Content-Type": "application/json"
        }, s.stringify({
            url: e,
            snapshot: t,
            tags: n || []
        })), !1
    }
    var a = function () {
        function e(t, n, i) {
            var s = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.el = t, this.url = n, this.timestamp = i, t.onclick = this.save.bind(this), document.addEventListener("DOMContentLoaded", (function () {
                Object(o.b)("logged-in-user") && Object(o.b)("logged-in-sig") ? s.userIsLoggedIn() : s.userIsNotLoggedIn()
            }))
        }
        var t, n, s;
        return t = e, (n = [{
            key: "save",
            value: function (e) {
                this.start(), r(this.url, this.timestamp, [], {
                    failure: this.failure.bind(this),
                    success: this.success.bind(this)
                })
            }
        }, {
            key: "start",
            value: function () {
                this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-open", "wm-save-snapshot-success"]), this.show(["wm-save-snapshot-in-progress"])
            }
        }, {
            key: "failure",
            value: function (e) {
                401 == e.status ? this.userNotLoggedIn(e) : (this.hide(["wm-save-snapshot-in-progress", "wm-save-snapshot-success"]), this.show(["wm-save-snapshot-fail", "wm-save-snapshot-open"]), console.log("You have got an error."), console.log("If you think something wrong here please send it to support."), console.log('Response: "' + e.responseText + '"'), console.log('status: "' + e.status + '"'))
            }
        }, {
            key: "success",
            value: function (e) {
                this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-in-progress"]), this.show(["wm-save-snapshot-open", "wm-save-snapshot-success"])
            }
        }, {
            key: "userIsLoggedIn",
            value: function () {
                this.show("wm-save-snapshot-open"), this.hide("wm-sign-in")
            }
        }, {
            key: "userIsNotLoggedIn",
            value: function () {
                this.hide(["wm-save-snapshot-open", "wm-save-snapshot-in-progress"]), this.show("wm-sign-in")
            }
        }, {
            key: "show",
            value: function (e) {
                this.setDisplayStyle(e, "inline-block")
            }
        }, {
            key: "hide",
            value: function (e) {
                this.setDisplayStyle(e, "none")
            }
        }, {
            key: "setDisplayStyle",
            value: function (e, t) {
                var n = this;
                (Object(o.c)(e) ? e : [e]).forEach((function (e) {
                    var o = n.el.getRootNode().getElementById(e);
                    o && (o.style.display = t)
                }))
            }
        }]) && i(t.prototype, n), s && i(t, s), e
    }()
}, function (e, t, n) {
    "use strict";
    var o;
    n.r(t);
    var i, s = {
        createElementNS: document.createElementNS
    };
    var r = !1;

    function a(e) {
        ! function (e, t, n) {
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                var i = "; expires=" + o.toGMTString()
            } else i = "";
            document.cookie = e + "=" + t + i + "; path=/"
        }(e, "", -1)
    }
    var c = n(0),
        l = n(1),
        u = window.Date;

    function h(e, t) {
        return (e = e.toString()).length >= t ? e : "00000000".substring(0, t - e.length) + e
    }

    function f(e) {
        for (var t = 0, n = 0; n < e.length; n++) t = Math.max(t, Math.max.apply(null, e[n][1]));
        if (function (e) {
                for (var t = 0, n = 1e3, o = 0; o < e.length; o++) {
                    var i = e[o];
                    t = Math.max(t, Math.max.apply(null, i[1])), n = Math.min(n, Math.min.apply(null, i[1].filter(Boolean)))
                }
                return Math.log1p(t) - Math.log1p(n) > 3
            }(e)) {
            var o = [];
            for (n = 0; n < e.length; n++) {
                var i = e[n];
                o.push([i[0], i[1].map(Math.log1p)])
            }
            e = o, t = Math.log1p(t)
        }
        return [e, t]
    }

    function p(e, t, n) {
        var o = n("wm-capresources");
        o.innerHTML = "";
        var i = n("wm-capresources-loading");
        i.style.display = "block";
        var s = l.c(e).getTime(),
            r = 0;
        t = window.location.origin + t;
        for (var a = [], u = y(window, "img"), h = 0, f = u.length; h < f; h++) u[h].src && !u[h].src.startsWith(t) && u[h].src.startsWith(window.location.origin) && !u[h].src.startsWith("data:") && a.push(u[h].src);
        var p = y(window, "frame");
        for (h = 0, f = p.length; h < f; h++) p[h].src && a.push(p[h].src);
        var d = y(window, "iframe");
        for (h = 0, f = d.length; h < f; h++) !d[h].src || d[h].id && "playback" === d[h].id || a.push(d[h].src);
        var m = y(window, "script");
        for (h = 0, f = m.length; h < f; h++) m[h].src && !m[h].src.startsWith(t) && m[h].src.startsWith(window.location.origin) && a.push(m[h].src);
        var w = y(window, "link");
        for (h = 0, f = w.length; h < f; h++) w[h].href && !w[h].href.startsWith(t) && w[h].href.startsWith(window.location.origin) && w[h].rel && "stylesheet" == w[h].rel && a.push(w[h].href);
        var b = a.filter((function (e, t, n) {
            return n.indexOf(e) === t
        }));
        b.length > 0 ? (r = 0, b.map((function (e) {
            e.match("^https?://") && (r++, Object(c.a)("HEAD", e, (function (e) {
                if (200 == e.status) {
                    var t = e.getResponseHeader("Memento-Datetime");
                    if (null == t) console.log("%s: no Memento-Datetime", u);
                    else {
                        var n = document.createElement("span"),
                            a = function (e, t) {
                                var n = new Date(e).getTime() - t,
                                    o = "";
                                n < 0 ? (o += "-", n = Math.abs(n)) : o += "+";
                                var i = !1;
                                if (n < 1e3) return {
                                    delta: n,
                                    text: "",
                                    highlight: i
                                };
                                var s = n,
                                    r = Math.floor(n / 1e3 / 60 / 60 / 24 / 30 / 12);
                                n -= 1e3 * r * 60 * 60 * 24 * 30 * 12;
                                var a = Math.floor(n / 1e3 / 60 / 60 / 24 / 30);
                                n -= 1e3 * a * 60 * 60 * 24 * 30;
                                var c = Math.floor(n / 1e3 / 60 / 60 / 24);
                                n -= 1e3 * c * 60 * 60 * 24;
                                var l = Math.floor(n / 1e3 / 60 / 60);
                                n -= 1e3 * l * 60 * 60;
                                var u = Math.floor(n / 1e3 / 60);
                                n -= 1e3 * u * 60;
                                var h = Math.floor(n / 1e3),
                                    f = [];
                                r > 1 ? (f.push(r + " years"), i = !0) : 1 == r && (f.push(r + " year"), i = !0);
                                a > 1 ? (f.push(a + " months"), i = !0) : 1 == a && (f.push(a + " month"), i = !0);
                                c > 1 ? f.push(c + " days") : 1 == c && f.push(c + " day");
                                l > 1 ? f.push(l + " hours") : 1 == l && f.push(l + " hour");
                                u > 1 ? f.push(u + " minutes") : 1 == u && f.push(u + " minute");
                                h > 1 ? f.push(h + " seconds") : 1 == h && f.push(h + " second");
                                f.length > 2 && (f = f.slice(0, 2));
                                return {
                                    delta: s,
                                    text: o + f.join(" "),
                                    highlight: i
                                }
                            }(t, s),
                            c = a.highlight ? "color:red;" : "";
                        n.innerHTML = " " + a.text, n.title = t, n.setAttribute("style", c);
                        var l = e.getResponseHeader("Content-Type"),
                            u = e.responseURL.replace(window.location.origin, ""),
                            h = document.createElement("a");
                        h.innerHTML = u.split("/").splice(3).join("/"), h.href = u, h.title = l, h.onmouseover = g, h.onmouseout = v;
                        var f = document.createElement("div");
                        f.setAttribute("data-delta", a.delta), f.appendChild(h), f.append(n), o.appendChild(f);
                        var p = Array.prototype.slice.call(o.childNodes, 0);
                        p.sort((function (e, t) {
                            return t.getAttribute("data-delta") - e.getAttribute("data-delta")
                        })), o.innerHTML = "";
                        for (var d = 0, m = p.length; d < m; d++) o.appendChild(p[d])
                    }
                }
                0 == --r && (i.style.display = "none")
            })))
        }))) : (o.innerHTML = "There are no sub-resources in the page.", i.style.display = "none")
    }

    function d(e, t) {
        for (var n = t.split("/").splice(6).join("/"), o = e.document.querySelectorAll("img[src$='" + n + "'], iframe[src$='" + n + "'], frame[src$='" + n + "']"), i = Array.prototype.slice.call(o), s = 0; s < e.frames.length; s++) try {
            var r = d(e.frames[s].window, t);
            i = i.concat(r)
        } catch (e) {}
        return i
    }

    function m(e) {
        return "FRAME" == e.tagName || "IFRAME" == e.tagName ? e.contentWindow.document.documentElement : e
    }

    function g(e) {
        var t = d(window, e.target.href);
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) m(t[n]).classList.add("wb-highlight")
    }

    function v(e) {
        var t = d(window, e.target.href);
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) m(t[n]).classList.remove("wb-highlight")
    }

    function y(e, t) {
        for (var n = e.document.getElementsByTagName(t), o = Array.prototype.slice.call(n), i = 0; i < e.frames.length; i++) try {
            var s = y(e.frames[i].window, t);
            o = o.concat(s)
        } catch (e) {}
        return o
    }

    function w(e) {
        return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function b(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function M(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function S(e, t, n) {
        return t && M(e.prototype, t), n && M(e, n), e
    }

    function T(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
    }

    function _(e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
    }

    function C(e, t, n) {
        e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n)
    }

    function k(e, t, n, o) {
        _(o || document, t, (function (t) {
            for (var o, i = t.target || t.srcElement; i && !(o = T(i, e));) i = i.parentElement;
            o && n.call(i, t)
        }))
    }
    var x, H, L = function () {
            function e(t, n) {
                b(this, e), this.input = t, this.source = 0, this.minChars = 3, this.delay = 150, this.offsetLeft = 0, this.offsetTop = 0, this.cache = !0, this.menuClass = "", Object.assign(this, n), this.root = this.input.getRootNode(), this.cache && (this.cache = {}), this.sc = document.createElement("div"), this.sc.className = "wb-autocomplete-suggestions " + this.menuClass, this.root.appendChild(this.sc);
                this.selector;
                this.autocompleteAttr = t.getAttribute("autocomplete"), t.setAttribute("autocomplete", "off"), this.last_val = "", this.updateSC = this.updateSC.bind(this), this.blurHandler = this.blurHandler.bind(this), this.keydownHandler = this.keydownHandler.bind(this), this.keyupHandler = this.keyupHandler.bind(this), this.focusHandler = this.focusHandler.bind(this), _(window, "resize", this.updateSC), _(t, "blur", this.blurHandler), _(t, "keydown", this.keydownHandler), _(t, "keyup", this.keyupHandler), this.minChars || _(t, "focus", this.focusHandler);
                var o = this;
                k("wb-autocomplete-suggestion", "mouseleave", (function (e) {
                    var t = o.sc.querySelector(".autocomplete-suggestion.selected");
                    t && setTimeout((function () {
                        t.className = t.className.replace("selected", "")
                    }), 20)
                }), this.sc), k("wb-autocomplete-suggestion", "mouseover", (function (e) {
                    var t = o.sc.querySelector(".wb-autocomplete-suggestion.selected");
                    t && (t.className = t.className.replace("selected", "")), this.className += " selected"
                }), this.sc), k("wb-autocomplete-suggestion", "mousedown", (function (e) {
                    if (T(this, "wb-autocomplete-suggestion")) {
                        var t = this.getAttribute("data-val");
                        o.input.value = t, o.onSelect(e, t, this), o.sc.style.display = "none"
                    }
                }), this.sc)
            }
            return S(e, [{
                key: "unload",
                value: function () {
                    C(window, "resize", this.updateSC), C(this.input, "blur", this.blurHandler), C(this.input, "focus", this.focusHandler), C(this.input, "keydown", this.keydownHandler), C(this.input, "keyup", this.keyupHandler), this.autocompleteAttr ? this.setAttribute("autocomplete", this.autocompleteAttr) : this.removeAttribute("autocomplete"), this.root.removeChild(this.sc)
                }
            }, {
                key: "updateSC",
                value: function (e, t) {
                    var n = this.input.getBoundingClientRect();
                    if (this.sc.style.left = Math.round(n.left + (window.pageXOffset || document.documentElement.scrollLeft) + this.offsetLeft) + "px", this.sc.style.top = Math.round(n.bottom + (window.pageYOffset || document.documentElement.scrollTop) + this.offsetTop) + "px", this.sc.style.width = Math.round(n.right - n.left) + "px", !e)
                        if (this.sc.style.display = "block", this.sc.maxHeight || (this.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(this.sc, null) : this.sc.currentStyle).maxHeight)), this.sc.suggestionHeight || (this.sc.suggestionHeight = this.sc.querySelector(".wb-autocomplete-suggestion").offsetHeight), this.sc.suggestionHeight) t || (this.sc.scrollTop = 0);
                        else {
                            var o = this.sc.scrollTop,
                                i = t.getBoundingClientRect().top - this.sc.getBoundingClientRect().top;
                            i + this.sc.suggestionHeight - this.sc.maxHeight > 0 ? this.sc.scrollTop = i + this.sc.suggestionHeight + o - this.sc.maxHeight : i < 0 && (this.sc.scrollTop = i + o)
                        }
                }
            }, {
                key: "blurHandler",
                value: function () {
                    var e = this;
                    try {
                        var t = this.root.querySelector(".wb-autocomplete-suggestions:hover")
                    } catch (e) {
                        t = null
                    }
                    t ? this.input !== document.activeElement && setTimeout((function () {
                        return e.focus()
                    }), 20) : (this.last_val = this.input.value, this.sc.style.display = "none", setTimeout((function () {
                        return e.sc.style.display = "none"
                    }), 350))
                }
            }, {
                key: "suggest",
                value: function (e) {
                    var t = this.input.value;
                    if (this.cache[t] = e, e.length && t.length >= this.minChars) {
                        for (var n = "", o = 0; o < e.length; o++) n += this.renderItem(e[o], t);
                        this.sc.innerHTML = n, this.updateSC(0)
                    } else this.sc.style.display = "none"
                }
            }, {
                key: "keydownHandler",
                value: function (e) {
                    var t, n = this,
                        o = window.event ? e.keyCode : e.which;
                    if ((40 == o || 38 == o) && this.sc.innerHTML) return (i = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) ? (t = 40 == o ? i.nextSibling : i.previousSibling) ? (i.className = i.className.replace("selected", ""), t.className += " selected", this.input.value = t.getAttribute("data-val")) : (i.className = i.className.replace("selected", ""), this.input.value = this.last_val, t = 0) : ((t = 40 == o ? this.sc.querySelector(".wb-autocomplete-suggestion") : this.sc.childNodes[this.sc.childNodes.length - 1]).className += " selected", this.input.value = t.getAttribute("data-val")), this.updateSC(0, t), !1;
                    if (27 == o) this.value = this.last_val, this.sc.style.display = "none";
                    else if (13 == o || 9 == o) {
                        var i;
                        (i = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) && "none" != this.sc.style.display && (this.onSelect(e, i.getAttribute("data-val"), i), setTimeout((function () {
                            n.sc.style.display = "none"
                        }), 20))
                    }
                }
            }, {
                key: "keyupHandler",
                value: function (e) {
                    var t = this,
                        n = window.event ? e.keyCode : e.which;
                    if (!n || (n < 35 || n > 40) && 13 != n && 27 != n) {
                        var o = this.input.value;
                        if (o.length >= this.minChars) {
                            if (o != this.last_val) {
                                if (this.last_val = o, clearTimeout(this.timer), this.cache) {
                                    if (o in this.cache) return void this.suggest(this.cache[o]);
                                    for (var i = 1; i < o.length - this.minChars; i++) {
                                        var s = o.slice(0, o.length - i);
                                        if (s in this.cache && !this.cache[s].length) return void this.suggest([])
                                    }
                                }
                                this.timer = setTimeout((function () {
                                    t.source(o, t.suggest.bind(t))
                                }), this.delay)
                            }
                        } else this.last_val = o, this.sc.style.display = "none"
                    }
                }
            }, {
                key: "focusHandler",
                value: function (e) {
                    this.last_val = "\n", this.keyupHandler(e)
                }
            }, {
                key: "renderItem",
                value: function (e, t) {
                    t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                    var n = new RegExp("(" + t.split(" ").join("|") + ")", "gi");
                    return '<div class="wb-autocomplete-suggestion" data-val="' + e + '">' + e.replace(n, "<b>$1</b>") + "</div>"
                }
            }, {
                key: "onSelect",
                value: function (e, t, n) {}
            }]), e
        }(),
        E = function () {
            function e(t, n) {
                b(this, e);
                var o = t.getRootNode();
                if (o.querySelector) {
                    var i = "object" == w(t) ? [t] : o.querySelectorAll(t);
                    this.elems = i.map((function (e) {
                        return new L(e, n)
                    }))
                }
            }
            return S(e, [{
                key: "destroy",
                value: function () {
                    for (; this.elems.length > 0;) this.elems.pop().unload()
                }
            }]), e
        }(),
        O = n(2),
        R = window.JSON,
        N = window.open,
        j = window.Date,
        A = document,
        U = document,
        I = function (e) {
            return U.getElementById(e)
        };
    var D, P = "/static/";

    function q(e) {
        x.classList.contains("wm-closed") ? (e && H.classList.add("notice-only"), x.classList.replace("wm-closed", "wm-open"), H.style.display = "block", p(D, P, I)) : (x.classList.replace("wm-open", "wm-closed"), H.style.display = "none", H.classList.remove("notice-only"))
    }

    function B(e, t) {
        var n = I(e);
        n && (n.style.visibility = t ? "visible" : "hidden")
    }

    function W(e, t) {
        Object(c.c)(e) || (e = [e]);
        for (var n = 0; n < e.length; n++) B(e[n], t)
    }
    var F = /web\/(\d*)\/http:\/\/web\.archive\.org\/screenshot/g;

    function X(e, t, n) {
        ! function (e, t) {
            Object(c.a)("HEAD", e, (function (e) {
                t(e.status < 300, e.responseURL)
            }))
        }("/web/" + t + "/http://web.archive.org/screenshot/" + e, (function (e, o) {
            if (!e) return n(!1);
            var i = function (e) {
                    var t = F.exec(e);
                    return t && t[1] ? t[1] : null
                }(o),
                s = (l.c(i).getTime() - l.c(t).getTime()) / 1e3;
            console.log("screen shot delta: " + s + "s"), n(s > 0 && s < 60, s)
        }))
    }
    window.__wm = {
        init: function (e) {
            ! function () {
                var e = document.cookie.split(";");
                if (e.length > 40)
                    for (var t = 0; t < e.length; t++) {
                        a(e[t].split("=")[0].trim())
                    }
            }(), o = e, document.createElementNS = function (e, t) {
                return 0 == e.indexOf(o) && (e = e.substring(o.length).replace(/\/?[0-9]+\//, "")), s.createElementNS.call(this, e, t)
            }
        },
        wombat: function (e, t, n, o, s, a) {
            var c = "".concat(n).concat(o, "/"),
                l = new URL(e),
                u = {
                    url: e,
                    timestamp: t,
                    prefix: c,
                    coll: o,
                    static_prefix: s,
                    request_ts: t,
                    proxy_magic: "",
                    mod: "if_",
                    is_framed: !1,
                    is_live: !1,
                    enable_auto_fetch: !0,
                    auto_fetch_worker_prefix: c,
                    wombat_ts: t,
                    wombat_sec: a,
                    wombat_scheme: (l.protocol || "http").replace(/:$/, ""),
                    wombat_host: l.host,
                    wombat_opts: {
                        no_rewrite_prefixes: ["/__wb/", s, "".concat(n).concat(s.substring(1)), "/web/", c, "http://analytics.archive.org/", "https://analytics.archive.org/", "//analytics.archive.org/"]
                    }
                };
            if (_WBWombat) {
                var h = _WBWombat.prototype.rewriteUrl;
                return _WBWombat.prototype.rewriteUrl = function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    return r ? h.call.apply(h, [this, e].concat(n)) : e
                }, (i = _WBWombat(window, u)).actual = !0, window._wb_wombat = i.wombatInit(), window._wb_wombat.actual = !0, i
            }
        },
        rw: function (e) {
            r = e
        },
        bt: function (e, t, n, o, i, s, r, a, p, d) {
            P = p || "/static/", D = r;
            var m, g, v, y = "/" + (i || "web") + "/",
                w = l.c(D),
                b = w.getUTCFullYear(),
                M = w.getUTCMonth() + 1,
                S = w.getUTCDate(),
                T = -1,
                _ = -1,
                C = I("wm-ipp-base");
            if (C.attachShadow) {
                var k = C.attachShadow({
                    mode: "closed"
                });
                for (U = k; C.children.length > 0;) k.appendChild(C.children[0]);
                if (d)
                    for (var L = 0; L < d.length; L++) {
                        var B = A.createElement("link");
                        B.setAttribute("rel", "stylesheet"), B.setAttribute("type", "text/css"), B.setAttribute("href", d[L]), k.appendChild(B)
                    }
            }
            window.top == window.self && (C.style.display = "block");
            var F = !1,
                Y = !0,
                J = document.getElementById("donato");
            if (J)
                if (window.top != window.self) J.style.display = "none";
                else {
                    var $ = document.getElementById("donato-base");
                    window.addEventListener("message", (function (e) {
                        if (-1 !== e.origin.indexOf("archive.org")) {
                            var t = "string" == typeof e.data ? R.parse(e.data) : e.data;
                            if (console.log("got message %o", t), "set height" == t.event) {
                                var n = t.value,
                                    o = t.bannerHeight;
                                if ("number" != typeof n || n <= 0) return;
                                if (!Y) return;
                                if (prevHeight = t.value, F) return;
                                J.style.height = o + "px", $.style.height = n + "px"
                            } else if ("open modal" == t.event) $.style.height = "", document.body.classList.add("wm-modal"), window.scrollTo(0, 0), F = !0;
                            else if ("close modal" == t.event) J.style.marginBottom = "0px", document.body.classList.remove("wm-modal"), F = !1;
                            else if ("hide banner" == t.event) {
                                J.style.height = 0;
                                var i = new j(j.now() + 24 * t.value * 3600 * 1e3);
                                document.cookie = "donation=x; domain=archive.org; path=/; expires=" + i.toUTCString(), Y = !1, F = !1, prevHeight = 0
                            }
                        }
                    }), !1)
                } var G = I("wm-ipp-sparkline");

            function z(e) {
                var t = "mouseenter" == e.type ? 1 : 0;
                if (t !== m) {
                    var n = I("wm-ipp"),
                        o = I("displayYearEl"),
                        i = I("displayMonthEl"),
                        s = I("displayDayEl");
                    t ? n.className = "hi" : (n.className = "", o.innerHTML = b, i.innerHTML = l.b(M - 1), s.innerHTML = h(S, 2)), g.style.display = t ? "inline" : "none", v.style.display = t ? "inline" : "none", m = t
                }
            }
            x = I("wm-expand"), H = I("wm-capinfo"), I("wm-graph-anchor")._no_rewrite = !0, (g = A.createElement("div")).className = "yt", g.style.display = "none", g.style.width = n + "px", g.style.height = t + "px", (v = A.createElement("div")).className = "mt", v.style.display = "none", v.style.width = o + "px", v.style.height = t + "px", G.appendChild(g), G.appendChild(v);
            var K = I("wm-sparkline-canvas");
            G.onmouseenter = z, G.onmouseleave = z, G.onmousemove = function (t) {
                var i, r, c = G,
                    u = function (e) {
                        var t = 0;
                        return e.pageX || e.pageY ? t = e.pageX : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft), t
                    }(t),
                    f = (i = c, r = A.documentElement, ("undefied" != typeof i.getBoundingClientRect ? i.getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    }).left + (window.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)),
                    p = Math.min(Math.max(0, u - f), e),
                    d = p % n,
                    m = Math.floor(p / n),
                    w = Math.min(11, Math.floor(d / o)),
                    b = 12 * m + w,
                    M = d % 2 == 1 ? 15 : 1,
                    S = h(m + a) + h(w + 1, 2) + h(M, 2) + "000000";
                I("displayYearEl").innerHTML = m + a, I("displayMonthEl").innerHTML = l.b(w);
                var C = y + S + "/" + s;
                if (I("wm-graph-anchor").href = C, T != m) {
                    var k = m * n;
                    g.style.left = k + "px", T = m
                }
                if (_ != b) {
                    var x = m + b * o + 1;
                    v.style.left = x + "px", _ = b
                }
            };
            var Q = I("wm-sparkline-canvas");
            if (Q.getContext && Q.getContext("2d")) {
                var V = "/__wb/sparkline?output=json&url=" + encodeURIComponent(s) + (i && "&collection=" + i || "");
                Object(c.a)("GET", V, (function (n) {
                    if (200 == n.status) {
                        for (var o = R.parse(n.responseText), i = o.years, r = Object.getOwnPropertyNames(i), c = o.years = [], h = 0; h < r.length; h++) {
                            var p = r[h];
                            i[p] && c.push([p, i[p]])
                        }! function (e) {
                            for (var t = I("wm-nav-captures"), n = 0, o = e.years, i = e.first_ts, r = e.last_ts, a = 0; a < o.length; a++)
                                for (var c = o[a][1], u = 0; u < c.length; u++) n += c[u];
                            var h = '<a class="t" href="' + y + "*/" + s + '" title="See a list of every capture for this URL">' + (("" + n).replace(/\B(?=(\d{3})+$)/g, ",") + " ") + (n > 1 ? "captures" : "capture") + "</a>",
                                f = l.a(i, "%d %b %Y");
                            r != i && (f += " - " + l.a(r, "%d %b %Y")), h += '<div class="r" title="Timespan for captures of this URL">' + f + "</div>", t.innerHTML = h
                        }(o),
                        function (e, t, n, o, i, s, r) {
                            var a = o.getContext("2d");
                            if (a) {
                                a.fillStyle = "#FFF";
                                var c = (new u).getUTCFullYear(),
                                    l = t / (c - i + 1),
                                    h = f(e.years),
                                    p = h[0],
                                    d = n / h[1];
                                if (s >= i) {
                                    var m = _(s);
                                    a.fillStyle = "#FFFFA5", a.fillRect(m, 0, l, n)
                                }
                                for (var g = i; g <= c; g++) {
                                    m = _(g);
                                    a.beginPath(), a.moveTo(m, 0), a.lineTo(m, n), a.lineWidth = 1, a.strokeStyle = "#CCC", a.stroke()
                                }
                                r = parseInt(r) - 1;
                                for (var v = (l - 1) / 12, y = 0; y < p.length; y++) {
                                    g = p[y][0];
                                    for (var w = p[y][1], b = _(g) + 1, M = 0; M < 12; M++) {
                                        var S = w[M];
                                        if (S > 0) {
                                            var T = Math.ceil(S * d);
                                            a.fillStyle = g == s && M == r ? "#EC008C" : "#000", a.fillRect(Math.round(b), Math.ceil(n - T), Math.ceil(v), Math.round(T))
                                        }
                                        b += v
                                    }
                                }
                            }

                            function _(e) {
                                return Math.ceil((e - i) * l) + .5
                            }
                        }(o, e, t, Q, a, b, M)
                    }
                }))
            } else {
                var Z = new Image;
                Z.src = "/__wb/sparkline?url=" + encodeURIComponent(s) + "&width=" + e + "&height=" + t + "&selected_year=" + b + "&selected_month=" + M + (i && "&collection=" + i || ""), Z.alt = "sparkline", Z.width = e, Z.height = t, Z.id = "sparklineImgId", Z.border = "0", K.parentNode.replaceChild(Z, K)
            }

            function ee(e) {
                for (var t = [], n = e.length, o = 0; o < n; o++) void 0 === e[o].excluded && t.push(e[o].display_name);
                return t
            }
            I("wm-share-facebook").onclick = function (e) {
                    var t = this.dataset.url;
                    return N("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t), "", "height=400,width=600"), e.preventDefault(), !1
                }, I("wm-share-twitter").onclick = function (e) {
                    var t = this.dataset.url;
                    return N("https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&via=internetarchive", "", "height=446,width=600"), e.preventDefault(), !1
                }, new E(I("wmtbURL"), {
                    delay: 400,
                    source: function (e, t) {
                        Object(c.a)("GET", "/__wb/search/host?q=" + encodeURIComponent(e), (function (n) {
                            if (void 0 !== (n = R.parse(n.response)).hosts && n.hosts.length > 0) {
                                var o = ee(n.hosts);
                                t(o)
                            } else void 0 !== n.isUrl && !0 === n.isUrl && void 0 === n.excluded ? t([e]) : Object(c.a)("GET", "/__wb/search/anchor?q=" + encodeURIComponent(e), (function (e) {
                                if (void 0 !== (e = R.parse(e.response)) && e.length > 0) {
                                    var n = ee(e.slice(0, 5));
                                    t(n)
                                }
                            }))
                        }))
                    },
                    onSelect: function (e, t, n) {
                        I("wmtb").submit()
                    }
                }), I("wmtb").onsubmit = function (e) {
                    var t = I("wmtbURL").value;
                    if (0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") && !t.match(/[\w\.]{2,256}\.[a-z]{2,4}/gi)) return document.location.href = "/web/*/" + I("wmtbURL").value, e.preventDefault(), !1
                },
                function (e, t) {
                    X(e, t, (function (e, t) {
                        e ? (I("wm-screenshot").title = "screen shot (delta: " + t + "s)", W("wm-screenshot", !0)) : W("wm-screenshot", !1)
                    }))
                }(s, D), I("wm-capinfo-notice") && q(!0), new O.a(I("wm-save-snapshot-open"), s, D)
        },
        h: function (e) {
            I("wm-ipp").style.display = "none", e.stopPropagation()
        },
        ex: function (e) {
            e.stopPropagation(), q(!1)
        },
        ajax: c.a
    }
}]);
// @license-end