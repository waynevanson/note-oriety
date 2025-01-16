import{c as Q,a as _,u as Z,$ as A,b as N,g as P,d as z,e as p,s as ee,f as $,h as V,i as ne}from"./solid-js-D-7i1sCw.js";import{F as te,R as ie}from"./vexflow-DwtmvLuk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function oe(e,n,t){let o=t.length,i=n.length,s=o,c=0,l=0,r=n[i-1].nextSibling,a=null;for(;c<i||l<s;){if(n[c]===t[l]){c++,l++;continue}for(;n[i-1]===t[s-1];)i--,s--;if(i===c){const d=s<o?l?t[l-1].nextSibling:t[s-l]:r;for(;l<s;)e.insertBefore(t[l++],d)}else if(s===l)for(;c<i;)(!a||!a.has(n[c]))&&n[c].remove(),c++;else if(n[c]===t[s-1]&&t[l]===n[i-1]){const d=n[--i].nextSibling;e.insertBefore(t[l++],n[c++].nextSibling),e.insertBefore(t[--s],d),n[i]=t[s]}else{if(!a){a=new Map;let f=l;for(;f<s;)a.set(t[f],f++)}const d=a.get(n[c]);if(d!=null)if(l<d&&d<s){let f=c,u=1,S;for(;++f<i&&f<s&&!((S=a.get(n[f]))==null||S!==d+u);)u++;if(u>d-l){const v=n[c];for(;l<d;)e.insertBefore(t[l++],v)}else e.replaceChild(t[l++],n[c++])}else c++;else n[c++].remove()}}}const j="_$DX_DELEGATE";function se(e,n,t,o={}){let i;return Q(s=>{i=s,n===document?e():g(n,e(),n.firstChild?null:void 0,t)},o.owner),()=>{i(),n.textContent=""}}function b(e,n,t){let o;const i=()=>{const c=document.createElement("template");return c.innerHTML=e,c.content.firstChild},s=()=>(o||(o=i())).cloneNode(!0);return s.cloneNode=s,s}function le(e,n=window.document){const t=n[j]||(n[j]=new Set);for(let o=0,i=e.length;o<i;o++){const s=e[o];t.has(s)||(t.add(s),n.addEventListener(s,re))}}function y(e,n){n==null?e.removeAttribute("class"):e.className=n}function ce(e,n,t){return Z(()=>e(n,t))}function g(e,n,t,o){if(t!==void 0&&!o&&(o=[]),typeof n!="function")return G(e,n,o,t);_(i=>G(e,n(),i,t),o)}function re(e){let n=e.target;const t=`$$${e.type}`,o=e.target,i=e.currentTarget,s=r=>Object.defineProperty(e,"target",{configurable:!0,value:r}),c=()=>{const r=n[t];if(r&&!n.disabled){const a=n[`${t}Data`];if(a!==void 0?r.call(n,a,e):r.call(n,e),e.cancelBubble)return}return n.host&&typeof n.host!="string"&&!n.host._$host&&n.contains(e.target)&&s(n.host),!0},l=()=>{for(;c()&&(n=n._$host||n.parentNode||n.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),e.composedPath){const r=e.composedPath();s(r[0]);for(let a=0;a<r.length-2&&(n=r[a],!!c());a++){if(n._$host){n=n._$host,l();break}if(n.parentNode===i)break}}else l();s(o)}function G(e,n,t,o,i){for(;typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,c=o!==void 0;if(e=c&&t[0]&&t[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(n=n.toString(),n===t))return t;if(c){let l=t[0];l&&l.nodeType===3?l.data!==n&&(l.data=n):l=document.createTextNode(n),t=m(e,t,o,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||s==="boolean")t=m(e,t,o);else{if(s==="function")return _(()=>{let l=n();for(;typeof l=="function";)l=l();t=G(e,l,t,o)}),()=>t;if(Array.isArray(n)){const l=[],r=t&&Array.isArray(t);if(x(l,n,t,i))return _(()=>t=G(e,l,t,o,!0)),()=>t;if(l.length===0){if(t=m(e,t,o),c)return t}else r?t.length===0?I(e,l,o):oe(e,t,l):(t&&m(e),I(e,l));t=l}else if(n.nodeType){if(Array.isArray(t)){if(c)return t=m(e,t,o,n);m(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function x(e,n,t,o){let i=!1;for(let s=0,c=n.length;s<c;s++){let l=n[s],r=t&&t[e.length],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=x(e,l,r)||i;else if(a==="function")if(o){for(;typeof l=="function";)l=l();i=x(e,Array.isArray(l)?l:[l],Array.isArray(r)?r:[r])||i}else e.push(l),i=!0;else{const d=String(l);r&&r.nodeType===3&&r.data===d?e.push(r):e.push(document.createTextNode(d))}}return i}function I(e,n,t=null){for(let o=0,i=n.length;o<i;o++)e.insertBefore(n[o],t)}function m(e,n,t,o){if(t===void 0)return e.textContent="";const i=o||document.createTextNode("");if(n.length){let s=!1;for(let c=n.length-1;c>=0;c--){const l=n[c];if(i!==l){const r=l.parentNode===e;!s&&!c?r?e.replaceChild(i,l):e.insertBefore(i,t):r&&l.remove()}else s=!0}}else e.insertBefore(i,t);return[i]}const K=Symbol("store-raw"),w=Symbol("store-node"),C=Symbol("store-has"),Y=Symbol("store-self");function U(e){let n=e[A];if(!n&&(Object.defineProperty(e,A,{value:n=new Proxy(e,de)}),!Array.isArray(e))){const t=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let i=0,s=t.length;i<s;i++){const c=t[i];o[c].get&&Object.defineProperty(e,c,{enumerable:o[c].enumerable,get:o[c].get.bind(n)})}}return n}function O(e){let n;return e!=null&&typeof e=="object"&&(e[A]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function D(e,n=new Set){let t,o,i,s;if(t=e!=null&&e[K])return t;if(!O(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let c=0,l=e.length;c<l;c++)i=e[c],(o=D(i,n))!==i&&(e[c]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const c=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let r=0,a=c.length;r<a;r++)s=c[r],!l[s].get&&(i=e[s],(o=D(i,n))!==i&&(e[s]=o))}return e}function F(e,n){let t=e[n];return t||Object.defineProperty(e,n,{value:t=Object.create(null)}),t}function k(e,n,t){if(e[n])return e[n];const[o,i]=p(t,{equals:!1,internal:!0});return o.$=i,e[n]=o}function fe(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===A||n===w||(delete t.value,delete t.writable,t.get=()=>e[A][n]),t}function W(e){P()&&k(F(e,w),Y)()}function ae(e){return W(e),Reflect.ownKeys(e)}const de={get(e,n,t){if(n===K)return e;if(n===A)return t;if(n===N)return W(e),t;const o=F(e,w),i=o[n];let s=i?i():e[n];if(n===w||n===C||n==="__proto__")return s;if(!i){const c=Object.getOwnPropertyDescriptor(e,n);P()&&(typeof s!="function"||e.hasOwnProperty(n))&&!(c&&c.get)&&(s=k(o,n,s)())}return O(s)?U(s):s},has(e,n){return n===K||n===A||n===N||n===w||n===C||n==="__proto__"?!0:(P()&&k(F(e,C),n)(),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:ae,getOwnPropertyDescriptor:fe};function B(e,n,t,o=!1){if(!o&&e[n]===t)return;const i=e[n],s=e.length;t===void 0?(delete e[n],e[C]&&e[C][n]&&i!==void 0&&e[C][n].$()):(e[n]=t,e[C]&&e[C][n]&&i===void 0&&e[C][n].$());let c=F(e,w),l;if((l=k(c,n,i))&&l.$(()=>t),Array.isArray(e)&&e.length!==s){for(let r=e.length;r<s;r++)(l=c[r])&&l.$();(l=k(c,"length",s))&&l.$(e.length)}(l=c[Y])&&l.$()}function X(e,n){const t=Object.keys(n);for(let o=0;o<t.length;o+=1){const i=t[o];B(e,i,n[i])}}function ue(e,n){if(typeof n=="function"&&(n=n(e)),n=D(n),Array.isArray(n)){if(e===n)return;let t=0,o=n.length;for(;t<o;t++){const i=n[t];e[t]!==i&&B(e,t,i)}B(e,"length",o)}else X(e,n)}function E(e,n,t=[]){let o,i=e;if(n.length>1){o=n.shift();const c=typeof o,l=Array.isArray(e);if(Array.isArray(o)){for(let r=0;r<o.length;r++)E(e,[o[r]].concat(n),t);return}else if(l&&c==="function"){for(let r=0;r<e.length;r++)o(e[r],r)&&E(e,[r].concat(n),t);return}else if(l&&c==="object"){const{from:r=0,to:a=e.length-1,by:d=1}=o;for(let f=r;f<=a;f+=d)E(e,[f].concat(n),t);return}else if(n.length>1){E(e[o],n,[o].concat(t));return}i=e[o],t=[o].concat(t)}let s=n[0];typeof s=="function"&&(s=s(i,t),s===i)||o===void 0&&s==null||(s=D(s),o===void 0||O(i)&&O(s)&&!Array.isArray(s)?X(i,s):B(e,o,s))}function he(...[e,n]){const t=D(e||{}),o=Array.isArray(t),i=U(t);function s(...c){z(()=>{o&&c.length===1?ue(t,c[0]):E(t,c)})}return[i,s]}const ge="_main_xoc0q_1",_e="_inputs_xoc0q_17",R={main:ge,inputs:_e},J={C:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],G:["C","C#","D","D#","E","Fn","F","G","G#","A","A#","B"],D:["Cn","C","D","D#","E","Fn","F","G","G#","A","A#","B"],A:["Cn","C","D","D#","E","Fn","F","Gn","G","A","A#","B"],E:["Cn","C","Dn","D","E","Fn","F","Gn","G","A","A#","B"],B:["Cn","C","Dn","D","E","Fn","F","Gn","G","An","A","B"],"F#":["Cn","C","Dn","D","En","E","F","Gn","G","An","A","B"],"C#":["Cn","C","Dn","D","En","E","F","Gn","G","An","A","Bn"],F:["C","Db","D","Eb","E","F","Gb","G","Ab","A","B","Bn"],Bb:["C","Db","D","E","En","F","Gb","G","Ab","A","B","Bn"],Eb:["C","Db","D","E","En","F","Gb","G","A","An","B","Bn"],Ab:["C","D","Dn","E","En","F","Gb","G","A","An","B","Bn"],Db:["C","D","Dn","E","En","F","G","Gn","A","An","B","Bn"],Gb:["Cn","D","Dn","E","En","F","G","Gn","A","An","B","C"],Cb:["Cn","D","Dn","E","F","Fn","G","Gn","A","An","B","C"]},Ce={C:0,G:1,D:2,A:3,E:4,B:5,"F#":6,"C#":7,F:1,Bb:2,Eb:3,Ab:4,Db:5,Gb:6,Cb:7},ye={C:[0,2,4,5,7,9,11],G:[7,9,11,0,2,4,6],D:[2,4,6,7,9,11,1],A:[9,11,1,2,4,6,8],E:[4,6,8,9,11,1,3],B:[11,1,3,4,6,8,10],"F#":[6,7,9,10,0,2,4],"C#":[1,3,5,6,8,10,0],F:[5,7,9,10,0,2,4],Bb:[10,0,2,3,5,7,9],Eb:[3,5,7,8,10,0,2],Ab:[8,10,0,1,3,5,7],Db:[1,3,5,6,8,10,0],Gb:[6,8,10,11,1,3,5],Cb:[11,1,3,4,6,8,10]},be=Array.from({length:12},(e,n)=>n);function L(e){const n=$e({min:0,max:e.length-1});return e[n]}function $e(e){const n=Math.random(),t=we(n,{min:0,max:1},e);return Math.round(t)}function M(){return L(be)}function Ae(e){const n=ye[e];return L(n)}function me(){return L([3,4])}function we(e,n,t){return(e-n.min)/(n.max-n.min)*(t.max-t.min)+t.min}const Se="_panel_s4jct_1",Ee={panel:Se};var De=b("<div><label for=input.key><span>Key Signature </span><select name=input.key id=input.key></select></label><label for=input.clef><span> Clef </span><select></select></label><label for=input.chromatics><span> Chromatics </span><input type=checkbox>"),H=b("<option>");function ke(e){return(()=>{var n=De(),t=n.firstChild,o=t.firstChild,i=o.nextSibling,s=t.nextSibling,c=s.firstChild,l=c.nextSibling,r=s.nextSibling,a=r.firstChild,d=a.nextSibling;return i.addEventListener("change",f=>{var u;(u=e==null?void 0:e.onChangeKeySignature)==null||u.call(e,f.target.value)}),g(i,()=>Object.keys(J).map(f=>(()=>{var u=H();return u.value=f,g(u,f),_(()=>u.selected=e.keySignature==f),u})())),l.addEventListener("change",f=>{var u;return(u=e==null?void 0:e.onChangeClef)==null?void 0:u.call(e,f.target.value)}),g(l,()=>["treble","alto","bass"].map(f=>(()=>{var u=H();return u.value=f,g(u,f),u})())),d.addEventListener("change",f=>{var u;return(u=e.onChangeChromatics)==null?void 0:u.call(e,f.currentTarget.checked)}),_(()=>y(n,Ee.panel)),_(()=>d.checked=e.chromatics),n})()}const ve="_list_8jld2_1",T={list:ve};var Ge=b("<dl><div><dt>Streak</dt><dd> </dd></div><div><dt>Accuracy</dt><dd>%");function Oe(e){const n=()=>e.outcome.correct+e.outcome.incorrect,t=()=>n()<=0?0:Math.trunc(100*(e.outcome.correct/n()));return(()=>{var o=Ge(),i=o.firstChild,s=i.firstChild,c=s.nextSibling;c.firstChild;var l=i.nextSibling,r=l.firstChild,a=r.nextSibling,d=a.firstChild;return g(c,()=>e.streak,null),g(a,t,d),_(f=>{var u=T.list,S=T.streak,v=T.accuracy;return u!==f.e&&y(o,f.e=u),S!==f.t&&y(i,f.t=S),v!==f.a&&y(l,f.a=v),f},{e:void 0,t:void 0,a:void 0}),o})()}const Fe="_panel_1px5d_1",Be={panel:Fe};var Te=b("<aside>");function Pe(e){const[n,t]=ee(e,["streak","outcome"]);return(()=>{var o=Te();return g(o,$(Oe,n),null),g(o,$(ke,t),null),_(()=>y(o,Be.panel)),o})()}const xe="_piano_1ai01_1",Ke="_key_1ai01_7",Le="_c_1ai01_15",Ne="_cs_1ai01_16",je="_fs_1ai01_17",Ie="_black_1ai01_21",Re="_white_1ai01_37",Me="_d_1ai01_73",He="_e_1ai01_79",qe="_f_1ai01_17",Ve="_g_1ai01_91",Ye="_a_1ai01_97",Ue="_b_1ai01_21",h={piano:xe,key:Ke,c:Le,cs:Ne,fs:je,black:Ie,white:Re,d:Me,e:He,f:qe,g:Ve,a:Ye,b:Ue};var We=b("<ul>"),Xe=b("<li tabindex=0>");function Je(e){return(()=>{var n=We();return g(n,()=>[`${h.white} ${h.c}`,`${h.black} ${h.cs}`,`${h.white} ${h.d}`,`${h.black} ${h.ds}`,`${h.white} ${h.e}`,`${h.white} ${h.f}`,`${h.black} ${h.fs}`,`${h.white} ${h.g}`,`${h.black} ${h.gs}`,`${h.white} ${h.a}`,`${h.black} ${h.s}`,`${h.white} ${h.b}`].map((t,o)=>$(Qe,{class:t,kind:o,get onClick(){return e.onClick}}))),_(()=>y(n,h.piano)),n})()}function Qe(e){return(()=>{var n=Xe();return n.$$click=()=>{var t;return(t=e.onClick)==null?void 0:t.call(e,e.kind)},_(()=>y(n,`${h.key} ${e.class}`)),n})()}le(["click"]);const Ze="_note_tyxw1_1",ze="_svg_tyxw1_5",pe="_ref_tyxw1_10",q={note:Ze,svg:ze,ref:pe};var en=b("<div id=note-oriety-vex-flow>");const nn="note-oriety-vex-flow";function tn(e){let n;const t=V(()=>J[e.signature()][e.pitchClassKind()]);return ne(o=>{if(!n)return!1;o&&(n.innerHTML="");const i=100+Ce[e.signature()]*10,s=120,c=10,l=`0 ${c} ${i} ${s-c}`,r=new te({renderer:{elementId:nn,width:i,height:s,backend:ie.SVG}}),a=r.EasyScore(),d=a.notes(`${t()}${e.octave()}/w`,{clef:e.clef});r.System().addStave({voices:[a.voice(d)]}).addClef(e.clef).addKeySignature(e.signature()),r.draw();const f=n.firstChild;return f.removeAttribute("width"),f.removeAttribute("height"),f.removeAttribute("style"),f.setAttribute("viewBox",l),f.classList.add(q.svg),n.classList.add(q.ref),!0},!1),(()=>{var o=en(),i=n;return typeof i=="function"?ce(i,o):n=o,o})()}var on=b("<main><div>");const sn={treble:1,alto:0,bass:-1};function ln(){const[e,n]=he({pitchClassKind:M(),signature:"C",altoOctave:4,outcome:{correct:0,incorrect:0},showChromatics:!0,streak:0,clef:"treble"}),t=V(()=>e.altoOctave+sn[e.clef]);function o(){let r;for(;;)if(r=e.showChromatics?M():Ae(e.signature),r!==e.pitchClassKind){n("pitchClassKind",r);break}n("altoOctave",me())}function i(r){n("showChromatics",r),o()}function s(r){if(r!==e.pitchClassKind){n("streak",0),n("outcome","incorrect",a=>a+1);return}n("streak",a=>a+1),n("outcome","correct",a=>a+1),o()}function c(r){n("clef",r)}function l(r){n("signature",r)}return(()=>{var r=on(),a=r.firstChild;return g(r,$(tn,{pitchClassKind:()=>e.pitchClassKind,signature:()=>e.signature,octave:t,get clef(){return e.clef}}),a),g(a,$(Pe,{get chromatics(){return e.showChromatics},get clef(){return e.clef},get keySignature(){return e.signature},get outcome(){return e.outcome},get streak(){return e.streak},onChangeChromatics:i,onChangeClef:c,onChangeKeySignature:l}),null),g(a,$(Je,{onClick:d=>s(d)}),null),_(d=>{var f=R.main,u=R.inputs;return f!==d.e&&y(r,d.e=f),u!==d.t&&y(a,d.t=u),d},{e:void 0,t:void 0}),r})()}se(()=>$(ln,{}),document.body);
