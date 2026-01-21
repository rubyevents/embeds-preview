var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = /* @__PURE__ */ Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t4, e5, o6) {
    if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4, this.t = e5;
  }
  get styleSheet() {
    let t4 = this.o;
    const s4 = this.t;
    if (e && void 0 === t4) {
      const e5 = void 0 !== s4 && 1 === s4.length;
      e5 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s4, t4));
    }
    return t4;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
var i = (t4, ...e5) => {
  const o6 = 1 === t4.length ? t4[0] : e5.reduce((e6, s4, o7) => e6 + ((t5) => {
    if (true === t5._$cssResult$) return t5.cssText;
    if ("number" == typeof t5) return t5;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t4[o7 + 1], t4[0]);
  return new n(o6, t4, s);
};
var S = (s4, o6) => {
  if (e) s4.adoptedStyleSheets = o6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
  else for (const e5 of o6) {
    const o7 = document.createElement("style"), n5 = t.litNonce;
    void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e5.cssText, s4.appendChild(o7);
  }
};
var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e5 = "";
  for (const s4 of t5.cssRules) e5 += s4.cssText;
  return r(e5);
})(t4) : t4;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t4, s4) => t4;
var u = { toAttribute(t4, s4) {
  switch (s4) {
    case Boolean:
      t4 = t4 ? l : null;
      break;
    case Object:
    case Array:
      t4 = null == t4 ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, s4) {
  let i5 = t4;
  switch (s4) {
    case Boolean:
      i5 = null !== t4;
      break;
    case Number:
      i5 = null === t4 ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t4);
      } catch (t5) {
        i5 = null;
      }
  }
  return i5;
} };
var f = (t4, s4) => !i2(t4, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
  static addInitializer(t4) {
    this._$Ei(), (this.l ??= []).push(t4);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t4, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
      const i5 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t4, i5, s4);
      void 0 !== h3 && e2(this.prototype, t4, h3);
    }
  }
  static getPropertyDescriptor(t4, s4, i5) {
    const { get: e5, set: r6 } = h(this.prototype, t4) ?? { get() {
      return this[s4];
    }, set(t5) {
      this[s4] = t5;
    } };
    return { get: e5, set(s5) {
      const h3 = e5?.call(this);
      r6?.call(this, s5), this.requestUpdate(t4, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t4 = n2(this);
    t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
      for (const i5 of s4) this.createProperty(i5, t5[i5]);
    }
    const t4 = this[Symbol.metadata];
    if (null !== t4) {
      const s4 = litPropertyMetadata.get(t4);
      if (void 0 !== s4) for (const [t5, i5] of s4) this.elementProperties.set(t5, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t5, s4] of this.elementProperties) {
      const i5 = this._$Eu(t5, s4);
      void 0 !== i5 && this._$Eh.set(i5, t5);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i5 = [];
    if (Array.isArray(s4)) {
      const e5 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e5) i5.unshift(c(s5));
    } else void 0 !== s4 && i5.push(c(s4));
    return i5;
  }
  static _$Eu(t4, s4) {
    const i5 = s4.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
  }
  addController(t4) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
  }
  removeController(t4) {
    this._$EO?.delete(t4);
  }
  _$E_() {
    const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t4.set(i5, this[i5]), delete this[i5]);
    t4.size > 0 && (this._$Ep = t4);
  }
  createRenderRoot() {
    const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t4, this.constructor.elementStyles), t4;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t4) => t4.hostDisconnected?.());
  }
  attributeChangedCallback(t4, s4, i5) {
    this._$AK(t4, i5);
  }
  _$ET(t4, s4) {
    const i5 = this.constructor.elementProperties.get(t4), e5 = this.constructor._$Eu(t4, i5);
    if (void 0 !== e5 && true === i5.reflect) {
      const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
      this._$Em = t4, null == h3 ? this.removeAttribute(e5) : this.setAttribute(e5, h3), this._$Em = null;
    }
  }
  _$AK(t4, s4) {
    const i5 = this.constructor, e5 = i5._$Eh.get(t4);
    if (void 0 !== e5 && this._$Em !== e5) {
      const t5 = i5.getPropertyOptions(e5), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
      this._$Em = e5;
      const r6 = h3.fromAttribute(s4, t5.type);
      this[e5] = r6 ?? this._$Ej?.get(e5) ?? r6, this._$Em = null;
    }
  }
  requestUpdate(t4, s4, i5, e5 = false, h3) {
    if (void 0 !== t4) {
      const r6 = this.constructor;
      if (false === e5 && (h3 = this[t4]), i5 ??= r6.getPropertyOptions(t4), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t4) && !this.hasAttribute(r6._$Eu(t4, i5)))) return;
      this.C(t4, s4, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t4, s4, { useDefault: i5, reflect: e5, wrapped: h3 }, r6) {
    i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t4) && (this._$Ej.set(t4, r6 ?? s4 ?? this[t4]), true !== h3 || void 0 !== r6) || (this._$AL.has(t4) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t4, s4)), true === e5 && this._$Em !== t4 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t4));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return null != t4 && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t6, s5] of this._$Ep) this[t6] = s5;
        this._$Ep = void 0;
      }
      const t5 = this.constructor.elementProperties;
      if (t5.size > 0) for (const [s5, i5] of t5) {
        const { wrapped: t6 } = i5, e5 = this[s5];
        true !== t6 || this._$AL.has(s5) || void 0 === e5 || this.C(s5, void 0, i5, e5);
      }
    }
    let t4 = false;
    const s4 = this._$AL;
    try {
      t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t4 = false, this._$EM(), s5;
    }
    t4 && this._$AE(s4);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$Eq &&= this._$Eq.forEach((t5) => this._$ET(t5, this[t5])), this._$EM();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t4) => t4;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
