var baseURL = '';
var fD = Object.create;
var jg = Object.defineProperty;
var pD = Object.getOwnPropertyDescriptor;
var mD = Object.getOwnPropertyNames;
var hD = Object.getPrototypeOf,
    gD = Object.prototype.hasOwnProperty;
var yD = (e, t, n) => t in e ? jg(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var vD = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
    get: (t, n) => (typeof require < "u" ? require : t)[n]
}) : e)(function(e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported')
});
var Cn = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var SD = (e, t, n, r) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let o of mD(t)) !gD.call(e, o) && o !== n && jg(e, o, {
            get: () => t[o],
            enumerable: !(r = pD(t, o)) || r.enumerable
        });
    return e
};
var k = (e, t, n) => (n = e != null ? fD(hD(e)) : {}, SD(t || !e || !e.__esModule ? jg(n, "default", {
    value: e,
    enumerable: !0
}) : n, e));
var bn = (e, t, n) => (yD(e, typeof t != "symbol" ? t + "" : t, n), n);
var mE = Cn(se => {
    "use strict";
    var Mc = Symbol.for("react.element"),
        xD = Symbol.for("react.portal"),
        TD = Symbol.for("react.fragment"),
        ED = Symbol.for("react.strict_mode"),
        CD = Symbol.for("react.profiler"),
        bD = Symbol.for("react.provider"),
        wD = Symbol.for("react.context"),
        ID = Symbol.for("react.forward_ref"),
        kD = Symbol.for("react.suspense"),
        RD = Symbol.for("react.memo"),
        AD = Symbol.for("react.lazy"),
        rE = Symbol.iterator;

    function ND(e) {
        return e === null || typeof e != "object" ? null : (e = rE && e[rE] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var sE = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        aE = Object.assign,
        lE = {};

    function ba(e, t, n) {
        this.props = e, this.context = t, this.refs = lE, this.updater = n || sE
    }
    ba.prototype.isReactComponent = {};
    ba.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    };
    ba.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    };

    function cE() {}
    cE.prototype = ba.prototype;

    function Gg(e, t, n) {
        this.props = e, this.context = t, this.refs = lE, this.updater = n || sE
    }
    var $g = Gg.prototype = new cE;
    $g.constructor = Gg;
    aE($g, ba.prototype);
    $g.isPureReactComponent = !0;
    var oE = Array.isArray,
        uE = Object.prototype.hasOwnProperty,
        Kg = {
            current: null
        },
        dE = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function fE(e, t, n) {
        var r, o = {},
            i = null,
            s = null;
        if (t != null)
            for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) uE.call(t, r) && !dE.hasOwnProperty(r) && (o[r] = t[r]);
        var a = arguments.length - 2;
        if (a === 1) o.children = n;
        else if (1 < a) {
            for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
            o.children = l
        }
        if (e && e.defaultProps)
            for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
        return {
            $$typeof: Mc,
            type: e,
            key: i,
            ref: s,
            props: o,
            _owner: Kg.current
        }
    }

    function OD(e, t) {
        return {
            $$typeof: Mc,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }
    }

    function Yg(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Mc
    }

    function PD(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n]
        })
    }
    var iE = /\/+/g;

    function Ug(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? PD("" + e.key) : t.toString(36)
    }

    function Hd(e, t, n, r, o) {
        var i = typeof e;
        (i === "undefined" || i === "boolean") && (e = null);
        var s = !1;
        if (e === null) s = !0;
        else switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Mc:
                    case xD:
                        s = !0
                }
        }
        if (s) return s = e, o = o(s), e = r === "" ? "." + Ug(s, 0) : r, oE(o) ? (n = "", e != null && (n = e.replace(iE, "$&/") + "/"), Hd(o, t, n, "", function(c) {
            return c
        })) : o != null && (Yg(o) && (o = OD(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(iE, "$&/") + "/") + e)), t.push(o)), 1;
        if (s = 0, r = r === "" ? "." : r + ":", oE(e))
            for (var a = 0; a < e.length; a++) {
                i = e[a];
                var l = r + Ug(i, a);
                s += Hd(i, t, n, l, o)
            } else if (l = ND(e), typeof l == "function")
                for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + Ug(i, a++), s += Hd(i, t, n, l, o);
            else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return s
    }

    function zd(e, t, n) {
        if (e == null) return e;
        var r = [],
            o = 0;
        return Hd(e, r, "", "", function(i) {
            return t.call(n, i, o++)
        }), r
    }

    function LD(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), t.then(function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
            }, function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
            }), e._status === -1 && (e._status = 0, e._result = t)
        }
        if (e._status === 1) return e._result.default;
        throw e._result
    }
    var Kt = {
            current: null
        },
        Wd = {
            transition: null
        },
        DD = {
            ReactCurrentDispatcher: Kt,
            ReactCurrentBatchConfig: Wd,
            ReactCurrentOwner: Kg
        };

    function pE() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    se.Children = {
        map: zd,
        forEach: function(e, t, n) {
            zd(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return zd(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return zd(e, function(t) {
                return t
            }) || []
        },
        only: function(e) {
            if (!Yg(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    };
    se.Component = ba;
    se.Fragment = TD;
    se.Profiler = CD;
    se.PureComponent = Gg;
    se.StrictMode = ED;
    se.Suspense = kD;
    se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = DD;
    se.act = pE;
    se.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = aE({}, e.props),
            o = e.key,
            i = e.ref,
            s = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (i = t.ref, s = Kg.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
            for (l in t) uE.call(t, l) && !dE.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
        }
        var l = arguments.length - 2;
        if (l === 1) r.children = n;
        else if (1 < l) {
            a = Array(l);
            for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
            r.children = a
        }
        return {
            $$typeof: Mc,
            type: e.type,
            key: o,
            ref: i,
            props: r,
            _owner: s
        }
    };
    se.createContext = function(e) {
        return e = {
            $$typeof: wD,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: bD,
            _context: e
        }, e.Consumer = e
    };
    se.createElement = fE;
    se.createFactory = function(e) {
        var t = fE.bind(null, e);
        return t.type = e, t
    };
    se.createRef = function() {
        return {
            current: null
        }
    };
    se.forwardRef = function(e) {
        return {
            $$typeof: ID,
            render: e
        }
    };
    se.isValidElement = Yg;
    se.lazy = function(e) {
        return {
            $$typeof: AD,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: LD
        }
    };
    se.memo = function(e, t) {
        return {
            $$typeof: RD,
            type: e,
            compare: t === void 0 ? null : t
        }
    };
    se.startTransition = function(e) {
        var t = Wd.transition;
        Wd.transition = {};
        try {
            e()
        } finally {
            Wd.transition = t
        }
    };
    se.unstable_act = pE;
    se.useCallback = function(e, t) {
        return Kt.current.useCallback(e, t)
    };
    se.useContext = function(e) {
        return Kt.current.useContext(e)
    };
    se.useDebugValue = function() {};
    se.useDeferredValue = function(e) {
        return Kt.current.useDeferredValue(e)
    };
    se.useEffect = function(e, t) {
        return Kt.current.useEffect(e, t)
    };
    se.useId = function() {
        return Kt.current.useId()
    };
    se.useImperativeHandle = function(e, t, n) {
        return Kt.current.useImperativeHandle(e, t, n)
    };
    se.useInsertionEffect = function(e, t) {
        return Kt.current.useInsertionEffect(e, t)
    };
    se.useLayoutEffect = function(e, t) {
        return Kt.current.useLayoutEffect(e, t)
    };
    se.useMemo = function(e, t) {
        return Kt.current.useMemo(e, t)
    };
    se.useReducer = function(e, t, n) {
        return Kt.current.useReducer(e, t, n)
    };
    se.useRef = function(e) {
        return Kt.current.useRef(e)
    };
    se.useState = function(e) {
        return Kt.current.useState(e)
    };
    se.useSyncExternalStore = function(e, t, n) {
        return Kt.current.useSyncExternalStore(e, t, n)
    };
    se.useTransition = function() {
        return Kt.current.useTransition()
    };
    se.version = "18.3.1"
});
var P = Cn((OU, hE) => {
    "use strict";
    hE.exports = mE()
});
var wE = Cn(Oe => {
    "use strict";

    function Zg(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n;) {
            var r = n - 1 >>> 1,
                o = e[r];
            if (0 < jd(o, t)) e[r] = t, e[n] = o, n = r;
            else break e
        }
    }

    function mr(e) {
        return e.length === 0 ? null : e[0]
    }

    function Gd(e) {
        if (e.length === 0) return null;
        var t = e[0],
            n = e.pop();
        if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
                var s = 2 * (r + 1) - 1,
                    a = e[s],
                    l = s + 1,
                    c = e[l];
                if (0 > jd(a, n)) l < o && 0 > jd(c, a) ? (e[r] = c, e[l] = n, r = l) : (e[r] = a, e[s] = n, r = s);
                else if (l < o && 0 > jd(c, n)) e[r] = c, e[l] = n, r = l;
                else break e
            }
        }
        return t
    }

    function jd(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return n !== 0 ? n : e.id - t.id
    }
    typeof performance == "object" && typeof performance.now == "function" ? (gE = performance, Oe.unstable_now = function() {
        return gE.now()
    }) : (Xg = Date, yE = Xg.now(), Oe.unstable_now = function() {
        return Xg.now() - yE
    });
    var gE, Xg, yE, Br = [],
        li = [],
        _D = 1,
        Gn = null,
        Ot = 3,
        $d = !1,
        bs = !1,
        Vc = !1,
        xE = typeof setTimeout == "function" ? setTimeout : null,
        TE = typeof clearTimeout == "function" ? clearTimeout : null,
        vE = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function Jg(e) {
        for (var t = mr(li); t !== null;) {
            if (t.callback === null) Gd(li);
            else if (t.startTime <= e) Gd(li), t.sortIndex = t.expirationTime, Zg(Br, t);
            else break;
            t = mr(li)
        }
    }

    function ey(e) {
        if (Vc = !1, Jg(e), !bs)
            if (mr(Br) !== null) bs = !0, ny(ty);
            else {
                var t = mr(li);
                t !== null && ry(ey, t.startTime - e)
            }
    }

    function ty(e, t) {
        bs = !1, Vc && (Vc = !1, TE(Fc), Fc = -1), $d = !0;
        var n = Ot;
        try {
            for (Jg(t), Gn = mr(Br); Gn !== null && (!(Gn.expirationTime > t) || e && !bE());) {
                var r = Gn.callback;
                if (typeof r == "function") {
                    Gn.callback = null, Ot = Gn.priorityLevel;
                    var o = r(Gn.expirationTime <= t);
                    t = Oe.unstable_now(), typeof o == "function" ? Gn.callback = o : Gn === mr(Br) && Gd(Br), Jg(t)
                } else Gd(Br);
                Gn = mr(Br)
            }
            if (Gn !== null) var i = !0;
            else {
                var s = mr(li);
                s !== null && ry(ey, s.startTime - t), i = !1
            }
            return i
        } finally {
            Gn = null, Ot = n, $d = !1
        }
    }
    var Kd = !1,
        Ud = null,
        Fc = -1,
        EE = 5,
        CE = -1;

    function bE() {
        return !(Oe.unstable_now() - CE < EE)
    }

    function qg() {
        if (Ud !== null) {
            var e = Oe.unstable_now();
            CE = e;
            var t = !0;
            try {
                t = Ud(!0, e)
            } finally {
                t ? Bc() : (Kd = !1, Ud = null)
            }
        } else Kd = !1
    }
    var Bc;
    typeof vE == "function" ? Bc = function() {
        vE(qg)
    } : typeof MessageChannel < "u" ? (Qg = new MessageChannel, SE = Qg.port2, Qg.port1.onmessage = qg, Bc = function() {
        SE.postMessage(null)
    }) : Bc = function() {
        xE(qg, 0)
    };
    var Qg, SE;

    function ny(e) {
        Ud = e, Kd || (Kd = !0, Bc())
    }

    function ry(e, t) {
        Fc = xE(function() {
            e(Oe.unstable_now())
        }, t)
    }
    Oe.unstable_IdlePriority = 5;
    Oe.unstable_ImmediatePriority = 1;
    Oe.unstable_LowPriority = 4;
    Oe.unstable_NormalPriority = 3;
    Oe.unstable_Profiling = null;
    Oe.unstable_UserBlockingPriority = 2;
    Oe.unstable_cancelCallback = function(e) {
        e.callback = null
    };
    Oe.unstable_continueExecution = function() {
        bs || $d || (bs = !0, ny(ty))
    };
    Oe.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : EE = 0 < e ? Math.floor(1e3 / e) : 5
    };
    Oe.unstable_getCurrentPriorityLevel = function() {
        return Ot
    };
    Oe.unstable_getFirstCallbackNode = function() {
        return mr(Br)
    };
    Oe.unstable_next = function(e) {
        switch (Ot) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = Ot
        }
        var n = Ot;
        Ot = t;
        try {
            return e()
        } finally {
            Ot = n
        }
    };
    Oe.unstable_pauseExecution = function() {};
    Oe.unstable_requestPaint = function() {};
    Oe.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = Ot;
        Ot = e;
        try {
            return t()
        } finally {
            Ot = n
        }
    };
    Oe.unstable_scheduleCallback = function(e, t, n) {
        var r = Oe.unstable_now();
        switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r) : n = r, e) {
            case 1:
                var o = -1;
                break;
            case 2:
                o = 250;
                break;
            case 5:
                o = 1073741823;
                break;
            case 4:
                o = 1e4;
                break;
            default:
                o = 5e3
        }
        return o = n + o, e = {
            id: _D++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: o,
            sortIndex: -1
        }, n > r ? (e.sortIndex = n, Zg(li, e), mr(Br) === null && e === mr(li) && (Vc ? (TE(Fc), Fc = -1) : Vc = !0, ry(ey, n - r))) : (e.sortIndex = o, Zg(Br, e), bs || $d || (bs = !0, ny(ty))), e
    };
    Oe.unstable_shouldYield = bE;
    Oe.unstable_wrapCallback = function(e) {
        var t = Ot;
        return function() {
            var n = Ot;
            Ot = t;
            try {
                return e.apply(this, arguments)
            } finally {
                Ot = n
            }
        }
    }
});
var kE = Cn((LU, IE) => {
    "use strict";
    IE.exports = wE()
});
var Ow = Cn(Nn => {
            "use strict";
            var MD = P(),
                Rn = kE();

            function D(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var DC = new Set,
                au = {};

            function Bs(e, t) {
                Ga(e, t), Ga(e + "Capture", t)
            }

            function Ga(e, t) {
                for (au[e] = t, e = 0; e < t.length; e++) DC.add(t[e])
            }
            var Co = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
                Iy = Object.prototype.hasOwnProperty,
                BD = /^[:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�][:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�\-.0-9·̀-ͯ‿-⁀]*$/,
                RE = {},
                AE = {};

            function VD(e) {
                return Iy.call(AE, e) ? !0 : Iy.call(RE, e) ? !1 : BD.test(e) ? AE[e] = !0 : (RE[e] = !0, !1)
            }

            function FD(e, t, n, r) {
                if (n !== null && n.type === 0) return !1;
                switch (typeof t) {
                    case "function":
                    case "symbol":
                        return !0;
                    case "boolean":
                        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
                    default:
                        return !1
                }
            }

            function zD(e, t, n, r) {
                if (t === null || typeof t > "u" || FD(e, t, n, r)) return !0;
                if (r) return !1;
                if (n !== null) switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return t === !1;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t
                }
                return !1
            }

            function qt(e, t, n, r, o, i, s) {
                this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
            }
            var kt = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
                kt[e] = new qt(e, 0, !1, e, null, !1, !1)
            });
            [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach(function(e) {
                var t = e[0];
                kt[t] = new qt(t, 1, !1, e[1], null, !1, !1)
            });
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
                kt[e] = new qt(e, 2, !1, e.toLowerCase(), null, !1, !1)
            });
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
                kt[e] = new qt(e, 2, !1, e, null, !1, !1)
            });
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
                kt[e] = new qt(e, 3, !1, e.toLowerCase(), null, !1, !1)
            });
            ["checked", "multiple", "muted", "selected"].forEach(function(e) {
                kt[e] = new qt(e, 3, !0, e, null, !1, !1)
            });
            ["capture", "download"].forEach(function(e) {
                kt[e] = new qt(e, 4, !1, e, null, !1, !1)
            });
            ["cols", "rows", "size", "span"].forEach(function(e) {
                kt[e] = new qt(e, 6, !1, e, null, !1, !1)
            });
            ["rowSpan", "start"].forEach(function(e) {
                kt[e] = new qt(e, 5, !1, e.toLowerCase(), null, !1, !1)
            });
            var vv = /[\-:]([a-z])/g;

            function Sv(e) {
                return e[1].toUpperCase()
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
                var t = e.replace(vv, Sv);
                kt[t] = new qt(t, 1, !1, e, null, !1, !1)
            });
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
                var t = e.replace(vv, Sv);
                kt[t] = new qt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            });
            ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
                var t = e.replace(vv, Sv);
                kt[t] = new qt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            });
            ["tabIndex", "crossOrigin"].forEach(function(e) {
                kt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !1, !1)
            });
            kt.xlinkHref = new qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
            ["src", "href", "action", "formAction"].forEach(function(e) {
                kt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !0, !0)
            });

            function xv(e, t, n, r) {
                var o = kt.hasOwnProperty(t) ? kt[t] : null;
                (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zD(t, n, o, r) && (n = null), r || o === null ? VD(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            var ko = MD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                Yd = Symbol.for("react.element"),
                ka = Symbol.for("react.portal"),
                Ra = Symbol.for("react.fragment"),
                Tv = Symbol.for("react.strict_mode"),
                ky = Symbol.for("react.profiler"),
                _C = Symbol.for("react.provider"),
                MC = Symbol.for("react.context"),
                Ev = Symbol.for("react.forward_ref"),
                Ry = Symbol.for("react.suspense"),
                Ay = Symbol.for("react.suspense_list"),
                Cv = Symbol.for("react.memo"),
                ui = Symbol.for("react.lazy");
            Symbol.for("react.scope");
            Symbol.for("react.debug_trace_mode");
            var BC = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden");
            Symbol.for("react.cache");
            Symbol.for("react.tracing_marker");
            var NE = Symbol.iterator;

            function zc(e) {
                return e === null || typeof e != "object" ? null : (e = NE && e[NE] || e["@@iterator"], typeof e == "function" ? e : null)
            }
            var Ge = Object.assign,
                oy;

            function Yc(e) {
                if (oy === void 0) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/
                        ( * (at) ? ) / );
                    oy = t && t[1] || ""
                }
                return `
` + oy + e
            }
            var iy = !1;

            function sy(e, t) {
                if (!e || iy) return "";
                iy = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                                throw Error()
                            }, Object.defineProperty(t.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (c) {
                                var r = c
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (c) {
                                r = c
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (c) {
                            r = c
                        }
                        e()
                    }
                } catch (c) {
                    if (c && r && typeof c.stack == "string") {
                        for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
                        for (; 1 <= s && 0 <= a; s--, a--)
                            if (o[s] !== i[a]) {
                                if (s !== 1 || a !== 1)
                                    do
                                        if (s--, a--, 0 > a || o[s] !== i[a]) {
                                            var l = `
` + o[s].replace(" at new ", " at ");
                                            return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                        } while (1 <= s && 0 <= a);
                                break
                            }
                    }
                } finally {
                    iy = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? Yc(e) : ""
            }

            function HD(e) {
                switch (e.tag) {
                    case 5:
                        return Yc(e.type);
                    case 16:
                        return Yc("Lazy");
                    case 13:
                        return Yc("Suspense");
                    case 19:
                        return Yc("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = sy(e.type, !1), e;
                    case 11:
                        return e = sy(e.type.render, !1), e;
                    case 1:
                        return e = sy(e.type, !0), e;
                    default:
                        return ""
                }
            }

            function Ny(e) {
                if (e == null) return null;
                if (typeof e == "function") return e.displayName || e.name || null;
                if (typeof e == "string") return e;
                switch (e) {
                    case Ra:
                        return "Fragment";
                    case ka:
                        return "Portal";
                    case ky:
                        return "Profiler";
                    case Tv:
                        return "StrictMode";
                    case Ry:
                        return "Suspense";
                    case Ay:
                        return "SuspenseList"
                }
                if (typeof e == "object") switch (e.$$typeof) {
                    case MC:
                        return (e.displayName || "Context") + ".Consumer";
                    case _C:
                        return (e._context.displayName || "Context") + ".Provider";
                    case Ev:
                        var t = e.render;
                        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case Cv:
                        return t = e.displayName || null, t !== null ? t : Ny(e.type) || "Memo";
                    case ui:
                        t = e._payload, e = e._init;
                        try {
                            return Ny(e(t))
                        } catch {}
                }
                return null
            }

            function WD(e) {
                var t = e.type;
                switch (e.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (t.displayName || "Context") + ".Consumer";
                    case 10:
                        return (t._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return t;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return Ny(t);
                    case 8:
                        return t === Tv ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if (typeof t == "function") return t.displayName || t.name || null;
                        if (typeof t == "string") return t
                }
                return null
            }

            function bi(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return e;
                    case "object":
                        return e;
                    default:
                        return ""
                }
            }

            function VC(e) {
                var t = e.type;
                return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
            }

            function jD(e) {
                var t = VC(e) ? "checked" : "value",
                    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                    r = "" + e[t];
                if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
                    var o = n.get,
                        i = n.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function() {
                            return o.call(this)
                        },
                        set: function(s) {
                            r = "" + s, i.call(this, s)
                        }
                    }), Object.defineProperty(e, t, {
                        enumerable: n.enumerable
                    }), {
                        getValue: function() {
                            return r
                        },
                        setValue: function(s) {
                            r = "" + s
                        },
                        stopTracking: function() {
                            e._valueTracker = null, delete e[t]
                        }
                    }
                }
            }

            function Xd(e) {
                e._valueTracker || (e._valueTracker = jD(e))
            }

            function FC(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = VC(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
            }

            function bf(e) {
                if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
                try {
                    return e.activeElement || e.body
                } catch {
                    return e.body
                }
            }

            function Oy(e, t) {
                var n = t.checked;
                return Ge({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: n ?? e._wrapperState.initialChecked
                })
            }

            function OE(e, t) {
                var n = t.defaultValue == null ? "" : t.defaultValue,
                    r = t.checked != null ? t.checked : t.defaultChecked;
                n = bi(t.value != null ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
                }
            }

            function zC(e, t) {
                t = t.checked, t != null && xv(e, "checked", t, !1)
            }

            function Py(e, t) {
                zC(e, t);
                var n = bi(t.value),
                    r = t.type;
                if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if (r === "submit" || r === "reset") {
                    e.removeAttribute("value");
                    return
                }
                t.hasOwnProperty("value") ? Ly(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ly(e, t.type, bi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
            }

            function PE(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
            }

            function Ly(e, t, n) {
                (t !== "number" || bf(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var Xc = Array.isArray;

            function Fa(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + bi(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) {
                            e[o].selected = !0, r && (e[o].defaultSelected = !0);
                            return
                        }
                        t !== null || e[o].disabled || (t = e[o])
                    }
                    t !== null && (t.selected = !0)
                }
            }

            function Dy(e, t) {
                if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
                return Ge({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }

            function LE(e, t) {
                var n = t.value;
                if (n == null) {
                    if (n = t.children, t = t.defaultValue, n != null) {
                        if (t != null) throw Error(D(92));
                        if (Xc(n)) {
                            if (1 < n.length) throw Error(D(93));
                            n = n[0]
                        }
                        t = n
                    }
                    t == null && (t = ""), n = t
                }
                e._wrapperState = {
                    initialValue: bi(n)
                }
            }

            function HC(e, t) {
                var n = bi(t.value),
                    r = bi(t.defaultValue);
                n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
            }

            function DE(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
            }

            function WC(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function _y(e, t) {
                return e == null || e === "http://www.w3.org/1999/xhtml" ? WC(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
            }
            var qd, jC = function(e) {
                return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
                    MSApp.execUnsafeLocalFunction(function() {
                        return e(t, n, r, o)
                    })
                } : e
            }(function(e, t) {
                if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
                else {
                    for (qd = qd || document.createElement("div"), qd.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qd.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            });

            function lu(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && n.nodeType === 3) {
                        n.nodeValue = t;
                        return
                    }
                }
                e.textContent = t
            }
            var Zc = {
                    animationIterationCount: !0,
                    aspectRatio: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                UD = ["Webkit", "ms", "Moz", "O"];
            Object.keys(Zc).forEach(function(e) {
                UD.forEach(function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zc[t] = Zc[e]
                })
            });

            function UC(e, t, n) {
                return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zc.hasOwnProperty(e) && Zc[e] ? ("" + t).trim() : t + "px"
            }

            function GC(e, t) {
                e = e.style;
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = n.indexOf("--") === 0,
                            o = UC(n, t[n], r);
                        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                    }
            }
            var GD = Ge({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function My(e, t) {
                if (t) {
                    if (GD[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
                    if (t.dangerouslySetInnerHTML != null) {
                        if (t.children != null) throw Error(D(60));
                        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61))
                    }
                    if (t.style != null && typeof t.style != "object") throw Error(D(62))
                }
            }

            function By(e, t) {
                if (e.indexOf("-") === -1) return typeof t.is == "string";
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }
            var Vy = null;

            function bv(e) {
                return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
            }
            var Fy = null,
                za = null,
                Ha = null;

            function _E(e) {
                if (e = Iu(e)) {
                    if (typeof Fy != "function") throw Error(D(280));
                    var t = e.stateNode;
                    t && (t = Zf(t), Fy(e.stateNode, e.type, t))
                }
            }

            function $C(e) {
                za ? Ha ? Ha.push(e) : Ha = [e] : za = e
            }

            function KC() {
                if (za) {
                    var e = za,
                        t = Ha;
                    if (Ha = za = null, _E(e), t)
                        for (e = 0; e < t.length; e++) _E(t[e])
                }
            }

            function YC(e, t) {
                return e(t)
            }

            function XC() {}
            var ay = !1;

            function qC(e, t, n) {
                if (ay) return e(t, n);
                ay = !0;
                try {
                    return YC(e, t, n)
                } finally {
                    ay = !1, (za !== null || Ha !== null) && (XC(), KC())
                }
            }

            function cu(e, t) {
                var n = e.stateNode;
                if (n === null) return null;
                var r = Zf(n);
                if (r === null) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && typeof n != "function") throw Error(D(231, t, typeof n));
                return n
            }
            var zy = !1;
            if (Co) try {
                wa = {}, Object.defineProperty(wa, "passive", {
                    get: function() {
                        zy = !0
                    }
                }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa)
            } catch {
                zy = !1
            }
            var wa;

            function $D(e, t, n, r, o, i, s, a, l) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (u) {
                    this.onError(u)
                }
            }
            var Jc = !1,
                wf = null,
                If = !1,
                Hy = null,
                KD = {
                    onError: function(e) {
                        Jc = !0, wf = e
                    }
                };

            function YD(e, t, n, r, o, i, s, a, l) {
                Jc = !1, wf = null, $D.apply(KD, arguments)
            }

            function XD(e, t, n, r, o, i, s, a, l) {
                if (YD.apply(this, arguments), Jc) {
                    if (Jc) {
                        var c = wf;
                        Jc = !1, wf = null
                    } else throw Error(D(198));
                    If || (If = !0, Hy = c)
                }
            }

            function Vs(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
                }
                return t.tag === 3 ? n : null
            }

            function QC(e) {
                if (e.tag === 13) {
                    var t = e.memoizedState;
                    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
                }
                return null
            }

            function ME(e) {
                if (Vs(e) !== e) throw Error(D(188))
            }

            function qD(e) {
                var t = e.alternate;
                if (!t) {
                    if (t = Vs(e), t === null) throw Error(D(188));
                    return t !== e ? null : e
                }
                for (var n = e, r = t;;) {
                    var o = n.return;
                    if (o === null) break;
                    var i = o.alternate;
                    if (i === null) {
                        if (r = o.return, r !== null) {
                            n = r;
                            continue
                        }
                        break
                    }
                    if (o.child === i.child) {
                        for (i...(truncated 713278 characters)...Align !== "STRETCH" && e.layoutGrow !== 1 && (u = [u, "adjustLetterSpacing"].filter(Boolean).join(" "));
                            let p = r.characters.length ? dU(r.characters, d) : " ", v = r.style.hyperlink ?? n.style.hyperlink;
                            if (v) {
                                let x = HL(v, t, o);
                                return {
                                    isHyperlink: !0,
                                    style: c,
                                    className: u,
                                    props: {
                                        ...x,
                                        children: p
                                    }
                                }
                            }
                            return {
                                isHyperlink: !1,
                                style: c,
                                className: u,
                                props: {
                                    children: p
                                }
                            }
                        }

                        function uU(e, t) {
                            return Boolean(e?.style.letterSpacing || t.letterSpacing)
                        }
                        var zL = /[]/,
                            dU = (e, t) => e.split(zL).flatMap((n, r, o) => r < o.length - 1 || t && n === "" ? [n, (0, de.jsx)("br", {
                                "aria-hidden": !0
                            }, "br" + r)] : [n]);

                        function HL(e, t, n) {
                            if (!e || !e.type) return {};
                            if (e.type === "NODE" && e.nodeID) return bg(s => {
                                s.preventDefault(), s.stopPropagation(), gT(e.nodeID)
                            }, e.type, e.nodeID, !1, t, n);
                            let r = !!e.openInNewTab;
                            return bg(i => {
                                i.preventDefault(), i.stopPropagation(), window.open(e.url, r ? "_blank" : "_self")
                            }, e.type, e.url, r, t, n)
                        }
                        var WL = Rc(rU);
                        var ri = k(U()),
                            $T = k(P());
                        var jL = k(P());
                        var UT = "body-background-color";

                        function UL({
                            breakpoints: e
                        }) {
                            let t = fe(),
                                n = e.sort((s, a) => s.width - a.width),
                                o = n.map((s, a) => ({
                                    layerName: s.name,
                                    minWidth: a === 0 ? void 0 : s.width,
                                    maxWidth: a < n.length - 1 ? n[a + 1]?.width : void 0,
                                    background: s.background,
                                    nodeId: s.nodeId
                                })).map(({
                                    background: s,
                                    minWidth: a,
                                    maxWidth: l,
                                    nodeId: c
                                }) => {
                                    let u = [];
                                    l !== void 0 && u.push(`(max-width: ${l - 1}px)`), a !== void 0 && u.push(`(min-width: ${a}px)`);
                                    let d = `body:has([data-breakpoint-id="${Yo(c)}"]) { background-color: ${s} }`;
                                    return u.length > 0 ? `@media ${u.join(", ")} { ${d} }` : d
                                }).join(`
`),
                                i = $r();
                            t === "server" && i({
                                type: "global-style",
                                styleElId: UT,
                                styleSheet: o
                            }), (0, jL.useInsertionEffect)(() => {
                                let s = document.getElementById(UT);
                                if (s) {
                                    s.textContent = o;
                                    return
                                }
                                let a = document.createElement("style");
                                return a.textContent = o, a.id = UT, document.head.appendChild(a), () => {
                                    document.head.removeChild(a)
                                }
                            }, [e])
                        }

                        function GL({
                            breakpoints: e
                        }) {
                            let t = fe(),
                                n = $r();
                            if (t !== "server" || e.length === 1) return;
                            let r = e.sort((i, s) => s.width - i.width),
                                o = r.reduce((i, s, a) => {
                                    let l = a === 0,
                                        c = a === r.length - 1,
                                        u = r[a - 1]?.width || void 0,
                                        d = [];
                                    return l ? d.push(`(width < ${s.width}px)`) : c ? u && d.push(`(width >= ${u}px)`) : (u && d.push(`(width >= ${u}px)`), d.push(`(width < ${s.width}px)`)), d.length > 0 && i.push(`@media ${d.join(" or ")} {
        [${Up}="${Yo(s.nodeId)}"] {display: none !important}
      }`), i
                                }, []);
                            n({
                                type: "global-style",
                                styleElId: qS,
                                styleSheet: Di(o.join(`
`))
                            })
                        }
                        var KL = k(P());
                        var GT = new Map;

                        function $L(e, t) {
                            let n = JSON.stringify(e);
                            return js({
                                str: n,
                                hashPrefix: e.type + "-",
                                isUniqueKey: o => {
                                    let i = GT.get(o),
                                        s = i ? JSON.stringify(i) : null;
                                    if (t === "server") return !s || s === n;
                                    if (s && s !== n) return !1;
                                    let a = document.getElementById(o);
                                    return a ? YL(a, e) : !0
                                }
                            })
                        }

                        function YL(e, t) {
                            if (e.tagName === "LINK" && t.type === "link") {
                                let n = e;
                                return n.getAttribute("href") === t.href && n.rel === t.rel
                            } else if (e.tagName === "META" && t.type === "meta") {
                                let n = e,
                                    r = t.name || "",
                                    o = t.property || "",
                                    i = n.getAttribute("property") || "";
                                return n.content === t.content && n.name === r && i === o
                            } else if (e.tagName === "TITLE" && t.type === "title") return e.textContent === t.title;
                            return !1
                        }

                        function XL(e) {
                            let t = $r(),
                                n = fe();
                            n === "server" && e.forEach(r => {
                                let o = $L(r, n);
                                GT.has(o) || (t(r), GT.set(o, r))
                            }), (0, KL.useInsertionEffect)(() => {
                                let r = [];
                                return e.forEach(o => {
                                    if (o.type === "title") {
                                        document.title = o.title;
                                        return
                                    }
                                    let i = $L(o, n),
                                        s = document.getElementById(i);
                                    if (!(s && YL(s, o))) {
                                        if (o.type === "link") {
                                            let a = document.createElement("link");
                                            a.href = o.href, a.rel = o.rel, a.id = i, document.head.appendChild(a), r.push(a)
                                        } else if (o.type === "meta") {
                                            let a = document.createElement("meta");
                                            o.name && (a.name = o.name), o.property && a.setAttribute("property", o.property), a.content = o.content, a.id = i, document.head.appendChild(a), r.push(a)
                                        }
                                    }
                                }), () => {
                                    r.forEach(o => {
                                        o.remove()
                                    })
                                }
                            }, [e])
                        }

                        function qL({
                            children: e
                        }) {
                            let t = Oi(),
                                {
                                    getAssetURL: n
                                } = ee();
                            e !== void 0 && e.length > 0;
                            let r = (0, $T.useMemo)(() => QS(e.filter(i => i.visible !== !1).filter(i => ts(i)).filter(i => i.type === "FRAME")), [e]);
                            GL({
                                breakpoints: r.breakpoints
                            }), UL({
                                breakpoints: r.breakpoints
                            });
                            let o = (0, $T.useMemo)(() => {
                                let i = [{
                                    type: "title",
                                    title: t?.title ?? ET
                                }, {
                                    type: "meta",
                                    name: "description",
                                    content: t?.description ?? CT
                                }];
                                return t?.blockSearchIndexing && i.push({
                                    type: "meta",
                                    name: "robots",
                                    content: t?.blockSearchIndexing ? "noindex" : "index"
                                }), t?.faviconFilename && i.push({
                                    type: "link",
                                    rel: "icon",
                                    href: n(t?.faviconFilename)
                                }), t?.socialImageFilename && i.push({
                                    type: "meta",
                                    property: "og:image",
                                    content: n(t?.socialImageFilename)
                                }, {
                                    type: "meta",
                                    property: "twitter:image",
                                    content: n(t?.socialImageFilename)
                                }), i
                            }, [t?.title, t?.description, t?.blockSearchIndexing, t?.faviconFilename, t?.socialImageFilename, n]);
                            return XL(o), (0, ri.jsx)(ri.Fragment, {
                                children: (0, ri.jsx)(zP, {
                                    children: e.map((i, s) => (0, ri.jsx)(Q0, {
                                        children: (0, ri.jsx)(U0, {
                                            name: i.name,
                                            width: i.size.x,
                                            height: i.size.y,
                                            children: (0, ri.jsx)(ys, {
                                                name: "sites-layer",
                                                nodeId: i.id,
                                                children: (0, ri.jsx)(Nr, {
                                                    node: i,
                                                    parent: null
                                                }, s)
                                            }, s)
                                        })
                                    }, i.id))
                                })
                            })
                        }
                        var Nr = (0, oi.forwardRef)(function({
                                node: t,
                                parent: n,
                                context: r,
                                zIndex: o,
                                interactionHandlers: l,
                                transitionProps: c
                            }) {
                                let a = Gp(t.materializedChildNodeProps ?? []),
                                    {
                                        interactionHandlers: l,
                                        transitionProps: c
                                    } = t;
                                r = rl(r, Ce);
                                let {
                                    renderHiddenRootNodes: u,
                                    renderComponentSetNodes: d
                                } = ke(), f = ge(px);
                                (0, oi.useEffect)(() => {
                                    if (t.visible && !(l === void 0 || l?.ON_KEY_DOWN === void 0)) return f.set(t.id, l.ON_KEY_DOWN), () => (f.delete(t.id), void 0)
                                }, [l, f, t.id, t.visible]);
                                let p = c?.transitionData;
                                return (0, oi.useEffect)(() => {
                                    let g = [],
                                        x;
                                    return t.visible && (p && !p.layout ? g = YP(l, p.id) : g = XP(t.id, l).timeoutIds, g.length && p && (x = qP(() => {
                                        setTimeout(() => {
                                            p.onTransitionEnd?.(p.id)
                                        }, 500)
                                    }, 100), window.addEventListener("resize", x))), () => {
                                        x && setTimeout(() => {
                                            removeEventListener("resize", x)
                                        }), hs.markTimeoutsAsUnmounted(t.id), setTimeout(() => {
                                            let h = l?.AFTER_TIMEOUT?.map(m => m.interactionGuid);
                                            hs.cleanupUnmountedTimeouts(t.id, h)
                                        }, 100)
                                    }
                                }, [t.id, l, t.visible]), (0, oi.useMemo)(() => {
                                    if (!t || t.visible === !1 && !f) return null;
                                    let g = (() => {
                                        switch (t.type) {
                                            case "WEBPAGE":
                                                return (0, Nt.jsx)(FP, {
                                                    rootMaterializedNode: t,
                                                    materializedChildren: a,
                                                    children: (0, Nt.jsx)(qL, {
                                                        node: t,
                                                        children: a,
                                                        parent: n,
                                                        context: r,
                                                        interactionHandlers: l
                                                    })
                                                });
                                            case "FRAME":
                                            case "SLOT":
                                                return (0, Nt.jsx)(iT, {
                                                    layerRef: s,
                                                    node: t,
                                                    children: a,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l,
                                                    transitionProps: c,
                                                    codeBehaviorProps: i
                                                });
                                            case "COMPONENT_SET":
                                                return me(d, "COMPONENT_SET nodes are not supported in sites"), (0, Nt.jsx)(uL, {
                                                    node: t,
                                                    children: a,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l,
                                                    transitionProps: c,
                                                    codeBehaviorProps: i
                                                });
                                            case "RECTANGLE":
                                                return (0, Nt.jsx)(iT, {
                                                    layerRef: s,
                                                    node: t,
                                                    children: a,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l,
                                                    transitionProps: c,
                                                    codeBehaviorProps: i
                                                });
                                            case "GROUP":
                                                return (0, Nt.jsx)(dL, {
                                                    node: t,
                                                    children: a,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l,
                                                    transitionProps: c
                                                });
                                            case "IMAGE":
                                            case "SVG":
                                                return (0, Nt.jsx)(ZP, {
                                                    layerRef: s,
                                                    node: t,
                                                    parent: n,
                                                    zIndex: o,
                                                    context: r,
                                                    interactionHandlers: l,
                                                    transitionProps: c,
                                                    codeBehaviorProps: i
                                                });
                                            case "TEXT":
                                                return (0, Nt.jsx)(WL, {
                                                    layerRef: s,
                                                    node: t,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l,
                                                    transitionProps: c,
                                                    codeBehaviorProps: i
                                                });
                                            case "WIDGET":
                                                return (0, Nt.jsx)(AL, {
                                                    node: t,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l
                                                });
                                            case "CODE_INSTANCE":
                                            case "CODE_LAYER":
                                                return (0, Nt.jsx)(lL, {
                                                    node: t,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l
                                                });
                                            case "REPEATER":
                                                return (0, Nt.jsx)(oT, {
                                                    ref: s,
                                                    node: t,
                                                    children: a,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l,
                                                    transitionProps: c
                                                });
                                            case "CMS_RICH_TEXT":
                                                return (0, Nt.jsx)(rL, {
                                                    node: t,
                                                    parent: n,
                                                    context: r,
                                                    zIndex: o,
                                                    interactionHandlers: l
                                                });
                                            default:
                                                ye(t)
                                        }
                                    })();
                                    return f ? (0, Nt.jsx)("div", {
                                        style: {
                                            display: "none"
                                        },
                                        children: g
                                    }) : (0, Nt.jsx)(gO, {
                                        isNodeListItem: r?.parentIsList ?? !1,
                                        children: g
                                    })
                                }, [t, a, n, r, l, s, o, c, i, f, d])
                            }),
                            Jh = (0, oi.forwardRef)(function({
                                node: t,
                                parent: n,
                                context: r,
                                zIndex: o,
                                name: i,
                                nodeId: s,
                                childKey: a,
                                codeBehaviorProps: l
                            }, c) {
                                return (0, Nt.jsx)(ys, {
                                    name: i,
                                    nodeId: s,
                                    children: (0, Nt.jsx)(Nr, {
                                        ref: c,
                                        node: t,
                                        parent: n,
                                        context: r,
                                        zIndex: o,
                                        codeBehaviorProps: l
                                    }, a)
                                })
                            });
                        var We = k(U()),
                            Hn = k(P());
                        var QL = new Map;

                        function KT() {
                            let e = Di(HI() ?? ""),
                                t = fe(),
                                n = js({
                                    str: e ?? "",
                                    hashPrefix: jS,
                                    isUniqueKey: r => {
                                        if (t === "server") {
                                            let i = QL.get(r);
                                            return !i || i === e
                                        }
                                        let o = document.getElementById(r);
                                        return !o || o.textContent === e
                                    }
                                });
                            return e && QL.set(n, e), El({
                                cssString: e ?? "",
                                styleElId: n,
                                deleteElsWithPrefix: jS,
                                skipValidation: !0
                            }), null
                        }

                        function YT({
                            withBaseStyles: e,
                            prepend: t = !1
                        }) {
                            return El({
                                cssString: TT(e),
                                styleElId: Ag,
                                prepend: t
                            }), null
                        }

                        function ZL() {
                            let e = FI(),
                                n = !!ge(e),
                                r = Gr(),
                                {
                                    getFontURL: o
                                } = ee();
                            O1(hU(r, o, n))
                        }

                        function fU(e, t, n, r) {
                            let r = new Map;
                            if (t.subsets) {
                                let o = t.subsets.baseUrl;
                                if (r.set(e, t.subsets.subsetMappings.sort((i, s) => i.unicodeRange === "*" ? -1 : 0).map(i => xs({
                                        family: e,
                                        style: t.italic ? "italic" : "normal",
                                        url: o + i.file,
                                        unicodeRange: i.unicodeRange
                                    })).join(`
`)), n) {
                                    let i = e.split(":"),
                                        s = i[0],
                                        a = i.length > 1 ? i[1] : "normal";
                                    r.set(s, t.subsets.subsetMappings.sort((l, c) => l.unicodeRange === "*" ? -1 : 0).map(l => xs({
                                        family: s,
                                        style: a,
                                        url: o + l.file,
                                        unicodeRange: l.unicodeRange
                                    })).join(`
`))
                                }
                            } else if (r.set(e, xs({
                                    family: e,
                                    style: t.italic ? "italic" : "normal",
                                    url: t.url
                                })), n) {
                                let o = e.split(":"),
                                    i = o[0],
                                    s = o.length > 1 ? o[1] : "normal";
                                r.set(i, xs({
                                    family: i,
                                    style: s,
                                    url: t.url
                                }))
                            }
                            return r
                        }

                        function pU(e, t, n, r) {
                            let o = new Map,
                                i = t.url ? n(t.url, "CUSTOM") : void 0;
                            if (o.set(e, xs({
                                    family: e,
                                    style: t.italic ? "italic" : "normal",
                                    url: i
                                })), r) {
                                let s = e.split(":"),
                                    a = s[0],
                                    l = s.length > 1 ? s[1] : "normal";
                                o.set(a, xs({
                                    family: a,
                                    style: l,
                                    url: i
                                }))
                            }
                            return o
                        }

                        function mU(e, t, n, r) {
                            return t ? t.source === 1 ? fU(e, t, r) : pU(e, t, n, r) : new Map
                        }

                        function hU(e, t, n) {
                            let r = Array.from(e.map).reduce((o, [i, s]) => new Map([...o, ...mU(i, s, t, n)]), new Map);
                            return Di([...r.values()].join(`
`))
                        }

                        function JL({
                            rootMaterializedNodePropsArrayAtom: e,
                            history: t,
                            websiteData: n,
                            cmsBundleDataAtom: r,
                            getAssetURL: o,
                            getFontURL: i,
                            getVideoURL: s,
                            getCodeComponentURL: a,
                            env: l,
                            transitionAtom: c,
                            currentLocationAtom: u,
                            setLocation: d,
                            preloadLocation: f,
                            onPageRendered: p,
                            onReactError: v,
                            renderOptionsAtom: g,
                            addHeadTag: x,
                            addBodyScript: h,
                            loadComponentsOverNetwork: m,
                            wasServerRendered: y = !1,
                            withBaseStyles: S = !0,
                            isFigmake: T,
                            reportingDomain: C
                        }) {
                            let E = ge(g),
                                b = ge(r);
                            (0, Hn.useEffect)(() => {
                                f1(E.testFlags ?? {})
                            }, [E.testFlags]);
                            let I = ge(n.siteSettings)?.cookieBanner,
                                [A, N] = (0, Hn.useState)(!1);
                            return EU(y), (0, We.jsx)(l1, {
                                reportError: v,
                                children: (0, We.jsx)(gs, {
                                    name: "root-error-boundary",
                                    nodeId: "root",
                                    children: (0, We.jsx)(TS, {
                                        websiteData: n,
                                        cmsBundleData: b,
                                        history: t,
                                        getAssetURL: o,
                                        getFontURL: i,
                                        getVideoURL: s,
                                        getCodeComponentURL: a,
                                        env: l,
                                        transitionAtom: c,
                                        setLocation: d,
                                        preloadLocation: f,
                                        renderOptions: E,
                                        withBaseStyles: S,
                                        addHeadTag: x,
                                        addBodyScript: h,
                                        loadComponentsOverNetwork: m,
                                        isFigmake: T,
                                        children: (0, We.jsx)(Dc.Provider, {
                                            value: {
                                                enabled: I?.enabled,
                                                openSettings: () => N(!0)
                                            },
                                            children: (0, We.jsxs)(oL, {
                                                reportingDomain: C,
                                                children: [(0, We.jsx)(SU, {
                                                    rootMaterializedNodePropsArrayAtom: e
                                                }), I?.enabled && (0, We.jsx)(BT, {
                                                    ...I,
                                                    guidToUrl: n.guidToUrl,
                                                    setLocation: d,
                                                    reportError: v,
                                                    isManaging: A,
                                                    setIsManaging: N
                                                }), (0, We.jsx)(gU, {
                                                    currentLocationAtom: u,
                                                    onPageRendered: p
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        }

                        function gU({
                            currentLocationAtom: e,
                            onPageRendered: t
                        }) {
                            let n = ge(e),
                                r = ge(al);
                            return (0, Hn.useEffect)(() => {
                                window.scrollTo(0, n?.scrollY ?? 0)
                            }, [n?.scrollY, n?.url]), (0, Hn.useEffect)(() => {
                                t && n?.url && t(n.url, r)
                            }, [n?.url, t, r]), Ik(), null
                        }

                        function Mg(e) {
                            let t = document.createRange().createContextualFragment(e);
                            return Array.from(t.children).forEach(r => r.setAttribute("data-user-element", "true")), t
                        }

                        function yU(e) {
                            let t = ee()?.websiteData.siteSettings ?? q(),
                                n = ge(t),
                                r = n?.customCodeHeadStart,
                                o = n?.customCodeHeadEnd,
                                i = n?.customCodeBodyStart,
                                s = n?.customCodeBodyEnd;
                            (0, Hn.useInsertionEffect)(() => {
                                if (e === "preview") return r && document.head.prepend(Mg(r)), o && document.head.append(Mg(o)), i && document.body.prepend(Mg(i)), s && document.body.append(Mg(s)), () => {
                                    document.querySelectorAll("[data-user-element]").forEach(l => l.remove())
                                }
                            }, [e, r, o, i, s])
                        }

                        function vU() {
                            let t = Oi()?.addBypassLinks,
                                n = (0, Hn.useCallback)(i => {
                                    i.stopPropagation(), i.preventDefault();
                                    let s = document.querySelector("main");
                                    s && s.focus()
                                }, []),
                                r = (0, Hn.useCallback)(i => {
                                    i.key === "Enter" && n(i)
                                }, [n]),
                                o = (0, Hn.useCallback)(i => {
                                    n(i)
                                }, [n]);
                            return t ? (0, We.jsx)("div", {
                                className: "bypass-link",
                                children: (0, We.jsx)("a", {
                                    role: "link",
                                    onKeyDown: r,
                                    onClick: o,
                                    tabIndex: 0,
                                    children: "Skip to main content"
                                })
                            }) : null
                        }

                        function SU({
                            rootMaterializedNodePropsArrayAtom: e
                        }) {
                            let t = fe(),
                                n = ee()?.withBaseStyles ?? !0,
                                r = ge(e),
                                o = wI(s => r.map(a => Gs(s, a, t)), [r, t]),
                                i = Ku();
                            return UP(), ZL(), yU(t), o.length > 0 ? (0, We.jsxs)(Sx, {
                                reducedMotion: i ? "never" : "user",
                                children: [(0, We.jsx)(YT, {
                                    withBaseStyles: n
                                }), (0, We.jsx)(KT, {}), (0, We.jsx)(P1, {}), (0, We.jsx)(vU, {}, `bypass-${o[0]?.id}`), o.map(s => (0, We.jsx)(Nr, {
                                    node: s,
                                    parent: null
                                }, `${s.id}`))]
                            }) : null
                        }
                        var xU = () => {};

                        function XT({
                            websiteData: e,
                            cmsBundleData: t,
                            history: n,
                            getAssetURL: r,
                            getFontURL: o,
                            getVideoURL: i,
                            getCodeComponentURL: s,
                            env: a,
                            transitionAtom: l,
                            setLocation: c,
                            withBaseStyles: u = !0,
                            addHeadTag: d,
                            addBodyScript: f,
                            loadComponentsOverNetwork: p = !1,
                            isFigmake: v = !1,
                            renderOptions: g,
                            children: x
                        }) {
                            return (0, We.jsx)(TS, {
                                websiteData: e,
                                cmsBundleData: t,
                                history: n,
                                getAssetURL: r,
                                getFontURL: o,
                                getVideoURL: i,
                                getCodeComponentURL: s,
                                env: a,
                                transitionAtom: l,
                                setLocation: c,
                                preloadLocation: xU,
                                renderOptions: g,
                                withBaseStyles: u,
                                addHeadTag: d,
                                addBodyScript: f,
                                loadComponentsOverNetwork: p,
                                isFigmake: v,
                                children: (0, We.jsxs)(We.Fragment, {
                                    children: [(0, We.jsx)(YT, {
                                        withBaseStyles: u,
                                        prepend: !0
                                    }), (0, We.jsx)(KT, {}), x]
                                })
                            })
                        }
                        var TU = "[Hydrated]";

                        function EU(e) {
                            (0, Hn.useEffect)(() => {
                                e && console.log(TU)
                            }, [e])
                        }

                        function qT(e = {}) {
                            return {
                                disableElementIds: e.compactDOM ?? !1,
                                disableDataAttributes: e.compactDOM ?? !1,
                                disableBehaviors: e.compactDOM ?? !1,
                                preferCssGradients: e.compactDOM ?? !1,
                                disableBackgroundDivs: e.compactDOM ?? !1,
                                useFigmaClipContentsForOverflow: e.compactDOM ?? !1,
                                disableTextMarkerVariables: e.compactDOM ?? !1,
                                disableHighSpecificityContainer: e.compactDOM ?? !1,
                                disableConstraintsBasedSizing: e.compactDOM ?? !1,
                                renderHiddenRootNodes: e.compactDOM ?? !1,
                                renderComponentSetNodes: e.compactDOM ?? !1,
                                disableImageOptimization: e.compactDOM ?? !1,
                                disableVariableErrors: e.compactDOM ?? !1,
                                optimizeForTailwindConversion: e.compactDOM ?? !1,
                                disableInlineSvgGeneration: e.disableInlineSvgGeneration ?? !1,
                                minimizeAutoLayoutWrappers: e.isMcpGeneration ?? !1,
                                dontUseChildDivForBorderStyles: e.isMcpGeneration ?? !1,
                                shouldOutputVariables: e.shouldOutputVariables ?? !1,
                                codeSyntaxLanguage: e.codeSyntaxLanguage ?? void 0,
                                independentRootNode: e.independentRootNode ?? !1,
                                disableAdjustLetterSpacing: e.disableAdjustLetterSpacing ?? !1,
                                previewingCodeBehavior: e.previewingCodeBehavior ?? !1,
                                testFlags: e.testFlags
                            }
                        }
                        var Bg = class {
                            capacity;
                            leakRate;
                            currentVolume;
                            lastTimestamp;
                            constructor(t, n) {
                                this.capacity = t, this.leakRate = n, this.currentVolume = 0, this.lastTimestamp = Date.now()
                            }
                            leak() {
                                let t = Date.now(),
                                    r = (t - this.lastTimestamp) * this.leakRate;
                                this.currentVolume = Math.max(0, this.currentVolume - r), this.lastTimestamp = t
                            }
                            tryAdd(t = 1) {
                                return this.leak(), this.currentVolume + t <= this.capacity ? (this.currentVolume += t, !0) : !1
                            }
                        };

                        function CU(e, t, n) {
                            let r = bU(e, t);
                            return eD(r, n)
                        }

                        function bU(e, t) {
                            let n = bp();
                            Vu(n, nl(e));
                            let r = Ep(J().get, n, t)[0];
                            if (!r) throw new On(`Not found: ${t}`);
                            let o = r.id;
                            return {
                                key: "root",
                                nodeById: n.nodeById,
                                assets: n.assets,
                                nodeId: o,
                                preexpandedNodeId: o,
                                parentStates: null,
                                modeContext: {},
                                parentState: ar.createRoot(n, null, {
                                    disableVariableErrors: !1
                                }),
                                animateRootIds: new Set,
                                stablePathToAssetHash: n.stablePathToAssetHash,
                                assetIdToGuid: n.assetIdToGuid,
                                guidToUrl: n.guidToUrl
                            }
                        }

                        function eD(e, t) {
                            try {
                                let n = Gs(J().get, e, t),
                                    r = n.visible ? n.materializedChildNodeProps?.map(i => eD(i, t)) : void 0,
                                    o = 1;
                                if (r)
                                    for (let i of r) o += i.nodesInSubtree;
                                return delete n.interactionHandlers, delete n.materializedChildNodeProps, delete n.transitionProps, delete n.variableState, delete n.modeContext, structuredClone(n), {
                                    node: n,
                                    children: r,
                                    nodesInSubtree: o
                                }
                            } catch (n) {
                                return console.log("Materialization error", n), {
                                    node: {
                                        type: "ERROR",
                                        name: n.message
                                    },
                                    nodesInSubtree: 1
                                }
                            }
                        }
                        var wU = "[Hydration Error]",
                            IU = ["hydrat", "Minified React error #418", "Minified React error #423", "Minified React error #424", "Minified React error #425"],
                            tD = class {
                                root;
                                container;
                                websiteData;
                                cmsBundleDataAtom;
                                env;
                                pendingLocationAtom;
                                currentLocationAtom;
                                transitionAtom;
                                getPage;
                                getAssetURL;
                                getVideoURL;
                                getFontURL;
                                history;
                                onWindowResize = null;
                                rootMaterializedNodePropsArrayAtom;
                                materializedRenderOptionsAtom;
                                codeComponentsVersion;
                                assetsVersion;
                                fontsVersion;
                                videoVersion;
                                bundleId;
                                loadComponentsOverNetwork;
                                wasServerRendered;
                                classNamesToStyles;
                                globalStyleSheets;
                                linkTags;
                                metaTags;
                                bodyScripts = [];
                                title;
                                withBaseStyles;
                                isFigmake;
                                reportingDomain;
                                onPageRendered;
                                onReactError;
                                onLocationChange;
                                needsHydration = !1;
                                _resolveRootsRuntimeAtomForTests = void 0;
                                _rootsRuntimeAtomForTestsPromise = void 0;
                                getPagePreloadCache = new Map;
                                materializedRenderOptions;
                                constructor({
                                    container: t,
                                    env: n,
                                    loadComponentsOverNetwork: r = !1,
                                    history: o,
                                    getAssetURL: i = void 0,
                                    getFontURL: s = void 0,
                                    getVideoURL: a = void 0,
                                    getPage: l = void 0,
                                    onPageRendered: c,
                                    onReactError: u = _u,
                                    onLocationChange: d,
                                    sendMessage: f = II,
                                    codeComponentsVersion: p,
                                    assetsVersion: v,
                                    fontsVersion: g,
                                    videoVersion: x,
                                    bundleId: h,
                                    renderOptions: m = {},
                                    wasServerRendered: y = !1,
                                    withBaseStyles: S = !0,
                                    reportingDomain: T,
                                    userId: C,
                                    analyticsHeaders: E,
                                    bundleCreationDate: b,
                                    isFigmake: R
                                }) {
                                    if (this.container = t, this.bundleId = h, this.env = n, this.withBaseStyles = S, this.pendingLocationAtom = q(null), this.currentLocationAtom = q(null), this.transitionAtom = q(void 0), this.getPage = l ?? this.defaultGetPage, this.getAssetURL = i || this.defaultGetAssetURL, this.getFontURL = s || this.defaultGetFontURL, this.getVideoURL = a || this.defaultGetVideoURL, s1(f), o || (o = new kU(I => this.setLocation(I, !0))), this.websiteData = bp(), this.cmsBundleDataAtom = q(null), this.history = o, this.loadComponentsOverNetwork = r, this.wasServerRendered = y, this.needsHydration = y, this.classNamesToStyles = {}, this.globalStyleSheets = {}, this.linkTags = [], this.metaTags = [], this.isFigmake = !!R, this.onPageRendered = c, this.onReactError = u, this.onLocationChange = d, this.reportingDomain = T, ze.init({
                                            env: n,
                                            reportingDomain: T || "",
                                            rateLimiter: new Bg(100, 1 / 1e3),
                                            analyticsHeaders: E,
                                            userId: C,
                                            bundleId: h,
                                            bundleCreationDate: b
                                        }), this.materializedRenderOptions = qT(m), this.materializedRenderOptionsAtom = q(this.materializedRenderOptions), this.rootMaterializedNodePropsArrayAtom = q(I => {
                                            let A = I(this.currentLocationAtom);
                                            if (!A) return [];
                                            let N = Ep(I, this.websiteData, A.url);
                                            if (!N || N.length === 0) throw new On(`Not found: ${A.url}`);
                                            return this._resolveRootsRuntimeAtomForTests?.(), N.map(O => {
                                                let L = O.id;
                                                return {
                                                    key: L,
                                                    nodeById: this.websiteData.nodeById,
                                                    assets: this.websiteData.assets,
                                                    assetIdToGuid: this.websiteData.assetIdToGuid,
                                                    guidToUrl: this.websiteData.guidToUrl,
                                                    animateRootIds: this.websiteData.animateRootIds,
                                                    stablePathToAssetHash: this.websiteData.stablePathToAssetHash,
                                                    nodeId: L,
                                                    preexpandedNodeId: L,
                                                    modeContext: {},
                                                    parentStates: null,
                                                    parentState: ar.createRoot(this.websiteData, I(this.cmsBundleDataAtom), this.materializedRenderOptions)
                                                }
                                            })
                                        }), this.codeComponentsVersion = p, this.assetsVersion = v, this.fontsVersion = g, this.videoVersion = x, this.isPreview() || this.isPublished() || this.isSnapshot()) {
                                        this.onWindowResize = () => {
                                            J().set(al, {
                                                width: window.innerWidth,
                                                height: window.innerHeight
                                            })
                                        }, this.onWindowResize(), window.addEventListener("resize", this.onWindowResize);
                                        let I = (A, N, O, L, w) => {
                                            w && ze.reportError(w)
                                        };
                                        window.addEventListener("error", I)
                                    }
                                    if (this.isPreview() || this.isPublished() && !this.wasServerRendered) {
                                        if (!t) throw new ne("Container is required in order to render the site.");
                                        this.root = (0, Fg.createRoot)(t), this.root.render(this.createWebsiteElement())
                                    }
                                }
                                isServer() {
                                    return this.env === "server"
                                }
                                isPreview() {
                                    return this.env === "preview"
                                }
                                isPublished() {
                                    return this.env === "published"
                                }
                                isSnapshot() {
                                    return this.env === "snapshot"
                                }
                                createWebsiteElement() {
                                    return (0, Vg.createElement)(JL, {
                                        websiteData: this.websiteData,
                                        cmsBundleDataAtom: this.cmsBundleDataAtom,
                                        env: this.env,
                                        rootMaterializedNodePropsArrayAtom: this.rootMaterializedNodePropsArrayAtom,
                                        history: this.history,
                                        getAssetURL: this.getAssetURL,
                                        getFontURL: this.getFontURL,
                                        getVideoURL: this.getVideoURL,
                                        getCodeComponentURL: this.getCodeComponentURL,
                                        transitionAtom: this.transitionAtom,
                                        withBaseStyles: this.withBaseStyles,
                                        currentLocationAtom: this.currentLocationAtom,
                                        setLocation: t => this.setLocation(t, !1),
                                        preloadLocation: t => {
                                            this.preloadLocation(t)
                                        },
                                        reportingDomain: this.reportingDomain,
                                        onPageRendered: this.onPageRendered,
                                        onReactError: this.handleReactError,
                                        renderOptionsAtom: this.materializedRenderOptionsAtom,
                                        addHeadTag: t => {
                                            t.type === "class-style" ? this.classNamesToStyles[t.className] = {
                                                cssProperties: t.cssProperties,
                                                classNameSourceStr: t.classNameSourceStr
                                            } : t.type === "global-style" ? this.globalStyleSheets[t.styleElId] = t.styleSheet : t.type === "link" ? this.linkTags.push(t) : t.type === "meta" ? this.metaTags.push(t) : t.type === "title" && (this.title = t.title)
                                        },
                                        addBodyScript: t => {
                                            this.bodyScripts.push(t)
                                        },
                                        loadComponentsOverNetwork: this.loadComponentsOverNetwork,
                                        wasServerRendered: this.wasServerRendered,
                                        isFigmake: this.isFigmake
                                    })
                                }
                                defaultGetAssetURL = (t, {
                                    width: n,
                                    height: r
                                } = {}) => {
                                    if (this.assetsVersion) {
                                        let o = new URLSearchParams;
                                        n && o.set("w", n.toString()), r && o.set("h", r.toString());
                                        let i = o.size > 0 ? `?${o.toString()}` : "";
                                        return `/_assets/${this.assetsVersion}/${t}${i}`
                                    }
                                    return t
                                };
                                defaultGetFontURL = (t, n) => n === "CUSTOM" ? `/_user_fonts/${this.fontsVersion || "v1"}/${t}` : t;
                                defaultGetVideoURL = (t, n) => this.isPreview() ? t : `/_videos/${this.videoVersion || "v1"}/${n}`;
                                defaultGetPage = async t => {
                                    let n = t === "/" ? "/_index" : t,
                                        r = `/_json/${this.bundleId}${n}.json`,
                                        o = await fetch(r, {
                                            method: "GET",
                                            credentials: "include",
                                            mode: "cors"
                                        });
                                    o.status === 401 && o.headers.get("x-figma-needs-reauth") && (console.log("Re-authentication required; reloading the page"), window.location.reload());
                                    let i = await o.json(),
                                        s = !1;
                                    if (i.nodeById)
                                        for (let l in i.nodeById) {
                                            let c = i.nodeById[l];
                                            if (c && (c.cmsCollectionBindingProperties || c.cmsItemFieldBindingProperties)) {
                                                s = !0;
                                                break
                                            }
                                        }
                                    let a = null;
                                    if (s) try {
                                        let l = `/_json/${this.bundleId}/_cms${n}.json`,
                                            c = await fetch(l, {
                                                method: "GET",
                                                credentials: "include",
                                                mode: "cors"
                                            });
                                        c.ok && (a = await c.json())
                                    } catch (l) {
                                        ze.reportError(new On("Error loading CMS resource", l)), console.error(l)
                                    }
                                    return {
                                        resource: i,
                                        cmsResource: a
                                    }
                                };
                                preloadLocation(t) {
                                    let n = this.getPagePreloadCache.get(t);
                                    return n || (n = this.getPage(t), this.getPagePreloadCache.set(t, n)), n
                                }
                                setLocation(t, n) {
                                    if (t.url === "") return;
                                    let r = J();
                                    r.set(this.pendingLocationAtom, t), this.preloadLocation(t.url).then(({
                                        resource: o,
                                        cmsResource: i
                                    }) => {
                                        if (Vu(this.websiteData, nl(o)), i) {
                                            let s = SI(i),
                                                a = r.get(this.cmsBundleDataAtom);
                                            a || (a = PI()), LI(a, s), r.set(this.cmsBundleDataAtom, a)
                                        }
                                        n || this.history.push(t), r.set(this.currentLocationAtom, t), Ce(t.transition, r, r.get(this.transitionAtom)) || r.set(this.transitionAtom, t.transition), this.onLocationChange?.(this), this.needsHydration && (this.needsHydration = !1, this.hydrate())
                                    }).finally(() => {
                                        this.getPagePreloadCache.delete(t.url)
                                    })
                                }
                                getCodeComponentURL = () => {
                                    let t = J();
                                    if (this.codeComponentsVersion) {
                                        let o = t.get(this.websiteData.sourceCodeHash);
                                        return o ? `/_components/${this.codeComponentsVersion}/${o}.js` : (console.warn("Source code hash not found"), "")
                                    }
                                    let n = "data:text/javascript;charset=utf-8,",
                                        r = this.websiteData.compiledCode;
                                    return r == null ? (console.warn("Compiled code not found"), n) : n + encodeURIComponent(t.get(r) ?? "")
                                };
                                createSnapshotWrapper(t) {
                                    let n = J();
                                    return (0, Vg.createElement)(XT, {
                                        websiteData: this.websiteData,
                                        cmsBundleData: n.get(this.cmsBundleDataAtom),
                                        history: this.history,
                                        getAssetURL: this.getAssetURL,
                                        getFontURL: this.getFontURL,
                                        getVideoURL: this.getVideoURL,
                                        getCodeComponentURL: this.getCodeComponentURL,
                                        env: this.env,
                                        transitionAtom: this.transitionAtom,
                                        setLocation: () => {},
                                        addHeadTag: () => {},
                                        addBodyScript: () => {},
                                        loadComponentsOverNetwork: this.loadComponentsOverNetwork,
                                        withBaseStyles: this.withBaseStyles,
                                        isFigmake: this.isFigmake,
                                        renderOptions: this.materializedRenderOptions
                                    }, t)
                                }
                                resetGlobalVariableStateForSnapshot() {
                                    if (this.isSnapshot()) {
                                        let t = J();
                                        ar.createRoot(this.websiteData, t.get(this.cmsBundleDataAtom), this.materializedRenderOptions, !0)
                                    }
                                }
                                createLayerElement({
                                    guid: t,
                                    renderedByCode: n
                                }) {
                                    let r = J();
                                    r.set(this.currentLocationAtom, {
                                        url: "/"
                                    });
                                    let o = this.websiteData.nodeById.get(t),
                                        i = r.get(o),
                                        s = J().get(this.rootMaterializedNodePropsArrayAtom),
                                        a;
                                    s && (a = s[0]);
                                    let l = J().get(sl);
                                    if (!a || !i) return null;
                                    a.nodeId = t, a.preexpandedNodeId = t, a.breakpointWidth = l;
                                    let c = Gs(J().get, a, this.env);
                                    return function(d) {
                                        let f = d ? Object.fromEntries(Object.entries(d).filter(([v]) => v.startsWith("data-"))) : {},
                                            p = {
                                                renderedByCode: n,
                                                style: d?.style,
                                                className: d?.className,
                                                dataAttributes: f
                                            };
                                        return (0, Vg.createElement)(Nr, {
                                            node: c,
                                            parent: null,
                                            context: p
                                        })
                                    }
                                }
                                refresh() {
                                    window.location.reload()
                                }
                                pushPageData(t) {
                                    Vu(this.websiteData, nl(t))
                                }
                                pushAssetData(t) {
                                    xS(this.websiteData, vI(t))
                                }
                                unmount() {
                                    this.isServer() || (this.onWindowResize && window.removeEventListener("resize", this.onWindowResize), setTimeout(() => {
                                        this.root?.unmount()
                                    }))
                                }
                                hydrate() {
                                    this.wasServerRendered, me(!!this.container, "Container must be provided in order to hydrate the site."), this.isFigmake || U1(), (0, Fg.hydrateRoot)(this.container, this.createWebsiteElement(), {
                                        onRecoverableError: (t, n) => {
                                            let r = t.message.toLocaleLowerCase(),
                                                o = !1;
                                            for (let i of IU)
                                                if (r.includes(i.toLocaleLowerCase())) {
                                                    o = !0;
                                                    break
                                                } o ? console.error(wU, t, t.cause ?? "", n.componentStack) : console.error(t, n.componentStack)
                                        }
                                    })
                                }
                                toggleDebugTools() {
                                    let t = J();
                                    t.set(Mu, !t.get(Mu))
                                }
                                _convertMaterializedNodePropsDataForTest(t) {
                                    let n = Gs(J().get, t, this.env),
                                        r = n.materializedChildNodeProps;
                                    return delete n.interactionHandlers, delete n.materializedChildNodeProps, delete n.transitionProps, "variableState" in n && delete n.variableState, "modeContext" in n && delete n.modeContext, {
                                        materializedNode: n,
                                        materializedChildNodeProps: r
                                    }
                                }
                                async _getSerializedMaterializedNodePropsArrayDataForTests() {
                                    J().get(this.rootMaterializedNodePropsArrayAtom) || (this._rootsRuntimeAtomForTestsPromise = new Promise(i => {
                                        this._resolveRootsRuntimeAtomForTests = i
                                    })), await this._rootsRuntimeAtomForTestsPromise;
                                    let t = J().get(this.rootMaterializedNodePropsArrayAtom);
                                    me(!!t && t.length > 0, "Root nodes not found");
                                    let n = {},
                                        r = i => {
                                            let s = this._convertMaterializedNodePropsDataForTest(i);
                                            n[s.materializedNode.id] = s.materializedNode, s.materializedChildNodeProps?.forEach(a => r(a))
                                        };
                                    return {
                                        rootIds: t.map(i => (r(i), this._convertMaterializedNodePropsDataForTest(i).materializedNode.id)),
                                        nodeByGuidMap: n
                                    }
                                }
                                listenForTestEvent(t) {
                                    return new Promise(n => {
                                        let r = o => {
                                            let i = o.detail.name;
                                            t === i && (window.removeEventListener("FigmaTestEvent", r), n(t))
                                        };
                                        window.addEventListener("FigmaTestEvent", r)
                                    })
                                }
                                setRenderOptions(t) {
                                    this.materializedRenderOptions = qT(t), J().set(this.materializedRenderOptionsAtom, this.materializedRenderOptions)
                                }
                                handleReactError = (t, n = {}) => {
                                    try {
                                        this.onReactError(t, n)
                                    } catch {}
                                    ze.reportError(t)
                                }
                            },
                            kU = class {
                                onPopState;
                                constructor(t) {
                                    this.onPopState = t, window.addEventListener("popstate", n => {
                                        let r = n.state;
                                        this.onPopState({
                                            ...this.current,
                                            scrollY: r?.scrollY
                                        })
                                    }), history.replaceState({}, "", this.href), t(this.current)
                                }
                                get current() {
                                    return {
                                        url: window.location.pathname,
                                        search: window.location.search
                                    }
                                }
                                get href() {
                                    let {
                                        url: t,
                                        search: n
                                    } = this.current;
                                    return nD(t, n)
                                }
                                push(t) {
                                    history.replaceState({
                                        scrollY: window.scrollY
                                    }, "", this.href), history.pushState({}, "", nD(t.url || "/", t.search || ""))
                                }
                                forward() {
                                    history.forward()
                                }
                                back() {
                                    history.back()
                                }
                            },
                            nD = (e, t) => e + t;
                        export {
                            wc as ActiveBreakpointContext, U0 as ActiveBreakpointProvider, CH as AppearBehaviorPresetTransition, Vd as BannerComponentType, io as BehaviorPresetEasingFunctions, EH as BehaviorPresetScrollParallaxSpeed, TH as BehaviorPresetStates, WO as BehaviorPresetTransition, Ye as BehaviorType, Fe as BlendMode, aI as CmsRichTextNodeDefaults, hI as CodeComponentNodeDefaults, gI as CodeFileNodeDefaults, pI as CodeInstanceNodeDefaults, mI as CodeLayerNodeDefaults, Jw as ComponentNodeDefaults, eI as ComponentSetNodeDefaults, zn as ConsentType, BT as CookieConsentBanner, Dc as CookieConsentContext, $U as CornerRadiusShapeTraitsDefaults, hS as CornerTraitDefaults, Cj as DEFAULT_HISTORY_STATE, CT as DEFAULT_SITE_DESCRIPTION, ET as DEFAULT_SITE_TITLE, Pu as DefaultShapeTraitsDefaults, St as EasingType, we as ExpressionFunction, Yw as FontVariantPosition, rI as FrameNodeDefaults, Zn as FrameTraitsDefaults, iI as GroupNodeDefaults, yI as HTMLWidgetType, Ou as HasBlendModeAndOpacityTraitDefaults, JM as HasEffectsTraitDefaults, eB as HasFramePropertiesTraitDefaults, gp as HasGeometryTraitDefaults, hp as HasLayoutTraitDefaults, qw as HasMaskTraitDefaults, nI as ImageNodeDefaults, lI as InstanceNodeDefaults, GU as InteractionTraitDefaults, tB as IsInAnimateTreeTraitDefaults, tl as IsLayerTraitDefaults, bT as LOTTIEFILES_REGEX, Er as LayoutConstraintHorizontal, Cr as LayoutConstraintVertical, Ai as LineTypes, bH as MARQUEE_PRESET_DEFAULT_SPEED, fa as NewRenderHooksContext, Ag as RESET_STYLES_ID, cI as RectangleNodeDefaults, Qw as RectangularShapeTraitsDefaults, da as RenderHooksContext, sI as RepeaterNodeDefaults, Xw as ResponsiveTraitDefaults, tD as SitesRuntime, oI as SlotNodeDefaults, X as SmartAnimateType, Rd as SnapshotContext, XT as SnapshotWebsiteProvider, Lu as SourceCodeTraitsDefaults, tI as SvgNodeDefaults, mp as TextDecoration, uI as TextNodeDefaults, Zw as TypePropertiesTraitDefaults, fI as WebpageNodeDefaults, kc as WebsiteSettingsContext, Q0 as WebsiteSettingsProvider, dI as WidgetNodeDefaults, ei as XAlignment, ti as YAlignment, yp as applyDefaultsToPrototype, xs as buildFontFace, KH as createPropertySetters, kd as getChildNode, Id as getChildNodes, lg as getImageProp, CU as getMaterializedTreeForWebsite, Y0 as getPropertySetterNameMap, Yo as guidToDOMId, vp as isPaintGradient, N0 as makeFramerMotionDefinition, nl as parseBundle, gS as parseNode, e3 as parseSchemaData, TT as resetCSS, Wp as solidColor, wd as useAnimateNode
                        };
                      
