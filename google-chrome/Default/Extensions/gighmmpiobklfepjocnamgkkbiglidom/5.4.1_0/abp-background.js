/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6907:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
;// CONCATENATED MODULE: ./node_modules/@eyeo/snippets/webext/ml.mjs
/*!
 * This file is part of eyeo's Anti-Circumvention Snippets module (@eyeo/snippets),
 * Copyright (C) 2006-present eyeo GmbH
 * 
 * @eyeo/snippets is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 * 
 * @eyeo/snippets is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with @eyeo/snippets.  If not, see <http://www.gnu.org/licenses/>.
 */

const callback = (environment, ...filters) => {
const e=Proxy,{apply:t,bind:r,call:n}=Function,P=n.bind(t),a=n.bind(r),o=n.bind(n),u={get:(e,t)=>a(n,e[t])},s=t=>new e(t,u),v={get:(e,t)=>a(e[t],e)},i=t=>new e(t,v),{assign:l,defineProperties:c,freeze:O,getOwnPropertyDescriptor:D,getOwnPropertyDescriptors:j,getPrototypeOf:h}=i(Object);s({});const{species:p}=Symbol,m={get(e,t){const r=e[t];class n extends r{}const P=j(r.prototype);delete P.constructor,O(c(n.prototype,P));const a=j(r);return delete a.length,delete a.prototype,a[p]={value:n},O(c(n,a))}},g=t=>new e(t,m),b="undefined"!=typeof environment?environment:{};"undefined"==typeof globalThis&&(window.globalThis=window);const{apply:T,ownKeys:z}=i(Reflect),d="world"in b,y=d&&"ISOLATED"===b.world,w=d&&"MAIN"===b.world,L="object"==typeof chrome&&!!chrome.runtime,f="object"==typeof browser&&!!browser.runtime,I=!w&&(y||L||f),S=e=>I?e:A(e,E(e)),{create:A,defineProperties:x,defineProperty:Y,freeze:k,getOwnPropertyDescriptor:C,getOwnPropertyDescriptors:E}=i(Object),Q=i(globalThis),W=I?globalThis:g(globalThis),{Map:U,RegExp:q,Set:G,WeakMap:M,WeakSet:K}=W,N=(e,t,r=null)=>{const n=z(t);for(const P of z(e)){if(n.includes(P))continue;const a=C(e,P);if(r&&"value"in a){const{value:e}=a;"function"==typeof e&&(a.value=r(e))}Y(t,P,a)}},R=e=>{const t=W[e];class r extends t{}const{toString:n,valueOf:P}=t.prototype;x(r.prototype,{toString:{value:n},valueOf:{value:P}});const a=e.toLowerCase(),o=e=>function(){const t=T(e,this,arguments);return typeof t===a?new r(t):t};return N(t,r,o),N(t.prototype,r.prototype,o),r},F=k({frozen:new M,hidden:new K,iframePropertiesToAbort:{read:new G,write:new G},abortedIframes:new M}),B=new q("^[A-Z]");var Z=new Proxy(new U([["chrome",I&&(L&&chrome||f&&browser)||void 0],["isExtensionContext",I],["variables",F],["console",S(console)],["document",globalThis.document],["performance",S(performance)],["JSON",S(JSON)],["Map",U],["Math",S(Math)],["Number",I?Number:R("Number")],["RegExp",q],["Set",G],["String",I?String:R("String")],["WeakMap",M],["WeakSet",K],["MouseEvent",MouseEvent]]),{get(e,t){if(e.has(t))return e.get(t);let r=globalThis[t];return"function"==typeof r&&(r=(B.test(t)?W:Q)[t]),e.set(t,r),r},has:(e,t)=>e.has(t)});const V={WeakSet:WeakSet,WeakMap:WeakMap,WeakValue:class{has(){return!1}set(){}}},{apply:X}=Reflect;const{Map:H,WeakMap:J,WeakSet:_,setTimeout:$}=Z;let ee=!0,te=e=>{e.clear(),ee=!ee};var re=function(e){const{WeakSet:t,WeakMap:r,WeakValue:n}=this||V,P=new t,a=new r,o=new n;return function(t){if(P.has(t))return t;if(a.has(t))return a.get(t);if(o.has(t))return o.get(t);const r=X(e,this,arguments);return P.add(r),r!==t&&("object"==typeof t&&t?a:o).set(t,r),r}}.bind({WeakMap:J,WeakSet:_,WeakValue:class extends H{set(e,t){return ee&&(ee=!ee,$(te,0,this)),super.set(e,t)}}});const{concat:ne,includes:Pe,join:ae,reduce:oe,unshift:ue}=s([]),se=g(globalThis),{Map:ve,WeakMap:ie}=se,le=new ve,ce=t=>{const r=(e=>{const t=[];let r=e;for(;r;){if(le.has(r))ue(t,le.get(r));else{const e=j(r);le.set(r,e),ue(t,e)}r=h(r)}return ue(t,{}),P(l,null,t)})("function"==typeof t?t.prototype:t),n={get(e,t){if(t in r){const{value:n,get:P}=r[t];if(P)return o(P,e);if("function"==typeof n)return a(n,e)}return e[t]},set(e,t,n){if(t in r){const{set:P}=r[t];if(P)return o(P,e,n),!0}return e[t]=n,!0}};return t=>new e(t,n)},{isExtensionContext:Oe,Array:De,Number:je,String:he,Object:pe}=Z,{isArray:me}=De,{getOwnPropertyDescriptor:ge,setPrototypeOf:be}=pe,{toString:Te}=pe.prototype,{slice:ze}=he.prototype,{get:de}=ge(Node.prototype,"nodeType"),ye=Oe?{}:{Attr:ce(Attr),CanvasRenderingContext2D:ce(CanvasRenderingContext2D),CSSStyleDeclaration:ce(CSSStyleDeclaration),Document:ce(Document),Element:ce(Element),HTMLCanvasElement:ce(HTMLCanvasElement),HTMLElement:ce(HTMLElement),HTMLImageElement:ce(HTMLImageElement),HTMLScriptElement:ce(HTMLScriptElement),MutationRecord:ce(MutationRecord),Node:ce(Node),ShadowRoot:ce(ShadowRoot),get CSS2Properties(){return ye.CSSStyleDeclaration}},we=(e,t)=>{if("Element"!==t&&t in ye)return ye[t](e);if(me(e))return be(e,De.prototype);const r=(e=>o(ze,o(Te,e),8,-1))(e);if(r in ye)return ye[r](e);if(r in Z)return be(e,Z[r].prototype);if("nodeType"in e)switch(o(de,e)){case 1:if(!(t in ye))throw new Error("unknown hint "+t);return ye[t](e);case 2:return ye.Attr(e);case 3:return ye.Node(e);case 9:return ye.Document(e)}throw new Error("unknown brand "+r)};var Le=Oe?e=>e===window||e===globalThis?Z:e:re(((e,t="Element")=>{if(e===window||e===globalThis)return Z;switch(typeof e){case"object":return e&&we(e,t);case"string":return new he(e);case"number":return new je(e);default:throw new Error("unsupported value")}}));let{document:fe,getComputedStyle:Ie,isExtensionContext:Se,variables:Ae,Array:xe,MutationObserver:Ye,Object:ke,XPathEvaluator:Ce,XPathExpression:Ee,XPathResult:Qe}=Le(window),{querySelectorAll:We}=fe,Ue=We&&a(We,fe);const{assign:qe,setPrototypeOf:Ge}=ke;class Me extends Ee{evaluate(...e){return Ge(P(super.evaluate,this,e),Qe.prototype)}}class Ke extends Ce{createExpression(...e){return Ge(P(super.createExpression,this,e),Me.prototype)}}function Ne(e){if(Ae.hidden.has(e))return;!function(e){Se&&"function"==typeof checkElement&&checkElement(e)}(e),Ae.hidden.add(e);let{style:t}=Le(e),r=Le(t,"CSSStyleDeclaration"),n=Le([]),{debugCSSProperties:P}=b;for(let[e,t]of P||[["display","none"]])r.setProperty(e,t,"important"),n.push([e,r.getPropertyValue(e)]);new Ye((()=>{for(let[e,t]of n){let n=r.getPropertyValue(e),P=r.getPropertyPriority(e);n==t&&"important"==P||r.setProperty(e,t,"important")}})).observe(e,{attributes:!0,attributeFilter:["style"]})}function Re(e){let t=e;if(t.startsWith("xpath(")&&t.endsWith(")")){let e=t.slice(6,-1),r=(new Ke).createExpression(e,null),n=Qe.ORDERED_NODE_SNAPSHOT_TYPE;return e=>{if(!e)return;let t=r.evaluate(fe,n,null),{snapshotLength:P}=t;for(let r=0;r<P;r++)e(t.snapshotItem(r))}}return t=>Ue(e).forEach(t)}function Fe(e,t,r){let n;null==r&&(r=t);const P=()=>{for(const P of Ue(r)){const r=Le(P).closest(t);r&&e(P,r)&&(n(),Ne(r))}};return qe(new Ye(P),{race(e){n=e,this.observe(fe,{childList:!0,characterData:!0,subtree:!0}),P()}})}function Be(e,t,r){let n=Le(t,"CSSStyleDeclaration");if("none"==n.getPropertyValue("display"))return!1;let P=n.getPropertyValue("visibility");if("hidden"==P||"collapse"==P)return!1;if(!r||e==r)return!0;let a=Le(e).parentElement;return!a||Be(a,Ie(a),r)}function Ze(e){let t=Ie(e),{cssText:r}=t;if(r)return r;for(let e of t)r+=`${e}: ${t[e]}; `;return Le(r).trim()}let{Math:Ve,RegExp:Xe}=Le(window);function He(e){let{length:t}=e;if(t>1&&"/"===e[0]){let r="/"===e[t-1];if(r||t>2&&Le(e).endsWith("/i")){let t=[Le(e).slice(1,r?-1:-2)];return r||t.push("i"),new Xe(...t)}}return new Xe(Le(e).replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"))}let Je=!1;function _e(){return Je}const{console:$e}=Le(window),et=()=>{};function tt(...e){_e()&&Le(e).unshift("%c DEBUG","font-weight: bold"),$e.log(...e)}function rt(e){return a(_e()?tt:et,null,e)}let{Array:nt,Error:Pt,Map:at,parseInt:ot}=Le(window),ut=null,st=null;function vt(e,t){if(null===ut)return et;let r=ut,{participants:n}=r;return n.set(P,t),P;function P(){if(r.winners<1)return;if(rt("race")(`${e} won the race`),r===ut)st.push(P);else if(n.delete(P),--r.winners<1){for(let e of n.values())e();n.clear()}}}let{MutationObserver:it}=Le(window);let{clearTimeout:lt,fetch:ct,getComputedStyle:Ot,setTimeout:Dt,Map:jt,MutationObserver:ht,Uint8Array:pt}=Le(window);let mt=new jt;function gt(e,{as:t="arrayBuffer",cleanup:r=6e4}={}){let n=t+":"+e,P=mt.get(n)||{remove:()=>mt.delete(n),result:null,timer:0};return lt(P.timer),P.timer=Dt(P.remove,r),P.result||(P.result=ct(e).then((e=>e[t]())).catch(P.remove),mt.set(n,P)),P.result}const{parseFloat:bt,Math:Tt,MutationObserver:zt,WeakSet:dt}=Le(window),{min:yt}=Tt,wt=(e,t)=>{const r=e.length+1,n=t.length+1,P=[[0]];let a=0,o=0;for(;++a<n;)P[0][a]=a;for(a=0;++a<r;){const r=e[o];let u=0,s=0;for(P[a]=[a];++u<n;)P[a][u]=yt(P[o][u]+1,P[a][s]+1,P[o][s]+(r!=t[s])),++s;++o}return P[r-1][n-1]};let{getComputedStyle:Lt,Map:ft,WeakSet:It,parseFloat:St}=Le(window);const{ELEMENT_NODE:At,TEXT_NODE:xt}=Node;let{MutationObserver:Yt}=Le(window);let{getComputedStyle:kt,MutationObserver:Ct,WeakSet:Et}=Le(window);Le(window);const Qt={mark(){},end(){},toString:()=>"{mark(){},end(){}}"};let{MutationObserver:Wt}=Le(window);const{ELEMENT_NODE:Ut}=Node;let{parseInt:qt,setTimeout:Gt,Error:Mt,MouseEvent:Kt,MutationObserver:Nt,WeakSet:Rt}=Le(window);let{parseInt:Ft,setTimeout:Bt,Error:Zt,MouseEvent:Vt,MutationObserver:Xt,WeakSet:Ht}=Le(window);const Jt={log:tt,race:function(e,t="1"){switch(e){case"start":ut={winners:ot(t,10)||1,participants:new at},st=new nt;break;case"end":case"finish":case"stop":ut=null;for(let e of st)e();st=null;break;default:throw new Pt(`Invalid action: ${e}`)}},debug:function(){Je=!0},"hide-if-matches-xpath":function(e){let{mark:t,end:r}=Qt,n=Re(`xpath(${e})`),P=()=>{t(),n((e=>{o(),Le(e).nodeType===Ut?Ne(e):Le(e).textContent=""})),r()},a=new Wt(P),o=vt("hide-if-matches-xpath",(()=>a.disconnect()));a.observe(document,{characterData:!0,childList:!0,subtree:!0}),P()},"hide-if-contains":function(e,t="*",r=null){let n=He(e);const P=Fe((e=>n.test(Le(e).textContent)),t,r);P.race(vt("hide-if-contains",(()=>{P.disconnect()})))},"hide-if-contains-similar-text":function(e,t,r=null,n=0,P=0){const a=new dt,o=rt("hide-if-contains-similar-text"),u=Le(e),{length:s}=u,v=s+bt(n)||0,i=Le([...u]).sort(),l=bt(P)||1/0;null==r&&(r=t),o("Looking for similar text: "+u);const c=()=>{for(const e of Ue(r)){if(a.has(e))continue;a.add(e);const{innerText:r}=Le(e),P=yt(l,r.length-v+1);for(let a=0;a<P;a++){const P=Le(r).substr(a,v);if(wt(i,Le([...P]).sort())-n<=0){const r=Le(e).closest(t);if(o("Found similar text: "+u,r),r){D(),Ne(r);break}}}}};let O=new zt(c),D=vt("hide-if-contains-similar-text",(()=>O.disconnect()));O.observe(document,{childList:!0,characterData:!0,subtree:!0}),c()},"hide-if-contains-visible-text":function(e,t,r=null,...n){let P=Le([]);const a=new ft([["-snippet-box-margin","2"]]);for(let e of n){e=Le(e);let t=e.indexOf(":");if(t<0)continue;let r=e.slice(0,t).trim().toString(),n=e.slice(t+1).trim().toString();r&&n&&(a.has(r)?a.set(r,n):P.push([r,n]))}let o=Le([["opacity","0"],["font-size","0px"],["color","rgba(0, 0, 0, 0)"]]),u=new ft(o.concat(P));function s(e,t){t||(t=Lt(e)),t=Le(t);for(const[e,r]of u){if(He(r).test(t.getPropertyValue(e)))return!1}let r=t.getPropertyValue("color");return t.getPropertyValue("background-color")!=r}function v(e,t){let r=Lt(e,t);if(!Be(e,r)||!s(e,r))return"";let{content:n}=Le(r);if(n&&"none"!==n){let t=Le([]);return n=Le(n).trim().replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,(e=>""+(t.push(Le(e).slice(1,-1))-1))),n=n.replace(/\s*attr\(\s*([^\s,)]+)[^)]*?\)\s*/g,((t,r)=>Le(e).getAttribute(r)||"")),n.replace(/\x01(\d+)/g,((e,r)=>t[r]))}return""}function i(e,t,{boxMargin:r=2}={}){const n=Le(e).getBoundingClientRect(),P=Le(t).getBoundingClientRect(),a=P.left-r,o=P.right+r,u=P.top-r,s=P.bottom+r;return a<=n.left&&n.left<=o&&u<=n.top&&n.top<=s&&u<=n.bottom&&n.bottom<=s&&a<=n.right&&n.right<=o}function l(e,t,r,n,{boxMargin:P=2}={}){let a=!r;if(a&&(r=Lt(e)),!Be(e,r,a&&t))return"";n||"hidden"!==Le(r).getPropertyValue("overflow-x")&&"hidden"!==Le(r).getPropertyValue("overflow-y")||(n=e);let o=v(e,":before");for(let t of Le(e).childNodes)switch(Le(t).nodeType){case At:o+=l(t,e,Lt(t),n,{boxMargin:P});break;case xt:n?i(e,n,{boxMargin:P})&&s(e,r)&&(o+=Le(t).nodeValue):s(e,r)&&(o+=Le(t).nodeValue)}return o+v(e,":after")}const c=a.get("-snippet-box-margin"),O=St(c)||0;let D=He(e),j=new It;const h=Fe(((e,t)=>{if(j.has(e))return!1;j.add(e);let r=l(e,t,null,null,{boxMargin:O}),n=D.test(r);return _e()&&r.length&&tt(n,D,r),n}),t,r);h.race(vt("hide-if-contains-visible-text",(()=>{h.disconnect()})))},"hide-if-contains-and-matches-style":function(e,t="*",r=null,n=null,P=null){null==r&&(r=t);let a=He(e),o=n?He(n):null,u=P?He(P):null,s=()=>{for(let e of Ue(r))if(a.test(Le(e).textContent)&&(!u||u.test(Ze(e)))){let r=Le(e).closest(t);!r||o&&!o.test(Ze(r))||(i(),Ne(r))}},v=new it(s),i=vt("hide-if-contains-and-matches-style",(()=>v.disconnect()));v.observe(document,{childList:!0,characterData:!0,subtree:!0}),s()},"hide-if-has-and-matches-style":function(e,t="*",r=null,n=null,P=null){null==r&&(r=t);let a=n?He(n):null,o=P?He(P):null,u=()=>{for(let n of Ue(r))if(Le(n).querySelector(e)&&(!o||o.test(Ze(n)))){let e=Le(n).closest(t);!e||a&&!a.test(Ze(e))||(v(),Ne(e))}},s=new Yt(u),v=vt("hide-if-has-and-matches-style",(()=>s.disconnect()));s.observe(document,{childList:!0,subtree:!0}),u()},"hide-if-labelled-by":function(e,t,r=null){let n=null==r,P=He(e),a=new Et,o=()=>{for(let e of Ue(t)){let t=n?e:Le(e).closest(r);if(!t||!Be(e,kt(e),t))continue;let o=Le(e).getAttribute("aria-labelledby"),u=()=>{a.has(t)||P.test(Le(e).getAttribute("aria-label")||"")&&(s(),a.add(t),Ne(t))};if(o)for(let e of Le(o).split(/\s+/)){let r=Le(document).getElementById(e);r?!a.has(r)&&P.test(r.innerText)&&(s(),a.add(r),Ne(t)):u()}else u()}},u=new Ct(o),s=vt("hide-if-labelled-by",(()=>u.disconnect()));u.observe(document,{characterData:!0,childList:!0,subtree:!0}),o()},"hide-if-contains-image":function(e,t,r){null==r&&(r=t);let n=He(e),P=()=>{for(let e of Ue(r)){let r=Ot(e),P=Le(r["background-image"]).match(/^url\("(.*)"\)$/);P&&gt(P[1]).then((r=>{if(n.test(new pt(r).reduce(((e,t)=>e+function(e,t=2){let r=Le(e).toString(16);r.length<t&&(r=Le("0").repeat(t-r.length)+r);return r}(t)),""))){let r=Le(e).closest(t);r&&(o(),Ne(r))}}))}},a=new ht(P),o=vt("hide-if-contains-image",(()=>a.disconnect()));a.observe(document,{childList:!0,subtree:!0}),P()},"simulate-event-poc":function(e,t,r="0"){if(!e)throw new Mt("[simulate-event snippet]: No event type provided.");if(!t)throw new Mt("[simulate-event snippet]: No selector provided.");let n=Re(t),P=qt(r,10),a=new Rt;function o(){n((t=>{a.has(t)||(a.add(t),Gt((()=>{Le(t).dispatchEvent(new Kt(e,{bubbles:!0,cancelable:!0}))}),P))}))}new Nt(o).observe(document,{childList:!0,subtree:!0}),o()},"simulate-mouse-event":function(...e){if(e.length<1)throw new Zt("[simulate-mouse-event snippet]: No selector provided.");e.length>7&&(e=e.slice(0,7));const t=Le([]);function r(){return t.forEach((e=>{if(!e.found){(function(e){let t=e;if(t.startsWith("xpath(")&&t.endsWith(")")){let t=Re(e);return()=>{let e=Le([]);return t((t=>e.push(t))),e}}return()=>xe.from(Ue(e))})(e.selector)().length>0&&(e.found=!0)}})),t.every((e=>e.found))}function n(e,t){e&&t&&("click"===t&&e.click?e.click():e.dispatchEvent(new Vt(t,{bubbles:!0,cancelable:!0})))}Le(e).forEach((e=>{const r=function(e){if(!e)return null;const t={selector:"",continue:!1,trigger:!1,event:"click",delay:"500",clicked:!1,found:!1},r=e.split("$");let n=[];r.length>=2&&(n=r[1].toLowerCase().split(",")),[t.selector]=r;for(const e of n)if("trigger"===e)t.trigger=!0;else if("continue"===e)t.continue=!0;else if(e.startsWith("event")){const r=e.toLowerCase().split("=");r[1]?t.event=r[1]:t.event="click"}else if(e.startsWith("delay")){const r=e.toLowerCase().split("=");r[1]?t.delay=r[1]:t.delay="500"}return t}(e);t.push(r)}));let P=!1;const[a]=t.slice(-1);a.trigger=!0;let o=new Ht;function u(){if(P||(P=r()),P)for(const e of t){const t=Re(e.selector),r=Ft(e.delay,10);e.trigger&&t((t=>{o.has(t)||(o.add(t),e.continue?setInterval((()=>{n(t,e.event)}),r):Bt((()=>{n(t,e.event)}),r))}))}}new Xt(u).observe(document,{childList:!0,subtree:!0}),u()}};let{requestAnimationFrame:_t,MutationObserver:$t,WeakSet:er}=Le(window);Jt["hide-if-graph-matches"]=function(e,t){let r=globalThis.graphMLUtil,n=new er,P=!1,a=new $t((function(){P||(P=!0,_t((()=>{P=!1,u()})))})),o=vt("hide-if-graph-matches",(()=>a.disconnect()));function u(){let P=Ue(e);for(let e of P){if(!Le(e).innerHTML)continue;let P=Le(e).querySelectorAll(t);0===P.length&&(P=[e]);for(let t of P)n.has(e)||(n.add(e),Le(t).innerHTML&&r.inference(t).then((t=>{t&&(o(),Ne(e))})))}}!function e(t=0){if(!r)throw new Error("graphMLUtil not available.");if(!r.initialized){if(t>2e3)throw new Error("graphMLUtil failed to initialize.");return _t(e)}a.observe(document,{childList:!0,subtree:!0}),u()}()}
/*!
 * This file is part of eyeo's Anti-Circumvention Snippets module (@eyeo/snippets),
 * Copyright (C) 2006-present eyeo GmbH
 * 
 * @eyeo/snippets is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 * 
 * @eyeo/snippets is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with @eyeo/snippets.  If not, see <http://www.gnu.org/licenses/>.
 */;

const snippets=Jt;
let context;
for (const [name, ...args] of filters) {
if (snippets.hasOwnProperty(name)) {
try { context = snippets[name].apply(context, args); }
catch (error) { console.error(error); }
}
}
context = void 0;
};
const graph = new Map([["log",null],["race",null],["debug",null],["hide-if-matches-xpath",null],["hide-if-contains",null],["hide-if-contains-similar-text",null],["hide-if-contains-visible-text",null],["hide-if-contains-and-matches-style",null],["hide-if-has-and-matches-style",null],["hide-if-labelled-by",null],["hide-if-contains-image",null],["simulate-event-poc",null],["simulate-mouse-event",null],["hide-if-graph-matches",function(){if(!globalThis.graphMLUtil){
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
const ze=1e-7,de=1e-4;class ye{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class we{refCount(e){return Le("refCount")}incRef(e){return Le("incRef")}timerAvailable(){return!0}time(e){return Le("time")}read(e){return Le("read")}readSync(e){return Le("readSync")}readToGPU(e,t){return Le("readToGPU")}numDataIds(){return Le("numDataIds")}disposeData(e,t){return Le("disposeData")}write(e,t,r){return Le("write")}move(e,t,r,n,P){return Le("move")}memory(){return Le("memory")}floatPrecision(){return Le("floatPrecision")}epsilon(){return 32===this.floatPrecision()?ze:de}dispose(){return Le("dispose")}}function Le(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function fe(e,t,r){return Math.max(e,Math.min(t,r))}function Ie(e){return e%2==0?e:e+1}function Se(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function Ae(e){let t=0;for(let r=0;r<e.length;r++)t+=e[r];return t}function xe(e,t){if(!e)throw new Error("string"==typeof t?t:t())}function Ye(e,t,r=""){xe(Qe(e,t),(()=>r+` Shapes ${e} and ${t} must match`))}function ke(e){xe(null!=e,(()=>"The input to the tensor constructor must be a non-null value."))}function Ce(e,t=[],r=!1){if(null==t&&(t=[]),Array.isArray(e)||Xe(e)&&!r)for(let n=0;n<e.length;++n)Ce(e[n],t,r);else t.push(e);return t}function Ee(e){if(0===e.length)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function Qe(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function We(e){return e%1==0}function Ue(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function qe(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function Ge(e,t=(e=>0),r){return new Promise(((n,P)=>{let a=0;const o=()=>{if(e())return void n();a++;const u=t(a);null!=r&&a>=r?P():setTimeout(o,u)};o()}))}function Me(e,t){let r=1,n=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)r*=e[t];else if(-1===e[t]){if(-1!==n)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${n} and dim ${t}`);n=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===n){if(t>0&&t!==r)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===r)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%r!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${r}`);const P=e.slice();return P[n]=t/r,P}function Ke(e,t){const r=t.length;return xe((e=null==e?t.map(((e,t)=>t)):[].concat(e)).every((e=>e>=-r&&e<r)),(()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${e}`)),xe(e.every((e=>We(e))),(()=>`All values in axis param must be integers but got axis ${e}`)),e.map((e=>e<0?r+e:e))}function Ne(e,t){const r=[],n=[],P=null!=t&&Array.isArray(t)&&0===t.length,a=null==t||P?null:Ke(t,e).sort();let o=0;for(let t=0;t<e.length;++t){if(null!=a){if(a[o]===t&&1!==e[t])throw new Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==a[o]||a[o]>t)&&1===e[t]&&(r.push(e[t]),n.push(t)),a[o]<=t&&o++}1!==e[t]&&(r.push(e[t]),n.push(t))}return{newShape:r,keptDims:n}}function Re(e,t){let r=null;if(null==e||"float32"===e)r=new Float32Array(t);else if("int32"===e)r=new Int32Array(t);else{if("bool"!==e)throw new Error(`Unknown data type ${e}`);r=new Uint8Array(t)}return r}function Fe(e,t){let r=null;if(null==e||"float32"===e)r=new Float32Array(t);else if("int32"===e)r=new Int32Array(t);else if("bool"===e)r=new Uint8Array(t);else{if("string"!==e)throw new Error(`Unknown data type ${e}`);r=new Array(t)}return r}function Be(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(isNaN(n)||!isFinite(n))throw Error(`A tensor of type ${t} being uploaded contains ${n}.`)}}function Ze(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function Ve(e,t){return"complex64"!==t&&(("float32"!==t||"complex64"===e)&&(("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)))}function Xe(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function He(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw new Error(`Unknown dtype ${e}`)}function Je(e){if(null==e)return 0;let t=0;return e.forEach((e=>t+=e.length)),t}function _e(e){return"string"==typeof e||e instanceof String}function $e(e){return"boolean"==typeof e}function et(e){return"number"==typeof e}function tt(e){return Array.isArray(e)?tt(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":et(e)?"float32":_e(e)?"string":$e(e)?"bool":"float32"}function rt(e){return!!(e&&e.constructor&&e.call&&e.apply)}function nt(e,t){for(let r=t;r<e;++r)if(e%r==0)return r;return e}function Pt(e){const t=e.length;if(t<2)return[];const r=new Array(t-1);r[t-2]=e[t-1];for(let n=t-3;n>=0;--n)r[n]=r[n+1]*e[n+1];return r}function at(e,t,r,n=!1){const P=new Array;if(1===t.length){const a=t[0]*(n?2:1);for(let t=0;t<a;t++)P[t]=r[e+t]}else{const a=t[0],o=t.slice(1),u=o.reduce(((e,t)=>e*t))*(n?2:1);for(let t=0;t<a;t++)P[t]=at(e+t*u,o,r,n)}return P}function ot(e,t,r=!1){if(0===e.length)return t[0];const n=e.reduce(((e,t)=>e*t))*(r?2:1);if(0===n)return[];if(n!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${r?" for a complex tensor":""}.`);return at(0,e,t,r)}function ut(e,t){const r=st(e,t);for(let e=0;e<r.length;e++)r[e]=1;return r}function st(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function vt(e){e.forEach((t=>{xe(Number.isInteger(t)&&t>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`))}))}function it(e,t,r){if(0===t)return 0;if(1===t)return e[0];let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=r[t]*e[t];return n}function lt(e,t,r){if(0===t)return[];if(1===t)return[e];const n=new Array(t);for(let t=0;t<n.length-1;++t)n[t]=Math.floor(e/r[t]),e-=n[t]*r[t];return n[n.length-1]=e,n}function ct(e){return e&&e.then&&"function"==typeof e.then}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ot="tfjsflags";class Dt{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=jt,this.populateURLFlags()}setPlatform(e,t){null!=this.platform&&(mt().getBool("IS_TEST")||mt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},null!=this.urlFlags[e]){const t=this.urlFlags[e];mt().getBool("IS_TEST")||mt().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(ct(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const e=this.getQueryParams(this.global.location.search);if(Ot in e){e[Ot].split(",").forEach((e=>{const[t,r]=e.split(":");this.urlFlags[t]=pt(t,r)}))}}}function jt(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((e,...r)=>(ht(t,r[0],r[1]),r.join("=")))),t}function ht(e,t,r){e[decodeURIComponent(t)]=decodeURIComponent(r||"")}function pt(e,t){if("true"===(t=t.toLowerCase())||"false"===t)return"true"===t;if(""+ +t===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function mt(){return bt}let gt,bt=null;function Tt(e){bt=e}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function zt(){if(null==gt){let e;if("undefined"!=typeof window)e=window;else if("undefined"!=typeof global)e=global;else if("undefined"!=typeof process)e=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}gt=e}return gt}function dt(){const e=zt();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}function yt(e,t){const r=dt();if(r.has(e))return r.get(e);{const n=t();return r.set(e,n),r.get(e)}}const wt="Abs",Lt="Acos",ft="Acosh",It="Add",St="AddN",At="All",xt="Any",Yt="ArgMax",kt="ArgMin",Ct="Asin",Et="Asinh",Qt="Atan",Wt="Atanh",Ut="Atan2",qt="AvgPool",Gt="AvgPool3D",Mt="BatchMatMul",Kt="BatchToSpaceND",Nt="Bincount",Rt="BroadcastArgs",Ft="Cast",Bt="Ceil",Zt="ClipByValue",Vt="Complex",Xt="ComplexAbs",Ht="Concat",Jt="Conv2D",_t="Conv2DBackpropFilter",$t="Conv2DBackpropInput",er="Conv3D",tr="Conv3DBackpropInputV2",rr="Cos",nr="Cosh",Pr="Cumprod",ar="Cumsum",or="CropAndResize",ur="DenseBincount",sr="DepthToSpace",vr="DepthwiseConv2dNative",ir="DepthwiseConv2dNativeBackpropFilter",lr="DepthwiseConv2dNativeBackpropInput",cr="Diag",Or="Dilation2D",Dr="RealDiv",jr="Einsum",hr="Elu",pr="Erf",mr="Equal",gr="Exp",br="ExpandDims",Tr="Expm1",zr="FFT",dr="Fill",yr="FlipLeftRight",wr="Floor",Lr="FloorDiv",fr="FusedBatchNorm",Ir="GatherV2",Sr="GatherNd",Ar="Greater",xr="GreaterEqual",Yr="Identity",kr="IFFT",Cr="Imag",Er="IsFinite",Qr="IsInf",Wr="IsNan",Ur="LeakyRelu",qr="Less",Gr="LessEqual",Mr="LinSpace",Kr="Log",Nr="Log1p",Rr="LogicalAnd",Fr="LogicalNot",Br="LogicalOr",Zr="LRN",Vr="Max",Xr="Maximum",Hr="MaxPool",Jr="MaxPool3D",_r="MaxPoolWithArgmax",$r="Mean",en="Min",tn="Minimum",rn="MirrorPad",nn="Mod",Pn="Multinomial",an="Multiply",on="Neg",un="NotEqual",sn="NonMaxSuppressionV3",vn="NonMaxSuppressionV4",ln="NonMaxSuppressionV5",cn="OnesLike",On="OneHot",Dn="Pack",jn="PadV2",hn="Pow",pn="Prelu",mn="Prod",gn="Range",bn="Real",Tn="Reciprocal",zn="Relu",dn="Reshape",yn="ResizeNearestNeighbor",wn="ResizeBilinear",Ln="Relu6",fn="Reverse",In="Round",Sn="Rsqrt",An="ScatterNd",xn="SearchSorted",Yn="Select",kn="Selu",Cn="Slice",En="Sin",Qn="Sinh",Wn="Sign",Un="Sigmoid",qn="Softplus",Gn="Sqrt",Mn="Sum",Kn="SpaceToBatchND",Nn="SplitV",Rn="Softmax",Fn="SparseFillEmptyRows",Bn="SparseReshape",Zn="SparseSegmentMean",Vn="SparseSegmentSum",Xn="SparseToDense",Hn="SquaredDifference",Jn="StridedSlice",_n="StringNGrams",$n="StringSplit",eP="StringToHashBucketFast",tP="Sub",rP="Tan",nP="Tanh",PP="Tile",aP="TopK",oP="Transform",uP="Transpose",sP="Unique",vP="Unpack",iP="UnsortedSegmentSum",lP="ZerosLike",cP="Step",OP="FromPixels",DP="RotateWithOffset",jP="_FusedMatMul",hP="FusedConv2D",pP="FusedDepthwiseConv2D";
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function mP(...e){mt().getBool("IS_TEST")||mt().getBool("PROD")||console.warn(...e)}function gP(...e){mt().getBool("IS_TEST")||mt().getBool("PROD")||console.log(...e)}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const bP=yt("kernelRegistry",(()=>new Map)),TP=yt("gradRegistry",(()=>new Map));function zP(e,t){const r=LP(e,t);return bP.get(r)}function dP(e){return TP.get(e)}function yP(e){const t=bP.entries(),r=[];for(;;){const{done:n,value:P}=t.next();if(n)break;const[a,o]=P,[u]=a.split("_");u===e&&r.push(o)}return r}function wP(e){const{kernelName:t,backendName:r}=e,n=LP(t,r);bP.has(n)&&mP(`The kernel '${t}' for backend '${r}' is already registered`),bP.set(n,e)}function LP(e,t){return`${t}_${e}`}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=fP,r=null;try{r=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(Te){}function fP(e,t,r){this.low=0|e,this.high=0|t,this.unsigned=!!r}function IP(e){return!0===(e&&e.__isLong__)}fP.prototype.__isLong__,Object.defineProperty(fP.prototype,"__isLong__",{value:!0}),fP.isLong=IP;var n={},P={};function SP(e,t){var r,a,o;return t?(o=0<=(e>>>=0)&&e<256)&&(a=P[e])?a:(r=xP(e,(0|e)<0?-1:0,!0),o&&(P[e]=r),r):(o=-128<=(e|=0)&&e<128)&&(a=n[e])?a:(r=xP(e,e<0?-1:0,!1),o&&(n[e]=r),r)}function AP(e,t){if(isNaN(e))return t?l:i;if(t){if(e<0)return l;if(e>=u)return h}else{if(e<=-s)return p;if(e+1>=s)return j}return e<0?AP(-e,t).neg():xP(e%o|0,e/o|0,t)}function xP(e,t,r){return new fP(e,t,r)}fP.fromInt=SP,fP.fromNumber=AP,fP.fromBits=xP;var a=Math.pow;function YP(e,t,r){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return i;if("number"==typeof t?(r=t,t=!1):t=!!t,(r=r||10)<2||36<r)throw RangeError("radix");var n;if((n=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===n)return YP(e.substring(1),t,r).neg();for(var P=AP(a(r,8)),o=i,u=0;u<e.length;u+=8){var s=Math.min(8,e.length-u),v=parseInt(e.substring(u,u+s),r);if(s<8){var l=AP(a(r,s));o=o.mul(l).add(AP(v))}else o=(o=o.mul(P)).add(AP(v))}return o.unsigned=t,o}function kP(e,t){return"number"==typeof e?AP(e,t):"string"==typeof e?YP(e,t):xP(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}fP.fromString=YP,fP.fromValue=kP;var o=4294967296,u=o*o,s=u/2,v=SP(1<<24),i=SP(0);fP.ZERO=i;var l=SP(0,!0);fP.UZERO=l;var c=SP(1);fP.ONE=c;var O=SP(1,!0);fP.UONE=O;var D=SP(-1);fP.NEG_ONE=D;var j=xP(-1,2147483647,!1);fP.MAX_VALUE=j;var h=xP(-1,-1,!0);fP.MAX_UNSIGNED_VALUE=h;var p=xP(0,-2147483648,!1);fP.MIN_VALUE=p;var m=fP.prototype;m.toInt=function(){return this.unsigned?this.low>>>0:this.low},m.toNumber=function(){return this.unsigned?(this.high>>>0)*o+(this.low>>>0):this.high*o+(this.low>>>0)},m.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(p)){var t=AP(e),r=this.div(t),n=r.mul(t).sub(this);return r.toString(e)+n.toInt().toString(e)}return"-"+this.neg().toString(e)}for(var P=AP(a(e,6),this.unsigned),o=this,u="";;){var s=o.div(P),v=(o.sub(s.mul(P)).toInt()>>>0).toString(e);if((o=s).isZero())return v+u;for(;v.length<6;)v="0"+v;u=""+v+u}},m.getHighBits=function(){return this.high},m.getHighBitsUnsigned=function(){return this.high>>>0},m.getLowBits=function(){return this.low},m.getLowBitsUnsigned=function(){return this.low>>>0},m.getNumBitsAbs=function(){if(this.isNegative())return this.eq(p)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--);return 0!=this.high?t+33:t+1},m.isZero=function(){return 0===this.high&&0===this.low},m.eqz=m.isZero,m.isNegative=function(){return!this.unsigned&&this.high<0},m.isPositive=function(){return this.unsigned||this.high>=0},m.isOdd=function(){return 1==(1&this.low)},m.isEven=function(){return 0==(1&this.low)},m.equals=function(e){return IP(e)||(e=kP(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&(this.high===e.high&&this.low===e.low)},m.eq=m.equals,m.notEquals=function(e){return!this.eq(e)},m.neq=m.notEquals,m.ne=m.notEquals,m.lessThan=function(e){return this.comp(e)<0},m.lt=m.lessThan,m.lessThanOrEqual=function(e){return this.comp(e)<=0},m.lte=m.lessThanOrEqual,m.le=m.lessThanOrEqual,m.greaterThan=function(e){return this.comp(e)>0},m.gt=m.greaterThan,m.greaterThanOrEqual=function(e){return this.comp(e)>=0},m.gte=m.greaterThanOrEqual,m.ge=m.greaterThanOrEqual,m.compare=function(e){if(IP(e)||(e=kP(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},m.comp=m.compare,m.negate=function(){return!this.unsigned&&this.eq(p)?p:this.not().add(c)},m.neg=m.negate,m.add=function(e){IP(e)||(e=kP(e));var t=this.high>>>16,r=65535&this.high,n=this.low>>>16,P=65535&this.low,a=e.high>>>16,o=65535&e.high,u=e.low>>>16,s=0,v=0,i=0,l=0;return i+=(l+=P+(65535&e.low))>>>16,v+=(i+=n+u)>>>16,s+=(v+=r+o)>>>16,s+=t+a,xP((i&=65535)<<16|(l&=65535),(s&=65535)<<16|(v&=65535),this.unsigned)},m.subtract=function(e){return IP(e)||(e=kP(e)),this.add(e.neg())},m.sub=m.subtract,m.multiply=function(e){if(this.isZero())return i;if(IP(e)||(e=kP(e)),r)return xP(r.mul(this.low,this.high,e.low,e.high),r.get_high(),this.unsigned);if(e.isZero())return i;if(this.eq(p))return e.isOdd()?p:i;if(e.eq(p))return this.isOdd()?p:i;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(v)&&e.lt(v))return AP(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,n=65535&this.high,P=this.low>>>16,a=65535&this.low,o=e.high>>>16,u=65535&e.high,s=e.low>>>16,l=65535&e.low,c=0,O=0,D=0,j=0;return D+=(j+=a*l)>>>16,O+=(D+=P*l)>>>16,D&=65535,O+=(D+=a*s)>>>16,c+=(O+=n*l)>>>16,O&=65535,c+=(O+=P*s)>>>16,O&=65535,c+=(O+=a*u)>>>16,c+=t*l+n*s+P*u+a*o,xP((D&=65535)<<16|(j&=65535),(c&=65535)<<16|(O&=65535),this.unsigned)},m.mul=m.multiply,m.divide=function(e){if(IP(e)||(e=kP(e)),e.isZero())throw Error("division by zero");var t,n,P;if(r)return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?xP((this.unsigned?r.div_u:r.div_s)(this.low,this.high,e.low,e.high),r.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?l:i;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return l;if(e.gt(this.shru(1)))return O;P=l}else{if(this.eq(p))return e.eq(c)||e.eq(D)?p:e.eq(p)?c:(t=this.shr(1).div(e).shl(1)).eq(i)?e.isNegative()?c:D:(n=this.sub(e.mul(t)),P=t.add(n.div(e)));if(e.eq(p))return this.unsigned?l:i;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();P=i}for(n=this;n.gte(e);){t=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(t)/Math.LN2),u=o<=48?1:a(2,o-48),s=AP(t),v=s.mul(e);v.isNegative()||v.gt(n);)v=(s=AP(t-=u,this.unsigned)).mul(e);s.isZero()&&(s=c),P=P.add(s),n=n.sub(v)}return P},m.div=m.divide,m.modulo=function(e){return IP(e)||(e=kP(e)),r?xP((this.unsigned?r.rem_u:r.rem_s)(this.low,this.high,e.low,e.high),r.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},m.mod=m.modulo,m.rem=m.modulo,m.not=function(){return xP(~this.low,~this.high,this.unsigned)},m.and=function(e){return IP(e)||(e=kP(e)),xP(this.low&e.low,this.high&e.high,this.unsigned)},m.or=function(e){return IP(e)||(e=kP(e)),xP(this.low|e.low,this.high|e.high,this.unsigned)},m.xor=function(e){return IP(e)||(e=kP(e)),xP(this.low^e.low,this.high^e.high,this.unsigned)},m.shiftLeft=function(e){return IP(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?xP(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):xP(0,this.low<<e-32,this.unsigned)},m.shl=m.shiftLeft,m.shiftRight=function(e){return IP(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?xP(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):xP(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},m.shr=m.shiftRight,m.shiftRightUnsigned=function(e){if(IP(e)&&(e=e.toInt()),0===(e&=63))return this;var t=this.high;return e<32?xP(this.low>>>e|t<<32-e,t>>>e,this.unsigned):xP(32===e?t:t>>>e-32,0,this.unsigned)},m.shru=m.shiftRightUnsigned,m.shr_u=m.shiftRightUnsigned,m.toSigned=function(){return this.unsigned?xP(this.low,this.high,!1):this},m.toUnsigned=function(){return this.unsigned?this:xP(this.low,this.high,!0)},m.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},m.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},m.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},fP.fromBytes=function(e,t,r){return r?fP.fromBytesLE(e,t):fP.fromBytesBE(e,t)},fP.fromBytesLE=function(e,t){return new fP(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},fP.fromBytesBE=function(e,t){return new fP(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};var g=(Te={__proto__:null,default:t},[t].forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(t){if("default"!==t&&!(t in Te)){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(Te,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}}))})),Object.freeze(Te));
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const CP=t||g;function EP(e){return CP.fromString(e,!0,16)}const QP=EP("c3a5c85c97cb3127"),WP=EP("b492b66fbe98f273"),UP=EP("9ae16a3b2f90404f");function qP(e){return e.xor(e.shru(47))}function GP(e,t,r){const n=e.slice(t,t+r);return CP.fromBytes(Array.from(n),!0,!0)}function MP(e,t){return GP(e,t,8)}function KP(e,t){return GP(e,t,4)}function NP(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function RP(e,t,r=EP("9ddfea08eb382d69")){let n=e.xor(t).mul(r);n=n.xor(n.shru(47));let P=t.xor(n).mul(r);return P=P.xor(P.shru(47)),P=P.mul(r),P}function FP(e,t,r,n,P,a){P=P.add(e),a=NP(a.add(P).add(n),21);const o=P;return P=(P=P.add(t)).add(r),a=a.add(NP(P,44)),[P.add(n),a.add(o)]}function BP(e,t,r,n){return FP(MP(e,t),MP(e,t+8),MP(e,t+16),MP(e,t+24),r,n)}function ZP(e,t=e.length){if(t>=8){const r=UP.add(2*t),n=MP(e,0).add(UP),P=MP(e,t-8);return RP(NP(P,37).mul(r).add(n),NP(n,25).add(P).mul(r),r)}if(t>=4){const r=UP.add(2*t);return RP(KP(e,0).shl(3).add(t),KP(e,t-4),r)}if(t>0){const r=e[0]+(e[t>>1]<<8),n=t+(e[t-1]<<2);return qP(UP.mul(r).xor(QP.mul(n))).mul(UP)}return UP}function VP(e,t=e.length){const r=UP.add(2*t),n=MP(e,0).mul(WP),P=MP(e,8),a=MP(e,t-8).mul(r),o=MP(e,t-16).mul(UP);return RP(NP(n.add(P),43).add(NP(a,30)).add(o),n.add(NP(P.add(UP),18)).add(a),r)}function XP(e,t=e.length){const r=UP.add(2*t),n=MP(e,0).mul(UP),P=MP(e,8),a=MP(e,t-8).mul(r),o=MP(e,t-16).mul(UP),u=NP(n.add(P),43).add(NP(a,30)).add(o),s=RP(u,n.add(NP(P.add(UP),18)).add(a),r),v=MP(e,16).mul(r),i=MP(e,24),l=u.add(MP(e,t-32)).mul(r),c=s.add(MP(e,t-24)).mul(r);return RP(NP(v.add(i),43).add(NP(l,30)).add(c),v.add(NP(i.add(n),18)).add(l),r)}function HP(e,t=e.length){const r=CP.fromNumber(81,!0);if(t<=32)return t<=16?ZP(e,t):VP(e,t);if(t<=64)return XP(e,t);let n=r,P=r.mul(WP).add(113),a=qP(P.mul(UP).add(113)).mul(UP),o=[CP.UZERO,CP.UZERO],u=[CP.UZERO,CP.UZERO];n=n.mul(UP).add(MP(e,0));let s=0;const v=64*(t-1>>6),i=v+(t-1&63)-63;do{n=NP(n.add(P).add(o[0]).add(MP(e,s+8)),37).mul(WP),P=NP(P.add(o[1]).add(MP(e,s+48)),42).mul(WP),n=n.xor(u[1]),P=P.add(o[0]).add(MP(e,s+40)),a=NP(a.add(u[0]),33).mul(WP),o=BP(e,s,o[1].mul(WP),n.add(u[0])),u=BP(e,s+32,a.add(u[1]),P.add(MP(e,s+16))),[a,n]=[n,a],s+=64}while(s!==v);const l=WP.add(a.and(255).shl(1));return s=i,u[0]=u[0].add(t-1&63),o[0]=o[0].add(u[0]),u[0]=u[0].add(o[0]),n=NP(n.add(P).add(o[0]).add(MP(e,s+8)),37).mul(l),P=NP(P.add(o[1]).add(MP(e,s+48)),42).mul(l),n=n.xor(u[1].mul(9)),P=P.add(o[0].mul(9).add(MP(e,s+40))),a=NP(a.add(u[0]),33).mul(l),o=BP(e,s,o[1].mul(l),n.add(u[0])),u=BP(e,s+32,a.add(u[1]),P.add(MP(e,s+16))),[a,n]=[n,a],RP(RP(o[0],u[0],l).add(qP(P).mul(QP)).add(a),RP(o[1],u[1],l).add(n),l)}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function JP(e,t){return"string"===t?ta(e):$P([e],t)}function _P(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}function $P(e,t){if("string"===t)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Ce(e)),mt().getBool("DEBUG")&&Be(e,t),_P(e,t))return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){const t=new Uint8Array(e.length);for(let r=0;r<t.length;++r)0!==Math.round(e[r])&&(t[r]=1);return t}throw new Error(`Unknown data type ${t}`)}function ea(){return mt().platform.now()}function ta(e,t="utf-8"){return t=t||"utf-8",mt().platform.encode(e,t)}function ra(e,t="utf-8"){return t=t||"utf-8",mt().platform.decode(e,t)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class na{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new aa)}profileKernel(e,t,r){let n;const P=()=>{n=r()};let a;const o=ea();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(P);else{P();for(const e of n)e.dataSync();a=Promise.resolve({kernelMs:ea()-o})}if(mt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<n.length;t++){const r=n[t];r.data().then((t=>{Pa(t,r.dtype,e)}))}const u={kernelName:e,outputs:n,inputs:t,timeMs:a.then((e=>e.kernelMs)),extraInfo:a.then((e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""))};return u}logKernelProfile(e){const{kernelName:t,outputs:r,timeMs:n,inputs:P,extraInfo:a}=e;r.forEach((e=>{Promise.all([e.data(),n,a]).then((r=>{this.logger.logKernelProfile(t,e,r[0],r[1],P,r[2])}))}))}}function Pa(e,t,r){if("float32"!==t)return!1;for(let t=0;t<e.length;t++){const n=e[t];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${r}'`),!0}return!1}class aa{logKernelProfile(e,t,r,n,P,a){const o="number"==typeof n?qe(`${n}ms`,9):n.error,u=qe(e,25),s=t.rank,v=t.size,i=qe(t.shape.toString(),14);let l="";for(const e in P){const r=P[e];if(null!=r){const n=r.shape||t.shape,P=n.length;l+=`${e}: ${P}D ${P>0?n:""} `}}console.log(`%c${u}\t%c${o}\t%c${s}D ${i}\t%c${v}\t%c${l}\t%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function oa(e,t,r){const n={},P={};for(let e=0;e<t.length;e++)n[t[e].id]=!0;for(let r=0;r<e.length;r++){const a=e[r],o=a.inputs;for(const e in o){const r=o[e];let u=!1;for(let e=0;e<t.length;e++)if(n[r.id]){a.outputs.forEach((e=>n[e.id]=!0)),u=!0,P[a.id]=!0;break}if(u)break}}const a={};a[r.id]=!0;const o={};for(let t=e.length-1;t>=0;t--){const r=e[t],n=r.inputs;for(let e=0;e<r.outputs.length;e++)if(a[r.outputs[e].id]){for(const e in n)a[n[e].id]=!0,o[r.id]=!0;break}}const u=[];for(let t=0;t<e.length;t++){const r=e[t];if(P[r.id]&&o[r.id]){const e={};for(const t in r.inputs){const P=r.inputs[t];n[P.id]&&(e[t]=P)}const t=Object.assign({},r);t.inputs=e,t.outputs=r.outputs,u.push(t)}}return u}function ua(e,t,r,n){for(let P=t.length-1;P>=0;P--){const a=t[P],o=[];if(a.outputs.forEach((t=>{const r=e[t.id];null!=r?o.push(r):o.push(null)})),null==a.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const u=a.gradient(o);for(const t in a.inputs){if(!(t in u))throw new Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(u)}.`);const P=r((()=>u[t]()));if("float32"!==P.dtype)throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${P.dtype}'`);const o=a.inputs[t];if(!Qe(P.shape,o.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${P.shape}', which does not match the shape of the input '${o.shape}'`);if(null==e[o.id])e[o.id]=P;else{const t=e[o.id];e[o.id]=n(t,P),t.dispose()}}}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const sa=20,va=3,ia=7;function la(e,t,r,n){const P=Pt(t),a=ca(e,t,r,P),o=t.length,u=ja(e,t,r,P,a),s=["Tensor"];return n&&(s.push(`  dtype: ${r}`),s.push(`  rank: ${o}`),s.push(`  shape: [${t}]`),s.push("  values:")),s.push(u.map((e=>"    "+e)).join("\n")),s.join("\n")}function ca(e,t,r,n){const P=Ee(t),a=n[n.length-1],o=new Array(a).fill(0),u=t.length,s="complex64"===r?ha(e):e;if(u>1)for(let e=0;e<P/a;e++){const t=e*a;for(let e=0;e<a;e++)o[e]=Math.max(o[e],Oa(s[t+e],0,r).length)}return o}function Oa(e,t,r){let n;return n=Array.isArray(e)?`${parseFloat(e[0].toFixed(ia))} + ${parseFloat(e[1].toFixed(ia))}j`:_e(e)?`'${e}'`:"bool"===r?Da(e):parseFloat(e.toFixed(ia)).toString(),qe(n,t)}function Da(e){return 0===e?"false":"true"}function ja(e,t,r,n,P,a=!0){const o="complex64"===r?2:1,u=t[0],s=t.length;if(0===s){if("complex64"===r){return[Oa(ha(e)[0],0,r)]}return"bool"===r?[Da(e[0])]:[e[0].toString()]}if(1===s){if(u>sa){const t=va*o;let n=Array.from(e.slice(0,t)),a=Array.from(e.slice((u-va)*o,u*o));return"complex64"===r&&(n=ha(n),a=ha(a)),["["+n.map(((e,t)=>Oa(e,P[t],r))).join(", ")+", ..., "+a.map(((e,t)=>Oa(e,P[u-va+t],r))).join(", ")+"]"]}return["["+("complex64"===r?ha(e):Array.from(e)).map(((e,t)=>Oa(e,P[t],r))).join(", ")+"]"]}const v=t.slice(1),i=n.slice(1),l=n[0]*o,c=[];if(u>sa){for(let t=0;t<va;t++){const n=t*l,a=n+l;c.push(...ja(e.slice(n,a),v,r,i,P,!1))}c.push("...");for(let t=u-va;t<u;t++){const n=t*l,a=n+l;c.push(...ja(e.slice(n,a),v,r,i,P,t===u-1))}}else for(let t=0;t<u;t++){const n=t*l,a=n+l;c.push(...ja(e.slice(n,a),v,r,i,P,t===u-1))}const O=2===s?",":"";c[0]="["+c[0]+O;for(let e=1;e<c.length-1;e++)c[e]=" "+c[e]+O;let D=",\n";for(let e=2;e<s;e++)D+="\n";return c[c.length-1]=" "+c[c.length-1]+"]"+(a?"":D),c}function ha(e){const t=[];for(let r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class pa{constructor(e,t,r){if(this.dtype=t,this.shape=e.slice(),this.size=Ee(e),null!=r){const e=r.length;xe(e===this.size,(()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Fe(t,this.size),this.strides=Pt(e)}set(e,...t){0===t.length&&(t=[0]),xe(t.length===this.rank,(()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`));const r=this.locToIndex(t);this.values[r]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(const r of e){if(r<0||r>=this.shape[t]){const t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(t)}t++}let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=this.strides[t]*e[t];return this.values[r]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];const t=new Array(this.shape.length);for(let r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return ma().makeTensor(this.values,this.shape,this.dtype)}}let ma=null,ga=null;function ba(e){ma=e}function Ta(e){ga=e}class za{constructor(e,t,r,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=Ee(e),this.strides=Pt(e),this.dataId=r,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return ga.buffer(this.shape,this.dtype,e)}bufferSync(){return ga.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return ot(this.shape,e,"complex64"===this.dtype)}arraySync(){return ot(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const e=ma().read(this.dataId);if("string"===this.dtype){const t=await e;try{return t.map((e=>ra(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),ma().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=ma().readSync(this.dataId);if("string"===this.dtype)try{return e.map((e=>ra(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await ma().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(ma().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return ga.print(this,e)}clone(){return this.throwIfDisposed(),ga.clone(this)}toString(e=!1){return la(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),ga.cast(this,e)}variable(e=!0,t,r){return this.throwIfDisposed(),ma().makeVariable(this,e,t,r)}}function da(){return yt("Tensor",(()=>za))}Object.defineProperty(za,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),da();class ya extends za{constructor(e,t,r,n){super(e.shape,e.dtype,e.dataId,n),this.trainable=t,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Qe(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);ma().disposeTensor(this),this.dataId=e.dataId,ma().incRef(this,null)}dispose(){ma().disposeVariable(this),this.isDisposedInternal=!0}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
var b,T,z,d,y;Object.defineProperty(ya,Symbol.hasInstance,{value:e=>e instanceof za&&null!=e.assign&&e.assign instanceof Function}),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(b||(b={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(T||(T={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(z||(z={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(d||(d={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(y||(y={}));const wa={float32:d,int32:T,bool:z,complex64:y};function La(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return wa[e][t]}function fa(e){return La(e,"int32")}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ia(e,t){if(e.dtype===t.dtype)return[e,t];const r=La(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function Sa(e,t){xe(e.dtype===t.dtype,(()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`))}function Aa(e){const t=[];return xa(e,t,new Set),t}function xa(e,t,r){if(null==e)return;if(e instanceof za)return void t.push(e);if(!Ya(e))return;const n=e;for(const e in n){const P=n[e];r.has(P)||(r.add(P),xa(P,t,r))}}function Ya(e){return Array.isArray(e)||"object"==typeof e}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ka(e){return null!=e.kernelName}class Ca{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((e=>e.name))))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Ea{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ca}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t];if(await this.initializeBackend(r).success)return void await this.setBackend(r)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{const{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,r=1){return e in this.registryFactory?(mP(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:r},!0)}async setBackend(e){if(null==this.registryFactory[e])throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;const{success:t,asyncInit:r}=this.initializeBackend(e);if(!(r?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new na(this.backendInstance),!0}setupRegisteredKernels(){yP(this.backendName).forEach((e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(e){yP(e).forEach((t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])}))}initializeBackend(e){const t=this.registryFactory[e];if(null==t)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=t.factory();if(!r||r instanceof we||"function"!=typeof r.then)return this.registry[e]=r,{success:!0,asyncInit:!1};{const t=++this.pendingBackendInitId,n=r.then((r=>!(t<this.pendingBackendInitId)&&(this.registry[e]=r,this.pendingBackendInit=null,!0))).catch((r=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,mP(`Initialization of backend ${e} failed`),mP(r.stack||r.message)),!1)));return this.pendingBackendInit=n,{success:n,asyncInit:!0}}}catch(t){return mP(`Initialization of backend ${e} failed`),mP(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority))}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t],{success:n,asyncInit:P}=this.initializeBackend(r);if(P||n)return{name:r,asyncInit:P}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const r=this.state.tensorInfo.get(t),n=r.backend,P=this.readSync(t),a=n.refCount(t);n.disposeData(t,!0),r.backend=e,e.move(t,P,r.shape,r.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let r,n=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");n=e}return this.scopedRun((()=>this.startScope(n)),(()=>this.endScope(r)),(()=>(r=t(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r)))}scopedRun(e,t,r){e();try{const e=r();return t(),e}catch(e){throw t(),e}}nextTensorId(){return Ea.nextTensorId++}nextVariableId(){return Ea.nextVariableId++}clone(e){const t=Ua.runKernel(Yr,{x:e}),r={x:e};return this.addTapeNode(this.state.activeScope.name,r,[t],(e=>({x:()=>{const t={x:e},r={dtype:"float32"};return Ua.runKernel(Ft,t,r)}})),[],{}),t}runKernel(e,t,r){null==this.backendName&&this.backend;if(!(null!=zP(e,this.backendName)))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,r){const n=this.backend.numDataIds();let P=0;r.forEach((e=>{P+="complex64"===e.dtype?3:1}));const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=n-t-P-a;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,r=[];const n=this.isTapeOn(),P=this.state.numBytes,a=this.state.numTensors;let o,u;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const s=ka(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(ka(e)){const{kernelName:t,inputs:P,attrs:a}=e;null==this.backendName&&this.backend;const s=zP(t,this.backendName);xe(null!=s,(()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`)),o=()=>{const e=this.backend.numDataIds();u=s.kernelFunc({inputs:P,attrs:a,backend:this.backend});const o=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);const v=o.map((e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e)));if(n){const e=this.getTensorsForGradient(t,P,v);r=this.saveTensorsForBackwardMode(e)}return v}}else{const{forwardFunc:t}=e,P=e=>{n&&(r=e.map((e=>this.keep(this.clone(e)))))};o=()=>{const e=this.backend.numDataIds();u=this.tidy((()=>t(this.backend,P)));const r=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(s,e,r),r}}const{inputs:v,attrs:i}=e,l=ka(e)?null:e.backwardsFunc;let c;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(c=this.profiler.profileKernel(s,v,(()=>o())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(c),t=c.outputs):t=o()})),n&&this.addTapeNode(s,v,t,l,r,i),this.state.profiling&&this.state.activeProfile.kernels.push({name:s,bytesAdded:this.state.numBytes-P,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(v).map((e=>null!=v[e]?v[e].shape:null)),outputShapes:t.map((e=>e.shape)),kernelTimeMs:c.timeMs,extraInfo:c.extraInfo}),Array.isArray(u)?t:t[0]}saveTensorsForBackwardMode(e){return e.map((e=>this.keep(this.clone(e))))}getTensorsForGradient(e,t,r){const n=dP(e);if(null!=n){const e=n.inputsToSave||[],P=n.outputsToSave||[];let a;n.saveAllInputs?(xe(Array.isArray(t),(()=>"saveAllInputs is true, expected inputs to be an array.")),a=Object.keys(t).map((e=>t[e]))):a=e.map((e=>t[e]));const o=r.filter(((e,t)=>P[t]));return a.concat(o)}return[]}makeTensor(e,t,r,n){if(null==e)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",n=n||this.backend;let P=e;"string"===r&&_e(e[0])&&(P=e.map((e=>ta(e))));const a=n.write(P,t,r),o=new za(t,r,a,this.nextTensorId());if(this.trackTensor(o,n),"string"===r){const e=this.state.tensorInfo.get(a),t=Je(P);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,r,n){const P={dataId:e,shape:t,dtype:r=r||"float32"};return this.makeTensorFromTensorInfo(P,n)}makeTensorFromTensorInfo(e,t){const{dataId:r,shape:n,dtype:P}=e,a=new za(n,P,r,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,r,n){r=r||this.nextVariableId().toString(),null!=n&&n!==e.dtype&&(e=e.cast(n));const P=new ya(e,t,r,this.nextTensorId());if(null!=this.state.registeredVariables[P.name])throw new Error(`Variable with name ${P.name} was already registered`);return this.state.registeredVariables[P.name]=P,this.incRef(P,this.backend),P}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let r=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(r=e.size*He(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof ya||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){const t=e.size*He(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((e=>e.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,r,n,P,a){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:P},u=dP(e);null!=u&&(n=u.gradFunc),null!=n&&(o.gradient=e=>(e=e.map(((e,t)=>{if(null==e){const e=r[t],n=st(e.size,e.dtype);return this.makeTensor(n,e.shape,e.dtype)}return e})),n(e.length>1?e:e[0],P,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Aa(e),r=new Set(t.map((e=>e.id)));for(let e=0;e<this.state.activeScope.track.length;e++){const t=this.state.activeScope.track[e];t.kept||r.has(t.id)||t.dispose()}const n=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach((e=>{e.kept||e.scopeId!==n.id||this.track(e)}))}gradients(e,t,r,n=!1){if(xe(t.length>0,(()=>"gradients() received an empty list of xs.")),null!=r&&"float32"!==r.dtype)throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const P=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",e)));xe(P instanceof za,(()=>"The result y returned by f() must be a tensor."));const a=oa(this.state.activeTape,t,P);if(!n&&0===a.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const e={};e[P.id]=null==r?Qa(P.shape):r,ua(e,a,(e=>this.tidy(e)),qa);const n=t.map((t=>e[t.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((e=>{for(const t of e.saved)t.dispose()})),this.state.activeTape=null),{value:P,grads:n}}))}customGrad(e){return xe(rt(e),(()=>"The f passed in customGrad(f) must be a function.")),(...t)=>{let r;xe(t.every((e=>e instanceof za)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const n={};t.forEach(((e,t)=>{n[t]=e}));return this.runKernelFunc({forwardFunc:(n,P)=>(r=e(...t,P),xe(r.value instanceof za,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),xe(rt(r.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),r.value),backwardsFunc:(e,n)=>{const P=r.gradFunc(e,n),a=Array.isArray(P)?P:[P];xe(a.length===t.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),xe(a.every((e=>e instanceof za)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const o={};return a.forEach(((e,t)=>{o[t]=()=>e})),o},inputs:n})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=ea(),r=await this.backend.time(e);return r.wallMs=ea()-t,r}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ca;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function Qa(e){const t=ut(Ee(e),"float32");return Ua.makeTensor(t,e,"float32")}function Wa(){const e=zt();if(null==e._tfengine){const t=new Dt(e);e._tfengine=new Ea(t)}return Tt(e._tfengine.ENV),ba((()=>e._tfengine)),e._tfengine}Ea.nextTensorId=0,Ea.nextVariableId=0;const Ua=Wa();function qa(e,t){const r={a:e,b:t};return Ua.runKernel(It,r)}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ga(e){if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;const t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){const t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Ma(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ka=mt();
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function Na(e,t){let r=e;if(Xe(e))return"string"===t?[]:[e.length];if(!Array.isArray(e))return[];const n=[];for(;Array.isArray(r)||Xe(r)&&"string"!==t;)n.push(r.length),r=r[0];return Array.isArray(e)&&mt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Ra(e,n,[]),n}function Ra(e,t,r){if(r=r||[],!Array.isArray(e)&&!Xe(e))return void xe(0===t.length,(()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`));xe(t.length>0,(()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`)),xe(e.length===t[0],(()=>`Element arr[${r.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`));const n=t.slice(1);for(let t=0;t<e.length;++t)Ra(e[t],n,r.concat(t))}function Fa(e,t,r,n){if("string_or_numeric"!==e){if(null==e)throw new Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw new Error(`Argument '${r}' passed to '${n}' must be ${e} tensor, but got ${t} tensor`)}}function Ba(e,t,r,n="numeric"){if(e instanceof za)return Fa(n,e.dtype,t,r),e;let P=tt(e);if("string"!==P&&["bool","int32","float32"].indexOf(n)>=0&&(P=n),Fa(n,P,t,r),null==e||!Xe(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){const n=null==e?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${r}' must be a Tensor or TensorLike, but got '${n}'`)}const a=Na(e,P);Xe(e)||Array.isArray(e)||(e=[e]);const o="string"!==P?$P(e,P):Ce(e,[],!0);return Ua.makeTensor(o,a,P)}function Za(e,t,r,n="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${r} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map(((e,P)=>Ba(e,`${t}[${P}]`,r,n)))}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */Ka.registerFlag("DEBUG",(()=>!1),(e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),Ka.registerFlag("IS_BROWSER",(()=>Ma())),Ka.registerFlag("IS_NODE",(()=>"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node)),Ka.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),Ka.registerFlag("PROD",(()=>!1)),Ka.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>Ka.getBool("DEBUG"))),Ka.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),Ka.registerFlag("IS_TEST",(()=>!1)),Ka.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>!0)),Ka.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),Ka.registerFlag("ENGINE_COMPILE_ONLY",(()=>!1));const Va="__op";function Xa(e){const t=Object.keys(e);if(1!==t.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let r=t[0];const n=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1)),r+=Va;const P=(...e)=>{Ua.startScope(r);try{const t=n(...e);return ct(t)&&console.error("Cannot return a Promise inside of tidy."),Ua.endScope(t),t}catch(e){throw Ua.endScope(null),e}};return Object.defineProperty(P,"name",{value:r,configurable:!0}),P}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ha(e,t){const r=Ba(e,"real","complex"),n=Ba(t,"imag","complex");Ye(r.shape,n.shape,`real and imag shapes, ${r.shape} and ${n.shape}, must match in call to tf.complex().`);const P={real:r,imag:n};return Ua.runKernel(Vt,P)}const Ja=Xa({complex_:Ha});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function _a(e,t,r,n){if(null==n&&(n=tt(e)),"complex64"===n)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Xe(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){vt(t);const e=Ee(t),n=Ee(r);xe(e===n,(()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${n}`));for(let e=0;e<r.length;++e){const n=r[e],P=e!==r.length-1||n!==Ee(t.slice(e));xe(r[e]===t[e]||!P,(()=>`Error creating a new Tensor. Inferred shape (${r}) does not match the provided shape (${t}). `))}}return Xe(e)||Array.isArray(e)||(e=[e]),t=t||r,e="string"!==n?$P(e,n):Ce(e,[],!0),Ua.makeTensor(e,t,n)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $a(e,t,r){return _a(e,t,Na(e,r),r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const eo={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8},to=4;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function ro(e,t){const r=[],n=[],P=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);for(let a=0;a<P.length;++a){const o=P[a],u=Array.isArray(e)?e[a].tensor:e[o];if("float32"!==u.dtype&&"int32"!==u.dtype&&"bool"!==u.dtype&&"string"!==u.dtype&&"complex64"!==u.dtype)throw new Error(`Unsupported dtype in weight '${o}': ${u.dtype}`);const s={name:o,shape:u.shape,dtype:u.dtype};if("string"===u.dtype){const e=new Promise((async e=>{const t=await u.bytes(),r=t.reduce(((e,t)=>e+t.length),0)+to*t.length,n=new Uint8Array(r);let P=0;for(let e=0;e<t.length;e++){const r=t[e],a=new Uint8Array(new Uint32Array([r.length]).buffer);n.set(a,P),P+=to,n.set(r,P),P+=r.length}e(n)}));n.push(e)}else n.push(u.data());null!=t&&(s.group=t),r.push(s)}return{data:Po(await Promise.all(n)),specs:r}}function no(e,t){const r={};let n,P=0;for(const a of t){const t=a.name,o=a.dtype,u=a.shape,s=Ee(u);let v;if("quantization"in a){const r=a.quantization;if("uint8"===r.dtype||"uint16"===r.dtype){if(!("min"in r)||!("scale"in r))throw new Error(`Weight ${a.name} with quantization ${r.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==r.dtype)throw new Error(`Weight ${a.name} has unknown quantization dtype ${r.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==o)throw new Error(`Weight ${a.name} is quantized with ${r.dtype} which only supports weights of type float32 not ${o}.`)}const u=eo[r.dtype],i=e.slice(P,P+s*u),l="uint8"===r.dtype?new Uint8Array(i):new Uint16Array(i);if("float32"===o)if("uint8"===r.dtype||"uint16"===r.dtype){v=new Float32Array(l.length);for(let e=0;e<l.length;e++){const t=l[e];v[e]=t*r.scale+r.min}}else{if("float16"!==r.dtype)throw new Error(`Unsupported quantization type ${r.dtype} for weight type float32.`);void 0===n&&(n=po()),v=n(l)}else{if("int32"!==o)throw new Error(`Unsupported dtype in weight '${t}': ${o}`);if("uint8"!==r.dtype&&"uint16"!==r.dtype)throw new Error(`Unsupported quantization type ${r.dtype} for weight type int32.`);v=new Int32Array(l.length);for(let e=0;e<l.length;e++){const t=l[e];v[e]=Math.round(t*r.scale+r.min)}}P+=s*u}else if("string"===o){const t=Ee(a.shape);v=[];for(let r=0;r<t;r++){const t=new Uint32Array(e.slice(P,P+to))[0];P+=to;const r=new Uint8Array(e.slice(P,P+t));v.push(r),P+=t}}else{const n=eo[o],a=e.slice(P,P+s*n);if("float32"===o)v=new Float32Array(a);else if("int32"===o)v=new Int32Array(a);else if("bool"===o)v=new Uint8Array(a);else{if("complex64"!==o)throw new Error(`Unsupported dtype in weight '${t}': ${o}`);{v=new Float32Array(a);const e=new Float32Array(v.length/2),n=new Float32Array(v.length/2);for(let t=0;t<e.length;t++)e[t]=v[2*t],n[t]=v[2*t+1];const P=$a(e,u,"float32"),o=$a(n,u,"float32");r[t]=Ja(P,o),P.dispose(),o.dispose()}}P+=s*n}"complex64"!==o&&(r[t]=$a(v,u,o))}return r}function Po(e){if(null===e)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const r=[];e.forEach((e=>{if(t+=e.byteLength,r.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)}));const n=new Uint8Array(t);let P=0;return r.forEach((e=>{n.set(new Uint8Array(e.buffer),P),P+=e.byteLength})),n.buffer}const ao="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function oo(e){return ao?Buffer.byteLength(e):new Blob([e]).size}function uo(e){if(ao)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let r="";for(let e=0,n=t.length;e<n;e++)r+=String.fromCharCode(t[e]);return btoa(r)}function so(e){if(ao){const t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;++e)r.set([t.charCodeAt(e)],e);return r.buffer}function vo(e){if(1===e.length)return e[0];let t=0;e.forEach((e=>{t+=e.byteLength}));const r=new Uint8Array(t);let n=0;return e.forEach((e=>{r.set(new Uint8Array(e),n),n+=e.byteLength})),r.buffer}function io(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);const t=e.split("/");return t[t.length-1]}function lo(e,t){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),r}async function co(e,t){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),null!=e.weightsManifest){const[n,P]=await t(e.weightsManifest);r.weightSpecs=n,r.weightData=P}return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),r}function Oo(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:oo(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:oo(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}function Do(){const e=e=>{let t=e<<13,r=0;for(;0==(8388608&t);)r-=8388608,t<<=1;return t&=-8388609,r+=947912704,t|r},t=new Uint32Array(2048);t[0]=0;for(let r=1;r<1024;r++)t[r]=e(r);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function jo(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function ho(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function po(){const e=Do(),t=jo(),r=ho();return n=>{const P=new ArrayBuffer(4*n.length),a=new Uint32Array(P);for(let P=0;P<n.length;P++){const o=n[P],u=e[r[o>>10]+(1023&o)]+t[o>>10];a[P]=u}return new Float32Array(P)}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class mo{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==mo.instance&&(mo.instance=new mo),mo.instance}static registerSaveRouter(e){mo.getInstance().saveRouters.push(e)}static registerLoadRouter(e){mo.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return mo.getHandlers(e,"save")}static getLoadHandlers(e,t){return mo.getHandlers(e,"load",t)}static getHandlers(e,t,r){const n=[];return("load"===t?mo.getInstance().loadRouters:mo.getInstance().saveRouters).forEach((t=>{const P=t(e,r);null!==P&&n.push(P)})),n}}const go=e=>mo.registerSaveRouter(e),bo=e=>mo.registerLoadRouter(e),To=e=>mo.getSaveHandlers(e),zo=(e,t)=>mo.getLoadHandlers(e,t)
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,yo="tensorflowjs",wo=1,Lo="models_store",fo="model_info_store";function Io(){if(!mt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function So(e){const t=e.result;t.createObjectStore(Lo,{keyPath:"modelPath"}),t.createObjectStore(fo,{keyPath:"modelPath"})}class Ao{constructor(e){if(this.indexedDB=Io(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise(((e,r)=>{const n=this.indexedDB.open(yo,wo);n.onupgradeneeded=()=>So(n),n.onsuccess=()=>{const P=n.result;if(null==t){const t=P.transaction(Lo,"readonly"),n=t.objectStore(Lo).get(this.modelPath);n.onsuccess=()=>{if(null==n.result)return P.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(n.result.modelArtifacts)},n.onerror=e=>(P.close(),r(n.error)),t.oncomplete=()=>P.close()}else{const n=Oo(t),a=P.transaction(fo,"readwrite");let o=a.objectStore(fo);const u=o.put({modelPath:this.modelPath,modelArtifactsInfo:n});let s;u.onsuccess=()=>{s=P.transaction(Lo,"readwrite");const u=s.objectStore(Lo).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:n});u.onsuccess=()=>e({modelArtifactsInfo:n}),u.onerror=e=>{o=a.objectStore(fo);const t=o.delete(this.modelPath);t.onsuccess=()=>(P.close(),r(u.error)),t.onerror=e=>(P.close(),r(u.error))}},u.onerror=e=>(P.close(),r(u.error)),a.oncomplete=()=>{null==s?P.close():s.oncomplete=()=>P.close()}}},n.onerror=e=>r(n.error)}))}}Ao.URL_SCHEME="indexeddb://";const xo=e=>mt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ao.URL_SCHEME)?Yo(e.slice(Ao.URL_SCHEME.length)):null;function Yo(e){return new Ao(e)}function ko(e){return e.startsWith(Ao.URL_SCHEME)?e.slice(Ao.URL_SCHEME.length):e}mo.registerSaveRouter(xo),mo.registerLoadRouter(xo);class Co{constructor(){this.indexedDB=Io()}async listModels(){return new Promise(((e,t)=>{const r=this.indexedDB.open(yo,wo);r.onupgradeneeded=()=>So(r),r.onsuccess=()=>{const n=r.result,P=n.transaction(fo,"readonly"),a=P.objectStore(fo).getAll();a.onsuccess=()=>{const t={};for(const e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(n.close(),t(a.error)),P.oncomplete=()=>n.close()},r.onerror=e=>t(r.error)}))}async removeModel(e){return e=ko(e),new Promise(((t,r)=>{const n=this.indexedDB.open(yo,wo);n.onupgradeneeded=()=>So(n),n.onsuccess=()=>{const P=n.result,a=P.transaction(fo,"readwrite"),o=a.objectStore(fo),u=o.get(e);let s;u.onsuccess=()=>{if(null==u.result)return P.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const n=o.delete(e),a=()=>{s=P.transaction(Lo,"readwrite");const n=s.objectStore(Lo).delete(e);n.onsuccess=()=>t(u.result.modelArtifactsInfo),n.onerror=e=>r(u.error)};n.onsuccess=a,n.onerror=e=>(a(),P.close(),r(u.error))}},u.onerror=e=>(P.close(),r(u.error)),a.oncomplete=()=>{null==s?P.close():s.oncomplete=()=>P.close()}},n.onerror=e=>r(n.error)}))}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Eo="/",Qo="tensorflowjs_models",Wo="info",Uo="model_topology",qo="weight_specs",Go="weight_data",Mo="model_metadata";function Ko(e){return{info:[Qo,e,Wo].join(Eo),topology:[Qo,e,Uo].join(Eo),weightSpecs:[Qo,e,qo].join(Eo),weightData:[Qo,e,Go].join(Eo),modelMetadata:[Qo,e,Mo].join(Eo)}}function No(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Ro(e){const t=e.split(Eo);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Eo)}function Fo(e){return e.startsWith(Bo.URL_SCHEME)?e.slice(Bo.URL_SCHEME.length):e}class Bo{constructor(e){if(!mt().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Ko(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),n=Oo(e);try{this.LS.setItem(this.keys.info,JSON.stringify(n)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,uo(e.weightData));const P={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(P)),{modelArtifactsInfo:n}}catch(e){throw No(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${n.modelTopologyBytes}, weightSpecsBytes=${n.weightSpecsBytes}, weightDataBytes=${n.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(null==r)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=r;const n=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==n)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=n;const P=this.LS.getItem(this.keys.modelMetadata);if(null!=P){const e=JSON.parse(P);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(null==a)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=so(a),t}}Bo.URL_SCHEME="localstorage://";const Zo=e=>mt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Bo.URL_SCHEME)?Vo(e.slice(Bo.URL_SCHEME.length)):null;function Vo(e){return new Bo(e)}mo.registerSaveRouter(Zo),mo.registerLoadRouter(Zo);class Xo{constructor(){xe(mt().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),xe("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const e={},t=Qo+Eo,r=Eo+Wo;for(let n=0;n<this.LS.length;++n){const P=this.LS.key(n);if(P.startsWith(t)&&P.endsWith(r)){e[Ro(P)]=JSON.parse(this.LS.getItem(P))}}return e}async removeModel(e){const t=Ko(e=Fo(e));if(null==this.LS.getItem(t.info))throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(t.info));return No(t),r}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ho="://";class Jo{constructor(){this.managers={}}static getInstance(){return null==Jo.instance&&(Jo.instance=new Jo),Jo.instance}static registerManager(e,t){xe(null!=e,(()=>"scheme must not be undefined or null.")),e.endsWith(Ho)&&(e=e.slice(0,e.indexOf(Ho))),xe(e.length>0,(()=>"scheme must not be an empty string."));const r=Jo.getInstance();xe(null==r.managers[e],(()=>`A model store manager is already registered for scheme '${e}'.`)),r.managers[e]=t}static getManager(e){const t=Jo.getInstance().managers[e];if(null==t)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Jo.getInstance().managers)}}function _o(e){if(-1===e.indexOf(Ho))throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Jo.getSchemes().join(",")}`);return{scheme:e.split(Ho)[0],path:e.split(Ho)[1]}}async function $o(e,t,r=!1){xe(e!==t,(()=>`Old path and new path are the same: '${e}'`));const n=mo.getLoadHandlers(e);xe(n.length>0,(()=>`Copying failed because no load handler is found for source URL ${e}.`)),xe(n.length<2,(()=>`Copying failed because more than one (${n.length}) load handlers for source URL ${e}.`));const P=n[0],a=mo.getSaveHandlers(t);xe(a.length>0,(()=>`Copying failed because no save handler is found for destination URL ${t}.`)),xe(a.length<2,(()=>`Copying failed because more than one (${n.length}) save handlers for destination URL ${t}.`));const o=a[0],u=_o(e).scheme,s=_o(e).path,v=u===_o(e).scheme,i=await P.load();r&&v&&await Jo.getManager(u).removeModel(s);const l=await o.save(i);return r&&!v&&await Jo.getManager(u).removeModel(s),l.modelArtifactsInfo}async function eu(){const e=Jo.getSchemes(),t={};for(const r of e){const e=await Jo.getManager(r).listModels();for(const n in e){t[r+Ho+n]=e[n]}}return t}async function tu(e){const t=_o(e);return Jo.getManager(t.scheme).removeModel(t.path)}async function ru(e,t){return $o(e,t,!1)}async function nu(e,t){return $o(e,t,!0)}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Pu{fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}}if(mt().get("IS_BROWSER")){mt().setPlatform("browser",new Pu);try{Jo.registerManager(Bo.URL_SCHEME,new Xo)}catch(Te){}try{Jo.registerManager(Ao.URL_SCHEME,new Co)}catch(Te){}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function au(e,t="float32",r){return t=t||"float32",vt(e),new pa(e,t,r)}
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ou(e,t){const r=Ba(e,"x","cast");if(!Ze(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==r.dtype||"string"!==t&&"string"===r.dtype)throw new Error("Only strings can be casted to strings");const n={x:r},P={dtype:t};return Ua.runKernel(Ft,n,P)}const uu=Xa({cast_:ou});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function su(e){const t={x:Ba(e,"x","clone","string_or_numeric")};return Ua.runKernel(Yr,t)}const vu=Xa({clone_:su});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function iu(e,t=!1){console.log(e.toString(t))}
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */Wa();Ta({buffer:au,cast:uu,clone:vu,print:iu});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
const lu="model",cu=".json",Ou=".weights.bin";function Du(e){return new Promise((e=>setTimeout(e))).then(e)}class ju{constructor(e){if(!mt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(ju.URL_SCHEME)&&(e=e.slice(ju.URL_SCHEME.length)),null!=e&&0!==e.length||(e=lu),this.modelJsonFileName=e+cu,this.weightDataFileName=e+Ou}async save(e){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=lo(e,[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}]),n=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),P=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(P.download=this.modelJsonFileName,P.href=n,await Du((()=>P.dispatchEvent(new MouseEvent("click")))),null!=e.weightData){const e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=t,await Du((()=>e.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:Oo(e)}}}}ju.URL_SCHEME="downloads://";class hu{constructor(e){if(null==e||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise(((e,t)=>{const r=new FileReader;r.onload=r=>{const n=JSON.parse(r.target.result),P=n.modelTopology;if(null==P)return void t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));if(null==n.weightsManifest)return void t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));if(0===this.weightsFiles.length)return void e({modelTopology:P});const a=co(n,(e=>this.loadWeights(e)));e(a)},r.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)}))}loadWeights(e){const t=[],r=[];for(const n of e)t.push(...n.weights),r.push(...n.paths);const n=this.checkManifestAndWeightFiles(e),P=r.map((e=>this.loadWeightsFile(e,n[e])));return Promise.all(P).then((e=>[t,vo(e)]))}loadWeightsFile(e,t){return new Promise(((r,n)=>{const P=new FileReader;P.onload=e=>{const t=e.target.result;r(t)},P.onerror=t=>n(`Failed to weights data from file of path '${e}'.`),P.readAsArrayBuffer(t)}))}checkManifestAndWeightFiles(e){const t=[],r=this.weightsFiles.map((e=>io(e.name))),n={};for(const P of e)P.paths.forEach((e=>{const P=io(e);if(-1!==t.indexOf(P))throw new Error(`Duplicate file basename found in weights manifest: '${P}'`);if(t.push(P),-1===r.indexOf(P))throw new Error(`Weight file with basename '${P}' is not provided.`);n[e]=this.weightsFiles[r.indexOf(P)]}));if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return n}}const pu=e=>mt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ju.URL_SCHEME)?mu(e.slice(ju.URL_SCHEME.length)):null;function mu(e="model"){return new ju(e)}function gu(e){return new hu(e)}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function bu(e,t,r,n){!function(e){xe(null!=e&&Array.isArray(e)&&e.length>0,(()=>"promises must be a none empty array"))}(e),function(e,t){xe(e>=0&&e<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`)),xe(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`)),xe(t>=e,(()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`))}(r=null==r?0:r,n=null==n?1:n);let P=0;return Promise.all(e.map((a=>(a.then((a=>{const o=r+ ++P/e.length*(n-r);return t(o),a})),a))))}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function Tu(e,t){null==t&&(t={});const r=null==t.fetchFunc?mt().platform.fetch:t.fetchFunc,n=e.map((e=>r(e,t.requestInit,{isBinary:!0}))),P=(null==t.onProgress?await Promise.all(n):await bu(n,t.onProgress,0,.5)).map((e=>e.arrayBuffer()));return null==t.onProgress?await Promise.all(P):await bu(P,t.onProgress,.5,1)}async function zu(e,t="",r,n){const P=du((e=>Tu(e,{requestInit:n})));return P(e,t,r)}function du(e){return async(t,r="",n)=>{const P=t.map((()=>!1)),a={},o=null!=n?n.map((()=>!1)):[],u=[];if(t.forEach(((e,t)=>{let r=0;e.weights.forEach((e=>{const s="quantization"in e?e.quantization.dtype:e.dtype,v=eo[s]*Ee(e.shape),i=()=>{P[t]=!0,null==a[t]&&(a[t]=[]),a[t].push({manifestEntry:e,groupOffset:r,sizeBytes:v})};null!=n?n.forEach(((t,r)=>{t===e.name&&(i(),o[r]=!0)})):i(),u.push(e.name),r+=v}))})),!o.every((e=>e))){const e=n.filter(((e,t)=>!o[t]));throw new Error(`Could not find weights in manifest with names: ${e.join(", ")}. \nManifest JSON has weights with names: ${u.join(", ")}.`)}const s=P.reduce(((e,t,r)=>(t&&e.push(r),e)),[]),v=[];s.forEach((e=>{t[e].paths.forEach((e=>{const t=r+(r.endsWith("/")?"":"/")+e;v.push(t)}))}));const i=await e(v),l={};let c=0;return s.forEach((e=>{const r=t[e].paths.length;let n=0;for(let e=0;e<r;e++)n+=i[c+e].byteLength;const P=new ArrayBuffer(n),o=new Uint8Array(P);let u=0;for(let e=0;e<r;e++){const t=new Uint8Array(i[c+e]);o.set(t,u),u+=t.byteLength}a[e].forEach((e=>{const t=no(P.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(const e in t)l[e]=t[e]})),c+=r})),l}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */mo.registerSaveRouter(pu);const yu="application/octet-stream",wu="application/json";class Lu{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(xe("function"==typeof t.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=t.fetchFunc):this.fetch=mt().platform.fetch,xe(null!=e&&e.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(e)&&xe(2===e.length,(()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`)),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const r=lo(e,[{paths:["./model.weights.bin"],weights:e.weightSpecs}]);t.body.append("model.json",new Blob([JSON.stringify(r)],{type:wu}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:yu}),"model.weights.bin");const n=await this.fetch(this.path,t);if(n.ok)return{modelArtifactsInfo:Oo(e),responses:[n]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${n.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch(e){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const r=t.modelTopology,n=t.weightsManifest;if(null==r&&null==n)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return co(t,(e=>this.loadWeights(e)))}async loadWeights(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[r,n]=fu(t),P=this.weightPathPrefix||r,a=[];for(const t of e)a.push(...t.weights);const o=[],u=[];for(const t of e)for(const e of t.paths)null!=this.weightUrlConverter?u.push(this.weightUrlConverter(e)):o.push(P+e+n);this.weightUrlConverter&&o.push(...await Promise.all(u));return[a,vo(await Tu(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}}function fu(e){const t=e.lastIndexOf("/"),r=e.lastIndexOf("?");return[e.substring(0,t)+"/",r>t?e.substring(r):""]}function Iu(e){return null!=e.match(Lu.URL_SCHEME_REGEX)}Lu.URL_SCHEME_REGEX=/^https?:\/\//;const Su=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc))return null;{let r=!0;if(r=Array.isArray(e)?e.every((e=>Iu(e))):Iu(e),r)return Au(e,t)}return null};function Au(e,t){return new Lu(e,t)}function xu(e,t){return Au(e,t)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */mo.registerSaveRouter(Su),mo.registerLoadRouter(Su);class Yu{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class ku{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class Cu{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function Eu(e,t,r,n){const P=arguments;return new Cu(Qu(...P))}function Qu(e,t,r,n){if(1===arguments.length){return null!=e.modelTopology||null!=e.weightSpecs?new Yu(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Yu({modelTopology:e}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Yu({modelTopology:e,weightSpecs:t,weightData:r,trainingConfig:n})}function Wu(e){return new ku(e)}function Uu(e){return new ku(e)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var w=Object.freeze({__proto__:null,browserFiles:gu,browserHTTPRequest:xu,concatenateArrayBuffers:vo,decodeWeights:no,encodeWeights:ro,fromMemory:Eu,fromMemorySync:Qu,getLoadHandlers:zo,getModelArtifactsForJSON:co,getModelArtifactsInfoForJSON:Oo,getSaveHandlers:To,http:Au,isHTTPScheme:Iu,loadWeights:zu,registerLoadRouter:bo,registerSaveRouter:go,weightsLoaderFactory:du,withSaveHandler:Wu,withSaveHandlerSync:Uu,copyModel:ru,listModels:eu,moveModel:nu,removeModel:tu});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function qu(e,t,r=!1,n=!1){let P=Ba(e,"a","matMul"),a=Ba(t,"b","matMul");[P,a]=Ia(P,a);const o={a:P,b:a},u={transposeA:r,transposeB:n};return Ua.runKernel(Mt,o,u)}const Gu=Xa({matMul_:qu});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Mu(e,t,r=1,n=0){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const P={indices:Ba(e,"indices","oneHot","int32")},a={depth:t,onValue:r,offValue:n};return Ua.runKernel(On,P,a)}const Ku=Xa({oneHot_:Mu});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Nu(){mt().set("PROD",!0)}function Ru(){return Ua}function Fu(e,t){return Ua.tidy(e,t)}function Bu(e){Aa(e).forEach((e=>e.dispose()))}function Zu(e){return Ua.keep(e)}function Vu(e,t,r=1){return Ua.registerBackend(e,t,r)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Xu(e){const t={input:Ba(e,"input","imag")};return Ua.runKernel(Cr,t)}const Hu=Xa({imag_:Xu});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ju(e){const t={x:Ba(e,"x","neg")};return Ua.runKernel(on,t)}const _u=Xa({neg_:Ju});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $u(e){const t={input:Ba(e,"input","real")};return Ua.runKernel(bn,t)}const es=Xa({real_:$u});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ts(e,t,r){const n=Ba(e,"x","transpose");if(null==t&&(t=n.shape.map(((e,t)=>t)).reverse()),xe(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${t}.`)),t.forEach((e=>{xe(e>=0&&e<n.rank,(()=>"All entries in 'perm' must be between 0 and "+(n.rank-1)+` but got ${t}`))})),n.rank<=1)return n.clone();const P={x:n},a={perm:t};return"complex64"===n.dtype?Fu((()=>{let e=es(n),t=Hu(n);return e=Ua.runKernel(uP,{x:e},a),t=Ua.runKernel(uP,{x:t},a),r&&(t=_u(t)),Ja(e,t)})):Ua.runKernel(uP,P,a)}const rs=Xa({transpose_:ts});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ns(e,t,r){const n=Ba(e,"labels","confusionMatrix"),P=Ba(t,"predictions","confusionMatrix");xe(null==r||r>0&&Number.isInteger(r),(()=>`If provided, numClasses must be a positive integer, but got ${r}`)),xe(1===n.rank,(()=>`Expected the rank of labels to be 1, but got ${n.rank}`)),xe(1===P.rank,(()=>`Expected the rank of predictions to be 1, but got ${P.rank}`)),xe(n.shape[0]===P.shape[0],(()=>`Mismatch in the number of examples: ${n.shape[0]} vs. ${P.shape[0]}. Labels and predictions should have the same number of elements.`)),xe(r>0&&Number.isInteger(r),(()=>`numClasses is required to be a positive integer, but got ${r}`));const a=Ku(uu(n,"int32"),r),o=Ku(uu(P,"int32"),r),u=rs(a),s=Gu(u,o);return uu(s,"int32")}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function Ps(e,t){const r=e.length,n=[];for(let P=0;P<r;P++){const a=r-1-P,o=e[a]||1;(t[t.length-1-P]||1)>1&&1===o&&n.unshift(a)}return n}function as(e,t){const r=[];for(let n=0;n<t.length;n++){const P=e[e.length-n-1],a=t.length-n-1,o=t[a];(null==P||1===P&&o>1)&&r.unshift(a)}return r}function os(e,t){const r=[],n=Math.max(e.length,t.length);for(let P=0;P<n;P++){let n=e[e.length-P-1];null==n&&(n=1);let a=t[t.length-P-1];if(null==a&&(a=1),1===n)r.unshift(a);else if(1===a)r.unshift(n);else{if(n!==a){throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`)}r.unshift(n)}}return r}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function us(e,t,r){if(ke(e),null!=t&&3!==t.length)throw new Error("tensor3d() requires shape to have three numbers");const n=Na(e,r);if(3!==n.length&&1!==n.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===n.length&&null==t)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return _a(e,t,n,r)}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */let ss;function vs(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let r=!1,n=!1,P=!1,a=!1,o=!1,u=!1;if(e.data instanceof Uint8Array)r=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)n=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)P=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)a=!0;else if(null!=e.getContext)o=!0;else{if(!("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap))throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);u=!0}if(P){const t=2;if(P&&e.readyState<t)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")}if(null!=zP(OP,Ua.backendName)){const r={pixels:e},n={numChannels:t};return Ua.runKernel(OP,r,n)}const[s,v]=P?[e.videoWidth,e.videoHeight]:[e.width,e.height];let i,l;if(o)i=e.getContext("2d").getImageData(0,0,s,v).data;else if(n||r)i=e.data;else if(a||P||u){if(null==ss)if("undefined"==typeof document){if("undefined"==typeof OffscreenCanvas||"undefined"==typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");ss=new OffscreenCanvas(1,1).getContext("2d")}else ss=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});ss.canvas.width=s,ss.canvas.height=v,ss.drawImage(e,0,0,s,v),i=ss.getImageData(0,0,s,v).data}if(4===t)l=new Int32Array(i);else{const e=s*v;l=new Int32Array(e*t);for(let r=0;r<e;r++)for(let e=0;e<t;++e)l[r*t+e]=i[4*r+e]}return us(l,[v,s,t],"int32")}function is(e,t){const r=e.shape.length,n=t.shape.length;if(r<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${r}.`);if(n<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${n}.`);if("int32"!==t.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[n-1]>r)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[n-1]} vs. ${r}`);if(0===Ee(e.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const P=t.shape,a=P[P.length-1];let o=1;for(let e=0;e<P.length-1;++e)o*=P[e];const u=e.shape,s=P.slice();s.pop();let v=1;for(let e=a;e<r;++e)v*=u[e],s.push(u[e]);const i=[...Pt(e.shape).map((e=>e/v)),1].slice(0,a);return[s,o,v,i]}function ls(e,t,r){const n=t.rank>1?t.shape[t.rank-1]:1,P=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${n}, and batchDim: ${P}.`;if(r.rank<P)throw new Error(a+` update.rank < ${P}. `);if(e.length<n+(r.rank-P))throw new Error(a+` Output shape length < ${n+(r.rank-P)}`);if(r.rank!==P+e.length-n)throw new Error(a+" update.rank != "+(P+e.length-n));for(let e=0;e<P;++e)if(r.shape[e]!==t.shape[e])throw new Error(a+` updates.shape[${e}] (${r.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<r.rank-P;++t)if(r.shape[t+P]!==e[t+n])throw new Error(a+` updates.shape[${t+P}] (${r.shape[t+P]}) != shape[${t+P}] (${e[t+P]})`)}function cs(e,t,r){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(0===r.length){if(0===t.size)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}ls(r,t,e)}function Os(e,t,r){const n=t.shape.length,P=n>1?t.shape[n-1]:1,a=r.length;let o=1;for(let e=P;e<a;++e)o*=r[e];const u=P<1?1:P;return{sliceRank:P,numUpdates:Ee(t.shape)/u,sliceSize:o,strides:[...Pt(r.slice(0,P)),1],outputSize:Ee(r)}}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */Xa({confusionMatrix_:ns}),Xa({fromPixels_:vs});const Ds=-2,js=-1;function hs(e,t,r){const n=e.shape.length;xe(n===t.length,(()=>`Error in slice${n}D: Length of begin ${t} must match the rank of the array (${n}).`)),xe(n===r.length,(()=>`Error in slice${n}D: Length of size ${r} must match the rank of the array (${n}).`));for(let P=0;P<n;++P)xe(t[P]+r[P]<=e.shape[P],(()=>`Error in slice${n}D: begin[${P}] + size[${P}] (${t[P]+r[P]}) would overflow input.shape[${P}] (${e.shape[P]})`))}function ps(e){const t=[];let r=0;for(;e>0;)1&e&&t.push(r),e/=2,r++;return t}function ms(e,t,r){const n=[];for(let P=0;P<e.length;P++)n[P]=Math.ceil((t[P]-e[P])/r[P]);return n}function gs(e,t,r,n){const P=[...e];for(let e=P.length;e<n.length;e++)P.push(1);for(let e=0;e<r;e++)0===e?P[t]=1:(P.splice(t,0,1),P.pop());return P}function bs(e,t,r){return r<=e?r:r-(t-1)}function Ts(e,t){const r=[];for(let n=0;n<e;n++)r.push(t+n);return r}function zs(e,t,r,n,P,a,o,u,s){const v=e.length;let i=new Array(v),l=new Array(v),c=new Array(v);if(t.length&&r>0){const s=t[0],v=r+1;i=ds(o,s,v,n,e),l=ys(u,s,v,P,e),c=gs(a,s,v,e)}else for(let t=0;t<v;t++)i[t]=Ls(o,n,a,e,t,s),l[t]=fs(u,P,a,e,t,s),c[t]=ws(a,t,s);return{begin:i,end:l,strides:c}}function ds(e,t,r,n,P){const a=[...P],o=Ts(r,t);for(let P=0;P<a.length;P++)if(o.indexOf(P)>-1)a[P]=0;else{const o=bs(t,r,P);let u=n[o];e&1<<o&&(u=0),a[P]=u}return a}function ys(e,t,r,n,P){const a=[...P],o=Ts(r,t);for(let P=0;P<a.length;P++)if(o.indexOf(P)>-1)a[P]=Number.MAX_SAFE_INTEGER;else{const o=bs(t,r,P);let u=n[o];e&1<<o&&(u=Number.MAX_SAFE_INTEGER),a[P]=u}for(let e=0;e<a.length;e++){const t=P[e];a[e]<0&&(a[e]+=t),a[e]=fe(0,a[e],P[e])}return a}function ws(e,t,r){let n=e[t];return(r&1<<t||null==n)&&(n=1),n}function Ls(e,t,r,n,P,a){let o=t[P];const u=r[P]||1;(e&1<<P||a&1<<P||null==o)&&(o=u>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const s=n[P];return o<0&&(o+=s),o=fe(0,o,s-1),o}function fs(e,t,r,n,P,a){let o=t[P];const u=r[P]||1;(e&1<<P||a&1<<P||null==o)&&(o=u>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const s=n[P];return o<0&&(o+=s),o=u>0?fe(0,o,s):fe(-1,o,s-1),o}function Is(e,t,r){let n=r.length;for(let e=0;e<r.length;e++)if(r[e]>1){n=e;break}for(let P=n+1;P<r.length;P++)if(t[P]>0||r[P]!==e[P])return!1;return!0}function Ss(e,t){let r=e.length>0?e[e.length-1]:1;for(let n=0;n<e.length-1;n++)r+=e[n]*t[n];return r}function As(e,t,r){let n;const P=e.shape.length;let a;return n="number"==typeof t?[t,...new Array(P-1).fill(0)]:t.length<P?t.concat(new Array(P-t.length).fill(0)):t.slice(),n.forEach((e=>{xe(-1!==e,(()=>"slice() does not support negative begin indexing."))})),a=null==r?new Array(P).fill(-1):"number"==typeof r?[r,...new Array(P-1).fill(-1)]:r.length<P?r.concat(new Array(P-r.length).fill(-1)):r,a=a.map(((t,r)=>t>=0?t:(xe(-1===t,(()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${r}.`)),e.shape[r]-n[r]))),[n,a]}function xs(e,t,r,n,P,a,o,u,s){let v;if(null==n?(v=new Array(t.length),v.fill(1)):v=n,null!=o&&0!=(o&o-1))throw new Error("Multiple ellipses in slice is not allowed.");let i=!1;const l={dims:v.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:r.slice(),strides:v.slice(),beginMask:P,endMask:a,ellipsisMask:o,newAxisMask:u,shrinkAxisMask:s};for(let e=0;e<l.dims;e++)i&&0!=(1<<e&u)&&l.numAddAxisAfterEllipsis++,1<<e&o&&(i=!0);i||(l.ellipsisMask|=1<<l.dims,l.dims++);const c={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Ys(l,c);let O=!0,D=!0,j=!0;const h=[],p=[];for(let t=0;t<e.length;++t){if(0===c.strides[t])throw Error(`strides[${t}] must be non-zero`);const r=!!(c.shrinkAxisMask&1<<t),n=e[t];if(-1===n){h.push(r?1:-1);continue}const P=[c.beginMask&1<<t,c.endMask&1<<t],a=[c.strides[t]>0?0:-1,c.strides[t]>0?n:n-1];if(r&&c.strides[t]<=0)throw Error("only stride 1 allowed on non-range indexing.");j=j&&1===c.strides[t];const o=!!(c.beginMask&1<<t&&c.endMask&1<<t);if(c.beginValid&&c.endValid){if(r){const e=c.begin[t]<0?n+c.begin[t]:c.begin[t];if(c.begin[t]=e,c.end[t]=c.begin[t]+1,e<0||e>=n)throw Error(`slice index ${c.begin[t]} of dimension ${t} out of bounds.`)}else c.begin[t]=ks(c.begin[t],0,c.strides[t],n,P,a),c.end[t]=ks(c.end[t],1,c.strides[t],n,P,a);const e=1===c.strides[t]&&0===c.begin[t]&&c.end[t]===n;O=O&&e,D=D&&(0===t&&1===c.strides[t]||e)}else O=O&&1===c.strides[t]&&o,D=D&&(0===t&&1===c.strides[t]||o);let u,s=!1;if(c.beginValid&&c.endValid?(u=c.end[t]-c.begin[t],s=!0):r?(u=1,s=!0):o&&n>=0&&(u=c.strides[t]<0?-n:n,s=!0),s){let e;e=0===u||u<0!=c.strides[t]<0?0:Math.trunc(u/c.strides[t])+(u%c.strides[t]!=0?1:0),h.push(e)}else h.push(-1)}for(let e=0;e<c.finalShapeGatherIndices.length;++e){const t=c.finalShapeGatherIndices[e];t>=0?p.push(h[t]):t===Ds&&p.push(1)}const m=p.filter(((e,t)=>c.finalShapeGatherIndices[t]!==Ds));return{finalShapeSparse:m,finalShape:p,isIdentity:O,sliceDim0:D,isSimpleSlice:j,begin:c.begin,end:c.end,strides:c.strides}}function Ys(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let r=0;t.beginValid=null!=e.begin,t.endValid=null!=e.end,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let n=0;n<e.dims;n++)if(1<<n&e.ellipsisMask){const P=Math.min(t.dims-(e.dims-n)+1+e.numAddAxisAfterEllipsis,t.dims);for(;r<P;r++)t.begin[r]=0,t.end[r]=0,t.strides[r]=1,t.beginMask|=1<<r,t.endMask|=1<<r,t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[r]=n}else if(1<<n&e.newAxisMask)t.finalShapeGatherIndices.push(Ds),t.finalShapeGatherIndicesSparse.push(-1);else{if(r===t.begin.length)throw Error(`Index out of range using input dim ${r}; input has only ${t.dims} dims, ${t.begin.length}.`);null!=e.begin&&(t.begin[r]=e.begin[n]),null!=e.end&&(t.end[r]=e.end[n]),t.strides[r]=e.strides[n],e.beginMask&1<<n&&(t.beginMask|=1<<r),e.endMask&1<<n&&(t.endMask|=1<<r),e.shrinkAxisMask&1<<n?(t.finalShapeGatherIndices.push(js),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<r):(t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(n)),t.inputShapeGatherIndicesSparse[r]=n,r++}}function ks(e,t,r,n,P,a){if(P[t])return r>0?a[t]:a[t+1&1];{const t=e<0?n+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var L=Object.freeze({__proto__:null,assertParamsValid:hs,maskToAxes:ps,computeOutShape:ms,stridesWithElidedDims:gs,getNormalizedAxes:zs,startIndicesWithElidedDims:ds,stopIndicesWithElidedDims:ys,stridesForAxis:ws,startForAxis:Ls,stopForAxis:fs,isSliceContinous:Is,computeFlatOffset:Ss,parseSliceParams:As,sliceInfo:xs});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Cs{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class Es{constructor(){this.classNameMap={}}static getMap(){return null==Es.instance&&(Es.instance=new Es),Es.instance}static register(e){Es.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function Qs(e){xe(null!=e.className,(()=>"Class being registered does not have the static className property defined.")),xe("string"==typeof e.className,(()=>"className is required to be a string, but got type "+typeof e.className)),xe(e.className.length>0,(()=>"Class being registered has an empty-string as its className, which is disallowed.")),Es.register(e)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ws(e,t){let r=Ba(e,"a","add"),n=Ba(t,"b","add");[r,n]=Ia(r,n);const P={a:r,b:n};return Ua.runKernel(It,P)}const Us=Xa({add_:Ws});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function qs(e,t){let r=Ba(e,"a","floorDiv"),n=Ba(t,"b","floorDiv");[r,n]=Ia(r,n);const P={a:r,b:n};return Ua.runKernel(Lr,P)}const Gs=Xa({floorDiv_:qs});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ms(e,t){let r=Ba(e,"a","div"),n=Ba(t,"b","div");if([r,n]=Ia(r,n),"int32"===r.dtype&&"int32"===n.dtype)return Gs(r,n);const P={a:r,b:n};return Ua.runKernel(Dr,P,{})}const Ks=Xa({div_:Ms});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ns(e,t){let r=Ba(e,"a","mul"),n=Ba(t,"b","mul");[r,n]=Ia(r,n);const P={a:r,b:n};return Ua.runKernel(an,P)}const Rs=Xa({mul_:Ns});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Fs(e){const t=Ba(e,"x","abs");if("complex64"===t.dtype){const e={x:t};return Ua.runKernel(Xt,e)}{const e={x:t};return Ua.runKernel(wt,e)}}const Bs=Xa({abs_:Fs});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Zs(e){const t={x:Ba(e,"x","acos")};return Ua.runKernel(Lt,t)}const Vs=Xa({acos_:Zs});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Xs(e){const t={x:Ba(e,"x","acosh")};return Ua.runKernel(ft,t)}const Hs=Xa({acosh_:Xs});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Js(e){xe(Array.isArray(e),(()=>"The argument passed to tf.addN() must be a list of tensors")),xe(e.length>=1,(()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`));const t=e.map(((e,t)=>Ba(e,`tensors${t}`,"addN"))),r=t[0];t.forEach((e=>{if(e.dtype!==r.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),t.forEach((e=>{if(!Qe(e.shape,r.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const n=t;return Ua.runKernel(St,n)}const _s=Xa({addN_:Js});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $s(e,t=null,r=!1){const n={x:Ba(e,"x","all","bool")},P={axis:t,keepDims:r};return Ua.runKernel(At,n,P)}const ev=Xa({all_:$s});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function tv(e,t=null,r=!1){const n={x:Ba(e,"x","any","bool")},P={axis:t,keepDims:r};return Ua.runKernel(xt,n,P)}const rv=Xa({any_:tv});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function nv(e,t=0){const r={x:Ba(e,"x","argMax")},n={axis:t};return Ua.runKernel(Yt,r,n)}const Pv=Xa({argMax_:nv});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function av(e,t=0){const r={x:Ba(e,"x","argMin")},n={axis:t};return Ua.runKernel(kt,r,n)}const ov=Xa({argMin_:av});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function uv(e){const t={x:Ba(e,"x","asin")};return Ua.runKernel(Ct,t)}const sv=Xa({asin_:uv});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function vv(e){const t={x:Ba(e,"x","asinh")};return Ua.runKernel(Et,t)}const iv=Xa({asinh_:vv});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lv(e){const t={x:Ba(e,"x","atan")};return Ua.runKernel(Qt,t)}const cv=Xa({atan_:lv});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ov(e,t){let r=Ba(e,"a","atan2"),n=Ba(t,"b","atan2");[r,n]=Ia(r,n);const P={a:r,b:n};return Ua.runKernel(Ut,P)}const Dv=Xa({atan2_:Ov});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function jv(e){const t={x:Ba(e,"x","atanh")};return Ua.runKernel(Wt,t)}const hv=Xa({atanh_:jv});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function pv(e,t,r,n,P="NHWC",a){return bv(e,[...t,e[3]],r,a,n,null,null,kv(P))}function mv(e,t,r,n,P,a,o="channelsLast"){const[u,s]=wv(t);let v;if("channelsLast"===o)v=[u,s,e[3],e[3]];else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);v=[u,s,e[1],e[1]]}return bv(e,v,r,n,P,a,!1,o)}function gv(e,t,r,n,P,a,o="NDHWC"){const[u,s,v]=Lv(t);let i,l;if("NDHWC"===o)l="channelsLast",i=[u,s,v,e[4],e[4]];else{if("NCDHW"!==o)throw new Error(`Unknown dataFormat ${o}`);l="channelsFirst",i=[u,s,v,e[1],e[1]]}return Tv(e,i,r,n,P,!1,l,a)}function bv(e,t,r,n,P,a,o=!1,u="channelsLast"){let[s,v,i,l]=[-1,-1,-1,-1];if("channelsLast"===u)[s,v,i,l]=e;else{if("channelsFirst"!==u)throw new Error(`Unknown dataFormat ${u}`);[s,l,v,i]=e}const[c,O,,D]=t,[j,h]=wv(r),[p,m]=wv(n),g=fv(c,p),b=fv(O,m),{padInfo:T,outHeight:z,outWidth:d}=Iv(P,v,i,j,h,g,b,a,u),y=o?D*l:D;let w;return"channelsFirst"===u?w=[s,y,z,d]:"channelsLast"===u&&(w=[s,z,d,y]),{batchSize:s,dataFormat:u,inHeight:v,inWidth:i,inChannels:l,outHeight:z,outWidth:d,outChannels:y,padInfo:T,strideHeight:j,strideWidth:h,filterHeight:c,filterWidth:O,effectiveFilterHeight:g,effectiveFilterWidth:b,dilationHeight:p,dilationWidth:m,inShape:e,outShape:w,filterShape:t}}function Tv(e,t,r,n,P,a=!1,o="channelsLast",u){let[s,v,i,l,c]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[s,v,i,l,c]=e;else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);[s,c,v,i,l]=e}const[O,D,j,,h]=t,[p,m,g]=Lv(r),[b,T,z]=Lv(n),d=fv(O,b),y=fv(D,T),w=fv(j,z),{padInfo:L,outDepth:f,outHeight:I,outWidth:S}=Sv(P,v,i,l,p,m,g,d,y,w,u),A=a?h*c:h;let x;return"channelsFirst"===o?x=[s,A,f,I,S]:"channelsLast"===o&&(x=[s,f,I,S,A]),{batchSize:s,dataFormat:o,inDepth:v,inHeight:i,inWidth:l,inChannels:c,outDepth:f,outHeight:I,outWidth:S,outChannels:A,padInfo:L,strideDepth:p,strideHeight:m,strideWidth:g,filterDepth:O,filterHeight:D,filterWidth:j,effectiveFilterDepth:d,effectiveFilterHeight:y,effectiveFilterWidth:w,dilationDepth:b,dilationHeight:T,dilationWidth:z,inShape:e,outShape:x,filterShape:t}}function zv(e,t,r,n,P){null==n&&(n=yv(e,t,r));const a=e[0],o=e[1];return[Av((a-t+2*n)/r+1,P),Av((o-t+2*n)/r+1,P)]}function dv(e,t,r,n,P,a){null==P&&(P=yv(e,t,n));const o=e[0],u=e[1],s=e[2];return[Av((o-t+2*P)/n+1,a),Av((u-t+2*P)/n+1,a),Av((s-t+2*P)/n+1,a),r]}function yv(e,t,r,n=1){const P=fv(t,n);return Math.floor((e[0]*(r-1)-r+P)/2)}function wv(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function Lv(e){return"number"==typeof e?[e,e,e]:e}function fv(e,t){return t<=1?e:e+(e-1)*(t-1)}function Iv(e,t,r,n,P,a,o,u,s){let v,i,l;if("number"==typeof e){v={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};const P=zv([t,r],a,n,e,u);i=P[0],l=P[1]}else if("same"===e){i=Math.ceil(t/n),l=Math.ceil(r/P);const e=Math.max(0,(i-1)*n+a-t),u=Math.max(0,(l-1)*P+o-r),s=Math.floor(e/2),c=e-s,O=Math.floor(u/2);v={top:s,bottom:c,left:O,right:u-O,type:"SAME"}}else if("valid"===e)v={top:0,bottom:0,left:0,right:0,type:"VALID"},i=Math.ceil((t-a+1)/n),l=Math.ceil((r-o+1)/P);else{if("object"!=typeof e)throw Error(`Unknown padding parameter: ${e}`);{const c="channelsLast"===s?e[1][0]:e[2][0],O="channelsLast"===s?e[1][1]:e[2][1],D="channelsLast"===s?e[2][0]:e[3][0],j="channelsLast"===s?e[2][1]:e[3][1];v={top:c,bottom:O,left:D,right:j,type:0===c&&0===O&&0===D&&0===j?"VALID":"EXPLICIT"},i=Av((t-a+c+O)/n+1,u),l=Av((r-o+D+j)/P+1,u)}}return{padInfo:v,outHeight:i,outWidth:l}}function Sv(e,t,r,n,P,a,o,u,s,v,i){let l,c,O,D;if("number"==typeof e){l={top:e,bottom:e,left:e,right:e,front:e,back:e,type:0===e?"VALID":"NUMBER"};const a=dv([t,r,n,1],u,1,P,e,i);c=a[0],O=a[1],D=a[2]}else if("same"===e){c=Math.ceil(t/P),O=Math.ceil(r/a),D=Math.ceil(n/o);const e=(c-1)*P+u-t,i=(O-1)*a+s-r,j=(D-1)*o+v-n,h=Math.floor(e/2),p=e-h,m=Math.floor(i/2),g=i-m,b=Math.floor(j/2);l={top:m,bottom:g,left:b,right:j-b,front:h,back:p,type:"SAME"}}else{if("valid"!==e)throw Error(`Unknown padding parameter: ${e}`);l={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},c=Math.ceil((t-u+1)/P),O=Math.ceil((r-s+1)/a),D=Math.ceil((n-v+1)/o)}return{padInfo:l,outDepth:c,outHeight:O,outWidth:D}}function Av(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function xv(e){const[t,r,n]=wv(e);return 1===t&&1===r&&1===n}function Yv(e,t){return xv(e)||xv(t)}function kv(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function Cv(e,t,r){if(null!=r){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);if("number"==typeof t)xe(We(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`));else{if("object"!=typeof t)throw Error(`Error in ${e}: Unknown padding parameter: ${t}`);t.forEach((t=>{t.forEach((t=>{xe(We(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`))}))}))}}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ev(e,t){const r={x:Ba(e,"x","reshape","string_or_numeric")},n={shape:t};return Ua.runKernel(dn,r,n)}const Qv=Xa({reshape_:Ev});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Wv(e,t,r,n,P){const a=Ba(e,"x","avgPool","float32");xe(Yv(r,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${r} and dilations '1'`));let o=a,u=!1;3===a.rank&&(u=!0,o=Qv(a,[1,a.shape[0],a.shape[1],a.shape[2]])),xe(4===o.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`)),Cv("avgPool",n,P);const s={x:o},v={filterSize:t,strides:r,pad:n,dimRoundingMode:P};let i=Ua.runKernel(qt,s,v);return i=uu(i,a.dtype),u?Qv(i,[i.shape[1],i.shape[2],i.shape[3]]):i}const Uv=Xa({avgPool_:Wv});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function qv(e,t,r,n,P,a="NDHWC"){const o=Ba(e,"x","avgPool3d","float32");let u=o,s=!1;4===o.rank&&(s=!0,u=Qv(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),xe(5===u.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${u.rank}.`)),xe("NDHWC"===a,(()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`)),Cv("avgPool3d",n,P);const v={x:u},i={filterSize:t,strides:r,pad:n,dimRoundingMode:P,dataFormat:a};let l=Ua.runKernel(Gt,v,i);return l=uu(l,u.dtype),s?Qv(l,[l.shape[1],l.shape[2],l.shape[3],l.shape[4]]):l}const Gv=Xa({avgPool3d_:qv});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Mv(e,t=0){xe(e.length>=1,(()=>"Pass at least one tensor to concat"));const r=Za(e,"tensors","concat","string_or_numeric");if("complex64"===r[0].dtype&&r.forEach((e=>{if("complex64"!==e.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${e.dtype}. `)})),1===r.length)return vu(r[0]);const n=r,P={axis:t};return Ua.runKernel(Ht,n,P)}const Kv=Xa({concat_:Mv});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Nv(e){const t={x:Ba(e,"x","sigmoid","float32")};return Ua.runKernel(Un,t)}const Rv=Xa({sigmoid_:Nv});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Fv(e,t,r){const n=Ba(e,"x","slice","string_or_numeric");if(0===n.rank)throw new Error("Slicing scalar is not possible");const P={x:n},a={begin:t,size:r};return Ua.runKernel(Cn,P,a)}const Bv=Xa({slice_:Fv});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Zv(e){const t={x:Ba(e,"x","tanh","float32")};return Ua.runKernel(nP,t)}const Vv=Xa({tanh_:Zv});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Xv(e,t,r,n,P,a){const o=Ba(e,"forgetBias","basicLSTMCell"),u=Ba(t,"lstmKernel","basicLSTMCell"),s=Ba(r,"lstmBias","basicLSTMCell"),v=Ba(n,"data","basicLSTMCell"),i=Ba(P,"c","basicLSTMCell"),l=Ba(a,"h","basicLSTMCell"),c=Kv([v,l],1),O=Gu(c,u),D=Us(O,s),j=D.shape[0],h=D.shape[1]/4,p=[j,h],m=Bv(D,[0,0],p),g=Bv(D,[0,h],p),b=Bv(D,[0,2*h],p),T=Bv(D,[0,3*h],p),z=Us(Rs(Rv(m),Vv(g)),Rs(i,Rv(Us(o,b))));return[z,Rs(Vv(z),Rv(T))]}const Hv=Xa({basicLSTMCell_:Xv});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Jv(e,t,r){const n=Ba(e,"x","batchToSpaceND"),P=t.reduce(((e,t)=>e*t));xe(n.rank>=1+t.length,(()=>`input rank is ${n.rank} but should be > than blockShape.length ${t.length}`)),xe(r.length===t.length,(()=>`crops.length is ${r.length} but should be equal to blockShape.length  ${t.length}`)),xe(n.shape[0]%P==0,(()=>`input tensor batch is ${n.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${P}`));const a={x:n},o={blockShape:t,crops:r};return Ua.runKernel(Kt,a,o)}const _v=Xa({batchToSpaceND_:Jv});function $v(e){let t;return t=0===e.rank||1===e.rank?Qv(e,[1,1,1,e.size]):2===e.rank?Qv(e,[1,1,e.shape[0],e.shape[1]]):3===e.rank?Qv(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ei(e,t,r,n,P,a){null==a&&(a=.001);const o=Ba(e,"x","batchNorm"),u=Ba(t,"mean","batchNorm"),s=Ba(r,"variance","batchNorm");let v,i;null!=P&&(v=Ba(P,"scale","batchNorm")),null!=n&&(i=Ba(n,"offset","batchNorm")),xe(u.rank===s.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),xe(null==i||u.rank===i.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),xe(null==v||u.rank===v.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const l={x:$v(o),scale:v,offset:i,mean:u,variance:s},c={varianceEpsilon:a},O=Ua.runKernel(fr,l,c);return Qv(O,o.shape)}const ti=Xa({batchNorm_:ei});function ri(e,t,r,n,P,a){const o=Ba(e,"x","batchNorm"),u=Ba(t,"mean","batchNorm"),s=Ba(r,"variance","batchNorm");let v,i;return null!=P&&(v=Ba(P,"scale","batchNorm")),null!=n&&(i=Ba(n,"offset","batchNorm")),xe(2===o.rank,(()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`)),xe(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${u.rank}.`)),xe(2===s.rank||1===s.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${s.rank}.`)),null!=v&&xe(2===v.rank||1===v.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${v.rank}.`)),null!=i&&xe(2===i.rank||1===i.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${i.rank}.`)),ti(o,u,s,i,v,a)}const ni=Xa({batchNorm2d_:ri});function Pi(e,t,r,n,P,a){const o=Ba(e,"x","batchNorm"),u=Ba(t,"mean","batchNorm"),s=Ba(r,"variance","batchNorm");let v,i;return null!=P&&(v=Ba(P,"scale","batchNorm")),null!=n&&(i=Ba(n,"offset","batchNorm")),xe(3===o.rank,(()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`)),xe(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${u.rank}.`)),xe(3===s.rank||1===s.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${s.rank}.`)),null!=v&&xe(3===v.rank||1===v.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${v.rank}.`)),null!=i&&xe(3===i.rank||1===i.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${i.rank}.`)),ti(o,u,s,i,v,a)}const ai=Xa({batchNorm3d_:Pi});function oi(e,t,r,n,P,a){const o=Ba(e,"x","batchNorm"),u=Ba(t,"mean","batchNorm"),s=Ba(r,"variance","batchNorm");let v,i;return null!=P&&(v=Ba(P,"scale","batchNorm")),null!=n&&(i=Ba(n,"offset","batchNorm")),xe(4===o.rank,(()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`)),xe(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${u.rank}.`)),xe(4===s.rank||1===s.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${s.rank}.`)),null!=v&&xe(4===v.rank||1===v.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${v.rank}.`)),null!=i&&xe(4===i.rank||1===i.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${i.rank}.`)),ti(o,u,s,i,v,a)}const ui=Xa({batchNorm4d_:oi});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function si(e,t,r){const n=Ba(e,"x","bincount"),P=Ba(t,"weights","bincount");xe("int32"===n.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${n.dtype}`)),xe(r>=0,(()=>`size must be non-negative, but got ${r}.`)),xe(P.size===n.size||0===P.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${n.shape}, weights shape: ${P.shape}.`));const a={x:n,weights:P},o={size:r};return Ua.runKernel(Nt,a,o)}const vi=Xa({bincount_:si});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ii(e,t){const r=Ba(e,"s0","broadcastArgs","int32"),n=Ba(t,"s1","broadcastArgs","int32");if(1!==r.rank)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${r.rank}`);if(1!==n.rank)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${n.rank}`);const P={s0:r,s1:n};return Ua.runKernel(Rt,P)}const li=Xa({broadcastArgs_:ii});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ci(e,t){let r=Ba(e,"broadcastTo","x");const n=r.shape;if(t.some((e=>!(e>0)||e%1!=0)))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<r.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${r.rank}.`);if(t.length>r.rank){const e=r.shape.slice();for(;e.length<t.length;)e.unshift(1);r=Qv(r,e)}const P=r.shape,a=Array.from(t);for(let e=t.length-1;e>=0;e--)if(P[e]===t[e])a[e]=1;else if(1!==r.shape[e])throw new Error(`broadcastTo(): [${n}] cannot be broadcast to [${t}].`);const o=a.map(((e,t)=>e>1?t:-1)).filter((e=>e>=0));if(0===o.length)return vu(r);const u={x:r},s={reps:a};return Ua.runKernel(PP,u,s)}const Oi=Xa({broadcastTo_:ci});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Di(e){const t={x:Ba(e,"x","ceil","float32")};return Ua.runKernel(Bt,t)}const ji=Xa({ceil_:Di});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function hi(e,t,r){const n=Ba(e,"x","clipByValue");xe(t<=r,(()=>`Error in clip: min (${t}) must be less than or equal to max (${r}).`));const P={x:n},a={clipValueMin:t,clipValueMax:r};return Ua.runKernel(Zt,P,a)}const pi=Xa({clipByValue_:hi});function mi(e){return Kv(e,0)}const gi=Xa({concat1d_:mi});function bi(e,t){return Kv(e,t)}const Ti=Xa({concat2d_:bi});function zi(e,t){return Kv(e,t)}const di=Xa({concat3d_:zi});function yi(e,t){return Kv(e,t)}const wi=Xa({concat4d_:yi});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Li(e,t,r,n,P="NHWC",a=[1,1],o){const u=Ba(e,"x","conv2d","float32"),s=Ba(t,"filter","conv2d","float32");let v=u,i=!1;3===u.rank&&(i=!0,v=Qv(u,[1,u.shape[0],u.shape[1],u.shape[2]])),xe(4===v.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${v.rank}.`)),xe(4===s.rank,(()=>`Error in conv2d: filter must be rank 4, but got rank ${s.rank}.`)),Cv("conv2d",n,o);const l="NHWC"===P?v.shape[3]:v.shape[1];xe(l===s.shape[2],(()=>`Error in conv2d: depth of input (${l}) must match input depth for filter ${s.shape[2]}.`)),xe(Yv(r,a),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`));const c={x:v,filter:s},O={strides:r,pad:n,dataFormat:P,dilations:a,dimRoundingMode:o},D=Ua.runKernel(Jt,c,O);return i?Qv(D,[D.shape[1],D.shape[2],D.shape[3]]):D}const fi=Xa({conv2d_:Li});function Ii(e,t,r,n,P="NWC",a=1,o){const u=Ba(e,"x","conv1d"),s=Ba(t,"filter","conv1d");let v=u,i=!1;2===u.rank&&(i=!0,v=Qv(u,[1,u.shape[0],u.shape[1]])),xe(3===v.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${v.rank}.`)),xe(3===s.rank,(()=>`Error in conv1d: filter must be rank 3, but got rank ${s.rank}.`)),Cv("conv1d",n,o),xe(v.shape[2]===s.shape[1],(()=>`Error in conv1d: depth of input (${v.shape[2]}) must match input depth for filter ${s.shape[1]}.`)),xe(Yv(r,a),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${r} and dilation '${a}'`)),xe("NWC"===P,(()=>`Error in conv1d: got dataFormat of ${P} but only NWC is currently supported.`));const l=Qv(s,[1,s.shape[0],s.shape[1],s.shape[2]]),c=Qv(v,[v.shape[0],1,v.shape[1],v.shape[2]]),O=fi(c,l,[1,r],n,"NHWC",[1,a],o);return Qv(O,i?[O.shape[2],O.shape[3]]:[O.shape[0],O.shape[2],O.shape[3]])}const Si=Xa({conv1d_:Ii});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ai(e,t,r,n,P,a="NHWC",o){xe(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let u=e,s=t,v=!1;3===t.rank&&(v=!0,s=Qv(t,[1,t.shape[0],t.shape[1],t.shape[2]]),u=[1,e[0],e[1],e[2]]),xe(4===u.length,(()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${u.length}.`)),xe(4===s.rank,(()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${s.rank}`)),xe(4===r.rank,(()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${r.rank}`));const i="NHWC"===a?u[3]:u[1],l="NHWC"===a?s.shape[3]:s.shape[1];xe(i===r.shape[2],(()=>`Error in conv2dDerInput: depth of input (${i}) must match input depth for filter ${r.shape[2]}.`)),xe(l===r.shape[3],(()=>`Error in conv2dDerInput: depth of output (${l}) must match output depth for filter ${r.shape[3]}.`)),Cv("conv2dDerInput",P,o);const c={dy:s,filter:r},O={strides:n,pad:P,dataFormat:a,dimRoundingMode:o,inputShape:u},D=Ua.runKernel($t,c,O);return v?Qv(D,[D.shape[1],D.shape[2],D.shape[3]]):D}const xi=Xa({conv2DBackpropInput_:Ai});function Yi(e,t,r,n,P,a){const o=Ba(e,"x","conv2dTranspose"),u=Ba(t,"filter","conv2dTranspose");return xi(r,o,u,n,P,"NHWC",a)}const ki=Xa({conv2dTranspose_:Yi});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ci(e,t,r,n,P="NDHWC",a=[1,1,1]){const o=Ba(e,"x","conv3d"),u=Ba(t,"filter","conv3d");let s=o,v=!1;4===o.rank&&(v=!0,s=Qv(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),xe(5===s.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${s.rank}.`)),xe(5===u.rank,(()=>`Error in conv3d: filter must be rank 5, but got rank ${u.rank}.`)),xe(s.shape[4]===u.shape[3],(()=>`Error in conv3d: depth of input (${s.shape[4]}) must match input depth for filter ${u.shape[3]}.`)),xe(Yv(r,a),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`)),xe("NDHWC"===P,(()=>`Error in conv3d: got dataFormat of ${P} but only NDHWC is currently supported.`));const i={x:s,filter:u},l={strides:r,pad:n,dataFormat:P,dilations:a},c=Ua.runKernel(er,i,l);return v?Qv(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}const Ei=Xa({conv3d_:Ci});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Qi(e,t,r,n,P){xe(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let a=e,o=t,u=!1;4===t.rank&&(u=!0,o=Qv(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);const s=a[4],v=o.shape[4];xe(5===a.length,(()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`)),xe(5===o.rank,(()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`)),xe(5===r.rank,(()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${r.rank}`)),xe(s===r.shape[3],(()=>`Error in conv3dDerInput: depth of input (${s}) must match input depth for filter ${r.shape[3]}.`)),xe(v===r.shape[4],(()=>`Error in conv3dDerInput: depth of output (${v}) must match output depth for filter ${r.shape[4]}.`));const i={dy:o,filter:r},l={pad:P,strides:n,inputShape:a},c=Ua.runKernel(tr,i,l);return u?Qv(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}const Wi=Xa({conv3DBackpropInput_:Qi});function Ui(e,t,r,n,P){const a=Ba(e,"x","conv3dTranspose"),o=Ba(t,"filter","conv3dTranspose");return Wi(r,a,o,n,P)}const qi=Xa({conv3dTranspose_:Ui});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Gi(e){const t={x:Ba(e,"x","cos","float32")};return Ua.runKernel(rr,t)}const Mi=Xa({cos_:Gi});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ki(e){const t={x:Ba(e,"x","cosh","float32")};return Ua.runKernel(nr,t)}const Ni=Xa({cosh_:Ki});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the 'License');
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an 'AS IS' BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ri(e,t=0,r=!1,n=!1){const P={x:Ba(e,"x","cumprod")},a={axis:t,exclusive:r,reverse:n};return Ua.runKernel(Pr,P,a)}const Fi=Xa({cumprod_:Ri});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Bi(e,t=0,r=!1,n=!1){const P={x:Ba(e,"x","cumsum")},a={axis:t,exclusive:r,reverse:n};return Ua.runKernel(ar,P,a)}const Zi=Xa({cumsum_:Bi});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Vi(e,t,r,n=!1){const P=Ba(e,"x","denseBincount"),a=Ba(t,"weights","denseBincount");xe("int32"===P.dtype,(()=>`Error in denseBincount: input dtype must be int32, but got ${P.dtype}`)),xe(P.rank<=2,(()=>`Error in denseBincount: input must be at most rank 2, but got rank ${P.rank}.`)),xe(r>=0,(()=>`size must be non-negative, but got ${r}.`)),xe(a.size===P.size||0===a.size,(()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${P.shape}, weights shape: ${a.shape}.`));const o={x:P,weights:a},u={size:r,binaryOutput:n};return Ua.runKernel(ur,o,u)}const Xi=Xa({denseBincount_:Vi});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Hi(e,t,r="NHWC"){const n=Ba(e,"x","depthToSpace","float32"),P="NHWC"===r?n.shape[1]:n.shape[2],a="NHWC"===r?n.shape[2]:n.shape[3],o="NHWC"===r?n.shape[3]:n.shape[1];xe(t>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`)),xe(P*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${P} and ${t}  for depthToSpace with input shape\n    ${n.shape}`)),xe(a*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${a} and ${t} for depthToSpace with input shape\n        ${n.shape}`)),xe(o%(t*t)==0,(()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${n.shape}`));const u={x:n},s={blockSize:t,dataFormat:r};return Ua.runKernel(sr,u,s)}const Ji=Xa({depthToSpace_:Hi});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function _i(e,t,r,n,P="NHWC",a=[1,1],o){const u=Ba(e,"x","depthwiseConv2d","float32"),s=Ba(t,"filter","depthwiseConv2d","float32");let v=u,i=!1;3===u.rank&&(i=!0,v=Qv(u,[1,u.shape[0],u.shape[1],u.shape[2]])),xe(4===v.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${v.rank}.`)),xe(4===s.rank,(()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${s.rank}.`));const l="NHWC"===P?v.shape[3]:v.shape[1];xe(l===s.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${l}) must match the inChannels dimension in filter ${s.shape[2]}.`)),Cv("depthwiseConv2d",n,o);const c={x:v,filter:s},O={strides:r,pad:n,dataFormat:P,dilations:a,dimRoundingMode:o},D=Ua.runKernel(vr,c,O);return i?Qv(D,[D.shape[1],D.shape[2],D.shape[3]]):D}const $i=Xa({depthwiseConv2d_:_i});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function el(e){const t={x:Ba(e,"x","diag")};return Ua.runKernel(cr,t)}const tl=Xa({diag_:el});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function rl(e,t,r,n,P=[1,1],a="NHWC"){const o=Ba(e,"x","dilation2d"),u=Ba(t,"filter","dilation2d");xe(3===o.rank||4===o.rank,(()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`)),xe(3===u.rank,(()=>`Error in dilation2d: filter must be rank 3, but got rank ${u.rank}.`)),xe("NHWC"===a,(()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`));let s=o,v=!1;3===o.rank&&(s=Qv(o,[1,o.shape[0],o.shape[1],o.shape[2]]),v=!0);const i={x:s,filter:u},l={strides:r,pad:n,dilations:P},c=Ua.runKernel(Or,i,l);return v?Qv(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const nl=Xa({dilation2d_:rl});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Pl(e,t){let r=Ba(e,"a","equal","string_or_numeric"),n=Ba(t,"b","equal","string_or_numeric");[r,n]=Ia(r,n),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(mr,P)}const al=Xa({equal_:Pl});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ol(e,t,r){const n=Ba(t,"a","where"),P=Ba(r,"b","where"),a=Ba(e,"condition","where","bool"),o=os(os(a.shape,n.shape),P.shape),u={condition:Oi(a,o),t:Oi(n,o),e:Oi(P,o)};return Ua.runKernel(Yn,u)}const ul=Xa({where_:ol});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function sl(e){const t={x:Ba(e,"x","zerosLike")};return Ua.runKernel(lP,t)}const vl=Xa({zerosLike_:sl});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function il(e,t){let r=Ba(e,"a","div"),n=Ba(t,"b","div");[r,n]=Ia(r,n);const P=Ks(r,n),a=vl(P),o=al(n,a);return ul(o,a,P)}const ll=Xa({divNoNan_:il});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function cl(e,t){const r=Ba(e,"t1","dot"),n=Ba(t,"t2","dot");xe(!(1!==r.rank&&2!==r.rank||1!==n.rank&&2!==n.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${r.rank} and ${n.rank}.`));const P=1===r.rank?r.size:r.shape[1],a=1===n.rank?n.size:n.shape[0];if(xe(P===a,(()=>`Error in dot: inner dimensions of inputs must match, but got ${P} and ${a}.`)),1===r.rank&&1===n.rank){const e=Qv(r,[1,-1]),t=Qv(n,[-1,1]),P=Gu(e,t);return Qv(P,[])}if(1===r.rank&&2===n.rank){const e=Qv(r,[1,-1]),t=Qv(n,[n.shape[0],n.shape[1]]),P=Gu(e,t);return Qv(P,[P.size])}if(2===r.rank&&1===n.rank){const e=Qv(n,[-1,1]),t=Gu(r,e);return Qv(t,[t.size])}{const e=Qv(n,[n.shape[0],n.shape[1]]);return Gu(r,e)}}const Ol=Xa({dot_:cl});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Dl(e,...t){const r=t.map(((e,t)=>Ba(e,`tensors${t}`,"einsum"))),n={equation:e};return Ua.runKernel(jr,r,n)}const jl=Xa({einsum_:Dl});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function hl(e){const t={x:Ba(e,"x","elu","float32")};return Ua.runKernel(hr,t)}const pl=Xa({elu_:hl});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ml(e){let t=Ba(e,"x","erf");xe("int32"===t.dtype||"float32"===t.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===t.dtype&&(t=uu(t,"float32"));const r={x:t};return Ua.runKernel(pr,r)}const gl=Xa({erf_:ml});
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function bl(e,t){for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0}function Tl(e,t,r){const n=e.length+t.length,P=[];let a=0,o=0;for(let u=0;u<n;u++)-1===r.indexOf(u)?P.push(e[a++]):P.push(t[o++]);return P}function zl(e,t){const r=[],n=e.length;for(let P=0;P<n;P++)-1===t.indexOf(P)&&r.push(e[P]);return[r,t.map((t=>e[t]))]}function dl(e,t){return Tl(e,t.map((e=>1)),t)}function yl(e,t,r){xe(bl(t,r),(()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${r} input.`))}function wl(e,t){if(bl(e,t))return null;const r=[];for(let n=0;n<t;++n)-1===e.indexOf(n)&&r.push(n);return e.forEach((e=>r.push(e))),r}function Ll(e){return e.map(((e,t)=>[t,e])).sort(((e,t)=>e[1]-t[1])).map((e=>e[0]))}function fl(e,t){const r=[];for(let n=t-e;n<t;++n)r.push(n);return r}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Il(e,t=null,r=!1){const n={x:Ba(e,"x","max")},P={reductionIndices:t,keepDims:r};return Ua.runKernel(Vr,n,P)}const Sl=Xa({max_:Il});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Al(e,t=null,r=!1){const n={x:Ba(e,"x","min")},P={axis:t,keepDims:r};return Ua.runKernel(en,n,P)}const xl=Xa({min_:Al});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Yl(e,t){let r=Ba(e,"base","pow"),n=Ba(t,"exp","pow");[r,n]=Ia(r,n);const P={a:r,b:n};return Ua.runKernel(hn,P)}const kl=Xa({pow_:Yl});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Cl(e,t){if((Xe(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&Xe(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return _a(e,[],[],t)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function El(e){const t={x:Ba(e,"x","sqrt","float32")};return Ua.runKernel(Gn,t)}const Ql=Xa({sqrt_:El});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Wl(e){const t=Ba(e,"x","square");return Ua.runKernel("Square",{x:t},{})}const Ul=Xa({square_:Wl});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ql(e,t=null,r=!1){let n=Ba(e,"x","sum");"bool"===n.dtype&&(n=uu(n,"int32"));const P={x:n},a={axis:t,keepDims:r};return Ua.runKernel(Mn,P,a)}const Gl=Xa({sum_:ql});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ml(e,t="euclidean",r=null,n=!1){const P=Kl(e=Ba(e,"x","norm"),t,r);let a=P.shape;if(n){const t=Ke(r,e.shape);a=dl(P.shape,t)}return Qv(P,a)}function Kl(e,t,r=null){if(0===e.rank)return Bs(e);if(1!==e.rank&&null===r)return Kl(Qv(e,[-1]),t,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===t)return Gl(Bs(e),r);if(t===1/0)return Sl(Bs(e),r);if(t===-1/0)return xl(Bs(e),r);if("euclidean"===t||2===t)return Ql(Gl(kl(Bs(e),Cl(2,"int32")),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(r)&&2===r.length){if(1===t)return Sl(Gl(Bs(e),r[0]),r[1]-1);if(t===1/0)return Sl(Gl(Bs(e),r[1]),r[0]);if(t===-1/0)return xl(Gl(Bs(e),r[1]),r[0]);if("fro"===t||"euclidean"===t)return Ql(Gl(Ul(e),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${r}`)}const Nl=Xa({norm_:Ml});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Rl(e,t=null,r=!1){return Nl(e,"euclidean",t,r)}const Fl=Xa({euclideanNorm_:Rl});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Bl(e){const t={x:Ba(e,"x","exp")};return Ua.runKernel(gr,t)}const Zl=Xa({exp_:Bl});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Vl(e,t=0){const r=Ba(e,"x","expandDims","string_or_numeric");xe(t<=r.rank,(()=>"Axis must be <= rank of the tensor"));const n={input:r},P={dim:t};return Ua.runKernel(br,n,P)}const Xl=Xa({expandDims_:Vl});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Hl(e){const t={x:Ba(e,"x","expm1")};return Ua.runKernel(Tr,t)}const Jl=Xa({expm1_:Hl});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function _l(e,t){const r=Ba(e,"x","tile","string_or_numeric");xe(r.rank===t.length,(()=>`Error in transpose: rank of input ${r.rank} must match length of reps ${t}.`));const n={x:r},P={reps:t};return Ua.runKernel(PP,n,P)}const $l=Xa({tile_:_l});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ec(e,t,r,n="float32"){null==t&&(t=e);const P=au([e,t],n),a=e<=t?e:t;for(let e=0;e<a;++e)P.set(1,e,e);const o=Qv(P.toTensor(),[e,t]);if(null==r)return o;if(1===r.length)return $l(Xl(o,0),[r[0],1,1]);if(2===r.length)return $l(Xl(Xl(o,0),0),[r[0],r[1],1,1]);if(3===r.length)return $l(Xl(Xl(Xl(o,0),0),0),[r[0],r[1],r[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${r.length}D.`)}const tc=Xa({eye_:ec});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function rc(e,t,r){const n={shape:e,value:t,dtype:r};return Ua.runKernel(dr,{},n)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function nc(e){const t={x:Ba(e,"x","floor","float32")};return Ua.runKernel(wr,t)}const Pc=Xa({floor_:nc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ac(e,t,r=0,n=0){const P={x:Ba(e,"x","gather"),indices:Ba(t,"indices","gather","int32")},a={axis:r,batchDims:n};return Ua.runKernel(Ir,P,a)}const oc=Xa({gather_:ac});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function uc(e,t){let r=Ba(e,"a","greater","string_or_numeric"),n=Ba(t,"b","greater","string_or_numeric");[r,n]=Ia(r,n),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(Ar,P)}const sc=Xa({greater_:uc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function vc(e,t){let r=Ba(e,"a","greaterEqual","string_or_numeric"),n=Ba(t,"b","greaterEqual","string_or_numeric");[r,n]=Ia(r,n),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(xr,P)}const ic=Xa({greaterEqual_:vc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lc(e){const t={x:Ba(e,"x","isFinite")};return Ua.runKernel(Er,t)}const cc=Xa({isFinite_:lc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Oc(e){const t={x:Ba(e,"x","isInf")};return Ua.runKernel(Qr,t)}const Dc=Xa({isInf_:Oc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function jc(e){const t={x:Ba(e,"x","isNaN")};return Ua.runKernel(Wr,t)}const hc=Xa({isNaN_:jc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function pc(e,t=.2){const r={x:Ba(e,"x","leakyRelu")},n={alpha:t};return Ua.runKernel(Ur,r,n)}const mc=Xa({leakyRelu_:pc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function gc(e,t){let r=Ba(e,"a","less","string_or_numeric"),n=Ba(t,"b","less","string_or_numeric");[r,n]=Ia(r,n),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(qr,P)}const bc=Xa({less_:gc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Tc(e,t){let r=Ba(e,"a","lessEqual","string_or_numeric"),n=Ba(t,"b","lessEqual","string_or_numeric");[r,n]=Ia(r,n),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(Gr,P)}const zc=Xa({lessEqual_:Tc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function dc(e,t,r){if(r<=0)throw new Error("The number of values should be positive.");const n={start:e,stop:t,num:r};return Ua.runKernel(Mr,{},n)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function yc(e,t=5,r=1,n=1,P=.5){const a=Ba(e,"x","localResponseNormalization");xe(4===a.rank||3===a.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${a.rank}.`)),xe(We(t),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`));let o=a,u=!1;3===a.rank&&(u=!0,o=Qv(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const s={x:o},v={depthRadius:t,bias:r,alpha:n,beta:P},i=Ua.runKernel(Zr,s,v);return u?Qv(i,[i.shape[1],i.shape[2],i.shape[3]]):i}const wc=Xa({localResponseNormalization_:yc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Lc(e){const t={x:Ba(e,"x","log","float32")};return Ua.runKernel(Kr,t)}const fc=Xa({log_:Lc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ic(e){const t={x:Ba(e,"x","log1p")};return Ua.runKernel(Nr,t)}const Sc=Xa({log1p_:Ic});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ac(e,t){xe(rt(e),(()=>"The f passed in variableGrads(f) must be a function")),xe(null==t||Array.isArray(t)&&t.every((e=>e instanceof ya)),(()=>"The varList passed in variableGrads(f, varList) must be an array of variables"));const r=null!=t;if(!r){t=[];for(const e in Ua.registeredVariables)t.push(Ua.registeredVariables[e])}const n=r?t.filter((e=>!e.trainable)):null,P=t.length;t=t.filter((e=>e.trainable)),xe(t.length>0,(()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${P} variables is trainable.`));const{value:a,grads:o}=Ua.gradients(e,t,null,!0);xe(o.some((e=>null!=e)),(()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().")),xe(0===a.rank,(()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`));const u={};return t.forEach(((e,t)=>{null!=o[t]&&(u[e.name]=o[t])})),null!=n&&n.forEach((e=>u[e.name]=null)),{value:a,grads:u}}function xc(e){return Ua.customGrad(e)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Yc(e){const t={x:Ba(e,"x","softplus")};return Ua.runKernel(qn,t)}const kc=Xa({softplus_:Yc});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Cc(e){const t=Ba(e,"x","logSigmoid"),r=xc((e=>({value:_u(kc(_u(e))),gradFunc:t=>Rs(t,Rv(_u(e)))})));return r(t)}const Ec=Xa({logSigmoid_:Cc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Qc(e,t){let r=Ba(e,"a","sub"),n=Ba(t,"b","sub");[r,n]=Ia(r,n);const P={a:r,b:n};return Ua.runKernel(tP,P)}const Wc=Xa({sub_:Qc});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Uc(e,t=-1){const r=Ba(e,"logits","logSoftmax");if(-1===t&&(t=r.rank-1),t!==r.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${r.rank} and axis was ${t}`);const n=xc(((e,r)=>{const n=Sl(e,t,!0),P=Wc(e,n),a=Wc(uu(P,"float32"),fc(Gl(Zl(P),t,!0)));r([a]);return{value:a,gradFunc:(e,r)=>{const[n]=r,P=Zl(n);return Wc(e,Rs(Gl(e,t,!0),P))}}}));return n(r)}const qc=Xa({logSoftmax_:Uc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Gc(e,t=null,r=!1){const n=Ba(e,"x","logSumExp"),P=Ke(t,n.shape),a=Sl(n,P,!0),o=Wc(n,a),u=Zl(o),s=Gl(u,P),v=fc(s),i=Us(Qv(a,v.shape),v);if(r){const e=dl(i.shape,P);return Qv(i,e)}return i}const Mc=Xa({logSumExp_:Gc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Kc(e,t){const r=Ba(e,"a","logicalAnd","bool"),n=Ba(t,"b","logicalAnd","bool");os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(Rr,P)}const Nc=Xa({logicalAnd_:Kc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Rc(e){const t={x:Ba(e,"x","logicalNot","bool")};return Ua.runKernel(Fr,t)}const Fc=Xa({logicalNot_:Rc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Bc(e,t){const r=Ba(e,"a","logicalOr","bool"),n=Ba(t,"b","logicalOr","bool");os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(Br,P)}const Zc=Xa({logicalOr_:Bc});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Vc(e,t){const r=Ba(e,"a","logicalXor","bool"),n=Ba(t,"b","logicalXor","bool");return os(r.shape,n.shape),Nc(Zc(e,t),Fc(Nc(e,t)))}const Xc=Xa({logicalXor_:Vc}),Hc=2147483648;
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Jc(e,t,r="left"){const n=Ba(e,"sortedSequence","searchSorted"),P=Ba(t,"values","searchSorted"),a=n.shape[n.shape.length-1],o=P.shape[P.shape.length-1],u=Qv(n,[-1,a]),s=Qv(P,[-1,o]);if(u.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(u.shape[0]!==s.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Ee(s.shape)>=Hc)throw new Error(`values tensor size must less than ${Hc}`);if(u.shape[1]>=Hc)throw new Error(`trailing dim_size must less than ${Hc} for int32 output type, was ${u.shape[1]}`);const v={sortedSequence:u,values:s},i={side:r};return Ua.runKernel(xn,v,i)}const _c=Xa({searchSorted_:Jc});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $c(e,t){return _c(e,t,"left")}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function eO(e,t,r,n,P){const a=Ba(e,"x","maxPool");let o=a,u=!1;3===a.rank&&(u=!0,o=Qv(a,[1,a.shape[0],a.shape[1],a.shape[2]])),xe(4===o.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`)),xe(Yv(r,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '1'`)),Cv("maxPool",n,P);const s={x:o},v={filterSize:t,strides:r,pad:n,dimRoundingMode:P},i=Ua.runKernel(Hr,s,v);return u?Qv(i,[i.shape[1],i.shape[2],i.shape[3]]):i}const tO=Xa({maxPool_:eO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function rO(e,t=[1,1,1],r,n,P,a="NDHWC"){const o=Ba(e,"x","maxPool3d");let u=o,s=!1;4===o.rank&&(s=!0,u=Qv(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),xe(5===u.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${u.rank}.`)),xe("NDHWC"===a,(()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`)),Cv("maxPool3d",n,P);const v={x:u},i={filterSize:t,strides:r,pad:n,dimRoundingMode:P,dataFormat:a},l=Ua.runKernel(Jr,v,i);return s?Qv(l,[l.shape[1],l.shape[2],l.shape[3],l.shape[4]]):l}const nO=Xa({maxPool3d_:rO});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function PO(e,t,r,n,P=!1){const a={x:Ba(e,"x","maxPoolWithArgmax")},o={filterSize:t,strides:r,pad:n,includeBatchInIndex:P},u=Ua.runKernel(_r,a,o);return{result:u[0],indexes:u[1]}}const aO=Xa({maxPoolWithArgmax_:PO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function oO(e,t){let r=Ba(e,"a","maximum"),n=Ba(t,"b","maximum");[r,n]=Ia(r,n),"bool"===r.dtype&&(r=uu(r,"int32"),n=uu(n,"int32")),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(Xr,P)}const uO=Xa({maximum_:oO});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function sO(e,t=null,r=!1){const n={x:Ba(e,"x","mean")},P={axis:t,keepDims:r};return Ua.runKernel($r,n,P)}const vO=Xa({mean_:sO});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function iO(e,t="float32"){if("complex64"===t){const t=iO(e,"float32"),r=iO(e,"float32");return Ja(t,r)}const r=st(Ee(e),t);return Ua.makeTensor(r,e,t)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lO(e,t="float32"){if("complex64"===t){const t=lO(e,"float32"),r=iO(e,"float32");return Ja(t,r)}const r=ut(Ee(e),t);return Ua.makeTensor(r,e,t)}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function cO(e,t,{indexing:r="xy"}={}){if("xy"!==r&&"ij"!==r)throw new TypeError(`${r} is not a valid third argument to meshgrid`);if(void 0===e)return[];let n=Ba(e,"x","meshgrid",e instanceof za?e.dtype:"float32");if(void 0===t)return[n];let P=Ba(t,"y","meshgrid",t instanceof za?t.dtype:"float32");const a=Ee(n.shape),o=Ee(P.shape);return"xy"===r?(n=Qv(n,[1,-1]),P=Qv(P,[-1,1]),[Gu(lO([o,1],n.dtype),n),Gu(P,lO([1,a],P.dtype))]):(n=Qv(n,[-1,1]),P=Qv(P,[1,-1]),[Gu(n,lO([1,o],n.dtype)),Gu(lO([a,1],P.dtype),P)])}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function OO(e,t){let r=Ba(e,"a","minimum"),n=Ba(t,"b","minimum");[r,n]=Ia(r,n),"bool"===r.dtype&&(r=uu(r,"int32"),n=uu(n,"int32")),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(tn,P)}const DO=Xa({minimum_:OO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function jO(e,t,r){xe("reflect"===r||"symmetric"===r,(()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${r}.`));const n=Ba(e,"x","mirrorPad");if(0===n.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");xe(t.length===n.rank,(()=>`Padding doesn't match input. Must be ${n.rank}. Got ${t.length}.`));const P="reflect"===r?1:0;for(let e=0;e<n.rank;e++)xe(2===t[e].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),xe(t[e][0]>=0&&t[e][0]<=n.shape[e]-P&&t[e][1]>=0&&t[e][1]<=n.shape[e]-P,(()=>`Padding in dimension ${e} cannot be greater than or equal to ${n.shape[e]-P} or less than 0 for input of shape ${n.shape}`));const a={paddings:t,mode:r},o={x:n};return Ua.runKernel(rn,o,a)}const hO=Xa({mirrorPad_:jO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function pO(e,t){let r=Ba(e,"a","mod"),n=Ba(t,"b","mod");[r,n]=Ia(r,n);const P={a:r,b:n};return Ua.runKernel(nn,P)}const mO=Xa({mod_:pO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function gO(e,t=null,r=!1){const n=Ke(t,(e=Ba(e,"x","moments")).shape),P=vO(e,n,r);let a=P.shape;r||(a=dl(P.shape,n));const o=Ul(Wc(uu(e,"float32"),Qv(P,a)));return{mean:P,variance:vO(o,n,r)}}const bO=Xa({moments_:gO});function TO(e,t,r,n){const P=Ba(t,"data","multiRNNCell"),a=Za(r,"c","multiRNNCell"),o=Za(n,"h","multiRNNCell");let u=P;const s=[];for(let t=0;t<e.length;t++){const r=e[t](u,a[t],o[t]);s.push(r[0]),s.push(r[1]),u=r[1]}const v=[],i=[];for(let e=0;e<s.length;e+=2)v.push(s[e]),i.push(s[e+1]);return[v,i]}const zO=Xa({multiRNNCell_:TO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function dO(e,t,r,n=!1){const P=Ba(e,"logits","multinomial"),a=P.size,o=P.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);r=r||Math.random();const u={logits:1===o?Qv(P,[1,-1]):P},s={numSamples:t,seed:r,normalized:n},v=Ua.runKernel(Pn,u,s);return 1===o?Qv(v,[v.size]):v}const yO=Xa({multinomial_:dO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function wO(e,t){let r=Ba(e,"a","notEqual","string_or_numeric"),n=Ba(t,"b","notEqual","string_or_numeric");[r,n]=Ia(r,n),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(un,P)}const LO=Xa({notEqual_:wO});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function fO(e){const t={x:Ba(e,"x","onesLike")};return Ua.runKernel(cn,t)}const IO=Xa({onesLike_:fO});function SO(e,t){const r=Ba(e,"v1","outerProduct"),n=Ba(t,"v2","outerProduct");xe(1===r.rank&&1===n.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${r.rank} and ${n.rank}.`));const P=Qv(r,[-1,1]),a=Qv(n,[1,-1]);return Gu(P,a)}const AO=Xa({outerProduct_:SO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function xO(e,t,r=0){const n=Ba(e,"x","pad");if(0===n.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const P={paddings:t,constantValue:r},a={x:n};return Ua.runKernel(jn,a,P)}const YO=Xa({pad_:xO});function kO(e,t,r=0){return xe(2===t.length,(()=>"Invalid number of paddings. Must be length of 2.")),YO(e,[t],r)}const CO=Xa({pad1d_:kO});function EO(e,t,r=0){return xe(2===t.length&&2===t[0].length&&2===t[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),YO(e,t,r)}const QO=Xa({pad2d_:EO});function WO(e,t,r=0){return xe(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),YO(e,t,r)}const UO=Xa({pad3d_:WO});function qO(e,t,r=0){return xe(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),YO(e,t,r)}const GO=Xa({pad4d_:qO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function MO(e,t,r){const n=Ba(e,"x","spaceToBatchND");xe(n.rank>=1+t.length,(()=>`input rank ${n.rank} should be > than [blockShape] ${t.length}`)),xe(r.length===t.length,(()=>`paddings.shape[0] ${r.length} must be equal to [blockShape] ${t.length}`)),xe(n.shape.reduce(((e,n,P)=>P>0&&P<=t.length?e&&(n+r[P-1][0]+r[P-1][1])%t[P-1]==0:e),!0),(()=>`input spatial dimensions ${n.shape.slice(1)} with paddings ${r.toString()} must be divisible by blockShapes ${t.toString()}`));const P={x:n},a={blockShape:t,paddings:r};return Ua.runKernel(Kn,P,a)}const KO=Xa({spaceToBatchND_:MO});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function NO(e,t,r,n,P,a,o){null==P&&(P=[1,1]),null==a&&(a=1),0===n&&(n="valid");const u=Ba(e,"x","maxPool");let s=u,v=!1;3===u.rank&&(v=!0,s=Qv(u,[1,u.shape[0],u.shape[1],u.shape[2]])),xe(Yv(a,P),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${P}'`));const i=mv(s.shape,t,a,P,n),l=[i.dilationHeight,i.dilationWidth];let c;c="same"===n?FO([i.filterHeight,i.filterWidth],l):[[0,0],[0,0]];const O=1===l[0]&&1===l[1],[D,j]=RO([i.inHeight,i.inWidth],l,c),h=O?n:"valid",p=O?s:KO(s,l,D),m=("avg"===r?()=>Uv(p,t,a,h,o):()=>tO(p,t,a,h,o))(),g=O?m:_v(m,l,j);return v?Qv(g,[g.shape[1],g.shape[2],g.shape[3]]):g}function RO(e,t,r){const n=r.map((e=>e[0])),P=r.map((e=>e[1])),a=e.concat(n,P),o=t.map(((e,t)=>(e-a[t]%e)%e)),u=P.map(((e,t)=>e+o[t]));return[t.map(((e,t)=>[n[t],u[t]])),t.map(((e,t)=>[0,o[t]]))]}function FO(e,t){const r=e.map(((e,r)=>e+(e-1)*(t[r]-1))).map((e=>e-1)),n=r.map((e=>Math.floor(e/2))),P=r.map(((e,t)=>e-n[t]));return r.map(((e,t)=>[n[t],P[t]]))}const BO=Xa({pool_:NO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ZO(e,t){const r={x:Ba(e,"x","prelu"),alpha:Ba(t,"alpha","prelu")};return Ua.runKernel(pn,r)}const VO=Xa({prelu_:ZO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function XO(e,t=null,r=!1){let n=Ba(e,"x","prod");"bool"===n.dtype&&(n=uu(n,"int32"));const P={x:n},a={axis:t,keepDims:r};return Ua.runKernel(mn,P,a)}const HO=Xa({prod_:XO});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function JO(e,t,r){const n=Ee(e);let P=null;if(null==r||"float32"===r)P=new Float32Array(n);else if("int32"===r)P=new Int32Array(n);else{if("bool"!==r)throw new Error(`Unknown data type ${r}`);P=new Uint8Array(n)}for(let e=0;e<n;e++)P[e]=t();return Ua.makeTensor(P,e,r)}const _O=Xa({rand_:JO});var f={exports:{}};!function(e){!function(e,t,r){function n(e){var t=this,r=function(){var e=4022871197,t=function(t){t=String(t);for(var r=0;r<t.length;r++){var n=.02519603282416938*(e+=t.charCodeAt(r));n-=e=n>>>0,e=(n*=e)>>>0,e+=4294967296*(n-=e)}return 2.3283064365386963e-10*(e>>>0)};return t}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=r(" "),t.s1=r(" "),t.s2=r(" "),t.s0-=r(e),t.s0<0&&(t.s0+=1),t.s1-=r(e),t.s1<0&&(t.s1+=1),t.s2-=r(e),t.s2<0&&(t.s2+=1),r=null}function P(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var r=new n(e),a=t&&t.state,o=r.next;return o.int32=function(){return 4294967296*r.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,a&&("object"==typeof a&&P(a,r),o.state=function(){return P(r,{})}),o}t&&t.exports?t.exports=a:r&&r.amd?r((function(){return a})):this.alea=a}(0,e,!1)}(f);var I={exports:{}};!function(e){!function(e,t,r){function n(e){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:r+=e;for(var n=0;n<r.length+64;n++)t.x^=0|r.charCodeAt(n),t.next()}function P(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var r=new n(e),a=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=r.next,o.quick=o,a&&("object"==typeof a&&P(a,r),o.state=function(){return P(r,{})}),o}t&&t.exports?t.exports=a:r&&r.amd?r((function(){return a})):this.xor128=a}(0,e,!1)}(I);var S={exports:{}};!function(e){!function(e,t,r){function n(e){var t=this,r="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:r+=e;for(var n=0;n<r.length+64;n++)t.x^=0|r.charCodeAt(n),n==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function P(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var r=new n(e),a=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=r.next,o.quick=o,a&&("object"==typeof a&&P(a,r),o.state=function(){return P(r,{})}),o}t&&t.exports?t.exports=a:r&&r.amd?r((function(){return a})):this.xorwow=a}(0,e,!1)}(S);var A={exports:{}};!function(e){!function(e,t,r){function n(e){var t=this;t.next=function(){var e,r,n=t.x,P=t.i;return e=n[P],r=(e^=e>>>7)^e<<24,r^=(e=n[P+1&7])^e>>>10,r^=(e=n[P+3&7])^e>>>3,r^=(e=n[P+4&7])^e<<7,e=n[P+7&7],r^=(e^=e<<13)^e<<9,n[P]=r,t.i=P+1&7,r},function(e,t){var r,n=[];if(t===(0|t))n[0]=t;else for(t=""+t,r=0;r<t.length;++r)n[7&r]=n[7&r]<<15^t.charCodeAt(r)+n[r+1&7]<<13;for(;n.length<8;)n.push(0);for(r=0;r<8&&0===n[r];++r);for(8==r?n[7]=-1:n[r],e.x=n,e.i=0,r=256;r>0;--r)e.next()}(t,e)}function P(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){null==e&&(e=+new Date);var r=new n(e),a=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=r.next,o.quick=o,a&&(a.x&&P(a,r),o.state=function(){return P(r,{})}),o}t&&t.exports?t.exports=a:r&&r.amd?r((function(){return a})):this.xorshift7=a}(0,e,!1)}(A);var x={exports:{}};!function(e){!function(e,t,r){function n(e){var t=this;t.next=function(){var e,r,n=t.w,P=t.X,a=t.i;return t.w=n=n+1640531527|0,r=P[a+34&127],e=P[a=a+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,r=P[a]=r^e,t.i=a,r+(n^n>>>16)|0},function(e,t){var r,n,P,a,o,u=[],s=128;for(t===(0|t)?(n=t,t=null):(t+="\0",n=0,s=Math.max(s,t.length)),P=0,a=-32;a<s;++a)t&&(n^=t.charCodeAt((a+32)%t.length)),0===a&&(o=n),n^=n<<10,n^=n>>>15,n^=n<<4,n^=n>>>13,a>=0&&(o=o+1640531527|0,P=0==(r=u[127&a]^=n+o)?P+1:0);for(P>=128&&(u[127&(t&&t.length||0)]=-1),P=127,a=512;a>0;--a)n=u[P+34&127],r=u[P=P+1&127],n^=n<<13,r^=r<<17,n^=n>>>15,r^=r>>>12,u[P]=n^r;e.w=o,e.X=u,e.i=P}(t,e)}function P(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){null==e&&(e=+new Date);var r=new n(e),a=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=r.next,o.quick=o,a&&(a.X&&P(a,r),o.state=function(){return P(r,{})}),o}t&&t.exports?t.exports=a:r&&r.amd?r((function(){return a})):this.xor4096=a}(0,e,!1)}(x);var Y={exports:{}};!function(e){!function(e,t,r){function n(e){var t=this,r="";t.next=function(){var e=t.b,r=t.c,n=t.d,P=t.a;return e=e<<25^e>>>7^r,r=r-n|0,n=n<<24^n>>>8^P,P=P-e|0,t.b=e=e<<20^e>>>12^r,t.c=r=r-n|0,t.d=n<<16^r>>>16^P,t.a=P-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):r+=e;for(var n=0;n<r.length+20;n++)t.b^=0|r.charCodeAt(n),t.next()}function P(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var r=new n(e),a=t&&t.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=r.next,o.quick=o,a&&("object"==typeof a&&P(a,r),o.state=function(){return P(r,{})}),o}t&&t.exports?t.exports=a:r&&r.amd?r((function(){return a})):this.tychei=a}(0,e,!1)}(Y);var k={exports:{}};!function(t){!function(e,r,n){var P,a=256,o="random",u=n.pow(a,6),s=n.pow(2,52),v=2*s,i=255;function l(e,t,P){var i=[],l=j(D((t=1==t?{entropy:!0}:t||{}).entropy?[e,p(r)]:null==e?h():e,3),i),m=new c(i),g=function(){for(var e=m.g(6),t=u,r=0;e<s;)e=(e+r)*a,t*=a,r=m.g(1);for(;e>=v;)e/=2,t/=2,r>>>=1;return(e+r)/t};return g.int32=function(){return 0|m.g(4)},g.quick=function(){return m.g(4)/4294967296},g.double=g,j(p(m.S),r),(t.pass||P||function(e,t,r,P){return P&&(P.S&&O(P,m),e.state=function(){return O(m,{})}),r?(n[o]=e,t):e})(g,l,"global"in t?t.global:this==n,t.state)}function c(e){var t,r=e.length,n=this,P=0,o=n.i=n.j=0,u=n.S=[];for(r||(e=[r++]);P<a;)u[P]=P++;for(P=0;P<a;P++)u[P]=u[o=i&o+e[P%r]+(t=u[P])],u[o]=t;(n.g=function(e){for(var t,r=0,P=n.i,o=n.j,u=n.S;e--;)t=u[P=i&P+1],r=r*a+u[i&(u[P]=u[o=i&o+t])+(u[o]=t)];return n.i=P,n.j=o,r})(a)}function O(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function D(e,t){var r,n=[],P=typeof e;if(t&&"object"==P)for(r in e)try{n.push(D(e[r],t-1))}catch(e){}return n.length?n:"string"==P?e:e+"\0"}function j(e,t){for(var r,n=e+"",P=0;P<n.length;)t[i&P]=i&(r^=19*t[i&P])+n.charCodeAt(P++);return p(t)}function h(){try{var t;return P&&(t=P.randomBytes)?t=t(a):(t=new Uint8Array(a),(e.crypto||e.msCrypto).getRandomValues(t)),p(t)}catch(t){var n=e.navigator,o=n&&n.plugins;return[+new Date,e,o,e.screen,p(r)]}}function p(e){return String.fromCharCode.apply(0,e)}if(j(n.random(),r),t.exports){t.exports=l;try{P=require("crypto")}catch(e){}}else n["seed"+o]=l}("undefined"!=typeof self?self:e,[],Math)}(k);var C=f.exports,E=I.exports,Q=S.exports,W=A.exports,U=x.exports,q=Y.exports,G=k.exports;G.alea=C,G.xor128=E,G.xorwow=Q,G.xorshift7=W,G.xor4096=U,G.tychei=q;var M=G;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class $O{constructor(e,t,r,n,P){this.mean=e,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=n,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const a=P||Math.random();this.random=M.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const e=this.nextVal;return this.nextVal=NaN,e}let e,t,r=!1;for(;!r;){let n,P,a;do{n=2*this.random()-1,P=2*this.random()-1,a=n*n+P*P}while(a>=1||0===a);const o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*n*o,t=this.mean+this.stdDev*P*o,this.truncated&&!this.isValidTruncated(e)||(r=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class eD{constructor(e,t,r,n){this.alpha=e,this.beta=1/t,this.dtype=r;const P=n||Math.random();this.randu=M.alea(P.toString()),this.randn=new $O(0,1,r,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,r,n,P,a;for(;;){do{n=this.randn.nextValue(),a=1+this.c*n}while(a<=0);if(a*=a*a,e=n*n,t=1-.331*e*e,r=.5*e+this.d*(1-a+Math.log(a)),P=this.randu(),P<t||Math.log(P)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(e){return"float32"===this.dtype?e:Math.round(e)}}class tD{constructor(e=0,t=1,r,n){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=r,null==n&&(n=Math.random()),"number"==typeof n&&(n=n.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=M.alea(n)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function rD(e,t,r=1,n="float32",P){if(null==r&&(r=1),null==n&&(n="float32"),"float32"!==n&&"int32"!==n)throw new Error(`Unsupported data type ${n}`);const a=new eD(t,r,n,P),o=au(e,n);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}const nD=Xa({randomGamma_:rD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function PD(e,t=0,r=1,n,P){if(null!=n&&"bool"===n)throw new Error(`Unsupported data type ${n}`);const a=new $O(t,r,n,!1,P),o=au(e,n);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}const aD=Xa({randomNormal_:PD});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function oD(e,t,r){if(null!=t&&"bool"===t)throw new Error(`Unsupported data type ${t}`);return aD(e,0,1,t,r)}const uD=Xa({randomStandardNormal_:oD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function sD(e,t=0,r=1,n="float32",P){const a=au(e,n),o=new tD(t,r,null,P);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}const vD=Xa({randomUniform_:sD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function iD(e,t,r=1,n="float32"){if(0===r)throw new Error("Cannot have a step of zero");const P={start:e,stop:t,step:r,dtype:n};return Ua.runKernel(gn,{},P)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lD(e){const t={x:Ba(e,"x","reciprocal")};return Ua.runKernel(Tn,t)}const cD=Xa({reciprocal_:lD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function OD(e){const t={x:Ba(e,"x","relu")};return Ua.runKernel(zn,t)}const DD=Xa({relu_:OD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function jD(e){const t={x:Ba(e,"x","relu6")};return Ua.runKernel(Ln,t)}const hD=Xa({relu6_:jD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function pD(e,t){const r={x:Ba(e,"x","reverse")},n={dims:t};return Ua.runKernel(fn,r,n)}const mD=Xa({reverse_:pD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function gD(e){const t=Ba(e,"x","reverse");return xe(1===t.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`)),mD(t,0)}const bD=Xa({reverse1d_:gD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function TD(e,t){const r=Ba(e,"x","reverse");return xe(2===r.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${r.rank}.`)),mD(r,t)}const zD=Xa({reverse2d_:TD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function dD(e,t){const r=Ba(e,"x","reverse");return xe(3===r.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${r.rank}.`)),mD(r,t)}const yD=Xa({reverse3d_:dD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function wD(e,t){const r=Ba(e,"x","reverse");return xe(4===r.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${r.rank}.`)),mD(r,t)}const LD=Xa({reverse4d_:wD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function fD(e){const t={x:Ba(e,"x","round")};return Ua.runKernel(In,t)}const ID=Xa({round_:fD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function SD(e){const t={x:Ba(e,"x","rsqrt","float32")};return Ua.runKernel(Sn,t)}const AD=Xa({rsqrt_:SD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function xD(e){const t={x:Ba(e,"x","selu")};return Ua.runKernel(kn,t)}const YD=Xa({selu_:xD});function kD(e,t,r,n,P,a=[1,1],o="NHWC"){const u=Ba(e,"x","separableConv2d"),s=Ba(t,"depthwiseFilter","separableConv2d"),v=Ba(r,"pointwiseFilter","separableConv2d");let i=u,l=!1;if(3===u.rank&&(l=!0,i=Qv(u,[1,u.shape[0],u.shape[1],u.shape[2]])),"NCHW"===o)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");xe(4===i.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${i.rank}.`)),xe(4===s.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${s.rank}.`)),xe(4===v.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${s.rank}.`)),xe(1===v.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${v.shape[0]}.`)),xe(1===v.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${v.shape[1]}.`));const c=s.shape[2],O=s.shape[3];xe(v.shape[2]===c*O,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${c*O}, but got ${v.shape[2]}.`));const D=$i(i,s,n,P,o,a),j=fi(D,v,1,"valid",o);return l?Qv(j,[j.shape[1],j.shape[2],j.shape[3]]):j}const CD=Xa({separableConv2d_:kD});
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function ED(e,t){const r=Ba(e,"x","setdiff1d"),n=Ba(t,"y","setdiff1d");xe(r.dtype===n.dtype,(()=>`x and y should have the same dtype, but got x (${r.dtype}) and y (${n.dtype}).`)),xe(1===r.rank,(()=>`x should be 1D tensor, but got x (${r.shape}).`)),xe(1===n.rank,(()=>`y should be 1D tensor, but got y (${n.shape}).`));const P=await r.data(),a=await n.data(),o=new Set(a);let u=0;for(let e=0;e<P.length;e++)o.has(P[e])||u++;const s=new pa([u],r.dtype),v=new pa([u],"int32");for(let e=0,t=0;e<P.length;e++)o.has(P[e])||(s.values[t]=P[e],v.values[t]=e,t++);return[s.toTensor(),v.toTensor()]}const QD=ED;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function WD(e){const t={x:Ba(e,"x","sign")};return Ua.runKernel(Wn,t)}const UD=Xa({sign_:WD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function qD(e){const t={x:Ba(e,"x","sin","float32")};return Ua.runKernel(En,t)}const GD=Xa({sin_:qD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function MD(e){const t={x:Ba(e,"x","sinh")};return Ua.runKernel(Qn,t)}const KD=Xa({sinh_:MD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ND(e,t,r){const n=Ba(e,"x","slice1d");return xe(1===n.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${n.rank} tensor`)),Bv(n,[t],[r])}const RD=Xa({slice1d_:ND});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function FD(e,t,r){const n=Ba(e,"x","slice2d");return xe(2===n.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${n.rank} tensor`)),Bv(n,t,r)}const BD=Xa({slice2d_:FD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ZD(e,t,r){const n=Ba(e,"x","slice3d");return xe(3===n.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${n.rank} tensor`)),Bv(n,t,r)}const VD=Xa({slice3d_:ZD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function XD(e,t,r){const n=Ba(e,"x","slice4d");return xe(4===n.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${n.rank} tensor`)),Bv(n,t,r)}const HD=Xa({slice4d_:XD});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function JD(e,t=-1){const r=Ba(e,"logits","softmax","float32");if(-1===t&&(t=r.rank-1),t!==r.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${r.rank} and dim was ${t}`);const n={logits:r},P={dim:t};return Ua.runKernel(Rn,n,P)}const _D=Xa({softmax_:JD});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $D(e){xe("complex64"===e.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`));const t={input:e};return Ua.runKernel(zr,t)}const ej=Xa({fft_:$D});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function tj(e){xe("complex64"===e.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`));const t={input:e};return Ua.runKernel(kr,t)}const rj=Xa({ifft_:tj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function nj(e){const t=e.shape[e.shape.length-1],r=e.size/t;let n;if(t<=2){const P=Qv(e,[r,t]);n=rj(P)}else{const P=[r,2*(t-1)],a=Qv(es(e),[r,t]),o=Qv(Hu(e),[r,t]),u=mD(Bv(a,[0,1],[r,t-2]),1),s=Rs(mD(Bv(o,[0,1],[r,t-2]),1),Cl(-1)),v=Kv([a,u],1),i=Kv([o,s],1),l=Qv(Ja(v,i),[P[0],P[1]]);n=rj(l)}if(n=es(n),3===e.rank&&0!==e.shape[0]){const t=n,r=e.shape[0];n=Qv(n,[r,n.shape[0]/r,n.shape[1]]),t.dispose()}return n}const Pj=Xa({irfft_:nj});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function aj(e,t,r=0){const n={x:Ba(e,"x","split")},P={numOrSizeSplits:t,axis:r};return Ua.runKernel(Nn,n,P)}const oj=Xa({split_:aj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function uj(e,t){xe("float32"===e.dtype,(()=>`The dtype for rfft() must be real value but got ${e.dtype}`));let r=e.shape[e.shape.length-1];const n=e.size/r;let P;if(null!=t&&t<r){const n=e.shape.map((e=>0)),a=e.shape.map((e=>e));a[e.shape.length-1]=t,P=Bv(e,n,a),r=t}else if(null!=t&&t>r){const n=e.shape.map((e=>e));n[e.shape.length-1]=t-r,P=Kv([e,iO(n)],e.shape.length-1),r=t}else P=e;const a=vl(P),o=Qv(Ja(P,a),[n,r]),u=ej(o),s=Math.floor(r/2)+1,v=es(u),i=Hu(u),l=oj(v,[s,r-s],v.shape.length-1),c=oj(i,[s,r-s],i.shape.length-1),O=P.shape.slice();return O[P.shape.length-1]=s,Qv(Ja(l[0],c[0]),O)}const sj=Xa({rfft_:uj});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function vj(e,t){let r=Ba(e,"a","squaredDifference"),n=Ba(t,"b","squaredDifference");[r,n]=Ia(r,n),os(r.shape,n.shape);const P={a:r,b:n};return Ua.runKernel(Hn,P,{})}const ij=Xa({squaredDifference_:vj});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lj(e,t){const r=Ba(e,"x","squeeze","string_or_numeric");return Qv(r,Ne(r.shape,t).newShape)}const cj=Xa({squeeze_:lj});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Oj(e,t=0){const r=Za(e,"tensors","stack","string_or_numeric");xe(r.length>=1,(()=>"Pass at least one tensor to tf.stack")),r.length>0&&xe(t<=r[0].rank,(()=>"Axis must be <= rank of the tensor"));const n=r,P={axis:t};return Ua.runKernel(Dn,n,P)}const Dj=Xa({stack_:Oj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function jj(e,t=0){const r={x:Ba(e,"x","step")},n={alpha:t};return Ua.runKernel(cP,r,n)}const hj=Xa({step_:jj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function pj(e,t,r,n,P=0,a=0,o=0,u=0,s=0){const v={x:Ba(e,"x","stridedSlice","string_or_numeric")},i={begin:t,end:r,strides:n,beginMask:P,endMask:a,ellipsisMask:o,newAxisMask:u,shrinkAxisMask:s};return Ua.runKernel(Jn,v,i)}const mj=Xa({stridedSlice_:pj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function gj(e){const t={x:Ba(e,"x","tan","float32")};return Ua.runKernel(rP,t)}const bj=Xa({tan_:gj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Tj(e,t){ke(e);const r=Na(e,t);if(1!==r.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return _a(e,null,r,t)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function zj(e,t,r){if(ke(e),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");const n=Na(e,r);if(2!==n.length&&1!==n.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===n.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return _a(e,t,n,r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function dj(e,t,r){if(ke(e),null!=t&&4!==t.length)throw new Error("tensor4d() requires shape to have four numbers");const n=Na(e,r);if(4!==n.length&&1!==n.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===n.length&&null==t)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return _a(e,t,n,r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function yj(e,t,r){if(ke(e),null!=t&&5!==t.length)throw new Error("tensor5d() requires shape to have five numbers");const n=Na(e,r);if(5!==n.length&&1!==n.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===n.length&&null==t)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return _a(e,t,n,r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function wj(e,t,r){if(ke(e),null!=t&&6!==t.length)throw new Error("tensor6d() requires shape to have six numbers");const n=Na(e,r);if(6!==n.length&&1!==n.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===n.length&&null==t)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return _a(e,t=t||n,n,r)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Lj(e,t=1,r=!0){const n=Ba(e,"x","topk");if(0===n.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const P=n.shape[n.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>P)throw new Error(`'k' passed to topk() must be <= the last dimension (${P}) but got ${t}`);const a={x:n},o={k:t,sorted:r},[u,s]=Ua.runKernel(aP,a,o);return{values:u,indices:s}}const fj=Xa({topk_:Lj});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ij(e,t=0,r=1,n,P){if(null!=n&&"bool"===n)throw new Error("Unsupported data type $ { dtype }");const a=new $O(t,r,n,!0,P),o=au(e,n);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}const Sj=Xa({truncatedNormal_:Ij});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Aj(e,t=0){const r=Ba(e,"x","unique","string_or_numeric");xe(r.rank>0,(()=>"The input tensor must be at least 1D"));const n={x:r},P={axis:t},[a,o]=Ua.runKernel(sP,n,P);return{values:a,indices:o}}const xj=Xa({unique_:Aj});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Yj(e,t,r){const n=Ba(e,"x","unsortedSegmentSum"),P=Ba(t,"segmentIds","unsortedSegmentSum","int32");xe(We(r),(()=>"numSegments must be of dtype int"));const a={x:n,segmentIds:P},o={numSegments:r};return Ua.runKernel(iP,a,o)}const kj=Xa({unsortedSegmentSum_:Yj});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Cj(e,t=0){const r=Ba(e,"x","unstack","string_or_numeric");xe(t>=-r.shape.length&&t<r.shape.length,(()=>`Axis = ${t} is not in [-${r.shape.length}, ${r.shape.length})`));const n={value:r},P={axis:t};return Ua.runKernel(vP,n,P)}const Ej=Xa({unstack_:Cj});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Qj(e,t){return _c(e,t,"right")}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Wj(e,t=!0,r,n){return Ua.makeVariable(e,t,r,n)}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Uj(e,t){const r=[];for(let e=0;e<t.length;e++)t[e]&&r.push(e);const n=au(e,"int32"),P=au([r.length,e.length],"int32");for(let t=0;t<r.length;t++){const a=n.indexToLoc(r[t]),o=t*e.length;P.values.set(a,o)}return P.toTensor()}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function qj(e){const t=Ba(e,"condition","whereAsync","bool"),r=await t.data(),n=Uj(t.shape,r);return e!==t&&t.dispose(),n}const Gj=qj;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function Mj(e,t,r){const n=Ba(e,"tensor","boolMask"),P=Ba(t,"mask","boolMask","bool"),a=null==r?0:r,o=P.rank,u=n.shape;xe(o>0,(()=>"mask cannot be scalar")),Ye(u.slice(a,a+o),P.shape,"mask's shape must match the first K dimensions of tensor's shape,");let s=1;for(let e=a;e<a+o;e++)s*=u[e];const v=u.slice(0,a).concat([s],u.slice(a+o)),i=Qv(n,v),l=Qv(P,[-1]),c=await Gj(l),O=cj(c,[1]),D=oc(i,O,a);return e!==n&&n.dispose(),t!==P&&P.dispose(),O.dispose(),i.dispose(),l.dispose(),c.dispose(),D}const Kj=Mj;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Nj(e,t,r,n,P=!0){const a=Ba(e,"v","movingAverage"),o=Ba(t,"x","movingAverage"),u=Ba(r,"decay","movingAverage");Sa(a,o),xe(Qe(a.shape,o.shape),(()=>"Shape mismatch in v and x"));const s=Cl(1),v=Wc(s,u);let i=Rs(Wc(o,a),v);if(P){xe(null!=n,(()=>"When using zeroDebias: true, step is required."));const e=Ba(n,"step","movingAverage");i=Ks(i,Wc(s,kl(u,e)))}return Us(a,i)}const Rj=Xa({movingAverage_:Nj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Fj(e,t,r){const n=Ba(e,"indices","scatterND","int32"),P=Ba(t,"updates","scatterND");cs(P,n,r);const a={indices:n,updates:P},o={shape:r};return Ua.runKernel(An,a,o)}const Bj=Xa({scatterND_:Fj});function Zj(e,t,r,n){if("int32"!==e.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const P=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(r.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${r.length}, should be: ${a}.`);const o=t.size;if(0!==t.rank&&(1!==t.rank||o!==P))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${P}]`);if(t.dtype!==n.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Vj(e,t,r,n=0){const P=Ba(e,"sparseIndices","sparseToDense","int32"),a=Ba(t,"sparseValues","sparseToDense","string_or_numeric"),o=Ba(n,"defaultValue","sparseToDense",a.dtype);Zj(P,a,r,o);const u={sparseIndices:P,sparseValues:a,defaultValue:o},s={outputShape:r};return Ua.runKernel(Xn,u,s)}const Xj=Xa({sparseToDense_:Vj});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Hj(e,t){const r=Ba(t,"indices","gatherND","int32"),n={params:Ba(e,"x","gatherND","string_or_numeric"),indices:r};return Ua.runKernel(Sr,n)}const Jj=Xa({gatherND_:Hj});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function _j(e,t){if(null==t)return e.shape.slice();if(Qe(e.shape,t))return t;if(e.shape.length===t.length){const r=[];for(let n=0;n<e.shape.length;n++)null==t[n]&&null!=e.shape[n]?r.push(e.shape[n]):r.push(t[n]);return r}return t}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $j(e,t,r,n){const P=Ba(e,"x","dropout");if(xe("float32"===P.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${P.dtype} tensor instead.`)),xe(t>=0&&t<1,(()=>`rate must be a float in the range [0, 1), but got ${t}.`)),0===t)return e instanceof za?P.clone():P;const a=_j(P,r),o=1-t,u=Ks(Pc(Us(vD(a,0,1,"float32",n),o)),o);return Rs(P,u)}const eh=Xa({dropout_:$j});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function th(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function rh(e,t,r){const n=1-e%2,P=new Float32Array(e);for(let a=0;a<e;++a){const o=2*Math.PI*a/(e+n-1);P[a]=t-r*Math.cos(o)}return Tj(P,"float32")}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function nh(e,t,r=1){const n=Ba(e,"predictions","inTopK"),P=Ba(t,"targets","inTopK");xe(n.rank>1,(()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${n.rank}`)),xe(n.rank-1===P.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${n.rank} and targets rank ${P.rank}`)),Ye(n.shape.slice(0,n.shape.length-1),P.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=n.shape[n.shape.length-1];xe(r>0&&r<=a,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${r}`));const o=await n.data(),u=await P.data(),[s,v]=[o.length/a,a],i=Re("bool",s);for(let e=0;e<s;e++){const t=e*v,n=o.subarray(t,t+v),P=[];for(let e=0;e<n.length;e++)P.push({value:n[e],index:e});P.sort(((e,t)=>t.value-e.value)),i[e]=0;for(let t=0;t<r;t++)if(P[t].index===u[e]){i[e]=1;break}}return e!==n&&n.dispose(),t!==P&&P.dispose(),$a(i,P.shape,"bool")}const Ph=nh;
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ah(e,t,r,n,P,a="NHWC",o){let u=e;3===e.rank&&(u=Qv(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let s=t;3===s.rank&&(s=Qv(t,[1,t.shape[0],t.shape[1],t.shape[2]])),xe(4===u.rank,(()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${u.shape}.`)),xe(4===s.rank,(()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${s.shape}.`)),xe(4===r.length,(()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${r}.`));const v="NHWC"===a?u.shape[3]:u.shape[1],i="NHWC"===a?s.shape[3]:s.shape[1];xe(v===r[2],(()=>`Error in conv2dDerFilter: depth of input ${v}) must match input depth in filter (${r[2]}.`)),xe(i===r[3],(()=>`Error in conv2dDerFilter: depth of dy (${i}) must match output depth for filter (${r[3]}).`)),Cv("conv2dDerFilter",P,o);const l={x:u,dy:s},c={strides:n,pad:P,dataFormat:a,dimRoundingMode:o,filterShape:r};return Ua.runKernel(_t,l,c)}const oh=Xa({conv2DBackpropFilter_:ah});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function uh(e,t,r){if(null==r||"linear"===r)return e;if("relu"===r)return Rs(e,hj(t));throw new Error(`Cannot compute gradient for fused activation ${r}.`)}function sh(e,t){let r=t;const n=as(e.shape,t.shape);return n.length>0&&(r=Gl(r,n)),Qv(r,e.shape)}function vh(e,t,r,n){if("linear"===t)return e;if("relu"===t)return DD(e);if("elu"===t)return pl(e);if("relu6"===t)return hD(e);if("prelu"===t)return VO(e,r);if("leakyrelu"===t)return mc(e,n);if("sigmoid"===t)return Rv(e);throw new Error(`Unknown fused activation ${t}.`)}const ih=(e,t)=>!(e>0)||"linear"===t;
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lh({x:e,filter:t,strides:r,pad:n,dataFormat:P="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:u,activation:s="linear",preluActivationWeights:v,leakyreluAlpha:i}){if(s=s||"linear",!1===ih(Ua.state.gradientDepth,s)){xe("NHWC"===P,(()=>`Error in fused conv2d: got dataFormat of ${P} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`));let l=fi(e,t,r,n,P,a,o);return null!=u&&(l=Us(l,u)),vh(l,s,v,i)}const l=Ba(e,"x","conv2d","float32"),c=Ba(t,"filter","conv2d","float32");let O=l,D=!1;3===l.rank&&(D=!0,O=Qv(l,[1,l.shape[0],l.shape[1],l.shape[2]])),xe(4===O.rank,(()=>`Error in fused conv2d: input must be rank 4, but got rank ${O.rank}.`)),xe(4===c.rank,(()=>`Error in fused conv2d: filter must be rank 4, but got rank ${c.rank}.`)),Cv("fused conv2d",n,o);const j="NHWC"===P?O.shape[3]:O.shape[1];xe(c.shape[2]===j,(()=>`Error in conv2d: depth of input (${j}) must match input depth for filter ${c.shape[2]}.`)),xe(Yv(r,a),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`));const h=bv(O.shape,c.shape,r,a,n,o);let p,m;if(null!=u&&(p=Ba(u,"bias","fused conv2d"),[p]=Ia(p,l),"NHWC"===P?os(h.outShape,p.shape):(xe(p.shape.length<=1,(()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${p.shape.length}.`)),xe(0===p.shape.length||p.shape[0]===h.outChannels||1===p.shape[0],(()=>`Error in fused conv2d: bias shape (${p.shape}) is not compatible with the number of output channels (${h.outChannels})`)))),null!=v){const e=v.shape;if(xe(e.length<=1||3===e.length,(()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`)),1===e.length)xe(1===e[0]||e[0]===h.outChannels,(()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${h.outChannels}).`));else if(3===e.length)try{os(e,h.outShape)}catch(t){const r=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${h.outShape}).`;throw Error(r)}m=Ba(v,"prelu weights","fused conv2d")}const g=(e,t)=>{xe("NHWC"===P,(()=>`Error in gradient of fused conv2D: got dataFormat of ${P} but only NHWC is currently supported.`));const[o,u,v,i]=t,l=uh(e,v,s);xe(xv(a),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`));const c=[xi(u.shape,l,o,r,n),oh(u,l,o.shape,r,n)];if(null!=i){const e=sh(i,l);c.push(e)}return c},b={x:O,filter:c,bias:p,preluActivationWeights:m},T={strides:r,pad:n,dataFormat:P,dilations:a,dimRoundingMode:o,activation:s,leakyreluAlpha:i};if(null==u){const e=xc(((e,t,r)=>{let n=Ua.runKernel(hP,b,T);return r([t,e,n]),D&&(n=Qv(n,[n.shape[1],n.shape[2],n.shape[3]])),{value:n,gradFunc:g}}));return e(O,c)}{const e=xc(((e,t,r,n)=>{let P=Ua.runKernel(hP,b,T);return n([t,e,P,r]),D&&(P=Qv(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:g}}));return e(O,c,p)}}const ch=Xa({fusedConv2d_:lh});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Oh(e,t,r,n,P,a=[1,1],o){let u=e;3===e.rank&&(u=Qv(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let s=t;3===s.rank&&(s=Qv(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const v={x:u,dy:s},i={strides:n,pad:P,dimRoundingMode:o,dilations:a,filterShape:r};return Ua.runKernel(ir,v,i)}const Dh=Xa({depthwiseConv2dNativeBackpropFilter_:Oh});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function jh(e,t,r,n,P,a=[1,1],o){let u=t,s=!1;3===t.rank&&(s=!0,u=Qv(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const v={dy:u,filter:r},i={strides:n,pad:P,dimRoundingMode:o,dilations:a,inputShape:e},l=Ua.runKernel(lr,v,i);return s?Qv(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const hh=Xa({depthwiseConv2dNativeBackpropInput_:jh});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ph({x:e,filter:t,strides:r,pad:n,dataFormat:P="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:u,activation:s="linear",preluActivationWeights:v,leakyreluAlpha:i}){if(!1===ih(Ua.state.gradientDepth,s)){let l=$i(e,t,r,n,P,a,o);return null!=u&&(l=Us(l,u)),vh(l,s,v,i)}const l=Ba(e,"x","depthwiseConv2d","float32"),c=Ba(t,"filter","depthwiseConv2d","float32");let O=l,D=!1;3===l.rank&&(D=!0,O=Qv(l,[1,l.shape[0],l.shape[1],l.shape[2]])),xe(4===O.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${O.rank}.`)),xe(4===c.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`)),xe(O.shape[3]===c.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${O.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`)),null==a&&(a=[1,1]),xe(Yv(r,a),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`)),Cv("fused depthwiseConv2d",n,o);const j=bv(O.shape,c.shape,r,a,n,o,!0);let h,p;null!=u&&(h=Ba(u,"bias","fused conv2d"),[h]=Ia(h,l),os(j.outShape,h.shape)),null!=v&&(p=Ba(v,"prelu weights","fused depthwiseConv2d"));const m=(e,t)=>{xe(xv(a),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`));const[P,u,v,i]=t,l=uh(e,v,s),c=hh(u.shape,l,P,r,n,a,o),O=Dh(u,l,P.shape,r,n,a,o);if(null!=i){return[c,O,sh(h,l)]}return[c,O]},g={x:O,filter:c,bias:h,preluActivationWeights:p},b={strides:r,pad:n,dataFormat:P,dilations:a,dimRoundingMode:o,activation:s,leakyreluAlpha:i};if(null==u){const e=xc(((e,t,r)=>{let n=Ua.runKernel(pP,g,b);return r([t,e,n]),D&&(n=Qv(n,[n.shape[1],n.shape[2],n.shape[3]])),{value:n,gradFunc:m}}));return e(O,c)}{const e=xc(((e,t,r,n)=>{let P=Ua.runKernel(pP,g,b);return n([t,e,P,r]),D&&(P=Qv(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:m}}));return e(O,c,h)}}const mh=Xa({fusedDepthwiseConv2d_:ph});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function gh({a:e,b:t,transposeA:r=!1,transposeB:n=!1,bias:P,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:u=.2}){if(!1===ih(Ua.state.gradientDepth,a)){let s=Gu(e,t,r,n);return null!=P&&(s=Us(s,P)),vh(s,a,o,u)}let s=Ba(e,"a","fused matMul"),v=Ba(t,"b","fused matMul");[s,v]=Ia(s,v);const i=r?s.shape[s.rank-2]:s.shape[s.rank-1],l=n?v.shape[v.rank-1]:v.shape[v.rank-2],c=r?s.shape[s.rank-1]:s.shape[s.rank-2],O=n?v.shape[v.rank-2]:v.shape[v.rank-1],D=s.shape.slice(0,-2),j=v.shape.slice(0,-2),h=Ee(D),p=Ee(j);xe(i===l,(()=>`Error in fused matMul: inner shapes (${i}) and (${l}) of Tensors with shapes ${s.shape} and ${v.shape} and transposeA=${r} and transposeB=${n} must match.`));const m=os(s.shape.slice(0,-2),v.shape.slice(0,-2)).concat([c,O]),g=Qv(s,r?[h,i,c]:[h,c,i]),b=Qv(v,n?[p,O,l]:[p,l,O]);let T,z;null!=P&&(T=Ba(P,"bias","fused matMul"),[T]=Ia(T,s),os(m,T.shape)),null!=o&&(z=Ba(o,"prelu weights","fused matMul"));const d=(e,t)=>{const[o,u,s,v]=t,i=uh(Qv(e,s.shape),s,a);let l,c;if(r||n?!r&&n?(l=Gu(i,u,!1,!1),c=Gu(i,o,!0,!1)):r&&!n?(l=Gu(u,i,!1,!0),c=Gu(o,i,!1,!1)):(l=Gu(u,i,!0,!0),c=Gu(i,o,!0,!0)):(l=Gu(i,u,!1,!0),c=Gu(o,i,!0,!1)),null!=P){return[l,c,sh(v,i)]}return[l,c]},y={a:g,b:b,bias:T,preluActivationWeights:z},w={transposeA:r,transposeB:n,activation:a,leakyreluAlpha:u};if(null==P){const e=xc(((e,t,r)=>{const n=Ua.runKernel(jP,y,w);return r([e,t,n]),{value:Qv(n,m),gradFunc:d}}));return e(g,b)}{const e=xc(((e,t,r,n)=>{const P=Ua.runKernel(jP,y,w);return n([e,t,P,r]),{value:Qv(P,m),gradFunc:d}}));return e(g,b,T)}}const bh=Xa({fusedMatMul_:gh});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var K=Object.freeze({__proto__:null,conv2d:ch,depthwiseConv2d:mh,matMul:bh});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Th(e){return rh(e,.54,.46)}const zh=Xa({hammingWindow_:Th});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function dh(e){return rh(e,.5,.5)}const yh=Xa({hannWindow_:dh});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function wh(e,t,r,n=!1,P=0){let a=0;const o=[];for(;a+t<=e.size;)o.push(Bv(e,a,t)),a+=r;if(n)for(;a<e.size;){const n=a+t-e.size,u=Kv([Bv(e,a,t-n),rc([n],P)]);o.push(u),a+=r}return 0===o.length?zj([],[0,t]):Qv(Kv(o),[o.length,t])}const Lh=Xa({frame_:wh});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function fh(e,t,r,n,P=yh){null==n&&(n=th(t));const a=Lh(e,t,r),o=Rs(a,P(t));return sj(o,n)}const Ih=Xa({stft_:fh});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Sh(e,t,r,n,P="bilinear",a=0){const o=Ba(e,"image","cropAndResize"),u=Ba(t,"boxes","cropAndResize","float32"),s=Ba(r,"boxInd","cropAndResize","int32"),v=u.shape[0];xe(4===o.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`)),xe(2===u.rank&&4===u.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${v},4] but had shape ${u.shape}.`)),xe(1===s.rank&&s.shape[0]===v,(()=>`Error in cropAndResize: boxInd must be have size [${v}] but had shape ${u.shape}.`)),xe(2===n.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${n.length}.`)),xe(n[0]>=1&&n[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${n}`)),xe("bilinear"===P||"nearest"===P,(()=>`method must be bilinear or nearest, but was ${P}`));const i={image:o,boxes:u,boxInd:s},l={method:P,extrapolationValue:a,cropSize:n};return Ua.runKernel(or,i,l)}const Ah=Xa({cropAndResize_:Sh});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function xh(e){const t=Ba(e,"image","flipLeftRight","float32");xe(4===t.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`));const r={image:t};return Ua.runKernel(yr,r,{})}const Yh=Xa({flipLeftRight_:xh});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function kh(e){const t=Ba(e,"image","grayscaleToRGB"),r=t.rank-1,n=t.shape[r];xe(t.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`)),xe(1===n,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${n}.`));const P=new Array(t.rank);return P.fill(1,0,r),P[r]=3,$l(t,P)}const Ch=Xa({grayscaleToRGB_:kh});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Eh(e,t,r=0,n=.5){const P=Ba(e,"image","rotateWithOffset","float32");xe(4===P.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${P.rank}.`));const a={image:P},o={radians:t,fillValue:r,center:n};return Ua.runKernel(DP,a,o)}const Qh=Xa({rotateWithOffset_:Eh});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Wh(e,t,r,n,P,a){null==n&&(n=.5),null==P&&(P=Number.NEGATIVE_INFINITY),null==a&&(a=0);const o=e.shape[0];return r=Math.min(r,o),xe(0<=n&&n<=1,(()=>`iouThreshold must be in [0, 1], but was '${n}'`)),xe(2===e.rank,(()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`)),xe(4===e.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`)),xe(1===t.rank,(()=>"scores must be a 1D tensor")),xe(t.shape[0]===o,(()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`)),xe(0<=a&&a<=1,(()=>`softNmsSigma must be in [0, 1], but was '${a}'`)),{maxOutputSize:r,iouThreshold:n,scoreThreshold:P,softNmsSigma:a}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Uh(e,t,r,n=.5,P=Number.NEGATIVE_INFINITY){const a=Ba(e,"boxes","nonMaxSuppression","float32"),o=Ba(t,"scores","nonMaxSuppression","float32"),u=Wh(a,o,r,n,P),s={maxOutputSize:r=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:P=u.scoreThreshold};return Ua.runKernel(sn,{boxes:a,scores:o},s)}const qh=Xa({nonMaxSuppression_:Uh});
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Gh(e,t,r){const n=Mh(e,t,r),P=n<0?-(n+1):n;e.splice(P,0,t)}function Mh(e,t,r){return Nh(e,t,r||Kh)}function Kh(e,t){return e>t?1:e<t?-1:0}function Nh(e,t,r){let n=0,P=e.length,a=0,o=!1;for(;n<P;){a=n+(P-n>>>1);const u=r(t,e[a]);u>0?n=a+1:(P=a,o=!u)}return o?n:-n-1}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Rh(e,t,r,n,P){return Zh(e,t,r,n,P,0)}function Fh(e,t,r,n,P,a){return Zh(e,t,r,n,P,0,!1,a,!0)}function Bh(e,t,r,n,P,a){return Zh(e,t,r,n,P,a,!0)}function Zh(e,t,r,n,P,a,o=!1,u=!1,s=!1){const v=[];for(let e=0;e<t.length;e++)t[e]>P&&v.push({score:t[e],boxIndex:e,suppressBeginIndex:0});v.sort(Hh);const i=a>0?-.5/a:0,l=[],c=[];for(;l.length<r&&v.length>0;){const t=v.pop(),{score:r,boxIndex:a,suppressBeginIndex:o}=t;if(r<P)break;let u=!1;for(let r=l.length-1;r>=o;--r){const o=Vh(e,a,l[r]);if(o>=n){u=!0;break}if(t.score=t.score*Xh(n,i,o),t.score<=P)break}t.suppressBeginIndex=l.length,u||(t.score===r?(l.push(a),c.push(t.score)):t.score>P&&Gh(v,t,Hh))}const O=l.length,D=r-O;u&&D>0&&(l.push(...new Array(D).fill(0)),c.push(...new Array(D).fill(0)));const j={selectedIndices:l};return o&&(j.selectedScores=c),s&&(j.validOutputs=O),j}function Vh(e,t,r){const n=e.subarray(4*t,4*t+4),P=e.subarray(4*r,4*r+4),a=Math.min(n[0],n[2]),o=Math.min(n[1],n[3]),u=Math.max(n[0],n[2]),s=Math.max(n[1],n[3]),v=Math.min(P[0],P[2]),i=Math.min(P[1],P[3]),l=Math.max(P[0],P[2]),c=Math.max(P[1],P[3]),O=(u-a)*(s-o),D=(l-v)*(c-i);if(O<=0||D<=0)return 0;const j=Math.max(a,v),h=Math.max(o,i),p=Math.min(u,l),m=Math.min(s,c),g=Math.max(p-j,0)*Math.max(m-h,0);return g/(O+D-g)}function Xh(e,t,r){const n=Math.exp(t*r*r);return r<=e?n:0}function Hh(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function Jh(e,t,r,n=.5,P=Number.NEGATIVE_INFINITY){const a=Ba(e,"boxes","nonMaxSuppressionAsync"),o=Ba(t,"scores","nonMaxSuppressionAsync"),u=Wh(a,o,r,n,P);r=u.maxOutputSize,n=u.iouThreshold,P=u.scoreThreshold;const s=await Promise.all([a.data(),o.data()]),v=s[0],i=s[1],{selectedIndices:l}=Rh(v,i,r,n,P);return a!==e&&a.dispose(),o!==t&&o.dispose(),Tj(l,"int32")}const _h=Jh;
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $h(e,t,r,n=.5,P=Number.NEGATIVE_INFINITY,a=0){const o=Ba(e,"boxes","nonMaxSuppression"),u=Ba(t,"scores","nonMaxSuppression"),s=Wh(o,u,r,n,P,a),v={boxes:o,scores:u},i={maxOutputSize:r=s.maxOutputSize,iouThreshold:n=s.iouThreshold,scoreThreshold:P=s.scoreThreshold,softNmsSigma:a=s.softNmsSigma},l=Ua.runKernel(ln,v,i);return{selectedIndices:l[0],selectedScores:l[1]}}const ep=Xa({nonMaxSuppressionWithScore_:$h});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function tp(e,t,r,n=.5,P=Number.NEGATIVE_INFINITY,a=0){const o=Ba(e,"boxes","nonMaxSuppressionAsync"),u=Ba(t,"scores","nonMaxSuppressionAsync"),s=Wh(o,u,r,n,P,a);r=s.maxOutputSize,n=s.iouThreshold,P=s.scoreThreshold,a=s.softNmsSigma;const v=await Promise.all([o.data(),u.data()]),i=v[0],l=v[1],{selectedIndices:c,selectedScores:O}=Bh(i,l,r,n,P,a);return o!==e&&o.dispose(),u!==t&&u.dispose(),{selectedIndices:Tj(c,"int32"),selectedScores:Tj(O)}}const rp=tp;
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function np(e,t,r,n=.5,P=Number.NEGATIVE_INFINITY,a=!1){const o=Ba(e,"boxes","nonMaxSuppression"),u=Ba(t,"scores","nonMaxSuppression"),s=Wh(o,u,r,n,P,null),v={boxes:o,scores:u},i={maxOutputSize:s.maxOutputSize,iouThreshold:s.iouThreshold,scoreThreshold:s.scoreThreshold,padToMaxOutputSize:a},l=Ua.runKernel(vn,v,i);return{selectedIndices:l[0],validOutputs:l[1]}}const Pp=Xa({nonMaxSuppressionPadded_:np});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */async function ap(e,t,r,n=.5,P=Number.NEGATIVE_INFINITY,a=!1){const o=Ba(e,"boxes","nonMaxSuppressionAsync"),u=Ba(t,"scores","nonMaxSuppressionAsync"),s=Wh(o,u,r,n,P,null),v=s.maxOutputSize,i=s.iouThreshold,l=s.scoreThreshold,[c,O]=await Promise.all([o.data(),u.data()]),{selectedIndices:D,validOutputs:j}=Fh(c,O,v,i,l,a);return o!==e&&o.dispose(),u!==t&&u.dispose(),{selectedIndices:Tj(D,"int32"),validOutputs:Cl(j,"int32")}}const op=ap;
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function up(e,t,r=!1,n=!1){const P=Ba(e,"images","resizeBilinear");xe(3===P.rank||4===P.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${P.rank}.`)),xe(2===t.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`)),xe(!1===n||!1===r,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let a=P,o=!1;3===P.rank&&(o=!0,a=Qv(P,[1,P.shape[0],P.shape[1],P.shape[2]]));const u={images:a},s={alignCorners:r,halfPixelCenters:n,size:t},v=Ua.runKernel(wn,u,s);return o?Qv(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const sp=Xa({resizeBilinear_:up});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function vp(e,t,r=!1,n=!1){const P=Ba(e,"images","resizeNearestNeighbor");xe(3===P.rank||4===P.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${P.rank}.`)),xe(2===t.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`)),xe("float32"===P.dtype||"int32"===P.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),xe(!1===n||!1===r,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let a=P,o=!1;3===P.rank&&(o=!0,a=Qv(P,[1,P.shape[0],P.shape[1],P.shape[2]]));const u={images:a},s={alignCorners:r,halfPixelCenters:n,size:t},v=Ua.runKernel(yn,u,s);return o?Qv(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const ip=Xa({resizeNearestNeighbor_:vp});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lp(e,t="binary",r=!1,n=.5){const P=Ba(e,"image","threshold"),a=P.shape[0]*P.shape[1];let o,u,s,v,i=Rs(Tj([n]),255);if(xe(3===P.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${P.rank}.`)),xe(3===P.shape[2]||1===P.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${P.shape[2]}.`)),xe("int32"===P.dtype||"float32"===P.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${P.dtype}.`)),xe("otsu"===t||"binary"===t,(()=>`Method must be binary or otsu, but was ${t}`)),3===P.shape[2]){[o,u,s]=oj(P,[1,1,1],-1);const e=Rs(o,.2989),t=Rs(u,.587),r=Rs(s,.114);v=Us(Us(e,t),r)}else v=e;if("otsu"===t){i=cp(vi(uu(ID(v),"int32"),$a([]),256),a)}const l=r?zc(v,i):sc(v,i);return uu(Rs(l,255),"int32")}function cp(e,t){let r,n,P,a,o,u,s=Tj([-1]),v=Tj([0]),i=Tj([0]);for(let l=0;l<e.size-1;l++){r=Bv(e,0,l+1),n=Bv(e,l+1),o=Ks(Gl(r),t),u=Ks(Gl(n),t);const c=Gl(Rs(r,iD(0,r.size)));P=Ks(c,Gl(r));const O=rc(n.shape,r.size),D=Us(iD(0,n.size),O),j=Rs(n,D);a=Ks(Gl(j),Gl(n));const h=Wc(P,a),p=Wc(P,a),m=Rs(o,u);i=Rs(Rs(m,h),p);const g=sc(i,v);v=ul(g,i,v),s=ul(g,Tj([l]),s)}return s}const Op=Xa({threshold_:lp});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Dp(e,t,r="nearest",n="constant",P=0,a){const o=Ba(e,"image","transform","float32"),u=Ba(t,"transforms","transform","float32");xe(4===o.rank,(()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`)),xe(2===u.rank&&(u.shape[0]===o.shape[0]||1===u.shape[0])&&8===u.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),xe(null==a||2===a.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`));const s={image:o,transforms:u},v={interpolation:r,fillMode:n,fillValue:P,outputShape:a};return Ua.runKernel(oP,s,v)}const jp=Xa({transform_:Dp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function hp(e,t,r){xe(t%1==0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),xe(r%1==0,(()=>`bandPart(): numUpper must be an integer, got ${r}.`));const n=Ba(e,"a","bandPart");xe(n.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${n.rank}.`));const P=n.shape,[a,o]=n.shape.slice(-2);if(!(t<=a))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`);if(!(r<=o))throw new Error(`bandPart(): numUpper (${r}) must not be greater than the number of columns (${o}).`);t<0&&(t=a),r<0&&(r=o);const u=Qv(iD(0,a,1,"int32"),[-1,1]),s=iD(0,o,1,"int32"),v=Wc(u,s),i=Nc(zc(v,Cl(+t,"int32")),ic(v,Cl(-r,"int32"))),l=iO([a,o],n.dtype);return Qv(Dj(Ej(Qv(n,[-1,a,o])).map((e=>ul(i,e,l)))),P)}const pp=Xa({bandPart_:hp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function mp(e){let t;if(Array.isArray(e)){t=!1,xe(null!=e&&e.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const r=e[0].shape[0];for(let t=1;t<e.length;++t)xe(e[t].shape[0]===r,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${r})`))}else t=!0,e=oj(e,e.shape[0],0).map((e=>cj(e,[0])));xe(e.length<=e[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`));const r=[],n=e;for(let t=0;t<e.length;++t)r.push(Ua.tidy((()=>{let e=n[t];if(t>0)for(let n=0;n<t;++n){const t=Rs(Gl(Rs(r[n],e)),r[n]);e=Wc(e,t)}return Ks(e,Nl(e,"euclidean"))})));return t?Dj(r,0):r}const gp=Xa({gramSchmidt_:mp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function bp(e,t=!1){if(xe(e.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`)),2===e.rank)return Tp(e,t);{const r=e.shape.slice(0,e.shape.length-2).reduce(((e,t)=>e*t)),n=Ej(Qv(e,[r,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),P=[],a=[];n.forEach((e=>{const[r,n]=Tp(e,t);P.push(r),a.push(n)}));return[Qv(Dj(P,0),e.shape),Qv(Dj(a,0),e.shape)]}}function Tp(e,t=!1){return Ua.tidy((()=>{xe(2===e.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`));const r=e.shape[0],n=e.shape[1];let P=tc(r),a=vu(e);const o=zj([[1]],[1,1]);let u=vu(o);const s=r>=n?n:r;for(let e=0;e<s;++e){const t=a,s=u,v=P;[u,a,P]=Ua.tidy((()=>{const t=Bv(a,[e,e],[r-e,1]),s=Nl(t),v=Bv(a,[e,e],[1,1]),i=ul(sc(v,0),zj([[-1]]),zj([[1]])),l=Wc(v,Rs(i,s)),c=Ks(t,l);u=1===c.shape[0]?vu(o):Kv([o,Bv(c,[1,0],[c.shape[0]-1,c.shape[1]])],0);const O=_u(Ks(Gu(i,l),s)),D=Bv(a,[e,0],[r-e,n]),j=Rs(O,u),h=rs(u);if(0===e)a=Wc(D,Gu(j,Gu(h,D)));else{const t=Wc(D,Gu(j,Gu(h,D)));a=Kv([Bv(a,[0,0],[e,n]),t],0)}const p=rs(j),m=Bv(P,[0,e],[r,P.shape[1]-e]);if(0===e)P=Wc(m,Gu(Gu(m,u),p));else{const t=Wc(m,Gu(Gu(m,u),p));P=Kv([Bv(P,[0,0],[r,e]),t],1)}return[u,a,P]})),Bu([t,s,v])}return!t&&r>n&&(P=Bv(P,[0,0],[r,n]),a=Bv(a,[0,0],[n,n])),[P,a]}))}const zp=Xa({qr_:bp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var N;function dp(e,t,r=N.SUM_BY_NONZERO_WEIGHTS){const n=Ba(e,"losses","computeWeightedLoss");let P=null;null!=t&&(P=Ba(t,"weights","computeWeightedLoss"));const a=null==P?n:Rs(n,P);if(r===N.NONE)return a;if(r===N.SUM)return Gl(a);if(r===N.MEAN){if(null==P)return vO(a);{const e=n.size/P.size,t=Ks(Gl(a),Gl(P));return e>1?Ks(t,Cl(e)):t}}if(r===N.SUM_BY_NONZERO_WEIGHTS){if(null==P)return Ks(Gl(a),Cl(n.size));{const e=Rs(P,lO(n.shape)),t=uu(Gl(LO(e,Cl(0))),"float32");return Ks(Gl(a),t)}}throw Error(`Unknown reduction: ${r}`)}!function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(N||(N={}));const yp=Xa({computeWeightedLoss_:dp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function wp(e,t,r,n=N.SUM_BY_NONZERO_WEIGHTS){const P=Ba(e,"labels","absoluteDifference"),a=Ba(t,"predictions","absoluteDifference");let o=null;null!=r&&(o=Ba(r,"weights","absoluteDifference")),Ye(P.shape,a.shape,"Error in absoluteDifference: ");const u=Bs(Wc(P,a));return yp(u,o,n)}const Lp=Xa({absoluteDifference_:wp});function fp(e,t,r,n,P=N.SUM_BY_NONZERO_WEIGHTS){const a=Ba(e,"labels","cosineDistance"),o=Ba(t,"predictions","cosineDistance");let u=null;null!=n&&(u=Ba(n,"weights","cosineDistance")),Ye(a.shape,o.shape,"Error in cosineDistance: ");const s=Cl(1),v=Wc(s,Gl(Rs(a,o),r,!0));return yp(v,u,P)}const Ip=Xa({cosineDistance_:fp});function Sp(e,t,r,n=N.SUM_BY_NONZERO_WEIGHTS){let P=Ba(e,"labels","hingeLoss");const a=Ba(t,"predictions","hingeLoss");let o=null;null!=r&&(o=Ba(r,"weights","hingeLoss")),Ye(P.shape,a.shape,"Error in hingeLoss: ");const u=Cl(1);P=Wc(Rs(Cl(2),P),u);const s=DD(Wc(u,Rs(P,a)));return yp(s,o,n)}const Ap=Xa({hingeLoss_:Sp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function xp(e,t,r,n=1,P=N.SUM_BY_NONZERO_WEIGHTS){const a=Ba(e,"labels","huberLoss"),o=Ba(t,"predictions","huberLoss");let u=null;null!=r&&(u=Ba(r,"weights","huberLoss")),Ye(a.shape,o.shape,"Error in huberLoss: ");const s=Cl(n),v=Bs(Wc(o,a)),i=DO(v,s),l=Wc(v,i),c=Us(Rs(Cl(.5),Ul(i)),Rs(s,l));return yp(c,u,P)}const Yp=Xa({huberLoss_:xp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function kp(e,t,r,n=1e-7,P=N.SUM_BY_NONZERO_WEIGHTS){const a=Ba(e,"labels","logLoss"),o=Ba(t,"predictions","logLoss");let u=null;null!=r&&(u=Ba(r,"weights","logLoss")),Ye(a.shape,o.shape,"Error in logLoss: ");const s=Cl(1),v=Cl(n),i=_u(Rs(a,fc(Us(o,v)))),l=Rs(Wc(s,a),fc(Us(Wc(s,o),v))),c=Wc(i,l);return yp(c,u,P)}const Cp=Xa({logLoss_:kp});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ep(e,t,r,n=N.SUM_BY_NONZERO_WEIGHTS){const P=Ba(e,"labels","meanSquaredError"),a=Ba(t,"predictions","meanSquaredError");let o=null;null!=r&&(o=Ba(r,"weights","meanSquaredError")),Ye(P.shape,a.shape,"Error in meanSquaredError: ");const u=ij(P,a);return yp(u,o,n)}const Qp=Xa({meanSquaredError_:Ep});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Wp(e,t){const r=Ba(e,"labels","sigmoidCrossEntropyWithLogits"),n=Ba(t,"logits","sigmoidCrossEntropyWithLogits");Ye(r.shape,n.shape,"Error in sigmoidCrossEntropyWithLogits: ");const P=DD(n),a=Rs(n,r),o=Sc(Zl(_u(Bs(n))));return Us(Wc(P,a),o)}function Up(e,t,r,n=0,P=N.SUM_BY_NONZERO_WEIGHTS){let a=Ba(e,"multiClassLabels","sigmoidCrossEntropy");const o=Ba(t,"logits","sigmoidCrossEntropy");let u=null;if(null!=r&&(u=Ba(r,"weights","sigmoidCrossEntropy")),Ye(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),n>0){const e=Cl(n),t=Cl(1),r=Cl(.5);a=Us(Rs(a,Wc(t,e)),Rs(r,e))}const s=Wp(a,o);return yp(s,u,P)}const qp=Xa({sigmoidCrossEntropy_:Up});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Gp(e,t,r=-1){if(-1===r&&(r=t.rank-1),r!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${r}`);const n=xc(((e,t,n)=>{const P=Mc(t,[r],!0),a=Wc(uu(t,"float32"),P);n([e,a]);const o=_u(Rs(a,e));return{value:Gl(o,[r]),gradFunc:(e,t)=>{const[n,P]=t,a=dl(e.shape,[r]);return[Rs(Qv(e,a),Wc(uu(n,"float32"),Zl(P))),Rs(Qv(e,a),Wc(Zl(P),uu(n,"float32")))]}}}));return n(e,t)}function Mp(e,t,r,n=0,P=N.SUM_BY_NONZERO_WEIGHTS){let a=Ba(e,"onehotLabels","softmaxCrossEntropy");const o=Ba(t,"logits","softmaxCrossEntropy");let u=null;if(null!=r&&(u=Ba(r,"weights","softmaxCrossEntropy")),Ye(a.shape,o.shape,"Error in softmaxCrossEntropy: "),n>0){const e=Cl(n),t=Cl(1),r=Cl(a.shape[1]);a=Us(Rs(a,Wc(t,e)),Ks(e,r))}const s=Gp(a,o);return yp(s,u,P)}const Kp=Xa({softmaxCrossEntropy_:Mp});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Np(e,t,r,n){const P=Ba(e,"indices","sparseFillEmptyRows","int32"),a=Ba(t,"values","sparseFillEmptyRows"),o=Ba(r,"denseShape","sparseFillEmptyRows","int32"),u=Ba(n,"defaultValue","sparseFillEmptyRows",a.dtype);if(2!==P.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${P.shape}`);if(1!==a.rank)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(1!==o.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(0!==u.rank)throw new Error(`Default value should be a scalar but received shape ${u.shape}`);const s={indices:P,values:a,denseShape:o,defaultValue:u},v=Ua.runKernel(Fn,s);return{outputIndices:v[0],outputValues:v[1],emptyRowIndicator:v[2],reverseIndexMap:v[3]}}const Rp=Xa({sparseFillEmptyRows_:Np});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Fp(e,t,r){const n=Ba(e,"inputIndices","sparseReshape","int32"),P=Ba(t,"inputShape","sparseReshape","int32"),a=Ba(r,"newShape","sparseReshape","int32");if(2!==n.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${n.shape}`);if(1!==P.rank)throw new Error(`Input shape should be Tensor1D but received shape ${P.shape}`);if(1!==a.rank)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:n,inputShape:P,newShape:a},u=Ua.runKernel(Bn,o);return{outputIndices:u[0],outputShape:u[1]}}const Bp=Xa({sparseReshape_:Fp});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Zp(e,t,r){const n=Ba(e,"data","sparseSegmentMean"),P=Ba(t,"indices","sparseSegmentMean","int32"),a=Ba(r,"segmentIds","sparseSegmentMean","int32");if(n.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==P.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${P.shape}`);if(1!==a.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${a.shape}`);const o={data:n,indices:P,segmentIds:a};return Ua.runKernel(Zn,o)}const Vp=Xa({sparseSegmentMean_:Zp});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Xp(e,t,r){const n=Ba(e,"data","sparseSegmentSum"),P=Ba(t,"indices","sparseSegmentSum","int32"),a=Ba(r,"segmentIds","sparseSegmentSum","int32");if(n.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==P.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${P.shape}`);if(1!==a.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${a.shape}`);const o={data:n,indices:P,segmentIds:a};return Ua.runKernel(Vn,o)}const Hp=Xa({sparseSegmentSum_:Xp});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Jp(e,t,r,n,P,a,o,u){const s=Ba(e,"data","stringNGrams","string");if("string"!==s.dtype)throw new Error("Data must be of datatype string");if(1!==s.shape.length)throw new Error(`Data must be a vector, saw: ${s.shape}`);const v=Ba(t,"dataSplits","stringNGrams");if("int32"!==v.dtype)throw new Error("Data splits must be of datatype int32");const i={separator:r,nGramWidths:n,leftPad:P,rightPad:a,padWidth:o,preserveShortSequences:u},l={data:s,dataSplits:v},c=Ua.runKernel(_n,l,i);return{nGrams:c[0],nGramsSplits:c[1]}}const _p=Xa({stringNGrams_:Jp});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $p(e,t,r=!0){const n=Ba(e,"input","stringSplit","string"),P=Ba(t,"delimiter","stringSplit","string");if(1!==n.rank)throw new Error(`Input should be Tensor1D but received shape ${n.shape}`);if(0!==P.rank)throw new Error(`Delimiter should be a scalar but received shape ${P.shape}`);const a={skipEmpty:r},o={input:n,delimiter:P},u=Ua.runKernel($n,o,a);return{indices:u[0],values:u[1],shape:u[2]}}const em=Xa({stringSplit_:$p});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function tm(e,t){const r=Ba(e,"input","stringToHashBucketFast","string"),n={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const P={input:r};return Ua.runKernel(eP,P,n)}const rm=Xa({stringToHashBucketFast_:tm}),nm={fft:ej,ifft:rj,rfft:sj,irfft:Pj},Pm={hammingWindow:zh,hannWindow:yh,frame:Lh,stft:Ih},am={flipLeftRight:Yh,grayscaleToRGB:Ch,resizeNearestNeighbor:ip,resizeBilinear:sp,rotateWithOffset:Qh,cropAndResize:Ah,nonMaxSuppression:qh,nonMaxSuppressionAsync:_h,nonMaxSuppressionWithScore:ep,nonMaxSuppressionWithScoreAsync:rp,nonMaxSuppressionPadded:Pp,nonMaxSuppressionPaddedAsync:op,threshold:Op,transform:jp},om={bandPart:pp,gramSchmidt:gp,qr:zp},um={absoluteDifference:Lp,computeWeightedLoss:yp,cosineDistance:Ip,hingeLoss:Ap,huberLoss:Yp,logLoss:Cp,meanSquaredError:Qp,sigmoidCrossEntropy:qp,softmaxCrossEntropy:Kp},sm={sparseFillEmptyRows:Rp,sparseReshape:Bp,sparseSegmentMean:Vp,sparseSegmentSum:Hp},vm={stringNGrams:_p,stringSplit:em,stringToHashBucketFast:rm};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class im extends Cs{minimize(e,t=!1,r){const{value:n,grads:P}=this.computeGradients(e,r);if(null!=r){const e=r.map((e=>({name:e.name,tensor:P[e.name]})));this.applyGradients(e)}else this.applyGradients(P);return Bu(P),t?n:(n.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return Ac(e,t)}dispose(){null!=this.iterations_&&Bu(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:Cl(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(im,Symbol.hasInstance,{value:e=>null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class lm extends im{constructor(e,t,r=null){super(),this.learningRate=e,this.rho=t,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==r&&(this.epsilon=Ua.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,r)=>{const n=Ua.registeredVariables[t];null==this.accumulatedGrads[r]&&(this.accumulatedGrads[r]={originalName:`${t}/accum_grad`,variable:Fu((()=>vl(n).variable(false)))}),null==this.accumulatedUpdates[r]&&(this.accumulatedUpdates[r]={originalName:`${t}/accum_var`,variable:Fu((()=>vl(n).variable(false)))});const P=Array.isArray(e)?e[r].tensor:e[t];if(null==P)return;const a=this.accumulatedGrads[r].variable,o=this.accumulatedUpdates[r].variable;Fu((()=>{const e=Us(Rs(a,this.rho),Rs(Ul(P),1-this.rho)),t=Rs(Ks(Ql(Us(o,this.epsilon)),Ql(Us(a,this.epsilon))),P),r=Us(Rs(o,this.rho),Rs(Ul(t),1-this.rho));a.assign(e),o.assign(r);const u=Us(Rs(t,-this.learningRate),n);n.assign(u)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&(Bu(this.accumulatedGrads.map((e=>e.variable))),Bu(this.accumulatedUpdates.map((e=>e.variable))))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){const t=(e=await this.extractIterations(e)).length/2;this.accumulatedGrads=e.slice(0,t).map((e=>({originalName:e.name,variable:e.tensor.variable(false)}))),this.accumulatedUpdates=e.slice(t,2*t).map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}lm.className="Adadelta",Qs(lm);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class cm extends im{constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,r)=>{const n=Ua.registeredVariables[t];if(null==this.accumulatedGrads[r]){const e=!1;this.accumulatedGrads[r]={originalName:`${t}/accumulator`,variable:Fu((()=>rc(n.shape,this.initialAccumulatorValue).variable(e)))}}const P=Array.isArray(e)?e[r].tensor:e[t];if(null==P)return;const a=this.accumulatedGrads[r].variable;Fu((()=>{const e=Us(a,Ul(P));a.assign(e);const t=Us(Rs(Ks(P,Ql(Us(e,Ua.backend.epsilon()))),-this.learningRate),n);n.assign(t)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&Bu(this.accumulatedGrads.map((e=>e.variable)))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e);this.accumulatedGrads=e.map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}cm.className="Adagrad",Qs(cm);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Om extends im{constructor(e,t,r,n=null){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Fu((()=>{this.accBeta1=Cl(t).variable(),this.accBeta2=Cl(r).variable()})),null==n&&(this.epsilon=Ua.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);Fu((()=>{const r=Wc(1,this.accBeta1),n=Wc(1,this.accBeta2);t.forEach(((t,P)=>{const a=Ua.registeredVariables[t];null==this.accumulatedFirstMoment[P]&&(this.accumulatedFirstMoment[P]={originalName:`${t}/m`,variable:Fu((()=>vl(a).variable(false)))}),null==this.accumulatedSecondMoment[P]&&(this.accumulatedSecondMoment[P]={originalName:`${t}/v`,variable:Fu((()=>vl(a).variable(false)))});const o=Array.isArray(e)?e[P].tensor:e[t];if(null==o)return;const u=this.accumulatedFirstMoment[P].variable,s=this.accumulatedSecondMoment[P].variable,v=Us(Rs(u,this.beta1),Rs(o,1-this.beta1)),i=Us(Rs(s,this.beta2),Rs(Ul(o),1-this.beta2)),l=Ks(v,r),c=Ks(i,n);u.assign(v),s.assign(i);const O=Us(Rs(Ks(l,Us(Ql(c),this.epsilon)),-this.learningRate),a);a.assign(O)})),this.accBeta1.assign(Rs(this.accBeta1,this.beta1)),this.accBeta2.assign(Rs(this.accBeta2,this.beta2))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&Bu(this.accumulatedFirstMoment.map((e=>e.variable))),null!=this.accumulatedSecondMoment&&Bu(this.accumulatedSecondMoment.map((e=>e.variable)))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e),Fu((()=>{this.accBeta1.assign(kl(this.beta1,this.iterations_+1)),this.accBeta2.assign(kl(this.beta2,this.iterations_+1))}));const t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map((e=>({originalName:e.name,variable:e.tensor.variable(false)}))),this.accumulatedSecondMoment=e.slice(t,2*t).map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}Om.className="Adam",Qs(Om);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Dm extends im{constructor(e,t,r,n=null,P=0){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=n,this.decay=P,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Fu((()=>{this.iteration=Cl(0).variable(),this.accBeta1=Cl(t).variable()})),null==n&&(this.epsilon=Ua.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);Fu((()=>{const r=Wc(1,this.accBeta1),n=Ks(-this.learningRate,Us(Rs(this.iteration,this.decay),1));t.forEach(((t,P)=>{const a=Ua.registeredVariables[t];null==this.accumulatedFirstMoment[P]&&(this.accumulatedFirstMoment[P]={originalName:`${t}/m`,variable:vl(a).variable(false)}),null==this.accumulatedWeightedInfNorm[P]&&(this.accumulatedWeightedInfNorm[P]={originalName:`${t}/v`,variable:vl(a).variable(false)});const o=Array.isArray(e)?e[P].tensor:e[t];if(null==o)return;const u=this.accumulatedFirstMoment[P].variable,s=this.accumulatedWeightedInfNorm[P].variable,v=Us(Rs(u,this.beta1),Rs(o,1-this.beta1)),i=Rs(s,this.beta2),l=Bs(o),c=uO(i,l);u.assign(v),s.assign(c);const O=Us(Rs(Ks(n,r),Ks(v,Us(c,this.epsilon))),a);a.assign(O)})),this.iteration.assign(Us(this.iteration,1)),this.accBeta1.assign(Rs(this.accBeta1,this.beta1))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&Bu(this.accumulatedFirstMoment.map((e=>e.variable))),null!=this.accumulatedWeightedInfNorm&&Bu(this.accumulatedWeightedInfNorm.map((e=>e.variable)))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}Dm.className="Adamax",Qs(Dm);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class jm extends im{constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,r)=>{const n=Array.isArray(e)?e[r].tensor:e[t];if(null==n)return;const P=Ua.registeredVariables[t];Fu((()=>{const e=Us(Rs(this.c,n),P);P.assign(e)}))})),this.incrementIterations()}setLearningRate(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=Zu(Cl(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(0!==(e=await this.extractIterations(e)).length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}jm.className="SGD",Qs(jm);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class hm extends jm{constructor(e,t,r=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=r,this.accumulations=[],this.m=Cl(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,r)=>{const n=Ua.registeredVariables[t];if(null==this.accumulations[r]){const e=!1;this.accumulations[r]={originalName:`${t}/momentum`,variable:Fu((()=>vl(n).variable(e)))}}const P=this.accumulations[r].variable,a=Array.isArray(e)?e[r].tensor:e[t];null!=a&&Fu((()=>{let e;const t=Us(Rs(this.m,P),a);e=this.useNesterov?Us(Rs(this.c,Us(a,Rs(t,this.m))),n):Us(Rs(this.c,t),n),P.assign(t),n.assign(e)}))})),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&Bu(this.accumulations.map((e=>e.variable)))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e);this.accumulations=e.map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}hm.className="Momentum",Qs(hm);
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class pm extends im{constructor(e,t=.9,r=0,n=null,P=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=r,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=P,null==n&&(this.epsilon=Ua.backend.epsilon()),null==e)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,r)=>{const n=Ua.registeredVariables[t],P=!1;null==this.accumulatedMeanSquares[r]&&(this.accumulatedMeanSquares[r]={originalName:`${t}/rms`,variable:Fu((()=>vl(n).variable(P)))}),null==this.accumulatedMoments[r]&&(this.accumulatedMoments[r]={originalName:`${t}/momentum`,variable:Fu((()=>vl(n).variable(P)))}),null==this.accumulatedMeanGrads[r]&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${t}/mg`,variable:Fu((()=>vl(n).variable(P)))});const a=Array.isArray(e)?e[r].tensor:e[t];if(null==a)return;const o=this.accumulatedMeanSquares[r].variable,u=this.accumulatedMoments[r].variable;Fu((()=>{const e=Us(Rs(o,this.decay),Rs(Ul(a),1-this.decay));if(this.centered){const t=this.accumulatedMeanGrads[r].variable,P=Us(Rs(t,this.decay),Rs(a,1-this.decay)),s=Ks(Rs(a,this.learningRate),Ql(Wc(e,Us(Ul(P),this.epsilon)))),v=Us(Rs(u,this.momentum),s);o.assign(e),t.assign(P),u.assign(v);const i=Wc(n,v);n.assign(i)}else{const e=Us(Rs(o,this.decay),Rs(Ul(a),1-this.decay)),t=Us(Rs(u,this.momentum),Ks(Rs(a,this.learningRate),Ql(Us(e,this.epsilon))));o.assign(e),u.assign(t);const r=Wc(n,t);n.assign(r)}}))})),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&Bu(this.accumulatedMeanSquares.map((e=>e.variable))),null!=this.accumulatedMeanGrads&&this.centered&&Bu(this.accumulatedMeanGrads.map((e=>e.variable))),null!=this.accumulatedMoments&&Bu(this.accumulatedMoments.map((e=>e.variable)))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,t).map((e=>({originalName:e.name,variable:e.tensor.variable(r)}))),this.accumulatedMoments=e.slice(t,2*t).map((e=>({originalName:e.name,variable:e.tensor.variable(r)}))),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map((e=>({originalName:e.name,variable:e.tensor.variable(r)}))))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}pm.className="RMSProp",Qs(pm);
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
const mm="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:e=>e();
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function gm(e,t){const r=e[0].length;e.forEach(((e,t)=>{xe(e.length===r,(()=>`Error in concat${r}D: rank of tensors[${t}] must be the same as the rank of the rest (${r})`))})),xe(t>=0&&t<r,(()=>`Error in concat${r}D: axis must be between 0 and ${r-1}.`));const n=e[0];e.forEach(((e,P)=>{for(let a=0;a<r;a++)xe(a===t||e[a]===n[a],(()=>`Error in concat${r}D: Shape of tensors[${P}] (${e}) does not match the shape of the rest (${n}) along the non-concatenated axis ${P}.`))}))}function bm(e,t){const r=e[0].slice();for(let n=1;n<e.length;n++)r[t]+=e[n][t];return r}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Tm=30;function zm(e){return e<=Tm?e:nt(e,Math.floor(Math.sqrt(e)))}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function dm(e,t,r){return[r*("number"==typeof e?e:e[0]),t*("number"==typeof e?e:e[1])]}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ym(e,t,r,n=!0){let P=[];if(n)P=P.concat(t.slice(0)),P.push(e[0]/r),P=P.concat(e.slice(1));else{P=P.concat(e[0]);const r=t.length;for(let n=0;n<r;++n)P=P.concat([e[n+1]/t[n],t[n]]);P=P.concat(e.slice(r+1))}return P}function wm(e,t,r=!0){const n=[];if(r){n.push(t);for(let r=t+1;r<e;++r)r<=2*t?(n.push(r),n.push(r-(t+1))):n.push(r)}else{const r=[],P=[];for(let n=1;n<e;++n)n>=2*t+1||n%2==1?P.push(n):r.push(n);n.push(...r),n.push(0),n.push(...P)}return n}function Lm(e,t,r,n=!0){const P=[];n?P.push(e[0]/r):P.push(e[0]*r);for(let r=1;r<e.length;++r)r<=t.length?n?P.push(t[r-1]*e[r]):P.push(e[r]/t[r-1]):P.push(e[r]);return P}function fm(e,t){const r=[0];for(let n=0;n<t;++n)r.push(e[n][0]);return r}function Im(e,t,r){const n=e.slice(0,1);for(let P=0;P<r;++P)n.push(e[P+1]-t[P][0]-t[P][1]);return n}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Sm=1.7580993408473768,Am=1.0507009873554805,xm=.3275911,Ym=.254829592,km=-.284496736,Cm=1.421413741,Em=-1.453152027,Qm=1.061405429;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function Wm(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const r=new Float32Array(2*e.length);for(let n=0;n<r.length;n+=2)r[n]=e[n/2],r[n+1]=t[n/2];return r}function Um(e){const t=new Float32Array(e.length/2),r=new Float32Array(e.length/2);for(let n=0;n<e.length;n+=2)t[n/2]=e[n],r[n/2]=e[n+1];return{real:t,imag:r}}function qm(e){const t=Math.ceil(e.length/4),r=new Float32Array(t),n=new Float32Array(t);for(let t=0;t<e.length;t+=4)r[Math.floor(t/4)]=e[t],n[Math.floor(t/4)]=e[t+1];return{real:r,imag:n}}function Gm(e){const t=Math.floor(e.length/4),r=new Float32Array(t),n=new Float32Array(t);for(let t=2;t<e.length;t+=4)r[Math.floor(t/4)]=e[t],n[Math.floor(t/4)]=e[t+1];return{real:r,imag:n}}function Mm(e,t){return{real:e[2*t],imag:e[2*t+1]}}function Km(e,t,r,n){e[2*n]=t,e[2*n+1]=r}function Nm(e,t){const r=new Float32Array(e/2),n=new Float32Array(e/2);for(let P=0;P<Math.ceil(e/2);P++){const a=(t?2:-2)*Math.PI*(P/e);r[P]=Math.cos(a),n[P]=Math.sin(a)}return{real:r,imag:n}}function Rm(e,t,r){const n=(r?2:-2)*Math.PI*(e/t);return{real:Math.cos(n),imag:Math.sin(n)}}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Fm="->",Bm=/->/g,Zm=",",Vm="...";function Xm(e,t){const r=((e=e.replace(/\s/g,"")).length-e.replace(Bm,"").length)/Fm.length;if(r<1)throw new Error("Equations without an arrow are not supported.");if(r>1)throw new Error(`Equation must contain exactly one arrow ("${Fm}").`);const[n,P]=e.split(Fm);xe(-1===n.indexOf(Vm),(()=>`The ellipsis notation ("${Vm}") is not supported yet.`));const a=n.split(Zm),o=a.length;if(t!==o)throw new Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const u=[];for(let e=0;e<P.length;++e){const t=P[e];if(!a.some((e=>-1!==e.indexOf(t))))throw new Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===u.indexOf(t)&&u.push(t)}for(let e=0;e<n.length;++e){const t=n[e];-1===u.indexOf(t)&&t!==Zm&&u.push(t)}const s=new Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split("")).size!==a[e].length)throw new Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);s[e]=[];for(let t=0;t<a[e].length;++t)s[e].push(u.indexOf(a[e][t]))}const v=u.length,i=[];for(let e=P.length;e<v;++e)i.push(e);return{allDims:u,summedDims:i,idDims:s}}function Hm(e,t){let r=new Array(e);r.fill(-1);for(let e=0;e<t.length;++e)r[t[e]]=e;const n=[];for(let t=0;t<e;++t)-1===r[t]&&n.push(t);return r=r.filter((e=>-1!==e)),{permutationIndices:r,expandDims:n}}function Jm(e,t,r){const n=new Array(e);for(let e=0;e<r.length;++e){const P=r[e].shape;for(let r=0;r<t[e].length;++r)void 0===n[t[e][r]]?n[t[e][r]]=P[r]:xe(n[t[e][r]]===P[r],(()=>`Expected dimension ${n[t[e][r]]} at axis ${r} of input shaped ${JSON.stringify(P)}, but got dimension ${P[r]}`))}}function _m(e,t){const r=e,n=[];let P=0;0===e.length&&r.push(-1),P=e.length+1;for(let e=0;e<P;++e)n.push([]);const a=[];for(let e=0;e<r.length;++e){const P=eg(t,r[e]);for(const t of P)-1===a.indexOf(t)&&(n[e].push(t),a.push(t))}return{path:r,steps:n}}function $m(e){return e.every(((e,t)=>e===t))}function eg(e,t){const r=[];for(let n=0;n<e.length;++n)0!==e[n].length&&-1===e[n].indexOf(t)&&-1!==t||r.push(n);return r}function tg(e,t,r=0){let n=[];if("number"==typeof t)xe(e.shape[r]%t==0,(()=>"Number of splits must evenly divide the axis.")),n=new Array(t).fill(e.shape[r]/t);else{const P=t.reduce(((e,t)=>(-1===t&&(e+=1),e)),0);xe(P<=1,(()=>"There should be only one negative value in split array."));const a=t.indexOf(-1);if(-1!==a){const n=t.reduce(((e,t)=>t>0?e+t:e));t[a]=e.shape[r]-n}xe(e.shape[r]===t.reduce(((e,t)=>e+t)),(()=>"The sum of sizes must match the size of the axis dimension.")),n=t}return n}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function rg(e){return`Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ${e}`}function ng(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function Pg(e,t,r){return`indices(${e}, 0) is invalid: ${t} >= ${r}`
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */}function ag(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function og(e,t){return`size ${e} must be non-negative, not ${t}`}function ug(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function sg(e,t){return`Input to reshape is a SparseTensor with ${Ee(e)}\n  dense values, but the requested shape requires a multiple of ${Ee(t)}. inputShape=${e} outputShape= ${t}`}function vg(e,t){return`Input to reshape is a tensor with ${Ee(e)} dense values, but the requested shape has ${Ee(t)}. inputShape=${e} outputShape=${t}`
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */}function ig(){return"segment ids must be >= 0"}function lg(){return"segment ids are not increasing"}function cg(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Og(e,t,r){return`Bad: indices[${e}] == ${t} out of range [0, ${r})`
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */}function Dg(e,t){let r,n=!1;for(e<=Tm?(r=e,n=!0):r=nt(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=nt(e,r+1);return r}function jg(e,t,r){const n=[],P=e.length;for(let a=0;a<P;a++)a!==t?n.push(e[a]):n.push(r);return n}function hg(e,t,r,n){const P=t.shape.length,a=e.shape.length;if(0!==n&&(n<-P||n>P))throw new Error(`Expect batchDims in the range of [-${P}, ${P}], but got ${n}`);if(n<0&&(n+=P),n>a)throw new Error(`batchDims (${n}) must be less than rank(x) (\n    ${a}).`);if(r<n)throw new Error(`batchDims (${n}) must be less than or equal to axis (${r}).`);for(let r=0;r<n;++r)if(e.shape[r]!==t.shape[r])throw new Error(`x.shape[${r}]: ${e.shape[r]} should be equal to indices.shape[${r}]: ${t.shape[r]}.`);const o=e.shape[r],u=[];let s=1,v=1,i=1;for(let t=0;t<n;++t)u.push(e.shape[t]),s*=e.shape[t];for(let t=n;t<r;t++)u.push(e.shape[t]),v*=e.shape[t];for(let e=n;e<P;e++)u.push(t.shape[e]);for(let t=r+1;t<a;t++)u.push(e.shape[t]),i*=e.shape[t];return{batchSize:s,sliceSize:i,outerSize:v,dimSize:o,outputShape:u}}var R=Object.freeze({__proto__:null,segOpComputeOptimalWindowSize:Dg,computeOutShape:jg,collectGatherOpShapeInfo:hg});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function pg(e){try{return e.map((e=>ra(e)))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function mg(e){return e.map((e=>ta(e)))}var F=Object.freeze({__proto__:null,slice_util:L,segment_util:R,fromUint8ToStringArray:pg,fromStringArrayToUint8:mg,upcastType:La,axesAreInnerMostDims:bl,combineLocations:Tl,computeOutAndReduceShapes:zl,expandShapeToKeepDim:dl,assertAxesAreInnerMostDims:yl,getAxesPermutation:wl,getUndoAxesPermutation:Ll,getInnerMostAxes:fl,getBroadcastDims:Ps,getReductionAxes:as,assertAndGetBroadcastShape:os,assertParamsConsistent:gm,computeOutShape:bm,computeDilation2DInfo:pv,computePool2DInfo:mv,computePool3DInfo:gv,computeConv2DInfo:bv,computeConv3DInfo:Tv,computeDefaultPad:yv,tupleValuesAreOne:xv,eitherStridesOrDilationsAreOne:Yv,convertConv2DDataFormat:kv,checkPadOnDimRoundingMode:Cv,getFusedDyActivation:uh,getFusedBiasGradient:sh,applyActivation:vh,shouldFuse:ih,PARALLELIZE_THRESHOLD:Tm,computeOptimalWindowSize:zm,getImageCenter:dm,getReshaped:ym,getPermuted:wm,getReshapedPermuted:Lm,getSliceBeginCoords:fm,getSliceSize:Im,prepareAndValidate:is,validateUpdateShape:ls,validateInput:cs,calculateShapes:Os,SELU_SCALEALPHA:Sm,SELU_SCALE:Am,ERF_P:xm,ERF_A1:Ym,ERF_A2:km,ERF_A3:Cm,ERF_A4:Em,ERF_A5:Qm,warn:mP,log:gP,mergeRealAndImagArrays:Wm,splitRealAndImagArrays:Um,complexWithEvenIndex:qm,complexWithOddIndex:Gm,getComplexWithIndex:Mm,assignToTypedArray:Km,exponents:Nm,exponent:Rm,decodeEinsumEquation:Xm,getEinsumPermutation:Hm,checkEinsumDimSizes:Jm,getEinsumComputePath:_m,isIdentityPermutation:$m,prepareSplitSize:tg,getSparseFillEmptyRowsIndicesDenseShapeMismatch:rg,getSparseFillEmptyRowsNegativeIndexErrorMessage:ng,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Pg,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:ag,getSparseReshapeNegativeOutputDimErrorMessage:og,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:ug,getSparseReshapeInputOutputMultipleErrorMessage:sg,getSparseReshapeInputOutputMismatchErrorMessage:vg,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:ig,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:lg,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:cg,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Og});
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * =============================================================================
     */
var B,Z;mt().registerFlag("KEEP_INTERMEDIATE_TENSORS",(()=>!1),(e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})),function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"}(B||(B={})),function(e){!function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"}(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))}(Z||(Z={}));
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
const gg={};function bg(e){return gg[e]}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Tg(e,t,r,n,P){const a=t.inputParams[e];if(a&&void 0!==a.inputIndexStart){const e=a.inputIndexStart,o=0===a.inputIndexEnd?void 0:void 0===a.inputIndexEnd?e+1:a.inputIndexEnd;if("tensor"===a.type)return zg(t.inputNames[a.inputIndexStart],r,n,P);if("tensors"===a.type){return t.inputNames.slice(e,o).map((e=>zg(e,r,n,P)))}const u=zg(t.inputNames.slice(e)[0],r,n,P),s=u.dataSync();return"number"===a.type?s[0]:ot(u.shape,s)}const o=t.attrParams[e];return o&&o.value}function zg(e,t,r,n){const[P,a]=Lg(e);if(null!=n){const e=n.getHashTableHandleByName(P);if(null!=e)return e}const o=r.currentContextIds.find((e=>!!t[wg(P,e)]));return void 0!==o?t[wg(P,o)][a]:void 0}function dg(e,t,r){return t[wg(e,r.currentContextId)]}function yg(e,t){const[r,n,P]=Lg(e);return[wg(r,t&&t.currentContextId),n,P]}function wg(e,t){return t?`${e}-${t}`:e}function Lg(e){const t=e.split(":");if(1===t.length)return[e,0,void 0];const r=t[0],n=3===t.length?t[1]:void 0;return[r,Number(t[t.length-1]),n]}function fg(e,t,r){let n=Tg("pad",e,t,r);if("explicit"===n){n=Tg("explicitPaddings",e,t,r);const P=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)P[e][0]=n[2*e],P[e][1]=n[2*e+1];return P}return n}function Ig(e){return e.kept?e:vu(e)}
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Sg=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var V=Object.freeze({__proto__:null,json:Sg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ag=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var X=Object.freeze({__proto__:null,json:Ag});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const xg=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var H=Object.freeze({__proto__:null,json:xg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Yg=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var J=Object.freeze({__proto__:null,json:Yg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const kg=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var _=Object.freeze({__proto__:null,json:kg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Cg=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var $=Object.freeze({__proto__:null,json:Cg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Eg=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var ee=Object.freeze({__proto__:null,json:Eg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Qg=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var te=Object.freeze({__proto__:null,json:Qg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Wg=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}];var re=Object.freeze({__proto__:null,json:Wg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ug=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var ne=Object.freeze({__proto__:null,json:Ug});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const qg=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Pe=Object.freeze({__proto__:null,json:qg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Gg=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var ae=Object.freeze({__proto__:null,json:Gg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Mg=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var oe=Object.freeze({__proto__:null,json:Mg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Kg=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var ue=Object.freeze({__proto__:null,json:Kg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ng=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var se=Object.freeze({__proto__:null,json:Ng});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Rg=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var ve=Object.freeze({__proto__:null,json:Rg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Fg=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var ie=Object.freeze({__proto__:null,json:Fg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Bg=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var le=Object.freeze({__proto__:null,json:Bg});
/**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Zg=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var ce=Object.freeze({__proto__:null,json:Zg});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Vg{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[].concat(...[V,X,H,J,_,$,ee,te,re,ne,Pe,ae,oe,ue,se,ve,ie,le,ce].map((e=>e.json)));this.opMappers=e.reduce(((e,t)=>(e[t.tfOpName]=t,e)),{})}transformGraph(e,t={}){const r=e.node,n=[],P=[],a=[],o=r.reduce(((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith("Placeholder")?n.push(e[t.name]):"Const"===t.op?P.push(e[t.name]):null!=t.input&&0!==t.input.length||a.push(e[t.name]),e)),{});let u=[];const s=[];let v={},i={};null!=t&&(v=this.mapSignatureEntries(t.inputs),i=this.mapSignatureEntries(t.outputs));const l=Object.keys(o);l.forEach((e=>{const t=o[e];t.inputNames.forEach(((e,r)=>{const[n,,P]=yg(e),a=o[n];if(null!=a.outputs){const e=a.outputs.indexOf(P);if(-1!==e){const P=`${n}:${e}`;t.inputNames[r]=P}}t.inputs.push(a),a.children.push(t)}))})),0===Object.keys(i).length?l.forEach((e=>{const t=o[e];0===t.children.length&&s.push(t)})):Object.keys(i).forEach((e=>{const[t]=yg(e),r=o[t];null!=r&&(r.signatureKey=i[e],s.push(r))})),Object.keys(v).length>0?Object.keys(v).forEach((e=>{const[t]=yg(e),r=o[t];r&&(r.signatureKey=v[e],u.push(r))})):u=n;let c={};null!=e.library&&null!=e.library.function&&(c=e.library.function.reduce(((e,t)=>(e[t.signature.name]=this.mapFunction(t),e)),{}));const O={nodes:o,inputs:u,outputs:s,weights:P,placeholders:n,signature:t,functions:c};return a.length>0&&(O.initNodes=a),O}mapSignatureEntries(e){return Object.keys(e||{}).reduce(((t,r)=>(t[e[r].name]=r,t)),{})}mapNode(e){const t=bg(e.op)||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});const r={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map((e=>e.startsWith("^")?e.slice(1):e)),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return null!=t.inputs&&(r.inputParams=t.inputs.reduce(((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e)),{})),null!=t.attrs&&(r.attrParams=t.attrs.reduce(((t,r)=>{const n=r.type;let P;switch(r.type){case"string":P=Jg(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=Jg(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"string[]":P=ub(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=ub(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"number":P=$g(e.attr,r.tfName,r.defaultValue||0),void 0===P&&r.tfDeprecatedName&&(P=$g(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"number[]":P=ob(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=ob(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"bool":P=_g(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=_g(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"bool[]":P=vb(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=vb(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"shape":P=ab(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=ab(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"shape[]":P=sb(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=sb(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"dtype":P=rb(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=rb(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"dtype[]":P=nb(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=nb(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"func":P=tb(e.attr,r.tfName,r.defaultValue),void 0===P&&r.tfDeprecatedName&&(P=tb(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${r.type} for op: ${e.op}`)}return t[r.name]={value:P,type:n},t}),{})),r}mapFunction(e){const t=e.nodeDef,r=[];let n={};null!=t&&(n=t.reduce(((e,t)=>(e[t.name]=this.mapNode(t),"Const"===t.op&&r.push(e[t.name]),e)),{}));const P=[],a=[];e.signature.inputArg.forEach((e=>{const[t]=yg(e.name),r={name:t,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:eb(e.type),type:"dtype"}},children:[]};r.signatureKey=e.name,P.push(r),n[t]=r}));Object.keys(n).forEach((e=>{const t=n[e];t.inputNames.forEach(((e,r)=>{const[P,,a]=yg(e),o=n[P];if(null!=o.outputs){const e=o.outputs.indexOf(a);if(-1!==e){const n=`${P}:${e}`;t.inputNames[r]=n}}t.inputs.push(o),o.children.push(t)}))}));const o=e.ret;e.signature.outputArg.forEach((e=>{const[t,r]=yg(o[e.name]),P=n[t];null!=P&&(P.defaultOutput=r,a.push(P))}));const u=this.mapArgsToSignature(e);return{nodes:n,inputs:P,outputs:a,weights:r,placeholders:[],signature:u}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce(((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e)),{}),outputs:e.signature.outputArg.reduce(((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r,e.ret),t)),{})}}mapArgToTensorInfo(e,t){let r=e.name;return null!=t&&(r=t[r]),{name:r,dtype:e.type}}}function Xg(e){const t=mt().global;if(void 0!==t.atob)return t.atob(e);if("undefined"!=typeof Buffer)return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Hg(e,t){const r=Array.isArray(e)?String.fromCharCode.apply(null,e):Xg(e);return t?r:r.toLowerCase()}function Jg(e,t,r,n=!1){const P=e[t];return null!=P?Hg(P.s,n):r}function _g(e,t,r){const n=e[t];return n?n.b:r}function $g(e,t,r){const n=e[t]||{},P=null!=n.i?n.i:null!=n.f?n.f:r;return"number"==typeof P?P:parseInt(P,10)}function eb(e){switch("string"==typeof e&&(e=B[e]),e){case B.DT_FLOAT:case B.DT_HALF:return"float32";case B.DT_INT32:case B.DT_INT64:case B.DT_INT8:case B.DT_UINT8:return"int32";case B.DT_BOOL:return"bool";case B.DT_DOUBLE:return"float32";case B.DT_STRING:return"string";default:return null}}function tb(e,t,r){const n=e[t];return n&&n.func?n.func.name:r}function rb(e,t,r){const n=e[t];return n&&n.type?eb(n.type):r}function nb(e,t,r){const n=e[t];return n&&n.list&&n.list.type?n.list.type.map((e=>eb(e))):r}function Pb(e){if(!e.unknownRank)return null!=e.dim?e.dim.map((e=>"number"==typeof e.size?e.size:parseInt(e.size,10))):[]}function ab(e,t,r){const n=e[t];return n&&n.shape?Pb(n.shape):r}function ob(e,t,r){const n=e[t];return n?((n.list.f&&n.list.f.length?n.list.f:n.list.i)||[]).map((e=>"number"==typeof e?e:parseInt(e,10))):r}function ub(e,t,r,n=!1){const P=e[t];return P&&P.list&&P.list.s?P.list.s.map((e=>Hg(e,n))):r}function sb(e,t,r){const n=e[t];return n&&n.list&&n.list.shape?n.list.shape.map((e=>Pb(e))):r}function vb(e,t,r){const n=e[t];return n&&n.list&&n.list.b?n.list.b:r}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class ib{constructor(e,t,r){this.node=e,this.tensorMap=t,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map((e=>this.getInput(e))),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce(((e,t)=>(e[t]=this.getAttr(t),e)),{}))}getInput(e){return zg(e,this.tensorMap,this.context)}getAttr(e,t){const r=this.node.rawAttrs[e];if(null!=r.tensor)return zg(e,this.tensorMap,this.context);if(null!=r.i||null!=r.f)return $g(this.node.rawAttrs,e,t);if(null!=r.s)return Jg(this.node.rawAttrs,e,t);if(null!=r.b)return _g(this.node.rawAttrs,e,t);if(null!=r.shape)return ab(this.node.rawAttrs,e,t);if(null!=r.type)return rb(this.node.rawAttrs,e,t);if(null!=r.list){if(null!=r.list.i||null!=r.list.f)return ob(this.node.rawAttrs,e,t);if(null!=r.list.s)return ub(this.node.rawAttrs,e,t);if(null!=r.list.shape)return sb(this.node.rawAttrs,e,t);if(null!=r.list.b)return vb(this.node.rawAttrs,e,t);if(null!=r.list.type)return nb(this.node.rawAttrs,e,t)}return t}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var Oe=Object.freeze({__proto__:null,abs:Bs,acos:Vs,acosh:Hs,add:Us,addN:_s,all:ev,any:rv,argMax:Pv,argMin:ov,asin:sv,asinh:iv,atan:cv,atan2:Dv,atanh:hv,avgPool:Uv,avgPool3d:Gv,basicLSTMCell:Hv,batchToSpaceND:_v,batchNorm:ti,batchNorm2d:ni,batchNorm3d:ai,batchNorm4d:ui,bincount:vi,broadcastArgs:li,broadcastTo:Oi,buffer:au,cast:uu,ceil:ji,clipByValue:pi,clone:vu,complex:Ja,concat:Kv,concat1d:gi,concat2d:Ti,concat3d:di,concat4d:wi,conv1d:Si,conv2d:fi,conv2dTranspose:ki,conv3d:Ei,conv3dTranspose:qi,cos:Mi,cosh:Ni,cumprod:Fi,cumsum:Zi,denseBincount:Xi,depthToSpace:Ji,depthwiseConv2d:$i,diag:tl,dilation2d:nl,div:Ks,divNoNan:ll,dot:Ol,einsum:jl,elu:pl,equal:al,erf:gl,euclideanNorm:Fl,exp:Zl,expandDims:Xl,expm1:Jl,eye:tc,fill:rc,floor:Pc,floorDiv:Gs,gather:oc,greater:sc,greaterEqual:ic,imag:Hu,isFinite:cc,isInf:Dc,isNaN:hc,leakyRelu:mc,less:bc,lessEqual:zc,linspace:dc,localResponseNormalization:wc,log:fc,log1p:Sc,logSigmoid:Ec,logSoftmax:qc,logSumExp:Mc,logicalAnd:Nc,logicalNot:Fc,logicalOr:Zc,logicalXor:Xc,lowerBound:$c,matMul:Gu,max:Sl,maxPool:tO,maxPool3d:nO,maxPoolWithArgmax:aO,maximum:uO,mean:vO,meshgrid:cO,min:xl,minimum:DO,mirrorPad:hO,mod:mO,moments:bO,mul:Rs,multiRNNCell:zO,multinomial:yO,neg:_u,notEqual:LO,oneHot:Ku,ones:lO,onesLike:IO,outerProduct:AO,pad:YO,pad1d:CO,pad2d:QO,pad3d:UO,pad4d:GO,pool:BO,pow:kl,prelu:VO,print:iu,prod:HO,rand:_O,randomGamma:nD,randomNormal:aD,randomStandardNormal:uD,randomUniform:vD,range:iD,real:es,reciprocal:cD,relu:DD,relu6:hD,reshape:Qv,reverse:mD,reverse1d:bD,reverse2d:zD,reverse3d:yD,reverse4d:LD,round:ID,rsqrt:AD,scalar:Cl,selu:YD,separableConv2d:CD,setdiff1dAsync:QD,sigmoid:Rv,sign:UD,sin:GD,sinh:KD,slice:Bv,slice1d:RD,slice2d:BD,slice3d:VD,slice4d:HD,softmax:_D,softplus:kc,spaceToBatchND:KO,fft:ej,ifft:rj,irfft:Pj,rfft:sj,split:oj,sqrt:Ql,square:Ul,squaredDifference:ij,squeeze:cj,stack:Dj,step:hj,stridedSlice:mj,sub:Wc,sum:Gl,tan:bj,tanh:Vv,tensor:$a,tensor1d:Tj,tensor2d:zj,tensor3d:us,tensor4d:dj,tensor5d:yj,tensor6d:wj,tile:$l,topk:fj,truncatedNormal:Sj,unique:xj,unsortedSegmentSum:kj,unstack:Ej,upperBound:Qj,variable:Wj,where:ul,whereAsync:Gj,zeros:iO,zerosLike:vl,op:Xa,OP_SCOPE_SUFFIX:Va,booleanMaskAsync:Kj,transpose:rs,norm:Nl,movingAverage:Rj,scatterND:Bj,searchSorted:_c,sparseToDense:Xj,gatherND:Jj,dropout:eh,enclosingPowerOfTwo:th,cosineWindow:rh,inTopKAsync:Ph,image:am,linalg:om,losses:um,spectral:nm,fused:K,signal:Pm,sparse:sm,string:vm});
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const lb=(e,t,r,n=Oe)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[n.add(Tg("a",e,t,r),Tg("b",e,t,r))];case"AddN":return[n.addN(Tg("tensors",e,t,r))];case"FloorMod":case"Mod":return[n.mod(Tg("a",e,t,r),Tg("b",e,t,r))];case"Mul":return[n.mul(Tg("a",e,t,r),Tg("b",e,t,r))];case"RealDiv":case"Div":return[n.div(Tg("a",e,t,r),Tg("b",e,t,r))];case"DivNoNan":return[n.divNoNan(Tg("a",e,t,r),Tg("b",e,t,r))];case"FloorDiv":return[n.floorDiv(Tg("a",e,t,r),Tg("b",e,t,r))];case"Sub":return[n.sub(Tg("a",e,t,r),Tg("b",e,t,r))];case"Minimum":return[n.minimum(Tg("a",e,t,r),Tg("b",e,t,r))];case"Maximum":return[n.maximum(Tg("a",e,t,r),Tg("b",e,t,r))];case"Pow":return[n.pow(Tg("a",e,t,r),Tg("b",e,t,r))];case"SquaredDifference":return[n.squaredDifference(Tg("a",e,t,r),Tg("b",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cb=(e,t,r,n=Oe)=>{switch(e.op){case"Abs":case"ComplexAbs":return[n.abs(Tg("x",e,t,r))];case"Acos":return[n.acos(Tg("x",e,t,r))];case"Acosh":return[n.acosh(Tg("x",e,t,r))];case"Asin":return[n.asin(Tg("x",e,t,r))];case"Asinh":return[n.asinh(Tg("x",e,t,r))];case"Atan":return[n.atan(Tg("x",e,t,r))];case"Atan2":return[n.atan2(Tg("x",e,t,r),Tg("y",e,t,r))];case"Atanh":return[n.atanh(Tg("x",e,t,r))];case"Ceil":return[n.ceil(Tg("x",e,t,r))];case"Complex":return[n.complex(Tg("real",e,t,r),Tg("imag",e,t,r))];case"Cos":return[n.cos(Tg("x",e,t,r))];case"Cosh":return[n.cosh(Tg("x",e,t,r))];case"Elu":return[n.elu(Tg("x",e,t,r))];case"Erf":return[n.erf(Tg("x",e,t,r))];case"Exp":return[n.exp(Tg("x",e,t,r))];case"Expm1":return[n.expm1(Tg("x",e,t,r))];case"Floor":return[n.floor(Tg("x",e,t,r))];case"Log":return[n.log(Tg("x",e,t,r))];case"Log1p":return[n.log1p(Tg("x",e,t,r))];case"Imag":return[n.imag(Tg("x",e,t,r))];case"Neg":return[n.neg(Tg("x",e,t,r))];case"Reciprocal":return[n.reciprocal(Tg("x",e,t,r))];case"Real":return[n.real(Tg("x",e,t,r))];case"Relu":return[n.relu(Tg("x",e,t,r))];case"Round":return[n.round(Tg("x",e,t,r))];case"Selu":return[n.selu(Tg("x",e,t,r))];case"Sigmoid":return[n.sigmoid(Tg("x",e,t,r))];case"Sin":return[n.sin(Tg("x",e,t,r))];case"Sign":return[n.sign(Tg("x",e,t,r))];case"Sinh":return[n.sinh(Tg("x",e,t,r))];case"Softplus":return[n.softplus(Tg("x",e,t,r))];case"Sqrt":return[n.sqrt(Tg("x",e,t,r))];case"Square":return[n.square(Tg("x",e,t,r))];case"Tanh":return[n.tanh(Tg("x",e,t,r))];case"Tan":return[n.tan(Tg("x",e,t,r))];case"ClipByValue":return[n.clipByValue(Tg("x",e,t,r),Tg("clipValueMin",e,t,r),Tg("clipValueMax",e,t,r))];case"Relu6":return[n.relu6(Tg("x",e,t,r))];case"Rsqrt":return[n.rsqrt(zg(e.inputNames[0],t,r))];case"Prod":return[n.prod(Tg("x",e,t,r),Tg("axes",e,t,r))];case"LeakyRelu":return[n.leakyRelu(Tg("x",e,t,r),Tg("alpha",e,t,r))];case"Prelu":return[n.prelu(Tg("x",e,t,r),Tg("alpha",e,t,r))];case"IsNan":return[n.isNaN(zg(e.inputNames[0],t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function Ob(e,t,r=""){if("number"!=typeof e&&"number"!=typeof t){xe(e.length===t.length,(()=>r+` Shapes ${e} and ${t} must match`));for(let n=0;n<e.length;n++){const P=e[n],a=t[n];xe(P<0||a<0||P===a,(()=>r+` Shapes ${e} and ${t} must match`))}}}function Db(e){return"number"!=typeof e&&!e.some((e=>e<0))}function jb(e,t,r){let n=hb(e,r);const P=!Db(n);if(P&&0===t.length)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${n}`);if(P&&t.forEach((e=>{n=hb(e.shape,n)})),!Db(n))throw new Error(`Non-fully-defined elementShape: ${n}`);return n}function hb(e,t){if("number"==typeof e)return t;if("number"==typeof t)return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const r=[];for(let n=0;n<e.length;++n){const P=e[n],a=t[n];if(P>=0&&a>=0&&P!==a)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);r[n]=P>=0?P:a}return r}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class pb{constructor(e,t,r,n,P,a,o){this.name=e,this.dtype=t,this.maxSize=r,this.elementShape=n,this.identicalElementShapes=P,this.dynamicSize=a,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=Cl(0),Zu(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.tensor.id)||t.tensor.dispose()})),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map((e=>this.read(e)))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},\n          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=t.shape),Ob(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=t,Zu(t),r.written=!0,this.tensors[e]=r}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach(((e,r)=>this.write(e,t[r])))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let t=0;t<this.size();t++)e.push(t)}if(0===e.length)return $a([],[0].concat(this.elementShape));const r=this.readMany(e);return Ob(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),Dj(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(0===this.size())return $a([],[0].concat(this.elementShape));const t=[];for(let e=0;e<this.size();e++)t.push(e);const r=this.readMany(t);return Ob(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),Kv(r,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,Ej(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let r=0;const n=e.map((e=>(r+=e,r)));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${r}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const P=0===r?0:t.size/r,a=[];Fu((()=>{t=Qv(t,[1,r,P]);for(let r=0;r<e.length;++r){const o=[0,0===r?0:n[r-1],0],u=[1,e[r],P];a[r]=Qv(Bv(t,o,u),this.elementShape)}return a}));const o=[];for(let t=0;t<e.length;t++)o[t]=t;this.writeMany(o,a)}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class mb{constructor(e,t,r,n=-1){this.tensors=e,this.elementShape=t,this.elementDtype=r,null!=e&&e.forEach((e=>{if(r!==e.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${e.dtype}`);Ob(t,e.shape,"TensorList shape mismatch: "),Zu(e)})),this.idTensor=Cl(0),this.maxNumElements=n,Zu(this.idTensor)}get id(){return this.idTensor.id}copy(){return new mb([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.id)||t.dispose()})),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,r=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(-1!==r&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Ob(e,this.elementShape,"TensorList shape mismatch: ");const n=jb(this.elementShape,this.tensors,e);return Fu((()=>{const e=this.tensors.map((e=>Qv(e,n)));return Dj(e,0)}))}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const r=jb(this.elementShape,this.tensors,e),n=this.tensors.pop();return Ob(n.shape,e,"TensorList shape mismatch: "),Qv(n,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(Ob(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Zu(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(-1!==this.maxNumElements&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new mb([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)t.tensors[r]=this.tensors[r];return t}getItem(e,t,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[e])throw new Error(`element at index ${e} is null.`);Ob(this.tensors[e].shape,t,"TensorList shape mismatch: ");const n=jb(this.elementShape,this.tensors,t);return Qv(this.tensors[e],n)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||-1!==this.maxNumElements&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);Ob(this.elementShape,t.shape,"TensorList shape mismatch: "),Zu(t),this.tensors[e]=t}gather(e,t,r){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);Ob(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const n=jb(this.elementShape,this.tensors,r);return 0===e.length?$a([],[0].concat(n)):Fu((()=>{const t=e.map((e=>Qv(this.tensors[e],n)));return Dj(t,0)}))}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);Ob(this.elementShape,t,"TensorList shape mismatch: ");const r=jb(this.elementShape,this.tensors,t);return 0===this.size()?$a([],[0].concat(r)):Fu((()=>{const e=this.tensors.map((e=>Qv(e,r)));return Kv(e,0)}))}}function gb(e,t,r){const n=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==r)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${r}`);Ob(e.shape.slice(1),t,"TensorList shape mismatch: ");const P=Ej(e);return new mb(P,t,n)}function bb(e,t,r,n){return new mb([],e,t,n)}function Tb(e,t,r,n){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const P=Math.max(...t);if(null!=n&&-1!==n&&P>=n)throw new Error(`Max index must be < array size (${P}  vs. ${n})`);const a=new mb([],r,e.dtype,n),o=Ej(e,0);return t.forEach(((e,t)=>{a.setItem(e,o[t])})),a}function zb(e,t,r){let n=0;const P=t.map((e=>(n+=e,n)));if(n!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`);const a=hb(e.shape.slice(1),r),o=0===n?0:e.size/n,u=Fu((()=>{const r=[];e=Qv(e,[1,n,o]);for(let n=0;n<t.length;++n){const u=[0,0===n?0:P[n-1],0],s=[1,t[n],o];r[n]=Qv(Bv(e,u,s),a)}return e.dispose(),r})),s=new mb([],r,e.dtype,t.length);for(let e=0;e<u.length;e++)s.setItem(e,u[e]);return s}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const db=async(e,t,r)=>{switch(e.op){case"If":case"StatelessIf":{const n=Tg("thenBranch",e,t,r),P=Tg("elseBranch",e,t,r),a=Tg("cond",e,t,r),o=Tg("args",e,t,r);return(await a.data())[0]?r.functionMap[n].executeFunctionAsync(o,r.tensorArrayMap,r.tensorListMap):r.functionMap[P].executeFunctionAsync(o,r.tensorArrayMap,r.tensorListMap)}case"While":case"StatelessWhile":{const n=Tg("body",e,t,r),P=Tg("cond",e,t,r),a=Tg("args",e,t,r),o=await r.functionMap[P].executeFunctionAsync(a,r.tensorArrayMap,r.tensorListMap),u=a.map((e=>e.id));let s=await o[0].data();o.forEach((e=>{e.kept||-1!==u.indexOf(e.id)||e.dispose()}));let v=a;for(;s[0];){const e=v;v=await r.functionMap[n].executeFunctionAsync(v,r.tensorArrayMap,r.tensorListMap);const t=v.map((e=>e.id));e.forEach((e=>{e.kept||-1!==u.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()}));const a=await r.functionMap[P].executeFunctionAsync(v,r.tensorArrayMap,r.tensorListMap);s=await a[0].data(),a.forEach((e=>{e.kept||-1!==u.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()}))}return v}case"LoopCond":return[Ig(Tg("pred",e,t,r))];case"Switch":{const n=Tg("pred",e,t,r);let P=Tg("data",e,t,r);return P.kept||(P=Ig(P)),(await n.data())[0]?[void 0,P]:[P,void 0]}case"Merge":{const n=e.inputNames.find((e=>void 0!==zg(e,t,r)));if(n){return[Ig(zg(n,t,r))]}return}case"Enter":{const n=Tg("frameName",e,t,r),P=Tg("tensor",e,t,r);return r.enterFrame(n),[Ig(P)]}case"Exit":{const n=Tg("tensor",e,t,r);return r.exitFrame(),[Ig(n)]}case"NextIteration":{const n=Tg("tensor",e,t,r);return r.nextIteration(),[Ig(n)]}case"TensorArrayV3":{const n=Tg("size",e,t,r),P=Tg("dtype",e,t,r),a=Tg("elementShape",e,t,r),o=Tg("dynamicSize",e,t,r),u=Tg("clearAfterRead",e,t,r),s=Tg("identicalElementShapes",e,t,r),v=Tg("name",e,t,r),i=new pb(v,P,n,a,s,o,u);return r.addTensorArray(i),[i.idTensor,Cl(1)]}case"TensorArrayWriteV3":{const n=Tg("tensorArrayId",e,t,r),P=Tg("index",e,t,r),a=Tg("tensor",e,t,r),o=r.getTensorArray(n.id);return o.write(P,a),[o.idTensor]}case"TensorArrayReadV3":{const n=Tg("tensorArrayId",e,t,r),P=Tg("index",e,t,r);return[r.getTensorArray(n.id).read(P)]}case"TensorArrayGatherV3":{const n=Tg("tensorArrayId",e,t,r),P=Tg("indices",e,t,r),a=Tg("dtype",e,t,r);return[r.getTensorArray(n.id).gather(P,a)]}case"TensorArrayScatterV3":{const n=Tg("tensorArrayId",e,t,r),P=Tg("indices",e,t,r),a=Tg("tensor",e,t,r),o=r.getTensorArray(n.id);return o.scatter(P,a),[o.idTensor]}case"TensorArrayConcatV3":{const n=Tg("tensorArrayId",e,t,r),P=r.getTensorArray(n.id),a=Tg("dtype",e,t,r);return[P.concat(a)]}case"TensorArraySplitV3":{const n=Tg("tensorArrayId",e,t,r),P=Tg("tensor",e,t,r),a=Tg("lengths",e,t,r),o=r.getTensorArray(n.id);return o.split(a,P),[o.idTensor]}case"TensorArraySizeV3":{const n=Tg("tensorArrayId",e,t,r);return[Cl(r.getTensorArray(n.id).size(),"int32")]}case"TensorArrayCloseV3":{const n=Tg("tensorArrayId",e,t,r),P=r.getTensorArray(n.id);return P.clearAndClose(),[P.idTensor]}case"TensorListSetItem":{const n=Tg("tensorListId",e,t,r),P=Tg("index",e,t,r),a=Tg("tensor",e,t,r),o=r.getTensorList(n.id);return o.setItem(P,a),[o.idTensor]}case"TensorListGetItem":{const n=Tg("tensorListId",e,t,r),P=Tg("index",e,t,r),a=Tg("elementShape",e,t,r),o=Tg("elementDType",e,t,r);return[r.getTensorList(n.id).getItem(P,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const n=Tg("indices",e,t,r),P=Tb(Tg("tensor",e,t,r),n,Tg("elementShape",e,t,r),Tg("numElements",e,t,r));return r.addTensorList(P),[P.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const n=Tg("elementShape",e,t,r),P=Tg("elementDType",e,t,r);let a;a="TensorListReserve"===e.op?"numElements":"maxNumElements";const o=Tg(a,e,t,r),u=bb(n,P,0,"TensorListReserve"===e.op?-1:o);return r.addTensorList(u),[u.idTensor]}case"TensorListGather":{const n=Tg("tensorListId",e,t,r),P=Tg("indices",e,t,r),a=Tg("elementShape",e,t,r),o=Tg("elementDType",e,t,r);return[r.getTensorList(n.id).gather(P,o,a)]}case"TensorListStack":{const n=Tg("tensorListId",e,t,r),P=Tg("elementShape",e,t,r),a=Tg("elementDType",e,t,r),o=Tg("numElements",e,t,r);return[r.getTensorList(n.id).stack(P,a,o)]}case"TensorListFromTensor":{const n=gb(Tg("tensor",e,t,r),Tg("elementShape",e,t,r),Tg("elementDType",e,t,r));return r.addTensorList(n),[n.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const n=Tg("tensorListId",e,t,r),P=r.getTensorList(n.id),a=Tg("dtype",e,t,r),o=Tg("elementShape",e,t,r);return[P.concat(a,o)]}case"TensorListPushBack":{const n=Tg("tensorListId",e,t,r),P=Tg("tensor",e,t,r),a=r.getTensorList(n.id);return a.pushBack(P),[a.idTensor]}case"TensorListPopBack":{const n=Tg("tensorListId",e,t,r),P=Tg("elementShape",e,t,r),a=Tg("elementDType",e,t,r);return[r.getTensorList(n.id).popBack(P,a)]}case"TensorListSplit":{const n=Tg("tensor",e,t,r),P=Tg("elementShape",e,t,r),a=zb(n,Tg("lengths",e,t,r),P);return r.addTensorList(a),[a.idTensor]}case"TensorListLength":{const n=Tg("tensorListId",e,t,r);return[Cl(r.getTensorList(n.id).size(),"int32")]}case"TensorListResize":{const n=Tg("tensorListId",e,t,r),P=Tg("size",e,t,r),a=r.getTensorList(n.id).resize(P);return r.addTensorList(a),[a.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function yb(e,t,r){const[n,P]=Tg("fusedOps",e,t,r),a="biasadd"===n,o=!a,u="prelu"===P,s="fusedbatchnorm"===n,v=Tg("numArgs",e,t,r);if(a){if(u&&2!==v)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&a&&1!==v)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(s)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const i=Tg("strides",e,t,r),l=fg(e,t,r),c=Tg("dataFormat",e,t,r).toUpperCase(),O=Tg("dilations",e,t,r);let[D,j]=Tg("args",e,t,r);o&&(j=D,D=void 0);return{stride:i,pad:l,dataFormat:c,dilations:O,biasArg:D,preluArg:j,activationFunc:P,leakyreluAlpha:Tg("leakyreluAlpha",e,t,r)}}const wb=(e,t,r,n=Oe)=>{switch(e.op){case"Conv1D":{const P=Tg("stride",e,t,r),a=Tg("pad",e,t,r),o=Tg("dataFormat",e,t,r).toUpperCase(),u=Tg("dilation",e,t,r);return[n.conv1d(Tg("x",e,t,r),Tg("filter",e,t,r),P,a,o,u)]}case"Conv2D":{const P=Tg("strides",e,t,r),a=fg(e,t,r),o=Tg("dataFormat",e,t,r).toUpperCase(),u=Tg("dilations",e,t,r);return[n.conv2d(Tg("x",e,t,r),Tg("filter",e,t,r),[P[1],P[2]],a,o,[u[1],u[2]])]}case"_FusedConv2D":{const{stride:P,pad:a,dataFormat:o,dilations:u,biasArg:s,preluArg:v,activationFunc:i,leakyreluAlpha:l}=yb(e,t,r);return[n.fused.conv2d({x:Tg("x",e,t,r),filter:Tg("filter",e,t,r),strides:[P[1],P[2]],pad:a,dataFormat:o,dilations:[u[1],u[2]],bias:s,activation:i,preluActivationWeights:v,leakyreluAlpha:l})]}case"FusedDepthwiseConv2dNative":{const{stride:P,pad:a,dataFormat:o,dilations:u,biasArg:s,preluArg:v,activationFunc:i,leakyreluAlpha:l}=yb(e,t,r);return[n.fused.depthwiseConv2d({x:Tg("x",e,t,r),filter:Tg("filter",e,t,r),strides:[P[1],P[2]],pad:a,dataFormat:o,dilations:[u[1],u[2]],bias:s,activation:i,preluActivationWeights:v,leakyreluAlpha:l})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const P=Tg("outputShape",e,t,r),a=Tg("strides",e,t,r),o=fg(e,t,r);return[n.conv2dTranspose(Tg("x",e,t,r),Tg("filter",e,t,r),P,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const P=Tg("strides",e,t,r),a=fg(e,t,r),o=Tg("dilations",e,t,r),u=Tg("dataFormat",e,t,r).toUpperCase();return[n.depthwiseConv2d(Tg("input",e,t,r),Tg("filter",e,t,r),[P[1],P[2]],a,u,[o[1],o[2]])]}case"Conv3D":{const P=Tg("strides",e,t,r),a=Tg("pad",e,t,r),o=Tg("dataFormat",e,t,r).toUpperCase(),u=Tg("dilations",e,t,r);return[n.conv3d(Tg("x",e,t,r),Tg("filter",e,t,r),[P[1],P[2],P[3]],a,o,[u[1],u[2],u[3]])]}case"AvgPool":{const P=Tg("strides",e,t,r),a=Tg("pad",e,t,r),o=Tg("kernelSize",e,t,r);return[n.avgPool(Tg("x",e,t,r),[o[1],o[2]],[P[1],P[2]],a)]}case"MaxPool":{const P=Tg("strides",e,t,r),a=Tg("pad",e,t,r),o=Tg("kernelSize",e,t,r);return[n.maxPool(Tg("x",e,t,r),[o[1],o[2]],[P[1],P[2]],a)]}case"MaxPoolWithArgmax":{const P=Tg("strides",e,t,r),a=Tg("pad",e,t,r),o=Tg("kernelSize",e,t,r),u=Tg("includeBatchInIndex",e,t,r),{result:s,indexes:v}=n.maxPoolWithArgmax(Tg("x",e,t,r),[o[1],o[2]],[P[1],P[2]],a,u);return[s,v]}case"AvgPool3D":{const P=Tg("strides",e,t,r),a=Tg("pad",e,t,r),o=Tg("kernelSize",e,t,r);return[n.avgPool3d(Tg("x",e,t,r),[o[1],o[2],o[3]],[P[1],P[2],P[3]],a)]}case"MaxPool3D":{const P=Tg("strides",e,t,r),a=Tg("pad",e,t,r),o=Tg("kernelSize",e,t,r);return[n.maxPool3d(Tg("x",e,t,r),[o[1],o[2],o[3]],[P[1],P[2],P[3]],a)]}case"Dilation2D":{const P=Tg("strides",e,t,r),a=Tg("pad",e,t,r),o=Tg("dilations",e,t,r),u=P[1],s=P[2],v=o[1],i=o[2];return[n.dilation2d(Tg("x",e,t,r),Tg("filter",e,t,r),[u,s],a,[v,i],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Lb=(e,t,r,n=Oe)=>{switch(e.op){case"Fill":{const P=Tg("shape",e,t,r),a=Tg("dtype",e,t,r),o=Tg("value",e,t,r);return[n.fill(P,o,a)]}case"LinSpace":{const P=Tg("start",e,t,r),a=Tg("stop",e,t,r),o=Tg("num",e,t,r);return[n.linspace(P,a,o)]}case"Multinomial":{const P=Tg("logits",e,t,r),a=Tg("numSamples",e,t,r),o=Tg("seed",e,t,r);return[n.multinomial(P,a,o)]}case"OneHot":{const P=Tg("indices",e,t,r),a=Tg("depth",e,t,r),o=Tg("onValue",e,t,r),u=Tg("offValue",e,t,r);return[n.oneHot(P,a,o,u)]}case"Ones":return[n.ones(Tg("shape",e,t,r),Tg("dtype",e,t,r))];case"OnesLike":return[n.onesLike(Tg("x",e,t,r))];case"RandomStandardNormal":return[n.randomStandardNormal(Tg("shape",e,t,r),Tg("dtype",e,t,r),Tg("seed",e,t,r))];case"RandomUniform":return[n.randomUniform(Tg("shape",e,t,r),Tg("minval",e,t,r),Tg("maxval",e,t,r),Tg("dtype",e,t,r))];case"Range":{const P=Tg("start",e,t,r),a=Tg("stop",e,t,r),o=Tg("step",e,t,r);return[n.range(P,a,o,Tg("dtype",e,t,r))]}case"TruncatedNormal":{const P=Tg("shape",e,t,r),a=Tg("mean",e,t,r),o=Tg("stdDev",e,t,r),u=Tg("seed",e,t,r);return[n.truncatedNormal(P,a,o,Tg("dtype",e,t,r),u)]}case"Zeros":return[n.zeros(Tg("shape",e,t,r),Tg("dtype",e,t,r))];case"ZerosLike":return[n.zerosLike(Tg("x",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function fb(e,t,r){return{boxes:Tg("boxes",e,t,r),scores:Tg("scores",e,t,r),maxOutputSize:Tg("maxOutputSize",e,t,r),iouThreshold:Tg("iouThreshold",e,t,r),scoreThreshold:Tg("scoreThreshold",e,t,r),softNmsSigma:Tg("softNmsSigma",e,t,r)}}const Ib=async(e,t,r,n,P=Oe)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:n,scores:a,maxOutputSize:o,iouThreshold:u,scoreThreshold:s,softNmsSigma:v}=fb(e,t,r),i=await P.image.nonMaxSuppressionWithScoreAsync(n,a,o,u,s,v);return[i.selectedIndices,i.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:n,scores:a,maxOutputSize:o,iouThreshold:u,scoreThreshold:s}=fb(e,t,r),v=Tg("padToMaxOutputSize",e,t,r),i=await P.image.nonMaxSuppressionPaddedAsync(n,a,o,u,s,v);return[i.selectedIndices,i.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:n,scores:a,maxOutputSize:o,iouThreshold:u,scoreThreshold:s}=fb(e,t,r);return[await P.image.nonMaxSuppressionAsync(n,a,o,u,s)]}case"Where":{const n=P.cast(Tg("condition",e,t,r),"bool"),a=[await P.whereAsync(n)];return n.dispose(),a}case"ListDiff":return P.setdiff1dAsync(Tg("x",e,t,r),Tg("y",e,t,r));default:throw TypeError(`Node type ${e.op} is not implemented`)}},Sb=(e,t,r,n=Oe)=>{switch(e.op){case"LowerBound":{const P=Tg("sortedSequence",e,t,r),a=Tg("values",e,t,r);return[n.lowerBound(P,a)]}case"TopKV2":{const P=Tg("x",e,t,r),a=Tg("k",e,t,r),o=Tg("sorted",e,t,r),u=n.topk(P,a,o);return[u.values,u.indices]}case"UpperBound":{const P=Tg("sortedSequence",e,t,r),a=Tg("values",e,t,r);return[n.upperBound(P,a)]}case"Unique":{const P=Tg("x",e,t,r),a=n.unique(P);return[a.values,a.indices]}case"UniqueV2":{const P=Tg("x",e,t,r),a=Tg("axis",e,t,r),o=n.unique(P,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Ab=(e,t,r,n=Oe)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const P=Tg("default",e,t,r);return[zg(e.name,t,r)||P];case"Placeholder":return[zg(e.name,t,r)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":return[Ig(Tg("x",e,t,r))];case"IdentityN":return Tg("x",e,t,r).map((e=>Ig(e)));case"Snapshot":return[Ig(Tg("x",e,t,r))];case"Shape":return[n.tensor1d(Tg("x",e,t,r).shape,"int32")];case"ShapeN":return Tg("x",e,t,r).map((e=>n.tensor1d(e.shape)));case"Size":return[n.scalar(Tg("x",e,t,r).size,"int32")];case"Rank":return[n.scalar(Tg("x",e,t,r).rank,"int32")];case"NoOp":return[n.scalar(1)];case"Print":const a=Tg("x",e,t,r),o=Tg("data",e,t,r),u=Tg("message",e,t,r),s=Tg("summarize",e,t,r);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let e=0;e<o.length;e++)console.log(Array.prototype.slice.call(o[e].dataSync()).slice(0,s));return[a];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class xb{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=Cl(0),this.tensorMap=new Map,Zu(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return Cl(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),Fu((()=>{const e=Ej(t),n=r.length,P=e.length;xe(n===P,(()=>`The number of elements doesn't match, keys has ${n} elements, the values has ${P} elements.`));for(let t=0;t<n;t++){const n=r[t],P=e[t];Zu(P),this.tensorMap.set(n,P)}return this.handle}))}async find(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return Fu((()=>{const e=[];for(let n=0;n<r.length;n++){const P=r[n],a=this.findWithDefault(P,t);e.push(a)}return Dj(e)}))}findWithDefault(e,t){const r=this.tensorMap.get(e);return null!=r?r:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Yb=async(e,t,r,n)=>{switch(e.op){case"HashTable":case"HashTableV2":{const P=Tg("keyDType",e,t,r),a=Tg("valueDType",e,t,r),o=new xb(P,a);return n.addHashTable(e.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const P=Tg("tableHandle",e,t,r,n),a=Tg("keys",e,t,r),o=Tg("values",e,t,r),u=n.getHashTableById(P.id);return[await u.import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const P=Tg("tableHandle",e,t,r,n),a=Tg("keys",e,t,r),o=Tg("defaultValue",e,t,r),u=n.getHashTableById(P.id);return[await u.find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const P=Tg("tableHandle",e,t,r,n);return[n.getHashTableById(P.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},kb=(e,t,r,n=Oe)=>{switch(e.op){case"ResizeBilinear":{const P=Tg("images",e,t,r),a=Tg("size",e,t,r),o=Tg("alignCorners",e,t,r),u=Tg("halfPixelCenters",e,t,r);return[n.image.resizeBilinear(P,[a[0],a[1]],o,u)]}case"ResizeNearestNeighbor":{const P=Tg("images",e,t,r),a=Tg("size",e,t,r),o=Tg("alignCorners",e,t,r),u=Tg("halfPixelCenters",e,t,r);return[n.image.resizeNearestNeighbor(P,[a[0],a[1]],o,u)]}case"CropAndResize":{const P=Tg("image",e,t,r),a=Tg("boxes",e,t,r),o=Tg("boxInd",e,t,r),u=Tg("cropSize",e,t,r),s=Tg("method",e,t,r),v=Tg("extrapolationValue",e,t,r);return[n.image.cropAndResize(P,a,o,u,s,v)]}case"ImageProjectiveTransformV3":{const P=Tg("images",e,t,r),a=Tg("transforms",e,t,r),o=Tg("outputShape",e,t,r),u=Tg("fillValue",e,t,r),s=Tg("interpolation",e,t,r),v=Tg("fillMode",e,t,r);return[n.image.transform(P,a,s.toLowerCase(),v.toLowerCase(),u,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Cb=(e,t,r,n=Oe)=>{switch(e.op){case"Equal":return[n.equal(Tg("a",e,t,r),Tg("b",e,t,r))];case"NotEqual":return[n.notEqual(Tg("a",e,t,r),Tg("b",e,t,r))];case"Greater":return[n.greater(Tg("a",e,t,r),Tg("b",e,t,r))];case"GreaterEqual":return[n.greaterEqual(Tg("a",e,t,r),Tg("b",e,t,r))];case"Less":return[n.less(Tg("a",e,t,r),Tg("b",e,t,r))];case"LessEqual":return[n.lessEqual(Tg("a",e,t,r),Tg("b",e,t,r))];case"LogicalAnd":return[n.logicalAnd(Tg("a",e,t,r),Tg("b",e,t,r))];case"LogicalNot":return[n.logicalNot(Tg("a",e,t,r))];case"LogicalOr":return[n.logicalOr(Tg("a",e,t,r),Tg("b",e,t,r))];case"Select":case"SelectV2":return[n.where(Tg("condition",e,t,r),Tg("a",e,t,r),Tg("b",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Eb=(e,t,r,n=Oe)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[n.matMul(Tg("a",e,t,r),Tg("b",e,t,r),Tg("transposeA",e,t,r),Tg("transposeB",e,t,r))];case"Einsum":return[n.einsum(Tg("equation",e,t,r),...Tg("tensors",e,t,r))];case"Transpose":return[n.transpose(Tg("x",e,t,r),Tg("perm",e,t,r))];case"_FusedMatMul":const[P,a]=Tg("fusedOps",e,t,r),o="biasadd"===P,u="prelu"===a,s=Tg("numArgs",e,t,r),v=Tg("leakyreluAlpha",e,t,r);if(o){if(u&&2!==s)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&1!==s)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[i,l]=Tg("args",e,t,r);return[n.fused.matMul({a:Tg("a",e,t,r),b:Tg("b",e,t,r),transposeA:Tg("transposeA",e,t,r),transposeB:Tg("transposeB",e,t,r),bias:i,activation:a,preluActivationWeights:l,leakyreluAlpha:v})];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Qb=(e,t,r,n=Oe)=>{switch(e.op){case"EuclideanNorm":return[n.euclideanNorm(Tg("x",e,t,r),Tg("axis",e,t,r),Tg("keepDims",e,t,r))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[n.batchNorm(Tg("x",e,t,r),Tg("mean",e,t,r),Tg("variance",e,t,r),Tg("offset",e,t,r),Tg("scale",e,t,r),Tg("epsilon",e,t,r))];case"LRN":return[n.localResponseNormalization(Tg("x",e,t,r),Tg("radius",e,t,r),Tg("bias",e,t,r),Tg("alpha",e,t,r),Tg("beta",e,t,r))];case"Softmax":return[n.softmax(Tg("x",e,t,r))];case"LogSoftmax":return[n.logSoftmax(Tg("x",e,t,r))];case"SparseToDense":return[n.sparseToDense(Tg("sparseIndices",e,t,r),Tg("outputShape",e,t,r),Tg("sparseValues",e,t,r),Tg("defaultValue",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Wb=(e,t,r,n=Oe)=>{switch(e.op){case"Max":{const P=Tg("axis",e,t,r),a=Tg("keepDims",e,t,r);return[n.max(Tg("x",e,t,r),P,a)]}case"Mean":{const P=Tg("axis",e,t,r),a=Tg("keepDims",e,t,r);return[n.mean(Tg("x",e,t,r),P,a)]}case"Min":{const P=Tg("axis",e,t,r),a=Tg("keepDims",e,t,r);return[n.min(Tg("x",e,t,r),P,a)]}case"Sum":{const P=Tg("axis",e,t,r),a=Tg("keepDims",e,t,r);return[n.sum(Tg("x",e,t,r),P,a)]}case"All":{const P=Tg("axis",e,t,r),a=Tg("keepDims",e,t,r);return[n.all(Tg("x",e,t,r),P,a)]}case"Any":{const P=Tg("axis",e,t,r),a=Tg("keepDims",e,t,r);return[n.any(Tg("x",e,t,r),P,a)]}case"ArgMax":{const P=Tg("axis",e,t,r);return[n.argMax(Tg("x",e,t,r),P)]}case"ArgMin":{const P=Tg("axis",e,t,r);return[n.argMin(Tg("x",e,t,r),P)]}case"Prod":{const P=Tg("axis",e,t,r),a=Tg("keepDims",e,t,r);return[n.prod(Tg("x",e,t,r),P,a)]}case"Cumprod":{const P=Tg("axis",e,t,r),a=Tg("exclusive",e,t,r),o=Tg("reverse",e,t,r);return[n.cumprod(Tg("x",e,t,r),P,a,o)]}case"Cumsum":{const P=Tg("axis",e,t,r),a=Tg("exclusive",e,t,r),o=Tg("reverse",e,t,r);return[n.cumsum(Tg("x",e,t,r),P,a,o)]}case"Bincount":const P=Tg("x",e,t,r),a=Tg("weights",e,t,r),o=Tg("size",e,t,r);return[n.bincount(P,a,o)];case"DenseBincount":{const P=Tg("x",e,t,r),a=Tg("weights",e,t,r),o=Tg("size",e,t,r),u=Tg("binaryOutput",e,t,r);return[n.denseBincount(P,a,o,u)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Ub=(e,t,r,n=Oe)=>{switch(e.op){case"ConcatV2":case"Concat":{const P=Tg("n",e,t,r),a=Tg("axis",e,t,r);let o=Tg("tensors",e,t,r);return o=o.slice(0,P),[n.concat(o,a)]}case"Gather":{const P=Tg("x",e,t,r),a=Tg("indices",e,t,r);return[n.gather(P,n.cast(a,"int32"),0)]}case"GatherV2":{const P=Tg("axis",e,t,r),a=Tg("batchDims",e,t,r),o=Tg("x",e,t,r),u=Tg("indices",e,t,r);return[n.gather(o,n.cast(u,"int32"),P,a)]}case"Reverse":{const P=Tg("dims",e,t,r),a=[];for(let e=0;e<P.length;e++)P[e]&&a.push(e);const o=Tg("x",e,t,r);return[n.reverse(o,a)]}case"ReverseV2":{const P=Tg("axis",e,t,r),a=Tg("x",e,t,r);return[n.reverse(a,P)]}case"Slice":{const P=Tg("begin",e,t,r),a=Tg("size",e,t,r);return[n.slice(Tg("x",e,t,r),P,a)]}case"StridedSlice":{const P=Tg("begin",e,t,r),a=Tg("end",e,t,r),o=Tg("strides",e,t,r),u=Tg("beginMask",e,t,r),s=Tg("endMask",e,t,r),v=Tg("ellipsisMask",e,t,r),i=Tg("newAxisMask",e,t,r),l=Tg("shrinkAxisMask",e,t,r),c=Tg("x",e,t,r);return[n.stridedSlice(c,P,a,o,u,s,v,i,l)]}case"Pack":return Fu((()=>{const P=Tg("axis",e,t,r),a=Tg("tensors",e,t,r),o=a[0].shape,u=n.squeeze(a[0]).shape,s=a.map((e=>{const t=Qe(e.shape,o);if(!t&&!Qe(n.squeeze(e).shape,u))throw new Error("the input tensors shape does not match");return t?e:n.reshape(e,o)}));return[n.stack(s,P)]}));case"Unpack":{const P=Tg("axis",e,t,r),a=Tg("tensor",e,t,r);return n.unstack(a,P)}case"Tile":{const P=Tg("reps",e,t,r);return[n.tile(Tg("x",e,t,r),P)]}case"Split":case"SplitV":{const P=Tg("axis",e,t,r),a=Tg("numOrSizeSplits",e,t,r),o=Tg("x",e,t,r);return n.split(o,a,P)}case"ScatterNd":{const P=Tg("indices",e,t,r),a=Tg("values",e,t,r),o=Tg("shape",e,t,r);return[n.scatterND(P,a,o)]}case"GatherNd":{const P=Tg("x",e,t,r),a=Tg("indices",e,t,r);return[n.gatherND(P,a)]}case"SparseToDense":{const P=Tg("sparseIndices",e,t,r),a=Tg("outputShape",e,t,r),o=Tg("sparseValues",e,t,r),u=Tg("defaultValue",e,t,r);return[n.sparseToDense(P,o,a,o.dtype===u.dtype?u:n.cast(u,o.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},qb=(e,t,r,n=Oe)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:P,outputValues:a,emptyRowIndicator:o,reverseIndexMap:u}=n.sparse.sparseFillEmptyRows(Tg("indices",e,t,r),Tg("values",e,t,r),Tg("denseShape",e,t,r),Tg("defaultValue",e,t,r));return[P,a,o,u]}case"SparseReshape":{const{outputIndices:P,outputShape:a}=n.sparse.sparseReshape(Tg("inputIndices",e,t,r),Tg("inputShape",e,t,r),Tg("newShape",e,t,r));return[P,a]}case"SparseSegmentMean":return[n.sparse.sparseSegmentMean(Tg("data",e,t,r),Tg("indices",e,t,r),Tg("segmentIds",e,t,r))];case"SparseSegmentSum":return[n.sparse.sparseSegmentSum(Tg("data",e,t,r),Tg("indices",e,t,r),Tg("segmentIds",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Gb=(e,t,r,n=Oe)=>{switch(e.op){case"FFT":return[n.fft(Tg("x",e,t,r))];case"IFFT":return[n.ifft(Tg("x",e,t,r))];case"RFFT":return[n.rfft(Tg("x",e,t,r))];case"IRFFT":return[n.irfft(Tg("x",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Mb=(e,t,r,n=Oe)=>{switch(e.op){case"StringNGrams":{const{nGrams:P,nGramsSplits:a}=n.string.stringNGrams(Tg("data",e,t,r),Tg("dataSplits",e,t,r),Tg("separator",e,t,r),Tg("nGramWidths",e,t,r),Tg("leftPad",e,t,r),Tg("rightPad",e,t,r),Tg("padWidth",e,t,r),Tg("preserveShortSequences",e,t,r));return[P,a]}case"StringSplit":{const{indices:P,values:a,shape:o}=n.string.stringSplit(Tg("input",e,t,r),Tg("delimiter",e,t,r),Tg("skipEmpty",e,t,r));return[P,a,o]}case"StringToHashBucketFast":return[n.string.stringToHashBucketFast(Tg("input",e,t,r),Tg("numBuckets",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Kb=(e,t,r,n=Oe)=>{switch(e.op){case"Cast":return[n.cast(Tg("x",e,t,r),Tg("dtype",e,t,r))];case"ExpandDims":{const P=Tg("axis",e,t,r);return[n.expandDims(Tg("x",e,t,r),P)]}case"Squeeze":{const P=Tg("axis",e,t,r);return[n.squeeze(Tg("x",e,t,r),P)]}case"Reshape":return[n.reshape(Tg("x",e,t,r),Tg("shape",e,t,r))];case"MirrorPad":return[n.mirrorPad(Tg("x",e,t,r),Tg("padding",e,t,r),Tg("mode",e,t,r))];case"PadV2":case"Pad":return[n.pad(Tg("x",e,t,r),Tg("padding",e,t,r),Tg("constantValue",e,t,r))];case"SpaceToBatchND":{const P=Tg("blockShape",e,t,r),a=Tg("paddings",e,t,r);return[n.spaceToBatchND(Tg("x",e,t,r),P,a)]}case"BatchToSpaceND":{const P=Tg("blockShape",e,t,r),a=Tg("crops",e,t,r);return[n.batchToSpaceND(Tg("x",e,t,r),P,a)]}case"DepthToSpace":{const P=Tg("blockSize",e,t,r),a=Tg("dataFormat",e,t,r).toUpperCase();return[n.depthToSpace(Tg("x",e,t,r),P,a)]}case"BroadcastTo":return[n.broadcastTo(Tg("x",e,t,r),Tg("shape",e,t,r))];case"BroadcastArgs":return[n.broadcastArgs(Tg("s0",e,t,r),Tg("s1",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function Nb(e,t,r,n,P=Fu){const a=((e,t,r)=>{switch(e.category){case"arithmetic":return P((()=>lb(e,t,r)));case"basic_math":return P((()=>cb(e,t,r)));case"control":return db(e,t,r);case"convolution":return P((()=>wb(e,t,r)));case"creation":return P((()=>Lb(e,t,r)));case"dynamic":return Ib(e,t,r);case"evaluation":return P((()=>Sb(e,t,r)));case"image":return P((()=>kb(e,t,r)));case"graph":return P((()=>Ab(e,t,r)));case"logical":return P((()=>Cb(e,t,r)));case"matrices":return P((()=>Eb(e,t,r)));case"normalization":return P((()=>Qb(e,t,r)));case"reduction":return P((()=>Wb(e,t,r)));case"slice_join":return P((()=>Ub(e,t,r)));case"sparse":return P((()=>qb(e,t,r)));case"spectral":return P((()=>Gb(e,t,r)));case"string":return P((()=>Mb(e,t,r)));case"transformation":return P((()=>Kb(e,t,r)));case"hash_table":return Yb(e,t,r,n);case"custom":const a=bg(e.op);if(a&&a.customExecutor)return a.customExecutor(new ib(e,t,r));throw TypeError(`Custom op ${e.op} is not registered.`);default:throw TypeError(`Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,r);return ct(a)?a.then((e=>[].concat(e))):[].concat(a)}class Rb{constructor(e={},t={},r={},n={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=r,this.functionMap=n,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const r=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map((e=>0===e.id&&0===e.iterationId?"":`${e.frameName}-${e.iterationId}`)).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Fb(e,t,r,n){const P=new Set,a=[];let o=null,u=null;const s=new Set,v=Object.keys(e).map((e=>Lg(e)[0]));let i=[];null!=n&&(i=n.map((e=>Lg(e.name)[0])));const l=[...t];for(;l.length>0;){const e=l.pop();(Hb(e)||Jb(e)||_b(e))&&null==o&&(o=e,u=o.children.map((e=>e.name)).filter((e=>P.has(e)))),P.add(e.name),null==r[e.name]&&(-1===v.indexOf(e.name)&&-1===i.indexOf(e.name)&&(0!==e.inputs.length?e.inputs.forEach((e=>{s.has(e.name)||(s.add(e.name),l.push(e))})):a.push(e.name)))}return{inputs:e,outputs:t,usedNodes:P,missingInputs:a,dynamicNode:o,syncInputs:u}}function Bb(e,t,r){const{usedNodes:n,inputs:P}=r,a=[],o=Object.keys(P).map((e=>Lg(e)[0])).map((t=>e.nodes[t])),u=e.initNodes;o.forEach((e=>{n.has(e.name)&&a.push(e)})),e.weights.forEach((e=>{n.has(e.name)&&a.push(e)})),null!=u&&u.forEach((e=>{n.has(e.name)&&a.push(e)}));const s=new Set,v=[];for(;a.length>0;){const e=a.pop();s.add(e.name),t[e.name]||v.push(e),e.children.forEach((e=>{!s.has(e.name)&&n.has(e.name)&&e.inputs.every((e=>s.has(e.name)))&&a.push(e)}))}return v}const Zb=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],Vb=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],Xb=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function Hb(e){return Zb.indexOf(e.op)>=0}function Jb(e){return Vb.indexOf(e.op)>=0}function _b(e){return Xb.indexOf(e.op)>=0}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class $b{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,null!=e.functions&&Object.keys(e.functions).forEach((t=>{this._functionExecutorMap[t]=new $b(e.functions[t],this)}))}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map((t=>e[t].map((e=>e.id))));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map((e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0})))}get outputs(){return this._outputs.map((e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0})))}get inputNodes(){return this._inputs.map((e=>e.signatureKey||e.name))}get outputNodes(){return this._outputs.map((e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t}))}get functions(){return Object.keys(this._functions).reduce(((e,t)=>(e[t]=this._functions[t].signature,e)),{})}getCompilationKey(e,t){const r=e.map((e=>e.name)).sort(),n=t.map((e=>e.name)).sort();return r.join(this.SEPERATOR)+"--"+n.join(this.SEPERATOR)}compile(e,t){const r=Fb(e,t,this.weightMap,this._initNodes),{missingInputs:n,dynamicNode:P,syncInputs:a}=r;if(null!=P)throw new Error(`This execution contains the node '${P.name}', which has the dynamic op '${P.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${a}]`);if(n.length>0){const r=t.map((e=>e.name)),P=Object.keys(e);throw new Error(`Cannot compute the outputs [${r}] from the provided inputs [${P}]. Missing the following inputs: [${n}]`)}return Bb(this.graph,this.weightMap,r)}execute(e,t){e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const n=r.map((e=>this.graph.nodes[Lg(e)[0]])),P=t.map((e=>Lg(e)[0]));let a=P.map((e=>this.graph.nodes[e]));this.resetIntermediateTensors(),0===a.length&&(a=this._outputs);const o=this.getCompilationKey(n,a);let u=this.compiledMap.get(o);null==u&&(u=this.compile(e,a),this.compiledMap.set(o,u));const s={},v={};return Fu((()=>{const r=new Rb(this.weightMap,s,v,this.functionExecutorMap),n=Object.assign({},this.weightMap);Object.keys(e).forEach((t=>{const[r,P]=Lg(t),a=[];a[P]=e[t],n[r]=a}));const a=this.getFrozenTensorIds(n),o={};for(let e=0;e<u.length;e++){const t=u[e];if(!n[t.name]){const e=Nb(t,n,r,this._resourceManager);if(ct(e))throw new Error(`The execution of the op '${t.op}' returned a promise. Please use model.executeAsync() instead.`);n[t.name]=e,this.checkTensorForDisposal(t.name,t,n,r,a,P,o)}}return null==this.parent&&r.dispose(a),t.map((e=>zg(e,n,r)))}))}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map((t=>e[t])).map((e=>e.map((e=>e.id)))));return new Set(t)}checkTensorForDisposal(e,t,r,n,P,a,o){"control"!==t.category&&-1===a.indexOf(e)&&(r[e].forEach((e=>{null!=e&&(o[e.id]=(o[e.id]||0)+t.children.length)})),t.inputs.forEach((e=>{if("control"!==e.category){const a=dg(e.name,r,n);null!=a&&a.forEach((e=>{if(e&&!e.kept&&!P.has(e.id)){const r=o[e.id];if(1===r){if(this.keepTensorForDebug){const[r,P]=yg(t.name,n);this.intermediateTensors[r]||(this.intermediateTensors[r]=[]),this.intermediateTensors[r][P]=e}else e.dispose();delete o[e.id]}else null!=r&&o[e.id]--}}))}})))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach((e=>this.intermediateTensors[e].forEach((e=>e.dispose())))),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach((e=>{this.tensorsMap[e].forEach((e=>{!e||e.kept||e.isDisposed||this.keepIds.has(e.id)||e.dispose()}))}))}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const e in this.intermediateTensors)this.intermediateTensors[e].forEach((e=>e.dispose())),delete this.intermediateTensors[e]}async _executeAsync(e,t,r=!1,n={},P={}){r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepTensorForDebug=mt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(e){console.warn(e.message)}this.resetIntermediateTensors();const a=new Rb(this.weightMap,n,P,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(e,a,t,r);const o=t.map((e=>zg(e,this.tensorsMap,a))),u=o.map((e=>e.id)),s=Object.keys(e).map((t=>e[t].id));return this.keepIds=new Set([...u,...s,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),null==this.parent&&a.dispose(this.keepIds),o}async executeFunctionAsync(e,t,r){const n=e.reduce(((e,t,r)=>(e[this.inputs[r].name]=t,e)),{});return this._executeAsync(n,this.outputNodes,!0,t,r)}async executeWithControlFlow(e,t,r,n){const P=Object.keys(e),a=P.map((e=>this.graph.nodes[Lg(e)[0]])),o=r.map((e=>Lg(e)[0]));let u=o.map((e=>this.graph.nodes[e]));0===u.length&&(u=this._outputs);const{usedNodes:s,missingInputs:v,dynamicNode:i,syncInputs:l}=Fb(e,u,this.weightMap,this._initNodes),c=[...a,...this.graph.weights,...this._initNodes||[]].map((e=>({node:e,contexts:t.currentContext}))),O=Object.assign({},this.weightMap);Object.keys(e).forEach((t=>{const[r,n]=Lg(t),P=[];P[n]=e[t],O[r]=P}));const D={},j=this.getFrozenTensorIds(O),h={};for(;c.length>0;){const e=this.processStack(a,c,t,O,h,j,o,D,s);await Promise.all(e)}null!=i||n||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const p=u.filter((e=>!Hb(e)&&!zg(e.name,O,t))).map((e=>e.name));if(p.length>0){let e="";throw null!=i&&(e=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${l}]`),new Error(`Cannot compute the outputs [${p}] from the provided inputs [${P}]. Consider providing the following inputs: [${v}]. ${e}`)}return O}processStack(e,t,r,n,P,a,o,u,s){const v=[];for(;t.length>0;){const e=t.pop();r.currentContext=e.contexts;let i="";if("Enter"===e.node.op&&Tg("isConstant",e.node,n,r)&&([i]=yg(e.node.name,r)),null==n[e.node.name]){const l=Nb(e.node,n,r,this._resourceManager);i||([i]=yg(e.node.name,r));const c=r.currentContext;ct(l)?v.push(l.then((v=>(n[i]=v,r.currentContext=c,this.checkTensorForDisposal(i,e.node,n,r,a,o,u),this.processChildNodes(e.node,t,r,n,P,s),v)))):(n[i]=l,this.checkTensorForDisposal(i,e.node,n,r,a,o,u),this.processChildNodes(e.node,t,r,n,P,s))}else this.processChildNodes(e.node,t,r,n,P,s)}return v}processChildNodes(e,t,r,n,P,a){e.children.forEach((e=>{const[o]=yg(e.name,r);!P[o]&&a.has(e.name)&&("Merge"===e.op?e.inputNames.some((e=>!!zg(e,n,r)))&&(P[o]=!0,t.push({contexts:r.currentContext,node:e})):e.inputNames.every((e=>!!zg(e,n,r)))&&(P[o]=!0,t.push({contexts:r.currentContext,node:e})))}))}dispose(){Object.keys(this.weightMap).forEach((e=>this.weightMap[e].forEach((e=>e.dispose()))))}checkInputShapeAndType(e){Object.keys(e).forEach((t=>{const r=e[t],[n]=Lg(t),P=this.graph.nodes[n];if(P.attrParams.shape&&P.attrParams.shape.value){const e=P.attrParams.shape.value;xe(e.length===r.shape.length&&r.shape.every(((t,r)=>-1===e[r]||e[r]===t)),(()=>`The shape of dict['${P.name}'] provided in model.execute(dict) must be [${e}], but was [${r.shape}]`))}P.attrParams.dtype&&P.attrParams.dtype.value&&xe(r.dtype===P.attrParams.dtype.value,(()=>`The dtype of dict['${P.name}'] provided in model.execute(dict) must be ${P.attrParams.dtype.value}, but was ${r.dtype}`))}))}mapInputs(e){const t={};for(const r in e)if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[r]){t[this._signature.inputs[r].name]=e[r]}else t[r]=e[r];return t}checkInputs(e){const t=Object.keys(e).filter((e=>{const[t]=Lg(e);return null==this.graph.nodes[t]}));if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map((e=>{if(null!=this._signature&&null!=this._signature.outputs&&null!=this._signature.outputs[e]){return this._signature.outputs[e].name}return e}),{})}checkOutputs(e){e.forEach((e=>{const[t]=Lg(e);if(!this.graph.nodes[t])throw new Error(`The output '${e}' is not found in the graph`)}))}}class eT{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const tT="?tfjs-format=file",rT="model.json";class nT{constructor(e,t={},r=w){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=r,null==t&&(this.loadOptions={}),this.resourceManager=new eT}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(0===t.length)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return ct(e)?e.then((e=>this.loadSync(e))):this.loadSync(e)}loadSync(e){this.artifacts=e;const t=this.artifacts.modelTopology;let r=this.artifacts.signature;if(null!=this.artifacts.userDefinedMetadata){const e=this.artifacts.userDefinedMetadata;null!=e.signature&&(r=e.signature),null!=e.structuredOutputKeys&&(this.structuredOutputKeys=e.structuredOutputKeys)}this.signature=r,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;const n=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new $b(Vg.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,null!=e.modelInitializer&&null!=e.modelInitializer.node){const t=Vg.Instance.transformGraph(e.modelInitializer);this.initializer=new $b(t),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if("string"==typeof e){const t=this.io.getSaveHandlers(e);if(0===t.length)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new Error(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(null==e.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){const r=this.execute(e,this.outputNodes);if(this.structuredOutputKeys){const e={};return(r instanceof za?[r]:r).forEach(((t,r)=>e[this.structuredOutputKeys[r]]=t)),e}return r}normalizeInputs(e){if(!(e instanceof za||Array.isArray(e)))return e;if((e=Array.isArray(e)?e:[e]).length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce(((t,r,n)=>(t[r]=e[n],t)),{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=this.executor.execute(e,t);return r.length>1?r:r[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=await this.executor.executeAsync(e,t);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce(((t,r)=>(t[r]=[e[r]],t)),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function PT(e,t={},r=w){if(null==e)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==t&&(t={}),t.fromTFHub&&"string"==typeof e&&(e=aT(e));const n=new nT(e,t,r);return await n.load(),n}function aT(e){return e.endsWith("/")||(e+="/"),`${e}${rT}${tT}`
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */}da().prototype.pad=function(e,t){return this.throwIfDisposed(),YO(this,e,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
da().prototype.where=function(e,t){return this.throwIfDisposed(),ul(e,this,t)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
da().prototype.mul=function(e){return this.throwIfDisposed(),Rs(this,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
da().prototype.dot=function(e){return this.throwIfDisposed(),Ol(this,e)},
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
da().prototype.add=function(e){return this.throwIfDisposed(),Us(this,e)};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
const oT={},uT={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function sT(e,t){oT[e]=t}function vT(e,t){if(!(e in oT)||null!=t){const r=lT(e,t);if(null===r)return console.log("Could not get context for WebGL version",e),null;oT[e]=r}const r=oT[e];return null==r||r.isContextLost()?(delete oT[e],vT(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),oT[e])}function iT(e){if("undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function lT(e,t){if(1!==e&&2!==e)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const r=null==t?iT(e):t;return r.addEventListener("webglcontextlost",(t=>{t.preventDefault(),delete oT[e]}),!1),1===e?r.getContext("webgl",uT)||r.getContext("experimental-webgl",uT):r.getContext("webgl2",uT)}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var De,je,he;function cT(e,t){return[t,e]}function OT(e,t){return e*t}function DT(e){const t=Ee(e);return Ue(Math.ceil(t/4))}function jT(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function hT(e,t){const[r,n]=jT(e,t);return r*n*4}function pT(e,t){const r=e;let n,P,a,o,u,s,v,i,l,c;return 2===mt().getNumber("WEBGL_VERSION")?(n=r.R32F,P=r.R16F,a=r.RGBA16F,o=r.RGBA32F,u=r.RED,v=4,i=1,l=r.HALF_FLOAT,c=r.FLOAT,s=r.RGBA8):(n=e.RGBA,P=e.RGBA,a=e.RGBA,o=r.RGBA,u=e.RGBA,v=4,i=4,l=null!=t?t.HALF_FLOAT_OES:null,c=e.FLOAT,s=e.RGBA),{internalFormatFloat:n,internalFormatHalfFloat:P,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:u,downloadTextureFormat:s,downloadUnpackNumChannels:v,defaultNumChannels:i,textureTypeHalfFloat:l,textureTypeFloat:c}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function mT(e,t){const r=t();return mt().getBool("DEBUG")&&gT(e),r}function gT(e){const t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+dT(e,t))}!function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"}(De||(De={})),function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"}(je||(je={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(he||(he={}));const bT=5.96e-8,TT=65504;function zT(e){return!!(mt().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||bT<Math.abs(e)&&Math.abs(e)<TT)}function dT(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function yT(e,t){return BT(e,(()=>e.getExtension(t)),'Extension "'+t+'" not supported on this browser.')}function wT(e,t){const r=BT(e,(()=>e.createShader(e.VERTEX_SHADER)),"Unable to create vertex WebGLShader.");if(mT(e,(()=>e.shaderSource(r,t))),mT(e,(()=>e.compileShader(r))),!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function LT(e,t){const r=BT(e,(()=>e.createShader(e.FRAGMENT_SHADER)),"Unable to create fragment WebGLShader.");if(mT(e,(()=>e.shaderSource(r,t))),mT(e,(()=>e.compileShader(r))),mt().get("ENGINE_COMPILE_ONLY"))return r;if(!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw IT(t,e.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}const fT=/ERROR: [0-9]+:([0-9]+):/g;function IT(e,t){const r=fT.exec(t);if(null==r)return console.log(`Couldn't parse line number in error: ${t}`),void console.log(e);const n=+r[1],P=e.split("\n"),a=P.length.toString().length+2,o=P.map(((e,t)=>qe((t+1).toString(),a)+e));let u=0;for(let e=0;e<o.length;e++)u=Math.max(o[e].length,u);const s=o.slice(0,n-1),v=o.slice(n-1,n),i=o.slice(n);console.log(s.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${qe(v[0],u)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(i.join("\n"))}function ST(e){return BT(e,(()=>e.createProgram()),"Unable to create WebGLProgram.")}function AT(e,t){if(mT(e,(()=>e.linkProgram(t))),!mt().get("ENGINE_COMPILE_ONLY")&&!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function xT(e,t){if(mT(e,(()=>e.validateProgram(t))),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function YT(e,t){const r=BT(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return mT(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,r))),mT(e,(()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW))),r}function kT(e,t){const r=BT(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return mT(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r))),mT(e,(()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW))),r}function CT(e){return BT(e,(()=>e.createTexture()),"Unable to create WebGLTexture.")}function ET(e,t){const r=mt().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){throw new Error("Requested texture size "+`[${e}x${t}]`+" is invalid.")}if(e>r||t>r){throw new Error("Requested texture size "+`[${e}x${t}]`+" greater than WebGL maximum on this browser / GPU "+`[${r}x${r}]`+".")}}function QT(e){return BT(e,(()=>e.createFramebuffer()),"Unable to create WebGLFramebuffer.")}function WT(e,t,r,n,P,a,o){const u=e.getAttribLocation(t,r);return-1!==u&&(mT(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,n))),mT(e,(()=>e.vertexAttribPointer(u,P,e.FLOAT,!1,a,o))),mT(e,(()=>e.enableVertexAttribArray(u))),!0)}function UT(e,t,r){ZT(e,r),mT(e,(()=>e.activeTexture(e.TEXTURE0+r))),mT(e,(()=>e.bindTexture(e.TEXTURE_2D,t)))}function qT(e,t,r){return BT(e,(()=>e.getUniformLocation(t,r)),'uniform "'+r+'" not present in program.')}function GT(e,t,r){return e.getUniformLocation(t,r)}function MT(e,t,r,n){mT(e,(()=>UT(e,t,n))),mT(e,(()=>e.uniform1i(r,n)))}function KT(e,t,r){mT(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,r))),mT(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)))}function NT(e,t){mT(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,t))),mT(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)))}function RT(e){const t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+FT(e,t))}function FT(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function BT(e,t,r){const n=mT(e,(()=>t()));if(null==n)throw new Error(r);return n}function ZT(e,t){const r=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+e.TEXTURE0;if(n<e.TEXTURE0||n>r){throw new Error(`textureUnit must be in ${`[gl.TEXTURE0, gl.TEXTURE${r}]`}.`)}}function VT(e,t=2){return Ee(e.slice(0,e.length-t))}function XT(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function HT(e){let t=[1,1,1];return 0===e.length||1===e.length&&1===e[0]||(t=[VT(e),...XT(e)]),t}function JT(e,t=!1){let r=mt().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,e=e.map(((t,r)=>r>=e.length-2?Ie(e[r]):e[r])),1===e.length&&(e=[2,e[0]])),2!==e.length){const t=Ne(e);e=t.newShape}let n=Ee(e);if(e.length<=1&&n<=r)return[1,n];if(2===e.length&&e[0]<=r&&e[1]<=r)return e;if(3===e.length&&e[0]*e[1]<=r&&e[2]<=r)return[e[0]*e[1],e[2]];if(3===e.length&&e[0]<=r&&e[1]*e[2]<=r)return[e[0],e[1]*e[2]];if(4===e.length&&e[0]*e[1]*e[2]<=r&&e[3]<=r)return[e[0]*e[1]*e[2],e[3]];if(4===e.length&&e[0]<=r&&e[1]*e[2]*e[3]<=r)return[e[0],e[1]*e[2]*e[3]];if(t){const t=VT(e);let r=2,P=2;return e.length&&([r,P]=XT(e)),n=t*(r/2)*(P/2),Ue(n).map((e=>2*e))}return Ue(n)}function _T(e){return e%2==0}function $T(e,t){if(Qe(e=e.slice(-2),t=t.slice(-2)))return!0;if(!e.length||!t.length)return!0;if(0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){const r=e.slice(-1)[0],n=t.slice(-1)[0];if(r===n)return!0;if(_T(r)&&_T(n)&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&_T(e[0])&&_T(t[0])}let ez,tz;function rz(e){if(null==ez){const t=vT(e);ez=t.getParameter(t.MAX_TEXTURE_SIZE)}return ez}function nz(e){if(null==tz){const t=vT(e);tz=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,tz)}function Pz(e){if(0===e)return 0;let t;const r=vT(e);return t=az(r,"EXT_disjoint_timer_query_webgl2")&&2===e?2:az(r,"EXT_disjoint_timer_query")?1:0,t}function az(e,t){return null!=e.getExtension(t)}function oz(e){try{if(null!=vT(e))return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function uz(e){if(0===e)return!1;const t=vT(e);if(1===e){if(!az(t,"OES_texture_float"))return!1}else if(!az(t,"EXT_color_buffer_float"))return!1;return vz(t)}function sz(e){if(0===e)return!1;const t=vT(e);if(1!==e){if(az(t,"EXT_color_buffer_float"))return vz(t);const e="EXT_color_buffer_half_float";if(az(t,e)){const r=t.getExtension(e);return iz(t,r)}return!1}if(!az(t,"OES_texture_float"))return!1;if(!az(t,"WEBGL_color_buffer_float"))return!1;return vz(t)}function vz(e){const t=pT(e),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);const P=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(n),P}function iz(e,t){const r=pT(e,t),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);e.texImage2D(e.TEXTURE_2D,0,r.internalFormatHalfFloat,1,1,0,r.textureFormatFloat,r.textureTypeHalfFloat,null);const P=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,P),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);const a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(P),a}function lz(e){if(2!==e)return!1;return null!=vT(e).fenceSync}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const cz=mt();
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function Oz(){let e,t,r,n,P,a,o,u,s,v;return 2===mt().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",r="out",n="in",P="texture",a="outputColor",o="out vec4 outputColor;",u="\n      bool isnan_custom(float val) {\n        uint floatToUint = floatBitsToUint(val);\n        return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",s="",v="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(e="",t="attribute",r="varying",n="varying",P="texture2D",a="gl_FragColor",o="",u="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",s="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",v="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:e,attribute:t,varyingVs:r,varyingFs:n,texture2D:P,output:a,defineOutput:o,defineSpecialNaN:u,defineSpecialInf:s,defineRound:v}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Dz(e,t,r="index"){const n=Pt(t);return n.map(((t,P)=>`${`int ${e[P]} = ${r} / ${t}`}; ${P===n.length-1?`int ${e[P+1]} = ${r} - ${e[P]} * ${t}`:`index -= ${e[P]} * ${t}`};`)).join("")}function jz(e,t,r="index"){const n=Pt(t);return n.map(((t,P)=>`${`int ${e[P]} = ${r} / outShapeStrides[${P}]`}; ${P===n.length-1?`int ${e[P+1]} = ${r} - ${e[P]} * outShapeStrides[${P}]`:`index -= ${e[P]} * outShapeStrides[${P}]`};`)).join("")}function hz(e,t){const r=e.length,n=e.map((e=>`${t}[${e}]`)),P=new Array(r-1);P[r-2]=n[r-1];for(let e=r-3;e>=0;--e)P[e]=`(${P[e+1]} * ${n[e+1]})`;return P}function pz(e,t,r="index"){const n=e.map(((e,t)=>t)),P=hz(n,t);return P.map(((t,n)=>`${`int ${e[n]} = ${r} / ${P[n]}`}; ${n===P.length-1?`int ${e[n+1]} = ${r} - ${e[n]} * ${P[n]}`:`index -= ${e[n]} * ${P[n]}`};`)).join("")}function mz(e){const t=Pt(e).map((e=>e.toString()));return`\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;\n  }\n`}cz.registerFlag("HAS_WEBGL",(()=>cz.getNumber("WEBGL_VERSION")>0)),cz.registerFlag("WEBGL_VERSION",(()=>oz(2)?2:oz(1)?1:0)),cz.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",(()=>!1)),cz.registerFlag("WEBGL_BUFFER_SUPPORTED",(()=>2===cz.get("WEBGL_VERSION"))),cz.registerFlag("WEBGL_CPU_FORWARD",(()=>!0)),cz.registerFlag("WEBGL_FORCE_F16_TEXTURES",(()=>!1)),cz.registerFlag("WEBGL_PACK",(()=>cz.getBool("HAS_WEBGL"))),cz.registerFlag("WEBGL_PACK_NORMALIZATION",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_PACK_CLIP",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_PACK_DEPTHWISECONV",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_PACK_REDUCE",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_LAZILY_UNPACK",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_CONV_IM2COL",(()=>cz.getBool("WEBGL_PACK"))),cz.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(()=>rz(cz.getNumber("WEBGL_VERSION")))),cz.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(()=>nz(cz.getNumber("WEBGL_VERSION")))),cz.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(()=>{const e=cz.getNumber("WEBGL_VERSION");return 0===e?0:Pz(e)})),cz.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(()=>cz.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Ga())),cz.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(()=>uz(cz.getNumber("WEBGL_VERSION")))),cz.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(()=>!cz.getBool("WEBGL_FORCE_F16_TEXTURES")&&cz.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))),cz.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(()=>sz(cz.getNumber("WEBGL_VERSION")))),cz.registerFlag("WEBGL_FENCE_API_ENABLED",(()=>lz(cz.getNumber("WEBGL_VERSION")))),cz.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(()=>cz.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0)),cz.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",(()=>-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)})),cz.registerFlag("WEBGL_FLUSH_THRESHOLD",(()=>Ga()?1:-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)})),cz.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",(()=>128)),cz.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",(()=>!1)),cz.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e5)),cz.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",(()=>128));const gz="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n"
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,{getBroadcastDims:bz}=F;function Tz(e,t,r){const n=[];if(e.forEach((e=>{const t=Ee(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?n.push(`uniform float ${e.name}${t>1?`[${t}]`:""};`):(n.push(`uniform sampler2D ${e.name};`),n.push(`uniform int offset${e.name};`)),r.enableShapeUniforms){const{uniformShape:t}=vd(r.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:n.push(`uniform int ${e.name}Shape;`);break;case 2:n.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:n.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:n.push(`uniform ivec4 ${e.name}Shape;`)}n.push(`uniform ivec2 ${e.name}TexShape;`)}})),r.enableShapeUniforms){switch(t.logicalShape.length){case 1:n.push("uniform int outShape;");break;case 2:n.push("uniform ivec2 outShape;"),n.push("uniform int outShapeStrides;");break;case 3:n.push("uniform ivec3 outShape;"),n.push("uniform ivec2 outShapeStrides;");break;case 4:n.push("uniform ivec4 outShape;"),n.push("uniform ivec3 outShapeStrides;")}n.push("uniform ivec2 outTexShape;")}r.customUniforms&&r.customUniforms.forEach((e=>{n.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:""};`)}));const P=n.join("\n"),a=e.map((e=>yz(e,t,r.packedInputs,r.enableShapeUniforms))).join("\n"),o=t.texShape,u=Oz(),s=fz(u);let v,i,l=Az(u);t.isPacked?(v=wz(t.logicalShape,o,r.enableShapeUniforms),i=Sz(u)):(v=Lz(t.logicalShape,o,r.enableShapeUniforms),i=Iz(u)),r.packedInputs&&(l+=Cz);return[l,s,i,P,v,a,r.userCode].join("\n")}function zz(e,t=!1){const r=e.shapeInfo.logicalShape;switch(r.length){case 0:return Vz(e,t);case 1:return Hz(e,t);case 2:return _z(e,t);case 3:return ed(e,t);case 4:return rd(e,t);case 5:return nd(e);case 6:return Pd(e);default:throw new Error(`${r.length}-D input sampling is not yet supported`)}}function dz(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return Zz(e);case 1:return Xz(e,t);case 2:return Jz(e,t);case 3:return $z(e,t);default:return td(e,t)}}function yz(e,t,r=!1,n){let P="";P+=r?dz(e,n):zz(e,n);const a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(P+=r?od(e,t):ud(e,t)),P}function wz(e,t,r){switch(e.length){case 0:return Ez();case 1:return Qz(e,t,r);case 2:return Rz(e,t,r);case 3:return Uz(e,t,r);default:return Gz(e,t,r)}}function Lz(e,t,r){switch(e.length){case 0:return Ez();case 1:return Wz(e,t,r);case 2:return Fz(e,t,r);case 3:return qz(e,t,r);case 4:return Mz(e,t,r);case 5:return Kz(e,t);case 6:return Nz(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}function fz(e){return`\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ${e.texture2D}(textureSampler, uv).r;\n    }\n  `}function Iz(e){return`\n    void setOutput(float val) {\n      ${e.output} = vec4(val, 0, 0, 0);\n    }\n  `}function Sz(e){return`\n    void setOutput(vec4 val) {\n      ${e.output} = val;\n    }\n  `}function Az(e){return`${e.version}\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ${e.varyingFs} vec2 resultUV;\n    ${e.defineOutput}\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ${e.defineSpecialNaN}\n    ${e.defineSpecialInf}\n    ${e.defineRound}\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${xz}\n    ${Yz}\n    ${kz}\n  `}const xz="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Yz="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",kz="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Cz="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function Ez(){return"\n    int getOutputCoords() {\n      return 0;\n    }\n  "}function Qz(e,t,r){const n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return 1===n[0]?r?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ${n[1]}.0);\n      }\n    `:1===n[1]?r?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ${n[0]}.0);\n      }\n    `:r?"\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ":`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${n[0]}, ${n[1]}));\n      return 2 * (resTexRC.x * ${n[1]} + resTexRC.y);\n    }\n  `}function Wz(e,t,r){return 1===t[0]?r?"\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.x * ${t[1]}.0);\n      }\n    `:1===t[1]?r?"\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.y * ${t[0]}.0);\n      }\n    `:r?"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ":`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      return resTexRC.x * ${t[1]} + resTexRC.y;\n    }\n  `}function Uz(e,t,r){if(r)return"\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";const n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],P=Math.ceil(e[2]/2),a=P*Math.ceil(e[1]/2);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${n[0]}, ${n[1]}));\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n\n      int b = index / ${a};\n      index -= b * ${a};\n\n      int r = 2 * (index / ${P});\n      int c = imod(index, ${P}) * 2;\n\n      return ivec3(b, r, c);\n    }\n  `}function qz(e,t,r){if(r){return`\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    ${jz(["r","c","d"],e)}\n    return ivec3(r, c, d);\n  }\n`}const n=Dz(["r","c","d"],e);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${n}\n      return ivec3(r, c, d);\n    }\n  `}function Gz(e,t,r){if(r)return"\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";const n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],P=Math.ceil(e[e.length-1]/2),a=P*Math.ceil(e[e.length-2]/2);let o=a,u="",s="b, r, c";for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],u=`\n      int b${t} = index / ${o};\n      index -= b${t} * ${o};\n    `+u,s=`b${t}, `+s;return`\n    ivec${e.length} getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${n[0]}, ${n[1]}));\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n\n      ${u}\n\n      int b = index / ${a};\n      index -= b * ${a};\n\n      int r = 2 * (index / ${P});\n      int c = imod(index, ${P}) * 2;\n\n      return ivec${e.length}(${s});\n    }\n  `}function Mz(e,t,r){if(r){return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      ${jz(["r","c","d","d2"],e)}\n      return ivec4(r, c, d, d2);\n    }\n  `}const n=Dz(["r","c","d","d2"],e);return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${n}\n      return ivec4(r, c, d, d2);\n    }\n  `}function Kz(e,t){const r=Dz(["r","c","d","d2","d3"],e);return`\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},\n                             ${t[1]}));\n\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${r}\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  `}function Nz(e,t){const r=Dz(["r","c","d","d2","d3","d4"],e);return`\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${r}\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  `}function Rz(e,t,r){const n=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Qe(e,t))return r?"\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(${n[0]}, ${n[1]}));\n      }\n    `;const P=Math.ceil(e[1]/2);return r?"\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ":`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${n[0]}, ${n[1]}));\n\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n      int r = 2 * (index / ${P});\n      int c = imod(index, ${P}) * 2;\n\n      return ivec2(r, c);\n    }\n  `}function Fz(e,t,r){return Qe(e,t)?r?"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));\n      }\n    `:1===e[1]?r?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    `:1===e[0]?r?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(0, index);\n      }\n    `:r?"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ":`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      int r = index / ${e[1]};\n      int c = index - r * ${e[1]};\n      return ivec2(r, c);\n    }\n  `}function Bz(e){return`offset${e}`}function Zz(e){const t=e.name;return`\n    vec4 ${"get"+t.charAt(0).toUpperCase()+t.slice(1)}() {\n      return ${Oz().texture2D}(${t}, halfCR);\n    }\n  `}function Vz(e,t){const r=e.name,n="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`float ${n}() {return ${r};}`;const[P,a]=e.shapeInfo.texShape;if(1===P&&1===a)return`\n      float ${n}() {\n        return sampleTexture(${r}, halfCR);\n      }\n    `;const o=Bz(r);if(t)return`\n    float ${n}() {\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], ${o});\n      return sampleTexture(${r}, uv);\n    }\n  `;const[u,s]=e.shapeInfo.texShape;return`\n    float ${n}() {\n      vec2 uv = uvFromFlat(${u}, ${s}, ${o});\n      return sampleTexture(${r}, uv);\n    }\n  `}function Xz(e,t){const r=e.name,n="get"+r.charAt(0).toUpperCase()+r.slice(1),P=e.shapeInfo.texShape,a=Oz();if(t)return`\n    vec4 ${n}(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return ${a.texture2D}(${r}, uv);\n    }\n  `;const o=[Math.ceil(P[0]/2),Math.ceil(P[1]/2)];return`\n    vec4 ${n}(int index) {\n      vec2 uv = packedUVfrom1D(\n        ${o[0]}, ${o[1]}, index);\n      return ${a.texture2D}(${r}, uv);\n    }\n  `}function Hz(e,t){const r=e.name,n="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`\n      float ${n}(int index) {\n        ${ad(e)}\n      }\n    `;const P=e.shapeInfo.texShape,a=P[0],o=P[1];if(1===o&&1===a)return`\n      float ${n}(int index) {\n        return sampleTexture(${r}, halfCR);\n      }\n    `;const u=Bz(r);return 1===o?t?`\n      float ${n}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${u}) + 0.5) / float(${r}TexShape[0]));\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${n}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${u}) + 0.5) / ${a}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `:1===a?t?`\n      float ${n}(int index) {\n        vec2 uv = vec2((float(index + ${u}) + 0.5) / float(${r}TexShape[1]), 0.5);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${n}(int index) {\n        vec2 uv = vec2((float(index + ${u}) + 0.5) / ${o}.0, 0.5);\n        return sampleTexture(${r}, uv);\n      }\n    `:t?`\n    float ${n}(int index) {\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${u});\n      return sampleTexture(${r}, uv);\n    }\n  `:`\n    float ${n}(int index) {\n      vec2 uv = uvFromFlat(${a}, ${o}, index + ${u});\n      return sampleTexture(${r}, uv);\n    }\n  `}function Jz(e,t){const r=e.shapeInfo.logicalShape,n=e.name,P="get"+n.charAt(0).toUpperCase()+n.slice(1),a=e.shapeInfo.texShape,o=a[0],u=a[1],s=Oz();if(null!=a&&Qe(r,a))return t?`\n      vec4 ${P}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);\n\n        return ${s.texture2D}(${n}, uv);\n      }\n    `:`\n      vec4 ${P}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${u}.0, ${o}.0);\n\n        return ${s.texture2D}(${n}, uv);\n      }\n    `;if(t)return`\n    vec4 ${P}(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${n}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `;const v=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`\n    vec4 ${P}(int row, int col) {\n      vec2 uv = packedUVfrom2D(${Math.ceil(r[1]/2)}, ${v[0]}, ${v[1]}, row, col);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `}function _z(e,t){const r=e.shapeInfo.logicalShape,n=e.name,P="get"+n.charAt(0).toUpperCase()+n.slice(1),a=e.shapeInfo.texShape;if(null!=a&&Qe(r,a)){if(t)return`\n      float ${P}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);\n        return sampleTexture(${n}, uv);\n      }\n    `;const e=a[0];return`\n    float ${P}(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);\n      return sampleTexture(${n}, uv);\n    }\n  `}const{newShape:o,keptDims:u}=Ne(r),s=o;if(s.length<r.length){const r=["row","col"];return`\n      ${zz(id(e,s),t)}\n      float ${P}(int row, int col) {\n        return ${P}(${ld(r,u)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${P}(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(${r[1]}, 1)));\n        ${ad(e)}\n      }\n    `;const v=a[0],i=a[1],l=Bz(n);return 1===i?t?`\n      float ${P}(int row, int col) {\n        float index = dot(vec3(row, col, ${l}), vec3(${n}Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(${n}TexShape[0]));\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n    float ${P}(int row, int col) {\n      float index = dot(vec3(row, col, ${l}), vec3(${r[1]}, 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ${v}.0);\n      return sampleTexture(${n}, uv);\n    }\n  `:1===v?t?`\n      float ${P}(int row, int col) {\n        float index = dot(vec3(row, col, ${l}), vec3(${n}Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(${n}TexShape[1]), 0.5);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n    float ${P}(int row, int col) {\n      float index = dot(vec3(row, col, ${l}), vec3(${r[1]}, 1, 1));\n      vec2 uv = vec2((index + 0.5) / ${i}.0, 0.5);\n      return sampleTexture(${n}, uv);\n    }\n  `:t?`\n      float ${P}(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${n}Shape[1] + col + ${l};\n        vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n  float ${P}(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ${r[1]} + col + ${l};\n    vec2 uv = uvFromFlat(${v}, ${i}, index);\n    return sampleTexture(${n}, uv);\n  }\n`}function $z(e,t){const r=e.shapeInfo.logicalShape,n=e.name,P="get"+n.charAt(0).toUpperCase()+n.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(1===r[0]){const n=[1,2],a=["b","row","col"];return`\n        ${dz(id(e,r.slice(1)),t)}\n        vec4 ${P}(int b, int row, int col) {\n          return ${P}(${ld(a,n)});\n        }\n      `}const u=Oz();if(t)return`\n    vec4 ${P}(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${n}Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return ${u.texture2D}(${n}, uv);\n    }\n  `;const s=o[0],v=o[1],i=Math.ceil(r[2]/2);return`\n    vec4 ${P}(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ${s}, ${v}, ${i*Math.ceil(r[1]/2)}, ${i}, b, row, col);\n      return ${u.texture2D}(${n}, uv);\n    }\n  `}function ed(e,t){const r=e.shapeInfo.logicalShape,n=e.name,P="get"+n.charAt(0).toUpperCase()+n.slice(1),a=r[1]*r[2],o=r[2],{newShape:u,keptDims:s}=Ne(r),v=u;if(v.length<r.length){const r=["row","col","depth"];return`\n        ${zz(id(e,v),t)}\n        float ${P}(int row, int col, int depth) {\n          return ${P}(${ld(r,s)});\n        }\n      `}if(e.shapeInfo.isUniform)return`\n      float ${P}(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(${a}, ${o}, 1)));\n        ${ad(e)}\n      }\n    `;const i=e.shapeInfo.texShape,l=i[0],c=i[1],O=e.shapeInfo.flatOffset;if(c===a&&null==O)return t?`\n      float ${P}(int row, int col, int depth) {\n        int stride1 = ${n}Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${n}TexShape[1], ${n}TexShape[0]);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n        float ${P}(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(${o}, 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(${c}.0, ${l}.0);\n          return sampleTexture(${n}, uv);\n        }\n      `;if(c===o&&null==O)return t?`\n      float ${P}(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(${n}Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n    float ${P}(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(${r[1]}, 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}.0, ${l}.0);\n      return sampleTexture(${n}, uv);\n    }\n  `;const D=Bz(n);return t?`\n    float ${P}(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = ${n}Shape[1] * ${n}Shape[2];\n      int stride1 = ${n}Shape[2];\n      int index = row * ${a} + col * ${o} + depth + ${D};\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);\n      return sampleTexture(${n}, uv);\n    }\n    `:`\n      float ${P}(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${a} + col * ${o} + depth + ${D};\n        vec2 uv = uvFromFlat(${l}, ${c}, index);\n        return sampleTexture(${n}, uv);\n      }\n  `}function td(e,t){const r=e.name,n="get"+r.charAt(0).toUpperCase()+r.slice(1),P=Oz();if(t)return`\n    vec4 ${n}(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(${r}Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= ${r}Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${P.texture2D}(${r}, uv);\n    }\n  `;const a=e.shapeInfo.logicalShape,o=a.length,u=e.shapeInfo.texShape,s=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],v=s[0],i=s[1],l=Math.ceil(a[o-1]/2);let c=l*Math.ceil(a[o-2]/2),O="int b, int row, int col",D=`b * ${c} + (row / 2) * ${l} + (col / 2)`;for(let e=2;e<o-1;e++)O=`int b${e}, `+O,c*=a[o-e-1],D=`b${e} * ${c} + `+D;return`\n    vec4 ${n}(${O}) {\n      int index = ${D};\n      int texR = index / ${i};\n      int texC = index - texR * ${i};\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${i}, ${v});\n      return ${P.texture2D}(${r}, uv);\n    }\n  `}function rd(e,t){const r=e.shapeInfo.logicalShape,n=e.name,P="get"+n.charAt(0).toUpperCase()+n.slice(1),a=r[3],o=r[2]*a,u=r[1]*o,{newShape:s,keptDims:v}=Ne(r);if(s.length<r.length){const r=["row","col","depth","depth2"];return`\n      ${zz(id(e,s),t)}\n      float ${P}(int row, int col, int depth, int depth2) {\n        return ${P}(${ld(r,v)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${P}(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(${u}, ${o}, ${a}, 1)));\n        ${ad(e)}\n      }\n    `;const i=e.shapeInfo.flatOffset,l=e.shapeInfo.texShape,c=l[0],O=l[1],D=`int stride2 = ${n}Shape[3];`,j=`int stride1 = ${n}Shape[2] * stride2;`,h=`int stride0 = ${n}Shape[1] * stride1;`;if(O===u&&null==i)return t?`\n      float ${P}(int row, int col, int depth, int depth2) {\n        ${D}\n        ${j}\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${n}TexShape[1], ${n}TexShape[0]);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${P}(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(${o}, ${a}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${O}.0, ${c}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(O===a&&null==i)return t?`\n      float ${P}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${n}Shape[1] * ${n}Shape[2], ${n}Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${n}TexShape[1], ${n}TexShape[0]);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${P}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${r[1]*r[2]}, ${r[2]}, 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${O}.0, ${c}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;const p=Bz(n);return t?`\n    float ${P}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      ${D}\n      ${j}\n      ${h}\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${p});\n      return sampleTexture(${n}, uv);\n    }\n  `:`\n    float ${P}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${o} +\n          depth * ${a} + depth2;\n      vec2 uv = uvFromFlat(${c}, ${O}, index + ${p});\n      return sampleTexture(${n}, uv);\n    }\n  `}function nd(e){const t=e.shapeInfo.logicalShape,r=e.name,n="get"+r.charAt(0).toUpperCase()+r.slice(1),P=t[4],a=t[3]*P,o=t[2]*a,u=t[1]*o,{newShape:s,keptDims:v}=Ne(t);if(s.length<t.length){const t=["row","col","depth","depth2","depth3"];return`\n      ${zz(id(e,s))}\n      float ${n}(int row, int col, int depth, int depth2, int depth3) {\n        return ${n}(${ld(t,v)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${n}(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${u}, ${o}, ${a}, ${P})) +\n          depth3;\n        ${ad(e)}\n      }\n    `;const i=e.shapeInfo.flatOffset,l=e.shapeInfo.texShape,c=l[0],O=l[1];if(O===u&&null==i)return`\n      float ${n}(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(${o}, ${a}, ${P}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${O}.0, ${c}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;if(O===P&&null==i)return`\n      float ${n}(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]},\n               ${t[2]*t[3]}, ${t[3]}, 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${O}.0, ${c}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;return`\n    float ${n}(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${o} + depth * ${a} +\n          depth2 * ${P} + depth3 + ${Bz(r)};\n      vec2 uv = uvFromFlat(${c}, ${O}, index);\n      return sampleTexture(${r}, uv);\n    }\n  `}function Pd(e){const t=e.shapeInfo.logicalShape,r=e.name,n="get"+r.charAt(0).toUpperCase()+r.slice(1),{newShape:P,keptDims:a}=Ne(t);if(P.length<t.length){const t=["row","col","depth","depth2","depth3","depth4"];return`\n      ${zz(id(e,P))}\n      float ${n}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ${n}(${ld(t,a)});\n      }\n    `}const o=t[5],u=t[4]*o,s=t[3]*u,v=t[2]*s,i=t[1]*v;if(e.shapeInfo.isUniform)return`\n      float ${n}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(${i}, ${v}, ${s}, ${u})) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(${o}, 1)));\n        ${ad(e)}\n      }\n    `;const l=e.shapeInfo.flatOffset,c=e.shapeInfo.texShape,O=c[0],D=c[1];if(D===i&&null==l)return`\n      float ${n}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(${v}, ${s}, ${u}, ${o})) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${D}.0, ${O}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;if(D===o&&null==l)return`\n      float ${n}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]*t[4]},\n               ${t[2]*t[3]*t[4]},\n               ${t[3]*t[4]},\n               ${t[4]})) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${D}.0, ${O}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;return`\n    float ${n}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${i} + col * ${v} + depth * ${s} +\n          depth2 * ${u} + depth3 * ${o} + depth4 + ${Bz(r)};\n      vec2 uv = uvFromFlat(${O}, ${D}, index);\n      return sampleTexture(${r}, uv);\n    }\n  `}function ad(e){const t=e.name,r=Ee(e.shapeInfo.logicalShape);return r<2?`return ${t};`:`\n    for (int i = 0; i < ${r}; i++) {\n      if (i == index) {\n        return ${t}[i];\n      }\n    }\n  `}function od(e,t){const r=e.name,n=r.charAt(0).toUpperCase()+r.slice(1),P="get"+n+"AtOutCoords",a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,u=bz(e.shapeInfo.logicalShape,t.logicalShape),s=sd(o),v=o-a;let i;const l=["x","y","z","w","u","v"];i=0===a?"":o<2&&u.length>=1?"coords = 0;":u.map((e=>`coords.${l[e+v]} = 0;`)).join("\n");let c="";c=o<2&&a>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${l[t+v]}`)).join(", ");let O="return outputValue;";const D=1===Ee(e.shapeInfo.logicalShape),j=1===Ee(t.logicalShape);if(1!==a||D||j){if(D&&!j)O=1===o?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){const e=a-2,t=a-1;u.indexOf(e)>-1&&u.indexOf(t)>-1?O="return vec4(outputValue.x);":u.indexOf(e)>-1?O="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(t)>-1&&(O="return vec4(outputValue.xx, outputValue.zz);")}}else O="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return`\n    vec4 ${P}() {\n      ${s} coords = getOutputCoords();\n      ${i}\n      vec4 outputValue = get${n}(${c});\n      ${O}\n    }\n  `}function ud(e,t){const r=e.name,n=r.charAt(0).toUpperCase()+r.slice(1),P="get"+n+"AtOutCoords",a=t.texShape,o=e.shapeInfo.texShape,u=e.shapeInfo.logicalShape.length,s=t.logicalShape.length;if(!e.shapeInfo.isUniform&&u===s&&null==e.shapeInfo.flatOffset&&Qe(o,a))return`\n      float ${P}() {\n        return sampleTexture(${r}, resultUV);\n      }\n    `;const v=sd(s),i=bz(e.shapeInfo.logicalShape,t.logicalShape),l=s-u;let c;const O=["x","y","z","w","u","v"];c=0===u?"":s<2&&i.length>=1?"coords = 0;":i.map((e=>`coords.${O[e+l]} = 0;`)).join("\n");let D="";return D=s<2&&u>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${O[t+l]}`)).join(", "),`\n    float ${P}() {\n      ${v} coords = getOutputCoords();\n      ${c}\n      return get${n}(${D});\n    }\n  `}function sd(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";if(6===e)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function vd(e,t,r){const{newShape:n,keptDims:P}=Ne(t),a=t.length,o=e&&3===a&&1===t[0],u=o?t.slice(1):n,s=!e&&a>1&&!Qe(t,r)&&n.length<a||o;return{useSqueezeShape:s,uniformShape:s?u:t,keptDims:P}}function id(e,t){const r=JSON.parse(JSON.stringify(e));return r.shapeInfo.logicalShape=t,r}function ld(e,t){return t.map((t=>e[t])).join(", ")}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function cd(e,t,r,n){const P=r.map(((e,r)=>{const n={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(n.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[r],shapeInfo:n}})),a=P.map((e=>e.shapeInfo)),o={logicalShape:n.shape,texShape:n.texData.texShape,isUniform:!1,isPacked:n.texData.isPacked,flatOffset:null},u=Tz(P,o,t),s=LT(e.gl,u),v=e.createProgram(s);return mt().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:s,source:u,webGLProgram:v,inShapeInfos:a,outShapeInfo:o,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:s,source:u,webGLProgram:v,inShapeInfos:a,outShapeInfo:o},Od(e,t,v))}function Od(e,t,r){const n={},P={},a={},o=[];let u,s,v,i=null,l=null;l=e.getUniformLocation(r,"NAN",!1),1===mt().getNumber("WEBGL_VERSION")&&(i=e.getUniformLocation(r,"INFINITY",!1));const c=!1;for(let o=0;o<t.variableNames.length;o++){const u=t.variableNames[o];n[u]=e.getUniformLocation(r,u,c),n[`offset${u}`]=e.getUniformLocation(r,`offset${u}`,c),t.enableShapeUniforms&&(P[`${u}Shape`]=e.getUniformLocation(r,`${u}Shape`,c),a[`${u}TexShape`]=e.getUniformLocation(r,`${u}TexShape`,c))}return t.enableShapeUniforms&&(u=e.getUniformLocation(r,"outShape",c),v=e.getUniformLocation(r,"outShapeStrides",c),s=e.getUniformLocation(r,"outTexShape",c)),t.customUniforms&&t.customUniforms.forEach(((t,n)=>{o[n]=e.getUniformLocation(r,t.name,c)})),{uniformLocations:n,customUniformLocations:o,infLoc:i,nanLoc:l,inShapesLocations:P,inTexShapesLocations:a,outShapeLocation:u,outShapeStridesLocation:v,outTexShapeLocation:s}}function Dd(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach(((e,r)=>{const n=e.logicalShape,P=t[r],a=P.shape;if(!Qe(n,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${a} must match`);if(e.isUniform&&P.isUniform)return;const o=e.texShape,u=P.isUniform?null:P.texData.texShape;if(!Qe(o,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${u} must match`)}))}function jd(e,t,r,n,P){t.program.enableShapeUniforms||(Dd(t.inShapeInfos,r),Dd([t.outShapeInfo],[n]));const a=n.texData.texture,o=n.texData.texShape;n.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),1===mt().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN),r.forEach(((r,n)=>{const P=t.program.variableNames[n],a=t.uniformLocations[P],o=t.uniformLocations[`offset${P}`],u=t.inShapesLocations[`${P}Shape`],s=t.inTexShapesLocations[`${P}TexShape`];if(u){const{uniformShape:n}=vd(t.program.packedInputs,r.shape,r.texData.texShape);switch(n.length){case 1:e.gl.uniform1iv(u,new Int32Array(n));break;case 2:e.gl.uniform2iv(u,new Int32Array(n));break;case 3:e.gl.uniform3iv(u,new Int32Array(n));break;case 4:e.gl.uniform4iv(u,new Int32Array(n))}}if(s&&e.gl.uniform2i(s,r.texData.texShape[0],r.texData.texShape[1]),null!=a)if(r.isUniform)if(Ee(r.shape)<2)e.gl.uniform1f(a,r.uniformValues[0]);else{let t=r.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}else null!=r.texData.slice&&null!=o&&e.gl.uniform1i(o,r.texData.slice.flatOffset),e.setInputMatrixTexture(r.texData.texture.texture,a,n)}));const u=t.outShapeLocation;if(u)switch(n.shape.length){case 1:e.gl.uniform1iv(u,new Int32Array(n.shape));break;case 2:e.gl.uniform2iv(u,new Int32Array(n.shape));break;case 3:e.gl.uniform3iv(u,new Int32Array(n.shape));break;case 4:e.gl.uniform4iv(u,new Int32Array(n.shape))}if(t.outShapeStridesLocation){const r=Pt(n.shape);switch(n.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(r));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(r));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(r))}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,n.texData.texShape[0],n.texData.texShape[1]),t.program.customUniforms&&P&&t.program.customUniforms.forEach(((r,n)=>{const a=t.customUniformLocations[n],o=P[n];if("float"===r.type)e.gl.uniform1fv(a,o);else if("vec2"===r.type)e.gl.uniform2fv(a,o);else if("vec3"===r.type)e.gl.uniform3fv(a,o);else if("vec4"===r.type)e.gl.uniform4fv(a,o);else if("int"===r.type)e.gl.uniform1iv(a,o);else if("ivec2"===r.type)e.gl.uniform2iv(a,o);else if("ivec3"===r.type)e.gl.uniform3iv(a,o);else{if("ivec4"!==r.type)throw Error(`uniform type ${r.type} is not supported yet.`);e.gl.uniform4iv(a,o)}})),e.executeProgram()}function hd(e,t,r){let n="";t.concat(r).forEach((t=>{const P=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){const a=t.texData.texShape,{useSqueezeShape:o,uniformShape:u,keptDims:s}=vd(e.packedInputs,t.shape,a);let v="",i="",l="";if(1===u.length&&e.packedInputs){const e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];v=`${e[0]>1}_${e[1]>1}`}else if(2!==u.length||e.packedInputs){if(u.length>2&&!e.packedInputs){const e=Pt(u);l=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}}else i=`${u[0]>1}_${u[1]>1}`;const c=t.shape.length,O=2===u.length&&Qe(t.shape,a),D=1===Ee(t.shape),j=Ps(t.shape,r.shape),h=!e.packedInputs&&c===r.shape.length&&Qe(a,r.texData.texShape),p=e.packedInputs||u.length>2?"":`${a[0]>1}_${a[1]>1}`;n+=`${c}_${h}_${o?s:""}_${u.length}_${D}_${j}_${O}_${v}_${i}_${l}_${p}_${P}`}else{const e=t.isUniform?"uniform":t.texData.texShape;n+=`${t.shape}_${e}_${P}`}}));const P=e.userCode;let a=e.constructor.name;return a+="_"+n+"_"+P+`${mt().getNumber("WEBGL_VERSION")}`,a}function pd(e){return mt().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class md{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=De.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=Oz();this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?jz(["r","c","d"],e):Dz(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ${t.output} = result;\n      }\n    `}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class gd{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=De.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=Oz();this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?jz(["r","c","d"],e):Dz(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ${t.output} = result;\n      }\n    `}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class bd{constructor(e){this.variableNames=["A"],this.outTexUsage=je.DOWNLOAD;const t=Oz();this.outputShape=e,this.userCode=`\n      ${gz}\n\n      void main() {\n        float x = getAAtOutCoords();\n        ${t.output} = encode_float(x);\n      }\n    `}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Td{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=je.DOWNLOAD;const t=Oz();this.outputShape=e,this.userCode=`\n      ${gz}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ${t.output} = encode_float(x);\n      }\n    `}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class zd{constructor(e,t=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=Oz();this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length);let n="result";t&&(n="floor(result * 255. + 0.5)"),this.userCode=`\n      ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":mz(e)}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n\n        int r = flatIndex / texShape[1];\n        int c = imod(flatIndex, texShape[1]);\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n        vec4 values = ${r.texture2D}(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        ${r.output} = vec4(${n}, 0., 0., 0.);\n      }\n    `}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class dd{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=Oz();this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length);let n="",P="result";t&&(P="floor(result * 255. + 0.5)");for(let t=0;t<=1;t++)for(let P=0;P<=1;P++){const a=2*t+P;n+=`\n          localCoords = coords;\n          if(localCoords[2] + ${P} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {\n          localCoords[2] += ${P};\n          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {\n            localCoords[1] += ${t};\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ${r.texture2D}(A, uv);\n\n            if (offset == 0) {\n              result[${a}] = values[0];\n            } else if (offset == 1) {\n              result[${a}] = values[1];\n            } else if (offset == 2) {\n              result[${a}] = values[2];\n            } else {\n              result[${a}] = values[3];\n            }\n          }\n        }\n        `}this.userCode=`\n        ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":mz(e)}\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ${n}\n\n          ${r.output} = ${P};\n        }\n    `}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function yd(e){const t=Oz();return wT(e,`${t.version}\n    precision highp float;\n    ${t.attribute} vec3 clipSpacePos;\n    ${t.attribute} vec2 uv;\n    ${t.varyingVs} vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }`)}function wd(e){return YT(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Ld(e){return kT(e,new Uint16Array([0,1,2,2,1,3]))}function fd(e,t,r,n,P,a){ET(t,r);const o=CT(e),u=e.TEXTURE_2D;return mT(e,(()=>e.bindTexture(u,o))),mT(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE))),mT(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE))),mT(e,(()=>e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST))),mT(e,(()=>e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST))),1===mt().getNumber("WEBGL_VERSION")?mT(e,(()=>e.texImage2D(u,0,n,t,r,0,P,a,null))):mT(e,(()=>e.texStorage2D(u,1,n,t,r))),mT(e,(()=>e.bindTexture(e.TEXTURE_2D,null))),{texture:o,texShape:[r,t]}}function Id(e){return e.internalFormatFloat}function Sd(e,t,r,n){const[P,a]=cT(t,r);return fd(e,P,a,Id(n),n.textureFormatFloat,e.FLOAT)}function Ad(e){return e.internalFormatHalfFloat}function xd(e,t,r,n){const[P,a]=cT(t,r);return fd(e,P,a,Ad(n),n.textureFormatFloat,n.textureTypeHalfFloat)}function Yd(e){return e.downloadTextureFormat}function kd(e,t,r,n){const[P,a]=cT(t,r);return fd(e,P,a,Yd(n),e.RGBA,e.UNSIGNED_BYTE)}function Cd(e){return e.internalFormatPackedFloat}function Ed(e,t,r,n){const[P,a]=jT(t,r);return fd(e,P,a,Cd(n),e.RGBA,e.FLOAT)}function Qd(e){return e.internalFormatPackedHalfFloat}function Wd(e,t,r,n){const[P,a]=jT(t,r);return fd(e,P,a,Qd(n),e.RGBA,n.textureTypeHalfFloat)}function Ud(e,t,r){mT(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,r)));return WT(e,t,"clipSpacePos",r,3,20,0)&&WT(e,t,"uv",r,2,20,12)}function qd(e,t,r,n,P,a){let o,u,s;mT(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),P instanceof Uint8Array?(o=new Uint8Array(r*n*4),u=e.UNSIGNED_BYTE,s=e.RGBA):(o=new Float32Array(r*n*4),u=e.FLOAT,s=a.internalFormatPackedFloat),o.set(P),2===mt().getNumber("WEBGL_VERSION")?mT(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,n,e.RGBA,u,o))):mT(e,(()=>e.texImage2D(e.TEXTURE_2D,0,s,r,n,0,e.RGBA,u,o))),mT(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function Gd(e,t,r){mT(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),r.data instanceof Uint8Array?2===mt().getNumber("WEBGL_VERSION")?mT(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,e.RGBA,e.UNSIGNED_BYTE,r.data))):mT(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data))):2===mt().getNumber("WEBGL_VERSION")?mT(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,r))):mT(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r))),mT(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function Md(e,t,r,n){const P=e.createBuffer();mT(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,P)));const a=16*t*r;return mT(e,(()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ))),mT(e,(()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0))),mT(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null))),P}function Kd(e,t,r){const n=e,P=new Float32Array(r);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,P),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),P}function Nd(e,t,r,n){const[P,a]=cT(t,r),o=new Uint8Array(OT(t*r,4));return mT(e,(()=>e.readPixels(0,0,P,a,n.downloadTextureFormat,e.UNSIGNED_BYTE,o))),new Float32Array(o.buffer)}function Rd(e,t,r,n,P,a,o,u){const s=e,v=new Float32Array(hT(a,o));return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,v),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),v}function Fd(e,t,r){const n=new Float32Array(t*r*4);return mT(e,(()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,n))),n}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Bd{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const t=mt().getNumber("WEBGL_VERSION");null!=e?(this.gl=e,sT(t,e)):this.gl=vT(t);let r="WEBGL_color_buffer_float";const n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===mt().getNumber("WEBGL_VERSION")){const e="OES_texture_float",t="OES_texture_half_float";if(this.textureFloatExtension=yT(this.gl,e),az(this.gl,t))this.textureHalfFloatExtension=yT(this.gl,t);else if(mt().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),az(this.gl,n))this.colorBufferHalfFloatExtension=yT(this.gl,n);else if(mt().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",az(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!az(this.gl,n))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension(n)}this.vertexBuffer=wd(this.gl),this.indexBuffer=Ld(this.gl),this.framebuffer=QT(this.gl),this.textureConfig=pT(this.gl,this.textureHalfFloatExtension)}get debug(){return mt().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;mT(e,(()=>e.finish())),mT(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,null))),mT(e,(()=>e.deleteFramebuffer(this.framebuffer))),mT(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,null))),mT(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null))),mT(e,(()=>e.deleteBuffer(this.indexBuffer))),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),Sd(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),xd(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),kd(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),Gd(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,r,n){this.throwIfDisposed(),qd(this.gl,e,t,r,n,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),Wd(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),Ed(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(NT(this.gl,this.framebuffer),this.outputTexture=null),mT(this.gl,(()=>this.gl.deleteTexture(e)))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,r){return this.downloadMatrixDriver(e,(()=>Nd(this.gl,t,r,this.textureConfig)))}downloadPackedMatrixFromBuffer(e,t,r,n,P,a){return Rd(this.gl,e,0,0,0,P,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return Kd(this.gl,e,t)}createBufferFromTexture(e,t,r){this.bindTextureToFrameBuffer(e);const n=Md(this.gl,t,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,r;if(mt().getBool("WEBGL_FENCE_API_ENABLED")){const n=e,P=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),r=()=>{const e=n.clientWaitSync(P,0,0);return e===n.ALREADY_SIGNALED||e===n.CONDITION_SATISFIED},t=P}else mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),r=()=>this.isQueryAvailable(t,mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):r=()=>!0;return{query:t,isFencePassed:r}}downloadMatrixFromPackedTexture(e,t,r){return this.downloadMatrixDriver(e,(()=>Fd(this.gl,t,r)))}createProgram(e){this.throwIfDisposed();const t=this.gl;null==this.vertexShader&&(this.vertexShader=yd(t));const r=ST(t);return mT(t,(()=>t.attachShader(r,this.vertexShader))),mT(t,(()=>t.attachShader(r,e))),AT(t,r),this.debug&&xT(t,r),this.vertexAttrsAreBound||(this.setProgram(r),this.vertexAttrsAreBound=Ud(t,this.program,this.vertexBuffer)),r}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&mT(this.gl,(()=>this.gl.deleteProgram(e)))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&xT(this.gl,this.program),mT(this.gl,(()=>this.gl.useProgram(e)))}getUniformLocation(e,t,r=!0){return this.throwIfDisposed(),r?qT(this.gl,e,t):GT(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),mT(this.gl,(()=>this.gl.getAttribLocation(e,t)))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,r){this.throwIfDisposed(),this.throwIfNoProgram(),MT(this.gl,e,t,r)}setOutputMatrixTexture(e,t,r){this.setOutputMatrixTextureDriver(e,r,t)}setOutputPackedMatrixTexture(e,t,r){this.throwIfDisposed();const[n,P]=jT(t,r);this.setOutputMatrixTextureDriver(e,n,P)}setOutputMatrixWriteRegion(e,t,r,n){this.setOutputMatrixWriteRegionDriver(r,e,n,t)}setOutputPackedMatrixWriteRegion(e,t,r,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&xT(this.gl,this.program),RT(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),mT(e,(()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),mT(this.gl,(()=>this.gl.finish()))}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=yT(this.gl,2===mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2(),r=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,r),r}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2();return void e.endQuery(t.TIME_ELAPSED_EXT)}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await Ge((()=>this.disposed||this.isQueryAvailable(e,mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")))),this.getQueryTime(e,mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){const t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{const t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){const t=this.gl,r=this.getQueryTimerExtensionWebGL2(),n=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),n&&!this.disjoint}{const t=this.getQueryTimerExtensionWebGL1(),r=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise((t=>{this.addItemToPoll((()=>e.isFencePassed()),(()=>t()))}))}pollItems(){const e=Zd(this.itemsToPoll.map((e=>e.isDoneFn)));for(let t=0;t<=e;++t){const{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||Ge((()=>(this.pollItems(),0===this.itemsToPoll.length)))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),KT(this.gl,e,this.framebuffer),this.debug&&RT(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(KT(this.gl,this.outputTexture,this.framebuffer),this.debug&&RT(this.gl)):NT(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const r=t();return this.unbindTextureToFrameBuffer(),r}setOutputMatrixTextureDriver(e,t,r){this.throwIfDisposed();const n=this.gl;KT(n,e,this.framebuffer),this.debug&&RT(n),this.outputTexture=e,mT(n,(()=>n.viewport(0,0,t,r))),mT(n,(()=>n.scissor(0,0,t,r)))}setOutputMatrixWriteRegionDriver(e,t,r,n){this.throwIfDisposed(),mT(this.gl,(()=>this.gl.scissor(e,t,r,n)))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw new Error("No GPU program is currently set.")}}function Zd(e){let t=0;for(;t<e.length;++t){if(!e[t]())break}return t-1}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Vd(e){const t=new Float32Array(e.length);for(let r=0;r<e.length;++r)t[r]=Math.abs(e[r]);return t}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Xd(e){return(t,r,n,P,a)=>{const o=os(t,r),u=o.length,s=Pt(o),v=Re(a,Ee(o)),i=t.length,l=r.length,c=Pt(t),O=Pt(r),D=Ps(t,o),j=Ps(r,o);if(D.length+j.length===0)for(let t=0;t<v.length;++t)v[t]=e(n[t%n.length],P[t%P.length]);else for(let t=0;t<v.length;++t){const r=lt(t,u,s),a=r.slice(-i);D.forEach((e=>a[e]=0));const o=it(a,i,c),h=r.slice(-l);j.forEach((e=>h[e]=0));const p=it(h,l,O);v[t]=e(n[o],P[p])}return[v,o]}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Hd=Xd(((e,t)=>e+t));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Jd(e,t,r,n,P){const a=Ee(n),o=st(P,r);for(let r=0;r<e.length;r++){const n=e[r];if(n<0)throw new Error("Input x must be non-negative!");n>=P||(o[n]+=a>0?t[r]:1)}return o}function _d(e,t,r,n=!1){const P=e.shape[0],a=e.shape[1],o=au([P,r],t.dtype);for(let u=0;u<P;u++)for(let P=0;P<a;P++){const a=e.get(u,P);if(a<0)throw new Error("Input x must be non-negative!");a>=r||(n?o.set(1,u,a):t.size>0?o.set(o.get(u,a)+t.get(u,P),u,a):o.set(o.get(u,a)+1,u,a))}return o}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $d(e){return(t,r,n)=>{const P=Re(r,t.length);for(let r=0;r<t.length;++r)P[r]=e(t[r],n);return P}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ey=$d((e=>Math.ceil(e)));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ty(e,t,r,n){const P=Fe(r,Ee(t));if(n&&"string"!==r){let t=0;e.forEach((e=>{const r=Ee(e.shape);P.set(e.vals,t),t+=r}))}else{let n=0;e.forEach((e=>{const a="string"===r?pg(e.vals):e.vals;let o=0;for(let r=0;r<e.shape[0];++r){const u=r*t[1]+n;for(let t=0;t<e.shape[1];++t)P[u+t]=a[o++]}n+=e.shape[1]}))}return P}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const ry=Xd(((e,t)=>e===t?1:0)),ny=$d((e=>Math.exp(e))),Py=$d((e=>Math.expm1(e))),ay=$d((e=>Math.floor(e)));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function oy(e,t,r,n,P,a,o,u,s){const v=au([n,a],r);for(let r=0;r<n;r++){const n=[];let i=0;for(let t=0;t<P;t++){const a=e[r*P+t];i+=a*o[t],n.push(a)}if(i<0||i>=s/a)throw new Error(`Invalid indices: ${n} does not index into ${u}`);for(let e=0;e<a;e++)v.values[r*a+e]=t.get(...t.indexToLoc(i*a+e))}return v}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function uy(e,t,r){const n=au(r,e.dtype);for(let r=0;r<n.size;++r){const P=n.indexToLoc(r).slice(),a=P[0],o=P[2],u=t.locToIndex([a,o]);P[2]=t.values[u];const s=e.locToIndex(P);0<=s&&s<e.values.length&&(n.values[r]=e.values[s])}return n}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const sy=Xd(((e,t)=>e>t?1:0)),vy=Xd(((e,t)=>e>=t?1:0)),iy=Xd(((e,t)=>e<t?1:0)),ly=Xd(((e,t)=>e<=t?1:0));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function cy(e,t,r){const n=(t-e)/(r-1),P=st(r,"float32");P[0]=e;for(let e=1;e<P.length;e++)P[e]=P[e-1]+n;return P}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Oy=$d((e=>Math.log(e)));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Dy(e,t,r,n){const P=Re(n,Ee(r));for(let r=0;r<P.length;++r){const n=r*t;let a=e[n];for(let r=0;r<t;++r){const t=e[n+r];(Number.isNaN(t)||t>a)&&(a=t)}P[r]=a}return P}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const jy=Xd(((e,t)=>Math.max(e,t))),hy=Xd(((e,t)=>Math.min(e,t))),py=Xd(((e,t)=>e*t));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function my(e,t,r){const n=JP(-1,r);return py([],t,n,e,r)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const gy=Xd(((e,t)=>e!==t?1:0));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function by(e,t,r,n,P){const a=t.length,o=Ee(t),u=Pt(t),s=Pt(P),v=Re(r,Ee(P));for(let t=0;t<o;++t){const r=lt(t,a,u),P=new Array(r.length);for(let e=0;e<P.length;e++)P[e]=r[n[e]];v[it(P,a,s)]=e[t]}return v}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ty(e,t,r,n){const[P,a]=zl(e,n),o=La(t,"int32"),u=st(Ee(P),o),s=Ee(a);for(let e=0;e<u.length;++e){const t=e*s;let n=1;for(let e=0;e<s;++e)n*=r[t+e];u[e]=n}return{outVals:u,outShape:P,outDtype:o}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function zy(e,t,r,n){if(e===t||e<t&&r<0||t<e&&r>1)return st(0,n);const P=st(Math.abs(Math.ceil((t-e)/r)),n);t<e&&1===r&&(r=-1),P[0]=e;for(let e=1;e<P.length;e++)P[e]=P[e-1]+r;return P}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const dy=$d((e=>1/Math.sqrt(e)));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function yy(e,t,r,n,P,a,o,u,s,v){const i=[n/P,P],l=e.values,c=t.values;if(0===n)return au(r,t.dtype);const O=au(i,t.dtype);"string"==typeof s||"number"==typeof s?O.values.fill(s):"boolean"==typeof s&&O.values.fill(+s);for(let e=0;e<a;e++){const a=[];let s=0;for(let t=0;t<o;t++){const r=l[e*o+t];a.push(r),s+=r*u[t]}if(s<0||s>=n/P)throw new Error(`Invalid indices: ${a} does not index into ${r}`);for(let r=0;r<P;r++)v?O.values[s*P+r]+=c[e*P+r]:O.values[s*P+r]=0===t.rank?c[0]:c[e*P+r]}return O}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const wy=$d((e=>1/(1+Math.exp(-e))));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ly(e,t,r,n,P){const a=Is(n,t,r),o=Ee(r),u=Pt(n);if(a){const r=Ss(t,u);return"string"===P?e.slice(r,r+o):e.subarray(r,r+o)}const s=au(n,P,"string"===P?pg(e):e),v=au(r,P);for(let e=0;e<v.size;++e){const r=v.indexToLoc(e),n=r.map(((e,r)=>e+t[r]));v.set(s.get(...n),...r)}return"string"===P?mg(v.values):v.values}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function fy(e,t,r,n,P,a,o){const u=t[0],s=a[0],v=new Array(s),i=new Array(u),l=t[1];if(0===s){if(0!==u)throw new Error(rg(u));return[Fe(r,0),[0,l],Fe(P,0),v,i]}let c=!0,O=0;const D=new Array(s).fill(0);for(let t=0;t<u;++t){const r=e[t*l];if(r<0)throw new Error(ng(t,r));if(r>=s)throw new Error(Pg(t,r,s));++D[r],c=c&&r>=O,O=r}let j=!0;for(let e=0;e<s;++e){const t=0===D[e];v[e]=t,j=j&&!t,D[e]=Math.max(D[e],1),e>0&&(D[e]+=D[e-1])}if(j&&c){const t=e,r=n;for(let e=0;e<u;++e)i[e]=e;return[t,[u,l],r,v,i]}{const t=D[s-1],a=Fe(r,t*l),c=Fe(P,t),O=new Array(s).fill(0);for(let t=0;t<u;++t){const r=e[t*l],P=O[r],o=(0===r?0:D[r-1])+P;O[r]++;for(let r=0;r<l;++r)a[o*l+r]=e[t*l+r];c[o]=n[t],i[t]=o}for(let e=0;e<s;++e){if(0===O[e]){const t=0===e?0:D[e-1];a[t*l+0]=e;for(let e=1;e<l;++e)a[t*l+e]=0;c[t]=o}}return[a,[t,l],c,v,i]}}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Iy(e,t,r,n,P){const a=Ee(n),o=t[0],u=P.length,s=[];let v=1,i=-1;for(let e=0;e<u;++e){const t=P[e];if(-1===t){if(-1!==i)throw new Error(ag(i,e));i=e,s.push(1)}else{if(t<0)throw new Error(og(e,t));v*=t,s.push(t)}}if(-1!==i){if(v<=0)throw new Error("reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero");const e=Math.trunc(a/v);if(v*e!==a)throw new Error(sg(n,s));s[i]=e}if(Ee(s)!==a)throw new Error(vg(n,s));const l=n.length,c=[];if(l>0){c[l-1]=1;for(let e=l-2;e>=0;--e)c[e]=c[e+1]*n[e+1]}const O=[];if(u>0){O[u-1]=1;for(let e=u-2;e>=0;--e)O[e]=O[e+1]*s[e+1]}const D=Fe(r,o*u);for(let t=0;t<o;++t){let r=0;for(let n=0;n<l;++n)r+=e[t*l+n]*c[n];for(let e=0;e<u;++e)D[t*u+e]=Math.trunc(r/O[e]),r%=O[e]}return[D,[o,u],s]}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Sy(e,t,r,n,P,a=!1,o=0){const u=n.length,s=[t[0],e.length/t[0]],v=s[1],i=u>0?P[u-1]+1:0;if(i<0)throw new Error("segment ids must be >= 0");const l=t.slice();l[0]=i;const c=l.reduce(((e,t)=>e*t),1),O=Fe(r,c);if(0===u)return i>0&&O.fill(o),[O,l];if(i<=0)throw new Error("segment ids must be >= 0");let D=0,j=1,h=0,p=P[D];for(;;){let t=0;if(j<u){if(t=P[j],p===t){++j;continue}if(p>=t)throw new Error("segment ids are not increasing")}if(p<0||p>=i)throw new Error(cg(p,i));p>h&&O.fill(o,h*v,p*v);for(let t=D;t<j;++t){const r=n[t];if(r<0||r>=s[0])throw new Error(Og(t,n[t],s[0]));for(let t=0;t<v;t++)O[p*v+t]+=e[r*v+t]}if(a)for(let e=0;e<v;e++)O[p*v+e]/=j-D;if(D=j,++j,h=p+1,p=t,j>u)break}return h<i&&O.fill(o,h*v,i*v),[O,l]}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Ay=$d((e=>Math.sqrt(e))),xy=Xd(((e,t)=>{const r=e-t;return r*r}));
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function Yy(e,t,r,n){const P=au(e,t.dtype);for(let e=0;e<P.size;e++){const a=P.indexToLoc(e),o=new Array(a.length);for(let e=0;e<o.length;e++)o[e]=a[e]*r[e]+n[e];P.set(t.get(...o),...a)}return P}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class ky{constructor(e,t,r,n,P,a){this.separator=ta(e),this.nGramWidths=t,this.leftPad=ta(r),this.rightPad=ta(n),this.padWidth=P,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const r=this.getPadWidth(t);return Math.max(0,e+2*r-t+1)}createNGrams(e,t,r,n,P,a){for(let o=0;o<P;++o){const u=this.getPadWidth(a),s=Math.max(0,u-o),v=Math.max(0,u-(P-(o+1))),i=a-(s+v),l=t+(s>0?0:o-u);let c=0;c+=s*this.leftPad.length;for(let t=0;t<i;++t)c+=e[l+t].length;c+=v*this.rightPad.length;c+=(s+v+i-1)*this.separator.length,r[n+o]=new Uint8Array(c);const O=r[n+o];let D=0;const j=e=>e.forEach((e=>O[D++]=e));for(let e=0;e<s;++e)j(this.leftPad),j(this.separator);for(let t=0;t<i-1;++t)j(e[l+t]),j(this.separator);if(i>0){j(e[l+i-1]);for(let e=0;e<v;++e)j(this.separator),j(this.rightPad)}else{for(let e=0;e<v-1;++e)j(this.rightPad),j(this.separator);j(this.rightPad)}}}compute(e,t){const r=e.length,n=t.length;if(n>0){let e=t[0];if(0!==e)throw new Error(`First split value must be 0, got ${e}`);for(let P=1;P<n;++P){let n=t[P]>=e;if(n=n&&t[P]<=r,!n)throw new Error(`Invalid split value ${t[P]}, must be in [${e}, ${r}]`);e=t[P]}if(e!==r)throw new Error(`Last split value must be data size. Expected ${r}, got ${e}`)}const P=n-1,a=Fe("int32",n);if(0===r||0===n){const e=new Array(r);for(let e=0;e<=P;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=P;++e){const r=t[e]-t[e-1];let n=0;this.nGramWidths.forEach((e=>{n+=this.getNumNGrams(r,e)})),this.preserveShort&&r>0&&0===n&&(n=1),a[e]=a[e-1]+n}const o=new Array(a[P]);for(let r=0;r<P;++r){const n=t[r];let P=a[r];if(this.nGramWidths.forEach((a=>{const u=t[r+1]-t[r],s=this.getNumNGrams(u,a);this.createNGrams(e,n,o,P,s,a),P+=s})),this.preserveShort&&P===a[r]){const a=t[r+1]-t[r];if(0===a)continue;const u=a+2*this.padWidth,s=1;this.createNGrams(e,n,o,P,s,u)}}return[o,a]}}function Cy(e,t,r,n,P,a,o,u){return new ky(r,n,P,a,o,u).compute(e,t)}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ey(e,t,r,n){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)n.push(e.subarray(t,t+1));return}if(1===t.length){const P=t[0];let a=e.indexOf(P);for(;-1!==a;){const t=e.subarray(0,a);r&&0===t.length||n.push(t),e=e.subarray(a+1),a=e.indexOf(P)}return void(r&&0===e.length||n.push(e))}let P=0;for(let a=0;a<e.length+1;a++)if(a===e.length||-1!==t.indexOf(e[a])){const t=e.subarray(P,a);r&&0===t.length||n.push(t),P=a+1}}function Qy(e,t,r){const n=e.length,P=[];let a=0,o=0;const u=new Array(n);for(let s=0;s<n;++s){const n=P.length;Ey(e[s],t,r,P);const v=P.length-n;u[s]=v,a+=v,o=Math.max(o,v)}const s=Fe("int32",2*a),v=new Array(a),i=[n,o];let l=0;for(let e=0;e<n;++e)for(let t=0;t<u[e];++t)s[2*l]=e,s[2*l+1]=t,v[l]=P[l],++l;return[s,v,i]}
/**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Wy(e,t){const r=Fe("int32",e.length);for(let n=0;n<e.length;++n)r[n]=HP(e[n]).modulo(t).getLowBitsUnsigned();return r}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Uy=Xd(((e,t)=>e-t));
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function qy(e,t){const r=new Array(e.rank);for(let n=0;n<r.length;n++)r[n]=e.shape[n]*t[n];const n=au(r,e.dtype);for(let t=0;t<n.values.length;++t){const r=n.indexToLoc(t),P=new Array(e.rank);for(let t=0;t<P.length;t++)P[t]=r[t]%e.shape[t];const a=e.locToIndex(P);n.values[t]=e.values[a]}return n}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Gy=(e,t)=>{const r=t.value-e.value;return 0===r?e.index-t.index:r};function My(e,t,r=0,n=e.length-1){for(;n>r;){if(n-r>600){const P=n-r+1,a=t-r+1,o=Math.log(P),u=.5*Math.exp(2*o/3),s=.5*Math.sqrt(o*u*(P-u)/P)*Math.sign(a-P/2);My(e,t,Math.max(r,Math.floor(t-a*u/P+s)),Math.min(n,Math.floor(t+(P-a)*u/P+s)))}const P=e[t];let a=r,o=n;for(Se(e,r,t),Gy(e[n],P)>0&&Se(e,r,n);a<o;){for(Se(e,a,o),a++,o--;Gy(e[a],P)<0;)a+=1;for(;Gy(e[o],P)>0;)o-=1}0===Gy(e[r],P)?Se(e,r,o):(o+=1,Se(e,o,n)),o<=t&&(r=o+1),t<=o&&(n=o-1)}}function Ky(e,t,r,n,P){const a=t[t.length-1],[o,u]=[e.length/a,a],s=Re(r,o*n),v=Re("int32",o*n);for(let t=0;t<o;t++){const r=t*u,a=e.subarray(r,r+u);let o=new Array(a.length);a.forEach(((e,t)=>o[t]={value:e,index:t})),n<o.length&&(My(o,n),o=o.slice(0,n)),P&&o.sort(Gy);const i=t*n,l=s.subarray(i,i+n),c=v.subarray(i,i+n);for(let e=0;e<n;e++)l[e]=o[e].value,c[e]=o[e].index}const i=t.slice();return i[i.length-1]=n,[au(i,r,s),au(i,"int32",v)]}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Ny(e,t,r,n){const P=Ke(t,r)[0],a=[1,r[0],1];for(let e=0;e<P;e++)a[0]*=r[e];a[1]=r[P];for(let e=P+1;e<r.length;e++)a[2]*=r[e];const o={},u=new Int32Array(r[P]),s=new pa(a,n,e),v=[],i=1===a[0]&&1===a[2];for(let t=0;t<r[P];t++){let r;if(i)r=e[t].toString();else{const e=[];for(let r=0;r<a[0];r++)for(let n=0;n<a[2];n++)e.push(s.get(r,t,n));r=e.join(",")}if(void 0!==o[r])u[t]=o[r];else{const e=Object.keys(o).length;o[r]=e,u[t]=e,v.push(t)}}const l=a.slice();l[1]=Object.keys(o).length;const c=new pa(l,n);v.forEach(((e,t)=>{for(let r=0;r<a[0];r++)for(let n=0;n<a[2];n++)c.set(s.get(r,e,n),r,t,n)}));const O=r.slice();return O[P]=l[1],{outputValues:c.values,outputShape:O,indices:u}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var pe=Object.freeze({__proto__:null,simpleAbsImpl:Vd,addImpl:Hd,bincountImpl:Jd,bincountReduceImpl:_d,ceilImpl:ey,concatImpl:ty,equalImpl:ry,expImpl:ny,expm1Impl:Py,floorImpl:ay,gatherNdImpl:oy,gatherV2Impl:uy,greaterImpl:sy,greaterEqualImpl:vy,lessImpl:iy,lessEqualImpl:ly,linSpaceImpl:cy,logImpl:Oy,maxImpl:Dy,maximumImpl:jy,minimumImpl:hy,multiplyImpl:py,negImpl:my,notEqualImpl:gy,prodImpl:Ty,rangeImpl:zy,rsqrtImpl:dy,scatterImpl:yy,sigmoidImpl:wy,sliceImpl:Ly,sparseFillEmptyRowsImpl:fy,sparseReshapeImpl:Iy,sparseSegmentReductionImpl:Sy,sqrtImpl:Ay,squaredDifferenceImpl:xy,stridedSliceImpl:Yy,stringNGramsImpl:Cy,stringSplitImpl:Qy,stringToHashBucketFastImpl:Wy,subImpl:Uy,tileImpl:qy,topKImpl:Ky,transposeImpl:by,uniqueImpl:Ny});
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const{addImpl:Ry,bincountImpl:Fy,bincountReduceImpl:By,ceilImpl:Zy,concatImpl:Vy,equalImpl:Xy,expImpl:Hy,expm1Impl:Jy,floorImpl:_y,gatherNdImpl:$y,gatherV2Impl:ew,greaterImpl:tw,greaterEqualImpl:rw,lessImpl:nw,lessEqualImpl:Pw,linSpaceImpl:aw,logImpl:ow,maxImpl:uw,maximumImpl:sw,minimumImpl:vw,multiplyImpl:iw,negImpl:lw,notEqualImpl:cw,prodImpl:Ow,rangeImpl:Dw,rsqrtImpl:jw,scatterImpl:hw,sigmoidImpl:pw,simpleAbsImpl:mw,sliceImpl:gw,sparseFillEmptyRowsImpl:bw,sparseReshapeImpl:Tw,sparseSegmentReductionImpl:zw,sqrtImpl:dw,stridedSliceImpl:yw,stringNGramsImpl:ww,stringSplitImpl:Lw,stringToHashBucketFastImpl:fw,subImpl:Iw,tileImpl:Sw,topKImpl:Aw,transposeImpl:xw,uniqueImpl:Yw}=pe;
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function kw(e,t){return["x","y","z","w","u","v"].slice(0,t).map((t=>`${e}.${t}`))}function Cw(e,t){return 1===t?[e]:kw(e,t)}function Ew(e,t){if(1===e)return"rc";let r="";for(let n=0;n<e;n++)r+=t[n],n<e-1&&(r+=",");return r}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Qw{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=pd(this.outputShape.length),0===this.rank)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{const e=Cw("rc",this.rank),t=sd(this.rank),r=this.getOutOfBoundsCondition(e),n=this.getSetup(e),P=this.getOutput(e);this.userCode=`\n        void main() {\n          ${t} rc = getOutputCoords();\n\n          if(${r}) {\n            setOutput(vec4(0));\n          } else {\n            ${n}\n\n            setOutput(vec4(${P}));\n          }\n        }\n      `}}getSourceCoordsArr(e){const t=[];for(let r=0;r<=1;r++)for(let n=0;n<=1;n++){let P=`${0===r?"r":"rp1"}, ${0===n?"c":"cp1"}`;for(let t=2;t<this.rank;t++)P=`${e[e.length-1-t]},`+P;t.push(P)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let r=this.rank-2;r<this.rank;r++)t+=`${e[r]} >= ${this.enableShapeUniforms?`outShape[${r}]`:this.outputShape[r]}`,r<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";const t=e.slice(-2),r=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],n=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`\n      int r = ${t[0]};\n      int c = ${t[1]};\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= ${r};\n      bool rEdge = rp1 >= ${n};\n    `}getOutput(e){const t=this.getSourceCoordsArr(e);if(1===this.rank){return`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),\n            cEdge ? 0. : getA(${t[1]}),\n            rEdge ? 0. : getA(${t[2]}),\n            rEdge || cEdge ? 0. : getA(${t[3]})`}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Ww{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length);let r="";for(let e=0;e<4;e++){let t="thisRC = rc;";e%2==1&&(t+="thisRC.z += 1;"),e>1&&(t+="thisRC.y += 1;"),r+=`\n        ${t}\n        ${e>0?"if(thisRC.y < rows && thisRC.z < cols){":""}\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[${e}] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ${e>0?"}":""}\n      `}this.userCode=`\n      ${Uw(t,this.enableShapeUniforms)}\n      ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":mz(e)}\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};\n        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};\n\n        ${r}\n\n        setOutput(result);\n      }\n    `}}function Uw(e,t){return`\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ${t?pz(["r","c","d"],"inputShape"):Dz(["r","c","d"],e)}\n      return ivec3(r, c, d);\n    }\n  `
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */}class qw{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,r){const n=Rw(t,r),P=Fw(e,n,r);P in this.freeTextures||(this.freeTextures[P]=[]),P in this.usedTextures||(this.usedTextures[P]=[]);const a=Mw(e,n,this.gpgpu.gl,this.gpgpu.textureConfig,r);if(this.freeTextures[P].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();const e=this.freeTextures[P].shift();return this.usedTextures[P].push(e),e}let o;return n===he.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):n===he.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):n===he.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):n===he.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):n===he.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[P].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,r,n){if(null==this.freeTextures)return;const P=Rw(r,n),a=Fw(t,P,n);a in this.freeTextures||(this.freeTextures[a]=[]);const o=Mw(t,P,this.gpgpu.gl,this.gpgpu.textureConfig,n),u=mt().get("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==u&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;const s=this.usedTextures[a],v=s.indexOf(e);if(v<0)throw new Error("Cannot release a texture that was never provided by this texture manager");s.splice(v,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(const e in this.freeTextures)this.freeTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));for(const e in this.usedTextures)this.usedTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Gw(e,t){const r=e;if(t===r.R32F)return 4;if(t===r.R16F)return 2;if(t===r.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===r.RGBA16F)return 8;if(t===r.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function Mw(e,t,r,n,P){const a=Kw(t,n);let o;if(P){const[t,r]=jT(e[0],e[1]);o=t*r}else{const[t,r]=cT(e[0],e[1]);o=t*r}return o*Gw(r,a)}function Kw(e,t){switch(e){case he.PACKED_2X2_FLOAT32:return Cd(t);case he.PACKED_2X2_FLOAT16:return Qd(t);case he.UNPACKED_FLOAT32:return Id(t);case he.UNPACKED_FLOAT16:return Ad(t);case he.PACKED_4X1_UNSIGNED_BYTE:return Yd(t);default:throw new Error(`Unknown physical texture type ${e}`)}}function Nw(e){return mt().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?he.PACKED_2X2_FLOAT32:he.UNPACKED_FLOAT32:e?he.PACKED_2X2_FLOAT16:he.UNPACKED_FLOAT16}function Rw(e,t){if(e===je.UPLOAD)return he.PACKED_2X2_FLOAT32;if(e===je.RENDER||null==e)return Nw(t);if(e===je.DOWNLOAD||e===je.PIXELS)return he.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function Fw(e,t,r){return`${e[0]}_${e[1]}_${t}_${r}`
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */}class Bw{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length),this.userCode=`\n      float unaryOperation(float x) {\n        ${t}\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}const Zw="if (isnan(x)) return x;",Vw="return x;",Xw="return abs(x);",Hw="return (x >= 0.0) ? x : (exp(x) - 1.0);",Jw=Zw+"\n  return (x < 0.0) ? 0.0 : x;\n",_w=Zw+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",$w="return x;",eL="return 1.0 / (1.0 + exp(-1.0 * x));"
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,tL="return x;",rL="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",nL="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",PL="\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",aL="return 1.0 / (1.0 + exp(-1.0 * x));";class oL{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length),this.userCode=`\n      vec4 unaryOperation(vec4 x) {\n        ${t}\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class uL{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=pd(this.outputShape.length);const t=e.length,r=Cw("rc",t),n=sd(t),P=Ew(t,r),a=r.slice(-2),o=t<=1?"rc":`vec2(${a.join(",")})`;this.userCode=`\n      void main() {\n        ${n} rc = getOutputCoords();\n        vec4 packedInput = getA(${P});\n\n        setOutput(getChannel(packedInput, ${o}));\n      }\n    `}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const sL=Uj,vL=1e-7,iL=1e-4,lL={};function cL(e){return e in lL||(lL[e]={}),lL[e]}const OL=mt().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),DL=600;class jL extends we{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!mt().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(null!=e){if(e instanceof Bd)t=e;else{const r=vT(mt().getNumber("WEBGL_VERSION"),e);t=new Bd(r)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const e=vT(mt().getNumber("WEBGL_VERSION"));t=new Bd(e),this.binaryCache=cL(mt().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new qw(this.gpgpu),this.numMBBeforeWarning=null==mt().global.screen?1024:mt().global.screen.height*mt().global.screen.width*window.devicePixelRatio*DL/1024/1024,this.texData=new ye(this,Ru())}nextDataId(){return jL.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,t,r){if((mt().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||mt().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===r&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const n={id:this.nextDataId()};return this.texData.set(n,{shape:t,dtype:r,values:e,usage:je.UPLOAD,refCount:1}),n}refCount(e){if(this.texData.has(e)){return this.texData.get(e).refCount}return 0}incRef(e){this.texData.get(e).refCount++}decRef(e){if(this.texData.has(e)){this.texData.get(e).refCount--}}move(e,t,r,n,P){if(mt().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===n)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:r,dtype:n,values:t,usage:je.UPLOAD,refCount:P})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:r,dtype:n,complexTensorInfos:P,slice:a,shape:o,isPacked:u}=t;if(null!=a){let t;t=u?new oL(o,$w):new Bw(o,$w);const r=this.runWebGLProgram(t,[{dataId:e,shape:o,dtype:n}],n),P=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),P}if(null!=r)return this.convertAndCacheOnCPU(e);if("string"===n)return r;const s=null!=this.activeTimers;let v,i;if(s&&(v=ea()),"complex64"===n){i=Wm(this.readSync(P.real.dataId),this.readSync(P.imag.dataId))}else i=this.getValuesFromTexture(e);return s&&(this.downloadWaitMs+=ea()-v),this.convertAndCacheOnCPU(e,i)}async read(e){if(this.pendingRead.has(e)){const t=this.pendingRead.get(e);return new Promise((e=>t.push(e)))}const t=this.texData.get(e),{values:r,shape:n,slice:P,dtype:a,complexTensorInfos:o,isPacked:u}=t;if(null!=P){let t;t=u?new oL(n,$w):new Bw(n,$w);const r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:a}],a),P=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),P}if(null!=r)return this.convertAndCacheOnCPU(e);if(mt().getBool("DEBUG")&&!mt().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===mt().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let s,v,i=null;if("complex64"!==a&&mt().get("WEBGL_BUFFER_SUPPORTED")){s=this.decode(e);const t=this.texData.get(s.dataId);i=this.gpgpu.createBufferFromTexture(t.texture.texture,...DT(n))}if(this.pendingRead.set(e,[]),"complex64"!==a&&await this.gpgpu.createAndWaitForFence(),"complex64"===a){const e=await Promise.all([this.read(o.real.dataId),this.read(o.imag.dataId)]);v=Wm(e[0],e[1])}else if(null==i)v=this.getValuesFromTexture(e);else{const e=Ee(n);v=this.gpgpu.downloadFloat32MatrixFromBuffer(i,e)}if(null!=s&&this.disposeIntermediateTensorInfo(s),null!=i){const e=this.gpgpu.gl;mT(e,(()=>e.deleteBuffer(i)))}const l=this.convertAndCacheOnCPU(e,v),c=this.pendingRead.get(e);return this.pendingRead.delete(e),c.forEach((e=>e(l))),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&Ru().removeDataId(e,this),this.pendingDeletes--),l}readToGPU(e,t={}){const r=this.texData.get(e),{values:n,shape:P,slice:a,dtype:o,isPacked:u,texture:s}=r;if("complex64"===o)throw new Error("Does not support reading texture for complex64 dtype.");if(null!=a){let r;r=u?new oL(P,$w):new Bw(P,$w);const n=this.runWebGLProgram(r,[{dataId:e,shape:P,dtype:o}],o),a=this.readToGPU(n,t);return this.disposeIntermediateTensorInfo(n),a}if(null==s)throw null!=n?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const v=this.decode(e,t.customTexShape),i=Ru().makeTensorFromTensorInfo(v),l=this.texData.get(v.dataId);return Object.assign({tensorRef:i},l.texture)}bufferSync(e){const t=this.readSync(e.dataId);if("string"===e.dtype)try{const r=t.map((e=>ra(e)));return au(e.shape,e.dtype,r)}catch(e){throw new Error("Failed to decode encoded string bytes into utf-8")}return au(e.shape,e.dtype,t)}checkNumericalProblems(e){if(null!=e)for(let t=0;t<e.length;t++){const r=e[t];if(!zT(r)){if(mt().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${r} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${r} cannot be represented on this device.`)}}}getValuesFromTexture(e){const{shape:t,dtype:r,isPacked:n}=this.texData.get(e),P=Ee(t);if(mt().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const r=this.decode(e),n=this.texData.get(r.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(n.texture.texture,...DT(t)).subarray(0,P);return this.disposeIntermediateTensorInfo(r),a}const a=mt().getBool("WEBGL_PACK")&&!0===n,o=a?HT(t):t,u=a?new Td(o):new bd(o),s=this.runWebGLProgram(u,[{shape:o,dtype:r,dataId:e}],"float32"),v=this.texData.get(s.dataId),i=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture.texture,v.texShape[0],v.texShape[1]).subarray(0,P);return this.disposeIntermediateTensorInfo(s),i}timerAvailable(){return mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,r=[];let n=!1;null==this.programTimersStack?(this.programTimersStack=r,n=!0):this.activeTimers.push(r),this.activeTimers=r,e();const P=Ce(this.activeTimers.map((e=>e.query))).filter((e=>null!=e)),a=Ce(this.activeTimers.map((e=>e.name))).filter((e=>null!=e));this.activeTimers=t,n&&(this.programTimersStack=null);const o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const e=await Promise.all(P);o.kernelMs=Ae(e),o.getExtraProfileInfo=()=>e.map(((e,t)=>({name:a[t],ms:e}))).map((e=>`${e.name}: ${e.ms}`)).join(", ")}else o.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:ea(),endMs:null}}endTimer(e){return mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=ea(),e)}async getQueryTime(e){if(mt().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:r}=this.texData.get(e);return null!=r&&(this.disposeData(r.real.dataId,t),this.disposeData(r.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:r,texShape:n,usage:P,isPacked:a,slice:o}=this.texData.get(e),u=o&&o.origDataId||e,s=this.dataRefCount.get(u);s>1?this.dataRefCount.set(u,s-1):(this.dataRefCount.delete(u),null!=t&&(this.numBytesInGPU-=this.computeBytes(n,r),this.textureManager.releaseTexture(t,n,P,a)));const v=this.texData.get(e);v.texture=null,v.texShape=null,v.isPacked=!1,v.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=OL){return mt().getBool("WEBGL_CPU_FORWARD")&&e.every((e=>null==this.texData.get(e.dataId).texture&&Ee(e.shape)<t))}getGPGPUContext(){return this.gpgpu}where(e){mP("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return sL(e.shape,t)}packedUnaryOp(e,t,r){const n=new oL(e.shape,t),P=this.compileAndRun(n,[e],r);return Ru().makeTensorFromTensorInfo(P)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){const t=mw(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(mt().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Xw,e.dtype);const t=new Bw(e.shape,Xw),r=this.compileAndRun(t,[e]);return Ru().makeTensorFromTensorInfo(r)}makeTensorInfo(e,t,r){let n;if("string"===t&&null!=r&&r.length>0&&_e(r[0])){const P=r.map((e=>ta(e)));n=this.write(P,e,t)}else n=this.write(r,e,t);return this.texData.get(n).usage=null,{dataId:n,shape:e,dtype:t}}makeOutput(e,t,r){return Ru().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,r),this)}unpackTensor(e){const t=new uL(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new Qw(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const r=[VT(e.shape),...XT(e.shape)],n={dtype:e.dtype,shape:r,dataId:e.dataId},P=[VT(t),...XT(t)],a=new Ww(P,r),o=[r],u=this.runWebGLProgram(a,[n],e.dtype,o,!0);return{dataId:u.dataId,shape:t,dtype:u.dtype}}decode(e,t){const r=this.texData.get(e),{isPacked:n,shape:P,dtype:a}=r;if(null!=t){xe(Ee(P)<=t[0]*t[1]*4,(()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data."))}const o=HT(P);let u;u=n?new gd(o):new md(o);const s=[null!=t?t:DT(o)];return{dtype:a,shape:P,dataId:this.runWebGLProgram(u,[{shape:o,dtype:a,dataId:e}],a,s,!0,t).dataId}}runWebGLProgram(e,t,r,n,P=!1,a){const o=this.makeTensorInfo(e.outputShape,r),u=this.texData.get(o.dataId);if(e.packedOutput&&(u.isPacked=!0),e.outPackingScheme===De.DENSE){const t=null!=a?a:DT(e.outputShape);u.texShape=t.map((e=>2*e))}if(null!=e.outTexUsage&&(u.usage=e.outTexUsage),0===Ee(o.shape))return u.values=Re(o.dtype,0),o;const s=[],v=t.map((t=>{if("complex64"===t.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let r=this.texData.get(t.dataId);if(null==r.texture){if(!e.packedInputs&&Ee(t.shape)<=mt().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:r.values};e.packedInputs&&(r.isPacked=!0,r.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!r.isPacked!=!!e.packedInputs)t=r.isPacked?this.unpackTensor(t):this.packTensor(t),s.push(t),r=this.texData.get(t.dataId);else if(r.isPacked&&!$T(r.shape,t.shape)){const e=t,n=t.shape;t.shape=r.shape,t=this.packedReshape(t,n),s.push(t),r=this.texData.get(t.dataId),e.shape=n}return{shape:t.shape,texData:r,isUniform:!1}}));this.uploadToGPU(o.dataId);const i={shape:o.shape,texData:u,isUniform:!1},l=hd(e,v,i),c=this.getAndSaveBinary(l,(()=>cd(this.gpgpu,e,v,i))),O=null!=this.activeTimers;let D;O&&(D=this.startTimer()),mt().get("ENGINE_COMPILE_ONLY")||jd(this.gpgpu,c,v,i,n),s.forEach((e=>this.disposeIntermediateTensorInfo(e))),O&&(D=this.endTimer(D),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(D)}));const j=mt().get("WEBGL_FLUSH_THRESHOLD");if(j>0){const e=ea();e-this.lastGlFlushTime>j&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!mt().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&!1===P){const e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,r,n,P=!1){r=r||t[0].dtype;return this.runWebGLProgram(e,t,r,n,P)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){if(!this.disposed){if(!mt().getBool("IS_TEST")){Object.keys(this.binaryCache).forEach((e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}))}this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0}}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=Fu((()=>{if(!mt().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=mt().getBool("DEBUG");mt().set("DEBUG",!1);const t=this.abs(Cl(1e-8)).dataSync()[0];if(mt().set("DEBUG",e),t>0)return 32}return 16}))),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?vL:iL}uploadToGPU(e){const t=this.texData.get(e),{shape:r,dtype:n,values:P,texture:a,usage:o,isPacked:u}=t;if(null!=a)return;const s=null!=this.activeTimers;let v;s&&(v=ea());let i=t.texShape;if(null==i&&(i=JT(r,u),t.texShape=i),null!=P){const e=HT(r);let a,o=i[1],l=i[0];const c=P instanceof Uint8Array||P instanceof Uint8ClampedArray;!u&&c||([o,l]=jT(i[0],i[1])),a=u?new dd(e,c):new zd(e,c);const O=c?[l,o]:i,D=this.makeTensorInfo(O,n),j=this.texData.get(D.dataId);j.usage=c?je.PIXELS:je.UPLOAD,j.texShape=O,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(D.dataId),o,l,P);const h=[[l,o]],p=!0,m=this.runWebGLProgram(a,[D],n,h,p),g=this.texData.get(m.dataId);t.texShape=g.texShape,t.isPacked=g.isPacked,t.usage=g.usage,mt().get("ENGINE_COMPILE_ONLY")?this.disposeData(m.dataId):(t.texture=g.texture,t.values=null,this.texData.delete(m.dataId)),this.disposeIntermediateTensorInfo(D),s&&(this.uploadWaitMs+=ea()-v)}else{const e=this.acquireTexture(i,o,n,u);t.texture=e}}convertAndCacheOnCPU(e,t){const r=this.texData.get(e),{dtype:n}=r;return this.releaseGPUData(e),null!=t&&(r.values=hL(t,n)),r.values}acquireTexture(e,t,r,n){if(this.numBytesInGPU+=this.computeBytes(e,r),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){const e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,n)}computeBytes(e,t){return e[0]*e[1]*He(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(const[,t]of Object.entries(this.binaryCache)){const r=new Promise((e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}}));e.push(r)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await new Promise((e=>mm((()=>e())))),this.checkCompletionAsync_(e))}checkCompletion_(e){if(!1===this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)){if(console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),!1===this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS))throw IT(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.");throw new Error("Failed to link vertex and fragment shaders.")}return!0}getUniformLocations(){for(const[,e]of Object.entries(this.binaryCache)){const{uniformLocations:t,customUniformLocations:r,infLoc:n,nanLoc:P,inShapesLocations:a,inTexShapesLocations:o,outShapeLocation:u,outShapeStridesLocation:s,outTexShapeLocation:v}=Od(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=t,e.customUniformLocations=r,e.infLoc=n,e.nanLoc=P,e.inShapesLocations=a,e.inTexShapesLocations=o,e.outShapeLocation=u,e.outShapeStridesLocation=s,e.outTexShapeLocation=v}}}function hL(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){const r="int32"===t?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<r.length;++t)r[t]=Math.round(e[t]);return r}throw new Error(`Unknown dtype ${t}`)}
/**
     * @license
     * Copyright 2020 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */jL.nextDataId=0,Ma()&&Vu("webgl",(()=>new jL),2)
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */;class pL{constructor(e,t,r){this.variableNames=["A","B"],this.outputShape=os(t,r),this.enableShapeUniforms=pd(this.outputShape.length),this.userCode=`\n      float binaryOperation(float a, float b) {\n        ${e}\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    `}}
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const mL="\n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n";class gL{constructor(e,t,r,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=os(t,r);const P=this.outputShape.length;this.enableShapeUniforms=pd(P);let a="";if(n)if(0===P||1===Ee(this.outputShape))a="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else{if(a=`\n          ${sd(P)} coords = getOutputCoords();\n        `,1===P)this.enableShapeUniforms?a+="\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ":a+=`\n            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          `;else{const e=Cw("coords",P);this.enableShapeUniforms?a+=`\n            bool nextRowOutOfBounds =\n              (${e[P-2]} + 1) >= outShape[${P} - 2];\n            bool nextColOutOfBounds =\n              (${e[P-1]} + 1) >= outShape[${P} - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `:a+=`\n            bool nextRowOutOfBounds =\n              (${e[P-2]} + 1) >= ${this.outputShape[P-2]};\n            bool nextColOutOfBounds =\n              (${e[P-1]} + 1) >= ${this.outputShape[P-1]};\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `}}this.userCode=`\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ${e}\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ${a}\n\n        setOutput(result);\n      }\n    `}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function bL(e){const{inputs:t,backend:r}=e,{x:n}=t;return r.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}const TL={kernelName:Yr,backendName:"webgl",kernelFunc:bL};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function zL(e){const{inputs:t,backend:r}=e,{real:n,imag:P}=t,a=r.makeTensorInfo(n.shape,"complex64"),o=r.texData.get(a.dataId),u=bL({inputs:{x:n},backend:r}),s=bL({inputs:{x:P},backend:r});return o.complexTensorInfos={real:u,imag:s},a}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const dL="return (a < 0.) ? b * a : a;",yL="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n"
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,wL="return (a < 0.) ? b * a : a;",LL="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n"
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */,fL="if (isnan(x)) return x;";function IL({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:r,dtype:n}){return({inputs:P,backend:a})=>{const{x:o}=P,u=a,s=n||o.dtype;if(u.shouldExecuteOnCPU([o])&&null!=r){const e=u.texData.get(o.dataId),t=r(e.values,s);return u.makeTensorInfo(o.shape,s,t)}let v;return v=mt().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t?new oL(o.shape,t):new Bw(o.shape,e),u.runWebGLProgram(v,[o],s)}}function SL({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:r=!1,supportsComplex:n=!1,cpuKernelImpl:P,dtype:a}){return({inputs:o,backend:u})=>{const{a:s,b:v}=o,i=u;if(n&&"complex64"===s.dtype){const t=i.texData.get(s.dataId),r=i.texData.get(v.dataId),[n,P]=[[t.complexTensorInfos.real,r.complexTensorInfos.real],[t.complexTensorInfos.imag,r.complexTensorInfos.imag]].map((t=>{const[r,n]=t,P={dataId:r.dataId,dtype:r.dtype,shape:s.shape},a={dataId:n.dataId,dtype:n.dtype,shape:v.shape},o=new pL(e,s.shape,v.shape);return i.runWebGLProgram(o,[P,a],La(r.dtype,n.dtype))})),a=zL({inputs:{real:n,imag:P},backend:i});return i.disposeIntermediateTensorInfo(n),i.disposeIntermediateTensorInfo(P),a}const l=a||La(s.dtype,v.dtype);if(("string"===s.dtype||"string"===v.dtype||i.shouldExecuteOnCPU([s,v]))&&null!=P){const e=i.texData.get(s.dataId).values,t=i.texData.get(v.dataId).values,r="string"===s.dtype?pg(e):e,n="string"===s.dtype?pg(t):t,[a,o]=P(s.shape,v.shape,r,n,l),u=i.makeTensorInfo(o,l);return i.texData.get(u.dataId).values=a,u}let c;return c=mt().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t?new gL(t,s.shape,v.shape,r):new pL(e,s.shape,v.shape),i.runWebGLProgram(c,[s,v],l)}}function AL(e,t=!1){if("linear"===e)return t?tL:Vw;if("relu"===e)return t?nL:Jw;if("elu"===e)return t?rL:Hw;if("relu6"===e)return t?PL:_w;if("prelu"===e)return t?LL:wL;if("leakyrelu"===e)return t?yL:dL;if("sigmoid"===e)return t?aL:eL;throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const xL="return a + b;",YL=SL({opSnippet:xL,packedOpSnippet:xL,supportsComplex:!0,cpuKernelImpl:Ry}),kL={kernelName:It,backendName:"webgl",kernelFunc:YL};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class CL{constructor(e,t){this.variableNames=["x"];const{windowSize:r,batchSize:n,inSize:P,outSize:a}=e;this.outputShape=[n,a];const o=4*Math.floor(r/4),u=r%4;let s="sumValue += dot(values, ones);";if(null!=t){const e=1/t;s=`sumValue += dot(values * ${We(e)?e.toPrecision(2):e}, ones);`}let v="";P%r>0&&(v=`\n        if (inIdx < 0 || inIdx >= ${P}) {\n          return 0.0;\n        }\n      `),this.userCode=`\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${v}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${r};\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${o}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${s}\n        }\n\n        int inIdx = inOffset + ${o};\n        if (${1===u}) {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ${s}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ${s}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ${s}\n        }\n        setOutput(sumValue);\n      }\n    `}}
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class EL{constructor(e,t){this.variableNames=["x"];const{windowSize:r,batchSize:n,inSize:P,outSize:a}=e;this.outputShape=[n,a];let o="0.0",u="";"prod"===t?o="1.0":"min"===t?(o="1.0 / 1e-20",u="min"):"max"===t&&(o="-1.0 / 1e-20",u="max");let s=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?s="sumValue":"prod"===t?s="prodValue":"all"===t?s="allValue":"any"===t&&(s="anyValue");const v=4*Math.floor(r/4),i=r%4;let l=`\n      if (${"sum"===t}) {\n        sumValue += dot(values, ones);\n      } else if (${"prod"===t}) {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ${u}(values, minMaxValue);\n        if (${"min"===t} || ${"max"===t}) {\n          minMaxValue = ${u}(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    `,c="vec4";"all"===t?(o="1.0",l="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",c="bvec4"):"any"===t&&(o="0.0",l="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",c="bvec4");let O="";P%r>0&&(O=`\n        if (inIdx < 0 || inIdx >= ${P}) {\n          return initializationValue;\n        }\n      `),this.userCode=`\n      const float initializationValue = ${o};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${O}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${r};\n\n        vec4 minMaxValue = vec4(${o});\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ${v}; i += 4) {\n          int inIdx = inOffset + i;\n          ${c} values = ${c}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${l}\n        }\n\n        int inIdx = inOffset + ${v};\n        if (${1===i}) {\n          ${c} values = ${c}(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ${l}\n        } else if (${2===i}) {\n          ${c} values = ${c}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ${l}\n        } else if (${3===i}) {\n          ${c} values = ${c}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ${l}\n        }\n        setOutput(${s});\n      }\n    `}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function QL(e){const t=[];for(;0===t.length||1!==t[t.length-1].outSize;){const r=t.length?t[t.length-1].outSize:e[1],n=zm(r);t.push({inSize:r,windowSize:n,outSize:Math.ceil(r/n)})}return t}function WL(e,t,r,n){const P=QL(e.shape);let a=e;for(let o=0;o<P.length;o++){const{inSize:u,windowSize:s,outSize:v}=P[o];let i,l;i="mean"===r?0===o?new CL({windowSize:s,inSize:u,batchSize:e.shape[0],outSize:v},u):new CL({windowSize:s,inSize:u,batchSize:e.shape[0],outSize:v}):new EL({windowSize:s,inSize:u,batchSize:e.shape[0],outSize:v},r),l=a,a=n.runWebGLProgram(i,[a],t),l.dataId!==e.dataId&&n.disposeIntermediateTensorInfo(l)}return a}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function UL(e,t,r){const n=[VT(e.shape),...XT(e.shape)],P={dtype:e.dtype,shape:n,dataId:e.dataId},a=[VT(t),...XT(t)],o=new Ww(a,n),u=[n],s=r.runWebGLProgram(o,[P],e.dtype,u,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function qL(e){const{inputs:t,backend:r,attrs:n}=e,{x:P}=t,{shape:a}=n,o=r,u=Ee(P.shape),s=Me(a,u),v=Ee(s);xe(u===v,(()=>`The new shape (${s}) has ${v} elements and the old shape (${P.shape}) has ${u} elements. The new shape and old shape must have the same number of elements.`));const i=o.texData.get(P.dataId);return!i.isPacked||$T(P.shape,s)||null!==i.texture&&$T(i.shape,s)?(o.incRef(P.dataId),{dataId:P.dataId,shape:s,dtype:P.dtype}):UL(P,s,o)}const GL={kernelName:dn,backendName:"webgl",kernelFunc:qL};
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class ML{constructor(e,t){this.variableNames=["A"];const r=new Array(e.length);for(let n=0;n<r.length;n++)r[n]=e[t[n]];this.outputShape=r,this.rank=r.length;const n=sd(this.rank),P=KL(t);this.userCode=`\n    void main() {\n      ${n} resRC = getOutputCoords();\n      setOutput(getA(${P}));\n    }\n    `}}function KL(e){const t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],n=new Array(t);for(let t=0;t<e.length;t++)n[e[t]]=r[t];return n.join()}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class NL{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const r=new Array(e.length);for(let n=0;n<r.length;n++)r[n]=e[t[n]];if(this.outputShape=r,this.rank=r.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const n=sd(this.rank),P=kw("rc",this.rank),a=new Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=P[e];const o=`vec2(${a.slice(-2).join()})`,u=`++${P[this.rank-1]} < ${r[this.rank-1]}`,s=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`\n    void main() {\n      ${n} rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = ${s};\n      if(${u}) {\n        result[1] = ${s};\n      }\n      --${P[this.rank-1]};\n      if(++${P[this.rank-2]} < ${r[this.rank-2]}) {\n        result[2] = ${s};\n        if(${u}) {\n          result[3] = ${s};\n        }\n      }\n      setOutput(result);\n    }\n    `}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function RL(e,t,r){const n=mt().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new NL(e.shape,t):new ML(e.shape,t);return r.runWebGLProgram(n,[e],e.dtype)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function FL(e,t,r,n){const P=t,a=e.shape.length,o=Ke(P,e.shape);let u=o;const s=wl(u,a),v=null!=s;let i=e;v&&(i=RL(e,s,n),u=fl(u.length,a)),yl("sum",u,a);const[l,c]=zl(i.shape,u);let O=l;r&&(O=dl(l,o));const D=Ee(c),j=qL({inputs:{x:i},attrs:{shape:[Ee(e.shape)/D,D]},backend:n}),h=WL(j,fa(e.dtype),"sum",n),p=qL({inputs:{x:h},attrs:{shape:O},backend:n});return n.disposeIntermediateTensorInfo(j),n.disposeIntermediateTensorInfo(h),v&&n.disposeIntermediateTensorInfo(i),p}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function BL(e){const{inputs:t,backend:r,attrs:n}=e,{x:P}=t,{axis:a,keepDims:o}=n;return FL(P,a,o,r)}const ZL={kernelName:Mn,backendName:"webgl",kernelFunc:BL},VL=SL({opSnippet:"\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",packedOpSnippet:"\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  "+mL+"\n  return result;\n"}),XL={kernelName:hn,backendName:"webgl",kernelFunc:VL};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class HL{constructor(e){this.outputShape=[],this.outputShape=bm(e,1),this.variableNames=e.map(((e,t)=>`T${t}`));const t=new Array(e.length-1);t[0]=e[0][1];for(let r=1;r<t.length;r++)t[r]=t[r-1]+e[r][1];const r=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){const n=t[e-1];r.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${n}));`)}const n=t.length,P=t[t.length-1];r.push(`else setOutput(getT${n}(yR, yC-${P}));`),this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ${r.join("\n        ")}\n      }\n    `}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class JL{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=bm(e,t);const r=this.outputShape,n=r.length,P=sd(n),a=Cw("coords",n),o=["x","y","z","w","u","v"].slice(0,n);this.variableNames=e.map(((e,t)=>`T${t}`));const u=new Array(e.length-1);u[0]=e[0][t];for(let r=1;r<u.length;r++)u[r]=u[r-1]+e[r][t];const s=o[t],v=o.slice(-2),i=o.join();let l=`if (${s} < ${u[0]}) {\n        return getChannel(\n            getT0(${i}), vec2(${v.join()}));\n        }`;for(let e=1;e<u.length;e++){const t=u[e-1];l+=`\n        if (${s} < ${u[e]}  && ${s} >= ${u[e-1]}) {\n          return getChannel(\n            getT${e}(${_L(o,s,t)}),\n            vec2(${_L(v,s,t)}));\n        }`}const c=u.length,O=u[u.length-1];l+=`\n        return getChannel(\n          getT${c}(${_L(o,s,O)}),\n          vec2(${_L(v,s,O)}));`,this.userCode=`\n      float getValue(${o.map((e=>"int "+e))}) {\n        ${l}\n      }\n\n      void main() {\n        ${P} coords = getOutputCoords();\n        vec4 result = vec4(getValue(${a}), 0., 0., 0.);\n\n        ${a[n-1]} = ${a[n-1]} + 1;\n        if (${a[n-1]} < ${r[n-1]}) {\n          result.g = getValue(${a});\n        }\n\n        ${a[n-2]} = ${a[n-2]} + 1;\n        if (${a[n-2]} < ${r[n-2]}) {\n          result.a = getValue(${a});\n        }\n\n        ${a[n-1]} = ${a[n-1]} - 1;\n        if (${a[n-2]} < ${r[n-2]} &&\n            ${a[n-1]} < ${r[n-1]}) {\n          result.b = getValue(${a});\n        }\n        setOutput(result);\n      }\n    `}}function _L(e,t,r){const n=e.indexOf(t),P=e.map(((e,t)=>t===n?`${e} - ${r}`:e));return P.join()}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function $L(e){const{inputs:t,backend:r}=e,{input:n}=t;return bL({inputs:{x:r.texData.get(n.dataId).complexTensorInfos.imag},backend:r})}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function ef(e){const{inputs:t,backend:r}=e,{input:n}=t;return bL({inputs:{x:r.texData.get(n.dataId).complexTensorInfos.real},backend:r})}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function tf(e,t,r){const n=e[0].dtype;if("complex64"===n){const n=e.map((e=>ef({inputs:{input:e},backend:r}))),P=e.map((e=>$L({inputs:{input:e},backend:r}))),a=tf(n,t,r),o=tf(P,t,r),u=zL({inputs:{real:a,imag:o},backend:r});return n.forEach((e=>r.disposeIntermediateTensorInfo(e))),P.forEach((e=>r.disposeIntermediateTensorInfo(e))),r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(o),u}let P=r.shouldExecuteOnCPU(e);if("string"===n&&(P=!0),P){const P=e.map((e=>{const n=Ee(e.shape.slice(t));return qL({inputs:{x:e},backend:r,attrs:{shape:[-1,n]}})})),a=P.map((e=>({vals:r.readSync(e.dataId),shape:e.shape}))),o=bm(P.map((e=>e.shape)),1),u=1===P[0].shape[0],s=Vy(a,o,n,u),v=bm(e.map((e=>e.shape)),t),i=r.makeTensorInfo(v,n,s);return P.forEach((e=>r.disposeIntermediateTensorInfo(e))),i}const a=mt().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(e.length>a){const n=[];for(let P=0;P<e.length;P+=a){const o=e.slice(P,P+a);n.push(tf(o,t,r))}const P=tf(n,t,r);for(const e of n)r.disposeIntermediateTensorInfo(e);return P}if(mt().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].shape.length>1){const P=new JL(e.map((e=>e.shape)),t);return r.runWebGLProgram(P,e,n)}const{tensors2D:o,outShape:u}=rf(e,t,r),s=new HL(o.map((e=>e.shape))),v=r.runWebGLProgram(s,o,n);o.forEach((e=>r.disposeIntermediateTensorInfo(e)));const i=qL({inputs:{x:v},attrs:{shape:u},backend:r});return r.disposeIntermediateTensorInfo(v),i}function rf(e,t,r){const n=bm(e.map((e=>e.shape)),t),P=e.map((e=>qL({inputs:{x:e},attrs:{shape:[-1,Ee(e.shape.slice(t))]},backend:r})));return{tensors2D:P,outShape:n}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function nf(e){const{inputs:t,backend:r,attrs:n}=e,{axis:P}=n,a=Ke(P,t[0].shape)[0],o=bm(t.map((e=>e.shape)),a);if(0===Ee(o))return r.makeTensorInfo(o,t[0].dtype,[]);const u=t.filter((e=>Ee(e.shape)>0));if(1===u.length)return bL({inputs:{x:u[0]},backend:r});const s=u.map((e=>e.shape));return gm(s,a),tf(u,a,r)}const Pf={kernelName:Ht,backendName:"webgl",kernelFunc:nf};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function af(e){const{inputs:t,attrs:r,backend:n}=e,{dim:P}=r,{input:a}=t,o=a.shape.length,u=a.shape.slice();let s=P;return P<0&&(xe(-(o+1)<=P,(()=>`Axis must be in the interval [${-(o+1)}, ${o}]`)),s=o+P+1),u.splice(s,0,1),qL({inputs:{x:a},backend:n,attrs:{shape:u}})}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function of(e){const{inputs:t,backend:r,attrs:n}=e,{axis:P}=n;if(1===t.length)return af({inputs:{input:t[0]},backend:r,attrs:{dim:P}});const a=t[0].shape,o=t[0].dtype;t.forEach((e=>{Ye(a,e.shape,"All tensors passed to stack must have matching shapes"),xe(o===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],s=t.map((e=>{const t=af({inputs:{input:e},backend:r,attrs:{dim:P}});return u.push(t),t})),v=nf({inputs:s,backend:r,attrs:{axis:P}});return u.forEach((e=>r.disposeIntermediateTensorInfo(e))),v}const uf={kernelName:Dn,backendName:"webgl",kernelFunc:of},sf=SL({opSnippet:"return float(a != b);",cpuKernelImpl:cw,dtype:"bool"}),vf="return float(int(x));";
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function lf(e,t){const r=new Bw(e.shape,vf),n=t.runWebGLProgram(r,[e],"int32");return{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function cf(e){const{inputs:t,backend:r,attrs:n}=e,{x:P}=t,{dtype:a}=n;if("complex64"===a){if("complex64"===P.dtype)return bL({inputs:{x:P},backend:r});const e=iO(P.shape),t=cf({inputs:{x:P},backend:r,attrs:{dtype:"float32"}}),n=zL({inputs:{real:t,imag:e},backend:r});return e.dispose(),r.disposeIntermediateTensorInfo(t),n}if("complex64"===P.dtype){const e=ef({inputs:{input:P},backend:r}),t=cf({inputs:{x:e},backend:r,attrs:{dtype:a}});return r.disposeIntermediateTensorInfo(e),t}if(!Ve(P.dtype,a)){const e=bL({inputs:{x:P},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:a}}if("int32"===a)return lf(P,r);if("bool"===a){const e=r.makeTensorInfo([],"bool",Re("bool",1)),t=sf({inputs:{a:P,b:e},backend:r});return r.disposeIntermediateTensorInfo(e),t}throw new Error(`Error in Cast: failed to cast ${P.dtype} to ${a}`)}const Of={kernelName:Ft,backendName:"webgl",kernelFunc:cf},Df=IL({opSnippet:Zw+"\n  return (x < 0.0) ? 0.0 : x;\n",packedOpSnippet:"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),jf={kernelName:zn,backendName:"webgl",kernelFunc:Df};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
function hf(e,t,r,n){const P=Ee(t),a=qL({inputs:{x:e},attrs:{shape:[Ee(e.shape)/P,P]},backend:n}),o=WL(a,"float32","mean",n),u=qL({inputs:{x:o},attrs:{shape:r},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),u}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const pf={kernelName:$r,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{const{x:n}=e,{keepDims:P,axis:a}=t,o=r,u=n.shape.length,s=Ke(a,n.shape);let v=s;const i=wl(v,u),l=null!=i,c=o.shouldExecuteOnCPU([n]),O=[];let D=n;if(l){if(c){const e=o.texData.get(D.dataId).values,t=new Array(u);for(let e=0;e<t.length;e++)t[e]=n.shape[i[e]];const r=xw(e,n.shape,n.dtype,i,t);D=o.makeTensorInfo(t,n.dtype);o.texData.get(D.dataId).values=r}else D=RL(n,i,o);O.push(D),v=fl(v.length,u)}yl("sum",v,u);const[j,h]=zl(D.shape,v);let p=j;P&&(p=dl(j,s));const m=hf(D,h,p,o);for(const e of O)o.disposeIntermediateTensorInfo(e);return m}};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function mf(e){const{inputs:t,backend:r,attrs:n}=e,{x:P}=t,{perm:a}=n,o=r,u=P.shape.length,s=new Array(u);for(let e=0;e<s.length;e++)s[e]=P.shape[a[e]];let v;if(o.shouldExecuteOnCPU([P])){const e=o.texData.get(P.dataId).values,t=xw(e,P.shape,P.dtype,a,s);v=o.makeTensorInfo(s,P.dtype);o.texData.get(v.dataId).values=t}else v=RL(P,a,o);return v}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function gf(e){const{inputs:t,backend:r,attrs:n}=e,{x:P}=t,{axis:a,keepDims:o}=n,u=P.shape.length,s=[],v=Ke(a,P.shape);let i=v;const l=wl(i,u);let c,O=P;if(null!=l&&(O=mf({inputs:{x:P},backend:r,attrs:{perm:l}}),i=fl(i.length,u),s.push(O)),yl("prod",i,u),r.shouldExecuteOnCPU([O])){const e=r.texData.get(O.dataId).values,{outVals:t,outShape:n,outDtype:P}=Ow(O.shape,O.dtype,e,i);c=r.makeTensorInfo(n,P,t)}else{const[e,t]=zl(O.shape,i),n=Ee(t),a=qL({inputs:{x:O},backend:r,attrs:{shape:[-1,n]}}),o=WL(a,fa(P.dtype),"prod",r);c=qL({inputs:{x:o},backend:r,attrs:{shape:e}}),s.push(a),s.push(o)}if(o){s.push(c);const e=dl(c.shape,v);c=qL({inputs:{x:c},backend:r,attrs:{shape:e}})}return s.forEach((e=>r.disposeIntermediateTensorInfo(e))),c}const bf={kernelName:mn,backendName:"webgl",kernelFunc:gf};
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Tf{constructor(e,t,r){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,r)=>t[0]+e[r]+t[1]));const n=e.length,P=sd(n),a=t.map((e=>e[0])).join(","),o=t.map(((t,r)=>t[0]+e[r])).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=1!==n?`\n      ${P} start = ${P}(${a});\n      ${P} end = ${P}(${o});\n\n      void main() {\n        ${P} outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ${P} coords = outC - start;\n          setOutput(getX(${u}));\n        }\n      }\n    `:`\n        int start = ${a};\n        int end = ${o};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      `}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class zf{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,r)=>t[0]+e[r]+t[1]));const n=e.length,P=sd(n),a=t.map((e=>e[0])).join(","),o=t.map(((t,r)=>t[0]+e[r])).join(","),u=Cw("rc",n),s=Cw("source",n),v=`${u[n-1]} < ${this.outputShape[n-1]}`,i=1===n?"source":`vec2(${s.slice(-2).join()})`,l=[`${P} rc = outputLoc;`,`${u[n-1]} += 1;\n       if(${v}) {\n      `,1===n?"":`}\n       rc = outputLoc;\n       ${u[n-2]} += 1;\n       if(${u[n-2]} < ${this.outputShape[n-2]}) {`,1===n?"":`  ${u[n-1]} += 1;\n         if(${v}) {`],c=1===n?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let O="";for(let e=0,t=1===n?2:4;e<t;e++)O+=`\n        ${l[e]}\n        if (${c}) {\n          result[${e}] = float(value);\n        } else {\n          ${P} source = rc - start;\n          result[${e}] = getChannel(getX(${s.join()}), ${i});\n        }\n      `;O+=1===n?"} ":"}}",this.userCode=`\n      const ${P} start = ${P}(${a});\n      const ${P} end = ${P}(${o});\n\n      void main() {\n        ${P} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${O}\n        setOutput(result);\n      }\n    `}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class df{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode="\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function yf(e){const{backend:t,attrs:r}=e,{shape:n,value:P}=r;let{dtype:a}=r;if(a=a||tt(P),"string"===a){const e=Fe(a,Ee(n));return e.fill(P),t.makeTensorInfo(n,a,e)}{const e=new df(n,P),r=[[P]];return t.runWebGLProgram(e,[],a,r)}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const wf=e=>{const{inputs:t,backend:r,attrs:n}=e,{x:P}=t,{paddings:a,constantValue:o}=n;if(0===Ee(P.shape)){const e=a.map(((e,t)=>e[0]+P.shape[t]+e[1]));return yf({backend:r,attrs:{shape:e,value:o,dtype:P.dtype}})}const u=mt().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new zf(P.shape,a,o):new Tf(P.shape,a,o),s=[[o]];return r.runWebGLProgram(u,[P],P.dtype,s)},Lf={kernelName:jn,backendName:"webgl",kernelFunc:wf};
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class ff{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=sd(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const r=Sf(this.rank);let n;const P=e.map(((e,t)=>`sourceLoc.${If[t]} = start[${t}] + coords.${If[t]};`));n=`\n        ${t} sourceLoc;\n        ${t} coords = getOutputCoords();\n        ${P.join("\n")}\n      `,this.userCode=`\n      void main() {\n        ${n}\n        setOutput(getSource(${r}));\n      }\n    `}}const If=["x","y","z","w","u","v"];function Sf(e){if(1===e)return"sourceLoc";if(e<=6)return If.slice(0,e).map((e=>"sourceLoc."+e)).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Af{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=sd(this.rank),r=Cw("coords",this.rank),n=Cw("sourceLoc",this.rank),P=1===this.rank?"sourceLoc":`vec2(${n.slice(-2).join()})`,a=`getChannel(getSource(${n.join()}), ${P})`,o=`\n      result.x = ${a};\n      if (++${r[this.rank-1]} < ${e[this.rank-1]}) {\n        ++${n[this.rank-1]};\n        result.y = ${a};\n        --${n[this.rank-1]};\n      }\n    `,u=1===this.rank?"":`\n      --${r[this.rank-1]};\n      if (++${r[this.rank-2]} < ${e[this.rank-2]}) {\n        ++${n[this.rank-2]};\n        result.z = ${a};\n        if (++${r[this.rank-1]} < ${e[this.rank-1]}) {\n          ++${n[this.rank-1]};\n          result.w = ${a};\n        }\n      }\n    `,s=this.rank<=4?`sourceLoc = coords +\n            ${t}(${e.map(((e,t)=>`start[${t}]`)).join()});`:e.map(((e,t)=>`${n[t]} = ${r[t]} + start[${t}];`)).join("\n");this.userCode=`\n      void main() {\n        ${t} coords = getOutputCoords();\n        ${t} sourceLoc;\n        ${s}\n        vec4 result = vec4(0.);\n        ${o}\n        ${u}\n        setOutput(result);\n      }\n    `}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function xf(e,t,r,n){const P=n.texData.get(e.dataId),a=n.makeTensorInfo(r,e.dtype),o=n.texData.get(a.dataId);Object.assign(o,P),o.refCount=1,o.shape=r,o.dtype=e.dtype;let u=Ss(t,Pt(e.shape));P.slice&&(u+=P.slice.flatOffset),o.slice={flatOffset:u,origDataId:P.slice&&P.slice.origDataId||e.dataId};const s=n.dataRefCount.get(o.slice.origDataId)||1;return n.dataRefCount.set(o.slice.origDataId,s+1),a}function Yf(e){const{inputs:t,backend:r,attrs:n}=e,{x:P}=t,{begin:a,size:o}=n,[u,s]=As(P,a,o);if(hs(P,u,s),0===Ee(s))return r.makeTensorInfo(s,P.dtype,[]);if(r.shouldExecuteOnCPU([P])||"string"===P.dtype){const e=r.texData.get(P.dataId),t=gw(e.values,u,s,P.shape,P.dtype);return r.makeTensorInfo(s,P.dtype,t)}const{isPacked:v}=r.texData.get(P.dataId),i=Is(P.shape,u,s);if(v||!i){const e=mt().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Af(s):new ff(s),t=[u];return r.runWebGLProgram(e,[P],P.dtype,t)}return r.uploadToGPU(P.dataId),xf(P,u,s,r)}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function kf(e){const{inputs:t,backend:r,attrs:n}=e,{value:P}=t;let{axis:a}=n;a<0&&(a+=P.shape.length);const o=P,u=o.shape.length,s=P.shape[a],v=new Array(u-1);let i=0;for(let e=0;e<u;e++)e!==a&&(v[i++]=o.shape[e]);const l=[],c=new Array(u).fill(0),O=o.shape.slice();O[a]=1;const D=new Array(s);for(let e=0;e<D.length;e++){c[a]=e;const t=Yf({inputs:{x:o},backend:r,attrs:{begin:c,size:O}}),n=qL({inputs:{x:t},backend:r,attrs:{shape:v}});D[e]=n,l.push(t)}return l.forEach((e=>r.disposeIntermediateTensorInfo(e))),D}const Cf={kernelName:vP,backendName:"webgl",kernelFunc:kf},Ef=IL({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),Qf={kernelName:Er,backendName:"webgl",kernelFunc:Ef};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
class Wf{constructor(e,t,r){let n,P;if(this.variableNames=["c","a","b"],this.outputShape=t,r>4)throw Error(`Where for rank ${r} is not yet supported`);if(1===r)P="resRC",n="resRC";else{const r=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],o=[];for(let n=0;n<t.length;n++)o.push(`${r[n]}`),n<e&&a.push(`${r[n]}`);n=a.join(),P=o.join()}const a=sd(r);this.userCode=`\n      void main() {\n        ${a} resRC = getOutputCoords();\n        float cVal = getC(${n});\n        if (cVal >= 1.0) {\n          setOutput(getA(${P}));\n        } else {\n          setOutput(getB(${P}));\n        }\n      }\n    `}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Uf(e){const{inputs:t,backend:r}=e,{condition:n,t:P,e:a}=t,o=new Wf(n.shape.length,P.shape,P.shape.length);return r.runWebGLProgram(o,[n,P,a],La(P.dtype,a.dtype))}const qf={kernelName:Yn,backendName:"webgl",kernelFunc:Uf},Gf={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Mf{constructor(e,t,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=os(t,r),this.userCode=`\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ${e}\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    `}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Kf="return a * b;";function Nf(e){const{inputs:t,backend:r}=e,{a:n,b:P}=t,a=La(n.dtype,P.dtype);if("complex64"===n.dtype){const e=r.texData.get(n.dataId),t=r.texData.get(P.dataId),a=new Mf(Gf.REAL,n.shape,P.shape),o=new Mf(Gf.IMAG,n.shape,P.shape),u=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:n.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:n.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:P.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:P.shape}],s=r.runWebGLProgram(a,u,"float32"),v=r.runWebGLProgram(o,u,"float32"),i=zL({inputs:{real:s,imag:v},backend:r});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(v),i}if(r.shouldExecuteOnCPU([n,P])){const e=r.texData.get(n.dataId),t=r.texData.get(P.dataId),[o,u]=iw(n.shape,P.shape,e.values,t.values,a),s=r.makeTensorInfo(u,a);return r.texData.get(s.dataId).values=o,s}let o;return o=mt().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new gL(Kf,n.shape,P.shape):new pL(Kf,n.shape,P.shape),r.runWebGLProgram(o,[n,P],a)}const Rf={kernelName:an,backendName:"webgl",kernelFunc:Nf};
/**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Ff{constructor(e,t,r,n=!1,P=!1,a=!1,o=null,u=!1,s=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.enableShapeUniforms=pd(this.outputShape.length);const v=n?e[1]:e[2],i=Math.ceil(v/2),l=n?"i * 2, rc.y":"rc.y, i * 2",c=P?"rc.z, i * 2":"i * 2, rc.z",O=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],D=P?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let j="",h="";o&&(j=u?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${o}\n        }`:s?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${o}\n        }`:`vec4 activation(vec4 x) {\n          ${o}\n        }`,h="result = activation(result);");const p=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha");let m="rc.x",g="rc.x";e[0]<t[0]?m=`int(min(float(rc.x), ${e[0]-1}.))`:t[0]<e[0]&&(g=`int(min(float(rc.x), ${t[0]-1}.))`),this.userCode=`\n      ${j}\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ${i}.0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < ${i}; i++) {\n          int batchA = ${m};\n          int batchB = ${g};\n          vec4 a = getMatrixA(batchA, ${l});\n          vec4 b = getMatrixB(batchB, ${c});\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (${O[0]} * ${D[0]});\n          result += (${O[1]} * ${D[1]});\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ${p}\n\n        ${h}\n\n        setOutput(result);\n      }\n    `}}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */const Bf=1e3;function Zf({a:e,b:t,transposeA:r,transposeB:n,backend:P,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:u=0,activation:s=null}){const v=e.shape.length,i=t.shape.length,l=r?e.shape[v-2]:e.shape[v-1],c=n?t.shape[i-1]:t.shape[i-2],O=r?e.shape[v-1]:e.shape[v-2],D=n?t.shape[i-2]:t.shape[i-1],j=e.shape.slice(0,-2),h=t.shape.slice(0,-2),p=Ee(j),m=Ee(h),g=os(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([O,D]);xe(l===c,(()=>`Error in matMul: inner shapes (${l}) and (${c}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${r} and transposeB=${n} must match.`));const b=r?[p,l,O]:[p,O,l],T=n?[m,D,c]:[m,c,D],z=qL({inputs:{x:e},backend:P,attrs:{shape:b}}),d=qL({inputs:{x:t},backend:P,attrs:{shape:T}}),y=[z,d],w=Math.max(p,m),L=r?z.shape[1]:z.shape[2],f=null!=a,I=null!=o,S="leakyrelu"===s,A=null!=s?AL(s,!0):null;let x;if((1===O||1===D)&&L>Bf&&!1===(f||I||S||null!=A)){let e=z,t=d;r&&(e=mf({inputs:{x:z},backend:P,attrs:{perm:[0,2,1]}}),y.push(e)),n&&(t=mf({inputs:{x:d},backend:P,attrs:{perm:[0,2,1]}}),y.push(t));const a=1===D;let o=e;1!==D&&(o=qL({inputs:{x:e},backend:P,attrs:{shape:[w,L,1]}}),y.push(o));const u=1===D?2:1;let s=t;a&&(s=qL({inputs:{x:t},backend:P,attrs:{shape:[w,1,L]}}),y.push(s));const v=Nf({inputs:{a:o,b:s},backend:P});x=BL({inputs:{x:v},backend:P,attrs:{axis:u,keepDims:!0}}),y.push(v)}else{const s=La(e.dtype,t.dtype),v=new Ff(b,T,[w,O,D],r,n,f,A,I,S),i=[z,d];if(null!=a&&i.push(a),I&&i.push(o),S){const e=P.makeTensorInfo([],"float32",JP(u,"float32"));i.push(e),y.push(e)}x=P.runWebGLProgram(v,i,s)}const Y=qL({inputs:{x:x},backend:P,attrs:{shape:g}});y.push(x);for(const e of y)P.disposeIntermediateTensorInfo(e);return Y}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function Vf(e){const{inputs:t,backend:r,attrs:n}=e,{a:P,b:a}=t,{transposeA:o,transposeB:u}=n;return Zf({a:P,b:a,transposeA:o,transposeB:u,backend:r})}const Xf={kernelName:Mt,backendName:"webgl",kernelFunc:Vf};
/**
     * @license
     * Copyright 2017 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */class Hf{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const r=sd(this.rank),n=Jf(e);this.userCode=`\n      void main() {\n        ${r} resRC = getOutputCoords();\n        int index = int(getIndices(resRC.x, resRC.z));\n        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;\n        setOutput(inBounds * getA(${n}));\n      }\n    `}}function Jf(e,t){const r=["resRC.x","resRC.y","resRC.z","resRC.w"],n=[];for(let t=0;t<e.length;t++)2===t?n.push("index"):n.push(`${r[t]}`);return n.join()}
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */function _f(e){const{inputs:t,backend:r,attrs:n}=e,{x:P,indices:a}=t,{axis:o,batchDims:u}=n,s=Ke(o,P.shape)[0];if(mt().get("DEBUG")){const e=r.readSync(a.dataId),t=P.shape[s];for(let r=0;r<e.length;++r){const n=e[r];xe(n<=t-1&&n>=0,(()=>`GatherV2: the index value ${n} is not in [0, ${t-1}]`))}}const v=hg(P,a,s,u),i=Ee(a.shape),l=[],c=qL({inputs:{x:P},backend:r,attrs:{shape:[v.batchSize,v.outerSize,v.dimSize,v.sliceSize]}}),O=qL({inputs:{x:a},backend:r,attrs:{shape:[v.batchSize,i/v.batchSize]}});l.push(c),l.push(O);const D=[v.batchSize,v.outerSize,i/v.batchSize,v.sliceSize];if(r.shouldExecuteOnCPU([P,a])||"string"===P.dtype){const e=r.bufferSync(O),t=r.bufferSync(c),n=ew(t,e,D);return l.forEach((e=>r.disposeIntermediateTensorInfo(e))),r.makeTensorInfo(v.outputShape,n.dtype,n.values)}const j=new Hf(c.shape,D),h=r.runWebGLProgram(j,[c,O],c.dtype);l.push(h);const p=qL({inputs:{x:h},backend:r,attrs:{shape:v.outputShape}});return l.forEach((e=>r.disposeIntermediateTensorInfo(e))),p}const $f={kernelName:Ir,backendName:"webgl",kernelFunc:_f},eI=IL({opSnippet:fL+"\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",packedOpSnippet:"\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",cpuKernelImpl:pw}),tI={kernelName:Un,backendName:"webgl",kernelFunc:eI};
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
/**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
callback.get = snippet => graph.get(snippet);
callback.has = snippet => graph.has(snippet);
/* harmony default export */ const ml = (callback);
;// CONCATENATED MODULE: ./node_modules/@eyeo/snippets/webext/main.mjs
/*!
 * This file is part of eyeo's Anti-Circumvention Snippets module (@eyeo/snippets),
 * Copyright (C) 2006-present eyeo GmbH
 * 
 * @eyeo/snippets is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 * 
 * @eyeo/snippets is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with @eyeo/snippets.  If not, see <http://www.gnu.org/licenses/>.
 */

const main_callback = (environment, ...filters) => {
const e=Proxy,{apply:t,bind:r,call:n}=Function,o=n.bind(t),i=n.bind(r),s=n.bind(n),a={get:(e,t)=>i(n,e[t])},l=t=>new e(t,a),c=(t,r)=>new e(t,{apply:(e,t,n)=>o(r,t,n)}),u={get:(e,t)=>i(e[t],e)},f=t=>new e(t,u),{assign:p,defineProperties:d,freeze:h,getOwnPropertyDescriptor:w,getOwnPropertyDescriptors:g,getPrototypeOf:y}=f(Object),{hasOwnProperty:m}=l({}),{species:b}=Symbol,v={get(e,t){const r=e[t];class n extends r{}const o=g(r.prototype);delete o.constructor,h(d(n.prototype,o));const i=g(r);return delete i.length,delete i.prototype,i[b]={value:n},h(d(n,i))}},E=t=>new e(t,v),S="undefined"!=typeof environment?environment:{};"undefined"==typeof globalThis&&(window.globalThis=window);const{apply:M,ownKeys:T}=f(Reflect),x="world"in S,O=x&&"ISOLATED"===S.world,P=x&&"MAIN"===S.world,j="object"==typeof chrome&&!!chrome.runtime,N="object"==typeof browser&&!!browser.runtime,L=!P&&(O||j||N),k=e=>L?e:C(e,H(e)),{create:C,defineProperties:A,defineProperty:W,freeze:D,getOwnPropertyDescriptor:$,getOwnPropertyDescriptors:H}=f(Object),z=f(globalThis),R=L?globalThis:E(globalThis),{Map:F,RegExp:I,Set:J,WeakMap:V,WeakSet:B}=R,U=(e,t,r=null)=>{const n=T(t);for(const o of T(e)){if(n.includes(o))continue;const i=$(e,o);if(r&&"value"in i){const{value:e}=i;"function"==typeof e&&(i.value=r(e))}W(t,o,i)}},_=e=>{const t=R[e];class r extends t{}const{toString:n,valueOf:o}=t.prototype;A(r.prototype,{toString:{value:n},valueOf:{value:o}});const i=e.toLowerCase(),s=e=>function(){const t=M(e,this,arguments);return typeof t===i?new r(t):t};return U(t,r,s),U(t.prototype,r.prototype,s),r},X=D({frozen:new V,hidden:new B,iframePropertiesToAbort:{read:new J,write:new J},abortedIframes:new V}),G=new I("^[A-Z]");var q=new Proxy(new F([["chrome",L&&(j&&chrome||N&&browser)||void 0],["isExtensionContext",L],["variables",X],["console",k(console)],["document",globalThis.document],["performance",k(performance)],["JSON",k(JSON)],["Map",F],["Math",k(Math)],["Number",L?Number:_("Number")],["RegExp",I],["Set",J],["String",L?String:_("String")],["WeakMap",V],["WeakSet",B],["MouseEvent",MouseEvent]]),{get(e,t){if(e.has(t))return e.get(t);let r=globalThis[t];return"function"==typeof r&&(r=(G.test(t)?R:z)[t]),e.set(t,r),r},has:(e,t)=>e.has(t)});const K={WeakSet:WeakSet,WeakMap:WeakMap,WeakValue:class{has(){return!1}set(){}}},{apply:Y}=Reflect;const{Map:Z,WeakMap:Q,WeakSet:ee,setTimeout:te}=q;let re=!0,ne=e=>{e.clear(),re=!re};var oe=function(e){const{WeakSet:t,WeakMap:r,WeakValue:n}=this||K,o=new t,i=new r,s=new n;return function(t){if(o.has(t))return t;if(i.has(t))return i.get(t);if(s.has(t))return s.get(t);const r=Y(e,this,arguments);return o.add(r),r!==t&&("object"==typeof t&&t?i:s).set(t,r),r}}.bind({WeakMap:Q,WeakSet:ee,WeakValue:class extends Z{set(e,t){return re&&(re=!re,te(ne,0,this)),super.set(e,t)}}});const{concat:ie,includes:se,join:ae,reduce:le,unshift:ce}=l([]),ue=E(globalThis),{Map:fe,WeakMap:pe}=ue,de=new fe,he=t=>{const r=(e=>{const t=[];let r=e;for(;r;){if(de.has(r))ce(t,de.get(r));else{const e=g(r);de.set(r,e),ce(t,e)}r=y(r)}return ce(t,{}),o(p,null,t)})("function"==typeof t?t.prototype:t),n={get(e,t){if(t in r){const{value:n,get:o}=r[t];if(o)return s(o,e);if("function"==typeof n)return i(n,e)}return e[t]},set(e,t,n){if(t in r){const{set:o}=r[t];if(o)return s(o,e,n),!0}return e[t]=n,!0}};return t=>new e(t,n)},{isExtensionContext:we,Array:ge,Number:ye,String:me,Object:be}=q,{isArray:ve}=ge,{getOwnPropertyDescriptor:Ee,setPrototypeOf:Se}=be,{toString:Me}=be.prototype,{slice:Te}=me.prototype,{get:xe}=Ee(Node.prototype,"nodeType"),Oe=we?{}:{Attr:he(Attr),CanvasRenderingContext2D:he(CanvasRenderingContext2D),CSSStyleDeclaration:he(CSSStyleDeclaration),Document:he(Document),Element:he(Element),HTMLCanvasElement:he(HTMLCanvasElement),HTMLElement:he(HTMLElement),HTMLImageElement:he(HTMLImageElement),HTMLScriptElement:he(HTMLScriptElement),MutationRecord:he(MutationRecord),Node:he(Node),ShadowRoot:he(ShadowRoot),get CSS2Properties(){return Oe.CSSStyleDeclaration}},Pe=(e,t)=>{if("Element"!==t&&t in Oe)return Oe[t](e);if(ve(e))return Se(e,ge.prototype);const r=(e=>s(Te,s(Me,e),8,-1))(e);if(r in Oe)return Oe[r](e);if(r in q)return Se(e,q[r].prototype);if("nodeType"in e)switch(s(xe,e)){case 1:if(!(t in Oe))throw new Error("unknown hint "+t);return Oe[t](e);case 2:return Oe.Attr(e);case 3:return Oe.Node(e);case 9:return Oe.Document(e)}throw new Error("unknown brand "+r)};var je=we?e=>e===window||e===globalThis?q:e:oe(((e,t="Element")=>{if(e===window||e===globalThis)return q;switch(typeof e){case"object":return e&&Pe(e,t);case"string":return new me(e);case"number":return new ye(e);default:throw new Error("unsupported value")}}));const Ne={get(e,t){const r=e;for(;!m(e,t);)e=y(e);const{get:n,set:i}=w(e,t);return function(){return arguments.length?o(i,r,arguments):s(n,r)}}},Le=t=>new e(t,Ne);let ke=!1;function Ce(){return ke}const{console:Ae}=je(window),We=()=>{};function De(...e){Ce()&&je(e).unshift("%c DEBUG","font-weight: bold"),Ae.log(...e)}function $e(e){return i(Ce()?De:We,null,e)}let{Math:He,RegExp:ze}=je(window);function Re(e){let{length:t}=e;if(t>1&&"/"===e[0]){let r="/"===e[t-1];if(r||t>2&&je(e).endsWith("/i")){let t=[je(e).slice(1,r?-1:-2)];return r||t.push("i"),new ze(...t)}}return new ze(je(e).replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"))}function Fe(){return je(He.floor(2116316160*He.random()+60466176)).toString(36)}let{parseFloat:Ie,variables:Je,Array:Ve,Error:Be,Map:Ue,Object:_e,ReferenceError:Xe,Set:Ge,WeakMap:qe}=je(window),{onerror:Ke}=Le(window),Ye=Node.prototype,Ze=Element.prototype,Qe=null;function et(e,t,r){let n=je(t),o=n.indexOf(".");if(-1==o){let n=_e.getOwnPropertyDescriptor(e,t);if(n&&!n.configurable)return;let o=_e.assign({},r,{configurable:!0});if(!n&&!o.get&&o.set){let r=e[t];o.get=()=>r}return void _e.defineProperty(e,t,o)}let i=n.slice(0,o).toString();t=n.slice(o+1).toString();let s=e[i];!s||"object"!=typeof s&&"function"!=typeof s||et(s,t,r);let a=_e.getOwnPropertyDescriptor(e,i);if(a&&!a.configurable)return;Qe||(Qe=new qe),Qe.has(e)||Qe.set(e,new Ue);let l=Qe.get(e);if(l.has(i))return void l.get(i).set(t,r);let c=new Ue([[t,r]]);l.set(i,c),_e.defineProperty(e,i,{get:()=>s,set(e){if(s=e,s&&("object"==typeof s||"function"==typeof s))for(let[e,t]of c)et(s,e,t)},configurable:!0})}function tt(e){let t=Ke();Ke(((...r)=>{let n=r.length&&r[0];return!("string"!=typeof n||!je(n).includes(e))||("function"==typeof t?o(t,this,r):void 0)}))}function rt(e,t,r){let n=$e(e);if(!r)return void n("no property to abort on read");let o=Fe();n(`aborting on ${r} access`),et(t,r,{get:function(){throw n(`${r} access aborted`),new Xe(o)},set(){}}),tt(o)}function nt(e,t,r){let n=$e(e);if(!r)return void n("no property to abort on write");let o=Fe();n(`aborting when setting ${r}`),et(t,r,{set:function(){throw n(`setting ${r} aborted`),new Xe(o)}}),tt(o)}function ot(e,t=!1,r=!1){let n=Je.abortedIframes,i=Je.iframePropertiesToAbort;for(let o of Ve.from(window.frames))if(n.has(o))for(let i of e)t&&n.get(o).read.add(i),r&&n.get(o).write.add(i);for(let n of e)t&&i.read.add(n),r&&i.write.add(n);function a(){for(let e of Ve.from(window.frames)){n.has(e)||n.set(e,{read:new Ge(i.read),write:new Ge(i.write)});let t=n.get(e).read;if(t.size>0){let r=Ve.from(t);t.clear();for(let t of r)rt("abort-on-iframe-property-read",e,t)}let r=n.get(e).write;if(r.size>0){let t=Ve.from(r);r.clear();for(let r of t)nt("abort-on-iframe-property-write",e,r)}}}a(),n.has(document)||(n.set(document,!0),function(e){let t;function r(e,t){for(let r of t){et(e,r,n(e,r))}}function n(t,r){let n=t[r];return{get:()=>function(...t){let r;return r=o(n,this,t),e&&e(),r}}}function i(t,r){let n=_e.getOwnPropertyDescriptor(t,r),{set:o}=n||{};return{set(t){let r;return r=s(o,this,t),e&&e(),r}}}r(Ye,["appendChild","insertBefore","replaceChild"]),r(Ze,["append","prepend","replaceWith","after","before","insertAdjacentElement","insertAdjacentHTML"]),t=i(Ze,"innerHTML"),et(Ze,"innerHTML",t),t=i(Ze,"outerHTML"),et(Ze,"outerHTML",t)}(a))}let{Object:it}=window;function st(e,t){if(!(e instanceof it))return;let r=e,n=je(t).split(".");if(0===n.length)return;for(let e=0;e<n.length-1;e++){let t=n[e];if(!m(r,t))return;if(r=r[t],!(r instanceof it))return}let o=n[n.length-1];return m(r,o)?[r,o]:void 0}const at=je(/^\d+$/);function lt(e){switch(e){case"false":return!1;case"true":return!0;case"null":return null;case"noopFunc":return()=>{};case"trueFunc":return()=>!0;case"falseFunc":return()=>!1;case"emptyArray":return[];case"emptyObj":return{};case"undefined":return;case"":return e;default:if(at.test(e))return Ie(e);throw new Be(`[override-property-read snippet]: Value "${e}" is not valid.`)}}let{HTMLScriptElement:ct,Object:ut,ReferenceError:ft}=je(window),pt=ut.getPrototypeOf(ct);let{Error:dt}=je(window),{cookie:ht}=Le(document);let{document:wt,getComputedStyle:gt,isExtensionContext:yt,variables:mt,Array:bt,MutationObserver:vt,Object:Et,XPathEvaluator:St,XPathExpression:Mt,XPathResult:Tt}=je(window),{querySelectorAll:xt}=wt,Ot=xt&&i(xt,wt);const{assign:Pt,setPrototypeOf:jt}=Et;class Nt extends Mt{evaluate(...e){return jt(o(super.evaluate,this,e),Tt.prototype)}}class Lt extends St{createExpression(...e){return jt(o(super.createExpression,this,e),Nt.prototype)}}function kt(e){if(mt.hidden.has(e))return;!function(e){yt&&"function"==typeof checkElement&&checkElement(e)}(e),mt.hidden.add(e);let{style:t}=je(e),r=je(t,"CSSStyleDeclaration"),n=je([]),{debugCSSProperties:o}=S;for(let[e,t]of o||[["display","none"]])r.setProperty(e,t,"important"),n.push([e,r.getPropertyValue(e)]);new vt((()=>{for(let[e,t]of n){let n=r.getPropertyValue(e),o=r.getPropertyPriority(e);n==t&&"important"==o||r.setProperty(e,t,"important")}})).observe(e,{attributes:!0,attributeFilter:["style"]})}function Ct(e){let t=e;if(t.startsWith("xpath(")&&t.endsWith(")")){let t=function(e){let t=e;if(t.startsWith("xpath(")&&t.endsWith(")")){let e=t.slice(6,-1),r=(new Lt).createExpression(e,null),n=Tt.ORDERED_NODE_SNAPSHOT_TYPE;return e=>{if(!e)return;let t=r.evaluate(wt,n,null),{snapshotLength:o}=t;for(let r=0;r<o;r++)e(t.snapshotItem(r))}}return t=>Ot(e).forEach(t)}(e);return()=>{let e=je([]);return t((t=>e.push(t))),e}}return()=>bt.from(Ot(e))}let{ELEMENT_NODE:At,TEXT_NODE:Wt,prototype:Dt}=Node,{prototype:$t}=Element,{prototype:Ht}=HTMLElement,{console:zt,variables:Rt,DOMParser:Ft,Error:It,MutationObserver:Jt,Object:Vt,ReferenceError:Bt}=je(window),{getOwnPropertyDescriptor:Ut}=Vt;je(window);const{Map:_t,MutationObserver:Xt,Object:Gt,Set:qt,WeakSet:Kt}=je(window);let Yt=Element.prototype,{attachShadow:Zt}=Yt,Qt=new Kt,er=new _t,tr=null;const{Error:rr,JSON:nr,Map:or,Object:ir}=je(window);let sr=null;let{Error:ar,JSON:lr,Map:cr,Object:ur}=je(window),fr=null;let{Error:pr}=je(window);let{Error:dr,Map:hr,Object:wr,console:gr}=je(window),{toString:yr}=Function.prototype,mr=EventTarget.prototype,{addEventListener:br}=mr,vr=null;let Er,{URL:Sr,fetch:Mr}=je(window),{delete:Tr}=l(URLSearchParams.prototype);const xr={"abort-current-inline-script":function(e,t=null){let r=t?Re(t):null,n=Fe(),o=je(document).currentScript,i=window,a=je(e).split("."),l=je(a).pop();for(let e of je(a))if(i=i[e],!i||"object"!=typeof i&&"function"!=typeof i)return;let{get:c,set:u}=ut.getOwnPropertyDescriptor(i,l)||{},f=i[l],p=()=>{let e=je(document).currentScript;if(e instanceof pt&&""==je(e,"HTMLScriptElement").src&&e!=o&&(!r||r.test(je(e).textContent)))throw new ft(n)};et(i,l,{get(){return p(),c?s(c,this):f},set(e){p(),u?s(u,this,e):f=e}}),tt(n)},"abort-on-iframe-property-read":function(...e){ot(e,!0,!1)},"abort-on-iframe-property-write":function(...e){ot(e,!1,!0)},"abort-on-property-read":function(e){rt("abort-on-property-read",window,e)},"abort-on-property-write":function(e){nt("abort-on-property-write",window,e)},"cookie-remover":function(e){if(!e)throw new dt("[cookie-remover snippet]: No cookie to remove.");let t=$e("cookie-remover"),r=Re(e);if(je(/^http|^about/).test(location.protocol)){t("Parsing cookies for matches");for(const e of je(je(ht()).split(";").filter((e=>r.test(je(e).split("=")[0]))))){let r=je(location.hostname),n=je(e).split("=")[0],o="expires=Thu, 01 Jan 1970 00:00:00 GMT",i="path=/",s="domain="+r.slice(r.indexOf(".")+1);ht(`${je(n).trim()}=;${o};${i};${s}`),t(`Set expiration date on ${n}`)}}else t("Snippet only works for http or https and about.")},debug:function(){ke=!0},"freeze-element":function(e,t="",...r){let n,i,a=!1,l=!1,c=je(r).filter((e=>!h(e))),u=je(r).filter((e=>h(e))).map(Re),f=Fe(),p=Ct(e);!function(){let r=je(t).split("+");1===r.length&&""===r[0]&&(r=[]);for(let t of r)switch(t){case"subtree":a=!0;break;case"abort":l=!0;break;default:throw new It("[freeze] Unknown option passed to the snippet. [selector]: "+e+" [option]: "+t)}}();let d={selector:e,shouldAbort:l,rid:f,exceptionSelectors:c,regexExceptions:u,changeId:0};function h(e){return e.length>=2&&"/"==e[0]&&"/"==e[e.length-1]}function w(){i=p(),g(i,!1)}function g(e,t=!0){for(let r of e)Rt.frozen.has(r)||(Rt.frozen.set(r,d),!t&&a&&new Jt((e=>{for(let t of je(e))g(je(t,"MutationRecord").addedNodes)})).observe(r,{childList:!0,subtree:!0}),a&&je(r).nodeType===At&&g(je(r).childNodes))}function y(e,...t){De(`[freeze][${e}] `,...t)}function m(e,t,r,n){let o=n.selector,i=n.changeId,s="string"==typeof e,a=n.shouldAbort?"aborting":"watching";switch(zt.groupCollapsed(`[freeze][${i}] ${a}: ${o}`),r){case"appendChild":case"append":case"prepend":case"insertBefore":case"replaceChild":case"insertAdjacentElement":case"insertAdjacentHTML":case"insertAdjacentText":case"innerHTML":case"outerHTML":y(i,s?"text: ":"node: ",e),y(i,"added to node: ",t);break;case"replaceWith":case"after":case"before":y(i,s?"text: ":"node: ",e),y(i,"added to node: ",je(t).parentNode);break;case"textContent":case"innerText":case"nodeValue":y(i,"content of node: ",t),y(i,"changed to: ",e)}y(i,`using the function "${r}"`),zt.groupEnd(),n.changeId++}function b(e,t){if(t)for(let r of t)if(r.test(e))return!0;return!1}function v(e){throw new Bt(e)}function E(e,t,r,n){let o=new Ft,{body:i}=je(o.parseFromString(e,"text/html")),s=S(je(i).childNodes,t,r,n);return je(s).map((e=>{switch(je(e).nodeType){case At:return je(e).outerHTML;case Wt:return je(e).textContent;default:return""}})).join("")}function S(e,t,r,n){let o=je([]);for(let i of e)M(i,t,r,n)&&o.push(i);return o}function M(e,t,r,n){let o=n.shouldAbort,i=n.regexExceptions,s=n.exceptionSelectors,a=n.rid;if("string"==typeof e){let s=e;return!!b(s,i)||(Ce()&&m(s,t,r,n),o&&v(a),Ce())}let l=e;switch(je(l).nodeType){case At:return!!function(e,t){if(t){let r=je(e);for(let e of t)if(r.matches(e))return!0}return!1}(l,s)||(o&&(Ce()&&m(l,t,r,n),v(a)),!!Ce()&&(kt(l),m(l,t,r,n),!0));case Wt:return!!b(je(l).textContent,i)||(Ce()&&m(l,t,r,n),o&&v(a),!1);default:return!0}}function T(e,t,r,n){let i=Ut(e,t)||{},a=i.get&&s(i.get,e)||i.value;if(a)return{get:()=>function(...e){if(r(this)){let r=n(this);if(r){let n=e[0];if(!M(n,this,t,r))return n}}return o(a,this,e)}}}function x(e,t,r,n){let i=Ut(e,t)||{},a=i.get&&s(i.get,e)||i.value;if(a)return{get:()=>function(...e){if(!r(this))return o(a,this,e);let i=n(this);if(!i)return o(a,this,e);let s=S(e,this,t,i);return s.length>0?o(a,this,s):void 0}}}function O(e,t,r,n){let i=Ut(e,t)||{},a=i.get&&s(i.get,e)||i.value;if(a)return{get:()=>function(...e){let[i,l]=e,c="afterbegin"===i||"beforeend"===i;if(r(this,c)){let e=n(this,c);if(e){let r,n=c?this:je(this).parentNode;switch(t){case"insertAdjacentElement":if(!M(l,n,t,e))return l;break;case"insertAdjacentHTML":return r=E(l,n,t,e),r?s(a,this,i,r):void 0;case"insertAdjacentText":if(!M(l,n,t,e))return}}}return o(a,this,e)}}}function P(e,t,r,n){let o=Ut(e,t)||{},{set:i}=o;if(i)return{set(e){if(!r(this))return s(i,this,e);let o=n(this);if(!o)return s(i,this,e);let a=E(e,this,t,o);return a?s(i,this,a):void 0}}}function j(e,t,r,n){let o=Ut(e,t)||{},{set:i}=o;if(i)return{set(e){if(!r(this))return s(i,this,e);let o=n(this);return o?M(e,this,t,o)?s(i,this,e):void 0:s(i,this,e)}}}Rt.frozen.has(document)||(Rt.frozen.set(document,!0),function(){let e;function t(e){return e&&Rt.frozen.has(e)}function r(e){try{return e&&(Rt.frozen.has(e)||Rt.frozen.has(je(e).parentNode))}catch(e){return!1}}function n(e,t){try{return e&&(Rt.frozen.has(e)&&t||Rt.frozen.has(je(e).parentNode)&&!t)}catch(e){return!1}}function o(e){return Rt.frozen.get(e)}function i(e){try{if(Rt.frozen.has(e))return Rt.frozen.get(e);let t=je(e).parentNode;return Rt.frozen.get(t)}catch(e){}}function s(e,t){try{if(Rt.frozen.has(e)&&t)return Rt.frozen.get(e);let r=je(e).parentNode;return Rt.frozen.get(r)}catch(e){}}e=T(Dt,"appendChild",t,o),et(Dt,"appendChild",e),e=T(Dt,"insertBefore",t,o),et(Dt,"insertBefore",e),e=T(Dt,"replaceChild",t,o),et(Dt,"replaceChild",e),e=x($t,"append",t,o),et($t,"append",e),e=x($t,"prepend",t,o),et($t,"prepend",e),e=x($t,"replaceWith",r,i),et($t,"replaceWith",e),e=x($t,"after",r,i),et($t,"after",e),e=x($t,"before",r,i),et($t,"before",e),e=O($t,"insertAdjacentElement",n,s),et($t,"insertAdjacentElement",e),e=O($t,"insertAdjacentHTML",n,s),et($t,"insertAdjacentHTML",e),e=O($t,"insertAdjacentText",n,s),et($t,"insertAdjacentText",e),e=P($t,"innerHTML",t,o),et($t,"innerHTML",e),e=P($t,"outerHTML",r,i),et($t,"outerHTML",e),e=j(Dt,"textContent",t,o),et(Dt,"textContent",e),e=j(Ht,"innerText",t,o),et(Ht,"innerText",e),e=j(Dt,"nodeValue",t,o),et(Dt,"nodeValue",e)}()),n=new Jt(w),n.observe(document,{childList:!0,subtree:!0}),w()},"hide-if-shadow-contains":function(e,t="*"){let r=`${e}\\${t}`;er.has(r)||er.set(r,[Re(e),t,We]),tr||(tr=new Xt((e=>{let t=new qt;for(let{target:r}of je(e)){let e=je(r).parentNode;for(;e;)[r,e]=[e,je(r).parentNode];if(!Qt.has(r)&&!t.has(r)){t.add(r);for(let[e,t,n]of er.values())if(e.test(je(r).textContent)){let e=je(r.host).closest(t);e&&(n(),je(r).appendChild(document.createElement("style")).textContent=":host {display: none !important}",kt(e),Qt.add(r))}}}})),Gt.defineProperty(Yt,"attachShadow",{value:c(Zt,(function(){let e=o(Zt,this,arguments);return tr.observe(e,{childList:!0,characterData:!0,subtree:!0}),e}))}))},"json-override":function(e,t,r="",n=""){if(!e)throw new rr("[json-override snippet]: Missing paths to override.");if(void 0===t)throw new rr("[json-override snippet]: No value to override with.");if(!sr){let e=$e("json-override"),{parse:t}=nr;sr=new or,ir.defineProperty(window.JSON,"parse",{value:c(t,(function(r){let n=o(t,this,arguments);for(let{prune:t,needle:o,filter:i,value:s}of sr.values())if(!i||i.test(r)){if(je(o).some((e=>!st(n,e))))return n;for(let r of t){let t=st(n,r);void 0!==t&&(e(`Found ${r} replaced it with ${s}`),t[0][t[1]]=lt(s))}}return n}))}),e("Wrapped JSON.parse for override")}sr.set(e,{prune:je(e).split(/ +/),needle:r.length?je(r).split(/ +/):[],filter:n?Re(n):null,value:t})},"json-prune":function(e,t=""){if(!e)throw new ar("Missing paths to prune");if(!fr){let e=$e("json-prune"),{parse:t}=lr;fr=new cr,ur.defineProperty(window.JSON,"parse",{value:c(t,(function(){let r=o(t,this,arguments);for(let{prune:t,needle:n}of fr.values()){if(je(n).some((e=>!st(r,e))))return r;for(let n of t){let t=st(r,n);void 0!==t&&(e(`Found ${n} and deleted`),delete t[0][t[1]])}}return r}))}),e("Wrapped JSON.parse for prune")}fr.set(e,{prune:je(e).split(/ +/),needle:t.length?je(t).split(/ +/):[]})},"override-property-read":function(e,t){if(!e)throw new pr("[override-property-read snippet]: No property to override.");if(void 0===t)throw new pr("[override-property-read snippet]: No value to override with.");let r=$e("override-property-read"),n=lt(t);r(`Overriding ${e}.`),et(window,e,{get:()=>(r(`${e} override done.`),n),set(){}})},"prevent-listener":function(e,t,r){if(!e)throw new dr("[prevent-listener snippet]: No event type.");if(!vr){vr=new hr;let e=$e("[prevent]");wr.defineProperty(mr,"addEventListener",{value:c(br,(function(t,r){for(let{evt:n,handlers:o,selectors:i}of vr.values()){if(!n.test(t))continue;let a=this instanceof Element;for(let l=0;l<o.length;l++){let c=o[l],u=i[l],f=()=>c.test(s(yr,"function"==typeof r?r:r.handleEvent));if((!c||f())&&(!u||a&&je(this).matches(u)))return void(Ce()&&(gr.groupCollapsed("DEBUG [prevent] was successful"),e(`type: ${t} matching ${n}`),e("handler:",r),c&&e(`matching ${c}`),u&&e("on element: ",this,` matching ${u}`),e("was prevented from being added"),gr.groupEnd()))}}return o(br,this,arguments)}))}),e("Wrapped addEventListener")}vr.has(e)||vr.set(e,{evt:Re(e),handlers:[],selectors:[]});let{handlers:n,selectors:i}=vr.get(e);n.push(t?Re(t):null),i.push(r)},"strip-fetch-query-parameter":function(e,t=null){Er||(Er=new Map,window.fetch=c(Mr,((...e)=>{let[t]=e;if("string"==typeof t){let r=new Sr(t);for(let[n,o]of Er)o&&!o.test(t)||(Tr(r.searchParams,n),e[0]=r.href)}return o(Mr,self,e)}))),Er.set(e,t&&Re(t))},trace:function(...e){o(De,null,e)}};
const snippets=xr;
let context;
for (const [name, ...args] of filters) {
if (snippets.hasOwnProperty(name)) {
try { context = snippets[name].apply(context, args); }
catch (error) { console.error(error); }
}
}
context = void 0;
};
const main_graph = new Map([["abort-current-inline-script",null],["abort-on-iframe-property-read",null],["abort-on-iframe-property-write",null],["abort-on-property-read",null],["abort-on-property-write",null],["cookie-remover",null],["debug",null],["freeze-element",null],["hide-if-shadow-contains",null],["json-override",null],["json-prune",null],["override-property-read",null],["prevent-listener",null],["strip-fetch-query-parameter",null],["trace",null]]);
main_callback.get = snippet => main_graph.get(snippet);
main_callback.has = snippet => main_graph.has(snippet);
/* harmony default export */ const main = (main_callback);
;// CONCATENATED MODULE: ./node_modules/@eyeo/snippets/index.mjs






;// CONCATENATED MODULE: ./adblock-betafish/alias/contentFiltering.js
/*
 * Same as the original source adblockpluschrome/lib/contentFiltering.js
 * except:
 * - updated require paths
 * - added fetch() of second snippet library
 */
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @module contentFiltering */




function loadSnippets() {
  ewe_api.snippets.setLibrary({
    injectedCode: main,
    isolatedCode: ml
  });
};
loadSnippets();


/***/ }),

/***/ 1021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QO": () => (/* binding */ showIconBadgeCTA),
/* harmony export */   "ec": () => (/* binding */ NEW_BADGE_REASONS),
/* harmony export */   "vo": () => (/* binding */ getNewBadgeTextReason)
/* harmony export */ });
/* unused harmony exports statsInIconKey, stopIconAnimation, startIconAnimation */
/* harmony import */ var info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_storage_tab_session_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1627);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_allowlisting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8858);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3265);
/* harmony import */ var _utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2028);
/*
 * Same as the original source adblockpluschrome/lib/icon.js
 * except:
 * - updated image file names from 'abp-' to 'ab-'
 * - updated the 'import' paths
 * - use the term 'whitelisted' instead of 'allowlisted' for now
 * - call renderIcons() at the end of the module for all platforms,
 *   not just Chromium
 * - added the showIconBadgeCTA, getNewBadgeTextReason functions, and related
 *   message listeners
 */
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @module icon */








const ANIMATION_LOOPS = 3;
const FRAME_IN_MS = 100;

const statsInIconKey = 'current_show_statsinicon';

let frameOpacities = calculateFrameOpacities(9, 7);
let frameOpacitiesCritical = calculateFrameOpacities(5, 3);

let stopRequested = false;
let canUpdateIcon = true;
let notRunning = Promise.resolve();
let allowlistedState = new _vendor_adblockplusui_adblockpluschrome_lib_storage_tab_session_js__WEBPACK_IMPORTED_MODULE_1__/* .TabSessionStorage */ .H("icon:allowlistedState");

let icons = [null, null];

function easeOut(progress)
{
  // This is merely an approximation to the built-in ease-out timing function
  // https://css-tricks.com/emulating-css-timing-functions-javascript/
  return 1 - Math.pow(1 - progress, 1.675);
}

function calculateFrameOpacities(keyframeFrames, transitionFrames)
{
  let opacities = [];

  // Show second half of first keyframe
  // Omit first frame because it's only shown after the first timeout
  for (let i = 0; i < keyframeFrames / 2 - 1; i++)
    opacities.push(0);
  // Transition from first to second keyframe
  for (let i = 0; i < transitionFrames; i++)
    opacities.push(easeOut((i + 1) / (transitionFrames + 1)));
  // Show second keyframe
  for (let i = 0; i < keyframeFrames; i++)
    opacities.push(1);
  // Transition from second to first keyframe
  for (let i = 0; i < transitionFrames; i++)
    opacities.push(easeOut((transitionFrames - i) / (transitionFrames + 1)));
  // Show first half of first keyframe
  // Omit last frame due to an additional timeout that resets the icon
  for (let i = 0; i < keyframeFrames / 2 - 1; i++)
    opacities.push(0);

  return opacities;
}

async function loadImage(url)
{
  let response = await fetch(url);
  let blob = await response.blob();
  return createImageBitmap(blob);
}

async function renderIcons()
{
  let paths = [
    "icons/ab-16.png", "icons/ab-16-whitelisted.png",
    "icons/ab-32.png", "icons/ab-32-whitelisted.png"
  ];

  for (let path of paths) {
    let image = await loadImage(path);
    let [, size, allowlisted] = /\/ab-(16|32)(-whitelisted)?\./.exec(path);

    let canvas = new OffscreenCanvas(size, size);
    let context = canvas.getContext("2d");
    let imageData = icons[!!allowlisted | 0] || {};

    context.globalAlpha = 1;
    context.drawImage(image, 0, 0);
    imageData[size] = context.getImageData(0, 0, size, size);

    icons[!!allowlisted | 0] = imageData;
  }
}

async function setIcon(page, opacity, frames)
{
  opacity = opacity || 0;
  let allowlisted = !!(await allowlistedState.get(page.id));

  if (!frames)
  {
    if (opacity > 0.5)
    {
      (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setIconPath */ .c4)(
        page.id,
        "/icons/ab-$size-notification.png"
      );
    }
    else if (icons[allowlisted | 0])
    {
      (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setIconImageData */ .k8)(page.id, icons[allowlisted | 0]);
    }
    else
    {
      (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setIconPath */ .c4)(
        page.id,
        "/icons/ab-$size" + (allowlisted ? "-allowlisted" : "") + ".png"
      );
    }
  }
  else
  {
    browser.action.setIcon({
      tabId: page.id,
      imageData: frames["" + opacity + allowlisted]
    });
  }
}

_vendor_adblockplusui_adblockpluschrome_lib_allowlisting__WEBPACK_IMPORTED_MODULE_2__/* .allowlistingState.addListener */ ._o.addListener("changed", async(page, isAllowlisted) =>
{
  await allowlistedState.set(page.id, isAllowlisted);
  if (canUpdateIcon)
    await setIcon(page);
});

async function renderFrames(opacities) {
  let images = await Promise.all([
    loadImage("icons/ab-16.png"),
    loadImage("icons/ab-16-whitelisted.png"),
    loadImage("icons/ab-16-whitelisted.png"),
    loadImage("icons/ab-20.png"),
    loadImage("icons/ab-20-whitelisted.png"),
    loadImage("icons/ab-20-whitelisted.png"),
    loadImage("icons/ab-32.png"),
    loadImage("icons/ab-32-whitelisted.png"),
    loadImage("icons/ab-32-whitelisted.png"),
    loadImage("icons/ab-40.png"),
    loadImage("icons/ab-40-whitelisted.png"),
    loadImage("icons/ab-40-whitelisted.png"),
  ]);
  opacities = new Set(opacities);
  let imageMap = {
    16: { base: [images[0], images[1]], overlay: images[2] },
    20: { base: [images[3], images[4]], overlay: images[5] },
    32: { base: [images[6], images[7]], overlay: images[8] },
    40: { base: [images[9], images[10]], overlay: images[11] }
  };

  let frames = {};
  let canvas = new OffscreenCanvas(0, 0);
  let context = canvas.getContext("2d");

  for (let allowlisted of [false, true])
  {
    for (let opacity of opacities)
    {
      let imageData = {};
      let sizes = [16, 20, 32, 40];
      for (let size of sizes)
      {
        canvas.width = size;
        canvas.height = size;
        context.globalAlpha = 1;
        context.drawImage(imageMap[size]["base"][allowlisted | 0], 0, 0);
        context.globalAlpha = opacity;
        context.drawImage(imageMap[size]["overlay"], 0, 0);
        imageData[size] = context.getImageData(0, 0, size, size);
      }
      frames["" + opacity + allowlisted] = imageData;
    }
  }

  return frames;
}

async function animateIcon(opacities, frames)
{
  let tabs = await browser.tabs.query({active: true});
  let pages = tabs.map(tab => new ext.Page(tab));

  let animationLoop = 0;
  let animationStep = 0;
  let numberOfFrames = opacities.length;
  let opacity = 0;

  let onActivated = async page =>
  {
    pages.push(page);
    await setIcon(page, opacity, frames);
    toggleBadge(page.id, true);
  };
  ext.pages.onActivated.addListener(onActivated);

  canUpdateIcon = false;
  for (let page of pages)
    toggleBadge(page.id, true);
  return new Promise((resolve, reject) =>
  {
    let interval = setInterval(async() =>
    {
      let oldOpacity = opacity;
      opacity = opacities[animationStep++];

      if (opacity != oldOpacity)
      {
        for (let page of pages)
        {
          if (await allowlistedState.has(page.id))
            await setIcon(page, opacity, frames);
        }
      }

      if (animationStep > numberOfFrames)
      {
        if (++animationLoop > ANIMATION_LOOPS - 1 || stopRequested)
        {
          clearInterval(interval);
          ext.pages.onActivated.removeListener(onActivated);
          for (let page of pages)
            toggleBadge(page.id, false);
          canUpdateIcon = true;
          resolve();
        }
        else
        {
          animationStep = 0;
        }
      }
    }, FRAME_IN_MS);
  });
}

/**
 * Stops to animate the browser action icon
 * after the current interval has been finished.
 *
 * @return {Promise} A promise that is fullfilled when
 *                   the icon animation has been stopped.
 */
async function stopIconAnimation()
{
  stopRequested = true;
  await notRunning;
  stopRequested = false;
}

/**
 * Starts to animate the browser action icon to indicate a pending notifcation.
 * If the icon is already animated, it replaces the previous
 * animation as soon as the current interval has been finished.
 *
 * @param {string} type  The notification type (i.e: "information" or
 *                       "critical".)
 */
function startIconAnimation(type)
{
  let opacities = frameOpacities;
  if (type == "critical")
    opacities = frameOpacitiesCritical;

  notRunning = Promise.all([renderFrames(opacities), stopIconAnimation()])
    .then(results =>
    {
      if (stopRequested)
        return;

      let frames = results[0];
      return animateIcon(opacities, frames);
    });
}

renderIcons();

/**
 * Returns the Object containing all of the reasons the text on the toolbar icon / badge is 'new'
 *
 */
const NEW_BADGE_REASONS = {
  SEVEN_DAY: 'seven day',
  UPDATE: 'update',
  VPN_CTA: 'vpn cta',
  FREE_DC_UPDATE: 'free dc update',
};

/**
 * Handles the display of the New badge on the toolbar icon.
 * @param {Boolean} [showBadge] true shows the badge, false removes the badge
 */

let newBadgeTextReason = "";

async function showIconBadgeCTA(showBadge, reason) {
  if (!License.shouldShowPremiumCTA()) {
    return;
  }
  if (showBadge) {
    let newBadgeText = browser.i18n.getMessage('new_badge');
    // Text that exceeds 4 characters is truncated on the toolbar badge,
    // so we default to English
    if (!newBadgeText || newBadgeText.length >= 5) {
      newBadgeText = 'New';
    }
    (0,_utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageSetHelper */ .rJ)(statsInIconKey, Prefs.show_statsinicon);
    Prefs.show_statsinicon = false;
    // wait 10 seconds to allow any other ABP setup tasks to finish
    setTimeout(() => {
      // process all currently opened tabs
      browser.tabs.query({}).then((tabs) => {
        for (const tab of tabs) {
          if (tab.url && tab.url.startsWith('http')) {
            (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setBadge */ .q_)(tab.id, { color: '#03bcfc', number: newBadgeText });
            newBadgeTextReason = reason || '';
          }
        }
      });
    }, 10000); // 10 seconds
  } else {
    // Restore show_statsinicon if we previously stored its value
    const storedValue = await (0,_utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageGetHelper */ .nX)(statsInIconKey);
    if (typeof storedValue === 'boolean') {
      Prefs.show_statsinicon = storedValue;
      (0,_utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageSetHelper */ .rJ)(statsInIconKey); // remove the data, since we no longer need it
      browser.tabs.query({}).then((tabs) => {
        for (const tab of tabs) {
          browser.browserAction.setBadgeText({
            tabId: tab.id,
            text: '',
          });
        }
      });
      browser.browserAction.setBadgeText({ text: ' ' });
    }
  }
};

/**
 * Returns the String reason the text on the toolbar icon / badge is 'new'
 *
 */
function getNewBadgeTextReason() {
  return newBadgeTextReason;
};


/***/ }),

/***/ 5829:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__);



browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command !== "parseFilter" || !message.filterTextToParse) {
    return;
  }
  sendResponse(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__.filters.validate(message.filterTextToParse));
});


/***/ }),

/***/ 8910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ initialize)
});

// UNUSED EXPORTS: isDataCorrupted

// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/prefs.js
var prefs = __webpack_require__(8710);
// EXTERNAL MODULE: ./build/templates/info.chrome.js.tmpl
var info_chrome_js = __webpack_require__(187);
// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
;// CONCATENATED MODULE: ./node_modules/@adblockinc/rules/dist/index/adblock.json
const adblock_namespaceObject = JSON.parse('[{"id":"684A25C6-6B5D-458A-8A2B-BAC0A12B0B15","type":"ads","languages":["ar"],"title":"Liste AR+Liste FR+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=98","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","8D421590-1A68-4B68-BE50-04E17C09460E","3D60E303-1141-4775-B800-834177922876"],"url":"https://easylist-downloads.adblockplus.org/v3/full/liste_ar+liste_fr+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/liste_ar+liste_fr+easylist.txt"},{"id":"25A31255-AB36-48A4-9086-06192DE71119","type":"ads","languages":["bn","gu","hi","pa","as","mr","ml","te","kn","or","ne","si"],"title":"IndianList+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","9FAA2906-CD5C-4520-BDC4-4E098B7EA228"],"url":"https://easylist-downloads.adblockplus.org/v3/full/indianlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/indianlist+easylist.txt"},{"id":"E22C3B40-DC90-49D7-8BF5-E60904AB159A","type":"ads","languages":["bg"],"title":"Bulgarian list+EasyList","homepage":"https://stanev.org/abp/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","1638B159-F64A-4307-84E7-16AB08ED409E"],"url":"https://easylist-downloads.adblockplus.org/v3/full/bulgarian_list+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/bulgarian_list+easylist.txt"},{"id":"4B6CE485-30AB-4213-AD17-504B3F2D2825","type":"ads","languages":["cs","sk"],"title":"EasyList Czech and Slovak+EasyList","homepage":"https://adblock.sk/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","2D8C4D88-34A0-4259-9098-30D28BA674BC"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistczechslovak+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistczechslovak+easylist.txt"},{"id":"96932CD9-6DDF-4D97-B92F-FDF747B6FAA2","type":"ads","languages":["no","nb","nn","da","is","fo","kl","sv","fi"],"title":"Dandelion Sprout\'s Nordic Filters+EasyList","homepage":"https://github.com/DandelionSprout/adfilt","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","6D489E8D-E61C-444C-BBC5-44741773ADC2"],"url":"https://easylist-downloads.adblockplus.org/v3/full/dandelion_sprouts_nordic_filters+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/dandelion_sprouts_nordic_filters+easylist.txt"},{"id":"0CD3D105-D3B3-4652-8489-94163DE9A08F","type":"ads","languages":["de"],"title":"EasyList Germany+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","4337FB2B-A95C-44D5-B78D-11AD40F7711B"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistgermany+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistgermany+easylist.txt"},{"id":"8C13E995-8F06-4927-BEA7-6C845FB7EEBF","type":"ads","languages":["en"],"title":"EasyList","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylist.txt"},{"id":"C3D13A19-3E8D-41F5-AD64-0F3B36DDE128","type":"ads","languages":["es"],"title":"EasyList Spanish+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","C8C1AA76-15B4-4CA3-8A9C-AD38D6AFCAEC"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistspanish+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistspanish+easylist.txt"},{"id":"2CEA1481-C29C-44F1-A084-A2A019533797","type":"ads","languages":["fr"],"title":"Liste FR+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=98","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","8D421590-1A68-4B68-BE50-04E17C09460E"],"url":"https://easylist-downloads.adblockplus.org/v3/full/liste_fr+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/liste_fr+easylist.txt"},{"id":"07549D8B-F06F-4D9D-A567-929AA59E9D1D","type":"ads","languages":["he"],"title":"EasyList Hebrew+EasyList","homepage":"https://github.com/easylist/EasyListHebrew","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","AE0D9320-665E-407D-B692-1A85AE481F34"],"url":"https://easylist-downloads.adblockplus.org/v3/full/israellist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/israellist+easylist.txt"},{"id":"B7D76369-DD19-4602-80E8-2E32DDB490AC","type":"ads","languages":["id","ms"],"title":"ABPindo+EasyList","homepage":"http://abpindo.blogspot.com/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","A4A32212-E6BD-45F6-AD0F-E0FD18E8537B"],"url":"https://easylist-downloads.adblockplus.org/v3/full/abpindo+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/abpindo+easylist.txt"},{"id":"BBC07C05-66F1-42EC-BD4D-7AD495FAC84B","type":"ads","languages":["it"],"title":"EasyList Italy+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","2F0A4F0D-DF16-40D0-B0E0-5EB6791EC119"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistitaly+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistitaly+easylist.txt"},{"id":"2708BCB7-2E45-41BC-B517-1730CF532F89","type":"ads","languages":["ko"],"title":"KoreanList+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","BCE2062F-0D99-4861-A1F7-E3DFEA6DAB69"],"url":"https://easylist-downloads.adblockplus.org/v3/full/koreanlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/koreanlist+easylist.txt"},{"id":"CBE50FA2-DE3F-480C-B1D7-04289391C033","type":"ads","languages":["lt"],"title":"EasyList Lithuania+EasyList","homepage":"https://github.com/EasyList-Lithuania/easylist_lithuania","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","E89B3C08-2DED-40EA-8EE1-339B90D7B451"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistlithuania+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistlithuania+easylist.txt"},{"id":"950C88EA-2DD1-42E3-B2A2-2DF2ED15563A","type":"ads","languages":["lv"],"title":"Latvian List+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=99-latvian-list","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","51893C6C-F39E-43C5-A2EF-9545E388A2CE"],"url":"https://easylist-downloads.adblockplus.org/v3/full/latvianlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/latvianlist+easylist.txt"},{"id":"A4B88FB6-E5E5-417F-8A49-20B8244995FD","type":"ads","languages":["nl"],"title":"EasyList Dutch+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","CB94E27D-6CD1-4DB9-83D9-6B7F1A3555F6"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistdutch+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistdutch+easylist.txt"},{"id":"3D2C09D0-DF1C-4C8E-9947-A23DCEAF8F8B","type":"ads","languages":["pl"],"title":"EasyList Polish+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","9F743FCD-801B-41D0-830F-5A4EA995216E"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistpolish+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistpolish+easylist.txt"},{"id":"14DF7BE6-9675-4E07-987A-D8A1000F9FEF","type":"ads","languages":["pt"],"title":"EasyList Portuguese+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","A41441EE-BF7C-4A48-9A43-42CCEA2B2A1D"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistportuguese+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistportuguese+easylist.txt"},{"id":"EEEF75EC-B2B4-49F4-BC49-17B08266F334","type":"ads","languages":["ro"],"title":"ROList+EasyList","homepage":"https://zoso.ro/rolist/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","99166908-5FDA-4F9E-8C4C-70BB4DEEFC08"],"url":"https://easylist-downloads.adblockplus.org/v3/full/rolist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/rolist+easylist.txt"},{"id":"1B5F78CA-8B30-4BDF-B0A3-451CB2202984","type":"ads","languages":["ru","uk"],"title":"RU AdList+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=102","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","879ECB9D-8935-4506-939E-5BBB7DD09402"],"url":"https://easylist-downloads.adblockplus.org/v3/full/ruadlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/ruadlist+easylist.txt"},{"id":"1C571EC7-6E52-47CC-B04A-4B3008D0AEBE","type":"ads","languages":["vi"],"title":"ABPVN List+EasyList","homepage":"http://abpvn.com/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","03648752-31EE-4FD0-85C1-20B07C5551C3"],"url":"https://easylist-downloads.adblockplus.org/v3/full/abpvn+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/abpvn+easylist.txt"},{"id":"9BD3EA2F-889D-4CC3-B680-CF484F2BD1B9","type":"ads","languages":["zh"],"title":"EasyList China+EasyList","homepage":"https://github.com/easylist/easylistchina/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","1D7F590C-B752-4BA0-9473-6A26DE1326B1"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistchina+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt"},{"id":"0798B6A2-94A4-4ADF-89ED-BEC112FC4C7F","type":"allowing","title":"Allow nonintrusive advertising","homepage":"https://acceptableads.com/","url":"https://easylist-downloads.adblockplus.org/v3/full/exceptionrules.txt","mv2_url":"https://easylist-downloads.adblockplus.org/exceptionrules.txt"},{"id":"F12E0801-A00B-49DE-B1E3-52C9C4F90C8C","type":"allowing","title":"Allow nonintrusive advertising without third-party tracking","homepage":"https://acceptableads.com/","url":"https://easylist-downloads.adblockplus.org/v3/full/exceptionrules-privacy-friendly.txt","mv2_url":"https://easylist-downloads.adblockplus.org/exceptionrules-privacy-friendly.txt"},{"id":"D5561090-9ADB-4EEE-AA81-101B645D9F4F","type":"newsletters","title":"DistractionControl-Newsletter","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-newsletter.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-newsletter.txt"},{"id":"3B85CD3F-553A-45D1-AA38-6288E1C4C7B9","type":"notifications","title":"DistractionControl-Push","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-push.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-push.txt"},{"id":"1E7A240E-CD85-493D-BEEF-C68A6AEA1225","type":"surveys","title":"DistractionControl-Survey","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-survey.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-survey.txt"},{"id":"8E2D687A-3B44-46E1-BE68-2FE5441A788E","type":"videos","title":"DistractionControl-Video","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-video.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-video.txt"},{"id":"D4028CDD-3D39-4624-ACC7-8140F4EC3238","type":"circumvention","title":"ABP filters","homepage":"https://github.com/abp-filters/abp-filters-anti-cv","url":"https://easylist-downloads.adblockplus.org/v3/full/abp-filters-anti-cv.txt","mv2_url":"https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt"},{"id":"2090F374-29D9-4202-B2CE-139D6492D95E","type":"cookies","title":"I don\'t care about cookies","homepage":"https://www.i-dont-care-about-cookies.eu/","url":"https://easylist-downloads.adblockplus.org/v3/full/i_dont_care_about_cookies.txt","mv2_url":"https://easylist-downloads.adblockplus.org/i_dont_care_about_cookies.txt"},{"id":"5BD2BB73-459D-4A74-AF9D-A10157268350","type":"notifications","title":"Fanboy\'s Notifications Blocking List","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/fanboy-notifications.txt","mv2_url":"https://easylist-downloads.adblockplus.org/fanboy-notifications.txt"},{"id":"D72B6F06-52B2-4FED-96A2-1BF59CDD7AEC","type":"privacy","title":"EasyPrivacy","homepage":"https://easylist.to/","requires":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easyprivacy.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easyprivacy.txt"},{"id":"0A679439-445F-4DE7-84B9-88341F6DA520","type":"social","title":"Fanboy\'s Social Blocking List","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/fanboy-social.txt","mv2_url":"https://easylist-downloads.adblockplus.org/fanboy-social.txt"},{"id":"0B0296EB-1CC5-49CD-AD38-8AF27420B7E4","type":"annoyances","title":"Fanboy\'s Annoyance List","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/fanboy-annoyance.txt","mv2_url":"https://secure.fanboy.co.nz/fanboy-annoyance.txt"},{"id":"9CC3AF4D-EB89-4100-97C6-4EEE4F8A2E82","type":"cryptomining","title":"NoCoin Filter List","homepage":"https://github.com/hoshsadiq/adblock-nocoin-list/","url":"https://easylist-downloads.adblockplus.org/v3/full/nocoin.txt","mv2_url":"https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt"}]');
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/messaging/port.js
var port = __webpack_require__(4554);
// EXTERNAL MODULE: ./adblock-betafish/telemetry.js
var telemetry = __webpack_require__(9388);
;// CONCATENATED MODULE: ./adblock-betafish/alias/subscriptionInit.js
/** @module adblock-betafish/alias/subscriptionInit */

/** similar to adblockpluschrome\lib\subscriptionInit.js */

/** @module subscriptionInit */








let firstRun;
let reinitialized = false;
let dataCorrupted = false;

/**
 * If there aren't any filters, the default subscriptions are added.
 * However, if patterns.ini already did exist and/or any preference
 * is set to a non-default value, this indicates that this isn't the
 * first run, but something went wrong.
 *
 * This function detects the first run, and makes sure that the user
 * gets notified (on the first run page) if the data appears incomplete
 * and therefore will be reinitialized.
 */
 async function detectFirstRun(foundSubscriptions, foundStorage) {
   let userFilters = await ewe_api.filters.getUserFilters();
   firstRun = !foundSubscriptions && !userFilters.length;

   if (firstRun && (foundStorage || prefs/* Prefs.currentVersion */.B.currentVersion))
     reinitialized = true;

   prefs/* Prefs.currentVersion */.B.currentVersion = info_chrome_js.addonVersion;
 }

/**
 * In case of data corruption, we don't want to show users
 * any non-essential notifications so we need to instruct
 * the notification manager to ignore them.
 *
 * @param {boolean} value
 */
function setDataCorrupted(value) {
  dataCorrupted = value;
  ewe_api.notifications.ignored = value;
}

/*
 * Remove any subscriptions that a user or administrator has added to a
 * central / common configuration (such as the Windows Registry)
 *
 * @return {Promise}
 */

function removeSubscriptions() {
  return new Promise(function (resolve, reject) {
    if ("managed" in browser.storage) {
      browser.storage.managed.get(null).then(
        async (items) => {
          for (let key in items) {
            if (key === "remove_subscriptions" && Array.isArray(items[key]) && items[key].length) {
              for (let inx = 0; inx < items[key].length; inx++) {
                await ewe_api.subscriptions.remove(items[key][inx]);
              }
            }
          }
          resolve();
        },

        // Opera doesn't support browser.storage.managed, but instead of simply
        // removing the API, it gives an asynchronous error which we ignore here.
        () => {
          resolve();
        }
      );
    } else {
      resolve();
    }
  });
}


function openInstalled() {
  telemetry/* TELEMETRY.untilLoaded */.C.untilLoaded(function (userID) {
    browser.tabs.create({
      url:
        "https://getadblock.com/installed/?u=" +
        userID +
        "&lg=" +
        browser.i18n.getUILanguage() +
        "&dc=" +
        dataCorrupted
    });
  });
}


async function addSubscriptions() {
  if (firstRun || reinitialized) {
    await ewe_api.subscriptions.addDefaults();
  }
  // Remove "acceptable ads" if Gecko
  if (firstRun) {
    for (let url of prefs/* Prefs.additional_subscriptions */.B.additional_subscriptions) {
      try {
        await ewe_api.subscriptions.add(url);
      }
      catch (ex) {
        console.error(`Failed to add additional subscription: ${url}`);
      }
    }
    if (info_chrome_js.platform === "gecko") {
      try {
        await ewe_api.subscriptions.remove(ewe_api.subscriptions.ACCEPTABLE_ADS_URL);
      }
      catch (ex) {
        console.error(`Failed to remove AA subscription`);
      }
    }
  }

  // Show first run page or the updates page. The latter is only shown
  // on Chromium (since the current updates page announces features that
  // aren't new to Firefox users), and only if this version of the
  // updates page hasn't been shown yet.

  if (firstRun && !prefs/* Prefs.suppress_first_run_page */.B.suppress_first_run_page) {
    // Always show the first run page if a data corruption was detected
    // (either through failure of reading from or writing to storage.local).
    // The first run page could notify the user about the data corruption.
    if (firstRun || dataCorrupted) {
      openInstalled();
    }
  }
}

/**
 * We need to check whether we can safely write to/read from storage
 * before we start relying on it for storing preferences.
 */
async function testStorage() {
  let testKey = "readwrite_test";
  let testValue = Math.random();

  try {
    await browser.storage.local.set({ [testKey]: testValue });
    let result = await browser.storage.local.get(testKey);
    if (result[testKey] != testValue)
      throw new Error("Storage test: Failed to read and write value");
  } finally {
    await browser.storage.local.remove(testKey);
  }
}

const initialize = ewe_api.start({
  bundledSubscriptions: adblock_namespaceObject,
  name: info_chrome_js.addonName,
  version: info_chrome_js.addonVersion,
  bundledSubscriptionsPath: "/data/rules/abp",
}).then(async (eweFirstRun) => {
  eweFirstRun.warnings.forEach(console.warn);
  await prefs/* Prefs.untilLoaded.catch */.B.untilLoaded["catch"](() => { setDataCorrupted(true); });
  await testStorage().catch(() => { setDataCorrupted(true); })
  await detectFirstRun(
    eweFirstRun.foundSubscriptions,
    eweFirstRun.foundStorage
    );
  // adding default filter lists
  await addSubscriptions();
  await removeSubscriptions();
});


/**
 * Gets a value indicating whether a data corruption was detected.
 *
 * @return {boolean}
 */
function isDataCorrupted() {
  return dataCorrupted;
}




/**
 * @typedef {object} subscriptionsGetInitIssuesResult
 * @property {boolean} dataCorrupted
 *   true if it appears that the user's extension data was corrupted.
 * @property {boolean} reinitialized
 *   true if we have reset the user's settings due to data corruption.
 */

/**
 * Returns an Object with boolean flags for any subscription initialization
 * issues.
 *
 * @event "subscriptions.getInitIssues"
 * @returns {subscriptionsGetInitIssuesResult}
 */
port/* port.on */.N.on("subscriptions.getInitIssues", (message, sender) => ({ dataCorrupted, reinitialized }));


/***/ }),

/***/ 9192:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _servermessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1546);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global */





const authorizedKeys = [
  `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuePfbm865kumeftXjlbt
J68DTXLTn0VeOgdSTqOcpADVqH0Kxz5hfLMaoKC/QhO3SmAu1yZwJZ1WP9Uyu3I5
EvJwEt7OHjJv54GhyYCtylMDCqSZgIIkUtB9PSXqFe3qyKAXACzwnLHmYIMMC1rx
bViqMD06+S4NKtzEh602/JsOOTHkXDJFQi5gGpd7Yn/r1YFG20JzU5lr0pf3dOEK
gNXiEwSRCuVSZ2+MHMtkFdP83/k59rTOfz5+ZThYmxECytD0JyY+bpDbso/XxQeL
fThNEEnSpbbeJRZQM5Lwf4D/f1wzSvyRrQiQz6Bo6TrA9DpL/BHqgUBv4O+DwhAu
8tFaaI+YWUmA1M6DRCL1aPQlFf3RB+aAf/TXFRU6enm8y/DFKWnwZja1YlApxTYT
MGnZ5hrsXZZImjcKBKwXi3JCtLkfV+osAHYrMAJPPAfECkch/ovrEUcdBEu4WsJ+
gKlL2C1/ZL+fTZc+H9qt38qba8my5XlQmhXmzXFKKyp+1pqNkQuYzzT0M8PUqtlh
z5aNu4gc/sOrQayusssUkkwISWm9yKc9pwOE+2Ax45iq2xNhjx0+rl9nc/chV21T
ZLfyePid/4N3Q7obmQ9a6trOBIF5ONyg16CK61RjacnG76AMKrVOoq9lzF2UufL8
Myzw9X8Wsw3VrjJyYbWhUtkCAwEAAQ==`,
];

_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.setAuthorizedKeys(authorizedKeys);

async function onAllowlisting(domain) {
  await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.add([`@@||${domain}^$document`], (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__/* .createFilterMetaData */ .Yv)('web'));
}
_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.setAllowlistingCallback(onAllowlisting);

_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.onUnauthorized.addListener((error) => {
  _servermessages__WEBPACK_IMPORTED_MODULE_0__/* ["default"].recordErrorMessage */ .Z.recordErrorMessage('one_click_allowlisting_error ', undefined, { errorMessage: error.toString() });
  // eslint-disable-next-line no-console
  console.error(error);
});


/***/ }),

/***/ 4590:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/prefs.js
var prefs = __webpack_require__(8710);
// EXTERNAL MODULE: ./build/templates/info.chrome.js.tmpl
var info_chrome_js = __webpack_require__(187);
// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
// EXTERNAL MODULE: ./adblock-betafish/telemetry.js
var telemetry = __webpack_require__(9388);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/stats.js
var stats = __webpack_require__(9892);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/allowlisting.js
var allowlisting = __webpack_require__(8858);
// EXTERNAL MODULE: ./adblock-betafish/alias/subscriptionInit.js + 1 modules
var subscriptionInit = __webpack_require__(8910);
// EXTERNAL MODULE: ./adblock-betafish/picreplacement/sync-service.js
var sync_service = __webpack_require__(8409);
// EXTERNAL MODULE: ./adblock-betafish/subscriptionadapter.js + 1 modules
var subscriptionadapter = __webpack_require__(934);
// EXTERNAL MODULE: ./adblock-betafish/datacollection.v2.js
var datacollection_v2 = __webpack_require__(5175);
// EXTERNAL MODULE: ./adblock-betafish/ctaabmanager.js
var ctaabmanager = __webpack_require__(1064);
// EXTERNAL MODULE: ./adblock-betafish/alias/icon.js
var icon = __webpack_require__(1021);
// EXTERNAL MODULE: ./adblock-betafish/localdatacollection.js
var localdatacollection = __webpack_require__(1120);
// EXTERNAL MODULE: ./adblock-betafish/picreplacement/check.js
var check = __webpack_require__(1177);
// EXTERNAL MODULE: ./adblock-betafish/servermessages.js
var servermessages = __webpack_require__(1546);
// EXTERNAL MODULE: ./adblock-betafish/survey.js + 1 modules
var survey = __webpack_require__(7877);
;// CONCATENATED MODULE: ./adblock-betafish/alias/uninstall.js
/** @module uninstall */
/** similar to adblockpluschrome\lib\uninstall.js */





function setUninstallURL() {
  if (browser.runtime.setUninstallURL) {
    telemetry/* TELEMETRY.untilLoaded */.C.untilLoaded(function (userID) {
      let uninstallURL = "https://getadblock.com/uninstall/?u=" + userID;
      // if the start property of blockCount exists (which is the AdBlock
      // installation timestamp)
      // use it to calculate the approximate length of time that user has
      // AdBlock installed
      if (prefs/* Prefs */.B && prefs/* Prefs.blocked_total */.B.blocked_total !== undefined) {
        let twoMinutes = 2 * 60 * 1000;
        let getLastUpdateTime = async function () {
          const userSubs = await subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText();
          let maxLastDownload = -1;
          for (const sub in userSubs) {
              if (userSubs[sub].lastSuccess > maxLastDownload) {
                  maxLastDownload = userSubs[sub].lastSuccess;
              }
          }
          return maxLastDownload;
        };
        let updateUninstallURL = async function () {
          const data = await browser.storage.local.get("blockage_stats");
          let url = uninstallURL;
          if (data && data.blockage_stats && data.blockage_stats.start) {
            let installedDuration = Date.now() - data.blockage_stats.start;
            url = url + "&t=" + installedDuration;
          }
          let bc = prefs/* Prefs.blocked_total */.B.blocked_total;
          url = url + "&bc=" + bc;
          let lastUpdateTime = await getLastUpdateTime();
          url = url + "&lt=" + lastUpdateTime;
          browser.runtime.setUninstallURL(url);
        };
        // start an interval timer that will update the Uninstall URL every 2
        // minutes
        setInterval(updateUninstallURL, twoMinutes);
        updateUninstallURL();
      } else {
        browser.runtime.setUninstallURL(uninstallURL + "&t=-1");
      }
    }); // end of TELEMETRY.untilLoaded
  }
};

// EXTERNAL MODULE: ./adblock-betafish/utilities/background/bg-functions.js
var bg_functions = __webpack_require__(2028);
;// CONCATENATED MODULE: ./adblock-betafish/background.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, License,
   gabQuestion, ext, getSettings, setSetting, settings
   parseFilter, channels, twitchChannelNamePages, ytChannelNamePages,
   updateButtonUIAndContextMenus,  */
























// Message verification
const trustedBaseUrl = browser.runtime.getURL('');
const gabHostnames = ['https://getadblock.com', 'https://dev.getadblock.com', 'https://dev1.getadblock.com', 'https://dev2.getadblock.com', 'https://vpn.getadblock.com', 'https://help.getadblock.com'];

const isTrustedSender = sender => sender.url.startsWith(trustedBaseUrl);

const isTrustedTarget = url => (url.startsWith(trustedBaseUrl)
                            || gabHostnames.includes(new URL(url).origin));

const isTrustedSenderDomain = (sender) => {
  if (sender.origin) {
    return gabHostnames.includes(sender.origin);
  }
  if (sender.url) {
    return gabHostnames.includes(new URL(sender.url).origin);
  }
  return false;
};
const adblocBetaID = 'pljaalgmajnlogcgiohkhdmgpomjcihk';

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  Prefs: prefs/* Prefs */.B,
  info: info_chrome_js,
  getBlockedPerPage: stats/* getBlockedPerPage */.G,
  SURVEY: survey/* default */.Z,
  SyncService: sync_service["default"],
  LocalDataCollection: localdatacollection/* default */.Z,
  ServerMessages: servermessages/* default */.Z,
  SubscriptionAdapter: subscriptionadapter/* default */.Z,
  TELEMETRY: telemetry/* TELEMETRY */.C,
  DataCollectionV2: datacollection_v2/* default */.Z,
  CtaABManager: ctaabmanager/* default */.Z,
  getNewBadgeTextReason: icon/* getNewBadgeTextReason */.vo,
  ewe: ewe_api,
  License: check/* License */.Cz,
  channels: check/* channels */.ZW,
  isTrustedSender,
  isTrustedTarget,
  isTrustedSenderDomain,
});

// CUSTOM FILTERS

const isSelectorFilter = function (text) {
  // This returns true for both hiding rules as hiding whitelist rules
  // This means that you'll first have to check if something is an excluded rule
  // before checking this, if the difference matters.
  return /#@?#./.test(text);
};

// custom filter countCache singleton.
const countCache = (function countCache() {
  let cache;

  // Update custom filter count stored in storage
  const updateCustomFilterCount = function () {
    (0,bg_functions/* chromeStorageSetHelper */.rJ)('custom_filter_count', cache);
  };

  return {
    // Update custom filter count cache and value stored in storage.
    // Inputs: new_count_map:count map - count map to replace existing count
    // cache
    updateCustomFilterCountMap(newCountMap) {
      cache = newCountMap || cache;
      updateCustomFilterCount();
    },

    // Remove custom filter count for host
    // Inputs: host:string - url of the host
    removeCustomFilterCount(host) {
      if (host && cache[host]) {
        delete cache[host];
        updateCustomFilterCount();
      }
    },

    // Get current custom filter count for a particular domain
    // Inputs: host:string - url of the host
    getCustomFilterCount(host) {
      let customCount = 0;
      if (cache) {
        customCount = cache[host];
      }
      return customCount || 0;
    },

    // Add 1 to custom filter count for the filters domain.
    // Inputs: filter:string - line of text to be added to custom filters.
    addCustomFilterCount(filter) {
      const host = filter.split('##')[0];
      cache[host] = this.getCustomFilterCount(host) + 1;
      updateCustomFilterCount();
    },

    init() {
      browser.storage.local.get('custom_filter_count').then((response) => {
        cache = response.custom_filter_count || {};
      });
    },
  };
}());
countCache.init();

// Add a new custom filter entry.
// Inputs: filter:string - line of text to add to custom filters.
//         origin:string - the source or trigger for the filter list entry
// Returns: null if succesfull, otherwise an exception
const addCustomFilter = async function (filterText, origin) {
  try {
    const response = ewe_api.filters.validate(filterText);
    if (response) {
      return response;
    }
    await ewe_api.filters.add([filterText], (0,bg_functions/* createFilterMetaData */.Yv)(origin));
    await ewe_api.filters.enable([filterText]);
    if (isSelectorFilter(filterText)) {
      countCache.addCustomFilterCount(filterText);
    }
    return null;
  } catch (ex) {
    // convert to a string so that Safari can pass
    // it back to content scripts
    return ex.toString();
  }
};

// Creates a custom filter entry that allowlists a given domain
// Inputs: pageUrl:string - url of the page
//         origin:string - the source or trigger for the filter list entry
// Returns: null if successful, otherwise an exception
const createDomainAllowlistFilter = async function (pageUrl, origin) {
  const theURL = new URL(pageUrl);
  const host = theURL.hostname.replace(/^www\./, '');
  const filter = `@@||${host}/*^$document`;
  return addCustomFilter(filter, origin);
};

// UNWHITELISTING

async function getUserFilters() {
  return ewe_api.filters.getUserFilters();
}

const isWhitelistFilter = function (text) {
  return /^@@/.test(text);
};

// Look for a custom filter that would whitelist the 'url' parameter
// and if any exist, remove the first one.
// Inputs: url:string - a URL that may be allowlisted by a custom filter
//         tabId: integer - tab id of the tab that may be allowlisted by a custom filter
// Returns: true if a filter was found and removed; false otherwise.
const tryToUnwhitelist = async function (pageUrl, tabId) {
  const url = pageUrl.replace(/#.*$/, ''); // Whitelist ignores anchors
  const customFilters = await getUserFilters();
  if (!customFilters || !customFilters.length === 0) {
    return false;
  }

  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < customFilters.length; i++) {
    const { text } = customFilters[i];
    const whitelist = text.search(/@@\*\$document,domain=~/);
    // Blacklist site, which is whitelisted by global @@*&document,domain=~
    // filter
    if (whitelist > -1) {
      // Remove protocols
      const [finalUrl] = url.replace(/((http|https):\/\/)?(www.)?/, '').split(/[/?#]/);
      await ewe_api.filters.remove([text]);
      await ewe_api.filters.remove([`${text}|~${finalUrl}`]);
      return true;
    }
    if (isWhitelistFilter(text) && (await ewe_api.filters.getAllowingFilters(tabId)).includes(text)) {
      await ewe_api.filters.remove([text]);
      return true;
    }
  }
  return false;
};

// Removes a custom filter entry.
// Inputs: host:domain of the custom filters to be reset.
const removeCustomFilter = async function (host) {
  const customFilters = await getUserFilters();
  if (!customFilters || !customFilters.length === 0) {
    return;
  }

  const identifier = host;

  for (let i = 0; i < customFilters.length; i++) {
    const entry = customFilters[i];
    // If the identifier is at the start of the entry
    // then delete it.
    if (entry.text.indexOf(identifier) === 0) {
      ewe_api.filters.remove([entry.text]);
    }
  }
};

// Entry point for customize.js, used to update custom filter count cache.
const updateCustomFilterCountMap = function (newCountMap) {
  // Firefox passes weak references to objects, so we need a local copy
  const localCountMap = JSON.parse(JSON.stringify(newCountMap));
  countCache.updateCustomFilterCountMap(localCountMap);
};

const removeCustomFilterForHost = function (host) {
  if (countCache.getCustomFilterCount(host)) {
    removeCustomFilter(host);
    countCache.removeCustomFilterCount(host);
  }
};

// Currently, Firefox doesn't allow the background page to use alert() or confirm(),
// so some JavaScript is injected into the active tab, which does the confirmation for us.
// If the user confirms the removal of the entries, then they are removed, and the page reloaded.
const confirmRemovalOfCustomFiltersOnHost = function (host, activeTabId) {
  const customFilterCount = countCache.getCustomFilterCount(host);
  const confirmationText = browser.i18n.getMessage('confirm_undo_custom_filters', [customFilterCount, host]);
  const messageListenerFN = function (request) {
    browser.runtime.onMessage.removeListener(messageListenerFN);
    if (request === `remove_custom_filters_on_host${host}:true`) {
      removeCustomFilterForHost(host);
      browser.tabs.reload(activeTabId);
    }
  };

  browser.runtime.onMessage.addListener(messageListenerFN);
  /* eslint-disable prefer-template */
  const codeToExecute = 'var host = "' + host + '"; var confirmResponse = confirm("' + confirmationText + '"); browser.runtime.sendMessage("remove_custom_filters_on_host" + host + ":" + confirmResponse); ';
  const details = { allFrames: false, code: codeToExecute };
  browser.tabs.executeScript(activeTabId, details);
};
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command !== 'confirmRemovalOfCustomFiltersOnHost' || !message.host || !message.activeTabId) {
    return;
  }
  confirmRemovalOfCustomFiltersOnHost(message.host, message.activeTabId);
  sendResponse({});
});

// Reload already opened tab
// Input:
// id: integer - id of the tab which should be reloaded
const reloadTab = function (id, callback) {
  let tabId = id;
  const localCallback = callback;
  const listener = function (updatedTabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.status === 'complete') {
      setTimeout(() => {
        browser.tabs.sendMessage(updatedTabId, { command: 'reloadcomplete' });
        if (typeof localCallback === 'function') {
          localCallback(tab);
        }
        browser.tabs.onUpdated.removeListener(listener);
      }, 2000);
    }
  };

  if (typeof tabId === 'string') {
    tabId = parseInt(tabId, 10);
  }
  browser.tabs.onUpdated.addListener(listener);
  browser.tabs.reload(tabId, { bypassCache: true });
};

const isSelectorExcludeFilter = function (text) {
  return /#@#./.test(text);
};

const getAdblockUserId = function () {
  return telemetry/* TELEMETRY.userId */.C.userId();
};

// INFO ABOUT CURRENT PAGE

// Returns true if the url cannot be blocked
const pageIsUnblockable = function (url) {
  if (!url) { // Protect against empty URLs - e.g. Safari empty/bookmarks/top sites page
    return true;
  }
  let scheme = '';
  if (!url.protocol) {
    scheme = (0,bg_functions/* parseUri */.he)(url).protocol;
  } else {
    scheme = url.protocol;
  }

  return (scheme !== 'http:' && scheme !== 'https:' && scheme !== 'feed:');
};

// Returns true if the page is whitelisted.
// Called from a content script
const pageIsWhitelisted = async function (page) {
  const whitelisted = !!await ewe_api.filters.getAllowingFilters(page.id).length;
  return (whitelisted !== undefined && whitelisted !== null);
};

const pausedKey = 'paused';
// white-list all blocking requests regardless of frame / document, but still allows element hiding
const pausedFilterText1 = '@@*';
// white-list all documents, which prevents element hiding
const pausedFilterText2 = '@@*$document';

// Get or set if AdBlock is paused
// Inputs: newValue (optional boolean): if true, AdBlock will be paused, if
// false, AdBlock will not be paused.
// Returns: undefined if newValue was specified, otherwise it returns true
// if paused, false otherwise.
const adblockIsPaused = function (newValue) {
  if (newValue === undefined) {
    return ((0,bg_functions/* sessionStorageGet */.E_)(pausedKey) === true);
  }

  if (newValue === true) {
    (0,bg_functions/* chromeStorageSetHelper */.rJ)(pausedKey, true, () => {
      ewe_api.filters.add([pausedFilterText1]);
      ewe_api.filters.add([pausedFilterText2]);
    });
  } else {
    ewe_api.filters.remove([pausedFilterText1]);
    ewe_api.filters.remove([pausedFilterText2]);
    browser.storage.local.remove(pausedKey);
  }
  (0,bg_functions/* sessionStorageSet */.bg)(pausedKey, newValue);
  return undefined;
};

const domainPausedKey = 'domainPaused';

// Helper that saves the domain pauses
// Inputs:  domainPauses (required object): domain pauses to save
// Returns: undefined
const saveDomainPauses = function (domainPauses) {
  (0,bg_functions/* chromeStorageSetHelper */.rJ)(domainPausedKey, domainPauses);
  (0,bg_functions/* sessionStorageSet */.bg)(domainPausedKey, domainPauses);
};

// Helper that removes any domain pause filter rules based on tab events
// Inputs:  tabId (required integer): identifier for the affected tab
//          newDomain (optional string): the current domain of the tab
// Returns: undefined
const domainPauseChangeHelper = function (tabId, newDomain) {
  // get stored domain pauses
  const storedDomainPauses = (0,bg_functions/* sessionStorageGet */.E_)(domainPausedKey);

  // check if any of the stored domain pauses match the affected tab
  for (const aDomain in storedDomainPauses) {
    if (storedDomainPauses[aDomain] === tabId && aDomain !== newDomain) {
      // Remove the filter that white-listed the domain
      ewe_api.filters.remove([`@@${aDomain}$document`]);
      delete storedDomainPauses[aDomain];

      // save updated domain pauses
      saveDomainPauses(storedDomainPauses);
    }
  }
  updateButtonUIAndContextMenus();
};

// Handle the effects of a tab update event on any existing domain pauses
// Inputs:  tabId (required integer): identifier for the affected tab
//          changeInfo (required object with a url property): contains the
// new url for the tab
//          tab (optional Tab object): the affected tab
// Returns: undefined
const domainPauseNavigationHandler = function (tabId, changeInfo) {
  if (changeInfo === undefined || changeInfo.url === undefined || tabId === undefined) {
    return;
  }

  const newDomain = (0,bg_functions/* parseUri */.he)(changeInfo.url).host;

  domainPauseChangeHelper(tabId, newDomain);
};

// Handle the effects of a tab remove event on any existing domain pauses
// Inputs:  tabId (required integer): identifier for the affected tab
//          changeInfo (optional object): info about the remove event
// Returns: undefined
const domainPauseClosedTabHandler = function (tabId) {
  if (tabId === undefined) {
    return;
  }

  domainPauseChangeHelper(tabId);
};

// Get or set if AdBlock is domain paused for the domain of the specified tab
// Inputs:  activeTab (optional object with url and id properties): the paused tab
//          newValue (optional boolean): if true, AdBlock will be domain paused
// on the tab's domain, if false, AdBlock will not be domain paused on that domain.
// Returns: undefined if activeTab and newValue were specified; otherwise if activeTab
// is specified it returns true if domain paused, false otherwise; finally it returns
// the complete storedDomainPauses if activeTab is not specified

const adblockIsDomainPaused = function (activeTab, newValue) {
  // get stored domain pauses
  let storedDomainPauses = (0,bg_functions/* sessionStorageGet */.E_)(domainPausedKey);

  // return the complete list of stored domain pauses if activeTab is undefined
  if (activeTab === undefined) {
    return storedDomainPauses;
  }

  // return a boolean indicating whether the domain is paused if newValue is undefined
  const activeDomain = (0,bg_functions/* parseUri */.he)(activeTab.url).host;
  if (newValue === undefined) {
    if (storedDomainPauses) {
      return Object.prototype.hasOwnProperty.call(storedDomainPauses, activeDomain);
    }
    return false;
  }

  // create storedDomainPauses object if needed
  if (!storedDomainPauses) {
    storedDomainPauses = {};
  }

  // set or delete a domain pause
  if (newValue === true) {
    // add a domain pause
    ewe_api.filters.add([`@@${activeDomain}$document`]);
    storedDomainPauses[activeDomain] = activeTab.id;
    browser.tabs.onUpdated.removeListener(domainPauseNavigationHandler);
    browser.tabs.onRemoved.removeListener(domainPauseClosedTabHandler);
    browser.tabs.onUpdated.addListener(domainPauseNavigationHandler);
    browser.tabs.onRemoved.addListener(domainPauseClosedTabHandler);
  } else {
    // remove the domain pause
    ewe_api.filters.remove([`@@${activeDomain}$document`]);
    delete storedDomainPauses[activeDomain];
  }

  // save the updated list of domain pauses
  saveDomainPauses(storedDomainPauses);
  return undefined;
};

// If AdBlock was paused on shutdown (adblock_is_paused is true), then
// unpause / remove the white-list all entry at startup.
browser.storage.local.get(pausedKey).then((response) => {
  if (response[pausedKey]) {
    subscriptionInit/* initialize.then */.j.then(() => {
      ewe_api.filters.remove([pausedFilterText1]);
      ewe_api.filters.remove([pausedFilterText2]);
      browser.storage.local.remove(pausedKey);
    });
  }
});


// If AdBlock was domain paused on shutdown, then unpause / remove
// all domain pause white-list entries at startup.
browser.storage.local.get(domainPausedKey).then((response) => {
  const storedDomainPauses = response[domainPausedKey];
  if (!(0,bg_functions/* isEmptyObject */.Qr)(storedDomainPauses)) {
    subscriptionInit/* initialize.then */.j.then(() => {
      for (const aDomain in storedDomainPauses) {
        ewe_api.filters.remove([`@@${aDomain}$document`]);
      }
      browser.storage.local.remove(domainPausedKey);
    });
  }
});

browser.commands.onCommand.addListener((command) => {
  if (command === 'toggle_pause') {
    adblockIsPaused(!adblockIsPaused());
    servermessages/* default.recordGeneralMessage */.Z.recordGeneralMessage('pause_shortcut_used');
  }
});

const getTab = function (tabId) {
  return new Promise((resolve) => {
    if (tabId) {
      let id = tabId;
      if (typeof id === 'string') {
        id = parseInt(id, 10);
      }
      browser.tabs.get(id).then((tab) => {
        resolve(tab);
      });
    } else {
      browser.tabs.query({
        active: true,
        lastFocusedWindow: true,
      }).then((tabs) => {
        if (tabs.length === 0) {
          resolve(); // For example: only the background devtools or a popup are opened
        }
        resolve(tabs[0]);
      });
    }
  });
};


// Get interesting information about the current tab.
// Inputs:
// secondTime: bool - whether this is a recursive call
// info object passed to resolve: {
// page: Page object
// tab: Tab object
// whitelisted: bool - whether the current tab's URL is whitelisted.
// disabled_site: bool - true if the url is e.g. about:blank or the
// Extension Gallery, where extensions don't run.
// settings: Settings object
// paused: bool - whether AdBlock is paused
// domainPaused: bool - whether the current tab's URL is paused
// blockCountPage: int - number of ads blocked on the current page
// blockCountTotal: int - total number of ads blocked since install
// customFilterCount: int - number of custom rules for the current tab's URL
// showMABEnrollment: bool - whether to show MAB enrollment
// popupMenuThemeCTA: string - name of current popup menu CTA theme
// lastGetStatusCode: int - status code for last GET request
// lastGetErrorResponse: error object - error response for last GET request
// lastPostStatusCode: int - status code for last POST request
// allowlistRuleText: string - allowlist rule text for use on YouTube and Twitch
// }
// Returns: Promise
const getCurrentTabInfo = function (secondTime, tabId) {
  return new Promise((resolve) => {
    getTab(tabId).then(async (tab) => {
      if (tab && !tab.url) {
        // Issue 6877: tab URL is not set directly after you opened a window
        // using window.open()
        if (!secondTime) {
          setTimeout(() => {
            getCurrentTabInfo(true);
          }, 250);
        }
        return resolve();
      }
      try {
        const page = new ext.Page(tab);
        const disabledSite = pageIsUnblockable(page.url.href);
        const customFilterCheckUrl = disabledSite ? undefined : page.url.hostname;

        const result = {
          disabledSite,
          url: String(page.url || tab.url),
          id: page.id,
          settings: getSettings(),
          paused: adblockIsPaused(),
          domainPaused: adblockIsDomainPaused({ url: page.url.href, id: page.id }),
          blockCountPage: await (0,stats/* getBlockedPerPage */.G)(tab),
          blockCountTotal: stats/* Stats.blocked_total */.j.blocked_total,
          customFilterCount: countCache.getCustomFilterCount(customFilterCheckUrl),
          showMABEnrollment: check/* License.shouldShowMyAdBlockEnrollment */.Cz.shouldShowMyAdBlockEnrollment(),
          popupMenuThemeCTA: check/* License.getCurrentPopupMenuThemeCTA */.Cz.getCurrentPopupMenuThemeCTA(),
          showDcCTA: check/* License.shouldShowPremiumDcCTA */.Cz.shouldShowPremiumDcCTA(),
          lastGetStatusCode: sync_service["default"].getLastGetStatusCode(),
          lastGetErrorResponse: sync_service["default"].getLastGetErrorResponse(),
          lastPostStatusCode: sync_service["default"].getLastPostStatusCode(),
          newBadgeTextReason: (0,icon/* getNewBadgeTextReason */.vo)(),
        };
        if (!disabledSite) {
          result.whitelisted = !!(await ewe_api.filters.getAllowingFilters(page.id)).length;
          result.whitelistedText = await ewe_api.filters.getAllowingFilters(page.id);
        }
        if (check/* License */.Cz && check/* License.isActiveLicense */.Cz.isActiveLicense()) {
          result.activeLicense = true;
          result.subscriptions = await subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText();
        }
        if (
          getSettings()
          && getSettings().youtube_channel_whitelist
          && (0,bg_functions/* parseUri */.he)(tab.url).hostname === 'www.youtube.com'
        ) {
          result.youTubeChannelName = ytChannelNamePages.get(page.id);
          // handle the odd occurence of when the  YT Channel Name
          // isn't available in the ytChannelNamePages map
          // obtain the channel name from the URL
          // for instance, when the forward / back button is clicked
          if (!result.youTubeChannelName && /ab_channel/.test(tab.url)) {
            result.youTubeChannelName = bg_functions/* parseUri.parseSearch */.he.parseSearch(tab.url).ab_channel;
          }
          if (result.youTubeChannelName) {
            result.allowlistRuleText = `@@||www.youtube.com/*${result.youTubeChannelName}|$document`;
          }
        }
        if (
          twitchChannelNamePages
          && getSettings()
          && getSettings().twitch_channel_allowlist
          && (0,bg_functions/* parseUri */.he)(tab.url).hostname === 'www.twitch.tv'
        ) {
          result.twitchChannelName = twitchChannelNamePages.get(page.id);
          if (result.twitchChannelName) {
            result.allowlistRuleText = `@@||twitch.tv/*${result.twitchChannelName}^$document`;
          }
        }
        return resolve(result);
      } catch (err) {
        return resolve({ errorStr: err.toString(), stack: err.stack, message: err.message });
      }
    });
  });
};

// BETA CODE
if (browser.runtime.id === adblocBetaID) {
  // Display beta page after each update for beta-users only
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'update' || details.reason === 'install') {
      browser.tabs.create({ url: 'https://getadblock.com/beta' });
    }
  });
}

const updateStorageKey = 'last_known_version';
if (browser.runtime.id) {
  let updateTabRetryCount = 0;
  const getUpdatedURL = function () {
    const encodedVersion = encodeURIComponent('5.4.1');
    let updatedURL = `https://getadblock.com/update/${telemetry/* TELEMETRY.flavor.toLowerCase */.C.flavor.toLowerCase()}/${encodedVersion}/?u=${telemetry/* TELEMETRY.userId */.C.userId()}`;
    updatedURL = `${updatedURL}&rt=${updateTabRetryCount}`;
    return updatedURL;
  };
  const waitForUserAction = function () {
    browser.tabs.onCreated.removeListener(waitForUserAction);
    setTimeout(() => {
      updateTabRetryCount += 1;
      // eslint-disable-next-line no-use-before-define
      openUpdatedPage();
    }, 10000); // 10 seconds
  };
  const openUpdatedPage = function () {
    const updatedURL = getUpdatedURL();
    browser.tabs.create({ url: updatedURL });
  };
  const shouldShowUpdate = function () {
    const checkQueryState = function () {
      browser.idle.queryState(30).then((state) => {
        if (state === 'active') {
          openUpdatedPage();
        } else {
          browser.tabs.onCreated.removeListener(waitForUserAction);
          browser.tabs.onCreated.addListener(waitForUserAction);
        }
      });
    };
    const checkLicense = function () {
      if (!check/* License.isActiveLicense */.Cz.isActiveLicense()) {
        checkQueryState();
      }
    };
    if (browser.management && browser.management.getSelf) {
      browser.management.getSelf().then((extensionInfo) => {
        if (extensionInfo && extensionInfo.installType !== 'admin') {
          check/* License.ready */.Cz.ready().then(checkLicense);
        }
      });
    } else {
      check/* License.ready */.Cz.ready().then(checkLicense);
    }
  };
  const slashUpdateReleases = ['5.4.1'];
  // Display updated page after each update
  browser.runtime.onInstalled.addListener(async (details) => {
    let {
      last_known_version: lastKnownVersion,
    } = await browser.storage.local.get(updateStorageKey);
    if (!lastKnownVersion) {
      lastKnownVersion = localStorage.getItem(updateStorageKey);
    }
    const currentVersion = browser.runtime.getManifest().version;
    // don't open the /update page for Ukraine or Russian users.
    const shouldShowUpdateForLocale = function () {
      const language = (0,bg_functions/* determineUserLanguage */.pN)();
      return !(language && (language.startsWith('ru') || language.startsWith('uk')));
    };
    if (
      details.reason === 'update'
      && shouldShowUpdateForLocale()
      && slashUpdateReleases.includes(currentVersion)
      && !slashUpdateReleases.includes(lastKnownVersion)
      && browser.runtime.id !== adblocBetaID
    ) {
      settings.onload().then(() => {
        if (!getSettings().suppress_update_page) {
          telemetry/* TELEMETRY.untilLoaded */.C.untilLoaded(() => {
            prefs/* Prefs.untilLoaded.then */.B.untilLoaded.then(shouldShowUpdate);
          });
        }
      });
    }
    // We want to move away from localStorage, so remove item if it exists.
    localStorage.removeItem(updateStorageKey);
    // Update version in browser.storage.local. We intentionally ignore the
    // returned promise.
    browser.storage.local.set({ [updateStorageKey]: browser.runtime.getManifest().version });
  });
}


const openTab = function (url) {
  browser.tabs.create({ url });
};

// These functions are usually only called by content scripts.

// DEBUG INFO

async function getCustomFilterMetaData() {
  const currentUserFilters = await getUserFilters();
  if (!currentUserFilters || currentUserFilters.length === 0) {
    return Promise.resolve({});
  }
  /* eslint-disable consistent-return */
  return Promise.all(
    currentUserFilters.map(async (rule) => {
      if (rule && rule.text) {
        try {
          const metaData = await ewe_api.filters.getMetadata(rule.text);
          return { text: rule.text, metaData };
        } catch {
          return { text: rule.text };
        }
      }
    }),
  );
}
const getDebugAlarmInfo = async () => {
  const response = {};
  const alarms = await browser.alarms.getAll();
  if (alarms && alarms.length > 0) {
    response['Alarm info'] = `length: ${alarms.length}`;
    for (let i = 0; i < alarms.length; i++) {
      const alarm = alarms[i];
      response[`${i} Alarm Name`] = alarm.name;
      response[`${i} Alarm Scheduled Time`] = new Date(alarm.scheduledTime).toLocaleString();
    }
  } else {
    response['No alarm info'] = 'No alarm info';
  }
  return response;
};// end of getDebugAlarmInfo()

const getDebugLicenseInfo = async () => {
  const response = {};
  if (check/* License.isActiveLicense */.Cz.isActiveLicense()) {
    response.licenseInfo = {};
    response.licenseInfo.extensionGUID = telemetry/* TELEMETRY.userId */.C.userId();
    response.licenseInfo.licenseId = check/* License.get */.Cz.get().licenseId;
    if (getSettings().sync_settings) {
      const syncInfo = {};
      syncInfo.SyncCommitVersion = sync_service["default"].getCommitVersion();
      syncInfo.SyncCommitName = sync_service["default"].getCurrentExtensionName();
      syncInfo.SyncCommitLog = sync_service["default"].getSyncLog();
      response.syncInfo = syncInfo;
    }
    response['License Installation Date'] = await check/* License.getLicenseInstallationDate */.Cz.getLicenseInstallationDate();
    const customChannelId = check/* channels.getIdByName */.ZW.getIdByName('CustomChannel');
    if (check/* channels.getGuide */.ZW.getGuide()[customChannelId].enabled) {
      const customChannel = check/* channels.channelGuide */.ZW.channelGuide[customChannelId].channel;
      const result = await customChannel.getTotalBytesInUse();
      response['Custom Channel total bytes in use'] = result;
    }
  }
  return response;
};

// Get debug info as a JSON object for bug reporting and ad reporting
const getDebugInfo = function () {
  return new Promise(async (resolve) => {
    const response = {};
    response.otherInfo = {};
    const { otherInfo } = response;

    // Is this installed build of AdBlock the official one?
    if (browser.runtime.id === 'pljaalgmajnlogcgiohkhdmgpomjcihk') {
      otherInfo.buildtype = ' Beta';
    } else if (browser.runtime.id === 'gighmmpiobklfepjocnamgkkbiglidom'
      || browser.runtime.id === 'aobdicepooefnbaeokijohmhjlleamfj'
      || browser.runtime.id === 'ndcileolkflehcjpmjnfbnaibdcgglog'
      || browser.runtime.id === 'jid1-NIfFY2CA8fy1tg@jetpack') {
      otherInfo.buildtype = ' Stable';
    } else {
      otherInfo.buildtype = ' Unofficial';
    }

    // Get AdBlock version
    otherInfo.version = browser.runtime.getManifest().version;

    // Get subscribed filter lists
    const subscriptionInfo = {};
    const subscriptions = await subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText();
    for (const id in subscriptions) {
      if (subscriptions[id].subscribed) {
        subscriptionInfo[id] = {};
        subscriptionInfo[id].lastSuccess = new Date(subscriptions[id].lastSuccess * 1000);
        subscriptionInfo[id].lastDownload = new Date(subscriptions[id].lastDownload * 1000);
        subscriptionInfo[id].downloadStatus = subscriptions[id].downloadStatus;
      }
    }
    response.subscriptions = subscriptionInfo;

    const userFilters = await getUserFilters();
    if (userFilters && userFilters.length) {
      response.customFilters = userFilters.map(filter => filter.text).join('\n');
    }

    // Get settings
    const adblockSettings = {};
    const settings = getSettings();
    for (const setting in settings) {
      adblockSettings[setting] = JSON.stringify(settings[setting]);
    }

    response.settings = adblockSettings;
    response.prefs = JSON.stringify(prefs/* Prefs */.B);
    otherInfo.browser = telemetry/* TELEMETRY.browser */.C.browser;
    otherInfo.browserVersion = telemetry/* TELEMETRY.browserVersion */.C.browserVersion;
    otherInfo.osVersion = telemetry/* TELEMETRY.osVersion */.C.osVersion;
    otherInfo.os = telemetry/* TELEMETRY.os */.C.os;

    if (localStorage && localStorage.length) {
      otherInfo.localStorageInfo = {};
      otherInfo.localStorageInfo.length = localStorage.length;
      let inx = 1;
      for (const key in localStorage) {
        otherInfo.localStorageInfo[`key${inx}`] = key;
        inx += 1;
      }
    } else {
      otherInfo.localStorageInfo = 'no data';
    }
    otherInfo.isAdblockPaused = adblockIsPaused();
    otherInfo.licenseState = check/* License.get */.Cz.get().status;
    otherInfo.licenseVersion = check/* License.get */.Cz.get().lv;

    // Get 'Stats' size
    otherInfo.rawStatsSize = await localdatacollection/* default.getRawStatsSize */.Z.getRawStatsSize();

    // Get total pings
    const storageResponse = await browser.storage.local.get('total_pings');
    otherInfo.totalPings = storageResponse.totalPings || 0;

    // Add exclude filters (if there are any)
    const excludeFiltersKey = 'exclude_filters';
    const secondResponse = await browser.storage.local.get(excludeFiltersKey);
    if (secondResponse && secondResponse[excludeFiltersKey]) {
      response.excludedFilters = secondResponse[excludeFiltersKey];
    }

    // Add JavaScript exception error (if there is one)
    const errorKey = 'errorkey';
    const errorResponse = await browser.storage.local.get(errorKey);
    if (errorResponse && errorResponse[errorKey]) {
      otherInfo[errorKey] = errorResponse[errorKey];
    }

    // Add any migration messages (if there are any)
    const migrateLogMessageKey = 'migrateLogMessageKey';
    const migrateLogMessageResponse = await browser.storage.local.get(migrateLogMessageKey);
    if (migrateLogMessageResponse && migrateLogMessageResponse[migrateLogMessageKey]) {
      const messages = migrateLogMessageResponse[migrateLogMessageKey].split('\n');
      for (let i = 0; i < messages.length; i++) {
        const key = `migration_message_${i}`;
        otherInfo[key] = messages[i];
      }
    }

    otherInfo.alarmInfo = await getDebugAlarmInfo();
    if (browser.permissions && browser.permissions.getAll) {
      otherInfo.hostPermissions = await browser.permissions.getAll();
    } else {
      otherInfo.hostPermissions = 'no data';
    }
    otherInfo.licenseInfo = await getDebugLicenseInfo();
    otherInfo.customRuleMetaData = await getCustomFilterMetaData();
    resolve(response);
  }); // end of Promise
};

// Called when user explicitly requests filter list updates
async function updateFilterLists() {
  const subscriptions = await ewe_api.subscriptions.getDownloadable();
  subscriptions.forEach(async (subscription) => {
    await ewe_api.subscriptions.sync(subscription.url);
  });
}

// Checks if the filter lists are currently in the process of
// updating and if there were errors the last time they were
// updated
async function checkUpdateProgress() {
  let inProgress = false;
  let filterError = false;
  const subscriptions = await ewe_api.subscriptions.getDownloadable();
  subscriptions.forEach(async (subscription) => {
    if (subscription.downloading) {
      inProgress = true;
    } else if (subscription.downloadStatus && subscription.downloadStatus !== 'synchronize_ok') {
      filterError = true;
    }
  });
  return { inProgress, filterError };
}

subscriptionInit/* initialize.then */.j.then(() => {
  telemetry/* TELEMETRY.untilLoaded */.C.untilLoaded(() => {
    telemetry/* TELEMETRY.startPinging */.C.startPinging();
    setUninstallURL();
  });
  (0,allowlisting/* revalidateAllowlistingStates */.s)();
});

// Create the "blockage stats" for the uninstall logic ...
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    browser.storage.local.get('blockage_stats').then((response) => {
      const { blockage_stats } = response;
      if (!blockage_stats) {
        const data = {};
        data.start = Date.now();
        data.version = 1;
        (0,bg_functions/* chromeStorageSetHelper */.rJ)('blockage_stats', data);
      }
    });
  }
});

// Attach methods to window
// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  adblockIsPaused,
  getUserFilters,
  updateFilterLists,
  checkUpdateProgress,
  createDomainAllowlistFilter,
  getDebugInfo,
  openTab,
  saveDomainPauses,
  adblockIsDomainPaused,
  pageIsWhitelisted,
  pageIsUnblockable,
  getCurrentTabInfo,
  getAdblockUserId,
  tryToUnwhitelist,
  addCustomFilter,
  removeCustomFilter,
  countCache,
  updateCustomFilterCountMap,
  removeCustomFilterForHost,
  confirmRemovalOfCustomFiltersOnHost,
  reloadTab,
  isSelectorFilter,
  isWhitelistFilter,
  isSelectorExcludeFilter,
  pausedFilterText1,
  pausedFilterText2,
  updateStorageKey,
  getCustomFilterMetaData,
});


/***/ }),

/***/ 922:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var prefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8710);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3265);
/* harmony import */ var _servermessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1546);
/* harmony import */ var _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9031);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, ext, adblockIsPaused, adblockIsDomainPaused
   log, License, reloadTab, getSettings */









const updateButtonUIAndContextMenus = function () {
  browser.tabs.query({}).then((tabs) => {
    for (const tab of tabs) {
      tab.url = tab.url ? tab.url : tab.pendingUrl;
      if (adblockIsPaused() || adblockIsDomainPaused({ url: tab.url.href, id: tab.id })) {
        (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_2__/* .setBadge */ .q_)(tab.id, { number: '' });
      }
      const page = new ext.Page(tab);
      // eslint-disable-next-line no-use-before-define
      updateContextMenuItems(page);
    }
  });
};

// Bounce messages back to content scripts.
const emitPageBroadcast = (function emitBroadcast() {
  const injectMap = {
    topOpenWhitelistUI:
      {
        allFrames: false,
        include: [
          'jquery-3.5.1.min.js',
          'adblock-uiscripts-load_wizard_resources.js',
          'adblock-uiscripts-top_open_whitelist_ui.js',
        ],
      },
    topOpenWhitelistCompletionUI:
      {
        allFrames: false,
        include: [
          'jquery-3.5.1.min.js',
          'adblock-uiscripts-load_wizard_resources.js',
          'adblock-uiscripts-top_open_whitelist_completion_ui.js',
        ],
      },
    topOpenBlacklistUI:
      {
        allFrames: false,
        include: [
          'jquery-3.5.1.min.js',
          'purify.min.js',
          'adblock-uiscripts-load_wizard_resources.js',
          'adblock-uiscripts-blacklisting-overlay.js',
          'adblock-uiscripts-blacklisting-clickwatcher.js',
          'adblock-uiscripts-blacklisting-elementchain.js',
          'adblock-uiscripts-blacklisting-blacklistui.js',
          'adblock-uiscripts-top_open_blacklist_ui.js',
        ],
      },
    sendContentToBack:
      {
        allFrames: true,
        include: ['adblock-uiscripts-send_content_to_back.js'],
      },
  };

  // Inject the required scripts to execute fnName(parameter) in
  // the given tab.
  // Inputs: fnName:string name of function to execute on tab.
  //         fnName must exist in injectMap above.
  //         parameter:object to pass to fnName.  Must be JSON.stringify()able.
  //         alreadyInjected?:int used to recursively inject required scripts.
  //         tabID:int representing the ID of the tab to execute in.
  //         tabID defaults to the active tab
  const executeOnTab = function (fnName, parameter, alreadyInjected, tabID) {
    const injectedSoFar = alreadyInjected || 0;
    const data = injectMap[fnName];
    const details = { allFrames: data.allFrames };

    // If there's anything to inject, inject the next item and recurse.
    if (data.include.length > injectedSoFar) {
      details.file = data.include[injectedSoFar];
      browser.tabs.executeScript(tabID, details).then(() => {
        executeOnTab(fnName, parameter, injectedSoFar + 1, tabID);
      }).catch((error) => {
        log(error);
      });
    } else {
      // Nothing left to inject, so execute the function.
      const param = JSON.stringify(parameter);
      details.code = `${fnName}(${param});`;
      browser.tabs.executeScript(tabID, details);
    }
  };

  // The emitPageBroadcast() function
  const theFunction = function (request) {
    executeOnTab(request.fn, request.options, 0, request.tabID);
  };

  return theFunction;
}());

const contextMenuItem = (() => ({
  pauseAll:
    {
      title: browser.i18n.getMessage('pause_adblock_everywhere'),
      id: 'pause_adblock_everywhere',
      contexts: ['all'],
      onclick: () => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_pause_clicked');
        adblockIsPaused(true);
        updateButtonUIAndContextMenus();
      },
    },
  unpauseAll:
    {
      title: browser.i18n.getMessage('resume_blocking_ads'),
      id: 'resume_blocking_ads',
      contexts: ['all'],
      onclick: () => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_unpause_clicked');
        adblockIsPaused(false);
        updateButtonUIAndContextMenus();
      },
    },
  pauseDomain:
    {
      title: browser.i18n.getMessage('domain_pause_adblock'),
      id: 'domain_pause_adblock',
      contexts: ['all'],
      onclick: (info, tab) => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_domain_pause_clicked');
        adblockIsDomainPaused({ url: tab.url, id: tab.id }, true);
        updateButtonUIAndContextMenus();
      },
    },
  unpauseDomain:
    {
      title: browser.i18n.getMessage('resume_blocking_ads'),
      id: 'resume_blocking_ads_unpause',
      contexts: ['all'],
      onclick: (info, tab) => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_domain_unpause_clicked');
        adblockIsDomainPaused({ url: tab.url, id: tab.id }, false);
        updateButtonUIAndContextMenus();
      },
    },
  blockThisAd:
    {
      title: browser.i18n.getMessage('block_this_ad'),
      id: 'block_this_ad',
      contexts: ['all'],
      onclick(info, tab) {
        emitPageBroadcast({
          fn: 'topOpenBlacklistUI',
          options: {
            info,
            showBlacklistCTA: License.shouldShowBlacklistCTA(),
            isActiveLicense: License.isActiveLicense(),
            settings: getSettings(),
            addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
          },
        }, {
          tab,
        });
      },
    },
  blockAnAd:
    {
      title: browser.i18n.getMessage('block_an_ad_on_this_page'),
      id: 'block_an_ad_on_this_page',
      contexts: ['all'],
      onclick(info, tab) {
        emitPageBroadcast({
          fn: 'topOpenBlacklistUI',
          options: {
            nothingClicked: true,
            showBlacklistCTA: License.shouldShowBlacklistCTA(),
            isActiveLicense: License.isActiveLicense(),
            settings: getSettings(),
            addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
          },
        }, {
          tab,
        });
      },
    },
}))();


const checkLastError = function () {
  if (browser.runtime.lastError) {
    // do nothing
  }
};

let updateContextMenuItems = async function (page) {
  // Remove the AdBlock context menu items
  await browser.contextMenus.removeAll();

  // Check if the context menu items should be added
  if (!prefs__WEBPACK_IMPORTED_MODULE_0__/* .Prefs.shouldShowBlockElementMenu */ .B.shouldShowBlockElementMenu) {
    return;
  }
  const domainIsPaused = adblockIsDomainPaused({ url: page.url.href, id: page.id });

  if (adblockIsPaused()) {
    browser.contextMenus.create(contextMenuItem.unpauseAll, checkLastError);
  } else if (domainIsPaused) {
    browser.contextMenus.create(contextMenuItem.unpauseDomain, checkLastError);
  } else if (await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.getAllowingFilters(page.id).length) {
    browser.contextMenus.create(contextMenuItem.pauseAll, checkLastError);
  } else {
    browser.contextMenus.create(contextMenuItem.blockThisAd, checkLastError);
    browser.contextMenus.create(contextMenuItem.blockAnAd, checkLastError);
    browser.contextMenus.create(contextMenuItem.pauseDomain, checkLastError);
    browser.contextMenus.create(contextMenuItem.pauseAll, checkLastError);
  }
};

const updateContextMenuItemsNoOp = function () {
  // Remove the AdBlock context menu items
  browser.contextMenus.removeAll();
};
// startup test to check if the context menu API functions correctly
// the `create` function is invoked twice, because it's the second
// and all subsequent calls that fail.
try {
  browser.contextMenus.create(contextMenuItem.blockThisAd, checkLastError);
  browser.contextMenus.create(contextMenuItem.blockThisAd, checkLastError);
} catch (e) {
  updateContextMenuItems = updateContextMenuItemsNoOp;
}
browser.contextMenus.removeAll();

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status) {
    updateContextMenuItems(new ext.Page(tab));
  }
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command !== 'sendContentToBack') {
    return;
  } // not for us
  emitPageBroadcast({ fn: 'sendContentToBack', options: {} });
  sendResponse({});
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'reloadTabForWhitelist') {
    reloadTab(sender.tab.id, () => {
      emitPageBroadcast({
        fn: 'topOpenWhitelistCompletionUI',
        options: {
          rule: request.rule,
          isActiveLicense: License.isActiveLicense(),
          showWhitelistCTA: License.shouldShowWhitelistCTA(),
        },
        tabID: sender.tab.id,
      });
    });
    sendResponse({});
  }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'showWhitelistCompletion') {
    emitPageBroadcast({
      fn: 'topOpenWhitelistCompletionUI',
      options: {
        rule: request.rule,
        isActiveLicense: License.isActiveLicense(),
        showWhitelistCTA: License.shouldShowWhitelistCTA(),
      },
      tabID: sender.tab.id,
    });
    sendResponse({});
  }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'showBlacklist' && typeof request.nothingClicked === 'boolean') {
    emitPageBroadcast({
      fn: 'topOpenBlacklistUI',
      options: {
        nothingClicked: request.nothingClicked,
        isActiveLicense: License.isActiveLicense(),
        showBlacklistCTA: License.shouldShowBlacklistCTA(),
        settings: getSettings(),
        addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
      },
      tabID: request.tabId,
    });
    sendResponse({});
  }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'showWhitelist') {
    emitPageBroadcast({
      fn: 'topOpenWhitelistUI',
      options: {
        addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
      },
      tabID: request.tabId,
    });
    sendResponse({});
  }
});

// Update browser actions and context menus when whitelisting might have
// changed. That is now when initally loading the filters and later when
// importing backups or saving filter changes.
// Update browser actions and context menus when whitelisting might have
// changed. That is now when initally loading the filters and later when
// importing backups or saving filter changes.
_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onAdded.addListener(updateButtonUIAndContextMenus);
_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onChanged.addListener(updateButtonUIAndContextMenus);
_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onRemoved.addListener(updateButtonUIAndContextMenus);

prefs__WEBPACK_IMPORTED_MODULE_0__/* .Prefs.on */ .B.on(prefs__WEBPACK_IMPORTED_MODULE_0__/* .Prefs.shouldShowBlockElementMenu */ .B.shouldShowBlockElementMenu, () => {
  updateButtonUIAndContextMenus();
});

updateButtonUIAndContextMenus();

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  emitPageBroadcast,
  updateButtonUIAndContextMenus,
});


/***/ }),

/***/ 1064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _alias_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1021);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, log, openTab, License,
 */




const CtaABManager = (function get() {
  let ctaData = {
    enrollment: false,
  };
  const ctaDataStorageKey = 'ctaData';
  // Load the CTA A/B data from persistent storage
  // Should only be called during startup / initialization
  browser.storage.local.get(ctaDataStorageKey).then((response) => {
    if (response[ctaDataStorageKey]) {
      ctaData = response[ctaDataStorageKey];
    }
  });

  // Check the response from a ping to see if it contains valid CTA A/B instructions.
  // If so, return an object containing data about the CTA A/B data.
  // Otherwise, return null.
  // Inputs:
  //   responseData: string response from a ping
  const dataFrom = function (responseData) {
    if (!responseData || responseData.length === 0 || responseData.trim().length === 0) {
      return null;
    }
    let pingData = {};
    try {
      pingData = JSON.parse(responseData);
      if (!pingData) {
        return null;
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Something went wrong with parsing data.');
      // eslint-disable-next-line no-console
      console.log('error', e);
      // eslint-disable-next-line no-console
      console.log('response data', responseData);
      return null;
    }
    return pingData;
  };

  return {
    get() {
      return ctaData;
    },
    isEnrolled() {
      return (ctaData.enrollment === true);
    },
    getVar() {
      return ctaData.var;
    },
    getExp() {
      return ctaData.exp;
    },
    maybeCtaAB(responseData) {
      if (!License.shouldShowPremiumCTA()) {
        return;
      }
      const pingData = dataFrom(responseData);
      if (!pingData) {
        return;
      }
      ctaData.enrollment = true;
      ctaData.var = pingData.var;
      ctaData.exp = pingData.exp;
      browser.storage.local.set({ ctaData });
      (0,_alias_icon__WEBPACK_IMPORTED_MODULE_0__/* .showIconBadgeCTA */ .QO)(true, _alias_icon__WEBPACK_IMPORTED_MODULE_0__/* .NEW_BADGE_REASONS.VPN_CTA */ .ec.VPN_CTA);
    }, // end of maybeCtaAB
    types() {
      // 'C' = A/B Test of CTAs
      return 'C';
    },
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CtaABManager);


/***/ }),

/***/ 5175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subscriptionadapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(934);
/* harmony import */ var _fetch_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2379);
/* harmony import */ var _prefs_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2630);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, adblockIsPaused,
   adblockIsDomainPaused, getUserFilters, */








const DataCollectionV2 = (function getDataCollectionV2() {
  const HOUR_IN_MIN = 60;
  const TIME_LAST_PUSH_KEY = 'timeLastPush';
  const REPORTING_OPTIONS = {
  };




