var Ju = Object.defineProperty;
var d = (t, e) => () => (t && (e = t(t = 0)), e);
var La = (t, e) => {
    for (var r in e) Ju(t, r, {
        get: e[r],
        enumerable: !0
    })
};

function Oa(t, e) {
    Object.assign(t, {
        [Symbol.for("figma.react.props")]: e
    })
}

function Ba(t, e) {
    Object.assign(t, {
        [Symbol.for("figma.interaction.data")]: e
    })
}

function Qr() {
    return window.__GLOBALS__.WebsiteSettingsContext ? window.__GLOBALS__.React.useContext(window.__GLOBALS__.WebsiteSettingsContext) : {
        shouldReduceMotion: !1
    }
}
var rf, of, nf, af, sf, lf, uf, mf, pf, cf, hf, df, ff, gf, vf, yf, xf, wf, Sf, bf, Tf, Pf, Af, Mf, Cf, Ef, Vf, Df, kf, Rf, Lf, Of, Bf, If, Ff, Ia = d(() => {
    rf = window.__GLOBALS__.React, {
        Children: of,
        cloneElement: nf,
        Component: af,
        createContext: sf,
        createElement: lf,
        createFactory: uf,
        createRef: mf,
        forwardRef: pf,
        Fragment: cf,
        isValidElement: hf,
        lazy: df,
        memo: ff,
        Profiler: gf,
        PureComponent: vf,
        startTransition: yf,
        StrictMode: xf,
        Suspense: wf,
        useCallback: Sf,
        useContext: bf,
        useDebugValue: Tf,
        useDeferredValue: Pf,
        useEffect: Af,
        useId: Mf,
        useImperativeHandle: Cf,
        useInsertionEffect: Ef,
        useLayoutEffect: Vf,
        useMemo: Df,
        useReducer: kf,
        useRef: Rf,
        useState: Lf,
        useSyncExternalStore: Of,
        useTransition: Bf,
        version: If
    } = window.__GLOBALS__.React;
    Ff = window.__GLOBALS__.React.forwardRef(function({
        children: e,
        renderText: r,
        renderTextCharacter: i,
        renderTextLine: o,
        renderTextWord: n,
        style: a,
        childrenStyles: s,
        onClick: l,
        onMouseEnter: u,
        onMouseLeave: m,
        onMouseDown: p,
        onMouseUp: c
    }, h) {
        let g = window.__GLOBALS__.React,
            w = window.__GLOBALS__.NewRenderHooksContext,
            y = g.useContext(w),
            f = {};
        r && (f.renderText = r), i && (f.renderTextCharacter = i), o && (f.renderTextLine = o), n && (f.renderTextWord = n), h && (f.nodeRef = h), a && (f.style = a), s && (f.childrenStyles = s), l && (f.onClick = l), p && (f.onMouseDown = p), c && (f.onMouseUp = c), u && (f.onMouseEnter = u), m && (f.onMouseLeave = m);
        let S = y.cloneWithAdditionalHooks(f);
        return g.createElement(w.Provider, {
            value: S
        }, e)
    })
});

