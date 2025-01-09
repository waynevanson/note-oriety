import{c as te,a as A,u as ne,b as k,d as ie,$ as C,e as H,g as K,f as oe,h as le,i as G}from"./solid-js-DsYHm_RB.js";import{F as se,R as re}from"./vexflow-DwtmvLuk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function fe(e,t,n){let l=n.length,i=t.length,o=l,r=0,s=0,f=t[i-1].nextSibling,c=null;for(;r<i||s<o;){if(t[r]===n[s]){r++,s++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const a=o<l?s?n[s-1].nextSibling:n[o-s]:f;for(;s<o;)e.insertBefore(n[s++],a)}else if(o===s)for(;r<i;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[s]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[s++],t[r++].nextSibling),e.insertBefore(n[--o],a),t[i]=n[o]}else{if(!c){c=new Map;let h=s;for(;h<o;)c.set(n[h],h++)}const a=c.get(t[r]);if(a!=null)if(s<a&&a<o){let h=r,_=1,y;for(;++h<i&&h<o&&!((y=c.get(t[h]))==null||y!==a+_);)_++;if(_>a-s){const T=t[r];for(;s<a;)e.insertBefore(n[s++],T)}else e.replaceChild(n[s++],t[r++])}else r++;else t[r++].remove()}}}const V="_$DX_DELEGATE";function ce(e,t,n,l={}){let i;return te(o=>{i=o,t===document?e():u(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{i(),t.textContent=""}}function w(e,t,n){let l;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(l||(l=i())).cloneNode(!0);return o.cloneNode=o,o}function ae(e,t=window.document){const n=t[V]||(t[V]=new Set);for(let l=0,i=e.length;l<i;l++){const o=e[l];n.has(o)||(n.add(o),t.addEventListener(o,he))}}function ue(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function B(e,t){t==null?e.removeAttribute("class"):e.className=t}function de(e,t,n){return ne(()=>e(t,n))}function u(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return F(e,t,l,n);A(i=>F(e,t(),i,n),l)}function he(e){let t=e.target;const n=`$$${e.type}`,l=e.target,i=e.currentTarget,o=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),r=()=>{const f=t[n];if(f&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?f.call(t,c,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},s=()=>{for(;r()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const f=e.composedPath();o(f[0]);for(let c=0;c<f.length-2&&(t=f[c],!!r());c++){if(t._$host){t=t._$host,s();break}if(t.parentNode===i)break}}else s();o(l)}function F(e,t,n,l,i){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=l!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(r){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=$(e,n,l,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=$(e,n,l);else{if(o==="function")return A(()=>{let s=t();for(;typeof s=="function";)s=s();n=F(e,s,n,l)}),()=>n;if(Array.isArray(t)){const s=[],f=n&&Array.isArray(n);if(L(s,t,n,i))return A(()=>n=F(e,s,n,l,!0)),()=>n;if(s.length===0){if(n=$(e,n,l),r)return n}else f?n.length===0?q(e,s,l):fe(e,n,s):(n&&$(e),q(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(r)return n=$(e,n,l,t);$(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function L(e,t,n,l){let i=!1;for(let o=0,r=t.length;o<r;o++){let s=t[o],f=n&&n[e.length],c;if(!(s==null||s===!0||s===!1))if((c=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))i=L(e,s,f)||i;else if(c==="function")if(l){for(;typeof s=="function";)s=s();i=L(e,Array.isArray(s)?s:[s],Array.isArray(f)?f:[f])||i}else e.push(s),i=!0;else{const a=String(s);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return i}function q(e,t,n=null){for(let l=0,i=t.length;l<i;l++)e.insertBefore(t[l],n)}function $(e,t,n,l){if(n===void 0)return e.textContent="";const i=l||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const s=t[r];if(i!==s){const f=s.parentNode===e;!o&&!r?f?e.replaceChild(i,s):e.insertBefore(i,n):f&&s.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const ge="_main_10uyl_1",be={main:ge},N={C:["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],G:["A","A#","B","C","C#","D","D#","E","Fn","F","G","G#"],D:["A","A#","B","Cn","C","D","D#","E","Fn","F","G","G#"],A:["A","A#","B","Cn","C","D","D#","E","Fn","F","Gn","G"],E:["A","A#","B","Cn","C","Dn","D","E","Fn","F","Gn","G"],B:["An","A","B","Cn","C","Dn","D","E","Fn","F","Gn","G"],"F#":["An","A","B","Cn","C","Dn","D","En","E","F","Gn","G"],"C#":["An","A","Bn","Cn","C","Dn","D","En","E","F","Gn","G"],F:["A","B","Bn","C","Db","D","Eb","E","F","Gb","G","Ab"],Bb:["A","B","Bn","C","Db","D","E","En","F","Gb","G","Ab"],Eb:["An","B","Bn","C","Db","D","E","En","F","Gb","G","A"],Ab:["An","B","Bn","C","D","Dn","E","En","F","Gb","G","A"],Db:["An","B","Bn","C","D","Dn","E","En","F","G","Gn","A"],Gb:["An","B","C","Cn","D","Dn","E","En","F","G","Gn","A"],Cb:["An","B","C","Cn","D","Dn","E","F","Fn","G","Gn","A"]};function ye(e){const t=["b","#","n","x"];return e.filter(n=>t.some(l=>n.includes(l))).length}const X=[["A","An"],["A#","Bb"],["B","Bn","Cb"],["C","Cn","B#"],["C#","Db"],["D","Dn"],["D#","Eb"],["E","En","Fb"],["F","Fn","E#"],["F#","Gb"],["G","Gn"],["G#","Ab"]],Ae="_list_gkr10_1",Ce="_item_gkr10_7",_e="_button_gkr10_10",x={list:Ae,item:Ce,button:_e};var $e=w("<ol>"),Se=w("<li><button>");function we(e){const{onClick:t}=e;return(()=>{var n=$e();return u(n,()=>X.map((l,i)=>(()=>{var o=Se(),r=o.firstChild;return r.$$click=()=>t==null?void 0:t(i),u(r,()=>l.join(" / ")),A(s=>{var f=x.item,c=x.button,a=e.answer()==i;return f!==s.e&&B(o,s.e=f),c!==s.t&&B(r,s.t=c),a!==s.a&&ue(r,"data-answer",s.a=a),s},{e:void 0,t:void 0,a:void 0}),o})())),A(()=>B(n,x.list)),n})()}ae(["click"]);const Ee="_note_1hw5a_1",me="_svg_1hw5a_5",De="_ref_1hw5a_8",Y={note:Ee,svg:me,ref:De};var Ge=w("<div id=note-oriety-vex-flow>");const Be="note-oriety-vex-flow";function Fe(e){let t;const n=k(()=>N[e.signature()][e.pitchClassKind()]);return ie(l=>{if(!t)return!1;l&&(t.innerHTML="");const o=100+ye(N[e.signature()])*10,r=140,s=new se({renderer:{elementId:Be,width:o,height:r,backend:re.SVG}}),f=s.EasyScore(),c=f.notes(`${n()}${e.octave()}/w`,{clef:e.clef});s.System().addStave({voices:[f.voice(c)]}).addClef(e.clef).addKeySignature(e.signature()),s.draw();const a=t.firstChild;return a.removeAttribute("width"),a.removeAttribute("height"),a.classList.add(Y.svg),t.classList.add(Y.ref),!0},!1),(()=>{var l=Ge(),i=t;return typeof i=="function"?de(i,l):t=l,l})()}const j=Symbol("store-raw"),S=Symbol("store-node"),b=Symbol("store-has"),J=Symbol("store-self");function Q(e){let t=e[C];if(!t&&(Object.defineProperty(e,C,{value:t=new Proxy(e,Pe)}),!Array.isArray(e))){const n=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let i=0,o=n.length;i<o;i++){const r=n[i];l[r].get&&Object.defineProperty(e,r,{enumerable:l[r].enumerable,get:l[r].get.bind(t)})}}return t}function O(e){let t;return e!=null&&typeof e=="object"&&(e[C]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function m(e,t=new Set){let n,l,i,o;if(n=e!=null&&e[j])return n;if(!O(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,s=e.length;r<s;r++)i=e[r],(l=m(i,t))!==i&&(e[r]=l)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let f=0,c=r.length;f<c;f++)o=r[f],!s[o].get&&(i=e[o],(l=m(i,t))!==i&&(e[o]=l))}return e}function v(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function D(e,t,n){if(e[t])return e[t];const[l,i]=le(n,{equals:!1,internal:!0});return l.$=i,e[t]=l}function Oe(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===C||t===S||(delete n.value,delete n.writable,n.get=()=>e[C][t]),n}function Z(e){K()&&D(v(e,S),J)()}function ve(e){return Z(e),Reflect.ownKeys(e)}const Pe={get(e,t,n){if(t===j)return e;if(t===C)return n;if(t===H)return Z(e),n;const l=v(e,S),i=l[t];let o=i?i():e[t];if(t===S||t===b||t==="__proto__")return o;if(!i){const r=Object.getOwnPropertyDescriptor(e,t);K()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(o=D(l,t,o)())}return O(o)?Q(o):o},has(e,t){return t===j||t===C||t===H||t===S||t===b||t==="__proto__"?!0:(K()&&D(v(e,b),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:ve,getOwnPropertyDescriptor:Oe};function P(e,t,n,l=!1){if(!l&&e[t]===n)return;const i=e[t],o=e.length;n===void 0?(delete e[t],e[b]&&e[b][t]&&i!==void 0&&e[b][t].$()):(e[t]=n,e[b]&&e[b][t]&&i===void 0&&e[b][t].$());let r=v(e,S),s;if((s=D(r,t,i))&&s.$(()=>n),Array.isArray(e)&&e.length!==o){for(let f=e.length;f<o;f++)(s=r[f])&&s.$();(s=D(r,"length",o))&&s.$(e.length)}(s=r[J])&&s.$()}function z(e,t){const n=Object.keys(t);for(let l=0;l<n.length;l+=1){const i=n[l];P(e,i,t[i])}}function Te(e,t){if(typeof t=="function"&&(t=t(e)),t=m(t),Array.isArray(t)){if(e===t)return;let n=0,l=t.length;for(;n<l;n++){const i=t[n];e[n]!==i&&P(e,n,i)}P(e,"length",l)}else z(e,t)}function E(e,t,n=[]){let l,i=e;if(t.length>1){l=t.shift();const r=typeof l,s=Array.isArray(e);if(Array.isArray(l)){for(let f=0;f<l.length;f++)E(e,[l[f]].concat(t),n);return}else if(s&&r==="function"){for(let f=0;f<e.length;f++)l(e[f],f)&&E(e,[f].concat(t),n);return}else if(s&&r==="object"){const{from:f=0,to:c=e.length-1,by:a=1}=l;for(let h=f;h<=c;h+=a)E(e,[h].concat(t),n);return}else if(t.length>1){E(e[l],t,[l].concat(n));return}i=e[l],n=[l].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||l===void 0&&o==null||(o=m(o),l===void 0||O(i)&&O(o)&&!Array.isArray(o)?z(i,o):P(e,l,o))}function xe(...[e,t]){const n=m(e||{}),l=Array.isArray(n),i=Q(n);function o(...r){oe(()=>{l&&r.length===1?Te(n,r[0]):E(n,r)})}return[i,o]}var ke=w("<div><label for=input.key><span>Key Signature </span><select name=input.key id=input.key></select></label><label for=input.clef><span> Clef </span><select></select></label><span> Streak: <!> </span><span>Accuracy: <!>% (<!> of <!>)"),U=w("<option>");function Ke(e){const t=k(()=>e.outcome.correct+e.outcome.incorrect),n=k(()=>t()<=0?0:Math.trunc(100*(e.outcome.correct/t())));return(()=>{var l=ke(),i=l.firstChild,o=i.firstChild,r=o.nextSibling,s=i.nextSibling,f=s.firstChild,c=f.nextSibling,a=s.nextSibling,h=a.firstChild,_=h.nextSibling;_.nextSibling;var y=a.nextSibling,T=y.firstChild,I=T.nextSibling,p=I.nextSibling,M=p.nextSibling,ee=M.nextSibling,R=ee.nextSibling;return R.nextSibling,r.addEventListener("change",g=>{var d;(d=e==null?void 0:e.onChangeKeySignature)==null||d.call(e,g.target.value)}),u(r,()=>Object.keys(N).map(g=>(()=>{var d=U();return d.value=g,u(d,g),A(()=>d.selected=e.keySignature==g),d})())),c.addEventListener("change",g=>{var d;return(d=e==null?void 0:e.onChangeClef)==null?void 0:d.call(e,g.target.value)}),u(c,()=>["treble","bass","alto"].map(g=>(()=>{var d=U();return d.value=g,u(d,g),d})())),u(l,!1,a),u(a,()=>e.streak,_),u(y,n,I),u(y,()=>e.outcome.correct,M),u(y,t,R),l})()}var Le=w("<main>");const Ne={treble:{treble:0,alto:-1,bass:-2},alto:{treble:1,alto:0,bass:-1},bass:{bass:0,alto:1,treble:2}};function W(){return Math.floor(Math.random()*X.length)}function je(){return Math.round(Math.random()*3)+3}function Ie(){const[e,t]=xe({note:{pitchClassKind:W(),octave:5,signature:"C"},outcome:{correct:0,incorrect:0},showChromatics:!1,streak:0,clef:"treble"});function n(i){if(i!==e.note.pitchClassKind){t("streak",0),t("outcome","incorrect",o=>o+1);return}for(t("streak",o=>o+1),t("outcome","correct",o=>o+1);;){const o=W();if(o!==e.note.pitchClassKind){t("note","pitchClassKind",o);break}}t("note","octave",je())}function l(i){const o=Ne[e.clef][i];t("note","octave",r=>r+o),t("clef",i)}return(()=>{var i=Le();return u(i,G(Fe,{pitchClassKind:()=>e.note.pitchClassKind,signature:()=>e.note.signature,octave:()=>e.note.octave,get clef(){return e.clef}}),null),u(i,G(Ke,{get chromatics(){return e.showChromatics},get keySignature(){return e.note.signature},get outcome(){return e.outcome},get streak(){return e.streak},onChangeChromatics:o=>t("showChromatics",o),onChangeKeySignature:o=>t("note","signature",o),onChangeClef:l,get clef(){return e.clef}}),null),u(i,G(we,{answer:()=>e.note.pitchClassKind,onClick:n}),null),A(()=>B(i,be.main)),i})()}ce(()=>G(Ie,{}),document.body);
