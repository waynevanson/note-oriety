import{c as p,a as b,u as ee,b as W,d as ne,$ as y,e as M,g as P,f as te,h as ie,i as S}from"./solid-js-DsYHm_RB.js";import{F as oe,R as le}from"./vexflow-DwtmvLuk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function se(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,c=n[i-1].nextSibling,a=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const u=l<s?o?t[o-1].nextSibling:t[l-o]:c;for(;o<l;)e.insertBefore(t[o++],u)}else if(l===o)for(;r<i;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const u=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],u),n[i]=t[l]}else{if(!a){a=new Map;let f=o;for(;f<l;)a.set(t[f],f++)}const u=a.get(n[r]);if(u!=null)if(o<u&&u<l){let f=r,d=1,m;for(;++f<i&&f<l&&!((m=a.get(n[f]))==null||m!==u+d);)d++;if(d>u-o){const k=n[r];for(;o<u;)e.insertBefore(t[o++],k)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const H="_$DX_DELEGATE";function re(e,n,t,s={}){let i;return p(l=>{i=l,n===document?e():h(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function A(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},l=()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function ce(e,n=window.document){const t=n[H]||(n[H]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,ae))}}function E(e,n){n==null?e.removeAttribute("class"):e.className=n}function fe(e,n,t){return ee(()=>e(n,t))}function h(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return O(e,n,s,t);b(i=>O(e,n(),i,t),s)}function ae(e){let n=e.target;const t=`$$${e.type}`,s=e.target,i=e.currentTarget,l=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),r=()=>{const c=n[t];if(c&&!n.disabled){const a=n[`${t}Data`];if(a!==void 0?c.call(n,a,e):c.call(n,e),e.cancelBubble)return}return n.host&&typeof n.host!="string"&&!n.host._$host&&n.contains(e.target)&&l(n.host),!0},o=()=>{for(;r()&&(n=n._$host||n.parentNode||n.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),e.composedPath){const c=e.composedPath();l(c[0]);for(let a=0;a<c.length-2&&(n=c[a],!!r());a++){if(n._$host){n=n._$host,o();break}if(n.parentNode===i)break}}else o();l(s)}function O(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(n=n.toString(),n===t))return t;if(r){let o=t[0];o&&o.nodeType===3?o.data!==n&&(o.data=n):o=document.createTextNode(n),t=_(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean")t=_(e,t,s);else{if(l==="function")return b(()=>{let o=n();for(;typeof o=="function";)o=o();t=O(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],c=t&&Array.isArray(t);if(x(o,n,t,i))return b(()=>t=O(e,o,t,s,!0)),()=>t;if(o.length===0){if(t=_(e,t,s),r)return t}else c?t.length===0?V(e,o,s):se(e,t,o):(t&&_(e),V(e,o));t=o}else if(n.nodeType){if(Array.isArray(t)){if(r)return t=_(e,t,s,n);_(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function x(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],c=t&&t[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=x(e,o,c)||i;else if(a==="function")if(s){for(;typeof o=="function";)o=o();i=x(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const u=String(o);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return i}function V(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function _(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,t):c&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const de="_main_61vx1_1",ue={main:de},he="_note_vhczf_1",ge="_svg_vhczf_5",Ce="_ref_vhczf_10",Y={note:he,svg:ge,ref:Ce},X={C:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],G:["C","C#","D","D#","E","Fn","F","G","G#","A","A#","B"],D:["Cn","C","D","D#","E","Fn","F","G","G#","A","A#","B"],A:["Cn","C","D","D#","E","Fn","F","Gn","G","A","A#","B"],E:["Cn","C","Dn","D","E","Fn","F","Gn","G","A","A#","B"],B:["Cn","C","Dn","D","E","Fn","F","Gn","G","An","A","B"],"F#":["Cn","C","Dn","D","En","E","F","Gn","G","An","A","B"],"C#":["Cn","C","Dn","D","En","E","F","Gn","G","An","A","Bn"],F:["C","Db","D","Eb","E","F","Gb","G","Ab","A","B","Bn"],Bb:["C","Db","D","E","En","F","Gb","G","Ab","A","B","Bn"],Eb:["C","Db","D","E","En","F","Gb","G","A","An","B","Bn"],Ab:["C","D","Dn","E","En","F","Gb","G","A","An","B","Bn"],Db:["C","D","Dn","E","En","F","G","Gn","A","An","B","Bn"],Gb:["Cn","D","Dn","E","En","F","G","Gn","A","An","B","C"],Cb:["Cn","D","Dn","E","F","Fn","G","Gn","A","An","B","C"]},be={C:0,G:1,D:2,A:3,E:4,B:5,"F#":6,"C#":7,F:1,Bb:2,Eb:3,Ab:4,Db:5,Gb:6,Cb:7},ye={C:[0,2,4,5,7,9,11],G:[7,9,11,0,2,4,6],D:[2,4,6,7,9,11,1],A:[9,11,1,2,4,6,8],E:[4,6,8,9,11,1,3],B:[11,1,3,4,6,8,10],"F#":[6,7,9,10,0,2,4],"C#":[1,3,5,6,8,10,0],F:[5,7,9,10,0,2,4],Bb:[10,0,2,3,5,7,9],Eb:[3,5,7,8,10,0,2],Ab:[8,10,0,1,3,5,7],Db:[1,3,5,6,8,10,0],Gb:[6,8,10,11,1,3,5],Cb:[11,1,3,4,6,8,10]},Ae=Array.from({length:12},(e,n)=>n);function L(e){const n=_e({min:0,max:e.length-1});return e[n]}function _e(e){const n=Math.random(),t=Se(n,{min:0,max:1},e);return Math.round(t)}function q(){return L(Ae)}function $e(e){const n=ye[e];return L(n)}function me(){return L([3,4])}function Se(e,n,t){return(e-n.min)/(n.max-n.min)*(t.max-t.min)+t.min}var we=A("<div id=note-oriety-vex-flow>");const Ee="note-oriety-vex-flow";function De(e){let n;const t=W(()=>X[e.signature()][e.pitchClassKind()]);return ne(s=>{if(!n)return!1;s&&(n.innerHTML="");const i=100+be[e.signature()]*10,l=120,r=10,o=`0 ${r} ${i} ${l-r}`,c=new oe({renderer:{elementId:Ee,width:i,height:l,backend:le.SVG}}),a=c.EasyScore(),u=a.notes(`${t()}${e.octave()}/w`,{clef:e.clef});c.System().addStave({voices:[a.voice(u)]}).addClef(e.clef).addKeySignature(e.signature()),c.draw();const f=n.firstChild;return f.removeAttribute("width"),f.removeAttribute("height"),f.removeAttribute("style"),f.setAttribute("viewBox",o),f.classList.add(Y.svg),n.classList.add(Y.ref),!0},!1),(()=>{var s=we(),i=n;return typeof i=="function"?fe(i,s):n=s,s})()}const K=Symbol("store-raw"),$=Symbol("store-node"),g=Symbol("store-has"),z=Symbol("store-self");function J(e){let n=e[y];if(!n&&(Object.defineProperty(e,y,{value:n=new Proxy(e,ve)}),!Array.isArray(e))){const t=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,l=t.length;i<l;i++){const r=t[i];s[r].get&&Object.defineProperty(e,r,{enumerable:s[r].enumerable,get:s[r].get.bind(n)})}}return n}function v(e){let n;return e!=null&&typeof e=="object"&&(e[y]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function D(e,n=new Set){let t,s,i,l;if(t=e!=null&&e[K])return t;if(!v(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let r=0,o=e.length;r<o;r++)i=e[r],(s=D(i,n))!==i&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,a=r.length;c<a;c++)l=r[c],!o[l].get&&(i=e[l],(s=D(i,n))!==i&&(e[l]=s))}return e}function F(e,n){let t=e[n];return t||Object.defineProperty(e,n,{value:t=Object.create(null)}),t}function G(e,n,t){if(e[n])return e[n];const[s,i]=ie(t,{equals:!1,internal:!0});return s.$=i,e[n]=s}function Ge(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===y||n===$||(delete t.value,delete t.writable,t.get=()=>e[y][n]),t}function Q(e){P()&&G(F(e,$),z)()}function Oe(e){return Q(e),Reflect.ownKeys(e)}const ve={get(e,n,t){if(n===K)return e;if(n===y)return t;if(n===M)return Q(e),t;const s=F(e,$),i=s[n];let l=i?i():e[n];if(n===$||n===g||n==="__proto__")return l;if(!i){const r=Object.getOwnPropertyDescriptor(e,n);P()&&(typeof l!="function"||e.hasOwnProperty(n))&&!(r&&r.get)&&(l=G(s,n,l)())}return v(l)?J(l):l},has(e,n){return n===K||n===y||n===M||n===$||n===g||n==="__proto__"?!0:(P()&&G(F(e,g),n)(),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Oe,getOwnPropertyDescriptor:Ge};function B(e,n,t,s=!1){if(!s&&e[n]===t)return;const i=e[n],l=e.length;t===void 0?(delete e[n],e[g]&&e[g][n]&&i!==void 0&&e[g][n].$()):(e[n]=t,e[g]&&e[g][n]&&i===void 0&&e[g][n].$());let r=F(e,$),o;if((o=G(r,n,i))&&o.$(()=>t),Array.isArray(e)&&e.length!==l){for(let c=e.length;c<l;c++)(o=r[c])&&o.$();(o=G(r,"length",l))&&o.$(e.length)}(o=r[z])&&o.$()}function Z(e,n){const t=Object.keys(n);for(let s=0;s<t.length;s+=1){const i=t[s];B(e,i,n[i])}}function Fe(e,n){if(typeof n=="function"&&(n=n(e)),n=D(n),Array.isArray(n)){if(e===n)return;let t=0,s=n.length;for(;t<s;t++){const i=n[t];e[t]!==i&&B(e,t,i)}B(e,"length",s)}else Z(e,n)}function w(e,n,t=[]){let s,i=e;if(n.length>1){s=n.shift();const r=typeof s,o=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)w(e,[s[c]].concat(n),t);return}else if(o&&r==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&w(e,[c].concat(n),t);return}else if(o&&r==="object"){const{from:c=0,to:a=e.length-1,by:u=1}=s;for(let f=c;f<=a;f+=u)w(e,[f].concat(n),t);return}else if(n.length>1){w(e[s],n,[s].concat(t));return}i=e[s],t=[s].concat(t)}let l=n[0];typeof l=="function"&&(l=l(i,t),l===i)||s===void 0&&l==null||(l=D(l),s===void 0||v(i)&&v(l)&&!Array.isArray(l)?Z(i,l):B(e,s,l))}function Be(...[e,n]){const t=D(e||{}),s=Array.isArray(t),i=J(t);function l(...r){te(()=>{s&&r.length===1?Fe(t,r[0]):w(t,r)})}return[i,l]}var ke=A("<div><label for=input.key><span>Key Signature </span><select name=input.key id=input.key></select></label><label for=input.clef><span> Clef </span><select></select></label><label for=input.chromatics><span> Chromatics: </span><input type=checkbox>"),U=A("<option>");function Te(e){return(()=>{var n=ke(),t=n.firstChild,s=t.firstChild,i=s.nextSibling,l=t.nextSibling,r=l.firstChild,o=r.nextSibling,c=l.nextSibling,a=c.firstChild,u=a.nextSibling;return i.addEventListener("change",f=>{var d;(d=e==null?void 0:e.onChangeKeySignature)==null||d.call(e,f.target.value)}),h(i,()=>Object.keys(X).map(f=>(()=>{var d=U();return d.value=f,h(d,f),b(()=>d.selected=e.keySignature==f),d})())),o.addEventListener("change",f=>{var d;return(d=e==null?void 0:e.onChangeClef)==null?void 0:d.call(e,f.target.value)}),h(o,()=>["treble","alto","bass"].map(f=>(()=>{var d=U();return d.value=f,h(d,f),d})())),u.addEventListener("change",f=>{var d;return(d=e.onChangeChromatics)==null?void 0:d.call(e,f.currentTarget.checked)}),b(()=>u.checked=e.chromatics),n})()}var Pe=A("<ul class=piano>"),xe=A("<li>");function Ke(e){return(()=>{var n=Pe();return h(n,()=>["white c","black cs","white d","black ds","white e","white f","black fs","white g","black gs","white a","black as","white b"].map((t,s)=>(()=>{var i=xe();return i.$$click=()=>{var l;return(l=e.onClick)==null?void 0:l.call(e,s)},E(i,`key ${t}`),i})())),n})()}ce(["click"]);const Le="_list_rowov_1",T={list:Le};var Ne=A("<dl><div><dt>Streak</dt><dd> </dd></div><div><dt>Accuracy</dt><dd>%</dd><dd>(<!> of <!>)");function je(e){const n=()=>e.outcome.correct+e.outcome.incorrect,t=()=>n()<=0?0:Math.trunc(100*(e.outcome.correct/n()));return(()=>{var s=Ne(),i=s.firstChild,l=i.firstChild,r=l.nextSibling;r.firstChild;var o=i.nextSibling,c=o.firstChild,a=c.nextSibling,u=a.firstChild,f=a.nextSibling,d=f.firstChild,m=d.nextSibling,k=m.nextSibling,N=k.nextSibling;return N.nextSibling,h(r,()=>e.streak,null),h(a,t,u),h(f,()=>e.outcome.correct,m),h(f,n,N),b(C=>{var j=T.list,I=T.streak,R=T.accuracy;return j!==C.e&&E(s,C.e=j),I!==C.t&&E(i,C.t=I),R!==C.a&&E(o,C.a=R),C},{e:void 0,t:void 0,a:void 0}),s})()}var Ie=A("<main>");const Re={treble:1,alto:0,bass:-1};function Me(){const[e,n]=Be({pitchClassKind:q(),signature:"C",altoOctave:4,outcome:{correct:0,incorrect:0},showChromatics:!0,streak:0,clef:"treble"}),t=W(()=>e.altoOctave+Re[e.clef]);function s(){let o;for(;;)if(o=e.showChromatics?q():$e(e.signature),o!==e.pitchClassKind){n("pitchClassKind",o);break}n("altoOctave",me())}function i(o){n("showChromatics",o),s()}function l(o){if(o!==e.pitchClassKind){n("streak",0),n("outcome","incorrect",c=>c+1);return}n("streak",c=>c+1),n("outcome","correct",c=>c+1),s()}function r(o){n("clef",o)}return(()=>{var o=Ie();return h(o,S(je,{get outcome(){return e.outcome},get streak(){return e.streak}}),null),h(o,S(De,{pitchClassKind:()=>e.pitchClassKind,signature:()=>e.signature,octave:t,get clef(){return e.clef}}),null),h(o,S(Te,{get chromatics(){return e.showChromatics},get keySignature(){return e.signature},onChangeChromatics:i,onChangeKeySignature:c=>n("signature",c),onChangeClef:r,get clef(){return e.clef}}),null),h(o,S(Ke,{onClick:c=>l(c)}),null),b(()=>E(o,ue.main)),o})()}re(()=>S(Me,{}),document.body);