function sr(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function yt(t, e) {
    let r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}

function ja([...t], e, r) {
    let i = e < 0 ? t.length + e : e;
    if (i >= 0 && i < t.length) {
        let o = r < 0 ? t.length + r : r,
            [n] = t.splice(e, 1);
        t.splice(o, 0, n)
    }
    return t
}

function ei(t) {
    return typeof t == "object" && t !== null
}

function Wt(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}

function ye(t, e) {
    return e ? t * (1e3 / e) : 0
}

function rm(t, e, r, i, o) {
    let n, a, s = 0;
    do a = e + (r - e) / 2, n = Ua(a, i, o) - t, n > 0 ? r = a : e = a; while (Math.abs(n) > tm && ++s < em);
    return a
}

function lr(t, e, r, i) {
    if (t === e && r === i) return I;
    let o = n => rm(n, 0, 1, t, r);
    return n => n === 0 || n === 1 ? n : Ua(o(n), e, i)
}

function ii(t, e) {
    return Io(t) ? t[Na(0, t.length, e)] : t
}
var q, Et, B, et, ti, ri, I, Qu, xt, ut, ve, F, Z, Na, Ua, tm, em, _a, Wa, Ga, Vo, Do, ko, Ro, Lo, Oo, im, om, Bo, Io, oi, Fa, nm, ni, Ha = d(() => {
    q = (t, e, r) => r > e ? e : r < t ? t : r, Et = () => {}, B = () => {}, et = {}, ti = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    ri = t => /^0[^.\s]+$/u.test(t);
    I = t => t, Qu = (t, e) => r => e(t(r)), xt = (...t) => t.reduce(Qu), ut = (t, e, r) => {
        let i = e - t;
        return i === 0 ? 1 : (r - t) / i
    }, ve = class {
        constructor() {
            this.subscriptions = []
        }
        add(t) {
            return sr(this.subscriptions, t), () => yt(this.subscriptions, t)
        }
        notify(t, e, r) {
            let i = this.subscriptions.length;
            if (i)
                if (i === 1) this.subscriptions[0](t, e, r);
                else
                    for (let o = 0; o < i; o++) {
                        let n = this.subscriptions[o];
                        n && n(t, e, r)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }, F = t => t * 1e3, Z = t => t / 1e3;
    Na = (t, e, r) => {
        let i = e - t;
        return ((r - t) % i + i) % i + t
    }, Ua = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t, tm = 1e-7, em = 12;
    _a = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Wa = t => e => 1 - t(1 - e), Ga = lr(.33, 1.53, .69, .99), Vo = Wa(Ga), Do = _a(Vo), ko = t => (t *= 2) < 1 ? .5 * Vo(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))), Ro = t => 1 - Math.sin(Math.acos(t)), Lo = Wa(Ro), Oo = _a(Ro), im = lr(.42, 0, 1, 1), om = lr(0, 0, .58, 1), Bo = lr(.42, 0, .58, 1), Io = t => Array.isArray(t) && typeof t[0] != "number";
    oi = t => Array.isArray(t) && typeof t[0] == "number", Fa = {
        linear: I,
        easeIn: im,
        easeInOut: Bo,
        easeOut: om,
        circIn: Ro,
        circInOut: Oo,
        circOut: Lo,
        backIn: Vo,
        backInOut: Do,
        backOut: Ga,
        anticipate: ko
    }, nm = t => typeof t == "string", ni = t => {
        if (oi(t)) {
            B(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            let [e, r, i, o] = t;
            return lr(e, r, i, o)
        } else if (nm(t)) return B(Fa[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Fa[t];
        return t
    }
});
var v = d(() => {
    Ha()
});

function am(t, e) {
    let r = new Set,
        i = new Set,
        o = !1,
        n = !1,
        a = new WeakSet,
        s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = 0;

    function u(p) {
        a.has(p) && (m.schedule(p), t()), l++, p(s)
    }
    let m = {
        schedule: (p, c = !1, h = !1) => {
            let g = h && o ? r : i;
            return c && a.add(p), g.has(p) || g.add(p), p
        },
        cancel: p => {
            i.delete(p), a.delete(p)
        },
        process: p => {
            if (s = p, o) {
                n = !0;
                return
            }
            o = !0, [r, i] = [i, r], r.forEach(u), e && gt.value && gt.value.frameloop[e].push(l), l = 0, r.clear(), o = !1, n && (n = !1, m.process(p))
        }
    };
    return m
}

function ps(t, e) {
    let r = !1,
        i = !0,
        o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        n = () => r = !0,
        a = ur.reduce((f, S) => (f[S] = am(n, e ? S : void 0), f), {}),
        {
            setup: s,
            read: l,
            resolveKeyframes: u,
            preUpdate: m,
            update: p,
            preRender: c,
            render: h,
            postRender: g
        } = a,
        w = () => {
            let f = et.useManualTiming ? o.timestamp : performance.now();
            r = !1, et.useManualTiming || (o.delta = i ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, sm), 1)), o.timestamp = f, o.isProcessing = !0, s.process(o), l.process(o), u.process(o), m.process(o), p.process(o), c.process(o), h.process(o), g.process(o), o.isProcessing = !1, r && e && (i = !1, t(w))
        },
        y = () => {
            r = !0, i = !0, o.isProcessing || t(w)
        };
    return {
        schedule: ur.reduce((f, S) => {
            let P = a[S];
            return f[S] = (E, M = !1, V = !1) => (r || y(), P.schedule(E, M, V)), f
        }, {}),
        cancel: f => {
            for (let S = 0; S < ur.length; S++) a[ur[S]].cancel(f)
        },
        state: o,
        steps: a
    }
}

function lm() {
    si = void 0
}

function pm(t) {
    return t == null
}

function dm(t) {
    let e = "",
        r = "",
        i = "",
        o = "";
    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), o = t.substring(4, 5), e += e, r += r, i += i, o += o), {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}

function ym(t) {
    return isNaN(t) && typeof t == "string" && (t.match(rn)?.length || 0) + (t.match(vm)?.length || 0) > 0
}

function dr(t) {
    let e = t.toString(),
        r = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        o = [],
        n = 0,
        a = e.replace(Sm, s => (z.test(s) ? (i.color.push(n), o.push(fs), r.push(z.parse(s))) : s.startsWith(wm) ? (i.var.push(n), o.push(xm), r.push(s)) : (i.number.push(n), o.push(ds), r.push(parseFloat(s))), ++n, za)).split(za);
    return {
        values: r,
        split: a,
        indexes: i,
        types: o
    }
}

function gs(t) {
    return dr(t).values
}

function vs(t) {
    let {
        split: e,
        types: r
    } = dr(t), i = e.length;
    return o => {
        let n = "";
        for (let a = 0; a < i; a++)
            if (n += e[a], o[a] !== void 0) {
                let s = r[a];
                s === ds ? n += pr(o[a]) : s === fs ? n += z.transform(o[a]) : n += o[a]
            } return n
    }
}

function Tm(t) {
    let e = gs(t);
    return vs(t)(e.map(bm))
}

function jo(t, e, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}

function Pm({
    hue: t,
    saturation: e,
    lightness: r,
    alpha: i
}) {
    t /= 360, e /= 100, r /= 100;
    let o = 0,
        n = 0,
        a = 0;
    if (!e) o = n = a = r;
    else {
        let s = r < .5 ? r * (1 + e) : r + e - r * e,
            l = 2 * r - s;
        o = jo(l, s, t + 1 / 3), n = jo(l, s, t), a = jo(l, s, t - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(n * 255),
        blue: Math.round(a * 255),
        alpha: i
    }
}

function ci(t, e) {
    return r => r > 0 ? e : t
}

function Ka(t) {
    let e = Mm(t);
    if (Et(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
    let r = e.parse(t);
    return e === xe && (r = Pm(r)), r
}

function Cm(t, e) {
    return Ho.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}

function Em(t, e) {
    return r => D(t, e, r)
}

function nn(t) {
    return typeof t == "number" ? Em : typeof t == "string" ? en(t) ? ci : z.test(t) ? Xa : km : Array.isArray(t) ? ys : typeof t == "object" ? z.test(t) ? Xa : Vm : ci
}

function ys(t, e) {
    let r = [...t],
        i = r.length,
        o = t.map((n, a) => nn(n)(n, e[a]));
    return n => {
        for (let a = 0; a < i; a++) r[a] = o[a](n);
        return r
    }
}

function Vm(t, e) {
    let r = {
            ...t,
            ...e
        },
        i = {};
    for (let o in r) t[o] !== void 0 && e[o] !== void 0 && (i[o] = nn(t[o])(t[o], e[o]));
    return o => {
        for (let n in i) r[n] = i[n](o);
        return r
    }
}

function Dm(t, e) {
    let r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < e.values.length; o++) {
        let n = e.types[o],
            a = t.indexes[n][i[n]],
            s = t.values[a] ?? 0;
        r[o] = s, i[n]++
    }
    return r
}

function xs(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? D(t, e, r) : nn(t)(t, e)
}

function an(t) {
    let e = 0,
        r = 50,
        i = t.next(e);
    for (; !i.done && e < 2e4;) e += r, i = t.next(e);
    return e >= 2e4 ? 1 / 0 : e
}

function sn(t, e = 100, r) {
    let i = r({
            ...t,
            keyframes: [0, e]
        }),
        o = Math.min(an(i), 2e4);
    return {
        type: "keyframes",
        ease: n => i.next(o * n).value / e,
        duration: Z(o)
    }
}

function Ss(t, e, r) {
    let i = Math.max(e - Lm, 0);
    return ye(r - t(i), e - i)
}

function Om({
    duration: t = U.duration,
    bounce: e = U.bounce,
    velocity: r = U.velocity,
    mass: i = U.mass
}) {
    let o, n;
    Et(t <= F(U.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let a = 1 - e;
    a = q(U.minDamping, U.maxDamping, a), t = q(U.minDuration, U.maxDuration, Z(t)), a < 1 ? (o = u => {
        let m = u * a,
            p = m * t,
            c = m - r,
            h = $o(u, a),
            g = Math.exp(-p);
        return Uo - c / h * g
    }, n = u => {
        let m = u * a * t,
            p = m * r + r,
            c = Math.pow(a, 2) * Math.pow(u, 2) * t,
            h = Math.exp(-m),
            g = $o(Math.pow(u, 2), a);
        return (-o(u) + Uo > 0 ? -1 : 1) * ((p - c) * h) / g
    }) : (o = u => {
        let m = Math.exp(-u * t),
            p = (u - r) * t + 1;
        return -Uo + m * p
    }, n = u => {
        let m = Math.exp(-u * t),
            p = (r - u) * (t * t);
        return m * p
    });
    let s = 5 / t,
        l = Im(o, n, s);
    if (t = F(t), isNaN(l)) return {
        stiffness: U.stiffness,
        damping: U.damping,
        duration: t
    };
    {
        let u = Math.pow(l, 2) * i;
        return {
            stiffness: u,
            damping: a * 2 * Math.sqrt(i * u),
            duration: t
        }
    }
}

function Im(t, e, r) {
    let i = r;
    for (let o = 1; o < Bm; o++) i = i - t(i) / e(i);
    return i
}

function $o(t, e) {
    return t * Math.sqrt(1 - e * e)
}

function Ya(t, e) {
    return e.some(r => t[r] !== void 0)
}

function Nm(t) {
    let e = {
        velocity: U.velocity,
        stiffness: U.stiffness,
        damping: U.damping,
        mass: U.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Ya(t, jm) && Ya(t, Fm))
        if (t.visualDuration) {
            let r = t.visualDuration,
                i = 2 * Math.PI / (r * 1.2),
                o = i * i,
                n = 2 * q(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
            e = {
                ...e,
                mass: U.mass,
                stiffness: o,
                damping: n
            }
        } else {
            let r = Om(t);
            e = {
                ...e,
                ...r,
                mass: U.mass
            }, e.isResolvedFromDuration = !0
        } return e
}

function be(t = U.visualDuration, e = U.bounce) {
    let r = typeof t != "object" ? {
            visualDuration: t,
            keyframes: [0, 1],
            bounce: e
        } : t,
        {
            restSpeed: i,
            restDelta: o
        } = r,
        n = r.keyframes[0],
        a = r.keyframes[r.keyframes.length - 1],
        s = {
            done: !1,
            value: n
        },
        {
            stiffness: l,
            damping: u,
            mass: m,
            duration: p,
            velocity: c,
            isResolvedFromDuration: h
        } = Nm({
            ...r,
            velocity: -Z(r.velocity || 0)
        }),
        g = c || 0,
        w = u / (2 * Math.sqrt(l * m)),
        y = a - n,
        f = Z(Math.sqrt(l / m)),
        S = Math.abs(y) < 5;
    i || (i = S ? U.restSpeed.granular : U.restSpeed.default), o || (o = S ? U.restDelta.granular : U.restDelta.default);
    let P;
    if (w < 1) {
        let M = $o(f, w);
        P = V => {
            let N = Math.exp(-w * f * V);
            return a - N * ((g + w * f * y) / M * Math.sin(M * V) + y * Math.cos(M * V))
        }
    } else if (w === 1) P = M => a - Math.exp(-f * M) * (y + (g + f * y) * M);
    else {
        let M = f * Math.sqrt(w * w - 1);
        P = V => {
            let N = Math.exp(-w * f * V),
                C = Math.min(M * V, 300);
            return a - N * ((g + w * f * y) * Math.sinh(C) + M * y * Math.cosh(C)) / M
        }
    }
    let E = {
        calculatedDuration: h && p || null,
        next: M => {
            let V = P(M);
            if (h) s.done = M >= p;
            else {
                let N = M === 0 ? g : 0;
                w < 1 && (N = M === 0 ? F(g) : Ss(P, M, V));
                let C = Math.abs(N) <= i,
                    R = Math.abs(a - V) <= o;
                s.done = C && R
            }
            return s.value = s.done ? a : V, s
        },
        toString: () => {
            let M = Math.min(an(E), 2e4),
                V = ws(N => E.next(M * N).value, M, 30);
            return M + "ms " + V
        },
        toTransition: () => {}
    };
    return E
}

function zo({
    keyframes: t,
    velocity: e = 0,
    power: r = .8,
    timeConstant: i = 325,
    bounceDamping: o = 10,
    bounceStiffness: n = 500,
    modifyTarget: a,
    min: s,
    max: l,
    restDelta: u = .5,
    restSpeed: m
}) {
    let p = t[0],
        c = {
            done: !1,
            value: p
        },
        h = C => s !== void 0 && C < s || l !== void 0 && C > l,
        g = C => s === void 0 ? l : l === void 0 || Math.abs(s - C) < Math.abs(l - C) ? s : l,
        w = r * e,
        y = p + w,
        f = a === void 0 ? y : a(y);
    f !== y && (w = f - p);
    let S = C => -w * Math.exp(-C / i),
        P = C => f + S(C),
        E = C => {
            let R = S(C),
                _t = P(C);
            c.done = Math.abs(R) <= u, c.value = c.done ? f : _t
        },
        M, V, N = C => {
            h(c.value) && (M = C, V = be({
                keyframes: [c.value, g(c.value)],
                velocity: Ss(P, C, c.value),
                damping: o,
                stiffness: n,
                restDelta: u,
                restSpeed: m
            }))
        };
    return N(0), {
        calculatedDuration: null,
        next: C => {
            let R = !1;
            return !V && M === void 0 && (R = !0, E(C), N(C)), M !== void 0 && C >= M ? V.next(C - M) : (!R && E(C), c)
        }
    }
}

function Um(t, e, r) {
    let i = [],
        o = r || et.mix || xs,
        n = t.length - 1;
    for (let a = 0; a < n; a++) {
        let s = o(t[a], t[a + 1]);
        if (e) {
            let l = Array.isArray(e) ? e[a] || I : e;
            s = xt(l, s)
        }
        i.push(s)
    }
    return i
}

function fi(t, e, {
    clamp: r = !0,
    ease: i,
    mixer: o
} = {}) {
    let n = t.length;
    if (B(n === e.length, "Both input and output ranges must be the same length", "range-length"), n === 1) return () => e[0];
    if (n === 2 && e[0] === e[1]) return () => e[1];
    let a = t[0] === t[1];
    t[0] > t[n - 1] && (t = [...t].reverse(), e = [...e].reverse());
    let s = Um(e, i, o),
        l = s.length,
        u = m => {
            if (a && m < t[0]) return e[0];
            let p = 0;
            if (l > 1)
                for (; p < t.length - 2 && !(m < t[p + 1]); p++);
            let c = ut(t[p], t[p + 1], m);
            return s[p](c)
        };
    return r ? m => u(q(t[0], t[n - 1], m)) : u
}

function ln(t, e) {
    let r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        let o = ut(0, e, i);
        t.push(D(r, 1, o))
    }
}

function gr(t) {
    let e = [0];
    return ln(e, t.length - 1), e
}

function _m(t, e) {
    return t.map(r => r * e)
}

function Wm(t, e) {
    return t.map(() => e || Bo).splice(0, t.length - 1)
}

function cr({
    duration: t = 300,
    keyframes: e,
    times: r,
    ease: i = "easeInOut"
}) {
    let o = Io(i) ? i.map(ni) : ni(i),
        n = {
            done: !1,
            value: e[0]
        },
        a = _m(r && r.length === e.length ? r : gr(e), t),
        s = fi(a, e, {
            ease: Array.isArray(o) ? o : Wm(e, o)
        });
    return {
        calculatedDuration: t,
        next: l => (n.value = s(l), n.done = l >= t, n)
    }
}

function un(t, {
    repeat: e,
    repeatType: r = "loop"
}, i, o = 1) {
    let n = t.filter(Gm),
        a = o < 0 || e && r !== "loop" && e % 2 === 1 ? 0 : n.length - 1;
    return !a || i === void 0 ? n[a] : i
}

function bs(t) {
    typeof t.type == "string" && (t.type = Hm[t.type])
}

function pn(t) {
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
}

function hi(t) {
    return t.includes("scale") ? 1 : 0
}

function Yo(t, e) {
    if (!t || t === "none") return hi(e);
    let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
        i, o;
    if (r) i = Km, o = r;
    else {
        let s = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        i = zm, o = s
    }
    if (!o) return hi(e);
    let n = i[e],
        a = o[1].split(",").map(Xm);
    return typeof n == "function" ? n(a) : a[n]
}

function Xm(t) {
    return parseFloat(t.trim())
}

function Zm(t) {
    let e = [];
    return qm.forEach(r => {
        let i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
    }), e
}

function Ps() {
    if (Zo) {
        let t = Array.from(ee).filter(i => i.needsMeasurement),
            e = new Set(t.map(i => i.element)),
            r = new Map;
        e.forEach(i => {
            let o = Zm(i);
            o.length && (r.set(i, o), i.render())
        }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
            i.render();
            let o = r.get(i);
            o && o.forEach(([n, a]) => {
                i.getValue(n)?.set(a)
            })
        }), t.forEach(i => i.measureEndState()), t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    Zo = !1, qo = !1, ee.forEach(t => t.complete(Jo)), ee.clear()
}

function As() {
    ee.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (Zo = !0)
    })
}

function Jm() {
    Jo = !0, As(), Ps(), Jo = !1
}

function Qm(t, e, r) {
    cn(e) ? t.style.setProperty(e, r) : t.style[e] = r
}

function ep(t, e) {
    let r = Wt(t);
    return () => tp[e] ?? r()
}

function Cs(t, e) {
    if (t) return typeof t == "function" ? Ms() ? ws(t, e) : "ease-out" : oi(t) ? mr(t) : Array.isArray(t) ? t.map(r => Cs(r, e) || ts.easeOut) : ts[t]
}

function Es(t, e, r, {
    delay: i = 0,
    duration: o = 300,
    repeat: n = 0,
    repeatType: a = "loop",
    ease: s = "easeOut",
    times: l
} = {}, u = void 0) {
    let m = {
        [e]: r
    };
    l && (m.offset = l);
    let p = Cs(s, o);
    Array.isArray(p) && (m.easing = p), gt.value && Ht.waapi++;
    let c = {
        delay: i,
        duration: o,
        easing: Array.isArray(p) ? "linear" : p,
        fill: "both",
        iterations: n + 1,
        direction: a === "reverse" ? "alternate" : "normal"
    };
    u && (c.pseudoElement = u);
    let h = t.animate(m, c);
    return gt.value && h.finished.finally(() => {
        Ht.waapi--
    }), h
}

function yi(t) {
    return typeof t == "function" && "applyToOptions" in t
}

function rp({
    type: t,
    ...e
}) {
    return yi(t) && Ms() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
}

function ip(t) {
    return t in Vs
}

function op(t) {
    typeof t.ease == "string" && ip(t.ease) && (t.ease = Vs[t.ease])
}

function ap(t) {
    let e = t[0];
    if (t.length === 1) return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e) return !0
}

function sp(t, e, r, i) {
    let o = t[0];
    if (o === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    let n = t[t.length - 1],
        a = rs(o, e),
        s = rs(n, e);
    return Et(a === s, `You are trying to animate ${e} from "${o}" to "${n}". "${a ? n : o}" is not an animatable value.`, "value-not-animatable"), !a || !s ? !1 : ap(t) || (r === "spring" || yi(r)) && i
}

function xi(t) {
    t.duration = 0, t.type = "keyframes"
}

function mp(t) {
    let {
        motionValue: e,
        name: r,
        repeatDelay: i,
        repeatType: o,
        damping: n,
        type: a
    } = t;
    if (!(e?.owner?.current instanceof HTMLElement)) return !1;
    let {
        onUpdate: s,
        transformTemplate: l
    } = e.owner.getProps();
    return up() && r && lp.has(r) && (r !== "transform" || !l) && !s && !i && o !== "mirror" && n !== 0 && a !== "inertia"
}

function is(t, e) {
    let r = 0;
    for (let i = 0; i < t.length; i++) {
        let o = t[i][e];
        o !== null && o > r && (r = o)
    }
    return r
}

function Rs(t) {
    let e = os.get(t) || new Map;
    return os.set(t, e), e
}

function dp(t) {
    let e = hp.exec(t);
    if (!e) return [, ];
    let [, r, i, o] = e;
    return [`--${r ?? i}`, o]
}

function Ls(t, e, r = 1) {
    B(r <= fp, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    let [i, o] = dp(t);
    if (!i) return;
    let n = window.getComputedStyle(e).getPropertyValue(i);
    if (n) {
        let a = n.trim();
        return ti(a) ? parseFloat(a) : a
    }
    return en(o) ? Ls(o, e, r + 1) : o
}

function $t(t, e) {
    return t?.[e] ?? t?.default ?? t
}

function vp(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || ri(t) : !0
}

function xp(t) {
    let [e, r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    let [i] = r.match(rn) || [];
    if (!i) return t;
    let o = r.replace(i, ""),
        n = yp.has(e) ? 1 : 0;
    return i !== r && (n *= 100), e + "(" + n + o + ")"
}

function vn(t, e) {
    let r = gn(t);
    return r !== Qo && (r = St), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}

function Pp(t, e, r) {
    let i = 0,
        o;
    for (; i < t.length && !o;) {
        let n = t[i];
        typeof n == "string" && !Tp.has(n) && dr(n).values.length && (o = t[i]), i++
    }
    if (o && r)
        for (let n of e) t[n] = vn(r, o)
}

function Fs(t, e) {
    for (let r = 0; r < t.length; r++) typeof t[r] == "number" && Ap.has(e) && (t[r] = t[r] + "px")
}

function Mp(t) {
    return t.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)
}

function Vt(t, e, r) {
    if (t instanceof EventTarget) return [t];
    if (typeof t == "string") {
        let i = document;
        e && (i = e.current);
        let o = r?.[t] ?? i.querySelectorAll(t);
        return o ? Array.from(o) : []
    }
    return Array.from(t)
}

function yn(t) {
    return (e, r) => {
        let i = Vt(e),
            o = [];
        for (let n of i) {
            let a = t(n, r);
            o.push(a)
        }
        return () => {
            for (let n of o) n()
        }
    }
}

function Si(t) {
    let e = new WeakMap,
        r = [];
    return (i, o) => {
        let n = e.get(i) ?? new Cp;
        e.set(i, n);
        for (let a in o) {
            let s = o[a],
                l = t(i, n, a, s);
            r.push(l)
        }
        return () => {
            for (let a of r) a()
        }
    }
}

function Ep(t, e) {
    if (!(e in t)) return !1;
    let r = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) || Object.getOwnPropertyDescriptor(t, e);
    return r && typeof r.set == "function"
}

function yr(t) {
    return ei(t) && "offsetHeight" in t
}

function J(t, e) {
    return new Se(t, e)
}

function kp(t) {
    let e = "",
        r = !0;
    for (let i = 0; i < wt.length; i++) {
        let o = wt[i],
            n = t.latest[o];
        if (n === void 0) continue;
        let a = !0;
        if (typeof n == "number" ? a = n === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(n) === 0, !a) {
            r = !1;
            let s = Dp[o] || o,
                l = t.latest[o];
            e += `${s}(${l}) `
        }
    }
    return r ? "none" : e.trim()
}

function Lp(t, e, r, i) {
    return A.render(() => t.setAttribute("pathLength", "1")), r === "pathOffset" ? e.set(r, i, () => t.setAttribute("stroke-dashoffset", _o(-e.latest[r]))) : (e.get("stroke-dasharray") || e.set("stroke-dasharray", new Se("1 1"), () => {
        let {
            pathLength: o = 1,
            pathSpacing: n
        } = e.latest;
        t.setAttribute("stroke-dasharray", `${_o(o)} ${_o(n ?? 1 - Number(o))}`)
    }), e.set(r, i, void 0, e.get("stroke-dasharray")))
}

function Bp(t) {
    return t.replace(/^attr([A-Z])/, (e, r) => r.toLowerCase())
}

function js() {
    return ft.x || ft.y
}

function Ns(t) {
    return t === "x" || t === "y" ? ft[t] ? null : (ft[t] = !0, () => {
        ft[t] = !1
    }) : ft.x || ft.y ? null : (ft.x = ft.y = !0, () => {
        ft.x = ft.y = !1
    })
}

function Us(t, e) {
    let r = Vt(t),
        i = new AbortController,
        o = {
            passive: !0,
            ...e,
            signal: i.signal
        };
    return [r, o, () => i.abort()]
}

function ls(t) {
    return !(t.pointerType === "touch" || js())
}

function _s(t, e, r = {}) {
    let [i, o, n] = Us(t, r), a = s => {
        if (!ls(s)) return;
        let {
            target: l
        } = s, u = e(l, s);
        if (typeof u != "function" || !l) return;
        let m = p => {
            ls(p) && (u(p), l.removeEventListener("pointerleave", m))
        };
        l.addEventListener("pointerleave", m, o)
    };
    return i.forEach(s => {
        s.addEventListener("pointerenter", a, o)
    }), n
}

function Fp(t) {
    return Ip.has(t.tagName) || t.tabIndex !== -1
}

function us(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function Wo(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}

function ms(t) {
    return xr(t) && !js()
}

function Gs(t, e, r = {}) {
    let [i, o, n] = Us(t, r), a = s => {
        let l = s.currentTarget;
        if (!ms(s)) return;
        li.add(l);
        let u = e(l, s),
            m = (h, g) => {
                window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", c), li.has(l) && li.delete(l), ms(h) && typeof u == "function" && u(h, {
                    success: g
                })
            },
            p = h => {
                m(h, l === window || l === document || r.useGlobalTarget || Ws(l, h.target))
            },
            c = h => {
                m(h, !1)
            };
        window.addEventListener("pointerup", p, o), window.addEventListener("pointercancel", c, o)
    };
    return i.forEach(s => {
        (r.useGlobalTarget ? window : s).addEventListener("pointerdown", a, o), yr(s) && (s.addEventListener("focus", l => jp(l, o)), !Fp(s) && !s.hasAttribute("tabindex") && (s.tabIndex = 0))
    }), n
}

function wn(t, e) {
    let r = window.getComputedStyle(t);
    return cn(e) ? r.getPropertyValue(e) : r[e]
}

function Ee(t) {
    return ei(t) && "ownerSVGElement" in t
}

function _p({
    target: t,
    borderBoxSize: e
}) {
    ui.get(t)?.forEach(r => {
        r(t, {
            get width() {
                return Np(t, e)
            },
            get height() {
                return Up(t, e)
            }
        })
    })
}

function Wp(t) {
    t.forEach(_p)
}

function Gp() {
    typeof ResizeObserver > "u" || (mi = new ResizeObserver(Wp))
}

function Hp(t, e) {
    mi || Gp();
    let r = Vt(t);
    return r.forEach(i => {
        let o = ui.get(i);
        o || (o = new Set, ui.set(i, o)), o.add(e), mi?.observe(i)
    }), () => {
        r.forEach(i => {
            let o = ui.get(i);
            o?.delete(e), o?.size || mi?.unobserve(i)
        })
    }
}

function $p() {
    we = () => {
        let t = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        pi.forEach(e => e(t))
    }, window.addEventListener("resize", we)
}

function zp(t) {
    return pi.add(t), we || $p(), () => {
        pi.delete(t), !pi.size && typeof we == "function" && (window.removeEventListener("resize", we), we = void 0)
    }
}

function $s(t, e) {
    return typeof t == "function" ? zp(t) : Hp(t, e)
}

function bi(t, e) {
    let r, i = () => {
        let {
            currentTime: o
        } = e, n = (o === null ? 0 : o.value) / 100;
        r !== n && t(n), r = n
    };
    return A.preUpdate(i, !0), () => K(i)
}

function Ti(t) {
    return Ee(t) && t.tagName === "svg"
}

function zs(...t) {
    let e = !Array.isArray(t[0]),
        r = e ? 0 : -1,
        i = t[0 + r],
        o = t[1 + r],
        n = t[2 + r],
        a = t[3 + r],
        s = fi(o, n, a);
    return e ? s(i) : s
}
var ur, gt, sm, A, K, G, di, si, rt, Ht, cs, Pe, um, en, mm, Ae, hr, ai, pr, rn, cm, on, hs, hm, Fo, Jt, Go, fr, Gt, mt, T, fm, gm, $a, xe, z, vm, ds, fs, xm, wm, za, Sm, bm, St, D, No, Am, Mm, Xa, Ho, km, Rm, ws, Lm, U, Uo, Bm, Fm, jm, Gm, Hm, mn, $m, gi, Qt, Ko, zm, Xo, qa, Za, Ja, Km, Ts, wt, at, Qa, Ym, qm, te, ee, qo, Zo, Jo, vi, cn, hn, tp, Ms, mr, ts, dn, Vs, es, np, rs, lp, up, pp, Ds, cp, wi, os, ks, hp, fp, fn, gp, Os, Bs, ns, yp, wp, Qo, as, Sp, Me, bp, gn, Tp, Is, Ap, vg, vr, Cp, tn, yg, xg, ss, Vp, Te, Se, Dp, Rp, xn, bg, _o, Op, Tg, Ce, Pg, ft, Ws, xr, Ip, li, jp, ui, mi, Hs, Np, Up, pi, we, k, Kp, Ks, Dg, Xs = d(() => {
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    v();
    ur = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"], gt = {
        value: null,
        addProjectionMetrics: null
    };
    sm = 40;
    ({
        schedule: A,
        cancel: K,
        state: G,
        steps: di
    } = ps(typeof requestAnimationFrame < "u" ? requestAnimationFrame : I, !0));
    rt = {
        now: () => (si === void 0 && rt.set(G.isProcessing || et.useManualTiming ? G.timestamp : performance.now()), si),
        set: t => {
            si = t, queueMicrotask(lm)
        }
    }, Ht = {
        layout: 0,
        mainThread: 0,
        waapi: 0
    }, cs = t => e => typeof e == "string" && e.startsWith(t), Pe = cs("--"), um = cs("var(--"), en = t => um(t) ? mm.test(t.split("/*")[0].trim()) : !1, mm = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ae = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    }, hr = {
        ...Ae,
        transform: t => q(0, 1, t)
    }, ai = {
        ...Ae,
        default: 1
    }, pr = t => Math.round(t * 1e5) / 1e5, rn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    cm = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, on = (t, e) => r => !!(typeof r == "string" && cm.test(r) && r.startsWith(t) || e && !pm(r) && Object.prototype.hasOwnProperty.call(r, e)), hs = (t, e, r) => i => {
        if (typeof i != "string") return i;
        let [o, n, a, s] = i.match(rn);
        return {
            [t]: parseFloat(o),
            [e]: parseFloat(n),
            [r]: parseFloat(a),
            alpha: s !== void 0 ? parseFloat(s) : 1
        }
    }, hm = t => q(0, 255, t), Fo = {
        ...Ae,
        transform: t => Math.round(hm(t))
    }, Jt = {
        test: on("rgb", "red"),
        parse: hs("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: r,
            alpha: i = 1
        }) => "rgba(" + Fo.transform(t) + ", " + Fo.transform(e) + ", " + Fo.transform(r) + ", " + pr(hr.transform(i)) + ")"
    };
    Go = {
        test: on("#"),
        parse: dm,
        transform: Jt.transform
    }, fr = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }), Gt = fr("deg"), mt = fr("%"), T = fr("px"), fm = fr("vh"), gm = fr("vw"), $a = {
        ...mt,
        parse: t => mt.parse(t) / 100,
        transform: t => mt.transform(t * 100)
    }, xe = {
        test: on("hsl", "hue"),
        parse: hs("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + mt.transform(pr(e)) + ", " + mt.transform(pr(r)) + ", " + pr(hr.transform(i)) + ")"
    }, z = {
        test: t => Jt.test(t) || Go.test(t) || xe.test(t),
        parse: t => Jt.test(t) ? Jt.parse(t) : xe.test(t) ? xe.parse(t) : Go.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Jt.transform(t) : xe.transform(t),
        getAnimatableNone: t => {
            let e = z.parse(t);
            return e.alpha = 0, z.transform(e)
        }
    }, vm = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
    ds = "number", fs = "color", xm = "var", wm = "var(", za = "${}", Sm = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    bm = t => typeof t == "number" ? 0 : z.test(t) ? z.getAnimatableNone(t) : t;
    St = {
        test: ym,
        parse: gs,
        createTransformer: vs,
        getAnimatableNone: Tm
    };
    D = (t, e, r) => t + (e - t) * r, No = (t, e, r) => {
        let i = t * t,
            o = r * (e * e - i) + i;
        return o < 0 ? 0 : Math.sqrt(o)
    }, Am = [Go, Jt, xe], Mm = t => Am.find(e => e.test(t));
    Xa = (t, e) => {
        let r = Ka(t),
            i = Ka(e);
        if (!r || !i) return ci(t, e);
        let o = {
            ...r
        };
        return n => (o.red = No(r.red, i.red, n), o.green = No(r.green, i.green, n), o.blue = No(r.blue, i.blue, n), o.alpha = D(r.alpha, i.alpha, n), Jt.transform(o))
    }, Ho = new Set(["none", "hidden"]);
    km = (t, e) => {
        let r = St.createTransformer(e),
            i = dr(t),
            o = dr(e);
        return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Ho.has(t) && !o.values.length || Ho.has(e) && !i.values.length ? Cm(t, e) : xt(ys(Dm(i, o), o.values), r) : (Et(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), ci(t, e))
    };
    Rm = t => {
        let e = ({
            timestamp: r
        }) => t(r);
        return {
            start: (r = !0) => A.update(e, r),
            stop: () => K(e),
            now: () => G.isProcessing ? G.timestamp : rt.now()
        }
    }, ws = (t, e, r = 10) => {
        let i = "",
            o = Math.max(Math.round(e / r), 2);
        for (let n = 0; n < o; n++) i += Math.round(t(n / (o - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${i.substring(0, i.length - 2)})`
    };
    Lm = 5;
    U = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    }, Uo = .001;
    Bm = 12;
    Fm = ["duration", "bounce"], jm = ["stiffness", "damping", "mass"];
    be.applyToOptions = t => {
        let e = sn(t, 100, be);
        return t.ease = e.ease, t.duration = F(e.duration), t.type = "keyframes", t
    };
    Gm = t => t !== null;
    Hm = {
        decay: zo,
        inertia: zo,
        tween: cr,
        keyframes: cr,
        spring: be
    };
    mn = class {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(t => {
                this.resolve = t
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
    }, $m = t => t / 100, gi = class extends mn {
        constructor(t) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== rt.now() && this.tick(rt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.())
            }, Ht.mainThread++, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
        }
        initAnimation() {
            let {
                options: t
            } = this;
            bs(t);
            let {
                type: e = cr,
                repeat: r = 0,
                repeatDelay: i = 0,
                repeatType: o,
                velocity: n = 0
            } = t, {
                keyframes: a
            } = t, s = e || cr;
            s !== cr && typeof a[0] != "number" && (this.mixKeyframes = xt($m, xs(a[0], a[1])), a = [0, 100]);
            let l = s({
                ...t,
                keyframes: a
            });
            o === "mirror" && (this.mirroredGenerator = s({
                ...t,
                keyframes: [...a].reverse(),
                velocity: -n
            })), l.calculatedDuration === null && (l.calculatedDuration = an(l));
            let {
                calculatedDuration: u
            } = l;
            this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = l
        }
        updateTime(t) {
            let e = Math.round(t - this.startTime) * this.playbackSpeed;
            this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
            let {
                generator: r,
                totalDuration: i,
                mixKeyframes: o,
                mirroredGenerator: n,
                resolvedDuration: a,
                calculatedDuration: s
            } = this;
            if (this.startTime === null) return r.next(0);
            let {
                delay: l = 0,
                keyframes: u,
                repeat: m,
                repeatType: p,
                repeatDelay: c,
                type: h,
                onUpdate: g,
                finalKeyframe: w
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
            let y = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
                f = this.playbackSpeed >= 0 ? y < 0 : y > i;
            this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
            let S = this.currentTime,
                P = r;
            if (m) {
                let N = Math.min(this.currentTime, i) / a,
                    C = Math.floor(N),
                    R = N % 1;
                !R && N >= 1 && (R = 1), R === 1 && C--, C = Math.min(C, m + 1), C % 2 && (p === "reverse" ? (R = 1 - R, c && (R -= c / a)) : p === "mirror" && (P = n)), S = q(0, 1, R) * a
            }
            let E = f ? {
                done: !1,
                value: u[0]
            } : P.next(S);
            o && (E.value = o(E.value));
            let {
                done: M
            } = E;
            !f && s !== null && (M = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
            let V = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
            return V && h !== zo && (E.value = un(u, this.options, w, this.speed)), g && g(E.value), V && this.finish(), E
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
        get duration() {
            return Z(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + Z(t)
        }
        get time() {
            return Z(this.currentTime)
        }
        set time(t) {
            t = F(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(t) {
            this.updateTime(rt.now());
            let e = this.playbackSpeed !== t;
            this.playbackSpeed = t, e && (this.time = Z(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: t = Rm,
                startTime: e
            } = this.options;
            this.driver || (this.driver = t(i => this.tick(i))), this.options.onPlay?.();
            let r = this.driver.now();
            this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = e ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(rt.now()), this.holdTime = this.currentTime
        }
        complete() {
            this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
        }
        cancel() {
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Ht.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
            return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this)
        }
    };
    Qt = t => t * 180 / Math.PI, Ko = t => {
        let e = Qt(Math.atan2(t[1], t[0]));
        return Xo(e)
    }, zm = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: Ko,
        rotateZ: Ko,
        skewX: t => Qt(Math.atan(t[1])),
        skewY: t => Qt(Math.atan(t[2])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
    }, Xo = t => (t = t % 360, t < 0 && (t += 360), t), qa = Ko, Za = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Ja = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Km = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Za,
        scaleY: Ja,
        scale: t => (Za(t) + Ja(t)) / 2,
        rotateX: t => Xo(Qt(Math.atan2(t[6], t[5]))),
        rotateY: t => Xo(Qt(Math.atan2(-t[2], t[0]))),
        rotateZ: qa,
        rotate: qa,
        skewX: t => Qt(Math.atan(t[4])),
        skewY: t => Qt(Math.atan(t[1])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
    };
    Ts = (t, e) => {
        let {
            transform: r = "none"
        } = getComputedStyle(t);
        return Yo(r, e)
    };
    wt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], at = new Set(wt), Qa = t => t === Ae || t === T, Ym = new Set(["x", "y", "z"]), qm = wt.filter(t => !Ym.has(t));
    te = {
        width: ({
            x: t
        }, {
            paddingLeft: e = "0",
            paddingRight: r = "0"
        }) => t.max - t.min - parseFloat(e) - parseFloat(r),
        height: ({
            y: t
        }, {
            paddingTop: e = "0",
            paddingBottom: r = "0"
        }) => t.max - t.min - parseFloat(e) - parseFloat(r),
        top: (t, {
            top: e
        }) => parseFloat(e),
        left: (t, {
            left: e
        }) => parseFloat(e),
        bottom: ({
            y: t
        }, {
            top: e
        }) => parseFloat(e) + (t.max - t.min),
        right: ({
            x: t
        }, {
            left: e
        }) => parseFloat(e) + (t.max - t.min),
        x: (t, {
            transform: e
        }) => Yo(e, "x"),
        y: (t, {
            transform: e
        }) => Yo(e, "y")
    };
    te.translateX = te.x;
    te.translateY = te.y;
    ee = new Set, qo = !1, Zo = !1, Jo = !1;
    vi = class {
        constructor(t, e, r, i, o, n = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = r, this.motionValue = i, this.element = o, this.isAsync = n
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (ee.add(this), qo || (qo = !0, A.read(As), A.resolveKeyframes(Ps))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: e,
                element: r,
                motionValue: i
            } = this;
            if (t[0] === null) {
                let o = i?.get(),
                    n = t[t.length - 1];
                if (o !== void 0) t[0] = o;
                else if (r && e) {
                    let a = r.readValue(e, n);
                    a != null && (t[0] = a)
                }
                t[0] === void 0 && (t[0] = n), i && o === void 0 && i.set(t[0])
            }
            pn(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), ee.delete(this)
        }
        cancel() {
            this.state === "scheduled" && (ee.delete(this), this.state = "pending")
        }
        resume() {
            this.state === "pending" && this.scheduleResolve()
        }
    }, cn = t => t.startsWith("--");
    hn = Wt(() => window.ScrollTimeline !== void 0), tp = {};
    Ms = ep(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"), mr = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`, ts = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: mr([0, .65, .55, 1]),
        circOut: mr([.55, 0, 1, .45]),
        backIn: mr([.31, .01, .66, -.59]),
        backOut: mr([.33, 1.53, .69, .99])
    };
    dn = class extends mn {
        constructor(t) {
            if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
            let {
                element: e,
                name: r,
                keyframes: i,
                pseudoElement: o,
                allowFlatten: n = !1,
                finalKeyframe: a,
                onComplete: s
            } = t;
            this.isPseudoElement = !!o, this.allowFlatten = n, this.options = t, B(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
            let l = rp(t);
            this.animation = Es(e, r, i, l, o), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !o) {
                    let u = un(i, this.options, a, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(u) : Qm(e, r, u), this.animation.cancel()
                }
                s?.(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish?.()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            let {
                state: t
            } = this;
            t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            this.isPseudoElement || this.animation.commitStyles?.()
        }
        get duration() {
            let t = this.animation.effect?.getComputedTiming?.().duration || 0;
            return Z(Number(t))
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + Z(t)
        }
        get time() {
            return Z(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
            this.finishedTime = null, this.animation.currentTime = F(t)
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(t) {
            t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
            return this.finishedTime !== null ? "finished" : this.animation.playState
        }
        get startTime() {
            return Number(this.animation.startTime)
        }
        set startTime(t) {
            this.animation.startTime = t
        }
        attachTimeline({
            timeline: t,
            observe: e
        }) {
            return this.allowFlatten && this.animation.effect?.updateTiming({
                easing: "linear"
            }), this.animation.onfinish = null, t && hn() ? (this.animation.timeline = t, I) : e(this)
        }
    }, Vs = {
        anticipate: ko,
        backInOut: Do,
        circInOut: Oo
    };
    es = 10, np = class extends dn {
        constructor(t) {
            op(t), bs(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
            let {
                motionValue: e,
                onUpdate: r,
                onComplete: i,
                element: o,
                ...n
            } = this.options;
            if (!e) return;
            if (t !== void 0) {
                e.set(t);
                return
            }
            let a = new gi({
                    ...n,
                    autoplay: !1
                }),
                s = F(this.finishedTime ?? this.time);
            e.setWithVelocity(a.sample(s - es).value, a.sample(s).value, es), a.stop()
        }
    }, rs = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (St.test(t) || t === "0") && !t.startsWith("url("));
    lp = new Set(["opacity", "clipPath", "filter", "transform"]), up = Wt(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    pp = 40, Ds = class extends mn {
        constructor({
            autoplay: t = !0,
            delay: e = 0,
            type: r = "keyframes",
            repeat: i = 0,
            repeatDelay: o = 0,
            repeatType: n = "loop",
            keyframes: a,
            name: s,
            motionValue: l,
            element: u,
            ...m
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
            }, this.createdAt = rt.now();
            let p = {
                    autoplay: t,
                    delay: e,
                    type: r,
                    repeat: i,
                    repeatDelay: o,
                    repeatType: n,
                    name: s,
                    motionValue: l,
                    element: u,
                    ...m
                },
                c = u?.KeyframeResolver || vi;
            this.keyframeResolver = new c(a, (h, g, w) => this.onKeyframesResolved(h, g, p, !w), s, l, u), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(t, e, r, i) {
            this.keyframeResolver = void 0;
            let {
                name: o,
                type: n,
                velocity: a,
                delay: s,
                isHandoff: l,
                onUpdate: u
            } = r;
            this.resolvedAt = rt.now(), sp(t, o, n, a) || ((et.instantAnimations || !s) && u?.(un(t, r, e)), t[0] = t[t.length - 1], xi(r), r.repeat = 0);
            let m = {
                    startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > pp ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                    finalKeyframe: e,
                    ...r,
                    keyframes: t
                },
                p = !l && mp(m) ? new np({
                    ...m,
                    element: m.motionValue.owner.current
                }) : new gi(m);
            p.finished.then(() => this.notifyFinished()).catch(I), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
            return this.finished.finally(t).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver?.resume(), Jm()), this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(t) {
            this.animation.time = t
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(t) {
            this.animation.speed = t
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(t) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
        }
    }, cp = class {
        constructor(t) {
            this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
        }
        get finished() {
            return Promise.all(this.animations.map(t => t.finished))
        }
        getAll(t) {
            return this.animations[0][t]
        }
        setAll(t, e) {
            for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = e
        }
        attachTimeline(t) {
            let e = this.animations.map(r => r.attachTimeline(t));
            return () => {
                e.forEach((r, i) => {
                    r && r(), this.animations[i].stop()
                })
            }
        }
        get time() {
            return this.getAll("time")
        }
        set time(t) {
            this.setAll("time", t)
        }
        get speed() {
            return this.getAll("speed")
        }
        set speed(t) {
            this.setAll("speed", t)
        }
        get state() {
            return this.getAll("state")
        }
        get startTime() {
            return this.getAll("startTime")
        }
        get duration() {
            return is(this.animations, "duration")
        }
        get iterationDuration() {
            return is(this.animations, "iterationDuration")
        }
        runAll(t) {
            this.animations.forEach(e => e[t]())
        }
        play() {
            this.runAll("play")
        }
        pause() {
            this.runAll("pause")
        }
        cancel() {
            this.runAll("cancel")
        }
        complete() {
            this.runAll("complete")
        }
    };
    wi = class extends cp {
        then(t, e) {
            return this.finished.finally(t).then(() => {})
        }
    }, os = new WeakMap, ks = (t, e = "") => `${t}:${e}`;
    hp = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    fp = 4;
    fn = new Set(["width", "height", "top", "left", "right", "bottom", ...wt]), gp = {
        test: t => t === "auto",
        parse: t => t
    }, Os = t => e => e.test(t), Bs = [Ae, T, mt, Gt, gm, fm, gp], ns = t => Bs.find(Os(t));
    yp = new Set(["brightness", "contrast", "saturate", "opacity"]);
    wp = /\b([a-z-]*)\(.*?\)/gu, Qo = {
        ...St,
        getAnimatableNone: t => {
            let e = t.match(wp);
            return e ? e.map(xp).join(" ") : t
        }
    }, as = {
        ...Ae,
        transform: Math.round
    }, Sp = {
        rotate: Gt,
        rotateX: Gt,
        rotateY: Gt,
        rotateZ: Gt,
        scale: ai,
        scaleX: ai,
        scaleY: ai,
        scaleZ: ai,
        skew: Gt,
        skewX: Gt,
        skewY: Gt,
        distance: T,
        translateX: T,
        translateY: T,
        translateZ: T,
        x: T,
        y: T,
        z: T,
        perspective: T,
        transformPerspective: T,
        opacity: hr,
        originX: $a,
        originY: $a,
        originZ: T
    }, Me = {
        borderWidth: T,
        borderTopWidth: T,
        borderRightWidth: T,
        borderBottomWidth: T,
        borderLeftWidth: T,
        borderRadius: T,
        radius: T,
        borderTopLeftRadius: T,
        borderTopRightRadius: T,
        borderBottomRightRadius: T,
        borderBottomLeftRadius: T,
        width: T,
        maxWidth: T,
        height: T,
        maxHeight: T,
        top: T,
        right: T,
        bottom: T,
        left: T,
        padding: T,
        paddingTop: T,
        paddingRight: T,
        paddingBottom: T,
        paddingLeft: T,
        margin: T,
        marginTop: T,
        marginRight: T,
        marginBottom: T,
        marginLeft: T,
        backgroundPositionX: T,
        backgroundPositionY: T,
        ...Sp,
        zIndex: as,
        fillOpacity: hr,
        strokeOpacity: hr,
        numOctaves: as
    }, bp = {
        ...Me,
        color: z,
        backgroundColor: z,
        outlineColor: z,
        fill: z,
        stroke: z,
        borderColor: z,
        borderTopColor: z,
        borderRightColor: z,
        borderBottomColor: z,
        borderLeftColor: z,
        filter: Qo,
        WebkitFilter: Qo
    }, gn = t => bp[t];
    Tp = new Set(["auto", "none", "0"]);
    Is = class extends vi {
        constructor(t, e, r, i, o) {
            super(t, e, r, i, o, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                element: e,
                name: r
            } = this;
            if (!e || !e.current) return;
            super.readKeyframes();
            for (let s = 0; s < t.length; s++) {
                let l = t[s];
                if (typeof l == "string" && (l = l.trim(), en(l))) {
                    let u = Ls(l, e.current);
                    u !== void 0 && (t[s] = u), s === t.length - 1 && (this.finalKeyframe = l)
                }
            }
            if (this.resolveNoneKeyframes(), !fn.has(r) || t.length !== 2) return;
            let [i, o] = t, n = ns(i), a = ns(o);
            if (n !== a)
                if (Qa(n) && Qa(a))
                    for (let s = 0; s < t.length; s++) {
                        let l = t[s];
                        typeof l == "string" && (t[s] = parseFloat(l))
                    } else te[r] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: e
            } = this, r = [];
            for (let i = 0; i < t.length; i++)(t[i] === null || vp(t[i])) && r.push(i);
            r.length && Pp(t, r, e)
        }
        measureInitialState() {
            let {
                element: t,
                unresolvedKeyframes: e,
                name: r
            } = this;
            if (!t || !t.current) return;
            r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = te[r](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
            let i = e[e.length - 1];
            i !== void 0 && t.getValue(r, i).jump(i, !1)
        }
        measureEndState() {
            let {
                element: t,
                name: e,
                unresolvedKeyframes: r
            } = this;
            if (!t || !t.current) return;
            let i = t.getValue(e);
            i && i.jump(this.measuredOrigin, !1);
            let o = r.length - 1,
                n = r[o];
            r[o] = te[e](t.measureViewportBox(), window.getComputedStyle(t.current)), n !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = n), this.removedTransforms?.length && this.removedTransforms.forEach(([a, s]) => {
                t.getValue(a).set(s)
            }), this.resolveNoneKeyframes()
        }
    }, Ap = new Set(["borderWidth", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderRadius", "radius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "width", "maxWidth", "height", "maxHeight", "top", "right", "bottom", "left", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "backgroundPositionX", "backgroundPositionY"]);
    vg = Wt(() => {
        try {
            document.createElement("div").animate({
                opacity: [1]
            })
        } catch {
            return !1
        }
        return !0
    });
    vr = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Cp = class {
        constructor() {
            this.latest = {}, this.values = new Map
        }
        set(t, e, r, i, o = !0) {
            let n = this.values.get(t);
            n && n.onRemove();
            let a = () => {
                let u = e.get();
                o ? this.latest[t] = vr(u, Me[t]) : this.latest[t] = u, r && A.render(r)
            };
            a();
            let s = e.on("change", a);
            i && e.addDependent(i);
            let l = () => {
                s(), r && K(r), this.values.delete(t), i && e.removeDependent(i)
            };
            return this.values.set(t, {
                value: e,
                onRemove: l
            }), l
        }
        get(t) {
            return this.values.get(t)?.value
        }
        destroy() {
            for (let t of this.values.values()) t.onRemove()
        }
    };
    tn = (t, e, r, i) => {
        let o = Ep(t, r),
            n = o ? r : r.startsWith("data") || r.startsWith("aria") ? Mp(r) : r,
            a = o ? () => {
                t[n] = e.latest[r]
            } : () => {
                let s = e.latest[r];
                s == null ? t.removeAttribute(n) : t.setAttribute(n, String(s))
            };
        return e.set(r, i, a)
    }, yg = yn(Si(tn)), xg = Si((t, e, r, i) => e.set(r, i, () => {
        t[r] = e.latest[r]
    }, void 0, !1));
    ss = 30, Vp = t => !isNaN(parseFloat(t)), Te = {
        current: void 0
    }, Se = class {
        constructor(t, e = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
                let i = rt.now();
                if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                    for (let o of this.dependents) o.dirty()
            }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
            this.current = t, this.updatedAt = rt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Vp(this.current))
        }
        setPrevFrameValue(t = this.current) {
            this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, e) {
            this.events[t] || (this.events[t] = new ve);
            let r = this.events[t].add(e);
            return t === "change" ? () => {
                r(), A.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : r
        }
        clearListeners() {
            for (let t in this.events) this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
            this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, r) {
            this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
        }
        jump(t, e = !0) {
            this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change?.notify(this.current)
        }
        addDependent(t) {
            this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
            this.dependents && this.dependents.delete(t)
        }
        get() {
            return Te.current && Te.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let t = rt.now();
            if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ss) return 0;
            let e = Math.min(this.updatedAt - this.prevUpdatedAt, ss);
            return ye(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
            return this.stop(), new Promise(e => {
                this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    };
    Dp = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    };
    Rp = new Set(["originX", "originY", "originZ"]), xn = (t, e, r, i) => {
        let o, n;
        return at.has(r) ? (e.get("transform") || (!yr(t) && !e.get("transformBox") && xn(t, e, "transformBox", new Se("fill-box")), e.set("transform", new Se("none"), () => {
            t.style.transform = kp(e)
        })), n = e.get("transform")) : Rp.has(r) ? (e.get("transformOrigin") || e.set("transformOrigin", new Se(""), () => {
            let a = e.latest.originX ?? "50%",
                s = e.latest.originY ?? "50%",
                l = e.latest.originZ ?? 0;
            t.style.transformOrigin = `${a} ${s} ${l}`
        }), n = e.get("transformOrigin")) : cn(r) ? o = () => {
            t.style.setProperty(r, e.latest[r])
        } : o = () => {
            t.style[r] = e.latest[r]
        }, e.set(r, i, o, n)
    }, bg = yn(Si(xn)), _o = T.transform;
    Op = (t, e, r, i) => r.startsWith("path") ? Lp(t, e, r, i) : r.startsWith("attr") ? tn(t, e, Bp(r), i) : (r in t.style ? xn : tn)(t, e, r, i), Tg = yn(Si(Op));
    ({
        schedule: Ce,
        cancel: Pg
    } = ps(queueMicrotask, !1)), ft = {
        x: !1,
        y: !1
    };
    Ws = (t, e) => e ? t === e ? !0 : Ws(t, e.parentElement) : !1, xr = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Ip = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
    li = new WeakSet;
    jp = (t, e) => {
        let r = t.currentTarget;
        if (!r) return;
        let i = us(() => {
            if (li.has(r)) return;
            Wo(r, "down");
            let o = us(() => {
                    Wo(r, "up")
                }),
                n = () => Wo(r, "cancel");
            r.addEventListener("keyup", o, e), r.addEventListener("blur", n, e)
        });
        r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
    };
    ui = new WeakMap, Hs = (t, e, r) => (i, o) => o && o[0] ? o[0][t + "Size"] : Ee(i) && "getBBox" in i ? i.getBBox()[e] : i[r], Np = Hs("inline", "width", "offsetWidth"), Up = Hs("block", "height", "offsetHeight");
    pi = new Set;
    k = t => !!(t && t.getVelocity), Kp = [...Bs, z, St], Ks = t => Kp.find(Os(t)), Dg = ur.reduce((t, e) => (t[e] = r => K(r), t), {})
});
var x = d(() => {
    v();
    Xs()
});

function wr(t) {
    return typeof t == "object" && !Array.isArray(t)
}
var Sn = d(() => {});

function Pi(t, e, r, i) {
    return typeof t == "string" && wr(e) ? Vt(t, r, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t]
}
var bn = d(() => {
    x();
    Sn()
});

function Xp(t, e, r) {
    return t * (e + 1)
}

function Ys(t, e, r, i) {
    return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? r : e.startsWith("<") ? Math.max(0, r + parseFloat(e.slice(1))) : i.get(e) ?? t
}

function Yp(t, e, r) {
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        o.at > e && o.at < r && (yt(t, o), i--)
    }
}

function qp(t, e, r, i, o, n) {
    Yp(t, o, n);
    for (let a = 0; a < e.length; a++) t.push({
        value: e[a],
        at: D(o, n, i[a]),
        easing: ii(r, a)
    })
}

function Zp(t, e) {
    for (let r = 0; r < t.length; r++) t[r] = t[r] / (e + 1)
}

function Jp(t, e) {
    return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at
}

function Js(t, {
    defaultTransition: e = {},
    ...r
} = {}, i, o) {
    let n = e.duration || .3,
        a = new Map,
        s = new Map,
        l = {},
        u = new Map,
        m = 0,
        p = 0,
        c = 0;
    for (let h = 0; h < t.length; h++) {
        let g = t[h];
        if (typeof g == "string") {
            u.set(g, p);
            continue
        } else if (!Array.isArray(g)) {
            u.set(g.name, Ys(p, g.at, m, u));
            continue
        }
        let [w, y, f = {}] = g;
        f.at !== void 0 && (p = Ys(p, f.at, m, u));
        let S = 0,
            P = (E, M, V, N = 0, C = 0) => {
                let R = ec(E),
                    {
                        delay: _t = 0,
                        times: nt = gr(R),
                        type: ge = "keyframes",
                        repeat: Zt,
                        repeatType: Co,
                        repeatDelay: Eo = 0,
                        ...Y
                    } = M,
                    {
                        ease: $ = e.ease || "easeOut",
                        duration: tt
                    } = M,
                    Ct = typeof _t == "function" ? _t(N, C) : _t,
                    qr = R.length,
                    Va = yi(ge) ? ge : o?.[ge || "keyframes"];
                if (qr <= 2 && Va) {
                    let or = 100;
                    if (qr === 2 && oc(R)) {
                        let nr = R[1] - R[0];
                        or = Math.abs(nr)
                    }
                    let Zr = {
                        ...Y
                    };
                    tt !== void 0 && (Zr.duration = F(tt));
                    let Jr = sn(Zr, or, Va);
                    $ = Jr.ease, tt = Jr.duration
                }
                tt ?? (tt = n);
                let Da = p + Ct;
                nt.length === 1 && nt[0] === 0 && (nt[1] = 1);
                let ka = nt.length - R.length;
                if (ka > 0 && ln(nt, ka), R.length === 1 && R.unshift(null), Zt) {
                    B(Zt < tc, "Repeat count too high, must be less than 20", "repeat-count-high"), tt = Xp(tt, Zt);
                    let or = [...R],
                        Zr = [...nt];
                    $ = Array.isArray($) ? [...$] : [$];
                    let Jr = [...$];
                    for (let nr = 0; nr < Zt; nr++) {
                        R.push(...or);
                        for (let ar = 0; ar < or.length; ar++) nt.push(Zr[ar] + (nr + 1)), $.push(ar === 0 ? "linear" : ii(Jr, ar - 1))
                    }
                    Zp(nt, Zt)
                }
                let Ra = Da + tt;
                qp(V, R, $, nt, Da, Ra), S = Math.max(Ct + tt, S), c = Math.max(Ra, c)
            };
        if (k(w)) {
            let E = qs(w, s);
            P(y, f, Zs("default", E))
        } else {
            let E = Pi(w, y, i, l),
                M = E.length;
            for (let V = 0; V < M; V++) {
                y = y, f = f;
                let N = E[V],
                    C = qs(N, s);
                for (let R in y) P(y[R], rc(f, R), Zs(R, C), V, M)
            }
        }
        m = p, p += S
    }
    return s.forEach((h, g) => {
        for (let w in h) {
            let y = h[w];
            y.sort(Jp);
            let f = [],
                S = [],
                P = [];
            for (let M = 0; M < y.length; M++) {
                let {
                    at: V,
                    value: N,
                    easing: C
                } = y[M];
                f.push(N), S.push(ut(0, c, V)), P.push(C || "easeOut")
            }
            S[0] !== 0 && (S.unshift(0), f.unshift(f[0]), P.unshift(Qp)), S[S.length - 1] !== 1 && (S.push(1), f.push(null)), a.has(g) || a.set(g, {
                keyframes: {},
                transition: {}
            });
            let E = a.get(g);
            E.keyframes[w] = f, E.transition[w] = {
                ...e,
                duration: c,
                ease: P,
                times: S,
                ...r
            }
        }
    }), a
}

function qs(t, e) {
    return !e.has(t) && e.set(t, {}), e.get(t)
}

function Zs(t, e) {
    return e[t] || (e[t] = []), e[t]
}

function ec(t) {
    return Array.isArray(t) ? t : [t]
}

function rc(t, e) {
    return t && t[e] ? {
        ...t,
        ...t[e]
    } : {
        ...t
    }
}
var Qp, tc, ic, oc, Qs = d(() => {
    x();
    v();
    bn();
    x();
    v();
    Qp = "easeInOut", tc = 20;
    ic = t => typeof t == "number", oc = t => t.every(ic)
});
var Dt, Ve = d(() => {
    Dt = new WeakMap
});
var Sr, Tn = d(() => {
    Sr = t => Array.isArray(t)
});

function tl(t) {
    let e = [{}, {}];
    return t?.values.forEach((r, i) => {
        e[0][i] = r.get(), e[1][i] = r.getVelocity()
    }), e
}

function De(t, e, r, i) {
    if (typeof e == "function") {
        let [o, n] = tl(i);
        e = e(r !== void 0 ? r : t.custom, o, n)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        let [o, n] = tl(i);
        e = e(r !== void 0 ? r : t.custom, o, n)
    }
    return e
}
var Ai = d(() => {});

function bt(t, e, r) {
    let i = t.getProps();
    return De(i, e, r !== void 0 ? r : i.custom, t)
}
var br = d(() => {
    Ai()
});

function nc(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, J(r))
}

function ac(t) {
    return Sr(t) ? t[t.length - 1] || 0 : t
}

function Pn(t, e) {
    let r = bt(t, e),
        {
            transitionEnd: i = {},
            transition: o = {},
            ...n
        } = r || {};
    n = {
        ...n,
        ...i
    };
    for (let a in n) {
        let s = ac(n[a]);
        nc(t, a, s)
    }
}
var Mi = d(() => {
    x();
    Tn();
    br()
});

function sc(t) {
    return !!(k(t) && t.add)
}

function Tr(t, e) {
    let r = t.getValue("willChange");
    if (sc(r)) return r.add(e);
    if (!r && et.WillChange) {
        let i = new et.WillChange("auto");
        t.addValue("willChange", i), i.add(e)
    }
}
var An = d(() => {
    v();
    x()
});
var ke, Ci = d(() => {
    ke = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
});
var el, Pr, Re = d(() => {
    Ci();
    el = "framerAppearId", Pr = "data-" + ke(el)
});

function Ar(t) {
    return t.props[Pr]
}
var Mr = d(() => {
    Re()
});

function uc(t, {
    repeat: e,
    repeatType: r = "loop"
}, i) {
    let o = t.filter(lc),
        n = e && r !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !n || i === void 0 ? o[n] : i
}

function fc({
    when: t,
    delay: e,
    delayChildren: r,
    staggerChildren: i,
    staggerDirection: o,
    repeat: n,
    repeatType: a,
    repeatDelay: s,
    from: l,
    elapsed: u,
    ...m
}) {
    return !!Object.keys(m).length
}
var lc, mc, pc, cc, hc, dc, Le, Ei = d(() => {
    x();
    v();
    x();
    lc = t => t !== null;
    mc = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }, pc = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }), cc = {
        type: "keyframes",
        duration: .8
    }, hc = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }, dc = (t, {
        keyframes: e
    }) => e.length > 2 ? cc : at.has(t) ? t.startsWith("scale") ? pc(e[1]) : mc : hc;
    Le = (t, e, r, i = {}, o, n) => a => {
        let s = $t(i, t) || {},
            l = s.delay || i.delay || 0,
            {
                elapsed: u = 0
            } = i;
        u = u - F(l);
        let m = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...s,
            delay: -u,
            onUpdate: c => {
                e.set(c), s.onUpdate && s.onUpdate(c)
            },
            onComplete: () => {
                a(), s.onComplete && s.onComplete()
            },
            name: t,
            motionValue: e,
            element: n ? void 0 : o
        };
        fc(s) || Object.assign(m, dc(t, m)), m.duration && (m.duration = F(m.duration)), m.repeatDelay && (m.repeatDelay = F(m.repeatDelay)), m.from !== void 0 && (m.keyframes[0] = m.from);
        let p = !1;
        if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (xi(m), m.delay === 0 && (p = !0)), (et.instantAnimations || et.skipAnimations) && (p = !0, xi(m), m.delay = 0), m.allowFlatten = !s.type && !s.ease, p && !n && e.get() !== void 0) {
            let c = uc(m.keyframes, s);
            if (c !== void 0) {
                A.update(() => {
                    m.onUpdate(c), m.onComplete()
                });
                return
            }
        }
        return s.isSync ? new gi(m) : new Ds(m)
    }
});

