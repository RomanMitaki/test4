var Oe=Object.defineProperty;var ke=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ne=(e,t,n)=>(ke(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function K(){}function Ae(e){return e()}function me(){return Object.create(null)}function G(e){e.forEach(Ae)}function Ee(e){return typeof e=="function"}function Fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function je(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function ue(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function A(){return j(" ")}function L(e,t,n,u){return e.addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)}function r(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function X(e,t){e.value=t??""}let V;function D(e){V=e}function Re(){if(!V)throw new Error("Function called outside component initialization");return V}function Se(e){Re().$$.on_mount.push(e)}const U=[],ge=[];let M=[];const ve=[],Pe=Promise.resolve();let oe=!1;function Be(){oe||(oe=!0,Pe.then(Le))}function re(e){M.push(e)}const le=new Set;let I=0;function Le(){if(I!==0)return;const e=V;do{try{for(;I<U.length;){const t=U[I];I++,D(t),Ie(t.$$)}}catch(t){throw U.length=0,I=0,t}for(D(null),U.length=0,I=0;ge.length;)ge.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];le.has(n)||(le.add(n),n())}M.length=0}while(U.length);for(;ve.length;)ve.pop()();oe=!1,le.clear(),D(e)}function Ie(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}function Ue(e){const t=[],n=[];M.forEach(u=>e.indexOf(u)===-1?t.push(u):n.push(u)),n.forEach(u=>u()),M=t}const Me=new Set;function Te(e,t){e&&e.i&&(Me.delete(e),e.i(t))}function J(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function xe(e,t,n){const{fragment:u,after_update:l}=e.$$;u&&u.m(t,n),re(()=>{const o=e.$$.on_mount.map(Ae).filter(Ee);e.$$.on_destroy?e.$$.on_destroy.push(...o):G(o),e.$$.on_mount=[]}),l.forEach(re)}function He(e,t){const n=e.$$;n.fragment!==null&&(Ue(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(U.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ze(e,t,n,u,l,o,a=null,m=[-1]){const b=V;D(e);const f=e.$$={fragment:null,ctx:[],props:o,update:K,not_equal:l,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:me(),dirty:m,skip_bound:!1,root:t.target||b.$$.root};a&&a(f.root);let k=!1;if(f.ctx=n?n(e,t.props||{},(d,F,...w)=>{const E=w.length?w[0]:F;return f.ctx&&l(f.ctx[d],f.ctx[d]=E)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](E),k&&qe(e,d)),F}):[],f.update(),k=!0,G(f.before_update),f.fragment=u?u(f.ctx):!1,t.target){if(t.hydrate){const d=Ne(t.target);f.fragment&&f.fragment.l(d),d.forEach(Y)}else f.fragment&&f.fragment.c();t.intro&&Te(e.$$.fragment),xe(e,t.target,t.anchor),Le()}D(b)}class De{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){He(this,1),this.$destroy=K}$on(t,n){if(!Ee(n))return K;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(n),()=>{const l=u.indexOf(n);l!==-1&&u.splice(l,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ke="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ke);function ye(e,t,n){const u=e.slice();return u[12]=t[n],u}function be(e,t,n){const u=e.slice();return u[12]=t[n],u}function we(e){let t,n=e[12]+"",u,l;return{c(){t=_("option"),u=j(n),t.__value=l=e[12],X(t,t.__value)},m(o,a){ue(o,t,a),c(t,u)},p(o,a){a&1&&n!==(n=o[12]+"")&&W(u,n),a&1&&l!==(l=o[12])&&(t.__value=l,X(t,t.__value))},d(o){o&&Y(t)}}}function Ce(e){let t,n=e[12]+"",u,l;return{c(){t=_("option"),u=j(n),t.__value=l=e[12],X(t,t.__value)},m(o,a){ue(o,t,a),c(t,u)},p(o,a){a&1&&n!==(n=o[12]+"")&&W(u,n),a&1&&l!==(l=o[12])&&(t.__value=l,X(t,t.__value))},d(o){o&&Y(t)}}}function Ve(e){let t,n,u,l,o,a,m,b,f,k,d,F,w,E,p,h,T,x,se,N,R,S,ce,Z,ie,y,ae,O,H,fe,C,de,q,_e,ee,te,he,P=J(e[0]),g=[];for(let s=0;s<P.length;s+=1)g[s]=we(be(e,P,s));let B=J(e[0]),v=[];for(let s=0;s<B.length;s+=1)v[s]=Ce(ye(e,B,s));return{c(){t=_("main"),n=_("div"),n.innerHTML="<h1>Currency Converter</h1>",u=A(),l=_("div"),o=_("div"),a=_("div"),m=_("label"),b=j("Amount of "),f=j(e[1]),k=A(),d=_("input"),F=A(),w=_("div"),E=_("label"),E.textContent="Convert From:",p=A(),h=_("input"),T=A(),x=_("datalist");for(let s=0;s<g.length;s+=1)g[s].c();se=A(),N=_("div"),R=_("div"),S=_("label"),ce=j("Amount of "),Z=j(e[2]),ie=A(),y=_("input"),ae=A(),O=_("div"),H=_("label"),H.textContent="Convert To:",fe=A(),C=_("input"),de=A(),q=_("datalist");for(let s=0;s<v.length;s+=1)v[s].c();_e=A(),ee=_("footer"),ee.innerHTML='<a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>',r(n,"class","calc__wrapper_title svelte-moau2i"),r(m,"class","calc__label svelte-moau2i"),r(m,"for","leftAmount"),r(d,"id","leftAmount"),r(d,"class","calc__input svelte-moau2i"),r(d,"name","leftAmount"),r(d,"type","number"),r(d,"min","0"),r(d,"placeholder","Enter amount"),r(d,"maxlength","10"),d.value=e[3],r(a,"class","calc__side svelte-moau2i"),r(E,"class","calc__label svelte-moau2i"),r(E,"for","fromCurrency"),r(h,"id","fromCurrency"),r(h,"class","calc__input svelte-moau2i"),r(h,"name","fromCurrency"),r(h,"maxlength","3"),h.value=e[1],r(h,"list","fromCurrencyList"),r(x,"id","fromCurrencyList"),r(w,"class","calc__side svelte-moau2i"),r(o,"class","calc__wrapper_side svelte-moau2i"),r(S,"class","calc__label svelte-moau2i"),r(S,"for","rightAmount"),r(y,"id","rightAmount"),r(y,"class","calc__input svelte-moau2i"),r(y,"name","rightAmount"),r(y,"type","number"),r(y,"min","0"),r(y,"placeholder","Enter amount"),r(y,"maxlength","10"),y.value=e[4],r(R,"class","calc__side svelte-moau2i"),r(H,"class","calc__label svelte-moau2i"),r(H,"for","toCurrency"),r(C,"id","toCurrency"),r(C,"class","calc__input svelte-moau2i"),r(C,"name","toCurrency"),r(C,"maxlength","3"),C.value=e[2],r(C,"list","toCurrencyList"),r(q,"id","toCurrencyList"),r(O,"class","calc__side svelte-moau2i"),r(N,"class","calc__wrapper_side svelte-moau2i"),r(l,"class","calc__wrapper_sides svelte-moau2i"),r(t,"class","calc svelte-moau2i")},m(s,$){ue(s,t,$),c(t,n),c(t,u),c(t,l),c(l,o),c(o,a),c(a,m),c(m,b),c(m,f),c(a,k),c(a,d),c(o,F),c(o,w),c(w,E),c(w,p),c(w,h),c(w,T),c(w,x);for(let i=0;i<g.length;i+=1)g[i]&&g[i].m(x,null);c(l,se),c(l,N),c(N,R),c(R,S),c(S,ce),c(S,Z),c(R,ie),c(R,y),c(N,ae),c(N,O),c(O,H),c(O,fe),c(O,C),c(O,de),c(O,q);for(let i=0;i<v.length;i+=1)v[i]&&v[i].m(q,null);c(t,_e),c(t,ee),te||(he=[L(d,"input",e[5]),L(d,"focus",Q),L(h,"input",e[6]),L(h,"focus",Q),L(h,"change",e[8]),L(y,"input",e[5]),L(y,"focus",Q),L(C,"input",e[6]),L(C,"focus",Q),L(C,"change",e[7])],te=!0)},p(s,[$]){if($&2&&W(f,s[1]),$&8&&d.value!==s[3]&&(d.value=s[3]),$&2&&h.value!==s[1]&&(h.value=s[1]),$&1){P=J(s[0]);let i;for(i=0;i<P.length;i+=1){const z=be(s,P,i);g[i]?g[i].p(z,$):(g[i]=we(z),g[i].c(),g[i].m(x,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=P.length}if($&4&&W(Z,s[2]),$&16&&y.value!==s[4]&&(y.value=s[4]),$&4&&C.value!==s[2]&&(C.value=s[2]),$&1){B=J(s[0]);let i;for(i=0;i<B.length;i+=1){const z=ye(s,B,i);v[i]?v[i].p(z,$):(v[i]=Ce(z),v[i].c(),v[i].m(q,null))}for(;i<v.length;i+=1)v[i].d(1);v.length=B.length}},i:K,o:K,d(s){s&&Y(t),pe(g,s),pe(v,s),te=!1,G(he)}}}const $e="https://open.er-api.com/v6/latest";function Q(){this.select()}function Ge(e,t,n){let u=[],l="RUB",o="USD",a="1",m="0",b={},f=0;function k(p){p.target.name==="leftAmount"?(n(3,a=p.target.value),n(4,m=(+a*f).toFixed(4))):(n(4,m=p.target.value),n(3,a=(+m/f).toFixed(4)))}function d(p){p.target.name==="fromCurrency"?n(1,l=p.target.value.toUpperCase()):n(2,o=p.target.value.toUpperCase())}async function F(p){const T=await(await fetch(`${$e}/${p}`)).json();n(0,u=[...Object.keys(T.rates)].sort()),b={...T.rates},f=b[o],n(4,m=(+a*f).toFixed(4))}function w(p){f=b[o],n(4,m=(+a*f).toFixed(4))}function E(p){F(l)}return Se(async()=>{const h=await(await fetch(`${$e}/${l}`)).json();n(0,u=[...Object.keys(h.rates)].sort()),b={...h.rates},f=b[o]}),[u,l,o,a,m,k,d,w,E]}class Je extends De{constructor(t){super(),ze(this,t,Ge,Ve,Fe,{})}}new Je({target:document.getElementById("app")});
