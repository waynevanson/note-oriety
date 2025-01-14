import{c as ie,a as m,u as oe,b as F,d as le,$ as C,e as H,g as K,f as se,h as re,i as O}from"./solid-js-DsYHm_RB.js";import{F as ce,R as fe}from"./vexflow-DwtmvLuk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function ae(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,c=n[i-1].nextSibling,f=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const a=l<s?o?t[o-1].nextSibling:t[l-o]:c;for(;o<l;)e.insertBefore(t[o++],a)}else if(l===o)for(;r<i;)(!f||!f.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const a=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],a),n[i]=t[l]}else{if(!f){f=new Map;let u=o;for(;u<l;)f.set(t[u],u++)}const a=f.get(n[r]);if(a!=null)if(o<a&&a<l){let u=r,y=1,A;for(;++u<i&&u<l&&!((A=f.get(n[u]))==null||A!==a+y);)y++;if(y>a-o){const x=n[r];for(;o<a;)e.insertBefore(t[o++],x)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const V="_$DX_DELEGATE";function ue(e,n,t,s={}){let i;return ie(l=>{i=l,n===document?e():h(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function S(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},l=()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function de(e,n=window.document){const t=n[V]||(n[V]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,ge))}}function X(e,n){n==null?e.removeAttribute("class"):e.className=n}function he(e,n,t){return oe(()=>e(n,t))}function h(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return B(e,n,s,t);m(i=>B(e,n(),i,t),s)}function ge(e){let n=e.target;const t=`$$${e.type}`,s=e.target,i=e.currentTarget,l=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),r=()=>{const c=n[t];if(c&&!n.disabled){const f=n[`${t}Data`];if(f!==void 0?c.call(n,f,e):c.call(n,e),e.cancelBubble)return}return n.host&&typeof n.host!="string"&&!n.host._$host&&n.contains(e.target)&&l(n.host),!0},o=()=>{for(;r()&&(n=n._$host||n.parentNode||n.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),e.composedPath){const c=e.composedPath();l(c[0]);for(let f=0;f<c.length-2&&(n=c[f],!!r());f++){if(n._$host){n=n._$host,o();break}if(n.parentNode===i)break}}else o();l(s)}function B(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(n=n.toString(),n===t))return t;if(r){let o=t[0];o&&o.nodeType===3?o.data!==n&&(o.data=n):o=document.createTextNode(n),t=_(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean")t=_(e,t,s);else{if(l==="function")return m(()=>{let o=n();for(;typeof o=="function";)o=o();t=B(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],c=t&&Array.isArray(t);if(L(o,n,t,i))return m(()=>t=B(e,o,t,s,!0)),()=>t;if(o.length===0){if(t=_(e,t,s),r)return t}else c?t.length===0?Y(e,o,s):ae(e,t,o):(t&&_(e),Y(e,o));t=o}else if(n.nodeType){if(Array.isArray(t)){if(r)return t=_(e,t,s,n);_(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function L(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],c=t&&t[e.length],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=L(e,o,c)||i;else if(f==="function")if(s){for(;typeof o=="function";)o=o();i=L(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return i}function Y(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function _(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,t):c&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const be="_main_my14h_1",Ce={main:be},ye="_note_ahamz_1",Ae="_svg_ahamz_5",_e="_ref_ahamz_8",q={note:ye,svg:Ae,ref:_e},z={C:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],G:["C","C#","D","D#","E","Fn","F","G","G#","A","A#","B"],D:["Cn","C","D","D#","E","Fn","F","G","G#","A","A#","B"],A:["Cn","C","D","D#","E","Fn","F","Gn","G","A","A#","B"],E:["Cn","C","Dn","D","E","Fn","F","Gn","G","A","A#","B"],B:["Cn","C","Dn","D","E","Fn","F","Gn","G","An","A","B"],"F#":["Cn","C","Dn","D","En","E","F","Gn","G","An","A","B"],"C#":["Cn","C","Dn","D","En","E","F","Gn","G","An","A","Bn"],F:["C","Db","D","Eb","E","F","Gb","G","Ab","A","B","Bn"],Bb:["C","Db","D","E","En","F","Gb","G","Ab","A","B","Bn"],Eb:["C","Db","D","E","En","F","Gb","G","A","An","B","Bn"],Ab:["C","D","Dn","E","En","F","Gb","G","A","An","B","Bn"],Db:["C","D","Dn","E","En","F","G","Gn","A","An","B","Bn"],Gb:["Cn","D","Dn","E","En","F","G","Gn","A","An","B","C"],Cb:["Cn","D","Dn","E","F","Fn","G","Gn","A","An","B","C"]},$e={C:0,G:1,D:2,A:3,E:4,B:5,"F#":6,"C#":7,F:1,Bb:2,Eb:3,Ab:4,Db:5,Gb:6,Cb:7},me={C:[0,2,4,5,7,9,11],G:[7,9,11,0,2,4,6],D:[2,4,6,7,9,11,1],A:[9,11,1,2,4,6,8],E:[4,6,8,9,11,1,3],B:[11,1,3,4,6,8,10],"F#":[6,7,9,10,0,2,4],"C#":[1,3,5,6,8,10,0],F:[5,7,9,10,0,2,4],Bb:[10,0,2,3,5,7,9],Eb:[3,5,7,8,10,0,2],Ab:[8,10,0,1,3,5,7],Db:[1,3,5,6,8,10,0],Gb:[6,8,10,11,1,3,5],Cb:[11,1,3,4,6,8,10]},Se=Array.from({length:12},(e,n)=>n);function v(e){const n=Ee({min:0,max:e.length-1});return e[n]}function Ee(e){const n=Math.random(),t=Ge(n,{min:0,max:1},e);return Math.round(t)}function U(){return v(Se)}function we(e){const n=me[e];return v(n)}function De(){return v([3,4])}function Ge(e,n,t){return(e-n.min)/(n.max-n.min)*(t.max-t.min)+t.min}var Oe=S("<div id=note-oriety-vex-flow>");const Fe="note-oriety-vex-flow";function Be(e){let n;const t=F(()=>z[e.signature()][e.pitchClassKind()]);return le(s=>{if(!n)return!1;s&&(n.innerHTML="");const i=100+$e[e.signature()]*10,l=120,r=10,o=`0 ${r} ${i} ${l-r}`,c=new ce({renderer:{elementId:Fe,width:i,height:l,backend:fe.SVG}}),f=c.EasyScore(),a=f.notes(`${t()}${e.octave()}/w`,{clef:e.clef});c.System().addStave({voices:[f.voice(a)]}).addClef(e.clef).addKeySignature(e.signature()),c.draw();const u=n.firstChild;return u.removeAttribute("width"),u.removeAttribute("height"),u.setAttribute("viewBox",o),u.classList.add(q.svg),n.classList.add(q.ref),!0},!1),(()=>{var s=Oe(),i=n;return typeof i=="function"?he(i,s):n=s,s})()}const N=Symbol("store-raw"),$=Symbol("store-node"),b=Symbol("store-has"),J=Symbol("store-self");function Q(e){let n=e[C];if(!n&&(Object.defineProperty(e,C,{value:n=new Proxy(e,Pe)}),!Array.isArray(e))){const t=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,l=t.length;i<l;i++){const r=t[i];s[r].get&&Object.defineProperty(e,r,{enumerable:s[r].enumerable,get:s[r].get.bind(n)})}}return n}function T(e){let n;return e!=null&&typeof e=="object"&&(e[C]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function w(e,n=new Set){let t,s,i,l;if(t=e!=null&&e[N])return t;if(!T(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let r=0,o=e.length;r<o;r++)i=e[r],(s=w(i,n))!==i&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,f=r.length;c<f;c++)l=r[c],!o[l].get&&(i=e[l],(s=w(i,n))!==i&&(e[l]=s))}return e}function k(e,n){let t=e[n];return t||Object.defineProperty(e,n,{value:t=Object.create(null)}),t}function D(e,n,t){if(e[n])return e[n];const[s,i]=re(t,{equals:!1,internal:!0});return s.$=i,e[n]=s}function Te(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===C||n===$||(delete t.value,delete t.writable,t.get=()=>e[C][n]),t}function Z(e){K()&&D(k(e,$),J)()}function ke(e){return Z(e),Reflect.ownKeys(e)}const Pe={get(e,n,t){if(n===N)return e;if(n===C)return t;if(n===H)return Z(e),t;const s=k(e,$),i=s[n];let l=i?i():e[n];if(n===$||n===b||n==="__proto__")return l;if(!i){const r=Object.getOwnPropertyDescriptor(e,n);K()&&(typeof l!="function"||e.hasOwnProperty(n))&&!(r&&r.get)&&(l=D(s,n,l)())}return T(l)?Q(l):l},has(e,n){return n===N||n===C||n===H||n===$||n===b||n==="__proto__"?!0:(K()&&D(k(e,b),n)(),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:ke,getOwnPropertyDescriptor:Te};function P(e,n,t,s=!1){if(!s&&e[n]===t)return;const i=e[n],l=e.length;t===void 0?(delete e[n],e[b]&&e[b][n]&&i!==void 0&&e[b][n].$()):(e[n]=t,e[b]&&e[b][n]&&i===void 0&&e[b][n].$());let r=k(e,$),o;if((o=D(r,n,i))&&o.$(()=>t),Array.isArray(e)&&e.length!==l){for(let c=e.length;c<l;c++)(o=r[c])&&o.$();(o=D(r,"length",l))&&o.$(e.length)}(o=r[J])&&o.$()}function p(e,n){const t=Object.keys(n);for(let s=0;s<t.length;s+=1){const i=t[s];P(e,i,n[i])}}function xe(e,n){if(typeof n=="function"&&(n=n(e)),n=w(n),Array.isArray(n)){if(e===n)return;let t=0,s=n.length;for(;t<s;t++){const i=n[t];e[t]!==i&&P(e,t,i)}P(e,"length",s)}else p(e,n)}function E(e,n,t=[]){let s,i=e;if(n.length>1){s=n.shift();const r=typeof s,o=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)E(e,[s[c]].concat(n),t);return}else if(o&&r==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&E(e,[c].concat(n),t);return}else if(o&&r==="object"){const{from:c=0,to:f=e.length-1,by:a=1}=s;for(let u=c;u<=f;u+=a)E(e,[u].concat(n),t);return}else if(n.length>1){E(e[s],n,[s].concat(t));return}i=e[s],t=[s].concat(t)}let l=n[0];typeof l=="function"&&(l=l(i,t),l===i)||s===void 0&&l==null||(l=w(l),s===void 0||T(i)&&T(l)&&!Array.isArray(l)?p(i,l):P(e,s,l))}function Ke(...[e,n]){const t=w(e||{}),s=Array.isArray(t),i=Q(t);function l(...r){se(()=>{s&&r.length===1?xe(t,r[0]):E(t,r)})}return[i,l]}var Le=S("<div><label for=input.key><span>Key Signature </span><select name=input.key id=input.key></select></label><label for=input.clef><span> Clef </span><select></select></label><label for=input.chromatics><span> Chromatics: </span><input type=checkbox></label><span> Streak: <!> </span><span>Accuracy: <!>% (<!> of <!>)"),W=S("<option>");function Ne(e){const n=F(()=>e.outcome.correct+e.outcome.incorrect),t=F(()=>n()<=0?0:Math.trunc(100*(e.outcome.correct/n())));return(()=>{var s=Le(),i=s.firstChild,l=i.firstChild,r=l.nextSibling,o=i.nextSibling,c=o.firstChild,f=c.nextSibling,a=o.nextSibling,u=a.firstChild,y=u.nextSibling,A=a.nextSibling,x=A.firstChild,j=x.nextSibling;j.nextSibling;var G=A.nextSibling,ee=G.firstChild,I=ee.nextSibling,ne=I.nextSibling,R=ne.nextSibling,te=R.nextSibling,M=te.nextSibling;return M.nextSibling,r.addEventListener("change",g=>{var d;(d=e==null?void 0:e.onChangeKeySignature)==null||d.call(e,g.target.value)}),h(r,()=>Object.keys(z).map(g=>(()=>{var d=W();return d.value=g,h(d,g),m(()=>d.selected=e.keySignature==g),d})())),f.addEventListener("change",g=>{var d;return(d=e==null?void 0:e.onChangeClef)==null?void 0:d.call(e,g.target.value)}),h(f,()=>["treble","alto","bass"].map(g=>(()=>{var d=W();return d.value=g,h(d,g),d})())),y.addEventListener("change",g=>{var d;return(d=e.onChangeChromatics)==null?void 0:d.call(e,g.currentTarget.checked)}),h(A,()=>e.streak,j),h(G,t,I),h(G,()=>e.outcome.correct,R),h(G,n,M),m(()=>y.checked=e.chromatics),s})()}var ve=S("<ul class=piano>"),je=S("<li>");function Ie(e){return(()=>{var n=ve();return h(n,()=>["white c","black cs","white d","black ds","white e","white f","black fs","white g","black gs","white a","black as","white b"].map((t,s)=>(()=>{var i=je();return i.$$click=()=>{var l;return(l=e.onClick)==null?void 0:l.call(e,s)},X(i,`key ${t}`),i})())),n})()}de(["click"]);var Re=S("<main>");const Me={treble:1,alto:0,bass:-1};function He(){const[e,n]=Ke({pitchClassKind:U(),signature:"C",altoOctave:4,outcome:{correct:0,incorrect:0},showChromatics:!0,streak:0,clef:"treble"}),t=F(()=>e.altoOctave+Me[e.clef]);function s(){let o;for(;;)if(o=e.showChromatics?U():we(e.signature),o!==e.pitchClassKind){n("pitchClassKind",o);break}n("altoOctave",De())}function i(o){n("showChromatics",o),s()}function l(o){if(o!==e.pitchClassKind){n("streak",0),n("outcome","incorrect",c=>c+1);return}n("streak",c=>c+1),n("outcome","correct",c=>c+1),s()}function r(o){n("clef",o)}return(()=>{var o=Re();return h(o,O(Be,{pitchClassKind:()=>e.pitchClassKind,signature:()=>e.signature,octave:t,get clef(){return e.clef}}),null),h(o,O(Ne,{get chromatics(){return e.showChromatics},get keySignature(){return e.signature},get outcome(){return e.outcome},get streak(){return e.streak},onChangeChromatics:i,onChangeKeySignature:c=>n("signature",c),onChangeClef:r,get clef(){return e.clef}}),null),h(o,O(Ie,{onClick:c=>l(c)}),null),m(()=>X(o,Ce.main)),o})()}ue(()=>O(He,{}),document.body);