function gc({
    protectedKeys: t,
    needsAnimating: e
}, r) {
    let i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1, i
}

function Oe(t, e, {
    delay: r = 0,
    transitionOverride: i,
    type: o
} = {}) {
    let {
        transition: n = t.getDefaultTransition(),
        transitionEnd: a,
        ...s
    } = e;
    i && (n = i);
    let l = [],
        u = o && t.animationState && t.animationState.getState()[o];
    for (let m in s) {
        let p = t.getValue(m, t.latestValues[m] ?? null),
            c = s[m];
        if (c === void 0 || u && gc(u, m)) continue;
        let h = {
                delay: r,
                ...$t(n || {}, m)
            },
            g = p.get();
        if (g !== void 0 && !p.isAnimating && !Array.isArray(c) && c === g && !h.velocity) continue;
        let w = !1;
        if (window.MotionHandoffAnimation) {
            let f = Ar(t);
            if (f) {
                let S = window.MotionHandoffAnimation(f, m, A);
                S !== null && (h.startTime = S, w = !0)
            }
        }
        Tr(t, m), p.start(Le(m, p, c, t.shouldReduceMotion && fn.has(m) ? {
            type: !1
        } : h, t, w));
        let y = p.animation;
        y && l.push(y)
    }
    return a && Promise.all(l).then(() => {
        A.update(() => {
            a && Pn(t, a)
        })
    }), l
}
var Vi = d(() => {
    x();
    Mi();
    An();
    Mr();
    Ei()
});

