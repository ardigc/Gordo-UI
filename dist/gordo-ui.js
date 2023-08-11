import pf, { useState as Rn, useRef as ms, useEffect as Np, createContext as zp, useContext as ys, useCallback as Jk } from "react";
function eD(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var hS = { exports: {} }, Lp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KC;
function tD() {
  if (KC)
    return Lp;
  KC = 1;
  var _ = pf, E = Symbol.for("react.element"), y = Symbol.for("react.fragment"), D = Object.prototype.hasOwnProperty, x = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(V, U, $) {
    var ee, B = {}, W = null, q = null;
    $ !== void 0 && (W = "" + $), U.key !== void 0 && (W = "" + U.key), U.ref !== void 0 && (q = U.ref);
    for (ee in U)
      D.call(U, ee) && !j.hasOwnProperty(ee) && (B[ee] = U[ee]);
    if (V && V.defaultProps)
      for (ee in U = V.defaultProps, U)
        B[ee] === void 0 && (B[ee] = U[ee]);
    return { $$typeof: E, type: V, key: W, ref: q, props: B, _owner: x.current };
  }
  return Lp.Fragment = y, Lp.jsx = m, Lp.jsxs = m, Lp;
}
var Mp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZC;
function nD() {
  return ZC || (ZC = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = pf, E = Symbol.for("react.element"), y = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), V = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), re = Symbol.iterator, we = "@@iterator";
    function se(w) {
      if (w === null || typeof w != "object")
        return null;
      var K = re && w[re] || w[we];
      return typeof K == "function" ? K : null;
    }
    var De = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(w) {
      {
        for (var K = arguments.length, oe = new Array(K > 1 ? K - 1 : 0), Oe = 1; Oe < K; Oe++)
          oe[Oe - 1] = arguments[Oe];
        ce("error", w, oe);
      }
    }
    function ce(w, K, oe) {
      {
        var Oe = De.ReactDebugCurrentFrame, Je = Oe.getStackAddendum();
        Je !== "" && (K += "%s", oe = oe.concat([Je]));
        var mt = oe.map(function(tt) {
          return String(tt);
        });
        mt.unshift("Warning: " + K), Function.prototype.apply.call(console[w], console, mt);
      }
    }
    var Ue = !1, de = !1, Re = !1, je = !1, vt = !1, ht;
    ht = Symbol.for("react.module.reference");
    function Xe(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === D || w === j || vt || w === x || w === $ || w === ee || je || w === q || Ue || de || Re || typeof w == "object" && w !== null && (w.$$typeof === W || w.$$typeof === B || w.$$typeof === m || w.$$typeof === V || w.$$typeof === U || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === ht || w.getModuleId !== void 0));
    }
    function We(w, K, oe) {
      var Oe = w.displayName;
      if (Oe)
        return Oe;
      var Je = K.displayName || K.name || "";
      return Je !== "" ? oe + "(" + Je + ")" : oe;
    }
    function Tt(w) {
      return w.displayName || "Context";
    }
    function Ne(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case D:
          return "Fragment";
        case y:
          return "Portal";
        case j:
          return "Profiler";
        case x:
          return "StrictMode";
        case $:
          return "Suspense";
        case ee:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case V:
            var K = w;
            return Tt(K) + ".Consumer";
          case m:
            var oe = w;
            return Tt(oe._context) + ".Provider";
          case U:
            return We(w, w.render, "ForwardRef");
          case B:
            var Oe = w.displayName || null;
            return Oe !== null ? Oe : Ne(w.type) || "Memo";
          case W: {
            var Je = w, mt = Je._payload, tt = Je._init;
            try {
              return Ne(tt(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = Object.assign, et = 0, ut, Ut, ne, ye, ae, nt, rt;
    function Yt() {
    }
    Yt.__reactDisabledLog = !0;
    function Gt() {
      {
        if (et === 0) {
          ut = console.log, Ut = console.info, ne = console.warn, ye = console.error, ae = console.group, nt = console.groupCollapsed, rt = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: Yt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        et++;
      }
    }
    function Xt() {
      {
        if (et--, et === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qe({}, w, {
              value: ut
            }),
            info: qe({}, w, {
              value: Ut
            }),
            warn: qe({}, w, {
              value: ne
            }),
            error: qe({}, w, {
              value: ye
            }),
            group: qe({}, w, {
              value: ae
            }),
            groupCollapsed: qe({}, w, {
              value: nt
            }),
            groupEnd: qe({}, w, {
              value: rt
            })
          });
        }
        et < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = De.ReactCurrentDispatcher, ir;
    function mn(w, K, oe) {
      {
        if (ir === void 0)
          try {
            throw Error();
          } catch (Je) {
            var Oe = Je.stack.trim().match(/\n( *(at )?)/);
            ir = Oe && Oe[1] || "";
          }
        return `
` + ir + w;
      }
    }
    var Hn = !1, zr;
    {
      var qn = typeof WeakMap == "function" ? WeakMap : Map;
      zr = new qn();
    }
    function yr(w, K) {
      if (!w || Hn)
        return "";
      {
        var oe = zr.get(w);
        if (oe !== void 0)
          return oe;
      }
      var Oe;
      Hn = !0;
      var Je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = at.current, at.current = null, Gt();
      try {
        if (K) {
          var tt = function() {
            throw Error();
          };
          if (Object.defineProperty(tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(tt, []);
            } catch (gt) {
              Oe = gt;
            }
            Reflect.construct(w, [], tt);
          } else {
            try {
              tt.call();
            } catch (gt) {
              Oe = gt;
            }
            w.call(tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            Oe = gt;
          }
          w();
        }
      } catch (gt) {
        if (gt && Oe && typeof gt.stack == "string") {
          for (var He = gt.stack.split(`
`), _n = Oe.stack.split(`
`), $t = He.length - 1, It = _n.length - 1; $t >= 1 && It >= 0 && He[$t] !== _n[It]; )
            It--;
          for (; $t >= 1 && It >= 0; $t--, It--)
            if (He[$t] !== _n[It]) {
              if ($t !== 1 || It !== 1)
                do
                  if ($t--, It--, It < 0 || He[$t] !== _n[It]) {
                    var lr = `
` + He[$t].replace(" at new ", " at ");
                    return w.displayName && lr.includes("<anonymous>") && (lr = lr.replace("<anonymous>", w.displayName)), typeof w == "function" && zr.set(w, lr), lr;
                  }
                while ($t >= 1 && It >= 0);
              break;
            }
        }
      } finally {
        Hn = !1, at.current = mt, Xt(), Error.prepareStackTrace = Je;
      }
      var Mi = w ? w.displayName || w.name : "", Ss = Mi ? mn(Mi) : "";
      return typeof w == "function" && zr.set(w, Ss), Ss;
    }
    function sn(w, K, oe) {
      return yr(w, !1);
    }
    function bn(w) {
      var K = w.prototype;
      return !!(K && K.isReactComponent);
    }
    function yn(w, K, oe) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return yr(w, bn(w));
      if (typeof w == "string")
        return mn(w);
      switch (w) {
        case $:
          return mn("Suspense");
        case ee:
          return mn("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case U:
            return sn(w.render);
          case B:
            return yn(w.type, K, oe);
          case W: {
            var Oe = w, Je = Oe._payload, mt = Oe._init;
            try {
              return yn(mt(Je), K, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, jt = {}, Kr = De.ReactDebugCurrentFrame;
    function xa(w) {
      if (w) {
        var K = w._owner, oe = yn(w.type, w._source, K ? K.type : null);
        Kr.setExtraStackFrame(oe);
      } else
        Kr.setExtraStackFrame(null);
    }
    function Ja(w, K, oe, Oe, Je) {
      {
        var mt = Function.call.bind(kn);
        for (var tt in w)
          if (mt(w, tt)) {
            var He = void 0;
            try {
              if (typeof w[tt] != "function") {
                var _n = Error((Oe || "React class") + ": " + oe + " type `" + tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _n.name = "Invariant Violation", _n;
              }
              He = w[tt](K, tt, Oe, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($t) {
              He = $t;
            }
            He && !(He instanceof Error) && (xa(Je), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", oe, tt, typeof He), xa(null)), He instanceof Error && !(He.message in jt) && (jt[He.message] = !0, xa(Je), ge("Failed %s type: %s", oe, He.message), xa(null));
          }
      }
    }
    var Aa = Array.isArray;
    function Ca(w) {
      return Aa(w);
    }
    function Ur(w) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, oe = K && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return oe;
      }
    }
    function ja(w) {
      try {
        return Or(w), !1;
      } catch {
        return !0;
      }
    }
    function Or(w) {
      return "" + w;
    }
    function Ea(w) {
      if (ja(w))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ur(w)), Or(w);
    }
    var cn = De.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Di, wa, ue;
    ue = {};
    function Le(w) {
      if (kn.call(w, "ref")) {
        var K = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function it(w) {
      if (kn.call(w, "key")) {
        var K = Object.getOwnPropertyDescriptor(w, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Rt(w, K) {
      if (typeof w.ref == "string" && cn.current && K && cn.current.stateNode !== K) {
        var oe = Ne(cn.current.type);
        ue[oe] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(cn.current.type), w.ref), ue[oe] = !0);
      }
    }
    function qt(w, K) {
      {
        var oe = function() {
          Di || (Di = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        oe.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function Dn(w, K) {
      {
        var oe = function() {
          wa || (wa = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        oe.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var an = function(w, K, oe, Oe, Je, mt, tt) {
      var He = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: w,
        key: K,
        ref: oe,
        props: tt,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return He._store = {}, Object.defineProperty(He._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(He, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(He, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
    };
    function gr(w, K, oe, Oe, Je) {
      {
        var mt, tt = {}, He = null, _n = null;
        oe !== void 0 && (Ea(oe), He = "" + oe), it(K) && (Ea(K.key), He = "" + K.key), Le(K) && (_n = K.ref, Rt(K, Je));
        for (mt in K)
          kn.call(K, mt) && !Ar.hasOwnProperty(mt) && (tt[mt] = K[mt]);
        if (w && w.defaultProps) {
          var $t = w.defaultProps;
          for (mt in $t)
            tt[mt] === void 0 && (tt[mt] = $t[mt]);
        }
        if (He || _n) {
          var It = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          He && qt(tt, It), _n && Dn(tt, It);
        }
        return an(w, He, _n, Je, Oe, cn.current, tt);
      }
    }
    var Ot = De.ReactCurrentOwner, jr = De.ReactDebugCurrentFrame;
    function Lt(w) {
      if (w) {
        var K = w._owner, oe = yn(w.type, w._source, K ? K.type : null);
        jr.setExtraStackFrame(oe);
      } else
        jr.setExtraStackFrame(null);
    }
    var At;
    At = !1;
    function au(w) {
      return typeof w == "object" && w !== null && w.$$typeof === E;
    }
    function dl() {
      {
        if (Ot.current) {
          var w = Ne(Ot.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function iu(w) {
      {
        if (w !== void 0) {
          var K = w.fileName.replace(/^.*[\\\/]/, ""), oe = w.lineNumber;
          return `

Check your code at ` + K + ":" + oe + ".";
        }
        return "";
      }
    }
    var lo = {};
    function gs(w) {
      {
        var K = dl();
        if (!K) {
          var oe = typeof w == "string" ? w : w.displayName || w.name;
          oe && (K = `

Check the top-level render call using <` + oe + ">.");
        }
        return K;
      }
    }
    function pl(w, K) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var oe = gs(K);
        if (lo[oe])
          return;
        lo[oe] = !0;
        var Oe = "";
        w && w._owner && w._owner !== Ot.current && (Oe = " It was passed a child from " + Ne(w._owner.type) + "."), Lt(w), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, Oe), Lt(null);
      }
    }
    function lu(w, K) {
      {
        if (typeof w != "object")
          return;
        if (Ca(w))
          for (var oe = 0; oe < w.length; oe++) {
            var Oe = w[oe];
            au(Oe) && pl(Oe, K);
          }
        else if (au(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var Je = se(w);
          if (typeof Je == "function" && Je !== w.entries)
            for (var mt = Je.call(w), tt; !(tt = mt.next()).done; )
              au(tt.value) && pl(tt.value, K);
        }
      }
    }
    function vl(w) {
      {
        var K = w.type;
        if (K == null || typeof K == "string")
          return;
        var oe;
        if (typeof K == "function")
          oe = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === U || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === B))
          oe = K.propTypes;
        else
          return;
        if (oe) {
          var Oe = Ne(K);
          Ja(oe, w.props, "prop", Oe, w);
        } else if (K.PropTypes !== void 0 && !At) {
          At = !0;
          var Je = Ne(K);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Je || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function uu(w) {
      {
        for (var K = Object.keys(w.props), oe = 0; oe < K.length; oe++) {
          var Oe = K[oe];
          if (Oe !== "children" && Oe !== "key") {
            Lt(w), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Lt(null);
            break;
          }
        }
        w.ref !== null && (Lt(w), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
      }
    }
    function Ha(w, K, oe, Oe, Je, mt) {
      {
        var tt = Xe(w);
        if (!tt) {
          var He = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (He += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _n = iu(Je);
          _n ? He += _n : He += dl();
          var $t;
          w === null ? $t = "null" : Ca(w) ? $t = "array" : w !== void 0 && w.$$typeof === E ? ($t = "<" + (Ne(w.type) || "Unknown") + " />", He = " Did you accidentally export a JSX literal instead of a component?") : $t = typeof w, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $t, He);
        }
        var It = gr(w, K, oe, Je, mt);
        if (It == null)
          return It;
        if (tt) {
          var lr = K.children;
          if (lr !== void 0)
            if (Oe)
              if (Ca(lr)) {
                for (var Mi = 0; Mi < lr.length; Mi++)
                  lu(lr[Mi], w);
                Object.freeze && Object.freeze(lr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lu(lr, w);
        }
        return w === D ? uu(It) : vl(It), It;
      }
    }
    function _i(w, K, oe) {
      return Ha(w, K, oe, !0);
    }
    function Hr(w, K, oe) {
      return Ha(w, K, oe, !1);
    }
    var Ta = Hr, Li = _i;
    Mp.Fragment = D, Mp.jsx = Ta, Mp.jsxs = Li;
  }()), Mp;
}
process.env.NODE_ENV === "production" ? hS.exports = tD() : hS.exports = nD();
var A = hS.exports, aE = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(_) {
  (function() {
    var E = {}.hasOwnProperty;
    function y() {
      for (var D = [], x = 0; x < arguments.length; x++) {
        var j = arguments[x];
        if (j) {
          var m = typeof j;
          if (m === "string" || m === "number")
            D.push(j);
          else if (Array.isArray(j)) {
            if (j.length) {
              var V = y.apply(null, j);
              V && D.push(V);
            }
          } else if (m === "object") {
            if (j.toString !== Object.prototype.toString && !j.toString.toString().includes("[native code]")) {
              D.push(j.toString());
              continue;
            }
            for (var U in j)
              E.call(j, U) && j[U] && D.push(U);
          }
        }
      }
      return D.join(" ");
    }
    _.exports ? (y.default = y, _.exports = y) : window.classNames = y;
  })();
})(aE);
var rD = aE.exports;
const $e = /* @__PURE__ */ eD(rD);
function iE({
  children: _,
  className: E,
  component: y,
  elevation: D = 4,
  square: x,
  variant: j = "elevation",
  ...m
}) {
  const V = y || "div";
  return /* @__PURE__ */ A.jsx(
    V,
    {
      className: $e(" w-full overflow-auto", {
        rounded: !x,
        "shadow-1": D === 1 && j === "elevation",
        "shadow-2": D === 2 && j === "elevation",
        "shadow-3": D === 3 && j === "elevation",
        "shadow-4": D === 4 && j === "elevation",
        "shadow-5": D === 5 && j === "elevation",
        "shadow-6": D === 6 && j === "elevation",
        "shadow-7": D === 7 && j === "elevation",
        "shadow-8": D === 8 && j === "elevation",
        "shadow-9": D === 9 && j === "elevation",
        "shadow-10": D === 10 && j === "elevation",
        "shadow-11": D === 11 && j === "elevation",
        "shadow-12": D === 12 && j === "elevation",
        "shadow-13": D === 13 && j === "elevation",
        "shadow-14": D === 14 && j === "elevation",
        "border border-neutral-400": j === "outlined",
        [E || ""]: E
      }),
      ...m,
      children: _
    }
  );
}
function MD() {
  return /* @__PURE__ */ A.jsx("div", { children: /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-star",
      width: 16,
      height: 16,
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" })
      ]
    }
  ) });
}
function ND() {
  return /* @__PURE__ */ A.jsx("div", { children: /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-star",
      width: 16,
      height: 16,
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "gray",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" })
      ]
    }
  ) });
}
function zD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-caret-down",
      width: 15,
      height: 15,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M6 10l6 6 6-6H6" })
      ]
    }
  );
}
function UD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-caret-up",
      width: 15,
      height: 15,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M18 14l-6-6-6 6h12" })
      ]
    }
  );
}
function OD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-left",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M15 6l-6 6 6 6" })
      ]
    }
  );
}
function AD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-left",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "gray",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M15 6l-6 6 6 6" })
      ]
    }
  );
}
function jD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-right",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M9 6l6 6-6 6" })
      ]
    }
  );
}
function HD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-right",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "gray",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M9 6l6 6-6 6" })
      ]
    }
  );
}
function FD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-left-pipe",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M7 6v12M18 6l-6 6 6 6" })
      ]
    }
  );
}
function VD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-left-pipe",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "gray",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M7 6v12M18 6l-6 6 6 6" })
      ]
    }
  );
}
function BD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-right-pipe",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M6 6l6 6-6 6M17 5v13" })
      ]
    }
  );
}
function PD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-chevron-right-pipe",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "gray",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M6 6l6 6-6 6M17 5v13" })
      ]
    }
  );
}
function YD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-arrow-down",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 5v14M18 13l-6 6M6 13l6 6" })
      ]
    }
  );
}
function $D() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-arrow-up",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 5v14M18 11l-6-6M6 11l6-6" })
      ]
    }
  );
}
function aD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-circle-check",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      "stroke-width": 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
        /* @__PURE__ */ A.jsx("path", { d: "M9 12l2 2l4 -4" })
      ]
    }
  );
}
function iD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-alert-triangle",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      "stroke-width": 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 9v4" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 17h.01" })
      ]
    }
  );
}
function lD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-exclamation-circle",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      "stroke-width": 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 9v4" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 16v.01" })
      ]
    }
  );
}
function uD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-info-circle",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      "stroke-width": 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
        /* @__PURE__ */ A.jsx("path", { d: "M12 9h.01" }),
        /* @__PURE__ */ A.jsx("path", { d: "M11 12h1v4h1" })
      ]
    }
  );
}
function oD() {
  return /* @__PURE__ */ A.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon icon-tabler icon-tabler-x",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      "stroke-width": 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ A.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ A.jsx("path", { d: "M18 6l-12 12" }),
        /* @__PURE__ */ A.jsx("path", { d: "M6 6l12 12" })
      ]
    }
  );
}
function sD({
  children: _,
  variant: E = "text",
  onClick: y,
  color: D = "primary",
  disabled: x,
  href: j,
  disableElevation: m,
  disableRipple: V,
  size: U = "medium",
  startIcon: $,
  endIcon: ee,
  className: B,
  classes: W,
  component: q,
  fullWidth: re,
  id: we,
  ...se
}) {
  const [De, ge] = Rn(!1), [ce, Ue] = Rn(), de = q || (j ? "a" : "button"), Re = (vt) => {
    if (j !== void 0)
      return;
    const Xe = vt.currentTarget.getBoundingClientRect(), We = {
      x: vt.clientX - Xe.left,
      y: vt.clientY - Xe.top
    };
    Ue({ x: We.x, y: We.y }), V || (ge(!0), setTimeout(() => {
      ge(!1);
    }, 600)), y && y(vt);
  }, je = (vt) => {
    if (!j)
      return;
    const Xe = vt.currentTarget.getBoundingClientRect(), We = {
      x: vt.clientX - Xe.left,
      y: vt.clientY - Xe.top
    };
    Ue({ x: We.x, y: We.y }), V || (ge(!0), setTimeout(() => {
      ge(!1);
    }, 600)), y && y(vt);
  };
  return /* @__PURE__ */ A.jsxs(
    de,
    {
      ...se,
      disabled: x,
      href: j,
      id: we,
      onClick: j ? je : Re,
      className: $e(
        "inline-flex items-center  justify-center  relative font-base  outline-none font-medium text-sm tracking-wide uppercase rounded-[4px] min-w-[64px]",
        "overflow-hidden",
        {
          "w-full": re,
          "py-[6px] px-2": U === "medium" && E === "text",
          "py-1 px-[5px]": U === "small" && E === "text",
          "py-2 px-[12px]": U === "large" && E === "text",
          "py-[5px] px-[15px]": U === "medium" && E === "outlined",
          "py-[3px] px-[9px]": U === "small" && E === "outlined",
          "py-[7px] px-[21px]": U === "large" && E === "outlined",
          "py-[6px] px-4": U === "medium" && E === "contained",
          "py-1 px-[10px]": U === "small" && E === "contained",
          "py-[8px] px-[22px]": U === "large" && E === "contained",
          " hover:transition-all hover:duration-200 hover:linear  bg-transparent hover:bg-opacity-10 ": (E === "outlined" || E === "text") && !x,
          " hover:transition-all hover:duration-200 hover:linear  hover:bg-opacity-10 ": E === "contained" && !x,
          "border-primary-color border text-primary-color hover:bg-primary-color": D === "primary" && E === "outlined" && !x,
          "border-secondary-color border text-secondary-color hover:bg-secondary-color": D === "secondary" && E === "outlined" && !x,
          "border-error-color border text-error-color hover:bg-error-color": D === "error" && E === "outlined" && !x,
          "border-warning-color border text-warning-color hover:bg-warning-color": D === "warning" && E === "outlined" && !x,
          "border-success-color border text-success-color hover:bg-success-color": D === "success" && E === "outlined" && !x,
          "border-info-color border text-info-color hover:bg-info-color": D === "info" && E === "outlined" && !x,
          "border-inherit border text-inherit hover:bg-inherit": D === "inherit" && E === "outlined" && !x,
          "bg-primary-color text-white bg-opacity-90 hover:bg-opacity-100": D === "primary" && E === "contained" && !x,
          "bg-secondary-color text-white bg-opacity-90 hover:bg-opacity-100": D === "secondary" && E === "contained" && !x,
          "bg-error-color text-white bg-opacity-90 hover:bg-opacity-100": D === "error" && E === "contained" && !x,
          "bg-warning-color text-white bg-opacity-90 hover:bg-opacity-100": D === "warning" && E === "contained" && !x,
          "bg-success-color text-white bg-opacity-90 hover:bg-opacity-100": D === "success" && E === "contained" && !x,
          "bg-info-color text-white bg-opacity-90 hover:bg-opacity-100": D === "info" && E === "contained" && !x,
          "bg-inherit text-white bg-opacity-90 hover:bg-opacity-100": D === "inherit" && E === "contained" && !x,
          "text-primary-color hover:bg-primary-color": D === "primary" && E === "text" && !x,
          "text-secondary-color hover:bg-secondary-color": D === "secondary" && E === "text" && !x,
          "text-error-color hover:bg-error-color": D === "error" && E === "text" && !x,
          "text-warning-color hover:bg-warning-color": D === "warning" && E === "text" && !x,
          "text-info-color hover:bg-info-color": D === "info" && E === "text" && !x,
          "text-success-color hover:bg-success-color": D === "success" && E === "text" && !x,
          "text-inherit hover:bg-inherit": D === "inherit" && E === "text" && !x,
          "text-gray-400 py-[6px] px-2": x,
          "bg-gray-200": x && E === "contained",
          "border-gray-200 border": x && E === "outlined",
          "shadow shadow-black": E === "contained" && !x && !m,
          [B || ""]: B,
          [(W == null ? void 0 : W.buttonClassName) || ""]: W == null ? void 0 : W.buttonClassName
        }
      ),
      children: [
        $ && /* @__PURE__ */ A.jsx("span", { className: $e("mr-2 -ml-1"), children: $ }),
        _,
        ee && /* @__PURE__ */ A.jsx("span", { className: $e("-mr-1 ml-2"), children: ee }),
        De && /* @__PURE__ */ A.jsx(
          "span",
          {
            style: {
              top: ce == null ? void 0 : ce.y,
              left: ce == null ? void 0 : ce.x,
              transform: "translate(-50%, -50%)"
            },
            className: $e({
              "animate-ripple absolute inline-flex w-full h-full   rounded-full bg-opacity-25 origin-center": E === "text" || E === "outlined",
              "bg-primary-color": (E === "outlined" || E === "text") && D === "primary",
              "bg-secondary-color": (E === "outlined" || E === "text") && D === "secondary",
              "bg-error-color": (E === "outlined" || E === "text") && D === "error",
              "bg-warning-color": (E === "outlined" || E === "text") && D === "warning",
              "bg-info-color": (E === "outlined" || E === "text") && D === "info",
              "bg-success-color": (E === "outlined" || E === "text") && D === "success",
              "bg-inherit": (E === "outlined" || E === "text") && D === "inherit",
              "animate-ripple absolute inline-flex w-full h-full  bg-white rounded-full bg-opacity-25 origin-center": E === "contained",
              [(W == null ? void 0 : W.rippleSpanClassName) || ""]: W == null ? void 0 : W.rippleSpanClassName
            })
          }
        )
      ]
    }
  );
}
function ID({
  children: _,
  severity: E = "success",
  action: y,
  onClose: D,
  variant: x = "standard",
  className: j,
  classes: m,
  closeText: V = "Close",
  icon: U,
  iconMapping: $,
  slots: ee,
  slotProps: B,
  ...W
}) {
  const q = E === "warning" && U !== !1, re = E === "success" && U !== !1, we = E === "error" && U !== !1, se = E === "info" && U !== !1, De = ee != null && ee.closeButton ? ee.closeButton : sD, ge = ee != null && ee.closeIcon ? ee.closeIcon : oD;
  return /* @__PURE__ */ A.jsxs(
    iE,
    {
      className: $e(
        "flex py-[6px] px-4 font-base text-sm font-normal items-center ",
        {
          "bg-green-100 text-success-color": E === "success" && x === "standard",
          "bg-yellow-100 text-warning-color": E === "warning" && x === "standard",
          "bg-red-100 text-error-color": E === "error" && x === "standard",
          "bg-blue-100 text-info-color": E === "info" && x === "standard",
          "border-success-color bg-white border text-success-color": E === "success" && x === "outlined",
          "border-warning-color bg-white border text-warning-color": E === "warning" && x === "outlined",
          "border-error-color border bg-white text-error-color": E === "error" && x === "outlined",
          "border-info-color border bg-white text-info-color": E === "info" && x === "outlined",
          "bg-success-color text-white": E === "success" && x === "filled",
          "bg-warning-color text-white": E === "warning" && x === "filled",
          "bg-error-color text-white": E === "error" && x === "filled",
          "bg-info-color text-white": E === "info" && x === "filled",
          [j || ""]: j,
          [(m == null ? void 0 : m.Paper) || ""]: m == null ? void 0 : m.Paper
        }
      ),
      elevation: 0,
      ...W,
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: $e("mr-[12px] py-[7px] flex opacity-90", {
              [(m == null ? void 0 : m.IconComponent) || ""]: m == null ? void 0 : m.IconComponent
            }),
            children: [
              re && ($ != null && $.success ? $.success : U !== void 0 ? U : /* @__PURE__ */ A.jsx(aD, {})),
              q && ($ != null && $.warning ? $.warning : U !== void 0 ? U : /* @__PURE__ */ A.jsx(iD, {})),
              we && ($ != null && $.error ? $.error : U !== void 0 ? U : /* @__PURE__ */ A.jsx(lD, {})),
              se && ($ != null && $.info ? $.info : U !== void 0 ? U : /* @__PURE__ */ A.jsx(uD, {}))
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: $e("py-2 min-w-0 overflow-auto text-inherit", {
              [(m == null ? void 0 : m.ChildrenComponent) || ""]: m == null ? void 0 : m.ChildrenComponent
            }),
            children: _
          }
        ),
        y && /* @__PURE__ */ A.jsx("div", { className: $e("ml-auto -mr-2 pl-4 "), children: y }),
        !y && D && /* @__PURE__ */ A.jsx("div", { className: $e("ml-auto -mr-2 pl-4 "), children: /* @__PURE__ */ A.jsx(
          De,
          {
            className: $e("rounded-full w-9 h-9  [div>&]:min-w-0", {
              "[div>&]:px-0 [div>&]:shadow-none": x === "filled"
            }),
            color: E,
            variant: x === "filled" ? "contained" : "text",
            title: V,
            onClick: (ce) => D(ce),
            ...B == null ? void 0 : B.closeButton,
            children: /* @__PURE__ */ A.jsx(ge, { ...B == null ? void 0 : B.closeIcon })
          }
        ) })
      ]
    }
  );
}
function QD({ children: _, className: E, ...y }) {
  return /* @__PURE__ */ A.jsx(
    "div",
    {
      className: $e(
        "-mt-[2px] mb-[5.6px] font-base font-medium text-base",
        { [E || ""]: E }
      ),
      ...y,
      children: _
    }
  );
}
function WD({
  children: _,
  size: E = "medium",
  onClick: y,
  href: D,
  disableRipple: x,
  // color='primary',
  disabled: j,
  edge: m,
  className: V,
  classes: U,
  ...$
}) {
  const [ee, B] = Rn(!1), [W, q] = Rn(), re = D ? "a" : "button", we = (De) => {
    if (D !== void 0)
      return;
    const ce = De.currentTarget.getBoundingClientRect(), Ue = {
      x: De.clientX - ce.left,
      y: De.clientY - ce.top
    };
    q({ x: Ue.x, y: Ue.y }), x || (B(!0), setTimeout(() => {
      B(!1);
    }, 600)), y && y(De);
  }, se = (De) => {
    if (!D)
      return;
    const ce = De.currentTarget.getBoundingClientRect(), Ue = {
      x: De.clientX - ce.left,
      y: De.clientY - ce.top
    };
    q({ x: Ue.x, y: Ue.y }), x || (B(!0), setTimeout(() => {
      B(!1);
    }, 600)), y && y(De);
  };
  return /* @__PURE__ */ A.jsxs(
    re,
    {
      disabled: j,
      href: D,
      onClick: D ? se : we,
      className: $e(
        "hover:rounded-full  inline-flex items-center  justify-center  relative overflow-hidden",
        {
          "-mr-3": m === "end",
          "-ml-3": m === "start",
          "p-2": E === "medium",
          "p-[5px]": E === "small",
          "p-3": E === "large",
          "rounded-full": ee,
          "hover:transition-all hover:duration-200 hover:linear hover:bg-slate-200": !j,
          [V || ""]: V,
          [(U == null ? void 0 : U.buttonClassName) || ""]: U == null ? void 0 : U.buttonClassName
        }
      ),
      ...$,
      children: [
        _,
        ee && /* @__PURE__ */ A.jsx(
          "span",
          {
            style: {
              top: W == null ? void 0 : W.y,
              left: W == null ? void 0 : W.x,
              transform: "translate(-50%, -50%)"
            },
            className: $e(
              "animate-ripple  absolute inline-flex w-full h-full bg-slate-400  rounded-full bg-opacity-25 origin-center",
              {
                [(U == null ? void 0 : U.rippleSpanClassName) || ""]: U == null ? void 0 : U.rippleSpanClassName
              }
            )
          }
        )
      ]
    }
  );
}
function Um({
  onClickaway: _,
  children: E
}) {
  const y = ms(null), D = (x) => {
    y.current && x.target instanceof Node && !y.current.contains(x.target) && _(x);
  };
  return Np(() => (document.addEventListener("click", D), () => {
    document.removeEventListener("click", D);
  }), [D]), /* @__PURE__ */ A.jsx(A.Fragment, { children: pf.cloneElement(E, { ref: y }) });
}
function GD({
  children: _,
  open: E,
  className: y,
  collapsedSize: D,
  component: x,
  easing: j,
  timeout: m = 500,
  ...V
}) {
  const U = ms(null), [$, ee] = Rn(0);
  Np(() => {
    var W, q;
    (W = U.current) != null && W.offsetHeight && ee((q = U.current) == null ? void 0 : q.offsetHeight);
  }, [E]);
  const B = x || "div";
  return /* @__PURE__ */ A.jsx(
    B,
    {
      style: {
        height: E ? $ : D || 0
      },
      className: $e("transition-all overflow-hidden", {
        [y || ""]: y,
        " min-h-0  ": E,
        "min-h-0 ": !E,
        "ease-linear": j === "ease-linear",
        "ease-in": j === "ease-in",
        "ease-out": j === "ease-out",
        "ease-in-out": j === "ease-in-out",
        "duration-0": m === 0,
        "duration-75": m === 75,
        "duration-100": m === 100,
        "duration-150": m === 150,
        "duration-200": m === 200,
        "duration-300": m === 300,
        "duration-500": m === 500,
        "duration-700": m === 700,
        "duration-1000": m === 1e3
      }),
      ...V,
      children: /* @__PURE__ */ A.jsx(A.Fragment, { children: pf.cloneElement(_, { ref: U }) })
    }
  );
}
const Om = zp({});
function XD({
  children: _,
  onSubmit: E,
  variant: y = "outlined",
  margin: D = "normal",
  fullWidth: x,
  className: j,
  component: m,
  disabled: V,
  error: U,
  color: $ = U ? "error" : "primary",
  focused: ee,
  hiddenLabel: B,
  required: W,
  ...q
}) {
  const [re, we] = Rn(!1), [se, De] = Rn(""), [ge, ce] = Rn(), Ue = m || "form";
  return /* @__PURE__ */ A.jsx(
    Um,
    {
      onClickaway: () => {
        ge || we(!1);
      },
      children: /* @__PURE__ */ A.jsx(
        Ue,
        {
          className: $e("relative inline-flex flex-col", {
            "mt-2 mb-1": D === "dense",
            "mt-4 mb-2": D === "normal",
            "w-full": x,
            [j || ""]: j
          }),
          onFocus: () => we(!0),
          onSubmit: E,
          ...q,
          children: /* @__PURE__ */ A.jsx(
            Om.Provider,
            {
              value: {
                contextTouched: re,
                contextColor: $,
                setContextValue: ce,
                contextLabel: se,
                setLabel: De,
                contextVariant: y,
                contextDisabled: V,
                focused: ee,
                hiddenLabel: B,
                contextRequired: W
              },
              children: _
            }
          )
        }
      )
    }
  );
}
function cD({
  children: _,
  className: E,
  component: y,
  componentProps: D,
  disabled: x,
  error: j,
  margin: m,
  id: V,
  ...U
}) {
  const $ = y || "p", { contextVariant: ee, contextColor: B, contextDisabled: W } = ys(Om);
  return x = W || x, j = B === "error" ? !0 : j, /* @__PURE__ */ A.jsx(
    $,
    {
      id: V,
      className: $e("text-xs text-left tracking-wide", {
        "mx-3": ee,
        "text-error-color": j,
        "mt-2 mb-1": m === "dense",
        "opacity-30": x,
        [E || ""]: E
      }),
      ...D,
      ...U,
      children: _
    }
  );
}
function fD({
  autocomplete: _,
  autoFocus: E,
  id: y,
  error: D,
  color: x = D ? "error" : "primary",
  classes: j,
  components: m,
  componentsProps: V,
  defaultValue: U,
  disabled: $,
  disaledUndeline: ee,
  endAdornment: B,
  inputComponent: W,
  inputProps: q,
  fullWidth: re,
  margin: we,
  multiline: se,
  inputRef: De,
  multilineTextAreaRef: ge,
  rows: ce,
  startAdornment: Ue,
  name: de,
  value: Re,
  placeholder: je,
  readonly: vt,
  required: ht,
  type: Xe,
  shrink: We,
  onChange: Tt,
  onFocus: Ne,
  className: qe,
  variant: et = "standard",
  size: ut = "medium",
  label: Ut,
  ...ne
}) {
  const [ye, ae] = Rn(!1), nt = (m == null ? void 0 : m.Input) || W, rt = m == null ? void 0 : m.Container, {
    contextVariant: Yt,
    contextTouched: Gt,
    contextLabel: Xt,
    contextRequired: at,
    setContextValue: ir,
    contextColor: mn,
    contextDisabled: Hn,
    focused: zr,
    hiddenLabel: qn
  } = ys(Om);
  E = zr || E, et = Yt || et, x = mn || x, We = Gt || We, Ut = Xt || Ut, $ = Hn || $, ht = at || ht;
  const yr = rt || "div", sn = rt ? { ...V == null ? void 0 : V.container } : {
    className: $e("input-custom group inline-flex flex relative ", {
      "hover:before:border-t-2 before:border-black after:border-b-2 before:border-t": !ee && !$ && et !== "outlined",
      "mt-4": Ut && et === "standard",
      "w-full": re,
      "bg-gray-100 rounded-t-sm": et === "filled",
      "px-[14px] py-4": se && et === "outlined",
      "px-3 pt-[25px] pb-2": se && et === "filled",
      "mt-2 mb-1": we === "dense",
      [`after:border-b-${x}-color`]: x,
      "after:border-b-primary-color": x === "primary",
      "after:border-b-secondary-color": x === "secondary",
      "after:border-b-error-color": x === "error",
      "after:border-b-warning-color": x === "warning",
      "after:border-b-info-color": x === "info",
      "after:border-b-success-color": x === "success",
      "input-custom-none ": !ye,
      "input-custom-normal": ye,
      [(j == null ? void 0 : j.constainerClassName) || ""]: j == null ? void 0 : j.constainerClassName,
      [qe || ""]: qe
    })
  }, bn = (jt) => {
    ir && ir(jt.currentTarget.value), Tt && Tt(jt);
  }, yn = (jt) => {
    if (jt) {
      if (typeof jt == "number")
        return jt;
      if (typeof jt == "string")
        return parseInt(jt);
    }
  }, kn = !se && !nt;
  return /* @__PURE__ */ A.jsx(Um, { onClickaway: () => ae(!1), children: /* @__PURE__ */ A.jsxs(yr, { ...sn, children: [
    kn && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      Ue && /* @__PURE__ */ A.jsx(
        "div",
        {
          className: $e("flex items-center pl-3", {
            "mt-4": et === "filled"
          }),
          children: Ue
        }
      ),
      /* @__PURE__ */ A.jsx(
        "input",
        {
          name: de,
          required: ht,
          ref: De,
          type: Xe,
          defaultValue: U,
          id: y,
          autoComplete: _,
          onChange: bn,
          value: Re,
          autoFocus: E,
          placeholder: je,
          className: $e("outline-none bg-white bg-opacity-0", {
            "w-full": re,
            "pt-6 pb-2": ut === "medium" && et === "filled",
            "pt-5 pb-1": ut === "small" && et === "filled",
            "pt-1 pb-[5px]": ut === "medium" && et === "standard",
            "pt-[1px] pb-[5px]": ut === "small" && et === "standard",
            "pr-3 pl-3": et === "filled",
            "px-3 py-[16.5px]": ut === "medium" && et === "outlined",
            "px-[8.5px] py-[14px]": ut === "small" && et === "outlined",
            [(j == null ? void 0 : j.inputClassName) || ""]: j == null ? void 0 : j.inputClassName
            // [className || '']: className,
          }),
          onFocus: () => {
            ae(!0), Ne && Ne();
          },
          readOnly: vt,
          disabled: $,
          ...q,
          ...ne
        }
      ),
      B && /* @__PURE__ */ A.jsx("div", { className: $e("flex items-center pr-3"), children: B })
    ] }),
    nt && /* @__PURE__ */ A.jsx(nt, { ...q, ...V == null ? void 0 : V.input }),
    se && /* @__PURE__ */ A.jsx(
      "textarea",
      {
        ref: ge,
        defaultValue: U,
        name: de,
        id: y,
        rows: yn(ce),
        autoComplete: _,
        autoFocus: E,
        onChange: Tt,
        value: Re,
        placeholder: je,
        readOnly: vt,
        required: ht,
        className: $e("outline-none resize-none", {
          "w-full": re,
          "pb-2": et === "standard",
          [(j == null ? void 0 : j.inputClassName) || ""]: j == null ? void 0 : j.inputClassName
        }),
        onFocus: () => {
          ae(!0), Ne && Ne();
        },
        disabled: $,
        ...q
      }
    ),
    et === "outlined" && /* @__PURE__ */ A.jsx(
      "fieldset",
      {
        className: $e(
          "absolute left-0 right-0   bottom-0   -top-[5px] px-2 border rounded-[4px] pointer-events-none",
          {
            " border-opacity-100 border-2": ye,
            "border-black group-hover:border-opacity-90 border-opacity-30": !ye,
            "border-primary-color": x === "primary" && ye,
            "border-secondary-color": x === "secondary" && ye,
            "border-error-color": x === "error" && ye,
            "border-warning-color": x === "warning" && ye,
            "border-info-color": x === "info" && ye,
            "border-success-color": x === "success" && ye
          }
        ),
        children: /* @__PURE__ */ A.jsx(
          "legend",
          {
            className: $e("text-sm", {
              " invisible max-w-0 transition-all": !We,
              " invisible max-w-full transition-all": We
            }),
            children: /* @__PURE__ */ A.jsx(
              "span",
              {
                className: $e("opacity-0 inline-block px-[5px]", {
                  hidden: qn
                }),
                children: Ut
              }
            )
          }
        )
      }
    )
  ] }) });
}
function dD({
  children: _,
  htmlFor: E,
  className: y,
  disableAnimation: D,
  shrink: x,
  error: j,
  color: m = j ? "error" : "primary",
  labelProps: V,
  disabled: U,
  margin: $,
  size: ee = "medium",
  variant: B,
  ...W
}) {
  const {
    contextVariant: q,
    contextTouched: re,
    setLabel: we,
    contextColor: se,
    contextDisabled: De,
    hiddenLabel: ge
  } = ys(Om);
  return B = q || B, x = re || x, m = se || m, U = De || U, we && we(_), /* @__PURE__ */ A.jsx(
    "label",
    {
      htmlFor: E,
      className: $e({
        relative: !x && !B,
        "absolute origin-top-left text-lg cursor-text left-0  z-10 ": !x || B,
        hidden: ge,
        "normal-label-text-field-filled": B === "filled" && !x || B === "outlined" && !x && ee === "medium",
        " translate-x-3 translate-y-3 ": B === "outlined" && !x && ee === "small",
        "-translate-y-2 translate-x-4  scale-75": B === "outlined" && x,
        "mini-label-text-field-filled": B === "filled" && x,
        " translate-y-4": B === "standard" && !x,
        " -translate-y-1  scale-75": B === "standard" && x,
        "opacity-30": U,
        "opacity-70": !U,
        "transition-all": !D,
        "mt-2 mb-1": $ === "dense",
        // [`text-${color}-color`]: shrink && color,
        "text-primary-color": x && m === "primary",
        "text-secondary-color": x && m === "secondary",
        "text-error-color": x && m === "error",
        "text-warning-color": x && m === "warning",
        "text-info-color": x && m === "info",
        "text-success-color": x && m === "success",
        [y || ""]: y
      }),
      ...V,
      ...W,
      children: _
    }
  );
}
var mS = { exports: {} }, ga = {}, zm = { exports: {} }, pS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JC;
function pD() {
  return JC || (JC = 1, function(_) {
    function E(ne, ye) {
      var ae = ne.length;
      ne.push(ye);
      e:
        for (; 0 < ae; ) {
          var nt = ae - 1 >>> 1, rt = ne[nt];
          if (0 < x(rt, ye))
            ne[nt] = ye, ne[ae] = rt, ae = nt;
          else
            break e;
        }
    }
    function y(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function D(ne) {
      if (ne.length === 0)
        return null;
      var ye = ne[0], ae = ne.pop();
      if (ae !== ye) {
        ne[0] = ae;
        e:
          for (var nt = 0, rt = ne.length, Yt = rt >>> 1; nt < Yt; ) {
            var Gt = 2 * (nt + 1) - 1, Xt = ne[Gt], at = Gt + 1, ir = ne[at];
            if (0 > x(Xt, ae))
              at < rt && 0 > x(ir, Xt) ? (ne[nt] = ir, ne[at] = ae, nt = at) : (ne[nt] = Xt, ne[Gt] = ae, nt = Gt);
            else if (at < rt && 0 > x(ir, ae))
              ne[nt] = ir, ne[at] = ae, nt = at;
            else
              break e;
          }
      }
      return ye;
    }
    function x(ne, ye) {
      var ae = ne.sortIndex - ye.sortIndex;
      return ae !== 0 ? ae : ne.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var j = performance;
      _.unstable_now = function() {
        return j.now();
      };
    } else {
      var m = Date, V = m.now();
      _.unstable_now = function() {
        return m.now() - V;
      };
    }
    var U = [], $ = [], ee = 1, B = null, W = 3, q = !1, re = !1, we = !1, se = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ce(ne) {
      for (var ye = y($); ye !== null; ) {
        if (ye.callback === null)
          D($);
        else if (ye.startTime <= ne)
          D($), ye.sortIndex = ye.expirationTime, E(U, ye);
        else
          break;
        ye = y($);
      }
    }
    function Ue(ne) {
      if (we = !1, ce(ne), !re)
        if (y(U) !== null)
          re = !0, ut(de);
        else {
          var ye = y($);
          ye !== null && Ut(Ue, ye.startTime - ne);
        }
    }
    function de(ne, ye) {
      re = !1, we && (we = !1, De(vt), vt = -1), q = !0;
      var ae = W;
      try {
        for (ce(ye), B = y(U); B !== null && (!(B.expirationTime > ye) || ne && !We()); ) {
          var nt = B.callback;
          if (typeof nt == "function") {
            B.callback = null, W = B.priorityLevel;
            var rt = nt(B.expirationTime <= ye);
            ye = _.unstable_now(), typeof rt == "function" ? B.callback = rt : B === y(U) && D(U), ce(ye);
          } else
            D(U);
          B = y(U);
        }
        if (B !== null)
          var Yt = !0;
        else {
          var Gt = y($);
          Gt !== null && Ut(Ue, Gt.startTime - ye), Yt = !1;
        }
        return Yt;
      } finally {
        B = null, W = ae, q = !1;
      }
    }
    var Re = !1, je = null, vt = -1, ht = 5, Xe = -1;
    function We() {
      return !(_.unstable_now() - Xe < ht);
    }
    function Tt() {
      if (je !== null) {
        var ne = _.unstable_now();
        Xe = ne;
        var ye = !0;
        try {
          ye = je(!0, ne);
        } finally {
          ye ? Ne() : (Re = !1, je = null);
        }
      } else
        Re = !1;
    }
    var Ne;
    if (typeof ge == "function")
      Ne = function() {
        ge(Tt);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), et = qe.port2;
      qe.port1.onmessage = Tt, Ne = function() {
        et.postMessage(null);
      };
    } else
      Ne = function() {
        se(Tt, 0);
      };
    function ut(ne) {
      je = ne, Re || (Re = !0, Ne());
    }
    function Ut(ne, ye) {
      vt = se(function() {
        ne(_.unstable_now());
      }, ye);
    }
    _.unstable_IdlePriority = 5, _.unstable_ImmediatePriority = 1, _.unstable_LowPriority = 4, _.unstable_NormalPriority = 3, _.unstable_Profiling = null, _.unstable_UserBlockingPriority = 2, _.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, _.unstable_continueExecution = function() {
      re || q || (re = !0, ut(de));
    }, _.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ht = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, _.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, _.unstable_getFirstCallbackNode = function() {
      return y(U);
    }, _.unstable_next = function(ne) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = W;
      }
      var ae = W;
      W = ye;
      try {
        return ne();
      } finally {
        W = ae;
      }
    }, _.unstable_pauseExecution = function() {
    }, _.unstable_requestPaint = function() {
    }, _.unstable_runWithPriority = function(ne, ye) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var ae = W;
      W = ne;
      try {
        return ye();
      } finally {
        W = ae;
      }
    }, _.unstable_scheduleCallback = function(ne, ye, ae) {
      var nt = _.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? nt + ae : nt) : ae = nt, ne) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return rt = ae + rt, ne = { id: ee++, callback: ye, priorityLevel: ne, startTime: ae, expirationTime: rt, sortIndex: -1 }, ae > nt ? (ne.sortIndex = ae, E($, ne), y(U) === null && ne === y($) && (we ? (De(vt), vt = -1) : we = !0, Ut(Ue, ae - nt))) : (ne.sortIndex = rt, E(U, ne), re || q || (re = !0, ut(de))), ne;
    }, _.unstable_shouldYield = We, _.unstable_wrapCallback = function(ne) {
      var ye = W;
      return function() {
        var ae = W;
        W = ye;
        try {
          return ne.apply(this, arguments);
        } finally {
          W = ae;
        }
      };
    };
  }(pS)), pS;
}
var vS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eE;
function vD() {
  return eE || (eE = 1, function(_) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = !1, y = !1, D = 5;
      function x(ue, Le) {
        var it = ue.length;
        ue.push(Le), V(ue, Le, it);
      }
      function j(ue) {
        return ue.length === 0 ? null : ue[0];
      }
      function m(ue) {
        if (ue.length === 0)
          return null;
        var Le = ue[0], it = ue.pop();
        return it !== Le && (ue[0] = it, U(ue, it, 0)), Le;
      }
      function V(ue, Le, it) {
        for (var Rt = it; Rt > 0; ) {
          var qt = Rt - 1 >>> 1, Dn = ue[qt];
          if ($(Dn, Le) > 0)
            ue[qt] = Le, ue[Rt] = Dn, Rt = qt;
          else
            return;
        }
      }
      function U(ue, Le, it) {
        for (var Rt = it, qt = ue.length, Dn = qt >>> 1; Rt < Dn; ) {
          var an = (Rt + 1) * 2 - 1, gr = ue[an], Ot = an + 1, jr = ue[Ot];
          if ($(gr, Le) < 0)
            Ot < qt && $(jr, gr) < 0 ? (ue[Rt] = jr, ue[Ot] = Le, Rt = Ot) : (ue[Rt] = gr, ue[an] = Le, Rt = an);
          else if (Ot < qt && $(jr, Le) < 0)
            ue[Rt] = jr, ue[Ot] = Le, Rt = Ot;
          else
            return;
        }
      }
      function $(ue, Le) {
        var it = ue.sortIndex - Le.sortIndex;
        return it !== 0 ? it : ue.id - Le.id;
      }
      var ee = 1, B = 2, W = 3, q = 4, re = 5;
      function we(ue, Le) {
      }
      var se = typeof performance == "object" && typeof performance.now == "function";
      if (se) {
        var De = performance;
        _.unstable_now = function() {
          return De.now();
        };
      } else {
        var ge = Date, ce = ge.now();
        _.unstable_now = function() {
          return ge.now() - ce;
        };
      }
      var Ue = 1073741823, de = -1, Re = 250, je = 5e3, vt = 1e4, ht = Ue, Xe = [], We = [], Tt = 1, Ne = null, qe = W, et = !1, ut = !1, Ut = !1, ne = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function nt(ue) {
        for (var Le = j(We); Le !== null; ) {
          if (Le.callback === null)
            m(We);
          else if (Le.startTime <= ue)
            m(We), Le.sortIndex = Le.expirationTime, x(Xe, Le);
          else
            return;
          Le = j(We);
        }
      }
      function rt(ue) {
        if (Ut = !1, nt(ue), !ut)
          if (j(Xe) !== null)
            ut = !0, Ea(Yt);
          else {
            var Le = j(We);
            Le !== null && cn(rt, Le.startTime - ue);
          }
      }
      function Yt(ue, Le) {
        ut = !1, Ut && (Ut = !1, Ar()), et = !0;
        var it = qe;
        try {
          var Rt;
          if (!y)
            return Gt(ue, Le);
        } finally {
          Ne = null, qe = it, et = !1;
        }
      }
      function Gt(ue, Le) {
        var it = Le;
        for (nt(it), Ne = j(Xe); Ne !== null && !E && !(Ne.expirationTime > it && (!ue || xa())); ) {
          var Rt = Ne.callback;
          if (typeof Rt == "function") {
            Ne.callback = null, qe = Ne.priorityLevel;
            var qt = Ne.expirationTime <= it, Dn = Rt(qt);
            it = _.unstable_now(), typeof Dn == "function" ? Ne.callback = Dn : Ne === j(Xe) && m(Xe), nt(it);
          } else
            m(Xe);
          Ne = j(Xe);
        }
        if (Ne !== null)
          return !0;
        var an = j(We);
        return an !== null && cn(rt, an.startTime - it), !1;
      }
      function Xt(ue, Le) {
        switch (ue) {
          case ee:
          case B:
          case W:
          case q:
          case re:
            break;
          default:
            ue = W;
        }
        var it = qe;
        qe = ue;
        try {
          return Le();
        } finally {
          qe = it;
        }
      }
      function at(ue) {
        var Le;
        switch (qe) {
          case ee:
          case B:
          case W:
            Le = W;
            break;
          default:
            Le = qe;
            break;
        }
        var it = qe;
        qe = Le;
        try {
          return ue();
        } finally {
          qe = it;
        }
      }
      function ir(ue) {
        var Le = qe;
        return function() {
          var it = qe;
          qe = Le;
          try {
            return ue.apply(this, arguments);
          } finally {
            qe = it;
          }
        };
      }
      function mn(ue, Le, it) {
        var Rt = _.unstable_now(), qt;
        if (typeof it == "object" && it !== null) {
          var Dn = it.delay;
          typeof Dn == "number" && Dn > 0 ? qt = Rt + Dn : qt = Rt;
        } else
          qt = Rt;
        var an;
        switch (ue) {
          case ee:
            an = de;
            break;
          case B:
            an = Re;
            break;
          case re:
            an = ht;
            break;
          case q:
            an = vt;
            break;
          case W:
          default:
            an = je;
            break;
        }
        var gr = qt + an, Ot = {
          id: Tt++,
          callback: Le,
          priorityLevel: ue,
          startTime: qt,
          expirationTime: gr,
          sortIndex: -1
        };
        return qt > Rt ? (Ot.sortIndex = qt, x(We, Ot), j(Xe) === null && Ot === j(We) && (Ut ? Ar() : Ut = !0, cn(rt, qt - Rt))) : (Ot.sortIndex = gr, x(Xe, Ot), !ut && !et && (ut = !0, Ea(Yt))), Ot;
      }
      function Hn() {
      }
      function zr() {
        !ut && !et && (ut = !0, Ea(Yt));
      }
      function qn() {
        return j(Xe);
      }
      function yr(ue) {
        ue.callback = null;
      }
      function sn() {
        return qe;
      }
      var bn = !1, yn = null, kn = -1, jt = D, Kr = -1;
      function xa() {
        var ue = _.unstable_now() - Kr;
        return !(ue < jt);
      }
      function Ja() {
      }
      function Aa(ue) {
        if (ue < 0 || ue > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ue > 0 ? jt = Math.floor(1e3 / ue) : jt = D;
      }
      var Ca = function() {
        if (yn !== null) {
          var ue = _.unstable_now();
          Kr = ue;
          var Le = !0, it = !0;
          try {
            it = yn(Le, ue);
          } finally {
            it ? Ur() : (bn = !1, yn = null);
          }
        } else
          bn = !1;
      }, Ur;
      if (typeof ae == "function")
        Ur = function() {
          ae(Ca);
        };
      else if (typeof MessageChannel < "u") {
        var ja = new MessageChannel(), Or = ja.port2;
        ja.port1.onmessage = Ca, Ur = function() {
          Or.postMessage(null);
        };
      } else
        Ur = function() {
          ne(Ca, 0);
        };
      function Ea(ue) {
        yn = ue, bn || (bn = !0, Ur());
      }
      function cn(ue, Le) {
        kn = ne(function() {
          ue(_.unstable_now());
        }, Le);
      }
      function Ar() {
        ye(kn), kn = -1;
      }
      var Di = Ja, wa = null;
      _.unstable_IdlePriority = re, _.unstable_ImmediatePriority = ee, _.unstable_LowPriority = q, _.unstable_NormalPriority = W, _.unstable_Profiling = wa, _.unstable_UserBlockingPriority = B, _.unstable_cancelCallback = yr, _.unstable_continueExecution = zr, _.unstable_forceFrameRate = Aa, _.unstable_getCurrentPriorityLevel = sn, _.unstable_getFirstCallbackNode = qn, _.unstable_next = at, _.unstable_pauseExecution = Hn, _.unstable_requestPaint = Di, _.unstable_runWithPriority = Xt, _.unstable_scheduleCallback = mn, _.unstable_shouldYield = xa, _.unstable_wrapCallback = ir, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vS)), vS;
}
var tE;
function lE() {
  return tE || (tE = 1, process.env.NODE_ENV === "production" ? zm.exports = pD() : zm.exports = vD()), zm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nE;
function hD() {
  if (nE)
    return ga;
  nE = 1;
  var _ = pf, E = lE();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var D = /* @__PURE__ */ new Set(), x = {};
  function j(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++)
      D.add(r[n]);
  }
  var V = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ee = {}, B = {};
  function W(n) {
    return U.call(B, n) ? !0 : U.call(ee, n) ? !1 : $.test(n) ? B[n] = !0 : (ee[n] = !0, !1);
  }
  function q(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function re(n, r, l, o) {
    if (r === null || typeof r > "u" || q(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function we(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var se = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    se[n] = new we(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    se[r] = new we(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    se[n] = new we(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    se[n] = new we(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    se[n] = new we(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    se[n] = new we(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    se[n] = new we(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    se[n] = new we(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    se[n] = new we(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var De = /[\-:]([a-z])/g;
  function ge(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      De,
      ge
    );
    se[r] = new we(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(De, ge);
    se[r] = new we(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(De, ge);
    se[r] = new we(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    se[n] = new we(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), se.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    se[n] = new we(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ce(n, r, l, o) {
    var c = se.hasOwnProperty(r) ? se[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (re(r, l, c, o) && (l = null), o || c === null ? W(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ue = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, de = Symbol.for("react.element"), Re = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), ht = Symbol.for("react.profiler"), Xe = Symbol.for("react.provider"), We = Symbol.for("react.context"), Tt = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), et = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), Ut = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function ye(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, nt;
  function rt(n) {
    if (nt === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        nt = r && r[1] || "";
      }
    return `
` + nt + n;
  }
  var Yt = !1;
  function Gt(n, r) {
    if (!n || Yt)
      return "";
    Yt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (F) {
            var o = F;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (F) {
            o = F;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          o = F;
        }
        n();
      }
    } catch (F) {
      if (F && o && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, C = d.length - 1; 1 <= h && 0 <= C && c[h] !== d[C]; )
          C--;
        for (; 1 <= h && 0 <= C; h--, C--)
          if (c[h] !== d[C]) {
            if (h !== 1 || C !== 1)
              do
                if (h--, C--, 0 > C || c[h] !== d[C]) {
                  var T = `
` + c[h].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= h && 0 <= C);
            break;
          }
      }
    } finally {
      Yt = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? rt(n) : "";
  }
  function Xt(n) {
    switch (n.tag) {
      case 5:
        return rt(n.type);
      case 16:
        return rt("Lazy");
      case 13:
        return rt("Suspense");
      case 19:
        return rt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Gt(n.type, !1), n;
      case 11:
        return n = Gt(n.type.render, !1), n;
      case 1:
        return n = Gt(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case je:
        return "Fragment";
      case Re:
        return "Portal";
      case ht:
        return "Profiler";
      case vt:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case We:
          return (n.displayName || "Context") + ".Consumer";
        case Xe:
          return (n._context.displayName || "Context") + ".Provider";
        case Tt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case et:
          return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
        case ut:
          r = n._payload, n = n._init;
          try {
            return at(n(r));
          } catch {
          }
      }
    return null;
  }
  function ir(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return at(r);
      case 8:
        return r === vt ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function mn(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Hn(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function zr(n) {
    var r = Hn(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function qn(n) {
    n._valueTracker || (n._valueTracker = zr(n));
  }
  function yr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Hn(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function sn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function bn(n, r) {
    var l = r.checked;
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function yn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = mn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function kn(n, r) {
    r = r.checked, r != null && ce(n, "checked", r, !1);
  }
  function jt(n, r) {
    kn(n, r);
    var l = mn(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? xa(n, r.type, l) : r.hasOwnProperty("defaultValue") && xa(n, r.type, mn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Kr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function xa(n, r, l) {
    (r !== "number" || sn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Ja = Array.isArray;
  function Aa(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + mn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ca(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(y(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ur(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(y(92));
        if (Ja(l)) {
          if (1 < l.length)
            throw Error(y(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: mn(l) };
  }
  function ja(n, r) {
    var l = mn(r.value), o = mn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Or(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ea(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function cn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ea(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ar, Di = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ar.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function wa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ue = {
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
  }, Le = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ue).forEach(function(n) {
    Le.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ue[r] = ue[n];
    });
  });
  function it(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ue.hasOwnProperty(n) && ue[n] ? ("" + r).trim() : r + "px";
  }
  function Rt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = it(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var qt = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dn(n, r) {
    if (r) {
      if (qt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(y(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(y(62));
    }
  }
  function an(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
        return !0;
    }
  }
  var gr = null;
  function Ot(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var jr = null, Lt = null, At = null;
  function au(n) {
    if (n = _o(n)) {
      if (typeof jr != "function")
        throw Error(y(280));
      var r = n.stateNode;
      r && (r = Me(r), jr(n.stateNode, n.type, r));
    }
  }
  function dl(n) {
    Lt ? At ? At.push(n) : At = [n] : Lt = n;
  }
  function iu() {
    if (Lt) {
      var n = Lt, r = At;
      if (At = Lt = null, au(n), r)
        for (n = 0; n < r.length; n++)
          au(r[n]);
    }
  }
  function lo(n, r) {
    return n(r);
  }
  function gs() {
  }
  var pl = !1;
  function lu(n, r, l) {
    if (pl)
      return n(r, l);
    pl = !0;
    try {
      return lo(n, r, l);
    } finally {
      pl = !1, (Lt !== null || At !== null) && (gs(), iu());
    }
  }
  function vl(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Me(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(y(231, r, typeof l));
    return l;
  }
  var uu = !1;
  if (V)
    try {
      var Ha = {};
      Object.defineProperty(Ha, "passive", { get: function() {
        uu = !0;
      } }), window.addEventListener("test", Ha, Ha), window.removeEventListener("test", Ha, Ha);
    } catch {
      uu = !1;
    }
  function _i(n, r, l, o, c, d, h, C, T) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, F);
    } catch (X) {
      this.onError(X);
    }
  }
  var Hr = !1, Ta = null, Li = !1, w = null, K = { onError: function(n) {
    Hr = !0, Ta = n;
  } };
  function oe(n, r, l, o, c, d, h, C, T) {
    Hr = !1, Ta = null, _i.apply(K, arguments);
  }
  function Oe(n, r, l, o, c, d, h, C, T) {
    if (oe.apply(this, arguments), Hr) {
      if (Hr) {
        var F = Ta;
        Hr = !1, Ta = null;
      } else
        throw Error(y(198));
      Li || (Li = !0, w = F);
    }
  }
  function Je(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function tt(n) {
    if (Je(n) !== n)
      throw Error(y(188));
  }
  function He(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Je(n), r === null)
        throw Error(y(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return tt(c), n;
          if (d === o)
            return tt(c), r;
          d = d.sibling;
        }
        throw Error(y(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var h = !1, C = c.child; C; ) {
          if (C === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (C === o) {
            h = !0, o = c, l = d;
            break;
          }
          C = C.sibling;
        }
        if (!h) {
          for (C = d.child; C; ) {
            if (C === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (C === o) {
              h = !0, o = d, l = c;
              break;
            }
            C = C.sibling;
          }
          if (!h)
            throw Error(y(189));
        }
      }
      if (l.alternate !== o)
        throw Error(y(190));
    }
    if (l.tag !== 3)
      throw Error(y(188));
    return l.stateNode.current === l ? n : r;
  }
  function _n(n) {
    return n = He(n), n !== null ? $t(n) : null;
  }
  function $t(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = $t(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var It = E.unstable_scheduleCallback, lr = E.unstable_cancelCallback, Mi = E.unstable_shouldYield, Ss = E.unstable_requestPaint, gt = E.unstable_now, Am = E.unstable_getCurrentPriorityLevel, ei = E.unstable_ImmediatePriority, ot = E.unstable_UserBlockingPriority, Ni = E.unstable_NormalPriority, Up = E.unstable_LowPriority, vf = E.unstable_IdlePriority, uo = null, Ra = null;
  function Op(n) {
    if (Ra && typeof Ra.onCommitFiberRoot == "function")
      try {
        Ra.onCommitFiberRoot(uo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Zr = Math.clz32 ? Math.clz32 : jm, Ap = Math.log, jp = Math.LN2;
  function jm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ap(n) / jp | 0) | 0;
  }
  var xs = 64, ou = 4194304;
  function hl(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ba(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var C = h & ~c;
      C !== 0 ? o = hl(C) : (d &= h, d !== 0 && (o = hl(d)));
    } else
      h = l & ~c, h !== 0 ? o = hl(h) : d !== 0 && (o = hl(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Zr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function hf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cs(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - Zr(d), C = 1 << h, T = c[h];
      T === -1 ? (!(C & l) || C & o) && (c[h] = hf(C, r)) : T <= r && (n.expiredLanes |= C), d &= ~C;
    }
  }
  function mf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Es() {
    var n = xs;
    return xs <<= 1, !(xs & 4194240) && (xs = 64), n;
  }
  function yf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function ml(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Zr(r), n[r] = l;
  }
  function Hm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Zr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function oo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Zr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var bt = 0;
  function gf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hp, ws, Mt, Fp, Sf, Ge = !1, so = [], fn = null, Jr = null, ea = null, co = /* @__PURE__ */ new Map(), gn = /* @__PURE__ */ new Map(), kt = [], Fm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ka(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jr = null;
        break;
      case "mouseover":
      case "mouseout":
        ea = null;
        break;
      case "pointerover":
      case "pointerout":
        co.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gn.delete(r.pointerId);
    }
  }
  function Kn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _o(r), r !== null && ws(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function zi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return fn = Kn(fn, n, r, l, o, c), !0;
      case "dragenter":
        return Jr = Kn(Jr, n, r, l, o, c), !0;
      case "mouseover":
        return ea = Kn(ea, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return co.set(d, Kn(co.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gn.set(d, Kn(gn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Vp(n) {
    var r = na(n.target);
    if (r !== null) {
      var l = Je(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = mt(l), r !== null) {
            n.blockedOn = r, Sf(n.priority, function() {
              Mt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function su(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = bs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        gr = o, l.target.dispatchEvent(o), gr = null;
      } else
        return r = _o(l), r !== null && ws(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function xf(n, r, l) {
    su(n) && l.delete(r);
  }
  function Bp() {
    Ge = !1, fn !== null && su(fn) && (fn = null), Jr !== null && su(Jr) && (Jr = null), ea !== null && su(ea) && (ea = null), co.forEach(xf), gn.forEach(xf);
  }
  function fo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ge || (Ge = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, Bp)));
  }
  function po(n) {
    function r(c) {
      return fo(c, n);
    }
    if (0 < so.length) {
      fo(so[0], n);
      for (var l = 1; l < so.length; l++) {
        var o = so[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (fn !== null && fo(fn, n), Jr !== null && fo(Jr, n), ea !== null && fo(ea, n), co.forEach(r), gn.forEach(r), l = 0; l < kt.length; l++)
      o = kt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < kt.length && (l = kt[0], l.blockedOn === null); )
      Vp(l), l.blockedOn === null && kt.shift();
  }
  var cu = Ue.ReactCurrentBatchConfig, yl = !0;
  function Pp(n, r, l, o) {
    var c = bt, d = cu.transition;
    cu.transition = null;
    try {
      bt = 1, Rs(n, r, l, o);
    } finally {
      bt = c, cu.transition = d;
    }
  }
  function Ts(n, r, l, o) {
    var c = bt, d = cu.transition;
    cu.transition = null;
    try {
      bt = 4, Rs(n, r, l, o);
    } finally {
      bt = c, cu.transition = d;
    }
  }
  function Rs(n, r, l, o) {
    if (yl) {
      var c = bs(n, r, l, o);
      if (c === null)
        Hs(n, r, o, vo, l), ka(n, o);
      else if (zi(c, n, r, l, o))
        o.stopPropagation();
      else if (ka(n, o), r & 4 && -1 < Fm.indexOf(n)) {
        for (; c !== null; ) {
          var d = _o(c);
          if (d !== null && Hp(d), d = bs(n, r, l, o), d === null && Hs(n, r, o, vo, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Hs(n, r, o, null, l);
    }
  }
  var vo = null;
  function bs(n, r, l, o) {
    if (vo = null, n = Ot(o), n = na(n), n !== null)
      if (r = Je(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return vo = n, null;
  }
  function Cf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Am()) {
          case ei:
            return 1;
          case ot:
            return 4;
          case Ni:
          case Up:
            return 16;
          case vf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ti = null, ho = null, mo = null;
  function Ef() {
    if (mo)
      return mo;
    var n, r = ho, l = r.length, o, c = "value" in ti ? ti.value : ti.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return mo = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function fu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function yo() {
    return !0;
  }
  function Yp() {
    return !1;
  }
  function Fr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var C in n)
        n.hasOwnProperty(C) && (l = n[C], this[C] = l ? l(d) : d[C]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? yo : Yp, this.isPropagationStopped = Yp, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = yo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = yo);
    }, persist: function() {
    }, isPersistent: yo }), r;
  }
  var Ui = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ks = Fr(Ui), du = ae({}, Ui, { view: 0, detail: 0 }), $p = Fr(du), Ds, wf, go, Ln = ae({}, du, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== go && (go && n.type === "mousemove" ? (Ds = n.screenX - go.screenX, wf = n.screenY - go.screenY) : wf = Ds = 0, go = n), Ds);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : wf;
  } }), _s = Fr(Ln), Ip = ae({}, Ln, { dataTransfer: 0 }), Qp = Fr(Ip), Vm = ae({}, du, { relatedTarget: 0 }), Oi = Fr(Vm), Tf = ae({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wp = Fr(Tf), Bm = ae({}, Ui, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pm = Fr(Bm), Ym = ae({}, Ui, { data: 0 }), Rf = Fr(Ym), bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Gp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Xp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Xp[n]) ? !!r[n] : !1;
  }
  function kf() {
    return qp;
  }
  var ni = ae({}, du, { key: function(n) {
    if (n.key) {
      var r = bf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = fu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kf, charCode: function(n) {
    return n.type === "keypress" ? fu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? fu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $m = Fr(ni), Df = ae({}, Ln, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ls = Fr(Df), _f = ae({}, du, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kf }), Im = Fr(_f), Ms = ae({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kp = Fr(Ms), Sr = ae({}, Ln, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ri = Fr(Sr), dn = [9, 13, 27, 32], Da = V && "CompositionEvent" in window, gl = null;
  V && "documentMode" in document && (gl = document.documentMode);
  var Ns = V && "TextEvent" in window && !gl, Zp = V && (!Da || gl && 8 < gl && 11 >= gl), pu = String.fromCharCode(32), Jp = !1;
  function ev(n, r) {
    switch (n) {
      case "keyup":
        return dn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var vu = !1;
  function Qm(n, r) {
    switch (n) {
      case "compositionend":
        return zs(r);
      case "keypress":
        return r.which !== 32 ? null : (Jp = !0, pu);
      case "textInput":
        return n = r.data, n === pu && Jp ? null : n;
      default:
        return null;
    }
  }
  function Wm(n, r) {
    if (vu)
      return n === "compositionend" || !Da && ev(n, r) ? (n = Ef(), mo = ho = ti = null, vu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Zp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var tv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!tv[n.type] : r === "textarea";
  }
  function rv(n, r, l, o) {
    dl(o), r = bo(r, "onChange"), 0 < r.length && (l = new ks("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var So = null, hu = null;
  function mu(n) {
    js(n, 0);
  }
  function yu(n) {
    var r = Su(n);
    if (yr(r))
      return n;
  }
  function av(n, r) {
    if (n === "change")
      return r;
  }
  var Lf = !1;
  if (V) {
    var Mf;
    if (V) {
      var Nf = "oninput" in document;
      if (!Nf) {
        var iv = document.createElement("div");
        iv.setAttribute("oninput", "return;"), Nf = typeof iv.oninput == "function";
      }
      Mf = Nf;
    } else
      Mf = !1;
    Lf = Mf && (!document.documentMode || 9 < document.documentMode);
  }
  function lv() {
    So && (So.detachEvent("onpropertychange", uv), hu = So = null);
  }
  function uv(n) {
    if (n.propertyName === "value" && yu(hu)) {
      var r = [];
      rv(r, hu, n, Ot(n)), lu(mu, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (lv(), So = r, hu = l, So.attachEvent("onpropertychange", uv)) : n === "focusout" && lv();
  }
  function Xm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return yu(hu);
  }
  function qm(n, r) {
    if (n === "click")
      return yu(r);
  }
  function ov(n, r) {
    if (n === "input" || n === "change")
      return yu(r);
  }
  function Km(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ta = typeof Object.is == "function" ? Object.is : Km;
  function xo(n, r) {
    if (ta(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!U.call(r, c) || !ta(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function sv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function cv(n, r) {
    var l = sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = sv(l);
    }
  }
  function fv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? fv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Us() {
    for (var n = window, r = sn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = sn(n.document);
    }
    return r;
  }
  function ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Os(n) {
    var r = Us(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && fv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ai(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = cv(l, d);
          var h = cv(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var dv = V && "documentMode" in document && 11 >= document.documentMode, _a = null, zf = null, Co = null, Uf = !1;
  function pv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Uf || _a == null || _a !== sn(o) || (o = _a, "selectionStart" in o && ai(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && xo(Co, o) || (Co = o, o = bo(zf, "onSelect"), 0 < o.length && (r = new ks("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = _a)));
  }
  function As(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Sl = { animationend: As("Animation", "AnimationEnd"), animationiteration: As("Animation", "AnimationIteration"), animationstart: As("Animation", "AnimationStart"), transitionend: As("Transition", "TransitionEnd") }, Of = {}, Af = {};
  V && (Af = document.createElement("div").style, "AnimationEvent" in window || (delete Sl.animationend.animation, delete Sl.animationiteration.animation, delete Sl.animationstart.animation), "TransitionEvent" in window || delete Sl.transitionend.transition);
  function Mn(n) {
    if (Of[n])
      return Of[n];
    if (!Sl[n])
      return n;
    var r = Sl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Af)
        return Of[n] = r[l];
    return n;
  }
  var jf = Mn("animationend"), vv = Mn("animationiteration"), hv = Mn("animationstart"), mv = Mn("transitionend"), yv = /* @__PURE__ */ new Map(), gv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ii(n, r) {
    yv.set(n, r), j(r, [n]);
  }
  for (var Eo = 0; Eo < gv.length; Eo++) {
    var xl = gv[Eo], Zm = xl.toLowerCase(), wo = xl[0].toUpperCase() + xl.slice(1);
    ii(Zm, "on" + wo);
  }
  ii(jf, "onAnimationEnd"), ii(vv, "onAnimationIteration"), ii(hv, "onAnimationStart"), ii("dblclick", "onDoubleClick"), ii("focusin", "onFocus"), ii("focusout", "onBlur"), ii(mv, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), j("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), j("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), j("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), j("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), j("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), j("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var To = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(To));
  function Sv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Oe(o, r, void 0, n), n.currentTarget = null;
  }
  function js(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var C = o[h], T = C.instance, F = C.currentTarget;
            if (C = C.listener, T !== d && c.isPropagationStopped())
              break e;
            Sv(c, C, F), d = T;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (C = o[h], T = C.instance, F = C.currentTarget, C = C.listener, T !== d && c.isPropagationStopped())
              break e;
            Sv(c, C, F), d = T;
          }
      }
    }
    if (Li)
      throw n = w, Li = !1, w = null, n;
  }
  function Nt(n, r) {
    var l = r[$f];
    l === void 0 && (l = r[$f] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (xv(r, n, 2, !1), l.add(o));
  }
  function Ai(n, r, l) {
    var o = 0;
    r && (o |= 4), xv(l, n, o, r);
  }
  var li = "_reactListening" + Math.random().toString(36).slice(2);
  function gu(n) {
    if (!n[li]) {
      n[li] = !0, D.forEach(function(l) {
        l !== "selectionchange" && (Jm.has(l) || Ai(l, !1, n), Ai(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[li] || (r[li] = !0, Ai("selectionchange", !1, r));
    }
  }
  function xv(n, r, l, o) {
    switch (Cf(r)) {
      case 1:
        var c = Pp;
        break;
      case 4:
        c = Ts;
        break;
      default:
        c = Rs;
    }
    l = c.bind(null, r, l, n), c = void 0, !uu || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Hs(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var h = o.tag;
          if (h === 3 || h === 4) {
            var C = o.stateNode.containerInfo;
            if (C === c || C.nodeType === 8 && C.parentNode === c)
              break;
            if (h === 4)
              for (h = o.return; h !== null; ) {
                var T = h.tag;
                if ((T === 3 || T === 4) && (T = h.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c))
                  return;
                h = h.return;
              }
            for (; C !== null; ) {
              if (h = na(C), h === null)
                return;
              if (T = h.tag, T === 5 || T === 6) {
                o = d = h;
                continue e;
              }
              C = C.parentNode;
            }
          }
          o = o.return;
        }
    lu(function() {
      var F = d, X = Ot(l), Z = [];
      e: {
        var G = yv.get(n);
        if (G !== void 0) {
          var pe = ks, xe = n;
          switch (n) {
            case "keypress":
              if (fu(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              pe = $m;
              break;
            case "focusin":
              xe = "focus", pe = Oi;
              break;
            case "focusout":
              xe = "blur", pe = Oi;
              break;
            case "beforeblur":
            case "afterblur":
              pe = Oi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = _s;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Qp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = Im;
              break;
            case jf:
            case vv:
            case hv:
              pe = Wp;
              break;
            case mv:
              pe = Kp;
              break;
            case "scroll":
              pe = $p;
              break;
            case "wheel":
              pe = ri;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = Pm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = Ls;
          }
          var Te = (r & 4) !== 0, un = !Te && n === "scroll", L = Te ? G !== null ? G + "Capture" : null : G;
          Te = [];
          for (var b = F, z; b !== null; ) {
            z = b;
            var te = z.stateNode;
            if (z.tag === 5 && te !== null && (z = te, L !== null && (te = vl(b, L), te != null && Te.push(Ro(b, te, z)))), un)
              break;
            b = b.return;
          }
          0 < Te.length && (G = new pe(G, xe, null, l, X), Z.push({ event: G, listeners: Te }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (G = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", G && l !== gr && (xe = l.relatedTarget || l.fromElement) && (na(xe) || xe[ui]))
            break e;
          if ((pe || G) && (G = X.window === X ? X : (G = X.ownerDocument) ? G.defaultView || G.parentWindow : window, pe ? (xe = l.relatedTarget || l.toElement, pe = F, xe = xe ? na(xe) : null, xe !== null && (un = Je(xe), xe !== un || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (pe = null, xe = F), pe !== xe)) {
            if (Te = _s, te = "onMouseLeave", L = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (Te = Ls, te = "onPointerLeave", L = "onPointerEnter", b = "pointer"), un = pe == null ? G : Su(pe), z = xe == null ? G : Su(xe), G = new Te(te, b + "leave", pe, l, X), G.target = un, G.relatedTarget = z, te = null, na(X) === F && (Te = new Te(L, b + "enter", xe, l, X), Te.target = z, Te.relatedTarget = un, te = Te), un = te, pe && xe)
              t: {
                for (Te = pe, L = xe, b = 0, z = Te; z; z = Cl(z))
                  b++;
                for (z = 0, te = L; te; te = Cl(te))
                  z++;
                for (; 0 < b - z; )
                  Te = Cl(Te), b--;
                for (; 0 < z - b; )
                  L = Cl(L), z--;
                for (; b--; ) {
                  if (Te === L || L !== null && Te === L.alternate)
                    break t;
                  Te = Cl(Te), L = Cl(L);
                }
                Te = null;
              }
            else
              Te = null;
            pe !== null && Hf(Z, G, pe, Te, !1), xe !== null && un !== null && Hf(Z, un, xe, Te, !0);
          }
        }
        e: {
          if (G = F ? Su(F) : window, pe = G.nodeName && G.nodeName.toLowerCase(), pe === "select" || pe === "input" && G.type === "file")
            var be = av;
          else if (nv(G))
            if (Lf)
              be = ov;
            else {
              be = Xm;
              var Ce = Gm;
            }
          else
            (pe = G.nodeName) && pe.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (be = qm);
          if (be && (be = be(n, F))) {
            rv(Z, be, l, X);
            break e;
          }
          Ce && Ce(n, G, F), n === "focusout" && (Ce = G._wrapperState) && Ce.controlled && G.type === "number" && xa(G, "number", G.value);
        }
        switch (Ce = F ? Su(F) : window, n) {
          case "focusin":
            (nv(Ce) || Ce.contentEditable === "true") && (_a = Ce, zf = F, Co = null);
            break;
          case "focusout":
            Co = zf = _a = null;
            break;
          case "mousedown":
            Uf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uf = !1, pv(Z, l, X);
            break;
          case "selectionchange":
            if (dv)
              break;
          case "keydown":
          case "keyup":
            pv(Z, l, X);
        }
        var _e;
        if (Da)
          e: {
            switch (n) {
              case "compositionstart":
                var Ye = "onCompositionStart";
                break e;
              case "compositionend":
                Ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ye = "onCompositionUpdate";
                break e;
            }
            Ye = void 0;
          }
        else
          vu ? ev(n, l) && (Ye = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ye = "onCompositionStart");
        Ye && (Zp && l.locale !== "ko" && (vu || Ye !== "onCompositionStart" ? Ye === "onCompositionEnd" && vu && (_e = Ef()) : (ti = X, ho = "value" in ti ? ti.value : ti.textContent, vu = !0)), Ce = bo(F, Ye), 0 < Ce.length && (Ye = new Rf(Ye, n, null, l, X), Z.push({ event: Ye, listeners: Ce }), _e ? Ye.data = _e : (_e = zs(l), _e !== null && (Ye.data = _e)))), (_e = Ns ? Qm(n, l) : Wm(n, l)) && (F = bo(F, "onBeforeInput"), 0 < F.length && (X = new Rf("onBeforeInput", "beforeinput", null, l, X), Z.push({ event: X, listeners: F }), X.data = _e));
      }
      js(Z, r);
    });
  }
  function Ro(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function bo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = vl(n, l), d != null && o.unshift(Ro(n, d, c)), d = vl(n, r), d != null && o.push(Ro(n, d, c))), n = n.return;
    }
    return o;
  }
  function Cl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Hf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var C = l, T = C.alternate, F = C.stateNode;
      if (T !== null && T === o)
        break;
      C.tag === 5 && F !== null && (C = F, c ? (T = vl(l, d), T != null && h.unshift(Ro(l, T, C))) : c || (T = vl(l, d), T != null && h.push(Ro(l, T, C)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Ff = /\r\n?/g, ey = /\u0000|\uFFFD/g;
  function Vf(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ff, `
`).replace(ey, "");
  }
  function Fs(n, r, l) {
    if (r = Vf(r), Vf(n) !== r && l)
      throw Error(y(425));
  }
  function Vs() {
  }
  var Bf = null, El = null;
  function ko(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wl = typeof setTimeout == "function" ? setTimeout : void 0, Cv = typeof clearTimeout == "function" ? clearTimeout : void 0, Pf = typeof Promise == "function" ? Promise : void 0, Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pf < "u" ? function(n) {
    return Pf.resolve(null).then(n).catch(ty);
  } : wl;
  function ty(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ji(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), po(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    po(r);
  }
  function La(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Do(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Hi = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + Hi, Tl = "__reactProps$" + Hi, ui = "__reactContainer$" + Hi, $f = "__reactEvents$" + Hi, ny = "__reactListeners$" + Hi, If = "__reactHandles$" + Hi;
  function na(n) {
    var r = n[Fa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ui] || l[Fa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Do(n); n !== null; ) {
            if (l = n[Fa])
              return l;
            n = Do(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function _o(n) {
    return n = n[Fa] || n[ui], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Su(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(y(33));
  }
  function Me(n) {
    return n[Tl] || null;
  }
  var Fi = [], Ht = -1;
  function Ke(n) {
    return { current: n };
  }
  function Ct(n) {
    0 > Ht || (n.current = Fi[Ht], Fi[Ht] = null, Ht--);
  }
  function Et(n, r) {
    Ht++, Fi[Ht] = n.current, n.current = r;
  }
  var Va = {}, Pe = Ke(Va), tn = Ke(!1), xr = Va;
  function ra(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Va;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Qt(n) {
    return n = n.childContextTypes, n != null;
  }
  function aa() {
    Ct(tn), Ct(Pe);
  }
  function Vi(n, r, l) {
    if (Pe.current !== Va)
      throw Error(y(168));
    Et(Pe, r), Et(tn, l);
  }
  function Lo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(y(108, ir(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function Bs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Va, xr = Pe.current, Et(Pe, n), Et(tn, tn.current), !0;
  }
  function Ev(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(y(169));
    l ? (n = Lo(n, r, xr), o.__reactInternalMemoizedMergedChildContext = n, Ct(tn), Ct(Pe), Et(Pe, n)) : Ct(tn), Et(tn, l);
  }
  var Vr = null, Nn = !1, Mo = !1;
  function Qf(n) {
    Vr === null ? Vr = [n] : Vr.push(n);
  }
  function Wf(n) {
    Nn = !0, Qf(n);
  }
  function Cr() {
    if (!Mo && Vr !== null) {
      Mo = !0;
      var n = 0, r = bt;
      try {
        var l = Vr;
        for (bt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Vr = null, Nn = !1;
      } catch (c) {
        throw Vr !== null && (Vr = Vr.slice(n + 1)), It(ei, Cr), c;
      } finally {
        bt = r, Mo = !1;
      }
    }
    return null;
  }
  var Bi = [], Er = 0, Rl = null, xu = 0, wr = [], Zn = 0, ia = null, Fn = 1, oi = "";
  function Br(n, r) {
    Bi[Er++] = xu, Bi[Er++] = Rl, Rl = n, xu = r;
  }
  function Gf(n, r, l) {
    wr[Zn++] = Fn, wr[Zn++] = oi, wr[Zn++] = ia, ia = n;
    var o = Fn;
    n = oi;
    var c = 32 - Zr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Zr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, Fn = 1 << 32 - Zr(r) + c | l << c | o, oi = d + n;
    } else
      Fn = 1 << d | l << c | o, oi = n;
  }
  function Ps(n) {
    n.return !== null && (Br(n, 1), Gf(n, 1, 0));
  }
  function Xf(n) {
    for (; n === Rl; )
      Rl = Bi[--Er], Bi[Er] = null, xu = Bi[--Er], Bi[Er] = null;
    for (; n === ia; )
      ia = wr[--Zn], wr[Zn] = null, oi = wr[--Zn], wr[Zn] = null, Fn = wr[--Zn], wr[Zn] = null;
  }
  var Pr = null, Tr = null, Ft = !1, la = null;
  function qf(n, r) {
    var l = da(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function wv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Pr = n, Tr = La(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Pr = n, Tr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ia !== null ? { id: Fn, overflow: oi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = da(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Pr = n, Tr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ys(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function $s(n) {
    if (Ft) {
      var r = Tr;
      if (r) {
        var l = r;
        if (!wv(n, r)) {
          if (Ys(n))
            throw Error(y(418));
          r = La(l.nextSibling);
          var o = Pr;
          r && wv(n, r) ? qf(o, l) : (n.flags = n.flags & -4097 | 2, Ft = !1, Pr = n);
        }
      } else {
        if (Ys(n))
          throw Error(y(418));
        n.flags = n.flags & -4097 | 2, Ft = !1, Pr = n;
      }
    }
  }
  function Tv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Pr = n;
  }
  function Is(n) {
    if (n !== Pr)
      return !1;
    if (!Ft)
      return Tv(n), Ft = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ko(n.type, n.memoizedProps)), r && (r = Tr)) {
      if (Ys(n))
        throw Rv(), Error(y(418));
      for (; r; )
        qf(n, r), r = La(r.nextSibling);
    }
    if (Tv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(y(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Tr = La(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Tr = null;
      }
    } else
      Tr = Pr ? La(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Rv() {
    for (var n = Tr; n; )
      n = La(n.nextSibling);
  }
  function Kt() {
    Tr = Pr = null, Ft = !1;
  }
  function Kf(n) {
    la === null ? la = [n] : la.push(n);
  }
  var Qs = Ue.ReactCurrentBatchConfig;
  function Yr(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Ba = Ke(null), Ws = null, Pi = null, Zf = null;
  function Jf() {
    Zf = Pi = Ws = null;
  }
  function Yi(n) {
    var r = Ba.current;
    Ct(Ba), n._currentValue = r;
  }
  function zn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ie(n, r) {
    Ws = n, Zf = Pi = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (pn = !0), n.firstContext = null);
  }
  function ln(n) {
    var r = n._currentValue;
    if (Zf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Pi === null) {
        if (Ws === null)
          throw Error(y(308));
        Pi = n, Ws.dependencies = { lanes: 0, firstContext: n };
      } else
        Pi = Pi.next = n;
    return r;
  }
  var Vn = null;
  function ed(n) {
    Vn === null ? Vn = [n] : Vn.push(n);
  }
  function bv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, ed(r)) : (l.next = c.next, c.next = l), r.interleaved = l, si(n, o);
  }
  function si(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $i = !1;
  function td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Sn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ci(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ii(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, st & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, si(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, ed(o)) : (r.next = c.next, c.next = r), o.interleaved = r, si(n, l);
  }
  function Gs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, oo(n, l);
    }
  }
  function nd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Qi(n, r, l, o) {
    var c = n.updateQueue;
    $i = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var T = C, F = T.next;
      T.next = null, h === null ? d = F : h.next = F, h = T;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, C = X.lastBaseUpdate, C !== h && (C === null ? X.firstBaseUpdate = F : C.next = F, X.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Z = c.baseState;
      h = 0, X = F = T = null, C = d;
      do {
        var G = C.lane, pe = C.eventTime;
        if ((o & G) === G) {
          X !== null && (X = X.next = {
            eventTime: pe,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var xe = n, Te = C;
            switch (G = r, pe = l, Te.tag) {
              case 1:
                if (xe = Te.payload, typeof xe == "function") {
                  Z = xe.call(pe, Z, G);
                  break e;
                }
                Z = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = Te.payload, G = typeof xe == "function" ? xe.call(pe, Z, G) : xe, G == null)
                  break e;
                Z = ae({}, Z, G);
                break e;
              case 2:
                $i = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (n.flags |= 64, G = c.effects, G === null ? c.effects = [C] : G.push(C));
        } else
          pe = { eventTime: pe, lane: G, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, X === null ? (F = X = pe, T = Z) : X = X.next = pe, h |= G;
        if (C = C.next, C === null) {
          if (C = c.shared.pending, C === null)
            break;
          G = C, C = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (1);
      if (X === null && (T = Z), c.baseState = T, c.firstBaseUpdate = F, c.lastBaseUpdate = X, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      vi |= h, n.lanes = h, n.memoizedState = Z;
    }
  }
  function bl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(y(191, c));
          c.call(o);
        }
      }
  }
  var kv = new _.Component().refs;
  function rd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Xs = { isMounted: function(n) {
    return (n = n._reactInternals) ? Je(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = nr(), c = vn(n), d = ci(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ii(n, d, c), r !== null && (rr(r, n, c, o), Gs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = nr(), c = vn(n), d = ci(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ii(n, d, c), r !== null && (rr(r, n, c, o), Gs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = nr(), o = vn(n), c = ci(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ii(n, c, o), r !== null && (rr(r, n, o, l), Gs(r, n, o));
  } };
  function Dv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !xo(l, o) || !xo(c, d) : !0;
  }
  function _v(n, r, l) {
    var o = !1, c = Va, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ln(d) : (c = Qt(r) ? xr : Pe.current, o = r.contextTypes, d = (o = o != null) ? ra(n, c) : Va), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Lv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Xs.enqueueReplaceState(r, r.state, null);
  }
  function qs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = kv, td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ln(d) : (d = Qt(r) ? xr : Pe.current, c.context = ra(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (rd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Xs.enqueueReplaceState(c, c.state, null), Qi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Cu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(y(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(y(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var C = c.refs;
          C === kv && (C = c.refs = {}), h === null ? delete C[d] : C[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(y(284));
      if (!l._owner)
        throw Error(y(290, n));
    }
    return n;
  }
  function Ks(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nv(n) {
    function r(L, b) {
      if (n) {
        var z = L.deletions;
        z === null ? (L.deletions = [b], L.flags |= 16) : z.push(b);
      }
    }
    function l(L, b) {
      if (!n)
        return null;
      for (; b !== null; )
        r(L, b), b = b.sibling;
      return null;
    }
    function o(L, b) {
      for (L = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? L.set(b.key, b) : L.set(b.index, b), b = b.sibling;
      return L;
    }
    function c(L, b) {
      return L = el(L, b), L.index = 0, L.sibling = null, L;
    }
    function d(L, b, z) {
      return L.index = z, n ? (z = L.alternate, z !== null ? (z = z.index, z < b ? (L.flags |= 2, b) : z) : (L.flags |= 2, b)) : (L.flags |= 1048576, b);
    }
    function h(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function C(L, b, z, te) {
      return b === null || b.tag !== 6 ? (b = qo(z, L.mode, te), b.return = L, b) : (b = c(b, z), b.return = L, b);
    }
    function T(L, b, z, te) {
      var be = z.type;
      return be === je ? X(L, b, z.props.children, te, z.key) : b !== null && (b.elementType === be || typeof be == "object" && be !== null && be.$$typeof === ut && Mv(be) === b.type) ? (te = c(b, z.props), te.ref = Cu(L, b, z), te.return = L, te) : (te = _c(z.type, z.key, z.props, null, L.mode, te), te.ref = Cu(L, b, z), te.return = L, te);
    }
    function F(L, b, z, te) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== z.containerInfo || b.stateNode.implementation !== z.implementation ? (b = Il(z, L.mode, te), b.return = L, b) : (b = c(b, z.children || []), b.return = L, b);
    }
    function X(L, b, z, te, be) {
      return b === null || b.tag !== 7 ? (b = $l(z, L.mode, te, be), b.return = L, b) : (b = c(b, z), b.return = L, b);
    }
    function Z(L, b, z) {
      if (typeof b == "string" && b !== "" || typeof b == "number")
        return b = qo("" + b, L.mode, z), b.return = L, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case de:
            return z = _c(b.type, b.key, b.props, null, L.mode, z), z.ref = Cu(L, null, b), z.return = L, z;
          case Re:
            return b = Il(b, L.mode, z), b.return = L, b;
          case ut:
            var te = b._init;
            return Z(L, te(b._payload), z);
        }
        if (Ja(b) || ye(b))
          return b = $l(b, L.mode, z, null), b.return = L, b;
        Ks(L, b);
      }
      return null;
    }
    function G(L, b, z, te) {
      var be = b !== null ? b.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number")
        return be !== null ? null : C(L, b, "" + z, te);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case de:
            return z.key === be ? T(L, b, z, te) : null;
          case Re:
            return z.key === be ? F(L, b, z, te) : null;
          case ut:
            return be = z._init, G(
              L,
              b,
              be(z._payload),
              te
            );
        }
        if (Ja(z) || ye(z))
          return be !== null ? null : X(L, b, z, te, null);
        Ks(L, z);
      }
      return null;
    }
    function pe(L, b, z, te, be) {
      if (typeof te == "string" && te !== "" || typeof te == "number")
        return L = L.get(z) || null, C(b, L, "" + te, be);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case de:
            return L = L.get(te.key === null ? z : te.key) || null, T(b, L, te, be);
          case Re:
            return L = L.get(te.key === null ? z : te.key) || null, F(b, L, te, be);
          case ut:
            var Ce = te._init;
            return pe(L, b, z, Ce(te._payload), be);
        }
        if (Ja(te) || ye(te))
          return L = L.get(z) || null, X(b, L, te, be, null);
        Ks(b, te);
      }
      return null;
    }
    function xe(L, b, z, te) {
      for (var be = null, Ce = null, _e = b, Ye = b = 0, An = null; _e !== null && Ye < z.length; Ye++) {
        _e.index > Ye ? (An = _e, _e = null) : An = _e.sibling;
        var yt = G(L, _e, z[Ye], te);
        if (yt === null) {
          _e === null && (_e = An);
          break;
        }
        n && _e && yt.alternate === null && r(L, _e), b = d(yt, b, Ye), Ce === null ? be = yt : Ce.sibling = yt, Ce = yt, _e = An;
      }
      if (Ye === z.length)
        return l(L, _e), Ft && Br(L, Ye), be;
      if (_e === null) {
        for (; Ye < z.length; Ye++)
          _e = Z(L, z[Ye], te), _e !== null && (b = d(_e, b, Ye), Ce === null ? be = _e : Ce.sibling = _e, Ce = _e);
        return Ft && Br(L, Ye), be;
      }
      for (_e = o(L, _e); Ye < z.length; Ye++)
        An = pe(_e, L, Ye, z[Ye], te), An !== null && (n && An.alternate !== null && _e.delete(An.key === null ? Ye : An.key), b = d(An, b, Ye), Ce === null ? be = An : Ce.sibling = An, Ce = An);
      return n && _e.forEach(function(tl) {
        return r(L, tl);
      }), Ft && Br(L, Ye), be;
    }
    function Te(L, b, z, te) {
      var be = ye(z);
      if (typeof be != "function")
        throw Error(y(150));
      if (z = be.call(z), z == null)
        throw Error(y(151));
      for (var Ce = be = null, _e = b, Ye = b = 0, An = null, yt = z.next(); _e !== null && !yt.done; Ye++, yt = z.next()) {
        _e.index > Ye ? (An = _e, _e = null) : An = _e.sibling;
        var tl = G(L, _e, yt.value, te);
        if (tl === null) {
          _e === null && (_e = An);
          break;
        }
        n && _e && tl.alternate === null && r(L, _e), b = d(tl, b, Ye), Ce === null ? be = tl : Ce.sibling = tl, Ce = tl, _e = An;
      }
      if (yt.done)
        return l(
          L,
          _e
        ), Ft && Br(L, Ye), be;
      if (_e === null) {
        for (; !yt.done; Ye++, yt = z.next())
          yt = Z(L, yt.value, te), yt !== null && (b = d(yt, b, Ye), Ce === null ? be = yt : Ce.sibling = yt, Ce = yt);
        return Ft && Br(L, Ye), be;
      }
      for (_e = o(L, _e); !yt.done; Ye++, yt = z.next())
        yt = pe(_e, L, Ye, yt.value, te), yt !== null && (n && yt.alternate !== null && _e.delete(yt.key === null ? Ye : yt.key), b = d(yt, b, Ye), Ce === null ? be = yt : Ce.sibling = yt, Ce = yt);
      return n && _e.forEach(function(Ey) {
        return r(L, Ey);
      }), Ft && Br(L, Ye), be;
    }
    function un(L, b, z, te) {
      if (typeof z == "object" && z !== null && z.type === je && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case de:
            e: {
              for (var be = z.key, Ce = b; Ce !== null; ) {
                if (Ce.key === be) {
                  if (be = z.type, be === je) {
                    if (Ce.tag === 7) {
                      l(L, Ce.sibling), b = c(Ce, z.props.children), b.return = L, L = b;
                      break e;
                    }
                  } else if (Ce.elementType === be || typeof be == "object" && be !== null && be.$$typeof === ut && Mv(be) === Ce.type) {
                    l(L, Ce.sibling), b = c(Ce, z.props), b.ref = Cu(L, Ce, z), b.return = L, L = b;
                    break e;
                  }
                  l(L, Ce);
                  break;
                } else
                  r(L, Ce);
                Ce = Ce.sibling;
              }
              z.type === je ? (b = $l(z.props.children, L.mode, te, z.key), b.return = L, L = b) : (te = _c(z.type, z.key, z.props, null, L.mode, te), te.ref = Cu(L, b, z), te.return = L, L = te);
            }
            return h(L);
          case Re:
            e: {
              for (Ce = z.key; b !== null; ) {
                if (b.key === Ce)
                  if (b.tag === 4 && b.stateNode.containerInfo === z.containerInfo && b.stateNode.implementation === z.implementation) {
                    l(L, b.sibling), b = c(b, z.children || []), b.return = L, L = b;
                    break e;
                  } else {
                    l(L, b);
                    break;
                  }
                else
                  r(L, b);
                b = b.sibling;
              }
              b = Il(z, L.mode, te), b.return = L, L = b;
            }
            return h(L);
          case ut:
            return Ce = z._init, un(L, b, Ce(z._payload), te);
        }
        if (Ja(z))
          return xe(L, b, z, te);
        if (ye(z))
          return Te(L, b, z, te);
        Ks(L, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z, b !== null && b.tag === 6 ? (l(L, b.sibling), b = c(b, z), b.return = L, L = b) : (l(L, b), b = qo(z, L.mode, te), b.return = L, L = b), h(L)) : l(L, b);
    }
    return un;
  }
  var Eu = Nv(!0), zv = Nv(!1), No = {}, Ma = Ke(No), zo = Ke(No), wu = Ke(No);
  function kl(n) {
    if (n === No)
      throw Error(y(174));
    return n;
  }
  function ad(n, r) {
    switch (Et(wu, r), Et(zo, n), Et(Ma, No), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : cn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = cn(r, n);
    }
    Ct(Ma), Et(Ma, r);
  }
  function Wi() {
    Ct(Ma), Ct(zo), Ct(wu);
  }
  function Ae(n) {
    kl(wu.current);
    var r = kl(Ma.current), l = cn(r, n.type);
    r !== l && (Et(zo, n), Et(Ma, l));
  }
  function lt(n) {
    zo.current === n && (Ct(Ma), Ct(zo));
  }
  var Fe = Ke(0);
  function Zt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ua = [];
  function Zs() {
    for (var n = 0; n < ua.length; n++)
      ua[n]._workInProgressVersionPrimary = null;
    ua.length = 0;
  }
  var Js = Ue.ReactCurrentDispatcher, id = Ue.ReactCurrentBatchConfig, Dl = 0, Vt = null, I = null, ft = null, Ve = !1, Pa = !1, $r = 0, _l = 0;
  function Bt() {
    throw Error(y(321));
  }
  function Ll(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ta(n[l], r[l]))
        return !1;
    return !0;
  }
  function Gi(n, r, l, o, c, d) {
    if (Dl = d, Vt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Js.current = n === null || n.memoizedState === null ? ay : iy, n = l(o, c), Pa) {
      d = 0;
      do {
        if (Pa = !1, $r = 0, 25 <= d)
          throw Error(y(301));
        d += 1, ft = I = null, r.updateQueue = null, Js.current = ud, n = l(o, c);
      } while (Pa);
    }
    if (Js.current = hc, r = I !== null && I.next !== null, Dl = 0, ft = I = Vt = null, Ve = !1, r)
      throw Error(y(300));
    return n;
  }
  function Ml() {
    var n = $r !== 0;
    return $r = 0, n;
  }
  function oa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ft === null ? Vt.memoizedState = ft = n : ft = ft.next = n, ft;
  }
  function Rr() {
    if (I === null) {
      var n = Vt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = I.next;
    var r = ft === null ? Vt.memoizedState : ft.next;
    if (r !== null)
      ft = r, I = n;
    else {
      if (n === null)
        throw Error(y(310));
      I = n, n = { memoizedState: I.memoizedState, baseState: I.baseState, baseQueue: I.baseQueue, queue: I.queue, next: null }, ft === null ? Vt.memoizedState = ft = n : ft = ft.next = n;
    }
    return ft;
  }
  function Nl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Uo(n) {
    var r = Rr(), l = r.queue;
    if (l === null)
      throw Error(y(311));
    l.lastRenderedReducer = n;
    var o = I, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var C = h = null, T = null, F = d;
      do {
        var X = F.lane;
        if ((Dl & X) === X)
          T !== null && (T = T.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), o = F.hasEagerState ? F.eagerState : n(o, F.action);
        else {
          var Z = {
            lane: X,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          T === null ? (C = T = Z, h = o) : T = T.next = Z, Vt.lanes |= X, vi |= X;
        }
        F = F.next;
      } while (F !== null && F !== d);
      T === null ? h = o : T.next = C, ta(o, r.memoizedState) || (pn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Vt.lanes |= d, vi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Oo(n) {
    var r = Rr(), l = r.queue;
    if (l === null)
      throw Error(y(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      ta(d, r.memoizedState) || (pn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ec() {
  }
  function tc(n, r) {
    var l = Vt, o = Rr(), c = r(), d = !ta(o.memoizedState, c);
    if (d && (o.memoizedState = c, pn = !0), o = o.queue, Ao(ac.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ft !== null && ft.memoizedState.tag & 1) {
      if (l.flags |= 2048, zl(9, rc.bind(null, l, o, c, r), void 0, null), Jt === null)
        throw Error(y(349));
      Dl & 30 || nc(l, r, c);
    }
    return c;
  }
  function nc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Vt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Vt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function rc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, ic(r) && lc(n);
  }
  function ac(n, r, l) {
    return l(function() {
      ic(r) && lc(n);
    });
  }
  function ic(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ta(n, l);
    } catch {
      return !0;
    }
  }
  function lc(n) {
    var r = si(n, 1);
    r !== null && rr(r, n, 1, -1);
  }
  function uc(n) {
    var r = oa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nl, lastRenderedState: n }, r.queue = n, n = n.dispatch = vc.bind(null, Vt, n), [r.memoizedState, n];
  }
  function zl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Vt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Vt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function oc() {
    return Rr().memoizedState;
  }
  function Ul(n, r, l, o) {
    var c = oa();
    Vt.flags |= n, c.memoizedState = zl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fi(n, r, l, o) {
    var c = Rr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (I !== null) {
      var h = I.memoizedState;
      if (d = h.destroy, o !== null && Ll(o, h.deps)) {
        c.memoizedState = zl(r, l, d, o);
        return;
      }
    }
    Vt.flags |= n, c.memoizedState = zl(1 | r, l, d, o);
  }
  function sc(n, r) {
    return Ul(8390656, 8, n, r);
  }
  function Ao(n, r) {
    return fi(2048, 8, n, r);
  }
  function cc(n, r) {
    return fi(4, 2, n, r);
  }
  function fc(n, r) {
    return fi(4, 4, n, r);
  }
  function ld(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Tu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fi(4, 4, ld.bind(null, r, n), l);
  }
  function dc() {
  }
  function Ru(n, r) {
    var l = Rr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ll(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Xi(n, r) {
    var l = Rr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ll(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function br(n, r, l) {
    return Dl & 21 ? (ta(l, r) || (l = Es(), Vt.lanes |= l, vi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, pn = !0), n.memoizedState = l);
  }
  function ry(n, r) {
    var l = bt;
    bt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = id.transition;
    id.transition = {};
    try {
      n(!1), r();
    } finally {
      bt = l, id.transition = o;
    }
  }
  function zt() {
    return Rr().memoizedState;
  }
  function pc(n, r, l) {
    var o = vn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, bu(n))
      jo(r, l);
    else if (l = bv(n, r, l, o), l !== null) {
      var c = nr();
      rr(l, n, o, c), Uv(l, r, o);
    }
  }
  function vc(n, r, l) {
    var o = vn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (bu(n))
      jo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, C = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = C, ta(C, h)) {
            var T = r.interleaved;
            T === null ? (c.next = c, ed(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = bv(n, r, c, o), l !== null && (c = nr(), rr(l, n, o, c), Uv(l, r, o));
    }
  }
  function bu(n) {
    var r = n.alternate;
    return n === Vt || r !== null && r === Vt;
  }
  function jo(n, r) {
    Pa = Ve = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Uv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, oo(n, l);
    }
  }
  var hc = { readContext: ln, useCallback: Bt, useContext: Bt, useEffect: Bt, useImperativeHandle: Bt, useInsertionEffect: Bt, useLayoutEffect: Bt, useMemo: Bt, useReducer: Bt, useRef: Bt, useState: Bt, useDebugValue: Bt, useDeferredValue: Bt, useTransition: Bt, useMutableSource: Bt, useSyncExternalStore: Bt, useId: Bt, unstable_isNewReconciler: !1 }, ay = { readContext: ln, useCallback: function(n, r) {
    return oa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ln, useEffect: sc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ul(
      4194308,
      4,
      ld.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Ul(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ul(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = oa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = oa();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = pc.bind(null, Vt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = oa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: uc, useDebugValue: dc, useDeferredValue: function(n) {
    return oa().memoizedState = n;
  }, useTransition: function() {
    var n = uc(!1), r = n[0];
    return n = ry.bind(null, n[1]), oa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Vt, c = oa();
    if (Ft) {
      if (l === void 0)
        throw Error(y(407));
      l = l();
    } else {
      if (l = r(), Jt === null)
        throw Error(y(349));
      Dl & 30 || nc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, sc(ac.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, zl(9, rc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = oa(), r = Jt.identifierPrefix;
    if (Ft) {
      var l = oi, o = Fn;
      l = (o & ~(1 << 32 - Zr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = $r++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = _l++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, iy = {
    readContext: ln,
    useCallback: Ru,
    useContext: ln,
    useEffect: Ao,
    useImperativeHandle: Tu,
    useInsertionEffect: cc,
    useLayoutEffect: fc,
    useMemo: Xi,
    useReducer: Uo,
    useRef: oc,
    useState: function() {
      return Uo(Nl);
    },
    useDebugValue: dc,
    useDeferredValue: function(n) {
      var r = Rr();
      return br(r, I.memoizedState, n);
    },
    useTransition: function() {
      var n = Uo(Nl)[0], r = Rr().memoizedState;
      return [n, r];
    },
    useMutableSource: ec,
    useSyncExternalStore: tc,
    useId: zt,
    unstable_isNewReconciler: !1
  }, ud = { readContext: ln, useCallback: Ru, useContext: ln, useEffect: Ao, useImperativeHandle: Tu, useInsertionEffect: cc, useLayoutEffect: fc, useMemo: Xi, useReducer: Oo, useRef: oc, useState: function() {
    return Oo(Nl);
  }, useDebugValue: dc, useDeferredValue: function(n) {
    var r = Rr();
    return I === null ? r.memoizedState = n : br(r, I.memoizedState, n);
  }, useTransition: function() {
    var n = Oo(Nl)[0], r = Rr().memoizedState;
    return [n, r];
  }, useMutableSource: ec, useSyncExternalStore: tc, useId: zt, unstable_isNewReconciler: !1 };
  function ku(n, r) {
    try {
      var l = "", o = r;
      do
        l += Xt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ho(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function mc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ly = typeof WeakMap == "function" ? WeakMap : Map;
  function Ov(n, r, l) {
    l = ci(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wc || (wc = !0, Fl = o), mc(n, r);
    }, l;
  }
  function Fo(n, r, l) {
    l = ci(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        mc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      mc(n, r), typeof o != "function" && (Ia === null ? Ia = /* @__PURE__ */ new Set([this]) : Ia.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function Av(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ly();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function od(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function sd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ci(-1, 1), r.tag = 2, Ii(l, r, 1))), l.lanes |= 1), n);
  }
  var uy = Ue.ReactCurrentOwner, pn = !1;
  function xn(n, r, l, o) {
    r.child = n === null ? zv(r, null, l, o) : Eu(r, n.child, l, o);
  }
  function qi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ie(r, c), o = Gi(n, r, l, o, d, c), l = Ml(), n !== null && !pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Bn(n, r, c)) : (Ft && l && Ps(r), r.flags |= 1, xn(n, r, o, c), r.child);
  }
  function yc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Dd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, kr(n, r, d, o, c)) : (n = _c(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : xo, l(h, o) && n.ref === r.ref)
        return Bn(n, r, c);
    }
    return r.flags |= 1, n = el(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function kr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (xo(d, o) && n.ref === r.ref)
        if (pn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (pn = !0);
        else
          return r.lanes = n.lanes, Bn(n, r, c);
    }
    return Du(n, r, l, o, c);
  }
  function Ol(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Et(Uu, Ir), Ir |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Et(Uu, Ir), Ir |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Et(Uu, Ir), Ir |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Et(Uu, Ir), Ir |= o;
    return xn(n, r, c, l), r.child;
  }
  function Ze(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Du(n, r, l, o, c) {
    var d = Qt(l) ? xr : Pe.current;
    return d = ra(r, d), ie(r, c), l = Gi(n, r, l, o, d, c), o = Ml(), n !== null && !pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Bn(n, r, c)) : (Ft && o && Ps(r), r.flags |= 1, xn(n, r, l, c), r.child);
  }
  function cd(n, r, l, o, c) {
    if (Qt(l)) {
      var d = !0;
      Bs(r);
    } else
      d = !1;
    if (ie(r, c), r.stateNode === null)
      Jn(n, r), _v(r, l, o), qs(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, C = r.memoizedProps;
      h.props = C;
      var T = h.context, F = l.contextType;
      typeof F == "object" && F !== null ? F = ln(F) : (F = Qt(l) ? xr : Pe.current, F = ra(r, F));
      var X = l.getDerivedStateFromProps, Z = typeof X == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Z || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (C !== o || T !== F) && Lv(r, h, o, F), $i = !1;
      var G = r.memoizedState;
      h.state = G, Qi(r, o, h, c), T = r.memoizedState, C !== o || G !== T || tn.current || $i ? (typeof X == "function" && (rd(r, l, X, o), T = r.memoizedState), (C = $i || Dv(r, l, C, o, G, T, F)) ? (Z || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), h.props = o, h.state = T, h.context = F, o = C) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, Sn(n, r), C = r.memoizedProps, F = r.type === r.elementType ? C : Yr(r.type, C), h.props = F, Z = r.pendingProps, G = h.context, T = l.contextType, typeof T == "object" && T !== null ? T = ln(T) : (T = Qt(l) ? xr : Pe.current, T = ra(r, T));
      var pe = l.getDerivedStateFromProps;
      (X = typeof pe == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (C !== Z || G !== T) && Lv(r, h, o, T), $i = !1, G = r.memoizedState, h.state = G, Qi(r, o, h, c);
      var xe = r.memoizedState;
      C !== Z || G !== xe || tn.current || $i ? (typeof pe == "function" && (rd(r, l, pe, o), xe = r.memoizedState), (F = $i || Dv(r, l, F, o, G, xe, T) || !1) ? (X || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, xe, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, xe, T)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || C === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = xe), h.props = o, h.state = xe, h.context = T, o = F) : (typeof h.componentDidUpdate != "function" || C === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return jv(n, r, l, o, d, c);
  }
  function jv(n, r, l, o, c, d) {
    Ze(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && Ev(r, l, !1), Bn(n, r, d);
    o = r.stateNode, uy.current = r;
    var C = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Eu(r, n.child, null, d), r.child = Eu(r, null, C, d)) : xn(n, r, C, d), r.memoizedState = o.state, c && Ev(r, l, !0), r.child;
  }
  function Hv(n) {
    var r = n.stateNode;
    r.pendingContext ? Vi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Vi(n, r.context, !1), ad(n, r.containerInfo);
  }
  function gc(n, r, l, o, c) {
    return Kt(), Kf(c), r.flags |= 256, xn(n, r, l, o), r.child;
  }
  var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function dd(n, r, l) {
    var o = r.pendingProps, c = Fe.current, d = !1, h = (r.flags & 128) !== 0, C;
    if ((C = h) || (C = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), C ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Et(Fe, c & 1), n === null)
      return $s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Xo(h, o, 0, null), n = $l(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = fd(l), r.memoizedState = Al, n) : pd(r, h));
    if (c = n.memoizedState, c !== null && (C = c.dehydrated, C !== null))
      return oy(n, r, h, o, C, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, C = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = el(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), C !== null ? d = el(C, d) : (d = $l(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? fd(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Al, o;
    }
    return d = n.child, n = d.sibling, o = el(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function pd(n, r) {
    return r = Xo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function _u(n, r, l, o) {
    return o !== null && Kf(o), Eu(r, n.child, null, l), n = pd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function oy(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ho(Error(y(422))), _u(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Xo({ mode: "visible", children: o.children }, c, 0, null), d = $l(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Eu(r, n.child, null, h), r.child.memoizedState = fd(h), r.memoizedState = Al, d);
    if (!(r.mode & 1))
      return _u(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var C = o.dgst;
      return o = C, d = Error(y(419)), o = Ho(d, o, void 0), _u(n, r, h, o);
    }
    if (C = (h & n.childLanes) !== 0, pn || C) {
      if (o = Jt, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, si(n, c), rr(o, n, c, -1));
      }
      return Rd(), o = Ho(Error(y(421))), _u(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Tr = La(c.nextSibling), Pr = r, Ft = !0, la = null, n !== null && (wr[Zn++] = Fn, wr[Zn++] = oi, wr[Zn++] = ia, Fn = n.id, oi = n.overflow, ia = r), r = pd(r, o.children), r.flags |= 4096, r);
  }
  function vd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), zn(n.return, r, l);
  }
  function Sc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function hd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (xn(n, r, o.children, l), o = Fe.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && vd(n, l, r);
            else if (n.tag === 19)
              vd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Et(Fe, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Zt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Sc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Zt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Sc(r, !0, l, null, d);
          break;
        case "together":
          Sc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Jn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Bn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), vi |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(y(153));
    if (r.child !== null) {
      for (n = r.child, l = el(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = el(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function di(n, r, l) {
    switch (r.tag) {
      case 3:
        Hv(r), Kt();
        break;
      case 5:
        Ae(r);
        break;
      case 1:
        Qt(r.type) && Bs(r);
        break;
      case 4:
        ad(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Et(Ba, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Et(Fe, Fe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? dd(n, r, l) : (Et(Fe, Fe.current & 1), n = Bn(n, r, l), n !== null ? n.sibling : null);
        Et(Fe, Fe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return hd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Et(Fe, Fe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ol(n, r, l);
    }
    return Bn(n, r, l);
  }
  var Vo, jl, sa, Cn;
  Vo = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, jl = function() {
  }, sa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, kl(Ma.current);
      var d = null;
      switch (l) {
        case "input":
          c = bn(n, c), o = bn(n, o), d = [];
          break;
        case "select":
          c = ae({}, c, { value: void 0 }), o = ae({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ca(n, c), o = Ca(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Vs);
      }
      Dn(l, o);
      var h;
      l = null;
      for (F in c)
        if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null)
          if (F === "style") {
            var C = c[F];
            for (h in C)
              C.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (x.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in o) {
        var T = o[F];
        if (C = c != null ? c[F] : void 0, o.hasOwnProperty(F) && T !== C && (T != null || C != null))
          if (F === "style")
            if (C) {
              for (h in C)
                !C.hasOwnProperty(h) || T && T.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in T)
                T.hasOwnProperty(h) && C[h] !== T[h] && (l || (l = {}), l[h] = T[h]);
            } else
              l || (d || (d = []), d.push(
                F,
                l
              )), l = T;
          else
            F === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, C = C ? C.__html : void 0, T != null && C !== T && (d = d || []).push(F, T)) : F === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(F, "" + T) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (x.hasOwnProperty(F) ? (T != null && F === "onScroll" && Nt("scroll", n), d || C === T || (d = [])) : (d = d || []).push(F, T));
      }
      l && (d = d || []).push("style", l);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, Cn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Bo(n, r) {
    if (!Ft)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function sy(n, r, l) {
    var o = r.pendingProps;
    switch (Xf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return er(r), null;
      case 1:
        return Qt(r.type) && aa(), er(r), null;
      case 3:
        return o = r.stateNode, Wi(), Ct(tn), Ct(Pe), Zs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Is(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, la !== null && (Go(la), la = null))), jl(n, r), er(r), null;
      case 5:
        lt(r);
        var c = kl(wu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          sa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(y(166));
            return er(r), null;
          }
          if (n = kl(Ma.current), Is(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Fa] = r, o[Tl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Nt("cancel", o), Nt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Nt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < To.length; c++)
                  Nt(To[c], o);
                break;
              case "source":
                Nt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Nt(
                  "error",
                  o
                ), Nt("load", o);
                break;
              case "details":
                Nt("toggle", o);
                break;
              case "input":
                yn(o, d), Nt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Nt("invalid", o);
                break;
              case "textarea":
                Ur(o, d), Nt("invalid", o);
            }
            Dn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var C = d[h];
                h === "children" ? typeof C == "string" ? o.textContent !== C && (d.suppressHydrationWarning !== !0 && Fs(o.textContent, C, n), c = ["children", C]) : typeof C == "number" && o.textContent !== "" + C && (d.suppressHydrationWarning !== !0 && Fs(
                  o.textContent,
                  C,
                  n
                ), c = ["children", "" + C]) : x.hasOwnProperty(h) && C != null && h === "onScroll" && Nt("scroll", o);
              }
            switch (l) {
              case "input":
                qn(o), Kr(o, d, !0);
                break;
              case "textarea":
                qn(o), Or(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Vs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ea(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Fa] = r, n[Tl] = o, Vo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = an(l, o), l) {
                case "dialog":
                  Nt("cancel", n), Nt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Nt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < To.length; c++)
                    Nt(To[c], n);
                  c = o;
                  break;
                case "source":
                  Nt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Nt(
                    "error",
                    n
                  ), Nt("load", n), c = o;
                  break;
                case "details":
                  Nt("toggle", n), c = o;
                  break;
                case "input":
                  yn(n, o), c = bn(n, o), Nt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), Nt("invalid", n);
                  break;
                case "textarea":
                  Ur(n, o), c = Ca(n, o), Nt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dn(l, c), C = c;
              for (d in C)
                if (C.hasOwnProperty(d)) {
                  var T = C[d];
                  d === "style" ? Rt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Di(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && wa(n, T) : typeof T == "number" && wa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (x.hasOwnProperty(d) ? T != null && d === "onScroll" && Nt("scroll", n) : T != null && ce(n, d, T, h));
                }
              switch (l) {
                case "input":
                  qn(n), Kr(n, o, !1);
                  break;
                case "textarea":
                  qn(n), Or(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + mn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Aa(n, !!o.multiple, d, !1) : o.defaultValue != null && Aa(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Vs);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null)
          Cn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(y(166));
          if (l = kl(wu.current), kl(Ma.current), Is(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Fa] = r, (d = o.nodeValue !== l) && (n = Pr, n !== null))
              switch (n.tag) {
                case 3:
                  Fs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Fs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Fa] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (Ct(Fe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Ft && Tr !== null && r.mode & 1 && !(r.flags & 128))
            Rv(), Kt(), r.flags |= 98560, d = !1;
          else if (d = Is(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(y(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(y(317));
              d[Fa] = r;
            } else
              Kt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else
            la !== null && (Go(la), la = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Fe.current & 1 ? wn === 0 && (wn = 3) : Rd())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return Wi(), jl(n, r), n === null && gu(r.stateNode.containerInfo), er(r), null;
      case 10:
        return Yi(r.type._context), er(r), null;
      case 17:
        return Qt(r.type) && aa(), er(r), null;
      case 19:
        if (Ct(Fe), d = r.memoizedState, d === null)
          return er(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            Bo(d, !1);
          else {
            if (wn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = Zt(n), h !== null) {
                  for (r.flags |= 128, Bo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Et(Fe, Fe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && gt() > Au && (r.flags |= 128, o = !0, Bo(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Zt(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Bo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !Ft)
                return er(r), null;
            } else
              2 * gt() - d.renderingStartTime > Au && l !== 1073741824 && (r.flags |= 128, o = !0, Bo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = gt(), r.sibling = null, l = Fe.current, Et(Fe, o ? l & 1 | 2 : l & 1), r) : (er(r), null);
      case 22:
      case 23:
        return Td(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ir & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function md(n, r) {
    switch (Xf(r), r.tag) {
      case 1:
        return Qt(r.type) && aa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Wi(), Ct(tn), Ct(Pe), Zs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return lt(r), null;
      case 13:
        if (Ct(Fe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(y(340));
          Kt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ct(Fe), null;
      case 4:
        return Wi(), null;
      case 10:
        return Yi(r.type._context), null;
      case 22:
      case 23:
        return Td(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Po = !1, En = !1, Fv = typeof WeakSet == "function" ? WeakSet : Set, Se = null;
  function Lu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          rn(n, r, o);
        }
      else
        l.current = null;
  }
  function Yo(n, r, l) {
    try {
      l();
    } catch (o) {
      rn(n, r, o);
    }
  }
  var Vv = !1;
  function Bv(n, r) {
    if (Bf = yl, n = Us(), ai(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0, C = -1, T = -1, F = 0, X = 0, Z = n, G = null;
            t:
              for (; ; ) {
                for (var pe; Z !== l || c !== 0 && Z.nodeType !== 3 || (C = h + c), Z !== d || o !== 0 && Z.nodeType !== 3 || (T = h + o), Z.nodeType === 3 && (h += Z.nodeValue.length), (pe = Z.firstChild) !== null; )
                  G = Z, Z = pe;
                for (; ; ) {
                  if (Z === n)
                    break t;
                  if (G === l && ++F === c && (C = h), G === d && ++X === o && (T = h), (pe = Z.nextSibling) !== null)
                    break;
                  Z = G, G = Z.parentNode;
                }
                Z = pe;
              }
            l = C === -1 || T === -1 ? null : { start: C, end: T };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (El = { focusedElem: n, selectionRange: l }, yl = !1, Se = r; Se !== null; )
      if (r = Se, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Se = n;
      else
        for (; Se !== null; ) {
          r = Se;
          try {
            var xe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (xe !== null) {
                    var Te = xe.memoizedProps, un = xe.memoizedState, L = r.stateNode, b = L.getSnapshotBeforeUpdate(r.elementType === r.type ? Te : Yr(r.type, Te), un);
                    L.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var z = r.stateNode.containerInfo;
                  z.nodeType === 1 ? z.textContent = "" : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(y(163));
              }
          } catch (te) {
            rn(r, r.return, te);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Se = n;
            break;
          }
          Se = r.return;
        }
    return xe = Vv, Vv = !1, xe;
  }
  function $o(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Yo(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Io(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function yd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function gd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, gd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[Tl], delete r[$f], delete r[ny], delete r[If])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Pv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function xc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Pv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Mu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Vs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Mu(n, r, l), n = n.sibling; n !== null; )
        Mu(n, r, l), n = n.sibling;
  }
  function Ya(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ya(n, r, l), n = n.sibling; n !== null; )
        Ya(n, r, l), n = n.sibling;
  }
  var Wt = null, Un = !1;
  function ca(n, r, l) {
    for (l = l.child; l !== null; )
      Nu(n, r, l), l = l.sibling;
  }
  function Nu(n, r, l) {
    if (Ra && typeof Ra.onCommitFiberUnmount == "function")
      try {
        Ra.onCommitFiberUnmount(uo, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        En || Lu(l, r);
      case 6:
        var o = Wt, c = Un;
        Wt = null, ca(n, r, l), Wt = o, Un = c, Wt !== null && (Un ? (n = Wt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Wt.removeChild(l.stateNode));
        break;
      case 18:
        Wt !== null && (Un ? (n = Wt, l = l.stateNode, n.nodeType === 8 ? ji(n.parentNode, l) : n.nodeType === 1 && ji(n, l), po(n)) : ji(Wt, l.stateNode));
        break;
      case 4:
        o = Wt, c = Un, Wt = l.stateNode.containerInfo, Un = !0, ca(n, r, l), Wt = o, Un = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!En && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && Yo(l, r, h), c = c.next;
          } while (c !== o);
        }
        ca(n, r, l);
        break;
      case 1:
        if (!En && (Lu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (C) {
            rn(l, r, C);
          }
        ca(n, r, l);
        break;
      case 21:
        ca(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (En = (o = En) || l.memoizedState !== null, ca(n, r, l), En = o) : ca(n, r, l);
        break;
      default:
        ca(n, r, l);
    }
  }
  function pi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Fv()), r.forEach(function(o) {
        var c = hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Na(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, h = r, C = h;
          e:
            for (; C !== null; ) {
              switch (C.tag) {
                case 5:
                  Wt = C.stateNode, Un = !1;
                  break e;
                case 3:
                  Wt = C.stateNode.containerInfo, Un = !0;
                  break e;
                case 4:
                  Wt = C.stateNode.containerInfo, Un = !0;
                  break e;
              }
              C = C.return;
            }
          if (Wt === null)
            throw Error(y(160));
          Nu(d, h, c), Wt = null, Un = !1;
          var T = c.alternate;
          T !== null && (T.return = null), c.return = null;
        } catch (F) {
          rn(c, r, F);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Yv(r, n), r = r.sibling;
  }
  function Yv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Na(r, n), $a(n), o & 4) {
          try {
            $o(3, n, n.return), Io(3, n);
          } catch (Te) {
            rn(n, n.return, Te);
          }
          try {
            $o(5, n, n.return);
          } catch (Te) {
            rn(n, n.return, Te);
          }
        }
        break;
      case 1:
        Na(r, n), $a(n), o & 512 && l !== null && Lu(l, l.return);
        break;
      case 5:
        if (Na(r, n), $a(n), o & 512 && l !== null && Lu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            wa(c, "");
          } catch (Te) {
            rn(n, n.return, Te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, C = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              C === "input" && d.type === "radio" && d.name != null && kn(c, d), an(C, h);
              var F = an(C, d);
              for (h = 0; h < T.length; h += 2) {
                var X = T[h], Z = T[h + 1];
                X === "style" ? Rt(c, Z) : X === "dangerouslySetInnerHTML" ? Di(c, Z) : X === "children" ? wa(c, Z) : ce(c, X, Z, F);
              }
              switch (C) {
                case "input":
                  jt(c, d);
                  break;
                case "textarea":
                  ja(c, d);
                  break;
                case "select":
                  var G = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var pe = d.value;
                  pe != null ? Aa(c, !!d.multiple, pe, !1) : G !== !!d.multiple && (d.defaultValue != null ? Aa(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Aa(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Tl] = d;
            } catch (Te) {
              rn(n, n.return, Te);
            }
        }
        break;
      case 6:
        if (Na(r, n), $a(n), o & 4) {
          if (n.stateNode === null)
            throw Error(y(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Te) {
            rn(n, n.return, Te);
          }
        }
        break;
      case 3:
        if (Na(r, n), $a(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            po(r.containerInfo);
          } catch (Te) {
            rn(n, n.return, Te);
          }
        break;
      case 4:
        Na(r, n), $a(n);
        break;
      case 13:
        Na(r, n), $a(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Cd = gt())), o & 4 && pi(n);
        break;
      case 22:
        if (X = l !== null && l.memoizedState !== null, n.mode & 1 ? (En = (F = En) || X, Na(r, n), En = F) : Na(r, n), $a(n), o & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !X && n.mode & 1)
            for (Se = n, X = n.child; X !== null; ) {
              for (Z = Se = X; Se !== null; ) {
                switch (G = Se, pe = G.child, G.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $o(4, G, G.return);
                    break;
                  case 1:
                    Lu(G, G.return);
                    var xe = G.stateNode;
                    if (typeof xe.componentWillUnmount == "function") {
                      o = G, l = G.return;
                      try {
                        r = o, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                      } catch (Te) {
                        rn(o, l, Te);
                      }
                    }
                    break;
                  case 5:
                    Lu(G, G.return);
                    break;
                  case 22:
                    if (G.memoizedState !== null) {
                      Sd(Z);
                      continue;
                    }
                }
                pe !== null ? (pe.return = G, Se = pe) : Sd(Z);
              }
              X = X.sibling;
            }
          e:
            for (X = null, Z = n; ; ) {
              if (Z.tag === 5) {
                if (X === null) {
                  X = Z;
                  try {
                    c = Z.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (C = Z.stateNode, T = Z.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, C.style.display = it("display", h));
                  } catch (Te) {
                    rn(n, n.return, Te);
                  }
                }
              } else if (Z.tag === 6) {
                if (X === null)
                  try {
                    Z.stateNode.nodeValue = F ? "" : Z.memoizedProps;
                  } catch (Te) {
                    rn(n, n.return, Te);
                  }
              } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === n) && Z.child !== null) {
                Z.child.return = Z, Z = Z.child;
                continue;
              }
              if (Z === n)
                break e;
              for (; Z.sibling === null; ) {
                if (Z.return === null || Z.return === n)
                  break e;
                X === Z && (X = null), Z = Z.return;
              }
              X === Z && (X = null), Z.sibling.return = Z.return, Z = Z.sibling;
            }
        }
        break;
      case 19:
        Na(r, n), $a(n), o & 4 && pi(n);
        break;
      case 21:
        break;
      default:
        Na(
          r,
          n
        ), $a(n);
    }
  }
  function $a(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Pv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(y(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (wa(c, ""), o.flags &= -33);
            var d = xc(n);
            Ya(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, C = xc(n);
            Mu(n, C, h);
            break;
          default:
            throw Error(y(161));
        }
      } catch (T) {
        rn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function $v(n, r, l) {
    Se = n, zu(n);
  }
  function zu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Se !== null; ) {
      var c = Se, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Po;
        if (!h) {
          var C = c.alternate, T = C !== null && C.memoizedState !== null || En;
          C = Po;
          var F = En;
          if (Po = h, (En = T) && !F)
            for (Se = c; Se !== null; )
              h = Se, T = h.child, h.tag === 22 && h.memoizedState !== null ? Qv(c) : T !== null ? (T.return = h, Se = T) : Qv(c);
          for (; d !== null; )
            Se = d, zu(d), d = d.sibling;
          Se = c, Po = C, En = F;
        }
        Iv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Se = d) : Iv(n);
    }
  }
  function Iv(n) {
    for (; Se !== null; ) {
      var r = Se;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                En || Io(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !En)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Yr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && bl(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  bl(r, h, l);
                }
                break;
              case 5:
                var C = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = C;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && l.focus();
                      break;
                    case "img":
                      T.src && (l.src = T.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var F = r.alternate;
                  if (F !== null) {
                    var X = F.memoizedState;
                    if (X !== null) {
                      var Z = X.dehydrated;
                      Z !== null && po(Z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(y(163));
            }
          En || r.flags & 512 && yd(r);
        } catch (G) {
          rn(r, r.return, G);
        }
      }
      if (r === n) {
        Se = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Se = l;
        break;
      }
      Se = r.return;
    }
  }
  function Sd(n) {
    for (; Se !== null; ) {
      var r = Se;
      if (r === n) {
        Se = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Se = l;
        break;
      }
      Se = r.return;
    }
  }
  function Qv(n) {
    for (; Se !== null; ) {
      var r = Se;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Io(4, r);
            } catch (T) {
              rn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                rn(r, c, T);
              }
            }
            var d = r.return;
            try {
              yd(r);
            } catch (T) {
              rn(r, d, T);
            }
            break;
          case 5:
            var h = r.return;
            try {
              yd(r);
            } catch (T) {
              rn(r, h, T);
            }
        }
      } catch (T) {
        rn(r, r.return, T);
      }
      if (r === n) {
        Se = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        C.return = r.return, Se = C;
        break;
      }
      Se = r.return;
    }
  }
  var Cc = Math.ceil, Qo = Ue.ReactCurrentDispatcher, xd = Ue.ReactCurrentOwner, tr = Ue.ReactCurrentBatchConfig, st = 0, Jt = null, nn = null, On = 0, Ir = 0, Uu = Ke(0), wn = 0, Wo = null, vi = 0, Ec = 0, Ou = 0, Hl = null, ur = null, Cd = 0, Au = 1 / 0, hi = null, wc = !1, Fl = null, Ia = null, Ki = !1, Zi = null, Tc = 0, ju = 0, Rc = null, Vl = -1, Bl = 0;
  function nr() {
    return st & 6 ? gt() : Vl !== -1 ? Vl : Vl = gt();
  }
  function vn(n) {
    return n.mode & 1 ? st & 2 && On !== 0 ? On & -On : Qs.transition !== null ? (Bl === 0 && (Bl = Es()), Bl) : (n = bt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Cf(n.type)), n) : 1;
  }
  function rr(n, r, l, o) {
    if (50 < ju)
      throw ju = 0, Rc = null, Error(y(185));
    ml(n, l, o), (!(st & 2) || n !== Jt) && (n === Jt && (!(st & 2) && (Ec |= l), wn === 4 && fa(n, On)), ar(n, o), l === 1 && st === 0 && !(r.mode & 1) && (Au = gt() + 500, Nn && Cr()));
  }
  function ar(n, r) {
    var l = n.callbackNode;
    Cs(n, r);
    var o = ba(n, n === Jt ? On : 0);
    if (o === 0)
      l !== null && lr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && lr(l), r === 1)
        n.tag === 0 ? Wf(Wv.bind(null, n)) : Qf(Wv.bind(null, n)), Yf(function() {
          !(st & 6) && Cr();
        }), l = null;
      else {
        switch (gf(o)) {
          case 1:
            l = ei;
            break;
          case 4:
            l = ot;
            break;
          case 16:
            l = Ni;
            break;
          case 536870912:
            l = vf;
            break;
          default:
            l = Ni;
        }
        l = kd(l, Hu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Hu(n, r) {
    if (Vl = -1, Bl = 0, st & 6)
      throw Error(y(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l)
      return null;
    var o = ba(n, n === Jt ? On : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = kc(n, o);
    else {
      r = o;
      var c = st;
      st |= 2;
      var d = bc();
      (Jt !== n || On !== r) && (hi = null, Au = gt() + 500, Pl(n, r));
      do
        try {
          fy();
          break;
        } catch (C) {
          Gv(n, C);
        }
      while (1);
      Jf(), Qo.current = d, st = c, nn !== null ? r = 0 : (Jt = null, On = 0, r = wn);
    }
    if (r !== 0) {
      if (r === 2 && (c = mf(n), c !== 0 && (o = c, r = Ed(n, c))), r === 1)
        throw l = Wo, Pl(n, 0), fa(n, o), ar(n, gt()), l;
      if (r === 6)
        fa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !wd(c) && (r = kc(n, o), r === 2 && (d = mf(n), d !== 0 && (o = d, r = Ed(n, d))), r === 1))
          throw l = Wo, Pl(n, 0), fa(n, o), ar(n, gt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            Yl(n, ur, hi);
            break;
          case 3:
            if (fa(n, o), (o & 130023424) === o && (r = Cd + 500 - gt(), 10 < r)) {
              if (ba(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                nr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = wl(Yl.bind(null, n, ur, hi), r);
              break;
            }
            Yl(n, ur, hi);
            break;
          case 4:
            if (fa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Zr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = gt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Cc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = wl(Yl.bind(null, n, ur, hi), o);
              break;
            }
            Yl(n, ur, hi);
            break;
          case 5:
            Yl(n, ur, hi);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return ar(n, gt()), n.callbackNode === l ? Hu.bind(null, n) : null;
  }
  function Ed(n, r) {
    var l = Hl;
    return n.current.memoizedState.isDehydrated && (Pl(n, r).flags |= 256), n = kc(n, r), n !== 2 && (r = ur, ur = l, r !== null && Go(r)), n;
  }
  function Go(n) {
    ur === null ? ur = n : ur.push.apply(ur, n);
  }
  function wd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ta(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function fa(n, r) {
    for (r &= ~Ou, r &= ~Ec, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Zr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Wv(n) {
    if (st & 6)
      throw Error(y(327));
    Vu();
    var r = ba(n, 0);
    if (!(r & 1))
      return ar(n, gt()), null;
    var l = kc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = mf(n);
      o !== 0 && (r = o, l = Ed(n, o));
    }
    if (l === 1)
      throw l = Wo, Pl(n, 0), fa(n, r), ar(n, gt()), l;
    if (l === 6)
      throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Yl(n, ur, hi), ar(n, gt()), null;
  }
  function Fu(n, r) {
    var l = st;
    st |= 1;
    try {
      return n(r);
    } finally {
      st = l, st === 0 && (Au = gt() + 500, Nn && Cr());
    }
  }
  function Ji(n) {
    Zi !== null && Zi.tag === 0 && !(st & 6) && Vu();
    var r = st;
    st |= 1;
    var l = tr.transition, o = bt;
    try {
      if (tr.transition = null, bt = 1, n)
        return n();
    } finally {
      bt = o, tr.transition = l, st = r, !(st & 6) && Cr();
    }
  }
  function Td() {
    Ir = Uu.current, Ct(Uu);
  }
  function Pl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Cv(l)), nn !== null)
      for (l = nn.return; l !== null; ) {
        var o = l;
        switch (Xf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && aa();
            break;
          case 3:
            Wi(), Ct(tn), Ct(Pe), Zs();
            break;
          case 5:
            lt(o);
            break;
          case 4:
            Wi();
            break;
          case 13:
            Ct(Fe);
            break;
          case 19:
            Ct(Fe);
            break;
          case 10:
            Yi(o.type._context);
            break;
          case 22:
          case 23:
            Td();
        }
        l = l.return;
      }
    if (Jt = n, nn = n = el(n.current, null), On = Ir = r, wn = 0, Wo = null, Ou = Ec = vi = 0, ur = Hl = null, Vn !== null) {
      for (r = 0; r < Vn.length; r++)
        if (l = Vn[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      Vn = null;
    }
    return n;
  }
  function Gv(n, r) {
    do {
      var l = nn;
      try {
        if (Jf(), Js.current = hc, Ve) {
          for (var o = Vt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ve = !1;
        }
        if (Dl = 0, ft = I = Vt = null, Pa = !1, $r = 0, xd.current = null, l === null || l.return === null) {
          wn = 1, Wo = r, nn = null;
          break;
        }
        e: {
          var d = n, h = l.return, C = l, T = r;
          if (r = On, C.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var F = T, X = C, Z = X.tag;
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var G = X.alternate;
              G ? (X.updateQueue = G.updateQueue, X.memoizedState = G.memoizedState, X.lanes = G.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var pe = od(h);
            if (pe !== null) {
              pe.flags &= -257, sd(pe, h, C, d, r), pe.mode & 1 && Av(d, F, r), r = pe, T = F;
              var xe = r.updateQueue;
              if (xe === null) {
                var Te = /* @__PURE__ */ new Set();
                Te.add(T), r.updateQueue = Te;
              } else
                xe.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Av(d, F, r), Rd();
                break e;
              }
              T = Error(y(426));
            }
          } else if (Ft && C.mode & 1) {
            var un = od(h);
            if (un !== null) {
              !(un.flags & 65536) && (un.flags |= 256), sd(un, h, C, d, r), Kf(ku(T, C));
              break e;
            }
          }
          d = T = ku(T, C), wn !== 4 && (wn = 2), Hl === null ? Hl = [d] : Hl.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = Ov(d, T, r);
                nd(d, L);
                break e;
              case 1:
                C = T;
                var b = d.type, z = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Ia === null || !Ia.has(z)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var te = Fo(d, C, r);
                  nd(d, te);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        bd(l);
      } catch (be) {
        r = be, nn === l && l !== null && (nn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function bc() {
    var n = Qo.current;
    return Qo.current = hc, n === null ? hc : n;
  }
  function Rd() {
    (wn === 0 || wn === 3 || wn === 2) && (wn = 4), Jt === null || !(vi & 268435455) && !(Ec & 268435455) || fa(Jt, On);
  }
  function kc(n, r) {
    var l = st;
    st |= 2;
    var o = bc();
    (Jt !== n || On !== r) && (hi = null, Pl(n, r));
    do
      try {
        cy();
        break;
      } catch (c) {
        Gv(n, c);
      }
    while (1);
    if (Jf(), st = l, Qo.current = o, nn !== null)
      throw Error(y(261));
    return Jt = null, On = 0, wn;
  }
  function cy() {
    for (; nn !== null; )
      Xv(nn);
  }
  function fy() {
    for (; nn !== null && !Mi(); )
      Xv(nn);
  }
  function Xv(n) {
    var r = Kv(n.alternate, n, Ir);
    n.memoizedProps = n.pendingProps, r === null ? bd(n) : nn = r, xd.current = null;
  }
  function bd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = md(l, r), l !== null) {
          l.flags &= 32767, nn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          wn = 6, nn = null;
          return;
        }
      } else if (l = sy(l, r, Ir), l !== null) {
        nn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        nn = r;
        return;
      }
      nn = r = n;
    } while (r !== null);
    wn === 0 && (wn = 5);
  }
  function Yl(n, r, l) {
    var o = bt, c = tr.transition;
    try {
      tr.transition = null, bt = 1, dy(n, r, l, o);
    } finally {
      tr.transition = c, bt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      Vu();
    while (Zi !== null);
    if (st & 6)
      throw Error(y(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Hm(n, d), n === Jt && (nn = Jt = null, On = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Ki || (Ki = !0, kd(Ni, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = tr.transition, tr.transition = null;
      var h = bt;
      bt = 1;
      var C = st;
      st |= 4, xd.current = null, Bv(n, l), Yv(l, n), Os(El), yl = !!Bf, El = Bf = null, n.current = l, $v(l), Ss(), st = C, bt = h, tr.transition = d;
    } else
      n.current = l;
    if (Ki && (Ki = !1, Zi = n, Tc = c), d = n.pendingLanes, d === 0 && (Ia = null), Op(l.stateNode), ar(n, gt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wc)
      throw wc = !1, n = Fl, Fl = null, n;
    return Tc & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === Rc ? ju++ : (ju = 0, Rc = n) : ju = 0, Cr(), null;
  }
  function Vu() {
    if (Zi !== null) {
      var n = gf(Tc), r = tr.transition, l = bt;
      try {
        if (tr.transition = null, bt = 16 > n ? 16 : n, Zi === null)
          var o = !1;
        else {
          if (n = Zi, Zi = null, Tc = 0, st & 6)
            throw Error(y(331));
          var c = st;
          for (st |= 4, Se = n.current; Se !== null; ) {
            var d = Se, h = d.child;
            if (Se.flags & 16) {
              var C = d.deletions;
              if (C !== null) {
                for (var T = 0; T < C.length; T++) {
                  var F = C[T];
                  for (Se = F; Se !== null; ) {
                    var X = Se;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $o(8, X, d);
                    }
                    var Z = X.child;
                    if (Z !== null)
                      Z.return = X, Se = Z;
                    else
                      for (; Se !== null; ) {
                        X = Se;
                        var G = X.sibling, pe = X.return;
                        if (gd(X), X === F) {
                          Se = null;
                          break;
                        }
                        if (G !== null) {
                          G.return = pe, Se = G;
                          break;
                        }
                        Se = pe;
                      }
                  }
                }
                var xe = d.alternate;
                if (xe !== null) {
                  var Te = xe.child;
                  if (Te !== null) {
                    xe.child = null;
                    do {
                      var un = Te.sibling;
                      Te.sibling = null, Te = un;
                    } while (Te !== null);
                  }
                }
                Se = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, Se = h;
            else
              e:
                for (; Se !== null; ) {
                  if (d = Se, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $o(9, d, d.return);
                    }
                  var L = d.sibling;
                  if (L !== null) {
                    L.return = d.return, Se = L;
                    break e;
                  }
                  Se = d.return;
                }
          }
          var b = n.current;
          for (Se = b; Se !== null; ) {
            h = Se;
            var z = h.child;
            if (h.subtreeFlags & 2064 && z !== null)
              z.return = h, Se = z;
            else
              e:
                for (h = b; Se !== null; ) {
                  if (C = Se, C.flags & 2048)
                    try {
                      switch (C.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Io(9, C);
                      }
                    } catch (be) {
                      rn(C, C.return, be);
                    }
                  if (C === h) {
                    Se = null;
                    break e;
                  }
                  var te = C.sibling;
                  if (te !== null) {
                    te.return = C.return, Se = te;
                    break e;
                  }
                  Se = C.return;
                }
          }
          if (st = c, Cr(), Ra && typeof Ra.onPostCommitFiberRoot == "function")
            try {
              Ra.onPostCommitFiberRoot(uo, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        bt = l, tr.transition = r;
      }
    }
    return !1;
  }
  function qv(n, r, l) {
    r = ku(l, r), r = Ov(n, r, 1), n = Ii(n, r, 1), r = nr(), n !== null && (ml(n, 1, r), ar(n, r));
  }
  function rn(n, r, l) {
    if (n.tag === 3)
      qv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          qv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ia === null || !Ia.has(o))) {
            n = ku(l, n), n = Fo(r, n, 1), r = Ii(r, n, 1), n = nr(), r !== null && (ml(r, 1, n), ar(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = nr(), n.pingedLanes |= n.suspendedLanes & l, Jt === n && (On & l) === l && (wn === 4 || wn === 3 && (On & 130023424) === On && 500 > gt() - Cd ? Pl(n, 0) : Ou |= l), ar(n, r);
  }
  function Dc(n, r) {
    r === 0 && (n.mode & 1 ? (r = ou, ou <<= 1, !(ou & 130023424) && (ou = 4194304)) : r = 1);
    var l = nr();
    n = si(n, r), n !== null && (ml(n, r, l), ar(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Dc(n, l);
  }
  function hy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    o !== null && o.delete(r), Dc(n, l);
  }
  var Kv;
  Kv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || tn.current)
        pn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return pn = !1, di(n, r, l);
        pn = !!(n.flags & 131072);
      }
    else
      pn = !1, Ft && r.flags & 1048576 && Gf(r, xu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Jn(n, r), n = r.pendingProps;
        var c = ra(r, Pe.current);
        ie(r, l), c = Gi(null, r, o, n, c, l);
        var d = Ml();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Qt(o) ? (d = !0, Bs(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, td(r), c.updater = Xs, r.stateNode = c, c._reactInternals = r, qs(r, o, n, l), r = jv(null, r, o, !0, d, l)) : (r.tag = 0, Ft && d && Ps(r), xn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Jn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = Yr(o, n), c) {
            case 0:
              r = Du(null, r, o, n, l);
              break e;
            case 1:
              r = cd(null, r, o, n, l);
              break e;
            case 11:
              r = qi(null, r, o, n, l);
              break e;
            case 14:
              r = yc(null, r, o, Yr(o.type, n), l);
              break e;
          }
          throw Error(y(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Yr(o, c), Du(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Yr(o, c), cd(n, r, o, c, l);
      case 3:
        e: {
          if (Hv(r), n === null)
            throw Error(y(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Sn(n, r), Qi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = ku(Error(y(423)), r), r = gc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = ku(Error(y(424)), r), r = gc(n, r, o, l, c);
              break e;
            } else
              for (Tr = La(r.stateNode.containerInfo.firstChild), Pr = r, Ft = !0, la = null, l = zv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Kt(), o === c) {
              r = Bn(n, r, l);
              break e;
            }
            xn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ae(r), n === null && $s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, ko(o, c) ? h = null : d !== null && ko(o, d) && (r.flags |= 32), Ze(n, r), xn(n, r, h, l), r.child;
      case 6:
        return n === null && $s(r), null;
      case 13:
        return dd(n, r, l);
      case 4:
        return ad(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Eu(r, null, o, l) : xn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Yr(o, c), qi(n, r, o, c, l);
      case 7:
        return xn(n, r, r.pendingProps, l), r.child;
      case 8:
        return xn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return xn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Et(Ba, o._currentValue), o._currentValue = h, d !== null)
            if (ta(d.value, h)) {
              if (d.children === c.children && !tn.current) {
                r = Bn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var C = d.dependencies;
                if (C !== null) {
                  h = d.child;
                  for (var T = C.firstContext; T !== null; ) {
                    if (T.context === o) {
                      if (d.tag === 1) {
                        T = ci(-1, l & -l), T.tag = 2;
                        var F = d.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var X = F.pending;
                          X === null ? T.next = T : (T.next = X.next, X.next = T), F.pending = T;
                        }
                      }
                      d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), zn(
                        d.return,
                        l,
                        r
                      ), C.lanes |= l;
                      break;
                    }
                    T = T.next;
                  }
                } else if (d.tag === 10)
                  h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (h = d.return, h === null)
                    throw Error(y(341));
                  h.lanes |= l, C = h.alternate, C !== null && (C.lanes |= l), zn(h, l, r), h = d.sibling;
                } else
                  h = d.child;
                if (h !== null)
                  h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (d = h.sibling, d !== null) {
                      d.return = h.return, h = d;
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          xn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ie(r, l), c = ln(c), o = o(c), r.flags |= 1, xn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Yr(o, r.pendingProps), c = Yr(o.type, c), yc(n, r, o, c, l);
      case 15:
        return kr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Yr(o, c), Jn(n, r), r.tag = 1, Qt(o) ? (n = !0, Bs(r)) : n = !1, ie(r, l), _v(r, o, c), qs(r, o, c, l), jv(null, r, o, !0, n, l);
      case 19:
        return hd(n, r, l);
      case 22:
        return Ol(n, r, l);
    }
    throw Error(y(156, r.tag));
  };
  function kd(n, r) {
    return It(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function da(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function Dd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function")
      return Dd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Tt)
        return 11;
      if (n === et)
        return 14;
    }
    return 2;
  }
  function el(n, r) {
    var l = n.alternate;
    return l === null ? (l = da(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function _c(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      Dd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case je:
            return $l(l.children, c, d, r);
          case vt:
            h = 8, c |= 8;
            break;
          case ht:
            return n = da(12, l, r, c | 2), n.elementType = ht, n.lanes = d, n;
          case Ne:
            return n = da(13, l, r, c), n.elementType = Ne, n.lanes = d, n;
          case qe:
            return n = da(19, l, r, c), n.elementType = qe, n.lanes = d, n;
          case Ut:
            return Xo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Xe:
                  h = 10;
                  break e;
                case We:
                  h = 9;
                  break e;
                case Tt:
                  h = 11;
                  break e;
                case et:
                  h = 14;
                  break e;
                case ut:
                  h = 16, o = null;
                  break e;
              }
            throw Error(y(130, n == null ? n : typeof n, ""));
        }
    return r = da(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function $l(n, r, l, o) {
    return n = da(7, n, o, r), n.lanes = l, n;
  }
  function Xo(n, r, l, o) {
    return n = da(22, n, o, r), n.elementType = Ut, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function qo(n, r, l) {
    return n = da(6, n, null, r), n.lanes = l, n;
  }
  function Il(n, r, l) {
    return r = da(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function gy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yf(0), this.expirationTimes = yf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Lc(n, r, l, o, c, d, h, C, T) {
    return n = new gy(n, r, l, C, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = da(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, td(d), n;
  }
  function Zv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function _d(n) {
    if (!n)
      return Va;
    n = n._reactInternals;
    e: {
      if (Je(n) !== n || n.tag !== 1)
        throw Error(y(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Qt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Qt(l))
        return Lo(n, l, r);
    }
    return r;
  }
  function Jv(n, r, l, o, c, d, h, C, T) {
    return n = Lc(l, o, !0, n, c, d, h, C, T), n.context = _d(null), l = n.current, o = nr(), c = vn(l), d = ci(o, c), d.callback = r ?? null, Ii(l, d, c), n.current.lanes = c, ml(n, c, o), ar(n, o), n;
  }
  function Ko(n, r, l, o) {
    var c = r.current, d = nr(), h = vn(c);
    return l = _d(l), r.context === null ? r.context = l : r.pendingContext = l, r = ci(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ii(c, r, h), n !== null && (rr(n, c, h, d), Gs(n, c, h)), h;
  }
  function Mc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function eh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Ld(n, r) {
    eh(n, r), (n = n.alternate) && eh(n, r);
  }
  function th() {
    return null;
  }
  var Md = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Nc(n) {
    this._internalRoot = n;
  }
  mi.prototype.render = Nc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(y(409));
    Ko(n, r, null, null);
  }, mi.prototype.unmount = Nc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ji(function() {
        Ko(null, n, null, null);
      }), r[ui] = null;
    }
  };
  function mi(n) {
    this._internalRoot = n;
  }
  mi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Fp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < kt.length && r !== 0 && r < kt[l].priority; l++)
        ;
      kt.splice(l, 0, n), l === 0 && Vp(n);
    }
  };
  function Nd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function zc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function nh() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var F = Mc(h);
          d.call(F);
        };
      }
      var h = Jv(r, o, n, 0, null, !1, !1, "", nh);
      return n._reactRootContainer = h, n[ui] = h.current, gu(n.nodeType === 8 ? n.parentNode : n), Ji(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var C = o;
      o = function() {
        var F = Mc(T);
        C.call(F);
      };
    }
    var T = Lc(n, 0, !1, null, null, !1, !1, "", nh);
    return n._reactRootContainer = T, n[ui] = T.current, gu(n.nodeType === 8 ? n.parentNode : n), Ji(function() {
      Ko(r, T, l, o);
    }), T;
  }
  function Uc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var C = c;
        c = function() {
          var T = Mc(h);
          C.call(T);
        };
      }
      Ko(r, h, n, c);
    } else
      h = Sy(l, r, n, c, o);
    return Mc(h);
  }
  Hp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = hl(r.pendingLanes);
          l !== 0 && (oo(r, l | 1), ar(r, gt()), !(st & 6) && (Au = gt() + 500, Cr()));
        }
        break;
      case 13:
        Ji(function() {
          var o = si(n, 1);
          if (o !== null) {
            var c = nr();
            rr(o, n, 1, c);
          }
        }), Ld(n, 1);
    }
  }, ws = function(n) {
    if (n.tag === 13) {
      var r = si(n, 134217728);
      if (r !== null) {
        var l = nr();
        rr(r, n, 134217728, l);
      }
      Ld(n, 134217728);
    }
  }, Mt = function(n) {
    if (n.tag === 13) {
      var r = vn(n), l = si(n, r);
      if (l !== null) {
        var o = nr();
        rr(l, n, r, o);
      }
      Ld(n, r);
    }
  }, Fp = function() {
    return bt;
  }, Sf = function(n, r) {
    var l = bt;
    try {
      return bt = n, r();
    } finally {
      bt = l;
    }
  }, jr = function(n, r, l) {
    switch (r) {
      case "input":
        if (jt(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Me(o);
              if (!c)
                throw Error(y(90));
              yr(o), jt(o, c);
            }
          }
        }
        break;
      case "textarea":
        ja(n, l);
        break;
      case "select":
        r = l.value, r != null && Aa(n, !!l.multiple, r, !1);
    }
  }, lo = Fu, gs = Ji;
  var xy = { usingClientEntryPoint: !1, Events: [_o, Su, Me, dl, iu, Fu] }, Bu = { findFiberByHostInstance: na, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Cy = { bundleType: Bu.bundleType, version: Bu.version, rendererPackageName: Bu.rendererPackageName, rendererConfig: Bu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ue.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = _n(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Bu.findFiberByHostInstance || th, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Oc.isDisabled && Oc.supportsFiber)
      try {
        uo = Oc.inject(Cy), Ra = Oc;
      } catch {
      }
  }
  return ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, ga.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Nd(r))
      throw Error(y(200));
    return Zv(n, r, null, l);
  }, ga.createRoot = function(n, r) {
    if (!Nd(n))
      throw Error(y(299));
    var l = !1, o = "", c = Md;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Lc(n, 1, !1, null, null, l, !1, o, c), n[ui] = r.current, gu(n.nodeType === 8 ? n.parentNode : n), new Nc(r);
  }, ga.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = _n(r), n = n === null ? null : n.stateNode, n;
  }, ga.flushSync = function(n) {
    return Ji(n);
  }, ga.hydrate = function(n, r, l) {
    if (!zc(r))
      throw Error(y(200));
    return Uc(null, n, r, !0, l);
  }, ga.hydrateRoot = function(n, r, l) {
    if (!Nd(n))
      throw Error(y(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Md;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Jv(r, null, n, 1, l ?? null, c, !1, d, h), n[ui] = r.current, gu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new mi(r);
  }, ga.render = function(n, r, l) {
    if (!zc(r))
      throw Error(y(200));
    return Uc(null, n, r, !1, l);
  }, ga.unmountComponentAtNode = function(n) {
    if (!zc(n))
      throw Error(y(40));
    return n._reactRootContainer ? (Ji(function() {
      Uc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ui] = null;
      });
    }), !0) : !1;
  }, ga.unstable_batchedUpdates = Fu, ga.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!zc(l))
      throw Error(y(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(y(38));
    return Uc(n, r, l, !1, o);
  }, ga.version = "18.2.0-next-9e3b772b8-20220608", ga;
}
var Sa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rE;
function mD() {
  return rE || (rE = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var _ = pf, E = lE(), y = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, D = !1;
    function x(e) {
      D = e;
    }
    function j(e) {
      if (!D) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        V("warn", e, a);
      }
    }
    function m(e) {
      if (!D) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        V("error", e, a);
      }
    }
    function V(e, t, a) {
      {
        var i = y.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var U = 0, $ = 1, ee = 2, B = 3, W = 4, q = 5, re = 6, we = 7, se = 8, De = 9, ge = 10, ce = 11, Ue = 12, de = 13, Re = 14, je = 15, vt = 16, ht = 17, Xe = 18, We = 19, Tt = 21, Ne = 22, qe = 23, et = 24, ut = 25, Ut = !0, ne = !1, ye = !1, ae = !1, nt = !1, rt = !0, Yt = !1, Gt = !1, Xt = !0, at = !0, ir = !0, mn = /* @__PURE__ */ new Set(), Hn = {}, zr = {};
    function qn(e, t) {
      yr(e, t), yr(e + "Capture", t);
    }
    function yr(e, t) {
      Hn[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Hn[e] = t;
      {
        var a = e.toLowerCase();
        zr[a] = e, e === "onDoubleClick" && (zr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        mn.add(t[i]);
    }
    var sn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bn = Object.prototype.hasOwnProperty;
    function yn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function kn(e) {
      try {
        return jt(e), !1;
      } catch {
        return !0;
      }
    }
    function jt(e) {
      return "" + e;
    }
    function Kr(e, t) {
      if (kn(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yn(e)), jt(e);
    }
    function xa(e) {
      if (kn(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(e)), jt(e);
    }
    function Ja(e, t) {
      if (kn(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yn(e)), jt(e);
    }
    function Aa(e, t) {
      if (kn(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yn(e)), jt(e);
    }
    function Ca(e) {
      if (kn(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", yn(e)), jt(e);
    }
    function Ur(e) {
      if (kn(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", yn(e)), jt(e);
    }
    var ja = 0, Or = 1, Ea = 2, cn = 3, Ar = 4, Di = 5, wa = 6, ue = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Le = ue + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", it = new RegExp("^[" + ue + "][" + Le + "]*$"), Rt = {}, qt = {};
    function Dn(e) {
      return bn.call(qt, e) ? !0 : bn.call(Rt, e) ? !1 : it.test(e) ? (qt[e] = !0, !0) : (Rt[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function an(e, t, a) {
      return t !== null ? t.type === ja : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gr(e, t, a, i) {
      if (a !== null && a.type === ja)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ot(e, t, a, i) {
      if (t === null || typeof t > "u" || gr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case cn:
            return !t;
          case Ar:
            return t === !1;
          case Di:
            return isNaN(t);
          case wa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function jr(e) {
      return At.hasOwnProperty(e) ? At[e] : null;
    }
    function Lt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ea || t === cn || t === Ar, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var At = {}, au = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    au.forEach(function(e) {
      At[e] = new Lt(
        e,
        ja,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      At[t] = new Lt(
        t,
        Or,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      At[e] = new Lt(
        e,
        Ea,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      At[e] = new Lt(
        e,
        Ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      At[e] = new Lt(
        e,
        cn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Lt(
        e,
        cn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Lt(
        e,
        Ar,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Lt(
        e,
        wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      At[e] = new Lt(
        e,
        Di,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var dl = /[\-\:]([a-z])/g, iu = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(dl, iu);
      At[t] = new Lt(
        t,
        Or,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(dl, iu);
      At[t] = new Lt(
        t,
        Or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(dl, iu);
      At[t] = new Lt(
        t,
        Or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      At[e] = new Lt(
        e,
        Or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var lo = "xlinkHref";
    At[lo] = new Lt(
      "xlinkHref",
      Or,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      At[e] = new Lt(
        e,
        Or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, pl = !1;
    function lu(e) {
      !pl && gs.test(e) && (pl = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Kr(a, t), i.sanitizeURL && lu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Ar) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Ot(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Ot(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === cn)
            return a;
          f = e.getAttribute(s);
        }
        return Ot(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function uu(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Kr(a, t), u === "" + a ? a : u;
      }
    }
    function Ha(e, t, a, i) {
      var u = jr(t);
      if (!an(t, u, i)) {
        if (Ot(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Kr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === cn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = u.attributeName, S = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var k = u.type, R;
          k === cn || k === Ar && a === !0 ? R = "" : (Kr(a, g), R = "" + a, u.sanitizeURL && lu(R.toString())), S ? e.setAttributeNS(S, g, R) : e.setAttribute(g, R);
        }
      }
    }
    var _i = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), Ta = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), oe = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), _n = Symbol.for("react.scope"), $t = Symbol.for("react.debug_trace_mode"), It = Symbol.for("react.offscreen"), lr = Symbol.for("react.legacy_hidden"), Mi = Symbol.for("react.cache"), Ss = Symbol.for("react.tracing_marker"), gt = Symbol.iterator, Am = "@@iterator";
    function ei(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = gt && e[gt] || e[Am];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, Ni = 0, Up, vf, uo, Ra, Op, Zr, Ap;
    function jp() {
    }
    jp.__reactDisabledLog = !0;
    function jm() {
      {
        if (Ni === 0) {
          Up = console.log, vf = console.info, uo = console.warn, Ra = console.error, Op = console.group, Zr = console.groupCollapsed, Ap = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: jp,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ni++;
      }
    }
    function xs() {
      {
        if (Ni--, Ni === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: Up
            }),
            info: ot({}, e, {
              value: vf
            }),
            warn: ot({}, e, {
              value: uo
            }),
            error: ot({}, e, {
              value: Ra
            }),
            group: ot({}, e, {
              value: Op
            }),
            groupCollapsed: ot({}, e, {
              value: Zr
            }),
            groupEnd: ot({}, e, {
              value: Ap
            })
          });
        }
        Ni < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ou = y.ReactCurrentDispatcher, hl;
    function ba(e, t, a) {
      {
        if (hl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            hl = i && i[1] || "";
          }
        return `
` + hl + e;
      }
    }
    var hf = !1, Cs;
    {
      var mf = typeof WeakMap == "function" ? WeakMap : Map;
      Cs = new mf();
    }
    function Es(e, t) {
      if (!e || hf)
        return "";
      {
        var a = Cs.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      hf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ou.current, ou.current = null, jm();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (H) {
              i = H;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var p = H.stack.split(`
`), v = i.stack.split(`
`), g = p.length - 1, S = v.length - 1; g >= 1 && S >= 0 && p[g] !== v[S]; )
            S--;
          for (; g >= 1 && S >= 0; g--, S--)
            if (p[g] !== v[S]) {
              if (g !== 1 || S !== 1)
                do
                  if (g--, S--, S < 0 || p[g] !== v[S]) {
                    var k = `
` + p[g].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && Cs.set(e, k), k;
                  }
                while (g >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        hf = !1, ou.current = s, xs(), Error.prepareStackTrace = u;
      }
      var R = e ? e.displayName || e.name : "", O = R ? ba(R) : "";
      return typeof e == "function" && Cs.set(e, O), O;
    }
    function yf(e, t, a) {
      return Es(e, !0);
    }
    function ml(e, t, a) {
      return Es(e, !1);
    }
    function Hm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function oo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Es(e, Hm(e));
      if (typeof e == "string")
        return ba(e);
      switch (e) {
        case Je:
          return ba("Suspense");
        case mt:
          return ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Oe:
            return ml(e.render);
          case tt:
            return oo(e.type, t, a);
          case He: {
            var i = e, u = i._payload, s = i._init;
            try {
              return oo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function bt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return ba(e.type);
        case vt:
          return ba("Lazy");
        case de:
          return ba("Suspense");
        case We:
          return ba("SuspenseList");
        case U:
        case ee:
        case je:
          return ml(e.type);
        case ce:
          return ml(e.type.render);
        case $:
          return yf(e.type);
        default:
          return "";
      }
    }
    function gf(e) {
      try {
        var t = "", a = e;
        do
          t += bt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Hp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ws(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ta:
          return "Fragment";
        case Hr:
          return "Portal";
        case w:
          return "Profiler";
        case Li:
          return "StrictMode";
        case Je:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            var t = e;
            return ws(t) + ".Consumer";
          case K:
            var a = e;
            return ws(a._context) + ".Provider";
          case Oe:
            return Hp(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case He: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Fp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Sf(e) {
      return e.displayName || "Context";
    }
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case et:
          return "Cache";
        case De:
          var i = a;
          return Sf(i) + ".Consumer";
        case ge:
          var u = a;
          return Sf(u._context) + ".Provider";
        case Xe:
          return "DehydratedFragment";
        case ce:
          return Fp(a, a.render, "ForwardRef");
        case we:
          return "Fragment";
        case q:
          return a;
        case W:
          return "Portal";
        case B:
          return "Root";
        case re:
          return "Text";
        case vt:
          return Mt(a);
        case se:
          return a === Li ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case Ue:
          return "Profiler";
        case Tt:
          return "Scope";
        case de:
          return "Suspense";
        case We:
          return "SuspenseList";
        case ut:
          return "TracingMarker";
        case $:
        case U:
        case ht:
        case ee:
        case Re:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var so = y.ReactDebugCurrentFrame, fn = null, Jr = !1;
    function ea() {
      {
        if (fn === null)
          return null;
        var e = fn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ge(e);
      }
      return null;
    }
    function co() {
      return fn === null ? "" : gf(fn);
    }
    function gn() {
      so.getCurrentStack = null, fn = null, Jr = !1;
    }
    function kt(e) {
      so.getCurrentStack = e === null ? null : co, fn = e, Jr = !1;
    }
    function Fm() {
      return fn;
    }
    function ka(e) {
      Jr = e;
    }
    function Kn(e) {
      return "" + e;
    }
    function zi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ur(e), e;
        default:
          return "";
      }
    }
    var Vp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function su(e, t) {
      Vp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function xf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Bp(e) {
      return e._valueTracker;
    }
    function fo(e) {
      e._valueTracker = null;
    }
    function po(e) {
      var t = "";
      return e && (xf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function cu(e) {
      var t = xf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Ur(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Ur(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Ur(p), i = "" + p;
          },
          stopTracking: function() {
            fo(e), delete e[t];
          }
        };
        return f;
      }
    }
    function yl(e) {
      Bp(e) || (e._valueTracker = cu(e));
    }
    function Pp(e) {
      if (!e)
        return !1;
      var t = Bp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = po(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ts(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Rs = !1, vo = !1, bs = !1, Cf = !1;
    function ti(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ho(e, t) {
      var a = e, i = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function mo(e, t) {
      su("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !vo && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ea() || "A component", t.type), vo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Rs && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ea() || "A component", t.type), Rs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: zi(t.value != null ? t.value : i),
        controlled: ti(t)
      };
    }
    function Ef(e, t) {
      var a = e, i = t.checked;
      i != null && Ha(a, "checked", i, !1);
    }
    function fu(e, t) {
      var a = e;
      {
        var i = ti(t);
        !a._wrapperState.controlled && i && !Cf && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cf = !0), a._wrapperState.controlled && !i && !bs && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), bs = !0);
      }
      Ef(e, t);
      var u = zi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Kn(u)) : a.value !== Kn(u) && (a.value = Kn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ui(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ui(a, t.type, zi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function yo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Kn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Yp(e, t) {
      var a = e;
      fu(a, t), Fr(a, t);
    }
    function Fr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Kr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Sh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Pp(f), fu(f, p);
          }
        }
      }
    }
    function Ui(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ts(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Kn(e._wrapperState.initialValue) : e.defaultValue !== Kn(a) && (e.defaultValue = Kn(a)));
    }
    var ks = !1, du = !1, $p = !1;
    function Ds(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? _.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || du || (du = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($p || ($p = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ks && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ks = !0);
    }
    function wf(e, t) {
      t.value != null && e.setAttribute("value", Kn(zi(t.value)));
    }
    var go = Array.isArray;
    function Ln(e) {
      return go(e);
    }
    var _s;
    _s = !1;
    function Ip() {
      var e = ea();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Qp = ["value", "defaultValue"];
    function Vm(e) {
      {
        su("select", e);
        for (var t = 0; t < Qp.length; t++) {
          var a = Qp[t];
          if (e[a] != null) {
            var i = Ln(e[a]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ip()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ip());
          }
        }
      }
    }
    function Oi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var g = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== g && (u[v].selected = g), g && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var S = Kn(zi(a)), k = null, R = 0; R < u.length; R++) {
          if (u[R].value === S) {
            u[R].selected = !0, i && (u[R].defaultSelected = !0);
            return;
          }
          k === null && !u[R].disabled && (k = u[R]);
        }
        k !== null && (k.selected = !0);
      }
    }
    function Tf(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function Wp(e, t) {
      var a = e;
      Vm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !_s && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _s = !0);
    }
    function Bm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Oi(a, !!t.multiple, i, !1) : t.defaultValue != null && Oi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Oi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Oi(a, !!t.multiple, t.defaultValue, !0) : Oi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ym(e, t) {
      var a = e, i = t.value;
      i != null && Oi(a, !!t.multiple, i, !1);
    }
    var Rf = !1;
    function bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Kn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Gp(e, t) {
      var a = e;
      su("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Rf && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ea() || "A component"), Rf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ln(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: zi(i)
      };
    }
    function Xp(e, t) {
      var a = e, i = zi(t.value), u = zi(t.defaultValue);
      if (i != null) {
        var s = Kn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Kn(u));
    }
    function qp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function kf(e, t) {
      Xp(e, t);
    }
    var ni = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", Df = "http://www.w3.org/2000/svg";
    function Ls(e) {
      switch (e) {
        case "svg":
          return Df;
        case "math":
          return $m;
        default:
          return ni;
      }
    }
    function _f(e, t) {
      return e == null || e === ni ? Ls(t) : e === Df && t === "foreignObject" ? ni : e;
    }
    var Im = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Ms, Kp = Im(function(e, t) {
      if (e.namespaceURI === Df && !("innerHTML" in e)) {
        Ms = Ms || document.createElement("div"), Ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ms.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Sr = 1, ri = 3, dn = 8, Da = 9, gl = 11, Ns = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ri) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Zp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, pu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Jp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ev = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pu).forEach(function(e) {
      ev.forEach(function(t) {
        pu[Jp(t, e)] = pu[e];
      });
    });
    function zs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(pu.hasOwnProperty(e) && pu[e]) ? t + "px" : (Aa(t, e), ("" + t).trim());
    }
    var vu = /([A-Z])/g, Qm = /^ms-/;
    function Wm(e) {
      return e.replace(vu, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var tv = function() {
    };
    {
      var nv = /^(?:webkit|moz|o)[A-Z]/, rv = /^-ms-/, So = /-(.)/g, hu = /;\s*$/, mu = {}, yu = {}, av = !1, Lf = !1, Mf = function(e) {
        return e.replace(So, function(t, a) {
          return a.toUpperCase();
        });
      }, Nf = function(e) {
        mu.hasOwnProperty(e) && mu[e] || (mu[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Mf(e.replace(rv, "ms-"))
        ));
      }, iv = function(e) {
        mu.hasOwnProperty(e) && mu[e] || (mu[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, lv = function(e, t) {
        yu.hasOwnProperty(t) && yu[t] || (yu[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(hu, "")));
      }, uv = function(e, t) {
        av || (av = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Gm = function(e, t) {
        Lf || (Lf = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      tv = function(e, t) {
        e.indexOf("-") > -1 ? Nf(e) : nv.test(e) ? iv(e) : hu.test(t) && lv(e, t), typeof t == "number" && (isNaN(t) ? uv(e, t) : isFinite(t) || Gm(e, t));
      };
    }
    var Xm = tv;
    function qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += zs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ov(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Xm(i, t[i]);
          var s = zs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Km(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ta(e) {
      var t = {};
      for (var a in e)
        for (var i = Zp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function xo(e, t) {
      {
        if (!t)
          return;
        var a = ta(e), i = ta(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Km(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var sv = {
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
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, cv = ot({
      menuitem: !0
    }, sv), fv = "__html";
    function Us(e, t) {
      if (t) {
        if (cv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ai(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
          return !0;
      }
    }
    var Os = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, _a = {}, zf = new RegExp("^(aria)-[" + Le + "]*$"), Co = new RegExp("^(aria)[A-Z][" + Le + "]*$");
    function Uf(e, t) {
      {
        if (bn.call(_a, t) && _a[t])
          return !0;
        if (Co.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _a[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), _a[t] = !0, !0;
        }
        if (zf.test(t)) {
          var u = t.toLowerCase(), s = dv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return _a[t] = !0, !1;
          if (t !== s)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), _a[t] = !0, !0;
        }
      }
      return !0;
    }
    function pv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Uf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function As(e, t) {
      ai(e, t) || pv(e, t);
    }
    var Sl = !1;
    function Of(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Sl && (Sl = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Af = function() {
    };
    {
      var Mn = {}, jf = /^on./, vv = /^on[^A-Z]/, hv = new RegExp("^(aria)-[" + Le + "]*$"), mv = new RegExp("^(aria)[A-Z][" + Le + "]*$");
      Af = function(e, t, a, i) {
        if (bn.call(Mn, t) && Mn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Mn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Mn[t] = !0, !0;
          if (jf.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), Mn[t] = !0, !0;
        } else if (jf.test(t))
          return vv.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Mn[t] = !0, !0;
        if (hv.test(t) || mv.test(t))
          return !0;
        if (u === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Mn[t] = !0, !0;
        if (u === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Mn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Mn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Mn[t] = !0, !0;
        var v = jr(t), g = v !== null && v.type === ja;
        if (Os.hasOwnProperty(u)) {
          var S = Os[u];
          if (S !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, S), Mn[t] = !0, !0;
        } else if (!g && t !== u)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Mn[t] = !0, !0;
        return typeof a == "boolean" && gr(t, a, v, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Mn[t] = !0, !0) : g ? !0 : gr(t, a, v, !1) ? (Mn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === cn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Mn[t] = !0), !0);
      };
    }
    var yv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Af(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function gv(e, t, a) {
      ai(e, t) || yv(e, t, a);
    }
    var ii = 1, Eo = 2, xl = 4, Zm = ii | Eo | xl, wo = null;
    function To(e) {
      wo !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), wo = e;
    }
    function Jm() {
      wo === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), wo = null;
    }
    function Sv(e) {
      return e === wo;
    }
    function js(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ri ? t.parentNode : t;
    }
    var Nt = null, Ai = null, li = null;
    function gu(e) {
      var t = $u(e);
      if (t) {
        if (typeof Nt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Sh(a);
          Nt(t.stateNode, t.type, i);
        }
      }
    }
    function xv(e) {
      Nt = e;
    }
    function Hs(e) {
      Ai ? li ? li.push(e) : li = [e] : Ai = e;
    }
    function Ro() {
      return Ai !== null || li !== null;
    }
    function bo() {
      if (Ai) {
        var e = Ai, t = li;
        if (Ai = null, li = null, gu(e), t)
          for (var a = 0; a < t.length; a++)
            gu(t[a]);
      }
    }
    var Cl = function(e, t) {
      return e(t);
    }, Hf = function() {
    }, Ff = !1;
    function ey() {
      var e = Ro();
      e && (Hf(), bo());
    }
    function Vf(e, t, a) {
      if (Ff)
        return e(t, a);
      Ff = !0;
      try {
        return Cl(e, t, a);
      } finally {
        Ff = !1, ey();
      }
    }
    function Fs(e, t, a) {
      Cl = e, Hf = a;
    }
    function Vs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Bf(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Vs(t));
        default:
          return !1;
      }
    }
    function El(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Sh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Bf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ko = !1;
    if (sn)
      try {
        var wl = {};
        Object.defineProperty(wl, "passive", {
          get: function() {
            ko = !0;
          }
        }), window.addEventListener("test", wl, wl), window.removeEventListener("test", wl, wl);
      } catch {
        ko = !1;
      }
    function Cv(e, t, a, i, u, s, f, p, v) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, g);
      } catch (S) {
        this.onError(S);
      }
    }
    var Pf = Cv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Yf = document.createElement("react");
      Pf = function(t, a, i, u, s, f, p, v, g) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), k = !1, R = !0, O = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          Yf.removeEventListener(Y, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O);
        }
        var he = Array.prototype.slice.call(arguments, 3);
        function ze() {
          k = !0, P(), a.apply(i, he), R = !1;
        }
        var ke, pt = !1, ct = !1;
        function M(N) {
          if (ke = N.error, pt = !0, ke === null && N.colno === 0 && N.lineno === 0 && (ct = !0), N.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var Y = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", M), Yf.addEventListener(Y, ze, !1), S.initEvent(Y, !1, !1), Yf.dispatchEvent(S), H && Object.defineProperty(window, "event", H), k && R && (pt ? ct && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", M), !k)
          return P(), Cv.apply(this, arguments);
      };
    }
    var ty = Pf, ji = !1, La = null, Do = !1, Hi = null, Fa = {
      onError: function(e) {
        ji = !0, La = e;
      }
    };
    function Tl(e, t, a, i, u, s, f, p, v) {
      ji = !1, La = null, ty.apply(Fa, arguments);
    }
    function ui(e, t, a, i, u, s, f, p, v) {
      if (Tl.apply(this, arguments), ji) {
        var g = If();
        Do || (Do = !0, Hi = g);
      }
    }
    function $f() {
      if (Do) {
        var e = Hi;
        throw Do = !1, Hi = null, e;
      }
    }
    function ny() {
      return ji;
    }
    function If() {
      if (ji) {
        var e = La;
        return ji = !1, La = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function na(e) {
      return e._reactInternals;
    }
    function _o(e) {
      return e._reactInternals !== void 0;
    }
    function Su(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), Fi = (
      /*                */
      1
    ), Ht = (
      /*                    */
      2
    ), Ke = (
      /*                       */
      4
    ), Ct = (
      /*                */
      16
    ), Et = (
      /*                 */
      32
    ), Va = (
      /*                     */
      64
    ), Pe = (
      /*                   */
      128
    ), tn = (
      /*            */
      256
    ), xr = (
      /*                          */
      512
    ), ra = (
      /*                     */
      1024
    ), Qt = (
      /*                      */
      2048
    ), aa = (
      /*                    */
      4096
    ), Vi = (
      /*                   */
      8192
    ), Lo = (
      /*             */
      16384
    ), Bs = Qt | Ke | Va | xr | ra | Lo, Ev = (
      /*               */
      32767
    ), Vr = (
      /*                   */
      32768
    ), Nn = (
      /*                */
      65536
    ), Mo = (
      /* */
      131072
    ), Qf = (
      /*                       */
      1048576
    ), Wf = (
      /*                    */
      2097152
    ), Cr = (
      /*                 */
      4194304
    ), Bi = (
      /*                */
      8388608
    ), Er = (
      /*               */
      16777216
    ), Rl = (
      /*              */
      33554432
    ), xu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ke | ra | 0
    ), wr = Ht | Ke | Ct | Et | xr | aa | Vi, Zn = Ke | Va | xr | Vi, ia = Qt | Ct, Fn = Cr | Bi | Wf, oi = y.ReactCurrentOwner;
    function Br(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Ht | aa)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === B ? a : null;
    }
    function Gf(e) {
      if (e.tag === de) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ps(e) {
      return e.tag === B ? e.stateNode.containerInfo : null;
    }
    function Xf(e) {
      return Br(e) === e;
    }
    function Pr(e) {
      {
        var t = oi.current;
        if (t !== null && t.tag === $) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = na(e);
      return u ? Br(u) === u : !1;
    }
    function Tr(e) {
      if (Br(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ft(e) {
      var t = e.alternate;
      if (!t) {
        var a = Br(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Tr(s), e;
            if (v === u)
              return Tr(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var g = !1, S = s.child; S; ) {
            if (S === i) {
              g = !0, i = s, u = f;
              break;
            }
            if (S === u) {
              g = !0, u = s, i = f;
              break;
            }
            S = S.sibling;
          }
          if (!g) {
            for (S = f.child; S; ) {
              if (S === i) {
                g = !0, i = f, u = s;
                break;
              }
              if (S === u) {
                g = !0, u = f, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!g)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== B)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function la(e) {
      var t = Ft(e);
      return t !== null ? qf(t) : null;
    }
    function qf(e) {
      if (e.tag === q || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = qf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function wv(e) {
      var t = Ft(e);
      return t !== null ? Ys(t) : null;
    }
    function Ys(e) {
      if (e.tag === q || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== W) {
          var a = Ys(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var $s = E.unstable_scheduleCallback, Tv = E.unstable_cancelCallback, Is = E.unstable_shouldYield, Rv = E.unstable_requestPaint, Kt = E.unstable_now, Kf = E.unstable_getCurrentPriorityLevel, Qs = E.unstable_ImmediatePriority, Yr = E.unstable_UserBlockingPriority, Ba = E.unstable_NormalPriority, Ws = E.unstable_LowPriority, Pi = E.unstable_IdlePriority, Zf = E.unstable_yieldValue, Jf = E.unstable_setDisableYieldValue, Yi = null, zn = null, ie = null, ln = !1, Vn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ed(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Xt && (e = ot({}, e, {
          getLaneLabelMap: Ii,
          injectProfilingHooks: ci
        })), Yi = t.inject(e), zn = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function bv(e, t) {
      if (zn && typeof zn.onScheduleFiberRoot == "function")
        try {
          zn.onScheduleFiberRoot(Yi, e, t);
        } catch (a) {
          ln || (ln = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function si(e, t) {
      if (zn && typeof zn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Pe) === Pe;
          if (at) {
            var i;
            switch (t) {
              case Jn:
                i = Qs;
                break;
              case Bn:
                i = Yr;
                break;
              case di:
                i = Ba;
                break;
              case Vo:
                i = Pi;
                break;
              default:
                i = Ba;
                break;
            }
            zn.onCommitFiberRoot(Yi, e, i, a);
          }
        } catch (u) {
          ln || (ln = !0, m("React instrumentation encountered an error: %s", u));
        }
    }
    function $i(e) {
      if (zn && typeof zn.onPostCommitFiberRoot == "function")
        try {
          zn.onPostCommitFiberRoot(Yi, e);
        } catch (t) {
          ln || (ln = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function td(e) {
      if (zn && typeof zn.onCommitFiberUnmount == "function")
        try {
          zn.onCommitFiberUnmount(Yi, e);
        } catch (t) {
          ln || (ln = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Sn(e) {
      if (typeof Zf == "function" && (Jf(e), x(e)), zn && typeof zn.setStrictMode == "function")
        try {
          zn.setStrictMode(Yi, e);
        } catch (t) {
          ln || (ln = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function ci(e) {
      ie = e;
    }
    function Ii() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Vt; a++) {
          var i = ry(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Gs(e) {
      ie !== null && typeof ie.markCommitStarted == "function" && ie.markCommitStarted(e);
    }
    function nd() {
      ie !== null && typeof ie.markCommitStopped == "function" && ie.markCommitStopped();
    }
    function Qi(e) {
      ie !== null && typeof ie.markComponentRenderStarted == "function" && ie.markComponentRenderStarted(e);
    }
    function bl() {
      ie !== null && typeof ie.markComponentRenderStopped == "function" && ie.markComponentRenderStopped();
    }
    function kv(e) {
      ie !== null && typeof ie.markComponentPassiveEffectMountStarted == "function" && ie.markComponentPassiveEffectMountStarted(e);
    }
    function rd() {
      ie !== null && typeof ie.markComponentPassiveEffectMountStopped == "function" && ie.markComponentPassiveEffectMountStopped();
    }
    function Xs(e) {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStarted == "function" && ie.markComponentPassiveEffectUnmountStarted(e);
    }
    function Dv() {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStopped == "function" && ie.markComponentPassiveEffectUnmountStopped();
    }
    function _v(e) {
      ie !== null && typeof ie.markComponentLayoutEffectMountStarted == "function" && ie.markComponentLayoutEffectMountStarted(e);
    }
    function Lv() {
      ie !== null && typeof ie.markComponentLayoutEffectMountStopped == "function" && ie.markComponentLayoutEffectMountStopped();
    }
    function qs(e) {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStarted == "function" && ie.markComponentLayoutEffectUnmountStarted(e);
    }
    function Cu() {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStopped == "function" && ie.markComponentLayoutEffectUnmountStopped();
    }
    function Ks(e, t, a) {
      ie !== null && typeof ie.markComponentErrored == "function" && ie.markComponentErrored(e, t, a);
    }
    function Mv(e, t, a) {
      ie !== null && typeof ie.markComponentSuspended == "function" && ie.markComponentSuspended(e, t, a);
    }
    function Nv(e) {
      ie !== null && typeof ie.markLayoutEffectsStarted == "function" && ie.markLayoutEffectsStarted(e);
    }
    function Eu() {
      ie !== null && typeof ie.markLayoutEffectsStopped == "function" && ie.markLayoutEffectsStopped();
    }
    function zv(e) {
      ie !== null && typeof ie.markPassiveEffectsStarted == "function" && ie.markPassiveEffectsStarted(e);
    }
    function No() {
      ie !== null && typeof ie.markPassiveEffectsStopped == "function" && ie.markPassiveEffectsStopped();
    }
    function Ma(e) {
      ie !== null && typeof ie.markRenderStarted == "function" && ie.markRenderStarted(e);
    }
    function zo() {
      ie !== null && typeof ie.markRenderYielded == "function" && ie.markRenderYielded();
    }
    function wu() {
      ie !== null && typeof ie.markRenderStopped == "function" && ie.markRenderStopped();
    }
    function kl(e) {
      ie !== null && typeof ie.markRenderScheduled == "function" && ie.markRenderScheduled(e);
    }
    function ad(e, t) {
      ie !== null && typeof ie.markForceUpdateScheduled == "function" && ie.markForceUpdateScheduled(e, t);
    }
    function Wi(e, t) {
      ie !== null && typeof ie.markStateUpdateScheduled == "function" && ie.markStateUpdateScheduled(e, t);
    }
    var Ae = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), Fe = (
      /*                    */
      2
    ), Zt = (
      /*               */
      8
    ), ua = (
      /*              */
      16
    ), Zs = Math.clz32 ? Math.clz32 : Dl, Js = Math.log, id = Math.LN2;
    function Dl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Js(t) / id | 0) | 0;
    }
    var Vt = 31, I = (
      /*                        */
      0
    ), ft = (
      /*                          */
      0
    ), Ve = (
      /*                        */
      1
    ), Pa = (
      /*    */
      2
    ), $r = (
      /*             */
      4
    ), _l = (
      /*            */
      8
    ), Bt = (
      /*                     */
      16
    ), Ll = (
      /*                */
      32
    ), Gi = (
      /*                       */
      4194240
    ), Ml = (
      /*                        */
      64
    ), oa = (
      /*                        */
      128
    ), Rr = (
      /*                        */
      256
    ), Nl = (
      /*                        */
      512
    ), Uo = (
      /*                        */
      1024
    ), Oo = (
      /*                        */
      2048
    ), ec = (
      /*                        */
      4096
    ), tc = (
      /*                        */
      8192
    ), nc = (
      /*                        */
      16384
    ), rc = (
      /*                       */
      32768
    ), ac = (
      /*                       */
      65536
    ), ic = (
      /*                       */
      131072
    ), lc = (
      /*                       */
      262144
    ), uc = (
      /*                       */
      524288
    ), zl = (
      /*                       */
      1048576
    ), oc = (
      /*                       */
      2097152
    ), Ul = (
      /*                            */
      130023424
    ), fi = (
      /*                             */
      4194304
    ), sc = (
      /*                             */
      8388608
    ), Ao = (
      /*                             */
      16777216
    ), cc = (
      /*                             */
      33554432
    ), fc = (
      /*                             */
      67108864
    ), ld = fi, Tu = (
      /*          */
      134217728
    ), dc = (
      /*                          */
      268435455
    ), Ru = (
      /*               */
      268435456
    ), Xi = (
      /*                        */
      536870912
    ), br = (
      /*                   */
      1073741824
    );
    function ry(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & Pa)
          return "InputContinuousHydration";
        if (e & $r)
          return "InputContinuous";
        if (e & _l)
          return "DefaultHydration";
        if (e & Bt)
          return "Default";
        if (e & Ll)
          return "TransitionHydration";
        if (e & Gi)
          return "Transition";
        if (e & Ul)
          return "Retry";
        if (e & Tu)
          return "SelectiveHydration";
        if (e & Ru)
          return "IdleHydration";
        if (e & Xi)
          return "Idle";
        if (e & br)
          return "Offscreen";
      }
    }
    var zt = -1, pc = Ml, vc = fi;
    function bu(e) {
      switch (pn(e)) {
        case Ve:
          return Ve;
        case Pa:
          return Pa;
        case $r:
          return $r;
        case _l:
          return _l;
        case Bt:
          return Bt;
        case Ll:
          return Ll;
        case Ml:
        case oa:
        case Rr:
        case Nl:
        case Uo:
        case Oo:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case ic:
        case lc:
        case uc:
        case zl:
        case oc:
          return e & Gi;
        case fi:
        case sc:
        case Ao:
        case cc:
        case fc:
          return e & Ul;
        case Tu:
          return Tu;
        case Ru:
          return Ru;
        case Xi:
          return Xi;
        case br:
          return br;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function jo(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & dc;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = bu(p);
        else {
          var v = f & s;
          v !== I && (i = bu(v));
        }
      } else {
        var g = a & ~u;
        g !== I ? i = bu(g) : s !== I && (i = bu(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var S = pn(i), k = pn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          S >= k || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          S === Bt && (k & Gi) !== I
        )
          return t;
      }
      (i & $r) !== I && (i |= a & Bt);
      var R = e.entangledLanes;
      if (R !== I)
        for (var O = e.entanglements, H = i & R; H > 0; ) {
          var P = qi(H), he = 1 << P;
          i |= O[P], H &= ~he;
        }
      return i;
    }
    function Uv(e, t) {
      for (var a = e.eventTimes, i = zt; t > 0; ) {
        var u = qi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function hc(e, t) {
      switch (e) {
        case Ve:
        case Pa:
        case $r:
          return t + 250;
        case _l:
        case Bt:
        case Ll:
        case Ml:
        case oa:
        case Rr:
        case Nl:
        case Uo:
        case Oo:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case ic:
        case lc:
        case uc:
        case zl:
        case oc:
          return t + 5e3;
        case fi:
        case sc:
        case Ao:
        case cc:
        case fc:
          return zt;
        case Tu:
        case Ru:
        case Xi:
        case br:
          return zt;
        default:
          return m("Should have found matching lanes. This is a bug in React."), zt;
      }
    }
    function ay(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = qi(f), v = 1 << p, g = s[p];
        g === zt ? ((v & i) === I || (v & u) !== I) && (s[p] = hc(v, t)) : g <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function iy(e) {
      return bu(e.pendingLanes);
    }
    function ud(e) {
      var t = e.pendingLanes & ~br;
      return t !== I ? t : t & br ? br : I;
    }
    function ku(e) {
      return (e & Ve) !== I;
    }
    function Ho(e) {
      return (e & dc) !== I;
    }
    function mc(e) {
      return (e & Ul) === e;
    }
    function ly(e) {
      var t = Ve | $r | Bt;
      return (e & t) === I;
    }
    function Ov(e) {
      return (e & Gi) === e;
    }
    function Fo(e, t) {
      var a = Pa | $r | _l | Bt;
      return (t & a) !== I;
    }
    function Av(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function od(e) {
      return (e & Gi) !== I;
    }
    function sd() {
      var e = pc;
      return pc <<= 1, (pc & Gi) === I && (pc = Ml), e;
    }
    function uy() {
      var e = vc;
      return vc <<= 1, (vc & Ul) === I && (vc = fi), e;
    }
    function pn(e) {
      return e & -e;
    }
    function xn(e) {
      return pn(e);
    }
    function qi(e) {
      return 31 - Zs(e);
    }
    function yc(e) {
      return qi(e);
    }
    function kr(e, t) {
      return (e & t) !== I;
    }
    function Ol(e, t) {
      return (e & t) === t;
    }
    function Ze(e, t) {
      return e | t;
    }
    function Du(e, t) {
      return e & ~t;
    }
    function cd(e, t) {
      return e & t;
    }
    function jv(e) {
      return e;
    }
    function Hv(e, t) {
      return e !== ft && e < t ? e : t;
    }
    function gc(e) {
      for (var t = [], a = 0; a < Vt; a++)
        t.push(e);
      return t;
    }
    function Al(e, t, a) {
      e.pendingLanes |= t, t !== Xi && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, u = yc(t);
      i[u] = a;
    }
    function fd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = qi(i), s = 1 << u;
        a[u] = zt, i &= ~s;
      }
    }
    function dd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function pd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = qi(f), v = 1 << p;
        i[p] = I, u[p] = zt, s[p] = zt, f &= ~v;
      }
    }
    function _u(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = qi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function oy(e, t) {
      var a = pn(t), i;
      switch (a) {
        case $r:
          i = Pa;
          break;
        case Bt:
          i = _l;
          break;
        case Ml:
        case oa:
        case Rr:
        case Nl:
        case Uo:
        case Oo:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case ic:
        case lc:
        case uc:
        case zl:
        case oc:
        case fi:
        case sc:
        case Ao:
        case cc:
        case fc:
          i = Ll;
          break;
        case Xi:
          i = Ru;
          break;
        default:
          i = ft;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== ft ? ft : i;
    }
    function vd(e, t, a) {
      if (Vn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = yc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Sc(e, t) {
      if (Vn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = yc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function hd(e, t) {
      return null;
    }
    var Jn = Ve, Bn = $r, di = Bt, Vo = Xi, jl = ft;
    function sa() {
      return jl;
    }
    function Cn(e) {
      jl = e;
    }
    function Bo(e, t) {
      var a = jl;
      try {
        return jl = e, t();
      } finally {
        jl = a;
      }
    }
    function er(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function sy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function md(e, t) {
      return e !== 0 && e < t;
    }
    function Po(e) {
      var t = pn(e);
      return md(Jn, t) ? md(Bn, t) ? Ho(t) ? di : Vo : Bn : Jn;
    }
    function En(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Fv;
    function Se(e) {
      Fv = e;
    }
    function Lu(e) {
      Fv(e);
    }
    var Yo;
    function Vv(e) {
      Yo = e;
    }
    var Bv;
    function $o(e) {
      Bv = e;
    }
    var Io;
    function yd(e) {
      Io = e;
    }
    var gd;
    function Pv(e) {
      gd = e;
    }
    var xc = !1, Mu = [], Ya = null, Wt = null, Un = null, ca = /* @__PURE__ */ new Map(), Nu = /* @__PURE__ */ new Map(), pi = [], Na = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Yv(e) {
      return Na.indexOf(e) > -1;
    }
    function $a(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function $v(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ya = null;
          break;
        case "dragenter":
        case "dragleave":
          Wt = null;
          break;
        case "mouseover":
        case "mouseout":
          Un = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ca.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nu.delete(i);
          break;
        }
      }
    }
    function zu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = $a(t, a, i, u, s);
        if (t !== null) {
          var p = $u(t);
          p !== null && Yo(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Iv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ya = zu(Ya, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Wt = zu(Wt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Un = zu(Un, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, g = v.pointerId;
          return ca.set(g, zu(ca.get(g) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = u, k = S.pointerId;
          return Nu.set(k, zu(Nu.get(k) || null, e, t, a, i, S)), !0;
        }
      }
      return !1;
    }
    function Sd(e) {
      var t = es(e.target);
      if (t !== null) {
        var a = Br(t);
        if (a !== null) {
          var i = a.tag;
          if (i === de) {
            var u = Gf(a);
            if (u !== null) {
              e.blockedOn = u, gd(e.priority, function() {
                Bv(a);
              });
              return;
            }
          } else if (i === B) {
            var s = a.stateNode;
            if (En(s)) {
              e.blockedOn = Ps(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Qv(e) {
      for (var t = Io(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < pi.length && md(t, pi[i].priority); i++)
        ;
      pi.splice(i, 0, a), i === 0 && Sd(a);
    }
    function Cc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Hl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          To(s), u.target.dispatchEvent(s), Jm();
        } else {
          var f = $u(i);
          return f !== null && Yo(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qo(e, t, a) {
      Cc(e) && a.delete(t);
    }
    function xd() {
      xc = !1, Ya !== null && Cc(Ya) && (Ya = null), Wt !== null && Cc(Wt) && (Wt = null), Un !== null && Cc(Un) && (Un = null), ca.forEach(Qo), Nu.forEach(Qo);
    }
    function tr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, xc || (xc = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, xd)));
    }
    function st(e) {
      if (Mu.length > 0) {
        tr(Mu[0], e);
        for (var t = 1; t < Mu.length; t++) {
          var a = Mu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ya !== null && tr(Ya, e), Wt !== null && tr(Wt, e), Un !== null && tr(Un, e);
      var i = function(p) {
        return tr(p, e);
      };
      ca.forEach(i), Nu.forEach(i);
      for (var u = 0; u < pi.length; u++) {
        var s = pi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; pi.length > 0; ) {
        var f = pi[0];
        if (f.blockedOn !== null)
          break;
        Sd(f), f.blockedOn === null && pi.shift();
      }
    }
    var Jt = y.ReactCurrentBatchConfig, nn = !0;
    function On(e) {
      nn = !!e;
    }
    function Ir() {
      return nn;
    }
    function Uu(e, t, a) {
      var i = ur(t), u;
      switch (i) {
        case Jn:
          u = wn;
          break;
        case Bn:
          u = Wo;
          break;
        case di:
        default:
          u = vi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function wn(e, t, a, i) {
      var u = sa(), s = Jt.transition;
      Jt.transition = null;
      try {
        Cn(Jn), vi(e, t, a, i);
      } finally {
        Cn(u), Jt.transition = s;
      }
    }
    function Wo(e, t, a, i) {
      var u = sa(), s = Jt.transition;
      Jt.transition = null;
      try {
        Cn(Bn), vi(e, t, a, i);
      } finally {
        Cn(u), Jt.transition = s;
      }
    }
    function vi(e, t, a, i) {
      nn && Ec(e, t, a, i);
    }
    function Ec(e, t, a, i) {
      var u = Hl(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Ou, a), $v(e, i);
        return;
      }
      if (Iv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if ($v(e, i), t & xl && Yv(e)) {
        for (; u !== null; ) {
          var s = $u(u);
          s !== null && Lu(s);
          var f = Hl(e, t, a, i);
          if (f === null && _y(e, t, i, Ou, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Ou = null;
    function Hl(e, t, a, i) {
      Ou = null;
      var u = js(i), s = es(u);
      if (s !== null) {
        var f = Br(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === de) {
            var v = Gf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === B) {
            var g = f.stateNode;
            if (En(g))
              return Ps(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ou = s, null;
    }
    function ur(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Jn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Bn;
        case "message": {
          var t = Kf();
          switch (t) {
            case Qs:
              return Jn;
            case Yr:
              return Bn;
            case Ba:
            case Ws:
              return di;
            case Pi:
              return Vo;
            default:
              return di;
          }
        }
        default:
          return di;
      }
    }
    function Cd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Au(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function hi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function wc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Fl = null, Ia = null, Ki = null;
    function Zi(e) {
      return Fl = e, Ia = Rc(), !0;
    }
    function Tc() {
      Fl = null, Ia = null, Ki = null;
    }
    function ju() {
      if (Ki)
        return Ki;
      var e, t = Ia, a = t.length, i, u = Rc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ki = u.slice(e, p), Ki;
    }
    function Rc() {
      return "value" in Fl ? Fl.value : Fl.textContent;
    }
    function Vl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Bl() {
      return !0;
    }
    function nr() {
      return !1;
    }
    function vn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var g = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return g ? this.isDefaultPrevented = Bl : this.isDefaultPrevented = nr, this.isPropagationStopped = nr, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Bl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Bl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Bl
      }), t;
    }
    var rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ar = vn(rr), Hu = ot({}, rr, {
      view: 0,
      detail: 0
    }), Ed = vn(Hu), Go, wd, fa;
    function Wv(e) {
      e !== fa && (fa && e.type === "mousemove" ? (Go = e.screenX - fa.screenX, wd = e.screenY - fa.screenY) : (Go = 0, wd = 0), fa = e);
    }
    var Fu = ot({}, Hu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Dc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Wv(e), Go);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : wd;
      }
    }), Ji = vn(Fu), Td = ot({}, Fu, {
      dataTransfer: 0
    }), Pl = vn(Td), Gv = ot({}, Hu, {
      relatedTarget: 0
    }), bc = vn(Gv), Rd = ot({}, rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kc = vn(Rd), cy = ot({}, rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fy = vn(cy), Xv = ot({}, rr, {
      data: 0
    }), bd = vn(Xv), Yl = bd, dy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Vu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function qv(e) {
      if (e.key) {
        var t = dy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Vl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vu[e.keyCode] || "Unidentified" : "";
    }
    var rn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function py(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = rn[e];
      return i ? !!a[i] : !1;
    }
    function Dc(e) {
      return py;
    }
    var vy = ot({}, Hu, {
      key: qv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Dc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Vl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), hy = vn(vy), Kv = ot({}, Fu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), kd = vn(Kv), my = ot({}, Hu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Dc
    }), da = vn(my), Dd = ot({}, rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), yy = vn(Dd), el = ot({}, Fu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), _c = vn(el), $l = [9, 13, 27, 32], Xo = 229, qo = sn && "CompositionEvent" in window, Il = null;
    sn && "documentMode" in document && (Il = document.documentMode);
    var gy = sn && "TextEvent" in window && !Il, Lc = sn && (!qo || Il && Il > 8 && Il <= 11), Zv = 32, _d = String.fromCharCode(Zv);
    function Jv() {
      qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), qn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), qn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), qn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ko = !1;
    function Mc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function eh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ld(e, t) {
      return e === "keydown" && t.keyCode === Xo;
    }
    function th(e, t) {
      switch (e) {
        case "keyup":
          return $l.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Xo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Md(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Nc(e) {
      return e.locale === "ko";
    }
    var mi = !1;
    function Nd(e, t, a, i, u) {
      var s, f;
      if (qo ? s = eh(t) : mi ? th(t, i) && (s = "onCompositionEnd") : Ld(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Lc && !Nc(i) && (!mi && s === "onCompositionStart" ? mi = Zi(u) : s === "onCompositionEnd" && mi && (f = ju()));
      var p = lh(a, s);
      if (p.length > 0) {
        var v = new bd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var g = Md(i);
          g !== null && (v.data = g);
        }
      }
    }
    function zc(e, t) {
      switch (e) {
        case "compositionend":
          return Md(t);
        case "keypress":
          var a = t.which;
          return a !== Zv ? null : (Ko = !0, _d);
        case "textInput":
          var i = t.data;
          return i === _d && Ko ? null : i;
        default:
          return null;
      }
    }
    function nh(e, t) {
      if (mi) {
        if (e === "compositionend" || !qo && th(e, t)) {
          var a = ju();
          return Tc(), mi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Mc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Lc && !Nc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Sy(e, t, a, i, u) {
      var s;
      if (gy ? s = zc(t, i) : s = nh(t, i), !s)
        return null;
      var f = lh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Yl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Uc(e, t, a, i, u, s, f) {
      Nd(e, t, a, i, u), Sy(e, t, a, i, u);
    }
    var xy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Bu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!xy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Cy(e) {
      if (!sn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Oc() {
      qn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Hs(i);
      var u = lh(t, "onChange");
      if (u.length > 0) {
        var s = new ar("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, js(e)), Vf(d, t);
    }
    function d(e) {
      _S(e, 0);
    }
    function h(e) {
      var t = Bc(e);
      if (Pp(t))
        return e;
    }
    function C(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    sn && (T = Cy("input") && (!document.documentMode || document.documentMode > 9));
    function F(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", Z);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", Z), r = null, l = null);
    }
    function Z(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (X(), F(t, a)) : e === "focusout" && X();
    }
    function pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function xe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Te(e, t) {
      if (e === "click")
        return h(t);
    }
    function un(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ui(e, "number", e.value);
    }
    function b(e, t, a, i, u, s, f) {
      var p = a ? Bc(a) : window, v, g;
      if (o(p) ? v = C : Bu(p) ? T ? v = un : (v = pe, g = G) : xe(p) && (v = Te), v) {
        var S = v(t, a);
        if (S) {
          n(e, S, i, u);
          return;
        }
      }
      g && g(t, p, a), t === "focusout" && L(p);
    }
    function z() {
      yr("onMouseEnter", ["mouseout", "mouseover"]), yr("onMouseLeave", ["mouseout", "mouseover"]), yr("onPointerEnter", ["pointerout", "pointerover"]), yr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function te(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Sv(i)) {
        var g = i.relatedTarget || i.fromElement;
        if (g && (es(g) || Qd(g)))
          return;
      }
      if (!(!v && !p)) {
        var S;
        if (u.window === u)
          S = u;
        else {
          var k = u.ownerDocument;
          k ? S = k.defaultView || k.parentWindow : S = window;
        }
        var R, O;
        if (v) {
          var H = i.relatedTarget || i.toElement;
          if (R = a, O = H ? es(H) : null, O !== null) {
            var P = Br(O);
            (O !== P || O.tag !== q && O.tag !== re) && (O = null);
          }
        } else
          R = null, O = a;
        if (R !== O) {
          var he = Ji, ze = "onMouseLeave", ke = "onMouseEnter", pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (he = kd, ze = "onPointerLeave", ke = "onPointerEnter", pt = "pointer");
          var ct = R == null ? S : Bc(R), M = O == null ? S : Bc(O), Y = new he(ze, pt + "leave", R, i, u);
          Y.target = ct, Y.relatedTarget = M;
          var N = null, J = es(u);
          if (J === a) {
            var me = new he(ke, pt + "enter", O, i, u);
            me.target = M, me.relatedTarget = ct, N = me;
          }
          NE(e, Y, N, R, O);
        }
      }
    }
    function be(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ce = typeof Object.is == "function" ? Object.is : be;
    function _e(e, t) {
      if (Ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!bn.call(t, s) || !Ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ye(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function An(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yt(e, t) {
      for (var a = Ye(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ri) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ye(An(a));
      }
    }
    function tl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ey(e, u, s, f, p);
    }
    function Ey(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, g = 0, S = e, k = null;
      e:
        for (; ; ) {
          for (var R = null; S === t && (a === 0 || S.nodeType === ri) && (f = s + a), S === i && (u === 0 || S.nodeType === ri) && (p = s + u), S.nodeType === ri && (s += S.nodeValue.length), (R = S.firstChild) !== null; )
            k = S, S = R;
          for (; ; ) {
            if (S === e)
              break e;
            if (k === t && ++v === a && (f = s), k === i && ++g === u && (p = s), (R = S.nextSibling) !== null)
              break;
            S = k, k = S.parentNode;
          }
          S = R;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function pE(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var g = yt(e, f), S = yt(e, p);
        if (g && S) {
          if (u.rangeCount === 1 && u.anchorNode === g.node && u.anchorOffset === g.offset && u.focusNode === S.node && u.focusOffset === S.offset)
            return;
          var k = a.createRange();
          k.setStart(g.node, g.offset), u.removeAllRanges(), f > p ? (u.addRange(k), u.extend(S.node, S.offset)) : (k.setEnd(S.node, S.offset), u.addRange(k));
        }
      }
    }
    function yS(e) {
      return e && e.nodeType === ri;
    }
    function gS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : yS(e) ? !1 : yS(t) ? gS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vE(e) {
      return e && e.ownerDocument && gS(e.ownerDocument.documentElement, e);
    }
    function hE(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function SS() {
      for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
        if (hE(t))
          e = t.contentWindow;
        else
          return t;
        t = Ts(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mE() {
      var e = SS();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? gE(e) : null
      };
    }
    function yE(e) {
      var t = SS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && vE(a)) {
        i !== null && wy(a) && SE(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Sr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function gE(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = tl(e), t || {
        start: 0,
        end: 0
      };
    }
    function SE(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : pE(e, t);
    }
    var xE = sn && "documentMode" in document && document.documentMode <= 11;
    function CE() {
      qn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ac = null, Ty = null, zd = null, Ry = !1;
    function EE(e) {
      if ("selectionStart" in e && wy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function wE(e) {
      return e.window === e ? e.document : e.nodeType === Da ? e : e.ownerDocument;
    }
    function xS(e, t, a) {
      var i = wE(a);
      if (!(Ry || Ac == null || Ac !== Ts(i))) {
        var u = EE(Ac);
        if (!zd || !_e(zd, u)) {
          zd = u;
          var s = lh(Ty, "onSelect");
          if (s.length > 0) {
            var f = new ar("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ac;
          }
        }
      }
    }
    function TE(e, t, a, i, u, s, f) {
      var p = a ? Bc(a) : window;
      switch (t) {
        case "focusin":
          (Bu(p) || p.contentEditable === "true") && (Ac = p, Ty = a, zd = null);
          break;
        case "focusout":
          Ac = null, Ty = null, zd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, xS(e, i, u);
          break;
        case "selectionchange":
          if (xE)
            break;
        case "keydown":
        case "keyup":
          xS(e, i, u);
      }
    }
    function rh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var jc = {
      animationend: rh("Animation", "AnimationEnd"),
      animationiteration: rh("Animation", "AnimationIteration"),
      animationstart: rh("Animation", "AnimationStart"),
      transitionend: rh("Transition", "TransitionEnd")
    }, by = {}, CS = {};
    sn && (CS = document.createElement("div").style, "AnimationEvent" in window || (delete jc.animationend.animation, delete jc.animationiteration.animation, delete jc.animationstart.animation), "TransitionEvent" in window || delete jc.transitionend.transition);
    function ah(e) {
      if (by[e])
        return by[e];
      if (!jc[e])
        return e;
      var t = jc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in CS)
          return by[e] = t[a];
      return e;
    }
    var ES = ah("animationend"), wS = ah("animationiteration"), TS = ah("animationstart"), RS = ah("transitionend"), bS = /* @__PURE__ */ new Map(), kS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Pu(e, t) {
      bS.set(e, t), qn(t, [e]);
    }
    function RE() {
      for (var e = 0; e < kS.length; e++) {
        var t = kS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Pu(a, "on" + i);
      }
      Pu(ES, "onAnimationEnd"), Pu(wS, "onAnimationIteration"), Pu(TS, "onAnimationStart"), Pu("dblclick", "onDoubleClick"), Pu("focusin", "onFocus"), Pu("focusout", "onBlur"), Pu(RS, "onTransitionEnd");
    }
    function bE(e, t, a, i, u, s, f) {
      var p = bS.get(t);
      if (p !== void 0) {
        var v = ar, g = t;
        switch (t) {
          case "keypress":
            if (Vl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = hy;
            break;
          case "focusin":
            g = "focus", v = bc;
            break;
          case "focusout":
            g = "blur", v = bc;
            break;
          case "beforeblur":
          case "afterblur":
            v = bc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ji;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Pl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = da;
            break;
          case ES:
          case wS:
          case TS:
            v = kc;
            break;
          case RS:
            v = yy;
            break;
          case "scroll":
            v = Ed;
            break;
          case "wheel":
            v = _c;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = fy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = kd;
            break;
        }
        var S = (s & xl) !== 0;
        {
          var k = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", R = LE(a, p, i.type, S, k);
          if (R.length > 0) {
            var O = new v(p, g, null, i, u);
            e.push({
              event: O,
              listeners: R
            });
          }
        }
      }
    }
    RE(), z(), Oc(), CE(), Jv();
    function kE(e, t, a, i, u, s, f) {
      bE(e, t, a, i, u, s);
      var p = (s & Zm) === 0;
      p && (te(e, t, a, i, u), b(e, t, a, i, u), TE(e, t, a, i, u), Uc(e, t, a, i, u));
    }
    var Ud = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Ud));
    function DS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ui(i, t, void 0, e), e.currentTarget = null;
    }
    function DE(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          DS(e, v, p), i = f;
        }
      else
        for (var g = 0; g < t.length; g++) {
          var S = t[g], k = S.instance, R = S.currentTarget, O = S.listener;
          if (k !== i && e.isPropagationStopped())
            return;
          DS(e, O, R), i = k;
        }
    }
    function _S(e, t) {
      for (var a = (t & xl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        DE(s, f, a);
      }
      $f();
    }
    function _E(e, t, a, i, u) {
      var s = js(a), f = [];
      kE(f, e, i, a, s, t), _S(f, t);
    }
    function en(e, t) {
      ky.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = iT(t), u = zE(e, a);
      i.has(u) || (LS(t, e, Eo, a), i.add(u));
    }
    function Dy(e, t, a) {
      ky.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= xl), LS(a, e, i, t);
    }
    var ih = "_reactListening" + Math.random().toString(36).slice(2);
    function Od(e) {
      if (!e[ih]) {
        e[ih] = !0, mn.forEach(function(a) {
          a !== "selectionchange" && (ky.has(a) || Dy(a, !1, e), Dy(a, !0, e));
        });
        var t = e.nodeType === Da ? e : e.ownerDocument;
        t !== null && (t[ih] || (t[ih] = !0, Dy("selectionchange", !1, t)));
      }
    }
    function LS(e, t, a, i, u) {
      var s = Uu(e, t, a), f = void 0;
      ko && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? hi(e, t, s, f) : Au(e, t, s) : f !== void 0 ? wc(e, t, s, f) : Cd(e, t, s);
    }
    function MS(e, t) {
      return e === t || e.nodeType === dn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & ii) && !(t & Eo)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === B || v === W) {
                var g = p.stateNode.containerInfo;
                if (MS(g, f))
                  break;
                if (v === W)
                  for (var S = p.return; S !== null; ) {
                    var k = S.tag;
                    if (k === B || k === W) {
                      var R = S.stateNode.containerInfo;
                      if (MS(R, f))
                        return;
                    }
                    S = S.return;
                  }
                for (; g !== null; ) {
                  var O = es(g);
                  if (O === null)
                    return;
                  var H = O.tag;
                  if (H === q || H === re) {
                    p = s = O;
                    continue e;
                  }
                  g = g.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Vf(function() {
        return _E(e, t, a, s);
      });
    }
    function Ad(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function LE(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], g = e, S = null; g !== null; ) {
        var k = g, R = k.stateNode, O = k.tag;
        if (O === q && R !== null && (S = R, p !== null)) {
          var H = El(g, p);
          H != null && v.push(Ad(g, H, S));
        }
        if (u)
          break;
        g = g.return;
      }
      return v;
    }
    function lh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === q && f !== null) {
          var v = f, g = El(u, a);
          g != null && i.unshift(Ad(u, g, v));
          var S = El(u, t);
          S != null && i.push(Ad(u, S, v));
        }
        u = u.return;
      }
      return i;
    }
    function Hc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function ME(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Hc(s))
        u++;
      for (var f = 0, p = i; p; p = Hc(p))
        f++;
      for (; u - f > 0; )
        a = Hc(a), u--;
      for (; f - u > 0; )
        i = Hc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Hc(a), i = Hc(i);
      }
      return null;
    }
    function NS(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, g = v.alternate, S = v.stateNode, k = v.tag;
        if (g !== null && g === i)
          break;
        if (k === q && S !== null) {
          var R = S;
          if (u) {
            var O = El(p, s);
            O != null && f.unshift(Ad(p, O, R));
          } else if (!u) {
            var H = El(p, s);
            H != null && f.push(Ad(p, H, R));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function NE(e, t, a, i, u) {
      var s = i && u ? ME(i, u) : null;
      i !== null && NS(e, t, i, s, !1), u !== null && a !== null && NS(e, a, u, s, !0);
    }
    function zE(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var pa = !1, jd = "dangerouslySetInnerHTML", uh = "suppressContentEditableWarning", Yu = "suppressHydrationWarning", zS = "autoFocus", Zo = "children", Jo = "style", oh = "__html", Ly, sh, Hd, US, ch, OS, AS;
    Ly = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, sh = function(e, t) {
      As(e, t), Of(e, t), gv(e, t, {
        registrationNameDependencies: Hn,
        possibleRegistrationNames: zr
      });
    }, OS = sn && !document.documentMode, Hd = function(e, t, a) {
      if (!pa) {
        var i = fh(a), u = fh(t);
        u !== i && (pa = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, US = function(e) {
      if (!pa) {
        pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, ch = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, AS = function(e, t) {
      var a = e.namespaceURI === ni ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var UE = /\r\n?/g, OE = /\u0000|\uFFFD/g;
    function fh(e) {
      Ca(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(UE, `
`).replace(OE, "");
    }
    function dh(e, t, a, i) {
      var u = fh(t), s = fh(e);
      if (s !== u && (i && (pa || (pa = !0, m('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ut))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function jS(e) {
      return e.nodeType === Da ? e : e.ownerDocument;
    }
    function AE() {
    }
    function ph(e) {
      e.onclick = AE;
    }
    function jE(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Jo)
            f && Object.freeze(f), ov(t, f);
          else if (s === jd) {
            var p = f ? f[oh] : void 0;
            p != null && Kp(t, p);
          } else if (s === Zo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Ns(t, f);
            } else
              typeof f == "number" && Ns(t, "" + f);
          else
            s === uh || s === Yu || s === zS || (Hn.hasOwnProperty(s) ? f != null && (typeof f != "function" && ch(s, f), s === "onScroll" && en("scroll", t)) : f != null && Ha(t, s, f, u));
        }
    }
    function HE(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Jo ? ov(e, f) : s === jd ? Kp(e, f) : s === Zo ? Ns(e, f) : Ha(e, s, f, i);
      }
    }
    function FE(e, t, a, i) {
      var u, s = jS(a), f, p = i;
      if (p === ni && (p = Ls(e)), p === ni) {
        if (u = ai(e, t), !u && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var g = v.firstChild;
          f = v.removeChild(g);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var S = f;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === ni && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !bn.call(Ly, e) && (Ly[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function VE(e, t) {
      return jS(t).createTextNode(e);
    }
    function BE(e, t, a, i) {
      var u = ai(t, a);
      sh(t, a);
      var s;
      switch (t) {
        case "dialog":
          en("cancel", e), en("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          en("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Ud.length; f++)
            en(Ud[f], e);
          s = a;
          break;
        case "source":
          en("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          en("error", e), en("load", e), s = a;
          break;
        case "details":
          en("toggle", e), s = a;
          break;
        case "input":
          mo(e, a), s = ho(e, a), en("invalid", e);
          break;
        case "option":
          Ds(e, a), s = a;
          break;
        case "select":
          Wp(e, a), s = Tf(e, a), en("invalid", e);
          break;
        case "textarea":
          Gp(e, a), s = bf(e, a), en("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Us(t, s), jE(t, e, i, s, u), t) {
        case "input":
          yl(e), yo(e, a, !1);
          break;
        case "textarea":
          yl(e), qp(e);
          break;
        case "option":
          wf(e, a);
          break;
        case "select":
          Bm(e, a);
          break;
        default:
          typeof s.onClick == "function" && ph(e);
          break;
      }
    }
    function PE(e, t, a, i, u) {
      sh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ho(e, a), p = ho(e, i), s = [];
          break;
        case "select":
          f = Tf(e, a), p = Tf(e, i), s = [];
          break;
        case "textarea":
          f = bf(e, a), p = bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ph(e);
          break;
      }
      Us(t, p);
      var v, g, S = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Jo) {
            var k = f[v];
            for (g in k)
              k.hasOwnProperty(g) && (S || (S = {}), S[g] = "");
          } else
            v === jd || v === Zo || v === uh || v === Yu || v === zS || (Hn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var R = p[v], O = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || R === O || R == null && O == null))
          if (v === Jo)
            if (R && Object.freeze(R), O) {
              for (g in O)
                O.hasOwnProperty(g) && (!R || !R.hasOwnProperty(g)) && (S || (S = {}), S[g] = "");
              for (g in R)
                R.hasOwnProperty(g) && O[g] !== R[g] && (S || (S = {}), S[g] = R[g]);
            } else
              S || (s || (s = []), s.push(v, S)), S = R;
          else if (v === jd) {
            var H = R ? R[oh] : void 0, P = O ? O[oh] : void 0;
            H != null && P !== H && (s = s || []).push(v, H);
          } else
            v === Zo ? (typeof R == "string" || typeof R == "number") && (s = s || []).push(v, "" + R) : v === uh || v === Yu || (Hn.hasOwnProperty(v) ? (R != null && (typeof R != "function" && ch(v, R), v === "onScroll" && en("scroll", e)), !s && O !== R && (s = [])) : (s = s || []).push(v, R));
      }
      return S && (xo(S, p[Jo]), (s = s || []).push(Jo, S)), s;
    }
    function YE(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Ef(e, u);
      var s = ai(a, i), f = ai(a, u);
      switch (HE(e, t, s, f), a) {
        case "input":
          fu(e, u);
          break;
        case "textarea":
          Xp(e, u);
          break;
        case "select":
          Pm(e, u);
          break;
      }
    }
    function $E(e) {
      {
        var t = e.toLowerCase();
        return Os.hasOwnProperty(t) && Os[t] || null;
      }
    }
    function IE(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ai(t, a), sh(t, a), t) {
        case "dialog":
          en("cancel", e), en("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          en("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < Ud.length; g++)
            en(Ud[g], e);
          break;
        case "source":
          en("error", e);
          break;
        case "img":
        case "image":
        case "link":
          en("error", e), en("load", e);
          break;
        case "details":
          en("toggle", e);
          break;
        case "input":
          mo(e, a), en("invalid", e);
          break;
        case "option":
          Ds(e, a);
          break;
        case "select":
          Wp(e, a), en("invalid", e);
          break;
        case "textarea":
          Gp(e, a), en("invalid", e);
          break;
      }
      Us(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var S = e.attributes, k = 0; k < S.length; k++) {
          var R = S[k].name.toLowerCase();
          switch (R) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(S[k].name);
          }
        }
      }
      var O = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var P = a[H];
          if (H === Zo)
            typeof P == "string" ? e.textContent !== P && (a[Yu] !== !0 && dh(e.textContent, P, s, f), O = [Zo, P]) : typeof P == "number" && e.textContent !== "" + P && (a[Yu] !== !0 && dh(e.textContent, P, s, f), O = [Zo, "" + P]);
          else if (Hn.hasOwnProperty(H))
            P != null && (typeof P != "function" && ch(H, P), H === "onScroll" && en("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var he = void 0, ze = p && Yt ? null : jr(H);
            if (a[Yu] !== !0) {
              if (!(H === uh || H === Yu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === jd) {
                  var ke = e.innerHTML, pt = P ? P[oh] : void 0;
                  if (pt != null) {
                    var ct = AS(e, pt);
                    ct !== ke && Hd(H, ke, ct);
                  }
                } else if (H === Jo) {
                  if (v.delete(H), OS) {
                    var M = qm(P);
                    he = e.getAttribute("style"), M !== he && Hd(H, he, M);
                  }
                } else if (p && !Yt)
                  v.delete(H.toLowerCase()), he = uu(e, H, P), P !== he && Hd(H, he, P);
                else if (!an(H, ze, p) && !Ot(H, P, ze, p)) {
                  var Y = !1;
                  if (ze !== null)
                    v.delete(ze.attributeName), he = vl(e, H, P, ze);
                  else {
                    var N = i;
                    if (N === ni && (N = Ls(t)), N === ni)
                      v.delete(H.toLowerCase());
                    else {
                      var J = $E(H);
                      J !== null && J !== H && (Y = !0, v.delete(J)), v.delete(H);
                    }
                    he = uu(e, H, P);
                  }
                  var me = Yt;
                  !me && P !== he && !Y && Hd(H, he, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Yu] !== !0 && US(v), t) {
        case "input":
          yl(e), yo(e, a, !0);
          break;
        case "textarea":
          yl(e), qp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ph(e);
          break;
      }
      return O;
    }
    function QE(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function My(e, t) {
      {
        if (pa)
          return;
        pa = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (pa)
          return;
        pa = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (pa)
          return;
        pa = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (t === "" || pa)
          return;
        pa = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function WE(e, t, a) {
      switch (t) {
        case "input":
          Yp(e, a);
          return;
        case "textarea":
          kf(e, a);
          return;
        case "select":
          Ym(e, a);
          return;
      }
    }
    var Fd = function() {
    }, Vd = function() {
    };
    {
      var GE = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], XE = HS.concat(["button"]), qE = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Vd = function(e, t) {
        var a = ot({}, e || FS), i = {
          tag: t
        };
        return HS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), XE.indexOf(t) !== -1 && (a.pTagInButtonScope = null), GE.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var KE = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return qE.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, ZE = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, VS = {};
      Fd = function(e, t, a) {
        a = a || FS;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = KE(e, u) ? null : i, f = s ? null : ZE(e, a), p = s || f;
        if (p) {
          var v = p.tag, g = !!s + "|" + e + "|" + v;
          if (!VS[g]) {
            VS[g] = !0;
            var S = e, k = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", k = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var R = "";
              v === "table" && e === "tr" && (R += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, k, R);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var vh = "suppressHydrationWarning", hh = "$", mh = "/$", Bd = "$?", Pd = "$!", JE = "style", Oy = null, Ay = null;
    function ew(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Da:
        case gl: {
          t = i === Da ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : _f(null, "");
          break;
        }
        default: {
          var s = i === dn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = _f(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Vd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function tw(e, t, a) {
      {
        var i = e, u = _f(i.namespace, t), s = Vd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function kD(e) {
      return e;
    }
    function nw(e) {
      Oy = Ir(), Ay = mE();
      var t = null;
      return On(!1), t;
    }
    function rw(e) {
      yE(Ay), On(Oy), Oy = null, Ay = null;
    }
    function aw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Fd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Vd(f.ancestorInfo, e);
          Fd(null, p, v);
        }
        s = f.namespace;
      }
      var g = FE(e, t, a, s);
      return Id(u, g), $y(g, t), g;
    }
    function iw(e, t) {
      e.appendChild(t);
    }
    function lw(e, t, a, i, u) {
      switch (BE(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function uw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Vd(f.ancestorInfo, t);
          Fd(null, p, v);
        }
      }
      return PE(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ow(e, t, a, i) {
      {
        var u = a;
        Fd(null, e, u.ancestorInfo);
      }
      var s = VE(e, t);
      return Id(i, s), s;
    }
    function sw() {
      var e = window.event;
      return e === void 0 ? di : ur(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, cw = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, BS = typeof Promise == "function" ? Promise : void 0, fw = typeof queueMicrotask == "function" ? queueMicrotask : typeof BS < "u" ? function(e) {
      return BS.resolve(null).then(e).catch(dw);
    } : Hy;
    function dw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vw(e, t, a, i, u, s) {
      YE(e, t, a, i, u), $y(e, u);
    }
    function PS(e) {
      Ns(e, "");
    }
    function hw(e, t, a) {
      e.nodeValue = a;
    }
    function mw(e, t) {
      e.appendChild(t);
    }
    function yw(e, t) {
      var a;
      e.nodeType === dn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && ph(a);
    }
    function gw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Sw(e, t, a) {
      e.nodeType === dn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function xw(e, t) {
      e.removeChild(t);
    }
    function Cw(e, t) {
      e.nodeType === dn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === dn) {
          var s = u.data;
          if (s === mh)
            if (i === 0) {
              e.removeChild(u), st(t);
              return;
            } else
              i--;
          else
            (s === hh || s === Bd || s === Pd) && i++;
        }
        a = u;
      } while (a);
      st(t);
    }
    function Ew(e, t) {
      e.nodeType === dn ? Vy(e.parentNode, t) : e.nodeType === Sr && Vy(e, t), st(e);
    }
    function ww(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Tw(e) {
      e.nodeValue = "";
    }
    function Rw(e, t) {
      e = e;
      var a = t[JE], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = zs("display", i);
    }
    function bw(e, t) {
      e.nodeValue = t;
    }
    function kw(e) {
      e.nodeType === Sr ? e.textContent = "" : e.nodeType === Da && e.documentElement && e.removeChild(e.documentElement);
    }
    function Dw(e, t, a) {
      return e.nodeType !== Sr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _w(e, t) {
      return t === "" || e.nodeType !== ri ? null : e;
    }
    function Lw(e) {
      return e.nodeType !== dn ? null : e;
    }
    function YS(e) {
      return e.data === Bd;
    }
    function By(e) {
      return e.data === Pd;
    }
    function Mw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Nw(e, t) {
      e._reactRetry = t;
    }
    function yh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Sr || t === ri)
          break;
        if (t === dn) {
          var a = e.data;
          if (a === hh || a === Pd || a === Bd)
            break;
          if (a === mh)
            return null;
        }
      }
      return e;
    }
    function Yd(e) {
      return yh(e.nextSibling);
    }
    function zw(e) {
      return yh(e.firstChild);
    }
    function Uw(e) {
      return yh(e.firstChild);
    }
    function Ow(e) {
      return yh(e.nextSibling);
    }
    function Aw(e, t, a, i, u, s, f) {
      Id(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var g = (s.mode & lt) !== Ae;
      return IE(e, t, a, p, i, g, f);
    }
    function jw(e, t, a, i) {
      return Id(a, e), a.mode & lt, QE(e, t);
    }
    function Hw(e, t) {
      Id(t, e);
    }
    function Fw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === dn) {
          var i = t.data;
          if (i === mh) {
            if (a === 0)
              return Yd(t);
            a--;
          } else
            (i === hh || i === Pd || i === Bd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $S(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === dn) {
          var i = t.data;
          if (i === hh || i === Pd || i === Bd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === mh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Vw(e) {
      st(e);
    }
    function Bw(e) {
      st(e);
    }
    function Pw(e) {
      return e !== "head" && e !== "body";
    }
    function Yw(e, t, a, i) {
      var u = !0;
      dh(t.nodeValue, a, i, u);
    }
    function $w(e, t, a, i, u, s) {
      if (t[vh] !== !0) {
        var f = !0;
        dh(i.nodeValue, u, s, f);
      }
    }
    function Iw(e, t) {
      t.nodeType === Sr ? My(e, t) : t.nodeType === dn || Ny(e, t);
    }
    function Qw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Sr ? My(a, t) : t.nodeType === dn || Ny(a, t));
      }
    }
    function Ww(e, t, a, i, u) {
      (u || t[vh] !== !0) && (i.nodeType === Sr ? My(a, i) : i.nodeType === dn || Ny(a, i));
    }
    function Gw(e, t, a) {
      zy(e, t);
    }
    function Xw(e, t) {
      Uy(e, t);
    }
    function qw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function Kw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Uy(a, t);
      }
    }
    function Zw(e, t, a, i, u, s) {
      (s || t[vh] !== !0) && zy(a, i);
    }
    function Jw(e, t, a, i, u) {
      (u || t[vh] !== !0) && Uy(a, i);
    }
    function eT(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tT(e) {
      Od(e);
    }
    var Fc = Math.random().toString(36).slice(2), Vc = "__reactFiber$" + Fc, Py = "__reactProps$" + Fc, $d = "__reactContainer$" + Fc, Yy = "__reactEvents$" + Fc, nT = "__reactListeners$" + Fc, rT = "__reactHandles$" + Fc;
    function aT(e) {
      delete e[Vc], delete e[Py], delete e[Yy], delete e[nT], delete e[rT];
    }
    function Id(e, t) {
      t[Vc] = e;
    }
    function gh(e, t) {
      t[$d] = e;
    }
    function IS(e) {
      e[$d] = null;
    }
    function Qd(e) {
      return !!e[$d];
    }
    function es(e) {
      var t = e[Vc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[$d] || a[Vc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = $S(e); u !== null; ) {
              var s = u[Vc];
              if (s)
                return s;
              u = $S(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function $u(e) {
      var t = e[Vc] || e[$d];
      return t && (t.tag === q || t.tag === re || t.tag === de || t.tag === B) ? t : null;
    }
    function Bc(e) {
      if (e.tag === q || e.tag === re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Sh(e) {
      return e[Py] || null;
    }
    function $y(e, t) {
      e[Py] = t;
    }
    function iT(e) {
      var t = e[Yy];
      return t === void 0 && (t = e[Yy] = /* @__PURE__ */ new Set()), t;
    }
    var QS = {}, WS = y.ReactDebugCurrentFrame;
    function xh(e) {
      if (e) {
        var t = e._owner, a = oo(e.type, e._source, t ? t.type : null);
        WS.setExtraStackFrame(a);
      } else
        WS.setExtraStackFrame(null);
    }
    function yi(e, t, a, i, u) {
      {
        var s = Function.call.bind(bn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              p = g;
            }
            p && !(p instanceof Error) && (xh(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), xh(null)), p instanceof Error && !(p.message in QS) && (QS[p.message] = !0, xh(u), m("Failed %s type: %s", a, p.message), xh(null));
          }
      }
    }
    var Iy = [], Ch;
    Ch = [];
    var Ql = -1;
    function Iu(e) {
      return {
        current: e
      };
    }
    function Dr(e, t) {
      if (Ql < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Ch[Ql] && m("Unexpected Fiber popped."), e.current = Iy[Ql], Iy[Ql] = null, Ch[Ql] = null, Ql--;
    }
    function _r(e, t, a) {
      Ql++, Iy[Ql] = e.current, Ch[Ql] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var za = {};
    Object.freeze(za);
    var Wl = Iu(za), nl = Iu(!1), Wy = za;
    function Pc(e, t, a) {
      return a && rl(t) ? Wy : Wl.current;
    }
    function GS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Yc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return za;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ge(e) || "Unknown";
          yi(i, s, "context", p);
        }
        return u && GS(e, t, s), s;
      }
    }
    function Eh() {
      return nl.current;
    }
    function rl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function wh(e) {
      Dr(nl, e), Dr(Wl, e);
    }
    function Gy(e) {
      Dr(nl, e), Dr(Wl, e);
    }
    function XS(e, t, a) {
      {
        if (Wl.current !== za)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        _r(Wl, t, e), _r(nl, a, e);
      }
    }
    function qS(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ge(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ge(e) || "Unknown";
          yi(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || za;
        return Wy = Wl.current, _r(Wl, a, e), _r(nl, nl.current, e), !0;
      }
    }
    function KS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = qS(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, Dr(nl, e), Dr(Wl, e), _r(Wl, u, e), _r(nl, a, e);
        } else
          Dr(nl, e), _r(nl, a, e);
      }
    }
    function lT(e) {
      {
        if (!Xf(e) || e.tag !== $)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case B:
              return t.stateNode.context;
            case $: {
              var a = t.type;
              if (rl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, Rh = 1, Gl = null, Xy = !1, qy = !1;
    function ZS(e) {
      Gl === null ? Gl = [e] : Gl.push(e);
    }
    function uT(e) {
      Xy = !0, ZS(e);
    }
    function JS() {
      Xy && Wu();
    }
    function Wu() {
      if (!qy && Gl !== null) {
        qy = !0;
        var e = 0, t = sa();
        try {
          var a = !0, i = Gl;
          for (Cn(Jn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Gl = null, Xy = !1;
        } catch (s) {
          throw Gl !== null && (Gl = Gl.slice(e + 1)), $s(Qs, Wu), s;
        } finally {
          Cn(t), qy = !1;
        }
      }
      return null;
    }
    var $c = [], Ic = 0, bh = null, kh = 0, Qa = [], Wa = 0, ts = null, Xl = 1, ql = "";
    function oT(e) {
      return rs(), (e.flags & Qf) !== Me;
    }
    function sT(e) {
      return rs(), kh;
    }
    function cT() {
      var e = ql, t = Xl, a = t & ~fT(t);
      return a.toString(32) + e;
    }
    function ns(e, t) {
      rs(), $c[Ic++] = kh, $c[Ic++] = bh, bh = e, kh = t;
    }
    function e1(e, t, a) {
      rs(), Qa[Wa++] = Xl, Qa[Wa++] = ql, Qa[Wa++] = ts, ts = e;
      var i = Xl, u = ql, s = Dh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Dh(t) + s;
      if (v > 30) {
        var g = s - s % 5, S = (1 << g) - 1, k = (f & S).toString(32), R = f >> g, O = s - g, H = Dh(t) + O, P = p << O, he = P | R, ze = k + u;
        Xl = 1 << H | he, ql = ze;
      } else {
        var ke = p << s, pt = ke | f, ct = u;
        Xl = 1 << v | pt, ql = ct;
      }
    }
    function Ky(e) {
      rs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ns(e, a), e1(e, a, i);
      }
    }
    function Dh(e) {
      return 32 - Zs(e);
    }
    function fT(e) {
      return 1 << Dh(e) - 1;
    }
    function Zy(e) {
      for (; e === bh; )
        bh = $c[--Ic], $c[Ic] = null, kh = $c[--Ic], $c[Ic] = null;
      for (; e === ts; )
        ts = Qa[--Wa], Qa[Wa] = null, ql = Qa[--Wa], Qa[Wa] = null, Xl = Qa[--Wa], Qa[Wa] = null;
    }
    function dT() {
      return rs(), ts !== null ? {
        id: Xl,
        overflow: ql
      } : null;
    }
    function pT(e, t) {
      rs(), Qa[Wa++] = Xl, Qa[Wa++] = ql, Qa[Wa++] = ts, Xl = t.id, ql = t.overflow, ts = e;
    }
    function rs() {
      sr() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var or = null, Ga = null, gi = !1, as = !1, Gu = null;
    function vT() {
      gi && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function t1() {
      as = !0;
    }
    function hT() {
      return as;
    }
    function mT(e) {
      var t = e.stateNode.containerInfo;
      return Ga = Uw(t), or = e, gi = !0, Gu = null, as = !1, !0;
    }
    function yT(e, t, a) {
      return Ga = Ow(t), or = e, gi = !0, Gu = null, as = !1, a !== null && pT(e, a), !0;
    }
    function n1(e, t) {
      switch (e.tag) {
        case B: {
          Iw(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & lt) !== Ae;
          Ww(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case de: {
          var i = e.memoizedState;
          i.dehydrated !== null && Qw(i.dehydrated, t);
          break;
        }
      }
    }
    function r1(e, t) {
      n1(e, t);
      var a = xk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ct) : i.push(a);
    }
    function Jy(e, t) {
      {
        if (as)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, Gw(a, i);
                break;
              case re:
                var u = t.pendingProps;
                Xw(a, u);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case q: {
                var v = t.type, g = t.pendingProps, S = (e.mode & lt) !== Ae;
                Zw(
                  s,
                  f,
                  p,
                  v,
                  g,
                  // TODO: Delete this argument when we remove the legacy root API.
                  S
                );
                break;
              }
              case re: {
                var k = t.pendingProps, R = (e.mode & lt) !== Ae;
                Jw(
                  s,
                  f,
                  p,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
            }
            break;
          }
          case de: {
            var O = e.memoizedState, H = O.dehydrated;
            if (H !== null)
              switch (t.tag) {
                case q:
                  var P = t.type;
                  t.pendingProps, qw(H, P);
                  break;
                case re:
                  var he = t.pendingProps;
                  Kw(H, he);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function a1(e, t) {
      t.flags = t.flags & ~aa | Ht, Jy(e, t);
    }
    function i1(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = Dw(t, a);
          return i !== null ? (e.stateNode = i, or = e, Ga = zw(i), !0) : !1;
        }
        case re: {
          var u = e.pendingProps, s = _w(t, u);
          return s !== null ? (e.stateNode = s, or = e, Ga = null, !0) : !1;
        }
        case de: {
          var f = Lw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: dT(),
              retryLane: br
            };
            e.memoizedState = p;
            var v = Ck(f);
            return v.return = e, e.child = v, or = e, Ga = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & lt) !== Ae && (e.flags & Pe) === Me;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (gi) {
        var t = Ga;
        if (!t) {
          eg(e) && (Jy(or, e), tg()), a1(or, e), gi = !1, or = e;
          return;
        }
        var a = t;
        if (!i1(e, t)) {
          eg(e) && (Jy(or, e), tg()), t = Yd(a);
          var i = or;
          if (!t || !i1(e, t)) {
            a1(or, e), gi = !1, or = e;
            return;
          }
          r1(i, a);
        }
      }
    }
    function gT(e, t, a) {
      var i = e.stateNode, u = !as, s = Aw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function ST(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jw(t, a, e);
      if (i) {
        var u = or;
        if (u !== null)
          switch (u.tag) {
            case B: {
              var s = u.stateNode.containerInfo, f = (u.mode & lt) !== Ae;
              Yw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case q: {
              var p = u.type, v = u.memoizedProps, g = u.stateNode, S = (u.mode & lt) !== Ae;
              $w(
                p,
                v,
                g,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                S
              );
              break;
            }
          }
      }
      return i;
    }
    function xT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Hw(a, e);
    }
    function CT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Fw(a);
    }
    function l1(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== B && t.tag !== de; )
        t = t.return;
      or = t;
    }
    function _h(e) {
      if (e !== or)
        return !1;
      if (!gi)
        return l1(e), gi = !0, !1;
      if (e.tag !== B && (e.tag !== q || Pw(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = Ga;
        if (t)
          if (eg(e))
            u1(e), tg();
          else
            for (; t; )
              r1(e, t), t = Yd(t);
      }
      return l1(e), e.tag === de ? Ga = CT(e) : Ga = or ? Yd(e.stateNode) : null, !0;
    }
    function ET() {
      return gi && Ga !== null;
    }
    function u1(e) {
      for (var t = Ga; t; )
        n1(e, t), t = Yd(t);
    }
    function Qc() {
      or = null, Ga = null, gi = !1, as = !1;
    }
    function o1() {
      Gu !== null && (nC(Gu), Gu = null);
    }
    function sr() {
      return gi;
    }
    function rg(e) {
      Gu === null ? Gu = [e] : Gu.push(e);
    }
    var wT = y.ReactCurrentBatchConfig, TT = null;
    function RT() {
      return wT.transition;
    }
    var Si = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var bT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Zt && (t = a), a = a.return;
        return t;
      }, is = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Wd = [], Gd = [], Xd = [], qd = [], Kd = [], Zd = [], ls = /* @__PURE__ */ new Set();
      Si.recordUnsafeLifecycleWarnings = function(e, t) {
        ls.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Wd.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillMount == "function" && Gd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Xd.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillReceiveProps == "function" && qd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Kd.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillUpdate == "function" && Zd.push(e));
      }, Si.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Wd.length > 0 && (Wd.forEach(function(R) {
          e.add(Ge(R) || "Component"), ls.add(R.type);
        }), Wd = []);
        var t = /* @__PURE__ */ new Set();
        Gd.length > 0 && (Gd.forEach(function(R) {
          t.add(Ge(R) || "Component"), ls.add(R.type);
        }), Gd = []);
        var a = /* @__PURE__ */ new Set();
        Xd.length > 0 && (Xd.forEach(function(R) {
          a.add(Ge(R) || "Component"), ls.add(R.type);
        }), Xd = []);
        var i = /* @__PURE__ */ new Set();
        qd.length > 0 && (qd.forEach(function(R) {
          i.add(Ge(R) || "Component"), ls.add(R.type);
        }), qd = []);
        var u = /* @__PURE__ */ new Set();
        Kd.length > 0 && (Kd.forEach(function(R) {
          u.add(Ge(R) || "Component"), ls.add(R.type);
        }), Kd = []);
        var s = /* @__PURE__ */ new Set();
        if (Zd.length > 0 && (Zd.forEach(function(R) {
          s.add(Ge(R) || "Component"), ls.add(R.type);
        }), Zd = []), t.size > 0) {
          var f = is(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = is(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = is(s);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var g = is(e);
          j(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (a.size > 0) {
          var S = is(a);
          j(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (u.size > 0) {
          var k = is(u);
          j(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
      };
      var Lh = /* @__PURE__ */ new Map(), s1 = /* @__PURE__ */ new Set();
      Si.recordLegacyContextWarning = function(e, t) {
        var a = bT(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!s1.has(e.type)) {
          var i = Lh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Lh.set(a, i)), i.push(e));
        }
      }, Si.flushLegacyContextWarning = function() {
        Lh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ge(s) || "Component"), s1.add(s.type);
            });
            var u = is(i);
            try {
              kt(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              gn();
            }
          }
        });
      }, Si.discardPendingWarnings = function() {
        Wd = [], Gd = [], Xd = [], qd = [], Kd = [], Zd = [], Lh = /* @__PURE__ */ new Map();
      };
    }
    function xi(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var ag = Iu(null), ig;
    ig = {};
    var Mh = null, Wc = null, lg = null, Nh = !1;
    function zh() {
      Mh = null, Wc = null, lg = null, Nh = !1;
    }
    function c1() {
      Nh = !0;
    }
    function f1() {
      Nh = !1;
    }
    function d1(e, t, a) {
      _r(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      Dr(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ol(i.childLanes, t) ? u !== null && !Ol(u.childLanes, t) && (u.childLanes = Ze(u.childLanes, t)) : (i.childLanes = Ze(i.childLanes, t), u !== null && (u.childLanes = Ze(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kT(e, t, a) {
      DT(e, t, a);
    }
    function DT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === $) {
                var p = xn(a), v = Kl(zt, p);
                v.tag = Oh;
                var g = i.updateQueue;
                if (g !== null) {
                  var S = g.shared, k = S.pending;
                  k === null ? v.next = v : (v.next = k.next, k.next = v), S.pending = v;
                }
              }
              i.lanes = Ze(i.lanes, a);
              var R = i.alternate;
              R !== null && (R.lanes = Ze(R.lanes, a)), og(i.return, a, e), s.lanes = Ze(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ge)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Xe) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Ze(O.lanes, a);
          var H = O.alternate;
          H !== null && (H.lanes = Ze(H.lanes, a)), og(O, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Gc(e, t) {
      Mh = e, Wc = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (kr(a.lanes, t) && dp(), a.firstContext = null);
      }
    }
    function jn(e) {
      Nh && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Wc === null) {
          if (Mh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Wc = a, Mh.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          Wc = Wc.next = a;
      }
      return t;
    }
    var us = null;
    function sg(e) {
      us === null ? us = [e] : us.push(e);
    }
    function _T() {
      if (us !== null) {
        for (var e = 0; e < us.length; e++) {
          var t = us[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        us = null;
      }
    }
    function p1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function LT(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function MT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function va(e, t) {
      return Uh(e, t);
    }
    var NT = Uh;
    function Uh(e, t) {
      e.lanes = Ze(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ze(a.lanes, t)), a === null && (e.flags & (Ht | aa)) !== Me && vC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ze(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ze(a.childLanes, t) : (u.flags & (Ht | aa)) !== Me && vC(e), i = u, u = u.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var v1 = 0, h1 = 1, Oh = 2, cg = 3, Ah = !1, fg, jh;
    fg = !1, jh = null;
    function dg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function m1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Kl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: v1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Xu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (jh === u && !fg && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), Nb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, NT(e, a);
      } else
        return MT(e, u, t, a);
    }
    function Hh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (od(a)) {
          var s = u.lanes;
          s = cd(s, e.pendingLanes);
          var f = Ze(s, a);
          u.lanes = f, _u(e, f);
        }
      }
    }
    function pg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var g = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = g : (f.next = g, f = g), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var S = a.lastBaseUpdate;
      S === null ? a.firstBaseUpdate = t : S.next = t, a.lastBaseUpdate = t;
    }
    function zT(e, t, a, i, u, s) {
      switch (a.tag) {
        case h1: {
          var f = a.payload;
          if (typeof f == "function") {
            c1();
            var p = f.call(s, i, u);
            {
              if (e.mode & Zt) {
                Sn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Sn(!1);
                }
              }
              f1();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & ~Nn | Pe;
        case v1: {
          var v = a.payload, g;
          if (typeof v == "function") {
            c1(), g = v.call(s, i, u);
            {
              if (e.mode & Zt) {
                Sn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Sn(!1);
                }
              }
              f1();
            }
          } else
            g = v;
          return g == null ? i : ot({}, i, g);
        }
        case Oh:
          return Ah = !0, i;
      }
      return i;
    }
    function Fh(e, t, a, i) {
      var u = e.updateQueue;
      Ah = !1, jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, g = v.next;
        v.next = null, f === null ? s = g : f.next = g, f = v;
        var S = e.alternate;
        if (S !== null) {
          var k = S.updateQueue, R = k.lastBaseUpdate;
          R !== f && (R === null ? k.firstBaseUpdate = g : R.next = g, k.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var O = u.baseState, H = I, P = null, he = null, ze = null, ke = s;
        do {
          var pt = ke.lane, ct = ke.eventTime;
          if (Ol(i, pt)) {
            if (ze !== null) {
              var Y = {
                eventTime: ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ft,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              ze = ze.next = Y;
            }
            O = zT(e, u, ke, O, t, a);
            var N = ke.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== ft) {
              e.flags |= Va;
              var J = u.effects;
              J === null ? u.effects = [ke] : J.push(ke);
            }
          } else {
            var M = {
              eventTime: ct,
              lane: pt,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            ze === null ? (he = ze = M, P = O) : ze = ze.next = M, H = Ze(H, pt);
          }
          if (ke = ke.next, ke === null) {
            if (p = u.shared.pending, p === null)
              break;
            var me = p, fe = me.next;
            me.next = null, ke = fe, u.lastBaseUpdate = me, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (P = O), u.baseState = P, u.firstBaseUpdate = he, u.lastBaseUpdate = ze;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var Qe = Be;
          do
            H = Ze(H, Qe.lane), Qe = Qe.next;
          while (Qe !== Be);
        } else
          s === null && (u.shared.lanes = I);
        Tp(H), e.lanes = H, e.memoizedState = O;
      }
      jh = null;
    }
    function UT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function y1() {
      Ah = !1;
    }
    function Vh() {
      return Ah;
    }
    function g1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, UT(f, a));
        }
    }
    var vg = {}, S1 = new _.Component().refs, hg, mg, yg, gg, Sg, x1, Bh, xg, Cg, Eg;
    {
      hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), xg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set();
      var C1 = /* @__PURE__ */ new Set();
      Bh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          C1.has(a) || (C1.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, x1 = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          Sg.has(a) || (Sg.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(vg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(vg);
    }
    function wg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Zt) {
          Sn(!0);
          try {
            s = a(i, u);
          } finally {
            Sn(!1);
          }
        }
        x1(t, s);
      }
      var f = s == null ? u : ot({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Tg = {
      isMounted: Pr,
      enqueueSetState: function(e, t, a) {
        var i = na(e), u = Gr(), s = ro(i), f = Kl(u, s);
        f.payload = t, a != null && (Bh(a, "setState"), f.callback = a);
        var p = Xu(i, f, s);
        p !== null && (Xn(p, i, s, u), Hh(p, i, s)), Wi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = na(e), u = Gr(), s = ro(i), f = Kl(u, s);
        f.tag = h1, f.payload = t, a != null && (Bh(a, "replaceState"), f.callback = a);
        var p = Xu(i, f, s);
        p !== null && (Xn(p, i, s, u), Hh(p, i, s)), Wi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = na(e), i = Gr(), u = ro(a), s = Kl(i, u);
        s.tag = Oh, t != null && (Bh(t, "forceUpdate"), s.callback = t);
        var f = Xu(a, s, u);
        f !== null && (Xn(f, a, u, i), Hh(f, a, u)), ad(a, u);
      }
    };
    function E1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Zt) {
            Sn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Sn(!1);
            }
          }
          v === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_e(a, i) || !_e(u, s) : !0;
    }
    function OT(e, t, a) {
      var i = e.stateNode;
      {
        var u = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Cg.has(t) && (Cg.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !yg.has(t) && (yg.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Ln(p)) && m("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function w1(e, t) {
      t.updater = Tg, e.stateNode = t, Su(t, e), t._reactInternalInstance = vg;
    }
    function T1(e, t, a) {
      var i = !1, u = za, s = za, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === oe && f._context === void 0
        );
        if (!p && !Eg.has(t)) {
          Eg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === K ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = jn(f);
      else {
        u = Pc(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? Yc(e, u) : za;
      }
      var S = new t(a, s);
      if (e.mode & Zt) {
        Sn(!0);
        try {
          S = new t(a, s);
        } finally {
          Sn(!1);
        }
      }
      var k = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      w1(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && k === null) {
          var R = Mt(t) || "Component";
          mg.has(R) || (mg.add(R), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", R, S.state === null ? "null" : "undefined", R));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var O = null, H = null, P = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), O !== null || H !== null || P !== null) {
            var he = Mt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            gg.has(he) || (gg.add(he), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, he, ze, O !== null ? `
  ` + O : "", H !== null ? `
  ` + H : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && GS(e, u, s), S;
    }
    function AT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), Tg.enqueueReplaceState(t, t.state, null));
    }
    function R1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          hg.has(s) || (hg.add(s), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Tg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Rg(e, t, a, i) {
      OT(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = S1, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = jn(s);
      else {
        var f = Pc(e, t, !0);
        u.context = Yc(e, f);
      }
      {
        if (u.state === a) {
          var p = Mt(t) || "Component";
          xg.has(p) || (xg.add(p), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Zt && Si.recordLegacyContextWarning(e, u), Si.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (wg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (AT(e, u), Fh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var g = Ke;
        g |= Cr, (e.mode & ua) !== Ae && (g |= Er), e.flags |= g;
      }
    }
    function jT(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = za;
      if (typeof p == "object" && p !== null)
        v = jn(p);
      else {
        var g = Pc(e, t, !0);
        v = Yc(e, g);
      }
      var S = t.getDerivedStateFromProps, k = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !k && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && R1(e, u, a, v), y1();
      var R = e.memoizedState, O = u.state = R;
      if (Fh(e, a, u, i), O = e.memoizedState, s === a && R === O && !Eh() && !Vh()) {
        if (typeof u.componentDidMount == "function") {
          var H = Ke;
          H |= Cr, (e.mode & ua) !== Ae && (H |= Er), e.flags |= H;
        }
        return !1;
      }
      typeof S == "function" && (wg(e, t, S, a), O = e.memoizedState);
      var P = Vh() || E1(e, t, s, a, R, O, v);
      if (P) {
        if (!k && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var he = Ke;
          he |= Cr, (e.mode & ua) !== Ae && (he |= Er), e.flags |= he;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = Ke;
          ze |= Cr, (e.mode & ua) !== Ae && (ze |= Er), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, P;
    }
    function HT(e, t, a, i, u) {
      var s = t.stateNode;
      m1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : xi(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, S = a.contextType, k = za;
      if (typeof S == "object" && S !== null)
        k = jn(S);
      else {
        var R = Pc(t, a, !0);
        k = Yc(t, R);
      }
      var O = a.getDerivedStateFromProps, H = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== k) && R1(t, s, i, k), y1();
      var P = t.memoizedState, he = s.state = P;
      if (Fh(t, i, s, u), he = t.memoizedState, f === v && P === he && !Eh() && !Vh() && !ye)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= ra), !1;
      typeof O == "function" && (wg(t, a, O, i), he = t.memoizedState);
      var ze = Vh() || E1(t, a, p, i, P, he, k) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ye;
      return ze ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, he, k), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, he, k)), typeof s.componentDidUpdate == "function" && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ra)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= ra), t.memoizedProps = i, t.memoizedState = he), s.props = i, s.state = he, s.context = k, ze;
    }
    var bg, kg, Dg, _g, Lg, b1 = function(e, t) {
    };
    bg = !1, kg = !1, Dg = {}, _g = {}, Lg = {}, b1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        _g[a] || (_g[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Jd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Zt || Gt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ge(e) || "Component";
          Dg[u] || (m('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Dg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== $)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Ja(i, "ref");
          var g = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === g)
            return t.ref;
          var S = function(k) {
            var R = v.refs;
            R === S1 && (R = v.refs = {}), k === null ? delete R[g] : R[g] = k;
          };
          return S._stringRef = g, S;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ph(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Yh(e) {
      {
        var t = Ge(e) || "Component";
        if (Lg[t])
          return;
        Lg[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function k1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function D1(e) {
      function t(M, Y) {
        if (e) {
          var N = M.deletions;
          N === null ? (M.deletions = [Y], M.flags |= Ct) : N.push(Y);
        }
      }
      function a(M, Y) {
        if (!e)
          return null;
        for (var N = Y; N !== null; )
          t(M, N), N = N.sibling;
        return null;
      }
      function i(M, Y) {
        for (var N = /* @__PURE__ */ new Map(), J = Y; J !== null; )
          J.key !== null ? N.set(J.key, J) : N.set(J.index, J), J = J.sibling;
        return N;
      }
      function u(M, Y) {
        var N = hs(M, Y);
        return N.index = 0, N.sibling = null, N;
      }
      function s(M, Y, N) {
        if (M.index = N, !e)
          return M.flags |= Qf, Y;
        var J = M.alternate;
        if (J !== null) {
          var me = J.index;
          return me < Y ? (M.flags |= Ht, Y) : me;
        } else
          return M.flags |= Ht, Y;
      }
      function f(M) {
        return e && M.alternate === null && (M.flags |= Ht), M;
      }
      function p(M, Y, N, J) {
        if (Y === null || Y.tag !== re) {
          var me = rS(N, M.mode, J);
          return me.return = M, me;
        } else {
          var fe = u(Y, N);
          return fe.return = M, fe;
        }
      }
      function v(M, Y, N, J) {
        var me = N.type;
        if (me === Ta)
          return S(M, Y, N.props.children, J, N.key);
        if (Y !== null && (Y.elementType === me || // Keep this check inline so it only runs on the false path:
        gC(Y, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof me == "object" && me !== null && me.$$typeof === He && k1(me) === Y.type)) {
          var fe = u(Y, N.props);
          return fe.ref = Jd(M, Y, N), fe.return = M, fe._debugSource = N._source, fe._debugOwner = N._owner, fe;
        }
        var Be = nS(N, M.mode, J);
        return Be.ref = Jd(M, Y, N), Be.return = M, Be;
      }
      function g(M, Y, N, J) {
        if (Y === null || Y.tag !== W || Y.stateNode.containerInfo !== N.containerInfo || Y.stateNode.implementation !== N.implementation) {
          var me = aS(N, M.mode, J);
          return me.return = M, me;
        } else {
          var fe = u(Y, N.children || []);
          return fe.return = M, fe;
        }
      }
      function S(M, Y, N, J, me) {
        if (Y === null || Y.tag !== we) {
          var fe = io(N, M.mode, J, me);
          return fe.return = M, fe;
        } else {
          var Be = u(Y, N);
          return Be.return = M, Be;
        }
      }
      function k(M, Y, N) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var J = rS("" + Y, M.mode, N);
          return J.return = M, J;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case _i: {
              var me = nS(Y, M.mode, N);
              return me.ref = Jd(M, null, Y), me.return = M, me;
            }
            case Hr: {
              var fe = aS(Y, M.mode, N);
              return fe.return = M, fe;
            }
            case He: {
              var Be = Y._payload, Qe = Y._init;
              return k(M, Qe(Be), N);
            }
          }
          if (Ln(Y) || ei(Y)) {
            var _t = io(Y, M.mode, N, null);
            return _t.return = M, _t;
          }
          Ph(M, Y);
        }
        return typeof Y == "function" && Yh(M), null;
      }
      function R(M, Y, N, J) {
        var me = Y !== null ? Y.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return me !== null ? null : p(M, Y, "" + N, J);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case _i:
              return N.key === me ? v(M, Y, N, J) : null;
            case Hr:
              return N.key === me ? g(M, Y, N, J) : null;
            case He: {
              var fe = N._payload, Be = N._init;
              return R(M, Y, Be(fe), J);
            }
          }
          if (Ln(N) || ei(N))
            return me !== null ? null : S(M, Y, N, J, null);
          Ph(M, N);
        }
        return typeof N == "function" && Yh(M), null;
      }
      function O(M, Y, N, J, me) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var fe = M.get(N) || null;
          return p(Y, fe, "" + J, me);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case _i: {
              var Be = M.get(J.key === null ? N : J.key) || null;
              return v(Y, Be, J, me);
            }
            case Hr: {
              var Qe = M.get(J.key === null ? N : J.key) || null;
              return g(Y, Qe, J, me);
            }
            case He:
              var _t = J._payload, St = J._init;
              return O(M, Y, N, St(_t), me);
          }
          if (Ln(J) || ei(J)) {
            var Tn = M.get(N) || null;
            return S(Y, Tn, J, me, null);
          }
          Ph(Y, J);
        }
        return typeof J == "function" && Yh(Y), null;
      }
      function H(M, Y, N) {
        {
          if (typeof M != "object" || M === null)
            return Y;
          switch (M.$$typeof) {
            case _i:
            case Hr:
              b1(M, N);
              var J = M.key;
              if (typeof J != "string")
                break;
              if (Y === null) {
                Y = /* @__PURE__ */ new Set(), Y.add(J);
                break;
              }
              if (!Y.has(J)) {
                Y.add(J);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case He:
              var me = M._payload, fe = M._init;
              H(fe(me), Y, N);
              break;
          }
        }
        return Y;
      }
      function P(M, Y, N, J) {
        for (var me = null, fe = 0; fe < N.length; fe++) {
          var Be = N[fe];
          me = H(Be, me, M);
        }
        for (var Qe = null, _t = null, St = Y, Tn = 0, xt = 0, hn = null; St !== null && xt < N.length; xt++) {
          St.index > xt ? (hn = St, St = null) : hn = St.sibling;
          var Mr = R(M, St, N[xt], J);
          if (Mr === null) {
            St === null && (St = hn);
            break;
          }
          e && St && Mr.alternate === null && t(M, St), Tn = s(Mr, Tn, xt), _t === null ? Qe = Mr : _t.sibling = Mr, _t = Mr, St = hn;
        }
        if (xt === N.length) {
          if (a(M, St), sr()) {
            var mr = xt;
            ns(M, mr);
          }
          return Qe;
        }
        if (St === null) {
          for (; xt < N.length; xt++) {
            var Oa = k(M, N[xt], J);
            Oa !== null && (Tn = s(Oa, Tn, xt), _t === null ? Qe = Oa : _t.sibling = Oa, _t = Oa);
          }
          if (sr()) {
            var Xr = xt;
            ns(M, Xr);
          }
          return Qe;
        }
        for (var qr = i(M, St); xt < N.length; xt++) {
          var Nr = O(qr, M, xt, N[xt], J);
          Nr !== null && (e && Nr.alternate !== null && qr.delete(Nr.key === null ? xt : Nr.key), Tn = s(Nr, Tn, xt), _t === null ? Qe = Nr : _t.sibling = Nr, _t = Nr);
        }
        if (e && qr.forEach(function(df) {
          return t(M, df);
        }), sr()) {
          var ru = xt;
          ns(M, ru);
        }
        return Qe;
      }
      function he(M, Y, N, J) {
        var me = ei(N);
        if (typeof me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (kg || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), kg = !0), N.entries === me && (bg || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), bg = !0);
          var fe = me.call(N);
          if (fe)
            for (var Be = null, Qe = fe.next(); !Qe.done; Qe = fe.next()) {
              var _t = Qe.value;
              Be = H(_t, Be, M);
            }
        }
        var St = me.call(N);
        if (St == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Tn = null, xt = null, hn = Y, Mr = 0, mr = 0, Oa = null, Xr = St.next(); hn !== null && !Xr.done; mr++, Xr = St.next()) {
          hn.index > mr ? (Oa = hn, hn = null) : Oa = hn.sibling;
          var qr = R(M, hn, Xr.value, J);
          if (qr === null) {
            hn === null && (hn = Oa);
            break;
          }
          e && hn && qr.alternate === null && t(M, hn), Mr = s(qr, Mr, mr), xt === null ? Tn = qr : xt.sibling = qr, xt = qr, hn = Oa;
        }
        if (Xr.done) {
          if (a(M, hn), sr()) {
            var Nr = mr;
            ns(M, Nr);
          }
          return Tn;
        }
        if (hn === null) {
          for (; !Xr.done; mr++, Xr = St.next()) {
            var ru = k(M, Xr.value, J);
            ru !== null && (Mr = s(ru, Mr, mr), xt === null ? Tn = ru : xt.sibling = ru, xt = ru);
          }
          if (sr()) {
            var df = mr;
            ns(M, df);
          }
          return Tn;
        }
        for (var _p = i(M, hn); !Xr.done; mr++, Xr = St.next()) {
          var fl = O(_p, M, mr, Xr.value, J);
          fl !== null && (e && fl.alternate !== null && _p.delete(fl.key === null ? mr : fl.key), Mr = s(fl, Mr, mr), xt === null ? Tn = fl : xt.sibling = fl, xt = fl);
        }
        if (e && _p.forEach(function(Zk) {
          return t(M, Zk);
        }), sr()) {
          var Kk = mr;
          ns(M, Kk);
        }
        return Tn;
      }
      function ze(M, Y, N, J) {
        if (Y !== null && Y.tag === re) {
          a(M, Y.sibling);
          var me = u(Y, N);
          return me.return = M, me;
        }
        a(M, Y);
        var fe = rS(N, M.mode, J);
        return fe.return = M, fe;
      }
      function ke(M, Y, N, J) {
        for (var me = N.key, fe = Y; fe !== null; ) {
          if (fe.key === me) {
            var Be = N.type;
            if (Be === Ta) {
              if (fe.tag === we) {
                a(M, fe.sibling);
                var Qe = u(fe, N.props.children);
                return Qe.return = M, Qe._debugSource = N._source, Qe._debugOwner = N._owner, Qe;
              }
            } else if (fe.elementType === Be || // Keep this check inline so it only runs on the false path:
            gC(fe, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === He && k1(Be) === fe.type) {
              a(M, fe.sibling);
              var _t = u(fe, N.props);
              return _t.ref = Jd(M, fe, N), _t.return = M, _t._debugSource = N._source, _t._debugOwner = N._owner, _t;
            }
            a(M, fe);
            break;
          } else
            t(M, fe);
          fe = fe.sibling;
        }
        if (N.type === Ta) {
          var St = io(N.props.children, M.mode, J, N.key);
          return St.return = M, St;
        } else {
          var Tn = nS(N, M.mode, J);
          return Tn.ref = Jd(M, Y, N), Tn.return = M, Tn;
        }
      }
      function pt(M, Y, N, J) {
        for (var me = N.key, fe = Y; fe !== null; ) {
          if (fe.key === me)
            if (fe.tag === W && fe.stateNode.containerInfo === N.containerInfo && fe.stateNode.implementation === N.implementation) {
              a(M, fe.sibling);
              var Be = u(fe, N.children || []);
              return Be.return = M, Be;
            } else {
              a(M, fe);
              break;
            }
          else
            t(M, fe);
          fe = fe.sibling;
        }
        var Qe = aS(N, M.mode, J);
        return Qe.return = M, Qe;
      }
      function ct(M, Y, N, J) {
        var me = typeof N == "object" && N !== null && N.type === Ta && N.key === null;
        if (me && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case _i:
              return f(ke(M, Y, N, J));
            case Hr:
              return f(pt(M, Y, N, J));
            case He:
              var fe = N._payload, Be = N._init;
              return ct(M, Y, Be(fe), J);
          }
          if (Ln(N))
            return P(M, Y, N, J);
          if (ei(N))
            return he(M, Y, N, J);
          Ph(M, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(ze(M, Y, "" + N, J)) : (typeof N == "function" && Yh(M), a(M, Y));
      }
      return ct;
    }
    var Xc = D1(!0), _1 = D1(!1);
    function FT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function VT(e, t) {
      for (var a = e.child; a !== null; )
        hk(a, t), a = a.sibling;
    }
    var ep = {}, qu = Iu(ep), tp = Iu(ep), $h = Iu(ep);
    function Ih(e) {
      if (e === ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function L1() {
      var e = Ih($h.current);
      return e;
    }
    function Mg(e, t) {
      _r($h, t, e), _r(tp, e, e), _r(qu, ep, e);
      var a = ew(t);
      Dr(qu, e), _r(qu, a, e);
    }
    function qc(e) {
      Dr(qu, e), Dr(tp, e), Dr($h, e);
    }
    function Ng() {
      var e = Ih(qu.current);
      return e;
    }
    function M1(e) {
      Ih($h.current);
      var t = Ih(qu.current), a = tw(t, e.type);
      t !== a && (_r(tp, e, e), _r(qu, a, e));
    }
    function zg(e) {
      tp.current === e && (Dr(qu, e), Dr(tp, e));
    }
    var BT = 0, N1 = 1, z1 = 1, np = 2, Ci = Iu(BT);
    function Ug(e, t) {
      return (e & t) !== 0;
    }
    function Kc(e) {
      return e & N1;
    }
    function Og(e, t) {
      return e & N1 | t;
    }
    function PT(e, t) {
      return e | t;
    }
    function Ku(e, t) {
      _r(Ci, t, e);
    }
    function Zc(e) {
      Dr(Ci, e);
    }
    function YT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === de) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || YS(i) || By(i))
              return t;
          }
        } else if (t.tag === We && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Pe) !== Me;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ha = (
      /*   */
      0
    ), Pn = (
      /* */
      1
    ), al = (
      /*  */
      2
    ), Yn = (
      /*    */
      4
    ), cr = (
      /*   */
      8
    ), Ag = [];
    function jg() {
      for (var e = 0; e < Ag.length; e++) {
        var t = Ag[e];
        t._workInProgressVersionPrimary = null;
      }
      Ag.length = 0;
    }
    function $T(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = y.ReactCurrentDispatcher, rp = y.ReactCurrentBatchConfig, Hg, Jc;
    Hg = /* @__PURE__ */ new Set();
    var os = I, Dt = null, $n = null, In = null, Wh = !1, ap = !1, ip = 0, IT = 0, QT = 25, Q = null, Xa = null, Zu = -1, Fg = !1;
    function wt() {
      {
        var e = Q;
        Xa === null ? Xa = [e] : Xa.push(e);
      }
    }
    function le() {
      {
        var e = Q;
        Xa !== null && (Zu++, Xa[Zu] !== e && WT(e));
      }
    }
    function ef(e) {
      e != null && !Ln(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Q, typeof e);
    }
    function WT(e) {
      {
        var t = Ge(Dt);
        if (!Hg.has(t) && (Hg.add(t), Xa !== null)) {
          for (var a = "", i = 30, u = 0; u <= Zu; u++) {
            for (var s = Xa[u], f = u === Zu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Lr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Vg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Q), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function tf(e, t, a, i, u, s) {
      os = s, Dt = t, Xa = e !== null ? e._debugHookTypes : null, Zu = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? ve.current = tx : Xa !== null ? ve.current = ex : ve.current = J1;
      var f = a(i, u);
      if (ap) {
        var p = 0;
        do {
          if (ap = !1, ip = 0, p >= QT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, $n = null, In = null, t.updateQueue = null, Zu = -1, ve.current = nx, f = a(i, u);
        } while (ap);
      }
      ve.current = lm, t._debugHookTypes = Xa;
      var v = $n !== null && $n.next !== null;
      if (os = I, Dt = null, $n = null, In = null, Q = null, Xa = null, Zu = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== Ae && m("Internal React error: Expected static flag was missing. Please notify the React team."), Wh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function nf() {
      var e = ip !== 0;
      return ip = 0, e;
    }
    function U1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ua) !== Ae ? t.flags &= ~(Rl | Er | Qt | Ke) : t.flags &= ~(Qt | Ke), e.lanes = Du(e.lanes, a);
    }
    function O1() {
      if (ve.current = lm, Wh) {
        for (var e = Dt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Wh = !1;
      }
      os = I, Dt = null, $n = null, In = null, Xa = null, Zu = -1, Q = null, G1 = !1, ap = !1, ip = 0;
    }
    function il() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return In === null ? Dt.memoizedState = In = e : In = In.next = e, In;
    }
    function qa() {
      var e;
      if ($n === null) {
        var t = Dt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = $n.next;
      var a;
      if (In === null ? a = Dt.memoizedState : a = In.next, a !== null)
        In = a, a = In.next, $n = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        $n = e;
        var i = {
          memoizedState: $n.memoizedState,
          baseState: $n.baseState,
          baseQueue: $n.baseQueue,
          queue: $n.queue,
          next: null
        };
        In === null ? Dt.memoizedState = In = i : In = In.next = i;
      }
      return In;
    }
    function A1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = il(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = KT.bind(null, Dt, s);
      return [i.memoizedState, f];
    }
    function Yg(e, t, a) {
      var i = qa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = $n, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var S = f.next, k = s.baseState, R = null, O = null, H = null, P = S;
        do {
          var he = P.lane;
          if (Ol(os, he)) {
            if (H !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ft,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              H = H.next = ke;
            }
            if (P.hasEagerState)
              k = P.eagerState;
            else {
              var pt = P.action;
              k = e(k, pt);
            }
          } else {
            var ze = {
              lane: he,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            H === null ? (O = H = ze, R = k) : H = H.next = ze, Dt.lanes = Ze(Dt.lanes, he), Tp(he);
          }
          P = P.next;
        } while (P !== null && P !== S);
        H === null ? R = k : H.next = O, Ce(k, i.memoizedState) || dp(), i.memoizedState = k, i.baseState = R, i.baseQueue = H, u.lastRenderedState = k;
      }
      var ct = u.interleaved;
      if (ct !== null) {
        var M = ct;
        do {
          var Y = M.lane;
          Dt.lanes = Ze(Dt.lanes, Y), Tp(Y), M = M.next;
        } while (M !== ct);
      } else
        f === null && (u.lanes = I);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function $g(e, t, a) {
      var i = qa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, g = v;
        do {
          var S = g.action;
          p = e(p, S), g = g.next;
        } while (g !== v);
        Ce(p, i.memoizedState) || dp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function DD(e, t, a) {
    }
    function _D(e, t, a) {
    }
    function Ig(e, t, a) {
      var i = Dt, u = il(), s, f = sr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Jc || s !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Jc = !0);
      } else {
        if (s = t(), !Jc) {
          var p = t();
          Ce(s, p) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Jc = !0);
        }
        var v = Tm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fo(v, os) || j1(i, t, s);
      }
      u.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return u.queue = g, Zh(F1.bind(null, i, g, e), [e]), i.flags |= Qt, lp(Pn | cr, H1.bind(null, i, g, s, t), void 0, null), s;
    }
    function Gh(e, t, a) {
      var i = Dt, u = qa(), s = t();
      if (!Jc) {
        var f = t();
        Ce(s, f) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Jc = !0);
      }
      var p = u.memoizedState, v = !Ce(p, s);
      v && (u.memoizedState = s, dp());
      var g = u.queue;
      if (op(F1.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      In !== null && In.memoizedState.tag & Pn) {
        i.flags |= Qt, lp(Pn | cr, H1.bind(null, i, g, s, t), void 0, null);
        var S = Tm();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fo(S, os) || j1(i, t, s);
      }
      return s;
    }
    function j1(e, t, a) {
      e.flags |= Lo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Dt.updateQueue;
      if (u === null)
        u = A1(), Dt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function H1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, V1(t) && B1(e);
    }
    function F1(e, t, a) {
      var i = function() {
        V1(t) && B1(e);
      };
      return a(i);
    }
    function V1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ce(a, i);
      } catch {
        return !0;
      }
    }
    function B1(e) {
      var t = va(e, Ve);
      t !== null && Xn(t, e, Ve, zt);
    }
    function Xh(e) {
      var t = il();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: Bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = ZT.bind(null, Dt, a);
      return [t.memoizedState, i];
    }
    function Qg(e) {
      return Yg(Bg);
    }
    function Wg(e) {
      return $g(Bg);
    }
    function lp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Dt.updateQueue;
      if (s === null)
        s = A1(), Dt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Gg(e) {
      var t = il();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function qh(e) {
      var t = qa();
      return t.memoizedState;
    }
    function up(e, t, a, i) {
      var u = il(), s = i === void 0 ? null : i;
      Dt.flags |= e, u.memoizedState = lp(Pn | t, a, void 0, s);
    }
    function Kh(e, t, a, i) {
      var u = qa(), s = i === void 0 ? null : i, f = void 0;
      if ($n !== null) {
        var p = $n.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Vg(s, v)) {
            u.memoizedState = lp(t, a, f, s);
            return;
          }
        }
      }
      Dt.flags |= e, u.memoizedState = lp(Pn | t, a, f, s);
    }
    function Zh(e, t) {
      return (Dt.mode & ua) !== Ae ? up(Rl | Qt | Bi, cr, e, t) : up(Qt | Bi, cr, e, t);
    }
    function op(e, t) {
      return Kh(Qt, cr, e, t);
    }
    function Xg(e, t) {
      return up(Ke, al, e, t);
    }
    function Jh(e, t) {
      return Kh(Ke, al, e, t);
    }
    function qg(e, t) {
      var a = Ke;
      return a |= Cr, (Dt.mode & ua) !== Ae && (a |= Er), up(a, Yn, e, t);
    }
    function em(e, t) {
      return Kh(Ke, Yn, e, t);
    }
    function P1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Kg(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ke;
      return u |= Cr, (Dt.mode & ua) !== Ae && (u |= Er), up(u, Yn, P1.bind(null, t, e), i);
    }
    function tm(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Kh(Ke, Yn, P1.bind(null, t, e), i);
    }
    function GT(e, t) {
    }
    var nm = GT;
    function Zg(e, t) {
      var a = il(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function rm(e, t) {
      var a = qa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Jg(e, t) {
      var a = il(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function am(e, t) {
      var a = qa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function e0(e) {
      var t = il();
      return t.memoizedState = e, e;
    }
    function Y1(e) {
      var t = qa(), a = $n, i = a.memoizedState;
      return I1(t, i, e);
    }
    function $1(e) {
      var t = qa();
      if ($n === null)
        return t.memoizedState = e, e;
      var a = $n.memoizedState;
      return I1(t, a, e);
    }
    function I1(e, t, a) {
      var i = !ly(os);
      if (i) {
        if (!Ce(a, t)) {
          var u = sd();
          Dt.lanes = Ze(Dt.lanes, u), Tp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, dp()), e.memoizedState = a, a;
    }
    function XT(e, t, a) {
      var i = sa();
      Cn(er(i, Bn)), e(!0);
      var u = rp.transition;
      rp.transition = {};
      var s = rp.transition;
      rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Cn(i), rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && j("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function t0() {
      var e = Xh(!1), t = e[0], a = e[1], i = XT.bind(null, a), u = il();
      return u.memoizedState = i, [t, i];
    }
    function Q1() {
      var e = Qg(), t = e[0], a = qa(), i = a.memoizedState;
      return [t, i];
    }
    function W1() {
      var e = Wg(), t = e[0], a = qa(), i = a.memoizedState;
      return [t, i];
    }
    var G1 = !1;
    function qT() {
      return G1;
    }
    function n0() {
      var e = il(), t = Tm(), a = t.identifierPrefix, i;
      if (sr()) {
        var u = cT();
        i = ":" + a + "R" + u;
        var s = ip++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = IT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function im() {
      var e = qa(), t = e.memoizedState;
      return t;
    }
    function KT(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ro(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (X1(e))
        q1(t, u);
      else {
        var s = p1(e, t, u, i);
        if (s !== null) {
          var f = Gr();
          Xn(s, e, i, f), K1(s, t, i);
        }
      }
      Z1(e, i);
    }
    function ZT(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ro(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (X1(e))
        q1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = Ei;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = g, Ce(g, v)) {
                LT(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var S = p1(e, t, u, i);
        if (S !== null) {
          var k = Gr();
          Xn(S, e, i, k), K1(S, t, i);
        }
      }
      Z1(e, i);
    }
    function X1(e) {
      var t = e.alternate;
      return e === Dt || t !== null && t === Dt;
    }
    function q1(e, t) {
      ap = Wh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function K1(e, t, a) {
      if (od(a)) {
        var i = t.lanes;
        i = cd(i, e.pendingLanes);
        var u = Ze(i, a);
        t.lanes = u, _u(e, u);
      }
    }
    function Z1(e, t, a) {
      Wi(e, t);
    }
    var lm = {
      readContext: jn,
      useCallback: Lr,
      useContext: Lr,
      useEffect: Lr,
      useImperativeHandle: Lr,
      useInsertionEffect: Lr,
      useLayoutEffect: Lr,
      useMemo: Lr,
      useReducer: Lr,
      useRef: Lr,
      useState: Lr,
      useDebugValue: Lr,
      useDeferredValue: Lr,
      useTransition: Lr,
      useMutableSource: Lr,
      useSyncExternalStore: Lr,
      useId: Lr,
      unstable_isNewReconciler: ne
    }, J1 = null, ex = null, tx = null, nx = null, ll = null, Ei = null, um = null;
    {
      var r0 = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      J1 = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", wt(), ef(t), Zg(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", wt(), jn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", wt(), ef(t), Zh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", wt(), ef(a), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", wt(), ef(t), Xg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", wt(), ef(t), qg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", wt(), ef(t);
          var a = ve.current;
          ve.current = ll;
          try {
            return Jg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", wt();
          var i = ve.current;
          ve.current = ll;
          try {
            return Pg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", wt(), Gg(e);
        },
        useState: function(e) {
          Q = "useState", wt();
          var t = ve.current;
          ve.current = ll;
          try {
            return Xh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", wt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", wt(), e0(e);
        },
        useTransition: function() {
          return Q = "useTransition", wt(), t0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", wt(), Ig(e, t, a);
        },
        useId: function() {
          return Q = "useId", wt(), n0();
        },
        unstable_isNewReconciler: ne
      }, ex = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", le(), Zg(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", le(), jn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", le(), Zh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", le(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", le(), Xg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", le(), qg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", le();
          var a = ve.current;
          ve.current = ll;
          try {
            return Jg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", le();
          var i = ve.current;
          ve.current = ll;
          try {
            return Pg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", le(), Gg(e);
        },
        useState: function(e) {
          Q = "useState", le();
          var t = ve.current;
          ve.current = ll;
          try {
            return Xh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", le(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", le(), e0(e);
        },
        useTransition: function() {
          return Q = "useTransition", le(), t0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", le(), Ig(e, t, a);
        },
        useId: function() {
          return Q = "useId", le(), n0();
        },
        unstable_isNewReconciler: ne
      }, tx = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", le(), rm(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", le(), jn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", le(), op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", le(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", le(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", le(), em(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", le();
          var a = ve.current;
          ve.current = Ei;
          try {
            return am(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", le();
          var i = ve.current;
          ve.current = Ei;
          try {
            return Yg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", le(), qh();
        },
        useState: function(e) {
          Q = "useState", le();
          var t = ve.current;
          ve.current = Ei;
          try {
            return Qg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", le(), nm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", le(), Y1(e);
        },
        useTransition: function() {
          return Q = "useTransition", le(), Q1();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", le(), Gh(e, t);
        },
        useId: function() {
          return Q = "useId", le(), im();
        },
        unstable_isNewReconciler: ne
      }, nx = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", le(), rm(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", le(), jn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", le(), op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", le(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", le(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", le(), em(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", le();
          var a = ve.current;
          ve.current = um;
          try {
            return am(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", le();
          var i = ve.current;
          ve.current = um;
          try {
            return $g(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", le(), qh();
        },
        useState: function(e) {
          Q = "useState", le();
          var t = ve.current;
          ve.current = um;
          try {
            return Wg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", le(), nm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", le(), $1(e);
        },
        useTransition: function() {
          return Q = "useTransition", le(), W1();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", le(), Gh(e, t);
        },
        useId: function() {
          return Q = "useId", le(), im();
        },
        unstable_isNewReconciler: ne
      }, ll = {
        readContext: function(e) {
          return r0(), jn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Ie(), wt(), Zg(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Ie(), wt(), jn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Ie(), wt(), Zh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", Ie(), wt(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Ie(), wt(), Xg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Ie(), wt(), qg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Ie(), wt();
          var a = ve.current;
          ve.current = ll;
          try {
            return Jg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", Ie(), wt();
          var i = ve.current;
          ve.current = ll;
          try {
            return Pg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Ie(), wt(), Gg(e);
        },
        useState: function(e) {
          Q = "useState", Ie(), wt();
          var t = ve.current;
          ve.current = ll;
          try {
            return Xh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Ie(), wt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Ie(), wt(), e0(e);
        },
        useTransition: function() {
          return Q = "useTransition", Ie(), wt(), t0();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", Ie(), wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", Ie(), wt(), Ig(e, t, a);
        },
        useId: function() {
          return Q = "useId", Ie(), wt(), n0();
        },
        unstable_isNewReconciler: ne
      }, Ei = {
        readContext: function(e) {
          return r0(), jn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Ie(), le(), rm(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Ie(), le(), jn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Ie(), le(), op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", Ie(), le(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Ie(), le(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Ie(), le(), em(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Ie(), le();
          var a = ve.current;
          ve.current = Ei;
          try {
            return am(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", Ie(), le();
          var i = ve.current;
          ve.current = Ei;
          try {
            return Yg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Ie(), le(), qh();
        },
        useState: function(e) {
          Q = "useState", Ie(), le();
          var t = ve.current;
          ve.current = Ei;
          try {
            return Qg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Ie(), le(), nm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Ie(), le(), Y1(e);
        },
        useTransition: function() {
          return Q = "useTransition", Ie(), le(), Q1();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", Ie(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", Ie(), le(), Gh(e, t);
        },
        useId: function() {
          return Q = "useId", Ie(), le(), im();
        },
        unstable_isNewReconciler: ne
      }, um = {
        readContext: function(e) {
          return r0(), jn(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Ie(), le(), rm(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Ie(), le(), jn(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Ie(), le(), op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", Ie(), le(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Ie(), le(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Ie(), le(), em(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Ie(), le();
          var a = ve.current;
          ve.current = Ei;
          try {
            return am(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", Ie(), le();
          var i = ve.current;
          ve.current = Ei;
          try {
            return $g(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Ie(), le(), qh();
        },
        useState: function(e) {
          Q = "useState", Ie(), le();
          var t = ve.current;
          ve.current = Ei;
          try {
            return Wg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Ie(), le(), nm();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Ie(), le(), $1(e);
        },
        useTransition: function() {
          return Q = "useTransition", Ie(), le(), W1();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", Ie(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", Ie(), le(), Gh(e, t);
        },
        useId: function() {
          return Q = "useId", Ie(), le(), im();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Ju = E.unstable_now, rx = 0, om = -1, sp = -1, sm = -1, a0 = !1, cm = !1;
    function ax() {
      return a0;
    }
    function JT() {
      cm = !0;
    }
    function eR() {
      a0 = !1, cm = !1;
    }
    function tR() {
      a0 = cm, cm = !1;
    }
    function ix() {
      return rx;
    }
    function lx() {
      rx = Ju();
    }
    function i0(e) {
      sp = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function ux(e) {
      sp = -1;
    }
    function fm(e, t) {
      if (sp >= 0) {
        var a = Ju() - sp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), sp = -1;
      }
    }
    function ul(e) {
      if (om >= 0) {
        var t = Ju() - om;
        om = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ue:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function l0(e) {
      if (sm >= 0) {
        var t = Ju() - sm;
        sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ue:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ol() {
      om = Ju();
    }
    function u0() {
      sm = Ju();
    }
    function o0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ss(e, t) {
      return {
        value: e,
        source: t,
        stack: gf(t),
        digest: null
      };
    }
    function s0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function nR(e, t) {
      return !0;
    }
    function c0(e, t) {
      try {
        var a = nR(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === $)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === B)
          g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var S = Ge(e) || "Anonymous";
          g = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".");
        }
        var k = v + `
` + f + `

` + ("" + g);
        console.error(k);
      } catch (R) {
        setTimeout(function() {
          throw R;
        });
      }
    }
    var rR = typeof WeakMap == "function" ? WeakMap : Map;
    function ox(e, t, a) {
      var i = Kl(zt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Xb(u), c0(e, t);
      }, i;
    }
    function f0(e, t, a) {
      var i = Kl(zt, a);
      i.tag = cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SC(e), c0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SC(e), c0(e, t), typeof u != "function" && Wb(this);
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof u != "function" && (kr(e.lanes, Ve) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function sx(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new rR(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = qb.bind(null, e, t, a);
        Vn && Rp(e, a), t.then(s, s);
      }
    }
    function aR(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function iR(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === Ae && (a === U || a === ce || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function cx(e) {
      var t = e;
      do {
        if (t.tag === de && YT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function fx(e, t, a, i, u) {
      if ((e.mode & lt) === Ae) {
        if (e === t)
          e.flags |= Nn;
        else {
          if (e.flags |= Pe, a.flags |= Mo, a.flags &= ~(Bs | Vr), a.tag === $) {
            var s = a.alternate;
            if (s === null)
              a.tag = ht;
            else {
              var f = Kl(zt, Ve);
              f.tag = Oh, Xu(a, f, Ve);
            }
          }
          a.lanes = Ze(a.lanes, Ve);
        }
        return e;
      }
      return e.flags |= Nn, e.lanes = u, e;
    }
    function lR(e, t, a, i, u) {
      if (a.flags |= Vr, Vn && Rp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        iR(a), sr() && a.mode & lt && t1();
        var f = cx(t);
        if (f !== null) {
          f.flags &= ~tn, fx(f, t, a, e, u), f.mode & lt && sx(e, s, u), aR(f, e, s);
          return;
        } else {
          if (!ku(u)) {
            sx(e, s, u), $0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (sr() && a.mode & lt) {
        t1();
        var v = cx(t);
        if (v !== null) {
          (v.flags & Nn) === Me && (v.flags |= tn), fx(v, t, a, e, u), rg(ss(i, a));
          return;
        }
      }
      i = ss(i, a), Fb(i);
      var g = t;
      do {
        switch (g.tag) {
          case B: {
            var S = i;
            g.flags |= Nn;
            var k = xn(u);
            g.lanes = Ze(g.lanes, k);
            var R = ox(g, S, k);
            pg(g, R);
            return;
          }
          case $:
            var O = i, H = g.type, P = g.stateNode;
            if ((g.flags & Pe) === Me && (typeof H.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !cC(P))) {
              g.flags |= Nn;
              var he = xn(u);
              g.lanes = Ze(g.lanes, he);
              var ze = f0(g, O, he);
              pg(g, ze);
              return;
            }
            break;
        }
        g = g.return;
      } while (g !== null);
    }
    function uR() {
      return null;
    }
    var cp = y.ReactCurrentOwner, wi = !1, d0, fp, p0, v0, h0, cs, m0, dm;
    d0 = {}, fp = {}, p0 = {}, v0 = {}, h0 = {}, cs = !1, m0 = {}, dm = {};
    function Qr(e, t, a, i) {
      e === null ? t.child = _1(t, null, a, i) : t.child = Xc(t, e.child, a, i);
    }
    function oR(e, t, a, i) {
      t.child = Xc(t, e.child, null, i), t.child = Xc(t, null, a, i);
    }
    function dx(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, p = t.ref, v, g;
      Gc(t, u), Qi(t);
      {
        if (cp.current = t, ka(!0), v = tf(e, t, f, i, p, u), g = nf(), t.mode & Zt) {
          Sn(!0);
          try {
            v = tf(e, t, f, i, p, u), g = nf();
          } finally {
            Sn(!1);
          }
        }
        ka(!1);
      }
      return bl(), e !== null && !wi ? (U1(e, t, u), Zl(e, t, u)) : (sr() && g && Ky(t), t.flags |= Fi, Qr(e, t, v, u), t.child);
    }
    function px(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (pk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = ff(s), t.tag = je, t.type = f, S0(t, s), vx(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && yi(
            p,
            i,
            // Resolved props
            "prop",
            Mt(s)
          );
        }
        var v = tS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var g = a.type, S = g.propTypes;
        S && yi(
          S,
          i,
          // Resolved props
          "prop",
          Mt(g)
        );
      }
      var k = e.child, R = R0(e, u);
      if (!R) {
        var O = k.memoizedProps, H = a.compare;
        if (H = H !== null ? H : _e, H(O, i) && e.ref === t.ref)
          return Zl(e, t, u);
      }
      t.flags |= Fi;
      var P = hs(k, i);
      return P.ref = t.ref, P.return = t, t.child = P, P;
    }
    function vx(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === He) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var g = s && s.propTypes;
          g && yi(
            g,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var S = e.memoizedProps;
        if (_e(S, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (wi = !1, t.pendingProps = i = S, R0(e, u))
            (e.flags & Mo) !== Me && (wi = !0);
          else
            return t.lanes = e.lanes, Zl(e, t, u);
      }
      return y0(e, t, a, i, u);
    }
    function hx(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ae)
        if ((t.mode & lt) === Ae) {
          var f = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Rm(t, a);
        } else if (kr(a, br)) {
          var k = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = k;
          var R = s !== null ? s.baseLanes : a;
          Rm(t, R);
        } else {
          var p = null, v;
          if (s !== null) {
            var g = s.baseLanes;
            v = Ze(g, a);
          } else
            v = a;
          t.lanes = t.childLanes = br;
          var S = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = S, t.updateQueue = null, Rm(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = Ze(s.baseLanes, a), t.memoizedState = null) : O = a, Rm(t, O);
      }
      return Qr(e, t, u, a), t.child;
    }
    function sR(e, t, a) {
      var i = t.pendingProps;
      return Qr(e, t, i, a), t.child;
    }
    function cR(e, t, a) {
      var i = t.pendingProps.children;
      return Qr(e, t, i, a), t.child;
    }
    function fR(e, t, a) {
      {
        t.flags |= Ke;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Qr(e, t, s, a), t.child;
    }
    function mx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= xr, t.flags |= Wf);
    }
    function y0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var p = Pc(t, a, !0);
        f = Yc(t, p);
      }
      var v, g;
      Gc(t, u), Qi(t);
      {
        if (cp.current = t, ka(!0), v = tf(e, t, a, i, f, u), g = nf(), t.mode & Zt) {
          Sn(!0);
          try {
            v = tf(e, t, a, i, f, u), g = nf();
          } finally {
            Sn(!1);
          }
        }
        ka(!1);
      }
      return bl(), e !== null && !wi ? (U1(e, t, u), Zl(e, t, u)) : (sr() && g && Ky(t), t.flags |= Fi, Qr(e, t, v, u), t.child);
    }
    function yx(e, t, a, i, u) {
      {
        switch (Dk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Pe, t.flags |= Nn;
            var g = new Error("Simulated error coming from DevTools"), S = xn(u);
            t.lanes = Ze(t.lanes, S);
            var k = f0(t, ss(g, t), S);
            pg(t, k);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var R = a.propTypes;
          R && yi(
            R,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var O;
      rl(a) ? (O = !0, Th(t)) : O = !1, Gc(t, u);
      var H = t.stateNode, P;
      H === null ? (vm(e, t), T1(t, a, i), Rg(t, a, i, u), P = !0) : e === null ? P = jT(t, a, i, u) : P = HT(e, t, a, i, u);
      var he = g0(e, t, a, P, O, u);
      {
        var ze = t.stateNode;
        P && ze.props !== i && (cs || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), cs = !0);
      }
      return he;
    }
    function g0(e, t, a, i, u, s) {
      mx(e, t);
      var f = (t.flags & Pe) !== Me;
      if (!i && !f)
        return u && KS(t, a, !1), Zl(e, t, s);
      var p = t.stateNode;
      cp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ux();
      else {
        Qi(t);
        {
          if (ka(!0), v = p.render(), t.mode & Zt) {
            Sn(!0);
            try {
              p.render();
            } finally {
              Sn(!1);
            }
          }
          ka(!1);
        }
        bl();
      }
      return t.flags |= Fi, e !== null && f ? oR(e, t, v, s) : Qr(e, t, v, s), t.memoizedState = p.state, u && KS(t, a, !0), t.child;
    }
    function gx(e) {
      var t = e.stateNode;
      t.pendingContext ? XS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && XS(e, t.context, !1), Mg(e, t.containerInfo);
    }
    function dR(e, t, a) {
      if (gx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      m1(e, t), Fh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, g = t.updateQueue;
        if (g.baseState = v, t.memoizedState = v, t.flags & tn) {
          var S = ss(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Sx(e, t, p, a, S);
        } else if (p !== s) {
          var k = ss(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Sx(e, t, p, a, k);
        } else {
          mT(t);
          var R = _1(t, null, p, a);
          t.child = R;
          for (var O = R; O; )
            O.flags = O.flags & ~Ht | aa, O = O.sibling;
        }
      } else {
        if (Qc(), p === s)
          return Zl(e, t, a);
        Qr(e, t, p, a);
      }
      return t.child;
    }
    function Sx(e, t, a, i, u) {
      return Qc(), rg(u), t.flags |= tn, Qr(e, t, a, i), t.child;
    }
    function pR(e, t, a) {
      M1(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= Et), mx(e, t), Qr(e, t, f, a), t.child;
    }
    function vR(e, t) {
      return e === null && ng(t), null;
    }
    function hR(e, t, a, i) {
      vm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = vk(v), S = xi(v, u), k;
      switch (g) {
        case U:
          return S0(t, v), t.type = v = ff(v), k = y0(null, t, v, S, i), k;
        case $:
          return t.type = v = X0(v), k = yx(null, t, v, S, i), k;
        case ce:
          return t.type = v = q0(v), k = dx(null, t, v, S, i), k;
        case Re: {
          if (t.type !== t.elementType) {
            var R = v.propTypes;
            R && yi(
              R,
              S,
              // Resolved for outer only
              "prop",
              Mt(v)
            );
          }
          return k = px(
            null,
            t,
            v,
            xi(v.type, S),
            // The inner type can have defaults too
            i
          ), k;
        }
      }
      var O = "";
      throw v !== null && typeof v == "object" && v.$$typeof === He && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function mR(e, t, a, i, u) {
      vm(e, t), t.tag = $;
      var s;
      return rl(a) ? (s = !0, Th(t)) : s = !1, Gc(t, u), T1(t, a, i), Rg(t, a, i, u), g0(null, t, a, !0, s, u);
    }
    function yR(e, t, a, i) {
      vm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Pc(t, a, !1);
        s = Yc(t, f);
      }
      Gc(t, i);
      var p, v;
      Qi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var g = Mt(a) || "Unknown";
          d0[g] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), d0[g] = !0);
        }
        t.mode & Zt && Si.recordLegacyContextWarning(t, null), ka(!0), cp.current = t, p = tf(null, t, a, u, s, i), v = nf(), ka(!1);
      }
      if (bl(), t.flags |= Fi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var S = Mt(a) || "Unknown";
        fp[S] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), fp[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var k = Mt(a) || "Unknown";
          fp[k] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), fp[k] = !0);
        }
        t.tag = $, t.memoizedState = null, t.updateQueue = null;
        var R = !1;
        return rl(a) ? (R = !0, Th(t)) : R = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), w1(t, p), Rg(t, a, u, i), g0(null, t, a, !0, R, i);
      } else {
        if (t.tag = U, t.mode & Zt) {
          Sn(!0);
          try {
            p = tf(null, t, a, u, s, i), v = nf();
          } finally {
            Sn(!1);
          }
        }
        return sr() && v && Ky(t), Qr(null, t, p, i), S0(t, a), t.child;
      }
    }
    function S0(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ea();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), h0[u] || (h0[u] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Mt(t) || "Unknown";
          v0[f] || (m("%s: Function components do not support getDerivedStateFromProps.", f), v0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Mt(t) || "Unknown";
          p0[p] || (m("%s: Function components do not support contextType.", p), p0[p] = !0);
        }
      }
    }
    var x0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: ft
    };
    function C0(e) {
      return {
        baseLanes: e,
        cachePool: uR(),
        transitions: null
      };
    }
    function gR(e, t) {
      var a = null;
      return {
        baseLanes: Ze(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function SR(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ug(e, np);
    }
    function xR(e, t) {
      return Du(e.childLanes, t);
    }
    function xx(e, t, a) {
      var i = t.pendingProps;
      _k(t) && (t.flags |= Pe);
      var u = Ci.current, s = !1, f = (t.flags & Pe) !== Me;
      if (f || SR(u, e) ? (s = !0, t.flags &= ~Pe) : (e === null || e.memoizedState !== null) && (u = PT(u, z1)), u = Kc(u), Ku(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return RR(t, v);
        }
        var g = i.children, S = i.fallback;
        if (s) {
          var k = CR(t, g, S, a), R = t.child;
          return R.memoizedState = C0(a), t.memoizedState = x0, k;
        } else
          return E0(t, g);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var H = O.dehydrated;
          if (H !== null)
            return bR(e, t, f, i, H, O, a);
        }
        if (s) {
          var P = i.fallback, he = i.children, ze = wR(e, t, he, P, a), ke = t.child, pt = e.child.memoizedState;
          return ke.memoizedState = pt === null ? C0(a) : gR(pt, a), ke.childLanes = xR(e, a), t.memoizedState = x0, ze;
        } else {
          var ct = i.children, M = ER(e, t, ct, a);
          return t.memoizedState = null, M;
        }
      }
    }
    function E0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = w0(u, i);
      return s.return = e, e.child = s, s;
    }
    function CR(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & lt) === Ae && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & Fe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = io(a, u, i, null)) : (p = w0(f, u), v = io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function w0(e, t, a) {
      return CC(e, t, I, null);
    }
    function Cx(e, t) {
      return hs(e, t);
    }
    function ER(e, t, a, i) {
      var u = e.child, s = u.sibling, f = Cx(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === Ae && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ct) : p.push(s);
      }
      return t.child = f, f;
    }
    function wR(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, g;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & lt) === Ae && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var S = t.child;
        g = S, g.childLanes = I, g.pendingProps = v, t.mode & Fe && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = f.selfBaseDuration, g.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        g = Cx(f, v), g.subtreeFlags = f.subtreeFlags & Fn;
      var k;
      return p !== null ? k = hs(p, i) : (k = io(i, s, u, null), k.flags |= Ht), k.return = t, g.return = t, g.sibling = k, t.child = g, k;
    }
    function pm(e, t, a, i) {
      i !== null && rg(i), Xc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = E0(t, s);
      return f.flags |= Ht, t.memoizedState = null, f;
    }
    function TR(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = w0(f, s), v = io(i, s, u, null);
      return v.flags |= Ht, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & lt) !== Ae && Xc(t, e.child, null, u), v;
    }
    function RR(e, t, a) {
      return (e.mode & lt) === Ae ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : By(t) ? e.lanes = _l : e.lanes = br, null;
    }
    function bR(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & tn) {
          t.flags &= ~tn;
          var M = s0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return pm(e, t, f, M);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Pe, null;
          var Y = i.children, N = i.fallback, J = TR(e, t, Y, N, f), me = t.child;
          return me.memoizedState = C0(f), t.memoizedState = x0, J;
        }
      else {
        if (vT(), (t.mode & lt) === Ae)
          return pm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (By(u)) {
          var p, v, g;
          {
            var S = Mw(u);
            p = S.digest, v = S.message, g = S.stack;
          }
          var k;
          v ? k = new Error(v) : k = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var R = s0(k, p, g);
          return pm(e, t, f, R);
        }
        var O = kr(f, e.childLanes);
        if (wi || O) {
          var H = Tm();
          if (H !== null) {
            var P = oy(H, f);
            if (P !== ft && P !== s.retryLane) {
              s.retryLane = P;
              var he = zt;
              va(e, P), Xn(H, e, P, he);
            }
          }
          $0();
          var ze = s0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return pm(e, t, f, ze);
        } else if (YS(u)) {
          t.flags |= Pe, t.child = e.child;
          var ke = Kb.bind(null, e);
          return Nw(u, ke), null;
        } else {
          yT(t, u, s.treeContext);
          var pt = i.children, ct = E0(t, pt);
          return ct.flags |= aa, ct;
        }
      }
    }
    function Ex(e, t, a) {
      e.lanes = Ze(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ze(i.lanes, t)), og(e.return, t, a);
    }
    function kR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === de) {
          var u = i.memoizedState;
          u !== null && Ex(i, a, e);
        } else if (i.tag === We)
          Ex(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function DR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _R(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !m0[e])
        if (m0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function LR(e, t) {
      e !== void 0 && !dm[e] && (e !== "collapsed" && e !== "hidden" ? (dm[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (dm[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function wx(e, t) {
      {
        var a = Ln(e), i = !a && typeof ei(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function MR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ln(e)) {
          for (var a = 0; a < e.length; a++)
            if (!wx(e[a], a))
              return;
        } else {
          var i = ei(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!wx(s.value, f))
                  return;
                f++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function T0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function Tx(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      _R(u), LR(s, u), MR(f, u), Qr(e, t, f, a);
      var p = Ci.current, v = Ug(p, np);
      if (v)
        p = Og(p, np), t.flags |= Pe;
      else {
        var g = e !== null && (e.flags & Pe) !== Me;
        g && kR(t, t.child, a), p = Kc(p);
      }
      if (Ku(t, p), (t.mode & lt) === Ae)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var S = DR(t.child), k;
            S === null ? (k = t.child, t.child = null) : (k = S.sibling, S.sibling = null), T0(
              t,
              !1,
              // isBackwards
              k,
              S,
              s
            );
            break;
          }
          case "backwards": {
            var R = null, O = t.child;
            for (t.child = null; O !== null; ) {
              var H = O.alternate;
              if (H !== null && Qh(H) === null) {
                t.child = O;
                break;
              }
              var P = O.sibling;
              O.sibling = R, R = O, O = P;
            }
            T0(
              t,
              !0,
              // isBackwards
              R,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            T0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function NR(e, t, a) {
      Mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Xc(t, null, i, a) : Qr(e, t, i, a), t.child;
    }
    var Rx = !1;
    function zR(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || Rx || (Rx = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && yi(v, s, "prop", "Context.Provider");
      }
      if (d1(t, u, p), f !== null) {
        var g = f.value;
        if (Ce(g, p)) {
          if (f.children === s.children && !Eh())
            return Zl(e, t, a);
        } else
          kT(t, u, a);
      }
      var S = s.children;
      return Qr(e, t, S, a), t.child;
    }
    var bx = !1;
    function UR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (bx || (bx = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Gc(t, a);
      var f = jn(i);
      Qi(t);
      var p;
      return cp.current = t, ka(!0), p = s(f), ka(!1), bl(), t.flags |= Fi, Qr(e, t, p, a), t.child;
    }
    function dp() {
      wi = !0;
    }
    function vm(e, t) {
      (t.mode & lt) === Ae && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Ht);
    }
    function Zl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ux(), Tp(t.lanes), kr(a, t.childLanes) ? (FT(e, t), t.child) : null;
    }
    function OR(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ct) : s.push(e), a.flags |= Ht, a;
      }
    }
    function R0(e, t) {
      var a = e.lanes;
      return !!kr(a, t);
    }
    function AR(e, t, a) {
      switch (t.tag) {
        case B:
          gx(t), t.stateNode, Qc();
          break;
        case q:
          M1(t);
          break;
        case $: {
          var i = t.type;
          rl(i) && Th(t);
          break;
        }
        case W:
          Mg(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var u = t.memoizedProps.value, s = t.type._context;
          d1(t, s, u);
          break;
        }
        case Ue:
          {
            var f = kr(a, t.childLanes);
            f && (t.flags |= Ke);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case de: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ku(t, Kc(Ci.current)), t.flags |= Pe, null;
            var g = t.child, S = g.childLanes;
            if (kr(a, S))
              return xx(e, t, a);
            Ku(t, Kc(Ci.current));
            var k = Zl(e, t, a);
            return k !== null ? k.sibling : null;
          } else
            Ku(t, Kc(Ci.current));
          break;
        }
        case We: {
          var R = (e.flags & Pe) !== Me, O = kr(a, t.childLanes);
          if (R) {
            if (O)
              return Tx(e, t, a);
            t.flags |= Pe;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), Ku(t, Ci.current), O)
            break;
          return null;
        }
        case Ne:
        case qe:
          return t.lanes = I, hx(e, t, a);
      }
      return Zl(e, t, a);
    }
    function kx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return OR(e, t, tS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Eh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          wi = !0;
        else {
          var s = R0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Pe) === Me)
            return wi = !1, AR(e, t, a);
          (e.flags & Mo) !== Me ? wi = !0 : wi = !1;
        }
      } else if (wi = !1, sr() && oT(t)) {
        var f = t.index, p = sT();
        e1(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case ee:
          return yR(e, t, t.type, a);
        case vt: {
          var v = t.elementType;
          return hR(e, t, v, a);
        }
        case U: {
          var g = t.type, S = t.pendingProps, k = t.elementType === g ? S : xi(g, S);
          return y0(e, t, g, k, a);
        }
        case $: {
          var R = t.type, O = t.pendingProps, H = t.elementType === R ? O : xi(R, O);
          return yx(e, t, R, H, a);
        }
        case B:
          return dR(e, t, a);
        case q:
          return pR(e, t, a);
        case re:
          return vR(e, t);
        case de:
          return xx(e, t, a);
        case W:
          return NR(e, t, a);
        case ce: {
          var P = t.type, he = t.pendingProps, ze = t.elementType === P ? he : xi(P, he);
          return dx(e, t, P, ze, a);
        }
        case we:
          return sR(e, t, a);
        case se:
          return cR(e, t, a);
        case Ue:
          return fR(e, t, a);
        case ge:
          return zR(e, t, a);
        case De:
          return UR(e, t, a);
        case Re: {
          var ke = t.type, pt = t.pendingProps, ct = xi(ke, pt);
          if (t.type !== t.elementType) {
            var M = ke.propTypes;
            M && yi(
              M,
              ct,
              // Resolved for outer only
              "prop",
              Mt(ke)
            );
          }
          return ct = xi(ke.type, ct), px(e, t, ke, ct, a);
        }
        case je:
          return vx(e, t, t.type, t.pendingProps, a);
        case ht: {
          var Y = t.type, N = t.pendingProps, J = t.elementType === Y ? N : xi(Y, N);
          return mR(e, t, Y, J, a);
        }
        case We:
          return Tx(e, t, a);
        case Tt:
          break;
        case Ne:
          return hx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function rf(e) {
      e.flags |= Ke;
    }
    function Dx(e) {
      e.flags |= xr, e.flags |= Wf;
    }
    var _x, b0, Lx, Mx;
    _x = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === q || u.tag === re)
          iw(e, u.stateNode);
        else if (u.tag !== W) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, b0 = function(e, t) {
    }, Lx = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Ng(), v = uw(f, a, s, i, u, p);
        t.updateQueue = v, v && rf(t);
      }
    }, Mx = function(e, t, a, i) {
      a !== i && rf(t);
    };
    function pp(e, t) {
      if (!sr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = Me;
      if (t) {
        if ((e.mode & Fe) !== Ae) {
          for (var v = e.selfBaseDuration, g = e.child; g !== null; )
            a = Ze(a, Ze(g.lanes, g.childLanes)), i |= g.subtreeFlags & Fn, i |= g.flags & Fn, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = Ze(a, Ze(S.lanes, S.childLanes)), i |= S.subtreeFlags & Fn, i |= S.flags & Fn, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Fe) !== Ae) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ze(a, Ze(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ze(a, Ze(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function jR(e, t, a) {
      if (ET() && (t.mode & lt) !== Ae && (t.flags & Pe) === Me)
        return u1(t), Qc(), t.flags |= tn | Vr | Nn, !1;
      var i = _h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (xT(t), fr(t), (t.mode & Fe) !== Ae) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Qc(), (t.flags & Pe) === Me && (t.memoizedState = null), t.flags |= Ke, fr(t), (t.mode & Fe) !== Ae) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return o1(), !0;
    }
    function Nx(e, t, a) {
      var i = t.pendingProps;
      switch (Zy(t), t.tag) {
        case ee:
        case vt:
        case je:
        case U:
        case ce:
        case we:
        case se:
        case Ue:
        case De:
        case Re:
          return fr(t), null;
        case $: {
          var u = t.type;
          return rl(u) && wh(t), fr(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (qc(t), Gy(t), jg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = _h(t);
            if (f)
              rf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & tn) !== Me) && (t.flags |= ra, o1());
            }
          }
          return b0(e, t), fr(t), null;
        }
        case q: {
          zg(t);
          var v = L1(), g = t.type;
          if (e !== null && t.stateNode != null)
            Lx(e, t, g, i, v), e.ref !== t.ref && Dx(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return fr(t), null;
            }
            var S = Ng(), k = _h(t);
            if (k)
              gT(t, v, S) && rf(t);
            else {
              var R = aw(g, i, v, S, t);
              _x(R, t, !1, !1), t.stateNode = R, lw(R, g, i, v) && rf(t);
            }
            t.ref !== null && Dx(t);
          }
          return fr(t), null;
        }
        case re: {
          var O = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            Mx(e, t, H, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = L1(), he = Ng(), ze = _h(t);
            ze ? ST(t) && rf(t) : t.stateNode = ow(O, P, he, t);
          }
          return fr(t), null;
        }
        case de: {
          Zc(t);
          var ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var pt = jR(e, t, ke);
            if (!pt)
              return t.flags & Nn ? t : null;
          }
          if ((t.flags & Pe) !== Me)
            return t.lanes = a, (t.mode & Fe) !== Ae && o0(t), t;
          var ct = ke !== null, M = e !== null && e.memoizedState !== null;
          if (ct !== M && ct) {
            var Y = t.child;
            if (Y.flags |= Vi, (t.mode & lt) !== Ae) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !nt);
              N || Ug(Ci.current, z1) ? Hb() : $0();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= Ke), fr(t), (t.mode & Fe) !== Ae && ct) {
            var me = t.child;
            me !== null && (t.treeBaseDuration -= me.treeBaseDuration);
          }
          return null;
        }
        case W:
          return qc(t), b0(e, t), e === null && tT(t.stateNode.containerInfo), fr(t), null;
        case ge:
          var fe = t.type._context;
          return ug(fe, t), fr(t), null;
        case ht: {
          var Be = t.type;
          return rl(Be) && wh(t), fr(t), null;
        }
        case We: {
          Zc(t);
          var Qe = t.memoizedState;
          if (Qe === null)
            return fr(t), null;
          var _t = (t.flags & Pe) !== Me, St = Qe.rendering;
          if (St === null)
            if (_t)
              pp(Qe, !1);
            else {
              var Tn = Vb() && (e === null || (e.flags & Pe) === Me);
              if (!Tn)
                for (var xt = t.child; xt !== null; ) {
                  var hn = Qh(xt);
                  if (hn !== null) {
                    _t = !0, t.flags |= Pe, pp(Qe, !1);
                    var Mr = hn.updateQueue;
                    return Mr !== null && (t.updateQueue = Mr, t.flags |= Ke), t.subtreeFlags = Me, VT(t, a), Ku(t, Og(Ci.current, np)), t.child;
                  }
                  xt = xt.sibling;
                }
              Qe.tail !== null && Kt() > Jx() && (t.flags |= Pe, _t = !0, pp(Qe, !1), t.lanes = ld);
            }
          else {
            if (!_t) {
              var mr = Qh(St);
              if (mr !== null) {
                t.flags |= Pe, _t = !0;
                var Oa = mr.updateQueue;
                if (Oa !== null && (t.updateQueue = Oa, t.flags |= Ke), pp(Qe, !0), Qe.tail === null && Qe.tailMode === "hidden" && !St.alternate && !sr())
                  return fr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Kt() * 2 - Qe.renderingStartTime > Jx() && a !== br && (t.flags |= Pe, _t = !0, pp(Qe, !1), t.lanes = ld);
            }
            if (Qe.isBackwards)
              St.sibling = t.child, t.child = St;
            else {
              var Xr = Qe.last;
              Xr !== null ? Xr.sibling = St : t.child = St, Qe.last = St;
            }
          }
          if (Qe.tail !== null) {
            var qr = Qe.tail;
            Qe.rendering = qr, Qe.tail = qr.sibling, Qe.renderingStartTime = Kt(), qr.sibling = null;
            var Nr = Ci.current;
            return _t ? Nr = Og(Nr, np) : Nr = Kc(Nr), Ku(t, Nr), qr;
          }
          return fr(t), null;
        }
        case Tt:
          break;
        case Ne:
        case qe: {
          Y0(t);
          var ru = t.memoizedState, df = ru !== null;
          if (e !== null) {
            var _p = e.memoizedState, fl = _p !== null;
            fl !== df && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= Vi);
          }
          return !df || (t.mode & lt) === Ae ? fr(t) : kr(cl, br) && (fr(t), t.subtreeFlags & (Ht | Ke) && (t.flags |= Vi)), null;
        }
        case et:
          return null;
        case ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function HR(e, t, a) {
      switch (Zy(t), t.tag) {
        case $: {
          var i = t.type;
          rl(i) && wh(t);
          var u = t.flags;
          return u & Nn ? (t.flags = u & ~Nn | Pe, (t.mode & Fe) !== Ae && o0(t), t) : null;
        }
        case B: {
          t.stateNode, qc(t), Gy(t), jg();
          var s = t.flags;
          return (s & Nn) !== Me && (s & Pe) === Me ? (t.flags = s & ~Nn | Pe, t) : null;
        }
        case q:
          return zg(t), null;
        case de: {
          Zc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Qc();
          }
          var p = t.flags;
          return p & Nn ? (t.flags = p & ~Nn | Pe, (t.mode & Fe) !== Ae && o0(t), t) : null;
        }
        case We:
          return Zc(t), null;
        case W:
          return qc(t), null;
        case ge:
          var v = t.type._context;
          return ug(v, t), null;
        case Ne:
        case qe:
          return Y0(t), null;
        case et:
          return null;
        default:
          return null;
      }
    }
    function zx(e, t, a) {
      switch (Zy(t), t.tag) {
        case $: {
          var i = t.type.childContextTypes;
          i != null && wh(t);
          break;
        }
        case B: {
          t.stateNode, qc(t), Gy(t), jg();
          break;
        }
        case q: {
          zg(t);
          break;
        }
        case W:
          qc(t);
          break;
        case de:
          Zc(t);
          break;
        case We:
          Zc(t);
          break;
        case ge:
          var u = t.type._context;
          ug(u, t);
          break;
        case Ne:
        case qe:
          Y0(t);
          break;
      }
    }
    var Ux = null;
    Ux = /* @__PURE__ */ new Set();
    var hm = !1, dr = !1, FR = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, af = null, lf = null;
    function VR(e) {
      Tl(null, function() {
        throw e;
      }), If();
    }
    var BR = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Fe)
        try {
          ol(), t.componentWillUnmount();
        } finally {
          ul(e);
        }
      else
        t.componentWillUnmount();
    };
    function Ox(e, t) {
      try {
        eo(Yn, e);
      } catch (a) {
        Pt(e, t, a);
      }
    }
    function k0(e, t, a) {
      try {
        BR(e, a);
      } catch (i) {
        Pt(e, t, i);
      }
    }
    function PR(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Pt(e, t, i);
      }
    }
    function Ax(e, t) {
      try {
        Hx(e);
      } catch (a) {
        Pt(e, t, a);
      }
    }
    function uf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (at && ir && e.mode & Fe)
              try {
                ol(), i = a(null);
              } finally {
                ul(e);
              }
            else
              i = a(null);
          } catch (u) {
            Pt(e, t, u);
          }
          typeof i == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          a.current = null;
    }
    function mm(e, t, a) {
      try {
        a();
      } catch (i) {
        Pt(e, t, i);
      }
    }
    var jx = !1;
    function YR(e, t) {
      nw(e.containerInfo), Ee = t, $R();
      var a = jx;
      return jx = !1, a;
    }
    function $R() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & xu) !== Me && t !== null ? (t.return = e, Ee = t) : IR();
      }
    }
    function IR() {
      for (; Ee !== null; ) {
        var e = Ee;
        kt(e);
        try {
          QR(e);
        } catch (a) {
          Pt(e, e.return, a);
        }
        gn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function QR(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ra) !== Me) {
        switch (kt(e), e.tag) {
          case U:
          case ce:
          case je:
            break;
          case $: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cs && (s.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : xi(e.type, i), u);
              {
                var p = Ux;
                f === void 0 && !p.has(e.type) && (p.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case B: {
            {
              var v = e.stateNode;
              kw(v.containerInfo);
            }
            break;
          }
          case q:
          case re:
          case W:
          case ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        gn();
      }
    }
    function Ti(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & cr) !== ha ? Xs(t) : (e & Yn) !== ha && qs(t), (e & al) !== ha && bp(!0), mm(t, a, p), (e & al) !== ha && bp(!1), (e & cr) !== ha ? Dv() : (e & Yn) !== ha && Cu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function eo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & cr) !== ha ? kv(t) : (e & Yn) !== ha && _v(t);
            var f = s.create;
            (e & al) !== ha && bp(!0), s.destroy = f(), (e & al) !== ha && bp(!1), (e & cr) !== ha ? rd() : (e & Yn) !== ha && Lv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Yn) !== Me ? v = "useLayoutEffect" : (s.tag & al) !== Me ? v = "useInsertionEffect" : v = "useEffect";
                var g = void 0;
                p === null ? g = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? g = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : g = " You returned: " + p, m("%s must not return anything besides a function, which is used for clean-up.%s", v, g);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function WR(e, t) {
      if ((t.flags & Ke) !== Me)
        switch (t.tag) {
          case Ue: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ix(), p = t.alternate === null ? "mount" : "update";
            ax() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case B:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                  case Ue:
                    var S = v.stateNode;
                    S.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function GR(e, t, a, i) {
      if ((a.flags & Zn) !== Me)
        switch (a.tag) {
          case U:
          case ce:
          case je: {
            if (!dr)
              if (a.mode & Fe)
                try {
                  ol(), eo(Yn | Pn, a);
                } finally {
                  ul(a);
                }
              else
                eo(Yn | Pn, a);
            break;
          }
          case $: {
            var u = a.stateNode;
            if (a.flags & Ke && !dr)
              if (t === null)
                if (a.type === a.elementType && !cs && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & Fe)
                  try {
                    ol(), u.componentDidMount();
                  } finally {
                    ul(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : xi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cs && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & Fe)
                  try {
                    ol(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ul(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !cs && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), g1(a, p, u));
            break;
          }
          case B: {
            var v = a.updateQueue;
            if (v !== null) {
              var g = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    g = a.child.stateNode;
                    break;
                  case $:
                    g = a.child.stateNode;
                    break;
                }
              g1(a, v, g);
            }
            break;
          }
          case q: {
            var S = a.stateNode;
            if (t === null && a.flags & Ke) {
              var k = a.type, R = a.memoizedProps;
              pw(S, k, R);
            }
            break;
          }
          case re:
            break;
          case W:
            break;
          case Ue: {
            {
              var O = a.memoizedProps, H = O.onCommit, P = O.onRender, he = a.stateNode.effectDuration, ze = ix(), ke = t === null ? "mount" : "update";
              ax() && (ke = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof H == "function" && H(a.memoizedProps.id, ke, he, ze), Ib(a);
                var pt = a.return;
                e:
                  for (; pt !== null; ) {
                    switch (pt.tag) {
                      case B:
                        var ct = pt.stateNode;
                        ct.effectDuration += he;
                        break e;
                      case Ue:
                        var M = pt.stateNode;
                        M.effectDuration += he;
                        break e;
                    }
                    pt = pt.return;
                  }
              }
            }
            break;
          }
          case de: {
            nb(e, a);
            break;
          }
          case We:
          case ht:
          case Tt:
          case Ne:
          case qe:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      dr || a.flags & xr && Hx(a);
    }
    function XR(e) {
      switch (e.tag) {
        case U:
        case ce:
        case je: {
          if (e.mode & Fe)
            try {
              ol(), Ox(e, e.return);
            } finally {
              ul(e);
            }
          else
            Ox(e, e.return);
          break;
        }
        case $: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && PR(e, e.return, t), Ax(e, e.return);
          break;
        }
        case q: {
          Ax(e, e.return);
          break;
        }
      }
    }
    function qR(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? ww(u) : Rw(i.stateNode, i.memoizedProps);
            } catch (f) {
              Pt(e, e.return, f);
            }
          }
        } else if (i.tag === re) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Tw(s) : bw(s, i.memoizedProps);
            } catch (f) {
              Pt(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Hx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Fe)
            try {
              ol(), u = t(i);
            } finally {
              ul(e);
            }
          else
            u = t(i);
          typeof u == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function KR(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Fx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Fx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && aT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function ZR(e) {
      for (var t = e.return; t !== null; ) {
        if (Vx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vx(e) {
      return e.tag === q || e.tag === B || e.tag === W;
    }
    function Bx(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Vx(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== re && t.tag !== Xe; ) {
            if (t.flags & Ht || t.child === null || t.tag === W)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Ht))
            return t.stateNode;
        }
    }
    function JR(e) {
      var t = ZR(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & Et && (PS(a), t.flags &= ~Et);
          var i = Bx(e);
          _0(e, i, a);
          break;
        }
        case B:
        case W: {
          var u = t.stateNode.containerInfo, s = Bx(e);
          D0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function D0(e, t, a) {
      var i = e.tag, u = i === q || i === re;
      if (u) {
        var s = e.stateNode;
        t ? Sw(a, s, t) : yw(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          D0(f, t, a);
          for (var p = f.sibling; p !== null; )
            D0(p, t, a), p = p.sibling;
        }
      }
    }
    function _0(e, t, a) {
      var i = e.tag, u = i === q || i === re;
      if (u) {
        var s = e.stateNode;
        t ? gw(a, s, t) : mw(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          _0(f, t, a);
          for (var p = f.sibling; p !== null; )
            _0(p, t, a), p = p.sibling;
        }
      }
    }
    var pr = null, Ri = !1;
    function eb(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case q: {
                pr = i.stateNode, Ri = !1;
                break e;
              }
              case B: {
                pr = i.stateNode.containerInfo, Ri = !0;
                break e;
              }
              case W: {
                pr = i.stateNode.containerInfo, Ri = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Px(e, t, a), pr = null, Ri = !1;
      }
      KR(a);
    }
    function to(e, t, a) {
      for (var i = a.child; i !== null; )
        Px(e, t, i), i = i.sibling;
    }
    function Px(e, t, a) {
      switch (td(a), a.tag) {
        case q:
          dr || uf(a, t);
        case re: {
          {
            var i = pr, u = Ri;
            pr = null, to(e, t, a), pr = i, Ri = u, pr !== null && (Ri ? Cw(pr, a.stateNode) : xw(pr, a.stateNode));
          }
          return;
        }
        case Xe: {
          pr !== null && (Ri ? Ew(pr, a.stateNode) : Vy(pr, a.stateNode));
          return;
        }
        case W: {
          {
            var s = pr, f = Ri;
            pr = a.stateNode.containerInfo, Ri = !0, to(e, t, a), pr = s, Ri = f;
          }
          return;
        }
        case U:
        case ce:
        case Re:
        case je: {
          if (!dr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var g = v.next, S = g;
                do {
                  var k = S, R = k.destroy, O = k.tag;
                  R !== void 0 && ((O & al) !== ha ? mm(a, t, R) : (O & Yn) !== ha && (qs(a), a.mode & Fe ? (ol(), mm(a, t, R), ul(a)) : mm(a, t, R), Cu())), S = S.next;
                } while (S !== g);
              }
            }
          }
          to(e, t, a);
          return;
        }
        case $: {
          if (!dr) {
            uf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && k0(a, t, H);
          }
          to(e, t, a);
          return;
        }
        case Tt: {
          to(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var P = dr;
            dr = P || a.memoizedState !== null, to(e, t, a), dr = P;
          } else
            to(e, t, a);
          break;
        }
        default: {
          to(e, t, a);
          return;
        }
      }
    }
    function tb(e) {
      e.memoizedState;
    }
    function nb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Bw(s);
          }
        }
      }
    }
    function Yx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new FR()), t.forEach(function(i) {
          var u = Zb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Vn)
              if (af !== null && lf !== null)
                Rp(lf, af);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function rb(e, t, a) {
      af = a, lf = e, kt(t), $x(t, e), kt(t), af = null, lf = null;
    }
    function bi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            eb(e, t, s);
          } catch (v) {
            Pt(s, t, v);
          }
        }
      var f = Fm();
      if (t.subtreeFlags & wr)
        for (var p = t.child; p !== null; )
          kt(p), $x(p, e), p = p.sibling;
      kt(f);
    }
    function $x(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case U:
        case ce:
        case Re:
        case je: {
          if (bi(t, e), sl(e), u & Ke) {
            try {
              Ti(al | Pn, e, e.return), eo(al | Pn, e);
            } catch (Be) {
              Pt(e, e.return, Be);
            }
            if (e.mode & Fe) {
              try {
                ol(), Ti(Yn | Pn, e, e.return);
              } catch (Be) {
                Pt(e, e.return, Be);
              }
              ul(e);
            } else
              try {
                Ti(Yn | Pn, e, e.return);
              } catch (Be) {
                Pt(e, e.return, Be);
              }
          }
          return;
        }
        case $: {
          bi(t, e), sl(e), u & xr && i !== null && uf(i, i.return);
          return;
        }
        case q: {
          bi(t, e), sl(e), u & xr && i !== null && uf(i, i.return);
          {
            if (e.flags & Et) {
              var s = e.stateNode;
              try {
                PS(s);
              } catch (Be) {
                Pt(e, e.return, Be);
              }
            }
            if (u & Ke) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    vw(f, S, g, v, p, e);
                  } catch (Be) {
                    Pt(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case re: {
          if (bi(t, e), sl(e), u & Ke) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var k = e.stateNode, R = e.memoizedProps, O = i !== null ? i.memoizedProps : R;
            try {
              hw(k, O, R);
            } catch (Be) {
              Pt(e, e.return, Be);
            }
          }
          return;
        }
        case B: {
          if (bi(t, e), sl(e), u & Ke && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                Vw(t.containerInfo);
              } catch (Be) {
                Pt(e, e.return, Be);
              }
          }
          return;
        }
        case W: {
          bi(t, e), sl(e);
          return;
        }
        case de: {
          bi(t, e), sl(e);
          var P = e.child;
          if (P.flags & Vi) {
            var he = P.stateNode, ze = P.memoizedState, ke = ze !== null;
            if (he.isHidden = ke, ke) {
              var pt = P.alternate !== null && P.alternate.memoizedState !== null;
              pt || jb();
            }
          }
          if (u & Ke) {
            try {
              tb(e);
            } catch (Be) {
              Pt(e, e.return, Be);
            }
            Yx(e);
          }
          return;
        }
        case Ne: {
          var ct = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var M = dr;
            dr = M || ct, bi(t, e), dr = M;
          } else
            bi(t, e);
          if (sl(e), u & Vi) {
            var Y = e.stateNode, N = e.memoizedState, J = N !== null, me = e;
            if (Y.isHidden = J, J && !ct && (me.mode & lt) !== Ae) {
              Ee = me;
              for (var fe = me.child; fe !== null; )
                Ee = fe, ib(fe), fe = fe.sibling;
            }
            qR(me, J);
          }
          return;
        }
        case We: {
          bi(t, e), sl(e), u & Ke && Yx(e);
          return;
        }
        case Tt:
          return;
        default: {
          bi(t, e), sl(e);
          return;
        }
      }
    }
    function sl(e) {
      var t = e.flags;
      if (t & Ht) {
        try {
          JR(e);
        } catch (a) {
          Pt(e, e.return, a);
        }
        e.flags &= ~Ht;
      }
      t & aa && (e.flags &= ~aa);
    }
    function ab(e, t, a) {
      af = a, lf = t, Ee = e, Ix(e, t, a), af = null, lf = null;
    }
    function Ix(e, t, a) {
      for (var i = (e.mode & lt) !== Ae; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || hm;
          if (p) {
            L0(e, t, a);
            continue;
          } else {
            var v = u.alternate, g = v !== null && v.memoizedState !== null, S = g || dr, k = hm, R = dr;
            hm = p, dr = S, dr && !R && (Ee = u, lb(u));
            for (var O = s; O !== null; )
              Ee = O, Ix(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            Ee = u, hm = k, dr = R, L0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Zn) !== Me && s !== null ? (s.return = u, Ee = s) : L0(e, t, a);
      }
    }
    function L0(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & Zn) !== Me) {
          var u = i.alternate;
          kt(i);
          try {
            GR(t, u, i, a);
          } catch (f) {
            Pt(i, i.return, f);
          }
          gn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function ib(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case U:
          case ce:
          case Re:
          case je: {
            if (t.mode & Fe)
              try {
                ol(), Ti(Yn, t, t.return);
              } finally {
                ul(t);
              }
            else
              Ti(Yn, t, t.return);
            break;
          }
          case $: {
            uf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && k0(t, t.return, i);
            break;
          }
          case q: {
            uf(t, t.return);
            break;
          }
          case Ne: {
            var u = t.memoizedState !== null;
            if (u) {
              Qx(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : Qx(e);
      }
    }
    function Qx(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function lb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            Wx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : Wx(e);
      }
    }
    function Wx(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        kt(t);
        try {
          XR(t);
        } catch (i) {
          Pt(t, t.return, i);
        }
        if (gn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function ub(e, t, a, i) {
      Ee = t, ob(t, e, a, i);
    }
    function ob(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & ia) !== Me && s !== null ? (s.return = u, Ee = s) : sb(e, t, a, i);
      }
    }
    function sb(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & Qt) !== Me) {
          kt(u);
          try {
            cb(t, u, a, i);
          } catch (f) {
            Pt(u, u.return, f);
          }
          gn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function cb(e, t, a, i) {
      switch (t.tag) {
        case U:
        case ce:
        case je: {
          if (t.mode & Fe) {
            u0();
            try {
              eo(cr | Pn, t);
            } finally {
              l0(t);
            }
          } else
            eo(cr | Pn, t);
          break;
        }
      }
    }
    function fb(e) {
      Ee = e, db();
    }
    function db() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Ct) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, hb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & ia) !== Me && t !== null ? (t.return = e, Ee = t) : pb();
      }
    }
    function pb() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & Qt) !== Me && (kt(e), vb(e), gn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function vb(e) {
      switch (e.tag) {
        case U:
        case ce:
        case je: {
          e.mode & Fe ? (u0(), Ti(cr | Pn, e, e.return), l0(e)) : Ti(cr | Pn, e, e.return);
          break;
        }
      }
    }
    function hb(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        kt(a), yb(a, t), gn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : mb(e);
      }
    }
    function mb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (Fx(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function yb(e, t) {
      switch (e.tag) {
        case U:
        case ce:
        case je: {
          e.mode & Fe ? (u0(), Ti(cr, e, t), l0(e)) : Ti(cr, e, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case U:
        case ce:
        case je: {
          try {
            eo(Yn | Pn, e);
          } catch (a) {
            Pt(e, e.return, a);
          }
          break;
        }
        case $: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Pt(e, e.return, a);
          }
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case U:
        case ce:
        case je: {
          try {
            eo(cr | Pn, e);
          } catch (t) {
            Pt(e, e.return, t);
          }
          break;
        }
      }
    }
    function xb(e) {
      switch (e.tag) {
        case U:
        case ce:
        case je: {
          try {
            Ti(Yn | Pn, e, e.return);
          } catch (a) {
            Pt(e, e.return, a);
          }
          break;
        }
        case $: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && k0(e, e.return, t);
          break;
        }
      }
    }
    function Cb(e) {
      switch (e.tag) {
        case U:
        case ce:
        case je:
          try {
            Ti(cr | Pn, e, e.return);
          } catch (t) {
            Pt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var vp = Symbol.for;
      vp("selector.component"), vp("selector.has_pseudo_class"), vp("selector.role"), vp("selector.test_id"), vp("selector.text");
    }
    var Eb = [];
    function wb() {
      Eb.forEach(function(e) {
        return e();
      });
    }
    var Tb = y.ReactCurrentActQueue;
    function Rb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Gx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Tb.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var bb = Math.ceil, M0 = y.ReactCurrentDispatcher, N0 = y.ReactCurrentOwner, vr = y.ReactCurrentBatchConfig, ki = y.ReactCurrentActQueue, Qn = (
      /*             */
      0
    ), Xx = (
      /*               */
      1
    ), hr = (
      /*                */
      2
    ), Ka = (
      /*                */
      4
    ), Jl = 0, hp = 1, fs = 2, ym = 3, mp = 4, qx = 5, z0 = 6, dt = Qn, Wr = null, on = null, Wn = I, cl = I, U0 = Iu(I), Gn = Jl, yp = null, gm = I, gp = I, Sm = I, Sp = null, ma = null, O0 = 0, Kx = 500, Zx = 1 / 0, kb = 500, eu = null;
    function xp() {
      Zx = Kt() + kb;
    }
    function Jx() {
      return Zx;
    }
    var xm = !1, A0 = null, of = null, ds = !1, no = null, Cp = I, j0 = [], H0 = null, Db = 50, Ep = 0, F0 = null, V0 = !1, Cm = !1, _b = 50, sf = 0, Em = null, wp = zt, wm = I, eC = !1;
    function Tm() {
      return Wr;
    }
    function Gr() {
      return (dt & (hr | Ka)) !== Qn ? Kt() : (wp !== zt || (wp = Kt()), wp);
    }
    function ro(e) {
      var t = e.mode;
      if ((t & lt) === Ae)
        return Ve;
      if ((dt & hr) !== Qn && Wn !== I)
        return xn(Wn);
      var a = RT() !== TT;
      if (a) {
        if (vr.transition !== null) {
          var i = vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return wm === ft && (wm = sd()), wm;
      }
      var u = sa();
      if (u !== ft)
        return u;
      var s = sw();
      return s;
    }
    function Lb(e) {
      var t = e.mode;
      return (t & lt) === Ae ? Ve : uy();
    }
    function Xn(e, t, a, i) {
      ek(), eC && m("useInsertionEffect must not schedule updates."), V0 && (Cm = !0), Al(e, a, i), (dt & hr) !== I && e === Wr ? rk(t) : (Vn && vd(e, t, a), ak(t), e === Wr && ((dt & hr) === Qn && (gp = Ze(gp, a)), Gn === mp && ao(e, Wn)), ya(e, i), a === Ve && dt === Qn && (t.mode & lt) === Ae && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ki.isBatchingLegacy && (xp(), JS()));
    }
    function Mb(e, t, a) {
      var i = e.current;
      i.lanes = t, Al(e, t, a), ya(e, a);
    }
    function Nb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (dt & hr) !== Qn
      );
    }
    function ya(e, t) {
      var a = e.callbackNode;
      ay(e, t);
      var i = jo(e, e === Wr ? Wn : I);
      if (i === I) {
        a !== null && mC(a), e.callbackNode = null, e.callbackPriority = ft;
        return;
      }
      var u = pn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ki.current !== null && a !== W0)) {
        a == null && s !== Ve && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mC(a);
      var f;
      if (u === Ve)
        e.tag === Qu ? (ki.isBatchingLegacy !== null && (ki.didScheduleLegacyUpdate = !0), uT(rC.bind(null, e))) : ZS(rC.bind(null, e)), ki.current !== null ? ki.current.push(Wu) : fw(function() {
          (dt & (hr | Ka)) === Qn && Wu();
        }), f = null;
      else {
        var p;
        switch (Po(i)) {
          case Jn:
            p = Qs;
            break;
          case Bn:
            p = Yr;
            break;
          case di:
            p = Ba;
            break;
          case Vo:
            p = Pi;
            break;
          default:
            p = Ba;
            break;
        }
        f = G0(p, tC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tC(e, t) {
      if (eR(), wp = zt, wm = I, (dt & (hr | Ka)) !== Qn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = nu();
      if (i && e.callbackNode !== a)
        return null;
      var u = jo(e, e === Wr ? Wn : I);
      if (u === I)
        return null;
      var s = !Fo(e, u) && !Av(e, u) && !t, f = s ? Pb(e, u) : bm(e, u);
      if (f !== Jl) {
        if (f === fs) {
          var p = ud(e);
          p !== I && (u = p, f = B0(e, p));
        }
        if (f === hp) {
          var v = yp;
          throw ps(e, I), ao(e, u), ya(e, Kt()), v;
        }
        if (f === z0)
          ao(e, u);
        else {
          var g = !Fo(e, u), S = e.current.alternate;
          if (g && !Ub(S)) {
            if (f = bm(e, u), f === fs) {
              var k = ud(e);
              k !== I && (u = k, f = B0(e, k));
            }
            if (f === hp) {
              var R = yp;
              throw ps(e, I), ao(e, u), ya(e, Kt()), R;
            }
          }
          e.finishedWork = S, e.finishedLanes = u, zb(e, f, u);
        }
      }
      return ya(e, Kt()), e.callbackNode === a ? tC.bind(null, e) : null;
    }
    function B0(e, t) {
      var a = Sp;
      if (En(e)) {
        var i = ps(e, t);
        i.flags |= tn, eT(e.containerInfo);
      }
      var u = bm(e, t);
      if (u !== fs) {
        var s = ma;
        ma = a, s !== null && nC(s);
      }
      return u;
    }
    function nC(e) {
      ma === null ? ma = e : ma.push.apply(ma, e);
    }
    function zb(e, t, a) {
      switch (t) {
        case Jl:
        case hp:
          throw new Error("Root did not complete. This is a bug in React.");
        case fs: {
          vs(e, ma, eu);
          break;
        }
        case ym: {
          if (ao(e, a), mc(a) && // do not delay if we're inside an act() scope
          !yC()) {
            var i = O0 + Kx - Kt();
            if (i > 10) {
              var u = jo(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!Ol(s, a)) {
                Gr(), dd(e, s);
                break;
              }
              e.timeoutHandle = Hy(vs.bind(null, e, ma, eu), i);
              break;
            }
          }
          vs(e, ma, eu);
          break;
        }
        case mp: {
          if (ao(e, a), Ov(a))
            break;
          if (!yC()) {
            var f = Uv(e, a), p = f, v = Kt() - p, g = Jb(v) - v;
            if (g > 10) {
              e.timeoutHandle = Hy(vs.bind(null, e, ma, eu), g);
              break;
            }
          }
          vs(e, ma, eu);
          break;
        }
        case qx: {
          vs(e, ma, eu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ub(e) {
      for (var t = e; ; ) {
        if (t.flags & Lo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Lo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ao(e, t) {
      t = Du(t, Sm), t = Du(t, gp), fd(e, t);
    }
    function rC(e) {
      if (tR(), (dt & (hr | Ka)) !== Qn)
        throw new Error("Should not already be working.");
      nu();
      var t = jo(e, I);
      if (!kr(t, Ve))
        return ya(e, Kt()), null;
      var a = bm(e, t);
      if (e.tag !== Qu && a === fs) {
        var i = ud(e);
        i !== I && (t = i, a = B0(e, i));
      }
      if (a === hp) {
        var u = yp;
        throw ps(e, I), ao(e, t), ya(e, Kt()), u;
      }
      if (a === z0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vs(e, ma, eu), ya(e, Kt()), null;
    }
    function Ob(e, t) {
      t !== I && (_u(e, Ze(t, Ve)), ya(e, Kt()), (dt & (hr | Ka)) === Qn && (xp(), Wu()));
    }
    function P0(e, t) {
      var a = dt;
      dt |= Xx;
      try {
        return e(t);
      } finally {
        dt = a, dt === Qn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ki.isBatchingLegacy && (xp(), JS());
      }
    }
    function Ab(e, t, a, i, u) {
      var s = sa(), f = vr.transition;
      try {
        return vr.transition = null, Cn(Jn), e(t, a, i, u);
      } finally {
        Cn(s), vr.transition = f, dt === Qn && xp();
      }
    }
    function tu(e) {
      no !== null && no.tag === Qu && (dt & (hr | Ka)) === Qn && nu();
      var t = dt;
      dt |= Xx;
      var a = vr.transition, i = sa();
      try {
        return vr.transition = null, Cn(Jn), e ? e() : void 0;
      } finally {
        Cn(i), vr.transition = a, dt = t, (dt & (hr | Ka)) === Qn && Wu();
      }
    }
    function aC() {
      return (dt & (hr | Ka)) !== Qn;
    }
    function Rm(e, t) {
      _r(U0, cl, e), cl = Ze(cl, t);
    }
    function Y0(e) {
      cl = U0.current, Dr(U0, e);
    }
    function ps(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, cw(a)), on !== null)
        for (var i = on.return; i !== null; ) {
          var u = i.alternate;
          zx(u, i), i = i.return;
        }
      Wr = e;
      var s = hs(e.current, null);
      return on = s, Wn = cl = t, Gn = Jl, yp = null, gm = I, gp = I, Sm = I, Sp = null, ma = null, _T(), Si.discardPendingWarnings(), s;
    }
    function iC(e, t) {
      do {
        var a = on;
        try {
          if (zh(), O1(), gn(), N0.current = null, a === null || a.return === null) {
            Gn = hp, yp = t, on = null;
            return;
          }
          if (at && a.mode & Fe && fm(a, !0), Xt)
            if (bl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Mv(a, i, Wn);
            } else
              Ks(a, t, Wn);
          lR(e, a.return, a, t, Wn), sC(a);
        } catch (u) {
          t = u, on === a && a !== null ? (a = a.return, on = a) : a = on;
          continue;
        }
        return;
      } while (!0);
    }
    function lC() {
      var e = M0.current;
      return M0.current = lm, e === null ? lm : e;
    }
    function uC(e) {
      M0.current = e;
    }
    function jb() {
      O0 = Kt();
    }
    function Tp(e) {
      gm = Ze(e, gm);
    }
    function Hb() {
      Gn === Jl && (Gn = ym);
    }
    function $0() {
      (Gn === Jl || Gn === ym || Gn === fs) && (Gn = mp), Wr !== null && (Ho(gm) || Ho(gp)) && ao(Wr, Wn);
    }
    function Fb(e) {
      Gn !== mp && (Gn = fs), Sp === null ? Sp = [e] : Sp.push(e);
    }
    function Vb() {
      return Gn === Jl;
    }
    function bm(e, t) {
      var a = dt;
      dt |= hr;
      var i = lC();
      if (Wr !== e || Wn !== t) {
        if (Vn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Rp(e, Wn), u.clear()), Sc(e, t);
        }
        eu = hd(), ps(e, t);
      }
      Ma(t);
      do
        try {
          Bb();
          break;
        } catch (s) {
          iC(e, s);
        }
      while (!0);
      if (zh(), dt = a, uC(i), on !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return wu(), Wr = null, Wn = I, Gn;
    }
    function Bb() {
      for (; on !== null; )
        oC(on);
    }
    function Pb(e, t) {
      var a = dt;
      dt |= hr;
      var i = lC();
      if (Wr !== e || Wn !== t) {
        if (Vn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Rp(e, Wn), u.clear()), Sc(e, t);
        }
        eu = hd(), xp(), ps(e, t);
      }
      Ma(t);
      do
        try {
          Yb();
          break;
        } catch (s) {
          iC(e, s);
        }
      while (!0);
      return zh(), uC(i), dt = a, on !== null ? (zo(), Jl) : (wu(), Wr = null, Wn = I, Gn);
    }
    function Yb() {
      for (; on !== null && !Is(); )
        oC(on);
    }
    function oC(e) {
      var t = e.alternate;
      kt(e);
      var a;
      (e.mode & Fe) !== Ae ? (i0(e), a = I0(t, e, cl), fm(e, !0)) : a = I0(t, e, cl), gn(), e.memoizedProps = e.pendingProps, a === null ? sC(e) : on = a, N0.current = null;
    }
    function sC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Vr) === Me) {
          kt(t);
          var u = void 0;
          if ((t.mode & Fe) === Ae ? u = Nx(a, t, cl) : (i0(t), u = Nx(a, t, cl), fm(t, !1)), gn(), u !== null) {
            on = u;
            return;
          }
        } else {
          var s = HR(a, t);
          if (s !== null) {
            s.flags &= Ev, on = s;
            return;
          }
          if ((t.mode & Fe) !== Ae) {
            fm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Vr, i.subtreeFlags = Me, i.deletions = null;
          else {
            Gn = z0, on = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          on = v;
          return;
        }
        t = i, on = t;
      } while (t !== null);
      Gn === Jl && (Gn = qx);
    }
    function vs(e, t, a) {
      var i = sa(), u = vr.transition;
      try {
        vr.transition = null, Cn(Jn), $b(e, t, a, i);
      } finally {
        vr.transition = u, Cn(i);
      }
      return null;
    }
    function $b(e, t, a, i) {
      do
        nu();
      while (no !== null);
      if (tk(), (dt & (hr | Ka)) !== Qn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Gs(s), u === null)
        return nd(), null;
      if (s === I && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ft;
      var f = Ze(u.lanes, u.childLanes);
      pd(e, f), e === Wr && (Wr = null, on = null, Wn = I), ((u.subtreeFlags & ia) !== Me || (u.flags & ia) !== Me) && (ds || (ds = !0, H0 = a, G0(Ba, function() {
        return nu(), null;
      })));
      var p = (u.subtreeFlags & (xu | wr | Zn | ia)) !== Me, v = (u.flags & (xu | wr | Zn | ia)) !== Me;
      if (p || v) {
        var g = vr.transition;
        vr.transition = null;
        var S = sa();
        Cn(Jn);
        var k = dt;
        dt |= Ka, N0.current = null, YR(e, u), lx(), rb(e, u, s), rw(e.containerInfo), e.current = u, Nv(s), ab(u, e, s), Eu(), Rv(), dt = k, Cn(S), vr.transition = g;
      } else
        e.current = u, lx();
      var R = ds;
      if (ds ? (ds = !1, no = e, Cp = s) : (sf = 0, Em = null), f = e.pendingLanes, f === I && (of = null), R || pC(e.current, !1), si(u.stateNode, i), Vn && e.memoizedUpdaters.clear(), wb(), ya(e, Kt()), t !== null)
        for (var O = e.onRecoverableError, H = 0; H < t.length; H++) {
          var P = t[H], he = P.stack, ze = P.digest;
          O(P.value, {
            componentStack: he,
            digest: ze
          });
        }
      if (xm) {
        xm = !1;
        var ke = A0;
        throw A0 = null, ke;
      }
      return kr(Cp, Ve) && e.tag !== Qu && nu(), f = e.pendingLanes, kr(f, Ve) ? (JT(), e === F0 ? Ep++ : (Ep = 0, F0 = e)) : Ep = 0, Wu(), nd(), null;
    }
    function nu() {
      if (no !== null) {
        var e = Po(Cp), t = sy(di, e), a = vr.transition, i = sa();
        try {
          return vr.transition = null, Cn(t), Qb();
        } finally {
          Cn(i), vr.transition = a;
        }
      }
      return !1;
    }
    function Ib(e) {
      j0.push(e), ds || (ds = !0, G0(Ba, function() {
        return nu(), null;
      }));
    }
    function Qb() {
      if (no === null)
        return !1;
      var e = H0;
      H0 = null;
      var t = no, a = Cp;
      if (no = null, Cp = I, (dt & (hr | Ka)) !== Qn)
        throw new Error("Cannot flush passive effects while already rendering.");
      V0 = !0, Cm = !1, zv(a);
      var i = dt;
      dt |= Ka, fb(t.current), ub(t, t.current, a, e);
      {
        var u = j0;
        j0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          WR(t, f);
        }
      }
      No(), pC(t.current, !0), dt = i, Wu(), Cm ? t === Em ? sf++ : (sf = 0, Em = t) : sf = 0, V0 = !1, Cm = !1, $i(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cC(e) {
      return of !== null && of.has(e);
    }
    function Wb(e) {
      of === null ? of = /* @__PURE__ */ new Set([e]) : of.add(e);
    }
    function Gb(e) {
      xm || (xm = !0, A0 = e);
    }
    var Xb = Gb;
    function fC(e, t, a) {
      var i = ss(a, t), u = ox(e, i, Ve), s = Xu(e, u, Ve), f = Gr();
      s !== null && (Al(s, Ve, f), ya(s, f));
    }
    function Pt(e, t, a) {
      if (VR(a), bp(!1), e.tag === B) {
        fC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          fC(i, e, a);
          return;
        } else if (i.tag === $) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cC(s)) {
            var f = ss(a, e), p = f0(i, f, Ve), v = Xu(i, p, Ve), g = Gr();
            v !== null && (Al(v, Ve, g), ya(v, g));
            return;
          }
        }
        i = i.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function qb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Gr();
      dd(e, a), ik(e), Wr === e && Ol(Wn, a) && (Gn === mp || Gn === ym && mc(Wn) && Kt() - O0 < Kx ? ps(e, I) : Sm = Ze(Sm, a)), ya(e, u);
    }
    function dC(e, t) {
      t === ft && (t = Lb(e));
      var a = Gr(), i = va(e, t);
      i !== null && (Al(i, t, a), ya(i, a));
    }
    function Kb(e) {
      var t = e.memoizedState, a = ft;
      t !== null && (a = t.retryLane), dC(e, a);
    }
    function Zb(e, t) {
      var a = ft, i;
      switch (e.tag) {
        case de:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case We:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dC(e, a);
    }
    function Jb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : bb(e / 1960) * 1960;
    }
    function ek() {
      if (Ep > Db)
        throw Ep = 0, F0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      sf > _b && (sf = 0, Em = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function tk() {
      Si.flushLegacyContextWarning(), Si.flushPendingUnsafeLifecycleWarnings();
    }
    function pC(e, t) {
      kt(e), km(e, Er, xb), t && km(e, Rl, Cb), km(e, Er, gb), t && km(e, Rl, Sb), gn();
    }
    function km(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Dm = null;
    function vC(e) {
      {
        if ((dt & hr) !== Qn || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== ee && t !== B && t !== $ && t !== U && t !== ce && t !== Re && t !== je)
          return;
        var a = Ge(e) || "ReactComponent";
        if (Dm !== null) {
          if (Dm.has(a))
            return;
          Dm.add(a);
        } else
          Dm = /* @__PURE__ */ new Set([a]);
        var i = fn;
        try {
          kt(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? kt(e) : gn();
        }
      }
    }
    var I0;
    {
      var nk = null;
      I0 = function(e, t, a) {
        var i = EC(nk, t);
        try {
          return kx(e, t, a);
        } catch (s) {
          if (hT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (zh(), O1(), zx(e, t), EC(t, i), t.mode & Fe && i0(t), Tl(null, kx, null, e, t, a), ny()) {
            var u = If();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hC = !1, Q0;
    Q0 = /* @__PURE__ */ new Set();
    function rk(e) {
      if (Jr && !qT())
        switch (e.tag) {
          case U:
          case ce:
          case je: {
            var t = on && Ge(on) || "Unknown", a = t;
            if (!Q0.has(a)) {
              Q0.add(a);
              var i = Ge(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case $: {
            hC || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hC = !0);
            break;
          }
        }
    }
    function Rp(e, t) {
      if (Vn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          vd(e, i, t);
        });
      }
    }
    var W0 = {};
    function G0(e, t) {
      {
        var a = ki.current;
        return a !== null ? (a.push(t), W0) : $s(e, t);
      }
    }
    function mC(e) {
      if (e !== W0)
        return Tv(e);
    }
    function yC() {
      return ki.current !== null;
    }
    function ak(e) {
      {
        if (e.mode & lt) {
          if (!Gx())
            return;
        } else if (!Rb() || dt !== Qn || e.tag !== U && e.tag !== ce && e.tag !== je)
          return;
        if (ki.current === null) {
          var t = fn;
          try {
            kt(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ge(e));
          } finally {
            t ? kt(e) : gn();
          }
        }
      }
    }
    function ik(e) {
      e.tag !== Qu && Gx() && ki.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function bp(e) {
      eC = e;
    }
    var Za = null, cf = null, lk = function(e) {
      Za = e;
    };
    function ff(e) {
      {
        if (Za === null)
          return e;
        var t = Za(e);
        return t === void 0 ? e : t.current;
      }
    }
    function X0(e) {
      return ff(e);
    }
    function q0(e) {
      {
        if (Za === null)
          return e;
        var t = Za(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ff(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Oe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function gC(e, t) {
      {
        if (Za === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case $: {
            typeof i == "function" && (u = !0);
            break;
          }
          case U: {
            (typeof i == "function" || s === He) && (u = !0);
            break;
          }
          case ce: {
            (s === Oe || s === He) && (u = !0);
            break;
          }
          case Re:
          case je: {
            (s === tt || s === He) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Za(a);
          if (f !== void 0 && f === Za(i))
            return !0;
        }
        return !1;
      }
    }
    function SC(e) {
      {
        if (Za === null || typeof WeakSet != "function")
          return;
        cf === null && (cf = /* @__PURE__ */ new WeakSet()), cf.add(e);
      }
    }
    var uk = function(e, t) {
      {
        if (Za === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        nu(), tu(function() {
          K0(e.current, i, a);
        });
      }
    }, ok = function(e, t) {
      {
        if (e.context !== za)
          return;
        nu(), tu(function() {
          kp(t, e, null, null);
        });
      }
    };
    function K0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case U:
          case je:
          case $:
            v = p;
            break;
          case ce:
            v = p.render;
            break;
        }
        if (Za === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, S = !1;
        if (v !== null) {
          var k = Za(v);
          k !== void 0 && (a.has(k) ? S = !0 : t.has(k) && (f === $ ? S = !0 : g = !0));
        }
        if (cf !== null && (cf.has(e) || i !== null && cf.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || g) {
          var R = va(e, Ve);
          R !== null && Xn(R, e, Ve, zt);
        }
        u !== null && !S && K0(u, t, a), s !== null && K0(s, t, a);
      }
    }
    var sk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return Z0(e.current, i, a), a;
      }
    };
    function Z0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case U:
          case je:
          case $:
            p = f;
            break;
          case ce:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ck(e, a) : i !== null && Z0(i, t, a), u !== null && Z0(u, t, a);
      }
    }
    function ck(e, t) {
      {
        var a = fk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case q:
              t.add(i.stateNode);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function fk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var J0;
    {
      J0 = !1;
      try {
        var xC = Object.preventExtensions({});
      } catch {
        J0 = !0;
      }
    }
    function dk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !J0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ua = function(e, t, a, i) {
      return new dk(e, t, a, i);
    };
    function eS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function pk(e) {
      return typeof e == "function" && !eS(e) && e.defaultProps === void 0;
    }
    function vk(e) {
      if (typeof e == "function")
        return eS(e) ? $ : U;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Oe)
          return ce;
        if (t === tt)
          return Re;
      }
      return ee;
    }
    function hs(e, t) {
      var a = e.alternate;
      a === null ? (a = Ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ee:
        case U:
        case je:
          a.type = ff(e.type);
          break;
        case $:
          a.type = X0(e.type);
          break;
        case ce:
          a.type = q0(e.type);
          break;
      }
      return a;
    }
    function hk(e, t) {
      e.flags &= Fn | Ht;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function mk(e, t, a) {
      var i;
      return e === Rh ? (i = lt, t === !0 && (i |= Zt, i |= ua)) : i = Ae, Vn && (i |= Fe), Ua(B, null, null, i);
    }
    function tS(e, t, a, i, u, s) {
      var f = ee, p = e;
      if (typeof e == "function")
        eS(e) ? (f = $, p = X0(p)) : p = ff(p);
      else if (typeof e == "string")
        f = q;
      else
        e:
          switch (e) {
            case Ta:
              return io(a.children, u, s, t);
            case Li:
              f = se, u |= Zt, (u & lt) !== Ae && (u |= ua);
              break;
            case w:
              return yk(a, u, s, t);
            case Je:
              return gk(a, u, s, t);
            case mt:
              return Sk(a, u, s, t);
            case It:
              return CC(a, u, s, t);
            case lr:
            case _n:
            case Mi:
            case Ss:
            case $t:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case K:
                    f = ge;
                    break e;
                  case oe:
                    f = De;
                    break e;
                  case Oe:
                    f = ce, p = q0(p);
                    break e;
                  case tt:
                    f = Re;
                    break e;
                  case He:
                    f = vt, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var g = i ? Ge(i) : null;
                g && (v += `

Check the render method of \`` + g + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var S = Ua(f, a, t, u);
      return S.elementType = e, S.type = p, S.lanes = s, S._debugOwner = i, S;
    }
    function nS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = tS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function io(e, t, a, i) {
      var u = Ua(we, e, i, t);
      return u.lanes = a, u;
    }
    function yk(e, t, a, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ua(Ue, e, i, t | Fe);
      return u.elementType = w, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function gk(e, t, a, i) {
      var u = Ua(de, e, i, t);
      return u.elementType = Je, u.lanes = a, u;
    }
    function Sk(e, t, a, i) {
      var u = Ua(We, e, i, t);
      return u.elementType = mt, u.lanes = a, u;
    }
    function CC(e, t, a, i) {
      var u = Ua(Ne, e, i, t);
      u.elementType = It, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function rS(e, t, a) {
      var i = Ua(re, e, null, t);
      return i.lanes = a, i;
    }
    function xk() {
      var e = Ua(q, null, null, Ae);
      return e.elementType = "DELETED", e;
    }
    function Ck(e) {
      var t = Ua(Xe, null, null, Ae);
      return t.stateNode = e, t;
    }
    function aS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ua(W, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function EC(e, t) {
      return e === null && (e = Ua(ee, null, null, Ae)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Ek(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ft, this.eventTimes = gc(I), this.expirationTimes = gc(zt), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = gc(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Vt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function wC(e, t, a, i, u, s, f, p, v, g) {
      var S = new Ek(e, t, a, p, v), k = mk(t, s);
      S.current = k, k.stateNode = S;
      {
        var R = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        k.memoizedState = R;
      }
      return dg(k), S;
    }
    var iS = "18.2.0";
    function wk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return xa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var lS, uS;
    lS = !1, uS = {};
    function TC(e) {
      if (!e)
        return za;
      var t = na(e), a = lT(t);
      if (t.tag === $) {
        var i = t.type;
        if (rl(i))
          return qS(t, i, a);
      }
      return a;
    }
    function Tk(e, t) {
      {
        var a = na(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = la(a);
        if (u === null)
          return null;
        if (u.mode & Zt) {
          var s = Ge(a) || "Component";
          if (!uS[s]) {
            uS[s] = !0;
            var f = fn;
            try {
              kt(u), a.mode & Zt ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? kt(f) : gn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function RC(e, t, a, i, u, s, f, p) {
      var v = !1, g = null;
      return wC(e, t, v, g, a, i, u, s, f);
    }
    function bC(e, t, a, i, u, s, f, p, v, g) {
      var S = !0, k = wC(a, i, S, e, u, s, f, p, v);
      k.context = TC(null);
      var R = k.current, O = Gr(), H = ro(R), P = Kl(O, H);
      return P.callback = t ?? null, Xu(R, P, H), Mb(k, H, O), k;
    }
    function kp(e, t, a, i) {
      bv(t, e);
      var u = t.current, s = Gr(), f = ro(u);
      kl(f);
      var p = TC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Jr && fn !== null && !lS && (lS = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(fn) || "Unknown"));
      var v = Kl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var g = Xu(u, v, f);
      return g !== null && (Xn(g, u, f, s), Hh(g, u, f)), f;
    }
    function _m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Rk(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (En(t)) {
            var a = iy(t);
            Ob(t, a);
          }
          break;
        }
        case de: {
          tu(function() {
            var u = va(e, Ve);
            if (u !== null) {
              var s = Gr();
              Xn(u, e, Ve, s);
            }
          });
          var i = Ve;
          oS(e, i);
          break;
        }
      }
    }
    function kC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Hv(a.retryLane, t));
    }
    function oS(e, t) {
      kC(e, t);
      var a = e.alternate;
      a && kC(a, t);
    }
    function bk(e) {
      if (e.tag === de) {
        var t = Tu, a = va(e, t);
        if (a !== null) {
          var i = Gr();
          Xn(a, e, t, i);
        }
        oS(e, t);
      }
    }
    function kk(e) {
      if (e.tag === de) {
        var t = ro(e), a = va(e, t);
        if (a !== null) {
          var i = Gr();
          Xn(a, e, t, i);
        }
        oS(e, t);
      }
    }
    function DC(e) {
      var t = wv(e);
      return t === null ? null : t.stateNode;
    }
    var _C = function(e) {
      return null;
    };
    function Dk(e) {
      return _C(e);
    }
    var LC = function(e) {
      return !1;
    };
    function _k(e) {
      return LC(e);
    }
    var MC = null, NC = null, zC = null, UC = null, OC = null, AC = null, jC = null, HC = null, FC = null;
    {
      var VC = function(e, t, a) {
        var i = t[a], u = Ln(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (Ln(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = VC(e[i], t, a + 1), u);
      }, BC = function(e, t) {
        return VC(e, t, 0);
      }, PC = function(e, t, a, i) {
        var u = t[i], s = Ln(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Ln(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, YC = function(e, t, a) {
        if (t.length !== a.length) {
          j("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              j("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PC(e, t, a, 0);
      }, $C = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Ln(e) ? e.slice() : ot({}, e);
        return s[u] = $C(e[u], t, a + 1, i), s;
      }, IC = function(e, t, a) {
        return $C(e, t, 0, a);
      }, sS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      MC = function(e, t, a, i) {
        var u = sS(e, t);
        if (u !== null) {
          var s = IC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = va(e, Ve);
          f !== null && Xn(f, e, Ve, zt);
        }
      }, NC = function(e, t, a) {
        var i = sS(e, t);
        if (i !== null) {
          var u = BC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = va(e, Ve);
          s !== null && Xn(s, e, Ve, zt);
        }
      }, zC = function(e, t, a, i) {
        var u = sS(e, t);
        if (u !== null) {
          var s = YC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = va(e, Ve);
          f !== null && Xn(f, e, Ve, zt);
        }
      }, UC = function(e, t, a) {
        e.pendingProps = IC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = va(e, Ve);
        i !== null && Xn(i, e, Ve, zt);
      }, OC = function(e, t) {
        e.pendingProps = BC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = va(e, Ve);
        a !== null && Xn(a, e, Ve, zt);
      }, AC = function(e, t, a) {
        e.pendingProps = YC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = va(e, Ve);
        i !== null && Xn(i, e, Ve, zt);
      }, jC = function(e) {
        var t = va(e, Ve);
        t !== null && Xn(t, e, Ve, zt);
      }, HC = function(e) {
        _C = e;
      }, FC = function(e) {
        LC = e;
      };
    }
    function Lk(e) {
      var t = la(e);
      return t === null ? null : t.stateNode;
    }
    function Mk(e) {
      return null;
    }
    function Nk() {
      return fn;
    }
    function zk(e) {
      var t = e.findFiberByHostInstance, a = y.ReactCurrentDispatcher;
      return ed({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: MC,
        overrideHookStateDeletePath: NC,
        overrideHookStateRenamePath: zC,
        overrideProps: UC,
        overridePropsDeletePath: OC,
        overridePropsRenamePath: AC,
        setErrorHandler: HC,
        setSuspenseHandler: FC,
        scheduleUpdate: jC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Lk,
        findFiberByHostInstance: t || Mk,
        // React Refresh
        findHostInstancesForRefresh: sk,
        scheduleRefresh: uk,
        scheduleRoot: ok,
        setRefreshHandler: lk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Nk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iS
      });
    }
    var QC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cS(e) {
      this._internalRoot = e;
    }
    Lm.prototype.render = cS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Mm(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== dn) {
          var i = DC(t.current);
          i && i.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      kp(e, t, null, null);
    }, Lm.prototype.unmount = cS.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aC() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), tu(function() {
          kp(null, e, null, null);
        }), IS(t);
      }
    };
    function Uk(e, t) {
      if (!Mm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      WC(e);
      var a = !1, i = !1, u = "", s = QC;
      t != null && (t.hydrate ? j("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _i && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = RC(e, Rh, null, a, i, u, s);
      gh(f.current, e);
      var p = e.nodeType === dn ? e.parentNode : e;
      return Od(p), new cS(f);
    }
    function Lm(e) {
      this._internalRoot = e;
    }
    function Ok(e) {
      e && Qv(e);
    }
    Lm.prototype.unstable_scheduleHydration = Ok;
    function Ak(e, t, a) {
      if (!Mm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      WC(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var g = bC(t, null, e, Rh, i, s, f, p, v);
      if (gh(g.current, e), Od(e), u)
        for (var S = 0; S < u.length; S++) {
          var k = u[S];
          $T(g, k);
        }
      return new Lm(g);
    }
    function Mm(e) {
      return !!(e && (e.nodeType === Sr || e.nodeType === Da || e.nodeType === gl || !rt));
    }
    function Dp(e) {
      return !!(e && (e.nodeType === Sr || e.nodeType === Da || e.nodeType === gl || e.nodeType === dn && e.nodeValue === " react-mount-point-unstable "));
    }
    function WC(e) {
      e.nodeType === Sr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Qd(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var jk = y.ReactCurrentOwner, GC;
    GC = function(e) {
      if (e._reactRootContainer && e.nodeType !== dn) {
        var t = DC(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = fS(e), u = !!(i && $u(i));
      u && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Sr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fS(e) {
      return e ? e.nodeType === Da ? e.documentElement : e.firstChild : null;
    }
    function XC() {
    }
    function Hk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var R = _m(f);
            s.call(R);
          };
        }
        var f = bC(
          t,
          i,
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          XC
        );
        e._reactRootContainer = f, gh(f.current, e);
        var p = e.nodeType === dn ? e.parentNode : e;
        return Od(p), tu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var g = i;
          i = function() {
            var R = _m(S);
            g.call(R);
          };
        }
        var S = RC(
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          XC
        );
        e._reactRootContainer = S, gh(S.current, e);
        var k = e.nodeType === dn ? e.parentNode : e;
        return Od(k), tu(function() {
          kp(t, S, a, i);
        }), S;
      }
    }
    function Fk(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Nm(e, t, a, i, u) {
      GC(a), Fk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Hk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = _m(f);
            p.call(v);
          };
        }
        kp(t, f, e, u);
      }
      return _m(f);
    }
    function Vk(e) {
      {
        var t = jk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Sr ? e : Tk(e, "findDOMNode");
    }
    function Bk(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Qd(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Nm(null, e, t, !0, a);
    }
    function Pk(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Qd(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Nm(null, e, t, !1, a);
    }
    function Yk(e, t, a, i) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_o(e))
        throw new Error("parentComponent must be a valid React Component");
      return Nm(e, t, a, !1, i);
    }
    function $k(e) {
      if (!Dp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Qd(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = fS(e), i = a && !$u(a);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return tu(function() {
          Nm(null, null, e, !1, function() {
            e._reactRootContainer = null, IS(e);
          });
        }), !0;
      } else {
        {
          var u = fS(e), s = !!(u && $u(u)), f = e.nodeType === Sr && Dp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Se(Rk), Vv(bk), $o(kk), yd(sa), Pv(Bo), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), xv(WE), Fs(P0, Ab, tu);
    function Ik(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Mm(t))
        throw new Error("Target container is not a DOM element.");
      return wk(e, t, null, a);
    }
    function Qk(e, t, a, i) {
      return Yk(e, t, a, i);
    }
    var dS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [$u, Bc, Sh, Hs, bo, P0]
    };
    function Wk(e, t) {
      return dS.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Uk(e, t);
    }
    function Gk(e, t, a) {
      return dS.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ak(e, t, a);
    }
    function Xk(e) {
      return aC() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), tu(e);
    }
    var qk = zk({
      findFiberByHostInstance: es,
      bundleType: 1,
      version: iS,
      rendererPackageName: "react-dom"
    });
    if (!qk && sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qC = window.location.protocol;
      /^(https?|file):$/.test(qC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dS, Sa.createPortal = Ik, Sa.createRoot = Wk, Sa.findDOMNode = Vk, Sa.flushSync = Xk, Sa.hydrate = Bk, Sa.hydrateRoot = Gk, Sa.render = Pk, Sa.unmountComponentAtNode = $k, Sa.unstable_batchedUpdates = P0, Sa.unstable_renderSubtreeIntoContainer = Qk, Sa.version = iS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Sa;
}
function uE() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uE);
    } catch (_) {
      console.error(_);
    }
  }
}
process.env.NODE_ENV === "production" ? (uE(), mS.exports = hD()) : mS.exports = mD();
var yD = mS.exports;
const gD = (_, E, y, D, x) => {
  if ((D == null ? void 0 : D.vertical) === "top") {
    if ((y == null ? void 0 : y.vertical) === "top" && x)
      return Math.max(E, x.top);
    if ((y == null ? void 0 : y.vertical) === "center" && x)
      return Math.max(E, x.top - _.height / 2);
    if ((y == null ? void 0 : y.vertical) === "bottom" && x)
      return Math.max(E, x.top - _.height);
  } else if ((D == null ? void 0 : D.vertical) === "bottom") {
    if ((y == null ? void 0 : y.vertical) === "top" && x)
      return Math.max(E, (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height));
    if ((y == null ? void 0 : y.vertical) === "center" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height) - _.height / 2
      );
    if ((y == null ? void 0 : y.vertical) === "bottom" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height) - _.height
      );
  } else if ((D == null ? void 0 : D.vertical) === "center") {
    if (!x)
      return;
    if ((y == null ? void 0 : y.vertical) === "top" && x)
      return Math.max(E, (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height) / 2);
    if ((y == null ? void 0 : y.vertical) === "center" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height) / 2 - _.height / 2
      );
    if ((y == null ? void 0 : y.vertical) === "bottom" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height) / 2 - _.height
      );
  }
}, SD = (_, E, y, D, x) => {
  if ((D == null ? void 0 : D.horizontal) === "left") {
    if ((y == null ? void 0 : y.horizontal) === "left" && x)
      return Math.max(E, x.left);
    if ((y == null ? void 0 : y.horizontal) === "center" && x)
      return Math.max(E, x.left - _.width / 2);
    if ((y == null ? void 0 : y.horizontal) === "right" && x)
      return Math.max(E, x.left - _.width);
  } else if ((D == null ? void 0 : D.horizontal) === "right") {
    if ((y == null ? void 0 : y.horizontal) === "left" && x)
      return Math.max(E, (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width));
    if ((y == null ? void 0 : y.horizontal) === "center" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width) - _.width / 2
      );
    if ((y == null ? void 0 : y.horizontal) === "right" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width) - _.width
      );
  } else if ((D == null ? void 0 : D.horizontal) === "center") {
    if ((y == null ? void 0 : y.horizontal) === "left" && x)
      return Math.max(E, (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width) / 2);
    if ((y == null ? void 0 : y.horizontal) === "center" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width) / 2 - _.width / 2
      );
    if ((y == null ? void 0 : y.horizontal) === "right" && x)
      return Math.max(
        E,
        (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width) / 2 - _.width
      );
  }
}, xD = (_, E, y, D) => D ? !E || !E.vertical || !y ? 0 : E.vertical === "top" ? D.y : E.vertical === "center" ? D.y - y.height / 2 : E.vertical === "bottom" ? D.y - y.height : 0 : !_ || !_.top || !E || !E.vertical || !y ? 0 : E.vertical === "top" && _ ? _.top : E.vertical === "center" ? _.top - y.height / 2 : E.vertical === "bottom" ? _.top - y.height : 0, CD = (_, E, y, D, x) => D ? !E || !E.vertical || !y ? 0 : E.horizontal === "left" ? D.x + (x === "bottom-end" || x === "bottom-start" || x === "top-end" || x === "top-start" ? -15 : 0) : E.horizontal === "center" ? D.x - y.width / 2 + (x === "bottom-end" || x === "bottom-start" || x === "top-end" || x === "top-start" ? 15 : 0) : E.horizontal === "right" ? D.x - y.width + (x === "bottom-end" || x === "bottom-start" || x === "top-end" || x === "top-start" ? 15 : 0) : 0 : !_ || !_.left || !E || !E.vertical || !y ? 0 : E.horizontal === "left" && _ ? _.left : E.horizontal === "center" ? _.left - y.width / 2 : E.horizontal === "right" ? _.left - y.width : 0, ED = (_, E, y, D, x, j, m, V, U) => {
  if (_ === "anchorEl" && !V) {
    if (!m)
      return;
    const $ = gD(
      m,
      E,
      y,
      D,
      j
    ), ee = SD(
      m,
      E,
      y,
      D,
      j
    );
    return { top: $, left: ee };
  } else if (_ === "anchorPosition" || V && x) {
    const $ = Math.max(
      E,
      xD(
        x,
        y,
        m,
        V
      )
    ), ee = Math.max(
      E,
      CD(
        x,
        y,
        m,
        V,
        U
      )
    );
    return { top: $, left: ee };
  }
}, wD = (_) => _ === "left" || _ === "left-start" || _ === "left-end" ? -14 : 0, TD = (_) => _ === "top" || _ === "top-start" || _ === "top-end" ? -14 : 0, oE = zp({});
function qD({
  children: _,
  title: E,
  placement: y,
  open: D,
  disableTransition: x,
  arrow: j,
  followCursor: m,
  classes: V,
  components: U,
  componentsProps: $,
  disableFocusListener: ee,
  disableHoverListener: B,
  disableTouchListener: W,
  enterDelay: q = 100,
  enterNextDelay: re = 0,
  enterTouchDelay: we = 700,
  id: se,
  leaveDelay: De = 0,
  onClose: ge,
  onOpen: ce,
  className: Ue,
  ...de
}) {
  const [Re, je] = Rn(void 0), vt = ms(null), ht = ms(null), Xe = ms(null), [We, Tt] = Rn(D || !1), [Ne, qe] = Rn(), et = U != null && U.Arrow ? U.Arrow : "span", ut = U != null && U.Popper ? U.Popper : sE, Ut = U != null && U.Tooltip ? U.Tooltip : "div", ne = (at) => {
    B || (m || je(at.currentTarget), ht.current = setTimeout(() => {
      Xe.current || (Tt(!0), Xe.current = setTimeout(() => {
        Xe.current = null;
      }, re));
    }, q), ce && ce(at));
  }, ye = (at) => {
    ee || (m || je(at.currentTarget), ht.current = setTimeout(() => {
      Xe.current || (Tt(!0), Xe.current = setTimeout(() => {
        Xe.current = null;
      }, re));
    }, q), ce && ce(at));
  }, ae = (at) => {
    W || (m || je(at.currentTarget), ht.current = setTimeout(() => {
      Xe.current || (Tt(!0), Xe.current = setTimeout(() => {
        Xe.current = null;
      }, re));
    }, we), ce && ce(at));
  }, nt = (at) => {
    D || (ht.current && clearTimeout(ht.current), setTimeout(() => {
      Tt(!1);
    }, De)), ge && ge(at);
  }, rt = (at) => {
    D || (ht.current && clearTimeout(ht.current), setTimeout(() => {
      Tt(!1);
    }, De)), ge && ge(at);
  }, Yt = (at) => {
    m && qe({ x: at.clientX, y: at.clientY });
  }, Gt = () => y === "bottom-end" ? { vertical: "bottom", horizontal: "right" } : y === "bottom-start" ? { vertical: "bottom", horizontal: "left" } : y === "bottom" ? { vertical: "bottom", horizontal: "center" } : y === "left" ? { vertical: "center", horizontal: "left" } : y === "left-end" ? { vertical: "bottom", horizontal: "left" } : y === "left-start" ? { vertical: "top", horizontal: "left" } : y === "right" ? { vertical: "center", horizontal: "right" } : y === "right-end" ? { vertical: "bottom", horizontal: "right" } : y === "right-start" ? { vertical: "top", horizontal: "right" } : y === "top" ? { vertical: "top", horizontal: "center" } : y === "top-end" ? { vertical: "top", horizontal: "right" } : y === "top-start" ? { vertical: "top", horizontal: "left" } : { vertical: "bottom", horizontal: "center" }, Xt = () => y === "bottom-end" ? { vertical: "top", horizontal: "right" } : y === "bottom-start" ? { vertical: "top", horizontal: "left" } : y === "bottom" ? { vertical: "top", horizontal: "center" } : y === "left" ? { vertical: "center", horizontal: "right" } : y === "left-end" ? { vertical: "bottom", horizontal: "right" } : y === "left-start" ? { vertical: "top", horizontal: "right" } : y === "right" ? { vertical: "center", horizontal: "left" } : y === "right-end" ? { vertical: "bottom", horizontal: "left" } : y === "right-start" ? { vertical: "top", horizontal: "left" } : y === "top" ? { vertical: "bottom", horizontal: "center" } : y === "top-end" ? { vertical: "bottom", horizontal: "right" } : y === "top-start" ? { vertical: "bottom", horizontal: "left" } : { vertical: "top", horizontal: "right" };
  return /* @__PURE__ */ A.jsxs("div", { className: "inline-flex", children: [
    /* @__PURE__ */ A.jsx(oE.Provider, { value: { placement: y, mouseMove: Ne }, children: /* @__PURE__ */ A.jsx(
      ut,
      {
        ...$ == null ? void 0 : $.popper,
        open: We,
        anchorOrigin: {
          vertical: Gt().vertical,
          horizontal: Gt().horizontal
        },
        transformOrigin: {
          vertical: Xt().vertical,
          horizontal: Xt().horizontal
        },
        anchorEl: Re,
        className: $e({ [(V == null ? void 0 : V.popover) || ""]: V == null ? void 0 : V.popover }),
        elevation: 0,
        classes: { root: "pointer-events-none" },
        disableTransition: x,
        ...de,
        children: /* @__PURE__ */ A.jsxs(
          Ut,
          {
            id: se,
            ref: vt,
            ...$ == null ? void 0 : $.tooltip,
            className: $e(
              " bg-neutral-500 rounded text-white px-2 py-1 font-medium text-xs font-base",
              {
                "mt-[14px] ": y === "bottom" || y === "bottom-start" || y === "bottom-end",
                "ml-[14px] ": y === "right" || y === "right-start" || y === "right-end",
                [(V == null ? void 0 : V.tooltip) || ""]: V == null ? void 0 : V.tooltip,
                [Ue || ""]: Ue
              }
            ),
            children: [
              E,
              /* @__PURE__ */ A.jsx(
                et,
                {
                  ...$ == null ? void 0 : $.arrow,
                  className: $e("bocadillo ", {
                    "border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-1/2": j && y === "top",
                    "border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-4": j && y === "top-start",
                    "border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-[calc(100%-16px)]": j && y === "top-end",
                    "border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-1/2": j && y === "bottom",
                    "border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-4": j && y === "bottom-start",
                    "border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-[calc(100%-16px)]": j && y === "bottom-end",
                    "border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-1/2 left-0": j && y === "right",
                    "border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-2 left-0": j && y === "right-end",
                    "border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-[calc(100%-8px)] left-0": j && y === "right-start",
                    "border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-1/2 right-0": j && y === "left",
                    "border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-2 right-0": j && y === "left-end",
                    "border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-[calc(100%-8px)] right-0": j && y === "left-start",
                    [(V == null ? void 0 : V.arrow) || ""]: V == null ? void 0 : V.arrow
                  })
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ A.jsx(
      "div",
      {
        tabIndex: 1,
        onMouseEnter: ne,
        onFocus: ye,
        onMouseLeave: nt,
        onBlur: rt,
        onMouseMove: Yt,
        onTouchStart: ae,
        children: _
      }
    )
  ] });
}
function RD({
  children: _,
  className: E,
  marginThreshold: y,
  anchorEl: D,
  anchorPosition: x,
  transformOrigin: j,
  anchorReference: m,
  anchorOrigin: V,
  components: U,
  ...$
}) {
  const ee = ms(null), [B, W] = Rn(), [q, re] = Rn(), { placement: we, mouseMove: se } = ys(oE);
  Np(() => {
    if (!open)
      return;
    const Re = ee.current;
    if (Re)
      return Re.style.opacity = "0", setTimeout(() => {
        Re.style.opacity = "1";
      }, 50), re({
        height: Re.offsetHeight,
        width: Re.offsetWidth
      }), De = requestAnimationFrame(ge), () => {
        De && cancelAnimationFrame(De);
      };
  }, []);
  let De = null;
  const ge = () => {
    if (D) {
      const Re = Ue(D).getBoundingClientRect();
      W(Re);
    }
    De = requestAnimationFrame(ge);
  }, ce = U != null && U.paper ? U.paper : "div";
  function Ue(Re) {
    return typeof Re == "function" ? Re() : Re;
  }
  const de = ED(
    m,
    y,
    j,
    V,
    x,
    B,
    q,
    se,
    we
  );
  return /* @__PURE__ */ A.jsx(
    ce,
    {
      ref: ee,
      style: {
        top: de != null && de.top ? (de == null ? void 0 : de.top) + TD(we) : de == null ? void 0 : de.top,
        left: de != null && de.left ? (de == null ? void 0 : de.left) + wD(we) : (
          // -
          // (screenVariation?.currentScreenW && screenVariation.initialScreenW
          //   ? screenVariation?.initialScreenW -
          //     screenVariation?.initialScreenW
          //   : 0)
          de == null ? void 0 : de.left
        )
        // translate: `${position?.transformX} ${position?.transformY}`,
      },
      className: $e({ [E || ""]: E }),
      ...$,
      children: _
    }
  );
}
function sE({
  children: _,
  open: E,
  onClose: y,
  anchorReference: D = "anchorEl",
  anchorEl: x,
  anchorOrigin: j = { vertical: "top", horizontal: "left" },
  transformOrigin: m = { vertical: "top", horizontal: "left" },
  anchorPosition: V = { top: 0, left: 0 },
  className: U,
  container: $,
  elevation: ee = 4,
  components: B,
  marginThreshold: W = 16,
  componentProps: q,
  id: re,
  disableTransition: we,
  classes: se
}) {
  const [De, ge] = Rn(!1);
  Np(() => {
    E && ge(!0);
  }, [E]);
  const ce = B != null && B.root ? B.root : "div";
  function Ue(Re) {
    return typeof Re == "function" ? Re() : Re;
  }
  const de = () => {
    E || ge(!1);
  };
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: De && yD.createPortal(
    /* @__PURE__ */ A.jsxs(
      ce,
      {
        id: re,
        ...q == null ? void 0 : q.root,
        className: $e("fixed inset-0 z-[1300] ", {
          [(se == null ? void 0 : se.root) || ""]: se == null ? void 0 : se.root
        }),
        children: [
          /* @__PURE__ */ A.jsx(
            "div",
            {
              onClick: y,
              className: $e("fixed inset-0 flex bg-transparent -z-[1]")
            }
          ),
          /* @__PURE__ */ A.jsx(
            RD,
            {
              onAnimationEnd: de,
              ...q == null ? void 0 : q.paper,
              marginThreshold: W,
              anchorEl: x,
              components: B,
              anchorPosition: V,
              anchorReference: D,
              transformOrigin: m,
              anchorOrigin: j,
              className: $e(
                "absolute  bg-transparent rounded-[4px]  ",
                {
                  "animate-grow": E && !we,
                  "animate-dwarf": !E && !we,
                  "shadow-1": ee === 1,
                  "shadow-2": ee === 2,
                  "shadow-3": ee === 3,
                  "shadow-4": ee === 4,
                  "shadow-5": ee === 5,
                  "shadow-6": ee === 6,
                  "shadow-7": ee === 7,
                  "shadow-8": ee === 8,
                  "shadow-9": ee === 9,
                  "shadow-10": ee === 10,
                  "shadow-11": ee === 11,
                  "shadow-12": ee === 12,
                  "shadow-13": ee === 13,
                  "shadow-14": ee === 14,
                  [(se == null ? void 0 : se.paper) || ""]: se == null ? void 0 : se.paper,
                  [U || ""]: U
                }
              ),
              children: _
            }
          )
        ]
      }
    ),
    $ ? Ue($) : document.body
  ) });
}
function bD({ children: _, ...E }) {
  return /* @__PURE__ */ A.jsx("ul", { ...E, children: _ });
}
function KD({
  children: _,
  open: E,
  onClose: y,
  classes: D,
  MenuListProps: x,
  PopoverClasses: j,
  ...m
}) {
  const V = () => {
    y && y();
  };
  return /* @__PURE__ */ A.jsx(
    sE,
    {
      classes: j,
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      onClose: V,
      className: $e("bg-white", {
        [(D == null ? void 0 : D.Popover) || ""]: D == null ? void 0 : D.Popover
      }),
      open: E,
      ...m,
      children: /* @__PURE__ */ A.jsx(
        bD,
        {
          ...x,
          className: $e({ [(D == null ? void 0 : D.MenuList) || ""]: D == null ? void 0 : D.MenuList }),
          children: _
        }
      )
    }
  );
}
function ZD({
  children: _,
  className: E,
  component: y,
  dense: D,
  disableGutters: x,
  divider: j,
  onClick: m,
  selected: V,
  ...U
}) {
  const [$, ee] = Rn(!1), [B, W] = Rn(), q = y || "li", re = (we) => {
    const De = we.currentTarget.getBoundingClientRect(), ge = {
      x: we.clientX - De.left,
      y: we.clientY - De.top
    };
    W({ x: ge.x, y: ge.y }), ee(!0), setTimeout(() => {
      ee(!1);
    }, 600), m && setTimeout(() => {
      m(we);
    }, 200);
  };
  return /* @__PURE__ */ A.jsxs(
    q,
    {
      ...U,
      className: $e(
        "flex font-normal text-base font-base bg-transparent justify-start  hover:bg-neutral-50 relative",
        {
          "py-[6px]": !D && !x,
          "bg-sky-50": V,
          "px-4": !x,
          "border-b": j,
          [E || ""]: E
        }
      ),
      onClick: re,
      tabIndex: V ? 0 : -1,
      children: [
        _,
        /* @__PURE__ */ A.jsx("span", { className: $e("inset-0 overflow-hidden absolute"), children: $ && /* @__PURE__ */ A.jsx(
          "span",
          {
            style: {
              top: B == null ? void 0 : B.y,
              left: B == null ? void 0 : B.x,
              transform: "translate(-50%, -50%)"
            },
            className: $e({
              "animate-ripple absolute inline-flex w-full h-full   rounded-full bg-opacity-25 origin-center bg-neutral-500": !0
            })
          }
        ) })
      ]
    }
  );
}
const cE = zp({});
function JD({
  label: _,
  variant: E = "standard",
  error: y,
  color: D = y ? "error" : "primary",
  defaultValue: x,
  disabled: j,
  inputRef: m,
  autoFocus: V = !1,
  id: U,
  value: $,
  rows: ee = 1,
  select: B,
  required: W = !1,
  type: q = "text",
  classes: re,
  onChange: we,
  disableUnderline: se,
  multiLine: De,
  TextAreaRef: ge,
  children: ce,
  readOnly: Ue,
  hiddenLabel: de,
  inputProps: Re,
  helperText: je,
  className: vt,
  fullWidth: ht,
  size: Xe = "medium",
  margin: We = "none",
  name: Tt,
  placeholder: Ne,
  ...qe
}) {
  const [et, ut] = Rn(!1), [Ut, ne] = Rn($), [ye, ae] = Rn(!1), nt = re == null ? void 0 : re.labelClassName, rt = (Xt) => {
    ne(Xt.currentTarget.value), we && we(Xt);
  }, Yt = Jk(() => {
    Ut || ut(!1), ae(!1);
  }, [Ut]), Gt = (Xt) => {
    rt({
      currentTarget: {
        value: Xt
      }
    });
  };
  return /* @__PURE__ */ A.jsx(Um, { onClickaway: Yt, children: /* @__PURE__ */ A.jsxs(
    "div",
    {
      id: U,
      className: $e("relative inline-flex flex-col", {
        "mt-2 mb-1": We === "dense",
        "mt-4 mb-2": We === "normal",
        "w-full": ht
      }),
      children: [
        !de && /* @__PURE__ */ A.jsx(
          dD,
          {
            variant: E,
            shrink: !!(et || Re != null && Re.startAdornment),
            className: nt,
            color: D,
            disabled: j,
            size: Xe,
            htmlFor: "input",
            children: _
          }
        ),
        /* @__PURE__ */ A.jsx(
          fD,
          {
            id: "input",
            disabled: j,
            defaultValue: x,
            autoFocus: V,
            value: Ut,
            inputRef: m,
            type: q,
            disaledUndeline: se,
            readonly: Ue,
            onChange: (Xt) => rt(Xt),
            required: W,
            name: Tt,
            placeholder: Ne,
            color: D,
            size: Xe,
            label: _,
            rows: ee,
            shrink: !!(et || Re != null && Re.startAdornment),
            multiline: De,
            variant: E,
            multilineTextAreaRef: ge,
            fullWidth: ht,
            onFocus: () => {
              ut(!0), ae(!0);
            },
            classes: {
              constainerClassName: $e({
                // 'mt-4': label && variant === 'standard',
                [(re == null ? void 0 : re.inputContainerClassName) || ""]: re == null ? void 0 : re.inputContainerClassName
              }),
              inputClassName: $e(" bg-white bg-opacity-0", {
                [(re == null ? void 0 : re.inputClassName) || ""]: re == null ? void 0 : re.inputClassName
              })
            },
            className: vt,
            ...Re,
            ...qe
          }
        ),
        /* @__PURE__ */ A.jsx(cE.Provider, { value: { handleOptionClick: Gt, setOpened: ae }, children: ye && B && /* @__PURE__ */ A.jsx("div", { className: "max-w-input ", children: ce }) }),
        je && /* @__PURE__ */ A.jsx(cD, { className: "mx-3 ", error: y || D === "error", children: je })
      ]
    }
  ) });
}
function e2({
  children: _,
  className: E = "cursor-pointer hover:bg-slate-200",
  onClick: y,
  value: D,
  ...x
}) {
  const { handleOptionClick: j, setOpened: m } = ys(cE), V = (U) => {
    y && y(U), j && m && (j(D), m(!1));
  };
  return /* @__PURE__ */ A.jsx("div", { onClick: V, className: E, ...x, children: _ });
}
function t2({
  children: _,
  message: E,
  open: y,
  action: D,
  onClose: x,
  autoHideDuration: j,
  anchorOrigin: m = { vertical: "bottom", horizontal: "left" },
  transition: V = "grown",
  className: U,
  ContentProps: $,
  disableWindowBlurListener: ee,
  key: B,
  resumeHideDuration: W,
  ...q
}) {
  const [re, we] = Rn(!1), se = ms(null);
  j && !se.current && y && (se.current = setTimeout(() => {
    se.current = null, x && x(null, "timeout");
  }, j)), Np(() => {
    y === !0 ? we(!!y) : y === !1 && setTimeout(() => {
      we(!!y);
    }, 200);
    const ge = (Re) => {
      Re.key === "Escape" && y && x && x(Re, "escapeKeyDown");
    }, ce = (Re) => ge(Re);
    document.addEventListener("keydown", ce), se.current && !y && (clearTimeout(se.current), se.current = null);
    const Ue = () => {
      j && !se.current && y && (se.current = setTimeout(
        () => {
          se.current = null, x && x(null, "timeout");
        },
        W || j / 2
      ));
    }, de = () => {
      se.current && (clearTimeout(se.current), se.current = null);
    };
    return ee || (window.addEventListener("focus", Ue), window.addEventListener("blur", de)), () => {
      ee || (window.removeEventListener("focus", Ue), window.removeEventListener("blur", de)), document.removeEventListener("keydown", ce);
    };
  }, [y]);
  const De = (ge) => {
    x && x(ge, "ClickAway");
  };
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: re && /* @__PURE__ */ A.jsx(Um, { onClickaway: De, children: /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: $e(
        " z-50 flex justify-start items-center fixed transition-all",
        {
          " left-2 right-2  sm:left-6 sm:right-auto": m.horizontal === "left",
          " left-2 right-2  sm:left-1/2 sm:right-auto sm:-translate-x-1/2": m.horizontal === "center",
          " left-2 right-2  sm:left-auto sm:right-6": m.horizontal === "right",
          "sm:bottom-6 bottom-2 ": m.vertical === "bottom",
          "sm:top-6 top-2 ": m.vertical === "top",
          [U || ""]: U
        }
      ),
      ...q,
      children: [
        _ && /* @__PURE__ */ A.jsx(
          "div",
          {
            className: $e({
              "animate-slideUpBottom ": V === "slideUp" && m.vertical === "bottom",
              "animate-slideUpRevBottom -translate-y-[100vh]": !y && V === "slideUp" && m.vertical === "bottom",
              "animate-slideUpTop": y && V === "slideUp" && m.vertical === "top",
              "animate-slideUpRevTop -translate-y-[15vh]": !y && V === "slideUp" && m.vertical === "top",
              "animate-slideDownBottom": V === "slideDown" && m.vertical === "bottom",
              "animate-slideDownRevBottom -translate-y-[100vh]": !y && V === "slideDown" && m.vertical === "bottom",
              "animate-slideDownTop": y && V === "slideDown" && m.vertical === "top",
              "animate-slideDownRevTop -translate-y-[15vh]": !y && V === "slideDown" && m.vertical === "top",
              "animate-slideLeftLeft": V === "slideLeft" && m.horizontal === "left",
              "animate-slideLeftRevLeft -translate-x-[50vh]": !y && V === "slideLeft" && m.horizontal === "left",
              "animate-slideLeftRight": y && V === "slideLeft" && (m.horizontal === "right" || "center"),
              "animate-slideLeftRevRight -translate-x-[300vh]": !y && V === "slideLeft" && (m.horizontal === "right" || "center"),
              "animate-slideRightRight": y && V === "slideRight" && m.horizontal === "right",
              "animate-slideRightRevRight translate-x-[30vh]": !y && V === "slideRight" && m.horizontal === "right",
              "animate-slideRightLeft": y && V === "slideRight" && (m.horizontal === "left" || "center"),
              "animate-slideRightRevLeft translate-x-[300vh]": !y && V === "slideRight" && (m.horizontal === "left" || "center"),
              "animate-opacity0 opacity-0": !y && V === "fade",
              "animate-opacity": y && V === "fade",
              "animate-dwarf opacity-0": !y && V === "grown",
              "animate-grow": y && V === "grown"
            }),
            children: _
          }
        ),
        !_ && /* @__PURE__ */ A.jsxs(
          iE,
          {
            className: $e(
              "font-base font-normal text-base text-white grow bg-[#323232] flex px-4 py-[6px] items-center flex-wrap sm:min-w-[288px] sm:grow-[initial]",
              {
                "animate-slideUpBottom": V === "slideUp" && m.vertical === "bottom",
                "animate-slideUpRevBottom -translate-y-[100vh]": !y && V === "slideUp" && m.vertical === "bottom",
                "animate-slideUpTop": y && V === "slideUp" && m.vertical === "top",
                "animate-slideUpRevTop -translate-y-[15vh]": !y && V === "slideUp" && m.vertical === "top",
                "animate-slideDownBottom": V === "slideDown" && m.vertical === "bottom",
                "animate-slideDownRevBottom -translate-y-[100vh]": !y && V === "slideDown" && m.vertical === "bottom",
                "animate-slideDownTop": y && V === "slideDown" && m.vertical === "top",
                "animate-slideDownRevTop -translate-y-[15vh]": !y && V === "slideDown" && m.vertical === "top",
                "animate-slideLeftLeft": V === "slideLeft" && m.horizontal === "left",
                "animate-slideLeftRevLeft -translate-x-[50vh]": !y && V === "slideLeft" && m.horizontal === "left",
                "animate-slideLeftRight": y && V === "slideLeft" && (m.horizontal === "right" || "center"),
                "animate-slideLeftRevRight -translate-x-[300vh]": !y && V === "slideLeft" && (m.horizontal === "right" || "center"),
                "animate-slideRightRight": y && V === "slideRight" && m.horizontal === "right",
                "animate-slideRightRevRight translate-x-[30vh]": !y && V === "slideRight" && m.horizontal === "right",
                "animate-slideRightLeft": y && V === "slideRight" && (m.horizontal === "left" || "center"),
                "animate-slideRightRevLeft translate-x-[300vh]": !y && V === "slideRight" && (m.horizontal === "left" || "center"),
                "animate-opacity0 opacity-0": !y && V === "fade",
                "animate-opacity": y && V === "fade",
                "animate-dwarf opacity-0": !y && V === "grown",
                "animate-grow": y && V === "grown"
              }
            ),
            ...$,
            children: [
              /* @__PURE__ */ A.jsx("div", { className: $e("py-2"), children: E }),
              D && /* @__PURE__ */ A.jsx("div", { className: "flex items-center ml-auto pl-4 -mr-2", children: D })
            ]
          }
        )
      ]
    },
    B
  ) }) });
}
const fE = zp({});
function n2({
  children: _,
  className: E,
  component: y,
  padding: D = "normal",
  size: x = "medium",
  stickyHeader: j,
  ...m
}) {
  const V = y || "table";
  return /* @__PURE__ */ A.jsx(
    fE.Provider,
    {
      value: {
        contextPadding: D,
        contextSize: x,
        contextSticky: j
      },
      children: /* @__PURE__ */ A.jsx(
        V,
        {
          className: $e(
            "table w-full  border-separate border-spacing-0",
            {
              [E || ""]: E
            }
          ),
          ...m,
          children: _
        }
      )
    }
  );
}
function r2({
  children: _,
  className: E,
  component: y,
  ...D
}) {
  const x = y || "tbody";
  return /* @__PURE__ */ A.jsx(
    x,
    {
      className: $e("table-row-group", {
        [E || ""]: E
      }),
      ...D,
      children: _
    }
  );
}
function a2({
  children: _,
  className: E,
  component: y,
  ...D
}) {
  const x = y || "tfoot";
  return /* @__PURE__ */ A.jsx(
    x,
    {
      className: $e("table-footer-group", {
        [E || ""]: E
      }),
      ...D,
      children: _
    }
  );
}
function i2({
  children: _,
  component: E,
  ...y
}) {
  const D = E || "div";
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(D, { ...y, children: _ }) });
}
const dE = zp({});
function l2({
  children: _,
  className: E,
  component: y,
  ...D
}) {
  const x = y || "thead";
  return /* @__PURE__ */ A.jsx(dE.Provider, { value: { head: !0 }, children: /* @__PURE__ */ A.jsx(
    x,
    {
      className: $e("table-row-group", {
        [E || ""]: E
      }),
      ...D,
      children: _
    }
  ) });
}
function u2({
  children: _,
  align: E = "left",
  className: y,
  component: D,
  padding: x,
  size: j,
  // sortDirection,
  variant: m,
  ...V
}) {
  const { head: U } = ys(dE), { contextPadding: $, contextSize: ee, contextSticky: B } = ys(fE);
  x = x || $ || "normal", j = j || ee || "medium", m = m || (U ? "head" : "body");
  const W = D || (m === "head" ? "th" : "td");
  return /* @__PURE__ */ A.jsx(
    W,
    {
      className: $e(" border-b table-cell border-b-gray-100 ", {
        "p-4": x === "normal" && j === "medium",
        "px-4 py-[6px]": x === "normal" && j === "small",
        "pl-1": x === "checkbox",
        "text-center": E === "center",
        "text-justify": E === "justify",
        "text-left": E === "left",
        "text-right flex-row-reverse": E === "right",
        "font-base text-base font-normal": m === "body",
        "font-base text-base text-black font-medium": m === "head",
        "font-base text-sm text-gray-600 font-normal": m === "footer",
        "sticky top-0 z-10 bg-white": B && U,
        [y || ""]: y
      }),
      ...V,
      children: _
    }
  );
}
export {
  ID as Alert,
  QD as AlertTitle,
  YD as ArrowDown,
  zD as ArrowDownIcon,
  $D as ArrowUp,
  UD as ArrowUpIcon,
  sD as Button,
  Um as ClickAway,
  GD as Collapse,
  lD as ErrorIcon,
  FD as FirstPageIcon,
  VD as FirstPageIconDis,
  XD as FormControl,
  Om as FormControlContext,
  cD as FormHelper,
  WD as IconButton,
  uD as InfoIcon,
  fD as Input,
  dD as InputLabel,
  BD as LastPageIcon,
  PD as LastPageIconDis,
  KD as Menu,
  ZD as MenuItem,
  bD as MenuList,
  jD as NextPageIcon,
  HD as NextPageIconDis,
  e2 as Option,
  iE as Paper,
  sE as Popover,
  OD as PrevPageIcon,
  AD as PrevPageIconDis,
  RD as RenderComponent,
  t2 as SnackBar,
  MD as StarIcon,
  ND as StarIconFilled,
  aD as SuccessIcon,
  n2 as Table,
  r2 as TableBody,
  u2 as TableCell,
  i2 as TableContainer,
  fE as TableContext,
  a2 as TableFooter,
  l2 as TableHead,
  dE as TableHeadContext,
  JD as TextField,
  cE as TextFieldContext,
  qD as Tooltip,
  oE as TooltipContext,
  iD as WarningIcon,
  oD as XIcon,
  wD as leftMargin,
  ED as setPopoverPosition,
  TD as topMargin
};
