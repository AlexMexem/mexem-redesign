(() => {
  var lk = Object.defineProperty,
    dk = Object.defineProperties;
  var fk = Object.getOwnPropertyDescriptors;
  var Mg = Object.getOwnPropertySymbols;
  var ck = Object.prototype.hasOwnProperty,
    hk = Object.prototype.propertyIsEnumerable;
  var Uf = (r, e, t) =>
      e in r
        ? lk(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    In = (r, e) => {
      for (var t in e || (e = {})) ck.call(e, t) && Uf(r, t, e[t]);
      if (Mg) for (var t of Mg(e)) hk.call(e, t) && Uf(r, t, e[t]);
      return r;
    },
    jn = (r, e) => dk(r, fk(e));
  var g = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
  var A = (r, e, t) => (Uf(r, typeof e != "symbol" ? e + "" : e, t), t);
  var Ke = (r, e, t) =>
    new Promise((i, n) => {
      var a = (o) => {
          try {
            u(t.next(o));
          } catch (l) {
            n(l);
          }
        },
        s = (o) => {
          try {
            u(t.throw(o));
          } catch (l) {
            n(l);
          }
        },
        u = (o) => (o.done ? i(o.value) : Promise.resolve(o.value).then(a, s));
      u((t = t.apply(r, e)).next());
    });
  var _ = g((pie, ii) => {
    function vk(r) {
      return r && r.__esModule ? r : { default: r };
    }
    (ii.exports = vk),
      (ii.exports.__esModule = !0),
      (ii.exports.default = ii.exports);
  });
  var De = g((_ie, Ge) => {
    function Vf(r) {
      return (
        (Ge.exports = Vf =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        (Ge.exports.__esModule = !0),
        (Ge.exports.default = Ge.exports),
        Vf(r)
      );
    }
    (Ge.exports = Vf),
      (Ge.exports.__esModule = !0),
      (Ge.exports.default = Ge.exports);
  });
  var F = g((An, Dg) => {
    "use strict";
    Object.defineProperty(An, "__esModule", { value: !0 });
    An.default = gk;
    function gk(r) {
      if (r === null || r === !0 || r === !1) return NaN;
      var e = Number(r);
      return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
    }
    Dg.exports = An.default;
  });
  var x = g((En, wg) => {
    "use strict";
    Object.defineProperty(En, "__esModule", { value: !0 });
    En.default = pk;
    function pk(r, e) {
      if (e.length < r)
        throw new TypeError(
          r +
            " argument" +
            (r > 1 ? "s" : "") +
            " required, but only " +
            e.length +
            " present"
        );
    }
    wg.exports = En.default;
  });
  var T = g((Nn, kg) => {
    "use strict";
    var Tg = _().default;
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.default = bk;
    var _k = Tg(De()),
      mk = Tg(x());
    function bk(r) {
      (0, mk.default)(1, arguments);
      var e = Object.prototype.toString.call(r);
      return r instanceof Date ||
        ((0, _k.default)(r) === "object" && e === "[object Date]")
        ? new Date(r.getTime())
        : typeof r == "number" || e === "[object Number]"
        ? new Date(r)
        : ((typeof r == "string" || e === "[object String]") &&
            typeof console != "undefined" &&
            (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
            ),
            console.warn(new Error().stack)),
          new Date(NaN));
    }
    kg.exports = Nn.default;
  });
  var Fe = g((Ln, Sg) => {
    "use strict";
    var $f = _().default;
    Object.defineProperty(Ln, "__esModule", { value: !0 });
    Ln.default = Ok;
    var xk = $f(F()),
      yk = $f(T()),
      qk = $f(x());
    function Ok(r, e) {
      (0, qk.default)(2, arguments);
      var t = (0, yk.default)(r),
        i = (0, xk.default)(e);
      return isNaN(i) ? new Date(NaN) : (i && t.setDate(t.getDate() + i), t);
    }
    Sg.exports = Ln.default;
  });
  var ur = g((Fn, Cg) => {
    "use strict";
    var Qf = _().default;
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.default = wk;
    var Pk = Qf(F()),
      Mk = Qf(T()),
      Dk = Qf(x());
    function wk(r, e) {
      (0, Dk.default)(2, arguments);
      var t = (0, Mk.default)(r),
        i = (0, Pk.default)(e);
      if (isNaN(i)) return new Date(NaN);
      if (!i) return t;
      var n = t.getDate(),
        a = new Date(t.getTime());
      a.setMonth(t.getMonth() + i + 1, 0);
      var s = a.getDate();
      return n >= s ? a : (t.setFullYear(a.getFullYear(), a.getMonth(), n), t);
    }
    Cg.exports = Fn.default;
  });
  var Xf = g((Wn, Rg) => {
    "use strict";
    var or = _().default;
    Object.defineProperty(Wn, "__esModule", { value: !0 });
    Wn.default = Ik;
    var Tk = or(De()),
      kk = or(Fe()),
      Sk = or(ur()),
      Ck = or(T()),
      Rk = or(x()),
      jt = or(F());
    function Ik(r, e) {
      if (
        ((0, Rk.default)(2, arguments), !e || (0, Tk.default)(e) !== "object")
      )
        return new Date(NaN);
      var t = e.years ? (0, jt.default)(e.years) : 0,
        i = e.months ? (0, jt.default)(e.months) : 0,
        n = e.weeks ? (0, jt.default)(e.weeks) : 0,
        a = e.days ? (0, jt.default)(e.days) : 0,
        s = e.hours ? (0, jt.default)(e.hours) : 0,
        u = e.minutes ? (0, jt.default)(e.minutes) : 0,
        o = e.seconds ? (0, jt.default)(e.seconds) : 0,
        l = (0, Ck.default)(r),
        d = i || t ? (0, Sk.default)(l, i + t * 12) : l,
        c = a || n ? (0, kk.default)(d, a + n * 7) : d,
        h = u + s * 60,
        v = o + h * 60,
        p = v * 1e3,
        m = new Date(c.getTime() + p);
      return m;
    }
    Rg.exports = Wn.default;
  });
  var ni = g((Yn, jg) => {
    "use strict";
    var Ig = _().default;
    Object.defineProperty(Yn, "__esModule", { value: !0 });
    Yn.default = Ek;
    var jk = Ig(T()),
      Ak = Ig(x());
    function Ek(r) {
      (0, Ak.default)(1, arguments);
      var e = (0, jk.default)(r),
        t = e.getDay();
      return t === 0 || t === 6;
    }
    jg.exports = Yn.default;
  });
  var zn = g((Hn, Eg) => {
    "use strict";
    var Ag = _().default;
    Object.defineProperty(Hn, "__esModule", { value: !0 });
    Hn.default = Fk;
    var Nk = Ag(T()),
      Lk = Ag(x());
    function Fk(r) {
      return (0, Lk.default)(1, arguments), (0, Nk.default)(r).getDay() === 0;
    }
    Eg.exports = Hn.default;
  });
  var Kf = g((Bn, Lg) => {
    "use strict";
    var Ng = _().default;
    Object.defineProperty(Bn, "__esModule", { value: !0 });
    Bn.default = Hk;
    var Wk = Ng(T()),
      Yk = Ng(x());
    function Hk(r) {
      return (0, Yk.default)(1, arguments), (0, Wk.default)(r).getDay() === 6;
    }
    Lg.exports = Bn.default;
  });
  var Zf = g((Un, Wg) => {
    "use strict";
    var lr = _().default;
    Object.defineProperty(Un, "__esModule", { value: !0 });
    Un.default = $k;
    var Gf = lr(ni()),
      zk = lr(T()),
      Fg = lr(F()),
      Bk = lr(x()),
      Uk = lr(zn()),
      Vk = lr(Kf());
    function $k(r, e) {
      (0, Bk.default)(2, arguments);
      var t = (0, zk.default)(r),
        i = (0, Gf.default)(t),
        n = (0, Fg.default)(e);
      if (isNaN(n)) return new Date(NaN);
      var a = t.getHours(),
        s = n < 0 ? -1 : 1,
        u = (0, Fg.default)(n / 5);
      t.setDate(t.getDate() + u * 7);
      for (var o = Math.abs(n % 5); o > 0; )
        t.setDate(t.getDate() + s), (0, Gf.default)(t) || (o -= 1);
      return (
        i &&
          (0, Gf.default)(t) &&
          n !== 0 &&
          ((0, Vk.default)(t) && t.setDate(t.getDate() + (s < 0 ? 2 : -1)),
          (0, Uk.default)(t) && t.setDate(t.getDate() + (s < 0 ? 1 : -2))),
        t.setHours(a),
        t
      );
    }
    Wg.exports = Un.default;
  });
  var dr = g((Vn, Yg) => {
    "use strict";
    var Jf = _().default;
    Object.defineProperty(Vn, "__esModule", { value: !0 });
    Vn.default = Gk;
    var Qk = Jf(F()),
      Xk = Jf(T()),
      Kk = Jf(x());
    function Gk(r, e) {
      (0, Kk.default)(2, arguments);
      var t = (0, Xk.default)(r).getTime(),
        i = (0, Qk.default)(e);
      return new Date(t + i);
    }
    Yg.exports = Vn.default;
  });
  var Qn = g(($n, Hg) => {
    "use strict";
    var ec = _().default;
    Object.defineProperty($n, "__esModule", { value: !0 });
    $n.default = rS;
    var Zk = ec(F()),
      Jk = ec(dr()),
      eS = ec(x()),
      tS = 36e5;
    function rS(r, e) {
      (0, eS.default)(2, arguments);
      var t = (0, Zk.default)(e);
      return (0, Jk.default)(r, t * tS);
    }
    Hg.exports = $n.default;
  });
  var le = g((Xn) => {
    "use strict";
    Object.defineProperty(Xn, "__esModule", { value: !0 });
    Xn.getDefaultOptions = iS;
    Xn.setDefaultOptions = nS;
    var zg = {};
    function iS() {
      return zg;
    }
    function nS(r) {
      zg = r;
    }
  });
  var Ze = g((Kn, Bg) => {
    "use strict";
    var tc = _().default;
    Object.defineProperty(Kn, "__esModule", { value: !0 });
    Kn.default = lS;
    var aS = tc(T()),
      sS = tc(F()),
      uS = tc(x()),
      oS = le();
    function lS(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, uS.default)(1, arguments);
      var d = (0, oS.getDefaultOptions)(),
        c = (0, sS.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.weekStartsOn) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.weekStartsOn) !== null && n !== void 0
                ? n
                : d.weekStartsOn) !== null && i !== void 0
              ? i
              : (o = d.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && t !== void 0
            ? t
            : 0
        );
      if (!(c >= 0 && c <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var h = (0, aS.default)(r),
        v = h.getDay(),
        p = (v < c ? 7 : 0) + v - c;
      return h.setDate(h.getDate() - p), h.setHours(0, 0, 0, 0), h;
    }
    Bg.exports = Kn.default;
  });
  var ct = g((Gn, Vg) => {
    "use strict";
    var Ug = _().default;
    Object.defineProperty(Gn, "__esModule", { value: !0 });
    Gn.default = cS;
    var dS = Ug(Ze()),
      fS = Ug(x());
    function cS(r) {
      return (
        (0, fS.default)(1, arguments), (0, dS.default)(r, { weekStartsOn: 1 })
      );
    }
    Vg.exports = Gn.default;
  });
  var At = g((Zn, Qg) => {
    "use strict";
    var rc = _().default;
    Object.defineProperty(Zn, "__esModule", { value: !0 });
    Zn.default = gS;
    var hS = rc(T()),
      $g = rc(ct()),
      vS = rc(x());
    function gS(r) {
      (0, vS.default)(1, arguments);
      var e = (0, hS.default)(r),
        t = e.getFullYear(),
        i = new Date(0);
      i.setFullYear(t + 1, 0, 4), i.setHours(0, 0, 0, 0);
      var n = (0, $g.default)(i),
        a = new Date(0);
      a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0);
      var s = (0, $g.default)(a);
      return e.getTime() >= n.getTime()
        ? t + 1
        : e.getTime() >= s.getTime()
        ? t
        : t - 1;
    }
    Qg.exports = Zn.default;
  });
  var fr = g((Jn, Xg) => {
    "use strict";
    var ic = _().default;
    Object.defineProperty(Jn, "__esModule", { value: !0 });
    Jn.default = bS;
    var pS = ic(At()),
      _S = ic(ct()),
      mS = ic(x());
    function bS(r) {
      (0, mS.default)(1, arguments);
      var e = (0, pS.default)(r),
        t = new Date(0);
      t.setFullYear(e, 0, 4), t.setHours(0, 0, 0, 0);
      var i = (0, _S.default)(t);
      return i;
    }
    Xg.exports = Jn.default;
  });
  var We = g((ea, Kg) => {
    "use strict";
    Object.defineProperty(ea, "__esModule", { value: !0 });
    ea.default = xS;
    function xS(r) {
      var e = new Date(
        Date.UTC(
          r.getFullYear(),
          r.getMonth(),
          r.getDate(),
          r.getHours(),
          r.getMinutes(),
          r.getSeconds(),
          r.getMilliseconds()
        )
      );
      return e.setUTCFullYear(r.getFullYear()), r.getTime() - e.getTime();
    }
    Kg.exports = ea.default;
  });
  var ai = g((ta, Zg) => {
    "use strict";
    var Gg = _().default;
    Object.defineProperty(ta, "__esModule", { value: !0 });
    ta.default = OS;
    var yS = Gg(T()),
      qS = Gg(x());
    function OS(r) {
      (0, qS.default)(1, arguments);
      var e = (0, yS.default)(r);
      return e.setHours(0, 0, 0, 0), e;
    }
    Zg.exports = ta.default;
  });
  var Je = g((ra, tp) => {
    "use strict";
    var nc = _().default;
    Object.defineProperty(ra, "__esModule", { value: !0 });
    ra.default = DS;
    var Jg = nc(We()),
      ep = nc(ai()),
      PS = nc(x()),
      MS = 864e5;
    function DS(r, e) {
      (0, PS.default)(2, arguments);
      var t = (0, ep.default)(r),
        i = (0, ep.default)(e),
        n = t.getTime() - (0, Jg.default)(t),
        a = i.getTime() - (0, Jg.default)(i);
      return Math.round((n - a) / MS);
    }
    tp.exports = ra.default;
  });
  var ac = g((ia, ip) => {
    "use strict";
    var si = _().default;
    Object.defineProperty(ia, "__esModule", { value: !0 });
    ia.default = CS;
    var wS = si(F()),
      TS = si(T()),
      rp = si(fr()),
      kS = si(Je()),
      SS = si(x());
    function CS(r, e) {
      (0, SS.default)(2, arguments);
      var t = (0, TS.default)(r),
        i = (0, wS.default)(e),
        n = (0, kS.default)(t, (0, rp.default)(t)),
        a = new Date(0);
      return (
        a.setFullYear(i, 0, 4),
        a.setHours(0, 0, 0, 0),
        (t = (0, rp.default)(a)),
        t.setDate(t.getDate() + n),
        t
      );
    }
    ip.exports = ia.default;
  });
  var sc = g((aa, np) => {
    "use strict";
    var na = _().default;
    Object.defineProperty(aa, "__esModule", { value: !0 });
    aa.default = ES;
    var RS = na(F()),
      IS = na(At()),
      jS = na(ac()),
      AS = na(x());
    function ES(r, e) {
      (0, AS.default)(2, arguments);
      var t = (0, RS.default)(e);
      return (0, jS.default)(r, (0, IS.default)(r) + t);
    }
    np.exports = aa.default;
  });
  var ua = g((sa, ap) => {
    "use strict";
    var uc = _().default;
    Object.defineProperty(sa, "__esModule", { value: !0 });
    sa.default = YS;
    var NS = uc(F()),
      LS = uc(dr()),
      FS = uc(x()),
      WS = 6e4;
    function YS(r, e) {
      (0, FS.default)(2, arguments);
      var t = (0, NS.default)(e);
      return (0, LS.default)(r, t * WS);
    }
    ap.exports = sa.default;
  });
  var la = g((oa, sp) => {
    "use strict";
    var oc = _().default;
    Object.defineProperty(oa, "__esModule", { value: !0 });
    oa.default = US;
    var HS = oc(F()),
      zS = oc(ur()),
      BS = oc(x());
    function US(r, e) {
      (0, BS.default)(2, arguments);
      var t = (0, HS.default)(e),
        i = t * 3;
      return (0, zS.default)(r, i);
    }
    sp.exports = oa.default;
  });
  var dc = g((da, up) => {
    "use strict";
    var lc = _().default;
    Object.defineProperty(da, "__esModule", { value: !0 });
    da.default = XS;
    var VS = lc(F()),
      $S = lc(dr()),
      QS = lc(x());
    function XS(r, e) {
      (0, QS.default)(2, arguments);
      var t = (0, VS.default)(e);
      return (0, $S.default)(r, t * 1e3);
    }
    up.exports = da.default;
  });
  var ui = g((fa, op) => {
    "use strict";
    var fc = _().default;
    Object.defineProperty(fa, "__esModule", { value: !0 });
    fa.default = JS;
    var KS = fc(F()),
      GS = fc(Fe()),
      ZS = fc(x());
    function JS(r, e) {
      (0, ZS.default)(2, arguments);
      var t = (0, KS.default)(e),
        i = t * 7;
      return (0, GS.default)(r, i);
    }
    op.exports = fa.default;
  });
  var hc = g((ca, lp) => {
    "use strict";
    var cc = _().default;
    Object.defineProperty(ca, "__esModule", { value: !0 });
    ca.default = iC;
    var eC = cc(F()),
      tC = cc(ur()),
      rC = cc(x());
    function iC(r, e) {
      (0, rC.default)(2, arguments);
      var t = (0, eC.default)(e);
      return (0, tC.default)(r, t * 12);
    }
    lp.exports = ca.default;
  });
  var cp = g((va, fp) => {
    "use strict";
    var dp = _().default;
    Object.defineProperty(va, "__esModule", { value: !0 });
    va.default = aC;
    var ha = dp(T()),
      nC = dp(x());
    function aC(r, e, t) {
      (0, nC.default)(2, arguments);
      var i = (0, ha.default)(r == null ? void 0 : r.start).getTime(),
        n = (0, ha.default)(r == null ? void 0 : r.end).getTime(),
        a = (0, ha.default)(e == null ? void 0 : e.start).getTime(),
        s = (0, ha.default)(e == null ? void 0 : e.end).getTime();
      if (!(i <= n && a <= s)) throw new RangeError("Invalid interval");
      return t != null && t.inclusive ? i <= s && a <= n : i < s && a < n;
    }
    fp.exports = va.default;
  });
  var gc = g((ga, hp) => {
    "use strict";
    var vc = _().default;
    Object.defineProperty(ga, "__esModule", { value: !0 });
    ga.default = lC;
    var sC = vc(De()),
      uC = vc(T()),
      oC = vc(x());
    function lC(r) {
      (0, oC.default)(1, arguments);
      var e;
      if (r && typeof r.forEach == "function") e = r;
      else if ((0, sC.default)(r) === "object" && r !== null)
        e = Array.prototype.slice.call(r);
      else return new Date(NaN);
      var t;
      return (
        e.forEach(function (i) {
          var n = (0, uC.default)(i);
          (t === void 0 || t < n || isNaN(Number(n))) && (t = n);
        }),
        t || new Date(NaN)
      );
    }
    hp.exports = ga.default;
  });
  var _c = g((pa, vp) => {
    "use strict";
    var pc = _().default;
    Object.defineProperty(pa, "__esModule", { value: !0 });
    pa.default = hC;
    var dC = pc(De()),
      fC = pc(T()),
      cC = pc(x());
    function hC(r) {
      (0, cC.default)(1, arguments);
      var e;
      if (r && typeof r.forEach == "function") e = r;
      else if ((0, dC.default)(r) === "object" && r !== null)
        e = Array.prototype.slice.call(r);
      else return new Date(NaN);
      var t;
      return (
        e.forEach(function (i) {
          var n = (0, fC.default)(i);
          (t === void 0 || t > n || isNaN(n.getDate())) && (t = n);
        }),
        t || new Date(NaN)
      );
    }
    vp.exports = pa.default;
  });
  var pp = g((_a, gp) => {
    "use strict";
    var mc = _().default;
    Object.defineProperty(_a, "__esModule", { value: !0 });
    _a.default = _C;
    var vC = mc(gc()),
      gC = mc(_c()),
      pC = mc(x());
    function _C(r, e) {
      var t = e.start,
        i = e.end;
      return (
        (0, pC.default)(2, arguments),
        (0, gC.default)([(0, vC.default)([r, t]), i])
      );
    }
    gp.exports = _a.default;
  });
  var xp = g((ma, bp) => {
    "use strict";
    var mp = _().default;
    Object.defineProperty(ma, "__esModule", { value: !0 });
    ma.default = bC;
    var _p = mp(T()),
      mC = mp(x());
    function bC(r, e) {
      (0, mC.default)(2, arguments);
      var t = (0, _p.default)(r);
      if (isNaN(Number(t))) return NaN;
      var i = t.getTime(),
        n;
      e == null
        ? (n = [])
        : typeof e.forEach == "function"
        ? (n = e)
        : (n = Array.prototype.slice.call(e));
      var a, s;
      return (
        n.forEach(function (u, o) {
          var l = (0, _p.default)(u);
          if (isNaN(Number(l))) {
            (a = NaN), (s = NaN);
            return;
          }
          var d = Math.abs(i - l.getTime());
          (a == null || d < Number(s)) && ((a = o), (s = d));
        }),
        a
      );
    }
    bp.exports = ma.default;
  });
  var Pp = g((ba, Op) => {
    "use strict";
    var qp = _().default;
    Object.defineProperty(ba, "__esModule", { value: !0 });
    ba.default = yC;
    var yp = qp(T()),
      xC = qp(x());
    function yC(r, e) {
      (0, xC.default)(2, arguments);
      var t = (0, yp.default)(r);
      if (isNaN(Number(t))) return new Date(NaN);
      var i = t.getTime(),
        n;
      e == null
        ? (n = [])
        : typeof e.forEach == "function"
        ? (n = e)
        : (n = Array.prototype.slice.call(e));
      var a, s;
      return (
        n.forEach(function (u) {
          var o = (0, yp.default)(u);
          if (isNaN(Number(o))) {
            (a = new Date(NaN)), (s = NaN);
            return;
          }
          var l = Math.abs(i - o.getTime());
          (a == null || l < Number(s)) && ((a = o), (s = l));
        }),
        a
      );
    }
    Op.exports = ba.default;
  });
  var ht = g((xa, wp) => {
    "use strict";
    var Dp = _().default;
    Object.defineProperty(xa, "__esModule", { value: !0 });
    xa.default = OC;
    var Mp = Dp(T()),
      qC = Dp(x());
    function OC(r, e) {
      (0, qC.default)(2, arguments);
      var t = (0, Mp.default)(r),
        i = (0, Mp.default)(e),
        n = t.getTime() - i.getTime();
      return n < 0 ? -1 : n > 0 ? 1 : n;
    }
    wp.exports = xa.default;
  });
  var Cp = g((ya, Sp) => {
    "use strict";
    var kp = _().default;
    Object.defineProperty(ya, "__esModule", { value: !0 });
    ya.default = MC;
    var Tp = kp(T()),
      PC = kp(x());
    function MC(r, e) {
      (0, PC.default)(2, arguments);
      var t = (0, Tp.default)(r),
        i = (0, Tp.default)(e),
        n = t.getTime() - i.getTime();
      return n > 0 ? -1 : n < 0 ? 1 : n;
    }
    Sp.exports = ya.default;
  });
  var ae = g((Q) => {
    "use strict";
    Object.defineProperty(Q, "__esModule", { value: !0 });
    Q.secondsInYear =
      Q.secondsInWeek =
      Q.secondsInQuarter =
      Q.secondsInMonth =
      Q.secondsInMinute =
      Q.secondsInHour =
      Q.secondsInDay =
      Q.quartersInYear =
      Q.monthsInYear =
      Q.monthsInQuarter =
      Q.minutesInHour =
      Q.minTime =
      Q.millisecondsInSecond =
      Q.millisecondsInMinute =
      Q.millisecondsInHour =
      Q.maxTime =
      Q.daysInYear =
      Q.daysInWeek =
        void 0;
    var DC = 7;
    Q.daysInWeek = DC;
    var Rp = 365.2425;
    Q.daysInYear = Rp;
    var Ip = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
    Q.maxTime = Ip;
    var wC = 6e4;
    Q.millisecondsInMinute = wC;
    var TC = 36e5;
    Q.millisecondsInHour = TC;
    var kC = 1e3;
    Q.millisecondsInSecond = kC;
    var SC = -Ip;
    Q.minTime = SC;
    var CC = 60;
    Q.minutesInHour = CC;
    var RC = 3;
    Q.monthsInQuarter = RC;
    var IC = 12;
    Q.monthsInYear = IC;
    var jC = 4;
    Q.quartersInYear = jC;
    var jp = 3600;
    Q.secondsInHour = jp;
    var AC = 60;
    Q.secondsInMinute = AC;
    var bc = jp * 24;
    Q.secondsInDay = bc;
    var EC = bc * 7;
    Q.secondsInWeek = EC;
    var Ap = bc * Rp;
    Q.secondsInYear = Ap;
    var Ep = Ap / 12;
    Q.secondsInMonth = Ep;
    var NC = Ep * 3;
    Q.secondsInQuarter = NC;
  });
  var Lp = g((qa, Np) => {
    "use strict";
    var LC = _().default;
    Object.defineProperty(qa, "__esModule", { value: !0 });
    qa.default = YC;
    var FC = LC(x()),
      WC = ae();
    function YC(r) {
      (0, FC.default)(1, arguments);
      var e = r / WC.daysInWeek;
      return Math.floor(e);
    }
    Np.exports = qa.default;
  });
  var cr = g((Oa, Yp) => {
    "use strict";
    var Wp = _().default;
    Object.defineProperty(Oa, "__esModule", { value: !0 });
    Oa.default = zC;
    var Fp = Wp(ai()),
      HC = Wp(x());
    function zC(r, e) {
      (0, HC.default)(2, arguments);
      var t = (0, Fp.default)(r),
        i = (0, Fp.default)(e);
      return t.getTime() === i.getTime();
    }
    Yp.exports = Oa.default;
  });
  var xc = g((Pa, zp) => {
    "use strict";
    var Hp = _().default;
    Object.defineProperty(Pa, "__esModule", { value: !0 });
    Pa.default = VC;
    var BC = Hp(De()),
      UC = Hp(x());
    function VC(r) {
      return (
        (0, UC.default)(1, arguments),
        r instanceof Date ||
          ((0, BC.default)(r) === "object" &&
            Object.prototype.toString.call(r) === "[object Date]")
      );
    }
    zp.exports = Pa.default;
  });
  var et = g((Ma, Bp) => {
    "use strict";
    var yc = _().default;
    Object.defineProperty(Ma, "__esModule", { value: !0 });
    Ma.default = KC;
    var $C = yc(xc()),
      QC = yc(T()),
      XC = yc(x());
    function KC(r) {
      if (
        ((0, XC.default)(1, arguments),
        !(0, $C.default)(r) && typeof r != "number")
      )
        return !1;
      var e = (0, QC.default)(r);
      return !isNaN(Number(e));
    }
    Bp.exports = Ma.default;
  });
  var Xp = g((Da, Qp) => {
    "use strict";
    var vt = _().default;
    Object.defineProperty(Da, "__esModule", { value: !0 });
    Da.default = rR;
    var Up = vt(Fe()),
      GC = vt(Je()),
      ZC = vt(cr()),
      Vp = vt(et()),
      JC = vt(ni()),
      $p = vt(T()),
      eR = vt(x()),
      tR = vt(F());
    function rR(r, e) {
      (0, eR.default)(2, arguments);
      var t = (0, $p.default)(r),
        i = (0, $p.default)(e);
      if (!(0, Vp.default)(t) || !(0, Vp.default)(i)) return NaN;
      var n = (0, GC.default)(t, i),
        a = n < 0 ? -1 : 1,
        s = (0, tR.default)(n / 7),
        u = s * 5;
      for (i = (0, Up.default)(i, s * 7); !(0, ZC.default)(t, i); )
        (u += (0, JC.default)(i) ? 0 : a), (i = (0, Up.default)(i, a));
      return u === 0 ? 0 : u;
    }
    Qp.exports = Da.default;
  });
  var qc = g((wa, Zp) => {
    "use strict";
    var Gp = _().default;
    Object.defineProperty(wa, "__esModule", { value: !0 });
    wa.default = nR;
    var Kp = Gp(At()),
      iR = Gp(x());
    function nR(r, e) {
      return (
        (0, iR.default)(2, arguments), (0, Kp.default)(r) - (0, Kp.default)(e)
      );
    }
    Zp.exports = wa.default;
  });
  var r_ = g((Ta, t_) => {
    "use strict";
    var Oc = _().default;
    Object.defineProperty(Ta, "__esModule", { value: !0 });
    Ta.default = uR;
    var Jp = Oc(We()),
      e_ = Oc(ct()),
      aR = Oc(x()),
      sR = 6048e5;
    function uR(r, e) {
      (0, aR.default)(2, arguments);
      var t = (0, e_.default)(r),
        i = (0, e_.default)(e),
        n = t.getTime() - (0, Jp.default)(t),
        a = i.getTime() - (0, Jp.default)(i);
      return Math.round((n - a) / sR);
    }
    t_.exports = Ta.default;
  });
  var Sa = g((ka, a_) => {
    "use strict";
    var n_ = _().default;
    Object.defineProperty(ka, "__esModule", { value: !0 });
    ka.default = lR;
    var i_ = n_(T()),
      oR = n_(x());
    function lR(r, e) {
      (0, oR.default)(2, arguments);
      var t = (0, i_.default)(r),
        i = (0, i_.default)(e),
        n = t.getFullYear() - i.getFullYear(),
        a = t.getMonth() - i.getMonth();
      return n * 12 + a;
    }
    a_.exports = ka.default;
  });
  var Pc = g((Ca, u_) => {
    "use strict";
    var s_ = _().default;
    Object.defineProperty(Ca, "__esModule", { value: !0 });
    Ca.default = cR;
    var dR = s_(T()),
      fR = s_(x());
    function cR(r) {
      (0, fR.default)(1, arguments);
      var e = (0, dR.default)(r),
        t = Math.floor(e.getMonth() / 3) + 1;
      return t;
    }
    u_.exports = Ca.default;
  });
  var Dc = g((Ra, d_) => {
    "use strict";
    var Mc = _().default;
    Object.defineProperty(Ra, "__esModule", { value: !0 });
    Ra.default = vR;
    var o_ = Mc(Pc()),
      l_ = Mc(T()),
      hR = Mc(x());
    function vR(r, e) {
      (0, hR.default)(2, arguments);
      var t = (0, l_.default)(r),
        i = (0, l_.default)(e),
        n = t.getFullYear() - i.getFullYear(),
        a = (0, o_.default)(t) - (0, o_.default)(i);
      return n * 4 + a;
    }
    d_.exports = Ra.default;
  });
  var ja = g((Ia, h_) => {
    "use strict";
    var wc = _().default;
    Object.defineProperty(Ia, "__esModule", { value: !0 });
    Ia.default = _R;
    var f_ = wc(Ze()),
      c_ = wc(We()),
      gR = wc(x()),
      pR = 6048e5;
    function _R(r, e, t) {
      (0, gR.default)(2, arguments);
      var i = (0, f_.default)(r, t),
        n = (0, f_.default)(e, t),
        a = i.getTime() - (0, c_.default)(i),
        s = n.getTime() - (0, c_.default)(n);
      return Math.round((a - s) / pR);
    }
    h_.exports = Ia.default;
  });
  var Ea = g((Aa, p_) => {
    "use strict";
    var g_ = _().default;
    Object.defineProperty(Aa, "__esModule", { value: !0 });
    Aa.default = bR;
    var v_ = g_(T()),
      mR = g_(x());
    function bR(r, e) {
      (0, mR.default)(2, arguments);
      var t = (0, v_.default)(r),
        i = (0, v_.default)(e);
      return t.getFullYear() - i.getFullYear();
    }
    p_.exports = Aa.default;
  });
  var La = g((Na, b_) => {
    "use strict";
    var Tc = _().default;
    Object.defineProperty(Na, "__esModule", { value: !0 });
    Na.default = qR;
    var __ = Tc(T()),
      xR = Tc(Je()),
      yR = Tc(x());
    function m_(r, e) {
      var t =
        r.getFullYear() - e.getFullYear() ||
        r.getMonth() - e.getMonth() ||
        r.getDate() - e.getDate() ||
        r.getHours() - e.getHours() ||
        r.getMinutes() - e.getMinutes() ||
        r.getSeconds() - e.getSeconds() ||
        r.getMilliseconds() - e.getMilliseconds();
      return t < 0 ? -1 : t > 0 ? 1 : t;
    }
    function qR(r, e) {
      (0, yR.default)(2, arguments);
      var t = (0, __.default)(r),
        i = (0, __.default)(e),
        n = m_(t, i),
        a = Math.abs((0, xR.default)(t, i));
      t.setDate(t.getDate() - n * a);
      var s = Number(m_(t, i) === -n),
        u = n * (a - s);
      return u === 0 ? 0 : u;
    }
    b_.exports = Na.default;
  });
  var oi = g((Fa, q_) => {
    "use strict";
    var y_ = _().default;
    Object.defineProperty(Fa, "__esModule", { value: !0 });
    Fa.default = PR;
    var x_ = y_(T()),
      OR = y_(x());
    function PR(r, e) {
      return (
        (0, OR.default)(2, arguments),
        (0, x_.default)(r).getTime() - (0, x_.default)(e).getTime()
      );
    }
    q_.exports = Fa.default;
  });
  var Et = g((kc) => {
    "use strict";
    Object.defineProperty(kc, "__esModule", { value: !0 });
    kc.getRoundingMethod = DR;
    var O_ = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
          return e < 0 ? Math.ceil(e) : Math.floor(e);
        },
      },
      MR = "trunc";
    function DR(r) {
      return r ? O_[r] : O_[MR];
    }
  });
  var Ya = g((Wa, M_) => {
    "use strict";
    var P_ = _().default;
    Object.defineProperty(Wa, "__esModule", { value: !0 });
    Wa.default = CR;
    var wR = ae(),
      TR = P_(oi()),
      kR = P_(x()),
      SR = Et();
    function CR(r, e, t) {
      (0, kR.default)(2, arguments);
      var i = (0, TR.default)(r, e) / wR.millisecondsInHour;
      return (0, SR.getRoundingMethod)(t == null ? void 0 : t.roundingMethod)(
        i
      );
    }
    M_.exports = Wa.default;
  });
  var Cc = g((Ha, D_) => {
    "use strict";
    var Sc = _().default;
    Object.defineProperty(Ha, "__esModule", { value: !0 });
    Ha.default = AR;
    var RR = Sc(sc()),
      IR = Sc(x()),
      jR = Sc(F());
    function AR(r, e) {
      (0, IR.default)(2, arguments);
      var t = (0, jR.default)(e);
      return (0, RR.default)(r, -t);
    }
    D_.exports = Ha.default;
  });
  var S_ = g((za, k_) => {
    "use strict";
    var li = _().default;
    Object.defineProperty(za, "__esModule", { value: !0 });
    za.default = FR;
    var w_ = li(T()),
      ER = li(qc()),
      T_ = li(ht()),
      NR = li(Cc()),
      LR = li(x());
    function FR(r, e) {
      (0, LR.default)(2, arguments);
      var t = (0, w_.default)(r),
        i = (0, w_.default)(e),
        n = (0, T_.default)(t, i),
        a = Math.abs((0, ER.default)(t, i));
      t = (0, NR.default)(t, n * a);
      var s = Number((0, T_.default)(t, i) === -n),
        u = n * (a - s);
      return u === 0 ? 0 : u;
    }
    k_.exports = za.default;
  });
  var Ua = g((Ba, R_) => {
    "use strict";
    var C_ = _().default;
    Object.defineProperty(Ba, "__esModule", { value: !0 });
    Ba.default = BR;
    var WR = ae(),
      YR = C_(oi()),
      HR = C_(x()),
      zR = Et();
    function BR(r, e, t) {
      (0, HR.default)(2, arguments);
      var i = (0, YR.default)(r, e) / WR.millisecondsInMinute;
      return (0, zR.getRoundingMethod)(t == null ? void 0 : t.roundingMethod)(
        i
      );
    }
    R_.exports = Ba.default;
  });
  var $a = g((Va, j_) => {
    "use strict";
    var I_ = _().default;
    Object.defineProperty(Va, "__esModule", { value: !0 });
    Va.default = $R;
    var UR = I_(T()),
      VR = I_(x());
    function $R(r) {
      (0, VR.default)(1, arguments);
      var e = (0, UR.default)(r);
      return e.setHours(23, 59, 59, 999), e;
    }
    j_.exports = Va.default;
  });
  var Xa = g((Qa, E_) => {
    "use strict";
    var A_ = _().default;
    Object.defineProperty(Qa, "__esModule", { value: !0 });
    Qa.default = KR;
    var QR = A_(T()),
      XR = A_(x());
    function KR(r) {
      (0, XR.default)(1, arguments);
      var e = (0, QR.default)(r),
        t = e.getMonth();
      return (
        e.setFullYear(e.getFullYear(), t + 1, 0), e.setHours(23, 59, 59, 999), e
      );
    }
    E_.exports = Qa.default;
  });
  var Rc = g((Ga, N_) => {
    "use strict";
    var Ka = _().default;
    Object.defineProperty(Ga, "__esModule", { value: !0 });
    Ga.default = tI;
    var GR = Ka(T()),
      ZR = Ka($a()),
      JR = Ka(Xa()),
      eI = Ka(x());
    function tI(r) {
      (0, eI.default)(1, arguments);
      var e = (0, GR.default)(r);
      return (0, ZR.default)(e).getTime() === (0, JR.default)(e).getTime();
    }
    N_.exports = Ga.default;
  });
  var fi = g((Za, L_) => {
    "use strict";
    var di = _().default;
    Object.defineProperty(Za, "__esModule", { value: !0 });
    Za.default = aI;
    var Ic = di(T()),
      rI = di(Sa()),
      jc = di(ht()),
      iI = di(x()),
      nI = di(Rc());
    function aI(r, e) {
      (0, iI.default)(2, arguments);
      var t = (0, Ic.default)(r),
        i = (0, Ic.default)(e),
        n = (0, jc.default)(t, i),
        a = Math.abs((0, rI.default)(t, i)),
        s;
      if (a < 1) s = 0;
      else {
        t.getMonth() === 1 && t.getDate() > 27 && t.setDate(30),
          t.setMonth(t.getMonth() - n * a);
        var u = (0, jc.default)(t, i) === -n;
        (0, nI.default)((0, Ic.default)(r)) &&
          a === 1 &&
          (0, jc.default)(r, i) === 1 &&
          (u = !1),
          (s = n * (a - Number(u)));
      }
      return s === 0 ? 0 : s;
    }
    L_.exports = Za.default;
  });
  var Y_ = g((Ja, W_) => {
    "use strict";
    var F_ = _().default;
    Object.defineProperty(Ja, "__esModule", { value: !0 });
    Ja.default = lI;
    var sI = F_(fi()),
      uI = F_(x()),
      oI = Et();
    function lI(r, e, t) {
      (0, uI.default)(2, arguments);
      var i = (0, sI.default)(r, e) / 3;
      return (0, oI.getRoundingMethod)(t == null ? void 0 : t.roundingMethod)(
        i
      );
    }
    W_.exports = Ja.default;
  });
  var ci = g((es, z_) => {
    "use strict";
    var H_ = _().default;
    Object.defineProperty(es, "__esModule", { value: !0 });
    es.default = hI;
    var dI = H_(oi()),
      fI = H_(x()),
      cI = Et();
    function hI(r, e, t) {
      (0, fI.default)(2, arguments);
      var i = (0, dI.default)(r, e) / 1e3;
      return (0, cI.getRoundingMethod)(t == null ? void 0 : t.roundingMethod)(
        i
      );
    }
    z_.exports = es.default;
  });
  var V_ = g((ts, U_) => {
    "use strict";
    var B_ = _().default;
    Object.defineProperty(ts, "__esModule", { value: !0 });
    ts.default = _I;
    var vI = B_(La()),
      gI = B_(x()),
      pI = Et();
    function _I(r, e, t) {
      (0, gI.default)(2, arguments);
      var i = (0, vI.default)(r, e) / 7;
      return (0, pI.getRoundingMethod)(t == null ? void 0 : t.roundingMethod)(
        i
      );
    }
    U_.exports = ts.default;
  });
  var Ac = g((is, X_) => {
    "use strict";
    var rs = _().default;
    Object.defineProperty(is, "__esModule", { value: !0 });
    is.default = xI;
    var $_ = rs(T()),
      mI = rs(Ea()),
      Q_ = rs(ht()),
      bI = rs(x());
    function xI(r, e) {
      (0, bI.default)(2, arguments);
      var t = (0, $_.default)(r),
        i = (0, $_.default)(e),
        n = (0, Q_.default)(t, i),
        a = Math.abs((0, mI.default)(t, i));
      t.setFullYear(1584), i.setFullYear(1584);
      var s = (0, Q_.default)(t, i) === -n,
        u = n * (a - Number(s));
      return u === 0 ? 0 : u;
    }
    X_.exports = is.default;
  });
  var Nc = g((ns, G_) => {
    "use strict";
    var K_ = _().default;
    Object.defineProperty(ns, "__esModule", { value: !0 });
    ns.default = qI;
    var Ec = K_(T()),
      yI = K_(x());
    function qI(r, e) {
      var t;
      (0, yI.default)(1, arguments);
      var i = r || {},
        n = (0, Ec.default)(i.start),
        a = (0, Ec.default)(i.end),
        s = a.getTime();
      if (!(n.getTime() <= s)) throw new RangeError("Invalid interval");
      var u = [],
        o = n;
      o.setHours(0, 0, 0, 0);
      var l = Number(
        (t = e == null ? void 0 : e.step) !== null && t !== void 0 ? t : 1
      );
      if (l < 1 || isNaN(l))
        throw new RangeError("`options.step` must be a number greater than 1");
      for (; o.getTime() <= s; )
        u.push((0, Ec.default)(o)),
          o.setDate(o.getDate() + l),
          o.setHours(0, 0, 0, 0);
      return u;
    }
    G_.exports = ns.default;
  });
  var J_ = g((as, Z_) => {
    "use strict";
    var Fc = _().default;
    Object.defineProperty(as, "__esModule", { value: !0 });
    as.default = MI;
    var OI = Fc(Qn()),
      Lc = Fc(T()),
      PI = Fc(x());
    function MI(r, e) {
      var t;
      (0, PI.default)(1, arguments);
      var i = r || {},
        n = (0, Lc.default)(i.start),
        a = (0, Lc.default)(i.end),
        s = n.getTime(),
        u = a.getTime();
      if (!(s <= u)) throw new RangeError("Invalid interval");
      var o = [],
        l = n;
      l.setMinutes(0, 0, 0);
      var d = Number(
        (t = e == null ? void 0 : e.step) !== null && t !== void 0 ? t : 1
      );
      if (d < 1 || isNaN(d))
        throw new RangeError("`options.step` must be a number greater than 1");
      for (; l.getTime() <= u; )
        o.push((0, Lc.default)(l)), (l = (0, OI.default)(l, d));
      return o;
    }
    Z_.exports = as.default;
  });
  var us = g((ss, tm) => {
    "use strict";
    var em = _().default;
    Object.defineProperty(ss, "__esModule", { value: !0 });
    ss.default = TI;
    var DI = em(T()),
      wI = em(x());
    function TI(r) {
      (0, wI.default)(1, arguments);
      var e = (0, DI.default)(r);
      return e.setSeconds(0, 0), e;
    }
    tm.exports = ss.default;
  });
  var im = g((ls, rm) => {
    "use strict";
    var os = _().default;
    Object.defineProperty(ls, "__esModule", { value: !0 });
    ls.default = RI;
    var kI = os(ua()),
      Wc = os(T()),
      SI = os(us()),
      CI = os(x());
    function RI(r, e) {
      var t;
      (0, CI.default)(1, arguments);
      var i = (0, SI.default)((0, Wc.default)(r.start)),
        n = (0, Wc.default)(r.end),
        a = i.getTime(),
        s = n.getTime();
      if (a >= s) throw new RangeError("Invalid interval");
      var u = [],
        o = i,
        l = Number(
          (t = e == null ? void 0 : e.step) !== null && t !== void 0 ? t : 1
        );
      if (l < 1 || isNaN(l))
        throw new RangeError(
          "`options.step` must be a number equal to or greater than 1"
        );
      for (; o.getTime() <= s; )
        u.push((0, Wc.default)(o)), (o = (0, kI.default)(o, l));
      return u;
    }
    rm.exports = ls.default;
  });
  var sm = g((ds, am) => {
    "use strict";
    var nm = _().default;
    Object.defineProperty(ds, "__esModule", { value: !0 });
    ds.default = jI;
    var Yc = nm(T()),
      II = nm(x());
    function jI(r) {
      (0, II.default)(1, arguments);
      var e = r || {},
        t = (0, Yc.default)(e.start),
        i = (0, Yc.default)(e.end),
        n = i.getTime(),
        a = [];
      if (!(t.getTime() <= n)) throw new RangeError("Invalid interval");
      var s = t;
      for (s.setHours(0, 0, 0, 0), s.setDate(1); s.getTime() <= n; )
        a.push((0, Yc.default)(s)), s.setMonth(s.getMonth() + 1);
      return a;
    }
    am.exports = ds.default;
  });
  var cs = g((fs, om) => {
    "use strict";
    var um = _().default;
    Object.defineProperty(fs, "__esModule", { value: !0 });
    fs.default = NI;
    var AI = um(T()),
      EI = um(x());
    function NI(r) {
      (0, EI.default)(1, arguments);
      var e = (0, AI.default)(r),
        t = e.getMonth(),
        i = t - (t % 3);
      return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
    }
    om.exports = fs.default;
  });
  var fm = g((vs, dm) => {
    "use strict";
    var hs = _().default;
    Object.defineProperty(vs, "__esModule", { value: !0 });
    vs.default = WI;
    var LI = hs(la()),
      lm = hs(cs()),
      Hc = hs(T()),
      FI = hs(x());
    function WI(r) {
      (0, FI.default)(1, arguments);
      var e = r || {},
        t = (0, Hc.default)(e.start),
        i = (0, Hc.default)(e.end),
        n = i.getTime();
      if (!(t.getTime() <= n)) throw new RangeError("Invalid interval");
      var a = (0, lm.default)(t),
        s = (0, lm.default)(i);
      n = s.getTime();
      for (var u = [], o = a; o.getTime() <= n; )
        u.push((0, Hc.default)(o)), (o = (0, LI.default)(o, 1));
      return u;
    }
    dm.exports = vs.default;
  });
  var vm = g((ps, hm) => {
    "use strict";
    var gs = _().default;
    Object.defineProperty(ps, "__esModule", { value: !0 });
    ps.default = zI;
    var YI = gs(ui()),
      cm = gs(Ze()),
      zc = gs(T()),
      HI = gs(x());
    function zI(r, e) {
      (0, HI.default)(1, arguments);
      var t = r || {},
        i = (0, zc.default)(t.start),
        n = (0, zc.default)(t.end),
        a = n.getTime();
      if (!(i.getTime() <= a)) throw new RangeError("Invalid interval");
      var s = (0, cm.default)(i, e),
        u = (0, cm.default)(n, e);
      s.setHours(15), u.setHours(15), (a = u.getTime());
      for (var o = [], l = s; l.getTime() <= a; )
        l.setHours(0),
          o.push((0, zc.default)(l)),
          (l = (0, YI.default)(l, 1)),
          l.setHours(15);
      return o;
    }
    hm.exports = ps.default;
  });
  var bs = g((ms, gm) => {
    "use strict";
    var _s = _().default;
    Object.defineProperty(ms, "__esModule", { value: !0 });
    ms.default = QI;
    var BI = _s(Nc()),
      UI = _s(zn()),
      VI = _s(ni()),
      $I = _s(x());
    function QI(r) {
      (0, $I.default)(1, arguments);
      for (var e = (0, BI.default)(r), t = [], i = 0; i < e.length; ) {
        var n = e[i++];
        (0, VI.default)(n) && (t.push(n), (0, UI.default)(n) && (i = i + 5));
      }
      return t;
    }
    gm.exports = ms.default;
  });
  var hi = g((xs, _m) => {
    "use strict";
    var pm = _().default;
    Object.defineProperty(xs, "__esModule", { value: !0 });
    xs.default = GI;
    var XI = pm(T()),
      KI = pm(x());
    function GI(r) {
      (0, KI.default)(1, arguments);
      var e = (0, XI.default)(r);
      return e.setDate(1), e.setHours(0, 0, 0, 0), e;
    }
    _m.exports = xs.default;
  });
  var bm = g((qs, mm) => {
    "use strict";
    var ys = _().default;
    Object.defineProperty(qs, "__esModule", { value: !0 });
    qs.default = rj;
    var ZI = ys(bs()),
      JI = ys(hi()),
      ej = ys(Xa()),
      tj = ys(x());
    function rj(r) {
      (0, tj.default)(1, arguments);
      var e = (0, JI.default)(r);
      if (isNaN(e.getTime()))
        throw new RangeError("The passed date is invalid");
      var t = (0, ej.default)(r);
      return (0, ZI.default)({ start: e, end: t });
    }
    mm.exports = qs.default;
  });
  var Bc = g((Os, ym) => {
    "use strict";
    var xm = _().default;
    Object.defineProperty(Os, "__esModule", { value: !0 });
    Os.default = aj;
    var ij = xm(T()),
      nj = xm(x());
    function aj(r) {
      (0, nj.default)(1, arguments);
      var e = (0, ij.default)(r),
        t = e.getFullYear();
      return e.setFullYear(t + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
    }
    ym.exports = Os.default;
  });
  var Ms = g((Ps, Om) => {
    "use strict";
    var qm = _().default;
    Object.defineProperty(Ps, "__esModule", { value: !0 });
    Ps.default = oj;
    var sj = qm(T()),
      uj = qm(x());
    function oj(r) {
      (0, uj.default)(1, arguments);
      var e = (0, sj.default)(r),
        t = new Date(0);
      return t.setFullYear(e.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    Om.exports = Ps.default;
  });
  var Mm = g((ws, Pm) => {
    "use strict";
    var Ds = _().default;
    Object.defineProperty(ws, "__esModule", { value: !0 });
    ws.default = hj;
    var lj = Ds(bs()),
      dj = Ds(Bc()),
      fj = Ds(Ms()),
      cj = Ds(x());
    function hj(r) {
      (0, cj.default)(1, arguments);
      var e = (0, fj.default)(r),
        t = (0, dj.default)(r);
      return (0, lj.default)({ start: e, end: t });
    }
    Pm.exports = ws.default;
  });
  var Tm = g((Ts, wm) => {
    "use strict";
    var Dm = _().default;
    Object.defineProperty(Ts, "__esModule", { value: !0 });
    Ts.default = gj;
    var Uc = Dm(T()),
      vj = Dm(x());
    function gj(r) {
      (0, vj.default)(1, arguments);
      var e = r || {},
        t = (0, Uc.default)(e.start),
        i = (0, Uc.default)(e.end),
        n = i.getTime();
      if (!(t.getTime() <= n)) throw new RangeError("Invalid interval");
      var a = [],
        s = t;
      for (s.setHours(0, 0, 0, 0), s.setMonth(0, 1); s.getTime() <= n; )
        a.push((0, Uc.default)(s)), s.setFullYear(s.getFullYear() + 1);
      return a;
    }
    wm.exports = Ts.default;
  });
  var Cm = g((ks, Sm) => {
    "use strict";
    var km = _().default;
    Object.defineProperty(ks, "__esModule", { value: !0 });
    ks.default = mj;
    var pj = km(T()),
      _j = km(x());
    function mj(r) {
      (0, _j.default)(1, arguments);
      var e = (0, pj.default)(r),
        t = e.getFullYear(),
        i = 9 + Math.floor(t / 10) * 10;
      return e.setFullYear(i, 11, 31), e.setHours(23, 59, 59, 999), e;
    }
    Sm.exports = ks.default;
  });
  var jm = g((Ss, Im) => {
    "use strict";
    var Rm = _().default;
    Object.defineProperty(Ss, "__esModule", { value: !0 });
    Ss.default = yj;
    var bj = Rm(T()),
      xj = Rm(x());
    function yj(r) {
      (0, xj.default)(1, arguments);
      var e = (0, bj.default)(r);
      return e.setMinutes(59, 59, 999), e;
    }
    Im.exports = Ss.default;
  });
  var $c = g((Cs, Am) => {
    "use strict";
    var Vc = _().default;
    Object.defineProperty(Cs, "__esModule", { value: !0 });
    Cs.default = Dj;
    var qj = le(),
      Oj = Vc(T()),
      Pj = Vc(F()),
      Mj = Vc(x());
    function Dj(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, Mj.default)(1, arguments);
      var d = (0, qj.getDefaultOptions)(),
        c = (0, Pj.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.weekStartsOn) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.weekStartsOn) !== null && n !== void 0
                ? n
                : d.weekStartsOn) !== null && i !== void 0
              ? i
              : (o = d.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && t !== void 0
            ? t
            : 0
        );
      if (!(c >= 0 && c <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var h = (0, Oj.default)(r),
        v = h.getDay(),
        p = (v < c ? -7 : 0) + 6 - (v - c);
      return h.setDate(h.getDate() + p), h.setHours(23, 59, 59, 999), h;
    }
    Am.exports = Cs.default;
  });
  var Lm = g((Rs, Nm) => {
    "use strict";
    var Em = _().default;
    Object.defineProperty(Rs, "__esModule", { value: !0 });
    Rs.default = kj;
    var wj = Em($c()),
      Tj = Em(x());
    function kj(r) {
      return (
        (0, Tj.default)(1, arguments), (0, wj.default)(r, { weekStartsOn: 1 })
      );
    }
    Nm.exports = Rs.default;
  });
  var Wm = g((Is, Fm) => {
    "use strict";
    var Qc = _().default;
    Object.defineProperty(Is, "__esModule", { value: !0 });
    Is.default = Ij;
    var Sj = Qc(At()),
      Cj = Qc(ct()),
      Rj = Qc(x());
    function Ij(r) {
      (0, Rj.default)(1, arguments);
      var e = (0, Sj.default)(r),
        t = new Date(0);
      t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
      var i = (0, Cj.default)(t);
      return i.setMilliseconds(i.getMilliseconds() - 1), i;
    }
    Fm.exports = Is.default;
  });
  var zm = g((js, Hm) => {
    "use strict";
    var Ym = _().default;
    Object.defineProperty(js, "__esModule", { value: !0 });
    js.default = Ej;
    var jj = Ym(T()),
      Aj = Ym(x());
    function Ej(r) {
      (0, Aj.default)(1, arguments);
      var e = (0, jj.default)(r);
      return e.setSeconds(59, 999), e;
    }
    Hm.exports = js.default;
  });
  var Vm = g((As, Um) => {
    "use strict";
    var Bm = _().default;
    Object.defineProperty(As, "__esModule", { value: !0 });
    As.default = Fj;
    var Nj = Bm(T()),
      Lj = Bm(x());
    function Fj(r) {
      (0, Lj.default)(1, arguments);
      var e = (0, Nj.default)(r),
        t = e.getMonth(),
        i = t - (t % 3) + 3;
      return e.setMonth(i, 0), e.setHours(23, 59, 59, 999), e;
    }
    Um.exports = As.default;
  });
  var Xm = g((Es, Qm) => {
    "use strict";
    var $m = _().default;
    Object.defineProperty(Es, "__esModule", { value: !0 });
    Es.default = Hj;
    var Wj = $m(T()),
      Yj = $m(x());
    function Hj(r) {
      (0, Yj.default)(1, arguments);
      var e = (0, Wj.default)(r);
      return e.setMilliseconds(999), e;
    }
    Qm.exports = Es.default;
  });
  var Gm = g((Ns, Km) => {
    "use strict";
    var zj = _().default;
    Object.defineProperty(Ns, "__esModule", { value: !0 });
    Ns.default = Uj;
    var Bj = zj($a());
    function Uj() {
      return (0, Bj.default)(Date.now());
    }
    Km.exports = Ns.default;
  });
  var Jm = g((Ls, Zm) => {
    "use strict";
    Object.defineProperty(Ls, "__esModule", { value: !0 });
    Ls.default = Vj;
    function Vj() {
      var r = new Date(),
        e = r.getFullYear(),
        t = r.getMonth(),
        i = r.getDate(),
        n = new Date(0);
      return n.setFullYear(e, t, i + 1), n.setHours(23, 59, 59, 999), n;
    }
    Zm.exports = Ls.default;
  });
  var t0 = g((Fs, e0) => {
    "use strict";
    Object.defineProperty(Fs, "__esModule", { value: !0 });
    Fs.default = $j;
    function $j() {
      var r = new Date(),
        e = r.getFullYear(),
        t = r.getMonth(),
        i = r.getDate(),
        n = new Date(0);
      return n.setFullYear(e, t, i - 1), n.setHours(23, 59, 59, 999), n;
    }
    e0.exports = Fs.default;
  });
  var hr = g((Ws, r0) => {
    "use strict";
    var Xc = _().default;
    Object.defineProperty(Ws, "__esModule", { value: !0 });
    Ws.default = Gj;
    var Qj = Xc(dr()),
      Xj = Xc(x()),
      Kj = Xc(F());
    function Gj(r, e) {
      (0, Xj.default)(2, arguments);
      var t = (0, Kj.default)(e);
      return (0, Qj.default)(r, -t);
    }
    r0.exports = Ws.default;
  });
  var a0 = g((Ys, n0) => {
    "use strict";
    var i0 = _().default;
    Object.defineProperty(Ys, "__esModule", { value: !0 });
    Ys.default = tA;
    var Zj = i0(T()),
      Jj = i0(x()),
      eA = 864e5;
    function tA(r) {
      (0, Jj.default)(1, arguments);
      var e = (0, Zj.default)(r),
        t = e.getTime();
      e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
      var i = e.getTime(),
        n = t - i;
      return Math.floor(n / eA) + 1;
    }
    n0.exports = Ys.default;
  });
  var vr = g((Hs, u0) => {
    "use strict";
    var s0 = _().default;
    Object.defineProperty(Hs, "__esModule", { value: !0 });
    Hs.default = nA;
    var rA = s0(T()),
      iA = s0(x());
    function nA(r) {
      (0, iA.default)(1, arguments);
      var e = 1,
        t = (0, rA.default)(r),
        i = t.getUTCDay(),
        n = (i < e ? 7 : 0) + i - e;
      return t.setUTCDate(t.getUTCDate() - n), t.setUTCHours(0, 0, 0, 0), t;
    }
    u0.exports = Hs.default;
  });
  var Gc = g((zs, l0) => {
    "use strict";
    var Kc = _().default;
    Object.defineProperty(zs, "__esModule", { value: !0 });
    zs.default = uA;
    var aA = Kc(T()),
      sA = Kc(x()),
      o0 = Kc(vr());
    function uA(r) {
      (0, sA.default)(1, arguments);
      var e = (0, aA.default)(r),
        t = e.getUTCFullYear(),
        i = new Date(0);
      i.setUTCFullYear(t + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
      var n = (0, o0.default)(i),
        a = new Date(0);
      a.setUTCFullYear(t, 0, 4), a.setUTCHours(0, 0, 0, 0);
      var s = (0, o0.default)(a);
      return e.getTime() >= n.getTime()
        ? t + 1
        : e.getTime() >= s.getTime()
        ? t
        : t - 1;
    }
    l0.exports = zs.default;
  });
  var f0 = g((Bs, d0) => {
    "use strict";
    var Zc = _().default;
    Object.defineProperty(Bs, "__esModule", { value: !0 });
    Bs.default = fA;
    var oA = Zc(Gc()),
      lA = Zc(vr()),
      dA = Zc(x());
    function fA(r) {
      (0, dA.default)(1, arguments);
      var e = (0, oA.default)(r),
        t = new Date(0);
      t.setUTCFullYear(e, 0, 4), t.setUTCHours(0, 0, 0, 0);
      var i = (0, lA.default)(t);
      return i;
    }
    d0.exports = Bs.default;
  });
  var Jc = g((Vs, c0) => {
    "use strict";
    var Us = _().default;
    Object.defineProperty(Vs, "__esModule", { value: !0 });
    Vs.default = _A;
    var cA = Us(T()),
      hA = Us(vr()),
      vA = Us(f0()),
      gA = Us(x()),
      pA = 6048e5;
    function _A(r) {
      (0, gA.default)(1, arguments);
      var e = (0, cA.default)(r),
        t = (0, hA.default)(e).getTime() - (0, vA.default)(e).getTime();
      return Math.round(t / pA) + 1;
    }
    c0.exports = Vs.default;
  });
  var gr = g(($s, h0) => {
    "use strict";
    var eh = _().default;
    Object.defineProperty($s, "__esModule", { value: !0 });
    $s.default = qA;
    var mA = eh(T()),
      bA = eh(x()),
      xA = eh(F()),
      yA = le();
    function qA(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, bA.default)(1, arguments);
      var d = (0, yA.getDefaultOptions)(),
        c = (0, xA.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.weekStartsOn) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.weekStartsOn) !== null && n !== void 0
                ? n
                : d.weekStartsOn) !== null && i !== void 0
              ? i
              : (o = d.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && t !== void 0
            ? t
            : 0
        );
      if (!(c >= 0 && c <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var h = (0, mA.default)(r),
        v = h.getUTCDay(),
        p = (v < c ? 7 : 0) + v - c;
      return h.setUTCDate(h.getUTCDate() - p), h.setUTCHours(0, 0, 0, 0), h;
    }
    h0.exports = $s.default;
  });
  var Ks = g((Xs, g0) => {
    "use strict";
    var Qs = _().default;
    Object.defineProperty(Xs, "__esModule", { value: !0 });
    Xs.default = wA;
    var OA = Qs(T()),
      PA = Qs(x()),
      v0 = Qs(gr()),
      MA = Qs(F()),
      DA = le();
    function wA(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, PA.default)(1, arguments);
      var d = (0, OA.default)(r),
        c = d.getUTCFullYear(),
        h = (0, DA.getDefaultOptions)(),
        v = (0, MA.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.firstWeekContainsDate) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.firstWeekContainsDate) !== null && n !== void 0
                ? n
                : h.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : (o = h.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && t !== void 0
            ? t
            : 1
        );
      if (!(v >= 1 && v <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var p = new Date(0);
      p.setUTCFullYear(c + 1, 0, v), p.setUTCHours(0, 0, 0, 0);
      var m = (0, v0.default)(p, e),
        q = new Date(0);
      q.setUTCFullYear(c, 0, v), q.setUTCHours(0, 0, 0, 0);
      var O = (0, v0.default)(q, e);
      return d.getTime() >= m.getTime()
        ? c + 1
        : d.getTime() >= O.getTime()
        ? c
        : c - 1;
    }
    g0.exports = Xs.default;
  });
  var _0 = g((Zs, p0) => {
    "use strict";
    var Gs = _().default;
    Object.defineProperty(Zs, "__esModule", { value: !0 });
    Zs.default = IA;
    var TA = Gs(Ks()),
      kA = Gs(x()),
      SA = Gs(gr()),
      CA = Gs(F()),
      RA = le();
    function IA(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, kA.default)(1, arguments);
      var d = (0, RA.getDefaultOptions)(),
        c = (0, CA.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.firstWeekContainsDate) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.firstWeekContainsDate) !== null && n !== void 0
                ? n
                : d.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : (o = d.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && t !== void 0
            ? t
            : 1
        ),
        h = (0, TA.default)(r, e),
        v = new Date(0);
      v.setUTCFullYear(h, 0, c), v.setUTCHours(0, 0, 0, 0);
      var p = (0, SA.default)(v, e);
      return p;
    }
    p0.exports = Zs.default;
  });
  var th = g((eu, m0) => {
    "use strict";
    var Js = _().default;
    Object.defineProperty(eu, "__esModule", { value: !0 });
    eu.default = FA;
    var jA = Js(T()),
      AA = Js(gr()),
      EA = Js(_0()),
      NA = Js(x()),
      LA = 6048e5;
    function FA(r, e) {
      (0, NA.default)(1, arguments);
      var t = (0, jA.default)(r),
        i = (0, AA.default)(t, e).getTime() - (0, EA.default)(t, e).getTime();
      return Math.round(i / LA) + 1;
    }
    m0.exports = eu.default;
  });
  var Nt = g((tu, b0) => {
    "use strict";
    Object.defineProperty(tu, "__esModule", { value: !0 });
    tu.default = WA;
    function WA(r, e) {
      for (var t = r < 0 ? "-" : "", i = Math.abs(r).toString(); i.length < e; )
        i = "0" + i;
      return t + i;
    }
    b0.exports = tu.default;
  });
  var rh = g((vi, x0) => {
    "use strict";
    var YA = _().default;
    Object.defineProperty(vi, "__esModule", { value: !0 });
    vi.default = void 0;
    var gt = YA(Nt()),
      HA = {
        y: function (e, t) {
          var i = e.getUTCFullYear(),
            n = i > 0 ? i : 1 - i;
          return (0, gt.default)(t === "yy" ? n % 100 : n, t.length);
        },
        M: function (e, t) {
          var i = e.getUTCMonth();
          return t === "M" ? String(i + 1) : (0, gt.default)(i + 1, 2);
        },
        d: function (e, t) {
          return (0, gt.default)(e.getUTCDate(), t.length);
        },
        a: function (e, t) {
          var i = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (t) {
            case "a":
            case "aa":
              return i.toUpperCase();
            case "aaa":
              return i;
            case "aaaaa":
              return i[0];
            case "aaaa":
            default:
              return i === "am" ? "a.m." : "p.m.";
          }
        },
        h: function (e, t) {
          return (0, gt.default)(e.getUTCHours() % 12 || 12, t.length);
        },
        H: function (e, t) {
          return (0, gt.default)(e.getUTCHours(), t.length);
        },
        m: function (e, t) {
          return (0, gt.default)(e.getUTCMinutes(), t.length);
        },
        s: function (e, t) {
          return (0, gt.default)(e.getUTCSeconds(), t.length);
        },
        S: function (e, t) {
          var i = t.length,
            n = e.getUTCMilliseconds(),
            a = Math.floor(n * Math.pow(10, i - 3));
          return (0, gt.default)(a, t.length);
        },
      },
      zA = HA;
    vi.default = zA;
    x0.exports = vi.default;
  });
  var P0 = g((gi, O0) => {
    "use strict";
    var Ft = _().default;
    Object.defineProperty(gi, "__esModule", { value: !0 });
    gi.default = void 0;
    var BA = Ft(a0()),
      UA = Ft(Jc()),
      VA = Ft(Gc()),
      $A = Ft(th()),
      QA = Ft(Ks()),
      de = Ft(Nt()),
      pt = Ft(rh()),
      pr = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      XA = {
        G: function (e, t, i) {
          var n = e.getUTCFullYear() > 0 ? 1 : 0;
          switch (t) {
            case "G":
            case "GG":
            case "GGG":
              return i.era(n, { width: "abbreviated" });
            case "GGGGG":
              return i.era(n, { width: "narrow" });
            case "GGGG":
            default:
              return i.era(n, { width: "wide" });
          }
        },
        y: function (e, t, i) {
          if (t === "yo") {
            var n = e.getUTCFullYear(),
              a = n > 0 ? n : 1 - n;
            return i.ordinalNumber(a, { unit: "year" });
          }
          return pt.default.y(e, t);
        },
        Y: function (e, t, i, n) {
          var a = (0, QA.default)(e, n),
            s = a > 0 ? a : 1 - a;
          if (t === "YY") {
            var u = s % 100;
            return (0, de.default)(u, 2);
          }
          return t === "Yo"
            ? i.ordinalNumber(s, { unit: "year" })
            : (0, de.default)(s, t.length);
        },
        R: function (e, t) {
          var i = (0, VA.default)(e);
          return (0, de.default)(i, t.length);
        },
        u: function (e, t) {
          var i = e.getUTCFullYear();
          return (0, de.default)(i, t.length);
        },
        Q: function (e, t, i) {
          var n = Math.ceil((e.getUTCMonth() + 1) / 3);
          switch (t) {
            case "Q":
              return String(n);
            case "QQ":
              return (0, de.default)(n, 2);
            case "Qo":
              return i.ordinalNumber(n, { unit: "quarter" });
            case "QQQ":
              return i.quarter(n, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return i.quarter(n, { width: "narrow", context: "formatting" });
            case "QQQQ":
            default:
              return i.quarter(n, { width: "wide", context: "formatting" });
          }
        },
        q: function (e, t, i) {
          var n = Math.ceil((e.getUTCMonth() + 1) / 3);
          switch (t) {
            case "q":
              return String(n);
            case "qq":
              return (0, de.default)(n, 2);
            case "qo":
              return i.ordinalNumber(n, { unit: "quarter" });
            case "qqq":
              return i.quarter(n, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return i.quarter(n, { width: "narrow", context: "standalone" });
            case "qqqq":
            default:
              return i.quarter(n, { width: "wide", context: "standalone" });
          }
        },
        M: function (e, t, i) {
          var n = e.getUTCMonth();
          switch (t) {
            case "M":
            case "MM":
              return pt.default.M(e, t);
            case "Mo":
              return i.ordinalNumber(n + 1, { unit: "month" });
            case "MMM":
              return i.month(n, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return i.month(n, { width: "narrow", context: "formatting" });
            case "MMMM":
            default:
              return i.month(n, { width: "wide", context: "formatting" });
          }
        },
        L: function (e, t, i) {
          var n = e.getUTCMonth();
          switch (t) {
            case "L":
              return String(n + 1);
            case "LL":
              return (0, de.default)(n + 1, 2);
            case "Lo":
              return i.ordinalNumber(n + 1, { unit: "month" });
            case "LLL":
              return i.month(n, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return i.month(n, { width: "narrow", context: "standalone" });
            case "LLLL":
            default:
              return i.month(n, { width: "wide", context: "standalone" });
          }
        },
        w: function (e, t, i, n) {
          var a = (0, $A.default)(e, n);
          return t === "wo"
            ? i.ordinalNumber(a, { unit: "week" })
            : (0, de.default)(a, t.length);
        },
        I: function (e, t, i) {
          var n = (0, UA.default)(e);
          return t === "Io"
            ? i.ordinalNumber(n, { unit: "week" })
            : (0, de.default)(n, t.length);
        },
        d: function (e, t, i) {
          return t === "do"
            ? i.ordinalNumber(e.getUTCDate(), { unit: "date" })
            : pt.default.d(e, t);
        },
        D: function (e, t, i) {
          var n = (0, BA.default)(e);
          return t === "Do"
            ? i.ordinalNumber(n, { unit: "dayOfYear" })
            : (0, de.default)(n, t.length);
        },
        E: function (e, t, i) {
          var n = e.getUTCDay();
          switch (t) {
            case "E":
            case "EE":
            case "EEE":
              return i.day(n, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
              return i.day(n, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return i.day(n, { width: "short", context: "formatting" });
            case "EEEE":
            default:
              return i.day(n, { width: "wide", context: "formatting" });
          }
        },
        e: function (e, t, i, n) {
          var a = e.getUTCDay(),
            s = (a - n.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case "e":
              return String(s);
            case "ee":
              return (0, de.default)(s, 2);
            case "eo":
              return i.ordinalNumber(s, { unit: "day" });
            case "eee":
              return i.day(a, { width: "abbreviated", context: "formatting" });
            case "eeeee":
              return i.day(a, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return i.day(a, { width: "short", context: "formatting" });
            case "eeee":
            default:
              return i.day(a, { width: "wide", context: "formatting" });
          }
        },
        c: function (e, t, i, n) {
          var a = e.getUTCDay(),
            s = (a - n.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case "c":
              return String(s);
            case "cc":
              return (0, de.default)(s, t.length);
            case "co":
              return i.ordinalNumber(s, { unit: "day" });
            case "ccc":
              return i.day(a, { width: "abbreviated", context: "standalone" });
            case "ccccc":
              return i.day(a, { width: "narrow", context: "standalone" });
            case "cccccc":
              return i.day(a, { width: "short", context: "standalone" });
            case "cccc":
            default:
              return i.day(a, { width: "wide", context: "standalone" });
          }
        },
        i: function (e, t, i) {
          var n = e.getUTCDay(),
            a = n === 0 ? 7 : n;
          switch (t) {
            case "i":
              return String(a);
            case "ii":
              return (0, de.default)(a, t.length);
            case "io":
              return i.ordinalNumber(a, { unit: "day" });
            case "iii":
              return i.day(n, { width: "abbreviated", context: "formatting" });
            case "iiiii":
              return i.day(n, { width: "narrow", context: "formatting" });
            case "iiiiii":
              return i.day(n, { width: "short", context: "formatting" });
            case "iiii":
            default:
              return i.day(n, { width: "wide", context: "formatting" });
          }
        },
        a: function (e, t, i) {
          var n = e.getUTCHours(),
            a = n / 12 >= 1 ? "pm" : "am";
          switch (t) {
            case "a":
            case "aa":
              return i.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return i
                .dayPeriod(a, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "aaaaa":
              return i.dayPeriod(a, { width: "narrow", context: "formatting" });
            case "aaaa":
            default:
              return i.dayPeriod(a, { width: "wide", context: "formatting" });
          }
        },
        b: function (e, t, i) {
          var n = e.getUTCHours(),
            a;
          switch (
            (n === 12
              ? (a = pr.noon)
              : n === 0
              ? (a = pr.midnight)
              : (a = n / 12 >= 1 ? "pm" : "am"),
            t)
          ) {
            case "b":
            case "bb":
              return i.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return i
                .dayPeriod(a, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "bbbbb":
              return i.dayPeriod(a, { width: "narrow", context: "formatting" });
            case "bbbb":
            default:
              return i.dayPeriod(a, { width: "wide", context: "formatting" });
          }
        },
        B: function (e, t, i) {
          var n = e.getUTCHours(),
            a;
          switch (
            (n >= 17
              ? (a = pr.evening)
              : n >= 12
              ? (a = pr.afternoon)
              : n >= 4
              ? (a = pr.morning)
              : (a = pr.night),
            t)
          ) {
            case "B":
            case "BB":
            case "BBB":
              return i.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return i.dayPeriod(a, { width: "narrow", context: "formatting" });
            case "BBBB":
            default:
              return i.dayPeriod(a, { width: "wide", context: "formatting" });
          }
        },
        h: function (e, t, i) {
          if (t === "ho") {
            var n = e.getUTCHours() % 12;
            return n === 0 && (n = 12), i.ordinalNumber(n, { unit: "hour" });
          }
          return pt.default.h(e, t);
        },
        H: function (e, t, i) {
          return t === "Ho"
            ? i.ordinalNumber(e.getUTCHours(), { unit: "hour" })
            : pt.default.H(e, t);
        },
        K: function (e, t, i) {
          var n = e.getUTCHours() % 12;
          return t === "Ko"
            ? i.ordinalNumber(n, { unit: "hour" })
            : (0, de.default)(n, t.length);
        },
        k: function (e, t, i) {
          var n = e.getUTCHours();
          return (
            n === 0 && (n = 24),
            t === "ko"
              ? i.ordinalNumber(n, { unit: "hour" })
              : (0, de.default)(n, t.length)
          );
        },
        m: function (e, t, i) {
          return t === "mo"
            ? i.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
            : pt.default.m(e, t);
        },
        s: function (e, t, i) {
          return t === "so"
            ? i.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
            : pt.default.s(e, t);
        },
        S: function (e, t) {
          return pt.default.S(e, t);
        },
        X: function (e, t, i, n) {
          var a = n._originalDate || e,
            s = a.getTimezoneOffset();
          if (s === 0) return "Z";
          switch (t) {
            case "X":
              return q0(s);
            case "XXXX":
            case "XX":
              return Lt(s);
            case "XXXXX":
            case "XXX":
            default:
              return Lt(s, ":");
          }
        },
        x: function (e, t, i, n) {
          var a = n._originalDate || e,
            s = a.getTimezoneOffset();
          switch (t) {
            case "x":
              return q0(s);
            case "xxxx":
            case "xx":
              return Lt(s);
            case "xxxxx":
            case "xxx":
            default:
              return Lt(s, ":");
          }
        },
        O: function (e, t, i, n) {
          var a = n._originalDate || e,
            s = a.getTimezoneOffset();
          switch (t) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + y0(s, ":");
            case "OOOO":
            default:
              return "GMT" + Lt(s, ":");
          }
        },
        z: function (e, t, i, n) {
          var a = n._originalDate || e,
            s = a.getTimezoneOffset();
          switch (t) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + y0(s, ":");
            case "zzzz":
            default:
              return "GMT" + Lt(s, ":");
          }
        },
        t: function (e, t, i, n) {
          var a = n._originalDate || e,
            s = Math.floor(a.getTime() / 1e3);
          return (0, de.default)(s, t.length);
        },
        T: function (e, t, i, n) {
          var a = n._originalDate || e,
            s = a.getTime();
          return (0, de.default)(s, t.length);
        },
      };
    function y0(r, e) {
      var t = r > 0 ? "-" : "+",
        i = Math.abs(r),
        n = Math.floor(i / 60),
        a = i % 60;
      if (a === 0) return t + String(n);
      var s = e || "";
      return t + String(n) + s + (0, de.default)(a, 2);
    }
    function q0(r, e) {
      if (r % 60 === 0) {
        var t = r > 0 ? "-" : "+";
        return t + (0, de.default)(Math.abs(r) / 60, 2);
      }
      return Lt(r, e);
    }
    function Lt(r, e) {
      var t = e || "",
        i = r > 0 ? "-" : "+",
        n = Math.abs(r),
        a = (0, de.default)(Math.floor(n / 60), 2),
        s = (0, de.default)(n % 60, 2);
      return i + a + t + s;
    }
    var KA = XA;
    gi.default = KA;
    O0.exports = gi.default;
  });
  var ih = g((pi, w0) => {
    "use strict";
    Object.defineProperty(pi, "__esModule", { value: !0 });
    pi.default = void 0;
    var M0 = function (e, t) {
        switch (e) {
          case "P":
            return t.date({ width: "short" });
          case "PP":
            return t.date({ width: "medium" });
          case "PPP":
            return t.date({ width: "long" });
          case "PPPP":
          default:
            return t.date({ width: "full" });
        }
      },
      D0 = function (e, t) {
        switch (e) {
          case "p":
            return t.time({ width: "short" });
          case "pp":
            return t.time({ width: "medium" });
          case "ppp":
            return t.time({ width: "long" });
          case "pppp":
          default:
            return t.time({ width: "full" });
        }
      },
      GA = function (e, t) {
        var i = e.match(/(P+)(p+)?/) || [],
          n = i[1],
          a = i[2];
        if (!a) return M0(e, t);
        var s;
        switch (n) {
          case "P":
            s = t.dateTime({ width: "short" });
            break;
          case "PP":
            s = t.dateTime({ width: "medium" });
            break;
          case "PPP":
            s = t.dateTime({ width: "long" });
            break;
          case "PPPP":
          default:
            s = t.dateTime({ width: "full" });
            break;
        }
        return s.replace("{{date}}", M0(n, t)).replace("{{time}}", D0(a, t));
      },
      ZA = { p: D0, P: GA },
      JA = ZA;
    pi.default = JA;
    w0.exports = pi.default;
  });
  var nh = g((_i) => {
    "use strict";
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.isProtectedDayOfYearToken = rE;
    _i.isProtectedWeekYearToken = iE;
    _i.throwProtectedError = nE;
    var eE = ["D", "DD"],
      tE = ["YY", "YYYY"];
    function rE(r) {
      return eE.indexOf(r) !== -1;
    }
    function iE(r) {
      return tE.indexOf(r) !== -1;
    }
    function nE(r, e, t) {
      if (r === "YYYY")
        throw new RangeError(
          "Use `yyyy` instead of `YYYY` (in `"
            .concat(e, "`) for formatting years to the input `")
            .concat(
              t,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
      if (r === "YY")
        throw new RangeError(
          "Use `yy` instead of `YY` (in `"
            .concat(e, "`) for formatting years to the input `")
            .concat(
              t,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
      if (r === "D")
        throw new RangeError(
          "Use `d` instead of `D` (in `"
            .concat(e, "`) for formatting days of the month to the input `")
            .concat(
              t,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
      if (r === "DD")
        throw new RangeError(
          "Use `dd` instead of `DD` (in `"
            .concat(e, "`) for formatting days of the month to the input `")
            .concat(
              t,
              "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
        );
    }
  });
  var k0 = g((mi, T0) => {
    "use strict";
    Object.defineProperty(mi, "__esModule", { value: !0 });
    mi.default = void 0;
    var aE = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      },
      sE = function (e, t, i) {
        var n,
          a = aE[e];
        return (
          typeof a == "string"
            ? (n = a)
            : t === 1
            ? (n = a.one)
            : (n = a.other.replace("{{count}}", t.toString())),
          i != null && i.addSuffix
            ? i.comparison && i.comparison > 0
              ? "in " + n
              : n + " ago"
            : n
        );
      },
      uE = sE;
    mi.default = uE;
    T0.exports = mi.default;
  });
  var C0 = g((ru, S0) => {
    "use strict";
    Object.defineProperty(ru, "__esModule", { value: !0 });
    ru.default = oE;
    function oE(r) {
      return function () {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          t = e.width ? String(e.width) : r.defaultWidth,
          i = r.formats[t] || r.formats[r.defaultWidth];
        return i;
      };
    }
    S0.exports = ru.default;
  });
  var I0 = g((bi, R0) => {
    "use strict";
    var lE = _().default;
    Object.defineProperty(bi, "__esModule", { value: !0 });
    bi.default = void 0;
    var ah = lE(C0()),
      dE = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy",
      },
      fE = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a",
      },
      cE = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
      },
      hE = {
        date: (0, ah.default)({ formats: dE, defaultWidth: "full" }),
        time: (0, ah.default)({ formats: fE, defaultWidth: "full" }),
        dateTime: (0, ah.default)({ formats: cE, defaultWidth: "full" }),
      },
      vE = hE;
    bi.default = vE;
    R0.exports = bi.default;
  });
  var A0 = g((xi, j0) => {
    "use strict";
    Object.defineProperty(xi, "__esModule", { value: !0 });
    xi.default = void 0;
    var gE = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      },
      pE = function (e, t, i, n) {
        return gE[e];
      },
      _E = pE;
    xi.default = _E;
    j0.exports = xi.default;
  });
  var N0 = g((iu, E0) => {
    "use strict";
    Object.defineProperty(iu, "__esModule", { value: !0 });
    iu.default = mE;
    function mE(r) {
      return function (e, t) {
        var i = t != null && t.context ? String(t.context) : "standalone",
          n;
        if (i === "formatting" && r.formattingValues) {
          var a = r.defaultFormattingWidth || r.defaultWidth,
            s = t != null && t.width ? String(t.width) : a;
          n = r.formattingValues[s] || r.formattingValues[a];
        } else {
          var u = r.defaultWidth,
            o = t != null && t.width ? String(t.width) : r.defaultWidth;
          n = r.values[o] || r.values[u];
        }
        var l = r.argumentCallback ? r.argumentCallback(e) : e;
        return n[l];
      };
    }
    E0.exports = iu.default;
  });
  var F0 = g((qi, L0) => {
    "use strict";
    var bE = _().default;
    Object.defineProperty(qi, "__esModule", { value: !0 });
    qi.default = void 0;
    var yi = bE(N0()),
      xE = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
      },
      yE = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      },
      qE = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        wide: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      OE = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      PE = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
      },
      ME = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
      },
      DE = function (e, t) {
        var i = Number(e),
          n = i % 100;
        if (n > 20 || n < 10)
          switch (n % 10) {
            case 1:
              return i + "st";
            case 2:
              return i + "nd";
            case 3:
              return i + "rd";
          }
        return i + "th";
      },
      wE = {
        ordinalNumber: DE,
        era: (0, yi.default)({ values: xE, defaultWidth: "wide" }),
        quarter: (0, yi.default)({
          values: yE,
          defaultWidth: "wide",
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: (0, yi.default)({ values: qE, defaultWidth: "wide" }),
        day: (0, yi.default)({ values: OE, defaultWidth: "wide" }),
        dayPeriod: (0, yi.default)({
          values: PE,
          defaultWidth: "wide",
          formattingValues: ME,
          defaultFormattingWidth: "wide",
        }),
      },
      TE = wE;
    qi.default = TE;
    L0.exports = qi.default;
  });
  var Y0 = g((nu, W0) => {
    "use strict";
    Object.defineProperty(nu, "__esModule", { value: !0 });
    nu.default = kE;
    function kE(r) {
      return function (e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          i = t.width,
          n = (i && r.matchPatterns[i]) || r.matchPatterns[r.defaultMatchWidth],
          a = e.match(n);
        if (!a) return null;
        var s = a[0],
          u = (i && r.parsePatterns[i]) || r.parsePatterns[r.defaultParseWidth],
          o = Array.isArray(u)
            ? CE(u, function (c) {
                return c.test(s);
              })
            : SE(u, function (c) {
                return c.test(s);
              }),
          l;
        (l = r.valueCallback ? r.valueCallback(o) : o),
          (l = t.valueCallback ? t.valueCallback(l) : l);
        var d = e.slice(s.length);
        return { value: l, rest: d };
      };
    }
    function SE(r, e) {
      for (var t in r) if (r.hasOwnProperty(t) && e(r[t])) return t;
    }
    function CE(r, e) {
      for (var t = 0; t < r.length; t++) if (e(r[t])) return t;
    }
    W0.exports = nu.default;
  });
  var z0 = g((au, H0) => {
    "use strict";
    Object.defineProperty(au, "__esModule", { value: !0 });
    au.default = RE;
    function RE(r) {
      return function (e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          i = e.match(r.matchPattern);
        if (!i) return null;
        var n = i[0],
          a = e.match(r.parsePattern);
        if (!a) return null;
        var s = r.valueCallback ? r.valueCallback(a[0]) : a[0];
        s = t.valueCallback ? t.valueCallback(s) : s;
        var u = e.slice(n.length);
        return { value: s, rest: u };
      };
    }
    H0.exports = au.default;
  });
  var V0 = g((Pi, U0) => {
    "use strict";
    var B0 = _().default;
    Object.defineProperty(Pi, "__esModule", { value: !0 });
    Pi.default = void 0;
    var Oi = B0(Y0()),
      IE = B0(z0()),
      jE = /^(\d+)(th|st|nd|rd)?/i,
      AE = /\d+/i,
      EE = {
        narrow: /^(b|a)/i,
        abbreviated:
          /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      NE = { any: [/^b/i, /^(a|c)/i] },
      LE = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      FE = { any: [/1/i, /2/i, /3/i, /4/i] },
      WE = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      YE = {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      HE = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      zE = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      BE = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      UE = {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      VE = {
        ordinalNumber: (0, IE.default)({
          matchPattern: jE,
          parsePattern: AE,
          valueCallback: function (e) {
            return parseInt(e, 10);
          },
        }),
        era: (0, Oi.default)({
          matchPatterns: EE,
          defaultMatchWidth: "wide",
          parsePatterns: NE,
          defaultParseWidth: "any",
        }),
        quarter: (0, Oi.default)({
          matchPatterns: LE,
          defaultMatchWidth: "wide",
          parsePatterns: FE,
          defaultParseWidth: "any",
          valueCallback: function (e) {
            return e + 1;
          },
        }),
        month: (0, Oi.default)({
          matchPatterns: WE,
          defaultMatchWidth: "wide",
          parsePatterns: YE,
          defaultParseWidth: "any",
        }),
        day: (0, Oi.default)({
          matchPatterns: HE,
          defaultMatchWidth: "wide",
          parsePatterns: zE,
          defaultParseWidth: "any",
        }),
        dayPeriod: (0, Oi.default)({
          matchPatterns: BE,
          defaultMatchWidth: "any",
          parsePatterns: UE,
          defaultParseWidth: "any",
        }),
      },
      $E = VE;
    Pi.default = $E;
    U0.exports = Pi.default;
  });
  var Q0 = g((Di, $0) => {
    "use strict";
    var Mi = _().default;
    Object.defineProperty(Di, "__esModule", { value: !0 });
    Di.default = void 0;
    var QE = Mi(k0()),
      XE = Mi(I0()),
      KE = Mi(A0()),
      GE = Mi(F0()),
      ZE = Mi(V0()),
      JE = {
        code: "en-US",
        formatDistance: QE.default,
        formatLong: XE.default,
        formatRelative: KE.default,
        localize: GE.default,
        match: ZE.default,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
      eN = JE;
    Di.default = eN;
    $0.exports = Di.default;
  });
  var Wt = g((wi, X0) => {
    "use strict";
    var tN = _().default;
    Object.defineProperty(wi, "__esModule", { value: !0 });
    wi.default = void 0;
    var rN = tN(Q0()),
      iN = rN.default;
    wi.default = iN;
    X0.exports = wi.default;
  });
  var sh = g((uu, G0) => {
    "use strict";
    var tt = _().default;
    Object.defineProperty(uu, "__esModule", { value: !0 });
    uu.default = mN;
    var nN = tt(et()),
      aN = tt(hr()),
      sN = tt(T()),
      uN = tt(P0()),
      oN = tt(ih()),
      lN = tt(We()),
      su = nh(),
      K0 = tt(F()),
      dN = tt(x()),
      fN = le(),
      cN = tt(Wt()),
      hN = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      vN = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      gN = /^'([^]*?)'?$/,
      pN = /''/g,
      _N = /[a-zA-Z]/;
    function mN(r, e, t) {
      var i, n, a, s, u, o, l, d, c, h, v, p, m, q, O, P, w, C;
      (0, dN.default)(2, arguments);
      var k = String(e),
        R = (0, fN.getDefaultOptions)(),
        I =
          (i =
            (n = t == null ? void 0 : t.locale) !== null && n !== void 0
              ? n
              : R.locale) !== null && i !== void 0
            ? i
            : cN.default,
        j = (0, K0.default)(
          (a =
            (s =
              (u =
                (o = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
                o !== void 0
                  ? o
                  : t == null ||
                    (l = t.locale) === null ||
                    l === void 0 ||
                    (d = l.options) === null ||
                    d === void 0
                  ? void 0
                  : d.firstWeekContainsDate) !== null && u !== void 0
                ? u
                : R.firstWeekContainsDate) !== null && s !== void 0
              ? s
              : (c = R.locale) === null ||
                c === void 0 ||
                (h = c.options) === null ||
                h === void 0
              ? void 0
              : h.firstWeekContainsDate) !== null && a !== void 0
            ? a
            : 1
        );
      if (!(j >= 1 && j <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var L = (0, K0.default)(
        (v =
          (p =
            (m =
              (q = t == null ? void 0 : t.weekStartsOn) !== null && q !== void 0
                ? q
                : t == null ||
                  (O = t.locale) === null ||
                  O === void 0 ||
                  (P = O.options) === null ||
                  P === void 0
                ? void 0
                : P.weekStartsOn) !== null && m !== void 0
              ? m
              : R.weekStartsOn) !== null && p !== void 0
            ? p
            : (w = R.locale) === null ||
              w === void 0 ||
              (C = w.options) === null ||
              C === void 0
            ? void 0
            : C.weekStartsOn) !== null && v !== void 0
          ? v
          : 0
      );
      if (!(L >= 0 && L <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      if (!I.localize)
        throw new RangeError("locale must contain localize property");
      if (!I.formatLong)
        throw new RangeError("locale must contain formatLong property");
      var W = (0, sN.default)(r);
      if (!(0, nN.default)(W)) throw new RangeError("Invalid time value");
      var H = (0, lN.default)(W),
        U = (0, aN.default)(W, H),
        se = {
          firstWeekContainsDate: j,
          weekStartsOn: L,
          locale: I,
          _originalDate: W,
        },
        fe = k
          .match(vN)
          .map(function (Y) {
            var V = Y[0];
            if (V === "p" || V === "P") {
              var X = oN.default[V];
              return X(Y, I.formatLong);
            }
            return Y;
          })
          .join("")
          .match(hN)
          .map(function (Y) {
            if (Y === "''") return "'";
            var V = Y[0];
            if (V === "'") return bN(Y);
            var X = uN.default[V];
            if (X)
              return (
                !(t != null && t.useAdditionalWeekYearTokens) &&
                  (0, su.isProtectedWeekYearToken)(Y) &&
                  (0, su.throwProtectedError)(Y, e, String(r)),
                !(t != null && t.useAdditionalDayOfYearTokens) &&
                  (0, su.isProtectedDayOfYearToken)(Y) &&
                  (0, su.throwProtectedError)(Y, e, String(r)),
                X(U, Y, I.localize, se)
              );
            if (V.match(_N))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  V +
                  "`"
              );
            return Y;
          })
          .join("");
      return fe;
    }
    function bN(r) {
      var e = r.match(gN);
      return e ? e[1].replace(pN, "'") : r;
    }
    G0.exports = uu.default;
  });
  var _r = g((ou, Z0) => {
    "use strict";
    Object.defineProperty(ou, "__esModule", { value: !0 });
    ou.default = xN;
    function xN(r, e) {
      if (r == null)
        throw new TypeError(
          "assign requires that input parameter not be null or undefined"
        );
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
      return r;
    }
    Z0.exports = ou.default;
  });
  var uh = g((lu, J0) => {
    "use strict";
    var yN = _().default;
    Object.defineProperty(lu, "__esModule", { value: !0 });
    lu.default = ON;
    var qN = yN(_r());
    function ON(r) {
      return (0, qN.default)({}, r);
    }
    J0.exports = lu.default;
  });
  var lh = g((fu, rb) => {
    "use strict";
    var rt = _().default;
    Object.defineProperty(fu, "__esModule", { value: !0 });
    fu.default = jN;
    var PN = le(),
      MN = rt(ht()),
      DN = rt(fi()),
      wN = rt(ci()),
      TN = rt(Wt()),
      du = rt(T()),
      kN = rt(uh()),
      SN = rt(_r()),
      eb = rt(We()),
      CN = rt(x()),
      tb = 1440,
      RN = 2520,
      oh = 43200,
      IN = 86400;
    function jN(r, e, t) {
      var i, n;
      (0, CN.default)(2, arguments);
      var a = (0, PN.getDefaultOptions)(),
        s =
          (i =
            (n = t == null ? void 0 : t.locale) !== null && n !== void 0
              ? n
              : a.locale) !== null && i !== void 0
            ? i
            : TN.default;
      if (!s.formatDistance)
        throw new RangeError("locale must contain formatDistance property");
      var u = (0, MN.default)(r, e);
      if (isNaN(u)) throw new RangeError("Invalid time value");
      var o = (0, SN.default)((0, kN.default)(t), {
          addSuffix: Boolean(t == null ? void 0 : t.addSuffix),
          comparison: u,
        }),
        l,
        d;
      u > 0
        ? ((l = (0, du.default)(e)), (d = (0, du.default)(r)))
        : ((l = (0, du.default)(r)), (d = (0, du.default)(e)));
      var c = (0, wN.default)(d, l),
        h = ((0, eb.default)(d) - (0, eb.default)(l)) / 1e3,
        v = Math.round((c - h) / 60),
        p;
      if (v < 2)
        return t != null && t.includeSeconds
          ? c < 5
            ? s.formatDistance("lessThanXSeconds", 5, o)
            : c < 10
            ? s.formatDistance("lessThanXSeconds", 10, o)
            : c < 20
            ? s.formatDistance("lessThanXSeconds", 20, o)
            : c < 40
            ? s.formatDistance("halfAMinute", 0, o)
            : c < 60
            ? s.formatDistance("lessThanXMinutes", 1, o)
            : s.formatDistance("xMinutes", 1, o)
          : v === 0
          ? s.formatDistance("lessThanXMinutes", 1, o)
          : s.formatDistance("xMinutes", v, o);
      if (v < 45) return s.formatDistance("xMinutes", v, o);
      if (v < 90) return s.formatDistance("aboutXHours", 1, o);
      if (v < tb) {
        var m = Math.round(v / 60);
        return s.formatDistance("aboutXHours", m, o);
      } else {
        if (v < RN) return s.formatDistance("xDays", 1, o);
        if (v < oh) {
          var q = Math.round(v / tb);
          return s.formatDistance("xDays", q, o);
        } else if (v < IN)
          return (
            (p = Math.round(v / oh)), s.formatDistance("aboutXMonths", p, o)
          );
      }
      if (((p = (0, DN.default)(d, l)), p < 12)) {
        var O = Math.round(v / oh);
        return s.formatDistance("xMonths", O, o);
      } else {
        var P = p % 12,
          w = Math.floor(p / 12);
        return P < 3
          ? s.formatDistance("aboutXYears", w, o)
          : P < 9
          ? s.formatDistance("overXYears", w, o)
          : s.formatDistance("almostXYears", w + 1, o);
      }
    }
    rb.exports = fu.default;
  });
  var dh = g((vu, ub) => {
    "use strict";
    var Yt = _().default;
    Object.defineProperty(vu, "__esModule", { value: !0 });
    vu.default = YN;
    var AN = le(),
      ib = Yt(We()),
      EN = Yt(ht()),
      cu = Yt(T()),
      NN = Yt(uh()),
      LN = Yt(_r()),
      FN = Yt(Wt()),
      WN = Yt(x()),
      nb = 1e3 * 60,
      hu = 60 * 24,
      ab = hu * 30,
      sb = hu * 365;
    function YN(r, e, t) {
      var i, n, a;
      (0, WN.default)(2, arguments);
      var s = (0, AN.getDefaultOptions)(),
        u =
          (i =
            (n = t == null ? void 0 : t.locale) !== null && n !== void 0
              ? n
              : s.locale) !== null && i !== void 0
            ? i
            : FN.default;
      if (!u.formatDistance)
        throw new RangeError(
          "locale must contain localize.formatDistance property"
        );
      var o = (0, EN.default)(r, e);
      if (isNaN(o)) throw new RangeError("Invalid time value");
      var l = (0, LN.default)((0, NN.default)(t), {
          addSuffix: Boolean(t == null ? void 0 : t.addSuffix),
          comparison: o,
        }),
        d,
        c;
      o > 0
        ? ((d = (0, cu.default)(e)), (c = (0, cu.default)(r)))
        : ((d = (0, cu.default)(r)), (c = (0, cu.default)(e)));
      var h = String(
          (a = t == null ? void 0 : t.roundingMethod) !== null && a !== void 0
            ? a
            : "round"
        ),
        v;
      if (h === "floor") v = Math.floor;
      else if (h === "ceil") v = Math.ceil;
      else if (h === "round") v = Math.round;
      else
        throw new RangeError(
          "roundingMethod must be 'floor', 'ceil' or 'round'"
        );
      var p = c.getTime() - d.getTime(),
        m = p / nb,
        q = (0, ib.default)(c) - (0, ib.default)(d),
        O = (p - q) / nb,
        P = t == null ? void 0 : t.unit,
        w;
      if (
        (P
          ? (w = String(P))
          : m < 1
          ? (w = "second")
          : m < 60
          ? (w = "minute")
          : m < hu
          ? (w = "hour")
          : O < ab
          ? (w = "day")
          : O < sb
          ? (w = "month")
          : (w = "year"),
        w === "second")
      ) {
        var C = v(p / 1e3);
        return u.formatDistance("xSeconds", C, l);
      } else if (w === "minute") {
        var k = v(m);
        return u.formatDistance("xMinutes", k, l);
      } else if (w === "hour") {
        var R = v(m / 60);
        return u.formatDistance("xHours", R, l);
      } else if (w === "day") {
        var I = v(O / hu);
        return u.formatDistance("xDays", I, l);
      } else if (w === "month") {
        var j = v(O / ab);
        return j === 12 && P !== "month"
          ? u.formatDistance("xYears", 1, l)
          : u.formatDistance("xMonths", j, l);
      } else if (w === "year") {
        var L = v(O / sb);
        return u.formatDistance("xYears", L, l);
      }
      throw new RangeError(
        "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'"
      );
    }
    ub.exports = vu.default;
  });
  var db = g((gu, lb) => {
    "use strict";
    var ob = _().default;
    Object.defineProperty(gu, "__esModule", { value: !0 });
    gu.default = BN;
    var HN = ob(lh()),
      zN = ob(x());
    function BN(r, e) {
      return (0, zN.default)(1, arguments), (0, HN.default)(r, Date.now(), e);
    }
    lb.exports = gu.default;
  });
  var hb = g((pu, cb) => {
    "use strict";
    var fb = _().default;
    Object.defineProperty(pu, "__esModule", { value: !0 });
    pu.default = $N;
    var UN = fb(dh()),
      VN = fb(x());
    function $N(r, e) {
      return (0, VN.default)(1, arguments), (0, UN.default)(r, Date.now(), e);
    }
    cb.exports = pu.default;
  });
  var gb = g((_u, vb) => {
    "use strict";
    var QN = _().default;
    Object.defineProperty(_u, "__esModule", { value: !0 });
    _u.default = ZN;
    var XN = le(),
      KN = QN(Wt()),
      GN = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
    function ZN(r, e) {
      var t, i, n, a, s;
      if (arguments.length < 1)
        throw new TypeError(
          "1 argument required, but only ".concat(arguments.length, " present")
        );
      var u = (0, XN.getDefaultOptions)(),
        o =
          (t =
            (i = e == null ? void 0 : e.locale) !== null && i !== void 0
              ? i
              : u.locale) !== null && t !== void 0
            ? t
            : KN.default,
        l =
          (n = e == null ? void 0 : e.format) !== null && n !== void 0 ? n : GN,
        d = (a = e == null ? void 0 : e.zero) !== null && a !== void 0 ? a : !1,
        c =
          (s = e == null ? void 0 : e.delimiter) !== null && s !== void 0
            ? s
            : " ";
      if (!o.formatDistance) return "";
      var h = l
        .reduce(function (v, p) {
          var m = "x".concat(
              p.replace(/(^.)/, function (O) {
                return O.toUpperCase();
              })
            ),
            q = r[p];
          return typeof q == "number" && (d || r[p])
            ? v.concat(o.formatDistance(m, q))
            : v;
        }, [])
        .join(c);
      return h;
    }
    vb.exports = _u.default;
  });
  var _b = g((mu, pb) => {
    "use strict";
    var fh = _().default;
    Object.defineProperty(mu, "__esModule", { value: !0 });
    mu.default = tL;
    var JN = fh(T()),
      _t = fh(Nt()),
      eL = fh(x());
    function tL(r, e) {
      var t, i;
      (0, eL.default)(1, arguments);
      var n = (0, JN.default)(r);
      if (isNaN(n.getTime())) throw new RangeError("Invalid time value");
      var a = String(
          (t = e == null ? void 0 : e.format) !== null && t !== void 0
            ? t
            : "extended"
        ),
        s = String(
          (i = e == null ? void 0 : e.representation) !== null && i !== void 0
            ? i
            : "complete"
        );
      if (a !== "extended" && a !== "basic")
        throw new RangeError("format must be 'extended' or 'basic'");
      if (s !== "date" && s !== "time" && s !== "complete")
        throw new RangeError(
          "representation must be 'date', 'time', or 'complete'"
        );
      var u = "",
        o = "",
        l = a === "extended" ? "-" : "",
        d = a === "extended" ? ":" : "";
      if (s !== "time") {
        var c = (0, _t.default)(n.getDate(), 2),
          h = (0, _t.default)(n.getMonth() + 1, 2),
          v = (0, _t.default)(n.getFullYear(), 4);
        u = "".concat(v).concat(l).concat(h).concat(l).concat(c);
      }
      if (s !== "date") {
        var p = n.getTimezoneOffset();
        if (p !== 0) {
          var m = Math.abs(p),
            q = (0, _t.default)(Math.floor(m / 60), 2),
            O = (0, _t.default)(m % 60, 2),
            P = p < 0 ? "+" : "-";
          o = "".concat(P).concat(q, ":").concat(O);
        } else o = "Z";
        var w = (0, _t.default)(n.getHours(), 2),
          C = (0, _t.default)(n.getMinutes(), 2),
          k = (0, _t.default)(n.getSeconds(), 2),
          R = u === "" ? "" : "T",
          I = [w, C, k].join(d);
        u = "".concat(u).concat(R).concat(I).concat(o);
      }
      return u;
    }
    pb.exports = mu.default;
  });
  var bb = g((bu, mb) => {
    "use strict";
    var ch = _().default;
    Object.defineProperty(bu, "__esModule", { value: !0 });
    bu.default = nL;
    var rL = ch(T()),
      iL = ch(et()),
      mr = ch(Nt());
    function nL(r, e) {
      var t, i;
      if (arguments.length < 1)
        throw new TypeError(
          "1 argument required, but only ".concat(arguments.length, " present")
        );
      var n = (0, rL.default)(r);
      if (!(0, iL.default)(n)) throw new RangeError("Invalid time value");
      var a = String(
          (t = e == null ? void 0 : e.format) !== null && t !== void 0
            ? t
            : "extended"
        ),
        s = String(
          (i = e == null ? void 0 : e.representation) !== null && i !== void 0
            ? i
            : "complete"
        );
      if (a !== "extended" && a !== "basic")
        throw new RangeError("format must be 'extended' or 'basic'");
      if (s !== "date" && s !== "time" && s !== "complete")
        throw new RangeError(
          "representation must be 'date', 'time', or 'complete'"
        );
      var u = "",
        o = a === "extended" ? "-" : "",
        l = a === "extended" ? ":" : "";
      if (s !== "time") {
        var d = (0, mr.default)(n.getDate(), 2),
          c = (0, mr.default)(n.getMonth() + 1, 2),
          h = (0, mr.default)(n.getFullYear(), 4);
        u = "".concat(h).concat(o).concat(c).concat(o).concat(d);
      }
      if (s !== "date") {
        var v = (0, mr.default)(n.getHours(), 2),
          p = (0, mr.default)(n.getMinutes(), 2),
          m = (0, mr.default)(n.getSeconds(), 2),
          q = u === "" ? "" : " ";
        u = ""
          .concat(u)
          .concat(q)
          .concat(v)
          .concat(l)
          .concat(p)
          .concat(l)
          .concat(m);
      }
      return u;
    }
    mb.exports = bu.default;
  });
  var qb = g((xu, yb) => {
    "use strict";
    var xb = _().default;
    Object.defineProperty(xu, "__esModule", { value: !0 });
    xu.default = uL;
    var aL = xb(De()),
      sL = xb(x());
    function uL(r) {
      if (((0, sL.default)(1, arguments), (0, aL.default)(r) !== "object"))
        throw new Error("Duration must be an object");
      var e = r.years,
        t = e === void 0 ? 0 : e,
        i = r.months,
        n = i === void 0 ? 0 : i,
        a = r.days,
        s = a === void 0 ? 0 : a,
        u = r.hours,
        o = u === void 0 ? 0 : u,
        l = r.minutes,
        d = l === void 0 ? 0 : l,
        c = r.seconds,
        h = c === void 0 ? 0 : c;
      return "P"
        .concat(t, "Y")
        .concat(n, "M")
        .concat(s, "DT")
        .concat(o, "H")
        .concat(d, "M")
        .concat(h, "S");
    }
    yb.exports = xu.default;
  });
  var Pb = g((qu, Ob) => {
    "use strict";
    var yu = _().default;
    Object.defineProperty(qu, "__esModule", { value: !0 });
    qu.default = fL;
    var oL = yu(T()),
      lL = yu(et()),
      mt = yu(Nt()),
      dL = yu(F());
    function fL(r, e) {
      var t;
      if (arguments.length < 1)
        throw new TypeError(
          "1 arguments required, but only ".concat(arguments.length, " present")
        );
      var i = (0, oL.default)(r);
      if (!(0, lL.default)(i)) throw new RangeError("Invalid time value");
      var n = Number(
        (t = e == null ? void 0 : e.fractionDigits) !== null && t !== void 0
          ? t
          : 0
      );
      if (!(n >= 0 && n <= 3))
        throw new RangeError(
          "fractionDigits must be between 0 and 3 inclusively"
        );
      var a = (0, mt.default)(i.getDate(), 2),
        s = (0, mt.default)(i.getMonth() + 1, 2),
        u = i.getFullYear(),
        o = (0, mt.default)(i.getHours(), 2),
        l = (0, mt.default)(i.getMinutes(), 2),
        d = (0, mt.default)(i.getSeconds(), 2),
        c = "";
      if (n > 0) {
        var h = i.getMilliseconds(),
          v = Math.floor(h * Math.pow(10, n - 3));
        c = "." + (0, mt.default)(v, n);
      }
      var p = "",
        m = i.getTimezoneOffset();
      if (m !== 0) {
        var q = Math.abs(m),
          O = (0, mt.default)((0, dL.default)(q / 60), 2),
          P = (0, mt.default)(q % 60, 2),
          w = m < 0 ? "+" : "-";
        p = "".concat(w).concat(O, ":").concat(P);
      } else p = "Z";
      return ""
        .concat(u, "-")
        .concat(s, "-")
        .concat(a, "T")
        .concat(o, ":")
        .concat(l, ":")
        .concat(d)
        .concat(c)
        .concat(p);
    }
    Ob.exports = qu.default;
  });
  var Db = g((Pu, Mb) => {
    "use strict";
    var hh = _().default;
    Object.defineProperty(Pu, "__esModule", { value: !0 });
    Pu.default = pL;
    var cL = hh(T()),
      hL = hh(et()),
      Ou = hh(Nt()),
      vL = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      gL = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    function pL(r) {
      if (arguments.length < 1)
        throw new TypeError(
          "1 arguments required, but only ".concat(arguments.length, " present")
        );
      var e = (0, cL.default)(r);
      if (!(0, hL.default)(e)) throw new RangeError("Invalid time value");
      var t = vL[e.getUTCDay()],
        i = (0, Ou.default)(e.getUTCDate(), 2),
        n = gL[e.getUTCMonth()],
        a = e.getUTCFullYear(),
        s = (0, Ou.default)(e.getUTCHours(), 2),
        u = (0, Ou.default)(e.getUTCMinutes(), 2),
        o = (0, Ou.default)(e.getUTCSeconds(), 2);
      return ""
        .concat(t, ", ")
        .concat(i, " ")
        .concat(n, " ")
        .concat(a, " ")
        .concat(s, ":")
        .concat(u, ":")
        .concat(o, " GMT");
    }
    Mb.exports = Pu.default;
  });
  var Cb = g((Mu, Sb) => {
    "use strict";
    var bt = _().default;
    Object.defineProperty(Mu, "__esModule", { value: !0 });
    Mu.default = OL;
    var _L = le(),
      mL = bt(Je()),
      bL = bt(sh()),
      xL = bt(Wt()),
      wb = bt(hr()),
      Tb = bt(T()),
      kb = bt(We()),
      yL = bt(x()),
      qL = bt(F());
    function OL(r, e, t) {
      var i, n, a, s, u, o, l, d, c, h;
      (0, yL.default)(2, arguments);
      var v = (0, Tb.default)(r),
        p = (0, Tb.default)(e),
        m = (0, _L.getDefaultOptions)(),
        q =
          (i =
            (n = t == null ? void 0 : t.locale) !== null && n !== void 0
              ? n
              : m.locale) !== null && i !== void 0
            ? i
            : xL.default,
        O = (0, qL.default)(
          (a =
            (s =
              (u =
                (o = t == null ? void 0 : t.weekStartsOn) !== null &&
                o !== void 0
                  ? o
                  : t == null ||
                    (l = t.locale) === null ||
                    l === void 0 ||
                    (d = l.options) === null ||
                    d === void 0
                  ? void 0
                  : d.weekStartsOn) !== null && u !== void 0
                ? u
                : m.weekStartsOn) !== null && s !== void 0
              ? s
              : (c = m.locale) === null ||
                c === void 0 ||
                (h = c.options) === null ||
                h === void 0
              ? void 0
              : h.weekStartsOn) !== null && a !== void 0
            ? a
            : 0
        );
      if (!q.localize)
        throw new RangeError("locale must contain localize property");
      if (!q.formatLong)
        throw new RangeError("locale must contain formatLong property");
      if (!q.formatRelative)
        throw new RangeError("locale must contain formatRelative property");
      var P = (0, mL.default)(v, p);
      if (isNaN(P)) throw new RangeError("Invalid time value");
      var w;
      P < -6
        ? (w = "other")
        : P < -1
        ? (w = "lastWeek")
        : P < 0
        ? (w = "yesterday")
        : P < 1
        ? (w = "today")
        : P < 2
        ? (w = "tomorrow")
        : P < 7
        ? (w = "nextWeek")
        : (w = "other");
      var C = (0, wb.default)(v, (0, kb.default)(v)),
        k = (0, wb.default)(p, (0, kb.default)(p)),
        R = q.formatRelative(w, C, k, { locale: q, weekStartsOn: O });
      return (0, bL.default)(v, R, { locale: q, weekStartsOn: O });
    }
    Sb.exports = Mu.default;
  });
  var Ib = g((Du, Rb) => {
    "use strict";
    var vh = _().default;
    Object.defineProperty(Du, "__esModule", { value: !0 });
    Du.default = wL;
    var PL = vh(T()),
      ML = vh(F()),
      DL = vh(x());
    function wL(r) {
      (0, DL.default)(1, arguments);
      var e = (0, ML.default)(r);
      return (0, PL.default)(e * 1e3);
    }
    Rb.exports = Du.default;
  });
  var gh = g((wu, Ab) => {
    "use strict";
    var jb = _().default;
    Object.defineProperty(wu, "__esModule", { value: !0 });
    wu.default = SL;
    var TL = jb(T()),
      kL = jb(x());
    function SL(r) {
      (0, kL.default)(1, arguments);
      var e = (0, TL.default)(r),
        t = e.getDate();
      return t;
    }
    Ab.exports = wu.default;
  });
  var Ti = g((Tu, Nb) => {
    "use strict";
    var Eb = _().default;
    Object.defineProperty(Tu, "__esModule", { value: !0 });
    Tu.default = IL;
    var CL = Eb(T()),
      RL = Eb(x());
    function IL(r) {
      (0, RL.default)(1, arguments);
      var e = (0, CL.default)(r),
        t = e.getDay();
      return t;
    }
    Nb.exports = Tu.default;
  });
  var Fb = g((Su, Lb) => {
    "use strict";
    var ku = _().default;
    Object.defineProperty(Su, "__esModule", { value: !0 });
    Su.default = LL;
    var jL = ku(T()),
      AL = ku(Ms()),
      EL = ku(Je()),
      NL = ku(x());
    function LL(r) {
      (0, NL.default)(1, arguments);
      var e = (0, jL.default)(r),
        t = (0, EL.default)(e, (0, AL.default)(e)),
        i = t + 1;
      return i;
    }
    Lb.exports = Su.default;
  });
  var ph = g((Cu, Yb) => {
    "use strict";
    var Wb = _().default;
    Object.defineProperty(Cu, "__esModule", { value: !0 });
    Cu.default = YL;
    var FL = Wb(T()),
      WL = Wb(x());
    function YL(r) {
      (0, WL.default)(1, arguments);
      var e = (0, FL.default)(r),
        t = e.getFullYear(),
        i = e.getMonth(),
        n = new Date(0);
      return n.setFullYear(t, i + 1, 0), n.setHours(0, 0, 0, 0), n.getDate();
    }
    Yb.exports = Cu.default;
  });
  var _h = g((Ru, zb) => {
    "use strict";
    var Hb = _().default;
    Object.defineProperty(Ru, "__esModule", { value: !0 });
    Ru.default = BL;
    var HL = Hb(T()),
      zL = Hb(x());
    function BL(r) {
      (0, zL.default)(1, arguments);
      var e = (0, HL.default)(r),
        t = e.getFullYear();
      return t % 400 === 0 || (t % 4 === 0 && t % 100 !== 0);
    }
    zb.exports = Ru.default;
  });
  var Ub = g((Iu, Bb) => {
    "use strict";
    var mh = _().default;
    Object.defineProperty(Iu, "__esModule", { value: !0 });
    Iu.default = QL;
    var UL = mh(T()),
      VL = mh(_h()),
      $L = mh(x());
    function QL(r) {
      (0, $L.default)(1, arguments);
      var e = (0, UL.default)(r);
      return String(new Date(e)) === "Invalid Date"
        ? NaN
        : (0, VL.default)(e)
        ? 366
        : 365;
    }
    Bb.exports = Iu.default;
  });
  var Qb = g((ju, $b) => {
    "use strict";
    var Vb = _().default;
    Object.defineProperty(ju, "__esModule", { value: !0 });
    ju.default = GL;
    var XL = Vb(T()),
      KL = Vb(x());
    function GL(r) {
      (0, KL.default)(1, arguments);
      var e = (0, XL.default)(r),
        t = e.getFullYear(),
        i = Math.floor(t / 10) * 10;
      return i;
    }
    $b.exports = ju.default;
  });
  var Kb = g((Au, Xb) => {
    "use strict";
    var ZL = _().default;
    Object.defineProperty(Au, "__esModule", { value: !0 });
    Au.default = tF;
    var JL = le(),
      eF = ZL(_r());
    function tF() {
      return (0, eF.default)({}, (0, JL.getDefaultOptions)());
    }
    Xb.exports = Au.default;
  });
  var Jb = g((Eu, Zb) => {
    "use strict";
    var Gb = _().default;
    Object.defineProperty(Eu, "__esModule", { value: !0 });
    Eu.default = nF;
    var rF = Gb(T()),
      iF = Gb(x());
    function nF(r) {
      (0, iF.default)(1, arguments);
      var e = (0, rF.default)(r),
        t = e.getHours();
      return t;
    }
    Zb.exports = Eu.default;
  });
  var bh = g((Nu, tx) => {
    "use strict";
    var ex = _().default;
    Object.defineProperty(Nu, "__esModule", { value: !0 });
    Nu.default = uF;
    var aF = ex(T()),
      sF = ex(x());
    function uF(r) {
      (0, sF.default)(1, arguments);
      var e = (0, aF.default)(r),
        t = e.getDay();
      return t === 0 && (t = 7), t;
    }
    tx.exports = Nu.default;
  });
  var xh = g((Fu, rx) => {
    "use strict";
    var Lu = _().default;
    Object.defineProperty(Fu, "__esModule", { value: !0 });
    Fu.default = hF;
    var oF = Lu(T()),
      lF = Lu(ct()),
      dF = Lu(fr()),
      fF = Lu(x()),
      cF = 6048e5;
    function hF(r) {
      (0, fF.default)(1, arguments);
      var e = (0, oF.default)(r),
        t = (0, lF.default)(e).getTime() - (0, dF.default)(e).getTime();
      return Math.round(t / cF) + 1;
    }
    rx.exports = Fu.default;
  });
  var ax = g((Wu, nx) => {
    "use strict";
    var yh = _().default;
    Object.defineProperty(Wu, "__esModule", { value: !0 });
    Wu.default = _F;
    var ix = yh(fr()),
      vF = yh(ui()),
      gF = yh(x()),
      pF = 6048e5;
    function _F(r) {
      (0, gF.default)(1, arguments);
      var e = (0, ix.default)(r),
        t = (0, ix.default)((0, vF.default)(e, 60)),
        i = t.valueOf() - e.valueOf();
      return Math.round(i / pF);
    }
    nx.exports = Wu.default;
  });
  var ox = g((Yu, ux) => {
    "use strict";
    var sx = _().default;
    Object.defineProperty(Yu, "__esModule", { value: !0 });
    Yu.default = xF;
    var mF = sx(T()),
      bF = sx(x());
    function xF(r) {
      (0, bF.default)(1, arguments);
      var e = (0, mF.default)(r),
        t = e.getMilliseconds();
      return t;
    }
    ux.exports = Yu.default;
  });
  var fx = g((Hu, dx) => {
    "use strict";
    var lx = _().default;
    Object.defineProperty(Hu, "__esModule", { value: !0 });
    Hu.default = OF;
    var yF = lx(T()),
      qF = lx(x());
    function OF(r) {
      (0, qF.default)(1, arguments);
      var e = (0, yF.default)(r),
        t = e.getMinutes();
      return t;
    }
    dx.exports = Hu.default;
  });
  var vx = g((zu, hx) => {
    "use strict";
    var cx = _().default;
    Object.defineProperty(zu, "__esModule", { value: !0 });
    zu.default = DF;
    var PF = cx(T()),
      MF = cx(x());
    function DF(r) {
      (0, MF.default)(1, arguments);
      var e = (0, PF.default)(r),
        t = e.getMonth();
      return t;
    }
    hx.exports = zu.default;
  });
  var _x = g((Uu, px) => {
    "use strict";
    var gx = _().default;
    Object.defineProperty(Uu, "__esModule", { value: !0 });
    Uu.default = kF;
    var Bu = gx(T()),
      wF = gx(x()),
      TF = 24 * 60 * 60 * 1e3;
    function kF(r, e) {
      (0, wF.default)(2, arguments);
      var t = r || {},
        i = e || {},
        n = (0, Bu.default)(t.start).getTime(),
        a = (0, Bu.default)(t.end).getTime(),
        s = (0, Bu.default)(i.start).getTime(),
        u = (0, Bu.default)(i.end).getTime();
      if (!(n <= a && s <= u)) throw new RangeError("Invalid interval");
      var o = n < u && s < a;
      if (!o) return 0;
      var l = s < n ? n : s,
        d = u > a ? a : u,
        c = d - l;
      return Math.ceil(c / TF);
    }
    px.exports = Uu.default;
  });
  var xx = g((Vu, bx) => {
    "use strict";
    var mx = _().default;
    Object.defineProperty(Vu, "__esModule", { value: !0 });
    Vu.default = RF;
    var SF = mx(T()),
      CF = mx(x());
    function RF(r) {
      (0, CF.default)(1, arguments);
      var e = (0, SF.default)(r),
        t = e.getSeconds();
      return t;
    }
    bx.exports = Vu.default;
  });
  var qh = g(($u, qx) => {
    "use strict";
    var yx = _().default;
    Object.defineProperty($u, "__esModule", { value: !0 });
    $u.default = AF;
    var IF = yx(T()),
      jF = yx(x());
    function AF(r) {
      (0, jF.default)(1, arguments);
      var e = (0, IF.default)(r),
        t = e.getTime();
      return t;
    }
    qx.exports = $u.default;
  });
  var Mx = g((Qu, Px) => {
    "use strict";
    var Ox = _().default;
    Object.defineProperty(Qu, "__esModule", { value: !0 });
    Qu.default = LF;
    var EF = Ox(qh()),
      NF = Ox(x());
    function LF(r) {
      return (
        (0, NF.default)(1, arguments), Math.floor((0, EF.default)(r) / 1e3)
      );
    }
    Px.exports = Qu.default;
  });
  var Oh = g((Ku, wx) => {
    "use strict";
    var Xu = _().default;
    Object.defineProperty(Ku, "__esModule", { value: !0 });
    Ku.default = zF;
    var Dx = Xu(Ze()),
      FF = Xu(T()),
      WF = Xu(F()),
      YF = Xu(x()),
      HF = le();
    function zF(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, YF.default)(1, arguments);
      var d = (0, FF.default)(r),
        c = d.getFullYear(),
        h = (0, HF.getDefaultOptions)(),
        v = (0, WF.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.firstWeekContainsDate) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.firstWeekContainsDate) !== null && n !== void 0
                ? n
                : h.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : (o = h.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && t !== void 0
            ? t
            : 1
        );
      if (!(v >= 1 && v <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var p = new Date(0);
      p.setFullYear(c + 1, 0, v), p.setHours(0, 0, 0, 0);
      var m = (0, Dx.default)(p, e),
        q = new Date(0);
      q.setFullYear(c, 0, v), q.setHours(0, 0, 0, 0);
      var O = (0, Dx.default)(q, e);
      return d.getTime() >= m.getTime()
        ? c + 1
        : d.getTime() >= O.getTime()
        ? c
        : c - 1;
    }
    wx.exports = Ku.default;
  });
  var Ju = g((Zu, Tx) => {
    "use strict";
    var Gu = _().default;
    Object.defineProperty(Zu, "__esModule", { value: !0 });
    Zu.default = XF;
    var BF = Gu(Oh()),
      UF = Gu(Ze()),
      VF = Gu(F()),
      $F = Gu(x()),
      QF = le();
    function XF(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, $F.default)(1, arguments);
      var d = (0, QF.getDefaultOptions)(),
        c = (0, VF.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.firstWeekContainsDate) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.firstWeekContainsDate) !== null && n !== void 0
                ? n
                : d.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : (o = d.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && t !== void 0
            ? t
            : 1
        ),
        h = (0, BF.default)(r, e),
        v = new Date(0);
      v.setFullYear(h, 0, c), v.setHours(0, 0, 0, 0);
      var p = (0, UF.default)(v, e);
      return p;
    }
    Tx.exports = Zu.default;
  });
  var Ph = g((to, kx) => {
    "use strict";
    var eo = _().default;
    Object.defineProperty(to, "__esModule", { value: !0 });
    to.default = tW;
    var KF = eo(Ze()),
      GF = eo(Ju()),
      ZF = eo(T()),
      JF = eo(x()),
      eW = 6048e5;
    function tW(r, e) {
      (0, JF.default)(1, arguments);
      var t = (0, ZF.default)(r),
        i = (0, KF.default)(t, e).getTime() - (0, GF.default)(t, e).getTime();
      return Math.round(i / eW) + 1;
    }
    kx.exports = to.default;
  });
  var Cx = g((ro, Sx) => {
    "use strict";
    var ki = _().default;
    Object.defineProperty(ro, "__esModule", { value: !0 });
    ro.default = oW;
    var rW = le(),
      iW = ki(gh()),
      nW = ki(Ti()),
      aW = ki(hi()),
      sW = ki(x()),
      uW = ki(F());
    function oW(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, sW.default)(1, arguments);
      var d = (0, rW.getDefaultOptions)(),
        c = (0, uW.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.weekStartsOn) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.weekStartsOn) !== null && n !== void 0
                ? n
                : d.weekStartsOn) !== null && i !== void 0
              ? i
              : (o = d.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && t !== void 0
            ? t
            : 0
        );
      if (!(c >= 0 && c <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var h = (0, iW.default)(r);
      if (isNaN(h)) return NaN;
      var v = (0, nW.default)((0, aW.default)(r)),
        p = c - v;
      p <= 0 && (p += 7);
      var m = h - p;
      return Math.ceil(m / 7) + 1;
    }
    Sx.exports = ro.default;
  });
  var Mh = g((io, Ix) => {
    "use strict";
    var Rx = _().default;
    Object.defineProperty(io, "__esModule", { value: !0 });
    io.default = fW;
    var lW = Rx(T()),
      dW = Rx(x());
    function fW(r) {
      (0, dW.default)(1, arguments);
      var e = (0, lW.default)(r),
        t = e.getMonth();
      return (
        e.setFullYear(e.getFullYear(), t + 1, 0), e.setHours(0, 0, 0, 0), e
      );
    }
    Ix.exports = io.default;
  });
  var Ax = g((ao, jx) => {
    "use strict";
    var no = _().default;
    Object.defineProperty(ao, "__esModule", { value: !0 });
    ao.default = pW;
    var cW = no(ja()),
      hW = no(Mh()),
      vW = no(hi()),
      gW = no(x());
    function pW(r, e) {
      return (
        (0, gW.default)(1, arguments),
        (0, cW.default)((0, hW.default)(r), (0, vW.default)(r), e) + 1
      );
    }
    jx.exports = ao.default;
  });
  var Lx = g((so, Nx) => {
    "use strict";
    var Ex = _().default;
    Object.defineProperty(so, "__esModule", { value: !0 });
    so.default = bW;
    var _W = Ex(T()),
      mW = Ex(x());
    function bW(r) {
      return (0, mW.default)(1, arguments), (0, _W.default)(r).getFullYear();
    }
    Nx.exports = so.default;
  });
  var Wx = g((uo, Fx) => {
    "use strict";
    var xW = _().default;
    Object.defineProperty(uo, "__esModule", { value: !0 });
    uo.default = OW;
    var yW = xW(x()),
      qW = ae();
    function OW(r) {
      return (
        (0, yW.default)(1, arguments), Math.floor(r * qW.millisecondsInHour)
      );
    }
    Fx.exports = uo.default;
  });
  var Hx = g((oo, Yx) => {
    "use strict";
    var PW = _().default;
    Object.defineProperty(oo, "__esModule", { value: !0 });
    oo.default = wW;
    var MW = PW(x()),
      DW = ae();
    function wW(r) {
      return (0, MW.default)(1, arguments), Math.floor(r * DW.minutesInHour);
    }
    Yx.exports = oo.default;
  });
  var Bx = g((lo, zx) => {
    "use strict";
    var TW = _().default;
    Object.defineProperty(lo, "__esModule", { value: !0 });
    lo.default = CW;
    var kW = TW(x()),
      SW = ae();
    function CW(r) {
      return (0, kW.default)(1, arguments), Math.floor(r * SW.secondsInHour);
    }
    zx.exports = lo.default;
  });
  var $x = g((fo, Vx) => {
    "use strict";
    var Ye = _().default;
    Object.defineProperty(fo, "__esModule", { value: !0 });
    fo.default = WW;
    var RW = Ye(ht()),
      Si = Ye(Xf()),
      IW = Ye(La()),
      jW = Ye(Ya()),
      AW = Ye(Ua()),
      EW = Ye(fi()),
      NW = Ye(ci()),
      LW = Ye(Ac()),
      Ux = Ye(T()),
      FW = Ye(x());
    function WW(r) {
      (0, FW.default)(1, arguments);
      var e = (0, Ux.default)(r.start),
        t = (0, Ux.default)(r.end);
      if (isNaN(e.getTime())) throw new RangeError("Start Date is invalid");
      if (isNaN(t.getTime())) throw new RangeError("End Date is invalid");
      var i = {};
      i.years = Math.abs((0, LW.default)(t, e));
      var n = (0, RW.default)(t, e),
        a = (0, Si.default)(e, { years: n * i.years });
      i.months = Math.abs((0, EW.default)(t, a));
      var s = (0, Si.default)(a, { months: n * i.months });
      i.days = Math.abs((0, IW.default)(t, s));
      var u = (0, Si.default)(s, { days: n * i.days });
      i.hours = Math.abs((0, jW.default)(t, u));
      var o = (0, Si.default)(u, { hours: n * i.hours });
      i.minutes = Math.abs((0, AW.default)(t, o));
      var l = (0, Si.default)(o, { minutes: n * i.minutes });
      return (i.seconds = Math.abs((0, NW.default)(t, l))), i;
    }
    Vx.exports = fo.default;
  });
  var Xx = g((co, Qx) => {
    "use strict";
    var YW = _().default;
    Object.defineProperty(co, "__esModule", { value: !0 });
    co.default = zW;
    var HW = YW(x());
    function zW(r, e, t) {
      var i;
      (0, HW.default)(1, arguments);
      var n;
      return (
        BW(e) ? (n = e) : (t = e),
        new Intl.DateTimeFormat(
          (i = t) === null || i === void 0 ? void 0 : i.locale,
          n
        ).format(r)
      );
    }
    function BW(r) {
      return r !== void 0 && !("locale" in r);
    }
    Qx.exports = co.default;
  });
  var ry = g((ho, ty) => {
    "use strict";
    var He = _().default;
    Object.defineProperty(ho, "__esModule", { value: !0 });
    ho.default = VW;
    var Ht = ae(),
      Dh = He(Je()),
      Kx = He(Sa()),
      wh = He(Dc()),
      Gx = He(ja()),
      Th = He(Ea()),
      Zx = He(Ya()),
      Jx = He(Ua()),
      kh = He(ci()),
      ey = He(T()),
      UW = He(x());
    function VW(r, e, t) {
      (0, UW.default)(2, arguments);
      var i = 0,
        n,
        a = (0, ey.default)(r),
        s = (0, ey.default)(e);
      if (t != null && t.unit)
        (n = t == null ? void 0 : t.unit),
          n === "second"
            ? (i = (0, kh.default)(a, s))
            : n === "minute"
            ? (i = (0, Jx.default)(a, s))
            : n === "hour"
            ? (i = (0, Zx.default)(a, s))
            : n === "day"
            ? (i = (0, Dh.default)(a, s))
            : n === "week"
            ? (i = (0, Gx.default)(a, s))
            : n === "month"
            ? (i = (0, Kx.default)(a, s))
            : n === "quarter"
            ? (i = (0, wh.default)(a, s))
            : n === "year" && (i = (0, Th.default)(a, s));
      else {
        var u = (0, kh.default)(a, s);
        Math.abs(u) < Ht.secondsInMinute
          ? ((i = (0, kh.default)(a, s)), (n = "second"))
          : Math.abs(u) < Ht.secondsInHour
          ? ((i = (0, Jx.default)(a, s)), (n = "minute"))
          : Math.abs(u) < Ht.secondsInDay && Math.abs((0, Dh.default)(a, s)) < 1
          ? ((i = (0, Zx.default)(a, s)), (n = "hour"))
          : Math.abs(u) < Ht.secondsInWeek &&
            (i = (0, Dh.default)(a, s)) &&
            Math.abs(i) < 7
          ? (n = "day")
          : Math.abs(u) < Ht.secondsInMonth
          ? ((i = (0, Gx.default)(a, s)), (n = "week"))
          : Math.abs(u) < Ht.secondsInQuarter
          ? ((i = (0, Kx.default)(a, s)), (n = "month"))
          : Math.abs(u) < Ht.secondsInYear && (0, wh.default)(a, s) < 4
          ? ((i = (0, wh.default)(a, s)), (n = "quarter"))
          : ((i = (0, Th.default)(a, s)), (n = "year"));
      }
      var o = new Intl.RelativeTimeFormat(t == null ? void 0 : t.locale, {
        localeMatcher: t == null ? void 0 : t.localeMatcher,
        numeric: (t == null ? void 0 : t.numeric) || "auto",
        style: t == null ? void 0 : t.style,
      });
      return o.format(i, n);
    }
    ty.exports = ho.default;
  });
  var sy = g((vo, ay) => {
    "use strict";
    var ny = _().default;
    Object.defineProperty(vo, "__esModule", { value: !0 });
    vo.default = QW;
    var iy = ny(T()),
      $W = ny(x());
    function QW(r, e) {
      (0, $W.default)(2, arguments);
      var t = (0, iy.default)(r),
        i = (0, iy.default)(e);
      return t.getTime() > i.getTime();
    }
    ay.exports = vo.default;
  });
  var dy = g((go, ly) => {
    "use strict";
    var oy = _().default;
    Object.defineProperty(go, "__esModule", { value: !0 });
    go.default = KW;
    var uy = oy(T()),
      XW = oy(x());
    function KW(r, e) {
      (0, XW.default)(2, arguments);
      var t = (0, uy.default)(r),
        i = (0, uy.default)(e);
      return t.getTime() < i.getTime();
    }
    ly.exports = go.default;
  });
  var vy = g((po, hy) => {
    "use strict";
    var cy = _().default;
    Object.defineProperty(po, "__esModule", { value: !0 });
    po.default = ZW;
    var fy = cy(T()),
      GW = cy(x());
    function ZW(r, e) {
      (0, GW.default)(2, arguments);
      var t = (0, fy.default)(r),
        i = (0, fy.default)(e);
      return t.getTime() === i.getTime();
    }
    hy.exports = po.default;
  });
  var py = g((_o, gy) => {
    "use strict";
    Object.defineProperty(_o, "__esModule", { value: !0 });
    _o.default = JW;
    function JW(r, e, t) {
      if (arguments.length < 3)
        throw new TypeError(
          "3 argument required, but only " + arguments.length + " present"
        );
      var i = new Date(r, e, t);
      return i.getFullYear() === r && i.getMonth() === e && i.getDate() === t;
    }
    gy.exports = _o.default;
  });
  var by = g((mo, my) => {
    "use strict";
    var _y = _().default;
    Object.defineProperty(mo, "__esModule", { value: !0 });
    mo.default = rY;
    var eY = _y(T()),
      tY = _y(x());
    function rY(r) {
      return (0, tY.default)(1, arguments), (0, eY.default)(r).getDate() === 1;
    }
    my.exports = mo.default;
  });
  var qy = g((bo, yy) => {
    "use strict";
    var xy = _().default;
    Object.defineProperty(bo, "__esModule", { value: !0 });
    bo.default = aY;
    var iY = xy(T()),
      nY = xy(x());
    function aY(r) {
      return (0, nY.default)(1, arguments), (0, iY.default)(r).getDay() === 5;
    }
    yy.exports = bo.default;
  });
  var My = g((xo, Py) => {
    "use strict";
    var Oy = _().default;
    Object.defineProperty(xo, "__esModule", { value: !0 });
    xo.default = oY;
    var sY = Oy(T()),
      uY = Oy(x());
    function oY(r) {
      return (
        (0, uY.default)(1, arguments), (0, sY.default)(r).getTime() > Date.now()
      );
    }
    Py.exports = xo.default;
  });
  var Dy = g((qie, Ci) => {
    function lY(r, e) {
      (e == null || e > r.length) && (e = r.length);
      for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
      return i;
    }
    (Ci.exports = lY),
      (Ci.exports.__esModule = !0),
      (Ci.exports.default = Ci.exports);
  });
  var Ty = g((Oie, Ri) => {
    var wy = Dy();
    function dY(r, e) {
      if (!!r) {
        if (typeof r == "string") return wy(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        if (
          (t === "Object" && r.constructor && (t = r.constructor.name),
          t === "Map" || t === "Set")
        )
          return Array.from(r);
        if (
          t === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        )
          return wy(r, e);
      }
    }
    (Ri.exports = dY),
      (Ri.exports.__esModule = !0),
      (Ri.exports.default = Ri.exports);
  });
  var ky = g((Pie, Ii) => {
    var fY = Ty();
    function cY(r, e) {
      var t =
        (typeof Symbol != "undefined" && r[Symbol.iterator]) || r["@@iterator"];
      if (!t) {
        if (
          Array.isArray(r) ||
          (t = fY(r)) ||
          (e && r && typeof r.length == "number")
        ) {
          t && (r = t);
          var i = 0,
            n = function () {};
          return {
            s: n,
            n: function () {
              return i >= r.length ? { done: !0 } : { done: !1, value: r[i++] };
            },
            e: function (l) {
              throw l;
            },
            f: n,
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var a = !0,
        s = !1,
        u;
      return {
        s: function () {
          t = t.call(r);
        },
        n: function () {
          var l = t.next();
          return (a = l.done), l;
        },
        e: function (l) {
          (s = !0), (u = l);
        },
        f: function () {
          try {
            !a && t.return != null && t.return();
          } finally {
            if (s) throw u;
          }
        },
      };
    }
    (Ii.exports = cY),
      (Ii.exports.__esModule = !0),
      (Ii.exports.default = Ii.exports);
  });
  var K = g((Mie, ji) => {
    function hY(r) {
      if (r === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return r;
    }
    (ji.exports = hY),
      (ji.exports.__esModule = !0),
      (ji.exports.default = ji.exports);
  });
  var Sy = g((Die, it) => {
    function Sh(r, e) {
      return (
        (it.exports = Sh =
          Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (i, n) {
                return (i.__proto__ = n), i;
              }),
        (it.exports.__esModule = !0),
        (it.exports.default = it.exports),
        Sh(r, e)
      );
    }
    (it.exports = Sh),
      (it.exports.__esModule = !0),
      (it.exports.default = it.exports);
  });
  var ee = g((wie, Ai) => {
    var vY = Sy();
    function gY(r, e) {
      if (typeof e != "function" && e !== null)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (r.prototype = Object.create(e && e.prototype, {
        constructor: { value: r, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        e && vY(r, e);
    }
    (Ai.exports = gY),
      (Ai.exports.__esModule = !0),
      (Ai.exports.default = Ai.exports);
  });
  var Cy = g((Tie, nt) => {
    function Ch(r) {
      return (
        (nt.exports = Ch =
          Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
        (nt.exports.__esModule = !0),
        (nt.exports.default = nt.exports),
        Ch(r)
      );
    }
    (nt.exports = Ch),
      (nt.exports.__esModule = !0),
      (nt.exports.default = nt.exports);
  });
  var Ry = g((kie, Ei) => {
    function pY() {
      if (
        typeof Reflect == "undefined" ||
        !Reflect.construct ||
        Reflect.construct.sham
      )
        return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (r) {
        return !1;
      }
    }
    (Ei.exports = pY),
      (Ei.exports.__esModule = !0),
      (Ei.exports.default = Ei.exports);
  });
  var Iy = g((Sie, Ni) => {
    var _Y = De().default,
      mY = K();
    function bY(r, e) {
      if (e && (_Y(e) === "object" || typeof e == "function")) return e;
      if (e !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return mY(r);
    }
    (Ni.exports = bY),
      (Ni.exports.__esModule = !0),
      (Ni.exports.default = Ni.exports);
  });
  var te = g((Cie, Li) => {
    var jy = Cy(),
      xY = Ry(),
      yY = Iy();
    function qY(r) {
      var e = xY();
      return function () {
        var i = jy(r),
          n;
        if (e) {
          var a = jy(this).constructor;
          n = Reflect.construct(i, arguments, a);
        } else n = i.apply(this, arguments);
        return yY(this, n);
      };
    }
    (Li.exports = qY),
      (Li.exports.__esModule = !0),
      (Li.exports.default = Li.exports);
  });
  var G = g((Rie, Fi) => {
    function OY(r, e) {
      if (!(r instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    (Fi.exports = OY),
      (Fi.exports.__esModule = !0),
      (Fi.exports.default = Fi.exports);
  });
  var Ey = g((Iie, Wi) => {
    var Ay = De().default;
    function PY(r, e) {
      if (Ay(r) !== "object" || r === null) return r;
      var t = r[Symbol.toPrimitive];
      if (t !== void 0) {
        var i = t.call(r, e || "default");
        if (Ay(i) !== "object") return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(r);
    }
    (Wi.exports = PY),
      (Wi.exports.__esModule = !0),
      (Wi.exports.default = Wi.exports);
  });
  var Rh = g((jie, Yi) => {
    var MY = De().default,
      DY = Ey();
    function wY(r) {
      var e = DY(r, "string");
      return MY(e) === "symbol" ? e : String(e);
    }
    (Yi.exports = wY),
      (Yi.exports.__esModule = !0),
      (Yi.exports.default = Yi.exports);
  });
  var Z = g((Aie, Hi) => {
    var TY = Rh();
    function Ny(r, e) {
      for (var t = 0; t < e.length; t++) {
        var i = e[t];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(r, TY(i.key), i);
      }
    }
    function kY(r, e, t) {
      return (
        e && Ny(r.prototype, e),
        t && Ny(r, t),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
    }
    (Hi.exports = kY),
      (Hi.exports.__esModule = !0),
      (Hi.exports.default = Hi.exports);
  });
  var J = g((Eie, zi) => {
    var SY = Rh();
    function CY(r, e, t) {
      return (
        (e = SY(e)),
        e in r
          ? Object.defineProperty(r, e, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[e] = t),
        r
      );
    }
    (zi.exports = CY),
      (zi.exports.__esModule = !0),
      (zi.exports.default = zi.exports);
  });
  var Eh = g((xt) => {
    "use strict";
    var br = _().default;
    Object.defineProperty(xt, "__esModule", { value: !0 });
    xt.ValueSetter = xt.Setter = xt.DateToSystemTimezoneSetter = void 0;
    var Ly = br(K()),
      Fy = br(ee()),
      Wy = br(te()),
      Ih = br(G()),
      jh = br(Z()),
      yo = br(J()),
      RY = 10,
      Ah = (function () {
        function r() {
          (0, Ih.default)(this, r),
            (0, yo.default)(this, "priority", void 0),
            (0, yo.default)(this, "subPriority", 0);
        }
        return (
          (0, jh.default)(r, [
            {
              key: "validate",
              value: function (t, i) {
                return !0;
              },
            },
          ]),
          r
        );
      })();
    xt.Setter = Ah;
    var IY = (function (r) {
      (0, Fy.default)(t, r);
      var e = (0, Wy.default)(t);
      function t(i, n, a, s, u) {
        var o;
        return (
          (0, Ih.default)(this, t),
          (o = e.call(this)),
          (o.value = i),
          (o.validateValue = n),
          (o.setValue = a),
          (o.priority = s),
          u && (o.subPriority = u),
          o
        );
      }
      return (
        (0, jh.default)(t, [
          {
            key: "validate",
            value: function (n, a) {
              return this.validateValue(n, this.value, a);
            },
          },
          {
            key: "set",
            value: function (n, a, s) {
              return this.setValue(n, a, this.value, s);
            },
          },
        ]),
        t
      );
    })(Ah);
    xt.ValueSetter = IY;
    var jY = (function (r) {
      (0, Fy.default)(t, r);
      var e = (0, Wy.default)(t);
      function t() {
        var i;
        (0, Ih.default)(this, t);
        for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
          a[s] = arguments[s];
        return (
          (i = e.call.apply(e, [this].concat(a))),
          (0, yo.default)((0, Ly.default)(i), "priority", RY),
          (0, yo.default)((0, Ly.default)(i), "subPriority", -1),
          i
        );
      }
      return (
        (0, jh.default)(t, [
          {
            key: "set",
            value: function (n, a) {
              if (a.timestampIsSet) return n;
              var s = new Date(0);
              return (
                s.setFullYear(
                  n.getUTCFullYear(),
                  n.getUTCMonth(),
                  n.getUTCDate()
                ),
                s.setHours(
                  n.getUTCHours(),
                  n.getUTCMinutes(),
                  n.getUTCSeconds(),
                  n.getUTCMilliseconds()
                ),
                s
              );
            },
          },
        ]),
        t
      );
    })(Ah);
    xt.DateToSystemTimezoneSetter = jY;
  });
  var ie = g((qo) => {
    "use strict";
    var Lh = _().default;
    Object.defineProperty(qo, "__esModule", { value: !0 });
    qo.Parser = void 0;
    var AY = Lh(G()),
      EY = Lh(Z()),
      Nh = Lh(J()),
      NY = Eh(),
      LY = (function () {
        function r() {
          (0, AY.default)(this, r),
            (0, Nh.default)(this, "incompatibleTokens", void 0),
            (0, Nh.default)(this, "priority", void 0),
            (0, Nh.default)(this, "subPriority", void 0);
        }
        return (
          (0, EY.default)(r, [
            {
              key: "run",
              value: function (t, i, n, a) {
                var s = this.parse(t, i, n, a);
                return s
                  ? {
                      setter: new NY.ValueSetter(
                        s.value,
                        this.validate,
                        this.set,
                        this.priority,
                        this.subPriority
                      ),
                      rest: s.rest,
                    }
                  : null;
              },
            },
            {
              key: "validate",
              value: function (t, i, n) {
                return !0;
              },
            },
          ]),
          r
        );
      })();
    qo.Parser = LY;
  });
  var zy = g((Oo) => {
    "use strict";
    var xr = _().default;
    Object.defineProperty(Oo, "__esModule", { value: !0 });
    Oo.EraParser = void 0;
    var FY = xr(G()),
      WY = xr(Z()),
      Yy = xr(K()),
      YY = xr(ee()),
      HY = xr(te()),
      Hy = xr(J()),
      zY = ie(),
      BY = (function (r) {
        (0, YY.default)(t, r);
        var e = (0, HY.default)(t);
        function t() {
          var i;
          (0, FY.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Hy.default)((0, Yy.default)(i), "priority", 140),
            (0, Hy.default)((0, Yy.default)(i), "incompatibleTokens", [
              "R",
              "u",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, WY.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "G":
                  case "GG":
                  case "GGG":
                    return (
                      s.era(n, { width: "abbreviated" }) ||
                      s.era(n, { width: "narrow" })
                    );
                  case "GGGGG":
                    return s.era(n, { width: "narrow" });
                  case "GGGG":
                  default:
                    return (
                      s.era(n, { width: "wide" }) ||
                      s.era(n, { width: "abbreviated" }) ||
                      s.era(n, { width: "narrow" })
                    );
                }
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (
                  (a.era = s),
                  n.setUTCFullYear(s, 0, 1),
                  n.setUTCHours(0, 0, 0, 0),
                  n
                );
              },
            },
          ]),
          t
        );
      })(zY.Parser);
    Oo.EraParser = BY;
  });
  var pe = g((yr) => {
    "use strict";
    Object.defineProperty(yr, "__esModule", { value: !0 });
    yr.timezonePatterns = yr.numericPatterns = void 0;
    var UY = {
      month: /^(1[0-2]|0?\d)/,
      date: /^(3[0-1]|[0-2]?\d)/,
      dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      week: /^(5[0-3]|[0-4]?\d)/,
      hour23h: /^(2[0-3]|[0-1]?\d)/,
      hour24h: /^(2[0-4]|[0-1]?\d)/,
      hour11h: /^(1[0-1]|0?\d)/,
      hour12h: /^(1[0-2]|0?\d)/,
      minute: /^[0-5]?\d/,
      second: /^[0-5]?\d/,
      singleDigit: /^\d/,
      twoDigits: /^\d{1,2}/,
      threeDigits: /^\d{1,3}/,
      fourDigits: /^\d{1,4}/,
      anyDigitsSigned: /^-?\d+/,
      singleDigitSigned: /^-?\d/,
      twoDigitsSigned: /^-?\d{1,2}/,
      threeDigitsSigned: /^-?\d{1,3}/,
      fourDigitsSigned: /^-?\d{1,4}/,
    };
    yr.numericPatterns = UY;
    var VY = {
      basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
      basic: /^([+-])(\d{2})(\d{2})|Z/,
      basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
      extended: /^([+-])(\d{2}):(\d{2})|Z/,
      extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
    };
    yr.timezonePatterns = VY;
  });
  var ne = g((je) => {
    "use strict";
    Object.defineProperty(je, "__esModule", { value: !0 });
    je.dayPeriodEnumToHours = ZY;
    je.isLeapYearIndex = eH;
    je.mapValue = $Y;
    je.normalizeTwoDigitYear = JY;
    je.parseAnyDigitsSigned = XY;
    je.parseNDigits = KY;
    je.parseNDigitsSigned = GY;
    je.parseNumericPattern = ke;
    je.parseTimezonePattern = QY;
    var Fh = ae(),
      at = pe();
    function $Y(r, e) {
      return r && { value: e(r.value), rest: r.rest };
    }
    function ke(r, e) {
      var t = e.match(r);
      return t
        ? { value: parseInt(t[0], 10), rest: e.slice(t[0].length) }
        : null;
    }
    function QY(r, e) {
      var t = e.match(r);
      if (!t) return null;
      if (t[0] === "Z") return { value: 0, rest: e.slice(1) };
      var i = t[1] === "+" ? 1 : -1,
        n = t[2] ? parseInt(t[2], 10) : 0,
        a = t[3] ? parseInt(t[3], 10) : 0,
        s = t[5] ? parseInt(t[5], 10) : 0;
      return {
        value:
          i *
          (n * Fh.millisecondsInHour +
            a * Fh.millisecondsInMinute +
            s * Fh.millisecondsInSecond),
        rest: e.slice(t[0].length),
      };
    }
    function XY(r) {
      return ke(at.numericPatterns.anyDigitsSigned, r);
    }
    function KY(r, e) {
      switch (r) {
        case 1:
          return ke(at.numericPatterns.singleDigit, e);
        case 2:
          return ke(at.numericPatterns.twoDigits, e);
        case 3:
          return ke(at.numericPatterns.threeDigits, e);
        case 4:
          return ke(at.numericPatterns.fourDigits, e);
        default:
          return ke(new RegExp("^\\d{1," + r + "}"), e);
      }
    }
    function GY(r, e) {
      switch (r) {
        case 1:
          return ke(at.numericPatterns.singleDigitSigned, e);
        case 2:
          return ke(at.numericPatterns.twoDigitsSigned, e);
        case 3:
          return ke(at.numericPatterns.threeDigitsSigned, e);
        case 4:
          return ke(at.numericPatterns.fourDigitsSigned, e);
        default:
          return ke(new RegExp("^-?\\d{1," + r + "}"), e);
      }
    }
    function ZY(r) {
      switch (r) {
        case "morning":
          return 4;
        case "evening":
          return 17;
        case "pm":
        case "noon":
        case "afternoon":
          return 12;
        case "am":
        case "midnight":
        case "night":
        default:
          return 0;
      }
    }
    function JY(r, e) {
      var t = e > 0,
        i = t ? e : 1 - e,
        n;
      if (i <= 50) n = r || 100;
      else {
        var a = i + 50,
          s = Math.floor(a / 100) * 100,
          u = r >= a % 100;
        n = r + s - (u ? 100 : 0);
      }
      return t ? n : 1 - n;
    }
    function eH(r) {
      return r % 400 === 0 || (r % 4 === 0 && r % 100 !== 0);
    }
  });
  var Vy = g((Po) => {
    "use strict";
    var Or = _().default;
    Object.defineProperty(Po, "__esModule", { value: !0 });
    Po.YearParser = void 0;
    var tH = Or(G()),
      rH = Or(Z()),
      By = Or(K()),
      iH = Or(ee()),
      nH = Or(te()),
      Uy = Or(J()),
      aH = ie(),
      qr = ne(),
      sH = (function (r) {
        (0, iH.default)(t, r);
        var e = (0, nH.default)(t);
        function t() {
          var i;
          (0, tH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Uy.default)((0, By.default)(i), "priority", 130),
            (0, Uy.default)((0, By.default)(i), "incompatibleTokens", [
              "Y",
              "R",
              "u",
              "w",
              "I",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, rH.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                var u = function (l) {
                  return { year: l, isTwoDigitYear: a === "yy" };
                };
                switch (a) {
                  case "y":
                    return (0, qr.mapValue)((0, qr.parseNDigits)(4, n), u);
                  case "yo":
                    return (0, qr.mapValue)(
                      s.ordinalNumber(n, { unit: "year" }),
                      u
                    );
                  default:
                    return (0, qr.mapValue)(
                      (0, qr.parseNDigits)(a.length, n),
                      u
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a.isTwoDigitYear || a.year > 0;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                var u = n.getUTCFullYear();
                if (s.isTwoDigitYear) {
                  var o = (0, qr.normalizeTwoDigitYear)(s.year, u);
                  return (
                    n.setUTCFullYear(o, 0, 1), n.setUTCHours(0, 0, 0, 0), n
                  );
                }
                var l = !("era" in a) || a.era === 1 ? s.year : 1 - s.year;
                return n.setUTCFullYear(l, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(aH.Parser);
    Po.YearParser = sH;
  });
  var Ky = g((Mo) => {
    "use strict";
    var yt = _().default;
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    Mo.LocalWeekYearParser = void 0;
    var uH = yt(G()),
      oH = yt(Z()),
      $y = yt(K()),
      lH = yt(ee()),
      dH = yt(te()),
      Qy = yt(J()),
      fH = ie(),
      Pr = ne(),
      cH = yt(Ks()),
      Xy = yt(gr()),
      hH = (function (r) {
        (0, lH.default)(t, r);
        var e = (0, dH.default)(t);
        function t() {
          var i;
          (0, uH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Qy.default)((0, $y.default)(i), "priority", 130),
            (0, Qy.default)((0, $y.default)(i), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "Q",
              "q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "i",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, oH.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                var u = function (l) {
                  return { year: l, isTwoDigitYear: a === "YY" };
                };
                switch (a) {
                  case "Y":
                    return (0, Pr.mapValue)((0, Pr.parseNDigits)(4, n), u);
                  case "Yo":
                    return (0, Pr.mapValue)(
                      s.ordinalNumber(n, { unit: "year" }),
                      u
                    );
                  default:
                    return (0, Pr.mapValue)(
                      (0, Pr.parseNDigits)(a.length, n),
                      u
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a.isTwoDigitYear || a.year > 0;
              },
            },
            {
              key: "set",
              value: function (n, a, s, u) {
                var o = (0, cH.default)(n, u);
                if (s.isTwoDigitYear) {
                  var l = (0, Pr.normalizeTwoDigitYear)(s.year, o);
                  return (
                    n.setUTCFullYear(l, 0, u.firstWeekContainsDate),
                    n.setUTCHours(0, 0, 0, 0),
                    (0, Xy.default)(n, u)
                  );
                }
                var d = !("era" in a) || a.era === 1 ? s.year : 1 - s.year;
                return (
                  n.setUTCFullYear(d, 0, u.firstWeekContainsDate),
                  n.setUTCHours(0, 0, 0, 0),
                  (0, Xy.default)(n, u)
                );
              },
            },
          ]),
          t
        );
      })(fH.Parser);
    Mo.LocalWeekYearParser = hH;
  });
  var eq = g((Do) => {
    "use strict";
    var zt = _().default;
    Object.defineProperty(Do, "__esModule", { value: !0 });
    Do.ISOWeekYearParser = void 0;
    var vH = zt(G()),
      gH = zt(Z()),
      Gy = zt(K()),
      pH = zt(ee()),
      _H = zt(te()),
      Zy = zt(J()),
      mH = ie(),
      Jy = ne(),
      bH = zt(vr()),
      xH = (function (r) {
        (0, pH.default)(t, r);
        var e = (0, _H.default)(t);
        function t() {
          var i;
          (0, vH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Zy.default)((0, Gy.default)(i), "priority", 130),
            (0, Zy.default)((0, Gy.default)(i), "incompatibleTokens", [
              "G",
              "y",
              "Y",
              "u",
              "Q",
              "q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, gH.default)(t, [
            {
              key: "parse",
              value: function (n, a) {
                return a === "R"
                  ? (0, Jy.parseNDigitsSigned)(4, n)
                  : (0, Jy.parseNDigitsSigned)(a.length, n);
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                var u = new Date(0);
                return (
                  u.setUTCFullYear(s, 0, 4),
                  u.setUTCHours(0, 0, 0, 0),
                  (0, bH.default)(u)
                );
              },
            },
          ]),
          t
        );
      })(mH.Parser);
    Do.ISOWeekYearParser = xH;
  });
  var nq = g((wo) => {
    "use strict";
    var Mr = _().default;
    Object.defineProperty(wo, "__esModule", { value: !0 });
    wo.ExtendedYearParser = void 0;
    var yH = Mr(G()),
      qH = Mr(Z()),
      tq = Mr(K()),
      OH = Mr(ee()),
      PH = Mr(te()),
      rq = Mr(J()),
      MH = ie(),
      iq = ne(),
      DH = (function (r) {
        (0, OH.default)(t, r);
        var e = (0, PH.default)(t);
        function t() {
          var i;
          (0, yH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, rq.default)((0, tq.default)(i), "priority", 130),
            (0, rq.default)((0, tq.default)(i), "incompatibleTokens", [
              "G",
              "y",
              "Y",
              "R",
              "w",
              "I",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, qH.default)(t, [
            {
              key: "parse",
              value: function (n, a) {
                return a === "u"
                  ? (0, iq.parseNDigitsSigned)(4, n)
                  : (0, iq.parseNDigitsSigned)(a.length, n);
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCFullYear(s, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(MH.Parser);
    wo.ExtendedYearParser = DH;
  });
  var uq = g((To) => {
    "use strict";
    var Dr = _().default;
    Object.defineProperty(To, "__esModule", { value: !0 });
    To.QuarterParser = void 0;
    var wH = Dr(G()),
      TH = Dr(Z()),
      aq = Dr(K()),
      kH = Dr(ee()),
      SH = Dr(te()),
      sq = Dr(J()),
      CH = ie(),
      RH = ne(),
      IH = (function (r) {
        (0, kH.default)(t, r);
        var e = (0, SH.default)(t);
        function t() {
          var i;
          (0, wH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, sq.default)((0, aq.default)(i), "priority", 120),
            (0, sq.default)((0, aq.default)(i), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, TH.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "Q":
                  case "QQ":
                    return (0, RH.parseNDigits)(a.length, n);
                  case "Qo":
                    return s.ordinalNumber(n, { unit: "quarter" });
                  case "QQQ":
                    return (
                      s.quarter(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.quarter(n, { width: "narrow", context: "formatting" })
                    );
                  case "QQQQQ":
                    return s.quarter(n, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "QQQQ":
                  default:
                    return (
                      s.quarter(n, { width: "wide", context: "formatting" }) ||
                      s.quarter(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.quarter(n, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 1 && a <= 4;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (
                  n.setUTCMonth((s - 1) * 3, 1), n.setUTCHours(0, 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(CH.Parser);
    To.QuarterParser = IH;
  });
  var dq = g((ko) => {
    "use strict";
    var wr = _().default;
    Object.defineProperty(ko, "__esModule", { value: !0 });
    ko.StandAloneQuarterParser = void 0;
    var jH = wr(G()),
      AH = wr(Z()),
      oq = wr(K()),
      EH = wr(ee()),
      NH = wr(te()),
      lq = wr(J()),
      LH = ie(),
      FH = ne(),
      WH = (function (r) {
        (0, EH.default)(t, r);
        var e = (0, NH.default)(t);
        function t() {
          var i;
          (0, jH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, lq.default)((0, oq.default)(i), "priority", 120),
            (0, lq.default)((0, oq.default)(i), "incompatibleTokens", [
              "Y",
              "R",
              "Q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, AH.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "q":
                  case "qq":
                    return (0, FH.parseNDigits)(a.length, n);
                  case "qo":
                    return s.ordinalNumber(n, { unit: "quarter" });
                  case "qqq":
                    return (
                      s.quarter(n, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      s.quarter(n, { width: "narrow", context: "standalone" })
                    );
                  case "qqqqq":
                    return s.quarter(n, {
                      width: "narrow",
                      context: "standalone",
                    });
                  case "qqqq":
                  default:
                    return (
                      s.quarter(n, { width: "wide", context: "standalone" }) ||
                      s.quarter(n, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      s.quarter(n, { width: "narrow", context: "standalone" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 1 && a <= 4;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (
                  n.setUTCMonth((s - 1) * 3, 1), n.setUTCHours(0, 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(LH.Parser);
    ko.StandAloneQuarterParser = WH;
  });
  var hq = g((So) => {
    "use strict";
    var Tr = _().default;
    Object.defineProperty(So, "__esModule", { value: !0 });
    So.MonthParser = void 0;
    var YH = Tr(G()),
      HH = Tr(Z()),
      fq = Tr(K()),
      zH = Tr(ee()),
      BH = Tr(te()),
      cq = Tr(J()),
      Bi = ne(),
      UH = ie(),
      VH = pe(),
      $H = (function (r) {
        (0, zH.default)(t, r);
        var e = (0, BH.default)(t);
        function t() {
          var i;
          (0, YH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, cq.default)((0, fq.default)(i), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "Q",
              "L",
              "w",
              "I",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            (0, cq.default)((0, fq.default)(i), "priority", 110),
            i
          );
        }
        return (
          (0, HH.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                var u = function (l) {
                  return l - 1;
                };
                switch (a) {
                  case "M":
                    return (0, Bi.mapValue)(
                      (0, Bi.parseNumericPattern)(VH.numericPatterns.month, n),
                      u
                    );
                  case "MM":
                    return (0, Bi.mapValue)((0, Bi.parseNDigits)(2, n), u);
                  case "Mo":
                    return (0, Bi.mapValue)(
                      s.ordinalNumber(n, { unit: "month" }),
                      u
                    );
                  case "MMM":
                    return (
                      s.month(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.month(n, { width: "narrow", context: "formatting" })
                    );
                  case "MMMMM":
                    return s.month(n, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "MMMM":
                  default:
                    return (
                      s.month(n, { width: "wide", context: "formatting" }) ||
                      s.month(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.month(n, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 11;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCMonth(s, 1), n.setUTCHours(0, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(UH.Parser);
    So.MonthParser = $H;
  });
  var pq = g((Co) => {
    "use strict";
    var kr = _().default;
    Object.defineProperty(Co, "__esModule", { value: !0 });
    Co.StandAloneMonthParser = void 0;
    var QH = kr(G()),
      XH = kr(Z()),
      vq = kr(K()),
      KH = kr(ee()),
      GH = kr(te()),
      gq = kr(J()),
      ZH = ie(),
      JH = pe(),
      Ui = ne(),
      ez = (function (r) {
        (0, KH.default)(t, r);
        var e = (0, GH.default)(t);
        function t() {
          var i;
          (0, QH.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, gq.default)((0, vq.default)(i), "priority", 110),
            (0, gq.default)((0, vq.default)(i), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "Q",
              "M",
              "w",
              "I",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, XH.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                var u = function (l) {
                  return l - 1;
                };
                switch (a) {
                  case "L":
                    return (0, Ui.mapValue)(
                      (0, Ui.parseNumericPattern)(JH.numericPatterns.month, n),
                      u
                    );
                  case "LL":
                    return (0, Ui.mapValue)((0, Ui.parseNDigits)(2, n), u);
                  case "Lo":
                    return (0, Ui.mapValue)(
                      s.ordinalNumber(n, { unit: "month" }),
                      u
                    );
                  case "LLL":
                    return (
                      s.month(n, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      s.month(n, { width: "narrow", context: "standalone" })
                    );
                  case "LLLLL":
                    return s.month(n, {
                      width: "narrow",
                      context: "standalone",
                    });
                  case "LLLL":
                  default:
                    return (
                      s.month(n, { width: "wide", context: "standalone" }) ||
                      s.month(n, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      s.month(n, { width: "narrow", context: "standalone" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 11;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCMonth(s, 1), n.setUTCHours(0, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(ZH.Parser);
    Co.StandAloneMonthParser = ez;
  });
  var mq = g((Io, _q) => {
    "use strict";
    var Ro = _().default;
    Object.defineProperty(Io, "__esModule", { value: !0 });
    Io.default = az;
    var tz = Ro(F()),
      rz = Ro(T()),
      iz = Ro(th()),
      nz = Ro(x());
    function az(r, e, t) {
      (0, nz.default)(2, arguments);
      var i = (0, rz.default)(r),
        n = (0, tz.default)(e),
        a = (0, iz.default)(i, t) - n;
      return i.setUTCDate(i.getUTCDate() - a * 7), i;
    }
    _q.exports = Io.default;
  });
  var qq = g((jo) => {
    "use strict";
    var qt = _().default;
    Object.defineProperty(jo, "__esModule", { value: !0 });
    jo.LocalWeekParser = void 0;
    var sz = qt(G()),
      uz = qt(Z()),
      bq = qt(K()),
      oz = qt(ee()),
      lz = qt(te()),
      xq = qt(J()),
      dz = ie(),
      fz = pe(),
      yq = ne(),
      cz = qt(mq()),
      hz = qt(gr()),
      vz = (function (r) {
        (0, oz.default)(t, r);
        var e = (0, lz.default)(t);
        function t() {
          var i;
          (0, sz.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, xq.default)((0, bq.default)(i), "priority", 100),
            (0, xq.default)((0, bq.default)(i), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "i",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, uz.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "w":
                    return (0, yq.parseNumericPattern)(
                      fz.numericPatterns.week,
                      n
                    );
                  case "wo":
                    return s.ordinalNumber(n, { unit: "week" });
                  default:
                    return (0, yq.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 1 && a <= 53;
              },
            },
            {
              key: "set",
              value: function (n, a, s, u) {
                return (0, hz.default)((0, cz.default)(n, s, u), u);
              },
            },
          ]),
          t
        );
      })(dz.Parser);
    jo.LocalWeekParser = vz;
  });
  var Pq = g((Eo, Oq) => {
    "use strict";
    var Ao = _().default;
    Object.defineProperty(Eo, "__esModule", { value: !0 });
    Eo.default = bz;
    var gz = Ao(F()),
      pz = Ao(T()),
      _z = Ao(Jc()),
      mz = Ao(x());
    function bz(r, e) {
      (0, mz.default)(2, arguments);
      var t = (0, pz.default)(r),
        i = (0, gz.default)(e),
        n = (0, _z.default)(t) - i;
      return t.setUTCDate(t.getUTCDate() - n * 7), t;
    }
    Oq.exports = Eo.default;
  });
  var Tq = g((No) => {
    "use strict";
    var Ot = _().default;
    Object.defineProperty(No, "__esModule", { value: !0 });
    No.ISOWeekParser = void 0;
    var xz = Ot(G()),
      yz = Ot(Z()),
      Mq = Ot(K()),
      qz = Ot(ee()),
      Oz = Ot(te()),
      Dq = Ot(J()),
      Pz = ie(),
      Mz = pe(),
      wq = ne(),
      Dz = Ot(Pq()),
      wz = Ot(vr()),
      Tz = (function (r) {
        (0, qz.default)(t, r);
        var e = (0, Oz.default)(t);
        function t() {
          var i;
          (0, xz.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Dq.default)((0, Mq.default)(i), "priority", 100),
            (0, Dq.default)((0, Mq.default)(i), "incompatibleTokens", [
              "y",
              "Y",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, yz.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "I":
                    return (0, wq.parseNumericPattern)(
                      Mz.numericPatterns.week,
                      n
                    );
                  case "Io":
                    return s.ordinalNumber(n, { unit: "week" });
                  default:
                    return (0, wq.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 1 && a <= 53;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (0, wz.default)((0, Dz.default)(n, s));
              },
            },
          ]),
          t
        );
      })(Pz.Parser);
    No.ISOWeekParser = Tz;
  });
  var kq = g((Lo) => {
    "use strict";
    var Sr = _().default;
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    Lo.DateParser = void 0;
    var kz = Sr(G()),
      Sz = Sr(Z()),
      Wh = Sr(K()),
      Cz = Sr(ee()),
      Rz = Sr(te()),
      Yh = Sr(J()),
      Hh = ne(),
      Iz = ie(),
      jz = pe(),
      Az = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Ez = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Nz = (function (r) {
        (0, Cz.default)(t, r);
        var e = (0, Rz.default)(t);
        function t() {
          var i;
          (0, kz.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Yh.default)((0, Wh.default)(i), "priority", 90),
            (0, Yh.default)((0, Wh.default)(i), "subPriority", 1),
            (0, Yh.default)((0, Wh.default)(i), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "Q",
              "w",
              "I",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, Sz.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "d":
                    return (0, Hh.parseNumericPattern)(
                      jz.numericPatterns.date,
                      n
                    );
                  case "do":
                    return s.ordinalNumber(n, { unit: "date" });
                  default:
                    return (0, Hh.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                var s = n.getUTCFullYear(),
                  u = (0, Hh.isLeapYearIndex)(s),
                  o = n.getUTCMonth();
                return u ? a >= 1 && a <= Ez[o] : a >= 1 && a <= Az[o];
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCDate(s), n.setUTCHours(0, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(Iz.Parser);
    Lo.DateParser = Nz;
  });
  var Sq = g((Fo) => {
    "use strict";
    var Cr = _().default;
    Object.defineProperty(Fo, "__esModule", { value: !0 });
    Fo.DayOfYearParser = void 0;
    var Lz = Cr(G()),
      Fz = Cr(Z()),
      zh = Cr(K()),
      Wz = Cr(ee()),
      Yz = Cr(te()),
      Bh = Cr(J()),
      Hz = ie(),
      zz = pe(),
      Uh = ne(),
      Bz = (function (r) {
        (0, Wz.default)(t, r);
        var e = (0, Yz.default)(t);
        function t() {
          var i;
          (0, Lz.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Bh.default)((0, zh.default)(i), "priority", 90),
            (0, Bh.default)((0, zh.default)(i), "subpriority", 1),
            (0, Bh.default)((0, zh.default)(i), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "E",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, Fz.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "D":
                  case "DD":
                    return (0, Uh.parseNumericPattern)(
                      zz.numericPatterns.dayOfYear,
                      n
                    );
                  case "Do":
                    return s.ordinalNumber(n, { unit: "date" });
                  default:
                    return (0, Uh.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                var s = n.getUTCFullYear(),
                  u = (0, Uh.isLeapYearIndex)(s);
                return u ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCMonth(0, s), n.setUTCHours(0, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(Hz.Parser);
    Fo.DayOfYearParser = Bz;
  });
  var Yo = g((Wo, Rq) => {
    "use strict";
    var Vh = _().default;
    Object.defineProperty(Wo, "__esModule", { value: !0 });
    Wo.default = Qz;
    var Uz = Vh(T()),
      Vz = Vh(x()),
      Cq = Vh(F()),
      $z = le();
    function Qz(r, e, t) {
      var i, n, a, s, u, o, l, d;
      (0, Vz.default)(2, arguments);
      var c = (0, $z.getDefaultOptions)(),
        h = (0, Cq.default)(
          (i =
            (n =
              (a =
                (s = t == null ? void 0 : t.weekStartsOn) !== null &&
                s !== void 0
                  ? s
                  : t == null ||
                    (u = t.locale) === null ||
                    u === void 0 ||
                    (o = u.options) === null ||
                    o === void 0
                  ? void 0
                  : o.weekStartsOn) !== null && a !== void 0
                ? a
                : c.weekStartsOn) !== null && n !== void 0
              ? n
              : (l = c.locale) === null ||
                l === void 0 ||
                (d = l.options) === null ||
                d === void 0
              ? void 0
              : d.weekStartsOn) !== null && i !== void 0
            ? i
            : 0
        );
      if (!(h >= 0 && h <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var v = (0, Uz.default)(r),
        p = (0, Cq.default)(e),
        m = v.getUTCDay(),
        q = p % 7,
        O = (q + 7) % 7,
        P = (O < h ? 7 : 0) + p - m;
      return v.setUTCDate(v.getUTCDate() + P), v;
    }
    Rq.exports = Wo.default;
  });
  var Aq = g((Ho) => {
    "use strict";
    var Bt = _().default;
    Object.defineProperty(Ho, "__esModule", { value: !0 });
    Ho.DayParser = void 0;
    var Xz = Bt(G()),
      Kz = Bt(Z()),
      Iq = Bt(K()),
      Gz = Bt(ee()),
      Zz = Bt(te()),
      jq = Bt(J()),
      Jz = ie(),
      e3 = Bt(Yo()),
      t3 = (function (r) {
        (0, Gz.default)(t, r);
        var e = (0, Zz.default)(t);
        function t() {
          var i;
          (0, Xz.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, jq.default)((0, Iq.default)(i), "priority", 90),
            (0, jq.default)((0, Iq.default)(i), "incompatibleTokens", [
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, Kz.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "E":
                  case "EE":
                  case "EEE":
                    return (
                      s.day(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.day(n, { width: "short", context: "formatting" }) ||
                      s.day(n, { width: "narrow", context: "formatting" })
                    );
                  case "EEEEE":
                    return s.day(n, { width: "narrow", context: "formatting" });
                  case "EEEEEE":
                    return (
                      s.day(n, { width: "short", context: "formatting" }) ||
                      s.day(n, { width: "narrow", context: "formatting" })
                    );
                  case "EEEE":
                  default:
                    return (
                      s.day(n, { width: "wide", context: "formatting" }) ||
                      s.day(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.day(n, { width: "short", context: "formatting" }) ||
                      s.day(n, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 6;
              },
            },
            {
              key: "set",
              value: function (n, a, s, u) {
                return (
                  (n = (0, e3.default)(n, s, u)), n.setUTCHours(0, 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(Jz.Parser);
    Ho.DayParser = t3;
  });
  var Lq = g((zo) => {
    "use strict";
    var Ut = _().default;
    Object.defineProperty(zo, "__esModule", { value: !0 });
    zo.LocalDayParser = void 0;
    var r3 = Ut(G()),
      i3 = Ut(Z()),
      Eq = Ut(K()),
      n3 = Ut(ee()),
      a3 = Ut(te()),
      Nq = Ut(J()),
      s3 = ie(),
      $h = ne(),
      u3 = Ut(Yo()),
      o3 = (function (r) {
        (0, n3.default)(t, r);
        var e = (0, a3.default)(t);
        function t() {
          var i;
          (0, r3.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Nq.default)((0, Eq.default)(i), "priority", 90),
            (0, Nq.default)((0, Eq.default)(i), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "E",
              "i",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, i3.default)(t, [
            {
              key: "parse",
              value: function (n, a, s, u) {
                var o = function (d) {
                  var c = Math.floor((d - 1) / 7) * 7;
                  return ((d + u.weekStartsOn + 6) % 7) + c;
                };
                switch (a) {
                  case "e":
                  case "ee":
                    return (0, $h.mapValue)(
                      (0, $h.parseNDigits)(a.length, n),
                      o
                    );
                  case "eo":
                    return (0, $h.mapValue)(
                      s.ordinalNumber(n, { unit: "day" }),
                      o
                    );
                  case "eee":
                    return (
                      s.day(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.day(n, { width: "short", context: "formatting" }) ||
                      s.day(n, { width: "narrow", context: "formatting" })
                    );
                  case "eeeee":
                    return s.day(n, { width: "narrow", context: "formatting" });
                  case "eeeeee":
                    return (
                      s.day(n, { width: "short", context: "formatting" }) ||
                      s.day(n, { width: "narrow", context: "formatting" })
                    );
                  case "eeee":
                  default:
                    return (
                      s.day(n, { width: "wide", context: "formatting" }) ||
                      s.day(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.day(n, { width: "short", context: "formatting" }) ||
                      s.day(n, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 6;
              },
            },
            {
              key: "set",
              value: function (n, a, s, u) {
                return (
                  (n = (0, u3.default)(n, s, u)), n.setUTCHours(0, 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(s3.Parser);
    zo.LocalDayParser = o3;
  });
  var Yq = g((Bo) => {
    "use strict";
    var Vt = _().default;
    Object.defineProperty(Bo, "__esModule", { value: !0 });
    Bo.StandAloneLocalDayParser = void 0;
    var l3 = Vt(G()),
      d3 = Vt(Z()),
      Fq = Vt(K()),
      f3 = Vt(ee()),
      c3 = Vt(te()),
      Wq = Vt(J()),
      h3 = ie(),
      Qh = ne(),
      v3 = Vt(Yo()),
      g3 = (function (r) {
        (0, f3.default)(t, r);
        var e = (0, c3.default)(t);
        function t() {
          var i;
          (0, l3.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Wq.default)((0, Fq.default)(i), "priority", 90),
            (0, Wq.default)((0, Fq.default)(i), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "E",
              "i",
              "e",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, d3.default)(t, [
            {
              key: "parse",
              value: function (n, a, s, u) {
                var o = function (d) {
                  var c = Math.floor((d - 1) / 7) * 7;
                  return ((d + u.weekStartsOn + 6) % 7) + c;
                };
                switch (a) {
                  case "c":
                  case "cc":
                    return (0, Qh.mapValue)(
                      (0, Qh.parseNDigits)(a.length, n),
                      o
                    );
                  case "co":
                    return (0, Qh.mapValue)(
                      s.ordinalNumber(n, { unit: "day" }),
                      o
                    );
                  case "ccc":
                    return (
                      s.day(n, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      s.day(n, { width: "short", context: "standalone" }) ||
                      s.day(n, { width: "narrow", context: "standalone" })
                    );
                  case "ccccc":
                    return s.day(n, { width: "narrow", context: "standalone" });
                  case "cccccc":
                    return (
                      s.day(n, { width: "short", context: "standalone" }) ||
                      s.day(n, { width: "narrow", context: "standalone" })
                    );
                  case "cccc":
                  default:
                    return (
                      s.day(n, { width: "wide", context: "standalone" }) ||
                      s.day(n, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      s.day(n, { width: "short", context: "standalone" }) ||
                      s.day(n, { width: "narrow", context: "standalone" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 6;
              },
            },
            {
              key: "set",
              value: function (n, a, s, u) {
                return (
                  (n = (0, v3.default)(n, s, u)), n.setUTCHours(0, 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(h3.Parser);
    Bo.StandAloneLocalDayParser = g3;
  });
  var zq = g((Uo, Hq) => {
    "use strict";
    var Xh = _().default;
    Object.defineProperty(Uo, "__esModule", { value: !0 });
    Uo.default = b3;
    var p3 = Xh(T()),
      _3 = Xh(x()),
      m3 = Xh(F());
    function b3(r, e) {
      (0, _3.default)(2, arguments);
      var t = (0, m3.default)(e);
      t % 7 === 0 && (t = t - 7);
      var i = 1,
        n = (0, p3.default)(r),
        a = n.getUTCDay(),
        s = t % 7,
        u = (s + 7) % 7,
        o = (u < i ? 7 : 0) + t - a;
      return n.setUTCDate(n.getUTCDate() + o), n;
    }
    Hq.exports = Uo.default;
  });
  var Vq = g((Vo) => {
    "use strict";
    var $t = _().default;
    Object.defineProperty(Vo, "__esModule", { value: !0 });
    Vo.ISODayParser = void 0;
    var x3 = $t(G()),
      y3 = $t(Z()),
      Bq = $t(K()),
      q3 = $t(ee()),
      O3 = $t(te()),
      Uq = $t(J()),
      P3 = ie(),
      Vi = ne(),
      M3 = $t(zq()),
      D3 = (function (r) {
        (0, q3.default)(t, r);
        var e = (0, O3.default)(t);
        function t() {
          var i;
          (0, x3.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Uq.default)((0, Bq.default)(i), "priority", 90),
            (0, Uq.default)((0, Bq.default)(i), "incompatibleTokens", [
              "y",
              "Y",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "E",
              "e",
              "c",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, y3.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                var u = function (l) {
                  return l === 0 ? 7 : l;
                };
                switch (a) {
                  case "i":
                  case "ii":
                    return (0, Vi.parseNDigits)(a.length, n);
                  case "io":
                    return s.ordinalNumber(n, { unit: "day" });
                  case "iii":
                    return (0, Vi.mapValue)(
                      s.day(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                        s.day(n, { width: "short", context: "formatting" }) ||
                        s.day(n, { width: "narrow", context: "formatting" }),
                      u
                    );
                  case "iiiii":
                    return (0, Vi.mapValue)(
                      s.day(n, { width: "narrow", context: "formatting" }),
                      u
                    );
                  case "iiiiii":
                    return (0, Vi.mapValue)(
                      s.day(n, { width: "short", context: "formatting" }) ||
                        s.day(n, { width: "narrow", context: "formatting" }),
                      u
                    );
                  case "iiii":
                  default:
                    return (0, Vi.mapValue)(
                      s.day(n, { width: "wide", context: "formatting" }) ||
                        s.day(n, {
                          width: "abbreviated",
                          context: "formatting",
                        }) ||
                        s.day(n, { width: "short", context: "formatting" }) ||
                        s.day(n, { width: "narrow", context: "formatting" }),
                      u
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 1 && a <= 7;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (
                  (n = (0, M3.default)(n, s)), n.setUTCHours(0, 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(P3.Parser);
    Vo.ISODayParser = D3;
  });
  var Xq = g(($o) => {
    "use strict";
    var Rr = _().default;
    Object.defineProperty($o, "__esModule", { value: !0 });
    $o.AMPMParser = void 0;
    var w3 = Rr(G()),
      T3 = Rr(Z()),
      $q = Rr(K()),
      k3 = Rr(ee()),
      S3 = Rr(te()),
      Qq = Rr(J()),
      C3 = ie(),
      R3 = ne(),
      I3 = (function (r) {
        (0, k3.default)(t, r);
        var e = (0, S3.default)(t);
        function t() {
          var i;
          (0, w3.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Qq.default)((0, $q.default)(i), "priority", 80),
            (0, Qq.default)((0, $q.default)(i), "incompatibleTokens", [
              "b",
              "B",
              "H",
              "k",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, T3.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "a":
                  case "aa":
                  case "aaa":
                    return (
                      s.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, { width: "narrow", context: "formatting" })
                    );
                  case "aaaaa":
                    return s.dayPeriod(n, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "aaaa":
                  default:
                    return (
                      s.dayPeriod(n, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (
                  n.setUTCHours((0, R3.dayPeriodEnumToHours)(s), 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(C3.Parser);
    $o.AMPMParser = I3;
  });
  var Zq = g((Qo) => {
    "use strict";
    var Ir = _().default;
    Object.defineProperty(Qo, "__esModule", { value: !0 });
    Qo.AMPMMidnightParser = void 0;
    var j3 = Ir(G()),
      A3 = Ir(Z()),
      Kq = Ir(K()),
      E3 = Ir(ee()),
      N3 = Ir(te()),
      Gq = Ir(J()),
      L3 = ie(),
      F3 = ne(),
      W3 = (function (r) {
        (0, E3.default)(t, r);
        var e = (0, N3.default)(t);
        function t() {
          var i;
          (0, j3.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, Gq.default)((0, Kq.default)(i), "priority", 80),
            (0, Gq.default)((0, Kq.default)(i), "incompatibleTokens", [
              "a",
              "B",
              "H",
              "k",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, A3.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "b":
                  case "bb":
                  case "bbb":
                    return (
                      s.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, { width: "narrow", context: "formatting" })
                    );
                  case "bbbbb":
                    return s.dayPeriod(n, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "bbbb":
                  default:
                    return (
                      s.dayPeriod(n, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (
                  n.setUTCHours((0, F3.dayPeriodEnumToHours)(s), 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(L3.Parser);
    Qo.AMPMMidnightParser = W3;
  });
  var tO = g((Xo) => {
    "use strict";
    var jr = _().default;
    Object.defineProperty(Xo, "__esModule", { value: !0 });
    Xo.DayPeriodParser = void 0;
    var Y3 = jr(G()),
      H3 = jr(Z()),
      Jq = jr(K()),
      z3 = jr(ee()),
      B3 = jr(te()),
      eO = jr(J()),
      U3 = ie(),
      V3 = ne(),
      $3 = (function (r) {
        (0, z3.default)(t, r);
        var e = (0, B3.default)(t);
        function t() {
          var i;
          (0, Y3.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, eO.default)((0, Jq.default)(i), "priority", 80),
            (0, eO.default)((0, Jq.default)(i), "incompatibleTokens", [
              "a",
              "b",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, H3.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "B":
                  case "BB":
                  case "BBB":
                    return (
                      s.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, { width: "narrow", context: "formatting" })
                    );
                  case "BBBBB":
                    return s.dayPeriod(n, {
                      width: "narrow",
                      context: "formatting",
                    });
                  case "BBBB":
                  default:
                    return (
                      s.dayPeriod(n, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      s.dayPeriod(n, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return (
                  n.setUTCHours((0, V3.dayPeriodEnumToHours)(s), 0, 0, 0), n
                );
              },
            },
          ]),
          t
        );
      })(U3.Parser);
    Xo.DayPeriodParser = $3;
  });
  var aO = g((Ko) => {
    "use strict";
    var Ar = _().default;
    Object.defineProperty(Ko, "__esModule", { value: !0 });
    Ko.Hour1to12Parser = void 0;
    var Q3 = Ar(G()),
      X3 = Ar(Z()),
      rO = Ar(K()),
      K3 = Ar(ee()),
      G3 = Ar(te()),
      iO = Ar(J()),
      Z3 = ie(),
      J3 = pe(),
      nO = ne(),
      e5 = (function (r) {
        (0, K3.default)(t, r);
        var e = (0, G3.default)(t);
        function t() {
          var i;
          (0, Q3.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, iO.default)((0, rO.default)(i), "priority", 70),
            (0, iO.default)((0, rO.default)(i), "incompatibleTokens", [
              "H",
              "K",
              "k",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, X3.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "h":
                    return (0, nO.parseNumericPattern)(
                      J3.numericPatterns.hour12h,
                      n
                    );
                  case "ho":
                    return s.ordinalNumber(n, { unit: "hour" });
                  default:
                    return (0, nO.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 1 && a <= 12;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                var u = n.getUTCHours() >= 12;
                return (
                  u && s < 12
                    ? n.setUTCHours(s + 12, 0, 0, 0)
                    : !u && s === 12
                    ? n.setUTCHours(0, 0, 0, 0)
                    : n.setUTCHours(s, 0, 0, 0),
                  n
                );
              },
            },
          ]),
          t
        );
      })(Z3.Parser);
    Ko.Hour1to12Parser = e5;
  });
  var lO = g((Go) => {
    "use strict";
    var Er = _().default;
    Object.defineProperty(Go, "__esModule", { value: !0 });
    Go.Hour0to23Parser = void 0;
    var t5 = Er(G()),
      r5 = Er(Z()),
      sO = Er(K()),
      i5 = Er(ee()),
      n5 = Er(te()),
      uO = Er(J()),
      a5 = ie(),
      s5 = pe(),
      oO = ne(),
      u5 = (function (r) {
        (0, i5.default)(t, r);
        var e = (0, n5.default)(t);
        function t() {
          var i;
          (0, t5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, uO.default)((0, sO.default)(i), "priority", 70),
            (0, uO.default)((0, sO.default)(i), "incompatibleTokens", [
              "a",
              "b",
              "h",
              "K",
              "k",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, r5.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "H":
                    return (0, oO.parseNumericPattern)(
                      s5.numericPatterns.hour23h,
                      n
                    );
                  case "Ho":
                    return s.ordinalNumber(n, { unit: "hour" });
                  default:
                    return (0, oO.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 23;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCHours(s, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(a5.Parser);
    Go.Hour0to23Parser = u5;
  });
  var hO = g((Zo) => {
    "use strict";
    var Nr = _().default;
    Object.defineProperty(Zo, "__esModule", { value: !0 });
    Zo.Hour0To11Parser = void 0;
    var o5 = Nr(G()),
      l5 = Nr(Z()),
      dO = Nr(K()),
      d5 = Nr(ee()),
      f5 = Nr(te()),
      fO = Nr(J()),
      c5 = ie(),
      h5 = pe(),
      cO = ne(),
      v5 = (function (r) {
        (0, d5.default)(t, r);
        var e = (0, f5.default)(t);
        function t() {
          var i;
          (0, o5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, fO.default)((0, dO.default)(i), "priority", 70),
            (0, fO.default)((0, dO.default)(i), "incompatibleTokens", [
              "h",
              "H",
              "k",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, l5.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "K":
                    return (0, cO.parseNumericPattern)(
                      h5.numericPatterns.hour11h,
                      n
                    );
                  case "Ko":
                    return s.ordinalNumber(n, { unit: "hour" });
                  default:
                    return (0, cO.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 11;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                var u = n.getUTCHours() >= 12;
                return (
                  u && s < 12
                    ? n.setUTCHours(s + 12, 0, 0, 0)
                    : n.setUTCHours(s, 0, 0, 0),
                  n
                );
              },
            },
          ]),
          t
        );
      })(c5.Parser);
    Zo.Hour0To11Parser = v5;
  });
  var _O = g((Jo) => {
    "use strict";
    var Lr = _().default;
    Object.defineProperty(Jo, "__esModule", { value: !0 });
    Jo.Hour1To24Parser = void 0;
    var g5 = Lr(G()),
      p5 = Lr(Z()),
      vO = Lr(K()),
      _5 = Lr(ee()),
      m5 = Lr(te()),
      gO = Lr(J()),
      b5 = ie(),
      x5 = pe(),
      pO = ne(),
      y5 = (function (r) {
        (0, _5.default)(t, r);
        var e = (0, m5.default)(t);
        function t() {
          var i;
          (0, g5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, gO.default)((0, vO.default)(i), "priority", 70),
            (0, gO.default)((0, vO.default)(i), "incompatibleTokens", [
              "a",
              "b",
              "h",
              "H",
              "K",
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, p5.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "k":
                    return (0, pO.parseNumericPattern)(
                      x5.numericPatterns.hour24h,
                      n
                    );
                  case "ko":
                    return s.ordinalNumber(n, { unit: "hour" });
                  default:
                    return (0, pO.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 1 && a <= 24;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                var u = s <= 24 ? s % 24 : s;
                return n.setUTCHours(u, 0, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(b5.Parser);
    Jo.Hour1To24Parser = y5;
  });
  var yO = g((el) => {
    "use strict";
    var Fr = _().default;
    Object.defineProperty(el, "__esModule", { value: !0 });
    el.MinuteParser = void 0;
    var q5 = Fr(G()),
      O5 = Fr(Z()),
      mO = Fr(K()),
      P5 = Fr(ee()),
      M5 = Fr(te()),
      bO = Fr(J()),
      D5 = ie(),
      w5 = pe(),
      xO = ne(),
      T5 = (function (r) {
        (0, P5.default)(t, r);
        var e = (0, M5.default)(t);
        function t() {
          var i;
          (0, q5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, bO.default)((0, mO.default)(i), "priority", 60),
            (0, bO.default)((0, mO.default)(i), "incompatibleTokens", [
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, O5.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "m":
                    return (0, xO.parseNumericPattern)(
                      w5.numericPatterns.minute,
                      n
                    );
                  case "mo":
                    return s.ordinalNumber(n, { unit: "minute" });
                  default:
                    return (0, xO.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 59;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCMinutes(s, 0, 0), n;
              },
            },
          ]),
          t
        );
      })(D5.Parser);
    el.MinuteParser = T5;
  });
  var MO = g((tl) => {
    "use strict";
    var Wr = _().default;
    Object.defineProperty(tl, "__esModule", { value: !0 });
    tl.SecondParser = void 0;
    var k5 = Wr(G()),
      S5 = Wr(Z()),
      qO = Wr(K()),
      C5 = Wr(ee()),
      R5 = Wr(te()),
      OO = Wr(J()),
      I5 = ie(),
      j5 = pe(),
      PO = ne(),
      A5 = (function (r) {
        (0, C5.default)(t, r);
        var e = (0, R5.default)(t);
        function t() {
          var i;
          (0, k5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, OO.default)((0, qO.default)(i), "priority", 50),
            (0, OO.default)((0, qO.default)(i), "incompatibleTokens", [
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, S5.default)(t, [
            {
              key: "parse",
              value: function (n, a, s) {
                switch (a) {
                  case "s":
                    return (0, PO.parseNumericPattern)(
                      j5.numericPatterns.second,
                      n
                    );
                  case "so":
                    return s.ordinalNumber(n, { unit: "second" });
                  default:
                    return (0, PO.parseNDigits)(a.length, n);
                }
              },
            },
            {
              key: "validate",
              value: function (n, a) {
                return a >= 0 && a <= 59;
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCSeconds(s, 0), n;
              },
            },
          ]),
          t
        );
      })(I5.Parser);
    tl.SecondParser = A5;
  });
  var kO = g((rl) => {
    "use strict";
    var Yr = _().default;
    Object.defineProperty(rl, "__esModule", { value: !0 });
    rl.FractionOfSecondParser = void 0;
    var E5 = Yr(G()),
      N5 = Yr(Z()),
      DO = Yr(K()),
      L5 = Yr(ee()),
      F5 = Yr(te()),
      wO = Yr(J()),
      W5 = ie(),
      TO = ne(),
      Y5 = (function (r) {
        (0, L5.default)(t, r);
        var e = (0, F5.default)(t);
        function t() {
          var i;
          (0, E5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, wO.default)((0, DO.default)(i), "priority", 30),
            (0, wO.default)((0, DO.default)(i), "incompatibleTokens", [
              "t",
              "T",
            ]),
            i
          );
        }
        return (
          (0, N5.default)(t, [
            {
              key: "parse",
              value: function (n, a) {
                var s = function (o) {
                  return Math.floor(o * Math.pow(10, -a.length + 3));
                };
                return (0, TO.mapValue)((0, TO.parseNDigits)(a.length, n), s);
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return n.setUTCMilliseconds(s), n;
              },
            },
          ]),
          t
        );
      })(W5.Parser);
    rl.FractionOfSecondParser = Y5;
  });
  var RO = g((il) => {
    "use strict";
    var Hr = _().default;
    Object.defineProperty(il, "__esModule", { value: !0 });
    il.ISOTimezoneWithZParser = void 0;
    var H5 = Hr(G()),
      z5 = Hr(Z()),
      SO = Hr(K()),
      B5 = Hr(ee()),
      U5 = Hr(te()),
      CO = Hr(J()),
      V5 = ie(),
      $i = pe(),
      Qi = ne(),
      $5 = (function (r) {
        (0, B5.default)(t, r);
        var e = (0, U5.default)(t);
        function t() {
          var i;
          (0, H5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, CO.default)((0, SO.default)(i), "priority", 10),
            (0, CO.default)((0, SO.default)(i), "incompatibleTokens", [
              "t",
              "T",
              "x",
            ]),
            i
          );
        }
        return (
          (0, z5.default)(t, [
            {
              key: "parse",
              value: function (n, a) {
                switch (a) {
                  case "X":
                    return (0, Qi.parseTimezonePattern)(
                      $i.timezonePatterns.basicOptionalMinutes,
                      n
                    );
                  case "XX":
                    return (0, Qi.parseTimezonePattern)(
                      $i.timezonePatterns.basic,
                      n
                    );
                  case "XXXX":
                    return (0, Qi.parseTimezonePattern)(
                      $i.timezonePatterns.basicOptionalSeconds,
                      n
                    );
                  case "XXXXX":
                    return (0, Qi.parseTimezonePattern)(
                      $i.timezonePatterns.extendedOptionalSeconds,
                      n
                    );
                  case "XXX":
                  default:
                    return (0, Qi.parseTimezonePattern)(
                      $i.timezonePatterns.extended,
                      n
                    );
                }
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return a.timestampIsSet ? n : new Date(n.getTime() - s);
              },
            },
          ]),
          t
        );
      })(V5.Parser);
    il.ISOTimezoneWithZParser = $5;
  });
  var AO = g((nl) => {
    "use strict";
    var zr = _().default;
    Object.defineProperty(nl, "__esModule", { value: !0 });
    nl.ISOTimezoneParser = void 0;
    var Q5 = zr(G()),
      X5 = zr(Z()),
      IO = zr(K()),
      K5 = zr(ee()),
      G5 = zr(te()),
      jO = zr(J()),
      Z5 = ie(),
      Xi = pe(),
      Ki = ne(),
      J5 = (function (r) {
        (0, K5.default)(t, r);
        var e = (0, G5.default)(t);
        function t() {
          var i;
          (0, Q5.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, jO.default)((0, IO.default)(i), "priority", 10),
            (0, jO.default)((0, IO.default)(i), "incompatibleTokens", [
              "t",
              "T",
              "X",
            ]),
            i
          );
        }
        return (
          (0, X5.default)(t, [
            {
              key: "parse",
              value: function (n, a) {
                switch (a) {
                  case "x":
                    return (0, Ki.parseTimezonePattern)(
                      Xi.timezonePatterns.basicOptionalMinutes,
                      n
                    );
                  case "xx":
                    return (0, Ki.parseTimezonePattern)(
                      Xi.timezonePatterns.basic,
                      n
                    );
                  case "xxxx":
                    return (0, Ki.parseTimezonePattern)(
                      Xi.timezonePatterns.basicOptionalSeconds,
                      n
                    );
                  case "xxxxx":
                    return (0, Ki.parseTimezonePattern)(
                      Xi.timezonePatterns.extendedOptionalSeconds,
                      n
                    );
                  case "xxx":
                  default:
                    return (0, Ki.parseTimezonePattern)(
                      Xi.timezonePatterns.extended,
                      n
                    );
                }
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return a.timestampIsSet ? n : new Date(n.getTime() - s);
              },
            },
          ]),
          t
        );
      })(Z5.Parser);
    nl.ISOTimezoneParser = J5;
  });
  var LO = g((al) => {
    "use strict";
    var Br = _().default;
    Object.defineProperty(al, "__esModule", { value: !0 });
    al.TimestampSecondsParser = void 0;
    var eB = Br(G()),
      tB = Br(Z()),
      EO = Br(K()),
      rB = Br(ee()),
      iB = Br(te()),
      NO = Br(J()),
      nB = ie(),
      aB = ne(),
      sB = (function (r) {
        (0, rB.default)(t, r);
        var e = (0, iB.default)(t);
        function t() {
          var i;
          (0, eB.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, NO.default)((0, EO.default)(i), "priority", 40),
            (0, NO.default)((0, EO.default)(i), "incompatibleTokens", "*"),
            i
          );
        }
        return (
          (0, tB.default)(t, [
            {
              key: "parse",
              value: function (n) {
                return (0, aB.parseAnyDigitsSigned)(n);
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return [new Date(s * 1e3), { timestampIsSet: !0 }];
              },
            },
          ]),
          t
        );
      })(nB.Parser);
    al.TimestampSecondsParser = sB;
  });
  var YO = g((sl) => {
    "use strict";
    var Ur = _().default;
    Object.defineProperty(sl, "__esModule", { value: !0 });
    sl.TimestampMillisecondsParser = void 0;
    var uB = Ur(G()),
      oB = Ur(Z()),
      FO = Ur(K()),
      lB = Ur(ee()),
      dB = Ur(te()),
      WO = Ur(J()),
      fB = ie(),
      cB = ne(),
      hB = (function (r) {
        (0, lB.default)(t, r);
        var e = (0, dB.default)(t);
        function t() {
          var i;
          (0, uB.default)(this, t);
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
            a[s] = arguments[s];
          return (
            (i = e.call.apply(e, [this].concat(a))),
            (0, WO.default)((0, FO.default)(i), "priority", 20),
            (0, WO.default)((0, FO.default)(i), "incompatibleTokens", "*"),
            i
          );
        }
        return (
          (0, oB.default)(t, [
            {
              key: "parse",
              value: function (n) {
                return (0, cB.parseAnyDigitsSigned)(n);
              },
            },
            {
              key: "set",
              value: function (n, a, s) {
                return [new Date(s), { timestampIsSet: !0 }];
              },
            },
          ]),
          t
        );
      })(fB.Parser);
    sl.TimestampMillisecondsParser = hB;
  });
  var HO = g((ul) => {
    "use strict";
    Object.defineProperty(ul, "__esModule", { value: !0 });
    ul.parsers = void 0;
    var vB = zy(),
      gB = Vy(),
      pB = Ky(),
      _B = eq(),
      mB = nq(),
      bB = uq(),
      xB = dq(),
      yB = hq(),
      qB = pq(),
      OB = qq(),
      PB = Tq(),
      MB = kq(),
      DB = Sq(),
      wB = Aq(),
      TB = Lq(),
      kB = Yq(),
      SB = Vq(),
      CB = Xq(),
      RB = Zq(),
      IB = tO(),
      jB = aO(),
      AB = lO(),
      EB = hO(),
      NB = _O(),
      LB = yO(),
      FB = MO(),
      WB = kO(),
      YB = RO(),
      HB = AO(),
      zB = LO(),
      BB = YO(),
      UB = {
        G: new vB.EraParser(),
        y: new gB.YearParser(),
        Y: new pB.LocalWeekYearParser(),
        R: new _B.ISOWeekYearParser(),
        u: new mB.ExtendedYearParser(),
        Q: new bB.QuarterParser(),
        q: new xB.StandAloneQuarterParser(),
        M: new yB.MonthParser(),
        L: new qB.StandAloneMonthParser(),
        w: new OB.LocalWeekParser(),
        I: new PB.ISOWeekParser(),
        d: new MB.DateParser(),
        D: new DB.DayOfYearParser(),
        E: new wB.DayParser(),
        e: new TB.LocalDayParser(),
        c: new kB.StandAloneLocalDayParser(),
        i: new SB.ISODayParser(),
        a: new CB.AMPMParser(),
        b: new RB.AMPMMidnightParser(),
        B: new IB.DayPeriodParser(),
        h: new jB.Hour1to12Parser(),
        H: new AB.Hour0to23Parser(),
        K: new EB.Hour0To11Parser(),
        k: new NB.Hour1To24Parser(),
        m: new LB.MinuteParser(),
        s: new FB.SecondParser(),
        S: new WB.FractionOfSecondParser(),
        X: new YB.ISOTimezoneWithZParser(),
        x: new HB.ISOTimezoneParser(),
        t: new zB.TimestampSecondsParser(),
        T: new BB.TimestampMillisecondsParser(),
      };
    ul.parsers = UB;
  });
  var Kh = g((ll, $O) => {
    "use strict";
    var ze = _().default;
    Object.defineProperty(ll, "__esModule", { value: !0 });
    ll.default = uU;
    var VB = ze(De()),
      zO = ze(ky()),
      $B = ze(Wt()),
      QB = ze(hr()),
      BO = ze(T()),
      XB = ze(_r()),
      UO = ze(ih()),
      KB = ze(We()),
      ol = nh(),
      VO = ze(F()),
      GB = ze(x()),
      ZB = Eh(),
      JB = HO(),
      eU = le(),
      tU = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      rU = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      iU = /^'([^]*?)'?$/,
      nU = /''/g,
      aU = /\S/,
      sU = /[a-zA-Z]/;
    function uU(r, e, t, i) {
      var n, a, s, u, o, l, d, c, h, v, p, m, q, O, P, w, C, k;
      (0, GB.default)(3, arguments);
      var R = String(r),
        I = String(e),
        j = (0, eU.getDefaultOptions)(),
        L =
          (n =
            (a = i == null ? void 0 : i.locale) !== null && a !== void 0
              ? a
              : j.locale) !== null && n !== void 0
            ? n
            : $B.default;
      if (!L.match) throw new RangeError("locale must contain match property");
      var W = (0, VO.default)(
        (s =
          (u =
            (o =
              (l = i == null ? void 0 : i.firstWeekContainsDate) !== null &&
              l !== void 0
                ? l
                : i == null ||
                  (d = i.locale) === null ||
                  d === void 0 ||
                  (c = d.options) === null ||
                  c === void 0
                ? void 0
                : c.firstWeekContainsDate) !== null && o !== void 0
              ? o
              : j.firstWeekContainsDate) !== null && u !== void 0
            ? u
            : (h = j.locale) === null ||
              h === void 0 ||
              (v = h.options) === null ||
              v === void 0
            ? void 0
            : v.firstWeekContainsDate) !== null && s !== void 0
          ? s
          : 1
      );
      if (!(W >= 1 && W <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var H = (0, VO.default)(
        (p =
          (m =
            (q =
              (O = i == null ? void 0 : i.weekStartsOn) !== null && O !== void 0
                ? O
                : i == null ||
                  (P = i.locale) === null ||
                  P === void 0 ||
                  (w = P.options) === null ||
                  w === void 0
                ? void 0
                : w.weekStartsOn) !== null && q !== void 0
              ? q
              : j.weekStartsOn) !== null && m !== void 0
            ? m
            : (C = j.locale) === null ||
              C === void 0 ||
              (k = C.options) === null ||
              k === void 0
            ? void 0
            : k.weekStartsOn) !== null && p !== void 0
          ? p
          : 0
      );
      if (!(H >= 0 && H <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      if (I === "") return R === "" ? (0, BO.default)(t) : new Date(NaN);
      var U = { firstWeekContainsDate: W, weekStartsOn: H, locale: L },
        se = [new ZB.DateToSystemTimezoneSetter()],
        fe = I.match(rU)
          .map(function (ce) {
            var re = ce[0];
            if (re in UO.default) {
              var be = UO.default[re];
              return be(ce, L.formatLong);
            }
            return ce;
          })
          .join("")
          .match(tU),
        Y = [],
        V = (0, zO.default)(fe),
        X;
      try {
        var ve = function () {
          var re = X.value;
          !(i != null && i.useAdditionalWeekYearTokens) &&
            (0, ol.isProtectedWeekYearToken)(re) &&
            (0, ol.throwProtectedError)(re, I, r),
            !(i != null && i.useAdditionalDayOfYearTokens) &&
              (0, ol.isProtectedDayOfYearToken)(re) &&
              (0, ol.throwProtectedError)(re, I, r);
          var be = re[0],
            sr = JB.parsers[be];
          if (sr) {
            var Cn = sr.incompatibleTokens;
            if (Array.isArray(Cn)) {
              var D = Y.find(function (E) {
                return Cn.includes(E.token) || E.token === be;
              });
              if (D)
                throw new RangeError(
                  "The format string mustn't contain `"
                    .concat(D.fullToken, "` and `")
                    .concat(re, "` at the same time")
                );
            } else if (sr.incompatibleTokens === "*" && Y.length > 0)
              throw new RangeError(
                "The format string mustn't contain `".concat(
                  re,
                  "` and any other token at the same time"
                )
              );
            Y.push({ token: be, fullToken: re });
            var M = sr.run(R, re, L.match, U);
            if (!M) return { v: new Date(NaN) };
            se.push(M.setter), (R = M.rest);
          } else {
            if (be.match(sU))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  be +
                  "`"
              );
            if (
              (re === "''" ? (re = "'") : be === "'" && (re = oU(re)),
              R.indexOf(re) === 0)
            )
              R = R.slice(re.length);
            else return { v: new Date(NaN) };
          }
        };
        for (V.s(); !(X = V.n()).done; ) {
          var oe = ve();
          if ((0, VB.default)(oe) === "object") return oe.v;
        }
      } catch (ce) {
        V.e(ce);
      } finally {
        V.f();
      }
      if (R.length > 0 && aU.test(R)) return new Date(NaN);
      var Ce = se
          .map(function (ce) {
            return ce.priority;
          })
          .sort(function (ce, re) {
            return re - ce;
          })
          .filter(function (ce, re, be) {
            return be.indexOf(ce) === re;
          })
          .map(function (ce) {
            return se
              .filter(function (re) {
                return re.priority === ce;
              })
              .sort(function (re, be) {
                return be.subPriority - re.subPriority;
              });
          })
          .map(function (ce) {
            return ce[0];
          }),
        Re = (0, BO.default)(t);
      if (isNaN(Re.getTime())) return new Date(NaN);
      var ge = (0, QB.default)(Re, (0, KB.default)(Re)),
        me = {},
        we = (0, zO.default)(Ce),
        Me;
      try {
        for (we.s(); !(Me = we.n()).done; ) {
          var Ie = Me.value;
          if (!Ie.validate(ge, U)) return new Date(NaN);
          var Rt = Ie.set(ge, me, U);
          Array.isArray(Rt)
            ? ((ge = Rt[0]), (0, XB.default)(me, Rt[1]))
            : (ge = Rt);
        }
      } catch (ce) {
        we.e(ce);
      } finally {
        we.f();
      }
      return ge;
    }
    function oU(r) {
      return r.match(iU)[1].replace(nU, "'");
    }
    $O.exports = ll.default;
  });
  var XO = g((dl, QO) => {
    "use strict";
    var Gh = _().default;
    Object.defineProperty(dl, "__esModule", { value: !0 });
    dl.default = cU;
    var lU = Gh(Kh()),
      dU = Gh(et()),
      fU = Gh(x());
    function cU(r, e, t) {
      return (
        (0, fU.default)(2, arguments),
        (0, dU.default)((0, lU.default)(r, e, new Date(), t))
      );
    }
    QO.exports = dl.default;
  });
  var ZO = g((fl, GO) => {
    "use strict";
    var KO = _().default;
    Object.defineProperty(fl, "__esModule", { value: !0 });
    fl.default = gU;
    var hU = KO(T()),
      vU = KO(x());
    function gU(r) {
      return (0, vU.default)(1, arguments), (0, hU.default)(r).getDay() === 1;
    }
    GO.exports = fl.default;
  });
  var tP = g((cl, eP) => {
    "use strict";
    var JO = _().default;
    Object.defineProperty(cl, "__esModule", { value: !0 });
    cl.default = mU;
    var pU = JO(T()),
      _U = JO(x());
    function mU(r) {
      return (
        (0, _U.default)(1, arguments), (0, pU.default)(r).getTime() < Date.now()
      );
    }
    eP.exports = cl.default;
  });
  var Zh = g((hl, iP) => {
    "use strict";
    var rP = _().default;
    Object.defineProperty(hl, "__esModule", { value: !0 });
    hl.default = yU;
    var bU = rP(T()),
      xU = rP(x());
    function yU(r) {
      (0, xU.default)(1, arguments);
      var e = (0, bU.default)(r);
      return e.setMinutes(0, 0, 0), e;
    }
    iP.exports = hl.default;
  });
  var Jh = g((vl, sP) => {
    "use strict";
    var aP = _().default;
    Object.defineProperty(vl, "__esModule", { value: !0 });
    vl.default = OU;
    var nP = aP(Zh()),
      qU = aP(x());
    function OU(r, e) {
      (0, qU.default)(2, arguments);
      var t = (0, nP.default)(r),
        i = (0, nP.default)(e);
      return t.getTime() === i.getTime();
    }
    sP.exports = vl.default;
  });
  var pl = g((gl, lP) => {
    "use strict";
    var oP = _().default;
    Object.defineProperty(gl, "__esModule", { value: !0 });
    gl.default = MU;
    var uP = oP(Ze()),
      PU = oP(x());
    function MU(r, e, t) {
      (0, PU.default)(2, arguments);
      var i = (0, uP.default)(r, t),
        n = (0, uP.default)(e, t);
      return i.getTime() === n.getTime();
    }
    lP.exports = gl.default;
  });
  var ev = g((_l, fP) => {
    "use strict";
    var dP = _().default;
    Object.defineProperty(_l, "__esModule", { value: !0 });
    _l.default = TU;
    var DU = dP(pl()),
      wU = dP(x());
    function TU(r, e) {
      return (
        (0, wU.default)(2, arguments),
        (0, DU.default)(r, e, { weekStartsOn: 1 })
      );
    }
    fP.exports = _l.default;
  });
  var gP = g((ml, vP) => {
    "use strict";
    var hP = _().default;
    Object.defineProperty(ml, "__esModule", { value: !0 });
    ml.default = SU;
    var cP = hP(fr()),
      kU = hP(x());
    function SU(r, e) {
      (0, kU.default)(2, arguments);
      var t = (0, cP.default)(r),
        i = (0, cP.default)(e);
      return t.getTime() === i.getTime();
    }
    vP.exports = ml.default;
  });
  var tv = g((bl, mP) => {
    "use strict";
    var _P = _().default;
    Object.defineProperty(bl, "__esModule", { value: !0 });
    bl.default = RU;
    var pP = _P(us()),
      CU = _P(x());
    function RU(r, e) {
      (0, CU.default)(2, arguments);
      var t = (0, pP.default)(r),
        i = (0, pP.default)(e);
      return t.getTime() === i.getTime();
    }
    mP.exports = bl.default;
  });
  var rv = g((xl, yP) => {
    "use strict";
    var xP = _().default;
    Object.defineProperty(xl, "__esModule", { value: !0 });
    xl.default = jU;
    var bP = xP(T()),
      IU = xP(x());
    function jU(r, e) {
      (0, IU.default)(2, arguments);
      var t = (0, bP.default)(r),
        i = (0, bP.default)(e);
      return (
        t.getFullYear() === i.getFullYear() && t.getMonth() === i.getMonth()
      );
    }
    yP.exports = xl.default;
  });
  var iv = g((yl, PP) => {
    "use strict";
    var OP = _().default;
    Object.defineProperty(yl, "__esModule", { value: !0 });
    yl.default = EU;
    var qP = OP(cs()),
      AU = OP(x());
    function EU(r, e) {
      (0, AU.default)(2, arguments);
      var t = (0, qP.default)(r),
        i = (0, qP.default)(e);
      return t.getTime() === i.getTime();
    }
    PP.exports = yl.default;
  });
  var nv = g((ql, DP) => {
    "use strict";
    var MP = _().default;
    Object.defineProperty(ql, "__esModule", { value: !0 });
    ql.default = FU;
    var NU = MP(T()),
      LU = MP(x());
    function FU(r) {
      (0, LU.default)(1, arguments);
      var e = (0, NU.default)(r);
      return e.setMilliseconds(0), e;
    }
    DP.exports = ql.default;
  });
  var av = g((Ol, kP) => {
    "use strict";
    var TP = _().default;
    Object.defineProperty(Ol, "__esModule", { value: !0 });
    Ol.default = YU;
    var wP = TP(nv()),
      WU = TP(x());
    function YU(r, e) {
      (0, WU.default)(2, arguments);
      var t = (0, wP.default)(r),
        i = (0, wP.default)(e);
      return t.getTime() === i.getTime();
    }
    kP.exports = Ol.default;
  });
  var sv = g((Pl, RP) => {
    "use strict";
    var CP = _().default;
    Object.defineProperty(Pl, "__esModule", { value: !0 });
    Pl.default = zU;
    var SP = CP(T()),
      HU = CP(x());
    function zU(r, e) {
      (0, HU.default)(2, arguments);
      var t = (0, SP.default)(r),
        i = (0, SP.default)(e);
      return t.getFullYear() === i.getFullYear();
    }
    RP.exports = Pl.default;
  });
  var AP = g((Ml, jP) => {
    "use strict";
    var IP = _().default;
    Object.defineProperty(Ml, "__esModule", { value: !0 });
    Ml.default = VU;
    var BU = IP(Jh()),
      UU = IP(x());
    function VU(r) {
      return (0, UU.default)(1, arguments), (0, BU.default)(Date.now(), r);
    }
    jP.exports = Ml.default;
  });
  var LP = g((Dl, NP) => {
    "use strict";
    var EP = _().default;
    Object.defineProperty(Dl, "__esModule", { value: !0 });
    Dl.default = XU;
    var $U = EP(ev()),
      QU = EP(x());
    function XU(r) {
      return (0, QU.default)(1, arguments), (0, $U.default)(r, Date.now());
    }
    NP.exports = Dl.default;
  });
  var YP = g((wl, WP) => {
    "use strict";
    var FP = _().default;
    Object.defineProperty(wl, "__esModule", { value: !0 });
    wl.default = ZU;
    var KU = FP(tv()),
      GU = FP(x());
    function ZU(r) {
      return (0, GU.default)(1, arguments), (0, KU.default)(Date.now(), r);
    }
    WP.exports = wl.default;
  });
  var BP = g((Tl, zP) => {
    "use strict";
    var HP = _().default;
    Object.defineProperty(Tl, "__esModule", { value: !0 });
    Tl.default = tV;
    var JU = HP(rv()),
      eV = HP(x());
    function tV(r) {
      return (0, eV.default)(1, arguments), (0, JU.default)(Date.now(), r);
    }
    zP.exports = Tl.default;
  });
  var $P = g((kl, VP) => {
    "use strict";
    var UP = _().default;
    Object.defineProperty(kl, "__esModule", { value: !0 });
    kl.default = nV;
    var rV = UP(iv()),
      iV = UP(x());
    function nV(r) {
      return (0, iV.default)(1, arguments), (0, rV.default)(Date.now(), r);
    }
    VP.exports = kl.default;
  });
  var KP = g((Sl, XP) => {
    "use strict";
    var QP = _().default;
    Object.defineProperty(Sl, "__esModule", { value: !0 });
    Sl.default = uV;
    var aV = QP(av()),
      sV = QP(x());
    function uV(r) {
      return (0, sV.default)(1, arguments), (0, aV.default)(Date.now(), r);
    }
    XP.exports = Sl.default;
  });
  var JP = g((Cl, ZP) => {
    "use strict";
    var GP = _().default;
    Object.defineProperty(Cl, "__esModule", { value: !0 });
    Cl.default = dV;
    var oV = GP(pl()),
      lV = GP(x());
    function dV(r, e) {
      return (0, lV.default)(1, arguments), (0, oV.default)(r, Date.now(), e);
    }
    ZP.exports = Cl.default;
  });
  var rM = g((Rl, tM) => {
    "use strict";
    var eM = _().default;
    Object.defineProperty(Rl, "__esModule", { value: !0 });
    Rl.default = hV;
    var fV = eM(sv()),
      cV = eM(x());
    function hV(r) {
      return (0, cV.default)(1, arguments), (0, fV.default)(r, Date.now());
    }
    tM.exports = Rl.default;
  });
  var aM = g((Il, nM) => {
    "use strict";
    var iM = _().default;
    Object.defineProperty(Il, "__esModule", { value: !0 });
    Il.default = pV;
    var vV = iM(T()),
      gV = iM(x());
    function pV(r) {
      return (0, gV.default)(1, arguments), (0, vV.default)(r).getDay() === 4;
    }
    nM.exports = Il.default;
  });
  var oM = g((jl, uM) => {
    "use strict";
    var sM = _().default;
    Object.defineProperty(jl, "__esModule", { value: !0 });
    jl.default = bV;
    var _V = sM(cr()),
      mV = sM(x());
    function bV(r) {
      return (0, mV.default)(1, arguments), (0, _V.default)(r, Date.now());
    }
    uM.exports = jl.default;
  });
  var dM = g((Al, lM) => {
    "use strict";
    var uv = _().default;
    Object.defineProperty(Al, "__esModule", { value: !0 });
    Al.default = OV;
    var xV = uv(Fe()),
      yV = uv(cr()),
      qV = uv(x());
    function OV(r) {
      return (
        (0, qV.default)(1, arguments),
        (0, yV.default)(r, (0, xV.default)(Date.now(), 1))
      );
    }
    lM.exports = Al.default;
  });
  var hM = g((El, cM) => {
    "use strict";
    var fM = _().default;
    Object.defineProperty(El, "__esModule", { value: !0 });
    El.default = DV;
    var PV = fM(T()),
      MV = fM(x());
    function DV(r) {
      return (0, MV.default)(1, arguments), (0, PV.default)(r).getDay() === 2;
    }
    cM.exports = El.default;
  });
  var pM = g((Nl, gM) => {
    "use strict";
    var vM = _().default;
    Object.defineProperty(Nl, "__esModule", { value: !0 });
    Nl.default = kV;
    var wV = vM(T()),
      TV = vM(x());
    function kV(r) {
      return (0, TV.default)(1, arguments), (0, wV.default)(r).getDay() === 3;
    }
    gM.exports = Nl.default;
  });
  var bM = g((Ll, mM) => {
    "use strict";
    var _M = _().default;
    Object.defineProperty(Ll, "__esModule", { value: !0 });
    Ll.default = CV;
    var ov = _M(T()),
      SV = _M(x());
    function CV(r, e) {
      (0, SV.default)(2, arguments);
      var t = (0, ov.default)(r).getTime(),
        i = (0, ov.default)(e.start).getTime(),
        n = (0, ov.default)(e.end).getTime();
      if (!(i <= n)) throw new RangeError("Invalid interval");
      return t >= i && t <= n;
    }
    mM.exports = Ll.default;
  });
  var Gi = g((Fl, xM) => {
    "use strict";
    var lv = _().default;
    Object.defineProperty(Fl, "__esModule", { value: !0 });
    Fl.default = AV;
    var RV = lv(Fe()),
      IV = lv(x()),
      jV = lv(F());
    function AV(r, e) {
      (0, IV.default)(2, arguments);
      var t = (0, jV.default)(e);
      return (0, RV.default)(r, -t);
    }
    xM.exports = Fl.default;
  });
  var qM = g((Wl, yM) => {
    "use strict";
    var dv = _().default;
    Object.defineProperty(Wl, "__esModule", { value: !0 });
    Wl.default = FV;
    var EV = dv(cr()),
      NV = dv(Gi()),
      LV = dv(x());
    function FV(r) {
      return (
        (0, LV.default)(1, arguments),
        (0, EV.default)(r, (0, NV.default)(Date.now(), 1))
      );
    }
    yM.exports = Wl.default;
  });
  var MM = g((Yl, PM) => {
    "use strict";
    var OM = _().default;
    Object.defineProperty(Yl, "__esModule", { value: !0 });
    Yl.default = HV;
    var WV = OM(T()),
      YV = OM(x());
    function HV(r) {
      (0, YV.default)(1, arguments);
      var e = (0, WV.default)(r),
        t = e.getFullYear(),
        i = 9 + Math.floor(t / 10) * 10;
      return e.setFullYear(i + 1, 0, 0), e.setHours(0, 0, 0, 0), e;
    }
    PM.exports = Yl.default;
  });
  var cv = g((Hl, DM) => {
    "use strict";
    var fv = _().default;
    Object.defineProperty(Hl, "__esModule", { value: !0 });
    Hl.default = $V;
    var zV = fv(T()),
      BV = fv(F()),
      UV = fv(x()),
      VV = le();
    function $V(r, e) {
      var t, i, n, a, s, u, o, l;
      (0, UV.default)(1, arguments);
      var d = (0, VV.getDefaultOptions)(),
        c = (0, BV.default)(
          (t =
            (i =
              (n =
                (a = e == null ? void 0 : e.weekStartsOn) !== null &&
                a !== void 0
                  ? a
                  : e == null ||
                    (s = e.locale) === null ||
                    s === void 0 ||
                    (u = s.options) === null ||
                    u === void 0
                  ? void 0
                  : u.weekStartsOn) !== null && n !== void 0
                ? n
                : d.weekStartsOn) !== null && i !== void 0
              ? i
              : (o = d.locale) === null ||
                o === void 0 ||
                (l = o.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && t !== void 0
            ? t
            : 0
        );
      if (!(c >= 0 && c <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6");
      var h = (0, zV.default)(r),
        v = h.getDay(),
        p = (v < c ? -7 : 0) + 6 - (v - c);
      return h.setHours(0, 0, 0, 0), h.setDate(h.getDate() + p), h;
    }
    DM.exports = Hl.default;
  });
  var kM = g((zl, TM) => {
    "use strict";
    var wM = _().default;
    Object.defineProperty(zl, "__esModule", { value: !0 });
    zl.default = KV;
    var QV = wM(cv()),
      XV = wM(x());
    function KV(r) {
      return (
        (0, XV.default)(1, arguments), (0, QV.default)(r, { weekStartsOn: 1 })
      );
    }
    TM.exports = zl.default;
  });
  var CM = g((Bl, SM) => {
    "use strict";
    var hv = _().default;
    Object.defineProperty(Bl, "__esModule", { value: !0 });
    Bl.default = e4;
    var GV = hv(At()),
      ZV = hv(ct()),
      JV = hv(x());
    function e4(r) {
      (0, JV.default)(1, arguments);
      var e = (0, GV.default)(r),
        t = new Date(0);
      t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
      var i = (0, ZV.default)(t);
      return i.setDate(i.getDate() - 1), i;
    }
    SM.exports = Bl.default;
  });
  var jM = g((Ul, IM) => {
    "use strict";
    var RM = _().default;
    Object.defineProperty(Ul, "__esModule", { value: !0 });
    Ul.default = i4;
    var t4 = RM(T()),
      r4 = RM(x());
    function i4(r) {
      (0, r4.default)(1, arguments);
      var e = (0, t4.default)(r),
        t = e.getMonth(),
        i = t - (t % 3) + 3;
      return e.setMonth(i, 0), e.setHours(0, 0, 0, 0), e;
    }
    IM.exports = Ul.default;
  });
  var NM = g((Vl, EM) => {
    "use strict";
    var AM = _().default;
    Object.defineProperty(Vl, "__esModule", { value: !0 });
    Vl.default = s4;
    var n4 = AM(T()),
      a4 = AM(x());
    function s4(r) {
      (0, a4.default)(1, arguments);
      var e = (0, n4.default)(r),
        t = e.getFullYear();
      return e.setFullYear(t + 1, 0, 0), e.setHours(0, 0, 0, 0), e;
    }
    EM.exports = Vl.default;
  });
  var FM = g(($l, LM) => {
    "use strict";
    var Vr = _().default;
    Object.defineProperty($l, "__esModule", { value: !0 });
    $l.default = _4;
    var u4 = Vr(T()),
      o4 = Vr(rh()),
      l4 = Vr(We()),
      d4 = Vr(et()),
      f4 = Vr(hr()),
      c4 = Vr(x()),
      h4 = /(\w)\1*|''|'(''|[^'])+('|$)|./g,
      v4 = /^'([^]*?)'?$/,
      g4 = /''/g,
      p4 = /[a-zA-Z]/;
    function _4(r, e) {
      (0, c4.default)(2, arguments);
      var t = (0, u4.default)(r);
      if (!(0, d4.default)(t)) throw new RangeError("Invalid time value");
      var i = (0, l4.default)(t),
        n = (0, f4.default)(t, i),
        a = e.match(h4);
      if (!a) return "";
      var s = a
        .map(function (u) {
          if (u === "''") return "'";
          var o = u[0];
          if (o === "'") return m4(u);
          var l = o4.default[o];
          if (l) return l(n, u);
          if (o.match(p4))
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" +
                o +
                "`"
            );
          return u;
        })
        .join("");
      return s;
    }
    function m4(r) {
      var e = r.match(v4);
      return e ? e[1].replace(g4, "'") : r;
    }
    LM.exports = $l.default;
  });
  var HM = g((Ql, YM) => {
    "use strict";
    var b4 = _().default;
    Object.defineProperty(Ql, "__esModule", { value: !0 });
    Ql.default = y4;
    var x4 = b4(x()),
      WM = 365.2425;
    function y4(r) {
      var e = r.years,
        t = r.months,
        i = r.weeks,
        n = r.days,
        a = r.hours,
        s = r.minutes,
        u = r.seconds;
      (0, x4.default)(1, arguments);
      var o = 0;
      e && (o += e * WM),
        t && (o += t * (WM / 12)),
        i && (o += i * 7),
        n && (o += n);
      var l = o * 24 * 60 * 60;
      return (
        a && (l += a * 60 * 60),
        s && (l += s * 60),
        u && (l += u),
        Math.round(l * 1e3)
      );
    }
    YM.exports = Ql.default;
  });
  var BM = g((Xl, zM) => {
    "use strict";
    var q4 = _().default;
    Object.defineProperty(Xl, "__esModule", { value: !0 });
    Xl.default = M4;
    var O4 = q4(x()),
      P4 = ae();
    function M4(r) {
      (0, O4.default)(1, arguments);
      var e = r / P4.millisecondsInHour;
      return Math.floor(e);
    }
    zM.exports = Xl.default;
  });
  var VM = g((Kl, UM) => {
    "use strict";
    var D4 = _().default;
    Object.defineProperty(Kl, "__esModule", { value: !0 });
    Kl.default = k4;
    var w4 = D4(x()),
      T4 = ae();
    function k4(r) {
      (0, w4.default)(1, arguments);
      var e = r / T4.millisecondsInMinute;
      return Math.floor(e);
    }
    UM.exports = Kl.default;
  });
  var QM = g((Gl, $M) => {
    "use strict";
    var S4 = _().default;
    Object.defineProperty(Gl, "__esModule", { value: !0 });
    Gl.default = I4;
    var C4 = S4(x()),
      R4 = ae();
    function I4(r) {
      (0, C4.default)(1, arguments);
      var e = r / R4.millisecondsInSecond;
      return Math.floor(e);
    }
    $M.exports = Gl.default;
  });
  var KM = g((Zl, XM) => {
    "use strict";
    var j4 = _().default;
    Object.defineProperty(Zl, "__esModule", { value: !0 });
    Zl.default = N4;
    var A4 = j4(x()),
      E4 = ae();
    function N4(r) {
      (0, A4.default)(1, arguments);
      var e = r / E4.minutesInHour;
      return Math.floor(e);
    }
    XM.exports = Zl.default;
  });
  var ZM = g((Jl, GM) => {
    "use strict";
    var L4 = _().default;
    Object.defineProperty(Jl, "__esModule", { value: !0 });
    Jl.default = Y4;
    var F4 = L4(x()),
      W4 = ae();
    function Y4(r) {
      return (
        (0, F4.default)(1, arguments), Math.floor(r * W4.millisecondsInMinute)
      );
    }
    GM.exports = Jl.default;
  });
  var eD = g((ed, JM) => {
    "use strict";
    var H4 = _().default;
    Object.defineProperty(ed, "__esModule", { value: !0 });
    ed.default = U4;
    var z4 = H4(x()),
      B4 = ae();
    function U4(r) {
      return (0, z4.default)(1, arguments), Math.floor(r * B4.secondsInMinute);
    }
    JM.exports = ed.default;
  });
  var rD = g((td, tD) => {
    "use strict";
    var V4 = _().default;
    Object.defineProperty(td, "__esModule", { value: !0 });
    td.default = X4;
    var $4 = V4(x()),
      Q4 = ae();
    function X4(r) {
      (0, $4.default)(1, arguments);
      var e = r / Q4.monthsInQuarter;
      return Math.floor(e);
    }
    tD.exports = td.default;
  });
  var nD = g((rd, iD) => {
    "use strict";
    var K4 = _().default;
    Object.defineProperty(rd, "__esModule", { value: !0 });
    rd.default = J4;
    var G4 = K4(x()),
      Z4 = ae();
    function J4(r) {
      (0, G4.default)(1, arguments);
      var e = r / Z4.monthsInYear;
      return Math.floor(e);
    }
    iD.exports = rd.default;
  });
  var st = g((id, aD) => {
    "use strict";
    var vv = _().default;
    Object.defineProperty(id, "__esModule", { value: !0 });
    id.default = i$;
    var e$ = vv(Fe()),
      t$ = vv(Ti()),
      r$ = vv(x());
    function i$(r, e) {
      (0, r$.default)(2, arguments);
      var t = e - (0, t$.default)(r);
      return t <= 0 && (t += 7), (0, e$.default)(r, t);
    }
    aD.exports = id.default;
  });
  var oD = g((nd, uD) => {
    "use strict";
    var sD = _().default;
    Object.defineProperty(nd, "__esModule", { value: !0 });
    nd.default = s$;
    var n$ = sD(st()),
      a$ = sD(x());
    function s$(r) {
      return (0, a$.default)(1, arguments), (0, n$.default)(r, 5);
    }
    uD.exports = nd.default;
  });
  var fD = g((ad, dD) => {
    "use strict";
    var lD = _().default;
    Object.defineProperty(ad, "__esModule", { value: !0 });
    ad.default = l$;
    var u$ = lD(st()),
      o$ = lD(x());
    function l$(r) {
      return (0, o$.default)(1, arguments), (0, u$.default)(r, 1);
    }
    dD.exports = ad.default;
  });
  var vD = g((sd, hD) => {
    "use strict";
    var cD = _().default;
    Object.defineProperty(sd, "__esModule", { value: !0 });
    sd.default = c$;
    var d$ = cD(st()),
      f$ = cD(x());
    function c$(r) {
      return (0, f$.default)(1, arguments), (0, d$.default)(r, 6);
    }
    hD.exports = sd.default;
  });
  var _D = g((ud, pD) => {
    "use strict";
    var gD = _().default;
    Object.defineProperty(ud, "__esModule", { value: !0 });
    ud.default = g$;
    var h$ = gD(st()),
      v$ = gD(x());
    function g$(r) {
      return (0, v$.default)(1, arguments), (0, h$.default)(r, 0);
    }
    pD.exports = ud.default;
  });
  var xD = g((od, bD) => {
    "use strict";
    var mD = _().default;
    Object.defineProperty(od, "__esModule", { value: !0 });
    od.default = m$;
    var p$ = mD(st()),
      _$ = mD(x());
    function m$(r) {
      return (0, _$.default)(1, arguments), (0, p$.default)(r, 4);
    }
    bD.exports = od.default;
  });
  var OD = g((ld, qD) => {
    "use strict";
    var yD = _().default;
    Object.defineProperty(ld, "__esModule", { value: !0 });
    ld.default = y$;
    var b$ = yD(st()),
      x$ = yD(x());
    function y$(r) {
      return (0, x$.default)(1, arguments), (0, b$.default)(r, 2);
    }
    qD.exports = ld.default;
  });
  var DD = g((dd, MD) => {
    "use strict";
    var PD = _().default;
    Object.defineProperty(dd, "__esModule", { value: !0 });
    dd.default = P$;
    var q$ = PD(st()),
      O$ = PD(x());
    function P$(r) {
      return (0, O$.default)(1, arguments), (0, q$.default)(r, 3);
    }
    MD.exports = dd.default;
  });
  var SD = g((hd, kD) => {
    "use strict";
    var wD = _().default;
    Object.defineProperty(hd, "__esModule", { value: !0 });
    hd.default = w$;
    var cd = ae(),
      M$ = wD(x()),
      D$ = wD(F());
    function w$(r, e) {
      var t;
      (0, M$.default)(1, arguments);
      var i = (0, D$.default)(
        (t = e == null ? void 0 : e.additionalDigits) !== null && t !== void 0
          ? t
          : 2
      );
      if (i !== 2 && i !== 1 && i !== 0)
        throw new RangeError("additionalDigits must be 0, 1 or 2");
      if (
        !(
          typeof r == "string" ||
          Object.prototype.toString.call(r) === "[object String]"
        )
      )
        return new Date(NaN);
      var n = C$(r),
        a;
      if (n.date) {
        var s = R$(n.date, i);
        a = I$(s.restDateString, s.year);
      }
      if (!a || isNaN(a.getTime())) return new Date(NaN);
      var u = a.getTime(),
        o = 0,
        l;
      if (n.time && ((o = j$(n.time)), isNaN(o))) return new Date(NaN);
      if (n.timezone) {
        if (((l = A$(n.timezone)), isNaN(l))) return new Date(NaN);
      } else {
        var d = new Date(u + o),
          c = new Date(0);
        return (
          c.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()),
          c.setHours(
            d.getUTCHours(),
            d.getUTCMinutes(),
            d.getUTCSeconds(),
            d.getUTCMilliseconds()
          ),
          c
        );
      }
      return new Date(u + o + l);
    }
    var fd = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/,
      },
      T$ = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
      k$ =
        /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
      S$ = /^([+-])(\d{2})(?::?(\d{2}))?$/;
    function C$(r) {
      var e = {},
        t = r.split(fd.dateTimeDelimiter),
        i;
      if (t.length > 2) return e;
      if (
        (/:/.test(t[0])
          ? (i = t[0])
          : ((e.date = t[0]),
            (i = t[1]),
            fd.timeZoneDelimiter.test(e.date) &&
              ((e.date = r.split(fd.timeZoneDelimiter)[0]),
              (i = r.substr(e.date.length, r.length)))),
        i)
      ) {
        var n = fd.timezone.exec(i);
        n
          ? ((e.time = i.replace(n[1], "")), (e.timezone = n[1]))
          : (e.time = i);
      }
      return e;
    }
    function R$(r, e) {
      var t = new RegExp(
          "^(?:(\\d{4}|[+-]\\d{" +
            (4 + e) +
            "})|(\\d{2}|[+-]\\d{" +
            (2 + e) +
            "})$)"
        ),
        i = r.match(t);
      if (!i) return { year: NaN, restDateString: "" };
      var n = i[1] ? parseInt(i[1]) : null,
        a = i[2] ? parseInt(i[2]) : null;
      return {
        year: a === null ? n : a * 100,
        restDateString: r.slice((i[1] || i[2]).length),
      };
    }
    function I$(r, e) {
      if (e === null) return new Date(NaN);
      var t = r.match(T$);
      if (!t) return new Date(NaN);
      var i = !!t[4],
        n = Zi(t[1]),
        a = Zi(t[2]) - 1,
        s = Zi(t[3]),
        u = Zi(t[4]),
        o = Zi(t[5]) - 1;
      if (i) return W$(e, u, o) ? E$(e, u, o) : new Date(NaN);
      var l = new Date(0);
      return !L$(e, a, s) || !F$(e, n)
        ? new Date(NaN)
        : (l.setUTCFullYear(e, a, Math.max(n, s)), l);
    }
    function Zi(r) {
      return r ? parseInt(r) : 1;
    }
    function j$(r) {
      var e = r.match(k$);
      if (!e) return NaN;
      var t = gv(e[1]),
        i = gv(e[2]),
        n = gv(e[3]);
      return Y$(t, i, n)
        ? t * cd.millisecondsInHour + i * cd.millisecondsInMinute + n * 1e3
        : NaN;
    }
    function gv(r) {
      return (r && parseFloat(r.replace(",", "."))) || 0;
    }
    function A$(r) {
      if (r === "Z") return 0;
      var e = r.match(S$);
      if (!e) return 0;
      var t = e[1] === "+" ? -1 : 1,
        i = parseInt(e[2]),
        n = (e[3] && parseInt(e[3])) || 0;
      return H$(i, n)
        ? t * (i * cd.millisecondsInHour + n * cd.millisecondsInMinute)
        : NaN;
    }
    function E$(r, e, t) {
      var i = new Date(0);
      i.setUTCFullYear(r, 0, 4);
      var n = i.getUTCDay() || 7,
        a = (e - 1) * 7 + t + 1 - n;
      return i.setUTCDate(i.getUTCDate() + a), i;
    }
    var N$ = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function TD(r) {
      return r % 400 === 0 || (r % 4 === 0 && r % 100 !== 0);
    }
    function L$(r, e, t) {
      return e >= 0 && e <= 11 && t >= 1 && t <= (N$[e] || (TD(r) ? 29 : 28));
    }
    function F$(r, e) {
      return e >= 1 && e <= (TD(r) ? 366 : 365);
    }
    function W$(r, e, t) {
      return e >= 1 && e <= 53 && t >= 0 && t <= 6;
    }
    function Y$(r, e, t) {
      return r === 24
        ? e === 0 && t === 0
        : t >= 0 && t < 60 && e >= 0 && e < 60 && r >= 0 && r < 25;
    }
    function H$(r, e) {
      return e >= 0 && e <= 59;
    }
    kD.exports = hd.default;
  });
  var ID = g((vd, RD) => {
    "use strict";
    var CD = _().default;
    Object.defineProperty(vd, "__esModule", { value: !0 });
    vd.default = U$;
    var z$ = CD(T()),
      B$ = CD(x());
    function U$(r) {
      if (((0, B$.default)(1, arguments), typeof r == "string")) {
        var e = r.match(
          /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/
        );
        return e
          ? new Date(
              Date.UTC(
                +e[1],
                +e[2] - 1,
                +e[3],
                +e[4] - (+e[9] || 0) * (e[8] == "-" ? -1 : 1),
                +e[5] - (+e[10] || 0) * (e[8] == "-" ? -1 : 1),
                +e[6],
                +((e[7] || "0") + "00").substring(0, 3)
              )
            )
          : new Date(NaN);
      }
      return (0, z$.default)(r);
    }
    RD.exports = vd.default;
  });
  var ut = g((gd, jD) => {
    "use strict";
    var pv = _().default;
    Object.defineProperty(gd, "__esModule", { value: !0 });
    gd.default = X$;
    var V$ = pv(x()),
      $$ = pv(Ti()),
      Q$ = pv(Gi());
    function X$(r, e) {
      (0, V$.default)(2, arguments);
      var t = (0, $$.default)(r) - e;
      return t <= 0 && (t += 7), (0, Q$.default)(r, t);
    }
    jD.exports = gd.default;
  });
  var ND = g((pd, ED) => {
    "use strict";
    var AD = _().default;
    Object.defineProperty(pd, "__esModule", { value: !0 });
    pd.default = Z$;
    var K$ = AD(x()),
      G$ = AD(ut());
    function Z$(r) {
      return (0, K$.default)(1, arguments), (0, G$.default)(r, 5);
    }
    ED.exports = pd.default;
  });
  var WD = g((_d, FD) => {
    "use strict";
    var LD = _().default;
    Object.defineProperty(_d, "__esModule", { value: !0 });
    _d.default = t6;
    var J$ = LD(x()),
      e6 = LD(ut());
    function t6(r) {
      return (0, J$.default)(1, arguments), (0, e6.default)(r, 1);
    }
    FD.exports = _d.default;
  });
  var zD = g((md, HD) => {
    "use strict";
    var YD = _().default;
    Object.defineProperty(md, "__esModule", { value: !0 });
    md.default = n6;
    var r6 = YD(x()),
      i6 = YD(ut());
    function n6(r) {
      return (0, r6.default)(1, arguments), (0, i6.default)(r, 6);
    }
    HD.exports = md.default;
  });
  var VD = g((bd, UD) => {
    "use strict";
    var BD = _().default;
    Object.defineProperty(bd, "__esModule", { value: !0 });
    bd.default = u6;
    var a6 = BD(x()),
      s6 = BD(ut());
    function u6(r) {
      return (0, a6.default)(1, arguments), (0, s6.default)(r, 0);
    }
    UD.exports = bd.default;
  });
  var XD = g((xd, QD) => {
    "use strict";
    var $D = _().default;
    Object.defineProperty(xd, "__esModule", { value: !0 });
    xd.default = d6;
    var o6 = $D(x()),
      l6 = $D(ut());
    function d6(r) {
      return (0, o6.default)(1, arguments), (0, l6.default)(r, 4);
    }
    QD.exports = xd.default;
  });
  var ZD = g((yd, GD) => {
    "use strict";
    var KD = _().default;
    Object.defineProperty(yd, "__esModule", { value: !0 });
    yd.default = h6;
    var f6 = KD(x()),
      c6 = KD(ut());
    function h6(r) {
      return (0, f6.default)(1, arguments), (0, c6.default)(r, 2);
    }
    GD.exports = yd.default;
  });
  var tw = g((qd, ew) => {
    "use strict";
    var JD = _().default;
    Object.defineProperty(qd, "__esModule", { value: !0 });
    qd.default = p6;
    var v6 = JD(x()),
      g6 = JD(ut());
    function p6(r) {
      return (0, v6.default)(1, arguments), (0, g6.default)(r, 3);
    }
    ew.exports = qd.default;
  });
  var iw = g((Od, rw) => {
    "use strict";
    var _6 = _().default;
    Object.defineProperty(Od, "__esModule", { value: !0 });
    Od.default = x6;
    var m6 = _6(x()),
      b6 = ae();
    function x6(r) {
      return (0, m6.default)(1, arguments), Math.floor(r * b6.monthsInQuarter);
    }
    rw.exports = Od.default;
  });
  var aw = g((Pd, nw) => {
    "use strict";
    var y6 = _().default;
    Object.defineProperty(Pd, "__esModule", { value: !0 });
    Pd.default = P6;
    var q6 = y6(x()),
      O6 = ae();
    function P6(r) {
      (0, q6.default)(1, arguments);
      var e = r / O6.quartersInYear;
      return Math.floor(e);
    }
    nw.exports = Pd.default;
  });
  var ow = g((Md, uw) => {
    "use strict";
    var sw = _().default;
    Object.defineProperty(Md, "__esModule", { value: !0 });
    Md.default = T6;
    var M6 = sw(T()),
      D6 = Et(),
      w6 = sw(F());
    function T6(r, e) {
      var t;
      if (arguments.length < 1)
        throw new TypeError(
          "1 argument required, but only none provided present"
        );
      var i = (0, w6.default)(
        (t = e == null ? void 0 : e.nearestTo) !== null && t !== void 0 ? t : 1
      );
      if (i < 1 || i > 30)
        throw new RangeError("`options.nearestTo` must be between 1 and 30");
      var n = (0, M6.default)(r),
        a = n.getSeconds(),
        s = n.getMinutes() + a / 60,
        u = (0, D6.getRoundingMethod)(e == null ? void 0 : e.roundingMethod),
        o = u(s / i) * i,
        l = s % i,
        d = Math.round(l / i) * i;
      return new Date(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
        n.getHours(),
        o + d
      );
    }
    uw.exports = Md.default;
  });
  var dw = g((Dd, lw) => {
    "use strict";
    var k6 = _().default;
    Object.defineProperty(Dd, "__esModule", { value: !0 });
    Dd.default = R6;
    var S6 = k6(x()),
      C6 = ae();
    function R6(r) {
      (0, S6.default)(1, arguments);
      var e = r / C6.secondsInHour;
      return Math.floor(e);
    }
    lw.exports = Dd.default;
  });
  var cw = g((wd, fw) => {
    "use strict";
    var I6 = _().default;
    Object.defineProperty(wd, "__esModule", { value: !0 });
    wd.default = E6;
    var j6 = I6(x()),
      A6 = ae();
    function E6(r) {
      return (0, j6.default)(1, arguments), r * A6.millisecondsInSecond;
    }
    fw.exports = wd.default;
  });
  var vw = g((Td, hw) => {
    "use strict";
    var N6 = _().default;
    Object.defineProperty(Td, "__esModule", { value: !0 });
    Td.default = W6;
    var L6 = N6(x()),
      F6 = ae();
    function W6(r) {
      (0, L6.default)(1, arguments);
      var e = r / F6.secondsInMinute;
      return Math.floor(e);
    }
    hw.exports = Td.default;
  });
  var Cd = g((Sd, gw) => {
    "use strict";
    var kd = _().default;
    Object.defineProperty(Sd, "__esModule", { value: !0 });
    Sd.default = U6;
    var Y6 = kd(F()),
      H6 = kd(T()),
      z6 = kd(ph()),
      B6 = kd(x());
    function U6(r, e) {
      (0, B6.default)(2, arguments);
      var t = (0, H6.default)(r),
        i = (0, Y6.default)(e),
        n = t.getFullYear(),
        a = t.getDate(),
        s = new Date(0);
      s.setFullYear(n, i, 15), s.setHours(0, 0, 0, 0);
      var u = (0, z6.default)(s);
      return t.setMonth(i, Math.min(a, u)), t;
    }
    gw.exports = Sd.default;
  });
  var _w = g((Rd, pw) => {
    "use strict";
    var en = _().default;
    Object.defineProperty(Rd, "__esModule", { value: !0 });
    Rd.default = K6;
    var V6 = en(De()),
      $6 = en(T()),
      Q6 = en(Cd()),
      Ji = en(F()),
      X6 = en(x());
    function K6(r, e) {
      if (
        ((0, X6.default)(2, arguments),
        (0, V6.default)(e) !== "object" || e === null)
      )
        throw new RangeError("values parameter must be an object");
      var t = (0, $6.default)(r);
      return isNaN(t.getTime())
        ? new Date(NaN)
        : (e.year != null && t.setFullYear(e.year),
          e.month != null && (t = (0, Q6.default)(t, e.month)),
          e.date != null && t.setDate((0, Ji.default)(e.date)),
          e.hours != null && t.setHours((0, Ji.default)(e.hours)),
          e.minutes != null && t.setMinutes((0, Ji.default)(e.minutes)),
          e.seconds != null && t.setSeconds((0, Ji.default)(e.seconds)),
          e.milliseconds != null &&
            t.setMilliseconds((0, Ji.default)(e.milliseconds)),
          t);
    }
    pw.exports = Rd.default;
  });
  var bw = g((Id, mw) => {
    "use strict";
    var _v = _().default;
    Object.defineProperty(Id, "__esModule", { value: !0 });
    Id.default = e7;
    var G6 = _v(F()),
      Z6 = _v(T()),
      J6 = _v(x());
    function e7(r, e) {
      (0, J6.default)(2, arguments);
      var t = (0, Z6.default)(r),
        i = (0, G6.default)(e);
      return t.setDate(i), t;
    }
    mw.exports = Id.default;
  });
  var qw = g((Ad, yw) => {
    "use strict";
    var jd = _().default;
    Object.defineProperty(Ad, "__esModule", { value: !0 });
    Ad.default = a7;
    var t7 = jd(Fe()),
      r7 = jd(T()),
      xw = jd(F()),
      i7 = jd(x()),
      n7 = le();
    function a7(r, e, t) {
      var i, n, a, s, u, o, l, d;
      (0, i7.default)(2, arguments);
      var c = (0, n7.getDefaultOptions)(),
        h = (0, xw.default)(
          (i =
            (n =
              (a =
                (s = t == null ? void 0 : t.weekStartsOn) !== null &&
                s !== void 0
                  ? s
                  : t == null ||
                    (u = t.locale) === null ||
                    u === void 0 ||
                    (o = u.options) === null ||
                    o === void 0
                  ? void 0
                  : o.weekStartsOn) !== null && a !== void 0
                ? a
                : c.weekStartsOn) !== null && n !== void 0
              ? n
              : (l = c.locale) === null ||
                l === void 0 ||
                (d = l.options) === null ||
                d === void 0
              ? void 0
              : d.weekStartsOn) !== null && i !== void 0
            ? i
            : 0
        );
      if (!(h >= 0 && h <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var v = (0, r7.default)(r),
        p = (0, xw.default)(e),
        m = v.getDay(),
        q = p % 7,
        O = (q + 7) % 7,
        P = 7 - h,
        w = p < 0 || p > 6 ? p - ((m + P) % 7) : ((O + P) % 7) - ((m + P) % 7);
      return (0, t7.default)(v, w);
    }
    yw.exports = Ad.default;
  });
  var Pw = g((Ed, Ow) => {
    "use strict";
    var mv = _().default;
    Object.defineProperty(Ed, "__esModule", { value: !0 });
    Ed.default = l7;
    var s7 = mv(F()),
      u7 = mv(T()),
      o7 = mv(x());
    function l7(r, e) {
      (0, o7.default)(2, arguments);
      var t = (0, u7.default)(r),
        i = (0, s7.default)(e);
      return t.setMonth(0), t.setDate(i), t;
    }
    Ow.exports = Ed.default;
  });
  var ww = g((Nd, Dw) => {
    "use strict";
    var d7 = _().default;
    Object.defineProperty(Nd, "__esModule", { value: !0 });
    Nd.default = c7;
    var Mw = le(),
      f7 = d7(x());
    function c7(r) {
      (0, f7.default)(1, arguments);
      var e = {},
        t = (0, Mw.getDefaultOptions)();
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) &&
          (r[n] === void 0 ? delete e[n] : (e[n] = r[n]));
      (0, Mw.setDefaultOptions)(e);
    }
    Dw.exports = Nd.default;
  });
  var kw = g((Ld, Tw) => {
    "use strict";
    var bv = _().default;
    Object.defineProperty(Ld, "__esModule", { value: !0 });
    Ld.default = p7;
    var h7 = bv(F()),
      v7 = bv(T()),
      g7 = bv(x());
    function p7(r, e) {
      (0, g7.default)(2, arguments);
      var t = (0, v7.default)(r),
        i = (0, h7.default)(e);
      return t.setHours(i), t;
    }
    Tw.exports = Ld.default;
  });
  var Cw = g((Fd, Sw) => {
    "use strict";
    var tn = _().default;
    Object.defineProperty(Fd, "__esModule", { value: !0 });
    Fd.default = q7;
    var _7 = tn(F()),
      m7 = tn(T()),
      b7 = tn(Fe()),
      x7 = tn(bh()),
      y7 = tn(x());
    function q7(r, e) {
      (0, y7.default)(2, arguments);
      var t = (0, m7.default)(r),
        i = (0, _7.default)(e),
        n = (0, x7.default)(t),
        a = i - n;
      return (0, b7.default)(t, a);
    }
    Sw.exports = Fd.default;
  });
  var Iw = g((Yd, Rw) => {
    "use strict";
    var Wd = _().default;
    Object.defineProperty(Yd, "__esModule", { value: !0 });
    Yd.default = w7;
    var O7 = Wd(F()),
      P7 = Wd(T()),
      M7 = Wd(xh()),
      D7 = Wd(x());
    function w7(r, e) {
      (0, D7.default)(2, arguments);
      var t = (0, P7.default)(r),
        i = (0, O7.default)(e),
        n = (0, M7.default)(t) - i;
      return t.setDate(t.getDate() - n * 7), t;
    }
    Rw.exports = Yd.default;
  });
  var Aw = g((Hd, jw) => {
    "use strict";
    var xv = _().default;
    Object.defineProperty(Hd, "__esModule", { value: !0 });
    Hd.default = C7;
    var T7 = xv(F()),
      k7 = xv(T()),
      S7 = xv(x());
    function C7(r, e) {
      (0, S7.default)(2, arguments);
      var t = (0, k7.default)(r),
        i = (0, T7.default)(e);
      return t.setMilliseconds(i), t;
    }
    jw.exports = Hd.default;
  });
  var Nw = g((zd, Ew) => {
    "use strict";
    var yv = _().default;
    Object.defineProperty(zd, "__esModule", { value: !0 });
    zd.default = A7;
    var R7 = yv(F()),
      I7 = yv(T()),
      j7 = yv(x());
    function A7(r, e) {
      (0, j7.default)(2, arguments);
      var t = (0, I7.default)(r),
        i = (0, R7.default)(e);
      return t.setMinutes(i), t;
    }
    Ew.exports = zd.default;
  });
  var Fw = g((Ud, Lw) => {
    "use strict";
    var Bd = _().default;
    Object.defineProperty(Ud, "__esModule", { value: !0 });
    Ud.default = W7;
    var E7 = Bd(F()),
      N7 = Bd(T()),
      L7 = Bd(Cd()),
      F7 = Bd(x());
    function W7(r, e) {
      (0, F7.default)(2, arguments);
      var t = (0, N7.default)(r),
        i = (0, E7.default)(e),
        n = Math.floor(t.getMonth() / 3) + 1,
        a = i - n;
      return (0, L7.default)(t, t.getMonth() + a * 3);
    }
    Lw.exports = Ud.default;
  });
  var Yw = g((Vd, Ww) => {
    "use strict";
    var qv = _().default;
    Object.defineProperty(Vd, "__esModule", { value: !0 });
    Vd.default = B7;
    var Y7 = qv(F()),
      H7 = qv(T()),
      z7 = qv(x());
    function B7(r, e) {
      (0, z7.default)(2, arguments);
      var t = (0, H7.default)(r),
        i = (0, Y7.default)(e);
      return t.setSeconds(i), t;
    }
    Ww.exports = Vd.default;
  });
  var zw = g((Qd, Hw) => {
    "use strict";
    var $d = _().default;
    Object.defineProperty(Qd, "__esModule", { value: !0 });
    Qd.default = X7;
    var U7 = $d(Ph()),
      V7 = $d(T()),
      $7 = $d(x()),
      Q7 = $d(F());
    function X7(r, e, t) {
      (0, $7.default)(2, arguments);
      var i = (0, V7.default)(r),
        n = (0, Q7.default)(e),
        a = (0, U7.default)(i, t) - n;
      return i.setDate(i.getDate() - a * 7), i;
    }
    Hw.exports = Qd.default;
  });
  var $w = g((Xd, Vw) => {
    "use strict";
    var rn = _().default;
    Object.defineProperty(Xd, "__esModule", { value: !0 });
    Xd.default = e9;
    var K7 = rn(Je()),
      Bw = rn(Ju()),
      G7 = rn(T()),
      Uw = rn(F()),
      Z7 = rn(x()),
      J7 = le();
    function e9(r, e, t) {
      var i, n, a, s, u, o, l, d;
      (0, Z7.default)(2, arguments);
      var c = (0, J7.getDefaultOptions)(),
        h = (0, Uw.default)(
          (i =
            (n =
              (a =
                (s = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
                s !== void 0
                  ? s
                  : t == null ||
                    (u = t.locale) === null ||
                    u === void 0 ||
                    (o = u.options) === null ||
                    o === void 0
                  ? void 0
                  : o.firstWeekContainsDate) !== null && a !== void 0
                ? a
                : c.firstWeekContainsDate) !== null && n !== void 0
              ? n
              : (l = c.locale) === null ||
                l === void 0 ||
                (d = l.options) === null ||
                d === void 0
              ? void 0
              : d.firstWeekContainsDate) !== null && i !== void 0
            ? i
            : 1
        ),
        v = (0, G7.default)(r),
        p = (0, Uw.default)(e),
        m = (0, K7.default)(v, (0, Bw.default)(v, t)),
        q = new Date(0);
      return (
        q.setFullYear(p, 0, h),
        q.setHours(0, 0, 0, 0),
        (v = (0, Bw.default)(q, t)),
        v.setDate(v.getDate() + m),
        v
      );
    }
    Vw.exports = Xd.default;
  });
  var Xw = g((Kd, Qw) => {
    "use strict";
    var Ov = _().default;
    Object.defineProperty(Kd, "__esModule", { value: !0 });
    Kd.default = n9;
    var t9 = Ov(F()),
      r9 = Ov(T()),
      i9 = Ov(x());
    function n9(r, e) {
      (0, i9.default)(2, arguments);
      var t = (0, r9.default)(r),
        i = (0, t9.default)(e);
      return isNaN(t.getTime()) ? new Date(NaN) : (t.setFullYear(i), t);
    }
    Qw.exports = Kd.default;
  });
  var Zw = g((Gd, Gw) => {
    "use strict";
    var Kw = _().default;
    Object.defineProperty(Gd, "__esModule", { value: !0 });
    Gd.default = u9;
    var a9 = Kw(T()),
      s9 = Kw(x());
    function u9(r) {
      (0, s9.default)(1, arguments);
      var e = (0, a9.default)(r),
        t = e.getFullYear(),
        i = Math.floor(t / 10) * 10;
      return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    Gw.exports = Gd.default;
  });
  var e1 = g((Zd, Jw) => {
    "use strict";
    var o9 = _().default;
    Object.defineProperty(Zd, "__esModule", { value: !0 });
    Zd.default = d9;
    var l9 = o9(ai());
    function d9() {
      return (0, l9.default)(Date.now());
    }
    Jw.exports = Zd.default;
  });
  var r1 = g((Jd, t1) => {
    "use strict";
    Object.defineProperty(Jd, "__esModule", { value: !0 });
    Jd.default = f9;
    function f9() {
      var r = new Date(),
        e = r.getFullYear(),
        t = r.getMonth(),
        i = r.getDate(),
        n = new Date(0);
      return n.setFullYear(e, t, i + 1), n.setHours(0, 0, 0, 0), n;
    }
    t1.exports = Jd.default;
  });
  var n1 = g((ef, i1) => {
    "use strict";
    Object.defineProperty(ef, "__esModule", { value: !0 });
    ef.default = c9;
    function c9() {
      var r = new Date(),
        e = r.getFullYear(),
        t = r.getMonth(),
        i = r.getDate(),
        n = new Date(0);
      return n.setFullYear(e, t, i - 1), n.setHours(0, 0, 0, 0), n;
    }
    i1.exports = ef.default;
  });
  var Mv = g((tf, a1) => {
    "use strict";
    var Pv = _().default;
    Object.defineProperty(tf, "__esModule", { value: !0 });
    tf.default = p9;
    var h9 = Pv(F()),
      v9 = Pv(ur()),
      g9 = Pv(x());
    function p9(r, e) {
      (0, g9.default)(2, arguments);
      var t = (0, h9.default)(e);
      return (0, v9.default)(r, -t);
    }
    a1.exports = tf.default;
  });
  var u1 = g((rf, s1) => {
    "use strict";
    var nn = _().default;
    Object.defineProperty(rf, "__esModule", { value: !0 });
    rf.default = y9;
    var _9 = nn(De()),
      m9 = nn(Gi()),
      b9 = nn(Mv()),
      x9 = nn(x()),
      Qt = nn(F());
    function y9(r, e) {
      if (
        ((0, x9.default)(2, arguments), !e || (0, _9.default)(e) !== "object")
      )
        return new Date(NaN);
      var t = e.years ? (0, Qt.default)(e.years) : 0,
        i = e.months ? (0, Qt.default)(e.months) : 0,
        n = e.weeks ? (0, Qt.default)(e.weeks) : 0,
        a = e.days ? (0, Qt.default)(e.days) : 0,
        s = e.hours ? (0, Qt.default)(e.hours) : 0,
        u = e.minutes ? (0, Qt.default)(e.minutes) : 0,
        o = e.seconds ? (0, Qt.default)(e.seconds) : 0,
        l = (0, b9.default)(r, i + t * 12),
        d = (0, m9.default)(l, a + n * 7),
        c = u + s * 60,
        h = o + c * 60,
        v = h * 1e3,
        p = new Date(d.getTime() - v);
      return p;
    }
    s1.exports = rf.default;
  });
  var l1 = g((nf, o1) => {
    "use strict";
    var Dv = _().default;
    Object.defineProperty(nf, "__esModule", { value: !0 });
    nf.default = M9;
    var q9 = Dv(Zf()),
      O9 = Dv(x()),
      P9 = Dv(F());
    function M9(r, e) {
      (0, O9.default)(2, arguments);
      var t = (0, P9.default)(e);
      return (0, q9.default)(r, -t);
    }
    o1.exports = nf.default;
  });
  var f1 = g((af, d1) => {
    "use strict";
    var wv = _().default;
    Object.defineProperty(af, "__esModule", { value: !0 });
    af.default = k9;
    var D9 = wv(Qn()),
      w9 = wv(x()),
      T9 = wv(F());
    function k9(r, e) {
      (0, w9.default)(2, arguments);
      var t = (0, T9.default)(e);
      return (0, D9.default)(r, -t);
    }
    d1.exports = af.default;
  });
  var h1 = g((sf, c1) => {
    "use strict";
    var Tv = _().default;
    Object.defineProperty(sf, "__esModule", { value: !0 });
    sf.default = I9;
    var S9 = Tv(ua()),
      C9 = Tv(x()),
      R9 = Tv(F());
    function I9(r, e) {
      (0, C9.default)(2, arguments);
      var t = (0, R9.default)(e);
      return (0, S9.default)(r, -t);
    }
    c1.exports = sf.default;
  });
  var g1 = g((uf, v1) => {
    "use strict";
    var kv = _().default;
    Object.defineProperty(uf, "__esModule", { value: !0 });
    uf.default = N9;
    var j9 = kv(F()),
      A9 = kv(la()),
      E9 = kv(x());
    function N9(r, e) {
      (0, E9.default)(2, arguments);
      var t = (0, j9.default)(e);
      return (0, A9.default)(r, -t);
    }
    v1.exports = uf.default;
  });
  var _1 = g((of, p1) => {
    "use strict";
    var Sv = _().default;
    Object.defineProperty(of, "__esModule", { value: !0 });
    of.default = Y9;
    var L9 = Sv(F()),
      F9 = Sv(dc()),
      W9 = Sv(x());
    function Y9(r, e) {
      (0, W9.default)(2, arguments);
      var t = (0, L9.default)(e);
      return (0, F9.default)(r, -t);
    }
    p1.exports = of.default;
  });
  var b1 = g((lf, m1) => {
    "use strict";
    var Cv = _().default;
    Object.defineProperty(lf, "__esModule", { value: !0 });
    lf.default = U9;
    var H9 = Cv(F()),
      z9 = Cv(ui()),
      B9 = Cv(x());
    function U9(r, e) {
      (0, B9.default)(2, arguments);
      var t = (0, H9.default)(e);
      return (0, z9.default)(r, -t);
    }
    m1.exports = lf.default;
  });
  var y1 = g((df, x1) => {
    "use strict";
    var Rv = _().default;
    Object.defineProperty(df, "__esModule", { value: !0 });
    df.default = X9;
    var V9 = Rv(F()),
      $9 = Rv(hc()),
      Q9 = Rv(x());
    function X9(r, e) {
      (0, Q9.default)(2, arguments);
      var t = (0, V9.default)(e);
      return (0, $9.default)(r, -t);
    }
    x1.exports = df.default;
  });
  var O1 = g((ff, q1) => {
    "use strict";
    var K9 = _().default;
    Object.defineProperty(ff, "__esModule", { value: !0 });
    ff.default = J9;
    var G9 = K9(x()),
      Z9 = ae();
    function J9(r) {
      return (0, G9.default)(1, arguments), Math.floor(r * Z9.daysInWeek);
    }
    q1.exports = ff.default;
  });
  var M1 = g((cf, P1) => {
    "use strict";
    var e8 = _().default;
    Object.defineProperty(cf, "__esModule", { value: !0 });
    cf.default = i8;
    var t8 = e8(x()),
      r8 = ae();
    function i8(r) {
      return (0, t8.default)(1, arguments), Math.floor(r * r8.monthsInYear);
    }
    P1.exports = cf.default;
  });
  var w1 = g((hf, D1) => {
    "use strict";
    var n8 = _().default;
    Object.defineProperty(hf, "__esModule", { value: !0 });
    hf.default = u8;
    var a8 = n8(x()),
      s8 = ae();
    function u8(r) {
      return (0, a8.default)(1, arguments), Math.floor(r * s8.quartersInYear);
    }
    D1.exports = hf.default;
  });
  var T1 = g((b) => {
    "use strict";
    var y = _().default;
    Object.defineProperty(b, "__esModule", { value: !0 });
    var o8 = {
      add: !0,
      addBusinessDays: !0,
      addDays: !0,
      addHours: !0,
      addISOWeekYears: !0,
      addMilliseconds: !0,
      addMinutes: !0,
      addMonths: !0,
      addQuarters: !0,
      addSeconds: !0,
      addWeeks: !0,
      addYears: !0,
      areIntervalsOverlapping: !0,
      clamp: !0,
      closestIndexTo: !0,
      closestTo: !0,
      compareAsc: !0,
      compareDesc: !0,
      daysToWeeks: !0,
      differenceInBusinessDays: !0,
      differenceInCalendarDays: !0,
      differenceInCalendarISOWeekYears: !0,
      differenceInCalendarISOWeeks: !0,
      differenceInCalendarMonths: !0,
      differenceInCalendarQuarters: !0,
      differenceInCalendarWeeks: !0,
      differenceInCalendarYears: !0,
      differenceInDays: !0,
      differenceInHours: !0,
      differenceInISOWeekYears: !0,
      differenceInMilliseconds: !0,
      differenceInMinutes: !0,
      differenceInMonths: !0,
      differenceInQuarters: !0,
      differenceInSeconds: !0,
      differenceInWeeks: !0,
      differenceInYears: !0,
      eachDayOfInterval: !0,
      eachHourOfInterval: !0,
      eachMinuteOfInterval: !0,
      eachMonthOfInterval: !0,
      eachQuarterOfInterval: !0,
      eachWeekOfInterval: !0,
      eachWeekendOfInterval: !0,
      eachWeekendOfMonth: !0,
      eachWeekendOfYear: !0,
      eachYearOfInterval: !0,
      endOfDay: !0,
      endOfDecade: !0,
      endOfHour: !0,
      endOfISOWeek: !0,
      endOfISOWeekYear: !0,
      endOfMinute: !0,
      endOfMonth: !0,
      endOfQuarter: !0,
      endOfSecond: !0,
      endOfToday: !0,
      endOfTomorrow: !0,
      endOfWeek: !0,
      endOfYear: !0,
      endOfYesterday: !0,
      format: !0,
      formatDistance: !0,
      formatDistanceStrict: !0,
      formatDistanceToNow: !0,
      formatDistanceToNowStrict: !0,
      formatDuration: !0,
      formatISO: !0,
      formatISO9075: !0,
      formatISODuration: !0,
      formatRFC3339: !0,
      formatRFC7231: !0,
      formatRelative: !0,
      fromUnixTime: !0,
      getDate: !0,
      getDay: !0,
      getDayOfYear: !0,
      getDaysInMonth: !0,
      getDaysInYear: !0,
      getDecade: !0,
      getDefaultOptions: !0,
      getHours: !0,
      getISODay: !0,
      getISOWeek: !0,
      getISOWeekYear: !0,
      getISOWeeksInYear: !0,
      getMilliseconds: !0,
      getMinutes: !0,
      getMonth: !0,
      getOverlappingDaysInIntervals: !0,
      getQuarter: !0,
      getSeconds: !0,
      getTime: !0,
      getUnixTime: !0,
      getWeek: !0,
      getWeekOfMonth: !0,
      getWeekYear: !0,
      getWeeksInMonth: !0,
      getYear: !0,
      hoursToMilliseconds: !0,
      hoursToMinutes: !0,
      hoursToSeconds: !0,
      intervalToDuration: !0,
      intlFormat: !0,
      intlFormatDistance: !0,
      isAfter: !0,
      isBefore: !0,
      isDate: !0,
      isEqual: !0,
      isExists: !0,
      isFirstDayOfMonth: !0,
      isFriday: !0,
      isFuture: !0,
      isLastDayOfMonth: !0,
      isLeapYear: !0,
      isMatch: !0,
      isMonday: !0,
      isPast: !0,
      isSameDay: !0,
      isSameHour: !0,
      isSameISOWeek: !0,
      isSameISOWeekYear: !0,
      isSameMinute: !0,
      isSameMonth: !0,
      isSameQuarter: !0,
      isSameSecond: !0,
      isSameWeek: !0,
      isSameYear: !0,
      isSaturday: !0,
      isSunday: !0,
      isThisHour: !0,
      isThisISOWeek: !0,
      isThisMinute: !0,
      isThisMonth: !0,
      isThisQuarter: !0,
      isThisSecond: !0,
      isThisWeek: !0,
      isThisYear: !0,
      isThursday: !0,
      isToday: !0,
      isTomorrow: !0,
      isTuesday: !0,
      isValid: !0,
      isWednesday: !0,
      isWeekend: !0,
      isWithinInterval: !0,
      isYesterday: !0,
      lastDayOfDecade: !0,
      lastDayOfISOWeek: !0,
      lastDayOfISOWeekYear: !0,
      lastDayOfMonth: !0,
      lastDayOfQuarter: !0,
      lastDayOfWeek: !0,
      lastDayOfYear: !0,
      lightFormat: !0,
      max: !0,
      milliseconds: !0,
      millisecondsToHours: !0,
      millisecondsToMinutes: !0,
      millisecondsToSeconds: !0,
      min: !0,
      minutesToHours: !0,
      minutesToMilliseconds: !0,
      minutesToSeconds: !0,
      monthsToQuarters: !0,
      monthsToYears: !0,
      nextDay: !0,
      nextFriday: !0,
      nextMonday: !0,
      nextSaturday: !0,
      nextSunday: !0,
      nextThursday: !0,
      nextTuesday: !0,
      nextWednesday: !0,
      parse: !0,
      parseISO: !0,
      parseJSON: !0,
      previousDay: !0,
      previousFriday: !0,
      previousMonday: !0,
      previousSaturday: !0,
      previousSunday: !0,
      previousThursday: !0,
      previousTuesday: !0,
      previousWednesday: !0,
      quartersToMonths: !0,
      quartersToYears: !0,
      roundToNearestMinutes: !0,
      secondsToHours: !0,
      secondsToMilliseconds: !0,
      secondsToMinutes: !0,
      set: !0,
      setDate: !0,
      setDay: !0,
      setDayOfYear: !0,
      setDefaultOptions: !0,
      setHours: !0,
      setISODay: !0,
      setISOWeek: !0,
      setISOWeekYear: !0,
      setMilliseconds: !0,
      setMinutes: !0,
      setMonth: !0,
      setQuarter: !0,
      setSeconds: !0,
      setWeek: !0,
      setWeekYear: !0,
      setYear: !0,
      startOfDay: !0,
      startOfDecade: !0,
      startOfHour: !0,
      startOfISOWeek: !0,
      startOfISOWeekYear: !0,
      startOfMinute: !0,
      startOfMonth: !0,
      startOfQuarter: !0,
      startOfSecond: !0,
      startOfToday: !0,
      startOfTomorrow: !0,
      startOfWeek: !0,
      startOfWeekYear: !0,
      startOfYear: !0,
      startOfYesterday: !0,
      sub: !0,
      subBusinessDays: !0,
      subDays: !0,
      subHours: !0,
      subISOWeekYears: !0,
      subMilliseconds: !0,
      subMinutes: !0,
      subMonths: !0,
      subQuarters: !0,
      subSeconds: !0,
      subWeeks: !0,
      subYears: !0,
      toDate: !0,
      weeksToDays: !0,
      yearsToMonths: !0,
      yearsToQuarters: !0,
    };
    Object.defineProperty(b, "add", {
      enumerable: !0,
      get: function () {
        return l8.default;
      },
    });
    Object.defineProperty(b, "addBusinessDays", {
      enumerable: !0,
      get: function () {
        return d8.default;
      },
    });
    Object.defineProperty(b, "addDays", {
      enumerable: !0,
      get: function () {
        return f8.default;
      },
    });
    Object.defineProperty(b, "addHours", {
      enumerable: !0,
      get: function () {
        return c8.default;
      },
    });
    Object.defineProperty(b, "addISOWeekYears", {
      enumerable: !0,
      get: function () {
        return h8.default;
      },
    });
    Object.defineProperty(b, "addMilliseconds", {
      enumerable: !0,
      get: function () {
        return v8.default;
      },
    });
    Object.defineProperty(b, "addMinutes", {
      enumerable: !0,
      get: function () {
        return g8.default;
      },
    });
    Object.defineProperty(b, "addMonths", {
      enumerable: !0,
      get: function () {
        return p8.default;
      },
    });
    Object.defineProperty(b, "addQuarters", {
      enumerable: !0,
      get: function () {
        return _8.default;
      },
    });
    Object.defineProperty(b, "addSeconds", {
      enumerable: !0,
      get: function () {
        return m8.default;
      },
    });
    Object.defineProperty(b, "addWeeks", {
      enumerable: !0,
      get: function () {
        return b8.default;
      },
    });
    Object.defineProperty(b, "addYears", {
      enumerable: !0,
      get: function () {
        return x8.default;
      },
    });
    Object.defineProperty(b, "areIntervalsOverlapping", {
      enumerable: !0,
      get: function () {
        return y8.default;
      },
    });
    Object.defineProperty(b, "clamp", {
      enumerable: !0,
      get: function () {
        return q8.default;
      },
    });
    Object.defineProperty(b, "closestIndexTo", {
      enumerable: !0,
      get: function () {
        return O8.default;
      },
    });
    Object.defineProperty(b, "closestTo", {
      enumerable: !0,
      get: function () {
        return P8.default;
      },
    });
    Object.defineProperty(b, "compareAsc", {
      enumerable: !0,
      get: function () {
        return M8.default;
      },
    });
    Object.defineProperty(b, "compareDesc", {
      enumerable: !0,
      get: function () {
        return D8.default;
      },
    });
    Object.defineProperty(b, "daysToWeeks", {
      enumerable: !0,
      get: function () {
        return w8.default;
      },
    });
    Object.defineProperty(b, "differenceInBusinessDays", {
      enumerable: !0,
      get: function () {
        return T8.default;
      },
    });
    Object.defineProperty(b, "differenceInCalendarDays", {
      enumerable: !0,
      get: function () {
        return k8.default;
      },
    });
    Object.defineProperty(b, "differenceInCalendarISOWeekYears", {
      enumerable: !0,
      get: function () {
        return S8.default;
      },
    });
    Object.defineProperty(b, "differenceInCalendarISOWeeks", {
      enumerable: !0,
      get: function () {
        return C8.default;
      },
    });
    Object.defineProperty(b, "differenceInCalendarMonths", {
      enumerable: !0,
      get: function () {
        return R8.default;
      },
    });
    Object.defineProperty(b, "differenceInCalendarQuarters", {
      enumerable: !0,
      get: function () {
        return I8.default;
      },
    });
    Object.defineProperty(b, "differenceInCalendarWeeks", {
      enumerable: !0,
      get: function () {
        return j8.default;
      },
    });
    Object.defineProperty(b, "differenceInCalendarYears", {
      enumerable: !0,
      get: function () {
        return A8.default;
      },
    });
    Object.defineProperty(b, "differenceInDays", {
      enumerable: !0,
      get: function () {
        return E8.default;
      },
    });
    Object.defineProperty(b, "differenceInHours", {
      enumerable: !0,
      get: function () {
        return N8.default;
      },
    });
    Object.defineProperty(b, "differenceInISOWeekYears", {
      enumerable: !0,
      get: function () {
        return L8.default;
      },
    });
    Object.defineProperty(b, "differenceInMilliseconds", {
      enumerable: !0,
      get: function () {
        return F8.default;
      },
    });
    Object.defineProperty(b, "differenceInMinutes", {
      enumerable: !0,
      get: function () {
        return W8.default;
      },
    });
    Object.defineProperty(b, "differenceInMonths", {
      enumerable: !0,
      get: function () {
        return Y8.default;
      },
    });
    Object.defineProperty(b, "differenceInQuarters", {
      enumerable: !0,
      get: function () {
        return H8.default;
      },
    });
    Object.defineProperty(b, "differenceInSeconds", {
      enumerable: !0,
      get: function () {
        return z8.default;
      },
    });
    Object.defineProperty(b, "differenceInWeeks", {
      enumerable: !0,
      get: function () {
        return B8.default;
      },
    });
    Object.defineProperty(b, "differenceInYears", {
      enumerable: !0,
      get: function () {
        return U8.default;
      },
    });
    Object.defineProperty(b, "eachDayOfInterval", {
      enumerable: !0,
      get: function () {
        return V8.default;
      },
    });
    Object.defineProperty(b, "eachHourOfInterval", {
      enumerable: !0,
      get: function () {
        return $8.default;
      },
    });
    Object.defineProperty(b, "eachMinuteOfInterval", {
      enumerable: !0,
      get: function () {
        return Q8.default;
      },
    });
    Object.defineProperty(b, "eachMonthOfInterval", {
      enumerable: !0,
      get: function () {
        return X8.default;
      },
    });
    Object.defineProperty(b, "eachQuarterOfInterval", {
      enumerable: !0,
      get: function () {
        return K8.default;
      },
    });
    Object.defineProperty(b, "eachWeekOfInterval", {
      enumerable: !0,
      get: function () {
        return G8.default;
      },
    });
    Object.defineProperty(b, "eachWeekendOfInterval", {
      enumerable: !0,
      get: function () {
        return Z8.default;
      },
    });
    Object.defineProperty(b, "eachWeekendOfMonth", {
      enumerable: !0,
      get: function () {
        return J8.default;
      },
    });
    Object.defineProperty(b, "eachWeekendOfYear", {
      enumerable: !0,
      get: function () {
        return eQ.default;
      },
    });
    Object.defineProperty(b, "eachYearOfInterval", {
      enumerable: !0,
      get: function () {
        return tQ.default;
      },
    });
    Object.defineProperty(b, "endOfDay", {
      enumerable: !0,
      get: function () {
        return rQ.default;
      },
    });
    Object.defineProperty(b, "endOfDecade", {
      enumerable: !0,
      get: function () {
        return iQ.default;
      },
    });
    Object.defineProperty(b, "endOfHour", {
      enumerable: !0,
      get: function () {
        return nQ.default;
      },
    });
    Object.defineProperty(b, "endOfISOWeek", {
      enumerable: !0,
      get: function () {
        return aQ.default;
      },
    });
    Object.defineProperty(b, "endOfISOWeekYear", {
      enumerable: !0,
      get: function () {
        return sQ.default;
      },
    });
    Object.defineProperty(b, "endOfMinute", {
      enumerable: !0,
      get: function () {
        return uQ.default;
      },
    });
    Object.defineProperty(b, "endOfMonth", {
      enumerable: !0,
      get: function () {
        return oQ.default;
      },
    });
    Object.defineProperty(b, "endOfQuarter", {
      enumerable: !0,
      get: function () {
        return lQ.default;
      },
    });
    Object.defineProperty(b, "endOfSecond", {
      enumerable: !0,
      get: function () {
        return dQ.default;
      },
    });
    Object.defineProperty(b, "endOfToday", {
      enumerable: !0,
      get: function () {
        return fQ.default;
      },
    });
    Object.defineProperty(b, "endOfTomorrow", {
      enumerable: !0,
      get: function () {
        return cQ.default;
      },
    });
    Object.defineProperty(b, "endOfWeek", {
      enumerable: !0,
      get: function () {
        return hQ.default;
      },
    });
    Object.defineProperty(b, "endOfYear", {
      enumerable: !0,
      get: function () {
        return vQ.default;
      },
    });
    Object.defineProperty(b, "endOfYesterday", {
      enumerable: !0,
      get: function () {
        return gQ.default;
      },
    });
    Object.defineProperty(b, "format", {
      enumerable: !0,
      get: function () {
        return pQ.default;
      },
    });
    Object.defineProperty(b, "formatDistance", {
      enumerable: !0,
      get: function () {
        return _Q.default;
      },
    });
    Object.defineProperty(b, "formatDistanceStrict", {
      enumerable: !0,
      get: function () {
        return mQ.default;
      },
    });
    Object.defineProperty(b, "formatDistanceToNow", {
      enumerable: !0,
      get: function () {
        return bQ.default;
      },
    });
    Object.defineProperty(b, "formatDistanceToNowStrict", {
      enumerable: !0,
      get: function () {
        return xQ.default;
      },
    });
    Object.defineProperty(b, "formatDuration", {
      enumerable: !0,
      get: function () {
        return yQ.default;
      },
    });
    Object.defineProperty(b, "formatISO", {
      enumerable: !0,
      get: function () {
        return qQ.default;
      },
    });
    Object.defineProperty(b, "formatISO9075", {
      enumerable: !0,
      get: function () {
        return OQ.default;
      },
    });
    Object.defineProperty(b, "formatISODuration", {
      enumerable: !0,
      get: function () {
        return PQ.default;
      },
    });
    Object.defineProperty(b, "formatRFC3339", {
      enumerable: !0,
      get: function () {
        return MQ.default;
      },
    });
    Object.defineProperty(b, "formatRFC7231", {
      enumerable: !0,
      get: function () {
        return DQ.default;
      },
    });
    Object.defineProperty(b, "formatRelative", {
      enumerable: !0,
      get: function () {
        return wQ.default;
      },
    });
    Object.defineProperty(b, "fromUnixTime", {
      enumerable: !0,
      get: function () {
        return TQ.default;
      },
    });
    Object.defineProperty(b, "getDate", {
      enumerable: !0,
      get: function () {
        return kQ.default;
      },
    });
    Object.defineProperty(b, "getDay", {
      enumerable: !0,
      get: function () {
        return SQ.default;
      },
    });
    Object.defineProperty(b, "getDayOfYear", {
      enumerable: !0,
      get: function () {
        return CQ.default;
      },
    });
    Object.defineProperty(b, "getDaysInMonth", {
      enumerable: !0,
      get: function () {
        return RQ.default;
      },
    });
    Object.defineProperty(b, "getDaysInYear", {
      enumerable: !0,
      get: function () {
        return IQ.default;
      },
    });
    Object.defineProperty(b, "getDecade", {
      enumerable: !0,
      get: function () {
        return jQ.default;
      },
    });
    Object.defineProperty(b, "getDefaultOptions", {
      enumerable: !0,
      get: function () {
        return AQ.default;
      },
    });
    Object.defineProperty(b, "getHours", {
      enumerable: !0,
      get: function () {
        return EQ.default;
      },
    });
    Object.defineProperty(b, "getISODay", {
      enumerable: !0,
      get: function () {
        return NQ.default;
      },
    });
    Object.defineProperty(b, "getISOWeek", {
      enumerable: !0,
      get: function () {
        return LQ.default;
      },
    });
    Object.defineProperty(b, "getISOWeekYear", {
      enumerable: !0,
      get: function () {
        return FQ.default;
      },
    });
    Object.defineProperty(b, "getISOWeeksInYear", {
      enumerable: !0,
      get: function () {
        return WQ.default;
      },
    });
    Object.defineProperty(b, "getMilliseconds", {
      enumerable: !0,
      get: function () {
        return YQ.default;
      },
    });
    Object.defineProperty(b, "getMinutes", {
      enumerable: !0,
      get: function () {
        return HQ.default;
      },
    });
    Object.defineProperty(b, "getMonth", {
      enumerable: !0,
      get: function () {
        return zQ.default;
      },
    });
    Object.defineProperty(b, "getOverlappingDaysInIntervals", {
      enumerable: !0,
      get: function () {
        return BQ.default;
      },
    });
    Object.defineProperty(b, "getQuarter", {
      enumerable: !0,
      get: function () {
        return UQ.default;
      },
    });
    Object.defineProperty(b, "getSeconds", {
      enumerable: !0,
      get: function () {
        return VQ.default;
      },
    });
    Object.defineProperty(b, "getTime", {
      enumerable: !0,
      get: function () {
        return $Q.default;
      },
    });
    Object.defineProperty(b, "getUnixTime", {
      enumerable: !0,
      get: function () {
        return QQ.default;
      },
    });
    Object.defineProperty(b, "getWeek", {
      enumerable: !0,
      get: function () {
        return XQ.default;
      },
    });
    Object.defineProperty(b, "getWeekOfMonth", {
      enumerable: !0,
      get: function () {
        return KQ.default;
      },
    });
    Object.defineProperty(b, "getWeekYear", {
      enumerable: !0,
      get: function () {
        return GQ.default;
      },
    });
    Object.defineProperty(b, "getWeeksInMonth", {
      enumerable: !0,
      get: function () {
        return ZQ.default;
      },
    });
    Object.defineProperty(b, "getYear", {
      enumerable: !0,
      get: function () {
        return JQ.default;
      },
    });
    Object.defineProperty(b, "hoursToMilliseconds", {
      enumerable: !0,
      get: function () {
        return eX.default;
      },
    });
    Object.defineProperty(b, "hoursToMinutes", {
      enumerable: !0,
      get: function () {
        return tX.default;
      },
    });
    Object.defineProperty(b, "hoursToSeconds", {
      enumerable: !0,
      get: function () {
        return rX.default;
      },
    });
    Object.defineProperty(b, "intervalToDuration", {
      enumerable: !0,
      get: function () {
        return iX.default;
      },
    });
    Object.defineProperty(b, "intlFormat", {
      enumerable: !0,
      get: function () {
        return nX.default;
      },
    });
    Object.defineProperty(b, "intlFormatDistance", {
      enumerable: !0,
      get: function () {
        return aX.default;
      },
    });
    Object.defineProperty(b, "isAfter", {
      enumerable: !0,
      get: function () {
        return sX.default;
      },
    });
    Object.defineProperty(b, "isBefore", {
      enumerable: !0,
      get: function () {
        return uX.default;
      },
    });
    Object.defineProperty(b, "isDate", {
      enumerable: !0,
      get: function () {
        return oX.default;
      },
    });
    Object.defineProperty(b, "isEqual", {
      enumerable: !0,
      get: function () {
        return lX.default;
      },
    });
    Object.defineProperty(b, "isExists", {
      enumerable: !0,
      get: function () {
        return dX.default;
      },
    });
    Object.defineProperty(b, "isFirstDayOfMonth", {
      enumerable: !0,
      get: function () {
        return fX.default;
      },
    });
    Object.defineProperty(b, "isFriday", {
      enumerable: !0,
      get: function () {
        return cX.default;
      },
    });
    Object.defineProperty(b, "isFuture", {
      enumerable: !0,
      get: function () {
        return hX.default;
      },
    });
    Object.defineProperty(b, "isLastDayOfMonth", {
      enumerable: !0,
      get: function () {
        return vX.default;
      },
    });
    Object.defineProperty(b, "isLeapYear", {
      enumerable: !0,
      get: function () {
        return gX.default;
      },
    });
    Object.defineProperty(b, "isMatch", {
      enumerable: !0,
      get: function () {
        return pX.default;
      },
    });
    Object.defineProperty(b, "isMonday", {
      enumerable: !0,
      get: function () {
        return _X.default;
      },
    });
    Object.defineProperty(b, "isPast", {
      enumerable: !0,
      get: function () {
        return mX.default;
      },
    });
    Object.defineProperty(b, "isSameDay", {
      enumerable: !0,
      get: function () {
        return bX.default;
      },
    });
    Object.defineProperty(b, "isSameHour", {
      enumerable: !0,
      get: function () {
        return xX.default;
      },
    });
    Object.defineProperty(b, "isSameISOWeek", {
      enumerable: !0,
      get: function () {
        return yX.default;
      },
    });
    Object.defineProperty(b, "isSameISOWeekYear", {
      enumerable: !0,
      get: function () {
        return qX.default;
      },
    });
    Object.defineProperty(b, "isSameMinute", {
      enumerable: !0,
      get: function () {
        return OX.default;
      },
    });
    Object.defineProperty(b, "isSameMonth", {
      enumerable: !0,
      get: function () {
        return PX.default;
      },
    });
    Object.defineProperty(b, "isSameQuarter", {
      enumerable: !0,
      get: function () {
        return MX.default;
      },
    });
    Object.defineProperty(b, "isSameSecond", {
      enumerable: !0,
      get: function () {
        return DX.default;
      },
    });
    Object.defineProperty(b, "isSameWeek", {
      enumerable: !0,
      get: function () {
        return wX.default;
      },
    });
    Object.defineProperty(b, "isSameYear", {
      enumerable: !0,
      get: function () {
        return TX.default;
      },
    });
    Object.defineProperty(b, "isSaturday", {
      enumerable: !0,
      get: function () {
        return kX.default;
      },
    });
    Object.defineProperty(b, "isSunday", {
      enumerable: !0,
      get: function () {
        return SX.default;
      },
    });
    Object.defineProperty(b, "isThisHour", {
      enumerable: !0,
      get: function () {
        return CX.default;
      },
    });
    Object.defineProperty(b, "isThisISOWeek", {
      enumerable: !0,
      get: function () {
        return RX.default;
      },
    });
    Object.defineProperty(b, "isThisMinute", {
      enumerable: !0,
      get: function () {
        return IX.default;
      },
    });
    Object.defineProperty(b, "isThisMonth", {
      enumerable: !0,
      get: function () {
        return jX.default;
      },
    });
    Object.defineProperty(b, "isThisQuarter", {
      enumerable: !0,
      get: function () {
        return AX.default;
      },
    });
    Object.defineProperty(b, "isThisSecond", {
      enumerable: !0,
      get: function () {
        return EX.default;
      },
    });
    Object.defineProperty(b, "isThisWeek", {
      enumerable: !0,
      get: function () {
        return NX.default;
      },
    });
    Object.defineProperty(b, "isThisYear", {
      enumerable: !0,
      get: function () {
        return LX.default;
      },
    });
    Object.defineProperty(b, "isThursday", {
      enumerable: !0,
      get: function () {
        return FX.default;
      },
    });
    Object.defineProperty(b, "isToday", {
      enumerable: !0,
      get: function () {
        return WX.default;
      },
    });
    Object.defineProperty(b, "isTomorrow", {
      enumerable: !0,
      get: function () {
        return YX.default;
      },
    });
    Object.defineProperty(b, "isTuesday", {
      enumerable: !0,
      get: function () {
        return HX.default;
      },
    });
    Object.defineProperty(b, "isValid", {
      enumerable: !0,
      get: function () {
        return zX.default;
      },
    });
    Object.defineProperty(b, "isWednesday", {
      enumerable: !0,
      get: function () {
        return BX.default;
      },
    });
    Object.defineProperty(b, "isWeekend", {
      enumerable: !0,
      get: function () {
        return UX.default;
      },
    });
    Object.defineProperty(b, "isWithinInterval", {
      enumerable: !0,
      get: function () {
        return VX.default;
      },
    });
    Object.defineProperty(b, "isYesterday", {
      enumerable: !0,
      get: function () {
        return $X.default;
      },
    });
    Object.defineProperty(b, "lastDayOfDecade", {
      enumerable: !0,
      get: function () {
        return QX.default;
      },
    });
    Object.defineProperty(b, "lastDayOfISOWeek", {
      enumerable: !0,
      get: function () {
        return XX.default;
      },
    });
    Object.defineProperty(b, "lastDayOfISOWeekYear", {
      enumerable: !0,
      get: function () {
        return KX.default;
      },
    });
    Object.defineProperty(b, "lastDayOfMonth", {
      enumerable: !0,
      get: function () {
        return GX.default;
      },
    });
    Object.defineProperty(b, "lastDayOfQuarter", {
      enumerable: !0,
      get: function () {
        return ZX.default;
      },
    });
    Object.defineProperty(b, "lastDayOfWeek", {
      enumerable: !0,
      get: function () {
        return JX.default;
      },
    });
    Object.defineProperty(b, "lastDayOfYear", {
      enumerable: !0,
      get: function () {
        return eK.default;
      },
    });
    Object.defineProperty(b, "lightFormat", {
      enumerable: !0,
      get: function () {
        return tK.default;
      },
    });
    Object.defineProperty(b, "max", {
      enumerable: !0,
      get: function () {
        return rK.default;
      },
    });
    Object.defineProperty(b, "milliseconds", {
      enumerable: !0,
      get: function () {
        return iK.default;
      },
    });
    Object.defineProperty(b, "millisecondsToHours", {
      enumerable: !0,
      get: function () {
        return nK.default;
      },
    });
    Object.defineProperty(b, "millisecondsToMinutes", {
      enumerable: !0,
      get: function () {
        return aK.default;
      },
    });
    Object.defineProperty(b, "millisecondsToSeconds", {
      enumerable: !0,
      get: function () {
        return sK.default;
      },
    });
    Object.defineProperty(b, "min", {
      enumerable: !0,
      get: function () {
        return uK.default;
      },
    });
    Object.defineProperty(b, "minutesToHours", {
      enumerable: !0,
      get: function () {
        return oK.default;
      },
    });
    Object.defineProperty(b, "minutesToMilliseconds", {
      enumerable: !0,
      get: function () {
        return lK.default;
      },
    });
    Object.defineProperty(b, "minutesToSeconds", {
      enumerable: !0,
      get: function () {
        return dK.default;
      },
    });
    Object.defineProperty(b, "monthsToQuarters", {
      enumerable: !0,
      get: function () {
        return fK.default;
      },
    });
    Object.defineProperty(b, "monthsToYears", {
      enumerable: !0,
      get: function () {
        return cK.default;
      },
    });
    Object.defineProperty(b, "nextDay", {
      enumerable: !0,
      get: function () {
        return hK.default;
      },
    });
    Object.defineProperty(b, "nextFriday", {
      enumerable: !0,
      get: function () {
        return vK.default;
      },
    });
    Object.defineProperty(b, "nextMonday", {
      enumerable: !0,
      get: function () {
        return gK.default;
      },
    });
    Object.defineProperty(b, "nextSaturday", {
      enumerable: !0,
      get: function () {
        return pK.default;
      },
    });
    Object.defineProperty(b, "nextSunday", {
      enumerable: !0,
      get: function () {
        return _K.default;
      },
    });
    Object.defineProperty(b, "nextThursday", {
      enumerable: !0,
      get: function () {
        return mK.default;
      },
    });
    Object.defineProperty(b, "nextTuesday", {
      enumerable: !0,
      get: function () {
        return bK.default;
      },
    });
    Object.defineProperty(b, "nextWednesday", {
      enumerable: !0,
      get: function () {
        return xK.default;
      },
    });
    Object.defineProperty(b, "parse", {
      enumerable: !0,
      get: function () {
        return yK.default;
      },
    });
    Object.defineProperty(b, "parseISO", {
      enumerable: !0,
      get: function () {
        return qK.default;
      },
    });
    Object.defineProperty(b, "parseJSON", {
      enumerable: !0,
      get: function () {
        return OK.default;
      },
    });
    Object.defineProperty(b, "previousDay", {
      enumerable: !0,
      get: function () {
        return PK.default;
      },
    });
    Object.defineProperty(b, "previousFriday", {
      enumerable: !0,
      get: function () {
        return MK.default;
      },
    });
    Object.defineProperty(b, "previousMonday", {
      enumerable: !0,
      get: function () {
        return DK.default;
      },
    });
    Object.defineProperty(b, "previousSaturday", {
      enumerable: !0,
      get: function () {
        return wK.default;
      },
    });
    Object.defineProperty(b, "previousSunday", {
      enumerable: !0,
      get: function () {
        return TK.default;
      },
    });
    Object.defineProperty(b, "previousThursday", {
      enumerable: !0,
      get: function () {
        return kK.default;
      },
    });
    Object.defineProperty(b, "previousTuesday", {
      enumerable: !0,
      get: function () {
        return SK.default;
      },
    });
    Object.defineProperty(b, "previousWednesday", {
      enumerable: !0,
      get: function () {
        return CK.default;
      },
    });
    Object.defineProperty(b, "quartersToMonths", {
      enumerable: !0,
      get: function () {
        return RK.default;
      },
    });
    Object.defineProperty(b, "quartersToYears", {
      enumerable: !0,
      get: function () {
        return IK.default;
      },
    });
    Object.defineProperty(b, "roundToNearestMinutes", {
      enumerable: !0,
      get: function () {
        return jK.default;
      },
    });
    Object.defineProperty(b, "secondsToHours", {
      enumerable: !0,
      get: function () {
        return AK.default;
      },
    });
    Object.defineProperty(b, "secondsToMilliseconds", {
      enumerable: !0,
      get: function () {
        return EK.default;
      },
    });
    Object.defineProperty(b, "secondsToMinutes", {
      enumerable: !0,
      get: function () {
        return NK.default;
      },
    });
    Object.defineProperty(b, "set", {
      enumerable: !0,
      get: function () {
        return LK.default;
      },
    });
    Object.defineProperty(b, "setDate", {
      enumerable: !0,
      get: function () {
        return FK.default;
      },
    });
    Object.defineProperty(b, "setDay", {
      enumerable: !0,
      get: function () {
        return WK.default;
      },
    });
    Object.defineProperty(b, "setDayOfYear", {
      enumerable: !0,
      get: function () {
        return YK.default;
      },
    });
    Object.defineProperty(b, "setDefaultOptions", {
      enumerable: !0,
      get: function () {
        return HK.default;
      },
    });
    Object.defineProperty(b, "setHours", {
      enumerable: !0,
      get: function () {
        return zK.default;
      },
    });
    Object.defineProperty(b, "setISODay", {
      enumerable: !0,
      get: function () {
        return BK.default;
      },
    });
    Object.defineProperty(b, "setISOWeek", {
      enumerable: !0,
      get: function () {
        return UK.default;
      },
    });
    Object.defineProperty(b, "setISOWeekYear", {
      enumerable: !0,
      get: function () {
        return VK.default;
      },
    });
    Object.defineProperty(b, "setMilliseconds", {
      enumerable: !0,
      get: function () {
        return $K.default;
      },
    });
    Object.defineProperty(b, "setMinutes", {
      enumerable: !0,
      get: function () {
        return QK.default;
      },
    });
    Object.defineProperty(b, "setMonth", {
      enumerable: !0,
      get: function () {
        return XK.default;
      },
    });
    Object.defineProperty(b, "setQuarter", {
      enumerable: !0,
      get: function () {
        return KK.default;
      },
    });
    Object.defineProperty(b, "setSeconds", {
      enumerable: !0,
      get: function () {
        return GK.default;
      },
    });
    Object.defineProperty(b, "setWeek", {
      enumerable: !0,
      get: function () {
        return ZK.default;
      },
    });
    Object.defineProperty(b, "setWeekYear", {
      enumerable: !0,
      get: function () {
        return JK.default;
      },
    });
    Object.defineProperty(b, "setYear", {
      enumerable: !0,
      get: function () {
        return eG.default;
      },
    });
    Object.defineProperty(b, "startOfDay", {
      enumerable: !0,
      get: function () {
        return tG.default;
      },
    });
    Object.defineProperty(b, "startOfDecade", {
      enumerable: !0,
      get: function () {
        return rG.default;
      },
    });
    Object.defineProperty(b, "startOfHour", {
      enumerable: !0,
      get: function () {
        return iG.default;
      },
    });
    Object.defineProperty(b, "startOfISOWeek", {
      enumerable: !0,
      get: function () {
        return nG.default;
      },
    });
    Object.defineProperty(b, "startOfISOWeekYear", {
      enumerable: !0,
      get: function () {
        return aG.default;
      },
    });
    Object.defineProperty(b, "startOfMinute", {
      enumerable: !0,
      get: function () {
        return sG.default;
      },
    });
    Object.defineProperty(b, "startOfMonth", {
      enumerable: !0,
      get: function () {
        return uG.default;
      },
    });
    Object.defineProperty(b, "startOfQuarter", {
      enumerable: !0,
      get: function () {
        return oG.default;
      },
    });
    Object.defineProperty(b, "startOfSecond", {
      enumerable: !0,
      get: function () {
        return lG.default;
      },
    });
    Object.defineProperty(b, "startOfToday", {
      enumerable: !0,
      get: function () {
        return dG.default;
      },
    });
    Object.defineProperty(b, "startOfTomorrow", {
      enumerable: !0,
      get: function () {
        return fG.default;
      },
    });
    Object.defineProperty(b, "startOfWeek", {
      enumerable: !0,
      get: function () {
        return cG.default;
      },
    });
    Object.defineProperty(b, "startOfWeekYear", {
      enumerable: !0,
      get: function () {
        return hG.default;
      },
    });
    Object.defineProperty(b, "startOfYear", {
      enumerable: !0,
      get: function () {
        return vG.default;
      },
    });
    Object.defineProperty(b, "startOfYesterday", {
      enumerable: !0,
      get: function () {
        return gG.default;
      },
    });
    Object.defineProperty(b, "sub", {
      enumerable: !0,
      get: function () {
        return pG.default;
      },
    });
    Object.defineProperty(b, "subBusinessDays", {
      enumerable: !0,
      get: function () {
        return _G.default;
      },
    });
    Object.defineProperty(b, "subDays", {
      enumerable: !0,
      get: function () {
        return mG.default;
      },
    });
    Object.defineProperty(b, "subHours", {
      enumerable: !0,
      get: function () {
        return bG.default;
      },
    });
    Object.defineProperty(b, "subISOWeekYears", {
      enumerable: !0,
      get: function () {
        return xG.default;
      },
    });
    Object.defineProperty(b, "subMilliseconds", {
      enumerable: !0,
      get: function () {
        return yG.default;
      },
    });
    Object.defineProperty(b, "subMinutes", {
      enumerable: !0,
      get: function () {
        return qG.default;
      },
    });
    Object.defineProperty(b, "subMonths", {
      enumerable: !0,
      get: function () {
        return OG.default;
      },
    });
    Object.defineProperty(b, "subQuarters", {
      enumerable: !0,
      get: function () {
        return PG.default;
      },
    });
    Object.defineProperty(b, "subSeconds", {
      enumerable: !0,
      get: function () {
        return MG.default;
      },
    });
    Object.defineProperty(b, "subWeeks", {
      enumerable: !0,
      get: function () {
        return DG.default;
      },
    });
    Object.defineProperty(b, "subYears", {
      enumerable: !0,
      get: function () {
        return wG.default;
      },
    });
    Object.defineProperty(b, "toDate", {
      enumerable: !0,
      get: function () {
        return TG.default;
      },
    });
    Object.defineProperty(b, "weeksToDays", {
      enumerable: !0,
      get: function () {
        return kG.default;
      },
    });
    Object.defineProperty(b, "yearsToMonths", {
      enumerable: !0,
      get: function () {
        return SG.default;
      },
    });
    Object.defineProperty(b, "yearsToQuarters", {
      enumerable: !0,
      get: function () {
        return CG.default;
      },
    });
    var l8 = y(Xf()),
      d8 = y(Zf()),
      f8 = y(Fe()),
      c8 = y(Qn()),
      h8 = y(sc()),
      v8 = y(dr()),
      g8 = y(ua()),
      p8 = y(ur()),
      _8 = y(la()),
      m8 = y(dc()),
      b8 = y(ui()),
      x8 = y(hc()),
      y8 = y(cp()),
      q8 = y(pp()),
      O8 = y(xp()),
      P8 = y(Pp()),
      M8 = y(ht()),
      D8 = y(Cp()),
      w8 = y(Lp()),
      T8 = y(Xp()),
      k8 = y(Je()),
      S8 = y(qc()),
      C8 = y(r_()),
      R8 = y(Sa()),
      I8 = y(Dc()),
      j8 = y(ja()),
      A8 = y(Ea()),
      E8 = y(La()),
      N8 = y(Ya()),
      L8 = y(S_()),
      F8 = y(oi()),
      W8 = y(Ua()),
      Y8 = y(fi()),
      H8 = y(Y_()),
      z8 = y(ci()),
      B8 = y(V_()),
      U8 = y(Ac()),
      V8 = y(Nc()),
      $8 = y(J_()),
      Q8 = y(im()),
      X8 = y(sm()),
      K8 = y(fm()),
      G8 = y(vm()),
      Z8 = y(bs()),
      J8 = y(bm()),
      eQ = y(Mm()),
      tQ = y(Tm()),
      rQ = y($a()),
      iQ = y(Cm()),
      nQ = y(jm()),
      aQ = y(Lm()),
      sQ = y(Wm()),
      uQ = y(zm()),
      oQ = y(Xa()),
      lQ = y(Vm()),
      dQ = y(Xm()),
      fQ = y(Gm()),
      cQ = y(Jm()),
      hQ = y($c()),
      vQ = y(Bc()),
      gQ = y(t0()),
      pQ = y(sh()),
      _Q = y(lh()),
      mQ = y(dh()),
      bQ = y(db()),
      xQ = y(hb()),
      yQ = y(gb()),
      qQ = y(_b()),
      OQ = y(bb()),
      PQ = y(qb()),
      MQ = y(Pb()),
      DQ = y(Db()),
      wQ = y(Cb()),
      TQ = y(Ib()),
      kQ = y(gh()),
      SQ = y(Ti()),
      CQ = y(Fb()),
      RQ = y(ph()),
      IQ = y(Ub()),
      jQ = y(Qb()),
      AQ = y(Kb()),
      EQ = y(Jb()),
      NQ = y(bh()),
      LQ = y(xh()),
      FQ = y(At()),
      WQ = y(ax()),
      YQ = y(ox()),
      HQ = y(fx()),
      zQ = y(vx()),
      BQ = y(_x()),
      UQ = y(Pc()),
      VQ = y(xx()),
      $Q = y(qh()),
      QQ = y(Mx()),
      XQ = y(Ph()),
      KQ = y(Cx()),
      GQ = y(Oh()),
      ZQ = y(Ax()),
      JQ = y(Lx()),
      eX = y(Wx()),
      tX = y(Hx()),
      rX = y(Bx()),
      iX = y($x()),
      nX = y(Xx()),
      aX = y(ry()),
      sX = y(sy()),
      uX = y(dy()),
      oX = y(xc()),
      lX = y(vy()),
      dX = y(py()),
      fX = y(by()),
      cX = y(qy()),
      hX = y(My()),
      vX = y(Rc()),
      gX = y(_h()),
      pX = y(XO()),
      _X = y(ZO()),
      mX = y(tP()),
      bX = y(cr()),
      xX = y(Jh()),
      yX = y(ev()),
      qX = y(gP()),
      OX = y(tv()),
      PX = y(rv()),
      MX = y(iv()),
      DX = y(av()),
      wX = y(pl()),
      TX = y(sv()),
      kX = y(Kf()),
      SX = y(zn()),
      CX = y(AP()),
      RX = y(LP()),
      IX = y(YP()),
      jX = y(BP()),
      AX = y($P()),
      EX = y(KP()),
      NX = y(JP()),
      LX = y(rM()),
      FX = y(aM()),
      WX = y(oM()),
      YX = y(dM()),
      HX = y(hM()),
      zX = y(et()),
      BX = y(pM()),
      UX = y(ni()),
      VX = y(bM()),
      $X = y(qM()),
      QX = y(MM()),
      XX = y(kM()),
      KX = y(CM()),
      GX = y(Mh()),
      ZX = y(jM()),
      JX = y(cv()),
      eK = y(NM()),
      tK = y(FM()),
      rK = y(gc()),
      iK = y(HM()),
      nK = y(BM()),
      aK = y(VM()),
      sK = y(QM()),
      uK = y(_c()),
      oK = y(KM()),
      lK = y(ZM()),
      dK = y(eD()),
      fK = y(rD()),
      cK = y(nD()),
      hK = y(st()),
      vK = y(oD()),
      gK = y(fD()),
      pK = y(vD()),
      _K = y(_D()),
      mK = y(xD()),
      bK = y(OD()),
      xK = y(DD()),
      yK = y(Kh()),
      qK = y(SD()),
      OK = y(ID()),
      PK = y(ut()),
      MK = y(ND()),
      DK = y(WD()),
      wK = y(zD()),
      TK = y(VD()),
      kK = y(XD()),
      SK = y(ZD()),
      CK = y(tw()),
      RK = y(iw()),
      IK = y(aw()),
      jK = y(ow()),
      AK = y(dw()),
      EK = y(cw()),
      NK = y(vw()),
      LK = y(_w()),
      FK = y(bw()),
      WK = y(qw()),
      YK = y(Pw()),
      HK = y(ww()),
      zK = y(kw()),
      BK = y(Cw()),
      UK = y(Iw()),
      VK = y(ac()),
      $K = y(Aw()),
      QK = y(Nw()),
      XK = y(Cd()),
      KK = y(Fw()),
      GK = y(Yw()),
      ZK = y(zw()),
      JK = y($w()),
      eG = y(Xw()),
      tG = y(ai()),
      rG = y(Zw()),
      iG = y(Zh()),
      nG = y(ct()),
      aG = y(fr()),
      sG = y(us()),
      uG = y(hi()),
      oG = y(cs()),
      lG = y(nv()),
      dG = y(e1()),
      fG = y(r1()),
      cG = y(Ze()),
      hG = y(Ju()),
      vG = y(Ms()),
      gG = y(n1()),
      pG = y(u1()),
      _G = y(l1()),
      mG = y(Gi()),
      bG = y(f1()),
      xG = y(Cc()),
      yG = y(hr()),
      qG = y(h1()),
      OG = y(Mv()),
      PG = y(g1()),
      MG = y(_1()),
      DG = y(b1()),
      wG = y(y1()),
      TG = y(T()),
      kG = y(O1()),
      SG = y(M1()),
      CG = y(w1()),
      Iv = ae();
    Object.keys(Iv).forEach(function (r) {
      r === "default" ||
        r === "__esModule" ||
        Object.prototype.hasOwnProperty.call(o8, r) ||
        (r in b && b[r] === Iv[r]) ||
        Object.defineProperty(b, r, {
          enumerable: !0,
          get: function () {
            return Iv[r];
          },
        });
    });
  });
  var Ev = g((jv, Av) => {
    (function (r, e) {
      typeof jv == "object" && typeof Av != "undefined"
        ? (Av.exports = e())
        : typeof define == "function" && define.amd
        ? define(e)
        : ((r = typeof globalThis != "undefined" ? globalThis : r || self),
          (r["@kurkle/color"] = e()));
    })(jv, function () {
      "use strict";
      function r(D) {
        return (D + 0.5) | 0;
      }
      let e = (D, M, E) => Math.max(Math.min(D, E), M);
      function t(D) {
        return e(r(D * 2.55), 0, 255);
      }
      function i(D) {
        return e(r(D / 2.55), 0, 100);
      }
      function n(D) {
        return e(r(D * 255), 0, 255);
      }
      function a(D) {
        return e(r(D / 2.55) / 100, 0, 1);
      }
      function s(D) {
        return e(r(D * 100), 0, 100);
      }
      let u = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        o = [..."0123456789ABCDEF"],
        l = (D) => o[D & 15],
        d = (D) => o[(D & 240) >> 4] + o[D & 15],
        c = (D) => (D & 240) >> 4 === (D & 15),
        h = (D) => c(D.r) && c(D.g) && c(D.b) && c(D.a);
      function v(D) {
        var M = D.length,
          E;
        return (
          D[0] === "#" &&
            (M === 4 || M === 5
              ? (E = {
                  r: 255 & (u[D[1]] * 17),
                  g: 255 & (u[D[2]] * 17),
                  b: 255 & (u[D[3]] * 17),
                  a: M === 5 ? u[D[4]] * 17 : 255,
                })
              : (M === 7 || M === 9) &&
                (E = {
                  r: (u[D[1]] << 4) | u[D[2]],
                  g: (u[D[3]] << 4) | u[D[4]],
                  b: (u[D[5]] << 4) | u[D[6]],
                  a: M === 9 ? (u[D[7]] << 4) | u[D[8]] : 255,
                })),
          E
        );
      }
      let p = (D, M) => (D < 255 ? M(D) : "");
      function m(D) {
        var M = h(D) ? l : d;
        return D ? "#" + M(D.r) + M(D.g) + M(D.b) + p(D.a, M) : void 0;
      }
      let q =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function O(D, M, E) {
        let N = M * Math.min(E, 1 - E),
          z = ($, ue = ($ + D / 30) % 12) =>
            E - N * Math.max(Math.min(ue - 3, 9 - ue, 1), -1);
        return [z(0), z(8), z(4)];
      }
      function P(D, M, E) {
        let N = (z, $ = (z + D / 60) % 6) =>
          E - E * M * Math.max(Math.min($, 4 - $, 1), 0);
        return [N(5), N(3), N(1)];
      }
      function w(D, M, E) {
        let N = O(D, 1, 0.5),
          z;
        for (
          M + E > 1 && ((z = 1 / (M + E)), (M *= z), (E *= z)), z = 0;
          z < 3;
          z++
        )
          (N[z] *= 1 - M - E), (N[z] += M);
        return N;
      }
      function C(D, M, E, N, z) {
        return D === z
          ? (M - E) / N + (M < E ? 6 : 0)
          : M === z
          ? (E - D) / N + 2
          : (D - M) / N + 4;
      }
      function k(D) {
        let E = D.r / 255,
          N = D.g / 255,
          z = D.b / 255,
          $ = Math.max(E, N, z),
          ue = Math.min(E, N, z),
          Te = ($ + ue) / 2,
          ft,
          It,
          Rn;
        return (
          $ !== ue &&
            ((Rn = $ - ue),
            (It = Te > 0.5 ? Rn / (2 - $ - ue) : Rn / ($ + ue)),
            (ft = C(E, N, z, Rn, $)),
            (ft = ft * 60 + 0.5)),
          [ft | 0, It || 0, Te]
        );
      }
      function R(D, M, E, N) {
        return (Array.isArray(M) ? D(M[0], M[1], M[2]) : D(M, E, N)).map(n);
      }
      function I(D, M, E) {
        return R(O, D, M, E);
      }
      function j(D, M, E) {
        return R(w, D, M, E);
      }
      function L(D, M, E) {
        return R(P, D, M, E);
      }
      function W(D) {
        return ((D % 360) + 360) % 360;
      }
      function H(D) {
        let M = q.exec(D),
          E = 255,
          N;
        if (!M) return;
        M[5] !== N && (E = M[6] ? t(+M[5]) : n(+M[5]));
        let z = W(+M[2]),
          $ = +M[3] / 100,
          ue = +M[4] / 100;
        return (
          M[1] === "hwb"
            ? (N = j(z, $, ue))
            : M[1] === "hsv"
            ? (N = L(z, $, ue))
            : (N = I(z, $, ue)),
          { r: N[0], g: N[1], b: N[2], a: E }
        );
      }
      function U(D, M) {
        var E = k(D);
        (E[0] = W(E[0] + M)),
          (E = I(E)),
          (D.r = E[0]),
          (D.g = E[1]),
          (D.b = E[2]);
      }
      function se(D) {
        if (!D) return;
        let M = k(D),
          E = M[0],
          N = s(M[1]),
          z = s(M[2]);
        return D.a < 255
          ? `hsla(${E}, ${N}%, ${z}%, ${a(D.a)})`
          : `hsl(${E}, ${N}%, ${z}%)`;
      }
      let fe = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        Y = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      function V() {
        let D = {},
          M = Object.keys(Y),
          E = Object.keys(fe),
          N,
          z,
          $,
          ue,
          Te;
        for (N = 0; N < M.length; N++) {
          for (ue = Te = M[N], z = 0; z < E.length; z++)
            ($ = E[z]), (Te = Te.replace($, fe[$]));
          ($ = parseInt(Y[ue], 16)),
            (D[Te] = [($ >> 16) & 255, ($ >> 8) & 255, $ & 255]);
        }
        return D;
      }
      let X;
      function ve(D) {
        X || ((X = V()), (X.transparent = [0, 0, 0, 0]));
        let M = X[D.toLowerCase()];
        return (
          M && { r: M[0], g: M[1], b: M[2], a: M.length === 4 ? M[3] : 255 }
        );
      }
      let oe =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      function Ce(D) {
        let M = oe.exec(D),
          E = 255,
          N,
          z,
          $;
        if (!!M) {
          if (M[7] !== N) {
            let ue = +M[7];
            E = M[8] ? t(ue) : e(ue * 255, 0, 255);
          }
          return (
            (N = +M[1]),
            (z = +M[3]),
            ($ = +M[5]),
            (N = 255 & (M[2] ? t(N) : e(N, 0, 255))),
            (z = 255 & (M[4] ? t(z) : e(z, 0, 255))),
            ($ = 255 & (M[6] ? t($) : e($, 0, 255))),
            { r: N, g: z, b: $, a: E }
          );
        }
      }
      function Re(D) {
        return (
          D &&
          (D.a < 255
            ? `rgba(${D.r}, ${D.g}, ${D.b}, ${a(D.a)})`
            : `rgb(${D.r}, ${D.g}, ${D.b})`)
        );
      }
      let ge = (D) =>
          D <= 0.0031308 ? D * 12.92 : Math.pow(D, 1 / 2.4) * 1.055 - 0.055,
        me = (D) =>
          D <= 0.04045 ? D / 12.92 : Math.pow((D + 0.055) / 1.055, 2.4);
      function we(D, M, E) {
        let N = me(a(D.r)),
          z = me(a(D.g)),
          $ = me(a(D.b));
        return {
          r: n(ge(N + E * (me(a(M.r)) - N))),
          g: n(ge(z + E * (me(a(M.g)) - z))),
          b: n(ge($ + E * (me(a(M.b)) - $))),
          a: D.a + E * (M.a - D.a),
        };
      }
      function Me(D, M, E) {
        if (D) {
          let N = k(D);
          (N[M] = Math.max(0, Math.min(N[M] + N[M] * E, M === 0 ? 360 : 1))),
            (N = I(N)),
            (D.r = N[0]),
            (D.g = N[1]),
            (D.b = N[2]);
        }
      }
      function Ie(D, M) {
        return D && Object.assign(M || {}, D);
      }
      function Rt(D) {
        var M = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(D)
            ? D.length >= 3 &&
              ((M = { r: D[0], g: D[1], b: D[2], a: 255 }),
              D.length > 3 && (M.a = n(D[3])))
            : ((M = Ie(D, { r: 0, g: 0, b: 0, a: 1 })), (M.a = n(M.a))),
          M
        );
      }
      function ce(D) {
        return D.charAt(0) === "r" ? Ce(D) : H(D);
      }
      class re {
        constructor(M) {
          if (M instanceof re) return M;
          let E = typeof M,
            N;
          E === "object"
            ? (N = Rt(M))
            : E === "string" && (N = v(M) || ve(M) || ce(M)),
            (this._rgb = N),
            (this._valid = !!N);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var M = Ie(this._rgb);
          return M && (M.a = a(M.a)), M;
        }
        set rgb(M) {
          this._rgb = Rt(M);
        }
        rgbString() {
          return this._valid ? Re(this._rgb) : void 0;
        }
        hexString() {
          return this._valid ? m(this._rgb) : void 0;
        }
        hslString() {
          return this._valid ? se(this._rgb) : void 0;
        }
        mix(M, E) {
          if (M) {
            let N = this.rgb,
              z = M.rgb,
              $,
              ue = E === $ ? 0.5 : E,
              Te = 2 * ue - 1,
              ft = N.a - z.a,
              It = ((Te * ft === -1 ? Te : (Te + ft) / (1 + Te * ft)) + 1) / 2;
            ($ = 1 - It),
              (N.r = 255 & (It * N.r + $ * z.r + 0.5)),
              (N.g = 255 & (It * N.g + $ * z.g + 0.5)),
              (N.b = 255 & (It * N.b + $ * z.b + 0.5)),
              (N.a = ue * N.a + (1 - ue) * z.a),
              (this.rgb = N);
          }
          return this;
        }
        interpolate(M, E) {
          return M && (this._rgb = we(this._rgb, M._rgb, E)), this;
        }
        clone() {
          return new re(this.rgb);
        }
        alpha(M) {
          return (this._rgb.a = n(M)), this;
        }
        clearer(M) {
          let E = this._rgb;
          return (E.a *= 1 - M), this;
        }
        greyscale() {
          let M = this._rgb,
            E = r(M.r * 0.3 + M.g * 0.59 + M.b * 0.11);
          return (M.r = M.g = M.b = E), this;
        }
        opaquer(M) {
          let E = this._rgb;
          return (E.a *= 1 + M), this;
        }
        negate() {
          let M = this._rgb;
          return (M.r = 255 - M.r), (M.g = 255 - M.g), (M.b = 255 - M.b), this;
        }
        lighten(M) {
          return Me(this._rgb, 2, M), this;
        }
        darken(M) {
          return Me(this._rgb, 2, -M), this;
        }
        saturate(M) {
          return Me(this._rgb, 1, M), this;
        }
        desaturate(M) {
          return Me(this._rgb, 1, -M), this;
        }
        rotate(M) {
          return U(this._rgb, M), this;
        }
      }
      function be(D) {
        return new re(D);
      }
      var sr = Object.freeze({
          __proto__: null,
          Color: re,
          default: be,
          round: r,
          lim: e,
          p2b: t,
          b2p: i,
          n2b: n,
          b2n: a,
          n2p: s,
          hexParse: v,
          hexString: m,
          rgb2hsl: k,
          hsl2rgb: I,
          hwb2rgb: j,
          hsv2rgb: L,
          hueParse: H,
          rotate: U,
          hslString: se,
          nameParse: ve,
          rgbParse: Ce,
          rgbString: Re,
        }),
        Cn = Object.assign(be, sr);
      return Cn;
    });
  });
  var x2 = g((S) => {
    "use strict";
    var L1 = Ev();
    function RG() {}
    var IG = (() => {
      let r = 0;
      return () => r++;
    })();
    function un(r) {
      return r === null || typeof r == "undefined";
    }
    function Se(r) {
      if (Array.isArray && Array.isArray(r)) return !0;
      let e = Object.prototype.toString.call(r);
      return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
    }
    function xe(r) {
      return (
        r !== null && Object.prototype.toString.call(r) === "[object Object]"
      );
    }
    function Bv(r) {
      return (typeof r == "number" || r instanceof Number) && isFinite(+r);
    }
    function jG(r, e) {
      return Bv(r) ? r : e;
    }
    function Mt(r, e) {
      return typeof r == "undefined" ? e : r;
    }
    var AG = (r, e) =>
        typeof r == "string" && r.endsWith("%") ? parseFloat(r) / 100 : +r / e,
      F1 = (r, e) =>
        typeof r == "string" && r.endsWith("%")
          ? (parseFloat(r) / 100) * e
          : +r;
    function EG(r, e, t) {
      if (r && typeof r.call == "function") return r.apply(t, e);
    }
    function NG(r, e, t, i) {
      let n, a, s;
      if (Se(r))
        if (((a = r.length), i))
          for (n = a - 1; n >= 0; n--) e.call(t, r[n], n);
        else for (n = 0; n < a; n++) e.call(t, r[n], n);
      else if (xe(r))
        for (s = Object.keys(r), a = s.length, n = 0; n < a; n++)
          e.call(t, r[s[n]], s[n]);
    }
    function LG(r, e) {
      let t, i, n, a;
      if (!r || !e || r.length !== e.length) return !1;
      for (t = 0, i = r.length; t < i; ++t)
        if (
          ((n = r[t]),
          (a = e[t]),
          n.datasetIndex !== a.datasetIndex || n.index !== a.index)
        )
          return !1;
      return !0;
    }
    function on(r) {
      if (Se(r)) return r.map(on);
      if (xe(r)) {
        let e = Object.create(null),
          t = Object.keys(r),
          i = t.length,
          n = 0;
        for (; n < i; ++n) e[t[n]] = on(r[t[n]]);
        return e;
      }
      return r;
    }
    function W1(r) {
      return ["__proto__", "prototype", "constructor"].indexOf(r) === -1;
    }
    function Y1(r, e, t, i) {
      if (!W1(r)) return;
      let n = e[r],
        a = t[r];
      xe(n) && xe(a) ? ln(n, a, i) : (e[r] = on(a));
    }
    function ln(r, e, t) {
      let i = Se(e) ? e : [e],
        n = i.length;
      if (!xe(r)) return r;
      t = t || {};
      let a = t.merger || Y1,
        s;
      for (let u = 0; u < n; ++u) {
        if (((s = i[u]), !xe(s))) continue;
        let o = Object.keys(s);
        for (let l = 0, d = o.length; l < d; ++l) a(o[l], r, s, t);
      }
      return r;
    }
    function H1(r, e) {
      return ln(r, e, { merger: z1 });
    }
    function z1(r, e, t) {
      if (!W1(r)) return;
      let i = e[r],
        n = t[r];
      xe(i) && xe(n)
        ? H1(i, n)
        : Object.prototype.hasOwnProperty.call(e, r) || (e[r] = on(n));
    }
    function FG(r, e, t, i) {
      e !== void 0 &&
        console.warn(
          r + ': "' + t + '" is deprecated. Please use "' + i + '" instead'
        );
    }
    var k1 = { "": (r) => r, x: (r) => r.x, y: (r) => r.y };
    function B1(r) {
      let e = r.split("."),
        t = [],
        i = "";
      for (let n of e)
        (i += n),
          i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (t.push(i), (i = ""));
      return t;
    }
    function WG(r) {
      let e = B1(r);
      return (t) => {
        for (let i of e) {
          if (i === "") break;
          t = t && t[i];
        }
        return t;
      };
    }
    function Uv(r, e) {
      return (k1[e] || (k1[e] = WG(e)))(r);
    }
    function Vv(r) {
      return r.charAt(0).toUpperCase() + r.slice(1);
    }
    var YG = (r) => typeof r != "undefined",
      dn = (r) => typeof r == "function",
      HG = (r, e) => {
        if (r.size !== e.size) return !1;
        for (let t of r) if (!e.has(t)) return !1;
        return !0;
      };
    function zG(r) {
      return (
        r.type === "mouseup" || r.type === "click" || r.type === "contextmenu"
      );
    }
    var _e = Math.PI,
      Ee = 2 * _e,
      U1 = Ee + _e,
      fn = Number.POSITIVE_INFINITY,
      V1 = _e / 180,
      Ae = _e / 2,
      Pt = _e / 4,
      Lv = (_e * 2) / 3,
      bf = Math.log10,
      Fv = Math.sign;
    function $v(r, e, t) {
      return Math.abs(r - e) < t;
    }
    function BG(r) {
      let e = Math.round(r);
      r = $v(r, e, r / 1e3) ? e : r;
      let t = Math.pow(10, Math.floor(bf(r))),
        i = r / t;
      return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * t;
    }
    function UG(r) {
      let e = [],
        t = Math.sqrt(r),
        i;
      for (i = 1; i < t; i++) r % i === 0 && (e.push(i), e.push(r / i));
      return t === (t | 0) && e.push(t), e.sort((n, a) => n - a).pop(), e;
    }
    function VG(r) {
      return !isNaN(parseFloat(r)) && isFinite(r);
    }
    function $G(r, e) {
      let t = Math.round(r);
      return t - e <= r && t + e >= r;
    }
    function QG(r, e, t) {
      let i, n, a;
      for (i = 0, n = r.length; i < n; i++)
        (a = r[i][t]),
          isNaN(a) ||
            ((e.min = Math.min(e.min, a)), (e.max = Math.max(e.max, a)));
    }
    function XG(r) {
      return r * (_e / 180);
    }
    function KG(r) {
      return r * (180 / _e);
    }
    function GG(r) {
      if (!Bv(r)) return;
      let e = 1,
        t = 0;
      for (; Math.round(r * e) / e !== r; ) (e *= 10), t++;
      return t;
    }
    function ZG(r, e) {
      let t = e.x - r.x,
        i = e.y - r.y,
        n = Math.sqrt(t * t + i * i),
        a = Math.atan2(i, t);
      return a < -0.5 * _e && (a += Ee), { angle: a, distance: n };
    }
    function Wv(r, e) {
      return Math.sqrt(Math.pow(e.x - r.x, 2) + Math.pow(e.y - r.y, 2));
    }
    function $1(r, e) {
      return ((r - e + U1) % Ee) - _e;
    }
    function ot(r) {
      return ((r % Ee) + Ee) % Ee;
    }
    function Q1(r, e, t, i) {
      let n = ot(r),
        a = ot(e),
        s = ot(t),
        u = ot(a - n),
        o = ot(s - n),
        l = ot(n - a),
        d = ot(n - s);
      return n === a || n === s || (i && a === s) || (u > o && l < d);
    }
    function xf(r, e, t) {
      return Math.max(e, Math.min(t, r));
    }
    function JG(r) {
      return xf(r, -32768, 32767);
    }
    function X1(r, e, t, i = 1e-6) {
      return r >= Math.min(e, t) - i && r <= Math.max(e, t) + i;
    }
    function Qv(r, e, t) {
      t = t || ((s) => r[s] < e);
      let i = r.length - 1,
        n = 0,
        a;
      for (; i - n > 1; ) (a = (n + i) >> 1), t(a) ? (n = a) : (i = a);
      return { lo: n, hi: i };
    }
    var an = (r, e, t, i) =>
        Qv(
          r,
          t,
          i
            ? (n) => {
                let a = r[n][e];
                return a < t || (a === t && r[n + 1][e] === t);
              }
            : (n) => r[n][e] < t
        ),
      eZ = (r, e, t) => Qv(r, t, (i) => r[i][e] >= t);
    function tZ(r, e, t) {
      let i = 0,
        n = r.length;
      for (; i < n && r[i] < e; ) i++;
      for (; n > i && r[n - 1] > t; ) n--;
      return i > 0 || n < r.length ? r.slice(i, n) : r;
    }
    var K1 = ["push", "pop", "shift", "splice", "unshift"];
    function rZ(r, e) {
      if (r._chartjs) {
        r._chartjs.listeners.push(e);
        return;
      }
      Object.defineProperty(r, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [e] },
      }),
        K1.forEach((t) => {
          let i = "_onData" + Vv(t),
            n = r[t];
          Object.defineProperty(r, t, {
            configurable: !0,
            enumerable: !1,
            value(...a) {
              let s = n.apply(this, a);
              return (
                r._chartjs.listeners.forEach((u) => {
                  typeof u[i] == "function" && u[i](...a);
                }),
                s
              );
            },
          });
        });
    }
    function iZ(r, e) {
      let t = r._chartjs;
      if (!t) return;
      let i = t.listeners,
        n = i.indexOf(e);
      n !== -1 && i.splice(n, 1),
        !(i.length > 0) &&
          (K1.forEach((a) => {
            delete r[a];
          }),
          delete r._chartjs);
    }
    function nZ(r) {
      let e = new Set(r);
      return e.size === r.length ? r : Array.from(e);
    }
    function aZ(r, e, t) {
      return e + " " + r + "px " + t;
    }
    var G1 = (function () {
      return typeof window == "undefined"
        ? function (r) {
            return r();
          }
        : window.requestAnimationFrame;
    })();
    function sZ(r, e) {
      let t = [],
        i = !1;
      return function (...n) {
        (t = n),
          i ||
            ((i = !0),
            G1.call(window, () => {
              (i = !1), r.apply(e, t);
            }));
      };
    }
    function uZ(r, e) {
      let t;
      return function (...i) {
        return (
          e ? (clearTimeout(t), (t = setTimeout(r, e, i))) : r.apply(this, i), e
        );
      };
    }
    var oZ = (r) => (r === "start" ? "left" : r === "end" ? "right" : "center"),
      lZ = (r, e, t) => (r === "start" ? e : r === "end" ? t : (e + t) / 2),
      dZ = (r, e, t, i) =>
        r === (i ? "left" : "right") ? t : r === "center" ? (e + t) / 2 : e;
    function fZ(r, e, t) {
      let i = e.length,
        n = 0,
        a = i;
      if (r._sorted) {
        let { iScale: s, _parsed: u } = r,
          o = s.axis,
          { min: l, max: d, minDefined: c, maxDefined: h } = s.getUserBounds();
        c &&
          (n = xf(
            Math.min(
              an(u, o, l).lo,
              t ? i : an(e, o, s.getPixelForValue(l)).lo
            ),
            0,
            i - 1
          )),
          h
            ? (a =
                xf(
                  Math.max(
                    an(u, s.axis, d, !0).hi + 1,
                    t ? 0 : an(e, o, s.getPixelForValue(d), !0).hi + 1
                  ),
                  n,
                  i
                ) - n)
            : (a = i - n);
      }
      return { start: n, count: a };
    }
    function cZ(r) {
      let { xScale: e, yScale: t, _scaleRanges: i } = r,
        n = { xmin: e.min, xmax: e.max, ymin: t.min, ymax: t.max };
      if (!i) return (r._scaleRanges = n), !0;
      let a =
        i.xmin !== e.min ||
        i.xmax !== e.max ||
        i.ymin !== t.min ||
        i.ymax !== t.max;
      return Object.assign(i, n), a;
    }
    var vf = (r) => r === 0 || r === 1,
      S1 = (r, e, t) =>
        -(Math.pow(2, 10 * (r -= 1)) * Math.sin(((r - e) * Ee) / t)),
      C1 = (r, e, t) => Math.pow(2, -10 * r) * Math.sin(((r - e) * Ee) / t) + 1,
      _f = {
        linear: (r) => r,
        easeInQuad: (r) => r * r,
        easeOutQuad: (r) => -r * (r - 2),
        easeInOutQuad: (r) =>
          (r /= 0.5) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1),
        easeInCubic: (r) => r * r * r,
        easeOutCubic: (r) => (r -= 1) * r * r + 1,
        easeInOutCubic: (r) =>
          (r /= 0.5) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2),
        easeInQuart: (r) => r * r * r * r,
        easeOutQuart: (r) => -((r -= 1) * r * r * r - 1),
        easeInOutQuart: (r) =>
          (r /= 0.5) < 1
            ? 0.5 * r * r * r * r
            : -0.5 * ((r -= 2) * r * r * r - 2),
        easeInQuint: (r) => r * r * r * r * r,
        easeOutQuint: (r) => (r -= 1) * r * r * r * r + 1,
        easeInOutQuint: (r) =>
          (r /= 0.5) < 1
            ? 0.5 * r * r * r * r * r
            : 0.5 * ((r -= 2) * r * r * r * r + 2),
        easeInSine: (r) => -Math.cos(r * Ae) + 1,
        easeOutSine: (r) => Math.sin(r * Ae),
        easeInOutSine: (r) => -0.5 * (Math.cos(_e * r) - 1),
        easeInExpo: (r) => (r === 0 ? 0 : Math.pow(2, 10 * (r - 1))),
        easeOutExpo: (r) => (r === 1 ? 1 : -Math.pow(2, -10 * r) + 1),
        easeInOutExpo: (r) =>
          vf(r)
            ? r
            : r < 0.5
            ? 0.5 * Math.pow(2, 10 * (r * 2 - 1))
            : 0.5 * (-Math.pow(2, -10 * (r * 2 - 1)) + 2),
        easeInCirc: (r) => (r >= 1 ? r : -(Math.sqrt(1 - r * r) - 1)),
        easeOutCirc: (r) => Math.sqrt(1 - (r -= 1) * r),
        easeInOutCirc: (r) =>
          (r /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - r * r) - 1)
            : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1),
        easeInElastic: (r) => (vf(r) ? r : S1(r, 0.075, 0.3)),
        easeOutElastic: (r) => (vf(r) ? r : C1(r, 0.075, 0.3)),
        easeInOutElastic(r) {
          return vf(r)
            ? r
            : r < 0.5
            ? 0.5 * S1(r * 2, 0.1125, 0.45)
            : 0.5 + 0.5 * C1(r * 2 - 1, 0.1125, 0.45);
        },
        easeInBack(r) {
          return r * r * ((1.70158 + 1) * r - 1.70158);
        },
        easeOutBack(r) {
          return (r -= 1) * r * ((1.70158 + 1) * r + 1.70158) + 1;
        },
        easeInOutBack(r) {
          let e = 1.70158;
          return (r /= 0.5) < 1
            ? 0.5 * (r * r * (((e *= 1.525) + 1) * r - e))
            : 0.5 * ((r -= 2) * r * (((e *= 1.525) + 1) * r + e) + 2);
        },
        easeInBounce: (r) => 1 - _f.easeOutBounce(1 - r),
        easeOutBounce(r) {
          return r < 1 / 2.75
            ? 7.5625 * r * r
            : r < 2 / 2.75
            ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75
            : r < 2.5 / 2.75
            ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375
            : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
        },
        easeInOutBounce: (r) =>
          r < 0.5
            ? _f.easeInBounce(r * 2) * 0.5
            : _f.easeOutBounce(r * 2 - 1) * 0.5 + 0.5,
      };
    function qf(r) {
      if (r && typeof r == "object") {
        let e = r.toString();
        return (
          e === "[object CanvasPattern]" || e === "[object CanvasGradient]"
        );
      }
      return !1;
    }
    function hZ(r) {
      return qf(r) ? r : new L1.Color(r);
    }
    function mf(r) {
      return qf(r) ? r : new L1.Color(r).saturate(0.5).darken(0.1).hexString();
    }
    var vZ = ["x", "y", "borderWidth", "radius", "tension"],
      gZ = ["color", "borderColor", "backgroundColor"];
    function pZ(r) {
      r.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      }),
        r.describe("animation", {
          _fallback: !1,
          _indexable: !1,
          _scriptable: (e) =>
            e !== "onProgress" && e !== "onComplete" && e !== "fn",
        }),
        r.set("animations", {
          colors: { type: "color", properties: gZ },
          numbers: { type: "number", properties: vZ },
        }),
        r.describe("animations", { _fallback: "animation" }),
        r.set("transitions", {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: "transparent" },
              visible: { type: "boolean", duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: "transparent" },
              visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
            },
          },
        });
    }
    function _Z(r) {
      r.set("layout", {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
    }
    var R1 = new Map();
    function mZ(r, e) {
      e = e || {};
      let t = r + JSON.stringify(e),
        i = R1.get(t);
      return i || ((i = new Intl.NumberFormat(r, e)), R1.set(t, i)), i;
    }
    function Z1(r, e, t) {
      return mZ(e, t).format(r);
    }
    var J1 = {
      values(r) {
        return Se(r) ? r : "" + r;
      },
      numeric(r, e, t) {
        if (r === 0) return "0";
        let i = this.chart.options.locale,
          n,
          a = r;
        if (t.length > 1) {
          let l = Math.max(
            Math.abs(t[0].value),
            Math.abs(t[t.length - 1].value)
          );
          (l < 1e-4 || l > 1e15) && (n = "scientific"), (a = bZ(r, t));
        }
        let s = bf(Math.abs(a)),
          u = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
          o = {
            notation: n,
            minimumFractionDigits: u,
            maximumFractionDigits: u,
          };
        return Object.assign(o, this.options.ticks.format), Z1(r, i, o);
      },
      logarithmic(r, e, t) {
        if (r === 0) return "0";
        let i = t[e].significand || r / Math.pow(10, Math.floor(bf(r)));
        return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * t.length
          ? J1.numeric.call(this, r, e, t)
          : "";
      },
    };
    function bZ(r, e) {
      let t = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
      return (
        Math.abs(t) >= 1 && r !== Math.floor(r) && (t = r - Math.floor(r)), t
      );
    }
    var e2 = { formatters: J1 };
    function xZ(r) {
      r.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (e, t) => t.lineWidth,
          tickColor: (e, t) => t.color,
          offset: !1,
        },
        border: { display: !0, dash: [], dashOffset: 0, width: 1 },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: e2.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
          showLabelBackdrop: !1,
          backdropColor: "rgba(255, 255, 255, 0.75)",
          backdropPadding: 2,
        },
      }),
        r.route("scale.ticks", "color", "", "color"),
        r.route("scale.grid", "color", "", "borderColor"),
        r.route("scale.border", "color", "", "borderColor"),
        r.route("scale.title", "color", "", "color"),
        r.describe("scale", {
          _fallback: !1,
          _scriptable: (e) =>
            !e.startsWith("before") &&
            !e.startsWith("after") &&
            e !== "callback" &&
            e !== "parser",
          _indexable: (e) =>
            e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
        }),
        r.describe("scales", { _fallback: "scale" }),
        r.describe("scale.ticks", {
          _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
          _indexable: (e) => e !== "backdropPadding",
        });
    }
    var t2 = Object.create(null),
      r2 = Object.create(null);
    function sn(r, e) {
      if (!e) return r;
      let t = e.split(".");
      for (let i = 0, n = t.length; i < n; ++i) {
        let a = t[i];
        r = r[a] || (r[a] = Object.create(null));
      }
      return r;
    }
    function Nv(r, e, t) {
      return typeof e == "string" ? ln(sn(r, e), t) : ln(sn(r, ""), e);
    }
    var Yv = class {
        constructor(e, t) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (i) =>
              i.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (i, n) => mf(n.backgroundColor)),
            (this.hoverBorderColor = (i, n) => mf(n.borderColor)),
            (this.hoverColor = (i, n) => mf(n.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(e),
            this.apply(t);
        }
        set(e, t) {
          return Nv(this, e, t);
        }
        get(e) {
          return sn(this, e);
        }
        describe(e, t) {
          return Nv(r2, e, t);
        }
        override(e, t) {
          return Nv(t2, e, t);
        }
        route(e, t, i, n) {
          let a = sn(this, e),
            s = sn(this, i),
            u = "_" + t;
          Object.defineProperties(a, {
            [u]: { value: a[t], writable: !0 },
            [t]: {
              enumerable: !0,
              get() {
                let o = this[u],
                  l = s[n];
                return xe(o) ? Object.assign({}, l, o) : Mt(o, l);
              },
              set(o) {
                this[u] = o;
              },
            },
          });
        }
        apply(e) {
          e.forEach((t) => t(this));
        }
      },
      i2 = new Yv(
        {
          _scriptable: (r) => !r.startsWith("on"),
          _indexable: (r) => r !== "events",
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [pZ, _Z, xZ]
      );
    function n2(r) {
      return !r || un(r.size) || un(r.family)
        ? null
        : (r.style ? r.style + " " : "") +
            (r.weight ? r.weight + " " : "") +
            r.size +
            "px " +
            r.family;
    }
    function Hv(r, e, t, i, n) {
      let a = e[n];
      return (
        a || ((a = e[n] = r.measureText(n).width), t.push(n)),
        a > i && (i = a),
        i
      );
    }
    function yZ(r, e, t, i) {
      i = i || {};
      let n = (i.data = i.data || {}),
        a = (i.garbageCollect = i.garbageCollect || []);
      i.font !== e &&
        ((n = i.data = {}), (a = i.garbageCollect = []), (i.font = e)),
        r.save(),
        (r.font = e);
      let s = 0,
        u = t.length,
        o,
        l,
        d,
        c,
        h;
      for (o = 0; o < u; o++)
        if (((c = t[o]), c != null && !Se(c))) s = Hv(r, n, a, s, c);
        else if (Se(c))
          for (l = 0, d = c.length; l < d; l++)
            (h = c[l]), h != null && !Se(h) && (s = Hv(r, n, a, s, h));
      r.restore();
      let v = a.length / 2;
      if (v > t.length) {
        for (o = 0; o < v; o++) delete n[a[o]];
        a.splice(0, v);
      }
      return s;
    }
    function qZ(r, e, t) {
      let i = r.currentDevicePixelRatio,
        n = t !== 0 ? Math.max(t / 2, 0.5) : 0;
      return Math.round((e - n) * i) / i + n;
    }
    function OZ(r, e) {
      (e = e || r.getContext("2d")),
        e.save(),
        e.resetTransform(),
        e.clearRect(0, 0, r.width, r.height),
        e.restore();
    }
    function PZ(r, e, t, i) {
      a2(r, e, t, i, null);
    }
    function a2(r, e, t, i, n) {
      let a,
        s,
        u,
        o,
        l,
        d,
        c,
        h,
        v = e.pointStyle,
        p = e.rotation,
        m = e.radius,
        q = (p || 0) * V1;
      if (
        v &&
        typeof v == "object" &&
        ((a = v.toString()),
        a === "[object HTMLImageElement]" || a === "[object HTMLCanvasElement]")
      ) {
        r.save(),
          r.translate(t, i),
          r.rotate(q),
          r.drawImage(v, -v.width / 2, -v.height / 2, v.width, v.height),
          r.restore();
        return;
      }
      if (!(isNaN(m) || m <= 0)) {
        switch ((r.beginPath(), v)) {
          default:
            n ? r.ellipse(t, i, n / 2, m, 0, 0, Ee) : r.arc(t, i, m, 0, Ee),
              r.closePath();
            break;
          case "triangle":
            (d = n ? n / 2 : m),
              r.moveTo(t + Math.sin(q) * d, i - Math.cos(q) * m),
              (q += Lv),
              r.lineTo(t + Math.sin(q) * d, i - Math.cos(q) * m),
              (q += Lv),
              r.lineTo(t + Math.sin(q) * d, i - Math.cos(q) * m),
              r.closePath();
            break;
          case "rectRounded":
            (l = m * 0.516),
              (o = m - l),
              (s = Math.cos(q + Pt) * o),
              (c = Math.cos(q + Pt) * (n ? n / 2 - l : o)),
              (u = Math.sin(q + Pt) * o),
              (h = Math.sin(q + Pt) * (n ? n / 2 - l : o)),
              r.arc(t - c, i - u, l, q - _e, q - Ae),
              r.arc(t + h, i - s, l, q - Ae, q),
              r.arc(t + c, i + u, l, q, q + Ae),
              r.arc(t - h, i + s, l, q + Ae, q + _e),
              r.closePath();
            break;
          case "rect":
            if (!p) {
              (o = Math.SQRT1_2 * m),
                (d = n ? n / 2 : o),
                r.rect(t - d, i - o, 2 * d, 2 * o);
              break;
            }
            q += Pt;
          case "rectRot":
            (c = Math.cos(q) * (n ? n / 2 : m)),
              (s = Math.cos(q) * m),
              (u = Math.sin(q) * m),
              (h = Math.sin(q) * (n ? n / 2 : m)),
              r.moveTo(t - c, i - u),
              r.lineTo(t + h, i - s),
              r.lineTo(t + c, i + u),
              r.lineTo(t - h, i + s),
              r.closePath();
            break;
          case "crossRot":
            q += Pt;
          case "cross":
            (c = Math.cos(q) * (n ? n / 2 : m)),
              (s = Math.cos(q) * m),
              (u = Math.sin(q) * m),
              (h = Math.sin(q) * (n ? n / 2 : m)),
              r.moveTo(t - c, i - u),
              r.lineTo(t + c, i + u),
              r.moveTo(t + h, i - s),
              r.lineTo(t - h, i + s);
            break;
          case "star":
            (c = Math.cos(q) * (n ? n / 2 : m)),
              (s = Math.cos(q) * m),
              (u = Math.sin(q) * m),
              (h = Math.sin(q) * (n ? n / 2 : m)),
              r.moveTo(t - c, i - u),
              r.lineTo(t + c, i + u),
              r.moveTo(t + h, i - s),
              r.lineTo(t - h, i + s),
              (q += Pt),
              (c = Math.cos(q) * (n ? n / 2 : m)),
              (s = Math.cos(q) * m),
              (u = Math.sin(q) * m),
              (h = Math.sin(q) * (n ? n / 2 : m)),
              r.moveTo(t - c, i - u),
              r.lineTo(t + c, i + u),
              r.moveTo(t + h, i - s),
              r.lineTo(t - h, i + s);
            break;
          case "line":
            (s = n ? n / 2 : Math.cos(q) * m),
              (u = Math.sin(q) * m),
              r.moveTo(t - s, i - u),
              r.lineTo(t + s, i + u);
            break;
          case "dash":
            r.moveTo(t, i),
              r.lineTo(t + Math.cos(q) * (n ? n / 2 : m), i + Math.sin(q) * m);
            break;
          case !1:
            r.closePath();
            break;
        }
        r.fill(), e.borderWidth > 0 && r.stroke();
      }
    }
    function zv(r, e, t) {
      return (
        (t = t || 0.5),
        !e ||
          (r &&
            r.x > e.left - t &&
            r.x < e.right + t &&
            r.y > e.top - t &&
            r.y < e.bottom + t)
      );
    }
    function MZ(r, e) {
      r.save(),
        r.beginPath(),
        r.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
        r.clip();
    }
    function DZ(r) {
      r.restore();
    }
    function wZ(r, e, t, i, n) {
      if (!e) return r.lineTo(t.x, t.y);
      if (n === "middle") {
        let a = (e.x + t.x) / 2;
        r.lineTo(a, e.y), r.lineTo(a, t.y);
      } else (n === "after") != !!i ? r.lineTo(e.x, t.y) : r.lineTo(t.x, e.y);
      r.lineTo(t.x, t.y);
    }
    function TZ(r, e, t, i) {
      if (!e) return r.lineTo(t.x, t.y);
      r.bezierCurveTo(
        i ? e.cp1x : e.cp2x,
        i ? e.cp1y : e.cp2y,
        i ? t.cp2x : t.cp1x,
        i ? t.cp2y : t.cp1y,
        t.x,
        t.y
      );
    }
    function kZ(r, e) {
      e.translation && r.translate(e.translation[0], e.translation[1]),
        un(e.rotation) || r.rotate(e.rotation),
        e.color && (r.fillStyle = e.color),
        e.textAlign && (r.textAlign = e.textAlign),
        e.textBaseline && (r.textBaseline = e.textBaseline);
    }
    function SZ(r, e, t, i, n) {
      if (n.strikethrough || n.underline) {
        let a = r.measureText(i),
          s = e - a.actualBoundingBoxLeft,
          u = e + a.actualBoundingBoxRight,
          o = t - a.actualBoundingBoxAscent,
          l = t + a.actualBoundingBoxDescent,
          d = n.strikethrough ? (o + l) / 2 : l;
        (r.strokeStyle = r.fillStyle),
          r.beginPath(),
          (r.lineWidth = n.decorationWidth || 2),
          r.moveTo(s, d),
          r.lineTo(u, d),
          r.stroke();
      }
    }
    function CZ(r, e) {
      let t = r.fillStyle;
      (r.fillStyle = e.color),
        r.fillRect(e.left, e.top, e.width, e.height),
        (r.fillStyle = t);
    }
    function RZ(r, e, t, i, n, a = {}) {
      let s = Se(e) ? e : [e],
        u = a.strokeWidth > 0 && a.strokeColor !== "",
        o,
        l;
      for (r.save(), r.font = n.string, kZ(r, a), o = 0; o < s.length; ++o)
        (l = s[o]),
          a.backdrop && CZ(r, a.backdrop),
          u &&
            (a.strokeColor && (r.strokeStyle = a.strokeColor),
            un(a.strokeWidth) || (r.lineWidth = a.strokeWidth),
            r.strokeText(l, t, i, a.maxWidth)),
          r.fillText(l, t, i, a.maxWidth),
          SZ(r, t, i, l, a),
          (i += Number(n.lineHeight));
      r.restore();
    }
    function IZ(r, e) {
      let { x: t, y: i, w: n, h: a, radius: s } = e;
      r.arc(t + s.topLeft, i + s.topLeft, s.topLeft, -Ae, _e, !0),
        r.lineTo(t, i + a - s.bottomLeft),
        r.arc(t + s.bottomLeft, i + a - s.bottomLeft, s.bottomLeft, _e, Ae, !0),
        r.lineTo(t + n - s.bottomRight, i + a),
        r.arc(
          t + n - s.bottomRight,
          i + a - s.bottomRight,
          s.bottomRight,
          Ae,
          0,
          !0
        ),
        r.lineTo(t + n, i + s.topRight),
        r.arc(t + n - s.topRight, i + s.topRight, s.topRight, 0, -Ae, !0),
        r.lineTo(t + s.topLeft, i);
    }
    var jZ = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
      AZ =
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
    function s2(r, e) {
      let t = ("" + r).match(jZ);
      if (!t || t[1] === "normal") return e * 1.2;
      switch (((r = +t[2]), t[3])) {
        case "px":
          return r;
        case "%":
          r /= 100;
          break;
      }
      return e * r;
    }
    var EZ = (r) => +r || 0;
    function Xv(r, e) {
      let t = {},
        i = xe(e),
        n = i ? Object.keys(e) : e,
        a = xe(r) ? (i ? (s) => Mt(r[s], r[e[s]]) : (s) => r[s]) : () => r;
      for (let s of n) t[s] = EZ(a(s));
      return t;
    }
    function u2(r) {
      return Xv(r, { top: "y", right: "x", bottom: "y", left: "x" });
    }
    function NZ(r) {
      return Xv(r, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
    }
    function LZ(r) {
      let e = u2(r);
      return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
    }
    function FZ(r, e) {
      (r = r || {}), (e = e || i2.font);
      let t = Mt(r.size, e.size);
      typeof t == "string" && (t = parseInt(t, 10));
      let i = Mt(r.style, e.style);
      i &&
        !("" + i).match(AZ) &&
        (console.warn('Invalid font style specified: "' + i + '"'),
        (i = void 0));
      let n = {
        family: Mt(r.family, e.family),
        lineHeight: s2(Mt(r.lineHeight, e.lineHeight), t),
        size: t,
        style: i,
        weight: Mt(r.weight, e.weight),
        string: "",
      };
      return (n.string = n2(n)), n;
    }
    function WZ(r, e, t, i) {
      let n = !0,
        a,
        s,
        u;
      for (a = 0, s = r.length; a < s; ++a)
        if (
          ((u = r[a]),
          u !== void 0 &&
            (e !== void 0 && typeof u == "function" && ((u = u(e)), (n = !1)),
            t !== void 0 && Se(u) && ((u = u[t % u.length]), (n = !1)),
            u !== void 0))
        )
          return i && !n && (i.cacheable = !1), u;
    }
    function YZ(r, e, t) {
      let { min: i, max: n } = r,
        a = F1(e, (n - i) / 2),
        s = (u, o) => (t && u === 0 ? 0 : u + o);
      return { min: s(i, -Math.abs(a)), max: s(n, a) };
    }
    function o2(r, e) {
      return Object.assign(Object.create(r), e);
    }
    function Kv(r, e = [""], t, i, n = () => r[0]) {
      let a = t || r;
      typeof i == "undefined" && (i = c2("_fallback", r));
      let s = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: r,
        _rootScopes: a,
        _fallback: i,
        _getTarget: n,
        override: (u) => Kv([u, ...r], e, a, i),
      };
      return new Proxy(s, {
        deleteProperty(u, o) {
          return delete u[o], delete u._keys, delete r[0][o], !0;
        },
        get(u, o) {
          return d2(u, o, () => XZ(o, e, r, u));
        },
        getOwnPropertyDescriptor(u, o) {
          return Reflect.getOwnPropertyDescriptor(u._scopes[0], o);
        },
        getPrototypeOf() {
          return Reflect.getPrototypeOf(r[0]);
        },
        has(u, o) {
          return j1(u).includes(o);
        },
        ownKeys(u) {
          return j1(u);
        },
        set(u, o, l) {
          let d = u._storage || (u._storage = n());
          return (u[o] = d[o] = l), delete u._keys, !0;
        },
      });
    }
    function cn(r, e, t, i) {
      let n = {
        _cacheable: !1,
        _proxy: r,
        _context: e,
        _subProxy: t,
        _stack: new Set(),
        _descriptors: l2(r, i),
        setContext: (a) => cn(r, a, t, i),
        override: (a) => cn(r.override(a), e, t, i),
      };
      return new Proxy(n, {
        deleteProperty(a, s) {
          return delete a[s], delete r[s], !0;
        },
        get(a, s, u) {
          return d2(a, s, () => zZ(a, s, u));
        },
        getOwnPropertyDescriptor(a, s) {
          return a._descriptors.allKeys
            ? Reflect.has(r, s)
              ? { enumerable: !0, configurable: !0 }
              : void 0
            : Reflect.getOwnPropertyDescriptor(r, s);
        },
        getPrototypeOf() {
          return Reflect.getPrototypeOf(r);
        },
        has(a, s) {
          return Reflect.has(r, s);
        },
        ownKeys() {
          return Reflect.ownKeys(r);
        },
        set(a, s, u) {
          return (r[s] = u), delete a[s], !0;
        },
      });
    }
    function l2(r, e = { scriptable: !0, indexable: !0 }) {
      let {
        _scriptable: t = e.scriptable,
        _indexable: i = e.indexable,
        _allKeys: n = e.allKeys,
      } = r;
      return {
        allKeys: n,
        scriptable: t,
        indexable: i,
        isScriptable: dn(t) ? t : () => t,
        isIndexable: dn(i) ? i : () => i,
      };
    }
    var HZ = (r, e) => (r ? r + Vv(e) : e),
      Gv = (r, e) =>
        xe(e) &&
        r !== "adapters" &&
        (Object.getPrototypeOf(e) === null || e.constructor === Object);
    function d2(r, e, t) {
      if (Object.prototype.hasOwnProperty.call(r, e)) return r[e];
      let i = t();
      return (r[e] = i), i;
    }
    function zZ(r, e, t) {
      let { _proxy: i, _context: n, _subProxy: a, _descriptors: s } = r,
        u = i[e];
      return (
        dn(u) && s.isScriptable(e) && (u = BZ(e, u, r, t)),
        Se(u) && u.length && (u = UZ(e, u, r, s.isIndexable)),
        Gv(e, u) && (u = cn(u, n, a && a[e], s)),
        u
      );
    }
    function BZ(r, e, t, i) {
      let { _proxy: n, _context: a, _subProxy: s, _stack: u } = t;
      if (u.has(r))
        throw new Error(
          "Recursion detected: " + Array.from(u).join("->") + "->" + r
        );
      u.add(r);
      let o = e(a, s || i);
      return u.delete(r), Gv(r, o) && (o = Zv(n._scopes, n, r, o)), o;
    }
    function UZ(r, e, t, i) {
      let { _proxy: n, _context: a, _subProxy: s, _descriptors: u } = t;
      if (typeof a.index != "undefined" && i(r)) return e[a.index % e.length];
      if (xe(e[0])) {
        let o = e,
          l = n._scopes.filter((d) => d !== o);
        e = [];
        for (let d of o) {
          let c = Zv(l, n, r, d);
          e.push(cn(c, a, s && s[r], u));
        }
      }
      return e;
    }
    function f2(r, e, t) {
      return dn(r) ? r(e, t) : r;
    }
    var VZ = (r, e) =>
      r === !0 ? e : typeof r == "string" ? Uv(e, r) : void 0;
    function $Z(r, e, t, i, n) {
      for (let a of e) {
        let s = VZ(t, a);
        if (s) {
          r.add(s);
          let u = f2(s._fallback, t, n);
          if (typeof u != "undefined" && u !== t && u !== i) return u;
        } else if (s === !1 && typeof i != "undefined" && t !== i) return null;
      }
      return !1;
    }
    function Zv(r, e, t, i) {
      let n = e._rootScopes,
        a = f2(e._fallback, t, i),
        s = [...r, ...n],
        u = new Set();
      u.add(i);
      let o = I1(u, s, t, a || t, i);
      return o === null ||
        (typeof a != "undefined" &&
          a !== t &&
          ((o = I1(u, s, a, o, i)), o === null))
        ? !1
        : Kv(Array.from(u), [""], n, a, () => QZ(e, t, i));
    }
    function I1(r, e, t, i, n) {
      for (; t; ) t = $Z(r, e, t, i, n);
      return t;
    }
    function QZ(r, e, t) {
      let i = r._getTarget();
      e in i || (i[e] = {});
      let n = i[e];
      return Se(n) && xe(t) ? t : n || {};
    }
    function XZ(r, e, t, i) {
      let n;
      for (let a of e)
        if (((n = c2(HZ(a, r), t)), typeof n != "undefined"))
          return Gv(r, n) ? Zv(t, i, r, n) : n;
    }
    function c2(r, e) {
      for (let t of e) {
        if (!t) continue;
        let i = t[r];
        if (typeof i != "undefined") return i;
      }
    }
    function j1(r) {
      let e = r._keys;
      return e || (e = r._keys = KZ(r._scopes)), e;
    }
    function KZ(r) {
      let e = new Set();
      for (let t of r)
        for (let i of Object.keys(t).filter((n) => !n.startsWith("_")))
          e.add(i);
      return Array.from(e);
    }
    function GZ(r, e, t, i) {
      let { iScale: n } = r,
        { key: a = "r" } = this._parsing,
        s = new Array(i),
        u,
        o,
        l,
        d;
      for (u = 0, o = i; u < o; ++u)
        (l = u + t), (d = e[l]), (s[u] = { r: n.parse(Uv(d, a), l) });
      return s;
    }
    var ZZ = Number.EPSILON || 1e-14,
      $r = (r, e) => e < r.length && !r[e].skip && r[e],
      h2 = (r) => (r === "x" ? "y" : "x");
    function v2(r, e, t, i) {
      let n = r.skip ? e : r,
        a = e,
        s = t.skip ? e : t,
        u = Wv(a, n),
        o = Wv(s, a),
        l = u / (u + o),
        d = o / (u + o);
      (l = isNaN(l) ? 0 : l), (d = isNaN(d) ? 0 : d);
      let c = i * l,
        h = i * d;
      return {
        previous: { x: a.x - c * (s.x - n.x), y: a.y - c * (s.y - n.y) },
        next: { x: a.x + h * (s.x - n.x), y: a.y + h * (s.y - n.y) },
      };
    }
    function JZ(r, e, t) {
      let i = r.length,
        n,
        a,
        s,
        u,
        o,
        l = $r(r, 0);
      for (let d = 0; d < i - 1; ++d)
        if (((o = l), (l = $r(r, d + 1)), !(!o || !l))) {
          if ($v(e[d], 0, ZZ)) {
            t[d] = t[d + 1] = 0;
            continue;
          }
          (n = t[d] / e[d]),
            (a = t[d + 1] / e[d]),
            (u = Math.pow(n, 2) + Math.pow(a, 2)),
            !(u <= 9) &&
              ((s = 3 / Math.sqrt(u)),
              (t[d] = n * s * e[d]),
              (t[d + 1] = a * s * e[d]));
        }
    }
    function eJ(r, e, t = "x") {
      let i = h2(t),
        n = r.length,
        a,
        s,
        u,
        o = $r(r, 0);
      for (let l = 0; l < n; ++l) {
        if (((s = u), (u = o), (o = $r(r, l + 1)), !u)) continue;
        let d = u[t],
          c = u[i];
        s &&
          ((a = (d - s[t]) / 3),
          (u[`cp1${t}`] = d - a),
          (u[`cp1${i}`] = c - a * e[l])),
          o &&
            ((a = (o[t] - d) / 3),
            (u[`cp2${t}`] = d + a),
            (u[`cp2${i}`] = c + a * e[l]));
      }
    }
    function g2(r, e = "x") {
      let t = h2(e),
        i = r.length,
        n = Array(i).fill(0),
        a = Array(i),
        s,
        u,
        o,
        l = $r(r, 0);
      for (s = 0; s < i; ++s)
        if (((u = o), (o = l), (l = $r(r, s + 1)), !!o)) {
          if (l) {
            let d = l[e] - o[e];
            n[s] = d !== 0 ? (l[t] - o[t]) / d : 0;
          }
          a[s] = u
            ? l
              ? Fv(n[s - 1]) !== Fv(n[s])
                ? 0
                : (n[s - 1] + n[s]) / 2
              : n[s - 1]
            : n[s];
        }
      JZ(r, n, a), eJ(r, a, e);
    }
    function gf(r, e, t) {
      return Math.max(Math.min(r, t), e);
    }
    function tJ(r, e) {
      let t,
        i,
        n,
        a,
        s,
        u = zv(r[0], e);
      for (t = 0, i = r.length; t < i; ++t)
        (s = a),
          (a = u),
          (u = t < i - 1 && zv(r[t + 1], e)),
          a &&
            ((n = r[t]),
            s &&
              ((n.cp1x = gf(n.cp1x, e.left, e.right)),
              (n.cp1y = gf(n.cp1y, e.top, e.bottom))),
            u &&
              ((n.cp2x = gf(n.cp2x, e.left, e.right)),
              (n.cp2y = gf(n.cp2y, e.top, e.bottom))));
    }
    function rJ(r, e, t, i, n) {
      let a, s, u, o;
      if (
        (e.spanGaps && (r = r.filter((l) => !l.skip)),
        e.cubicInterpolationMode === "monotone")
      )
        g2(r, n);
      else {
        let l = i ? r[r.length - 1] : r[0];
        for (a = 0, s = r.length; a < s; ++a)
          (u = r[a]),
            (o = v2(l, u, r[Math.min(a + 1, s - (i ? 0 : 1)) % s], e.tension)),
            (u.cp1x = o.previous.x),
            (u.cp1y = o.previous.y),
            (u.cp2x = o.next.x),
            (u.cp2y = o.next.y),
            (l = u);
      }
      e.capBezierPoints && tJ(r, t);
    }
    function iJ() {
      return typeof window != "undefined" && typeof document != "undefined";
    }
    function p2(r) {
      let e = r.parentNode;
      return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
    }
    function yf(r, e, t) {
      let i;
      return (
        typeof r == "string"
          ? ((i = parseInt(r, 10)),
            r.indexOf("%") !== -1 && (i = (i / 100) * e.parentNode[t]))
          : (i = r),
        i
      );
    }
    var Of = (r) => r.ownerDocument.defaultView.getComputedStyle(r, null);
    function _2(r, e) {
      return Of(r).getPropertyValue(e);
    }
    var nJ = ["top", "right", "bottom", "left"];
    function Kt(r, e, t) {
      let i = {};
      t = t ? "-" + t : "";
      for (let n = 0; n < 4; n++) {
        let a = nJ[n];
        i[a] = parseFloat(r[e + "-" + a + t]) || 0;
      }
      return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
    }
    var aJ = (r, e, t) => (r > 0 || e > 0) && (!t || !t.shadowRoot);
    function sJ(r, e) {
      let t = r.touches,
        i = t && t.length ? t[0] : r,
        { offsetX: n, offsetY: a } = i,
        s = !1,
        u,
        o;
      if (aJ(n, a, r.target)) (u = n), (o = a);
      else {
        let l = e.getBoundingClientRect();
        (u = i.clientX - l.left), (o = i.clientY - l.top), (s = !0);
      }
      return { x: u, y: o, box: s };
    }
    function uJ(r, e) {
      if ("native" in r) return r;
      let { canvas: t, currentDevicePixelRatio: i } = e,
        n = Of(t),
        a = n.boxSizing === "border-box",
        s = Kt(n, "padding"),
        u = Kt(n, "border", "width"),
        { x: o, y: l, box: d } = sJ(r, t),
        c = s.left + (d && u.left),
        h = s.top + (d && u.top),
        { width: v, height: p } = e;
      return (
        a && ((v -= s.width + u.width), (p -= s.height + u.height)),
        {
          x: Math.round((((o - c) / v) * t.width) / i),
          y: Math.round((((l - h) / p) * t.height) / i),
        }
      );
    }
    function oJ(r, e, t) {
      let i, n;
      if (e === void 0 || t === void 0) {
        let a = p2(r);
        if (!a) (e = r.clientWidth), (t = r.clientHeight);
        else {
          let s = a.getBoundingClientRect(),
            u = Of(a),
            o = Kt(u, "border", "width"),
            l = Kt(u, "padding");
          (e = s.width - l.width - o.width),
            (t = s.height - l.height - o.height),
            (i = yf(u.maxWidth, a, "clientWidth")),
            (n = yf(u.maxHeight, a, "clientHeight"));
        }
      }
      return { width: e, height: t, maxWidth: i || fn, maxHeight: n || fn };
    }
    var pf = (r) => Math.round(r * 10) / 10;
    function lJ(r, e, t, i) {
      let n = Of(r),
        a = Kt(n, "margin"),
        s = yf(n.maxWidth, r, "clientWidth") || fn,
        u = yf(n.maxHeight, r, "clientHeight") || fn,
        o = oJ(r, e, t),
        { width: l, height: d } = o;
      if (n.boxSizing === "content-box") {
        let h = Kt(n, "border", "width"),
          v = Kt(n, "padding");
        (l -= v.width + h.width), (d -= v.height + h.height);
      }
      return (
        (l = Math.max(0, l - a.width)),
        (d = Math.max(0, i ? l / i : d - a.height)),
        (l = pf(Math.min(l, s, o.maxWidth))),
        (d = pf(Math.min(d, u, o.maxHeight))),
        l && !d && (d = pf(l / 2)),
        (e !== void 0 || t !== void 0) &&
          i &&
          o.height &&
          d > o.height &&
          ((d = o.height), (l = pf(Math.floor(d * i)))),
        { width: l, height: d }
      );
    }
    function dJ(r, e, t) {
      let i = e || 1,
        n = Math.floor(r.height * i),
        a = Math.floor(r.width * i);
      (r.height = Math.floor(r.height)), (r.width = Math.floor(r.width));
      let s = r.canvas;
      return (
        s.style &&
          (t || (!s.style.height && !s.style.width)) &&
          ((s.style.height = `${r.height}px`),
          (s.style.width = `${r.width}px`)),
        r.currentDevicePixelRatio !== i || s.height !== n || s.width !== a
          ? ((r.currentDevicePixelRatio = i),
            (s.height = n),
            (s.width = a),
            r.ctx.setTransform(i, 0, 0, i, 0, 0),
            !0)
          : !1
      );
    }
    var fJ = (function () {
      let r = !1;
      try {
        let e = {
          get passive() {
            return (r = !0), !1;
          },
        };
        window.addEventListener("test", null, e),
          window.removeEventListener("test", null, e);
      } catch (e) {}
      return r;
    })();
    function cJ(r, e) {
      let t = _2(r, e),
        i = t && t.match(/^(\d+)(\.\d+)?px$/);
      return i ? +i[1] : void 0;
    }
    function Xt(r, e, t, i) {
      return { x: r.x + t * (e.x - r.x), y: r.y + t * (e.y - r.y) };
    }
    function hJ(r, e, t, i) {
      return {
        x: r.x + t * (e.x - r.x),
        y:
          i === "middle"
            ? t < 0.5
              ? r.y
              : e.y
            : i === "after"
            ? t < 1
              ? r.y
              : e.y
            : t > 0
            ? e.y
            : r.y,
      };
    }
    function vJ(r, e, t, i) {
      let n = { x: r.cp2x, y: r.cp2y },
        a = { x: e.cp1x, y: e.cp1y },
        s = Xt(r, n, t),
        u = Xt(n, a, t),
        o = Xt(a, e, t),
        l = Xt(s, u, t),
        d = Xt(u, o, t);
      return Xt(l, d, t);
    }
    var gJ = function (r, e) {
        return {
          x(t) {
            return r + r + e - t;
          },
          setWidth(t) {
            e = t;
          },
          textAlign(t) {
            return t === "center" ? t : t === "right" ? "left" : "right";
          },
          xPlus(t, i) {
            return t - i;
          },
          leftForLtr(t, i) {
            return t - i;
          },
        };
      },
      pJ = function () {
        return {
          x(r) {
            return r;
          },
          setWidth(r) {},
          textAlign(r) {
            return r;
          },
          xPlus(r, e) {
            return r + e;
          },
          leftForLtr(r, e) {
            return r;
          },
        };
      };
    function _J(r, e, t) {
      return r ? gJ(e, t) : pJ();
    }
    function mJ(r, e) {
      let t, i;
      (e === "ltr" || e === "rtl") &&
        ((t = r.canvas.style),
        (i = [
          t.getPropertyValue("direction"),
          t.getPropertyPriority("direction"),
        ]),
        t.setProperty("direction", e, "important"),
        (r.prevTextDirection = i));
    }
    function bJ(r, e) {
      e !== void 0 &&
        (delete r.prevTextDirection,
        r.canvas.style.setProperty("direction", e[0], e[1]));
    }
    function m2(r) {
      return r === "angle"
        ? { between: Q1, compare: $1, normalize: ot }
        : { between: X1, compare: (e, t) => e - t, normalize: (e) => e };
    }
    function A1({ start: r, end: e, count: t, loop: i, style: n }) {
      return {
        start: r % t,
        end: e % t,
        loop: i && (e - r + 1) % t === 0,
        style: n,
      };
    }
    function xJ(r, e, t) {
      let { property: i, start: n, end: a } = t,
        { between: s, normalize: u } = m2(i),
        o = e.length,
        { start: l, end: d, loop: c } = r,
        h,
        v;
      if (c) {
        for (
          l += o, d += o, h = 0, v = o;
          h < v && s(u(e[l % o][i]), n, a);
          ++h
        )
          l--, d--;
        (l %= o), (d %= o);
      }
      return d < l && (d += o), { start: l, end: d, loop: c, style: r.style };
    }
    function b2(r, e, t) {
      if (!t) return [r];
      let { property: i, start: n, end: a } = t,
        s = e.length,
        { compare: u, between: o, normalize: l } = m2(i),
        { start: d, end: c, loop: h, style: v } = xJ(r, e, t),
        p = [],
        m = !1,
        q = null,
        O,
        P,
        w,
        C = () => o(n, w, O) && u(n, w) !== 0,
        k = () => u(a, O) === 0 || o(a, w, O),
        R = () => m || C(),
        I = () => !m || k();
      for (let j = d, L = d; j <= c; ++j)
        (P = e[j % s]),
          !P.skip &&
            ((O = l(P[i])),
            O !== w &&
              ((m = o(O, n, a)),
              q === null && R() && (q = u(O, n) === 0 ? j : L),
              q !== null &&
                I() &&
                (p.push(A1({ start: q, end: j, loop: h, count: s, style: v })),
                (q = null)),
              (L = j),
              (w = O)));
      return (
        q !== null &&
          p.push(A1({ start: q, end: c, loop: h, count: s, style: v })),
        p
      );
    }
    function yJ(r, e) {
      let t = [],
        i = r.segments;
      for (let n = 0; n < i.length; n++) {
        let a = b2(i[n], r.points, e);
        a.length && t.push(...a);
      }
      return t;
    }
    function qJ(r, e, t, i) {
      let n = 0,
        a = e - 1;
      if (t && !i) for (; n < e && !r[n].skip; ) n++;
      for (; n < e && r[n].skip; ) n++;
      for (n %= e, t && (a += n); a > n && r[a % e].skip; ) a--;
      return (a %= e), { start: n, end: a };
    }
    function OJ(r, e, t, i) {
      let n = r.length,
        a = [],
        s = e,
        u = r[e],
        o;
      for (o = e + 1; o <= t; ++o) {
        let l = r[o % n];
        l.skip || l.stop
          ? u.skip ||
            ((i = !1),
            a.push({ start: e % n, end: (o - 1) % n, loop: i }),
            (e = s = l.stop ? o : null))
          : ((s = o), u.skip && (e = o)),
          (u = l);
      }
      return s !== null && a.push({ start: e % n, end: s % n, loop: i }), a;
    }
    function PJ(r, e) {
      let t = r.points,
        i = r.options.spanGaps,
        n = t.length;
      if (!n) return [];
      let a = !!r._loop,
        { start: s, end: u } = qJ(t, n, a, i);
      if (i === !0) return E1(r, [{ start: s, end: u, loop: a }], t, e);
      let o = u < s ? u + n : u,
        l = !!r._fullLoop && s === 0 && u === n - 1;
      return E1(r, OJ(t, s, o, l), t, e);
    }
    function E1(r, e, t, i) {
      return !i || !i.setContext || !t ? e : MJ(r, e, t, i);
    }
    function MJ(r, e, t, i) {
      let n = r._chart.getContext(),
        a = N1(r.options),
        {
          _datasetIndex: s,
          options: { spanGaps: u },
        } = r,
        o = t.length,
        l = [],
        d = a,
        c = e[0].start,
        h = c;
      function v(p, m, q, O) {
        let P = u ? -1 : 1;
        if (p !== m) {
          for (p += o; t[p % o].skip; ) p -= P;
          for (; t[m % o].skip; ) m += P;
          p % o !== m % o &&
            (l.push({ start: p % o, end: m % o, loop: q, style: O }),
            (d = O),
            (c = m % o));
        }
      }
      for (let p of e) {
        c = u ? c : p.start;
        let m = t[c % o],
          q;
        for (h = c + 1; h <= p.end; h++) {
          let O = t[h % o];
          (q = N1(
            i.setContext(
              o2(n, {
                type: "segment",
                p0: m,
                p1: O,
                p0DataIndex: (h - 1) % o,
                p1DataIndex: h % o,
                datasetIndex: s,
              })
            )
          )),
            DJ(q, d) && v(c, h - 1, p.loop, d),
            (m = O),
            (d = q);
        }
        c < h - 1 && v(c, h - 1, p.loop, d);
      }
      return l;
    }
    function N1(r) {
      return {
        backgroundColor: r.backgroundColor,
        borderCapStyle: r.borderCapStyle,
        borderDash: r.borderDash,
        borderDashOffset: r.borderDashOffset,
        borderJoinStyle: r.borderJoinStyle,
        borderWidth: r.borderWidth,
        borderColor: r.borderColor,
      };
    }
    function DJ(r, e) {
      if (!e) return !1;
      let t = [],
        i = function (n, a) {
          return qf(a) ? (t.includes(a) || t.push(a), t.indexOf(a)) : a;
        };
      return JSON.stringify(r, i) !== JSON.stringify(e, i);
    }
    S.HALF_PI = Ae;
    S.INFINITY = fn;
    S.PI = _e;
    S.PITAU = U1;
    S.QUARTER_PI = Pt;
    S.RAD_PER_DEG = V1;
    S.TAU = Ee;
    S.TWO_THIRDS_PI = Lv;
    S.Ticks = e2;
    S._addGrace = YZ;
    S._alignPixel = qZ;
    S._alignStartEnd = lZ;
    S._angleBetween = Q1;
    S._angleDiff = $1;
    S._arrayUnique = nZ;
    S._attachContext = cn;
    S._bezierCurveTo = TZ;
    S._bezierInterpolation = vJ;
    S._boundSegment = b2;
    S._boundSegments = yJ;
    S._capitalize = Vv;
    S._computeSegments = PJ;
    S._createResolver = Kv;
    S._decimalPlaces = GG;
    S._deprecated = FG;
    S._descriptors = l2;
    S._elementsEqual = LG;
    S._factorize = UG;
    S._filterBetween = tZ;
    S._getParentNode = p2;
    S._getStartAndCountOfVisiblePoints = fZ;
    S._int16Range = JG;
    S._isBetween = X1;
    S._isClickEvent = zG;
    S._isDomSupported = iJ;
    S._isPointInArea = zv;
    S._limitValue = xf;
    S._longestText = yZ;
    S._lookup = Qv;
    S._lookupByKey = an;
    S._measureText = Hv;
    S._merger = Y1;
    S._mergerIf = z1;
    S._normalizeAngle = ot;
    S._parseObjectDataRadialScale = GZ;
    S._pointInLine = Xt;
    S._readValueToProps = Xv;
    S._rlookupByKey = eZ;
    S._scaleRangesChanged = cZ;
    S._setMinAndMaxByKey = QG;
    S._splitKey = B1;
    S._steppedInterpolation = hJ;
    S._steppedLineTo = wZ;
    S._textX = dZ;
    S._toLeftRightCenter = oZ;
    S._updateBezierControlPoints = rJ;
    S.addRoundedRectPath = IZ;
    S.almostEquals = $v;
    S.almostWhole = $G;
    S.callback = EG;
    S.clearCanvas = OZ;
    S.clipArea = MZ;
    S.clone = on;
    S.color = hZ;
    S.createContext = o2;
    S.debounce = uZ;
    S.defaults = i2;
    S.defined = YG;
    S.descriptors = r2;
    S.distanceBetweenPoints = Wv;
    S.drawPoint = PZ;
    S.drawPointLegend = a2;
    S.each = NG;
    S.effects = _f;
    S.finiteOrDefault = jG;
    S.fontString = aZ;
    S.formatNumber = Z1;
    S.getAngleFromPoint = ZG;
    S.getHoverColor = mf;
    S.getMaximumSize = lJ;
    S.getRelativePosition = uJ;
    S.getRtlAdapter = _J;
    S.getStyle = _2;
    S.isArray = Se;
    S.isFunction = dn;
    S.isNullOrUndef = un;
    S.isNumber = VG;
    S.isNumberFinite = Bv;
    S.isObject = xe;
    S.isPatternOrGradient = qf;
    S.listenArrayEvents = rZ;
    S.log10 = bf;
    S.merge = ln;
    S.mergeIf = H1;
    S.niceNum = BG;
    S.noop = RG;
    S.overrideTextDirection = mJ;
    S.overrides = t2;
    S.readUsedSize = cJ;
    S.renderText = RZ;
    S.requestAnimFrame = G1;
    S.resolve = WZ;
    S.resolveObjectKey = Uv;
    S.restoreTextDirection = bJ;
    S.retinaScale = dJ;
    S.setsEqual = HG;
    S.sign = Fv;
    S.splineCurve = v2;
    S.splineCurveMonotone = g2;
    S.supportsEventListenerOptions = fJ;
    S.throttled = sZ;
    S.toDegrees = KG;
    S.toDimension = F1;
    S.toFont = FZ;
    S.toFontString = n2;
    S.toLineHeight = s2;
    S.toPadding = LZ;
    S.toPercentage = AG;
    S.toRadians = XG;
    S.toTRBL = u2;
    S.toTRBLCorners = NZ;
    S.uid = IG;
    S.unclipArea = DZ;
    S.unlistenArrayEvents = iZ;
    S.valueOrDefault = Mt;
  });
  var tk = g((B) => {
    "use strict";
    var f = x2();
    Ev();
    var og = class {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(e, t, i, n) {
          let a = t.listeners[n],
            s = t.duration;
          a.forEach((u) =>
            u({
              chart: e,
              initial: t.initial,
              numSteps: s,
              currentStep: Math.min(i - t.start, s),
            })
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = f.requestAnimFrame.call(window, () => {
              this._update(),
                (this._request = null),
                this._running && this._refresh();
            })));
        }
        _update(e = Date.now()) {
          let t = 0;
          this._charts.forEach((i, n) => {
            if (!i.running || !i.items.length) return;
            let a = i.items,
              s = a.length - 1,
              u = !1,
              o;
            for (; s >= 0; --s)
              (o = a[s]),
                o._active
                  ? (o._total > i.duration && (i.duration = o._total),
                    o.tick(e),
                    (u = !0))
                  : ((a[s] = a[a.length - 1]), a.pop());
            u && (n.draw(), this._notify(n, i, e, "progress")),
              a.length ||
                ((i.running = !1),
                this._notify(n, i, e, "complete"),
                (i.initial = !1)),
              (t += a.length);
          }),
            (this._lastDate = e),
            t === 0 && (this._running = !1);
        }
        _getAnims(e) {
          let t = this._charts,
            i = t.get(e);
          return (
            i ||
              ((i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              t.set(e, i)),
            i
          );
        }
        listen(e, t, i) {
          this._getAnims(e).listeners[t].push(i);
        }
        add(e, t) {
          !t || !t.length || this._getAnims(e).items.push(...t);
        }
        has(e) {
          return this._getAnims(e).items.length > 0;
        }
        start(e) {
          let t = this._charts.get(e);
          !t ||
            ((t.running = !0),
            (t.start = Date.now()),
            (t.duration = t.items.reduce(
              (i, n) => Math.max(i, n._duration),
              0
            )),
            this._refresh());
        }
        running(e) {
          if (!this._running) return !1;
          let t = this._charts.get(e);
          return !(!t || !t.running || !t.items.length);
        }
        stop(e) {
          let t = this._charts.get(e);
          if (!t || !t.items.length) return;
          let i = t.items,
            n = i.length - 1;
          for (; n >= 0; --n) i[n].cancel();
          (t.items = []), this._notify(e, t, Date.now(), "complete");
        }
        remove(e) {
          return this._charts.delete(e);
        }
      },
      Ue = new og(),
      y2 = "transparent",
      wJ = {
        boolean(r, e, t) {
          return t > 0.5 ? e : r;
        },
        color(r, e, t) {
          let i = f.color(r || y2),
            n = i.valid && f.color(e || y2);
          return n && n.valid ? n.mix(i, t).hexString() : e;
        },
        number(r, e, t) {
          return r + (e - r) * t;
        },
      },
      Rf = class {
        constructor(e, t, i, n) {
          let a = t[i];
          n = f.resolve([e.to, n, a, e.from]);
          let s = f.resolve([e.from, a, n]);
          (this._active = !0),
            (this._fn = e.fn || wJ[e.type || typeof s]),
            (this._easing = f.effects[e.easing] || f.effects.linear),
            (this._start = Math.floor(Date.now() + (e.delay || 0))),
            (this._duration = this._total = Math.floor(e.duration)),
            (this._loop = !!e.loop),
            (this._target = t),
            (this._prop = i),
            (this._from = s),
            (this._to = n),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(e, t, i) {
          if (this._active) {
            this._notify(!1);
            let n = this._target[this._prop],
              a = i - this._start,
              s = this._duration - a;
            (this._start = i),
              (this._duration = Math.floor(Math.max(s, e.duration))),
              (this._total += a),
              (this._loop = !!e.loop),
              (this._to = f.resolve([e.to, t, n, e.from])),
              (this._from = f.resolve([e.from, n, t]));
          }
        }
        cancel() {
          this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(e) {
          let t = e - this._start,
            i = this._duration,
            n = this._prop,
            a = this._from,
            s = this._loop,
            u = this._to,
            o;
          if (((this._active = a !== u && (s || t < i)), !this._active)) {
            (this._target[n] = u), this._notify(!0);
            return;
          }
          if (t < 0) {
            this._target[n] = a;
            return;
          }
          (o = (t / i) % 2),
            (o = s && o > 1 ? 2 - o : o),
            (o = this._easing(Math.min(1, Math.max(0, o)))),
            (this._target[n] = this._fn(a, u, o));
        }
        wait() {
          let e = this._promises || (this._promises = []);
          return new Promise((t, i) => {
            e.push({ res: t, rej: i });
          });
        }
        _notify(e) {
          let t = e ? "res" : "rej",
            i = this._promises || [];
          for (let n = 0; n < i.length; n++) i[n][t]();
        }
      },
      yn = class {
        constructor(e, t) {
          (this._chart = e), (this._properties = new Map()), this.configure(t);
        }
        configure(e) {
          if (!f.isObject(e)) return;
          let t = Object.keys(f.defaults.animation),
            i = this._properties;
          Object.getOwnPropertyNames(e).forEach((n) => {
            let a = e[n];
            if (!f.isObject(a)) return;
            let s = {};
            for (let u of t) s[u] = a[u];
            ((f.isArray(a.properties) && a.properties) || [n]).forEach((u) => {
              (u === n || !i.has(u)) && i.set(u, s);
            });
          });
        }
        _animateOptions(e, t) {
          let i = t.options,
            n = kJ(e, i);
          if (!n) return [];
          let a = this._createAnimations(n, i);
          return (
            i.$shared &&
              TJ(e.options.$animations, i).then(
                () => {
                  e.options = i;
                },
                () => {}
              ),
            a
          );
        }
        _createAnimations(e, t) {
          let i = this._properties,
            n = [],
            a = e.$animations || (e.$animations = {}),
            s = Object.keys(t),
            u = Date.now(),
            o;
          for (o = s.length - 1; o >= 0; --o) {
            let l = s[o];
            if (l.charAt(0) === "$") continue;
            if (l === "options") {
              n.push(...this._animateOptions(e, t));
              continue;
            }
            let d = t[l],
              c = a[l],
              h = i.get(l);
            if (c)
              if (h && c.active()) {
                c.update(h, d, u);
                continue;
              } else c.cancel();
            if (!h || !h.duration) {
              e[l] = d;
              continue;
            }
            (a[l] = c = new Rf(h, e, l, d)), n.push(c);
          }
          return n;
        }
        update(e, t) {
          if (this._properties.size === 0) {
            Object.assign(e, t);
            return;
          }
          let i = this._createAnimations(e, t);
          if (i.length) return Ue.add(this._chart, i), !0;
        }
      };
    function TJ(r, e) {
      let t = [],
        i = Object.keys(e);
      for (let n = 0; n < i.length; n++) {
        let a = r[i[n]];
        a && a.active() && t.push(a.wait());
      }
      return Promise.all(t);
    }
    function kJ(r, e) {
      if (!e) return;
      let t = r.options;
      if (!t) {
        r.options = e;
        return;
      }
      return (
        t.$shared &&
          (r.options = t =
            Object.assign({}, t, { $shared: !1, $animations: {} })),
        t
      );
    }
    function q2(r, e) {
      let t = (r && r.options) || {},
        i = t.reverse,
        n = t.min === void 0 ? e : 0,
        a = t.max === void 0 ? e : 0;
      return { start: i ? a : n, end: i ? n : a };
    }
    function SJ(r, e, t) {
      if (t === !1) return !1;
      let i = q2(r, t),
        n = q2(e, t);
      return { top: n.end, right: i.end, bottom: n.start, left: i.start };
    }
    function CJ(r) {
      let e, t, i, n;
      return (
        f.isObject(r)
          ? ((e = r.top), (t = r.right), (i = r.bottom), (n = r.left))
          : (e = t = i = n = r),
        { top: e, right: t, bottom: i, left: n, disabled: r === !1 }
      );
    }
    function yT(r, e) {
      let t = [],
        i = r._getSortedDatasetMetas(e),
        n,
        a;
      for (n = 0, a = i.length; n < a; ++n) t.push(i[n].index);
      return t;
    }
    function O2(r, e, t, i = {}) {
      let n = r.keys,
        a = i.mode === "single",
        s,
        u,
        o,
        l;
      if (e !== null) {
        for (s = 0, u = n.length; s < u; ++s) {
          if (((o = +n[s]), o === t)) {
            if (i.all) continue;
            break;
          }
          (l = r.values[o]),
            f.isNumberFinite(l) &&
              (a || e === 0 || f.sign(e) === f.sign(l)) &&
              (e += l);
        }
        return e;
      }
    }
    function RJ(r) {
      let e = Object.keys(r),
        t = new Array(e.length),
        i,
        n,
        a;
      for (i = 0, n = e.length; i < n; ++i)
        (a = e[i]), (t[i] = { x: a, y: r[a] });
      return t;
    }
    function P2(r, e) {
      let t = r && r.options.stacked;
      return t || (t === void 0 && e.stack !== void 0);
    }
    function IJ(r, e, t) {
      return `${r.id}.${e.id}.${t.stack || t.type}`;
    }
    function jJ(r) {
      let { min: e, max: t, minDefined: i, maxDefined: n } = r.getUserBounds();
      return {
        min: i ? e : Number.NEGATIVE_INFINITY,
        max: n ? t : Number.POSITIVE_INFINITY,
      };
    }
    function AJ(r, e, t) {
      let i = r[e] || (r[e] = {});
      return i[t] || (i[t] = {});
    }
    function M2(r, e, t, i) {
      for (let n of e.getMatchingVisibleMetas(i).reverse()) {
        let a = r[n.index];
        if ((t && a > 0) || (!t && a < 0)) return n.index;
      }
      return null;
    }
    function D2(r, e) {
      let { chart: t, _cachedMeta: i } = r,
        n = t._stacks || (t._stacks = {}),
        { iScale: a, vScale: s, index: u } = i,
        o = a.axis,
        l = s.axis,
        d = IJ(a, s, i),
        c = e.length,
        h;
      for (let v = 0; v < c; ++v) {
        let p = e[v],
          { [o]: m, [l]: q } = p,
          O = p._stacks || (p._stacks = {});
        (h = O[l] = AJ(n, d, m)),
          (h[u] = q),
          (h._top = M2(h, s, !0, i.type)),
          (h._bottom = M2(h, s, !1, i.type));
        let P = h._visualValues || (h._visualValues = {});
        P[u] = q;
      }
    }
    function Jv(r, e) {
      let t = r.scales;
      return Object.keys(t)
        .filter((i) => t[i].axis === e)
        .shift();
    }
    function EJ(r, e) {
      return f.createContext(r, {
        active: !1,
        dataset: void 0,
        datasetIndex: e,
        index: e,
        mode: "default",
        type: "dataset",
      });
    }
    function NJ(r, e, t) {
      return f.createContext(r, {
        active: !1,
        dataIndex: e,
        parsed: void 0,
        raw: void 0,
        element: t,
        index: e,
        mode: "default",
        type: "data",
      });
    }
    function hn(r, e) {
      let t = r.controller.index,
        i = r.vScale && r.vScale.axis;
      if (!!i) {
        e = e || r._parsed;
        for (let n of e) {
          let a = n._stacks;
          if (!a || a[i] === void 0 || a[i][t] === void 0) return;
          delete a[i][t],
            a[i]._visualValues !== void 0 &&
              a[i]._visualValues[t] !== void 0 &&
              delete a[i]._visualValues[t];
        }
      }
    }
    var eg = (r) => r === "reset" || r === "none",
      w2 = (r, e) => (e ? r : Object.assign({}, r)),
      LJ = (r, e, t) =>
        r && !e.hidden && e._stacked && { keys: yT(t, !0), values: null },
      qe = class {
        constructor(e, t) {
          (this.chart = e),
            (this._ctx = e.ctx),
            (this.index = t),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize();
        }
        initialize() {
          let e = this._cachedMeta;
          this.configure(),
            this.linkScales(),
            (e._stacked = P2(e.vScale, e)),
            this.addElements(),
            this.options.fill &&
              !this.chart.isPluginEnabled("filler") &&
              console.warn(
                "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
              );
        }
        updateIndex(e) {
          this.index !== e && hn(this._cachedMeta), (this.index = e);
        }
        linkScales() {
          let e = this.chart,
            t = this._cachedMeta,
            i = this.getDataset(),
            n = (c, h, v, p) => (c === "x" ? h : c === "r" ? p : v),
            a = (t.xAxisID = f.valueOrDefault(i.xAxisID, Jv(e, "x"))),
            s = (t.yAxisID = f.valueOrDefault(i.yAxisID, Jv(e, "y"))),
            u = (t.rAxisID = f.valueOrDefault(i.rAxisID, Jv(e, "r"))),
            o = t.indexAxis,
            l = (t.iAxisID = n(o, a, s, u)),
            d = (t.vAxisID = n(o, s, a, u));
          (t.xScale = this.getScaleForId(a)),
            (t.yScale = this.getScaleForId(s)),
            (t.rScale = this.getScaleForId(u)),
            (t.iScale = this.getScaleForId(l)),
            (t.vScale = this.getScaleForId(d));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(e) {
          return this.chart.scales[e];
        }
        _getOtherScale(e) {
          let t = this._cachedMeta;
          return e === t.iScale ? t.vScale : t.iScale;
        }
        reset() {
          this._update("reset");
        }
        _destroy() {
          let e = this._cachedMeta;
          this._data && f.unlistenArrayEvents(this._data, this),
            e._stacked && hn(e);
        }
        _dataCheck() {
          let e = this.getDataset(),
            t = e.data || (e.data = []),
            i = this._data;
          if (f.isObject(t)) this._data = RJ(t);
          else if (i !== t) {
            if (i) {
              f.unlistenArrayEvents(i, this);
              let n = this._cachedMeta;
              hn(n), (n._parsed = []);
            }
            t && Object.isExtensible(t) && f.listenArrayEvents(t, this),
              (this._syncList = []),
              (this._data = t);
          }
        }
        addElements() {
          let e = this._cachedMeta;
          this._dataCheck(),
            this.datasetElementType &&
              (e.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(e) {
          let t = this._cachedMeta,
            i = this.getDataset(),
            n = !1;
          this._dataCheck();
          let a = t._stacked;
          (t._stacked = P2(t.vScale, t)),
            t.stack !== i.stack && ((n = !0), hn(t), (t.stack = i.stack)),
            this._resyncElements(e),
            (n || a !== t._stacked) && D2(this, t._parsed);
        }
        configure() {
          let e = this.chart.config,
            t = e.datasetScopeKeys(this._type),
            i = e.getOptionScopes(this.getDataset(), t, !0);
          (this.options = e.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
        }
        parse(e, t) {
          let { _cachedMeta: i, _data: n } = this,
            { iScale: a, _stacked: s } = i,
            u = a.axis,
            o = e === 0 && t === n.length ? !0 : i._sorted,
            l = e > 0 && i._parsed[e - 1],
            d,
            c,
            h;
          if (this._parsing === !1) (i._parsed = n), (i._sorted = !0), (h = n);
          else {
            f.isArray(n[e])
              ? (h = this.parseArrayData(i, n, e, t))
              : f.isObject(n[e])
              ? (h = this.parseObjectData(i, n, e, t))
              : (h = this.parsePrimitiveData(i, n, e, t));
            let v = () => c[u] === null || (l && c[u] < l[u]);
            for (d = 0; d < t; ++d)
              (i._parsed[d + e] = c = h[d]), o && (v() && (o = !1), (l = c));
            i._sorted = o;
          }
          s && D2(this, h);
        }
        parsePrimitiveData(e, t, i, n) {
          let { iScale: a, vScale: s } = e,
            u = a.axis,
            o = s.axis,
            l = a.getLabels(),
            d = a === s,
            c = new Array(n),
            h,
            v,
            p;
          for (h = 0, v = n; h < v; ++h)
            (p = h + i),
              (c[h] = { [u]: d || a.parse(l[p], p), [o]: s.parse(t[p], p) });
          return c;
        }
        parseArrayData(e, t, i, n) {
          let { xScale: a, yScale: s } = e,
            u = new Array(n),
            o,
            l,
            d,
            c;
          for (o = 0, l = n; o < l; ++o)
            (d = o + i),
              (c = t[d]),
              (u[o] = { x: a.parse(c[0], d), y: s.parse(c[1], d) });
          return u;
        }
        parseObjectData(e, t, i, n) {
          let { xScale: a, yScale: s } = e,
            { xAxisKey: u = "x", yAxisKey: o = "y" } = this._parsing,
            l = new Array(n),
            d,
            c,
            h,
            v;
          for (d = 0, c = n; d < c; ++d)
            (h = d + i),
              (v = t[h]),
              (l[d] = {
                x: a.parse(f.resolveObjectKey(v, u), h),
                y: s.parse(f.resolveObjectKey(v, o), h),
              });
          return l;
        }
        getParsed(e) {
          return this._cachedMeta._parsed[e];
        }
        getDataElement(e) {
          return this._cachedMeta.data[e];
        }
        applyStack(e, t, i) {
          let n = this.chart,
            a = this._cachedMeta,
            s = t[e.axis],
            u = { keys: yT(n, !0), values: t._stacks[e.axis]._visualValues };
          return O2(u, s, a.index, { mode: i });
        }
        updateRangeFromParsed(e, t, i, n) {
          let a = i[t.axis],
            s = a === null ? NaN : a,
            u = n && i._stacks[t.axis];
          n && u && ((n.values = u), (s = O2(n, a, this._cachedMeta.index))),
            (e.min = Math.min(e.min, s)),
            (e.max = Math.max(e.max, s));
        }
        getMinMax(e, t) {
          let i = this._cachedMeta,
            n = i._parsed,
            a = i._sorted && e === i.iScale,
            s = n.length,
            u = this._getOtherScale(e),
            o = LJ(t, i, this.chart),
            l = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            },
            { min: d, max: c } = jJ(u),
            h,
            v;
          function p() {
            v = n[h];
            let m = v[u.axis];
            return !f.isNumberFinite(v[e.axis]) || d > m || c < m;
          }
          for (
            h = 0;
            h < s && !(!p() && (this.updateRangeFromParsed(l, e, v, o), a));
            ++h
          );
          if (a) {
            for (h = s - 1; h >= 0; --h)
              if (!p()) {
                this.updateRangeFromParsed(l, e, v, o);
                break;
              }
          }
          return l;
        }
        getAllParsedValues(e) {
          let t = this._cachedMeta._parsed,
            i = [],
            n,
            a,
            s;
          for (n = 0, a = t.length; n < a; ++n)
            (s = t[n][e.axis]), f.isNumberFinite(s) && i.push(s);
          return i;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(e) {
          let t = this._cachedMeta,
            i = t.iScale,
            n = t.vScale,
            a = this.getParsed(e);
          return {
            label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
            value: n ? "" + n.getLabelForValue(a[n.axis]) : "",
          };
        }
        _update(e) {
          let t = this._cachedMeta;
          this.update(e || "default"),
            (t._clip = CJ(
              f.valueOrDefault(
                this.options.clip,
                SJ(t.xScale, t.yScale, this.getMaxOverflow())
              )
            ));
        }
        update(e) {}
        draw() {
          let e = this._ctx,
            t = this.chart,
            i = this._cachedMeta,
            n = i.data || [],
            a = t.chartArea,
            s = [],
            u = this._drawStart || 0,
            o = this._drawCount || n.length - u,
            l = this.options.drawActiveElementsOnTop,
            d;
          for (i.dataset && i.dataset.draw(e, a, u, o), d = u; d < u + o; ++d) {
            let c = n[d];
            c.hidden || (c.active && l ? s.push(c) : c.draw(e, a));
          }
          for (d = 0; d < s.length; ++d) s[d].draw(e, a);
        }
        getStyle(e, t) {
          let i = t ? "active" : "default";
          return e === void 0 && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(e || 0, i);
        }
        getContext(e, t, i) {
          let n = this.getDataset(),
            a;
          if (e >= 0 && e < this._cachedMeta.data.length) {
            let s = this._cachedMeta.data[e];
            (a = s.$context || (s.$context = NJ(this.getContext(), e, s))),
              (a.parsed = this.getParsed(e)),
              (a.raw = n.data[e]),
              (a.index = a.dataIndex = e);
          } else
            (a =
              this.$context ||
              (this.$context = EJ(this.chart.getContext(), this.index))),
              (a.dataset = n),
              (a.index = a.datasetIndex = this.index);
          return (a.active = !!t), (a.mode = i), a;
        }
        resolveDatasetElementOptions(e) {
          return this._resolveElementOptions(this.datasetElementType.id, e);
        }
        resolveDataElementOptions(e, t) {
          return this._resolveElementOptions(this.dataElementType.id, t, e);
        }
        _resolveElementOptions(e, t = "default", i) {
          let n = t === "active",
            a = this._cachedDataOpts,
            s = e + "-" + t,
            u = a[s],
            o = this.enableOptionSharing && f.defined(i);
          if (u) return w2(u, o);
          let l = this.chart.config,
            d = l.datasetElementScopeKeys(this._type, e),
            c = n ? [`${e}Hover`, "hover", e, ""] : [e, ""],
            h = l.getOptionScopes(this.getDataset(), d),
            v = Object.keys(f.defaults.elements[e]),
            p = () => this.getContext(i, n, t),
            m = l.resolveNamedOptions(h, v, p, c);
          return (
            m.$shared && ((m.$shared = o), (a[s] = Object.freeze(w2(m, o)))), m
          );
        }
        _resolveAnimations(e, t, i) {
          let n = this.chart,
            a = this._cachedDataOpts,
            s = `animation-${t}`,
            u = a[s];
          if (u) return u;
          let o;
          if (n.options.animation !== !1) {
            let d = this.chart.config,
              c = d.datasetAnimationScopeKeys(this._type, t),
              h = d.getOptionScopes(this.getDataset(), c);
            o = d.createResolver(h, this.getContext(e, i, t));
          }
          let l = new yn(n, o && o.animations);
          return o && o._cacheable && (a[s] = Object.freeze(l)), l;
        }
        getSharedOptions(e) {
          if (!!e.$shared)
            return (
              this._sharedOptions ||
              (this._sharedOptions = Object.assign({}, e))
            );
        }
        includeOptions(e, t) {
          return !t || eg(e) || this.chart._animationsDisabled;
        }
        _getSharedOptions(e, t) {
          let i = this.resolveDataElementOptions(e, t),
            n = this._sharedOptions,
            a = this.getSharedOptions(i),
            s = this.includeOptions(t, a) || a !== n;
          return (
            this.updateSharedOptions(a, t, i),
            { sharedOptions: a, includeOptions: s }
          );
        }
        updateElement(e, t, i, n) {
          eg(n)
            ? Object.assign(e, i)
            : this._resolveAnimations(t, n).update(e, i);
        }
        updateSharedOptions(e, t, i) {
          e && !eg(t) && this._resolveAnimations(void 0, t).update(e, i);
        }
        _setStyle(e, t, i, n) {
          e.active = n;
          let a = this.getStyle(t, n);
          this._resolveAnimations(t, i, n).update(e, {
            options: (!n && this.getSharedOptions(a)) || a,
          });
        }
        removeHoverStyle(e, t, i) {
          this._setStyle(e, i, "active", !1);
        }
        setHoverStyle(e, t, i) {
          this._setStyle(e, i, "active", !0);
        }
        _removeDatasetHoverStyle() {
          let e = this._cachedMeta.dataset;
          e && this._setStyle(e, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
          let e = this._cachedMeta.dataset;
          e && this._setStyle(e, void 0, "active", !0);
        }
        _resyncElements(e) {
          let t = this._data,
            i = this._cachedMeta.data;
          for (let [u, o, l] of this._syncList) this[u](o, l);
          this._syncList = [];
          let n = i.length,
            a = t.length,
            s = Math.min(a, n);
          s && this.parse(0, s),
            a > n
              ? this._insertElements(n, a - n, e)
              : a < n && this._removeElements(a, n - a);
        }
        _insertElements(e, t, i = !0) {
          let n = this._cachedMeta,
            a = n.data,
            s = e + t,
            u,
            o = (l) => {
              for (l.length += t, u = l.length - 1; u >= s; u--)
                l[u] = l[u - t];
            };
          for (o(a), u = e; u < s; ++u) a[u] = new this.dataElementType();
          this._parsing && o(n._parsed),
            this.parse(e, t),
            i && this.updateElements(a, e, t, "reset");
        }
        updateElements(e, t, i, n) {}
        _removeElements(e, t) {
          let i = this._cachedMeta;
          if (this._parsing) {
            let n = i._parsed.splice(e, t);
            i._stacked && hn(i, n);
          }
          i.data.splice(e, t);
        }
        _sync(e) {
          if (this._parsing) this._syncList.push(e);
          else {
            let [t, i, n] = e;
            this[t](i, n);
          }
          this.chart._dataChanges.push([this.index, ...e]);
        }
        _onDataPush() {
          let e = arguments.length;
          this._sync(["_insertElements", this.getDataset().data.length - e, e]);
        }
        _onDataPop() {
          this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(["_removeElements", 0, 1]);
        }
        _onDataSplice(e, t) {
          t && this._sync(["_removeElements", e, t]);
          let i = arguments.length - 2;
          i && this._sync(["_insertElements", e, i]);
        }
        _onDataUnshift() {
          this._sync(["_insertElements", 0, arguments.length]);
        }
      };
    A(qe, "defaults", {}),
      A(qe, "datasetElementType", null),
      A(qe, "dataElementType", null);
    function FJ(r, e) {
      if (!r._cache.$bar) {
        let t = r.getMatchingVisibleMetas(e),
          i = [];
        for (let n = 0, a = t.length; n < a; n++)
          i = i.concat(t[n].controller.getAllParsedValues(r));
        r._cache.$bar = f._arrayUnique(i.sort((n, a) => n - a));
      }
      return r._cache.$bar;
    }
    function WJ(r) {
      let e = r.iScale,
        t = FJ(e, r.type),
        i = e._length,
        n,
        a,
        s,
        u,
        o = () => {
          s === 32767 ||
            s === -32768 ||
            (f.defined(u) && (i = Math.min(i, Math.abs(s - u) || i)), (u = s));
        };
      for (n = 0, a = t.length; n < a; ++n) (s = e.getPixelForValue(t[n])), o();
      for (u = void 0, n = 0, a = e.ticks.length; n < a; ++n)
        (s = e.getPixelForTick(n)), o();
      return i;
    }
    function YJ(r, e, t, i) {
      let n = t.barThickness,
        a,
        s;
      return (
        f.isNullOrUndef(n)
          ? ((a = e.min * t.categoryPercentage), (s = t.barPercentage))
          : ((a = n * i), (s = 1)),
        { chunk: a / i, ratio: s, start: e.pixels[r] - a / 2 }
      );
    }
    function HJ(r, e, t, i) {
      let n = e.pixels,
        a = n[r],
        s = r > 0 ? n[r - 1] : null,
        u = r < n.length - 1 ? n[r + 1] : null,
        o = t.categoryPercentage;
      s === null && (s = a - (u === null ? e.end - e.start : u - a)),
        u === null && (u = a + a - s);
      let l = a - ((a - Math.min(s, u)) / 2) * o;
      return {
        chunk: ((Math.abs(u - s) / 2) * o) / i,
        ratio: t.barPercentage,
        start: l,
      };
    }
    function zJ(r, e, t, i) {
      let n = t.parse(r[0], i),
        a = t.parse(r[1], i),
        s = Math.min(n, a),
        u = Math.max(n, a),
        o = s,
        l = u;
      Math.abs(s) > Math.abs(u) && ((o = u), (l = s)),
        (e[t.axis] = l),
        (e._custom = {
          barStart: o,
          barEnd: l,
          start: n,
          end: a,
          min: s,
          max: u,
        });
    }
    function qT(r, e, t, i) {
      return f.isArray(r) ? zJ(r, e, t, i) : (e[t.axis] = t.parse(r, i)), e;
    }
    function T2(r, e, t, i) {
      let n = r.iScale,
        a = r.vScale,
        s = n.getLabels(),
        u = n === a,
        o = [],
        l,
        d,
        c,
        h;
      for (l = t, d = t + i; l < d; ++l)
        (h = e[l]),
          (c = {}),
          (c[n.axis] = u || n.parse(s[l], l)),
          o.push(qT(h, c, a, l));
      return o;
    }
    function tg(r) {
      return r && r.barStart !== void 0 && r.barEnd !== void 0;
    }
    function BJ(r, e, t) {
      return r !== 0
        ? f.sign(r)
        : (e.isHorizontal() ? 1 : -1) * (e.min >= t ? 1 : -1);
    }
    function UJ(r) {
      let e, t, i, n, a;
      return (
        r.horizontal
          ? ((e = r.base > r.x), (t = "left"), (i = "right"))
          : ((e = r.base < r.y), (t = "bottom"), (i = "top")),
        e ? ((n = "end"), (a = "start")) : ((n = "start"), (a = "end")),
        { start: t, end: i, reverse: e, top: n, bottom: a }
      );
    }
    function VJ(r, e, t, i) {
      let n = e.borderSkipped,
        a = {};
      if (!n) {
        r.borderSkipped = a;
        return;
      }
      if (n === !0) {
        r.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        return;
      }
      let { start: s, end: u, reverse: o, top: l, bottom: d } = UJ(r);
      n === "middle" &&
        t &&
        ((r.enableBorderRadius = !0),
        (t._top || 0) === i
          ? (n = l)
          : (t._bottom || 0) === i
          ? (n = d)
          : ((a[k2(d, s, u, o)] = !0), (n = l))),
        (a[k2(n, s, u, o)] = !0),
        (r.borderSkipped = a);
    }
    function k2(r, e, t, i) {
      return i ? ((r = $J(r, e, t)), (r = S2(r, t, e))) : (r = S2(r, e, t)), r;
    }
    function $J(r, e, t) {
      return r === e ? t : r === t ? e : r;
    }
    function S2(r, e, t) {
      return r === "start" ? e : r === "end" ? t : r;
    }
    function QJ(r, { inflateAmount: e }, t) {
      r.inflateAmount = e === "auto" ? (t === 1 ? 0.33 : 0) : e;
    }
    var Jt = class extends qe {
      parsePrimitiveData(e, t, i, n) {
        return T2(e, t, i, n);
      }
      parseArrayData(e, t, i, n) {
        return T2(e, t, i, n);
      }
      parseObjectData(e, t, i, n) {
        let { iScale: a, vScale: s } = e,
          { xAxisKey: u = "x", yAxisKey: o = "y" } = this._parsing,
          l = a.axis === "x" ? u : o,
          d = s.axis === "x" ? u : o,
          c = [],
          h,
          v,
          p,
          m;
        for (h = i, v = i + n; h < v; ++h)
          (m = t[h]),
            (p = {}),
            (p[a.axis] = a.parse(f.resolveObjectKey(m, l), h)),
            c.push(qT(f.resolveObjectKey(m, d), p, s, h));
        return c;
      }
      updateRangeFromParsed(e, t, i, n) {
        super.updateRangeFromParsed(e, t, i, n);
        let a = i._custom;
        a &&
          t === this._cachedMeta.vScale &&
          ((e.min = Math.min(e.min, a.min)), (e.max = Math.max(e.max, a.max)));
      }
      getMaxOverflow() {
        return 0;
      }
      getLabelAndValue(e) {
        let t = this._cachedMeta,
          { iScale: i, vScale: n } = t,
          a = this.getParsed(e),
          s = a._custom,
          u = tg(s)
            ? "[" + s.start + ", " + s.end + "]"
            : "" + n.getLabelForValue(a[n.axis]);
        return { label: "" + i.getLabelForValue(a[i.axis]), value: u };
      }
      initialize() {
        (this.enableOptionSharing = !0), super.initialize();
        let e = this._cachedMeta;
        e.stack = this.getDataset().stack;
      }
      update(e) {
        let t = this._cachedMeta;
        this.updateElements(t.data, 0, t.data.length, e);
      }
      updateElements(e, t, i, n) {
        let a = n === "reset",
          {
            index: s,
            _cachedMeta: { vScale: u },
          } = this,
          o = u.getBasePixel(),
          l = u.isHorizontal(),
          d = this._getRuler(),
          { sharedOptions: c, includeOptions: h } = this._getSharedOptions(
            t,
            n
          );
        for (let v = t; v < t + i; v++) {
          let p = this.getParsed(v),
            m =
              a || f.isNullOrUndef(p[u.axis])
                ? { base: o, head: o }
                : this._calculateBarValuePixels(v),
            q = this._calculateBarIndexPixels(v, d),
            O = (p._stacks || {})[u.axis],
            P = {
              horizontal: l,
              base: m.base,
              enableBorderRadius:
                !O || tg(p._custom) || s === O._top || s === O._bottom,
              x: l ? m.head : q.center,
              y: l ? q.center : m.head,
              height: l ? q.size : Math.abs(m.size),
              width: l ? Math.abs(m.size) : q.size,
            };
          h &&
            (P.options =
              c ||
              this.resolveDataElementOptions(v, e[v].active ? "active" : n));
          let w = P.options || e[v].options;
          VJ(P, w, O, s), QJ(P, w, d.ratio), this.updateElement(e[v], v, P, n);
        }
      }
      _getStacks(e, t) {
        let { iScale: i } = this._cachedMeta,
          n = i
            .getMatchingVisibleMetas(this._type)
            .filter((o) => o.controller.options.grouped),
          a = i.options.stacked,
          s = [],
          u = (o) => {
            let l = o.controller.getParsed(t),
              d = l && l[o.vScale.axis];
            if (f.isNullOrUndef(d) || isNaN(d)) return !0;
          };
        for (let o of n)
          if (
            !(t !== void 0 && u(o)) &&
            ((a === !1 ||
              s.indexOf(o.stack) === -1 ||
              (a === void 0 && o.stack === void 0)) &&
              s.push(o.stack),
            o.index === e)
          )
            break;
        return s.length || s.push(void 0), s;
      }
      _getStackCount(e) {
        return this._getStacks(void 0, e).length;
      }
      _getStackIndex(e, t, i) {
        let n = this._getStacks(e, i),
          a = t !== void 0 ? n.indexOf(t) : -1;
        return a === -1 ? n.length - 1 : a;
      }
      _getRuler() {
        let e = this.options,
          t = this._cachedMeta,
          i = t.iScale,
          n = [],
          a,
          s;
        for (a = 0, s = t.data.length; a < s; ++a)
          n.push(i.getPixelForValue(this.getParsed(a)[i.axis], a));
        let u = e.barThickness;
        return {
          min: u || WJ(t),
          pixels: n,
          start: i._startPixel,
          end: i._endPixel,
          stackCount: this._getStackCount(),
          scale: i,
          grouped: e.grouped,
          ratio: u ? 1 : e.categoryPercentage * e.barPercentage,
        };
      }
      _calculateBarValuePixels(e) {
        let {
            _cachedMeta: { vScale: t, _stacked: i, index: n },
            options: { base: a, minBarLength: s },
          } = this,
          u = a || 0,
          o = this.getParsed(e),
          l = o._custom,
          d = tg(l),
          c = o[t.axis],
          h = 0,
          v = i ? this.applyStack(t, o, i) : c,
          p,
          m;
        v !== c && ((h = v - c), (v = c)),
          d &&
            ((c = l.barStart),
            (v = l.barEnd - l.barStart),
            c !== 0 && f.sign(c) !== f.sign(l.barEnd) && (h = 0),
            (h += c));
        let q = !f.isNullOrUndef(a) && !d ? a : h,
          O = t.getPixelForValue(q);
        if (
          (this.chart.getDataVisibility(e)
            ? (p = t.getPixelForValue(h + v))
            : (p = O),
          (m = p - O),
          Math.abs(m) < s)
        ) {
          (m = BJ(m, t, u) * s), c === u && (O -= m / 2);
          let P = t.getPixelForDecimal(0),
            w = t.getPixelForDecimal(1),
            C = Math.min(P, w),
            k = Math.max(P, w);
          (O = Math.max(Math.min(O, k), C)),
            (p = O + m),
            i &&
              !d &&
              (o._stacks[t.axis]._visualValues[n] =
                t.getValueForPixel(p) - t.getValueForPixel(O));
        }
        if (O === t.getPixelForValue(u)) {
          let P = (f.sign(m) * t.getLineWidthForValue(u)) / 2;
          (O += P), (m -= P);
        }
        return { size: m, base: O, head: p, center: p + m / 2 };
      }
      _calculateBarIndexPixels(e, t) {
        let i = t.scale,
          n = this.options,
          a = n.skipNull,
          s = f.valueOrDefault(n.maxBarThickness, 1 / 0),
          u,
          o;
        if (t.grouped) {
          let l = a ? this._getStackCount(e) : t.stackCount,
            d = n.barThickness === "flex" ? HJ(e, t, n, l) : YJ(e, t, n, l),
            c = this._getStackIndex(
              this.index,
              this._cachedMeta.stack,
              a ? e : void 0
            );
          (u = d.start + d.chunk * c + d.chunk / 2),
            (o = Math.min(s, d.chunk * d.ratio));
        } else
          (u = i.getPixelForValue(this.getParsed(e)[i.axis], e)),
            (o = Math.min(s, t.min * t.ratio));
        return { base: u - o / 2, head: u + o / 2, center: u, size: o };
      }
      draw() {
        let e = this._cachedMeta,
          t = e.vScale,
          i = e.data,
          n = i.length,
          a = 0;
        for (; a < n; ++a)
          this.getParsed(a)[t.axis] !== null && i[a].draw(this._ctx);
      }
    };
    A(Jt, "id", "bar"),
      A(Jt, "defaults", {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"],
          },
        },
      }),
      A(Jt, "overrides", {
        scales: {
          _index_: { type: "category", offset: !0, grid: { offset: !0 } },
          _value_: { type: "linear", beginAtZero: !0 },
        },
      });
    var er = class extends qe {
      initialize() {
        (this.enableOptionSharing = !0), super.initialize();
      }
      parsePrimitiveData(e, t, i, n) {
        let a = super.parsePrimitiveData(e, t, i, n);
        for (let s = 0; s < a.length; s++)
          a[s]._custom = this.resolveDataElementOptions(s + i).radius;
        return a;
      }
      parseArrayData(e, t, i, n) {
        let a = super.parseArrayData(e, t, i, n);
        for (let s = 0; s < a.length; s++) {
          let u = t[i + s];
          a[s]._custom = f.valueOrDefault(
            u[2],
            this.resolveDataElementOptions(s + i).radius
          );
        }
        return a;
      }
      parseObjectData(e, t, i, n) {
        let a = super.parseObjectData(e, t, i, n);
        for (let s = 0; s < a.length; s++) {
          let u = t[i + s];
          a[s]._custom = f.valueOrDefault(
            u && u.r && +u.r,
            this.resolveDataElementOptions(s + i).radius
          );
        }
        return a;
      }
      getMaxOverflow() {
        let e = this._cachedMeta.data,
          t = 0;
        for (let i = e.length - 1; i >= 0; --i)
          t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
        return t > 0 && t;
      }
      getLabelAndValue(e) {
        let t = this._cachedMeta,
          i = this.chart.data.labels || [],
          { xScale: n, yScale: a } = t,
          s = this.getParsed(e),
          u = n.getLabelForValue(s.x),
          o = a.getLabelForValue(s.y),
          l = s._custom;
        return {
          label: i[e] || "",
          value: "(" + u + ", " + o + (l ? ", " + l : "") + ")",
        };
      }
      update(e) {
        let t = this._cachedMeta.data;
        this.updateElements(t, 0, t.length, e);
      }
      updateElements(e, t, i, n) {
        let a = n === "reset",
          { iScale: s, vScale: u } = this._cachedMeta,
          { sharedOptions: o, includeOptions: l } = this._getSharedOptions(
            t,
            n
          ),
          d = s.axis,
          c = u.axis;
        for (let h = t; h < t + i; h++) {
          let v = e[h],
            p = !a && this.getParsed(h),
            m = {},
            q = (m[d] = a
              ? s.getPixelForDecimal(0.5)
              : s.getPixelForValue(p[d])),
            O = (m[c] = a ? u.getBasePixel() : u.getPixelForValue(p[c]));
          (m.skip = isNaN(q) || isNaN(O)),
            l &&
              ((m.options =
                o ||
                this.resolveDataElementOptions(h, v.active ? "active" : n)),
              a && (m.options.radius = 0)),
            this.updateElement(v, h, m, n);
        }
      }
      resolveDataElementOptions(e, t) {
        let i = this.getParsed(e),
          n = super.resolveDataElementOptions(e, t);
        n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
        let a = n.radius;
        return (
          t !== "active" && (n.radius = 0),
          (n.radius += f.valueOrDefault(i && i._custom, a)),
          n
        );
      }
    };
    A(er, "id", "bubble"),
      A(er, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"],
          },
        },
      }),
      A(er, "overrides", {
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      });
    function XJ(r, e, t) {
      let i = 1,
        n = 1,
        a = 0,
        s = 0;
      if (e < f.TAU) {
        let u = r,
          o = u + e,
          l = Math.cos(u),
          d = Math.sin(u),
          c = Math.cos(o),
          h = Math.sin(o),
          v = (w, C, k) =>
            f._angleBetween(w, u, o, !0) ? 1 : Math.max(C, C * t, k, k * t),
          p = (w, C, k) =>
            f._angleBetween(w, u, o, !0) ? -1 : Math.min(C, C * t, k, k * t),
          m = v(0, l, c),
          q = v(f.HALF_PI, d, h),
          O = p(f.PI, l, c),
          P = p(f.PI + f.HALF_PI, d, h);
        (i = (m - O) / 2),
          (n = (q - P) / 2),
          (a = -(m + O) / 2),
          (s = -(q + P) / 2);
      }
      return { ratioX: i, ratioY: n, offsetX: a, offsetY: s };
    }
    var $e = class extends qe {
      constructor(e, t) {
        super(e, t),
          (this.enableOptionSharing = !0),
          (this.innerRadius = void 0),
          (this.outerRadius = void 0),
          (this.offsetX = void 0),
          (this.offsetY = void 0);
      }
      linkScales() {}
      parse(e, t) {
        let i = this.getDataset().data,
          n = this._cachedMeta;
        if (this._parsing === !1) n._parsed = i;
        else {
          let a = (o) => +i[o];
          if (f.isObject(i[e])) {
            let { key: o = "value" } = this._parsing;
            a = (l) => +f.resolveObjectKey(i[l], o);
          }
          let s, u;
          for (s = e, u = e + t; s < u; ++s) n._parsed[s] = a(s);
        }
      }
      _getRotation() {
        return f.toRadians(this.options.rotation - 90);
      }
      _getCircumference() {
        return f.toRadians(this.options.circumference);
      }
      _getRotationExtents() {
        let e = f.TAU,
          t = -f.TAU;
        for (let i = 0; i < this.chart.data.datasets.length; ++i)
          if (
            this.chart.isDatasetVisible(i) &&
            this.chart.getDatasetMeta(i).type === this._type
          ) {
            let n = this.chart.getDatasetMeta(i).controller,
              a = n._getRotation(),
              s = n._getCircumference();
            (e = Math.min(e, a)), (t = Math.max(t, a + s));
          }
        return { rotation: e, circumference: t - e };
      }
      update(e) {
        let t = this.chart,
          { chartArea: i } = t,
          n = this._cachedMeta,
          a = n.data,
          s =
            this.getMaxBorderWidth() +
            this.getMaxOffset(a) +
            this.options.spacing,
          u = Math.max((Math.min(i.width, i.height) - s) / 2, 0),
          o = Math.min(f.toPercentage(this.options.cutout, u), 1),
          l = this._getRingWeight(this.index),
          { circumference: d, rotation: c } = this._getRotationExtents(),
          { ratioX: h, ratioY: v, offsetX: p, offsetY: m } = XJ(c, d, o),
          q = (i.width - s) / h,
          O = (i.height - s) / v,
          P = Math.max(Math.min(q, O) / 2, 0),
          w = f.toDimension(this.options.radius, P),
          C = Math.max(w * o, 0),
          k = (w - C) / this._getVisibleDatasetWeightTotal();
        (this.offsetX = p * w),
          (this.offsetY = m * w),
          (n.total = this.calculateTotal()),
          (this.outerRadius = w - k * this._getRingWeightOffset(this.index)),
          (this.innerRadius = Math.max(this.outerRadius - k * l, 0)),
          this.updateElements(a, 0, a.length, e);
      }
      _circumference(e, t) {
        let i = this.options,
          n = this._cachedMeta,
          a = this._getCircumference();
        return (t && i.animation.animateRotate) ||
          !this.chart.getDataVisibility(e) ||
          n._parsed[e] === null ||
          n.data[e].hidden
          ? 0
          : this.calculateCircumference((n._parsed[e] * a) / f.TAU);
      }
      updateElements(e, t, i, n) {
        let a = n === "reset",
          s = this.chart,
          u = s.chartArea,
          l = s.options.animation,
          d = (u.left + u.right) / 2,
          c = (u.top + u.bottom) / 2,
          h = a && l.animateScale,
          v = h ? 0 : this.innerRadius,
          p = h ? 0 : this.outerRadius,
          { sharedOptions: m, includeOptions: q } = this._getSharedOptions(
            t,
            n
          ),
          O = this._getRotation(),
          P;
        for (P = 0; P < t; ++P) O += this._circumference(P, a);
        for (P = t; P < t + i; ++P) {
          let w = this._circumference(P, a),
            C = e[P],
            k = {
              x: d + this.offsetX,
              y: c + this.offsetY,
              startAngle: O,
              endAngle: O + w,
              circumference: w,
              outerRadius: p,
              innerRadius: v,
            };
          q &&
            (k.options =
              m || this.resolveDataElementOptions(P, C.active ? "active" : n)),
            (O += w),
            this.updateElement(C, P, k, n);
        }
      }
      calculateTotal() {
        let e = this._cachedMeta,
          t = e.data,
          i = 0,
          n;
        for (n = 0; n < t.length; n++) {
          let a = e._parsed[n];
          a !== null &&
            !isNaN(a) &&
            this.chart.getDataVisibility(n) &&
            !t[n].hidden &&
            (i += Math.abs(a));
        }
        return i;
      }
      calculateCircumference(e) {
        let t = this._cachedMeta.total;
        return t > 0 && !isNaN(e) ? f.TAU * (Math.abs(e) / t) : 0;
      }
      getLabelAndValue(e) {
        let t = this._cachedMeta,
          i = this.chart,
          n = i.data.labels || [],
          a = f.formatNumber(t._parsed[e], i.options.locale);
        return { label: n[e] || "", value: a };
      }
      getMaxBorderWidth(e) {
        let t = 0,
          i = this.chart,
          n,
          a,
          s,
          u,
          o;
        if (!e) {
          for (n = 0, a = i.data.datasets.length; n < a; ++n)
            if (i.isDatasetVisible(n)) {
              (s = i.getDatasetMeta(n)), (e = s.data), (u = s.controller);
              break;
            }
        }
        if (!e) return 0;
        for (n = 0, a = e.length; n < a; ++n)
          (o = u.resolveDataElementOptions(n)),
            o.borderAlign !== "inner" &&
              (t = Math.max(t, o.borderWidth || 0, o.hoverBorderWidth || 0));
        return t;
      }
      getMaxOffset(e) {
        let t = 0;
        for (let i = 0, n = e.length; i < n; ++i) {
          let a = this.resolveDataElementOptions(i);
          t = Math.max(t, a.offset || 0, a.hoverOffset || 0);
        }
        return t;
      }
      _getRingWeightOffset(e) {
        let t = 0;
        for (let i = 0; i < e; ++i)
          this.chart.isDatasetVisible(i) && (t += this._getRingWeight(i));
        return t;
      }
      _getRingWeight(e) {
        return Math.max(
          f.valueOrDefault(this.chart.data.datasets[e].weight, 1),
          0
        );
      }
      _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    };
    A($e, "id", "doughnut"),
      A($e, "defaults", {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !1 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "circumference",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "startAngle",
              "x",
              "y",
              "offset",
              "borderWidth",
              "spacing",
            ],
          },
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r",
      }),
      A($e, "descriptors", {
        _scriptable: (e) => e !== "spacing",
        _indexable: (e) =>
          e !== "spacing" &&
          !e.startsWith("borderDash") &&
          !e.startsWith("hoverBorderDash"),
      }),
      A($e, "overrides", {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(e) {
                let t = e.data;
                if (t.labels.length && t.datasets.length) {
                  let {
                    labels: { pointStyle: i, color: n },
                  } = e.legend.options;
                  return t.labels.map((a, s) => {
                    let o = e.getDatasetMeta(0).controller.getStyle(s);
                    return {
                      text: a,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      fontColor: n,
                      lineWidth: o.borderWidth,
                      pointStyle: i,
                      hidden: !e.getDataVisibility(s),
                      index: s,
                    };
                  });
                }
                return [];
              },
            },
            onClick(e, t, i) {
              i.chart.toggleDataVisibility(t.index), i.chart.update();
            },
          },
        },
      });
    var tr = class extends qe {
      initialize() {
        (this.enableOptionSharing = !0),
          (this.supportsDecimation = !0),
          super.initialize();
      }
      update(e) {
        let t = this._cachedMeta,
          { dataset: i, data: n = [], _dataset: a } = t,
          s = this.chart._animationsDisabled,
          { start: u, count: o } = f._getStartAndCountOfVisiblePoints(t, n, s);
        (this._drawStart = u),
          (this._drawCount = o),
          f._scaleRangesChanged(t) && ((u = 0), (o = n.length)),
          (i._chart = this.chart),
          (i._datasetIndex = this.index),
          (i._decimated = !!a._decimated),
          (i.points = n);
        let l = this.resolveDatasetElementOptions(e);
        this.options.showLine || (l.borderWidth = 0),
          (l.segment = this.options.segment),
          this.updateElement(i, void 0, { animated: !s, options: l }, e),
          this.updateElements(n, u, o, e);
      }
      updateElements(e, t, i, n) {
        let a = n === "reset",
          { iScale: s, vScale: u, _stacked: o, _dataset: l } = this._cachedMeta,
          { sharedOptions: d, includeOptions: c } = this._getSharedOptions(
            t,
            n
          ),
          h = s.axis,
          v = u.axis,
          { spanGaps: p, segment: m } = this.options,
          q = f.isNumber(p) ? p : Number.POSITIVE_INFINITY,
          O = this.chart._animationsDisabled || a || n === "none",
          P = t + i,
          w = e.length,
          C = t > 0 && this.getParsed(t - 1);
        for (let k = 0; k < w; ++k) {
          let R = e[k],
            I = O ? R : {};
          if (k < t || k >= P) {
            I.skip = !0;
            continue;
          }
          let j = this.getParsed(k),
            L = f.isNullOrUndef(j[v]),
            W = (I[h] = s.getPixelForValue(j[h], k)),
            H = (I[v] =
              a || L
                ? u.getBasePixel()
                : u.getPixelForValue(o ? this.applyStack(u, j, o) : j[v], k));
          (I.skip = isNaN(W) || isNaN(H) || L),
            (I.stop = k > 0 && Math.abs(j[h] - C[h]) > q),
            m && ((I.parsed = j), (I.raw = l.data[k])),
            c &&
              (I.options =
                d ||
                this.resolveDataElementOptions(k, R.active ? "active" : n)),
            O || this.updateElement(R, k, I, n),
            (C = j);
        }
      }
      getMaxOverflow() {
        let e = this._cachedMeta,
          t = e.dataset,
          i = (t.options && t.options.borderWidth) || 0,
          n = e.data || [];
        if (!n.length) return i;
        let a = n[0].size(this.resolveDataElementOptions(0)),
          s = n[n.length - 1].size(
            this.resolveDataElementOptions(n.length - 1)
          );
        return Math.max(i, a, s) / 2;
      }
      draw() {
        let e = this._cachedMeta;
        e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
          super.draw();
      }
    };
    A(tr, "id", "line"),
      A(tr, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1,
      }),
      A(tr, "overrides", {
        scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
      });
    var Tt = class extends qe {
      constructor(e, t) {
        super(e, t), (this.innerRadius = void 0), (this.outerRadius = void 0);
      }
      getLabelAndValue(e) {
        let t = this._cachedMeta,
          i = this.chart,
          n = i.data.labels || [],
          a = f.formatNumber(t._parsed[e].r, i.options.locale);
        return { label: n[e] || "", value: a };
      }
      parseObjectData(e, t, i, n) {
        return f._parseObjectDataRadialScale.bind(this)(e, t, i, n);
      }
      update(e) {
        let t = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(t, 0, t.length, e);
      }
      getMinMax() {
        let e = this._cachedMeta,
          t = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
        return (
          e.data.forEach((i, n) => {
            let a = this.getParsed(n).r;
            !isNaN(a) &&
              this.chart.getDataVisibility(n) &&
              (a < t.min && (t.min = a), a > t.max && (t.max = a));
          }),
          t
        );
      }
      _updateRadius() {
        let e = this.chart,
          t = e.chartArea,
          i = e.options,
          n = Math.min(t.right - t.left, t.bottom - t.top),
          a = Math.max(n / 2, 0),
          s = Math.max(
            i.cutoutPercentage ? (a / 100) * i.cutoutPercentage : 1,
            0
          ),
          u = (a - s) / e.getVisibleDatasetCount();
        (this.outerRadius = a - u * this.index),
          (this.innerRadius = this.outerRadius - u);
      }
      updateElements(e, t, i, n) {
        let a = n === "reset",
          s = this.chart,
          o = s.options.animation,
          l = this._cachedMeta.rScale,
          d = l.xCenter,
          c = l.yCenter,
          h = l.getIndexAngle(0) - 0.5 * f.PI,
          v = h,
          p,
          m = 360 / this.countVisibleElements();
        for (p = 0; p < t; ++p) v += this._computeAngle(p, n, m);
        for (p = t; p < t + i; p++) {
          let q = e[p],
            O = v,
            P = v + this._computeAngle(p, n, m),
            w = s.getDataVisibility(p)
              ? l.getDistanceFromCenterForValue(this.getParsed(p).r)
              : 0;
          (v = P),
            a && (o.animateScale && (w = 0), o.animateRotate && (O = P = h));
          let C = {
            x: d,
            y: c,
            innerRadius: 0,
            outerRadius: w,
            startAngle: O,
            endAngle: P,
            options: this.resolveDataElementOptions(p, q.active ? "active" : n),
          };
          this.updateElement(q, p, C, n);
        }
      }
      countVisibleElements() {
        let e = this._cachedMeta,
          t = 0;
        return (
          e.data.forEach((i, n) => {
            !isNaN(this.getParsed(n).r) &&
              this.chart.getDataVisibility(n) &&
              t++;
          }),
          t
        );
      }
      _computeAngle(e, t, i) {
        return this.chart.getDataVisibility(e)
          ? f.toRadians(this.resolveDataElementOptions(e, t).angle || i)
          : 0;
      }
    };
    A(Tt, "id", "polarArea"),
      A(Tt, "defaults", {
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !0 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "x",
              "y",
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
            ],
          },
        },
        indexAxis: "r",
        startAngle: 0,
      }),
      A(Tt, "overrides", {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(e) {
                let t = e.data;
                if (t.labels.length && t.datasets.length) {
                  let {
                    labels: { pointStyle: i, color: n },
                  } = e.legend.options;
                  return t.labels.map((a, s) => {
                    let o = e.getDatasetMeta(0).controller.getStyle(s);
                    return {
                      text: a,
                      fillStyle: o.backgroundColor,
                      strokeStyle: o.borderColor,
                      fontColor: n,
                      lineWidth: o.borderWidth,
                      pointStyle: i,
                      hidden: !e.getDataVisibility(s),
                      index: s,
                    };
                  });
                }
                return [];
              },
            },
            onClick(e, t, i) {
              i.chart.toggleDataVisibility(t.index), i.chart.update();
            },
          },
        },
        scales: {
          r: {
            type: "radialLinear",
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
          },
        },
      });
    var Xr = class extends $e {};
    A(Xr, "id", "pie"),
      A(Xr, "defaults", {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%",
      });
    var rr = class extends qe {
      getLabelAndValue(e) {
        let t = this._cachedMeta.vScale,
          i = this.getParsed(e);
        return {
          label: t.getLabels()[e],
          value: "" + t.getLabelForValue(i[t.axis]),
        };
      }
      parseObjectData(e, t, i, n) {
        return f._parseObjectDataRadialScale.bind(this)(e, t, i, n);
      }
      update(e) {
        let t = this._cachedMeta,
          i = t.dataset,
          n = t.data || [],
          a = t.iScale.getLabels();
        if (((i.points = n), e !== "resize")) {
          let s = this.resolveDatasetElementOptions(e);
          this.options.showLine || (s.borderWidth = 0);
          let u = { _loop: !0, _fullLoop: a.length === n.length, options: s };
          this.updateElement(i, void 0, u, e);
        }
        this.updateElements(n, 0, n.length, e);
      }
      updateElements(e, t, i, n) {
        let a = this._cachedMeta.rScale,
          s = n === "reset";
        for (let u = t; u < t + i; u++) {
          let o = e[u],
            l = this.resolveDataElementOptions(u, o.active ? "active" : n),
            d = a.getPointPositionForValue(u, this.getParsed(u).r),
            c = s ? a.xCenter : d.x,
            h = s ? a.yCenter : d.y,
            v = {
              x: c,
              y: h,
              angle: d.angle,
              skip: isNaN(c) || isNaN(h),
              options: l,
            };
          this.updateElement(o, u, v, n);
        }
      }
    };
    A(rr, "id", "radar"),
      A(rr, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: { line: { fill: "start" } },
      }),
      A(rr, "overrides", {
        aspectRatio: 1,
        scales: { r: { type: "radialLinear" } },
      });
    var ir = class extends qe {
      getLabelAndValue(e) {
        let t = this._cachedMeta,
          i = this.chart.data.labels || [],
          { xScale: n, yScale: a } = t,
          s = this.getParsed(e),
          u = n.getLabelForValue(s.x),
          o = a.getLabelForValue(s.y);
        return { label: i[e] || "", value: "(" + u + ", " + o + ")" };
      }
      update(e) {
        let t = this._cachedMeta,
          { data: i = [] } = t,
          n = this.chart._animationsDisabled,
          { start: a, count: s } = f._getStartAndCountOfVisiblePoints(t, i, n);
        if (
          ((this._drawStart = a),
          (this._drawCount = s),
          f._scaleRangesChanged(t) && ((a = 0), (s = i.length)),
          this.options.showLine)
        ) {
          this.datasetElementType || this.addElements();
          let { dataset: u, _dataset: o } = t;
          (u._chart = this.chart),
            (u._datasetIndex = this.index),
            (u._decimated = !!o._decimated),
            (u.points = i);
          let l = this.resolveDatasetElementOptions(e);
          (l.segment = this.options.segment),
            this.updateElement(u, void 0, { animated: !n, options: l }, e);
        } else
          this.datasetElementType &&
            (delete t.dataset, (this.datasetElementType = !1));
        this.updateElements(i, a, s, e);
      }
      addElements() {
        let { showLine: e } = this.options;
        !this.datasetElementType &&
          e &&
          (this.datasetElementType = this.chart.registry.getElement("line")),
          super.addElements();
      }
      updateElements(e, t, i, n) {
        let a = n === "reset",
          { iScale: s, vScale: u, _stacked: o, _dataset: l } = this._cachedMeta,
          d = this.resolveDataElementOptions(t, n),
          c = this.getSharedOptions(d),
          h = this.includeOptions(n, c),
          v = s.axis,
          p = u.axis,
          { spanGaps: m, segment: q } = this.options,
          O = f.isNumber(m) ? m : Number.POSITIVE_INFINITY,
          P = this.chart._animationsDisabled || a || n === "none",
          w = t > 0 && this.getParsed(t - 1);
        for (let C = t; C < t + i; ++C) {
          let k = e[C],
            R = this.getParsed(C),
            I = P ? k : {},
            j = f.isNullOrUndef(R[p]),
            L = (I[v] = s.getPixelForValue(R[v], C)),
            W = (I[p] =
              a || j
                ? u.getBasePixel()
                : u.getPixelForValue(o ? this.applyStack(u, R, o) : R[p], C));
          (I.skip = isNaN(L) || isNaN(W) || j),
            (I.stop = C > 0 && Math.abs(R[v] - w[v]) > O),
            q && ((I.parsed = R), (I.raw = l.data[C])),
            h &&
              (I.options =
                c ||
                this.resolveDataElementOptions(C, k.active ? "active" : n)),
            P || this.updateElement(k, C, I, n),
            (w = R);
        }
        this.updateSharedOptions(c, n, d);
      }
      getMaxOverflow() {
        let e = this._cachedMeta,
          t = e.data || [];
        if (!this.options.showLine) {
          let u = 0;
          for (let o = t.length - 1; o >= 0; --o)
            u = Math.max(u, t[o].size(this.resolveDataElementOptions(o)) / 2);
          return u > 0 && u;
        }
        let i = e.dataset,
          n = (i.options && i.options.borderWidth) || 0;
        if (!t.length) return n;
        let a = t[0].size(this.resolveDataElementOptions(0)),
          s = t[t.length - 1].size(
            this.resolveDataElementOptions(t.length - 1)
          );
        return Math.max(n, a, s) / 2;
      }
    };
    A(ir, "id", "scatter"),
      A(ir, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1,
      }),
      A(ir, "overrides", {
        interaction: { mode: "point" },
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      });
    var OT = Object.freeze({
      __proto__: null,
      BarController: Jt,
      BubbleController: er,
      DoughnutController: $e,
      LineController: tr,
      PieController: Xr,
      PolarAreaController: Tt,
      RadarController: rr,
      ScatterController: ir,
    });
    function Gt() {
      throw new Error(
        "This method is not implemented: Check that a complete date adapter is provided."
      );
    }
    var qn = class {
        constructor(e) {
          A(this, "options");
          this.options = e || {};
        }
        static override(e) {
          Object.assign(qn.prototype, e);
        }
        init() {}
        formats() {
          return Gt();
        }
        parse() {
          return Gt();
        }
        format() {
          return Gt();
        }
        add() {
          return Gt();
        }
        diff() {
          return Gt();
        }
        startOf() {
          return Gt();
        }
        endOf() {
          return Gt();
        }
      },
      PT = { _date: qn };
    function KJ(r, e, t, i) {
      let { controller: n, data: a, _sorted: s } = r,
        u = n._cachedMeta.iScale;
      if (u && e === u.axis && e !== "r" && s && a.length) {
        let o = u._reversePixels ? f._rlookupByKey : f._lookupByKey;
        if (i) {
          if (n._sharedOptions) {
            let l = a[0],
              d = typeof l.getRange == "function" && l.getRange(e);
            if (d) {
              let c = o(a, e, t - d),
                h = o(a, e, t + d);
              return { lo: c.lo, hi: h.hi };
            }
          }
        } else return o(a, e, t);
      }
      return { lo: 0, hi: a.length - 1 };
    }
    function wn(r, e, t, i, n) {
      let a = r.getSortedVisibleDatasetMetas(),
        s = t[e];
      for (let u = 0, o = a.length; u < o; ++u) {
        let { index: l, data: d } = a[u],
          { lo: c, hi: h } = KJ(a[u], e, s, n);
        for (let v = c; v <= h; ++v) {
          let p = d[v];
          p.skip || i(p, l, v);
        }
      }
    }
    function GJ(r) {
      let e = r.indexOf("x") !== -1,
        t = r.indexOf("y") !== -1;
      return function (i, n) {
        let a = e ? Math.abs(i.x - n.x) : 0,
          s = t ? Math.abs(i.y - n.y) : 0;
        return Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
      };
    }
    function rg(r, e, t, i, n) {
      let a = [];
      return (
        (!n && !r.isPointInArea(e)) ||
          wn(
            r,
            t,
            e,
            function (u, o, l) {
              (!n && !f._isPointInArea(u, r.chartArea, 0)) ||
                (u.inRange(e.x, e.y, i) &&
                  a.push({ element: u, datasetIndex: o, index: l }));
            },
            !0
          ),
        a
      );
    }
    function ZJ(r, e, t, i) {
      let n = [];
      function a(s, u, o) {
        let { startAngle: l, endAngle: d } = s.getProps(
            ["startAngle", "endAngle"],
            i
          ),
          { angle: c } = f.getAngleFromPoint(s, { x: e.x, y: e.y });
        f._angleBetween(c, l, d) &&
          n.push({ element: s, datasetIndex: u, index: o });
      }
      return wn(r, t, e, a), n;
    }
    function JJ(r, e, t, i, n, a) {
      let s = [],
        u = GJ(t),
        o = Number.POSITIVE_INFINITY;
      function l(d, c, h) {
        let v = d.inRange(e.x, e.y, n);
        if (i && !v) return;
        let p = d.getCenterPoint(n);
        if (!(!!a || r.isPointInArea(p)) && !v) return;
        let q = u(e, p);
        q < o
          ? ((s = [{ element: d, datasetIndex: c, index: h }]), (o = q))
          : q === o && s.push({ element: d, datasetIndex: c, index: h });
      }
      return wn(r, t, e, l), s;
    }
    function ig(r, e, t, i, n, a) {
      return !a && !r.isPointInArea(e)
        ? []
        : t === "r" && !i
        ? ZJ(r, e, t, n)
        : JJ(r, e, t, i, n, a);
    }
    function C2(r, e, t, i, n) {
      let a = [],
        s = t === "x" ? "inXRange" : "inYRange",
        u = !1;
      return (
        wn(r, t, e, (o, l, d) => {
          o[s](e[t], n) &&
            (a.push({ element: o, datasetIndex: l, index: d }),
            (u = u || o.inRange(e.x, e.y, n)));
        }),
        i && !u ? [] : a
      );
    }
    var MT = {
        evaluateInteractionItems: wn,
        modes: {
          index(r, e, t, i) {
            let n = f.getRelativePosition(e, r),
              a = t.axis || "x",
              s = t.includeInvisible || !1,
              u = t.intersect ? rg(r, n, a, i, s) : ig(r, n, a, !1, i, s),
              o = [];
            return u.length
              ? (r.getSortedVisibleDatasetMetas().forEach((l) => {
                  let d = u[0].index,
                    c = l.data[d];
                  c &&
                    !c.skip &&
                    o.push({ element: c, datasetIndex: l.index, index: d });
                }),
                o)
              : [];
          },
          dataset(r, e, t, i) {
            let n = f.getRelativePosition(e, r),
              a = t.axis || "xy",
              s = t.includeInvisible || !1,
              u = t.intersect ? rg(r, n, a, i, s) : ig(r, n, a, !1, i, s);
            if (u.length > 0) {
              let o = u[0].datasetIndex,
                l = r.getDatasetMeta(o).data;
              u = [];
              for (let d = 0; d < l.length; ++d)
                u.push({ element: l[d], datasetIndex: o, index: d });
            }
            return u;
          },
          point(r, e, t, i) {
            let n = f.getRelativePosition(e, r),
              a = t.axis || "xy",
              s = t.includeInvisible || !1;
            return rg(r, n, a, i, s);
          },
          nearest(r, e, t, i) {
            let n = f.getRelativePosition(e, r),
              a = t.axis || "xy",
              s = t.includeInvisible || !1;
            return ig(r, n, a, t.intersect, i, s);
          },
          x(r, e, t, i) {
            let n = f.getRelativePosition(e, r);
            return C2(r, n, "x", t.intersect, i);
          },
          y(r, e, t, i) {
            let n = f.getRelativePosition(e, r);
            return C2(r, n, "y", t.intersect, i);
          },
        },
      },
      DT = ["left", "top", "right", "bottom"];
    function vn(r, e) {
      return r.filter((t) => t.pos === e);
    }
    function R2(r, e) {
      return r.filter((t) => DT.indexOf(t.pos) === -1 && t.box.axis === e);
    }
    function gn(r, e) {
      return r.sort((t, i) => {
        let n = e ? i : t,
          a = e ? t : i;
        return n.weight === a.weight ? n.index - a.index : n.weight - a.weight;
      });
    }
    function eee(r) {
      let e = [],
        t,
        i,
        n,
        a,
        s,
        u;
      for (t = 0, i = (r || []).length; t < i; ++t)
        (n = r[t]),
          ({
            position: a,
            options: { stack: s, stackWeight: u = 1 },
          } = n),
          e.push({
            index: t,
            box: n,
            pos: a,
            horizontal: n.isHorizontal(),
            weight: n.weight,
            stack: s && a + s,
            stackWeight: u,
          });
      return e;
    }
    function tee(r) {
      let e = {};
      for (let t of r) {
        let { stack: i, pos: n, stackWeight: a } = t;
        if (!i || !DT.includes(n)) continue;
        let s = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
        s.count++, (s.weight += a);
      }
      return e;
    }
    function ree(r, e) {
      let t = tee(r),
        { vBoxMaxWidth: i, hBoxMaxHeight: n } = e,
        a,
        s,
        u;
      for (a = 0, s = r.length; a < s; ++a) {
        u = r[a];
        let { fullSize: o } = u.box,
          l = t[u.stack],
          d = l && u.stackWeight / l.weight;
        u.horizontal
          ? ((u.width = d ? d * i : o && e.availableWidth), (u.height = n))
          : ((u.width = i), (u.height = d ? d * n : o && e.availableHeight));
      }
      return t;
    }
    function iee(r) {
      let e = eee(r),
        t = gn(
          e.filter((l) => l.box.fullSize),
          !0
        ),
        i = gn(vn(e, "left"), !0),
        n = gn(vn(e, "right")),
        a = gn(vn(e, "top"), !0),
        s = gn(vn(e, "bottom")),
        u = R2(e, "x"),
        o = R2(e, "y");
      return {
        fullSize: t,
        leftAndTop: i.concat(a),
        rightAndBottom: n.concat(o).concat(s).concat(u),
        chartArea: vn(e, "chartArea"),
        vertical: i.concat(n).concat(o),
        horizontal: a.concat(s).concat(u),
      };
    }
    function I2(r, e, t, i) {
      return Math.max(r[t], e[t]) + Math.max(r[i], e[i]);
    }
    function wT(r, e) {
      (r.top = Math.max(r.top, e.top)),
        (r.left = Math.max(r.left, e.left)),
        (r.bottom = Math.max(r.bottom, e.bottom)),
        (r.right = Math.max(r.right, e.right));
    }
    function nee(r, e, t, i) {
      let { pos: n, box: a } = t,
        s = r.maxPadding;
      if (!f.isObject(n)) {
        t.size && (r[n] -= t.size);
        let c = i[t.stack] || { size: 0, count: 1 };
        (c.size = Math.max(c.size, t.horizontal ? a.height : a.width)),
          (t.size = c.size / c.count),
          (r[n] += t.size);
      }
      a.getPadding && wT(s, a.getPadding());
      let u = Math.max(0, e.outerWidth - I2(s, r, "left", "right")),
        o = Math.max(0, e.outerHeight - I2(s, r, "top", "bottom")),
        l = u !== r.w,
        d = o !== r.h;
      return (
        (r.w = u),
        (r.h = o),
        t.horizontal ? { same: l, other: d } : { same: d, other: l }
      );
    }
    function aee(r) {
      let e = r.maxPadding;
      function t(i) {
        let n = Math.max(e[i] - r[i], 0);
        return (r[i] += n), n;
      }
      (r.y += t("top")), (r.x += t("left")), t("right"), t("bottom");
    }
    function see(r, e) {
      let t = e.maxPadding;
      function i(n) {
        let a = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
          n.forEach((s) => {
            a[s] = Math.max(e[s], t[s]);
          }),
          a
        );
      }
      return i(r ? ["left", "right"] : ["top", "bottom"]);
    }
    function mn(r, e, t, i) {
      let n = [],
        a,
        s,
        u,
        o,
        l,
        d;
      for (a = 0, s = r.length, l = 0; a < s; ++a) {
        (u = r[a]),
          (o = u.box),
          o.update(u.width || e.w, u.height || e.h, see(u.horizontal, e));
        let { same: c, other: h } = nee(e, t, u, i);
        (l |= c && n.length), (d = d || h), o.fullSize || n.push(u);
      }
      return (l && mn(n, e, t, i)) || d;
    }
    function Pf(r, e, t, i, n) {
      (r.top = t),
        (r.left = e),
        (r.right = e + i),
        (r.bottom = t + n),
        (r.width = i),
        (r.height = n);
    }
    function j2(r, e, t, i) {
      let n = t.padding,
        { x: a, y: s } = e;
      for (let u of r) {
        let o = u.box,
          l = i[u.stack] || { count: 1, placed: 0, weight: 1 },
          d = u.stackWeight / l.weight || 1;
        if (u.horizontal) {
          let c = e.w * d,
            h = l.size || o.height;
          f.defined(l.start) && (s = l.start),
            o.fullSize
              ? Pf(o, n.left, s, t.outerWidth - n.right - n.left, h)
              : Pf(o, e.left + l.placed, s, c, h),
            (l.start = s),
            (l.placed += c),
            (s = o.bottom);
        } else {
          let c = e.h * d,
            h = l.size || o.width;
          f.defined(l.start) && (a = l.start),
            o.fullSize
              ? Pf(o, a, n.top, h, t.outerHeight - n.bottom - n.top)
              : Pf(o, a, e.top + l.placed, h, c),
            (l.start = a),
            (l.placed += c),
            (a = o.right);
        }
      }
      (e.x = a), (e.y = s);
    }
    var he = {
        addBox(r, e) {
          r.boxes || (r.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || "top"),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            r.boxes.push(e);
        },
        removeBox(r, e) {
          let t = r.boxes ? r.boxes.indexOf(e) : -1;
          t !== -1 && r.boxes.splice(t, 1);
        },
        configure(r, e, t) {
          (e.fullSize = t.fullSize),
            (e.position = t.position),
            (e.weight = t.weight);
        },
        update(r, e, t, i) {
          if (!r) return;
          let n = f.toPadding(r.options.layout.padding),
            a = Math.max(e - n.width, 0),
            s = Math.max(t - n.height, 0),
            u = iee(r.boxes),
            o = u.vertical,
            l = u.horizontal;
          f.each(r.boxes, (m) => {
            typeof m.beforeLayout == "function" && m.beforeLayout();
          });
          let d =
              o.reduce(
                (m, q) =>
                  q.box.options && q.box.options.display === !1 ? m : m + 1,
                0
              ) || 1,
            c = Object.freeze({
              outerWidth: e,
              outerHeight: t,
              padding: n,
              availableWidth: a,
              availableHeight: s,
              vBoxMaxWidth: a / 2 / d,
              hBoxMaxHeight: s / 2,
            }),
            h = Object.assign({}, n);
          wT(h, f.toPadding(i));
          let v = Object.assign(
              { maxPadding: h, w: a, h: s, x: n.left, y: n.top },
              n
            ),
            p = ree(o.concat(l), c);
          mn(u.fullSize, v, c, p),
            mn(o, v, c, p),
            mn(l, v, c, p) && mn(o, v, c, p),
            aee(v),
            j2(u.leftAndTop, v, c, p),
            (v.x += v.w),
            (v.y += v.h),
            j2(u.rightAndBottom, v, c, p),
            (r.chartArea = {
              left: v.left,
              top: v.top,
              right: v.left + v.w,
              bottom: v.top + v.h,
              height: v.h,
              width: v.w,
            }),
            f.each(u.chartArea, (m) => {
              let q = m.box;
              Object.assign(q, r.chartArea),
                q.update(v.w, v.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      },
      On = class {
        acquireContext(e, t) {}
        releaseContext(e) {
          return !1;
        }
        addEventListener(e, t, i) {}
        removeEventListener(e, t, i) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(e, t, i, n) {
          return (
            (t = Math.max(0, t || e.width)),
            (i = i || e.height),
            { width: t, height: Math.max(0, n ? Math.floor(t / n) : i) }
          );
        }
        isAttached(e) {
          return !0;
        }
        updateConfig(e) {}
      },
      If = class extends On {
        acquireContext(e) {
          return (e && e.getContext && e.getContext("2d")) || null;
        }
        updateConfig(e) {
          e.options.animation = !1;
        }
      },
      Sf = "$chartjs",
      uee = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout",
      },
      A2 = (r) => r === null || r === "";
    function oee(r, e) {
      let t = r.style,
        i = r.getAttribute("height"),
        n = r.getAttribute("width");
      if (
        ((r[Sf] = {
          initial: {
            height: i,
            width: n,
            style: { display: t.display, height: t.height, width: t.width },
          },
        }),
        (t.display = t.display || "block"),
        (t.boxSizing = t.boxSizing || "border-box"),
        A2(n))
      ) {
        let a = f.readUsedSize(r, "width");
        a !== void 0 && (r.width = a);
      }
      if (A2(i))
        if (r.style.height === "") r.height = r.width / (e || 2);
        else {
          let a = f.readUsedSize(r, "height");
          a !== void 0 && (r.height = a);
        }
      return r;
    }
    var TT = f.supportsEventListenerOptions ? { passive: !0 } : !1;
    function lee(r, e, t) {
      r.addEventListener(e, t, TT);
    }
    function dee(r, e, t) {
      r.canvas.removeEventListener(e, t, TT);
    }
    function fee(r, e) {
      let t = uee[r.type] || r.type,
        { x: i, y: n } = f.getRelativePosition(r, e);
      return {
        type: t,
        chart: e,
        native: r,
        x: i !== void 0 ? i : null,
        y: n !== void 0 ? n : null,
      };
    }
    function jf(r, e) {
      for (let t of r) if (t === e || t.contains(e)) return !0;
    }
    function cee(r, e, t) {
      let i = r.canvas,
        n = new MutationObserver((a) => {
          let s = !1;
          for (let u of a)
            (s = s || jf(u.addedNodes, i)), (s = s && !jf(u.removedNodes, i));
          s && t();
        });
      return n.observe(document, { childList: !0, subtree: !0 }), n;
    }
    function hee(r, e, t) {
      let i = r.canvas,
        n = new MutationObserver((a) => {
          let s = !1;
          for (let u of a)
            (s = s || jf(u.removedNodes, i)), (s = s && !jf(u.addedNodes, i));
          s && t();
        });
      return n.observe(document, { childList: !0, subtree: !0 }), n;
    }
    var Pn = new Map(),
      E2 = 0;
    function kT() {
      let r = window.devicePixelRatio;
      r !== E2 &&
        ((E2 = r),
        Pn.forEach((e, t) => {
          t.currentDevicePixelRatio !== r && e();
        }));
    }
    function vee(r, e) {
      Pn.size || window.addEventListener("resize", kT), Pn.set(r, e);
    }
    function gee(r) {
      Pn.delete(r), Pn.size || window.removeEventListener("resize", kT);
    }
    function pee(r, e, t) {
      let i = r.canvas,
        n = i && f._getParentNode(i);
      if (!n) return;
      let a = f.throttled((u, o) => {
          let l = n.clientWidth;
          t(u, o), l < n.clientWidth && t();
        }, window),
        s = new ResizeObserver((u) => {
          let o = u[0],
            l = o.contentRect.width,
            d = o.contentRect.height;
          (l === 0 && d === 0) || a(l, d);
        });
      return s.observe(n), vee(r, a), s;
    }
    function ng(r, e, t) {
      t && t.disconnect(), e === "resize" && gee(r);
    }
    function _ee(r, e, t) {
      let i = r.canvas,
        n = f.throttled((a) => {
          r.ctx !== null && t(fee(a, r));
        }, r);
      return lee(i, e, n), n;
    }
    var Af = class extends On {
      acquireContext(e, t) {
        let i = e && e.getContext && e.getContext("2d");
        return i && i.canvas === e ? (oee(e, t), i) : null;
      }
      releaseContext(e) {
        let t = e.canvas;
        if (!t[Sf]) return !1;
        let i = t[Sf].initial;
        ["height", "width"].forEach((a) => {
          let s = i[a];
          f.isNullOrUndef(s) ? t.removeAttribute(a) : t.setAttribute(a, s);
        });
        let n = i.style || {};
        return (
          Object.keys(n).forEach((a) => {
            t.style[a] = n[a];
          }),
          (t.width = t.width),
          delete t[Sf],
          !0
        );
      }
      addEventListener(e, t, i) {
        this.removeEventListener(e, t);
        let n = e.$proxies || (e.$proxies = {}),
          s = { attach: cee, detach: hee, resize: pee }[t] || _ee;
        n[t] = s(e, t, i);
      }
      removeEventListener(e, t) {
        let i = e.$proxies || (e.$proxies = {}),
          n = i[t];
        if (!n) return;
        (({ attach: ng, detach: ng, resize: ng })[t] || dee)(e, t, n),
          (i[t] = void 0);
      }
      getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
      getMaximumSize(e, t, i, n) {
        return f.getMaximumSize(e, t, i, n);
      }
      isAttached(e) {
        let t = f._getParentNode(e);
        return !!(t && t.isConnected);
      }
    };
    function ST(r) {
      return !f._isDomSupported() ||
        (typeof OffscreenCanvas != "undefined" && r instanceof OffscreenCanvas)
        ? If
        : Af;
    }
    var Pe = class {
      constructor() {
        A(this, "x");
        A(this, "y");
        A(this, "active", !1);
        A(this, "options");
        A(this, "$animations");
      }
      tooltipPosition(e) {
        let { x: t, y: i } = this.getProps(["x", "y"], e);
        return { x: t, y: i };
      }
      hasValue() {
        return f.isNumber(this.x) && f.isNumber(this.y);
      }
      getProps(e, t) {
        let i = this.$animations;
        if (!t || !i) return this;
        let n = {};
        return (
          e.forEach((a) => {
            n[a] = i[a] && i[a].active() ? i[a]._to : this[a];
          }),
          n
        );
      }
    };
    A(Pe, "defaults", {}), A(Pe, "defaultRoutes");
    function mee(r, e) {
      let t = r.options.ticks,
        i = bee(r),
        n = Math.min(t.maxTicksLimit || i, i),
        a = t.major.enabled ? yee(e) : [],
        s = a.length,
        u = a[0],
        o = a[s - 1],
        l = [];
      if (s > n) return qee(e, l, a, s / n), l;
      let d = xee(a, e, n);
      if (s > 0) {
        let c,
          h,
          v = s > 1 ? Math.round((o - u) / (s - 1)) : null;
        for (
          Mf(e, l, d, f.isNullOrUndef(v) ? 0 : u - v, u), c = 0, h = s - 1;
          c < h;
          c++
        )
          Mf(e, l, d, a[c], a[c + 1]);
        return Mf(e, l, d, o, f.isNullOrUndef(v) ? e.length : o + v), l;
      }
      return Mf(e, l, d), l;
    }
    function bee(r) {
      let e = r.options.offset,
        t = r._tickSize(),
        i = r._length / t + (e ? 0 : 1),
        n = r._maxLength / t;
      return Math.floor(Math.min(i, n));
    }
    function xee(r, e, t) {
      let i = Oee(r),
        n = e.length / t;
      if (!i) return Math.max(n, 1);
      let a = f._factorize(i);
      for (let s = 0, u = a.length - 1; s < u; s++) {
        let o = a[s];
        if (o > n) return o;
      }
      return Math.max(n, 1);
    }
    function yee(r) {
      let e = [],
        t,
        i;
      for (t = 0, i = r.length; t < i; t++) r[t].major && e.push(t);
      return e;
    }
    function qee(r, e, t, i) {
      let n = 0,
        a = t[0],
        s;
      for (i = Math.ceil(i), s = 0; s < r.length; s++)
        s === a && (e.push(r[s]), n++, (a = t[n * i]));
    }
    function Mf(r, e, t, i, n) {
      let a = f.valueOrDefault(i, 0),
        s = Math.min(f.valueOrDefault(n, r.length), r.length),
        u = 0,
        o,
        l,
        d;
      for (
        t = Math.ceil(t),
          n && ((o = n - i), (t = o / Math.floor(o / t))),
          d = a;
        d < 0;

      )
        u++, (d = Math.round(a + u * t));
      for (l = Math.max(a, 0); l < s; l++)
        l === d && (e.push(r[l]), u++, (d = Math.round(a + u * t)));
    }
    function Oee(r) {
      let e = r.length,
        t,
        i;
      if (e < 2) return !1;
      for (i = r[0], t = 1; t < e; ++t) if (r[t] - r[t - 1] !== i) return !1;
      return i;
    }
    var Pee = (r) => (r === "left" ? "right" : r === "right" ? "left" : r),
      N2 = (r, e, t) => (e === "top" || e === "left" ? r[e] + t : r[e] - t),
      L2 = (r, e) => Math.min(e || r, r);
    function F2(r, e) {
      let t = [],
        i = r.length / e,
        n = r.length,
        a = 0;
      for (; a < n; a += i) t.push(r[Math.floor(a)]);
      return t;
    }
    function Mee(r, e, t) {
      let i = r.ticks.length,
        n = Math.min(e, i - 1),
        a = r._startPixel,
        s = r._endPixel,
        u = 1e-6,
        o = r.getPixelForTick(n),
        l;
      if (
        !(
          t &&
          (i === 1
            ? (l = Math.max(o - a, s - o))
            : e === 0
            ? (l = (r.getPixelForTick(1) - o) / 2)
            : (l = (o - r.getPixelForTick(n - 1)) / 2),
          (o += n < e ? l : -l),
          o < a - u || o > s + u)
        )
      )
        return o;
    }
    function Dee(r, e) {
      f.each(r, (t) => {
        let i = t.gc,
          n = i.length / 2,
          a;
        if (n > e) {
          for (a = 0; a < n; ++a) delete t.data[i[a]];
          i.splice(0, n);
        }
      });
    }
    function pn(r) {
      return r.drawTicks ? r.tickLength : 0;
    }
    function W2(r, e) {
      if (!r.display) return 0;
      let t = f.toFont(r.font, e),
        i = f.toPadding(r.padding);
      return (f.isArray(r.text) ? r.text.length : 1) * t.lineHeight + i.height;
    }
    function wee(r, e) {
      return f.createContext(r, { scale: e, type: "scale" });
    }
    function Tee(r, e, t) {
      return f.createContext(r, { tick: t, index: e, type: "tick" });
    }
    function kee(r, e, t) {
      let i = f._toLeftRightCenter(r);
      return ((t && e !== "right") || (!t && e === "right")) && (i = Pee(i)), i;
    }
    function See(r, e, t, i) {
      let { top: n, left: a, bottom: s, right: u, chart: o } = r,
        { chartArea: l, scales: d } = o,
        c = 0,
        h,
        v,
        p,
        m = s - n,
        q = u - a;
      if (r.isHorizontal()) {
        if (((v = f._alignStartEnd(i, a, u)), f.isObject(t))) {
          let O = Object.keys(t)[0],
            P = t[O];
          p = d[O].getPixelForValue(P) + m - e;
        } else
          t === "center"
            ? (p = (l.bottom + l.top) / 2 + m - e)
            : (p = N2(r, t, e));
        h = u - a;
      } else {
        if (f.isObject(t)) {
          let O = Object.keys(t)[0],
            P = t[O];
          v = d[O].getPixelForValue(P) - q + e;
        } else
          t === "center"
            ? (v = (l.left + l.right) / 2 - q + e)
            : (v = N2(r, t, e));
        (p = f._alignStartEnd(i, s, n)),
          (c = t === "left" ? -f.HALF_PI : f.HALF_PI);
      }
      return { titleX: v, titleY: p, maxWidth: h, rotation: c };
    }
    var Qe = class extends Pe {
        constructor(e) {
          super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.options = void 0),
            (this.ctx = e.ctx),
            (this.chart = e.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(e) {
          (this.options = e.setContext(this.getContext())),
            (this.axis = e.axis),
            (this._userMin = this.parse(e.min)),
            (this._userMax = this.parse(e.max)),
            (this._suggestedMin = this.parse(e.suggestedMin)),
            (this._suggestedMax = this.parse(e.suggestedMax));
        }
        parse(e, t) {
          return e;
        }
        getUserBounds() {
          let {
            _userMin: e,
            _userMax: t,
            _suggestedMin: i,
            _suggestedMax: n,
          } = this;
          return (
            (e = f.finiteOrDefault(e, Number.POSITIVE_INFINITY)),
            (t = f.finiteOrDefault(t, Number.NEGATIVE_INFINITY)),
            (i = f.finiteOrDefault(i, Number.POSITIVE_INFINITY)),
            (n = f.finiteOrDefault(n, Number.NEGATIVE_INFINITY)),
            {
              min: f.finiteOrDefault(e, i),
              max: f.finiteOrDefault(t, n),
              minDefined: f.isNumberFinite(e),
              maxDefined: f.isNumberFinite(t),
            }
          );
        }
        getMinMax(e) {
          let {
              min: t,
              max: i,
              minDefined: n,
              maxDefined: a,
            } = this.getUserBounds(),
            s;
          if (n && a) return { min: t, max: i };
          let u = this.getMatchingVisibleMetas();
          for (let o = 0, l = u.length; o < l; ++o)
            (s = u[o].controller.getMinMax(this, e)),
              n || (t = Math.min(t, s.min)),
              a || (i = Math.max(i, s.max));
          return (
            (t = a && t > i ? i : t),
            (i = n && t > i ? t : i),
            {
              min: f.finiteOrDefault(t, f.finiteOrDefault(i, t)),
              max: f.finiteOrDefault(i, f.finiteOrDefault(t, i)),
            }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          let e = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? e.xLabels : e.yLabels) ||
            e.labels ||
            []
          );
        }
        getLabelItems(e = this.chart.chartArea) {
          return (
            this._labelItems || (this._labelItems = this._computeLabelItems(e))
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          f.callback(this.options.beforeUpdate, [this]);
        }
        update(e, t, i) {
          let { beginAtZero: n, grace: a, ticks: s } = this.options,
            u = s.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = e),
            (this.maxHeight = t),
            (this._margins = i =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = f._addGrace(this, a, n)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          let o = u < this.ticks.length;
          this._convertTicksToLabels(o ? F2(this.ticks, u) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            s.display &&
              (s.autoSkip || s.source === "auto") &&
              ((this.ticks = mee(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            o && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let e = this.options.reverse,
            t,
            i;
          this.isHorizontal()
            ? ((t = this.left), (i = this.right))
            : ((t = this.top), (i = this.bottom), (e = !e)),
            (this._startPixel = t),
            (this._endPixel = i),
            (this._reversePixels = e),
            (this._length = i - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          f.callback(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          f.callback(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          f.callback(this.options.afterSetDimensions, [this]);
        }
        _callHooks(e) {
          this.chart.notifyPlugins(e, this.getContext()),
            f.callback(this.options[e], [this]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          f.callback(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(e) {
          let t = this.options.ticks,
            i,
            n,
            a;
          for (i = 0, n = e.length; i < n; i++)
            (a = e[i]),
              (a.label = f.callback(t.callback, [a.value, i, e], this));
        }
        afterTickToLabelConversion() {
          f.callback(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          f.callback(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          let e = this.options,
            t = e.ticks,
            i = L2(this.ticks.length, e.ticks.maxTicksLimit),
            n = t.minRotation || 0,
            a = t.maxRotation,
            s = n,
            u,
            o,
            l;
          if (
            !this._isVisible() ||
            !t.display ||
            n >= a ||
            i <= 1 ||
            !this.isHorizontal()
          ) {
            this.labelRotation = n;
            return;
          }
          let d = this._getLabelSizes(),
            c = d.widest.width,
            h = d.highest.height,
            v = f._limitValue(this.chart.width - c, 0, this.maxWidth);
          (u = e.offset ? this.maxWidth / i : v / (i - 1)),
            c + 6 > u &&
              ((u = v / (i - (e.offset ? 0.5 : 1))),
              (o =
                this.maxHeight -
                pn(e.grid) -
                t.padding -
                W2(e.title, this.chart.options.font)),
              (l = Math.sqrt(c * c + h * h)),
              (s = f.toDegrees(
                Math.min(
                  Math.asin(f._limitValue((d.highest.height + 6) / u, -1, 1)),
                  Math.asin(f._limitValue(o / l, -1, 1)) -
                    Math.asin(f._limitValue(h / l, -1, 1))
                )
              )),
              (s = Math.max(n, Math.min(a, s)))),
            (this.labelRotation = s);
        }
        afterCalculateLabelRotation() {
          f.callback(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
          f.callback(this.options.beforeFit, [this]);
        }
        fit() {
          let e = { width: 0, height: 0 },
            {
              chart: t,
              options: { ticks: i, title: n, grid: a },
            } = this,
            s = this._isVisible(),
            u = this.isHorizontal();
          if (s) {
            let o = W2(n, t.options.font);
            if (
              (u
                ? ((e.width = this.maxWidth), (e.height = pn(a) + o))
                : ((e.height = this.maxHeight), (e.width = pn(a) + o)),
              i.display && this.ticks.length)
            ) {
              let {
                  first: l,
                  last: d,
                  widest: c,
                  highest: h,
                } = this._getLabelSizes(),
                v = i.padding * 2,
                p = f.toRadians(this.labelRotation),
                m = Math.cos(p),
                q = Math.sin(p);
              if (u) {
                let O = i.mirror ? 0 : q * c.width + m * h.height;
                e.height = Math.min(this.maxHeight, e.height + O + v);
              } else {
                let O = i.mirror ? 0 : m * c.width + q * h.height;
                e.width = Math.min(this.maxWidth, e.width + O + v);
              }
              this._calculatePadding(l, d, q, m);
            }
          }
          this._handleMargins(),
            u
              ? ((this.width = this._length =
                  t.width - this._margins.left - this._margins.right),
                (this.height = e.height))
              : ((this.width = e.width),
                (this.height = this._length =
                  t.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(e, t, i, n) {
          let {
              ticks: { align: a, padding: s },
              position: u,
            } = this.options,
            o = this.labelRotation !== 0,
            l = u !== "top" && this.axis === "x";
          if (this.isHorizontal()) {
            let d = this.getPixelForTick(0) - this.left,
              c = this.right - this.getPixelForTick(this.ticks.length - 1),
              h = 0,
              v = 0;
            o
              ? l
                ? ((h = n * e.width), (v = i * t.height))
                : ((h = i * e.height), (v = n * t.width))
              : a === "start"
              ? (v = t.width)
              : a === "end"
              ? (h = e.width)
              : a !== "inner" && ((h = e.width / 2), (v = t.width / 2)),
              (this.paddingLeft = Math.max(
                ((h - d + s) * this.width) / (this.width - d),
                0
              )),
              (this.paddingRight = Math.max(
                ((v - c + s) * this.width) / (this.width - c),
                0
              ));
          } else {
            let d = t.height / 2,
              c = e.height / 2;
            a === "start"
              ? ((d = 0), (c = e.height))
              : a === "end" && ((d = t.height), (c = 0)),
              (this.paddingTop = d + s),
              (this.paddingBottom = c + s);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(
              this.paddingLeft,
              this._margins.left
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
              this.paddingRight,
              this._margins.right
            )),
            (this._margins.bottom = Math.max(
              this.paddingBottom,
              this._margins.bottom
            )));
        }
        afterFit() {
          f.callback(this.options.afterFit, [this]);
        }
        isHorizontal() {
          let { axis: e, position: t } = this.options;
          return t === "top" || t === "bottom" || e === "x";
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(e) {
          this.beforeTickToLabelConversion(), this.generateTickLabels(e);
          let t, i;
          for (t = 0, i = e.length; t < i; t++)
            f.isNullOrUndef(e[t].label) && (e.splice(t, 1), i--, t--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let e = this._labelSizes;
          if (!e) {
            let t = this.options.ticks.sampleSize,
              i = this.ticks;
            t < i.length && (i = F2(i, t)),
              (this._labelSizes = e =
                this._computeLabelSizes(
                  i,
                  i.length,
                  this.options.ticks.maxTicksLimit
                ));
          }
          return e;
        }
        _computeLabelSizes(e, t, i) {
          let { ctx: n, _longestTextCache: a } = this,
            s = [],
            u = [],
            o = Math.floor(t / L2(t, i)),
            l = 0,
            d = 0,
            c,
            h,
            v,
            p,
            m,
            q,
            O,
            P,
            w,
            C,
            k;
          for (c = 0; c < t; c += o) {
            if (
              ((p = e[c].label),
              (m = this._resolveTickFontOptions(c)),
              (n.font = q = m.string),
              (O = a[q] = a[q] || { data: {}, gc: [] }),
              (P = m.lineHeight),
              (w = C = 0),
              !f.isNullOrUndef(p) && !f.isArray(p))
            )
              (w = f._measureText(n, O.data, O.gc, w, p)), (C = P);
            else if (f.isArray(p))
              for (h = 0, v = p.length; h < v; ++h)
                (k = p[h]),
                  !f.isNullOrUndef(k) &&
                    !f.isArray(k) &&
                    ((w = f._measureText(n, O.data, O.gc, w, k)), (C += P));
            s.push(w), u.push(C), (l = Math.max(w, l)), (d = Math.max(C, d));
          }
          Dee(a, t);
          let R = s.indexOf(l),
            I = u.indexOf(d),
            j = (L) => ({ width: s[L] || 0, height: u[L] || 0 });
          return {
            first: j(0),
            last: j(t - 1),
            widest: j(R),
            highest: j(I),
            widths: s,
            heights: u,
          };
        }
        getLabelForValue(e) {
          return e;
        }
        getPixelForValue(e, t) {
          return NaN;
        }
        getValueForPixel(e) {}
        getPixelForTick(e) {
          let t = this.ticks;
          return e < 0 || e > t.length - 1
            ? null
            : this.getPixelForValue(t[e].value);
        }
        getPixelForDecimal(e) {
          this._reversePixels && (e = 1 - e);
          let t = this._startPixel + e * this._length;
          return f._int16Range(
            this._alignToPixels ? f._alignPixel(this.chart, t, 0) : t
          );
        }
        getDecimalForPixel(e) {
          let t = (e - this._startPixel) / this._length;
          return this._reversePixels ? 1 - t : t;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          let { min: e, max: t } = this;
          return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
        }
        getContext(e) {
          let t = this.ticks || [];
          if (e >= 0 && e < t.length) {
            let i = t[e];
            return i.$context || (i.$context = Tee(this.getContext(), e, i));
          }
          return (
            this.$context ||
            (this.$context = wee(this.chart.getContext(), this))
          );
        }
        _tickSize() {
          let e = this.options.ticks,
            t = f.toRadians(this.labelRotation),
            i = Math.abs(Math.cos(t)),
            n = Math.abs(Math.sin(t)),
            a = this._getLabelSizes(),
            s = e.autoSkipPadding || 0,
            u = a ? a.widest.width + s : 0,
            o = a ? a.highest.height + s : 0;
          return this.isHorizontal()
            ? o * i > u * n
              ? u / i
              : o / n
            : o * n < u * i
            ? o / i
            : u / n;
        }
        _isVisible() {
          let e = this.options.display;
          return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(e) {
          let t = this.axis,
            i = this.chart,
            n = this.options,
            { grid: a, position: s, border: u } = n,
            o = a.offset,
            l = this.isHorizontal(),
            c = this.ticks.length + (o ? 1 : 0),
            h = pn(a),
            v = [],
            p = u.setContext(this.getContext()),
            m = p.display ? p.width : 0,
            q = m / 2,
            O = function (V) {
              return f._alignPixel(i, V, m);
            },
            P,
            w,
            C,
            k,
            R,
            I,
            j,
            L,
            W,
            H,
            U,
            se;
          if (s === "top")
            (P = O(this.bottom)),
              (I = this.bottom - h),
              (L = P - q),
              (H = O(e.top) + q),
              (se = e.bottom);
          else if (s === "bottom")
            (P = O(this.top)),
              (H = e.top),
              (se = O(e.bottom) - q),
              (I = P + q),
              (L = this.top + h);
          else if (s === "left")
            (P = O(this.right)),
              (R = this.right - h),
              (j = P - q),
              (W = O(e.left) + q),
              (U = e.right);
          else if (s === "right")
            (P = O(this.left)),
              (W = e.left),
              (U = O(e.right) - q),
              (R = P + q),
              (j = this.left + h);
          else if (t === "x") {
            if (s === "center") P = O((e.top + e.bottom) / 2 + 0.5);
            else if (f.isObject(s)) {
              let V = Object.keys(s)[0],
                X = s[V];
              P = O(this.chart.scales[V].getPixelForValue(X));
            }
            (H = e.top), (se = e.bottom), (I = P + q), (L = I + h);
          } else if (t === "y") {
            if (s === "center") P = O((e.left + e.right) / 2);
            else if (f.isObject(s)) {
              let V = Object.keys(s)[0],
                X = s[V];
              P = O(this.chart.scales[V].getPixelForValue(X));
            }
            (R = P - q), (j = R - h), (W = e.left), (U = e.right);
          }
          let fe = f.valueOrDefault(n.ticks.maxTicksLimit, c),
            Y = Math.max(1, Math.ceil(c / fe));
          for (w = 0; w < c; w += Y) {
            let V = this.getContext(w),
              X = a.setContext(V),
              ve = u.setContext(V),
              oe = X.lineWidth,
              Ce = X.color,
              Re = ve.dash || [],
              ge = ve.dashOffset,
              me = X.tickWidth,
              we = X.tickColor,
              Me = X.tickBorderDash || [],
              Ie = X.tickBorderDashOffset;
            (C = Mee(this, w, o)),
              C !== void 0 &&
                ((k = f._alignPixel(i, C, oe)),
                l ? (R = j = W = U = k) : (I = L = H = se = k),
                v.push({
                  tx1: R,
                  ty1: I,
                  tx2: j,
                  ty2: L,
                  x1: W,
                  y1: H,
                  x2: U,
                  y2: se,
                  width: oe,
                  color: Ce,
                  borderDash: Re,
                  borderDashOffset: ge,
                  tickWidth: me,
                  tickColor: we,
                  tickBorderDash: Me,
                  tickBorderDashOffset: Ie,
                }));
          }
          return (this._ticksLength = c), (this._borderValue = P), v;
        }
        _computeLabelItems(e) {
          let t = this.axis,
            i = this.options,
            { position: n, ticks: a } = i,
            s = this.isHorizontal(),
            u = this.ticks,
            { align: o, crossAlign: l, padding: d, mirror: c } = a,
            h = pn(i.grid),
            v = h + d,
            p = c ? -d : v,
            m = -f.toRadians(this.labelRotation),
            q = [],
            O,
            P,
            w,
            C,
            k,
            R,
            I,
            j,
            L,
            W,
            H,
            U,
            se = "middle";
          if (n === "top")
            (R = this.bottom - p), (I = this._getXAxisLabelAlignment());
          else if (n === "bottom")
            (R = this.top + p), (I = this._getXAxisLabelAlignment());
          else if (n === "left") {
            let Y = this._getYAxisLabelAlignment(h);
            (I = Y.textAlign), (k = Y.x);
          } else if (n === "right") {
            let Y = this._getYAxisLabelAlignment(h);
            (I = Y.textAlign), (k = Y.x);
          } else if (t === "x") {
            if (n === "center") R = (e.top + e.bottom) / 2 + v;
            else if (f.isObject(n)) {
              let Y = Object.keys(n)[0],
                V = n[Y];
              R = this.chart.scales[Y].getPixelForValue(V) + v;
            }
            I = this._getXAxisLabelAlignment();
          } else if (t === "y") {
            if (n === "center") k = (e.left + e.right) / 2 - v;
            else if (f.isObject(n)) {
              let Y = Object.keys(n)[0],
                V = n[Y];
              k = this.chart.scales[Y].getPixelForValue(V);
            }
            I = this._getYAxisLabelAlignment(h).textAlign;
          }
          t === "y" &&
            (o === "start" ? (se = "top") : o === "end" && (se = "bottom"));
          let fe = this._getLabelSizes();
          for (O = 0, P = u.length; O < P; ++O) {
            (w = u[O]), (C = w.label);
            let Y = a.setContext(this.getContext(O));
            (j = this.getPixelForTick(O) + a.labelOffset),
              (L = this._resolveTickFontOptions(O)),
              (W = L.lineHeight),
              (H = f.isArray(C) ? C.length : 1);
            let V = H / 2,
              X = Y.color,
              ve = Y.textStrokeColor,
              oe = Y.textStrokeWidth,
              Ce = I;
            s
              ? ((k = j),
                I === "inner" &&
                  (O === P - 1
                    ? (Ce = this.options.reverse ? "left" : "right")
                    : O === 0
                    ? (Ce = this.options.reverse ? "right" : "left")
                    : (Ce = "center")),
                n === "top"
                  ? l === "near" || m !== 0
                    ? (U = -H * W + W / 2)
                    : l === "center"
                    ? (U = -fe.highest.height / 2 - V * W + W)
                    : (U = -fe.highest.height + W / 2)
                  : l === "near" || m !== 0
                  ? (U = W / 2)
                  : l === "center"
                  ? (U = fe.highest.height / 2 - V * W)
                  : (U = fe.highest.height - H * W),
                c && (U *= -1),
                m !== 0 && !Y.showLabelBackdrop && (k += (W / 2) * Math.sin(m)))
              : ((R = j), (U = ((1 - H) * W) / 2));
            let Re;
            if (Y.showLabelBackdrop) {
              let ge = f.toPadding(Y.backdropPadding),
                me = fe.heights[O],
                we = fe.widths[O],
                Me = U - ge.top,
                Ie = 0 - ge.left;
              switch (se) {
                case "middle":
                  Me -= me / 2;
                  break;
                case "bottom":
                  Me -= me;
                  break;
              }
              switch (I) {
                case "center":
                  Ie -= we / 2;
                  break;
                case "right":
                  Ie -= we;
                  break;
              }
              Re = {
                left: Ie,
                top: Me,
                width: we + ge.width,
                height: me + ge.height,
                color: Y.backdropColor,
              };
            }
            q.push({
              label: C,
              font: L,
              textOffset: U,
              options: {
                rotation: m,
                color: X,
                strokeColor: ve,
                strokeWidth: oe,
                textAlign: Ce,
                textBaseline: se,
                translation: [k, R],
                backdrop: Re,
              },
            });
          }
          return q;
        }
        _getXAxisLabelAlignment() {
          let { position: e, ticks: t } = this.options;
          if (-f.toRadians(this.labelRotation))
            return e === "top" ? "left" : "right";
          let n = "center";
          return (
            t.align === "start"
              ? (n = "left")
              : t.align === "end"
              ? (n = "right")
              : t.align === "inner" && (n = "inner"),
            n
          );
        }
        _getYAxisLabelAlignment(e) {
          let {
              position: t,
              ticks: { crossAlign: i, mirror: n, padding: a },
            } = this.options,
            s = this._getLabelSizes(),
            u = e + a,
            o = s.widest.width,
            l,
            d;
          return (
            t === "left"
              ? n
                ? ((d = this.right + a),
                  i === "near"
                    ? (l = "left")
                    : i === "center"
                    ? ((l = "center"), (d += o / 2))
                    : ((l = "right"), (d += o)))
                : ((d = this.right - u),
                  i === "near"
                    ? (l = "right")
                    : i === "center"
                    ? ((l = "center"), (d -= o / 2))
                    : ((l = "left"), (d = this.left)))
              : t === "right"
              ? n
                ? ((d = this.left + a),
                  i === "near"
                    ? (l = "right")
                    : i === "center"
                    ? ((l = "center"), (d -= o / 2))
                    : ((l = "left"), (d -= o)))
                : ((d = this.left + u),
                  i === "near"
                    ? (l = "left")
                    : i === "center"
                    ? ((l = "center"), (d += o / 2))
                    : ((l = "right"), (d = this.right)))
              : (l = "right"),
            { textAlign: l, x: d }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          let e = this.chart,
            t = this.options.position;
          if (t === "left" || t === "right")
            return {
              top: 0,
              left: this.left,
              bottom: e.height,
              right: this.right,
            };
          if (t === "top" || t === "bottom")
            return {
              top: this.top,
              left: 0,
              bottom: this.bottom,
              right: e.width,
            };
        }
        drawBackground() {
          let {
            ctx: e,
            options: { backgroundColor: t },
            left: i,
            top: n,
            width: a,
            height: s,
          } = this;
          t &&
            (e.save(), (e.fillStyle = t), e.fillRect(i, n, a, s), e.restore());
        }
        getLineWidthForValue(e) {
          let t = this.options.grid;
          if (!this._isVisible() || !t.display) return 0;
          let n = this.ticks.findIndex((a) => a.value === e);
          return n >= 0 ? t.setContext(this.getContext(n)).lineWidth : 0;
        }
        drawGrid(e) {
          let t = this.options.grid,
            i = this.ctx,
            n =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(e)),
            a,
            s,
            u = (o, l, d) => {
              !d.width ||
                !d.color ||
                (i.save(),
                (i.lineWidth = d.width),
                (i.strokeStyle = d.color),
                i.setLineDash(d.borderDash || []),
                (i.lineDashOffset = d.borderDashOffset),
                i.beginPath(),
                i.moveTo(o.x, o.y),
                i.lineTo(l.x, l.y),
                i.stroke(),
                i.restore());
            };
          if (t.display)
            for (a = 0, s = n.length; a < s; ++a) {
              let o = n[a];
              t.drawOnChartArea &&
                u({ x: o.x1, y: o.y1 }, { x: o.x2, y: o.y2 }, o),
                t.drawTicks &&
                  u(
                    { x: o.tx1, y: o.ty1 },
                    { x: o.tx2, y: o.ty2 },
                    {
                      color: o.tickColor,
                      width: o.tickWidth,
                      borderDash: o.tickBorderDash,
                      borderDashOffset: o.tickBorderDashOffset,
                    }
                  );
            }
        }
        drawBorder() {
          let {
              chart: e,
              ctx: t,
              options: { border: i, grid: n },
            } = this,
            a = i.setContext(this.getContext()),
            s = i.display ? a.width : 0;
          if (!s) return;
          let u = n.setContext(this.getContext(0)).lineWidth,
            o = this._borderValue,
            l,
            d,
            c,
            h;
          this.isHorizontal()
            ? ((l = f._alignPixel(e, this.left, s) - s / 2),
              (d = f._alignPixel(e, this.right, u) + u / 2),
              (c = h = o))
            : ((c = f._alignPixel(e, this.top, s) - s / 2),
              (h = f._alignPixel(e, this.bottom, u) + u / 2),
              (l = d = o)),
            t.save(),
            (t.lineWidth = a.width),
            (t.strokeStyle = a.color),
            t.beginPath(),
            t.moveTo(l, c),
            t.lineTo(d, h),
            t.stroke(),
            t.restore();
        }
        drawLabels(e) {
          if (!this.options.ticks.display) return;
          let i = this.ctx,
            n = this._computeLabelArea();
          n && f.clipArea(i, n);
          let a = this.getLabelItems(e);
          for (let s of a) {
            let u = s.options,
              o = s.font,
              l = s.label,
              d = s.textOffset;
            f.renderText(i, l, 0, d, o, u);
          }
          n && f.unclipArea(i);
        }
        drawTitle() {
          let {
            ctx: e,
            options: { position: t, title: i, reverse: n },
          } = this;
          if (!i.display) return;
          let a = f.toFont(i.font),
            s = f.toPadding(i.padding),
            u = i.align,
            o = a.lineHeight / 2;
          t === "bottom" || t === "center" || f.isObject(t)
            ? ((o += s.bottom),
              f.isArray(i.text) && (o += a.lineHeight * (i.text.length - 1)))
            : (o += s.top);
          let {
            titleX: l,
            titleY: d,
            maxWidth: c,
            rotation: h,
          } = See(this, o, t, u);
          f.renderText(e, i.text, 0, 0, a, {
            color: i.color,
            maxWidth: c,
            rotation: h,
            textAlign: kee(u, t, n),
            textBaseline: "middle",
            translation: [l, d],
          });
        }
        draw(e) {
          !this._isVisible() ||
            (this.drawBackground(),
            this.drawGrid(e),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(e));
        }
        _layers() {
          let e = this.options,
            t = (e.ticks && e.ticks.z) || 0,
            i = f.valueOrDefault(e.grid && e.grid.z, -1),
            n = f.valueOrDefault(e.border && e.border.z, 0);
          return !this._isVisible() || this.draw !== Qe.prototype.draw
            ? [
                {
                  z: t,
                  draw: (a) => {
                    this.draw(a);
                  },
                },
              ]
            : [
                {
                  z: i,
                  draw: (a) => {
                    this.drawBackground(), this.drawGrid(a), this.drawTitle();
                  },
                },
                {
                  z: n,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: t,
                  draw: (a) => {
                    this.drawLabels(a);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(e) {
          let t = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            n = [],
            a,
            s;
          for (a = 0, s = t.length; a < s; ++a) {
            let u = t[a];
            u[i] === this.id && (!e || u.type === e) && n.push(u);
          }
          return n;
        }
        _resolveTickFontOptions(e) {
          let t = this.options.ticks.setContext(this.getContext(e));
          return f.toFont(t.font);
        }
        _maxDigits() {
          let e = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / e;
        }
      },
      Kr = class {
        constructor(e, t, i) {
          (this.type = e),
            (this.scope = t),
            (this.override = i),
            (this.items = Object.create(null));
        }
        isForType(e) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            e.prototype
          );
        }
        register(e) {
          let t = Object.getPrototypeOf(e),
            i;
          Iee(t) && (i = this.register(t));
          let n = this.items,
            a = e.id,
            s = this.scope + "." + a;
          if (!a) throw new Error("class does not have id: " + e);
          return (
            a in n ||
              ((n[a] = e),
              Cee(e, s, i),
              this.override && f.defaults.override(e.id, e.overrides)),
            s
          );
        }
        get(e) {
          return this.items[e];
        }
        unregister(e) {
          let t = this.items,
            i = e.id,
            n = this.scope;
          i in t && delete t[i],
            n &&
              i in f.defaults[n] &&
              (delete f.defaults[n][i], this.override && delete f.overrides[i]);
        }
      };
    function Cee(r, e, t) {
      let i = f.merge(Object.create(null), [
        t ? f.defaults.get(t) : {},
        f.defaults.get(e),
        r.defaults,
      ]);
      f.defaults.set(e, i),
        r.defaultRoutes && Ree(e, r.defaultRoutes),
        r.descriptors && f.defaults.describe(e, r.descriptors);
    }
    function Ree(r, e) {
      Object.keys(e).forEach((t) => {
        let i = t.split("."),
          n = i.pop(),
          a = [r].concat(i).join("."),
          s = e[t].split("."),
          u = s.pop(),
          o = s.join(".");
        f.defaults.route(a, n, o, u);
      });
    }
    function Iee(r) {
      return "id" in r && "defaults" in r;
    }
    var lg = class {
        constructor() {
          (this.controllers = new Kr(qe, "datasets", !0)),
            (this.elements = new Kr(Pe, "elements")),
            (this.plugins = new Kr(Object, "plugins")),
            (this.scales = new Kr(Qe, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add(...e) {
          this._each("register", e);
        }
        remove(...e) {
          this._each("unregister", e);
        }
        addControllers(...e) {
          this._each("register", e, this.controllers);
        }
        addElements(...e) {
          this._each("register", e, this.elements);
        }
        addPlugins(...e) {
          this._each("register", e, this.plugins);
        }
        addScales(...e) {
          this._each("register", e, this.scales);
        }
        getController(e) {
          return this._get(e, this.controllers, "controller");
        }
        getElement(e) {
          return this._get(e, this.elements, "element");
        }
        getPlugin(e) {
          return this._get(e, this.plugins, "plugin");
        }
        getScale(e) {
          return this._get(e, this.scales, "scale");
        }
        removeControllers(...e) {
          this._each("unregister", e, this.controllers);
        }
        removeElements(...e) {
          this._each("unregister", e, this.elements);
        }
        removePlugins(...e) {
          this._each("unregister", e, this.plugins);
        }
        removeScales(...e) {
          this._each("unregister", e, this.scales);
        }
        _each(e, t, i) {
          [...t].forEach((n) => {
            let a = i || this._getRegistryForType(n);
            i || a.isForType(n) || (a === this.plugins && n.id)
              ? this._exec(e, a, n)
              : f.each(n, (s) => {
                  let u = i || this._getRegistryForType(s);
                  this._exec(e, u, s);
                });
          });
        }
        _exec(e, t, i) {
          let n = f._capitalize(e);
          f.callback(i["before" + n], [], i),
            t[e](i),
            f.callback(i["after" + n], [], i);
        }
        _getRegistryForType(e) {
          for (let t = 0; t < this._typedRegistries.length; t++) {
            let i = this._typedRegistries[t];
            if (i.isForType(e)) return i;
          }
          return this.plugins;
        }
        _get(e, t, i) {
          let n = t.get(e);
          if (n === void 0)
            throw new Error('"' + e + '" is not a registered ' + i + ".");
          return n;
        }
      },
      Ne = new lg(),
      dg = class {
        constructor() {
          this._init = [];
        }
        notify(e, t, i, n) {
          t === "beforeInit" &&
            ((this._init = this._createDescriptors(e, !0)),
            this._notify(this._init, e, "install"));
          let a = n ? this._descriptors(e).filter(n) : this._descriptors(e),
            s = this._notify(a, e, t, i);
          return (
            t === "afterDestroy" &&
              (this._notify(a, e, "stop"),
              this._notify(this._init, e, "uninstall")),
            s
          );
        }
        _notify(e, t, i, n) {
          n = n || {};
          for (let a of e) {
            let s = a.plugin,
              u = s[i],
              o = [t, n, a.options];
            if (f.callback(u, o, s) === !1 && n.cancelable) return !1;
          }
          return !0;
        }
        invalidate() {
          f.isNullOrUndef(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(e) {
          if (this._cache) return this._cache;
          let t = (this._cache = this._createDescriptors(e));
          return this._notifyStateChanges(e), t;
        }
        _createDescriptors(e, t) {
          let i = e && e.config,
            n = f.valueOrDefault(i.options && i.options.plugins, {}),
            a = jee(i);
          return n === !1 && !t ? [] : Eee(e, a, n, t);
        }
        _notifyStateChanges(e) {
          let t = this._oldCache || [],
            i = this._cache,
            n = (a, s) =>
              a.filter((u) => !s.some((o) => u.plugin.id === o.plugin.id));
          this._notify(n(t, i), e, "stop"), this._notify(n(i, t), e, "start");
        }
      };
    function jee(r) {
      let e = {},
        t = [],
        i = Object.keys(Ne.plugins.items);
      for (let a = 0; a < i.length; a++) t.push(Ne.getPlugin(i[a]));
      let n = r.plugins || [];
      for (let a = 0; a < n.length; a++) {
        let s = n[a];
        t.indexOf(s) === -1 && (t.push(s), (e[s.id] = !0));
      }
      return { plugins: t, localIds: e };
    }
    function Aee(r, e) {
      return !e && r === !1 ? null : r === !0 ? {} : r;
    }
    function Eee(r, { plugins: e, localIds: t }, i, n) {
      let a = [],
        s = r.getContext();
      for (let u of e) {
        let o = u.id,
          l = Aee(i[o], n);
        l !== null &&
          a.push({
            plugin: u,
            options: Nee(r.config, { plugin: u, local: t[o] }, l, s),
          });
      }
      return a;
    }
    function Nee(r, { plugin: e, local: t }, i, n) {
      let a = r.pluginScopeKeys(e),
        s = r.getOptionScopes(i, a);
      return (
        t && e.defaults && s.push(e.defaults),
        r.createResolver(s, n, [""], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        })
      );
    }
    function fg(r, e) {
      let t = f.defaults.datasets[r] || {};
      return (
        ((e.datasets || {})[r] || {}).indexAxis ||
        e.indexAxis ||
        t.indexAxis ||
        "x"
      );
    }
    function Lee(r, e) {
      let t = r;
      return (
        r === "_index_"
          ? (t = e)
          : r === "_value_" && (t = e === "x" ? "y" : "x"),
        t
      );
    }
    function Fee(r, e) {
      return r === e ? "_index_" : "_value_";
    }
    function Y2(r) {
      if (r === "x" || r === "y" || r === "r") return r;
    }
    function Wee(r) {
      if (r === "top" || r === "bottom") return "x";
      if (r === "left" || r === "right") return "y";
    }
    function cg(r, ...e) {
      if (Y2(r)) return r;
      for (let t of e) {
        let i =
          t.axis || Wee(t.position) || (r.length > 1 && Y2(r[0].toLowerCase()));
        if (i) return i;
      }
      throw new Error(
        `Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`
      );
    }
    function H2(r, e, t) {
      if (t[e + "AxisID"] === r) return { axis: e };
    }
    function Yee(r, e) {
      if (e.data && e.data.datasets) {
        let t = e.data.datasets.filter(
          (i) => i.xAxisID === r || i.yAxisID === r
        );
        if (t.length) return H2(r, "x", t[0]) || H2(r, "y", t[0]);
      }
      return {};
    }
    function Hee(r, e) {
      let t = f.overrides[r.type] || { scales: {} },
        i = e.scales || {},
        n = fg(r.type, e),
        a = Object.create(null);
      return (
        Object.keys(i).forEach((s) => {
          let u = i[s];
          if (!f.isObject(u))
            return console.error(`Invalid scale configuration for scale: ${s}`);
          if (u._proxy)
            return console.warn(
              `Ignoring resolver passed as options for scale: ${s}`
            );
          let o = cg(s, u, Yee(s, r), f.defaults.scales[u.type]),
            l = Fee(o, n),
            d = t.scales || {};
          a[s] = f.mergeIf(Object.create(null), [{ axis: o }, u, d[o], d[l]]);
        }),
        r.data.datasets.forEach((s) => {
          let u = s.type || r.type,
            o = s.indexAxis || fg(u, e),
            d = (f.overrides[u] || {}).scales || {};
          Object.keys(d).forEach((c) => {
            let h = Lee(c, o),
              v = s[h + "AxisID"] || h;
            (a[v] = a[v] || Object.create(null)),
              f.mergeIf(a[v], [{ axis: h }, i[v], d[c]]);
          });
        }),
        Object.keys(a).forEach((s) => {
          let u = a[s];
          f.mergeIf(u, [f.defaults.scales[u.type], f.defaults.scale]);
        }),
        a
      );
    }
    function CT(r) {
      let e = r.options || (r.options = {});
      (e.plugins = f.valueOrDefault(e.plugins, {})), (e.scales = Hee(r, e));
    }
    function RT(r) {
      return (
        (r = r || {}),
        (r.datasets = r.datasets || []),
        (r.labels = r.labels || []),
        r
      );
    }
    function zee(r) {
      return (r = r || {}), (r.data = RT(r.data)), CT(r), r;
    }
    var z2 = new Map(),
      IT = new Set();
    function Df(r, e) {
      let t = z2.get(r);
      return t || ((t = e()), z2.set(r, t), IT.add(t)), t;
    }
    var _n = (r, e, t) => {
        let i = f.resolveObjectKey(e, t);
        i !== void 0 && r.add(i);
      },
      hg = class {
        constructor(e) {
          (this._config = zee(e)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(e) {
          this._config.type = e;
        }
        get data() {
          return this._config.data;
        }
        set data(e) {
          this._config.data = RT(e);
        }
        get options() {
          return this._config.options;
        }
        set options(e) {
          this._config.options = e;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          let e = this._config;
          this.clearCache(), CT(e);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(e) {
          return Df(e, () => [[`datasets.${e}`, ""]]);
        }
        datasetAnimationScopeKeys(e, t) {
          return Df(`${e}.transition.${t}`, () => [
            [`datasets.${e}.transitions.${t}`, `transitions.${t}`],
            [`datasets.${e}`, ""],
          ]);
        }
        datasetElementScopeKeys(e, t) {
          return Df(`${e}-${t}`, () => [
            [
              `datasets.${e}.elements.${t}`,
              `datasets.${e}`,
              `elements.${t}`,
              "",
            ],
          ]);
        }
        pluginScopeKeys(e) {
          let t = e.id,
            i = this.type;
          return Df(`${i}-plugin-${t}`, () => [
            [`plugins.${t}`, ...(e.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(e, t) {
          let i = this._scopeCache,
            n = i.get(e);
          return (!n || t) && ((n = new Map()), i.set(e, n)), n;
        }
        getOptionScopes(e, t, i) {
          let { options: n, type: a } = this,
            s = this._cachedScopes(e, i),
            u = s.get(t);
          if (u) return u;
          let o = new Set();
          t.forEach((d) => {
            e && (o.add(e), d.forEach((c) => _n(o, e, c))),
              d.forEach((c) => _n(o, n, c)),
              d.forEach((c) => _n(o, f.overrides[a] || {}, c)),
              d.forEach((c) => _n(o, f.defaults, c)),
              d.forEach((c) => _n(o, f.descriptors, c));
          });
          let l = Array.from(o);
          return (
            l.length === 0 && l.push(Object.create(null)),
            IT.has(t) && s.set(t, l),
            l
          );
        }
        chartOptionScopes() {
          let { options: e, type: t } = this;
          return [
            e,
            f.overrides[t] || {},
            f.defaults.datasets[t] || {},
            { type: t },
            f.defaults,
            f.descriptors,
          ];
        }
        resolveNamedOptions(e, t, i, n = [""]) {
          let a = { $shared: !0 },
            { resolver: s, subPrefixes: u } = B2(this._resolverCache, e, n),
            o = s;
          if (Uee(s, t)) {
            (a.$shared = !1), (i = f.isFunction(i) ? i() : i);
            let l = this.createResolver(e, i, u);
            o = f._attachContext(s, i, l);
          }
          for (let l of t) a[l] = o[l];
          return a;
        }
        createResolver(e, t, i = [""], n) {
          let { resolver: a } = B2(this._resolverCache, e, i);
          return f.isObject(t) ? f._attachContext(a, t, void 0, n) : a;
        }
      };
    function B2(r, e, t) {
      let i = r.get(e);
      i || ((i = new Map()), r.set(e, i));
      let n = t.join(),
        a = i.get(n);
      return (
        a ||
          ((a = {
            resolver: f._createResolver(e, t),
            subPrefixes: t.filter((u) => !u.toLowerCase().includes("hover")),
          }),
          i.set(n, a)),
        a
      );
    }
    var Bee = (r) =>
      f.isObject(r) &&
      Object.getOwnPropertyNames(r).reduce(
        (e, t) => e || f.isFunction(r[t]),
        !1
      );
    function Uee(r, e) {
      let { isScriptable: t, isIndexable: i } = f._descriptors(r);
      for (let n of e) {
        let a = t(n),
          s = i(n),
          u = (s || a) && r[n];
        if ((a && (f.isFunction(u) || Bee(u))) || (s && f.isArray(u)))
          return !0;
      }
      return !1;
    }
    var Vee = "4.3.3",
      $ee = ["top", "bottom", "left", "right", "chartArea"];
    function U2(r, e) {
      return (
        r === "top" || r === "bottom" || ($ee.indexOf(r) === -1 && e === "x")
      );
    }
    function V2(r, e) {
      return function (t, i) {
        return t[r] === i[r] ? t[e] - i[e] : t[r] - i[r];
      };
    }
    function $2(r) {
      let e = r.chart,
        t = e.options.animation;
      e.notifyPlugins("afterRender"), f.callback(t && t.onComplete, [r], e);
    }
    function Qee(r) {
      let e = r.chart,
        t = e.options.animation;
      f.callback(t && t.onProgress, [r], e);
    }
    function jT(r) {
      return (
        f._isDomSupported() && typeof r == "string"
          ? (r = document.getElementById(r))
          : r && r.length && (r = r[0]),
        r && r.canvas && (r = r.canvas),
        r
      );
    }
    var Cf = {},
      Q2 = (r) => {
        let e = jT(r);
        return Object.values(Cf)
          .filter((t) => t.canvas === e)
          .pop();
      };
    function Xee(r, e, t) {
      let i = Object.keys(r);
      for (let n of i) {
        let a = +n;
        if (a >= e) {
          let s = r[n];
          delete r[n], (t > 0 || a > e) && (r[a + t] = s);
        }
      }
    }
    function Kee(r, e, t, i) {
      return !t || r.type === "mouseout" ? null : i ? e : r;
    }
    function Gee(r) {
      let { xScale: e, yScale: t } = r;
      if (e && t)
        return { left: e.left, right: e.right, top: t.top, bottom: t.bottom };
    }
    var Ve = class {
      static register(...e) {
        Ne.add(...e), X2();
      }
      static unregister(...e) {
        Ne.remove(...e), X2();
      }
      constructor(e, t) {
        let i = (this.config = new hg(t)),
          n = jT(e),
          a = Q2(n);
        if (a)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              a.id +
              "' must be destroyed before the canvas with ID '" +
              a.canvas.id +
              "' can be reused."
          );
        let s = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform || ST(n))()),
          this.platform.updateConfig(i);
        let u = this.platform.acquireContext(n, s.aspectRatio),
          o = u && u.canvas,
          l = o && o.height,
          d = o && o.width;
        if (
          ((this.id = f.uid()),
          (this.ctx = u),
          (this.canvas = o),
          (this.width = d),
          (this.height = l),
          (this._options = s),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new dg()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = f.debounce(
            (c) => this.update(c),
            s.resizeDelay || 0
          )),
          (this._dataChanges = []),
          (Cf[this.id] = this),
          !u || !o)
        ) {
          console.error(
            "Failed to create chart: can't acquire context from the given item"
          );
          return;
        }
        Ue.listen(this, "complete", $2),
          Ue.listen(this, "progress", Qee),
          this._initialize(),
          this.attached && this.update();
      }
      get aspectRatio() {
        let {
          options: { aspectRatio: e, maintainAspectRatio: t },
          width: i,
          height: n,
          _aspectRatio: a,
        } = this;
        return f.isNullOrUndef(e) ? (t && a ? a : n ? i / n : null) : e;
      }
      get data() {
        return this.config.data;
      }
      set data(e) {
        this.config.data = e;
      }
      get options() {
        return this._options;
      }
      set options(e) {
        this.config.options = e;
      }
      get registry() {
        return Ne;
      }
      _initialize() {
        return (
          this.notifyPlugins("beforeInit"),
          this.options.responsive
            ? this.resize()
            : f.retinaScale(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins("afterInit"),
          this
        );
      }
      clear() {
        return f.clearCanvas(this.canvas, this.ctx), this;
      }
      stop() {
        return Ue.stop(this), this;
      }
      resize(e, t) {
        Ue.running(this)
          ? (this._resizeBeforeDraw = { width: e, height: t })
          : this._resize(e, t);
      }
      _resize(e, t) {
        let i = this.options,
          n = this.canvas,
          a = i.maintainAspectRatio && this.aspectRatio,
          s = this.platform.getMaximumSize(n, e, t, a),
          u = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
          o = this.width ? "resize" : "attach";
        (this.width = s.width),
          (this.height = s.height),
          (this._aspectRatio = this.aspectRatio),
          f.retinaScale(this, u, !0) &&
            (this.notifyPlugins("resize", { size: s }),
            f.callback(i.onResize, [this, s], this),
            this.attached && this._doResize(o) && this.render());
      }
      ensureScalesHaveIDs() {
        let t = this.options.scales || {};
        f.each(t, (i, n) => {
          i.id = n;
        });
      }
      buildOrUpdateScales() {
        let e = this.options,
          t = e.scales,
          i = this.scales,
          n = Object.keys(i).reduce((s, u) => ((s[u] = !1), s), {}),
          a = [];
        t &&
          (a = a.concat(
            Object.keys(t).map((s) => {
              let u = t[s],
                o = cg(s, u),
                l = o === "r",
                d = o === "x";
              return {
                options: u,
                dposition: l ? "chartArea" : d ? "bottom" : "left",
                dtype: l ? "radialLinear" : d ? "category" : "linear",
              };
            })
          )),
          f.each(a, (s) => {
            let u = s.options,
              o = u.id,
              l = cg(o, u),
              d = f.valueOrDefault(u.type, s.dtype);
            (u.position === void 0 || U2(u.position, l) !== U2(s.dposition)) &&
              (u.position = s.dposition),
              (n[o] = !0);
            let c = null;
            if (o in i && i[o].type === d) c = i[o];
            else {
              let h = Ne.getScale(d);
              (c = new h({ id: o, type: d, ctx: this.ctx, chart: this })),
                (i[c.id] = c);
            }
            c.init(u, e);
          }),
          f.each(n, (s, u) => {
            s || delete i[u];
          }),
          f.each(i, (s) => {
            he.configure(this, s, s.options), he.addBox(this, s);
          });
      }
      _updateMetasets() {
        let e = this._metasets,
          t = this.data.datasets.length,
          i = e.length;
        if ((e.sort((n, a) => n.index - a.index), i > t)) {
          for (let n = t; n < i; ++n) this._destroyDatasetMeta(n);
          e.splice(t, i - t);
        }
        this._sortedMetasets = e.slice(0).sort(V2("order", "index"));
      }
      _removeUnreferencedMetasets() {
        let {
          _metasets: e,
          data: { datasets: t },
        } = this;
        e.length > t.length && delete this._stacks,
          e.forEach((i, n) => {
            t.filter((a) => a === i._dataset).length === 0 &&
              this._destroyDatasetMeta(n);
          });
      }
      buildOrUpdateControllers() {
        let e = [],
          t = this.data.datasets,
          i,
          n;
        for (
          this._removeUnreferencedMetasets(), i = 0, n = t.length;
          i < n;
          i++
        ) {
          let a = t[i],
            s = this.getDatasetMeta(i),
            u = a.type || this.config.type;
          if (
            (s.type &&
              s.type !== u &&
              (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
            (s.type = u),
            (s.indexAxis = a.indexAxis || fg(u, this.options)),
            (s.order = a.order || 0),
            (s.index = i),
            (s.label = "" + a.label),
            (s.visible = this.isDatasetVisible(i)),
            s.controller)
          )
            s.controller.updateIndex(i), s.controller.linkScales();
          else {
            let o = Ne.getController(u),
              { datasetElementType: l, dataElementType: d } =
                f.defaults.datasets[u];
            Object.assign(o, {
              dataElementType: Ne.getElement(d),
              datasetElementType: l && Ne.getElement(l),
            }),
              (s.controller = new o(this, i)),
              e.push(s.controller);
          }
        }
        return this._updateMetasets(), e;
      }
      _resetElements() {
        f.each(
          this.data.datasets,
          (e, t) => {
            this.getDatasetMeta(t).controller.reset();
          },
          this
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
      update(e) {
        let t = this.config;
        t.update();
        let i = (this._options = t.createResolver(
            t.chartOptionScopes(),
            this.getContext()
          )),
          n = (this._animationsDisabled = !i.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) ===
            !1)
        )
          return;
        let a = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let s = 0;
        for (let l = 0, d = this.data.datasets.length; l < d; l++) {
          let { controller: c } = this.getDatasetMeta(l),
            h = !n && a.indexOf(c) === -1;
          c.buildOrUpdateElements(h), (s = Math.max(+c.getMaxOverflow(), s));
        }
        (s = this._minPadding = i.layout.autoPadding ? s : 0),
          this._updateLayout(s),
          n ||
            f.each(a, (l) => {
              l.reset();
            }),
          this._updateDatasets(e),
          this.notifyPlugins("afterUpdate", { mode: e }),
          this._layers.sort(V2("z", "_idx"));
        let { _active: u, _lastEvent: o } = this;
        o
          ? this._eventHandler(o, !0)
          : u.length && this._updateHoverStyles(u, u, !0),
          this.render();
      }
      _updateScales() {
        f.each(this.scales, (e) => {
          he.removeBox(this, e);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        let e = this.options,
          t = new Set(Object.keys(this._listeners)),
          i = new Set(e.events);
        (!f.setsEqual(t, i) || !!this._responsiveListeners !== e.responsive) &&
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        let { _hiddenIndices: e } = this,
          t = this._getUniformDataChanges() || [];
        for (let { method: i, start: n, count: a } of t) {
          let s = i === "_removeElements" ? -a : a;
          Xee(e, n, s);
        }
      }
      _getUniformDataChanges() {
        let e = this._dataChanges;
        if (!e || !e.length) return;
        this._dataChanges = [];
        let t = this.data.datasets.length,
          i = (a) =>
            new Set(
              e
                .filter((s) => s[0] === a)
                .map((s, u) => u + "," + s.splice(1).join(","))
            ),
          n = i(0);
        for (let a = 1; a < t; a++) if (!f.setsEqual(n, i(a))) return;
        return Array.from(n)
          .map((a) => a.split(","))
          .map((a) => ({ method: a[1], start: +a[2], count: +a[3] }));
      }
      _updateLayout(e) {
        if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1)
          return;
        he.update(this, this.width, this.height, e);
        let t = this.chartArea,
          i = t.width <= 0 || t.height <= 0;
        (this._layers = []),
          f.each(
            this.boxes,
            (n) => {
              (i && n.position === "chartArea") ||
                (n.configure && n.configure(),
                this._layers.push(...n._layers()));
            },
            this
          ),
          this._layers.forEach((n, a) => {
            n._idx = a;
          }),
          this.notifyPlugins("afterLayout");
      }
      _updateDatasets(e) {
        if (
          this.notifyPlugins("beforeDatasetsUpdate", {
            mode: e,
            cancelable: !0,
          }) !== !1
        ) {
          for (let t = 0, i = this.data.datasets.length; t < i; ++t)
            this.getDatasetMeta(t).controller.configure();
          for (let t = 0, i = this.data.datasets.length; t < i; ++t)
            this._updateDataset(
              t,
              f.isFunction(e) ? e({ datasetIndex: t }) : e
            );
          this.notifyPlugins("afterDatasetsUpdate", { mode: e });
        }
      }
      _updateDataset(e, t) {
        let i = this.getDatasetMeta(e),
          n = { meta: i, index: e, mode: t, cancelable: !0 };
        this.notifyPlugins("beforeDatasetUpdate", n) !== !1 &&
          (i.controller._update(t),
          (n.cancelable = !1),
          this.notifyPlugins("afterDatasetUpdate", n));
      }
      render() {
        this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
          (Ue.has(this)
            ? this.attached && !Ue.running(this) && Ue.start(this)
            : (this.draw(), $2({ chart: this })));
      }
      draw() {
        let e;
        if (this._resizeBeforeDraw) {
          let { width: i, height: n } = this._resizeBeforeDraw;
          this._resize(i, n), (this._resizeBeforeDraw = null);
        }
        if (
          (this.clear(),
          this.width <= 0 ||
            this.height <= 0 ||
            this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
        )
          return;
        let t = this._layers;
        for (e = 0; e < t.length && t[e].z <= 0; ++e) t[e].draw(this.chartArea);
        for (this._drawDatasets(); e < t.length; ++e) t[e].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
      }
      _getSortedDatasetMetas(e) {
        let t = this._sortedMetasets,
          i = [],
          n,
          a;
        for (n = 0, a = t.length; n < a; ++n) {
          let s = t[n];
          (!e || s.visible) && i.push(s);
        }
        return i;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
          return;
        let e = this.getSortedVisibleDatasetMetas();
        for (let t = e.length - 1; t >= 0; --t) this._drawDataset(e[t]);
        this.notifyPlugins("afterDatasetsDraw");
      }
      _drawDataset(e) {
        let t = this.ctx,
          i = e._clip,
          n = !i.disabled,
          a = Gee(e) || this.chartArea,
          s = { meta: e, index: e.index, cancelable: !0 };
        this.notifyPlugins("beforeDatasetDraw", s) !== !1 &&
          (n &&
            f.clipArea(t, {
              left: i.left === !1 ? 0 : a.left - i.left,
              right: i.right === !1 ? this.width : a.right + i.right,
              top: i.top === !1 ? 0 : a.top - i.top,
              bottom: i.bottom === !1 ? this.height : a.bottom + i.bottom,
            }),
          e.controller.draw(),
          n && f.unclipArea(t),
          (s.cancelable = !1),
          this.notifyPlugins("afterDatasetDraw", s));
      }
      isPointInArea(e) {
        return f._isPointInArea(e, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(e, t, i, n) {
        let a = MT.modes[t];
        return typeof a == "function" ? a(this, e, i, n) : [];
      }
      getDatasetMeta(e) {
        let t = this.data.datasets[e],
          i = this._metasets,
          n = i.filter((a) => a && a._dataset === t).pop();
        return (
          n ||
            ((n = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (t && t.order) || 0,
              index: e,
              _dataset: t,
              _parsed: [],
              _sorted: !1,
            }),
            i.push(n)),
          n
        );
      }
      getContext() {
        return (
          this.$context ||
          (this.$context = f.createContext(null, {
            chart: this,
            type: "chart",
          }))
        );
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(e) {
        let t = this.data.datasets[e];
        if (!t) return !1;
        let i = this.getDatasetMeta(e);
        return typeof i.hidden == "boolean" ? !i.hidden : !t.hidden;
      }
      setDatasetVisibility(e, t) {
        let i = this.getDatasetMeta(e);
        i.hidden = !t;
      }
      toggleDataVisibility(e) {
        this._hiddenIndices[e] = !this._hiddenIndices[e];
      }
      getDataVisibility(e) {
        return !this._hiddenIndices[e];
      }
      _updateVisibility(e, t, i) {
        let n = i ? "show" : "hide",
          a = this.getDatasetMeta(e),
          s = a.controller._resolveAnimations(void 0, n);
        f.defined(t)
          ? ((a.data[t].hidden = !i), this.update())
          : (this.setDatasetVisibility(e, i),
            s.update(a, { visible: i }),
            this.update((u) => (u.datasetIndex === e ? n : void 0)));
      }
      hide(e, t) {
        this._updateVisibility(e, t, !1);
      }
      show(e, t) {
        this._updateVisibility(e, t, !0);
      }
      _destroyDatasetMeta(e) {
        let t = this._metasets[e];
        t && t.controller && t.controller._destroy(), delete this._metasets[e];
      }
      _stop() {
        let e, t;
        for (
          this.stop(), Ue.remove(this), e = 0, t = this.data.datasets.length;
          e < t;
          ++e
        )
          this._destroyDatasetMeta(e);
      }
      destroy() {
        this.notifyPlugins("beforeDestroy");
        let { canvas: e, ctx: t } = this;
        this._stop(),
          this.config.clearCache(),
          e &&
            (this.unbindEvents(),
            f.clearCanvas(e, t),
            this.platform.releaseContext(t),
            (this.canvas = null),
            (this.ctx = null)),
          delete Cf[this.id],
          this.notifyPlugins("afterDestroy");
      }
      toBase64Image(...e) {
        return this.canvas.toDataURL(...e);
      }
      bindEvents() {
        this.bindUserEvents(),
          this.options.responsive
            ? this.bindResponsiveEvents()
            : (this.attached = !0);
      }
      bindUserEvents() {
        let e = this._listeners,
          t = this.platform,
          i = (a, s) => {
            t.addEventListener(this, a, s), (e[a] = s);
          },
          n = (a, s, u) => {
            (a.offsetX = s), (a.offsetY = u), this._eventHandler(a);
          };
        f.each(this.options.events, (a) => i(a, n));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        let e = this._responsiveListeners,
          t = this.platform,
          i = (o, l) => {
            t.addEventListener(this, o, l), (e[o] = l);
          },
          n = (o, l) => {
            e[o] && (t.removeEventListener(this, o, l), delete e[o]);
          },
          a = (o, l) => {
            this.canvas && this.resize(o, l);
          },
          s,
          u = () => {
            n("attach", u),
              (this.attached = !0),
              this.resize(),
              i("resize", a),
              i("detach", s);
          };
        (s = () => {
          (this.attached = !1),
            n("resize", a),
            this._stop(),
            this._resize(0, 0),
            i("attach", u);
        }),
          t.isAttached(this.canvas) ? u() : s();
      }
      unbindEvents() {
        f.each(this._listeners, (e, t) => {
          this.platform.removeEventListener(this, t, e);
        }),
          (this._listeners = {}),
          f.each(this._responsiveListeners, (e, t) => {
            this.platform.removeEventListener(this, t, e);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(e, t, i) {
        let n = i ? "set" : "remove",
          a,
          s,
          u,
          o;
        for (
          t === "dataset" &&
            ((a = this.getDatasetMeta(e[0].datasetIndex)),
            a.controller["_" + n + "DatasetHoverStyle"]()),
            u = 0,
            o = e.length;
          u < o;
          ++u
        ) {
          s = e[u];
          let l = s && this.getDatasetMeta(s.datasetIndex).controller;
          l && l[n + "HoverStyle"](s.element, s.datasetIndex, s.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(e) {
        let t = this._active || [],
          i = e.map(({ datasetIndex: a, index: s }) => {
            let u = this.getDatasetMeta(a);
            if (!u) throw new Error("No dataset found at index " + a);
            return { datasetIndex: a, element: u.data[s], index: s };
          });
        !f._elementsEqual(i, t) &&
          ((this._active = i),
          (this._lastEvent = null),
          this._updateHoverStyles(i, t));
      }
      notifyPlugins(e, t, i) {
        return this._plugins.notify(this, e, t, i);
      }
      isPluginEnabled(e) {
        return (
          this._plugins._cache.filter((t) => t.plugin.id === e).length === 1
        );
      }
      _updateHoverStyles(e, t, i) {
        let n = this.options.hover,
          a = (o, l) =>
            o.filter(
              (d) =>
                !l.some(
                  (c) =>
                    d.datasetIndex === c.datasetIndex && d.index === c.index
                )
            ),
          s = a(t, e),
          u = i ? e : a(e, t);
        s.length && this.updateHoverStyle(s, n.mode, !1),
          u.length && n.mode && this.updateHoverStyle(u, n.mode, !0);
      }
      _eventHandler(e, t) {
        let i = {
            event: e,
            replay: t,
            cancelable: !0,
            inChartArea: this.isPointInArea(e),
          },
          n = (s) =>
            (s.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins("beforeEvent", i, n) === !1) return;
        let a = this._handleEvent(e, t, i.inChartArea);
        return (
          (i.cancelable = !1),
          this.notifyPlugins("afterEvent", i, n),
          (a || i.changed) && this.render(),
          this
        );
      }
      _handleEvent(e, t, i) {
        let { _active: n = [], options: a } = this,
          s = t,
          u = this._getActiveElements(e, n, i, s),
          o = f._isClickEvent(e),
          l = Kee(e, this._lastEvent, i, o);
        i &&
          ((this._lastEvent = null),
          f.callback(a.onHover, [e, u, this], this),
          o && f.callback(a.onClick, [e, u, this], this));
        let d = !f._elementsEqual(u, n);
        return (
          (d || t) && ((this._active = u), this._updateHoverStyles(u, n, t)),
          (this._lastEvent = l),
          d
        );
      }
      _getActiveElements(e, t, i, n) {
        if (e.type === "mouseout") return [];
        if (!i) return t;
        let a = this.options.hover;
        return this.getElementsAtEventForMode(e, a.mode, a, n);
      }
    };
    A(Ve, "defaults", f.defaults),
      A(Ve, "instances", Cf),
      A(Ve, "overrides", f.overrides),
      A(Ve, "registry", Ne),
      A(Ve, "version", Vee),
      A(Ve, "getChart", Q2);
    function X2() {
      return f.each(Ve.instances, (r) => r._plugins.invalidate());
    }
    function Zee(r, e, t) {
      let {
          startAngle: i,
          pixelMargin: n,
          x: a,
          y: s,
          outerRadius: u,
          innerRadius: o,
        } = e,
        l = n / u;
      r.beginPath(),
        r.arc(a, s, u, i - l, t + l),
        o > n
          ? ((l = n / o), r.arc(a, s, o, t + l, i - l, !0))
          : r.arc(a, s, n, t + f.HALF_PI, i - f.HALF_PI),
        r.closePath(),
        r.clip();
    }
    function Jee(r) {
      return f._readValueToProps(r, [
        "outerStart",
        "outerEnd",
        "innerStart",
        "innerEnd",
      ]);
    }
    function ete(r, e, t, i) {
      let n = Jee(r.options.borderRadius),
        a = (t - e) / 2,
        s = Math.min(a, (i * e) / 2),
        u = (o) => {
          let l = ((t - Math.min(a, o)) * i) / 2;
          return f._limitValue(o, 0, Math.min(a, l));
        };
      return {
        outerStart: u(n.outerStart),
        outerEnd: u(n.outerEnd),
        innerStart: f._limitValue(n.innerStart, 0, s),
        innerEnd: f._limitValue(n.innerEnd, 0, s),
      };
    }
    function Qr(r, e, t, i) {
      return { x: t + r * Math.cos(e), y: i + r * Math.sin(e) };
    }
    function Ef(r, e, t, i, n, a) {
      let { x: s, y: u, startAngle: o, pixelMargin: l, innerRadius: d } = e,
        c = Math.max(e.outerRadius + i + t - l, 0),
        h = d > 0 ? d + i + t + l : 0,
        v = 0,
        p = n - o;
      if (i) {
        let Y = d > 0 ? d - i : 0,
          V = c > 0 ? c - i : 0,
          X = (Y + V) / 2,
          ve = X !== 0 ? (p * X) / (X + i) : p;
        v = (p - ve) / 2;
      }
      let m = Math.max(0.001, p * c - t / f.PI) / c,
        q = (p - m) / 2,
        O = o + q + v,
        P = n - q - v,
        {
          outerStart: w,
          outerEnd: C,
          innerStart: k,
          innerEnd: R,
        } = ete(e, h, c, P - O),
        I = c - w,
        j = c - C,
        L = O + w / I,
        W = P - C / j,
        H = h + k,
        U = h + R,
        se = O + k / H,
        fe = P - R / U;
      if ((r.beginPath(), a)) {
        let Y = (L + W) / 2;
        if ((r.arc(s, u, c, L, Y), r.arc(s, u, c, Y, W), C > 0)) {
          let oe = Qr(j, W, s, u);
          r.arc(oe.x, oe.y, C, W, P + f.HALF_PI);
        }
        let V = Qr(U, P, s, u);
        if ((r.lineTo(V.x, V.y), R > 0)) {
          let oe = Qr(U, fe, s, u);
          r.arc(oe.x, oe.y, R, P + f.HALF_PI, fe + Math.PI);
        }
        let X = (P - R / h + (O + k / h)) / 2;
        if (
          (r.arc(s, u, h, P - R / h, X, !0),
          r.arc(s, u, h, X, O + k / h, !0),
          k > 0)
        ) {
          let oe = Qr(H, se, s, u);
          r.arc(oe.x, oe.y, k, se + Math.PI, O - f.HALF_PI);
        }
        let ve = Qr(I, O, s, u);
        if ((r.lineTo(ve.x, ve.y), w > 0)) {
          let oe = Qr(I, L, s, u);
          r.arc(oe.x, oe.y, w, O - f.HALF_PI, L);
        }
      } else {
        r.moveTo(s, u);
        let Y = Math.cos(L) * c + s,
          V = Math.sin(L) * c + u;
        r.lineTo(Y, V);
        let X = Math.cos(W) * c + s,
          ve = Math.sin(W) * c + u;
        r.lineTo(X, ve);
      }
      r.closePath();
    }
    function tte(r, e, t, i, n) {
      let { fullCircles: a, startAngle: s, circumference: u } = e,
        o = e.endAngle;
      if (a) {
        Ef(r, e, t, i, o, n);
        for (let l = 0; l < a; ++l) r.fill();
        isNaN(u) || (o = s + (u % f.TAU || f.TAU));
      }
      return Ef(r, e, t, i, o, n), r.fill(), o;
    }
    function rte(r, e, t, i, n) {
      let { fullCircles: a, startAngle: s, circumference: u, options: o } = e,
        {
          borderWidth: l,
          borderJoinStyle: d,
          borderDash: c,
          borderDashOffset: h,
        } = o,
        v = o.borderAlign === "inner";
      if (!l) return;
      r.setLineDash(c || []),
        (r.lineDashOffset = h),
        v
          ? ((r.lineWidth = l * 2), (r.lineJoin = d || "round"))
          : ((r.lineWidth = l), (r.lineJoin = d || "bevel"));
      let p = e.endAngle;
      if (a) {
        Ef(r, e, t, i, p, n);
        for (let m = 0; m < a; ++m) r.stroke();
        isNaN(u) || (p = s + (u % f.TAU || f.TAU));
      }
      v && Zee(r, e, p), a || (Ef(r, e, t, i, p, n), r.stroke());
    }
    var Dt = class extends Pe {
      constructor(t) {
        super();
        A(this, "circumference");
        A(this, "endAngle");
        A(this, "fullCircles");
        A(this, "innerRadius");
        A(this, "outerRadius");
        A(this, "pixelMargin");
        A(this, "startAngle");
        (this.options = void 0),
          (this.circumference = void 0),
          (this.startAngle = void 0),
          (this.endAngle = void 0),
          (this.innerRadius = void 0),
          (this.outerRadius = void 0),
          (this.pixelMargin = 0),
          (this.fullCircles = 0),
          t && Object.assign(this, t);
      }
      inRange(t, i, n) {
        let a = this.getProps(["x", "y"], n),
          { angle: s, distance: u } = f.getAngleFromPoint(a, { x: t, y: i }),
          {
            startAngle: o,
            endAngle: l,
            innerRadius: d,
            outerRadius: c,
            circumference: h,
          } = this.getProps(
            [
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "circumference",
            ],
            n
          ),
          v = (this.options.spacing + this.options.borderWidth) / 2,
          m = f.valueOrDefault(h, l - o) >= f.TAU || f._angleBetween(s, o, l),
          q = f._isBetween(u, d + v, c + v);
        return m && q;
      }
      getCenterPoint(t) {
        let {
            x: i,
            y: n,
            startAngle: a,
            endAngle: s,
            innerRadius: u,
            outerRadius: o,
          } = this.getProps(
            ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
            t
          ),
          { offset: l, spacing: d } = this.options,
          c = (a + s) / 2,
          h = (u + o + d + l) / 2;
        return { x: i + Math.cos(c) * h, y: n + Math.sin(c) * h };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        let { options: i, circumference: n } = this,
          a = (i.offset || 0) / 4,
          s = (i.spacing || 0) / 2,
          u = i.circular;
        if (
          ((this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0),
          (this.fullCircles = n > f.TAU ? Math.floor(n / f.TAU) : 0),
          n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
        )
          return;
        t.save();
        let o = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(o) * a, Math.sin(o) * a);
        let l = 1 - Math.sin(Math.min(f.PI, n || 0)),
          d = a * l;
        (t.fillStyle = i.backgroundColor),
          (t.strokeStyle = i.borderColor),
          tte(t, this, d, s, u),
          rte(t, this, d, s, u),
          t.restore();
      }
    };
    A(Dt, "id", "arc"),
      A(Dt, "defaults", {
        borderAlign: "center",
        borderColor: "#fff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0,
      }),
      A(Dt, "defaultRoutes", { backgroundColor: "backgroundColor" }),
      A(Dt, "descriptors", {
        _scriptable: !0,
        _indexable: (t) => t !== "borderDash",
      });
    function AT(r, e, t = e) {
      (r.lineCap = f.valueOrDefault(t.borderCapStyle, e.borderCapStyle)),
        r.setLineDash(f.valueOrDefault(t.borderDash, e.borderDash)),
        (r.lineDashOffset = f.valueOrDefault(
          t.borderDashOffset,
          e.borderDashOffset
        )),
        (r.lineJoin = f.valueOrDefault(t.borderJoinStyle, e.borderJoinStyle)),
        (r.lineWidth = f.valueOrDefault(t.borderWidth, e.borderWidth)),
        (r.strokeStyle = f.valueOrDefault(t.borderColor, e.borderColor));
    }
    function ite(r, e, t) {
      r.lineTo(t.x, t.y);
    }
    function nte(r) {
      return r.stepped
        ? f._steppedLineTo
        : r.tension || r.cubicInterpolationMode === "monotone"
        ? f._bezierCurveTo
        : ite;
    }
    function ET(r, e, t = {}) {
      let i = r.length,
        { start: n = 0, end: a = i - 1 } = t,
        { start: s, end: u } = e,
        o = Math.max(n, s),
        l = Math.min(a, u),
        d = (n < s && a < s) || (n > u && a > u);
      return {
        count: i,
        start: o,
        loop: e.loop,
        ilen: l < o && !d ? i + l - o : l - o,
      };
    }
    function ate(r, e, t, i) {
      let { points: n, options: a } = e,
        { count: s, start: u, loop: o, ilen: l } = ET(n, t, i),
        d = nte(a),
        { move: c = !0, reverse: h } = i || {},
        v,
        p,
        m;
      for (v = 0; v <= l; ++v)
        (p = n[(u + (h ? l - v : v)) % s]),
          !p.skip &&
            (c ? (r.moveTo(p.x, p.y), (c = !1)) : d(r, m, p, h, a.stepped),
            (m = p));
      return (
        o && ((p = n[(u + (h ? l : 0)) % s]), d(r, m, p, h, a.stepped)), !!o
      );
    }
    function ste(r, e, t, i) {
      let n = e.points,
        { count: a, start: s, ilen: u } = ET(n, t, i),
        { move: o = !0, reverse: l } = i || {},
        d = 0,
        c = 0,
        h,
        v,
        p,
        m,
        q,
        O,
        P = (C) => (s + (l ? u - C : C)) % a,
        w = () => {
          m !== q && (r.lineTo(d, q), r.lineTo(d, m), r.lineTo(d, O));
        };
      for (o && ((v = n[P(0)]), r.moveTo(v.x, v.y)), h = 0; h <= u; ++h) {
        if (((v = n[P(h)]), v.skip)) continue;
        let C = v.x,
          k = v.y,
          R = C | 0;
        R === p
          ? (k < m ? (m = k) : k > q && (q = k), (d = (c * d + C) / ++c))
          : (w(), r.lineTo(C, k), (p = R), (c = 0), (m = q = k)),
          (O = k);
      }
      w();
    }
    function vg(r) {
      let e = r.options,
        t = e.borderDash && e.borderDash.length;
      return !r._decimated &&
        !r._loop &&
        !e.tension &&
        e.cubicInterpolationMode !== "monotone" &&
        !e.stepped &&
        !t
        ? ste
        : ate;
    }
    function ute(r) {
      return r.stepped
        ? f._steppedInterpolation
        : r.tension || r.cubicInterpolationMode === "monotone"
        ? f._bezierInterpolation
        : f._pointInLine;
    }
    function ote(r, e, t, i) {
      let n = e._path;
      n || ((n = e._path = new Path2D()), e.path(n, t, i) && n.closePath()),
        AT(r, e.options),
        r.stroke(n);
    }
    function lte(r, e, t, i) {
      let { segments: n, options: a } = e,
        s = vg(e);
      for (let u of n)
        AT(r, a, u.style),
          r.beginPath(),
          s(r, e, u, { start: t, end: t + i - 1 }) && r.closePath(),
          r.stroke();
    }
    var dte = typeof Path2D == "function";
    function fte(r, e, t, i) {
      dte && !e.options.segment ? ote(r, e, t, i) : lte(r, e, t, i);
    }
    var Le = class extends Pe {
      constructor(e) {
        super(),
          (this.animated = !0),
          (this.options = void 0),
          (this._chart = void 0),
          (this._loop = void 0),
          (this._fullLoop = void 0),
          (this._path = void 0),
          (this._points = void 0),
          (this._segments = void 0),
          (this._decimated = !1),
          (this._pointsUpdated = !1),
          (this._datasetIndex = void 0),
          e && Object.assign(this, e);
      }
      updateControlPoints(e, t) {
        let i = this.options;
        if (
          (i.tension || i.cubicInterpolationMode === "monotone") &&
          !i.stepped &&
          !this._pointsUpdated
        ) {
          let n = i.spanGaps ? this._loop : this._fullLoop;
          f._updateBezierControlPoints(this._points, i, e, n, t),
            (this._pointsUpdated = !0);
        }
      }
      set points(e) {
        (this._points = e),
          delete this._segments,
          delete this._path,
          (this._pointsUpdated = !1);
      }
      get points() {
        return this._points;
      }
      get segments() {
        return (
          this._segments ||
          (this._segments = f._computeSegments(this, this.options.segment))
        );
      }
      first() {
        let e = this.segments,
          t = this.points;
        return e.length && t[e[0].start];
      }
      last() {
        let e = this.segments,
          t = this.points,
          i = e.length;
        return i && t[e[i - 1].end];
      }
      interpolate(e, t) {
        let i = this.options,
          n = e[t],
          a = this.points,
          s = f._boundSegments(this, { property: t, start: n, end: n });
        if (!s.length) return;
        let u = [],
          o = ute(i),
          l,
          d;
        for (l = 0, d = s.length; l < d; ++l) {
          let { start: c, end: h } = s[l],
            v = a[c],
            p = a[h];
          if (v === p) {
            u.push(v);
            continue;
          }
          let m = Math.abs((n - v[t]) / (p[t] - v[t])),
            q = o(v, p, m, i.stepped);
          (q[t] = e[t]), u.push(q);
        }
        return u.length === 1 ? u[0] : u;
      }
      pathSegment(e, t, i) {
        return vg(this)(e, this, t, i);
      }
      path(e, t, i) {
        let n = this.segments,
          a = vg(this),
          s = this._loop;
        (t = t || 0), (i = i || this.points.length - t);
        for (let u of n) s &= a(e, this, u, { start: t, end: t + i - 1 });
        return !!s;
      }
      draw(e, t, i, n) {
        let a = this.options || {};
        (this.points || []).length &&
          a.borderWidth &&
          (e.save(), fte(e, this, i, n), e.restore()),
          this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
      }
    };
    A(Le, "id", "line"),
      A(Le, "defaults", {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0,
      }),
      A(Le, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      }),
      A(Le, "descriptors", {
        _scriptable: !0,
        _indexable: (e) => e !== "borderDash" && e !== "fill",
      });
    function K2(r, e, t, i) {
      let n = r.options,
        { [t]: a } = r.getProps([t], i);
      return Math.abs(e - a) < n.radius + n.hitRadius;
    }
    var nr = class extends Pe {
      constructor(t) {
        super();
        A(this, "parsed");
        A(this, "skip");
        A(this, "stop");
        (this.options = void 0),
          (this.parsed = void 0),
          (this.skip = void 0),
          (this.stop = void 0),
          t && Object.assign(this, t);
      }
      inRange(t, i, n) {
        let a = this.options,
          { x: s, y: u } = this.getProps(["x", "y"], n);
        return (
          Math.pow(t - s, 2) + Math.pow(i - u, 2) <
          Math.pow(a.hitRadius + a.radius, 2)
        );
      }
      inXRange(t, i) {
        return K2(this, t, "x", i);
      }
      inYRange(t, i) {
        return K2(this, t, "y", i);
      }
      getCenterPoint(t) {
        let { x: i, y: n } = this.getProps(["x", "y"], t);
        return { x: i, y: n };
      }
      size(t) {
        t = t || this.options || {};
        let i = t.radius || 0;
        i = Math.max(i, (i && t.hoverRadius) || 0);
        let n = (i && t.borderWidth) || 0;
        return (i + n) * 2;
      }
      draw(t, i) {
        let n = this.options;
        this.skip ||
          n.radius < 0.1 ||
          !f._isPointInArea(this, i, this.size(n) / 2) ||
          ((t.strokeStyle = n.borderColor),
          (t.lineWidth = n.borderWidth),
          (t.fillStyle = n.backgroundColor),
          f.drawPoint(t, n, this.x, this.y));
      }
      getRange() {
        let t = this.options || {};
        return t.radius + t.hitRadius;
      }
    };
    A(nr, "id", "point"),
      A(nr, "defaults", {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0,
      }),
      A(nr, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      });
    function NT(r, e) {
      let {
          x: t,
          y: i,
          base: n,
          width: a,
          height: s,
        } = r.getProps(["x", "y", "base", "width", "height"], e),
        u,
        o,
        l,
        d,
        c;
      return (
        r.horizontal
          ? ((c = s / 2),
            (u = Math.min(t, n)),
            (o = Math.max(t, n)),
            (l = i - c),
            (d = i + c))
          : ((c = a / 2),
            (u = t - c),
            (o = t + c),
            (l = Math.min(i, n)),
            (d = Math.max(i, n))),
        { left: u, top: l, right: o, bottom: d }
      );
    }
    function kt(r, e, t, i) {
      return r ? 0 : f._limitValue(e, t, i);
    }
    function cte(r, e, t) {
      let i = r.options.borderWidth,
        n = r.borderSkipped,
        a = f.toTRBL(i);
      return {
        t: kt(n.top, a.top, 0, t),
        r: kt(n.right, a.right, 0, e),
        b: kt(n.bottom, a.bottom, 0, t),
        l: kt(n.left, a.left, 0, e),
      };
    }
    function hte(r, e, t) {
      let { enableBorderRadius: i } = r.getProps(["enableBorderRadius"]),
        n = r.options.borderRadius,
        a = f.toTRBLCorners(n),
        s = Math.min(e, t),
        u = r.borderSkipped,
        o = i || f.isObject(n);
      return {
        topLeft: kt(!o || u.top || u.left, a.topLeft, 0, s),
        topRight: kt(!o || u.top || u.right, a.topRight, 0, s),
        bottomLeft: kt(!o || u.bottom || u.left, a.bottomLeft, 0, s),
        bottomRight: kt(!o || u.bottom || u.right, a.bottomRight, 0, s),
      };
    }
    function vte(r) {
      let e = NT(r),
        t = e.right - e.left,
        i = e.bottom - e.top,
        n = cte(r, t / 2, i / 2),
        a = hte(r, t / 2, i / 2);
      return {
        outer: { x: e.left, y: e.top, w: t, h: i, radius: a },
        inner: {
          x: e.left + n.l,
          y: e.top + n.t,
          w: t - n.l - n.r,
          h: i - n.t - n.b,
          radius: {
            topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)),
            topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)),
            bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)),
            bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r)),
          },
        },
      };
    }
    function ag(r, e, t, i) {
      let n = e === null,
        a = t === null,
        u = r && !(n && a) && NT(r, i);
      return (
        u &&
        (n || f._isBetween(e, u.left, u.right)) &&
        (a || f._isBetween(t, u.top, u.bottom))
      );
    }
    function gte(r) {
      return r.topLeft || r.topRight || r.bottomLeft || r.bottomRight;
    }
    function pte(r, e) {
      r.rect(e.x, e.y, e.w, e.h);
    }
    function sg(r, e, t = {}) {
      let i = r.x !== t.x ? -e : 0,
        n = r.y !== t.y ? -e : 0,
        a = (r.x + r.w !== t.x + t.w ? e : 0) - i,
        s = (r.y + r.h !== t.y + t.h ? e : 0) - n;
      return {
        x: r.x + i,
        y: r.y + n,
        w: r.w + a,
        h: r.h + s,
        radius: r.radius,
      };
    }
    var ar = class extends Pe {
      constructor(e) {
        super(),
          (this.options = void 0),
          (this.horizontal = void 0),
          (this.base = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this.inflateAmount = void 0),
          e && Object.assign(this, e);
      }
      draw(e) {
        let {
            inflateAmount: t,
            options: { borderColor: i, backgroundColor: n },
          } = this,
          { inner: a, outer: s } = vte(this),
          u = gte(s.radius) ? f.addRoundedRectPath : pte;
        e.save(),
          (s.w !== a.w || s.h !== a.h) &&
            (e.beginPath(),
            u(e, sg(s, t, a)),
            e.clip(),
            u(e, sg(a, -t, s)),
            (e.fillStyle = i),
            e.fill("evenodd")),
          e.beginPath(),
          u(e, sg(a, t)),
          (e.fillStyle = n),
          e.fill(),
          e.restore();
      }
      inRange(e, t, i) {
        return ag(this, e, t, i);
      }
      inXRange(e, t) {
        return ag(this, e, null, t);
      }
      inYRange(e, t) {
        return ag(this, null, e, t);
      }
      getCenterPoint(e) {
        let {
          x: t,
          y: i,
          base: n,
          horizontal: a,
        } = this.getProps(["x", "y", "base", "horizontal"], e);
        return { x: a ? (t + n) / 2 : t, y: a ? i : (i + n) / 2 };
      }
      getRange(e) {
        return e === "x" ? this.width / 2 : this.height / 2;
      }
    };
    A(ar, "id", "bar"),
      A(ar, "defaults", {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0,
      }),
      A(ar, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      });
    var LT = Object.freeze({
        __proto__: null,
        ArcElement: Dt,
        BarElement: ar,
        LineElement: Le,
        PointElement: nr,
      }),
      gg = [
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      G2 = gg.map((r) => r.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
    function FT(r) {
      return gg[r % gg.length];
    }
    function WT(r) {
      return G2[r % G2.length];
    }
    function _te(r, e) {
      return (r.borderColor = FT(e)), (r.backgroundColor = WT(e)), ++e;
    }
    function mte(r, e) {
      return (r.backgroundColor = r.data.map(() => FT(e++))), e;
    }
    function bte(r, e) {
      return (r.backgroundColor = r.data.map(() => WT(e++))), e;
    }
    function xte(r) {
      let e = 0;
      return (t, i) => {
        let n = r.getDatasetMeta(i).controller;
        n instanceof $e
          ? (e = mte(t, e))
          : n instanceof Tt
          ? (e = bte(t, e))
          : n && (e = _te(t, e));
      };
    }
    function Z2(r) {
      let e;
      for (e in r) if (r[e].borderColor || r[e].backgroundColor) return !0;
      return !1;
    }
    function yte(r) {
      return r && (r.borderColor || r.backgroundColor);
    }
    var YT = {
      id: "colors",
      defaults: { enabled: !0, forceOverride: !1 },
      beforeLayout(r, e, t) {
        if (!t.enabled) return;
        let {
            data: { datasets: i },
            options: n,
          } = r.config,
          { elements: a } = n;
        if (!t.forceOverride && (Z2(i) || yte(n) || (a && Z2(a)))) return;
        let s = xte(r);
        i.forEach(s);
      },
    };
    function qte(r, e, t, i, n) {
      let a = n.samples || i;
      if (a >= t) return r.slice(e, e + t);
      let s = [],
        u = (t - 2) / (a - 2),
        o = 0,
        l = e + t - 1,
        d = e,
        c,
        h,
        v,
        p,
        m;
      for (s[o++] = r[d], c = 0; c < a - 2; c++) {
        let q = 0,
          O = 0,
          P,
          w = Math.floor((c + 1) * u) + 1 + e,
          C = Math.min(Math.floor((c + 2) * u) + 1, t) + e,
          k = C - w;
        for (P = w; P < C; P++) (q += r[P].x), (O += r[P].y);
        (q /= k), (O /= k);
        let R = Math.floor(c * u) + 1 + e,
          I = Math.min(Math.floor((c + 1) * u) + 1, t) + e,
          { x: j, y: L } = r[d];
        for (v = p = -1, P = R; P < I; P++)
          (p = 0.5 * Math.abs((j - q) * (r[P].y - L) - (j - r[P].x) * (O - L))),
            p > v && ((v = p), (h = r[P]), (m = P));
        (s[o++] = h), (d = m);
      }
      return (s[o++] = r[l]), s;
    }
    function Ote(r, e, t, i) {
      let n = 0,
        a = 0,
        s,
        u,
        o,
        l,
        d,
        c,
        h,
        v,
        p,
        m,
        q = [],
        O = e + t - 1,
        P = r[e].x,
        C = r[O].x - P;
      for (s = e; s < e + t; ++s) {
        (u = r[s]), (o = ((u.x - P) / C) * i), (l = u.y);
        let k = o | 0;
        if (k === d)
          l < p ? ((p = l), (c = s)) : l > m && ((m = l), (h = s)),
            (n = (a * n + u.x) / ++a);
        else {
          let R = s - 1;
          if (!f.isNullOrUndef(c) && !f.isNullOrUndef(h)) {
            let I = Math.min(c, h),
              j = Math.max(c, h);
            I !== v && I !== R && q.push(jn(In({}, r[I]), { x: n })),
              j !== v && j !== R && q.push(jn(In({}, r[j]), { x: n }));
          }
          s > 0 && R !== v && q.push(r[R]),
            q.push(u),
            (d = k),
            (a = 0),
            (p = m = l),
            (c = h = v = s);
        }
      }
      return q;
    }
    function HT(r) {
      if (r._decimated) {
        let e = r._data;
        delete r._decimated,
          delete r._data,
          Object.defineProperty(r, "data", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: e,
          });
      }
    }
    function J2(r) {
      r.data.datasets.forEach((e) => {
        HT(e);
      });
    }
    function Pte(r, e) {
      let t = e.length,
        i = 0,
        n,
        { iScale: a } = r,
        { min: s, max: u, minDefined: o, maxDefined: l } = a.getUserBounds();
      return (
        o && (i = f._limitValue(f._lookupByKey(e, a.axis, s).lo, 0, t - 1)),
        l
          ? (n = f._limitValue(f._lookupByKey(e, a.axis, u).hi + 1, i, t) - i)
          : (n = t - i),
        { start: i, count: n }
      );
    }
    var zT = {
      id: "decimation",
      defaults: { algorithm: "min-max", enabled: !1 },
      beforeElementsUpdate: (r, e, t) => {
        if (!t.enabled) {
          J2(r);
          return;
        }
        let i = r.width;
        r.data.datasets.forEach((n, a) => {
          let { _data: s, indexAxis: u } = n,
            o = r.getDatasetMeta(a),
            l = s || n.data;
          if (
            f.resolve([u, r.options.indexAxis]) === "y" ||
            !o.controller.supportsDecimation
          )
            return;
          let d = r.scales[o.xAxisID];
          if ((d.type !== "linear" && d.type !== "time") || r.options.parsing)
            return;
          let { start: c, count: h } = Pte(o, l),
            v = t.threshold || 4 * i;
          if (h <= v) {
            HT(n);
            return;
          }
          f.isNullOrUndef(s) &&
            ((n._data = l),
            delete n.data,
            Object.defineProperty(n, "data", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this._decimated;
              },
              set: function (m) {
                this._data = m;
              },
            }));
          let p;
          switch (t.algorithm) {
            case "lttb":
              p = qte(l, c, h, i, t);
              break;
            case "min-max":
              p = Ote(l, c, h, i);
              break;
            default:
              throw new Error(
                `Unsupported decimation algorithm '${t.algorithm}'`
              );
          }
          n._decimated = p;
        });
      },
      destroy(r) {
        J2(r);
      },
    };
    function Mte(r, e, t) {
      let i = r.segments,
        n = r.points,
        a = e.points,
        s = [];
      for (let u of i) {
        let { start: o, end: l } = u;
        l = mg(o, l, n);
        let d = pg(t, n[o], n[l], u.loop);
        if (!e.segments) {
          s.push({ source: u, target: d, start: n[o], end: n[l] });
          continue;
        }
        let c = f._boundSegments(e, d);
        for (let h of c) {
          let v = pg(t, a[h.start], a[h.end], h.loop),
            p = f._boundSegment(u, n, v);
          for (let m of p)
            s.push({
              source: m,
              target: h,
              start: { [t]: eT(d, v, "start", Math.max) },
              end: { [t]: eT(d, v, "end", Math.min) },
            });
        }
      }
      return s;
    }
    function pg(r, e, t, i) {
      if (i) return;
      let n = e[r],
        a = t[r];
      return (
        r === "angle" &&
          ((n = f._normalizeAngle(n)), (a = f._normalizeAngle(a))),
        { property: r, start: n, end: a }
      );
    }
    function Dte(r, e) {
      let { x: t = null, y: i = null } = r || {},
        n = e.points,
        a = [];
      return (
        e.segments.forEach(({ start: s, end: u }) => {
          u = mg(s, u, n);
          let o = n[s],
            l = n[u];
          i !== null
            ? (a.push({ x: o.x, y: i }), a.push({ x: l.x, y: i }))
            : t !== null &&
              (a.push({ x: t, y: o.y }), a.push({ x: t, y: l.y }));
        }),
        a
      );
    }
    function mg(r, e, t) {
      for (; e > r; e--) {
        let i = t[e];
        if (!isNaN(i.x) && !isNaN(i.y)) break;
      }
      return e;
    }
    function eT(r, e, t, i) {
      return r && e ? i(r[t], e[t]) : r ? r[t] : e ? e[t] : 0;
    }
    function BT(r, e) {
      let t = [],
        i = !1;
      return (
        f.isArray(r) ? ((i = !0), (t = r)) : (t = Dte(r, e)),
        t.length
          ? new Le({
              points: t,
              options: { tension: 0 },
              _loop: i,
              _fullLoop: i,
            })
          : null
      );
    }
    function tT(r) {
      return r && r.fill !== !1;
    }
    function wte(r, e, t) {
      let n = r[e].fill,
        a = [e],
        s;
      if (!t) return n;
      for (; n !== !1 && a.indexOf(n) === -1; ) {
        if (!f.isNumberFinite(n)) return n;
        if (((s = r[n]), !s)) return !1;
        if (s.visible) return n;
        a.push(n), (n = s.fill);
      }
      return !1;
    }
    function Tte(r, e, t) {
      let i = Rte(r);
      if (f.isObject(i)) return isNaN(i.value) ? !1 : i;
      let n = parseFloat(i);
      return f.isNumberFinite(n) && Math.floor(n) === n
        ? kte(i[0], e, n, t)
        : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
    }
    function kte(r, e, t, i) {
      return (
        (r === "-" || r === "+") && (t = e + t),
        t === e || t < 0 || t >= i ? !1 : t
      );
    }
    function Ste(r, e) {
      let t = null;
      return (
        r === "start"
          ? (t = e.bottom)
          : r === "end"
          ? (t = e.top)
          : f.isObject(r)
          ? (t = e.getPixelForValue(r.value))
          : e.getBasePixel && (t = e.getBasePixel()),
        t
      );
    }
    function Cte(r, e, t) {
      let i;
      return (
        r === "start"
          ? (i = t)
          : r === "end"
          ? (i = e.options.reverse ? e.min : e.max)
          : f.isObject(r)
          ? (i = r.value)
          : (i = e.getBaseValue()),
        i
      );
    }
    function Rte(r) {
      let e = r.options,
        t = e.fill,
        i = f.valueOrDefault(t && t.target, t);
      return (
        i === void 0 && (i = !!e.backgroundColor),
        i === !1 || i === null ? !1 : i === !0 ? "origin" : i
      );
    }
    function Ite(r) {
      let { scale: e, index: t, line: i } = r,
        n = [],
        a = i.segments,
        s = i.points,
        u = jte(e, t);
      u.push(BT({ x: null, y: e.bottom }, i));
      for (let o = 0; o < a.length; o++) {
        let l = a[o];
        for (let d = l.start; d <= l.end; d++) Ate(n, s[d], u);
      }
      return new Le({ points: n, options: {} });
    }
    function jte(r, e) {
      let t = [],
        i = r.getMatchingVisibleMetas("line");
      for (let n = 0; n < i.length; n++) {
        let a = i[n];
        if (a.index === e) break;
        a.hidden || t.unshift(a.dataset);
      }
      return t;
    }
    function Ate(r, e, t) {
      let i = [];
      for (let n = 0; n < t.length; n++) {
        let a = t[n],
          { first: s, last: u, point: o } = Ete(a, e, "x");
        if (!(!o || (s && u))) {
          if (s) i.unshift(o);
          else if ((r.push(o), !u)) break;
        }
      }
      r.push(...i);
    }
    function Ete(r, e, t) {
      let i = r.interpolate(e, t);
      if (!i) return {};
      let n = i[t],
        a = r.segments,
        s = r.points,
        u = !1,
        o = !1;
      for (let l = 0; l < a.length; l++) {
        let d = a[l],
          c = s[d.start][t],
          h = s[d.end][t];
        if (f._isBetween(n, c, h)) {
          (u = n === c), (o = n === h);
          break;
        }
      }
      return { first: u, last: o, point: i };
    }
    var Nf = class {
      constructor(e) {
        (this.x = e.x), (this.y = e.y), (this.radius = e.radius);
      }
      pathSegment(e, t, i) {
        let { x: n, y: a, radius: s } = this;
        return (
          (t = t || { start: 0, end: f.TAU }),
          e.arc(n, a, s, t.end, t.start, !0),
          !i.bounds
        );
      }
      interpolate(e) {
        let { x: t, y: i, radius: n } = this,
          a = e.angle;
        return { x: t + Math.cos(a) * n, y: i + Math.sin(a) * n, angle: a };
      }
    };
    function Nte(r) {
      let { chart: e, fill: t, line: i } = r;
      if (f.isNumberFinite(t)) return Lte(e, t);
      if (t === "stack") return Ite(r);
      if (t === "shape") return !0;
      let n = Fte(r);
      return n instanceof Nf ? n : BT(n, i);
    }
    function Lte(r, e) {
      let t = r.getDatasetMeta(e);
      return t && r.isDatasetVisible(e) ? t.dataset : null;
    }
    function Fte(r) {
      return (r.scale || {}).getPointPositionForValue ? Yte(r) : Wte(r);
    }
    function Wte(r) {
      let { scale: e = {}, fill: t } = r,
        i = Ste(t, e);
      if (f.isNumberFinite(i)) {
        let n = e.isHorizontal();
        return { x: n ? i : null, y: n ? null : i };
      }
      return null;
    }
    function Yte(r) {
      let { scale: e, fill: t } = r,
        i = e.options,
        n = e.getLabels().length,
        a = i.reverse ? e.max : e.min,
        s = Cte(t, e, a),
        u = [];
      if (i.grid.circular) {
        let o = e.getPointPositionForValue(0, a);
        return new Nf({
          x: o.x,
          y: o.y,
          radius: e.getDistanceFromCenterForValue(s),
        });
      }
      for (let o = 0; o < n; ++o) u.push(e.getPointPositionForValue(o, s));
      return u;
    }
    function ug(r, e, t) {
      let i = Nte(e),
        { line: n, scale: a, axis: s } = e,
        u = n.options,
        o = u.fill,
        l = u.backgroundColor,
        { above: d = l, below: c = l } = o || {};
      i &&
        n.points.length &&
        (f.clipArea(r, t),
        Hte(r, {
          line: n,
          target: i,
          above: d,
          below: c,
          area: t,
          scale: a,
          axis: s,
        }),
        f.unclipArea(r));
    }
    function Hte(r, e) {
      let { line: t, target: i, above: n, below: a, area: s, scale: u } = e,
        o = t._loop ? "angle" : e.axis;
      r.save(),
        o === "x" &&
          a !== n &&
          (rT(r, i, s.top),
          iT(r, { line: t, target: i, color: n, scale: u, property: o }),
          r.restore(),
          r.save(),
          rT(r, i, s.bottom)),
        iT(r, { line: t, target: i, color: a, scale: u, property: o }),
        r.restore();
    }
    function rT(r, e, t) {
      let { segments: i, points: n } = e,
        a = !0,
        s = !1;
      r.beginPath();
      for (let u of i) {
        let { start: o, end: l } = u,
          d = n[o],
          c = n[mg(o, l, n)];
        a
          ? (r.moveTo(d.x, d.y), (a = !1))
          : (r.lineTo(d.x, t), r.lineTo(d.x, d.y)),
          (s = !!e.pathSegment(r, u, { move: s })),
          s ? r.closePath() : r.lineTo(c.x, t);
      }
      r.lineTo(e.first().x, t), r.closePath(), r.clip();
    }
    function iT(r, e) {
      let { line: t, target: i, property: n, color: a, scale: s } = e,
        u = Mte(t, i, n);
      for (let { source: o, target: l, start: d, end: c } of u) {
        let { style: { backgroundColor: h = a } = {} } = o,
          v = i !== !0;
        r.save(), (r.fillStyle = h), zte(r, s, v && pg(n, d, c)), r.beginPath();
        let p = !!t.pathSegment(r, o),
          m;
        if (v) {
          p ? r.closePath() : nT(r, i, c, n);
          let q = !!i.pathSegment(r, l, { move: p, reverse: !0 });
          (m = p && q), m || nT(r, i, d, n);
        }
        r.closePath(), r.fill(m ? "evenodd" : "nonzero"), r.restore();
      }
    }
    function zte(r, e, t) {
      let { top: i, bottom: n } = e.chart.chartArea,
        { property: a, start: s, end: u } = t || {};
      a === "x" && (r.beginPath(), r.rect(s, i, u - s, n - i), r.clip());
    }
    function nT(r, e, t, i) {
      let n = e.interpolate(t, i);
      n && r.lineTo(n.x, n.y);
    }
    var UT = {
        id: "filler",
        afterDatasetsUpdate(r, e, t) {
          let i = (r.data.datasets || []).length,
            n = [],
            a,
            s,
            u,
            o;
          for (s = 0; s < i; ++s)
            (a = r.getDatasetMeta(s)),
              (u = a.dataset),
              (o = null),
              u &&
                u.options &&
                u instanceof Le &&
                (o = {
                  visible: r.isDatasetVisible(s),
                  index: s,
                  fill: Tte(u, s, i),
                  chart: r,
                  axis: a.controller.options.indexAxis,
                  scale: a.vScale,
                  line: u,
                }),
              (a.$filler = o),
              n.push(o);
          for (s = 0; s < i; ++s)
            (o = n[s]),
              !(!o || o.fill === !1) && (o.fill = wte(n, s, t.propagate));
        },
        beforeDraw(r, e, t) {
          let i = t.drawTime === "beforeDraw",
            n = r.getSortedVisibleDatasetMetas(),
            a = r.chartArea;
          for (let s = n.length - 1; s >= 0; --s) {
            let u = n[s].$filler;
            !u ||
              (u.line.updateControlPoints(a, u.axis),
              i && u.fill && ug(r.ctx, u, a));
          }
        },
        beforeDatasetsDraw(r, e, t) {
          if (t.drawTime !== "beforeDatasetsDraw") return;
          let i = r.getSortedVisibleDatasetMetas();
          for (let n = i.length - 1; n >= 0; --n) {
            let a = i[n].$filler;
            tT(a) && ug(r.ctx, a, r.chartArea);
          }
        },
        beforeDatasetDraw(r, e, t) {
          let i = e.meta.$filler;
          !tT(i) ||
            t.drawTime !== "beforeDatasetDraw" ||
            ug(r.ctx, i, r.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
      },
      aT = (r, e) => {
        let { boxHeight: t = e, boxWidth: i = e } = r;
        return (
          r.usePointStyle &&
            ((t = Math.min(t, e)), (i = r.pointStyleWidth || Math.min(i, e))),
          { boxWidth: i, boxHeight: t, itemHeight: Math.max(e, t) }
        );
      },
      Bte = (r, e) =>
        r !== null &&
        e !== null &&
        r.datasetIndex === e.datasetIndex &&
        r.index === e.index,
      Lf = class extends Pe {
        constructor(e) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(e, t, i) {
          (this.maxWidth = e),
            (this.maxHeight = t),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          let e = this.options.labels || {},
            t = f.callback(e.generateLabels, [this.chart], this) || [];
          e.filter && (t = t.filter((i) => e.filter(i, this.chart.data))),
            e.sort && (t = t.sort((i, n) => e.sort(i, n, this.chart.data))),
            this.options.reverse && t.reverse(),
            (this.legendItems = t);
        }
        fit() {
          let { options: e, ctx: t } = this;
          if (!e.display) {
            this.width = this.height = 0;
            return;
          }
          let i = e.labels,
            n = f.toFont(i.font),
            a = n.size,
            s = this._computeTitleHeight(),
            { boxWidth: u, itemHeight: o } = aT(i, a),
            l,
            d;
          (t.font = n.string),
            this.isHorizontal()
              ? ((l = this.maxWidth), (d = this._fitRows(s, a, u, o) + 10))
              : ((d = this.maxHeight), (l = this._fitCols(s, n, u, o) + 10)),
            (this.width = Math.min(l, e.maxWidth || this.maxWidth)),
            (this.height = Math.min(d, e.maxHeight || this.maxHeight));
        }
        _fitRows(e, t, i, n) {
          let {
              ctx: a,
              maxWidth: s,
              options: {
                labels: { padding: u },
              },
            } = this,
            o = (this.legendHitBoxes = []),
            l = (this.lineWidths = [0]),
            d = n + u,
            c = e;
          (a.textAlign = "left"), (a.textBaseline = "middle");
          let h = -1,
            v = -d;
          return (
            this.legendItems.forEach((p, m) => {
              let q = i + t / 2 + a.measureText(p.text).width;
              (m === 0 || l[l.length - 1] + q + 2 * u > s) &&
                ((c += d), (l[l.length - (m > 0 ? 0 : 1)] = 0), (v += d), h++),
                (o[m] = { left: 0, top: v, row: h, width: q, height: n }),
                (l[l.length - 1] += q + u);
            }),
            c
          );
        }
        _fitCols(e, t, i, n) {
          let {
              ctx: a,
              maxHeight: s,
              options: {
                labels: { padding: u },
              },
            } = this,
            o = (this.legendHitBoxes = []),
            l = (this.columnSizes = []),
            d = s - e,
            c = u,
            h = 0,
            v = 0,
            p = 0,
            m = 0;
          return (
            this.legendItems.forEach((q, O) => {
              let { itemWidth: P, itemHeight: w } = Ute(i, t, a, q, n);
              O > 0 &&
                v + w + 2 * u > d &&
                ((c += h + u),
                l.push({ width: h, height: v }),
                (p += h + u),
                m++,
                (h = v = 0)),
                (o[O] = { left: p, top: v, col: m, width: P, height: w }),
                (h = Math.max(h, P)),
                (v += w + u);
            }),
            (c += h),
            l.push({ width: h, height: v }),
            c
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          let e = this._computeTitleHeight(),
            {
              legendHitBoxes: t,
              options: {
                align: i,
                labels: { padding: n },
                rtl: a,
              },
            } = this,
            s = f.getRtlAdapter(a, this.left, this.width);
          if (this.isHorizontal()) {
            let u = 0,
              o = f._alignStartEnd(
                i,
                this.left + n,
                this.right - this.lineWidths[u]
              );
            for (let l of t)
              u !== l.row &&
                ((u = l.row),
                (o = f._alignStartEnd(
                  i,
                  this.left + n,
                  this.right - this.lineWidths[u]
                ))),
                (l.top += this.top + e + n),
                (l.left = s.leftForLtr(s.x(o), l.width)),
                (o += l.width + n);
          } else {
            let u = 0,
              o = f._alignStartEnd(
                i,
                this.top + e + n,
                this.bottom - this.columnSizes[u].height
              );
            for (let l of t)
              l.col !== u &&
                ((u = l.col),
                (o = f._alignStartEnd(
                  i,
                  this.top + e + n,
                  this.bottom - this.columnSizes[u].height
                ))),
                (l.top = o),
                (l.left += this.left + n),
                (l.left = s.leftForLtr(s.x(l.left), l.width)),
                (o += l.height + n);
          }
        }
        isHorizontal() {
          return (
            this.options.position === "top" ||
            this.options.position === "bottom"
          );
        }
        draw() {
          if (this.options.display) {
            let e = this.ctx;
            f.clipArea(e, this), this._draw(), f.unclipArea(e);
          }
        }
        _draw() {
          let { options: e, columnSizes: t, lineWidths: i, ctx: n } = this,
            { align: a, labels: s } = e,
            u = f.defaults.color,
            o = f.getRtlAdapter(e.rtl, this.left, this.width),
            l = f.toFont(s.font),
            { padding: d } = s,
            c = l.size,
            h = c / 2,
            v;
          this.drawTitle(),
            (n.textAlign = o.textAlign("left")),
            (n.textBaseline = "middle"),
            (n.lineWidth = 0.5),
            (n.font = l.string);
          let { boxWidth: p, boxHeight: m, itemHeight: q } = aT(s, c),
            O = function (R, I, j) {
              if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
              n.save();
              let L = f.valueOrDefault(j.lineWidth, 1);
              if (
                ((n.fillStyle = f.valueOrDefault(j.fillStyle, u)),
                (n.lineCap = f.valueOrDefault(j.lineCap, "butt")),
                (n.lineDashOffset = f.valueOrDefault(j.lineDashOffset, 0)),
                (n.lineJoin = f.valueOrDefault(j.lineJoin, "miter")),
                (n.lineWidth = L),
                (n.strokeStyle = f.valueOrDefault(j.strokeStyle, u)),
                n.setLineDash(f.valueOrDefault(j.lineDash, [])),
                s.usePointStyle)
              ) {
                let W = {
                    radius: (m * Math.SQRT2) / 2,
                    pointStyle: j.pointStyle,
                    rotation: j.rotation,
                    borderWidth: L,
                  },
                  H = o.xPlus(R, p / 2),
                  U = I + h;
                f.drawPointLegend(n, W, H, U, s.pointStyleWidth && p);
              } else {
                let W = I + Math.max((c - m) / 2, 0),
                  H = o.leftForLtr(R, p),
                  U = f.toTRBLCorners(j.borderRadius);
                n.beginPath(),
                  Object.values(U).some((se) => se !== 0)
                    ? f.addRoundedRectPath(n, {
                        x: H,
                        y: W,
                        w: p,
                        h: m,
                        radius: U,
                      })
                    : n.rect(H, W, p, m),
                  n.fill(),
                  L !== 0 && n.stroke();
              }
              n.restore();
            },
            P = function (R, I, j) {
              f.renderText(n, j.text, R, I + q / 2, l, {
                strikethrough: j.hidden,
                textAlign: o.textAlign(j.textAlign),
              });
            },
            w = this.isHorizontal(),
            C = this._computeTitleHeight();
          w
            ? (v = {
                x: f._alignStartEnd(a, this.left + d, this.right - i[0]),
                y: this.top + d + C,
                line: 0,
              })
            : (v = {
                x: this.left + d,
                y: f._alignStartEnd(
                  a,
                  this.top + C + d,
                  this.bottom - t[0].height
                ),
                line: 0,
              }),
            f.overrideTextDirection(this.ctx, e.textDirection);
          let k = q + d;
          this.legendItems.forEach((R, I) => {
            (n.strokeStyle = R.fontColor), (n.fillStyle = R.fontColor);
            let j = n.measureText(R.text).width,
              L = o.textAlign(R.textAlign || (R.textAlign = s.textAlign)),
              W = p + h + j,
              H = v.x,
              U = v.y;
            o.setWidth(this.width),
              w
                ? I > 0 &&
                  H + W + d > this.right &&
                  ((U = v.y += k),
                  v.line++,
                  (H = v.x =
                    f._alignStartEnd(a, this.left + d, this.right - i[v.line])))
                : I > 0 &&
                  U + k > this.bottom &&
                  ((H = v.x = H + t[v.line].width + d),
                  v.line++,
                  (U = v.y =
                    f._alignStartEnd(
                      a,
                      this.top + C + d,
                      this.bottom - t[v.line].height
                    )));
            let se = o.x(H);
            if (
              (O(se, U, R),
              (H = f._textX(L, H + p + h, w ? H + W : this.right, e.rtl)),
              P(o.x(H), U, R),
              w)
            )
              v.x += W + d;
            else if (typeof R.text != "string") {
              let fe = l.lineHeight;
              v.y += VT(R, fe) + d;
            } else v.y += k;
          }),
            f.restoreTextDirection(this.ctx, e.textDirection);
        }
        drawTitle() {
          let e = this.options,
            t = e.title,
            i = f.toFont(t.font),
            n = f.toPadding(t.padding);
          if (!t.display) return;
          let a = f.getRtlAdapter(e.rtl, this.left, this.width),
            s = this.ctx,
            u = t.position,
            o = i.size / 2,
            l = n.top + o,
            d,
            c = this.left,
            h = this.width;
          if (this.isHorizontal())
            (h = Math.max(...this.lineWidths)),
              (d = this.top + l),
              (c = f._alignStartEnd(e.align, c, this.right - h));
          else {
            let p = this.columnSizes.reduce((m, q) => Math.max(m, q.height), 0);
            d =
              l +
              f._alignStartEnd(
                e.align,
                this.top,
                this.bottom - p - e.labels.padding - this._computeTitleHeight()
              );
          }
          let v = f._alignStartEnd(u, c, c + h);
          (s.textAlign = a.textAlign(f._toLeftRightCenter(u))),
            (s.textBaseline = "middle"),
            (s.strokeStyle = t.color),
            (s.fillStyle = t.color),
            (s.font = i.string),
            f.renderText(s, t.text, v, d, i);
        }
        _computeTitleHeight() {
          let e = this.options.title,
            t = f.toFont(e.font),
            i = f.toPadding(e.padding);
          return e.display ? t.lineHeight + i.height : 0;
        }
        _getLegendItemAt(e, t) {
          let i, n, a;
          if (
            f._isBetween(e, this.left, this.right) &&
            f._isBetween(t, this.top, this.bottom)
          ) {
            for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
              if (
                ((n = a[i]),
                f._isBetween(e, n.left, n.left + n.width) &&
                  f._isBetween(t, n.top, n.top + n.height))
              )
                return this.legendItems[i];
          }
          return null;
        }
        handleEvent(e) {
          let t = this.options;
          if (!Qte(e.type, t)) return;
          let i = this._getLegendItemAt(e.x, e.y);
          if (e.type === "mousemove" || e.type === "mouseout") {
            let n = this._hoveredItem,
              a = Bte(n, i);
            n && !a && f.callback(t.onLeave, [e, n, this], this),
              (this._hoveredItem = i),
              i && !a && f.callback(t.onHover, [e, i, this], this);
          } else i && f.callback(t.onClick, [e, i, this], this);
        }
      };
    function Ute(r, e, t, i, n) {
      let a = Vte(i, r, e, t),
        s = $te(n, i, e.lineHeight);
      return { itemWidth: a, itemHeight: s };
    }
    function Vte(r, e, t, i) {
      let n = r.text;
      return (
        n &&
          typeof n != "string" &&
          (n = n.reduce((a, s) => (a.length > s.length ? a : s))),
        e + t.size / 2 + i.measureText(n).width
      );
    }
    function $te(r, e, t) {
      let i = r;
      return typeof e.text != "string" && (i = VT(e, t)), i;
    }
    function VT(r, e) {
      let t = r.text ? r.text.length : 0;
      return e * t;
    }
    function Qte(r, e) {
      return !!(
        ((r === "mousemove" || r === "mouseout") && (e.onHover || e.onLeave)) ||
        (e.onClick && (r === "click" || r === "mouseup"))
      );
    }
    var $T = {
        id: "legend",
        _element: Lf,
        start(r, e, t) {
          let i = (r.legend = new Lf({ ctx: r.ctx, options: t, chart: r }));
          he.configure(r, i, t), he.addBox(r, i);
        },
        stop(r) {
          he.removeBox(r, r.legend), delete r.legend;
        },
        beforeUpdate(r, e, t) {
          let i = r.legend;
          he.configure(r, i, t), (i.options = t);
        },
        afterUpdate(r) {
          let e = r.legend;
          e.buildLabels(), e.adjustHitBoxes();
        },
        afterEvent(r, e) {
          e.replay || r.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(r, e, t) {
            let i = e.datasetIndex,
              n = t.chart;
            n.isDatasetVisible(i)
              ? (n.hide(i), (e.hidden = !0))
              : (n.show(i), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (r) => r.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(r) {
              let e = r.data.datasets,
                {
                  labels: {
                    usePointStyle: t,
                    pointStyle: i,
                    textAlign: n,
                    color: a,
                    useBorderRadius: s,
                    borderRadius: u,
                  },
                } = r.legend.options;
              return r._getSortedDatasetMetas().map((o) => {
                let l = o.controller.getStyle(t ? 0 : void 0),
                  d = f.toPadding(l.borderWidth);
                return {
                  text: e[o.index].label,
                  fillStyle: l.backgroundColor,
                  fontColor: a,
                  hidden: !o.visible,
                  lineCap: l.borderCapStyle,
                  lineDash: l.borderDash,
                  lineDashOffset: l.borderDashOffset,
                  lineJoin: l.borderJoinStyle,
                  lineWidth: (d.width + d.height) / 4,
                  strokeStyle: l.borderColor,
                  pointStyle: i || l.pointStyle,
                  rotation: l.rotation,
                  textAlign: n || l.textAlign,
                  borderRadius: s && (u || l.borderRadius),
                  datasetIndex: o.index,
                };
              }, this);
            },
          },
          title: {
            color: (r) => r.chart.options.color,
            display: !1,
            position: "center",
            text: "",
          },
        },
        descriptors: {
          _scriptable: (r) => !r.startsWith("on"),
          labels: {
            _scriptable: (r) =>
              !["generateLabels", "filter", "sort"].includes(r),
          },
        },
      },
      Mn = class extends Pe {
        constructor(e) {
          super(),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(e, t) {
          let i = this.options;
          if (((this.left = 0), (this.top = 0), !i.display)) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
          }
          (this.width = this.right = e), (this.height = this.bottom = t);
          let n = f.isArray(i.text) ? i.text.length : 1;
          this._padding = f.toPadding(i.padding);
          let a = n * f.toFont(i.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = a) : (this.width = a);
        }
        isHorizontal() {
          let e = this.options.position;
          return e === "top" || e === "bottom";
        }
        _drawArgs(e) {
          let { top: t, left: i, bottom: n, right: a, options: s } = this,
            u = s.align,
            o = 0,
            l,
            d,
            c;
          return (
            this.isHorizontal()
              ? ((d = f._alignStartEnd(u, i, a)), (c = t + e), (l = a - i))
              : (s.position === "left"
                  ? ((d = i + e),
                    (c = f._alignStartEnd(u, n, t)),
                    (o = f.PI * -0.5))
                  : ((d = a - e),
                    (c = f._alignStartEnd(u, t, n)),
                    (o = f.PI * 0.5)),
                (l = n - t)),
            { titleX: d, titleY: c, maxWidth: l, rotation: o }
          );
        }
        draw() {
          let e = this.ctx,
            t = this.options;
          if (!t.display) return;
          let i = f.toFont(t.font),
            a = i.lineHeight / 2 + this._padding.top,
            {
              titleX: s,
              titleY: u,
              maxWidth: o,
              rotation: l,
            } = this._drawArgs(a);
          f.renderText(e, t.text, 0, 0, i, {
            color: t.color,
            maxWidth: o,
            rotation: l,
            textAlign: f._toLeftRightCenter(t.align),
            textBaseline: "middle",
            translation: [s, u],
          });
        }
      };
    function Xte(r, e) {
      let t = new Mn({ ctx: r.ctx, options: e, chart: r });
      he.configure(r, t, e), he.addBox(r, t), (r.titleBlock = t);
    }
    var QT = {
        id: "title",
        _element: Mn,
        start(r, e, t) {
          Xte(r, t);
        },
        stop(r) {
          let e = r.titleBlock;
          he.removeBox(r, e), delete r.titleBlock;
        },
        beforeUpdate(r, e, t) {
          let i = r.titleBlock;
          he.configure(r, i, t), (i.options = t);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "bold" },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      },
      wf = new WeakMap(),
      XT = {
        id: "subtitle",
        start(r, e, t) {
          let i = new Mn({ ctx: r.ctx, options: t, chart: r });
          he.configure(r, i, t), he.addBox(r, i), wf.set(r, i);
        },
        stop(r) {
          he.removeBox(r, wf.get(r)), wf.delete(r);
        },
        beforeUpdate(r, e, t) {
          let i = wf.get(r);
          he.configure(r, i, t), (i.options = t);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "normal" },
          fullSize: !0,
          padding: 0,
          position: "top",
          text: "",
          weight: 1500,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      },
      bn = {
        average(r) {
          if (!r.length) return !1;
          let e,
            t,
            i = 0,
            n = 0,
            a = 0;
          for (e = 0, t = r.length; e < t; ++e) {
            let s = r[e].element;
            if (s && s.hasValue()) {
              let u = s.tooltipPosition();
              (i += u.x), (n += u.y), ++a;
            }
          }
          return { x: i / a, y: n / a };
        },
        nearest(r, e) {
          if (!r.length) return !1;
          let t = e.x,
            i = e.y,
            n = Number.POSITIVE_INFINITY,
            a,
            s,
            u;
          for (a = 0, s = r.length; a < s; ++a) {
            let o = r[a].element;
            if (o && o.hasValue()) {
              let l = o.getCenterPoint(),
                d = f.distanceBetweenPoints(e, l);
              d < n && ((n = d), (u = o));
            }
          }
          if (u) {
            let o = u.tooltipPosition();
            (t = o.x), (i = o.y);
          }
          return { x: t, y: i };
        },
      };
    function Be(r, e) {
      return (
        e && (f.isArray(e) ? Array.prototype.push.apply(r, e) : r.push(e)), r
      );
    }
    function lt(r) {
      return (typeof r == "string" || r instanceof String) &&
        r.indexOf(`
`) > -1
        ? r.split(`
`)
        : r;
    }
    function Kte(r, e) {
      let { element: t, datasetIndex: i, index: n } = e,
        a = r.getDatasetMeta(i).controller,
        { label: s, value: u } = a.getLabelAndValue(n);
      return {
        chart: r,
        label: s,
        parsed: a.getParsed(n),
        raw: r.data.datasets[i].data[n],
        formattedValue: u,
        dataset: a.getDataset(),
        dataIndex: n,
        datasetIndex: i,
        element: t,
      };
    }
    function sT(r, e) {
      let t = r.chart.ctx,
        { body: i, footer: n, title: a } = r,
        { boxWidth: s, boxHeight: u } = e,
        o = f.toFont(e.bodyFont),
        l = f.toFont(e.titleFont),
        d = f.toFont(e.footerFont),
        c = a.length,
        h = n.length,
        v = i.length,
        p = f.toPadding(e.padding),
        m = p.height,
        q = 0,
        O = i.reduce(
          (C, k) => C + k.before.length + k.lines.length + k.after.length,
          0
        );
      if (
        ((O += r.beforeBody.length + r.afterBody.length),
        c &&
          (m +=
            c * l.lineHeight + (c - 1) * e.titleSpacing + e.titleMarginBottom),
        O)
      ) {
        let C = e.displayColors ? Math.max(u, o.lineHeight) : o.lineHeight;
        m += v * C + (O - v) * o.lineHeight + (O - 1) * e.bodySpacing;
      }
      h &&
        (m += e.footerMarginTop + h * d.lineHeight + (h - 1) * e.footerSpacing);
      let P = 0,
        w = function (C) {
          q = Math.max(q, t.measureText(C).width + P);
        };
      return (
        t.save(),
        (t.font = l.string),
        f.each(r.title, w),
        (t.font = o.string),
        f.each(r.beforeBody.concat(r.afterBody), w),
        (P = e.displayColors ? s + 2 + e.boxPadding : 0),
        f.each(i, (C) => {
          f.each(C.before, w), f.each(C.lines, w), f.each(C.after, w);
        }),
        (P = 0),
        (t.font = d.string),
        f.each(r.footer, w),
        t.restore(),
        (q += p.width),
        { width: q, height: m }
      );
    }
    function Gte(r, e) {
      let { y: t, height: i } = e;
      return t < i / 2 ? "top" : t > r.height - i / 2 ? "bottom" : "center";
    }
    function Zte(r, e, t, i) {
      let { x: n, width: a } = i,
        s = t.caretSize + t.caretPadding;
      if (
        (r === "left" && n + a + s > e.width) ||
        (r === "right" && n - a - s < 0)
      )
        return !0;
    }
    function Jte(r, e, t, i) {
      let { x: n, width: a } = t,
        {
          width: s,
          chartArea: { left: u, right: o },
        } = r,
        l = "center";
      return (
        i === "center"
          ? (l = n <= (u + o) / 2 ? "left" : "right")
          : n <= a / 2
          ? (l = "left")
          : n >= s - a / 2 && (l = "right"),
        Zte(l, r, e, t) && (l = "center"),
        l
      );
    }
    function uT(r, e, t) {
      let i = t.yAlign || e.yAlign || Gte(r, t);
      return { xAlign: t.xAlign || e.xAlign || Jte(r, e, t, i), yAlign: i };
    }
    function ere(r, e) {
      let { x: t, width: i } = r;
      return e === "right" ? (t -= i) : e === "center" && (t -= i / 2), t;
    }
    function tre(r, e, t) {
      let { y: i, height: n } = r;
      return (
        e === "top" ? (i += t) : e === "bottom" ? (i -= n + t) : (i -= n / 2), i
      );
    }
    function oT(r, e, t, i) {
      let { caretSize: n, caretPadding: a, cornerRadius: s } = r,
        { xAlign: u, yAlign: o } = t,
        l = n + a,
        {
          topLeft: d,
          topRight: c,
          bottomLeft: h,
          bottomRight: v,
        } = f.toTRBLCorners(s),
        p = ere(e, u),
        m = tre(e, o, l);
      return (
        o === "center"
          ? u === "left"
            ? (p += l)
            : u === "right" && (p -= l)
          : u === "left"
          ? (p -= Math.max(d, h) + n)
          : u === "right" && (p += Math.max(c, v) + n),
        {
          x: f._limitValue(p, 0, i.width - e.width),
          y: f._limitValue(m, 0, i.height - e.height),
        }
      );
    }
    function Tf(r, e, t) {
      let i = f.toPadding(t.padding);
      return e === "center"
        ? r.x + r.width / 2
        : e === "right"
        ? r.x + r.width - i.right
        : r.x + i.left;
    }
    function lT(r) {
      return Be([], lt(r));
    }
    function rre(r, e, t) {
      return f.createContext(r, {
        tooltip: e,
        tooltipItems: t,
        type: "tooltip",
      });
    }
    function dT(r, e) {
      let t =
        e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
      return t ? r.override(t) : r;
    }
    var KT = {
      beforeTitle: f.noop,
      title(r) {
        if (r.length > 0) {
          let e = r[0],
            t = e.chart.data.labels,
            i = t ? t.length : 0;
          if (this && this.options && this.options.mode === "dataset")
            return e.dataset.label || "";
          if (e.label) return e.label;
          if (i > 0 && e.dataIndex < i) return t[e.dataIndex];
        }
        return "";
      },
      afterTitle: f.noop,
      beforeBody: f.noop,
      beforeLabel: f.noop,
      label(r) {
        if (this && this.options && this.options.mode === "dataset")
          return r.label + ": " + r.formattedValue || r.formattedValue;
        let e = r.dataset.label || "";
        e && (e += ": ");
        let t = r.formattedValue;
        return f.isNullOrUndef(t) || (e += t), e;
      },
      labelColor(r) {
        let t = r.chart
          .getDatasetMeta(r.datasetIndex)
          .controller.getStyle(r.dataIndex);
        return {
          borderColor: t.borderColor,
          backgroundColor: t.backgroundColor,
          borderWidth: t.borderWidth,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(r) {
        let t = r.chart
          .getDatasetMeta(r.datasetIndex)
          .controller.getStyle(r.dataIndex);
        return { pointStyle: t.pointStyle, rotation: t.rotation };
      },
      afterLabel: f.noop,
      afterBody: f.noop,
      beforeFooter: f.noop,
      footer: f.noop,
      afterFooter: f.noop,
    };
    function ye(r, e, t, i) {
      let n = r[e].call(t, i);
      return typeof n == "undefined" ? KT[e].call(t, i) : n;
    }
    var xn = class extends Pe {
      constructor(e) {
        super(),
          (this.opacity = 0),
          (this._active = []),
          (this._eventPosition = void 0),
          (this._size = void 0),
          (this._cachedAnimations = void 0),
          (this._tooltipItems = []),
          (this.$animations = void 0),
          (this.$context = void 0),
          (this.chart = e.chart),
          (this.options = e.options),
          (this.dataPoints = void 0),
          (this.title = void 0),
          (this.beforeBody = void 0),
          (this.body = void 0),
          (this.afterBody = void 0),
          (this.footer = void 0),
          (this.xAlign = void 0),
          (this.yAlign = void 0),
          (this.x = void 0),
          (this.y = void 0),
          (this.height = void 0),
          (this.width = void 0),
          (this.caretX = void 0),
          (this.caretY = void 0),
          (this.labelColors = void 0),
          (this.labelPointStyles = void 0),
          (this.labelTextColors = void 0);
      }
      initialize(e) {
        (this.options = e),
          (this._cachedAnimations = void 0),
          (this.$context = void 0);
      }
      _resolveAnimations() {
        let e = this._cachedAnimations;
        if (e) return e;
        let t = this.chart,
          i = this.options.setContext(this.getContext()),
          n = i.enabled && t.options.animation && i.animations,
          a = new yn(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(a)), a;
      }
      getContext() {
        return (
          this.$context ||
          (this.$context = rre(
            this.chart.getContext(),
            this,
            this._tooltipItems
          ))
        );
      }
      getTitle(e, t) {
        let { callbacks: i } = t,
          n = ye(i, "beforeTitle", this, e),
          a = ye(i, "title", this, e),
          s = ye(i, "afterTitle", this, e),
          u = [];
        return (u = Be(u, lt(n))), (u = Be(u, lt(a))), (u = Be(u, lt(s))), u;
      }
      getBeforeBody(e, t) {
        return lT(ye(t.callbacks, "beforeBody", this, e));
      }
      getBody(e, t) {
        let { callbacks: i } = t,
          n = [];
        return (
          f.each(e, (a) => {
            let s = { before: [], lines: [], after: [] },
              u = dT(i, a);
            Be(s.before, lt(ye(u, "beforeLabel", this, a))),
              Be(s.lines, ye(u, "label", this, a)),
              Be(s.after, lt(ye(u, "afterLabel", this, a))),
              n.push(s);
          }),
          n
        );
      }
      getAfterBody(e, t) {
        return lT(ye(t.callbacks, "afterBody", this, e));
      }
      getFooter(e, t) {
        let { callbacks: i } = t,
          n = ye(i, "beforeFooter", this, e),
          a = ye(i, "footer", this, e),
          s = ye(i, "afterFooter", this, e),
          u = [];
        return (u = Be(u, lt(n))), (u = Be(u, lt(a))), (u = Be(u, lt(s))), u;
      }
      _createItems(e) {
        let t = this._active,
          i = this.chart.data,
          n = [],
          a = [],
          s = [],
          u = [],
          o,
          l;
        for (o = 0, l = t.length; o < l; ++o) u.push(Kte(this.chart, t[o]));
        return (
          e.filter && (u = u.filter((d, c, h) => e.filter(d, c, h, i))),
          e.itemSort && (u = u.sort((d, c) => e.itemSort(d, c, i))),
          f.each(u, (d) => {
            let c = dT(e.callbacks, d);
            n.push(ye(c, "labelColor", this, d)),
              a.push(ye(c, "labelPointStyle", this, d)),
              s.push(ye(c, "labelTextColor", this, d));
          }),
          (this.labelColors = n),
          (this.labelPointStyles = a),
          (this.labelTextColors = s),
          (this.dataPoints = u),
          u
        );
      }
      update(e, t) {
        let i = this.options.setContext(this.getContext()),
          n = this._active,
          a,
          s = [];
        if (!n.length) this.opacity !== 0 && (a = { opacity: 0 });
        else {
          let u = bn[i.position].call(this, n, this._eventPosition);
          (s = this._createItems(i)),
            (this.title = this.getTitle(s, i)),
            (this.beforeBody = this.getBeforeBody(s, i)),
            (this.body = this.getBody(s, i)),
            (this.afterBody = this.getAfterBody(s, i)),
            (this.footer = this.getFooter(s, i));
          let o = (this._size = sT(this, i)),
            l = Object.assign({}, u, o),
            d = uT(this.chart, i, l),
            c = oT(i, l, d, this.chart);
          (this.xAlign = d.xAlign),
            (this.yAlign = d.yAlign),
            (a = {
              opacity: 1,
              x: c.x,
              y: c.y,
              width: o.width,
              height: o.height,
              caretX: u.x,
              caretY: u.y,
            });
        }
        (this._tooltipItems = s),
          (this.$context = void 0),
          a && this._resolveAnimations().update(this, a),
          e &&
            i.external &&
            i.external.call(this, {
              chart: this.chart,
              tooltip: this,
              replay: t,
            });
      }
      drawCaret(e, t, i, n) {
        let a = this.getCaretPosition(e, i, n);
        t.lineTo(a.x1, a.y1), t.lineTo(a.x2, a.y2), t.lineTo(a.x3, a.y3);
      }
      getCaretPosition(e, t, i) {
        let { xAlign: n, yAlign: a } = this,
          { caretSize: s, cornerRadius: u } = i,
          {
            topLeft: o,
            topRight: l,
            bottomLeft: d,
            bottomRight: c,
          } = f.toTRBLCorners(u),
          { x: h, y: v } = e,
          { width: p, height: m } = t,
          q,
          O,
          P,
          w,
          C,
          k;
        return (
          a === "center"
            ? ((C = v + m / 2),
              n === "left"
                ? ((q = h), (O = q - s), (w = C + s), (k = C - s))
                : ((q = h + p), (O = q + s), (w = C - s), (k = C + s)),
              (P = q))
            : (n === "left"
                ? (O = h + Math.max(o, d) + s)
                : n === "right"
                ? (O = h + p - Math.max(l, c) - s)
                : (O = this.caretX),
              a === "top"
                ? ((w = v), (C = w - s), (q = O - s), (P = O + s))
                : ((w = v + m), (C = w + s), (q = O + s), (P = O - s)),
              (k = w)),
          { x1: q, x2: O, x3: P, y1: w, y2: C, y3: k }
        );
      }
      drawTitle(e, t, i) {
        let n = this.title,
          a = n.length,
          s,
          u,
          o;
        if (a) {
          let l = f.getRtlAdapter(i.rtl, this.x, this.width);
          for (
            e.x = Tf(this, i.titleAlign, i),
              t.textAlign = l.textAlign(i.titleAlign),
              t.textBaseline = "middle",
              s = f.toFont(i.titleFont),
              u = i.titleSpacing,
              t.fillStyle = i.titleColor,
              t.font = s.string,
              o = 0;
            o < a;
            ++o
          )
            t.fillText(n[o], l.x(e.x), e.y + s.lineHeight / 2),
              (e.y += s.lineHeight + u),
              o + 1 === a && (e.y += i.titleMarginBottom - u);
        }
      }
      _drawColorBox(e, t, i, n, a) {
        let s = this.labelColors[i],
          u = this.labelPointStyles[i],
          { boxHeight: o, boxWidth: l } = a,
          d = f.toFont(a.bodyFont),
          c = Tf(this, "left", a),
          h = n.x(c),
          v = o < d.lineHeight ? (d.lineHeight - o) / 2 : 0,
          p = t.y + v;
        if (a.usePointStyle) {
          let m = {
              radius: Math.min(l, o) / 2,
              pointStyle: u.pointStyle,
              rotation: u.rotation,
              borderWidth: 1,
            },
            q = n.leftForLtr(h, l) + l / 2,
            O = p + o / 2;
          (e.strokeStyle = a.multiKeyBackground),
            (e.fillStyle = a.multiKeyBackground),
            f.drawPoint(e, m, q, O),
            (e.strokeStyle = s.borderColor),
            (e.fillStyle = s.backgroundColor),
            f.drawPoint(e, m, q, O);
        } else {
          (e.lineWidth = f.isObject(s.borderWidth)
            ? Math.max(...Object.values(s.borderWidth))
            : s.borderWidth || 1),
            (e.strokeStyle = s.borderColor),
            e.setLineDash(s.borderDash || []),
            (e.lineDashOffset = s.borderDashOffset || 0);
          let m = n.leftForLtr(h, l),
            q = n.leftForLtr(n.xPlus(h, 1), l - 2),
            O = f.toTRBLCorners(s.borderRadius);
          Object.values(O).some((P) => P !== 0)
            ? (e.beginPath(),
              (e.fillStyle = a.multiKeyBackground),
              f.addRoundedRectPath(e, { x: m, y: p, w: l, h: o, radius: O }),
              e.fill(),
              e.stroke(),
              (e.fillStyle = s.backgroundColor),
              e.beginPath(),
              f.addRoundedRectPath(e, {
                x: q,
                y: p + 1,
                w: l - 2,
                h: o - 2,
                radius: O,
              }),
              e.fill())
            : ((e.fillStyle = a.multiKeyBackground),
              e.fillRect(m, p, l, o),
              e.strokeRect(m, p, l, o),
              (e.fillStyle = s.backgroundColor),
              e.fillRect(q, p + 1, l - 2, o - 2));
        }
        e.fillStyle = this.labelTextColors[i];
      }
      drawBody(e, t, i) {
        let { body: n } = this,
          {
            bodySpacing: a,
            bodyAlign: s,
            displayColors: u,
            boxHeight: o,
            boxWidth: l,
            boxPadding: d,
          } = i,
          c = f.toFont(i.bodyFont),
          h = c.lineHeight,
          v = 0,
          p = f.getRtlAdapter(i.rtl, this.x, this.width),
          m = function (j) {
            t.fillText(j, p.x(e.x + v), e.y + h / 2), (e.y += h + a);
          },
          q = p.textAlign(s),
          O,
          P,
          w,
          C,
          k,
          R,
          I;
        for (
          t.textAlign = s,
            t.textBaseline = "middle",
            t.font = c.string,
            e.x = Tf(this, q, i),
            t.fillStyle = i.bodyColor,
            f.each(this.beforeBody, m),
            v =
              u && q !== "right" ? (s === "center" ? l / 2 + d : l + 2 + d) : 0,
            C = 0,
            R = n.length;
          C < R;
          ++C
        ) {
          for (
            O = n[C],
              P = this.labelTextColors[C],
              t.fillStyle = P,
              f.each(O.before, m),
              w = O.lines,
              u &&
                w.length &&
                (this._drawColorBox(t, e, C, p, i),
                (h = Math.max(c.lineHeight, o))),
              k = 0,
              I = w.length;
            k < I;
            ++k
          )
            m(w[k]), (h = c.lineHeight);
          f.each(O.after, m);
        }
        (v = 0), (h = c.lineHeight), f.each(this.afterBody, m), (e.y -= a);
      }
      drawFooter(e, t, i) {
        let n = this.footer,
          a = n.length,
          s,
          u;
        if (a) {
          let o = f.getRtlAdapter(i.rtl, this.x, this.width);
          for (
            e.x = Tf(this, i.footerAlign, i),
              e.y += i.footerMarginTop,
              t.textAlign = o.textAlign(i.footerAlign),
              t.textBaseline = "middle",
              s = f.toFont(i.footerFont),
              t.fillStyle = i.footerColor,
              t.font = s.string,
              u = 0;
            u < a;
            ++u
          )
            t.fillText(n[u], o.x(e.x), e.y + s.lineHeight / 2),
              (e.y += s.lineHeight + i.footerSpacing);
        }
      }
      drawBackground(e, t, i, n) {
        let { xAlign: a, yAlign: s } = this,
          { x: u, y: o } = e,
          { width: l, height: d } = i,
          {
            topLeft: c,
            topRight: h,
            bottomLeft: v,
            bottomRight: p,
          } = f.toTRBLCorners(n.cornerRadius);
        (t.fillStyle = n.backgroundColor),
          (t.strokeStyle = n.borderColor),
          (t.lineWidth = n.borderWidth),
          t.beginPath(),
          t.moveTo(u + c, o),
          s === "top" && this.drawCaret(e, t, i, n),
          t.lineTo(u + l - h, o),
          t.quadraticCurveTo(u + l, o, u + l, o + h),
          s === "center" && a === "right" && this.drawCaret(e, t, i, n),
          t.lineTo(u + l, o + d - p),
          t.quadraticCurveTo(u + l, o + d, u + l - p, o + d),
          s === "bottom" && this.drawCaret(e, t, i, n),
          t.lineTo(u + v, o + d),
          t.quadraticCurveTo(u, o + d, u, o + d - v),
          s === "center" && a === "left" && this.drawCaret(e, t, i, n),
          t.lineTo(u, o + c),
          t.quadraticCurveTo(u, o, u + c, o),
          t.closePath(),
          t.fill(),
          n.borderWidth > 0 && t.stroke();
      }
      _updateAnimationTarget(e) {
        let t = this.chart,
          i = this.$animations,
          n = i && i.x,
          a = i && i.y;
        if (n || a) {
          let s = bn[e.position].call(this, this._active, this._eventPosition);
          if (!s) return;
          let u = (this._size = sT(this, e)),
            o = Object.assign({}, s, this._size),
            l = uT(t, e, o),
            d = oT(e, o, l, t);
          (n._to !== d.x || a._to !== d.y) &&
            ((this.xAlign = l.xAlign),
            (this.yAlign = l.yAlign),
            (this.width = u.width),
            (this.height = u.height),
            (this.caretX = s.x),
            (this.caretY = s.y),
            this._resolveAnimations().update(this, d));
        }
      }
      _willRender() {
        return !!this.opacity;
      }
      draw(e) {
        let t = this.options.setContext(this.getContext()),
          i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(t);
        let n = { width: this.width, height: this.height },
          a = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        let s = f.toPadding(t.padding),
          u =
            this.title.length ||
            this.beforeBody.length ||
            this.body.length ||
            this.afterBody.length ||
            this.footer.length;
        t.enabled &&
          u &&
          (e.save(),
          (e.globalAlpha = i),
          this.drawBackground(a, e, n, t),
          f.overrideTextDirection(e, t.textDirection),
          (a.y += s.top),
          this.drawTitle(a, e, t),
          this.drawBody(a, e, t),
          this.drawFooter(a, e, t),
          f.restoreTextDirection(e, t.textDirection),
          e.restore());
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(e, t) {
        let i = this._active,
          n = e.map(({ datasetIndex: u, index: o }) => {
            let l = this.chart.getDatasetMeta(u);
            if (!l) throw new Error("Cannot find a dataset at index " + u);
            return { datasetIndex: u, element: l.data[o], index: o };
          }),
          a = !f._elementsEqual(i, n),
          s = this._positionChanged(n, t);
        (a || s) &&
          ((this._active = n),
          (this._eventPosition = t),
          (this._ignoreReplayEvents = !0),
          this.update(!0));
      }
      handleEvent(e, t, i = !0) {
        if (t && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        let n = this.options,
          a = this._active || [],
          s = this._getActiveElements(e, a, t, i),
          u = this._positionChanged(s, e),
          o = t || !f._elementsEqual(s, a) || u;
        return (
          o &&
            ((this._active = s),
            (n.enabled || n.external) &&
              ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, t))),
          o
        );
      }
      _getActiveElements(e, t, i, n) {
        let a = this.options;
        if (e.type === "mouseout") return [];
        if (!n) return t;
        let s = this.chart.getElementsAtEventForMode(e, a.mode, a, i);
        return a.reverse && s.reverse(), s;
      }
      _positionChanged(e, t) {
        let { caretX: i, caretY: n, options: a } = this,
          s = bn[a.position].call(this, e, t);
        return s !== !1 && (i !== s.x || n !== s.y);
      }
    };
    A(xn, "positioners", bn);
    var GT = {
        id: "tooltip",
        _element: xn,
        positioners: bn,
        afterInit(r, e, t) {
          t && (r.tooltip = new xn({ chart: r, options: t }));
        },
        beforeUpdate(r, e, t) {
          r.tooltip && r.tooltip.initialize(t);
        },
        reset(r, e, t) {
          r.tooltip && r.tooltip.initialize(t);
        },
        afterDraw(r) {
          let e = r.tooltip;
          if (e && e._willRender()) {
            let t = { tooltip: e };
            if (
              r.notifyPlugins(
                "beforeTooltipDraw",
                jn(In({}, t), { cancelable: !0 })
              ) === !1
            )
              return;
            e.draw(r.ctx), r.notifyPlugins("afterTooltipDraw", t);
          }
        },
        afterEvent(r, e) {
          if (r.tooltip) {
            let t = e.replay;
            r.tooltip.handleEvent(e.event, t, e.inChartArea) &&
              (e.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: (r, e) => e.bodyFont.size,
          boxWidth: (r, e) => e.bodyFont.size,
          multiKeyBackground: "#fff",
          displayColors: !0,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: KT,
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: (r) =>
            r !== "filter" && r !== "itemSort" && r !== "external",
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      },
      ZT = Object.freeze({
        __proto__: null,
        Colors: YT,
        Decimation: zT,
        Filler: UT,
        Legend: $T,
        SubTitle: XT,
        Title: QT,
        Tooltip: GT,
      }),
      ire = (r, e, t, i) => (
        typeof e == "string"
          ? ((t = r.push(e) - 1), i.unshift({ index: t, label: e }))
          : isNaN(e) && (t = null),
        t
      );
    function nre(r, e, t, i) {
      let n = r.indexOf(e);
      if (n === -1) return ire(r, e, t, i);
      let a = r.lastIndexOf(e);
      return n !== a ? t : n;
    }
    var are = (r, e) =>
      r === null ? null : f._limitValue(Math.round(r), 0, e);
    function fT(r) {
      let e = this.getLabels();
      return r >= 0 && r < e.length ? e[r] : r;
    }
    var Gr = class extends Qe {
      constructor(e) {
        super(e),
          (this._startValue = void 0),
          (this._valueRange = 0),
          (this._addedLabels = []);
      }
      init(e) {
        let t = this._addedLabels;
        if (t.length) {
          let i = this.getLabels();
          for (let { index: n, label: a } of t) i[n] === a && i.splice(n, 1);
          this._addedLabels = [];
        }
        super.init(e);
      }
      parse(e, t) {
        if (f.isNullOrUndef(e)) return null;
        let i = this.getLabels();
        return (
          (t =
            isFinite(t) && i[t] === e
              ? t
              : nre(i, e, f.valueOrDefault(t, e), this._addedLabels)),
          are(t, i.length - 1)
        );
      }
      determineDataLimits() {
        let { minDefined: e, maxDefined: t } = this.getUserBounds(),
          { min: i, max: n } = this.getMinMax(!0);
        this.options.bounds === "ticks" &&
          (e || (i = 0), t || (n = this.getLabels().length - 1)),
          (this.min = i),
          (this.max = n);
      }
      buildTicks() {
        let e = this.min,
          t = this.max,
          i = this.options.offset,
          n = [],
          a = this.getLabels();
        (a = e === 0 && t === a.length - 1 ? a : a.slice(e, t + 1)),
          (this._valueRange = Math.max(a.length - (i ? 0 : 1), 1)),
          (this._startValue = this.min - (i ? 0.5 : 0));
        for (let s = e; s <= t; s++) n.push({ value: s });
        return n;
      }
      getLabelForValue(e) {
        return fT.call(this, e);
      }
      configure() {
        super.configure(),
          this.isHorizontal() || (this._reversePixels = !this._reversePixels);
      }
      getPixelForValue(e) {
        return (
          typeof e != "number" && (e = this.parse(e)),
          e === null
            ? NaN
            : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
        );
      }
      getPixelForTick(e) {
        let t = this.ticks;
        return e < 0 || e > t.length - 1
          ? null
          : this.getPixelForValue(t[e].value);
      }
      getValueForPixel(e) {
        return Math.round(
          this._startValue + this.getDecimalForPixel(e) * this._valueRange
        );
      }
      getBasePixel() {
        return this.bottom;
      }
    };
    A(Gr, "id", "category"), A(Gr, "defaults", { ticks: { callback: fT } });
    function sre(r, e) {
      let t = [],
        {
          bounds: n,
          step: a,
          min: s,
          max: u,
          precision: o,
          count: l,
          maxTicks: d,
          maxDigits: c,
          includeBounds: h,
        } = r,
        v = a || 1,
        p = d - 1,
        { min: m, max: q } = e,
        O = !f.isNullOrUndef(s),
        P = !f.isNullOrUndef(u),
        w = !f.isNullOrUndef(l),
        C = (q - m) / (c + 1),
        k = f.niceNum((q - m) / p / v) * v,
        R,
        I,
        j,
        L;
      if (k < 1e-14 && !O && !P) return [{ value: m }, { value: q }];
      (L = Math.ceil(q / k) - Math.floor(m / k)),
        L > p && (k = f.niceNum((L * k) / p / v) * v),
        f.isNullOrUndef(o) ||
          ((R = Math.pow(10, o)), (k = Math.ceil(k * R) / R)),
        n === "ticks"
          ? ((I = Math.floor(m / k) * k), (j = Math.ceil(q / k) * k))
          : ((I = m), (j = q)),
        O && P && a && f.almostWhole((u - s) / a, k / 1e3)
          ? ((L = Math.round(Math.min((u - s) / k, d))),
            (k = (u - s) / L),
            (I = s),
            (j = u))
          : w
          ? ((I = O ? s : I), (j = P ? u : j), (L = l - 1), (k = (j - I) / L))
          : ((L = (j - I) / k),
            f.almostEquals(L, Math.round(L), k / 1e3)
              ? (L = Math.round(L))
              : (L = Math.ceil(L)));
      let W = Math.max(f._decimalPlaces(k), f._decimalPlaces(I));
      (R = Math.pow(10, f.isNullOrUndef(o) ? W : o)),
        (I = Math.round(I * R) / R),
        (j = Math.round(j * R) / R);
      let H = 0;
      for (
        O &&
        (h && I !== s
          ? (t.push({ value: s }),
            I < s && H++,
            f.almostEquals(Math.round((I + H * k) * R) / R, s, cT(s, C, r)) &&
              H++)
          : I < s && H++);
        H < L;
        ++H
      ) {
        let U = Math.round((I + H * k) * R) / R;
        if (P && U > u) break;
        t.push({ value: U });
      }
      return (
        P && h && j !== u
          ? t.length && f.almostEquals(t[t.length - 1].value, u, cT(u, C, r))
            ? (t[t.length - 1].value = u)
            : t.push({ value: u })
          : (!P || j === u) && t.push({ value: j }),
        t
      );
    }
    function cT(r, e, { horizontal: t, minRotation: i }) {
      let n = f.toRadians(i),
        a = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
        s = 0.75 * e * ("" + r).length;
      return Math.min(e / a, s);
    }
    var ti = class extends Qe {
        constructor(e) {
          super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(e, t) {
          return f.isNullOrUndef(e) ||
            ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
            ? null
            : +e;
        }
        handleTickRangeOptions() {
          let { beginAtZero: e } = this.options,
            { minDefined: t, maxDefined: i } = this.getUserBounds(),
            { min: n, max: a } = this,
            s = (o) => (n = t ? n : o),
            u = (o) => (a = i ? a : o);
          if (e) {
            let o = f.sign(n),
              l = f.sign(a);
            o < 0 && l < 0 ? u(0) : o > 0 && l > 0 && s(0);
          }
          if (n === a) {
            let o = a === 0 ? 1 : Math.abs(a * 0.05);
            u(a + o), e || s(n - o);
          }
          (this.min = n), (this.max = a);
        }
        getTickLimit() {
          let e = this.options.ticks,
            { maxTicksLimit: t, stepSize: i } = e,
            n;
          return (
            i
              ? ((n = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                n > 1e3 &&
                  (console.warn(
                    `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`
                  ),
                  (n = 1e3)))
              : ((n = this.computeTickLimit()), (t = t || 11)),
            t && (n = Math.min(t, n)),
            n
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          let e = this.options,
            t = e.ticks,
            i = this.getTickLimit();
          i = Math.max(2, i);
          let n = {
              maxTicks: i,
              bounds: e.bounds,
              min: e.min,
              max: e.max,
              precision: t.precision,
              step: t.stepSize,
              count: t.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: t.minRotation || 0,
              includeBounds: t.includeBounds !== !1,
            },
            a = this._range || this,
            s = sre(n, a);
          return (
            e.bounds === "ticks" && f._setMinAndMaxByKey(s, this, "value"),
            e.reverse
              ? (s.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            s
          );
        }
        configure() {
          let e = this.ticks,
            t = this.min,
            i = this.max;
          if ((super.configure(), this.options.offset && e.length)) {
            let n = (i - t) / Math.max(e.length - 1, 1) / 2;
            (t -= n), (i += n);
          }
          (this._startValue = t),
            (this._endValue = i),
            (this._valueRange = i - t);
        }
        getLabelForValue(e) {
          return f.formatNumber(
            e,
            this.chart.options.locale,
            this.options.ticks.format
          );
        }
      },
      Zr = class extends ti {
        determineDataLimits() {
          let { min: e, max: t } = this.getMinMax(!0);
          (this.min = f.isNumberFinite(e) ? e : 0),
            (this.max = f.isNumberFinite(t) ? t : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          let e = this.isHorizontal(),
            t = e ? this.width : this.height,
            i = f.toRadians(this.options.ticks.minRotation),
            n = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
            a = this._resolveTickFontOptions(0);
          return Math.ceil(t / Math.min(40, a.lineHeight / n));
        }
        getPixelForValue(e) {
          return e === null
            ? NaN
            : this.getPixelForDecimal(
                (e - this._startValue) / this._valueRange
              );
        }
        getValueForPixel(e) {
          return (
            this._startValue + this.getDecimalForPixel(e) * this._valueRange
          );
        }
      };
    A(Zr, "id", "linear"),
      A(Zr, "defaults", { ticks: { callback: f.Ticks.formatters.numeric } });
    var Dn = (r) => Math.floor(f.log10(r)),
      Zt = (r, e) => Math.pow(10, Dn(r) + e);
    function hT(r) {
      return r / Math.pow(10, Dn(r)) === 1;
    }
    function vT(r, e, t) {
      let i = Math.pow(10, t),
        n = Math.floor(r / i);
      return Math.ceil(e / i) - n;
    }
    function ure(r, e) {
      let t = e - r,
        i = Dn(t);
      for (; vT(r, e, i) > 10; ) i++;
      for (; vT(r, e, i) < 10; ) i--;
      return Math.min(i, Dn(r));
    }
    function ore(r, { min: e, max: t }) {
      e = f.finiteOrDefault(r.min, e);
      let i = [],
        n = Dn(e),
        a = ure(e, t),
        s = a < 0 ? Math.pow(10, Math.abs(a)) : 1,
        u = Math.pow(10, a),
        o = n > a ? Math.pow(10, n) : 0,
        l = Math.round((e - o) * s) / s,
        d = Math.floor((e - o) / u / 10) * u * 10,
        c = Math.floor((l - d) / Math.pow(10, a)),
        h = f.finiteOrDefault(
          r.min,
          Math.round((o + d + c * Math.pow(10, a)) * s) / s
        );
      for (; h < t; )
        i.push({ value: h, major: hT(h), significand: c }),
          c >= 10 ? (c = c < 15 ? 15 : 20) : c++,
          c >= 20 && (a++, (c = 2), (s = a >= 0 ? 1 : s)),
          (h = Math.round((o + d + c * Math.pow(10, a)) * s) / s);
      let v = f.finiteOrDefault(r.max, h);
      return i.push({ value: v, major: hT(v), significand: c }), i;
    }
    var Jr = class extends Qe {
      constructor(e) {
        super(e),
          (this.start = void 0),
          (this.end = void 0),
          (this._startValue = void 0),
          (this._valueRange = 0);
      }
      parse(e, t) {
        let i = ti.prototype.parse.apply(this, [e, t]);
        if (i === 0) {
          this._zero = !0;
          return;
        }
        return f.isNumberFinite(i) && i > 0 ? i : null;
      }
      determineDataLimits() {
        let { min: e, max: t } = this.getMinMax(!0);
        (this.min = f.isNumberFinite(e) ? Math.max(0, e) : null),
          (this.max = f.isNumberFinite(t) ? Math.max(0, t) : null),
          this.options.beginAtZero && (this._zero = !0),
          this._zero &&
            this.min !== this._suggestedMin &&
            !f.isNumberFinite(this._userMin) &&
            (this.min =
              e === Zt(this.min, 0) ? Zt(this.min, -1) : Zt(this.min, 0)),
          this.handleTickRangeOptions();
      }
      handleTickRangeOptions() {
        let { minDefined: e, maxDefined: t } = this.getUserBounds(),
          i = this.min,
          n = this.max,
          a = (u) => (i = e ? i : u),
          s = (u) => (n = t ? n : u);
        i === n && (i <= 0 ? (a(1), s(10)) : (a(Zt(i, -1)), s(Zt(n, 1)))),
          i <= 0 && a(Zt(n, -1)),
          n <= 0 && s(Zt(i, 1)),
          (this.min = i),
          (this.max = n);
      }
      buildTicks() {
        let e = this.options,
          t = { min: this._userMin, max: this._userMax },
          i = ore(t, this);
        return (
          e.bounds === "ticks" && f._setMinAndMaxByKey(i, this, "value"),
          e.reverse
            ? (i.reverse(), (this.start = this.max), (this.end = this.min))
            : ((this.start = this.min), (this.end = this.max)),
          i
        );
      }
      getLabelForValue(e) {
        return e === void 0
          ? "0"
          : f.formatNumber(
              e,
              this.chart.options.locale,
              this.options.ticks.format
            );
      }
      configure() {
        let e = this.min;
        super.configure(),
          (this._startValue = f.log10(e)),
          (this._valueRange = f.log10(this.max) - f.log10(e));
      }
      getPixelForValue(e) {
        return (
          (e === void 0 || e === 0) && (e = this.min),
          e === null || isNaN(e)
            ? NaN
            : this.getPixelForDecimal(
                e === this.min
                  ? 0
                  : (f.log10(e) - this._startValue) / this._valueRange
              )
        );
      }
      getValueForPixel(e) {
        let t = this.getDecimalForPixel(e);
        return Math.pow(10, this._startValue + t * this._valueRange);
      }
    };
    A(Jr, "id", "logarithmic"),
      A(Jr, "defaults", {
        ticks: {
          callback: f.Ticks.formatters.logarithmic,
          major: { enabled: !0 },
        },
      });
    function _g(r) {
      let e = r.ticks;
      if (e.display && r.display) {
        let t = f.toPadding(e.backdropPadding);
        return (
          f.valueOrDefault(e.font && e.font.size, f.defaults.font.size) +
          t.height
        );
      }
      return 0;
    }
    function lre(r, e, t) {
      return (
        (t = f.isArray(t) ? t : [t]),
        { w: f._longestText(r, e.string, t), h: t.length * e.lineHeight }
      );
    }
    function gT(r, e, t, i, n) {
      return r === i || r === n
        ? { start: e - t / 2, end: e + t / 2 }
        : r < i || r > n
        ? { start: e - t, end: e }
        : { start: e, end: e + t };
    }
    function dre(r) {
      let e = {
          l: r.left + r._padding.left,
          r: r.right - r._padding.right,
          t: r.top + r._padding.top,
          b: r.bottom - r._padding.bottom,
        },
        t = Object.assign({}, e),
        i = [],
        n = [],
        a = r._pointLabels.length,
        s = r.options.pointLabels,
        u = s.centerPointLabels ? f.PI / a : 0;
      for (let o = 0; o < a; o++) {
        let l = s.setContext(r.getPointLabelContext(o));
        n[o] = l.padding;
        let d = r.getPointPosition(o, r.drawingArea + n[o], u),
          c = f.toFont(l.font),
          h = lre(r.ctx, c, r._pointLabels[o]);
        i[o] = h;
        let v = f._normalizeAngle(r.getIndexAngle(o) + u),
          p = Math.round(f.toDegrees(v)),
          m = gT(p, d.x, h.w, 0, 180),
          q = gT(p, d.y, h.h, 90, 270);
        fre(t, e, v, m, q);
      }
      r.setCenterPoint(e.l - t.l, t.r - e.r, e.t - t.t, t.b - e.b),
        (r._pointLabelItems = vre(r, i, n));
    }
    function fre(r, e, t, i, n) {
      let a = Math.abs(Math.sin(t)),
        s = Math.abs(Math.cos(t)),
        u = 0,
        o = 0;
      i.start < e.l
        ? ((u = (e.l - i.start) / a), (r.l = Math.min(r.l, e.l - u)))
        : i.end > e.r &&
          ((u = (i.end - e.r) / a), (r.r = Math.max(r.r, e.r + u))),
        n.start < e.t
          ? ((o = (e.t - n.start) / s), (r.t = Math.min(r.t, e.t - o)))
          : n.end > e.b &&
            ((o = (n.end - e.b) / s), (r.b = Math.max(r.b, e.b + o)));
    }
    function cre(r, e, t) {
      let i = r.drawingArea,
        { extra: n, additionalAngle: a, padding: s, size: u } = t,
        o = r.getPointPosition(e, i + n + s, a),
        l = Math.round(f.toDegrees(f._normalizeAngle(o.angle + f.HALF_PI))),
        d = _re(o.y, u.h, l),
        c = gre(l),
        h = pre(o.x, u.w, c);
      return {
        visible: !0,
        x: o.x,
        y: d,
        textAlign: c,
        left: h,
        top: d,
        right: h + u.w,
        bottom: d + u.h,
      };
    }
    function hre(r, e) {
      if (!e) return !0;
      let { left: t, top: i, right: n, bottom: a } = r;
      return !(
        f._isPointInArea({ x: t, y: i }, e) ||
        f._isPointInArea({ x: t, y: a }, e) ||
        f._isPointInArea({ x: n, y: i }, e) ||
        f._isPointInArea({ x: n, y: a }, e)
      );
    }
    function vre(r, e, t) {
      let i = [],
        n = r._pointLabels.length,
        a = r.options,
        { centerPointLabels: s, display: u } = a.pointLabels,
        o = { extra: _g(a) / 2, additionalAngle: s ? f.PI / n : 0 },
        l;
      for (let d = 0; d < n; d++) {
        (o.padding = t[d]), (o.size = e[d]);
        let c = cre(r, d, o);
        i.push(c),
          u === "auto" && ((c.visible = hre(c, l)), c.visible && (l = c));
      }
      return i;
    }
    function gre(r) {
      return r === 0 || r === 180 ? "center" : r < 180 ? "left" : "right";
    }
    function pre(r, e, t) {
      return t === "right" ? (r -= e) : t === "center" && (r -= e / 2), r;
    }
    function _re(r, e, t) {
      return (
        t === 90 || t === 270 ? (r -= e / 2) : (t > 270 || t < 90) && (r -= e),
        r
      );
    }
    function mre(r, e, t) {
      let { left: i, top: n, right: a, bottom: s } = t,
        { backdropColor: u } = e;
      if (!f.isNullOrUndef(u)) {
        let o = f.toTRBLCorners(e.borderRadius),
          l = f.toPadding(e.backdropPadding);
        r.fillStyle = u;
        let d = i - l.left,
          c = n - l.top,
          h = a - i + l.width,
          v = s - n + l.height;
        Object.values(o).some((p) => p !== 0)
          ? (r.beginPath(),
            f.addRoundedRectPath(r, { x: d, y: c, w: h, h: v, radius: o }),
            r.fill())
          : r.fillRect(d, c, h, v);
      }
    }
    function bre(r, e) {
      let {
        ctx: t,
        options: { pointLabels: i },
      } = r;
      for (let n = e - 1; n >= 0; n--) {
        let a = r._pointLabelItems[n];
        if (!a.visible) continue;
        let s = i.setContext(r.getPointLabelContext(n));
        mre(t, s, a);
        let u = f.toFont(s.font),
          { x: o, y: l, textAlign: d } = a;
        f.renderText(t, r._pointLabels[n], o, l + u.lineHeight / 2, u, {
          color: s.color,
          textAlign: d,
          textBaseline: "middle",
        });
      }
    }
    function JT(r, e, t, i) {
      let { ctx: n } = r;
      if (t) n.arc(r.xCenter, r.yCenter, e, 0, f.TAU);
      else {
        let a = r.getPointPosition(0, e);
        n.moveTo(a.x, a.y);
        for (let s = 1; s < i; s++)
          (a = r.getPointPosition(s, e)), n.lineTo(a.x, a.y);
      }
    }
    function xre(r, e, t, i, n) {
      let a = r.ctx,
        s = e.circular,
        { color: u, lineWidth: o } = e;
      (!s && !i) ||
        !u ||
        !o ||
        t < 0 ||
        (a.save(),
        (a.strokeStyle = u),
        (a.lineWidth = o),
        a.setLineDash(n.dash),
        (a.lineDashOffset = n.dashOffset),
        a.beginPath(),
        JT(r, t, s, i),
        a.closePath(),
        a.stroke(),
        a.restore());
    }
    function yre(r, e, t) {
      return f.createContext(r, { label: t, index: e, type: "pointLabel" });
    }
    var wt = class extends ti {
      constructor(e) {
        super(e),
          (this.xCenter = void 0),
          (this.yCenter = void 0),
          (this.drawingArea = void 0),
          (this._pointLabels = []),
          (this._pointLabelItems = []);
      }
      setDimensions() {
        let e = (this._padding = f.toPadding(_g(this.options) / 2)),
          t = (this.width = this.maxWidth - e.width),
          i = (this.height = this.maxHeight - e.height);
        (this.xCenter = Math.floor(this.left + t / 2 + e.left)),
          (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
          (this.drawingArea = Math.floor(Math.min(t, i) / 2));
      }
      determineDataLimits() {
        let { min: e, max: t } = this.getMinMax(!1);
        (this.min = f.isNumberFinite(e) && !isNaN(e) ? e : 0),
          (this.max = f.isNumberFinite(t) && !isNaN(t) ? t : 0),
          this.handleTickRangeOptions();
      }
      computeTickLimit() {
        return Math.ceil(this.drawingArea / _g(this.options));
      }
      generateTickLabels(e) {
        ti.prototype.generateTickLabels.call(this, e),
          (this._pointLabels = this.getLabels()
            .map((t, i) => {
              let n = f.callback(
                this.options.pointLabels.callback,
                [t, i],
                this
              );
              return n || n === 0 ? n : "";
            })
            .filter((t, i) => this.chart.getDataVisibility(i)));
      }
      fit() {
        let e = this.options;
        e.display && e.pointLabels.display
          ? dre(this)
          : this.setCenterPoint(0, 0, 0, 0);
      }
      setCenterPoint(e, t, i, n) {
        (this.xCenter += Math.floor((e - t) / 2)),
          (this.yCenter += Math.floor((i - n) / 2)),
          (this.drawingArea -= Math.min(
            this.drawingArea / 2,
            Math.max(e, t, i, n)
          ));
      }
      getIndexAngle(e) {
        let t = f.TAU / (this._pointLabels.length || 1),
          i = this.options.startAngle || 0;
        return f._normalizeAngle(e * t + f.toRadians(i));
      }
      getDistanceFromCenterForValue(e) {
        if (f.isNullOrUndef(e)) return NaN;
        let t = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - e) * t : (e - this.min) * t;
      }
      getValueForDistanceFromCenter(e) {
        if (f.isNullOrUndef(e)) return NaN;
        let t = e / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - t : this.min + t;
      }
      getPointLabelContext(e) {
        let t = this._pointLabels || [];
        if (e >= 0 && e < t.length) {
          let i = t[e];
          return yre(this.getContext(), e, i);
        }
      }
      getPointPosition(e, t, i = 0) {
        let n = this.getIndexAngle(e) - f.HALF_PI + i;
        return {
          x: Math.cos(n) * t + this.xCenter,
          y: Math.sin(n) * t + this.yCenter,
          angle: n,
        };
      }
      getPointPositionForValue(e, t) {
        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t));
      }
      getBasePosition(e) {
        return this.getPointPositionForValue(e || 0, this.getBaseValue());
      }
      getPointLabelPosition(e) {
        let { left: t, top: i, right: n, bottom: a } = this._pointLabelItems[e];
        return { left: t, top: i, right: n, bottom: a };
      }
      drawBackground() {
        let {
          backgroundColor: e,
          grid: { circular: t },
        } = this.options;
        if (e) {
          let i = this.ctx;
          i.save(),
            i.beginPath(),
            JT(
              this,
              this.getDistanceFromCenterForValue(this._endValue),
              t,
              this._pointLabels.length
            ),
            i.closePath(),
            (i.fillStyle = e),
            i.fill(),
            i.restore();
        }
      }
      drawGrid() {
        let e = this.ctx,
          t = this.options,
          { angleLines: i, grid: n, border: a } = t,
          s = this._pointLabels.length,
          u,
          o,
          l;
        if (
          (t.pointLabels.display && bre(this, s),
          n.display &&
            this.ticks.forEach((d, c) => {
              if (c !== 0) {
                o = this.getDistanceFromCenterForValue(d.value);
                let h = this.getContext(c),
                  v = n.setContext(h),
                  p = a.setContext(h);
                xre(this, v, o, s, p);
              }
            }),
          i.display)
        ) {
          for (e.save(), u = s - 1; u >= 0; u--) {
            let d = i.setContext(this.getPointLabelContext(u)),
              { color: c, lineWidth: h } = d;
            !h ||
              !c ||
              ((e.lineWidth = h),
              (e.strokeStyle = c),
              e.setLineDash(d.borderDash),
              (e.lineDashOffset = d.borderDashOffset),
              (o = this.getDistanceFromCenterForValue(
                t.ticks.reverse ? this.min : this.max
              )),
              (l = this.getPointPosition(u, o)),
              e.beginPath(),
              e.moveTo(this.xCenter, this.yCenter),
              e.lineTo(l.x, l.y),
              e.stroke());
          }
          e.restore();
        }
      }
      drawBorder() {}
      drawLabels() {
        let e = this.ctx,
          t = this.options,
          i = t.ticks;
        if (!i.display) return;
        let n = this.getIndexAngle(0),
          a,
          s;
        e.save(),
          e.translate(this.xCenter, this.yCenter),
          e.rotate(n),
          (e.textAlign = "center"),
          (e.textBaseline = "middle"),
          this.ticks.forEach((u, o) => {
            if (o === 0 && !t.reverse) return;
            let l = i.setContext(this.getContext(o)),
              d = f.toFont(l.font);
            if (
              ((a = this.getDistanceFromCenterForValue(this.ticks[o].value)),
              l.showLabelBackdrop)
            ) {
              (e.font = d.string),
                (s = e.measureText(u.label).width),
                (e.fillStyle = l.backdropColor);
              let c = f.toPadding(l.backdropPadding);
              e.fillRect(
                -s / 2 - c.left,
                -a - d.size / 2 - c.top,
                s + c.width,
                d.size + c.height
              );
            }
            f.renderText(e, u.label, 0, -a, d, {
              color: l.color,
              strokeColor: l.textStrokeColor,
              strokeWidth: l.textStrokeWidth,
            });
          }),
          e.restore();
      }
      drawTitle() {}
    };
    A(wt, "id", "radialLinear"),
      A(wt, "defaults", {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
          display: !0,
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0,
        },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: f.Ticks.formatters.numeric },
        pointLabels: {
          backdropColor: void 0,
          backdropPadding: 2,
          display: !0,
          font: { size: 10 },
          callback(e) {
            return e;
          },
          padding: 5,
          centerPointLabels: !1,
        },
      }),
      A(wt, "defaultRoutes", {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color",
      }),
      A(wt, "descriptors", { angleLines: { _fallback: "grid" } });
    var Ff = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
      },
      Oe = Object.keys(Ff);
    function pT(r, e) {
      return r - e;
    }
    function _T(r, e) {
      if (f.isNullOrUndef(e)) return null;
      let t = r._adapter,
        { parser: i, round: n, isoWeekday: a } = r._parseOpts,
        s = e;
      return (
        typeof i == "function" && (s = i(s)),
        f.isNumberFinite(s) ||
          (s = typeof i == "string" ? t.parse(s, i) : t.parse(s)),
        s === null
          ? null
          : (n &&
              (s =
                n === "week" && (f.isNumber(a) || a === !0)
                  ? t.startOf(s, "isoWeek", a)
                  : t.startOf(s, n)),
            +s)
      );
    }
    function mT(r, e, t, i) {
      let n = Oe.length;
      for (let a = Oe.indexOf(r); a < n - 1; ++a) {
        let s = Ff[Oe[a]],
          u = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
        if (s.common && Math.ceil((t - e) / (u * s.size)) <= i) return Oe[a];
      }
      return Oe[n - 1];
    }
    function qre(r, e, t, i, n) {
      for (let a = Oe.length - 1; a >= Oe.indexOf(t); a--) {
        let s = Oe[a];
        if (Ff[s].common && r._adapter.diff(n, i, s) >= e - 1) return s;
      }
      return Oe[t ? Oe.indexOf(t) : 0];
    }
    function Ore(r) {
      for (let e = Oe.indexOf(r) + 1, t = Oe.length; e < t; ++e)
        if (Ff[Oe[e]].common) return Oe[e];
    }
    function bT(r, e, t) {
      if (!t) r[e] = !0;
      else if (t.length) {
        let { lo: i, hi: n } = f._lookup(t, e),
          a = t[i] >= e ? t[i] : t[n];
        r[a] = !0;
      }
    }
    function Pre(r, e, t, i) {
      let n = r._adapter,
        a = +n.startOf(e[0].value, i),
        s = e[e.length - 1].value,
        u,
        o;
      for (u = a; u <= s; u = +n.add(u, 1, i))
        (o = t[u]), o >= 0 && (e[o].major = !0);
      return e;
    }
    function xT(r, e, t) {
      let i = [],
        n = {},
        a = e.length,
        s,
        u;
      for (s = 0; s < a; ++s)
        (u = e[s]), (n[u] = s), i.push({ value: u, major: !1 });
      return a === 0 || !t ? i : Pre(r, i, n, t);
    }
    var St = class extends Qe {
      constructor(e) {
        super(e),
          (this._cache = { data: [], labels: [], all: [] }),
          (this._unit = "day"),
          (this._majorUnit = void 0),
          (this._offsets = {}),
          (this._normalized = !1),
          (this._parseOpts = void 0);
      }
      init(e, t = {}) {
        let i = e.time || (e.time = {}),
          n = (this._adapter = new PT._date(e.adapters.date));
        n.init(t),
          f.mergeIf(i.displayFormats, n.formats()),
          (this._parseOpts = {
            parser: i.parser,
            round: i.round,
            isoWeekday: i.isoWeekday,
          }),
          super.init(e),
          (this._normalized = t.normalized);
      }
      parse(e, t) {
        return e === void 0 ? null : _T(this, e);
      }
      beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
      }
      determineDataLimits() {
        let e = this.options,
          t = this._adapter,
          i = e.time.unit || "day",
          {
            min: n,
            max: a,
            minDefined: s,
            maxDefined: u,
          } = this.getUserBounds();
        function o(l) {
          !s && !isNaN(l.min) && (n = Math.min(n, l.min)),
            !u && !isNaN(l.max) && (a = Math.max(a, l.max));
        }
        (!s || !u) &&
          (o(this._getLabelBounds()),
          (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
            o(this.getMinMax(!1))),
          (n =
            f.isNumberFinite(n) && !isNaN(n) ? n : +t.startOf(Date.now(), i)),
          (a =
            f.isNumberFinite(a) && !isNaN(a) ? a : +t.endOf(Date.now(), i) + 1),
          (this.min = Math.min(n, a - 1)),
          (this.max = Math.max(n + 1, a));
      }
      _getLabelBounds() {
        let e = this.getLabelTimestamps(),
          t = Number.POSITIVE_INFINITY,
          i = Number.NEGATIVE_INFINITY;
        return (
          e.length && ((t = e[0]), (i = e[e.length - 1])), { min: t, max: i }
        );
      }
      buildTicks() {
        let e = this.options,
          t = e.time,
          i = e.ticks,
          n =
            i.source === "labels"
              ? this.getLabelTimestamps()
              : this._generate();
        e.bounds === "ticks" &&
          n.length &&
          ((this.min = this._userMin || n[0]),
          (this.max = this._userMax || n[n.length - 1]));
        let a = this.min,
          s = this.max,
          u = f._filterBetween(n, a, s);
        return (
          (this._unit =
            t.unit ||
            (i.autoSkip
              ? mT(t.minUnit, this.min, this.max, this._getLabelCapacity(a))
              : qre(this, u.length, t.minUnit, this.min, this.max))),
          (this._majorUnit =
            !i.major.enabled || this._unit === "year"
              ? void 0
              : Ore(this._unit)),
          this.initOffsets(n),
          e.reverse && u.reverse(),
          xT(this, u, this._majorUnit)
        );
      }
      afterAutoSkip() {
        this.options.offsetAfterAutoskip &&
          this.initOffsets(this.ticks.map((e) => +e.value));
      }
      initOffsets(e = []) {
        let t = 0,
          i = 0,
          n,
          a;
        this.options.offset &&
          e.length &&
          ((n = this.getDecimalForValue(e[0])),
          e.length === 1
            ? (t = 1 - n)
            : (t = (this.getDecimalForValue(e[1]) - n) / 2),
          (a = this.getDecimalForValue(e[e.length - 1])),
          e.length === 1
            ? (i = a)
            : (i = (a - this.getDecimalForValue(e[e.length - 2])) / 2));
        let s = e.length < 3 ? 0.5 : 0.25;
        (t = f._limitValue(t, 0, s)),
          (i = f._limitValue(i, 0, s)),
          (this._offsets = { start: t, end: i, factor: 1 / (t + 1 + i) });
      }
      _generate() {
        let e = this._adapter,
          t = this.min,
          i = this.max,
          n = this.options,
          a = n.time,
          s = a.unit || mT(a.minUnit, t, i, this._getLabelCapacity(t)),
          u = f.valueOrDefault(n.ticks.stepSize, 1),
          o = s === "week" ? a.isoWeekday : !1,
          l = f.isNumber(o) || o === !0,
          d = {},
          c = t,
          h,
          v;
        if (
          (l && (c = +e.startOf(c, "isoWeek", o)),
          (c = +e.startOf(c, l ? "day" : s)),
          e.diff(i, t, s) > 1e5 * u)
        )
          throw new Error(
            t +
              " and " +
              i +
              " are too far apart with stepSize of " +
              u +
              " " +
              s
          );
        let p = n.ticks.source === "data" && this.getDataTimestamps();
        for (h = c, v = 0; h < i; h = +e.add(h, u, s), v++) bT(d, h, p);
        return (
          (h === i || n.bounds === "ticks" || v === 1) && bT(d, h, p),
          Object.keys(d)
            .sort(pT)
            .map((m) => +m)
        );
      }
      getLabelForValue(e) {
        let t = this._adapter,
          i = this.options.time;
        return i.tooltipFormat
          ? t.format(e, i.tooltipFormat)
          : t.format(e, i.displayFormats.datetime);
      }
      format(e, t) {
        let n = this.options.time.displayFormats,
          a = this._unit,
          s = t || n[a];
        return this._adapter.format(e, s);
      }
      _tickFormatFunction(e, t, i, n) {
        let a = this.options,
          s = a.ticks.callback;
        if (s) return f.callback(s, [e, t, i], this);
        let u = a.time.displayFormats,
          o = this._unit,
          l = this._majorUnit,
          d = o && u[o],
          c = l && u[l],
          h = i[t],
          v = l && c && h && h.major;
        return this._adapter.format(e, n || (v ? c : d));
      }
      generateTickLabels(e) {
        let t, i, n;
        for (t = 0, i = e.length; t < i; ++t)
          (n = e[t]), (n.label = this._tickFormatFunction(n.value, t, e));
      }
      getDecimalForValue(e) {
        return e === null ? NaN : (e - this.min) / (this.max - this.min);
      }
      getPixelForValue(e) {
        let t = this._offsets,
          i = this.getDecimalForValue(e);
        return this.getPixelForDecimal((t.start + i) * t.factor);
      }
      getValueForPixel(e) {
        let t = this._offsets,
          i = this.getDecimalForPixel(e) / t.factor - t.end;
        return this.min + i * (this.max - this.min);
      }
      _getLabelSize(e) {
        let t = this.options.ticks,
          i = this.ctx.measureText(e).width,
          n = f.toRadians(this.isHorizontal() ? t.maxRotation : t.minRotation),
          a = Math.cos(n),
          s = Math.sin(n),
          u = this._resolveTickFontOptions(0).size;
        return { w: i * a + u * s, h: i * s + u * a };
      }
      _getLabelCapacity(e) {
        let t = this.options.time,
          i = t.displayFormats,
          n = i[t.unit] || i.millisecond,
          a = this._tickFormatFunction(e, 0, xT(this, [e], this._majorUnit), n),
          s = this._getLabelSize(a),
          u =
            Math.floor(
              this.isHorizontal() ? this.width / s.w : this.height / s.h
            ) - 1;
        return u > 0 ? u : 1;
      }
      getDataTimestamps() {
        let e = this._cache.data || [],
          t,
          i;
        if (e.length) return e;
        let n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length)
          return (this._cache.data = n[0].controller.getAllParsedValues(this));
        for (t = 0, i = n.length; t < i; ++t)
          e = e.concat(n[t].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(e));
      }
      getLabelTimestamps() {
        let e = this._cache.labels || [],
          t,
          i;
        if (e.length) return e;
        let n = this.getLabels();
        for (t = 0, i = n.length; t < i; ++t) e.push(_T(this, n[t]));
        return (this._cache.labels = this._normalized ? e : this.normalize(e));
      }
      normalize(e) {
        return f._arrayUnique(e.sort(pT));
      }
    };
    A(St, "id", "time"),
      A(St, "defaults", {
        bounds: "data",
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          displayFormats: {},
        },
        ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
      });
    function kf(r, e, t) {
      let i = 0,
        n = r.length - 1,
        a,
        s,
        u,
        o;
      t
        ? (e >= r[i].pos &&
            e <= r[n].pos &&
            ({ lo: i, hi: n } = f._lookupByKey(r, "pos", e)),
          ({ pos: a, time: u } = r[i]),
          ({ pos: s, time: o } = r[n]))
        : (e >= r[i].time &&
            e <= r[n].time &&
            ({ lo: i, hi: n } = f._lookupByKey(r, "time", e)),
          ({ time: a, pos: u } = r[i]),
          ({ time: s, pos: o } = r[n]));
      let l = s - a;
      return l ? u + ((o - u) * (e - a)) / l : u;
    }
    var ei = class extends St {
      constructor(e) {
        super(e),
          (this._table = []),
          (this._minPos = void 0),
          (this._tableRange = void 0);
      }
      initOffsets() {
        let e = this._getTimestampsForTable(),
          t = (this._table = this.buildLookupTable(e));
        (this._minPos = kf(t, this.min)),
          (this._tableRange = kf(t, this.max) - this._minPos),
          super.initOffsets(e);
      }
      buildLookupTable(e) {
        let { min: t, max: i } = this,
          n = [],
          a = [],
          s,
          u,
          o,
          l,
          d;
        for (s = 0, u = e.length; s < u; ++s)
          (l = e[s]), l >= t && l <= i && n.push(l);
        if (n.length < 2)
          return [
            { time: t, pos: 0 },
            { time: i, pos: 1 },
          ];
        for (s = 0, u = n.length; s < u; ++s)
          (d = n[s + 1]),
            (o = n[s - 1]),
            (l = n[s]),
            Math.round((d + o) / 2) !== l &&
              a.push({ time: l, pos: s / (u - 1) });
        return a;
      }
      _generate() {
        let e = this.min,
          t = this.max,
          i = super.getDataTimestamps();
        return (
          (!i.includes(e) || !i.length) && i.splice(0, 0, e),
          (!i.includes(t) || i.length === 1) && i.push(t),
          i.sort((n, a) => n - a)
        );
      }
      _getTimestampsForTable() {
        let e = this._cache.all || [];
        if (e.length) return e;
        let t = this.getDataTimestamps(),
          i = this.getLabelTimestamps();
        return (
          t.length && i.length
            ? (e = this.normalize(t.concat(i)))
            : (e = t.length ? t : i),
          (e = this._cache.all = e),
          e
        );
      }
      getDecimalForValue(e) {
        return (kf(this._table, e) - this._minPos) / this._tableRange;
      }
      getValueForPixel(e) {
        let t = this._offsets,
          i = this.getDecimalForPixel(e) / t.factor - t.end;
        return kf(this._table, i * this._tableRange + this._minPos, !0);
      }
    };
    A(ei, "id", "timeseries"), A(ei, "defaults", St.defaults);
    var ek = Object.freeze({
        __proto__: null,
        CategoryScale: Gr,
        LinearScale: Zr,
        LogarithmicScale: Jr,
        RadialLinearScale: wt,
        TimeScale: St,
        TimeSeriesScale: ei,
      }),
      Mre = [OT, LT, ZT, ek];
    B.Ticks = f.Ticks;
    B.defaults = f.defaults;
    B.Animation = Rf;
    B.Animations = yn;
    B.ArcElement = Dt;
    B.BarController = Jt;
    B.BarElement = ar;
    B.BasePlatform = On;
    B.BasicPlatform = If;
    B.BubbleController = er;
    B.CategoryScale = Gr;
    B.Chart = Ve;
    B.Colors = YT;
    B.DatasetController = qe;
    B.Decimation = zT;
    B.DomPlatform = Af;
    B.DoughnutController = $e;
    B.Element = Pe;
    B.Filler = UT;
    B.Interaction = MT;
    B.Legend = $T;
    B.LineController = tr;
    B.LineElement = Le;
    B.LinearScale = Zr;
    B.LogarithmicScale = Jr;
    B.PieController = Xr;
    B.PointElement = nr;
    B.PolarAreaController = Tt;
    B.RadarController = rr;
    B.RadialLinearScale = wt;
    B.Scale = Qe;
    B.ScatterController = ir;
    B.SubTitle = XT;
    B.TimeScale = St;
    B.TimeSeriesScale = ei;
    B.Title = QT;
    B.Tooltip = GT;
    B._adapters = PT;
    B._detectPlatform = ST;
    B.animator = Ue;
    B.controllers = OT;
    B.elements = LT;
    B.layouts = he;
    B.plugins = ZT;
    B.registerables = Mre;
    B.registry = Ne;
    B.scales = ek;
  });
  var {
      format: kn,
      subMonths: Dre,
      addMonths: yg,
      isBefore: One,
      parseISO: wre,
      isSameMonth: Tre,
      isSameYear: Pne,
      isAfter: Mne,
      differenceInCalendarDays: kre,
    } = T1(),
    {
      Chart: ak,
      LineController: Sre,
      LineElement: Cre,
      PointElement: Rre,
      CategoryScale: Ire,
      LinearScale: jre,
      Filler: Are,
    } = tk(),
    sk,
    Wf,
    Xe,
    ri,
    Yf,
    dt,
    bg,
    rk,
    xg = 1e3,
    qg = 0,
    Ere = 0,
    Nre = 0,
    Lre = 0,
    Tn = "USD";
  document.addEventListener("DOMContentLoaded", () =>
    Ke(void 0, null, function* () {
      Fre();
    })
  );
  function Fre() {
    return Ke(this, null, function* () {
      Wre(), Yre(), yield Gre(), Zre();
    });
  }
  function Wre() {
    (Yf = 150),
      (Xe = 3),
      (Wf = document.getElementById("savings-stock-select").value),
      Hf("recurring-amount-input", Ct(Yf)),
      Hf("savings-recurring-years-input", Xe.toString());
  }
  function Hf(r, e) {
    let t = document.getElementById(r);
    t.value = e;
  }
  function Yre() {
    Hre(), Bre(), Vre(), $re(), Kre();
  }
  function Hre() {
    let r = document.getElementById("recurring-amount-input");
    r.addEventListener("keyup", zre), r.addEventListener("focus", uk);
  }
  function zre(r) {
    Og(() => {
      let e = zf(r.target.value) < 50 ? 50 : zf(r.target.value);
      Hf("recurring-amount-input", Ct(e)), fie(e);
    }, 1500);
  }
  function Bre() {
    document
      .getElementById("savings-recurring-years-input")
      .addEventListener("keyup", Ure);
  }
  function Ure(r) {
    Og(
      () =>
        Ke(this, null, function* () {
          cie(r.target.value);
        }),
      1500
    );
  }
  function Vre() {
    document
      .getElementById("savings-stock-select")
      .addEventListener("change", oie);
  }
  function $re() {
    let r = document.getElementById("initial-amount-input-field");
    r.addEventListener("keyup", Xre), r.addEventListener("focus", uk);
  }
  function Qre(r) {
    (xg = zf(r)), Bf(), Sn(xg);
  }
  function Xre(r) {
    Og(
      () =>
        Ke(this, null, function* () {
          let e = String(r.target.value);
          Qre(e);
          let t = zf(e);
          Hf("initial-amount-input-field", Ct(t));
        }),
      1500
    );
  }
  function uk(r) {
    r.currentTarget.value = "";
  }
  function Kre() {
    ak.register(Sre, Cre, Rre, Ire, jre, Are);
  }
  function Gre() {
    return Ke(this, null, function* () {
      ok(Xe * 12), yield Pg();
    });
  }
  function Zre() {
    sie(document.getElementById("savingsChart")), Sn();
  }
  function Og(r, e) {
    clearTimeout(rk), (rk = setTimeout(r, e));
  }
  function zf(r) {
    return Number(r.replace(/[^0-9\.-]+/g, ""));
  }
  function Jre(r, e) {
    return Array.from({ length: e }, (t, i) => yg(new Date(r), i));
  }
  function eie(r, e) {
    let t = kn(e, "yyyy-MM-dd");
    return r.find((n) => n.date === t) || tie(r, e);
  }
  function tie(r, e) {
    let t = null,
      i = 1 / 0;
    return (
      r.forEach((n) => {
        let a = wre(n.date),
          s = Math.abs(kre(e, a));
        Tre(a, e)
          ? s < i && ((i = s), (t = n))
          : a < e && s < i && ((i = s), (t = n));
      }),
      t
    );
  }
  function rie(r, e, t) {
    let i = e / r.close,
      n = lie(t, i, e);
    return { sharesPurchased: i, investmentWithFees: n };
  }
  function iie(r, e, t, i) {
    let n = eie(sk, r);
    if (!n && t === 0)
      return (
        console.log("No stock data found"),
        { finalValue: e, investmentWithFees: e }
      );
    if (!n) return { finalValue: 0, investmentWithFees: 0 };
    let a = t === 0 ? e : Yf,
      { sharesPurchased: s, investmentWithFees: u } = rie(n, a, i);
    return (qg += s), { finalValue: aie(n), investmentWithFees: u };
  }
  function Sn() {
    let r = xg,
      e = 0,
      t = Xe * 12,
      i = Jre(ri.from, t),
      n = [],
      a = [];
    i.forEach((s, u) => {
      let { finalValue: o, investmentWithFees: l } = iie(s, r, u, bg);
      (e += l), n.push(o), a.push(e);
    }),
      nie(n, a);
  }
  function nie(r, e) {
    let t = document.getElementById("savings-investment-amount-txt"),
      i = document.getElementById("savings-profit-amount-txt"),
      n = document.getElementById("savings-total-amount-txt"),
      a = document.getElementById("savings-card-returns-percent"),
      s = r[r.length - 1];
    (t.innerText = Ct(e[e.length - 1], Tn)),
      (i.innerText = Ct(s - e[e.length - 1], Tn)),
      (n.innerText = Ct(s, Tn));
    let u = e[e.length - 1],
      o = s;
    (a.innerText = ik(u, o)),
      (document.getElementById("savings-profit-mobile").innerText = Ct(
        s - e[e.length - 1],
        Tn
      )),
      (document.getElementById("savings-total-mobile").innerText = Ct(s, Tn)),
      (document.getElementById("savings-roi-mobile").innerText = ik(u, o)),
      (dt.data.datasets[0].data = r),
      (dt.data.datasets[1].data = e),
      dt.update(),
      vie(dt);
  }
  function aie(r) {
    let e = r ? r.close : 0;
    return qg * e;
  }
  function ik(r, e) {
    return (((e - r) / r) * 100).toFixed(0) + "%";
  }
  function Pg() {
    return Ke(this, null, function* () {
      try {
        let r = `https://financialmodelingprep.com/api/v3/historical-price-full/${Wf}?from=${ri.from}&to=${ri.to}&apikey=814ec78e2473ac4c01ac84f650c9ce22`,
          e = yield fetch(r);
        if (!e.ok) throw new Error(`HTTP error! status: ${e.status}`);
        sk = (yield e.json()).historical;
      } catch (r) {
        console.error("Error fetching prices:", r);
      }
    });
  }
  function ok(r) {
    if (r <= 0) {
      console.error("Invalid number of months. Must be greater than 0.");
      return;
    }
    let e = new Date(),
      t = Dre(e, r - 1);
    ri = { from: kn(t, "yyyy-MM-dd"), to: kn(e, "yyyy-MM-dd") };
  }
  function sie(r) {
    if (!r) {
      console.error("Canvas element is required to initialize the chart.");
      return;
    }
    let e = r.getContext("2d"),
      t = Xe * 12,
      i = nk(e, r.height, "rgba(51,182,160)"),
      n = nk(e, r.height, "rgba(217,108,87)"),
      a = uie(t, i, n);
    dt = new ak(e, {
      type: "line",
      data: a,
      options: {
        maintainAspectRatio: !1,
        plugins: {
          legend: { display: !0 },
          chartAreaBorder: {
            borderColor: "red",
            borderWidth: 0,
            borderDash: [5, 5],
            borderDashOffset: 2,
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (s, u, o) {
                let d = o.length - 1,
                  c = Math.floor(d / 2);
                return u % 4 ? this.getLabelForValue(s) : "";
              },
            },
            grid: { display: !1 },
          },
          y: {
            ticks: {
              callback: function (s, u, o) {
                return u === 0 ? "" : s;
              },
            },
            grid: { display: !0 },
          },
        },
      },
    });
  }
  function uie(r, e, t) {
    let i = Array.from({ length: r }, (a, s) =>
        kn(yg(new Date(ri.from), s), "MMM yyyy")
      ),
      n = [
        {
          label: "Total Value",
          data: Array.from({ length: r }, () => 0),
          borderColor: "rgb(51,182,160)",
          backgroundColor: e,
          fill: "origin",
          tension: 0.3,
        },
        {
          label: "Investment",
          data: Array.from({ length: r }, () => 0),
          borderColor: "rgb(217,108,87)",
          backgroundColor: t,
          fill: "origin",
          tension: 0.3,
        },
      ];
    return { labels: i, datasets: n };
  }
  function nk(r, e, t) {
    let i = t.startsWith("rgba"),
      n = r.createLinearGradient(0, 0, 0, e);
    if ((n.addColorStop(0, t), i)) n.addColorStop(1, t);
    else {
      let a = t.replace(")", ", 0.05)").replace("rgb", "rgba");
      n.addColorStop(1, a);
    }
    return n;
  }
  function oie(r) {
    return Ke(this, null, function* () {
      Bf();
      let e = r.currentTarget.value,
        t =
          r.currentTarget.options[r.currentTarget.selectedIndex].getAttribute(
            "data-region"
          ) === "EU";
      (Wf !== e || bg !== t) && ((Wf = e), (bg = t), yield Pg(), Sn());
    });
  }
  function lie(r, e, t) {
    let i = 0;
    return (
      r
        ? e < 3e3
          ? (i = 1.8)
          : (i = die(t, 0.06))
        : e < 500
        ? (i = 2.5)
        : (i = 2.5 + 0.005),
      t - i
    );
  }
  function die(r, e) {
    return r - (r * e) / 100;
  }
  function Ct(r, e = "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: e,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(r);
  }
  function fie(r) {
    (Yf = r), Bf(), Sn();
  }
  function cie(r) {
    return Ke(this, null, function* () {
      let e = parseInt(r, 10);
      (Xe = isNaN(e) || e < 3 ? 3 : Math.min(e, 10)),
        (document.getElementById("savings-recurring-years-input").value = Xe),
        (document.getElementById("savings-card-recurring-years-txt").innerText =
          Xe),
        ok(Xe * 12),
        yield Pg(),
        Bf(),
        Sn(),
        hie();
    });
  }
  function Bf() {
    (qg = 0), (Ere = 0), (Nre = 0), (Lre = 0);
  }
  function hie() {
    if (!dt) {
      console.error("Chart has not been initialized.");
      return;
    }
    let r = Xe * 12;
    (dt.data.labels = Array.from({ length: r }, (e, t) =>
      kn(yg(new Date(ri.from), t), "MMM yyyy")
    )),
      dt.data.datasets.forEach((e) => {}),
      dt.update();
  }
  function vie(r) {
    if (!r || !r.ctx) {
      console.error("Chart or chart context is not available.");
      return;
    }
    r.data.datasets.forEach((e, t) => {
      let n = r.ctx.createLinearGradient(0, 0, 0, r.height);
      t === 0
        ? (n.addColorStop(0, "rgba(51,182,160,1)"),
          n.addColorStop(1, "rgba(51,182,160,0)"))
        : (n.addColorStop(0, "rgba(217,108,87,1)"),
          n.addColorStop(1, "rgba(217,108,87,0)")),
        (e.backgroundColor = n);
    }),
      r.update();
  }
})();
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
/*!
 * Chart.js v4.3.3
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