function Di({
    top: t,
    left: e,
    right: r,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}

function rl({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function il(t, e) {
    if (!e) return t;
    let r = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}
var Mn = d(() => {});

function Cn(t) {
    return t === void 0 || t === 1
}

function ki({
    scale: t,
    scaleX: e,
    scaleY: r
}) {
    return !Cn(t) || !Cn(e) || !Cn(r)
}

function kt(t) {
    return ki(t) || En(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function En(t) {
    return ol(t.x) || ol(t.y)
}

function ol(t) {
    return t && t !== "0%"
}
var Vn = d(() => {});

function Cr(t, e, r) {
    let i = t - r,
        o = e * i;
    return r + o
}

function nl(t, e, r, i, o) {
    return o !== void 0 && (t = Cr(t, o, i)), Cr(t, r, i) + e
}

function Dn(t, e = 0, r = 1, i, o) {
    t.min = nl(t.min, e, r, i, o), t.max = nl(t.max, e, r, i, o)
}

function kn(t, {
    x: e,
    y: r
}) {
    Dn(t.x, e.translate, e.scale, e.originPoint), Dn(t.y, r.translate, r.scale, r.originPoint)
}

function ul(t, e, r, i = !1) {
    let o = r.length;
    if (!o) return;
    e.x = e.y = 1;
    let n, a;
    for (let s = 0; s < o; s++) {
        n = r[s], a = n.projectionDelta;
        let {
            visualElement: l
        } = n.options;
        l && l.props.style && l.props.style.display === "contents" || (i && n.options.layoutScroll && n.scroll && n !== n.root && re(t, {
            x: -n.scroll.offset.x,
            y: -n.scroll.offset.y
        }), a && (e.x *= a.x.scale, e.y *= a.y.scale, kn(t, a)), i && kt(n.latestValues) && re(t, n.latestValues))
    }
    e.x < sl && e.x > al && (e.x = 1), e.y < sl && e.y > al && (e.y = 1)
}

function zt(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function ll(t, e, r, i, o = .5) {
    let n = D(t.min, t.max, o);
    Dn(t, e, r, n, i)
}

function re(t, e) {
    ll(t.x, e.x, e.scaleX, e.scale, e.originX), ll(t.y, e.y, e.scaleY, e.scale, e.originY)
}
var al, sl, Ri = d(() => {
    x();
    Vn();
    al = .999999999999, sl = 1.0000000000001
});

function Rn(t, e) {
    return Di(il(t.getBoundingClientRect(), e))
}

function ml(t, e, r) {
    let i = Rn(t, r),
        {
            scroll: o
        } = e;
    return o && (zt(i.x, o.offset.x), zt(i.y, o.offset.y)), i
}
var Ln = d(() => {
    Mn();
    Ri()
});
var pl, Rt, Li = d(() => {
    pl = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    }, Rt = {};
    for (let t in pl) Rt[t] = {
        isEnabled: e => pl[t].some(r => !!e[r])
    }
});
var cl, ie, hl, O, Lt = d(() => {
    cl = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }), ie = () => ({
        x: cl(),
        y: cl()
    }), hl = () => ({
        min: 0,
        max: 0
    }), O = () => ({
        x: hl(),
        y: hl()
    })
});
var oe, Be = d(() => {
    oe = typeof window < "u"
});
var Ie, Er, Vr = d(() => {
    Ie = {
        current: null
    }, Er = {
        current: !1
    }
});

function On() {
    if (Er.current = !0, !!oe)
        if (window.matchMedia) {
            let t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Ie.current = t.matches;
            t.addEventListener("change", e), e()
        } else Ie.current = !1
}
var Oi = d(() => {
    Be();
    Vr()
});

function Kt(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
var Dr = d(() => {});

function Ot(t) {
    return typeof t == "string" || Array.isArray(t)
}
var kr = d(() => {});
var Bi, Rr, Ii = d(() => {
    Bi = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], Rr = ["initial", ...Bi]
});

function ne(t) {
    return Kt(t.animate) || Rr.some(e => Ot(t[e]))
}

function Fi(t) {
    return !!(ne(t) || t.variants)
}
var ji = d(() => {
    Dr();
    kr();
    Ii()
});

function vc(t, e, r) {
    for (let i in e) {
        let o = e[i],
            n = r[i];
        if (k(o)) t.addValue(i, o);
        else if (k(n)) t.addValue(i, J(o, {
            owner: t
        }));
        else if (n !== o)
            if (t.hasValue(i)) {
                let a = t.getValue(i);
                a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o)
            } else {
                let a = t.getStaticValue(i);
                t.addValue(i, J(a !== void 0 ? a : o, {
                    owner: t
                }))
            }
    }
    for (let i in r) e[i] === void 0 && t.removeValue(i);
    return e
}
var dl, Fe, je = d(() => {
    x();
    v();
    Li();
    Lt();
    Oi();
    Vr();
    Ve();
    ji();
    x();
    Ai();
    dl = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"], Fe = class {
        scrapeMotionValuesFromProps(t, e, r) {
            return {}
        }
        constructor({
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: i,
            blockInitialAnimation: o,
            visualState: n
        }, a = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = vi, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let p = rt.now();
                this.renderScheduledAt < p && (this.renderScheduledAt = p, A.render(this.render, !1, !0))
            };
            let {
                latestValues: s,
                renderState: l
            } = n;
            this.latestValues = s, this.baseTarget = {
                ...s
            }, this.initialValues = e.initial ? {
                ...s
            } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ne(e), this.isVariantNode = Fi(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
            let {
                willChange: u,
                ...m
            } = this.scrapeMotionValuesFromProps(e, {}, this);
            for (let p in m) {
                let c = m[p];
                s[p] !== void 0 && k(c) && c.set(s[p])
            }
        }
        mount(t) {
            this.current = t, Dt.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, r) => this.bindToMotionValue(r, e)), Er.current || On(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ie.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
            this.projection && this.projection.unmount(), K(this.notifyUpdate), K(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
            for (let t in this.events) this.events[t].clear();
            for (let t in this.features) {
                let e = this.features[t];
                e && (e.unmount(), e.isMounted = !1)
            }
            this.current = null
        }
        addChild(t) {
            this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
            this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
            this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
            let r = at.has(t);
            r && this.onBindTransform && this.onBindTransform();
            let i = e.on("change", n => {
                    this.latestValues[t] = n, this.props.onUpdate && A.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
                }),
                o;
            window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                i(), o && o(), e.owner && e.stop()
            })
        }
        sortNodePosition(t) {
            return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
        }
        updateFeatures() {
            let t = "animation";
            for (t in Rt) {
                let e = Rt[t];
                if (!e) continue;
                let {
                    isEnabled: r,
                    Feature: i
                } = e;
                if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                    let o = this.features[t];
                    o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : O()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
            for (let r = 0; r < dl.length; r++) {
                let i = dl[r];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let o = "on" + i,
                    n = t[o];
                n && (this.propEventSubscriptions[i] = this.on(i, n))
            }
            this.prevMotionValues = vc(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
            let e = this.getClosestVariantNode();
            if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
            let r = this.values.get(t);
            e !== r && (r && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
        }
        removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t]) return this.props.values[t];
            let r = this.values.get(t);
            return r === void 0 && e !== void 0 && (r = J(e === null ? void 0 : e, {
                owner: this
            }), this.addValue(t, r)), r
        }
        readValue(t, e) {
            let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
            return r != null && (typeof r == "string" && (ti(r) || ri(r)) ? r = parseFloat(r) : !Ks(r) && St.test(e) && (r = vn(t, e)), this.setBaseTarget(t, k(r) ? r.get() : r)), k(r) ? r.get() : r
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        getBaseTarget(t) {
            let {
                initial: e
            } = this.props, r;
            if (typeof e == "string" || typeof e == "object") {
                let o = De(this.props, e, this.presenceContext?.custom);
                o && (r = o[t])
            }
            if (e && r !== void 0) return r;
            let i = this.getBaseTargetFromProps(this.props, t);
            return i !== void 0 && !k(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new ve), this.events[t].add(e)
        }
        notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
            Ce.render(this.render)
        }
    }
});
var Ni, Bn = d(() => {
    x();
    je();
    Ni = class extends Fe {
        constructor() {
            super(...arguments), this.KeyframeResolver = Is
        }
        sortInstanceNodePosition(t, e) {
            return t.compareDocumentPosition(e) & 2 ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            return t.style ? t.style[e] : void 0
        }
        removeValueFromRenderState(t, {
            vars: e,
            style: r
        }) {
            delete e[t], delete r[t]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: t
            } = this.props;
            k(t) && (this.childSubscription = t.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }
});

function In(t, e, r) {
    let i = "",
        o = !0;
    for (let n = 0; n < xc; n++) {
        let a = wt[n],
            s = t[a];
        if (s === void 0) continue;
        let l = !0;
        if (typeof s == "number" ? l = s === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(s) === 0, !l || r) {
            let u = vr(s, Me[a]);
            if (!l) {
                o = !1;
                let m = yc[a] || a;
                i += `${m}(${u}) `
            }
            r && (e[a] = u)
        }
    }
    return i = i.trim(), r ? i = r(e, o ? "" : i) : o && (i = "none"), i
}
var yc, xc, Ui = d(() => {
    x();
    yc = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }, xc = wt.length
});

function Ne(t, e, r) {
    let {
        style: i,
        vars: o,
        transformOrigin: n
    } = t, a = !1, s = !1;
    for (let l in e) {
        let u = e[l];
        if (at.has(l)) {
            a = !0;
            continue
        } else if (Pe(l)) {
            o[l] = u;
            continue
        } else {
            let m = vr(u, Me[l]);
            l.startsWith("origin") ? (s = !0, n[l] = m) : i[l] = m
        }
    }
    if (e.transform || (a || r ? i.transform = In(e, t.transform, r) : i.transform && (i.transform = "none")), s) {
        let {
            originX: l = "50%",
            originY: u = "50%",
            originZ: m = 0
        } = n;
        i.transformOrigin = `${l} ${u} ${m}`
    }
}
var _i = d(() => {
    x();
    Ui()
});

function Wi(t, {
    style: e,
    vars: r
}, i, o) {
    let n = t.style,
        a;
    for (a in e) n[a] = e[a];
    o?.applyProjectionStyles(n, i);
    for (a in r) n.setProperty(a, r[a])
}
var Fn = d(() => {});

function jn(t) {
    for (let e in t) ae[e] = t[e], Pe(e) && (ae[e].isCSSVariable = !0)
}
var ae, Ue = d(() => {
    x();
    ae = {}
});

function Gi(t, {
    layout: e,
    layoutId: r
}) {
    return at.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!ae[t] || t === "opacity")
}
var Nn = d(() => {
    x();
    Ue()
});

function _e(t, e, r) {
    let {
        style: i
    } = t, o = {};
    for (let n in i)(k(i[n]) || e.style && k(e.style[n]) || Gi(n, t) || r?.getValue(n)?.liveStyle !== void 0) && (o[n] = i[n]);
    return o
}
var Hi = d(() => {
    x();
    Nn()
});

function wc(t) {
    return window.getComputedStyle(t)
}
var $i, Un = d(() => {
    x();
    Ln();
    Bn();
    _i();
    Fn();
    Hi();
    $i = class extends Ni {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = Wi
        }
        readValueFromInstance(t, e) {
            if (at.has(e)) return this.projection?.isProjecting ? hi(e) : Ts(t, e);
            {
                let r = wc(t),
                    i = (Pe(e) ? r.getPropertyValue(e) : r[e]) || 0;
                return typeof i == "string" ? i.trim() : i
            }
        }
        measureInstanceViewportBox(t, {
            transformPagePoint: e
        }) {
            return Rn(t, e)
        }
        build(t, e, r) {
            Ne(t, e, r.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, r) {
            return _e(t, e, r)
        }
    }
});

function Tc(t, e, r = 1, i = 0, o = !0) {
    t.pathLength = 1;
    let n = o ? Sc : bc;
    t[n.offset] = T.transform(-i);
    let a = T.transform(e),
        s = T.transform(r);
    t[n.array] = `${a} ${s}`
}

function zi(t, {
    attrX: e,
    attrY: r,
    attrScale: i,
    pathLength: o,
    pathSpacing: n = 1,
    pathOffset: a = 0,
    ...s
}, l, u, m) {
    if (Ne(t, s, u), l) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    let {
        attrs: p,
        style: c
    } = t;
    p.transform && (c.transform = p.transform, delete p.transform), (c.transform || p.transformOrigin) && (c.transformOrigin = p.transformOrigin ?? "50% 50%", delete p.transformOrigin), c.transform && (c.transformBox = m?.transformBox ?? "fill-box", delete p.transformBox), e !== void 0 && (p.x = e), r !== void 0 && (p.y = r), i !== void 0 && (p.scale = i), o !== void 0 && Tc(p, o, n, a, !1)
}
var Sc, bc, _n = d(() => {
    _i();
    x();
    Sc = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    }, bc = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    }
});
var Ki, Wn = d(() => {
    Ki = t => typeof t == "string" && t.toLowerCase() === "svg"
});

function Xi(t, e, r) {
    let i = _e(t, e, r);
    for (let o in t)
        if (k(t[o]) || k(e[o])) {
            let n = wt.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            i[n] = t[o]
        } return i
}
var Gn = d(() => {
    x();
    Hi()
});

function Pc(t, e, r, i) {
    Wi(t, e, void 0, i);
    for (let o in e.attrs) t.setAttribute(fl.has(o) ? o : ke(o), e.attrs[o])
}
var fl, Yi, Hn = d(() => {
    x();
    Lt();
    Bn();
    Ci();
    _n();
    Wn();
    Ci();
    Fn();
    Gn();
    fl = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    Yi = class extends Ni {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = O
        }
        getBaseTargetFromProps(t, e) {
            return t[e]
        }
        readValueFromInstance(t, e) {
            if (at.has(e)) {
                let r = gn(e);
                return r && r.default || 0
            }
            return e = fl.has(e) ? e : ke(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, r) {
            return Xi(t, e, r)
        }
        build(t, e, r) {
            zi(t, e, this.isSVGTag, r.transformTemplate, r.style)
        }
        renderInstance(t, e, r, i) {
            Pc(t, e, r, i)
        }
        mount(t) {
            this.isSVGTag = Ki(t.tagName), super.mount(t)
        }
    }
});

function qi(t, e, r) {
    let i = k(t) ? t : J(t);
    return i.start(Le("", i, e, r)), i.animation
}
var $n = d(() => {
    x();
    Ei()
});

function Ac(t, e) {
    return t in e
}

function Cc(t) {
    let e = {
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    transform: {},
                    transformOrigin: {},
                    style: {},
                    vars: {},
                    attrs: {}
                },
                latestValues: {}
            }
        },
        r = Ee(t) && !Ti(t) ? new Yi(e) : new $i(e);
    r.mount(t), Dt.set(t, r)
}

function Ec(t) {
    let e = {
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    output: {}
                },
                latestValues: {}
            }
        },
        r = new Mc(e);
    r.mount(t), Dt.set(t, r)
}

function Vc(t, e) {
    return k(t) || typeof t == "number" || typeof t == "string" && !wr(e)
}

function gl(t, e, r, i) {
    let o = [];
    if (Vc(t, e)) o.push(qi(t, wr(e) && e.default || e, r && (r.default || r)));
    else {
        let n = Pi(t, e, i),
            a = n.length;
        B(!!a, "No valid elements provided.", "no-valid-elements");
        for (let s = 0; s < a; s++) {
            let l = n[s];
            B(l !== null, "You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.", "animate-null");
            let u = l instanceof Element ? Cc : Ec;
            Dt.has(l) || u(l);
            let m = Dt.get(l),
                p = {
                    ...r
                };
            "delay" in p && typeof p.delay == "function" && (p.delay = p.delay(s, a)), o.push(...Oe(m, {
                ...e,
                transition: p
            }, {}))
        }
    }
    return o
}

function Dc(t, e, r) {
    let i = [];
    return Js(t, e, r, {
        spring: be
    }).forEach(({
        keyframes: o,
        transition: n
    }, a) => {
        i.push(...gl(a, o, n))
    }), i
}

function kc(t) {
    return Array.isArray(t) && t.some(Array.isArray)
}