var u2 = Array.isArray;
var d2 = (t4) => u2(t4) || "function" == typeof t4?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t4) => (i5, ...s4) => ({ _$litType$: t4, strings: i5, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = /* @__PURE__ */ Symbol.for("lit-noChange");
var A = /* @__PURE__ */ Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t4, i5) {
  if (!u2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
var N = (t4, i5) => {
  const s4 = t4.length - 1, e5 = [];
  let n5, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
  for (let i6 = 0; i6 < s4; i6++) {
    const s5 = t4[i6];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n5 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n5 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n5 = void 0);
    const x2 = c4 === p2 && t4[i6 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e5.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
  }
  return [V(t4, l3 + (t4[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e5];
};
var S2 = class _S {
  constructor({ strings: t4, _$litType$: i5 }, e5) {
    let r6;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = N(t4, i5);
    if (this.el = _S.createElement(f3, e5), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t5 = this.el.content.firstChild;
      t5.replaceWith(...t5.childNodes);
    }
    for (; null !== (r6 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r6.nodeType) {
        if (r6.hasAttributes()) for (const t5 of r6.getAttributeNames()) if (t5.endsWith(h2)) {
          const i6 = v2[a3++], s4 = r6.getAttribute(t5).split(o3), e6 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: l3, name: e6[2], strings: s4, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r6.removeAttribute(t5);
        } else t5.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r6.removeAttribute(t5));
        if (y2.test(r6.tagName)) {
          const t5 = r6.textContent.split(o3), i6 = t5.length - 1;
          if (i6 > 0) {
            r6.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i6; s4++) r6.append(t5[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r6.append(t5[i6], c3());
          }
        }
      } else if (8 === r6.nodeType) if (r6.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t5 = -1;
        for (; -1 !== (t5 = r6.data.indexOf(o3, t5 + 1)); ) d3.push({ type: 7, index: l3 }), t5 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t4, i5) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t4, s4;
  }
};
function M(t4, i5, s4 = t4, e5) {
  if (i5 === E) return i5;
  let h3 = void 0 !== e5 ? s4._$Co?.[e5] : s4._$Cl;
  const o6 = a2(i5) ? void 0 : i5._$litDirective$;
  return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t4), h3._$AT(t4, s4, e5)), void 0 !== e5 ? (s4._$Co ??= [])[e5] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = M(t4, h3._$AS(t4, i5.values), h3, e5)), i5;
}
var R = class {
  constructor(t4, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t4) {
    const { el: { content: i5 }, parts: s4 } = this._$AD, e5 = (t4?.creationScope ?? l2).importNode(i5, true);
    P.currentNode = e5;
    let h3 = P.nextNode(), o6 = 0, n5 = 0, r6 = s4[0];
    for (; void 0 !== r6; ) {
      if (o6 === r6.index) {
        let i6;
        2 === r6.type ? i6 = new k(h3, h3.nextSibling, this, t4) : 1 === r6.type ? i6 = new r6.ctor(h3, r6.name, r6.strings, this, t4) : 6 === r6.type && (i6 = new Z(h3, this, t4)), this._$AV.push(i6), r6 = s4[++n5];
      }
      o6 !== r6?.index && (h3 = P.nextNode(), o6++);
    }
    return P.currentNode = l2, e5;
  }
  p(t4) {
    let i5 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t4[i5])), i5++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t4, i5, s4, e5) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s4, this.options = e5, this._$Cv = e5?.isConnected ?? true;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === t4?.nodeType && (t4 = i5.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i5 = this) {
    t4 = M(this, t4, i5), a2(t4) ? t4 === A || null == t4 || "" === t4 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t4 !== this._$AH && t4 !== E && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : d2(t4) ? this.k(t4) : this._(t4);
  }
  O(t4) {
    return this._$AA.parentNode.insertBefore(t4, this._$AB);
  }
  T(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
  }
  _(t4) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(l2.createTextNode(t4)), this._$AH = t4;
  }
  $(t4) {
    const { values: i5, _$litType$: s4 } = t4, e5 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e5) this._$AH.p(i5);
    else {
      const t5 = new R(e5, this), s5 = t5.u(this.options);
      t5.p(i5), this.T(s5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i5 = C.get(t4.strings);
    return void 0 === i5 && C.set(t4.strings, i5 = new S2(t4)), i5;
  }
  k(t4) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s4, e5 = 0;
    for (const h3 of t4) e5 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e5], s4._$AI(h3), e5++;
    e5 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e5), i5.length = e5);
  }
  _$AR(t4 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t4 !== this._$AB; ) {
      const s5 = i3(t4).nextSibling;
      i3(t4).remove(), t4 = s5;
    }
  }
  setConnected(t4) {
    void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t4, i5, s4, e5, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e5, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t4, i5 = this, s4, e5) {
    const h3 = this.strings;
    let o6 = false;
    if (void 0 === h3) t4 = M(this, t4, i5, 0), o6 = !a2(t4) || t4 !== this._$AH && t4 !== E, o6 && (this._$AH = t4);
    else {
      const e6 = t4;
      let n5, r6;
      for (t4 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r6 = M(this, e6[s4 + n5], i5, n5), r6 === E && (r6 = this._$AH[n5]), o6 ||= !a2(r6) || r6 !== this._$AH[n5], r6 === A ? t4 = A : t4 !== A && (t4 += (r6 ?? "") + h3[n5 + 1]), this._$AH[n5] = r6;
    }
    o6 && !e5 && this.j(t4);
  }
  j(t4) {
    t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t4) {
    this.element[this.name] = t4 === A ? void 0 : t4;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t4) {
    this.element.toggleAttribute(this.name, !!t4 && t4 !== A);
  }
};
var z = class extends H {
  constructor(t4, i5, s4, e5, h3) {
    super(t4, i5, s4, e5, h3), this.type = 5;
  }
  _$AI(t4, i5 = this) {
    if ((t4 = M(this, t4, i5, 0) ?? A) === E) return;
    const s4 = this._$AH, e5 = t4 === A && s4 !== A || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== A && (s4 === A || e5);
    e5 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var Z = class {
  constructor(t4, i5, s4) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    M(this, t4);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.2");
var D = (t4, i5, s4) => {
  const e5 = s4?.renderBefore ?? i5;
  let h3 = e5._$litPart$;
  if (void 0 === h3) {
    const t5 = s4?.renderBefore ?? null;
    e5._$litPart$ = h3 = new k(i5.insertBefore(c3(), t5), t5, void 0, s4 ?? {});
  }
  return h3._$AI(t4), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t4 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t4.firstChild, t4;
  }
  update(t4) {
    const r6 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = D(r6, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4?.({ LitElement: i4 });
(s3.litElementVersions ??= []).push("4.2.2");

// node_modules/@lit/reactive-element/decorators/custom-element.js
var t3 = (t4) => (e5, o6) => {
  void 0 !== o6 ? o6.addInitializer(() => {
    customElements.define(t4, e5);
  }) : customElements.define(t4, e5);
};

// node_modules/@lit/reactive-element/decorators/property.js
var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r4 = (t4 = o5, e5, r6) => {
  const { kind: n5, metadata: i5 } = r6;
  let s4 = globalThis.litPropertyMetadata.get(i5);
  if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t4 = Object.create(t4)).wrapped = true), s4.set(r6.name, t4), "accessor" === n5) {
    const { name: o6 } = r6;
    return { set(r7) {
      const n6 = e5.get.call(this);
      e5.set.call(this, r7), this.requestUpdate(o6, n6, t4, true, r7);
    }, init(e6) {
      return void 0 !== e6 && this.C(o6, void 0, t4, e6), e6;
    } };
  }
  if ("setter" === n5) {
    const { name: o6 } = r6;
    return function(r7) {
      const n6 = this[o6];
      e5.call(this, r7), this.requestUpdate(o6, n6, t4, true, r7);
    };
  }
  throw Error("Unsupported decorator location: " + n5);
};
function n4(t4) {
  return (e5, o6) => "object" == typeof o6 ? r4(t4, e5, o6) : ((t5, e6, o7) => {
    const r6 = e6.hasOwnProperty(o7);
    return e6.constructor.createProperty(o7, t5), r6 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
  })(t4, e5, o6);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}

// src/utils/api.ts
var DEFAULT_BASE_URL = "https://rubyevents.org";
var ApiClient = class {
  constructor(baseUrl = DEFAULT_BASE_URL) {
    this.baseUrl = baseUrl.replace(/\/$/, "");
  }
  async fetch(endpoint) {
    const url = `${this.baseUrl}/api/v1/embed${endpoint}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Not found");
      }
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  }
  async getTalk(slug) {
    return this.fetch(`/talks/${encodeURIComponent(slug)}`);
  }
  async getSpeaker(slug) {
    return this.fetch(
      `/speakers/${encodeURIComponent(slug)}`
    );
  }
  async getProfile(slug) {
    return this.fetch(
      `/profiles/${encodeURIComponent(slug)}`
    );
  }
  async getEvents(filter) {
    const params = filter ? `?filter=${encodeURIComponent(filter)}` : "";
    return this.fetch(`/events${params}`);
  }
  async getEvent(slug) {
    return this.fetch(
      `/events/${encodeURIComponent(slug)}`
    );
  }
  async getParticipants(eventSlug) {
    return this.fetch(
      `/events/${encodeURIComponent(eventSlug)}/participants`
    );
  }
  async getStickers(userSlug) {
    return this.fetch(
      `/stickers/${encodeURIComponent(userSlug)}`
    );
  }
  async getStamps(userSlug) {
    return this.fetch(
      `/stamps/${encodeURIComponent(userSlug)}`
    );
  }
  async getTopic(slug) {
    return this.fetch(
      `/topics/${encodeURIComponent(slug)}`
    );
  }
};
var defaultClient = null;
function getApiClient(baseUrl) {
  if (baseUrl) {
    return new ApiClient(baseUrl);
  }
  if (!defaultClient) {
    defaultClient = new ApiClient();
  }
  return defaultClient;
}

// src/base/styles.ts
var baseStyles = i`
  :host {
    --rubyevents-primary-color: var(--rubyevents-primary, #dc143c);
    --rubyevents-secondary-color: var(--rubyevents-secondary, #7a4ec2);
    --rubyevents-text-color: var(--rubyevents-text, #261b23);
    --rubyevents-text-muted: var(--rubyevents-muted, #6b7280);
    --rubyevents-background: var(--rubyevents-bg, #ffffff);
    --rubyevents-background-alt: var(--rubyevents-bg-alt, #f8f9fa);
    --rubyevents-border-color: var(--rubyevents-border, #e5e7eb);
    --rubyevents-border-radius: var(--rubyevents-radius, 8px);
    --rubyevents-font-family: var(
      --rubyevents-font,
      Inter,
      system-ui,
      -apple-system,
      sans-serif
    );

    display: block;
    font-family: var(--rubyevents-font-family);
    color: var(--rubyevents-text-color);
    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: var(--rubyevents-primary-color);
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
var cardStyles = i`
  .card {
    background: var(--rubyevents-background);
    border: 1px solid var(--rubyevents-border-color);
    border-radius: var(--rubyevents-border-radius);
    overflow: hidden;
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .card-subtitle {
    margin: 0;
    font-size: 0.875rem;
    color: var(--rubyevents-text-muted);
  }
`;
var thumbnailStyles = i`
  .thumbnail {
    position: relative;
    aspect-ratio: 16 / 9;
    background: var(--rubyevents-background-alt);
    overflow: hidden;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
  }

  .duration {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 0.125rem 0.375rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 0.75rem;
    border-radius: 4px;
  }
`;
var avatarStyles = i`
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    background: var(--rubyevents-background-alt);
  }

  .avatar-sm {
    width: 2rem;
    height: 2rem;
  }

  .avatar-lg {
    width: 4rem;
    height: 4rem;
  }

  .avatar-xl {
    width: 6rem;
    height: 6rem;
  }

  .avatar-group {
    display: flex;
    flex-direction: row;
  }

  .avatar-group .avatar {
    margin-left: -0.5rem;
    border: 2px solid var(--rubyevents-background);
  }

  .avatar-group .avatar:first-child {
    margin-left: 0;
  }
`;
var badgeStyles = i`
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;
    background: var(--rubyevents-background-alt);
    color: var(--rubyevents-text-muted);
  }

  .badge-primary {
    background: var(--rubyevents-primary-color);
    color: white;
  }

  .badge-secondary {
    background: var(--rubyevents-secondary-color);
    color: white;
  }
`;
var listStyles = i`
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: var(--rubyevents-background);
    border: 1px solid var(--rubyevents-border-color);
    border-radius: var(--rubyevents-border-radius);
    transition: background-color 0.15s ease;
  }

  .list-item:hover {
    background: var(--rubyevents-background-alt);
  }

  .list-item-content {
    flex: 1;
    min-width: 0;
  }

  .list-item-title {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-item-subtitle {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--rubyevents-text-muted);
  }
`;
var tabStyles = i`
  .tabs {
    display: flex;
    gap: 0.25rem;
    border-bottom: 1px solid var(--rubyevents-border-color);
    margin-bottom: 1rem;
  }

  .tab {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--rubyevents-text-muted);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .tab:hover {
    color: var(--rubyevents-text-color);
  }

  .tab.active {
    color: var(--rubyevents-primary-color);
    border-bottom-color: var(--rubyevents-primary-color);
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
  }
`;
var loadingStyles = i`
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    color: var(--rubyevents-text-muted);
  }

  .loading-spinner {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid var(--rubyevents-border-color);
    border-top-color: var(--rubyevents-primary-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .skeleton {
    background: linear-gradient(
      90deg,
      var(--rubyevents-background-alt) 25%,
      var(--rubyevents-border-color) 50%,
      var(--rubyevents-background-alt) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .skeleton-text {
    height: 1rem;
    margin-bottom: 0.5rem;
  }

  .skeleton-text:last-child {
    width: 60%;
  }

  .skeleton-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .skeleton-thumbnail {
    aspect-ratio: 16 / 9;
  }
`;
var errorStyles = i`
  .error {
    padding: 1rem;
    text-align: center;
    color: var(--rubyevents-text-muted);
  }

  .error-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .error-message {
    font-size: 0.875rem;
  }
`;
var gridStyles = i`
  .grid {
    display: grid;
    gap: 1rem;
  }

  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    .grid-2,
    .grid-3 {
      grid-template-columns: 1fr;
    }
  }
`;
var utilityStyles = i`
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-xs {
    font-size: 0.75rem;
  }

  .text-muted {
    color: var(--rubyevents-text-muted);
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
var footerStyles = i`
  .powered-by {
    margin-top: 0.75rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: right;
    font-size: 0.6875rem;
    color: var(--rubyevents-text-muted);
    opacity: 0.7;
  }

  .powered-by a {
    color: inherit;
  }

  .powered-by a:hover {
    color: var(--rubyevents-primary-color);
  }
`;

// src/base/BaseComponent.ts
var BaseComponent = class extends i4 {
  constructor() {
    super(...arguments);
    this.baseUrl = "https://rubyevents.org";
    this.showFooter = false;
    this.loadingState = "idle";
    this.data = null;
    this.error = null;
    this.api = null;
  }
  static {
    this.styles = [baseStyles, loadingStyles, errorStyles, footerStyles];
  }
  connectedCallback() {
    super.connectedCallback();
    this.api = getApiClient(this.baseUrl);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("baseUrl") && this.api) {
      this.api = getApiClient(this.baseUrl);
      this.fetchData();
    }
  }
  renderLoading() {
    return b2`
      <div class="loading">
        <div class="loading-spinner"></div>
      </div>
    `;
  }
  renderError() {
    return b2`
      <div class="error">
        <div class="error-icon">!</div>
        <p class="error-message">${this.error || "Something went wrong"}</p>
      </div>
    `;
  }
  renderFooter() {
    if (!this.showFooter) {
      return b2``;
    }
    return b2`
      <div class="powered-by">
        Powered by
        <a href="${this.baseUrl}" target="_blank" rel="noopener noreferrer"
          >RubyEvents.org</a
        >
      </div>
    `;
  }
  formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  }
  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    } catch {
      return dateString;
    }
  }
  buildUrl(path) {
    return `${this.baseUrl}${path}`;
  }
  render() {
    switch (this.loadingState) {
      case "loading":
        return this.renderLoading();
      case "error":
        return this.renderError();
      case "success":
        return this.renderContent();
      default:
        return b2``;
    }
  }
};
__decorateClass([
  n4({ type: String, attribute: "base-url" })
], BaseComponent.prototype, "baseUrl", 2);
__decorateClass([
  n4({ type: Boolean, attribute: "show-footer" })
], BaseComponent.prototype, "showFooter", 2);
__decorateClass([
  r5()
], BaseComponent.prototype, "loadingState", 2);
__decorateClass([
  r5()
], BaseComponent.prototype, "data", 2);
__decorateClass([
  r5()
], BaseComponent.prototype, "error", 2);
var skeletonCard = i`
  .skeleton-card {
    padding: 1rem;
  }

  .skeleton-card .skeleton-thumbnail {
    margin-bottom: 0.75rem;
  }

  .skeleton-card .skeleton-text {
    height: 1rem;
    margin-bottom: 0.5rem;
  }

  .skeleton-card .skeleton-text:last-child {
    width: 60%;
  }
`;

// src/components/rubyevents-talk.ts
var RubyeventsTalk = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") && this.slug) {
      this.fetchData();
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getTalk(this.slug);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load talk";
      this.loadingState = "error";
    }
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const talk = this.data;
    const speakerNames = talk.speakers.map((s4) => s4.name).join(", ");
    return b2`
      <div class="talk-card card">
        <a
          href="${talk.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${talk.title}"
        >
          <div class="thumbnail">
            ${talk.thumbnail_url ? b2`<img
                  src="${talk.thumbnail_url}"
                  alt="${talk.title}"
                  loading="lazy"
                />` : b2`<div class="skeleton skeleton-thumbnail"></div>`}
            ${talk.duration_in_seconds ? b2`<span class="duration"
                  >${this.formatDuration(talk.duration_in_seconds)}</span
                >` : ""}
          </div>
          <div class="card-body">
            <h3 class="card-title line-clamp-2">${talk.title}</h3>

            ${talk.speakers.length > 0 ? b2`
                  <div class="speakers">
                    <div class="avatar-group">
                      ${talk.speakers.slice(0, 3).map(
      (speaker) => b2`
                          <img
                            class="avatar avatar-sm"
                            src="${speaker.avatar_url}"
                            alt="${speaker.name}"
                            loading="lazy"
                          />
                        `
    )}
                    </div>
                    <span class="speaker-names truncate">${speakerNames}</span>
                  </div>
                ` : ""}
            ${talk.event ? b2`
                  <div class="event-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="truncate">${talk.event.name}</span>
                  </div>
                  ${talk.event.location ? b2`
                        <div class="event-info">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                          </svg>
                          <span>${talk.event.location}</span>
                        </div>
                      ` : ""}
                ` : ""}
            ${talk.date ? b2`
                  <div class="talk-meta">
                    <span>${this.formatDate(talk.date)}</span>
                  </div>
                ` : ""}
            ${this.renderFooter()}
          </div>
        </a>
      </div>
    `;
  }
  renderLoading() {
    return b2`
      <div class="talk-card card">
        <div class="skeleton skeleton-thumbnail"></div>
        <div class="card-body">
          <div class="skeleton skeleton-text" style="width: 90%"></div>
          <div class="skeleton skeleton-text" style="width: 70%"></div>
          <div class="speakers" style="margin-top: 0.5rem">
            <div class="skeleton skeleton-avatar"></div>
            <div class="skeleton skeleton-text" style="width: 120px"></div>
          </div>
        </div>
      </div>
    `;
  }
};
RubyeventsTalk.styles = [
  ...BaseComponent.styles,
  cardStyles,
  thumbnailStyles,
  avatarStyles,
  badgeStyles,
  utilityStyles,
  i`
      .talk-card {
        max-width: 400px;
      }

      .talk-card a {
        color: inherit;
        text-decoration: none;
      }

      .talk-card a:hover .card-title {
        color: var(--rubyevents-primary-color);
      }

      .talk-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.75rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
      }

      .speakers {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .speaker-names {
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .event-info {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
        margin-top: 0.5rem;
      }

      .event-info + .event-info {
        margin-top: 0.125rem;
      }

      .event-info svg {
        width: 0.875rem;
        height: 0.875rem;
        flex-shrink: 0;
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsTalk.prototype, "slug", 2);
RubyeventsTalk = __decorateClass([
  t3("rubyevents-talk")
], RubyeventsTalk);

// src/components/rubyevents-speaker.ts
var RubyeventsSpeaker = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.tab = "talks";
    this.activeTab = "talks";
  }
  connectedCallback() {
    super.connectedCallback();
    this.activeTab = this.tab;
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") && this.slug) {
      this.fetchData();
    }
    if (changedProperties.has("tab")) {
      this.activeTab = this.tab;
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getSpeaker(this.slug);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load speaker";
      this.loadingState = "error";
    }
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const speaker = this.data;
    return b2`
      <div class="speaker-card card">
        <div class="speaker-header">
          <a
            href="${speaker.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${speaker.name}"
          >
            <img
              class="avatar avatar-xl"
              src="${speaker.avatar_url}"
              alt="${speaker.name}"
              loading="lazy"
            />
          </a>
          <div class="speaker-info">
            <h3 class="speaker-name">
              <a href="${speaker.url}" target="_blank" rel="noopener noreferrer"
                >${speaker.name}</a
              >
            </h3>
            <span class="badge">${speaker.talks_count} talks</span>
            ${speaker.bio ? b2`<p class="speaker-bio">${speaker.bio}</p>` : ""}
            <div class="speaker-links">
              ${speaker.twitter ? b2`
                    <a
                      href="https://twitter.com/${speaker.twitter}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                      </svg>
                    </a>
                  ` : ""}
              ${speaker.github ? b2`
                    <a
                      href="https://github.com/${speaker.github}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  ` : ""}
              ${speaker.website ? b2`
                    <a
                      href="${speaker.website}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Website"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  ` : ""}
            </div>
          </div>
        </div>

        <div class="tab-container">
          <div class="tabs">
            <button
              class="tab ${this.activeTab === "talks" ? "active" : ""}"
              @click=${() => this.setTab("talks")}
            >
              Talks (${speaker.talks_count})
            </button>
            <button
              class="tab ${this.activeTab === "events" ? "active" : ""}"
              @click=${() => this.setTab("events")}
            >
              Events (${speaker.events_count})
            </button>
          </div>

          <div
            class="tab-content ${this.activeTab === "talks" ? "active" : ""}"
          >
            ${this.renderTalks()}
          </div>

          <div
            class="tab-content ${this.activeTab === "events" ? "active" : ""}"
          >
            ${this.renderEvents()}
          </div>
          ${this.renderFooter()}
        </div>
      </div>
    `;
  }
  renderTalks() {
    if (!this.data || this.data.talks.length === 0) {
      return b2`<p class="text-muted text-sm">No talks found.</p>`;
    }
    const hasMore = this.data.talks_count > this.data.talks.length;
    return b2`
      <div class="list">
        ${this.data.talks.map(
      (talk) => b2`
            <a
              href="${this.buildUrl(`/talks/${talk.slug}`)}"
              class="list-item talk-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${talk.thumbnail_url ? b2`<img
                    class="talk-thumbnail"
                    src="${talk.thumbnail_url}"
                    alt="${talk.title}"
                    loading="lazy"
                  />` : b2`<div class="talk-thumbnail skeleton"></div>`}
              <div class="list-item-content">
                <h4 class="list-item-title line-clamp-2">${talk.title}</h4>
                <p class="list-item-subtitle">
                  ${talk.event_name}
                  ${talk.date ? `- ${this.formatDate(talk.date)}` : ""}
                </p>
              </div>
            </a>
          `
    )}
      </div>
      ${hasMore ? b2`
            <a
              href="${this.data.url}"
              class="view-all-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all ${this.data.talks_count} talks on RubyEvents
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </a>
          ` : ""}
    `;
  }
  getEventInitial(name) {
    return name ? name.charAt(0).toUpperCase() : "?";
  }
  getEventBackground(event) {
    if (event.featured_background) {
      return event.featured_background;
    }
    return "var(--rubyevents-primary-color)";
  }
  renderEvents() {
    if (!this.data || this.data.events.length === 0) {
      return b2`<p class="text-muted text-sm">No events found.</p>`;
    }
    const hasMore = this.data.events_count > this.data.events.length;
    return b2`
      <div class="list">
        ${this.data.events.map(
      (event) => b2`
            <a
              href="${this.buildUrl(`/events/${event.slug}`)}"
              class="list-item event-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${event.avatar_url ? b2`<img
                    class="event-avatar"
                    src="${event.avatar_url}"
                    alt="${event.name}"
                    loading="lazy"
                  />` : b2`<div
                    class="event-avatar-placeholder"
                    style="background: ${this.getEventBackground(event)}"
                  >
                    ${this.getEventInitial(event.name)}
                  </div>`}
              <div class="list-item-content">
                <h4 class="list-item-title">${event.name}</h4>
                <p class="list-item-subtitle">
                  ${event.location}
                  ${event.date ? `- ${this.formatDate(event.date)}` : ""}
                </p>
              </div>
            </a>
          `
    )}
      </div>
      ${hasMore ? b2`
            <a
              href="${this.data.url}"
              class="view-all-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all ${this.data.events_count} events on RubyEvents
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </a>
          ` : ""}
    `;
  }
  renderLoading() {
    return b2`
      <div class="speaker-card card">
        <div class="speaker-header">
          <div class="skeleton skeleton-avatar avatar-xl"></div>
          <div class="speaker-info">
            <div class="skeleton skeleton-text" style="width: 150px"></div>
            <div
              class="skeleton skeleton-text"
              style="width: 60px; height: 1.25rem"
            ></div>
            <div class="skeleton skeleton-text" style="width: 100%"></div>
            <div class="skeleton skeleton-text" style="width: 80%"></div>
          </div>
        </div>
        <div class="tab-container">
          <div class="skeleton skeleton-text" style="width: 100%"></div>
        </div>
      </div>
    `;
  }
};
RubyeventsSpeaker.styles = [
  ...BaseComponent.styles,
  cardStyles,
  thumbnailStyles,
  avatarStyles,
  badgeStyles,
  listStyles,
  tabStyles,
  utilityStyles,
  i`
      .speaker-card {
        max-width: 500px;
      }

      .speaker-header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .speaker-info {
        flex: 1;
        min-width: 0;
      }

      .speaker-name {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .speaker-name a {
        color: inherit;
        text-decoration: none;
      }

      .speaker-name a:hover {
        color: var(--rubyevents-primary-color);
      }

      .speaker-bio {
        margin: 0.5rem 0 0 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .speaker-links {
        display: flex;
        gap: 0.75rem;
        margin-top: 0.5rem;
      }

      .speaker-links a {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
      }

      .speaker-links a:hover {
        color: var(--rubyevents-primary-color);
      }

      .speaker-links svg {
        width: 1rem;
        height: 1rem;
      }

      .tab-container {
        padding: 1rem;
      }

      .talk-item {
        display: flex;
        gap: 0.75rem;
        text-decoration: none;
        color: inherit;
      }

      .talk-item:hover {
        background: var(--rubyevents-background-alt);
      }

      .talk-thumbnail {
        width: 80px;
        aspect-ratio: 16 / 9;
        border-radius: 4px;
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .event-item {
        text-decoration: none;
        color: inherit;
      }

      .event-avatar {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .event-avatar-placeholder {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        flex-shrink: 0;
      }

      .view-all-card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
        color: var(--rubyevents-primary-color);
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: background-color 0.15s ease;
      }

      .view-all-card:hover {
        background: var(--rubyevents-border-color);
      }

      .view-all-card svg {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsSpeaker.prototype, "slug", 2);
__decorateClass([
  n4({ type: String })
], RubyeventsSpeaker.prototype, "tab", 2);
__decorateClass([
  r5()
], RubyeventsSpeaker.prototype, "activeTab", 2);
RubyeventsSpeaker = __decorateClass([
  t3("rubyevents-speaker")
], RubyeventsSpeaker);

// src/components/rubyevents-profile.ts
var RubyeventsProfile = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") && this.slug) {
      this.fetchData();
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getProfile(this.slug);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load profile";
      this.loadingState = "error";
    }
  }
  formatAttendedAs(attendedAs) {
    return attendedAs.replace(/_/g, " ");
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const profile = this.data;
    return b2`
      <div class="profile-card card">
        <div class="profile-header">
          <a
            href="${profile.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${profile.name}"
          >
            <img
              class="avatar avatar-xl"
              src="${profile.avatar_url}"
              alt="${profile.name}"
              loading="lazy"
            />
          </a>
          <div class="profile-info">
            <h3 class="profile-name">
              <a href="${profile.url}" target="_blank" rel="noopener noreferrer"
                >${profile.name}</a
              >
            </h3>
            ${profile.location ? b2`
                  <div class="profile-location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    ${profile.location}
                  </div>
                ` : ""}
            ${profile.bio ? b2`<p class="profile-bio">${profile.bio}</p>` : ""}
            <div class="profile-links">
              ${profile.twitter ? b2`
                    <a
                      href="https://twitter.com/${profile.twitter}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                      </svg>
                    </a>
                  ` : ""}
              ${profile.github ? b2`
                    <a
                      href="https://github.com/${profile.github}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  ` : ""}
              ${profile.website ? b2`
                    <a
                      href="${profile.website}"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Website"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  ` : ""}
            </div>
          </div>
        </div>

        <div class="events-container">
          ${this.renderUpcomingEvents()}
          ${this.renderFooter()}
        </div>
      </div>
    `;
  }
  getEventInitial(name) {
    return name ? name.charAt(0).toUpperCase() : "?";
  }
  getEventBackground(event) {
    if (event.featured_background) {
      return event.featured_background;
    }
    return "var(--rubyevents-primary-color)";
  }
  renderUpcomingEvents() {
    if (!this.data || this.data.upcoming_events.length === 0) {
      return b2`<p class="text-muted text-sm">No upcoming events.</p>`;
    }
    const hasMore = this.data.upcoming_events_count > this.data.upcoming_events.length;
    return b2`
      <div class="events-header">Upcoming Events (${this.data.upcoming_events_count})</div>
      <div class="list">
        ${this.data.upcoming_events.map(
      (event) => b2`
            <a
              href="${this.buildUrl(`/events/${event.slug}`)}"
              class="list-item event-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${event.avatar_url ? b2`<img
                    class="event-avatar"
                    src="${event.avatar_url}"
                    alt="${event.name}"
                    loading="lazy"
                  />` : b2`<div
                    class="event-avatar-placeholder"
                    style="background: ${this.getEventBackground(event)}"
                  >
                    ${this.getEventInitial(event.name)}
                  </div>`}
              <div class="list-item-content">
                <h4 class="list-item-title">${event.name}</h4>
                <p class="list-item-subtitle">
                  ${event.date ? this.formatDate(event.date) : ""}
                  ${event.location ? b2`
                        <span class="event-location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          ${event.location}
                        </span>
                      ` : ""}
                  <span class="badge attended-badge"
                    >${this.formatAttendedAs(event.attended_as)}</span
                  >
                </p>
              </div>
            </a>
          `
    )}
      </div>
      ${hasMore ? b2`
            <a
              href="${this.data.url}"
              class="view-all-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all ${this.data.upcoming_events_count} events on RubyEvents
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </a>
          ` : ""}
    `;
  }
  renderLoading() {
    return b2`
      <div class="profile-card card">
        <div class="profile-header">
          <div class="skeleton skeleton-avatar avatar-xl"></div>
          <div class="profile-info">
            <div class="skeleton skeleton-text" style="width: 150px"></div>
            <div class="skeleton skeleton-text" style="width: 100px"></div>
            <div class="skeleton skeleton-text" style="width: 100%"></div>
            <div class="skeleton skeleton-text" style="width: 80%"></div>
          </div>
        </div>
        <div class="events-container">
          <div class="skeleton skeleton-text" style="width: 100%"></div>
        </div>
      </div>
    `;
  }
};
RubyeventsProfile.styles = [
  ...BaseComponent.styles,
  cardStyles,
  avatarStyles,
  badgeStyles,
  listStyles,
  utilityStyles,
  i`
      .profile-card {
        max-width: 500px;
      }

      .profile-header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .profile-info {
        flex: 1;
        min-width: 0;
      }

      .profile-name {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .profile-name a {
        color: inherit;
        text-decoration: none;
      }

      .profile-name a:hover {
        color: var(--rubyevents-primary-color);
      }

      .profile-location {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        margin-bottom: 0.5rem;
      }

      .profile-location svg {
        width: 0.875rem;
        height: 0.875rem;
      }

      .profile-bio {
        margin: 0.5rem 0 0 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .profile-links {
        display: flex;
        gap: 0.75rem;
        margin-top: 0.5rem;
      }

      .profile-links a {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.8125rem;
        color: var(--rubyevents-text-muted);
      }

      .profile-links a:hover {
        color: var(--rubyevents-primary-color);
      }

      .profile-links svg {
        width: 1rem;
        height: 1rem;
      }

      .events-container {
        padding: 1rem;
      }

      .events-header {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--rubyevents-text-muted);
        margin-bottom: 0.75rem;
      }

      .event-item {
        text-decoration: none;
        color: inherit;
      }

      .attended-badge {
        text-transform: capitalize;
      }

      .event-location {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .event-location svg {
        width: 0.75rem;
        height: 0.75rem;
        flex-shrink: 0;
      }

      .event-avatar {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .event-avatar-placeholder {
        width: 40px;
        height: 40px;
        border-radius: var(--rubyevents-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        flex-shrink: 0;
      }

      .view-all-card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
        color: var(--rubyevents-primary-color);
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: background-color 0.15s ease;
      }

      .view-all-card:hover {
        background: var(--rubyevents-border-color);
      }

      .view-all-card svg {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsProfile.prototype, "slug", 2);
RubyeventsProfile = __decorateClass([
  t3("rubyevents-profile")
], RubyeventsProfile);

// src/components/rubyevents-event.ts
var RubyeventsEvent = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.showParticipants = true;
    this.maxAvatars = 8;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") || changedProperties.has("baseUrl")) {
      this.fetchData();
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getEvent(this.slug);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load event";
      this.loadingState = "error";
    }
  }
  getEventInitial() {
    if (!this.data?.name) return "?";
    return this.data.name.charAt(0).toUpperCase();
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const event = this.data;
    return b2`
      <div class="card event-card">
        <div class="event-header">
          ${event.banner_url ? b2`<img
                class="event-banner"
                src="${event.banner_url}"
                alt=""
                loading="lazy"
                style="background: ${event.featured_background || "var(--rubyevents-primary-color)"}"
              />` : b2`<div
                class="event-banner"
                style="background: ${event.featured_background || "var(--rubyevents-primary-color)"}"
              ></div>`}

          <div class="event-avatar-container">
            ${event.avatar_url ? b2`<img
                  class="event-avatar"
                  src="${event.avatar_url}"
                  alt="${event.name}"
                  loading="lazy"
                />` : b2`<div class="event-avatar-placeholder">
                  ${this.getEventInitial()}
                </div>`}
          </div>
        </div>

        <div class="event-body">
          <h3 class="event-title">
            <a href="${event.url}" target="_blank" rel="noopener noreferrer">
              ${event.name}
            </a>
          </h3>

          <div class="event-meta">
            ${event.location ? b2`
                  <span class="event-meta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    ${event.location}
                  </span>
                ` : ""}
            ${event.start_date ? b2`
                  <span class="event-meta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    ${this.formatDate(event.start_date)}
                    ${event.end_date && event.end_date !== event.start_date ? ` - ${this.formatDate(event.end_date)}` : ""}
                  </span>
                ` : ""}
          </div>

          ${event.description ? b2`
                <p class="event-description line-clamp-2">
                  ${event.description}
                </p>
              ` : ""}

          <div class="event-stats">
            <div class="event-stat">
              <span class="event-stat-value">${event.talks_count}</span>
              <span class="event-stat-label">Talks</span>
            </div>
            <div class="event-stat">
              <span class="event-stat-value">${event.speakers_count}</span>
              <span class="event-stat-label">Speakers</span>
            </div>
            <div class="event-stat">
              <span class="event-stat-value">${event.counts.total}</span>
              <span class="event-stat-label">Participants</span>
            </div>
          </div>

          ${this.showParticipants ? this.renderParticipants(event) : ""}

          <div class="event-links">
            <a
              class="event-link"
              href="${event.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Event
            </a>
            ${event.website ? b2`
                  <a
                    class="event-link event-link-secondary"
                    href="${event.website}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Website
                  </a>
                ` : ""}
          </div>

          ${this.renderFooter()}
        </div>
      </div>
    `;
  }
  renderParticipants(event) {
    const hasParticipants = event.participants.keynote_speakers.length > 0 || event.participants.speakers.length > 0 || event.participants.attendees.length > 0;
    if (!hasParticipants) {
      return b2``;
    }
    return b2`
      ${event.participants.keynote_speakers.length > 0 ? this.renderParticipantGroup(
      "Keynote Speakers",
      event.participants.keynote_speakers,
      event.counts.keynote_speakers
    ) : ""}
      ${event.participants.speakers.length > 0 ? this.renderParticipantGroup(
      "Speakers",
      event.participants.speakers,
      event.counts.speakers
    ) : ""}
      ${event.participants.attendees.length > 0 ? this.renderParticipantGroup(
      "Attendees",
      event.participants.attendees,
      event.counts.attendees
    ) : ""}
    `;
  }
  renderParticipantGroup(label, participants, totalCount) {
    const displayParticipants = participants.slice(0, this.maxAvatars);
    const remainingCount = totalCount - displayParticipants.length;
    return b2`
      <div class="participants-section">
        <div class="participants-label">${label}</div>
        <div class="participants-avatars">
          ${displayParticipants.map(
      (participant) => b2`
              <a
                href="${this.baseUrl}/profiles/${participant.slug}"
                target="_blank"
                rel="noopener noreferrer"
                title="${participant.name}"
              >
                <img
                  class="avatar"
                  src="${participant.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(participant.name)}&size=64&background=dc143c&color=fff`}"
                  alt="${participant.name}"
                  loading="lazy"
                />
              </a>
            `
    )}
          ${remainingCount > 0 ? b2`<span class="more-participants">+${remainingCount}</span>` : ""}
        </div>
      </div>
    `;
  }
  renderLoading() {
    return b2`
      <div class="card event-card">
        <div class="event-header">
          <div class="skeleton event-banner"></div>
          <div class="event-avatar-container">
            <div class="skeleton event-avatar"></div>
          </div>
        </div>
        <div class="event-body">
          <div class="skeleton skeleton-text" style="width: 60px"></div>
          <div
            class="skeleton skeleton-text"
            style="width: 80%; height: 1.5rem"
          ></div>
          <div class="skeleton skeleton-text" style="width: 60%"></div>
          <div class="skeleton skeleton-text" style="width: 50%"></div>
          <div
            class="skeleton"
            style="height: 60px; margin-top: 1rem; margin-bottom: 1rem"
          ></div>
          <div class="skeleton skeleton-text" style="width: 40%"></div>
        </div>
      </div>
    `;
  }
};
RubyeventsEvent.styles = [
  ...BaseComponent.styles,
  cardStyles,
  avatarStyles,
  badgeStyles,
  utilityStyles,
  footerStyles,
  i`
      .event-card {
        max-width: 400px;
      }

      .event-header {
        position: relative;
      }

      .event-banner {
        width: 100%;
        height: auto;
        display: block;
      }

      .event-avatar-container {
        position: absolute;
        bottom: -32px;
        left: 1rem;
        z-index: 1;
      }

      .event-avatar {
        width: 64px;
        height: 64px;
        border-radius: var(--rubyevents-border-radius);
        border: 3px solid var(--rubyevents-background);
        object-fit: cover;
        background: var(--rubyevents-background-alt);
      }

      .event-avatar-placeholder {
        width: 64px;
        height: 64px;
        border-radius: var(--rubyevents-border-radius);
        border: 3px solid var(--rubyevents-background);
        background: var(--rubyevents-primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .event-body {
        padding: 2.5rem 1rem 1rem 1rem;
      }

      .event-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.25;
      }

      .event-title a {
        color: inherit;
        text-decoration: none;
      }

      .event-title a:hover {
        color: var(--rubyevents-primary-color);
      }

      .event-meta {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .event-meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .event-meta-item svg {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
      }

      .event-description {
        margin: 0 0 1rem 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        line-height: 1.5;
      }

      .event-stats {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        padding: 0.75rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
      }

      .event-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
      }

      .event-stat-value {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--rubyevents-text-color);
      }

      .event-stat-label {
        font-size: 0.75rem;
        color: var(--rubyevents-text-muted);
      }

      .participants-section {
        margin-bottom: 1rem;
      }

      .participants-label {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--rubyevents-text-muted);
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .participants-avatars {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
      }

      .participants-avatars .avatar {
        width: 2rem;
        height: 2rem;
        border: 2px solid var(--rubyevents-background);
      }

      .more-participants {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: var(--rubyevents-background-alt);
        border: 2px solid var(--rubyevents-background);
        font-size: 0.625rem;
        font-weight: 600;
        color: var(--rubyevents-text-muted);
      }

      .event-links {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .event-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.375rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: var(--rubyevents-border-radius);
        background: var(--rubyevents-primary-color);
        color: white;
        text-decoration: none;
        transition: opacity 0.15s ease;
      }

      .event-link:hover {
        opacity: 0.9;
        text-decoration: none;
      }

      .event-link-secondary {
        background: var(--rubyevents-background-alt);
        color: var(--rubyevents-text-color);
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsEvent.prototype, "slug", 2);
__decorateClass([
  n4({ type: Boolean, attribute: "show-participants" })
], RubyeventsEvent.prototype, "showParticipants", 2);
__decorateClass([
  n4({ type: Number, attribute: "max-avatars" })
], RubyeventsEvent.prototype, "maxAvatars", 2);
RubyeventsEvent = __decorateClass([
  t3("rubyevents-event")
], RubyeventsEvent);

// src/components/rubyevents-event-card.ts
var RubyeventsEventCard = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.size = "md";
    this.showKind = true;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") || changedProperties.has("baseUrl")) {
      this.fetchData();
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getEvent(this.slug);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load event";
      this.loadingState = "error";
    }
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const event = this.data;
    const backgroundStyle = event.featured_background ? `background: ${event.featured_background}` : "";
    return b2`
      <div class="event-card">
        <a
          class="event-card-link"
          href="${event.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="event-background" style=${backgroundStyle}>
            ${event.banner_url ? b2`<img
                  class="event-background-image"
                  src="${event.banner_url}"
                  alt=""
                  loading="lazy"
                />` : ""}
          </div>
          <div class="event-overlay"></div>

          <div class="event-content">
            ${event.avatar_url ? b2`<img
                  class="event-avatar"
                  src="${event.avatar_url}"
                  alt=""
                  loading="lazy"
                />` : ""}

            ${this.showKind && event.kind ? b2`
                  <div class="event-kind">
                    <span class="badge">${event.kind}</span>
                  </div>
                ` : ""}

            <h3 class="event-title">${event.name}</h3>

            <div class="event-meta">
              ${event.location ? b2`
                    <span class="event-meta-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      ${event.location}
                    </span>
                  ` : ""}
              ${event.start_date ? b2`
                    <span class="event-meta-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      ${this.formatDate(event.start_date)}
                    </span>
                  ` : ""}
            </div>
          </div>
        </a>
      </div>
    `;
  }
  renderLoading() {
    return b2`<div class="skeleton-card"></div>`;
  }
};
RubyeventsEventCard.styles = [
  ...BaseComponent.styles,
  cardStyles,
  badgeStyles,
  i`
      .event-card {
        position: relative;
        aspect-ratio: 16 / 9;
        border-radius: var(--rubyevents-border-radius);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .event-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }

      .event-card-link {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
      }

      .event-background {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          var(--rubyevents-primary-color) 0%,
          var(--rubyevents-secondary-color) 100%
        );
      }

      .event-background-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .event-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.4) 50%,
          rgba(0, 0, 0, 0.1) 100%
        );
      }

      .event-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1rem;
        color: white;
      }

      .event-avatar {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        width: 40px;
        height: 40px;
        border-radius: 6px;
        object-fit: cover;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
      }

      .event-kind {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
      }

      .event-kind .badge {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        backdrop-filter: blur(4px);
        font-size: 0.625rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .event-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.25;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }

      .event-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        font-size: 0.8125rem;
        opacity: 0.9;
      }

      .event-meta-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .event-meta-item svg {
        width: 0.875rem;
        height: 0.875rem;
        opacity: 0.8;
      }

      /* Size variants */
      :host([size='sm']) .event-card {
        max-width: 280px;
      }

      :host([size='sm']) .event-title {
        font-size: 0.9375rem;
      }

      :host([size='sm']) .event-meta {
        font-size: 0.75rem;
      }

      :host([size='sm']) .event-content {
        padding: 0.75rem;
      }

      :host([size='lg']) .event-card {
        max-width: 380px;
      }

      :host([size='lg']) .event-title {
        font-size: 1.375rem;
      }

      /* Loading skeleton */
      .skeleton-card {
        aspect-ratio: 16 / 9;
        border-radius: var(--rubyevents-border-radius);
        background: linear-gradient(
          90deg,
          var(--rubyevents-background-alt) 25%,
          var(--rubyevents-border-color) 50%,
          var(--rubyevents-background-alt) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsEventCard.prototype, "slug", 2);
__decorateClass([
  n4({ type: String, reflect: true })
], RubyeventsEventCard.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, attribute: "show-kind" })
], RubyeventsEventCard.prototype, "showKind", 2);
RubyeventsEventCard = __decorateClass([
  t3("rubyevents-event-card")
], RubyeventsEventCard);

// src/components/rubyevents-events.ts
var RubyeventsEvents = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.filter = "upcoming";
    this.limit = 10;
    this.showFilter = false;
    this.title = "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("filter") || changedProperties.has("limit") || changedProperties.has("baseUrl")) {
      this.fetchData();
    }
  }
  async fetchData() {
    if (!this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getEvents(this.filter);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load events";
      this.loadingState = "error";
    }
  }
  handleFilterChange(e5) {
    const select = e5.target;
    this.filter = select.value;
  }
  getTitle() {
    if (this.title) return this.title;
    switch (this.filter) {
      case "upcoming":
        return "Upcoming Events";
      case "past":
        return "Past Events";
      default:
        return "Ruby Events";
    }
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const events = this.data.events.slice(0, this.limit);
    return b2`
      <div class="events-container">
        <div class="events-header">
          <h3 class="events-title">${this.getTitle()}</h3>
          ${this.showFilter ? b2`
                <select
                  class="filter-select"
                  @change=${this.handleFilterChange}
                  .value=${this.filter}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                  <option value="all">All</option>
                </select>
              ` : ""}
        </div>

        ${events.length > 0 ? b2`
              <div class="list">
                ${events.map((event) => this.renderEvent(event))}
              </div>
            ` : b2`
              <div class="empty-state">
                <p>No ${this.filter === "all" ? "" : this.filter} events found.</p>
              </div>
            `}
        ${this.renderFooter()}
      </div>
    `;
  }
  getEventInitial(name) {
    return name ? name.charAt(0).toUpperCase() : "?";
  }
  getEventBackground(event) {
    if (event.featured_background) {
      return event.featured_background;
    }
    return "var(--rubyevents-primary-color)";
  }
  renderEvent(event) {
    return b2`
      <a
        href="${event.url}"
        class="list-item event-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${event.avatar_url ? b2`<img
              class="event-avatar"
              src="${event.avatar_url}"
              alt="${event.name}"
              loading="lazy"
            />` : b2`<div
              class="event-avatar-placeholder"
              style="background: ${this.getEventBackground(event)}"
            >
              ${this.getEventInitial(event.name)}
            </div>`}
        <div class="list-item-content">
          <h4 class="list-item-title">${event.name}</h4>
          <p class="list-item-subtitle">${event.location}</p>
          ${event.start_date ? b2`
                <div class="event-dates">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  ${this.formatDate(event.start_date)}
                  ${event.end_date && event.end_date !== event.start_date ? ` - ${this.formatDate(event.end_date)}` : ""}
                </div>
              ` : ""}
        </div>
      </a>
    `;
  }
  renderLoading() {
    return b2`
      <div class="events-container">
        <div class="events-header">
          <div class="skeleton skeleton-text" style="width: 150px"></div>
        </div>
        <div class="list">
          ${[1, 2, 3].map(
      () => b2`
              <div class="list-item">
                <div
                  class="skeleton"
                  style="width: 48px; height: 48px; border-radius: var(--rubyevents-border-radius); flex-shrink: 0"
                ></div>
                <div class="list-item-content">
                  <div class="skeleton skeleton-text" style="width: 80%"></div>
                  <div class="skeleton skeleton-text" style="width: 50%"></div>
                  <div class="skeleton skeleton-text" style="width: 60%"></div>
                </div>
              </div>
            `
    )}
        </div>
      </div>
    `;
  }
};
RubyeventsEvents.styles = [
  ...BaseComponent.styles,
  cardStyles,
  listStyles,
  badgeStyles,
  utilityStyles,
  avatarStyles,
  i`
      .events-container {
        max-width: 600px;
      }

      .events-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }

      .events-title {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .filter-select {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
        border: 1px solid var(--rubyevents-border-color);
        border-radius: var(--rubyevents-border-radius);
        background: var(--rubyevents-background);
        color: var(--rubyevents-text-color);
        cursor: pointer;
      }

      .filter-select:focus {
        outline: none;
        border-color: var(--rubyevents-primary-color);
      }

      .event-item {
        text-decoration: none;
        color: inherit;
      }

      .event-details {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 0.25rem;
      }

      .event-stat {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        color: var(--rubyevents-text-muted);
      }

      .event-stat svg {
        width: 0.875rem;
        height: 0.875rem;
      }

      .event-dates {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        color: var(--rubyevents-text-muted);
      }

      .event-dates svg {
        width: 0.875rem;
        height: 0.875rem;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--rubyevents-text-muted);
      }

      .event-card {
        display: block;
        text-decoration: none;
        color: inherit;
        border: 1px solid var(--rubyevents-border-color);
        border-radius: var(--rubyevents-border-radius);
        overflow: hidden;
        background: var(--rubyevents-background);
        transition: box-shadow 0.15s ease;
      }

      .event-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .event-banner {
        width: 100%;
        aspect-ratio: 16 / 6;
        object-fit: cover;
        display: block;
      }

      .event-banner-placeholder {
        width: 100%;
        aspect-ratio: 16 / 6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 600;
        color: white;
      }

      .event-card-content {
        padding: 1rem;
      }

      .event-card-title {
        margin: 0 0 0.25rem 0;
        font-size: 1rem;
        font-weight: 600;
      }

      .event-card-location {
        margin: 0 0 0.5rem 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .events-grid {
        display: grid;
        gap: 1rem;
      }

      .event-avatar {
        width: 48px;
        height: 48px;
        border-radius: var(--rubyevents-border-radius);
        object-fit: cover;
        flex-shrink: 0;
      }

      .event-avatar-placeholder {
        width: 48px;
        height: 48px;
        border-radius: var(--rubyevents-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
        flex-shrink: 0;
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsEvents.prototype, "filter", 2);
__decorateClass([
  n4({ type: Number })
], RubyeventsEvents.prototype, "limit", 2);
__decorateClass([
  n4({ type: Boolean, attribute: "show-filter" })
], RubyeventsEvents.prototype, "showFilter", 2);
__decorateClass([
  n4({ type: String })
], RubyeventsEvents.prototype, "title", 2);
RubyeventsEvents = __decorateClass([
  t3("rubyevents-events")
], RubyeventsEvents);

// src/components/rubyevents-participants.ts
var RubyeventsParticipants = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.filter = "all";
    this.showTabs = true;
    this.compact = false;
    this.activeTab = "all";
  }
  connectedCallback() {
    super.connectedCallback();
    this.activeTab = this.filter;
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") && this.slug) {
      this.fetchData();
    }
    if (changedProperties.has("filter")) {
      this.activeTab = this.filter;
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getParticipants(this.slug);
      this.loadingState = "success";
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      if (message === "Not found") {
        this.error = `Event "${this.slug}" not found`;
      } else {
        this.error = "Failed to load participants";
      }
      this.loadingState = "error";
    }
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const { event, counts } = this.data;
    return b2`
      <div class="participants-container card">
        <div class="participants-header">
          <h3 class="event-name">
            <a href="${event.url}" target="_blank" rel="noopener noreferrer"
              >${event.name}</a
            >
          </h3>
          <span class="total-count">${counts.total} participants</span>
        </div>

        <div class="tab-container">
          ${this.showTabs && !this.compact ? this.renderTabs() : ""}
          ${this.renderParticipants()}
          ${this.renderFooter()}
        </div>
      </div>
    `;
  }
  renderTabs() {
    if (!this.data) return b2``;
    const { counts } = this.data;
    return b2`
      <div class="tabs">
        <button
          class="tab ${this.activeTab === "all" ? "active" : ""}"
          @click=${() => this.setTab("all")}
        >
          All (${counts.total})
        </button>
        ${counts.keynote_speakers > 0 ? b2`
              <button
                class="tab ${this.activeTab === "keynote_speakers" ? "active" : ""}"
                @click=${() => this.setTab("keynote_speakers")}
              >
                Keynotes (${counts.keynote_speakers})
              </button>
            ` : ""}
        ${counts.speakers > 0 ? b2`
              <button
                class="tab ${this.activeTab === "speakers" ? "active" : ""}"
                @click=${() => this.setTab("speakers")}
              >
                Speakers (${counts.speakers})
              </button>
            ` : ""}
        ${counts.attendees > 0 ? b2`
              <button
                class="tab ${this.activeTab === "attendees" ? "active" : ""}"
                @click=${() => this.setTab("attendees")}
              >
                Attendees (${counts.attendees})
              </button>
            ` : ""}
      </div>
    `;
  }
  renderParticipants() {
    if (!this.data) return b2``;
    const { participants, counts } = this.data;
    if (counts.total === 0) {
      return b2`
        <div class="empty-state">
          <p>No participants found for this event.</p>
        </div>
      `;
    }
    if (this.compact) {
      const allParticipants = [
        ...participants.keynote_speakers,
        ...participants.speakers,
        ...participants.attendees
      ];
      return b2`
        <div class="participants-grid">
          ${allParticipants.map((p3) => this.renderParticipant(p3))}
        </div>
      `;
    }
    if (this.activeTab === "all") {
      return this.renderAllParticipants();
    }
    const participantList = participants[this.activeTab] || [];
    if (participantList.length === 0) {
      return b2`
        <div class="empty-state">
          <p>No ${this.activeTab.replace("_", " ")} found.</p>
        </div>
      `;
    }
    return b2`
      <div class="participants-grid">
        ${participantList.map((p3) => this.renderParticipant(p3))}
      </div>
    `;
  }
  renderAllParticipants() {
    if (!this.data) return b2``;
    const { participants } = this.data;
    return b2`
      ${participants.keynote_speakers.length > 0 ? b2`
            <h4 class="section-title">Keynote Speakers</h4>
            <div class="participants-grid">
              ${participants.keynote_speakers.map(
      (p3) => this.renderParticipant(p3)
    )}
            </div>
          ` : ""}
      ${participants.speakers.length > 0 ? b2`
            <h4 class="section-title">Speakers</h4>
            <div class="participants-grid">
              ${participants.speakers.map((p3) => this.renderParticipant(p3))}
            </div>
          ` : ""}
      ${participants.attendees.length > 0 ? b2`
            <h4 class="section-title">Attendees</h4>
            <div class="participants-grid">
              ${participants.attendees.map((p3) => this.renderParticipant(p3))}
            </div>
          ` : ""}
    `;
  }
  renderParticipant(participant) {
    return b2`
      <a
        href="${this.buildUrl(`/profiles/${participant.slug}`)}"
        class="participant-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="avatar avatar-lg"
          src="${participant.avatar_url}"
          alt="${participant.name}"
          loading="lazy"
        />
        <span class="participant-name">${participant.name}</span>
      </a>
    `;
  }
  renderLoading() {
    return b2`
      <div class="participants-container card">
        <div class="participants-header">
          <div class="skeleton skeleton-text" style="width: 200px"></div>
          <div class="skeleton skeleton-text" style="width: 100px"></div>
        </div>
        <div class="tab-container">
          <div class="participants-grid">
            ${[1, 2, 3, 4, 5, 6].map(
      () => b2`
                <div class="participant-card">
                  <div class="skeleton skeleton-avatar avatar-lg"></div>
                  <div
                    class="skeleton skeleton-text"
                    style="width: 80px; margin-top: 0.5rem"
                  ></div>
                </div>
              `
    )}
          </div>
        </div>
      </div>
    `;
  }
};
RubyeventsParticipants.styles = [
  ...BaseComponent.styles,
  cardStyles,
  avatarStyles,
  badgeStyles,
  tabStyles,
  gridStyles,
  utilityStyles,
  i`
      .participants-container {
        max-width: 600px;
      }

      .participants-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .event-name {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .event-name a {
        color: inherit;
        text-decoration: none;
      }

      .event-name a:hover {
        color: var(--rubyevents-primary-color);
      }

      .total-count {
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .tab-container {
        padding: 1rem;
      }

      .participants-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1rem;
      }

      .participant-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0.75rem;
        border-radius: var(--rubyevents-border-radius);
        text-decoration: none;
        color: inherit;
        transition: background-color 0.15s ease;
      }

      .participant-card:hover {
        background: var(--rubyevents-background-alt);
      }

      .participant-name {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        word-break: break-word;
      }

      .section-title {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--rubyevents-text-muted);
        margin: 1.5rem 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .section-title:first-child {
        margin-top: 0;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--rubyevents-text-muted);
      }

      /* Compact mode */
      :host([compact]) .participants-grid {
        grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
        gap: 0.375rem;
      }

      :host([compact]) .participant-card {
        padding: 0;
      }

      :host([compact]) .participant-card:hover {
        background: transparent;
      }

      :host([compact]) .avatar {
        width: 32px;
        height: 32px;
        transition: transform 0.15s ease;
      }

      :host([compact]) .participant-card:hover .avatar {
        transform: scale(1.15);
      }

      :host([compact]) .participant-name {
        display: none;
      }

      :host([compact]) .section-title {
        display: none;
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsParticipants.prototype, "slug", 2);
__decorateClass([
  n4({ type: String })
], RubyeventsParticipants.prototype, "filter", 2);
__decorateClass([
  n4({ type: Boolean, attribute: "show-tabs" })
], RubyeventsParticipants.prototype, "showTabs", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], RubyeventsParticipants.prototype, "compact", 2);
__decorateClass([
  r5()
], RubyeventsParticipants.prototype, "activeTab", 2);
RubyeventsParticipants = __decorateClass([
  t3("rubyevents-participants")
], RubyeventsParticipants);

// src/components/rubyevents-stickers.ts
var RubyeventsStickers = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.minSize = 60;
    this.maxSize = 100;
    this.seed = 0;
    this.placedStickers = [];
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") || changedProperties.has("baseUrl")) {
      this.fetchData();
    }
    if (changedProperties.has("data") || changedProperties.has("minSize") || changedProperties.has("maxSize") || changedProperties.has("seed")) {
      this.placeStickers();
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getStickers(this.slug);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load stickers";
      this.loadingState = "error";
    }
  }
  seededRandom(seed) {
    let s4 = seed || Date.now();
    return () => {
      s4 = s4 * 1103515245 + 12345 & 2147483647;
      return s4 / 2147483647;
    };
  }
  checkOverlap(x2, y3, size, placed) {
    const radiusPercent = size / 460 * 50;
    for (const existing of placed) {
      const existingRadius = existing.scale * ((this.minSize + this.maxSize) / 2) / 460 * 50;
      const minDistance = radiusPercent + existingRadius;
      const dx = x2 - existing.x;
      const dy = y3 - existing.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < minDistance * 0.85) {
        return true;
      }
    }
    return false;
  }
  findNonOverlappingPosition(size, placed, random) {
    const stickerRadiusPercent = size / 460 * 50 + 2;
    const minPadding = Math.max(12, stickerRadiusPercent);
    const maxPadding = 100 - minPadding;
    const gridSize = 10;
    const gridPositions = [];
    const rangeX = maxPadding - minPadding;
    const rangeY = maxPadding - minPadding;
    for (let gx = 0; gx < gridSize; gx++) {
      for (let gy = 0; gy < gridSize; gy++) {
        const baseX = minPadding + gx / (gridSize - 1) * rangeX;
        const baseY = minPadding + gy / (gridSize - 1) * rangeY;
        const jitterX = (random() - 0.5) * 6;
        const jitterY = (random() - 0.5) * 6;
        gridPositions.push({
          x: Math.max(minPadding, Math.min(maxPadding, baseX + jitterX)),
          y: Math.max(minPadding, Math.min(maxPadding, baseY + jitterY))
        });
      }
    }
    for (let i5 = gridPositions.length - 1; i5 > 0; i5--) {
      const j = Math.floor(random() * (i5 + 1));
      [gridPositions[i5], gridPositions[j]] = [gridPositions[j], gridPositions[i5]];
    }
    for (const pos of gridPositions) {
      if (!this.checkOverlap(pos.x, pos.y, size, placed)) {
        return { x: pos.x, y: pos.y, foundSpace: true };
      }
    }
    for (let attempt = 0; attempt < 50; attempt++) {
      const x2 = minPadding + random() * rangeX;
      const y3 = minPadding + random() * rangeY;
      if (!this.checkOverlap(x2, y3, size, placed)) {
        return { x: x2, y: y3, foundSpace: true };
      }
    }
    return {
      x: minPadding + random() * rangeX,
      y: minPadding + random() * rangeY,
      foundSpace: false
    };
  }
  placeStickers() {
    if (!this.data?.stickers?.length) {
      this.placedStickers = [];
      return;
    }
    const random = this.seededRandom(this.seed || this.slug.length * 1e3);
    const placed = [];
    const stickersToPlace = [...this.data.stickers].map((sticker, index) => ({
      sticker,
      originalIndex: index,
      scale: 0.8 + random() * 0.4
      // 0.8 to 1.2
    }));
    stickersToPlace.sort((a3, b3) => b3.scale - a3.scale);
    stickersToPlace.forEach(({ sticker, originalIndex, scale }) => {
      const size = this.minSize + scale * (this.maxSize - this.minSize);
      const rotation = (random() - 0.5) * 30;
      const { x: x2, y: y3 } = this.findNonOverlappingPosition(size, placed, random);
      placed.push({
        ...sticker,
        x: x2,
        y: y3,
        rotation,
        scale,
        zIndex: originalIndex + 1
      });
    });
    this.placedStickers = placed;
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    return b2`
      <div class="stickers-container">
        <div class="stickers-header">
          <h3 class="stickers-title">${this.data.user.name}'s Stickers</h3>
          <p class="stickers-subtitle">${this.data.count} stickers collected</p>
        </div>

        <div class="macbook">
          <div class="macbook-lid">
            <div class="stickers-area">
              ${this.placedStickers.length > 0 ? this.placedStickers.map((sticker) => this.renderSticker(sticker)) : b2`
                    <div class="empty-state">
                      <div class="empty-state-icon">🎨</div>
                      <div class="empty-state-text">No stickers yet</div>
                    </div>
                  `}
            </div>
          </div>
          <div class="macbook-base">
            <div class="macbook-notch"></div>
          </div>
        </div>

        ${this.showFooter ? b2`
              <div class="powered-by">
                Powered by
                <a
                  href="${this.baseUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RubyEvents.org
                </a>
              </div>
            ` : ""}
      </div>
    `;
  }
  renderSticker(sticker) {
    const size = this.minSize + (this.maxSize - this.minSize) * sticker.scale;
    const style = `
      left: ${sticker.x}%;
      top: ${sticker.y}%;
      width: ${size}px;
      height: ${size}px;
      transform: translate(-50%, -50%) rotate(${sticker.rotation}deg);
      z-index: ${sticker.zIndex};
    `;
    return b2`
      <div
        class="sticker"
        style=${style}
        title="${sticker.name}"
      >
        <div class="sticker-inner">
          ${sticker.image_url ? b2`<img
                src="${sticker.image_url}"
                alt="${sticker.name}"
                loading="lazy"
              />` : b2`<div style="width: 100%; height: 100%; background: #ccc; border-radius: 4px;"></div>`}
        </div>
      </div>
    `;
  }
  renderLoading() {
    return b2`
      <div class="stickers-container">
        <div class="stickers-header">
          <div class="skeleton skeleton-text" style="width: 150px; margin: 0 auto;"></div>
          <div class="skeleton skeleton-text" style="width: 100px; margin: 0.5rem auto 0;"></div>
        </div>
        <div class="macbook">
          <div class="skeleton-lid"></div>
          <div class="macbook-base">
            <div class="macbook-notch"></div>
          </div>
        </div>
      </div>
    `;
  }
};
RubyeventsStickers.styles = [
  ...BaseComponent.styles,
  footerStyles,
  i`
      .stickers-container {
        max-width: 600px;
        margin: 0 auto;
      }

      .stickers-header {
        text-align: center;
        margin-bottom: 1rem;
      }

      .stickers-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .stickers-subtitle {
        margin: 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .macbook {
        position: relative;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }

      .macbook-lid {
        position: relative;
        aspect-ratio: 16 / 10;
        background: linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%);
        border-radius: 16px 16px 0 0;
        box-shadow:
          inset 0 0 0 2px #3a3a3a,
          inset 0 0 20px rgba(0, 0, 0, 0.5),
          0 -2px 10px rgba(0, 0, 0, 0.3);
        overflow: hidden;
      }

      .macbook-lid::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 60px;
        background: linear-gradient(145deg, #4a4a4a 0%, #3a3a3a 100%);
        border-radius: 8px;
        opacity: 0.3;
      }

      .macbook-lid::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.05) 0%,
          transparent 50%,
          rgba(0, 0, 0, 0.1) 100%
        );
        pointer-events: none;
      }

      .stickers-area {
        position: absolute;
        /* Extra padding to account for hover scale effect */
        inset: 30px;
      }

      .sticker {
        position: absolute;
        cursor: pointer;
        transition: filter 0.2s ease, z-index 0s;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
      }

      .sticker:hover {
        filter: drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.5)) brightness(1.05);
        z-index: 100 !important;
      }

      .sticker-inner {
        width: 100%;
        height: 100%;
        transition: transform 0.15s ease;
      }

      .sticker:hover .sticker-inner {
        transform: scale(1.08);
      }

      .sticker img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
      }

      .macbook-base {
        height: 12px;
        background: linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 100%);
        border-radius: 0 0 4px 4px;
        box-shadow:
          0 2px 8px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }

      .macbook-notch {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: #1a1a1a;
        border-radius: 0 0 4px 4px;
      }

      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-height: 150px;
        color: rgba(255, 255, 255, 0.4);
        text-align: center;
        padding: 2rem;
      }

      .empty-state-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .empty-state-text {
        font-size: 0.875rem;
      }

      /* Loading skeleton */
      .skeleton-lid {
        position: relative;
        aspect-ratio: 16 / 10;
        background: linear-gradient(
          90deg,
          var(--rubyevents-background-alt) 25%,
          var(--rubyevents-border-color) 50%,
          var(--rubyevents-background-alt) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 16px 16px 0 0;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsStickers.prototype, "slug", 2);
__decorateClass([
  n4({ type: Number, attribute: "min-size" })
], RubyeventsStickers.prototype, "minSize", 2);
__decorateClass([
  n4({ type: Number, attribute: "max-size" })
], RubyeventsStickers.prototype, "maxSize", 2);
__decorateClass([
  n4({ type: Number })
], RubyeventsStickers.prototype, "seed", 2);
__decorateClass([
  r5()
], RubyeventsStickers.prototype, "placedStickers", 2);
RubyeventsStickers = __decorateClass([
  t3("rubyevents-stickers")
], RubyeventsStickers);

// src/components/rubyevents-passport.ts
var RubyeventsPassport = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.tab = "all";
    this.showSections = true;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") || changedProperties.has("baseUrl")) {
      this.fetchData();
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getStamps(this.slug);
      this.loadingState = "success";
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load stamps";
      this.loadingState = "error";
    }
  }
  handleTabClick(tab) {
    this.tab = tab;
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const { grouped } = this.data;
    return b2`
      <div class="passport-container">
        <div class="passport">
          <div class="passport-header">
            <div class="passport-emblem">💎</div>
            <h3 class="passport-title">Ruby Passport</h3>
            <p class="passport-subtitle">Conference Collection</p>
          </div>

          <div class="passport-owner">
            <div class="passport-owner-label">Passport Holder</div>
            <div class="passport-owner-name">${this.data.user.name}</div>
          </div>

          <div class="passport-stats">
            <div class="passport-stat">
              <div class="passport-stat-value">${grouped.countries.length}</div>
              <div class="passport-stat-label">Countries</div>
            </div>
            <div class="passport-stat">
              <div class="passport-stat-value">${grouped.events.length}</div>
              <div class="passport-stat-label">Events</div>
            </div>
            <div class="passport-stat">
              <div class="passport-stat-value">${grouped.achievements.length}</div>
              <div class="passport-stat-label">Badges</div>
            </div>
          </div>

          <div class="passport-tabs">
            <button
              class="passport-tab ${this.tab === "all" ? "active" : ""}"
              @click=${() => this.handleTabClick("all")}
            >
              All
            </button>
            <button
              class="passport-tab ${this.tab === "countries" ? "active" : ""}"
              @click=${() => this.handleTabClick("countries")}
            >
              Countries
            </button>
            <button
              class="passport-tab ${this.tab === "events" ? "active" : ""}"
              @click=${() => this.handleTabClick("events")}
            >
              Events
            </button>
            <button
              class="passport-tab ${this.tab === "achievements" ? "active" : ""}"
              @click=${() => this.handleTabClick("achievements")}
            >
              Badges
            </button>
          </div>

          <div class="stamps-page">
            ${this.renderStampsContent()}
          </div>

          ${this.showFooter ? b2`
                <div class="powered-by">
                  Powered by
                  <a
                    href="${this.baseUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RubyEvents.org
                  </a>
                </div>
              ` : ""}
        </div>
      </div>
    `;
  }
  renderStampsContent() {
    if (!this.data) return b2``;
    const { grouped } = this.data;
    switch (this.tab) {
      case "countries":
        return this.renderStampSection(grouped.countries, "No countries visited yet");
      case "events":
        return this.renderStampSection(grouped.events, "No event stamps collected yet");
      case "achievements":
        return this.renderStampSection(grouped.achievements, "No badges earned yet");
      default:
        return this.renderAllStamps();
    }
  }
  renderAllStamps() {
    if (!this.data) return b2``;
    const { grouped } = this.data;
    const hasAnyStamps = grouped.countries.length > 0 || grouped.events.length > 0 || grouped.achievements.length > 0;
    if (!hasAnyStamps) {
      return b2`
        <div class="empty-page">
          <div class="empty-page-icon">📭</div>
          <div class="empty-page-text">No stamps collected yet</div>
        </div>
      `;
    }
    return b2`
      ${grouped.countries.length > 0 ? b2`
            <div class="stamps-section">
              ${this.showSections ? b2`<div class="section-label">Countries Visited</div>` : ""}
              <div class="stamps-grid">
                ${grouped.countries.map((stamp) => this.renderStamp(stamp))}
              </div>
            </div>
          ` : ""}
      ${grouped.events.length > 0 ? b2`
            <div class="stamps-section">
              ${this.showSections ? b2`<div class="section-label">Event Stamps</div>` : ""}
              <div class="stamps-grid">
                ${grouped.events.map((stamp) => this.renderStamp(stamp))}
              </div>
            </div>
          ` : ""}
      ${grouped.achievements.length > 0 ? b2`
            <div class="stamps-section">
              ${this.showSections ? b2`<div class="section-label">Achievement Badges</div>` : ""}
              <div class="stamps-grid">
                ${grouped.achievements.map((stamp) => this.renderStamp(stamp))}
              </div>
            </div>
          ` : ""}
    `;
  }
  renderStampSection(stamps, emptyMessage) {
    if (stamps.length === 0) {
      return b2`
        <div class="empty-page">
          <div class="empty-page-icon">📭</div>
          <div class="empty-page-text">${emptyMessage}</div>
        </div>
      `;
    }
    return b2`
      <div class="stamps-grid">
        ${stamps.map((stamp) => this.renderStamp(stamp))}
      </div>
    `;
  }
  getStampRotation(stamp) {
    let hash = 0;
    const str = stamp.code || stamp.name;
    for (let i5 = 0; i5 < str.length; i5++) {
      const char = str.charCodeAt(i5);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash) % 25 - 12;
  }
  renderStamp(stamp) {
    const rotation = this.getStampRotation(stamp);
    return b2`
      <div class="stamp" title="${stamp.name}" style="transform: rotate(${rotation}deg)">
        ${stamp.image_url ? b2`<img
              src="${stamp.image_url}"
              alt="${stamp.name}"
              loading="lazy"
            />` : b2`<div class="stamp-placeholder">?</div>`}
      </div>
    `;
  }
  renderLoading() {
    return b2`
      <div class="passport-container">
        <div class="skeleton-passport"></div>
      </div>
    `;
  }
};
RubyeventsPassport.styles = [
  ...BaseComponent.styles,
  footerStyles,
  tabStyles,
  i`
      .passport-container {
        max-width: 500px;
        margin: 0 auto;
      }

      .passport {
        position: relative;
        background: linear-gradient(145deg, #1a3a52 0%, #0d2233 100%);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow:
          0 10px 40px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        overflow: hidden;
      }

      .passport::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #c9a227 0%, #f4d35e 50%, #c9a227 100%);
      }

      .passport::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #c9a227 0%, #f4d35e 50%, #c9a227 100%);
      }

      .passport-header {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #f4d35e;
      }

      .passport-emblem {
        width: 48px;
        height: 48px;
        margin: 0 auto 0.5rem;
        background: linear-gradient(145deg, #f4d35e 0%, #c9a227 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      .passport-title {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #f4d35e;
      }

      .passport-subtitle {
        margin: 0.25rem 0 0;
        font-size: 0.75rem;
        color: rgba(244, 211, 94, 0.7);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .passport-owner {
        text-align: center;
        margin-bottom: 1rem;
        padding: 0.75rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
        border: 1px solid rgba(244, 211, 94, 0.2);
      }

      .passport-owner-label {
        font-size: 0.625rem;
        color: rgba(244, 211, 94, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0.25rem;
      }

      .passport-owner-name {
        font-size: 1rem;
        font-weight: 600;
        color: white;
      }

      .passport-stats {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(244, 211, 94, 0.2);
      }

      .passport-stat {
        text-align: center;
      }

      .passport-stat-value {
        font-size: 1.25rem;
        font-weight: 700;
        color: #f4d35e;
      }

      .passport-stat-label {
        font-size: 0.625rem;
        color: rgba(244, 211, 94, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .passport-tabs {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid rgba(244, 211, 94, 0.2);
      }

      .passport-tab {
        flex: 1;
        padding: 0.5rem 0.25rem;
        font-size: 0.6875rem;
        font-weight: 500;
        color: rgba(244, 211, 94, 0.6);
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: color 0.15s ease, border-color 0.15s ease;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .passport-tab:hover {
        color: rgba(244, 211, 94, 0.9);
      }

      .passport-tab.active {
        color: #f4d35e;
        border-bottom-color: #f4d35e;
      }

      .stamps-page {
        background: #f5f0e1;
        border-radius: 4px;
        padding: 1rem;
        min-height: 200px;
        position: relative;
        box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .stamps-page::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        bottom: 0;
        width: 1px;
        background: rgba(0, 0, 0, 0.1);
      }

      .stamps-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
        gap: 0.75rem;
      }

      .stamp {
        position: relative;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.2s ease, filter 0.2s ease;
      }

      .stamp:hover {
        transform: scale(1.15) rotate(0deg) !important;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        z-index: 1;
      }

      .stamp img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .stamp-placeholder {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.05);
        border: 2px dashed rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(0, 0, 0, 0.2);
        font-size: 1.5rem;
      }

      .empty-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 150px;
        color: rgba(0, 0, 0, 0.3);
        text-align: center;
      }

      .empty-page-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .empty-page-text {
        font-size: 0.875rem;
      }

      .section-label {
        font-size: 0.6875rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0.75rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .stamps-section {
        margin-bottom: 1.5rem;
      }

      .stamps-section:last-child {
        margin-bottom: 0;
      }

      /* Loading skeleton */
      .skeleton-passport {
        background: linear-gradient(
          90deg,
          var(--rubyevents-background-alt) 25%,
          var(--rubyevents-border-color) 50%,
          var(--rubyevents-background-alt) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 8px;
        height: 400px;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      .powered-by {
        color: rgba(244, 211, 94, 0.6);
        border-top-color: rgba(244, 211, 94, 0.2);
      }

      .powered-by a {
        color: #f4d35e;
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsPassport.prototype, "slug", 2);
__decorateClass([
  n4({ type: String })
], RubyeventsPassport.prototype, "tab", 2);
__decorateClass([
  n4({ type: Boolean, attribute: "show-sections" })
], RubyeventsPassport.prototype, "showSections", 2);
RubyeventsPassport = __decorateClass([
  t3("rubyevents-passport")
], RubyeventsPassport);

// src/components/rubyevents-topic.ts
var RubyeventsTopic = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.limit = 5;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.slug) {
      this.fetchData();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("slug") && this.slug) {
      this.fetchData();
    }
  }
  async fetchData() {
    if (!this.slug || !this.api) return;
    this.loadingState = "loading";
    this.error = null;
    try {
      this.data = await this.api.getTopic(this.slug);
      this.loadingState = "success";
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      if (message === "Not found") {
        this.error = `Topic "${this.slug}" not found`;
      } else {
        this.error = "Failed to load topic";
      }
      this.loadingState = "error";
    }
  }
  renderContent() {
    if (!this.data) {
      return b2``;
    }
    const topic = this.data;
    const talks = topic.talks.slice(0, this.limit);
    const hasMore = topic.talks_count > talks.length;
    return b2`
      <div class="topic-container card">
        <div class="topic-header">
          <h3 class="topic-title">
            <a href="${topic.url}" target="_blank" rel="noopener noreferrer">
              ${topic.name}
            </a>
          </h3>
          <div class="topic-meta">
            <span class="badge">${topic.talks_count} talks</span>
          </div>
          ${topic.description ? b2`<p class="topic-description line-clamp-2">
                ${topic.description}
              </p>` : ""}
        </div>

        <div class="tab-container">
          ${talks.length > 0 ? b2`
                <div class="list">
                  ${talks.map((talk) => this.renderTalk(talk))}
                </div>
                ${hasMore ? b2`
                      <a
                        href="${topic.url}"
                        class="view-all-card"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View all ${topic.talks_count} talks on RubyEvents
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    ` : ""}
              ` : b2`
                <div class="empty-state">
                  <p>No talks found for this topic.</p>
                </div>
              `}
          ${this.renderFooter()}
        </div>
      </div>
    `;
  }
  renderTalk(talk) {
    const speakerNames = talk.speakers.map((s4) => s4.name).join(", ");
    return b2`
      <a
        href="${talk.url}"
        class="list-item talk-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${talk.thumbnail_url ? b2`<img
              class="talk-thumbnail"
              src="${talk.thumbnail_url}"
              alt="${talk.title}"
              loading="lazy"
            />` : b2`<div class="talk-thumbnail skeleton"></div>`}
        <div class="list-item-content">
          <h4 class="list-item-title line-clamp-2">${talk.title}</h4>
          <p class="list-item-subtitle">
            ${speakerNames}${talk.event ? ` \xB7 ${talk.event.name}` : ""}
          </p>
        </div>
      </a>
    `;
  }
  renderLoading() {
    return b2`
      <div class="topic-container card">
        <div class="topic-header">
          <div class="skeleton skeleton-text" style="width: 60%"></div>
          <div class="skeleton skeleton-text" style="width: 80px"></div>
        </div>
        <div class="tab-container">
          <div class="list">
            ${[1, 2, 3].map(
      () => b2`
                <div class="list-item talk-item">
                  <div class="talk-thumbnail skeleton"></div>
                  <div class="list-item-content">
                    <div class="skeleton skeleton-text" style="width: 90%"></div>
                    <div class="skeleton skeleton-text" style="width: 60%"></div>
                  </div>
                </div>
              `
    )}
          </div>
        </div>
      </div>
    `;
  }
};
RubyeventsTopic.styles = [
  ...BaseComponent.styles,
  cardStyles,
  thumbnailStyles,
  avatarStyles,
  badgeStyles,
  listStyles,
  utilityStyles,
  footerStyles,
  i`
      .topic-container {
        max-width: 500px;
      }

      .topic-header {
        padding: 1rem;
        border-bottom: 1px solid var(--rubyevents-border-color);
      }

      .topic-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .topic-title a {
        color: inherit;
        text-decoration: none;
      }

      .topic-title a:hover {
        color: var(--rubyevents-primary-color);
      }

      .topic-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
      }

      .topic-description {
        margin: 0.75rem 0 0 0;
        font-size: 0.875rem;
        color: var(--rubyevents-text-muted);
        line-height: 1.5;
      }

      .tab-container {
        padding: 1rem;
      }

      .talk-item {
        display: flex;
        gap: 0.75rem;
        text-decoration: none;
        color: inherit;
      }

      .talk-item:hover {
        background: var(--rubyevents-background-alt);
      }

      .talk-thumbnail {
        width: 80px;
        aspect-ratio: 16 / 9;
        border-radius: 4px;
        object-fit: cover;
        background: var(--rubyevents-background-alt);
        flex-shrink: 0;
      }

      .view-all-card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--rubyevents-background-alt);
        border-radius: var(--rubyevents-border-radius);
        color: var(--rubyevents-primary-color);
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: background-color 0.15s ease;
      }

      .view-all-card:hover {
        background: var(--rubyevents-border-color);
      }

      .view-all-card svg {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--rubyevents-text-muted);
      }
    `
];
__decorateClass([
  n4({ type: String })
], RubyeventsTopic.prototype, "slug", 2);
__decorateClass([
  n4({ type: Number })
], RubyeventsTopic.prototype, "limit", 2);
RubyeventsTopic = __decorateClass([
  t3("rubyevents-topic")
], RubyeventsTopic);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
