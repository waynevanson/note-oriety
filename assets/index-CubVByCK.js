import{c as re,a as b,u as fe,b as L,d as ce,$ as y,e as U,g as v,f as de,h as S,i as k}from"./solid-js-DsYHm_RB.js";import{F as ue,R as ae}from"./vexflow-DwtmvLuk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function he(n,e,t){let s=t.length,i=e.length,o=s,r=0,l=0,f=e[i-1].nextSibling,c=null;for(;r<i||l<o;){if(e[r]===t[l]){r++,l++;continue}for(;e[i-1]===t[o-1];)i--,o--;if(i===r){const d=o<s?l?t[l-1].nextSibling:t[o-l]:f;for(;l<o;)n.insertBefore(t[l++],d)}else if(o===l)for(;r<i;)(!c||!c.has(e[r]))&&e[r].remove(),r++;else if(e[r]===t[o-1]&&t[l]===e[i-1]){const d=e[--i].nextSibling;n.insertBefore(t[l++],e[r++].nextSibling),n.insertBefore(t[--o],d),e[i]=t[o]}else{if(!c){c=new Map;let a=l;for(;a<o;)c.set(t[a],a++)}const d=c.get(e[r]);if(d!=null)if(l<d&&d<o){let a=r,g=1,u;for(;++a<i&&a<o&&!((u=c.get(e[a]))==null||u!==d+g);)g++;if(g>d-l){const m=e[r];for(;l<d;)n.insertBefore(t[l++],m)}else n.replaceChild(t[l++],e[r++])}else r++;else e[r++].remove()}}}const W="_$DX_DELEGATE";function ge(n,e,t,s={}){let i;return re(o=>{i=o,e===document?n():h(e,n(),e.firstChild?null:void 0,t)},s.owner),()=>{i(),e.textContent=""}}function G(n,e,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=n,r.content.firstChild},o=()=>(s||(s=i())).cloneNode(!0);return o.cloneNode=o,o}function Ae(n,e=window.document){const t=e[W]||(e[W]=new Set);for(let s=0,i=n.length;s<i;s++){const o=n[s];t.has(o)||(t.add(o),e.addEventListener(o,Ce))}}function be(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function p(n,e){e==null?n.removeAttribute("class"):n.className=e}function ye(n,e,t){return fe(()=>n(e,t))}function h(n,e,t,s){if(t!==void 0&&!s&&(s=[]),typeof e!="function")return P(n,e,s,t);b(i=>P(n,e(),i,t),s)}function Ce(n){let e=n.target;const t=`$$${n.type}`,s=n.target,i=n.currentTarget,o=f=>Object.defineProperty(n,"target",{configurable:!0,value:f}),r=()=>{const f=e[t];if(f&&!e.disabled){const c=e[`${t}Data`];if(c!==void 0?f.call(e,c,n):f.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&o(e.host),!0},l=()=>{for(;r()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const f=n.composedPath();o(f[0]);for(let c=0;c<f.length-2&&(e=f[c],!!r());c++){if(e._$host){e=e._$host,l();break}if(e.parentNode===i)break}}else l();o(s)}function P(n,e,t,s,i){for(;typeof t=="function";)t=t();if(e===t)return t;const o=typeof e,r=s!==void 0;if(n=r&&t[0]&&t[0].parentNode||n,o==="string"||o==="number"){if(o==="number"&&(e=e.toString(),e===t))return t;if(r){let l=t[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),t=C(n,t,s,l)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||o==="boolean")t=C(n,t,s);else{if(o==="function")return b(()=>{let l=e();for(;typeof l=="function";)l=l();t=P(n,l,t,s)}),()=>t;if(Array.isArray(e)){const l=[],f=t&&Array.isArray(t);if(I(l,e,t,i))return b(()=>t=P(n,l,t,s,!0)),()=>t;if(l.length===0){if(t=C(n,t,s),r)return t}else f?t.length===0?X(n,l,s):he(n,t,l):(t&&C(n),X(n,l));t=l}else if(e.nodeType){if(Array.isArray(t)){if(r)return t=C(n,t,s,e);C(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function I(n,e,t,s){let i=!1;for(let o=0,r=e.length;o<r;o++){let l=e[o],f=t&&t[n.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))i=I(n,l,f)||i;else if(c==="function")if(s){for(;typeof l=="function";)l=l();i=I(n,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||i}else n.push(l),i=!0;else{const d=String(l);f&&f.nodeType===3&&f.data===d?n.push(f):n.push(document.createTextNode(d))}}return i}function X(n,e,t=null){for(let s=0,i=e.length;s<i;s++)n.insertBefore(e[s],t)}function C(n,e,t,s){if(t===void 0)return n.textContent="";const i=s||document.createTextNode("");if(e.length){let o=!1;for(let r=e.length-1;r>=0;r--){const l=e[r];if(i!==l){const f=l.parentNode===n;!o&&!r?f?n.replaceChild(i,l):n.insertBefore(i,t):f&&l.remove()}else o=!0}}else n.insertBefore(i,t);return[i]}const _e="_main_10uyl_1",$e={main:_e},K={C:["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],G:["A","A#","B","C","C#","D","D#","E","Fn","F","G","G#"],D:["A","A#","B","Cn","C","D","D#","E","Fn","F","G","G#"],A:["A","A#","B","Cn","C","D","D#","E","Fn","F","Gn","G"],E:["A","A#","B","Cn","C","Dn","D","E","Fn","F","Gn","G"],B:["An","A","B","Cn","C","Dn","D","E","Fn","F","Gn","G"],"F#":["An","A","B","Cn","C","Dn","D","En","E","F","Gn","G"],"C#":["An","A","Bn","Cn","C","Dn","D","En","E","F","Gn","G"],F:["A","B","Bn","C","Db","D","Eb","E","F","Gb","G","Ab"],Bb:["A","B","Bn","C","Db","D","E","En","F","Gb","G","Ab"],Eb:["An","B","Bn","C","Db","D","E","En","F","Gb","G","A"],Ab:["An","B","Bn","C","D","Dn","E","En","F","Gb","G","A"],Db:["An","B","Bn","C","D","Dn","E","En","F","G","Gn","A"],Gb:["An","B","C","Cn","D","Dn","E","En","F","G","Gn","A"],Cb:["An","B","C","Cn","D","Dn","E","F","Fn","G","Gn","A"]};function Se(n){const e=["b","#","n","x"];return n.filter(t=>e.some(s=>t.includes(s))).length}const Q=[["A","An"],["A#","Bb"],["B","Bn","Cb"],["C","Cn","B#"],["C#","Db"],["D","Dn"],["D#","Eb"],["E","En","Fb"],["F","Fn","E#"],["F#","Gb"],["G","Gn"],["G#","Ab"]],we="_list_gkr10_1",Ee="_item_gkr10_7",De="_button_gkr10_10",j={list:we,item:Ee,button:De};var Ge=G("<ol>"),me=G("<li><button>");function Be(n){const{onClick:e}=n;return(()=>{var t=Ge();return h(t,()=>Q.map((s,i)=>(()=>{var o=me(),r=o.firstChild;return r.$$click=()=>e==null?void 0:e(i),h(r,()=>s.join(" / ")),b(l=>{var f=j.item,c=j.button,d=n.answer()==i;return f!==l.e&&p(o,l.e=f),c!==l.t&&p(r,l.t=c),d!==l.a&&be(r,"data-answer",l.a=d),l},{e:void 0,t:void 0,a:void 0}),o})())),b(()=>p(t,j.list)),t})()}Ae(["click"]);const Fe="_note_1hw5a_1",Oe="_svg_1hw5a_5",pe="_ref_1hw5a_8",J={note:Fe,svg:Oe,ref:pe};var Pe=G("<div id=note-oriety-vex-flow>");const Te="note-oriety-vex-flow";function xe(n){let e;const t=L(()=>K[n.signature()][n.pitchClassKind()]);return ce(s=>{if(!e)return!1;s&&(e.innerHTML="");const o=100+Se(K[n.signature()])*10,r=140,l=new ue({renderer:{elementId:Te,width:o,height:r,backend:ae.SVG}}),f=l.EasyScore(),c=f.notes(`${t()}4/w`);l.System().addStave({voices:[f.voice(c)]}).addClef("treble").addKeySignature(n.signature()),l.draw();const d=e.firstChild;return d.removeAttribute("width"),d.removeAttribute("height"),d.classList.add(J.svg),e.classList.add(J.ref),!0},!1),(()=>{var s=Pe(),i=e;return typeof i=="function"?ye(i,s):e=s,s})()}const R=Symbol("store-raw"),_=Symbol("store-node"),A=Symbol("store-has"),Z=Symbol("store-self");function z(n){let e=n[y];if(!e&&(Object.defineProperty(n,y,{value:e=new Proxy(n,Le)}),!Array.isArray(n))){const t=Object.keys(n),s=Object.getOwnPropertyDescriptors(n);for(let i=0,o=t.length;i<o;i++){const r=t[i];s[r].get&&Object.defineProperty(n,r,{enumerable:s[r].enumerable,get:s[r].get.bind(e)})}}return e}function T(n){let e;return n!=null&&typeof n=="object"&&(n[y]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function E(n,e=new Set){let t,s,i,o;if(t=n!=null&&n[R])return t;if(!T(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let r=0,l=n.length;r<l;r++)i=n[r],(s=E(i,e))!==i&&(n[r]=s)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const r=Object.keys(n),l=Object.getOwnPropertyDescriptors(n);for(let f=0,c=r.length;f<c;f++)o=r[f],!l[o].get&&(i=n[o],(s=E(i,e))!==i&&(n[o]=s))}return n}function x(n,e){let t=n[e];return t||Object.defineProperty(n,e,{value:t=Object.create(null)}),t}function D(n,e,t){if(n[e])return n[e];const[s,i]=S(t,{equals:!1,internal:!0});return s.$=i,n[e]=s}function Ne(n,e){const t=Reflect.getOwnPropertyDescriptor(n,e);return!t||t.get||!t.configurable||e===y||e===_||(delete t.value,delete t.writable,t.get=()=>n[y][e]),t}function ee(n){v()&&D(x(n,_),Z)()}function je(n){return ee(n),Reflect.ownKeys(n)}const Le={get(n,e,t){if(e===R)return n;if(e===y)return t;if(e===U)return ee(n),t;const s=x(n,_),i=s[e];let o=i?i():n[e];if(e===_||e===A||e==="__proto__")return o;if(!i){const r=Object.getOwnPropertyDescriptor(n,e);v()&&(typeof o!="function"||n.hasOwnProperty(e))&&!(r&&r.get)&&(o=D(s,e,o)())}return T(o)?z(o):o},has(n,e){return e===R||e===y||e===U||e===_||e===A||e==="__proto__"?!0:(v()&&D(x(n,A),e)(),e in n)},set(){return!0},deleteProperty(){return!0},ownKeys:je,getOwnPropertyDescriptor:Ne};function N(n,e,t,s=!1){if(!s&&n[e]===t)return;const i=n[e],o=n.length;t===void 0?(delete n[e],n[A]&&n[A][e]&&i!==void 0&&n[A][e].$()):(n[e]=t,n[A]&&n[A][e]&&i===void 0&&n[A][e].$());let r=x(n,_),l;if((l=D(r,e,i))&&l.$(()=>t),Array.isArray(n)&&n.length!==o){for(let f=n.length;f<o;f++)(l=r[f])&&l.$();(l=D(r,"length",o))&&l.$(n.length)}(l=r[Z])&&l.$()}function ne(n,e){const t=Object.keys(e);for(let s=0;s<t.length;s+=1){const i=t[s];N(n,i,e[i])}}function ve(n,e){if(typeof e=="function"&&(e=e(n)),e=E(e),Array.isArray(e)){if(n===e)return;let t=0,s=e.length;for(;t<s;t++){const i=e[t];n[t]!==i&&N(n,t,i)}N(n,"length",s)}else ne(n,e)}function w(n,e,t=[]){let s,i=n;if(e.length>1){s=e.shift();const r=typeof s,l=Array.isArray(n);if(Array.isArray(s)){for(let f=0;f<s.length;f++)w(n,[s[f]].concat(e),t);return}else if(l&&r==="function"){for(let f=0;f<n.length;f++)s(n[f],f)&&w(n,[f].concat(e),t);return}else if(l&&r==="object"){const{from:f=0,to:c=n.length-1,by:d=1}=s;for(let a=f;a<=c;a+=d)w(n,[a].concat(e),t);return}else if(e.length>1){w(n[s],e,[s].concat(t));return}i=n[s],t=[s].concat(t)}let o=e[0];typeof o=="function"&&(o=o(i,t),o===i)||s===void 0&&o==null||(o=E(o),s===void 0||T(i)&&T(o)&&!Array.isArray(o)?ne(i,o):N(n,s,o))}function ke(...[n,e]){const t=E(n||{}),s=Array.isArray(t),i=z(t);function o(...r){de(()=>{s&&r.length===1?ve(t,r[0]):w(t,r)})}return[i,o]}var Ie=G("<main><section><label for=input.key><span>Key Signature </span><select name=input.key id=input.key></select></label><span> Streak: <!> </span><span>Accuracy: <!>% (<!> of <!>)"),Ke=G("<option>");function Re(){const[n,e]=S("C");S(!1);function t(){return Math.floor(Math.random()*Q.length)}const[s,i]=S(t()),[o,r]=ke({incorrect:0,correct:0}),l=L(()=>o.correct+o.incorrect),f=L(()=>l()<=0?0:Math.trunc(100*(o.correct/l()))),[c,d]=S(0);function a(g){if(g!==s()){d(0),r("incorrect",u=>u+1);return}for(d(u=>u+1),r("correct",u=>u+1);;){const u=t();if(u!==s()){i(u);break}}}return(()=>{var g=Ie(),u=g.firstChild,m=u.firstChild,te=m.firstChild,M=te.nextSibling,B=m.nextSibling,ie=B.firstChild,H=ie.nextSibling;H.nextSibling;var F=B.nextSibling,oe=F.firstChild,V=oe.nextSibling,se=V.nextSibling,q=se.nextSibling,le=q.nextSibling,Y=le.nextSibling;return Y.nextSibling,h(g,k(xe,{pitchClassKind:s,signature:n}),u),M.addEventListener("change",$=>{e($.currentTarget.value)}),h(M,()=>Object.keys(K).map($=>(()=>{var O=Ke();return O.value=$,h(O,$),b(()=>O.selected=n()==$),O})())),h(u,!1,B),h(B,c,H),h(F,f,V),h(F,()=>o.correct,q),h(F,l,Y),h(g,k(Be,{answer:s,onClick:a}),null),b(()=>p(g,$e.main)),g})()}ge(()=>k(Re,{}),document.body);