function zn(t) {
    function e(r, i, o) {
        let n = [],
            a;
        if (kc(r)) n = Dc(r, i, t);
        else {
            let {
                onComplete: l,
                ...u
            } = o || {};
            typeof l == "function" && (a = l), n = gl(r, i, u, t)
        }
        let s = new wi(n);
        return a && s.finished.then(a), t && (t.animations.push(s), s.finished.then(() => {
            yt(t.animations, s)
        })), s
    }
    return e
}
var Mc, Kn, Zi = d(() => {
    x();
    v();
    x();
    Qs();
    x();
    v();
    Ve();
    Vi();
    x();
    Un();
    Lt();
    je();
    Ve();
    Hn();
    Sn();
    bn();
    $n();
    Mc = class extends Fe {
        constructor() {
            super(...arguments), this.type = "object"
        }
        readValueFromInstance(t, e) {
            if (Ac(e, t)) {
                let r = t[e];
                if (typeof r == "string" || typeof r == "number") return r
            }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(t, e) {
            delete e.output[t]
        }
        measureInstanceViewportBox() {
            return O()
        }
        build(t, e) {
            Object.assign(t.output, e)
        }
        renderInstance(t, {
            output: e
        }) {
            Object.assign(t, e)
        }
        sortInstanceNodePosition() {
            return 0
        }
    };
    Kn = zn()
});

function vl(t, e, r, i) {
    let o = Vt(t, i),
        n = o.length;
    B(!!n, "No valid elements provided.", "no-valid-elements");
    let a = [];
    for (let l = 0; l < n; l++) {
        let u = o[l],
            m = {
                ...r
            };
        typeof m.delay == "function" && (m.delay = m.delay(l, n));
        for (let p in e) {
            let c = e[p];
            Array.isArray(c) || (c = [c]);
            let h = {
                ...$t(m, p)
            };
            h.duration && (h.duration = F(h.duration)), h.delay && (h.delay = F(h.delay));
            let g = Rs(u),
                w = ks(p, h.pseudoElement || ""),
                y = g.get(w);
            y && y.stop(), a.push({
                map: g,
                key: w,
                unresolvedKeyframes: c,
                options: {
                    ...h,
                    element: u,
                    name: p,
                    allowFlatten: !m.type && !m.ease
                }
            })
        }
    }
    for (let l = 0; l < a.length; l++) {
        let {
            unresolvedKeyframes: u,
            options: m
        } = a[l], {
            element: p,
            name: c,
            pseudoElement: h
        } = m;
        !h && u[0] === null && (u[0] = wn(p, c)), pn(u), Fs(u, c), !h && u.length < 2 && u.unshift(wn(p, c)), m.keyframes = u
    }
    let s = [];
    for (let l = 0; l < a.length; l++) {
        let {
            map: u,
            key: m,
            options: p
        } = a[l], c = new dn(p);
        u.set(m, c), c.finished.finally(() => u.delete(m)), s.push(c)
    }
    return s
}
var yl = d(() => {
    x();
    v()
});
var xl, Rc, Ji = d(() => {
    x();
    yl();
    xl = t => {
        function e(r, i, o) {
            return new wi(vl(r, i, o, t))
        }
        return e
    }, Rc = xl()
});
var C0, Lc, Oc, Xn, it, wl, E0, V0, We, Qi, Bc, D0, k0, R0, L0, O0, B0, I0, Tt, L, F0, j0, j, to, N0, Ge, Yn, ct, U0, _, pt, _0, W0, G0, b = d(() => {
    C0 = window.__GLOBALS__.React, {
        Children: Lc,
        cloneElement: Oc,
        Component: Xn,
        createContext: it,
        createElement: wl,
        createFactory: E0,
        createRef: V0,
        forwardRef: We,
        Fragment: Qi,
        isValidElement: Bc,
        lazy: D0,
        memo: k0,
        Profiler: R0,
        PureComponent: L0,
        startTransition: O0,
        StrictMode: B0,
        Suspense: I0,
        useCallback: Tt,
        useContext: L,
        useDebugValue: F0,
        useDeferredValue: j0,
        useEffect: j,
        useId: to,
        useImperativeHandle: N0,
        useInsertionEffect: Ge,
        useLayoutEffect: Yn,
        useMemo: ct,
        useReducer: U0,
        useRef: _,
        useState: pt,
        useSyncExternalStore: _0,
        useTransition: W0,
        version: G0
    } = window.__GLOBALS__.React
});

function W(t) {
    let e = _(null);
    return e.current === null && (e.current = t()), e.current
}
var Q = d(() => {
    "use client";
    b()
});
var Lr = d(() => {
    "use client";
    b()
});
var qn = d(() => {
    "use client";
    Q();
    Lr();
    Ji()
});

function ro(t, e, r, i = 0, o = 1) {
    let n = Array.from(t).sort((l, u) => l.sortNodePosition(u)).indexOf(e),
        a = t.size,
        s = (a - 1) * i;
    return typeof r == "function" ? r(n, a) : o === 1 ? n * i : s - n * i
}
var Zn = d(() => {});

function Jn(t, e, r = {}) {
    let i = bt(t, e, r.type === "exit" ? t.presenceContext?.custom : void 0),
        {
            transition: o = t.getDefaultTransition() || {}
        } = i || {};
    r.transitionOverride && (o = r.transitionOverride);
    let n = i ? () => Promise.all(Oe(t, i, r)) : () => Promise.resolve(),
        a = t.variantChildren && t.variantChildren.size ? (l = 0) => {
            let {
                delayChildren: u = 0,
                staggerChildren: m,
                staggerDirection: p
            } = o;
            return Ic(t, e, l, u, m, p, r)
        } : () => Promise.resolve(),
        {
            when: s
        } = o;
    if (s) {
        let [l, u] = s === "beforeChildren" ? [n, a] : [a, n];
        return l().then(() => u())
    } else return Promise.all([n(), a(r.delay)])
}

function Ic(t, e, r = 0, i = 0, o = 0, n = 1, a) {
    let s = [];
    for (let l of t.variantChildren) l.notify("AnimationStart", e), s.push(Jn(l, e, {
        ...a,
        delay: r + (typeof i == "function" ? 0 : i) + ro(t.variantChildren, l, i, o, n)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(s)
}

function Or(t, e, r = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        let o = e.map(n => Jn(t, n, r));
        i = Promise.all(o)
    } else if (typeof e == "string") i = Jn(t, e, r);
    else {
        let o = typeof e == "function" ? bt(t, e, r.custom) : e;
        i = Promise.all(Oe(t, o, r))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
var He = d(() => {
    br();
    Vi();
    br();
    Zn();
    Vi()
});
var Bt, Xt = d(() => {
    "use client";
    b();
    Bt = it(null)
});

function io(t = !0) {
    let e = L(Bt);
    if (e === null) return [!0, null];
    let {
        isPresent: r,
        onExitComplete: i,
        register: o
    } = e, n = to();
    j(() => {
        if (t) return o(n)
    }, [t]);
    let a = Tt(() => t && i && i(n), [n, i, t]);
    return !r && i ? [!1, a] : [!0]
}
var Br = d(() => {
    "use client";
    b();
    Xt()
});
var se, le = d(() => {
    "use client";
    b();
    se = it({})
});
var Ir, Fr = d(() => {
    "use client";
    b();
    Ir = it({
        strict: !1
    })
});
var ht, vt = d(() => {
    "use client";
    b();
    ht = it({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    })
});
var Pt, Yt = d(() => {
    "use client";
    b();
    Pt = it({})
});
var jr, Nr = d(() => {
    "use client";
    b();
    jr = it({})
});

function At(t, e, r, i = {
    passive: !0
}) {
    return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
}
var ue = d(() => {});

function It(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
var Qn, qt = d(() => {
    x();
    Qn = t => e => xr(e) && t(e, It(e))
});

function Ft(t, e, r, i) {
    return At(t, e, Qn(r), i)
}
var $e = d(() => {
    ue();
    qt()
});
var ot, jt = d(() => {
    ot = class {
        constructor(t) {
            this.isMounted = !1, this.node = t
        }
        update() {}
    }
});

function Tl(t, e) {
    if (!Array.isArray(e)) return !1;
    let r = e.length;
    if (r !== t.length) return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}

function Pl(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        let r = t.parent ? Pl(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial), r
    }
    let e = {};
    for (let r = 0; r < Fc; r++) {
        let i = Rr[r],
            o = t.props[i];
        (Ot(o) || o === !1) && (e[i] = o)
    }
    return e
}

function Uc(t) {
    return e => Promise.all(e.map(({
        animation: r,
        options: i
    }) => Or(t, r, i)))
}

function _c(t) {
    let e = Uc(t),
        r = bl(),
        i = !0,
        o = l => (u, m) => {
            let p = bt(t, m, l === "exit" ? t.presenceContext?.custom : void 0);
            if (p) {
                let {
                    transition: c,
                    transitionEnd: h,
                    ...g
                } = p;
                u = {
                    ...u,
                    ...g,
                    ...h
                }
            }
            return u
        };

    function n(l) {
        e = l(t)
    }

    function a(l) {
        let {
            props: u
        } = t, m = Pl(t.parent) || {}, p = [], c = new Set, h = {}, g = 1 / 0;
        for (let y = 0; y < Nc; y++) {
            let f = jc[y],
                S = r[f],
                P = u[f] !== void 0 ? u[f] : m[f],
                E = Ot(P),
                M = f === l ? S.isActive : null;
            M === !1 && (g = y);
            let V = P === m[f] && P !== u[f] && E;
            if (V && i && t.manuallyAnimateOnMount && (V = !1), S.protectedKeys = {
                    ...h
                }, !S.isActive && M === null || !P && !S.prevProp || Kt(P) || typeof P == "boolean") continue;
            let N = Wc(S.prevProp, P),
                C = N || f === l && S.isActive && !V && E || y > g && E,
                R = !1,
                _t = Array.isArray(P) ? P : [P],
                nt = _t.reduce(o(f), {});
            M === !1 && (nt = {});
            let {
                prevResolvedValues: ge = {}
            } = S, Zt = {
                ...ge,
                ...nt
            }, Co = Y => {
                C = !0, c.has(Y) && (R = !0, c.delete(Y)), S.needsAnimating[Y] = !0;
                let $ = t.getValue(Y);
                $ && ($.liveStyle = !1)
            };
            for (let Y in Zt) {
                let $ = nt[Y],
                    tt = ge[Y];
                if (h.hasOwnProperty(Y)) continue;
                let Ct = !1;
                Sr($) && Sr(tt) ? Ct = !Tl($, tt) : Ct = $ !== tt, Ct ? $ != null ? Co(Y) : c.add(Y) : $ !== void 0 && c.has(Y) ? Co(Y) : S.protectedKeys[Y] = !0
            }
            S.prevProp = P, S.prevResolvedValues = nt, S.isActive && (h = {
                ...h,
                ...nt
            }), i && t.blockInitialAnimation && (C = !1);
            let Eo = V && N;
            C && (!Eo || R) && p.push(..._t.map(Y => {
                let $ = {
                    type: f
                };
                if (typeof Y == "string" && i && !Eo && t.manuallyAnimateOnMount && t.parent) {
                    let {
                        parent: tt
                    } = t, Ct = bt(tt, Y);
                    if (tt.enteringChildren && Ct) {
                        let {
                            delayChildren: qr
                        } = Ct.transition || {};
                        $.delay = ro(tt.enteringChildren, t, qr)
                    }
                }
                return {
                    animation: Y,
                    options: $
                }
            }))
        }
        if (c.size) {
            let y = {};
            if (typeof u.initial != "boolean") {
                let f = bt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                f && f.transition && (y.transition = f.transition)
            }
            c.forEach(f => {
                let S = t.getBaseTarget(f),
                    P = t.getValue(f);
                P && (P.liveStyle = !0), y[f] = S ?? null
            }), p.push({
                animation: y
            })
        }
        let w = !!p.length;
        return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (w = !1), i = !1, w ? e(p) : Promise.resolve()
    }

    function s(l, u) {
        if (r[l].isActive === u) return Promise.resolve();
        t.variantChildren?.forEach(p => p.animationState?.setActive(l, u)), r[l].isActive = u;
        let m = a(l);
        for (let p in r) r[p].protectedKeys = {};
        return m
    }
    return {
        animateChanges: a,
        setActive: s,
        setAnimateFunction: n,
        getState: () => r,
        reset: () => {
            r = bl(), i = !0
        }
    }
}

function Wc(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Tl(e, t) : !1
}

function me(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function bl() {
    return {
        animate: me(!0),
        whileInView: me(),
        whileHover: me(),
        whileTap: me(),
        whileDrag: me(),
        whileFocus: me(),
        exit: me()
    }
}
var Fc, jc, Nc, Gc, Hc, $c, pe, ze = d(() => {
    Dr();
    He();
    Zn();
    Dr();
    Tn();
    kr();
    Ii();
    kr();
    br();
    Ii();
    jt();
    jt();
    Fc = Rr.length;
    jc = [...Bi].reverse(), Nc = Bi.length;
    Gc = class extends ot {
        constructor(t) {
            super(t), t.animationState || (t.animationState = _c(t))
        }
        updateAnimationControlsSubscription() {
            let {
                animate: t
            } = this.node.getProps();
            Kt(t) && (this.unmountControls = t.subscribe(this.node))
        }
        mount() {
            this.updateAnimationControlsSubscription()
        }
        update() {
            let {
                animate: t
            } = this.node.getProps(), {
                animate: e
            } = this.node.prevProps || {};
            t !== e && this.updateAnimationControlsSubscription()
        }
        unmount() {
            this.node.animationState.reset(), this.unmountControls?.()
        }
    }, Hc = 0, $c = class extends ot {
        constructor() {
            super(...arguments), this.id = Hc++
        }
        update() {
            if (!this.node.presenceContext) return;
            let {
                isPresent: t,
                onExitComplete: e
            } = this.node.presenceContext, {
                isPresent: r
            } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || t === r) return;
            let i = this.node.animationState.setActive("exit", !t);
            e && !t && i.then(() => {
                e(this.id)
            })
        }
        mount() {
            let {
                register: t,
                onExitComplete: e
            } = this.node.presenceContext || {};
            e && e(this.id), t && (this.unmount = t(this.id))
        }
        unmount() {}
    }, pe = {
        animation: {
            Feature: Gc
        },
        exit: {
            Feature: $c
        }
    }
});

function X(t) {
    return t.max - t.min
}

function Dl(t, e, r) {
    return Math.abs(t - e) <= r
}

function Al(t, e, r, i = .5) {
    t.origin = i, t.originPoint = D(e.min, e.max, t.origin), t.scale = X(r) / X(e), t.translate = D(r.min, r.max, t.origin) - t.originPoint, (t.scale >= zc && t.scale <= Kc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Xc && t.translate <= Yc || isNaN(t.translate)) && (t.translate = 0)
}

function Ke(t, e, r, i) {
    Al(t.x, e.x, r.x, i ? i.originX : void 0), Al(t.y, e.y, r.y, i ? i.originY : void 0)
}

function Ml(t, e, r) {
    t.min = r.min + e.min, t.max = t.min + X(e)
}

function kl(t, e, r) {
    Ml(t.x, e.x, r.x), Ml(t.y, e.y, r.y)
}

function Cl(t, e, r) {
    t.min = e.min - r.min, t.max = t.min + X(e)
}

function Xe(t, e, r) {
    Cl(t.x, e.x, r.x), Cl(t.y, e.y, r.y)
}
var El, zc, Kc, Vl, Xc, Yc, ce = d(() => {
    x();
    El = 1e-4, zc = 1 - El, Kc = 1 + El, Vl = .01, Xc = 0 - Vl, Yc = 0 + Vl
});

function lt(t) {
    return [t("x"), t("y")]
}
var ta = d(() => {});

function Nt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
var oo = d(() => {});

function ra(t, e) {
    let r = ea(t.x, e.x),
        i = ea(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
var ea, no = d(() => {
    ea = (t, e) => Math.abs(t - e)
});
var qc, H, Rl, st = d(() => {
    ({
        Fragment: qc,
        jsx: H,
        jsxs: Rl
    } = window.__GLOBALS__.ReactJSXRuntime)
});
var Ye, ia = d(() => {
    Ye = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    }
});

function Ll(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
var qe, Ol = d(() => {
    x();
    qe = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (T.test(t)) t = parseFloat(t);
                else return t;
            let r = Ll(t, e.target.x),
                i = Ll(t, e.target.y);
            return `${r}% ${i}%`
        }
    }
});
var Bl, Il = d(() => {
    x();
    Bl = {
        correct: (t, {
            treeScale: e,
            projectionDelta: r
        }) => {
            let i = t,
                o = St.parse(t);
            if (o.length > 5) return i;
            let n = St.createTransformer(t),
                a = typeof o[0] != "number" ? 1 : 0,
                s = r.x.scale * e.x,
                l = r.y.scale * e.y;
            o[0 + a] /= s, o[1 + a] /= l;
            let u = D(s, l, .5);
            return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), n(o)
        }
    }
});

function ao(t) {
    let [e, r] = io(), i = L(se);
    return H(Zc, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: L(jr),
        isPresent: e,
        safeToRemove: r
    })
}
var oa, Zc, Jc, na = d(() => {
    "use client";
    st();
    x();
    b();
    Br();
    le();
    Nr();
    ia();
    Ol();
    Il();
    Ue();
    oa = !1, Zc = class extends Xn {
        componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: r,
                layoutId: i
            } = this.props, {
                projection: o
            } = t;
            jn(Jc), o && (e.group && e.group.add(o), r && r.register && i && r.register(o), oa && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove()
            })), Ye.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: r,
                drag: i,
                isPresent: o
            } = this.props, {
                projection: n
            } = r;
            return n && (n.isPresent = o, oa = !0, i || t.layoutDependency !== e || e === void 0 || t.isPresent !== o ? n.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? n.promote() : n.relegate() || A.postRender(() => {
                let a = n.getStack();
                (!a || !a.members.length) && this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                projection: t
            } = this.props.visualElement;
            t && (t.root.didUpdate(), Ce.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: r
            } = this.props, {
                projection: i
            } = t;
            oa = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), r && r.deregister && r.deregister(i))
        }
        safeToRemove() {
            let {
                safeToRemove: t
            } = this.props;
            t && t()
        }
        render() {
            return null
        }
    };
    Jc = {
        borderRadius: {
            ...qe,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: qe,
        borderTopRightRadius: qe,
        borderBottomLeftRadius: qe,
        borderBottomRightRadius: qe,
        boxShadow: Bl
    }
});

function aa(t, e) {
    let r = rt.now(),
        i = ({
            timestamp: o
        }) => {
            let n = o - r;
            n >= e && (K(i), t(n - e))
        };
    return A.setup(i, !0), () => K(i)
}
var so = d(() => {
    x();
    v()
});

function he(t) {
    return k(t) ? t.get() : t
}
var Ur = d(() => {
    x()
});

function rh(t, e, r, i, o, n) {
    o ? (t.opacity = D(0, r.opacity ?? 1, ih(i)), t.opacityExit = D(e.opacity ?? 1, 0, oh(i))) : n && (t.opacity = D(e.opacity ?? 1, r.opacity ?? 1, i));
    for (let a = 0; a < eh; a++) {
        let s = `border${ou[a]}Radius`,
            l = Nl(e, s),
            u = Nl(r, s);
        l === void 0 && u === void 0 || (l || (l = 0), u || (u = 0), l === 0 || u === 0 || jl(l) === jl(u) ? (t[s] = Math.max(D(Fl(l), Fl(u), i), 0), (mt.test(u) || mt.test(l)) && (t[s] += "%")) : t[s] = u)
    }(e.rotate || r.rotate) && (t.rotate = D(e.rotate || 0, r.rotate || 0, i))
}

function Nl(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}

function nu(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(ut(t, e, i))
}

function Ul(t, e) {
    t.min = e.min, t.max = e.max
}

function dt(t, e) {
    Ul(t.x, e.x), Ul(t.y, e.y)
}

