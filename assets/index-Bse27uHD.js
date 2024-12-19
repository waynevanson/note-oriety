import{c as de,a as y,u as ae,b as N,d as he,$ as A,e as q,g as v,f as ge,h as D,i as R}from"./solid-js-DsYHm_RB.js";import{F as be,R as ye}from"./vexflow-DwtmvLuk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ae(e,t,n){let o=n.length,i=t.length,s=o,l=0,r=0,f=t[i-1].nextSibling,c=null;for(;l<i||r<s;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===l){const u=s<o?r?n[r-1].nextSibling:n[s-r]:f;for(;r<s;)e.insertBefore(n[r++],u)}else if(s===r)for(;l<i;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[r]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--s],u),t[i]=n[s]}else{if(!c){c=new Map;let a=r;for(;a<s;)c.set(n[a],a++)}const u=c.get(t[l]);if(u!=null)if(r<u&&u<s){let a=l,h=1,d;for(;++a<i&&a<s&&!((d=c.get(t[a]))==null||d!==u+h);)h++;if(h>u-r){const O=t[l];for(;r<u;)e.insertBefore(n[r++],O)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const X="_$DX_DELEGATE";function _e(e,t,n,o={}){let i;return de(s=>{i=s,t===document?e():g(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{i(),t.textContent=""}}function m(e,t,n){let o;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(o||(o=i())).cloneNode(!0);return s.cloneNode=s,s}function $e(e,t=window.document){const n=t[X]||(t[X]=new Set);for(let o=0,i=e.length;o<i;o++){const s=e[o];n.has(s)||(n.add(s),t.addEventListener(s,Ce))}}function Se(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function F(e,t){t==null?e.removeAttribute("class"):e.className=t}function we(e,t,n){return ae(()=>e(t,n))}function g(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return P(e,t,o,n);y(i=>P(e,t(),i,n),o)}function Ce(e){let t=e.target;const n=`$$${e.type}`,o=e.target,i=e.currentTarget,s=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),l=()=>{const f=t[n];if(f&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?f.call(t,c,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},r=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const f=e.composedPath();s(f[0]);for(let c=0;c<f.length-2&&(t=f[c],!!l());c++){if(t._$host){t=t._$host,r();break}if(t.parentNode===i)break}}else r();s(o)}function P(e,t,n,o,i){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(l){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=_(e,n,o,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=_(e,n,o);else{if(s==="function")return y(()=>{let r=t();for(;typeof r=="function";)r=r();n=P(e,r,n,o)}),()=>n;if(Array.isArray(t)){const r=[],f=n&&Array.isArray(n);if(I(r,t,n,i))return y(()=>n=P(e,r,n,o,!0)),()=>n;if(r.length===0){if(n=_(e,n,o),l)return n}else f?n.length===0?W(e,r,o):Ae(e,n,r):(n&&_(e),W(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=_(e,n,o,t);_(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function I(e,t,n,o){let i=!1;for(let s=0,l=t.length;s<l;s++){let r=t[s],f=n&&n[e.length],c;if(!(r==null||r===!0||r===!1))if((c=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=I(e,r,f)||i;else if(c==="function")if(o){for(;typeof r=="function";)r=r();i=I(e,Array.isArray(r)?r:[r],Array.isArray(f)?f:[f])||i}else e.push(r),i=!0;else{const u=String(r);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function W(e,t,n=null){for(let o=0,i=t.length;o<i;o++)e.insertBefore(t[o],n)}function _(e,t,n,o){if(n===void 0)return e.textContent="";const i=o||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const f=r.parentNode===e;!s&&!l?f?e.replaceChild(i,r):e.insertBefore(i,n):f&&r.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const Ee="_main_10uyl_1",me={main:Ee},Oe="_list_gkr10_1",Te="_item_gkr10_7",pe="_button_gkr10_10",L={list:Oe,item:Te,button:pe},k=[["A"],["A#","Bb"],["B"],["C"],["C#","Db"],["D"],["D#","Eb"],["E"],["F"],["F#","Gb"],["G"],["G#","Ab"]],Z={Ab:4,A:3,Bb:2,B:5,Cb:7,C:0,"C#":7,Db:5,D:2,Eb:3,E:4,F:1,"F#":6,Gb:6,G:1},z={Ab:!0,A:!1,Bb:!0,B:!1,Cb:!0,C:null,"C#":!1,Db:!0,D:!1,Eb:!0,E:!1,F:!0,"F#":!1,Gb:!0,G:!1},ee=["F","C","G","D","A","E","B"],te=["A","B","C","D","E","F","Ab","Bb","C#","Cb","Db","Eb","F#","Gb"];function Ne(e){return ee.slice(-e)}function De(e){return ee.slice(e)}const Fe=Object.fromEntries(te.map(e=>{const t=z[e],n=Z[e],o=t?Ne(n):De(n);return[e,o]}));var Pe=m("<ol>"),xe=m("<li><button>");function Be(e){const{onClick:t}=e;return(()=>{var n=Pe();return g(n,()=>k.map((o,i)=>(()=>{var s=xe(),l=s.firstChild;return l.$$click=()=>t==null?void 0:t(i),g(l,()=>o.join(" / ")),y(r=>{var f=L.item,c=L.button,u=e.answer()==i;return f!==r.e&&F(s,r.e=f),c!==r.t&&F(l,r.t=c),u!==r.a&&Se(l,"data-answer",r.a=u),r},{e:void 0,t:void 0,a:void 0}),s})())),y(()=>F(n,L.list)),n})()}$e(["click"]);const Ge="_note_1hw5a_1",je="_svg_1hw5a_5",Le="_ref_1hw5a_8",J={note:Ge,svg:je,ref:Le};var ve=m("<div id=note-oriety-vex-flow>");const Re="note-oriety-vex-flow";function Ie(e){let t;const n=N(()=>Ke(e.signature(),e.note()));return he(o=>{if(!t)return!1;o&&(t.innerHTML="");const s=100+Z[e.signature()]*10,l=140,r=new be({renderer:{elementId:Re,width:s,height:l,backend:ye.SVG}}),f=r.EasyScore(),c=f.notes(`${n()}4/w`);r.System().addStave({voices:[f.voice(c)]}).addClef("treble").addKeySignature(e.signature()),r.draw();const u=t.firstChild;return u.removeAttribute("width"),u.removeAttribute("height"),u.classList.add(J.svg),t.classList.add(J.ref),!0},!1),(()=>{var o=ve(),i=t;return typeof i=="function"?we(i,o):t=o,o})()}function Ke(e,t){const n=Fe[e],o=z[e];if(o===null||n.length<=0)return t;const i=t.slice(0,1);return n.includes(i)?i===t?t+"n":o?ke[i]:i:t}const ke={G:"A",A:"B",B:"C",C:"D",D:"E",E:"F",F:"G"},K=Symbol("store-raw"),$=Symbol("store-node"),b=Symbol("store-has"),ne=Symbol("store-self");function ie(e){let t=e[A];if(!t&&(Object.defineProperty(e,A,{value:t=new Proxy(e,Ye)}),!Array.isArray(e))){const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let i=0,s=n.length;i<s;i++){const l=n[i];o[l].get&&Object.defineProperty(e,l,{enumerable:o[l].enumerable,get:o[l].get.bind(t)})}}return t}function x(e){let t;return e!=null&&typeof e=="object"&&(e[A]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function C(e,t=new Set){let n,o,i,s;if(n=e!=null&&e[K])return n;if(!x(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,r=e.length;l<r;l++)i=e[l],(o=C(i,t))!==i&&(e[l]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let f=0,c=l.length;f<c;f++)s=l[f],!r[s].get&&(i=e[s],(o=C(i,t))!==i&&(e[s]=o))}return e}function B(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function E(e,t,n){if(e[t])return e[t];const[o,i]=D(n,{equals:!1,internal:!0});return o.$=i,e[t]=o}function Me(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===A||t===$||(delete n.value,delete n.writable,n.get=()=>e[A][t]),n}function oe(e){v()&&E(B(e,$),ne)()}function Ue(e){return oe(e),Reflect.ownKeys(e)}const Ye={get(e,t,n){if(t===K)return e;if(t===A)return n;if(t===q)return oe(e),n;const o=B(e,$),i=o[t];let s=i?i():e[t];if(t===$||t===b||t==="__proto__")return s;if(!i){const l=Object.getOwnPropertyDescriptor(e,t);v()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(s=E(o,t,s)())}return x(s)?ie(s):s},has(e,t){return t===K||t===A||t===q||t===$||t===b||t==="__proto__"?!0:(v()&&E(B(e,b),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Ue,getOwnPropertyDescriptor:Me};function G(e,t,n,o=!1){if(!o&&e[t]===n)return;const i=e[t],s=e.length;n===void 0?(delete e[t],e[b]&&e[b][t]&&i!==void 0&&e[b][t].$()):(e[t]=n,e[b]&&e[b][t]&&i===void 0&&e[b][t].$());let l=B(e,$),r;if((r=E(l,t,i))&&r.$(()=>n),Array.isArray(e)&&e.length!==s){for(let f=e.length;f<s;f++)(r=l[f])&&r.$();(r=E(l,"length",s))&&r.$(e.length)}(r=l[ne])&&r.$()}function se(e,t){const n=Object.keys(t);for(let o=0;o<n.length;o+=1){const i=n[o];G(e,i,t[i])}}function He(e,t){if(typeof t=="function"&&(t=t(e)),t=C(t),Array.isArray(t)){if(e===t)return;let n=0,o=t.length;for(;n<o;n++){const i=t[n];e[n]!==i&&G(e,n,i)}G(e,"length",o)}else se(e,t)}function w(e,t,n=[]){let o,i=e;if(t.length>1){o=t.shift();const l=typeof o,r=Array.isArray(e);if(Array.isArray(o)){for(let f=0;f<o.length;f++)w(e,[o[f]].concat(t),n);return}else if(r&&l==="function"){for(let f=0;f<e.length;f++)o(e[f],f)&&w(e,[f].concat(t),n);return}else if(r&&l==="object"){const{from:f=0,to:c=e.length-1,by:u=1}=o;for(let a=f;a<=c;a+=u)w(e,[a].concat(t),n);return}else if(t.length>1){w(e[o],t,[o].concat(n));return}i=e[o],n=[o].concat(n)}let s=t[0];typeof s=="function"&&(s=s(i,n),s===i)||o===void 0&&s==null||(s=C(s),o===void 0||x(i)&&x(s)&&!Array.isArray(s)?se(i,s):G(e,o,s))}function Ve(...[e,t]){const n=C(e||{}),o=Array.isArray(n),i=ie(n);function s(...l){ge(()=>{o&&l.length===1?He(n,l[0]):w(n,l)})}return[i,s]}var qe=m("<main><section><label for=input.key><span>Key Signature </span><select name=input.key id=input.key></select></label><span> Streak: <!> </span><span>Accuracy: <!>% (<!> of <!>)"),Xe=m("<option>");function Q(){return Math.floor(Math.random()*k.length)}function We(){const[e,t]=D(Q()),[n,o]=D("C"),[i,s]=D(0),[l,r]=Ve({incorrect:0,correct:0}),f=N(()=>l.correct+l.incorrect),c=N(()=>f()<=0?0:Math.trunc(100*(l.correct/f()))),u=N(()=>k[e()][0]);function a(h){if(h!==e()){s(0),r("incorrect",d=>d+1);return}for(s(d=>d+1),r("correct",d=>d+1);;){const d=Q();if(d!==e()){t(d);break}}}return(()=>{var h=qe(),d=h.firstChild,O=d.firstChild,re=O.firstChild,M=re.nextSibling,j=O.nextSibling,le=j.firstChild,U=le.nextSibling;U.nextSibling;var T=j.nextSibling,fe=T.firstChild,Y=fe.nextSibling,ce=Y.nextSibling,H=ce.nextSibling,ue=H.nextSibling,V=ue.nextSibling;return V.nextSibling,g(h,R(Ie,{note:u,signature:n}),d),M.addEventListener("change",S=>{o(S.currentTarget.value)}),g(M,()=>te.map(S=>(()=>{var p=Xe();return p.value=S,g(p,S),y(()=>p.selected=n()==S),p})())),g(j,i,U),g(T,c,Y),g(T,()=>l.correct,H),g(T,f,V),g(h,R(Be,{answer:e,onClick:a}),null),y(()=>F(h,me.main)),h})()}_e(()=>R(We,{}),document.body);