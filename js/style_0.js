/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+o[a] < +n[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.1";
        var t = Object.create(null);
        s.migrateDisablePatches = function() {
            for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
        }, s.migrateEnablePatches = function() {
            for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
        }, s.migrateIsPatchEnabled = function(e) {
            return !t[e]
        }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var o = {};

        function u(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n, o), r
                },
                set: function(e) {
                    u(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function c(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            return a(e, t, r, n, o), 0
        }

        function i(e, t, r, n) {
            return a(e, t, r, n), 0
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
        var d, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        for (d in i(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
        c(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "$1")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), c(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function x(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        i(s.fn, "removeAttr", function(e) {
            var r = this,
                n = !1;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && r.each(function() {
                    if (!1 !== s(this).prop(t)) return !(n = !0)
                }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), i(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var Q, A, R = !1,
            C = /^[a-z]/,
            N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return R = !0, e = r.apply(this, arguments), R = !1, e
            })
        }), i(s, "swap", function(e, t, r, n) {
            var o, a, i = {};
            for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
            for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
            return o
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") ? (A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
            get: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        }, "css-number");
        var S, P, k, H, E = s.data;
        i(s, "data", function(e, t, r) {
            var n, o, a;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                return E.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments)
        }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function(e) {
            return e
        }, i(s.Tween.prototype, "run", function() {
            1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments)
        }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
            },
            set: function(e) {
                u("fx-interval", P), S = e
            }
        }));
        var M = s.fn.load,
            q = s.event.add,
            O = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, "event-old-patch"), i(s.event, "add", function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments)
        }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
            i(s.fn, t, function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }, "shorthand-removed-v3")
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            c(s.fn, r, function(e, t) {
                return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("ready-event", "'ready' event is deprecated")
            }
        }, c(s.fn, "bind", function(e, t, r) {
            return this.on(e, null, t, r)
        }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function(e, t) {
            return this.off(e, null, t)
        }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function(e, t, r, n) {
            return this.on(t, e, r, n)
        }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function(e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }, "pre-on-methods", "jQuery.fn.hover() is deprecated");

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.migrateEnablePatches("self-closed-tags")
        }, i(s, "htmlPrefilter", function(e) {
            var t, r;
            return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>")
        }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
        var D, W, _, I = s.fn.offset;
        return i(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], i(s, "Deferred", function(e) {
            var a = W(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(_, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s
    });
(() => {
    "use strict";
    var t = {
            d: (e, i) => {
                for (var s in i) t.o(i, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: i[s]
                })
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: t => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
        },
        e = {};

    function i(t) {
        if (this.formData = {}, this.tree = {}, !(t instanceof FormData)) return this;
        this.formData = t;
        const e = () => {
            const t = new Map;
            return t.largestIndex = 0, t.set = function(e, i) {
                "" === e ? e = t.largestIndex++ : /^[0-9]+$/.test(e) && (e = parseInt(e), t.largestIndex <= e && (t.largestIndex = e + 1)), Map.prototype.set.call(t, e, i)
            }, t
        };
        this.tree = e();
        const i = /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
        for (const [t, s] of this.formData) {
            const o = t.match(i);
            if (o)
                if ("" === o.groups.array) this.tree.set(o.groups.name, s);
                else {
                    const t = [...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t, e]) => e));
                    t.unshift(o.groups.name);
                    const i = t.pop();
                    t.reduce(((t, i) => {
                        if (/^[0-9]+$/.test(i) && (i = parseInt(i)), t.get(i) instanceof Map) return t.get(i);
                        const s = e();
                        return t.set(i, s), s
                    }), this.tree).set(i, s)
                }
        }
    }
    t.r(e), t.d(e, {
        all: () => D,
        any: () => M,
        date: () => f,
        dayofweek: () => u,
        email: () => r,
        enum: () => h,
        file: () => m,
        maxdate: () => z,
        maxfilesize: () => $,
        maxitems: () => v,
        maxlength: () => x,
        maxnumber: () => b,
        mindate: () => A,
        minfilesize: () => j,
        minitems: () => w,
        minlength: () => g,
        minnumber: () => y,
        number: () => c,
        required: () => n,
        requiredfile: () => a,
        tel: () => l,
        time: () => d,
        url: () => p
    }), i.prototype.entries = function() {
        return this.tree.entries()
    }, i.prototype.get = function(t) {
        return this.tree.get(t)
    }, i.prototype.getAll = function(t) {
        if (!this.has(t)) return [];
        const e = t => {
            const i = [];
            if (t instanceof Map)
                for (const [s, o] of t) i.push(...e(o));
            else "" !== t && i.push(t);
            return i
        };
        return e(this.get(t))
    }, i.prototype.has = function(t) {
        return this.tree.has(t)
    }, i.prototype.keys = function() {
        return this.tree.keys()
    }, i.prototype.values = function() {
        return this.tree.values()
    };
    const s = i;

    function o({
        rule: t,
        field: e,
        error: i,
        ...s
    }) {
        this.rule = t, this.field = e, this.error = i, this.properties = s
    }
    const n = function(t) {
            if (0 === t.getAll(this.field).length) throw new o(this)
        },
        a = function(t) {
            if (0 === t.getAll(this.field).length) throw new o(this)
        },
        r = function(t) {
            if (!t.getAll(this.field).every((t => {
                    if ((t = t.trim()).length < 6) return !1;
                    if (-1 === t.indexOf("@", 1)) return !1;
                    if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
                    const [e, i] = t.split("@", 2);
                    if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
                    if (/\.{2,}/.test(i)) return !1;
                    if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i)) return !1;
                    const s = i.split(".");
                    if (s.length < 2) return !1;
                    for (const t of s) {
                        if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
                        if (!/^[a-z0-9-]+$/i.test(t)) return !1
                    }
                    return !0
                }))) throw new o(this)
        },
        p = function(t) {
            const e = t.getAll(this.field);
            if (!e.every((t => {
                    if ("" === (t = t.trim())) return !1;
                    try {
                        return (t => -1 !== ["http", "https", "ftp", "ftps", "mailto", "news", "irc", "irc6", "ircs", "gopher", "nntp", "feed", "telnet", "mms", "rtsp", "sms", "svn", "tel", "fax", "xmpp", "webcal", "urn"].indexOf(t))(new URL(t).protocol.replace(/:$/, ""))
                    } catch {
                        return !1
                    }
                }))) throw new o(this)
        },
        l = function(t) {
            if (!t.getAll(this.field).every((t => (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, ""), /^[+]?[0-9]+$/.test(t))))) throw new o(this)
        },
        c = function(t) {
            if (!t.getAll(this.field).every((t => (t = t.trim(), !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) || !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t))))) throw new o(this)
        },
        f = function(t) {
            if (!t.getAll(this.field).every((t => {
                    if (t = t.trim(), !/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)) return !1;
                    const e = new Date(t);
                    return !Number.isNaN(e.valueOf())
                }))) throw new o(this)
        },
        d = function(t) {
            if (!t.getAll(this.field).every((t => {
                    const e = t.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
                    if (!e) return !1;
                    const i = parseInt(e[1]),
                        s = parseInt(e[2]),
                        o = e[3] ? parseInt(e[3]) : 0;
                    return 0 <= i && i <= 23 && 0 <= s && s <= 59 && 0 <= o && o <= 59
                }))) throw new o(this)
        },
        m = function(t) {
            if (!t.getAll(this.field).every((t => t instanceof File && this.accept?.some((e => /^\.[a-z0-9]+$/i.test(e) ? t.name.toLowerCase().endsWith(e.toLowerCase()) : (t => {
                    const e = [],
                        i = t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);
                    if (i) {
                        const t = i.groups.toplevel.toLowerCase(),
                            s = i.groups.sub.toLowerCase();
                        for (const [o, n] of(() => {
                                const t = new Map;
                                return t.set("jpg|jpeg|jpe", "image/jpeg"), t.set("gif", "image/gif"), t.set("png", "image/png"), t.set("bmp", "image/bmp"), t.set("tiff|tif", "image/tiff"), t.set("webp", "image/webp"), t.set("ico", "image/x-icon"), t.set("heic", "image/heic"), t.set("asf|asx", "video/x-ms-asf"), t.set("wmv", "video/x-ms-wmv"), t.set("wmx", "video/x-ms-wmx"), t.set("wm", "video/x-ms-wm"), t.set("avi", "video/avi"), t.set("divx", "video/divx"), t.set("flv", "video/x-flv"), t.set("mov|qt", "video/quicktime"), t.set("mpeg|mpg|mpe", "video/mpeg"), t.set("mp4|m4v", "video/mp4"), t.set("ogv", "video/ogg"), t.set("webm", "video/webm"), t.set("mkv", "video/x-matroska"), t.set("3gp|3gpp", "video/3gpp"), t.set("3g2|3gp2", "video/3gpp2"), t.set("txt|asc|c|cc|h|srt", "text/plain"), t.set("csv", "text/csv"), t.set("tsv", "text/tab-separated-values"), t.set("ics", "text/calendar"), t.set("rtx", "text/richtext"), t.set("css", "text/css"), t.set("htm|html", "text/html"), t.set("vtt", "text/vtt"), t.set("dfxp", "application/ttaf+xml"), t.set("mp3|m4a|m4b", "audio/mpeg"), t.set("aac", "audio/aac"), t.set("ra|ram", "audio/x-realaudio"), t.set("wav", "audio/wav"), t.set("ogg|oga", "audio/ogg"), t.set("flac", "audio/flac"), t.set("mid|midi", "audio/midi"), t.set("wma", "audio/x-ms-wma"), t.set("wax", "audio/x-ms-wax"), t.set("mka", "audio/x-matroska"), t.set("rtf", "application/rtf"), t.set("js", "application/javascript"), t.set("pdf", "application/pdf"), t.set("swf", "application/x-shockwave-flash"), t.set("class", "application/java"), t.set("tar", "application/x-tar"), t.set("zip", "application/zip"), t.set("gz|gzip", "application/x-gzip"), t.set("rar", "application/rar"), t.set("7z", "application/x-7z-compressed"), t.set("exe", "application/x-msdownload"), t.set("psd", "application/octet-stream"), t.set("xcf", "application/octet-stream"), t.set("doc", "application/msword"), t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"), t.set("wri", "application/vnd.ms-write"), t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"), t.set("mdb", "application/vnd.ms-access"), t.set("mpp", "application/vnd.ms-project"), t.set("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"), t.set("docm", "application/vnd.ms-word.document.macroEnabled.12"), t.set("dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"), t.set("dotm", "application/vnd.ms-word.template.macroEnabled.12"), t.set("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), t.set("xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"), t.set("xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"), t.set("xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"), t.set("xltm", "application/vnd.ms-excel.template.macroEnabled.12"), t.set("xlam", "application/vnd.ms-excel.addin.macroEnabled.12"), t.set("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"), t.set("pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"), t.set("ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"), t.set("ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"), t.set("potx", "application/vnd.openxmlformats-officedocument.presentationml.template"), t.set("potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"), t.set("ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"), t.set("sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"), t.set("sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"), t.set("onetoc|onetoc2|onetmp|onepkg", "application/onenote"), t.set("oxps", "application/oxps"), t.set("xps", "application/vnd.ms-xpsdocument"), t.set("odt", "application/vnd.oasis.opendocument.text"), t.set("odp", "application/vnd.oasis.opendocument.presentation"), t.set("ods", "application/vnd.oasis.opendocument.spreadsheet"), t.set("odg", "application/vnd.oasis.opendocument.graphics"), t.set("odc", "application/vnd.oasis.opendocument.chart"), t.set("odb", "application/vnd.oasis.opendocument.database"), t.set("odf", "application/vnd.oasis.opendocument.formula"), t.set("wp|wpd", "application/wordperfect"), t.set("key", "application/vnd.apple.keynote"), t.set("numbers", "application/vnd.apple.numbers"), t.set("pages", "application/vnd.apple.pages"), t
                            })())("*" === s && n.startsWith(t + "/") || n === i[0]) && e.push(...o.split("|"))
                    }
                    return e
                })(e).some((e => (e = "." + e.trim(), t.name.toLowerCase().endsWith(e.toLowerCase()))))))))) throw new o(this)
        },
        h = function(t) {
            if (!t.getAll(this.field).every((t => this.accept?.some((e => t === String(e)))))) throw new o(this)
        },
        u = function(t) {
            if (!t.getAll(this.field).every((t => {
                    const e = 0 === (i = new Date(t).getDay()) ? 7 : i;
                    var i;
                    return this.accept?.some((t => e === parseInt(t)))
                }))) throw new o(this)
        },
        w = function(t) {
            if (t.getAll(this.field).length < parseInt(this.threshold)) throw new o(this)
        },
        v = function(t) {
            const e = t.getAll(this.field);
            if (parseInt(this.threshold) < e.length) throw new o(this)
        },
        g = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    "string" == typeof t && (i += t.length)
                })), 0 !== i && i < parseInt(this.threshold)) throw new o(this)
        },
        x = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    "string" == typeof t && (i += t.length)
                })), parseInt(this.threshold) < i) throw new o(this)
        },
        y = function(t) {
            if (!t.getAll(this.field).every((t => !(parseFloat(t) < parseFloat(this.threshold))))) throw new o(this)
        },
        b = function(t) {
            if (!t.getAll(this.field).every((t => !(parseFloat(this.threshold) < parseFloat(t))))) throw new o(this)
        },
        A = function(t) {
            if (!t.getAll(this.field).every((t => (t = t.trim(), !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && t < this.threshold))))) throw new o(this)
        },
        z = function(t) {
            if (!t.getAll(this.field).every((t => (t = t.trim(), !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && this.threshold < t))))) throw new o(this)
        },
        j = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    t instanceof File && (i += t.size)
                })), i < parseInt(this.threshold)) throw new o(this)
        },
        $ = function(t) {
            const e = t.getAll(this.field);
            let i = 0;
            if (e.forEach((t => {
                    t instanceof File && (i += t.size)
                })), parseInt(this.threshold) < i) throw new o(this)
        },
        I = ({
            ruleObj: t,
            options: i
        }) => {
            const {
                rule: s,
                ...o
            } = t;
            return "function" == typeof e[s] && ("function" != typeof e[s].matches || e[s].matches(o, i))
        },
        O = ({
            ruleObj: t,
            formDataTree: i,
            options: s
        }) => {
            const {
                rule: o
            } = t;
            e[o].call(t, i, s)
        },
        E = [],
        k = t => [...E].reduce(((t, e) => i => e(i, t)), t),
        D = function(t, e = {}) {
            const i = (this.rules ?? []).filter((t => I({
                    ruleObj: t,
                    options: e
                }))),
                s = k(O);
            if (!i.every((i => {
                    try {
                        s({
                            ruleObj: i,
                            formDataTree: t,
                            options: e
                        })
                    } catch (t) {
                        if (!(t instanceof o)) throw t;
                        if (void 0 !== t.error) throw t;
                        return !1
                    }
                    return !0
                }))) throw new o(this)
        },
        M = function(t, e = {}) {
            const i = (this.rules ?? []).filter((t => I({
                    ruleObj: t,
                    options: e
                }))),
                s = k(O);
            if (!i.some((i => {
                    try {
                        s({
                            ruleObj: i,
                            formDataTree: t,
                            options: e
                        })
                    } catch (t) {
                        if (!(t instanceof o)) throw t;
                        return !1
                    }
                    return !0
                }))) throw new o(this)
        };
    var F;
    window.swv = {
        validators: e,
        validate: (t, e, i = {}) => {
            const n = (t.rules ?? []).filter((t => I({
                ruleObj: t,
                options: i
            })));
            if (!n.length) return new Map;
            const a = k(O),
                r = new s(e),
                p = n.reduce(((t, e) => {
                    try {
                        a({
                            ruleObj: e,
                            formDataTree: r,
                            options: i
                        })
                    } catch (e) {
                        if (!(e instanceof o)) throw e;
                        if (void 0 !== e.field && !t.has(e.field) && void 0 !== e.error) return t.set(e.field, e)
                    }
                    return t
                }), new Map);
            for (const t of r.keys()) p.has(t) || p.set(t, {
                validInputs: r.getAll(t)
            });
            return p
        },
        use: t => {
            E.push(t)
        },
        ...null !== (F = window.swv) && void 0 !== F ? F : {}
    }
})();
(() => {
    "use strict";
    const e = window.wp.i18n,
        t = e => Math.abs(parseInt(e, 10)),
        a = (e, t, a) => {
            const n = new CustomEvent(`wpcf7${t}`, {
                bubbles: !0,
                detail: a
            });
            "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(n)
        },
        n = (e, t) => {
            const n = new Map([
                ["init", "init"],
                ["validation_failed", "invalid"],
                ["acceptance_missing", "unaccepted"],
                ["spam", "spam"],
                ["aborted", "aborted"],
                ["mail_sent", "sent"],
                ["mail_failed", "failed"],
                ["submitting", "submitting"],
                ["resetting", "resetting"],
                ["validating", "validating"],
                ["payment_required", "payment-required"]
            ]);
            n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = `custom-${t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-")}`);
            const r = e.getAttribute("data-status");
            if (e.wpcf7.status = t, e.setAttribute("data-status", t), e.classList.add(t), r && r !== t) {
                e.classList.remove(r);
                const t = {
                    contactFormId: e.wpcf7.id,
                    pluginVersion: e.wpcf7.pluginVersion,
                    contactFormLocale: e.wpcf7.locale,
                    unitTag: e.wpcf7.unitTag,
                    containerPostId: e.wpcf7.containerPost,
                    status: e.wpcf7.status,
                    prevStatus: r
                };
                a(e, "statuschanged", t)
            }
            return t
        },
        r = e => {
            const {
                root: t,
                namespace: a = "contact-form-7/v1"
            } = wpcf7.api;
            return o.reduceRight(((e, t) => a => t(a, e)), (e => {
                let n, r, {
                    url: o,
                    path: c,
                    endpoint: s,
                    headers: i,
                    body: l,
                    data: p,
                    ...d
                } = e;
                "string" == typeof s && (n = a.replace(/^\/|\/$/g, ""), r = s.replace(/^\//, ""), c = r ? n + "/" + r : n), "string" == typeof c && (-1 !== t.indexOf("?") && (c = c.replace("?", "&")), c = c.replace(/^\//, ""), o = t + c), i = {
                    Accept: "application/json, */*;q=0.1",
                    ...i
                }, delete i["X-WP-Nonce"], p && (l = JSON.stringify(p), i["Content-Type"] = "application/json");
                const f = {
                        code: "fetch_error",
                        message: "You are probably offline."
                    },
                    u = {
                        code: "invalid_json",
                        message: "The response is not a valid JSON response."
                    };
                return window.fetch(o || c || window.location.href, {
                    ...d,
                    headers: i,
                    body: l
                }).then((e => Promise.resolve(e).then((e => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e
                })).then((e => {
                    if (204 === e.status) return null;
                    if (e && e.json) return e.json().catch((() => {
                        throw u
                    }));
                    throw u
                }))), (() => {
                    throw f
                }))
            }))(e)
        },
        o = [];

    function c(e, t = {}) {
        const {
            target: a,
            scope: r = e,
            ...o
        } = t;
        if (void 0 === e.wpcf7?.schema) return;
        const c = {
            ...e.wpcf7.schema
        };
        if (void 0 !== a) {
            if (!e.contains(a)) return;
            if (!a.closest(".wpcf7-form-control-wrap[data-name]")) return;
            if (a.closest(".novalidate")) return
        }
        const p = r.querySelectorAll(".wpcf7-form-control-wrap"),
            d = Array.from(p).reduce(((e, t) => (t.closest(".novalidate") || t.querySelectorAll(":where( input, textarea, select ):enabled").forEach((t => {
                if (t.name) switch (t.type) {
                    case "button":
                    case "image":
                    case "reset":
                    case "submit":
                        break;
                    case "checkbox":
                    case "radio":
                        t.checked && e.append(t.name, t.value);
                        break;
                    case "select-multiple":
                        for (const a of t.selectedOptions) e.append(t.name, a.value);
                        break;
                    case "file":
                        for (const a of t.files) e.append(t.name, a);
                        break;
                    default:
                        e.append(t.name, t.value)
                }
            })), e)), new FormData),
            f = e.getAttribute("data-status");
        Promise.resolve(n(e, "validating")).then((n => {
            if (void 0 !== swv) {
                const n = swv.validate(c, d, t);
                for (const t of p) {
                    if (void 0 === t.dataset.name) continue;
                    const o = t.dataset.name;
                    if (n.has(o)) {
                        const {
                            error: t,
                            validInputs: a
                        } = n.get(o);
                        i(e, o), void 0 !== t && s(e, o, t, {
                            scope: r
                        }), l(e, o, null != a ? a : [])
                    }
                    if (t.contains(a)) break
                }
            }
        })).finally((() => {
            n(e, f)
        }))
    }
    r.use = e => {
        o.unshift(e)
    };
    const s = (e, t, a, n) => {
            const {
                scope: r = e,
                ...o
            } = null != n ? n : {}, c = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""), s = e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);
            (() => {
                const t = document.createElement("li");
                t.setAttribute("id", c), s && s.id ? t.insertAdjacentHTML("beforeend", `<a href="#${s.id}">${a}</a>`) : t.insertAdjacentText("beforeend", a), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)
            })(), r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
                const t = document.createElement("span");
                t.classList.add("wpcf7-not-valid-tip"), t.setAttribute("aria-hidden", "true"), t.insertAdjacentText("beforeend", a), e.appendChild(t), e.querySelectorAll("[aria-invalid]").forEach((e => {
                    e.setAttribute("aria-invalid", "true")
                })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                    e.classList.add("wpcf7-not-valid"), e.setAttribute("aria-describedby", c), "function" == typeof e.setCustomValidity && e.setCustomValidity(a), e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", (e => {
                        t.setAttribute("style", "display: none")
                    })), t.addEventListener("click", (e => {
                        t.setAttribute("style", "display: none")
                    })))
                }))
            }))
        },
        i = (e, t) => {
            const a = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
            e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`)?.remove(), e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
                e.querySelector(".wpcf7-not-valid-tip")?.remove(), e.querySelectorAll("[aria-invalid]").forEach((e => {
                    e.setAttribute("aria-invalid", "false")
                })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                    e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid"), "function" == typeof e.setCustomValidity && e.setCustomValidity("")
                }))
            }))
        },
        l = (e, t, a) => {
            e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e => {
                if ("output" === e.tagName.toLowerCase()) {
                    const t = e;
                    0 === a.length && a.push(t.dataset.default), a.slice(0, 1).forEach((e => {
                        e instanceof File && (e = e.name), t.textContent = e
                    }))
                } else e.querySelectorAll("output").forEach((e => {
                    e.hasAttribute("data-default") ? 0 === a.length ? e.removeAttribute("hidden") : e.setAttribute("hidden", "hidden") : e.remove()
                })), a.forEach((a => {
                    a instanceof File && (a = a.name);
                    const n = document.createElement("output");
                    n.setAttribute("name", t), n.textContent = a, e.appendChild(n)
                }))
            }))
        };

    function p(e, t = {}) {
        if (wpcf7.blocked) return d(e), void n(e, "submitting");
        const o = new FormData(e);
        t.submitter && t.submitter.name && o.append(t.submitter.name, t.submitter.value);
        const c = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(o, (e => {
                const t = e[0],
                    a = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: a
                }
            })).filter((e => !1 !== e)),
            formData: o
        };
        r({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: o,
            wpcf7: {
                endpoint: "feedback",
                form: e,
                detail: c
            }
        }).then((t => {
            const r = n(e, t.status);
            return c.status = t.status, c.apiResponse = t, ["invalid", "unaccepted", "spam", "aborted"].includes(r) ? a(e, r, c) : ["sent", "failed"].includes(r) && a(e, `mail${r}`, c), a(e, "submit", c), t
        })).then((t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.wpcf7.resetOnMailSent = !0), t.invalid_fields && t.invalid_fields.forEach((t => {
                s(e, t.field, t.message)
            })), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".wpcf7-response-output").forEach((e => {
                e.innerText = t.message
            }))
        })).catch((e => console.error(e)))
    }
    r.use(((e, t) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {
                form: t,
                detail: r
            } = e.wpcf7;
            d(t), a(t, "beforesubmit", r), n(t, "submitting")
        }
        return t(e)
    }));
    const d = e => {
        e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t => {
            t.dataset.name && i(e, t.dataset.name)
        })), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.querySelectorAll(".wpcf7-response-output").forEach((e => {
            e.innerText = ""
        }))
    };

    function f(e) {
        const t = new FormData(e),
            o = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                inputs: Array.from(t, (e => {
                    const t = e[0],
                        a = e[1];
                    return !t.match(/^_/) && {
                        name: t,
                        value: a
                    }
                })).filter((e => !1 !== e)),
                formData: t
            };
        r({
            endpoint: `contact-forms/${e.wpcf7.id}/refill`,
            method: "GET",
            wpcf7: {
                endpoint: "refill",
                form: e,
                detail: o
            }
        }).then((t => {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, n(e, "mail_sent")) : n(e, "init"), o.apiResponse = t, a(e, "reset", o)
        })).catch((e => console.error(e)))
    }
    r.use(((e, t) => {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            const {
                form: t,
                detail: a
            } = e.wpcf7;
            d(t), n(t, "resetting")
        }
        return t(e)
    }));
    const u = (e, t) => {
            for (const a in t) {
                const n = t[a];
                e.querySelectorAll(`input[name="${a}"]`).forEach((e => {
                    e.value = ""
                })), e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`).forEach((e => {
                    e.setAttribute("src", n)
                }));
                const r = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                r && e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e => {
                    e.value = r[1]
                }))
            }
        },
        m = (e, t) => {
            for (const a in t) {
                const n = t[a][0],
                    r = t[a][1];
                e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e => {
                    e.querySelector(`input[name="${a}"]`).value = "", e.querySelector(".wpcf7-quiz-label").textContent = n, e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value = r
                }))
            }
        };

    function w(e) {
        const a = new FormData(e);
        e.wpcf7 = {
            id: t(a.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: a.get("_wpcf7_version"),
            locale: a.get("_wpcf7_locale"),
            unitTag: a.get("_wpcf7_unit_tag"),
            containerPost: t(a.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7"),
            get schema() {
                return wpcf7.schemas.get(this.id)
            }
        }, wpcf7.schemas.set(e.wpcf7.id, void 0), e.querySelectorAll(".has-spinner").forEach((e => {
            e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>')
        })), (e => {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t => {
                t.addEventListener("change", (t => {
                    const a = t.target.getAttribute("name");
                    e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e => {
                        e !== t.target && (e.checked = !1)
                    }))
                }))
            }))
        })(e), (e => {
            e.querySelectorAll(".has-free-text").forEach((t => {
                const a = t.querySelector("input.wpcf7-free-text"),
                    n = t.querySelector('input[type="checkbox"], input[type="radio"]');
                a.disabled = !n.checked, e.addEventListener("change", (e => {
                    a.disabled = !n.checked, e.target === n && n.checked && a.focus()
                }))
            }))
        })(e), (e => {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((e => {
                e.addEventListener("change", (t => {
                    let a = e.value.trim();
                    a && !a.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== a.indexOf(".") && (a = a.replace(/^\/+/, ""), a = "http://" + a), e.value = a
                }))
            }))
        })(e), (e => {
            if (!e.querySelector(".wpcf7-acceptance") || e.classList.contains("wpcf7-acceptance-as-validation")) return;
            const t = () => {
                let t = !0;
                e.querySelectorAll(".wpcf7-acceptance").forEach((e => {
                    if (!t || e.classList.contains("optional")) return;
                    const a = e.querySelector('input[type="checkbox"]');
                    (e.classList.contains("invert") && a.checked || !e.classList.contains("invert") && !a.checked) && (t = !1)
                })), e.querySelectorAll(".wpcf7-submit").forEach((e => {
                    e.disabled = !t
                }))
            };
            t(), e.addEventListener("change", (e => {
                t()
            })), e.addEventListener("wpcf7reset", (e => {
                t()
            }))
        })(e), (e => {
            const a = (e, a) => {
                    const n = t(e.getAttribute("data-starting-value")),
                        r = t(e.getAttribute("data-maximum-value")),
                        o = t(e.getAttribute("data-minimum-value")),
                        c = e.classList.contains("down") ? n - a.value.length : a.value.length;
                    e.setAttribute("data-current-value", c), e.innerText = c, r && r < a.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"), o && a.value.length < o ? e.classList.add("too-short") : e.classList.remove("too-short")
                },
                n = t => {
                    t = {
                        init: !1,
                        ...t
                    }, e.querySelectorAll(".wpcf7-character-count").forEach((n => {
                        const r = n.getAttribute("data-target-name"),
                            o = e.querySelector(`[name="${r}"]`);
                        o && (o.value = o.defaultValue, a(n, o), t.init && o.addEventListener("keyup", (e => {
                            a(n, o)
                        })))
                    }))
                };
            n({
                init: !0
            }), e.addEventListener("wpcf7reset", (e => {
                n()
            }))
        })(e), window.addEventListener("load", (t => {
            wpcf7.cached && e.reset()
        })), e.addEventListener("reset", (t => {
            wpcf7.reset(e)
        })), e.addEventListener("submit", (t => {
            wpcf7.submit(e, {
                submitter: t.submitter
            }), t.preventDefault()
        })), e.addEventListener("wpcf7submit", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        })), e.addEventListener("wpcf7reset", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        })), e.addEventListener("change", (t => {
            t.target.closest(".wpcf7-form-control") && wpcf7.validate(e, {
                target: t.target
            })
        })), e.addEventListener("wpcf7statuschanged", (t => {
            const a = t.detail.status;
            e.querySelectorAll(".active-on-any").forEach((e => {
                e.removeAttribute("inert"), e.classList.remove("active-on-any")
            })), e.querySelectorAll(`.inert-on-${a}`).forEach((e => {
                e.setAttribute("inert", "inert"), e.classList.add("active-on-any")
            }))
        }))
    }
})();
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function(i, s) {
        return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(i)), t(s), s
    } : t(jQuery)
}(function(t) {
    return t.fn.tilt = function(i) {
        var s = function() {
                this.ticking || (requestAnimationFrame(g.bind(this)), this.ticking = !0)
            },
            e = function() {
                var i = this;
                t(this).on("mousemove", o), t(this).on("mouseenter", a), this.settings.reset && t(this).on("mouseleave", l), this.settings.glare && t(window).on("resize", d.bind(i))
            },
            n = function() {
                var i = this;
                void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({
                    transition: this.settings.speed + "ms " + this.settings.easing
                }), this.settings.glare && this.glareElement.css({
                    transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
                }), this.timeout = setTimeout(function() {
                    t(i).css({
                        transition: ""
                    }), i.settings.glare && i.glareElement.css({
                        transition: ""
                    })
                }, this.settings.speed)
            },
            a = function(i) {
                this.ticking = !1, t(this).css({
                    "will-change": "transform"
                }), n.call(this), t(this).trigger("tilt.mouseEnter")
            },
            r = function(i) {
                return "undefined" == typeof i && (i = {
                    pageX: t(this).offset().left + t(this).outerWidth() / 2,
                    pageY: t(this).offset().top + t(this).outerHeight() / 2
                }), {
                    x: i.pageX,
                    y: i.pageY
                }
            },
            o = function(t) {
                this.mousePositions = r(t), s.call(this)
            },
            l = function() {
                n.call(this), this.reset = !0, s.call(this), t(this).trigger("tilt.mouseLeave")
            },
            h = function() {
                var i = t(this).outerWidth(),
                    s = t(this).outerHeight(),
                    e = t(this).offset().left,
                    n = t(this).offset().top,
                    a = (this.mousePositions.x - e) / i,
                    r = (this.mousePositions.y - n) / s,
                    o = (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2),
                    l = (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                    h = Math.atan2(this.mousePositions.x - (e + i / 2), -(this.mousePositions.y - (n + s / 2))) * (180 / Math.PI);
                return {
                    tiltX: o,
                    tiltY: l,
                    percentageX: 100 * a,
                    percentageY: 100 * r,
                    angle: h
                }
            },
            g = function() {
                return this.transforms = h.call(this), this.reset ? (this.reset = !1, t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger("change", [this.transforms]), void(this.ticking = !1))
            },
            c = function() {
                var i = this.settings.glarePrerender;
                if (i || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-tilt-glare"), this.glareElement = t(this).find(".js-tilt-glare-inner"), !i) {
                    var s = {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    };
                    this.glareElementWrapper.css(s).css({
                        overflow: "hidden",
                        "pointer-events": "none"
                    }), this.glareElement.css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                        width: "" + 2 * t(this).outerWidth(),
                        height: "" + 2 * t(this).outerWidth(),
                        transform: "rotate(180deg) translate(-50%, -50%)",
                        "transform-origin": "0% 0%",
                        opacity: "0"
                    })
                }
            },
            d = function() {
                this.glareElement.css({
                    width: "" + 2 * t(this).outerWidth(),
                    height: "" + 2 * t(this).outerWidth()
                })
            };
        return t.fn.tilt.destroy = function() {
            t(this).each(function() {
                t(this).find(".js-tilt-glare").remove(), t(this).css({
                    "will-change": "",
                    transform: ""
                }), t(this).off("mousemove mouseenter mouseleave")
            })
        }, t.fn.tilt.getValues = function() {
            var i = [];
            return t(this).each(function() {
                this.mousePositions = r.call(this), i.push(h.call(this))
            }), i
        }, t.fn.tilt.reset = function() {
            t(this).each(function() {
                var i = this;
                this.mousePositions = r.call(this), this.settings = t(this).data("settings"), l.call(this), setTimeout(function() {
                    i.reset = !1
                }, this.settings.transition)
            })
        }, this.each(function() {
            var s = this;
            this.settings = t.extend({
                maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
                easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
            }, i), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = function() {
                t(s).data("settings", s.settings), s.settings.glare && c.call(s), e.call(s)
            }, this.init()
        })
    }, t("[data-tilt]").tilt(), !0
});
! function(c) {
    "use strict";

    function o(t, e, a) {
        var i = t.offset(),
            n = e.offset(),
            o = i.left,
            r = i.top;
        o -= n.left, r -= n.top, "horizontal" == a && e.css("width", o + "px"), "vertical" == a && e.css("height", r + "px")
    }

    function l(t) {
        if (t) {
            var e = t.find(".isotope");
            if (0 < e.length) new Shuffle(e, {
                itemSelector: ".grid-item"
            })
        } else {
            var a = c(".image-gallery-isotope-wrapper");
            0 != a.length && a.each(function() {
                var t = c(this).find(".isotope");
                new Shuffle(t, {
                    itemSelector: ".grid-item"
                })
            })
        }
    }

    function p(t) {
        t && t.find(".swiper-container").each(function() {
            var t = c(this),
                e = t.attr("data-swiper_options") ? t.data("swiper_options") : {};
            new Swiper(c(this), e)
        })
    }
    c(window).load(function() {
        if (0 < c(".cascading-parallax-image").length && c(".cascading-parallax-image").each(function() {
                var e = c(this),
                    t = c(document).height() / ((c(window).scrollTop() + c(window).height()) / 2);
                t = -Math.round(t), e.find(".inner-wrap").css("transform", "translateY(" + t + "%) translateZ(0px) scale(1)"), c(window).scroll(function() {
                    var t = c(document).height() / ((c(window).scrollTop() + c(window).height()) / 2);
                    t = -Math.round(t), e.find(".inner-wrap").css("transform", "translateY(" + t + "%) translateZ(0px) scale(1)")
                })
            }), 0 < c(".webgatha-swiper-container").length && "undefined" != typeof Swiper && c(".webgatha-swiper-container").each(function() {
                var t = c(this),
                    e = t.attr("data-swiper_options") ? t.data("swiper_options") : {},
                    a = new Swiper(c(this), e);
                a.on("slideChange", function() {
                    t.find(".webgatha_slider_item_wrapper").each(function() {
                        var t = c(this).find(".wpb_animate_when_almost_visible");
                        t.removeClass("wpb_start_animation animated"), c(this).hasClass("swiper-slide-active") && t.addClass("wpb_start_animation animated")
                    })
                }), a.on("transitionEnd", function() {
                    t.find(".webgatha_slider_item_wrapper").each(function() {
                        var t = c(this).find(".wpb_animate_when_almost_visible");
                        t.removeClass("wpb_start_animation animated"), c(this).hasClass("swiper-slide-active") && t.addClass("wpb_start_animation animated")
                    })
                })
            }), "undefined" != typeof Shuffle && 0 < c(".instagram-masonry").length && c(".instagram-masonry").each(function() {
                var t = c(this);
                new Shuffle(t, {
                    itemSelector: ".instagram-masonry-item"
                })
            }), "undefined" != typeof Shuffle) {
            var t = document.querySelectorAll(".product-category-masonary .masonry");
            c.each(t, function(t, e) {
                new Shuffle(e, {
                    itemSelector: ".masonry-item"
                })
            })
        }
        "undefined" != typeof Shuffle && l(), jQuery(".webgatha-map").each(function(t, e) {
            var a = jQuery(this).attr("data-map_options"),
                i = jQuery(this).attr("id");
            e = jQuery.parseJSON(a);
            var n = {
                    lat: parseFloat(e.lat),
                    lng: parseFloat(e.long)
                },
                o = new google.maps.Map(document.getElementById(i), {
                    center: n,
                    zoom: parseFloat(e.map_zoom),
                    mapTypeId: e.map_type,
                    styles: JSON.parse(e.map_style)
                }),
                r = e.map_pin;
            new google.maps.Marker({
                position: n,
                map: o,
                icon: r
            })
        })
    }), c(document).ready(function() {
        c(document).on("click", ".entry-footer .share > a", function(t) {
            t.preventDefault()
        }), c(document).on("click", ".postlike", function(t) {
            t.preventDefault();
            var e = c(this).attr("data-post_id"),
                a = c(this);
            c.ajax({
                type: "POST",
                url: webgathacore_localize.ajax_url,
                data: {
                    action: "webgatha_set_post_like_count",
                    post_id: e,
                    nonce: webgathacore_localize.ajax_nonce
                },
                beforeSend: function() {},
                success: function(t) {
                    a.html(t.icon), a.append(t.count), a.attr("title", t.status)
                }
            })
        }), 0 < c(".webgatha-image-compare-container").length && c(".webgatha-image-compare-container").each(function() {
            var t = c(this).find(".image-box-divider"),
                e = c(this).find(".image-box.before-image"),
                a = "horizontal",
                i = "x";
            c(this).hasClass("vertical") && (a = "vertical", i = "y"), t.draggable({
                axis: i,
                containment: "parent",
                drag: function() {
                    o(c(this), e, a)
                },
                stop: function() {
                    o(c(this), e, a)
                }
            })
        }), c.isFunction(c.fn.magnificPopup) && c(".webgatha-button-enable-litebox a").magnificPopup({
            type: "inline",
            closeBtnInside: !0
        });
        var t = function() {
            c(".counter-number").each(function() {
                if (!c(this).hasClass("counter-animated")) {
                    var t = c(this).offset().top,
                        e = c(window).scrollTop();
                    e = e + c(window).height() - 30;
                    var a = c(this);
                    t < e && (a.addClass("counter-animated"), c(this).prop("Counter", 0).animate({
                        Counter: c(this).text()
                    }, {
                        duration: 1500,
                        easing: "swing",
                        step: function(t) {
                            c(this).text(Math.ceil(t))
                        }
                    }))
                }
            })
        };
        c(".counter-number").length && (t(), c(window).scroll(function() {
            t()
        }));
        var e = function() {
            c(".webgatha-progressbar").each(function(t, e) {
                if (!c(this).hasClass("progressbar-animated")) {
                    var a = c(this).offset().top,
                        i = c(window).scrollTop();
                    i += c(window).height();
                    var n = c(this),
                        o = c(this).parents(".webgatha-progressbar-wrapper-inner").find(".progressbar-values"),
                        r = c(this).parents(".webgatha-progressbar-cover"),
                        s = n.attr("data-percent") || "100";
                    s <= 0 ? s = 0 : 100 < s && (s = 100), a < i && (n.animate({
                        width: s + "%"
                    }).addClass("progressbar-animated " + s), r.hasClass("progressbar-style-1") && (s = 100 - s, webgathacore_localize.rtl ? o.animate({
                        left: s + "%",
                        opacity: 1
                    }) : o.animate({
                        right: s + "%",
                        opacity: 1
                    })))
                }
            })
        };
        c(".webgatha-progressbar").length && (e(), c(window).scroll(function() {
            e()
        }));
        var r, s, a = function() {
            c(".progressbar-circle-content").each(function() {
                var t = c(this),
                    e = c(this).offset().top,
                    a = c(window).scrollTop();
                a += c(window).height();
                var i = {
                    backgroundColor: t.data("background") ? t.data("background") : "#ccc",
                    progressColor: t.data("color") ? t.data("color") : "#82b73f",
                    percent: t.data("percent") ? t.data("percent") : 0,
                    duration: 2e3
                };
                t.find(".progressbar-circle-background").css("background", i.backgroundColor), t.find(".progressbar-circle-left").css("background", i.backgroundColor), t.find(".progressbar-circle-rotate").css("background", i.progressColor), t.find(".progressbar-circle-right").css("background", i.progressColor);
                var n = t.find(".progressbar-circle-rotate");
                if (t.attr("data-percent") || "100", e < a && (setTimeout(function() {
                        n.css({
                            transition: "transform " + i.duration + "ms linear",
                            transform: "rotate(" + 3.6 * i.percent + "deg)"
                        })
                    }, .5), 50 < i.percent)) {
                    var o = "toggle " + i.duration / i.percent * 50 + "ms step-end",
                        r = "toggle " + i.duration / i.percent * 50 + "ms step-start";
                    t.find(".progressbar-circle-right").css({
                        animation: o,
                        opacity: 1
                    }), t.find(".progressbar-circle-left").css({
                        animation: r,
                        opacity: 0
                    })
                }
            })
        };
        (c(".progressbar-circle-content").length && (a(), c(window).scroll(function() {
            a()
        })), 0 < c(".webgatha_hotspot_wrapper").length && c(".webgatha_hotspot_wrapper").each(function() {
            var t = c(this).find(".image-hotspot");
            t.hasClass("trigger-click") && t.on("click", function() {
                c(this).toggleClass("hotspot-visible")
            })
        }), c(".webgatha-dropcap-cover").length && c(".webgatha-dropcap-cover").each(function() {
            var t = c(this),
                e = t.html().trim();
            "<" != e.charAt(0) && t.html('<span class="dropcap-letter">' + e.charAt(0) + "</span> " + e.substring(1))
        }), c(".webgatha_accordion_wrapper").each(function() {
            c(this).find(".webgatha-accordion-panel-body").first().show(), c(this).find(".webgatha-accordion-panels .webgatha-accordion-panel").first().addClass("active-panel")
        }), c(document).on("click", ".webgatha-accordion-panel-heading", function() {
            c(this).next("div.webgatha-accordion-panel-body").is(":hidden") && (c(this).parents(".webgatha-accordion-panels").find(".active-panel").removeClass("active-panel"), c(this).parents(".webgatha-accordion-panel").addClass("active-panel"), c(this).parents("div.webgatha-accordion-panels").find(".webgatha-accordion-panel-body").stop().slideUp("fast"), c(this).next("div.webgatha-accordion-panel-body").slideToggle("fast"))
        }), 0 != c(".webgatha_banner_wrapper").length) && c(window).on("load resize", function(t) {
            var o = c(window).width();
            c(".webgatha-banner").each(function(t, e) {
                var a = c(this).data("banner_options"),
                    i = c(this).children(".webgatha-banner-content"),
                    n = c(i).data("banner_padding_options");
                "undefined" != a.font_size_responsive && a.font_size_responsive && (1200 <= o ? s = a.font_size_xl : 992 <= o ? s = a.font_size_lg : 768 <= o ? s = a.font_size_md : 576 <= o ? s = a.font_size_sm : o < 576 && (s = a.font_size_xs), c(this).css("font-size", parseInt(s))), "undefined" != n.banner_padding_responsive && n.banner_padding_responsive && (1200 <= o ? r = n.banner_padding_xl : 992 <= o ? r = n.banner_padding_lg : 768 <= o ? r = n.banner_padding_md : 576 <= o ? r = n.banner_padding_sm : o < 576 && (r = n.banner_padding_xs), c(i).addClass(r))
            })
        });
        0 < c(".widget_webgatha_newsletter_widget, .newsletter-wrapper").length && c(".widget_webgatha_newsletter_widget, .newsletter-wrapper").each(function(t, e) {
            var a = c(this).find(".newsletter-msg"),
                i = c(this).find(".newsletter-mailchimp"),
                n = c(this).find(".newsletter-spinner"),
                o = c(this).find(".newsletter-email"),
                r = "";
            c(i).on("click", function() {
                return r = c(o).val(), c.ajax({
                    url: webgathacore_localize.ajax_url,
                    type: "post",
                    data: {
                        action: "mailchimp_singup",
                        newsletter_email: r,
                        nonce: webgathacore_localize.ajax_nonce
                    },
                    beforeSend: function() {
                        c(n).html('<i class="fas fa-sync-alt fa-spin"></i>'), c(a).hide().removeClass("error_msg").html("")
                    },
                    success: function(t) {
                        c(a).show().removeClass("error_msg").html(t), c(o).val(""), c(n).html("")
                    },
                    error: function(t) {
                        c(n).html(""), c(a).addClass("error_msg").html(t).show()
                    }
                }), !1
            })
        }), c.isFunction(c.fn.tilt) && c(".portfolio-style-5 .portfolio-item").tilt({
            perspective: 800,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: "1",
            speed: "400"
        }), 0 < c(".image-popup-gallery").length && c.isFunction(c.fn.magnificPopup) && c(".image-popup-gallery").each(function() {
            c(this).magnificPopup({
                delegate: "a.image-popup-img",
                type: "image",
                tLoading: webgathacore_localize.loading_image,
                mainClass: "mfp-img-mobile",
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    preload: [0, 1]
                },
                image: {
                    tError: webgathacore_localize.loading_image_error
                }
            })
        }), 0 < c(".popup-youtube").length && c.isFunction(c.fn.magnificPopup) && c(".popup-youtube").magnificPopup({
            disableOn: 300,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        });
        var n = function(t, e, a) {
            this.toRotate = e, this.el = t, this.loopNum = 0, this.period = parseInt(a, 10) || 2e3, this.txt = "", this.type(), this.isDeleting = !1
        };
        if (n.prototype.type = function() {
                var t = this.loopNum % this.toRotate.length,
                    e = this.toRotate[t];
                e && (this.isDeleting ? this.txt = e.substring(0, this.txt.length - 1) : this.txt = e.substring(0, this.txt.length + 1)), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
                var a = this,
                    i = 200 - 100 * Math.random();
                this.isDeleting && (i /= 2), this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, i = 500) : (i = this.period, this.isDeleting = !0), setTimeout(function() {
                    a.type()
                }, i)
            }, window.onload = function() {
                c(".wb-title-typewrite").each(function() {
                    var t, e = c(this).attr("data-period"),
                        a = [],
                        i = c(this);
                    setTimeout(function() {
                        var t = i.outerHeight();
                        t && i.parent(".section-main-title").css("min-height", t)
                    }, 500), c(this).next(".wrap").find(".typewriter-content").each(function() {
                        ({}), t = c(this).text(), a.push(t)
                    }), a && new n(this, a, e)
                })
            }, c(window).on("resize", function(t) {
                c(".wb-title-typewrite").each(function() {
                    var t = c(this).outerHeight();
                    t && c(this).parent(".section-main-title").css("min-height", t)
                })
            }), c('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
                var e = c(".tab-content").find(c(this).attr("href"));
                e && setTimeout(function() {
                    "undefined" != typeof Shuffle && l(e), p(e)
                }, 300)
            }), c(document).on("click", ".vc_tta-panel-heading", function() {
                var t = c(this).next(".webgatha-accordion-panel-body").find(".image-gallery-isotope-wrapper"),
                    e = c(this).next(".webgatha-accordion-panel-body");
                e && setTimeout(function() {
                    "undefined" != typeof Shuffle && l(t), p(e)
                }, 300)
            }), 0 < c(".webgatha-sticky-add-to-cart").length) {
            var i = c(".webgatha-sticky-add-to-cart");
            c(window).scroll(function() {
                var t = c(window).scrollTop(),
                    e = c("#colophon").position(),
                    a = c("form.cart").position();
                (void 0 === a ? 0 : a.top + c("form.cart").outerHeight()) < t && t < e.top ? i.addClass("sticky") : e.top > t ? i.removeClass("sticky") : i.addClass("sticky")
            }), c(document).on("click", ".webgatha-sticky-add-to-cart.vaiable_button", function(t) {
                t.preventDefault();
                var e = c(".variations_form").offset().top - c(".variations_form").outerHeight();
                c("html, body").animate({
                    scrollTop: e
                }, 1e3)
            }), c(document).on("click", ".webgatha-sticky-add-to-cart.grouped_product", function(t) {
                t.preventDefault();
                var e = c(".grouped_form").offset().top - c(".grouped_form").outerHeight();
                c("html, body").animate({
                    scrollTop: e
                }, 1e3)
            })
        }
    })
}(jQuery);
(function($) {
    "use strict";
    var container, button, menu, links, i, len;
    container = document.getElementById('site-navigation');
    if (!container) {
        return;
    }
    button = container.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return;
    }
    menu = container.getElementsByTagName('ul')[0];
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }
    menu.setAttribute('aria-expanded', 'false');
    if (-1 === menu.className.indexOf('nav-menu')) {
        menu.className += ' nav-menu';
    }
    button.onclick = function() {
        if (-1 !== container.className.indexOf('toggled')) {
            container.className = container.className.replace(' toggled', '');
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-expanded', 'false');
        } else {
            container.className += ' toggled';
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-expanded', 'true');
        }
    };
    links = menu.getElementsByTagName('a');
    for (i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener('focus', toggleFocus, true);
        links[i].addEventListener('blur', toggleFocus, true);
    }

    function toggleFocus() {
        var self = this;
        while (-1 === self.className.indexOf('nav-menu')) {
            if ('li' === self.tagName.toLowerCase()) {
                if (-1 !== self.className.indexOf('focus')) {
                    self.className = self.className.replace(' focus', '');
                } else {
                    self.className += ' focus';
                }
            }
            self = self.parentElement;
        }
    }
    (function(container) {
        var touchStartFn, i, parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
        if ('ontouchstart' in window) {
            touchStartFn = function(e) {
                var menuItem = this.parentNode,
                    i;
                if (!menuItem.classList.contains('focus')) {
                    e.preventDefault();
                    for (i = 0; i < menuItem.parentNode.children.length; ++i) {
                        if (menuItem === menuItem.parentNode.children[i]) {
                            continue;
                        }
                        menuItem.parentNode.children[i].classList.remove('focus');
                    }
                    menuItem.classList.add('focus');
                } else {
                    menuItem.classList.remove('focus');
                }
            };
            for (i = 0; i < parentLink.length; ++i) {
                parentLink[i].addEventListener('touchstart', touchStartFn, false);
            }
        }
    }(container));
})(jQuery);
/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), e.forEach(function(t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
    var e = "transitionend";

    function n(t) {
        var e = this,
            n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t), this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                } var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = g.fn[o],
        h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        },
        f = "alert",
        d = "fade",
        m = "show",
        p = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() {
                g.removeData(this._element, r), this._element = null
            }, t._getRootElement = function(t) {
                var e = _.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function(t) {
                var e = g.Event(h.CLOSE);
                return g(t).trigger(e), e
            }, t._removeElement = function(e) {
                var n = this;
                if (g(e).removeClass(m), g(e).hasClass(d)) {
                    var t = _.getTransitionDurationFromElement(e);
                    g(e).one(_.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) {
                g(t).detach().trigger(h.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(r);
                    e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function() {
        return g.fn[o] = c, p._jQueryInterface
    };
    var v = "button",
        y = "bs.button",
        E = "." + y,
        C = ".data-api",
        T = g.fn[v],
        S = "active",
        b = "btn",
        I = "focus",
        D = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]',
        A = 'input:not([type="hidden"])',
        N = ".active",
        O = ".btn",
        k = {
            CLICK_DATA_API: "click" + E + C,
            FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
        },
        P = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = g(this._element).closest(w)[0];
                if (n) {
                    var i = this._element.querySelector(A);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(S)) t = !1;
                            else {
                                var o = n.querySelector(N);
                                o && g(o).removeClass(S)
                            } if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(S), g(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)
            }, t.dispose = function() {
                g.removeData(this._element, y), this._element = null
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(y);
                    t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), n
        }();
    g(document).on(k.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle")
    }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function() {
        return g.fn[v] = T, P._jQueryInterface
    };
    var L = "carousel",
        j = "bs.carousel",
        H = "." + j,
        R = ".data-api",
        x = g.fn[L],
        F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        W = "next",
        q = "prev",
        M = "left",
        K = "right",
        Q = {
            SLIDE: "slide" + H,
            SLID: "slid" + H,
            KEYDOWN: "keydown" + H,
            MOUSEENTER: "mouseenter" + H,
            MOUSELEAVE: "mouseleave" + H,
            TOUCHSTART: "touchstart" + H,
            TOUCHMOVE: "touchmove" + H,
            TOUCHEND: "touchend" + H,
            POINTERDOWN: "pointerdown" + H,
            POINTERUP: "pointerup" + H,
            DRAG_START: "dragstart" + H,
            LOAD_DATA_API: "load" + H + R,
            CLICK_DATA_API: "click" + H + R
        },
        B = "carousel",
        V = "active",
        Y = "slide",
        z = "carousel-item-right",
        X = "carousel-item-left",
        $ = "carousel-item-next",
        G = "carousel-item-prev",
        J = "pointer-event",
        Z = ".active",
        tt = ".active.carousel-item",
        et = ".carousel-item",
        nt = ".carousel-item img",
        it = ".carousel-item-next, .carousel-item-prev",
        ot = ".carousel-indicators",
        rt = "[data-slide], [data-slide-to]",
        st = '[data-ride="carousel"]',
        at = {
            TOUCH: "touch",
            PEN: "pen"
        },
        lt = function() {
            function r(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                this._isSliding || this._slide(W)
            }, t.nextWhenVisible = function() {
                !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(q)
            }, t.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(tt);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) g(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? W : q;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() {
                g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(t) {
                return t = l({}, F, t), _.typeCheckConfig(L, t, U), t
            }, t._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(Q.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var n = this;
                if (this._touchSupported) {
                    var e = function(t) {
                            n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) {
                                return n.cycle(t)
                            }, 500 + n._config.interval))
                        };
                    g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                        return e(t)
                    }), g(this._element).on(Q.POINTERUP, function(t) {
                        return i(t)
                    }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                        return e(t)
                    }), g(this._element).on(Q.TOUCHMOVE, function(t) {
                        var e;
                        (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                    }), g(this._element).on(Q.TOUCHEND, function(t) {
                        return i(t)
                    }))
                }
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function(t, e) {
                var n = t === W,
                    i = t === q,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === q ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(tt)),
                    o = g.Event(Q.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return g(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                    g(e).removeClass(V);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && g(n).addClass(V)
                }
            }, t._slide = function(t, e) {
                var n, i, o, r = this,
                    s = this._element.querySelector(tt),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = g.Event(Q.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (g(this._element).hasClass(Y)) {
                        g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                        var d = _.getTransitionDurationFromElement(s);
                        g(s).one(_.TRANSITION_END, function() {
                            g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                                return g(r._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
                    h && this.cycle()
                }
            }, r._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this).data(j),
                        e = l({}, F, g(this).data());
                    "object" == typeof i && (e = l({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, r._dataApiClickHandler = function(t) {
                var e = _.getSelectorFromElement(this);
                if (e) {
                    var n = g(e)[0];
                    if (n && g(n).hasClass(B)) {
                        var i = l({}, g(n).data(), g(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault()
                    }
                }
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return F
                }
            }]), r
        }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            lt._jQueryInterface.call(i, i.data())
        }
    }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function() {
        return g.fn[L] = x, lt._jQueryInterface
    };
    var ct = "collapse",
        ht = "bs.collapse",
        ut = "." + ht,
        ft = g.fn[ct],
        dt = {
            toggle: !0,
            parent: ""
        },
        gt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        _t = {
            SHOW: "show" + ut,
            SHOWN: "shown" + ut,
            HIDE: "hide" + ut,
            HIDDEN: "hidden" + ut,
            CLICK_DATA_API: "click" + ut + ".data-api"
        },
        mt = "show",
        pt = "collapse",
        vt = "collapsing",
        yt = "collapsed",
        Et = "width",
        Ct = "height",
        Tt = ".show, .collapsing",
        St = '[data-toggle="collapse"]',
        bt = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                g(this._element).hasClass(mt) ? this.hide() : this.show()
            }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
                    })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                    var i = g.Event(_t.SHOW);
                    if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                        var o = this._getDimension();
                        g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                    var e = g.Event(_t.HIDE);
                    if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o],
                                    s = _.getSelectorFromElement(r);
                                if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function(t) {
                this._isTransitioning = t
            }, t.dispose = function() {
                g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(t) {
                return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t
            }, t._getDimension = function() {
                return g(this._element).hasClass(Et) ? Et : Ct
            }, t._getParent = function() {
                var t, n = this;
                _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return g(i).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                var n = g(t).hasClass(mt);
                e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(t) {
                var e = _.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(ht),
                        n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return dt
                }
            }]), a
        }();
    g(document).on(_t.CLICK_DATA_API, St, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this),
                e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e)
        })
    }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function() {
        return g.fn[ct] = ft, bt._jQueryInterface
    };
    var It = "dropdown",
        Dt = "bs.dropdown",
        wt = "." + Dt,
        At = ".data-api",
        Nt = g.fn[It],
        Ot = new RegExp("38|40|27"),
        kt = {
            HIDE: "hide" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            CLICK: "click" + wt,
            CLICK_DATA_API: "click" + wt + At,
            KEYDOWN_DATA_API: "keydown" + wt + At,
            KEYUP_DATA_API: "keyup" + wt + At
        },
        Pt = "disabled",
        Lt = "show",
        jt = "dropup",
        Ht = "dropright",
        Rt = "dropleft",
        xt = "dropdown-menu-right",
        Ft = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Wt = ".dropdown form",
        qt = ".dropdown-menu",
        Mt = ".navbar-nav",
        Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Qt = "top-start",
        Bt = "top-end",
        Vt = "bottom-start",
        Yt = "bottom-end",
        zt = "right-start",
        Xt = "left-start",
        $t = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        Gt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Jt = function() {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                    var t = c._getParentFromElement(this._element),
                        e = g(this._menu).hasClass(Lt);
                    if (c._clearMenus(), !e) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = g.Event(kt.SHOW, n);
                        if (g(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                        }
                    }
                }
            }, t.show = function() {
                if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = g.Event(kt.SHOW, t),
                        n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
                }
            }, t.hide = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = g.Event(kt.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
                }
            }, t.dispose = function() {
                g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                g(this._element).on(kt.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(t) {
                return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(qt))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = g(this._element.parentNode),
                    e = Vt;
                return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e
            }, t._detectNavbar = function() {
                return 0 < g(this._element).closest(".navbar").length
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), t
            }, c._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(Dt);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                        var o = c._getParentFromElement(e[n]),
                            r = g(e[n]).data(Dt),
                            s = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (s.clickEvent = t), r) {
                            var a = r._menu;
                            if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                                var l = g.Event(kt.HIDE, s);
                                g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(t) {
                var e, n = _.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                    var e = c._getParentFromElement(this),
                        n = g(e).hasClass(Lt);
                    if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(Kt));
                        if (0 !== i.length) {
                            var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var r = e.querySelector(Ut);
                            g(r).trigger("focus")
                        }
                        g(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return $t
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Gt
                }
            }]), c
        }();
    g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function(t) {
        t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle")
    }).on(kt.CLICK_DATA_API, Wt, function(t) {
        t.stopPropagation()
    }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function() {
        return g.fn[It] = Nt, Jt._jQueryInterface
    };
    var Zt = "modal",
        te = "bs.modal",
        ee = "." + te,
        ne = g.fn[Zt],
        ie = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        oe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api"
        },
        se = "modal-dialog-scrollable",
        ae = "modal-scrollbar-measure",
        le = "modal-backdrop",
        ce = "modal-open",
        he = "fade",
        ue = "show",
        fe = ".modal-dialog",
        de = ".modal-body",
        ge = '[data-toggle="modal"]',
        _e = '[data-dismiss="modal"]',
        me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pe = ".sticky-top",
        ve = function() {
            function o(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    g(this._element).hasClass(he) && (this._isTransitioning = !0);
                    var n = g.Event(re.SHOW, {
                        relatedTarget: t
                    });
                    g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function(t) {
                        return e.hide(t)
                    }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                        g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = g.Event(re.HIDE);
                    if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = g(this._element).hasClass(he);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
                            var o = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return g(t).off(ee)
                }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(t) {
                return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t
            }, t._showElement = function(t) {
                var e = this,
                    n = g(this._element).hasClass(he);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();
                var i = g.Event(re.SHOWN, {
                        relatedTarget: t
                    }),
                    o = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i)
                    };
                if (n) {
                    var r = _.getTransitionDurationFromElement(this._dialog);
                    g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o()
            }, t._enforceFocus = function() {
                var e = this;
                g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? g(window).on(re.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : g(window).off(re.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(t) {
                var e = this,
                    n = g(this._element).hasClass(he) ? he : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
                    if (!n) return void t();
                    var i = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    g(this._backdrop).removeClass(ue);
                    var o = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (g(this._element).hasClass(he)) {
                        var r = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else t && t()
            }, t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(me)),
                        e = [].slice.call(document.querySelectorAll(pe));
                    g(t).each(function(t, e) {
                        var n = e.style.paddingRight,
                            i = g(e).css("padding-right");
                        g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }), g(e).each(function(t, e) {
                        var n = e.style.marginRight,
                            i = g(e).css("margin-right");
                        g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = g(document.body).css("padding-right");
                    g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                g(document.body).addClass(ce)
            }, t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(me));
                g(t).each(function(t, e) {
                    var n = g(e).data("padding-right");
                    g(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + pe));
                g(e).each(function(t, e) {
                    var n = g(e).data("margin-right");
                    "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                });
                var n = g(document.body).data("padding-right");
                g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = ae, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = g(this).data(te),
                        e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ie
                }
            }]), o
        }();
    g(document).on(re.CLICK_DATA_API, ge, function(t) {
        var e, n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        ve._jQueryInterface.call(g(e), o, this)
    }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function() {
        return g.fn[Zt] = ne, ve._jQueryInterface
    };
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ee = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Se(t, s, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
                var n = l[t],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var o = [].slice.call(n.attributes),
                    r = [].concat(s["*"] || [], s[i] || []);
                o.forEach(function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                        for (var i = e.filter(function(t) {
                                return t instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, r) || n.removeAttribute(t.nodeName)
                })
            }, o = 0, r = l.length; o < r; o++) i(o);
        return n.body.innerHTML
    }
    var be = "tooltip",
        Ie = "bs.tooltip",
        De = "." + Ie,
        we = g.fn[be],
        Ae = "bs-tooltip",
        Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
        Oe = ["sanitize", "whiteList", "sanitizeFn"],
        ke = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Pe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Ee
        },
        je = "show",
        He = "out",
        Re = {
            HIDE: "hide" + De,
            HIDDEN: "hidden" + De,
            SHOW: "show" + De,
            SHOWN: "shown" + De,
            INSERTED: "inserted" + De,
            CLICK: "click" + De,
            FOCUSIN: "focusin" + De,
            FOCUSOUT: "focusout" + De,
            MOUSEENTER: "mouseenter" + De,
            MOUSELEAVE: "mouseleave" + De
        },
        xe = "fade",
        Fe = "show",
        Ue = ".tooltip-inner",
        We = ".arrow",
        qe = "hover",
        Me = "focus",
        Ke = "click",
        Qe = "manual",
        Be = function() {
            function i(t, e) {
                if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = g(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = g.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    g(this.element).trigger(t);
                    var n = _.findShadowRoot(this.element),
                        i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        r = _.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
                        placement: a,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: We
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e)
                    };
                    if (g(this.tip).hasClass(xe)) {
                        var h = _.getTransitionDurationFromElement(this.tip);
                        g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else c()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = g.Event(this.constructor.Event.HIDE),
                    o = function() {
                        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
                        var r = _.getTransitionDurationFromElement(n);
                        g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(Ae + "-" + t)
            }, t.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe)
            }, t.setElementContent = function(t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
            }, t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
            }, t._getAttachment = function(t) {
                return Pe[t.toUpperCase()]
            }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                    else if (t !== Qe) {
                        var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        g(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                }), g(this.element).closest(".modal").on("hide.bs.modal", function() {
                    i.element && i.hide()
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === je && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === He && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) {
                var e = g(this.element).data();
                return Object.keys(e).forEach(function(t) {
                    -1 !== Oe.indexOf(t) && delete e[t]
                }), "number" == typeof(t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t
            }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(Ne);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ie),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Le
                }
            }, {
                key: "NAME",
                get: function() {
                    return be
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ie
                }
            }, {
                key: "Event",
                get: function() {
                    return Re
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return De
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ke
                }
            }]), i
        }();
    g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function() {
        return g.fn[be] = we, Be._jQueryInterface
    };
    var Ve = "popover",
        Ye = "bs.popover",
        ze = "." + Ye,
        Xe = g.fn[Ve],
        $e = "bs-popover",
        Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
        Je = l({}, Be.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Ze = l({}, Be.DefaultType, {
            content: "(string|element|function)"
        }),
        tn = "fade",
        en = "show",
        nn = ".popover-header",
        on = ".popover-body",
        rn = {
            HIDE: "hide" + ze,
            HIDDEN: "hidden" + ze,
            SHOW: "show" + ze,
            SHOWN: "shown" + ze,
            INSERTED: "inserted" + ze,
            CLICK: "click" + ze,
            FOCUSIN: "focusin" + ze,
            FOCUSOUT: "focusout" + ze,
            MOUSEENTER: "mouseenter" + ze,
            MOUSELEAVE: "mouseleave" + ze
        },
        sn = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass($e + "-" + t)
            }, o.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, o.setContent = function() {
                var t = g(this.getTipElement());
                this.setElementContent(t.find(nn), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en)
            }, o._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(Ge);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ye),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Je
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ve
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ye
                }
            }, {
                key: "Event",
                get: function() {
                    return rn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ze
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ze
                }
            }]), i
        }(Be);
    g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function() {
        return g.fn[Ve] = Xe, sn._jQueryInterface
    };
    var an = "scrollspy",
        ln = "bs.scrollspy",
        cn = "." + ln,
        hn = g.fn[an],
        un = {
            offset: 10,
            method: "auto",
            target: ""
        },
        fn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        dn = {
            ACTIVATE: "activate" + cn,
            SCROLL: "scroll" + cn,
            LOAD_DATA_API: "load" + cn + ".data-api"
        },
        gn = "dropdown-item",
        _n = "active",
        mn = '[data-spy="scroll"]',
        pn = ".nav, .list-group",
        vn = ".nav-link",
        yn = ".nav-item",
        En = ".list-group-item",
        Cn = ".dropdown",
        Tn = ".dropdown-item",
        Sn = ".dropdown-toggle",
        bn = "offset",
        In = "position",
        Dn = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? bn : In,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === In ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var e, n = _.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [g(e)[o]().top + r, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(t) {
                if ("string" != typeof(t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                    var e = g(t.target).attr("id");
                    e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e
                }
                return _.typeCheckConfig(an, t, fn), t
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    n = g([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                    return t.classList.contains(_n)
                }).forEach(function(t) {
                    return t.classList.remove(_n)
                })
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(ln);
                    if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return un
                }
            }]), n
        }();
    g(window).on(dn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data())
        }
    }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function() {
        return g.fn[an] = hn, Dn._jQueryInterface
    };
    var wn = "bs.tab",
        An = "." + wn,
        Nn = g.fn.tab,
        On = {
            HIDE: "hide" + An,
            HIDDEN: "hidden" + An,
            SHOW: "show" + An,
            SHOWN: "shown" + An,
            CLICK_DATA_API: "click" + An + ".data-api"
        },
        kn = "dropdown-menu",
        Pn = "active",
        Ln = "disabled",
        jn = "fade",
        Hn = "show",
        Rn = ".dropdown",
        xn = ".nav, .list-group",
        Fn = ".active",
        Un = "> li > .active",
        Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qn = ".dropdown-toggle",
        Mn = "> .dropdown-menu .active",
        Kn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                    var t, i, e = g(this._element).closest(xn)[0],
                        o = _.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                    }
                    var s = g.Event(On.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = g.Event(On.SHOW, {
                            relatedTarget: i
                        });
                    if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, e);
                        var l = function() {
                            var t = g.Event(On.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = g.Event(On.SHOWN, {
                                    relatedTarget: i
                                });
                            g(i).trigger(t), g(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                g.removeData(this._element, wn), this._element = null
            }, t._activate = function(t, e, n) {
                var i = this,
                    o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
                    r = n && o && g(o).hasClass(jn),
                    s = function() {
                        return i._transitionComplete(t, o, n)
                    };
                if (o && r) {
                    var a = _.getTransitionDurationFromElement(o);
                    g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    g(e).removeClass(Pn);
                    var i = g(e.parentNode).find(Mn)[0];
                    i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
                    var o = g(t).closest(Rn)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(qn));
                        g(r).addClass(Pn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(wn);
                    if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    g(document).on(On.CLICK_DATA_API, Wn, function(t) {
        t.preventDefault(), Kn._jQueryInterface.call(g(this), "show")
    }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function() {
        return g.fn.tab = Nn, Kn._jQueryInterface
    };
    var Qn = "toast",
        Bn = "bs.toast",
        Vn = "." + Bn,
        Yn = g.fn[Qn],
        zn = {
            CLICK_DISMISS: "click.dismiss" + Vn,
            HIDE: "hide" + Vn,
            HIDDEN: "hidden" + Vn,
            SHOW: "show" + Vn,
            SHOWN: "shown" + Vn
        },
        Xn = "fade",
        $n = "hide",
        Gn = "show",
        Jn = "showing",
        Zn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ti = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ei = '[data-dismiss="toast"]',
        ni = function() {
            function i(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                var t = this;
                g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
                var e = function() {
                    t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide()
                };
                if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, t.hide = function(t) {
                var e = this;
                this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                    e._close()
                }, this._config.delay))
            }, t.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null
            }, t._getConfig = function(t) {
                return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t
            }, t._setListeners = function() {
                var t = this;
                g(this._element).on(zn.CLICK_DISMISS, ei, function() {
                    return t.hide(!0)
                })
            }, t._close = function() {
                var t = this,
                    e = function() {
                        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN)
                    };
                if (this._element.classList.remove(Gn), this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(Bn);
                    if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zn
                }
            }, {
                key: "Default",
                get: function() {
                    return ti
                }
            }]), i
        }();
    g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function() {
            return g.fn[Qn] = Yn, ni._jQueryInterface
        },
        function() {
            if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Shuffle = e()
}(this, function() {
    "use strict";

    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }

    function n(t) {
        return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function o(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function r() {}
    r.prototype = {
        on: function(t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: i
            }), this
        },
        once: function(t, e, i) {
            var n = this;

            function s() {
                n.off(t, s), e.apply(i, arguments)
            }
            return s._ = e, this.on(t, s, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) i[n].fn.apply(i[n].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {}),
                n = i[t],
                s = [];
            if (n && e)
                for (var o = 0, r = n.length; o < r; o++) n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
            return s.length ? i[t] = s : delete i[t], this
        }
    };
    var l = r,
        a = r;
    l.TinyEmitter = a;
    var u = "undefined" != typeof Element ? Element.prototype : {},
        h = u.matches || u.matchesSelector || u.webkitMatchesSelector || u.mozMatchesSelector || u.msMatchesSelector || u.oMatchesSelector,
        f = function(t, e) {
            if (!t || 1 !== t.nodeType) return !1;
            if (h) return h.call(t, e);
            for (var i = t.parentNode.querySelectorAll(e), n = 0; n < i.length; n++)
                if (i[n] == t) return !0;
            return !1
        };
    var c = function(t, e) {
        var i, n, s, o, r = 0;
        return function() {
            i = this, n = arguments;
            var t = new Date - r;
            return o || (t >= e ? l() : o = setTimeout(l, e - t)), s
        };

        function l() {
            o = 0, r = +new Date, s = t.apply(i, n), i = null, n = null
        }
    };

    function d() {}

    function m(t) {
        return parseFloat(t) || 0
    }
    var p = function() {
            function e(i, n) {
                t(this, e), this.x = m(i), this.y = m(n)
            }
            return i(e, null, [{
                key: "equals",
                value: function(t, e) {
                    return t.x === e.x && t.y === e.y
                }
            }]), e
        }(),
        v = function() {
            function e(i, n, s, o, r) {
                t(this, e), this.id = r, this.left = i, this.top = n, this.width = s, this.height = o
            }
            return i(e, null, [{
                key: "intersects",
                value: function(t, e) {
                    return t.left < e.left + e.width && e.left < t.left + t.width && t.top < e.top + e.height && e.top < t.top + t.height
                }
            }]), e
        }(),
        y = {
            BASE: "shuffle",
            SHUFFLE_ITEM: "shuffle-item",
            VISIBLE: "shuffle-item--visible",
            HIDDEN: "shuffle-item--hidden"
        },
        g = 0,
        _ = function() {
            function e(i) {
                t(this, e), g += 1, this.id = g, this.element = i, this.isVisible = !0, this.isHidden = !1
            }
            return i(e, [{
                key: "show",
                value: function() {
                    this.isVisible = !0, this.element.classList.remove(y.HIDDEN), this.element.classList.add(y.VISIBLE), this.element.removeAttribute("aria-hidden")
                }
            }, {
                key: "hide",
                value: function() {
                    this.isVisible = !1, this.element.classList.remove(y.VISIBLE), this.element.classList.add(y.HIDDEN), this.element.setAttribute("aria-hidden", !0)
                }
            }, {
                key: "init",
                value: function() {
                    this.addClasses([y.SHUFFLE_ITEM, y.VISIBLE]), this.applyCss(e.Css.INITIAL), this.scale = e.Scale.VISIBLE, this.point = new p
                }
            }, {
                key: "addClasses",
                value: function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        e.element.classList.add(t)
                    })
                }
            }, {
                key: "removeClasses",
                value: function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        e.element.classList.remove(t)
                    })
                }
            }, {
                key: "applyCss",
                value: function(t) {
                    var e = this;
                    Object.keys(t).forEach(function(i) {
                        e.element.style[i] = t[i]
                    })
                }
            }, {
                key: "dispose",
                value: function() {
                    this.removeClasses([y.HIDDEN, y.VISIBLE, y.SHUFFLE_ITEM]), this.element.removeAttribute("style"), this.element = null
                }
            }]), e
        }();
    _.Css = {
        INITIAL: {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "visible",
            willChange: "transform"
        },
        VISIBLE: {
            before: {
                opacity: 1,
                visibility: "visible"
            },
            after: {
                transitionDelay: ""
            }
        },
        HIDDEN: {
            before: {
                opacity: 0
            },
            after: {
                visibility: "hidden",
                transitionDelay: ""
            }
        }
    }, _.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
    };
    var E = null,
        I = function() {
            if (null !== E) return E;
            var t = document.body || document.documentElement,
                e = document.createElement("div");
            return e.style.cssText = "width:10px;padding:2px;box-sizing:border-box;", t.appendChild(e), E = "10px" === window.getComputedStyle(e, null).width, t.removeChild(e), E
        };

    function b(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null),
            n = m(i[e]);
        return I() || "width" !== e ? I() || "height" !== e || (n += m(i.paddingTop) + m(i.paddingBottom) + m(i.borderTopWidth) + m(i.borderBottomWidth)) : n += m(i.paddingLeft) + m(i.paddingRight) + m(i.borderLeftWidth) + m(i.borderRightWidth), n
    }
    var S = {
        reverse: !1,
        by: null,
        compare: null,
        randomize: !1,
        key: "element"
    };

    function T(t, e) {
        var i = Object.assign({}, S, e),
            n = Array.from(t),
            s = !1;
        return t.length ? i.randomize ? function(t) {
            for (var e = t.length; e;) {
                e -= 1;
                var i = Math.floor(Math.random() * (e + 1)),
                    n = t[i];
                t[i] = t[e], t[e] = n
            }
            return t
        }(t) : ("function" == typeof i.by ? t.sort(function(t, e) {
            if (s) return 0;
            var n = i.by(t[i.key]),
                o = i.by(e[i.key]);
            return void 0 === n && void 0 === o ? (s = !0, 0) : n < o || "sortFirst" === n || "sortLast" === o ? -1 : n > o || "sortLast" === n || "sortFirst" === o ? 1 : 0
        }) : "function" == typeof i.compare && t.sort(i.compare), s ? n : (i.reverse && t.reverse(), t)) : []
    }
    var k = {},
        w = "transitionend",
        C = 0;

    function L(t) {
        return !!k[t] && (k[t].element.removeEventListener(w, k[t].listener), k[t] = null, !0)
    }

    function D(t, e) {
        var i = w + (C += 1),
            n = function(t) {
                t.currentTarget === t.target && (L(i), e(t))
            };
        return t.addEventListener(w, n), k[i] = {
            element: t,
            listener: n
        }, i
    }

    function z(t) {
        return Math.max.apply(Math, t)
    }

    function M(t, e, i, n) {
        var s = t / e;
        return Math.abs(Math.round(s) - s) < n && (s = Math.round(s)), Math.min(Math.ceil(s), i)
    }

    function A(t, e, i) {
        if (1 === e) return t;
        for (var n = [], s = 0; s <= i - e; s++) n.push(z(t.slice(s, s + e)));
        return n
    }

    function F(t, e) {
        for (var i, n = (i = t, Math.min.apply(Math, i)), s = 0, o = t.length; s < o; s++)
            if (t[s] >= n - e && t[s] <= n + e) return s;
        return 0
    }

    function x(t, e) {
        var i = {};
        t.forEach(function(t) {
            i[t.top] ? i[t.top].push(t) : i[t.top] = [t]
        });
        var n = [],
            s = [],
            o = [];
        return Object.keys(i).forEach(function(t) {
            var r = i[t];
            s.push(r);
            var l, a = r[r.length - 1],
                u = a.left + a.width,
                h = Math.round((e - u) / 2),
                f = r,
                c = !1;
            if (h > 0) {
                var d = [];
                (c = r.every(function(t) {
                    var e = new v(t.left + h, t.top, t.width, t.height, t.id),
                        i = !n.some(function(t) {
                            return v.intersects(e, t)
                        });
                    return d.push(e), i
                })) && (f = d)
            }
            if (!c && r.some(function(t) {
                    return n.some(function(e) {
                        var i = v.intersects(t, e);
                        return i && (l = e), i
                    })
                })) {
                var m = o.findIndex(function(t) {
                    return t.includes(l)
                });
                o.splice(m, 1, s[m])
            }
            n = n.concat(f), o.push(f)
        }), [].concat.apply([], o).sort(function(t, e) {
            return t.id - e.id
        }).map(function(t) {
            return new p(t.left, t.top)
        })
    }

    function O(t) {
        return Array.from(new Set(t))
    }
    var N = 0,
        H = function(e) {
            function r(e) {
                var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t(this, r), (i = o(this, n(r).call(this))).options = Object.assign({}, r.options, s), i.options.delimeter && (i.options.delimiter = i.options.delimeter), i.lastSort = {}, i.group = r.ALL_ITEMS, i.lastFilter = r.ALL_ITEMS, i.isEnabled = !0, i.isDestroyed = !1, i.isInitialized = !1, i._transitions = [], i.isTransitioning = !1, i._queue = [];
                var l = i._getElementOption(e);
                if (!l) throw new TypeError("Shuffle needs to be initialized with an element.");
                return i.element = l, i.id = "shuffle_" + N, N += 1, i._init(), i.isInitialized = !0, i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && s(t, e)
            }(r, l), i(r, [{
                key: "_init",
                value: function() {
                    if (this.items = this._getItems(), this.options.sizer = this._getElementOption(this.options.sizer), this.element.classList.add(r.Classes.BASE), this._initItems(this.items), this._onResize = this._getResizeFunction(), window.addEventListener("resize", this._onResize), "complete" !== document.readyState) {
                        var t = this.layout.bind(this);
                        window.addEventListener("load", function e() {
                            window.removeEventListener("load", e), t()
                        })
                    }
                    var e = window.getComputedStyle(this.element, null),
                        i = r.getSize(this.element).width;
                    this._validateStyles(e), this._setColumns(i), this.filter(this.options.group, this.options.initialSort), this.element.offsetWidth, this.setItemTransitions(this.items), this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing)
                }
            }, {
                key: "_getResizeFunction",
                value: function() {
                    var t = this._handleResize.bind(this);
                    return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t
                }
            }, {
                key: "_getElementOption",
                value: function(t) {
                    return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
                }
            }, {
                key: "_validateStyles",
                value: function(t) {
                    "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
                }
            }, {
                key: "_filter",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items,
                        i = this._getFilteredSets(t, e);
                    return this._toggleFilterClasses(i), this.lastFilter = t, "string" == typeof t && (this.group = t), i
                }
            }, {
                key: "_getFilteredSets",
                value: function(t, e) {
                    var i = this,
                        n = [],
                        s = [];
                    return t === r.ALL_ITEMS ? n = e : e.forEach(function(e) {
                        i._doesPassFilter(t, e.element) ? n.push(e) : s.push(e)
                    }), {
                        visible: n,
                        hidden: s
                    }
                }
            }, {
                key: "_doesPassFilter",
                value: function(t, e) {
                    if ("function" == typeof t) return t.call(e, e, this);
                    var i = e.getAttribute("data-" + r.FILTER_ATTRIBUTE_KEY),
                        n = this.options.delimiter ? i.split(this.options.delimiter) : JSON.parse(i);

                    function s(t) {
                        return n.includes(t)
                    }
                    return Array.isArray(t) ? this.options.filterMode === r.FilterMode.ANY ? t.some(s) : t.every(s) : n.includes(t)
                }
            }, {
                key: "_toggleFilterClasses",
                value: function(t) {
                    var e = t.visible,
                        i = t.hidden;
                    e.forEach(function(t) {
                        t.show()
                    }), i.forEach(function(t) {
                        t.hide()
                    })
                }
            }, {
                key: "_initItems",
                value: function(t) {
                    t.forEach(function(t) {
                        t.init()
                    })
                }
            }, {
                key: "_disposeItems",
                value: function(t) {
                    t.forEach(function(t) {
                        t.dispose()
                    })
                }
            }, {
                key: "_updateItemCount",
                value: function() {
                    this.visibleItems = this._getFilteredItems().length
                }
            }, {
                key: "setItemTransitions",
                value: function(t) {
                    var e = this.options,
                        i = e.speed,
                        n = e.easing,
                        s = this.options.useTransforms ? ["transform"] : ["top", "left"],
                        o = Object.keys(_.Css.HIDDEN.before).map(function(t) {
                            return t.replace(/([A-Z])/g, function(t, e) {
                                return "-".concat(e.toLowerCase())
                            })
                        }),
                        r = s.concat(o).join();
                    t.forEach(function(t) {
                        t.element.style.transitionDuration = i + "ms", t.element.style.transitionTimingFunction = n, t.element.style.transitionProperty = r
                    })
                }
            }, {
                key: "_getItems",
                value: function() {
                    var t = this;
                    return Array.from(this.element.children).filter(function(e) {
                        return f(e, t.options.itemSelector)
                    }).map(function(t) {
                        return new _(t)
                    })
                }
            }, {
                key: "_mergeNewItems",
                value: function(t) {
                    var e = Array.from(this.element.children);
                    return T(this.items.concat(t), {
                        by: function(t) {
                            return e.indexOf(t)
                        }
                    })
                }
            }, {
                key: "_getFilteredItems",
                value: function() {
                    return this.items.filter(function(t) {
                        return t.isVisible
                    })
                }
            }, {
                key: "_getConcealedItems",
                value: function() {
                    return this.items.filter(function(t) {
                        return !t.isVisible
                    })
                }
            }, {
                key: "_getColumnSize",
                value: function(t, e) {
                    var i;
                    return 0 === (i = "function" == typeof this.options.columnWidth ? this.options.columnWidth(t) : this.options.sizer ? r.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? r.getSize(this.items[0].element, !0).width : t) && (i = t), i + e
                }
            }, {
                key: "_getGutterSize",
                value: function(t) {
                    return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.options.sizer ? b(this.options.sizer, "marginLeft") : this.options.gutterWidth
                }
            }, {
                key: "_setColumns",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.getSize(this.element).width,
                        e = this._getGutterSize(t),
                        i = this._getColumnSize(t, e),
                        n = (t + e) / i;
                    Math.abs(Math.round(n) - n) < this.options.columnThreshold && (n = Math.round(n)), this.cols = Math.max(Math.floor(n || 0), 1), this.containerWidth = t, this.colWidth = i
                }
            }, {
                key: "_setContainerSize",
                value: function() {
                    this.element.style.height = this._getContainerSize() + "px"
                }
            }, {
                key: "_getContainerSize",
                value: function() {
                    return z(this.positions)
                }
            }, {
                key: "_getStaggerAmount",
                value: function(t) {
                    return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax)
                }
            }, {
                key: "_dispatch",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.isDestroyed || (e.shuffle = this, this.emit(t, e))
                }
            }, {
                key: "_resetCols",
                value: function() {
                    var t = this.cols;
                    for (this.positions = []; t;) t -= 1, this.positions.push(0)
                }
            }, {
                key: "_layout",
                value: function(t) {
                    var e = this,
                        i = this._getNextPositions(t),
                        n = 0;
                    t.forEach(function(t, s) {
                        function o() {
                            t.applyCss(_.Css.VISIBLE.after)
                        }
                        if (p.equals(t.point, i[s]) && !t.isHidden) return t.applyCss(_.Css.VISIBLE.before), void o();
                        t.point = i[s], t.scale = _.Scale.VISIBLE, t.isHidden = !1;
                        var r = e.getStylesForTransition(t, _.Css.VISIBLE.before);
                        r.transitionDelay = e._getStaggerAmount(n) + "ms", e._queue.push({
                            item: t,
                            styles: r,
                            callback: o
                        }), n += 1
                    })
                }
            }, {
                key: "_getNextPositions",
                value: function(t) {
                    var e = this;
                    if (this.options.isCentered) {
                        var i = t.map(function(t, i) {
                            var n = r.getSize(t.element, !0),
                                s = e._getItemPosition(n);
                            return new v(s.x, s.y, n.width, n.height, i)
                        });
                        return this.getTransformedPositions(i, this.containerWidth)
                    }
                    return t.map(function(t) {
                        return e._getItemPosition(r.getSize(t.element, !0))
                    })
                }
            }, {
                key: "_getItemPosition",
                value: function(t) {
                    return function(t) {
                        for (var e = t.itemSize, i = t.positions, n = t.gridSize, s = t.total, o = t.threshold, r = t.buffer, l = M(e.width, n, s, o), a = A(i, l, s), u = F(a, r), h = new p(n * u, a[u]), f = a[u] + e.height, c = 0; c < l; c++) i[u + c] = f;
                        return h
                    }({
                        itemSize: t,
                        positions: this.positions,
                        gridSize: this.colWidth,
                        total: this.cols,
                        threshold: this.options.columnThreshold,
                        buffer: this.options.buffer
                    })
                }
            }, {
                key: "getTransformedPositions",
                value: function(t, e) {
                    return x(t, e)
                }
            }, {
                key: "_shrink",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems(),
                        i = 0;
                    e.forEach(function(e) {
                        function n() {
                            e.applyCss(_.Css.HIDDEN.after)
                        }
                        if (e.isHidden) return e.applyCss(_.Css.HIDDEN.before), void n();
                        e.scale = _.Scale.HIDDEN, e.isHidden = !0;
                        var s = t.getStylesForTransition(e, _.Css.HIDDEN.before);
                        s.transitionDelay = t._getStaggerAmount(i) + "ms", t._queue.push({
                            item: e,
                            styles: s,
                            callback: n
                        }), i += 1
                    })
                }
            }, {
                key: "_handleResize",
                value: function() {
                    this.isEnabled && !this.isDestroyed && this.update()
                }
            }, {
                key: "getStylesForTransition",
                value: function(t, e) {
                    var i = Object.assign({}, e);
                    if (this.options.useTransforms) {
                        var n = this.options.roundTransforms ? Math.round(t.point.x) : t.point.x,
                            s = this.options.roundTransforms ? Math.round(t.point.y) : t.point.y;
                        i.transform = "translate(".concat(n, "px, ").concat(s, "px) scale(").concat(t.scale, ")")
                    } else i.left = t.point.x + "px", i.top = t.point.y + "px";
                    return i
                }
            }, {
                key: "_whenTransitionDone",
                value: function(t, e, i) {
                    var n = D(t, function(t) {
                        e(), i(null, t)
                    });
                    this._transitions.push(n)
                }
            }, {
                key: "_getTransitionFunction",
                value: function(t) {
                    var e = this;
                    return function(i) {
                        t.item.applyCss(t.styles), e._whenTransitionDone(t.item.element, t.callback, i)
                    }
                }
            }, {
                key: "_processQueue",
                value: function() {
                    this.isTransitioning && this._cancelMovement();
                    var t = this.options.speed > 0,
                        e = this._queue.length > 0;
                    e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue), this._dispatch(r.EventType.LAYOUT)) : this._dispatch(r.EventType.LAYOUT), this._queue.length = 0
                }
            }, {
                key: "_startTransitions",
                value: function(t) {
                    var e = this;
                    this.isTransitioning = !0,
                        function(t, e, i) {
                            i || ("function" == typeof e ? (i = e, e = null) : i = d);
                            var n = t && t.length;
                            if (!n) return i(null, []);
                            var s = !1,
                                o = new Array(n);

                            function r(t) {
                                return function(e, r) {
                                    if (!s) {
                                        if (e) return i(e, o), void(s = !0);
                                        o[t] = r, --n || i(null, o)
                                    }
                                }
                            }
                            t.forEach(e ? function(t, i) {
                                t.call(e, r(i))
                            } : function(t, e) {
                                t(r(e))
                            })
                        }(t.map(function(t) {
                            return e._getTransitionFunction(t)
                        }), this._movementFinished.bind(this))
                }
            }, {
                key: "_cancelMovement",
                value: function() {
                    this._transitions.forEach(L), this._transitions.length = 0, this.isTransitioning = !1
                }
            }, {
                key: "_styleImmediately",
                value: function(t) {
                    if (t.length) {
                        var e = t.map(function(t) {
                            return t.item.element
                        });
                        r._skipTransitions(e, function() {
                            t.forEach(function(t) {
                                t.item.applyCss(t.styles), t.callback()
                            })
                        })
                    }
                }
            }, {
                key: "_movementFinished",
                value: function() {
                    this._transitions.length = 0, this.isTransitioning = !1, this._dispatch(r.EventType.LAYOUT)
                }
            }, {
                key: "filter",
                value: function(t, e) {
                    this.isEnabled && ((!t || t && 0 === t.length) && (t = r.ALL_ITEMS), this._filter(t), this._shrink(), this._updateItemCount(), this.sort(e))
                }
            }, {
                key: "sort",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                    if (this.isEnabled) {
                        this._resetCols();
                        var e = T(this._getFilteredItems(), t);
                        this._layout(e), this._processQueue(), this._setContainerSize(), this.lastSort = t
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.isEnabled && (t || this._setColumns(), this.sort())
                }
            }, {
                key: "layout",
                value: function() {
                    this.update(!0)
                }
            }, {
                key: "add",
                value: function(t) {
                    var e = this,
                        i = O(t).map(function(t) {
                            return new _(t)
                        });
                    this._initItems(i), this._resetCols();
                    var n = T(this._mergeNewItems(i), this.lastSort),
                        s = this._filter(this.lastFilter, n),
                        o = function(t) {
                            return i.includes(t)
                        },
                        r = function(t) {
                            t.scale = _.Scale.HIDDEN, t.isHidden = !0, t.applyCss(_.Css.HIDDEN.before), t.applyCss(_.Css.HIDDEN.after)
                        },
                        l = this._getNextPositions(s.visible);
                    s.visible.forEach(function(t, i) {
                        o(t) && (t.point = l[i], r(t), t.applyCss(e.getStylesForTransition(t, {})))
                    }), s.hidden.forEach(function(t) {
                        o(t) && r(t)
                    }), this.element.offsetWidth, this.setItemTransitions(i), this.items = this._mergeNewItems(i), this.filter(this.lastFilter)
                }
            }, {
                key: "disable",
                value: function() {
                    this.isEnabled = !1
                }
            }, {
                key: "enable",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.isEnabled = !0, t && this.update()
                }
            }, {
                key: "remove",
                value: function(t) {
                    var e = this;
                    if (t.length) {
                        var i = O(t),
                            n = i.map(function(t) {
                                return e.getItemByElement(t)
                            }).filter(function(t) {
                                return !!t
                            });
                        this._toggleFilterClasses({
                            visible: [],
                            hidden: n
                        }), this._shrink(n), this.sort(), this.items = this.items.filter(function(t) {
                            return !n.includes(t)
                        }), this._updateItemCount(), this.once(r.EventType.LAYOUT, function() {
                            e._disposeItems(n), i.forEach(function(t) {
                                t.parentNode.removeChild(t)
                            }), e._dispatch(r.EventType.REMOVED, {
                                collection: i
                            })
                        })
                    }
                }
            }, {
                key: "getItemByElement",
                value: function(t) {
                    return this.items.find(function(e) {
                        return e.element === t
                    })
                }
            }, {
                key: "resetItems",
                value: function() {
                    var t = this;
                    this._disposeItems(this.items), this.isInitialized = !1, this.items = this._getItems(), this._initItems(this.items), this.once(r.EventType.LAYOUT, function() {
                        t.setItemTransitions(t.items), t.isInitialized = !0
                    }), this.filter(this.lastFilter)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._cancelMovement(), window.removeEventListener("resize", this._onResize), this.element.classList.remove("shuffle"), this.element.removeAttribute("style"), this._disposeItems(this.items), this.items.length = 0, this._transitions.length = 0, this.options.sizer = null, this.element = null, this.isDestroyed = !0, this.isEnabled = !1
                }
            }], [{
                key: "getSize",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = window.getComputedStyle(t, null),
                        n = b(t, "width", i),
                        s = b(t, "height", i);
                    if (e) {
                        var o = b(t, "marginLeft", i),
                            r = b(t, "marginRight", i),
                            l = b(t, "marginTop", i),
                            a = b(t, "marginBottom", i);
                        n += o + r, s += l + a
                    }
                    return {
                        width: n,
                        height: s
                    }
                }
            }, {
                key: "_skipTransitions",
                value: function(t, e) {
                    var i = t.map(function(t) {
                        var e = t.style,
                            i = e.transitionDuration,
                            n = e.transitionDelay;
                        return e.transitionDuration = "0ms", e.transitionDelay = "0ms", {
                            duration: i,
                            delay: n
                        }
                    });
                    e(), t[0].offsetWidth, t.forEach(function(t, e) {
                        t.style.transitionDuration = i[e].duration, t.style.transitionDelay = i[e].delay
                    })
                }
            }]), r
        }();
    return H.ShuffleItem = _, H.ALL_ITEMS = "all", H.FILTER_ATTRIBUTE_KEY = "groups", H.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
    }, H.Classes = y, H.FilterMode = {
        ANY: "any",
        ALL: "all"
    }, H.options = {
        group: H.ALL_ITEMS,
        speed: 250,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimiter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: c,
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 150,
        useTransforms: !0,
        filterMode: H.FilterMode.ANY,
        isCentered: !1,
        roundTransforms: !0
    }, H.Point = p, H.Rect = v, H.__sorter = T, H.__getColumnSpan = M, H.__getAvailablePositions = A, H.__getShortColumn = F, H.__getCenteredPositions = x, H
});
/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
! function(e, t, n) {
    function a(t, n) {
        this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init()
    }
    var i = {
            label: "MENU",
            duplicate: !0,
            duration: 200,
            easingOpen: "swing",
            easingClose: "swing",
            closedSymbol: "&#9658;",
            openedSymbol: "&#9660;",
            prependTo: "body",
            appendTo: "",
            parentTag: "a",
            closeOnClick: !1,
            allowParentLinks: !1,
            nestedParentLinks: !0,
            showChildren: !1,
            removeIds: !0,
            removeClasses: !1,
            removeStyles: !1,
            brand: "",
            animations: "jquery",
            init: function() {},
            beforeOpen: function() {},
            beforeClose: function() {},
            afterOpen: function() {},
            afterClose: function() {}
        },
        s = "slicknav",
        o = "slicknav",
        l = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
    a.prototype.init = function() {
        var n, a, i = this,
            s = e(this.element),
            r = this.settings;
        if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("id")
            })), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("class")
            })), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("style")
            })), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
            var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
            e(a).append(c)
        }
        i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
        var p = i.mobileNav.find("li");
        e(p).each(function() {
            var t = e(this),
                n = {};
            if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
                var a = t.contents(),
                    s = !1,
                    l = [];
                e(a).each(function() {
                    return e(this).is("ul") ? !1 : (l.push(this), void(e(this).is("a") && (s = !0)))
                });
                var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
                if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();
                else {
                    var p = e(l).wrapAll(c).parent();
                    p.addClass(o + "_row")
                }
                r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
                var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
                r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d)
            } else 0 === t.children().length && t.addClass(o + "_txtnode");
            t.children("a").attr("role", "menuitem").click(function(t) {
                r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click()
            }), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function(t) {
                e(i.btn).click()
            }), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function(t) {
                e(i.btn).click()
            }))
        }), e(p).each(function() {
            var t = e(this).data("menu");
            r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0)
        }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function() {
            i._outlines(!1)
        }), e(t).keyup(function() {
            i._outlines(!0)
        }), e(i.btn).click(function(e) {
            e.preventDefault(), i._menuToggle()
        }), i.mobileNav.on("click", "." + o + "_item", function(t) {
            t.preventDefault(), i._itemClick(e(this))
        }), e(i.btn).keydown(function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.ENTER:
                case l.SPACE:
                case l.DOWN:
                    t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus()
            }
        }), i.mobileNav.on("keydown", "." + o + "_item", function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.ENTER:
                    t.preventDefault(), i._itemClick(e(t.target));
                    break;
                case l.RIGHT:
                    t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus()
            }
        }), i.mobileNav.on("keydown", '[role="menuitem"]', function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.DOWN:
                    t.preventDefault();
                    var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
                        s = a.index(t.target),
                        r = s + 1;
                    a.length <= r && (r = 0);
                    var c = a.eq(r);
                    c.focus();
                    break;
                case l.UP:
                    t.preventDefault();
                    var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
                        s = a.index(t.target),
                        c = a.eq(s - 1);
                    c.focus();
                    break;
                case l.LEFT:
                    if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
                        var p = e(t.target).parent().parent().prev();
                        p.focus(), i._itemClick(p)
                    } else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
                    break;
                case l.ESCAPE:
                    t.preventDefault(), i._menuToggle(), e(i.btn).focus()
            }
        }), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function(e) {
            e.stopImmediatePropagation()
        })
    }, a.prototype._menuToggle = function(e) {
        var t = this,
            n = t.btn,
            a = t.mobileNav;
        n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n)
    }, a.prototype._itemClick = function(e) {
        var t = this,
            n = t.settings,
            a = e.data("menu");
        a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e))
    }, a.prototype._visibilityToggle = function(t, n, a, i, s) {
        function l(t, n) {
            e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t)
        }

        function r(n, a) {
            t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n)
        }
        var c = this,
            p = c.settings,
            d = c._getActionItems(t),
            u = 0;
        a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function() {
            l(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
            duration: u,
            easing: p.easingOpen,
            complete: function() {
                l(i, n)
            }
        }), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function() {
            r(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
            duration: u,
            easing: p.easingClose,
            complete: function() {
                r(i, n)
            }
        }))
    }, a.prototype._setVisAttr = function(t, n) {
        var a = this,
            i = t.children("li").children("ul").not("." + o + "_hidden");
        n ? i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "true");
            var i = a._getActionItems(t);
            i.attr("tabindex", "-1"), a._setVisAttr(t, n)
        }) : i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "false");
            var i = a._getActionItems(t);
            i.attr("tabindex", "0"), a._setVisAttr(t, n)
        })
    }, a.prototype._getActionItems = function(e) {
        var t = e.data("menu");
        if (!t) {
            t = {};
            var n = e.children("li"),
                a = n.find("a");
            t.links = a.add(n.find("." + o + "_item")), e.data("menu", t)
        }
        return t.links
    }, a.prototype._outlines = function(t) {
        t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none")
    }, a.prototype.toggle = function() {
        var e = this;
        e._menuToggle()
    }, a.prototype.open = function() {
        var e = this;
        e.btn.hasClass(o + "_collapsed") && e._menuToggle()
    }, a.prototype.close = function() {
        var e = this;
        e.btn.hasClass(o + "_open") && e._menuToggle()
    }, e.fn[s] = function(t) {
        var n = arguments;
        if (void 0 === t || "object" == typeof t) return this.each(function() {
            e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t))
        });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
            var i;
            return this.each(function() {
                var o = e.data(this, "plugin_" + s);
                o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)))
            }), void 0 !== i ? i : this
        }
    }
}(jQuery, document, window);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";
    var f = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        J = "undefined" == typeof window ? {
            document: f,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function L(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
            } else if (e.nodeType || e === J || e === f) a.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a)
    }

    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length) this[i].setAttribute(e, t);
                else
                    for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
                    else
                        for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: o
                        }), u.addEventListener(h, o, s)
                    } else
                        for (d = 0; d < p.length; d += 1) {
                            var v = p[d];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                                listener: n,
                                proxyListener: l
                            }), u.addEventListener(v, l, s)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p],
                        u = void 0;
                    if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n],
                        l = void 0;
                    try {
                        l = new J.CustomEvent(r, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var a, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function r(e) {
                if (e.target === this)
                    for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
            }
            if (t)
                for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = f.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === J ? J.scrollY : e.scrollTop,
                    n = e === J ? J.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            if (e === f) return i === f;
            if (e === J) return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                    } else if (e instanceof l)
                    for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof l)
                for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return L(r(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        L.fn[e] = t[e]
    });
    var e, a, i, s, ee = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var a, i, s;
                void 0 === t && (t = "x");
                var r = J.getComputedStyle(e, null);
                return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
            },
            parseUrlQuery: function(e) {
                var t, a, i, s, r = {},
                    n = e || J.location.href;
                if ("string" == typeof n && n.length)
                    for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return r
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
                        }
                }
                return a
            }
        },
        te = (i = f.createElement("div"), {
            touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
            pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints),
            prefixedPointerEvents: !!J.navigator.msPointerEnabled,
            transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
            transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
            flexbox: function() {
                for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    J.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in J
        }),
        I = {
            isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
            isEdge: !!J.navigator.userAgent.match(/Edge/g),
            isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
        },
        n = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        o = {
            components: {
                configurable: !0
            }
        };
    n.prototype.on = function(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, n.prototype.once = function(a, i, e) {
        var s = this;
        if ("function" != typeof i) return s;

        function r() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy
        }
        return r.f7proxy = i, s.on(a, r, e)
    }, n.prototype.off = function(e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function(a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
                (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1)
            })
        }), s
    }, n.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(s, i)
                })
            }
        })), r
    }, n.prototype.useModulesParams = function(a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var t = i.modules[e];
            t.params && ee.extend(a, t.params)
        })
    }, n.prototype.useModules = function(i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function(e) {
            var a = s.modules[e],
                t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function(e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), a.on && s.on && Object.keys(a.on).forEach(function(e) {
                s.on(e, a.on[e])
            }), a.create && a.create.bind(s)(t)
        })
    }, o.components.set = function(e) {
        this.use && this.use(e)
    }, n.installModule = function(t) {
        for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, n.use = function(e) {
        for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(n, o);
    var d = {
        updateSize: function() {
            var e, t, a = this,
                i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                s = e.rtlTranslate,
                r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled,
                o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass),
                d = n ? e.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [],
                h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                b = -h,
                w = 0,
                y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
                    T = 0;
                    var P = l.eq(z);
                    if (1 < t.slidesPerColumn) {
                        var k = void 0,
                            $ = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({
                            "-webkit-box-ordinal-group": k,
                            "-moz-box-ordinal-group": k,
                            "-ms-flex-order": k,
                            "-webkit-order": k,
                            order: k
                        })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null),
                                D = P[0].style.transform,
                                O = P[0].style.webkitTransform;
                            if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width")),
                                    H = parseFloat(I.getPropertyValue("padding-left")),
                                    N = parseFloat(I.getPropertyValue("padding-right")),
                                    G = parseFloat(I.getPropertyValue("margin-left")),
                                    B = parseFloat(I.getPropertyValue("margin-right")),
                                    X = I.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? A + G + B : A + H + N + G + B
                            } else {
                                var Y = parseFloat(I.getPropertyValue("height")),
                                    V = parseFloat(I.getPropertyValue("padding-top")),
                                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                                    R = parseFloat(I.getPropertyValue("margin-top")),
                                    q = parseFloat(I.getPropertyValue("margin-bottom")),
                                    W = I.getPropertyValue("box-sizing");
                                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
                            }
                            D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");
                        l[z] && (l[z].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }), t.centeredSlides)) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
                    }
                    p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                        marginLeft: g + "px"
                    }) : l.css({
                        marginRight: g + "px"
                    }) : l.css({
                        marginBottom: g + "px"
                    })), t.centerInsufficientSlides) {
                    var Z = 0;
                    if (u.forEach(function(e) {
                            Z += e + (t.spaceBetween ? t.spaceBetween : 0)
                        }), (Z -= t.spaceBetween) < i) {
                        var Q = (i - Z) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - Q
                        }), c.forEach(function(e, t) {
                            c[t] = e + Q
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, a = this,
                i = [],
                s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length) break;
                    i.push(a.slides.eq(r)[0])
                } else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s
                } s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                s = t.progress,
                r = t.isBeginning,
                n = t.isEnd,
                o = r,
                l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this,
                a = t.params,
                i = L(e.target).closest("." + a.slideClass)[0],
                s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                a = this.rtlTranslate,
                i = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.progress,
                o = 0,
                l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex;
            a.animating = !1, a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var u = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this,
                r = e;
            r < 0 && (r = 0);
            var n = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                d = s.previousIndex,
                p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v), n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
        },
        slideToLoop: function(e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating;
            return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var p, c = d(l ? i.translate : -i.translate),
                u = n.map(function(e) {
                    return d(e)
                }),
                h = (o.map(function(e) {
                    return d(e)
                }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
        },
        slideReset: function(e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
        },
        slideToClosest: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.activeIndex,
                r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var h = {
        loopCreate: function() {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [],
                l = [];
            s.each(function(e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this,
                a = t.params,
                i = t.activeIndex,
                s = t.slides,
                r = t.loopedSlides,
                n = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n, t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
        }
    };
    var v = {
        setGrabCursor: function(e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var m = {
            appendSlide: function(e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), i.observer && te.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length
                } else i.prepend(e);
                a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
            },
            addSlide: function(e, t) {
                var a = this,
                    i = a.$wrapperEl,
                    s = a.params,
                    r = a.activeIndex;
                s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
                var n = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (n <= e) a.appendSlide(t);
                else {
                    for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                        var p = a.slides.eq(d);
                        p.remove(), l.unshift(p)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                        o = e < r ? r + t.length : r
                    } else i.append(t);
                    for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                    s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0)
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        g = function() {
            var e = J.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: J.cordova || J.phonegap,
                    phonegap: J.cordova || J.phonegap
                },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var o = t.osVersion.split("."),
                    l = f.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
            }
            return t.pixelRatio = J.devicePixelRatio || 1, t
        }();

    function b() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var w = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        y = {
            update: d,
            translate: p,
            transition: c,
            slide: u,
            loop: h,
            grabCursor: v,
            manipulation: m,
            events: {
                attachEvents: function() {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl;
                    e.onTouchStart = function(e) {
                        var t = this,
                            a = t.touchEventsData,
                            i = t.params,
                            s = t.touches;
                        if (!t.animating || !i.preventInteractionOnTransition) {
                            var r = e;
                            if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
                                if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                                else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                                var n = s.currentX,
                                    o = s.currentY,
                                    l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                                    d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                                if (!l || !(n <= d || n >= J.screen.width - d)) {
                                    if (ee.extend(a, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                                        var p = !0;
                                        L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                        var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                        (i.touchStartForcePreventDefault || c) && r.preventDefault()
                                    }
                                    t.emit("touchStart", r)
                                }
                            }
                        }
                    }.bind(e), e.onTouchMove = function(e) {
                        var t = this,
                            a = t.touchEventsData,
                            i = t.params,
                            s = t.touches,
                            r = t.rtlTranslate,
                            n = e;
                        if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
                            if (!a.isTouchEvent || "mousemove" !== n.type) {
                                var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                                    l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                                if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
                                if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (ee.extend(s, {
                                    startX: o,
                                    startY: l,
                                    currentX: o,
                                    currentY: l
                                }), a.touchStartTime = ee.now()));
                                if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                    if (t.isVertical()) {
                                        if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
                                    } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                                if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
                                if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                                    s.currentX = o, s.currentY = l;
                                    var d, p = s.currentX - s.startX,
                                        c = s.currentY - s.startY;
                                    if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                        if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
                                        else if (a.startMoving) {
                                        t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                                        var u = t.isHorizontal() ? p : c;
                                        s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                                        var h = !0,
                                            v = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                                            if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
                                            if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                        }
                                        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                            position: s[t.isHorizontal() ? "startX" : "startY"],
                                            time: a.touchStartTime
                                        }), a.velocities.push({
                                            position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                            time: ee.now()
                                        })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                                    }
                                }
                            }
                        } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
                    }.bind(e), e.onTouchEnd = function(e) {
                        var t = this,
                            a = t.touchEventsData,
                            i = t.params,
                            s = t.touches,
                            r = t.rtlTranslate,
                            n = t.$wrapperEl,
                            o = t.slidesGrid,
                            l = t.snapGrid,
                            d = e;
                        if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
                        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var p, c = ee.now(),
                            u = c - a.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function() {
                                t && !t.destroyed && t.emit("click", d)
                            }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function() {
                                t.destroyed || (t.allowClick = !0)
                            }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
                        if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (i.freeModeMomentum) {
                                if (1 < a.velocities.length) {
                                    var h = a.velocities.pop(),
                                        v = a.velocities.pop(),
                                        f = h.position - v.position,
                                        m = h.time - v.time;
                                    t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                                var g = 1e3 * i.freeModeMomentumRatio,
                                    b = t.velocity * g,
                                    w = t.translate + b;
                                r && (w = -w);
                                var y, x, T = !1,
                                    E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                                else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                                else if (i.freeModeSticky) {
                                    for (var S, C = 0; C < l.length; C += 1)
                                        if (l[C] > -w) {
                                            S = C;
                                            break
                                        } w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                                }
                                if (x && t.once("transitionEnd", function() {
                                        t.loopFix()
                                    }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                                else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                                    t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (i.freeModeSticky) return void t.slideToClosest();
                            (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
                            var k = (p - o[M]) / z;
                            if (u > i.longSwipesMs) {
                                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                            } else {
                                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                            }
                        }
                    }.bind(e), e.onClick = function(e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(e);
                    var r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                        if (te.touch) {
                            var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                                passive: !1,
                                capture: n
                            } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                        }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
                    } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0)
                },
                detachEvents: function() {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl,
                        r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                        if (te.touch) {
                            var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                        }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        a = e.initialized,
                        i = e.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = e.params,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var n = e.getBreakpoint(r);
                        if (n && e.currentBreakpoint !== n) {
                            var o = n in r ? r[n] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var l = o || e.originalParams,
                                d = l.direction && l.direction !== s.direction,
                                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
                            d && a && e.changeDirection(), ee.extend(e.params, l), ee.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = n, p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            a = [];
                        Object.keys(e).forEach(function(e) {
                            a.push(e)
                        }), a.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var i = 0; i < a.length; i += 1) {
                            var s = a[i];
                            this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
                        }
                        return t || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var t = this.classNames,
                        a = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function(e) {
                        t.push(a.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, a, i, s, r) {
                    var n;

                    function o() {
                        r && r()
                    }
                    e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        x = {},
        T = function(u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(y).forEach(function(t) {
                    Object.keys(y[t]).forEach(function(e) {
                        h.prototype[e] || (h.prototype[e] = y[t][e])
                    })
                });
                var r = this;
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function(e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i || null === i) return;
                        if (!(a in s && "enabled" in i)) return;
                        !0 === s[a] && (s[a] = {
                            enabled: !0
                        }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
                            enabled: !1
                        })
                    }
                });
                var n = ee.extend({}, w);
                r.useModulesParams(n), r.params = ee.extend({}, n, x, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
                var o = (r.$ = L)(r.params.el);
                if (t = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function(e, t) {
                            var a = ee.extend({}, s, {
                                el: t
                            });
                            l.push(new h(a))
                        }), l
                    }
                    t.swiper = r, o.data("swiper", r);
                    var d, p, c = o.children("." + r.params.wrapperClass);
                    return ee.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === r.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === r.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, r.touchEventsDesktop = {
                            start: p[0],
                            move: p[1],
                            end: p[2]
                        }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: ee.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
            }
            u && (h.__proto__ = u);
            var e = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    a = e.slides,
                    i = e.slidesGrid,
                    s = e.size,
                    r = e.activeIndex,
                    n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
                    for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
                } else
                    for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, h.prototype.update = function() {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid,
                        t = a.params;
                    t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }

                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                        t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, h.prototype.changeDirection = function(a, e) {
                void 0 === e && (e = !0);
                var t = this,
                    i = t.params.direction;
                return a || (a = "horizontal" === i ? "vertical" : "horizontal"), a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), t.params.direction = a, t.slides.each(function(e, t) {
                    "vertical" === a ? t.style.width = "" : t.style.height = ""
                }), t.emit("changeDirection"), e && t.update()), t
            }, h.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, h.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this,
                    i = a.params,
                    s = a.$el,
                    r = a.$wrapperEl,
                    n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
            }, h.extendDefaults = function(e) {
                ee.extend(x, e)
            }, e.extendedDefaults.get = function() {
                return x
            }, e.defaults.get = function() {
                return w
            }, e.Class.get = function() {
                return u
            }, e.$.get = function() {
                return L
            }, Object.defineProperties(h, e), h
        }(n),
        E = {
            name: "device",
            proto: {
                device: g
            },
            static: {
                device: g
            }
        },
        S = {
            name: "support",
            proto: {
                support: te
            },
            static: {
                support: te
            }
        },
        C = {
            name: "browser",
            proto: {
                browser: I
            },
            static: {
                browser: I
            }
        },
        M = {
            name: "resize",
            create: function() {
                var e = this;
                ee.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        z = {
            func: J.MutationObserver || J.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new z.func(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                a.emit("observerUpdate", e[0])
                            };
                            J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                        } else a.emit("observerUpdate", e[0])
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            },
            init: function() {
                var e = this;
                if (te.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        P = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                ee.extend(this, {
                    observer: {
                        init: z.init.bind(this),
                        attach: z.attach.bind(this),
                        destroy: z.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        k = {
            update: function(e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m, g, b, w = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
                var y = Math.max((w || 0) - b, 0),
                    x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (ee.extend(t.virtual, {
                        from: y,
                        to: x,
                        offset: T,
                        slidesGrid: t.slidesGrid
                    }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function() {
                        for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void E();
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var z = 0; z < u.length; z += 1) y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
                C.forEach(function(e) {
                    t.$wrapperEl.append(v(u[e], e))
                }), S.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
            },
            renderSlide: function(e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.activeIndex,
                    i = a + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
                    i = a + e.length, s = e.length
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var n = t.virtual.cache,
                        o = {};
                    Object.keys(n).forEach(function(e) {
                        o[parseInt(e, 10) + s] = n[e]
                    }), t.virtual.cache = o
                }
                t.virtual.update(!0), t.slideTo(i, 0)
            },
            removeSlide: function(e) {
                var t = this;
                if (null != e) {
                    var a = t.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; 0 <= i; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
                    t.virtual.update(!0), t.slideTo(a, 0)
                }
            },
            removeAllSlides: function() {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        },
        $ = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    virtual: {
                        update: k.update.bind(e),
                        appendSlide: k.appendSlide.bind(e),
                        prependSlide: k.prependSlide.bind(e),
                        removeSlide: k.removeSlide.bind(e),
                        removeAllSlides: k.removeAllSlides.bind(e),
                        renderSlide: k.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        D = {
            handle: function(e) {
                var t = this,
                    a = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = J.innerWidth,
                            o = J.innerHeight,
                            l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ], p = 0; p < d.length; p += 1) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            },
            enable: function() {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        O = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: D.enable.bind(this),
                        disable: D.disable.bind(this),
                        handle: D.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var A = {
            lastScrollTime: ee.now(),
            event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel",
                    t = e in f;
                if (!t) {
                    var a = f.createElement("div");
                    a.setAttribute(e, "return;"), t = "function" == typeof a[e]
                }
                return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                if (!a.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0,
                    r = a.rtlTranslate ? -1 : 1,
                    n = A.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                        s = n.pixelX * r
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                        s = n.pixelY
                    }
                else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
                if (0 === s) return !0;
                if (i.invert && (s = -s), a.params.freeMode) {
                    a.params.loop && a.loopFix();
                    var o = a.getTranslate() + s * i.sensitivity,
                        l = a.isBeginning,
                        d = a.isEnd;
                    if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function() {
                            a.slideToClosest()
                        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
                } else {
                    if (60 < ee.now() - a.mousewheel.lastScrollTime)
                        if (s < 0)
                            if (a.isEnd && !a.params.loop || a.animating) {
                                if (i.releaseOnEdges) return !0
                            } else a.slideNext(), a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges) return !0
                    } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = (new J.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                var e = this;
                if (!A.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(A.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function() {
                var e = this;
                if (!A.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(A.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        H = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        N = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var o, l, d, p = e.pagination.bullets;
                        if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function(e, t) {
                            var a = L(t),
                                i = a.index();
                            i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                        else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
                            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                            c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                m = t ? "right" : "left";
                            p.css(e.isHorizontal() ? m : "top", f + "px")
                        }
                    }
                    if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                        var g;
                        g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var a = this,
                    e = a.params.pagination;
                if (e.el) {
                    var t = L(e.el);
                    0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                        e.preventDefault();
                        var t = L(this).index() * a.params.slidesPerGroup;
                        a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                    }), ee.extend(a.pagination, {
                        $el: t,
                        el: t[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
                }
            }
        },
        G = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ee.extend(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: o,
                        dragSize: s
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize;
                t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function() {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            init: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = L(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
                        $el: s,
                        el: s[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && t.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        B = {
            setTransform: function(e, t) {
                var a = this.rtl,
                    i = L(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p
                }
                if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    i.parallax.setTransform(t, s)
                }), t.each(function(e, t) {
                    var a = t.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        i.parallax.setTransform(t, a)
                    })
                })
            },
            setTransition: function(s) {
                void 0 === s && (s = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    var a = L(t),
                        i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (i = 0), a.transition(i)
                })
            }
        },
        X = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
            },
            onGestureStart: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, s.scaleStart = X.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    a.fakeGestureMoved = !0, i.scaleMove = X.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
                    a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
                    a.isTouched = !1, a.isMoved = !1;
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    a.currentX = o, a.currentY = d;
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
                    b = g.zoom,
                    w = g.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function() {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        Y = {
            loadInSlide: function(e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    p = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                        t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                    !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
                        var i = L(t);
                        i.addClass(p.loadingClass);
                        var s = i.attr("data-background"),
                            r = i.attr("data-src"),
                            n = i.attr("data-srcset"),
                            o = i.attr("data-sizes");
                        d.loadImage(i[0], r || s, n, o, !1, function() {
                            if (null != d && d && (!d || d.params) && !d.destroyed) {
                                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                                    var e = c.attr("data-swiper-slide-index");
                                    if (c.hasClass(d.params.slideDuplicateClass)) {
                                        var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                        d.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        d.lazy.loadInSlide(a.index(), !1)
                                    }
                                }
                                d.emit("lazyImageReady", c[0], i[0])
                            }
                        }), d.emit("lazyImageLoad", c[0], i[0])
                    })
                }
            },
            load: function() {
                var i = this,
                    t = i.$wrapperEl,
                    a = i.params,
                    s = i.slides,
                    e = i.activeIndex,
                    r = i.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;

                function l(e) {
                    if (r) {
                        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
                }
                if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function(e, t) {
                    var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                    i.lazy.loadInSlide(a)
                });
                else if (1 < o)
                    for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
                else i.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
                    } else {
                        var g = t.children("." + a.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(d(g));
                        var b = t.children("." + a.slidePrevClass);
                        0 < b.length && i.lazy.loadInSlide(d(b))
                    }
            }
        },
        V = {
            LinearSpline: function(e, t) {
                var a, i, s, r, n, o = function(e, t) {
                    for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                    return a
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var a, i, s = this,
                    r = s.controller.control;

                function n(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof T && n(r[o]);
                else r instanceof T && t !== r && n(r)
            },
            setTransition: function(t, e) {
                var a, i = this,
                    s = i.controller.control;

                function r(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(s))
                    for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof T && r(s[a]);
                else s instanceof T && e !== s && r(s)
            }
        },
        F = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this,
                    a = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = L(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
                }
            },
            updatePagination: function() {
                var i = this,
                    s = i.params.a11y;
                i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                    var a = L(t);
                    i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, a, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t, a = this;
                a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
            }
        },
        R = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = R.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = J.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var a = this.slides.eq(t),
                        i = R.slugify(a.attr("data-history"));
                    J.location.pathname.includes(e) || (i = e + "/" + i);
                    var s = J.history.state;
                    s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
                        value: i
                    }, null, i) : J.history.pushState({
                        value: i
                    }, null, i))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        q = {
            onHashCange: function() {
                var e = this,
                    t = f.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === a) return;
                    e.slideTo(a)
                }
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        f.location.hash = a || ""
                    }
            },
            init: function() {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var t = f.location.hash.replace("#", "");
                    if (t)
                        for (var a = 0, i = e.slides.length; a < i; a += 1) {
                            var s = e.slides.eq(a);
                            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                                var r = s.index();
                                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        W = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, a)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        j = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    t.transitionEnd(function() {
                        if (!s && a && !a.destroyed) {
                            s = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                        }
                    })
                }
            }
        },
        U = {
            setTranslate: function() {
                var e, t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.params.cubeEffect,
                    p = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    u = 0;
                d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
                for (var h = 0; h < s.length; h += 1) {
                    var v = s.eq(h),
                        f = h;
                    c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
                    var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                        var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            z = d.shadowScale,
                            P = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                    } var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        K = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    t.eq(i).transitionEnd(function() {
                        if (!r && a && !a.destroyed) {
                            r = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                        }
                    })
                }
            }
        },
        _ = {
            setTranslate: function() {
                for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                    var v = i.eq(u),
                        f = r[u],
                        m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
                        g = o ? p * m : 0,
                        b = o ? 0 : p * m,
                        w = -c * Math.abs(m),
                        y = o ? 0 : n.stretch * m,
                        x = o ? n.stretch * m : 0;
                    Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
                    var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                    if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
                        var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                    }
                }(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        Z = {
            init: function() {
                var e = this,
                    t = e.params.thumbs,
                    a = e.constructor;
                t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), ee.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex,
                        i = t.clickedSlide;
                    if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                        var s;
                        if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                            var r = e.activeIndex;
                            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                        }
                        e.slideTo(s)
                    }
                }
            },
            update: function(e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                    if (t.realIndex !== a.realIndex) {
                        var s, r = a.activeIndex;
                        if (a.params.loop) {
                            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
                            var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                        } else s = t.realIndex;
                        a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
                        for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                    else
                        for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
                }
            }
        },
        Q = [E, S, C, M, P, $, O, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: A.enable.bind(e),
                        disable: A.disable.bind(e),
                        handle: A.handle.bind(e),
                        handleMouseEnter: A.handleMouseEnter.bind(e),
                        handleMouseLeave: A.handleMouseLeave.bind(e),
                        lastScrollTime: ee.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    navigation: {
                        init: H.init.bind(e),
                        update: H.update.bind(e),
                        destroy: H.destroy.bind(e),
                        onNextClick: H.onNextClick.bind(e),
                        onPrevClick: H.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t, a = this,
                        i = a.navigation,
                        s = i.$nextEl,
                        r = i.$prevEl;
                    !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    pagination: {
                        init: N.init.bind(e),
                        render: N.render.bind(e),
                        update: N.update.bind(e),
                        destroy: N.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    var t = this;
                    t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    scrollbar: {
                        init: G.init.bind(e),
                        destroy: G.destroy.bind(e),
                        updateSize: G.updateSize.bind(e),
                        setTranslate: G.setTranslate.bind(e),
                        setTransition: G.setTransition.bind(e),
                        enableDraggable: G.enableDraggable.bind(e),
                        disableDraggable: G.disableDraggable.bind(e),
                        setDragPosition: G.setDragPosition.bind(e),
                        onDragStart: G.onDragStart.bind(e),
                        onDragMove: G.onDragMove.bind(e),
                        onDragEnd: G.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    parallax: {
                        setTransform: B.setTransform.bind(this),
                        setTranslate: B.setTranslate.bind(this),
                        setTransition: B.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var i = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                    t[e] = X[e].bind(i)
                }), ee.extend(i, {
                    zoom: t
                });
                var s = 1;
                Object.defineProperty(i.zoom, "scale", {
                    get: function() {
                        return s
                    },
                    set: function(e) {
                        if (s !== e) {
                            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                            i.emit("zoomChange", e, t, a)
                        }
                        s = e
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                ee.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: Y.load.bind(this),
                        loadInSlide: Y.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: V.getInterpolateFunction.bind(e),
                        setTranslate: V.setTranslate.bind(e),
                        setTransition: V.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    a11y: {
                        liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(F).forEach(function(e) {
                    t.a11y[e] = F[e].bind(t)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    history: {
                        init: R.init.bind(e),
                        setHistory: R.setHistory.bind(e),
                        setHistoryPopState: R.setHistoryPopState.bind(e),
                        scrollToSlide: R.scrollToSlide.bind(e),
                        destroy: R.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: q.init.bind(e),
                        destroy: q.destroy.bind(e),
                        setHash: q.setHash.bind(e),
                        onHashCange: q.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: W.run.bind(t),
                        start: W.start.bind(t),
                        stop: W.stop.bind(t),
                        pause: W.pause.bind(t),
                        onTransitionEnd: function(e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    fadeEffect: {
                        setTranslate: j.setTranslate.bind(this),
                        setTransition: j.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                ee.extend(this, {
                    cubeEffect: {
                        setTranslate: U.setTranslate.bind(this),
                        setTransition: U.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    flipEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    coverflowEffect: {
                        setTranslate: _.setTranslate.bind(this),
                        setTransition: _.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                ee.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: Z.init.bind(this),
                        update: Z.update.bind(this),
                        onThumbClick: Z.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T
});
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(n) {
    "use strict";
    var i = [],
        o = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    (e = []).push(/^[0-9]*$/.source), e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    var e = new RegExp(e.join("|")),
        c = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        };

    function s(r) {
        return function(t) {
            var e = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (e)
                for (var s = 0, n = e.length; s < n; ++s) {
                    var i = e[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        o = (o = (o = i[0]).toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(o)),
                        a = i[1] || "",
                        h = i[3] || "",
                        l = null,
                        i = i[2];
                    c.hasOwnProperty(i) && (l = c[i], l = Number(r[l])), null !== l && ("!" === a && (l = function(t, e) {
                        var s = "s",
                            n = "";
                        t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), s = 1 === t.length ? t[0] : (n = t[0], t[1]));
                        return 1 < Math.abs(e) ? s : n
                    }(h, l)), "" === a && l < 10 && (l = "0" + l.toString()), t = t.replace(o, l.toString()))
                }
            return t = t.replace(/%%/, "%")
        }
    }

    function a(t, e, s) {
        this.el = t, this.$el = n(t), this.interval = null, this.offset = {}, this.options = n.extend({}, o), this.instanceNumber = i.length, i.push(this), this.$el.data("countdown-instance", this.instanceNumber), s && ("function" == typeof s ? (this.$el.on("update.countdown", s), this.$el.on("stoped.countdown", s), this.$el.on("finish.countdown", s)) : this.options = n.extend({}, o, s)), this.setFinalDate(e), !1 === this.options.defer && this.start()
    }
    n.extend(a.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(), this.interval = setInterval(function() {
                t.update.call(t)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), i[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(t) {
            this.finalDate = function(t) {
                if (t instanceof Date) return t;
                if (String(t).match(e)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
                throw new Error("Couldn't cast `" + t + "` to a date object.")
            }(t)
        },
        update: function() {
            var t, e, s;
            0 === this.$el.closest("html").length ? this.remove() : (t = void 0 !== n._data(this.el, "events"), e = new Date, s = this.finalDate.getTime() - e.getTime(), s = Math.ceil(s / 1e3), s = !this.options.elapse && s < 0 ? 0 : Math.abs(s), this.totalSecsLeft !== s && t && (this.totalSecsLeft = s, this.elapsed = e >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - e.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))))
        },
        dispatchEvent: function(t) {
            t = n.Event(t + ".countdown");
            t.finalDate = this.finalDate, t.elapsed = this.elapsed, t.offset = n.extend({}, this.offset), t.strftime = s(this.offset), this.$el.trigger(t)
        }
    }), n.fn.countdown = function() {
        var s = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var t, e = n(this).data("countdown-instance");
            void 0 !== e ? (e = i[e], t = s[0], a.prototype.hasOwnProperty(t) ? e[t].apply(e, s.slice(1)) : null === String(t).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (e.setFinalDate.call(e, t), e.start()) : n.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, t))) : new a(this, s[0], s[1])
        })
    }
});
/*! jQuery UI - v1.13.3 - 2024-04-26
 * https://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;

    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }

    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }

    function N(t) {
        return null != t && t === t.window
    }
    x.ui = x.ui || {}, x.ui.version = "1.13.3",
        /*!
         * jQuery UI :data 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.extend(x.expr.pseudos, {
            data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
                return function(t) {
                    return !!x.data(t, e)
                }
            }) : function(t, e, i) {
                return !!x.data(t, i[3])
            }
        }),
        /*!
         * jQuery UI Disable Selection 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        }),
        /*!
         * jQuery UI Focusable 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.ui.focusable = function(t, e) {
            var i, n, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (o = (i = t.parentNode).name, !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && 0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e, n && x(t).is(":visible") && function(t) {
                var e = t.css("visibility");
                for (;
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "visible" === e
            }(x(t)))
        }, x.extend(x.expr.pseudos, {
            focusable: function(t) {
                return x.ui.focusable(t, null != x.attr(t, "tabindex"))
            }
        }), x.fn._form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
        },
        /*!
         * jQuery UI Form Reset Mixin 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = x(this);
                setTimeout(function() {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                var t;
                this.form = this.element._form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
            },
            _unbindFormResetHandler: function() {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
            }
        }, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        /*!
         * jQuery UI Support for jQuery core 1.8.x and newer 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         *
         */
        x.expr.pseudos || (x.expr.pseudos = x.expr[":"]), x.uniqueSort || (x.uniqueSort = x.unique), x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, i = function(t, e) {
            return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, x.escapeSelector = function(t) {
            return (t + "").replace(e, i)
        }), x.fn.even && x.fn.odd || x.fn.extend({
            even: function() {
                return this.filter(function(t) {
                    return t % 2 == 0
                })
            },
            odd: function() {
                return this.filter(function(t) {
                    return t % 2 == 1
                })
            }
        }),
        /*!
         * jQuery UI Keycode 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        /*!
         * jQuery UI Labels 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.fn.labels = function() {
            var t, e, i;
            return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), t = "label[for='" + x.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), this.pushStack(e)) : this.pushStack([])
        }, x.ui.plugin = {
            add: function(t, e, i) {
                var n, o = x.ui[t].prototype;
                for (n in i) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var o, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (o = 0; o < s.length; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
            }
        },
        /*!
         * jQuery UI Position 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         *
         * https://api.jqueryui.com/position/
         */
        W = Math.max, C = Math.abs, o = /left|center|right/, s = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, h = x.fn.position, x.position = {
            scrollbarWidth: function() {
                var t, e, i;
                return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0], x("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i)
            },
            getScrollInfo: function(t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                    height: e ? x.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var e = x(t || window),
                    i = N(e[0]),
                    n = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: n,
                    offset: !i && !n ? x(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }
            }
        }, x.fn.position = function(f) {
            var c, d, p, g, m, v, y, w, b, _, t, e;
            return f && f.of ? (v = "string" == typeof(f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of), y = x.position.getWithinInfo(f.within), w = x.position.getScrollInfo(y), b = (f.collision || "flip").split(" "), _ = {}, e = 9 === (e = (t = v)[0]).nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : N(e) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : e.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: e.pageY,
                    left: e.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }, v[0].preventDefault && (f.at = "left top"), d = e.width, p = e.height, m = x.extend({}, g = e.offset), x.each(["my", "at"], function() {
                var t, e, i = (f[this] || "").split(" ");
                (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center", i[1] = s.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), _[this] = [t ? t[0] : 0, e ? e[0] : 0], f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
            }), 1 === b.length && (b[1] = b[0]), "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2), "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2), c = E(_.at, d, p), m.left += c[0], m.top += c[1], this.each(function() {
                var i, t, r = x(this),
                    l = r.outerWidth(),
                    a = r.outerHeight(),
                    e = L(this, "marginLeft"),
                    n = L(this, "marginTop"),
                    o = l + e + L(this, "marginRight") + w.width,
                    s = a + n + L(this, "marginBottom") + w.height,
                    h = x.extend({}, m),
                    u = E(_.my, r.outerWidth(), r.outerHeight());
                "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2), "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2), h.left += u[0], h.top += u[1], i = {
                    marginLeft: e,
                    marginTop: n
                }, x.each(["left", "top"], function(t, e) {
                    x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                        targetWidth: d,
                        targetHeight: p,
                        elemWidth: l,
                        elemHeight: a,
                        collisionPosition: i,
                        collisionWidth: o,
                        collisionHeight: s,
                        offset: [c[0] + u[0], c[1] + u[1]],
                        my: f.my,
                        at: f.at,
                        within: y,
                        elem: r
                    })
                }), f.using && (t = function(t) {
                    var e = g.left - h.left,
                        i = e + d - l,
                        n = g.top - h.top,
                        o = n + p - a,
                        s = {
                            target: {
                                element: v,
                                left: g.left,
                                top: g.top,
                                width: d,
                                height: p
                            },
                            element: {
                                element: r,
                                left: h.left,
                                top: h.top,
                                width: l,
                                height: a
                            },
                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                            vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                        };
                    d < l && C(e + i) < d && (s.horizontal = "center"), p < a && C(n + o) < p && (s.vertical = "middle"), W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical", f.using.call(this, t, s)
                }), r.offset(x.extend(h, {
                    using: t
                }))
            })) : h.apply(this, arguments)
        }, x.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, n = e.within,
                        o = n.isWindow ? n.scrollLeft : n.offset.left,
                        n = n.width,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = o - s,
                        l = s + e.collisionWidth - n - o;
                    e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o, t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
                },
                top: function(t, e) {
                    var i, n = e.within,
                        n = n.isWindow ? n.scrollTop : n.offset.top,
                        o = e.within.height,
                        s = t.top - e.collisionPosition.marginTop,
                        r = n - s,
                        l = s + e.collisionHeight - o - n;
                    e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i = e.within,
                        n = i.offset.left + i.scrollLeft,
                        o = i.width,
                        i = i.isWindow ? i.scrollLeft : i.offset.left,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = s - i,
                        s = s + e.collisionWidth - o - i,
                        l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        h = -2 * e.offset[0];
                    r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
                },
                top: function(t, e) {
                    var i = e.within,
                        n = i.offset.top + i.scrollTop,
                        o = i.height,
                        i = i.isWindow ? i.scrollTop : i.offset.top,
                        s = t.top - e.collisionPosition.marginTop,
                        r = s - i,
                        s = s + e.collisionHeight - o - i,
                        l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        h = -2 * e.offset[1];
                    r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
                }
            },
            flipfit: {
                left: function() {
                    x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, x.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i = (i = i || e.body).nodeName ? i : e.body
        }, x.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
        },
        /*!
         * jQuery UI Scroll Parent 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.fn.scrollParent = function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = x(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
        },
        /*!
         * jQuery UI Tabbable 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.extend(x.expr.pseudos, {
            tabbable: function(t) {
                var e = x.attr(t, "tabindex"),
                    i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i)
            }
        }),
        /*!
         * jQuery UI Unique ID 1.13.3
         * https://jqueryui.com
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license.
         * https://jquery.org/license
         */
        x.fn.extend({
            uniqueId: (u = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++u)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
                })
            }
        });
    /*!
     * jQuery UI Widget 1.13.3
     * https://jqueryui.com
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license.
     * https://jquery.org/license
     */
    var f, c = 0,
        d = Array.prototype.hasOwnProperty,
        p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData, function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)(e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        f(t)
    }), x.widget = function(t, i, e) {
        var n, o, s, r = {},
            l = t.split(".")[0],
            a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = x.Widget), Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))), x.expr.pseudos[a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }, x[l] = x[l] || {}, n = x[l][t], o = x[l][t] = function(t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }), (s = new i).options = x.widget.extend({}, s.options), x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }

            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            r[e] = "function" != typeof n ? n : function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            }
        }), o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), x.widget.bridge(t, o), o
    }, x.widget.extend = function(t) {
        for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o]) i = n[o][e], d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }, x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i,
                n = p.call(arguments, 1),
                o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e, !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t, !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : x.data(this, r, new e(i, this))
            })), o
        }
    }, x.Widget = function() {}, x.Widget._childConstructors = [], x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(), x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length) return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) n[i[o]] = n[i[o]] || {}, n = n[i[o]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                } return this._setOptions(s), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = [],
                r = this;

            function t(t, e) {
                for (var i, n = 0; n < t.length; n++) i = r.classesElementLookup[t[n]] || x(), i = o.add ? (function() {
                    var i = [];
                    o.element.each(function(t, e) {
                        x.map(r.classesElementLookup, function(t) {
                            return t
                        }).some(function(t) {
                            return t.is(e)
                        }) || i.push(e)
                    }), r._on(x(i), {
                        remove: "_untrackClassesElement"
                    })
                }(), x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()), r.classesElementLookup[t[n]] = i, s.push(t[n]), e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0), o.extra && t(o.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            }), this._off(x(i.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            var o = "string" == typeof t || null === t,
                e = {
                    extra: o ? e : i,
                    keys: o ? t : e,
                    element: o ? this.element : t,
                    add: n = "boolean" == typeof n ? n : i
                };
            return e.element.toggleClass(this._classes(e), n), this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s, s = o, o = !1), t ? (s = r = x(s), this.bindings = this.bindings.add(s)) : (t = s, s = this.element, r = this.widget()), x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var t = t.match(/^([\w:-]*)\s*(.*)$/),
                    n = t[1] + l.eventNamespace,
                    t = t[2];
                t ? r.on(n, t, i) : s.on(n, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], o = e.originalEvent)
                for (n in o) n in e || (e[n] = o[n]);
            return this.element.trigger(e, i), !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof(t = t || {}) ? t = {
                duration: t
            }: !0 === t && (t = {}), n = !x.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](), i && i.call(e[0]), t()
            })
        }
    })
});
/*!
 * jQuery UI Menu 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "../keycode", "../position", "../safe-active-element", "../unique-id", "../version", "../widget"], e) : e(jQuery)
}(function(a) {
    "use strict";
    return a.widget("ui.menu", {
        version: "1.13.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.lastMousePosition = {
                x: null,
                y: null
            }, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault(), this._activateItem(e)
                },
                "click .ui-menu-item": function(e) {
                    var t = a(e.target),
                        i = a(a.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active) && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))
                },
                "mouseenter .ui-menu-item": "_activateItem",
                "mousemove .ui-menu-item": "_activateItem",
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this._menuItems().first();
                    t || this.focus(e, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        a.contains(this.element[0], a.ui.safeActiveElement(this.document[0])) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e, !0), this.mouseHandled = !1
                }
            })
        },
        _activateItem: function(e) {
            var t, i;
            this.previousFilter || e.clientX === this.lastMousePosition.x && e.clientY === this.lastMousePosition.y || (this.lastMousePosition = {
                x: e.clientX,
                y: e.clientY
            }, t = a(e.target).closest(".ui-menu-item"), i = a(e.currentTarget), t[0] !== i[0]) || i.is(".ui-state-active") || (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, i))
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                var e = a(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var t, i, s, n = !0;
            switch (e.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case a.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    t = this.previousFilter || "", s = n = !1, i = 96 <= e.keyCode && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), i === t ? s = !0 : i = t + i, t = this._filterMenuItems(i), (t = s && -1 !== t.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : t).length || (i = String.fromCharCode(e.keyCode), t = this._filterMenuItems(i)), t.length ? (this.focus(e, t), this.previousFilter = i, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            n && e.preventDefault()
        },
        _activate: function(e) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var e, t, s = this,
                n = this.options.icons.submenu,
                i = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), e = i.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = a(this),
                    t = e.prev(),
                    i = a("<span>").data("ui-menu-submenu-caret", !0);
                s._addClass(i, "ui-menu-icon", "ui-icon " + n), t.attr("aria-haspopup", "true").prepend(i), e.attr("aria-labelledby", t.attr("id"))
            }), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = a(this);
                s._isDivider(e) && s._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), t = (i = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(i, "ui-menu-item")._addClass(t, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(e, t) {
            var i;
            "icons" === e && (i = this.element.find(".ui-menu-icon"), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)), this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.element.attr("aria-disabled", String(e)), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        focus: function(e, t) {
            var i;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), i = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(e) {
            var t, i, s;
            this._hasScroll() && (t = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, t = e.offset().top - this.activeMenu.offset().top - t - i, i = this.activeMenu.scrollTop(), s = this.activeMenu.height(), e = e.outerHeight(), t < 0 ? this.activeMenu.scrollTop(i + t) : s < t + e && this.activeMenu.scrollTop(i + t - s + e))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function(e) {
            var t = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var e = i ? this.element : a(t && t.target).closest(this.element.find(".ui-menu"));
                e.length || (e = this.element), this._close(e), this.blur(t), this._removeClass(e.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = e
            }, i ? 0 : this.delay)
        },
        _close: function(e) {
            (e = e || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !a(e.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this._menuItems(this.active.children(".ui-menu")).first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _menuItems: function(e) {
            return (e || this.element).find(this.options.items).filter(".ui-menu-item")
        },
        _move: function(e, t, i) {
            var s;
            (s = this.active ? "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[e + "All"](".ui-menu-item").first() : s) && s.length && this.active || (s = this._menuItems(this.activeMenu)[t]()), this.focus(i, s)
        },
        nextPage: function(e) {
            var t, i, s;
            this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.innerHeight(), 0 === a.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()), this.active.nextAll(".ui-menu-item").each(function() {
                return (t = a(this)).offset().top - i - s < 0
            }), this.focus(e, t)) : this.focus(e, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())) : this.next(e)
        },
        previousPage: function(e) {
            var t, i, s;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.innerHeight(), 0 === a.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()), this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (t = a(this)).offset().top - i + s
            }), this.focus(e, t)) : this.focus(e, this._menuItems(this.activeMenu).first())) : this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || a(e.target).closest(".ui-menu-item");
            var t = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, t)
        },
        _filterMenuItems: function(e) {
            var e = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                t = new RegExp("^" + e, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return t.test(String.prototype.trim.call(a(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    })
});
/*!
 * jQuery UI Autocomplete 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./menu", "../keycode", "../position", "../safe-active-element", "../version", "../widget"], e) : e(jQuery)
}(function(o) {
    "use strict";
    return o.widget("ui.autocomplete", {
        version: "1.13.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        liveRegionTimer: null,
        _create: function() {
            var i, s, n, e = this.element[0].nodeName.toLowerCase(),
                t = "textarea" === e,
                e = "input" === e;
            this.isMultiLine = t || !e && this._isContentEditable(this.element), this.valueMethod = this.element[t || e ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) s = n = i = !0;
                    else {
                        s = n = i = !1;
                        var t = o.ui.keyCode;
                        switch (e.keyCode) {
                            case t.PAGE_UP:
                                i = !0, this._move("previousPage", e);
                                break;
                            case t.PAGE_DOWN:
                                i = !0, this._move("nextPage", e);
                                break;
                            case t.UP:
                                i = !0, this._keyEvent("previous", e);
                                break;
                            case t.DOWN:
                                i = !0, this._keyEvent("next", e);
                                break;
                            case t.ENTER:
                                this.menu.active && (i = !0, e.preventDefault(), this.menu.select(e));
                                break;
                            case t.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case t.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                s = !0, this._searchTimeout(e)
                        }
                    }
                },
                keypress: function(e) {
                    if (i) i = !1, this.isMultiLine && !this.menu.element.is(":visible") || e.preventDefault();
                    else if (!s) {
                        var t = o.ui.keyCode;
                        switch (e.keyCode) {
                            case t.PAGE_UP:
                                this._move("previousPage", e);
                                break;
                            case t.PAGE_DOWN:
                                this._move("nextPage", e);
                                break;
                            case t.UP:
                                this._keyEvent("previous", e);
                                break;
                            case t.DOWN:
                                this._keyEvent("next", e)
                        }
                    }
                },
                input: function(e) {
                    n ? (n = !1, e.preventDefault()) : this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    clearTimeout(this.searching), this.close(e), this._change(e)
                }
            }), this._initSource(), this.menu = o("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().attr({
                unselectable: "on"
            }).menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault()
                },
                menufocus: function(e, t) {
                    var i, s;
                    this.isNewMenu && (this.isNewMenu = !1, e.originalEvent) && /^mouse/.test(e.originalEvent.type) ? (this.menu.blur(), this.document.one("mousemove", function() {
                        o(e.target).trigger(e.originalEvent)
                    })) : (s = t.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: s
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), (i = t.item.attr("aria-label") || s.value) && String.prototype.trim.call(i).length && (clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function() {
                        this.liveRegion.html(o("<div>").text(i))
                    }, 100)))
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== o.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = o("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var t = this.menu.element[0];
            return e.target === this.element[0] || e.target === t || o.contains(t, e.target)
        },
        _closeOnClickOutside: function(e) {
            this._isEventTargetInWidget(e) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e = (e = (e = e && (e.jquery || e.nodeType ? o(e) : this.document.find(e).eq(0))) && e[0] ? e : this.element.closest(".ui-front, dialog")).length ? e : this.document[0].body
        },
        _initSource: function() {
            var i, s, n = this;
            Array.isArray(this.options.source) ? (i = this.options.source, this.source = function(e, t) {
                t(o.ui.autocomplete.filter(i, e.term))
            }) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function(e, t) {
                n.xhr && n.xhr.abort(), n.xhr = o.ajax({
                    url: s,
                    data: e,
                    dataType: "json",
                    success: function(e) {
                        t(e)
                    },
                    error: function() {
                        t([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(s) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    t = this.menu.element.is(":visible"),
                    i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
                e && (t || i) || (this.selectedItem = null, this.search(null, s))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }.bind(this)
        },
        __response: function(e) {
            e = e && this._normalize(e), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : o.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : o.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var t = this.menu.element.empty();
            this._renderMenu(t, e), this.isNewMenu = !0, this.menu.refresh(), t.show(), this._resizeMenu(), t.position(o.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(i, e) {
            var s = this;
            o.each(e, function(e, t) {
                s._renderItemData(i, t)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(e, t) {
            return o("<li>").append(o("<div>").text(t.label)).appendTo(e)
        },
        _move: function(e, t) {
            this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur()) : this.menu[e](t) : this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
        },
        _isContentEditable: function(e) {
            var t;
            return !!e.length && ("inherit" === (t = e.prop("contentEditable")) ? this._isContentEditable(e.parent()) : "true" === t)
        }
    }), o.extend(o.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, t) {
            var i = new RegExp(o.ui.autocomplete.escapeRegex(t), "i");
            return o.grep(e, function(e) {
                return i.test(e.label || e.value || e)
            })
        }
    }), o.widget("ui.autocomplete", o.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function() {
                this.liveRegion.html(o("<div>").text(t))
            }, 100))
        }
    }), o.ui.autocomplete
});
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({
                            path: "/"
                        }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {}
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function() {})
});
/*!
 * jQuery UI Mouse 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "../ie", "../version", "../widget"], e) : e(jQuery)
}(function(o) {
    "use strict";
    var n = !1;
    return o(document).on("mouseup", function() {
        n = !1
    }), o.widget("ui.mouse", {
        version: "1.13.3",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).on("click." + this.widgetName, function(e) {
                if (!0 === o.data(e.target, t.widgetName + ".preventClickEvent")) return o.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            var t, i, s;
            if (!n) return this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), i = 1 === (this._mouseDownEvent = e).which, s = !("string" != typeof(t = this).options.cancel || !e.target.nodeName) && o(e.target).closest(this.options.cancel).length, i && !s && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                t.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? e.preventDefault() : (!0 === o.data(e.target, this.widgetName + ".preventClickEvent") && o.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                return t._mouseMove(e)
            }, this._mouseUpDelegate = function(e) {
                return t._mouseUp(e)
            }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), n = !0)), !0
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (o.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && o.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, n = !1, e.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
});
/*!
 * jQuery UI Draggable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../data", "../plugin", "../safe-active-element", "../safe-blur", "../scroll-parent", "../version", "../widget"], t) : t(jQuery)
}(function(P) {
    "use strict";
    return P.widget("ui.draggable", P.ui.mouse, {
        version: "1.13.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
        },
        _mouseCapture: function(t) {
            var e = this.options;
            return !(this.helper || e.disabled || 0 < P(t.target).closest(".ui-resizable-handle").length || (this.handle = this._getHandle(t), !this.handle) || (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), 0))
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = P(this);
                return P("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var e = P.ui.safeActiveElement(this.document[0]);
            P(t.target).closest(e).length || P.ui.safeBlur(e)
        },
        _mouseStart: function(t) {
            var e = this.options;
            return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), P.ui.ddmanager && (P.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === P(this).css("position")
            }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), P.ui.ddmanager && !e.dropBehaviour && P.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), P.ui.ddmanager && P.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, e) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                e = this._uiHash();
                if (!1 === this._trigger("drag", t, e)) return this._mouseUp(new P.Event("mouseup", t)), !1;
                this.position = e.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", P.ui.ddmanager && P.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var e = this,
                s = !1;
            return P.ui.ddmanager && !this.options.dropBehaviour && (s = P.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || "function" == typeof this.options.revert && this.options.revert.call(this.element, s) ? P(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== e._trigger("stop", t) && e._clear()
            }) : !1 !== this._trigger("stop", t) && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), P.ui.ddmanager && P.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), P.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new P.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this
        },
        _getHandle: function(t) {
            return !this.options.handle || !!P(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var e = this.options,
                s = "function" == typeof e.helper,
                t = s ? P(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
            return t.parents("body").length || t.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), s && t[0] === this.element[0] && this._setPositionRelative(), t[0] === this.element[0] || /(fixed|absolute)/.test(t.css("position")) || t.css("position", "absolute"), t
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), "left" in (t = Array.isArray(t) ? {
                left: +t[0],
                top: +t[1] || 0
            } : t) && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                e = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== e && P.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), {
                top: (t = this._isRootNode(this.offsetParent[0]) ? {
                    top: 0,
                    left: 0
                } : t).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            var t, e;
            return "relative" !== this.cssPosition ? {
                top: 0,
                left: 0
            } : (t = this.element.position(), e = this._isRootNode(this.scrollParent[0]), {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            })
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, e = this.options,
                s = this.document[0];
            this.relativeContainer = null, e.containment ? "window" === e.containment ? this.containment = [P(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, P(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, P(window).scrollLeft() + P(window).width() - this.helperProportions.width - this.margins.left, P(window).scrollTop() + (P(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : "document" === e.containment ? this.containment = [0, 0, P(s).width() - this.helperProportions.width - this.margins.left, (P(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : e.containment.constructor === Array ? this.containment = e.containment : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), (e = (s = P(e.containment))[0]) && (t = /(scroll|auto)/.test(s.css("overflow")), this.containment = [(parseInt(s.css("borderLeftWidth"), 10) || 0) + (parseInt(s.css("paddingLeft"), 10) || 0), (parseInt(s.css("borderTopWidth"), 10) || 0) + (parseInt(s.css("paddingTop"), 10) || 0), (t ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(s.css("borderRightWidth"), 10) || 0) - (parseInt(s.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(s.css("borderBottomWidth"), 10) || 0) - (parseInt(s.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = s)) : this.containment = null
        },
        _convertPositionTo: function(t, e) {
            e = e || this.position;
            var t = "absolute" === t ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * t + this.offset.parent.top * t - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * t,
                left: e.left + this.offset.relative.left * t + this.offset.parent.left * t - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * t
            }
        },
        _generatePosition: function(t, e) {
            var s, i = this.options,
                o = this._isRootNode(this.scrollParent[0]),
                n = t.pageX,
                r = t.pageY;
            return o && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), {
                top: (r = e && (this.containment && (s = this.relativeContainer ? (e = this.relativeContainer.offset(), [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : this.containment, t.pageX - this.offset.click.left < s[0] && (n = s[0] + this.offset.click.left), t.pageY - this.offset.click.top < s[1] && (r = s[1] + this.offset.click.top), t.pageX - this.offset.click.left > s[2] && (n = s[2] + this.offset.click.left), t.pageY - this.offset.click.top > s[3]) && (r = s[3] + this.offset.click.top), i.grid && (e = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY, r = !s || e - this.offset.click.top >= s[1] || e - this.offset.click.top > s[3] ? e : e - this.offset.click.top >= s[1] ? e - i.grid[1] : e + i.grid[1], t = i.grid[0] ? this.originalPageX + Math.round((n - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX, n = !s || t - this.offset.click.left >= s[0] || t - this.offset.click.left > s[2] ? t : t - this.offset.click.left >= s[0] ? t - i.grid[0] : t + i.grid[0]), "y" === i.axis && (n = this.originalPageX), "x" === i.axis) ? this.originalPageY : r) - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : o ? 0 : this.offset.scroll.top),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : o ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, e, s) {
            return s = s || this._uiHash(), P.ui.plugin.call(this, t, [e, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), P.Widget.prototype._trigger.call(this, t, e, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), P.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, t, s) {
            var i = P.extend({}, t, {
                item: s.element
            });
            s.sortables = [], P(s.options.connectToSortable).each(function() {
                var t = P(this).sortable("instance");
                t && !t.options.disabled && (s.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, i))
            })
        },
        stop: function(e, t, s) {
            var i = P.extend({}, t, {
                item: s.element
            });
            s.cancelHelperRemoval = !1, P.each(s.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, i))
            })
        },
        drag: function(s, i, o) {
            P.each(o.sortables, function() {
                var t = !1,
                    e = this;
                e.positionAbs = o.positionAbs, e.helperProportions = o.helperProportions, e.offset.click = o.offset.click, e._intersectsWith(e.containerCache) && (t = !0, P.each(o.sortables, function() {
                    return this.positionAbs = o.positionAbs, this.helperProportions = o.helperProportions, this.offset.click = o.offset.click, t = this !== e && this._intersectsWith(this.containerCache) && P.contains(e.element[0], this.element[0]) ? !1 : t
                })), t ? (e.isOver || (e.isOver = 1, o._parent = i.helper.parent(), e.currentItem = i.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function() {
                    return i.helper[0]
                }, s.target = e.currentItem[0], e._mouseCapture(s, !0), e._mouseStart(s, !0, !0), e.offset.click.top = o.offset.click.top, e.offset.click.left = o.offset.click.left, e.offset.parent.left -= o.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= o.offset.parent.top - e.offset.parent.top, o._trigger("toSortable", s), o.dropped = e.element, P.each(o.sortables, function() {
                    this.refreshPositions()
                }), o.currentItem = o.element, e.fromOutside = o), e.currentItem && (e._mouseDrag(s), i.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", s, e._uiHash(e)), e._mouseStop(s, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), i.helper.appendTo(o._parent), o._refreshOffsets(s), i.position = o._generatePosition(s, !0), o._trigger("fromSortable", s), o.dropped = !1, P.each(o.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), P.ui.plugin.add("draggable", "cursor", {
        start: function(t, e, s) {
            var i = P("body"),
                s = s.options;
            i.css("cursor") && (s._cursor = i.css("cursor")), i.css("cursor", s.cursor)
        },
        stop: function(t, e, s) {
            s = s.options;
            s._cursor && P("body").css("cursor", s._cursor)
        }
    }), P.ui.plugin.add("draggable", "opacity", {
        start: function(t, e, s) {
            e = P(e.helper), s = s.options;
            e.css("opacity") && (s._opacity = e.css("opacity")), e.css("opacity", s.opacity)
        },
        stop: function(t, e, s) {
            s = s.options;
            s._opacity && P(e.helper).css("opacity", s._opacity)
        }
    }), P.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, s) {
            s.scrollParentNotHidden || (s.scrollParentNotHidden = s.helper.scrollParent(!1)), s.scrollParentNotHidden[0] !== s.document[0] && "HTML" !== s.scrollParentNotHidden[0].tagName && (s.overflowOffset = s.scrollParentNotHidden.offset())
        },
        drag: function(t, e, s) {
            var i = s.options,
                o = !1,
                n = s.scrollParentNotHidden[0],
                r = s.document[0];
            n !== r && "HTML" !== n.tagName ? (i.axis && "x" === i.axis || (s.overflowOffset.top + n.offsetHeight - t.pageY < i.scrollSensitivity ? n.scrollTop = o = n.scrollTop + i.scrollSpeed : t.pageY - s.overflowOffset.top < i.scrollSensitivity && (n.scrollTop = o = n.scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (s.overflowOffset.left + n.offsetWidth - t.pageX < i.scrollSensitivity ? n.scrollLeft = o = n.scrollLeft + i.scrollSpeed : t.pageX - s.overflowOffset.left < i.scrollSensitivity && (n.scrollLeft = o = n.scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - P(r).scrollTop() < i.scrollSensitivity ? o = P(r).scrollTop(P(r).scrollTop() - i.scrollSpeed) : P(window).height() - (t.pageY - P(r).scrollTop()) < i.scrollSensitivity && (o = P(r).scrollTop(P(r).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (t.pageX - P(r).scrollLeft() < i.scrollSensitivity ? o = P(r).scrollLeft(P(r).scrollLeft() - i.scrollSpeed) : P(window).width() - (t.pageX - P(r).scrollLeft()) < i.scrollSensitivity && (o = P(r).scrollLeft(P(r).scrollLeft() + i.scrollSpeed)))), !1 !== o && P.ui.ddmanager && !i.dropBehaviour && P.ui.ddmanager.prepareOffsets(s, t)
        }
    }), P.ui.plugin.add("draggable", "snap", {
        start: function(t, e, s) {
            var i = s.options;
            s.snapElements = [], P(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var t = P(this),
                    e = t.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function(t, e, s) {
            for (var i, o, n, r, l, a, h, p, c, f = s.options, d = f.snapTolerance, g = e.offset.left, u = g + s.helperProportions.width, m = e.offset.top, v = m + s.helperProportions.height, _ = s.snapElements.length - 1; 0 <= _; _--) a = (l = s.snapElements[_].left - s.margins.left) + s.snapElements[_].width, p = (h = s.snapElements[_].top - s.margins.top) + s.snapElements[_].height, u < l - d || a + d < g || v < h - d || p + d < m || !P.contains(s.snapElements[_].item.ownerDocument, s.snapElements[_].item) ? (s.snapElements[_].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, P.extend(s._uiHash(), {
                snapItem: s.snapElements[_].item
            })), s.snapElements[_].snapping = !1) : ("inner" !== f.snapMode && (i = Math.abs(h - v) <= d, o = Math.abs(p - m) <= d, n = Math.abs(l - u) <= d, r = Math.abs(a - g) <= d, i && (e.position.top = s._convertPositionTo("relative", {
                top: h - s.helperProportions.height,
                left: 0
            }).top), o && (e.position.top = s._convertPositionTo("relative", {
                top: p,
                left: 0
            }).top), n && (e.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left), r) && (e.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left), c = i || o || n || r, "outer" !== f.snapMode && (i = Math.abs(h - m) <= d, o = Math.abs(p - v) <= d, n = Math.abs(l - g) <= d, r = Math.abs(a - u) <= d, i && (e.position.top = s._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), o && (e.position.top = s._convertPositionTo("relative", {
                top: p - s.helperProportions.height,
                left: 0
            }).top), n && (e.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), r) && (e.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: a - s.helperProportions.width
            }).left), !s.snapElements[_].snapping && (i || o || n || r || c) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, P.extend(s._uiHash(), {
                snapItem: s.snapElements[_].item
            })), s.snapElements[_].snapping = i || o || n || r || c)
        }
    }), P.ui.plugin.add("draggable", "stack", {
        start: function(t, e, s) {
            var i, s = s.options,
                s = P.makeArray(P(s.stack)).sort(function(t, e) {
                    return (parseInt(P(t).css("zIndex"), 10) || 0) - (parseInt(P(e).css("zIndex"), 10) || 0)
                });
            s.length && (i = parseInt(P(s[0]).css("zIndex"), 10) || 0, P(s).each(function(t) {
                P(this).css("zIndex", i + t)
            }), this.css("zIndex", i + s.length))
        }
    }), P.ui.plugin.add("draggable", "zIndex", {
        start: function(t, e, s) {
            e = P(e.helper), s = s.options;
            e.css("zIndex") && (s._zIndex = e.css("zIndex")), e.css("zIndex", s.zIndex)
        },
        stop: function(t, e, s) {
            s = s.options;
            s._zIndex && P(e.helper).css("zIndex", s._zIndex)
        }
    }), P.ui.draggable
});
(function(b) {
    b.support.touch = "ontouchend" in document;
    if (!b.support.touch) {
        return;
    }
    var c = b.ui.mouse.prototype,
        e = c._mouseInit,
        a;

    function d(g, h) {
        if (g.originalEvent.touches.length > 1) {
            return;
        }
        g.preventDefault();
        var i = g.originalEvent.changedTouches[0],
            f = document.createEvent("MouseEvents");
        f.initMouseEvent(h, true, true, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, false, false, false, false, 0, null);
        g.target.dispatchEvent(f);
    }
    c._touchStart = function(g) {
        var f = this;
        if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) {
            return;
        }
        a = true;
        f._touchMoved = false;
        d(g, "mouseover");
        d(g, "mousemove");
        d(g, "mousedown");
    };
    c._touchMove = function(f) {
        if (!a) {
            return;
        }
        this._touchMoved = true;
        d(f, "mousemove");
    };
    c._touchEnd = function(f) {
        if (!a) {
            return;
        }
        d(f, "mouseup");
        d(f, "mouseout");
        if (!this._touchMoved) {
            d(f, "click");
        }
        a = false;
    };
    c._mouseInit = function() {
        var f = this;
        f.element.bind("touchstart", b.proxy(f, "_touchStart")).bind("touchmove", b.proxy(f, "_touchMove")).bind("touchend", b.proxy(f, "_touchEnd"));
        e.call(f);
    };
})(jQuery);
! function(h) {
    "use strict";

    function i() {
        0 < h(".portfolio-item, .related-portfolio").length && h(".portfolio-item, .related-portfolio").magnificPopup({
            delegate: "a.popup",
            type: "image",
            tLoading: webgatha_localize.loading_image,
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: webgatha_localize.loading_image_error
            }
        })
    }

    function t() {
        var e = h(".isotope-wrapper");
        0 != e.length && e.each(function() {
            var e = h(this).attr("data-unique_class"),
                t = h("." + e + " .filter-container"),
                a = h('[data-unique_class="' + e + '"]').find(".isotope-filters"),
                e = h('[data-unique_class="' + e + '"]').attr("data-layout"),
                o = new Shuffle(t, {
                    itemSelector: "." + e + "-item",
                    easing: "ease-out"
                });
            a.on("click", "button", function() {
                var e = parseInt(h(this).attr("data-filter"));
                o.filter(e)
            }), a.each(function(e, t) {
                var a = h(t);
                a.on("click", "button", function() {
                    a.find(".active").removeClass("active"), h(this).addClass("active")
                })
            })
        })
    }

    function p(e) {
        var t, a, o, i, s = e.innerWidth(),
            n = e.innerHeight();
        s / n < 16 / 9 ? (t = n * (16 / 9), a = n, o = -Math.round((t - s) / 2) + "px", i = -Math.round((a - n) / 2) + "px") : (a = (t = s) * (9 / 16), i = -Math.round((a - n) / 2) + "px", o = -Math.round((t - s) / 2) + "px"), t += "px", a += "px", e.find(".intro_header_video-bg iframe").css({
            maxWidth: "1000%",
            marginLeft: o,
            marginTop: i,
            width: t,
            height: a
        })
    }

    function l() {
        var e = h("header.site-header").height(),
            t = h(window).width();
        (h(".header-main-wrapper").hasClass("mobile_sticky_header") && t <= 992 || h(".header-main-wrapper").hasClass("sticky_header") && 991 < t) && (h("header.site-header").css("min-height", e + "px"), h(window).scrollTop() > e ? (h(".header-main-wrapper").addClass("fixed-top"), h("body").hasClass("admin-bar") && 992 <= t && h(".header-main-wrapper").addClass("top-32")) : (h(".header-main-wrapper").removeClass("fixed-top"), h("body").hasClass("admin-bar") && 992 <= t && h(".header-main-wrapper").removeClass("top-32")))
    }

    function d() {
        var a = 0,
            e = h(window).scrollTop(),
            t = h(window).width(),
            o = 0,
            i = 0,
            s = 0,
            n = 0,
            r = 0,
            l = 0,
            d = !0,
            c = !0;
        if (h("body").hasClass("admin-bar") && 0 < h("#wpadminbar").length && "fixed" == h("#wpadminbar").css("position") && (o = h("#wpadminbar").outerHeight()), t <= 992) {
            if (h(".header-main-wrapper").hasClass("whb-header-sticky") || 0 < h(".mobile-sticky-on").length && (i = h(".mobile-sticky-on").first().offset().top), h.each(h(".header-row"), function(e, t) {
                    e++, n += h(this).outerHeight(), h(this).hasClass("mobile-sticky-off") && 1 == e ? (l = h(this).outerHeight(), i = l, c = !1) : h(this).hasClass("mobile-sticky-off") && 2 == e ? (l = n, c || (i = l)) : h(this).hasClass("mobile-sticky-off") && 3 == e && (l = n)
                }), 0 == h(".header-row.mobile-sticky-on").length) return;
            h(".header-main-wrapper").addClass("whb-sticky-enabled"), e <= l && e <= i ? (h(".header-row.mobile-sticky-off").show(), h(".header-main-wrapper").removeClass("whb-header-sticky"), h(".header-main-wrapper").addClass("whb-header-not-sticky")) : (h(".header-main-wrapper").addClass("whb-header-sticky"), h(".header-main-wrapper").removeClass("whb-header-not-sticky"), h(".header-row.mobile-sticky-off").hide())
        } else if (992 < t) {
            if (h(".header-main-wrapper").hasClass("whb-header-sticky") || 0 < h(".desktop-sticky-on").length && (s = h(".desktop-sticky-on").first().offset().top - o), h.each(h(".header-row"), function(e, t) {
                    e++, n += h(this).outerHeight(), h(this).hasClass("desktop-sticky-off") && 1 == e ? (r = h(this).outerHeight(), s = r, d = !1) : h(this).hasClass("desktop-sticky-off") && 2 == e ? (r = n, d || (s = r)) : h(this).hasClass("desktop-sticky-off") && 3 == e && (r = n)
                }), 0 == h(".header-row.desktop-sticky-on").length) return;
            h(".header-main-wrapper").addClass("whb-sticky-enabled"), !(e <= r && e <= s) && s < e ? (h(".header-main-wrapper").css({
                top: o
            }), h(".header-main-wrapper").addClass("whb-header-sticky"), h(".header-main-wrapper").removeClass("whb-header-not-sticky"), h(".header-row.desktop-sticky-off").hide()) : (h(".header-main-wrapper").css({
                top: 0
            }), h(".header-row.desktop-sticky-off").show(), h(".header-main-wrapper").removeClass("whb-header-sticky"), h(".header-main-wrapper").addClass("whb-header-not-sticky"))
        }
        h.each(h(".header-row"), function(e, t) {
            a += h(this).outerHeight()
        }), h(".header-wrapper.custom-header").css({
            paddingTop: a
        })
    }

    function c() {
        0 < h(".deal-counter-wrapper").length && h(".deal-counter-wrapper").each(function() {
            var a = h(this),
                o = a.find(".deal-counter"),
                e = o.data("countdown-date"),
                i = o.data("counter_data");
            a.parent().hasClass("pgscore_banner-content-inner-wrapper") ? a.closest(".pgscore_banner-content-inner-wrapper").find(".pgscore_banner-btn") : (a.closest(".deal-banner"), a.find(".deal-button"));
            o.countdown(e).on("update.countdown", function(e) {
                a.parent().find(".expire-message").hide();
                var t = '<ul class="countdown">',
                    t = (t = (t = (t = 0 < e.offset.totalDays ? t + '<li><div class="countdown-item"><span class="days">%-D</span><p class="days_ref smalltxt">' + i.days + "</p></div></li>" : t) + '<li><div class="countdown-item"><span class="hours">%H</span><p class="hours_ref smalltxt">' + i.hours + "</p></div></li>") + '<li><div class="countdown-item"><span class="minutes">%M</span><p class="minutes_ref smalltxt">' + i.minutes + "</p></div></li>") + '<li><div class="countdown-item"><span class="seconds">%S</span><p class="seconds_ref smalltxt">' + i.seconds + "</p></div></li>";
                o.html(e.strftime(t += "</ul>"))
            }).on("finish.countdown", function(e) {
                a.addClass("deal-expired"), o.html('<span class="deal-expire-message">' + i.expiremsg + "</span>").addClass("deal-counter-expired").removeAttr("data-counter_data").removeAttr("data-countdown-date"), a.parent().find(".expire-message").show()
            })
        })
    }

    function u() {
        var o = (h("body").hasClass("webgatha-site-layout-fullwidth") ? h(window) : h("#page")).width();
        h("ul.webgatha-megamenu-enable > li").each(function(e) {
            var t, a;
            h(this).hasClass("webgatha-menu-item-mega-menu") && 0 < h(this).find(".webgatha_menu_nav-sublist-dropdown").length && (t = h(this).find(".webgatha_menu_nav-sublist-dropdown").outerWidth(), (a = h(this).offset().left - h("#page").offset().left) + t <= o || (a = a + t - o, h(this).hasClass("webgatha-mega-menu-full-width") || (a += 15), h(this).find(".webgatha_menu_nav-sublist-dropdown").css("left", "-" + a + "px"))), 0 < h(this).find(".webgatha-menu-html-block").length && (t = h(this).find(".webgatha-menu-html-block").outerWidth(), (a = h(this).offset().left - h("#page").offset().left) + t <= o || (a = a + t - o, h(this).hasClass("webgatha-mega-menu-full-width") || (a += 15), h(this).find(".webgatha-menu-html-block").css("left", "-" + a + "px")))
        })
    }

    function m() {
        var e = h(window).height(),
            t = h("body").height();
        h("body").hasClass("admin-bar") && (h(window).width() < 783 ? t += 46 : t += 32), t < e && (e = e - t + h("div.site-content").height(), h("div.site-content").css("min-height", e + "px"))
    }

    function r(e) {
        var t, a, o = jQuery(this).attr("href"),
            i = window.location.href;
        void 0 !== o && (a = o.substr(0, o.lastIndexOf("#")), -1 < window.location.href.indexOf("#") && (i = i.substr(0, i.lastIndexOf("#"))), t = this.getAttribute("href").split("#"), a + "/" == i || a == i || a == i + "/" ? (e.preventDefault(), document.querySelector("#" + t[1]).scrollIntoView({
            behavior: "smooth"
        })) : o && -1 < o.indexOf("#") && "#" != o && (o.split("#")[0] || null != document.querySelector(o) && (e.preventDefault(), a = jQuery(window).width(), i = jQuery(o).offset().top, a <= 992 ? (jQuery(".header-main-wrapper").hasClass("whb-sticky-enabled") || jQuery(".header-main-wrapper").hasClass("sticky_header")) && (i -= webgatha_localize.sticky_mobile_height) : 992 < a && (0 < jQuery("#wpadminbar").length && (i -= jQuery("#wpadminbar").outerHeight()), jQuery(".header-main-wrapper").hasClass("whb-sticky-enabled") || jQuery(".header-main-wrapper").hasClass("sticky_header")) && (i -= webgatha_localize.sticky_desktop_height), window.scroll({
            top: i,
            left: 0,
            behavior: "smooth"
        }))))
    }

    function a(e) {
        var s = h(document).scrollTop(),
            t = h(window).width(),
            n = 0;
        t <= 992 ? (h(".header-main-wrapper").hasClass("whb-sticky-enabled") || h(".header-main-wrapper").hasClass("sticky_header")) && (n = webgatha_localize.sticky_mobile_height) : 992 < t && (h(".header-main-wrapper").hasClass("whb-sticky-enabled") || h(".header-main-wrapper").hasClass("sticky_header")) && (n = webgatha_localize.sticky_desktop_height), h(".webgatha-menu a").each(function() {
            var e, t, a = h(this),
                o = a.attr("href"),
                i = (void 0 !== o && (i = o.split("#"), i = h("#" + i[1])), this.addEventListener("click", r), void 0 !== i && i.position() && (e = i.position().top, t = i.height()), parseFloat(s) + parseFloat(n) + 5);
            (e < i || e == i) && i < e + t ? a.parent().addClass("current-menu-item") : void 0 !== o && -1 < o.indexOf("#") && a.parent().removeClass("current-menu-item")
        })
    }
    h(window).load(function() {
        var e;
        h("#load").fadeOut(), h("#preloader").delay(200).fadeOut("slow"), e ? e.find(".swiper-container").each(function() {
            var e = h(this),
                e = e.attr("data-swiper_options") ? e.data("swiper_options") : {};
            new Swiper(h(this), e)
        }) : h(".swiper-container").each(function() {
            var e;
            h(this).is(":hidden") || (e = (e = h(this)).attr("data-swiper_options") ? e.data("swiper_options") : {}, new Swiper(h(this), e))
        }), 0 < h(".upsell-swiper-container").length && (e = h(".upsell-swiper-container").attr("data-column"), new Swiper(".upsell-swiper-container", {
            init: !0,
            slidesPerView: e,
            spaceBetween: 30,
            loop: !1,
            autoHeight: !1,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        })), 0 < h(".related-swiper-container").length && (e = h(".related-swiper-container").attr("data-column"), new Swiper(".related-swiper-container", {
            init: !0,
            slidesPerView: e,
            spaceBetween: 30,
            loop: !1,
            autoHeight: !1,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            }
        })), 0 < h(".cross-sells-swiper-container").length && (e = h(".cross-sells-swiper-container").attr("data-column"), new Swiper(".cross-sells-swiper-container", {
            init: !0,
            slidesPerView: e,
            spaceBetween: 30,
            loop: !1,
            autoHeight: !1,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        })), t(), h(document.body).on("webgatha_isotope_trigger", function() {
            t()
        }), e = document.querySelectorAll(".masonry-main .masonry"), h.each(e, function(e, t) {
            var a = h(".filter-container");
            a.hasClass("enable-filter") || new Shuffle(a, {
                itemSelector: ".masonry-item"
            })
        }), u(), document.addEventListener("focus", function(e) {
            e = h(e.target);
            h(".main-navigation ul  li").removeClass("focus"), e.is(".main-navigation > div > ul > li a") && e.closest("li.menu-item").addClass("focus"), h(".main-navigation ul  li").hasClass("focus") && h(h(".main-navigation ul  li.focus")).parents("li.menu-item").addClass("focus")
        }, !0), h("body").hasClass("webgatha-one-page") && 0 < h(".webgatha-menu").length && ((e = window.location.href.split("#"))[1] && null != document.querySelector("#" + e[1]) && document.querySelector("#" + e[1]).scrollIntoView(), h("ul.webgatha-menu li a").each(function() {
            this.addEventListener("click", r)
        }), webgatha_localize.home_url + "/" != e[0] && webgatha_localize.home_url != e[0] && webgatha_localize.home_url != e[0] + "/" || (h("ul.webgatha-menu li").each(function() {
            h(this).removeClass("current-menu-item")
        }), h(".webgatha-menu").find("li").first().addClass("current-menu-item")), h(document).on("scroll", a))
    }), h(document).ready(function() {
        new Swiper(".blog-gallery-swiper-container", {
            init: !0,
            pagination: {
                el: ".webgatha-gallery-swiper-pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".webgatha-gallery-slider-button-next",
                prevEl: ".webgatha-gallery-slider-button-prev"
            }
        });
        m(), u(), h(document).on("click", "ul.webgatha-megamenu-enable > li.webgatha-menu-item-open-on-click > a", function(e) {
            h(this).parent(".webgatha-menu-item-open-on-click").hasClass("webgatha-menu-item-link-enable") && (!h(this).parent(".webgatha-menu-item-open-on-click").hasClass("webgatha-menu-item-link-enable") || h(this).parent(".webgatha-menu-item-open-on-click").hasClass("webgatha-menu-item-clicked")) || (e.preventDefault(), h(this).parent(".webgatha-menu-item-open-on-click").hasClass("webgatha-menu-item-clicked") ? h(this).parent(".webgatha-menu-item-open-on-click").removeClass("webgatha-menu-item-clicked") : (h(".webgatha-menu-item-open-on-click").removeClass("webgatha-menu-item-clicked"), h(this).parent(".webgatha-menu-item-open-on-click").addClass("webgatha-menu-item-clicked")))
        }), h(document).on("click", function(e) {
            e = e.target;
            h(".focus").removeClass("focus"), h(e).parents().is(".webgatha-menu-item-open-on-click") || h("ul.webgatha-megamenu-enable > li.webgatha-menu-item-open-on-click").hasClass("webgatha-menu-item-clicked") && h("ul.webgatha-megamenu-enable > li.webgatha-menu-item-open-on-click").removeClass("webgatha-menu-item-clicked"), h(e).parents().is(".search-button-wrap-inner") || 0 < h(".webgatha-search-form-open").length && (h(".webgatha-search-form-open").removeClass("webgatha-search-form-open"), h(".webgatha-search-open").removeClass("webgatha-search-open"))
        }), h(document).on("click", ".webgatha-header-search-btn", function(e) {
            e.preventDefault();
            var t = "";
            h(this).next("div.search_form-input-wrap").hasClass("webgatha-search-form-open") ? (h(this).next("div.search_form-input-wrap").removeClass("webgatha-search-form-open"), t = h(this).next("div.search_form-input-wrap").find("input.webgatha-search-form"), setTimeout(function() {
                t.blur()
            }, 200)) : (h(this).next("div.search_form-input-wrap").addClass("webgatha-search-form-open"), t = h(this).next("div.search_form-input-wrap").find("input.webgatha-search-form"), setTimeout(function() {
                t.focus()
            }, 200)), h(this).parents("div.search-button-wrap-inner").hasClass("webgatha-search-open") ? h(this).parents("div.search-button-wrap-inner").removeClass("webgatha-search-open") : h(this).parents("div.search-button-wrap-inner").addClass("webgatha-search-open")
        }), h("input.webgatha-search-form").each(function() {
            h(this).autocomplete({
                search: function(e, t) {
                    h(".webgatha-auto-complete ul").empty(), h(".webgatha-auto-complete").addClass("webgatha-auto-complete-empty")
                },
                source: function(e, t) {
                    var a = this.element.parents("div.search_form-search-field").attr("data-post_type"),
                        o = this.element.val(),
                        i = this.element.parents("div.search_form-search-field");
                    h.ajax({
                        url: webgatha_localize.ajax_url,
                        type: "POST",
                        dataType: "json",
                        data: {
                            action: "webgatha_auto_complete_search",
                            search_keyword: o,
                            post_type: a,
                            nonce: webgatha_localize.ajax_nonce
                        },
                        beforeSend: function() {
                            i.addClass("ui-autocomplete-loader")
                        },
                        success: function(e) {
                            t(h.map(e, function(e) {
                                return {
                                    image: e.post_img,
                                    title: e.post_title,
                                    link: e.post_link
                                }
                            }))
                        }
                    }).done(function() {
                        i.removeClass("ui-autocomplete-loader")
                    })
                },
                minLength: 2
            }).data("ui-autocomplete")._renderItem = function(e, t) {
                e.remove();
                e = (e = "") + '<a href="' + t.link + '"><div class="search-item-container">';
                return t.image && (e += '<div class="search-item-image">' + t.image + "</div>"), e = (e += '<div class="search-item-title">' + t.title + "</div>") + "</div>" + "</a>", h(".webgatha-auto-complete").removeClass("webgatha-auto-complete-empty"), h("<li class='ui-menu-item'></li>").data("ui-autocomplete-item", t).append(e).appendTo(h(".webgatha-auto-complete ul"))
            }
        }), h(document).on("click", function(e) {
            h(e.target).parents().andSelf().is("input.webgatha-search-form") || (h("ul.search_form-autocomplete .ui-menu-item").remove(), h(".webgatha-auto-complete").addClass("webgatha-auto-complete-empty"))
        }), h("input.webgatha-search-form").keyup(function() {
            h(this).val().length < 1 && (h(".webgatha-auto-complete ul").empty(), h(".webgatha-auto-complete").addClass("webgatha-auto-complete-empty"))
        }), h("#back-to-top").hide(), h(window).on("scroll", function() {
            100 < h(window).scrollTop() ? h("#back-to-top").fadeIn(1500) : h("#back-to-top").fadeOut(1500), setTimeout(function() {
                u()
            }, 200)
        }), h("#back-to-top").on("click", function() {
            return h("body,html").animate({
                scrollTop: 0
            }, 1e3), !1
        }), 0 != h(".commingsoon_countdown").length && (a = h(".commingsoon_countdown"), e = h(a).data("countdown_date"), o = h(a).data("counter_data"), h(a).countdown(e).on("update.countdown", function(e) {
            var t = "",
                t = (t = (t = (t = 0 < e.offset.totalDays ? t + '<li><span class="days">%-D</span><p class="days_ref">' + o.days + "</p></li>" : t) + '<li><span class="hours">%H</span><p class="hours_ref">' + o.hours + "</p></li>") + '<li><span class="minutes">%M</span><p class="minutes_ref">' + o.minutes + "</p></li>") + '<li><span class="seconds">%S</span><p class="seconds_ref">' + o.seconds + "</p></li>";
            a.html(e.strftime(t))
        })), h(".intro_header_video-bg").each(function() {
            var t, a, e = h(this),
                o = e.find("iframe"),
                i = e.parent(),
                s = e.data("video_type"),
                n = e.data("video_link"),
                r = o.attr("src"),
                l = r,
                d = {},
                c = "";
            "vimeo" == s ? d = {
                background: 1,
                autoplay: 1,
                muted: 1,
                loop: 1,
                quality: "540p"
            } : "youtube" == s && (d = {
                playlist: function(e) {
                    if (void 0 === e) return !1;
                    e = e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                    return null !== e && e[1]
                }(n),
                iv_load_policy: 3,
                enablejsapi: 1,
                disablekb: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                rel: 0,
                loop: 1,
                wmode: "transparent",
                mute: 1,
                modestbranding: 1
            }), t = d, a = "", Object.keys(t).forEach(function(e) {
                a += e + "=" + t[e] + "&"
            }), c = a.substr(0, a.length - 1), l = -1 !== r.indexOf("?") ? r + "&" + c : r + "?" + c, h(o).attr("src", l), h(e).css("opacity", "1"), p(i), h(window).on("resize", function() {
                p(i)
            })
        }), "accepted" == Cookies.get("webgatha_cookies") && h(".webgatha-cookies-info").hide(), h(document).on("click", ".cookies-info-accept-btn", function(e) {
            e.preventDefault(), t()
        });
        var a, e, o, t = function() {
                h(".webgatha-cookies-info").hide(), Cookies.set("webgatha_cookies", "accepted", {
                    expires: 60,
                    path: "/"
                })
            },
            s = (0 < h("header.site-header").length && (h("header.site-header").hasClass("header-type-default") ? l : d)(), h(window).scroll(function(e) {
                0 < h("header.site-header").length && (h("header.site-header").hasClass("header-type-default") ? l : d)()
            }), jQuery(window).scroll(function() {
                "undefined" != typeof VcWaypoint && h.isFunction(VcWaypoint) && VcWaypoint.refreshAll()
            }), h(window).on("resize", function(e) {
                0 < h("header.site-header").length && (h("header.site-header").hasClass("header-type-default") ? l : d)(), u()
            }), h(document).on("click", ".woo-tools-compare > a", function(e) {
                e.preventDefault();
                e = this.href;
                void 0 !== e && h("body").trigger("yith_woocompare_open_popup", {
                    response: e,
                    button: h(this)
                })
            }), c(), h(document.body).on("webgatha_countdown_trigger", function() {
                c()
            }), h(".open-quick-view").on("click", function(e) {
                e.preventDefault();
                var e = h(this).data("id"),
                    t = h(this),
                    e = (t.addClass("loading"), {
                        id: e,
                        action: "webgatha_quick_view",
                        nonce: webgatha_localize.ajax_nonce
                    });
                h.ajax({
                    url: webgatha_localize.ajax_url,
                    data: e,
                    method: "get",
                    success: function(e) {
                        h.magnificPopup.open({
                            items: {
                                src: '<div class="mfp-with-anim webgatha-popup webgatha-popup-quick-view">' + e + "</div>",
                                type: "inline"
                            }
                        })
                    },
                    complete: function() {
                        t.removeClass("loading"), 0 < h(".variations_form").length && (h(".product-quick-view .variations_form").wc_variation_form(), h(document).on("change", ".variations_form", function() {
                            var e = h(".variations_form").data("product_variations"),
                                t = h(".variations_form").find(".single_variation_wrap"),
                                e = e.filter(function(e) {
                                    return e.variation_id == ("" != (e = h(t).find('.variations_button input[name="variation_id"]').val()) && e)
                                });
                            void 0 === e[0] && !e[0] || (e[0] && e[0].image && e[0].image.src && 1 < e[0].image.src.length && h("img#product-zoom").attr("src", e[0].image.url), h(document).on("click", ".reset_variations", function() {
                                h("img#product-zoom").attr("src", h("img#product-zoom").attr("data-zoom-image"))
                            }))
                        }))
                    }
                })
            }), h(window).on("load resize", function() {
                var e;
                h(".footer-wrapper").hasClass("webgatha-sticky-footer") && (e = h(".site-footer .footer-wrapper").height(), h("footer.site-footer").height(e))
            }), h(document).on("click", ".show-off-canvas-sidebar-btn", function(e) {
                e.preventDefault(), h("body").addClass("webgatha-offcanvas-open");
                e = h(".close-sidebar-widget").parents(".sidebar");
                e.hasClass("shop_sidebar-open") ? (e.removeClass("shop_sidebar-open"), h(".shop-sidebar-widgets-overlay").hasClass("shop_sidebar_widgets-show") && h(".shop-sidebar-widgets-overlay").removeClass("shop_sidebar_widgets-show")) : (e.addClass("shop_sidebar-open"), h(".shop-sidebar-widgets-overlay").hasClass("shop_sidebar_widgets-show") || h(".shop-sidebar-widgets-overlay").addClass("shop_sidebar_widgets-show"))
            }), h(document).on("click", ".close-sidebar-widget-btn", function(e) {
                h("body").removeClass("webgatha-offcanvas-open"), e.preventDefault();
                e = h(this).parents(".sidebar");
                e.hasClass("shop_sidebar-open") && (e.removeClass("shop_sidebar-open"), h(".shop-sidebar-widgets-overlay").removeClass("shop_sidebar_widgets-show"), h(".shop-sidebar-widgets-overlay").hasClass("shop_sidebar_widgets-show")) && h(".shop-sidebar-widgets-overlay").removeClass("shop_sidebar_widgets-show")
            }), h(document).on("click", ".shop-sidebar-widgets-overlay", function(e) {
                e.preventDefault(), h("body").removeClass("webgatha-offcanvas-open"), h(this).hasClass("shop_sidebar_widgets-show") && (h(this).next(".sidebar").removeClass("shop_sidebar-open"), h(".shop-sidebar-widgets-overlay").removeClass("shop_sidebar_widgets-show"), h(".shop-sidebar-widgets-overlay").hasClass("shop_sidebar_widgets-show")) && h(".shop-sidebar-widgets-overlay").removeClass("shop_sidebar_widgets-show")
            }), h(document.body).on("added_to_cart", function() {
                0 != h(".side_shopping_cart-wrapper").length && (h(".side_shopping_cart-overlay").addClass("side_cart-show"), h(".side_shopping_cart-wrapper").addClass("side_shopping_cart-show")), 0 != h(".after_add_to_cart_message-wrapper").length && h.magnificPopup.open({
                    items: {
                        removalDelay: 500,
                        src: "#after_add_to_cart_message-popup",
                        type: "inline"
                    }
                }), 0 != h(".after_add_to_cart_message-wrapper").length && h(".after_add_to_cart_message-wrapper").addClass("side_cart-show")
            }), h(".close-popup").on("click", function(e) {
                e.preventDefault(), h.magnificPopup.close()
            }), h(document).on("click", ".close-side_shopping_cart", function(e) {
                e.preventDefault(), h(".side_shopping_cart-wrapper").hasClass("side_shopping_cart-show") && h(".side_shopping_cart-wrapper").removeClass("side_shopping_cart-show"), h(".side_shopping_cart-overlay").hasClass("side_cart-show") && h(".side_shopping_cart-overlay").removeClass("side_cart-show")
            }), h(document).on("click", ".side_shopping_cart-overlay", function() {
                h(".close-side_shopping_cart").click()
            }), h(".product-more-button a").on("click", function(e) {
                e.preventDefault();
                var r = this,
                    e = h(this).data("next_link");
                h(r).hasClass("disabled") || h.ajax({
                    url: e,
                    beforeSend: function(e) {
                        h(r).html(webgatha_localize.load_more), h(r).addClass("content-loading")
                    }
                }).done(function(e) {
                    h(r).removeClass("content-loading");
                    var t, a, e = h(e),
                        o = e.find(".product-more-button").html(),
                        e = e.find("ul.products-loop"),
                        i = h(o).data("next_link"),
                        s = h(o).data("max_pages"),
                        n = h(o).data("next_page"),
                        o = h(o).data("current_page");
                    o < s ? (h(r).html(webgatha_localize.load_more), h(r).data("next_link", i), h(r).data("max_pages", s), h(r).data("next_page", n), h(r).data("current_page", o)) : h(r).html(webgatha_localize.no_more_product).addClass("disabled"), h("li.product").last().after(e.html()), h("ul.products-loop").hasClass("grid") && (t = 0, a = h("ul.products-loop").data("column"), h("ul.products-loop").find("li").each(function() {
                        void 0 !== h(this).find(".product-inner").html() && t++, h(this).hasClass("first") ? h(this).removeClass("first") : h(this).hasClass("last") && h(this).removeClass("last"), a == t ? (h(this).addClass("last"), t = 0) : 1 == t && h(this).addClass("first")
                    }))
                })
            }), 1),
            n = (h(window).scroll(function() {
                var e, t, a, o, i;
                0 < h(".product-infinite_scroll").length && (e = h(".product-more-button a"), t = Math.round(e.offset().top), a = e.height(), o = h(window).height() + h(window).scrollTop(), i = e.data("current_page"), t + a < o) && setTimeout(function() {
                    i != s || e.hasClass("content-loading") || (s++, e.trigger("click"))
                }, 200)
            }), h(".portfolio-more-button a").on("click", function(e) {
                e.preventDefault();
                var i = this,
                    e = h(this).data("next_link");
                h(i).hasClass("disabled") || h.ajax({
                    url: e,
                    beforeSend: function(e) {
                        h(i).html(webgatha_localize.load_more), h(i).addClass("content-loading"), h(i).parents(".portfolio-more-button").prev().addClass("content-loading")
                    }
                }).done(function(e) {
                    h(i).removeClass("content-loading"), h(i).parents(".portfolio-more-button").prev().removeClass("content-loading");
                    var e = h(e),
                        t = e.find(".portfolio-more-button").html(),
                        e = e.find("div.portfolio-content-area .filter-container").html(),
                        e = (h(".portfolio-shuffle-item").last().after(e), h(t).data("next_link")),
                        a = h(t).data("max_pages"),
                        o = h(t).data("next_page"),
                        t = h(t).data("current_page");
                    t < a ? (h(".div.portfolio-content-area").hasClass("portfolio-infinite_scroll") || h(i).html(webgatha_localize.load_more), h(i).data("next_link", e), h(i).data("max_pages", a), h(i).data("next_page", o), h(i).data("current_page", t)) : h(i).hide(), 0 < h(".isotope-wrapper").length && setTimeout(function() {
                        var e = h(".filter-container");
                        new Shuffle(e, {
                            itemSelector: ".portfolio-shuffle-item"
                        })
                    }, 200)
                })
            }), 1),
            r = (h(window).scroll(function() {
                var e, t, a, o, i;
                0 < h(".portfolio-infinite_scroll").length && (e = h(".portfolio-more-button a"), t = Math.round(e.offset().top), a = e.height(), o = h(window).height() + h(window).scrollTop(), i = e.data("current_page"), t + a < o) && setTimeout(function() {
                    i != n || e.hasClass("content-loading") || (n++, e.trigger("click"))
                }, 200)
            }), h(".team-more-button a").on("click", function(e) {
                e.preventDefault();
                var i = this,
                    e = h(this).data("next_link");
                h(i).hasClass("disabled") || h.ajax({
                    url: e,
                    beforeSend: function(e) {
                        h(i).html(webgatha_localize.load_more), h(i).addClass("content-loading"), h(i).parents(".portfolio-more-button").prev().addClass("content-loading")
                    }
                }).done(function(e) {
                    h(i).removeClass("content-loading"), h(i).parents(".portfolio-more-button").prev().removeClass("content-loading");
                    var e = h(e),
                        t = e.find(".team-more-button").html(),
                        e = e.find("div.team-content-area .team-items-container").html(),
                        e = (h(".team-item").last().after(e), h(t).data("next_link")),
                        a = h(t).data("max_pages"),
                        o = h(t).data("next_page"),
                        t = h(t).data("current_page");
                    t < a ? (h("div.team-content-area").hasClass("team-infinite_scroll") || h(i).html(webgatha_localize.load_more), h(i).data("next_link", e), h(i).data("max_pages", a), h(i).data("next_page", o), h(i).data("current_page", t)) : h(i).hide(), 0 != h(".isotope-wrapper").length && setTimeout(function() {
                        var e = h(".filter-container");
                        new Shuffle(e, {
                            itemSelector: ".team-item"
                        })
                    }, 200)
                })
            }), 1);
        h(window).scroll(function() {
            var e, t, a, o, i;
            0 < h(".team-infinite_scroll").length && (e = h(".team-more-button a"), t = Math.round(e.offset().top), a = e.height(), o = h(window).height() + h(window).scrollTop(), i = e.data("current_page"), t + a < o) && setTimeout(function() {
                i != r || e.hasClass("content-loading") || (r++, e.trigger("click"))
            }, 200)
        }), h("#site-navigation-mobile").slicknav({
            label: "",
            appendTo: "#site-navigation-mobile",
            allowParentLinks: !0,
            closedSymbol: "&#43;",
            openedSymbol: "&#45;",
            init: function() {
                var e = h("#site-navigation-mobile").find(".slicknav_btn");
                h(e).hasClass("slicknav_collapsed") ? h(".mobile-menu-trigger").removeClass("mobile-menu-trigger-closed mobile-menu-trigger-opened").addClass("mobile-menu-trigger-closed") : h(".mobile-menu-trigger").removeClass("mobile-menu-trigger-closed mobile-menu-trigger-opened").addClass("mobile-menu-trigger-opened")
            },
            afterOpen: function(e) {
                h(e).hasClass("slicknav_collapsed") ? h(".mobile-menu-trigger").removeClass("mobile-menu-trigger-closed mobile-menu-trigger-opened").addClass("mobile-menu-trigger-closed") : h(".mobile-menu-trigger").removeClass("mobile-menu-trigger-closed mobile-menu-trigger-opened").addClass("mobile-menu-trigger-opened")
            },
            afterClose: function(e) {
                h(e).hasClass("slicknav_collapsed") ? h(".mobile-menu-trigger").removeClass("mobile-menu-trigger-closed mobile-menu-trigger-opened").addClass("mobile-menu-trigger-closed") : h(".mobile-menu-trigger").removeClass("mobile-menu-trigger-closed mobile-menu-trigger-opened").addClass("mobile-menu-trigger-opened")
            }
        }), h(document).on("click", ".mobile-menu-trigger", function(e) {
            e.stopPropagation(), h("#site-navigation-mobile").slicknav("toggle")
        }), h(document).on("click", ".menu-item a", function(e) {
            !h("body").hasClass("webgatha-one-page") || h(this).hasClass("slicknav_item") || (e.stopPropagation(), h("#site-navigation-mobile").slicknav("toggle"))
        }), h(document.body).on("added_to_wishlist removed_from_wishlist", function() {
            h.ajax({
                url: webgatha_localize.ajax_url,
                type: "post",
                data: {
                    action: "webgatha_get_wishlist_number",
                    nonce: webgatha_localize.ajax_nonce
                },
                dataType: "json",
                success: function(e) {
                    h(".webgatha-wishlist-count").html(e)
                }
            })
        }), h(window).scroll(function() {
            0 < h(".webgatha-el-sticky").length && 768 < h(window).width() && h(".webgatha-el-sticky").each(function(e, t) {
                var a = 30,
                    o = (0 < !h(this).parent(".elementor-container").find(".webgatha-el-column-spacer").length && h('<div class="webgatha-el-column-spacer"></div>').insertBefore(this), 0 < h(".header-row").length && h(".header-row.desktop-sticky-on").each(function(e, t) {
                        a += h(this).outerHeight()
                    }), 0 < h("#wpadminbar").length && (a += h("#wpadminbar").outerHeight()), h(this).parent(".elementor-container").offset().top),
                    i = h(this).offset().left,
                    s = h(this).outerWidth(),
                    n = h(this).parent(".elementor-container").offset().top,
                    r = h(this).parent(".elementor-container").offset().top + h(this).parent(".elementor-container").outerHeight() - h(this).find(".elementor-widget-wrap").outerHeight() - a;
                h(window).scrollTop() + a > o && h(window).scrollTop() < r && (o = h(this).attr("class").replace("webgatha-el-sticky", ""), h(this).prev(".webgatha-el-column-spacer").addClass(o), h(this).removeAttr("style"), h(this).css({
                    position: "fixed",
                    top: a + "px",
                    left: i + "px",
                    width: s + "px"
                })), (h(window).scrollTop() > r || n - a > h(window).scrollTop()) && (n - a > h(window).scrollTop() && (h(this).prev(".webgatha-el-column-spacer").attr("class", "webgatha-el-column-spacer"), h(this).prev(".webgatha-el-column-spacer").removeAttr("style"), h(this).removeAttr("style")), h(window).scrollTop() > r) && (o = h(window).scrollTop() - r, o = a - o, h(this).css({
                    position: "fixed",
                    top: o + "px",
                    left: i + "px",
                    width: +s + "px"
                }))
            }), 0 < h(".webgatha-column-sticky").length && 0 < h(".vc_row").length && 768 < h(window).width() && h(".webgatha-column-sticky").each(function(e, t) {
                var a = (a = parseInt(h(this).attr("data-top-offset"))) || 0,
                    o = h(this).parent(".vc_row").offset().top,
                    i = h(this).offset().left,
                    s = h(this).outerWidth(),
                    n = h(this).parent(".vc_row").offset().top,
                    r = h(this).parent(".vc_row").offset().top + h(this).parent(".vc_row").outerHeight() - h(this).outerHeight() - a;
                h(window).scrollTop() + a > o && h(window).scrollTop() < r && (o = h(this).attr("class").replace(" webgatha-column-sticky", ""), h(this).prev(".webgatha-column-spacer").addClass(o), h(this).removeAttr("style"), h(this).css({
                    position: "fixed",
                    top: a + "px",
                    left: i + "px",
                    width: s + "px"
                })), (h(window).scrollTop() > r || n - a > h(window).scrollTop()) && (h(this).prev(".webgatha-column-spacer").attr("class", "webgatha-column-spacer"), h(this).prev(".webgatha-column-spacer").removeAttr("style"), h(this).removeAttr("style"), h(window).scrollTop() > r) && h(this).css({
                    position: "relative",
                    top: "" + h(this).parent(".vc_row").outerHeight() - h(this).outerHeight() - a + "px"
                })
            }), 0 < h(".col-team-profile").length && 992 < h(window).width() && h(".team-profile-cover").each(function(e, t) {
                var a, o, i, s, n, r;
                h(this).outerHeight() < h(this).parents(".col-team-profile").siblings(".col-team-content").outerHeight() && (a = h(".sticky_header").outerHeight() + 30, o = h(this).parents(".row").offset().top, i = h(this).offset().left, s = h(this).outerWidth(), n = h(this).parents(".row").offset().top + h(this).parents(".row").outerHeight() - h(this).outerHeight() - a, r = h(this).parents(".row").offset().top, h(window).scrollTop() + a > o && h(window).scrollTop() < n && (h(this).removeAttr("style"), h(this).css({
                    position: "fixed",
                    top: a + "px",
                    left: i + "px",
                    width: s + "px"
                })), h(window).scrollTop() > n || r - a > h(window).scrollTop()) && (h(this).removeAttr("style"), h(window).scrollTop() > n) && h(this).css({
                    position: "absolute",
                    bottom: "0",
                    left: "",
                    width: "calc( 100% - 30px )"
                })
            })
        }), i(), h(document.body).on("webgatha_magnific_popup_trigger", function() {
            i()
        }), h(document).on("click", ".webgatha_team_wrapper .team, .webgatha_infobox_wrapper .webgatha-infobox, .webgatha_portfolio_wrapper .portfolio-item", function(e) {
            e.stopPropagation()
        }), h(".comment-form").on("submit", function(t) {
            h("input").each(function() {
                var e;
                "true" === jQuery(this).attr("aria-required") && ("" == (e = jQuery(this).val()) ? (jQuery(this).addClass("is-invalid"), t.preventDefault()) : jQuery(this).removeClass("is-invalid"), "email" == jQuery(this).attr("name")) && (/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e) ? jQuery(this).removeClass("is-invalid") : (jQuery(this).addClass("is-invalid"), t.preventDefault()))
            }), h("textarea").each(function() {
                "true" === jQuery(this).attr("aria-required") && ("" == jQuery(this).val() ? (jQuery(this).addClass("is-invalid"), t.preventDefault()) : jQuery(this).removeClass("is-invalid"))
            })
        })
    }), h(window).resize(function() {
        m(), 0 < h("header.site-header").length && (h("header.site-header").hasClass("header-type-default") ? l : d)()
    })
}(jQuery);
document.addEventListener("DOMContentLoaded", (e => {
    var t;
    wpcf7_recaptcha = {
        ...null !== (t = wpcf7_recaptcha) && void 0 !== t ? t : {}
    };
    const c = wpcf7_recaptcha.sitekey,
        {
            homepage: n,
            contactform: a
        } = wpcf7_recaptcha.actions,
        o = e => {
            const {
                action: t,
                func: n,
                params: a
            } = e;
            grecaptcha.execute(c, {
                action: t
            }).then((e => {
                const c = new CustomEvent("wpcf7grecaptchaexecuted", {
                    detail: {
                        action: t,
                        token: e
                    }
                });
                document.dispatchEvent(c)
            })).then((() => {
                "function" == typeof n && n(...a)
            })).catch((e => console.error(e)))
        };
    if (grecaptcha.ready((() => {
            o({
                action: n
            })
        })), document.addEventListener("change", (e => {
            o({
                action: a
            })
        })), "undefined" != typeof wpcf7 && "function" == typeof wpcf7.submit) {
        const e = wpcf7.submit;
        wpcf7.submit = (t, c = {}) => {
            o({
                action: a,
                func: e,
                params: [t, c]
            })
        }
    }
    document.addEventListener("wpcf7grecaptchaexecuted", (e => {
        const t = document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
        for (let c = 0; c < t.length; c++) t[c].setAttribute("value", e.detail.token)
    }))
}));
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2023 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), vc_ttaToggleBehaviour(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = 0 == sliderTimeout ? !1 : !0;
                this_element.is(":visible") && setTimeout(function() {
                    this_element.flexslider({
                        animation: sliderFx,
                        slideshow: slideshow,
                        slideshowSpeed: sliderTimeout,
                        sliderSpeed: 800,
                        smoothHeight: !0
                    })
                }, 1)
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            var po, s;
            0 < jQuery(".wpb_googleplus").length && ((po = document.createElement("script")).type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js", (s = document.getElementsByTagName("script")[0]).parentNode.insertBefore(po, s))
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            var po, s;
            0 < jQuery(".wpb_pinterest").length && ((po = document.createElement("script")).type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js", (s = document.getElementsByTagName("script")[0]).parentNode.insertBefore(po, s))
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    e = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? e.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : e.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }($el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click") : $el.find(".vc_toggle_title").off("click") : jQuery(".vc_toggle_title").off("click")).on("click", event)
        }), "function" != typeof window.vc_ttaToggleBehaviour && (window.vc_ttaToggleBehaviour = function($el) {
            function event() {
                var toggle = jQuery(this);
                toggle.toggleClass("wpb-tta-toggle-active"), toggle.parent().parent().parent().find(".vc_pagination-item").each(function() {
                    if (!$(this).hasClass("vc_active")) return $(this).find("a").click(), !1
                })
            }($el ? $el.find(".wpb-tta-toggle") : jQuery(".wpb-tta-toggle")).off("click").on("click", event), setTimeout(function() {
                jQuery(".wpb-tta-toggle").each(function() {
                    var toggle = jQuery(this);
                    toggle.parent().parent().parent().find(".vc_tta-panels-container .vc_pagination li:first").hasClass("vc_active") || toggle.addClass("wpb-tta-toggle-active")
                })
            }, 1e3)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
            var ver, old_version;
            jQuery.ui && ($tab = $tab || jQuery(".wpb_tabs, .wpb_tour"), ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10", old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9, $tab.each(function(index) {
                var interval = jQuery(this).attr("data-interval"),
                    tabs_array = [],
                    $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        activate: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    });
                if (interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (err) {
                    window.console && window.console.warn && console.warn("tabs behaviours error", err)
                }
                jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                    return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) {
                    var index;
                    e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), e = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? e <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? e - 1 : index - 1, $tabs.tabs("option", "active", index))
                })
            }))
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $this = jQuery(this),
                    active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                    collapsible = !1 === active_tab || "yes" === $this.data("collapsible"),
                    active_tab = $this.find(".wpb_accordion_wrapper").accordion({
                        header: "> div > h3",
                        autoHeight: !1,
                        heightStyle: "content",
                        active: active_tab,
                        collapsible: collapsible,
                        navigation: !0,
                        activate: vc_accordionActivate,
                        change: function(event, ui) {
                            void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                        }
                    });
                !0 === $this.data("vcDisableKeydown") && (active_tab.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) {
                    e && e.preventDefault && e.preventDefault();
                    e = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), e.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).on("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var $this = jQuery(this);
                !0 !== $this.data("carousel_enabled") && $this.is(":visible") && ($this.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1"), ($this = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                    "margin-right": $this.css("margin-left"),
                    "margin-left": 0
                }), ($this = jQuery(this).find("ul.wpb_thumbnails-fluid")).width($this.width() + 300))
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, sliderTimeout, this_element = jQuery(this);
                this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var $ = window.jQuery;

            function fullWidthRow() {
                var $elements;
                void 0 !== window.wpb_disable_full_width_row_js && window.wpb_disable_full_width_row_js || ($elements = $('[data-vc-full-width="true"]'), $.each($elements, function(key, item) {
                    var el_margin_left, el_margin_right, offset, width, cssProps, padding, paddingRight, $el = $(this),
                        $el_full = ($el.addClass("vc_hidden"), $el.next(".vc_row-full-width"));
                    ($el_full = $el_full.length ? $el_full : $el.parent().next(".vc_row-full-width")).length && (el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width(), cssProps = {
                        position: "relative",
                        left: offset = "rtl" === $el.css("direction") ? (offset = offset - $el_full.width() + width) + el_margin_left + el_margin_right : offset,
                        "box-sizing": "border-box",
                        width: width,
                        "max-width": width
                    }, $el.css(cssProps), $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : (paddingRight = width - (padding = (padding = -1 * offset) < 0 ? 0 : padding) - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })), $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width,
                        maxWidth: width
                    }))
                }), $(document).trigger("vc-full-width-row", $elements))
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight) && $element.css("min-height", 100 - offsetTop / (windowHeight / 100) + "vh"), $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds();
            var callSkrollInit = !1;
            if (window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                    var skrollrSize, $parallaxElement, parallaxImage, youtubeId;
                    callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), $parallaxElement.attr("data-bottom-top", "top: " + -(skrollrSize - 100) + "%;").attr("data-top-bottom", "top: 0%;")
                }), callSkrollInit && window.skrollr) window.vcParallaxSkroll = skrollr.init({
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }), window.vcParallaxSkroll
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        }), "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui = panel.find(".isotope, .wpb_image_grid_ul"), $pie_charts = panel.find(".wpb_gmaps_widget"), 0 < ui.length && ui.isotope("layout"), $pie_charts.length && !$pie_charts.is(".map_ready") && (($round_charts = $pie_charts.find("iframe")).attr("src", $round_charts.attr("src")), $pie_charts.addClass("map_ready")), panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            }), $(document).trigger("wpb_prepare_tab_content", panel)
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            var $pie_charts, $round_charts, $line_charts, $carousel;
            ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"), $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'), void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length) && ui.newPanel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            })
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeUrl, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeUrl = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeUrl)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    mute: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).on("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) {
            return void 0 !== url && null !== (url = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)) && url[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    width = $this.width();
                $this.css("perspective", 4 * width + "px")
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner"),
                    frontHeight = (hoverBoxInner.css("min-height", 0), $this.find(".vc-hoverbox-front-inner").outerHeight()),
                    $this = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    frontHeight = $this < frontHeight ? frontHeight : $this;
                hoverBoxInner.css("min-height", (frontHeight = frontHeight < 250 ? 250 : frontHeight) + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).on("resize", window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);