function _l(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function Wl(t, e, r, i, o) {
    return t -= e, t = Cr(t, 1 / r, i), o !== void 0 && (t = Cr(t, 1 / o, i)), t
}

function nh(t, e = 0, r = 1, i = .5, o, n = t, a = t) {
    if (mt.test(e) && (e = parseFloat(e), e = D(a.min, a.max, e / 100) - a.min), typeof e != "number") return;
    let s = D(n.min, n.max, i);
    t === n && (s -= e), t.min = Wl(t.min, e, r, s, o), t.max = Wl(t.max, e, r, s, o)
}

function Gl(t, e, [r, i, o], n, a) {
    nh(t, e[r], e[i], e[o], e.scale, n, a)
}

function Hl(t, e, r, i) {
    Gl(t.x, e, ah, r ? r.x : void 0, i ? i.x : void 0), Gl(t.y, e, sh, r ? r.y : void 0, i ? i.y : void 0)
}

function $l(t) {
    return t.translate === 0 && t.scale === 1
}

function au(t) {
    return $l(t.x) && $l(t.y)
}

function zl(t, e) {
    return t.min === e.min && t.max === e.max
}

function lh(t, e) {
    return zl(t.x, e.x) && zl(t.y, e.y)
}

function Kl(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function su(t, e) {
    return Kl(t.x, e.x) && Kl(t.y, e.y)
}

function Xl(t) {
    return X(t.x) / X(t.y)
}

function Yl(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}

function mh(t, e, r) {
    let i = "",
        o = t.x.translate / e.x,
        n = t.y.translate / e.y,
        a = r?.z || 0;
    if ((o || n || a) && (i = `translate3d(${o}px, ${n}px, ${a}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), r) {
        let {
            transformPerspective: u,
            rotate: m,
            rotateX: p,
            rotateY: c,
            skewX: h,
            skewY: g
        } = r;
        u && (i = `perspective(${u}px) ${i}`), m && (i += `rotate(${m}deg) `), p && (i += `rotateX(${p}deg) `), c && (i += `rotateY(${c}deg) `), h && (i += `skewX(${h}deg) `), g && (i += `skewY(${g}deg) `)
    }
    let s = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (s !== 1 || l !== 1) && (i += `scale(${s}, ${l})`), i || "none"
}

function la(t, e, r, i) {
    let {
        latestValues: o
    } = e;
    o[t] && (r[t] = o[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function lu(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    let {
        visualElement: e
    } = t.options;
    if (!e) return;
    let r = Ar(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        let {
            layout: o,
            layoutId: n
        } = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", A, !(o || n))
    }
    let {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && lu(i)
}

function uu({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: r,
    checkIsScrollRoot: i,
    resetTransform: o
}) {
    return class {
        constructor(n = {}, a = e?.()) {
            this.id = ch++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, gt.value && (de.nodes = de.calculatedTargetDeltas = de.calculatedProjections = 0), this.nodes.forEach(fh), this.nodes.forEach(xh), this.nodes.forEach(wh), this.nodes.forEach(gh), gt.addProjectionMetrics && gt.addProjectionMetrics(de)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = n, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let s = 0; s < this.path.length; s++) this.path[s].shouldResetTransform = !0;
            this.root === this && (this.nodes = new th)
        }
        addEventListener(n, a) {
            return this.eventHandlers.has(n) || this.eventHandlers.set(n, new ve), this.eventHandlers.get(n).add(a)
        }
        notifyListeners(n, ...a) {
            let s = this.eventHandlers.get(n);
            s && s.notify(...a)
        }
        hasListeners(n) {
            return this.eventHandlers.has(n)
        }
        mount(n) {
            if (this.instance) return;
            this.isSVG = Ee(n) && !Ti(n), this.instance = n;
            let {
                layoutId: a,
                layout: s,
                visualElement: l
            } = this.options;
            if (l && !l.current && l.mount(n), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (s || a) && (this.isLayoutDirty = !0), t) {
                let u, m = 0,
                    p = () => this.root.updateBlockedByResize = !1;
                A.read(() => {
                    m = window.innerWidth
                }), t(n, () => {
                    let c = window.innerWidth;
                    c !== m && (m = c, this.root.updateBlockedByResize = !0, u && u(), u = aa(p, 250), Ye.hasAnimatedSinceResize && (Ye.hasAnimatedSinceResize = !1, this.nodes.forEach(Jl)))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && l && (a || s) && this.addEventListener("didUpdate", ({
                delta: u,
                hasLayoutChanged: m,
                hasRelativeLayoutChanged: p,
                layout: c
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                let h = this.options.transition || l.getDefaultTransition() || Ah,
                    {
                        onLayoutAnimationStart: g,
                        onLayoutAnimationComplete: w
                    } = l.getProps(),
                    y = !this.targetLayout || !su(this.targetLayout, c),
                    f = !m && p;
                if (this.options.layoutRoot || this.resumeFrom || f || m && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    let S = {
                        ...$t(h, "layout"),
                        onPlay: g,
                        onComplete: w
                    };
                    (l.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S), this.setAnimationOrigin(u, f)
                } else m || Jl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = c
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let n = this.getStack();
            n && n.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), K(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Sh), this.animationId++)
        }
        getTransformTemplate() {
            let {
                visualElement: n
            } = this.options;
            return n && n.getProps().transformTemplate
        }
        willUpdate(n = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lu(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                let m = this.path[u];
                m.shouldResetTransform = !0, m.updateScroll("snapshot"), m.options.layoutRoot && m.willUpdate(!1)
            }
            let {
                layoutId: a,
                layout: s
            } = this.options;
            if (a === void 0 && !s) return;
            let l = this.getTransformTemplate();
            this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), n && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ql);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Zl);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(yh), this.nodes.forEach(hh), this.nodes.forEach(dh)) : this.nodes.forEach(Zl), this.clearAllSnapshots();
            let n = rt.now();
            G.delta = q(0, 1e3 / 60, n - G.timestamp), G.timestamp = n, G.isProcessing = !0, di.update.process(G), di.preRender.process(G), di.render.process(G), G.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Ce.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(vh), this.sharedNodes.forEach(bh)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, A.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            A.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !X(this.snapshot.measuredBox.x) && !X(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let s = 0; s < this.path.length; s++) this.path[s].updateScroll();
            let n = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = O(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            let {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, n ? n.layoutBox : void 0)
        }
        updateScroll(n = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === n && (a = !1), a && this.instance) {
                let s = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: n,
                    isRoot: s,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : s
                }
            }
        }
        resetTransform() {
            if (!o) return;
            let n = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !au(this.projectionDelta),
                s = this.getTransformTemplate(),
                l = s ? s(this.latestValues, "") : void 0,
                u = l !== this.prevTransformTemplateValue;
            n && this.instance && (a || kt(this.latestValues) || u) && (o(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(n = !0) {
            let a = this.measurePageBox(),
                s = this.removeElementScroll(a);
            return n && (s = this.removeTransform(s)), Mh(s), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: s,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            let {
                visualElement: n
            } = this.options;
            if (!n) return O();
            let a = n.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(Ch))) {
                let {
                    scroll: s
                } = this.root;
                s && (zt(a.x, s.offset.x), zt(a.y, s.offset.y))
            }
            return a
        }
        removeElementScroll(n) {
            let a = O();
            if (dt(a, n), this.scroll?.wasRoot) return a;
            for (let s = 0; s < this.path.length; s++) {
                let l = this.path[s],
                    {
                        scroll: u,
                        options: m
                    } = l;
                l !== this.root && u && m.layoutScroll && (u.wasRoot && dt(a, n), zt(a.x, u.offset.x), zt(a.y, u.offset.y))
            }
            return a
        }
        applyTransform(n, a = !1) {
            let s = O();
            dt(s, n);
            for (let l = 0; l < this.path.length; l++) {
                let u = this.path[l];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && re(s, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }), kt(u.latestValues) && re(s, u.latestValues)
            }
            return kt(this.latestValues) && re(s, this.latestValues), s
        }
        removeTransform(n) {
            let a = O();
            dt(a, n);
            for (let s = 0; s < this.path.length; s++) {
                let l = this.path[s];
                if (!l.instance || !kt(l.latestValues)) continue;
                ki(l.latestValues) && l.updateSnapshot();
                let u = O(),
                    m = l.measurePageBox();
                dt(u, m), Hl(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u)
            }
            return kt(this.latestValues) && Hl(a, this.latestValues), a
        }
        setTargetDelta(n) {
            this.targetDelta = n, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(n) {
            this.options = {
                ...this.options,
                ...n,
                crossfade: n.crossfade !== void 0 ? n.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== G.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(n = !1) {
            let a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== a;
            if (!(n || s && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            let {
                layout: l,
                layoutId: u
            } = this.options;
            if (!(!this.layout || !(l || u))) {
                if (this.resolvedRelativeTargetAt = G.timestamp, !this.targetDelta && !this.relativeTarget) {
                    let m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = O(), this.relativeTargetOrigin = O(), Xe(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = O(), this.targetWithTransforms = O()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), kl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : dt(this.target, this.layout.layoutBox), kn(this.target, this.targetDelta)) : dt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        let m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = O(), this.relativeTargetOrigin = O(), Xe(this.relativeTargetOrigin, this.target, m.target), dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    gt.value && de.calculatedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ki(this.parent.latestValues) || En(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            let n = this.getLead(),
                a = !!this.resumingFrom || this !== n,
                s = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (s = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === G.timestamp && (s = !1), s) return;
            let {
                layout: l,
                layoutId: u
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || u)) return;
            dt(this.layoutCorrected, this.layout.layoutBox);
            let m = this.treeScale.x,
                p = this.treeScale.y;
            ul(this.layoutCorrected, this.treeScale, this.path, a), n.layout && !n.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (n.target = n.layout.layoutBox, n.targetWithTransforms = O());
            let {
                target: c
            } = n;
            if (!c) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (_l(this.prevProjectionDelta.x, this.projectionDelta.x), _l(this.prevProjectionDelta.y, this.projectionDelta.y)), Ke(this.projectionDelta, this.layoutCorrected, c, this.latestValues), (this.treeScale.x !== m || this.treeScale.y !== p || !Yl(this.projectionDelta.x, this.prevProjectionDelta.x) || !Yl(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", c)), gt.value && de.calculatedProjections++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(n = !0) {
            if (this.options.visualElement?.scheduleRender(), n) {
                let a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ie(), this.projectionDelta = ie(), this.projectionDeltaWithTransform = ie()
        }
        setAnimationOrigin(n, a = !1) {
            let s = this.snapshot,
                l = s ? s.latestValues : {},
                u = {
                    ...this.latestValues
                },
                m = ie();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            let p = O(),
                c = s ? s.source : void 0,
                h = this.layout ? this.layout.source : void 0,
                g = c !== h,
                w = this.getStack(),
                y = !w || w.members.length <= 1,
                f = !!(g && !y && this.options.crossfade === !0 && !this.path.some(Ph));
            this.animationProgress = 0;
            let S;
            this.mixTargetDelta = P => {
                let E = P / 1e3;
                Ql(m.x, n.x, E), Ql(m.y, n.y, E), this.setTargetDelta(m), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xe(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Th(this.relativeTarget, this.relativeTargetOrigin, p, E), S && lh(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = O()), dt(S, this.relativeTarget)), g && (this.animationValues = u, rh(u, l, this.latestValues, E, f, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(n) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (K(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = A.update(() => {
                Ye.hasAnimatedSinceResize = !0, Ht.layout++, this.motionValue || (this.motionValue = J(0)), this.currentAnimation = qi(this.motionValue, [0, 1e3], {
                    ...n,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: a => {
                        this.mixTargetDelta(a), n.onUpdate && n.onUpdate(a)
                    },
                    onStop: () => {
                        Ht.layout--
                    },
                    onComplete: () => {
                        Ht.layout--, n.onComplete && n.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            let n = this.getStack();
            n && n.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ph), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            let n = this.getLead(),
                {
                    targetWithTransforms: a,
                    target: s,
                    layout: l,
                    latestValues: u
                } = n;
            if (!(!a || !s || !l)) {
                if (this !== n && this.layout && l && mu(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
                    s = this.target || O();
                    let m = X(this.layout.layoutBox.x);
                    s.x.min = n.target.x.min, s.x.max = s.x.min + m;
                    let p = X(this.layout.layoutBox.y);
                    s.y.min = n.target.y.min, s.y.max = s.y.min + p
                }
                dt(a, s), re(a, u), Ke(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(n, a) {
            this.sharedNodes.has(n) || this.sharedNodes.set(n, new uh), this.sharedNodes.get(n).add(a);
            let s = a.options.initialPromotionConfig;
            a.promote({
                transition: s ? s.transition : void 0,
                preserveFollowOpacity: s && s.shouldPreserveFollowOpacity ? s.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            let n = this.getStack();
            return n ? n.lead === this : !0
        }
        getLead() {
            let {
                layoutId: n
            } = this.options;
            return n ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            let {
                layoutId: n
            } = this.options;
            return n ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            let {
                layoutId: n
            } = this.options;
            if (n) return this.root.sharedNodes.get(n)
        }
        promote({
            needsReset: n,
            transition: a,
            preserveFollowOpacity: s
        } = {}) {
            let l = this.getStack();
            l && l.promote(this, s), n && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            let n = this.getStack();
            return n ? n.relegate(this) : !1
        }
        resetSkewAndRotation() {
            let {
                visualElement: n
            } = this.options;
            if (!n) return;
            let a = !1,
                {
                    latestValues: s
                } = n;
            if ((s.z || s.rotate || s.rotateX || s.rotateY || s.rotateZ || s.skewX || s.skewY) && (a = !0), !a) return;
            let l = {};
            s.z && la("z", n, l, this.animationValues);
            for (let u = 0; u < sa.length; u++) la(`rotate${sa[u]}`, n, l, this.animationValues), la(`skew${sa[u]}`, n, l, this.animationValues);
            n.render();
            for (let u in l) n.setStaticValue(u, l[u]), this.animationValues && (this.animationValues[u] = l[u]);
            n.scheduleRender()
        }
        applyProjectionStyles(n, a) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                n.visibility = "hidden";
                return
            }
            let s = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, n.visibility = "", n.opacity = "", n.pointerEvents = he(a?.pointerEvents) || "", n.transform = s ? s(this.latestValues, "") : "none";
                return
            }
            let l = this.getLead();
            if (!this.projectionDelta || !this.layout || !l.target) {
                this.options.layoutId && (n.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, n.pointerEvents = he(a?.pointerEvents) || ""), this.hasProjected && !kt(this.latestValues) && (n.transform = s ? s({}, "") : "none", this.hasProjected = !1);
                return
            }
            n.visibility = "";
            let u = l.animationValues || l.latestValues;
            this.applyTransformsToTarget();
            let m = mh(this.projectionDeltaWithTransform, this.treeScale, u);
            s && (m = s(u, m)), n.transform = m;
            let {
                x: p,
                y: c
            } = this.projectionDelta;
            n.transformOrigin = `${p.origin * 100}% ${c.origin * 100}% 0`, l.animationValues ? n.opacity = l === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : n.opacity = l === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
            for (let h in ae) {
                if (u[h] === void 0) continue;
                let {
                    correct: g,
                    applyTo: w,
                    isCSSVariable: y
                } = ae[h], f = m === "none" ? u[h] : g(u[h], l);
                if (w) {
                    let S = w.length;
                    for (let P = 0; P < S; P++) n[w[P]] = f
                } else y ? this.options.visualElement.renderState.vars[h] = f : n[h] = f
            }
            this.options.layoutId && (n.pointerEvents = l === this ? he(a?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(n => n.currentAnimation?.stop()), this.root.nodes.forEach(ql), this.root.sharedNodes.clear()
        }
    }
}

function hh(t) {
    t.updateLayout()
}

function dh(t) {
    let e = t.resumeFrom?.snapshot || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        let {
            layoutBox: r,
            measuredBox: i
        } = t.layout, {
            animationType: o
        } = t.options, n = e.source !== t.layout.source;
        o === "size" ? lt(m => {
            let p = n ? e.measuredBox[m] : e.layoutBox[m],
                c = X(p);
            p.min = r[m].min, p.max = p.min + c
        }) : mu(o, e.layoutBox, r) && lt(m => {
            let p = n ? e.measuredBox[m] : e.layoutBox[m],
                c = X(r[m]);
            p.max = p.min + c, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[m].max = t.relativeTarget[m].min + c)
        });
        let a = ie();
        Ke(a, r, e.layoutBox);
        let s = ie();
        n ? Ke(s, t.applyTransform(i, !0), e.measuredBox) : Ke(s, r, e.layoutBox);
        let l = !au(a),
            u = !1;
        if (!t.resumeFrom) {
            let m = t.getClosestProjectingParent();
            if (m && !m.resumeFrom) {
                let {
                    snapshot: p,
                    layout: c
                } = m;
                if (p && c) {
                    let h = O();
                    Xe(h, e.layoutBox, p.layoutBox);
                    let g = O();
                    Xe(g, r, c.layoutBox), su(h, g) || (u = !0), m.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = h, t.relativeParent = m)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: r,
            snapshot: e,
            delta: s,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u
        })
    } else if (t.isLead()) {
        let {
            onExitComplete: r
        } = t.options;
        r && r()
    }
    t.options.transition = void 0
}

function fh(t) {
    gt.value && de.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function gh(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function vh(t) {
    t.clearSnapshot()
}

function ql(t) {
    t.clearMeasurements()
}

function Zl(t) {
    t.isLayoutDirty = !1
}

function yh(t) {
    let {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function Jl(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function xh(t) {
    t.resolveTargetDelta()
}

function wh(t) {
    t.calcProjection()
}

function Sh(t) {
    t.resetSkewAndRotation()
}

function bh(t) {
    t.removeLeadSnapshot()
}

function Ql(t, e, r) {
    t.translate = D(e.translate, 0, r), t.scale = D(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
}

function tu(t, e, r, i) {
    t.min = D(e.min, r.min, i), t.max = D(e.max, r.max, i)
}

function Th(t, e, r, i) {
    tu(t.x, e.x, r.x, i), tu(t.y, e.y, r.y, i)
}

function Ph(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}

function iu(t) {
    t.min = ru(t.min), t.max = ru(t.max)
}

function Mh(t) {
    iu(t.x), iu(t.y)
}

function mu(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !Dl(Xl(e), Xl(r), .2)
}

function Ch(t) {
    return t !== t.root && t.scroll?.wasRoot
}
var Qc, th, ou, eh, Fl, jl, ih, oh, ah, sh, uh, de, sa, ph, ch, Ah, eu, ru, Eh, _r, lo, Ze = d(() => {
    x();
    v();
    $n();
    Mr();
    v();
    so();
    Ur();
    x();
    v();
    Ri();
    ce();
    x();
    Ri();
    Lt();
    ce();
    v();
    Ue();
    ta();
    Vn();
    ia();
    ue();
    Qc = (t, e) => t.depth - e.depth, th = class {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(t) {
            sr(this.children, t), this.isDirty = !0
        }
        remove(t) {
            yt(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(Qc), this.isDirty = !1, this.children.forEach(t)
        }
    }, ou = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], eh = ou.length, Fl = t => typeof t == "string" ? parseFloat(t) : t, jl = t => typeof t == "number" || T.test(t);
    ih = nu(0, .5, Lo), oh = nu(.5, .95, I);
    ah = ["x", "scaleX", "originX"], sh = ["y", "scaleY", "originY"];
    uh = class {
        constructor() {
            this.members = []
        }
        add(t) {
            sr(this.members, t), t.scheduleRender()
        }
        remove(t) {
            if (yt(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                let e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(t) {
            let e = this.members.findIndex(i => t === i);
            if (e === 0) return !1;
            let r;
            for (let i = e; i >= 0; i--) {
                let o = this.members[i];
                if (o.isPresent !== !1) {
                    r = o;
                    break
                }
            }
            return r ? (this.promote(r), !0) : !1
        }
        promote(t, e) {
            let r = this.lead;
            if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                let {
                    crossfade: i
                } = t.options;
                i === !1 && r.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                let {
                    options: e,
                    resumingFrom: r
                } = t;
                e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
            })
        }
        scheduleRender() {
            this.members.forEach(t => {
                t.instance && t.scheduleRender(!1)
            })
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    };
    de = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0
    }, sa = ["", "X", "Y", "Z"], ph = 1e3, ch = 0;
    Ah = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    }, eu = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), ru = eu("applewebkit/") && !eu("chrome/") ? Math.round : I;
    Eh = uu({
        attachResizeListener: (t, e) => At(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }), _r = {
        current: void 0
    }, lo = uu({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!_r.current) {
                let t = new Eh({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), _r.current = t
            }
            return _r.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    })
});

function ua(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function pu(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function ma({
    point: t
}, e) {
    return {
        point: t,
        delta: pu(t, xu(e)),
        offset: pu(t, Vh(e)),
        velocity: Dh(e, .1)
    }
}

function Vh(t) {
    return t[0]
}

function xu(t) {
    return t[t.length - 1]
}

function Dh(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let r = t.length - 1,
        i = null,
        o = xu(t);
    for (; r >= 0 && (i = t[r], !(o.timestamp - i.timestamp > F(e)));) r--;
    if (!i) return {
        x: 0,
        y: 0
    };
    let n = Z(o.timestamp - i.timestamp);
    if (n === 0) return {
        x: 0,
        y: 0
    };
    let a = {
        x: (o.x - i.x) / n,
        y: (o.y - i.y) / n
    };
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}

function kh(t, {
    min: e,
    max: r
}, i) {
    return e !== void 0 && t < e ? t = i ? D(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? D(r, t, i.max) : Math.min(t, r)), t
}

function cu(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}

function Rh(t, {
    top: e,
    left: r,
    bottom: i,
    right: o
}) {
    return {
        x: cu(t.x, r, o),
        y: cu(t.y, e, i)
    }
}

function hu(t, e) {
    let r = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
        min: r,
        max: i
    }
}

function Lh(t, e) {
    return {
        x: hu(t.x, e.x),
        y: hu(t.y, e.y)
    }
}

function Oh(t, e) {
    let r = .5,
        i = X(t),
        o = X(e);
    return o > i ? r = ut(e.min, e.max - i, t.min) : i > o && (r = ut(t.min, t.max - o, e.min)), q(0, 1, r)
}

function Bh(t, e) {
    let r = {};
    return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r
}

function Ih(t = pa) {
    return t === !1 ? t = 0 : t === !0 && (t = pa), {
        x: du(t, "left", "right"),
        y: du(t, "top", "bottom")
    }
}

function du(t, e, r) {
    return {
        min: fu(t, e),
        max: fu(t, r)
    }
}

function fu(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}

function uo(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}

function Nh(t, e = 10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
}
var vu, yu, pa, Fh, jh, Uh, gu, _h, mo, po = d(() => {
    jt();
    v();
    x();
    v();
    Ei();
    ue();
    $e();
    qt();
    Mn();
    ce();
    Lt();
    ta();
    Ln();
    oo();
    An();
    x();
    v();
    $e();
    qt();
    no();
    x();
    v();
    ce();
    x();
    v();
    $e();
    jt();
    na();
    Ze();
    vu = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null, yu = class {
        constructor(t, e, {
            transformPagePoint: r,
            contextWindow: i = window,
            dragSnapToOrigin: o = !1,
            distanceThreshold: n = 3
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let p = ma(this.lastMoveEventInfo, this.history),
                        c = this.startEvent !== null,
                        h = ra(p.offset, {
                            x: 0,
                            y: 0
                        }) >= this.distanceThreshold;
                    if (!c && !h) return;
                    let {
                        point: g
                    } = p, {
                        timestamp: w
                    } = G;
                    this.history.push({
                        ...g,
                        timestamp: w
                    });
                    let {
                        onStart: y,
                        onMove: f
                    } = this.handlers;
                    c || (y && y(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), f && f(this.lastMoveEvent, p)
                }, this.handlePointerMove = (p, c) => {
                    this.lastMoveEvent = p, this.lastMoveEventInfo = ua(c, this.transformPagePoint), A.update(this.updatePoint, !0)
                }, this.handlePointerUp = (p, c) => {
                    this.end();
                    let {
                        onEnd: h,
                        onSessionEnd: g,
                        resumeAnimation: w
                    } = this.handlers;
                    if (this.dragSnapToOrigin && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let y = ma(p.type === "pointercancel" ? this.lastMoveEventInfo : ua(c, this.transformPagePoint), this.history);
                    this.startEvent && h && h(p, y), g && g(p, y)
                }, !xr(t)) return;
            this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = r, this.distanceThreshold = n, this.contextWindow = i || window;
            let a = It(t),
                s = ua(a, this.transformPagePoint),
                {
                    point: l
                } = s,
                {
                    timestamp: u
                } = G;
            this.history = [{
                ...l,
                timestamp: u
            }];
            let {
                onSessionStart: m
            } = e;
            m && m(t, ma(s, this.history)), this.removeListeners = xt(Ft(this.contextWindow, "pointermove", this.handlePointerMove), Ft(this.contextWindow, "pointerup", this.handlePointerUp), Ft(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), K(this.updatePoint)
        }
    };
    pa = .35;
    Fh = new WeakMap, jh = class {
        constructor(t) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = O(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
            snapToCursor: e = !1,
            distanceThreshold: r
        } = {}) {
            let {
                presenceContext: i
            } = this.visualElement;
            if (i && i.isPresent === !1) return;
            let o = m => {
                    let {
                        dragSnapToOrigin: p
                    } = this.getProps();
                    p ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(It(m).point)
                },
                n = (m, p) => {
                    let {
                        drag: c,
                        dragPropagation: h,
                        onDragStart: g
                    } = this.getProps();
                    if (c && !h && (this.openDragLock && this.openDragLock(), this.openDragLock = Ns(c), !this.openDragLock)) return;
                    this.latestPointerEvent = m, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), lt(y => {
                        let f = this.getAxisMotionValue(y).get() || 0;
                        if (mt.test(f)) {
                            let {
                                projection: S
                            } = this.visualElement;
                            if (S && S.layout) {
                                let P = S.layout.layoutBox[y];
                                P && (f = X(P) * (parseFloat(f) / 100))
                            }
                        }
                        this.originPoint[y] = f
                    }), g && A.postRender(() => g(m, p)), Tr(this.visualElement, "transform");
                    let {
                        animationState: w
                    } = this.visualElement;
                    w && w.setActive("whileDrag", !0)
                },
                a = (m, p) => {
                    this.latestPointerEvent = m, this.latestPanInfo = p;
                    let {
                        dragPropagation: c,
                        dragDirectionLock: h,
                        onDirectionLock: g,
                        onDrag: w
                    } = this.getProps();
                    if (!c && !this.openDragLock) return;
                    let {
                        offset: y
                    } = p;
                    if (h && this.currentDirection === null) {
                        this.currentDirection = Nh(y), this.currentDirection !== null && g && g(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", p.point, y), this.updateAxis("y", p.point, y), this.visualElement.render(), w && w(m, p)
                },
                s = (m, p) => {
                    this.latestPointerEvent = m, this.latestPanInfo = p, this.stop(m, p), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                l = () => lt(m => this.getAnimationState(m) === "paused" && this.getAxisMotionValue(m).animation?.play()),
                {
                    dragSnapToOrigin: u
                } = this.getProps();
            this.panSession = new yu(t, {
                onSessionStart: o,
                onStart: n,
                onMove: a,
                onSessionEnd: s,
                resumeAnimation: l
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: u,
                distanceThreshold: r,
                contextWindow: vu(this.visualElement)
            })
        }
        stop(t, e) {
            let r = t || this.latestPointerEvent,
                i = e || this.latestPanInfo,
                o = this.isDragging;
            if (this.cancel(), !o || !i || !r) return;
            let {
                velocity: n
            } = i;
            this.startAnimation(n);
            let {
                onDragEnd: a
            } = this.getProps();
            a && A.postRender(() => a(r, i))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: t,
                animationState: e
            } = this.visualElement;
            t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
            let {
                dragPropagation: r
            } = this.getProps();
            !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        updateAxis(t, e, r) {
            let {
                drag: i
            } = this.getProps();
            if (!r || !uo(t, i, this.currentDirection)) return;
            let o = this.getAxisMotionValue(t),
                n = this.originPoint[t] + r[t];
            this.constraints && this.constraints[t] && (n = kh(n, this.constraints[t], this.elastic[t])), o.set(n)
        }
        resolveConstraints() {
            let {
                dragConstraints: t,
                dragElastic: e
            } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
            t && Nt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Rh(r.layoutBox, t) : this.constraints = !1, this.elastic = Ih(e), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && lt(o => {
                this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Bh(r.layoutBox[o], this.constraints[o]))
            })
        }
        resolveRefConstraints() {
            let {
                dragConstraints: t,
                onMeasureDragConstraints: e
            } = this.getProps();
            if (!t || !Nt(t)) return !1;
            let r = t.current;
            B(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {
                projection: i
            } = this.visualElement;
            if (!i || !i.layout) return !1;
            let o = ml(r, i.root, this.visualElement.getTransformPagePoint()),
                n = Lh(i.layout.layoutBox, o);
            if (e) {
                let a = e(rl(n));
                this.hasMutatedConstraints = !!a, a && (n = Di(a))
            }
            return n
        }
        startAnimation(t) {
            let {
                drag: e,
                dragMomentum: r,
                dragElastic: i,
                dragTransition: o,
                dragSnapToOrigin: n,
                onDragTransitionEnd: a
            } = this.getProps(), s = this.constraints || {}, l = lt(u => {
                if (!uo(u, e, this.currentDirection)) return;
                let m = s && s[u] || {};
                n && (m = {
                    min: 0,
                    max: 0
                });
                let p = i ? 200 : 1e6,
                    c = i ? 40 : 1e7,
                    h = {
                        type: "inertia",
                        velocity: r ? t[u] : 0,
                        bounceStiffness: p,
                        bounceDamping: c,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...o,
                        ...m
                    };
                return this.startAxisValueAnimation(u, h)
            });
            return Promise.all(l).then(a)
        }
        startAxisValueAnimation(t, e) {
            let r = this.getAxisMotionValue(t);
            return Tr(this.visualElement, t), r.start(Le(t, r, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            lt(t => this.getAxisMotionValue(t).stop())
        }
        pauseAnimation() {
            lt(t => this.getAxisMotionValue(t).animation?.pause())
        }
        getAnimationState(t) {
            return this.getAxisMotionValue(t).animation?.state
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`,
                r = this.visualElement.getProps();
            return r[e] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
            lt(e => {
                let {
                    drag: r
                } = this.getProps();
                if (!uo(e, r, this.currentDirection)) return;
                let {
                    projection: i
                } = this.visualElement, o = this.getAxisMotionValue(e);
                if (i && i.layout) {
                    let {
                        min: n,
                        max: a
                    } = i.layout.layoutBox[e];
                    o.set(t[e] - D(n, a, .5))
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: t,
                dragConstraints: e
            } = this.getProps(), {
                projection: r
            } = this.visualElement;
            if (!Nt(e) || !r || !this.constraints) return;
            this.stopAnimation();
            let i = {
                x: 0,
                y: 0
            };
            lt(n => {
                let a = this.getAxisMotionValue(n);
                if (a && this.constraints !== !1) {
                    let s = a.get();
                    i[n] = Oh({
                        min: s,
                        max: s
                    }, this.constraints[n])
                }
            });
            let {
                transformTemplate: o
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), lt(n => {
                if (!uo(n, t, null)) return;
                let a = this.getAxisMotionValue(n),
                    {
                        min: s,
                        max: l
                    } = this.constraints[n];
                a.set(D(s, l, i[n]))
            })
        }
        addListeners() {
            if (!this.visualElement.current) return;
            Fh.set(this.visualElement, this);
            let t = this.visualElement.current,
                e = Ft(t, "pointerdown", s => {
                    let {
                        drag: l,
                        dragListener: u = !0
                    } = this.getProps();
                    l && u && this.start(s)
                }),
                r = () => {
                    let {
                        dragConstraints: s
                    } = this.getProps();
                    Nt(s) && s.current && (this.constraints = this.resolveRefConstraints())
                },
                {
                    projection: i
                } = this.visualElement,
                o = i.addEventListener("measure", r);
            i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), A.read(r);
            let n = At(window, "resize", () => this.scalePositionWithinConstraints()),
                a = i.addEventListener("didUpdate", ({
                    delta: s,
                    hasLayoutChanged: l
                }) => {
                    this.isDragging && l && (lt(u => {
                        let m = this.getAxisMotionValue(u);
                        m && (this.originPoint[u] += s[u].translate, m.set(m.get() + s[u].translate))
                    }), this.visualElement.render())
                });
            return () => {
                n(), e(), o(), a && a()
            }
        }
        getProps() {
            let t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: r = !1,
                    dragPropagation: i = !1,
                    dragConstraints: o = !1,
                    dragElastic: n = pa,
                    dragMomentum: a = !0
                } = t;
            return {
                ...t,
                drag: e,
                dragDirectionLock: r,
                dragPropagation: i,
                dragConstraints: o,
                dragElastic: n,
                dragMomentum: a
            }
        }
    };
    Uh = class extends ot {
        constructor(t) {
            super(t), this.removeGroupControls = I, this.removeListeners = I, this.controls = new jh(t)
        }
        mount() {
            let {
                dragControls: t
            } = this.node.getProps();
            t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || I
        }
        unmount() {
            this.removeGroupControls(), this.removeListeners()
        }
    }, gu = t => (e, r) => {
        t && A.postRender(() => t(e, r))
    }, _h = class extends ot {
        constructor() {
            super(...arguments), this.removePointerDownListener = I
        }
        onPointerDown(t) {
            this.session = new yu(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: vu(this.node)
            })
        }
        createPanHandlers() {
            let {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: r,
                onPanEnd: i
            } = this.node.getProps();
            return {
                onSessionStart: gu(t),
                onStart: gu(e),
                onMove: r,
                onEnd: (o, n) => {
                    delete this.session, i && A.postRender(() => i(o, n))
                }
            }
        }
        mount() {
            this.removePointerDownListener = Ft(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
            this.removePointerDownListener(), this.session && this.session.end()
        }
    }, mo = {
        pan: {
            Feature: _h
        },
        drag: {
            Feature: Uh,
            ProjectionNode: lo,
            MeasureLayout: ao
        }
    }
});

function wu(t, e, r) {
    let {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    let o = "onHover" + r,
        n = i[o];
    n && A.postRender(() => n(e, It(e)))
}

function Su(t, e, r) {
    let {
        props: i
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    let o = "onTap" + (r === "End" ? "" : r),
        n = i[o];
    n && A.postRender(() => n(e, It(e)))
}

function Kh({
    root: t,
    ...e
}) {
    let r = t || document;
    ca.has(r) || ca.set(r, {});
    let i = ca.get(r),
        o = JSON.stringify(e);
    return i[o] || (i[o] = new IntersectionObserver(zh, {
        root: t,
        ...e
    })), i[o]
}

function Xh(t, e, r) {
    let i = Kh(e);
    return ha.set(t, r), i.observe(t), () => {
        ha.delete(t), i.unobserve(t)
    }
}

function Zh({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return r => t[r] !== e[r]
}
var Wh, Gh, Hh, ha, ca, $h, zh, Yh, qh, co, ho = d(() => {
    x();
    qt();
    jt();
    v();
    ue();
    jt();
    x();
    qt();
    jt();
    jt();
    Wh = class extends ot {
        mount() {
            let {
                current: t
            } = this.node;
            t && (this.unmount = _s(t, (e, r) => (wu(this.node, r, "Start"), i => wu(this.node, i, "End"))))
        }
        unmount() {}
    }, Gh = class extends ot {
        constructor() {
            super(...arguments), this.isActive = !1
        }
        onFocus() {
            let t = !1;
            try {
                t = this.node.current.matches(":focus-visible")
            } catch {
                t = !0
            }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
            !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
            this.unmount = xt(At(this.node.current, "focus", () => this.onFocus()), At(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    };
    Hh = class extends ot {
        mount() {
            let {
                current: t
            } = this.node;
            t && (this.unmount = Gs(t, (e, r) => (Su(this.node, r, "Start"), (i, {
                success: o
            }) => Su(this.node, i, o ? "End" : "Cancel")), {
                useGlobalTarget: this.node.props.globalTapTarget
            }))
        }
        unmount() {}
    }, ha = new WeakMap, ca = new WeakMap, $h = t => {
        let e = ha.get(t.target);
        e && e(t)
    }, zh = t => {
        t.forEach($h)
    };
    Yh = {
        some: 0,
        all: 1
    }, qh = class extends ot {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            this.unmount();
            let {
                viewport: t = {}
            } = this.node.getProps(), {
                root: e,
                margin: r,
                amount: i = "some",
                once: o
            } = t, n = {
                root: e ? e.current : void 0,
                rootMargin: r,
                threshold: typeof i == "number" ? i : Yh[i]
            }, a = s => {
                let {
                    isIntersecting: l
                } = s;
                if (this.isInView === l || (this.isInView = l, o && !l && this.hasEnteredView)) return;
                l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
                let {
                    onViewportEnter: u,
                    onViewportLeave: m
                } = this.node.getProps(), p = l ? u : m;
                p && p(s)
            };
            return Xh(this.node.current, n, a)
        }
        mount() {
            this.startObserver()
        }
        update() {
            if (typeof IntersectionObserver > "u") return;
            let {
                props: t,
                prevProps: e
            } = this.node;
            ["amount", "margin", "root"].some(Zh(t, e)) && this.startObserver()
        }
        unmount() {}
    };
    co = {
        inView: {
            Feature: qh
        },
        tap: {
            Feature: Hh
        },
        focus: {
            Feature: Gh
        },
        hover: {
            Feature: Wh
        }
    }
});
var fo, go = d(() => {
    Ze();
    na();
    fo = {
        layout: {
            ProjectionNode: lo,
            MeasureLayout: ao
        }
    }
});

function da(t) {
    for (let e in t) Rt[e] = {
        ...Rt[e],
        ...t[e]
    }
}
var vo = d(() => {
    Li()
});
var Je, yo = d(() => {
    Je = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    })
});

function fa(t) {
    var e = Object.create(null);
    return function(r) {
        return e[r] === void 0 && (e[r] = t(r)), e[r]
    }
}
var ga = d(() => {});
var va = d(() => {
    ga();
    ga()
});
var Jh, bu, ya = d(() => {
    va();
    Jh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bu = fa(function(t) {
        return Jh.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91
    })
});
var xa = {};
La(xa, {
    default: () => bu
});
var Tu = d(() => {
    va();
    ya();
    ya()
});

function Qe(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Qh.has(t)
}
var Qh, xo = d(() => {
    Qh = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"])
});

function Au(t) {
    typeof t == "function" && (Pu = e => e.startsWith("on") ? !Qe(e) : t(e))
}

function wa(t, e, r) {
    let i = {};
    for (let o in t) o === "values" && typeof t.values == "object" || (Pu(o) || r === !0 && Qe(o) || !e && !Qe(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
    return i
}
var tr, td, Pu, Wr = d(() => {
    Tu();
    xo();
    tr = t => {
        let e = i => typeof i.default < "u" ? i.default : i,
            r = i => Object.assign({
                __esModule: !0
            }, i);
        switch (t) {
            case "@emotion/is-prop-valid":
                return r(xa);
            default:
                return console.error('module "' + t + '" not found'), null
        }
    }, td = (t => typeof tr < "u" ? tr : typeof Proxy < "u" ? new Proxy(t, {
        get: (e, r) => (typeof tr < "u" ? tr : e)[r]
    }) : t)(function(t) {
        if (typeof tr < "u") return tr.apply(this, arguments);
        throw Error('Dynamic require of "' + t + '" is not supported')
    }), Pu = t => !Qe(t);
    try {
        Au(td("@emotion/is-prop-valid").default)
    } catch {}
});

function er(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(ed.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
var ed, wo = d(() => {
    ed = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"]
});

function rd({
    scrapeMotionValuesFromProps: t,
    createRenderState: e
}, r, i, o) {
    return {
        latestValues: id(r, i, o, t),
        renderState: e()
    }
}

function id(t, e, r, i) {
    let o = {},
        n = i(t, {});
    for (let c in n) o[c] = he(n[c]);
    let {
        initial: a,
        animate: s
    } = t, l = ne(t), u = Fi(t);
    e && u && !l && t.inherit !== !1 && (a === void 0 && (a = e.initial), s === void 0 && (s = e.animate));
    let m = r ? r.initial === !1 : !1;
    m = m || a === !1;
    let p = m ? s : a;
    if (p && typeof p != "boolean" && !Kt(p)) {
        let c = Array.isArray(p) ? p : [p];
        for (let h = 0; h < c.length; h++) {
            let g = De(t, c[h]);
            if (g) {
                let {
                    transitionEnd: w,
                    transition: y,
                    ...f
                } = g;
                for (let S in f) {
                    let P = f[S];
                    if (Array.isArray(P)) {
                        let E = m ? P.length - 1 : 0;
                        P = P[E]
                    }
                    P !== null && (o[S] = P)
                }
                for (let S in w) o[S] = w[S]
            }
        }
    }
    return o
}
var fe, rr = d(() => {
    "use client";
    b();
    Dr();
    Yt();
    Xt();
    ji();
    Ai();
    Q();
    Ur();
    fe = t => (e, r) => {
        let i = L(Pt),
            o = L(Bt),
            n = () => rd(t, e, i, o);
        return r ? n() : W(n)
    }
});
var So, Gr = d(() => {
    So = Symbol.for("motionComponentSymbol")
});
var Mt, Ut = d(() => {
    "use client";
    b();
    Be();
    Mt = oe ? Yn : j
});

function od(t, e) {
    if (ne(t)) {
        let {
            initial: r,
            animate: i
        } = t;
        return {
            initial: r === !1 || Ot(r) ? r : void 0,
            animate: Ot(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function nd(t) {
    let {
        initial: e,
        animate: r
    } = od(t, L(Pt));
    return ct(() => ({
        initial: e,
        animate: r
    }), [Mu(e), Mu(r)])
}

function Mu(t) {
    return Array.isArray(t) ? t.join(" ") : t
}

function Cu(t, e, r) {
    for (let i in e) !k(e[i]) && !Gi(i, r) && (t[i] = e[i])
}

function ad({
    transformTemplate: t
}, e) {
    return ct(() => {
        let r = Je();
        return Ne(r, e, t), Object.assign({}, r.vars, r.style)
    }, [e])
}

function sd(t, e) {
    let r = t.style || {},
        i = {};
    return Cu(i, r, t), Object.assign(i, ad(t, e)), i
}

function ld(t, e) {
    let r = {},
        i = sd(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r
}

function ud(t, e, r, i) {
    let o = ct(() => {
        let n = Eu();
        return zi(n, e, Ki(i), t.transformTemplate, t.style), {
            ...n.attrs,
            style: {
                ...n.style
            }
        }
    }, [e]);
    if (t.style) {
        let n = {};
        Cu(n, t.style, t), o.style = {
            ...n,
            ...o.style
        }
    }
    return o
}

function md(t, e, r, {
    latestValues: i
}, o, n = !1) {
    let a = (er(t) ? ud : ld)(e, i, o, t),
        s = wa(e, typeof t == "string", n),
        l = t !== Qi ? {
            ...s,
            ...a,
            ref: r
        } : {},
        {
            children: u
        } = e,
        m = ct(() => k(u) ? u.get() : u, [u]);
    return wl(t, {
        ...l,
        children: m
    })
}

function hd(t, e, r) {
    return Tt(i => {
        i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), r && (typeof r == "function" ? r(i) : Nt(r) && (r.current = i))
    }, [e])
}

function dd(t, e, r, i, o) {
    let {
        visualElement: n
    } = L(Pt), a = L(Ir), s = L(Bt), l = L(ht).reducedMotion, u = _(null);
    i = i || a.renderer, !u.current && i && (u.current = i(t, {
        visualState: e,
        parent: n,
        props: r,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    let m = u.current,
        p = L(jr);
    m && !m.projection && o && (m.type === "html" || m.type === "svg") && fd(u.current, r, o, p);
    let c = _(!1);
    Ge(() => {
        m && c.current && m.update(r, s)
    });
    let h = r[Pr],
        g = _(!!h && !window.MotionHandoffIsComplete?.(h) && window.MotionHasOptimisedAnimation?.(h));
    return Mt(() => {
        m && (c.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), g.current && m.animationState && m.animationState.animateChanges())
    }), j(() => {
        m && (!g.current && m.animationState && m.animationState.animateChanges(), g.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(h)
        }), g.current = !1), m.enteringChildren = void 0)
    }), m
}

function fd(t, e, r, i) {
    let {
        layoutId: o,
        layout: n,
        drag: a,
        dragConstraints: s,
        layoutScroll: l,
        layoutRoot: u,
        layoutCrossfade: m
    } = e;
    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : Vu(t.parent)), t.projection.setOptions({
        layoutId: o,
        layout: n,
        alwaysMeasureLayout: !!a || s && Nt(s),
        visualElement: t,
        animationType: typeof n == "string" ? n : "both",
        initialPromotionConfig: i,
        crossfade: m,
        layoutScroll: l,
        layoutRoot: u
    })
}

function Vu(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : Vu(t.parent)
}

function bo(t, {
    forwardMotionProps: e = !1
} = {}, r, i) {
    r && da(r);
    let o = er(t) ? cd : pd;

    function n(s, l) {
        let u, m = {
                ...L(ht),
                ...s,
                layoutId: gd(s)
            },
            {
                isStatic: p
            } = m,
            c = nd(s),
            h = o(s, p);
        if (!p && oe) {
            vd(m, r);
            let g = yd(m);
            u = g.MeasureLayout, c.visualElement = dd(t, h, m, i, g.ProjectionNode)
        }
        return Rl(Pt.Provider, {
            value: c,
            children: [u && c.visualElement ? H(u, {
                visualElement: c.visualElement,
                ...m
            }) : null, md(t, s, hd(h, c.visualElement, l), h, p, e)]
        })
    }
    n.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    let a = We(n);
    return a[So] = t, a
}

function gd({
    layoutId: t
}) {
    let e = L(se).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function vd(t, e) {
    let r = L(Ir).strict
}

function yd(t) {
    let {
        drag: e,
        layout: r
    } = Rt;
    if (!e && !r) return {};
    let i = {
        ...e,
        ...r
    };
    return {
        MeasureLayout: e?.isEnabled(t) || r?.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
var Eu, pd, cd, Sa = d(() => {
    "use client";
    st();
    v();
    b();
    le();
    Fr();
    vt();
    Yt();
    b();
    Yt();
    ji();
    kr();
    x();
    b();
    x();
    b();
    Nn();
    _i();
    yo();
    b();
    _n();
    yo();
    Wn();
    Wr();
    wo();
    wo();
    rr();
    yo();
    Hi();
    rr();
    Gn();
    Be();
    Li();
    vo();
    Gr();
    b();
    oo();
    b();
    Re();
    Fr();
    vt();
    Yt();
    Xt();
    Nr();
    oo();
    Ut();
    Eu = () => ({
        ...Je(),
        attrs: {}
    });
    pd = fe({
        scrapeMotionValuesFromProps: _e,
        createRenderState: Je
    }), cd = fe({
        scrapeMotionValuesFromProps: Xi,
        createRenderState: Eu
    })
});
var ba = d(() => {});
var Du, Ta = d(() => {
    ze();
    po();
    ho();
    go();
    Du = {
        ...pe,
        ...co,
        ...mo,
        ...fo
    }
});
var ir, Hr = d(() => {
    b();
    Un();
    Hn();
    wo();
    ir = (t, e) => er(t) ? new Yi(e) : new $i(e, {
        allowProjection: t !== Qi
    })
});

function Ru(t, e, r, i) {
    let o = r[e],
        {
            length: n,
            position: a
        } = Sd[e],
        s = o.current,
        l = r.time;
    o.current = t[`scroll${a}`], o.scrollLength = t[`scroll${n}`] - t[`client${n}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = ut(0, o.scrollLength, o.current);
    let u = i - l;
    o.velocity = u > xd ? 0 : ye(o.current - s, u)
}

function bd(t, e, r) {
    Ru(t, "x", e, r), Ru(t, "y", e, r), e.time = r
}

function Td(t, e) {
    let r = {
            x: 0,
            y: 0
        },
        i = t;
    for (; i && i !== e;)
        if (yr(i)) r.x += i.offsetLeft, r.y += i.offsetTop, i = i.offsetParent;
        else if (i.tagName === "svg") {
        let o = i.getBoundingClientRect();
        i = i.parentElement;
        let n = i.getBoundingClientRect();
        r.x += o.left - n.left, r.y += o.top - n.top
    } else if (i instanceof SVGGraphicsElement) {
        let {
            x: o,
            y: n
        } = i.getBBox();
        r.x += o, r.y += n;
        let a = null,
            s = i.parentNode;
        for (; !a;) s.tagName === "svg" && (a = s), s = i.parentNode;
        i = a
    } else break;
    return r
}

function Lu(t, e, r = 0) {
    let i = 0;
    if (t in Aa && (t = Aa[t]), typeof t == "string") {
        let o = parseFloat(t);
        t.endsWith("px") ? i = o : t.endsWith("%") ? t = o / 100 : t.endsWith("vw") ? i = o / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = o / 100 * document.documentElement.clientHeight : t = o
    }
    return typeof t == "number" && (i = e * t), r + i
}

function Ad(t, e, r, i) {
    let o = Array.isArray(t) ? t : Pd,
        n = 0,
        a = 0;
    return typeof t == "number" ? o = [t, t] : typeof t == "string" && (t = t.trim(), t.includes(" ") ? o = t.split(" ") : o = [t, Aa[t] ? t : "0"]), n = Lu(o[0], r, i), a = Lu(o[1], e), n - a
}

function Ed(t) {
    return "getBBox" in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}

function Vd(t, e, r) {
    let {
        offset: i = Md.All
    } = r, {
        target: o = t,
        axis: n = "y"
    } = r, a = n === "y" ? "height" : "width", s = o !== t ? Td(o, t) : Cd, l = o === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : Ed(o), u = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[n].offset.length = 0;
    let m = !e[n].interpolate,
        p = i.length;
    for (let c = 0; c < p; c++) {
        let h = Ad(i[c], u[a], l[a], s[n]);
        !m && h !== e[n].interpolatorOffsets[c] && (m = !0), e[n].offset[c] = h
    }
    m && (e[n].interpolate = fi(e[n].offset, gr(i), {
        clamp: !1
    }), e[n].interpolatorOffsets = [...e[n].offset]), e[n].progress = q(0, 1, e[n].interpolate(e[n].current))
}

function Dd(t, e = t, r) {
    if (r.x.targetOffset = 0, r.y.targetOffset = 0, e !== t) {
        let i = e;
        for (; i && i !== t;) r.x.targetOffset += i.offsetLeft, r.y.targetOffset += i.offsetTop, i = i.offsetParent
    }
    r.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, r.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, r.x.containerLength = t.clientWidth, r.y.containerLength = t.clientHeight
}

function kd(t, e, r, i = {}) {
    return {
        measure: o => {
            Dd(t, i.target, r), bd(t, r, o), (i.offset || i.target) && Vd(t, r, i)
        },
        notify: () => e(r)
    }
}

function zr(t, {
    container: e = document.scrollingElement,
    ...r
} = {}) {
    if (!e) return I;
    let i = Pa.get(e);
    i || (i = new Set, Pa.set(e, i));
    let o = wd(),
        n = kd(e, t, o, r);
    if (i.add(n), !$r.has(e)) {
        let s = () => {
                for (let p of i) p.measure(G.timestamp);
                A.preUpdate(l)
            },
            l = () => {
                for (let p of i) p.notify()
            },
            u = () => A.read(s);
        $r.set(e, u);
        let m = Bu(e);
        window.addEventListener("resize", u, {
            passive: !0
        }), e !== document.documentElement && Ou.set(e, $s(e, u)), m.addEventListener("scroll", u, {
            passive: !0
        }), u()
    }
    let a = $r.get(e);
    return A.read(a, !1, !0), () => {
        K(a);
        let s = Pa.get(e);
        if (!s || (s.delete(n), s.size)) return;
        let l = $r.get(e);
        $r.delete(e), l && (Bu(e).removeEventListener("scroll", l), Ou.get(e)?.(), window.removeEventListener("resize", l))
    }
}
var xd, ku, wd, Sd, Aa, Pd, Md, Cd, $r, Ou, Pa, Bu, Kr = d(() => {
    x();
    v();
    v();
    v();
    x();
    v();
    x();
    xd = 50, ku = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }), wd = () => ({
        time: 0,
        x: ku(),
        y: ku()
    }), Sd = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };
    Aa = {
        start: 0,
        center: .5,
        end: 1
    };
    Pd = [0, 0];
    Md = {
        Enter: [
            [0, 1],
            [1, 1]
        ],
        Exit: [
            [0, 0],
            [1, 0]
        ],
        Any: [
            [1, 0],
            [0, 1]
        ],
        All: [
            [0, 0],
            [1, 1]
        ]
    }, Cd = {
        x: 0,
        y: 0
    };
    $r = new WeakMap, Ou = new WeakMap, Pa = new WeakMap, Bu = t => t === document.scrollingElement ? window : t
});

function Rd(t) {
    let e = {
            value: 0
        },
        r = zr(i => {
            e.value = i[t.axis].progress * 100
        }, t);
    return {
        currentTime: e,
        cancel: r
    }
}

function Fu({
    source: t,
    container: e,
    ...r
}) {
    let {
        axis: i
    } = r;
    t && (e = t);
    let o = Iu.get(e) ?? new Map;
    Iu.set(e, o);
    let n = r.target ?? "self",
        a = o.get(n) ?? {},
        s = i + (r.offset ?? []).join(",");
    return a[s] || (a[s] = !r.target && hn() ? new ScrollTimeline({
        source: e,
        axis: i
    }) : Rd({
        container: e,
        ...r
    })), a[s]
}

function Ld(t, e) {
    let r = Fu(e);
    return t.attachTimeline({
        timeline: e.target ? void 0 : r,
        observe: i => (i.pause(), bi(o => {
            i.time = i.iterationDuration * o
        }, r))
    })
}

function Od(t) {
    return t.length === 2
}

function Bd(t, e) {
    return Od(t) ? zr(r => {
        t(r[e.axis].progress, r)
    }, e) : bi(t, Fu(e))
}

function Ma(t, {
    axis: e = "y",
    container: r = document.scrollingElement,
    ...i
} = {}) {
    if (!r) return I;
    let o = {
        axis: e,
        container: r,
        ...i
    };
    return typeof t == "function" ? Bd(t, o) : Ld(t, o)
}
var Iu, To = d(() => {
    v();
    x();
    x();
    Kr();
    x();
    Kr();
    Iu = new Map
});

function Ca(t, e, {
    root: r,
    margin: i,
    amount: o = "some"
} = {}) {
    let n = Vt(t),
        a = new WeakMap,
        s = u => {
            u.forEach(m => {
                let p = a.get(m.target);
                if (m.isIntersecting !== !!p)
                    if (m.isIntersecting) {
                        let c = e(m.target, m);
                        typeof c == "function" ? a.set(m.target, c) : l.unobserve(m.target)
                    } else typeof p == "function" && (p(m), a.delete(m.target))
            })
        },
        l = new IntersectionObserver(s, {
            root: r,
            rootMargin: i,
            threshold: typeof o == "number" ? o : Id[o]
        });
    return n.forEach(u => l.observe(u)), () => l.disconnect()
}
var Id, Po = d(() => {
    x();
    Id = {
        some: 0,
        all: 1
    }
});

function _u(t, e) {
    if (typeof Proxy > "u") return bo;
    let r = new Map,
        i = (n, a) => bo(n, a, t, e),
        o = (n, a) => i(n, a);
    return new Proxy(o, {
        get: (n, a) => a === "create" ? i : (r.has(a) || r.set(a, bo(a, void 0, t, e)), r.get(a))
    })
}

function Wu(t, e, r) {
    Ge(() => t.on(e, r), [t, e, r])
}

function Gu({
    container: t,
    target: e,
    ...r
} = {}) {
    let i = W(Ud),
        o = _(null),
        n = _(!1),
        a = Tt(() => (o.current = Ma((s, {
            x: l,
            y: u
        }) => {
            i.scrollX.set(l.current), i.scrollXProgress.set(l.progress), i.scrollY.set(u.current), i.scrollYProgress.set(u.progress)
        }, {
            ...r,
            container: t?.current || void 0,
            target: e?.current || void 0
        }), () => {
            o.current?.()
        }), [t, e, JSON.stringify(r.offset)]);
    return Mt(() => {
        if (n.current = !1, Ao(t) || Ao(e)) {
            n.current = !0;
            return
        } else return a()
    }, [a]), j(() => {
        if (n.current) return B(!Ao(t), "Container ref is defined but not hydrated", "use-scroll-ref"), B(!Ao(e), "Target ref is defined but not hydrated", "use-scroll-ref"), a()
    }, [a]), i
}

function Yr(t) {
    let e = W(() => J(t)),
        {
            isStatic: r
        } = L(ht);
    if (r) {
        let [, i] = pt(t);
        j(() => e.on("change", i), [])
    }
    return e
}

function Hu(t, e) {
    let r = Yr(e()),
        i = () => r.set(e());
    return i(), Mt(() => {
        let o = () => A.preRender(i, !1, !0),
            n = t.map(a => a.on("change", o));
        return () => {
            n.forEach(a => a()), K(i)
        }
    }), r
}

function _d(t) {
    Te.current = [], t();
    let e = Hu(Te.current, t);
    return Te.current = void 0, e
}

function Wd(t, e, r, i) {
    if (typeof t == "function") return _d(t);
    let o = typeof e == "function" ? e : zs(e, r, i);
    return Array.isArray(t) ? ju(t, o) : ju([t], ([n]) => o(n))
}

function ju(t, e) {
    let r = W(() => []);
    return Hu(t, () => {
        r.length = 0;
        let i = t.length;
        for (let o = 0; o < i; o++) r[o] = t[o].get();
        return e(r)
    })
}

function $u(t, {
    root: e,
    margin: r,
    amount: i,
    once: o = !1,
    initial: n = !1
} = {}) {
    let [a, s] = pt(n);
    return j(() => {
        if (!t.current || o && a) return;
        let l = () => (s(!0), o ? void 0 : () => s(!1)),
            u = {
                root: e && e.current || void 0,
                margin: r,
                amount: i
            };
        return Ca(t.current, l, u)
    }, [e, t, r, o, i]), a
}

function Hd(t, e, r, i) {
    if (!i) return t;
    let o = t.findIndex(m => m.value === e);
    if (o === -1) return t;
    let n = i > 0 ? 1 : -1,
        a = t[o + n];
    if (!a) return t;
    let s = t[o],
        l = a.layout,
        u = D(l.min, l.max, .5);
    return n === 1 && s.layout.max + r > u || n === -1 && s.layout.min + r < u ? ja(t, o, o + n) : t
}

function $d({
    children: t,
    as: e = "ul",
    axis: r = "y",
    onReorder: i,
    values: o,
    ...n
}, a) {
    let s = W(() => Xr[e]),
        l = [],
        u = _(!1);
    B(!!o, "Reorder.Group must be provided a values prop", "reorder-values");
    let m = {
        axis: r,
        registerItem: (p, c) => {
            let h = l.findIndex(g => p === g.value);
            h !== -1 ? l[h].layout = c[r] : l.push({
                value: p,
                layout: c[r]
            }), l.sort(Xd)
        },
        updateOrder: (p, c, h) => {
            if (u.current) return;
            let g = Hd(l, p, c, h);
            l !== g && (u.current = !0, i(g.map(Kd).filter(w => o.indexOf(w) !== -1)))
        }
    };
    return j(() => {
        u.current = !1
    }), H(s, {
        ...n,
        ref: a,
        ignoreStrict: !0,
        children: H(zu.Provider, {
            value: m,
            children: t
        })
    })
}

function Kd(t) {
    return t.value
}

function Xd(t, e) {
    return t.layout.min - e.layout.min
}

function Uu(t, e = 0) {
    return k(t) ? t : Yr(e)
}

function Yd({
    children: t,
    style: e = {},
    value: r,
    as: i = "li",
    onDrag: o,
    layout: n = !0,
    ...a
}, s) {
    let l = W(() => Xr[i]),
        u = L(zu),
        m = {
            x: Uu(e.x),
            y: Uu(e.y)
        },
        p = Wd([m.x, m.y], ([w, y]) => w || y ? 1 : "unset");
    B(!!u, "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
    let {
        axis: c,
        registerItem: h,
        updateOrder: g
    } = u;
    return H(l, {
        drag: c,
        ...a,
        dragSnapToOrigin: !0,
        style: {
            ...e,
            x: m.x,
            y: m.y,
            zIndex: p
        },
        layout: n,
        onDrag: (w, y) => {
            let {
                velocity: f
            } = y;
            f[c] && g(r, m[c].get(), f[c]), o && o(w, y)
        },
        onLayoutMeasure: w => h(r, w),
        ref: s,
        ignoreStrict: !0,
        children: t
    })
}
var Fd, jd, n1, b1, Xr, Nd, U1, G1, Ud, Ao, Nu, TA, Gd, zu, zd, qd, Ku = d(() => {
    st();
    b();
    le();
    Q();
    Ut();
    st();
    b();
    b();
    Xt();
    Q();
    st();
    x();
    b();
    b();
    vt();
    b();
    Br();
    b();
    st();
    b();
    le();
    b();
    x();
    b();
    b();
    Ut();
    ba();
    st();
    b();
    Fr();
    vo();
    st();
    b();
    vt();
    Wr();
    Q();
    v();
    Sa();
    Hr();
    Ta();
    $e();
    qt();
    ze();
    rr();
    ce();
    Lt();
    Wr();
    Be();
    Ut();
    Lr();
    ze();
    ho();
    Hr();
    po();
    go();
    ze();
    Hr();
    b();
    v();
    x();
    v();
    b();
    To();
    Q();
    Ut();
    v();
    x();
    x();
    Ut();
    x();
    b();
    vt();
    Q();
    x();
    b();
    vt();
    x();
    Q();
    x();
    x();
    b();
    vt();
    x();
    Q();
    x();
    Ur();
    v();
    b();
    Oi();
    Vr();
    b();
    vt();
    v();
    v();
    v();
    Mi();
    He();
    Q();
    Lr();
    Zi();
    qn();
    Q();
    Ut();
    He();
    Br();
    b();
    Xt();
    b();
    ue();
    Q();
    Gr();
    Gr();
    xo();
    Ue();
    Ze();
    b();
    Ze();
    Ui();
    Ve();
    je();
    v();
    b();
    b();
    Po();
    x();
    v();
    b();
    b();
    Re();
    x();
    v();
    Re();
    Mr();
    x();
    le();
    vt();
    Yt();
    Xt();
    Nr();
    b();
    rr();
    Lt();
    je();
    Q();
    He();
    st();
    v();
    b();
    Q();
    v();
    b();
    Yt();
    so();
    st();
    v();
    b();
    b();
    Q();
    x();
    v();
    st();
    x();
    v();
    b();
    Q();
    Zi();
    Ji();
    To();
    Kr();
    Po();
    no();
    x();
    Fd = Object.defineProperty, jd = (t, e) => {
        for (var r in e) Fd(t, r, {
            get: e[r],
            enumerable: !0
        })
    }, n1 = it(null);
    b1 = _u(), Xr = _u(Du, ir), Nd = {
        renderer: ir,
        ...pe,
        ...co
    }, U1 = {
        ...Nd,
        ...mo,
        ...fo
    }, G1 = {
        renderer: ir,
        ...pe
    };
    Ud = () => ({
        scrollX: J(0),
        scrollY: J(0),
        scrollXProgress: J(0),
        scrollYProgress: J(0)
    }), Ao = t => t ? !t.current : !1;
    Nu = () => ({}), TA = fe({
        scrapeMotionValuesFromProps: Nu,
        createRenderState: Nu
    }), Gd = {};
    jd(Gd, {
        Group: () => zd,
        Item: () => qd
    });
    zu = it(null);
    zd = We($d);
    qd = We(Yd)
});
var Ea = d(() => {
    Zi();
    Ji();
    qn();
    He();
    Re();
    Mr();
    Br();
    le();
    Fr();
    vt();
    Yt();
    Xt();
    Nr();
    ue();
    $e();
    qt();
    ze();
    po();
    ho();
    go();
    vo();
    Sa();
    Gr();
    rr();
    xo();
    ce();
    Lt();
    Ze();
    ba();
    Ue();
    je();
    Ta();
    Hr();
    To();
    Kr();
    Wr();
    Po();
    Ui();
    Ve();
    Mi();
    so();
    no();
    Be();
    Oi();
    Vr();
    Q();
    Ut();
    Lr();
    Ur();
    x();
    v();
    st();
    b();
    Ku()
});
var Xu = d(() => {
    Ea()
});
var Yu = d(() => {
    Ea();
    Xu()
});
var qu = {};
La(qu, {
    default: () => Mo
});

function Jd(t, e = !1, r = !1) {
    let i = Yr(0),
        {
            shouldReduceMotion: o
        } = Qr();
    return j(() => {
        if (r || o) return;
        let n = e ? -1 : 1,
            s = i.get() + 360 * n,
            l = Kn(i, s, {
                duration: t / 1e3,
                ease: "linear",
                repeat: 1 / 0
            });
        return () => {
            l.stop()
        }
    }, [r, e, i, o, t]), i
}

function Qd({
    children: t,
    speed: e,
    reverse: r = !1,
    trigger: i
}) {
    let o = _(null),
        [n, a] = pt(i !== "view"),
        s = $u(o),
        l = Jd(e, r, n || !s),
        {
            shouldReduceMotion: u
        } = Qr();

    function m() {
        switch (i) {
            case "click":
                return {
                    className: u ? void 0 : "cursor-pointer", onClick: () => {
                        a(p => !p)
                    }
                };
            case "hover":
                return {
                    onPointerEnter: () => {
                        a(!1)
                    }, onPointerLeave: () => {
                        a(!0)
                    }
                };
            default:
                return {}
        }
    }
    return j(() => {
        a(i !== "view")
    }, [i]), H(Xr.div, {
        ...m(),
        ref: o,
        style: {
            rotate: l
        },
        children: t
    })
}

function tf({
    children: t,
    speed: e,
    reverse: r = !1
}) {
    let i = _(null),
        o = Yr(0),
        {
            scrollYProgress: n
        } = Gu({
            target: i,
            offset: ["start end", "end start"]
        }),
        {
            shouldReduceMotion: a
        } = Qr();
    return Wu(n, "change", s => {
        if (a) return;
        let l = Zd / e,
            u = r ? -1 : 1;
        o.set(l * (360 * u) * s)
    }), H(Xr.div, {
        ref: i,
        style: {
            rotate: o
        },
        children: t
    })
}

function Mo({
    children: t,
    direction: e,
    speed: r,
    trigger: i
}) {
    let n = {
        children: t,
        reverse: e === "counterclockwise",
        speed: r
    };
    switch (i) {
        case "scroll":
            return H(tf, {
                ...n
            });
        default:
            return H(Qd, {
                ...n,
                trigger: i
            })
    }
}
var Zd, Zu = d(() => {
    Ia();
    Yu();
    b();
    st();
    Zd = 6e3;
    Oa(Mo, {
        trigger: {
            type: "string",
            defaultValue: "view",
            label: "sites.code_behaviors.spin.trigger",
            control: "select",
            options: [{
                label: "sites.code_behaviors.spin.trigger.on_view",
                value: "view"
            }, {
                label: "sites.code_behaviors.spin.trigger.on_click",
                value: "click"
            }, {
                label: "sites.code_behaviors.spin.trigger.while_hovering",
                value: "hover"
            }, {
                label: "sites.code_behaviors.spin.trigger.while_scrolling",
                value: "scroll"
            }]
        },
        direction: {
            type: "string",
            defaultValue: "clockwise",
            label: "sites.code_behaviors.spin.direction",
            control: "select",
            options: [{
                label: "sites.code_behaviors.spin.direction.clockwise",
                value: "clockwise"
            }, {
                label: "sites.code_behaviors.spin.direction.counterclockwise",
                value: "counterclockwise"
            }]
        },
        speed: {
            type: "number",
            defaultValue: 6e3,
            label: "sites.code_behaviors.spin.speed",
            control: "select",
            options: [{
                label: "sites.code_behaviors.spin.speed.very_quick",
                value: 1e3
            }, {
                label: "sites.code_behaviors.spin.speed.quick",
                value: 3e3
            }, {
                label: "sites.code_behaviors.spin.speed.moderate",
                value: 6e3
            }, {
                label: "sites.code_behaviors.spin.speed.slow",
                value: 9e3
            }, {
                label: "sites.code_behaviors.spin.speed.very_slow",
                value: 12e3
            }]
        }
    });
    Ba(Mo, {
        name: "sites.code_behaviors.spin.name",
        icon: "spin",
        category: "motion"
    })
});
var uC = () => Promise.resolve().then(() => (Zu(), qu));
export {
    uC as Code0
};