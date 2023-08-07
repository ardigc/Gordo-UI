import gs, {
  useState as Tn,
  useRef as ms,
  useEffect as Up,
  createContext as Op,
  useContext as ys,
  useCallback as rD,
} from 'react'
function aD(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, 'default')
    ? _.default
    : _
}
var gS = { exports: {} },
  Lp = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eE
function iD() {
  if (eE) return Lp
  eE = 1
  var _ = gs,
    E = Symbol.for('react.element'),
    y = Symbol.for('react.fragment'),
    D = Object.prototype.hasOwnProperty,
    x = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    A = { key: !0, ref: !0, __self: !0, __source: !0 }
  function m(V, H, $) {
    var te,
      B = {},
      W = null,
      K = null
    $ !== void 0 && (W = '' + $),
      H.key !== void 0 && (W = '' + H.key),
      H.ref !== void 0 && (K = H.ref)
    for (te in H) D.call(H, te) && !A.hasOwnProperty(te) && (B[te] = H[te])
    if (V && V.defaultProps)
      for (te in ((H = V.defaultProps), H)) B[te] === void 0 && (B[te] = H[te])
    return { $$typeof: E, type: V, key: W, ref: K, props: B, _owner: x.current }
  }
  return (Lp.Fragment = y), (Lp.jsx = m), (Lp.jsxs = m), Lp
}
var Mp = {}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tE
function lD() {
  return (
    tE ||
      ((tE = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var _ = gs,
            E = Symbol.for('react.element'),
            y = Symbol.for('react.portal'),
            D = Symbol.for('react.fragment'),
            x = Symbol.for('react.strict_mode'),
            A = Symbol.for('react.profiler'),
            m = Symbol.for('react.provider'),
            V = Symbol.for('react.context'),
            H = Symbol.for('react.forward_ref'),
            $ = Symbol.for('react.suspense'),
            te = Symbol.for('react.suspense_list'),
            B = Symbol.for('react.memo'),
            W = Symbol.for('react.lazy'),
            K = Symbol.for('react.offscreen'),
            re = Symbol.iterator,
            Re = '@@iterator'
          function se(w) {
            if (w === null || typeof w != 'object') return null
            var q = (re && w[re]) || w[Re]
            return typeof q == 'function' ? q : null
          }
          var _e = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          function ge(w) {
            {
              for (
                var q = arguments.length,
                  oe = new Array(q > 1 ? q - 1 : 0),
                  Ue = 1;
                Ue < q;
                Ue++
              )
                oe[Ue - 1] = arguments[Ue]
              ce('error', w, oe)
            }
          }
          function ce(w, q, oe) {
            {
              var Ue = _e.ReactDebugCurrentFrame,
                Ze = Ue.getStackAddendum()
              Ze !== '' && ((q += '%s'), (oe = oe.concat([Ze])))
              var ht = oe.map(function (tt) {
                return String(tt)
              })
              ht.unshift('Warning: ' + q),
                Function.prototype.apply.call(console[w], console, ht)
            }
          }
          var He = !1,
            de = !1,
            Ee = !1,
            Ve = !1,
            nt = !1,
            ct
          ct = Symbol.for('react.module.reference')
          function ft(w) {
            return !!(
              typeof w == 'string' ||
              typeof w == 'function' ||
              w === D ||
              w === A ||
              nt ||
              w === x ||
              w === $ ||
              w === te ||
              Ve ||
              w === K ||
              He ||
              de ||
              Ee ||
              (typeof w == 'object' &&
                w !== null &&
                (w.$$typeof === W ||
                  w.$$typeof === B ||
                  w.$$typeof === m ||
                  w.$$typeof === V ||
                  w.$$typeof === H || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  w.$$typeof === ct ||
                  w.getModuleId !== void 0))
            )
          }
          function Pe(w, q, oe) {
            var Ue = w.displayName
            if (Ue) return Ue
            var Ze = q.displayName || q.name || ''
            return Ze !== '' ? oe + '(' + Ze + ')' : oe
          }
          function At(w) {
            return w.displayName || 'Context'
          }
          function Ne(w) {
            if (w == null) return null
            if (
              (typeof w.tag == 'number' &&
                ge(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                ),
              typeof w == 'function')
            )
              return w.displayName || w.name || null
            if (typeof w == 'string') return w
            switch (w) {
              case D:
                return 'Fragment'
              case y:
                return 'Portal'
              case A:
                return 'Profiler'
              case x:
                return 'StrictMode'
              case $:
                return 'Suspense'
              case te:
                return 'SuspenseList'
            }
            if (typeof w == 'object')
              switch (w.$$typeof) {
                case V:
                  var q = w
                  return At(q) + '.Consumer'
                case m:
                  var oe = w
                  return At(oe._context) + '.Provider'
                case H:
                  return Pe(w, w.render, 'ForwardRef')
                case B:
                  var Ue = w.displayName || null
                  return Ue !== null ? Ue : Ne(w.type) || 'Memo'
                case W: {
                  var Ze = w,
                    ht = Ze._payload,
                    tt = Ze._init
                  try {
                    return Ne(tt(ht))
                  } catch {
                    return null
                  }
                }
              }
            return null
          }
          var Ge = Object.assign,
            Je = 0,
            rt,
            $t,
            ee,
            we,
            le,
            et,
            lt
          function jt() {}
          jt.__reactDisabledLog = !0
          function bt() {
            {
              if (Je === 0) {
                ;(rt = console.log),
                  ($t = console.info),
                  (ee = console.warn),
                  (we = console.error),
                  (le = console.group),
                  (et = console.groupCollapsed),
                  (lt = console.groupEnd)
                var w = {
                  configurable: !0,
                  enumerable: !0,
                  value: jt,
                  writable: !0,
                }
                Object.defineProperties(console, {
                  info: w,
                  log: w,
                  warn: w,
                  error: w,
                  group: w,
                  groupCollapsed: w,
                  groupEnd: w,
                })
              }
              Je++
            }
          }
          function Ct() {
            {
              if ((Je--, Je === 0)) {
                var w = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                }
                Object.defineProperties(console, {
                  log: Ge({}, w, {
                    value: rt,
                  }),
                  info: Ge({}, w, {
                    value: $t,
                  }),
                  warn: Ge({}, w, {
                    value: ee,
                  }),
                  error: Ge({}, w, {
                    value: we,
                  }),
                  group: Ge({}, w, {
                    value: le,
                  }),
                  groupCollapsed: Ge({}, w, {
                    value: et,
                  }),
                  groupEnd: Ge({}, w, {
                    value: lt,
                  }),
                })
              }
              Je < 0 &&
                ge(
                  'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                )
            }
          }
          var en = _e.ReactCurrentDispatcher,
            ir
          function mn(w, q, oe) {
            {
              if (ir === void 0)
                try {
                  throw Error()
                } catch (Ze) {
                  var Ue = Ze.stack.trim().match(/\n( *(at )?)/)
                  ir = (Ue && Ue[1]) || ''
                }
              return (
                `
` +
                ir +
                w
              )
            }
          }
          var jn = !1,
            qr
          {
            var Xn = typeof WeakMap == 'function' ? WeakMap : Map
            qr = new Xn()
          }
          function yr(w, q) {
            if (!w || jn) return ''
            {
              var oe = qr.get(w)
              if (oe !== void 0) return oe
            }
            var Ue
            jn = !0
            var Ze = Error.prepareStackTrace
            Error.prepareStackTrace = void 0
            var ht
            ;(ht = en.current), (en.current = null), bt()
            try {
              if (q) {
                var tt = function () {
                  throw Error()
                }
                if (
                  (Object.defineProperty(tt.prototype, 'props', {
                    set: function () {
                      throw Error()
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(tt, [])
                  } catch (yt) {
                    Ue = yt
                  }
                  Reflect.construct(w, [], tt)
                } else {
                  try {
                    tt.call()
                  } catch (yt) {
                    Ue = yt
                  }
                  w.call(tt.prototype)
                }
              } else {
                try {
                  throw Error()
                } catch (yt) {
                  Ue = yt
                }
                w()
              }
            } catch (yt) {
              if (yt && Ue && typeof yt.stack == 'string') {
                for (
                  var Ae = yt.stack.split(`
`),
                    Dn = Ue.stack.split(`
`),
                    It = Ae.length - 1,
                    Qt = Dn.length - 1;
                  It >= 1 && Qt >= 0 && Ae[It] !== Dn[Qt];

                )
                  Qt--
                for (; It >= 1 && Qt >= 0; It--, Qt--)
                  if (Ae[It] !== Dn[Qt]) {
                    if (It !== 1 || Qt !== 1)
                      do
                        if ((It--, Qt--, Qt < 0 || Ae[It] !== Dn[Qt])) {
                          var lr =
                            `
` + Ae[It].replace(' at new ', ' at ')
                          return (
                            w.displayName &&
                              lr.includes('<anonymous>') &&
                              (lr = lr.replace('<anonymous>', w.displayName)),
                            typeof w == 'function' && qr.set(w, lr),
                            lr
                          )
                        }
                      while (It >= 1 && Qt >= 0)
                    break
                  }
              }
            } finally {
              ;(jn = !1),
                (en.current = ht),
                Ct(),
                (Error.prepareStackTrace = Ze)
            }
            var Mi = w ? w.displayName || w.name : '',
              xs = Mi ? mn(Mi) : ''
            return typeof w == 'function' && qr.set(w, xs), xs
          }
          function sn(w, q, oe) {
            return yr(w, !1)
          }
          function bn(w) {
            var q = w.prototype
            return !!(q && q.isReactComponent)
          }
          function yn(w, q, oe) {
            if (w == null) return ''
            if (typeof w == 'function') return yr(w, bn(w))
            if (typeof w == 'string') return mn(w)
            switch (w) {
              case $:
                return mn('Suspense')
              case te:
                return mn('SuspenseList')
            }
            if (typeof w == 'object')
              switch (w.$$typeof) {
                case H:
                  return sn(w.render)
                case B:
                  return yn(w.type, q, oe)
                case W: {
                  var Ue = w,
                    Ze = Ue._payload,
                    ht = Ue._init
                  try {
                    return yn(ht(Ze), q, oe)
                  } catch {}
                }
              }
            return ''
          }
          var Ht = Object.prototype.hasOwnProperty,
            qn = {},
            Kr = _e.ReactDebugCurrentFrame
          function xa(w) {
            if (w) {
              var q = w._owner,
                oe = yn(w.type, w._source, q ? q.type : null)
              Kr.setExtraStackFrame(oe)
            } else Kr.setExtraStackFrame(null)
          }
          function Ja(w, q, oe, Ue, Ze) {
            {
              var ht = Function.call.bind(Ht)
              for (var tt in w)
                if (ht(w, tt)) {
                  var Ae = void 0
                  try {
                    if (typeof w[tt] != 'function') {
                      var Dn = Error(
                        (Ue || 'React class') +
                          ': ' +
                          oe +
                          ' type `' +
                          tt +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof w[tt] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                      )
                      throw ((Dn.name = 'Invariant Violation'), Dn)
                    }
                    Ae = w[tt](
                      q,
                      tt,
                      Ue,
                      oe,
                      null,
                      'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                    )
                  } catch (It) {
                    Ae = It
                  }
                  Ae &&
                    !(Ae instanceof Error) &&
                    (xa(Ze),
                    ge(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      Ue || 'React class',
                      oe,
                      tt,
                      typeof Ae
                    ),
                    xa(null)),
                    Ae instanceof Error &&
                      !(Ae.message in qn) &&
                      ((qn[Ae.message] = !0),
                      xa(Ze),
                      ge('Failed %s type: %s', oe, Ae.message),
                      xa(null))
                }
            }
          }
          var Aa = Array.isArray
          function Ca(w) {
            return Aa(w)
          }
          function zr(w) {
            {
              var q = typeof Symbol == 'function' && Symbol.toStringTag,
                oe =
                  (q && w[Symbol.toStringTag]) || w.constructor.name || 'Object'
              return oe
            }
          }
          function ja(w) {
            try {
              return Ur(w), !1
            } catch {
              return !0
            }
          }
          function Ur(w) {
            return '' + w
          }
          function Ea(w) {
            if (ja(w))
              return (
                ge(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  zr(w)
                ),
                Ur(w)
              )
          }
          var cn = _e.ReactCurrentOwner,
            Or = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            Di,
            wa,
            ue
          ue = {}
          function Le(w) {
            if (Ht.call(w, 'ref')) {
              var q = Object.getOwnPropertyDescriptor(w, 'ref').get
              if (q && q.isReactWarning) return !1
            }
            return w.ref !== void 0
          }
          function at(w) {
            if (Ht.call(w, 'key')) {
              var q = Object.getOwnPropertyDescriptor(w, 'key').get
              if (q && q.isReactWarning) return !1
            }
            return w.key !== void 0
          }
          function Rt(w, q) {
            if (
              typeof w.ref == 'string' &&
              cn.current &&
              q &&
              cn.current.stateNode !== q
            ) {
              var oe = Ne(cn.current.type)
              ue[oe] ||
                (ge(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  Ne(cn.current.type),
                  w.ref
                ),
                (ue[oe] = !0))
            }
          }
          function Xt(w, q) {
            {
              var oe = function () {
                Di ||
                  ((Di = !0),
                  ge(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    q
                  ))
              }
              ;(oe.isReactWarning = !0),
                Object.defineProperty(w, 'key', {
                  get: oe,
                  configurable: !0,
                })
            }
          }
          function kn(w, q) {
            {
              var oe = function () {
                wa ||
                  ((wa = !0),
                  ge(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    q
                  ))
              }
              ;(oe.isReactWarning = !0),
                Object.defineProperty(w, 'ref', {
                  get: oe,
                  configurable: !0,
                })
            }
          }
          var an = function (w, q, oe, Ue, Ze, ht, tt) {
            var Ae = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: E,
              // Built-in properties that belong on the element
              type: w,
              key: q,
              ref: oe,
              props: tt,
              // Record the component responsible for creating this element.
              _owner: ht,
            }
            return (
              (Ae._store = {}),
              Object.defineProperty(Ae._store, 'validated', {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(Ae, '_self', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: Ue,
              }),
              Object.defineProperty(Ae, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: Ze,
              }),
              Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)),
              Ae
            )
          }
          function gr(w, q, oe, Ue, Ze) {
            {
              var ht,
                tt = {},
                Ae = null,
                Dn = null
              oe !== void 0 && (Ea(oe), (Ae = '' + oe)),
                at(q) && (Ea(q.key), (Ae = '' + q.key)),
                Le(q) && ((Dn = q.ref), Rt(q, Ze))
              for (ht in q)
                Ht.call(q, ht) && !Or.hasOwnProperty(ht) && (tt[ht] = q[ht])
              if (w && w.defaultProps) {
                var It = w.defaultProps
                for (ht in It) tt[ht] === void 0 && (tt[ht] = It[ht])
              }
              if (Ae || Dn) {
                var Qt =
                  typeof w == 'function'
                    ? w.displayName || w.name || 'Unknown'
                    : w
                Ae && Xt(tt, Qt), Dn && kn(tt, Qt)
              }
              return an(w, Ae, Dn, Ze, Ue, cn.current, tt)
            }
          }
          var Ut = _e.ReactCurrentOwner,
            Ar = _e.ReactDebugCurrentFrame
          function Lt(w) {
            if (w) {
              var q = w._owner,
                oe = yn(w.type, w._source, q ? q.type : null)
              Ar.setExtraStackFrame(oe)
            } else Ar.setExtraStackFrame(null)
          }
          var Ot
          Ot = !1
          function au(w) {
            return typeof w == 'object' && w !== null && w.$$typeof === E
          }
          function dl() {
            {
              if (Ut.current) {
                var w = Ne(Ut.current.type)
                if (w)
                  return (
                    `

Check the render method of \`` +
                    w +
                    '`.'
                  )
              }
              return ''
            }
          }
          function iu(w) {
            {
              if (w !== void 0) {
                var q = w.fileName.replace(/^.*[\\\/]/, ''),
                  oe = w.lineNumber
                return (
                  `

Check your code at ` +
                  q +
                  ':' +
                  oe +
                  '.'
                )
              }
              return ''
            }
          }
          var lo = {}
          function Ss(w) {
            {
              var q = dl()
              if (!q) {
                var oe = typeof w == 'string' ? w : w.displayName || w.name
                oe &&
                  (q =
                    `

Check the top-level render call using <` +
                    oe +
                    '>.')
              }
              return q
            }
          }
          function pl(w, q) {
            {
              if (!w._store || w._store.validated || w.key != null) return
              w._store.validated = !0
              var oe = Ss(q)
              if (lo[oe]) return
              lo[oe] = !0
              var Ue = ''
              w &&
                w._owner &&
                w._owner !== Ut.current &&
                (Ue = ' It was passed a child from ' + Ne(w._owner.type) + '.'),
                Lt(w),
                ge(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  oe,
                  Ue
                ),
                Lt(null)
            }
          }
          function lu(w, q) {
            {
              if (typeof w != 'object') return
              if (Ca(w))
                for (var oe = 0; oe < w.length; oe++) {
                  var Ue = w[oe]
                  au(Ue) && pl(Ue, q)
                }
              else if (au(w)) w._store && (w._store.validated = !0)
              else if (w) {
                var Ze = se(w)
                if (typeof Ze == 'function' && Ze !== w.entries)
                  for (var ht = Ze.call(w), tt; !(tt = ht.next()).done; )
                    au(tt.value) && pl(tt.value, q)
              }
            }
          }
          function vl(w) {
            {
              var q = w.type
              if (q == null || typeof q == 'string') return
              var oe
              if (typeof q == 'function') oe = q.propTypes
              else if (
                typeof q == 'object' &&
                (q.$$typeof === H || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  q.$$typeof === B)
              )
                oe = q.propTypes
              else return
              if (oe) {
                var Ue = Ne(q)
                Ja(oe, w.props, 'prop', Ue, w)
              } else if (q.PropTypes !== void 0 && !Ot) {
                Ot = !0
                var Ze = Ne(q)
                ge(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  Ze || 'Unknown'
                )
              }
              typeof q.getDefaultProps == 'function' &&
                !q.getDefaultProps.isReactClassApproved &&
                ge(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                )
            }
          }
          function uu(w) {
            {
              for (var q = Object.keys(w.props), oe = 0; oe < q.length; oe++) {
                var Ue = q[oe]
                if (Ue !== 'children' && Ue !== 'key') {
                  Lt(w),
                    ge(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      Ue
                    ),
                    Lt(null)
                  break
                }
              }
              w.ref !== null &&
                (Lt(w),
                ge('Invalid attribute `ref` supplied to `React.Fragment`.'),
                Lt(null))
            }
          }
          function Ha(w, q, oe, Ue, Ze, ht) {
            {
              var tt = ft(w)
              if (!tt) {
                var Ae = ''
                ;(w === void 0 ||
                  (typeof w == 'object' &&
                    w !== null &&
                    Object.keys(w).length === 0)) &&
                  (Ae +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
                var Dn = iu(Ze)
                Dn ? (Ae += Dn) : (Ae += dl())
                var It
                w === null
                  ? (It = 'null')
                  : Ca(w)
                  ? (It = 'array')
                  : w !== void 0 && w.$$typeof === E
                  ? ((It = '<' + (Ne(w.type) || 'Unknown') + ' />'),
                    (Ae =
                      ' Did you accidentally export a JSX literal instead of a component?'))
                  : (It = typeof w),
                  ge(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    It,
                    Ae
                  )
              }
              var Qt = gr(w, q, oe, Ze, ht)
              if (Qt == null) return Qt
              if (tt) {
                var lr = q.children
                if (lr !== void 0)
                  if (Ue)
                    if (Ca(lr)) {
                      for (var Mi = 0; Mi < lr.length; Mi++) lu(lr[Mi], w)
                      Object.freeze && Object.freeze(lr)
                    } else
                      ge(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      )
                  else lu(lr, w)
              }
              return w === D ? uu(Qt) : vl(Qt), Qt
            }
          }
          function _i(w, q, oe) {
            return Ha(w, q, oe, !0)
          }
          function jr(w, q, oe) {
            return Ha(w, q, oe, !1)
          }
          var Ra = jr,
            Li = _i
          ;(Mp.Fragment = D), (Mp.jsx = Ra), (Mp.jsxs = Li)
        })()),
    Mp
  )
}
process.env.NODE_ENV === 'production'
  ? (gS.exports = iD())
  : (gS.exports = lD())
var z = gS.exports,
  zp = {},
  SS = { exports: {} },
  ga = {},
  Om = { exports: {} },
  mS = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nE
function uD() {
  return (
    nE ||
      ((nE = 1),
      (function (_) {
        function E(ee, we) {
          var le = ee.length
          ee.push(we)
          e: for (; 0 < le; ) {
            var et = (le - 1) >>> 1,
              lt = ee[et]
            if (0 < x(lt, we)) (ee[et] = we), (ee[le] = lt), (le = et)
            else break e
          }
        }
        function y(ee) {
          return ee.length === 0 ? null : ee[0]
        }
        function D(ee) {
          if (ee.length === 0) return null
          var we = ee[0],
            le = ee.pop()
          if (le !== we) {
            ee[0] = le
            e: for (var et = 0, lt = ee.length, jt = lt >>> 1; et < jt; ) {
              var bt = 2 * (et + 1) - 1,
                Ct = ee[bt],
                en = bt + 1,
                ir = ee[en]
              if (0 > x(Ct, le))
                en < lt && 0 > x(ir, Ct)
                  ? ((ee[et] = ir), (ee[en] = le), (et = en))
                  : ((ee[et] = Ct), (ee[bt] = le), (et = bt))
              else if (en < lt && 0 > x(ir, le))
                (ee[et] = ir), (ee[en] = le), (et = en)
              else break e
            }
          }
          return we
        }
        function x(ee, we) {
          var le = ee.sortIndex - we.sortIndex
          return le !== 0 ? le : ee.id - we.id
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var A = performance
          _.unstable_now = function () {
            return A.now()
          }
        } else {
          var m = Date,
            V = m.now()
          _.unstable_now = function () {
            return m.now() - V
          }
        }
        var H = [],
          $ = [],
          te = 1,
          B = null,
          W = 3,
          K = !1,
          re = !1,
          Re = !1,
          se = typeof setTimeout == 'function' ? setTimeout : null,
          _e = typeof clearTimeout == 'function' ? clearTimeout : null,
          ge = typeof setImmediate < 'u' ? setImmediate : null
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function ce(ee) {
          for (var we = y($); we !== null; ) {
            if (we.callback === null) D($)
            else if (we.startTime <= ee)
              D($), (we.sortIndex = we.expirationTime), E(H, we)
            else break
            we = y($)
          }
        }
        function He(ee) {
          if (((Re = !1), ce(ee), !re))
            if (y(H) !== null) (re = !0), rt(de)
            else {
              var we = y($)
              we !== null && $t(He, we.startTime - ee)
            }
        }
        function de(ee, we) {
          ;(re = !1), Re && ((Re = !1), _e(nt), (nt = -1)), (K = !0)
          var le = W
          try {
            for (
              ce(we), B = y(H);
              B !== null && (!(B.expirationTime > we) || (ee && !Pe()));

            ) {
              var et = B.callback
              if (typeof et == 'function') {
                ;(B.callback = null), (W = B.priorityLevel)
                var lt = et(B.expirationTime <= we)
                ;(we = _.unstable_now()),
                  typeof lt == 'function'
                    ? (B.callback = lt)
                    : B === y(H) && D(H),
                  ce(we)
              } else D(H)
              B = y(H)
            }
            if (B !== null) var jt = !0
            else {
              var bt = y($)
              bt !== null && $t(He, bt.startTime - we), (jt = !1)
            }
            return jt
          } finally {
            ;(B = null), (W = le), (K = !1)
          }
        }
        var Ee = !1,
          Ve = null,
          nt = -1,
          ct = 5,
          ft = -1
        function Pe() {
          return !(_.unstable_now() - ft < ct)
        }
        function At() {
          if (Ve !== null) {
            var ee = _.unstable_now()
            ft = ee
            var we = !0
            try {
              we = Ve(!0, ee)
            } finally {
              we ? Ne() : ((Ee = !1), (Ve = null))
            }
          } else Ee = !1
        }
        var Ne
        if (typeof ge == 'function')
          Ne = function () {
            ge(At)
          }
        else if (typeof MessageChannel < 'u') {
          var Ge = new MessageChannel(),
            Je = Ge.port2
          ;(Ge.port1.onmessage = At),
            (Ne = function () {
              Je.postMessage(null)
            })
        } else
          Ne = function () {
            se(At, 0)
          }
        function rt(ee) {
          ;(Ve = ee), Ee || ((Ee = !0), Ne())
        }
        function $t(ee, we) {
          nt = se(function () {
            ee(_.unstable_now())
          }, we)
        }
        ;(_.unstable_IdlePriority = 5),
          (_.unstable_ImmediatePriority = 1),
          (_.unstable_LowPriority = 4),
          (_.unstable_NormalPriority = 3),
          (_.unstable_Profiling = null),
          (_.unstable_UserBlockingPriority = 2),
          (_.unstable_cancelCallback = function (ee) {
            ee.callback = null
          }),
          (_.unstable_continueExecution = function () {
            re || K || ((re = !0), rt(de))
          }),
          (_.unstable_forceFrameRate = function (ee) {
            0 > ee || 125 < ee
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ct = 0 < ee ? Math.floor(1e3 / ee) : 5)
          }),
          (_.unstable_getCurrentPriorityLevel = function () {
            return W
          }),
          (_.unstable_getFirstCallbackNode = function () {
            return y(H)
          }),
          (_.unstable_next = function (ee) {
            switch (W) {
              case 1:
              case 2:
              case 3:
                var we = 3
                break
              default:
                we = W
            }
            var le = W
            W = we
            try {
              return ee()
            } finally {
              W = le
            }
          }),
          (_.unstable_pauseExecution = function () {}),
          (_.unstable_requestPaint = function () {}),
          (_.unstable_runWithPriority = function (ee, we) {
            switch (ee) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                ee = 3
            }
            var le = W
            W = ee
            try {
              return we()
            } finally {
              W = le
            }
          }),
          (_.unstable_scheduleCallback = function (ee, we, le) {
            var et = _.unstable_now()
            switch (
              (typeof le == 'object' && le !== null
                ? ((le = le.delay),
                  (le = typeof le == 'number' && 0 < le ? et + le : et))
                : (le = et),
              ee)
            ) {
              case 1:
                var lt = -1
                break
              case 2:
                lt = 250
                break
              case 5:
                lt = 1073741823
                break
              case 4:
                lt = 1e4
                break
              default:
                lt = 5e3
            }
            return (
              (lt = le + lt),
              (ee = {
                id: te++,
                callback: we,
                priorityLevel: ee,
                startTime: le,
                expirationTime: lt,
                sortIndex: -1,
              }),
              le > et
                ? ((ee.sortIndex = le),
                  E($, ee),
                  y(H) === null &&
                    ee === y($) &&
                    (Re ? (_e(nt), (nt = -1)) : (Re = !0), $t(He, le - et)))
                : ((ee.sortIndex = lt),
                  E(H, ee),
                  re || K || ((re = !0), rt(de))),
              ee
            )
          }),
          (_.unstable_shouldYield = Pe),
          (_.unstable_wrapCallback = function (ee) {
            var we = W
            return function () {
              var le = W
              W = we
              try {
                return ee.apply(this, arguments)
              } finally {
                W = le
              }
            }
          })
      })(mS)),
    mS
  )
}
var yS = {}
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rE
function oD() {
  return (
    rE ||
      ((rE = 1),
      (function (_) {
        process.env.NODE_ENV !== 'production' &&
          (function () {
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
                'function' &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
                new Error()
              )
            var E = !1,
              y = !1,
              D = 5
            function x(ue, Le) {
              var at = ue.length
              ue.push(Le), V(ue, Le, at)
            }
            function A(ue) {
              return ue.length === 0 ? null : ue[0]
            }
            function m(ue) {
              if (ue.length === 0) return null
              var Le = ue[0],
                at = ue.pop()
              return at !== Le && ((ue[0] = at), H(ue, at, 0)), Le
            }
            function V(ue, Le, at) {
              for (var Rt = at; Rt > 0; ) {
                var Xt = (Rt - 1) >>> 1,
                  kn = ue[Xt]
                if ($(kn, Le) > 0) (ue[Xt] = Le), (ue[Rt] = kn), (Rt = Xt)
                else return
              }
            }
            function H(ue, Le, at) {
              for (var Rt = at, Xt = ue.length, kn = Xt >>> 1; Rt < kn; ) {
                var an = (Rt + 1) * 2 - 1,
                  gr = ue[an],
                  Ut = an + 1,
                  Ar = ue[Ut]
                if ($(gr, Le) < 0)
                  Ut < Xt && $(Ar, gr) < 0
                    ? ((ue[Rt] = Ar), (ue[Ut] = Le), (Rt = Ut))
                    : ((ue[Rt] = gr), (ue[an] = Le), (Rt = an))
                else if (Ut < Xt && $(Ar, Le) < 0)
                  (ue[Rt] = Ar), (ue[Ut] = Le), (Rt = Ut)
                else return
              }
            }
            function $(ue, Le) {
              var at = ue.sortIndex - Le.sortIndex
              return at !== 0 ? at : ue.id - Le.id
            }
            var te = 1,
              B = 2,
              W = 3,
              K = 4,
              re = 5
            function Re(ue, Le) {}
            var se =
              typeof performance == 'object' &&
              typeof performance.now == 'function'
            if (se) {
              var _e = performance
              _.unstable_now = function () {
                return _e.now()
              }
            } else {
              var ge = Date,
                ce = ge.now()
              _.unstable_now = function () {
                return ge.now() - ce
              }
            }
            var He = 1073741823,
              de = -1,
              Ee = 250,
              Ve = 5e3,
              nt = 1e4,
              ct = He,
              ft = [],
              Pe = [],
              At = 1,
              Ne = null,
              Ge = W,
              Je = !1,
              rt = !1,
              $t = !1,
              ee = typeof setTimeout == 'function' ? setTimeout : null,
              we = typeof clearTimeout == 'function' ? clearTimeout : null,
              le = typeof setImmediate < 'u' ? setImmediate : null
            typeof navigator < 'u' &&
              navigator.scheduling !== void 0 &&
              navigator.scheduling.isInputPending !== void 0 &&
              navigator.scheduling.isInputPending.bind(navigator.scheduling)
            function et(ue) {
              for (var Le = A(Pe); Le !== null; ) {
                if (Le.callback === null) m(Pe)
                else if (Le.startTime <= ue)
                  m(Pe), (Le.sortIndex = Le.expirationTime), x(ft, Le)
                else return
                Le = A(Pe)
              }
            }
            function lt(ue) {
              if ((($t = !1), et(ue), !rt))
                if (A(ft) !== null) (rt = !0), Ea(jt)
                else {
                  var Le = A(Pe)
                  Le !== null && cn(lt, Le.startTime - ue)
                }
            }
            function jt(ue, Le) {
              ;(rt = !1), $t && (($t = !1), Or()), (Je = !0)
              var at = Ge
              try {
                var Rt
                if (!y) return bt(ue, Le)
              } finally {
                ;(Ne = null), (Ge = at), (Je = !1)
              }
            }
            function bt(ue, Le) {
              var at = Le
              for (
                et(at), Ne = A(ft);
                Ne !== null && !E && !(Ne.expirationTime > at && (!ue || xa()));

              ) {
                var Rt = Ne.callback
                if (typeof Rt == 'function') {
                  ;(Ne.callback = null), (Ge = Ne.priorityLevel)
                  var Xt = Ne.expirationTime <= at,
                    kn = Rt(Xt)
                  ;(at = _.unstable_now()),
                    typeof kn == 'function'
                      ? (Ne.callback = kn)
                      : Ne === A(ft) && m(ft),
                    et(at)
                } else m(ft)
                Ne = A(ft)
              }
              if (Ne !== null) return !0
              var an = A(Pe)
              return an !== null && cn(lt, an.startTime - at), !1
            }
            function Ct(ue, Le) {
              switch (ue) {
                case te:
                case B:
                case W:
                case K:
                case re:
                  break
                default:
                  ue = W
              }
              var at = Ge
              Ge = ue
              try {
                return Le()
              } finally {
                Ge = at
              }
            }
            function en(ue) {
              var Le
              switch (Ge) {
                case te:
                case B:
                case W:
                  Le = W
                  break
                default:
                  Le = Ge
                  break
              }
              var at = Ge
              Ge = Le
              try {
                return ue()
              } finally {
                Ge = at
              }
            }
            function ir(ue) {
              var Le = Ge
              return function () {
                var at = Ge
                Ge = Le
                try {
                  return ue.apply(this, arguments)
                } finally {
                  Ge = at
                }
              }
            }
            function mn(ue, Le, at) {
              var Rt = _.unstable_now(),
                Xt
              if (typeof at == 'object' && at !== null) {
                var kn = at.delay
                typeof kn == 'number' && kn > 0 ? (Xt = Rt + kn) : (Xt = Rt)
              } else Xt = Rt
              var an
              switch (ue) {
                case te:
                  an = de
                  break
                case B:
                  an = Ee
                  break
                case re:
                  an = ct
                  break
                case K:
                  an = nt
                  break
                case W:
                default:
                  an = Ve
                  break
              }
              var gr = Xt + an,
                Ut = {
                  id: At++,
                  callback: Le,
                  priorityLevel: ue,
                  startTime: Xt,
                  expirationTime: gr,
                  sortIndex: -1,
                }
              return (
                Xt > Rt
                  ? ((Ut.sortIndex = Xt),
                    x(Pe, Ut),
                    A(ft) === null &&
                      Ut === A(Pe) &&
                      ($t ? Or() : ($t = !0), cn(lt, Xt - Rt)))
                  : ((Ut.sortIndex = gr),
                    x(ft, Ut),
                    !rt && !Je && ((rt = !0), Ea(jt))),
                Ut
              )
            }
            function jn() {}
            function qr() {
              !rt && !Je && ((rt = !0), Ea(jt))
            }
            function Xn() {
              return A(ft)
            }
            function yr(ue) {
              ue.callback = null
            }
            function sn() {
              return Ge
            }
            var bn = !1,
              yn = null,
              Ht = -1,
              qn = D,
              Kr = -1
            function xa() {
              var ue = _.unstable_now() - Kr
              return !(ue < qn)
            }
            function Ja() {}
            function Aa(ue) {
              if (ue < 0 || ue > 125) {
                console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
                return
              }
              ue > 0 ? (qn = Math.floor(1e3 / ue)) : (qn = D)
            }
            var Ca = function () {
                if (yn !== null) {
                  var ue = _.unstable_now()
                  Kr = ue
                  var Le = !0,
                    at = !0
                  try {
                    at = yn(Le, ue)
                  } finally {
                    at ? zr() : ((bn = !1), (yn = null))
                  }
                } else bn = !1
              },
              zr
            if (typeof le == 'function')
              zr = function () {
                le(Ca)
              }
            else if (typeof MessageChannel < 'u') {
              var ja = new MessageChannel(),
                Ur = ja.port2
              ;(ja.port1.onmessage = Ca),
                (zr = function () {
                  Ur.postMessage(null)
                })
            } else
              zr = function () {
                ee(Ca, 0)
              }
            function Ea(ue) {
              ;(yn = ue), bn || ((bn = !0), zr())
            }
            function cn(ue, Le) {
              Ht = ee(function () {
                ue(_.unstable_now())
              }, Le)
            }
            function Or() {
              we(Ht), (Ht = -1)
            }
            var Di = Ja,
              wa = null
            ;(_.unstable_IdlePriority = re),
              (_.unstable_ImmediatePriority = te),
              (_.unstable_LowPriority = K),
              (_.unstable_NormalPriority = W),
              (_.unstable_Profiling = wa),
              (_.unstable_UserBlockingPriority = B),
              (_.unstable_cancelCallback = yr),
              (_.unstable_continueExecution = qr),
              (_.unstable_forceFrameRate = Aa),
              (_.unstable_getCurrentPriorityLevel = sn),
              (_.unstable_getFirstCallbackNode = Xn),
              (_.unstable_next = en),
              (_.unstable_pauseExecution = jn),
              (_.unstable_requestPaint = Di),
              (_.unstable_runWithPriority = Ct),
              (_.unstable_scheduleCallback = mn),
              (_.unstable_shouldYield = xa),
              (_.unstable_wrapCallback = ir),
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                  'function' &&
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                  new Error()
                )
          })()
      })(yS)),
    yS
  )
}
var aE
function uE() {
  return (
    aE ||
      ((aE = 1),
      process.env.NODE_ENV === 'production'
        ? (Om.exports = uD())
        : (Om.exports = oD())),
    Om.exports
  )
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
var iE
function sD() {
  if (iE) return ga
  iE = 1
  var _ = gs,
    E = uE()
  function y(n) {
    for (
      var r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + n,
        l = 1;
      l < arguments.length;
      l++
    )
      r += '&args[]=' + encodeURIComponent(arguments[l])
    return (
      'Minified React error #' +
      n +
      '; visit ' +
      r +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  var D = /* @__PURE__ */ new Set(),
    x = {}
  function A(n, r) {
    m(n, r), m(n + 'Capture', r)
  }
  function m(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++) D.add(r[n])
  }
  var V = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    H = Object.prototype.hasOwnProperty,
    $ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    te = {},
    B = {}
  function W(n) {
    return H.call(B, n)
      ? !0
      : H.call(te, n)
      ? !1
      : $.test(n)
      ? (B[n] = !0)
      : ((te[n] = !0), !1)
  }
  function K(n, r, l, o) {
    if (l !== null && l.type === 0) return !1
    switch (typeof r) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return o
          ? !1
          : l !== null
          ? !l.acceptsBooleans
          : ((n = n.toLowerCase().slice(0, 5)), n !== 'data-' && n !== 'aria-')
      default:
        return !1
    }
  }
  function re(n, r, l, o) {
    if (r === null || typeof r > 'u' || K(n, r, l, o)) return !0
    if (o) return !1
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r
        case 4:
          return r === !1
        case 5:
          return isNaN(r)
        case 6:
          return isNaN(r) || 1 > r
      }
    return !1
  }
  function Re(n, r, l, o, c, d, h) {
    ;(this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = o),
      (this.attributeNamespace = c),
      (this.mustUseProperty = l),
      (this.propertyName = n),
      (this.type = r),
      (this.sanitizeURL = d),
      (this.removeEmptyString = h)
  }
  var se = {}
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (n) {
      se[n] = new Re(n, 0, !1, n, null, !1, !1)
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (n) {
      var r = n[0]
      se[r] = new Re(r, 1, !1, n[1], null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      n
    ) {
      se[n] = new Re(n, 2, !1, n.toLowerCase(), null, !1, !1)
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (n) {
      se[n] = new Re(n, 2, !1, n, null, !1, !1)
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (n) {
        se[n] = new Re(n, 3, !1, n.toLowerCase(), null, !1, !1)
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (n) {
      se[n] = new Re(n, 3, !0, n, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (n) {
      se[n] = new Re(n, 4, !1, n, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (n) {
      se[n] = new Re(n, 6, !1, n, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (n) {
      se[n] = new Re(n, 5, !1, n.toLowerCase(), null, !1, !1)
    })
  var _e = /[\-:]([a-z])/g
  function ge(n) {
    return n[1].toUpperCase()
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (n) {
      var r = n.replace(_e, ge)
      se[r] = new Re(r, 1, !1, n, null, !1, !1)
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (n) {
        var r = n.replace(_e, ge)
        se[r] = new Re(r, 1, !1, n, 'http://www.w3.org/1999/xlink', !1, !1)
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (n) {
      var r = n.replace(_e, ge)
      se[r] = new Re(
        r,
        1,
        !1,
        n,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1
      )
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (n) {
      se[n] = new Re(n, 1, !1, n.toLowerCase(), null, !1, !1)
    }),
    (se.xlinkHref = new Re(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (n) {
      se[n] = new Re(n, 1, !1, n.toLowerCase(), null, !0, !0)
    })
  function ce(n, r, l, o) {
    var c = se.hasOwnProperty(r) ? se[r] : null
    ;(c !== null
      ? c.type !== 0
      : o ||
        !(2 < r.length) ||
        (r[0] !== 'o' && r[0] !== 'O') ||
        (r[1] !== 'n' && r[1] !== 'N')) &&
      (re(r, l, c, o) && (l = null),
      o || c === null
        ? W(r) &&
          (l === null ? n.removeAttribute(r) : n.setAttribute(r, '' + l))
        : c.mustUseProperty
        ? (n[c.propertyName] = l === null ? (c.type === 3 ? !1 : '') : l)
        : ((r = c.attributeName),
          (o = c.attributeNamespace),
          l === null
            ? n.removeAttribute(r)
            : ((c = c.type),
              (l = c === 3 || (c === 4 && l === !0) ? '' : '' + l),
              o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))))
  }
  var He = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    de = Symbol.for('react.element'),
    Ee = Symbol.for('react.portal'),
    Ve = Symbol.for('react.fragment'),
    nt = Symbol.for('react.strict_mode'),
    ct = Symbol.for('react.profiler'),
    ft = Symbol.for('react.provider'),
    Pe = Symbol.for('react.context'),
    At = Symbol.for('react.forward_ref'),
    Ne = Symbol.for('react.suspense'),
    Ge = Symbol.for('react.suspense_list'),
    Je = Symbol.for('react.memo'),
    rt = Symbol.for('react.lazy'),
    $t = Symbol.for('react.offscreen'),
    ee = Symbol.iterator
  function we(n) {
    return n === null || typeof n != 'object'
      ? null
      : ((n = (ee && n[ee]) || n['@@iterator']),
        typeof n == 'function' ? n : null)
  }
  var le = Object.assign,
    et
  function lt(n) {
    if (et === void 0)
      try {
        throw Error()
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/)
        et = (r && r[1]) || ''
      }
    return (
      `
` +
      et +
      n
    )
  }
  var jt = !1
  function bt(n, r) {
    if (!n || jt) return ''
    jt = !0
    var l = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (r)
        if (
          ((r = function () {
            throw Error()
          }),
          Object.defineProperty(r.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, [])
          } catch (F) {
            var o = F
          }
          Reflect.construct(n, [], r)
        } else {
          try {
            r.call()
          } catch (F) {
            o = F
          }
          n.call(r.prototype)
        }
      else {
        try {
          throw Error()
        } catch (F) {
          o = F
        }
        n()
      }
    } catch (F) {
      if (F && o && typeof F.stack == 'string') {
        for (
          var c = F.stack.split(`
`),
            d = o.stack.split(`
`),
            h = c.length - 1,
            C = d.length - 1;
          1 <= h && 0 <= C && c[h] !== d[C];

        )
          C--
        for (; 1 <= h && 0 <= C; h--, C--)
          if (c[h] !== d[C]) {
            if (h !== 1 || C !== 1)
              do
                if ((h--, C--, 0 > C || c[h] !== d[C])) {
                  var R =
                    `
` + c[h].replace(' at new ', ' at ')
                  return (
                    n.displayName &&
                      R.includes('<anonymous>') &&
                      (R = R.replace('<anonymous>', n.displayName)),
                    R
                  )
                }
              while (1 <= h && 0 <= C)
            break
          }
      }
    } finally {
      ;(jt = !1), (Error.prepareStackTrace = l)
    }
    return (n = n ? n.displayName || n.name : '') ? lt(n) : ''
  }
  function Ct(n) {
    switch (n.tag) {
      case 5:
        return lt(n.type)
      case 16:
        return lt('Lazy')
      case 13:
        return lt('Suspense')
      case 19:
        return lt('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (n = bt(n.type, !1)), n
      case 11:
        return (n = bt(n.type.render, !1)), n
      case 1:
        return (n = bt(n.type, !0)), n
      default:
        return ''
    }
  }
  function en(n) {
    if (n == null) return null
    if (typeof n == 'function') return n.displayName || n.name || null
    if (typeof n == 'string') return n
    switch (n) {
      case Ve:
        return 'Fragment'
      case Ee:
        return 'Portal'
      case ct:
        return 'Profiler'
      case nt:
        return 'StrictMode'
      case Ne:
        return 'Suspense'
      case Ge:
        return 'SuspenseList'
    }
    if (typeof n == 'object')
      switch (n.$$typeof) {
        case Pe:
          return (n.displayName || 'Context') + '.Consumer'
        case ft:
          return (n._context.displayName || 'Context') + '.Provider'
        case At:
          var r = n.render
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ''),
              (n = n !== '' ? 'ForwardRef(' + n + ')' : 'ForwardRef')),
            n
          )
        case Je:
          return (
            (r = n.displayName || null), r !== null ? r : en(n.type) || 'Memo'
          )
        case rt:
          ;(r = n._payload), (n = n._init)
          try {
            return en(n(r))
          } catch {}
      }
    return null
  }
  function ir(n) {
    var r = n.type
    switch (n.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (r.displayName || 'Context') + '.Consumer'
      case 10:
        return (r._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (
          (n = r.render),
          (n = n.displayName || n.name || ''),
          r.displayName || (n !== '' ? 'ForwardRef(' + n + ')' : 'ForwardRef')
        )
      case 7:
        return 'Fragment'
      case 5:
        return r
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return en(r)
      case 8:
        return r === nt ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == 'function') return r.displayName || r.name || null
        if (typeof r == 'string') return r
    }
    return null
  }
  function mn(n) {
    switch (typeof n) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return n
      case 'object':
        return n
      default:
        return ''
    }
  }
  function jn(n) {
    var r = n.type
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === 'input' &&
      (r === 'checkbox' || r === 'radio')
    )
  }
  function qr(n) {
    var r = jn(n) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      o = '' + n[r]
    if (
      !n.hasOwnProperty(r) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var c = l.get,
        d = l.set
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return c.call(this)
          },
          set: function (h) {
            ;(o = '' + h), d.call(this, h)
          },
        }),
        Object.defineProperty(n, r, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return o
          },
          setValue: function (h) {
            o = '' + h
          },
          stopTracking: function () {
            ;(n._valueTracker = null), delete n[r]
          },
        }
      )
    }
  }
  function Xn(n) {
    n._valueTracker || (n._valueTracker = qr(n))
  }
  function yr(n) {
    if (!n) return !1
    var r = n._valueTracker
    if (!r) return !0
    var l = r.getValue(),
      o = ''
    return (
      n && (o = jn(n) ? (n.checked ? 'true' : 'false') : n.value),
      (n = o),
      n !== l ? (r.setValue(n), !0) : !1
    )
  }
  function sn(n) {
    if (
      ((n = n || (typeof document < 'u' ? document : void 0)), typeof n > 'u')
    )
      return null
    try {
      return n.activeElement || n.body
    } catch {
      return n.body
    }
  }
  function bn(n, r) {
    var l = r.checked
    return le({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: l ?? n._wrapperState.initialChecked,
    })
  }
  function yn(n, r) {
    var l = r.defaultValue == null ? '' : r.defaultValue,
      o = r.checked != null ? r.checked : r.defaultChecked
    ;(l = mn(r.value != null ? r.value : l)),
      (n._wrapperState = {
        initialChecked: o,
        initialValue: l,
        controlled:
          r.type === 'checkbox' || r.type === 'radio'
            ? r.checked != null
            : r.value != null,
      })
  }
  function Ht(n, r) {
    ;(r = r.checked), r != null && ce(n, 'checked', r, !1)
  }
  function qn(n, r) {
    Ht(n, r)
    var l = mn(r.value),
      o = r.type
    if (l != null)
      o === 'number'
        ? ((l === 0 && n.value === '') || n.value != l) && (n.value = '' + l)
        : n.value !== '' + l && (n.value = '' + l)
    else if (o === 'submit' || o === 'reset') {
      n.removeAttribute('value')
      return
    }
    r.hasOwnProperty('value')
      ? xa(n, r.type, l)
      : r.hasOwnProperty('defaultValue') && xa(n, r.type, mn(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (n.defaultChecked = !!r.defaultChecked)
  }
  function Kr(n, r, l) {
    if (r.hasOwnProperty('value') || r.hasOwnProperty('defaultValue')) {
      var o = r.type
      if (
        !(
          (o !== 'submit' && o !== 'reset') ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return
      ;(r = '' + n._wrapperState.initialValue),
        l || r === n.value || (n.value = r),
        (n.defaultValue = r)
    }
    ;(l = n.name),
      l !== '' && (n.name = ''),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      l !== '' && (n.name = l)
  }
  function xa(n, r, l) {
    ;(r !== 'number' || sn(n.ownerDocument) !== n) &&
      (l == null
        ? (n.defaultValue = '' + n._wrapperState.initialValue)
        : n.defaultValue !== '' + l && (n.defaultValue = '' + l))
  }
  var Ja = Array.isArray
  function Aa(n, r, l, o) {
    if (((n = n.options), r)) {
      r = {}
      for (var c = 0; c < l.length; c++) r['$' + l[c]] = !0
      for (l = 0; l < n.length; l++)
        (c = r.hasOwnProperty('$' + n[l].value)),
          n[l].selected !== c && (n[l].selected = c),
          c && o && (n[l].defaultSelected = !0)
    } else {
      for (l = '' + mn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          ;(n[c].selected = !0), o && (n[c].defaultSelected = !0)
          return
        }
        r !== null || n[c].disabled || (r = n[c])
      }
      r !== null && (r.selected = !0)
    }
  }
  function Ca(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(y(91))
    return le({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: '' + n._wrapperState.initialValue,
    })
  }
  function zr(n, r) {
    var l = r.value
    if (l == null) {
      if (((l = r.children), (r = r.defaultValue), l != null)) {
        if (r != null) throw Error(y(92))
        if (Ja(l)) {
          if (1 < l.length) throw Error(y(93))
          l = l[0]
        }
        r = l
      }
      r == null && (r = ''), (l = r)
    }
    n._wrapperState = { initialValue: mn(l) }
  }
  function ja(n, r) {
    var l = mn(r.value),
      o = mn(r.defaultValue)
    l != null &&
      ((l = '' + l),
      l !== n.value && (n.value = l),
      r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)),
      o != null && (n.defaultValue = '' + o)
  }
  function Ur(n) {
    var r = n.textContent
    r === n._wrapperState.initialValue &&
      r !== '' &&
      r !== null &&
      (n.value = r)
  }
  function Ea(n) {
    switch (n) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function cn(n, r) {
    return n == null || n === 'http://www.w3.org/1999/xhtml'
      ? Ea(r)
      : n === 'http://www.w3.org/2000/svg' && r === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : n
  }
  var Or,
    Di = (function (n) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (r, l, o, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(r, l, o, c)
            })
          }
        : n
    })(function (n, r) {
      if (n.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in n)
        n.innerHTML = r
      else {
        for (
          Or = Or || document.createElement('div'),
            Or.innerHTML = '<svg>' + r.valueOf().toString() + '</svg>',
            r = Or.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild)
        for (; r.firstChild; ) n.appendChild(r.firstChild)
      }
    })
  function wa(n, r) {
    if (r) {
      var l = n.firstChild
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r
        return
      }
    }
    n.textContent = r
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
      strokeWidth: !0,
    },
    Le = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(ue).forEach(function (n) {
    Le.forEach(function (r) {
      ;(r = r + n.charAt(0).toUpperCase() + n.substring(1)), (ue[r] = ue[n])
    })
  })
  function at(n, r, l) {
    return r == null || typeof r == 'boolean' || r === ''
      ? ''
      : l || typeof r != 'number' || r === 0 || (ue.hasOwnProperty(n) && ue[n])
      ? ('' + r).trim()
      : r + 'px'
  }
  function Rt(n, r) {
    n = n.style
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf('--') === 0,
          c = at(l, r[l], o)
        l === 'float' && (l = 'cssFloat'), o ? n.setProperty(l, c) : (n[l] = c)
      }
  }
  var Xt = le(
    { menuitem: !0 },
    {
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
      wbr: !0,
    }
  )
  function kn(n, r) {
    if (r) {
      if (Xt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(y(137, n))
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(y(60))
        if (
          typeof r.dangerouslySetInnerHTML != 'object' ||
          !('__html' in r.dangerouslySetInnerHTML)
        )
          throw Error(y(61))
      }
      if (r.style != null && typeof r.style != 'object') throw Error(y(62))
    }
  }
  function an(n, r) {
    if (n.indexOf('-') === -1) return typeof r.is == 'string'
    switch (n) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var gr = null
  function Ut(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    )
  }
  var Ar = null,
    Lt = null,
    Ot = null
  function au(n) {
    if ((n = _o(n))) {
      if (typeof Ar != 'function') throw Error(y(280))
      var r = n.stateNode
      r && ((r = Me(r)), Ar(n.stateNode, n.type, r))
    }
  }
  function dl(n) {
    Lt ? (Ot ? Ot.push(n) : (Ot = [n])) : (Lt = n)
  }
  function iu() {
    if (Lt) {
      var n = Lt,
        r = Ot
      if (((Ot = Lt = null), au(n), r)) for (n = 0; n < r.length; n++) au(r[n])
    }
  }
  function lo(n, r) {
    return n(r)
  }
  function Ss() {}
  var pl = !1
  function lu(n, r, l) {
    if (pl) return n(r, l)
    pl = !0
    try {
      return lo(n, r, l)
    } finally {
      ;(pl = !1), (Lt !== null || Ot !== null) && (Ss(), iu())
    }
  }
  function vl(n, r) {
    var l = n.stateNode
    if (l === null) return null
    var o = Me(l)
    if (o === null) return null
    l = o[r]
    e: switch (r) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(o = !o.disabled) ||
          ((n = n.type),
          (o = !(
            n === 'button' ||
            n === 'input' ||
            n === 'select' ||
            n === 'textarea'
          ))),
          (n = !o)
        break e
      default:
        n = !1
    }
    if (n) return null
    if (l && typeof l != 'function') throw Error(y(231, r, typeof l))
    return l
  }
  var uu = !1
  if (V)
    try {
      var Ha = {}
      Object.defineProperty(Ha, 'passive', {
        get: function () {
          uu = !0
        },
      }),
        window.addEventListener('test', Ha, Ha),
        window.removeEventListener('test', Ha, Ha)
    } catch {
      uu = !1
    }
  function _i(n, r, l, o, c, d, h, C, R) {
    var F = Array.prototype.slice.call(arguments, 3)
    try {
      r.apply(l, F)
    } catch (X) {
      this.onError(X)
    }
  }
  var jr = !1,
    Ra = null,
    Li = !1,
    w = null,
    q = {
      onError: function (n) {
        ;(jr = !0), (Ra = n)
      },
    }
  function oe(n, r, l, o, c, d, h, C, R) {
    ;(jr = !1), (Ra = null), _i.apply(q, arguments)
  }
  function Ue(n, r, l, o, c, d, h, C, R) {
    if ((oe.apply(this, arguments), jr)) {
      if (jr) {
        var F = Ra
        ;(jr = !1), (Ra = null)
      } else throw Error(y(198))
      Li || ((Li = !0), (w = F))
    }
  }
  function Ze(n) {
    var r = n,
      l = n
    if (n.alternate) for (; r.return; ) r = r.return
    else {
      n = r
      do (r = n), r.flags & 4098 && (l = r.return), (n = r.return)
      while (n)
    }
    return r.tag === 3 ? l : null
  }
  function ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated
    }
    return null
  }
  function tt(n) {
    if (Ze(n) !== n) throw Error(y(188))
  }
  function Ae(n) {
    var r = n.alternate
    if (!r) {
      if (((r = Ze(n)), r === null)) throw Error(y(188))
      return r !== n ? null : n
    }
    for (var l = n, o = r; ; ) {
      var c = l.return
      if (c === null) break
      var d = c.alternate
      if (d === null) {
        if (((o = c.return), o !== null)) {
          l = o
          continue
        }
        break
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return tt(c), n
          if (d === o) return tt(c), r
          d = d.sibling
        }
        throw Error(y(188))
      }
      if (l.return !== o.return) (l = c), (o = d)
      else {
        for (var h = !1, C = c.child; C; ) {
          if (C === l) {
            ;(h = !0), (l = c), (o = d)
            break
          }
          if (C === o) {
            ;(h = !0), (o = c), (l = d)
            break
          }
          C = C.sibling
        }
        if (!h) {
          for (C = d.child; C; ) {
            if (C === l) {
              ;(h = !0), (l = d), (o = c)
              break
            }
            if (C === o) {
              ;(h = !0), (o = d), (l = c)
              break
            }
            C = C.sibling
          }
          if (!h) throw Error(y(189))
        }
      }
      if (l.alternate !== o) throw Error(y(190))
    }
    if (l.tag !== 3) throw Error(y(188))
    return l.stateNode.current === l ? n : r
  }
  function Dn(n) {
    return (n = Ae(n)), n !== null ? It(n) : null
  }
  function It(n) {
    if (n.tag === 5 || n.tag === 6) return n
    for (n = n.child; n !== null; ) {
      var r = It(n)
      if (r !== null) return r
      n = n.sibling
    }
    return null
  }
  var Qt = E.unstable_scheduleCallback,
    lr = E.unstable_cancelCallback,
    Mi = E.unstable_shouldYield,
    xs = E.unstable_requestPaint,
    yt = E.unstable_now,
    Fm = E.unstable_getCurrentPriorityLevel,
    ei = E.unstable_ImmediatePriority,
    ut = E.unstable_UserBlockingPriority,
    Ni = E.unstable_NormalPriority,
    Ap = E.unstable_LowPriority,
    vf = E.unstable_IdlePriority,
    uo = null,
    Ta = null
  function jp(n) {
    if (Ta && typeof Ta.onCommitFiberRoot == 'function')
      try {
        Ta.onCommitFiberRoot(uo, n, void 0, (n.current.flags & 128) === 128)
      } catch {}
  }
  var Zr = Math.clz32 ? Math.clz32 : Vm,
    Hp = Math.log,
    Fp = Math.LN2
  function Vm(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((Hp(n) / Fp) | 0)) | 0
  }
  var Cs = 64,
    ou = 4194304
  function hl(n) {
    switch (n & -n) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
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
        return n & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return n
    }
  }
  function ba(n, r) {
    var l = n.pendingLanes
    if (l === 0) return 0
    var o = 0,
      c = n.suspendedLanes,
      d = n.pingedLanes,
      h = l & 268435455
    if (h !== 0) {
      var C = h & ~c
      C !== 0 ? (o = hl(C)) : ((d &= h), d !== 0 && (o = hl(d)))
    } else (h = l & ~c), h !== 0 ? (o = hl(h)) : d !== 0 && (o = hl(d))
    if (o === 0) return 0
    if (
      r !== 0 &&
      r !== o &&
      !(r & c) &&
      ((c = o & -o), (d = r & -r), c >= d || (c === 16 && (d & 4194240) !== 0))
    )
      return r
    if ((o & 4 && (o |= l & 16), (r = n.entangledLanes), r !== 0))
      for (n = n.entanglements, r &= o; 0 < r; )
        (l = 31 - Zr(r)), (c = 1 << l), (o |= n[l]), (r &= ~c)
    return o
  }
  function hf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250
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
        return r + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Es(n, r) {
    for (
      var l = n.suspendedLanes,
        o = n.pingedLanes,
        c = n.expirationTimes,
        d = n.pendingLanes;
      0 < d;

    ) {
      var h = 31 - Zr(d),
        C = 1 << h,
        R = c[h]
      R === -1
        ? (!(C & l) || C & o) && (c[h] = hf(C, r))
        : R <= r && (n.expiredLanes |= C),
        (d &= ~C)
    }
  }
  function mf(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    )
  }
  function ws() {
    var n = Cs
    return (Cs <<= 1), !(Cs & 4194240) && (Cs = 64), n
  }
  function yf(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n)
    return r
  }
  function ml(n, r, l) {
    ;(n.pendingLanes |= r),
      r !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (r = 31 - Zr(r)),
      (n[r] = l)
  }
  function Bm(n, r) {
    var l = n.pendingLanes & ~r
    ;(n.pendingLanes = r),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= r),
      (n.mutableReadLanes &= r),
      (n.entangledLanes &= r),
      (r = n.entanglements)
    var o = n.eventTimes
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Zr(l),
        d = 1 << c
      ;(r[c] = 0), (o[c] = -1), (n[c] = -1), (l &= ~d)
    }
  }
  function oo(n, r) {
    var l = (n.entangledLanes |= r)
    for (n = n.entanglements; l; ) {
      var o = 31 - Zr(l),
        c = 1 << o
      ;(c & r) | (n[o] & r) && (n[o] |= r), (l &= ~c)
    }
  }
  var Tt = 0
  function gf(n) {
    return (n &= -n), 1 < n ? (4 < n ? (n & 268435455 ? 16 : 536870912) : 4) : 1
  }
  var Vp,
    Rs,
    Mt,
    Bp,
    Sf,
    Xe = !1,
    so = [],
    fn = null,
    Jr = null,
    ea = null,
    co = /* @__PURE__ */ new Map(),
    gn = /* @__PURE__ */ new Map(),
    kt = [],
    Pm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )
  function ka(n, r) {
    switch (n) {
      case 'focusin':
      case 'focusout':
        fn = null
        break
      case 'dragenter':
      case 'dragleave':
        Jr = null
        break
      case 'mouseover':
      case 'mouseout':
        ea = null
        break
      case 'pointerover':
      case 'pointerout':
        co.delete(r.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        gn.delete(r.pointerId)
    }
  }
  function Kn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d
      ? ((n = {
          blockedOn: r,
          domEventName: l,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        r !== null && ((r = _o(r)), r !== null && Rs(r)),
        n)
      : ((n.eventSystemFlags |= o),
        (r = n.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        n)
  }
  function zi(n, r, l, o, c) {
    switch (r) {
      case 'focusin':
        return (fn = Kn(fn, n, r, l, o, c)), !0
      case 'dragenter':
        return (Jr = Kn(Jr, n, r, l, o, c)), !0
      case 'mouseover':
        return (ea = Kn(ea, n, r, l, o, c)), !0
      case 'pointerover':
        var d = c.pointerId
        return co.set(d, Kn(co.get(d) || null, n, r, l, o, c)), !0
      case 'gotpointercapture':
        return (
          (d = c.pointerId), gn.set(d, Kn(gn.get(d) || null, n, r, l, o, c)), !0
        )
    }
    return !1
  }
  function Pp(n) {
    var r = na(n.target)
    if (r !== null) {
      var l = Ze(r)
      if (l !== null) {
        if (((r = l.tag), r === 13)) {
          if (((r = ht(l)), r !== null)) {
            ;(n.blockedOn = r),
              Sf(n.priority, function () {
                Mt(l)
              })
            return
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
          return
        }
      }
    }
    n.blockedOn = null
  }
  function su(n) {
    if (n.blockedOn !== null) return !1
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ks(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent)
      if (l === null) {
        l = n.nativeEvent
        var o = new l.constructor(l.type, l)
        ;(gr = o), l.target.dispatchEvent(o), (gr = null)
      } else return (r = _o(l)), r !== null && Rs(r), (n.blockedOn = l), !1
      r.shift()
    }
    return !0
  }
  function xf(n, r, l) {
    su(n) && l.delete(r)
  }
  function Yp() {
    ;(Xe = !1),
      fn !== null && su(fn) && (fn = null),
      Jr !== null && su(Jr) && (Jr = null),
      ea !== null && su(ea) && (ea = null),
      co.forEach(xf),
      gn.forEach(xf)
  }
  function fo(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      Xe ||
        ((Xe = !0), E.unstable_scheduleCallback(E.unstable_NormalPriority, Yp)))
  }
  function po(n) {
    function r(c) {
      return fo(c, n)
    }
    if (0 < so.length) {
      fo(so[0], n)
      for (var l = 1; l < so.length; l++) {
        var o = so[l]
        o.blockedOn === n && (o.blockedOn = null)
      }
    }
    for (
      fn !== null && fo(fn, n),
        Jr !== null && fo(Jr, n),
        ea !== null && fo(ea, n),
        co.forEach(r),
        gn.forEach(r),
        l = 0;
      l < kt.length;
      l++
    )
      (o = kt[l]), o.blockedOn === n && (o.blockedOn = null)
    for (; 0 < kt.length && ((l = kt[0]), l.blockedOn === null); )
      Pp(l), l.blockedOn === null && kt.shift()
  }
  var cu = He.ReactCurrentBatchConfig,
    yl = !0
  function $p(n, r, l, o) {
    var c = Tt,
      d = cu.transition
    cu.transition = null
    try {
      ;(Tt = 1), bs(n, r, l, o)
    } finally {
      ;(Tt = c), (cu.transition = d)
    }
  }
  function Ts(n, r, l, o) {
    var c = Tt,
      d = cu.transition
    cu.transition = null
    try {
      ;(Tt = 4), bs(n, r, l, o)
    } finally {
      ;(Tt = c), (cu.transition = d)
    }
  }
  function bs(n, r, l, o) {
    if (yl) {
      var c = ks(n, r, l, o)
      if (c === null) Fs(n, r, o, vo, l), ka(n, o)
      else if (zi(c, n, r, l, o)) o.stopPropagation()
      else if ((ka(n, o), r & 4 && -1 < Pm.indexOf(n))) {
        for (; c !== null; ) {
          var d = _o(c)
          if (
            (d !== null && Vp(d),
            (d = ks(n, r, l, o)),
            d === null && Fs(n, r, o, vo, l),
            d === c)
          )
            break
          c = d
        }
        c !== null && o.stopPropagation()
      } else Fs(n, r, o, null, l)
    }
  }
  var vo = null
  function ks(n, r, l, o) {
    if (((vo = null), (n = Ut(o)), (n = na(n)), n !== null))
      if (((r = Ze(n)), r === null)) n = null
      else if (((l = r.tag), l === 13)) {
        if (((n = ht(r)), n !== null)) return n
        n = null
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null
        n = null
      } else r !== n && (n = null)
    return (vo = n), null
  }
  function Cf(n) {
    switch (n) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (Fm()) {
          case ei:
            return 1
          case ut:
            return 4
          case Ni:
          case Ap:
            return 16
          case vf:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var ti = null,
    ho = null,
    mo = null
  function Ef() {
    if (mo) return mo
    var n,
      r = ho,
      l = r.length,
      o,
      c = 'value' in ti ? ti.value : ti.textContent,
      d = c.length
    for (n = 0; n < l && r[n] === c[n]; n++);
    var h = l - n
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++);
    return (mo = c.slice(n, 1 < o ? 1 - o : void 0))
  }
  function fu(n) {
    var r = n.keyCode
    return (
      'charCode' in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    )
  }
  function yo() {
    return !0
  }
  function Ip() {
    return !1
  }
  function Hr(n) {
    function r(l, o, c, d, h) {
      ;(this._reactName = l),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = h),
        (this.currentTarget = null)
      for (var C in n)
        n.hasOwnProperty(C) && ((l = n[C]), (this[C] = l ? l(d) : d[C]))
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? yo
          : Ip),
        (this.isPropagationStopped = Ip),
        this
      )
    }
    return (
      le(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var l = this.nativeEvent
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = yo))
        },
        stopPropagation: function () {
          var l = this.nativeEvent
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = yo))
        },
        persist: function () {},
        isPersistent: yo,
      }),
      r
    )
  }
  var Ui = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ds = Hr(Ui),
    du = le({}, Ui, { view: 0, detail: 0 }),
    Qp = Hr(du),
    _s,
    wf,
    go,
    _n = le({}, du, {
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
      getModifierState: kf,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget
      },
      movementX: function (n) {
        return 'movementX' in n
          ? n.movementX
          : (n !== go &&
              (go && n.type === 'mousemove'
                ? ((_s = n.screenX - go.screenX), (wf = n.screenY - go.screenY))
                : (wf = _s = 0),
              (go = n)),
            _s)
      },
      movementY: function (n) {
        return 'movementY' in n ? n.movementY : wf
      },
    }),
    Ls = Hr(_n),
    Wp = le({}, _n, { dataTransfer: 0 }),
    Gp = Hr(Wp),
    Ym = le({}, du, { relatedTarget: 0 }),
    Oi = Hr(Ym),
    Rf = le({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xp = Hr(Rf),
    $m = le({}, Ui, {
      clipboardData: function (n) {
        return 'clipboardData' in n ? n.clipboardData : window.clipboardData
      },
    }),
    Im = Hr($m),
    Qm = le({}, Ui, { data: 0 }),
    Tf = Hr(Qm),
    bf = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    qp = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Kp = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function Zp(n) {
    var r = this.nativeEvent
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = Kp[n])
      ? !!r[n]
      : !1
  }
  function kf() {
    return Zp
  }
  var ni = le({}, du, {
      key: function (n) {
        if (n.key) {
          var r = bf[n.key] || n.key
          if (r !== 'Unidentified') return r
        }
        return n.type === 'keypress'
          ? ((n = fu(n)), n === 13 ? 'Enter' : String.fromCharCode(n))
          : n.type === 'keydown' || n.type === 'keyup'
          ? qp[n.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: kf,
      charCode: function (n) {
        return n.type === 'keypress' ? fu(n) : 0
      },
      keyCode: function (n) {
        return n.type === 'keydown' || n.type === 'keyup' ? n.keyCode : 0
      },
      which: function (n) {
        return n.type === 'keypress'
          ? fu(n)
          : n.type === 'keydown' || n.type === 'keyup'
          ? n.keyCode
          : 0
      },
    }),
    Wm = Hr(ni),
    Df = le({}, _n, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ms = Hr(Df),
    _f = le({}, du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: kf,
    }),
    Gm = Hr(_f),
    Ns = le({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jp = Hr(Ns),
    Sr = le({}, _n, {
      deltaX: function (n) {
        return 'deltaX' in n
          ? n.deltaX
          : 'wheelDeltaX' in n
          ? -n.wheelDeltaX
          : 0
      },
      deltaY: function (n) {
        return 'deltaY' in n
          ? n.deltaY
          : 'wheelDeltaY' in n
          ? -n.wheelDeltaY
          : 'wheelDelta' in n
          ? -n.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ri = Hr(Sr),
    dn = [9, 13, 27, 32],
    Da = V && 'CompositionEvent' in window,
    gl = null
  V && 'documentMode' in document && (gl = document.documentMode)
  var zs = V && 'TextEvent' in window && !gl,
    ev = V && (!Da || (gl && 8 < gl && 11 >= gl)),
    pu = String.fromCharCode(32),
    tv = !1
  function nv(n, r) {
    switch (n) {
      case 'keyup':
        return dn.indexOf(r.keyCode) !== -1
      case 'keydown':
        return r.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Us(n) {
    return (n = n.detail), typeof n == 'object' && 'data' in n ? n.data : null
  }
  var vu = !1
  function Xm(n, r) {
    switch (n) {
      case 'compositionend':
        return Us(r)
      case 'keypress':
        return r.which !== 32 ? null : ((tv = !0), pu)
      case 'textInput':
        return (n = r.data), n === pu && tv ? null : n
      default:
        return null
    }
  }
  function qm(n, r) {
    if (vu)
      return n === 'compositionend' || (!Da && nv(n, r))
        ? ((n = Ef()), (mo = ho = ti = null), (vu = !1), n)
        : null
    switch (n) {
      case 'paste':
        return null
      case 'keypress':
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char
          if (r.which) return String.fromCharCode(r.which)
        }
        return null
      case 'compositionend':
        return ev && r.locale !== 'ko' ? null : r.data
      default:
        return null
    }
  }
  var rv = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
    week: !0,
  }
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase()
    return r === 'input' ? !!rv[n.type] : r === 'textarea'
  }
  function iv(n, r, l, o) {
    dl(o),
      (r = bo(r, 'onChange')),
      0 < r.length &&
        ((l = new Ds('onChange', 'change', null, l, o)),
        n.push({ event: l, listeners: r }))
  }
  var So = null,
    hu = null
  function mu(n) {
    Hs(n, 0)
  }
  function yu(n) {
    var r = Su(n)
    if (yr(r)) return n
  }
  function lv(n, r) {
    if (n === 'change') return r
  }
  var Lf = !1
  if (V) {
    var Mf
    if (V) {
      var Nf = 'oninput' in document
      if (!Nf) {
        var uv = document.createElement('div')
        uv.setAttribute('oninput', 'return;'),
          (Nf = typeof uv.oninput == 'function')
      }
      Mf = Nf
    } else Mf = !1
    Lf = Mf && (!document.documentMode || 9 < document.documentMode)
  }
  function ov() {
    So && (So.detachEvent('onpropertychange', sv), (hu = So = null))
  }
  function sv(n) {
    if (n.propertyName === 'value' && yu(hu)) {
      var r = []
      iv(r, hu, n, Ut(n)), lu(mu, r)
    }
  }
  function Km(n, r, l) {
    n === 'focusin'
      ? (ov(), (So = r), (hu = l), So.attachEvent('onpropertychange', sv))
      : n === 'focusout' && ov()
  }
  function Zm(n) {
    if (n === 'selectionchange' || n === 'keyup' || n === 'keydown')
      return yu(hu)
  }
  function Jm(n, r) {
    if (n === 'click') return yu(r)
  }
  function cv(n, r) {
    if (n === 'input' || n === 'change') return yu(r)
  }
  function ey(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r)
  }
  var ta = typeof Object.is == 'function' ? Object.is : ey
  function xo(n, r) {
    if (ta(n, r)) return !0
    if (
      typeof n != 'object' ||
      n === null ||
      typeof r != 'object' ||
      r === null
    )
      return !1
    var l = Object.keys(n),
      o = Object.keys(r)
    if (l.length !== o.length) return !1
    for (o = 0; o < l.length; o++) {
      var c = l[o]
      if (!H.call(r, c) || !ta(n[c], r[c])) return !1
    }
    return !0
  }
  function fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild
    return n
  }
  function dv(n, r) {
    var l = fv(n)
    n = 0
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (((o = n + l.textContent.length), n <= r && o >= r))
          return { node: l, offset: r - n }
        n = o
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling
            break e
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = fv(l)
    }
  }
  function pv(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
        ? !1
        : r && r.nodeType === 3
        ? pv(n, r.parentNode)
        : 'contains' in n
        ? n.contains(r)
        : n.compareDocumentPosition
        ? !!(n.compareDocumentPosition(r) & 16)
        : !1
      : !1
  }
  function Os() {
    for (var n = window, r = sn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == 'string'
      } catch {
        l = !1
      }
      if (l) n = r.contentWindow
      else break
      r = sn(n.document)
    }
    return r
  }
  function ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase()
    return (
      r &&
      ((r === 'input' &&
        (n.type === 'text' ||
          n.type === 'search' ||
          n.type === 'tel' ||
          n.type === 'url' ||
          n.type === 'password')) ||
        r === 'textarea' ||
        n.contentEditable === 'true')
    )
  }
  function As(n) {
    var r = Os(),
      l = n.focusedElem,
      o = n.selectionRange
    if (
      r !== l &&
      l &&
      l.ownerDocument &&
      pv(l.ownerDocument.documentElement, l)
    ) {
      if (o !== null && ai(l)) {
        if (
          ((r = o.start),
          (n = o.end),
          n === void 0 && (n = r),
          'selectionStart' in l)
        )
          (l.selectionStart = r), (l.selectionEnd = Math.min(n, l.value.length))
        else if (
          ((n = ((r = l.ownerDocument || document) && r.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection()
          var c = l.textContent.length,
            d = Math.min(o.start, c)
          ;(o = o.end === void 0 ? d : Math.min(o.end, c)),
            !n.extend && d > o && ((c = o), (o = d), (d = c)),
            (c = dv(l, d))
          var h = dv(l, o)
          c &&
            h &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== c.node ||
              n.anchorOffset !== c.offset ||
              n.focusNode !== h.node ||
              n.focusOffset !== h.offset) &&
            ((r = r.createRange()),
            r.setStart(c.node, c.offset),
            n.removeAllRanges(),
            d > o
              ? (n.addRange(r), n.extend(h.node, h.offset))
              : (r.setEnd(h.node, h.offset), n.addRange(r)))
        }
      }
      for (r = [], n = l; (n = n.parentNode); )
        n.nodeType === 1 &&
          r.push({ element: n, left: n.scrollLeft, top: n.scrollTop })
      for (typeof l.focus == 'function' && l.focus(), l = 0; l < r.length; l++)
        (n = r[l]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top)
    }
  }
  var vv = V && 'documentMode' in document && 11 >= document.documentMode,
    _a = null,
    zf = null,
    Co = null,
    Uf = !1
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
    Uf ||
      _a == null ||
      _a !== sn(o) ||
      ((o = _a),
      'selectionStart' in o && ai(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Co && xo(Co, o)) ||
        ((Co = o),
        (o = bo(zf, 'onSelect')),
        0 < o.length &&
          ((r = new Ds('onSelect', 'select', null, r, l)),
          n.push({ event: r, listeners: o }),
          (r.target = _a))))
  }
  function js(n, r) {
    var l = {}
    return (
      (l[n.toLowerCase()] = r.toLowerCase()),
      (l['Webkit' + n] = 'webkit' + r),
      (l['Moz' + n] = 'moz' + r),
      l
    )
  }
  var Sl = {
      animationend: js('Animation', 'AnimationEnd'),
      animationiteration: js('Animation', 'AnimationIteration'),
      animationstart: js('Animation', 'AnimationStart'),
      transitionend: js('Transition', 'TransitionEnd'),
    },
    Of = {},
    Af = {}
  V &&
    ((Af = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Sl.animationend.animation,
      delete Sl.animationiteration.animation,
      delete Sl.animationstart.animation),
    'TransitionEvent' in window || delete Sl.transitionend.transition)
  function Ln(n) {
    if (Of[n]) return Of[n]
    if (!Sl[n]) return n
    var r = Sl[n],
      l
    for (l in r) if (r.hasOwnProperty(l) && l in Af) return (Of[n] = r[l])
    return n
  }
  var jf = Ln('animationend'),
    mv = Ln('animationiteration'),
    yv = Ln('animationstart'),
    gv = Ln('transitionend'),
    Sv = /* @__PURE__ */ new Map(),
    xv =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  function ii(n, r) {
    Sv.set(n, r), A(r, [n])
  }
  for (var Eo = 0; Eo < xv.length; Eo++) {
    var xl = xv[Eo],
      ty = xl.toLowerCase(),
      wo = xl[0].toUpperCase() + xl.slice(1)
    ii(ty, 'on' + wo)
  }
  ii(jf, 'onAnimationEnd'),
    ii(mv, 'onAnimationIteration'),
    ii(yv, 'onAnimationStart'),
    ii('dblclick', 'onDoubleClick'),
    ii('focusin', 'onFocus'),
    ii('focusout', 'onBlur'),
    ii(gv, 'onTransitionEnd'),
    m('onMouseEnter', ['mouseout', 'mouseover']),
    m('onMouseLeave', ['mouseout', 'mouseover']),
    m('onPointerEnter', ['pointerout', 'pointerover']),
    m('onPointerLeave', ['pointerout', 'pointerover']),
    A(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    A(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    A('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    A(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    A(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    A(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var Ro =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    ny = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(Ro)
    )
  function Cv(n, r, l) {
    var o = n.type || 'unknown-event'
    ;(n.currentTarget = l), Ue(o, r, void 0, n), (n.currentTarget = null)
  }
  function Hs(n, r) {
    r = (r & 4) !== 0
    for (var l = 0; l < n.length; l++) {
      var o = n[l],
        c = o.event
      o = o.listeners
      e: {
        var d = void 0
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var C = o[h],
              R = C.instance,
              F = C.currentTarget
            if (((C = C.listener), R !== d && c.isPropagationStopped())) break e
            Cv(c, C, F), (d = R)
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((C = o[h]),
              (R = C.instance),
              (F = C.currentTarget),
              (C = C.listener),
              R !== d && c.isPropagationStopped())
            )
              break e
            Cv(c, C, F), (d = R)
          }
      }
    }
    if (Li) throw ((n = w), (Li = !1), (w = null), n)
  }
  function Nt(n, r) {
    var l = r[$f]
    l === void 0 && (l = r[$f] = /* @__PURE__ */ new Set())
    var o = n + '__bubble'
    l.has(o) || (Ev(r, n, 2, !1), l.add(o))
  }
  function Ai(n, r, l) {
    var o = 0
    r && (o |= 4), Ev(l, n, o, r)
  }
  var li = '_reactListening' + Math.random().toString(36).slice(2)
  function gu(n) {
    if (!n[li]) {
      ;(n[li] = !0),
        D.forEach(function (l) {
          l !== 'selectionchange' && (ny.has(l) || Ai(l, !1, n), Ai(l, !0, n))
        })
      var r = n.nodeType === 9 ? n : n.ownerDocument
      r === null || r[li] || ((r[li] = !0), Ai('selectionchange', !1, r))
    }
  }
  function Ev(n, r, l, o) {
    switch (Cf(r)) {
      case 1:
        var c = $p
        break
      case 4:
        c = Ts
        break
      default:
        c = bs
    }
    ;(l = c.bind(null, r, l, n)),
      (c = void 0),
      !uu ||
        (r !== 'touchstart' && r !== 'touchmove' && r !== 'wheel') ||
        (c = !0),
      o
        ? c !== void 0
          ? n.addEventListener(r, l, { capture: !0, passive: c })
          : n.addEventListener(r, l, !0)
        : c !== void 0
        ? n.addEventListener(r, l, { passive: c })
        : n.addEventListener(r, l, !1)
  }
  function Fs(n, r, l, o, c) {
    var d = o
    if (!(r & 1) && !(r & 2) && o !== null)
      e: for (;;) {
        if (o === null) return
        var h = o.tag
        if (h === 3 || h === 4) {
          var C = o.stateNode.containerInfo
          if (C === c || (C.nodeType === 8 && C.parentNode === c)) break
          if (h === 4)
            for (h = o.return; h !== null; ) {
              var R = h.tag
              if (
                (R === 3 || R === 4) &&
                ((R = h.stateNode.containerInfo),
                R === c || (R.nodeType === 8 && R.parentNode === c))
              )
                return
              h = h.return
            }
          for (; C !== null; ) {
            if (((h = na(C)), h === null)) return
            if (((R = h.tag), R === 5 || R === 6)) {
              o = d = h
              continue e
            }
            C = C.parentNode
          }
        }
        o = o.return
      }
    lu(function () {
      var F = d,
        X = Ut(l),
        Z = []
      e: {
        var G = Sv.get(n)
        if (G !== void 0) {
          var pe = Ds,
            Se = n
          switch (n) {
            case 'keypress':
              if (fu(l) === 0) break e
            case 'keydown':
            case 'keyup':
              pe = Wm
              break
            case 'focusin':
              ;(Se = 'focus'), (pe = Oi)
              break
            case 'focusout':
              ;(Se = 'blur'), (pe = Oi)
              break
            case 'beforeblur':
            case 'afterblur':
              pe = Oi
              break
            case 'click':
              if (l.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              pe = Ls
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              pe = Gp
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              pe = Gm
              break
            case jf:
            case mv:
            case yv:
              pe = Xp
              break
            case gv:
              pe = Jp
              break
            case 'scroll':
              pe = Qp
              break
            case 'wheel':
              pe = ri
              break
            case 'copy':
            case 'cut':
            case 'paste':
              pe = Im
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              pe = Ms
          }
          var Te = (r & 4) !== 0,
            un = !Te && n === 'scroll',
            L = Te ? (G !== null ? G + 'Capture' : null) : G
          Te = []
          for (var b = F, U; b !== null; ) {
            U = b
            var ne = U.stateNode
            if (
              (U.tag === 5 &&
                ne !== null &&
                ((U = ne),
                L !== null &&
                  ((ne = vl(b, L)), ne != null && Te.push(To(b, ne, U)))),
              un)
            )
              break
            b = b.return
          }
          0 < Te.length &&
            ((G = new pe(G, Se, null, l, X)),
            Z.push({ event: G, listeners: Te }))
        }
      }
      if (!(r & 7)) {
        e: {
          if (
            ((G = n === 'mouseover' || n === 'pointerover'),
            (pe = n === 'mouseout' || n === 'pointerout'),
            G &&
              l !== gr &&
              (Se = l.relatedTarget || l.fromElement) &&
              (na(Se) || Se[ui]))
          )
            break e
          if (
            (pe || G) &&
            ((G =
              X.window === X
                ? X
                : (G = X.ownerDocument)
                ? G.defaultView || G.parentWindow
                : window),
            pe
              ? ((Se = l.relatedTarget || l.toElement),
                (pe = F),
                (Se = Se ? na(Se) : null),
                Se !== null &&
                  ((un = Ze(Se)),
                  Se !== un || (Se.tag !== 5 && Se.tag !== 6)) &&
                  (Se = null))
              : ((pe = null), (Se = F)),
            pe !== Se)
          ) {
            if (
              ((Te = Ls),
              (ne = 'onMouseLeave'),
              (L = 'onMouseEnter'),
              (b = 'mouse'),
              (n === 'pointerout' || n === 'pointerover') &&
                ((Te = Ms),
                (ne = 'onPointerLeave'),
                (L = 'onPointerEnter'),
                (b = 'pointer')),
              (un = pe == null ? G : Su(pe)),
              (U = Se == null ? G : Su(Se)),
              (G = new Te(ne, b + 'leave', pe, l, X)),
              (G.target = un),
              (G.relatedTarget = U),
              (ne = null),
              na(X) === F &&
                ((Te = new Te(L, b + 'enter', Se, l, X)),
                (Te.target = U),
                (Te.relatedTarget = un),
                (ne = Te)),
              (un = ne),
              pe && Se)
            )
              t: {
                for (Te = pe, L = Se, b = 0, U = Te; U; U = Cl(U)) b++
                for (U = 0, ne = L; ne; ne = Cl(ne)) U++
                for (; 0 < b - U; ) (Te = Cl(Te)), b--
                for (; 0 < U - b; ) (L = Cl(L)), U--
                for (; b--; ) {
                  if (Te === L || (L !== null && Te === L.alternate)) break t
                  ;(Te = Cl(Te)), (L = Cl(L))
                }
                Te = null
              }
            else Te = null
            pe !== null && Hf(Z, G, pe, Te, !1),
              Se !== null && un !== null && Hf(Z, un, Se, Te, !0)
          }
        }
        e: {
          if (
            ((G = F ? Su(F) : window),
            (pe = G.nodeName && G.nodeName.toLowerCase()),
            pe === 'select' || (pe === 'input' && G.type === 'file'))
          )
            var be = lv
          else if (av(G))
            if (Lf) be = cv
            else {
              be = Zm
              var xe = Km
            }
          else
            (pe = G.nodeName) &&
              pe.toLowerCase() === 'input' &&
              (G.type === 'checkbox' || G.type === 'radio') &&
              (be = Jm)
          if (be && (be = be(n, F))) {
            iv(Z, be, l, X)
            break e
          }
          xe && xe(n, G, F),
            n === 'focusout' &&
              (xe = G._wrapperState) &&
              xe.controlled &&
              G.type === 'number' &&
              xa(G, 'number', G.value)
        }
        switch (((xe = F ? Su(F) : window), n)) {
          case 'focusin':
            ;(av(xe) || xe.contentEditable === 'true') &&
              ((_a = xe), (zf = F), (Co = null))
            break
          case 'focusout':
            Co = zf = _a = null
            break
          case 'mousedown':
            Uf = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(Uf = !1), hv(Z, l, X)
            break
          case 'selectionchange':
            if (vv) break
          case 'keydown':
          case 'keyup':
            hv(Z, l, X)
        }
        var De
        if (Da)
          e: {
            switch (n) {
              case 'compositionstart':
                var $e = 'onCompositionStart'
                break e
              case 'compositionend':
                $e = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                $e = 'onCompositionUpdate'
                break e
            }
            $e = void 0
          }
        else
          vu
            ? nv(n, l) && ($e = 'onCompositionEnd')
            : n === 'keydown' &&
              l.keyCode === 229 &&
              ($e = 'onCompositionStart')
        $e &&
          (ev &&
            l.locale !== 'ko' &&
            (vu || $e !== 'onCompositionStart'
              ? $e === 'onCompositionEnd' && vu && (De = Ef())
              : ((ti = X),
                (ho = 'value' in ti ? ti.value : ti.textContent),
                (vu = !0))),
          (xe = bo(F, $e)),
          0 < xe.length &&
            (($e = new Tf($e, n, null, l, X)),
            Z.push({ event: $e, listeners: xe }),
            De
              ? ($e.data = De)
              : ((De = Us(l)), De !== null && ($e.data = De)))),
          (De = zs ? Xm(n, l) : qm(n, l)) &&
            ((F = bo(F, 'onBeforeInput')),
            0 < F.length &&
              ((X = new Tf('onBeforeInput', 'beforeinput', null, l, X)),
              Z.push({ event: X, listeners: F }),
              (X.data = De)))
      }
      Hs(Z, r)
    })
  }
  function To(n, r, l) {
    return { instance: n, listener: r, currentTarget: l }
  }
  function bo(n, r) {
    for (var l = r + 'Capture', o = []; n !== null; ) {
      var c = n,
        d = c.stateNode
      c.tag === 5 &&
        d !== null &&
        ((c = d),
        (d = vl(n, l)),
        d != null && o.unshift(To(n, d, c)),
        (d = vl(n, r)),
        d != null && o.push(To(n, d, c))),
        (n = n.return)
    }
    return o
  }
  function Cl(n) {
    if (n === null) return null
    do n = n.return
    while (n && n.tag !== 5)
    return n || null
  }
  function Hf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var C = l,
        R = C.alternate,
        F = C.stateNode
      if (R !== null && R === o) break
      C.tag === 5 &&
        F !== null &&
        ((C = F),
        c
          ? ((R = vl(l, d)), R != null && h.unshift(To(l, R, C)))
          : c || ((R = vl(l, d)), R != null && h.push(To(l, R, C)))),
        (l = l.return)
    }
    h.length !== 0 && n.push({ event: r, listeners: h })
  }
  var Ff = /\r\n?/g,
    ry = /\u0000|\uFFFD/g
  function Vf(n) {
    return (typeof n == 'string' ? n : '' + n)
      .replace(
        Ff,
        `
`
      )
      .replace(ry, '')
  }
  function Vs(n, r, l) {
    if (((r = Vf(r)), Vf(n) !== r && l)) throw Error(y(425))
  }
  function Bs() {}
  var Bf = null,
    El = null
  function ko(n, r) {
    return (
      n === 'textarea' ||
      n === 'noscript' ||
      typeof r.children == 'string' ||
      typeof r.children == 'number' ||
      (typeof r.dangerouslySetInnerHTML == 'object' &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    )
  }
  var wl = typeof setTimeout == 'function' ? setTimeout : void 0,
    wv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Pf = typeof Promise == 'function' ? Promise : void 0,
    Yf =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Pf < 'u'
        ? function (n) {
            return Pf.resolve(null).then(n).catch(ay)
          }
        : wl
  function ay(n) {
    setTimeout(function () {
      throw n
    })
  }
  function ji(n, r) {
    var l = r,
      o = 0
    do {
      var c = l.nextSibling
      if ((n.removeChild(l), c && c.nodeType === 8))
        if (((l = c.data), l === '/$')) {
          if (o === 0) {
            n.removeChild(c), po(r)
            return
          }
          o--
        } else (l !== '$' && l !== '$?' && l !== '$!') || o++
      l = c
    } while (l)
    po(r)
  }
  function La(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType
      if (r === 1 || r === 3) break
      if (r === 8) {
        if (((r = n.data), r === '$' || r === '$!' || r === '$?')) break
        if (r === '/$') return null
      }
    }
    return n
  }
  function Do(n) {
    n = n.previousSibling
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data
        if (l === '$' || l === '$!' || l === '$?') {
          if (r === 0) return n
          r--
        } else l === '/$' && r++
      }
      n = n.previousSibling
    }
    return null
  }
  var Hi = Math.random().toString(36).slice(2),
    Fa = '__reactFiber$' + Hi,
    Rl = '__reactProps$' + Hi,
    ui = '__reactContainer$' + Hi,
    $f = '__reactEvents$' + Hi,
    iy = '__reactListeners$' + Hi,
    If = '__reactHandles$' + Hi
  function na(n) {
    var r = n[Fa]
    if (r) return r
    for (var l = n.parentNode; l; ) {
      if ((r = l[ui] || l[Fa])) {
        if (
          ((l = r.alternate),
          r.child !== null || (l !== null && l.child !== null))
        )
          for (n = Do(n); n !== null; ) {
            if ((l = n[Fa])) return l
            n = Do(n)
          }
        return r
      }
      ;(n = l), (l = n.parentNode)
    }
    return null
  }
  function _o(n) {
    return (
      (n = n[Fa] || n[ui]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    )
  }
  function Su(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode
    throw Error(y(33))
  }
  function Me(n) {
    return n[Rl] || null
  }
  var Fi = [],
    Ft = -1
  function qe(n) {
    return { current: n }
  }
  function xt(n) {
    0 > Ft || ((n.current = Fi[Ft]), (Fi[Ft] = null), Ft--)
  }
  function Et(n, r) {
    Ft++, (Fi[Ft] = n.current), (n.current = r)
  }
  var Va = {},
    Ye = qe(Va),
    tn = qe(!1),
    xr = Va
  function ra(n, r) {
    var l = n.type.contextTypes
    if (!l) return Va
    var o = n.stateNode
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext
    var c = {},
      d
    for (d in l) c[d] = r[d]
    return (
      o &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = r),
        (n.__reactInternalMemoizedMaskedChildContext = c)),
      c
    )
  }
  function Wt(n) {
    return (n = n.childContextTypes), n != null
  }
  function aa() {
    xt(tn), xt(Ye)
  }
  function Vi(n, r, l) {
    if (Ye.current !== Va) throw Error(y(168))
    Et(Ye, r), Et(tn, l)
  }
  function Lo(n, r, l) {
    var o = n.stateNode
    if (((r = r.childContextTypes), typeof o.getChildContext != 'function'))
      return l
    o = o.getChildContext()
    for (var c in o) if (!(c in r)) throw Error(y(108, ir(n) || 'Unknown', c))
    return le({}, l, o)
  }
  function Ps(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        Va),
      (xr = Ye.current),
      Et(Ye, n),
      Et(tn, tn.current),
      !0
    )
  }
  function Rv(n, r, l) {
    var o = n.stateNode
    if (!o) throw Error(y(169))
    l
      ? ((n = Lo(n, r, xr)),
        (o.__reactInternalMemoizedMergedChildContext = n),
        xt(tn),
        xt(Ye),
        Et(Ye, n))
      : xt(tn),
      Et(tn, l)
  }
  var Fr = null,
    Mn = !1,
    Mo = !1
  function Qf(n) {
    Fr === null ? (Fr = [n]) : Fr.push(n)
  }
  function Wf(n) {
    ;(Mn = !0), Qf(n)
  }
  function Cr() {
    if (!Mo && Fr !== null) {
      Mo = !0
      var n = 0,
        r = Tt
      try {
        var l = Fr
        for (Tt = 1; n < l.length; n++) {
          var o = l[n]
          do o = o(!0)
          while (o !== null)
        }
        ;(Fr = null), (Mn = !1)
      } catch (c) {
        throw (Fr !== null && (Fr = Fr.slice(n + 1)), Qt(ei, Cr), c)
      } finally {
        ;(Tt = r), (Mo = !1)
      }
    }
    return null
  }
  var Bi = [],
    Er = 0,
    Tl = null,
    xu = 0,
    wr = [],
    Zn = 0,
    ia = null,
    Hn = 1,
    oi = ''
  function Vr(n, r) {
    ;(Bi[Er++] = xu), (Bi[Er++] = Tl), (Tl = n), (xu = r)
  }
  function Gf(n, r, l) {
    ;(wr[Zn++] = Hn), (wr[Zn++] = oi), (wr[Zn++] = ia), (ia = n)
    var o = Hn
    n = oi
    var c = 32 - Zr(o) - 1
    ;(o &= ~(1 << c)), (l += 1)
    var d = 32 - Zr(r) + c
    if (30 < d) {
      var h = c - (c % 5)
      ;(d = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (c -= h),
        (Hn = (1 << (32 - Zr(r) + c)) | (l << c) | o),
        (oi = d + n)
    } else (Hn = (1 << d) | (l << c) | o), (oi = n)
  }
  function Ys(n) {
    n.return !== null && (Vr(n, 1), Gf(n, 1, 0))
  }
  function Xf(n) {
    for (; n === Tl; )
      (Tl = Bi[--Er]), (Bi[Er] = null), (xu = Bi[--Er]), (Bi[Er] = null)
    for (; n === ia; )
      (ia = wr[--Zn]),
        (wr[Zn] = null),
        (oi = wr[--Zn]),
        (wr[Zn] = null),
        (Hn = wr[--Zn]),
        (wr[Zn] = null)
  }
  var Br = null,
    Rr = null,
    Vt = !1,
    la = null
  function qf(n, r) {
    var l = da(5, null, null, 0)
    ;(l.elementType = 'DELETED'),
      (l.stateNode = r),
      (l.return = n),
      (r = n.deletions),
      r === null ? ((n.deletions = [l]), (n.flags |= 16)) : r.push(l)
  }
  function Tv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type
        return (
          (r =
            r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((n.stateNode = r), (Br = n), (Rr = La(r.firstChild)), !0)
            : !1
        )
      case 6:
        return (
          (r = n.pendingProps === '' || r.nodeType !== 3 ? null : r),
          r !== null ? ((n.stateNode = r), (Br = n), (Rr = null), !0) : !1
        )
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((l = ia !== null ? { id: Hn, overflow: oi } : null),
              (n.memoizedState = {
                dehydrated: r,
                treeContext: l,
                retryLane: 1073741824,
              }),
              (l = da(18, null, null, 0)),
              (l.stateNode = r),
              (l.return = n),
              (n.child = l),
              (Br = n),
              (Rr = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function $s(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0
  }
  function Is(n) {
    if (Vt) {
      var r = Rr
      if (r) {
        var l = r
        if (!Tv(n, r)) {
          if ($s(n)) throw Error(y(418))
          r = La(l.nextSibling)
          var o = Br
          r && Tv(n, r)
            ? qf(o, l)
            : ((n.flags = (n.flags & -4097) | 2), (Vt = !1), (Br = n))
        }
      } else {
        if ($s(n)) throw Error(y(418))
        ;(n.flags = (n.flags & -4097) | 2), (Vt = !1), (Br = n)
      }
    }
  }
  function bv(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return
    Br = n
  }
  function Qs(n) {
    if (n !== Br) return !1
    if (!Vt) return bv(n), (Vt = !0), !1
    var r
    if (
      ((r = n.tag !== 3) &&
        !(r = n.tag !== 5) &&
        ((r = n.type),
        (r = r !== 'head' && r !== 'body' && !ko(n.type, n.memoizedProps))),
      r && (r = Rr))
    ) {
      if ($s(n)) throw (kv(), Error(y(418)))
      for (; r; ) qf(n, r), (r = La(r.nextSibling))
    }
    if ((bv(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(y(317))
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data
            if (l === '/$') {
              if (r === 0) {
                Rr = La(n.nextSibling)
                break e
              }
              r--
            } else (l !== '$' && l !== '$!' && l !== '$?') || r++
          }
          n = n.nextSibling
        }
        Rr = null
      }
    } else Rr = Br ? La(n.stateNode.nextSibling) : null
    return !0
  }
  function kv() {
    for (var n = Rr; n; ) n = La(n.nextSibling)
  }
  function qt() {
    ;(Rr = Br = null), (Vt = !1)
  }
  function Kf(n) {
    la === null ? (la = [n]) : la.push(n)
  }
  var Ws = He.ReactCurrentBatchConfig
  function Pr(n, r) {
    if (n && n.defaultProps) {
      ;(r = le({}, r)), (n = n.defaultProps)
      for (var l in n) r[l] === void 0 && (r[l] = n[l])
      return r
    }
    return r
  }
  var Ba = qe(null),
    Gs = null,
    Pi = null,
    Zf = null
  function Jf() {
    Zf = Pi = Gs = null
  }
  function Yi(n) {
    var r = Ba.current
    xt(Ba), (n._currentValue = r)
  }
  function Nn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), o !== null && (o.childLanes |= r))
          : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r),
        n === l)
      )
        break
      n = n.return
    }
  }
  function ae(n, r) {
    ;(Gs = n),
      (Zf = Pi = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        (n.lanes & r && (pn = !0), (n.firstContext = null))
  }
  function ln(n) {
    var r = n._currentValue
    if (Zf !== n)
      if (((n = { context: n, memoizedValue: r, next: null }), Pi === null)) {
        if (Gs === null) throw Error(y(308))
        ;(Pi = n), (Gs.dependencies = { lanes: 0, firstContext: n })
      } else Pi = Pi.next = n
    return r
  }
  var Fn = null
  function ed(n) {
    Fn === null ? (Fn = [n]) : Fn.push(n)
  }
  function Dv(n, r, l, o) {
    var c = r.interleaved
    return (
      c === null ? ((l.next = l), ed(r)) : ((l.next = c.next), (c.next = l)),
      (r.interleaved = l),
      si(n, o)
    )
  }
  function si(n, r) {
    n.lanes |= r
    var l = n.alternate
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      (n.childLanes |= r),
        (l = n.alternate),
        l !== null && (l.childLanes |= r),
        (l = n),
        (n = n.return)
    return l.tag === 3 ? l.stateNode : null
  }
  var $i = !1
  function td(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function Sn(n, r) {
    ;(n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        })
  }
  function ci(n, r) {
    return {
      eventTime: n,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function Ii(n, r, l) {
    var o = n.updateQueue
    if (o === null) return null
    if (((o = o.shared), ot & 2)) {
      var c = o.pending
      return (
        c === null ? (r.next = r) : ((r.next = c.next), (c.next = r)),
        (o.pending = r),
        si(n, l)
      )
    }
    return (
      (c = o.interleaved),
      c === null ? ((r.next = r), ed(o)) : ((r.next = c.next), (c.next = r)),
      (o.interleaved = r),
      si(n, l)
    )
  }
  function Xs(n, r, l) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (l & 4194240) !== 0))
    ) {
      var o = r.lanes
      ;(o &= n.pendingLanes), (l |= o), (r.lanes = l), oo(n, l)
    }
  }
  function nd(n, r) {
    var l = n.updateQueue,
      o = n.alternate
    if (o !== null && ((o = o.updateQueue), l === o)) {
      var c = null,
        d = null
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var h = {
            eventTime: l.eventTime,
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          }
          d === null ? (c = d = h) : (d = d.next = h), (l = l.next)
        } while (l !== null)
        d === null ? (c = d = r) : (d = d.next = r)
      } else c = d = r
      ;(l = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        effects: o.effects,
      }),
        (n.updateQueue = l)
      return
    }
    ;(n = l.lastBaseUpdate),
      n === null ? (l.firstBaseUpdate = r) : (n.next = r),
      (l.lastBaseUpdate = r)
  }
  function Qi(n, r, l, o) {
    var c = n.updateQueue
    $i = !1
    var d = c.firstBaseUpdate,
      h = c.lastBaseUpdate,
      C = c.shared.pending
    if (C !== null) {
      c.shared.pending = null
      var R = C,
        F = R.next
      ;(R.next = null), h === null ? (d = F) : (h.next = F), (h = R)
      var X = n.alternate
      X !== null &&
        ((X = X.updateQueue),
        (C = X.lastBaseUpdate),
        C !== h &&
          (C === null ? (X.firstBaseUpdate = F) : (C.next = F),
          (X.lastBaseUpdate = R)))
    }
    if (d !== null) {
      var Z = c.baseState
      ;(h = 0), (X = F = R = null), (C = d)
      do {
        var G = C.lane,
          pe = C.eventTime
        if ((o & G) === G) {
          X !== null &&
            (X = X.next =
              {
                eventTime: pe,
                lane: 0,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null,
              })
          e: {
            var Se = n,
              Te = C
            switch (((G = r), (pe = l), Te.tag)) {
              case 1:
                if (((Se = Te.payload), typeof Se == 'function')) {
                  Z = Se.call(pe, Z, G)
                  break e
                }
                Z = Se
                break e
              case 3:
                Se.flags = (Se.flags & -65537) | 128
              case 0:
                if (
                  ((Se = Te.payload),
                  (G = typeof Se == 'function' ? Se.call(pe, Z, G) : Se),
                  G == null)
                )
                  break e
                Z = le({}, Z, G)
                break e
              case 2:
                $i = !0
            }
          }
          C.callback !== null &&
            C.lane !== 0 &&
            ((n.flags |= 64),
            (G = c.effects),
            G === null ? (c.effects = [C]) : G.push(C))
        } else
          (pe = {
            eventTime: pe,
            lane: G,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            X === null ? ((F = X = pe), (R = Z)) : (X = X.next = pe),
            (h |= G)
        if (((C = C.next), C === null)) {
          if (((C = c.shared.pending), C === null)) break
          ;(G = C),
            (C = G.next),
            (G.next = null),
            (c.lastBaseUpdate = G),
            (c.shared.pending = null)
        }
      } while (1)
      if (
        (X === null && (R = Z),
        (c.baseState = R),
        (c.firstBaseUpdate = F),
        (c.lastBaseUpdate = X),
        (r = c.shared.interleaved),
        r !== null)
      ) {
        c = r
        do (h |= c.lane), (c = c.next)
        while (c !== r)
      } else d === null && (c.shared.lanes = 0)
      ;(vi |= h), (n.lanes = h), (n.memoizedState = Z)
    }
  }
  function bl(n, r, l) {
    if (((n = r.effects), (r.effects = null), n !== null))
      for (r = 0; r < n.length; r++) {
        var o = n[r],
          c = o.callback
        if (c !== null) {
          if (((o.callback = null), (o = l), typeof c != 'function'))
            throw Error(y(191, c))
          c.call(o)
        }
      }
  }
  var _v = new _.Component().refs
  function rd(n, r, l, o) {
    ;(r = n.memoizedState),
      (l = l(o, r)),
      (l = l == null ? r : le({}, r, l)),
      (n.memoizedState = l),
      n.lanes === 0 && (n.updateQueue.baseState = l)
  }
  var qs = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Ze(n) === n : !1
    },
    enqueueSetState: function (n, r, l) {
      n = n._reactInternals
      var o = nr(),
        c = vn(n),
        d = ci(o, c)
      ;(d.payload = r),
        l != null && (d.callback = l),
        (r = Ii(n, d, c)),
        r !== null && (rr(r, n, c, o), Xs(r, n, c))
    },
    enqueueReplaceState: function (n, r, l) {
      n = n._reactInternals
      var o = nr(),
        c = vn(n),
        d = ci(o, c)
      ;(d.tag = 1),
        (d.payload = r),
        l != null && (d.callback = l),
        (r = Ii(n, d, c)),
        r !== null && (rr(r, n, c, o), Xs(r, n, c))
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals
      var l = nr(),
        o = vn(n),
        c = ci(l, o)
      ;(c.tag = 2),
        r != null && (c.callback = r),
        (r = Ii(n, c, o)),
        r !== null && (rr(r, n, o, l), Xs(r, n, o))
    },
  }
  function Lv(n, r, l, o, c, d, h) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == 'function'
        ? n.shouldComponentUpdate(o, d, h)
        : r.prototype && r.prototype.isPureReactComponent
        ? !xo(l, o) || !xo(c, d)
        : !0
    )
  }
  function Mv(n, r, l) {
    var o = !1,
      c = Va,
      d = r.contextType
    return (
      typeof d == 'object' && d !== null
        ? (d = ln(d))
        : ((c = Wt(r) ? xr : Ye.current),
          (o = r.contextTypes),
          (d = (o = o != null) ? ra(n, c) : Va)),
      (r = new r(l, d)),
      (n.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = qs),
      (n.stateNode = r),
      (r._reactInternals = n),
      o &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = c),
        (n.__reactInternalMemoizedMaskedChildContext = d)),
      r
    )
  }
  function Nv(n, r, l, o) {
    ;(n = r.state),
      typeof r.componentWillReceiveProps == 'function' &&
        r.componentWillReceiveProps(l, o),
      typeof r.UNSAFE_componentWillReceiveProps == 'function' &&
        r.UNSAFE_componentWillReceiveProps(l, o),
      r.state !== n && qs.enqueueReplaceState(r, r.state, null)
  }
  function Ks(n, r, l, o) {
    var c = n.stateNode
    ;(c.props = l), (c.state = n.memoizedState), (c.refs = _v), td(n)
    var d = r.contextType
    typeof d == 'object' && d !== null
      ? (c.context = ln(d))
      : ((d = Wt(r) ? xr : Ye.current), (c.context = ra(n, d))),
      (c.state = n.memoizedState),
      (d = r.getDerivedStateFromProps),
      typeof d == 'function' && (rd(n, r, d, l), (c.state = n.memoizedState)),
      typeof r.getDerivedStateFromProps == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function' ||
        (typeof c.UNSAFE_componentWillMount != 'function' &&
          typeof c.componentWillMount != 'function') ||
        ((r = c.state),
        typeof c.componentWillMount == 'function' && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == 'function' &&
          c.UNSAFE_componentWillMount(),
        r !== c.state && qs.enqueueReplaceState(c, c.state, null),
        Qi(n, l, c, o),
        (c.state = n.memoizedState)),
      typeof c.componentDidMount == 'function' && (n.flags |= 4194308)
  }
  function Cu(n, r, l) {
    if (
      ((n = l.ref),
      n !== null && typeof n != 'function' && typeof n != 'object')
    ) {
      if (l._owner) {
        if (((l = l._owner), l)) {
          if (l.tag !== 1) throw Error(y(309))
          var o = l.stateNode
        }
        if (!o) throw Error(y(147, n))
        var c = o,
          d = '' + n
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == 'function' &&
          r.ref._stringRef === d
          ? r.ref
          : ((r = function (h) {
              var C = c.refs
              C === _v && (C = c.refs = {}),
                h === null ? delete C[d] : (C[d] = h)
            }),
            (r._stringRef = d),
            r)
      }
      if (typeof n != 'string') throw Error(y(284))
      if (!l._owner) throw Error(y(290, n))
    }
    return n
  }
  function Zs(n, r) {
    throw (
      ((n = Object.prototype.toString.call(r)),
      Error(
        y(
          31,
          n === '[object Object]'
            ? 'object with keys {' + Object.keys(r).join(', ') + '}'
            : n
        )
      ))
    )
  }
  function zv(n) {
    var r = n._init
    return r(n._payload)
  }
  function Uv(n) {
    function r(L, b) {
      if (n) {
        var U = L.deletions
        U === null ? ((L.deletions = [b]), (L.flags |= 16)) : U.push(b)
      }
    }
    function l(L, b) {
      if (!n) return null
      for (; b !== null; ) r(L, b), (b = b.sibling)
      return null
    }
    function o(L, b) {
      for (L = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? L.set(b.key, b) : L.set(b.index, b), (b = b.sibling)
      return L
    }
    function c(L, b) {
      return (L = el(L, b)), (L.index = 0), (L.sibling = null), L
    }
    function d(L, b, U) {
      return (
        (L.index = U),
        n
          ? ((U = L.alternate),
            U !== null
              ? ((U = U.index), U < b ? ((L.flags |= 2), b) : U)
              : ((L.flags |= 2), b))
          : ((L.flags |= 1048576), b)
      )
    }
    function h(L) {
      return n && L.alternate === null && (L.flags |= 2), L
    }
    function C(L, b, U, ne) {
      return b === null || b.tag !== 6
        ? ((b = qo(U, L.mode, ne)), (b.return = L), b)
        : ((b = c(b, U)), (b.return = L), b)
    }
    function R(L, b, U, ne) {
      var be = U.type
      return be === Ve
        ? X(L, b, U.props.children, ne, U.key)
        : b !== null &&
          (b.elementType === be ||
            (typeof be == 'object' &&
              be !== null &&
              be.$$typeof === rt &&
              zv(be) === b.type))
        ? ((ne = c(b, U.props)), (ne.ref = Cu(L, b, U)), (ne.return = L), ne)
        : ((ne = Lc(U.type, U.key, U.props, null, L.mode, ne)),
          (ne.ref = Cu(L, b, U)),
          (ne.return = L),
          ne)
    }
    function F(L, b, U, ne) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== U.containerInfo ||
        b.stateNode.implementation !== U.implementation
        ? ((b = Il(U, L.mode, ne)), (b.return = L), b)
        : ((b = c(b, U.children || [])), (b.return = L), b)
    }
    function X(L, b, U, ne, be) {
      return b === null || b.tag !== 7
        ? ((b = $l(U, L.mode, ne, be)), (b.return = L), b)
        : ((b = c(b, U)), (b.return = L), b)
    }
    function Z(L, b, U) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return (b = qo('' + b, L.mode, U)), (b.return = L), b
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case de:
            return (
              (U = Lc(b.type, b.key, b.props, null, L.mode, U)),
              (U.ref = Cu(L, null, b)),
              (U.return = L),
              U
            )
          case Ee:
            return (b = Il(b, L.mode, U)), (b.return = L), b
          case rt:
            var ne = b._init
            return Z(L, ne(b._payload), U)
        }
        if (Ja(b) || we(b))
          return (b = $l(b, L.mode, U, null)), (b.return = L), b
        Zs(L, b)
      }
      return null
    }
    function G(L, b, U, ne) {
      var be = b !== null ? b.key : null
      if ((typeof U == 'string' && U !== '') || typeof U == 'number')
        return be !== null ? null : C(L, b, '' + U, ne)
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case de:
            return U.key === be ? R(L, b, U, ne) : null
          case Ee:
            return U.key === be ? F(L, b, U, ne) : null
          case rt:
            return (be = U._init), G(L, b, be(U._payload), ne)
        }
        if (Ja(U) || we(U)) return be !== null ? null : X(L, b, U, ne, null)
        Zs(L, U)
      }
      return null
    }
    function pe(L, b, U, ne, be) {
      if ((typeof ne == 'string' && ne !== '') || typeof ne == 'number')
        return (L = L.get(U) || null), C(b, L, '' + ne, be)
      if (typeof ne == 'object' && ne !== null) {
        switch (ne.$$typeof) {
          case de:
            return (
              (L = L.get(ne.key === null ? U : ne.key) || null), R(b, L, ne, be)
            )
          case Ee:
            return (
              (L = L.get(ne.key === null ? U : ne.key) || null), F(b, L, ne, be)
            )
          case rt:
            var xe = ne._init
            return pe(L, b, U, xe(ne._payload), be)
        }
        if (Ja(ne) || we(ne))
          return (L = L.get(U) || null), X(b, L, ne, be, null)
        Zs(b, ne)
      }
      return null
    }
    function Se(L, b, U, ne) {
      for (
        var be = null, xe = null, De = b, $e = (b = 0), On = null;
        De !== null && $e < U.length;
        $e++
      ) {
        De.index > $e ? ((On = De), (De = null)) : (On = De.sibling)
        var mt = G(L, De, U[$e], ne)
        if (mt === null) {
          De === null && (De = On)
          break
        }
        n && De && mt.alternate === null && r(L, De),
          (b = d(mt, b, $e)),
          xe === null ? (be = mt) : (xe.sibling = mt),
          (xe = mt),
          (De = On)
      }
      if ($e === U.length) return l(L, De), Vt && Vr(L, $e), be
      if (De === null) {
        for (; $e < U.length; $e++)
          (De = Z(L, U[$e], ne)),
            De !== null &&
              ((b = d(De, b, $e)),
              xe === null ? (be = De) : (xe.sibling = De),
              (xe = De))
        return Vt && Vr(L, $e), be
      }
      for (De = o(L, De); $e < U.length; $e++)
        (On = pe(De, L, $e, U[$e], ne)),
          On !== null &&
            (n &&
              On.alternate !== null &&
              De.delete(On.key === null ? $e : On.key),
            (b = d(On, b, $e)),
            xe === null ? (be = On) : (xe.sibling = On),
            (xe = On))
      return (
        n &&
          De.forEach(function (tl) {
            return r(L, tl)
          }),
        Vt && Vr(L, $e),
        be
      )
    }
    function Te(L, b, U, ne) {
      var be = we(U)
      if (typeof be != 'function') throw Error(y(150))
      if (((U = be.call(U)), U == null)) throw Error(y(151))
      for (
        var xe = (be = null), De = b, $e = (b = 0), On = null, mt = U.next();
        De !== null && !mt.done;
        $e++, mt = U.next()
      ) {
        De.index > $e ? ((On = De), (De = null)) : (On = De.sibling)
        var tl = G(L, De, mt.value, ne)
        if (tl === null) {
          De === null && (De = On)
          break
        }
        n && De && tl.alternate === null && r(L, De),
          (b = d(tl, b, $e)),
          xe === null ? (be = tl) : (xe.sibling = tl),
          (xe = tl),
          (De = On)
      }
      if (mt.done) return l(L, De), Vt && Vr(L, $e), be
      if (De === null) {
        for (; !mt.done; $e++, mt = U.next())
          (mt = Z(L, mt.value, ne)),
            mt !== null &&
              ((b = d(mt, b, $e)),
              xe === null ? (be = mt) : (xe.sibling = mt),
              (xe = mt))
        return Vt && Vr(L, $e), be
      }
      for (De = o(L, De); !mt.done; $e++, mt = U.next())
        (mt = pe(De, L, $e, mt.value, ne)),
          mt !== null &&
            (n &&
              mt.alternate !== null &&
              De.delete(mt.key === null ? $e : mt.key),
            (b = d(mt, b, $e)),
            xe === null ? (be = mt) : (xe.sibling = mt),
            (xe = mt))
      return (
        n &&
          De.forEach(function (Ty) {
            return r(L, Ty)
          }),
        Vt && Vr(L, $e),
        be
      )
    }
    function un(L, b, U, ne) {
      if (
        (typeof U == 'object' &&
          U !== null &&
          U.type === Ve &&
          U.key === null &&
          (U = U.props.children),
        typeof U == 'object' && U !== null)
      ) {
        switch (U.$$typeof) {
          case de:
            e: {
              for (var be = U.key, xe = b; xe !== null; ) {
                if (xe.key === be) {
                  if (((be = U.type), be === Ve)) {
                    if (xe.tag === 7) {
                      l(L, xe.sibling),
                        (b = c(xe, U.props.children)),
                        (b.return = L),
                        (L = b)
                      break e
                    }
                  } else if (
                    xe.elementType === be ||
                    (typeof be == 'object' &&
                      be !== null &&
                      be.$$typeof === rt &&
                      zv(be) === xe.type)
                  ) {
                    l(L, xe.sibling),
                      (b = c(xe, U.props)),
                      (b.ref = Cu(L, xe, U)),
                      (b.return = L),
                      (L = b)
                    break e
                  }
                  l(L, xe)
                  break
                } else r(L, xe)
                xe = xe.sibling
              }
              U.type === Ve
                ? ((b = $l(U.props.children, L.mode, ne, U.key)),
                  (b.return = L),
                  (L = b))
                : ((ne = Lc(U.type, U.key, U.props, null, L.mode, ne)),
                  (ne.ref = Cu(L, b, U)),
                  (ne.return = L),
                  (L = ne))
            }
            return h(L)
          case Ee:
            e: {
              for (xe = U.key; b !== null; ) {
                if (b.key === xe)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === U.containerInfo &&
                    b.stateNode.implementation === U.implementation
                  ) {
                    l(L, b.sibling),
                      (b = c(b, U.children || [])),
                      (b.return = L),
                      (L = b)
                    break e
                  } else {
                    l(L, b)
                    break
                  }
                else r(L, b)
                b = b.sibling
              }
              ;(b = Il(U, L.mode, ne)), (b.return = L), (L = b)
            }
            return h(L)
          case rt:
            return (xe = U._init), un(L, b, xe(U._payload), ne)
        }
        if (Ja(U)) return Se(L, b, U, ne)
        if (we(U)) return Te(L, b, U, ne)
        Zs(L, U)
      }
      return (typeof U == 'string' && U !== '') || typeof U == 'number'
        ? ((U = '' + U),
          b !== null && b.tag === 6
            ? (l(L, b.sibling), (b = c(b, U)), (b.return = L), (L = b))
            : (l(L, b), (b = qo(U, L.mode, ne)), (b.return = L), (L = b)),
          h(L))
        : l(L, b)
    }
    return un
  }
  var Eu = Uv(!0),
    Ov = Uv(!1),
    No = {},
    Ma = qe(No),
    zo = qe(No),
    wu = qe(No)
  function kl(n) {
    if (n === No) throw Error(y(174))
    return n
  }
  function ad(n, r) {
    switch ((Et(wu, r), Et(zo, n), Et(Ma, No), (n = r.nodeType), n)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : cn(null, '')
        break
      default:
        ;(n = n === 8 ? r.parentNode : r),
          (r = n.namespaceURI || null),
          (n = n.tagName),
          (r = cn(r, n))
    }
    xt(Ma), Et(Ma, r)
  }
  function Wi() {
    xt(Ma), xt(zo), xt(wu)
  }
  function Oe(n) {
    kl(wu.current)
    var r = kl(Ma.current),
      l = cn(r, n.type)
    r !== l && (Et(zo, n), Et(Ma, l))
  }
  function it(n) {
    zo.current === n && (xt(Ma), xt(zo))
  }
  var je = qe(0)
  function Kt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === '$?' || l.data === '$!')
        )
          return r
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r
      } else if (r.child !== null) {
        ;(r.child.return = r), (r = r.child)
        continue
      }
      if (r === n) break
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null
        r = r.return
      }
      ;(r.sibling.return = r.return), (r = r.sibling)
    }
    return null
  }
  var ua = []
  function Js() {
    for (var n = 0; n < ua.length; n++)
      ua[n]._workInProgressVersionPrimary = null
    ua.length = 0
  }
  var ec = He.ReactCurrentDispatcher,
    id = He.ReactCurrentBatchConfig,
    Dl = 0,
    Bt = null,
    I = null,
    dt = null,
    Fe = !1,
    Pa = !1,
    Yr = 0,
    _l = 0
  function Pt() {
    throw Error(y(321))
  }
  function Ll(n, r) {
    if (r === null) return !1
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ta(n[l], r[l])) return !1
    return !0
  }
  function Gi(n, r, l, o, c, d) {
    if (
      ((Dl = d),
      (Bt = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (ec.current = n === null || n.memoizedState === null ? uy : oy),
      (n = l(o, c)),
      Pa)
    ) {
      d = 0
      do {
        if (((Pa = !1), (Yr = 0), 25 <= d)) throw Error(y(301))
        ;(d += 1),
          (dt = I = null),
          (r.updateQueue = null),
          (ec.current = ud),
          (n = l(o, c))
      } while (Pa)
    }
    if (
      ((ec.current = mc),
      (r = I !== null && I.next !== null),
      (Dl = 0),
      (dt = I = Bt = null),
      (Fe = !1),
      r)
    )
      throw Error(y(300))
    return n
  }
  function Ml() {
    var n = Yr !== 0
    return (Yr = 0), n
  }
  function oa() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return dt === null ? (Bt.memoizedState = dt = n) : (dt = dt.next = n), dt
  }
  function Tr() {
    if (I === null) {
      var n = Bt.alternate
      n = n !== null ? n.memoizedState : null
    } else n = I.next
    var r = dt === null ? Bt.memoizedState : dt.next
    if (r !== null) (dt = r), (I = n)
    else {
      if (n === null) throw Error(y(310))
      ;(I = n),
        (n = {
          memoizedState: I.memoizedState,
          baseState: I.baseState,
          baseQueue: I.baseQueue,
          queue: I.queue,
          next: null,
        }),
        dt === null ? (Bt.memoizedState = dt = n) : (dt = dt.next = n)
    }
    return dt
  }
  function Nl(n, r) {
    return typeof r == 'function' ? r(n) : r
  }
  function Uo(n) {
    var r = Tr(),
      l = r.queue
    if (l === null) throw Error(y(311))
    l.lastRenderedReducer = n
    var o = I,
      c = o.baseQueue,
      d = l.pending
    if (d !== null) {
      if (c !== null) {
        var h = c.next
        ;(c.next = d.next), (d.next = h)
      }
      ;(o.baseQueue = c = d), (l.pending = null)
    }
    if (c !== null) {
      ;(d = c.next), (o = o.baseState)
      var C = (h = null),
        R = null,
        F = d
      do {
        var X = F.lane
        if ((Dl & X) === X)
          R !== null &&
            (R = R.next =
              {
                lane: 0,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null,
              }),
            (o = F.hasEagerState ? F.eagerState : n(o, F.action))
        else {
          var Z = {
            lane: X,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          }
          R === null ? ((C = R = Z), (h = o)) : (R = R.next = Z),
            (Bt.lanes |= X),
            (vi |= X)
        }
        F = F.next
      } while (F !== null && F !== d)
      R === null ? (h = o) : (R.next = C),
        ta(o, r.memoizedState) || (pn = !0),
        (r.memoizedState = o),
        (r.baseState = h),
        (r.baseQueue = R),
        (l.lastRenderedState = o)
    }
    if (((n = l.interleaved), n !== null)) {
      c = n
      do (d = c.lane), (Bt.lanes |= d), (vi |= d), (c = c.next)
      while (c !== n)
    } else c === null && (l.lanes = 0)
    return [r.memoizedState, l.dispatch]
  }
  function Oo(n) {
    var r = Tr(),
      l = r.queue
    if (l === null) throw Error(y(311))
    l.lastRenderedReducer = n
    var o = l.dispatch,
      c = l.pending,
      d = r.memoizedState
    if (c !== null) {
      l.pending = null
      var h = (c = c.next)
      do (d = n(d, h.action)), (h = h.next)
      while (h !== c)
      ta(d, r.memoizedState) || (pn = !0),
        (r.memoizedState = d),
        r.baseQueue === null && (r.baseState = d),
        (l.lastRenderedState = d)
    }
    return [d, o]
  }
  function tc() {}
  function nc(n, r) {
    var l = Bt,
      o = Tr(),
      c = r(),
      d = !ta(o.memoizedState, c)
    if (
      (d && ((o.memoizedState = c), (pn = !0)),
      (o = o.queue),
      Ao(ic.bind(null, l, o, n), [n]),
      o.getSnapshot !== r || d || (dt !== null && dt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        zl(9, ac.bind(null, l, o, c, r), void 0, null),
        Zt === null)
      )
        throw Error(y(349))
      Dl & 30 || rc(l, r, c)
    }
    return c
  }
  function rc(n, r, l) {
    ;(n.flags |= 16384),
      (n = { getSnapshot: r, value: l }),
      (r = Bt.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Bt.updateQueue = r),
          (r.stores = [n]))
        : ((l = r.stores), l === null ? (r.stores = [n]) : l.push(n))
  }
  function ac(n, r, l, o) {
    ;(r.value = l), (r.getSnapshot = o), lc(r) && uc(n)
  }
  function ic(n, r, l) {
    return l(function () {
      lc(r) && uc(n)
    })
  }
  function lc(n) {
    var r = n.getSnapshot
    n = n.value
    try {
      var l = r()
      return !ta(n, l)
    } catch {
      return !0
    }
  }
  function uc(n) {
    var r = si(n, 1)
    r !== null && rr(r, n, 1, -1)
  }
  function oc(n) {
    var r = oa()
    return (
      typeof n == 'function' && (n = n()),
      (r.memoizedState = r.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nl,
        lastRenderedState: n,
      }),
      (r.queue = n),
      (n = n.dispatch = hc.bind(null, Bt, n)),
      [r.memoizedState, n]
    )
  }
  function zl(n, r, l, o) {
    return (
      (n = { tag: n, create: r, destroy: l, deps: o, next: null }),
      (r = Bt.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Bt.updateQueue = r),
          (r.lastEffect = n.next = n))
        : ((l = r.lastEffect),
          l === null
            ? (r.lastEffect = n.next = n)
            : ((o = l.next), (l.next = n), (n.next = o), (r.lastEffect = n))),
      n
    )
  }
  function sc() {
    return Tr().memoizedState
  }
  function Ul(n, r, l, o) {
    var c = oa()
    ;(Bt.flags |= n),
      (c.memoizedState = zl(1 | r, l, void 0, o === void 0 ? null : o))
  }
  function fi(n, r, l, o) {
    var c = Tr()
    o = o === void 0 ? null : o
    var d = void 0
    if (I !== null) {
      var h = I.memoizedState
      if (((d = h.destroy), o !== null && Ll(o, h.deps))) {
        c.memoizedState = zl(r, l, d, o)
        return
      }
    }
    ;(Bt.flags |= n), (c.memoizedState = zl(1 | r, l, d, o))
  }
  function cc(n, r) {
    return Ul(8390656, 8, n, r)
  }
  function Ao(n, r) {
    return fi(2048, 8, n, r)
  }
  function fc(n, r) {
    return fi(4, 2, n, r)
  }
  function dc(n, r) {
    return fi(4, 4, n, r)
  }
  function ld(n, r) {
    if (typeof r == 'function')
      return (
        (n = n()),
        r(n),
        function () {
          r(null)
        }
      )
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null
        }
      )
  }
  function Ru(n, r, l) {
    return (
      (l = l != null ? l.concat([n]) : null), fi(4, 4, ld.bind(null, r, n), l)
    )
  }
  function pc() {}
  function Tu(n, r) {
    var l = Tr()
    r = r === void 0 ? null : r
    var o = l.memoizedState
    return o !== null && r !== null && Ll(r, o[1])
      ? o[0]
      : ((l.memoizedState = [n, r]), n)
  }
  function Xi(n, r) {
    var l = Tr()
    r = r === void 0 ? null : r
    var o = l.memoizedState
    return o !== null && r !== null && Ll(r, o[1])
      ? o[0]
      : ((n = n()), (l.memoizedState = [n, r]), n)
  }
  function br(n, r, l) {
    return Dl & 21
      ? (ta(l, r) ||
          ((l = ws()), (Bt.lanes |= l), (vi |= l), (n.baseState = !0)),
        r)
      : (n.baseState && ((n.baseState = !1), (pn = !0)), (n.memoizedState = l))
  }
  function ly(n, r) {
    var l = Tt
    ;(Tt = l !== 0 && 4 > l ? l : 4), n(!0)
    var o = id.transition
    id.transition = {}
    try {
      n(!1), r()
    } finally {
      ;(Tt = l), (id.transition = o)
    }
  }
  function zt() {
    return Tr().memoizedState
  }
  function vc(n, r, l) {
    var o = vn(n)
    if (
      ((l = {
        lane: o,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      bu(n))
    )
      jo(r, l)
    else if (((l = Dv(n, r, l, o)), l !== null)) {
      var c = nr()
      rr(l, n, o, c), Av(l, r, o)
    }
  }
  function hc(n, r, l) {
    var o = vn(n),
      c = {
        lane: o,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (bu(n)) jo(r, c)
    else {
      var d = n.alternate
      if (
        n.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = r.lastRenderedReducer), d !== null)
      )
        try {
          var h = r.lastRenderedState,
            C = d(h, l)
          if (((c.hasEagerState = !0), (c.eagerState = C), ta(C, h))) {
            var R = r.interleaved
            R === null
              ? ((c.next = c), ed(r))
              : ((c.next = R.next), (R.next = c)),
              (r.interleaved = c)
            return
          }
        } catch {
        } finally {
        }
      ;(l = Dv(n, r, c, o)),
        l !== null && ((c = nr()), rr(l, n, o, c), Av(l, r, o))
    }
  }
  function bu(n) {
    var r = n.alternate
    return n === Bt || (r !== null && r === Bt)
  }
  function jo(n, r) {
    Pa = Fe = !0
    var l = n.pending
    l === null ? (r.next = r) : ((r.next = l.next), (l.next = r)),
      (n.pending = r)
  }
  function Av(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes
      ;(o &= n.pendingLanes), (l |= o), (r.lanes = l), oo(n, l)
    }
  }
  var mc = {
      readContext: ln,
      useCallback: Pt,
      useContext: Pt,
      useEffect: Pt,
      useImperativeHandle: Pt,
      useInsertionEffect: Pt,
      useLayoutEffect: Pt,
      useMemo: Pt,
      useReducer: Pt,
      useRef: Pt,
      useState: Pt,
      useDebugValue: Pt,
      useDeferredValue: Pt,
      useTransition: Pt,
      useMutableSource: Pt,
      useSyncExternalStore: Pt,
      useId: Pt,
      unstable_isNewReconciler: !1,
    },
    uy = {
      readContext: ln,
      useCallback: function (n, r) {
        return (oa().memoizedState = [n, r === void 0 ? null : r]), n
      },
      useContext: ln,
      useEffect: cc,
      useImperativeHandle: function (n, r, l) {
        return (
          (l = l != null ? l.concat([n]) : null),
          Ul(4194308, 4, ld.bind(null, r, n), l)
        )
      },
      useLayoutEffect: function (n, r) {
        return Ul(4194308, 4, n, r)
      },
      useInsertionEffect: function (n, r) {
        return Ul(4, 2, n, r)
      },
      useMemo: function (n, r) {
        var l = oa()
        return (
          (r = r === void 0 ? null : r),
          (n = n()),
          (l.memoizedState = [n, r]),
          n
        )
      },
      useReducer: function (n, r, l) {
        var o = oa()
        return (
          (r = l !== void 0 ? l(r) : r),
          (o.memoizedState = o.baseState = r),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: r,
          }),
          (o.queue = n),
          (n = n.dispatch = vc.bind(null, Bt, n)),
          [o.memoizedState, n]
        )
      },
      useRef: function (n) {
        var r = oa()
        return (n = { current: n }), (r.memoizedState = n)
      },
      useState: oc,
      useDebugValue: pc,
      useDeferredValue: function (n) {
        return (oa().memoizedState = n)
      },
      useTransition: function () {
        var n = oc(!1),
          r = n[0]
        return (n = ly.bind(null, n[1])), (oa().memoizedState = n), [r, n]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, r, l) {
        var o = Bt,
          c = oa()
        if (Vt) {
          if (l === void 0) throw Error(y(407))
          l = l()
        } else {
          if (((l = r()), Zt === null)) throw Error(y(349))
          Dl & 30 || rc(o, r, l)
        }
        c.memoizedState = l
        var d = { value: l, getSnapshot: r }
        return (
          (c.queue = d),
          cc(ic.bind(null, o, d, n), [n]),
          (o.flags |= 2048),
          zl(9, ac.bind(null, o, d, l, r), void 0, null),
          l
        )
      },
      useId: function () {
        var n = oa(),
          r = Zt.identifierPrefix
        if (Vt) {
          var l = oi,
            o = Hn
          ;(l = (o & ~(1 << (32 - Zr(o) - 1))).toString(32) + l),
            (r = ':' + r + 'R' + l),
            (l = Yr++),
            0 < l && (r += 'H' + l.toString(32)),
            (r += ':')
        } else (l = _l++), (r = ':' + r + 'r' + l.toString(32) + ':')
        return (n.memoizedState = r)
      },
      unstable_isNewReconciler: !1,
    },
    oy = {
      readContext: ln,
      useCallback: Tu,
      useContext: ln,
      useEffect: Ao,
      useImperativeHandle: Ru,
      useInsertionEffect: fc,
      useLayoutEffect: dc,
      useMemo: Xi,
      useReducer: Uo,
      useRef: sc,
      useState: function () {
        return Uo(Nl)
      },
      useDebugValue: pc,
      useDeferredValue: function (n) {
        var r = Tr()
        return br(r, I.memoizedState, n)
      },
      useTransition: function () {
        var n = Uo(Nl)[0],
          r = Tr().memoizedState
        return [n, r]
      },
      useMutableSource: tc,
      useSyncExternalStore: nc,
      useId: zt,
      unstable_isNewReconciler: !1,
    },
    ud = {
      readContext: ln,
      useCallback: Tu,
      useContext: ln,
      useEffect: Ao,
      useImperativeHandle: Ru,
      useInsertionEffect: fc,
      useLayoutEffect: dc,
      useMemo: Xi,
      useReducer: Oo,
      useRef: sc,
      useState: function () {
        return Oo(Nl)
      },
      useDebugValue: pc,
      useDeferredValue: function (n) {
        var r = Tr()
        return I === null ? (r.memoizedState = n) : br(r, I.memoizedState, n)
      },
      useTransition: function () {
        var n = Oo(Nl)[0],
          r = Tr().memoizedState
        return [n, r]
      },
      useMutableSource: tc,
      useSyncExternalStore: nc,
      useId: zt,
      unstable_isNewReconciler: !1,
    }
  function ku(n, r) {
    try {
      var l = '',
        o = r
      do (l += Ct(o)), (o = o.return)
      while (o)
      var c = l
    } catch (d) {
      c =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack
    }
    return { value: n, source: r, stack: c, digest: null }
  }
  function Ho(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null }
  }
  function yc(n, r) {
    try {
      console.error(r.value)
    } catch (l) {
      setTimeout(function () {
        throw l
      })
    }
  }
  var sy = typeof WeakMap == 'function' ? WeakMap : Map
  function jv(n, r, l) {
    ;(l = ci(-1, l)), (l.tag = 3), (l.payload = { element: null })
    var o = r.value
    return (
      (l.callback = function () {
        Rc || ((Rc = !0), (Fl = o)), yc(n, r)
      }),
      l
    )
  }
  function Fo(n, r, l) {
    ;(l = ci(-1, l)), (l.tag = 3)
    var o = n.type.getDerivedStateFromError
    if (typeof o == 'function') {
      var c = r.value
      ;(l.payload = function () {
        return o(c)
      }),
        (l.callback = function () {
          yc(n, r)
        })
    }
    var d = n.stateNode
    return (
      d !== null &&
        typeof d.componentDidCatch == 'function' &&
        (l.callback = function () {
          yc(n, r),
            typeof o != 'function' &&
              (Ia === null
                ? (Ia = /* @__PURE__ */ new Set([this]))
                : Ia.add(this))
          var h = r.stack
          this.componentDidCatch(r.value, {
            componentStack: h !== null ? h : '',
          })
        }),
      l
    )
  }
  function Hv(n, r, l) {
    var o = n.pingCache
    if (o === null) {
      o = n.pingCache = new sy()
      var c = /* @__PURE__ */ new Set()
      o.set(r, c)
    } else
      (c = o.get(r)),
        c === void 0 && ((c = /* @__PURE__ */ new Set()), o.set(r, c))
    c.has(l) || (c.add(l), (n = my.bind(null, n, r, l)), r.then(n, n))
  }
  function od(n) {
    do {
      var r
      if (
        ((r = n.tag === 13) &&
          ((r = n.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return n
      n = n.return
    } while (n !== null)
    return null
  }
  function sd(n, r, l, o, c) {
    return n.mode & 1
      ? ((n.flags |= 65536), (n.lanes = c), n)
      : (n === r
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (l.flags |= 131072),
            (l.flags &= -52805),
            l.tag === 1 &&
              (l.alternate === null
                ? (l.tag = 17)
                : ((r = ci(-1, 1)), (r.tag = 2), Ii(l, r, 1))),
            (l.lanes |= 1)),
        n)
  }
  var cy = He.ReactCurrentOwner,
    pn = !1
  function xn(n, r, l, o) {
    r.child = n === null ? Ov(r, null, l, o) : Eu(r, n.child, l, o)
  }
  function qi(n, r, l, o, c) {
    l = l.render
    var d = r.ref
    return (
      ae(r, c),
      (o = Gi(n, r, l, o, d, c)),
      (l = Ml()),
      n !== null && !pn
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          Vn(n, r, c))
        : (Vt && l && Ys(r), (r.flags |= 1), xn(n, r, o, c), r.child)
    )
  }
  function gc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type
      return typeof d == 'function' &&
        !Dd(d) &&
        d.defaultProps === void 0 &&
        l.compare === null &&
        l.defaultProps === void 0
        ? ((r.tag = 15), (r.type = d), kr(n, r, d, o, c))
        : ((n = Lc(l.type, null, o, r, r.mode, c)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n))
    }
    if (((d = n.child), !(n.lanes & c))) {
      var h = d.memoizedProps
      if (
        ((l = l.compare), (l = l !== null ? l : xo), l(h, o) && n.ref === r.ref)
      )
        return Vn(n, r, c)
    }
    return (
      (r.flags |= 1),
      (n = el(d, o)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    )
  }
  function kr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps
      if (xo(d, o) && n.ref === r.ref)
        if (((pn = !1), (r.pendingProps = o = d), (n.lanes & c) !== 0))
          n.flags & 131072 && (pn = !0)
        else return (r.lanes = n.lanes), Vn(n, r, c)
    }
    return Du(n, r, l, o, c)
  }
  function Ol(n, r, l) {
    var o = r.pendingProps,
      c = o.children,
      d = n !== null ? n.memoizedState : null
    if (o.mode === 'hidden')
      if (!(r.mode & 1))
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Et(Uu, $r),
          ($r |= l)
      else {
        if (!(l & 1073741824))
          return (
            (n = d !== null ? d.baseLanes | l : l),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            Et(Uu, $r),
            ($r |= n),
            null
          )
        ;(r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = d !== null ? d.baseLanes : l),
          Et(Uu, $r),
          ($r |= o)
      }
    else
      d !== null ? ((o = d.baseLanes | l), (r.memoizedState = null)) : (o = l),
        Et(Uu, $r),
        ($r |= o)
    return xn(n, r, c, l), r.child
  }
  function Ke(n, r) {
    var l = r.ref
    ;((n === null && l !== null) || (n !== null && n.ref !== l)) &&
      ((r.flags |= 512), (r.flags |= 2097152))
  }
  function Du(n, r, l, o, c) {
    var d = Wt(l) ? xr : Ye.current
    return (
      (d = ra(r, d)),
      ae(r, c),
      (l = Gi(n, r, l, o, d, c)),
      (o = Ml()),
      n !== null && !pn
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          Vn(n, r, c))
        : (Vt && o && Ys(r), (r.flags |= 1), xn(n, r, l, c), r.child)
    )
  }
  function cd(n, r, l, o, c) {
    if (Wt(l)) {
      var d = !0
      Ps(r)
    } else d = !1
    if ((ae(r, c), r.stateNode === null))
      Jn(n, r), Mv(r, l, o), Ks(r, l, o, c), (o = !0)
    else if (n === null) {
      var h = r.stateNode,
        C = r.memoizedProps
      h.props = C
      var R = h.context,
        F = l.contextType
      typeof F == 'object' && F !== null
        ? (F = ln(F))
        : ((F = Wt(l) ? xr : Ye.current), (F = ra(r, F)))
      var X = l.getDerivedStateFromProps,
        Z =
          typeof X == 'function' ||
          typeof h.getSnapshotBeforeUpdate == 'function'
      Z ||
        (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof h.componentWillReceiveProps != 'function') ||
        ((C !== o || R !== F) && Nv(r, h, o, F)),
        ($i = !1)
      var G = r.memoizedState
      ;(h.state = G),
        Qi(r, o, h, c),
        (R = r.memoizedState),
        C !== o || G !== R || tn.current || $i
          ? (typeof X == 'function' && (rd(r, l, X, o), (R = r.memoizedState)),
            (C = $i || Lv(r, l, C, o, G, R, F))
              ? (Z ||
                  (typeof h.UNSAFE_componentWillMount != 'function' &&
                    typeof h.componentWillMount != 'function') ||
                  (typeof h.componentWillMount == 'function' &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == 'function' &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == 'function' &&
                  (r.flags |= 4194308))
              : (typeof h.componentDidMount == 'function' &&
                  (r.flags |= 4194308),
                (r.memoizedProps = o),
                (r.memoizedState = R)),
            (h.props = o),
            (h.state = R),
            (h.context = F),
            (o = C))
          : (typeof h.componentDidMount == 'function' && (r.flags |= 4194308),
            (o = !1))
    } else {
      ;(h = r.stateNode),
        Sn(n, r),
        (C = r.memoizedProps),
        (F = r.type === r.elementType ? C : Pr(r.type, C)),
        (h.props = F),
        (Z = r.pendingProps),
        (G = h.context),
        (R = l.contextType),
        typeof R == 'object' && R !== null
          ? (R = ln(R))
          : ((R = Wt(l) ? xr : Ye.current), (R = ra(r, R)))
      var pe = l.getDerivedStateFromProps
      ;(X =
        typeof pe == 'function' ||
        typeof h.getSnapshotBeforeUpdate == 'function') ||
        (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof h.componentWillReceiveProps != 'function') ||
        ((C !== Z || G !== R) && Nv(r, h, o, R)),
        ($i = !1),
        (G = r.memoizedState),
        (h.state = G),
        Qi(r, o, h, c)
      var Se = r.memoizedState
      C !== Z || G !== Se || tn.current || $i
        ? (typeof pe == 'function' && (rd(r, l, pe, o), (Se = r.memoizedState)),
          (F = $i || Lv(r, l, F, o, G, Se, R) || !1)
            ? (X ||
                (typeof h.UNSAFE_componentWillUpdate != 'function' &&
                  typeof h.componentWillUpdate != 'function') ||
                (typeof h.componentWillUpdate == 'function' &&
                  h.componentWillUpdate(o, Se, R),
                typeof h.UNSAFE_componentWillUpdate == 'function' &&
                  h.UNSAFE_componentWillUpdate(o, Se, R)),
              typeof h.componentDidUpdate == 'function' && (r.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == 'function' &&
                (r.flags |= 1024))
            : (typeof h.componentDidUpdate != 'function' ||
                (C === n.memoizedProps && G === n.memoizedState) ||
                (r.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != 'function' ||
                (C === n.memoizedProps && G === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = o),
              (r.memoizedState = Se)),
          (h.props = o),
          (h.state = Se),
          (h.context = R),
          (o = F))
        : (typeof h.componentDidUpdate != 'function' ||
            (C === n.memoizedProps && G === n.memoizedState) ||
            (r.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != 'function' ||
            (C === n.memoizedProps && G === n.memoizedState) ||
            (r.flags |= 1024),
          (o = !1))
    }
    return Fv(n, r, l, o, d, c)
  }
  function Fv(n, r, l, o, c, d) {
    Ke(n, r)
    var h = (r.flags & 128) !== 0
    if (!o && !h) return c && Rv(r, l, !1), Vn(n, r, d)
    ;(o = r.stateNode), (cy.current = r)
    var C =
      h && typeof l.getDerivedStateFromError != 'function' ? null : o.render()
    return (
      (r.flags |= 1),
      n !== null && h
        ? ((r.child = Eu(r, n.child, null, d)), (r.child = Eu(r, null, C, d)))
        : xn(n, r, C, d),
      (r.memoizedState = o.state),
      c && Rv(r, l, !0),
      r.child
    )
  }
  function Vv(n) {
    var r = n.stateNode
    r.pendingContext
      ? Vi(n, r.pendingContext, r.pendingContext !== r.context)
      : r.context && Vi(n, r.context, !1),
      ad(n, r.containerInfo)
  }
  function Sc(n, r, l, o, c) {
    return qt(), Kf(c), (r.flags |= 256), xn(n, r, l, o), r.child
  }
  var Al = { dehydrated: null, treeContext: null, retryLane: 0 }
  function fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null }
  }
  function dd(n, r, l) {
    var o = r.pendingProps,
      c = je.current,
      d = !1,
      h = (r.flags & 128) !== 0,
      C
    if (
      ((C = h) ||
        (C = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0),
      C
        ? ((d = !0), (r.flags &= -129))
        : (n === null || n.memoizedState !== null) && (c |= 1),
      Et(je, c & 1),
      n === null)
    )
      return (
        Is(r),
        (n = r.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? (r.mode & 1
              ? n.data === '$!'
                ? (r.lanes = 8)
                : (r.lanes = 1073741824)
              : (r.lanes = 1),
            null)
          : ((h = o.children),
            (n = o.fallback),
            d
              ? ((o = r.mode),
                (d = r.child),
                (h = { mode: 'hidden', children: h }),
                !(o & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = h))
                  : (d = Xo(h, o, 0, null)),
                (n = $l(n, o, l, null)),
                (d.return = r),
                (n.return = r),
                (d.sibling = n),
                (r.child = d),
                (r.child.memoizedState = fd(l)),
                (r.memoizedState = Al),
                n)
              : pd(r, h))
      )
    if (((c = n.memoizedState), c !== null && ((C = c.dehydrated), C !== null)))
      return fy(n, r, h, o, C, c, l)
    if (d) {
      ;(d = o.fallback), (h = r.mode), (c = n.child), (C = c.sibling)
      var R = { mode: 'hidden', children: o.children }
      return (
        !(h & 1) && r.child !== c
          ? ((o = r.child),
            (o.childLanes = 0),
            (o.pendingProps = R),
            (r.deletions = null))
          : ((o = el(c, R)), (o.subtreeFlags = c.subtreeFlags & 14680064)),
        C !== null ? (d = el(C, d)) : ((d = $l(d, h, l, null)), (d.flags |= 2)),
        (d.return = r),
        (o.return = r),
        (o.sibling = d),
        (r.child = o),
        (o = d),
        (d = r.child),
        (h = n.child.memoizedState),
        (h =
          h === null
            ? fd(l)
            : {
                baseLanes: h.baseLanes | l,
                cachePool: null,
                transitions: h.transitions,
              }),
        (d.memoizedState = h),
        (d.childLanes = n.childLanes & ~l),
        (r.memoizedState = Al),
        o
      )
    }
    return (
      (d = n.child),
      (n = d.sibling),
      (o = el(d, { mode: 'visible', children: o.children })),
      !(r.mode & 1) && (o.lanes = l),
      (o.return = r),
      (o.sibling = null),
      n !== null &&
        ((l = r.deletions),
        l === null ? ((r.deletions = [n]), (r.flags |= 16)) : l.push(n)),
      (r.child = o),
      (r.memoizedState = null),
      o
    )
  }
  function pd(n, r) {
    return (
      (r = Xo({ mode: 'visible', children: r }, n.mode, 0, null)),
      (r.return = n),
      (n.child = r)
    )
  }
  function _u(n, r, l, o) {
    return (
      o !== null && Kf(o),
      Eu(r, n.child, null, l),
      (n = pd(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    )
  }
  function fy(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256
        ? ((r.flags &= -257), (o = Ho(Error(y(422)))), _u(n, r, h, o))
        : r.memoizedState !== null
        ? ((r.child = n.child), (r.flags |= 128), null)
        : ((d = o.fallback),
          (c = r.mode),
          (o = Xo({ mode: 'visible', children: o.children }, c, 0, null)),
          (d = $l(d, c, h, null)),
          (d.flags |= 2),
          (o.return = r),
          (d.return = r),
          (o.sibling = d),
          (r.child = o),
          r.mode & 1 && Eu(r, n.child, null, h),
          (r.child.memoizedState = fd(h)),
          (r.memoizedState = Al),
          d)
    if (!(r.mode & 1)) return _u(n, r, h, null)
    if (c.data === '$!') {
      if (((o = c.nextSibling && c.nextSibling.dataset), o)) var C = o.dgst
      return (
        (o = C), (d = Error(y(419))), (o = Ho(d, o, void 0)), _u(n, r, h, o)
      )
    }
    if (((C = (h & n.childLanes) !== 0), pn || C)) {
      if (((o = Zt), o !== null)) {
        switch (h & -h) {
          case 4:
            c = 2
            break
          case 16:
            c = 8
            break
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
            c = 32
            break
          case 536870912:
            c = 268435456
            break
          default:
            c = 0
        }
        ;(c = c & (o.suspendedLanes | h) ? 0 : c),
          c !== 0 &&
            c !== d.retryLane &&
            ((d.retryLane = c), si(n, c), rr(o, n, c, -1))
      }
      return Td(), (o = Ho(Error(y(421)))), _u(n, r, h, o)
    }
    return c.data === '$?'
      ? ((r.flags |= 128),
        (r.child = n.child),
        (r = yy.bind(null, n)),
        (c._reactRetry = r),
        null)
      : ((n = d.treeContext),
        (Rr = La(c.nextSibling)),
        (Br = r),
        (Vt = !0),
        (la = null),
        n !== null &&
          ((wr[Zn++] = Hn),
          (wr[Zn++] = oi),
          (wr[Zn++] = ia),
          (Hn = n.id),
          (oi = n.overflow),
          (ia = r)),
        (r = pd(r, o.children)),
        (r.flags |= 4096),
        r)
  }
  function vd(n, r, l) {
    n.lanes |= r
    var o = n.alternate
    o !== null && (o.lanes |= r), Nn(n.return, r, l)
  }
  function xc(n, r, l, o, c) {
    var d = n.memoizedState
    d === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: l,
          tailMode: c,
        })
      : ((d.isBackwards = r),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = l),
        (d.tailMode = c))
  }
  function hd(n, r, l) {
    var o = r.pendingProps,
      c = o.revealOrder,
      d = o.tail
    if ((xn(n, r, o.children, l), (o = je.current), o & 2))
      (o = (o & 1) | 2), (r.flags |= 128)
    else {
      if (n !== null && n.flags & 128)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && vd(n, l, r)
          else if (n.tag === 19) vd(n, l, r)
          else if (n.child !== null) {
            ;(n.child.return = n), (n = n.child)
            continue
          }
          if (n === r) break e
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e
            n = n.return
          }
          ;(n.sibling.return = n.return), (n = n.sibling)
        }
      o &= 1
    }
    if ((Et(je, o), !(r.mode & 1))) r.memoizedState = null
    else
      switch (c) {
        case 'forwards':
          for (l = r.child, c = null; l !== null; )
            (n = l.alternate),
              n !== null && Kt(n) === null && (c = l),
              (l = l.sibling)
          ;(l = c),
            l === null
              ? ((c = r.child), (r.child = null))
              : ((c = l.sibling), (l.sibling = null)),
            xc(r, !1, c, l, d)
          break
        case 'backwards':
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (((n = c.alternate), n !== null && Kt(n) === null)) {
              r.child = c
              break
            }
            ;(n = c.sibling), (c.sibling = l), (l = c), (c = n)
          }
          xc(r, !0, l, null, d)
          break
        case 'together':
          xc(r, !1, null, null, void 0)
          break
        default:
          r.memoizedState = null
      }
    return r.child
  }
  function Jn(n, r) {
    !(r.mode & 1) &&
      n !== null &&
      ((n.alternate = null), (r.alternate = null), (r.flags |= 2))
  }
  function Vn(n, r, l) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (vi |= r.lanes),
      !(l & r.childLanes))
    )
      return null
    if (n !== null && r.child !== n.child) throw Error(y(153))
    if (r.child !== null) {
      for (
        n = r.child, l = el(n, n.pendingProps), r.child = l, l.return = r;
        n.sibling !== null;

      )
        (n = n.sibling), (l = l.sibling = el(n, n.pendingProps)), (l.return = r)
      l.sibling = null
    }
    return r.child
  }
  function di(n, r, l) {
    switch (r.tag) {
      case 3:
        Vv(r), qt()
        break
      case 5:
        Oe(r)
        break
      case 1:
        Wt(r.type) && Ps(r)
        break
      case 4:
        ad(r, r.stateNode.containerInfo)
        break
      case 10:
        var o = r.type._context,
          c = r.memoizedProps.value
        Et(Ba, o._currentValue), (o._currentValue = c)
        break
      case 13:
        if (((o = r.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (Et(je, je.current & 1), (r.flags |= 128), null)
            : l & r.child.childLanes
            ? dd(n, r, l)
            : (Et(je, je.current & 1),
              (n = Vn(n, r, l)),
              n !== null ? n.sibling : null)
        Et(je, je.current & 1)
        break
      case 19:
        if (((o = (l & r.childLanes) !== 0), n.flags & 128)) {
          if (o) return hd(n, r, l)
          r.flags |= 128
        }
        if (
          ((c = r.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Et(je, je.current),
          o)
        )
          break
        return null
      case 22:
      case 23:
        return (r.lanes = 0), Ol(n, r, l)
    }
    return Vn(n, r, l)
  }
  var Vo, jl, sa, Cn
  ;(Vo = function (n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode)
      else if (l.tag !== 4 && l.child !== null) {
        ;(l.child.return = l), (l = l.child)
        continue
      }
      if (l === r) break
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return
        l = l.return
      }
      ;(l.sibling.return = l.return), (l = l.sibling)
    }
  }),
    (jl = function () {}),
    (sa = function (n, r, l, o) {
      var c = n.memoizedProps
      if (c !== o) {
        ;(n = r.stateNode), kl(Ma.current)
        var d = null
        switch (l) {
          case 'input':
            ;(c = bn(n, c)), (o = bn(n, o)), (d = [])
            break
          case 'select':
            ;(c = le({}, c, { value: void 0 })),
              (o = le({}, o, { value: void 0 })),
              (d = [])
            break
          case 'textarea':
            ;(c = Ca(n, c)), (o = Ca(n, o)), (d = [])
            break
          default:
            typeof c.onClick != 'function' &&
              typeof o.onClick == 'function' &&
              (n.onclick = Bs)
        }
        kn(l, o)
        var h
        l = null
        for (F in c)
          if (!o.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null)
            if (F === 'style') {
              var C = c[F]
              for (h in C) C.hasOwnProperty(h) && (l || (l = {}), (l[h] = ''))
            } else
              F !== 'dangerouslySetInnerHTML' &&
                F !== 'children' &&
                F !== 'suppressContentEditableWarning' &&
                F !== 'suppressHydrationWarning' &&
                F !== 'autoFocus' &&
                (x.hasOwnProperty(F)
                  ? d || (d = [])
                  : (d = d || []).push(F, null))
        for (F in o) {
          var R = o[F]
          if (
            ((C = c != null ? c[F] : void 0),
            o.hasOwnProperty(F) && R !== C && (R != null || C != null))
          )
            if (F === 'style')
              if (C) {
                for (h in C)
                  !C.hasOwnProperty(h) ||
                    (R && R.hasOwnProperty(h)) ||
                    (l || (l = {}), (l[h] = ''))
                for (h in R)
                  R.hasOwnProperty(h) &&
                    C[h] !== R[h] &&
                    (l || (l = {}), (l[h] = R[h]))
              } else l || (d || (d = []), d.push(F, l)), (l = R)
            else
              F === 'dangerouslySetInnerHTML'
                ? ((R = R ? R.__html : void 0),
                  (C = C ? C.__html : void 0),
                  R != null && C !== R && (d = d || []).push(F, R))
                : F === 'children'
                ? (typeof R != 'string' && typeof R != 'number') ||
                  (d = d || []).push(F, '' + R)
                : F !== 'suppressContentEditableWarning' &&
                  F !== 'suppressHydrationWarning' &&
                  (x.hasOwnProperty(F)
                    ? (R != null && F === 'onScroll' && Nt('scroll', n),
                      d || C === R || (d = []))
                    : (d = d || []).push(F, R))
        }
        l && (d = d || []).push('style', l)
        var F = d
        ;(r.updateQueue = F) && (r.flags |= 4)
      }
    }),
    (Cn = function (n, r, l, o) {
      l !== o && (r.flags |= 4)
    })
  function Bo(n, r) {
    if (!Vt)
      switch (n.tailMode) {
        case 'hidden':
          r = n.tail
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), (r = r.sibling)
          l === null ? (n.tail = null) : (l.sibling = null)
          break
        case 'collapsed':
          l = n.tail
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), (l = l.sibling)
          o === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (o.sibling = null)
      }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      l = 0,
      o = 0
    if (r)
      for (var c = n.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 14680064),
          (o |= c.flags & 14680064),
          (c.return = n),
          (c = c.sibling)
    else
      for (c = n.child; c !== null; )
        (l |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = n),
          (c = c.sibling)
    return (n.subtreeFlags |= o), (n.childLanes = l), r
  }
  function dy(n, r, l) {
    var o = r.pendingProps
    switch ((Xf(r), r.tag)) {
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
        return er(r), null
      case 1:
        return Wt(r.type) && aa(), er(r), null
      case 3:
        return (
          (o = r.stateNode),
          Wi(),
          xt(tn),
          xt(Ye),
          Js(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (n === null || n.child === null) &&
            (Qs(r)
              ? (r.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), la !== null && (Go(la), (la = null)))),
          jl(n, r),
          er(r),
          null
        )
      case 5:
        it(r)
        var c = kl(wu.current)
        if (((l = r.type), n !== null && r.stateNode != null))
          sa(n, r, l, o, c),
            n.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152))
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(y(166))
            return er(r), null
          }
          if (((n = kl(Ma.current)), Qs(r))) {
            ;(o = r.stateNode), (l = r.type)
            var d = r.memoizedProps
            switch (((o[Fa] = r), (o[Rl] = d), (n = (r.mode & 1) !== 0), l)) {
              case 'dialog':
                Nt('cancel', o), Nt('close', o)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Nt('load', o)
                break
              case 'video':
              case 'audio':
                for (c = 0; c < Ro.length; c++) Nt(Ro[c], o)
                break
              case 'source':
                Nt('error', o)
                break
              case 'img':
              case 'image':
              case 'link':
                Nt('error', o), Nt('load', o)
                break
              case 'details':
                Nt('toggle', o)
                break
              case 'input':
                yn(o, d), Nt('invalid', o)
                break
              case 'select':
                ;(o._wrapperState = { wasMultiple: !!d.multiple }),
                  Nt('invalid', o)
                break
              case 'textarea':
                zr(o, d), Nt('invalid', o)
            }
            kn(l, d), (c = null)
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var C = d[h]
                h === 'children'
                  ? typeof C == 'string'
                    ? o.textContent !== C &&
                      (d.suppressHydrationWarning !== !0 &&
                        Vs(o.textContent, C, n),
                      (c = ['children', C]))
                    : typeof C == 'number' &&
                      o.textContent !== '' + C &&
                      (d.suppressHydrationWarning !== !0 &&
                        Vs(o.textContent, C, n),
                      (c = ['children', '' + C]))
                  : x.hasOwnProperty(h) &&
                    C != null &&
                    h === 'onScroll' &&
                    Nt('scroll', o)
              }
            switch (l) {
              case 'input':
                Xn(o), Kr(o, d, !0)
                break
              case 'textarea':
                Xn(o), Ur(o)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof d.onClick == 'function' && (o.onclick = Bs)
            }
            ;(o = c), (r.updateQueue = o), o !== null && (r.flags |= 4)
          } else {
            ;(h = c.nodeType === 9 ? c : c.ownerDocument),
              n === 'http://www.w3.org/1999/xhtml' && (n = Ea(l)),
              n === 'http://www.w3.org/1999/xhtml'
                ? l === 'script'
                  ? ((n = h.createElement('div')),
                    (n.innerHTML = '<script></script>'),
                    (n = n.removeChild(n.firstChild)))
                  : typeof o.is == 'string'
                  ? (n = h.createElement(l, { is: o.is }))
                  : ((n = h.createElement(l)),
                    l === 'select' &&
                      ((h = n),
                      o.multiple
                        ? (h.multiple = !0)
                        : o.size && (h.size = o.size)))
                : (n = h.createElementNS(n, l)),
              (n[Fa] = r),
              (n[Rl] = o),
              Vo(n, r, !1, !1),
              (r.stateNode = n)
            e: {
              switch (((h = an(l, o)), l)) {
                case 'dialog':
                  Nt('cancel', n), Nt('close', n), (c = o)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  Nt('load', n), (c = o)
                  break
                case 'video':
                case 'audio':
                  for (c = 0; c < Ro.length; c++) Nt(Ro[c], n)
                  c = o
                  break
                case 'source':
                  Nt('error', n), (c = o)
                  break
                case 'img':
                case 'image':
                case 'link':
                  Nt('error', n), Nt('load', n), (c = o)
                  break
                case 'details':
                  Nt('toggle', n), (c = o)
                  break
                case 'input':
                  yn(n, o), (c = bn(n, o)), Nt('invalid', n)
                  break
                case 'option':
                  c = o
                  break
                case 'select':
                  ;(n._wrapperState = { wasMultiple: !!o.multiple }),
                    (c = le({}, o, { value: void 0 })),
                    Nt('invalid', n)
                  break
                case 'textarea':
                  zr(n, o), (c = Ca(n, o)), Nt('invalid', n)
                  break
                default:
                  c = o
              }
              kn(l, c), (C = c)
              for (d in C)
                if (C.hasOwnProperty(d)) {
                  var R = C[d]
                  d === 'style'
                    ? Rt(n, R)
                    : d === 'dangerouslySetInnerHTML'
                    ? ((R = R ? R.__html : void 0), R != null && Di(n, R))
                    : d === 'children'
                    ? typeof R == 'string'
                      ? (l !== 'textarea' || R !== '') && wa(n, R)
                      : typeof R == 'number' && wa(n, '' + R)
                    : d !== 'suppressContentEditableWarning' &&
                      d !== 'suppressHydrationWarning' &&
                      d !== 'autoFocus' &&
                      (x.hasOwnProperty(d)
                        ? R != null && d === 'onScroll' && Nt('scroll', n)
                        : R != null && ce(n, d, R, h))
                }
              switch (l) {
                case 'input':
                  Xn(n), Kr(n, o, !1)
                  break
                case 'textarea':
                  Xn(n), Ur(n)
                  break
                case 'option':
                  o.value != null && n.setAttribute('value', '' + mn(o.value))
                  break
                case 'select':
                  ;(n.multiple = !!o.multiple),
                    (d = o.value),
                    d != null
                      ? Aa(n, !!o.multiple, d, !1)
                      : o.defaultValue != null &&
                        Aa(n, !!o.multiple, o.defaultValue, !0)
                  break
                default:
                  typeof c.onClick == 'function' && (n.onclick = Bs)
              }
              switch (l) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  o = !!o.autoFocus
                  break e
                case 'img':
                  o = !0
                  break e
                default:
                  o = !1
              }
            }
            o && (r.flags |= 4)
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152))
        }
        return er(r), null
      case 6:
        if (n && r.stateNode != null) Cn(n, r, n.memoizedProps, o)
        else {
          if (typeof o != 'string' && r.stateNode === null) throw Error(y(166))
          if (((l = kl(wu.current)), kl(Ma.current), Qs(r))) {
            if (
              ((o = r.stateNode),
              (l = r.memoizedProps),
              (o[Fa] = r),
              (d = o.nodeValue !== l) && ((n = Br), n !== null))
            )
              switch (n.tag) {
                case 3:
                  Vs(o.nodeValue, l, (n.mode & 1) !== 0)
                  break
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    Vs(o.nodeValue, l, (n.mode & 1) !== 0)
              }
            d && (r.flags |= 4)
          } else
            (o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o)),
              (o[Fa] = r),
              (r.stateNode = o)
        }
        return er(r), null
      case 13:
        if (
          (xt(je),
          (o = r.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (Vt && Rr !== null && r.mode & 1 && !(r.flags & 128))
            kv(), qt(), (r.flags |= 98560), (d = !1)
          else if (((d = Qs(r)), o !== null && o.dehydrated !== null)) {
            if (n === null) {
              if (!d) throw Error(y(318))
              if (
                ((d = r.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(y(317))
              d[Fa] = r
            } else
              qt(), !(r.flags & 128) && (r.memoizedState = null), (r.flags |= 4)
            er(r), (d = !1)
          } else la !== null && (Go(la), (la = null)), (d = !0)
          if (!d) return r.flags & 65536 ? r : null
        }
        return r.flags & 128
          ? ((r.lanes = l), r)
          : ((o = o !== null),
            o !== (n !== null && n.memoizedState !== null) &&
              o &&
              ((r.child.flags |= 8192),
              r.mode & 1 &&
                (n === null || je.current & 1 ? wn === 0 && (wn = 3) : Td())),
            r.updateQueue !== null && (r.flags |= 4),
            er(r),
            null)
      case 4:
        return (
          Wi(),
          jl(n, r),
          n === null && gu(r.stateNode.containerInfo),
          er(r),
          null
        )
      case 10:
        return Yi(r.type._context), er(r), null
      case 17:
        return Wt(r.type) && aa(), er(r), null
      case 19:
        if ((xt(je), (d = r.memoizedState), d === null)) return er(r), null
        if (((o = (r.flags & 128) !== 0), (h = d.rendering), h === null))
          if (o) Bo(d, !1)
          else {
            if (wn !== 0 || (n !== null && n.flags & 128))
              for (n = r.child; n !== null; ) {
                if (((h = Kt(n)), h !== null)) {
                  for (
                    r.flags |= 128,
                      Bo(d, !1),
                      o = h.updateQueue,
                      o !== null && ((r.updateQueue = o), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      o = l,
                      l = r.child;
                    l !== null;

                  )
                    (d = l),
                      (n = o),
                      (d.flags &= 14680066),
                      (h = d.alternate),
                      h === null
                        ? ((d.childLanes = 0),
                          (d.lanes = n),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = h.childLanes),
                          (d.lanes = h.lanes),
                          (d.child = h.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = h.memoizedProps),
                          (d.memoizedState = h.memoizedState),
                          (d.updateQueue = h.updateQueue),
                          (d.type = h.type),
                          (n = h.dependencies),
                          (d.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (l = l.sibling)
                  return Et(je, (je.current & 1) | 2), r.child
                }
                n = n.sibling
              }
            d.tail !== null &&
              yt() > Au &&
              ((r.flags |= 128), (o = !0), Bo(d, !1), (r.lanes = 4194304))
          }
        else {
          if (!o)
            if (((n = Kt(h)), n !== null)) {
              if (
                ((r.flags |= 128),
                (o = !0),
                (l = n.updateQueue),
                l !== null && ((r.updateQueue = l), (r.flags |= 4)),
                Bo(d, !0),
                d.tail === null &&
                  d.tailMode === 'hidden' &&
                  !h.alternate &&
                  !Vt)
              )
                return er(r), null
            } else
              2 * yt() - d.renderingStartTime > Au &&
                l !== 1073741824 &&
                ((r.flags |= 128), (o = !0), Bo(d, !1), (r.lanes = 4194304))
          d.isBackwards
            ? ((h.sibling = r.child), (r.child = h))
            : ((l = d.last),
              l !== null ? (l.sibling = h) : (r.child = h),
              (d.last = h))
        }
        return d.tail !== null
          ? ((r = d.tail),
            (d.rendering = r),
            (d.tail = r.sibling),
            (d.renderingStartTime = yt()),
            (r.sibling = null),
            (l = je.current),
            Et(je, o ? (l & 1) | 2 : l & 1),
            r)
          : (er(r), null)
      case 22:
      case 23:
        return (
          Rd(),
          (o = r.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== o && (r.flags |= 8192),
          o && r.mode & 1
            ? $r & 1073741824 &&
              (er(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : er(r),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(y(156, r.tag))
  }
  function md(n, r) {
    switch ((Xf(r), r.tag)) {
      case 1:
        return (
          Wt(r.type) && aa(),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        )
      case 3:
        return (
          Wi(),
          xt(tn),
          xt(Ye),
          Js(),
          (n = r.flags),
          n & 65536 && !(n & 128) ? ((r.flags = (n & -65537) | 128), r) : null
        )
      case 5:
        return it(r), null
      case 13:
        if (
          (xt(je), (n = r.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(y(340))
          qt()
        }
        return (
          (n = r.flags), n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        )
      case 19:
        return xt(je), null
      case 4:
        return Wi(), null
      case 10:
        return Yi(r.type._context), null
      case 22:
      case 23:
        return Rd(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var Po = !1,
    En = !1,
    Bv = typeof WeakSet == 'function' ? WeakSet : Set,
    ye = null
  function Lu(n, r) {
    var l = n.ref
    if (l !== null)
      if (typeof l == 'function')
        try {
          l(null)
        } catch (o) {
          rn(n, r, o)
        }
      else l.current = null
  }
  function Yo(n, r, l) {
    try {
      l()
    } catch (o) {
      rn(n, r, o)
    }
  }
  var Pv = !1
  function Yv(n, r) {
    if (((Bf = yl), (n = Os()), ai(n))) {
      if ('selectionStart' in n)
        var l = { start: n.selectionStart, end: n.selectionEnd }
      else
        e: {
          l = ((l = n.ownerDocument) && l.defaultView) || window
          var o = l.getSelection && l.getSelection()
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode
            var c = o.anchorOffset,
              d = o.focusNode
            o = o.focusOffset
            try {
              l.nodeType, d.nodeType
            } catch {
              l = null
              break e
            }
            var h = 0,
              C = -1,
              R = -1,
              F = 0,
              X = 0,
              Z = n,
              G = null
            t: for (;;) {
              for (
                var pe;
                Z !== l || (c !== 0 && Z.nodeType !== 3) || (C = h + c),
                  Z !== d || (o !== 0 && Z.nodeType !== 3) || (R = h + o),
                  Z.nodeType === 3 && (h += Z.nodeValue.length),
                  (pe = Z.firstChild) !== null;

              )
                (G = Z), (Z = pe)
              for (;;) {
                if (Z === n) break t
                if (
                  (G === l && ++F === c && (C = h),
                  G === d && ++X === o && (R = h),
                  (pe = Z.nextSibling) !== null)
                )
                  break
                ;(Z = G), (G = Z.parentNode)
              }
              Z = pe
            }
            l = C === -1 || R === -1 ? null : { start: C, end: R }
          } else l = null
        }
      l = l || { start: 0, end: 0 }
    } else l = null
    for (
      El = { focusedElem: n, selectionRange: l }, yl = !1, ye = r;
      ye !== null;

    )
      if (
        ((r = ye), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null)
      )
        (n.return = r), (ye = n)
      else
        for (; ye !== null; ) {
          r = ye
          try {
            var Se = r.alternate
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (Se !== null) {
                    var Te = Se.memoizedProps,
                      un = Se.memoizedState,
                      L = r.stateNode,
                      b = L.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? Te : Pr(r.type, Te),
                        un
                      )
                    L.__reactInternalSnapshotBeforeUpdate = b
                  }
                  break
                case 3:
                  var U = r.stateNode.containerInfo
                  U.nodeType === 1
                    ? (U.textContent = '')
                    : U.nodeType === 9 &&
                      U.documentElement &&
                      U.removeChild(U.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(y(163))
              }
          } catch (ne) {
            rn(r, r.return, ne)
          }
          if (((n = r.sibling), n !== null)) {
            ;(n.return = r.return), (ye = n)
            break
          }
          ye = r.return
        }
    return (Se = Pv), (Pv = !1), Se
  }
  function $o(n, r, l) {
    var o = r.updateQueue
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var c = (o = o.next)
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy
          ;(c.destroy = void 0), d !== void 0 && Yo(r, l, d)
        }
        c = c.next
      } while (c !== o)
    }
  }
  function Io(n, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var l = (r = r.next)
      do {
        if ((l.tag & n) === n) {
          var o = l.create
          l.destroy = o()
        }
        l = l.next
      } while (l !== r)
    }
  }
  function yd(n) {
    var r = n.ref
    if (r !== null) {
      var l = n.stateNode
      switch (n.tag) {
        case 5:
          n = l
          break
        default:
          n = l
      }
      typeof r == 'function' ? r(n) : (r.current = n)
    }
  }
  function gd(n) {
    var r = n.alternate
    r !== null && ((n.alternate = null), gd(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((r = n.stateNode),
        r !== null &&
          (delete r[Fa],
          delete r[Rl],
          delete r[$f],
          delete r[iy],
          delete r[If])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null)
  }
  function $v(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4
  }
  function Cc(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || $v(n.return)) return null
        n = n.return
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e
        ;(n.child.return = n), (n = n.child)
      }
      if (!(n.flags & 2)) return n.stateNode
    }
  }
  function Mu(n, r, l) {
    var o = n.tag
    if (o === 5 || o === 6)
      (n = n.stateNode),
        r
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(n, r)
            : l.insertBefore(n, r)
          : (l.nodeType === 8
              ? ((r = l.parentNode), r.insertBefore(n, l))
              : ((r = l), r.appendChild(n)),
            (l = l._reactRootContainer),
            l != null || r.onclick !== null || (r.onclick = Bs))
    else if (o !== 4 && ((n = n.child), n !== null))
      for (Mu(n, r, l), n = n.sibling; n !== null; )
        Mu(n, r, l), (n = n.sibling)
  }
  function Ya(n, r, l) {
    var o = n.tag
    if (o === 5 || o === 6)
      (n = n.stateNode), r ? l.insertBefore(n, r) : l.appendChild(n)
    else if (o !== 4 && ((n = n.child), n !== null))
      for (Ya(n, r, l), n = n.sibling; n !== null; )
        Ya(n, r, l), (n = n.sibling)
  }
  var Gt = null,
    zn = !1
  function ca(n, r, l) {
    for (l = l.child; l !== null; ) Nu(n, r, l), (l = l.sibling)
  }
  function Nu(n, r, l) {
    if (Ta && typeof Ta.onCommitFiberUnmount == 'function')
      try {
        Ta.onCommitFiberUnmount(uo, l)
      } catch {}
    switch (l.tag) {
      case 5:
        En || Lu(l, r)
      case 6:
        var o = Gt,
          c = zn
        ;(Gt = null),
          ca(n, r, l),
          (Gt = o),
          (zn = c),
          Gt !== null &&
            (zn
              ? ((n = Gt),
                (l = l.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(l)
                  : n.removeChild(l))
              : Gt.removeChild(l.stateNode))
        break
      case 18:
        Gt !== null &&
          (zn
            ? ((n = Gt),
              (l = l.stateNode),
              n.nodeType === 8
                ? ji(n.parentNode, l)
                : n.nodeType === 1 && ji(n, l),
              po(n))
            : ji(Gt, l.stateNode))
        break
      case 4:
        ;(o = Gt),
          (c = zn),
          (Gt = l.stateNode.containerInfo),
          (zn = !0),
          ca(n, r, l),
          (Gt = o),
          (zn = c)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !En &&
          ((o = l.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          c = o = o.next
          do {
            var d = c,
              h = d.destroy
            ;(d = d.tag),
              h !== void 0 && (d & 2 || d & 4) && Yo(l, r, h),
              (c = c.next)
          } while (c !== o)
        }
        ca(n, r, l)
        break
      case 1:
        if (
          !En &&
          (Lu(l, r),
          (o = l.stateNode),
          typeof o.componentWillUnmount == 'function')
        )
          try {
            ;(o.props = l.memoizedProps),
              (o.state = l.memoizedState),
              o.componentWillUnmount()
          } catch (C) {
            rn(l, r, C)
          }
        ca(n, r, l)
        break
      case 21:
        ca(n, r, l)
        break
      case 22:
        l.mode & 1
          ? ((En = (o = En) || l.memoizedState !== null), ca(n, r, l), (En = o))
          : ca(n, r, l)
        break
      default:
        ca(n, r, l)
    }
  }
  function pi(n) {
    var r = n.updateQueue
    if (r !== null) {
      n.updateQueue = null
      var l = n.stateNode
      l === null && (l = n.stateNode = new Bv()),
        r.forEach(function (o) {
          var c = gy.bind(null, n, o)
          l.has(o) || (l.add(o), o.then(c, c))
        })
    }
  }
  function Na(n, r) {
    var l = r.deletions
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o]
        try {
          var d = n,
            h = r,
            C = h
          e: for (; C !== null; ) {
            switch (C.tag) {
              case 5:
                ;(Gt = C.stateNode), (zn = !1)
                break e
              case 3:
                ;(Gt = C.stateNode.containerInfo), (zn = !0)
                break e
              case 4:
                ;(Gt = C.stateNode.containerInfo), (zn = !0)
                break e
            }
            C = C.return
          }
          if (Gt === null) throw Error(y(160))
          Nu(d, h, c), (Gt = null), (zn = !1)
          var R = c.alternate
          R !== null && (R.return = null), (c.return = null)
        } catch (F) {
          rn(c, r, F)
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) Iv(r, n), (r = r.sibling)
  }
  function Iv(n, r) {
    var l = n.alternate,
      o = n.flags
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Na(r, n), $a(n), o & 4)) {
          try {
            $o(3, n, n.return), Io(3, n)
          } catch (Te) {
            rn(n, n.return, Te)
          }
          try {
            $o(5, n, n.return)
          } catch (Te) {
            rn(n, n.return, Te)
          }
        }
        break
      case 1:
        Na(r, n), $a(n), o & 512 && l !== null && Lu(l, l.return)
        break
      case 5:
        if (
          (Na(r, n),
          $a(n),
          o & 512 && l !== null && Lu(l, l.return),
          n.flags & 32)
        ) {
          var c = n.stateNode
          try {
            wa(c, '')
          } catch (Te) {
            rn(n, n.return, Te)
          }
        }
        if (o & 4 && ((c = n.stateNode), c != null)) {
          var d = n.memoizedProps,
            h = l !== null ? l.memoizedProps : d,
            C = n.type,
            R = n.updateQueue
          if (((n.updateQueue = null), R !== null))
            try {
              C === 'input' && d.type === 'radio' && d.name != null && Ht(c, d),
                an(C, h)
              var F = an(C, d)
              for (h = 0; h < R.length; h += 2) {
                var X = R[h],
                  Z = R[h + 1]
                X === 'style'
                  ? Rt(c, Z)
                  : X === 'dangerouslySetInnerHTML'
                  ? Di(c, Z)
                  : X === 'children'
                  ? wa(c, Z)
                  : ce(c, X, Z, F)
              }
              switch (C) {
                case 'input':
                  qn(c, d)
                  break
                case 'textarea':
                  ja(c, d)
                  break
                case 'select':
                  var G = c._wrapperState.wasMultiple
                  c._wrapperState.wasMultiple = !!d.multiple
                  var pe = d.value
                  pe != null
                    ? Aa(c, !!d.multiple, pe, !1)
                    : G !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Aa(c, !!d.multiple, d.defaultValue, !0)
                        : Aa(c, !!d.multiple, d.multiple ? [] : '', !1))
              }
              c[Rl] = d
            } catch (Te) {
              rn(n, n.return, Te)
            }
        }
        break
      case 6:
        if ((Na(r, n), $a(n), o & 4)) {
          if (n.stateNode === null) throw Error(y(162))
          ;(c = n.stateNode), (d = n.memoizedProps)
          try {
            c.nodeValue = d
          } catch (Te) {
            rn(n, n.return, Te)
          }
        }
        break
      case 3:
        if (
          (Na(r, n), $a(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            po(r.containerInfo)
          } catch (Te) {
            rn(n, n.return, Te)
          }
        break
      case 4:
        Na(r, n), $a(n)
        break
      case 13:
        Na(r, n),
          $a(n),
          (c = n.child),
          c.flags & 8192 &&
            ((d = c.memoizedState !== null),
            (c.stateNode.isHidden = d),
            !d ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (Cd = yt())),
          o & 4 && pi(n)
        break
      case 22:
        if (
          ((X = l !== null && l.memoizedState !== null),
          n.mode & 1 ? ((En = (F = En) || X), Na(r, n), (En = F)) : Na(r, n),
          $a(n),
          o & 8192)
        ) {
          if (
            ((F = n.memoizedState !== null),
            (n.stateNode.isHidden = F) && !X && n.mode & 1)
          )
            for (ye = n, X = n.child; X !== null; ) {
              for (Z = ye = X; ye !== null; ) {
                switch (((G = ye), (pe = G.child), G.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $o(4, G, G.return)
                    break
                  case 1:
                    Lu(G, G.return)
                    var Se = G.stateNode
                    if (typeof Se.componentWillUnmount == 'function') {
                      ;(o = G), (l = G.return)
                      try {
                        ;(r = o),
                          (Se.props = r.memoizedProps),
                          (Se.state = r.memoizedState),
                          Se.componentWillUnmount()
                      } catch (Te) {
                        rn(o, l, Te)
                      }
                    }
                    break
                  case 5:
                    Lu(G, G.return)
                    break
                  case 22:
                    if (G.memoizedState !== null) {
                      Sd(Z)
                      continue
                    }
                }
                pe !== null ? ((pe.return = G), (ye = pe)) : Sd(Z)
              }
              X = X.sibling
            }
          e: for (X = null, Z = n; ; ) {
            if (Z.tag === 5) {
              if (X === null) {
                X = Z
                try {
                  ;(c = Z.stateNode),
                    F
                      ? ((d = c.style),
                        typeof d.setProperty == 'function'
                          ? d.setProperty('display', 'none', 'important')
                          : (d.display = 'none'))
                      : ((C = Z.stateNode),
                        (R = Z.memoizedProps.style),
                        (h =
                          R != null && R.hasOwnProperty('display')
                            ? R.display
                            : null),
                        (C.style.display = at('display', h)))
                } catch (Te) {
                  rn(n, n.return, Te)
                }
              }
            } else if (Z.tag === 6) {
              if (X === null)
                try {
                  Z.stateNode.nodeValue = F ? '' : Z.memoizedProps
                } catch (Te) {
                  rn(n, n.return, Te)
                }
            } else if (
              ((Z.tag !== 22 && Z.tag !== 23) ||
                Z.memoizedState === null ||
                Z === n) &&
              Z.child !== null
            ) {
              ;(Z.child.return = Z), (Z = Z.child)
              continue
            }
            if (Z === n) break e
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === n) break e
              X === Z && (X = null), (Z = Z.return)
            }
            X === Z && (X = null),
              (Z.sibling.return = Z.return),
              (Z = Z.sibling)
          }
        }
        break
      case 19:
        Na(r, n), $a(n), o & 4 && pi(n)
        break
      case 21:
        break
      default:
        Na(r, n), $a(n)
    }
  }
  function $a(n) {
    var r = n.flags
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if ($v(l)) {
              var o = l
              break e
            }
            l = l.return
          }
          throw Error(y(160))
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode
            o.flags & 32 && (wa(c, ''), (o.flags &= -33))
            var d = Cc(n)
            Ya(n, d, c)
            break
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              C = Cc(n)
            Mu(n, C, h)
            break
          default:
            throw Error(y(161))
        }
      } catch (R) {
        rn(n, n.return, R)
      }
      n.flags &= -3
    }
    r & 4096 && (n.flags &= -4097)
  }
  function Qv(n, r, l) {
    ;(ye = n), zu(n)
  }
  function zu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ye !== null; ) {
      var c = ye,
        d = c.child
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Po
        if (!h) {
          var C = c.alternate,
            R = (C !== null && C.memoizedState !== null) || En
          C = Po
          var F = En
          if (((Po = h), (En = R) && !F))
            for (ye = c; ye !== null; )
              (h = ye),
                (R = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Gv(c)
                  : R !== null
                  ? ((R.return = h), (ye = R))
                  : Gv(c)
          for (; d !== null; ) (ye = d), zu(d), (d = d.sibling)
          ;(ye = c), (Po = C), (En = F)
        }
        Wv(n)
      } else
        c.subtreeFlags & 8772 && d !== null ? ((d.return = c), (ye = d)) : Wv(n)
    }
  }
  function Wv(n) {
    for (; ye !== null; ) {
      var r = ye
      if (r.flags & 8772) {
        var l = r.alternate
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                En || Io(5, r)
                break
              case 1:
                var o = r.stateNode
                if (r.flags & 4 && !En)
                  if (l === null) o.componentDidMount()
                  else {
                    var c =
                      r.elementType === r.type
                        ? l.memoizedProps
                        : Pr(r.type, l.memoizedProps)
                    o.componentDidUpdate(
                      c,
                      l.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate
                    )
                  }
                var d = r.updateQueue
                d !== null && bl(r, d, o)
                break
              case 3:
                var h = r.updateQueue
                if (h !== null) {
                  if (((l = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode
                        break
                      case 1:
                        l = r.child.stateNode
                    }
                  bl(r, h, l)
                }
                break
              case 5:
                var C = r.stateNode
                if (l === null && r.flags & 4) {
                  l = C
                  var R = r.memoizedProps
                  switch (r.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      R.autoFocus && l.focus()
                      break
                    case 'img':
                      R.src && (l.src = R.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (r.memoizedState === null) {
                  var F = r.alternate
                  if (F !== null) {
                    var X = F.memoizedState
                    if (X !== null) {
                      var Z = X.dehydrated
                      Z !== null && po(Z)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(y(163))
            }
          En || (r.flags & 512 && yd(r))
        } catch (G) {
          rn(r, r.return, G)
        }
      }
      if (r === n) {
        ye = null
        break
      }
      if (((l = r.sibling), l !== null)) {
        ;(l.return = r.return), (ye = l)
        break
      }
      ye = r.return
    }
  }
  function Sd(n) {
    for (; ye !== null; ) {
      var r = ye
      if (r === n) {
        ye = null
        break
      }
      var l = r.sibling
      if (l !== null) {
        ;(l.return = r.return), (ye = l)
        break
      }
      ye = r.return
    }
  }
  function Gv(n) {
    for (; ye !== null; ) {
      var r = ye
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return
            try {
              Io(4, r)
            } catch (R) {
              rn(r, l, R)
            }
            break
          case 1:
            var o = r.stateNode
            if (typeof o.componentDidMount == 'function') {
              var c = r.return
              try {
                o.componentDidMount()
              } catch (R) {
                rn(r, c, R)
              }
            }
            var d = r.return
            try {
              yd(r)
            } catch (R) {
              rn(r, d, R)
            }
            break
          case 5:
            var h = r.return
            try {
              yd(r)
            } catch (R) {
              rn(r, h, R)
            }
        }
      } catch (R) {
        rn(r, r.return, R)
      }
      if (r === n) {
        ye = null
        break
      }
      var C = r.sibling
      if (C !== null) {
        ;(C.return = r.return), (ye = C)
        break
      }
      ye = r.return
    }
  }
  var Ec = Math.ceil,
    Qo = He.ReactCurrentDispatcher,
    xd = He.ReactCurrentOwner,
    tr = He.ReactCurrentBatchConfig,
    ot = 0,
    Zt = null,
    nn = null,
    Un = 0,
    $r = 0,
    Uu = qe(0),
    wn = 0,
    Wo = null,
    vi = 0,
    wc = 0,
    Ou = 0,
    Hl = null,
    ur = null,
    Cd = 0,
    Au = 1 / 0,
    hi = null,
    Rc = !1,
    Fl = null,
    Ia = null,
    Ki = !1,
    Zi = null,
    Tc = 0,
    ju = 0,
    bc = null,
    Vl = -1,
    Bl = 0
  function nr() {
    return ot & 6 ? yt() : Vl !== -1 ? Vl : (Vl = yt())
  }
  function vn(n) {
    return n.mode & 1
      ? ot & 2 && Un !== 0
        ? Un & -Un
        : Ws.transition !== null
        ? (Bl === 0 && (Bl = ws()), Bl)
        : ((n = Tt),
          n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : Cf(n.type))),
          n)
      : 1
  }
  function rr(n, r, l, o) {
    if (50 < ju) throw ((ju = 0), (bc = null), Error(y(185)))
    ml(n, l, o),
      (!(ot & 2) || n !== Zt) &&
        (n === Zt && (!(ot & 2) && (wc |= l), wn === 4 && fa(n, Un)),
        ar(n, o),
        l === 1 && ot === 0 && !(r.mode & 1) && ((Au = yt() + 500), Mn && Cr()))
  }
  function ar(n, r) {
    var l = n.callbackNode
    Es(n, r)
    var o = ba(n, n === Zt ? Un : 0)
    if (o === 0)
      l !== null && lr(l), (n.callbackNode = null), (n.callbackPriority = 0)
    else if (((r = o & -o), n.callbackPriority !== r)) {
      if ((l != null && lr(l), r === 1))
        n.tag === 0 ? Wf(Xv.bind(null, n)) : Qf(Xv.bind(null, n)),
          Yf(function () {
            !(ot & 6) && Cr()
          }),
          (l = null)
      else {
        switch (gf(o)) {
          case 1:
            l = ei
            break
          case 4:
            l = ut
            break
          case 16:
            l = Ni
            break
          case 536870912:
            l = vf
            break
          default:
            l = Ni
        }
        l = kd(l, Hu.bind(null, n))
      }
      ;(n.callbackPriority = r), (n.callbackNode = l)
    }
  }
  function Hu(n, r) {
    if (((Vl = -1), (Bl = 0), ot & 6)) throw Error(y(327))
    var l = n.callbackNode
    if (Vu() && n.callbackNode !== l) return null
    var o = ba(n, n === Zt ? Un : 0)
    if (o === 0) return null
    if (o & 30 || o & n.expiredLanes || r) r = Dc(n, o)
    else {
      r = o
      var c = ot
      ot |= 2
      var d = kc()
      ;(Zt !== n || Un !== r) && ((hi = null), (Au = yt() + 500), Pl(n, r))
      do
        try {
          vy()
          break
        } catch (C) {
          qv(n, C)
        }
      while (1)
      Jf(),
        (Qo.current = d),
        (ot = c),
        nn !== null ? (r = 0) : ((Zt = null), (Un = 0), (r = wn))
    }
    if (r !== 0) {
      if (
        (r === 2 && ((c = mf(n)), c !== 0 && ((o = c), (r = Ed(n, c)))),
        r === 1)
      )
        throw ((l = Wo), Pl(n, 0), fa(n, o), ar(n, yt()), l)
      if (r === 6) fa(n, o)
      else {
        if (
          ((c = n.current.alternate),
          !(o & 30) &&
            !wd(c) &&
            ((r = Dc(n, o)),
            r === 2 && ((d = mf(n)), d !== 0 && ((o = d), (r = Ed(n, d)))),
            r === 1))
        )
          throw ((l = Wo), Pl(n, 0), fa(n, o), ar(n, yt()), l)
        switch (((n.finishedWork = c), (n.finishedLanes = o), r)) {
          case 0:
          case 1:
            throw Error(y(345))
          case 2:
            Yl(n, ur, hi)
            break
          case 3:
            if (
              (fa(n, o),
              (o & 130023424) === o && ((r = Cd + 500 - yt()), 10 < r))
            ) {
              if (ba(n, 0) !== 0) break
              if (((c = n.suspendedLanes), (c & o) !== o)) {
                nr(), (n.pingedLanes |= n.suspendedLanes & c)
                break
              }
              n.timeoutHandle = wl(Yl.bind(null, n, ur, hi), r)
              break
            }
            Yl(n, ur, hi)
            break
          case 4:
            if ((fa(n, o), (o & 4194240) === o)) break
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Zr(o)
              ;(d = 1 << h), (h = r[h]), h > c && (c = h), (o &= ~d)
            }
            if (
              ((o = c),
              (o = yt() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                  ? 480
                  : 1080 > o
                  ? 1080
                  : 1920 > o
                  ? 1920
                  : 3e3 > o
                  ? 3e3
                  : 4320 > o
                  ? 4320
                  : 1960 * Ec(o / 1960)) - o),
              10 < o)
            ) {
              n.timeoutHandle = wl(Yl.bind(null, n, ur, hi), o)
              break
            }
            Yl(n, ur, hi)
            break
          case 5:
            Yl(n, ur, hi)
            break
          default:
            throw Error(y(329))
        }
      }
    }
    return ar(n, yt()), n.callbackNode === l ? Hu.bind(null, n) : null
  }
  function Ed(n, r) {
    var l = Hl
    return (
      n.current.memoizedState.isDehydrated && (Pl(n, r).flags |= 256),
      (n = Dc(n, r)),
      n !== 2 && ((r = ur), (ur = l), r !== null && Go(r)),
      n
    )
  }
  function Go(n) {
    ur === null ? (ur = n) : ur.push.apply(ur, n)
  }
  function wd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue
        if (l !== null && ((l = l.stores), l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o],
              d = c.getSnapshot
            c = c.value
            try {
              if (!ta(d(), c)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((l = r.child), r.subtreeFlags & 16384 && l !== null))
        (l.return = r), (r = l)
      else {
        if (r === n) break
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0
          r = r.return
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
      }
    }
    return !0
  }
  function fa(n, r) {
    for (
      r &= ~Ou,
        r &= ~wc,
        n.suspendedLanes |= r,
        n.pingedLanes &= ~r,
        n = n.expirationTimes;
      0 < r;

    ) {
      var l = 31 - Zr(r),
        o = 1 << l
      ;(n[l] = -1), (r &= ~o)
    }
  }
  function Xv(n) {
    if (ot & 6) throw Error(y(327))
    Vu()
    var r = ba(n, 0)
    if (!(r & 1)) return ar(n, yt()), null
    var l = Dc(n, r)
    if (n.tag !== 0 && l === 2) {
      var o = mf(n)
      o !== 0 && ((r = o), (l = Ed(n, o)))
    }
    if (l === 1) throw ((l = Wo), Pl(n, 0), fa(n, r), ar(n, yt()), l)
    if (l === 6) throw Error(y(345))
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = r),
      Yl(n, ur, hi),
      ar(n, yt()),
      null
    )
  }
  function Fu(n, r) {
    var l = ot
    ot |= 1
    try {
      return n(r)
    } finally {
      ;(ot = l), ot === 0 && ((Au = yt() + 500), Mn && Cr())
    }
  }
  function Ji(n) {
    Zi !== null && Zi.tag === 0 && !(ot & 6) && Vu()
    var r = ot
    ot |= 1
    var l = tr.transition,
      o = Tt
    try {
      if (((tr.transition = null), (Tt = 1), n)) return n()
    } finally {
      ;(Tt = o), (tr.transition = l), (ot = r), !(ot & 6) && Cr()
    }
  }
  function Rd() {
    ;($r = Uu.current), xt(Uu)
  }
  function Pl(n, r) {
    ;(n.finishedWork = null), (n.finishedLanes = 0)
    var l = n.timeoutHandle
    if ((l !== -1 && ((n.timeoutHandle = -1), wv(l)), nn !== null))
      for (l = nn.return; l !== null; ) {
        var o = l
        switch ((Xf(o), o.tag)) {
          case 1:
            ;(o = o.type.childContextTypes), o != null && aa()
            break
          case 3:
            Wi(), xt(tn), xt(Ye), Js()
            break
          case 5:
            it(o)
            break
          case 4:
            Wi()
            break
          case 13:
            xt(je)
            break
          case 19:
            xt(je)
            break
          case 10:
            Yi(o.type._context)
            break
          case 22:
          case 23:
            Rd()
        }
        l = l.return
      }
    if (
      ((Zt = n),
      (nn = n = el(n.current, null)),
      (Un = $r = r),
      (wn = 0),
      (Wo = null),
      (Ou = wc = vi = 0),
      (ur = Hl = null),
      Fn !== null)
    ) {
      for (r = 0; r < Fn.length; r++)
        if (((l = Fn[r]), (o = l.interleaved), o !== null)) {
          l.interleaved = null
          var c = o.next,
            d = l.pending
          if (d !== null) {
            var h = d.next
            ;(d.next = c), (o.next = h)
          }
          l.pending = o
        }
      Fn = null
    }
    return n
  }
  function qv(n, r) {
    do {
      var l = nn
      try {
        if ((Jf(), (ec.current = mc), Fe)) {
          for (var o = Bt.memoizedState; o !== null; ) {
            var c = o.queue
            c !== null && (c.pending = null), (o = o.next)
          }
          Fe = !1
        }
        if (
          ((Dl = 0),
          (dt = I = Bt = null),
          (Pa = !1),
          (Yr = 0),
          (xd.current = null),
          l === null || l.return === null)
        ) {
          ;(wn = 1), (Wo = r), (nn = null)
          break
        }
        e: {
          var d = n,
            h = l.return,
            C = l,
            R = r
          if (
            ((r = Un),
            (C.flags |= 32768),
            R !== null && typeof R == 'object' && typeof R.then == 'function')
          ) {
            var F = R,
              X = C,
              Z = X.tag
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var G = X.alternate
              G
                ? ((X.updateQueue = G.updateQueue),
                  (X.memoizedState = G.memoizedState),
                  (X.lanes = G.lanes))
                : ((X.updateQueue = null), (X.memoizedState = null))
            }
            var pe = od(h)
            if (pe !== null) {
              ;(pe.flags &= -257),
                sd(pe, h, C, d, r),
                pe.mode & 1 && Hv(d, F, r),
                (r = pe),
                (R = F)
              var Se = r.updateQueue
              if (Se === null) {
                var Te = /* @__PURE__ */ new Set()
                Te.add(R), (r.updateQueue = Te)
              } else Se.add(R)
              break e
            } else {
              if (!(r & 1)) {
                Hv(d, F, r), Td()
                break e
              }
              R = Error(y(426))
            }
          } else if (Vt && C.mode & 1) {
            var un = od(h)
            if (un !== null) {
              !(un.flags & 65536) && (un.flags |= 256),
                sd(un, h, C, d, r),
                Kf(ku(R, C))
              break e
            }
          }
          ;(d = R = ku(R, C)),
            wn !== 4 && (wn = 2),
            Hl === null ? (Hl = [d]) : Hl.push(d),
            (d = h)
          do {
            switch (d.tag) {
              case 3:
                ;(d.flags |= 65536), (r &= -r), (d.lanes |= r)
                var L = jv(d, R, r)
                nd(d, L)
                break e
              case 1:
                C = R
                var b = d.type,
                  U = d.stateNode
                if (
                  !(d.flags & 128) &&
                  (typeof b.getDerivedStateFromError == 'function' ||
                    (U !== null &&
                      typeof U.componentDidCatch == 'function' &&
                      (Ia === null || !Ia.has(U))))
                ) {
                  ;(d.flags |= 65536), (r &= -r), (d.lanes |= r)
                  var ne = Fo(d, C, r)
                  nd(d, ne)
                  break e
                }
            }
            d = d.return
          } while (d !== null)
        }
        bd(l)
      } catch (be) {
        ;(r = be), nn === l && l !== null && (nn = l = l.return)
        continue
      }
      break
    } while (1)
  }
  function kc() {
    var n = Qo.current
    return (Qo.current = mc), n === null ? mc : n
  }
  function Td() {
    ;(wn === 0 || wn === 3 || wn === 2) && (wn = 4),
      Zt === null || (!(vi & 268435455) && !(wc & 268435455)) || fa(Zt, Un)
  }
  function Dc(n, r) {
    var l = ot
    ot |= 2
    var o = kc()
    ;(Zt !== n || Un !== r) && ((hi = null), Pl(n, r))
    do
      try {
        py()
        break
      } catch (c) {
        qv(n, c)
      }
    while (1)
    if ((Jf(), (ot = l), (Qo.current = o), nn !== null)) throw Error(y(261))
    return (Zt = null), (Un = 0), wn
  }
  function py() {
    for (; nn !== null; ) Kv(nn)
  }
  function vy() {
    for (; nn !== null && !Mi(); ) Kv(nn)
  }
  function Kv(n) {
    var r = Jv(n.alternate, n, $r)
    ;(n.memoizedProps = n.pendingProps),
      r === null ? bd(n) : (nn = r),
      (xd.current = null)
  }
  function bd(n) {
    var r = n
    do {
      var l = r.alternate
      if (((n = r.return), r.flags & 32768)) {
        if (((l = md(l, r)), l !== null)) {
          ;(l.flags &= 32767), (nn = l)
          return
        }
        if (n !== null)
          (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)
        else {
          ;(wn = 6), (nn = null)
          return
        }
      } else if (((l = dy(l, r, $r)), l !== null)) {
        nn = l
        return
      }
      if (((r = r.sibling), r !== null)) {
        nn = r
        return
      }
      nn = r = n
    } while (r !== null)
    wn === 0 && (wn = 5)
  }
  function Yl(n, r, l) {
    var o = Tt,
      c = tr.transition
    try {
      ;(tr.transition = null), (Tt = 1), hy(n, r, l, o)
    } finally {
      ;(tr.transition = c), (Tt = o)
    }
    return null
  }
  function hy(n, r, l, o) {
    do Vu()
    while (Zi !== null)
    if (ot & 6) throw Error(y(327))
    l = n.finishedWork
    var c = n.finishedLanes
    if (l === null) return null
    if (((n.finishedWork = null), (n.finishedLanes = 0), l === n.current))
      throw Error(y(177))
    ;(n.callbackNode = null), (n.callbackPriority = 0)
    var d = l.lanes | l.childLanes
    if (
      (Bm(n, d),
      n === Zt && ((nn = Zt = null), (Un = 0)),
      (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
        Ki ||
        ((Ki = !0),
        kd(Ni, function () {
          return Vu(), null
        })),
      (d = (l.flags & 15990) !== 0),
      l.subtreeFlags & 15990 || d)
    ) {
      ;(d = tr.transition), (tr.transition = null)
      var h = Tt
      Tt = 1
      var C = ot
      ;(ot |= 4),
        (xd.current = null),
        Yv(n, l),
        Iv(l, n),
        As(El),
        (yl = !!Bf),
        (El = Bf = null),
        (n.current = l),
        Qv(l),
        xs(),
        (ot = C),
        (Tt = h),
        (tr.transition = d)
    } else n.current = l
    if (
      (Ki && ((Ki = !1), (Zi = n), (Tc = c)),
      (d = n.pendingLanes),
      d === 0 && (Ia = null),
      jp(l.stateNode),
      ar(n, yt()),
      r !== null)
    )
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        (c = r[l]), o(c.value, { componentStack: c.stack, digest: c.digest })
    if (Rc) throw ((Rc = !1), (n = Fl), (Fl = null), n)
    return (
      Tc & 1 && n.tag !== 0 && Vu(),
      (d = n.pendingLanes),
      d & 1 ? (n === bc ? ju++ : ((ju = 0), (bc = n))) : (ju = 0),
      Cr(),
      null
    )
  }
  function Vu() {
    if (Zi !== null) {
      var n = gf(Tc),
        r = tr.transition,
        l = Tt
      try {
        if (((tr.transition = null), (Tt = 16 > n ? 16 : n), Zi === null))
          var o = !1
        else {
          if (((n = Zi), (Zi = null), (Tc = 0), ot & 6)) throw Error(y(331))
          var c = ot
          for (ot |= 4, ye = n.current; ye !== null; ) {
            var d = ye,
              h = d.child
            if (ye.flags & 16) {
              var C = d.deletions
              if (C !== null) {
                for (var R = 0; R < C.length; R++) {
                  var F = C[R]
                  for (ye = F; ye !== null; ) {
                    var X = ye
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $o(8, X, d)
                    }
                    var Z = X.child
                    if (Z !== null) (Z.return = X), (ye = Z)
                    else
                      for (; ye !== null; ) {
                        X = ye
                        var G = X.sibling,
                          pe = X.return
                        if ((gd(X), X === F)) {
                          ye = null
                          break
                        }
                        if (G !== null) {
                          ;(G.return = pe), (ye = G)
                          break
                        }
                        ye = pe
                      }
                  }
                }
                var Se = d.alternate
                if (Se !== null) {
                  var Te = Se.child
                  if (Te !== null) {
                    Se.child = null
                    do {
                      var un = Te.sibling
                      ;(Te.sibling = null), (Te = un)
                    } while (Te !== null)
                  }
                }
                ye = d
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) (h.return = d), (ye = h)
            else
              e: for (; ye !== null; ) {
                if (((d = ye), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $o(9, d, d.return)
                  }
                var L = d.sibling
                if (L !== null) {
                  ;(L.return = d.return), (ye = L)
                  break e
                }
                ye = d.return
              }
          }
          var b = n.current
          for (ye = b; ye !== null; ) {
            h = ye
            var U = h.child
            if (h.subtreeFlags & 2064 && U !== null) (U.return = h), (ye = U)
            else
              e: for (h = b; ye !== null; ) {
                if (((C = ye), C.flags & 2048))
                  try {
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Io(9, C)
                    }
                  } catch (be) {
                    rn(C, C.return, be)
                  }
                if (C === h) {
                  ye = null
                  break e
                }
                var ne = C.sibling
                if (ne !== null) {
                  ;(ne.return = C.return), (ye = ne)
                  break e
                }
                ye = C.return
              }
          }
          if (
            ((ot = c),
            Cr(),
            Ta && typeof Ta.onPostCommitFiberRoot == 'function')
          )
            try {
              Ta.onPostCommitFiberRoot(uo, n)
            } catch {}
          o = !0
        }
        return o
      } finally {
        ;(Tt = l), (tr.transition = r)
      }
    }
    return !1
  }
  function Zv(n, r, l) {
    ;(r = ku(l, r)),
      (r = jv(n, r, 1)),
      (n = Ii(n, r, 1)),
      (r = nr()),
      n !== null && (ml(n, 1, r), ar(n, r))
  }
  function rn(n, r, l) {
    if (n.tag === 3) Zv(n, n, l)
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Zv(r, n, l)
          break
        } else if (r.tag === 1) {
          var o = r.stateNode
          if (
            typeof r.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' &&
              (Ia === null || !Ia.has(o)))
          ) {
            ;(n = ku(l, n)),
              (n = Fo(r, n, 1)),
              (r = Ii(r, n, 1)),
              (n = nr()),
              r !== null && (ml(r, 1, n), ar(r, n))
            break
          }
        }
        r = r.return
      }
  }
  function my(n, r, l) {
    var o = n.pingCache
    o !== null && o.delete(r),
      (r = nr()),
      (n.pingedLanes |= n.suspendedLanes & l),
      Zt === n &&
        (Un & l) === l &&
        (wn === 4 || (wn === 3 && (Un & 130023424) === Un && 500 > yt() - Cd)
          ? Pl(n, 0)
          : (Ou |= l)),
      ar(n, r)
  }
  function _c(n, r) {
    r === 0 &&
      (n.mode & 1
        ? ((r = ou), (ou <<= 1), !(ou & 130023424) && (ou = 4194304))
        : (r = 1))
    var l = nr()
    ;(n = si(n, r)), n !== null && (ml(n, r, l), ar(n, l))
  }
  function yy(n) {
    var r = n.memoizedState,
      l = 0
    r !== null && (l = r.retryLane), _c(n, l)
  }
  function gy(n, r) {
    var l = 0
    switch (n.tag) {
      case 13:
        var o = n.stateNode,
          c = n.memoizedState
        c !== null && (l = c.retryLane)
        break
      case 19:
        o = n.stateNode
        break
      default:
        throw Error(y(314))
    }
    o !== null && o.delete(r), _c(n, l)
  }
  var Jv
  Jv = function (n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || tn.current) pn = !0
      else {
        if (!(n.lanes & l) && !(r.flags & 128)) return (pn = !1), di(n, r, l)
        pn = !!(n.flags & 131072)
      }
    else (pn = !1), Vt && r.flags & 1048576 && Gf(r, xu, r.index)
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var o = r.type
        Jn(n, r), (n = r.pendingProps)
        var c = ra(r, Ye.current)
        ae(r, l), (c = Gi(null, r, o, n, c, l))
        var d = Ml()
        return (
          (r.flags |= 1),
          typeof c == 'object' &&
          c !== null &&
          typeof c.render == 'function' &&
          c.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              Wt(o) ? ((d = !0), Ps(r)) : (d = !1),
              (r.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              td(r),
              (c.updater = qs),
              (r.stateNode = c),
              (c._reactInternals = r),
              Ks(r, o, n, l),
              (r = Fv(null, r, o, !0, d, l)))
            : ((r.tag = 0), Vt && d && Ys(r), xn(null, r, c, l), (r = r.child)),
          r
        )
      case 16:
        o = r.elementType
        e: {
          switch (
            (Jn(n, r),
            (n = r.pendingProps),
            (c = o._init),
            (o = c(o._payload)),
            (r.type = o),
            (c = r.tag = xy(o)),
            (n = Pr(o, n)),
            c)
          ) {
            case 0:
              r = Du(null, r, o, n, l)
              break e
            case 1:
              r = cd(null, r, o, n, l)
              break e
            case 11:
              r = qi(null, r, o, n, l)
              break e
            case 14:
              r = gc(null, r, o, Pr(o.type, n), l)
              break e
          }
          throw Error(y(306, o, ''))
        }
        return r
      case 0:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Pr(o, c)),
          Du(n, r, o, c, l)
        )
      case 1:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Pr(o, c)),
          cd(n, r, o, c, l)
        )
      case 3:
        e: {
          if ((Vv(r), n === null)) throw Error(y(387))
          ;(o = r.pendingProps),
            (d = r.memoizedState),
            (c = d.element),
            Sn(n, r),
            Qi(r, o, null, l)
          var h = r.memoizedState
          if (((o = h.element), d.isDehydrated))
            if (
              ((d = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (r.updateQueue.baseState = d),
              (r.memoizedState = d),
              r.flags & 256)
            ) {
              ;(c = ku(Error(y(423)), r)), (r = Sc(n, r, o, l, c))
              break e
            } else if (o !== c) {
              ;(c = ku(Error(y(424)), r)), (r = Sc(n, r, o, l, c))
              break e
            } else
              for (
                Rr = La(r.stateNode.containerInfo.firstChild),
                  Br = r,
                  Vt = !0,
                  la = null,
                  l = Ov(r, null, o, l),
                  r.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling)
          else {
            if ((qt(), o === c)) {
              r = Vn(n, r, l)
              break e
            }
            xn(n, r, o, l)
          }
          r = r.child
        }
        return r
      case 5:
        return (
          Oe(r),
          n === null && Is(r),
          (o = r.type),
          (c = r.pendingProps),
          (d = n !== null ? n.memoizedProps : null),
          (h = c.children),
          ko(o, c) ? (h = null) : d !== null && ko(o, d) && (r.flags |= 32),
          Ke(n, r),
          xn(n, r, h, l),
          r.child
        )
      case 6:
        return n === null && Is(r), null
      case 13:
        return dd(n, r, l)
      case 4:
        return (
          ad(r, r.stateNode.containerInfo),
          (o = r.pendingProps),
          n === null ? (r.child = Eu(r, null, o, l)) : xn(n, r, o, l),
          r.child
        )
      case 11:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Pr(o, c)),
          qi(n, r, o, c, l)
        )
      case 7:
        return xn(n, r, r.pendingProps, l), r.child
      case 8:
        return xn(n, r, r.pendingProps.children, l), r.child
      case 12:
        return xn(n, r, r.pendingProps.children, l), r.child
      case 10:
        e: {
          if (
            ((o = r.type._context),
            (c = r.pendingProps),
            (d = r.memoizedProps),
            (h = c.value),
            Et(Ba, o._currentValue),
            (o._currentValue = h),
            d !== null)
          )
            if (ta(d.value, h)) {
              if (d.children === c.children && !tn.current) {
                r = Vn(n, r, l)
                break e
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var C = d.dependencies
                if (C !== null) {
                  h = d.child
                  for (var R = C.firstContext; R !== null; ) {
                    if (R.context === o) {
                      if (d.tag === 1) {
                        ;(R = ci(-1, l & -l)), (R.tag = 2)
                        var F = d.updateQueue
                        if (F !== null) {
                          F = F.shared
                          var X = F.pending
                          X === null
                            ? (R.next = R)
                            : ((R.next = X.next), (X.next = R)),
                            (F.pending = R)
                        }
                      }
                      ;(d.lanes |= l),
                        (R = d.alternate),
                        R !== null && (R.lanes |= l),
                        Nn(d.return, l, r),
                        (C.lanes |= l)
                      break
                    }
                    R = R.next
                  }
                } else if (d.tag === 10) h = d.type === r.type ? null : d.child
                else if (d.tag === 18) {
                  if (((h = d.return), h === null)) throw Error(y(341))
                  ;(h.lanes |= l),
                    (C = h.alternate),
                    C !== null && (C.lanes |= l),
                    Nn(h, l, r),
                    (h = d.sibling)
                } else h = d.child
                if (h !== null) h.return = d
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null
                      break
                    }
                    if (((d = h.sibling), d !== null)) {
                      ;(d.return = h.return), (h = d)
                      break
                    }
                    h = h.return
                  }
                d = h
              }
          xn(n, r, c.children, l), (r = r.child)
        }
        return r
      case 9:
        return (
          (c = r.type),
          (o = r.pendingProps.children),
          ae(r, l),
          (c = ln(c)),
          (o = o(c)),
          (r.flags |= 1),
          xn(n, r, o, l),
          r.child
        )
      case 14:
        return (
          (o = r.type),
          (c = Pr(o, r.pendingProps)),
          (c = Pr(o.type, c)),
          gc(n, r, o, c, l)
        )
      case 15:
        return kr(n, r, r.type, r.pendingProps, l)
      case 17:
        return (
          (o = r.type),
          (c = r.pendingProps),
          (c = r.elementType === o ? c : Pr(o, c)),
          Jn(n, r),
          (r.tag = 1),
          Wt(o) ? ((n = !0), Ps(r)) : (n = !1),
          ae(r, l),
          Mv(r, o, c),
          Ks(r, o, c, l),
          Fv(null, r, o, !0, n, l)
        )
      case 19:
        return hd(n, r, l)
      case 22:
        return Ol(n, r, l)
    }
    throw Error(y(156, r.tag))
  }
  function kd(n, r) {
    return Qt(n, r)
  }
  function Sy(n, r, l, o) {
    ;(this.tag = n),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function da(n, r, l, o) {
    return new Sy(n, r, l, o)
  }
  function Dd(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent)
  }
  function xy(n) {
    if (typeof n == 'function') return Dd(n) ? 1 : 0
    if (n != null) {
      if (((n = n.$$typeof), n === At)) return 11
      if (n === Je) return 14
    }
    return 2
  }
  function el(n, r) {
    var l = n.alternate
    return (
      l === null
        ? ((l = da(n.tag, r, n.key, n.mode)),
          (l.elementType = n.elementType),
          (l.type = n.type),
          (l.stateNode = n.stateNode),
          (l.alternate = n),
          (n.alternate = l))
        : ((l.pendingProps = r),
          (l.type = n.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = n.flags & 14680064),
      (l.childLanes = n.childLanes),
      (l.lanes = n.lanes),
      (l.child = n.child),
      (l.memoizedProps = n.memoizedProps),
      (l.memoizedState = n.memoizedState),
      (l.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (l.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (l.sibling = n.sibling),
      (l.index = n.index),
      (l.ref = n.ref),
      l
    )
  }
  function Lc(n, r, l, o, c, d) {
    var h = 2
    if (((o = n), typeof n == 'function')) Dd(n) && (h = 1)
    else if (typeof n == 'string') h = 5
    else
      e: switch (n) {
        case Ve:
          return $l(l.children, c, d, r)
        case nt:
          ;(h = 8), (c |= 8)
          break
        case ct:
          return (
            (n = da(12, l, r, c | 2)), (n.elementType = ct), (n.lanes = d), n
          )
        case Ne:
          return (n = da(13, l, r, c)), (n.elementType = Ne), (n.lanes = d), n
        case Ge:
          return (n = da(19, l, r, c)), (n.elementType = Ge), (n.lanes = d), n
        case $t:
          return Xo(l, c, d, r)
        default:
          if (typeof n == 'object' && n !== null)
            switch (n.$$typeof) {
              case ft:
                h = 10
                break e
              case Pe:
                h = 9
                break e
              case At:
                h = 11
                break e
              case Je:
                h = 14
                break e
              case rt:
                ;(h = 16), (o = null)
                break e
            }
          throw Error(y(130, n == null ? n : typeof n, ''))
      }
    return (
      (r = da(h, l, r, c)), (r.elementType = n), (r.type = o), (r.lanes = d), r
    )
  }
  function $l(n, r, l, o) {
    return (n = da(7, n, o, r)), (n.lanes = l), n
  }
  function Xo(n, r, l, o) {
    return (
      (n = da(22, n, o, r)),
      (n.elementType = $t),
      (n.lanes = l),
      (n.stateNode = { isHidden: !1 }),
      n
    )
  }
  function qo(n, r, l) {
    return (n = da(6, n, null, r)), (n.lanes = l), n
  }
  function Il(n, r, l) {
    return (
      (r = da(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = l),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    )
  }
  function Cy(n, r, l, o, c) {
    ;(this.tag = r),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = yf(0)),
      (this.expirationTimes = yf(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yf(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null)
  }
  function Mc(n, r, l, o, c, d, h, C, R) {
    return (
      (n = new Cy(n, r, l, C, R)),
      r === 1 ? ((r = 1), d === !0 && (r |= 8)) : (r = 0),
      (d = da(3, null, null, r)),
      (n.current = d),
      (d.stateNode = n),
      (d.memoizedState = {
        element: o,
        isDehydrated: l,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      td(d),
      n
    )
  }
  function eh(n, r, l) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: Ee,
      key: o == null ? null : '' + o,
      children: n,
      containerInfo: r,
      implementation: l,
    }
  }
  function _d(n) {
    if (!n) return Va
    n = n._reactInternals
    e: {
      if (Ze(n) !== n || n.tag !== 1) throw Error(y(170))
      var r = n
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context
            break e
          case 1:
            if (Wt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        r = r.return
      } while (r !== null)
      throw Error(y(171))
    }
    if (n.tag === 1) {
      var l = n.type
      if (Wt(l)) return Lo(n, l, r)
    }
    return r
  }
  function th(n, r, l, o, c, d, h, C, R) {
    return (
      (n = Mc(l, o, !0, n, c, d, h, C, R)),
      (n.context = _d(null)),
      (l = n.current),
      (o = nr()),
      (c = vn(l)),
      (d = ci(o, c)),
      (d.callback = r ?? null),
      Ii(l, d, c),
      (n.current.lanes = c),
      ml(n, c, o),
      ar(n, o),
      n
    )
  }
  function Ko(n, r, l, o) {
    var c = r.current,
      d = nr(),
      h = vn(c)
    return (
      (l = _d(l)),
      r.context === null ? (r.context = l) : (r.pendingContext = l),
      (r = ci(d, h)),
      (r.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (r.callback = o),
      (n = Ii(c, r, h)),
      n !== null && (rr(n, c, h, d), Xs(n, c, h)),
      h
    )
  }
  function Nc(n) {
    if (((n = n.current), !n.child)) return null
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode
      default:
        return n.child.stateNode
    }
  }
  function nh(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var l = n.retryLane
      n.retryLane = l !== 0 && l < r ? l : r
    }
  }
  function Ld(n, r) {
    nh(n, r), (n = n.alternate) && nh(n, r)
  }
  function rh() {
    return null
  }
  var Md =
    typeof reportError == 'function'
      ? reportError
      : function (n) {
          console.error(n)
        }
  function zc(n) {
    this._internalRoot = n
  }
  ;(mi.prototype.render = zc.prototype.render =
    function (n) {
      var r = this._internalRoot
      if (r === null) throw Error(y(409))
      Ko(n, r, null, null)
    }),
    (mi.prototype.unmount = zc.prototype.unmount =
      function () {
        var n = this._internalRoot
        if (n !== null) {
          this._internalRoot = null
          var r = n.containerInfo
          Ji(function () {
            Ko(null, n, null, null)
          }),
            (r[ui] = null)
        }
      })
  function mi(n) {
    this._internalRoot = n
  }
  mi.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = Bp()
      n = { blockedOn: null, target: n, priority: r }
      for (var l = 0; l < kt.length && r !== 0 && r < kt[l].priority; l++);
      kt.splice(l, 0, n), l === 0 && Pp(n)
    }
  }
  function Nd(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11))
  }
  function Uc(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== ' react-mount-point-unstable '))
    )
  }
  function ah() {}
  function Ey(n, r, l, o, c) {
    if (c) {
      if (typeof o == 'function') {
        var d = o
        o = function () {
          var F = Nc(h)
          d.call(F)
        }
      }
      var h = th(r, o, n, 0, null, !1, !1, '', ah)
      return (
        (n._reactRootContainer = h),
        (n[ui] = h.current),
        gu(n.nodeType === 8 ? n.parentNode : n),
        Ji(),
        h
      )
    }
    for (; (c = n.lastChild); ) n.removeChild(c)
    if (typeof o == 'function') {
      var C = o
      o = function () {
        var F = Nc(R)
        C.call(F)
      }
    }
    var R = Mc(n, 0, !1, null, null, !1, !1, '', ah)
    return (
      (n._reactRootContainer = R),
      (n[ui] = R.current),
      gu(n.nodeType === 8 ? n.parentNode : n),
      Ji(function () {
        Ko(r, R, l, o)
      }),
      R
    )
  }
  function Oc(n, r, l, o, c) {
    var d = l._reactRootContainer
    if (d) {
      var h = d
      if (typeof c == 'function') {
        var C = c
        c = function () {
          var R = Nc(h)
          C.call(R)
        }
      }
      Ko(r, h, n, c)
    } else h = Ey(l, r, n, c, o)
    return Nc(h)
  }
  ;(Vp = function (n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode
        if (r.current.memoizedState.isDehydrated) {
          var l = hl(r.pendingLanes)
          l !== 0 &&
            (oo(r, l | 1), ar(r, yt()), !(ot & 6) && ((Au = yt() + 500), Cr()))
        }
        break
      case 13:
        Ji(function () {
          var o = si(n, 1)
          if (o !== null) {
            var c = nr()
            rr(o, n, 1, c)
          }
        }),
          Ld(n, 1)
    }
  }),
    (Rs = function (n) {
      if (n.tag === 13) {
        var r = si(n, 134217728)
        if (r !== null) {
          var l = nr()
          rr(r, n, 134217728, l)
        }
        Ld(n, 134217728)
      }
    }),
    (Mt = function (n) {
      if (n.tag === 13) {
        var r = vn(n),
          l = si(n, r)
        if (l !== null) {
          var o = nr()
          rr(l, n, r, o)
        }
        Ld(n, r)
      }
    }),
    (Bp = function () {
      return Tt
    }),
    (Sf = function (n, r) {
      var l = Tt
      try {
        return (Tt = n), r()
      } finally {
        Tt = l
      }
    }),
    (Ar = function (n, r, l) {
      switch (r) {
        case 'input':
          if ((qn(n, l), (r = l.name), l.type === 'radio' && r != null)) {
            for (l = n; l.parentNode; ) l = l.parentNode
            for (
              l = l.querySelectorAll(
                'input[name=' + JSON.stringify('' + r) + '][type="radio"]'
              ),
                r = 0;
              r < l.length;
              r++
            ) {
              var o = l[r]
              if (o !== n && o.form === n.form) {
                var c = Me(o)
                if (!c) throw Error(y(90))
                yr(o), qn(o, c)
              }
            }
          }
          break
        case 'textarea':
          ja(n, l)
          break
        case 'select':
          ;(r = l.value), r != null && Aa(n, !!l.multiple, r, !1)
      }
    }),
    (lo = Fu),
    (Ss = Ji)
  var wy = { usingClientEntryPoint: !1, Events: [_o, Su, Me, dl, iu, Fu] },
    Bu = {
      findFiberByHostInstance: na,
      bundleType: 0,
      version: '18.2.0',
      rendererPackageName: 'react-dom',
    },
    Ry = {
      bundleType: Bu.bundleType,
      version: Bu.version,
      rendererPackageName: Bu.rendererPackageName,
      rendererConfig: Bu.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: He.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = Dn(n)), n === null ? null : n.stateNode
      },
      findFiberByHostInstance: Bu.findFiberByHostInstance || rh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ac = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Ac.isDisabled && Ac.supportsFiber)
      try {
        ;(uo = Ac.inject(Ry)), (Ta = Ac)
      } catch {}
  }
  return (
    (ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy),
    (ga.createPortal = function (n, r) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!Nd(r)) throw Error(y(200))
      return eh(n, r, null, l)
    }),
    (ga.createRoot = function (n, r) {
      if (!Nd(n)) throw Error(y(299))
      var l = !1,
        o = '',
        c = Md
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (c = r.onRecoverableError)),
        (r = Mc(n, 1, !1, null, null, l, !1, o, c)),
        (n[ui] = r.current),
        gu(n.nodeType === 8 ? n.parentNode : n),
        new zc(r)
      )
    }),
    (ga.findDOMNode = function (n) {
      if (n == null) return null
      if (n.nodeType === 1) return n
      var r = n._reactInternals
      if (r === void 0)
        throw typeof n.render == 'function'
          ? Error(y(188))
          : ((n = Object.keys(n).join(',')), Error(y(268, n)))
      return (n = Dn(r)), (n = n === null ? null : n.stateNode), n
    }),
    (ga.flushSync = function (n) {
      return Ji(n)
    }),
    (ga.hydrate = function (n, r, l) {
      if (!Uc(r)) throw Error(y(200))
      return Oc(null, n, r, !0, l)
    }),
    (ga.hydrateRoot = function (n, r, l) {
      if (!Nd(n)) throw Error(y(405))
      var o = (l != null && l.hydratedSources) || null,
        c = !1,
        d = '',
        h = Md
      if (
        (l != null &&
          (l.unstable_strictMode === !0 && (c = !0),
          l.identifierPrefix !== void 0 && (d = l.identifierPrefix),
          l.onRecoverableError !== void 0 && (h = l.onRecoverableError)),
        (r = th(r, null, n, 1, l ?? null, c, !1, d, h)),
        (n[ui] = r.current),
        gu(n),
        o)
      )
        for (n = 0; n < o.length; n++)
          (l = o[n]),
            (c = l._getVersion),
            (c = c(l._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [l, c])
              : r.mutableSourceEagerHydrationData.push(l, c)
      return new mi(r)
    }),
    (ga.render = function (n, r, l) {
      if (!Uc(r)) throw Error(y(200))
      return Oc(null, n, r, !1, l)
    }),
    (ga.unmountComponentAtNode = function (n) {
      if (!Uc(n)) throw Error(y(40))
      return n._reactRootContainer
        ? (Ji(function () {
            Oc(null, null, n, !1, function () {
              ;(n._reactRootContainer = null), (n[ui] = null)
            })
          }),
          !0)
        : !1
    }),
    (ga.unstable_batchedUpdates = Fu),
    (ga.unstable_renderSubtreeIntoContainer = function (n, r, l, o) {
      if (!Uc(l)) throw Error(y(200))
      if (n == null || n._reactInternals === void 0) throw Error(y(38))
      return Oc(n, r, l, !1, o)
    }),
    (ga.version = '18.2.0-next-9e3b772b8-20220608'),
    ga
  )
}
var Sa = {}
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lE
function cD() {
  return (
    lE ||
      ((lE = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              'function' &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
              new Error()
            )
          var _ = gs,
            E = uE(),
            y = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            D = !1
          function x(e) {
            D = e
          }
          function A(e) {
            if (!D) {
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                a[i - 1] = arguments[i]
              V('warn', e, a)
            }
          }
          function m(e) {
            if (!D) {
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                a[i - 1] = arguments[i]
              V('error', e, a)
            }
          }
          function V(e, t, a) {
            {
              var i = y.ReactDebugCurrentFrame,
                u = i.getStackAddendum()
              u !== '' && ((t += '%s'), (a = a.concat([u])))
              var s = a.map(function (f) {
                return String(f)
              })
              s.unshift('Warning: ' + t),
                Function.prototype.apply.call(console[e], console, s)
            }
          }
          var H = 0,
            $ = 1,
            te = 2,
            B = 3,
            W = 4,
            K = 5,
            re = 6,
            Re = 7,
            se = 8,
            _e = 9,
            ge = 10,
            ce = 11,
            He = 12,
            de = 13,
            Ee = 14,
            Ve = 15,
            nt = 16,
            ct = 17,
            ft = 18,
            Pe = 19,
            At = 21,
            Ne = 22,
            Ge = 23,
            Je = 24,
            rt = 25,
            $t = !0,
            ee = !1,
            we = !1,
            le = !1,
            et = !1,
            lt = !0,
            jt = !1,
            bt = !1,
            Ct = !0,
            en = !0,
            ir = !0,
            mn = /* @__PURE__ */ new Set(),
            jn = {},
            qr = {}
          function Xn(e, t) {
            yr(e, t), yr(e + 'Capture', t)
          }
          function yr(e, t) {
            jn[e] &&
              m(
                'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
                e
              ),
              (jn[e] = t)
            {
              var a = e.toLowerCase()
              ;(qr[a] = e), e === 'onDoubleClick' && (qr.ondblclick = e)
            }
            for (var i = 0; i < t.length; i++) mn.add(t[i])
          }
          var sn =
              typeof window < 'u' &&
              typeof window.document < 'u' &&
              typeof window.document.createElement < 'u',
            bn = Object.prototype.hasOwnProperty
          function yn(e) {
            {
              var t = typeof Symbol == 'function' && Symbol.toStringTag,
                a =
                  (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object'
              return a
            }
          }
          function Ht(e) {
            try {
              return qn(e), !1
            } catch {
              return !0
            }
          }
          function qn(e) {
            return '' + e
          }
          function Kr(e, t) {
            if (Ht(e))
              return (
                m(
                  'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  t,
                  yn(e)
                ),
                qn(e)
              )
          }
          function xa(e) {
            if (Ht(e))
              return (
                m(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  yn(e)
                ),
                qn(e)
              )
          }
          function Ja(e, t) {
            if (Ht(e))
              return (
                m(
                  'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  t,
                  yn(e)
                ),
                qn(e)
              )
          }
          function Aa(e, t) {
            if (Ht(e))
              return (
                m(
                  'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  t,
                  yn(e)
                ),
                qn(e)
              )
          }
          function Ca(e) {
            if (Ht(e))
              return (
                m(
                  'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
                  yn(e)
                ),
                qn(e)
              )
          }
          function zr(e) {
            if (Ht(e))
              return (
                m(
                  'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
                  yn(e)
                ),
                qn(e)
              )
          }
          var ja = 0,
            Ur = 1,
            Ea = 2,
            cn = 3,
            Or = 4,
            Di = 5,
            wa = 6,
            ue =
              ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
            Le = ue + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
            at = new RegExp('^[' + ue + '][' + Le + ']*$'),
            Rt = {},
            Xt = {}
          function kn(e) {
            return bn.call(Xt, e)
              ? !0
              : bn.call(Rt, e)
              ? !1
              : at.test(e)
              ? ((Xt[e] = !0), !0)
              : ((Rt[e] = !0), m('Invalid attribute name: `%s`', e), !1)
          }
          function an(e, t, a) {
            return t !== null
              ? t.type === ja
              : a
              ? !1
              : e.length > 2 &&
                (e[0] === 'o' || e[0] === 'O') &&
                (e[1] === 'n' || e[1] === 'N')
          }
          function gr(e, t, a, i) {
            if (a !== null && a.type === ja) return !1
            switch (typeof t) {
              case 'function':
              case 'symbol':
                return !0
              case 'boolean': {
                if (i) return !1
                if (a !== null) return !a.acceptsBooleans
                var u = e.toLowerCase().slice(0, 5)
                return u !== 'data-' && u !== 'aria-'
              }
              default:
                return !1
            }
          }
          function Ut(e, t, a, i) {
            if (t === null || typeof t > 'u' || gr(e, t, a, i)) return !0
            if (i) return !1
            if (a !== null)
              switch (a.type) {
                case cn:
                  return !t
                case Or:
                  return t === !1
                case Di:
                  return isNaN(t)
                case wa:
                  return isNaN(t) || t < 1
              }
            return !1
          }
          function Ar(e) {
            return Ot.hasOwnProperty(e) ? Ot[e] : null
          }
          function Lt(e, t, a, i, u, s, f) {
            ;(this.acceptsBooleans = t === Ea || t === cn || t === Or),
              (this.attributeName = i),
              (this.attributeNamespace = u),
              (this.mustUseProperty = a),
              (this.propertyName = e),
              (this.type = t),
              (this.sanitizeURL = s),
              (this.removeEmptyString = f)
          }
          var Ot = {},
            au = [
              'children',
              'dangerouslySetInnerHTML',
              // TODO: This prevents the assignment of defaultValue to regular
              // elements (not just inputs). Now that ReactDOMInput assigns to the
              // defaultValue property -- do we need this?
              'defaultValue',
              'defaultChecked',
              'innerHTML',
              'suppressContentEditableWarning',
              'suppressHydrationWarning',
              'style',
            ]
          au.forEach(function (e) {
            Ot[e] = new Lt(
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
            )
          }),
            [
              ['acceptCharset', 'accept-charset'],
              ['className', 'class'],
              ['htmlFor', 'for'],
              ['httpEquiv', 'http-equiv'],
            ].forEach(function (e) {
              var t = e[0],
                a = e[1]
              Ot[t] = new Lt(
                t,
                Ur,
                !1,
                // mustUseProperty
                a,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1
              )
            }),
            ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
              function (e) {
                Ot[e] = new Lt(
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
                )
              }
            ),
            [
              'autoReverse',
              'externalResourcesRequired',
              'focusable',
              'preserveAlpha',
            ].forEach(function (e) {
              Ot[e] = new Lt(
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
              )
            }),
            [
              'allowFullScreen',
              'async',
              // Note: there is a special case that prevents it from being written to the DOM
              // on the client side because the browsers are inconsistent. Instead we call focus().
              'autoFocus',
              'autoPlay',
              'controls',
              'default',
              'defer',
              'disabled',
              'disablePictureInPicture',
              'disableRemotePlayback',
              'formNoValidate',
              'hidden',
              'loop',
              'noModule',
              'noValidate',
              'open',
              'playsInline',
              'readOnly',
              'required',
              'reversed',
              'scoped',
              'seamless',
              // Microdata
              'itemScope',
            ].forEach(function (e) {
              Ot[e] = new Lt(
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
              )
            }),
            [
              'checked',
              // Note: `option.selected` is not updated if `select.multiple` is
              // disabled with `removeAttribute`. We have special logic for handling this.
              'multiple',
              'muted',
              'selected',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              Ot[e] = new Lt(
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
              )
            }),
            [
              'capture',
              'download',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              Ot[e] = new Lt(
                e,
                Or,
                !1,
                // mustUseProperty
                e,
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1
              )
            }),
            [
              'cols',
              'rows',
              'size',
              'span',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              Ot[e] = new Lt(
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
              )
            }),
            ['rowSpan', 'start'].forEach(function (e) {
              Ot[e] = new Lt(
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
              )
            })
          var dl = /[\-\:]([a-z])/g,
            iu = function (e) {
              return e[1].toUpperCase()
            }
          ;[
            'accent-height',
            'alignment-baseline',
            'arabic-form',
            'baseline-shift',
            'cap-height',
            'clip-path',
            'clip-rule',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'dominant-baseline',
            'enable-background',
            'fill-opacity',
            'fill-rule',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'glyph-name',
            'glyph-orientation-horizontal',
            'glyph-orientation-vertical',
            'horiz-adv-x',
            'horiz-origin-x',
            'image-rendering',
            'letter-spacing',
            'lighting-color',
            'marker-end',
            'marker-mid',
            'marker-start',
            'overline-position',
            'overline-thickness',
            'paint-order',
            'panose-1',
            'pointer-events',
            'rendering-intent',
            'shape-rendering',
            'stop-color',
            'stop-opacity',
            'strikethrough-position',
            'strikethrough-thickness',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'underline-position',
            'underline-thickness',
            'unicode-bidi',
            'unicode-range',
            'units-per-em',
            'v-alphabetic',
            'v-hanging',
            'v-ideographic',
            'v-mathematical',
            'vector-effect',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'word-spacing',
            'writing-mode',
            'xmlns:xlink',
            'x-height',
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            var t = e.replace(dl, iu)
            Ot[t] = new Lt(
              t,
              Ur,
              !1,
              // mustUseProperty
              e,
              null,
              // attributeNamespace
              !1,
              // sanitizeURL
              !1
            )
          }),
            [
              'xlink:actuate',
              'xlink:arcrole',
              'xlink:role',
              'xlink:show',
              'xlink:title',
              'xlink:type',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              var t = e.replace(dl, iu)
              Ot[t] = new Lt(
                t,
                Ur,
                !1,
                // mustUseProperty
                e,
                'http://www.w3.org/1999/xlink',
                !1,
                // sanitizeURL
                !1
              )
            }),
            [
              'xml:base',
              'xml:lang',
              'xml:space',
              // NOTE: if you add a camelCased prop to this list,
              // you'll need to set attributeName to name.toLowerCase()
              // instead in the assignment below.
            ].forEach(function (e) {
              var t = e.replace(dl, iu)
              Ot[t] = new Lt(
                t,
                Ur,
                !1,
                // mustUseProperty
                e,
                'http://www.w3.org/XML/1998/namespace',
                !1,
                // sanitizeURL
                !1
              )
            }),
            ['tabIndex', 'crossOrigin'].forEach(function (e) {
              Ot[e] = new Lt(
                e,
                Ur,
                !1,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                !1,
                // sanitizeURL
                !1
              )
            })
          var lo = 'xlinkHref'
          ;(Ot[lo] = new Lt(
            'xlinkHref',
            Ur,
            !1,
            // mustUseProperty
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            // sanitizeURL
            !1
          )),
            ['src', 'href', 'action', 'formAction'].forEach(function (e) {
              Ot[e] = new Lt(
                e,
                Ur,
                !1,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                !0,
                // sanitizeURL
                !0
              )
            })
          var Ss =
              /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
            pl = !1
          function lu(e) {
            !pl &&
              Ss.test(e) &&
              ((pl = !0),
              m(
                'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
                JSON.stringify(e)
              ))
          }
          function vl(e, t, a, i) {
            if (i.mustUseProperty) {
              var u = i.propertyName
              return e[u]
            } else {
              Kr(a, t), i.sanitizeURL && lu('' + a)
              var s = i.attributeName,
                f = null
              if (i.type === Or) {
                if (e.hasAttribute(s)) {
                  var p = e.getAttribute(s)
                  return p === ''
                    ? !0
                    : Ut(t, a, i, !1)
                    ? p
                    : p === '' + a
                    ? a
                    : p
                }
              } else if (e.hasAttribute(s)) {
                if (Ut(t, a, i, !1)) return e.getAttribute(s)
                if (i.type === cn) return a
                f = e.getAttribute(s)
              }
              return Ut(t, a, i, !1)
                ? f === null
                  ? a
                  : f
                : f === '' + a
                ? a
                : f
            }
          }
          function uu(e, t, a, i) {
            {
              if (!kn(t)) return
              if (!e.hasAttribute(t)) return a === void 0 ? void 0 : null
              var u = e.getAttribute(t)
              return Kr(a, t), u === '' + a ? a : u
            }
          }
          function Ha(e, t, a, i) {
            var u = Ar(t)
            if (!an(t, u, i)) {
              if ((Ut(t, a, u, i) && (a = null), i || u === null)) {
                if (kn(t)) {
                  var s = t
                  a === null
                    ? e.removeAttribute(s)
                    : (Kr(a, t), e.setAttribute(s, '' + a))
                }
                return
              }
              var f = u.mustUseProperty
              if (f) {
                var p = u.propertyName
                if (a === null) {
                  var v = u.type
                  e[p] = v === cn ? !1 : ''
                } else e[p] = a
                return
              }
              var g = u.attributeName,
                S = u.attributeNamespace
              if (a === null) e.removeAttribute(g)
              else {
                var k = u.type,
                  T
                k === cn || (k === Or && a === !0)
                  ? (T = '')
                  : (Kr(a, g), (T = '' + a), u.sanitizeURL && lu(T.toString())),
                  S ? e.setAttributeNS(S, g, T) : e.setAttribute(g, T)
              }
            }
          }
          var _i = Symbol.for('react.element'),
            jr = Symbol.for('react.portal'),
            Ra = Symbol.for('react.fragment'),
            Li = Symbol.for('react.strict_mode'),
            w = Symbol.for('react.profiler'),
            q = Symbol.for('react.provider'),
            oe = Symbol.for('react.context'),
            Ue = Symbol.for('react.forward_ref'),
            Ze = Symbol.for('react.suspense'),
            ht = Symbol.for('react.suspense_list'),
            tt = Symbol.for('react.memo'),
            Ae = Symbol.for('react.lazy'),
            Dn = Symbol.for('react.scope'),
            It = Symbol.for('react.debug_trace_mode'),
            Qt = Symbol.for('react.offscreen'),
            lr = Symbol.for('react.legacy_hidden'),
            Mi = Symbol.for('react.cache'),
            xs = Symbol.for('react.tracing_marker'),
            yt = Symbol.iterator,
            Fm = '@@iterator'
          function ei(e) {
            if (e === null || typeof e != 'object') return null
            var t = (yt && e[yt]) || e[Fm]
            return typeof t == 'function' ? t : null
          }
          var ut = Object.assign,
            Ni = 0,
            Ap,
            vf,
            uo,
            Ta,
            jp,
            Zr,
            Hp
          function Fp() {}
          Fp.__reactDisabledLog = !0
          function Vm() {
            {
              if (Ni === 0) {
                ;(Ap = console.log),
                  (vf = console.info),
                  (uo = console.warn),
                  (Ta = console.error),
                  (jp = console.group),
                  (Zr = console.groupCollapsed),
                  (Hp = console.groupEnd)
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: Fp,
                  writable: !0,
                }
                Object.defineProperties(console, {
                  info: e,
                  log: e,
                  warn: e,
                  error: e,
                  group: e,
                  groupCollapsed: e,
                  groupEnd: e,
                })
              }
              Ni++
            }
          }
          function Cs() {
            {
              if ((Ni--, Ni === 0)) {
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                }
                Object.defineProperties(console, {
                  log: ut({}, e, {
                    value: Ap,
                  }),
                  info: ut({}, e, {
                    value: vf,
                  }),
                  warn: ut({}, e, {
                    value: uo,
                  }),
                  error: ut({}, e, {
                    value: Ta,
                  }),
                  group: ut({}, e, {
                    value: jp,
                  }),
                  groupCollapsed: ut({}, e, {
                    value: Zr,
                  }),
                  groupEnd: ut({}, e, {
                    value: Hp,
                  }),
                })
              }
              Ni < 0 &&
                m(
                  'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                )
            }
          }
          var ou = y.ReactCurrentDispatcher,
            hl
          function ba(e, t, a) {
            {
              if (hl === void 0)
                try {
                  throw Error()
                } catch (u) {
                  var i = u.stack.trim().match(/\n( *(at )?)/)
                  hl = (i && i[1]) || ''
                }
              return (
                `
` +
                hl +
                e
              )
            }
          }
          var hf = !1,
            Es
          {
            var mf = typeof WeakMap == 'function' ? WeakMap : Map
            Es = new mf()
          }
          function ws(e, t) {
            if (!e || hf) return ''
            {
              var a = Es.get(e)
              if (a !== void 0) return a
            }
            var i
            hf = !0
            var u = Error.prepareStackTrace
            Error.prepareStackTrace = void 0
            var s
            ;(s = ou.current), (ou.current = null), Vm()
            try {
              if (t) {
                var f = function () {
                  throw Error()
                }
                if (
                  (Object.defineProperty(f.prototype, 'props', {
                    set: function () {
                      throw Error()
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(f, [])
                  } catch (j) {
                    i = j
                  }
                  Reflect.construct(e, [], f)
                } else {
                  try {
                    f.call()
                  } catch (j) {
                    i = j
                  }
                  e.call(f.prototype)
                }
              } else {
                try {
                  throw Error()
                } catch (j) {
                  i = j
                }
                e()
              }
            } catch (j) {
              if (j && i && typeof j.stack == 'string') {
                for (
                  var p = j.stack.split(`
`),
                    v = i.stack.split(`
`),
                    g = p.length - 1,
                    S = v.length - 1;
                  g >= 1 && S >= 0 && p[g] !== v[S];

                )
                  S--
                for (; g >= 1 && S >= 0; g--, S--)
                  if (p[g] !== v[S]) {
                    if (g !== 1 || S !== 1)
                      do
                        if ((g--, S--, S < 0 || p[g] !== v[S])) {
                          var k =
                            `
` + p[g].replace(' at new ', ' at ')
                          return (
                            e.displayName &&
                              k.includes('<anonymous>') &&
                              (k = k.replace('<anonymous>', e.displayName)),
                            typeof e == 'function' && Es.set(e, k),
                            k
                          )
                        }
                      while (g >= 1 && S >= 0)
                    break
                  }
              }
            } finally {
              ;(hf = !1), (ou.current = s), Cs(), (Error.prepareStackTrace = u)
            }
            var T = e ? e.displayName || e.name : '',
              O = T ? ba(T) : ''
            return typeof e == 'function' && Es.set(e, O), O
          }
          function yf(e, t, a) {
            return ws(e, !0)
          }
          function ml(e, t, a) {
            return ws(e, !1)
          }
          function Bm(e) {
            var t = e.prototype
            return !!(t && t.isReactComponent)
          }
          function oo(e, t, a) {
            if (e == null) return ''
            if (typeof e == 'function') return ws(e, Bm(e))
            if (typeof e == 'string') return ba(e)
            switch (e) {
              case Ze:
                return ba('Suspense')
              case ht:
                return ba('SuspenseList')
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case Ue:
                  return ml(e.render)
                case tt:
                  return oo(e.type, t, a)
                case Ae: {
                  var i = e,
                    u = i._payload,
                    s = i._init
                  try {
                    return oo(s(u), t, a)
                  } catch {}
                }
              }
            return ''
          }
          function Tt(e) {
            switch (
              (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)
            ) {
              case K:
                return ba(e.type)
              case nt:
                return ba('Lazy')
              case de:
                return ba('Suspense')
              case Pe:
                return ba('SuspenseList')
              case H:
              case te:
              case Ve:
                return ml(e.type)
              case ce:
                return ml(e.type.render)
              case $:
                return yf(e.type)
              default:
                return ''
            }
          }
          function gf(e) {
            try {
              var t = '',
                a = e
              do (t += Tt(a)), (a = a.return)
              while (a)
              return t
            } catch (i) {
              return (
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack
              )
            }
          }
          function Vp(e, t, a) {
            var i = e.displayName
            if (i) return i
            var u = t.displayName || t.name || ''
            return u !== '' ? a + '(' + u + ')' : a
          }
          function Rs(e) {
            return e.displayName || 'Context'
          }
          function Mt(e) {
            if (e == null) return null
            if (
              (typeof e.tag == 'number' &&
                m(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                ),
              typeof e == 'function')
            )
              return e.displayName || e.name || null
            if (typeof e == 'string') return e
            switch (e) {
              case Ra:
                return 'Fragment'
              case jr:
                return 'Portal'
              case w:
                return 'Profiler'
              case Li:
                return 'StrictMode'
              case Ze:
                return 'Suspense'
              case ht:
                return 'SuspenseList'
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case oe:
                  var t = e
                  return Rs(t) + '.Consumer'
                case q:
                  var a = e
                  return Rs(a._context) + '.Provider'
                case Ue:
                  return Vp(e, e.render, 'ForwardRef')
                case tt:
                  var i = e.displayName || null
                  return i !== null ? i : Mt(e.type) || 'Memo'
                case Ae: {
                  var u = e,
                    s = u._payload,
                    f = u._init
                  try {
                    return Mt(f(s))
                  } catch {
                    return null
                  }
                }
              }
            return null
          }
          function Bp(e, t, a) {
            var i = t.displayName || t.name || ''
            return e.displayName || (i !== '' ? a + '(' + i + ')' : a)
          }
          function Sf(e) {
            return e.displayName || 'Context'
          }
          function Xe(e) {
            var t = e.tag,
              a = e.type
            switch (t) {
              case Je:
                return 'Cache'
              case _e:
                var i = a
                return Sf(i) + '.Consumer'
              case ge:
                var u = a
                return Sf(u._context) + '.Provider'
              case ft:
                return 'DehydratedFragment'
              case ce:
                return Bp(a, a.render, 'ForwardRef')
              case Re:
                return 'Fragment'
              case K:
                return a
              case W:
                return 'Portal'
              case B:
                return 'Root'
              case re:
                return 'Text'
              case nt:
                return Mt(a)
              case se:
                return a === Li ? 'StrictMode' : 'Mode'
              case Ne:
                return 'Offscreen'
              case He:
                return 'Profiler'
              case At:
                return 'Scope'
              case de:
                return 'Suspense'
              case Pe:
                return 'SuspenseList'
              case rt:
                return 'TracingMarker'
              case $:
              case H:
              case ct:
              case te:
              case Ee:
              case Ve:
                if (typeof a == 'function')
                  return a.displayName || a.name || null
                if (typeof a == 'string') return a
                break
            }
            return null
          }
          var so = y.ReactDebugCurrentFrame,
            fn = null,
            Jr = !1
          function ea() {
            {
              if (fn === null) return null
              var e = fn._debugOwner
              if (e !== null && typeof e < 'u') return Xe(e)
            }
            return null
          }
          function co() {
            return fn === null ? '' : gf(fn)
          }
          function gn() {
            ;(so.getCurrentStack = null), (fn = null), (Jr = !1)
          }
          function kt(e) {
            ;(so.getCurrentStack = e === null ? null : co), (fn = e), (Jr = !1)
          }
          function Pm() {
            return fn
          }
          function ka(e) {
            Jr = e
          }
          function Kn(e) {
            return '' + e
          }
          function zi(e) {
            switch (typeof e) {
              case 'boolean':
              case 'number':
              case 'string':
              case 'undefined':
                return e
              case 'object':
                return zr(e), e
              default:
                return ''
            }
          }
          var Pp = {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0,
          }
          function su(e, t) {
            Pp[t.type] ||
              t.onChange ||
              t.onInput ||
              t.readOnly ||
              t.disabled ||
              t.value == null ||
              m(
                'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
              ),
              t.onChange ||
                t.readOnly ||
                t.disabled ||
                t.checked == null ||
                m(
                  'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
                )
          }
          function xf(e) {
            var t = e.type,
              a = e.nodeName
            return (
              a &&
              a.toLowerCase() === 'input' &&
              (t === 'checkbox' || t === 'radio')
            )
          }
          function Yp(e) {
            return e._valueTracker
          }
          function fo(e) {
            e._valueTracker = null
          }
          function po(e) {
            var t = ''
            return (
              e && (xf(e) ? (t = e.checked ? 'true' : 'false') : (t = e.value)),
              t
            )
          }
          function cu(e) {
            var t = xf(e) ? 'checked' : 'value',
              a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
            zr(e[t])
            var i = '' + e[t]
            if (
              !(
                e.hasOwnProperty(t) ||
                typeof a > 'u' ||
                typeof a.get != 'function' ||
                typeof a.set != 'function'
              )
            ) {
              var u = a.get,
                s = a.set
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return u.call(this)
                },
                set: function (p) {
                  zr(p), (i = '' + p), s.call(this, p)
                },
              }),
                Object.defineProperty(e, t, {
                  enumerable: a.enumerable,
                })
              var f = {
                getValue: function () {
                  return i
                },
                setValue: function (p) {
                  zr(p), (i = '' + p)
                },
                stopTracking: function () {
                  fo(e), delete e[t]
                },
              }
              return f
            }
          }
          function yl(e) {
            Yp(e) || (e._valueTracker = cu(e))
          }
          function $p(e) {
            if (!e) return !1
            var t = Yp(e)
            if (!t) return !0
            var a = t.getValue(),
              i = po(e)
            return i !== a ? (t.setValue(i), !0) : !1
          }
          function Ts(e) {
            if (
              ((e = e || (typeof document < 'u' ? document : void 0)),
              typeof e > 'u')
            )
              return null
            try {
              return e.activeElement || e.body
            } catch {
              return e.body
            }
          }
          var bs = !1,
            vo = !1,
            ks = !1,
            Cf = !1
          function ti(e) {
            var t = e.type === 'checkbox' || e.type === 'radio'
            return t ? e.checked != null : e.value != null
          }
          function ho(e, t) {
            var a = e,
              i = t.checked,
              u = ut({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: i ?? a._wrapperState.initialChecked,
              })
            return u
          }
          function mo(e, t) {
            su('input', t),
              t.checked !== void 0 &&
                t.defaultChecked !== void 0 &&
                !vo &&
                (m(
                  '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
                  ea() || 'A component',
                  t.type
                ),
                (vo = !0)),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !bs &&
                (m(
                  '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
                  ea() || 'A component',
                  t.type
                ),
                (bs = !0))
            var a = e,
              i = t.defaultValue == null ? '' : t.defaultValue
            a._wrapperState = {
              initialChecked: t.checked != null ? t.checked : t.defaultChecked,
              initialValue: zi(t.value != null ? t.value : i),
              controlled: ti(t),
            }
          }
          function Ef(e, t) {
            var a = e,
              i = t.checked
            i != null && Ha(a, 'checked', i, !1)
          }
          function fu(e, t) {
            var a = e
            {
              var i = ti(t)
              !a._wrapperState.controlled &&
                i &&
                !Cf &&
                (m(
                  'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
                ),
                (Cf = !0)),
                a._wrapperState.controlled &&
                  !i &&
                  !ks &&
                  (m(
                    'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
                  ),
                  (ks = !0))
            }
            Ef(e, t)
            var u = zi(t.value),
              s = t.type
            if (u != null)
              s === 'number'
                ? ((u === 0 && a.value === '') || // We explicitly want to coerce to number here if possible.
                    // eslint-disable-next-line
                    a.value != u) &&
                  (a.value = Kn(u))
                : a.value !== Kn(u) && (a.value = Kn(u))
            else if (s === 'submit' || s === 'reset') {
              a.removeAttribute('value')
              return
            }
            t.hasOwnProperty('value')
              ? Ui(a, t.type, u)
              : t.hasOwnProperty('defaultValue') &&
                Ui(a, t.type, zi(t.defaultValue)),
              t.checked == null &&
                t.defaultChecked != null &&
                (a.defaultChecked = !!t.defaultChecked)
          }
          function yo(e, t, a) {
            var i = e
            if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
              var u = t.type,
                s = u === 'submit' || u === 'reset'
              if (s && (t.value === void 0 || t.value === null)) return
              var f = Kn(i._wrapperState.initialValue)
              a || (f !== i.value && (i.value = f)), (i.defaultValue = f)
            }
            var p = i.name
            p !== '' && (i.name = ''),
              (i.defaultChecked = !i.defaultChecked),
              (i.defaultChecked = !!i._wrapperState.initialChecked),
              p !== '' && (i.name = p)
          }
          function Ip(e, t) {
            var a = e
            fu(a, t), Hr(a, t)
          }
          function Hr(e, t) {
            var a = t.name
            if (t.type === 'radio' && a != null) {
              for (var i = e; i.parentNode; ) i = i.parentNode
              Kr(a, 'name')
              for (
                var u = i.querySelectorAll(
                    'input[name=' + JSON.stringify('' + a) + '][type="radio"]'
                  ),
                  s = 0;
                s < u.length;
                s++
              ) {
                var f = u[s]
                if (!(f === e || f.form !== e.form)) {
                  var p = Ch(f)
                  if (!p)
                    throw new Error(
                      'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
                    )
                  $p(f), fu(f, p)
                }
              }
            }
          }
          function Ui(e, t, a) {
            // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
            ;(t !== 'number' || Ts(e.ownerDocument) !== e) &&
              (a == null
                ? (e.defaultValue = Kn(e._wrapperState.initialValue))
                : e.defaultValue !== Kn(a) && (e.defaultValue = Kn(a)))
          }
          var Ds = !1,
            du = !1,
            Qp = !1
          function _s(e, t) {
            t.value == null &&
              (typeof t.children == 'object' && t.children !== null
                ? _.Children.forEach(t.children, function (a) {
                    a != null &&
                      (typeof a == 'string' ||
                        typeof a == 'number' ||
                        du ||
                        ((du = !0),
                        m(
                          'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
                        )))
                  })
                : t.dangerouslySetInnerHTML != null &&
                  (Qp ||
                    ((Qp = !0),
                    m(
                      'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.'
                    )))),
              t.selected != null &&
                !Ds &&
                (m(
                  'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
                ),
                (Ds = !0))
          }
          function wf(e, t) {
            t.value != null && e.setAttribute('value', Kn(zi(t.value)))
          }
          var go = Array.isArray
          function _n(e) {
            return go(e)
          }
          var Ls
          Ls = !1
          function Wp() {
            var e = ea()
            return e
              ? `

Check the render method of \`` +
                  e +
                  '`.'
              : ''
          }
          var Gp = ['value', 'defaultValue']
          function Ym(e) {
            {
              su('select', e)
              for (var t = 0; t < Gp.length; t++) {
                var a = Gp[t]
                if (e[a] != null) {
                  var i = _n(e[a])
                  e.multiple && !i
                    ? m(
                        'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                        a,
                        Wp()
                      )
                    : !e.multiple &&
                      i &&
                      m(
                        'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                        a,
                        Wp()
                      )
                }
              }
            }
          }
          function Oi(e, t, a, i) {
            var u = e.options
            if (t) {
              for (var s = a, f = {}, p = 0; p < s.length; p++)
                f['$' + s[p]] = !0
              for (var v = 0; v < u.length; v++) {
                var g = f.hasOwnProperty('$' + u[v].value)
                u[v].selected !== g && (u[v].selected = g),
                  g && i && (u[v].defaultSelected = !0)
              }
            } else {
              for (var S = Kn(zi(a)), k = null, T = 0; T < u.length; T++) {
                if (u[T].value === S) {
                  ;(u[T].selected = !0), i && (u[T].defaultSelected = !0)
                  return
                }
                k === null && !u[T].disabled && (k = u[T])
              }
              k !== null && (k.selected = !0)
            }
          }
          function Rf(e, t) {
            return ut({}, t, {
              value: void 0,
            })
          }
          function Xp(e, t) {
            var a = e
            Ym(t),
              (a._wrapperState = {
                wasMultiple: !!t.multiple,
              }),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !Ls &&
                (m(
                  'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
                ),
                (Ls = !0))
          }
          function $m(e, t) {
            var a = e
            a.multiple = !!t.multiple
            var i = t.value
            i != null
              ? Oi(a, !!t.multiple, i, !1)
              : t.defaultValue != null &&
                Oi(a, !!t.multiple, t.defaultValue, !0)
          }
          function Im(e, t) {
            var a = e,
              i = a._wrapperState.wasMultiple
            a._wrapperState.wasMultiple = !!t.multiple
            var u = t.value
            u != null
              ? Oi(a, !!t.multiple, u, !1)
              : i !== !!t.multiple &&
                (t.defaultValue != null
                  ? Oi(a, !!t.multiple, t.defaultValue, !0)
                  : Oi(a, !!t.multiple, t.multiple ? [] : '', !1))
          }
          function Qm(e, t) {
            var a = e,
              i = t.value
            i != null && Oi(a, !!t.multiple, i, !1)
          }
          var Tf = !1
          function bf(e, t) {
            var a = e
            if (t.dangerouslySetInnerHTML != null)
              throw new Error(
                '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
              )
            var i = ut({}, t, {
              value: void 0,
              defaultValue: void 0,
              children: Kn(a._wrapperState.initialValue),
            })
            return i
          }
          function qp(e, t) {
            var a = e
            su('textarea', t),
              t.value !== void 0 &&
                t.defaultValue !== void 0 &&
                !Tf &&
                (m(
                  '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
                  ea() || 'A component'
                ),
                (Tf = !0))
            var i = t.value
            if (i == null) {
              var u = t.children,
                s = t.defaultValue
              if (u != null) {
                m(
                  'Use the `defaultValue` or `value` props instead of setting children on <textarea>.'
                )
                {
                  if (s != null)
                    throw new Error(
                      'If you supply `defaultValue` on a <textarea>, do not pass children.'
                    )
                  if (_n(u)) {
                    if (u.length > 1)
                      throw new Error(
                        '<textarea> can only have at most one child.'
                      )
                    u = u[0]
                  }
                  s = u
                }
              }
              s == null && (s = ''), (i = s)
            }
            a._wrapperState = {
              initialValue: zi(i),
            }
          }
          function Kp(e, t) {
            var a = e,
              i = zi(t.value),
              u = zi(t.defaultValue)
            if (i != null) {
              var s = Kn(i)
              s !== a.value && (a.value = s),
                t.defaultValue == null &&
                  a.defaultValue !== s &&
                  (a.defaultValue = s)
            }
            u != null && (a.defaultValue = Kn(u))
          }
          function Zp(e, t) {
            var a = e,
              i = a.textContent
            i === a._wrapperState.initialValue &&
              i !== '' &&
              i !== null &&
              (a.value = i)
          }
          function kf(e, t) {
            Kp(e, t)
          }
          var ni = 'http://www.w3.org/1999/xhtml',
            Wm = 'http://www.w3.org/1998/Math/MathML',
            Df = 'http://www.w3.org/2000/svg'
          function Ms(e) {
            switch (e) {
              case 'svg':
                return Df
              case 'math':
                return Wm
              default:
                return ni
            }
          }
          function _f(e, t) {
            return e == null || e === ni
              ? Ms(t)
              : e === Df && t === 'foreignObject'
              ? ni
              : e
          }
          var Gm = function (e) {
              return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
                ? function (t, a, i, u) {
                    MSApp.execUnsafeLocalFunction(function () {
                      return e(t, a, i, u)
                    })
                  }
                : e
            },
            Ns,
            Jp = Gm(function (e, t) {
              if (e.namespaceURI === Df && !('innerHTML' in e)) {
                ;(Ns = Ns || document.createElement('div')),
                  (Ns.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>')
                for (var a = Ns.firstChild; e.firstChild; )
                  e.removeChild(e.firstChild)
                for (; a.firstChild; ) e.appendChild(a.firstChild)
                return
              }
              e.innerHTML = t
            }),
            Sr = 1,
            ri = 3,
            dn = 8,
            Da = 9,
            gl = 11,
            zs = function (e, t) {
              if (t) {
                var a = e.firstChild
                if (a && a === e.lastChild && a.nodeType === ri) {
                  a.nodeValue = t
                  return
                }
              }
              e.textContent = t
            },
            ev = {
              animation: [
                'animationDelay',
                'animationDirection',
                'animationDuration',
                'animationFillMode',
                'animationIterationCount',
                'animationName',
                'animationPlayState',
                'animationTimingFunction',
              ],
              background: [
                'backgroundAttachment',
                'backgroundClip',
                'backgroundColor',
                'backgroundImage',
                'backgroundOrigin',
                'backgroundPositionX',
                'backgroundPositionY',
                'backgroundRepeat',
                'backgroundSize',
              ],
              backgroundPosition: [
                'backgroundPositionX',
                'backgroundPositionY',
              ],
              border: [
                'borderBottomColor',
                'borderBottomStyle',
                'borderBottomWidth',
                'borderImageOutset',
                'borderImageRepeat',
                'borderImageSlice',
                'borderImageSource',
                'borderImageWidth',
                'borderLeftColor',
                'borderLeftStyle',
                'borderLeftWidth',
                'borderRightColor',
                'borderRightStyle',
                'borderRightWidth',
                'borderTopColor',
                'borderTopStyle',
                'borderTopWidth',
              ],
              borderBlockEnd: [
                'borderBlockEndColor',
                'borderBlockEndStyle',
                'borderBlockEndWidth',
              ],
              borderBlockStart: [
                'borderBlockStartColor',
                'borderBlockStartStyle',
                'borderBlockStartWidth',
              ],
              borderBottom: [
                'borderBottomColor',
                'borderBottomStyle',
                'borderBottomWidth',
              ],
              borderColor: [
                'borderBottomColor',
                'borderLeftColor',
                'borderRightColor',
                'borderTopColor',
              ],
              borderImage: [
                'borderImageOutset',
                'borderImageRepeat',
                'borderImageSlice',
                'borderImageSource',
                'borderImageWidth',
              ],
              borderInlineEnd: [
                'borderInlineEndColor',
                'borderInlineEndStyle',
                'borderInlineEndWidth',
              ],
              borderInlineStart: [
                'borderInlineStartColor',
                'borderInlineStartStyle',
                'borderInlineStartWidth',
              ],
              borderLeft: [
                'borderLeftColor',
                'borderLeftStyle',
                'borderLeftWidth',
              ],
              borderRadius: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
                'borderTopLeftRadius',
                'borderTopRightRadius',
              ],
              borderRight: [
                'borderRightColor',
                'borderRightStyle',
                'borderRightWidth',
              ],
              borderStyle: [
                'borderBottomStyle',
                'borderLeftStyle',
                'borderRightStyle',
                'borderTopStyle',
              ],
              borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
              borderWidth: [
                'borderBottomWidth',
                'borderLeftWidth',
                'borderRightWidth',
                'borderTopWidth',
              ],
              columnRule: [
                'columnRuleColor',
                'columnRuleStyle',
                'columnRuleWidth',
              ],
              columns: ['columnCount', 'columnWidth'],
              flex: ['flexBasis', 'flexGrow', 'flexShrink'],
              flexFlow: ['flexDirection', 'flexWrap'],
              font: [
                'fontFamily',
                'fontFeatureSettings',
                'fontKerning',
                'fontLanguageOverride',
                'fontSize',
                'fontSizeAdjust',
                'fontStretch',
                'fontStyle',
                'fontVariant',
                'fontVariantAlternates',
                'fontVariantCaps',
                'fontVariantEastAsian',
                'fontVariantLigatures',
                'fontVariantNumeric',
                'fontVariantPosition',
                'fontWeight',
                'lineHeight',
              ],
              fontVariant: [
                'fontVariantAlternates',
                'fontVariantCaps',
                'fontVariantEastAsian',
                'fontVariantLigatures',
                'fontVariantNumeric',
                'fontVariantPosition',
              ],
              gap: ['columnGap', 'rowGap'],
              grid: [
                'gridAutoColumns',
                'gridAutoFlow',
                'gridAutoRows',
                'gridTemplateAreas',
                'gridTemplateColumns',
                'gridTemplateRows',
              ],
              gridArea: [
                'gridColumnEnd',
                'gridColumnStart',
                'gridRowEnd',
                'gridRowStart',
              ],
              gridColumn: ['gridColumnEnd', 'gridColumnStart'],
              gridColumnGap: ['columnGap'],
              gridGap: ['columnGap', 'rowGap'],
              gridRow: ['gridRowEnd', 'gridRowStart'],
              gridRowGap: ['rowGap'],
              gridTemplate: [
                'gridTemplateAreas',
                'gridTemplateColumns',
                'gridTemplateRows',
              ],
              listStyle: [
                'listStyleImage',
                'listStylePosition',
                'listStyleType',
              ],
              margin: [
                'marginBottom',
                'marginLeft',
                'marginRight',
                'marginTop',
              ],
              marker: ['markerEnd', 'markerMid', 'markerStart'],
              mask: [
                'maskClip',
                'maskComposite',
                'maskImage',
                'maskMode',
                'maskOrigin',
                'maskPositionX',
                'maskPositionY',
                'maskRepeat',
                'maskSize',
              ],
              maskPosition: ['maskPositionX', 'maskPositionY'],
              outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
              overflow: ['overflowX', 'overflowY'],
              padding: [
                'paddingBottom',
                'paddingLeft',
                'paddingRight',
                'paddingTop',
              ],
              placeContent: ['alignContent', 'justifyContent'],
              placeItems: ['alignItems', 'justifyItems'],
              placeSelf: ['alignSelf', 'justifySelf'],
              textDecoration: [
                'textDecorationColor',
                'textDecorationLine',
                'textDecorationStyle',
              ],
              textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
              transition: [
                'transitionDelay',
                'transitionDuration',
                'transitionProperty',
                'transitionTimingFunction',
              ],
              wordWrap: ['overflowWrap'],
            },
            pu = {
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
              strokeWidth: !0,
            }
          function tv(e, t) {
            return e + t.charAt(0).toUpperCase() + t.substring(1)
          }
          var nv = ['Webkit', 'ms', 'Moz', 'O']
          Object.keys(pu).forEach(function (e) {
            nv.forEach(function (t) {
              pu[tv(t, e)] = pu[e]
            })
          })
          function Us(e, t, a) {
            var i = t == null || typeof t == 'boolean' || t === ''
            return i
              ? ''
              : !a &&
                typeof t == 'number' &&
                t !== 0 &&
                !(pu.hasOwnProperty(e) && pu[e])
              ? t + 'px'
              : (Aa(t, e), ('' + t).trim())
          }
          var vu = /([A-Z])/g,
            Xm = /^ms-/
          function qm(e) {
            return e.replace(vu, '-$1').toLowerCase().replace(Xm, '-ms-')
          }
          var rv = function () {}
          {
            var av = /^(?:webkit|moz|o)[A-Z]/,
              iv = /^-ms-/,
              So = /-(.)/g,
              hu = /;\s*$/,
              mu = {},
              yu = {},
              lv = !1,
              Lf = !1,
              Mf = function (e) {
                return e.replace(So, function (t, a) {
                  return a.toUpperCase()
                })
              },
              Nf = function (e) {
                ;(mu.hasOwnProperty(e) && mu[e]) ||
                  ((mu[e] = !0),
                  m(
                    'Unsupported style property %s. Did you mean %s?',
                    e,
                    // As Andi Smith suggests
                    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
                    // is converted to lowercase `ms`.
                    Mf(e.replace(iv, 'ms-'))
                  ))
              },
              uv = function (e) {
                ;(mu.hasOwnProperty(e) && mu[e]) ||
                  ((mu[e] = !0),
                  m(
                    'Unsupported vendor-prefixed style property %s. Did you mean %s?',
                    e,
                    e.charAt(0).toUpperCase() + e.slice(1)
                  ))
              },
              ov = function (e, t) {
                ;(yu.hasOwnProperty(t) && yu[t]) ||
                  ((yu[t] = !0),
                  m(
                    `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                    e,
                    t.replace(hu, '')
                  ))
              },
              sv = function (e, t) {
                lv ||
                  ((lv = !0),
                  m(
                    '`NaN` is an invalid value for the `%s` css style property.',
                    e
                  ))
              },
              Km = function (e, t) {
                Lf ||
                  ((Lf = !0),
                  m(
                    '`Infinity` is an invalid value for the `%s` css style property.',
                    e
                  ))
              }
            rv = function (e, t) {
              e.indexOf('-') > -1
                ? Nf(e)
                : av.test(e)
                ? uv(e)
                : hu.test(t) && ov(e, t),
                typeof t == 'number' &&
                  (isNaN(t) ? sv(e, t) : isFinite(t) || Km(e, t))
            }
          }
          var Zm = rv
          function Jm(e) {
            {
              var t = '',
                a = ''
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var u = e[i]
                  if (u != null) {
                    var s = i.indexOf('--') === 0
                    ;(t += a + (s ? i : qm(i)) + ':'),
                      (t += Us(i, u, s)),
                      (a = ';')
                  }
                }
              return t || null
            }
          }
          function cv(e, t) {
            var a = e.style
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                var u = i.indexOf('--') === 0
                u || Zm(i, t[i])
                var s = Us(i, t[i], u)
                i === 'float' && (i = 'cssFloat'),
                  u ? a.setProperty(i, s) : (a[i] = s)
              }
          }
          function ey(e) {
            return e == null || typeof e == 'boolean' || e === ''
          }
          function ta(e) {
            var t = {}
            for (var a in e)
              for (var i = ev[a] || [a], u = 0; u < i.length; u++) t[i[u]] = a
            return t
          }
          function xo(e, t) {
            {
              if (!t) return
              var a = ta(e),
                i = ta(t),
                u = {}
              for (var s in a) {
                var f = a[s],
                  p = i[s]
                if (p && f !== p) {
                  var v = f + ',' + p
                  if (u[v]) continue
                  ;(u[v] = !0),
                    m(
                      "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                      ey(e[f]) ? 'Removing' : 'Updating',
                      f,
                      p
                    )
                }
              }
            }
          }
          var fv = {
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
              wbr: !0,
              // NOTE: menuitem's close tag should be omitted, but that causes problems.
            },
            dv = ut(
              {
                menuitem: !0,
              },
              fv
            ),
            pv = '__html'
          function Os(e, t) {
            if (t) {
              if (
                dv[e] &&
                (t.children != null || t.dangerouslySetInnerHTML != null)
              )
                throw new Error(
                  e +
                    ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
                )
              if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                  throw new Error(
                    'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
                  )
                if (
                  typeof t.dangerouslySetInnerHTML != 'object' ||
                  !(pv in t.dangerouslySetInnerHTML)
                )
                  throw new Error(
                    '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
                  )
              }
              if (
                (!t.suppressContentEditableWarning &&
                  t.contentEditable &&
                  t.children != null &&
                  m(
                    'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
                  ),
                t.style != null && typeof t.style != 'object')
              )
                throw new Error(
                  "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
                )
            }
          }
          function ai(e, t) {
            if (e.indexOf('-') === -1) return typeof t.is == 'string'
            switch (e) {
              case 'annotation-xml':
              case 'color-profile':
              case 'font-face':
              case 'font-face-src':
              case 'font-face-uri':
              case 'font-face-format':
              case 'font-face-name':
              case 'missing-glyph':
                return !1
              default:
                return !0
            }
          }
          var As = {
              // HTML
              accept: 'accept',
              acceptcharset: 'acceptCharset',
              'accept-charset': 'acceptCharset',
              accesskey: 'accessKey',
              action: 'action',
              allowfullscreen: 'allowFullScreen',
              alt: 'alt',
              as: 'as',
              async: 'async',
              autocapitalize: 'autoCapitalize',
              autocomplete: 'autoComplete',
              autocorrect: 'autoCorrect',
              autofocus: 'autoFocus',
              autoplay: 'autoPlay',
              autosave: 'autoSave',
              capture: 'capture',
              cellpadding: 'cellPadding',
              cellspacing: 'cellSpacing',
              challenge: 'challenge',
              charset: 'charSet',
              checked: 'checked',
              children: 'children',
              cite: 'cite',
              class: 'className',
              classid: 'classID',
              classname: 'className',
              cols: 'cols',
              colspan: 'colSpan',
              content: 'content',
              contenteditable: 'contentEditable',
              contextmenu: 'contextMenu',
              controls: 'controls',
              controlslist: 'controlsList',
              coords: 'coords',
              crossorigin: 'crossOrigin',
              dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
              data: 'data',
              datetime: 'dateTime',
              default: 'default',
              defaultchecked: 'defaultChecked',
              defaultvalue: 'defaultValue',
              defer: 'defer',
              dir: 'dir',
              disabled: 'disabled',
              disablepictureinpicture: 'disablePictureInPicture',
              disableremoteplayback: 'disableRemotePlayback',
              download: 'download',
              draggable: 'draggable',
              enctype: 'encType',
              enterkeyhint: 'enterKeyHint',
              for: 'htmlFor',
              form: 'form',
              formmethod: 'formMethod',
              formaction: 'formAction',
              formenctype: 'formEncType',
              formnovalidate: 'formNoValidate',
              formtarget: 'formTarget',
              frameborder: 'frameBorder',
              headers: 'headers',
              height: 'height',
              hidden: 'hidden',
              high: 'high',
              href: 'href',
              hreflang: 'hrefLang',
              htmlfor: 'htmlFor',
              httpequiv: 'httpEquiv',
              'http-equiv': 'httpEquiv',
              icon: 'icon',
              id: 'id',
              imagesizes: 'imageSizes',
              imagesrcset: 'imageSrcSet',
              innerhtml: 'innerHTML',
              inputmode: 'inputMode',
              integrity: 'integrity',
              is: 'is',
              itemid: 'itemID',
              itemprop: 'itemProp',
              itemref: 'itemRef',
              itemscope: 'itemScope',
              itemtype: 'itemType',
              keyparams: 'keyParams',
              keytype: 'keyType',
              kind: 'kind',
              label: 'label',
              lang: 'lang',
              list: 'list',
              loop: 'loop',
              low: 'low',
              manifest: 'manifest',
              marginwidth: 'marginWidth',
              marginheight: 'marginHeight',
              max: 'max',
              maxlength: 'maxLength',
              media: 'media',
              mediagroup: 'mediaGroup',
              method: 'method',
              min: 'min',
              minlength: 'minLength',
              multiple: 'multiple',
              muted: 'muted',
              name: 'name',
              nomodule: 'noModule',
              nonce: 'nonce',
              novalidate: 'noValidate',
              open: 'open',
              optimum: 'optimum',
              pattern: 'pattern',
              placeholder: 'placeholder',
              playsinline: 'playsInline',
              poster: 'poster',
              preload: 'preload',
              profile: 'profile',
              radiogroup: 'radioGroup',
              readonly: 'readOnly',
              referrerpolicy: 'referrerPolicy',
              rel: 'rel',
              required: 'required',
              reversed: 'reversed',
              role: 'role',
              rows: 'rows',
              rowspan: 'rowSpan',
              sandbox: 'sandbox',
              scope: 'scope',
              scoped: 'scoped',
              scrolling: 'scrolling',
              seamless: 'seamless',
              selected: 'selected',
              shape: 'shape',
              size: 'size',
              sizes: 'sizes',
              span: 'span',
              spellcheck: 'spellCheck',
              src: 'src',
              srcdoc: 'srcDoc',
              srclang: 'srcLang',
              srcset: 'srcSet',
              start: 'start',
              step: 'step',
              style: 'style',
              summary: 'summary',
              tabindex: 'tabIndex',
              target: 'target',
              title: 'title',
              type: 'type',
              usemap: 'useMap',
              value: 'value',
              width: 'width',
              wmode: 'wmode',
              wrap: 'wrap',
              // SVG
              about: 'about',
              accentheight: 'accentHeight',
              'accent-height': 'accentHeight',
              accumulate: 'accumulate',
              additive: 'additive',
              alignmentbaseline: 'alignmentBaseline',
              'alignment-baseline': 'alignmentBaseline',
              allowreorder: 'allowReorder',
              alphabetic: 'alphabetic',
              amplitude: 'amplitude',
              arabicform: 'arabicForm',
              'arabic-form': 'arabicForm',
              ascent: 'ascent',
              attributename: 'attributeName',
              attributetype: 'attributeType',
              autoreverse: 'autoReverse',
              azimuth: 'azimuth',
              basefrequency: 'baseFrequency',
              baselineshift: 'baselineShift',
              'baseline-shift': 'baselineShift',
              baseprofile: 'baseProfile',
              bbox: 'bbox',
              begin: 'begin',
              bias: 'bias',
              by: 'by',
              calcmode: 'calcMode',
              capheight: 'capHeight',
              'cap-height': 'capHeight',
              clip: 'clip',
              clippath: 'clipPath',
              'clip-path': 'clipPath',
              clippathunits: 'clipPathUnits',
              cliprule: 'clipRule',
              'clip-rule': 'clipRule',
              color: 'color',
              colorinterpolation: 'colorInterpolation',
              'color-interpolation': 'colorInterpolation',
              colorinterpolationfilters: 'colorInterpolationFilters',
              'color-interpolation-filters': 'colorInterpolationFilters',
              colorprofile: 'colorProfile',
              'color-profile': 'colorProfile',
              colorrendering: 'colorRendering',
              'color-rendering': 'colorRendering',
              contentscripttype: 'contentScriptType',
              contentstyletype: 'contentStyleType',
              cursor: 'cursor',
              cx: 'cx',
              cy: 'cy',
              d: 'd',
              datatype: 'datatype',
              decelerate: 'decelerate',
              descent: 'descent',
              diffuseconstant: 'diffuseConstant',
              direction: 'direction',
              display: 'display',
              divisor: 'divisor',
              dominantbaseline: 'dominantBaseline',
              'dominant-baseline': 'dominantBaseline',
              dur: 'dur',
              dx: 'dx',
              dy: 'dy',
              edgemode: 'edgeMode',
              elevation: 'elevation',
              enablebackground: 'enableBackground',
              'enable-background': 'enableBackground',
              end: 'end',
              exponent: 'exponent',
              externalresourcesrequired: 'externalResourcesRequired',
              fill: 'fill',
              fillopacity: 'fillOpacity',
              'fill-opacity': 'fillOpacity',
              fillrule: 'fillRule',
              'fill-rule': 'fillRule',
              filter: 'filter',
              filterres: 'filterRes',
              filterunits: 'filterUnits',
              floodopacity: 'floodOpacity',
              'flood-opacity': 'floodOpacity',
              floodcolor: 'floodColor',
              'flood-color': 'floodColor',
              focusable: 'focusable',
              fontfamily: 'fontFamily',
              'font-family': 'fontFamily',
              fontsize: 'fontSize',
              'font-size': 'fontSize',
              fontsizeadjust: 'fontSizeAdjust',
              'font-size-adjust': 'fontSizeAdjust',
              fontstretch: 'fontStretch',
              'font-stretch': 'fontStretch',
              fontstyle: 'fontStyle',
              'font-style': 'fontStyle',
              fontvariant: 'fontVariant',
              'font-variant': 'fontVariant',
              fontweight: 'fontWeight',
              'font-weight': 'fontWeight',
              format: 'format',
              from: 'from',
              fx: 'fx',
              fy: 'fy',
              g1: 'g1',
              g2: 'g2',
              glyphname: 'glyphName',
              'glyph-name': 'glyphName',
              glyphorientationhorizontal: 'glyphOrientationHorizontal',
              'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
              glyphorientationvertical: 'glyphOrientationVertical',
              'glyph-orientation-vertical': 'glyphOrientationVertical',
              glyphref: 'glyphRef',
              gradienttransform: 'gradientTransform',
              gradientunits: 'gradientUnits',
              hanging: 'hanging',
              horizadvx: 'horizAdvX',
              'horiz-adv-x': 'horizAdvX',
              horizoriginx: 'horizOriginX',
              'horiz-origin-x': 'horizOriginX',
              ideographic: 'ideographic',
              imagerendering: 'imageRendering',
              'image-rendering': 'imageRendering',
              in2: 'in2',
              in: 'in',
              inlist: 'inlist',
              intercept: 'intercept',
              k1: 'k1',
              k2: 'k2',
              k3: 'k3',
              k4: 'k4',
              k: 'k',
              kernelmatrix: 'kernelMatrix',
              kernelunitlength: 'kernelUnitLength',
              kerning: 'kerning',
              keypoints: 'keyPoints',
              keysplines: 'keySplines',
              keytimes: 'keyTimes',
              lengthadjust: 'lengthAdjust',
              letterspacing: 'letterSpacing',
              'letter-spacing': 'letterSpacing',
              lightingcolor: 'lightingColor',
              'lighting-color': 'lightingColor',
              limitingconeangle: 'limitingConeAngle',
              local: 'local',
              markerend: 'markerEnd',
              'marker-end': 'markerEnd',
              markerheight: 'markerHeight',
              markermid: 'markerMid',
              'marker-mid': 'markerMid',
              markerstart: 'markerStart',
              'marker-start': 'markerStart',
              markerunits: 'markerUnits',
              markerwidth: 'markerWidth',
              mask: 'mask',
              maskcontentunits: 'maskContentUnits',
              maskunits: 'maskUnits',
              mathematical: 'mathematical',
              mode: 'mode',
              numoctaves: 'numOctaves',
              offset: 'offset',
              opacity: 'opacity',
              operator: 'operator',
              order: 'order',
              orient: 'orient',
              orientation: 'orientation',
              origin: 'origin',
              overflow: 'overflow',
              overlineposition: 'overlinePosition',
              'overline-position': 'overlinePosition',
              overlinethickness: 'overlineThickness',
              'overline-thickness': 'overlineThickness',
              paintorder: 'paintOrder',
              'paint-order': 'paintOrder',
              panose1: 'panose1',
              'panose-1': 'panose1',
              pathlength: 'pathLength',
              patterncontentunits: 'patternContentUnits',
              patterntransform: 'patternTransform',
              patternunits: 'patternUnits',
              pointerevents: 'pointerEvents',
              'pointer-events': 'pointerEvents',
              points: 'points',
              pointsatx: 'pointsAtX',
              pointsaty: 'pointsAtY',
              pointsatz: 'pointsAtZ',
              prefix: 'prefix',
              preservealpha: 'preserveAlpha',
              preserveaspectratio: 'preserveAspectRatio',
              primitiveunits: 'primitiveUnits',
              property: 'property',
              r: 'r',
              radius: 'radius',
              refx: 'refX',
              refy: 'refY',
              renderingintent: 'renderingIntent',
              'rendering-intent': 'renderingIntent',
              repeatcount: 'repeatCount',
              repeatdur: 'repeatDur',
              requiredextensions: 'requiredExtensions',
              requiredfeatures: 'requiredFeatures',
              resource: 'resource',
              restart: 'restart',
              result: 'result',
              results: 'results',
              rotate: 'rotate',
              rx: 'rx',
              ry: 'ry',
              scale: 'scale',
              security: 'security',
              seed: 'seed',
              shaperendering: 'shapeRendering',
              'shape-rendering': 'shapeRendering',
              slope: 'slope',
              spacing: 'spacing',
              specularconstant: 'specularConstant',
              specularexponent: 'specularExponent',
              speed: 'speed',
              spreadmethod: 'spreadMethod',
              startoffset: 'startOffset',
              stddeviation: 'stdDeviation',
              stemh: 'stemh',
              stemv: 'stemv',
              stitchtiles: 'stitchTiles',
              stopcolor: 'stopColor',
              'stop-color': 'stopColor',
              stopopacity: 'stopOpacity',
              'stop-opacity': 'stopOpacity',
              strikethroughposition: 'strikethroughPosition',
              'strikethrough-position': 'strikethroughPosition',
              strikethroughthickness: 'strikethroughThickness',
              'strikethrough-thickness': 'strikethroughThickness',
              string: 'string',
              stroke: 'stroke',
              strokedasharray: 'strokeDasharray',
              'stroke-dasharray': 'strokeDasharray',
              strokedashoffset: 'strokeDashoffset',
              'stroke-dashoffset': 'strokeDashoffset',
              strokelinecap: 'strokeLinecap',
              'stroke-linecap': 'strokeLinecap',
              strokelinejoin: 'strokeLinejoin',
              'stroke-linejoin': 'strokeLinejoin',
              strokemiterlimit: 'strokeMiterlimit',
              'stroke-miterlimit': 'strokeMiterlimit',
              strokewidth: 'strokeWidth',
              'stroke-width': 'strokeWidth',
              strokeopacity: 'strokeOpacity',
              'stroke-opacity': 'strokeOpacity',
              suppresscontenteditablewarning: 'suppressContentEditableWarning',
              suppresshydrationwarning: 'suppressHydrationWarning',
              surfacescale: 'surfaceScale',
              systemlanguage: 'systemLanguage',
              tablevalues: 'tableValues',
              targetx: 'targetX',
              targety: 'targetY',
              textanchor: 'textAnchor',
              'text-anchor': 'textAnchor',
              textdecoration: 'textDecoration',
              'text-decoration': 'textDecoration',
              textlength: 'textLength',
              textrendering: 'textRendering',
              'text-rendering': 'textRendering',
              to: 'to',
              transform: 'transform',
              typeof: 'typeof',
              u1: 'u1',
              u2: 'u2',
              underlineposition: 'underlinePosition',
              'underline-position': 'underlinePosition',
              underlinethickness: 'underlineThickness',
              'underline-thickness': 'underlineThickness',
              unicode: 'unicode',
              unicodebidi: 'unicodeBidi',
              'unicode-bidi': 'unicodeBidi',
              unicoderange: 'unicodeRange',
              'unicode-range': 'unicodeRange',
              unitsperem: 'unitsPerEm',
              'units-per-em': 'unitsPerEm',
              unselectable: 'unselectable',
              valphabetic: 'vAlphabetic',
              'v-alphabetic': 'vAlphabetic',
              values: 'values',
              vectoreffect: 'vectorEffect',
              'vector-effect': 'vectorEffect',
              version: 'version',
              vertadvy: 'vertAdvY',
              'vert-adv-y': 'vertAdvY',
              vertoriginx: 'vertOriginX',
              'vert-origin-x': 'vertOriginX',
              vertoriginy: 'vertOriginY',
              'vert-origin-y': 'vertOriginY',
              vhanging: 'vHanging',
              'v-hanging': 'vHanging',
              videographic: 'vIdeographic',
              'v-ideographic': 'vIdeographic',
              viewbox: 'viewBox',
              viewtarget: 'viewTarget',
              visibility: 'visibility',
              vmathematical: 'vMathematical',
              'v-mathematical': 'vMathematical',
              vocab: 'vocab',
              widths: 'widths',
              wordspacing: 'wordSpacing',
              'word-spacing': 'wordSpacing',
              writingmode: 'writingMode',
              'writing-mode': 'writingMode',
              x1: 'x1',
              x2: 'x2',
              x: 'x',
              xchannelselector: 'xChannelSelector',
              xheight: 'xHeight',
              'x-height': 'xHeight',
              xlinkactuate: 'xlinkActuate',
              'xlink:actuate': 'xlinkActuate',
              xlinkarcrole: 'xlinkArcrole',
              'xlink:arcrole': 'xlinkArcrole',
              xlinkhref: 'xlinkHref',
              'xlink:href': 'xlinkHref',
              xlinkrole: 'xlinkRole',
              'xlink:role': 'xlinkRole',
              xlinkshow: 'xlinkShow',
              'xlink:show': 'xlinkShow',
              xlinktitle: 'xlinkTitle',
              'xlink:title': 'xlinkTitle',
              xlinktype: 'xlinkType',
              'xlink:type': 'xlinkType',
              xmlbase: 'xmlBase',
              'xml:base': 'xmlBase',
              xmllang: 'xmlLang',
              'xml:lang': 'xmlLang',
              xmlns: 'xmlns',
              'xml:space': 'xmlSpace',
              xmlnsxlink: 'xmlnsXlink',
              'xmlns:xlink': 'xmlnsXlink',
              xmlspace: 'xmlSpace',
              y1: 'y1',
              y2: 'y2',
              y: 'y',
              ychannelselector: 'yChannelSelector',
              z: 'z',
              zoomandpan: 'zoomAndPan',
            },
            vv = {
              'aria-current': 0,
              // state
              'aria-description': 0,
              'aria-details': 0,
              'aria-disabled': 0,
              // state
              'aria-hidden': 0,
              // state
              'aria-invalid': 0,
              // state
              'aria-keyshortcuts': 0,
              'aria-label': 0,
              'aria-roledescription': 0,
              // Widget Attributes
              'aria-autocomplete': 0,
              'aria-checked': 0,
              'aria-expanded': 0,
              'aria-haspopup': 0,
              'aria-level': 0,
              'aria-modal': 0,
              'aria-multiline': 0,
              'aria-multiselectable': 0,
              'aria-orientation': 0,
              'aria-placeholder': 0,
              'aria-pressed': 0,
              'aria-readonly': 0,
              'aria-required': 0,
              'aria-selected': 0,
              'aria-sort': 0,
              'aria-valuemax': 0,
              'aria-valuemin': 0,
              'aria-valuenow': 0,
              'aria-valuetext': 0,
              // Live Region Attributes
              'aria-atomic': 0,
              'aria-busy': 0,
              'aria-live': 0,
              'aria-relevant': 0,
              // Drag-and-Drop Attributes
              'aria-dropeffect': 0,
              'aria-grabbed': 0,
              // Relationship Attributes
              'aria-activedescendant': 0,
              'aria-colcount': 0,
              'aria-colindex': 0,
              'aria-colspan': 0,
              'aria-controls': 0,
              'aria-describedby': 0,
              'aria-errormessage': 0,
              'aria-flowto': 0,
              'aria-labelledby': 0,
              'aria-owns': 0,
              'aria-posinset': 0,
              'aria-rowcount': 0,
              'aria-rowindex': 0,
              'aria-rowspan': 0,
              'aria-setsize': 0,
            },
            _a = {},
            zf = new RegExp('^(aria)-[' + Le + ']*$'),
            Co = new RegExp('^(aria)[A-Z][' + Le + ']*$')
          function Uf(e, t) {
            {
              if (bn.call(_a, t) && _a[t]) return !0
              if (Co.test(t)) {
                var a = 'aria-' + t.slice(4).toLowerCase(),
                  i = vv.hasOwnProperty(a) ? a : null
                if (i == null)
                  return (
                    m(
                      'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
                      t
                    ),
                    (_a[t] = !0),
                    !0
                  )
                if (t !== i)
                  return (
                    m('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, i),
                    (_a[t] = !0),
                    !0
                  )
              }
              if (zf.test(t)) {
                var u = t.toLowerCase(),
                  s = vv.hasOwnProperty(u) ? u : null
                if (s == null) return (_a[t] = !0), !1
                if (t !== s)
                  return (
                    m('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, s),
                    (_a[t] = !0),
                    !0
                  )
              }
            }
            return !0
          }
          function hv(e, t) {
            {
              var a = []
              for (var i in t) {
                var u = Uf(e, i)
                u || a.push(i)
              }
              var s = a
                .map(function (f) {
                  return '`' + f + '`'
                })
                .join(', ')
              a.length === 1
                ? m(
                    'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
                    s,
                    e
                  )
                : a.length > 1 &&
                  m(
                    'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
                    s,
                    e
                  )
            }
          }
          function js(e, t) {
            ai(e, t) || hv(e, t)
          }
          var Sl = !1
          function Of(e, t) {
            {
              if (e !== 'input' && e !== 'textarea' && e !== 'select') return
              t != null &&
                t.value === null &&
                !Sl &&
                ((Sl = !0),
                e === 'select' && t.multiple
                  ? m(
                      '`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
                      e
                    )
                  : m(
                      '`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
                      e
                    ))
            }
          }
          var Af = function () {}
          {
            var Ln = {},
              jf = /^on./,
              mv = /^on[^A-Z]/,
              yv = new RegExp('^(aria)-[' + Le + ']*$'),
              gv = new RegExp('^(aria)[A-Z][' + Le + ']*$')
            Af = function (e, t, a, i) {
              if (bn.call(Ln, t) && Ln[t]) return !0
              var u = t.toLowerCase()
              if (u === 'onfocusin' || u === 'onfocusout')
                return (
                  m(
                    'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
                  ),
                  (Ln[t] = !0),
                  !0
                )
              if (i != null) {
                var s = i.registrationNameDependencies,
                  f = i.possibleRegistrationNames
                if (s.hasOwnProperty(t)) return !0
                var p = f.hasOwnProperty(u) ? f[u] : null
                if (p != null)
                  return (
                    m(
                      'Invalid event handler property `%s`. Did you mean `%s`?',
                      t,
                      p
                    ),
                    (Ln[t] = !0),
                    !0
                  )
                if (jf.test(t))
                  return (
                    m(
                      'Unknown event handler property `%s`. It will be ignored.',
                      t
                    ),
                    (Ln[t] = !0),
                    !0
                  )
              } else if (jf.test(t))
                return (
                  mv.test(t) &&
                    m(
                      'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
                      t
                    ),
                  (Ln[t] = !0),
                  !0
                )
              if (yv.test(t) || gv.test(t)) return !0
              if (u === 'innerhtml')
                return (
                  m(
                    'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
                  ),
                  (Ln[t] = !0),
                  !0
                )
              if (u === 'aria')
                return (
                  m(
                    'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
                  ),
                  (Ln[t] = !0),
                  !0
                )
              if (
                u === 'is' &&
                a !== null &&
                a !== void 0 &&
                typeof a != 'string'
              )
                return (
                  m(
                    'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
                    typeof a
                  ),
                  (Ln[t] = !0),
                  !0
                )
              if (typeof a == 'number' && isNaN(a))
                return (
                  m(
                    'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
                    t
                  ),
                  (Ln[t] = !0),
                  !0
                )
              var v = Ar(t),
                g = v !== null && v.type === ja
              if (As.hasOwnProperty(u)) {
                var S = As[u]
                if (S !== t)
                  return (
                    m('Invalid DOM property `%s`. Did you mean `%s`?', t, S),
                    (Ln[t] = !0),
                    !0
                  )
              } else if (!g && t !== u)
                return (
                  m(
                    'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
                    t,
                    u
                  ),
                  (Ln[t] = !0),
                  !0
                )
              return typeof a == 'boolean' && gr(t, a, v, !1)
                ? (a
                    ? m(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                        a,
                        t,
                        t,
                        a,
                        t
                      )
                    : m(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                        a,
                        t,
                        t,
                        a,
                        t,
                        t,
                        t
                      ),
                  (Ln[t] = !0),
                  !0)
                : g
                ? !0
                : gr(t, a, v, !1)
                ? ((Ln[t] = !0), !1)
                : ((a === 'false' || a === 'true') &&
                    v !== null &&
                    v.type === cn &&
                    (m(
                      'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
                      a,
                      t,
                      a === 'false'
                        ? 'The browser will interpret it as a truthy value.'
                        : 'Although this works, it will not work as expected if you pass the string "false".',
                      t,
                      a
                    ),
                    (Ln[t] = !0)),
                  !0)
            }
          }
          var Sv = function (e, t, a) {
            {
              var i = []
              for (var u in t) {
                var s = Af(e, u, t[u], a)
                s || i.push(u)
              }
              var f = i
                .map(function (p) {
                  return '`' + p + '`'
                })
                .join(', ')
              i.length === 1
                ? m(
                    'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
                    f,
                    e
                  )
                : i.length > 1 &&
                  m(
                    'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
                    f,
                    e
                  )
            }
          }
          function xv(e, t, a) {
            ai(e, t) || Sv(e, t, a)
          }
          var ii = 1,
            Eo = 2,
            xl = 4,
            ty = ii | Eo | xl,
            wo = null
          function Ro(e) {
            wo !== null &&
              m(
                'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.'
              ),
              (wo = e)
          }
          function ny() {
            wo === null &&
              m(
                'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.'
              ),
              (wo = null)
          }
          function Cv(e) {
            return e === wo
          }
          function Hs(e) {
            var t = e.target || e.srcElement || window
            return (
              t.correspondingUseElement && (t = t.correspondingUseElement),
              t.nodeType === ri ? t.parentNode : t
            )
          }
          var Nt = null,
            Ai = null,
            li = null
          function gu(e) {
            var t = $u(e)
            if (t) {
              if (typeof Nt != 'function')
                throw new Error(
                  'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
                )
              var a = t.stateNode
              if (a) {
                var i = Ch(a)
                Nt(t.stateNode, t.type, i)
              }
            }
          }
          function Ev(e) {
            Nt = e
          }
          function Fs(e) {
            Ai ? (li ? li.push(e) : (li = [e])) : (Ai = e)
          }
          function To() {
            return Ai !== null || li !== null
          }
          function bo() {
            if (Ai) {
              var e = Ai,
                t = li
              if (((Ai = null), (li = null), gu(e), t))
                for (var a = 0; a < t.length; a++) gu(t[a])
            }
          }
          var Cl = function (e, t) {
              return e(t)
            },
            Hf = function () {},
            Ff = !1
          function ry() {
            var e = To()
            e && (Hf(), bo())
          }
          function Vf(e, t, a) {
            if (Ff) return e(t, a)
            Ff = !0
            try {
              return Cl(e, t, a)
            } finally {
              ;(Ff = !1), ry()
            }
          }
          function Vs(e, t, a) {
            ;(Cl = e), (Hf = a)
          }
          function Bs(e) {
            return (
              e === 'button' ||
              e === 'input' ||
              e === 'select' ||
              e === 'textarea'
            )
          }
          function Bf(e, t, a) {
            switch (e) {
              case 'onClick':
              case 'onClickCapture':
              case 'onDoubleClick':
              case 'onDoubleClickCapture':
              case 'onMouseDown':
              case 'onMouseDownCapture':
              case 'onMouseMove':
              case 'onMouseMoveCapture':
              case 'onMouseUp':
              case 'onMouseUpCapture':
              case 'onMouseEnter':
                return !!(a.disabled && Bs(t))
              default:
                return !1
            }
          }
          function El(e, t) {
            var a = e.stateNode
            if (a === null) return null
            var i = Ch(a)
            if (i === null) return null
            var u = i[t]
            if (Bf(t, e.type, i)) return null
            if (u && typeof u != 'function')
              throw new Error(
                'Expected `' +
                  t +
                  '` listener to be a function, instead got a value of `' +
                  typeof u +
                  '` type.'
              )
            return u
          }
          var ko = !1
          if (sn)
            try {
              var wl = {}
              Object.defineProperty(wl, 'passive', {
                get: function () {
                  ko = !0
                },
              }),
                window.addEventListener('test', wl, wl),
                window.removeEventListener('test', wl, wl)
            } catch {
              ko = !1
            }
          function wv(e, t, a, i, u, s, f, p, v) {
            var g = Array.prototype.slice.call(arguments, 3)
            try {
              t.apply(a, g)
            } catch (S) {
              this.onError(S)
            }
          }
          var Pf = wv
          if (
            typeof window < 'u' &&
            typeof window.dispatchEvent == 'function' &&
            typeof document < 'u' &&
            typeof document.createEvent == 'function'
          ) {
            var Yf = document.createElement('react')
            Pf = function (t, a, i, u, s, f, p, v, g) {
              if (typeof document > 'u' || document === null)
                throw new Error(
                  'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
                )
              var S = document.createEvent('Event'),
                k = !1,
                T = !0,
                O = window.event,
                j = Object.getOwnPropertyDescriptor(window, 'event')
              function P() {
                Yf.removeEventListener(Y, ze, !1),
                  typeof window.event < 'u' &&
                    window.hasOwnProperty('event') &&
                    (window.event = O)
              }
              var he = Array.prototype.slice.call(arguments, 3)
              function ze() {
                ;(k = !0), P(), a.apply(i, he), (T = !1)
              }
              var ke,
                vt = !1,
                st = !1
              function M(N) {
                if (
                  ((ke = N.error),
                  (vt = !0),
                  ke === null && N.colno === 0 && N.lineno === 0 && (st = !0),
                  N.defaultPrevented && ke != null && typeof ke == 'object')
                )
                  try {
                    ke._suppressLogging = !0
                  } catch {}
              }
              var Y = 'react-' + (t || 'invokeguardedcallback')
              if (
                (window.addEventListener('error', M),
                Yf.addEventListener(Y, ze, !1),
                S.initEvent(Y, !1, !1),
                Yf.dispatchEvent(S),
                j && Object.defineProperty(window, 'event', j),
                k &&
                  T &&
                  (vt
                    ? st &&
                      (ke = new Error(
                        "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
                      ))
                    : (ke = new Error(
                        `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
                      )),
                  this.onError(ke)),
                window.removeEventListener('error', M),
                !k)
              )
                return P(), wv.apply(this, arguments)
            }
          }
          var ay = Pf,
            ji = !1,
            La = null,
            Do = !1,
            Hi = null,
            Fa = {
              onError: function (e) {
                ;(ji = !0), (La = e)
              },
            }
          function Rl(e, t, a, i, u, s, f, p, v) {
            ;(ji = !1), (La = null), ay.apply(Fa, arguments)
          }
          function ui(e, t, a, i, u, s, f, p, v) {
            if ((Rl.apply(this, arguments), ji)) {
              var g = If()
              Do || ((Do = !0), (Hi = g))
            }
          }
          function $f() {
            if (Do) {
              var e = Hi
              throw ((Do = !1), (Hi = null), e)
            }
          }
          function iy() {
            return ji
          }
          function If() {
            if (ji) {
              var e = La
              return (ji = !1), (La = null), e
            } else
              throw new Error(
                'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
              )
          }
          function na(e) {
            return e._reactInternals
          }
          function _o(e) {
            return e._reactInternals !== void 0
          }
          function Su(e, t) {
            e._reactInternals = t
          }
          var Me =
              /*                      */
              0,
            Fi =
              /*                */
              1,
            Ft =
              /*                    */
              2,
            qe =
              /*                       */
              4,
            xt =
              /*                */
              16,
            Et =
              /*                 */
              32,
            Va =
              /*                     */
              64,
            Ye =
              /*                   */
              128,
            tn =
              /*            */
              256,
            xr =
              /*                          */
              512,
            ra =
              /*                     */
              1024,
            Wt =
              /*                      */
              2048,
            aa =
              /*                    */
              4096,
            Vi =
              /*                   */
              8192,
            Lo =
              /*             */
              16384,
            Ps = Wt | qe | Va | xr | ra | Lo,
            Rv =
              /*               */
              32767,
            Fr =
              /*                   */
              32768,
            Mn =
              /*                */
              65536,
            Mo =
              /* */
              131072,
            Qf =
              /*                       */
              1048576,
            Wf =
              /*                    */
              2097152,
            Cr =
              /*                 */
              4194304,
            Bi =
              /*                */
              8388608,
            Er =
              /*               */
              16777216,
            Tl =
              /*              */
              33554432,
            xu =
              // TODO: Remove Update flag from before mutation phase by re-landing Visibility
              // flag logic (see #20043)
              qe | ra | 0,
            wr = Ft | qe | xt | Et | xr | aa | Vi,
            Zn = qe | Va | xr | Vi,
            ia = Wt | xt,
            Hn = Cr | Bi | Wf,
            oi = y.ReactCurrentOwner
          function Vr(e) {
            var t = e,
              a = e
            if (e.alternate) for (; t.return; ) t = t.return
            else {
              var i = t
              do
                (t = i),
                  (t.flags & (Ft | aa)) !== Me && (a = t.return),
                  (i = t.return)
              while (i)
            }
            return t.tag === B ? a : null
          }
          function Gf(e) {
            if (e.tag === de) {
              var t = e.memoizedState
              if (t === null) {
                var a = e.alternate
                a !== null && (t = a.memoizedState)
              }
              if (t !== null) return t.dehydrated
            }
            return null
          }
          function Ys(e) {
            return e.tag === B ? e.stateNode.containerInfo : null
          }
          function Xf(e) {
            return Vr(e) === e
          }
          function Br(e) {
            {
              var t = oi.current
              if (t !== null && t.tag === $) {
                var a = t,
                  i = a.stateNode
                i._warnedAboutRefsInRender ||
                  m(
                    '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
                    Xe(a) || 'A component'
                  ),
                  (i._warnedAboutRefsInRender = !0)
              }
            }
            var u = na(e)
            return u ? Vr(u) === u : !1
          }
          function Rr(e) {
            if (Vr(e) !== e)
              throw new Error('Unable to find node on an unmounted component.')
          }
          function Vt(e) {
            var t = e.alternate
            if (!t) {
              var a = Vr(e)
              if (a === null)
                throw new Error(
                  'Unable to find node on an unmounted component.'
                )
              return a !== e ? null : e
            }
            for (var i = e, u = t; ; ) {
              var s = i.return
              if (s === null) break
              var f = s.alternate
              if (f === null) {
                var p = s.return
                if (p !== null) {
                  i = u = p
                  continue
                }
                break
              }
              if (s.child === f.child) {
                for (var v = s.child; v; ) {
                  if (v === i) return Rr(s), e
                  if (v === u) return Rr(s), t
                  v = v.sibling
                }
                throw new Error(
                  'Unable to find node on an unmounted component.'
                )
              }
              if (i.return !== u.return) (i = s), (u = f)
              else {
                for (var g = !1, S = s.child; S; ) {
                  if (S === i) {
                    ;(g = !0), (i = s), (u = f)
                    break
                  }
                  if (S === u) {
                    ;(g = !0), (u = s), (i = f)
                    break
                  }
                  S = S.sibling
                }
                if (!g) {
                  for (S = f.child; S; ) {
                    if (S === i) {
                      ;(g = !0), (i = f), (u = s)
                      break
                    }
                    if (S === u) {
                      ;(g = !0), (u = f), (i = s)
                      break
                    }
                    S = S.sibling
                  }
                  if (!g)
                    throw new Error(
                      'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
                    )
                }
              }
              if (i.alternate !== u)
                throw new Error(
                  "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
                )
            }
            if (i.tag !== B)
              throw new Error('Unable to find node on an unmounted component.')
            return i.stateNode.current === i ? e : t
          }
          function la(e) {
            var t = Vt(e)
            return t !== null ? qf(t) : null
          }
          function qf(e) {
            if (e.tag === K || e.tag === re) return e
            for (var t = e.child; t !== null; ) {
              var a = qf(t)
              if (a !== null) return a
              t = t.sibling
            }
            return null
          }
          function Tv(e) {
            var t = Vt(e)
            return t !== null ? $s(t) : null
          }
          function $s(e) {
            if (e.tag === K || e.tag === re) return e
            for (var t = e.child; t !== null; ) {
              if (t.tag !== W) {
                var a = $s(t)
                if (a !== null) return a
              }
              t = t.sibling
            }
            return null
          }
          var Is = E.unstable_scheduleCallback,
            bv = E.unstable_cancelCallback,
            Qs = E.unstable_shouldYield,
            kv = E.unstable_requestPaint,
            qt = E.unstable_now,
            Kf = E.unstable_getCurrentPriorityLevel,
            Ws = E.unstable_ImmediatePriority,
            Pr = E.unstable_UserBlockingPriority,
            Ba = E.unstable_NormalPriority,
            Gs = E.unstable_LowPriority,
            Pi = E.unstable_IdlePriority,
            Zf = E.unstable_yieldValue,
            Jf = E.unstable_setDisableYieldValue,
            Yi = null,
            Nn = null,
            ae = null,
            ln = !1,
            Fn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u'
          function ed(e) {
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u') return !1
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__
            if (t.isDisabled) return !0
            if (!t.supportsFiber)
              return (
                m(
                  'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools'
                ),
                !0
              )
            try {
              Ct &&
                (e = ut({}, e, {
                  getLaneLabelMap: Ii,
                  injectProfilingHooks: ci,
                })),
                (Yi = t.inject(e)),
                (Nn = t)
            } catch (a) {
              m('React instrumentation encountered an error: %s.', a)
            }
            return !!t.checkDCE
          }
          function Dv(e, t) {
            if (Nn && typeof Nn.onScheduleFiberRoot == 'function')
              try {
                Nn.onScheduleFiberRoot(Yi, e, t)
              } catch (a) {
                ln ||
                  ((ln = !0),
                  m('React instrumentation encountered an error: %s', a))
              }
          }
          function si(e, t) {
            if (Nn && typeof Nn.onCommitFiberRoot == 'function')
              try {
                var a = (e.current.flags & Ye) === Ye
                if (en) {
                  var i
                  switch (t) {
                    case Jn:
                      i = Ws
                      break
                    case Vn:
                      i = Pr
                      break
                    case di:
                      i = Ba
                      break
                    case Vo:
                      i = Pi
                      break
                    default:
                      i = Ba
                      break
                  }
                  Nn.onCommitFiberRoot(Yi, e, i, a)
                }
              } catch (u) {
                ln ||
                  ((ln = !0),
                  m('React instrumentation encountered an error: %s', u))
              }
          }
          function $i(e) {
            if (Nn && typeof Nn.onPostCommitFiberRoot == 'function')
              try {
                Nn.onPostCommitFiberRoot(Yi, e)
              } catch (t) {
                ln ||
                  ((ln = !0),
                  m('React instrumentation encountered an error: %s', t))
              }
          }
          function td(e) {
            if (Nn && typeof Nn.onCommitFiberUnmount == 'function')
              try {
                Nn.onCommitFiberUnmount(Yi, e)
              } catch (t) {
                ln ||
                  ((ln = !0),
                  m('React instrumentation encountered an error: %s', t))
              }
          }
          function Sn(e) {
            if (
              (typeof Zf == 'function' && (Jf(e), x(e)),
              Nn && typeof Nn.setStrictMode == 'function')
            )
              try {
                Nn.setStrictMode(Yi, e)
              } catch (t) {
                ln ||
                  ((ln = !0),
                  m('React instrumentation encountered an error: %s', t))
              }
          }
          function ci(e) {
            ae = e
          }
          function Ii() {
            {
              for (
                var e = /* @__PURE__ */ new Map(), t = 1, a = 0;
                a < Bt;
                a++
              ) {
                var i = ly(t)
                e.set(t, i), (t *= 2)
              }
              return e
            }
          }
          function Xs(e) {
            ae !== null &&
              typeof ae.markCommitStarted == 'function' &&
              ae.markCommitStarted(e)
          }
          function nd() {
            ae !== null &&
              typeof ae.markCommitStopped == 'function' &&
              ae.markCommitStopped()
          }
          function Qi(e) {
            ae !== null &&
              typeof ae.markComponentRenderStarted == 'function' &&
              ae.markComponentRenderStarted(e)
          }
          function bl() {
            ae !== null &&
              typeof ae.markComponentRenderStopped == 'function' &&
              ae.markComponentRenderStopped()
          }
          function _v(e) {
            ae !== null &&
              typeof ae.markComponentPassiveEffectMountStarted == 'function' &&
              ae.markComponentPassiveEffectMountStarted(e)
          }
          function rd() {
            ae !== null &&
              typeof ae.markComponentPassiveEffectMountStopped == 'function' &&
              ae.markComponentPassiveEffectMountStopped()
          }
          function qs(e) {
            ae !== null &&
              typeof ae.markComponentPassiveEffectUnmountStarted ==
                'function' &&
              ae.markComponentPassiveEffectUnmountStarted(e)
          }
          function Lv() {
            ae !== null &&
              typeof ae.markComponentPassiveEffectUnmountStopped ==
                'function' &&
              ae.markComponentPassiveEffectUnmountStopped()
          }
          function Mv(e) {
            ae !== null &&
              typeof ae.markComponentLayoutEffectMountStarted == 'function' &&
              ae.markComponentLayoutEffectMountStarted(e)
          }
          function Nv() {
            ae !== null &&
              typeof ae.markComponentLayoutEffectMountStopped == 'function' &&
              ae.markComponentLayoutEffectMountStopped()
          }
          function Ks(e) {
            ae !== null &&
              typeof ae.markComponentLayoutEffectUnmountStarted == 'function' &&
              ae.markComponentLayoutEffectUnmountStarted(e)
          }
          function Cu() {
            ae !== null &&
              typeof ae.markComponentLayoutEffectUnmountStopped == 'function' &&
              ae.markComponentLayoutEffectUnmountStopped()
          }
          function Zs(e, t, a) {
            ae !== null &&
              typeof ae.markComponentErrored == 'function' &&
              ae.markComponentErrored(e, t, a)
          }
          function zv(e, t, a) {
            ae !== null &&
              typeof ae.markComponentSuspended == 'function' &&
              ae.markComponentSuspended(e, t, a)
          }
          function Uv(e) {
            ae !== null &&
              typeof ae.markLayoutEffectsStarted == 'function' &&
              ae.markLayoutEffectsStarted(e)
          }
          function Eu() {
            ae !== null &&
              typeof ae.markLayoutEffectsStopped == 'function' &&
              ae.markLayoutEffectsStopped()
          }
          function Ov(e) {
            ae !== null &&
              typeof ae.markPassiveEffectsStarted == 'function' &&
              ae.markPassiveEffectsStarted(e)
          }
          function No() {
            ae !== null &&
              typeof ae.markPassiveEffectsStopped == 'function' &&
              ae.markPassiveEffectsStopped()
          }
          function Ma(e) {
            ae !== null &&
              typeof ae.markRenderStarted == 'function' &&
              ae.markRenderStarted(e)
          }
          function zo() {
            ae !== null &&
              typeof ae.markRenderYielded == 'function' &&
              ae.markRenderYielded()
          }
          function wu() {
            ae !== null &&
              typeof ae.markRenderStopped == 'function' &&
              ae.markRenderStopped()
          }
          function kl(e) {
            ae !== null &&
              typeof ae.markRenderScheduled == 'function' &&
              ae.markRenderScheduled(e)
          }
          function ad(e, t) {
            ae !== null &&
              typeof ae.markForceUpdateScheduled == 'function' &&
              ae.markForceUpdateScheduled(e, t)
          }
          function Wi(e, t) {
            ae !== null &&
              typeof ae.markStateUpdateScheduled == 'function' &&
              ae.markStateUpdateScheduled(e, t)
          }
          var Oe =
              /*                         */
              0,
            it =
              /*                 */
              1,
            je =
              /*                    */
              2,
            Kt =
              /*               */
              8,
            ua =
              /*              */
              16,
            Js = Math.clz32 ? Math.clz32 : Dl,
            ec = Math.log,
            id = Math.LN2
          function Dl(e) {
            var t = e >>> 0
            return t === 0 ? 32 : (31 - ((ec(t) / id) | 0)) | 0
          }
          var Bt = 31,
            I =
              /*                        */
              0,
            dt =
              /*                          */
              0,
            Fe =
              /*                        */
              1,
            Pa =
              /*    */
              2,
            Yr =
              /*             */
              4,
            _l =
              /*            */
              8,
            Pt =
              /*                     */
              16,
            Ll =
              /*                */
              32,
            Gi =
              /*                       */
              4194240,
            Ml =
              /*                        */
              64,
            oa =
              /*                        */
              128,
            Tr =
              /*                        */
              256,
            Nl =
              /*                        */
              512,
            Uo =
              /*                        */
              1024,
            Oo =
              /*                        */
              2048,
            tc =
              /*                        */
              4096,
            nc =
              /*                        */
              8192,
            rc =
              /*                        */
              16384,
            ac =
              /*                       */
              32768,
            ic =
              /*                       */
              65536,
            lc =
              /*                       */
              131072,
            uc =
              /*                       */
              262144,
            oc =
              /*                       */
              524288,
            zl =
              /*                       */
              1048576,
            sc =
              /*                       */
              2097152,
            Ul =
              /*                            */
              130023424,
            fi =
              /*                             */
              4194304,
            cc =
              /*                             */
              8388608,
            Ao =
              /*                             */
              16777216,
            fc =
              /*                             */
              33554432,
            dc =
              /*                             */
              67108864,
            ld = fi,
            Ru =
              /*          */
              134217728,
            pc =
              /*                          */
              268435455,
            Tu =
              /*               */
              268435456,
            Xi =
              /*                        */
              536870912,
            br =
              /*                   */
              1073741824
          function ly(e) {
            {
              if (e & Fe) return 'Sync'
              if (e & Pa) return 'InputContinuousHydration'
              if (e & Yr) return 'InputContinuous'
              if (e & _l) return 'DefaultHydration'
              if (e & Pt) return 'Default'
              if (e & Ll) return 'TransitionHydration'
              if (e & Gi) return 'Transition'
              if (e & Ul) return 'Retry'
              if (e & Ru) return 'SelectiveHydration'
              if (e & Tu) return 'IdleHydration'
              if (e & Xi) return 'Idle'
              if (e & br) return 'Offscreen'
            }
          }
          var zt = -1,
            vc = Ml,
            hc = fi
          function bu(e) {
            switch (pn(e)) {
              case Fe:
                return Fe
              case Pa:
                return Pa
              case Yr:
                return Yr
              case _l:
                return _l
              case Pt:
                return Pt
              case Ll:
                return Ll
              case Ml:
              case oa:
              case Tr:
              case Nl:
              case Uo:
              case Oo:
              case tc:
              case nc:
              case rc:
              case ac:
              case ic:
              case lc:
              case uc:
              case oc:
              case zl:
              case sc:
                return e & Gi
              case fi:
              case cc:
              case Ao:
              case fc:
              case dc:
                return e & Ul
              case Ru:
                return Ru
              case Tu:
                return Tu
              case Xi:
                return Xi
              case br:
                return br
              default:
                return (
                  m(
                    'Should have found matching lanes. This is a bug in React.'
                  ),
                  e
                )
            }
          }
          function jo(e, t) {
            var a = e.pendingLanes
            if (a === I) return I
            var i = I,
              u = e.suspendedLanes,
              s = e.pingedLanes,
              f = a & pc
            if (f !== I) {
              var p = f & ~u
              if (p !== I) i = bu(p)
              else {
                var v = f & s
                v !== I && (i = bu(v))
              }
            } else {
              var g = a & ~u
              g !== I ? (i = bu(g)) : s !== I && (i = bu(s))
            }
            if (i === I) return I
            if (
              t !== I &&
              t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
              // bother waiting until the root is complete.
              (t & u) === I
            ) {
              var S = pn(i),
                k = pn(t)
              if (
                // Tests whether the next lane is equal or lower priority than the wip
                // one. This works because the bits decrease in priority as you go left.
                S >= k || // Default priority updates should not interrupt transition updates. The
                // only difference between default updates and transition updates is that
                // default updates do not support refresh transitions.
                (S === Pt && (k & Gi) !== I)
              )
                return t
            }
            ;(i & Yr) !== I && (i |= a & Pt)
            var T = e.entangledLanes
            if (T !== I)
              for (var O = e.entanglements, j = i & T; j > 0; ) {
                var P = qi(j),
                  he = 1 << P
                ;(i |= O[P]), (j &= ~he)
              }
            return i
          }
          function Av(e, t) {
            for (var a = e.eventTimes, i = zt; t > 0; ) {
              var u = qi(t),
                s = 1 << u,
                f = a[u]
              f > i && (i = f), (t &= ~s)
            }
            return i
          }
          function mc(e, t) {
            switch (e) {
              case Fe:
              case Pa:
              case Yr:
                return t + 250
              case _l:
              case Pt:
              case Ll:
              case Ml:
              case oa:
              case Tr:
              case Nl:
              case Uo:
              case Oo:
              case tc:
              case nc:
              case rc:
              case ac:
              case ic:
              case lc:
              case uc:
              case oc:
              case zl:
              case sc:
                return t + 5e3
              case fi:
              case cc:
              case Ao:
              case fc:
              case dc:
                return zt
              case Ru:
              case Tu:
              case Xi:
              case br:
                return zt
              default:
                return (
                  m(
                    'Should have found matching lanes. This is a bug in React.'
                  ),
                  zt
                )
            }
          }
          function uy(e, t) {
            for (
              var a = e.pendingLanes,
                i = e.suspendedLanes,
                u = e.pingedLanes,
                s = e.expirationTimes,
                f = a;
              f > 0;

            ) {
              var p = qi(f),
                v = 1 << p,
                g = s[p]
              g === zt
                ? ((v & i) === I || (v & u) !== I) && (s[p] = mc(v, t))
                : g <= t && (e.expiredLanes |= v),
                (f &= ~v)
            }
          }
          function oy(e) {
            return bu(e.pendingLanes)
          }
          function ud(e) {
            var t = e.pendingLanes & ~br
            return t !== I ? t : t & br ? br : I
          }
          function ku(e) {
            return (e & Fe) !== I
          }
          function Ho(e) {
            return (e & pc) !== I
          }
          function yc(e) {
            return (e & Ul) === e
          }
          function sy(e) {
            var t = Fe | Yr | Pt
            return (e & t) === I
          }
          function jv(e) {
            return (e & Gi) === e
          }
          function Fo(e, t) {
            var a = Pa | Yr | _l | Pt
            return (t & a) !== I
          }
          function Hv(e, t) {
            return (t & e.expiredLanes) !== I
          }
          function od(e) {
            return (e & Gi) !== I
          }
          function sd() {
            var e = vc
            return (vc <<= 1), (vc & Gi) === I && (vc = Ml), e
          }
          function cy() {
            var e = hc
            return (hc <<= 1), (hc & Ul) === I && (hc = fi), e
          }
          function pn(e) {
            return e & -e
          }
          function xn(e) {
            return pn(e)
          }
          function qi(e) {
            return 31 - Js(e)
          }
          function gc(e) {
            return qi(e)
          }
          function kr(e, t) {
            return (e & t) !== I
          }
          function Ol(e, t) {
            return (e & t) === t
          }
          function Ke(e, t) {
            return e | t
          }
          function Du(e, t) {
            return e & ~t
          }
          function cd(e, t) {
            return e & t
          }
          function Fv(e) {
            return e
          }
          function Vv(e, t) {
            return e !== dt && e < t ? e : t
          }
          function Sc(e) {
            for (var t = [], a = 0; a < Bt; a++) t.push(e)
            return t
          }
          function Al(e, t, a) {
            ;(e.pendingLanes |= t),
              t !== Xi && ((e.suspendedLanes = I), (e.pingedLanes = I))
            var i = e.eventTimes,
              u = gc(t)
            i[u] = a
          }
          function fd(e, t) {
            ;(e.suspendedLanes |= t), (e.pingedLanes &= ~t)
            for (var a = e.expirationTimes, i = t; i > 0; ) {
              var u = qi(i),
                s = 1 << u
              ;(a[u] = zt), (i &= ~s)
            }
          }
          function dd(e, t, a) {
            e.pingedLanes |= e.suspendedLanes & t
          }
          function pd(e, t) {
            var a = e.pendingLanes & ~t
            ;(e.pendingLanes = t),
              (e.suspendedLanes = I),
              (e.pingedLanes = I),
              (e.expiredLanes &= t),
              (e.mutableReadLanes &= t),
              (e.entangledLanes &= t)
            for (
              var i = e.entanglements,
                u = e.eventTimes,
                s = e.expirationTimes,
                f = a;
              f > 0;

            ) {
              var p = qi(f),
                v = 1 << p
              ;(i[p] = I), (u[p] = zt), (s[p] = zt), (f &= ~v)
            }
          }
          function _u(e, t) {
            for (
              var a = (e.entangledLanes |= t), i = e.entanglements, u = a;
              u;

            ) {
              var s = qi(u),
                f = 1 << s
              // Is this one of the newly entangled lanes?
              ;(f & t) | // Is this lane transitively entangled with the newly entangled lanes?
                (i[s] & t) && (i[s] |= t),
                (u &= ~f)
            }
          }
          function fy(e, t) {
            var a = pn(t),
              i
            switch (a) {
              case Yr:
                i = Pa
                break
              case Pt:
                i = _l
                break
              case Ml:
              case oa:
              case Tr:
              case Nl:
              case Uo:
              case Oo:
              case tc:
              case nc:
              case rc:
              case ac:
              case ic:
              case lc:
              case uc:
              case oc:
              case zl:
              case sc:
              case fi:
              case cc:
              case Ao:
              case fc:
              case dc:
                i = Ll
                break
              case Xi:
                i = Tu
                break
              default:
                i = dt
                break
            }
            return (i & (e.suspendedLanes | t)) !== dt ? dt : i
          }
          function vd(e, t, a) {
            if (Fn)
              for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
                var u = gc(a),
                  s = 1 << u,
                  f = i[u]
                f.add(t), (a &= ~s)
              }
          }
          function xc(e, t) {
            if (Fn)
              for (
                var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters;
                t > 0;

              ) {
                var u = gc(t),
                  s = 1 << u,
                  f = a[u]
                f.size > 0 &&
                  (f.forEach(function (p) {
                    var v = p.alternate
                    ;(v === null || !i.has(v)) && i.add(p)
                  }),
                  f.clear()),
                  (t &= ~s)
              }
          }
          function hd(e, t) {
            return null
          }
          var Jn = Fe,
            Vn = Yr,
            di = Pt,
            Vo = Xi,
            jl = dt
          function sa() {
            return jl
          }
          function Cn(e) {
            jl = e
          }
          function Bo(e, t) {
            var a = jl
            try {
              return (jl = e), t()
            } finally {
              jl = a
            }
          }
          function er(e, t) {
            return e !== 0 && e < t ? e : t
          }
          function dy(e, t) {
            return e === 0 || e > t ? e : t
          }
          function md(e, t) {
            return e !== 0 && e < t
          }
          function Po(e) {
            var t = pn(e)
            return md(Jn, t) ? (md(Vn, t) ? (Ho(t) ? di : Vo) : Vn) : Jn
          }
          function En(e) {
            var t = e.current.memoizedState
            return t.isDehydrated
          }
          var Bv
          function ye(e) {
            Bv = e
          }
          function Lu(e) {
            Bv(e)
          }
          var Yo
          function Pv(e) {
            Yo = e
          }
          var Yv
          function $o(e) {
            Yv = e
          }
          var Io
          function yd(e) {
            Io = e
          }
          var gd
          function $v(e) {
            gd = e
          }
          var Cc = !1,
            Mu = [],
            Ya = null,
            Gt = null,
            zn = null,
            ca = /* @__PURE__ */ new Map(),
            Nu = /* @__PURE__ */ new Map(),
            pi = [],
            Na = [
              'mousedown',
              'mouseup',
              'touchcancel',
              'touchend',
              'touchstart',
              'auxclick',
              'dblclick',
              'pointercancel',
              'pointerdown',
              'pointerup',
              'dragend',
              'dragstart',
              'drop',
              'compositionend',
              'compositionstart',
              'keydown',
              'keypress',
              'keyup',
              'input',
              'textInput',
              // Intentionally camelCase
              'copy',
              'cut',
              'paste',
              'click',
              'change',
              'contextmenu',
              'reset',
              'submit',
            ]
          function Iv(e) {
            return Na.indexOf(e) > -1
          }
          function $a(e, t, a, i, u) {
            return {
              blockedOn: e,
              domEventName: t,
              eventSystemFlags: a,
              nativeEvent: u,
              targetContainers: [i],
            }
          }
          function Qv(e, t) {
            switch (e) {
              case 'focusin':
              case 'focusout':
                Ya = null
                break
              case 'dragenter':
              case 'dragleave':
                Gt = null
                break
              case 'mouseover':
              case 'mouseout':
                zn = null
                break
              case 'pointerover':
              case 'pointerout': {
                var a = t.pointerId
                ca.delete(a)
                break
              }
              case 'gotpointercapture':
              case 'lostpointercapture': {
                var i = t.pointerId
                Nu.delete(i)
                break
              }
            }
          }
          function zu(e, t, a, i, u, s) {
            if (e === null || e.nativeEvent !== s) {
              var f = $a(t, a, i, u, s)
              if (t !== null) {
                var p = $u(t)
                p !== null && Yo(p)
              }
              return f
            }
            e.eventSystemFlags |= i
            var v = e.targetContainers
            return u !== null && v.indexOf(u) === -1 && v.push(u), e
          }
          function Wv(e, t, a, i, u) {
            switch (t) {
              case 'focusin': {
                var s = u
                return (Ya = zu(Ya, e, t, a, i, s)), !0
              }
              case 'dragenter': {
                var f = u
                return (Gt = zu(Gt, e, t, a, i, f)), !0
              }
              case 'mouseover': {
                var p = u
                return (zn = zu(zn, e, t, a, i, p)), !0
              }
              case 'pointerover': {
                var v = u,
                  g = v.pointerId
                return ca.set(g, zu(ca.get(g) || null, e, t, a, i, v)), !0
              }
              case 'gotpointercapture': {
                var S = u,
                  k = S.pointerId
                return Nu.set(k, zu(Nu.get(k) || null, e, t, a, i, S)), !0
              }
            }
            return !1
          }
          function Sd(e) {
            var t = es(e.target)
            if (t !== null) {
              var a = Vr(t)
              if (a !== null) {
                var i = a.tag
                if (i === de) {
                  var u = Gf(a)
                  if (u !== null) {
                    ;(e.blockedOn = u),
                      gd(e.priority, function () {
                        Yv(a)
                      })
                    return
                  }
                } else if (i === B) {
                  var s = a.stateNode
                  if (En(s)) {
                    e.blockedOn = Ys(a)
                    return
                  }
                }
              }
            }
            e.blockedOn = null
          }
          function Gv(e) {
            for (
              var t = Io(),
                a = {
                  blockedOn: null,
                  target: e,
                  priority: t,
                },
                i = 0;
              i < pi.length && md(t, pi[i].priority);
              i++
            );
            pi.splice(i, 0, a), i === 0 && Sd(a)
          }
          function Ec(e) {
            if (e.blockedOn !== null) return !1
            for (var t = e.targetContainers; t.length > 0; ) {
              var a = t[0],
                i = Hl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent)
              if (i === null) {
                var u = e.nativeEvent,
                  s = new u.constructor(u.type, u)
                Ro(s), u.target.dispatchEvent(s), ny()
              } else {
                var f = $u(i)
                return f !== null && Yo(f), (e.blockedOn = i), !1
              }
              t.shift()
            }
            return !0
          }
          function Qo(e, t, a) {
            Ec(e) && a.delete(t)
          }
          function xd() {
            ;(Cc = !1),
              Ya !== null && Ec(Ya) && (Ya = null),
              Gt !== null && Ec(Gt) && (Gt = null),
              zn !== null && Ec(zn) && (zn = null),
              ca.forEach(Qo),
              Nu.forEach(Qo)
          }
          function tr(e, t) {
            e.blockedOn === t &&
              ((e.blockedOn = null),
              Cc ||
                ((Cc = !0),
                E.unstable_scheduleCallback(E.unstable_NormalPriority, xd)))
          }
          function ot(e) {
            if (Mu.length > 0) {
              tr(Mu[0], e)
              for (var t = 1; t < Mu.length; t++) {
                var a = Mu[t]
                a.blockedOn === e && (a.blockedOn = null)
              }
            }
            Ya !== null && tr(Ya, e),
              Gt !== null && tr(Gt, e),
              zn !== null && tr(zn, e)
            var i = function (p) {
              return tr(p, e)
            }
            ca.forEach(i), Nu.forEach(i)
            for (var u = 0; u < pi.length; u++) {
              var s = pi[u]
              s.blockedOn === e && (s.blockedOn = null)
            }
            for (; pi.length > 0; ) {
              var f = pi[0]
              if (f.blockedOn !== null) break
              Sd(f), f.blockedOn === null && pi.shift()
            }
          }
          var Zt = y.ReactCurrentBatchConfig,
            nn = !0
          function Un(e) {
            nn = !!e
          }
          function $r() {
            return nn
          }
          function Uu(e, t, a) {
            var i = ur(t),
              u
            switch (i) {
              case Jn:
                u = wn
                break
              case Vn:
                u = Wo
                break
              case di:
              default:
                u = vi
                break
            }
            return u.bind(null, t, a, e)
          }
          function wn(e, t, a, i) {
            var u = sa(),
              s = Zt.transition
            Zt.transition = null
            try {
              Cn(Jn), vi(e, t, a, i)
            } finally {
              Cn(u), (Zt.transition = s)
            }
          }
          function Wo(e, t, a, i) {
            var u = sa(),
              s = Zt.transition
            Zt.transition = null
            try {
              Cn(Vn), vi(e, t, a, i)
            } finally {
              Cn(u), (Zt.transition = s)
            }
          }
          function vi(e, t, a, i) {
            nn && wc(e, t, a, i)
          }
          function wc(e, t, a, i) {
            var u = Hl(e, t, a, i)
            if (u === null) {
              Ny(e, t, i, Ou, a), Qv(e, i)
              return
            }
            if (Wv(u, e, t, a, i)) {
              i.stopPropagation()
              return
            }
            if ((Qv(e, i), t & xl && Iv(e))) {
              for (; u !== null; ) {
                var s = $u(u)
                s !== null && Lu(s)
                var f = Hl(e, t, a, i)
                if ((f === null && Ny(e, t, i, Ou, a), f === u)) break
                u = f
              }
              u !== null && i.stopPropagation()
              return
            }
            Ny(e, t, i, null, a)
          }
          var Ou = null
          function Hl(e, t, a, i) {
            Ou = null
            var u = Hs(i),
              s = es(u)
            if (s !== null) {
              var f = Vr(s)
              if (f === null) s = null
              else {
                var p = f.tag
                if (p === de) {
                  var v = Gf(f)
                  if (v !== null) return v
                  s = null
                } else if (p === B) {
                  var g = f.stateNode
                  if (En(g)) return Ys(f)
                  s = null
                } else f !== s && (s = null)
              }
            }
            return (Ou = s), null
          }
          function ur(e) {
            switch (e) {
              case 'cancel':
              case 'click':
              case 'close':
              case 'contextmenu':
              case 'copy':
              case 'cut':
              case 'auxclick':
              case 'dblclick':
              case 'dragend':
              case 'dragstart':
              case 'drop':
              case 'focusin':
              case 'focusout':
              case 'input':
              case 'invalid':
              case 'keydown':
              case 'keypress':
              case 'keyup':
              case 'mousedown':
              case 'mouseup':
              case 'paste':
              case 'pause':
              case 'play':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointerup':
              case 'ratechange':
              case 'reset':
              case 'resize':
              case 'seeked':
              case 'submit':
              case 'touchcancel':
              case 'touchend':
              case 'touchstart':
              case 'volumechange':
              case 'change':
              case 'selectionchange':
              case 'textInput':
              case 'compositionstart':
              case 'compositionend':
              case 'compositionupdate':
              case 'beforeblur':
              case 'afterblur':
              case 'beforeinput':
              case 'blur':
              case 'fullscreenchange':
              case 'focus':
              case 'hashchange':
              case 'popstate':
              case 'select':
              case 'selectstart':
                return Jn
              case 'drag':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'mousemove':
              case 'mouseout':
              case 'mouseover':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'scroll':
              case 'toggle':
              case 'touchmove':
              case 'wheel':
              case 'mouseenter':
              case 'mouseleave':
              case 'pointerenter':
              case 'pointerleave':
                return Vn
              case 'message': {
                var t = Kf()
                switch (t) {
                  case Ws:
                    return Jn
                  case Pr:
                    return Vn
                  case Ba:
                  case Gs:
                    return di
                  case Pi:
                    return Vo
                  default:
                    return di
                }
              }
              default:
                return di
            }
          }
          function Cd(e, t, a) {
            return e.addEventListener(t, a, !1), a
          }
          function Au(e, t, a) {
            return e.addEventListener(t, a, !0), a
          }
          function hi(e, t, a, i) {
            return (
              e.addEventListener(t, a, {
                capture: !0,
                passive: i,
              }),
              a
            )
          }
          function Rc(e, t, a, i) {
            return (
              e.addEventListener(t, a, {
                passive: i,
              }),
              a
            )
          }
          var Fl = null,
            Ia = null,
            Ki = null
          function Zi(e) {
            return (Fl = e), (Ia = bc()), !0
          }
          function Tc() {
            ;(Fl = null), (Ia = null), (Ki = null)
          }
          function ju() {
            if (Ki) return Ki
            var e,
              t = Ia,
              a = t.length,
              i,
              u = bc(),
              s = u.length
            for (e = 0; e < a && t[e] === u[e]; e++);
            var f = a - e
            for (i = 1; i <= f && t[a - i] === u[s - i]; i++);
            var p = i > 1 ? 1 - i : void 0
            return (Ki = u.slice(e, p)), Ki
          }
          function bc() {
            return 'value' in Fl ? Fl.value : Fl.textContent
          }
          function Vl(e) {
            var t,
              a = e.keyCode
            return (
              'charCode' in e
                ? ((t = e.charCode), t === 0 && a === 13 && (t = 13))
                : (t = a),
              t === 10 && (t = 13),
              t >= 32 || t === 13 ? t : 0
            )
          }
          function Bl() {
            return !0
          }
          function nr() {
            return !1
          }
          function vn(e) {
            function t(a, i, u, s, f) {
              ;(this._reactName = a),
                (this._targetInst = u),
                (this.type = i),
                (this.nativeEvent = s),
                (this.target = f),
                (this.currentTarget = null)
              for (var p in e)
                if (e.hasOwnProperty(p)) {
                  var v = e[p]
                  v ? (this[p] = v(s)) : (this[p] = s[p])
                }
              var g =
                s.defaultPrevented != null
                  ? s.defaultPrevented
                  : s.returnValue === !1
              return (
                g
                  ? (this.isDefaultPrevented = Bl)
                  : (this.isDefaultPrevented = nr),
                (this.isPropagationStopped = nr),
                this
              )
            }
            return (
              ut(t.prototype, {
                preventDefault: function () {
                  this.defaultPrevented = !0
                  var a = this.nativeEvent
                  a &&
                    (a.preventDefault
                      ? a.preventDefault()
                      : typeof a.returnValue != 'unknown' &&
                        (a.returnValue = !1),
                    (this.isDefaultPrevented = Bl))
                },
                stopPropagation: function () {
                  var a = this.nativeEvent
                  a &&
                    (a.stopPropagation
                      ? a.stopPropagation()
                      : typeof a.cancelBubble != 'unknown' &&
                        (a.cancelBubble = !0),
                    (this.isPropagationStopped = Bl))
                },
                /**
                 * We release all dispatched `SyntheticEvent`s after each event loop, adding
                 * them back into the pool. This allows a way to hold onto a reference that
                 * won't be added back into the pool.
                 */
                persist: function () {},
                /**
                 * Checks if this event should be released back into the pool.
                 *
                 * @return {boolean} True if this should not be released, false otherwise.
                 */
                isPersistent: Bl,
              }),
              t
            )
          }
          var rr = {
              eventPhase: 0,
              bubbles: 0,
              cancelable: 0,
              timeStamp: function (e) {
                return e.timeStamp || Date.now()
              },
              defaultPrevented: 0,
              isTrusted: 0,
            },
            ar = vn(rr),
            Hu = ut({}, rr, {
              view: 0,
              detail: 0,
            }),
            Ed = vn(Hu),
            Go,
            wd,
            fa
          function Xv(e) {
            e !== fa &&
              (fa && e.type === 'mousemove'
                ? ((Go = e.screenX - fa.screenX), (wd = e.screenY - fa.screenY))
                : ((Go = 0), (wd = 0)),
              (fa = e))
          }
          var Fu = ut({}, Hu, {
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
              getModifierState: _c,
              button: 0,
              buttons: 0,
              relatedTarget: function (e) {
                return e.relatedTarget === void 0
                  ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                  : e.relatedTarget
              },
              movementX: function (e) {
                return 'movementX' in e ? e.movementX : (Xv(e), Go)
              },
              movementY: function (e) {
                return 'movementY' in e ? e.movementY : wd
              },
            }),
            Ji = vn(Fu),
            Rd = ut({}, Fu, {
              dataTransfer: 0,
            }),
            Pl = vn(Rd),
            qv = ut({}, Hu, {
              relatedTarget: 0,
            }),
            kc = vn(qv),
            Td = ut({}, rr, {
              animationName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            Dc = vn(Td),
            py = ut({}, rr, {
              clipboardData: function (e) {
                return 'clipboardData' in e
                  ? e.clipboardData
                  : window.clipboardData
              },
            }),
            vy = vn(py),
            Kv = ut({}, rr, {
              data: 0,
            }),
            bd = vn(Kv),
            Yl = bd,
            hy = {
              Esc: 'Escape',
              Spacebar: ' ',
              Left: 'ArrowLeft',
              Up: 'ArrowUp',
              Right: 'ArrowRight',
              Down: 'ArrowDown',
              Del: 'Delete',
              Win: 'OS',
              Menu: 'ContextMenu',
              Apps: 'ContextMenu',
              Scroll: 'ScrollLock',
              MozPrintableKey: 'Unidentified',
            },
            Vu = {
              8: 'Backspace',
              9: 'Tab',
              12: 'Clear',
              13: 'Enter',
              16: 'Shift',
              17: 'Control',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Escape',
              32: ' ',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'ArrowLeft',
              38: 'ArrowUp',
              39: 'ArrowRight',
              40: 'ArrowDown',
              45: 'Insert',
              46: 'Delete',
              112: 'F1',
              113: 'F2',
              114: 'F3',
              115: 'F4',
              116: 'F5',
              117: 'F6',
              118: 'F7',
              119: 'F8',
              120: 'F9',
              121: 'F10',
              122: 'F11',
              123: 'F12',
              144: 'NumLock',
              145: 'ScrollLock',
              224: 'Meta',
            }
          function Zv(e) {
            if (e.key) {
              var t = hy[e.key] || e.key
              if (t !== 'Unidentified') return t
            }
            if (e.type === 'keypress') {
              var a = Vl(e)
              return a === 13 ? 'Enter' : String.fromCharCode(a)
            }
            return e.type === 'keydown' || e.type === 'keyup'
              ? Vu[e.keyCode] || 'Unidentified'
              : ''
          }
          var rn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          }
          function my(e) {
            var t = this,
              a = t.nativeEvent
            if (a.getModifierState) return a.getModifierState(e)
            var i = rn[e]
            return i ? !!a[i] : !1
          }
          function _c(e) {
            return my
          }
          var yy = ut({}, Hu, {
              key: Zv,
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: _c,
              // Legacy Interface
              charCode: function (e) {
                return e.type === 'keypress' ? Vl(e) : 0
              },
              keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup'
                  ? e.keyCode
                  : 0
              },
              which: function (e) {
                return e.type === 'keypress'
                  ? Vl(e)
                  : e.type === 'keydown' || e.type === 'keyup'
                  ? e.keyCode
                  : 0
              },
            }),
            gy = vn(yy),
            Jv = ut({}, Fu, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
            kd = vn(Jv),
            Sy = ut({}, Hu, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _c,
            }),
            da = vn(Sy),
            Dd = ut({}, rr, {
              propertyName: 0,
              elapsedTime: 0,
              pseudoElement: 0,
            }),
            xy = vn(Dd),
            el = ut({}, Fu, {
              deltaX: function (e) {
                return 'deltaX' in e
                  ? e.deltaX
                  : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
                  'wheelDeltaX' in e
                  ? -e.wheelDeltaX
                  : 0
              },
              deltaY: function (e) {
                return 'deltaY' in e
                  ? e.deltaY
                  : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
                  'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
                  'wheelDelta' in e
                  ? -e.wheelDelta
                  : 0
              },
              deltaZ: 0,
              // Browsers without "deltaMode" is reporting in raw wheel delta where one
              // notch on the scroll is always +/- 120, roughly equivalent to pixels.
              // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
              // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
              deltaMode: 0,
            }),
            Lc = vn(el),
            $l = [9, 13, 27, 32],
            Xo = 229,
            qo = sn && 'CompositionEvent' in window,
            Il = null
          sn && 'documentMode' in document && (Il = document.documentMode)
          var Cy = sn && 'TextEvent' in window && !Il,
            Mc = sn && (!qo || (Il && Il > 8 && Il <= 11)),
            eh = 32,
            _d = String.fromCharCode(eh)
          function th() {
            Xn('onBeforeInput', [
              'compositionend',
              'keypress',
              'textInput',
              'paste',
            ]),
              Xn('onCompositionEnd', [
                'compositionend',
                'focusout',
                'keydown',
                'keypress',
                'keyup',
                'mousedown',
              ]),
              Xn('onCompositionStart', [
                'compositionstart',
                'focusout',
                'keydown',
                'keypress',
                'keyup',
                'mousedown',
              ]),
              Xn('onCompositionUpdate', [
                'compositionupdate',
                'focusout',
                'keydown',
                'keypress',
                'keyup',
                'mousedown',
              ])
          }
          var Ko = !1
          function Nc(e) {
            return (
              (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
              !(e.ctrlKey && e.altKey)
            )
          }
          function nh(e) {
            switch (e) {
              case 'compositionstart':
                return 'onCompositionStart'
              case 'compositionend':
                return 'onCompositionEnd'
              case 'compositionupdate':
                return 'onCompositionUpdate'
            }
          }
          function Ld(e, t) {
            return e === 'keydown' && t.keyCode === Xo
          }
          function rh(e, t) {
            switch (e) {
              case 'keyup':
                return $l.indexOf(t.keyCode) !== -1
              case 'keydown':
                return t.keyCode !== Xo
              case 'keypress':
              case 'mousedown':
              case 'focusout':
                return !0
              default:
                return !1
            }
          }
          function Md(e) {
            var t = e.detail
            return typeof t == 'object' && 'data' in t ? t.data : null
          }
          function zc(e) {
            return e.locale === 'ko'
          }
          var mi = !1
          function Nd(e, t, a, i, u) {
            var s, f
            if (
              (qo
                ? (s = nh(t))
                : mi
                ? rh(t, i) && (s = 'onCompositionEnd')
                : Ld(t, i) && (s = 'onCompositionStart'),
              !s)
            )
              return null
            Mc &&
              !zc(i) &&
              (!mi && s === 'onCompositionStart'
                ? (mi = Zi(u))
                : s === 'onCompositionEnd' && mi && (f = ju()))
            var p = oh(a, s)
            if (p.length > 0) {
              var v = new bd(s, t, null, i, u)
              if (
                (e.push({
                  event: v,
                  listeners: p,
                }),
                f)
              )
                v.data = f
              else {
                var g = Md(i)
                g !== null && (v.data = g)
              }
            }
          }
          function Uc(e, t) {
            switch (e) {
              case 'compositionend':
                return Md(t)
              case 'keypress':
                var a = t.which
                return a !== eh ? null : ((Ko = !0), _d)
              case 'textInput':
                var i = t.data
                return i === _d && Ko ? null : i
              default:
                return null
            }
          }
          function ah(e, t) {
            if (mi) {
              if (e === 'compositionend' || (!qo && rh(e, t))) {
                var a = ju()
                return Tc(), (mi = !1), a
              }
              return null
            }
            switch (e) {
              case 'paste':
                return null
              case 'keypress':
                if (!Nc(t)) {
                  if (t.char && t.char.length > 1) return t.char
                  if (t.which) return String.fromCharCode(t.which)
                }
                return null
              case 'compositionend':
                return Mc && !zc(t) ? null : t.data
              default:
                return null
            }
          }
          function Ey(e, t, a, i, u) {
            var s
            if ((Cy ? (s = Uc(t, i)) : (s = ah(t, i)), !s)) return null
            var f = oh(a, 'onBeforeInput')
            if (f.length > 0) {
              var p = new Yl('onBeforeInput', 'beforeinput', null, i, u)
              e.push({
                event: p,
                listeners: f,
              }),
                (p.data = s)
            }
          }
          function Oc(e, t, a, i, u, s, f) {
            Nd(e, t, a, i, u), Ey(e, t, a, i, u)
          }
          var wy = {
            color: !0,
            date: !0,
            datetime: !0,
            'datetime-local': !0,
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
            week: !0,
          }
          function Bu(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase()
            return t === 'input' ? !!wy[e.type] : t === 'textarea'
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
          function Ry(e) {
            if (!sn) return !1
            var t = 'on' + e,
              a = t in document
            if (!a) {
              var i = document.createElement('div')
              i.setAttribute(t, 'return;'), (a = typeof i[t] == 'function')
            }
            return a
          }
          function Ac() {
            Xn('onChange', [
              'change',
              'click',
              'focusin',
              'focusout',
              'input',
              'keydown',
              'keyup',
              'selectionchange',
            ])
          }
          function n(e, t, a, i) {
            Fs(i)
            var u = oh(t, 'onChange')
            if (u.length > 0) {
              var s = new ar('onChange', 'change', null, a, i)
              e.push({
                event: s,
                listeners: u,
              })
            }
          }
          var r = null,
            l = null
          function o(e) {
            var t = e.nodeName && e.nodeName.toLowerCase()
            return t === 'select' || (t === 'input' && e.type === 'file')
          }
          function c(e) {
            var t = []
            n(t, l, e, Hs(e)), Vf(d, t)
          }
          function d(e) {
            NS(e, 0)
          }
          function h(e) {
            var t = Pc(e)
            if ($p(t)) return e
          }
          function C(e, t) {
            if (e === 'change') return t
          }
          var R = !1
          sn &&
            (R =
              Ry('input') &&
              (!document.documentMode || document.documentMode > 9))
          function F(e, t) {
            ;(r = e), (l = t), r.attachEvent('onpropertychange', Z)
          }
          function X() {
            r && (r.detachEvent('onpropertychange', Z), (r = null), (l = null))
          }
          function Z(e) {
            e.propertyName === 'value' && h(l) && c(e)
          }
          function G(e, t, a) {
            e === 'focusin' ? (X(), F(t, a)) : e === 'focusout' && X()
          }
          function pe(e, t) {
            if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
              return h(l)
          }
          function Se(e) {
            var t = e.nodeName
            return (
              t &&
              t.toLowerCase() === 'input' &&
              (e.type === 'checkbox' || e.type === 'radio')
            )
          }
          function Te(e, t) {
            if (e === 'click') return h(t)
          }
          function un(e, t) {
            if (e === 'input' || e === 'change') return h(t)
          }
          function L(e) {
            var t = e._wrapperState
            !t ||
              !t.controlled ||
              e.type !== 'number' ||
              Ui(e, 'number', e.value)
          }
          function b(e, t, a, i, u, s, f) {
            var p = a ? Pc(a) : window,
              v,
              g
            if (
              (o(p)
                ? (v = C)
                : Bu(p)
                ? R
                  ? (v = un)
                  : ((v = pe), (g = G))
                : Se(p) && (v = Te),
              v)
            ) {
              var S = v(t, a)
              if (S) {
                n(e, S, i, u)
                return
              }
            }
            g && g(t, p, a), t === 'focusout' && L(p)
          }
          function U() {
            yr('onMouseEnter', ['mouseout', 'mouseover']),
              yr('onMouseLeave', ['mouseout', 'mouseover']),
              yr('onPointerEnter', ['pointerout', 'pointerover']),
              yr('onPointerLeave', ['pointerout', 'pointerover'])
          }
          function ne(e, t, a, i, u, s, f) {
            var p = t === 'mouseover' || t === 'pointerover',
              v = t === 'mouseout' || t === 'pointerout'
            if (p && !Cv(i)) {
              var g = i.relatedTarget || i.fromElement
              if (g && (es(g) || Qd(g))) return
            }
            if (!(!v && !p)) {
              var S
              if (u.window === u) S = u
              else {
                var k = u.ownerDocument
                k ? (S = k.defaultView || k.parentWindow) : (S = window)
              }
              var T, O
              if (v) {
                var j = i.relatedTarget || i.toElement
                if (((T = a), (O = j ? es(j) : null), O !== null)) {
                  var P = Vr(O)
                  ;(O !== P || (O.tag !== K && O.tag !== re)) && (O = null)
                }
              } else (T = null), (O = a)
              if (T !== O) {
                var he = Ji,
                  ze = 'onMouseLeave',
                  ke = 'onMouseEnter',
                  vt = 'mouse'
                ;(t === 'pointerout' || t === 'pointerover') &&
                  ((he = kd),
                  (ze = 'onPointerLeave'),
                  (ke = 'onPointerEnter'),
                  (vt = 'pointer'))
                var st = T == null ? S : Pc(T),
                  M = O == null ? S : Pc(O),
                  Y = new he(ze, vt + 'leave', T, i, u)
                ;(Y.target = st), (Y.relatedTarget = M)
                var N = null,
                  J = es(u)
                if (J === a) {
                  var me = new he(ke, vt + 'enter', O, i, u)
                  ;(me.target = M), (me.relatedTarget = st), (N = me)
                }
                AE(e, Y, N, T, O)
              }
            }
          }
          function be(e, t) {
            return (
              (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
            )
          }
          var xe = typeof Object.is == 'function' ? Object.is : be
          function De(e, t) {
            if (xe(e, t)) return !0
            if (
              typeof e != 'object' ||
              e === null ||
              typeof t != 'object' ||
              t === null
            )
              return !1
            var a = Object.keys(e),
              i = Object.keys(t)
            if (a.length !== i.length) return !1
            for (var u = 0; u < a.length; u++) {
              var s = a[u]
              if (!bn.call(t, s) || !xe(e[s], t[s])) return !1
            }
            return !0
          }
          function $e(e) {
            for (; e && e.firstChild; ) e = e.firstChild
            return e
          }
          function On(e) {
            for (; e; ) {
              if (e.nextSibling) return e.nextSibling
              e = e.parentNode
            }
          }
          function mt(e, t) {
            for (var a = $e(e), i = 0, u = 0; a; ) {
              if (a.nodeType === ri) {
                if (((u = i + a.textContent.length), i <= t && u >= t))
                  return {
                    node: a,
                    offset: t - i,
                  }
                i = u
              }
              a = $e(On(a))
            }
          }
          function tl(e) {
            var t = e.ownerDocument,
              a = (t && t.defaultView) || window,
              i = a.getSelection && a.getSelection()
            if (!i || i.rangeCount === 0) return null
            var u = i.anchorNode,
              s = i.anchorOffset,
              f = i.focusNode,
              p = i.focusOffset
            try {
              u.nodeType, f.nodeType
            } catch {
              return null
            }
            return Ty(e, u, s, f, p)
          }
          function Ty(e, t, a, i, u) {
            var s = 0,
              f = -1,
              p = -1,
              v = 0,
              g = 0,
              S = e,
              k = null
            e: for (;;) {
              for (
                var T = null;
                S === t && (a === 0 || S.nodeType === ri) && (f = s + a),
                  S === i && (u === 0 || S.nodeType === ri) && (p = s + u),
                  S.nodeType === ri && (s += S.nodeValue.length),
                  (T = S.firstChild) !== null;

              )
                (k = S), (S = T)
              for (;;) {
                if (S === e) break e
                if (
                  (k === t && ++v === a && (f = s),
                  k === i && ++g === u && (p = s),
                  (T = S.nextSibling) !== null)
                )
                  break
                ;(S = k), (k = S.parentNode)
              }
              S = T
            }
            return f === -1 || p === -1
              ? null
              : {
                  start: f,
                  end: p,
                }
          }
          function yE(e, t) {
            var a = e.ownerDocument || document,
              i = (a && a.defaultView) || window
            if (i.getSelection) {
              var u = i.getSelection(),
                s = e.textContent.length,
                f = Math.min(t.start, s),
                p = t.end === void 0 ? f : Math.min(t.end, s)
              if (!u.extend && f > p) {
                var v = p
                ;(p = f), (f = v)
              }
              var g = mt(e, f),
                S = mt(e, p)
              if (g && S) {
                if (
                  u.rangeCount === 1 &&
                  u.anchorNode === g.node &&
                  u.anchorOffset === g.offset &&
                  u.focusNode === S.node &&
                  u.focusOffset === S.offset
                )
                  return
                var k = a.createRange()
                k.setStart(g.node, g.offset),
                  u.removeAllRanges(),
                  f > p
                    ? (u.addRange(k), u.extend(S.node, S.offset))
                    : (k.setEnd(S.node, S.offset), u.addRange(k))
              }
            }
          }
          function xS(e) {
            return e && e.nodeType === ri
          }
          function CS(e, t) {
            return !e || !t
              ? !1
              : e === t
              ? !0
              : xS(e)
              ? !1
              : xS(t)
              ? CS(e, t.parentNode)
              : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
          }
          function gE(e) {
            return (
              e && e.ownerDocument && CS(e.ownerDocument.documentElement, e)
            )
          }
          function SE(e) {
            try {
              return typeof e.contentWindow.location.href == 'string'
            } catch {
              return !1
            }
          }
          function ES() {
            for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
              if (SE(t)) e = t.contentWindow
              else return t
              t = Ts(e.document)
            }
            return t
          }
          function by(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase()
            return (
              t &&
              ((t === 'input' &&
                (e.type === 'text' ||
                  e.type === 'search' ||
                  e.type === 'tel' ||
                  e.type === 'url' ||
                  e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
            )
          }
          function xE() {
            var e = ES()
            return {
              focusedElem: e,
              selectionRange: by(e) ? EE(e) : null,
            }
          }
          function CE(e) {
            var t = ES(),
              a = e.focusedElem,
              i = e.selectionRange
            if (t !== a && gE(a)) {
              i !== null && by(a) && wE(a, i)
              for (var u = [], s = a; (s = s.parentNode); )
                s.nodeType === Sr &&
                  u.push({
                    element: s,
                    left: s.scrollLeft,
                    top: s.scrollTop,
                  })
              typeof a.focus == 'function' && a.focus()
              for (var f = 0; f < u.length; f++) {
                var p = u[f]
                ;(p.element.scrollLeft = p.left), (p.element.scrollTop = p.top)
              }
            }
          }
          function EE(e) {
            var t
            return (
              'selectionStart' in e
                ? (t = {
                    start: e.selectionStart,
                    end: e.selectionEnd,
                  })
                : (t = tl(e)),
              t || {
                start: 0,
                end: 0,
              }
            )
          }
          function wE(e, t) {
            var a = t.start,
              i = t.end
            i === void 0 && (i = a),
              'selectionStart' in e
                ? ((e.selectionStart = a),
                  (e.selectionEnd = Math.min(i, e.value.length)))
                : yE(e, t)
          }
          var RE =
            sn && 'documentMode' in document && document.documentMode <= 11
          function TE() {
            Xn('onSelect', [
              'focusout',
              'contextmenu',
              'dragend',
              'focusin',
              'keydown',
              'keyup',
              'mousedown',
              'mouseup',
              'selectionchange',
            ])
          }
          var jc = null,
            ky = null,
            zd = null,
            Dy = !1
          function bE(e) {
            if ('selectionStart' in e && by(e))
              return {
                start: e.selectionStart,
                end: e.selectionEnd,
              }
            var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
              a = t.getSelection()
            return {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            }
          }
          function kE(e) {
            return e.window === e
              ? e.document
              : e.nodeType === Da
              ? e
              : e.ownerDocument
          }
          function wS(e, t, a) {
            var i = kE(a)
            if (!(Dy || jc == null || jc !== Ts(i))) {
              var u = bE(jc)
              if (!zd || !De(zd, u)) {
                zd = u
                var s = oh(ky, 'onSelect')
                if (s.length > 0) {
                  var f = new ar('onSelect', 'select', null, t, a)
                  e.push({
                    event: f,
                    listeners: s,
                  }),
                    (f.target = jc)
                }
              }
            }
          }
          function DE(e, t, a, i, u, s, f) {
            var p = a ? Pc(a) : window
            switch (t) {
              case 'focusin':
                ;(Bu(p) || p.contentEditable === 'true') &&
                  ((jc = p), (ky = a), (zd = null))
                break
              case 'focusout':
                ;(jc = null), (ky = null), (zd = null)
                break
              case 'mousedown':
                Dy = !0
                break
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                ;(Dy = !1), wS(e, i, u)
                break
              case 'selectionchange':
                if (RE) break
              case 'keydown':
              case 'keyup':
                wS(e, i, u)
            }
          }
          function ih(e, t) {
            var a = {}
            return (
              (a[e.toLowerCase()] = t.toLowerCase()),
              (a['Webkit' + e] = 'webkit' + t),
              (a['Moz' + e] = 'moz' + t),
              a
            )
          }
          var Hc = {
              animationend: ih('Animation', 'AnimationEnd'),
              animationiteration: ih('Animation', 'AnimationIteration'),
              animationstart: ih('Animation', 'AnimationStart'),
              transitionend: ih('Transition', 'TransitionEnd'),
            },
            _y = {},
            RS = {}
          sn &&
            ((RS = document.createElement('div').style),
            'AnimationEvent' in window ||
              (delete Hc.animationend.animation,
              delete Hc.animationiteration.animation,
              delete Hc.animationstart.animation),
            'TransitionEvent' in window || delete Hc.transitionend.transition)
          function lh(e) {
            if (_y[e]) return _y[e]
            if (!Hc[e]) return e
            var t = Hc[e]
            for (var a in t)
              if (t.hasOwnProperty(a) && a in RS) return (_y[e] = t[a])
            return e
          }
          var TS = lh('animationend'),
            bS = lh('animationiteration'),
            kS = lh('animationstart'),
            DS = lh('transitionend'),
            _S = /* @__PURE__ */ new Map(),
            LS = [
              'abort',
              'auxClick',
              'cancel',
              'canPlay',
              'canPlayThrough',
              'click',
              'close',
              'contextMenu',
              'copy',
              'cut',
              'drag',
              'dragEnd',
              'dragEnter',
              'dragExit',
              'dragLeave',
              'dragOver',
              'dragStart',
              'drop',
              'durationChange',
              'emptied',
              'encrypted',
              'ended',
              'error',
              'gotPointerCapture',
              'input',
              'invalid',
              'keyDown',
              'keyPress',
              'keyUp',
              'load',
              'loadedData',
              'loadedMetadata',
              'loadStart',
              'lostPointerCapture',
              'mouseDown',
              'mouseMove',
              'mouseOut',
              'mouseOver',
              'mouseUp',
              'paste',
              'pause',
              'play',
              'playing',
              'pointerCancel',
              'pointerDown',
              'pointerMove',
              'pointerOut',
              'pointerOver',
              'pointerUp',
              'progress',
              'rateChange',
              'reset',
              'resize',
              'seeked',
              'seeking',
              'stalled',
              'submit',
              'suspend',
              'timeUpdate',
              'touchCancel',
              'touchEnd',
              'touchStart',
              'volumeChange',
              'scroll',
              'toggle',
              'touchMove',
              'waiting',
              'wheel',
            ]
          function Pu(e, t) {
            _S.set(e, t), Xn(t, [e])
          }
          function _E() {
            for (var e = 0; e < LS.length; e++) {
              var t = LS[e],
                a = t.toLowerCase(),
                i = t[0].toUpperCase() + t.slice(1)
              Pu(a, 'on' + i)
            }
            Pu(TS, 'onAnimationEnd'),
              Pu(bS, 'onAnimationIteration'),
              Pu(kS, 'onAnimationStart'),
              Pu('dblclick', 'onDoubleClick'),
              Pu('focusin', 'onFocus'),
              Pu('focusout', 'onBlur'),
              Pu(DS, 'onTransitionEnd')
          }
          function LE(e, t, a, i, u, s, f) {
            var p = _S.get(t)
            if (p !== void 0) {
              var v = ar,
                g = t
              switch (t) {
                case 'keypress':
                  if (Vl(i) === 0) return
                case 'keydown':
                case 'keyup':
                  v = gy
                  break
                case 'focusin':
                  ;(g = 'focus'), (v = kc)
                  break
                case 'focusout':
                  ;(g = 'blur'), (v = kc)
                  break
                case 'beforeblur':
                case 'afterblur':
                  v = kc
                  break
                case 'click':
                  if (i.button === 2) return
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  v = Ji
                  break
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  v = Pl
                  break
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  v = da
                  break
                case TS:
                case bS:
                case kS:
                  v = Dc
                  break
                case DS:
                  v = xy
                  break
                case 'scroll':
                  v = Ed
                  break
                case 'wheel':
                  v = Lc
                  break
                case 'copy':
                case 'cut':
                case 'paste':
                  v = vy
                  break
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  v = kd
                  break
              }
              var S = (s & xl) !== 0
              {
                var k =
                    !S && // TODO: ideally, we'd eventually add all events from
                    // nonDelegatedEvents list in DOMPluginEventSystem.
                    // Then we can remove this special list.
                    // This is a breaking change that can wait until React 18.
                    t === 'scroll',
                  T = UE(a, p, i.type, S, k)
                if (T.length > 0) {
                  var O = new v(p, g, null, i, u)
                  e.push({
                    event: O,
                    listeners: T,
                  })
                }
              }
            }
          }
          _E(), U(), Ac(), TE(), th()
          function ME(e, t, a, i, u, s, f) {
            LE(e, t, a, i, u, s)
            var p = (s & ty) === 0
            p &&
              (ne(e, t, a, i, u),
              b(e, t, a, i, u),
              DE(e, t, a, i, u),
              Oc(e, t, a, i, u))
          }
          var Ud = [
              'abort',
              'canplay',
              'canplaythrough',
              'durationchange',
              'emptied',
              'encrypted',
              'ended',
              'error',
              'loadeddata',
              'loadedmetadata',
              'loadstart',
              'pause',
              'play',
              'playing',
              'progress',
              'ratechange',
              'resize',
              'seeked',
              'seeking',
              'stalled',
              'suspend',
              'timeupdate',
              'volumechange',
              'waiting',
            ],
            Ly = new Set(
              ['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(
                Ud
              )
            )
          function MS(e, t, a) {
            var i = e.type || 'unknown-event'
            ;(e.currentTarget = a),
              ui(i, t, void 0, e),
              (e.currentTarget = null)
          }
          function NE(e, t, a) {
            var i
            if (a)
              for (var u = t.length - 1; u >= 0; u--) {
                var s = t[u],
                  f = s.instance,
                  p = s.currentTarget,
                  v = s.listener
                if (f !== i && e.isPropagationStopped()) return
                MS(e, v, p), (i = f)
              }
            else
              for (var g = 0; g < t.length; g++) {
                var S = t[g],
                  k = S.instance,
                  T = S.currentTarget,
                  O = S.listener
                if (k !== i && e.isPropagationStopped()) return
                MS(e, O, T), (i = k)
              }
          }
          function NS(e, t) {
            for (var a = (t & xl) !== 0, i = 0; i < e.length; i++) {
              var u = e[i],
                s = u.event,
                f = u.listeners
              NE(s, f, a)
            }
            $f()
          }
          function zE(e, t, a, i, u) {
            var s = Hs(a),
              f = []
            ME(f, e, i, a, s, t), NS(f, t)
          }
          function Jt(e, t) {
            Ly.has(e) ||
              m(
                'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
                e
              )
            var a = !1,
              i = sR(t),
              u = jE(e, a)
            i.has(u) || (zS(t, e, Eo, a), i.add(u))
          }
          function My(e, t, a) {
            Ly.has(e) &&
              !t &&
              m(
                'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
                e
              )
            var i = 0
            t && (i |= xl), zS(a, e, i, t)
          }
          var uh = '_reactListening' + Math.random().toString(36).slice(2)
          function Od(e) {
            if (!e[uh]) {
              ;(e[uh] = !0),
                mn.forEach(function (a) {
                  a !== 'selectionchange' &&
                    (Ly.has(a) || My(a, !1, e), My(a, !0, e))
                })
              var t = e.nodeType === Da ? e : e.ownerDocument
              t !== null &&
                (t[uh] || ((t[uh] = !0), My('selectionchange', !1, t)))
            }
          }
          function zS(e, t, a, i, u) {
            var s = Uu(e, t, a),
              f = void 0
            ko &&
              (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
              (f = !0),
              (e = e),
              i
                ? f !== void 0
                  ? hi(e, t, s, f)
                  : Au(e, t, s)
                : f !== void 0
                ? Rc(e, t, s, f)
                : Cd(e, t, s)
          }
          function US(e, t) {
            return e === t || (e.nodeType === dn && e.parentNode === t)
          }
          function Ny(e, t, a, i, u) {
            var s = i
            if (!(t & ii) && !(t & Eo)) {
              var f = u
              if (i !== null) {
                var p = i
                e: for (;;) {
                  if (p === null) return
                  var v = p.tag
                  if (v === B || v === W) {
                    var g = p.stateNode.containerInfo
                    if (US(g, f)) break
                    if (v === W)
                      for (var S = p.return; S !== null; ) {
                        var k = S.tag
                        if (k === B || k === W) {
                          var T = S.stateNode.containerInfo
                          if (US(T, f)) return
                        }
                        S = S.return
                      }
                    for (; g !== null; ) {
                      var O = es(g)
                      if (O === null) return
                      var j = O.tag
                      if (j === K || j === re) {
                        p = s = O
                        continue e
                      }
                      g = g.parentNode
                    }
                  }
                  p = p.return
                }
              }
            }
            Vf(function () {
              return zE(e, t, a, s)
            })
          }
          function Ad(e, t, a) {
            return {
              instance: e,
              listener: t,
              currentTarget: a,
            }
          }
          function UE(e, t, a, i, u, s) {
            for (
              var f = t !== null ? t + 'Capture' : null,
                p = i ? f : t,
                v = [],
                g = e,
                S = null;
              g !== null;

            ) {
              var k = g,
                T = k.stateNode,
                O = k.tag
              if (O === K && T !== null && ((S = T), p !== null)) {
                var j = El(g, p)
                j != null && v.push(Ad(g, j, S))
              }
              if (u) break
              g = g.return
            }
            return v
          }
          function oh(e, t) {
            for (var a = t + 'Capture', i = [], u = e; u !== null; ) {
              var s = u,
                f = s.stateNode,
                p = s.tag
              if (p === K && f !== null) {
                var v = f,
                  g = El(u, a)
                g != null && i.unshift(Ad(u, g, v))
                var S = El(u, t)
                S != null && i.push(Ad(u, S, v))
              }
              u = u.return
            }
            return i
          }
          function Fc(e) {
            if (e === null) return null
            do e = e.return
            while (e && e.tag !== K)
            return e || null
          }
          function OE(e, t) {
            for (var a = e, i = t, u = 0, s = a; s; s = Fc(s)) u++
            for (var f = 0, p = i; p; p = Fc(p)) f++
            for (; u - f > 0; ) (a = Fc(a)), u--
            for (; f - u > 0; ) (i = Fc(i)), f--
            for (var v = u; v--; ) {
              if (a === i || (i !== null && a === i.alternate)) return a
              ;(a = Fc(a)), (i = Fc(i))
            }
            return null
          }
          function OS(e, t, a, i, u) {
            for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
              var v = p,
                g = v.alternate,
                S = v.stateNode,
                k = v.tag
              if (g !== null && g === i) break
              if (k === K && S !== null) {
                var T = S
                if (u) {
                  var O = El(p, s)
                  O != null && f.unshift(Ad(p, O, T))
                } else if (!u) {
                  var j = El(p, s)
                  j != null && f.push(Ad(p, j, T))
                }
              }
              p = p.return
            }
            f.length !== 0 &&
              e.push({
                event: t,
                listeners: f,
              })
          }
          function AE(e, t, a, i, u) {
            var s = i && u ? OE(i, u) : null
            i !== null && OS(e, t, i, s, !1),
              u !== null && a !== null && OS(e, a, u, s, !0)
          }
          function jE(e, t) {
            return e + '__' + (t ? 'capture' : 'bubble')
          }
          var pa = !1,
            jd = 'dangerouslySetInnerHTML',
            sh = 'suppressContentEditableWarning',
            Yu = 'suppressHydrationWarning',
            AS = 'autoFocus',
            Zo = 'children',
            Jo = 'style',
            ch = '__html',
            zy,
            fh,
            Hd,
            jS,
            dh,
            HS,
            FS
          ;(zy = {
            // There are working polyfills for <dialog>. Let people use it.
            dialog: !0,
            // Electron ships a custom <webview> tag to display external web content in
            // an isolated frame and process.
            // This tag is not present in non Electron environments such as JSDom which
            // is often used for testing purposes.
            // @see https://electronjs.org/docs/api/webview-tag
            webview: !0,
          }),
            (fh = function (e, t) {
              js(e, t),
                Of(e, t),
                xv(e, t, {
                  registrationNameDependencies: jn,
                  possibleRegistrationNames: qr,
                })
            }),
            (HS = sn && !document.documentMode),
            (Hd = function (e, t, a) {
              if (!pa) {
                var i = ph(a),
                  u = ph(t)
                u !== i &&
                  ((pa = !0),
                  m(
                    'Prop `%s` did not match. Server: %s Client: %s',
                    e,
                    JSON.stringify(u),
                    JSON.stringify(i)
                  ))
              }
            }),
            (jS = function (e) {
              if (!pa) {
                pa = !0
                var t = []
                e.forEach(function (a) {
                  t.push(a)
                }),
                  m('Extra attributes from the server: %s', t)
              }
            }),
            (dh = function (e, t) {
              t === !1
                ? m(
                    'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    e,
                    e,
                    e
                  )
                : m(
                    'Expected `%s` listener to be a function, instead got a value of `%s` type.',
                    e,
                    typeof t
                  )
            }),
            (FS = function (e, t) {
              var a =
                e.namespaceURI === ni
                  ? e.ownerDocument.createElement(e.tagName)
                  : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName)
              return (a.innerHTML = t), a.innerHTML
            })
          var HE = /\r\n?/g,
            FE = /\u0000|\uFFFD/g
          function ph(e) {
            Ca(e)
            var t = typeof e == 'string' ? e : '' + e
            return t
              .replace(
                HE,
                `
`
              )
              .replace(FE, '')
          }
          function vh(e, t, a, i) {
            var u = ph(t),
              s = ph(e)
            if (
              s !== u &&
              (i &&
                (pa ||
                  ((pa = !0),
                  m(
                    'Text content did not match. Server: "%s" Client: "%s"',
                    s,
                    u
                  ))),
              a && $t)
            )
              throw new Error(
                'Text content does not match server-rendered HTML.'
              )
          }
          function VS(e) {
            return e.nodeType === Da ? e : e.ownerDocument
          }
          function VE() {}
          function hh(e) {
            e.onclick = VE
          }
          function BE(e, t, a, i, u) {
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var f = i[s]
                if (s === Jo) f && Object.freeze(f), cv(t, f)
                else if (s === jd) {
                  var p = f ? f[ch] : void 0
                  p != null && Jp(t, p)
                } else if (s === Zo)
                  if (typeof f == 'string') {
                    var v = e !== 'textarea' || f !== ''
                    v && zs(t, f)
                  } else typeof f == 'number' && zs(t, '' + f)
                else
                  s === sh ||
                    s === Yu ||
                    s === AS ||
                    (jn.hasOwnProperty(s)
                      ? f != null &&
                        (typeof f != 'function' && dh(s, f),
                        s === 'onScroll' && Jt('scroll', t))
                      : f != null && Ha(t, s, f, u))
              }
          }
          function PE(e, t, a, i) {
            for (var u = 0; u < t.length; u += 2) {
              var s = t[u],
                f = t[u + 1]
              s === Jo
                ? cv(e, f)
                : s === jd
                ? Jp(e, f)
                : s === Zo
                ? zs(e, f)
                : Ha(e, s, f, i)
            }
          }
          function YE(e, t, a, i) {
            var u,
              s = VS(a),
              f,
              p = i
            if ((p === ni && (p = Ms(e)), p === ni)) {
              if (
                ((u = ai(e, t)),
                !u &&
                  e !== e.toLowerCase() &&
                  m(
                    '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
                    e
                  ),
                e === 'script')
              ) {
                var v = s.createElement('div')
                v.innerHTML = '<script></script>'
                var g = v.firstChild
                f = v.removeChild(g)
              } else if (typeof t.is == 'string')
                f = s.createElement(e, {
                  is: t.is,
                })
              else if (((f = s.createElement(e)), e === 'select')) {
                var S = f
                t.multiple ? (S.multiple = !0) : t.size && (S.size = t.size)
              }
            } else f = s.createElementNS(p, e)
            return (
              p === ni &&
                !u &&
                Object.prototype.toString.call(f) ===
                  '[object HTMLUnknownElement]' &&
                !bn.call(zy, e) &&
                ((zy[e] = !0),
                m(
                  'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
                  e
                )),
              f
            )
          }
          function $E(e, t) {
            return VS(t).createTextNode(e)
          }
          function IE(e, t, a, i) {
            var u = ai(t, a)
            fh(t, a)
            var s
            switch (t) {
              case 'dialog':
                Jt('cancel', e), Jt('close', e), (s = a)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Jt('load', e), (s = a)
                break
              case 'video':
              case 'audio':
                for (var f = 0; f < Ud.length; f++) Jt(Ud[f], e)
                s = a
                break
              case 'source':
                Jt('error', e), (s = a)
                break
              case 'img':
              case 'image':
              case 'link':
                Jt('error', e), Jt('load', e), (s = a)
                break
              case 'details':
                Jt('toggle', e), (s = a)
                break
              case 'input':
                mo(e, a), (s = ho(e, a)), Jt('invalid', e)
                break
              case 'option':
                _s(e, a), (s = a)
                break
              case 'select':
                Xp(e, a), (s = Rf(e, a)), Jt('invalid', e)
                break
              case 'textarea':
                qp(e, a), (s = bf(e, a)), Jt('invalid', e)
                break
              default:
                s = a
            }
            switch ((Os(t, s), BE(t, e, i, s, u), t)) {
              case 'input':
                yl(e), yo(e, a, !1)
                break
              case 'textarea':
                yl(e), Zp(e)
                break
              case 'option':
                wf(e, a)
                break
              case 'select':
                $m(e, a)
                break
              default:
                typeof s.onClick == 'function' && hh(e)
                break
            }
          }
          function QE(e, t, a, i, u) {
            fh(t, i)
            var s = null,
              f,
              p
            switch (t) {
              case 'input':
                ;(f = ho(e, a)), (p = ho(e, i)), (s = [])
                break
              case 'select':
                ;(f = Rf(e, a)), (p = Rf(e, i)), (s = [])
                break
              case 'textarea':
                ;(f = bf(e, a)), (p = bf(e, i)), (s = [])
                break
              default:
                ;(f = a),
                  (p = i),
                  typeof f.onClick != 'function' &&
                    typeof p.onClick == 'function' &&
                    hh(e)
                break
            }
            Os(t, p)
            var v,
              g,
              S = null
            for (v in f)
              if (
                !(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null)
              )
                if (v === Jo) {
                  var k = f[v]
                  for (g in k)
                    k.hasOwnProperty(g) && (S || (S = {}), (S[g] = ''))
                } else
                  v === jd ||
                    v === Zo ||
                    v === sh ||
                    v === Yu ||
                    v === AS ||
                    (jn.hasOwnProperty(v)
                      ? s || (s = [])
                      : (s = s || []).push(v, null))
            for (v in p) {
              var T = p[v],
                O = f != null ? f[v] : void 0
              if (
                !(!p.hasOwnProperty(v) || T === O || (T == null && O == null))
              )
                if (v === Jo)
                  if ((T && Object.freeze(T), O)) {
                    for (g in O)
                      O.hasOwnProperty(g) &&
                        (!T || !T.hasOwnProperty(g)) &&
                        (S || (S = {}), (S[g] = ''))
                    for (g in T)
                      T.hasOwnProperty(g) &&
                        O[g] !== T[g] &&
                        (S || (S = {}), (S[g] = T[g]))
                  } else S || (s || (s = []), s.push(v, S)), (S = T)
                else if (v === jd) {
                  var j = T ? T[ch] : void 0,
                    P = O ? O[ch] : void 0
                  j != null && P !== j && (s = s || []).push(v, j)
                } else
                  v === Zo
                    ? (typeof T == 'string' || typeof T == 'number') &&
                      (s = s || []).push(v, '' + T)
                    : v === sh ||
                      v === Yu ||
                      (jn.hasOwnProperty(v)
                        ? (T != null &&
                            (typeof T != 'function' && dh(v, T),
                            v === 'onScroll' && Jt('scroll', e)),
                          !s && O !== T && (s = []))
                        : (s = s || []).push(v, T))
            }
            return S && (xo(S, p[Jo]), (s = s || []).push(Jo, S)), s
          }
          function WE(e, t, a, i, u) {
            a === 'input' && u.type === 'radio' && u.name != null && Ef(e, u)
            var s = ai(a, i),
              f = ai(a, u)
            switch ((PE(e, t, s, f), a)) {
              case 'input':
                fu(e, u)
                break
              case 'textarea':
                Kp(e, u)
                break
              case 'select':
                Im(e, u)
                break
            }
          }
          function GE(e) {
            {
              var t = e.toLowerCase()
              return (As.hasOwnProperty(t) && As[t]) || null
            }
          }
          function XE(e, t, a, i, u, s, f) {
            var p, v
            switch (((p = ai(t, a)), fh(t, a), t)) {
              case 'dialog':
                Jt('cancel', e), Jt('close', e)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Jt('load', e)
                break
              case 'video':
              case 'audio':
                for (var g = 0; g < Ud.length; g++) Jt(Ud[g], e)
                break
              case 'source':
                Jt('error', e)
                break
              case 'img':
              case 'image':
              case 'link':
                Jt('error', e), Jt('load', e)
                break
              case 'details':
                Jt('toggle', e)
                break
              case 'input':
                mo(e, a), Jt('invalid', e)
                break
              case 'option':
                _s(e, a)
                break
              case 'select':
                Xp(e, a), Jt('invalid', e)
                break
              case 'textarea':
                qp(e, a), Jt('invalid', e)
                break
            }
            Os(t, a)
            {
              v = /* @__PURE__ */ new Set()
              for (var S = e.attributes, k = 0; k < S.length; k++) {
                var T = S[k].name.toLowerCase()
                switch (T) {
                  case 'value':
                    break
                  case 'checked':
                    break
                  case 'selected':
                    break
                  default:
                    v.add(S[k].name)
                }
              }
            }
            var O = null
            for (var j in a)
              if (a.hasOwnProperty(j)) {
                var P = a[j]
                if (j === Zo)
                  typeof P == 'string'
                    ? e.textContent !== P &&
                      (a[Yu] !== !0 && vh(e.textContent, P, s, f),
                      (O = [Zo, P]))
                    : typeof P == 'number' &&
                      e.textContent !== '' + P &&
                      (a[Yu] !== !0 && vh(e.textContent, P, s, f),
                      (O = [Zo, '' + P]))
                else if (jn.hasOwnProperty(j))
                  P != null &&
                    (typeof P != 'function' && dh(j, P),
                    j === 'onScroll' && Jt('scroll', e))
                else if (
                  f && // Convince Flow we've calculated it (it's DEV-only in this method.)
                  typeof p == 'boolean'
                ) {
                  var he = void 0,
                    ze = p && jt ? null : Ar(j)
                  if (a[Yu] !== !0) {
                    if (
                      !(
                        j === sh ||
                        j === Yu || // Controlled attributes are not validated
                        // TODO: Only ignore them on controlled tags.
                        j === 'value' ||
                        j === 'checked' ||
                        j === 'selected'
                      )
                    ) {
                      if (j === jd) {
                        var ke = e.innerHTML,
                          vt = P ? P[ch] : void 0
                        if (vt != null) {
                          var st = FS(e, vt)
                          st !== ke && Hd(j, ke, st)
                        }
                      } else if (j === Jo) {
                        if ((v.delete(j), HS)) {
                          var M = Jm(P)
                          ;(he = e.getAttribute('style')),
                            M !== he && Hd(j, he, M)
                        }
                      } else if (p && !jt)
                        v.delete(j.toLowerCase()),
                          (he = uu(e, j, P)),
                          P !== he && Hd(j, he, P)
                      else if (!an(j, ze, p) && !Ut(j, P, ze, p)) {
                        var Y = !1
                        if (ze !== null)
                          v.delete(ze.attributeName), (he = vl(e, j, P, ze))
                        else {
                          var N = i
                          if ((N === ni && (N = Ms(t)), N === ni))
                            v.delete(j.toLowerCase())
                          else {
                            var J = GE(j)
                            J !== null && J !== j && ((Y = !0), v.delete(J)),
                              v.delete(j)
                          }
                          he = uu(e, j, P)
                        }
                        var me = jt
                        !me && P !== he && !Y && Hd(j, he, P)
                      }
                    }
                  }
                }
              }
            switch (
              (f && // $FlowFixMe - Should be inferred as not undefined.
                v.size > 0 &&
                a[Yu] !== !0 &&
                jS(v),
              t)
            ) {
              case 'input':
                yl(e), yo(e, a, !0)
                break
              case 'textarea':
                yl(e), Zp(e)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof a.onClick == 'function' && hh(e)
                break
            }
            return O
          }
          function qE(e, t, a) {
            var i = e.nodeValue !== t
            return i
          }
          function Uy(e, t) {
            {
              if (pa) return
              ;(pa = !0),
                m(
                  'Did not expect server HTML to contain a <%s> in <%s>.',
                  t.nodeName.toLowerCase(),
                  e.nodeName.toLowerCase()
                )
            }
          }
          function Oy(e, t) {
            {
              if (pa) return
              ;(pa = !0),
                m(
                  'Did not expect server HTML to contain the text node "%s" in <%s>.',
                  t.nodeValue,
                  e.nodeName.toLowerCase()
                )
            }
          }
          function Ay(e, t, a) {
            {
              if (pa) return
              ;(pa = !0),
                m(
                  'Expected server HTML to contain a matching <%s> in <%s>.',
                  t,
                  e.nodeName.toLowerCase()
                )
            }
          }
          function jy(e, t) {
            {
              if (t === '' || pa) return
              ;(pa = !0),
                m(
                  'Expected server HTML to contain a matching text node for "%s" in <%s>.',
                  t,
                  e.nodeName.toLowerCase()
                )
            }
          }
          function KE(e, t, a) {
            switch (t) {
              case 'input':
                Ip(e, a)
                return
              case 'textarea':
                kf(e, a)
                return
              case 'select':
                Qm(e, a)
                return
            }
          }
          var Fd = function () {},
            Vd = function () {}
          {
            var ZE = [
                'address',
                'applet',
                'area',
                'article',
                'aside',
                'base',
                'basefont',
                'bgsound',
                'blockquote',
                'body',
                'br',
                'button',
                'caption',
                'center',
                'col',
                'colgroup',
                'dd',
                'details',
                'dir',
                'div',
                'dl',
                'dt',
                'embed',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'frame',
                'frameset',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'head',
                'header',
                'hgroup',
                'hr',
                'html',
                'iframe',
                'img',
                'input',
                'isindex',
                'li',
                'link',
                'listing',
                'main',
                'marquee',
                'menu',
                'menuitem',
                'meta',
                'nav',
                'noembed',
                'noframes',
                'noscript',
                'object',
                'ol',
                'p',
                'param',
                'plaintext',
                'pre',
                'script',
                'section',
                'select',
                'source',
                'style',
                'summary',
                'table',
                'tbody',
                'td',
                'template',
                'textarea',
                'tfoot',
                'th',
                'thead',
                'title',
                'tr',
                'track',
                'ul',
                'wbr',
                'xmp',
              ],
              BS = [
                'applet',
                'caption',
                'html',
                'table',
                'td',
                'th',
                'marquee',
                'object',
                'template',
                // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
                // TODO: Distinguish by namespace here -- for <title>, including it here
                // errs on the side of fewer warnings
                'foreignObject',
                'desc',
                'title',
              ],
              JE = BS.concat(['button']),
              ew = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
              PS = {
                current: null,
                formTag: null,
                aTagInScope: null,
                buttonTagInScope: null,
                nobrTagInScope: null,
                pTagInButtonScope: null,
                listItemTagAutoclosing: null,
                dlItemTagAutoclosing: null,
              }
            Vd = function (e, t) {
              var a = ut({}, e || PS),
                i = {
                  tag: t,
                }
              return (
                BS.indexOf(t) !== -1 &&
                  ((a.aTagInScope = null),
                  (a.buttonTagInScope = null),
                  (a.nobrTagInScope = null)),
                JE.indexOf(t) !== -1 && (a.pTagInButtonScope = null),
                ZE.indexOf(t) !== -1 &&
                  t !== 'address' &&
                  t !== 'div' &&
                  t !== 'p' &&
                  ((a.listItemTagAutoclosing = null),
                  (a.dlItemTagAutoclosing = null)),
                (a.current = i),
                t === 'form' && (a.formTag = i),
                t === 'a' && (a.aTagInScope = i),
                t === 'button' && (a.buttonTagInScope = i),
                t === 'nobr' && (a.nobrTagInScope = i),
                t === 'p' && (a.pTagInButtonScope = i),
                t === 'li' && (a.listItemTagAutoclosing = i),
                (t === 'dd' || t === 'dt') && (a.dlItemTagAutoclosing = i),
                a
              )
            }
            var tw = function (e, t) {
                switch (t) {
                  case 'select':
                    return e === 'option' || e === 'optgroup' || e === '#text'
                  case 'optgroup':
                    return e === 'option' || e === '#text'
                  case 'option':
                    return e === '#text'
                  case 'tr':
                    return (
                      e === 'th' ||
                      e === 'td' ||
                      e === 'style' ||
                      e === 'script' ||
                      e === 'template'
                    )
                  case 'tbody':
                  case 'thead':
                  case 'tfoot':
                    return (
                      e === 'tr' ||
                      e === 'style' ||
                      e === 'script' ||
                      e === 'template'
                    )
                  case 'colgroup':
                    return e === 'col' || e === 'template'
                  case 'table':
                    return (
                      e === 'caption' ||
                      e === 'colgroup' ||
                      e === 'tbody' ||
                      e === 'tfoot' ||
                      e === 'thead' ||
                      e === 'style' ||
                      e === 'script' ||
                      e === 'template'
                    )
                  case 'head':
                    return (
                      e === 'base' ||
                      e === 'basefont' ||
                      e === 'bgsound' ||
                      e === 'link' ||
                      e === 'meta' ||
                      e === 'title' ||
                      e === 'noscript' ||
                      e === 'noframes' ||
                      e === 'style' ||
                      e === 'script' ||
                      e === 'template'
                    )
                  case 'html':
                    return e === 'head' || e === 'body' || e === 'frameset'
                  case 'frameset':
                    return e === 'frame'
                  case '#document':
                    return e === 'html'
                }
                switch (e) {
                  case 'h1':
                  case 'h2':
                  case 'h3':
                  case 'h4':
                  case 'h5':
                  case 'h6':
                    return (
                      t !== 'h1' &&
                      t !== 'h2' &&
                      t !== 'h3' &&
                      t !== 'h4' &&
                      t !== 'h5' &&
                      t !== 'h6'
                    )
                  case 'rp':
                  case 'rt':
                    return ew.indexOf(t) === -1
                  case 'body':
                  case 'caption':
                  case 'col':
                  case 'colgroup':
                  case 'frameset':
                  case 'frame':
                  case 'head':
                  case 'html':
                  case 'tbody':
                  case 'td':
                  case 'tfoot':
                  case 'th':
                  case 'thead':
                  case 'tr':
                    return t == null
                }
                return !0
              },
              nw = function (e, t) {
                switch (e) {
                  case 'address':
                  case 'article':
                  case 'aside':
                  case 'blockquote':
                  case 'center':
                  case 'details':
                  case 'dialog':
                  case 'dir':
                  case 'div':
                  case 'dl':
                  case 'fieldset':
                  case 'figcaption':
                  case 'figure':
                  case 'footer':
                  case 'header':
                  case 'hgroup':
                  case 'main':
                  case 'menu':
                  case 'nav':
                  case 'ol':
                  case 'p':
                  case 'section':
                  case 'summary':
                  case 'ul':
                  case 'pre':
                  case 'listing':
                  case 'table':
                  case 'hr':
                  case 'xmp':
                  case 'h1':
                  case 'h2':
                  case 'h3':
                  case 'h4':
                  case 'h5':
                  case 'h6':
                    return t.pTagInButtonScope
                  case 'form':
                    return t.formTag || t.pTagInButtonScope
                  case 'li':
                    return t.listItemTagAutoclosing
                  case 'dd':
                  case 'dt':
                    return t.dlItemTagAutoclosing
                  case 'button':
                    return t.buttonTagInScope
                  case 'a':
                    return t.aTagInScope
                  case 'nobr':
                    return t.nobrTagInScope
                }
                return null
              },
              YS = {}
            Fd = function (e, t, a) {
              a = a || PS
              var i = a.current,
                u = i && i.tag
              t != null &&
                (e != null &&
                  m(
                    'validateDOMNesting: when childText is passed, childTag should be null'
                  ),
                (e = '#text'))
              var s = tw(e, u) ? null : i,
                f = s ? null : nw(e, a),
                p = s || f
              if (p) {
                var v = p.tag,
                  g = !!s + '|' + e + '|' + v
                if (!YS[g]) {
                  YS[g] = !0
                  var S = e,
                    k = ''
                  if (
                    (e === '#text'
                      ? /\S/.test(t)
                        ? (S = 'Text nodes')
                        : ((S = 'Whitespace text nodes'),
                          (k =
                            " Make sure you don't have any extra whitespace between tags on each line of your source code."))
                      : (S = '<' + e + '>'),
                    s)
                  ) {
                    var T = ''
                    v === 'table' &&
                      e === 'tr' &&
                      (T +=
                        ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
                      m(
                        'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                        S,
                        v,
                        k,
                        T
                      )
                  } else
                    m(
                      'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
                      S,
                      v
                    )
                }
              }
            }
          }
          var mh = 'suppressHydrationWarning',
            yh = '$',
            gh = '/$',
            Bd = '$?',
            Pd = '$!',
            rw = 'style',
            Hy = null,
            Fy = null
          function aw(e) {
            var t,
              a,
              i = e.nodeType
            switch (i) {
              case Da:
              case gl: {
                t = i === Da ? '#document' : '#fragment'
                var u = e.documentElement
                a = u ? u.namespaceURI : _f(null, '')
                break
              }
              default: {
                var s = i === dn ? e.parentNode : e,
                  f = s.namespaceURI || null
                ;(t = s.tagName), (a = _f(f, t))
                break
              }
            }
            {
              var p = t.toLowerCase(),
                v = Vd(null, p)
              return {
                namespace: a,
                ancestorInfo: v,
              }
            }
          }
          function iw(e, t, a) {
            {
              var i = e,
                u = _f(i.namespace, t),
                s = Vd(i.ancestorInfo, t)
              return {
                namespace: u,
                ancestorInfo: s,
              }
            }
          }
          function MD(e) {
            return e
          }
          function lw(e) {
            ;(Hy = $r()), (Fy = xE())
            var t = null
            return Un(!1), t
          }
          function uw(e) {
            CE(Fy), Un(Hy), (Hy = null), (Fy = null)
          }
          function ow(e, t, a, i, u) {
            var s
            {
              var f = i
              if (
                (Fd(e, null, f.ancestorInfo),
                typeof t.children == 'string' || typeof t.children == 'number')
              ) {
                var p = '' + t.children,
                  v = Vd(f.ancestorInfo, e)
                Fd(null, p, v)
              }
              s = f.namespace
            }
            var g = YE(e, t, a, s)
            return Id(u, g), Wy(g, t), g
          }
          function sw(e, t) {
            e.appendChild(t)
          }
          function cw(e, t, a, i, u) {
            switch ((IE(e, t, a, i), t)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                return !!a.autoFocus
              case 'img':
                return !0
              default:
                return !1
            }
          }
          function fw(e, t, a, i, u, s) {
            {
              var f = s
              if (
                typeof i.children != typeof a.children &&
                (typeof i.children == 'string' || typeof i.children == 'number')
              ) {
                var p = '' + i.children,
                  v = Vd(f.ancestorInfo, t)
                Fd(null, p, v)
              }
            }
            return QE(e, t, a, i)
          }
          function Vy(e, t) {
            return (
              e === 'textarea' ||
              e === 'noscript' ||
              typeof t.children == 'string' ||
              typeof t.children == 'number' ||
              (typeof t.dangerouslySetInnerHTML == 'object' &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
            )
          }
          function dw(e, t, a, i) {
            {
              var u = a
              Fd(null, e, u.ancestorInfo)
            }
            var s = $E(e, t)
            return Id(i, s), s
          }
          function pw() {
            var e = window.event
            return e === void 0 ? di : ur(e.type)
          }
          var By = typeof setTimeout == 'function' ? setTimeout : void 0,
            vw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
            Py = -1,
            $S = typeof Promise == 'function' ? Promise : void 0,
            hw =
              typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof $S < 'u'
                ? function (e) {
                    return $S.resolve(null).then(e).catch(mw)
                  }
                : By
          function mw(e) {
            setTimeout(function () {
              throw e
            })
          }
          function yw(e, t, a, i) {
            switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a.autoFocus && e.focus()
                return
              case 'img': {
                a.src && (e.src = a.src)
                return
              }
            }
          }
          function gw(e, t, a, i, u, s) {
            WE(e, t, a, i, u), Wy(e, u)
          }
          function IS(e) {
            zs(e, '')
          }
          function Sw(e, t, a) {
            e.nodeValue = a
          }
          function xw(e, t) {
            e.appendChild(t)
          }
          function Cw(e, t) {
            var a
            e.nodeType === dn
              ? ((a = e.parentNode), a.insertBefore(t, e))
              : ((a = e), a.appendChild(t))
            var i = e._reactRootContainer
            i == null && a.onclick === null && hh(a)
          }
          function Ew(e, t, a) {
            e.insertBefore(t, a)
          }
          function ww(e, t, a) {
            e.nodeType === dn
              ? e.parentNode.insertBefore(t, a)
              : e.insertBefore(t, a)
          }
          function Rw(e, t) {
            e.removeChild(t)
          }
          function Tw(e, t) {
            e.nodeType === dn ? e.parentNode.removeChild(t) : e.removeChild(t)
          }
          function Yy(e, t) {
            var a = t,
              i = 0
            do {
              var u = a.nextSibling
              if ((e.removeChild(a), u && u.nodeType === dn)) {
                var s = u.data
                if (s === gh)
                  if (i === 0) {
                    e.removeChild(u), ot(t)
                    return
                  } else i--
                else (s === yh || s === Bd || s === Pd) && i++
              }
              a = u
            } while (a)
            ot(t)
          }
          function bw(e, t) {
            e.nodeType === dn
              ? Yy(e.parentNode, t)
              : e.nodeType === Sr && Yy(e, t),
              ot(e)
          }
          function kw(e) {
            e = e
            var t = e.style
            typeof t.setProperty == 'function'
              ? t.setProperty('display', 'none', 'important')
              : (t.display = 'none')
          }
          function Dw(e) {
            e.nodeValue = ''
          }
          function _w(e, t) {
            e = e
            var a = t[rw],
              i = a != null && a.hasOwnProperty('display') ? a.display : null
            e.style.display = Us('display', i)
          }
          function Lw(e, t) {
            e.nodeValue = t
          }
          function Mw(e) {
            e.nodeType === Sr
              ? (e.textContent = '')
              : e.nodeType === Da &&
                e.documentElement &&
                e.removeChild(e.documentElement)
          }
          function Nw(e, t, a) {
            return e.nodeType !== Sr ||
              t.toLowerCase() !== e.nodeName.toLowerCase()
              ? null
              : e
          }
          function zw(e, t) {
            return t === '' || e.nodeType !== ri ? null : e
          }
          function Uw(e) {
            return e.nodeType !== dn ? null : e
          }
          function QS(e) {
            return e.data === Bd
          }
          function $y(e) {
            return e.data === Pd
          }
          function Ow(e) {
            var t = e.nextSibling && e.nextSibling.dataset,
              a,
              i,
              u
            return (
              t && ((a = t.dgst), (i = t.msg), (u = t.stck)),
              {
                message: i,
                digest: a,
                stack: u,
              }
            )
          }
          function Aw(e, t) {
            e._reactRetry = t
          }
          function Sh(e) {
            for (; e != null; e = e.nextSibling) {
              var t = e.nodeType
              if (t === Sr || t === ri) break
              if (t === dn) {
                var a = e.data
                if (a === yh || a === Pd || a === Bd) break
                if (a === gh) return null
              }
            }
            return e
          }
          function Yd(e) {
            return Sh(e.nextSibling)
          }
          function jw(e) {
            return Sh(e.firstChild)
          }
          function Hw(e) {
            return Sh(e.firstChild)
          }
          function Fw(e) {
            return Sh(e.nextSibling)
          }
          function Vw(e, t, a, i, u, s, f) {
            Id(s, e), Wy(e, a)
            var p
            {
              var v = u
              p = v.namespace
            }
            var g = (s.mode & it) !== Oe
            return XE(e, t, a, p, i, g, f)
          }
          function Bw(e, t, a, i) {
            return Id(a, e), a.mode & it, qE(e, t)
          }
          function Pw(e, t) {
            Id(t, e)
          }
          function Yw(e) {
            for (var t = e.nextSibling, a = 0; t; ) {
              if (t.nodeType === dn) {
                var i = t.data
                if (i === gh) {
                  if (a === 0) return Yd(t)
                  a--
                } else (i === yh || i === Pd || i === Bd) && a++
              }
              t = t.nextSibling
            }
            return null
          }
          function WS(e) {
            for (var t = e.previousSibling, a = 0; t; ) {
              if (t.nodeType === dn) {
                var i = t.data
                if (i === yh || i === Pd || i === Bd) {
                  if (a === 0) return t
                  a--
                } else i === gh && a++
              }
              t = t.previousSibling
            }
            return null
          }
          function $w(e) {
            ot(e)
          }
          function Iw(e) {
            ot(e)
          }
          function Qw(e) {
            return e !== 'head' && e !== 'body'
          }
          function Ww(e, t, a, i) {
            var u = !0
            vh(t.nodeValue, a, i, u)
          }
          function Gw(e, t, a, i, u, s) {
            if (t[mh] !== !0) {
              var f = !0
              vh(i.nodeValue, u, s, f)
            }
          }
          function Xw(e, t) {
            t.nodeType === Sr ? Uy(e, t) : t.nodeType === dn || Oy(e, t)
          }
          function qw(e, t) {
            {
              var a = e.parentNode
              a !== null &&
                (t.nodeType === Sr ? Uy(a, t) : t.nodeType === dn || Oy(a, t))
            }
          }
          function Kw(e, t, a, i, u) {
            ;(u || t[mh] !== !0) &&
              (i.nodeType === Sr ? Uy(a, i) : i.nodeType === dn || Oy(a, i))
          }
          function Zw(e, t, a) {
            Ay(e, t)
          }
          function Jw(e, t) {
            jy(e, t)
          }
          function eR(e, t, a) {
            {
              var i = e.parentNode
              i !== null && Ay(i, t)
            }
          }
          function tR(e, t) {
            {
              var a = e.parentNode
              a !== null && jy(a, t)
            }
          }
          function nR(e, t, a, i, u, s) {
            ;(s || t[mh] !== !0) && Ay(a, i)
          }
          function rR(e, t, a, i, u) {
            ;(u || t[mh] !== !0) && jy(a, i)
          }
          function aR(e) {
            m(
              'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
              e.nodeName.toLowerCase()
            )
          }
          function iR(e) {
            Od(e)
          }
          var Vc = Math.random().toString(36).slice(2),
            Bc = '__reactFiber$' + Vc,
            Iy = '__reactProps$' + Vc,
            $d = '__reactContainer$' + Vc,
            Qy = '__reactEvents$' + Vc,
            lR = '__reactListeners$' + Vc,
            uR = '__reactHandles$' + Vc
          function oR(e) {
            delete e[Bc], delete e[Iy], delete e[Qy], delete e[lR], delete e[uR]
          }
          function Id(e, t) {
            t[Bc] = e
          }
          function xh(e, t) {
            t[$d] = e
          }
          function GS(e) {
            e[$d] = null
          }
          function Qd(e) {
            return !!e[$d]
          }
          function es(e) {
            var t = e[Bc]
            if (t) return t
            for (var a = e.parentNode; a; ) {
              if (((t = a[$d] || a[Bc]), t)) {
                var i = t.alternate
                if (t.child !== null || (i !== null && i.child !== null))
                  for (var u = WS(e); u !== null; ) {
                    var s = u[Bc]
                    if (s) return s
                    u = WS(u)
                  }
                return t
              }
              ;(e = a), (a = e.parentNode)
            }
            return null
          }
          function $u(e) {
            var t = e[Bc] || e[$d]
            return t &&
              (t.tag === K || t.tag === re || t.tag === de || t.tag === B)
              ? t
              : null
          }
          function Pc(e) {
            if (e.tag === K || e.tag === re) return e.stateNode
            throw new Error('getNodeFromInstance: Invalid argument.')
          }
          function Ch(e) {
            return e[Iy] || null
          }
          function Wy(e, t) {
            e[Iy] = t
          }
          function sR(e) {
            var t = e[Qy]
            return t === void 0 && (t = e[Qy] = /* @__PURE__ */ new Set()), t
          }
          var XS = {},
            qS = y.ReactDebugCurrentFrame
          function Eh(e) {
            if (e) {
              var t = e._owner,
                a = oo(e.type, e._source, t ? t.type : null)
              qS.setExtraStackFrame(a)
            } else qS.setExtraStackFrame(null)
          }
          function yi(e, t, a, i, u) {
            {
              var s = Function.call.bind(bn)
              for (var f in e)
                if (s(e, f)) {
                  var p = void 0
                  try {
                    if (typeof e[f] != 'function') {
                      var v = Error(
                        (i || 'React class') +
                          ': ' +
                          a +
                          ' type `' +
                          f +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof e[f] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                      )
                      throw ((v.name = 'Invariant Violation'), v)
                    }
                    p = e[f](
                      t,
                      f,
                      i,
                      a,
                      null,
                      'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                    )
                  } catch (g) {
                    p = g
                  }
                  p &&
                    !(p instanceof Error) &&
                    (Eh(u),
                    m(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      i || 'React class',
                      a,
                      f,
                      typeof p
                    ),
                    Eh(null)),
                    p instanceof Error &&
                      !(p.message in XS) &&
                      ((XS[p.message] = !0),
                      Eh(u),
                      m('Failed %s type: %s', a, p.message),
                      Eh(null))
                }
            }
          }
          var Gy = [],
            wh
          wh = []
          var Ql = -1
          function Iu(e) {
            return {
              current: e,
            }
          }
          function Dr(e, t) {
            if (Ql < 0) {
              m('Unexpected pop.')
              return
            }
            t !== wh[Ql] && m('Unexpected Fiber popped.'),
              (e.current = Gy[Ql]),
              (Gy[Ql] = null),
              (wh[Ql] = null),
              Ql--
          }
          function _r(e, t, a) {
            Ql++, (Gy[Ql] = e.current), (wh[Ql] = a), (e.current = t)
          }
          var Xy
          Xy = {}
          var za = {}
          Object.freeze(za)
          var Wl = Iu(za),
            nl = Iu(!1),
            qy = za
          function Yc(e, t, a) {
            return a && rl(t) ? qy : Wl.current
          }
          function KS(e, t, a) {
            {
              var i = e.stateNode
              ;(i.__reactInternalMemoizedUnmaskedChildContext = t),
                (i.__reactInternalMemoizedMaskedChildContext = a)
            }
          }
          function $c(e, t) {
            {
              var a = e.type,
                i = a.contextTypes
              if (!i) return za
              var u = e.stateNode
              if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
                return u.__reactInternalMemoizedMaskedChildContext
              var s = {}
              for (var f in i) s[f] = t[f]
              {
                var p = Xe(e) || 'Unknown'
                yi(i, s, 'context', p)
              }
              return u && KS(e, t, s), s
            }
          }
          function Rh() {
            return nl.current
          }
          function rl(e) {
            {
              var t = e.childContextTypes
              return t != null
            }
          }
          function Th(e) {
            Dr(nl, e), Dr(Wl, e)
          }
          function Ky(e) {
            Dr(nl, e), Dr(Wl, e)
          }
          function ZS(e, t, a) {
            {
              if (Wl.current !== za)
                throw new Error(
                  'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
                )
              _r(Wl, t, e), _r(nl, a, e)
            }
          }
          function JS(e, t, a) {
            {
              var i = e.stateNode,
                u = t.childContextTypes
              if (typeof i.getChildContext != 'function') {
                {
                  var s = Xe(e) || 'Unknown'
                  Xy[s] ||
                    ((Xy[s] = !0),
                    m(
                      '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
                      s,
                      s
                    ))
                }
                return a
              }
              var f = i.getChildContext()
              for (var p in f)
                if (!(p in u))
                  throw new Error(
                    (Xe(e) || 'Unknown') +
                      '.getChildContext(): key "' +
                      p +
                      '" is not defined in childContextTypes.'
                  )
              {
                var v = Xe(e) || 'Unknown'
                yi(u, f, 'child context', v)
              }
              return ut({}, a, f)
            }
          }
          function bh(e) {
            {
              var t = e.stateNode,
                a = (t && t.__reactInternalMemoizedMergedChildContext) || za
              return (qy = Wl.current), _r(Wl, a, e), _r(nl, nl.current, e), !0
            }
          }
          function e1(e, t, a) {
            {
              var i = e.stateNode
              if (!i)
                throw new Error(
                  'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
                )
              if (a) {
                var u = JS(e, t, qy)
                ;(i.__reactInternalMemoizedMergedChildContext = u),
                  Dr(nl, e),
                  Dr(Wl, e),
                  _r(Wl, u, e),
                  _r(nl, a, e)
              } else Dr(nl, e), _r(nl, a, e)
            }
          }
          function cR(e) {
            {
              if (!Xf(e) || e.tag !== $)
                throw new Error(
                  'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
                )
              var t = e
              do {
                switch (t.tag) {
                  case B:
                    return t.stateNode.context
                  case $: {
                    var a = t.type
                    if (rl(a))
                      return t.stateNode
                        .__reactInternalMemoizedMergedChildContext
                    break
                  }
                }
                t = t.return
              } while (t !== null)
              throw new Error(
                'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'
              )
            }
          }
          var Qu = 0,
            kh = 1,
            Gl = null,
            Zy = !1,
            Jy = !1
          function t1(e) {
            Gl === null ? (Gl = [e]) : Gl.push(e)
          }
          function fR(e) {
            ;(Zy = !0), t1(e)
          }
          function n1() {
            Zy && Wu()
          }
          function Wu() {
            if (!Jy && Gl !== null) {
              Jy = !0
              var e = 0,
                t = sa()
              try {
                var a = !0,
                  i = Gl
                for (Cn(Jn); e < i.length; e++) {
                  var u = i[e]
                  do u = u(a)
                  while (u !== null)
                }
                ;(Gl = null), (Zy = !1)
              } catch (s) {
                throw (Gl !== null && (Gl = Gl.slice(e + 1)), Is(Ws, Wu), s)
              } finally {
                Cn(t), (Jy = !1)
              }
            }
            return null
          }
          var Ic = [],
            Qc = 0,
            Dh = null,
            _h = 0,
            Qa = [],
            Wa = 0,
            ts = null,
            Xl = 1,
            ql = ''
          function dR(e) {
            return rs(), (e.flags & Qf) !== Me
          }
          function pR(e) {
            return rs(), _h
          }
          function vR() {
            var e = ql,
              t = Xl,
              a = t & ~hR(t)
            return a.toString(32) + e
          }
          function ns(e, t) {
            rs(), (Ic[Qc++] = _h), (Ic[Qc++] = Dh), (Dh = e), (_h = t)
          }
          function r1(e, t, a) {
            rs(), (Qa[Wa++] = Xl), (Qa[Wa++] = ql), (Qa[Wa++] = ts), (ts = e)
            var i = Xl,
              u = ql,
              s = Lh(i) - 1,
              f = i & ~(1 << s),
              p = a + 1,
              v = Lh(t) + s
            if (v > 30) {
              var g = s - (s % 5),
                S = (1 << g) - 1,
                k = (f & S).toString(32),
                T = f >> g,
                O = s - g,
                j = Lh(t) + O,
                P = p << O,
                he = P | T,
                ze = k + u
              ;(Xl = (1 << j) | he), (ql = ze)
            } else {
              var ke = p << s,
                vt = ke | f,
                st = u
              ;(Xl = (1 << v) | vt), (ql = st)
            }
          }
          function eg(e) {
            rs()
            var t = e.return
            if (t !== null) {
              var a = 1,
                i = 0
              ns(e, a), r1(e, a, i)
            }
          }
          function Lh(e) {
            return 32 - Js(e)
          }
          function hR(e) {
            return 1 << (Lh(e) - 1)
          }
          function tg(e) {
            for (; e === Dh; )
              (Dh = Ic[--Qc]), (Ic[Qc] = null), (_h = Ic[--Qc]), (Ic[Qc] = null)
            for (; e === ts; )
              (ts = Qa[--Wa]),
                (Qa[Wa] = null),
                (ql = Qa[--Wa]),
                (Qa[Wa] = null),
                (Xl = Qa[--Wa]),
                (Qa[Wa] = null)
          }
          function mR() {
            return (
              rs(),
              ts !== null
                ? {
                    id: Xl,
                    overflow: ql,
                  }
                : null
            )
          }
          function yR(e, t) {
            rs(),
              (Qa[Wa++] = Xl),
              (Qa[Wa++] = ql),
              (Qa[Wa++] = ts),
              (Xl = t.id),
              (ql = t.overflow),
              (ts = e)
          }
          function rs() {
            sr() ||
              m(
                'Expected to be hydrating. This is a bug in React. Please file an issue.'
              )
          }
          var or = null,
            Ga = null,
            gi = !1,
            as = !1,
            Gu = null
          function gR() {
            gi &&
              m(
                'We should not be hydrating here. This is a bug in React. Please file a bug.'
              )
          }
          function a1() {
            as = !0
          }
          function SR() {
            return as
          }
          function xR(e) {
            var t = e.stateNode.containerInfo
            return (Ga = Hw(t)), (or = e), (gi = !0), (Gu = null), (as = !1), !0
          }
          function CR(e, t, a) {
            return (
              (Ga = Fw(t)),
              (or = e),
              (gi = !0),
              (Gu = null),
              (as = !1),
              a !== null && yR(e, a),
              !0
            )
          }
          function i1(e, t) {
            switch (e.tag) {
              case B: {
                Xw(e.stateNode.containerInfo, t)
                break
              }
              case K: {
                var a = (e.mode & it) !== Oe
                Kw(
                  e.type,
                  e.memoizedProps,
                  e.stateNode,
                  t,
                  // TODO: Delete this argument when we remove the legacy root API.
                  a
                )
                break
              }
              case de: {
                var i = e.memoizedState
                i.dehydrated !== null && qw(i.dehydrated, t)
                break
              }
            }
          }
          function l1(e, t) {
            i1(e, t)
            var a = Rk()
            ;(a.stateNode = t), (a.return = e)
            var i = e.deletions
            i === null ? ((e.deletions = [a]), (e.flags |= xt)) : i.push(a)
          }
          function ng(e, t) {
            {
              if (as) return
              switch (e.tag) {
                case B: {
                  var a = e.stateNode.containerInfo
                  switch (t.tag) {
                    case K:
                      var i = t.type
                      t.pendingProps, Zw(a, i)
                      break
                    case re:
                      var u = t.pendingProps
                      Jw(a, u)
                      break
                  }
                  break
                }
                case K: {
                  var s = e.type,
                    f = e.memoizedProps,
                    p = e.stateNode
                  switch (t.tag) {
                    case K: {
                      var v = t.type,
                        g = t.pendingProps,
                        S = (e.mode & it) !== Oe
                      nR(
                        s,
                        f,
                        p,
                        v,
                        g,
                        // TODO: Delete this argument when we remove the legacy root API.
                        S
                      )
                      break
                    }
                    case re: {
                      var k = t.pendingProps,
                        T = (e.mode & it) !== Oe
                      rR(
                        s,
                        f,
                        p,
                        k,
                        // TODO: Delete this argument when we remove the legacy root API.
                        T
                      )
                      break
                    }
                  }
                  break
                }
                case de: {
                  var O = e.memoizedState,
                    j = O.dehydrated
                  if (j !== null)
                    switch (t.tag) {
                      case K:
                        var P = t.type
                        t.pendingProps, eR(j, P)
                        break
                      case re:
                        var he = t.pendingProps
                        tR(j, he)
                        break
                    }
                  break
                }
                default:
                  return
              }
            }
          }
          function u1(e, t) {
            ;(t.flags = (t.flags & ~aa) | Ft), ng(e, t)
          }
          function o1(e, t) {
            switch (e.tag) {
              case K: {
                var a = e.type
                e.pendingProps
                var i = Nw(t, a)
                return i !== null
                  ? ((e.stateNode = i), (or = e), (Ga = jw(i)), !0)
                  : !1
              }
              case re: {
                var u = e.pendingProps,
                  s = zw(t, u)
                return s !== null
                  ? ((e.stateNode = s), (or = e), (Ga = null), !0)
                  : !1
              }
              case de: {
                var f = Uw(t)
                if (f !== null) {
                  var p = {
                    dehydrated: f,
                    treeContext: mR(),
                    retryLane: br,
                  }
                  e.memoizedState = p
                  var v = Tk(f)
                  return (
                    (v.return = e), (e.child = v), (or = e), (Ga = null), !0
                  )
                }
                return !1
              }
              default:
                return !1
            }
          }
          function rg(e) {
            return (e.mode & it) !== Oe && (e.flags & Ye) === Me
          }
          function ag(e) {
            throw new Error(
              'Hydration failed because the initial UI does not match what was rendered on the server.'
            )
          }
          function ig(e) {
            if (gi) {
              var t = Ga
              if (!t) {
                rg(e) && (ng(or, e), ag()), u1(or, e), (gi = !1), (or = e)
                return
              }
              var a = t
              if (!o1(e, t)) {
                rg(e) && (ng(or, e), ag()), (t = Yd(a))
                var i = or
                if (!t || !o1(e, t)) {
                  u1(or, e), (gi = !1), (or = e)
                  return
                }
                l1(i, a)
              }
            }
          }
          function ER(e, t, a) {
            var i = e.stateNode,
              u = !as,
              s = Vw(i, e.type, e.memoizedProps, t, a, e, u)
            return (e.updateQueue = s), s !== null
          }
          function wR(e) {
            var t = e.stateNode,
              a = e.memoizedProps,
              i = Bw(t, a, e)
            if (i) {
              var u = or
              if (u !== null)
                switch (u.tag) {
                  case B: {
                    var s = u.stateNode.containerInfo,
                      f = (u.mode & it) !== Oe
                    Ww(
                      s,
                      t,
                      a,
                      // TODO: Delete this argument when we remove the legacy root API.
                      f
                    )
                    break
                  }
                  case K: {
                    var p = u.type,
                      v = u.memoizedProps,
                      g = u.stateNode,
                      S = (u.mode & it) !== Oe
                    Gw(
                      p,
                      v,
                      g,
                      t,
                      a,
                      // TODO: Delete this argument when we remove the legacy root API.
                      S
                    )
                    break
                  }
                }
            }
            return i
          }
          function RR(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null
            if (!a)
              throw new Error(
                'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
              )
            Pw(a, e)
          }
          function TR(e) {
            var t = e.memoizedState,
              a = t !== null ? t.dehydrated : null
            if (!a)
              throw new Error(
                'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
              )
            return Yw(a)
          }
          function s1(e) {
            for (
              var t = e.return;
              t !== null && t.tag !== K && t.tag !== B && t.tag !== de;

            )
              t = t.return
            or = t
          }
          function Mh(e) {
            if (e !== or) return !1
            if (!gi) return s1(e), (gi = !0), !1
            if (
              e.tag !== B &&
              (e.tag !== K || (Qw(e.type) && !Vy(e.type, e.memoizedProps)))
            ) {
              var t = Ga
              if (t)
                if (rg(e)) c1(e), ag()
                else for (; t; ) l1(e, t), (t = Yd(t))
            }
            return (
              s1(e),
              e.tag === de ? (Ga = TR(e)) : (Ga = or ? Yd(e.stateNode) : null),
              !0
            )
          }
          function bR() {
            return gi && Ga !== null
          }
          function c1(e) {
            for (var t = Ga; t; ) i1(e, t), (t = Yd(t))
          }
          function Wc() {
            ;(or = null), (Ga = null), (gi = !1), (as = !1)
          }
          function f1() {
            Gu !== null && (iC(Gu), (Gu = null))
          }
          function sr() {
            return gi
          }
          function lg(e) {
            Gu === null ? (Gu = [e]) : Gu.push(e)
          }
          var kR = y.ReactCurrentBatchConfig,
            DR = null
          function _R() {
            return kR.transition
          }
          var Si = {
            recordUnsafeLifecycleWarnings: function (e, t) {},
            flushPendingUnsafeLifecycleWarnings: function () {},
            recordLegacyContextWarning: function (e, t) {},
            flushLegacyContextWarning: function () {},
            discardPendingWarnings: function () {},
          }
          {
            var LR = function (e) {
                for (var t = null, a = e; a !== null; )
                  a.mode & Kt && (t = a), (a = a.return)
                return t
              },
              is = function (e) {
                var t = []
                return (
                  e.forEach(function (a) {
                    t.push(a)
                  }),
                  t.sort().join(', ')
                )
              },
              Wd = [],
              Gd = [],
              Xd = [],
              qd = [],
              Kd = [],
              Zd = [],
              ls = /* @__PURE__ */ new Set()
            ;(Si.recordUnsafeLifecycleWarnings = function (e, t) {
              ls.has(e.type) ||
                (typeof t.componentWillMount == 'function' && // Don't warn about react-lifecycles-compat polyfilled components.
                  t.componentWillMount.__suppressDeprecationWarning !== !0 &&
                  Wd.push(e),
                e.mode & Kt &&
                  typeof t.UNSAFE_componentWillMount == 'function' &&
                  Gd.push(e),
                typeof t.componentWillReceiveProps == 'function' &&
                  t.componentWillReceiveProps.__suppressDeprecationWarning !==
                    !0 &&
                  Xd.push(e),
                e.mode & Kt &&
                  typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                  qd.push(e),
                typeof t.componentWillUpdate == 'function' &&
                  t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
                  Kd.push(e),
                e.mode & Kt &&
                  typeof t.UNSAFE_componentWillUpdate == 'function' &&
                  Zd.push(e))
            }),
              (Si.flushPendingUnsafeLifecycleWarnings = function () {
                var e = /* @__PURE__ */ new Set()
                Wd.length > 0 &&
                  (Wd.forEach(function (T) {
                    e.add(Xe(T) || 'Component'), ls.add(T.type)
                  }),
                  (Wd = []))
                var t = /* @__PURE__ */ new Set()
                Gd.length > 0 &&
                  (Gd.forEach(function (T) {
                    t.add(Xe(T) || 'Component'), ls.add(T.type)
                  }),
                  (Gd = []))
                var a = /* @__PURE__ */ new Set()
                Xd.length > 0 &&
                  (Xd.forEach(function (T) {
                    a.add(Xe(T) || 'Component'), ls.add(T.type)
                  }),
                  (Xd = []))
                var i = /* @__PURE__ */ new Set()
                qd.length > 0 &&
                  (qd.forEach(function (T) {
                    i.add(Xe(T) || 'Component'), ls.add(T.type)
                  }),
                  (qd = []))
                var u = /* @__PURE__ */ new Set()
                Kd.length > 0 &&
                  (Kd.forEach(function (T) {
                    u.add(Xe(T) || 'Component'), ls.add(T.type)
                  }),
                  (Kd = []))
                var s = /* @__PURE__ */ new Set()
                if (
                  (Zd.length > 0 &&
                    (Zd.forEach(function (T) {
                      s.add(Xe(T) || 'Component'), ls.add(T.type)
                    }),
                    (Zd = [])),
                  t.size > 0)
                ) {
                  var f = is(t)
                  m(
                    `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                    f
                  )
                }
                if (i.size > 0) {
                  var p = is(i)
                  m(
                    `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
                    p
                  )
                }
                if (s.size > 0) {
                  var v = is(s)
                  m(
                    `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                    v
                  )
                }
                if (e.size > 0) {
                  var g = is(e)
                  A(
                    `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    g
                  )
                }
                if (a.size > 0) {
                  var S = is(a)
                  A(
                    `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    S
                  )
                }
                if (u.size > 0) {
                  var k = is(u)
                  A(
                    `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                    k
                  )
                }
              })
            var Nh = /* @__PURE__ */ new Map(),
              d1 = /* @__PURE__ */ new Set()
            ;(Si.recordLegacyContextWarning = function (e, t) {
              var a = LR(e)
              if (a === null) {
                m(
                  'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
                )
                return
              }
              if (!d1.has(e.type)) {
                var i = Nh.get(a)
                ;(e.type.contextTypes != null ||
                  e.type.childContextTypes != null ||
                  (t !== null && typeof t.getChildContext == 'function')) &&
                  (i === void 0 && ((i = []), Nh.set(a, i)), i.push(e))
              }
            }),
              (Si.flushLegacyContextWarning = function () {
                Nh.forEach(function (e, t) {
                  if (e.length !== 0) {
                    var a = e[0],
                      i = /* @__PURE__ */ new Set()
                    e.forEach(function (s) {
                      i.add(Xe(s) || 'Component'), d1.add(s.type)
                    })
                    var u = is(i)
                    try {
                      kt(a),
                        m(
                          `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                          u
                        )
                    } finally {
                      gn()
                    }
                  }
                })
              }),
              (Si.discardPendingWarnings = function () {
                ;(Wd = []),
                  (Gd = []),
                  (Xd = []),
                  (qd = []),
                  (Kd = []),
                  (Zd = []),
                  (Nh = /* @__PURE__ */ new Map())
              })
          }
          function xi(e, t) {
            if (e && e.defaultProps) {
              var a = ut({}, t),
                i = e.defaultProps
              for (var u in i) a[u] === void 0 && (a[u] = i[u])
              return a
            }
            return t
          }
          var ug = Iu(null),
            og
          og = {}
          var zh = null,
            Gc = null,
            sg = null,
            Uh = !1
          function Oh() {
            ;(zh = null), (Gc = null), (sg = null), (Uh = !1)
          }
          function p1() {
            Uh = !0
          }
          function v1() {
            Uh = !1
          }
          function h1(e, t, a) {
            _r(ug, t._currentValue, e),
              (t._currentValue = a),
              t._currentRenderer !== void 0 &&
                t._currentRenderer !== null &&
                t._currentRenderer !== og &&
                m(
                  'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
                ),
              (t._currentRenderer = og)
          }
          function cg(e, t) {
            var a = ug.current
            Dr(ug, t), (e._currentValue = a)
          }
          function fg(e, t, a) {
            for (var i = e; i !== null; ) {
              var u = i.alternate
              if (
                (Ol(i.childLanes, t)
                  ? u !== null &&
                    !Ol(u.childLanes, t) &&
                    (u.childLanes = Ke(u.childLanes, t))
                  : ((i.childLanes = Ke(i.childLanes, t)),
                    u !== null && (u.childLanes = Ke(u.childLanes, t))),
                i === a)
              )
                break
              i = i.return
            }
            i !== a &&
              m(
                'Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.'
              )
          }
          function MR(e, t, a) {
            NR(e, t, a)
          }
          function NR(e, t, a) {
            var i = e.child
            for (i !== null && (i.return = e); i !== null; ) {
              var u = void 0,
                s = i.dependencies
              if (s !== null) {
                u = i.child
                for (var f = s.firstContext; f !== null; ) {
                  if (f.context === t) {
                    if (i.tag === $) {
                      var p = xn(a),
                        v = Kl(zt, p)
                      v.tag = jh
                      var g = i.updateQueue
                      if (g !== null) {
                        var S = g.shared,
                          k = S.pending
                        k === null
                          ? (v.next = v)
                          : ((v.next = k.next), (k.next = v)),
                          (S.pending = v)
                      }
                    }
                    i.lanes = Ke(i.lanes, a)
                    var T = i.alternate
                    T !== null && (T.lanes = Ke(T.lanes, a)),
                      fg(i.return, a, e),
                      (s.lanes = Ke(s.lanes, a))
                    break
                  }
                  f = f.next
                }
              } else if (i.tag === ge) u = i.type === e.type ? null : i.child
              else if (i.tag === ft) {
                var O = i.return
                if (O === null)
                  throw new Error(
                    'We just came from a parent so we must have had a parent. This is a bug in React.'
                  )
                O.lanes = Ke(O.lanes, a)
                var j = O.alternate
                j !== null && (j.lanes = Ke(j.lanes, a)),
                  fg(O, a, e),
                  (u = i.sibling)
              } else u = i.child
              if (u !== null) u.return = i
              else
                for (u = i; u !== null; ) {
                  if (u === e) {
                    u = null
                    break
                  }
                  var P = u.sibling
                  if (P !== null) {
                    ;(P.return = u.return), (u = P)
                    break
                  }
                  u = u.return
                }
              i = u
            }
          }
          function Xc(e, t) {
            ;(zh = e), (Gc = null), (sg = null)
            var a = e.dependencies
            if (a !== null) {
              var i = a.firstContext
              i !== null && (kr(a.lanes, t) && dp(), (a.firstContext = null))
            }
          }
          function An(e) {
            Uh &&
              m(
                'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
              )
            var t = e._currentValue
            if (sg !== e) {
              var a = {
                context: e,
                memoizedValue: t,
                next: null,
              }
              if (Gc === null) {
                if (zh === null)
                  throw new Error(
                    'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
                  )
                ;(Gc = a),
                  (zh.dependencies = {
                    lanes: I,
                    firstContext: a,
                  })
              } else Gc = Gc.next = a
            }
            return t
          }
          var us = null
          function dg(e) {
            us === null ? (us = [e]) : us.push(e)
          }
          function zR() {
            if (us !== null) {
              for (var e = 0; e < us.length; e++) {
                var t = us[e],
                  a = t.interleaved
                if (a !== null) {
                  t.interleaved = null
                  var i = a.next,
                    u = t.pending
                  if (u !== null) {
                    var s = u.next
                    ;(u.next = i), (a.next = s)
                  }
                  t.pending = a
                }
              }
              us = null
            }
          }
          function m1(e, t, a, i) {
            var u = t.interleaved
            return (
              u === null
                ? ((a.next = a), dg(t))
                : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              Ah(e, i)
            )
          }
          function UR(e, t, a, i) {
            var u = t.interleaved
            u === null
              ? ((a.next = a), dg(t))
              : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a)
          }
          function OR(e, t, a, i) {
            var u = t.interleaved
            return (
              u === null
                ? ((a.next = a), dg(t))
                : ((a.next = u.next), (u.next = a)),
              (t.interleaved = a),
              Ah(e, i)
            )
          }
          function va(e, t) {
            return Ah(e, t)
          }
          var AR = Ah
          function Ah(e, t) {
            e.lanes = Ke(e.lanes, t)
            var a = e.alternate
            a !== null && (a.lanes = Ke(a.lanes, t)),
              a === null && (e.flags & (Ft | aa)) !== Me && yC(e)
            for (var i = e, u = e.return; u !== null; )
              (u.childLanes = Ke(u.childLanes, t)),
                (a = u.alternate),
                a !== null
                  ? (a.childLanes = Ke(a.childLanes, t))
                  : (u.flags & (Ft | aa)) !== Me && yC(e),
                (i = u),
                (u = u.return)
            if (i.tag === B) {
              var s = i.stateNode
              return s
            } else return null
          }
          var y1 = 0,
            g1 = 1,
            jh = 2,
            pg = 3,
            Hh = !1,
            vg,
            Fh
          ;(vg = !1), (Fh = null)
          function hg(e) {
            var t = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: {
                pending: null,
                interleaved: null,
                lanes: I,
              },
              effects: null,
            }
            e.updateQueue = t
          }
          function S1(e, t) {
            var a = t.updateQueue,
              i = e.updateQueue
            if (a === i) {
              var u = {
                baseState: i.baseState,
                firstBaseUpdate: i.firstBaseUpdate,
                lastBaseUpdate: i.lastBaseUpdate,
                shared: i.shared,
                effects: i.effects,
              }
              t.updateQueue = u
            }
          }
          function Kl(e, t) {
            var a = {
              eventTime: e,
              lane: t,
              tag: y1,
              payload: null,
              callback: null,
              next: null,
            }
            return a
          }
          function Xu(e, t, a) {
            var i = e.updateQueue
            if (i === null) return null
            var u = i.shared
            if (
              (Fh === u &&
                !vg &&
                (m(
                  'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
                ),
                (vg = !0)),
              Ab())
            ) {
              var s = u.pending
              return (
                s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
                (u.pending = t),
                AR(e, a)
              )
            } else return OR(e, u, t, a)
          }
          function Vh(e, t, a) {
            var i = t.updateQueue
            if (i !== null) {
              var u = i.shared
              if (od(a)) {
                var s = u.lanes
                s = cd(s, e.pendingLanes)
                var f = Ke(s, a)
                ;(u.lanes = f), _u(e, f)
              }
            }
          }
          function mg(e, t) {
            var a = e.updateQueue,
              i = e.alternate
            if (i !== null) {
              var u = i.updateQueue
              if (a === u) {
                var s = null,
                  f = null,
                  p = a.firstBaseUpdate
                if (p !== null) {
                  var v = p
                  do {
                    var g = {
                      eventTime: v.eventTime,
                      lane: v.lane,
                      tag: v.tag,
                      payload: v.payload,
                      callback: v.callback,
                      next: null,
                    }
                    f === null ? (s = f = g) : ((f.next = g), (f = g)),
                      (v = v.next)
                  } while (v !== null)
                  f === null ? (s = f = t) : ((f.next = t), (f = t))
                } else s = f = t
                ;(a = {
                  baseState: u.baseState,
                  firstBaseUpdate: s,
                  lastBaseUpdate: f,
                  shared: u.shared,
                  effects: u.effects,
                }),
                  (e.updateQueue = a)
                return
              }
            }
            var S = a.lastBaseUpdate
            S === null ? (a.firstBaseUpdate = t) : (S.next = t),
              (a.lastBaseUpdate = t)
          }
          function jR(e, t, a, i, u, s) {
            switch (a.tag) {
              case g1: {
                var f = a.payload
                if (typeof f == 'function') {
                  p1()
                  var p = f.call(s, i, u)
                  {
                    if (e.mode & Kt) {
                      Sn(!0)
                      try {
                        f.call(s, i, u)
                      } finally {
                        Sn(!1)
                      }
                    }
                    v1()
                  }
                  return p
                }
                return f
              }
              case pg:
                e.flags = (e.flags & ~Mn) | Ye
              case y1: {
                var v = a.payload,
                  g
                if (typeof v == 'function') {
                  p1(), (g = v.call(s, i, u))
                  {
                    if (e.mode & Kt) {
                      Sn(!0)
                      try {
                        v.call(s, i, u)
                      } finally {
                        Sn(!1)
                      }
                    }
                    v1()
                  }
                } else g = v
                return g == null ? i : ut({}, i, g)
              }
              case jh:
                return (Hh = !0), i
            }
            return i
          }
          function Bh(e, t, a, i) {
            var u = e.updateQueue
            ;(Hh = !1), (Fh = u.shared)
            var s = u.firstBaseUpdate,
              f = u.lastBaseUpdate,
              p = u.shared.pending
            if (p !== null) {
              u.shared.pending = null
              var v = p,
                g = v.next
              ;(v.next = null), f === null ? (s = g) : (f.next = g), (f = v)
              var S = e.alternate
              if (S !== null) {
                var k = S.updateQueue,
                  T = k.lastBaseUpdate
                T !== f &&
                  (T === null ? (k.firstBaseUpdate = g) : (T.next = g),
                  (k.lastBaseUpdate = v))
              }
            }
            if (s !== null) {
              var O = u.baseState,
                j = I,
                P = null,
                he = null,
                ze = null,
                ke = s
              do {
                var vt = ke.lane,
                  st = ke.eventTime
                if (Ol(i, vt)) {
                  if (ze !== null) {
                    var Y = {
                      eventTime: st,
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: dt,
                      tag: ke.tag,
                      payload: ke.payload,
                      callback: ke.callback,
                      next: null,
                    }
                    ze = ze.next = Y
                  }
                  O = jR(e, u, ke, O, t, a)
                  var N = ke.callback
                  if (
                    N !== null && // If the update was already committed, we should not queue its
                    // callback again.
                    ke.lane !== dt
                  ) {
                    e.flags |= Va
                    var J = u.effects
                    J === null ? (u.effects = [ke]) : J.push(ke)
                  }
                } else {
                  var M = {
                    eventTime: st,
                    lane: vt,
                    tag: ke.tag,
                    payload: ke.payload,
                    callback: ke.callback,
                    next: null,
                  }
                  ze === null ? ((he = ze = M), (P = O)) : (ze = ze.next = M),
                    (j = Ke(j, vt))
                }
                if (((ke = ke.next), ke === null)) {
                  if (((p = u.shared.pending), p === null)) break
                  var me = p,
                    fe = me.next
                  ;(me.next = null),
                    (ke = fe),
                    (u.lastBaseUpdate = me),
                    (u.shared.pending = null)
                }
              } while (!0)
              ze === null && (P = O),
                (u.baseState = P),
                (u.firstBaseUpdate = he),
                (u.lastBaseUpdate = ze)
              var Be = u.shared.interleaved
              if (Be !== null) {
                var We = Be
                do (j = Ke(j, We.lane)), (We = We.next)
                while (We !== Be)
              } else s === null && (u.shared.lanes = I)
              Rp(j), (e.lanes = j), (e.memoizedState = O)
            }
            Fh = null
          }
          function HR(e, t) {
            if (typeof e != 'function')
              throw new Error(
                'Invalid argument passed as callback. Expected a function. Instead ' +
                  ('received: ' + e)
              )
            e.call(t)
          }
          function x1() {
            Hh = !1
          }
          function Ph() {
            return Hh
          }
          function C1(e, t, a) {
            var i = t.effects
            if (((t.effects = null), i !== null))
              for (var u = 0; u < i.length; u++) {
                var s = i[u],
                  f = s.callback
                f !== null && ((s.callback = null), HR(f, a))
              }
          }
          var yg = {},
            E1 = new _.Component().refs,
            gg,
            Sg,
            xg,
            Cg,
            Eg,
            w1,
            Yh,
            wg,
            Rg,
            Tg
          {
            ;(gg = /* @__PURE__ */ new Set()),
              (Sg = /* @__PURE__ */ new Set()),
              (xg = /* @__PURE__ */ new Set()),
              (Cg = /* @__PURE__ */ new Set()),
              (wg = /* @__PURE__ */ new Set()),
              (Eg = /* @__PURE__ */ new Set()),
              (Rg = /* @__PURE__ */ new Set()),
              (Tg = /* @__PURE__ */ new Set())
            var R1 = /* @__PURE__ */ new Set()
            ;(Yh = function (e, t) {
              if (!(e === null || typeof e == 'function')) {
                var a = t + '_' + e
                R1.has(a) ||
                  (R1.add(a),
                  m(
                    '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                    t,
                    e
                  ))
              }
            }),
              (w1 = function (e, t) {
                if (t === void 0) {
                  var a = Mt(e) || 'Component'
                  Eg.has(a) ||
                    (Eg.add(a),
                    m(
                      '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
                      a
                    ))
                }
              }),
              Object.defineProperty(yg, '_processChildContext', {
                enumerable: !1,
                value: function () {
                  throw new Error(
                    "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
                  )
                },
              }),
              Object.freeze(yg)
          }
          function bg(e, t, a, i) {
            var u = e.memoizedState,
              s = a(i, u)
            {
              if (e.mode & Kt) {
                Sn(!0)
                try {
                  s = a(i, u)
                } finally {
                  Sn(!1)
                }
              }
              w1(t, s)
            }
            var f = s == null ? u : ut({}, u, s)
            if (((e.memoizedState = f), e.lanes === I)) {
              var p = e.updateQueue
              p.baseState = f
            }
          }
          var kg = {
            isMounted: Br,
            enqueueSetState: function (e, t, a) {
              var i = na(e),
                u = Wr(),
                s = ro(i),
                f = Kl(u, s)
              ;(f.payload = t),
                a != null && (Yh(a, 'setState'), (f.callback = a))
              var p = Xu(i, f, s)
              p !== null && (Gn(p, i, s, u), Vh(p, i, s)), Wi(i, s)
            },
            enqueueReplaceState: function (e, t, a) {
              var i = na(e),
                u = Wr(),
                s = ro(i),
                f = Kl(u, s)
              ;(f.tag = g1),
                (f.payload = t),
                a != null && (Yh(a, 'replaceState'), (f.callback = a))
              var p = Xu(i, f, s)
              p !== null && (Gn(p, i, s, u), Vh(p, i, s)), Wi(i, s)
            },
            enqueueForceUpdate: function (e, t) {
              var a = na(e),
                i = Wr(),
                u = ro(a),
                s = Kl(i, u)
              ;(s.tag = jh),
                t != null && (Yh(t, 'forceUpdate'), (s.callback = t))
              var f = Xu(a, s, u)
              f !== null && (Gn(f, a, u, i), Vh(f, a, u)), ad(a, u)
            },
          }
          function T1(e, t, a, i, u, s, f) {
            var p = e.stateNode
            if (typeof p.shouldComponentUpdate == 'function') {
              var v = p.shouldComponentUpdate(i, s, f)
              {
                if (e.mode & Kt) {
                  Sn(!0)
                  try {
                    v = p.shouldComponentUpdate(i, s, f)
                  } finally {
                    Sn(!1)
                  }
                }
                v === void 0 &&
                  m(
                    '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
                    Mt(t) || 'Component'
                  )
              }
              return v
            }
            return t.prototype && t.prototype.isPureReactComponent
              ? !De(a, i) || !De(u, s)
              : !0
          }
          function FR(e, t, a) {
            var i = e.stateNode
            {
              var u = Mt(t) || 'Component',
                s = i.render
              s ||
                (t.prototype && typeof t.prototype.render == 'function'
                  ? m(
                      '%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
                      u
                    )
                  : m(
                      '%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
                      u
                    )),
                i.getInitialState &&
                  !i.getInitialState.isReactClassApproved &&
                  !i.state &&
                  m(
                    'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
                    u
                  ),
                i.getDefaultProps &&
                  !i.getDefaultProps.isReactClassApproved &&
                  m(
                    'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
                    u
                  ),
                i.propTypes &&
                  m(
                    'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
                    u
                  ),
                i.contextType &&
                  m(
                    'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
                    u
                  ),
                i.contextTypes &&
                  m(
                    'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
                    u
                  ),
                t.contextType &&
                  t.contextTypes &&
                  !Rg.has(t) &&
                  (Rg.add(t),
                  m(
                    '%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
                    u
                  )),
                typeof i.componentShouldUpdate == 'function' &&
                  m(
                    '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
                    u
                  ),
                t.prototype &&
                  t.prototype.isPureReactComponent &&
                  typeof i.shouldComponentUpdate < 'u' &&
                  m(
                    '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
                    Mt(t) || 'A pure component'
                  ),
                typeof i.componentDidUnmount == 'function' &&
                  m(
                    '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
                    u
                  ),
                typeof i.componentDidReceiveProps == 'function' &&
                  m(
                    '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
                    u
                  ),
                typeof i.componentWillRecieveProps == 'function' &&
                  m(
                    '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
                    u
                  ),
                typeof i.UNSAFE_componentWillRecieveProps == 'function' &&
                  m(
                    '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
                    u
                  )
              var f = i.props !== a
              i.props !== void 0 &&
                f &&
                m(
                  "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
                  u,
                  u
                ),
                i.defaultProps &&
                  m(
                    'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
                    u,
                    u
                  ),
                typeof i.getSnapshotBeforeUpdate == 'function' &&
                  typeof i.componentDidUpdate != 'function' &&
                  !xg.has(t) &&
                  (xg.add(t),
                  m(
                    '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
                    Mt(t)
                  )),
                typeof i.getDerivedStateFromProps == 'function' &&
                  m(
                    '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
                    u
                  ),
                typeof i.getDerivedStateFromError == 'function' &&
                  m(
                    '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
                    u
                  ),
                typeof t.getSnapshotBeforeUpdate == 'function' &&
                  m(
                    '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
                    u
                  )
              var p = i.state
              p &&
                (typeof p != 'object' || _n(p)) &&
                m('%s.state: must be set to an object or null', u),
                typeof i.getChildContext == 'function' &&
                  typeof t.childContextTypes != 'object' &&
                  m(
                    '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
                    u
                  )
            }
          }
          function b1(e, t) {
            ;(t.updater = kg),
              (e.stateNode = t),
              Su(t, e),
              (t._reactInternalInstance = yg)
          }
          function k1(e, t, a) {
            var i = !1,
              u = za,
              s = za,
              f = t.contextType
            if ('contextType' in t) {
              var p =
                // Allow null for conditional declaration
                f === null ||
                (f !== void 0 && f.$$typeof === oe && f._context === void 0)
              if (!p && !Tg.has(t)) {
                Tg.add(t)
                var v = ''
                f === void 0
                  ? (v =
                      ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.')
                  : typeof f != 'object'
                  ? (v = ' However, it is set to a ' + typeof f + '.')
                  : f.$$typeof === q
                  ? (v =
                      ' Did you accidentally pass the Context.Provider instead?')
                  : f._context !== void 0
                  ? (v =
                      ' Did you accidentally pass the Context.Consumer instead?')
                  : (v =
                      ' However, it is set to an object with keys {' +
                      Object.keys(f).join(', ') +
                      '}.'),
                  m(
                    '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
                    Mt(t) || 'Component',
                    v
                  )
              }
            }
            if (typeof f == 'object' && f !== null) s = An(f)
            else {
              u = Yc(e, t, !0)
              var g = t.contextTypes
              ;(i = g != null), (s = i ? $c(e, u) : za)
            }
            var S = new t(a, s)
            if (e.mode & Kt) {
              Sn(!0)
              try {
                S = new t(a, s)
              } finally {
                Sn(!1)
              }
            }
            var k = (e.memoizedState =
              S.state !== null && S.state !== void 0 ? S.state : null)
            b1(e, S)
            {
              if (
                typeof t.getDerivedStateFromProps == 'function' &&
                k === null
              ) {
                var T = Mt(t) || 'Component'
                Sg.has(T) ||
                  (Sg.add(T),
                  m(
                    '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
                    T,
                    S.state === null ? 'null' : 'undefined',
                    T
                  ))
              }
              if (
                typeof t.getDerivedStateFromProps == 'function' ||
                typeof S.getSnapshotBeforeUpdate == 'function'
              ) {
                var O = null,
                  j = null,
                  P = null
                if (
                  (typeof S.componentWillMount == 'function' &&
                  S.componentWillMount.__suppressDeprecationWarning !== !0
                    ? (O = 'componentWillMount')
                    : typeof S.UNSAFE_componentWillMount == 'function' &&
                      (O = 'UNSAFE_componentWillMount'),
                  typeof S.componentWillReceiveProps == 'function' &&
                  S.componentWillReceiveProps.__suppressDeprecationWarning !==
                    !0
                    ? (j = 'componentWillReceiveProps')
                    : typeof S.UNSAFE_componentWillReceiveProps == 'function' &&
                      (j = 'UNSAFE_componentWillReceiveProps'),
                  typeof S.componentWillUpdate == 'function' &&
                  S.componentWillUpdate.__suppressDeprecationWarning !== !0
                    ? (P = 'componentWillUpdate')
                    : typeof S.UNSAFE_componentWillUpdate == 'function' &&
                      (P = 'UNSAFE_componentWillUpdate'),
                  O !== null || j !== null || P !== null)
                ) {
                  var he = Mt(t) || 'Component',
                    ze =
                      typeof t.getDerivedStateFromProps == 'function'
                        ? 'getDerivedStateFromProps()'
                        : 'getSnapshotBeforeUpdate()'
                  Cg.has(he) ||
                    (Cg.add(he),
                    m(
                      `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                      he,
                      ze,
                      O !== null
                        ? `
  ` + O
                        : '',
                      j !== null
                        ? `
  ` + j
                        : '',
                      P !== null
                        ? `
  ` + P
                        : ''
                    ))
                }
              }
            }
            return i && KS(e, u, s), S
          }
          function VR(e, t) {
            var a = t.state
            typeof t.componentWillMount == 'function' && t.componentWillMount(),
              typeof t.UNSAFE_componentWillMount == 'function' &&
                t.UNSAFE_componentWillMount(),
              a !== t.state &&
                (m(
                  "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                  Xe(e) || 'Component'
                ),
                kg.enqueueReplaceState(t, t.state, null))
          }
          function D1(e, t, a, i) {
            var u = t.state
            if (
              (typeof t.componentWillReceiveProps == 'function' &&
                t.componentWillReceiveProps(a, i),
              typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                t.UNSAFE_componentWillReceiveProps(a, i),
              t.state !== u)
            ) {
              {
                var s = Xe(e) || 'Component'
                gg.has(s) ||
                  (gg.add(s),
                  m(
                    "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                    s
                  ))
              }
              kg.enqueueReplaceState(t, t.state, null)
            }
          }
          function Dg(e, t, a, i) {
            FR(e, t, a)
            var u = e.stateNode
            ;(u.props = a), (u.state = e.memoizedState), (u.refs = E1), hg(e)
            var s = t.contextType
            if (typeof s == 'object' && s !== null) u.context = An(s)
            else {
              var f = Yc(e, t, !0)
              u.context = $c(e, f)
            }
            {
              if (u.state === a) {
                var p = Mt(t) || 'Component'
                wg.has(p) ||
                  (wg.add(p),
                  m(
                    "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                    p
                  ))
              }
              e.mode & Kt && Si.recordLegacyContextWarning(e, u),
                Si.recordUnsafeLifecycleWarnings(e, u)
            }
            u.state = e.memoizedState
            var v = t.getDerivedStateFromProps
            if (
              (typeof v == 'function' &&
                (bg(e, t, v, a), (u.state = e.memoizedState)),
              typeof t.getDerivedStateFromProps != 'function' &&
                typeof u.getSnapshotBeforeUpdate != 'function' &&
                (typeof u.UNSAFE_componentWillMount == 'function' ||
                  typeof u.componentWillMount == 'function') &&
                (VR(e, u), Bh(e, a, u, i), (u.state = e.memoizedState)),
              typeof u.componentDidMount == 'function')
            ) {
              var g = qe
              ;(g |= Cr), (e.mode & ua) !== Oe && (g |= Er), (e.flags |= g)
            }
          }
          function BR(e, t, a, i) {
            var u = e.stateNode,
              s = e.memoizedProps
            u.props = s
            var f = u.context,
              p = t.contextType,
              v = za
            if (typeof p == 'object' && p !== null) v = An(p)
            else {
              var g = Yc(e, t, !0)
              v = $c(e, g)
            }
            var S = t.getDerivedStateFromProps,
              k =
                typeof S == 'function' ||
                typeof u.getSnapshotBeforeUpdate == 'function'
            !k &&
              (typeof u.UNSAFE_componentWillReceiveProps == 'function' ||
                typeof u.componentWillReceiveProps == 'function') &&
              (s !== a || f !== v) &&
              D1(e, u, a, v),
              x1()
            var T = e.memoizedState,
              O = (u.state = T)
            if (
              (Bh(e, a, u, i),
              (O = e.memoizedState),
              s === a && T === O && !Rh() && !Ph())
            ) {
              if (typeof u.componentDidMount == 'function') {
                var j = qe
                ;(j |= Cr), (e.mode & ua) !== Oe && (j |= Er), (e.flags |= j)
              }
              return !1
            }
            typeof S == 'function' && (bg(e, t, S, a), (O = e.memoizedState))
            var P = Ph() || T1(e, t, s, a, T, O, v)
            if (P) {
              if (
                (!k &&
                  (typeof u.UNSAFE_componentWillMount == 'function' ||
                    typeof u.componentWillMount == 'function') &&
                  (typeof u.componentWillMount == 'function' &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function')
              ) {
                var he = qe
                ;(he |= Cr), (e.mode & ua) !== Oe && (he |= Er), (e.flags |= he)
              }
            } else {
              if (typeof u.componentDidMount == 'function') {
                var ze = qe
                ;(ze |= Cr), (e.mode & ua) !== Oe && (ze |= Er), (e.flags |= ze)
              }
              ;(e.memoizedProps = a), (e.memoizedState = O)
            }
            return (u.props = a), (u.state = O), (u.context = v), P
          }
          function PR(e, t, a, i, u) {
            var s = t.stateNode
            S1(e, t)
            var f = t.memoizedProps,
              p = t.type === t.elementType ? f : xi(t.type, f)
            s.props = p
            var v = t.pendingProps,
              g = s.context,
              S = a.contextType,
              k = za
            if (typeof S == 'object' && S !== null) k = An(S)
            else {
              var T = Yc(t, a, !0)
              k = $c(t, T)
            }
            var O = a.getDerivedStateFromProps,
              j =
                typeof O == 'function' ||
                typeof s.getSnapshotBeforeUpdate == 'function'
            !j &&
              (typeof s.UNSAFE_componentWillReceiveProps == 'function' ||
                typeof s.componentWillReceiveProps == 'function') &&
              (f !== v || g !== k) &&
              D1(t, s, i, k),
              x1()
            var P = t.memoizedState,
              he = (s.state = P)
            if (
              (Bh(t, i, s, u),
              (he = t.memoizedState),
              f === v && P === he && !Rh() && !Ph() && !we)
            )
              return (
                typeof s.componentDidUpdate == 'function' &&
                  (f !== e.memoizedProps || P !== e.memoizedState) &&
                  (t.flags |= qe),
                typeof s.getSnapshotBeforeUpdate == 'function' &&
                  (f !== e.memoizedProps || P !== e.memoizedState) &&
                  (t.flags |= ra),
                !1
              )
            typeof O == 'function' && (bg(t, a, O, i), (he = t.memoizedState))
            var ze =
              Ph() ||
              T1(t, a, p, i, P, he, k) || // TODO: In some cases, we'll end up checking if context has changed twice,
              // both before and after `shouldComponentUpdate` has been called. Not ideal,
              // but I'm loath to refactor this function. This only happens for memoized
              // components so it's not that common.
              we
            return (
              ze
                ? (!j &&
                    (typeof s.UNSAFE_componentWillUpdate == 'function' ||
                      typeof s.componentWillUpdate == 'function') &&
                    (typeof s.componentWillUpdate == 'function' &&
                      s.componentWillUpdate(i, he, k),
                    typeof s.UNSAFE_componentWillUpdate == 'function' &&
                      s.UNSAFE_componentWillUpdate(i, he, k)),
                  typeof s.componentDidUpdate == 'function' && (t.flags |= qe),
                  typeof s.getSnapshotBeforeUpdate == 'function' &&
                    (t.flags |= ra))
                : (typeof s.componentDidUpdate == 'function' &&
                    (f !== e.memoizedProps || P !== e.memoizedState) &&
                    (t.flags |= qe),
                  typeof s.getSnapshotBeforeUpdate == 'function' &&
                    (f !== e.memoizedProps || P !== e.memoizedState) &&
                    (t.flags |= ra),
                  (t.memoizedProps = i),
                  (t.memoizedState = he)),
              (s.props = i),
              (s.state = he),
              (s.context = k),
              ze
            )
          }
          var _g,
            Lg,
            Mg,
            Ng,
            zg,
            _1 = function (e, t) {}
          ;(_g = !1),
            (Lg = !1),
            (Mg = {}),
            (Ng = {}),
            (zg = {}),
            (_1 = function (e, t) {
              if (
                !(e === null || typeof e != 'object') &&
                !(!e._store || e._store.validated || e.key != null)
              ) {
                if (typeof e._store != 'object')
                  throw new Error(
                    'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
                  )
                e._store.validated = !0
                var a = Xe(t) || 'Component'
                Ng[a] ||
                  ((Ng[a] = !0),
                  m(
                    'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
                  ))
              }
            })
          function Jd(e, t, a) {
            var i = a.ref
            if (i !== null && typeof i != 'function' && typeof i != 'object') {
              if (
                (e.mode & Kt || bt) && // We warn in ReactElement.js if owner and self are equal for string refs
                // because these cannot be automatically converted to an arrow function
                // using a codemod. Therefore, we don't have to warn about string refs again.
                !(a._owner && a._self && a._owner.stateNode !== a._self)
              ) {
                var u = Xe(e) || 'Component'
                Mg[u] ||
                  (m(
                    'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    i
                  ),
                  (Mg[u] = !0))
              }
              if (a._owner) {
                var s = a._owner,
                  f
                if (s) {
                  var p = s
                  if (p.tag !== $)
                    throw new Error(
                      'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref'
                    )
                  f = p.stateNode
                }
                if (!f)
                  throw new Error(
                    'Missing owner for string ref ' +
                      i +
                      '. This error is likely caused by a bug in React. Please file an issue.'
                  )
                var v = f
                Ja(i, 'ref')
                var g = '' + i
                if (
                  t !== null &&
                  t.ref !== null &&
                  typeof t.ref == 'function' &&
                  t.ref._stringRef === g
                )
                  return t.ref
                var S = function (k) {
                  var T = v.refs
                  T === E1 && (T = v.refs = {}),
                    k === null ? delete T[g] : (T[g] = k)
                }
                return (S._stringRef = g), S
              } else {
                if (typeof i != 'string')
                  throw new Error(
                    'Expected ref to be a function, a string, an object returned by React.createRef(), or null.'
                  )
                if (!a._owner)
                  throw new Error(
                    'Element ref was specified as a string (' +
                      i +
                      `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`
                  )
              }
            }
            return i
          }
          function $h(e, t) {
            var a = Object.prototype.toString.call(t)
            throw new Error(
              'Objects are not valid as a React child (found: ' +
                (a === '[object Object]'
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : a) +
                '). If you meant to render a collection of children, use an array instead.'
            )
          }
          function Ih(e) {
            {
              var t = Xe(e) || 'Component'
              if (zg[t]) return
              ;(zg[t] = !0),
                m(
                  'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
                )
            }
          }
          function L1(e) {
            var t = e._payload,
              a = e._init
            return a(t)
          }
          function M1(e) {
            function t(M, Y) {
              if (e) {
                var N = M.deletions
                N === null ? ((M.deletions = [Y]), (M.flags |= xt)) : N.push(Y)
              }
            }
            function a(M, Y) {
              if (!e) return null
              for (var N = Y; N !== null; ) t(M, N), (N = N.sibling)
              return null
            }
            function i(M, Y) {
              for (var N = /* @__PURE__ */ new Map(), J = Y; J !== null; )
                J.key !== null ? N.set(J.key, J) : N.set(J.index, J),
                  (J = J.sibling)
              return N
            }
            function u(M, Y) {
              var N = hs(M, Y)
              return (N.index = 0), (N.sibling = null), N
            }
            function s(M, Y, N) {
              if (((M.index = N), !e)) return (M.flags |= Qf), Y
              var J = M.alternate
              if (J !== null) {
                var me = J.index
                return me < Y ? ((M.flags |= Ft), Y) : me
              } else return (M.flags |= Ft), Y
            }
            function f(M) {
              return e && M.alternate === null && (M.flags |= Ft), M
            }
            function p(M, Y, N, J) {
              if (Y === null || Y.tag !== re) {
                var me = lS(N, M.mode, J)
                return (me.return = M), me
              } else {
                var fe = u(Y, N)
                return (fe.return = M), fe
              }
            }
            function v(M, Y, N, J) {
              var me = N.type
              if (me === Ra) return S(M, Y, N.props.children, J, N.key)
              if (
                Y !== null &&
                (Y.elementType === me || // Keep this check inline so it only runs on the false path:
                  CC(Y, N) || // Lazy types should reconcile their resolved type.
                  // We need to do this after the Hot Reloading check above,
                  // because hot reloading has different semantics than prod because
                  // it doesn't resuspend. So we can't let the call below suspend.
                  (typeof me == 'object' &&
                    me !== null &&
                    me.$$typeof === Ae &&
                    L1(me) === Y.type))
              ) {
                var fe = u(Y, N.props)
                return (
                  (fe.ref = Jd(M, Y, N)),
                  (fe.return = M),
                  (fe._debugSource = N._source),
                  (fe._debugOwner = N._owner),
                  fe
                )
              }
              var Be = iS(N, M.mode, J)
              return (Be.ref = Jd(M, Y, N)), (Be.return = M), Be
            }
            function g(M, Y, N, J) {
              if (
                Y === null ||
                Y.tag !== W ||
                Y.stateNode.containerInfo !== N.containerInfo ||
                Y.stateNode.implementation !== N.implementation
              ) {
                var me = uS(N, M.mode, J)
                return (me.return = M), me
              } else {
                var fe = u(Y, N.children || [])
                return (fe.return = M), fe
              }
            }
            function S(M, Y, N, J, me) {
              if (Y === null || Y.tag !== Re) {
                var fe = io(N, M.mode, J, me)
                return (fe.return = M), fe
              } else {
                var Be = u(Y, N)
                return (Be.return = M), Be
              }
            }
            function k(M, Y, N) {
              if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number') {
                var J = lS('' + Y, M.mode, N)
                return (J.return = M), J
              }
              if (typeof Y == 'object' && Y !== null) {
                switch (Y.$$typeof) {
                  case _i: {
                    var me = iS(Y, M.mode, N)
                    return (me.ref = Jd(M, null, Y)), (me.return = M), me
                  }
                  case jr: {
                    var fe = uS(Y, M.mode, N)
                    return (fe.return = M), fe
                  }
                  case Ae: {
                    var Be = Y._payload,
                      We = Y._init
                    return k(M, We(Be), N)
                  }
                }
                if (_n(Y) || ei(Y)) {
                  var _t = io(Y, M.mode, N, null)
                  return (_t.return = M), _t
                }
                $h(M, Y)
              }
              return typeof Y == 'function' && Ih(M), null
            }
            function T(M, Y, N, J) {
              var me = Y !== null ? Y.key : null
              if ((typeof N == 'string' && N !== '') || typeof N == 'number')
                return me !== null ? null : p(M, Y, '' + N, J)
              if (typeof N == 'object' && N !== null) {
                switch (N.$$typeof) {
                  case _i:
                    return N.key === me ? v(M, Y, N, J) : null
                  case jr:
                    return N.key === me ? g(M, Y, N, J) : null
                  case Ae: {
                    var fe = N._payload,
                      Be = N._init
                    return T(M, Y, Be(fe), J)
                  }
                }
                if (_n(N) || ei(N))
                  return me !== null ? null : S(M, Y, N, J, null)
                $h(M, N)
              }
              return typeof N == 'function' && Ih(M), null
            }
            function O(M, Y, N, J, me) {
              if ((typeof J == 'string' && J !== '') || typeof J == 'number') {
                var fe = M.get(N) || null
                return p(Y, fe, '' + J, me)
              }
              if (typeof J == 'object' && J !== null) {
                switch (J.$$typeof) {
                  case _i: {
                    var Be = M.get(J.key === null ? N : J.key) || null
                    return v(Y, Be, J, me)
                  }
                  case jr: {
                    var We = M.get(J.key === null ? N : J.key) || null
                    return g(Y, We, J, me)
                  }
                  case Ae:
                    var _t = J._payload,
                      gt = J._init
                    return O(M, Y, N, gt(_t), me)
                }
                if (_n(J) || ei(J)) {
                  var Rn = M.get(N) || null
                  return S(Y, Rn, J, me, null)
                }
                $h(Y, J)
              }
              return typeof J == 'function' && Ih(Y), null
            }
            function j(M, Y, N) {
              {
                if (typeof M != 'object' || M === null) return Y
                switch (M.$$typeof) {
                  case _i:
                  case jr:
                    _1(M, N)
                    var J = M.key
                    if (typeof J != 'string') break
                    if (Y === null) {
                      ;(Y = /* @__PURE__ */ new Set()), Y.add(J)
                      break
                    }
                    if (!Y.has(J)) {
                      Y.add(J)
                      break
                    }
                    m(
                      'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
                      J
                    )
                    break
                  case Ae:
                    var me = M._payload,
                      fe = M._init
                    j(fe(me), Y, N)
                    break
                }
              }
              return Y
            }
            function P(M, Y, N, J) {
              for (var me = null, fe = 0; fe < N.length; fe++) {
                var Be = N[fe]
                me = j(Be, me, M)
              }
              for (
                var We = null, _t = null, gt = Y, Rn = 0, St = 0, hn = null;
                gt !== null && St < N.length;
                St++
              ) {
                gt.index > St ? ((hn = gt), (gt = null)) : (hn = gt.sibling)
                var Mr = T(M, gt, N[St], J)
                if (Mr === null) {
                  gt === null && (gt = hn)
                  break
                }
                e && gt && Mr.alternate === null && t(M, gt),
                  (Rn = s(Mr, Rn, St)),
                  _t === null ? (We = Mr) : (_t.sibling = Mr),
                  (_t = Mr),
                  (gt = hn)
              }
              if (St === N.length) {
                if ((a(M, gt), sr())) {
                  var mr = St
                  ns(M, mr)
                }
                return We
              }
              if (gt === null) {
                for (; St < N.length; St++) {
                  var Oa = k(M, N[St], J)
                  Oa !== null &&
                    ((Rn = s(Oa, Rn, St)),
                    _t === null ? (We = Oa) : (_t.sibling = Oa),
                    (_t = Oa))
                }
                if (sr()) {
                  var Gr = St
                  ns(M, Gr)
                }
                return We
              }
              for (var Xr = i(M, gt); St < N.length; St++) {
                var Nr = O(Xr, M, St, N[St], J)
                Nr !== null &&
                  (e &&
                    Nr.alternate !== null &&
                    Xr.delete(Nr.key === null ? St : Nr.key),
                  (Rn = s(Nr, Rn, St)),
                  _t === null ? (We = Nr) : (_t.sibling = Nr),
                  (_t = Nr))
              }
              if (
                (e &&
                  Xr.forEach(function (pf) {
                    return t(M, pf)
                  }),
                sr())
              ) {
                var ru = St
                ns(M, ru)
              }
              return We
            }
            function he(M, Y, N, J) {
              var me = ei(N)
              if (typeof me != 'function')
                throw new Error(
                  'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
                )
              {
                typeof Symbol == 'function' && // $FlowFixMe Flow doesn't know about toStringTag
                  N[Symbol.toStringTag] === 'Generator' &&
                  (Lg ||
                    m(
                      'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
                    ),
                  (Lg = !0)),
                  N.entries === me &&
                    (_g ||
                      m(
                        'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
                      ),
                    (_g = !0))
                var fe = me.call(N)
                if (fe)
                  for (
                    var Be = null, We = fe.next();
                    !We.done;
                    We = fe.next()
                  ) {
                    var _t = We.value
                    Be = j(_t, Be, M)
                  }
              }
              var gt = me.call(N)
              if (gt == null)
                throw new Error('An iterable object provided no iterator.')
              for (
                var Rn = null,
                  St = null,
                  hn = Y,
                  Mr = 0,
                  mr = 0,
                  Oa = null,
                  Gr = gt.next();
                hn !== null && !Gr.done;
                mr++, Gr = gt.next()
              ) {
                hn.index > mr ? ((Oa = hn), (hn = null)) : (Oa = hn.sibling)
                var Xr = T(M, hn, Gr.value, J)
                if (Xr === null) {
                  hn === null && (hn = Oa)
                  break
                }
                e && hn && Xr.alternate === null && t(M, hn),
                  (Mr = s(Xr, Mr, mr)),
                  St === null ? (Rn = Xr) : (St.sibling = Xr),
                  (St = Xr),
                  (hn = Oa)
              }
              if (Gr.done) {
                if ((a(M, hn), sr())) {
                  var Nr = mr
                  ns(M, Nr)
                }
                return Rn
              }
              if (hn === null) {
                for (; !Gr.done; mr++, Gr = gt.next()) {
                  var ru = k(M, Gr.value, J)
                  ru !== null &&
                    ((Mr = s(ru, Mr, mr)),
                    St === null ? (Rn = ru) : (St.sibling = ru),
                    (St = ru))
                }
                if (sr()) {
                  var pf = mr
                  ns(M, pf)
                }
                return Rn
              }
              for (var _p = i(M, hn); !Gr.done; mr++, Gr = gt.next()) {
                var fl = O(_p, M, mr, Gr.value, J)
                fl !== null &&
                  (e &&
                    fl.alternate !== null &&
                    _p.delete(fl.key === null ? mr : fl.key),
                  (Mr = s(fl, Mr, mr)),
                  St === null ? (Rn = fl) : (St.sibling = fl),
                  (St = fl))
              }
              if (
                (e &&
                  _p.forEach(function (nD) {
                    return t(M, nD)
                  }),
                sr())
              ) {
                var tD = mr
                ns(M, tD)
              }
              return Rn
            }
            function ze(M, Y, N, J) {
              if (Y !== null && Y.tag === re) {
                a(M, Y.sibling)
                var me = u(Y, N)
                return (me.return = M), me
              }
              a(M, Y)
              var fe = lS(N, M.mode, J)
              return (fe.return = M), fe
            }
            function ke(M, Y, N, J) {
              for (var me = N.key, fe = Y; fe !== null; ) {
                if (fe.key === me) {
                  var Be = N.type
                  if (Be === Ra) {
                    if (fe.tag === Re) {
                      a(M, fe.sibling)
                      var We = u(fe, N.props.children)
                      return (
                        (We.return = M),
                        (We._debugSource = N._source),
                        (We._debugOwner = N._owner),
                        We
                      )
                    }
                  } else if (
                    fe.elementType === Be || // Keep this check inline so it only runs on the false path:
                    CC(fe, N) || // Lazy types should reconcile their resolved type.
                    // We need to do this after the Hot Reloading check above,
                    // because hot reloading has different semantics than prod because
                    // it doesn't resuspend. So we can't let the call below suspend.
                    (typeof Be == 'object' &&
                      Be !== null &&
                      Be.$$typeof === Ae &&
                      L1(Be) === fe.type)
                  ) {
                    a(M, fe.sibling)
                    var _t = u(fe, N.props)
                    return (
                      (_t.ref = Jd(M, fe, N)),
                      (_t.return = M),
                      (_t._debugSource = N._source),
                      (_t._debugOwner = N._owner),
                      _t
                    )
                  }
                  a(M, fe)
                  break
                } else t(M, fe)
                fe = fe.sibling
              }
              if (N.type === Ra) {
                var gt = io(N.props.children, M.mode, J, N.key)
                return (gt.return = M), gt
              } else {
                var Rn = iS(N, M.mode, J)
                return (Rn.ref = Jd(M, Y, N)), (Rn.return = M), Rn
              }
            }
            function vt(M, Y, N, J) {
              for (var me = N.key, fe = Y; fe !== null; ) {
                if (fe.key === me)
                  if (
                    fe.tag === W &&
                    fe.stateNode.containerInfo === N.containerInfo &&
                    fe.stateNode.implementation === N.implementation
                  ) {
                    a(M, fe.sibling)
                    var Be = u(fe, N.children || [])
                    return (Be.return = M), Be
                  } else {
                    a(M, fe)
                    break
                  }
                else t(M, fe)
                fe = fe.sibling
              }
              var We = uS(N, M.mode, J)
              return (We.return = M), We
            }
            function st(M, Y, N, J) {
              var me =
                typeof N == 'object' &&
                N !== null &&
                N.type === Ra &&
                N.key === null
              if (
                (me && (N = N.props.children),
                typeof N == 'object' && N !== null)
              ) {
                switch (N.$$typeof) {
                  case _i:
                    return f(ke(M, Y, N, J))
                  case jr:
                    return f(vt(M, Y, N, J))
                  case Ae:
                    var fe = N._payload,
                      Be = N._init
                    return st(M, Y, Be(fe), J)
                }
                if (_n(N)) return P(M, Y, N, J)
                if (ei(N)) return he(M, Y, N, J)
                $h(M, N)
              }
              return (typeof N == 'string' && N !== '') || typeof N == 'number'
                ? f(ze(M, Y, '' + N, J))
                : (typeof N == 'function' && Ih(M), a(M, Y))
            }
            return st
          }
          var qc = M1(!0),
            N1 = M1(!1)
          function YR(e, t) {
            if (e !== null && t.child !== e.child)
              throw new Error('Resuming work not yet implemented.')
            if (t.child !== null) {
              var a = t.child,
                i = hs(a, a.pendingProps)
              for (t.child = i, i.return = t; a.sibling !== null; )
                (a = a.sibling),
                  (i = i.sibling = hs(a, a.pendingProps)),
                  (i.return = t)
              i.sibling = null
            }
          }
          function $R(e, t) {
            for (var a = e.child; a !== null; ) Sk(a, t), (a = a.sibling)
          }
          var ep = {},
            qu = Iu(ep),
            tp = Iu(ep),
            Qh = Iu(ep)
          function Wh(e) {
            if (e === ep)
              throw new Error(
                'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
              )
            return e
          }
          function z1() {
            var e = Wh(Qh.current)
            return e
          }
          function Ug(e, t) {
            _r(Qh, t, e), _r(tp, e, e), _r(qu, ep, e)
            var a = aw(t)
            Dr(qu, e), _r(qu, a, e)
          }
          function Kc(e) {
            Dr(qu, e), Dr(tp, e), Dr(Qh, e)
          }
          function Og() {
            var e = Wh(qu.current)
            return e
          }
          function U1(e) {
            Wh(Qh.current)
            var t = Wh(qu.current),
              a = iw(t, e.type)
            t !== a && (_r(tp, e, e), _r(qu, a, e))
          }
          function Ag(e) {
            tp.current === e && (Dr(qu, e), Dr(tp, e))
          }
          var IR = 0,
            O1 = 1,
            A1 = 1,
            np = 2,
            Ci = Iu(IR)
          function jg(e, t) {
            return (e & t) !== 0
          }
          function Zc(e) {
            return e & O1
          }
          function Hg(e, t) {
            return (e & O1) | t
          }
          function QR(e, t) {
            return e | t
          }
          function Ku(e, t) {
            _r(Ci, t, e)
          }
          function Jc(e) {
            Dr(Ci, e)
          }
          function WR(e, t) {
            var a = e.memoizedState
            return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0)
          }
          function Gh(e) {
            for (var t = e; t !== null; ) {
              if (t.tag === de) {
                var a = t.memoizedState
                if (a !== null) {
                  var i = a.dehydrated
                  if (i === null || QS(i) || $y(i)) return t
                }
              } else if (
                t.tag === Pe && // revealOrder undefined can't be trusted because it don't
                // keep track of whether it suspended or not.
                t.memoizedProps.revealOrder !== void 0
              ) {
                var u = (t.flags & Ye) !== Me
                if (u) return t
              } else if (t.child !== null) {
                ;(t.child.return = t), (t = t.child)
                continue
              }
              if (t === e) return null
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null
                t = t.return
              }
              ;(t.sibling.return = t.return), (t = t.sibling)
            }
            return null
          }
          var ha =
              /*   */
              0,
            Bn =
              /* */
              1,
            al =
              /*  */
              2,
            Pn =
              /*    */
              4,
            cr =
              /*   */
              8,
            Fg = []
          function Vg() {
            for (var e = 0; e < Fg.length; e++) {
              var t = Fg[e]
              t._workInProgressVersionPrimary = null
            }
            Fg.length = 0
          }
          function GR(e, t) {
            var a = t._getVersion,
              i = a(t._source)
            e.mutableSourceEagerHydrationData == null
              ? (e.mutableSourceEagerHydrationData = [t, i])
              : e.mutableSourceEagerHydrationData.push(t, i)
          }
          var ve = y.ReactCurrentDispatcher,
            rp = y.ReactCurrentBatchConfig,
            Bg,
            ef
          Bg = /* @__PURE__ */ new Set()
          var os = I,
            Dt = null,
            Yn = null,
            $n = null,
            Xh = !1,
            ap = !1,
            ip = 0,
            XR = 0,
            qR = 25,
            Q = null,
            Xa = null,
            Zu = -1,
            Pg = !1
          function wt() {
            {
              var e = Q
              Xa === null ? (Xa = [e]) : Xa.push(e)
            }
          }
          function ie() {
            {
              var e = Q
              Xa !== null && (Zu++, Xa[Zu] !== e && KR(e))
            }
          }
          function tf(e) {
            e != null &&
              !_n(e) &&
              m(
                '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
                Q,
                typeof e
              )
          }
          function KR(e) {
            {
              var t = Xe(Dt)
              if (!Bg.has(t) && (Bg.add(t), Xa !== null)) {
                for (var a = '', i = 30, u = 0; u <= Zu; u++) {
                  for (
                    var s = Xa[u], f = u === Zu ? e : s, p = u + 1 + '. ' + s;
                    p.length < i;

                  )
                    p += ' '
                  ;(p +=
                    f +
                    `
`),
                    (a += p)
                }
                m(
                  `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
                  t,
                  a
                )
              }
            }
          }
          function Lr() {
            throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)
          }
          function Yg(e, t) {
            if (Pg) return !1
            if (t === null)
              return (
                m(
                  '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
                  Q
                ),
                !1
              )
            e.length !== t.length &&
              m(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                Q,
                '[' + t.join(', ') + ']',
                '[' + e.join(', ') + ']'
              )
            for (var a = 0; a < t.length && a < e.length; a++)
              if (!xe(e[a], t[a])) return !1
            return !0
          }
          function nf(e, t, a, i, u, s) {
            ;(os = s),
              (Dt = t),
              (Xa = e !== null ? e._debugHookTypes : null),
              (Zu = -1),
              (Pg = e !== null && e.type !== t.type),
              (t.memoizedState = null),
              (t.updateQueue = null),
              (t.lanes = I),
              e !== null && e.memoizedState !== null
                ? (ve.current = ax)
                : Xa !== null
                ? (ve.current = rx)
                : (ve.current = nx)
            var f = a(i, u)
            if (ap) {
              var p = 0
              do {
                if (((ap = !1), (ip = 0), p >= qR))
                  throw new Error(
                    'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
                  )
                ;(p += 1),
                  (Pg = !1),
                  (Yn = null),
                  ($n = null),
                  (t.updateQueue = null),
                  (Zu = -1),
                  (ve.current = ix),
                  (f = a(i, u))
              } while (ap)
            }
            ;(ve.current = om), (t._debugHookTypes = Xa)
            var v = Yn !== null && Yn.next !== null
            if (
              ((os = I),
              (Dt = null),
              (Yn = null),
              ($n = null),
              (Q = null),
              (Xa = null),
              (Zu = -1),
              e !== null &&
                (e.flags & Hn) !== (t.flags & Hn) && // Disable this warning in legacy mode, because legacy Suspense is weird
                // and creates false positives. To make this work in legacy mode, we'd
                // need to mark fibers that commit in an incomplete state, somehow. For
                // now I'll disable the warning that most of the bugs that would trigger
                // it are either exclusive to concurrent mode or exist in both.
                (e.mode & it) !== Oe &&
                m(
                  'Internal React error: Expected static flag was missing. Please notify the React team.'
                ),
              (Xh = !1),
              v)
            )
              throw new Error(
                'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
              )
            return f
          }
          function rf() {
            var e = ip !== 0
            return (ip = 0), e
          }
          function j1(e, t, a) {
            ;(t.updateQueue = e.updateQueue),
              (t.mode & ua) !== Oe
                ? (t.flags &= ~(Tl | Er | Wt | qe))
                : (t.flags &= ~(Wt | qe)),
              (e.lanes = Du(e.lanes, a))
          }
          function H1() {
            if (((ve.current = om), Xh)) {
              for (var e = Dt.memoizedState; e !== null; ) {
                var t = e.queue
                t !== null && (t.pending = null), (e = e.next)
              }
              Xh = !1
            }
            ;(os = I),
              (Dt = null),
              (Yn = null),
              ($n = null),
              (Xa = null),
              (Zu = -1),
              (Q = null),
              (K1 = !1),
              (ap = !1),
              (ip = 0)
          }
          function il() {
            var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            }
            return (
              $n === null ? (Dt.memoizedState = $n = e) : ($n = $n.next = e), $n
            )
          }
          function qa() {
            var e
            if (Yn === null) {
              var t = Dt.alternate
              t !== null ? (e = t.memoizedState) : (e = null)
            } else e = Yn.next
            var a
            if (
              ($n === null ? (a = Dt.memoizedState) : (a = $n.next), a !== null)
            )
              ($n = a), (a = $n.next), (Yn = e)
            else {
              if (e === null)
                throw new Error(
                  'Rendered more hooks than during the previous render.'
                )
              Yn = e
              var i = {
                memoizedState: Yn.memoizedState,
                baseState: Yn.baseState,
                baseQueue: Yn.baseQueue,
                queue: Yn.queue,
                next: null,
              }
              $n === null ? (Dt.memoizedState = $n = i) : ($n = $n.next = i)
            }
            return $n
          }
          function F1() {
            return {
              lastEffect: null,
              stores: null,
            }
          }
          function $g(e, t) {
            return typeof t == 'function' ? t(e) : t
          }
          function Ig(e, t, a) {
            var i = il(),
              u
            a !== void 0 ? (u = a(t)) : (u = t),
              (i.memoizedState = i.baseState = u)
            var s = {
              pending: null,
              interleaved: null,
              lanes: I,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: u,
            }
            i.queue = s
            var f = (s.dispatch = tT.bind(null, Dt, s))
            return [i.memoizedState, f]
          }
          function Qg(e, t, a) {
            var i = qa(),
              u = i.queue
            if (u === null)
              throw new Error(
                'Should have a queue. This is likely a bug in React. Please file an issue.'
              )
            u.lastRenderedReducer = e
            var s = Yn,
              f = s.baseQueue,
              p = u.pending
            if (p !== null) {
              if (f !== null) {
                var v = f.next,
                  g = p.next
                ;(f.next = g), (p.next = v)
              }
              s.baseQueue !== f &&
                m(
                  'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.'
                ),
                (s.baseQueue = f = p),
                (u.pending = null)
            }
            if (f !== null) {
              var S = f.next,
                k = s.baseState,
                T = null,
                O = null,
                j = null,
                P = S
              do {
                var he = P.lane
                if (Ol(os, he)) {
                  if (j !== null) {
                    var ke = {
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: dt,
                      action: P.action,
                      hasEagerState: P.hasEagerState,
                      eagerState: P.eagerState,
                      next: null,
                    }
                    j = j.next = ke
                  }
                  if (P.hasEagerState) k = P.eagerState
                  else {
                    var vt = P.action
                    k = e(k, vt)
                  }
                } else {
                  var ze = {
                    lane: he,
                    action: P.action,
                    hasEagerState: P.hasEagerState,
                    eagerState: P.eagerState,
                    next: null,
                  }
                  j === null ? ((O = j = ze), (T = k)) : (j = j.next = ze),
                    (Dt.lanes = Ke(Dt.lanes, he)),
                    Rp(he)
                }
                P = P.next
              } while (P !== null && P !== S)
              j === null ? (T = k) : (j.next = O),
                xe(k, i.memoizedState) || dp(),
                (i.memoizedState = k),
                (i.baseState = T),
                (i.baseQueue = j),
                (u.lastRenderedState = k)
            }
            var st = u.interleaved
            if (st !== null) {
              var M = st
              do {
                var Y = M.lane
                ;(Dt.lanes = Ke(Dt.lanes, Y)), Rp(Y), (M = M.next)
              } while (M !== st)
            } else f === null && (u.lanes = I)
            var N = u.dispatch
            return [i.memoizedState, N]
          }
          function Wg(e, t, a) {
            var i = qa(),
              u = i.queue
            if (u === null)
              throw new Error(
                'Should have a queue. This is likely a bug in React. Please file an issue.'
              )
            u.lastRenderedReducer = e
            var s = u.dispatch,
              f = u.pending,
              p = i.memoizedState
            if (f !== null) {
              u.pending = null
              var v = f.next,
                g = v
              do {
                var S = g.action
                ;(p = e(p, S)), (g = g.next)
              } while (g !== v)
              xe(p, i.memoizedState) || dp(),
                (i.memoizedState = p),
                i.baseQueue === null && (i.baseState = p),
                (u.lastRenderedState = p)
            }
            return [p, s]
          }
          function ND(e, t, a) {}
          function zD(e, t, a) {}
          function Gg(e, t, a) {
            var i = Dt,
              u = il(),
              s,
              f = sr()
            if (f) {
              if (a === void 0)
                throw new Error(
                  'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.'
                )
              ;(s = a()),
                ef ||
                  (s !== a() &&
                    (m(
                      'The result of getServerSnapshot should be cached to avoid an infinite loop'
                    ),
                    (ef = !0)))
            } else {
              if (((s = t()), !ef)) {
                var p = t()
                xe(s, p) ||
                  (m(
                    'The result of getSnapshot should be cached to avoid an infinite loop'
                  ),
                  (ef = !0))
              }
              var v = bm()
              if (v === null)
                throw new Error(
                  'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
                )
              Fo(v, os) || V1(i, t, s)
            }
            u.memoizedState = s
            var g = {
              value: s,
              getSnapshot: t,
            }
            return (
              (u.queue = g),
              em(P1.bind(null, i, g, e), [e]),
              (i.flags |= Wt),
              lp(Bn | cr, B1.bind(null, i, g, s, t), void 0, null),
              s
            )
          }
          function qh(e, t, a) {
            var i = Dt,
              u = qa(),
              s = t()
            if (!ef) {
              var f = t()
              xe(s, f) ||
                (m(
                  'The result of getSnapshot should be cached to avoid an infinite loop'
                ),
                (ef = !0))
            }
            var p = u.memoizedState,
              v = !xe(p, s)
            v && ((u.memoizedState = s), dp())
            var g = u.queue
            if (
              (op(P1.bind(null, i, g, e), [e]),
              g.getSnapshot !== t ||
                v || // Check if the susbcribe function changed. We can save some memory by
                // checking whether we scheduled a subscription effect above.
                ($n !== null && $n.memoizedState.tag & Bn))
            ) {
              ;(i.flags |= Wt),
                lp(Bn | cr, B1.bind(null, i, g, s, t), void 0, null)
              var S = bm()
              if (S === null)
                throw new Error(
                  'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
                )
              Fo(S, os) || V1(i, t, s)
            }
            return s
          }
          function V1(e, t, a) {
            e.flags |= Lo
            var i = {
                getSnapshot: t,
                value: a,
              },
              u = Dt.updateQueue
            if (u === null) (u = F1()), (Dt.updateQueue = u), (u.stores = [i])
            else {
              var s = u.stores
              s === null ? (u.stores = [i]) : s.push(i)
            }
          }
          function B1(e, t, a, i) {
            ;(t.value = a), (t.getSnapshot = i), Y1(t) && $1(e)
          }
          function P1(e, t, a) {
            var i = function () {
              Y1(t) && $1(e)
            }
            return a(i)
          }
          function Y1(e) {
            var t = e.getSnapshot,
              a = e.value
            try {
              var i = t()
              return !xe(a, i)
            } catch {
              return !0
            }
          }
          function $1(e) {
            var t = va(e, Fe)
            t !== null && Gn(t, e, Fe, zt)
          }
          function Kh(e) {
            var t = il()
            typeof e == 'function' && (e = e()),
              (t.memoizedState = t.baseState = e)
            var a = {
              pending: null,
              interleaved: null,
              lanes: I,
              dispatch: null,
              lastRenderedReducer: $g,
              lastRenderedState: e,
            }
            t.queue = a
            var i = (a.dispatch = nT.bind(null, Dt, a))
            return [t.memoizedState, i]
          }
          function Xg(e) {
            return Qg($g)
          }
          function qg(e) {
            return Wg($g)
          }
          function lp(e, t, a, i) {
            var u = {
                tag: e,
                create: t,
                destroy: a,
                deps: i,
                // Circular
                next: null,
              },
              s = Dt.updateQueue
            if (s === null)
              (s = F1()), (Dt.updateQueue = s), (s.lastEffect = u.next = u)
            else {
              var f = s.lastEffect
              if (f === null) s.lastEffect = u.next = u
              else {
                var p = f.next
                ;(f.next = u), (u.next = p), (s.lastEffect = u)
              }
            }
            return u
          }
          function Kg(e) {
            var t = il()
            {
              var a = {
                current: e,
              }
              return (t.memoizedState = a), a
            }
          }
          function Zh(e) {
            var t = qa()
            return t.memoizedState
          }
          function up(e, t, a, i) {
            var u = il(),
              s = i === void 0 ? null : i
            ;(Dt.flags |= e), (u.memoizedState = lp(Bn | t, a, void 0, s))
          }
          function Jh(e, t, a, i) {
            var u = qa(),
              s = i === void 0 ? null : i,
              f = void 0
            if (Yn !== null) {
              var p = Yn.memoizedState
              if (((f = p.destroy), s !== null)) {
                var v = p.deps
                if (Yg(s, v)) {
                  u.memoizedState = lp(t, a, f, s)
                  return
                }
              }
            }
            ;(Dt.flags |= e), (u.memoizedState = lp(Bn | t, a, f, s))
          }
          function em(e, t) {
            return (Dt.mode & ua) !== Oe
              ? up(Tl | Wt | Bi, cr, e, t)
              : up(Wt | Bi, cr, e, t)
          }
          function op(e, t) {
            return Jh(Wt, cr, e, t)
          }
          function Zg(e, t) {
            return up(qe, al, e, t)
          }
          function tm(e, t) {
            return Jh(qe, al, e, t)
          }
          function Jg(e, t) {
            var a = qe
            return (
              (a |= Cr), (Dt.mode & ua) !== Oe && (a |= Er), up(a, Pn, e, t)
            )
          }
          function nm(e, t) {
            return Jh(qe, Pn, e, t)
          }
          function I1(e, t) {
            if (typeof t == 'function') {
              var a = t,
                i = e()
              return (
                a(i),
                function () {
                  a(null)
                }
              )
            } else if (t != null) {
              var u = t
              u.hasOwnProperty('current') ||
                m(
                  'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
                  'an object with keys {' + Object.keys(u).join(', ') + '}'
                )
              var s = e()
              return (
                (u.current = s),
                function () {
                  u.current = null
                }
              )
            }
          }
          function e0(e, t, a) {
            typeof t != 'function' &&
              m(
                'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
                t !== null ? typeof t : 'null'
              )
            var i = a != null ? a.concat([e]) : null,
              u = qe
            return (
              (u |= Cr),
              (Dt.mode & ua) !== Oe && (u |= Er),
              up(u, Pn, I1.bind(null, t, e), i)
            )
          }
          function rm(e, t, a) {
            typeof t != 'function' &&
              m(
                'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
                t !== null ? typeof t : 'null'
              )
            var i = a != null ? a.concat([e]) : null
            return Jh(qe, Pn, I1.bind(null, t, e), i)
          }
          function ZR(e, t) {}
          var am = ZR
          function t0(e, t) {
            var a = il(),
              i = t === void 0 ? null : t
            return (a.memoizedState = [e, i]), e
          }
          function im(e, t) {
            var a = qa(),
              i = t === void 0 ? null : t,
              u = a.memoizedState
            if (u !== null && i !== null) {
              var s = u[1]
              if (Yg(i, s)) return u[0]
            }
            return (a.memoizedState = [e, i]), e
          }
          function n0(e, t) {
            var a = il(),
              i = t === void 0 ? null : t,
              u = e()
            return (a.memoizedState = [u, i]), u
          }
          function lm(e, t) {
            var a = qa(),
              i = t === void 0 ? null : t,
              u = a.memoizedState
            if (u !== null && i !== null) {
              var s = u[1]
              if (Yg(i, s)) return u[0]
            }
            var f = e()
            return (a.memoizedState = [f, i]), f
          }
          function r0(e) {
            var t = il()
            return (t.memoizedState = e), e
          }
          function Q1(e) {
            var t = qa(),
              a = Yn,
              i = a.memoizedState
            return G1(t, i, e)
          }
          function W1(e) {
            var t = qa()
            if (Yn === null) return (t.memoizedState = e), e
            var a = Yn.memoizedState
            return G1(t, a, e)
          }
          function G1(e, t, a) {
            var i = !sy(os)
            if (i) {
              if (!xe(a, t)) {
                var u = sd()
                ;(Dt.lanes = Ke(Dt.lanes, u)), Rp(u), (e.baseState = !0)
              }
              return t
            } else
              return (
                e.baseState && ((e.baseState = !1), dp()),
                (e.memoizedState = a),
                a
              )
          }
          function JR(e, t, a) {
            var i = sa()
            Cn(er(i, Vn)), e(!0)
            var u = rp.transition
            rp.transition = {}
            var s = rp.transition
            rp.transition._updatedFibers = /* @__PURE__ */ new Set()
            try {
              e(!1), t()
            } finally {
              if (
                (Cn(i), (rp.transition = u), u === null && s._updatedFibers)
              ) {
                var f = s._updatedFibers.size
                f > 10 &&
                  A(
                    'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
                  ),
                  s._updatedFibers.clear()
              }
            }
          }
          function a0() {
            var e = Kh(!1),
              t = e[0],
              a = e[1],
              i = JR.bind(null, a),
              u = il()
            return (u.memoizedState = i), [t, i]
          }
          function X1() {
            var e = Xg(),
              t = e[0],
              a = qa(),
              i = a.memoizedState
            return [t, i]
          }
          function q1() {
            var e = qg(),
              t = e[0],
              a = qa(),
              i = a.memoizedState
            return [t, i]
          }
          var K1 = !1
          function eT() {
            return K1
          }
          function i0() {
            var e = il(),
              t = bm(),
              a = t.identifierPrefix,
              i
            if (sr()) {
              var u = vR()
              i = ':' + a + 'R' + u
              var s = ip++
              s > 0 && (i += 'H' + s.toString(32)), (i += ':')
            } else {
              var f = XR++
              i = ':' + a + 'r' + f.toString(32) + ':'
            }
            return (e.memoizedState = i), i
          }
          function um() {
            var e = qa(),
              t = e.memoizedState
            return t
          }
          function tT(e, t, a) {
            typeof arguments[3] == 'function' &&
              m(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
              )
            var i = ro(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              }
            if (Z1(e)) J1(t, u)
            else {
              var s = m1(e, t, u, i)
              if (s !== null) {
                var f = Wr()
                Gn(s, e, i, f), ex(s, t, i)
              }
            }
            tx(e, i)
          }
          function nT(e, t, a) {
            typeof arguments[3] == 'function' &&
              m(
                "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
              )
            var i = ro(e),
              u = {
                lane: i,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              }
            if (Z1(e)) J1(t, u)
            else {
              var s = e.alternate
              if (e.lanes === I && (s === null || s.lanes === I)) {
                var f = t.lastRenderedReducer
                if (f !== null) {
                  var p
                  ;(p = ve.current), (ve.current = Ei)
                  try {
                    var v = t.lastRenderedState,
                      g = f(v, a)
                    if (
                      ((u.hasEagerState = !0), (u.eagerState = g), xe(g, v))
                    ) {
                      UR(e, t, u, i)
                      return
                    }
                  } catch {
                  } finally {
                    ve.current = p
                  }
                }
              }
              var S = m1(e, t, u, i)
              if (S !== null) {
                var k = Wr()
                Gn(S, e, i, k), ex(S, t, i)
              }
            }
            tx(e, i)
          }
          function Z1(e) {
            var t = e.alternate
            return e === Dt || (t !== null && t === Dt)
          }
          function J1(e, t) {
            ap = Xh = !0
            var a = e.pending
            a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (e.pending = t)
          }
          function ex(e, t, a) {
            if (od(a)) {
              var i = t.lanes
              i = cd(i, e.pendingLanes)
              var u = Ke(i, a)
              ;(t.lanes = u), _u(e, u)
            }
          }
          function tx(e, t, a) {
            Wi(e, t)
          }
          var om = {
              readContext: An,
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
              unstable_isNewReconciler: ee,
            },
            nx = null,
            rx = null,
            ax = null,
            ix = null,
            ll = null,
            Ei = null,
            sm = null
          {
            var l0 = function () {
                m(
                  'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
                )
              },
              Qe = function () {
                m(
                  'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
                )
              }
            ;(nx = {
              readContext: function (e) {
                return An(e)
              },
              useCallback: function (e, t) {
                return (Q = 'useCallback'), wt(), tf(t), t0(e, t)
              },
              useContext: function (e) {
                return (Q = 'useContext'), wt(), An(e)
              },
              useEffect: function (e, t) {
                return (Q = 'useEffect'), wt(), tf(t), em(e, t)
              },
              useImperativeHandle: function (e, t, a) {
                return (Q = 'useImperativeHandle'), wt(), tf(a), e0(e, t, a)
              },
              useInsertionEffect: function (e, t) {
                return (Q = 'useInsertionEffect'), wt(), tf(t), Zg(e, t)
              },
              useLayoutEffect: function (e, t) {
                return (Q = 'useLayoutEffect'), wt(), tf(t), Jg(e, t)
              },
              useMemo: function (e, t) {
                ;(Q = 'useMemo'), wt(), tf(t)
                var a = ve.current
                ve.current = ll
                try {
                  return n0(e, t)
                } finally {
                  ve.current = a
                }
              },
              useReducer: function (e, t, a) {
                ;(Q = 'useReducer'), wt()
                var i = ve.current
                ve.current = ll
                try {
                  return Ig(e, t, a)
                } finally {
                  ve.current = i
                }
              },
              useRef: function (e) {
                return (Q = 'useRef'), wt(), Kg(e)
              },
              useState: function (e) {
                ;(Q = 'useState'), wt()
                var t = ve.current
                ve.current = ll
                try {
                  return Kh(e)
                } finally {
                  ve.current = t
                }
              },
              useDebugValue: function (e, t) {
                return (Q = 'useDebugValue'), wt(), void 0
              },
              useDeferredValue: function (e) {
                return (Q = 'useDeferredValue'), wt(), r0(e)
              },
              useTransition: function () {
                return (Q = 'useTransition'), wt(), a0()
              },
              useMutableSource: function (e, t, a) {
                return (Q = 'useMutableSource'), wt(), void 0
              },
              useSyncExternalStore: function (e, t, a) {
                return (Q = 'useSyncExternalStore'), wt(), Gg(e, t, a)
              },
              useId: function () {
                return (Q = 'useId'), wt(), i0()
              },
              unstable_isNewReconciler: ee,
            }),
              (rx = {
                readContext: function (e) {
                  return An(e)
                },
                useCallback: function (e, t) {
                  return (Q = 'useCallback'), ie(), t0(e, t)
                },
                useContext: function (e) {
                  return (Q = 'useContext'), ie(), An(e)
                },
                useEffect: function (e, t) {
                  return (Q = 'useEffect'), ie(), em(e, t)
                },
                useImperativeHandle: function (e, t, a) {
                  return (Q = 'useImperativeHandle'), ie(), e0(e, t, a)
                },
                useInsertionEffect: function (e, t) {
                  return (Q = 'useInsertionEffect'), ie(), Zg(e, t)
                },
                useLayoutEffect: function (e, t) {
                  return (Q = 'useLayoutEffect'), ie(), Jg(e, t)
                },
                useMemo: function (e, t) {
                  ;(Q = 'useMemo'), ie()
                  var a = ve.current
                  ve.current = ll
                  try {
                    return n0(e, t)
                  } finally {
                    ve.current = a
                  }
                },
                useReducer: function (e, t, a) {
                  ;(Q = 'useReducer'), ie()
                  var i = ve.current
                  ve.current = ll
                  try {
                    return Ig(e, t, a)
                  } finally {
                    ve.current = i
                  }
                },
                useRef: function (e) {
                  return (Q = 'useRef'), ie(), Kg(e)
                },
                useState: function (e) {
                  ;(Q = 'useState'), ie()
                  var t = ve.current
                  ve.current = ll
                  try {
                    return Kh(e)
                  } finally {
                    ve.current = t
                  }
                },
                useDebugValue: function (e, t) {
                  return (Q = 'useDebugValue'), ie(), void 0
                },
                useDeferredValue: function (e) {
                  return (Q = 'useDeferredValue'), ie(), r0(e)
                },
                useTransition: function () {
                  return (Q = 'useTransition'), ie(), a0()
                },
                useMutableSource: function (e, t, a) {
                  return (Q = 'useMutableSource'), ie(), void 0
                },
                useSyncExternalStore: function (e, t, a) {
                  return (Q = 'useSyncExternalStore'), ie(), Gg(e, t, a)
                },
                useId: function () {
                  return (Q = 'useId'), ie(), i0()
                },
                unstable_isNewReconciler: ee,
              }),
              (ax = {
                readContext: function (e) {
                  return An(e)
                },
                useCallback: function (e, t) {
                  return (Q = 'useCallback'), ie(), im(e, t)
                },
                useContext: function (e) {
                  return (Q = 'useContext'), ie(), An(e)
                },
                useEffect: function (e, t) {
                  return (Q = 'useEffect'), ie(), op(e, t)
                },
                useImperativeHandle: function (e, t, a) {
                  return (Q = 'useImperativeHandle'), ie(), rm(e, t, a)
                },
                useInsertionEffect: function (e, t) {
                  return (Q = 'useInsertionEffect'), ie(), tm(e, t)
                },
                useLayoutEffect: function (e, t) {
                  return (Q = 'useLayoutEffect'), ie(), nm(e, t)
                },
                useMemo: function (e, t) {
                  ;(Q = 'useMemo'), ie()
                  var a = ve.current
                  ve.current = Ei
                  try {
                    return lm(e, t)
                  } finally {
                    ve.current = a
                  }
                },
                useReducer: function (e, t, a) {
                  ;(Q = 'useReducer'), ie()
                  var i = ve.current
                  ve.current = Ei
                  try {
                    return Qg(e, t, a)
                  } finally {
                    ve.current = i
                  }
                },
                useRef: function (e) {
                  return (Q = 'useRef'), ie(), Zh()
                },
                useState: function (e) {
                  ;(Q = 'useState'), ie()
                  var t = ve.current
                  ve.current = Ei
                  try {
                    return Xg(e)
                  } finally {
                    ve.current = t
                  }
                },
                useDebugValue: function (e, t) {
                  return (Q = 'useDebugValue'), ie(), am()
                },
                useDeferredValue: function (e) {
                  return (Q = 'useDeferredValue'), ie(), Q1(e)
                },
                useTransition: function () {
                  return (Q = 'useTransition'), ie(), X1()
                },
                useMutableSource: function (e, t, a) {
                  return (Q = 'useMutableSource'), ie(), void 0
                },
                useSyncExternalStore: function (e, t, a) {
                  return (Q = 'useSyncExternalStore'), ie(), qh(e, t)
                },
                useId: function () {
                  return (Q = 'useId'), ie(), um()
                },
                unstable_isNewReconciler: ee,
              }),
              (ix = {
                readContext: function (e) {
                  return An(e)
                },
                useCallback: function (e, t) {
                  return (Q = 'useCallback'), ie(), im(e, t)
                },
                useContext: function (e) {
                  return (Q = 'useContext'), ie(), An(e)
                },
                useEffect: function (e, t) {
                  return (Q = 'useEffect'), ie(), op(e, t)
                },
                useImperativeHandle: function (e, t, a) {
                  return (Q = 'useImperativeHandle'), ie(), rm(e, t, a)
                },
                useInsertionEffect: function (e, t) {
                  return (Q = 'useInsertionEffect'), ie(), tm(e, t)
                },
                useLayoutEffect: function (e, t) {
                  return (Q = 'useLayoutEffect'), ie(), nm(e, t)
                },
                useMemo: function (e, t) {
                  ;(Q = 'useMemo'), ie()
                  var a = ve.current
                  ve.current = sm
                  try {
                    return lm(e, t)
                  } finally {
                    ve.current = a
                  }
                },
                useReducer: function (e, t, a) {
                  ;(Q = 'useReducer'), ie()
                  var i = ve.current
                  ve.current = sm
                  try {
                    return Wg(e, t, a)
                  } finally {
                    ve.current = i
                  }
                },
                useRef: function (e) {
                  return (Q = 'useRef'), ie(), Zh()
                },
                useState: function (e) {
                  ;(Q = 'useState'), ie()
                  var t = ve.current
                  ve.current = sm
                  try {
                    return qg(e)
                  } finally {
                    ve.current = t
                  }
                },
                useDebugValue: function (e, t) {
                  return (Q = 'useDebugValue'), ie(), am()
                },
                useDeferredValue: function (e) {
                  return (Q = 'useDeferredValue'), ie(), W1(e)
                },
                useTransition: function () {
                  return (Q = 'useTransition'), ie(), q1()
                },
                useMutableSource: function (e, t, a) {
                  return (Q = 'useMutableSource'), ie(), void 0
                },
                useSyncExternalStore: function (e, t, a) {
                  return (Q = 'useSyncExternalStore'), ie(), qh(e, t)
                },
                useId: function () {
                  return (Q = 'useId'), ie(), um()
                },
                unstable_isNewReconciler: ee,
              }),
              (ll = {
                readContext: function (e) {
                  return l0(), An(e)
                },
                useCallback: function (e, t) {
                  return (Q = 'useCallback'), Qe(), wt(), t0(e, t)
                },
                useContext: function (e) {
                  return (Q = 'useContext'), Qe(), wt(), An(e)
                },
                useEffect: function (e, t) {
                  return (Q = 'useEffect'), Qe(), wt(), em(e, t)
                },
                useImperativeHandle: function (e, t, a) {
                  return (Q = 'useImperativeHandle'), Qe(), wt(), e0(e, t, a)
                },
                useInsertionEffect: function (e, t) {
                  return (Q = 'useInsertionEffect'), Qe(), wt(), Zg(e, t)
                },
                useLayoutEffect: function (e, t) {
                  return (Q = 'useLayoutEffect'), Qe(), wt(), Jg(e, t)
                },
                useMemo: function (e, t) {
                  ;(Q = 'useMemo'), Qe(), wt()
                  var a = ve.current
                  ve.current = ll
                  try {
                    return n0(e, t)
                  } finally {
                    ve.current = a
                  }
                },
                useReducer: function (e, t, a) {
                  ;(Q = 'useReducer'), Qe(), wt()
                  var i = ve.current
                  ve.current = ll
                  try {
                    return Ig(e, t, a)
                  } finally {
                    ve.current = i
                  }
                },
                useRef: function (e) {
                  return (Q = 'useRef'), Qe(), wt(), Kg(e)
                },
                useState: function (e) {
                  ;(Q = 'useState'), Qe(), wt()
                  var t = ve.current
                  ve.current = ll
                  try {
                    return Kh(e)
                  } finally {
                    ve.current = t
                  }
                },
                useDebugValue: function (e, t) {
                  return (Q = 'useDebugValue'), Qe(), wt(), void 0
                },
                useDeferredValue: function (e) {
                  return (Q = 'useDeferredValue'), Qe(), wt(), r0(e)
                },
                useTransition: function () {
                  return (Q = 'useTransition'), Qe(), wt(), a0()
                },
                useMutableSource: function (e, t, a) {
                  return (Q = 'useMutableSource'), Qe(), wt(), void 0
                },
                useSyncExternalStore: function (e, t, a) {
                  return (Q = 'useSyncExternalStore'), Qe(), wt(), Gg(e, t, a)
                },
                useId: function () {
                  return (Q = 'useId'), Qe(), wt(), i0()
                },
                unstable_isNewReconciler: ee,
              }),
              (Ei = {
                readContext: function (e) {
                  return l0(), An(e)
                },
                useCallback: function (e, t) {
                  return (Q = 'useCallback'), Qe(), ie(), im(e, t)
                },
                useContext: function (e) {
                  return (Q = 'useContext'), Qe(), ie(), An(e)
                },
                useEffect: function (e, t) {
                  return (Q = 'useEffect'), Qe(), ie(), op(e, t)
                },
                useImperativeHandle: function (e, t, a) {
                  return (Q = 'useImperativeHandle'), Qe(), ie(), rm(e, t, a)
                },
                useInsertionEffect: function (e, t) {
                  return (Q = 'useInsertionEffect'), Qe(), ie(), tm(e, t)
                },
                useLayoutEffect: function (e, t) {
                  return (Q = 'useLayoutEffect'), Qe(), ie(), nm(e, t)
                },
                useMemo: function (e, t) {
                  ;(Q = 'useMemo'), Qe(), ie()
                  var a = ve.current
                  ve.current = Ei
                  try {
                    return lm(e, t)
                  } finally {
                    ve.current = a
                  }
                },
                useReducer: function (e, t, a) {
                  ;(Q = 'useReducer'), Qe(), ie()
                  var i = ve.current
                  ve.current = Ei
                  try {
                    return Qg(e, t, a)
                  } finally {
                    ve.current = i
                  }
                },
                useRef: function (e) {
                  return (Q = 'useRef'), Qe(), ie(), Zh()
                },
                useState: function (e) {
                  ;(Q = 'useState'), Qe(), ie()
                  var t = ve.current
                  ve.current = Ei
                  try {
                    return Xg(e)
                  } finally {
                    ve.current = t
                  }
                },
                useDebugValue: function (e, t) {
                  return (Q = 'useDebugValue'), Qe(), ie(), am()
                },
                useDeferredValue: function (e) {
                  return (Q = 'useDeferredValue'), Qe(), ie(), Q1(e)
                },
                useTransition: function () {
                  return (Q = 'useTransition'), Qe(), ie(), X1()
                },
                useMutableSource: function (e, t, a) {
                  return (Q = 'useMutableSource'), Qe(), ie(), void 0
                },
                useSyncExternalStore: function (e, t, a) {
                  return (Q = 'useSyncExternalStore'), Qe(), ie(), qh(e, t)
                },
                useId: function () {
                  return (Q = 'useId'), Qe(), ie(), um()
                },
                unstable_isNewReconciler: ee,
              }),
              (sm = {
                readContext: function (e) {
                  return l0(), An(e)
                },
                useCallback: function (e, t) {
                  return (Q = 'useCallback'), Qe(), ie(), im(e, t)
                },
                useContext: function (e) {
                  return (Q = 'useContext'), Qe(), ie(), An(e)
                },
                useEffect: function (e, t) {
                  return (Q = 'useEffect'), Qe(), ie(), op(e, t)
                },
                useImperativeHandle: function (e, t, a) {
                  return (Q = 'useImperativeHandle'), Qe(), ie(), rm(e, t, a)
                },
                useInsertionEffect: function (e, t) {
                  return (Q = 'useInsertionEffect'), Qe(), ie(), tm(e, t)
                },
                useLayoutEffect: function (e, t) {
                  return (Q = 'useLayoutEffect'), Qe(), ie(), nm(e, t)
                },
                useMemo: function (e, t) {
                  ;(Q = 'useMemo'), Qe(), ie()
                  var a = ve.current
                  ve.current = Ei
                  try {
                    return lm(e, t)
                  } finally {
                    ve.current = a
                  }
                },
                useReducer: function (e, t, a) {
                  ;(Q = 'useReducer'), Qe(), ie()
                  var i = ve.current
                  ve.current = Ei
                  try {
                    return Wg(e, t, a)
                  } finally {
                    ve.current = i
                  }
                },
                useRef: function (e) {
                  return (Q = 'useRef'), Qe(), ie(), Zh()
                },
                useState: function (e) {
                  ;(Q = 'useState'), Qe(), ie()
                  var t = ve.current
                  ve.current = Ei
                  try {
                    return qg(e)
                  } finally {
                    ve.current = t
                  }
                },
                useDebugValue: function (e, t) {
                  return (Q = 'useDebugValue'), Qe(), ie(), am()
                },
                useDeferredValue: function (e) {
                  return (Q = 'useDeferredValue'), Qe(), ie(), W1(e)
                },
                useTransition: function () {
                  return (Q = 'useTransition'), Qe(), ie(), q1()
                },
                useMutableSource: function (e, t, a) {
                  return (Q = 'useMutableSource'), Qe(), ie(), void 0
                },
                useSyncExternalStore: function (e, t, a) {
                  return (Q = 'useSyncExternalStore'), Qe(), ie(), qh(e, t)
                },
                useId: function () {
                  return (Q = 'useId'), Qe(), ie(), um()
                },
                unstable_isNewReconciler: ee,
              })
          }
          var Ju = E.unstable_now,
            lx = 0,
            cm = -1,
            sp = -1,
            fm = -1,
            u0 = !1,
            dm = !1
          function ux() {
            return u0
          }
          function rT() {
            dm = !0
          }
          function aT() {
            ;(u0 = !1), (dm = !1)
          }
          function iT() {
            ;(u0 = dm), (dm = !1)
          }
          function ox() {
            return lx
          }
          function sx() {
            lx = Ju()
          }
          function o0(e) {
            ;(sp = Ju()), e.actualStartTime < 0 && (e.actualStartTime = Ju())
          }
          function cx(e) {
            sp = -1
          }
          function pm(e, t) {
            if (sp >= 0) {
              var a = Ju() - sp
              ;(e.actualDuration += a), t && (e.selfBaseDuration = a), (sp = -1)
            }
          }
          function ul(e) {
            if (cm >= 0) {
              var t = Ju() - cm
              cm = -1
              for (var a = e.return; a !== null; ) {
                switch (a.tag) {
                  case B:
                    var i = a.stateNode
                    i.effectDuration += t
                    return
                  case He:
                    var u = a.stateNode
                    u.effectDuration += t
                    return
                }
                a = a.return
              }
            }
          }
          function s0(e) {
            if (fm >= 0) {
              var t = Ju() - fm
              fm = -1
              for (var a = e.return; a !== null; ) {
                switch (a.tag) {
                  case B:
                    var i = a.stateNode
                    i !== null && (i.passiveEffectDuration += t)
                    return
                  case He:
                    var u = a.stateNode
                    u !== null && (u.passiveEffectDuration += t)
                    return
                }
                a = a.return
              }
            }
          }
          function ol() {
            cm = Ju()
          }
          function c0() {
            fm = Ju()
          }
          function f0(e) {
            for (var t = e.child; t; )
              (e.actualDuration += t.actualDuration), (t = t.sibling)
          }
          function ss(e, t) {
            return {
              value: e,
              source: t,
              stack: gf(t),
              digest: null,
            }
          }
          function d0(e, t, a) {
            return {
              value: e,
              source: null,
              stack: a ?? null,
              digest: t ?? null,
            }
          }
          function lT(e, t) {
            return !0
          }
          function p0(e, t) {
            try {
              var a = lT(e, t)
              if (a === !1) return
              var i = t.value,
                u = t.source,
                s = t.stack,
                f = s !== null ? s : ''
              if (i != null && i._suppressLogging) {
                if (e.tag === $) return
                console.error(i)
              }
              var p = u ? Xe(u) : null,
                v = p
                  ? 'The above error occurred in the <' + p + '> component:'
                  : 'The above error occurred in one of your React components:',
                g
              if (e.tag === B)
                g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`
              else {
                var S = Xe(e) || 'Anonymous'
                g =
                  'React will try to recreate this component tree from scratch ' +
                  ('using the error boundary you provided, ' + S + '.')
              }
              var k =
                v +
                `
` +
                f +
                `

` +
                ('' + g)
              console.error(k)
            } catch (T) {
              setTimeout(function () {
                throw T
              })
            }
          }
          var uT = typeof WeakMap == 'function' ? WeakMap : Map
          function fx(e, t, a) {
            var i = Kl(zt, a)
            ;(i.tag = pg),
              (i.payload = {
                element: null,
              })
            var u = t.value
            return (
              (i.callback = function () {
                Jb(u), p0(e, t)
              }),
              i
            )
          }
          function v0(e, t, a) {
            var i = Kl(zt, a)
            i.tag = pg
            var u = e.type.getDerivedStateFromError
            if (typeof u == 'function') {
              var s = t.value
              ;(i.payload = function () {
                return u(s)
              }),
                (i.callback = function () {
                  EC(e), p0(e, t)
                })
            }
            var f = e.stateNode
            return (
              f !== null &&
                typeof f.componentDidCatch == 'function' &&
                (i.callback = function () {
                  EC(e), p0(e, t), typeof u != 'function' && Kb(this)
                  var v = t.value,
                    g = t.stack
                  this.componentDidCatch(v, {
                    componentStack: g !== null ? g : '',
                  }),
                    typeof u != 'function' &&
                      (kr(e.lanes, Fe) ||
                        m(
                          '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                          Xe(e) || 'Unknown'
                        ))
                }),
              i
            )
          }
          function dx(e, t, a) {
            var i = e.pingCache,
              u
            if (
              (i === null
                ? ((i = e.pingCache = new uT()),
                  (u = /* @__PURE__ */ new Set()),
                  i.set(t, u))
                : ((u = i.get(t)),
                  u === void 0 &&
                    ((u = /* @__PURE__ */ new Set()), i.set(t, u))),
              !u.has(a))
            ) {
              u.add(a)
              var s = ek.bind(null, e, t, a)
              Fn && Tp(e, a), t.then(s, s)
            }
          }
          function oT(e, t, a, i) {
            var u = e.updateQueue
            if (u === null) {
              var s = /* @__PURE__ */ new Set()
              s.add(a), (e.updateQueue = s)
            } else u.add(a)
          }
          function sT(e, t) {
            var a = e.tag
            if ((e.mode & it) === Oe && (a === H || a === ce || a === Ve)) {
              var i = e.alternate
              i
                ? ((e.updateQueue = i.updateQueue),
                  (e.memoizedState = i.memoizedState),
                  (e.lanes = i.lanes))
                : ((e.updateQueue = null), (e.memoizedState = null))
            }
          }
          function px(e) {
            var t = e
            do {
              if (t.tag === de && WR(t)) return t
              t = t.return
            } while (t !== null)
            return null
          }
          function vx(e, t, a, i, u) {
            if ((e.mode & it) === Oe) {
              if (e === t) e.flags |= Mn
              else {
                if (
                  ((e.flags |= Ye),
                  (a.flags |= Mo),
                  (a.flags &= ~(Ps | Fr)),
                  a.tag === $)
                ) {
                  var s = a.alternate
                  if (s === null) a.tag = ct
                  else {
                    var f = Kl(zt, Fe)
                    ;(f.tag = jh), Xu(a, f, Fe)
                  }
                }
                a.lanes = Ke(a.lanes, Fe)
              }
              return e
            }
            return (e.flags |= Mn), (e.lanes = u), e
          }
          function cT(e, t, a, i, u) {
            if (
              ((a.flags |= Fr),
              Fn && Tp(e, u),
              i !== null && typeof i == 'object' && typeof i.then == 'function')
            ) {
              var s = i
              sT(a), sr() && a.mode & it && a1()
              var f = px(t)
              if (f !== null) {
                ;(f.flags &= ~tn),
                  vx(f, t, a, e, u),
                  f.mode & it && dx(e, s, u),
                  oT(f, e, s)
                return
              } else {
                if (!ku(u)) {
                  dx(e, s, u), W0()
                  return
                }
                var p = new Error(
                  'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
                )
                i = p
              }
            } else if (sr() && a.mode & it) {
              a1()
              var v = px(t)
              if (v !== null) {
                ;(v.flags & Mn) === Me && (v.flags |= tn),
                  vx(v, t, a, e, u),
                  lg(ss(i, a))
                return
              }
            }
            ;(i = ss(i, a)), Yb(i)
            var g = t
            do {
              switch (g.tag) {
                case B: {
                  var S = i
                  g.flags |= Mn
                  var k = xn(u)
                  g.lanes = Ke(g.lanes, k)
                  var T = fx(g, S, k)
                  mg(g, T)
                  return
                }
                case $:
                  var O = i,
                    j = g.type,
                    P = g.stateNode
                  if (
                    (g.flags & Ye) === Me &&
                    (typeof j.getDerivedStateFromError == 'function' ||
                      (P !== null &&
                        typeof P.componentDidCatch == 'function' &&
                        !pC(P)))
                  ) {
                    g.flags |= Mn
                    var he = xn(u)
                    g.lanes = Ke(g.lanes, he)
                    var ze = v0(g, O, he)
                    mg(g, ze)
                    return
                  }
                  break
              }
              g = g.return
            } while (g !== null)
          }
          function fT() {
            return null
          }
          var cp = y.ReactCurrentOwner,
            wi = !1,
            h0,
            fp,
            m0,
            y0,
            g0,
            cs,
            S0,
            vm
          ;(h0 = {}),
            (fp = {}),
            (m0 = {}),
            (y0 = {}),
            (g0 = {}),
            (cs = !1),
            (S0 = {}),
            (vm = {})
          function Ir(e, t, a, i) {
            e === null
              ? (t.child = N1(t, null, a, i))
              : (t.child = qc(t, e.child, a, i))
          }
          function dT(e, t, a, i) {
            ;(t.child = qc(t, e.child, null, i)), (t.child = qc(t, null, a, i))
          }
          function hx(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes
              s &&
                yi(
                  s,
                  i,
                  // Resolved props
                  'prop',
                  Mt(a)
                )
            }
            var f = a.render,
              p = t.ref,
              v,
              g
            Xc(t, u), Qi(t)
            {
              if (
                ((cp.current = t),
                ka(!0),
                (v = nf(e, t, f, i, p, u)),
                (g = rf()),
                t.mode & Kt)
              ) {
                Sn(!0)
                try {
                  ;(v = nf(e, t, f, i, p, u)), (g = rf())
                } finally {
                  Sn(!1)
                }
              }
              ka(!1)
            }
            return (
              bl(),
              e !== null && !wi
                ? (j1(e, t, u), Zl(e, t, u))
                : (sr() && g && eg(t), (t.flags |= Fi), Ir(e, t, v, u), t.child)
            )
          }
          function mx(e, t, a, i, u) {
            if (e === null) {
              var s = a.type
              if (
                yk(s) &&
                a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
                a.defaultProps === void 0
              ) {
                var f = s
                return (
                  (f = df(s)),
                  (t.tag = Ve),
                  (t.type = f),
                  E0(t, s),
                  yx(e, t, f, i, u)
                )
              }
              {
                var p = s.propTypes
                p &&
                  yi(
                    p,
                    i,
                    // Resolved props
                    'prop',
                    Mt(s)
                  )
              }
              var v = aS(a.type, null, i, t, t.mode, u)
              return (v.ref = t.ref), (v.return = t), (t.child = v), v
            }
            {
              var g = a.type,
                S = g.propTypes
              S &&
                yi(
                  S,
                  i,
                  // Resolved props
                  'prop',
                  Mt(g)
                )
            }
            var k = e.child,
              T = D0(e, u)
            if (!T) {
              var O = k.memoizedProps,
                j = a.compare
              if (((j = j !== null ? j : De), j(O, i) && e.ref === t.ref))
                return Zl(e, t, u)
            }
            t.flags |= Fi
            var P = hs(k, i)
            return (P.ref = t.ref), (P.return = t), (t.child = P), P
          }
          function yx(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = t.elementType
              if (s.$$typeof === Ae) {
                var f = s,
                  p = f._payload,
                  v = f._init
                try {
                  s = v(p)
                } catch {
                  s = null
                }
                var g = s && s.propTypes
                g &&
                  yi(
                    g,
                    i,
                    // Resolved (SimpleMemoComponent has no defaultProps)
                    'prop',
                    Mt(s)
                  )
              }
            }
            if (e !== null) {
              var S = e.memoizedProps
              if (
                De(S, i) &&
                e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
                t.type === e.type
              )
                if (((wi = !1), (t.pendingProps = i = S), D0(e, u)))
                  (e.flags & Mo) !== Me && (wi = !0)
                else return (t.lanes = e.lanes), Zl(e, t, u)
            }
            return x0(e, t, a, i, u)
          }
          function gx(e, t, a) {
            var i = t.pendingProps,
              u = i.children,
              s = e !== null ? e.memoizedState : null
            if (i.mode === 'hidden' || le)
              if ((t.mode & it) === Oe) {
                var f = {
                  baseLanes: I,
                  cachePool: null,
                  transitions: null,
                }
                ;(t.memoizedState = f), km(t, a)
              } else if (kr(a, br)) {
                var k = {
                  baseLanes: I,
                  cachePool: null,
                  transitions: null,
                }
                t.memoizedState = k
                var T = s !== null ? s.baseLanes : a
                km(t, T)
              } else {
                var p = null,
                  v
                if (s !== null) {
                  var g = s.baseLanes
                  v = Ke(g, a)
                } else v = a
                t.lanes = t.childLanes = br
                var S = {
                  baseLanes: v,
                  cachePool: p,
                  transitions: null,
                }
                return (
                  (t.memoizedState = S), (t.updateQueue = null), km(t, v), null
                )
              }
            else {
              var O
              s !== null
                ? ((O = Ke(s.baseLanes, a)), (t.memoizedState = null))
                : (O = a),
                km(t, O)
            }
            return Ir(e, t, u, a), t.child
          }
          function pT(e, t, a) {
            var i = t.pendingProps
            return Ir(e, t, i, a), t.child
          }
          function vT(e, t, a) {
            var i = t.pendingProps.children
            return Ir(e, t, i, a), t.child
          }
          function hT(e, t, a) {
            {
              t.flags |= qe
              {
                var i = t.stateNode
                ;(i.effectDuration = 0), (i.passiveEffectDuration = 0)
              }
            }
            var u = t.pendingProps,
              s = u.children
            return Ir(e, t, s, a), t.child
          }
          function Sx(e, t) {
            var a = t.ref
            ;((e === null && a !== null) || (e !== null && e.ref !== a)) &&
              ((t.flags |= xr), (t.flags |= Wf))
          }
          function x0(e, t, a, i, u) {
            if (t.type !== t.elementType) {
              var s = a.propTypes
              s &&
                yi(
                  s,
                  i,
                  // Resolved props
                  'prop',
                  Mt(a)
                )
            }
            var f
            {
              var p = Yc(t, a, !0)
              f = $c(t, p)
            }
            var v, g
            Xc(t, u), Qi(t)
            {
              if (
                ((cp.current = t),
                ka(!0),
                (v = nf(e, t, a, i, f, u)),
                (g = rf()),
                t.mode & Kt)
              ) {
                Sn(!0)
                try {
                  ;(v = nf(e, t, a, i, f, u)), (g = rf())
                } finally {
                  Sn(!1)
                }
              }
              ka(!1)
            }
            return (
              bl(),
              e !== null && !wi
                ? (j1(e, t, u), Zl(e, t, u))
                : (sr() && g && eg(t), (t.flags |= Fi), Ir(e, t, v, u), t.child)
            )
          }
          function xx(e, t, a, i, u) {
            {
              switch (Nk(t)) {
                case !1: {
                  var s = t.stateNode,
                    f = t.type,
                    p = new f(t.memoizedProps, s.context),
                    v = p.state
                  s.updater.enqueueSetState(s, v, null)
                  break
                }
                case !0: {
                  ;(t.flags |= Ye), (t.flags |= Mn)
                  var g = new Error('Simulated error coming from DevTools'),
                    S = xn(u)
                  t.lanes = Ke(t.lanes, S)
                  var k = v0(t, ss(g, t), S)
                  mg(t, k)
                  break
                }
              }
              if (t.type !== t.elementType) {
                var T = a.propTypes
                T &&
                  yi(
                    T,
                    i,
                    // Resolved props
                    'prop',
                    Mt(a)
                  )
              }
            }
            var O
            rl(a) ? ((O = !0), bh(t)) : (O = !1), Xc(t, u)
            var j = t.stateNode,
              P
            j === null
              ? (mm(e, t), k1(t, a, i), Dg(t, a, i, u), (P = !0))
              : e === null
              ? (P = BR(t, a, i, u))
              : (P = PR(e, t, a, i, u))
            var he = C0(e, t, a, P, O, u)
            {
              var ze = t.stateNode
              P &&
                ze.props !== i &&
                (cs ||
                  m(
                    'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
                    Xe(t) || 'a component'
                  ),
                (cs = !0))
            }
            return he
          }
          function C0(e, t, a, i, u, s) {
            Sx(e, t)
            var f = (t.flags & Ye) !== Me
            if (!i && !f) return u && e1(t, a, !1), Zl(e, t, s)
            var p = t.stateNode
            cp.current = t
            var v
            if (f && typeof a.getDerivedStateFromError != 'function')
              (v = null), cx()
            else {
              Qi(t)
              {
                if ((ka(!0), (v = p.render()), t.mode & Kt)) {
                  Sn(!0)
                  try {
                    p.render()
                  } finally {
                    Sn(!1)
                  }
                }
                ka(!1)
              }
              bl()
            }
            return (
              (t.flags |= Fi),
              e !== null && f ? dT(e, t, v, s) : Ir(e, t, v, s),
              (t.memoizedState = p.state),
              u && e1(t, a, !0),
              t.child
            )
          }
          function Cx(e) {
            var t = e.stateNode
            t.pendingContext
              ? ZS(e, t.pendingContext, t.pendingContext !== t.context)
              : t.context && ZS(e, t.context, !1),
              Ug(e, t.containerInfo)
          }
          function mT(e, t, a) {
            if ((Cx(t), e === null))
              throw new Error(
                'Should have a current fiber. This is a bug in React.'
              )
            var i = t.pendingProps,
              u = t.memoizedState,
              s = u.element
            S1(e, t), Bh(t, i, null, a)
            var f = t.memoizedState
            t.stateNode
            var p = f.element
            if (u.isDehydrated) {
              var v = {
                  element: p,
                  isDehydrated: !1,
                  cache: f.cache,
                  pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                  transitions: f.transitions,
                },
                g = t.updateQueue
              if (((g.baseState = v), (t.memoizedState = v), t.flags & tn)) {
                var S = ss(
                  new Error(
                    'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.'
                  ),
                  t
                )
                return Ex(e, t, p, a, S)
              } else if (p !== s) {
                var k = ss(
                  new Error(
                    'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.'
                  ),
                  t
                )
                return Ex(e, t, p, a, k)
              } else {
                xR(t)
                var T = N1(t, null, p, a)
                t.child = T
                for (var O = T; O; )
                  (O.flags = (O.flags & ~Ft) | aa), (O = O.sibling)
              }
            } else {
              if ((Wc(), p === s)) return Zl(e, t, a)
              Ir(e, t, p, a)
            }
            return t.child
          }
          function Ex(e, t, a, i, u) {
            return Wc(), lg(u), (t.flags |= tn), Ir(e, t, a, i), t.child
          }
          function yT(e, t, a) {
            U1(t), e === null && ig(t)
            var i = t.type,
              u = t.pendingProps,
              s = e !== null ? e.memoizedProps : null,
              f = u.children,
              p = Vy(i, u)
            return (
              p ? (f = null) : s !== null && Vy(i, s) && (t.flags |= Et),
              Sx(e, t),
              Ir(e, t, f, a),
              t.child
            )
          }
          function gT(e, t) {
            return e === null && ig(t), null
          }
          function ST(e, t, a, i) {
            mm(e, t)
            var u = t.pendingProps,
              s = a,
              f = s._payload,
              p = s._init,
              v = p(f)
            t.type = v
            var g = (t.tag = gk(v)),
              S = xi(v, u),
              k
            switch (g) {
              case H:
                return (
                  E0(t, v), (t.type = v = df(v)), (k = x0(null, t, v, S, i)), k
                )
              case $:
                return (t.type = v = Z0(v)), (k = xx(null, t, v, S, i)), k
              case ce:
                return (t.type = v = J0(v)), (k = hx(null, t, v, S, i)), k
              case Ee: {
                if (t.type !== t.elementType) {
                  var T = v.propTypes
                  T &&
                    yi(
                      T,
                      S,
                      // Resolved for outer only
                      'prop',
                      Mt(v)
                    )
                }
                return (
                  (k = mx(
                    null,
                    t,
                    v,
                    xi(v.type, S),
                    // The inner type can have defaults too
                    i
                  )),
                  k
                )
              }
            }
            var O = ''
            throw (
              (v !== null &&
                typeof v == 'object' &&
                v.$$typeof === Ae &&
                (O =
                  ' Did you wrap a component in React.lazy() more than once?'),
              new Error(
                'Element type is invalid. Received a promise that resolves to: ' +
                  v +
                  '. ' +
                  ('Lazy element type must resolve to a class or function.' + O)
              ))
            )
          }
          function xT(e, t, a, i, u) {
            mm(e, t), (t.tag = $)
            var s
            return (
              rl(a) ? ((s = !0), bh(t)) : (s = !1),
              Xc(t, u),
              k1(t, a, i),
              Dg(t, a, i, u),
              C0(null, t, a, !0, s, u)
            )
          }
          function CT(e, t, a, i) {
            mm(e, t)
            var u = t.pendingProps,
              s
            {
              var f = Yc(t, a, !1)
              s = $c(t, f)
            }
            Xc(t, i)
            var p, v
            Qi(t)
            {
              if (a.prototype && typeof a.prototype.render == 'function') {
                var g = Mt(a) || 'Unknown'
                h0[g] ||
                  (m(
                    "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                    g,
                    g
                  ),
                  (h0[g] = !0))
              }
              t.mode & Kt && Si.recordLegacyContextWarning(t, null),
                ka(!0),
                (cp.current = t),
                (p = nf(null, t, a, u, s, i)),
                (v = rf()),
                ka(!1)
            }
            if (
              (bl(),
              (t.flags |= Fi),
              typeof p == 'object' &&
                p !== null &&
                typeof p.render == 'function' &&
                p.$$typeof === void 0)
            ) {
              var S = Mt(a) || 'Unknown'
              fp[S] ||
                (m(
                  "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                  S,
                  S,
                  S
                ),
                (fp[S] = !0))
            }
            if (
              // Run these checks in production only if the flag is off.
              // Eventually we'll delete this branch altogether.
              typeof p == 'object' &&
              p !== null &&
              typeof p.render == 'function' &&
              p.$$typeof === void 0
            ) {
              {
                var k = Mt(a) || 'Unknown'
                fp[k] ||
                  (m(
                    "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                    k,
                    k,
                    k
                  ),
                  (fp[k] = !0))
              }
              ;(t.tag = $), (t.memoizedState = null), (t.updateQueue = null)
              var T = !1
              return (
                rl(a) ? ((T = !0), bh(t)) : (T = !1),
                (t.memoizedState =
                  p.state !== null && p.state !== void 0 ? p.state : null),
                hg(t),
                b1(t, p),
                Dg(t, a, u, i),
                C0(null, t, a, !0, T, i)
              )
            } else {
              if (((t.tag = H), t.mode & Kt)) {
                Sn(!0)
                try {
                  ;(p = nf(null, t, a, u, s, i)), (v = rf())
                } finally {
                  Sn(!1)
                }
              }
              return sr() && v && eg(t), Ir(null, t, p, i), E0(t, a), t.child
            }
          }
          function E0(e, t) {
            {
              if (
                (t &&
                  t.childContextTypes &&
                  m(
                    '%s(...): childContextTypes cannot be defined on a function component.',
                    t.displayName || t.name || 'Component'
                  ),
                e.ref !== null)
              ) {
                var a = '',
                  i = ea()
                i &&
                  (a +=
                    `

Check the render method of \`` +
                    i +
                    '`.')
                var u = i || '',
                  s = e._debugSource
                s && (u = s.fileName + ':' + s.lineNumber),
                  g0[u] ||
                    ((g0[u] = !0),
                    m(
                      'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
                      a
                    ))
              }
              if (typeof t.getDerivedStateFromProps == 'function') {
                var f = Mt(t) || 'Unknown'
                y0[f] ||
                  (m(
                    '%s: Function components do not support getDerivedStateFromProps.',
                    f
                  ),
                  (y0[f] = !0))
              }
              if (typeof t.contextType == 'object' && t.contextType !== null) {
                var p = Mt(t) || 'Unknown'
                m0[p] ||
                  (m('%s: Function components do not support contextType.', p),
                  (m0[p] = !0))
              }
            }
          }
          var w0 = {
            dehydrated: null,
            treeContext: null,
            retryLane: dt,
          }
          function R0(e) {
            return {
              baseLanes: e,
              cachePool: fT(),
              transitions: null,
            }
          }
          function ET(e, t) {
            var a = null
            return {
              baseLanes: Ke(e.baseLanes, t),
              cachePool: a,
              transitions: e.transitions,
            }
          }
          function wT(e, t, a, i) {
            if (t !== null) {
              var u = t.memoizedState
              if (u === null) return !1
            }
            return jg(e, np)
          }
          function RT(e, t) {
            return Du(e.childLanes, t)
          }
          function wx(e, t, a) {
            var i = t.pendingProps
            zk(t) && (t.flags |= Ye)
            var u = Ci.current,
              s = !1,
              f = (t.flags & Ye) !== Me
            if (
              (f || wT(u, e)
                ? ((s = !0), (t.flags &= ~Ye))
                : (e === null || e.memoizedState !== null) && (u = QR(u, A1)),
              (u = Zc(u)),
              Ku(t, u),
              e === null)
            ) {
              ig(t)
              var p = t.memoizedState
              if (p !== null) {
                var v = p.dehydrated
                if (v !== null) return _T(t, v)
              }
              var g = i.children,
                S = i.fallback
              if (s) {
                var k = TT(t, g, S, a),
                  T = t.child
                return (T.memoizedState = R0(a)), (t.memoizedState = w0), k
              } else return T0(t, g)
            } else {
              var O = e.memoizedState
              if (O !== null) {
                var j = O.dehydrated
                if (j !== null) return LT(e, t, f, i, j, O, a)
              }
              if (s) {
                var P = i.fallback,
                  he = i.children,
                  ze = kT(e, t, he, P, a),
                  ke = t.child,
                  vt = e.child.memoizedState
                return (
                  (ke.memoizedState = vt === null ? R0(a) : ET(vt, a)),
                  (ke.childLanes = RT(e, a)),
                  (t.memoizedState = w0),
                  ze
                )
              } else {
                var st = i.children,
                  M = bT(e, t, st, a)
                return (t.memoizedState = null), M
              }
            }
          }
          function T0(e, t, a) {
            var i = e.mode,
              u = {
                mode: 'visible',
                children: t,
              },
              s = b0(u, i)
            return (s.return = e), (e.child = s), s
          }
          function TT(e, t, a, i) {
            var u = e.mode,
              s = e.child,
              f = {
                mode: 'hidden',
                children: t,
              },
              p,
              v
            return (
              (u & it) === Oe && s !== null
                ? ((p = s),
                  (p.childLanes = I),
                  (p.pendingProps = f),
                  e.mode & je &&
                    ((p.actualDuration = 0),
                    (p.actualStartTime = -1),
                    (p.selfBaseDuration = 0),
                    (p.treeBaseDuration = 0)),
                  (v = io(a, u, i, null)))
                : ((p = b0(f, u)), (v = io(a, u, i, null))),
              (p.return = e),
              (v.return = e),
              (p.sibling = v),
              (e.child = p),
              v
            )
          }
          function b0(e, t, a) {
            return RC(e, t, I, null)
          }
          function Rx(e, t) {
            return hs(e, t)
          }
          function bT(e, t, a, i) {
            var u = e.child,
              s = u.sibling,
              f = Rx(u, {
                mode: 'visible',
                children: a,
              })
            if (
              ((t.mode & it) === Oe && (f.lanes = i),
              (f.return = t),
              (f.sibling = null),
              s !== null)
            ) {
              var p = t.deletions
              p === null ? ((t.deletions = [s]), (t.flags |= xt)) : p.push(s)
            }
            return (t.child = f), f
          }
          function kT(e, t, a, i, u) {
            var s = t.mode,
              f = e.child,
              p = f.sibling,
              v = {
                mode: 'hidden',
                children: a,
              },
              g
            if (
              // In legacy mode, we commit the primary tree as if it successfully
              // completed, even though it's in an inconsistent state.
              (s & it) === Oe && // Make sure we're on the second pass, i.e. the primary child fragment was
              // already cloned. In legacy mode, the only case where this isn't true is
              // when DevTools forces us to display a fallback; we skip the first render
              // pass entirely and go straight to rendering the fallback. (In Concurrent
              // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
              // only codepath.)
              t.child !== f
            ) {
              var S = t.child
              ;(g = S),
                (g.childLanes = I),
                (g.pendingProps = v),
                t.mode & je &&
                  ((g.actualDuration = 0),
                  (g.actualStartTime = -1),
                  (g.selfBaseDuration = f.selfBaseDuration),
                  (g.treeBaseDuration = f.treeBaseDuration)),
                (t.deletions = null)
            } else (g = Rx(f, v)), (g.subtreeFlags = f.subtreeFlags & Hn)
            var k
            return (
              p !== null
                ? (k = hs(p, i))
                : ((k = io(i, s, u, null)), (k.flags |= Ft)),
              (k.return = t),
              (g.return = t),
              (g.sibling = k),
              (t.child = g),
              k
            )
          }
          function hm(e, t, a, i) {
            i !== null && lg(i), qc(t, e.child, null, a)
            var u = t.pendingProps,
              s = u.children,
              f = T0(t, s)
            return (f.flags |= Ft), (t.memoizedState = null), f
          }
          function DT(e, t, a, i, u) {
            var s = t.mode,
              f = {
                mode: 'visible',
                children: a,
              },
              p = b0(f, s),
              v = io(i, s, u, null)
            return (
              (v.flags |= Ft),
              (p.return = t),
              (v.return = t),
              (p.sibling = v),
              (t.child = p),
              (t.mode & it) !== Oe && qc(t, e.child, null, u),
              v
            )
          }
          function _T(e, t, a) {
            return (
              (e.mode & it) === Oe
                ? (m(
                    'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.'
                  ),
                  (e.lanes = Fe))
                : $y(t)
                ? (e.lanes = _l)
                : (e.lanes = br),
              null
            )
          }
          function LT(e, t, a, i, u, s, f) {
            if (a)
              if (t.flags & tn) {
                t.flags &= ~tn
                var M = d0(
                  new Error(
                    'There was an error while hydrating this Suspense boundary. Switched to client rendering.'
                  )
                )
                return hm(e, t, f, M)
              } else {
                if (t.memoizedState !== null)
                  return (t.child = e.child), (t.flags |= Ye), null
                var Y = i.children,
                  N = i.fallback,
                  J = DT(e, t, Y, N, f),
                  me = t.child
                return (me.memoizedState = R0(f)), (t.memoizedState = w0), J
              }
            else {
              if ((gR(), (t.mode & it) === Oe))
                return hm(
                  e,
                  t,
                  f,
                  // TODO: When we delete legacy mode, we should make this error argument
                  // required — every concurrent mode path that causes hydration to
                  // de-opt to client rendering should have an error message.
                  null
                )
              if ($y(u)) {
                var p, v, g
                {
                  var S = Ow(u)
                  ;(p = S.digest), (v = S.message), (g = S.stack)
                }
                var k
                v
                  ? (k = new Error(v))
                  : (k = new Error(
                      'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.'
                    ))
                var T = d0(k, p, g)
                return hm(e, t, f, T)
              }
              var O = kr(f, e.childLanes)
              if (wi || O) {
                var j = bm()
                if (j !== null) {
                  var P = fy(j, f)
                  if (P !== dt && P !== s.retryLane) {
                    s.retryLane = P
                    var he = zt
                    va(e, P), Gn(j, e, P, he)
                  }
                }
                W0()
                var ze = d0(
                  new Error(
                    'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.'
                  )
                )
                return hm(e, t, f, ze)
              } else if (QS(u)) {
                ;(t.flags |= Ye), (t.child = e.child)
                var ke = tk.bind(null, e)
                return Aw(u, ke), null
              } else {
                CR(t, u, s.treeContext)
                var vt = i.children,
                  st = T0(t, vt)
                return (st.flags |= aa), st
              }
            }
          }
          function Tx(e, t, a) {
            e.lanes = Ke(e.lanes, t)
            var i = e.alternate
            i !== null && (i.lanes = Ke(i.lanes, t)), fg(e.return, t, a)
          }
          function MT(e, t, a) {
            for (var i = t; i !== null; ) {
              if (i.tag === de) {
                var u = i.memoizedState
                u !== null && Tx(i, a, e)
              } else if (i.tag === Pe) Tx(i, a, e)
              else if (i.child !== null) {
                ;(i.child.return = i), (i = i.child)
                continue
              }
              if (i === e) return
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) return
                i = i.return
              }
              ;(i.sibling.return = i.return), (i = i.sibling)
            }
          }
          function NT(e) {
            for (var t = e, a = null; t !== null; ) {
              var i = t.alternate
              i !== null && Gh(i) === null && (a = t), (t = t.sibling)
            }
            return a
          }
          function zT(e) {
            if (
              e !== void 0 &&
              e !== 'forwards' &&
              e !== 'backwards' &&
              e !== 'together' &&
              !S0[e]
            )
              if (((S0[e] = !0), typeof e == 'string'))
                switch (e.toLowerCase()) {
                  case 'together':
                  case 'forwards':
                  case 'backwards': {
                    m(
                      '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                      e,
                      e.toLowerCase()
                    )
                    break
                  }
                  case 'forward':
                  case 'backward': {
                    m(
                      '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                      e,
                      e.toLowerCase()
                    )
                    break
                  }
                  default:
                    m(
                      '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                      e
                    )
                    break
                }
              else
                m(
                  '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  e
                )
          }
          function UT(e, t) {
            e !== void 0 &&
              !vm[e] &&
              (e !== 'collapsed' && e !== 'hidden'
                ? ((vm[e] = !0),
                  m(
                    '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                    e
                  ))
                : t !== 'forwards' &&
                  t !== 'backwards' &&
                  ((vm[e] = !0),
                  m(
                    '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                    e
                  )))
          }
          function bx(e, t) {
            {
              var a = _n(e),
                i = !a && typeof ei(e) == 'function'
              if (a || i) {
                var u = a ? 'array' : 'iterable'
                return (
                  m(
                    'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>',
                    u,
                    t,
                    u
                  ),
                  !1
                )
              }
            }
            return !0
          }
          function OT(e, t) {
            if (
              (t === 'forwards' || t === 'backwards') &&
              e !== void 0 &&
              e !== null &&
              e !== !1
            )
              if (_n(e)) {
                for (var a = 0; a < e.length; a++) if (!bx(e[a], a)) return
              } else {
                var i = ei(e)
                if (typeof i == 'function') {
                  var u = i.call(e)
                  if (u)
                    for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                      if (!bx(s.value, f)) return
                      f++
                    }
                } else
                  m(
                    'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                    t
                  )
              }
          }
          function k0(e, t, a, i, u) {
            var s = e.memoizedState
            s === null
              ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: i,
                  tail: a,
                  tailMode: u,
                })
              : ((s.isBackwards = t),
                (s.rendering = null),
                (s.renderingStartTime = 0),
                (s.last = i),
                (s.tail = a),
                (s.tailMode = u))
          }
          function kx(e, t, a) {
            var i = t.pendingProps,
              u = i.revealOrder,
              s = i.tail,
              f = i.children
            zT(u), UT(s, u), OT(f, u), Ir(e, t, f, a)
            var p = Ci.current,
              v = jg(p, np)
            if (v) (p = Hg(p, np)), (t.flags |= Ye)
            else {
              var g = e !== null && (e.flags & Ye) !== Me
              g && MT(t, t.child, a), (p = Zc(p))
            }
            if ((Ku(t, p), (t.mode & it) === Oe)) t.memoizedState = null
            else
              switch (u) {
                case 'forwards': {
                  var S = NT(t.child),
                    k
                  S === null
                    ? ((k = t.child), (t.child = null))
                    : ((k = S.sibling), (S.sibling = null)),
                    k0(
                      t,
                      !1,
                      // isBackwards
                      k,
                      S,
                      s
                    )
                  break
                }
                case 'backwards': {
                  var T = null,
                    O = t.child
                  for (t.child = null; O !== null; ) {
                    var j = O.alternate
                    if (j !== null && Gh(j) === null) {
                      t.child = O
                      break
                    }
                    var P = O.sibling
                    ;(O.sibling = T), (T = O), (O = P)
                  }
                  k0(
                    t,
                    !0,
                    // isBackwards
                    T,
                    null,
                    // last
                    s
                  )
                  break
                }
                case 'together': {
                  k0(
                    t,
                    !1,
                    // isBackwards
                    null,
                    // tail
                    null,
                    // last
                    void 0
                  )
                  break
                }
                default:
                  t.memoizedState = null
              }
            return t.child
          }
          function AT(e, t, a) {
            Ug(t, t.stateNode.containerInfo)
            var i = t.pendingProps
            return (
              e === null ? (t.child = qc(t, null, i, a)) : Ir(e, t, i, a),
              t.child
            )
          }
          var Dx = !1
          function jT(e, t, a) {
            var i = t.type,
              u = i._context,
              s = t.pendingProps,
              f = t.memoizedProps,
              p = s.value
            {
              'value' in s ||
                Dx ||
                ((Dx = !0),
                m(
                  'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
                ))
              var v = t.type.propTypes
              v && yi(v, s, 'prop', 'Context.Provider')
            }
            if ((h1(t, u, p), f !== null)) {
              var g = f.value
              if (xe(g, p)) {
                if (f.children === s.children && !Rh()) return Zl(e, t, a)
              } else MR(t, u, a)
            }
            var S = s.children
            return Ir(e, t, S, a), t.child
          }
          var _x = !1
          function HT(e, t, a) {
            var i = t.type
            i._context === void 0
              ? i !== i.Consumer &&
                (_x ||
                  ((_x = !0),
                  m(
                    'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                  )))
              : (i = i._context)
            var u = t.pendingProps,
              s = u.children
            typeof s != 'function' &&
              m(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              ),
              Xc(t, a)
            var f = An(i)
            Qi(t)
            var p
            return (
              (cp.current = t),
              ka(!0),
              (p = s(f)),
              ka(!1),
              bl(),
              (t.flags |= Fi),
              Ir(e, t, p, a),
              t.child
            )
          }
          function dp() {
            wi = !0
          }
          function mm(e, t) {
            ;(t.mode & it) === Oe &&
              e !== null &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= Ft))
          }
          function Zl(e, t, a) {
            return (
              e !== null && (t.dependencies = e.dependencies),
              cx(),
              Rp(t.lanes),
              kr(a, t.childLanes) ? (YR(e, t), t.child) : null
            )
          }
          function FT(e, t, a) {
            {
              var i = t.return
              if (i === null) throw new Error('Cannot swap the root fiber.')
              if (
                ((e.alternate = null),
                (t.alternate = null),
                (a.index = t.index),
                (a.sibling = t.sibling),
                (a.return = t.return),
                (a.ref = t.ref),
                t === i.child)
              )
                i.child = a
              else {
                var u = i.child
                if (u === null)
                  throw new Error('Expected parent to have a child.')
                for (; u.sibling !== t; )
                  if (((u = u.sibling), u === null))
                    throw new Error('Expected to find the previous sibling.')
                u.sibling = a
              }
              var s = i.deletions
              return (
                s === null ? ((i.deletions = [e]), (i.flags |= xt)) : s.push(e),
                (a.flags |= Ft),
                a
              )
            }
          }
          function D0(e, t) {
            var a = e.lanes
            return !!kr(a, t)
          }
          function VT(e, t, a) {
            switch (t.tag) {
              case B:
                Cx(t), t.stateNode, Wc()
                break
              case K:
                U1(t)
                break
              case $: {
                var i = t.type
                rl(i) && bh(t)
                break
              }
              case W:
                Ug(t, t.stateNode.containerInfo)
                break
              case ge: {
                var u = t.memoizedProps.value,
                  s = t.type._context
                h1(t, s, u)
                break
              }
              case He:
                {
                  var f = kr(a, t.childLanes)
                  f && (t.flags |= qe)
                  {
                    var p = t.stateNode
                    ;(p.effectDuration = 0), (p.passiveEffectDuration = 0)
                  }
                }
                break
              case de: {
                var v = t.memoizedState
                if (v !== null) {
                  if (v.dehydrated !== null)
                    return Ku(t, Zc(Ci.current)), (t.flags |= Ye), null
                  var g = t.child,
                    S = g.childLanes
                  if (kr(a, S)) return wx(e, t, a)
                  Ku(t, Zc(Ci.current))
                  var k = Zl(e, t, a)
                  return k !== null ? k.sibling : null
                } else Ku(t, Zc(Ci.current))
                break
              }
              case Pe: {
                var T = (e.flags & Ye) !== Me,
                  O = kr(a, t.childLanes)
                if (T) {
                  if (O) return kx(e, t, a)
                  t.flags |= Ye
                }
                var j = t.memoizedState
                if (
                  (j !== null &&
                    ((j.rendering = null),
                    (j.tail = null),
                    (j.lastEffect = null)),
                  Ku(t, Ci.current),
                  O)
                )
                  break
                return null
              }
              case Ne:
              case Ge:
                return (t.lanes = I), gx(e, t, a)
            }
            return Zl(e, t, a)
          }
          function Lx(e, t, a) {
            if (t._debugNeedsRemount && e !== null)
              return FT(
                e,
                t,
                aS(
                  t.type,
                  t.key,
                  t.pendingProps,
                  t._debugOwner || null,
                  t.mode,
                  t.lanes
                )
              )
            if (e !== null) {
              var i = e.memoizedProps,
                u = t.pendingProps
              if (
                i !== u ||
                Rh() || // Force a re-render if the implementation changed due to hot reload:
                t.type !== e.type
              )
                wi = !0
              else {
                var s = D0(e, a)
                if (
                  !s && // If this is the second pass of an error or suspense boundary, there
                  // may not be work scheduled on `current`, so we check for this flag.
                  (t.flags & Ye) === Me
                )
                  return (wi = !1), VT(e, t, a)
                ;(e.flags & Mo) !== Me ? (wi = !0) : (wi = !1)
              }
            } else if (((wi = !1), sr() && dR(t))) {
              var f = t.index,
                p = pR()
              r1(t, p, f)
            }
            switch (((t.lanes = I), t.tag)) {
              case te:
                return CT(e, t, t.type, a)
              case nt: {
                var v = t.elementType
                return ST(e, t, v, a)
              }
              case H: {
                var g = t.type,
                  S = t.pendingProps,
                  k = t.elementType === g ? S : xi(g, S)
                return x0(e, t, g, k, a)
              }
              case $: {
                var T = t.type,
                  O = t.pendingProps,
                  j = t.elementType === T ? O : xi(T, O)
                return xx(e, t, T, j, a)
              }
              case B:
                return mT(e, t, a)
              case K:
                return yT(e, t, a)
              case re:
                return gT(e, t)
              case de:
                return wx(e, t, a)
              case W:
                return AT(e, t, a)
              case ce: {
                var P = t.type,
                  he = t.pendingProps,
                  ze = t.elementType === P ? he : xi(P, he)
                return hx(e, t, P, ze, a)
              }
              case Re:
                return pT(e, t, a)
              case se:
                return vT(e, t, a)
              case He:
                return hT(e, t, a)
              case ge:
                return jT(e, t, a)
              case _e:
                return HT(e, t, a)
              case Ee: {
                var ke = t.type,
                  vt = t.pendingProps,
                  st = xi(ke, vt)
                if (t.type !== t.elementType) {
                  var M = ke.propTypes
                  M &&
                    yi(
                      M,
                      st,
                      // Resolved for outer only
                      'prop',
                      Mt(ke)
                    )
                }
                return (st = xi(ke.type, st)), mx(e, t, ke, st, a)
              }
              case Ve:
                return yx(e, t, t.type, t.pendingProps, a)
              case ct: {
                var Y = t.type,
                  N = t.pendingProps,
                  J = t.elementType === Y ? N : xi(Y, N)
                return xT(e, t, Y, J, a)
              }
              case Pe:
                return kx(e, t, a)
              case At:
                break
              case Ne:
                return gx(e, t, a)
            }
            throw new Error(
              'Unknown unit of work tag (' +
                t.tag +
                '). This error is likely caused by a bug in React. Please file an issue.'
            )
          }
          function af(e) {
            e.flags |= qe
          }
          function Mx(e) {
            ;(e.flags |= xr), (e.flags |= Wf)
          }
          var Nx, _0, zx, Ux
          ;(Nx = function (e, t, a, i) {
            for (var u = t.child; u !== null; ) {
              if (u.tag === K || u.tag === re) sw(e, u.stateNode)
              else if (u.tag !== W) {
                if (u.child !== null) {
                  ;(u.child.return = u), (u = u.child)
                  continue
                }
              }
              if (u === t) return
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) return
                u = u.return
              }
              ;(u.sibling.return = u.return), (u = u.sibling)
            }
          }),
            (_0 = function (e, t) {}),
            (zx = function (e, t, a, i, u) {
              var s = e.memoizedProps
              if (s !== i) {
                var f = t.stateNode,
                  p = Og(),
                  v = fw(f, a, s, i, u, p)
                ;(t.updateQueue = v), v && af(t)
              }
            }),
            (Ux = function (e, t, a, i) {
              a !== i && af(t)
            })
          function pp(e, t) {
            if (!sr())
              switch (e.tailMode) {
                case 'hidden': {
                  for (var a = e.tail, i = null; a !== null; )
                    a.alternate !== null && (i = a), (a = a.sibling)
                  i === null ? (e.tail = null) : (i.sibling = null)
                  break
                }
                case 'collapsed': {
                  for (var u = e.tail, s = null; u !== null; )
                    u.alternate !== null && (s = u), (u = u.sibling)
                  s === null
                    ? !t && e.tail !== null
                      ? (e.tail.sibling = null)
                      : (e.tail = null)
                    : (s.sibling = null)
                  break
                }
              }
          }
          function fr(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
              a = I,
              i = Me
            if (t) {
              if ((e.mode & je) !== Oe) {
                for (var v = e.selfBaseDuration, g = e.child; g !== null; )
                  (a = Ke(a, Ke(g.lanes, g.childLanes))),
                    (i |= g.subtreeFlags & Hn),
                    (i |= g.flags & Hn),
                    (v += g.treeBaseDuration),
                    (g = g.sibling)
                e.treeBaseDuration = v
              } else
                for (var S = e.child; S !== null; )
                  (a = Ke(a, Ke(S.lanes, S.childLanes))),
                    (i |= S.subtreeFlags & Hn),
                    (i |= S.flags & Hn),
                    (S.return = e),
                    (S = S.sibling)
              e.subtreeFlags |= i
            } else {
              if ((e.mode & je) !== Oe) {
                for (
                  var u = e.actualDuration, s = e.selfBaseDuration, f = e.child;
                  f !== null;

                )
                  (a = Ke(a, Ke(f.lanes, f.childLanes))),
                    (i |= f.subtreeFlags),
                    (i |= f.flags),
                    (u += f.actualDuration),
                    (s += f.treeBaseDuration),
                    (f = f.sibling)
                ;(e.actualDuration = u), (e.treeBaseDuration = s)
              } else
                for (var p = e.child; p !== null; )
                  (a = Ke(a, Ke(p.lanes, p.childLanes))),
                    (i |= p.subtreeFlags),
                    (i |= p.flags),
                    (p.return = e),
                    (p = p.sibling)
              e.subtreeFlags |= i
            }
            return (e.childLanes = a), t
          }
          function BT(e, t, a) {
            if (bR() && (t.mode & it) !== Oe && (t.flags & Ye) === Me)
              return c1(t), Wc(), (t.flags |= tn | Fr | Mn), !1
            var i = Mh(t)
            if (a !== null && a.dehydrated !== null)
              if (e === null) {
                if (!i)
                  throw new Error(
                    'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'
                  )
                if ((RR(t), fr(t), (t.mode & je) !== Oe)) {
                  var u = a !== null
                  if (u) {
                    var s = t.child
                    s !== null && (t.treeBaseDuration -= s.treeBaseDuration)
                  }
                }
                return !1
              } else {
                if (
                  (Wc(),
                  (t.flags & Ye) === Me && (t.memoizedState = null),
                  (t.flags |= qe),
                  fr(t),
                  (t.mode & je) !== Oe)
                ) {
                  var f = a !== null
                  if (f) {
                    var p = t.child
                    p !== null && (t.treeBaseDuration -= p.treeBaseDuration)
                  }
                }
                return !1
              }
            else return f1(), !0
          }
          function Ox(e, t, a) {
            var i = t.pendingProps
            switch ((tg(t), t.tag)) {
              case te:
              case nt:
              case Ve:
              case H:
              case ce:
              case Re:
              case se:
              case He:
              case _e:
              case Ee:
                return fr(t), null
              case $: {
                var u = t.type
                return rl(u) && Th(t), fr(t), null
              }
              case B: {
                var s = t.stateNode
                if (
                  (Kc(t),
                  Ky(t),
                  Vg(),
                  s.pendingContext &&
                    ((s.context = s.pendingContext), (s.pendingContext = null)),
                  e === null || e.child === null)
                ) {
                  var f = Mh(t)
                  if (f) af(t)
                  else if (e !== null) {
                    var p = e.memoizedState
                    // Check if this is a client root
                    ;(!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
                      (t.flags & tn) !== Me) &&
                      ((t.flags |= ra), f1())
                  }
                }
                return _0(e, t), fr(t), null
              }
              case K: {
                Ag(t)
                var v = z1(),
                  g = t.type
                if (e !== null && t.stateNode != null)
                  zx(e, t, g, i, v), e.ref !== t.ref && Mx(t)
                else {
                  if (!i) {
                    if (t.stateNode === null)
                      throw new Error(
                        'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
                      )
                    return fr(t), null
                  }
                  var S = Og(),
                    k = Mh(t)
                  if (k) ER(t, v, S) && af(t)
                  else {
                    var T = ow(g, i, v, S, t)
                    Nx(T, t, !1, !1), (t.stateNode = T), cw(T, g, i, v) && af(t)
                  }
                  t.ref !== null && Mx(t)
                }
                return fr(t), null
              }
              case re: {
                var O = i
                if (e && t.stateNode != null) {
                  var j = e.memoizedProps
                  Ux(e, t, j, O)
                } else {
                  if (typeof O != 'string' && t.stateNode === null)
                    throw new Error(
                      'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
                    )
                  var P = z1(),
                    he = Og(),
                    ze = Mh(t)
                  ze ? wR(t) && af(t) : (t.stateNode = dw(O, P, he, t))
                }
                return fr(t), null
              }
              case de: {
                Jc(t)
                var ke = t.memoizedState
                if (
                  e === null ||
                  (e.memoizedState !== null &&
                    e.memoizedState.dehydrated !== null)
                ) {
                  var vt = BT(e, t, ke)
                  if (!vt) return t.flags & Mn ? t : null
                }
                if ((t.flags & Ye) !== Me)
                  return (t.lanes = a), (t.mode & je) !== Oe && f0(t), t
                var st = ke !== null,
                  M = e !== null && e.memoizedState !== null
                if (st !== M && st) {
                  var Y = t.child
                  if (((Y.flags |= Vi), (t.mode & it) !== Oe)) {
                    var N =
                      e === null &&
                      (t.memoizedProps.unstable_avoidThisFallback !== !0 || !et)
                    N || jg(Ci.current, A1) ? Pb() : W0()
                  }
                }
                var J = t.updateQueue
                if (
                  (J !== null && (t.flags |= qe),
                  fr(t),
                  (t.mode & je) !== Oe && st)
                ) {
                  var me = t.child
                  me !== null && (t.treeBaseDuration -= me.treeBaseDuration)
                }
                return null
              }
              case W:
                return (
                  Kc(t),
                  _0(e, t),
                  e === null && iR(t.stateNode.containerInfo),
                  fr(t),
                  null
                )
              case ge:
                var fe = t.type._context
                return cg(fe, t), fr(t), null
              case ct: {
                var Be = t.type
                return rl(Be) && Th(t), fr(t), null
              }
              case Pe: {
                Jc(t)
                var We = t.memoizedState
                if (We === null) return fr(t), null
                var _t = (t.flags & Ye) !== Me,
                  gt = We.rendering
                if (gt === null)
                  if (_t) pp(We, !1)
                  else {
                    var Rn = $b() && (e === null || (e.flags & Ye) === Me)
                    if (!Rn)
                      for (var St = t.child; St !== null; ) {
                        var hn = Gh(St)
                        if (hn !== null) {
                          ;(_t = !0), (t.flags |= Ye), pp(We, !1)
                          var Mr = hn.updateQueue
                          return (
                            Mr !== null &&
                              ((t.updateQueue = Mr), (t.flags |= qe)),
                            (t.subtreeFlags = Me),
                            $R(t, a),
                            Ku(t, Hg(Ci.current, np)),
                            t.child
                          )
                        }
                        St = St.sibling
                      }
                    We.tail !== null &&
                      qt() > nC() &&
                      ((t.flags |= Ye), (_t = !0), pp(We, !1), (t.lanes = ld))
                  }
                else {
                  if (!_t) {
                    var mr = Gh(gt)
                    if (mr !== null) {
                      ;(t.flags |= Ye), (_t = !0)
                      var Oa = mr.updateQueue
                      if (
                        (Oa !== null && ((t.updateQueue = Oa), (t.flags |= qe)),
                        pp(We, !0),
                        We.tail === null &&
                          We.tailMode === 'hidden' &&
                          !gt.alternate &&
                          !sr())
                      )
                        return fr(t), null
                    }
                    // The time it took to render last row is greater than the remaining
                    // time we have to render. So rendering one more row would likely
                    // exceed it.
                    else
                      qt() * 2 - We.renderingStartTime > nC() &&
                        a !== br &&
                        ((t.flags |= Ye), (_t = !0), pp(We, !1), (t.lanes = ld))
                  }
                  if (We.isBackwards) (gt.sibling = t.child), (t.child = gt)
                  else {
                    var Gr = We.last
                    Gr !== null ? (Gr.sibling = gt) : (t.child = gt),
                      (We.last = gt)
                  }
                }
                if (We.tail !== null) {
                  var Xr = We.tail
                  ;(We.rendering = Xr),
                    (We.tail = Xr.sibling),
                    (We.renderingStartTime = qt()),
                    (Xr.sibling = null)
                  var Nr = Ci.current
                  return _t ? (Nr = Hg(Nr, np)) : (Nr = Zc(Nr)), Ku(t, Nr), Xr
                }
                return fr(t), null
              }
              case At:
                break
              case Ne:
              case Ge: {
                Q0(t)
                var ru = t.memoizedState,
                  pf = ru !== null
                if (e !== null) {
                  var _p = e.memoizedState,
                    fl = _p !== null
                  fl !== pf && // LegacyHidden doesn't do any hiding — it only pre-renders.
                    !le &&
                    (t.flags |= Vi)
                }
                return (
                  !pf || (t.mode & it) === Oe
                    ? fr(t)
                    : kr(cl, br) &&
                      (fr(t), t.subtreeFlags & (Ft | qe) && (t.flags |= Vi)),
                  null
                )
              }
              case Je:
                return null
              case rt:
                return null
            }
            throw new Error(
              'Unknown unit of work tag (' +
                t.tag +
                '). This error is likely caused by a bug in React. Please file an issue.'
            )
          }
          function PT(e, t, a) {
            switch ((tg(t), t.tag)) {
              case $: {
                var i = t.type
                rl(i) && Th(t)
                var u = t.flags
                return u & Mn
                  ? ((t.flags = (u & ~Mn) | Ye),
                    (t.mode & je) !== Oe && f0(t),
                    t)
                  : null
              }
              case B: {
                t.stateNode, Kc(t), Ky(t), Vg()
                var s = t.flags
                return (s & Mn) !== Me && (s & Ye) === Me
                  ? ((t.flags = (s & ~Mn) | Ye), t)
                  : null
              }
              case K:
                return Ag(t), null
              case de: {
                Jc(t)
                var f = t.memoizedState
                if (f !== null && f.dehydrated !== null) {
                  if (t.alternate === null)
                    throw new Error(
                      'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.'
                    )
                  Wc()
                }
                var p = t.flags
                return p & Mn
                  ? ((t.flags = (p & ~Mn) | Ye),
                    (t.mode & je) !== Oe && f0(t),
                    t)
                  : null
              }
              case Pe:
                return Jc(t), null
              case W:
                return Kc(t), null
              case ge:
                var v = t.type._context
                return cg(v, t), null
              case Ne:
              case Ge:
                return Q0(t), null
              case Je:
                return null
              default:
                return null
            }
          }
          function Ax(e, t, a) {
            switch ((tg(t), t.tag)) {
              case $: {
                var i = t.type.childContextTypes
                i != null && Th(t)
                break
              }
              case B: {
                t.stateNode, Kc(t), Ky(t), Vg()
                break
              }
              case K: {
                Ag(t)
                break
              }
              case W:
                Kc(t)
                break
              case de:
                Jc(t)
                break
              case Pe:
                Jc(t)
                break
              case ge:
                var u = t.type._context
                cg(u, t)
                break
              case Ne:
              case Ge:
                Q0(t)
                break
            }
          }
          var jx = null
          jx = /* @__PURE__ */ new Set()
          var ym = !1,
            dr = !1,
            YT = typeof WeakSet == 'function' ? WeakSet : Set,
            Ce = null,
            lf = null,
            uf = null
          function $T(e) {
            Rl(null, function () {
              throw e
            }),
              If()
          }
          var IT = function (e, t) {
            if (
              ((t.props = e.memoizedProps),
              (t.state = e.memoizedState),
              e.mode & je)
            )
              try {
                ol(), t.componentWillUnmount()
              } finally {
                ul(e)
              }
            else t.componentWillUnmount()
          }
          function Hx(e, t) {
            try {
              eo(Pn, e)
            } catch (a) {
              Yt(e, t, a)
            }
          }
          function L0(e, t, a) {
            try {
              IT(e, a)
            } catch (i) {
              Yt(e, t, i)
            }
          }
          function QT(e, t, a) {
            try {
              a.componentDidMount()
            } catch (i) {
              Yt(e, t, i)
            }
          }
          function Fx(e, t) {
            try {
              Bx(e)
            } catch (a) {
              Yt(e, t, a)
            }
          }
          function of(e, t) {
            var a = e.ref
            if (a !== null)
              if (typeof a == 'function') {
                var i
                try {
                  if (en && ir && e.mode & je)
                    try {
                      ol(), (i = a(null))
                    } finally {
                      ul(e)
                    }
                  else i = a(null)
                } catch (u) {
                  Yt(e, t, u)
                }
                typeof i == 'function' &&
                  m(
                    'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
                    Xe(e)
                  )
              } else a.current = null
          }
          function gm(e, t, a) {
            try {
              a()
            } catch (i) {
              Yt(e, t, i)
            }
          }
          var Vx = !1
          function WT(e, t) {
            lw(e.containerInfo), (Ce = t), GT()
            var a = Vx
            return (Vx = !1), a
          }
          function GT() {
            for (; Ce !== null; ) {
              var e = Ce,
                t = e.child
              ;(e.subtreeFlags & xu) !== Me && t !== null
                ? ((t.return = e), (Ce = t))
                : XT()
            }
          }
          function XT() {
            for (; Ce !== null; ) {
              var e = Ce
              kt(e)
              try {
                qT(e)
              } catch (a) {
                Yt(e, e.return, a)
              }
              gn()
              var t = e.sibling
              if (t !== null) {
                ;(t.return = e.return), (Ce = t)
                return
              }
              Ce = e.return
            }
          }
          function qT(e) {
            var t = e.alternate,
              a = e.flags
            if ((a & ra) !== Me) {
              switch ((kt(e), e.tag)) {
                case H:
                case ce:
                case Ve:
                  break
                case $: {
                  if (t !== null) {
                    var i = t.memoizedProps,
                      u = t.memoizedState,
                      s = e.stateNode
                    e.type === e.elementType &&
                      !cs &&
                      (s.props !== e.memoizedProps &&
                        m(
                          'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                          Xe(e) || 'instance'
                        ),
                      s.state !== e.memoizedState &&
                        m(
                          'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                          Xe(e) || 'instance'
                        ))
                    var f = s.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? i : xi(e.type, i),
                      u
                    )
                    {
                      var p = jx
                      f === void 0 &&
                        !p.has(e.type) &&
                        (p.add(e.type),
                        m(
                          '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                          Xe(e)
                        ))
                    }
                    s.__reactInternalSnapshotBeforeUpdate = f
                  }
                  break
                }
                case B: {
                  {
                    var v = e.stateNode
                    Mw(v.containerInfo)
                  }
                  break
                }
                case K:
                case re:
                case W:
                case ct:
                  break
                default:
                  throw new Error(
                    'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
                  )
              }
              gn()
            }
          }
          function Ri(e, t, a) {
            var i = t.updateQueue,
              u = i !== null ? i.lastEffect : null
            if (u !== null) {
              var s = u.next,
                f = s
              do {
                if ((f.tag & e) === e) {
                  var p = f.destroy
                  ;(f.destroy = void 0),
                    p !== void 0 &&
                      ((e & cr) !== ha ? qs(t) : (e & Pn) !== ha && Ks(t),
                      (e & al) !== ha && bp(!0),
                      gm(t, a, p),
                      (e & al) !== ha && bp(!1),
                      (e & cr) !== ha ? Lv() : (e & Pn) !== ha && Cu())
                }
                f = f.next
              } while (f !== s)
            }
          }
          function eo(e, t) {
            var a = t.updateQueue,
              i = a !== null ? a.lastEffect : null
            if (i !== null) {
              var u = i.next,
                s = u
              do {
                if ((s.tag & e) === e) {
                  ;(e & cr) !== ha ? _v(t) : (e & Pn) !== ha && Mv(t)
                  var f = s.create
                  ;(e & al) !== ha && bp(!0),
                    (s.destroy = f()),
                    (e & al) !== ha && bp(!1),
                    (e & cr) !== ha ? rd() : (e & Pn) !== ha && Nv()
                  {
                    var p = s.destroy
                    if (p !== void 0 && typeof p != 'function') {
                      var v = void 0
                      ;(s.tag & Pn) !== Me
                        ? (v = 'useLayoutEffect')
                        : (s.tag & al) !== Me
                        ? (v = 'useInsertionEffect')
                        : (v = 'useEffect')
                      var g = void 0
                      p === null
                        ? (g =
                            ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                        : typeof p.then == 'function'
                        ? (g =
                            `

It looks like you wrote ` +
                            v +
                            `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                            v +
                            `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                        : (g = ' You returned: ' + p),
                        m(
                          '%s must not return anything besides a function, which is used for clean-up.%s',
                          v,
                          g
                        )
                    }
                  }
                }
                s = s.next
              } while (s !== u)
            }
          }
          function KT(e, t) {
            if ((t.flags & qe) !== Me)
              switch (t.tag) {
                case He: {
                  var a = t.stateNode.passiveEffectDuration,
                    i = t.memoizedProps,
                    u = i.id,
                    s = i.onPostCommit,
                    f = ox(),
                    p = t.alternate === null ? 'mount' : 'update'
                  ux() && (p = 'nested-update'),
                    typeof s == 'function' && s(u, p, a, f)
                  var v = t.return
                  e: for (; v !== null; ) {
                    switch (v.tag) {
                      case B:
                        var g = v.stateNode
                        g.passiveEffectDuration += a
                        break e
                      case He:
                        var S = v.stateNode
                        S.passiveEffectDuration += a
                        break e
                    }
                    v = v.return
                  }
                  break
                }
              }
          }
          function ZT(e, t, a, i) {
            if ((a.flags & Zn) !== Me)
              switch (a.tag) {
                case H:
                case ce:
                case Ve: {
                  if (!dr)
                    if (a.mode & je)
                      try {
                        ol(), eo(Pn | Bn, a)
                      } finally {
                        ul(a)
                      }
                    else eo(Pn | Bn, a)
                  break
                }
                case $: {
                  var u = a.stateNode
                  if (a.flags & qe && !dr)
                    if (t === null)
                      if (
                        (a.type === a.elementType &&
                          !cs &&
                          (u.props !== a.memoizedProps &&
                            m(
                              'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                              Xe(a) || 'instance'
                            ),
                          u.state !== a.memoizedState &&
                            m(
                              'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                              Xe(a) || 'instance'
                            )),
                        a.mode & je)
                      )
                        try {
                          ol(), u.componentDidMount()
                        } finally {
                          ul(a)
                        }
                      else u.componentDidMount()
                    else {
                      var s =
                          a.elementType === a.type
                            ? t.memoizedProps
                            : xi(a.type, t.memoizedProps),
                        f = t.memoizedState
                      if (
                        (a.type === a.elementType &&
                          !cs &&
                          (u.props !== a.memoizedProps &&
                            m(
                              'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                              Xe(a) || 'instance'
                            ),
                          u.state !== a.memoizedState &&
                            m(
                              'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                              Xe(a) || 'instance'
                            )),
                        a.mode & je)
                      )
                        try {
                          ol(),
                            u.componentDidUpdate(
                              s,
                              f,
                              u.__reactInternalSnapshotBeforeUpdate
                            )
                        } finally {
                          ul(a)
                        }
                      else
                        u.componentDidUpdate(
                          s,
                          f,
                          u.__reactInternalSnapshotBeforeUpdate
                        )
                    }
                  var p = a.updateQueue
                  p !== null &&
                    (a.type === a.elementType &&
                      !cs &&
                      (u.props !== a.memoizedProps &&
                        m(
                          'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                          Xe(a) || 'instance'
                        ),
                      u.state !== a.memoizedState &&
                        m(
                          'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                          Xe(a) || 'instance'
                        )),
                    C1(a, p, u))
                  break
                }
                case B: {
                  var v = a.updateQueue
                  if (v !== null) {
                    var g = null
                    if (a.child !== null)
                      switch (a.child.tag) {
                        case K:
                          g = a.child.stateNode
                          break
                        case $:
                          g = a.child.stateNode
                          break
                      }
                    C1(a, v, g)
                  }
                  break
                }
                case K: {
                  var S = a.stateNode
                  if (t === null && a.flags & qe) {
                    var k = a.type,
                      T = a.memoizedProps
                    yw(S, k, T)
                  }
                  break
                }
                case re:
                  break
                case W:
                  break
                case He: {
                  {
                    var O = a.memoizedProps,
                      j = O.onCommit,
                      P = O.onRender,
                      he = a.stateNode.effectDuration,
                      ze = ox(),
                      ke = t === null ? 'mount' : 'update'
                    ux() && (ke = 'nested-update'),
                      typeof P == 'function' &&
                        P(
                          a.memoizedProps.id,
                          ke,
                          a.actualDuration,
                          a.treeBaseDuration,
                          a.actualStartTime,
                          ze
                        )
                    {
                      typeof j == 'function' &&
                        j(a.memoizedProps.id, ke, he, ze),
                        Xb(a)
                      var vt = a.return
                      e: for (; vt !== null; ) {
                        switch (vt.tag) {
                          case B:
                            var st = vt.stateNode
                            st.effectDuration += he
                            break e
                          case He:
                            var M = vt.stateNode
                            M.effectDuration += he
                            break e
                        }
                        vt = vt.return
                      }
                    }
                  }
                  break
                }
                case de: {
                  lb(e, a)
                  break
                }
                case Pe:
                case ct:
                case At:
                case Ne:
                case Ge:
                case rt:
                  break
                default:
                  throw new Error(
                    'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
                  )
              }
            dr || (a.flags & xr && Bx(a))
          }
          function JT(e) {
            switch (e.tag) {
              case H:
              case ce:
              case Ve: {
                if (e.mode & je)
                  try {
                    ol(), Hx(e, e.return)
                  } finally {
                    ul(e)
                  }
                else Hx(e, e.return)
                break
              }
              case $: {
                var t = e.stateNode
                typeof t.componentDidMount == 'function' && QT(e, e.return, t),
                  Fx(e, e.return)
                break
              }
              case K: {
                Fx(e, e.return)
                break
              }
            }
          }
          function eb(e, t) {
            for (var a = null, i = e; ; ) {
              if (i.tag === K) {
                if (a === null) {
                  a = i
                  try {
                    var u = i.stateNode
                    t ? kw(u) : _w(i.stateNode, i.memoizedProps)
                  } catch (f) {
                    Yt(e, e.return, f)
                  }
                }
              } else if (i.tag === re) {
                if (a === null)
                  try {
                    var s = i.stateNode
                    t ? Dw(s) : Lw(s, i.memoizedProps)
                  } catch (f) {
                    Yt(e, e.return, f)
                  }
              } else if (
                !(
                  (i.tag === Ne || i.tag === Ge) &&
                  i.memoizedState !== null &&
                  i !== e
                )
              ) {
                if (i.child !== null) {
                  ;(i.child.return = i), (i = i.child)
                  continue
                }
              }
              if (i === e) return
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) return
                a === i && (a = null), (i = i.return)
              }
              a === i && (a = null),
                (i.sibling.return = i.return),
                (i = i.sibling)
            }
          }
          function Bx(e) {
            var t = e.ref
            if (t !== null) {
              var a = e.stateNode,
                i
              switch (e.tag) {
                case K:
                  i = a
                  break
                default:
                  i = a
              }
              if (typeof t == 'function') {
                var u
                if (e.mode & je)
                  try {
                    ol(), (u = t(i))
                  } finally {
                    ul(e)
                  }
                else u = t(i)
                typeof u == 'function' &&
                  m(
                    'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
                    Xe(e)
                  )
              } else
                t.hasOwnProperty('current') ||
                  m(
                    'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
                    Xe(e)
                  ),
                  (t.current = i)
            }
          }
          function tb(e) {
            var t = e.alternate
            t !== null && (t.return = null), (e.return = null)
          }
          function Px(e) {
            var t = e.alternate
            t !== null && ((e.alternate = null), Px(t))
            {
              if (
                ((e.child = null),
                (e.deletions = null),
                (e.sibling = null),
                e.tag === K)
              ) {
                var a = e.stateNode
                a !== null && oR(a)
              }
              ;(e.stateNode = null),
                (e._debugOwner = null),
                (e.return = null),
                (e.dependencies = null),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.pendingProps = null),
                (e.stateNode = null),
                (e.updateQueue = null)
            }
          }
          function nb(e) {
            for (var t = e.return; t !== null; ) {
              if (Yx(t)) return t
              t = t.return
            }
            throw new Error(
              'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
            )
          }
          function Yx(e) {
            return e.tag === K || e.tag === B || e.tag === W
          }
          function $x(e) {
            var t = e
            e: for (;;) {
              for (; t.sibling === null; ) {
                if (t.return === null || Yx(t.return)) return null
                t = t.return
              }
              for (
                t.sibling.return = t.return, t = t.sibling;
                t.tag !== K && t.tag !== re && t.tag !== ft;

              ) {
                if (t.flags & Ft || t.child === null || t.tag === W) continue e
                ;(t.child.return = t), (t = t.child)
              }
              if (!(t.flags & Ft)) return t.stateNode
            }
          }
          function rb(e) {
            var t = nb(e)
            switch (t.tag) {
              case K: {
                var a = t.stateNode
                t.flags & Et && (IS(a), (t.flags &= ~Et))
                var i = $x(e)
                N0(e, i, a)
                break
              }
              case B:
              case W: {
                var u = t.stateNode.containerInfo,
                  s = $x(e)
                M0(e, s, u)
                break
              }
              default:
                throw new Error(
                  'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
                )
            }
          }
          function M0(e, t, a) {
            var i = e.tag,
              u = i === K || i === re
            if (u) {
              var s = e.stateNode
              t ? ww(a, s, t) : Cw(a, s)
            } else if (i !== W) {
              var f = e.child
              if (f !== null) {
                M0(f, t, a)
                for (var p = f.sibling; p !== null; )
                  M0(p, t, a), (p = p.sibling)
              }
            }
          }
          function N0(e, t, a) {
            var i = e.tag,
              u = i === K || i === re
            if (u) {
              var s = e.stateNode
              t ? Ew(a, s, t) : xw(a, s)
            } else if (i !== W) {
              var f = e.child
              if (f !== null) {
                N0(f, t, a)
                for (var p = f.sibling; p !== null; )
                  N0(p, t, a), (p = p.sibling)
              }
            }
          }
          var pr = null,
            Ti = !1
          function ab(e, t, a) {
            {
              var i = t
              e: for (; i !== null; ) {
                switch (i.tag) {
                  case K: {
                    ;(pr = i.stateNode), (Ti = !1)
                    break e
                  }
                  case B: {
                    ;(pr = i.stateNode.containerInfo), (Ti = !0)
                    break e
                  }
                  case W: {
                    ;(pr = i.stateNode.containerInfo), (Ti = !0)
                    break e
                  }
                }
                i = i.return
              }
              if (pr === null)
                throw new Error(
                  'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
                )
              Ix(e, t, a), (pr = null), (Ti = !1)
            }
            tb(a)
          }
          function to(e, t, a) {
            for (var i = a.child; i !== null; ) Ix(e, t, i), (i = i.sibling)
          }
          function Ix(e, t, a) {
            switch ((td(a), a.tag)) {
              case K:
                dr || of(a, t)
              case re: {
                {
                  var i = pr,
                    u = Ti
                  ;(pr = null),
                    to(e, t, a),
                    (pr = i),
                    (Ti = u),
                    pr !== null &&
                      (Ti ? Tw(pr, a.stateNode) : Rw(pr, a.stateNode))
                }
                return
              }
              case ft: {
                pr !== null && (Ti ? bw(pr, a.stateNode) : Yy(pr, a.stateNode))
                return
              }
              case W: {
                {
                  var s = pr,
                    f = Ti
                  ;(pr = a.stateNode.containerInfo),
                    (Ti = !0),
                    to(e, t, a),
                    (pr = s),
                    (Ti = f)
                }
                return
              }
              case H:
              case ce:
              case Ee:
              case Ve: {
                if (!dr) {
                  var p = a.updateQueue
                  if (p !== null) {
                    var v = p.lastEffect
                    if (v !== null) {
                      var g = v.next,
                        S = g
                      do {
                        var k = S,
                          T = k.destroy,
                          O = k.tag
                        T !== void 0 &&
                          ((O & al) !== ha
                            ? gm(a, t, T)
                            : (O & Pn) !== ha &&
                              (Ks(a),
                              a.mode & je
                                ? (ol(), gm(a, t, T), ul(a))
                                : gm(a, t, T),
                              Cu())),
                          (S = S.next)
                      } while (S !== g)
                    }
                  }
                }
                to(e, t, a)
                return
              }
              case $: {
                if (!dr) {
                  of(a, t)
                  var j = a.stateNode
                  typeof j.componentWillUnmount == 'function' && L0(a, t, j)
                }
                to(e, t, a)
                return
              }
              case At: {
                to(e, t, a)
                return
              }
              case Ne: {
                if (
                  // TODO: Remove this dead flag
                  a.mode & it
                ) {
                  var P = dr
                  ;(dr = P || a.memoizedState !== null), to(e, t, a), (dr = P)
                } else to(e, t, a)
                break
              }
              default: {
                to(e, t, a)
                return
              }
            }
          }
          function ib(e) {
            e.memoizedState
          }
          function lb(e, t) {
            var a = t.memoizedState
            if (a === null) {
              var i = t.alternate
              if (i !== null) {
                var u = i.memoizedState
                if (u !== null) {
                  var s = u.dehydrated
                  s !== null && Iw(s)
                }
              }
            }
          }
          function Qx(e) {
            var t = e.updateQueue
            if (t !== null) {
              e.updateQueue = null
              var a = e.stateNode
              a === null && (a = e.stateNode = new YT()),
                t.forEach(function (i) {
                  var u = nk.bind(null, e, i)
                  if (!a.has(i)) {
                    if ((a.add(i), Fn))
                      if (lf !== null && uf !== null) Tp(uf, lf)
                      else
                        throw Error(
                          'Expected finished root and lanes to be set. This is a bug in React.'
                        )
                    i.then(u, u)
                  }
                })
            }
          }
          function ub(e, t, a) {
            ;(lf = a),
              (uf = e),
              kt(t),
              Wx(t, e),
              kt(t),
              (lf = null),
              (uf = null)
          }
          function bi(e, t, a) {
            var i = t.deletions
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u]
                try {
                  ab(e, t, s)
                } catch (v) {
                  Yt(s, t, v)
                }
              }
            var f = Pm()
            if (t.subtreeFlags & wr)
              for (var p = t.child; p !== null; )
                kt(p), Wx(p, e), (p = p.sibling)
            kt(f)
          }
          function Wx(e, t, a) {
            var i = e.alternate,
              u = e.flags
            switch (e.tag) {
              case H:
              case ce:
              case Ee:
              case Ve: {
                if ((bi(t, e), sl(e), u & qe)) {
                  try {
                    Ri(al | Bn, e, e.return), eo(al | Bn, e)
                  } catch (Be) {
                    Yt(e, e.return, Be)
                  }
                  if (e.mode & je) {
                    try {
                      ol(), Ri(Pn | Bn, e, e.return)
                    } catch (Be) {
                      Yt(e, e.return, Be)
                    }
                    ul(e)
                  } else
                    try {
                      Ri(Pn | Bn, e, e.return)
                    } catch (Be) {
                      Yt(e, e.return, Be)
                    }
                }
                return
              }
              case $: {
                bi(t, e), sl(e), u & xr && i !== null && of(i, i.return)
                return
              }
              case K: {
                bi(t, e), sl(e), u & xr && i !== null && of(i, i.return)
                {
                  if (e.flags & Et) {
                    var s = e.stateNode
                    try {
                      IS(s)
                    } catch (Be) {
                      Yt(e, e.return, Be)
                    }
                  }
                  if (u & qe) {
                    var f = e.stateNode
                    if (f != null) {
                      var p = e.memoizedProps,
                        v = i !== null ? i.memoizedProps : p,
                        g = e.type,
                        S = e.updateQueue
                      if (((e.updateQueue = null), S !== null))
                        try {
                          gw(f, S, g, v, p, e)
                        } catch (Be) {
                          Yt(e, e.return, Be)
                        }
                    }
                  }
                }
                return
              }
              case re: {
                if ((bi(t, e), sl(e), u & qe)) {
                  if (e.stateNode === null)
                    throw new Error(
                      'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
                    )
                  var k = e.stateNode,
                    T = e.memoizedProps,
                    O = i !== null ? i.memoizedProps : T
                  try {
                    Sw(k, O, T)
                  } catch (Be) {
                    Yt(e, e.return, Be)
                  }
                }
                return
              }
              case B: {
                if ((bi(t, e), sl(e), u & qe && i !== null)) {
                  var j = i.memoizedState
                  if (j.isDehydrated)
                    try {
                      $w(t.containerInfo)
                    } catch (Be) {
                      Yt(e, e.return, Be)
                    }
                }
                return
              }
              case W: {
                bi(t, e), sl(e)
                return
              }
              case de: {
                bi(t, e), sl(e)
                var P = e.child
                if (P.flags & Vi) {
                  var he = P.stateNode,
                    ze = P.memoizedState,
                    ke = ze !== null
                  if (((he.isHidden = ke), ke)) {
                    var vt =
                      P.alternate !== null && P.alternate.memoizedState !== null
                    vt || Bb()
                  }
                }
                if (u & qe) {
                  try {
                    ib(e)
                  } catch (Be) {
                    Yt(e, e.return, Be)
                  }
                  Qx(e)
                }
                return
              }
              case Ne: {
                var st = i !== null && i.memoizedState !== null
                if (
                  // TODO: Remove this dead flag
                  e.mode & it
                ) {
                  var M = dr
                  ;(dr = M || st), bi(t, e), (dr = M)
                } else bi(t, e)
                if ((sl(e), u & Vi)) {
                  var Y = e.stateNode,
                    N = e.memoizedState,
                    J = N !== null,
                    me = e
                  if (((Y.isHidden = J), J && !st && (me.mode & it) !== Oe)) {
                    Ce = me
                    for (var fe = me.child; fe !== null; )
                      (Ce = fe), sb(fe), (fe = fe.sibling)
                  }
                  eb(me, J)
                }
                return
              }
              case Pe: {
                bi(t, e), sl(e), u & qe && Qx(e)
                return
              }
              case At:
                return
              default: {
                bi(t, e), sl(e)
                return
              }
            }
          }
          function sl(e) {
            var t = e.flags
            if (t & Ft) {
              try {
                rb(e)
              } catch (a) {
                Yt(e, e.return, a)
              }
              e.flags &= ~Ft
            }
            t & aa && (e.flags &= ~aa)
          }
          function ob(e, t, a) {
            ;(lf = a), (uf = t), (Ce = e), Gx(e, t, a), (lf = null), (uf = null)
          }
          function Gx(e, t, a) {
            for (var i = (e.mode & it) !== Oe; Ce !== null; ) {
              var u = Ce,
                s = u.child
              if (u.tag === Ne && i) {
                var f = u.memoizedState !== null,
                  p = f || ym
                if (p) {
                  z0(e, t, a)
                  continue
                } else {
                  var v = u.alternate,
                    g = v !== null && v.memoizedState !== null,
                    S = g || dr,
                    k = ym,
                    T = dr
                  ;(ym = p), (dr = S), dr && !T && ((Ce = u), cb(u))
                  for (var O = s; O !== null; )
                    (Ce = O),
                      Gx(
                        O,
                        // New root; bubble back up to here and stop.
                        t,
                        a
                      ),
                      (O = O.sibling)
                  ;(Ce = u), (ym = k), (dr = T), z0(e, t, a)
                  continue
                }
              }
              ;(u.subtreeFlags & Zn) !== Me && s !== null
                ? ((s.return = u), (Ce = s))
                : z0(e, t, a)
            }
          }
          function z0(e, t, a) {
            for (; Ce !== null; ) {
              var i = Ce
              if ((i.flags & Zn) !== Me) {
                var u = i.alternate
                kt(i)
                try {
                  ZT(t, u, i, a)
                } catch (f) {
                  Yt(i, i.return, f)
                }
                gn()
              }
              if (i === e) {
                Ce = null
                return
              }
              var s = i.sibling
              if (s !== null) {
                ;(s.return = i.return), (Ce = s)
                return
              }
              Ce = i.return
            }
          }
          function sb(e) {
            for (; Ce !== null; ) {
              var t = Ce,
                a = t.child
              switch (t.tag) {
                case H:
                case ce:
                case Ee:
                case Ve: {
                  if (t.mode & je)
                    try {
                      ol(), Ri(Pn, t, t.return)
                    } finally {
                      ul(t)
                    }
                  else Ri(Pn, t, t.return)
                  break
                }
                case $: {
                  of(t, t.return)
                  var i = t.stateNode
                  typeof i.componentWillUnmount == 'function' &&
                    L0(t, t.return, i)
                  break
                }
                case K: {
                  of(t, t.return)
                  break
                }
                case Ne: {
                  var u = t.memoizedState !== null
                  if (u) {
                    Xx(e)
                    continue
                  }
                  break
                }
              }
              a !== null ? ((a.return = t), (Ce = a)) : Xx(e)
            }
          }
          function Xx(e) {
            for (; Ce !== null; ) {
              var t = Ce
              if (t === e) {
                Ce = null
                return
              }
              var a = t.sibling
              if (a !== null) {
                ;(a.return = t.return), (Ce = a)
                return
              }
              Ce = t.return
            }
          }
          function cb(e) {
            for (; Ce !== null; ) {
              var t = Ce,
                a = t.child
              if (t.tag === Ne) {
                var i = t.memoizedState !== null
                if (i) {
                  qx(e)
                  continue
                }
              }
              a !== null ? ((a.return = t), (Ce = a)) : qx(e)
            }
          }
          function qx(e) {
            for (; Ce !== null; ) {
              var t = Ce
              kt(t)
              try {
                JT(t)
              } catch (i) {
                Yt(t, t.return, i)
              }
              if ((gn(), t === e)) {
                Ce = null
                return
              }
              var a = t.sibling
              if (a !== null) {
                ;(a.return = t.return), (Ce = a)
                return
              }
              Ce = t.return
            }
          }
          function fb(e, t, a, i) {
            ;(Ce = t), db(t, e, a, i)
          }
          function db(e, t, a, i) {
            for (; Ce !== null; ) {
              var u = Ce,
                s = u.child
              ;(u.subtreeFlags & ia) !== Me && s !== null
                ? ((s.return = u), (Ce = s))
                : pb(e, t, a, i)
            }
          }
          function pb(e, t, a, i) {
            for (; Ce !== null; ) {
              var u = Ce
              if ((u.flags & Wt) !== Me) {
                kt(u)
                try {
                  vb(t, u, a, i)
                } catch (f) {
                  Yt(u, u.return, f)
                }
                gn()
              }
              if (u === e) {
                Ce = null
                return
              }
              var s = u.sibling
              if (s !== null) {
                ;(s.return = u.return), (Ce = s)
                return
              }
              Ce = u.return
            }
          }
          function vb(e, t, a, i) {
            switch (t.tag) {
              case H:
              case ce:
              case Ve: {
                if (t.mode & je) {
                  c0()
                  try {
                    eo(cr | Bn, t)
                  } finally {
                    s0(t)
                  }
                } else eo(cr | Bn, t)
                break
              }
            }
          }
          function hb(e) {
            ;(Ce = e), mb()
          }
          function mb() {
            for (; Ce !== null; ) {
              var e = Ce,
                t = e.child
              if ((Ce.flags & xt) !== Me) {
                var a = e.deletions
                if (a !== null) {
                  for (var i = 0; i < a.length; i++) {
                    var u = a[i]
                    ;(Ce = u), Sb(u, e)
                  }
                  {
                    var s = e.alternate
                    if (s !== null) {
                      var f = s.child
                      if (f !== null) {
                        s.child = null
                        do {
                          var p = f.sibling
                          ;(f.sibling = null), (f = p)
                        } while (f !== null)
                      }
                    }
                  }
                  Ce = e
                }
              }
              ;(e.subtreeFlags & ia) !== Me && t !== null
                ? ((t.return = e), (Ce = t))
                : yb()
            }
          }
          function yb() {
            for (; Ce !== null; ) {
              var e = Ce
              ;(e.flags & Wt) !== Me && (kt(e), gb(e), gn())
              var t = e.sibling
              if (t !== null) {
                ;(t.return = e.return), (Ce = t)
                return
              }
              Ce = e.return
            }
          }
          function gb(e) {
            switch (e.tag) {
              case H:
              case ce:
              case Ve: {
                e.mode & je
                  ? (c0(), Ri(cr | Bn, e, e.return), s0(e))
                  : Ri(cr | Bn, e, e.return)
                break
              }
            }
          }
          function Sb(e, t) {
            for (; Ce !== null; ) {
              var a = Ce
              kt(a), Cb(a, t), gn()
              var i = a.child
              i !== null ? ((i.return = a), (Ce = i)) : xb(e)
            }
          }
          function xb(e) {
            for (; Ce !== null; ) {
              var t = Ce,
                a = t.sibling,
                i = t.return
              if ((Px(t), t === e)) {
                Ce = null
                return
              }
              if (a !== null) {
                ;(a.return = i), (Ce = a)
                return
              }
              Ce = i
            }
          }
          function Cb(e, t) {
            switch (e.tag) {
              case H:
              case ce:
              case Ve: {
                e.mode & je ? (c0(), Ri(cr, e, t), s0(e)) : Ri(cr, e, t)
                break
              }
            }
          }
          function Eb(e) {
            switch (e.tag) {
              case H:
              case ce:
              case Ve: {
                try {
                  eo(Pn | Bn, e)
                } catch (a) {
                  Yt(e, e.return, a)
                }
                break
              }
              case $: {
                var t = e.stateNode
                try {
                  t.componentDidMount()
                } catch (a) {
                  Yt(e, e.return, a)
                }
                break
              }
            }
          }
          function wb(e) {
            switch (e.tag) {
              case H:
              case ce:
              case Ve: {
                try {
                  eo(cr | Bn, e)
                } catch (t) {
                  Yt(e, e.return, t)
                }
                break
              }
            }
          }
          function Rb(e) {
            switch (e.tag) {
              case H:
              case ce:
              case Ve: {
                try {
                  Ri(Pn | Bn, e, e.return)
                } catch (a) {
                  Yt(e, e.return, a)
                }
                break
              }
              case $: {
                var t = e.stateNode
                typeof t.componentWillUnmount == 'function' &&
                  L0(e, e.return, t)
                break
              }
            }
          }
          function Tb(e) {
            switch (e.tag) {
              case H:
              case ce:
              case Ve:
                try {
                  Ri(cr | Bn, e, e.return)
                } catch (t) {
                  Yt(e, e.return, t)
                }
            }
          }
          if (typeof Symbol == 'function' && Symbol.for) {
            var vp = Symbol.for
            vp('selector.component'),
              vp('selector.has_pseudo_class'),
              vp('selector.role'),
              vp('selector.test_id'),
              vp('selector.text')
          }
          var bb = []
          function kb() {
            bb.forEach(function (e) {
              return e()
            })
          }
          var Db = y.ReactCurrentActQueue
          function _b(e) {
            {
              var t =
                  // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                  typeof IS_REACT_ACT_ENVIRONMENT < 'u'
                    ? IS_REACT_ACT_ENVIRONMENT
                    : void 0,
                a = typeof jest < 'u'
              return a && t !== !1
            }
          }
          function Kx() {
            {
              var e =
                // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                typeof IS_REACT_ACT_ENVIRONMENT < 'u'
                  ? IS_REACT_ACT_ENVIRONMENT
                  : void 0
              return (
                !e &&
                  Db.current !== null &&
                  m(
                    'The current testing environment is not configured to support act(...)'
                  ),
                e
              )
            }
          }
          var Lb = Math.ceil,
            U0 = y.ReactCurrentDispatcher,
            O0 = y.ReactCurrentOwner,
            vr = y.ReactCurrentBatchConfig,
            ki = y.ReactCurrentActQueue,
            In =
              /*             */
              0,
            Zx =
              /*               */
              1,
            hr =
              /*                */
              2,
            Ka =
              /*                */
              4,
            Jl = 0,
            hp = 1,
            fs = 2,
            Sm = 3,
            mp = 4,
            Jx = 5,
            A0 = 6,
            pt = In,
            Qr = null,
            on = null,
            Qn = I,
            cl = I,
            j0 = Iu(I),
            Wn = Jl,
            yp = null,
            xm = I,
            gp = I,
            Cm = I,
            Sp = null,
            ma = null,
            H0 = 0,
            eC = 500,
            tC = 1 / 0,
            Mb = 500,
            eu = null
          function xp() {
            tC = qt() + Mb
          }
          function nC() {
            return tC
          }
          var Em = !1,
            F0 = null,
            sf = null,
            ds = !1,
            no = null,
            Cp = I,
            V0 = [],
            B0 = null,
            Nb = 50,
            Ep = 0,
            P0 = null,
            Y0 = !1,
            wm = !1,
            zb = 50,
            cf = 0,
            Rm = null,
            wp = zt,
            Tm = I,
            rC = !1
          function bm() {
            return Qr
          }
          function Wr() {
            return (pt & (hr | Ka)) !== In
              ? qt()
              : (wp !== zt || (wp = qt()), wp)
          }
          function ro(e) {
            var t = e.mode
            if ((t & it) === Oe) return Fe
            if ((pt & hr) !== In && Qn !== I) return xn(Qn)
            var a = _R() !== DR
            if (a) {
              if (vr.transition !== null) {
                var i = vr.transition
                i._updatedFibers ||
                  (i._updatedFibers = /* @__PURE__ */ new Set()),
                  i._updatedFibers.add(e)
              }
              return Tm === dt && (Tm = sd()), Tm
            }
            var u = sa()
            if (u !== dt) return u
            var s = pw()
            return s
          }
          function Ub(e) {
            var t = e.mode
            return (t & it) === Oe ? Fe : cy()
          }
          function Gn(e, t, a, i) {
            ak(),
              rC && m('useInsertionEffect must not schedule updates.'),
              Y0 && (wm = !0),
              Al(e, a, i),
              (pt & hr) !== I && e === Qr
                ? uk(t)
                : (Fn && vd(e, t, a),
                  ok(t),
                  e === Qr &&
                    ((pt & hr) === In && (gp = Ke(gp, a)),
                    Wn === mp && ao(e, Qn)),
                  ya(e, i),
                  a === Fe &&
                    pt === In &&
                    (t.mode & it) === Oe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                    !ki.isBatchingLegacy &&
                    (xp(), n1()))
          }
          function Ob(e, t, a) {
            var i = e.current
            ;(i.lanes = t), Al(e, t, a), ya(e, a)
          }
          function Ab(e) {
            return (
              // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
              // decided not to enable it.
              (pt & hr) !== In
            )
          }
          function ya(e, t) {
            var a = e.callbackNode
            uy(e, t)
            var i = jo(e, e === Qr ? Qn : I)
            if (i === I) {
              a !== null && SC(a),
                (e.callbackNode = null),
                (e.callbackPriority = dt)
              return
            }
            var u = pn(i),
              s = e.callbackPriority
            if (
              s === u && // Special case related to `act`. If the currently scheduled task is a
              // Scheduler task, rather than an `act` task, cancel it and re-scheduled
              // on the `act` queue.
              !(ki.current !== null && a !== q0)
            ) {
              a == null &&
                s !== Fe &&
                m(
                  'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.'
                )
              return
            }
            a != null && SC(a)
            var f
            if (u === Fe)
              e.tag === Qu
                ? (ki.isBatchingLegacy !== null &&
                    (ki.didScheduleLegacyUpdate = !0),
                  fR(lC.bind(null, e)))
                : t1(lC.bind(null, e)),
                ki.current !== null
                  ? ki.current.push(Wu)
                  : hw(function () {
                      ;(pt & (hr | Ka)) === In && Wu()
                    }),
                (f = null)
            else {
              var p
              switch (Po(i)) {
                case Jn:
                  p = Ws
                  break
                case Vn:
                  p = Pr
                  break
                case di:
                  p = Ba
                  break
                case Vo:
                  p = Pi
                  break
                default:
                  p = Ba
                  break
              }
              f = K0(p, aC.bind(null, e))
            }
            ;(e.callbackPriority = u), (e.callbackNode = f)
          }
          function aC(e, t) {
            if ((aT(), (wp = zt), (Tm = I), (pt & (hr | Ka)) !== In))
              throw new Error('Should not already be working.')
            var a = e.callbackNode,
              i = nu()
            if (i && e.callbackNode !== a) return null
            var u = jo(e, e === Qr ? Qn : I)
            if (u === I) return null
            var s = !Fo(e, u) && !Hv(e, u) && !t,
              f = s ? Qb(e, u) : Dm(e, u)
            if (f !== Jl) {
              if (f === fs) {
                var p = ud(e)
                p !== I && ((u = p), (f = $0(e, p)))
              }
              if (f === hp) {
                var v = yp
                throw (ps(e, I), ao(e, u), ya(e, qt()), v)
              }
              if (f === A0) ao(e, u)
              else {
                var g = !Fo(e, u),
                  S = e.current.alternate
                if (g && !Hb(S)) {
                  if (((f = Dm(e, u)), f === fs)) {
                    var k = ud(e)
                    k !== I && ((u = k), (f = $0(e, k)))
                  }
                  if (f === hp) {
                    var T = yp
                    throw (ps(e, I), ao(e, u), ya(e, qt()), T)
                  }
                }
                ;(e.finishedWork = S), (e.finishedLanes = u), jb(e, f, u)
              }
            }
            return ya(e, qt()), e.callbackNode === a ? aC.bind(null, e) : null
          }
          function $0(e, t) {
            var a = Sp
            if (En(e)) {
              var i = ps(e, t)
              ;(i.flags |= tn), aR(e.containerInfo)
            }
            var u = Dm(e, t)
            if (u !== fs) {
              var s = ma
              ;(ma = a), s !== null && iC(s)
            }
            return u
          }
          function iC(e) {
            ma === null ? (ma = e) : ma.push.apply(ma, e)
          }
          function jb(e, t, a) {
            switch (t) {
              case Jl:
              case hp:
                throw new Error(
                  'Root did not complete. This is a bug in React.'
                )
              case fs: {
                vs(e, ma, eu)
                break
              }
              case Sm: {
                if (
                  (ao(e, a),
                  yc(a) && // do not delay if we're inside an act() scope
                    !xC())
                ) {
                  var i = H0 + eC - qt()
                  if (i > 10) {
                    var u = jo(e, I)
                    if (u !== I) break
                    var s = e.suspendedLanes
                    if (!Ol(s, a)) {
                      Wr(), dd(e, s)
                      break
                    }
                    e.timeoutHandle = By(vs.bind(null, e, ma, eu), i)
                    break
                  }
                }
                vs(e, ma, eu)
                break
              }
              case mp: {
                if ((ao(e, a), jv(a))) break
                if (!xC()) {
                  var f = Av(e, a),
                    p = f,
                    v = qt() - p,
                    g = rk(v) - v
                  if (g > 10) {
                    e.timeoutHandle = By(vs.bind(null, e, ma, eu), g)
                    break
                  }
                }
                vs(e, ma, eu)
                break
              }
              case Jx: {
                vs(e, ma, eu)
                break
              }
              default:
                throw new Error('Unknown root exit status.')
            }
          }
          function Hb(e) {
            for (var t = e; ; ) {
              if (t.flags & Lo) {
                var a = t.updateQueue
                if (a !== null) {
                  var i = a.stores
                  if (i !== null)
                    for (var u = 0; u < i.length; u++) {
                      var s = i[u],
                        f = s.getSnapshot,
                        p = s.value
                      try {
                        if (!xe(f(), p)) return !1
                      } catch {
                        return !1
                      }
                    }
                }
              }
              var v = t.child
              if (t.subtreeFlags & Lo && v !== null) {
                ;(v.return = t), (t = v)
                continue
              }
              if (t === e) return !0
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0
                t = t.return
              }
              ;(t.sibling.return = t.return), (t = t.sibling)
            }
            return !0
          }
          function ao(e, t) {
            ;(t = Du(t, Cm)), (t = Du(t, gp)), fd(e, t)
          }
          function lC(e) {
            if ((iT(), (pt & (hr | Ka)) !== In))
              throw new Error('Should not already be working.')
            nu()
            var t = jo(e, I)
            if (!kr(t, Fe)) return ya(e, qt()), null
            var a = Dm(e, t)
            if (e.tag !== Qu && a === fs) {
              var i = ud(e)
              i !== I && ((t = i), (a = $0(e, i)))
            }
            if (a === hp) {
              var u = yp
              throw (ps(e, I), ao(e, t), ya(e, qt()), u)
            }
            if (a === A0)
              throw new Error('Root did not complete. This is a bug in React.')
            var s = e.current.alternate
            return (
              (e.finishedWork = s),
              (e.finishedLanes = t),
              vs(e, ma, eu),
              ya(e, qt()),
              null
            )
          }
          function Fb(e, t) {
            t !== I &&
              (_u(e, Ke(t, Fe)),
              ya(e, qt()),
              (pt & (hr | Ka)) === In && (xp(), Wu()))
          }
          function I0(e, t) {
            var a = pt
            pt |= Zx
            try {
              return e(t)
            } finally {
              ;(pt = a),
                pt === In && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                  !ki.isBatchingLegacy &&
                  (xp(), n1())
            }
          }
          function Vb(e, t, a, i, u) {
            var s = sa(),
              f = vr.transition
            try {
              return (vr.transition = null), Cn(Jn), e(t, a, i, u)
            } finally {
              Cn(s), (vr.transition = f), pt === In && xp()
            }
          }
          function tu(e) {
            no !== null && no.tag === Qu && (pt & (hr | Ka)) === In && nu()
            var t = pt
            pt |= Zx
            var a = vr.transition,
              i = sa()
            try {
              return (vr.transition = null), Cn(Jn), e ? e() : void 0
            } finally {
              Cn(i),
                (vr.transition = a),
                (pt = t),
                (pt & (hr | Ka)) === In && Wu()
            }
          }
          function uC() {
            return (pt & (hr | Ka)) !== In
          }
          function km(e, t) {
            _r(j0, cl, e), (cl = Ke(cl, t))
          }
          function Q0(e) {
            ;(cl = j0.current), Dr(j0, e)
          }
          function ps(e, t) {
            ;(e.finishedWork = null), (e.finishedLanes = I)
            var a = e.timeoutHandle
            if ((a !== Py && ((e.timeoutHandle = Py), vw(a)), on !== null))
              for (var i = on.return; i !== null; ) {
                var u = i.alternate
                Ax(u, i), (i = i.return)
              }
            Qr = e
            var s = hs(e.current, null)
            return (
              (on = s),
              (Qn = cl = t),
              (Wn = Jl),
              (yp = null),
              (xm = I),
              (gp = I),
              (Cm = I),
              (Sp = null),
              (ma = null),
              zR(),
              Si.discardPendingWarnings(),
              s
            )
          }
          function oC(e, t) {
            do {
              var a = on
              try {
                if (
                  (Oh(),
                  H1(),
                  gn(),
                  (O0.current = null),
                  a === null || a.return === null)
                ) {
                  ;(Wn = hp), (yp = t), (on = null)
                  return
                }
                if ((en && a.mode & je && pm(a, !0), Ct))
                  if (
                    (bl(),
                    t !== null &&
                      typeof t == 'object' &&
                      typeof t.then == 'function')
                  ) {
                    var i = t
                    zv(a, i, Qn)
                  } else Zs(a, t, Qn)
                cT(e, a.return, a, t, Qn), dC(a)
              } catch (u) {
                ;(t = u),
                  on === a && a !== null ? ((a = a.return), (on = a)) : (a = on)
                continue
              }
              return
            } while (!0)
          }
          function sC() {
            var e = U0.current
            return (U0.current = om), e === null ? om : e
          }
          function cC(e) {
            U0.current = e
          }
          function Bb() {
            H0 = qt()
          }
          function Rp(e) {
            xm = Ke(e, xm)
          }
          function Pb() {
            Wn === Jl && (Wn = Sm)
          }
          function W0() {
            ;(Wn === Jl || Wn === Sm || Wn === fs) && (Wn = mp),
              Qr !== null && (Ho(xm) || Ho(gp)) && ao(Qr, Qn)
          }
          function Yb(e) {
            Wn !== mp && (Wn = fs), Sp === null ? (Sp = [e]) : Sp.push(e)
          }
          function $b() {
            return Wn === Jl
          }
          function Dm(e, t) {
            var a = pt
            pt |= hr
            var i = sC()
            if (Qr !== e || Qn !== t) {
              if (Fn) {
                var u = e.memoizedUpdaters
                u.size > 0 && (Tp(e, Qn), u.clear()), xc(e, t)
              }
              ;(eu = hd()), ps(e, t)
            }
            Ma(t)
            do
              try {
                Ib()
                break
              } catch (s) {
                oC(e, s)
              }
            while (!0)
            if ((Oh(), (pt = a), cC(i), on !== null))
              throw new Error(
                'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
              )
            return wu(), (Qr = null), (Qn = I), Wn
          }
          function Ib() {
            for (; on !== null; ) fC(on)
          }
          function Qb(e, t) {
            var a = pt
            pt |= hr
            var i = sC()
            if (Qr !== e || Qn !== t) {
              if (Fn) {
                var u = e.memoizedUpdaters
                u.size > 0 && (Tp(e, Qn), u.clear()), xc(e, t)
              }
              ;(eu = hd()), xp(), ps(e, t)
            }
            Ma(t)
            do
              try {
                Wb()
                break
              } catch (s) {
                oC(e, s)
              }
            while (!0)
            return (
              Oh(),
              cC(i),
              (pt = a),
              on !== null ? (zo(), Jl) : (wu(), (Qr = null), (Qn = I), Wn)
            )
          }
          function Wb() {
            for (; on !== null && !Qs(); ) fC(on)
          }
          function fC(e) {
            var t = e.alternate
            kt(e)
            var a
            ;(e.mode & je) !== Oe
              ? (o0(e), (a = G0(t, e, cl)), pm(e, !0))
              : (a = G0(t, e, cl)),
              gn(),
              (e.memoizedProps = e.pendingProps),
              a === null ? dC(e) : (on = a),
              (O0.current = null)
          }
          function dC(e) {
            var t = e
            do {
              var a = t.alternate,
                i = t.return
              if ((t.flags & Fr) === Me) {
                kt(t)
                var u = void 0
                if (
                  ((t.mode & je) === Oe
                    ? (u = Ox(a, t, cl))
                    : (o0(t), (u = Ox(a, t, cl)), pm(t, !1)),
                  gn(),
                  u !== null)
                ) {
                  on = u
                  return
                }
              } else {
                var s = PT(a, t)
                if (s !== null) {
                  ;(s.flags &= Rv), (on = s)
                  return
                }
                if ((t.mode & je) !== Oe) {
                  pm(t, !1)
                  for (var f = t.actualDuration, p = t.child; p !== null; )
                    (f += p.actualDuration), (p = p.sibling)
                  t.actualDuration = f
                }
                if (i !== null)
                  (i.flags |= Fr), (i.subtreeFlags = Me), (i.deletions = null)
                else {
                  ;(Wn = A0), (on = null)
                  return
                }
              }
              var v = t.sibling
              if (v !== null) {
                on = v
                return
              }
              ;(t = i), (on = t)
            } while (t !== null)
            Wn === Jl && (Wn = Jx)
          }
          function vs(e, t, a) {
            var i = sa(),
              u = vr.transition
            try {
              ;(vr.transition = null), Cn(Jn), Gb(e, t, a, i)
            } finally {
              ;(vr.transition = u), Cn(i)
            }
            return null
          }
          function Gb(e, t, a, i) {
            do nu()
            while (no !== null)
            if ((ik(), (pt & (hr | Ka)) !== In))
              throw new Error('Should not already be working.')
            var u = e.finishedWork,
              s = e.finishedLanes
            if ((Xs(s), u === null)) return nd(), null
            if (
              (s === I &&
                m(
                  'root.finishedLanes should not be empty during a commit. This is a bug in React.'
                ),
              (e.finishedWork = null),
              (e.finishedLanes = I),
              u === e.current)
            )
              throw new Error(
                'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
              )
            ;(e.callbackNode = null), (e.callbackPriority = dt)
            var f = Ke(u.lanes, u.childLanes)
            pd(e, f),
              e === Qr && ((Qr = null), (on = null), (Qn = I)),
              ((u.subtreeFlags & ia) !== Me || (u.flags & ia) !== Me) &&
                (ds ||
                  ((ds = !0),
                  (B0 = a),
                  K0(Ba, function () {
                    return nu(), null
                  })))
            var p = (u.subtreeFlags & (xu | wr | Zn | ia)) !== Me,
              v = (u.flags & (xu | wr | Zn | ia)) !== Me
            if (p || v) {
              var g = vr.transition
              vr.transition = null
              var S = sa()
              Cn(Jn)
              var k = pt
              ;(pt |= Ka),
                (O0.current = null),
                WT(e, u),
                sx(),
                ub(e, u, s),
                uw(e.containerInfo),
                (e.current = u),
                Uv(s),
                ob(u, e, s),
                Eu(),
                kv(),
                (pt = k),
                Cn(S),
                (vr.transition = g)
            } else (e.current = u), sx()
            var T = ds
            if (
              (ds ? ((ds = !1), (no = e), (Cp = s)) : ((cf = 0), (Rm = null)),
              (f = e.pendingLanes),
              f === I && (sf = null),
              T || mC(e.current, !1),
              si(u.stateNode, i),
              Fn && e.memoizedUpdaters.clear(),
              kb(),
              ya(e, qt()),
              t !== null)
            )
              for (var O = e.onRecoverableError, j = 0; j < t.length; j++) {
                var P = t[j],
                  he = P.stack,
                  ze = P.digest
                O(P.value, {
                  componentStack: he,
                  digest: ze,
                })
              }
            if (Em) {
              Em = !1
              var ke = F0
              throw ((F0 = null), ke)
            }
            return (
              kr(Cp, Fe) && e.tag !== Qu && nu(),
              (f = e.pendingLanes),
              kr(f, Fe)
                ? (rT(), e === P0 ? Ep++ : ((Ep = 0), (P0 = e)))
                : (Ep = 0),
              Wu(),
              nd(),
              null
            )
          }
          function nu() {
            if (no !== null) {
              var e = Po(Cp),
                t = dy(di, e),
                a = vr.transition,
                i = sa()
              try {
                return (vr.transition = null), Cn(t), qb()
              } finally {
                Cn(i), (vr.transition = a)
              }
            }
            return !1
          }
          function Xb(e) {
            V0.push(e),
              ds ||
                ((ds = !0),
                K0(Ba, function () {
                  return nu(), null
                }))
          }
          function qb() {
            if (no === null) return !1
            var e = B0
            B0 = null
            var t = no,
              a = Cp
            if (((no = null), (Cp = I), (pt & (hr | Ka)) !== In))
              throw new Error(
                'Cannot flush passive effects while already rendering.'
              )
            ;(Y0 = !0), (wm = !1), Ov(a)
            var i = pt
            ;(pt |= Ka), hb(t.current), fb(t, t.current, a, e)
            {
              var u = V0
              V0 = []
              for (var s = 0; s < u.length; s++) {
                var f = u[s]
                KT(t, f)
              }
            }
            No(),
              mC(t.current, !0),
              (pt = i),
              Wu(),
              wm ? (t === Rm ? cf++ : ((cf = 0), (Rm = t))) : (cf = 0),
              (Y0 = !1),
              (wm = !1),
              $i(t)
            {
              var p = t.current.stateNode
              ;(p.effectDuration = 0), (p.passiveEffectDuration = 0)
            }
            return !0
          }
          function pC(e) {
            return sf !== null && sf.has(e)
          }
          function Kb(e) {
            sf === null ? (sf = /* @__PURE__ */ new Set([e])) : sf.add(e)
          }
          function Zb(e) {
            Em || ((Em = !0), (F0 = e))
          }
          var Jb = Zb
          function vC(e, t, a) {
            var i = ss(a, t),
              u = fx(e, i, Fe),
              s = Xu(e, u, Fe),
              f = Wr()
            s !== null && (Al(s, Fe, f), ya(s, f))
          }
          function Yt(e, t, a) {
            if (($T(a), bp(!1), e.tag === B)) {
              vC(e, e, a)
              return
            }
            var i = null
            for (i = t; i !== null; ) {
              if (i.tag === B) {
                vC(i, e, a)
                return
              } else if (i.tag === $) {
                var u = i.type,
                  s = i.stateNode
                if (
                  typeof u.getDerivedStateFromError == 'function' ||
                  (typeof s.componentDidCatch == 'function' && !pC(s))
                ) {
                  var f = ss(a, e),
                    p = v0(i, f, Fe),
                    v = Xu(i, p, Fe),
                    g = Wr()
                  v !== null && (Al(v, Fe, g), ya(v, g))
                  return
                }
              }
              i = i.return
            }
            m(
              `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
              a
            )
          }
          function ek(e, t, a) {
            var i = e.pingCache
            i !== null && i.delete(t)
            var u = Wr()
            dd(e, a),
              sk(e),
              Qr === e &&
                Ol(Qn, a) &&
                (Wn === mp || (Wn === Sm && yc(Qn) && qt() - H0 < eC)
                  ? ps(e, I)
                  : (Cm = Ke(Cm, a))),
              ya(e, u)
          }
          function hC(e, t) {
            t === dt && (t = Ub(e))
            var a = Wr(),
              i = va(e, t)
            i !== null && (Al(i, t, a), ya(i, a))
          }
          function tk(e) {
            var t = e.memoizedState,
              a = dt
            t !== null && (a = t.retryLane), hC(e, a)
          }
          function nk(e, t) {
            var a = dt,
              i
            switch (e.tag) {
              case de:
                i = e.stateNode
                var u = e.memoizedState
                u !== null && (a = u.retryLane)
                break
              case Pe:
                i = e.stateNode
                break
              default:
                throw new Error(
                  'Pinged unknown suspense boundary type. This is probably a bug in React.'
                )
            }
            i !== null && i.delete(t), hC(e, a)
          }
          function rk(e) {
            return e < 120
              ? 120
              : e < 480
              ? 480
              : e < 1080
              ? 1080
              : e < 1920
              ? 1920
              : e < 3e3
              ? 3e3
              : e < 4320
              ? 4320
              : Lb(e / 1960) * 1960
          }
          function ak() {
            if (Ep > Nb)
              throw (
                ((Ep = 0),
                (P0 = null),
                new Error(
                  'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
                ))
              )
            cf > zb &&
              ((cf = 0),
              (Rm = null),
              m(
                "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
              ))
          }
          function ik() {
            Si.flushLegacyContextWarning(),
              Si.flushPendingUnsafeLifecycleWarnings()
          }
          function mC(e, t) {
            kt(e),
              _m(e, Er, Rb),
              t && _m(e, Tl, Tb),
              _m(e, Er, Eb),
              t && _m(e, Tl, wb),
              gn()
          }
          function _m(e, t, a) {
            for (var i = e, u = null; i !== null; ) {
              var s = i.subtreeFlags & t
              i !== u && i.child !== null && s !== Me
                ? (i = i.child)
                : ((i.flags & t) !== Me && a(i),
                  i.sibling !== null ? (i = i.sibling) : (i = u = i.return))
            }
          }
          var Lm = null
          function yC(e) {
            {
              if ((pt & hr) !== In || !(e.mode & it)) return
              var t = e.tag
              if (
                t !== te &&
                t !== B &&
                t !== $ &&
                t !== H &&
                t !== ce &&
                t !== Ee &&
                t !== Ve
              )
                return
              var a = Xe(e) || 'ReactComponent'
              if (Lm !== null) {
                if (Lm.has(a)) return
                Lm.add(a)
              } else Lm = /* @__PURE__ */ new Set([a])
              var i = fn
              try {
                kt(e),
                  m(
                    "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
                  )
              } finally {
                i ? kt(e) : gn()
              }
            }
          }
          var G0
          {
            var lk = null
            G0 = function (e, t, a) {
              var i = TC(lk, t)
              try {
                return Lx(e, t, a)
              } catch (s) {
                if (
                  SR() ||
                  (s !== null &&
                    typeof s == 'object' &&
                    typeof s.then == 'function')
                )
                  throw s
                if (
                  (Oh(),
                  H1(),
                  Ax(e, t),
                  TC(t, i),
                  t.mode & je && o0(t),
                  Rl(null, Lx, null, e, t, a),
                  iy())
                ) {
                  var u = If()
                  typeof u == 'object' &&
                    u !== null &&
                    u._suppressLogging &&
                    typeof s == 'object' &&
                    s !== null &&
                    !s._suppressLogging &&
                    (s._suppressLogging = !0)
                }
                throw s
              }
            }
          }
          var gC = !1,
            X0
          X0 = /* @__PURE__ */ new Set()
          function uk(e) {
            if (Jr && !eT())
              switch (e.tag) {
                case H:
                case ce:
                case Ve: {
                  var t = (on && Xe(on)) || 'Unknown',
                    a = t
                  if (!X0.has(a)) {
                    X0.add(a)
                    var i = Xe(e) || 'Unknown'
                    m(
                      'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
                      i,
                      t,
                      t
                    )
                  }
                  break
                }
                case $: {
                  gC ||
                    (m(
                      'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
                    ),
                    (gC = !0))
                  break
                }
              }
          }
          function Tp(e, t) {
            if (Fn) {
              var a = e.memoizedUpdaters
              a.forEach(function (i) {
                vd(e, i, t)
              })
            }
          }
          var q0 = {}
          function K0(e, t) {
            {
              var a = ki.current
              return a !== null ? (a.push(t), q0) : Is(e, t)
            }
          }
          function SC(e) {
            if (e !== q0) return bv(e)
          }
          function xC() {
            return ki.current !== null
          }
          function ok(e) {
            {
              if (e.mode & it) {
                if (!Kx()) return
              } else if (
                !_b() ||
                pt !== In ||
                (e.tag !== H && e.tag !== ce && e.tag !== Ve)
              )
                return
              if (ki.current === null) {
                var t = fn
                try {
                  kt(e),
                    m(
                      `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
                      Xe(e)
                    )
                } finally {
                  t ? kt(e) : gn()
                }
              }
            }
          }
          function sk(e) {
            e.tag !== Qu &&
              Kx() &&
              ki.current === null &&
              m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)
          }
          function bp(e) {
            rC = e
          }
          var Za = null,
            ff = null,
            ck = function (e) {
              Za = e
            }
          function df(e) {
            {
              if (Za === null) return e
              var t = Za(e)
              return t === void 0 ? e : t.current
            }
          }
          function Z0(e) {
            return df(e)
          }
          function J0(e) {
            {
              if (Za === null) return e
              var t = Za(e)
              if (t === void 0) {
                if (e != null && typeof e.render == 'function') {
                  var a = df(e.render)
                  if (e.render !== a) {
                    var i = {
                      $$typeof: Ue,
                      render: a,
                    }
                    return (
                      e.displayName !== void 0 &&
                        (i.displayName = e.displayName),
                      i
                    )
                  }
                }
                return e
              }
              return t.current
            }
          }
          function CC(e, t) {
            {
              if (Za === null) return !1
              var a = e.elementType,
                i = t.type,
                u = !1,
                s = typeof i == 'object' && i !== null ? i.$$typeof : null
              switch (e.tag) {
                case $: {
                  typeof i == 'function' && (u = !0)
                  break
                }
                case H: {
                  ;(typeof i == 'function' || s === Ae) && (u = !0)
                  break
                }
                case ce: {
                  ;(s === Ue || s === Ae) && (u = !0)
                  break
                }
                case Ee:
                case Ve: {
                  ;(s === tt || s === Ae) && (u = !0)
                  break
                }
                default:
                  return !1
              }
              if (u) {
                var f = Za(a)
                if (f !== void 0 && f === Za(i)) return !0
              }
              return !1
            }
          }
          function EC(e) {
            {
              if (Za === null || typeof WeakSet != 'function') return
              ff === null && (ff = /* @__PURE__ */ new WeakSet()), ff.add(e)
            }
          }
          var fk = function (e, t) {
              {
                if (Za === null) return
                var a = t.staleFamilies,
                  i = t.updatedFamilies
                nu(),
                  tu(function () {
                    eS(e.current, i, a)
                  })
              }
            },
            dk = function (e, t) {
              {
                if (e.context !== za) return
                nu(),
                  tu(function () {
                    kp(t, e, null, null)
                  })
              }
            }
          function eS(e, t, a) {
            {
              var i = e.alternate,
                u = e.child,
                s = e.sibling,
                f = e.tag,
                p = e.type,
                v = null
              switch (f) {
                case H:
                case Ve:
                case $:
                  v = p
                  break
                case ce:
                  v = p.render
                  break
              }
              if (Za === null)
                throw new Error(
                  'Expected resolveFamily to be set during hot reload.'
                )
              var g = !1,
                S = !1
              if (v !== null) {
                var k = Za(v)
                k !== void 0 &&
                  (a.has(k)
                    ? (S = !0)
                    : t.has(k) && (f === $ ? (S = !0) : (g = !0)))
              }
              if (
                (ff !== null &&
                  (ff.has(e) || (i !== null && ff.has(i))) &&
                  (S = !0),
                S && (e._debugNeedsRemount = !0),
                S || g)
              ) {
                var T = va(e, Fe)
                T !== null && Gn(T, e, Fe, zt)
              }
              u !== null && !S && eS(u, t, a), s !== null && eS(s, t, a)
            }
          }
          var pk = function (e, t) {
            {
              var a = /* @__PURE__ */ new Set(),
                i = new Set(
                  t.map(function (u) {
                    return u.current
                  })
                )
              return tS(e.current, i, a), a
            }
          }
          function tS(e, t, a) {
            {
              var i = e.child,
                u = e.sibling,
                s = e.tag,
                f = e.type,
                p = null
              switch (s) {
                case H:
                case Ve:
                case $:
                  p = f
                  break
                case ce:
                  p = f.render
                  break
              }
              var v = !1
              p !== null && t.has(p) && (v = !0),
                v ? vk(e, a) : i !== null && tS(i, t, a),
                u !== null && tS(u, t, a)
            }
          }
          function vk(e, t) {
            {
              var a = hk(e, t)
              if (a) return
              for (var i = e; ; ) {
                switch (i.tag) {
                  case K:
                    t.add(i.stateNode)
                    return
                  case W:
                    t.add(i.stateNode.containerInfo)
                    return
                  case B:
                    t.add(i.stateNode.containerInfo)
                    return
                }
                if (i.return === null)
                  throw new Error('Expected to reach root first.')
                i = i.return
              }
            }
          }
          function hk(e, t) {
            for (var a = e, i = !1; ; ) {
              if (a.tag === K) (i = !0), t.add(a.stateNode)
              else if (a.child !== null) {
                ;(a.child.return = a), (a = a.child)
                continue
              }
              if (a === e) return i
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === e) return i
                a = a.return
              }
              ;(a.sibling.return = a.return), (a = a.sibling)
            }
            return !1
          }
          var nS
          {
            nS = !1
            try {
              var wC = Object.preventExtensions({})
            } catch {
              nS = !0
            }
          }
          function mk(e, t, a, i) {
            ;(this.tag = e),
              (this.key = a),
              (this.elementType = null),
              (this.type = null),
              (this.stateNode = null),
              (this.return = null),
              (this.child = null),
              (this.sibling = null),
              (this.index = 0),
              (this.ref = null),
              (this.pendingProps = t),
              (this.memoizedProps = null),
              (this.updateQueue = null),
              (this.memoizedState = null),
              (this.dependencies = null),
              (this.mode = i),
              (this.flags = Me),
              (this.subtreeFlags = Me),
              (this.deletions = null),
              (this.lanes = I),
              (this.childLanes = I),
              (this.alternate = null),
              (this.actualDuration = Number.NaN),
              (this.actualStartTime = Number.NaN),
              (this.selfBaseDuration = Number.NaN),
              (this.treeBaseDuration = Number.NaN),
              (this.actualDuration = 0),
              (this.actualStartTime = -1),
              (this.selfBaseDuration = 0),
              (this.treeBaseDuration = 0),
              (this._debugSource = null),
              (this._debugOwner = null),
              (this._debugNeedsRemount = !1),
              (this._debugHookTypes = null),
              !nS &&
                typeof Object.preventExtensions == 'function' &&
                Object.preventExtensions(this)
          }
          var Ua = function (e, t, a, i) {
            return new mk(e, t, a, i)
          }
          function rS(e) {
            var t = e.prototype
            return !!(t && t.isReactComponent)
          }
          function yk(e) {
            return typeof e == 'function' && !rS(e) && e.defaultProps === void 0
          }
          function gk(e) {
            if (typeof e == 'function') return rS(e) ? $ : H
            if (e != null) {
              var t = e.$$typeof
              if (t === Ue) return ce
              if (t === tt) return Ee
            }
            return te
          }
          function hs(e, t) {
            var a = e.alternate
            a === null
              ? ((a = Ua(e.tag, t, e.key, e.mode)),
                (a.elementType = e.elementType),
                (a.type = e.type),
                (a.stateNode = e.stateNode),
                (a._debugSource = e._debugSource),
                (a._debugOwner = e._debugOwner),
                (a._debugHookTypes = e._debugHookTypes),
                (a.alternate = e),
                (e.alternate = a))
              : ((a.pendingProps = t),
                (a.type = e.type),
                (a.flags = Me),
                (a.subtreeFlags = Me),
                (a.deletions = null),
                (a.actualDuration = 0),
                (a.actualStartTime = -1)),
              (a.flags = e.flags & Hn),
              (a.childLanes = e.childLanes),
              (a.lanes = e.lanes),
              (a.child = e.child),
              (a.memoizedProps = e.memoizedProps),
              (a.memoizedState = e.memoizedState),
              (a.updateQueue = e.updateQueue)
            var i = e.dependencies
            switch (
              ((a.dependencies =
                i === null
                  ? null
                  : {
                      lanes: i.lanes,
                      firstContext: i.firstContext,
                    }),
              (a.sibling = e.sibling),
              (a.index = e.index),
              (a.ref = e.ref),
              (a.selfBaseDuration = e.selfBaseDuration),
              (a.treeBaseDuration = e.treeBaseDuration),
              (a._debugNeedsRemount = e._debugNeedsRemount),
              a.tag)
            ) {
              case te:
              case H:
              case Ve:
                a.type = df(e.type)
                break
              case $:
                a.type = Z0(e.type)
                break
              case ce:
                a.type = J0(e.type)
                break
            }
            return a
          }
          function Sk(e, t) {
            e.flags &= Hn | Ft
            var a = e.alternate
            if (a === null)
              (e.childLanes = I),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = Me),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null),
                (e.selfBaseDuration = 0),
                (e.treeBaseDuration = 0)
            else {
              ;(e.childLanes = a.childLanes),
                (e.lanes = a.lanes),
                (e.child = a.child),
                (e.subtreeFlags = Me),
                (e.deletions = null),
                (e.memoizedProps = a.memoizedProps),
                (e.memoizedState = a.memoizedState),
                (e.updateQueue = a.updateQueue),
                (e.type = a.type)
              var i = a.dependencies
              ;(e.dependencies =
                i === null
                  ? null
                  : {
                      lanes: i.lanes,
                      firstContext: i.firstContext,
                    }),
                (e.selfBaseDuration = a.selfBaseDuration),
                (e.treeBaseDuration = a.treeBaseDuration)
            }
            return e
          }
          function xk(e, t, a) {
            var i
            return (
              e === kh
                ? ((i = it), t === !0 && ((i |= Kt), (i |= ua)))
                : (i = Oe),
              Fn && (i |= je),
              Ua(B, null, null, i)
            )
          }
          function aS(e, t, a, i, u, s) {
            var f = te,
              p = e
            if (typeof e == 'function')
              rS(e) ? ((f = $), (p = Z0(p))) : (p = df(p))
            else if (typeof e == 'string') f = K
            else
              e: switch (e) {
                case Ra:
                  return io(a.children, u, s, t)
                case Li:
                  ;(f = se), (u |= Kt), (u & it) !== Oe && (u |= ua)
                  break
                case w:
                  return Ck(a, u, s, t)
                case Ze:
                  return Ek(a, u, s, t)
                case ht:
                  return wk(a, u, s, t)
                case Qt:
                  return RC(a, u, s, t)
                case lr:
                case Dn:
                case Mi:
                case xs:
                case It:
                default: {
                  if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                      case q:
                        f = ge
                        break e
                      case oe:
                        f = _e
                        break e
                      case Ue:
                        ;(f = ce), (p = J0(p))
                        break e
                      case tt:
                        f = Ee
                        break e
                      case Ae:
                        ;(f = nt), (p = null)
                        break e
                    }
                  var v = ''
                  {
                    ;(e === void 0 ||
                      (typeof e == 'object' &&
                        e !== null &&
                        Object.keys(e).length === 0)) &&
                      (v +=
                        " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
                    var g = i ? Xe(i) : null
                    g &&
                      (v +=
                        `

Check the render method of \`` +
                        g +
                        '`.')
                  }
                  throw new Error(
                    'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
                      ('but got: ' + (e == null ? e : typeof e) + '.' + v)
                  )
                }
              }
            var S = Ua(f, a, t, u)
            return (
              (S.elementType = e),
              (S.type = p),
              (S.lanes = s),
              (S._debugOwner = i),
              S
            )
          }
          function iS(e, t, a) {
            var i = null
            i = e._owner
            var u = e.type,
              s = e.key,
              f = e.props,
              p = aS(u, s, f, i, t, a)
            return (p._debugSource = e._source), (p._debugOwner = e._owner), p
          }
          function io(e, t, a, i) {
            var u = Ua(Re, e, i, t)
            return (u.lanes = a), u
          }
          function Ck(e, t, a, i) {
            typeof e.id != 'string' &&
              m(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof e.id
              )
            var u = Ua(He, e, i, t | je)
            return (
              (u.elementType = w),
              (u.lanes = a),
              (u.stateNode = {
                effectDuration: 0,
                passiveEffectDuration: 0,
              }),
              u
            )
          }
          function Ek(e, t, a, i) {
            var u = Ua(de, e, i, t)
            return (u.elementType = Ze), (u.lanes = a), u
          }
          function wk(e, t, a, i) {
            var u = Ua(Pe, e, i, t)
            return (u.elementType = ht), (u.lanes = a), u
          }
          function RC(e, t, a, i) {
            var u = Ua(Ne, e, i, t)
            ;(u.elementType = Qt), (u.lanes = a)
            var s = {
              isHidden: !1,
            }
            return (u.stateNode = s), u
          }
          function lS(e, t, a) {
            var i = Ua(re, e, null, t)
            return (i.lanes = a), i
          }
          function Rk() {
            var e = Ua(K, null, null, Oe)
            return (e.elementType = 'DELETED'), e
          }
          function Tk(e) {
            var t = Ua(ft, null, null, Oe)
            return (t.stateNode = e), t
          }
          function uS(e, t, a) {
            var i = e.children !== null ? e.children : [],
              u = Ua(W, i, e.key, t)
            return (
              (u.lanes = a),
              (u.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                // Used by persistent updates
                implementation: e.implementation,
              }),
              u
            )
          }
          function TC(e, t) {
            return (
              e === null && (e = Ua(te, null, null, Oe)),
              (e.tag = t.tag),
              (e.key = t.key),
              (e.elementType = t.elementType),
              (e.type = t.type),
              (e.stateNode = t.stateNode),
              (e.return = t.return),
              (e.child = t.child),
              (e.sibling = t.sibling),
              (e.index = t.index),
              (e.ref = t.ref),
              (e.pendingProps = t.pendingProps),
              (e.memoizedProps = t.memoizedProps),
              (e.updateQueue = t.updateQueue),
              (e.memoizedState = t.memoizedState),
              (e.dependencies = t.dependencies),
              (e.mode = t.mode),
              (e.flags = t.flags),
              (e.subtreeFlags = t.subtreeFlags),
              (e.deletions = t.deletions),
              (e.lanes = t.lanes),
              (e.childLanes = t.childLanes),
              (e.alternate = t.alternate),
              (e.actualDuration = t.actualDuration),
              (e.actualStartTime = t.actualStartTime),
              (e.selfBaseDuration = t.selfBaseDuration),
              (e.treeBaseDuration = t.treeBaseDuration),
              (e._debugSource = t._debugSource),
              (e._debugOwner = t._debugOwner),
              (e._debugNeedsRemount = t._debugNeedsRemount),
              (e._debugHookTypes = t._debugHookTypes),
              e
            )
          }
          function bk(e, t, a, i, u) {
            ;(this.tag = t),
              (this.containerInfo = e),
              (this.pendingChildren = null),
              (this.current = null),
              (this.pingCache = null),
              (this.finishedWork = null),
              (this.timeoutHandle = Py),
              (this.context = null),
              (this.pendingContext = null),
              (this.callbackNode = null),
              (this.callbackPriority = dt),
              (this.eventTimes = Sc(I)),
              (this.expirationTimes = Sc(zt)),
              (this.pendingLanes = I),
              (this.suspendedLanes = I),
              (this.pingedLanes = I),
              (this.expiredLanes = I),
              (this.mutableReadLanes = I),
              (this.finishedLanes = I),
              (this.entangledLanes = I),
              (this.entanglements = Sc(I)),
              (this.identifierPrefix = i),
              (this.onRecoverableError = u),
              (this.mutableSourceEagerHydrationData = null),
              (this.effectDuration = 0),
              (this.passiveEffectDuration = 0)
            {
              this.memoizedUpdaters = /* @__PURE__ */ new Set()
              for (
                var s = (this.pendingUpdatersLaneMap = []), f = 0;
                f < Bt;
                f++
              )
                s.push(/* @__PURE__ */ new Set())
            }
            switch (t) {
              case kh:
                this._debugRootType = a ? 'hydrateRoot()' : 'createRoot()'
                break
              case Qu:
                this._debugRootType = a ? 'hydrate()' : 'render()'
                break
            }
          }
          function bC(e, t, a, i, u, s, f, p, v, g) {
            var S = new bk(e, t, a, p, v),
              k = xk(t, s)
            ;(S.current = k), (k.stateNode = S)
            {
              var T = {
                element: i,
                isDehydrated: a,
                cache: null,
                // not enabled yet
                transitions: null,
                pendingSuspenseBoundaries: null,
              }
              k.memoizedState = T
            }
            return hg(k), S
          }
          var oS = '18.2.0'
          function kk(e, t, a) {
            var i =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : null
            return (
              xa(i),
              {
                // This tag allow us to uniquely identify this as a React Portal
                $$typeof: jr,
                key: i == null ? null : '' + i,
                children: e,
                containerInfo: t,
                implementation: a,
              }
            )
          }
          var sS, cS
          ;(sS = !1), (cS = {})
          function kC(e) {
            if (!e) return za
            var t = na(e),
              a = cR(t)
            if (t.tag === $) {
              var i = t.type
              if (rl(i)) return JS(t, i, a)
            }
            return a
          }
          function Dk(e, t) {
            {
              var a = na(e)
              if (a === void 0) {
                if (typeof e.render == 'function')
                  throw new Error(
                    'Unable to find node on an unmounted component.'
                  )
                var i = Object.keys(e).join(',')
                throw new Error(
                  'Argument appears to not be a ReactComponent. Keys: ' + i
                )
              }
              var u = la(a)
              if (u === null) return null
              if (u.mode & Kt) {
                var s = Xe(a) || 'Component'
                if (!cS[s]) {
                  cS[s] = !0
                  var f = fn
                  try {
                    kt(u),
                      a.mode & Kt
                        ? m(
                            '%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                            t,
                            t,
                            s
                          )
                        : m(
                            '%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                            t,
                            t,
                            s
                          )
                  } finally {
                    f ? kt(f) : gn()
                  }
                }
              }
              return u.stateNode
            }
          }
          function DC(e, t, a, i, u, s, f, p) {
            var v = !1,
              g = null
            return bC(e, t, v, g, a, i, u, s, f)
          }
          function _C(e, t, a, i, u, s, f, p, v, g) {
            var S = !0,
              k = bC(a, i, S, e, u, s, f, p, v)
            k.context = kC(null)
            var T = k.current,
              O = Wr(),
              j = ro(T),
              P = Kl(O, j)
            return (P.callback = t ?? null), Xu(T, P, j), Ob(k, j, O), k
          }
          function kp(e, t, a, i) {
            Dv(t, e)
            var u = t.current,
              s = Wr(),
              f = ro(u)
            kl(f)
            var p = kC(a)
            t.context === null ? (t.context = p) : (t.pendingContext = p),
              Jr &&
                fn !== null &&
                !sS &&
                ((sS = !0),
                m(
                  `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
                  Xe(fn) || 'Unknown'
                ))
            var v = Kl(s, f)
            ;(v.payload = {
              element: e,
            }),
              (i = i === void 0 ? null : i),
              i !== null &&
                (typeof i != 'function' &&
                  m(
                    'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                    i
                  ),
                (v.callback = i))
            var g = Xu(u, v, f)
            return g !== null && (Gn(g, u, f, s), Vh(g, u, f)), f
          }
          function Mm(e) {
            var t = e.current
            if (!t.child) return null
            switch (t.child.tag) {
              case K:
                return t.child.stateNode
              default:
                return t.child.stateNode
            }
          }
          function _k(e) {
            switch (e.tag) {
              case B: {
                var t = e.stateNode
                if (En(t)) {
                  var a = oy(t)
                  Fb(t, a)
                }
                break
              }
              case de: {
                tu(function () {
                  var u = va(e, Fe)
                  if (u !== null) {
                    var s = Wr()
                    Gn(u, e, Fe, s)
                  }
                })
                var i = Fe
                fS(e, i)
                break
              }
            }
          }
          function LC(e, t) {
            var a = e.memoizedState
            a !== null &&
              a.dehydrated !== null &&
              (a.retryLane = Vv(a.retryLane, t))
          }
          function fS(e, t) {
            LC(e, t)
            var a = e.alternate
            a && LC(a, t)
          }
          function Lk(e) {
            if (e.tag === de) {
              var t = Ru,
                a = va(e, t)
              if (a !== null) {
                var i = Wr()
                Gn(a, e, t, i)
              }
              fS(e, t)
            }
          }
          function Mk(e) {
            if (e.tag === de) {
              var t = ro(e),
                a = va(e, t)
              if (a !== null) {
                var i = Wr()
                Gn(a, e, t, i)
              }
              fS(e, t)
            }
          }
          function MC(e) {
            var t = Tv(e)
            return t === null ? null : t.stateNode
          }
          var NC = function (e) {
            return null
          }
          function Nk(e) {
            return NC(e)
          }
          var zC = function (e) {
            return !1
          }
          function zk(e) {
            return zC(e)
          }
          var UC = null,
            OC = null,
            AC = null,
            jC = null,
            HC = null,
            FC = null,
            VC = null,
            BC = null,
            PC = null
          {
            var YC = function (e, t, a) {
                var i = t[a],
                  u = _n(e) ? e.slice() : ut({}, e)
                return a + 1 === t.length
                  ? (_n(u) ? u.splice(i, 1) : delete u[i], u)
                  : ((u[i] = YC(e[i], t, a + 1)), u)
              },
              $C = function (e, t) {
                return YC(e, t, 0)
              },
              IC = function (e, t, a, i) {
                var u = t[i],
                  s = _n(e) ? e.slice() : ut({}, e)
                if (i + 1 === t.length) {
                  var f = a[i]
                  ;(s[f] = s[u]), _n(s) ? s.splice(u, 1) : delete s[u]
                } else
                  s[u] = IC(
                    // $FlowFixMe number or string is fine here
                    e[u],
                    t,
                    a,
                    i + 1
                  )
                return s
              },
              QC = function (e, t, a) {
                if (t.length !== a.length) {
                  A('copyWithRename() expects paths of the same length')
                  return
                } else
                  for (var i = 0; i < a.length - 1; i++)
                    if (t[i] !== a[i]) {
                      A(
                        'copyWithRename() expects paths to be the same except for the deepest key'
                      )
                      return
                    }
                return IC(e, t, a, 0)
              },
              WC = function (e, t, a, i) {
                if (a >= t.length) return i
                var u = t[a],
                  s = _n(e) ? e.slice() : ut({}, e)
                return (s[u] = WC(e[u], t, a + 1, i)), s
              },
              GC = function (e, t, a) {
                return WC(e, t, 0, a)
              },
              dS = function (e, t) {
                for (var a = e.memoizedState; a !== null && t > 0; )
                  (a = a.next), t--
                return a
              }
            ;(UC = function (e, t, a, i) {
              var u = dS(e, t)
              if (u !== null) {
                var s = GC(u.memoizedState, a, i)
                ;(u.memoizedState = s),
                  (u.baseState = s),
                  (e.memoizedProps = ut({}, e.memoizedProps))
                var f = va(e, Fe)
                f !== null && Gn(f, e, Fe, zt)
              }
            }),
              (OC = function (e, t, a) {
                var i = dS(e, t)
                if (i !== null) {
                  var u = $C(i.memoizedState, a)
                  ;(i.memoizedState = u),
                    (i.baseState = u),
                    (e.memoizedProps = ut({}, e.memoizedProps))
                  var s = va(e, Fe)
                  s !== null && Gn(s, e, Fe, zt)
                }
              }),
              (AC = function (e, t, a, i) {
                var u = dS(e, t)
                if (u !== null) {
                  var s = QC(u.memoizedState, a, i)
                  ;(u.memoizedState = s),
                    (u.baseState = s),
                    (e.memoizedProps = ut({}, e.memoizedProps))
                  var f = va(e, Fe)
                  f !== null && Gn(f, e, Fe, zt)
                }
              }),
              (jC = function (e, t, a) {
                ;(e.pendingProps = GC(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps)
                var i = va(e, Fe)
                i !== null && Gn(i, e, Fe, zt)
              }),
              (HC = function (e, t) {
                ;(e.pendingProps = $C(e.memoizedProps, t)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps)
                var a = va(e, Fe)
                a !== null && Gn(a, e, Fe, zt)
              }),
              (FC = function (e, t, a) {
                ;(e.pendingProps = QC(e.memoizedProps, t, a)),
                  e.alternate && (e.alternate.pendingProps = e.pendingProps)
                var i = va(e, Fe)
                i !== null && Gn(i, e, Fe, zt)
              }),
              (VC = function (e) {
                var t = va(e, Fe)
                t !== null && Gn(t, e, Fe, zt)
              }),
              (BC = function (e) {
                NC = e
              }),
              (PC = function (e) {
                zC = e
              })
          }
          function Uk(e) {
            var t = la(e)
            return t === null ? null : t.stateNode
          }
          function Ok(e) {
            return null
          }
          function Ak() {
            return fn
          }
          function jk(e) {
            var t = e.findFiberByHostInstance,
              a = y.ReactCurrentDispatcher
            return ed({
              bundleType: e.bundleType,
              version: e.version,
              rendererPackageName: e.rendererPackageName,
              rendererConfig: e.rendererConfig,
              overrideHookState: UC,
              overrideHookStateDeletePath: OC,
              overrideHookStateRenamePath: AC,
              overrideProps: jC,
              overridePropsDeletePath: HC,
              overridePropsRenamePath: FC,
              setErrorHandler: BC,
              setSuspenseHandler: PC,
              scheduleUpdate: VC,
              currentDispatcherRef: a,
              findHostInstanceByFiber: Uk,
              findFiberByHostInstance: t || Ok,
              // React Refresh
              findHostInstancesForRefresh: pk,
              scheduleRefresh: fk,
              scheduleRoot: dk,
              setRefreshHandler: ck,
              // Enables DevTools to append owner stacks to error messages in DEV mode.
              getCurrentFiber: Ak,
              // Enables DevTools to detect reconciler version rather than renderer version
              // which may not match for third party renderers.
              reconcilerVersion: oS,
            })
          }
          var XC =
            typeof reportError == 'function'
              ? // In modern browsers, reportError will dispatch an error event,
                // emulating an uncaught JavaScript error.
                reportError
              : function (e) {
                  console.error(e)
                }
          function pS(e) {
            this._internalRoot = e
          }
          ;(Nm.prototype.render = pS.prototype.render =
            function (e) {
              var t = this._internalRoot
              if (t === null)
                throw new Error('Cannot update an unmounted root.')
              {
                typeof arguments[1] == 'function'
                  ? m(
                      'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
                    )
                  : zm(arguments[1])
                  ? m(
                      "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
                    )
                  : typeof arguments[1] < 'u' &&
                    m(
                      'You passed a second argument to root.render(...) but it only accepts one argument.'
                    )
                var a = t.containerInfo
                if (a.nodeType !== dn) {
                  var i = MC(t.current)
                  i &&
                    i.parentNode !== a &&
                    m(
                      "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
                    )
                }
              }
              kp(e, t, null, null)
            }),
            (Nm.prototype.unmount = pS.prototype.unmount =
              function () {
                typeof arguments[0] == 'function' &&
                  m(
                    'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
                  )
                var e = this._internalRoot
                if (e !== null) {
                  this._internalRoot = null
                  var t = e.containerInfo
                  uC() &&
                    m(
                      'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.'
                    ),
                    tu(function () {
                      kp(null, e, null, null)
                    }),
                    GS(t)
                }
              })
          function Hk(e, t) {
            if (!zm(e))
              throw new Error(
                'createRoot(...): Target container is not a DOM element.'
              )
            qC(e)
            var a = !1,
              i = !1,
              u = '',
              s = XC
            t != null &&
              (t.hydrate
                ? A(
                    'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.'
                  )
                : typeof t == 'object' &&
                  t !== null &&
                  t.$$typeof === _i &&
                  m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
              t.unstable_strictMode === !0 && (a = !0),
              t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
              t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
              t.transitionCallbacks !== void 0 && t.transitionCallbacks)
            var f = DC(e, kh, null, a, i, u, s)
            xh(f.current, e)
            var p = e.nodeType === dn ? e.parentNode : e
            return Od(p), new pS(f)
          }
          function Nm(e) {
            this._internalRoot = e
          }
          function Fk(e) {
            e && Gv(e)
          }
          Nm.prototype.unstable_scheduleHydration = Fk
          function Vk(e, t, a) {
            if (!zm(e))
              throw new Error(
                'hydrateRoot(...): Target container is not a DOM element.'
              )
            qC(e),
              t === void 0 &&
                m(
                  'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)'
                )
            var i = a ?? null,
              u = (a != null && a.hydratedSources) || null,
              s = !1,
              f = !1,
              p = '',
              v = XC
            a != null &&
              (a.unstable_strictMode === !0 && (s = !0),
              a.identifierPrefix !== void 0 && (p = a.identifierPrefix),
              a.onRecoverableError !== void 0 && (v = a.onRecoverableError))
            var g = _C(t, null, e, kh, i, s, f, p, v)
            if ((xh(g.current, e), Od(e), u))
              for (var S = 0; S < u.length; S++) {
                var k = u[S]
                GR(g, k)
              }
            return new Nm(g)
          }
          function zm(e) {
            return !!(
              e &&
              (e.nodeType === Sr ||
                e.nodeType === Da ||
                e.nodeType === gl ||
                !lt)
            )
          }
          function Dp(e) {
            return !!(
              e &&
              (e.nodeType === Sr ||
                e.nodeType === Da ||
                e.nodeType === gl ||
                (e.nodeType === dn &&
                  e.nodeValue === ' react-mount-point-unstable '))
            )
          }
          function qC(e) {
            e.nodeType === Sr &&
              e.tagName &&
              e.tagName.toUpperCase() === 'BODY' &&
              m(
                'createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.'
              ),
              Qd(e) &&
                (e._reactRootContainer
                  ? m(
                      'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.'
                    )
                  : m(
                      'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.'
                    ))
          }
          var Bk = y.ReactCurrentOwner,
            KC
          KC = function (e) {
            if (e._reactRootContainer && e.nodeType !== dn) {
              var t = MC(e._reactRootContainer.current)
              t &&
                t.parentNode !== e &&
                m(
                  'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
                )
            }
            var a = !!e._reactRootContainer,
              i = vS(e),
              u = !!(i && $u(i))
            u &&
              !a &&
              m(
                'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
              ),
              e.nodeType === Sr &&
                e.tagName &&
                e.tagName.toUpperCase() === 'BODY' &&
                m(
                  'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
                )
          }
          function vS(e) {
            return e
              ? e.nodeType === Da
                ? e.documentElement
                : e.firstChild
              : null
          }
          function ZC() {}
          function Pk(e, t, a, i, u) {
            if (u) {
              if (typeof i == 'function') {
                var s = i
                i = function () {
                  var T = Mm(f)
                  s.call(T)
                }
              }
              var f = _C(
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
                '',
                // identifierPrefix
                ZC
              )
              ;(e._reactRootContainer = f), xh(f.current, e)
              var p = e.nodeType === dn ? e.parentNode : e
              return Od(p), tu(), f
            } else {
              for (var v; (v = e.lastChild); ) e.removeChild(v)
              if (typeof i == 'function') {
                var g = i
                i = function () {
                  var T = Mm(S)
                  g.call(T)
                }
              }
              var S = DC(
                e,
                Qu,
                null,
                // hydrationCallbacks
                !1,
                // isStrictMode
                !1,
                // concurrentUpdatesByDefaultOverride,
                '',
                // identifierPrefix
                ZC
              )
              ;(e._reactRootContainer = S), xh(S.current, e)
              var k = e.nodeType === dn ? e.parentNode : e
              return (
                Od(k),
                tu(function () {
                  kp(t, S, a, i)
                }),
                S
              )
            }
          }
          function Yk(e, t) {
            e !== null &&
              typeof e != 'function' &&
              m(
                '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                t,
                e
              )
          }
          function Um(e, t, a, i, u) {
            KC(a), Yk(u === void 0 ? null : u, 'render')
            var s = a._reactRootContainer,
              f
            if (!s) f = Pk(a, t, e, u, i)
            else {
              if (((f = s), typeof u == 'function')) {
                var p = u
                u = function () {
                  var v = Mm(f)
                  p.call(v)
                }
              }
              kp(t, f, e, u)
            }
            return Mm(f)
          }
          function $k(e) {
            {
              var t = Bk.current
              if (t !== null && t.stateNode !== null) {
                var a = t.stateNode._warnedAboutRefsInRender
                a ||
                  m(
                    '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
                    Mt(t.type) || 'A component'
                  ),
                  (t.stateNode._warnedAboutRefsInRender = !0)
              }
            }
            return e == null
              ? null
              : e.nodeType === Sr
              ? e
              : Dk(e, 'findDOMNode')
          }
          function Ik(e, t, a) {
            if (
              (m(
                "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
              ),
              !Dp(t))
            )
              throw new Error('Target container is not a DOM element.')
            {
              var i = Qd(t) && t._reactRootContainer === void 0
              i &&
                m(
                  'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?'
                )
            }
            return Um(null, e, t, !0, a)
          }
          function Qk(e, t, a) {
            if (
              (m(
                "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
              ),
              !Dp(t))
            )
              throw new Error('Target container is not a DOM element.')
            {
              var i = Qd(t) && t._reactRootContainer === void 0
              i &&
                m(
                  'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?'
                )
            }
            return Um(null, e, t, !1, a)
          }
          function Wk(e, t, a, i) {
            if (
              (m(
                "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
              ),
              !Dp(a))
            )
              throw new Error('Target container is not a DOM element.')
            if (e == null || !_o(e))
              throw new Error('parentComponent must be a valid React Component')
            return Um(e, t, a, !1, i)
          }
          function Gk(e) {
            if (!Dp(e))
              throw new Error(
                'unmountComponentAtNode(...): Target container is not a DOM element.'
              )
            {
              var t = Qd(e) && e._reactRootContainer === void 0
              t &&
                m(
                  'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?'
                )
            }
            if (e._reactRootContainer) {
              {
                var a = vS(e),
                  i = a && !$u(a)
                i &&
                  m(
                    "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
                  )
              }
              return (
                tu(function () {
                  Um(null, null, e, !1, function () {
                    ;(e._reactRootContainer = null), GS(e)
                  })
                }),
                !0
              )
            } else {
              {
                var u = vS(e),
                  s = !!(u && $u(u)),
                  f =
                    e.nodeType === Sr &&
                    Dp(e.parentNode) &&
                    !!e.parentNode._reactRootContainer
                s &&
                  m(
                    "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
                    f
                      ? 'You may have accidentally passed in a React root node instead of its container.'
                      : 'Instead, have the parent component update its state and rerender in order to remove this component.'
                  )
              }
              return !1
            }
          }
          ye(_k),
            Pv(Lk),
            $o(Mk),
            yd(sa),
            $v(Bo),
            (typeof Map != 'function' || // $FlowIssue Flow incorrectly thinks Map has no prototype
              Map.prototype == null ||
              typeof Map.prototype.forEach != 'function' ||
              typeof Set != 'function' || // $FlowIssue Flow incorrectly thinks Set has no prototype
              Set.prototype == null ||
              typeof Set.prototype.clear != 'function' ||
              typeof Set.prototype.forEach != 'function') &&
              m(
                'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills'
              ),
            Ev(KE),
            Vs(I0, Vb, tu)
          function Xk(e, t) {
            var a =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : null
            if (!zm(t))
              throw new Error('Target container is not a DOM element.')
            return kk(e, t, null, a)
          }
          function qk(e, t, a, i) {
            return Wk(e, t, a, i)
          }
          var hS = {
            usingClientEntryPoint: !1,
            // Keep in sync with ReactTestUtils.js.
            // This is an array for better minification.
            Events: [$u, Pc, Ch, Fs, bo, I0],
          }
          function Kk(e, t) {
            return (
              hS.usingClientEntryPoint ||
                m(
                  'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
                ),
              Hk(e, t)
            )
          }
          function Zk(e, t, a) {
            return (
              hS.usingClientEntryPoint ||
                m(
                  'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
                ),
              Vk(e, t, a)
            )
          }
          function Jk(e) {
            return (
              uC() &&
                m(
                  'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
                ),
              tu(e)
            )
          }
          var eD = jk({
            findFiberByHostInstance: es,
            bundleType: 1,
            version: oS,
            rendererPackageName: 'react-dom',
          })
          if (
            !eD &&
            sn &&
            window.top === window.self &&
            ((navigator.userAgent.indexOf('Chrome') > -1 &&
              navigator.userAgent.indexOf('Edge') === -1) ||
              navigator.userAgent.indexOf('Firefox') > -1)
          ) {
            var JC = window.location.protocol
            ;/^(https?|file):$/.test(JC) &&
              console.info(
                '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
                  (JC === 'file:'
                    ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
                    : ''),
                'font-weight:bold'
              )
          }
          ;(Sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hS),
            (Sa.createPortal = Xk),
            (Sa.createRoot = Kk),
            (Sa.findDOMNode = $k),
            (Sa.flushSync = Jk),
            (Sa.hydrate = Ik),
            (Sa.hydrateRoot = Zk),
            (Sa.render = Qk),
            (Sa.unmountComponentAtNode = Gk),
            (Sa.unstable_batchedUpdates = I0),
            (Sa.unstable_renderSubtreeIntoContainer = qk),
            (Sa.version = oS),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                'function' &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                new Error()
              )
        })()),
    Sa
  )
}
function oE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  ) {
    if (process.env.NODE_ENV !== 'production') throw new Error('^_^')
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oE)
    } catch (_) {
      console.error(_)
    }
  }
}
process.env.NODE_ENV === 'production'
  ? (oE(), (SS.exports = sD()))
  : (SS.exports = cD())
var sE = SS.exports,
  Np = sE
if (process.env.NODE_ENV === 'production')
  (zp.createRoot = Np.createRoot), (zp.hydrateRoot = Np.hydrateRoot)
else {
  var Am = Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ;(zp.createRoot = function (_, E) {
    Am.usingClientEntryPoint = !0
    try {
      return Np.createRoot(_, E)
    } finally {
      Am.usingClientEntryPoint = !1
    }
  }),
    (zp.hydrateRoot = function (_, E, y) {
      Am.usingClientEntryPoint = !0
      try {
        return Np.hydrateRoot(_, E, y)
      } finally {
        Am.usingClientEntryPoint = !1
      }
    })
}
function fD() {
  return /* @__PURE__ */ z.jsxs(z.Fragment, {
    children: [
      /* @__PURE__ */ z.jsx('div', {
        className: 'flex bg-slate-100',
        children: 'holiwi',
      }),
      /* @__PURE__ */ z.jsx('div', { children: 'jkass' }),
    ],
  })
}
var cE = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
;(function (_) {
  ;(function () {
    var E = {}.hasOwnProperty
    function y() {
      for (var D = [], x = 0; x < arguments.length; x++) {
        var A = arguments[x]
        if (A) {
          var m = typeof A
          if (m === 'string' || m === 'number') D.push(A)
          else if (Array.isArray(A)) {
            if (A.length) {
              var V = y.apply(null, A)
              V && D.push(V)
            }
          } else if (m === 'object') {
            if (
              A.toString !== Object.prototype.toString &&
              !A.toString.toString().includes('[native code]')
            ) {
              D.push(A.toString())
              continue
            }
            for (var H in A) E.call(A, H) && A[H] && D.push(H)
          }
        }
      }
      return D.join(' ')
    }
    _.exports ? ((y.default = y), (_.exports = y)) : (window.classNames = y)
  })()
})(cE)
var dD = cE.exports
const Ie = /* @__PURE__ */ aD(dD)
function fE({
  children: _,
  className: E,
  component: y,
  elevation: D = 4,
  square: x,
  variant: A = 'elevation',
  ...m
}) {
  const V = y || 'div'
  return /* @__PURE__ */ z.jsx(V, {
    className: Ie(' w-full overflow-auto', {
      rounded: !x,
      'shadow-1': D === 1 && A === 'elevation',
      'shadow-2': D === 2 && A === 'elevation',
      'shadow-3': D === 3 && A === 'elevation',
      'shadow-4': D === 4 && A === 'elevation',
      'shadow-5': D === 5 && A === 'elevation',
      'shadow-6': D === 6 && A === 'elevation',
      'shadow-7': D === 7 && A === 'elevation',
      'shadow-8': D === 8 && A === 'elevation',
      'shadow-9': D === 9 && A === 'elevation',
      'shadow-10': D === 10 && A === 'elevation',
      'shadow-11': D === 11 && A === 'elevation',
      'shadow-12': D === 12 && A === 'elevation',
      'shadow-13': D === 13 && A === 'elevation',
      'shadow-14': D === 14 && A === 'elevation',
      'border border-neutral-400': A === 'outlined',
      [E || '']: E,
    }),
    ...m,
    children: _,
  })
}
function OD() {
  return /* @__PURE__ */ z.jsx('div', {
    children: /* @__PURE__ */ z.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'icon icon-tabler icon-tabler-star',
      width: 16,
      height: 16,
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: [
        /* @__PURE__ */ z.jsx('path', {
          stroke: 'none',
          d: 'M0 0h24v24H0z',
          fill: 'none',
        }),
        /* @__PURE__ */ z.jsx('path', {
          d: 'M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z',
        }),
      ],
    }),
  })
}
function AD() {
  return /* @__PURE__ */ z.jsx('div', {
    children: /* @__PURE__ */ z.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'icon icon-tabler icon-tabler-star',
      width: 16,
      height: 16,
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'gray',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: [
        /* @__PURE__ */ z.jsx('path', {
          stroke: 'none',
          d: 'M0 0h24v24H0z',
          fill: 'none',
        }),
        /* @__PURE__ */ z.jsx('path', {
          d: 'M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z',
        }),
      ],
    }),
  })
}
function jD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-caret-down',
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M6 10l6 6 6-6H6' }),
    ],
  })
}
function HD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-caret-up',
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M18 14l-6-6-6 6h12' }),
    ],
  })
}
function FD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-left',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M15 6l-6 6 6 6' }),
    ],
  })
}
function VD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-left',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'gray',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M15 6l-6 6 6 6' }),
    ],
  })
}
function BD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-right',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M9 6l6 6-6 6' }),
    ],
  })
}
function PD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-right',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'gray',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M9 6l6 6-6 6' }),
    ],
  })
}
function YD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-left-pipe',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M7 6v12M18 6l-6 6 6 6' }),
    ],
  })
}
function $D() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-left-pipe',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'gray',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M7 6v12M18 6l-6 6 6 6' }),
    ],
  })
}
function ID() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-right-pipe',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M6 6l6 6-6 6M17 5v13' }),
    ],
  })
}
function QD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-chevron-right-pipe',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'gray',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M6 6l6 6-6 6M17 5v13' }),
    ],
  })
}
function WD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-arrow-down',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M12 5v14M18 13l-6 6M6 13l6 6' }),
    ],
  })
}
function GD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-arrow-up',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', { d: 'M0 0h24v24H0z', stroke: 'none' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M12 5v14M18 11l-6-6M6 11l6-6' }),
    ],
  })
}
function pD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-circle-check',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    'stroke-width': 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', {
        stroke: 'none',
        d: 'M0 0h24v24H0z',
        fill: 'none',
      }),
      /* @__PURE__ */ z.jsx('path', {
        d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0',
      }),
      /* @__PURE__ */ z.jsx('path', { d: 'M9 12l2 2l4 -4' }),
    ],
  })
}
function vD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-alert-triangle',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    'stroke-width': 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', {
        stroke: 'none',
        d: 'M0 0h24v24H0z',
        fill: 'none',
      }),
      /* @__PURE__ */ z.jsx('path', {
        d: 'M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z',
      }),
      /* @__PURE__ */ z.jsx('path', { d: 'M12 9v4' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M12 17h.01' }),
    ],
  })
}
function hD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-exclamation-circle',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    'stroke-width': 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', {
        stroke: 'none',
        d: 'M0 0h24v24H0z',
        fill: 'none',
      }),
      /* @__PURE__ */ z.jsx('path', {
        d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0',
      }),
      /* @__PURE__ */ z.jsx('path', { d: 'M12 9v4' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M12 16v.01' }),
    ],
  })
}
function mD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-info-circle',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    'stroke-width': 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', {
        stroke: 'none',
        d: 'M0 0h24v24H0z',
        fill: 'none',
      }),
      /* @__PURE__ */ z.jsx('path', {
        d: 'M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0',
      }),
      /* @__PURE__ */ z.jsx('path', { d: 'M12 9h.01' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M11 12h1v4h1' }),
    ],
  })
}
function yD() {
  return /* @__PURE__ */ z.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon icon-tabler icon-tabler-x',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    'stroke-width': 2,
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      /* @__PURE__ */ z.jsx('path', {
        stroke: 'none',
        d: 'M0 0h24v24H0z',
        fill: 'none',
      }),
      /* @__PURE__ */ z.jsx('path', { d: 'M18 6l-12 12' }),
      /* @__PURE__ */ z.jsx('path', { d: 'M6 6l12 12' }),
    ],
  })
}
function gD({
  children: _,
  variant: E = 'text',
  onClick: y,
  color: D = 'primary',
  disabled: x,
  href: A,
  disableElevation: m,
  disableRipple: V,
  size: H = 'medium',
  startIcon: $,
  endIcon: te,
  className: B,
  classes: W,
  component: K,
  fullWidth: re,
  id: Re,
  ...se
}) {
  const [_e, ge] = Tn(!1),
    [ce, He] = Tn(),
    de = K || (A ? 'a' : 'button'),
    Ee = (nt) => {
      if (A !== void 0) return
      const ft = nt.currentTarget.getBoundingClientRect(),
        Pe = {
          x: nt.clientX - ft.left,
          y: nt.clientY - ft.top,
        }
      He({ x: Pe.x, y: Pe.y }),
        V ||
          (ge(!0),
          setTimeout(() => {
            ge(!1)
          }, 600)),
        y && y(nt)
    },
    Ve = (nt) => {
      if (!A) return
      const ft = nt.currentTarget.getBoundingClientRect(),
        Pe = {
          x: nt.clientX - ft.left,
          y: nt.clientY - ft.top,
        }
      He({ x: Pe.x, y: Pe.y }),
        V ||
          (ge(!0),
          setTimeout(() => {
            ge(!1)
          }, 600)),
        y && y(nt)
    }
  return /* @__PURE__ */ z.jsxs(de, {
    ...se,
    disabled: x,
    href: A,
    id: Re,
    onClick: A ? Ve : Ee,
    className: Ie(
      'inline-flex items-center  justify-center  relative font-base  outline-none font-medium text-sm tracking-wide uppercase rounded-[4px] min-w-[64px]',
      'overflow-hidden',
      {
        'w-full': re,
        'py-[6px] px-2': H === 'medium' && E === 'text',
        'py-1 px-[5px]': H === 'small' && E === 'text',
        'py-2 px-[12px]': H === 'large' && E === 'text',
        'py-[5px] px-[15px]': H === 'medium' && E === 'outlined',
        'py-[3px] px-[9px]': H === 'small' && E === 'outlined',
        'py-[7px] px-[21px]': H === 'large' && E === 'outlined',
        'py-[6px] px-4': H === 'medium' && E === 'contained',
        'py-1 px-[10px]': H === 'small' && E === 'contained',
        'py-[8px] px-[22px]': H === 'large' && E === 'contained',
        ' hover:transition-all hover:duration-200 hover:linear  bg-transparent hover:bg-opacity-10 ':
          (E === 'outlined' || E === 'text') && !x,
        ' hover:transition-all hover:duration-200 hover:linear  hover:bg-opacity-10 ':
          E === 'contained' && !x,
        'border-primary-color border text-primary-color hover:bg-primary-color':
          D === 'primary' && E === 'outlined' && !x,
        'border-secondary-color border text-secondary-color hover:bg-secondary-color':
          D === 'secondary' && E === 'outlined' && !x,
        'border-error-color border text-error-color hover:bg-error-color':
          D === 'error' && E === 'outlined' && !x,
        'border-warning-color border text-warning-color hover:bg-warning-color':
          D === 'warning' && E === 'outlined' && !x,
        'border-success-color border text-success-color hover:bg-success-color':
          D === 'success' && E === 'outlined' && !x,
        'border-info-color border text-info-color hover:bg-info-color':
          D === 'info' && E === 'outlined' && !x,
        'border-inherit border text-inherit hover:bg-inherit':
          D === 'inherit' && E === 'outlined' && !x,
        'bg-primary-color text-white bg-opacity-90 hover:bg-opacity-100':
          D === 'primary' && E === 'contained' && !x,
        'bg-secondary-color text-white bg-opacity-90 hover:bg-opacity-100':
          D === 'secondary' && E === 'contained' && !x,
        'bg-error-color text-white bg-opacity-90 hover:bg-opacity-100':
          D === 'error' && E === 'contained' && !x,
        'bg-warning-color text-white bg-opacity-90 hover:bg-opacity-100':
          D === 'warning' && E === 'contained' && !x,
        'bg-success-color text-white bg-opacity-90 hover:bg-opacity-100':
          D === 'success' && E === 'contained' && !x,
        'bg-info-color text-white bg-opacity-90 hover:bg-opacity-100':
          D === 'info' && E === 'contained' && !x,
        'bg-inherit text-white bg-opacity-90 hover:bg-opacity-100':
          D === 'inherit' && E === 'contained' && !x,
        'text-primary-color hover:bg-primary-color':
          D === 'primary' && E === 'text' && !x,
        'text-secondary-color hover:bg-secondary-color':
          D === 'secondary' && E === 'text' && !x,
        'text-error-color hover:bg-error-color':
          D === 'error' && E === 'text' && !x,
        'text-warning-color hover:bg-warning-color':
          D === 'warning' && E === 'text' && !x,
        'text-info-color hover:bg-info-color':
          D === 'info' && E === 'text' && !x,
        'text-success-color hover:bg-success-color':
          D === 'success' && E === 'text' && !x,
        'text-inherit hover:bg-inherit': D === 'inherit' && E === 'text' && !x,
        'text-gray-400 py-[6px] px-2': x,
        'bg-gray-200': x && E === 'contained',
        'border-gray-200 border': x && E === 'outlined',
        'shadow shadow-black': E === 'contained' && !x && !m,
        [B || '']: B,
        [(W == null ? void 0 : W.buttonClassName) || '']:
          W == null ? void 0 : W.buttonClassName,
      }
    ),
    children: [
      /* @__PURE__ */ z.jsx('button', {}),
      $ &&
        /* @__PURE__ */ z.jsx('span', {
          className: Ie('mr-2 -ml-1'),
          children: $,
        }),
      _,
      te &&
        /* @__PURE__ */ z.jsx('span', {
          className: Ie('-mr-1 ml-2'),
          children: te,
        }),
      _e &&
        /* @__PURE__ */ z.jsx('span', {
          style: {
            top: ce == null ? void 0 : ce.y,
            left: ce == null ? void 0 : ce.x,
            transform: 'translate(-50%, -50%)',
          },
          className: Ie({
            'animate-ripple absolute inline-flex w-full h-full   rounded-full bg-opacity-25 origin-center':
              E === 'text' || E === 'outlined',
            'bg-primary-color':
              (E === 'outlined' || E === 'text') && D === 'primary',
            'bg-secondary-color':
              (E === 'outlined' || E === 'text') && D === 'secondary',
            'bg-error-color':
              (E === 'outlined' || E === 'text') && D === 'error',
            'bg-warning-color':
              (E === 'outlined' || E === 'text') && D === 'warning',
            'bg-info-color': (E === 'outlined' || E === 'text') && D === 'info',
            'bg-success-color':
              (E === 'outlined' || E === 'text') && D === 'success',
            'bg-inherit': (E === 'outlined' || E === 'text') && D === 'inherit',
            'animate-ripple absolute inline-flex w-full h-full  bg-white rounded-full bg-opacity-25 origin-center':
              E === 'contained',
            [(W == null ? void 0 : W.rippleSpanClassName) || '']:
              W == null ? void 0 : W.rippleSpanClassName,
          }),
        }),
    ],
  })
}
function XD({
  children: _,
  severity: E = 'success',
  action: y,
  onClose: D,
  variant: x = 'standard',
  className: A,
  classes: m,
  closeText: V = 'Close',
  icon: H,
  iconMapping: $,
  slots: te,
  slotProps: B,
  ...W
}) {
  const K = E === 'warning' && H !== !1,
    re = E === 'success' && H !== !1,
    Re = E === 'error' && H !== !1,
    se = E === 'info' && H !== !1,
    _e = te != null && te.closeButton ? te.closeButton : gD,
    ge = te != null && te.closeIcon ? te.closeIcon : yD
  return /* @__PURE__ */ z.jsxs(fE, {
    className: Ie(
      'flex py-[6px] px-4 font-base text-sm font-normal items-center ',
      {
        'bg-green-100 text-success-color': E === 'success' && x === 'standard',
        'bg-yellow-100 text-warning-color': E === 'warning' && x === 'standard',
        'bg-red-100 text-error-color': E === 'error' && x === 'standard',
        'bg-blue-100 text-info-color': E === 'info' && x === 'standard',
        'border-success-color bg-white border text-success-color':
          E === 'success' && x === 'outlined',
        'border-warning-color bg-white border text-warning-color':
          E === 'warning' && x === 'outlined',
        'border-error-color border bg-white text-error-color':
          E === 'error' && x === 'outlined',
        'border-info-color border bg-white text-info-color':
          E === 'info' && x === 'outlined',
        'bg-success-color text-white': E === 'success' && x === 'filled',
        'bg-warning-color text-white': E === 'warning' && x === 'filled',
        'bg-error-color text-white': E === 'error' && x === 'filled',
        'bg-info-color text-white': E === 'info' && x === 'filled',
        [A || '']: A,
        [(m == null ? void 0 : m.Paper) || '']: m == null ? void 0 : m.Paper,
      }
    ),
    elevation: 0,
    ...W,
    children: [
      /* @__PURE__ */ z.jsxs('div', {
        className: Ie('mr-[12px] py-[7px] flex opacity-90', {
          [(m == null ? void 0 : m.IconComponent) || '']:
            m == null ? void 0 : m.IconComponent,
        }),
        children: [
          re &&
            ($ != null && $.success
              ? $.success
              : H !== void 0
              ? H
              : /* @__PURE__ */ z.jsx(pD, {})),
          K &&
            ($ != null && $.warning
              ? $.warning
              : H !== void 0
              ? H
              : /* @__PURE__ */ z.jsx(vD, {})),
          Re &&
            ($ != null && $.error
              ? $.error
              : H !== void 0
              ? H
              : /* @__PURE__ */ z.jsx(hD, {})),
          se &&
            ($ != null && $.info
              ? $.info
              : H !== void 0
              ? H
              : /* @__PURE__ */ z.jsx(mD, {})),
        ],
      }),
      /* @__PURE__ */ z.jsx('div', {
        className: Ie('py-2 min-w-0 overflow-auto text-inherit', {
          [(m == null ? void 0 : m.ChildrenComponent) || '']:
            m == null ? void 0 : m.ChildrenComponent,
        }),
        children: _,
      }),
      y &&
        /* @__PURE__ */ z.jsx('div', {
          className: Ie('ml-auto -mr-2 pl-4 '),
          children: y,
        }),
      !y &&
        D &&
        /* @__PURE__ */ z.jsx('div', {
          className: Ie('ml-auto -mr-2 pl-4 '),
          children: /* @__PURE__ */ z.jsx(_e, {
            className: Ie('rounded-full w-9 h-9  [div>&]:min-w-0', {
              '[div>&]:px-0 [div>&]:shadow-none': x === 'filled',
            }),
            color: E,
            variant: x === 'filled' ? 'contained' : 'text',
            title: V,
            onClick: (ce) => D(ce),
            ...(B == null ? void 0 : B.closeButton),
            children: /* @__PURE__ */ z.jsx(ge, {
              ...(B == null ? void 0 : B.closeIcon),
            }),
          }),
        }),
    ],
  })
}
function qD({ children: _, className: E, ...y }) {
  return /* @__PURE__ */ z.jsx('div', {
    className: Ie('-mt-[2px] mb-[5.6px] font-base font-medium text-base', {
      [E || '']: E,
    }),
    ...y,
    children: _,
  })
}
function KD({
  children: _,
  size: E = 'medium',
  onClick: y,
  href: D,
  disableRipple: x,
  // color='primary',
  disabled: A,
  edge: m,
  className: V,
  classes: H,
  ...$
}) {
  const [te, B] = Tn(!1),
    [W, K] = Tn(),
    re = D ? 'a' : 'button',
    Re = (_e) => {
      if (D !== void 0) return
      const ce = _e.currentTarget.getBoundingClientRect(),
        He = {
          x: _e.clientX - ce.left,
          y: _e.clientY - ce.top,
        }
      K({ x: He.x, y: He.y }),
        x ||
          (B(!0),
          setTimeout(() => {
            B(!1)
          }, 600)),
        y && y(_e)
    },
    se = (_e) => {
      if (!D) return
      const ce = _e.currentTarget.getBoundingClientRect(),
        He = {
          x: _e.clientX - ce.left,
          y: _e.clientY - ce.top,
        }
      K({ x: He.x, y: He.y }),
        x ||
          (B(!0),
          setTimeout(() => {
            B(!1)
          }, 600)),
        y && y(_e)
    }
  return /* @__PURE__ */ z.jsxs(re, {
    disabled: A,
    href: D,
    onClick: D ? se : Re,
    className: Ie(
      'hover:rounded-full  inline-flex items-center  justify-center  relative overflow-hidden',
      {
        '-mr-3': m === 'end',
        '-ml-3': m === 'start',
        'p-2': E === 'medium',
        'p-[5px]': E === 'small',
        'p-3': E === 'large',
        'rounded-full': te,
        'hover:transition-all hover:duration-200 hover:linear hover:bg-slate-200':
          !A,
        [V || '']: V,
        [(H == null ? void 0 : H.buttonClassName) || '']:
          H == null ? void 0 : H.buttonClassName,
      }
    ),
    ...$,
    children: [
      _,
      te &&
        /* @__PURE__ */ z.jsx('span', {
          style: {
            top: W == null ? void 0 : W.y,
            left: W == null ? void 0 : W.x,
            transform: 'translate(-50%, -50%)',
          },
          className: Ie(
            'animate-ripple  absolute inline-flex w-full h-full bg-slate-400  rounded-full bg-opacity-25 origin-center',
            {
              [(H == null ? void 0 : H.rippleSpanClassName) || '']:
                H == null ? void 0 : H.rippleSpanClassName,
            }
          ),
        }),
    ],
  })
}
function jm({ onClickaway: _, children: E }) {
  const y = ms(null),
    D = (x) => {
      y.current &&
        x.target instanceof Node &&
        !y.current.contains(x.target) &&
        _(x)
    }
  return (
    Up(
      () => (
        document.addEventListener('click', D),
        () => {
          document.removeEventListener('click', D)
        }
      ),
      [D]
    ), // <div className="inline-flex" ref={targetRef}>
    /* @__PURE__ */ z.jsx(z.Fragment, {
      children: gs.cloneElement(E, { ref: y }),
    })
  )
}
function ZD({
  children: _,
  open: E,
  className: y,
  collapsedSize: D,
  component: x,
  easing: A,
  timeout: m = 500,
}) {
  const V = ms(null),
    [H, $] = Tn(0)
  Up(() => {
    var B, W
    ;(B = V.current) != null &&
      B.offsetHeight &&
      $((W = V.current) == null ? void 0 : W.offsetHeight)
  }, [E])
  const te = x || 'div'
  return /* @__PURE__ */ z.jsx(te, {
    style: {
      height: E ? H : D || 0,
    },
    className: Ie('transition-all overflow-hidden', {
      [y || '']: y,
      ' min-h-0  ': E,
      'min-h-0 ': !E,
      'ease-linear': A === 'ease-linear',
      'ease-in': A === 'ease-in',
      'ease-out': A === 'ease-out',
      'ease-in-out': A === 'ease-in-out',
      'duration-0': m === 0,
      'duration-75': m === 75,
      'duration-100': m === 100,
      'duration-150': m === 150,
      'duration-200': m === 200,
      'duration-300': m === 300,
      'duration-500': m === 500,
      'duration-700': m === 700,
      'duration-1000': m === 1e3,
    }),
    children: /* @__PURE__ */ z.jsx(z.Fragment, {
      children: gs.cloneElement(_, { ref: V }),
    }),
  })
}
const Hm = Op({})
function JD({
  children: _,
  onSubmit: E,
  variant: y = 'outlined',
  margin: D = 'normal',
  fullWidth: x,
  className: A,
  component: m,
  disabled: V,
  error: H,
  color: $ = H ? 'error' : 'primary',
  focused: te,
  hiddenLabel: B,
  required: W,
}) {
  const [K, re] = Tn(!1),
    [Re, se] = Tn(''),
    [_e, ge] = Tn(),
    ce = m || 'form'
  return /* @__PURE__ */ z.jsx(jm, {
    onClickaway: () => {
      _e || re(!1)
    },
    children: /* @__PURE__ */ z.jsx(ce, {
      className: Ie('relative inline-flex flex-col', {
        'mt-2 mb-1': D === 'dense',
        'mt-4 mb-2': D === 'normal',
        'w-full': x,
        [A || '']: A,
      }),
      onFocus: () => re(!0),
      onSubmit: E,
      children: /* @__PURE__ */ z.jsx(Hm.Provider, {
        value: {
          contextTouched: K,
          contextColor: $,
          setContextValue: ge,
          contextLabel: Re,
          setLabel: se,
          contextVariant: y,
          contextDisabled: V,
          focused: te,
          hiddenLabel: B,
          contextRequired: W,
        },
        children: _,
      }),
    }),
  })
}
function SD({
  children: _,
  className: E,
  component: y,
  componentProps: D,
  disabled: x,
  error: A,
  margin: m,
  id: V,
}) {
  const H = y || 'p',
    { contextVariant: $, contextColor: te, contextDisabled: B } = ys(Hm)
  return (
    (x = B || x),
    (A = te === 'error' ? !0 : A),
    /* @__PURE__ */ z.jsx(H, {
      id: V,
      className: Ie('text-xs text-left tracking-wide', {
        'mx-3': $,
        'text-error-color': A,
        'mt-2 mb-1': m === 'dense',
        'opacity-30': x,
        [E || '']: E,
      }),
      ...D,
      children: _,
    })
  )
}
function xD({
  autocomplete: _,
  autoFocus: E,
  id: y,
  error: D,
  color: x = D ? 'error' : 'primary',
  classes: A,
  components: m,
  componentsProps: V,
  defaultValue: H,
  disabled: $,
  disaledUndeline: te,
  endAdornment: B,
  inputComponent: W,
  inputProps: K,
  fullWidth: re,
  margin: Re,
  multiline: se,
  inputRef: _e,
  multilineTextAreaRef: ge,
  rows: ce,
  startAdornment: He,
  name: de,
  value: Ee,
  placeholder: Ve,
  readonly: nt,
  required: ct,
  type: ft,
  shrink: Pe,
  onChange: At,
  onFocus: Ne,
  className: Ge,
  variant: Je = 'standard',
  size: rt = 'medium',
  label: $t,
}) {
  const [ee, we] = Tn(!1),
    le = (m == null ? void 0 : m.Input) || W,
    et = m == null ? void 0 : m.Container,
    {
      contextVariant: lt,
      contextTouched: jt,
      contextLabel: bt,
      contextRequired: Ct,
      setContextValue: en,
      contextColor: ir,
      contextDisabled: mn,
      focused: jn,
      hiddenLabel: qr,
    } = ys(Hm)
  ;(E = jn || E),
    (Je = lt || Je),
    (x = ir || x),
    (Pe = jt || Pe),
    ($t = bt || $t),
    ($ = mn || $),
    (ct = Ct || ct)
  const Xn = et || 'div',
    yr = et
      ? { ...(V == null ? void 0 : V.container) }
      : {
          className: Ie('input-custom group inline-flex flex relative ', {
            'hover:before:border-t-2 before:border-black after:border-b-2 before:border-t':
              !te && !$ && Je !== 'outlined',
            'mt-4': $t && Je === 'standard',
            'w-full': re,
            'bg-gray-100 rounded-t-sm': Je === 'filled',
            'px-[14px] py-4': se && Je === 'outlined',
            'px-3 pt-[25px] pb-2': se && Je === 'filled',
            'mt-2 mb-1': Re === 'dense',
            [`after:border-b-${x}-color`]: x,
            'after:border-b-primary-color': x === 'primary',
            'after:border-b-secondary-color': x === 'secondary',
            'after:border-b-error-color': x === 'error',
            'after:border-b-warning-color': x === 'warning',
            'after:border-b-info-color': x === 'info',
            'after:border-b-success-color': x === 'success',
            'input-custom-none ': !ee,
            'input-custom-normal': ee,
            [(A == null ? void 0 : A.constainerClassName) || '']:
              A == null ? void 0 : A.constainerClassName,
            [Ge || '']: Ge,
          }),
        },
    sn = (Ht) => {
      en && en(Ht.currentTarget.value), At && At(Ht)
    },
    bn = (Ht) => {
      if (Ht) {
        if (typeof Ht == 'number') return Ht
        if (typeof Ht == 'string') return parseInt(Ht)
      }
    },
    yn = !se && !le
  return /* @__PURE__ */ z.jsx(jm, {
    onClickaway: () => we(!1),
    children: /* @__PURE__ */ z.jsxs(Xn, {
      ...yr,
      children: [
        yn &&
          /* @__PURE__ */ z.jsxs(z.Fragment, {
            children: [
              He &&
                /* @__PURE__ */ z.jsx('div', {
                  className: Ie('flex items-center pl-3', {
                    'mt-4': Je === 'filled',
                  }),
                  children: He,
                }),
              /* @__PURE__ */ z.jsx('input', {
                name: de,
                required: ct,
                ref: _e,
                type: ft,
                defaultValue: H,
                id: y,
                autoComplete: _,
                onChange: sn,
                value: Ee,
                autoFocus: E,
                placeholder: Ve,
                className: Ie('outline-none bg-white bg-opacity-0', {
                  'w-full': re,
                  'pt-6 pb-2': rt === 'medium' && Je === 'filled',
                  'pt-5 pb-1': rt === 'small' && Je === 'filled',
                  'pt-1 pb-[5px]': rt === 'medium' && Je === 'standard',
                  'pt-[1px] pb-[5px]': rt === 'small' && Je === 'standard',
                  'pr-3 pl-3': Je === 'filled',
                  'px-3 py-[16.5px]': rt === 'medium' && Je === 'outlined',
                  'px-[8.5px] py-[14px]': rt === 'small' && Je === 'outlined',
                  [(A == null ? void 0 : A.inputClassName) || '']:
                    A == null ? void 0 : A.inputClassName,
                  // [className || '']: className,
                }),
                onFocus: () => {
                  we(!0), Ne && Ne()
                },
                readOnly: nt,
                disabled: $,
                ...K,
              }),
              B &&
                /* @__PURE__ */ z.jsx('div', {
                  className: Ie('flex items-center pr-3'),
                  children: B,
                }),
            ],
          }),
        le &&
          /* @__PURE__ */ z.jsx(le, {
            ...K,
            ...(V == null ? void 0 : V.input),
          }),
        se &&
          /* @__PURE__ */ z.jsx('textarea', {
            ref: ge,
            defaultValue: H,
            name: de,
            id: y,
            rows: bn(ce),
            autoComplete: _,
            autoFocus: E,
            onChange: At,
            value: Ee,
            placeholder: Ve,
            readOnly: nt,
            required: ct,
            className: Ie('outline-none resize-none', {
              'w-full': re,
              'pb-2': Je === 'standard',
              [(A == null ? void 0 : A.inputClassName) || '']:
                A == null ? void 0 : A.inputClassName,
            }),
            onFocus: () => {
              we(!0), Ne && Ne()
            },
            disabled: $,
            ...K,
          }),
        Je === 'outlined' &&
          /* @__PURE__ */ z.jsx('fieldset', {
            className: Ie(
              'absolute left-0 right-0   bottom-0   -top-[5px] px-2 border rounded-[4px] pointer-events-none',
              {
                ' border-opacity-100 border-2': ee,
                'border-black group-hover:border-opacity-90 border-opacity-30':
                  !ee,
                'border-primary-color': x === 'primary' && ee,
                'border-secondary-color': x === 'secondary' && ee,
                'border-error-color': x === 'error' && ee,
                'border-warning-color': x === 'warning' && ee,
                'border-info-color': x === 'info' && ee,
                'border-success-color': x === 'success' && ee,
              }
            ),
            children: /* @__PURE__ */ z.jsx('legend', {
              className: Ie('text-sm', {
                ' invisible max-w-0 transition-all': !Pe,
                ' invisible max-w-full transition-all': Pe,
              }),
              children: /* @__PURE__ */ z.jsx('span', {
                className: Ie('opacity-0 inline-block px-[5px]', {
                  hidden: qr,
                }),
                children: $t,
              }),
            }),
          }),
      ],
    }),
  })
}
function CD({
  children: _,
  htmlFor: E,
  className: y,
  disableAnimation: D,
  shrink: x,
  error: A,
  color: m = A ? 'error' : 'primary',
  labelProps: V,
  disabled: H,
  margin: $,
  size: te = 'medium',
  variant: B,
}) {
  const {
    contextVariant: W,
    contextTouched: K,
    setLabel: re,
    contextColor: Re,
    contextDisabled: se,
    hiddenLabel: _e,
  } = ys(Hm)
  return (
    (B = W || B),
    (x = K || x),
    (m = Re || m),
    (H = se || H),
    re && re(_),
    /* @__PURE__ */ z.jsx('label', {
      htmlFor: E,
      className: Ie({
        relative: !x && !B,
        'absolute origin-top-left text-lg cursor-text left-0  z-10 ': !x || B,
        hidden: _e,
        'normal-label-text-field-filled':
          (B === 'filled' && !x) || (B === 'outlined' && !x && te === 'medium'),
        ' translate-x-3 translate-y-3 ':
          B === 'outlined' && !x && te === 'small',
        '-translate-y-2 translate-x-4  scale-75': B === 'outlined' && x,
        'mini-label-text-field-filled': B === 'filled' && x,
        ' translate-y-4': B === 'standard' && !x,
        ' -translate-y-1  scale-75': B === 'standard' && x,
        'opacity-30': H,
        'opacity-70': !H,
        'transition-all': !D,
        'mt-2 mb-1': $ === 'dense',
        // [`text-${color}-color`]: shrink && color,
        'text-primary-color': x && m === 'primary',
        'text-secondary-color': x && m === 'secondary',
        'text-error-color': x && m === 'error',
        'text-warning-color': x && m === 'warning',
        'text-info-color': x && m === 'info',
        'text-success-color': x && m === 'success',
        [y || '']: y,
      }),
      ...V,
      children: _,
    })
  )
}
const ED = (_, E, y, D, x) => {
    if ((D == null ? void 0 : D.vertical) === 'top') {
      if ((y == null ? void 0 : y.vertical) === 'top' && x)
        return Math.max(E, x.top)
      if ((y == null ? void 0 : y.vertical) === 'center' && x)
        return Math.max(E, x.top - _.height / 2)
      if ((y == null ? void 0 : y.vertical) === 'bottom' && x)
        return Math.max(E, x.top - _.height)
    } else if ((D == null ? void 0 : D.vertical) === 'bottom') {
      if ((y == null ? void 0 : y.vertical) === 'top' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height)
        )
      if ((y == null ? void 0 : y.vertical) === 'center' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.top) +
            (x == null ? void 0 : x.height) -
            _.height / 2
        )
      if ((y == null ? void 0 : y.vertical) === 'bottom' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.top) +
            (x == null ? void 0 : x.height) -
            _.height
        )
    } else if ((D == null ? void 0 : D.vertical) === 'center') {
      if (!x) return
      if ((y == null ? void 0 : y.vertical) === 'top' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.top) + (x == null ? void 0 : x.height) / 2
        )
      if ((y == null ? void 0 : y.vertical) === 'center' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.top) +
            (x == null ? void 0 : x.height) / 2 -
            _.height / 2
        )
      if ((y == null ? void 0 : y.vertical) === 'bottom' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.top) +
            (x == null ? void 0 : x.height) / 2 -
            _.height
        )
    }
  },
  wD = (_, E, y, D, x) => {
    if ((D == null ? void 0 : D.horizontal) === 'left') {
      if ((y == null ? void 0 : y.horizontal) === 'left' && x)
        return Math.max(E, x.left)
      if ((y == null ? void 0 : y.horizontal) === 'center' && x)
        return Math.max(E, x.left - _.width / 2)
      if ((y == null ? void 0 : y.horizontal) === 'right' && x)
        return Math.max(E, x.left - _.width)
    } else if ((D == null ? void 0 : D.horizontal) === 'right') {
      if ((y == null ? void 0 : y.horizontal) === 'left' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width)
        )
      if ((y == null ? void 0 : y.horizontal) === 'center' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.left) +
            (x == null ? void 0 : x.width) -
            _.width / 2
        )
      if ((y == null ? void 0 : y.horizontal) === 'right' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.left) +
            (x == null ? void 0 : x.width) -
            _.width
        )
    } else if ((D == null ? void 0 : D.horizontal) === 'center') {
      if ((y == null ? void 0 : y.horizontal) === 'left' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.left) + (x == null ? void 0 : x.width) / 2
        )
      if ((y == null ? void 0 : y.horizontal) === 'center' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.left) +
            (x == null ? void 0 : x.width) / 2 -
            _.width / 2
        )
      if ((y == null ? void 0 : y.horizontal) === 'right' && x)
        return Math.max(
          E,
          (x == null ? void 0 : x.left) +
            (x == null ? void 0 : x.width) / 2 -
            _.width
        )
    }
  },
  RD = (_, E, y, D) => (
    console.log(D),
    D
      ? !E || !E.vertical || !y
        ? 0
        : E.vertical === 'top'
        ? D.y
        : E.vertical === 'center'
        ? D.y - y.height / 2
        : E.vertical === 'bottom'
        ? D.y - y.height
        : 0
      : !_ || !_.top || !E || !E.vertical || !y
      ? 0
      : E.vertical === 'top' && _
      ? _.top
      : E.vertical === 'center'
      ? _.top - y.height / 2
      : E.vertical === 'bottom'
      ? _.top - y.height
      : 0
  ),
  TD = (_, E, y, D, x) =>
    D
      ? !E || !E.vertical || !y
        ? 0
        : E.horizontal === 'left'
        ? D.x +
          (x === 'bottom-end' ||
          x === 'bottom-start' ||
          x === 'top-end' ||
          x === 'top-start'
            ? -15
            : 0)
        : E.horizontal === 'center'
        ? D.x -
          y.width / 2 +
          (x === 'bottom-end' ||
          x === 'bottom-start' ||
          x === 'top-end' ||
          x === 'top-start'
            ? 15
            : 0)
        : E.horizontal === 'right'
        ? D.x -
          y.width +
          (x === 'bottom-end' ||
          x === 'bottom-start' ||
          x === 'top-end' ||
          x === 'top-start'
            ? 15
            : 0)
        : 0
      : !_ || !_.left || !E || !E.vertical || !y
      ? 0
      : E.horizontal === 'left' && _
      ? _.left
      : E.horizontal === 'center'
      ? _.left - y.width / 2
      : E.horizontal === 'right'
      ? _.left - y.width
      : 0,
  bD = (_, E, y, D, x, A, m, V, H) => {
    if (_ === 'anchorEl' && !V) {
      if (!m) return
      const $ = ED(m, E, y, D, A),
        te = wD(m, E, y, D, A)
      return { top: $, left: te }
    } else if (_ === 'anchorPosition' || (V && x)) {
      const $ = Math.max(E, RD(x, y, m, V)),
        te = Math.max(E, TD(x, y, m, V, H))
      return { top: $, left: te }
    }
  },
  kD = (_) =>
    _ === 'left' || _ === 'left-start' || _ === 'left-end' ? -14 : 0,
  DD = (_) => (_ === 'top' || _ === 'top-start' || _ === 'top-end' ? -14 : 0),
  dE = Op({})
function e2({
  children: _,
  title: E,
  placement: y,
  open: D,
  disableTransition: x,
  arrow: A,
  followCursor: m,
  classes: V,
  components: H,
  componentsProps: $,
  disableFocusListener: te,
  disableHoverListener: B,
  disableTouchListener: W,
  enterDelay: K = 100,
  enterNextDelay: re = 0,
  enterTouchDelay: Re = 700,
  id: se,
  leaveDelay: _e = 0,
  onClose: ge,
  onOpen: ce,
  className: He,
}) {
  const [de, Ee] = Tn(void 0),
    Ve = ms(null),
    nt = ms(null),
    ct = ms(null),
    [ft, Pe] = Tn(D || !1),
    [At, Ne] = Tn(),
    Ge = H != null && H.Arrow ? H.Arrow : 'span',
    Je = H != null && H.Popper ? H.Popper : pE,
    rt = H != null && H.Tooltip ? H.Tooltip : 'div',
    $t = (Ct) => {
      B ||
        (m || Ee(Ct.currentTarget),
        (nt.current = setTimeout(() => {
          ct.current ||
            (Pe(!0),
            (ct.current = setTimeout(() => {
              ct.current = null
            }, re)))
        }, K)),
        ce && ce(Ct))
    },
    ee = (Ct) => {
      te ||
        (m || Ee(Ct.currentTarget),
        (nt.current = setTimeout(() => {
          ct.current ||
            (Pe(!0),
            (ct.current = setTimeout(() => {
              ct.current = null
            }, re)))
        }, K)),
        ce && ce(Ct))
    },
    we = (Ct) => {
      W ||
        (m || Ee(Ct.currentTarget),
        (nt.current = setTimeout(() => {
          ct.current ||
            (Pe(!0),
            (ct.current = setTimeout(() => {
              ct.current = null
            }, re)))
        }, Re)),
        ce && ce(Ct))
    },
    le = (Ct) => {
      D ||
        (nt.current && clearTimeout(nt.current),
        setTimeout(() => {
          Pe(!1)
        }, _e)),
        ge && ge(Ct)
    },
    et = (Ct) => {
      D ||
        (nt.current && clearTimeout(nt.current),
        setTimeout(() => {
          Pe(!1)
        }, _e)),
        ge && ge(Ct)
    },
    lt = (Ct) => {
      m && Ne({ x: Ct.clientX, y: Ct.clientY })
    },
    jt = () =>
      y === 'bottom-end'
        ? { vertical: 'bottom', horizontal: 'right' }
        : y === 'bottom-start'
        ? { vertical: 'bottom', horizontal: 'left' }
        : y === 'bottom'
        ? { vertical: 'bottom', horizontal: 'center' }
        : y === 'left'
        ? { vertical: 'center', horizontal: 'left' }
        : y === 'left-end'
        ? { vertical: 'bottom', horizontal: 'left' }
        : y === 'left-start'
        ? { vertical: 'top', horizontal: 'left' }
        : y === 'right'
        ? { vertical: 'center', horizontal: 'right' }
        : y === 'right-end'
        ? { vertical: 'bottom', horizontal: 'right' }
        : y === 'right-start'
        ? { vertical: 'top', horizontal: 'right' }
        : y === 'top'
        ? { vertical: 'top', horizontal: 'center' }
        : y === 'top-end'
        ? { vertical: 'top', horizontal: 'right' }
        : y === 'top-start'
        ? { vertical: 'top', horizontal: 'left' }
        : { vertical: 'bottom', horizontal: 'center' },
    bt = () =>
      y === 'bottom-end'
        ? { vertical: 'top', horizontal: 'right' }
        : y === 'bottom-start'
        ? { vertical: 'top', horizontal: 'left' }
        : y === 'bottom'
        ? { vertical: 'top', horizontal: 'center' }
        : y === 'left'
        ? { vertical: 'center', horizontal: 'right' }
        : y === 'left-end'
        ? { vertical: 'bottom', horizontal: 'right' }
        : y === 'left-start'
        ? { vertical: 'top', horizontal: 'right' }
        : y === 'right'
        ? { vertical: 'center', horizontal: 'left' }
        : y === 'right-end'
        ? { vertical: 'bottom', horizontal: 'left' }
        : y === 'right-start'
        ? { vertical: 'top', horizontal: 'left' }
        : y === 'top'
        ? { vertical: 'bottom', horizontal: 'center' }
        : y === 'top-end'
        ? { vertical: 'bottom', horizontal: 'right' }
        : y === 'top-start'
        ? { vertical: 'bottom', horizontal: 'left' }
        : { vertical: 'top', horizontal: 'right' }
  return /* @__PURE__ */ z.jsxs('div', {
    className: 'inline-flex',
    children: [
      /* @__PURE__ */ z.jsx(dE.Provider, {
        value: { placement: y, mouseMove: At },
        children: /* @__PURE__ */ z.jsx(Je, {
          ...($ == null ? void 0 : $.popper),
          open: ft,
          anchorOrigin: {
            vertical: jt().vertical,
            horizontal: jt().horizontal,
          },
          transformOrigin: {
            vertical: bt().vertical,
            horizontal: bt().horizontal,
          },
          anchorEl: de,
          className: Ie({
            [(V == null ? void 0 : V.popover) || '']:
              V == null ? void 0 : V.popover,
          }),
          elevation: 0,
          classes: { root: 'pointer-events-none' },
          disableTransition: x,
          children: /* @__PURE__ */ z.jsxs(rt, {
            id: se,
            ref: Ve,
            ...($ == null ? void 0 : $.tooltip),
            className: Ie(
              ' bg-neutral-500 rounded text-white px-2 py-1 font-medium text-xs font-base',
              {
                'mt-[14px] ':
                  y === 'bottom' || y === 'bottom-start' || y === 'bottom-end',
                'ml-[14px] ':
                  y === 'right' || y === 'right-start' || y === 'right-end',
                [(V == null ? void 0 : V.tooltip) || '']:
                  V == null ? void 0 : V.tooltip,
                [He || '']: He,
              }
            ),
            children: [
              E,
              /* @__PURE__ */ z.jsx(Ge, {
                ...($ == null ? void 0 : $.arrow),
                className: Ie('bocadillo ', {
                  'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-1/2':
                    A && y === 'top',
                  'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-4':
                    A && y === 'top-start',
                  'border-neutral-500 border-b-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[300%] translate-x-[-250%] bottom-0 left-[calc(100%-16px)]':
                    A && y === 'top-end',
                  'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-1/2':
                    A && y === 'bottom',
                  'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-4':
                    A && y === 'bottom-start',
                  'border-neutral-500 border-t-transparent border-l-transparent border-r-transparent border-[25px] translate-y-[-150%] translate-x-[-250%] top-0 left-[calc(100%-16px)]':
                    A && y === 'bottom-end',
                  'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-1/2 left-0':
                    A && y === 'right',
                  'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-2 left-0':
                    A && y === 'right-end',
                  'border-neutral-500 border-t-transparent border-l-transparent border-b-transparent border-[25px] translate-x-[-150%] translate-y-[250%] bottom-[calc(100%-8px)] left-0':
                    A && y === 'right-start',
                  'border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-1/2 right-0':
                    A && y === 'left',
                  'border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-2 right-0':
                    A && y === 'left-end',
                  'border-neutral-500 border-t-transparent border-r-transparent border-b-transparent border-[25px] translate-x-[300%] translate-y-[250%] bottom-[calc(100%-8px)] right-0':
                    A && y === 'left-start',
                  [(V == null ? void 0 : V.arrow) || '']:
                    V == null ? void 0 : V.arrow,
                }),
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ z.jsx('div', {
        tabIndex: 1,
        onMouseEnter: $t,
        onFocus: ee,
        onMouseLeave: le,
        onBlur: et,
        onMouseMove: lt,
        onTouchStart: we,
        children: _,
      }),
    ],
  })
}
function _D({
  children: _,
  className: E,
  marginThreshold: y,
  anchorEl: D,
  anchorPosition: x,
  transformOrigin: A,
  anchorReference: m,
  anchorOrigin: V,
  components: H,
  ...$
}) {
  const te = ms(null),
    [B, W] = Tn(),
    [K, re] = Tn(),
    { placement: Re, mouseMove: se } = ys(dE)
  Up(() => {
    if (!open) return
    const Ee = te.current
    if (Ee)
      return (
        (Ee.style.opacity = '0'),
        setTimeout(() => {
          Ee.style.opacity = '1'
        }, 50),
        re({
          height: Ee.offsetHeight,
          width: Ee.offsetWidth,
        }),
        (_e = requestAnimationFrame(ge)),
        () => {
          _e && cancelAnimationFrame(_e)
        }
      )
  }, [])
  let _e = null
  const ge = () => {
      if (D) {
        const Ee = He(D).getBoundingClientRect()
        W(Ee)
      }
      _e = requestAnimationFrame(ge)
    },
    ce = H != null && H.paper ? H.paper : 'div'
  function He(Ee) {
    return typeof Ee == 'function' ? Ee() : Ee
  }
  const de = bD(m, y, A, V, x, B, K, se, Re)
  return /* @__PURE__ */ z.jsx(ce, {
    ref: te,
    style: {
      top:
        de != null && de.top
          ? (de == null ? void 0 : de.top) + DD(Re)
          : de == null
          ? void 0
          : de.top,
      left:
        de != null && de.left
          ? (de == null ? void 0 : de.left) + kD(Re)
          : // -
          // (screenVariation?.currentScreenW && screenVariation.initialScreenW
          //   ? screenVariation?.initialScreenW -
          //     screenVariation?.initialScreenW
          //   : 0)
          de == null
          ? void 0
          : de.left,
      // translate: `${position?.transformX} ${position?.transformY}`,
    },
    className: Ie({ [E || '']: E }),
    ...$,
    children: _,
  })
}
function pE({
  children: _,
  open: E,
  onClose: y,
  anchorReference: D = 'anchorEl',
  anchorEl: x,
  anchorOrigin: A = { vertical: 'top', horizontal: 'left' },
  transformOrigin: m = { vertical: 'top', horizontal: 'left' },
  anchorPosition: V = { top: 0, left: 0 },
  className: H,
  container: $,
  elevation: te = 4,
  components: B,
  marginThreshold: W = 16,
  componentProps: K,
  id: re,
  disableTransition: Re,
  classes: se,
}) {
  const [_e, ge] = Tn(!1)
  Up(() => {
    E && ge(!0)
  }, [E])
  const ce = B != null && B.root ? B.root : 'div'
  function He(Ee) {
    return typeof Ee == 'function' ? Ee() : Ee
  }
  const de = () => {
    E || ge(!1)
  }
  return /* @__PURE__ */ z.jsx(z.Fragment, {
    children:
      _e &&
      sE.createPortal(
        /* @__PURE__ */ z.jsxs(ce, {
          id: re,
          ...(K == null ? void 0 : K.root),
          className: Ie('fixed inset-0 z-[1300] ', {
            [(se == null ? void 0 : se.root) || '']:
              se == null ? void 0 : se.root,
          }),
          children: [
            /* @__PURE__ */ z.jsx('div', {
              onClick: y,
              className: Ie('fixed inset-0 flex bg-transparent -z-[1]'),
            }),
            /* @__PURE__ */ z.jsx(_D, {
              onAnimationEnd: de,
              ...(K == null ? void 0 : K.paper),
              marginThreshold: W,
              anchorEl: x,
              components: B,
              anchorPosition: V,
              anchorReference: D,
              transformOrigin: m,
              anchorOrigin: A,
              className: Ie('absolute  bg-transparent rounded-[4px]  ', {
                'animate-grow': E && !Re,
                'animate-dwarf': !E && !Re,
                'shadow-1': te === 1,
                'shadow-2': te === 2,
                'shadow-3': te === 3,
                'shadow-4': te === 4,
                'shadow-5': te === 5,
                'shadow-6': te === 6,
                'shadow-7': te === 7,
                'shadow-8': te === 8,
                'shadow-9': te === 9,
                'shadow-10': te === 10,
                'shadow-11': te === 11,
                'shadow-12': te === 12,
                'shadow-13': te === 13,
                'shadow-14': te === 14,
                [(se == null ? void 0 : se.paper) || '']:
                  se == null ? void 0 : se.paper,
                [H || '']: H,
              }),
              children: _,
            }),
          ],
        }),
        $ ? He($) : document.body
      ),
  })
}
function LD({ children: _, ...E }) {
  return /* @__PURE__ */ z.jsx('ul', { ...E, children: _ })
}
function t2({
  children: _,
  open: E,
  onClose: y,
  classes: D,
  MenuListProps: x,
  PopoverClasses: A,
  ...m
}) {
  const V = () => {
    y && y()
  }
  return /* @__PURE__ */ z.jsx(pE, {
    classes: A,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    onClose: V,
    className: Ie('bg-white', {
      [(D == null ? void 0 : D.Popover) || '']: D == null ? void 0 : D.Popover,
    }),
    open: E,
    ...m,
    children: /* @__PURE__ */ z.jsx(LD, {
      ...x,
      className: Ie({
        [(D == null ? void 0 : D.MenuList) || '']:
          D == null ? void 0 : D.MenuList,
      }),
      children: _,
    }),
  })
}
function n2({
  children: _,
  className: E,
  component: y,
  dense: D,
  disableGutters: x,
  divider: A,
  onClick: m,
  selected: V,
  ...H
}) {
  const [$, te] = Tn(!1),
    [B, W] = Tn(),
    K = y || 'li',
    re = (Re) => {
      const _e = Re.currentTarget.getBoundingClientRect(),
        ge = {
          x: Re.clientX - _e.left,
          y: Re.clientY - _e.top,
        }
      W({ x: ge.x, y: ge.y }),
        te(!0),
        setTimeout(() => {
          te(!1)
        }, 600),
        m &&
          setTimeout(() => {
            m(Re)
          }, 200)
    }
  return /* @__PURE__ */ z.jsxs(K, {
    ...H,
    className: Ie(
      'flex font-normal text-base font-base bg-transparent justify-start  hover:bg-neutral-50 relative',
      {
        'py-[6px]': !D && !x,
        'bg-sky-50': V,
        'px-4': !x,
        'border-b': A,
        [E || '']: E,
      }
    ),
    onClick: re,
    tabIndex: V ? 0 : -1,
    children: [
      _,
      /* @__PURE__ */ z.jsx('span', {
        className: Ie('inset-0 overflow-hidden absolute'),
        children:
          $ &&
          /* @__PURE__ */ z.jsx('span', {
            style: {
              top: B == null ? void 0 : B.y,
              left: B == null ? void 0 : B.x,
              transform: 'translate(-50%, -50%)',
            },
            className: Ie({
              'animate-ripple absolute inline-flex w-full h-full   rounded-full bg-opacity-25 origin-center bg-neutral-500':
                !0,
            }),
          }),
      }),
    ],
  })
}
const vE = Op({})
function r2({
  label: _,
  variant: E = 'standard',
  error: y,
  color: D = y ? 'error' : 'primary',
  defaultValue: x,
  disabled: A,
  inputRef: m,
  autoFocus: V = !1,
  id: H,
  value: $,
  rows: te = 1,
  select: B,
  required: W = !1,
  type: K = 'text',
  classes: re,
  onChange: Re,
  disableUnderline: se,
  multiLine: _e,
  TextAreaRef: ge,
  children: ce,
  readOnly: He,
  hiddenLabel: de,
  inputProps: Ee,
  helperText: Ve,
  className: nt,
  fullWidth: ct,
  size: ft = 'medium',
  margin: Pe = 'none',
  name: At,
  placeholder: Ne,
}) {
  const [Ge, Je] = Tn(!1),
    [rt, $t] = Tn($),
    [ee, we] = Tn(!1),
    le = re == null ? void 0 : re.labelClassName,
    et = (bt) => {
      console.log('component', rt), $t(bt.currentTarget.value), Re && Re(bt)
    },
    lt = rD(() => {
      rt || Je(!1), we(!1)
    }, [rt]),
    jt = (bt) => {
      et({
        currentTarget: {
          value: bt,
        },
      })
    }
  return (
    console.log('comp', rt),
    /* @__PURE__ */ z.jsx(jm, {
      onClickaway: lt,
      children: /* @__PURE__ */ z.jsxs('div', {
        id: H,
        className: Ie('relative inline-flex flex-col', {
          'mt-2 mb-1': Pe === 'dense',
          'mt-4 mb-2': Pe === 'normal',
          'w-full': ct,
        }),
        children: [
          !de &&
            /* @__PURE__ */ z.jsx(CD, {
              variant: E,
              shrink: !!(Ge || (Ee != null && Ee.startAdornment)),
              className: le,
              color: D,
              disabled: A,
              size: ft,
              htmlFor: 'input',
              children: _,
            }),
          /* @__PURE__ */ z.jsx(xD, {
            id: 'input',
            disabled: A,
            defaultValue: x,
            autoFocus: V,
            value: rt,
            inputRef: m,
            type: K,
            disaledUndeline: se,
            readonly: He,
            onChange: (bt) => et(bt),
            required: W,
            name: At,
            placeholder: Ne,
            color: D,
            size: ft,
            label: _,
            rows: te,
            shrink: !!(Ge || (Ee != null && Ee.startAdornment)),
            multiline: _e,
            variant: E,
            multilineTextAreaRef: ge,
            fullWidth: ct,
            onFocus: () => {
              Je(!0), we(!0)
            },
            classes: {
              constainerClassName: Ie({
                // 'mt-4': label && variant === 'standard',
                [(re == null ? void 0 : re.inputContainerClassName) || '']:
                  re == null ? void 0 : re.inputContainerClassName,
              }),
              inputClassName: Ie(' bg-white bg-opacity-0', {
                [(re == null ? void 0 : re.inputClassName) || '']:
                  re == null ? void 0 : re.inputClassName,
              }),
            },
            className: nt,
            ...Ee,
          }),
          /* @__PURE__ */ z.jsx(vE.Provider, {
            value: { handleOptionClick: jt, setOpened: we },
            children:
              ee &&
              B &&
              /* @__PURE__ */ z.jsx('div', {
                className: 'max-w-input ',
                children: ce,
              }),
          }),
          Ve &&
            /* @__PURE__ */ z.jsx(SD, {
              className: 'mx-3 ',
              error: y || D === 'error',
              children: Ve,
            }),
        ],
      }),
    })
  )
}
function a2({
  children: _,
  className: E = 'cursor-pointer hover:bg-slate-200',
  onClick: y,
  value: D,
}) {
  const { handleOptionClick: x, setOpened: A } = ys(vE),
    m = (V) => {
      y && y(V), x && A && (x(D), A(!1))
    }
  return /* @__PURE__ */ z.jsx('div', { onClick: m, className: E, children: _ })
}
function i2({
  children: _,
  message: E,
  open: y,
  action: D,
  onClose: x,
  autoHideDuration: A,
  anchorOrigin: m = { vertical: 'bottom', horizontal: 'left' },
  transition: V = 'grown',
  className: H,
  ContentProps: $,
  disableWindowBlurListener: te,
  key: B,
  resumeHideDuration: W,
  ...K
}) {
  const [re, Re] = Tn(!1),
    se = ms(null)
  A &&
    !se.current &&
    y &&
    (se.current = setTimeout(() => {
      ;(se.current = null), x && x(null, 'timeout')
    }, A)),
    Up(() => {
      y === !0
        ? Re(!!y)
        : y === !1 &&
          setTimeout(() => {
            Re(!!y)
          }, 200)
      const ge = (Ee) => {
          Ee.key === 'Escape' && y && x && x(Ee, 'escapeKeyDown')
        },
        ce = (Ee) => ge(Ee)
      document.addEventListener('keydown', ce),
        se.current && !y && (clearTimeout(se.current), (se.current = null))
      const He = () => {
          A &&
            !se.current &&
            y &&
            (se.current = setTimeout(() => {
              ;(se.current = null), x && x(null, 'timeout')
            }, W || A / 2))
        },
        de = () => {
          se.current && (clearTimeout(se.current), (se.current = null))
        }
      return (
        te ||
          (window.addEventListener('focus', He),
          window.addEventListener('blur', de)),
        () => {
          te ||
            (window.removeEventListener('focus', He),
            window.removeEventListener('blur', de)),
            document.removeEventListener('keydown', ce)
        }
      )
    }, [y])
  const _e = (ge) => {
    x && x(ge, 'ClickAway')
  }
  return /* @__PURE__ */ z.jsx(z.Fragment, {
    children:
      re &&
      /* @__PURE__ */ z.jsx(jm, {
        onClickaway: _e,
        children: /* @__PURE__ */ z.jsxs(
          'div',
          {
            className: Ie(
              ' z-50 flex justify-start items-center fixed transition-all',
              {
                ' left-2 right-2  sm:left-6 sm:right-auto':
                  m.horizontal === 'left',
                ' left-2 right-2  sm:left-1/2 sm:right-auto sm:-translate-x-1/2':
                  m.horizontal === 'center',
                ' left-2 right-2  sm:left-auto sm:right-6':
                  m.horizontal === 'right',
                'sm:bottom-6 bottom-2 ': m.vertical === 'bottom',
                'sm:top-6 top-2 ': m.vertical === 'top',
                [H || '']: H,
              }
            ),
            ...K,
            children: [
              _ &&
                /* @__PURE__ */ z.jsx('div', {
                  className: Ie({
                    'animate-slideUpBottom ':
                      V === 'slideUp' && m.vertical === 'bottom',
                    'animate-slideUpRevBottom -translate-y-[100vh]':
                      !y && V === 'slideUp' && m.vertical === 'bottom',
                    'animate-slideUpTop':
                      y && V === 'slideUp' && m.vertical === 'top',
                    'animate-slideUpRevTop -translate-y-[15vh]':
                      !y && V === 'slideUp' && m.vertical === 'top',
                    'animate-slideDownBottom':
                      V === 'slideDown' && m.vertical === 'bottom',
                    'animate-slideDownRevBottom -translate-y-[100vh]':
                      !y && V === 'slideDown' && m.vertical === 'bottom',
                    'animate-slideDownTop':
                      y && V === 'slideDown' && m.vertical === 'top',
                    'animate-slideDownRevTop -translate-y-[15vh]':
                      !y && V === 'slideDown' && m.vertical === 'top',
                    'animate-slideLeftLeft':
                      V === 'slideLeft' && m.horizontal === 'left',
                    'animate-slideLeftRevLeft -translate-x-[50vh]':
                      !y && V === 'slideLeft' && m.horizontal === 'left',
                    'animate-slideLeftRight':
                      y &&
                      V === 'slideLeft' &&
                      (m.horizontal === 'right' || 'center'),
                    'animate-slideLeftRevRight -translate-x-[300vh]':
                      !y &&
                      V === 'slideLeft' &&
                      (m.horizontal === 'right' || 'center'),
                    'animate-slideRightRight':
                      y && V === 'slideRight' && m.horizontal === 'right',
                    'animate-slideRightRevRight translate-x-[30vh]':
                      !y && V === 'slideRight' && m.horizontal === 'right',
                    'animate-slideRightLeft':
                      y &&
                      V === 'slideRight' &&
                      (m.horizontal === 'left' || 'center'),
                    'animate-slideRightRevLeft translate-x-[300vh]':
                      !y &&
                      V === 'slideRight' &&
                      (m.horizontal === 'left' || 'center'),
                    'animate-opacity0 opacity-0': !y && V === 'fade',
                    'animate-opacity': y && V === 'fade',
                    'animate-dwarf opacity-0': !y && V === 'grown',
                    'animate-grow': y && V === 'grown',
                  }),
                  children: _,
                }),
              !_ &&
                /* @__PURE__ */ z.jsxs(fE, {
                  className: Ie(
                    'font-base font-normal text-base text-white grow bg-[#323232] flex px-4 py-[6px] items-center flex-wrap sm:min-w-[288px] sm:grow-[initial]',
                    {
                      'animate-slideUpBottom':
                        V === 'slideUp' && m.vertical === 'bottom',
                      'animate-slideUpRevBottom -translate-y-[100vh]':
                        !y && V === 'slideUp' && m.vertical === 'bottom',
                      'animate-slideUpTop':
                        y && V === 'slideUp' && m.vertical === 'top',
                      'animate-slideUpRevTop -translate-y-[15vh]':
                        !y && V === 'slideUp' && m.vertical === 'top',
                      'animate-slideDownBottom':
                        V === 'slideDown' && m.vertical === 'bottom',
                      'animate-slideDownRevBottom -translate-y-[100vh]':
                        !y && V === 'slideDown' && m.vertical === 'bottom',
                      'animate-slideDownTop':
                        y && V === 'slideDown' && m.vertical === 'top',
                      'animate-slideDownRevTop -translate-y-[15vh]':
                        !y && V === 'slideDown' && m.vertical === 'top',
                      'animate-slideLeftLeft':
                        V === 'slideLeft' && m.horizontal === 'left',
                      'animate-slideLeftRevLeft -translate-x-[50vh]':
                        !y && V === 'slideLeft' && m.horizontal === 'left',
                      'animate-slideLeftRight':
                        y &&
                        V === 'slideLeft' &&
                        (m.horizontal === 'right' || 'center'),
                      'animate-slideLeftRevRight -translate-x-[300vh]':
                        !y &&
                        V === 'slideLeft' &&
                        (m.horizontal === 'right' || 'center'),
                      'animate-slideRightRight':
                        y && V === 'slideRight' && m.horizontal === 'right',
                      'animate-slideRightRevRight translate-x-[30vh]':
                        !y && V === 'slideRight' && m.horizontal === 'right',
                      'animate-slideRightLeft':
                        y &&
                        V === 'slideRight' &&
                        (m.horizontal === 'left' || 'center'),
                      'animate-slideRightRevLeft translate-x-[300vh]':
                        !y &&
                        V === 'slideRight' &&
                        (m.horizontal === 'left' || 'center'),
                      'animate-opacity0 opacity-0': !y && V === 'fade',
                      'animate-opacity': y && V === 'fade',
                      'animate-dwarf opacity-0': !y && V === 'grown',
                      'animate-grow': y && V === 'grown',
                    }
                  ),
                  ...$,
                  children: [
                    /* @__PURE__ */ z.jsx('div', {
                      className: Ie('py-2'),
                      children: E,
                    }),
                    D &&
                      /* @__PURE__ */ z.jsx('div', {
                        className: 'flex items-center ml-auto pl-4 -mr-2',
                        children: D,
                      }),
                  ],
                }),
            ],
          },
          B
        ),
      }),
  })
}
const hE = Op({})
function l2({
  children: _,
  className: E,
  component: y,
  padding: D = 'normal',
  size: x = 'medium',
  stickyHeader: A,
  ...m
}) {
  const V = y || 'table'
  return /* @__PURE__ */ z.jsx(hE.Provider, {
    value: {
      contextPadding: D,
      contextSize: x,
      contextSticky: A,
    },
    children: /* @__PURE__ */ z.jsx(V, {
      className: Ie('table w-full  border-separate border-spacing-0', {
        [E || '']: E,
      }),
      ...m,
      children: _,
    }),
  })
}
function u2({ children: _, className: E, component: y, ...D }) {
  const x = y || 'tbody'
  return /* @__PURE__ */ z.jsx(x, {
    className: Ie('table-row-group', {
      [E || '']: E,
    }),
    ...D,
    children: _,
  })
}
function o2({ children: _, className: E, component: y, ...D }) {
  const x = y || 'tfoot'
  return /* @__PURE__ */ z.jsx(x, {
    className: Ie('table-footer-group', {
      [E || '']: E,
    }),
    ...D,
    children: _,
  })
}
function s2({ children: _, component: E, ...y }) {
  const D = E || 'div'
  return /* @__PURE__ */ z.jsx(z.Fragment, {
    children: /* @__PURE__ */ z.jsx(D, { ...y, children: _ }),
  })
}
const mE = Op({})
function c2({ children: _, className: E, component: y, ...D }) {
  const x = y || 'thead'
  return /* @__PURE__ */ z.jsx(mE.Provider, {
    value: { head: !0 },
    children: /* @__PURE__ */ z.jsx(x, {
      className: Ie('table-row-group', {
        [E || '']: E,
      }),
      ...D,
      children: _,
    }),
  })
}
function f2({
  children: _,
  align: E = 'left',
  className: y,
  component: D,
  padding: x,
  size: A,
  // sortDirection,
  variant: m,
  ...V
}) {
  const { head: H } = ys(mE),
    { contextPadding: $, contextSize: te, contextSticky: B } = ys(hE)
  ;(x = x || $ || 'normal'),
    (A = A || te || 'medium'),
    (m = m || (H ? 'head' : 'body'))
  const W = D || (m === 'head' ? 'th' : 'td')
  return /* @__PURE__ */ z.jsx(W, {
    className: Ie(' border-b table-cell border-b-gray-100 ', {
      'p-4': x === 'normal' && A === 'medium',
      'px-4 py-[6px]': x === 'normal' && A === 'small',
      'pl-1': x === 'checkbox',
      'text-center': E === 'center',
      'text-justify': E === 'justify',
      'text-left': E === 'left',
      'text-right flex-row-reverse': E === 'right',
      'font-base text-base font-normal': m === 'body',
      'font-base text-base text-black font-medium': m === 'head',
      'font-base text-sm text-gray-600 font-normal': m === 'footer',
      'sticky top-0 z-10 bg-white': B && H,
      [y || '']: y,
    }),
    ...V,
    children: _,
  })
}
zp.createRoot(document.getElementById('root')).render(
  /* @__PURE__ */ z.jsx(gs.StrictMode, {
    children: /* @__PURE__ */ z.jsx(fD, {}),
  })
)
export {
  XD as Alert,
  qD as AlertTitle,
  WD as ArrowDown,
  jD as ArrowDownIcon,
  GD as ArrowUp,
  HD as ArrowUpIcon,
  gD as Button,
  jm as ClickAway,
  ZD as Collapse,
  hD as ErrorIcon,
  YD as FirstPageIcon,
  $D as FirstPageIconDis,
  JD as FormControl,
  Hm as FormControlContext,
  SD as FormHelper,
  KD as IconButton,
  mD as InfoIcon,
  xD as Input,
  CD as InputLabel,
  ID as LastPageIcon,
  QD as LastPageIconDis,
  t2 as Menu,
  n2 as MenuItem,
  LD as MenuList,
  BD as NextPageIcon,
  PD as NextPageIconDis,
  a2 as Option,
  fE as Paper,
  pE as Popover,
  FD as PrevPageIcon,
  VD as PrevPageIconDis,
  _D as RenderComponent,
  i2 as SnackBar,
  OD as StarIcon,
  AD as StarIconFilled,
  pD as SuccessIcon,
  l2 as Table,
  u2 as TableBody,
  f2 as TableCell,
  s2 as TableContainer,
  hE as TableContext,
  o2 as TableFooter,
  c2 as TableHead,
  mE as TableHeadContext,
  r2 as TextField,
  vE as TextFieldContext,
  e2 as Tooltip,
  dE as TooltipContext,
  vD as WarningIcon,
  yD as XIcon,
  kD as leftMargin,
  bD as setPopoverPosition,
  DD as topMargin,
}
